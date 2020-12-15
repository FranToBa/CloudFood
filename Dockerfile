FROM node:15.0.1-alpine3.10

Label maintainer="Francisco Javier Torres Barea" version="1.0" 


RUN mkdir /node_modules && chmod 755 /node_modules && chown node /node_modules


# Copiar el fichero de configuración a nuestra imagen
COPY package.json ./
COPY Gruntfile.js ./

USER node

# Instalar las dependencias necesarias y crear usuario
RUN npm install && npm install -g jest && npm install -g grunt-cli


# Runtime
VOLUME /test
WORKDIR /test

RUN chown -R node /test


CMD ["grunt","test"]

