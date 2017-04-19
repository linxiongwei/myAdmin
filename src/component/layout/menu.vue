<template>
	<menu class="leftsidebar">
		<li v-for="nav in navDate"><router-link :class="active == nav.url && activeClass" :to="{path:'/'+nav.url}">{{nav.text}}</router-link></li>
	</menu>
</template>

<script type="text/javascript">
export default{
	props:{
		headerRoute:{
			type:String
		}
	},
	data(){
		return {
			activeClass:'curr',
			allMenuData:{
				"project":[
					{"text":"项目列表1","url":"project"},
					{"text":"项目列表2","url":"project2"},
					{"text":"项目列表3","url":""}
				],
				"user":[
					{"text":"用户列表1","url":"user"},
					{"text":"用户列表2","url":""}
				],
				"activity":[
					{"text":"活动列表1","url":"activity"}
				]
			},
			navDate:[
				{"text":"项目列表1","url":"project"},
					{"text":"项目列表2","url":"project2"},
					{"text":"项目列表3","url":""}
			]
		}
	},
	computed:{
		active(){
			//console.log(this.headerRoute);
			this.navDate = this.allMenuData[this.headerRoute]
			//console.log(this.$route.name)
			return this.$route.name
		}
		/*active:function(){
			//console.log(this.$route)
			return this.$route.name
		}*/
	}
}
</script>

<style lang="scss">

</style>