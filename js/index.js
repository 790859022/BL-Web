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

        function scrollBanner() {
            _this.bannerLayer.each(function(i) {
                var $this = $(this);
                var $text = $this.find('.b-text');
                var $img = $this.find('.img-bg');
                var currentPosTop = $this.position().top;
                var currentH = $this.height();
                var winH = $(window).height();
                var scrollTop = $(window).scrollTop();

                $text.css({
                    paddingTop: '310px',
                    opacity: 0
                })

                if (currentPosTop <= (scrollTop + winH)) {
                    var _top = (scrollTop + winH - currentPosTop) / 4 * -1;
                    $text.css({
                        opacity: 1,
                        top: _top
                    })
                }
            });
        }

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

        (clientType.pc != 'mobile') && scrollBanner();//非移动端执行动画
        scrollAbout2();
        $(window).bind('scroll', function() {
            (clientType.pc != 'mobile') && scrollBanner();//非移动端执行动画
            (!_this.about2.hasClass('show')) && scrollAbout2();
        });
    },
    navScroll: function() {
        var _this = this;

        function _navScroll() {
            var scrollTop = $(window).scrollTop();
            var navH = _this.nav.height();
            if (scrollTop > navH) {
                _this.nav.css({
                    position: 'fixed',
                    zIndex: 2,
                    top: '-90px',

                })
            } else {
                _this.nav.css({
                    position: 'absolute',
                    zIndex: 2,
                    top: '0'
                })
            }
        }
        _navScroll();
        $(document).bind('mousewheel', function(event, delta, deltaX, deltaY) {
            var scrollTop = $(window).scrollTop();
            var navH = _this.nav.height();
            _navScroll();

            if (delta > 0) {
                _this.nav.removeClass('navUp').addClass('navDown');
            } else {
                !(scrollTop >= _this.footer.position().top) && _this.nav.removeClass('navDown').addClass('navUp');
            }
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
        console.log(commonJs.getBrowser());
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
    footerPos: function() {
        var _this = this;
        var winH = $(window).height();
        var footPosTop = _this.footer.position().top;
        var scrollTop = $(window).scrollTop();

        _this.footer.find('.footer-wrap').css({
            height: winH
        })
        if (scrollTop >= footPosTop) {
            _this.nav.css({
                top: 0
            })
        }
        $(window).bind('scroll', function() {
            var winH = $(window).height();
            var footPosTop = _this.footer.position().top;
            var scrollTop = $(window).scrollTop();

            if (scrollTop >= footPosTop) {
                _this.nav.removeClass('navUp').addClass('navDown');
            }
        });
    },
    bind: function() {
        var _this = this;
        _this.bannerScroll();
        _this.navScroll();
        _this.footerPos();
        _this.partnerFunc();
    },
    init: function() {
        var _this = this;
        _this.dom();
        _this.bind();

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
