1. crear next     x   
2. muevo las carpetas   x
3. instalo 
    "express-validator": "^6.5.0",  x 
    "jsonwebtoken": "^8.5.1",x
    "redis": "^3.0.2",   x
    "nanoid"    x

4. dominio cambio el uuid por nanoid   x

5. instalar la next-connect        x
    sustituir el controlador por un controlador de next


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


https://github.com/ai/nanoid   x

import { nanoid } from 'nanoid'
model.id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqLJ"




 redis cli       x


xendor88
todos los metodos de redis y convertilo en promesas   x


function  cliente / getClient


1 proyecto next
parte user

servicio application

https://github.com/Xendor88/Pizzeria.node.js/blob/master/application/userservice.js     x
https://github.com/Xendor88/Pizzeria.node.js/blob/master/validators/uservalidator.js x

 https://github.com/Xendor88/Pizzeria.node.js/blob/master/utils/validatormiddelware.js   x

La tecnica del repositorio

https://github.com/Xendor88/Pizzeria.node.js/blob/master/infraestructure/userrepository.js   x


https://github.com/Xendor88/Pizzeria.node.js/blob/master/domain/user.js    --- se debe cambiar 

controlador en api de next


const util = require('util');   




{
	user:{
		name:'xxxx'
		email:'xxxx'
	},
	token:jwt
	espires:tokem
	refreshtoken: nanoid()
	
}

redis --> guardo datos de session

implementar logot
	borra sesion redis
implementar refresh

autorization bearer jwt



domain  usersesion
        sessionrepository
        sessionservice


//1. Leer secuencialmente todos la carpeta validators y crear un objeto
   con la siguiente estructura, que incluya todas las validaciones
   solamente incluira las que tengan builder
   /validation
   {
      USERVALIDATOREGISTER:{
          email:[
             normalizeEmail:[undefined]
             isEmail:[undefined]
          ],
          password:[
            isAlfanumeric:[undefined],
            isLength:[{ min: 1, max: 50 }]
      ]
      }
      USERVALIDATOLOGIN:{}
   }
instalar glob  x
https://stackoverflow.com/questions/41462606/get-all-files-recursively-in-directories-nodejs
https://www.npmjs.com/package/glob

   validatorservice
   api/validator

   builder
    stack