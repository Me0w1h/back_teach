"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[639],{1639:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"building"}})},a=[],u=n(5063),r=n.n(u);r().defaults.withCredentials=!0;var s="124.222.86.127",o=":54321",l={name:"home",data:function(){return{userImg:n(1806)}},mounted:function(){this.testlogin()},methods:{sleep:function(e){var t=(new Date).getTime();while(1)if((new Date).getTime()-t>e)break},testlogin:function(){var e=this;r().get("http://"+s+o+"/admin").then((function(t){20001==t.data.code||2e4==t.data.code&&(e.$message.error("请先登录!!!"),e.sleep(1e3),location.href="http://"+s+":8888/#/login")}))}}},c=l,f=n(1001),d=(0,f.Z)(c,i,a,!1,null,null,null),h=d.exports},1806:function(e,t,n){e.exports=n.p+"static/img/userImg.b1a04195.jpg"}}]);
//# sourceMappingURL=639-legacy.8e358533.js.map