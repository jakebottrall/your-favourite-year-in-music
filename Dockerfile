# Stage 1: Build
FROM node:16-alpine AS build

WORKDIR /app

RUN apk update && \
    apk add --no-cache libc6-compat && \
    corepack enable && \
    corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY ./ ./

ARG VITE_CLIENT_ID
ARG VITE_REDIRECT_URI
ENV VITE_CLIENT_ID=$VITE_CLIENT_ID
ENV VITE_REDIRECT_URI=$VITE_REDIRECT_URI

RUN pnpm build

# Stage 2: Production
FROM node:16-alpine

WORKDIR /app

COPY --from=build /app .
EXPOSE 8080
CMD ["pnpm", "start"]