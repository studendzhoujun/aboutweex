<template>
  <div class="pro">
     <div @click="go" class="pro1"><text>1</text></div>
     <div class="pro1"><text>2</text></div>
     <div class="pro1"><text>3</text></div>
  </div>
</template>
<style scoped>
.pro1{
  width:200px;
  height: 200px;
  background-color:#800000;
}
.col{
  color:#800000;
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
