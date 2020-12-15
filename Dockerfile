FROM node:15.0.1-alpine3.10

Label maintainer="Francisco Javier Torres Barea" version="1.0" 



RUN npm i -g grunt-cli grunt-run supertest express && mkdir /node_modules && chmod 755 /node_modules && chown node /node_modules

USER node

COPY --chown=node package*.json ./
COPY  Gruntfile.js ./
RUN npm install



USER root



VOLUME /test
WORKDIR /test

RUN chown -R node /test

ENV PATH /node_modules/.bin:$PATH 

# para ejecutar los test
CMD ["grunt","test"]

