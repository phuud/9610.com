$(function() {

	//标签页
	$('.tab-page1').show();
	$('.tab-page2').hide();
	$('.tab-page3').hide();
		
	$('.id1').bind('click',function(){
		$('.tab-page1').show();
		$('.tab-page2').hide();
		$('.tab-page3').hide();
		$('.tabid li').removeClass("active");
		$('.id1').addClass("active");
	})

	$('.id2').bind('click',function(){
		$('.tab-page2').show();
		$('.tab-page1').hide();
		$('.tab-page3').hide();		
		$('.tabid li').removeClass("active");
		$('.id2').addClass("active");
	})

	$('.id3').bind('click',function(){
		$('.tab-page3').show();
		$('.tab-page2').hide();
		$('.tab-page1').hide();
		$('.tabid li').removeClass("active");
		$('.id3').addClass("active");
	})

	//标签页-栏目导航
	$('.list-text').hide();
	$('.text1').show();

	$('.title1').bind('click',function(){
		$('.list-text').animate({width:'hide'},"slow");
		$('.text1').animate({width:'show'},"slow");		
	});

	$('.title2').bind('click',function(){
		$('.list-text').animate({width:'hide'},"slow");
		$('.text2').animate({width:'show'},"slow");				
	});

	$('.title3').bind('click',function(){
		$('.list-text').animate({width:'hide'},"slow");
		$('.text3').animate({width:'show'},"slow");				
	});

	$('.title4').bind('click',function(){
		$('.list-text').animate({width:'hide'},"slow");
		$('.text4').animate({width:'show'},"slow");				
	});

	$('.title5').bind('click',function(){
		$('.list-text').animate({width:'hide'},"slow");
		$('.text5').animate({width:'show'},"slow");				
	});

	$('.title6').bind('click',function(){
		$('.list-text').animate({width:'hide'},"slow");
		$('.text6').animate({width:'show'},"slow");				
	});

});

$(function($){
    $('.hotpic').slideBox({
        duration : 0.3,//滚动持续时间，单位：秒
        easing : 'linear',//swing,linear//滚动特效
        delay : 10,//滚动延迟时间，单位：秒
        hideClickBar : false,//不自动隐藏点选按键
        clickBarRadius : 10
    });
});
