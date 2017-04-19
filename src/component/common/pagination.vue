<style type="text/css" lang="scss">
$blueColor:#6bb1ff;
@mixin border-radius($px){
	-webkit-border-radius:$px;
	-moz-border-radius:$px;
	border-radius:$px;
}
.pagination{
	text-align:center;
	line-height:24px;
	padding:20px 0;
	a{
		display:inline-block;
		border:1px solid $blueColor;
		padding:0 8px;
		@include border-radius(3px);
		color:$blueColor;
		cursor:pointer;
		margin:0 2px;
		&:hover,&.curr{
			text-decoration:none;
			background-color:$blueColor;
			color:#fff;
		}
	}
	input{
		width:40px;
		height:24px;
		border:1px solid #aaa;
		text-align:center;
		@include border-radius(3px);
	}
	button{
		height:26px;
		padding:0 8px;
		cursor:pointer;
	}
}
</style>

<template>
	<div class="pagination">
		<a @click="into(1)">首页</a>
		<a @click="prev">上一页</a>
		<a v-for="n in range" :class="n == current && 'curr'" @click="into(n)">{{n}}</a>
		<a @click="next">下一页</a>
		<a @click="into(total)">尾页</a>
		<span>跳转到</span>
		<input type="text" v-model="index">
		<span>页</span>
		<button @click="into(index)">确定</button>
	</div>
</template>

<script type="text/javascript">
export default{
	props:{
		total:{
			type:Number,
			default:1
		},
		current:{
			type:Number,
			default:1
		}
	},
	data(){
		return {
			size:7,
			index:''
		}
	},
	methods:{
		into:function(n){
			n
			if(!!n&&n!=this.current){
				this.$emit("clickPage",parseInt(n))
			}
		},
		prev:function(){
			var n = this.current
			if(n>1){
				n--
				this.into(n)
			}
		},
		next:function(){
			var n = this.current
			if(n<this.total){
				n++
				this.into(n)
			}
		}
	},
	computed:{
		range:function(){
			var item = parseInt(this.size/2)
			var arr = []
			if(this.current<=item){
				for(var i=1; i<=this.size; i++){
					arr.push(i)
				}
			}else if(this.current>=(this.total-item)){
				for(var i=(this.total-this.size+1); i<=this.total; i++){
					arr.push(i)
				}
			}else{
				for(var i=(this.current-item); i<=(this.current+item); i++){
					arr.push(i)
				}
			}
			return arr;
		}
	}
}
</script>