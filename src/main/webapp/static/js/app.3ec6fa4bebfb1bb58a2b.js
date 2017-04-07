webpackJsonp([4,2],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=a(29),l=n(r),o=a(127),i=(n(o),a(9)),s=n(i),u=a(3),c=n(u),f=a(135),d=n(f),p=a(147),m=n(p),h=a(27),v=n(h),b=a(70),_=n(b);a(128);var g=a(67),D=n(g);c.default.use(m.default),c.default.use(s.default),c.default.http.interceptors.push(D.default),new c.default((0,l.default)({router:v.default,store:_.default,el:"#app"},d.default))},26:function(e,t){"use strict";function a(e,t){for(var a=t-(e+"").length,n=0;n<a;n++)e="0"+e;return e}Object.defineProperty(t,"__esModule",{value:!0});var n=/([yMdhsm])(\1*)/g,r="yyyy-MM-dd hh:mm:ss";t.default={format:function(e,t){return t=t||r,t.replace(n,function(t){switch(t.charAt(0)){case"y":return a(e.getFullYear(),t.length);case"M":return a(e.getMonth()+1,t.length);case"d":return a(e.getDate(),t.length);case"w":return e.getDay()+1;case"h":return a(e.getHours(),t.length);case"m":return a(e.getMinutes(),t.length);case"s":return a(e.getSeconds(),t.length)}})}}},27:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),l=n(r),o=a(148),i=n(o),s=a(136),u=n(s),c=a(138),f=n(c),d=a(139),p=n(d);l.default.use(i.default),t.default=new i.default({routes:[{path:"/home",component:u.default,name:"Home",redirect:"/home/table",children:[{path:"table",name:"Table",component:f.default},{path:"form",name:"Form",component:function(e){return a.e(1,function(t){var a=[t(137)];e.apply(null,a)}.bind(this))}}]},{path:"/login",name:"Login",component:p.default},{path:"/register",name:"Register",component:function(e){return a.e(0,function(t){var a=[t(140)];e.apply(null,a)}.bind(this))}},{path:"*",redirect:"/login"}]})},28:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GET_TABLEDATA="GET_TABLEDATA"},67:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t(function(e){return 406===e.status&&l.default.push("/login"),e})};var r=a(27),l=n(r)},68:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(19),o=r(l),i=a(117),s=r(i),u=a(3),c=r(u),f=a(28),d=n(f),p=(a(9),a(26)),m=r(p);t.default={getTableData:function(e,t){var a=e.commit;return console.info(a),t||(t={current:1,size:10}),c.default.http({type:"GET",url:"api/table/getTable",params:t}).then(function(e){var t=e.body;0===t.errorCode?(t.data.map(function(e){return e.date=m.default.format(new Date(e.date),"yyyy-MM-dd"),e}),console.log(t),a(d.GET_TABLEDATA,t)):s.default.error(t.errorMessage)})},deleteData:function(e,t){var a=(e.commit,e.dispatch);console.log(t);var n=t.id;return s.default.confirm("確定要刪除嗎？","提醒！",{type:"warning"}).then(function(){c.default.http.delete("api/table/deleteTable?id="+n).then(function(e){return 1===e.body.errorCode?o.default.success("已刪除"):o.default.error("删除失败！")}).then(function(){return a("getTableData")})}).catch(function(){console.error("cancel")})},editData:function(e,t){var a=(e.commit,e.dispatch);console.log(t),c.default.http.post("api/table/updateTable",t).then(function(e){return 1===e.body.errorCode?o.default.success("编辑成功"):o.default.error("編輯失敗："+e.body.errorMessage)}).then(function(){return a("getTableData")})}}},69:function(e,t){"use strict"},70:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),l=n(r),o=a(44),i=n(o),s=a(69),u=n(s),c=a(68),f=n(c),d=a(71),p=n(d);l.default.use(i.default);var m={tableData:[],user:{}};t.default=new i.default.Store({state:m,getters:u.default,mutations:p.default,actions:f.default})},71:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(80),o=r(l),i=a(28),s=n(i);t.default=(0,o.default)({},s.GET_TABLEDATA,function(e,t){e.tableData=t})},72:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",components:{}}},73:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(26),l=n(r);t.default={data:function(){return{timeInfo:null,currentPathName:"",currentPathNameParent:""}},created:function(){this.fetchData(),this.timeClock()},watch:{$route:"fetchData"},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},timeClock:function(){var e=this;setInterval(function(){e.timeInfo=l.default.format(new Date)},1e3)},fetchData:function(){this.currentPathName=this.$route.name,console.log(this.$route),this.currentPathNameParent=this.$route.matched[0].name}}}},75:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(29),l=n(r),o=a(44);t.default={data:function(){return{page:{current:1,size:10},dialogFormVisible:!1,formData:{},pickerOptions:{shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]}}},computed:(0,l.default)({},(0,o.mapState)(["tableData"])),created:function(){this.getTableData(this.page)},methods:(0,l.default)({},(0,o.mapActions)(["getTableData","deleteData","editData"]),{editClick:function(e,t){this.formData=t,this.dialogFormVisible=!0},cancelDialog:function(){console.log(this.formData,"formDataGet"),this.dialogFormVisible=!1},closeDialog:function(){this.editData(this.formData),this.dialogFormVisible=!1},handleSizeChange:function(e){this.page.size=e,this.page.current=1,this.getTableData(this.page),console.log("每页 "+e+" 条")},handleCurrentChange:function(e){this.page.current=e,this.getTableData(this.page),console.log("当前页是: "+e)}})}},76:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(19),l=n(r);a(9);t.default={data:function(){return{user:{}}},methods:{login:function(){var e=this;console.log("usre",this.user),this.$http.post("api/user/login",this.user).then(function(t){console.log(t);var a=t.body;0===a.errorCode?(l.default.success("验证成功"),e.$router.push({path:"home/table"})):l.default.error(a.errorMessage)})},register:function(){this.$router.push({path:"/register"})}}}},127:function(e,t){},128:function(e,t){},129:function(e,t){},130:function(e,t){},131:function(e,t){},134:function(e,t){},135:function(e,t,a){a(130);var n=a(6)(a(72),a(142),null,null);e.exports=n.exports},136:function(e,t,a){a(134);var n=a(6)(a(73),a(146),"data-v-e84be770",null);e.exports=n.exports},138:function(e,t,a){a(131);var n=a(6)(a(75),a(143),null,null);e.exports=n.exports},139:function(e,t,a){a(129);var n=a(6)(a(76),a(141),null,null);e.exports=n.exports},141:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("header"),e._v(" "),a("section",[a("el-form",{ref:"form",attrs:{"label-position":"top","label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:e.user.userCode,callback:function(t){e.user.userCode=t},expression:"user.userCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{placeholder:"密码",type:"password"},model:{value:e.user.password,callback:function(t){e.user.password=t},expression:"user.password"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success"},on:{click:e.login}},[e._v("登录")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.register}},[e._v("注册")])],1)],1)],1),e._v(" "),a("footer")])},staticRenderFns:[]}},142:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},143:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.data,border:"",algin:"center"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"120",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"date",label:"日期",width:"120",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"100",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"province",label:"省份",width:"100",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"city",label:"市区",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址",width:"300",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"100",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{context:e._self,label:"操作"},inlineTemplate:{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.editClick(e.$index,e.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.deleteData(e.row)}}},[e._v("删除")])],1)},staticRenderFns:[]}})],1)],e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.page.current,"page-sizes":[10,20,30,40],"page-size":e.page.size,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"收货地址"},model:{value:e.dialogFormVisible,callback:function(t){e.dialogFormVisible=t},expression:"dialogFormVisible"}},[a("el-form",{attrs:{model:e.formData}},[a("el-form-item",{attrs:{label:"日期","label-width":"120px"}},[a("el-date-picker",{attrs:{type:"date",align:"right","picker-options":e.pickerOptions,placeholder:"选择日期"},model:{value:e.formData.date,callback:function(t){e.formData.date=t},expression:"formData.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名","label-width":"120px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formData.name,callback:function(t){e.formData.name=t},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"省份","label-width":"120px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formData.province,callback:function(t){e.formData.province=t},expression:"formData.province"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"市区","label-width":"120px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formData.city,callback:function(t){e.formData.city=t},expression:"formData.city"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址","label-width":"120px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formData.address,callback:function(t){e.formData.address=t},expression:"formData.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮编","label-width":"120px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.formData.zip,callback:function(t){e.formData.zip=t},expression:"formData.zip"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{attrs:{type:"info"},on:{click:e.cancelDialog}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.closeDialog}},[e._v("确 定")])],1)],1)],2)},staticRenderFns:[]}},146:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"panel"},[a("el-col",{staticClass:"panel-top",attrs:{span:24}},[a("el-col",{staticClass:"logo",attrs:{span:20}},[a("el-tooltip",{staticClass:"item tip-time",attrs:{content:"当前时间",effect:"dark",placement:"left"}},[a("i",{staticClass:"el-icon-time"})]),e._v("\n      "+e._s(e.timeInfo)+"\n    ")],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-tooltip",{staticClass:"item tip-logout",attrs:{content:"退出",effect:"dark",placement:"bottom"}},[a("router-link",{attrs:{to:"/login"}},[a("i",{staticClass:"el-icon-close"})])],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2",router:""},on:{open:e.handleOpen,close:e.handleClose}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-message"}),e._v("组件")]),e._v(" "),a("el-menu-item-group",[a("template",{slot:"title"},[e._v("常用")]),e._v(" "),a("el-menu-item",{attrs:{index:"/home/table"}},[e._v("表格")]),e._v(" "),a("el-menu-item",{attrs:{index:"/home/form"}},[e._v("表单")])],2),e._v(" "),a("el-menu-item-group",{attrs:{title:"分组2"}},[a("el-menu-item",{attrs:{index:"1-3"}},[e._v("选项3")])],1)],2),e._v(" "),a("el-menu-item",{attrs:{index:"2"}},[a("i",{staticClass:"el-icon-menu"}),e._v("导航二")]),e._v(" "),a("el-menu-item",{attrs:{index:"3"}},[a("i",{staticClass:"el-icon-setting"}),e._v("导航三")])],1)],1),e._v(" "),a("el-col",{staticClass:"section",attrs:{span:20}},[a("el-col",{staticClass:"section-inside",attrs:{span:24}},[a("h2",{staticStyle:{width:"200px",float:"left",color:"#475669"}},[e._v(e._s(e.currentPathName))]),e._v(" "),a("el-breadcrumb",{staticStyle:{float:"right"},attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/login"}}},[e._v("首页")]),e._v(" "),""!=e.currentPathNameParent?a("el-breadcrumb-item",[e._v(e._s(e.currentPathNameParent))]):e._e(),e._v(" "),""!=e.currentPathName?a("el-breadcrumb-item",[e._v(e._s(e.currentPathName))]):e._e()],1)],1),e._v(" "),a("div",{staticClass:"section-inside clearfix"},[a("router-view")],1)],1)],1)},staticRenderFns:[]}},149:function(e,t){}});