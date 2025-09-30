<template>
  <div>
    <input placeholder="请输入任务名称" v-model="value" />
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
    return {
      value,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>