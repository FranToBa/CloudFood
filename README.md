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

## Uso de sistemas serverless

- 1 y 2. Despliegue correcto (Vercel) y funcionando e integración dentro del proyecto general. Consultar esta [documentación](./docs/vercel.md).
- 3 Y 4. Uso de otra plataforma de despliegue (Netlify) y creación de bot. Consultar esta [documentación](./docs/netlify.md).



## Enlaces de interes

#### Documentación
- [Configuración incial de git](./docs/configuracion_inicial.md).
- [Pasos seguidos](./docs/pasos.md).
- [Herramientas](./docs/herramientas.md).

#### Índices de rúbricas pasadas
- [Justificación de gestores](./docs/just_her.md).
- [Índice sobre información de DOCKER](./docs/indicedocker.md).
- [Integración continua](./docs/icont.md)

#### Progreso
- Carpeta de [código](./src) del proyecto.
- Carpeta de [tests](./tests).
- [Historias de usuario](https://github.com/FranToBa/CloudFood/issues?q=is%3Aopen+is%3Aissue+label%3Auser-stories)
- [Issues cerrados](https://github.com/FranToBa/CloudFood/issues?q=is%3Aissue+is%3Aclosed)
- [Milestones](https://github.com/FranToBa/CloudFood/milestones)




## Autor
[Francisco Javier Torres Barea](https://github.com/FranToBa)


