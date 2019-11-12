FROM node:12-alpine

WORKDIR /app

COPY . /app

RUN ["npm", "install"]

RUN [ "npm", "i", "-g", "serve"]

RUN [ "npm", "run", "build"]

ENTRYPOINT ["sh", "-c", "/app/docker-entrypoint.sh"]
