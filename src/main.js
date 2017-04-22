import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

//定义页面组件
const projectContent = { template:'<h2>项目内容</h2>' }
const userContent = { template:'<h2>用户内容</h2>' }
const activityContent = { template:'<h2>活动内容</h2>' }
import projectList from './component/page/projectList.vue'
import projectList2 from './component/page/projectList2.vue'
import userForm from './component/page/userForm.vue'
import statistics from './component/page/statistics.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:[
		{
			path:'/project',
			name:'project',
			component:projectList
		},
		{
			path:'/user',
			name:'user',
			component:userForm
		},
		{
			path:'/statistics',
			name:'statistics',
			component:statistics
		},
		{
			path:'/project2',
			name:'project2',
			component:projectList2
		}
	]
})

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
	router,//等同于router:router,
	render: h => h(App)
}).$mount("#app")
/*new Vue({
  el: '#app',
  render: h => h(App)
})*/