(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39fbe4b0"],{6859:function(t,i,e){"use strict";e("d7c5")},8561:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"container"},[i("el-dialog",{attrs:{title:"预览文章",visible:t.showArticle,width:"50%"},on:{close:t.closeDialog},nativeOn:{click:function(i){t.isShow=!1}}},[i("div",{staticClass:"title"},[i("h2",[t._v(t._s(t.article.title))]),i("div",{staticClass:"content"},[i("span",[t._v(t._s(t.article.createTime))]),i("span",[t._v(t._s(t.article.username))]),i("span",{staticClass:"el-icon-view"}),i("span",[t._v(t._s(t.article.visits))])])]),i("div",{staticClass:"preview",domProps:{innerHTML:t._s(t.article.articleBody)}})])],1)},c=[],n={name:"ArticlesPreview",props:{showArticle:{type:Boolean,default:!1},article:{type:Object,required:!0}},data:function(){return{isShow:!1}},methods:{closeDialog:function(){this.$emit("update:showArticle",!1)},open:function(){this.isShow=!0}}},a=n,l=(e("6859"),e("2877")),o=Object(l["a"])(a,s,c,!1,null,"555962c2",null);i["default"]=o.exports},d7c5:function(t,i,e){}}]);
//# sourceMappingURL=chunk-39fbe4b0.ec3b1833.js.map