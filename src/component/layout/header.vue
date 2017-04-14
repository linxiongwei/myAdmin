<template>
	<header class="header">
		<img src="../../static/image/logo.png" class="fl">

		<ul>
			<li v-for="nav in navDate"><router-link :class="active == nav.url && activeClass" :to="{path:'/'+nav.url}">{{nav.text}}</router-link></li>
		</ul>
	</header>
</template>

<script type="text/javascript">
export default{
	data(){
		return {
			activeClass:'curr',
			navDate:[
				{"text":"项目管理","url":"project"},
				{"text":"用户管理","url":"user"},
				{"text":"活动管理","url":"activity"}
			]
		}
	},
	computed:{
		/*active(){
			return this.$route.text
		}*/
		active:function(){
			//console.log(this.$route)
			return this.$route.name
		}
	}
}
</script>

<style lang="scss">

</style>