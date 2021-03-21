const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({

    host: 'localhost', //'85.10.205.173 for db4free.net',
    user: 'alberto',
    password : 'vinazza',
    port : 3306, //port mysql
    database:'gamesdb',
    multipleStatements: true

});

mysqlConnection.connect((err) => {

    if(!err)
        console.log('Connected!!')
    else
        console.log('Connection error: ' + JSON.stringify(err, undefined, 2));

});


app.listen(3005, () => console.log('Express running at 3000'));

//this gets all the employees - and should return a JSON with it in the shell after looking for localhost:3000/addgame in the browser
app.get('/getgame', (req, res) => {

    mysqlConnection.query('SELECT * FROM games_table', (err, rows, fields) => {

        if(!err)
            res.send(rows)
        else
            console.log(err)

    })

});

//here the :id is a number that will be inserted instead of the ? and take the correct sql item to delete
app.delete('/deletegame/:id', (req, res) => {

    mysqlConnection.query('DELETE FROM games_table WHERE id = ?', [req.params.id], (err, rows, fields) => {

        if(!err)
            console.log(rows)
        else
            console.log(err)

    })

});

//for adding a game we created a stored prcedures in mysql workbench
app.post('/addgame', (req, res) => {
    let emp = req.body;
    var sql = "SET @id = ?;SET @cardname = ?;SET @author = ?; SET @path = ?; SET @notes = ?;CALL GameAddOrEdit(@id,@cardname,@author,@path,@notes);";
    mysqlConnection.query(sql, [emp.id, emp.cardname, emp.author, emp.path, emp.notes], (err, rows, fields) => {

        if(!err)
            res.send(rows)
        else
            console.log(err)

    })

});