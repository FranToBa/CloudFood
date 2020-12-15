FROM node:15.0.1-alpine3.10

Label maintainer="Francisco Javier Torres Barea" version="1.0" 



RUN npm i -g grunt-cli grunt-run supertest express && mkdir /node_modules && chmod 755 /node_modules && chown node /node_modules

USER node
RUN chown -R node /test
COPY --chown=node package*.json ./
COPY  Gruntfile.js ./
RUN npm ci



USER root
RUN rm package*.json


VOLUME /test
WORKDIR /test

ENV PATH /node_modules/.bin:$PATH 

# para ejecutar los test
CMD ["grunt","test"]

