## 面试题

对双向绑定的理解













**学习**

生命周期：三大阶段 分别是初始化阶段，运行阶段，和销毁阶段

​	也就是数据初始化、dom渲染、数据更新、组件销毁

分别对应8个钩子函数 beforeCreate、 created、 beforeMount、mounted、beforeUpdate、Updated、beforeDestroy、Destroyed





vue路由 也就是vue-router 

1.下载  2.导入 3.安装插件 4.创建路由实例 5.挂载

router表示是整个项目中唯一的路由实例，一个项目只需要一个路由实例



router-view 指定路由匹配成功的组件 的展示位置

router-link 本质就是一个a链接,自带高亮效果，需要to配置跳转路径，无需#



Router-link-active 模糊匹配

地址栏的路径只要以to属性路径开头就行

.router-link-exact-active 精确匹配

地址栏的路径必须和to属性路径完全相同  但是局限性很大



第一种传参方式，/xxx?名=值



$route 当前路由对象信息

$router 是路由实例

