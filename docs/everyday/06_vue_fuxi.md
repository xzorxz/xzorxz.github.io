## 面试题

vue组件之间的通信方式有哪些？

1.props 和 $emit

父子关系之间的数据传递，只能传递少量的数据。

2.ref

同样也是父子之间的关系传递，但是可以传递整个组件，实现方便

3.EventBus

兄弟之间传值，需要创建一个中央总线事件EventBus 兄弟组件通过 $emit触发自定义事件，同样emit事件传递的第二个参数为数值，另一个兄弟时间通过 $on监听自定义事件

4.$parant或$root 

前提是有一个共同祖辈 通过搭桥通信

兄弟组件使用 $parant.on获取 另一个兄弟组件使用 $parant.emit 来获取

5.$attrs与$listeners

适用于祖先传递数据给子孙，同样也是批量的传递数据，使用属性$attrs和$listeners 

同时可以在没有设置props中传递数据，可以隔代传值

通过v-bind='$attrs'传到内部组件中

6.provide 和inject 

通过在祖先组件设置provide属性来传递值，后代中使用inject组件接受组件传递的值

7.vuex

适用于复杂关系的组件数据传递

vuex的作用相当于一个用来存储共享变量的容器

![img](https://static.vue-js.com/fa207cd0-3aca-11eb-ab90-d9ae814b240d.png)

state用来存放共享变量





