<template>
  <!-- html 内容 -->
  <div>
    <NavHeader></NavHeader>
    <NavMain></NavMain>
    <NavFooter></NavFooter>
  </div>
  <!-- <div class="content">{{ num }}</div>
  <div class="content">{{ name }}</div>
  <div class="content">{{ sex }}</div> -->
  <!-- 可以使用表达式 -->
  <!-- <div class="content">{{ arr.slice(0,2) }}</div>
  <div class="content">{{obj}}</div> -->
</template>
<script>
//编写js 的地方
import { defineComponent, ref, reactive ,toRefs} from "vue";
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";
export default defineComponent({
  name: "Home", //组件名称
  //定义子组件的地方
  components: { NavHeader, NavMain, NavFooter },
  //接受父组件的数据
  props: {},
  setup(props, ctx) {
    //vue3.0 没有this的概念

    //1 ref 定义的是单个数据类型，比如数字；布尔值,字符串等
    // let num = ref(1200); //数字
    // let name = ref("jack"); //字符串
    // let sex = ref(true); //布尔类型
    // let arr = ref(["a", "b", "c", "d"]); //数组
    //定义单个对象方式
    // let obj = ref({
    //   name: "张三",
    //   age: 100,
    // });
    //2 reactive(响应式对象) 可以定义一个比较复杂的实体；界面可以通过这个实体data拿到具体的数据
    let data = reactive({
      num: 10,
      name: "jack",
      sex: true,
      arr: ["a", "b", "c", "d"],
      obj: {
        name: "张三",
        age: 100,
      },
    });
    // ***** toRefs 解构出来；注意不要与前面的名字有冲突； 如果有改其中一个即可 ****
    return {
      //1 直接页面中使用
      // num,
      // name,
      // sex,
      // arr,
      // obj,
      //2 如果使用的是响应式对象的需要再页面中通过data.xxx 获取数据
      // data

      //3 ...toRefs(data) 解构方式 则页面不需要通过data.xx 来获取数据； 可以直接使用对象属性xxx
      ...toRefs(data)
    };
  },
});
</script>


<style scoped lang="scss">
//样式 scoped 代表写的样式只在当前页面生效； scss 可以编写嵌套样式
.content {
  color: red;
  font-size: 40px;
  font-style: normal;
  text-align: center;
}
</style>