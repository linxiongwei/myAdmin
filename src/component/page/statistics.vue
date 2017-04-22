<style lang="scss">
.echart_box{
	border:1px solid #ccc;
	min-height:500px;
	padding:20px;
	margin-bottom:20px;
}
#echartMain{
	width:100%;
	height:500px;
}
</style>
<template>
	<div class="echart_box">
		<div id="echartMain"></div>
	</div>
</template>

<script>
var echarts = require('echarts');

export default{
	data(){
		return {

		}
	},
	mounted(){
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echartMain'));
		// 绘制图表
		myChart.setOption({
		    title: { text: 'ECharts 示例' },
		    tooltip: {},
		    xAxis: {
		        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		    },
		    yAxis: {},
		    series: [{
		        name: '销量',
		        type: 'bar',
		        data: [5, 20, 36, 10, 10, 20]
		    }]
		});
	}
}
</script>