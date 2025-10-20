<template>
  <button @click="startTodo">开始任务</button>
</template>
<script>
import { defineComponent, ref, onMounted,onUnmounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  //setup 是组件创建的过程
  setup() {
    console.log('setup 是组件创建的过程')
    let name = ref("jack");
    let num = ref(10);
    let obj = ref({
      msg: "start",
    });

    onMounted(()=>{
      //组件挂载的过程包括 数据  dom
      //发请求
      //做一些数据的初始化操作（接受路由传递的参数）
      console.log('onMounted 组件挂载的过程')
    })

    onUnmounted(() => {
      //组件销毁的过程
      //定时器的清除；或者资源的回收等
    })
    let router = useRouter();
    let startTodo = () => {
      //query 传参是在路径上拼接上； 在浏览器上可以看到参数的,它有个特点就是页面刷新之后参数不会有变化
      //query 传参可以是name或者是path
      //params 则必须是name,参数在地址栏是不会出现的； 刷新之后就没有了；(2022-8-22 更新后，我们使用param传参在新页面无法获取数据。)
      router.push({
        // path: "/home",
        name: "Home",
        query: {
          name: name.value,
          num: num.value,
          obj: JSON.stringify(obj.value), //转json 字符串
        },
        //Vue3 使用router，params传参为空原文链接：https://blog.csdn.net/weixin_60886885/article/details/130052389
        // params: {
        //   name: name.value,
        //   num: num.value,
        //   obj: JSON.stringify(obj.value), //转json 字符串
        // },
        //使用 History API 方式传递和接收,在跳转前的页面使用 state 参数
        state: {
          name: name.value,
          num: num.value,
          obj: JSON.stringify(obj.value), //转json 字符串
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