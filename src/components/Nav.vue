<template>
	<ul>
		<li>
			<router-link to="/home">Home</router-link>
	    </li>
	    <li>
			<router-link to="/about">About</router-link>
	    </li> 
	</ul>
</template>
<script>
/*import NavItem from './NavItem.vue'
*/
/*export default{
	components:{
		NavItem
	}
}	*/
</script>
<style>
ul li{
	list-style: none;
	width: 100px;
	height: 50px;
	background: yellow;
	margin-bottom: 5px;
	font-size: 20px;
	line-height: 50px;

}
ul{
	width: 150px;
}	
</style>