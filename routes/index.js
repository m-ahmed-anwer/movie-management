var express = require('express');
var router = express.Router();
var database = require('../database');

router.get("/contact", function(req, res,next){
	res.render('contact');
});

router.get("/", function(req, res,next){
	res.render('index');
});

router.get("/insert", function(req, res, next){
	res.render("admin", { title:'Insert Movie' , action:'list'});
});

router.get("/search", function(req, res, next){
	var data = {};
	res.render('admin', {title:'Search Movie', title2:'Searched Movie', action:'search', catchdata:data});

});

router.get("/admin", function(req, res,next){

	var query = "SELECT * FROM movie";

	database.query(query, function(error, data){
		if(error) throw error; 
		
		res.render('admin', {title:'Movie Lists in MGR', action:'movie', catchdata:data});

	});

});



router.post('/add-movie',function(req,res,next){

    var mid = req.body.mid;
    var title = req.body.title;
    var year = req.body.year;
    var runtime = req.body.runtime;
    var genre = req.body.genre;
    var director = req.body.director;
    var writer = req.body.writer;
    var actor = req.body.actor;
    var metascore = req.body.metascore;
    var imdb = req.body.imdb;


    var query = `INSERT INTO movie(mid, title, year, runtime, genre, director, writer, actor, metascore, imdb) VALUES ("${mid}", "${title}", "${year}", "${runtime}", "${genre}", "${director}", "${writer}", "${actor}", "${metascore}", "${imdb}" )`;


	database.query(query, function(error, data){

		if(error) throw error;
        res.redirect("/admin");
	});

});

router.get('/edit/:id', function(req, res, next){

	var id = req.params.id;

	var query = `SELECT * FROM movie WHERE mid = "${id}"`;

	database.query(query, function(error, data){
		if(error) throw error;
		res.render('admin', {title: 'Edit Movie', action:'edit', catchdata:data[0] ,tempId:id });

	});

});

router.post('/editing/:id', function(req, res, next){

	var id = req.params.id;
	
    var title = req.body.title;
    var year = req.body.year;
    var runtime = req.body.runtime;
    var genre = req.body.genre;
    var director = req.body.director;
    var writer = req.body.writer;
    var actor = req.body.actor;
    var metascore = req.body.metascore;
    var imdb = req.body.imdb;

	var query = `UPDATE movie SET mid = "${id}" ,title = "${title}", year = "${year}", runtime = "${runtime}", genre = "${genre}", director = "${director}", writer = "${writer}",actor = "${actor}",metascore = "${metascore}", imdb = "${imdb}" WHERE mid = "${id}"`;
	
	database.query(query, function(error, data){
		if(error) throw error;
		res.redirect('/admin');

	});

});

router.post('/search/:type', function(req, res, next){

	var type = req.params.type;

	if(type=="imdb" || type=="metascore" ){
		var data = req.body.search;
		var query = `SELECT * FROM movie WHERE ${type} >= '${data}%' `;
		database.query(query, function(error, data){
			if(error) throw error;
			res.render('admin', {title: 'Search Movie', title2:'Searched Movie', action:'search', catchdata:data, test:data, query:query, type:type});
		});
	
	}else{
		var data = req.body.search;
		var query = `SELECT * FROM movie WHERE ${type} LIKE '${data}%'`;
		
		database.query(query, function(error, data){
			if(error) throw error;
			res.render('admin', {title: 'Search Movie', title2:'Searched Movie', action:'search', catchdata:data, test:data, query:query, type:type});
		});
	}
});


router.get('/delete/:id', function(req, res, next){

	var id = req.params.id; 

	var query = `DELETE FROM movie WHERE mid = "${id}"`;

	database.query(query, function(error, data){

		if(error)throw error;
		res.redirect("/admin");

	});

});

module.exports = router;