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
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'libro2',
        author: 'autor2',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'libro3',
        author: 'autor3',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'libro4',
        author: 'autor4',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'libro5',
        author: 'autor5',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'libro6',
        author: 'autor6',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'libro7',
        author: 'autor7',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'libro8',
        author: 'autor8',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, ],
    'suspense': [{
        title: 'libro1',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'libro1',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'libro1',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'libro1',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, ],
    'accion': [{
        title: 'peli1',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'peli1',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'peli1',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'peli1',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, ],
    'drama': [{
        title: 'peli2',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'peli2',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'peli2',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'peli2',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, ],
    'moviles': [{
        title: 'movil2',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'movil2',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'movil2',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'movil2',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, ],
    'portatiles': [{
        title: 'portatil1',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'portatil2',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'portatil3',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
    }, {
        title: 'portatil4',
        author: 'autor1',
        cover: 'https://placeholdit.imgix.net/~text?txtsize=20&bg=4682b4&txtclr=000000&txt=item&w=150&h=150',
        price: '22'
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
