FROM node:8.14-alpine

COPY . /app

WORKDIR /app

RUN npm install jsonwebtoken

ENTRYPOINT ["node", "index.js"]
