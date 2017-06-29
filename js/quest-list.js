//课程选集列表
var questList = avalon.define({
    $id: "questList",
    modelList: [{title: '模板标题1'},{title: '模板标题2'},{title: '模板标题3'}],
    tempModelList: [{title: '模板标题1'},{title: '模板标题2'},{title: '模板标题3'},{title: '模板标题4'},{title: '模板标题5'}],
    modelTabIndex: 0,
    questTitle: '嘿嘿',
    questIntro: '',
    valid_start_at: '',
    valid_end_at: '',

})

$(document).ready(function() {
	console.log('heihei')
	$('#daterange-btn').daterangepicker({
		ranges: {
			'今天': [moment(), moment()],
			'本周': [moment().startOf('week'), moment().endOf('week')],
			'本月': [moment().startOf('month'), moment().endOf('month')],
			'今年': [moment().startOf('year'), moment().endOf('year')]
		},
		startDate: moment(),
		endDate: moment().endOf('month'),
		autoApply: true
	},
	function (start, end) {
		$('#daterange-btn span').html(start.format('YYYY-MM-DD') + ' 至 ' + end.format('YYYY-MM-DD'));
		var begin = start.format('YYYY-MM-DD'),
		last = end.format('YYYY-MM-DD')
		questList.valid_start_at = Date.parse(new Date(begin)) / 1000;
		questList.valid_end_at = Date.parse(new Date(last)) / 1000;
		console.log(questList.valid_start_at, questList.valid_end_at);
	});
});

