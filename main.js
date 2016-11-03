$(function(){

	
	 

	/*var windowW = document.documentElement.clientWidth;
	var windowH = document.documentElement.clientHeight;*/
	//var page2 = $('#page_2');
	var windowW = $(".page_wrap").width();
	var windowH = $(".page_wrap").height();
	var cenX = windowW/2;
	var cenY = windowH/2;
	var pageNow = 0;     //第几页
	var off = false;      //是否能滑动切换页面 false为否；
	//var porArr = [];     //点击了几个产品
	/*var pageMousic = document.getElementById('page_music');
	var btnMousic = document.getElementById('btn_music');*/

	if(windowW!=414){
		$('#css').html(".btn_btn_a {-webkit-animation: page_2_2 1s infinite;}.slider { z-index:999; width: 10.93333%; height: 1.19940%; background: url(img/slider_1.png) no-repeat; background-size: 100%; position: absolute; left: 44.53333%; top: 97.22638%; -webkit-transition: all 2s; display: -none;  -webkit-animation: slider_a 1s infinite;}.page_1 .slider h4{ display: block;}");
	}


/* 阻止默认事件 start */
document.addEventListener('touchmove',fnDefault,false);
document.addEventListener('touchstart',fnDefault,false);
function fnDefault(event){
	event.preventDefault();

}

/* 阻止默认事件 start */

/* 图片预加载 start */

/*var picArr = ['audio_1.png','audio_2.png','award.png','blue_bg.png','castle.png','castle_bg.png','ico_-.png','ico_+.png','ico_+_2.png','slider.png','slider_1.png','logo_i.png',	
	'page_2/1_1.png','page_2/1_2.png','page_2/1_3.png','page_2/2_1.png','page_2/2_2.png','page_2/2_3.png','page_2/3_1.png','page_2/3_2.png','page_2/3_3.png','page_2/bg.jpg','page_2/bg2.jpg','page_2/btn_bg_1.png','page_2/btn_bg_2.png','page_2/btn_bg_3.png','page_2/hand.png', 
	'page_3/1_1.png','page_3/1_2.png','page_3/2_1.png','page_3/2_2.png','page_3/3_1.png','page_3/3_2.png','page_3/bg.jpg','page_3/btn_bg_1.png','page_3/btn_bg_2.png','page_3/btn_bg_3.png','page_3/bird.png', 
	'page_4/1_1.png','page_4/1_2.png','page_4/2_1.png','page_4/2_2.png','page_4/bg.jpg','page_4/btn_bg_1.png','page_4/btn_bg_2.png','page_4/left.png', 'page_4/right.png',
	'page_5/1_1.png','page_5/1_2.png','page_5/2_1.png','page_5/2_2.png','page_5/3_1.png','page_5/bg.jpg','page_5/btn_bg_1.png','page_5/btn_bg_2.png',
	'page_6/1_1.png','page_6/1_2.png','page_6/2_1.png','page_6/2_2.png','page_6/3_1.png','page_6/3_2.png','page_6/bg.jpg','page_6/btn_bg_1.png','page_6/btn_bg_2.png','page_6/btn_bg_3.png', 'page_6/left.png', 'page_6/right.png',
	'page_7/1_1.png','page_7/1_2.png','page_7/2_1.png','page_7/2_2.png','page_7/bg.jpg','page_7/btn_bg_1.png','page_7/btn_bg_2.png',
	'page_8/arrow.png','page_8/bg2.jpg','page_8/logo.png','page_8/search.png','page_8/search_box.png','page_8/share_bg.png'
];*/

var picArr = ['audio_1.png','audio_2.png','award.png','blue_bg.png','castle.png','castle_bg.png','ico_-.png','ico_+.png','ico_+_2.png','slider.png','slider_1.png','logo_i.png',	
	'page_2/1_1.png','page_2/1_2.png','page_2/1_3.png','page_2/2_1.png','page_2/2_2.png','page_2/2_3.png','page_2/3_1.png','page_2/3_2.png','page_2/3_3.png','page_2/bg.jpg','page_2/bg2.jpg','page_2/btn_bg_1.png','page_2/btn_bg_2.png','page_2/btn_bg_3.png','page_2/hand.png', 
	'page_8/arrow.png','page_8/bg2.jpg','page_8/logo.png','page_8/search.png','page_8/search_box.png','page_8/share_bg.png',
	'page_3/1_1.png','page_3/1_2.png','page_3/2_1.png','page_3/2_2.png','page_3/3_1.png','page_3/3_2.png','page_3/bg.jpg','page_3/btn_bg_1.png','page_3/btn_bg_2.png','page_3/btn_bg_3.png','page_3/bird.png', 
	'page_4/1_1.png','page_4/1_2.png','page_4/2_1.png','page_4/2_2.png','page_4/bg.jpg','page_4/btn_bg_1.png','page_4/btn_bg_2.png','page_4/left.png', 'page_4/right.png',
	'page_5/1_1.png','page_5/1_2.png','page_5/2_1.png','page_5/2_2.png','page_5/3_1.png','page_5/bg.jpg','page_5/btn_bg_1.png','page_5/btn_bg_2.png',
	'page_6/1_1.png','page_6/1_2.png','page_6/2_1.png','page_6/2_2.png','page_6/3_1.png','page_6/3_2.png','page_6/bg.jpg','page_6/btn_bg_1.png','page_6/btn_bg_2.png','page_6/btn_bg_3.png', 'page_6/left.png', 'page_6/right.png',
	'page_7/1_1.png','page_7/1_2.png','page_7/2_1.png','page_7/2_2.png','page_7/bg.jpg','page_7/btn_bg_1.png','page_7/btn_bg_2.png'
	
];


preloadimages(picArr);

function preloadimages(arr){
    var newimages=[], loadedimages=0;
    var arr=(typeof arr!="object")? [arr] : arr;
    function imageloadpost(){
        loadedimages++;
       
        if (loadedimages<=arr.length/2){
           fnLoad(loadedimages,arr.length/2);
            if (loadedimages==arr.length/2){

            	fnStart();

            }
        }
    }
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image();
        newimages[i].src="img/"+arr[i];
        newimages[i].onload=function(){
            imageloadpost();
        }
        newimages[i].onerror=function(){
        imageloadpost();
        }
    }
}


/* 图片预加载 end */

	
/* 滑动布局 start */

	function fnSliderShow(){
		setTimeout(function(){
			$(".slider").show();
			off = true;
		},500);
	}
	function fnSliderHide(){
		off = false;
		$(".slider").hide();
		fnSliderShow();
	}

	fnSliderHide();
	setTimeout(function(){
		$(".slider").show();
		off = true;
	}, 3000);
	//var page2 = $("#page_2");

	//$(".page_wrap div").css({'height':windowH});


/* 滑动布局 end */

/* audio start */
/*	var bgMousic = document.getElementById('bg_music');
	var bgMousicNum = 0;
	$("#aud1").addClass('aud1_a');
	Zepto("#aud1").tap(function(){
		bgMousicNum++;
		if(bgMousicNum%2){
			$("#aud1").css({'background-image':'url(img/audio_2.png)','-webkit-transform':'rotate(0deg)'});
			$("#aud1").removeClass('aud1_a name');
			bgMousic.pause();
		}else{
			$("#aud1").css({'background-image':'url(img/audio_1.png)'});
			$("#aud1").addClass('aud1_a');
			bgMousic.play();
		}
		
	});*/
	
/* audio end */

/* 按钮事件 start */

	
	function fnBtn(btn,pro,txt,mask,page,fn1,fn2){
		for(var i=0;i<btn.length;i++){
			btn[i].index = i;
			Zepto(btn[i]).tap(function(){
				/*$('<audio src="audio/gei_com.wav" autoplay></audio>').appendTo("body").on("ended",function(){
			       $(this).remove();
			    });*/
				//btnMousic.play();
				fn2&&fn2();
				$(this).attr('off','true');
				for(var j=0;j<pro.length;j++){
					//$(pro[j]).removeClass('page_'+page+'_pro_'+j);
					fn1&&fn1(j);
					if($(btn[j]).parent().eq(0).attr('_h')){
						$(btn[j]).parent().eq(0).css({'-webkit-transition': 'height 0.5s', 'height':'40'});
					}else if( $(btn[j]).parent().eq(0).attr('_w') ){
						$(btn[j]).parent().eq(0).css({'-webkit-transition': 'width 0.5s','width':'40'});
					}
					if($(txt[j]).hasClass('text-right')){
						$(txt[j]).removeClass('textRight');
					}
					if($(txt[j]).hasClass('text-left')){
						$(txt[j]).removeClass('textLeft');
					}
					
					/*if($(txt[j]).attr('_l')){
						$(txt[j]).css({'-webkit-transition': 'left 0.5s', 'left':'-200%'});
					}else if( $(txt[j]).attr('_r')){
						$(txt[j]).css({'-webkit-transition': 'right 0.5s', 'right':'-200%'});
					}*/

					if($(btn[j]).attr('off') && j != $(this).get(0).index){
						$(btn[j]).parent().eq(0).removeClass('active_2');
						$(btn[j]).parent().eq(0).addClass('active_1');
					}
				}
				mask.css('display','block');
				$(this).removeClass('btn_btn_a');
				
				if($(this).parent().eq(0).hasClass('active_2')){
					$(this).parent().eq(0).removeClass('active_2');
					$(this).parent().eq(0).addClass('active_1');
				}else{
					if($(this).parent().eq(0).attr('_h')){
						$(this).parent().eq(0).css('height',$(this).parent().eq(0).attr('_h'));
					}else if( $(this).parent().eq(0).attr('_w') ){
						$(this).parent().eq(0).css('width',$(this).parent().eq(0).attr('_w'));
					}
					if($(txt[this.index]).hasClass('text-right')){
						$(txt[this.index]).addClass('textRight');
					}
					if($(txt[this.index]).hasClass('text-left')){
						$(txt[this.index]).addClass('textLeft');
					}
            		
					/*if($(txt[this.index]).attr('_l')){
						$(txt[this.index]).css({ 'left':$(txt[this.index]).attr('_l')});
					}else if( $(txt[this.index]).attr('_r')){
						$(txt[this.index]).css({ 'right':$(txt[this.index]).attr('_r')});
					}*/
					$(this).parent().eq(0).removeClass('active_1');
					$(this).parent().eq(0).addClass('active_2');
					//$(pro[this.index]).addClass('page_'+page+'_pro_'+this.index);
					if($(pro[this.index]).hasClass('fade-in')){
						$(pro[this.index]).addClass('fadeIn');
					}
					//$(txt[this.index]).css('display','block');
				}
				
			});
		}
	}
/* 按钮事件 end */


/*第一幕js start*/
	var loading = $(".loading_wrap");
	var loadingP = $(".loading p");
	var loadingBg = $(".loading_bg div");

	var castleP1 =  $('.page_1 .castle');
	var castleBgP1 =  $('.page_1 .castle_bg');
	var txtProsP1 =  $('.page_1 .page_1_text');
	var logo1ProsP1 =  $('.page_1 .logo_i');
	var blueProsP1 =  $('.page_1 .blue_bg');
	

	function fnLoad(iNow,sum){          //loading
		loadingP.html( parseInt((iNow/sum)*100) +"%");
		loadingBg.css({
			width: parseInt((iNow/sum)*100) +"%"
		});
	}

	function fnStart(){
		loading.css({
			display: 'none'
		});

		$('#page_wrap').cube();
		/*castleP1.addClass('page_1_castle');
		castleBgP1.addClass('page_1_castle_bg');
		txtProsP1.addClass('page_1_text_a');
		logo1ProsP1.addClass('page_1_logo_i_a');
		blueProsP1.addClass('page_1_blue_bg_a');*/
		
	}


/*第一幕js end*/


/*第二幕js start*/

	var pros1P2 = $(".page_2 .pro_1");
	var pros2P2 = $(".page_2 .pro_2");
	var btnProsP2 = $(".page_2 .btn_pro");
	var txtProsP2 = $(".page_2 .txt_pro");
	var maskP2 = $(".page_2 .mask");

	fnBtn(btnProsP2,pros1P2,txtProsP2,maskP2,2,function(j){
		$(pros2P2[j]).css('display','none');
		$(pros2P2[j]).removeClass('pro_a');		
	});


	$('.fuzzy_text').on('touchmove swipeup swipedown dragup dragdown release',function(e){

		$('.fuzzy_text').css('top','-100%');
		$('.fuzzy_hint').css('top','-100%');
		e.cancelBubble = true;
		e.stopPropagation();
		e.preventDefault();
	});

	$('.fuzzy_hint').on('touchmove swipeup swipedown dragup dragdown release',function(e){

		$('.fuzzy_bg').css('display','none');
		$('.fuzzy_hint').css('display','none');
		$('.fuzzy_text').css('display','none');
		e.cancelBubble = true;
		e.stopPropagation();
		e.preventDefault();
	});

	

/*第二幕js end*/


/*第三幕js start*/

	var pros1P3 = $(".page_3 .pro_1");
	var btnProsP3 = $(".page_3 .btn_pro");
	var txtProsP3 = $(".page_3 .txt_pro");
	var maskP3 = $(".page_3 .mask");

	fnBtn(btnProsP3,pros1P3,txtProsP3,maskP3,3);

/*第三幕js end*/

/*第四幕js start*/

	var pros1P4 = $(".page_4 .pro_1");
	var btnProsP4 = $(".page_4 .btn_pro");
	var txtProsP4 = $(".page_4 .txt_pro");
	var maskP4 = $(".page_4 .mask");

	fnBtn(btnProsP4,pros1P4,txtProsP4,maskP4,4);


/*第四幕js end*/

/*第五幕js start*/
	var prosBgP5 = $('.page_5 #pro_5_0');
	var pros1P5 = $(".page_5 .pro_1");
	var btnProsP5 = $(".page_5 .btn_pro");
	var txtProsP5 = $(".page_5 .txt_pro");
	var maskP5 = $(".page_5 .mask");

	fnBtn(btnProsP5,pros1P5,txtProsP5,maskP5,5,function(){},function(){
		prosBgP5.css('display','none');
		prosBgP5.removeClass('page_5_pro_bg');
	});

/*第五幕js end*/

/*第六幕js start*/
	var pros1P6 = $(".page_6 .pro_1");
	var btnProsP6 = $(".page_6 .btn_pro");
	var txtProsP6 = $(".page_6 .txt_pro");
	var maskP6 = $(".page_6 .mask");

	fnBtn(btnProsP6,pros1P6,txtProsP6,maskP6,6);

/*第六幕js end*/

/*第七幕js start*/
	var pros1P7 = $(".page_7 .pro_1");
	var pros1P7_ = $(".page_7 .pro_1_1");
	var pros1P7_2 = $(".page_7 .pro_1_2");
	var btnProsP7 = $(".page_7 .btn_pro");
	var txtProsP7 = $(".page_7 .txt_pro");
	var maskP7 = $(".page_7 .mask");

	fnBtn(btnProsP7,pros1P7_2,txtProsP7,maskP7,7,function(j){
			$(pros1P7_[j]).css('display','block');
			$(pros1P7[j]).css('display','none');	
	});

	/*Zepto('.page_7 .page_7_share').tap(function(){
		$('.page_7 .page_7_arrow ').css({
			display: 'block'
		});

	});*/

	Zepto('.page_8 .page_8_share').on('touchstart touchmove touchend ' ,function(e){ 

			$('.page_8 .page_8_arrow ').css({
				display: 'block'
			});
	        e.cancelBubble = true;
	        e.stopPropagation();
	        e.preventDefault();
	  
	   return false; 
	});

/*第七幕js end*/





});