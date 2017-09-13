FROM node:8.2.1
MAINTAINER Ives van Hoorne

ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock

WORKDIR /app
RUN yarn install

# After yarn install, so dev deps are also installed (for building)

ENV NODE_ENV production

ADD . /app
RUN npm run build
