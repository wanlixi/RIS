var initcover = false;
var page4Show = true;
var page6Show = true;
var page7Show = true;
(function($) {
    $.fn.cube = function(options) {

        document.addEventListener && document.addEventListener("touchmove", function(a) {
            a.preventDefault()
        });

        var wh = $(window).height();

        var rotatePrevStyle = {
                'display': 'block',
                'z-index': '99',
                '-webkit-transition': '0s',
                '-webkit-transform': 'rotateX(90deg) translateZ(' + wh / 2 + 'px)'
            },
            rotateCurrentStyle = {
                'display': 'block',
                'z-index': '101',
                '-webkit-transition': '0s',
                '-webkit-transform': 'rotateX(0deg) translateZ(' + wh / 2 + 'px)'
            },
            rotateNextStyle = {
                'display': 'block',
                'z-index': '100',
                '-webkit-transition': '0s',
                '-webkit-transform': 'rotateX(-90deg) translateZ(' + wh / 2 + 'px)'
            },
            rotateOtherStyle = {
                'display': 'none',
                'z-index': '1',
                '-webkit-transition': '0s',
                '-webkit-transform': 'rotateX(-180deg) translateZ(' + wh / 2 + 'px)'
            };

        var wrapper = this,
            container = this.parent(),
            all = this.children(),
            current,
            next,
            prev,
            prevStyle = rotatePrevStyle,
            currentStyle = rotateCurrentStyle,
            nextStyle = rotateNextStyle,
            otherStyle = rotateOtherStyle,
            dragY = 0,
            isTurning = false,
            isTurned = false;

        var rotate = function(y) {
            if (y >= 0) {
                prev.css({
                    'display': 'block',
                    // 'z-index': '101',
                    '-webkit-transform': 'rotateX(' + 90 * (1 - y) + 'deg) translateZ(' + wh / 2 + 'px)'
                });
                current.css({
                    'display': 'block',
                    // 'z-index': '100',
                    '-webkit-transform': 'rotateX(' + 90 * (-y) + 'deg) translateZ(' + wh / 2 + 'px)'
                });
                next.hide();
            } else {
                prev.hide();
                current.css({
                    'display': 'block',
                    // 'z-index': '100',
                    '-webkit-transform': 'rotateX(' + 90 * (-y) + 'deg) translateZ(' + wh / 2 + 'px)'
                });
                next.css({
                    'display': 'block',
                    // 'z-index': '101',
                    '-webkit-transform': 'rotateX(' + 90 * (-1 - y) + 'deg) translateZ(' + wh / 2 + 'px)'
                });
            };
        };
        var off = true;
        var setOrder = function() {
            $('#aud1').css('display','block');
            current = $('.hover');
            if ($('.hover').next().length !== 0) {
                next = current.next();
            } else {
               /* if(off){
                    off = false;
                    $('.page_7').on('touchmove swipeup  dragup ' ,function(e){
                        // console.log(e);
                       var  disY = e.originalEvent.touches[0].pageY;
                       

                      $(this).on(' touchend ' ,function(e){ 

                            if( e.originalEvent.changedTouches[0].pageY < disY){
                                $('#aud1').css('display','none');
                                $('.fuzzy_text_7').css('top','0');
                                $('.fuzzy_bg_7').css({'top':'0', 'opacity':'1'});
                                e.cancelBubble = true;
                                e.stopPropagation();
                                e.preventDefault();
                                setTimeout(function(){
                                    $('.page_7').off();
                                },500)
                            }
                      
                        }); 


                            e.cancelBubble = true;
                            e.stopPropagation();
                            e.preventDefault();
                      
                       return false; 
                    });
                   

                }*/
                $('#aud1').css('display','none');
                next = all.first();
            };
            if ($('.hover').prev().length !== 0) {
                prev = current.prev();
            } else {
                prev = all.last();
            };

            all.css(otherStyle);
            prev.css(prevStyle);
            current.css(currentStyle);
            next.css(nextStyle);

            isTurning = false;
            isTurned = false;
        };

        var turn = function(effect, y, transition) {
            if (transition) {
                all.css('transition', '0.4s');
            } else {
                all.css('transition', '0s');
            };
            effect(y);
        };

        var animate = function () {

           /* $('<audio src="audio/5.wav" autoplay></audio>').appendTo("body").on("ended",function(){
               $(this).remove();
            });*/

           // obj_music.play();

            var content = $('.hover .content');

            content.find('.slide-up').not(function(){return $(this).hasClass('be-show')}).addClass('slideUp be-show');
            content.find('.slide-down').not(function(){return $(this).hasClass('be-show')}).addClass('slideDown be-show');
            content.find('.slide-right').not(function(){return $(this).hasClass('be-show')}).addClass('slideRight be-show');
            content.find('.slide-left').not(function(){return $(this).hasClass('be-show')}).addClass('slideLeft be-show');
            content.find('.fade-out').not(function(){return $(this).hasClass('be-show')}).addClass('fadeOut be-show');
            content.find('.fade-in').not(function(){return $(this).hasClass('be-show')}).addClass('fadeIn be-show');
            content.find('.zzoom-in').not(function(){return $(this).hasClass('be-show')}).addClass('zzoomIn be-show');

            content.find('.slide-r-t').not(function(){return $(this).hasClass('be-show')}).addClass('slideRT be-show');
            content.find('.slide-l-t').not(function(){return $(this).hasClass('be-show')}).addClass('slideLT be-show');
            content.find('.bird').not(function(){return $(this).hasClass('be-show')}).addClass('bird_end be-show');
            content.find('.btn_wrap_7_1').not(function(){return $(this).hasClass('be-show')}).addClass('page_7_pro_btn be-show');
            content.find('.btn_wrap_7_2').not(function(){return $(this).hasClass('be-show')}).addClass('page_7_pro_btn be-show');


            if(content.find('.page_4_left_bg').hasClass('slideUp') && page4Show ){
                page4Show = false;
                setTimeout(function(){
                    content.find('.page_4_left_bg').css({
                        display: 'none'
                    });
                    content.find('.page_4_right_bg').css({
                        display: 'none'
                    });
                    content.find('.page_4_bg').css({
                        display: 'none'
                    });
                },1000);  
            }

            if(content.find('.page_6_left_bg').hasClass('slideRight') && page6Show ){
                page6Show = false;
                 setTimeout(function(){
                    content.find('.page_6_left_bg').css({
                        display: 'none'
                    });
                    content.find('.page_6_right_bg').css({
                        display: 'none'
                    });
                    content.find('.page_6_bg').css({
                        display: 'none'
                    });
                },1000);
            }

           // if( page7Show && !content.find('.btn_wrap_7_1').hasClass('page_7_pro_btn')  ){
                /*page7Show = false;
                setTimeout(function(){
                    content.find('.btn_wrap_7_1').addClass('page_7_pro_btn');
                    content.find('.btn_wrap_7_2').addClass('page_7_pro_btn');
                },500);*/
          //  }

            /*content.find('.bird').not(function(){return $(this).hasClass('be-show')}).addClass('pro_bird');
            content.find('.page_4_left_bg').not(function(){return $(this).hasClass('be-show')}).addClass(' page_4_bg_1');
            content.find('.page_4_right_bg').not(function(){return $(this).hasClass('be-show')}).addClass(' page_4_bg_2');
            
            content.find('.page_6_left_bg').not(function(){return $(this).hasClass('be-show')}).addClass('page_6_bg_1');
            content.find('.page_6_right_bg').not(function(){return $(this).hasClass('be-show')}).addClass('page_6_bg_2');
           
            content.find('#pro_7_1').not(function(){return $(this).hasClass('be-show')}).addClass('page_7_pro_bg_0');
            content.find('#pro_7_2').not(function(){return $(this).hasClass('be-show')}).addClass('page_7_pro_bg_1');
            
*/
            var allow_display_time = parseInt(content.attr('anim-time')||1000);
            
            setTimeout(function(){
                content.parent().find('.allowdown').animate({'bottom':'0px'});
                var dom = content.find('[delay-class]');
                dom.addClass(dom.attr('delay-class'));
            },allow_display_time);
        };

        var init = function() {
            container.css('-webkit-perspective', wh + 'px');
            wrapper.css('-webkit-perspective', wh + 'px');
            wrapper.css('-webkit-transform', 'translateZ(-' + wh + 'px)');
            all.first().addClass('hover');

            setOrder();

            $('.hover').find('.text-up').addClass('textUp');

            if(!initcover){
                initcover = true;
                animate();
                $('.hover').find('.fade-out-cover').addClass('fadeOutCover');
            }

            if(window.isCoverPage){return;}
            wrapper.hammer().on('swipeup swipedown dragup dragdown release', function(e) {
                dragY = e.gesture.deltaY / $(window).height();
                switch (e.type) {
                    case 'swipeup':
                        turn(rotate, -1, true);
                        break;
                    case 'swipedown':
                        turn(rotate, 1, true);
                        break;
                    case 'dragup':
                    case 'dragdown':
                        if (!isTurning) {
                            turn(rotate, dragY, false);
                        };
                        break;
                    case 'release':
                        isTurning = true;
                        if (dragY > 0.2) {
                            isTurned = true;
                            turn(rotate, 1, true);
                            current.removeClass('hover');
                            prev.addClass('hover');
                        } else if (dragY < -0.2) {
                            isTurned = true;
                            turn(rotate, -1, true);
                            current.removeClass('hover');
                            next.addClass('hover');
                        } else {
                            turn(rotate, 0, true);
                            isTurned = false;
                        };
                        break;
                };
            });

            wrapper.on('webkitTransitionEnd', function() {
                if (isTurned) {
                    setOrder();
                    animate();
                };
                isTurning = false;
                isTurned = false;
            });
        }();
    };
})(jQuery);