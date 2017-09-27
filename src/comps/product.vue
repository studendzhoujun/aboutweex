<template>
  <div class="pro">
     <div @click="go(index)" v-for="(item,index) in datalist" :class="item.clist"><text>{{item.text}}</text></div>
  </div>
</template>
<style scoped>
.pro{
   display:flex;
   flex-direction: row
}
.pro1{
    height: 200px;
    background-color:#090;
    flex-direction: row;
    flex:1;
}
.active{
    background-color:#423233;
}
</style>
<script>
  export default {
    data () {
      return {
         shouldFixed:true,
         clist:['pro1'],
         datalist:[
           {clist:['pro1'],text:'a'},
           {clist:['pro1'],text:'b'},
           {clist:['pro1'],text:'c'},
           {clist:['pro1'],text:'d'}
         ]
      }
    },
    methods:{
      go(index){
        var modal=weex.requireModule('modal')
        modal.toast({
          message:'i am a toast',
          duration:1
        })
        this.datalist.forEach(item=>{
         for(var i=0;i<item.clist.length;i++){
           if(item.clist[i]=='active'){
             item.clist=['pro1']
           }
         }
        })
        this.datalist[index].clist.push('active')
      }
    }
  }
</script>
