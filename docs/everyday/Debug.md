# Debug记录页

#### **Vue 阶段**

##### 1.node和npm版本号不匹配导致安装vant或者vant相关插件失败

![331665921474_.pic](/Users/xiaozhang/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/eb3f99890e485d9234df9f5c2a1b3c8e/Message/MessageTemp/9e20f478899dc29eb19741386f9343c8/Image/331665921474_.pic.jpg)

解决方案：在命令后面添加 --legacy-peer-deps

##### 2.忘记给按需导出的代码添加大括号

![341665928015_.pic](/Users/xiaozhang/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/eb3f99890e485d9234df9f5c2a1b3c8e/Message/MessageTemp/9e20f478899dc29eb19741386f9343c8/Image/341665928015_.pic.jpg)

解决方案：给按需导出的代码添加大括号

扩展：export default 只能出现一次，export可以多次 一个是顺序导出 一个是按需导出