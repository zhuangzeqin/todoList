<template>
  <div>
    <input placeholder="请输入任务名称" v-model="value"
    @keydown.enter="enter"
     />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "NavHeader",
  components: {},
  props: {},
  setup(props, ctx) {
    let value = ref("");
    let enter = ()=>{
      // console.log(value.value)
      //把输入框的输入的值传递给父组件
      ctx.emit('addNewTodoItem',value.value)
      //清空 输入框
      value.value = ''
    }
    return {
      value,
      enter
    };
  },
});
</script>

<style lang="scss" scoped>
input{
  margin-bottom: 10px;
}
</style>