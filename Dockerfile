FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm" \
    PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json pnpm-lock.yaml /temp/dev/
RUN cd /temp/dev && pnpm install --frozen-lockfile

FROM install AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY ./ ./

ARG VITE_CLIENT_ID
ARG VITE_REDIRECT_URI

RUN pnpm run build

FROM base AS release
COPY --from=prerelease /app/dist/ .