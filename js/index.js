// JavaScript Document
var clientType = commonJs.getBrowser();
var indexPage = {
    dom: function() {
        var _this = this;
        _this.bannerLayer = $('.banner-layer');
        _this.about2 = $('.about-2');
        _this.nav = $('.navbar');
        _this.footer = $('.footer');
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
                    var clsj = new CountUp("clsj", 0, 8, 0, 1);
                    clsj.start();
                    var jx = new CountUp("jx", 0, 11, 0, 1);
                    jx.start();
                    var alsl = new CountUp("alsl", 0, 343, 0, 1);
                    alsl.start();
                    var sjxm = new CountUp("sjxm", 0, 1250, 0, 1.5);
                    sjxm.start();
                }, 2000)
            })
        }


        scrollAbout2();
        $(window).bind('scroll', function() {
            // (clientType.pc != 'mobile') && scrollBanner(); //非移动端执行动画
            (!_this.about2.hasClass('show')) && scrollAbout2();
        });
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
    bind: function() {
        var _this = this;
        _this.bannerScroll();
        _this.partnerFunc();
    },
    scrollBanner: function() {
        var _this = this;

        var _scrollParam = 1;
        _this.bannerLayer.each(function(i) {
            var $this = $(this);
            var $text = $this.find('.b-text');
            var $textT = $text.find('.text');
            var $bg = $this.find('.img-bg');
            var $line = $this.find('.line');
            var _scrollTop = $(window).scrollTop();


            var _posY = $this.offset().top;
            var _w = $this.width();
            var _h = $this.height();

            if ((_scrollTop * _scrollParam + _h / 2) >= _posY) {
                $text.css({
                    marginTop: ((_scrollTop * _scrollParam + _h / 2) - _posY) * -2
                })
            }
        });

        $(window).bind('scroll', function() {
            // console.log($(window).scrollTop());
            var _scrollTop = $(window).scrollTop();
            _this.bannerLayer.each(function(i) {
                var $this = $(this);
                var $text = $this.find('.b-text');
                var $bg = $this.find('.img-bg');

                var _index = i + 1;
                var _posY = $this.offset().top;
                var _h = $this.height();
                if ((_scrollTop * _scrollParam + _h / 2) >= _posY) {
                    $text.css({
                        marginTop: ((_scrollTop * _scrollParam + _h / 2) - _posY) * -2
                    })
                }
            });
        });



    },
    init: function() {
        var _this = this;
        _this.dom();
        _this.bind();

        (clientType.pc != 'mobile') && _this.scrollBanner(); //非移动端执行动画




    }
}
$(function() {
    indexPage.init();
    var swiper = new Swiper('.business .img .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        spaceBetween: 30,
        effect: 'fade',
        autoplay: '3000'
    });

});
