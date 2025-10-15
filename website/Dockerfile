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

RUN DEBIAN_FRONTEND=noninteractive TZ=America/Sao_Paulo apt-get -y install tzdata

RUN apt install nginx sudo -y

COPY docker/nginx.conf /etc/nginx/nginx.conf

#RUN cat << 'EOF' > /etc/nginx/conf.d/website.conf \
#server { \
#    listen 80; \
 #   server_name localhost; \
 #   root /app; \
  #  index index.html; \
  #  location / { \
 #       try_files $uri $uri/ =404; \
 #   } \
#} \
#EOF;

COPY docker/website.conf /etc/nginx/conf.d/website.conf

RUN useradd esf-user
RUN mkdir /var/run/nginx
RUN chown esf-user:esf-user -R /var/lib/nginx
RUN chown esf-user:esf-user -R /var/log/nginx
RUN chown esf-user:esf-user -R /var/run/nginx
RUN echo "esf-user ALL=(root) /sbin/nginx" > /etc/sudoers.d/esf-user.sudoers
USER esf-user

ENTRYPOINT ["/sbin/nginx"]

CMD ["-g", "daemon off;"]