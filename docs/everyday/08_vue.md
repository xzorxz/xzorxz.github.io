## 面试题

说说你对vue的mixin的理解，有什么应用场景？

首先mixin是面向程序设计语言中的类，提供了方法的实现，就是其他的类可以访问mixin中的方法而不必成为其子类。

​	mixin通常作为模块化来使用，需要该功能时混入 ，实现了功能的复用，避免了多继承的复杂性。

通俗的讲，mixin就是一一种非常灵活的复用方式，来分发组件中的可复用功能，

包含的功能众多可以使用data()、computed()、methods()、created()，当使用mixin时所有复用的属性都将混入

同样mixin同样有局部混入和全局混入 

```

```







### 学习

router-path 重定向

当匹配到默认路径，强制跳转到/find组件

```
{path:'/',redirect:'/xxx'}
```



404页面的适配,只要不是自己的页面都显示404

需要放在最下面，不然匹配的所有页面都是404

```
{path:'*',component:NotFound}
```



去除网页中的#号，可以修改模式中的模式

```
mode：'hash' => mode:'history' 
```

Hash:哈希模式				 history：历史模式（需要后端来配合）



用户页面的跳转 ----编程式导航 --两种路由方式

方式一 path

```
{path:'/xxx',component:'XXX'} //不需要修改路径
this.$router.push({
psth:'/xxx',
query:{
xxx:'xxx'
},

})

地址栏是 query中设置的 
组件中接收是 $route.query.xxx $route.params.xxx
```

通过灵活的链接方式进行跳转，是编程式导航

方式二 name. ----- 命名路由

```
{path:'xxx',component:'xxx', xxx:'xxx'} 需要修改路径名

this.$router.push({
name:'xxx' //不需要斜杠
query:{
xxx:'xxx'
},
params:{
xxx:'xxx'
}
})
地址栏同上
组件接收同上
```

方式三 params 配合动态路由使用

```
{path:'/user/:id',component:'User'}
<rounter-link to='/user/123' />
this.$router.push('user/123')

地址栏是 /user/123
组件内接收使用 $route.params.id
```



性能优化-缓存机制

```
<keep-alive></keep-alive> 
```

使用这个包裹起来就可以进行缓存



新增两个钩子函数

activated()

Descactived







两天的一个小项目

1.登陆注册

2.首页

3.上拉刷新

4.下拉加载

5.location

6.