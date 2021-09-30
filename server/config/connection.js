const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    port: 3306,
    database: 'movies'
});

connection.connect((err)=>{
    if(err){
        console.log(`An error has occurred: ${err}`)
    }else{
        console.log(`The database has been connected`)
    }
});

module.exports = connection