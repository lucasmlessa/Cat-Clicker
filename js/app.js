$(function() {
    var cont = 0;
    $('#cat').click(function(e) {
        cont +=1;
        console.log(cont);
        $('.cont-numb').html(cont);
    });
});