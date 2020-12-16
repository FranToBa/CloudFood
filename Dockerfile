FROM node:14-alpine

Label maintainer="Francisco Javier Torres Barea" version="1.0" 

RUN mkdir node_modules \
    && chown -R node node_modules \
    && chown -R node /usr/local/bin \
    && chown -R node /usr/local/lib/node_modules \
    && apk add --update nodejs npm make \
    && npm i -g grunt-cli grunt-run

COPY package.json ./
COPY Gruntfile.js ./

USER node

RUN npm install

VOLUME /test
WORKDIR /test

USER root
RUN chown -R node /test

USER node
ENV PATH=/node_modules/.bin:$PATH

CMD ["grunt","test"]

