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

RUN DEBIAN_FRONTEND=noninteractive TZ=America/Sao_Paulo apt-get -y install tzdata

RUN apt update

RUN apt install nginx -y
#RUN apt install vim -y (nao necessario devido ao comando abaixo)
#RUN echo 'server { listen 80; server_name localhost; root /app; index index.html; location / { try_files $uri $uri/ =404; } }' > /etc/nginx/conf.d/website.conf

RUN cat << 'EOT' > /etc/nginx/conf.d/website.conf
server {
    listen 80;
    server_name localhost;

    root /app;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
EOT