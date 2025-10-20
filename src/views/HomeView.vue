<template>
  <!-- html 内容 -->
  <div>
    <NavHeader @addNewTodoItem="addNewTodoItem"></NavHeader>
    <NavMain :list="list" @del="del"></NavMain>
    <NavFooter :list="list"></NavFooter>
  </div>

  <div @click="saveTodoList">保存任务</div>
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

  <!-- <div @click="goto">跳转路由</div> -->

  <!-- <div>{{ name }} - {{ num }} - {{ obj }}</div> -->
</template>
<script>
//编写js 的地方
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  computed,
  onMounted,
  onUnmounted,
} from "vue";
import { createLogger, useStore } from "vuex";
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
    let store = useStore();
    //拿到定义的store定义的list
    let list = computed(() => {
      return store.state.list;
    });
    //router 是全局路由
    let router = useRouter();
    // route 当前的路由对象
    let route = useRoute();
    //query 传递过来的参数都是字符串类型；
    // console.log(route.query)
    // console.log(route.query.num)
    // console.log(typeof route.query.num)//打印参数的类型；比如字符串；
    //params 方式获取参数
    // console.log(route);
    // console.log(route.params);
    // console.log(route.params.num); // 输出传递的 num 值
    //1 获取history中我们上个页面保存的数据（2022-8-22 更新后，我们使用param传参在新页面无法获取数据。）
    let state = history.state;
    console.log(state.name);
    console.log(state.num);
    console.log(state.obj);

    let name = ref("");
    let num = ref(0);
    let obj = ref({});

    console.log(typeof num.value);

    onMounted(() => {
      //组件挂载的过程 （dom 数据）
      //初始化数据；比如接受路由传递的参数
      // name.value = state.name;
      // num.value = state.num * 1; //如果是字符串这里可以乘以1 转换为数字类型number
      // obj.value = JSON.parse(state.obj); //转换为obj 对象
      //发送请求

      store.commit("initTodo");
    });
    onUnmounted(() => {
      //组件卸载时的生命周期； 销毁
      //定时器的清除；清除闭包函数；资源回收的操作
    });
    // let tempList = ref([1,2,3])
    // console.log(typeof tempList.value)
    let itemValue = ref("");
    let addNewTodoItem = (val) => {
      console.log(val);
      //判断一下是否有存在的任务； 如果有则不能重复添加
      itemValue.value = val;
      console.log(Array.isArray(list.value)); //判断是否是数组；true 如果是 false 就不是
      console.log(list.value.length);

      let falg = list.value.findIndex((item) => item.title === itemValue.value);
      // includes
      // indexOf
      // console.log("falg:"+list.value.toString())
      if (falg > -1) {
        alert("已经存在当前任务");
        return;
      }
      //调用mutation 里的方法去添加
      store.commit("addTodo", {
        title: itemValue.value,
        complete: false,
      });
    };
    // emits:['del']
    //删除操作
    let del = (val) => {
      store.commit("delTodo", val);
    };
    //本地缓存todoList
    let saveTodoList = () => {
      // let todoList = JSON.stringify(list.value);
      // localStorage.setItem("todoList", todoList);
      store.commit("saveTodoList");
      alert("本地缓存todoList");
    };

    let goto = () => {
      //1 路由跳转,如果没有穿参数； 直接就是路由的路径； 也就是router/index.js 定义的path 路径即可
      // route.push('/about')
      //2 如果路由跳转需要传参数，则使用对象的{} 包裹起来；
      //back 回退到上一个页面
      //forward 去到下一页
      //go(数字)：1正数则前进一个页面；1 ，-1则是回退上个页面
      router.push({
        path: "/about",
      });
    };

    //vue3.0 没有this的概念
    //1 ref 定义的是单个数据类型，比如数字；布尔值,字符串等
    let num1 = ref(1200); //数字
    let num2 = ref(1200); //数字
    //界面的上的值是通过计算得到的就可以用 computed
    //涉及到动态计算的时候 可以用computed 来计算(一般用在购物车里商品的总价计算)
    let addNumber = computed(() => {
      //可以有其它的逻辑的处理； 这里值返回2个数的相加的和
      return num1.value + num2.value;
    });
    //改变num1 num2 的值
    let changeValue = () => {
      num1.value++;
      num2.value++;
    };
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
      console.log("val:" + val);
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
      num,
      name,
      // sex,
      // arr,
      obj,
      //2 如果使用的是响应式对象的需要再页面中通过data.xxx 获取数据
      // data

      //3 ...toRefs(data) 解构方式 则页面不需要通过data.xx 来获取数据； 可以直接使用对象属性xxx
      ...toRefs(data),
      clickNum,
      clickNum2,
      addNumber,
      changeValue,
      list,
      goto,
      addNewTodoItem,
      itemValue,
      del,
      saveTodoList,
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