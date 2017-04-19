<style type="text/css" lang="scss">
$colorBlue:#6bb1ff;
.ipt_txt{
	border:1px solid #ccc;
	border-radius:5px;
	height:36px;
	width:300px;
	padding:0 10px;
	font-size:14px;
	&:focus{
		border-color:$colorBlue;
		box-shadow:0 0 10px $colorBlue;
	}
}
.ipt_btn{
	min-width:100px;
	padding:0 15px;
	text-align:center;
	height:36px;
	background:$colorBlue;
	color:#fff;
	font-size:14px;
	border:none;
	border-radius:5px;
	cursor:pointer;
}
.form{
	padding:20px;
	li{
		padding:10px 0;
		label{
			display:inline-block;
			min-width:100px;
			text-align:right;
			margin-right:10px;
		}
	}
}
</style>

<template>
	<div>
		<form>
			<ul class="form">
				<li>
					<label>姓名：</label><input type="text" class="ipt_txt" v-model="userData.name" />
				</li>
				<li>
					<label>手机号：</label><input type="tel" class="ipt_txt" v-model="userData.mobile" />
				</li>
				<li>
					<label>身份证：</label><input type="text" class="ipt_txt" v-model="userData.idcard" />
				</li>
				<li>
					<label>&nbsp;</label><input type="submit" class="ipt_btn" value="提交">
				</li>
			</ul>
		</form>
	</div>
</template>

<script>
export default{
	data(){
		return {
			userData:{
				name:"王飞",
				mobile:"15088559824",
				idcard:"330382199407113326"
			}
		}
	}
}
</script>