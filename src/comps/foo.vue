<template>
   <div>
    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="img in imageList">
        <image @click="go" class="image" resize="cover" :src="img.src"></image>
      </div>
    </slider>
  </div>
</template>
<style scoped>
 .image {
    width: 750px;
    height: 750px;
  }
  .slider {
    width: 750px;
    height: 750px;
  }
  .frame {
    width: 750px;
    height: 750px;
    position: relative;
  }
</style>
<script>
  export default {
    data () {
      return {
        imageList: [
          { src: '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/46760/17/6465/378314/5d410eb8Ee0438775/866310e391656ef5.jpg'},
          { src: '//m.360buyimg.com/mobilecms/s720x720_jfs/t1/50710/39/6334/332198/5d410ea3E6bb31f90/0682796778ab70f3.jpg'},
          { src: '//m.360buyimg.com/mobilecms/s720x720_jfs/t1/83098/25/5908/385913/5d410e6eE88df52c4/b1bff3b032b7ed9b.jpg'},
          {src:'//m.360buyimg.com/mobilecms/s720x720_jfs/t1/83981/31/5907/382990/5d410ea2E299558ca/ecc91cd381949228.jpg'}
        ]
      }
    },
    created(){
        console.log('======3333')
        // console.log(this.$store.state.message)
    },
    methods:{
      go(){
        var modal=weex.requireModule('modal')
        modal.toast({
          message:'跳转到商品详情',
          duration:1
        })
      }
    }
  }
</script>
