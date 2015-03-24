var ViewModel = (function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.level = ko.observable('Newborn');
    this.imgSrc = ko.observable('img/cat.jpg');
    this.incrementCounter = (function() {
        this.clickCount(this.clickCount() + 1);
    });
});
ko.applyBindings(new ViewModel());
// $(function() {
//     'use strict';

//     /*  Model  */
//     /* cria a variável model com os dados dos gatos (cats) e a propriedade
//     do gato atual (currentCat) */
//     var model = {
//         currentCat: null,
//         adminArea: false,
//         cats: [{
//             'name': 'Hero',
//             'count': 0,
//             'img': 'img/cat.jpg',
//         }, {
//             'name': 'Master',
//             'count': 0,
//             'img': 'img/cat2.jpg',
//         }, {
//             'name': 'Lucky',
//             'count': 0,
//             'img': 'img/cat3.jpg',
//         }, {
//             'name': 'Sleepy',
//             'count': 0,
//             'img': 'img/cat4.jpg',
//         }, {
//             'name': 'Smarty',
//             'count': 0,
//             'img': 'img/cat5.jpg',
//         }]
//     };
//     /*  Octopus/Controller  */
//     var octopus = {
//         /* inicia o controller e define o gato inicial do array */
//         init: function() {
//             model.currentCat = model.cats[0];
//             /* inicia as duas views */
//             catMenu.init();
//             catView.init();
//             adminView.init();
//         },
//         /* busca o gato selecionado atualmente */
//         getCurrentCat: function() {
//             return model.currentCat;
//         },
//         /* retorna todos os gatos do model */
//         getCats: function() {
//             return model.cats.reverse();
//         },
//         /* define o gato atual com base no parâmetro recebido */
//         setCurrentCat: function(Cat) {
//             model.currentCat = model.cats[Cat];
//         },
//         /* incrementa o valor da propriedade 'count' do gato atual */
//         incrementCounter: function() {
//             model.currentCat.count++;
//             /* chama a função render da view */
//             catView.render();
//         },
//         getAdminArea: function() {
//             return model.adminArea;
//         },
//         showAdminArea: function() {
//             model.adminArea = true;
//             catView.render();
//         },
//         closeAdminArea: function() {
//             model.adminArea = false;
//             catView.render();
//         },
//         saveAdminArea: function(name, img, count) {
//             model.currentCat.name = name;
//             model.currentCat.img = img;
//             model.currentCat.count = count;
//             model.adminArea = false;
//             catView.render();
//             catMenu.render();
//         },

//     };
//     /*  View  */
//     var adminView = {
//         init: function() {
//             octopus.closeAdminArea()
//             this.admBtn = $('#adminBtn');
//             this.cancelBtn = $('#cancelBtn');
//             this.admArea = $('#admin-area');
//             this.inputCatName = $('#catName');
//             this.inputCatImg = $('#catImg');
//             this.inputCatCount = $('#catCount');
//             this.render();
//         },
//         render: function() {
//             this.currentCat = octopus.getCurrentCat();
//             this.inputCatName.val(this.currentCat.name);
//             this.inputCatImg.val(this.currentCat.img);
//             this.inputCatCount.val(this.currentCat.count);
//             octopus.getAdminArea() ? this.admArea.show() : this.admArea.hide();
//             this.admBtn.on('click', function() {
//                 octopus.showAdminArea();
//                 adminView.render();

//             });
//             this.cancelBtn.on('click', function() {
//                 octopus.closeAdminArea();
//                 adminView.render();
//             });
//             $('#saveBtn').on('click', function() {
//                 var currentCat = octopus.getCurrentCat();
//                 var inputCatName = $('#catName').val();
//                 var inputCatImg = $('#catImg').val();
//                 var inputCatCount = $('#catCount').val();
//                 octopus.saveAdminArea(inputCatName, inputCatImg, inputCatCount);
//                 adminView.render();
//             });
//         }
//     }


//     var catView = {
//         /* inicia a view e define as variáveis dos elementos do DOM */
//         init: function() {
//             this.catViewImg = $('#cat-img');
//             this.catViewName = $('#cat-name');
//             this.catViewCount = $('#cat-numb');
//             /* adiciona o evento 'click' na imagem exibida na view (this.catViewImg)
//             para que cada clique incremente o valor da propriedade do gato atual 
//             no model (octopus.incrementCounter())
//               */
//             this.catViewImg.on('click', function(e) {
//                 e.preventDefault();
//                 octopus.incrementCounter();
//                 adminView.render();
//             });
//             /* chama a função render da view */
//             this.render();
//         },
//         /* adiciona conteúdos recuperados no controller para os elementos do DOM da view */
//         render: function() {
//             this.currentCat = octopus.getCurrentCat();
//             this.catViewImg.attr('src', this.currentCat.img);
//             this.catViewName.html(this.currentCat.name);
//             this.catViewCount.text(this.currentCat.count);
//         }
//     }
//     var catMenu = {
//         /* inicia a view e define a variável do elemento do menu */
//         init: function() {
//             this.catMenuElem = $('.cat-menu');
//             /* chama a função render da view */
//             this.render();
//         },
//         render: function() {
//             /* define as variáveis */
//             var cat, elem, i, catID;
//             var cats = octopus.getCats();
//             /* limpa o conteúdo do elemento do menu */
//             this.catMenuElem.html('');
//             /* percorre os arrays com base na quantidade de itens */
//             for (var i = 0; i < cats.length; i++) {
//                 cat = cats[i];
//                 /* adiciona um 'a' para cada item encontrado */
//                 elem = '<a href="#" id="' + 'cat-' + i + '" class="list-group-item">' + cat.name + '</a>';
//                 /* insere o conteúdo dentro do elemento */
//                 this.catMenuElem.prepend(elem);
//             };
//             /* adiciona um evento de click para cada link ('a') do menu */
//             this.catMenuElem.find('a').on('click', function(e) {
//                 e.preventDefault(); // anula o href do link
//                 /* define o catID com base na id do link (cat-*) */
//                 catID = this.id.slice(4);
//                 /* define no controller o item atual */
//                 octopus.setCurrentCat(catID);
//                 /* chama a função render da view */
//                 catView.render();
//                 adminView.render();
//             });
//         }
//     };
//     /* inicia o controller */
//     octopus.init();
// });