<template>
  <div class="pro">
     <div @click="go" class="pro1"><text>1</text></div>
     <div class="pro1"><text>2</text></div>
     <div class="pro1"><text>3</text></div>
  </div>
</template>
<style lang="less" scoped>
.pro{
  .pro1{
    width:200px;
    height: 200px;
    background-color:#656458;
  }
}
</style>
<script>
  export default {
    data () {
      return {
      
      }
    },
    methods:{
      go(){
        alert(90)
      }
    }
  }
</script>
