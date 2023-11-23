# FrontCrudExamenAse

Proyecto backend encargado de la creación, consulta y administración de usuarios registrados en una base de datos en SQL Server.
Utiliza tecnologias como NodeJS, Babel y nodemon para facilitar la ejecución de este en su modo Development Server.

## Development server
Para iniciar el proyecto despues de clonarlo, correr el comando `npm install` para agregar las dependencias en el Package.json.
Despues correr el comando `npm run dev` para levantar el servidor en su modo Desarrollo.
Para mandar peticiones a la API, la URL que se necesita es `http://localhost:3000/users`.

## IMPORTANTE ANTES DE CORRER LA API
En la carpeta raiz, se encuentra un documento llamado `.envTemplate`. Es necesario renombrar dicho archivo y dejarlo como `.env`.
Lo anterior porque del archivo .env es de donde se toman las variables globales para realizar la conexión a la base de datos, 
al igual que para obtener el puerto en que se levantará la misma API.

También es importante asignar a las variables que vienen en ese documento los valores correspondientes a tu base de datos y servidor 
para poder que la API pueda ser consumida correctamente y retorne los valores esperados.
