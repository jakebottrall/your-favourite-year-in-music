# Base image
FROM node:16-alpine
RUN apk update && apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set up project
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY ./ ./

ARG VITE_CLIENT_ID
ARG VITE_REDIRECT_URI

ENV VITE_CLIENT_ID=$VITE_CLIENT_ID
ENV VITE_REDIRECT_URI=$VITE_REDIRECT_URI

RUN pnpm build

# Start server
EXPOSE 8080
ENV NODE_ENV production
CMD ["pnpm", "start"]