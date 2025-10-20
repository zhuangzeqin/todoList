<template>
  <div v-for="(item, index) in list" :key="index">
    <div class="item">
      <input type="checkbox" v-model="item.complete" />{{ item.title }}
      <button @click="del(index, item)">删除</button>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "NavMain",
  components: {},
  props: {
    list:{
      type:Array,
      default:[]
    }
  },
  setup(props, ctx) {
    // let list = ref([
    //   {
    //     title: "吃饭",
    //     complete: false,
    //   },
    //   {
    //     title: "睡觉",
    //     complete: false,
    //   },
    //   {
    //     title: "敲代码",
    //     complete: false,
    //   },
    // ]);
    //删除任务
    // let store = useStore();
    let del = (index, item) => {
      console.log(`删除任务:${index}${item.title}`);
      // store.commit('delTodo',index)
      //通过分发事件的方式；把删除的索引传递给父组件
      ctx.emit('del',index)
    };
    return {
      del,
    };
  },
});
</script>

<style lang="scss" scoped>
.item {
  height: 35px;
  line-height: 35px;
  width: 160px;
  position: relative;
  cursor: pointer;
  button {
    position: absolute;
    top: 6px;
    right: 10px;
    display: none;
    z-index: 99;
  }
  &:hover {
    background: #ddd;
    button {
      display: block;
    }
  }
}
</style>