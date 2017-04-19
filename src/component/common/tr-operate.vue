<template>
	<tr >
		<td v-for="c in o">{{c}}</td>
		<slot name="custom"></slot>
	</tr>
</template>
<script type="text/javascript">
export default{
	props:{
		o:{
			type:Object
		}
	},
}
</script>