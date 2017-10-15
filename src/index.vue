<template>
   <div>
   <top></top>
   <product></product>
  </div>  
</template>
<script>
  import top from './comps/foo.vue'
  import product from './comps/product.vue'
  export default {
    data () {
      return {
    
      }
    },
    components:{
        top,
        product,
    }
  }
</script>
