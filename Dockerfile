FROM node:15.0.1-alpine3.10

Label maintainer="Francisco Javier Torres Barea" version="1.0" 
    

# Directorio donde trabajaremos
WORKDIR /app

# Copiar el fichero de configuración a nuestra imagen
COPY package.json ./

# Instalar las dependencias necesarias y crear usuario
RUN npm install
RUN npm install -g jest
RUN adduser -D menu

# Runtime
VOLUME /test
USER menu
WORKDIR /test

ENV PATH=/proyecto/node_modules/.bin:$PATH

CMD npm run test

