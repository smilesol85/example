(function () {

	// check image load
	var elLoad = $('.check-el-load');
	var nLoad = 0;

	elLoad.each(function() {
		$(this).on('load', function() {
			++nLoad;
			console.log('이미지 '+nLoad+'개 로드');
		});
	});
})();
