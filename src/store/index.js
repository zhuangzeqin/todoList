import { createStore } from "vuex";

export default createStore({
  //定义所需要的状态，每个组件的数据共享
  state: {
    name: "jack",
    list: [
      {
        title: "吃饭",
        complete: false,
      },
      {
        title: "睡觉",
        complete: false,
      },
      {
        title: "敲代码",
        complete: true,
      },
    ],
  },
  getters: {},
  //同步修改state,都是方法
  mutations: {
    //第一个是state ,第二个是需要修改的值
    setName(state, playLoad) {
      state.name = playLoad;
    },
    //添加任务到列表里
    addTodo(state, item) {
      state.list.push(item);
    },
    //删除任务 splice(下标，个数)
    delTodo(state, index) {
      state.list.splice(index, 1);
    },
    //清除已完成
    clear(state, array) {
      //把过滤之后的数组传递进来（过滤已完成的任务）
      state.list = playLoad;
    },
  },
  //异步提交mutations （这里就可以发请求或定时器之类的）
  //第一个参数是store,第二个是要修改的值
  actions: {
    asyncSetName(store, params) {
      //比如异步2s 修改这个name
      setTimeout(() => {
        //commit 是用来提交mutations,实际上就是调用mutations的方法(方法名称,修改的值)
        store.commit("setName", params);
      }, 2000);
    },
  },
  //一般用于模块化的
  modules: {},
});
