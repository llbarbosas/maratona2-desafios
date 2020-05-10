FROM node:14.1-alpine

WORKDIR /usr/src/app

COPY yarn.lock ./
COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000
ENTRYPOINT [ "yarn", "start:prod" ]