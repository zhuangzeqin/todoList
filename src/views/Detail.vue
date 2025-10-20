<template>
  <div>
    <h1>这是 detail 页面</h1>
    <!-- 子组件通过分发事件@xxx；传递数据给父组件-->
    <child :msg="msg" @emitData="handEmitData"></child>
  </div>
</template>
<script>
// import Child from '@/components/child/child.vue'
import { defineComponent, ref } from "vue";
//引入组件
import child from "@/components/child/child";

export default defineComponent({
  name: "detail",
  components: {
    child, //引入组件
  },
  setup() {
    let msg = ref("这是父组件的数据");
    //定义接受的分发的事件函数
    let handEmitData = (val) => {
      console.log(val);
    };
    return {
      msg,
      handEmitData,
    };
  },
});
</script>

<style scoped>
</style>

