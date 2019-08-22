var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

var port = 8888;
//set up template engine
app.set('view engine','ejs');
//static file
app.use(express.static('./public'));
//fire controllers
todoController(app);


app.listen(port,function(){
    console.log(`listening to port ${port}`);
});
