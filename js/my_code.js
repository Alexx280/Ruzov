$(document).ready(function(){
    $('.hov').hover(function(){$(this).children('img').attr('src', 'pic/arrow_autor_over.png');},
                    function(){$(this).children('img').attr('src', 'pic/arrow_autor.png');});
});

