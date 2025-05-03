FROM node:22-alpine AS build

WORKDIR /server

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npx prisma generate

RUN npm run build

ENTRYPOINT [ "node", "build/index.js" ]