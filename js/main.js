$(document).ready(function(){
	console.log(window.pageYOffset);
	$(window).scroll(function(){
		var position = window.pageYOffset;
		console.log(position);
		var filter = 'brightness('+(100-(position/5.5))+'%)';
		$('#header').css('webkitFilter', filter);
		$('#header').css('filter',filter);
	});	
});