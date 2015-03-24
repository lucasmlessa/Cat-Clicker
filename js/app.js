$(function() {
    /* cats = lista os gatos em um array de objetos */
    var cats = [{
        'name': 'Hero',
        'count': 0,
        'img': 'img/cat.jpg',
    }, {
        'name': 'Master',
        'count': 0,
        'img': 'img/cat2.jpg',
    }, {
        'name': 'Lucky',
        'count': 0,
        'img': 'img/cat3.jpg',
    }, {
        'name': 'Sleepy',
        'count': 0,
        'img': 'img/cat4.jpg',
    }, {
        'name': 'Smarty',
        'count': 0,
        'img': 'img/cat5.jpg',
    }];

    var catMenu = $('.cat-menu');
    var catView = $('#cat-view');

    /* Percorre o array cats e cria os elementos do menu .cat-menu */
    for (var i = 0; i < cats.length; i++) {
        catMenu.prepend('<a href="#" cat-id="' + i + '" class="list-group-item">' + cats[i].name + '</a>');
    };
    /* Chama a função mostraGato com base na cat-id do link clicado */
    $('.cat-menu').find('a').click(function(e) {
        var catID = $(this).attr('cat-id');
        mostraGato(catID);
        e.preventDefault();
    });
    /* função mostraGato = recebe um id do gato selecionado e insere no elemento #cat da página */
    var mostraGato = function(catID) {
            catView.html('<img cat-id="' + catID + '" src="' + cats[catID].img + '"/><div id ="contagem"><h1>' + cats[catID].name + '</h1> <h2> Contagem </h2> <p class = "cont-numb">' + cats[catID].count + '<p>');
            clicaGato();
        }
        /* função clicaGato = busca o atributo cat-id da imagem e adiciona na propriedade 
        count do objeto gato atual, depois exibe no elemento .cont-numb da página */
    var clicaGato = function() {
        catView.find('img').click(function() {
            var catID = $(this).attr('cat-id');
            cats[catID].count += 1;
            catView.find('.cont-numb').text(cats[catID].count);
        });
    };
});