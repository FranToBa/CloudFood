> Gestor de paquetes / herramienta de construcción

Npm es el sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript. Con npm podremos instalar y desinstalar paquetes, gestionar versiones y gestionar dependencias necesarias para ejecutar un proyecto.

Para npm, necesitamos node. Para ver si los tenemos instalados, usamos los comandos:
~~~
$ node -v
$ npm -v
~~~

Si no los tenemos instalados, debemos descargarnos Node del sitio web de node.js y seguir las instrucciones del instalador.
Npm puede ser instalado con el siguiente comando:

~~~
$ curl https://npmjs.org/install.sh | sh
~~~


Lo he escogido porque he encontrado bastante documentación sobre ella. Sobre todo me gusta su sensillez y la facilidad para administrar dependencias. 
Npm también te permite crear el fichero package.json, cuando realizas:
~~~
$ npm init
~~~
Este archivo da una descripción detallada de tu proyecto.


