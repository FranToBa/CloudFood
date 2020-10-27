# CloudFood
> Repositorio para el proyecto de IV-20-21 de Francisco Javier Torres Barea

## Descripción

¿Por qué este proyecto? Por facilitar la tarea de los pedidos de comida actualmente, realizándolos de una manera sencilla y efectiva.

El objetivo es crear una API sobre comida de restaurantes, basada en la consulta de los menús de tu restaurantes favoritos y reserva de los mismos, pudiendo aplicar filtros en base a lo que te apetezca comer. Podrás consultar menús completos, incluyendo primer plato, segundo plato y postre. Cuando hayas seleccionado tu menú, podrás realizar el pedido y ¡a disfrutar!.

## Instalación y tests
Instalación de dependencias:
~~~
$ npm install
~~~
Ejecución de tests:
~~~
$ npm test
~~~

## Docker

Para la ejecución de los tests a partir de un contenedor debemos:
~~~
- Descargar este repositorio y situarnos en él.
- docker run -t -v `pwd`:/test frantoba/cloudfood
~~~

- Justificación del [contenedor base](./docs/imagendocker.md).
- [Dockerfile](./Dockerfile) siguiendo [buenas prácticas](./docs/buenaspracticas.md).
- Contenedor subido a [DockerHub](https://hub.docker.com/r/frantoba/cloudfood) y [documentación de la actualización automática](actautomatica_docker.md).
- [Documentación de GitHub Container Registry](ghcr.md). Puede acceder a mi contenedor de GHCR [aquí](https://github.com/users/FranToBa/packages/container/package/cloudfood).
- Las pruebas y buenas prácticas para la justificación del contenedor base puede consultarlas [aquí](./docs/imagendocker.md).


## Justificación de Herramientas

- Gestor de paquetes/herramienta de construcción: **npm**. Se puede consultar la justificación individualizada en [npm.md](./docs/npm.md).
- Tests: **Jest**. Se puede consultar la justificación individualizada en [jest.md](./docs/jest.md).

- Lenguaje: JavaScript.
- BD: MySql.
- Log: Winston.

Para mas información sobre las herramientas anteriores acceder a [herramientas](./docs/herramientas.md).




## Documentación
- [Configuración incial de git](./docs/configuracion_inicial.md)
- [Pasos seguidos](./docs/pasos.md)
- [Herramientas](./docs/herramientas.md)


## Progreso
- Carpeta de [código](./src) del pryecto
	- Clase [menu.js](./src/menu.js)
- Carpeta de [tests](./tests)
	- Test [menu.test.js](./tests/menu.test.js)

- [Historias de usuario](https://github.com/FranToBa/CloudFood/issues)
	- [HU01:](https://github.com/FranToBa/CloudFood/issues/2) consultar menú
	- [HU02:](https://github.com/FranToBa/CloudFood/issues/3) seleccionar menu
	- [HU03:](https://github.com/FranToBa/CloudFood/issues/4) pedido

- Issues cerrados
	- Issues [H1](https://github.com/FranToBa/CloudFood/milestone/1?closed=1)
	- Issues [H2](https://github.com/FranToBa/CloudFood/milestone/2?closed=1)
	- Issues [H3](https://github.com/FranToBa/CloudFood/milestone/3?closed=1)

	 
- [Milestones](https://github.com/FranToBa/CloudFood/milestones)



## Autor
[Francisco Javier Torres Barea](https://github.com/FranToBa)


