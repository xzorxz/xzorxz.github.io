(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-577b0e04","chunk-a20949b0"],{"0c47":function(t,e,n){var r=n("da84"),o=n("d44e");o(r.JSON,"JSON",!0)},"131a":function(t,e,n){var r=n("23e7"),o=n("d2bb");r({target:"Object",stat:!0},{setPrototypeOf:o})},"161d":function(t,e,n){},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("d3b7");function r(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,s,"next",t)}function s(t){r(i,o,a,c,s,"throw",t)}c(void 0)}))}}},"1f68":function(t,e,n){"use strict";var r=n("83ab"),o=n("edd0"),a=n("861d"),i=n("7b0b"),c=n("1d80"),s=Object.getPrototypeOf,u=Object.setPrototypeOf,l=Object.prototype,f="__proto__";if(r&&s&&u&&!(f in l))try{o(l,f,{configurable:!0,get:function(){return s(i(this))},set:function(t){var e=c(this);(a(t)||null===t)&&a(e)&&u(e,t)}})}catch(d){}},"23dc":function(t,e,n){var r=n("d44e");r(Math,"Math",!0)},3410:function(t,e,n){var r=n("23e7"),o=n("d039"),a=n("7b0b"),i=n("e163"),c=n("e177"),s=o((function(){i(1)}));r({target:"Object",stat:!0,forced:s,sham:!c},{getPrototypeOf:function(t){return i(a(t))}})},"58c3":function(t,e,n){"use strict";n("82ea")},"72a0":function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return s}));var r=[{value:1,label:"启用"},{value:0,label:"禁用"}],o=[{value:1,label:"简单"},{value:2,label:"一般"},{value:3,label:"困难"}],a=[{value:1,label:"单选"},{value:2,label:"多选"},{value:3,label:"简答"}],i=["o2o","外包服务","企业服务","互联网金融","企业咨询","互联网","电子商务","其他"],c=[{value:1,label:"待审核"},{value:2,label:"通过"},{value:3,label:"拒绝"}],s=[{value:1,label:"已发布"},{value:2,label:"待发布"},{value:0,label:"已下架"}]},"7db0":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").find,a=n("44d2"),i="find",c=!0;i in[]&&Array(1)[i]((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a(i)},"82ea":function(t,e,n){},"87b6":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"questions"},[e("el-dialog",{attrs:{title:"题目预览",visible:t.showDialog,width:"900px"},on:{close:t.closeDialog}},[e("el-row",{staticClass:"row"},[e("div",{staticStyle:{height:"36px",size:"50px"}},[e("el-col",{attrs:{span:6}},[t._v("【题型】："+t._s(t._f("tx")(t.list2.questionType)))]),e("el-col",{attrs:{span:6}},[t._v("【编号】："+t._s(t.list2.id))]),e("el-col",{attrs:{span:6}},[t._v("【难度】："+t._s(t._f("nd")(t.list2.difficulty)))]),e("el-col",{attrs:{span:6}},[t._v("【标签】："+t._s(t.list2.tags))])],1),e("div",{staticStyle:{height:"30px"}},[e("el-col",{attrs:{span:6}},[t._v("【学科】："+t._s(t.list2.subjectName))]),e("el-col",{attrs:{span:6}},[t._v("【目录】："+t._s(t.list2.directoryName))]),e("el-col",{attrs:{span:6}},[t._v("【方向】："+t._s(t.list2.direction))])],1)]),e("hr"),e("el-row",{staticClass:"row"},[t._v("【题干】："),e("br"),e("div",{domProps:{innerHTML:t._s(t.list2.question)}}),"3"!==t.list2.questionType?e("div",[e("div",{staticStyle:{"padding-bottom":"5px"}},[t._v(t._s(t._f("tx")(t.list2.questionType))+" 选项：（以下选中的选项为正确答案）")]),t._l(t.list2.options,(function(n){return e("div",{key:n.code,staticStyle:{padding:"8px 0"}},["1"===t.list2.questionType?e("el-radio",{attrs:{value:n.isRight,label:1}},[t._v(t._s(n.title))]):t._e(),"2"===t.list2.questionType?e("el-checkbox",{attrs:{value:!!n.isRight}},[t._v(t._s(n.title))]):t._e()],1)}))],2):t._e()]),e("hr"),e("el-row",{staticClass:"row"},[t._v(" 【参考答案】："),e("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.preivewVideo()}}},[t._v("视频答案预览")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"vidiobox",staticStyle:{padding:"20px"}},[e("video",{ref:"video",staticStyle:{width:"500px"},attrs:{src:t.list2.videoURL,controls:""}})])],1),e("hr"),e("el-row",{staticClass:"row"},[t._v("【答案解析】："),e("p",{domProps:{innerHTML:t._s(t.list2.answer)}})]),e("hr"),e("el-row",{staticClass:"row"},[t._v("【题目备注】："+t._s(t.list2.remarks))]),e("div",{staticStyle:{"margin-top":"50px","margin-left":"750px"},on:{click:t.closeDialog}},[e("el-button",{attrs:{type:"primary"}},[t._v("关闭")])],1)],1)],1)},o=[],a=(n("7db0"),n("d3b7"),n("72a0")),i={name:"questions",data:function(){return{show:!1}},props:{showDialog:{type:Boolean,default:!1},list2:{type:Object,required:!0}},methods:{closeDialog:function(){this.$emit("update:showDialog",!1),this.show=!1},preivewVideo:function(){this.show=!0}},filters:{nd:function(t){if(t)return a["b"].find((function(e){return e.value===+t})).label},tx:function(t){if(t)return a["e"].find((function(e){return e.value===+t})).label+"题"}}},c=i,s=(n("58c3"),n("2877")),u=Object(s["a"])(c,r,o,!1,null,"08dd8724",null);e["default"]=u.exports},"8d18":function(t,e,n){"use strict";n("161d")},"944a":function(t,e,n){var r=n("d066"),o=n("e065"),a=n("d44e");o("toStringTag"),a(r("Symbol"),"Symbol")},"9eca":function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"f",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"k",(function(){return c})),n.d(e,"i",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"e",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"h",(function(){return h})),n.d(e,"j",(function(){return p}));n("99af");var r=n("b775"),o=function(t){return Object(r["a"])("/questions","get",t)},a=function(t){return Object(r["a"])("/questions/".concat(t.id),"get",t)},i=function(t){return Object(r["a"])("/questions","post",t)},c=function(t){return Object(r["a"])("/questions/".concat(t.id),"put",t)},s=function(t){return Object(r["a"])("/questions/".concat(t.id),"delete",t)},u=function(t){return Object(r["a"])("/questions/choice/".concat(t.id,"/").concat(t.choiceState),"patch",t)},l=function(t){return Object(r["a"])("/questions/choice","get",t)},f=function(t){return Object(r["a"])("/questions/choice/".concat(t.id,"/").concat(t.publishState),"post",t)},d=function(t){return Object(r["a"])("/questions/check/".concat(t.id),"post",t)},h=function(t){return Object(r["a"])("/questions/randoms","get",t)},p=function(t){return Object(r["a"])("/questions/randoms/".concat(t.id),"delete",t)}},b636:function(t,e,n){var r=n("e065");r("asyncIterator")},c7eb:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("14d9"),n("159b"),n("b0c0"),n("131a"),n("1f68"),n("fb6a");var r=n("53ca");function o(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(E){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new L(r||[]);return a(i,"_invoke",{value:O(t,n,c)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(E){return{type:"throw",arg:E}}}t.wrap=f;var h={};function p(){}function v(){}function b(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(S([])));m&&m!==e&&n.call(m,c)&&(y=m);var w=b.prototype=p.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(a,i,c,s){var u=d(t[a],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==Object(r["a"])(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var i;a(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function O(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return D()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=j(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=d(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function j(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=d(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:D}}function D(){return{value:void 0,done:!0}}return v.prototype=b,a(w,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:v,configurable:!0}),v.displayName=l(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),l(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new x(f(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(q),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),q(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;q(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}},d555:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-container"},[e("div",{staticClass:"app-container"},[e("el-card",{attrs:{shadow:"never"}},[e("el-form",{attrs:{"label-width":"80px",size:"small"}},[e("el-row",[e("el-col",{attrs:{span:6}},[e("el-form-item",{attrs:{label:"关键字"}},[e("el-input",{staticStyle:{},attrs:{placeholder:"根据编号搜索"},model:{value:t.data.keyword,callback:function(e){t.$set(t.data,"keyword",e)},expression:"data.keyword"}})],1)],1),e("el-col",{attrs:{span:6,offset:12}},[e("el-form-item",{staticStyle:{"text-align":"right"}},[e("el-button",{on:{click:function(e){return t.clear()}}},[t._v("清除")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.serach(t.data.keywork)}}},[t._v("搜索")])],1)],1)],1)],1),e("el-alert",{staticClass:"alert",attrs:{title:"数据一共".concat(t.total,"条"),type:"info",closable:!1,"show-icon":""}}),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[[e("el-table-column",{attrs:{fixed:"",prop:"id",label:"编号"}}),e("el-table-column",{attrs:{prop:"questionType",label:"题型"}}),e("el-table-column",{attrs:{label:"题目编号"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.row;return t._l(r.questionIDs,(function(n){return e("div",{key:n.number},[e("a",{staticStyle:{color:"#01c6fa"},attrs:{href:"#"},on:{click:function(e){return t.handleBtn(r)}}},[t._v(t._s(n.number))])])}))}}])}),e("el-table-column",{attrs:{prop:"addTime",label:"录入时间"}}),e("el-table-column",{attrs:{prop:"totalSeconds",label:"答题时间(s)"}}),e("el-table-column",{attrs:{prop:"accuracyRate",label:"正确率(%)"}}),e("el-table-column",{attrs:{prop:"userName",label:"录入人"}}),e("el-table-column",{attrs:{icon:"el-icon-delete",label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.row;return[e("el-button",{attrs:{type:"danger",size:"small",plain:"",circle:"",icon:"el-icon-delete",title:"删除"},on:{click:function(e){return t.delEmployee(r.id)}}})]}}])})]],2)],1),e("el-pagination",{staticStyle:{"text-align":"right"},attrs:{"page-sizes":[20,30,50,200],"current-page":t.data.page,"page-size":t.data.pagesize,layout:" prev, pager, next, sizes, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),e("questions-preview",{attrs:{showDialog:t.showDialog,list2:t.list2},on:{"update:showDialog":function(e){t.showDialog=e},"update:show-dialog":function(e){t.showDialog=e}}})],1)])},o=[],a=n("c7eb"),i=n("1da1"),c=(n("d81d"),n("14d9"),n("9eca")),s=n("72a0"),u=n("87b6"),l={name:"QuestionsRandom",components:{QuestionsPreview:u["default"]},data:function(){return{difficulty:s["b"],questionType:s["e"],tableData:[],questionBtn:{},showDialog:!1,list:{},list2:{},questionids:[],id:0,data:{keywork:"",page:1,pagesize:10},total:0}},created:function(){var t=this;this.getQuestionsRandoms();var e=function(e){var n=[];t.tableData[e].questionIDs.map((function(t){return n.push(t.number),console.log(n),n})),t.tableData[e].questionIDs=n};for(var n in this.tableData)e(n)},methods:{handleSizeChange:function(t){this.data.pagesize=t,this.getQuestionsRandoms(),this.data.page=1},handleCurrentChange:function(t){this.data.page=t,this.getQuestionsRandoms()},handleBtn:function(t){var e=this;return Object(i["a"])(Object(a["a"])().mark((function n(){var r,o;return Object(a["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.showDialog=!0,console.log(t),e.id=t.questionIDs[0].id,n.next=5,Object(c["f"])({id:t.questionIDs[0].id});case 5:r=n.sent,o=r.data,e.list2=o,console.log(o);case 9:case"end":return n.stop()}}),n)})))()},getQuestionsRandoms:function(){var t=this;return Object(i["a"])(Object(a["a"])().mark((function e(){var n,r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["h"])(t.data);case 2:n=e.sent,r=n.data,console.log(r),t.tableData=r.items,t.total=r.counts,t.tableData.map((function(t){return"1"===t.questionType&&(t.questionType="单选"),"2"===t.questionType?t.questionType="多选":t.questionType="简答",t.questionType}));case 8:case"end":return e.stop()}}),e)})))()},serach:function(t){var e=this;return Object(i["a"])(Object(a["a"])().mark((function n(){return Object(a["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.data.keywork=t,n.next=3,e.getQuestionsRandoms();case 3:case"end":return n.stop()}}),n)})))()},clear:function(){this.data.keyword=""},delEmployee:function(t){var e=this;console.log(t),this.$confirm("确定要删除该员工?","温馨提示").then(Object(i["a"])(Object(a["a"])().mark((function n(){return Object(a["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["j"])({id:t});case 2:e.$message.success("删除成功"),1===e.tableData.length&&e.data.page>1&&e.data.page--,e.getQuestionsRandoms();case 5:case"end":return n.stop()}}),n)})))).catch((function(){console.log("取消")}))},formatterque:function(){var t=this.tableData.questionIDs.map((function(e){t.push(e.number)}));return t}}},f=l,d=(n("8d18"),n("2877")),h=Object(d["a"])(f,r,o,!1,null,"52170990",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-577b0e04.8afb1f23.js.map