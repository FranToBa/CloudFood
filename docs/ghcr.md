# GitHub Container Registry

Para subir nuestro contener a GHCR debemos realizar lo siguiente:

- Cambiar el tag de nuestra imagen al formato ghcr.io/PROPIETARIO/NOMBRE_IMAGEN
- Para logearme en ghcr, recibía un error por lo que busqué información y decidí crear un token. Este token lo creo desde la configuración de desarrollador de GitHub.
- Nos logueamos con el token: 
~~~
echo $TOKEN | docker login ghcr.io -u USERNAME --password-stdin
~~~
- Por último, subimos nuestra imagen: 
~~~
docker push ghcr.io/PROPIETARIO/NOMBRE_IMAGEN:VERSION
~~~

-Para finalizar, ponemos la visibilidad del contenedor a pública y lo conectamos con el repositorio. Para acceder a él pulse [aquí](https://github.com/users/FranToBa/packages/container/package/cloudfood).
