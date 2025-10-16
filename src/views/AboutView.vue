<template>
  <div class="about">
    <h1>这个是 about 页面</h1>
    <button @click="back">回退到首页</button>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name:'about',
  setup() {
    let router = useRouter()
    let back = () =>{
      // router.back();
      router.go(-1)
    }

    return{
      back
    }
  },
})
</script>

<style scoped>

</style>
