# Herramientas para PaaS

## ¿Qué nos ofrecen OpenShift y Heroku?

Ambas son platataformas de desarrollo con carácteristicas Cloud Computing de la capa PaaS. Ofrecen infraestructuras para implantar nuestra aplicaciones con distintos lenguajes.

#### Openshift

Es la plataforma de desarrollo de Paas creada por Red Hat. Cuenta con 50 company stacks y 52 developers stacks.
- Soporta variedad de lenguajes como Node, Go, Java, Ruby, Python..
- Soporta bd como MySql, PostgreeSQL, MongoDB, MS SQL SERVER
- Funciona sobre RHEL
- Uso de cartuchos como entornos de ejecución y gears como contenedores.
- Es un Open source con 915 estrellas de GitHub y 563 GitHUb forks.
- Para su uso hay que crearse una cuenta, instalar las herramientas, preparar el entorno, crear la aplicación y hacer los cambios y publicaiones necesarias.

#### Heroku

Es uno de los PaaS mas usados. Cuenta con 1504 company stacks y 961 developers stacks.
- Soporta Ruby, Java, Node.js, Python, PHP...
- Las BD usan por defecto PostgreeSQL pero se pueden añadir otros a través de add-ons.
- Cuenta con un mayor número de add-ons que OpenShift.
- Cuenta con una herramienta de lineas de comandos para la gestión: Heroku toolbelt.

Mi elección será Heroku, ya que cubre las necesidades para nuestra aplicación y además siguiendo la documentación, podemos iniciarla de forma sencilla. Además es la más usada por empresas, de forma que nos será más útil tener conocimiento sobre ella para nuestro futuro.

## Configuración para despliegue automático con Heroku

Para la configuración de Heroku usaré los pasos seguidos en los ejercicios de autoevaluación. Una vez realizada toda la instalación de heroku, usamos el comando ~~~ heroku create ~~~ para la aplicación. Para nuestro despligue usaremos el archivo [Procfile](../Procfile) en el que indicaremos el archivo que tiene que ejecutarse. Para realizar el despliegue solo tenemos que ejecutar ~~~ git push heroku master ~~~.

Por otro lado, Heroku nos permite enlazar nuestro repositorio de GitHub de forma que cada vez que hagamos un push se reconstruya y se vuelva a desplegar nuestra app. También nos ofrece la opción de asegurarnos de que se han pasado los tests para realizar el despliegue.

![](./imagenes/aut_heroku.png)
