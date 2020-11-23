> Integración continua

1. Integración continua funcionando y [correcta justificación](./travis_info.md) de la misma: Travis. **Usaré Travis para probar mi contenedor**.

2. [Configuración de algún sistema de integración continua adicional](./shippable_info.md): Shippable. **Usaré Shippable para probar diferentes versiones de node**.

3. Hasta este punto del proyecto, npm cumple todos los requisitos para ejercer como gestor de tareas. En el [archivo de configuración de travis](../.travis.yml), usamos nuestro contenedor de Docker. Nuestro contenedor se encarga. a través de nuestro Dockerfile, se instalar las dependencias necesarias y jest a traves de npm.
En el [archivo de shippable](../.shippable.yml), instalamos dependencias, jest y ejecutamos los tests a través de npm.

4. Aprovechamiento del contenedor de Docker en alguno de los sistemas de CI. Se ha usado en Travis y se puede consultar en la [justificación de Travis](./travis_info.md) ya mencionada.
