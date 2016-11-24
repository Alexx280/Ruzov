$(document).ready(function(){
    $('.link_autor1')
    .hover(function(){$(this).children('img').attr('src', 'pic/arrow_autor_over.png');})
});

$(document).ready(function(){
    $('.link_autor1').mouseleave(function(){
        $(this).children('img').attr('src', 'pic/arrow_autor.png');})
});
