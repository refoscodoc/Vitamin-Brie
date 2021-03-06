const express = require('express');
const bodyParser = require('body-parser');
var connection  = require('express-myconnection'); 
var mysql = require('mysql');

const app = express(); 
app.use(bodyParser.json());

/*app.use(express.json()
app.use(express.urlencoder({ extended: false})*/

app.use(

        connection(mysql,{

            host: 'localhost', //'localhost',
            user: 'refoscodoc',
            password : 'vinazza',
            port : 3001, //port mysql
            database:'sampledb'

        },'pool')); //or single

        app.post('/add_card',(req,res)=>{

        let {game_name,author,} = req.body;


        if(!game_name) return res.status(400).json('Game Name cant be blank');
        if(!author) return res.status(400).json('Exe path cant be blank');

        var data={game_name:game_name, author:author};


        var query = connection.query("INSERT INTO books set ? ",data, 
        function(err, rows)
        {

          if (err){
            //If error
              res.status(400).json('Sorry!!Unable To Add');
              console.log("Error inserting : %s ",err );
             }
          else
            //If success
            res.status(200).json('Card Added Successfully!!')

        });


        });


        app.listen(3000, ()=> {
        console.log(`app is running on port 3000`);
});