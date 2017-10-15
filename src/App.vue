<template>
  <div id="app">
    
    <div class="row">
        <div class="col-sm-2">
          <nav-comp>
     
          </nav-comp>
        </div>
        <div class="col-sm-10">
          <router-view></router-view>
        </div>  
    </div>
  </div>
</template>

<script>
  import Nav from './components/Nav.vue'
export default {
  name: 'app',
  components:{
    NavComp:Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
