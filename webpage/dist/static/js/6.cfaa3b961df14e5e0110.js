webpackJsonp([6],{114:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=n(120),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.a={name:"iCol",props:{span:[Number,String],order:[Number,String],offset:[Number,String],push:[Number,String],pull:[Number,String],className:String,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object]},data:function(){return{gutter:0}},computed:{classes:function(){var t,e=this,n=["ivu-col",(t={},i(t,"ivu-col-span-"+this.span,this.span),i(t,"ivu-col-order-"+this.order,this.order),i(t,"ivu-col-offset-"+this.offset,this.offset),i(t,"ivu-col-push-"+this.push,this.push),i(t,"ivu-col-pull-"+this.pull,this.pull),i(t,""+this.className,!!this.className),t)];return["xs","sm","md","lg"].forEach(function(t){if("number"==typeof e[t])n.push("ivu-col-span-"+t+"-"+e[t]);else if("object"===o(e[t])){var i=e[t];Object.keys(i).forEach(function(e){n.push("span"!==e?"ivu-col-"+t+"-"+e+"-"+i[e]:"ivu-col-span-"+t+"-"+i[e])})}}),n},styles:function(){var t={};return 0!==this.gutter&&(t={paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}),t}},methods:{updateGutter:function(){var t=Object(a.a)(this,"Row");t&&t.updateGutter(t.gutter)}},mounted:function(){this.updateGutter()},beforeDestroy:function(){this.updateGutter()}}},119:function(t,e,n){"use strict";var i=n(114),a=n(121),o=n(1),r=o(i.a,a.a,!1,null,null,null);e.a=r.exports},120:function(t,e,n){"use strict";function i(t,e,n){n="string"==typeof e?[e]:e;for(var i=t.$parent,a=i.$options.name;i&&(!a||n.indexOf(a)<0);)(i=i.$parent)&&(a=i.$options.name);return i}n.d(e,"a",function(){return i});var a=n(4),o=a.default.prototype.$isServer;!o&&(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver)},121:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classes,style:t.styles},[t._t("default")],2)},a=[],o={render:i,staticRenderFns:a};e.a=o},304:function(t,e,n){"use strict";var i=n(119),a=n(8),o=n.n(a),r=n(3),s=n.n(r),l=n(2);e.a={components:{ICol:i.a},name:"SQLsyntax",data:function(){return{validate_gen:!0,formItem:{textarea:"",computer_room:"",connection_name:"",basename:"",text:"",backup:"0",assigned:""},columnsName:[{title:"ID",key:"ID",width:"50"},{title:"阶段",key:"stage",width:"100"},{title:"错误等级",key:"errlevel",width:"100"},{title:"阶段状态",key:"stagestatus",width:"150"},{title:"错误信息",key:"errormessage"},{title:"当前检查的sql",key:"sql"},{title:"预计影响的SQL",key:"affected_rows",width:"130"}],Testresults:[],item:{},datalist:{connection_name_list:[],basenamelist:[],sqllist:[],computer_roomlist:l.a.computer_room},ruleValidate:{computer_room:[{required:!0,message:"机房地址不得为空",trigger:"change"}],connection_name:[{required:!0,message:"连接名不得为空",trigger:"change"}],basename:[{required:!0,message:"数据库名不得为空",trigger:"change"}],text:[{required:!0,message:"说明不得为空",trigger:"blur"},{type:"string",max:20,message:"最多20个字",trigger:"blur"}],assigned:[{required:!0,message:"说明不得为空",trigger:"blur"}]},id:null,assigned:[]}},methods:{beautify:function(){var t=this;o.a.put(l.a.url+"/sqlsyntax/beautify",{data:this.formItem.textarea}).then(function(e){t.formItem.textarea=e.data}).catch(function(e){t.$Notice.error({title:"警告",desc:e})})},Connection_Name:function(t){this.datalist.connection_name_list=[],this.datalist.basenamelist=[],this.formItem.connection_name="",this.formItem.basename="",t&&this.ScreenConnection(t)},ScreenConnection:function(t){this.datalist.connection_name_list=this.item.filter(function(e){if(e.computer_room===t)return e})},DataBaseName:function(t){var e=this;t&&(this.id=this.item.filter(function(e){if(e.connection_name===t)return e}),o.a.put(l.a.url+"/workorder/basename",{id:this.id[0].id}).then(function(t){e.datalist.basenamelist=t.data}).catch(function(){e.$Notice.error({title:"警告",desc:"无法连接数据库!请检查网络"})}))},test_sql:function(){var t=this,e=["select","alter","drop","create"],n=this.formItem.textarea.replace(/(;|；)$/gi,"").replace(/\s/g," ").replace(/；/g,";").split(";"),i=!0,a=!1,r=void 0;try{for(var s,c=n[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var A=s.value,p=!0,m=!1,d=void 0;try{for(var g,u=e[Symbol.iterator]();!(p=(g=u.next()).done);p=!0){var f=g.value;if(-1!==A.toLowerCase().indexOf(f))return this.$Message.error("不可提交非DML语句!"),!1}}catch(t){m=!0,d=t}finally{try{!p&&u.return&&u.return()}finally{if(m)throw d}}}}catch(t){a=!0,r=t}finally{try{!i&&c.return&&c.return()}finally{if(a)throw r}}this.$refs.formItem.validate(function(e){if(e)if(t.formItem.textarea){var n=t.formItem.textarea.replace(/(;|；)$/gi,"").replace(/；/g,";");o.a.put(l.a.url+"/sqlsyntax/test",{id:t.id[0].id,base:t.formItem.basename,sql:n}).then(function(e){if(200===e.data.status){t.Testresults=e.data.result;var n=0;t.Testresults.forEach(function(t){0!==t.errlevel&&(n+=1)}),t.validate_gen=0!==n}else t.$Notice.error({title:"警告",desc:"无法连接到Inception!"})}).catch(function(e){l.a.ajanxerrorcode(t,e)})}else t.$Message.error("请填写sql语句后再测试!")})},SubmitSQL:function(){var t=this;this.$refs.formItem.validate(function(e){e?t.formItem.textarea?(t.validate_gen=!0,t.datalist.sqllist=t.formItem.textarea.replace(/(;|；)$/gi,"").replace(/\s/g," ").replace(/；/g,";").split(";"),o.a.post(l.a.url+"/sqlsyntax/",{data:JSON.stringify(t.formItem),sql:JSON.stringify(t.datalist.sqllist),user:s.a.get("user"),type:1,id:t.id[0].id}).then(function(e){t.$Notice.success({title:"成功",desc:e.data}),t.validate_gen=!t.validate_gen,t.ClearForm()}).catch(function(e){l.a.ajanxerrorcode(t,e)})):t.$Message.error("请填写sql语句后再提交!"):t.$Message.error("表单验证失败!")})},ClearForm:function(){this.formItem.textarea=""}},mounted:function(){var t=this;o.a.put(l.a.url+"/workorder/connection",{permissions_type:"dml"}).then(function(e){t.item=e.data.connection,t.assigned=e.data.person}).catch(function(e){l.a.ajanxerrorcode(t,e)})}}},666:function(t,e,n){var i=n(667);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(78)("783b6de5",i,!0,{})},667:function(t,e,n){e=t.exports=n(77)(!0),e.push([t.i,".margin-top-8{margin-top:8px}.margin-top-10{margin-top:10px}.margin-top-20{margin-top:20px}.margin-left-10{margin-left:10px}.margin-bottom-10{margin-bottom:10px}.margin-bottom-100{margin-bottom:100px}.margin-right-10{margin-right:10px}.padding-left-6{padding-left:6px}.padding-left-8{padding-left:5px}.padding-left-10{padding-left:10px}.padding-left-20{padding-left:20px}.height-100{height:100%}.height-120px{height:100px}.height-200px{height:200px}.height-492px{height:492px}.height-460px{height:460px}.line-gray{height:0;border-bottom:2px solid #dcdcdc}.notwrap{word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.padding-left-5{padding-left:10px}[v-cloak]{display:none}.dragging-tip-enter-active{opacity:1;-webkit-transition:opacity .3s;transition:opacity .3s}.dragging-tip-enter,.dragging-tip-leave-to{opacity:0;-webkit-transition:opacity .3s;transition:opacity .3s}.dragging-tip-con{display:block;text-align:center;width:100%;height:50px}.dragging-tip-con span{font-size:18px}.record-tip-con{display:block;width:100%;height:292px;overflow:auto}.record-item{-webkit-box-sizing:content-box;box-sizing:content-box;display:block;overflow:hidden;height:24px;line-height:24px;padding:8px 10px;border-bottom:1px dashed #dcdcdc}.record-tip-con span{font-size:14px}.edittable-test-con{min-height:600px}.edittable-testauto-con{height:100%}.edittable-table-height-con{min-height:600px}.edittable-table-height1-con{height:200px}.edittable-con-1{-webkit-box-sizing:content-box;box-sizing:content-box;padding:15px 0 0;height:550px}.exportable-table-download-con1{padding:16px 0 16px 20px;border-bottom:1px dashed #c3c3c3;margin-bottom:16px}.exportable-table-download-con2{padding-left:20px}.show-image{padding:20px 0}.show-image img{display:block;width:100%;height:auto}","",{version:3,sources:["/Users/yeshaobin/Yearning/webpage/src/components/Order/SQLsyntax.vue"],names:[],mappings:"AACA,cACE,cAAgB,CACjB,AACD,eACE,eAAiB,CAClB,AACD,eACE,eAAiB,CAClB,AACD,gBACE,gBAAkB,CACnB,AACD,kBACE,kBAAoB,CACrB,AACD,mBACE,mBAAqB,CACtB,AACD,iBACE,iBAAmB,CACpB,AACD,gBACE,gBAAkB,CACnB,AACD,gBACE,gBAAkB,CACnB,AACD,iBACE,iBAAmB,CACpB,AACD,iBACE,iBAAmB,CACpB,AACD,YACE,WAAa,CACd,AACD,cACE,YAAc,CACf,AACD,cACE,YAAc,CACf,AACD,cACE,YAAc,CACf,AACD,cACE,YAAc,CACf,AACD,WACE,SAAU,AACV,+BAAiC,CAClC,AACD,SACE,oBAAqB,AACrB,mBAAoB,AACpB,gBAAiB,AACjB,sBAAwB,CACzB,AACD,gBACE,iBAAmB,CACpB,AACD,UACE,YAAc,CACf,AACD,2BACE,UAAW,AACX,+BAAiC,AACjC,sBAAyB,CAC1B,AACD,2CAEE,UAAW,AACX,+BAAiC,AACjC,sBAAyB,CAC1B,AACD,kBACE,cAAe,AACf,kBAAmB,AACnB,WAAY,AACZ,WAAa,CACd,AACD,uBACE,cAAgB,CACjB,AACD,gBACE,cAAe,AACf,WAAY,AACZ,aAAc,AACd,aAAe,CAChB,AACD,aACE,+BAAgC,AACxB,uBAAwB,AAChC,cAAe,AACf,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,iBAAkB,AAClB,gCAAoC,CACrC,AACD,qBACE,cAAgB,CACjB,AACD,oBACE,gBAAkB,CACnB,AACD,wBACE,WAAa,CACd,AACD,4BACE,gBAAkB,CACnB,AACD,6BACE,YAAc,CACf,AACD,iBACE,+BAAgC,AACxB,uBAAwB,AAChC,iBAAkB,AAClB,YAAc,CACf,AACD,gCACE,yBAA0B,AAC1B,iCAAkC,AAClC,kBAAoB,CACrB,AACD,gCACE,iBAAmB,CACpB,AACD,YACE,cAAgB,CACjB,AACD,gBACE,cAAe,AACf,WAAY,AACZ,WAAa,CACd",file:"SQLsyntax.vue",sourcesContent:["\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.dragging-tip-enter-active {\n  opacity: 1;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n}\n.dragging-tip-enter,\n.dragging-tip-leave-to {\n  opacity: 0;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n}\n.dragging-tip-con {\n  display: block;\n  text-align: center;\n  width: 100%;\n  height: 50px;\n}\n.dragging-tip-con span {\n  font-size: 18px;\n}\n.record-tip-con {\n  display: block;\n  width: 100%;\n  height: 292px;\n  overflow: auto;\n}\n.record-item {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  display: block;\n  overflow: hidden;\n  height: 24px;\n  line-height: 24px;\n  padding: 8px 10px;\n  border-bottom: 1px dashed gainsboro;\n}\n.record-tip-con span {\n  font-size: 14px;\n}\n.edittable-test-con {\n  min-height: 600px;\n}\n.edittable-testauto-con {\n  height: 100%;\n}\n.edittable-table-height-con {\n  min-height: 600px;\n}\n.edittable-table-height1-con {\n  height: 200px;\n}\n.edittable-con-1 {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  padding: 15px 0 0;\n  height: 550px;\n}\n.exportable-table-download-con1 {\n  padding: 16px 0 16px 20px;\n  border-bottom: 1px dashed #c3c3c3;\n  margin-bottom: 16px;\n}\n.exportable-table-download-con2 {\n  padding-left: 20px;\n}\n.show-image {\n  padding: 20px 0;\n}\n.show-image img {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n"],sourceRoot:""}])},668:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",[n("Col",{attrs:{span:"6"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-redo"}}),t._v("\n        选择数据库\n      ")],1),t._v(" "),n("div",{staticClass:"edittable-test-con"},[n("div",{staticClass:"margin-bottom-10",attrs:{id:"showImage"}},[n("Form",{ref:"formItem",attrs:{model:t.formItem,rules:t.ruleValidate,"label-width":80}},[n("FormItem",{attrs:{label:"机房:",prop:"computer_room"}},[n("Select",{on:{"on-change":t.Connection_Name},model:{value:t.formItem.computer_room,callback:function(e){t.$set(t.formItem,"computer_room",e)},expression:"formItem.computer_room"}},t._l(t.datalist.computer_roomlist,function(e){return n("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],1),t._v(" "),n("FormItem",{attrs:{label:"连接名:",prop:"connection_name"}},[n("Select",{attrs:{filterable:""},on:{"on-change":t.DataBaseName},model:{value:t.formItem.connection_name,callback:function(e){t.$set(t.formItem,"connection_name",e)},expression:"formItem.connection_name"}},t._l(t.datalist.connection_name_list,function(e){return n("Option",{key:e.connection_name,attrs:{value:e.connection_name}},[t._v(t._s(e.connection_name))])}))],1),t._v(" "),n("FormItem",{attrs:{label:"库名:",prop:"basename"}},[n("Select",{attrs:{filterable:""},model:{value:t.formItem.basename,callback:function(e){t.$set(t.formItem,"basename",e)},expression:"formItem.basename"}},t._l(t.datalist.basenamelist,function(e){return n("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],1),t._v(" "),n("FormItem",{attrs:{label:"工单说明:",prop:"text"}},[n("Input",{attrs:{placeholder:"请输入"},model:{value:t.formItem.text,callback:function(e){t.$set(t.formItem,"text",e)},expression:"formItem.text"}})],1),t._v(" "),n("FormItem",{attrs:{label:"指定审核人:",prop:"assigned"}},[n("Select",{model:{value:t.formItem.assigned,callback:function(e){t.$set(t.formItem,"assigned",e)},expression:"formItem.assigned"}},t._l(this.assigned,function(e){return n("Option",{key:e.username,attrs:{value:e.username}},[t._v(t._s(e.username))])}))],1),t._v(" "),n("FormItem",{attrs:{label:"是否备份"}},[n("RadioGroup",{model:{value:t.formItem.backup,callback:function(e){t.$set(t.formItem,"backup",e)},expression:"formItem.backup"}},[n("Radio",{attrs:{label:"1"}},[t._v("是")]),t._v(" "),n("Radio",{attrs:{label:"0"}},[t._v("否")])],1)],1),t._v(" "),n("FormItem",[n("Button",{attrs:{type:"info",icon:"paintbucket"},nativeOn:{click:function(e){t.beautify()}}},[t._v("美化")]),t._v(" "),n("Button",{staticStyle:{"margin-left":"10%"},attrs:{type:"error",icon:"trash-a"},nativeOn:{click:function(e){t.ClearForm()}}},[t._v("清除")])],1),t._v(" "),n("FormItem",[n("Button",{attrs:{type:"warning",icon:"android-search"},nativeOn:{click:function(e){t.test_sql()}}},[t._v("检测")]),t._v(" "),n("Button",{staticStyle:{"margin-left":"10%"},attrs:{type:"success",icon:"ios-redo",disabled:this.validate_gen},nativeOn:{click:function(e){t.SubmitSQL()}}},[t._v("提交")])],1)],1),t._v(" "),n("Alert",{staticStyle:{height:"145px"}},[t._v("\n            检测表字段提示信息\n            "),n("template",{slot:"desc"},[n("p",[t._v("1.错误等级 0正常,1警告,2错误。")]),t._v(" "),n("p",[t._v("2.阶段状态 审核成功,Audit completed")]),t._v(" "),n("p",[t._v("3.错误信息 用来表示出错错误信息")]),t._v(" "),n("p",[t._v("4.当前检查的sql")]),t._v(" "),n("p",[t._v("注:只有错误等级等于0时提交按钮才会激活")])])],2)],1)])])],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"18"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-crop-strong"}}),t._v("\n        填写sql语句\n      ")],1),t._v(" "),n("Input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},placeholder:"请输入需要提交的SQL语句,多条sql请用;分隔",autocomplete:"on"},model:{value:t.formItem.textarea,callback:function(e){t.$set(t.formItem,"textarea",e)},expression:"formItem.textarea"}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("Table",{attrs:{columns:t.columnsName,data:t.Testresults,"highlight-row":""}})],1)],1)],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},90:function(t,e,n){"use strict";function i(t){n(666)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(304),o=n(668),r=n(1),s=i,l=r(a.a,o.a,!1,s,null,null);e.default=l.exports}});
//# sourceMappingURL=6.cfaa3b961df14e5e0110.js.map