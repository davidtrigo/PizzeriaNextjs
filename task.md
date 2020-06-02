estructura  propuesta

pages
    api
    index.js
public
src
    domain
    application
    infraestructura


validator     uservalidator
infraestructure  promisify
domain



    1. Crear un componente que si el usuario está logeado
   Muestra su nombre y un botón logout

2. Si se hace logout se borra del indexdb después de hacer
   logout en el servidor

3. Si esta en logout poder hacer login
    mostrar  boton login si no existe indexdb     get(clave) obtener el nombre del uario , (name)
    mostrar  boton logout si existe indexdb y destuirlo con  del(clave)