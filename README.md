# Plantilla de Express y TypeORM en VanillaJs

Este proyecto es una API REST simple construida con Express.js para administrar tareas. Proporciona endpoints para crear, leer, actualizar y eliminar tareas. Utiliza TypeORM para la persistencia de datos en una base de datos PostgreSQL. Las pruebas unitarias están implementadas con Jest y Supertest.

## Archivos

Este proyecto de API REST para gestionar tareas usa Express.js y tiene la siguiente estructura de archivos importantes:

- `app.js`: Este es el archivo principal de la aplicación Express.js. Define las rutas, middlewares y la lógica de manejo de peticiones. Inicializa la conexión a la base de datos, define los endpoints para la gestión de tareas (CRUD) y maneja las respuestas. Sin embargo, el código actual presenta un problema: mezcla la lógica de persistencia en memoria (el array tasks) con la intención de usar TypeORM y PostgreSQL. El código que interactúa con tasks debería ser reemplazado por interacciones con el repositorio de TypeORM.

- `db/connection.js`: Este archivo configura y exporta la conexión a la base de datos PostgreSQL usando TypeORM. Utiliza variables de entorno (process.env.DATABASE_URL) para la URL de conexión, lo cual es una buena práctica. Define la entidad Tasks para ser usada por TypeORM.

- `db/entities/tasks.js`: Este archivo define la entidad Tasks para TypeORM, especificando las columnas de la tabla "tasks" en la base de datos (como id, title, description, completed).

- `index.js`: Este archivo es el punto de entrada de la aplicación. Inicia el servidor Express.js y escucha en el puerto 3000.

- `test.js:` Contiene las pruebas unitarias para la API. Utiliza Jest como framework de pruebas y Supertest para realizar peticiones HTTP a la API. Cubre los endpoints principales (CRUD).

En resumen, la aplicación proporciona una API REST para gestionar tareas, guardando los datos en PostgreSQL. Sin embargo, el código en `app.js` necesita ser corregido para usar TypeORM y la conexión a la base de datos en lugar del array tasks en memoria.

El resto de los archivos configuran la base de datos, inician el servidor y proveen las pruebas para la API.
