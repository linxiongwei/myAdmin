<template>
	<header class="header">
		<img src="../../static/image/logo.png" class="fl">

		<ul>
			<li v-for="nav in navDate" @click="clickNav"><router-link :class="active == nav.url && activeClass" :to="{path:'/'+nav.url}">{{nav.text}}</router-link></li>
		</ul>
	</header>
</template>

<script type="text/javascript">
/*const changeNav = function(){
	alert(0)
}*/
export default{
	data(){
		return {
			activeClass:'curr',
			navDate:[
				{"text":"项目管理","url":"project"},
				{"text":"用户管理","url":"user"},
				{"text":"数据管理","url":"statistics"}
			]
		}
	},
	components:{},
	computed:{
		/*active(){
			return this.$route.text
		}*/
		active:function(){
			let name = this.$route.name
			
			//console.log(this.$route)
			return name
		}
	},
	methods:{
		changeRoute:function(name){
			this.$emit('changeNav',name)
		},
		clickNav:function(){
			this.changeRoute(this.$route.name)
		}
	}
}
</script>

<style lang="scss">

</style>