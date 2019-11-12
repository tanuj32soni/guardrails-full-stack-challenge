FROM node:12-alpine

WORKDIR /app

COPY . /app

RUN ["apk", "add", "git"]

RUN ["npm", "install"]

ENTRYPOINT ["sh", "-c", "/app/docker-entrypoint.sh"]
