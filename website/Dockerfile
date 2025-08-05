FROM node:22.16.0-bookworm AS build

WORKDIR app
COPY package.json .
COPY index.html .
COPY vite.config.ts .
COPY tsconfig.json .
COPY tsconfig.app.json .
COPY tsconfig.node.json .

WORKDIR src 
COPY src .

WORKDIR "/app" 
RUN npm install

RUN npm run build 

FROM ubuntu:25.04

WORKDIR app
COPY --from=build /app/dist .

RUN apt update

RUN apt install nginx -y
