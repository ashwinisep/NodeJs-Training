const express = require('express');
const { Client } = require('pg');
const client = new Client({
    connectionString: connectionString='postgres://postgres:Cel@1234@localhost:5432/TestPostgreSql'
});
client.connect();
var app = express();
app.set('port', process.env.PORT || 4040);
app.get('/', function (req, res, next) {
    //const Id = parseInt(request.params.id)
    client.query('SELECT * FROM "TestDBConnection"', function (err, result) {
       // client.query('SELECT * FROM "TestDBConnection" where Id =$1', [Id],function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
        console.log(result.rows);
    });

    const query2 = `
    CREATE TABLE Test2 IF NOT EXISTS(
    email varchar,
    firstName varchar,
    lastName varchar,
    age int
    );`;

    client.query(query2, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Table Test2 is successfully created in Postgres');
        //client.end();
    });
    
    const query3 = `
    INSERT INTO Test2 (email, firstName, lastName, age)
    VALUES ('ashwini.kumar@gmail.com', 'Ash', 'k', 34)
    `;

    client.query(query3, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Table Test2 Row insertion is successfull');
        client.end();
    });

});
app.listen(4040, function () {
    console.log('Server is running.. on Port 4040');
});