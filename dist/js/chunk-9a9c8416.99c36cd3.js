(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a9c8416","chunk-3d0073a0"],{3619:function(t,e,n){"use strict";n("7a19")},"72a0":function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return l}));var i=[{value:1,label:"启用"},{value:0,label:"禁用"}],a=[{value:1,label:"简单"},{value:2,label:"一般"},{value:3,label:"困难"}],s=[{value:1,label:"单选"},{value:2,label:"多选"},{value:3,label:"简答"}],o=["o2o","外包服务","企业服务","互联网金融","企业咨询","互联网","电子商务","其他"],r=[{value:1,label:"待审核"},{value:2,label:"通过"},{value:3,label:"拒绝"}],l=[{value:1,label:"已发布"},{value:2,label:"待发布"},{value:0,label:"已下架"}]},"7a19":function(t,e,n){},"7db0":function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").find,s=n("44d2"),o="find",r=!0;o in[]&&Array(1)[o]((function(){r=!1})),i({target:"Array",proto:!0,forced:r},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},"8e79":function(t,e,n){"use strict";n.r(e);n("7db0"),n("d3b7"),n("fb6a");var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-container"},[e("div",{staticClass:"app-container"},[e("el-card",{attrs:{shadow:"never"}},[e("el-row",[e("el-col",{attrs:{span:20}},[e("span",{staticStyle:{color:"#ffcedb"}},[t._v("说明：目前支持学科和关键字渲染")])]),e("el-col",{attrs:{span:4}},[e("div",{staticStyle:{"margin-left":"78px"}},[e("el-button",{staticStyle:{"margin-left":"18px","margin-bottom":"15px"},attrs:{type:"success",icon:"el-icon-edit",size:"small"},on:{click:t.handleNew}},[t._v("新增试题")])],1)])],1),e("Myform",{ref:"formData",attrs:{datalist:t.datalist},on:{Submit:t.submit}}),e("el-alert",{attrs:{title:"数据一共 ".concat(this.QueList.total," 条"),"show-icon":"",closable:!1}}),e("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{label:"试题编号",prop:"number"}}),e("el-table-column",{attrs:{label:"学科",prop:"subject"}}),e("el-table-column",{attrs:{label:"目录",prop:"catalog"}}),e("el-table-column",{attrs:{label:"题型",prop:"questionType"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v(" "+t._s(t.questionType.find((function(t){return t.value===+n.questionType})).label)+" ")]}}])}),e("el-table-column",{attrs:{label:"题干",prop:"question"},scopedSlots:t._u([{key:"default",fn:function(n){var i=n.row;return[e("div",{domProps:{innerHTML:t._s(i.question)}})]}}])}),e("el-table-column",{attrs:{label:"录入时间",prop:"addDate"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v(" "+t._s(n.addDate.slice(0,n.addDate.indexOf("T")))+" ")]}}])}),e("el-table-column",{attrs:{label:"难度",prop:"difficulty"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v(" "+t._s(t.difficulty.find((function(t){return t.value===+n.difficulty})).label)+" ")]}}])}),e("el-table-column",{attrs:{label:"录入人",width:"180",prop:"creator"}}),e("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(n){var i=n.row;return[e("el-button",{attrs:{type:"primary",icon:"el-icon-view",title:"预览",circle:""},on:{click:function(e){return t.handlePreview(i.id)}}}),e("el-button",{attrs:{type:"primary",icon:"el-icon-edit",title:"修改",circle:""},on:{click:function(e){return t.handleEdit(i.id)}}}),e("el-button",{attrs:{type:"danger",icon:"el-icon-delete",title:"删除",circle:""},nativeOn:{click:function(e){return t.removeList(i.id)}}}),e("el-button",{attrs:{type:"warning",icon:"el-icon-check",title:"加入精选",circle:""},on:{click:function(e){return t.handleAdd(i.id)}}})]}}])})],1),e("div",{staticStyle:{"margin-top":"10px","text-align":"right"}},[e("el-pagination",{attrs:{"current-page":this.QueList.page,"page-sizes":[5,10,20,50],"page-size":this.QueList.pagesize,total:this.QueList.total,layout:"total, prev, pager, next, sizes, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),e("questions",{attrs:{isShowDialog:t.isShowDialog,list:t.list},on:{"update:isShowDialog":function(e){t.isShowDialog=e},"update:is-show-dialog":function(e){t.isShowDialog=e}}})],1)])},a=[],s=n("c7eb"),o=n("1da1"),r=(n("14d9"),n("a9e3"),n("9eca")),l=n("72a0"),c=n("d157"),u=n("ffd8"),d={components:{questions:c["default"],Myform:u["default"]},data:function(){return{tableData:[],difficulty:l["b"],questionType:l["e"],isShowDialog:!1,list:{},QueList:{page:1,pagesize:5,total:1,counts:0},datalist:{subjectID:null,tags:null,keyword:null,questionType:null,city:null,shortName:null,remarks:null,creatorID:null,difficulty:null,direction:null,catalogID:null,page:1,publishState:null,pagesize:5,chkState:"all",provAndCity:{province:"",city:""}}}},created:function(){this.getList()},methods:{handleSizeChange:function(t){this.QueList.pagesize=t,this.QueList.page=1,this.getList()},handleCurrentChange:function(t){this.QueList.page=t,this.getList()},handleNew:function(){this.$router.push("/questions/new")},handleEdit:function(t){this.$router.push("/questions/new/?id=".concat(t))},getList:function(){var t=this;return Object(o["a"])(Object(s["a"])().mark((function e(){var n,i,a,o,l,c;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["g"])(t.QueList);case 2:n=e.sent,i=n.data,a=i.items,o=i.counts,l=i.page,c=i.pagesize,console.log(a,o,l,c),t.tableData=a,t.QueList.counts=o,t.QueList.total=o,t.QueList.page=+l,t.QueList.pagesize=Number(c);case 14:case"end":return e.stop()}}),e)})))()},removeList:function(t){var e=this;return Object(o["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$confirm("此操作将永久删除改角色, 是否继续?","提示",{type:"warning"}).then(Object(o["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(r["i"])({id:t});case 2:1===e.tableData.length&&e.QueList.page>1&&e.QueList.page--,e.getList();case 4:case"end":return n.stop()}}),n)})))).catch((function(){e.$message.info("已取消删除")}));case 1:case"end":return n.stop()}}),n)})))()},handlePreview:function(t){var e=this;return Object(o["a"])(Object(s["a"])().mark((function n(){var i,a;return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.isShowDialog=!0,n.next=3,Object(r["f"])({id:t});case 3:i=n.sent,a=i.data,console.log(a),console.log(t),e.list=a;case 8:case"end":return n.stop()}}),n)})))()},handleAdd:function(t){var e=this;console.log("点击",{id:t}),this.$confirm("此操作将改题目加入精选, 是否继续?","提示",{type:"warning"}).then(Object(o["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t),n.next=3,Object(r["c"])({id:t,choiceState:1});case 3:e.$message.success("加入精选题库成功"),e.getList(),e.$router.push("/questions/choice");case 6:case"end":return n.stop()}}),n)})))).catch((function(){e.$message.info("已取消加入")}))},submit:function(){var t=this;return Object(o["a"])(Object(s["a"])().mark((function e(){var n,i,a,o,l,c;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$refs.formData.datalist,e.next=3,Object(r["g"])(n);case 3:i=e.sent,a=i.data,o=a.counts,l=a.items,c=a.pagesize,console.log({counts:o,items:l,pagesize:c}),t.tableData=l,t.QueList.total=o,t.QueList.pagesize=+c;case 12:case"end":return e.stop()}}),e)})))()}}},f=d,p=n("2877"),b=Object(p["a"])(f,i,a,!1,null,"724a9281",null);e["default"]=b.exports},"9eca":function(t,e,n){"use strict";n.d(e,"g",(function(){return a})),n.d(e,"f",(function(){return s})),n.d(e,"a",(function(){return o})),n.d(e,"k",(function(){return r})),n.d(e,"i",(function(){return l})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"h",(function(){return p})),n.d(e,"j",(function(){return b}));n("99af");var i=n("b775"),a=function(t){return Object(i["a"])("/questions","get",t)},s=function(t){return Object(i["a"])("/questions/".concat(t.id),"get",t)},o=function(t){return Object(i["a"])("/questions","post",t)},r=function(t){return Object(i["a"])("/questions/".concat(t.id),"put",t)},l=function(t){return Object(i["a"])("/questions/".concat(t.id),"delete",t)},c=function(t){return Object(i["a"])("/questions/choice/".concat(t.id,"/").concat(t.choiceState),"patch",t)},u=function(t){return Object(i["a"])("/questions/choice","get",t)},d=function(t){return Object(i["a"])("/questions/choice/".concat(t.id,"/").concat(t.publishState),"post",t)},f=function(t){return Object(i["a"])("/questions/check/".concat(t.id),"post",t)},p=function(t){return Object(i["a"])("/questions/randoms","get",t)},b=function(t){return Object(i["a"])("/questions/randoms/".concat(t.id),"delete",t)}},d157:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"questions"},[e("el-dialog",{attrs:{title:"题目预览",visible:t.isShowDialog,width:"900px"},on:{close:t.closeDialog}},[e("el-row",{staticClass:"row"},[e("el-col",{attrs:{span:6}},[t._v("【题型】："+t._s(t._f("tx")(t.list.questionType)))]),e("el-col",{attrs:{span:6}},[t._v("【编号】："+t._s(t.list.id))]),e("el-col",{attrs:{span:6}},[t._v("【难度】："+t._s(t._f("nd")(t.list.difficulty)))]),e("el-col",{attrs:{span:6}},[t._v("【标签】："+t._s(t.list.tags)+"属性")]),e("el-col",{attrs:{span:6}},[t._v("【学科】："+t._s(t.list.subjectID))]),e("el-col",{attrs:{span:6}},[t._v("【目录】："+t._s(t.list.catalogID))]),e("el-col",{attrs:{span:6}},[t._v("【方向】："+t._s(t.list.direction))])],1),e("hr"),e("el-row",{staticClass:"row"},[t._v("【题干】："),e("br"),e("div",{domProps:{innerHTML:t._s(t.list.question)}}),"3"!==t.list.questionType?e("div",[e("div",{staticStyle:{"padding-bottom":"5px"}},[t._v(t._s(t._f("tx")(t.list.questionType))+" 选项：（以下选中的选项为正确答案）")]),t._l(t.list.options,(function(n){return e("div",{key:n.code,staticStyle:{padding:"8px 0"}},["1"===t.list.questionType?e("el-radio",{attrs:{value:n.isRight,label:1}},[t._v(t._s(n.title))]):t._e(),"2"===t.list.questionType?e("el-checkbox",{attrs:{value:!!n.isRight}},[t._v(t._s(n.title))]):t._e()],1)}))],2):t._e()]),e("hr"),e("el-row",{staticClass:"row"},[t._v(" 【参考答案】："),e("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.preivewVideo()}}},[t._v("视频答案预览")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"vidiobox",staticStyle:{padding:"20px"}},[e("video",{ref:"video",staticStyle:{width:"500px"},attrs:{src:t.list.videoURL,controls:""}})])],1),e("hr"),e("el-row",{staticClass:"row"},[t._v("【答案解析】："),e("span",{domProps:{innerHTML:t._s(t.list.answer)}})]),e("hr"),e("el-row",{staticClass:"row"},[t._v("【题目备注】："+t._s(t.list.remarks))]),e("div",{staticStyle:{"margin-top":"50px","margin-left":"750px"},on:{click:t.closeDialog}},[e("el-button",{attrs:{type:"primary"}},[t._v("关闭")])],1)],1)],1)},a=[],s=(n("7db0"),n("d3b7"),n("72a0")),o={name:"questions",data:function(){return{show:!1}},props:{isShowDialog:{type:Boolean,default:!1},list:{type:Object,required:!0}},methods:{closeDialog:function(){this.$emit("update:isShowDialog",!1),this.show=!1},preivewVideo:function(){this.show=!0}},filters:{nd:function(t){if(t)return s["b"].find((function(e){return e.value===+t})).label},tx:function(t){if(t)return s["e"].find((function(e){return e.value===+t})).label+"题"}}},r=o,l=(n("3619"),n("2877")),c=Object(l["a"])(r,i,a,!1,null,"d59a6db8",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-9a9c8416.99c36cd3.js.map