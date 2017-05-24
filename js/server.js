var rotateBanner = {
    dom: function() {
        var _this = this;
        _this.container = $('.rotate');
        _this.leftCover = _this.container.find('.left');
        _this.rightCover = _this.container.find('.right');
        _this.num = _this.container.find('.num');
        _this.circle = _this.container.find('.circle');
        _this.circleBg = _this.circle.find('.bg');
        _this.bigText = _this.circle.find('.big');
        _this.panels = _this.container.find('.r-item');

        _this.timer = null;
        _this.index = 0;
    },
    circleRotate: function() {
        var _this = this;
        var index = _this.index + 1;
        var len = _this.panels.length;
        if (_this.container.hasClass('ing')) return;
        // console.log(index);
        var $current = _this.container.find('.r-item-' + index);
        index = index == len ? 0 : index;
        var $next = _this.container.find('.r-item-' + (index + 1));
        var _currentBg = $current.css('backgroundColor');
        var _nextBg = $next.css('backgroundColor');
        var _timer = null;

        _this.container.addClass('ing');

        if (index % 2) {
            $current.find('.r-item-l').css({
                zIndex: 3
            })
            _this.rightCover.css({
                transitionProperty: 'transform',
                transitionDuration: '.5s',
                transitionTimingFunction: 'cubic-bezier(.57,.14,.86,.49)',
                transform: 'rotate(180deg)',
                zIndex: 1
            })
            _this.leftCover.css({
                background: _nextBg,
                transitionProperty: 'transform',
                transitionDuration: '.5s',
                transitionTimingFunction: 'cubic-bezier(.57,.14,.86,.49)',
                transform: 'rotate(180deg)',
                zIndex: 2
            }).bind('transitionend', function() {
                $current.css({
                    visibility: 'hidden'
                })
                $next.css({
                    visibility: 'visible'
                })
                _this.rightCover.css({
                    background: _currentBg,
                    transitionProperty: 'transform',
                    transitionDuration: '.5s',
                    transitionTimingFunction: 'cubic-bezier(.29,.6,.5,.81)',
                    transform: 'rotate(360deg)'
                })
                _timer = setTimeout(function() {
                    _this.leftCover.removeAttr('style').unbind('transitionend');
                    _this.rightCover.removeAttr('style').unbind('transitionend');
                    $current.find('.r-item-l').removeAttr('style');
                    _this.container.removeClass('ing');
                    clearTimeout(_timer);
                    _timer = null;
                    index++;
                }, 500);

            })

        } else {
            $current.find('.r-item-r').css({
                zIndex: 3
            })
            _this.rightCover.css({
                background: _nextBg,
                transitionProperty: 'transform',
                transitionDuration: '.5s',
                transitionTimingFunction: 'cubic-bezier(.57,.14,.86,.49)',
                transform: 'rotate(180deg)',
                zIndex: 2,
            })

            _this.leftCover.css({
                transitionProperty: 'transform',
                transitionDuration: '.5s',
                transitionTimingFunction: 'cubic-bezier(.57,.14,.86,.49)',
                transform: 'rotate(180deg)',
                zIndex: 1
            }).bind('transitionend', function() {
                $current.css({
                    visibility: 'hidden'
                })
                $next.css({
                    visibility: 'visible'
                })
                _this.leftCover.css({
                    background: _currentBg,
                    transitionProperty: 'transform',
                    transitionDuration: '.5s',
                    transitionTimingFunction: 'cubic-bezier(.29,.6,.5,.81)',
                    transform: 'rotate(360deg)',
                    zIndex: 1
                })
                _timer = setTimeout(function() {
                    _this.leftCover.removeAttr('style').unbind('transitionend');
                    _this.rightCover.removeAttr('style').unbind('transitionend');
                    $current.find('.r-item-l').removeAttr('style');
                    _this.container.removeClass('ing');
                    clearTimeout(_timer);
                    _timer = null;

                    index++;
                }, 500);
            })
        }
    },
    fadeChange: function(obj, text, startCss, endCss) {
        var _this = this;
        if (!obj.length) return;
        var _timer = null;
        var _startCss = $.extend({ transition: 'all .4s' }, startCss);
        obj.css(_startCss).bind('transitionend', function() {
            obj.css(endCss)
            obj.html(text);
            _timer = setTimeout(function() {
                console.log('fadeChange');
                obj.removeAttr('style').unbind('transitionend');
                clearTimeout(_timer);
                _timer = null;
            }, 400)
        })
    },
    start: function() {
        var _this = this;
        var _rotate = _this.rotate || 0;
        var _index = _this.index || 0;
        var _len = _this.panels.length;
        var _between = parseInt(360 / _len);

        //初始化
        if ((_rotate == 0) && (_index == 0)) {
            change();
        }

        function change() {
            _index = _index == _len ? 0 : _index;
            var _color = _this.container.find('.r-item-' + (_index + 1)).css('backgroundColor');
            _this.circle.find('.icon-' + (_index + 1)).css({
                backgroundColor: _color
            }).siblings('.icon').css({
                backgroundColor: 'transparent'
            });

            _this.currentName = _this.circle.find('.name-' + (_index + 1));
            _this.currentName.addClass('active').siblings('.name').removeClass('active');

            var _name = _this.currentName.text();
            _name = _name.substr(0, 2) + '&nbsp;&nbsp;' + _name.substr(2);
            // console.log(_name);

            _this.fadeChange(_this.bigText, _name, { opacity: 0 }, { opacity: 1 })
            _this.fadeChange(_this.num, '0' + (_index + 1), { opacity: 0, width: 0 }, { opacity: 1, width: '20px' })
        }
        _this.timer = setInterval(function() {
            // console.log(_rotate);
            _rotate++;
            _this.circleBg.css({
                transform: 'rotate(' + _rotate + 'deg)'
            })
            _index = Math.floor(_rotate / _between);


            if (_rotate % _between == 0) {
                change();
                _this.circleRotate();
            }


            _index >= _len && (_rotate = 0);
            _this.index = _index;
            _this.rotate = _rotate;

        }, 150)

    },
    stop: function() {
        var _this = this;
        clearInterval(_this.timer);
        _this.timer = null;
    },
    bind: function() {
        var _this = this;

        _this.container.hover(function() {
            _this.stop();
        }, function() {
            _this.start();
        });
    },
    init: function() {
        var _this = this;
        _this.dom();
        _this.bind();
        _this.start();
    }
}
rotateBanner.init();
