<style type="text/scss" lang="scss">
.slider{
	padding:10px;
	border:1px solid #ccc;
	div{
		margin-top:10px;
		width:30%;
		padding:20px;
		&.slider_cell1{
			background-color:#b2daff
		}
		&.slider_cell2{
			background-color:#ffdfb2
		}
		&.slider_cell3{
			background-color:#b2ffe7
		}
	}
}
.fbold{
	font-weight:bold;
	color:#f00;
}

@mixin animation($name){
	-webkit-animation:$name;
	-moz-animation:$name;
	border-animation:$name;
}
.fade-enter-active{
	@include animation(myfirst 1s);
}

.fade-leave-active{
	@include animation(secondfirst 1s);
}

@keyframes myfirst
{
from {opacity: 0;}
to {opacity: 1;}
}
@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
from {opacity: 0;}
to {opacity: 1;}
}

@keyframes secondfirst
{
from {opacity: 1;}
to {opacity: 0;}
}
@-webkit-keyframes secondfirst /* Safari 和 Chrome */
{
from {opacity: 1;}
to {opacity: 0;}
}
</style>

<template>
	<div>
		<!-- <table class="table">
			<thead>
				<tr>
					<td v-for="t in tableData.title">{{t}}</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in tableData.list">
					<td v-for="c in item">{{c}}</td>
					<td><a class="btn_line_blue" @click="deleteData(index,item.order)">删除</a></td>
				</tr>
			</tbody>
		</table> -->
		<table class="table">
			<thead>
				<tr>
					<td v-for="t in tableData.title" :class="{fbold:filterClass(t)}">{{t}}</td>
				</tr>
			</thead>
			<tbody>
				<tr is="tr-operate" v-for="(item,index) in tableData.list" :o="item">
					<td slot="custom"><a class="btn_line_blue" @click="deleteData(index,item.order)">删除</a></td>
				</tr>
			</tbody>
		</table>

		<slot-test>
			<button slot="first" @click="toastText">按钮</button>
		</slot-test>

		<p v-if="show">显示消失测试内容</p>

		<table-component :tableData="tableData2" class="mt_10"></table-component>

		<pagination :total="pageData.total" :current="pageData.curr" @clickPage="changeCurrent"></pagination>

		<div class="slider">
			<button @click="whickShow">点击让slider逐个显示</button>
			<keep-alive>
				<component :is="which_to_show"></component>
			</keep-alive>
		</div>

		<div class="slider mt_10">
			<button @click="whickShow2">点击让slider逐个显示,增加动画效果</button>
			<transition name="fade" mode="out-in">
				<component :is="which_to_show2"></component>
			</transition>
		</div>
	</div>
</template>

<script type="text/javascript">
import TableComponent from '../common/table.vue'
import Pagination from '../common/pagination.vue'
import TrOperate from '../common/tr-operate.vue'

const SlotTest = {
	template:"<p class='mt_10'>slot分发内容 <slot name='first'></slot> <slot><button @click='showCnt'>点击显示或消失以下内容</button></slot></p>",
	methods:{
		showCnt:function(){
			this.$parent.showFun()
		}
	}
}

export default{
	data(){
		return {
			which_to_show:"FirstSlider",
			which_to_show2:"first",
			show:true,
			pageData:{
				total:10,
				curr:1
			},
			tableData:{
				title:["序号","标题","姓名","内容","状态","操作"],
				list:[
					{
						order:'001',
						title:'送好礼',
						name:'王某某',
						text:'字字字字字字字',
						state:'进行中'
					},
					{
						order:'002',
						title:'送好礼',
						name:'王某某',
						text:'字字字字字字字',
						state:'已完成'
					}
				]
			},
			tableData2:{
				title:["序号","标题","姓名","内容"],
				list:[
					{
						order:'1',
						title:'送好礼',
						name:'王某某',
						text:'字字字字字字字'					
					},
					{
						order:'1',
						title:'送好礼',
						name:'王某某',
						text:'字字字字字字字'
					}
				]
			}
		}
	},
	components:{
		TrOperate,
		TableComponent,
		Pagination,
		SlotTest,
		FirstSlider:{
			template:'<div class="slider_cell1">区域1</div>'
		},
		SecondSlider:{
			template:'<div class="slider_cell2"><p v-for="list in slideCnt">{{list.title}}</p></div>',
			data(){
				return {
					slideCnt:""
				}
			},
			activated(){//当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
				var self = this;
				this.$http.jsonp("https://api.douban.com/v2/movie/top250?count=10",{},{
					headers:{},
					emulateJSON:true
				}).then(function(response){// 这里是处理正确的回调
					self.slideCnt = response.data.subjects
				},function(response){// 这里是处理错误的回调
					console.log(response)
				})
			}
		},
		ThirdSlider:{
			template:'<div class="slider_cell3">区域3</div>'
		},
		first:{
			template:'<div class="slider_cell1">区域1</div>'
		},
		second:{
			template:'<div class="slider_cell2"><p v-for="list in slideCnt">{{list.title}}</p></div>',
			data(){
				return {
					slideCnt:""
				}
			},
			activated(){//当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
				var self = this;
				this.$http.jsonp("https://api.douban.com/v2/movie/top250?count=10",{},{
					headers:{},
					emulateJSON:true
				}).then(function(response){// 这里是处理正确的回调
					self.slideCnt = response.data.subjects
				},function(response){// 这里是处理错误的回调
					console.log(response)
				})
			}
		},
		third:{
			template:'<div class="slider_cell3">区域3</div>'
		}
	},
	methods:{
		deleteData(index,oid){
			//console.log(this.$root)
			//console.log(this.$parent.$children.indexOf(this))
			alert(this.$parent.author)
			this.tableData.list.splice(index,1);
		},
		changeCurrent(n){
			this.pageData.curr = n
		},
		toastText(){
			alert(0)
		},
		showFun(){
			this.show = !this.show
		},
		whickShow(){//切换
			var arr = ['FirstSlider','SecondSlider','ThirdSlider']
			var index = arr.indexOf(this.which_to_show)
			if(index<2){
				this.which_to_show = arr[index+1]
			}else{
				this.which_to_show = arr[0]
			}
		},
		whickShow2(){//切换
			var arr = ['first','second','third']
			var index = arr.indexOf(this.which_to_show2)
			if(index<2){
				this.which_to_show2 = arr[index+1]
			}else{
				this.which_to_show2 = arr[0]
			}
		},
		filterClass(value){
			if(value=="状态"){
				return true;
			}else{
				return false;
			}
		}
	}
}
</script>