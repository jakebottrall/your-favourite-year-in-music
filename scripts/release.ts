import dayjs from "dayjs";
import { exec } from "node:child_process";
import fs from "node:fs";
import { promisify } from "node:util";
import prettier from "prettier";
import packageJSON from "../package.json";

const asyncExec = promisify(exec);

try {
  const version = await bumpVersions();
  await commit(version);
  await tag(version);
  await push();
  await createNewRelease(version);
} catch (error) {
  console.error(error);
} finally {
  process.exit();
}

async function bumpVersions() {
  const currentVersion = packageJSON.version;
  const currentVersionSplit = currentVersion.split(".");

  const currentYear = Number(currentVersionSplit[0]);
  const currentMonth = Number(currentVersionSplit[1]);
  const currentIteration = Number(currentVersionSplit[2]);

  const nextYear = dayjs().year();
  const nextMonth = dayjs().month() + 1;

  const nextIteration =
    currentYear === nextYear && currentMonth === nextMonth
      ? currentIteration + 1
      : 1;

  const nextVersion = `${nextYear}.${nextMonth}.${nextIteration}`;

  console.log(`bumping versions to v${nextVersion}`);

  const updatedPackageJSON = JSON.stringify({
    ...packageJSON,
    version: nextVersion,
  });

  const prettierPackageJSON = await prettier.format(updatedPackageJSON, {
    parser: "json",
  });

  fs.writeFileSync(`package.json`, prettierPackageJSON);

  console.log("versions bumped ✅");

  return nextVersion;
}

async function commit(version: string) {
  console.log("comitting changes...");
  await asyncExec("git add .");
  await asyncExec(`git commit -m "v${version}"`);
  console.log("changes comitted ✅");
}

async function tag(version: string) {
  console.log("tagging commit...");
  await asyncExec(`git tag -a v${version} -m ${version}`);
  console.log("commit tagged ✅");
}

async function push() {
  console.log("pushing changes...");
  await asyncExec("git push");
  console.log("changes pushed ✅");
}

async function createNewRelease(version: string) {
  console.log("creating new release...");
  await asyncExec(`gh release create v${version} --generate-notes`);
  console.log("new release created ✅");
}
