<script lang='ts'>
import { defineComponent, ref } from 'vue';
 
 
export default defineComponent({
 
setup(){
    let sunShow=ref(true);
let theme=localStorage.getItem("Theme")
   function changeBg(color:string){
       if(color==='#ffffff'){
              sunShow.value=true;
       }
       else{
           sunShow.value=false;
       }
       if(
         document.querySelector('body')
       ){

 document.querySelector('body').setAttribute('style',`background-color:${color}`);
       }
 localStorage.setItem("Theme",color);
    }
    changeBg(theme  || '#ffffff');
return{
 changeBg,sunShow
}
}
})
</script>
 
<template>
<div class="flex justify-center gap-6">
  <i
    class="bi bi-brightness-high-fill text-4xl text-rose-500/90 cursor-pointer"
    @click="changeBg('#ffffff')"
    v-if="!sunShow"
  ></i>
  <i
    class="bi bi-moon-fill text-4xl text-gray-500/90 cursor-pointer"
    @click="changeBg('#22272e')"
    v-if="sunShow"
  ></i>
  <a href="https://github.com/" target="_blank" class="bi bi-github text-4xl cursor-pointer text-gray-500/90"> </a>
  </div>
</template>
 
<style scoped>
.c {
  background: #22272e86;
}
</style>