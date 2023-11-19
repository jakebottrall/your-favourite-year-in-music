FROM oven/bun:1 as base

WORKDIR /app

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

FROM install AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY ./ ./

ARG VITE_CLIENT_ID
ARG VITE_REDIRECT_URI
ENV VITE_CLIENT_ID=$VITE_CLIENT_ID
ENV VITE_REDIRECT_URI=$VITE_REDIRECT_URI

RUN bun run build

FROM base AS release
COPY --from=prerelease /app/dist/ .