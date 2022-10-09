# 面试题

说说你对spa的理解？

spa是单页面应用，在加载页面的过程中，用户需要访问其他页面时，只需要加载需要修改的内容，不需要重新加载（html,css,js），满足了客户的需要

而spa所对应的是多页面应用，也就是mpa，他是每一个页面都是一个独立的主页面，当用户需要切换到其他页面时，都需要重新加载（html，css，js）而某一些公共文件需要按需加载。



单页面多页面之间的区别



1.组成 spa是一个主页面和多个页面片段 mpa是多个主页面

2.刷新方式 spa是局部刷新 mpa是整夜刷新

3.url模式 spa是哈希模式 mpa是普通模式

4.seo引擎优化 spa难实现使用ssr方式代替 mpa容易实现

5.数据传递 spa简单 mpa通过 cookie localstorage url 方式传递

5.页面切换 spa方便用户体验好 mpa 难，用户体验差

6.维护成本 spa 相对容易 mpa相对复杂



单页面应用的优缺点

1.单页面应用维护方便，用户体验好

2.不需要渲染整个页面，前后端分离分工明确

3.对于桌面应用的即时性，网站的可移植性和可访问性

缺点

1.不利于seo的抓取

2.首次渲染较慢





------

# 今日学习



Props 是组件 

props传递的类型是没有限制的

```
props:{
	title,
	Number,
	string,
	boolean,
	Array,
	Object,
	Function
}
```

**prop传递array，object类型时，需使用工厂模式也就是函数进行返回**





### 自定义事件的组件交互

是通过mycontent像App.vue进行传递 

使用<XXX @事件名=“函数”> 进行传递，而且是函数的调用



### 组件的 生命周期

组件的状态

​			创建时：beforeCreate、created

​			渲染时：beforeMount、mounted

​			更新时：beforeUpdate、updated

​			卸载时：beforeUnmount、unmounted

**背过八个生命周期函数，并且理解他们的作用**





### 引入第三方



第三方插件使用的很多，有些功能不需要自己来实现，直接调用第三方的组件。

swiper





v-on 事件修饰符 一是阻止事件的跳转，另一个是指阻止事件的冒泡

按键修饰符 相当于给按键添加点击事件 例如回车 换行 删除 esc



v-if 和v-show 一个是在classList中添加none或者block 一个是直接删除样式来实现隐藏和显示



V-else 和 v-else-if.  和普通的if if else 一个原理



计算函数是指讲数据进行缓存，然后在不改变内容的情况下按照原样输出 ，计算函数具有缓存特性

**计算属性只要依赖不变，那么就不会重新计算，计算属性将基于他们的依赖关系缓存**

//面试题 ：computed的特性和与methods之间的区别



计算属性的Setter 和getter是使用computed的一个简写 而且setter不常用，一般出现在依赖改变时才会触发



### 侦听器

###   







