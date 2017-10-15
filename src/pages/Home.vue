<template>
	<div class="box">
		<h1>{{msg}}</h1>
		<ul id="ul">

			<li v-for="(item,index) in movies">
				<!--  -->
			    <div class="row" id="row">
			    	<div class="col-sm-3">
			    		<img :src="item.images.small"/>
			    	</div>
			    	<div class="col-sm-9">
			    		{{item.title}}
			    		<br>
				        年龄：{{item.year}}
				        &nbsp;&nbsp;&nbsp;
				        类型：{{item.subtype}}
			    	</div>
			    </div>
			</li>
		</ul>
	</div>
	
</template>
<script>
	export default {
		name:'home',
		data:function(){
			return{
				msg:'我是Home',
				movies:[]
			}
		},
		created(){
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
                headers:{},
                emulateJSON:true
            }).then(function(res){
                console.log(res)
                this.movies=res.data.subjects;
                console.log(this.movies);
            },function(res){
                /*console.log(res)*/
            })
        }

	}
</script>
<style>
#ul{
	background: pink;
}
	#ul li{
		width: 1000px;
		height: 100px;
		list-style: none;
	}
	#row{
		width: 700px;
		height: 100px;
	}
	.box{
		background: pink;
	}
</style>