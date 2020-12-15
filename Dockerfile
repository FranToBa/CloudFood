FROM node:15.0.1-alpine3.10

Label maintainer="Francisco Javier Torres Barea" version="1.0" 



RUN mkdir /node_modules 

RUN chown -R node /node_modules && chown -R node /usr/local/lib/node_modules && chown -R node /usr/local/bin 


COPY  Gruntfile.js ./
COPY   package.json ./

USER node


RUN npm install && npm install -g jest-cli && npm install -g grunt-cli 


VOLUME /test
WORKDIR /test

ENV PATH /node_modules/.bin:$PATH 

# para ejecutar los test
CMD ["grunt","test"]

