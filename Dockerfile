FROM node:15.0.1-alpine3.10

Label maintainer="Francisco Javier Torres Barea" version="1.0" 
    

# Directorio donde trabajaremos
WORKDIR /app

# Copiar el fichero de configuración a nuestra imagen
COPY package.json ./
COPY Gruntfile.js ./

# Instalar las dependencias necesarias y crear usuario
RUN npm install && npm install -g jest && npm install -g grunt-cli
RUN adduser -D menu

# Runtime
VOLUME /test
USER menu
WORKDIR /test


CMD ["grunt","test"]

