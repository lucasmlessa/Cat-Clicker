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
    this.currentCat = ko.observable(new Cat({
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/cat.jpg',
        nickname: ['Smarty', 'Master', 'Fluffy', 'Flatcat']
    }));
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
});
ko.applyBindings(new ViewModel());