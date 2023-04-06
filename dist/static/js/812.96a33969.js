"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[812],{1812:function(e,s,a){a.r(s),a.d(s,{default:function(){return m}});var l=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",[a("br"),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchUser}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{placeholder:"姓名"},model:{value:e.searchUser.name,callback:function(s){e.$set(e.searchUser,"name",s)},expression:"searchUser.name"}})],1),a("el-form-item",{attrs:{label:"班级"}},[a("el-input",{attrs:{placeholder:"姓名"},model:{value:e.searchUser.className,callback:function(s){e.$set(e.searchUser,"className",s)},expression:"searchUser.className"}})],1),a("el-form-item",{attrs:{label:"学校"}},[a("el-input",{attrs:{placeholder:"学校"},model:{value:e.searchUser.school,callback:function(s){e.$set(e.searchUser,"school",s)},expression:"searchUser.school"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),a("el-row",[a("el-button",{attrs:{type:"primary",round:""},on:{click:function(s){e.dialogVisible=!0}}},[e._v("新增用户")]),a("el-button",{attrs:{type:"primary",round:""},on:{click:function(s){e.addClassVisible=!0}}},[e._v("新增班级")]),a("el-button",{attrs:{type:"danger",round:""},on:{click:e.deleteByIds}},[e._v("批量删除")])],1),a("el-dialog",{attrs:{title:"新增用户",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(s){e.dialogVisible=s}}},[a("el-form",{ref:"form",attrs:{model:e.addUser,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.addUser.name,callback:function(s){e.$set(e.addUser,"name",s)},expression:"addUser.name"}})],1),a("el-form-item",{attrs:{label:"学号"}},[a("el-input",{model:{value:e.addUser.username,callback:function(s){e.$set(e.addUser,"username",s)},expression:"addUser.username"}})],1),a("el-form-item",{attrs:{label:"班级"}},[a("el-select",{attrs:{placeholder:"班级"},model:{value:e.addUser.classId,callback:function(s){e.$set(e.addUser,"classId",s)},expression:"addUser.classId"}},e._l(e.classNames,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"学校"}},[a("el-select",{attrs:{placeholder:"班级"},model:{value:e.addUser.school,callback:function(s){e.$set(e.addUser,"school",s)},expression:"addUser.school"}},e._l(e.schools,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.addaUser}},[e._v("提交")]),a("el-button",{on:{click:function(s){e.dialogVisible=!1}}},[e._v("取消")])],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})],1),a("el-dialog",{attrs:{title:"新增班级",visible:e.addClassVisible,width:"25%"},on:{"update:visible":function(s){e.addClassVisible=s}}},[a("el-form",{ref:"form",attrs:{model:e.addClassData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"序号"}},[a("el-input",{attrs:{maxlength:10},model:{value:e.addClassData.classId,callback:function(s){e.$set(e.addClassData,"classId",s)},expression:"addClassData.classId"}})],1),a("el-form-item",{attrs:{label:"班级"}},[a("el-input",{model:{value:e.addClassData.className,callback:function(s){e.$set(e.addClassData,"className",s)},expression:"addClassData.className"}})],1),a("el-form-item",{attrs:{label:"学校"}},[a("el-select",{attrs:{placeholder:""},model:{value:e.addClassData.school,callback:function(s){e.$set(e.addClassData,"school",s)},expression:"addClassData.school"}},e._l(e.schools,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.addClass}},[e._v("提交")]),a("el-button",{on:{click:function(s){e.addClassVisible=!1}}},[e._v("取消")])],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})],1),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.alluser,"row-class-name":e.tableRowClassName},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{type:"index",width:"50"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180",align:"center"}}),a("el-table-column",{attrs:{prop:"className",label:"班级",width:"180",align:"center"}}),a("el-table-column",{attrs:{prop:"school",label:"所属学校",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(s){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.updateById(s.row)}}},[e._v("修改")]),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.deleteById(s.row)}}},[e._v("删除")])]}}])})],1)],a("el-dialog",{attrs:{title:"修改用户信息",visible:e.dialogVisible2,width:"30%"},on:{"update:visible":function(s){e.dialogVisible2=s}}},[a("el-form",{ref:"form",attrs:{model:e.addUser,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.addUser.name,callback:function(s){e.$set(e.addUser,"name",s)},expression:"addUser.name"}})],1),a("el-form-item",{attrs:{label:"学号"}},[a("el-input",{model:{value:e.addUser.username,callback:function(s){e.$set(e.addUser,"username",s)},expression:"addUser.username"}})],1),a("el-form-item",{attrs:{label:"班级"}},[a("el-select",{attrs:{placeholder:"班级"},model:{value:e.addUser.classId,callback:function(s){e.$set(e.addUser,"classId",s)},expression:"addUser.classId"}},e._l(e.classNames,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"学校"}},[a("el-select",{attrs:{placeholder:"班级"},model:{value:e.addUser.school,callback:function(s){e.$set(e.addUser,"school",s)},expression:"addUser.school"}},e._l(e.schools,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.addaUser}},[e._v("提交")]),a("el-button",{on:{click:function(s){e.dialogVisible2=!1}}},[e._v("取消")])],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})],1),a("el-pagination",{attrs:{total:e.totalCount,"current-page":e.currentPage,"page-sizes":[5,10],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],2)},t=[],o=a(5063),r=a.n(o);r().defaults.withCredentials=!0;const d="124.222.86.127",i=":54321";var c={name:"user",data(){return{updateUser:{id:"",name:"",username:"",classId:"",className:"",school:""},totalCount:100,selectIds:[],currentPage:1,pageSize:10,dialogVisible:!1,dialogVisible2:!1,alluser:{id:"",username:"",password:"",name:"",className:"",classId:"",school:""},addUser:{id:"",username:"",name:"",classId:"",className:"",school:""},addClassVisible:!1,addClassData:{classId:"",className:"",school:""},searchUser:{name:"",className:"",school:""},classNames:[],schools:[],multipleSelection:[],deleteIds:[]}},mounted(){this.testlogin(),this.selectAll(),this.getClasses()},methods:{sleep(e){var s=(new Date).getTime();while(1)if((new Date).getTime()-s>e)break},testlogin(){r().get("http://"+d+i+"/admin").then((e=>{20001==e.data.code||2e4==e.data.code&&(this.$message.error("请先登录!!!"),this.sleep(1e3),location.href="http://"+d+":8888/#/login")}))},getClasses(){r().get("http://+"+d+i+"+/class").then((e=>{for(var s=0;s<e.data.data.length;s++)if(this.classNames.push({label:e.data.data[s].className,value:e.data.data[s].classId}),s>0)for(let a=0;a<this.schools.length;a++){if(e.data.data[s].school==this.schools[a].label)break;a==this.schools.length-1&&this.schools.push({label:e.data.data[s].school,value:e.data.data[s].school})}else this.schools.push({label:e.data.data[s].school,value:e.data.data[s].school})}))},selectAll(){r().post("http://"+d+i+"/user/?currentPage="+this.currentPage+"&size="+this.pageSize,this.searchUser).then((e=>{this.alluser=e.data.data.rows,this.totalCount=Number(e.data.data.totalCount)}))},onSubmit(){this.selectAll()},handleSizeChange(e){this.pageSize=e,this.selectAll()},handleCurrentChange(e){this.currentPage=e,this.selectAll()},addaUser(){for(let e=0;e<this.classNames.length;e++){const s=this.classNames[e].value;s===this.addUser.classId&&(this.addUser.className=this.classNames[e].label)}r().post("http://"+d+i+"/user/1",this.addUser).then((e=>{this.dialogVisible=!1,this.addUser.id="",this.addUser.name="",this.addUser.username="",this.addUser.className="",this.addUser.classId="",this.addUser.school="",this.addUser.exam="",20011===e.data.code?(this.$message.success("添加成功"),this.selectAll()):20010===e.data.code?this.$message.error("添加失败"):20031===e.data.code?(this.$message.success("修改成功"),this.selectAll()):20030===e.data.code&&this.$message.error("修改失败")}))},updateById(e){this.addUser.id=e.id,this.addUser.name=e.name,this.addUser.classId=e.classId,this.addUser.username=e.username,this.addUser.className=e.className,this.addUser.school=e.school,this.addUser.exam=e.exam,this.dialogVisible2=!0},deleteById(e){this.deleteIds[0]=e.id,this.deleteuser()},deleteuser(){r()["delete"]("http://"+d+i+"/user/",{data:this.deleteIds}).then((e=>{20021===e.data.code?(this.$message.success("删除成功"),this.selectAll()):this.$message.error("删除失败")})),this.deleteIds=[],this.selectAll()},handleSelectionChange(e){this.multipleSelection=e},deleteByIds(){if(this.multipleSelection.length>0){for(let e=0;e<this.multipleSelection.length;e++)this.deleteIds[e]=this.multipleSelection[e].id;this.deleteuser()}else this.$message.error("请选择数据");this.deleteIds=[]},addClass(){r().post("http://"+d+i+"/class",this.addClassData).then((e=>{this.addClassVisible=!1,this.addClassData.className="",this.addClassData.classId="",this.addClassData.school="",20011===e.data.code?this.$message.success("添加成功"):20010===e.data.code?this.$message.error("添加失败"):20031===e.data.code?this.$message.success("修改成功"):20030===e.data.code&&this.$message.error("修改失败")}))}}},n=c,h=a(1001),u=(0,h.Z)(n,l,t,!1,null,null,null),m=u.exports}}]);
//# sourceMappingURL=812.96a33969.js.map