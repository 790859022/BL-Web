// JavaScript Document
var indexPage = {
	dom:function(){
		var _this = this;
		_this.bannerLayer = $('.banner-layer');	
		_this.about2 = $('.about-2');
	},
	bannerScroll:function(){
		var _this = this;
		
		function scrollBanner(){
			_this.bannerLayer.each(function(i){
				var $this = $(this);
				var $text = $this.find('.b-text');
				var $img = $this.find('.img-bg');
				var currentPosTop = $this.position().top;
				var currentH = $this.height();
				var winH = $(window).height();
				var scrollTop = $(window).scrollTop();
				
				$text.css({
					paddingTop:'310px',
					opacity:0	
				})
				
				if(currentPosTop <= (scrollTop + winH)){
					var _top = (scrollTop + winH - currentPosTop)/5*-1;
					$text.css({
						opacity:1,
						top:_top
					})
				}
			});
		}
		function scrollAbout2(){
			_this.about2.each(function(){
				var $this = $(this);
				var $text = $this.find('.b-text');
				var currentPosTop = $this.position().top;
				var currentH = $this.height();
				var winH = $(window).height();
				var scrollTop = $(window).scrollTop();
				
				if((currentPosTop + currentH/2) <= (scrollTop + winH)){
					var _top = (scrollTop + winH - currentPosTop)/5*-1;
					$this.addClass('show');
					
				}
				
				$this.hasClass('show') && setTimeout(function(){
					var clsj = new CountUp("clsj", 0, 8, 0, 2);
					clsj.start();
					var jx = new CountUp("jx", 0, 11, 0, 2);
					jx.start();
					var alsl = new CountUp("alsl", 0, 343, 0, 4);
					alsl.start();
					var sjxm = new CountUp("sjxm", 0, 1250, 0, 6);
					sjxm.start();
				},2000)
			})
		}

		scrollBanner();
		scrollAbout2();
		$(window).bind('scroll',function(){
			scrollBanner();
			(!_this.about2.hasClass('show')) && scrollAbout2();
		});
	},
	bind:function(){
		var _this = this;
		
	},
	init:function(){
		var _this = this;
		_this.dom();
		_this.bind();
		_this.bannerScroll();
	}
}
$(function(){
	indexPage.init();
    var swiper = new Swiper('.business .img .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade',
		autoplay:'3000'
    });
    

    var swiper = new Swiper('.partner .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView:4,
        paginationClickable: true,
        spaceBetween: 110,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
    
});