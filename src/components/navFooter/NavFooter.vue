<template>
  <div>
    <div v-if="list.length > 0">
      <div class="container">
        <div>已完成{{ isComplete }}/全部{{ list.length }}</div>
        <div v-if="isComplete > 0">
          <button class="btn" @click="clear">清除已完成</button>
        </div>
      </div>
    </div>
    <div v-else>暂无任务</div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "NavFooter",
  components: {},
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  setup(props, ctx) {
    // let isComplete = ref(1);

    let isComplete = computed(() => {
      //过滤出已经完成的
      let arr = props.list.filter((item) => item.complete);

      return arr.length;
    });

    let store = useStore();

    //清除操作
    let clear = () => {
      //过滤出未完成的
      let arr = props.list.filter((item) => item.complete === false);
      console.log('过滤出未完成的:'+arr)
      store.commit("clear", arr);
    };
    return {
      isComplete,

      clear,
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