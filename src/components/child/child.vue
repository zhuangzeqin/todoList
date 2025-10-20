<template>
  <div>
    <h1>这是 child 页面</h1>
    父组件传递过来的数据：{{ msg }}
  </div>

  <button @click="emitData">子组件传递数据给父组件</button>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Child",
  //接受父组件传递过来的数据
  //props 不能直接更改
  props: {
    msg: {
      //数据类型
      type: String,
      //是否必传 默认是false
      required: false,
      //默认值；如果没有传值；就使用默认值
      default: "",
    },
  },
  setup(props, ctx) {
    console.log(props.msg);

    let childMsg = ref("我是子组件的数据");

    let childNum = ref(10);

    let emitData = () => {
      //通过ctx.emit 分发事件给父组件（第一个参数是事件名称，父组件是需要@这个事件名称； 第二个是参数是要传递的数据）
      //   ctx.emit("emitData", childMsg.value);//单个数据传递
      //   ctx.emit("emitData", [childMsg.value,childNum.value]);//多个数据可以用数组传递,也可以构建一个对象传递(推荐)
      ctx.emit("emitData", {
        msg: childMsg.value,
        num: childNum.value,
      });
    };

    return {
      emitData,
      childMsg,
    };
  },
});
</script>

<style scoped>
</style>

