# Debug记录页

#### **Vue 阶段**

##### 1.node和npm版本号不匹配导致安装vant或者vant相关插件失败

![vue-01.jpg](/Users/xiaozhang/Desktop/xzorxz.github.io/docs/debug/assets/vue-01.jpeg)

解决方案：在命令后面添加 --legacy-peer-deps

##### 2.忘记给按需导出的代码添加大括号

![vue-02.jpg](/Users/xiaozhang/Desktop/xzorxz.github.io/docs/debug/assets/vue-02.jpeg)

解决方案：给按需导出的代码添加大括号

扩展：export default 只能出现一次，export可以多次 一个是顺序导出 一个是按需导出