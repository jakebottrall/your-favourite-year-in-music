import dayjs from 'dayjs';
import prettier from 'prettier';
import packageJSON from '../package.json';

const workingDir = import.meta.dir.replace('src', '');

const bumpVersions = async () => {
  const currentVersion = packageJSON.version;
  const currentVersionSplit = currentVersion.split('.');

  const currentYear = Number(currentVersionSplit[0]);
  const currentMonth = Number(currentVersionSplit[1]);
  const currentIteration = Number(currentVersionSplit[2]);

  const nextYear = dayjs().year();
  const nextMonth = dayjs().month() + 1;

  const nextIteration =
    currentYear === nextYear && currentMonth === nextMonth ? currentIteration + 1 : 1;

  const nextVersion = `${nextYear}.${nextMonth}.${nextIteration}`;

  console.log(`bumping versions to v${nextVersion}`);

  const newRootPackageJSON = { ...packageJSON, version: nextVersion };

  await Bun.write(`${workingDir}/package.json`, JSON.stringify(newRootPackageJSON, null, 2));
  await prettier.format(`${workingDir}/package.json`, { parser: 'json' });

  console.log('versions bumped ✅');

  return nextVersion;
};

const commit = async (version: string) => {
  console.log('comitting changes...');
  await Bun.spawn(['git', 'add', '.']).exited;
  await Bun.spawn(['git', 'commit', '-m', `v${version}`]).exited;
  console.log('changes comitted ✅');
};

const tag = async (version: string) => {
  console.log('tagging commit...');
  await Bun.spawn(['git', 'tag', '-a', `v${version}`, '-m', `${version}`]).exited;
  console.log('commit tagged ✅');
};

const push = async () => {
  console.log('pushing changes...');
  await Bun.spawn(['git', 'push']).exited;
  console.log('changes pushed ✅');
};

const createNewRelease = async (version: string) => {
  console.log('creating new release...');
  await Bun.spawn(['gh', 'release', 'create', `v${version}`, '--generate-notes']).exited;
  console.log('new release created ✅');
};

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
