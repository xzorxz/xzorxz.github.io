vue基础第一次复习

**1.day01天学习内容**

​	vue基础认知 底层原理 发展 由来

​	vue脚手架的使用  脚手架的安装、配置、启动

​		vue-create 文件夹名字 yarn serve 或者 npm run serve

​	文件的渲染 差值语法也称为小胡子语法 使用两个大括号中间存放值  {{xxxx}} 注意 不能使用 v-if v-for 更不能在标签中使用v-bind

​	指令也就是v-开头的语句 v-bind 动态设置标签属性，不在使用固定属性 简写就是：属性名=属性值

​	v-on 注册事件 相当于原生的on事件和add事件  注册事件需要使用methods里面的函数名配合使用 而不是值，同时函数名可以传参 默	认是形参接收 传参数$event 由e来接收 用来阻止事件或者防止冒泡 ，简易写法直接在@事件.prevent 或者 @事件.stop  这也叫做事件	修饰符

​	v-on还有键盘事件，同时确定哪个键位非常麻烦，可以使用简便写法，@事件名.enter ，也称为键盘修饰符 常用的有tab enter esc等

​	

**2.day02天学习内容**

​	指令 v-if 和v-show 负责标签的隐藏 使用布尔值 true和false来进行隐藏和展示 两者有区别，频繁使用时使用v-show 只是简单的切换display：none 结构还在，v-if时是将结构删除和重建 会更多的占用内存资源，注意 v-if和v-for最好不要放在一个标签使用，会更多的占用内存资源。

​	指令v-for 遍历数组、对象、数字，使用格式item in items  ：key 其中key必须使用唯一的值 可以是index ，类型是数字和字符串，是唯一的值，重复的值会报错。

​	指令v-model vue很重要的一个功能，双向数据绑定实现数据和模型的实时传输，同时只能在input表单中使用，其中可以使用修饰符 .Number .trim .lazy 分别接受数字 删除头尾的空格 和表单确定后再加载

​	v-html 和v-Html 分别是原生innerHTML 和innerText 两个功能

​	vue的层逻辑 diff和就地复用，key的作用

​	v-bind的样式处理，：class 和：style 分别是两种样式

​	计算属性 computed 计算属性有缓存机制，只要依赖不变再次渲染时就不会调用，只会在内存中调用，节省资源 提高性能 完成写法 computed：{ get（） 和set （）} get 有只读功能，并没有修改功能，修改功能需要使用set（value）

​	watch侦听器 侦听数据的变化并返回，在wetch中监听 有newVal 和oldVal 复杂写法 deep：true handler （newVal）没有oldVal 

​	组件化 单页面应用一个页面由多个组件组成，组件的 基本使用 创建 引入 注册 使用

​	组件通信 父传子 和子传父

​	