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

  <!-- <div @click="clickNum(100)">
    {{ num1 }}
  </div>
  <div @click="clickNum2">
    {{ num2 }}
  </div>
  <div>num1 + num2 的和是{{ addNumber }}</div>
  <div @click="changeValue">改变num1,num2的值</div> -->

  <!-- <div>{{ list }}</div> -->

  <div @click="goto">跳转路由</div>
</template>
<script>
//编写js 的地方
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
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
    //router 是全局路由
    let router = useRouter()
    //route 当前的路由对象
    let route = useRoute()
    //query 传递过来的参数都是字符串类型；
    // console.log(route.query)
    // console.log(route.query.num)
    // console.log(typeof route.query.num)//打印参数的类型；比如字符串；

    console.log(route.params)

    let goto = () =>{
      //1 路由跳转,如果没有穿参数； 直接就是路由的路径； 也就是router/index.js 定义的path 路径即可
      // route.push('/about')
      //2 如果路由跳转需要传参数，则使用对象的{} 包裹起来； 
      //back 回退到上一个页面
      //forward 去到下一页
      //go(数字)：1正数则前进一个页面；1 ，-1则是回退上个页面
      router.push({
        path:'/about'
      })
    }

    let store = useStore()
    //拿到定义的store定义的list
    let list = computed(()=>{
      return store.state.list
    })
    //vue3.0 没有this的概念
    //1 ref 定义的是单个数据类型，比如数字；布尔值,字符串等
    let num1 = ref(1200); //数字
    let num2 = ref(1200); //数字
    //界面的上的值是通过计算得到的就可以用 computed
    //涉及到动态计算的时候 可以用computed 来计算(一般用在购物车里商品的总价计算)
    let addNumber = computed(()=>{
      //可以有其它的逻辑的处理； 这里值返回2个数的相加的和
      return num1.value+num2.value
    })
    //改变num1 num2 的值
    let changeValue = () =>{
      num1.value ++
      num2.value ++
    }
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
    let clickNum = (val) => {
      console.log("val:"+val)
      //访问ref 定义的的值是通过value 定义的
      console.log("aaaaaaaaaaaaaa" + num1.value);
    };

    let clickNum2 = () => {
      console.log("aaaaaaaaaaaaaa" + data.num);
    };
    // ***** toRefs 解构出来；注意不要与前面的名字有冲突； 如果有改其中一个即可 ****
    return {
      //1 直接页面中使用
      num1,
      num2,
      // name,
      // sex,
      // arr,
      // obj,
      //2 如果使用的是响应式对象的需要再页面中通过data.xxx 获取数据
      // data

      //3 ...toRefs(data) 解构方式 则页面不需要通过data.xx 来获取数据； 可以直接使用对象属性xxx
      ...toRefs(data),
      clickNum,
      clickNum2,
      addNumber,
      changeValue,
      list,
      goto
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