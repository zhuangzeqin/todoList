<template>
  <button @click="startTodo">开始任务</button>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    let name = ref("jack");
    let num = ref(10);
    let obj = ref({
      msg: "start",
    });
    let router = useRouter();
    let startTodo = () => {
        //query 传参是在路径上拼接上； 在浏览器上可以看到参数的,它有个特点就是页面刷新之后参数不会有变化
      router.push({
        path: "/home",
        // query: {
        //   name: name.value,
        //   num: num.value,
        //   obj:JSON.stringify(obj.value),//转json 字符串
        // },
        params: {
          name: name.value,
          num: num.value,
          obj:JSON.stringify(obj.value),//转json 字符串
        },
      });
    };

    return {
      startTodo,
    };
  },
});
</script>

<style scoped>
</style>