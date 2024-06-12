FROM node:18-alpine

RUN npm install -g pnpm

WORKDIR /app/cra

COPY cra/package.json ./

RUN pnpm install

WORKDIR /app

COPY . ./

CMD ["pnpm", "start"]

