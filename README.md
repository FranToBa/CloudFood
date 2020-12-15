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
$ grunt test
~~~

Para la ejecución de los tests a partir de un contenedor debemos:
~~~
- Descargar este repositorio y situarnos en él.
- docker run -t -v `pwd`:/test frantoba/cloudfood
~~~

## Microservicios

- 1- Justificación y usa del framework elegido. Consultar esta [documentación](./docs/express.md).
- 2, 3 y 4- [Documentación](./docs/microapi.md) sobre la [API](./src/index.js) creada, uso de buenas prácticas y los [tests](./tests/index.test.js) correspondientes.

- Avance de código:
	- Se ha modificado la clase [menu.js](./src/menu.js) creando un constructor al que no haya que indicarle los platos, añadiendo setters para los platos ([Issue #51](https://github.com/FranToBa/CloudFood/issues/51)).
	- Se ha añadido un nuevo método que devuelve el tipo de un plato específico.
	- Se ha añadido un nuevo método relacionado con la [HU06](https://github.com/FranToBa/CloudFood/issues/22) que devuelve el precio de un plato específico, usando el método anterior sobre el tipo de plato y devolviendo su precio ([Issue #46](https://github.com/FranToBa/CloudFood/issues/46)).



## Enlaces de interes

#### Índices de rúbricas pasadas
- [Justificación de gestores](./docs/just_her.md).
- [Índice sobre información de DOCKER](./docs/indicedocker.md).
- [Integración continua](./docs/icont.md)
- [Serverless](./docs/serverless.md)

#### Documentación
- [Configuración incial de git](./docs/configuracion_inicial.md).
- [Pasos seguidos](./docs/pasos.md).
- [Herramientas](./docs/herramientas.md).

#### Progreso
- Carpeta de [código](./src) del proyecto.
- Carpeta de [tests](./tests).
- [Historias de usuario](https://github.com/FranToBa/CloudFood/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories)
- [Issues cerrados](https://github.com/FranToBa/CloudFood/issues?q=is%3Aissue+is%3Aclosed)
- [Milestones](https://github.com/FranToBa/CloudFood/milestones)




## Autor
[Francisco Javier Torres Barea](https://github.com/FranToBa)


