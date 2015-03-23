$(function() {
    var cats = {};
    cats.a = 0;
    cats.b = 0;
    $('#cat1').click(function() {
        cats.a += 1;
        console.log(cats);
        $(this).find('.cont-numb').html(cats.a);
    });
    $('#cat2').click(function() {
        cats.b += 1;
        console.log(cats);
        $(this).find('.cont-numb').html(cats.b);
    });
});