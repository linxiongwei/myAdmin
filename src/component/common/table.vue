<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<td v-for="c in tableData.title">{{c}}</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="tr in tableData.list">
					<td v-for="c in tr">{{c}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script type="text/javascript">
export default{
	props:{
		tableData:{
			type:Object
		}
	}
}
</script>