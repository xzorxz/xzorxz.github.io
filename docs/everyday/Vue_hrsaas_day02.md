## Vue_hrsaas_day02

### 面试题

你对diff算法了解过吗？说说对他的理解？

























### 今日学习

复习vue 基础 

1.vue是一个基于用户的渐进式框架，vue和其他框架不同的是，他只关注视图层，造就了v-model数据的双向绑定这个工具。他使用MVVM框架，最重要的也就是Vm 

2.vue的安装，一般使用vueCLI脚手架来快速创建vue项目，同时配套的还有vue-router、vueX vue的路由方法，和vue路由管理工具

3.vue最常见的就是vue的模版语法（mustache语法），也叫小胡子语法，他使用两个花括号来存放文本差值

mustache语法 中只能包含单个表达式，语句和控制流都不会生效，//if判定可以使用三元运算符

4.指令，是一个带有v-的特殊attribute 也就是一个特殊的属性，其中指令分很多种例如：v-on v-for v-if v-bind  还可以自定义指令

指令同时有修饰符而vue渐变可以直接在指令后面以.的形式添加。

 vue 给最常用的两个指令提供了缩写功能，一个是v-on 以@开头后面添加事件 一个是v-bind 以：开头后面添加名称

5.计算属性computed 和watch侦听器 

计算属性处理复杂逻辑，但是不能处理异步程序，可以进行数据的缓存只要依赖项不改变，都不会重新计算。

虽然计算属性可以应付大多数场景，但是在处理异步程序和开销较大的程序时只能定义一个侦听器。所以vue内置了一个侦听器，侦听器会侦听整个节点的操作 deep 会启用深度监听 handler 

6.v-bind可以控制 class 和style  其中:class 可以控制样式的不固定，同时也可以使用多个样式 。 :style 可以将多个样式对象应用到同一个元素上

7.条件渲染 v-if 配合v-else v-if-else 来进行条件渲染，同时v-if 和v-show 可以控制标签元素的显示和隐藏，其中的区别较大，其中有key的复用功能， 并且不推荐v-if和v-for 同时使用.

8.v-for 列表渲染 可以渲染 对象 列表 数字 其中对象和数字不常用 其中配合数组的操作进行 ，v-for 可以对组件和 template 使用

9.事件处理函数配合 事件修饰符和按键的修饰符来使用 并且有新增修饰符 例如 .exact 精确的控制系统修饰符出发的事件