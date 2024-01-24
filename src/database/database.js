// const mysql = require('mysql2/promise');

// const { Config } = require('../config/config');

// // Crear un pool en lugar de una conexión directa
// const pool = mysql.createPool({
//     host: Config.DB_HOST,
//     user: Config.DB_USER,
//     password: Config.DB_PASSWORD,
//     database: Config.DB_DATABASE,
//     waitForConnections: true,
//     connectionLimit: 10, // Puedes ajustar el límite de conexiones según tus necesidades
//     queueLimit: 0
// });

// pool.getConnection((error, connection) => {
//     if (error) {
//         console.log('El error: ' + error);
//         return;
//     }
//     console.log('¡Conectado a la base de datos');
//     connection.release();
    
// });

// module.exports = pool;


const mysql = require('mysql2/promise');  // Importa la versión de promesas de mysql2
const { Config } = require('../config/config');

// Crea una función que devuelve una pool de conexiones
const getPool = () => {
    const pool = mysql.createPool({
        host: Config.DB_HOST,
        user: Config.DB_USER,
        password: Config.DB_PASSWORD,
        database: Config.DB_DATABASE,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    return pool;
};

module.exports = {
    getPool
};
