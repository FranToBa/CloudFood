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

Para la ejecución de los tests a partir de un contenedor debemos:
~~~
- Descargar este repositorio y situarnos en él.
- docker run -t -v `pwd`:/test frantoba/cloudfood
~~~

## Integración continua

1. Integración continua funcionando y [correcta justificación](./docs/travis_info.md) de la misma: Travis.
2. [Configuración de algún sistema de integración continua adicional](./docs/circleci_info.md): CircleCI.
3. Uso correcto del gestor de tareas en todos los casos anteriores. [Consultar aquí](./docs/icontinua_gestor.md).
4. Aprovechamiento del contenedor de Docker en alguno de los sistemas de CI. [Consultar aquí](./docs/icontinua_docker.md).
5. Avance de código:
	#### Clase [menu](./src/menu.js)
	- Se ha incluído vectores indexados en los que se asocia un precio diferente a cada uno de los distintos platos, diferenciando entre entrantes, platos principales y postres. (Issue #21)
	- Para la consulta de los precios se han añadido los siguientes métodos (Issue #23):
		- Método para consultar los precios de los entrantes. 
		- Método para consultar los precios de los platos principales.
		- Método para consultar los precios de los postres.

	#### [Tests](./tests/menu.test.js)
	- Se han incluido a los tests las comprobaciones sobre los métodos añadidos de consulta de precios. (Issue #24)
 




## Enlaces de interes

#### Documentación
- [Configuración incial de git](./docs/configuracion_inicial.md).
- [Pasos seguidos](./docs/pasos.md).
- [Herramientas](./docs/herramientas.md).

#### Índices de rúbricas pasadas
- [Justificación de gestores](./docs/just_her.md).
- [Índice sobre información de DOCKER](./docs/indicedocker.md).

#### Progreso
- Carpeta de [código](./src) del proyecto.
- Carpeta de [tests](./tests).
- [Historias de usuario](https://github.com/FranToBa/CloudFood/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories)
- [Issues cerrados](https://github.com/FranToBa/CloudFood/issues?q=is%3Aissue+is%3Aclosed)
- [Milestones](https://github.com/FranToBa/CloudFood/milestones)




## Autor
[Francisco Javier Torres Barea](https://github.com/FranToBa)


