var express = require('express');
var router = express.Router();

var categorias = [
	'libros', 'peliculas', 'electronica'
];

var subcategorias = {
	'libros': ['humor', 'suspense'],
	'peliculas': ['accion', 'drama'],
	'electronica': ['moviles', 'portatiles']
};

var items = {
	'humor': 
	[
	{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},
	],
	'suspense': 
	[
	{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},
	],
	'accion': 
	[
	{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},
	],
	'drama': 
	[
	{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},
	],
	'moviles': 
	[
	{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},
	],
	'portatiles': 
	[
	{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},{
		title: 'libro1',
		author: 'autor1',
		cover: ''
	},
	]
};

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/subcategories/:categoryid', function (req, res) { // devolver array con las subcategorías de la categoría pedida
	var categoria = req.params.categoryid;
	res.json({ result: true, rows: subcategorias[categoria]});
});

router.get('/api/items/:subcategoryid', function (req, res) { // devolver array con items de la subcategoría pedida
	var subcategoria = req.params.subcategoryid;
	res.json({ result: true, rows: items[subcategoria]});
});

module.exports = router;
