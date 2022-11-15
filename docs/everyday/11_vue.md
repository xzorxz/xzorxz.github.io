### 面试题

computed和watch的区别是什么？

计算属性computed

1.计算属性有缓存特性，只有依赖数据发生变化时，才会更新数据。

2.不支持异步，computed中有异步操作时无效，无法监听数据的变化。

3.computed需要对数据进行修改，需要写get和set两个方法，当数据变化时需要使用set方法











### 学习

vuex的基础认知 

vuex是一个状态管理工具，状态就是数据。

其实组件就是一个共享的状态一个组件的共享方案。

vuex 1.安装 2.注册. 3.引入 4.使用

mapState 方便的传递数据 同时等同于 在computed中 写计算属性 实现return this.$store.state.XXX 的功能

有自己的计算属性的同时，将computed改写成对象的形式，将mapState 前面加上展开运算符

mutaions 是修改数据的方法，并且是同步的数据。 （唯一的修改数据的方法）

actions 处理异步的逻辑，而不能处理数据,触发的方法是dispatch 

getters接收state中的值进行处理返回处理的值

models 模块化 将小仓库进行单独封装使用 好维护 



getters  state actions mutions models 各自的用法 