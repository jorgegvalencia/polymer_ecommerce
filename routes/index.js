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
    'humor': [{
        title: 'libro1',
        author: 'autor1',
        cover: ''
    }, {
        title: 'libro2',
        author: 'autor2',
        cover: ''
    }, {
        title: 'libro3',
        author: 'autor3',
        cover: ''
    }, {
        title: 'libro4',
        author: 'autor4',
        cover: ''
    }, {
        title: 'libro5',
        author: 'autor5',
        cover: ''
    }, {
        title: 'libro6',
        author: 'autor6',
        cover: ''
    }, {
        title: 'libro7',
        author: 'autor7',
        cover: ''
    }, {
        title: 'libro8',
        author: 'autor8',
        cover: ''
    }, ],
    'suspense': [{
        title: 'libro1',
        author: 'autor1',
        cover: ''
    }, {
        title: 'libro1',
        author: 'autor1',
        cover: ''
    }, {
        title: 'libro1',
        author: 'autor1',
        cover: ''
    }, {
        title: 'libro1',
        author: 'autor1',
        cover: ''
    }, ],
    'accion': [{
        title: 'peli1',
        author: 'autor1',
        cover: ''
    }, {
        title: 'peli1',
        author: 'autor1',
        cover: ''
    }, {
        title: 'peli1',
        author: 'autor1',
        cover: ''
    }, {
        title: 'peli1',
        author: 'autor1',
        cover: ''
    }, ],
    'drama': [{
        title: 'peli2',
        author: 'autor1',
        cover: ''
    }, {
        title: 'peli2',
        author: 'autor1',
        cover: ''
    }, {
        title: 'peli2',
        author: 'autor1',
        cover: ''
    }, {
        title: 'peli2',
        author: 'autor1',
        cover: ''
    }, ],
    'moviles': [{
        title: 'movil2',
        author: 'autor1',
        cover: ''
    }, {
        title: 'movil2',
        author: 'autor1',
        cover: ''
    }, {
        title: 'movil2',
        author: 'autor1',
        cover: ''
    }, {
        title: 'movil2',
        author: 'autor1',
        cover: ''
    }, ],
    'portatiles': [{
        title: 'portatil1',
        author: 'autor1',
        cover: ''
    }, {
        title: 'portatil2',
        author: 'autor1',
        cover: ''
    }, {
        title: 'portatil3',
        author: 'autor1',
        cover: ''
    }, {
        title: 'portatil4',
        author: 'autor1',
        cover: ''
    }, ]
};

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/api/categories/', function(req, res) { // devolver array con las categorías
    res.json({ result: true, rows: categorias });
});

router.get('/api/subcategories/:categoryid', function(req, res) { // devolver array con las subcategorías de la categoría pedida
    var categoria = req.params.categoryid;
    res.json({ result: true, rows: subcategorias[categoria] });
});

router.get('/api/items/:subcategoryid', function(req, res) { // devolver array con items de la subcategoría pedida
    var subcategoria = req.params.subcategoryid;
    console.log(items[subcategoria]);
    res.json({ result: true, rows: items[subcategoria] });
});

module.exports = router;
