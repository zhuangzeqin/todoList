<template>
  <div class="container">
    <div>已完成{{ isComplete }}/全部{{ all }}</div>
    <div v-if="isComplete > 0">
      <button class="btn" @click="clear">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "NavFooter",
  components: {},
  props: {},
  setup(props, ctx) {
    let isComplete = ref(1);
    let all = ref(3);
    //清除操作
    let clear = () => {
      console.log("清除操作")
    };
    return {
      isComplete,
      all,
      clear
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  .btn {
    margin-left: 10px;
  }
}
</style>