"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[639],{1639:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"building"}})},i=[],s=n(5063),r=n.n(s);r().defaults.withCredentials=!0;const u="124.222.86.127",l=":54321";var o={name:"home",data(){return{userImg:n(1806)}},mounted(){this.testlogin()},methods:{sleep(e){var t=(new Date).getTime();while(1)if((new Date).getTime()-t>e)break},testlogin(){r().get("http://"+u+l+"/admin").then((e=>{20001==e.data.code||2e4==e.data.code&&(this.$message.error("请先登录!!!"),this.sleep(1e3),location.href="http://"+u+":8888/#/login")}))}}},d=o,h=n(1001),c=(0,h.Z)(d,a,i,!1,null,null,null),g=c.exports},1806:function(e,t,n){e.exports=n.p+"static/img/userImg.b1a04195.jpg"}}]);
//# sourceMappingURL=639.1d6aeff3.js.map