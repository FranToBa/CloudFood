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

## PaaS

- [Descripción y justificación](./docs/just_paas.md) de las herramientas usadas para desplegar la aplicación en en PaaS y descripción correcta de la configuración para despliegue automático, desde el repositorio o desde el sistema de integración continua.

- Funcionamiento correcto del despliegue en el PaaS (no sólo el status). Es decir, no se puede devolver ningún status 500. Buenas prácticas en el diseño del API, incluyendo su correspondencia correcta con diferentes HUs. Consultar [aquí](./docs/func_paas.md)

- Uso correcto de bases de datos y logs dentro del PaaS, incluyendo su justificación y pruebas de prestaciones, así como avance general y grado de terminación de la aplicación. Consultar [aquí](./docs/bd_paas.md)



## Enlaces de interes

#### Índices de rúbricas pasadas
- [Justificación de gestores](./docs/just_her.md).
- [Índice sobre información de DOCKER](./docs/indicedocker.md).
- [Integración continua](./docs/icont.md)
- [Serverless](./docs/serverless.md)
- [Microservicios](./docs/microservicios.md)


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
