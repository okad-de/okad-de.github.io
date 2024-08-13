$( document ).ready(function() {
	responsiveMenu();
	geschaeftDescription();
});

<!-- Responsivemenu -->
function responsiveMenu() {
	$('#resp-menu').sidr({
		source: '.menu-mainmenu-container',
		side: 'right'
	});	

	var container = $('#sidr ul li');
	if(container.has('ul').size()){
		$( '<div class="has-children-icon"><div>+<div></div>' ).appendTo( '#sidr ul li'+':has(ul)' );
		$( '.has-children-icon' ).click(function () {
			$( this ).prev().slideToggle( "slow" );
			$( this ).find('div').toggleClass( "has-children-icon-rotate" );
		}) 
	}
}

<!-- Geschäft Description -->
function geschaeftDescription() {
	var height = $( ".geschaeft" ).height();
	$( window ).resize(function() {
		 height = $( ".geschaeft" ).height();
	});
	$( ".geschaeft" ).hover(function() {
		$(this).find( ".geschaeft-description" ).css("top", 0);
	}, function() {
		$(this).find( ".geschaeft-description" ).css("top", height);
	});	
}