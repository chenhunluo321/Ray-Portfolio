function hello(){
	// var isOnDiv = false;
	// $('#jsnav').mouseenter(function(){isOnDiv=true;});
	// $('#jsnav').mouseleave(function(){isOnDiv=false;});
	$('#jsnav').hide();
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('#fixnav').on('click',function(){
			$(this).next().next().slideToggle(400);
		})
	}
	else{
			$('#fixnav').on('mouseenter mouseleave',function(){
				$(this).next().next().slideToggle(300).delay(2100);
			})
	}
}
$(document).ready(hello);

