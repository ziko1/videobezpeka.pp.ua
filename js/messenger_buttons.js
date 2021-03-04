/* При клике показываем или скрываем кнопки мессенджеров */

var menuBtn = $('.messenger-btn'),
menu = $('.messenger-links');
menuBtn.on('click', function() {
if ( menu.hasClass('show') ) {
menu.removeClass('show');
} else {
menu.addClass('show');
}
});

/*  Скрыть div при клике в любом месте сайта кроме самого div */

$(document).mouseup(function (e){
var div = $('.messenger');
if (!div.is(e.target)
&& div.has(e.target).length === 0) {
$('.messenger-links').removeClass('show');
}
});