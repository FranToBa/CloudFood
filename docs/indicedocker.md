## Docker

Para la ejecución de los tests a partir de un contenedor debemos:
~~~
- Descargar este repositorio y situarnos en él.
- docker run -t -v `pwd`:/test frantoba/cloudfood
~~~

- Justificación del [contenedor base](./imagendocker.md).
- [Dockerfile](../Dockerfile) siguiendo [buenas prácticas](./buenaspracticas.md).
- Contenedor subido a [DockerHub](https://hub.docker.com/r/frantoba/cloudfood) y [documentación de la actualización automática](./actautomatica_docker.md).
- [Documentación de GitHub Container Registry](./ghcr.md). Puede acceder a mi contenedor de GHCR [aquí](https://github.com/users/FranToBa/packages/container/package/cloudfood).

