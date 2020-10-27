## Buenas prácticas

> Archivo dockerfile

Elecció de imagen base adecuada para Node:
~~~
FROM node:15.0.1-alpine3.10
~~~

Uso de metadatos:
~~~
Label maintainer="Francisco Javier Torres Barea" version="1.0" 
~~~

Hemos declarado el directorio donde trabajaremos:
~~~
WORKDIR /app
~~~

He usado COPY en lugar de ADD:
~~~
COPY package.json ./
~~~

Instalación de las dependencias necesarias y creación del usuario:
~~~
RUN npm install
RUN npm install -g jest
RUN adduser -D menu
~~~

Uso de CMD:
~~~
CMD npm run test
~~~
