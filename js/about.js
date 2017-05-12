var clientType = commonJs.getBrowser();
var aboutPage = {
	dom:function(){
		var _this = this;
		_this.partner = $('.partner');
        _this.about2 = $('.about-2');

	},
    partnerFunc: function() {
        var _this = this;
        var _spaceBetween = 100;
        var _slidesPerView = 4;
        if (clientType.pc == 'pad') {
            _spaceBetween = 50;
        } else if (clientType.pc == 'mobile') {
            _spaceBetween = 10;
            _slidesPerView = 3;
        }
        var swiper = new Swiper('.partner .swiper-container', {
            // pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: _slidesPerView,
            paginationClickable: true,
            spaceBetween: _spaceBetween,
            loop: true
        });

    },
    bannerScroll: function() {
        var _this = this;


        function scrollAbout2() {
            _this.about2.each(function() {
                var $this = $(this);
                var $text = $this.find('.b-text');
                var currentPosTop = $this.position().top;
                var currentH = $this.height();
                var winH = $(window).height();
                var scrollTop = $(window).scrollTop();

                if ((currentPosTop + currentH / 2) <= (scrollTop + winH)) {
                    var _top = (scrollTop + winH - currentPosTop) / 5 * -1;
                    $this.addClass('show');

                }

                $this.hasClass('show') && setTimeout(function() {
                    var clsj = new CountUp("clsj", 0, 8, 0, 2);
                    clsj.start();
                    var jx = new CountUp("jx", 0, 11, 0, 2);
                    jx.start();
                    var alsl = new CountUp("alsl", 0, 343, 0, 4);
                    alsl.start();
                    var sjxm = new CountUp("sjxm", 0, 1250, 0, 6);
                    sjxm.start();
                }, 2000)
            })
        }

        scrollAbout2();
        $(window).bind('scroll', function() {
            (!_this.about2.hasClass('show')) && scrollAbout2();
        });
    },

	bind:function(){
		var _this = this;
		_this.partner.on('click','.title li',function(){
			var $this = $(this);
			var _type = $this.attr('data-type');

			_this.partner.find('.hide-layer').hide(); 
			$this.addClass('active').siblings().removeClass('active');
			$('.'+_type).fadeIn();
		});
	},
	init:function(){
		var _this = this;
		_this.dom();
		_this.bind();
		_this.partnerFunc();
		_this.bannerScroll();
	}
}
aboutPage.init();













