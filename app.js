var express = require('express');
var path = require('path');
var flash = require('connect-flash');

var indexRouter = require('./routes');

var app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(flash());

app.use('/', indexRouter);

app.get('/',function(req,res){
    res.render(__dirname+'/views/index.ejs');
});

app.get('/admin',function(req,res){
    res.render(__dirname+'/views/admin.ejs');
});

app.get('/contact',function(req,res){
    res.render(__dirname+'/views/contact.ejs');
});


app.use(function (req, res) {
    res.render(__dirname+'/views/404.ejs');
});



app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

