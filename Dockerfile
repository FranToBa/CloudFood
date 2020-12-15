FROM alpine:3.10.5

Label maintainer="Francisco Javier Torres Barea" version="1.0" 

RUN adduser -S usuario

RUN mkdir node_modules \
    && chown -R usuario node_modules \
    && apk add --update nodejs npm make \
    && npm i -g grunt-cli grunt-run

COPY package.json ./
COPY Gruntfile.js ./

USER usuario

COPY package.json ./

RUN npm install && rm -rf /var/lib/apt/lists/*

USER root

RUN rm package.json
RUN chown -R usuario /test


USER usuario

VOLUME /test
WORKDIR /test


ENV PATH=/node_modules/.bin:$PATH

CMD ["grunt","test"]

