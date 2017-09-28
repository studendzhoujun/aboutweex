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
          { src: '//gfs17.gomein.net.cn/T1zZAvBCAj1RCvBVdK_400.jpg'},
          { src: '//gfs17.gomein.net.cn/T1hvJTBXYv1RCvBVdK_400.jpg'},
          { src: '//gfs.gomein.net.cn/T17oKvBmYQ1RCvBVdK_400.jpg'},
          {src:'//gfs17.gomein.net.cn/T19mYvBKZs1RCvBVdK_400.jpg'}
        ]
      }
    },
    created(){
        console.log('======9090')
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
