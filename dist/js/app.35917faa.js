(function(e){function t(t){for(var c,o,r=t[0],l=t[1],u=t[2],i=0,f=[];i<r.length;i++)o=r[i],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},s={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a87":function(e,t,n){},"1f31":function(e,t,n){"use strict";n("8eae")},2399:function(e,t,n){"use strict";n("32ac")},"32ac":function(e,t,n){},4399:function(e,t,n){"use strict";n("1a87")},4678:function(e,t,n){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=a,e.exports=s,s.id="4678"},"4a1d":function(e,t,n){},"4f66":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function s(e,t,n,s,a,o){var r=Object(c["resolveComponent"])("app-header"),l=Object(c["resolveComponent"])("to-do");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(r),Object(c["createVNode"])(l)])}var a={class:"main"},o={class:"tasks"},r={class:"tasks__stats"},l={class:"input"};function u(e,t,n,s,u,d){var i=Object(c["resolveComponent"])("info-card"),f=Object(c["resolveComponent"])("task-section"),j=Object(c["resolveComponent"])("input-field");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("div",r,[Object(c["createVNode"])(i,{title:"⏳",count:s.tasksCount,cardStyle:"pending"},null,8,["count"]),Object(c["createVNode"])(i,{title:"✅",count:s.completed,cardStyle:"done"},null,8,["count"])]),Object(c["createVNode"])(f)]),Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(j)])])}n("a4d3"),n("e01a");var d=function(e){return Object(c["pushScopeId"])("data-v-7a52c03f"),e=e(),Object(c["popScopeId"])(),e},i={class:"input"},f=d((function(){return Object(c["createElementVNode"])("p",{class:"input__hint"},"Click Enter to create",-1)}));function j(e,t,n,s,a,o){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",i,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"input__field",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.description=e}),onKeyup:t[1]||(t[1]=Object(c["withKeys"])((function(){return s.createTask&&s.createTask.apply(s,arguments)}),["enter"])),placeholder:"Enter task here...",maxlength:"60"},null,544),[[c["vModelText"],s.description]]),f])}n("4de4"),n("d3b7"),n("e9c4"),n("25f0");var b=Object(c["ref"])([]),p=Object(c["ref"])(0),m=Object(c["ref"])(0),k=JSON.parse(localStorage.getItem("tasks")),v=function(){p.value=b.value.filter((function(e){return 0==e.completed})).length,m.value=b.value.filter((function(e){return 1==e.completed})).length},O=function(){localStorage.setItem("tasks",JSON.stringify(b.value))},h=function(){k?(b.value=k,v()):(k=[],v())},g=function(e){b.value.push({id:Math.random().toString(36).substring(2,15),description:e,completed:!1}),O(),v()},y=function(e){e.completed=!e.completed,O(),v()},_=function(e){console.log(e.id),b.value.filter((function(t){return t.id!=e.id}))},z=n("3ef4"),w={setup:function(){var e=n("c1df"),t=Object(c["ref"])(""),s=Object(c["computed"])((function(){return e().format("DD.MM.YY HH:mm:ss")})),a=Object(c["computed"])((function(){return e().format("DD.MM.YY HH:mm:ss")})),o=function(){t.value?(g(t.value),r(),t.value=""):l()},r=function(){Object(z["a"])({showClose:!0,message:"New To-Do item has been created",type:"success"})},l=function(){Object(z["a"])({showClose:!0,message:"Please enter something to input field",type:"warning"})};return{description:t,id:s,time:a,createTask:o,successMsg:r,notifyMsg:l}}},B=(n("1f31"),n("6b0d")),E=n.n(B);const N=E()(w,[["render",j],["__scopeId","data-v-7a52c03f"]]);var S=N,C={class:"tasks"};function V(e,t,n,s,a,o){var r=Object(c["resolveComponent"])("task-card");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",C,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(s.tasks,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"task__list",key:t},[Object(c["createVNode"])(r,{task:e},null,8,["task"])])})),128))])}var M={class:"task"};function T(e,t,n,s,a,o){var r=Object(c["resolveComponent"])("el-button");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",M,[Object(c["createElementVNode"])("p",{class:Object(c["normalizeClass"])(["task__description",{completed:n.task.completed}])},Object(c["toDisplayString"])(n.task.description),3),n.task.completed?(Object(c["openBlock"])(),Object(c["createBlock"])(r,{key:1,onClick:t[1]||(t[1]=function(e){return s.removeTask(n.task)}),type:"danger",icon:s.Delete,circle:""},null,8,["icon"])):(Object(c["openBlock"])(),Object(c["createBlock"])(r,{key:0,onClick:t[0]||(t[0]=function(e){return s.completeTask(n.task)}),type:"success",icon:s.Check,circle:""},null,8,["icon"]))])}var x=n("aab7"),D=n("df9f"),I={props:["task"],setup:function(){return{completeTask:y,removeTask:_,Check:x["a"],Delete:D["a"]}}};n("f5fc");const P=E()(I,[["render",T],["__scopeId","data-v-42795817"]]);var H=P,Y={components:{TaskCard:H},setup:function(){return{tasks:b}}};n("4399");const J=E()(Y,[["render",V],["__scopeId","data-v-43e91d03"]]);var F=J,L={class:"card__content"},U={class:"title"},q={class:"count"};function K(e,t,n,s,a,o){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["card",n.cardStyle])},[Object(c["createElementVNode"])("div",L,[Object(c["createElementVNode"])("p",U,Object(c["toDisplayString"])(n.title),1),Object(c["createElementVNode"])("p",q,Object(c["toDisplayString"])(n.count),1)])],2)}n("a9e3");var A={props:{title:String,count:Number,cardStyle:String},setup:function(){return{}}};n("e27f");const G=E()(A,[["render",K],["__scopeId","data-v-05516aba"]]);var Q=G,R={components:{InputField:S,TaskSection:F,InfoCard:Q},name:"MainPage",setup:function(){return{tasksCount:p,completed:m}}};n("e927");const W=E()(R,[["render",u],["__scopeId","data-v-6dd2f902"]]);var X=W;function Z(e,t,n,s,a,o){return Object(c["openBlock"])(),Object(c["createElementBlock"])("h1",null,"Your To-Do List")}var $={name:"Header",data:function(){return{menuOpen:!1}},methods:{toggleMenu:function(){this.menuOpen=!this.menuOpen}}};n("ba0e");const ee=E()($,[["render",Z],["__scopeId","data-v-15c8cf42"]]);var te=ee,ne={components:{"to-do":X,"app-header":te},setup:function(){Object(c["onBeforeMount"])((function(){h()}))}};n("2399");const ce=E()(ne,[["render",s]]);var se=ce,ae=n("6c02"),oe=[{path:"/",name:"Home",component:X},{}],re=Object(ae["a"])({history:Object(ae["b"])("/"),routes:oe}),le=re,ue=n("5502"),de=Object(ue["a"])({state:{},mutations:{},actions:{},modules:{}}),ie=n("c3a1"),fe=(n("7437"),Object(c["createApp"])(se));fe.use(ie["a"]),fe.use(de),fe.use(le),fe.mount("#app")},"5a04":function(e,t,n){},"8eae":function(e,t,n){},"950a":function(e,t,n){},ba0e:function(e,t,n){"use strict";n("950a")},e27f:function(e,t,n){"use strict";n("4a1d")},e927:function(e,t,n){"use strict";n("5a04")},f5fc:function(e,t,n){"use strict";n("4f66")}});
//# sourceMappingURL=app.35917faa.js.map