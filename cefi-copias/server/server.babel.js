import express from 'express';
//import mysql from 'mysql';

const app = express();

app.use('/', express.static('public'));

//app.listen(process.env.PORT || 3000);
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});
//crea conexion mysql
// var connection = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'root',
//    password : 'root',
//    database : 'mydb'
//  });

 //conecta con mysql
//  connection.connect(function(err){
//  if(!err) {
//      console.log("Database is connected ... \n\n");  
//  } else {
//      console.log("Error connecting database ... \n\n");  
//  }
//  });
 
 //test de conexion 
//  app.get("/",function(req,res){
//  connection.query('SELECT * from Pedido', function(err, rows, fields) {
//  connection.end();
//    if (!err)
//      console.log('El resultado es: ', rows);
//    else
//      console.log('Error while performing Query.');
//    });
//  });
 
 // run puerto

