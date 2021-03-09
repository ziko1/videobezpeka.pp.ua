/*
 *	@Слайдер-карусель с автопрокруткой
 *	@Пользуйтесь на здоровье! ☺
 *
 *	Пример использования:
 * <script type="text/javascript">
 *	$(document).ready(function(){
 *		slidering({
 *			sliderBlock:	".slider",
 *			sliderIn: 		".sl > div",
 *			nextArr:		".next-arr",  //необязательный параметр
 *			prewArr:		".prev-arr", //необязательный параметр
 *			bullets:		".bullets", //необязательный параметр
 *			slideAmount:	$(".slider .sl > div > div.item").size(),
 *			slideWidth: 	300,
 *			duration: 		600, //необязательный параметр
 *			bulletsWidth:	28, //необязательный параметр
 *			show: 			3, //необязательный параметр
 *			auto: 			true, //необязательный параметр
 *			vertical:		true //необязательный параметр
 *		});
 *	});
 * </script>
*/

var slidering = function(params){

	params.tek = 0;
	params.autoInterval = 6000;
	
	if(!params.bulletsWidth)params.bulletsWidth = 22;
	if(!params.duration)	params.duration = 300;
	if(!params.show)		params.show = 1;
	
	params.go = function(tek){
		if(!$(params.sliderBlock).hasClass("disable")){
			$(params.sliderBlock).addClass("disable");
			if (params.vertical) {
				$(params.sliderBlock).find(params.sliderIn).animate(
					{marginTop: "-"+(params.slideHeight * tek)+"px"}, params.duration, 
					function(){
						$(params.sliderBlock).removeClass("disable")
				});
			} else {
				$(params.sliderBlock).find(params.sliderIn).animate(
					{marginLeft: "-"+(params.slideWidth * tek)+"px"}, params.duration, 
					function(){
						$(params.sliderBlock).removeClass("disable")
				});
			}
			params.tek = tek;
			params.bulletsAct(params.tek);
		}
	}
	
	if (params.bullets) {
		params.bulletsReturn = function() {
			var ISHKI = '';
			for(var u = 0; u < params.slideAmount; u++) ISHKI += '<i></i>';
			return ISHKI;
		};
		
		params.bulletsAct = function(s){
			$(params.sliderBlock).find(params.bullets).find("i").removeClass("acts");
			$(params.sliderBlock).find(params.bullets).find("i").eq(s).addClass("acts");
		};
		
		$(params.sliderBlock).find(params.bullets).html(params.bulletsReturn());
		$(params.sliderBlock).find(params.bullets).css("width",(params.slideAmount * params.bulletsWidth)+"px");
		params.bulletsAct(params.tek);
	}
	else params.bulletsAct = function(){};
	
	params.nextSlide = function(){
		if(!$(params.sliderBlock).hasClass("disable"))
		{
			if(params.tek!=(params.slideAmount-params.show)) ++params.tek;
			else params.tek=0;
			params.go(params.tek);
		}
	}
	
	params.prevSlide = function(){
		if(!$(params.sliderBlock).hasClass("disable"))
		{
			if(params.tek!=0) --params.tek;
			else params.tek = params.slideAmount-params.show;
			params.go(params.tek);
		}
	}
	
	if(params.auto && params.duration < params.autoInterval){
		params.interval = setInterval(function(){
			params.nextSlide();
		}, params.autoInterval);
		
		$(params.sliderBlock).hover(function(){
			clearInterval(params.interval);
		}, function(){
			params.interval = setInterval(function(){
				params.nextSlide();
			}, params.autoInterval);
		});
	}
	
	$(params.sliderBlock).find(params.bullets).find("i").live("click", function(){ params.go($(this).index()); });
	$(params.sliderBlock).find(params.nextArr).live("click", function(){ params.nextSlide(); });
	$(params.sliderBlock).find(params.prewArr).live("click", function(){ params.prevSlide(); });
}