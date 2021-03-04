/**
 *	- LANDING P - 
 *	nextteam.ru 
 *	(C), 2014
*/
$(document).click(function(){
	Lp.windowTimer();
});

$(document).keydown(function(e){
	switch(e.keyCode) {
		case 27:
			$('.infoblock').infoBlock('close');
			Lp.darker(0);
			Lp.darkerTimer(0);
		break;
		
		case 117:
			console.info('u - 117');
			//return false;
		break;
	}	
});

$(window).resize(function(){
	Lp.cameras();
	sss = $('body').width();
	if (sss > 960){ sss = 960;}
	$('.slide').css({'width':sss +'px'});
	slidering({
		sliderBlock:	".slidering",
		sliderIn: 		".inslide > div",
		bullets:		".bullets",
		slideAmount:	$(".slidering .inslide .slide").size(),
		slideWidth: 	sss,
		bulletsWidth:	22,
		auto: 			true,
	});
});

$(document).scroll(function(){
	Lp.windowTimer();
    if (!$(".header").hasClass("noi")){
      if (s = $(".header").onScreen(1, true)){
          $(".header").css("background-position","center " + (s * (-0.3)) + "px");
      }
    }

	if ($(".countering").onScreen(0.8)){
		$("#counter1").animCount(co10, co1, 1, ''); 
		$("#counter2").animCount(co20, co2, 5, ''); 
		$("#counter3").animCount(co30, co3, 5, ''); 
		$("#counter4").animCount(co40, co4, 200, ''); 
		$("#counter5").animCount(co50, co5, 500, '');
	}

	if ($(".yaiki").onScreen(0.6)){
		$(".yaiki > li").stepByStep('opacity-1', 10);
	}

	if ($(".camera-catalog li").onScreen(0.6)){
		$(".camera-catalog li").stepByStep('n', 300);
	}
	
	if ($(".block-04 .warranty li").onScreen(0.6)){
		$(".block-04 .warranty li").stepByStep('mm', 300);
	}
	
	
	if ($(".block02 .problem li").onScreen(0.6)){
		$(".block02 .problem li").stepByStep('mm', 300);
	}
	
	if ($(".sli2").onScreen(0.95)){
		$(".sli2")
		 .css("background-image", "url("+bg2+")");
		
		setTimeout(function(){
			$(".sli2").css({
				"background-size":"auto 100%",
				"background-position":"center 0"
			});
			$(".sli2 .lefter, .sli2 .righter").addClass('margin-l-r-0');
		}, 500);
	}	
	
	if ($(".big-vibor").onScreen(0.6)){
		$(".big-vibor .lefter, .big-vibor .righter").addClass('margin-l-r-0');
	}
	
	if ($(".grey:eq(0)").onScreen(0.6)){
		var	c=0, $grey = $(".grey:eq(0)"), inter = setInterval(function(){
			if ($grey.hasClass('pulsar')) $grey.removeClass('pulsar');
			else  $grey.addClass('pulsar');
			if (++c > 9) clearInterval(inter);
		}, 500);
	}
	
	if ($(".grey:eq(1)").onScreen(0.6)){
		var	c=0, $grey = $(".grey:eq(1)"), inter = setInterval(function(){
			if ($grey.hasClass('pulsar')) $grey.removeClass('pulsar');
			else  $grey.addClass('pulsar');
			if (++c > 9) clearInterval(inter);
		}, 500);
	}
	
	if ($(".why-or-why").onScreen(0.6)){
		$(".why-or-why li").stepByStep('margin-op', 400);
	}
	
	if ($(".besplatno").onScreen(0.9)){
		$(".sl2").css({
			"background-image":"url("+bg4+")"
		});		
		setTimeout(function(){
			$(".besplatno li").stepByStep('op-1', 500);
			$(".sl2").css({
				"background-size":"auto 100%",
				"background-position":"center 0"
			});
		}, 500);
	}

	if ($(".shots").onScreen(1)){
		$(".shots img").stepByStep('op-1', 100);
		Lp.cameras();
	}
	
	if ($(".construct-block").onScreen(0.95)){
		$(".construct-block")
		 .css("background-image", "url("+bg3+")");
	}
});

$(document).ready(function(){
	$('.fancybox').fancybox();
	if (screen.height < 800) {
		$("body").addClass("samll-height");
	}
	$('#toTop').click(function() {		 
		$('body,html').animate({scrollTop:0},800);
	});
	setTimeout(function(){
		document.getElementsByTagName('video')[0].play();
	}, 15000);
	
	if ($.usrAgent("iphone|Android")) {
		$(".constr").addClass("iphone");
	}
	
	if ($.usrAgent("iphone") || $.usrAgent("ipad") || $.usrAgent("android") || $.usrAgent("MSIE [8|7]")) {
		$("#counter1").animCount(co10, co1, 1, ''); 
		$("#counter2").animCount(co20, co2, 5, ''); 
		$("#counter3").animCount(co30, co3, 5, ''); 
		$("#counter4").animCount(co40, co4, 200, ''); 
		$("#counter5").animCount(co50, co5, 500, '');
		$(".camera-catalog li").stepByStep('n', 300);
		$(".yaiki > li").stepByStep('opacity-1', 10);
		$(".sli2").css({
			"background-size":"auto 100%",
			"background-position":"center 0"
		});
		$(".sli2 .lefter, .sli2 .righter").addClass('margin-l-r-0');
		$(".big-vibor .lefter, .big-vibor .righter").addClass('margin-l-r-0');
		$(".why-or-why li").stepByStep('margin-op', 400);
		$(".besplatno li").stepByStep('op-1', 500);
		$(".sl2").css({
			"background-size":"auto 100%",
			"background-position":"center 0"
		});
		$(".shots img").stepByStep('op-1', 100);
		Lp.cameras();
		$(".construct-block")
		 .css("background-image", "url("+bg3+")");
		$(".sl2").css({
			"background-image":"url("+bg4+")"
		});
		$(".sli2")
		 .css("background-image", "url("+bg2+")");
	}
	
	$('input, textarea').placeholder();
	
	$("input[name='phone']").mask("+38 (999) 999-99-99");
	
	$(".inputBox").inputBox({add: 1, min: 0, max: 99});
	
	$(".tabber").tabber({
		head:		'.htabs li',
		tabs:		'.tab',
		actClass:	'act'
	});
	
	$("#show_more_otz").toggle(function(){
		$(".portfolio li").each(function(){
			if ($(this).index()>1) $(this).slideDown('fast');
		});
		$(this).text('Свернуть');
	}, function(){
		$(".portfolio li").each(function(){
			if ($(this).index()>1) $(this).slideUp('fast');
		});
		$(this).text('Показать ещё');
	});
	
	$(".submit").live("click", function(){
		$(this).parents('form').submit();
	});
	
	$(".gotostep2").click(function(){
		if ($(this).parents('form').find('input[type="radio"]:checked').length < 4) {
			$('.infoblock').infoBlock('err','Пожалуйста, укажите все параметры.');
		} else {
			Lp.stepper();
		}
	});
	
	$('form').ajaxForm({
		beforeSubmit: function(d, $e){
			if (!$e.hasClass('dis')) {
				$e.addClass('dis');
				
				for (var j in d) {
					if((d[j].name == 'name' && d[j].value == '') ||
						(d[j].name == 'phone' && d[j].value == '') ||
						(d[j].name == 'email' && !/[a-z0-9\-\.\_]+\@[a-z0-9\-\.\_]+\.[a-z0-9]+/i.test(d[j].value))) {
						
						$('.infoblock')
						 .infoBlock('err','Пожалуйста, заполните необходимые поля.');
						
						$e
						 .removeClass('dis')
						 .find('input[type="text"]')
						 .addClass('err-form');
						
						return false;
					}
				}
			} else return false;
		},
		
		success: function(data){
			//$('.infoblock').infoBlock('ok', data);
			//yaCounter25224833.reachGoal('zakaz');
          
			Lp.darkerTimer(0);
			Lp.darker(1, '.okno2');
			$('form').removeClass('dis');
			$("input[name='name'], input[name='phone'], input[name='email']").each(function(){
				$(this).val('');
			});
			Lp.timer[1] = 'done';
		}
	});
	sss = $('body').width();
	if (sss > 960){ sss = 960;}
	$('.slide').css({'width':sss +'px'});
	slidering({
		sliderBlock:	".slidering",
		sliderIn: 		".inslide > div",
		bullets:		".bullets",
		slideAmount:	$(".slidering .inslide .slide").size(),
		slideWidth: 	sss,
		bulletsWidth:	22,
		auto: 			true,
	});
	
	/* Анимирование при загрузке страницы */
	$("h1, .utp, .utp2").addClass('scale1');
	
	/* Пульсирование стрелки в .header'e */
	var	$utp = $(".utp2");
	setInterval(function(){
		if ($utp.hasClass('pulsar2')) {
			$utp.removeClass('pulsar2');
		} else {
			$utp.addClass('pulsar2');
		}
	}, 1500);
	
	$(".arrtobot").click(function(){
		$("body").animate({
			'scrollTop': $(".countering").offset().top + "px"
		}, 300);
	});
	
	$(".bbut").click(function(){
		Lp.darker(1, '.okno', '<h3>'+$(this).attr('data')+'</h3>');
		$('input[name="system_info"').val($(this).attr('data'));
	});
	
	/* Открытие darker для блока "Готовые решения"*/
	$('.inf-block .but').click(function(){
		var $par = $(this).parents('.inf-block'),
			title = $par.find('h3').text(),
			price = $par.find('.price b').text(),
			h3 = $(this).attr('data') != undefined ? $(this).attr('data') : title;

		Lp.darker(1, '.okno', '<h3>'+h3+'</h3>');
		$('input[name="system_info"').val(h3+', '+ price);
	});
	
	/* Стилизация input[type="radio"]*/
	$("label").live("click",function(){
		var $this = $(this).find('input[type="radio"]'),
			$input = $('input[name="'+$this.attr('name')+'"]');
		$input.parent().removeClass('checked');
		if ($this.prop('checked')) {
			$(this).addClass('checked');
		}
	});
	
	$(".closeka").click(function(){
		Lp.darker(0);
	});
	
	$(".close-info").click(function (){
		$('.infoblock').infoBlock('close');
	});
});

Lp = {
	stepper: function () {
		var $s1 = $(".step1"), $s2 = $(".step2");
		if ($s1.css('display') == 'none') {
			$s1.fadeIn();
			$s2.hide();
		} else {
			$s1.hide();
			$s2.fadeIn('fast');
			$("html,body").scrollTop($s2.offset().top);
		}
	},
	
	darker: function(command, okno, content) {
		var $darker = $(".darker"),
			$content = $("#addhere");
		
		if(command === 0) {
			$darker.hide();
			$darker.find(okno).removeClass('marTop');
		} else {
			if (content) $content.html(content).show();
			else $content.html('').hide();
				
			$darker.children('div').hide().removeClass('marTop');
			$darker.find(okno).show();
			
			setTimeout(function(){
				$darker.find(okno).addClass('marTop');
			}, 200);
			
			if($darker.css("display") == 'none' || command == 1)
				$darker.height($(document).height()).fadeIn("fast");
			else $darker.hide().find(okno).removeClass('marTop');
		}
		
		if (okno == '.okno2') {
			$('.letter-text').addClass('height-900');
		} else {
			$('.letter-text').removeClass('height-900');
		}
	},	
	
	getBgPos: function (el) {
		return el.css('backgroundPosition').split(' ')[1].replace('px', '');
	},
	
	timer: [],
	windowTimer: function() {
		clearTimeout(Lp.timer[0]);
		clearInterval(Lp.timer[3]);
		
		if (Lp.timer[1] != 'done') {
			Lp.favicon(0); 
			Lp.timer[0] = setTimeout(function(){
				Lp.timer[1] = 1;
				Lp.favicon(1);
				Lp.darkerTimer(1);
			}, (Lp.timer[1] == 1 ? (zaderzhka2 * 1000) : (zaderzhka1 * 1000)));
		}
	},
	
	darkerTimer: function(comm){
		if (comm == 1) {
			$(".darker-timer").height($(document).height()).fadeIn('fast');
			$(".okno-timer").css("margin-top", $.scrolling() + "px");
		} else {
			$(".darker-timer").hide();
		}
	},
	
	pageIcon: [
		$("#favicon"),
		$("#favicon").attr('href'),
		$("#favicon").attr('data'),
	],
	
	pageTitle:	[
		$('title').text(),
		"Вы отвлеклись?"
	],
	
	favicon: function(com) {
		if (com != 1) {
			Lp.pageIcon[0].attr("href", Lp.pageIcon[1]);
			$("title").text(Lp.pageTitle[0]);
		} else {
			Lp.timer[3] = setInterval(function(){				
				if (++Lp.timer[2] == 1) {
					Lp.pageIcon[0].attr("href", Lp.pageIcon[1]);
					$("title").text(Lp.pageTitle[0]);
				} else {
					Lp.timer[2] = 0;
					Lp.pageIcon[0].attr("href", Lp.pageIcon[2]);
					$("title").text(Lp.pageTitle[1]);
				}
			}, 500);
		}
	},
	
	cameras: function () {
		/* Список кадров с камер */
		
		var cc = 0,
			ccc= (-1),
			ww = 12.5,
			hh = $(".shots img").eq(0).height();
		if ($('body').width()<768){
			ww = 25;
		}
		$(".shots img").each(function(){
			if ( (ww*cc)%100 == 0 ) {
				++ccc; cc = 0;
			}		
			$(this).css({
				"left": (cc*ww) +"%",
				"top": (hh*ccc) + "px"
			}).parent().height(hh*ccc+hh);
			++cc;
		});
	}
};

$.extend({
    scrolling: function() {
        var html = document.documentElement,
            body = document.body,
            scrollTop = html.scrollTop || body && body.scrollTop || 0;
        return scrollTop -= html.clientTop;
    },

    usrAgent: function (us) {
        var reg = new RegExp(us, "i");
        if (us) {
            if (reg.test(navigator.userAgent)) {
                return true;
            } else {
                return false;
            }
        } else {
            return navigator.userAgent;
        }
    }
});

$.fn.extend({
    onScreen: function(k, v){
        var ko = screen.height * (k ? k : 0.75);
        if ($(this).length > 0 && !$(this).hasClass('allready-showed')) {
            if ($(this).offset().top - ko < $.scrolling()) {
                $(this).addClass('allready-showed');
                return true;
            } else return false;
        } else if (v && $(this).offset().top - ko < $.scrolling() && $(this).offset().top + $(this).height() > $.scrolling()) {
            return $.scrolling() + 0.1;
        } else return false;
    },
	
    stepByStep: function(classToEl, time, tek) {
        var tek = !tek ? 0 : tek,
            $el = $(this);

        if (tek < $el.size()) {
            $el.eq(tek).addClass(classToEl);
            setTimeout(function () {
                $el.stepByStep(classToEl, time, ++tek);
            }, time);
        }
        return tek;
    },
	
    animCount: function(start, limit, time, text) {
        if (start <= limit) {
            var $el = $(this);
            $el.html(start + text);
            setTimeout(function () {
                $el.animCount(++start, limit, time, text);
            }, time);
        }
    },

	infoBlock: function (command, content) {
		if (command == 'err') $(this).addClass('err');
		else $(this).removeClass('err');
		
		if (command == 'close') {
			$(this).css({'opacity': '0', 'top': '-200px'});
		} else {
			$(this).css({'opacity': '1','top': '0px'})
			 .find('span')
			 .html(content);
		}
	},
	
	inputBox: function(params){
		var $this = $(this),
			class1 = 'inputplusone',
			class2 = 'inputminusone';

		$this.each(function(){
			widd = $(this).width();
			if (widd = 30){
				widd = 24;
			}
			$(this).wrap('<div class="inputBoxDiv" style="width: '+(widd+26)+'px;"></div>');
			$(this).parent().append('<i class="'+class1+'">&#9650;</i><i class="'+class2+'">&#9660;</i>');
		
			$(this).live("change", function(){
				var val = parseInt($(this).val());
				if (val > params.max) {
					$(this).val(params.max);
				} else if (val < params.min || !val) {
					$(this).val(params.min);
				}
			});
		});
		
		$("."+class1).live("click", function(){
			var $input = $(this).parent().find('input'),
				val = parseInt($input.val());
			$input.val(val+params.add>params.max?params.max:val+params.add);
		});
		
		$("."+class2).live("click", function(){
			var $input = $(this).parent().find('input'),
				val = parseInt($input.val());
			$input.val(val-params.add<0?params.min:val-params.add);
		});
	},
	

	tabber: function (parr) {
		var $this = $(this),
			ind = 0;

		$this
		 .find(parr.head)
		 .live("click", function(){
			$this.find(parr.head).removeClass(parr.actClass)
			$(this).addClass(parr.actClass);
			
			$this
			 .find(parr.tabs)
			 .hide()
			 .eq($(this).index())
			 .show();
		});
	}
});

Number.prototype.numberFormat = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t);
};