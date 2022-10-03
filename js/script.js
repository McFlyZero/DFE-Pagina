/*=============================================
=                     BANNER                  =
=============================================*/
$(".fade-slider").jdSlider({
	isSliding: false,
	isAuto: true,
	isLoop: true,
	isDrag: false,
	interval: 5000,
	isCursor: false,
	speed: 3000

});

var alturaBanner = $(".fade-slider").height();
console.log("alturaBanner",alturaBanner);
$(".bannerEstatico").css({"height":alturaBanner+"px"})

/*================================(
ANIMACIONES SCROLL
================================*/
$(window).scroll(function() {
	var posY = window.pageYOffset;

	if (posY > alturaBanner){
		$("header").css({"background":"white"})
		$("header .logotipo").css({"filter":"invert(100%)"})
		$(".fa-bars, .fa-magnifying-glass").css({"filter":"invert(100%)"})
	}else{
		$("header").css({"background":"rgba(0,0,0,.5)"})
		$("header .logotipo").css({"filter":"invert(0%)"})
		$(".fa-bars, .fa-magnifying-glass").css({"filter":"invert(0%)"})
	}
});

/*================================
MENÚ
================================*/
$(".fa-bars").click(function(){
	$(".menu").fadeIn("fast");
})
$(".btnClose").click(function(){
	$(".menu").fadeOut("fast");
})
/*================================
GRID CATEGORIAS
================================*/
$(".grid figure").mouseover(function(){
	$(this).css({"background-position":"right bottom"})
})

$(".grid figure").mouseout(function(){
	$(this).css({"background-position":"left top"})
})
/*=============================================
PAGINACIÓN
=============================================*/
$(".pagination").twbsPagination({
	totalPages: 10,
	visiblePages: 4,
	first: "Primero",
	last: "Último",
	prev: '<i class="fas fa-angle-left"></i>',
	next: '<i class="fas fa-angle-right"></i>'
});