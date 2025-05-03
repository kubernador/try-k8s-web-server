FROM node:22-alpine AS build

RUN apk add bash

WORKDIR /server

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npx prisma generate

RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]