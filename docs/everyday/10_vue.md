### 面试题

##### Vue.observable你有了解过吗？说说看

Observable 理解成可观察的

Vue.observable 让一个对象变成一个响应式的数据，Vue内部会让他来处理data数据的返回值

返回的对象直接可以应用于渲染函数和计算属性之内，并且会触发相应的更新，也是可以作为最小化夸组件的状态存储器。



使用场景，非父子组件通信的时候，通常可以使用bus或者vuex但是实现的功能不会太复杂，使用bus或者vuex又有一些复杂，而使用Observable是一个很好的选择_







### 学习

路由守卫

router.beforeEach((to, from,next)=>{

Next() 放行函数，可以指定放行地点 next('/login')

to到哪里去 你要去的路由信息 to.path 去的路径 

from从哪里来 你来的路由信息 from.path 来的路径

})



WHITE_LIST 白名单 



### 回顾总结

van 组件的使用  

- 组件库中的list组件的使用
- 修改配置组件

项目的封装

- Articleitem的封装 ，封装一个网页 注册、引入
- 封装api接口

设置拦截器 

- 设置相应拦截器 拦截没有token的数据
- 同时判断token是否过期，过期删除
- 请求拦截器，为所有登陆的统一设置token

动态渲染列表

- 渲染主列表 和子列表
- 都需要请求数据