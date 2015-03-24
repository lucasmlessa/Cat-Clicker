$(function() {
    'use strict';

    /*  Model  */
    /* cria a variável model com os dados dos gatos (cats) e a propriedade
    do gato atual (currentCat) */
    var model = {
        currentCat: null,
        cats: [{
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
        }]
    };
    /*  Octopus/Controller  */
    var octopus = {
        /* inicia o controller e define o gato inicial do array */
        init: function() {
            model.currentCat = model.cats[0];
            /* inicia as duas views */
            catMenu.init();
            catView.init();
        },
        /* busca o gato selecionado atualmente */
        getCurrentCat: function() {
            return model.currentCat;
        },
        /* retorna todos os gatos do model */
        getCats: function() {
            return model.cats.reverse();
        },
        /* define o gato atual com base no parâmetro recebido */
        setCurrentCat: function(Cat) {
            model.currentCat = model.cats[Cat];
        },
        /* incrementa o valor da propriedade 'count' do gato atual */
        incrementCounter: function() {
            model.currentCat.count++;
            /* chama a função render da view */
            catView.render();
        },
    };
    /*  View  */
    var catView = {
        /* inicia a view e define as variáveis dos elementos do DOM */
        init: function() {
            this.catViewImg = $('#cat-img');
            this.catViewName = $('#cat-name');
            this.catViewCount = $('#cat-numb');
            /* adiciona o evento 'click' na imagem exibida na view (this.catViewImg)
            para que cada clique incremente o valor da propriedade do gato atual 
            no model (octopus.incrementCounter())
              */
            this.catViewImg.on('click', function(e) {
                e.preventDefault();
                octopus.incrementCounter();
            });
            /* chama a função render da view */
            this.render();
        },
        /* adiciona conteúdos recuperados no controller para os elementos do DOM da view */
        render: function() {
            this.currentCat = octopus.getCurrentCat();
            this.catViewImg.attr('src', this.currentCat.img);
            this.catViewName.html(this.currentCat.name);
            this.catViewCount.text(this.currentCat.count);
        }
    }
    var catMenu = {
        /* inicia a view e define a variável do elemento do menu */
        init: function() {
            this.catMenuElem = $('.cat-menu');
            /* chama a função render da view */
            this.render();
        },
        render: function() {
            /* define as variáveis */
            var cat, elem, i, catID;
            var cats = octopus.getCats();
            /* limpa o conteúdo do elemento do menu */
            this.catMenuElem.html('');
            /* percorre os arrays com base na quantidade de itens */
            for (var i = 0; i < cats.length; i++) {
                cat = cats[i];
                /* adiciona um 'a' para cada item encontrado */
                elem = '<a href="#" id="' + 'cat-' + i + '" class="list-group-item">' + cat.name + '</a>';
                /* insere o conteúdo dentro do elemento */
                this.catMenuElem.prepend(elem);
            };
            /* adiciona um evento de click para cada link ('a') do menu */
            this.catMenuElem.find('a').on('click', function(e) {
                e.preventDefault(); // anula o href do link
                /* define o catID com base na id do link (cat-*) */
                catID = this.id.slice(4);
                /* define no controller o item atual */
                octopus.setCurrentCat(catID);
                /* chama a função render da view */
                catView.render();
            });
        }
    };
    /* inicia o controller */
    octopus.init();
});