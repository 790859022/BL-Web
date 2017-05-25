var clientType = commonJs.getBrowser();
var pagePage = {
	dom:function(){
		var _this = this;
		_this.pageTypeSelect = $('.pro-list-type');
	},
	bind:function(){
		var _this = this;
		_this.pageTypeSelect.on('click','ul li',function(){
			var $this = $(this);
			var _type = $this.attr('data-type');
			var _filterStr = '[data-type="' + _type +  '"]';
			var $hideLayer = _this.pageTypeSelect.find('.type-list');

			
			$this.addClass('active').siblings().removeClass('active');
			if($hideLayer.filter(_filterStr).is(':hidden')){
				$hideLayer.stop(true,true).slideUp();
				$hideLayer.filter(_filterStr).slideDown();
			}else{
				$hideLayer.slideUp();
			}
			
			if(_type == 'recommend'){
				alert('加载推荐案例');
			}
		});
		_this.pageTypeSelect.on('click','.type-list .item',function(){
			var $this = $(this);
			_this.pageTypeSelect.find('.type-list .item').removeClass('active');
			$this.addClass('active');
			alert('加载'+ $this.text() + '数据');
		})
	},
	init:function(){
		var _this = this;
		_this.dom();
		_this.bind();

	}
}
pagePage.init();