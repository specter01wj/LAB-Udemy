$(document).ready(function(){
	var totalWidth = 0;
	var position = new Array();
	
	$('#slides .slide').each(function(i){
		position[i] = totalWidth;
		totalWidth += $(this).width();
		
		if(!$(this).width()){
			alert('Please set width!');
			return false;
		}
	});
	
	$('#slides').width(totalWidth);
	
	$('#menu ul li a').click(function(e, keepScroll){
		$('li.product').removeClass('active').addClass('inactive');
		$(this).parent().addClass('active');
		
		var pos = $(this).parent().prevAll('.product').length;
		
		$('#slides').stop().animate({marginLeft:-position[pos]+'px'}, 450);
		
		e.preventDefault();
		
		if(!autoScroll){ 
			clearInterval();
		}
	});
	
	$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');
	
	var current = 1;
	function autoScroll(){
		if(current == -1){
			return false;
		}
		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click', [true]);
		current++;
	}
	
	var duration = 3;
	var itvl = setInterval(function(){autoScroll()}, duration*1000);
});