FROM node:14.1-alpine

RUN apk add --update-cache python sqlite socat gcc g++ make

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000
ENTRYPOINT  [ "yarn", "start:prod" ]