FROM node:15.0.1-alpine3.10

Label maintainer="Francisco Javier Torres Barea" version="1.0" 

RUN adduser -S usuario

RUN mkdir node_modules \
    && chown -R usuario node_modules \
    && apk add --update nodejs npm make \
    && npm i -g grunt-cli grunt-run


USER usuario


COPY package.json ./


RUN npm install && rm -rf /var/lib/apt/lists/*

USER root


RUN rm package.json


USER usuario


ENV PATH=/node_modules/.bin:$PATH

WORKDIR /test

CMD ["grunt","test"]

