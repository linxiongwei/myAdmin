<style type="text/scss" lang="scss">

</style>

<template>
	<div>
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
	</div>
</template>

<script type="text/javascript">
import TableComponent from '../common/table.vue'
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
			}
		}
	},
	components:{ TableComponent },
	methods:{
		deleteData:function(index,oid){
			//alert(index+","+oid)
			this.tableData.list.splice(index,1);
		}
	}
}
</script>