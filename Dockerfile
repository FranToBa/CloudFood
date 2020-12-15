FROM alpine:3.10.5

Label maintainer="Francisco Javier Torres Barea" version="1.0" 

RUN adduser -S node

RUN mkdir node_modules \
    && chown -R node node_modules \
    && apk add --update nodejs npm make \
    && npm i -g grunt-cli grunt-run


USER node

COPY package.json ./


RUN npm install && rm -rf /var/lib/apt/lists/*

USER root

RUN rm package.json

WORKDIR /test

RUN chown -R node /test

USER node


ENV PATH=/node_modules/.bin:$PATH


CMD ["grunt","test"]

