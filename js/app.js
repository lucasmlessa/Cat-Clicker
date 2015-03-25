var initialCats = [{
    'name': 'Hero',
    'clickCount': 0,
    'imgSrc': 'img/cat.jpg',
    'nickname': ['Smarty', 'Master', 'Fluffy', 'Flatcat']
}, {
    'name': 'Master',
    'clickCount': 0,
    'imgSrc': 'img/cat2.jpg',
       'nickname': ['Smarty', 'Master', 'Fluffy', 'Flatcat']
}, {
    'name': 'Lucky',
    'clickCount': 0,
    'imgSrc': 'img/cat3.jpg',
       'nickname': ['Smarty', 'Master', 'Fluffy', 'Flatcat']
}, {
    'name': 'Sleepy',
    'clickCount': 0,
    'imgSrc': 'img/cat4.jpg',
       'nickname': ['Smarty', 'Master', 'Fluffy', 'Flatcat']
}, {
    'name': 'Smarty',
    'clickCount': 0,
    'imgSrc': 'img/cat5.jpg',
       'nickname': ['Smarty', 'Master', 'Fluffy', 'Flatcat']
}];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.nickname = ko.observableArray(data.nickname);
    this.level = ko.computed(function() {
        var title;
        var clicks = this.clickCount();
        if (this.clickCount() < 10) {
            title = 'Noob';
        } else if (clicks >= 10 && clicks < 20) {
            title = 'Iniciante';
        } else if (clicks >= 20 && clicks < 30) {
            title = 'Esforçado';
        } else if (clicks >= 30 && clicks < 40) {
            title = 'Veterano';
        } else if (clicks >= 40) {
            title = 'Profissional';
        };
        return title;
    }, this);
    this.imgSrc = ko.observable(data.imgSrc);
}
var ViewModel = (function() {
    var self = this;
    this.catList = ko.observableArray([]);
    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    },this);

      this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
    this.changeCat = function(catClicked){
       self.currentCat(self.catList()[catClicked]);
    };
});
ko.applyBindings(new ViewModel());