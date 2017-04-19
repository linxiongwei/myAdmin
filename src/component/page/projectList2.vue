<style type="text/scss" lang="scss">

</style>

<template>
	<div>
		<recursion-component v-if="a" :a="a.a" :b="a.b"></recursion-component>		

		<table class="table">
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
		</table>

		<table-component :tableData="tableData2" class="mt_10"></table-component>

		<table class="table mt_10">
			<thead>
				<tr>
					<td>金额</td>
					<td>手机号</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="c in tableData3">
					<td>{{c.amount | decimal}}</td>
					<td>{{c.mobile | ellipsis}}</td>
				</tr>
			</tbody>
		</table>

		<button @click="abcFun">调用公用js</button>
	</div>
</template>

<script>
import Vue from 'vue'
import TableComponent from '../common/table.vue'
import {subNumFun} from '../../static/script/public'


//全局注册组件,以下是实现递归的组件,但写if条件阻断，不能无限循环下去
Vue.component("recursionComponent",{
	template:'<ul><li>{{b}}</li><recursion-component v-if="a" :a="a.a" :b="a.b"></recursion-component></ul>',
	props:["a","b"]
})

//过滤
Vue.filter("decimal",function(value){
	return subNumFun(value,2)
})

Vue.filter("ellipsis",function(val){
	return val.slice(0,3)+"****"+val.slice(7,11)
})

export default{
	data(){
		return {
			tableData:{
				title:["序号","标题","姓名","内容","操作"],
				list:[
					{
						order:'001',
						title:'送好礼',
						name:'王某某',
						text:'字字字字字字字'
					},
					{
						order:'002',
						title:'送好礼',
						name:'王某某',
						text:'字字字字字字字'
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
			},
			tableData3:[
				{amount:12.5889,mobile:"15088649680"},
				{amount:6.892,mobile:"13968715012"},
				{amount:59,mobile:"13705214542"}
			],
			a:{
				a:{
					a:0,
					b:3
				},
				b:2
			},
			b:1
		}
	},
	components:{ TableComponent /*, recursionComponent*/ },
	methods:{
		deleteData:function(index,oid){
			//alert(index+","+oid)
			this.tableData.list.splice(index,1);
		},
		abcFun:function(){
			let xx = 12.5869
			alert(subNumFun(xx,2))
			//abc(2)
		}
	}
}
</script>