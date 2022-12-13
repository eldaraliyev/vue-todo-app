(function(e){function t(t){for(var o,l,r=t[0],s=t[1],d=t[2],u=0,p=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);i&&i(t);while(p.length)p.shift()();return a.push.apply(a,d||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var c=a[t],o=!0,r=1;r<c.length;r++){var s=c[r];0!==n[s]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=c[0]))}return e}var o={},n={app:0},a=[];function l(t){if(o[t])return o[t].exports;var c=o[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=o,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(c,o,function(t){return e[t]}.bind(null,o));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-todo-app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var i=s;a.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"49d8":function(e,t,c){"use strict";c("b338")},"4a6a":function(e,t,c){},"4fc6":function(e,t,c){"use strict";c("5891")},"56d7":function(e,t,c){"use strict";c.r(t);var o=c("7a23");const n={class:"header"},a=Object(o["createElementVNode"])("h2",null," To Do List",-1),l={class:"main"},r={class:"main__body"},s=Object(o["createElementVNode"])("div",{class:"input-wrapper"},null,-1);function d(e,t,c,d,i,u){const p=Object(o["resolveComponent"])("el-button"),b=Object(o["resolveComponent"])("to-do");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("header",n,[a,Object(o["createVNode"])(p,{dark:d.isDark,icon:d.isDark?d.Moon:d.Sunny,plain:"",color:"#94a3b8",onClick:d.toggle},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(d.isDark?"Dark":"Light"),1)]),_:1},8,["dark","icon","onClick"])]),Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("div",r,[Object(o["createVNode"])(b),s])])],64)}const i={class:"main"},u={class:"tasks"},p={class:"tasks__stats"},b={class:"input"};function O(e,t,c,n,a,l){const r=Object(o["resolveComponent"])("info-card"),s=Object(o["resolveComponent"])("task-section"),d=Object(o["resolveComponent"])("input-field");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("div",p,[Object(o["createVNode"])(r,{title:"Pending: ",count:n.pending,cardStyle:"pending"},null,8,["count"]),Object(o["createVNode"])(r,{title:"Done: ",count:n.completed,cardStyle:"done"},null,8,["count"]),Object(o["createVNode"])(r,{title:"Total: ",count:n.total,cardStyle:"total"},null,8,["count"])]),Object(o["createVNode"])(s)]),Object(o["createElementVNode"])("div",b,[Object(o["createVNode"])(d)])])}const m={class:"input"};function j(e,t,c,n,a,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",m,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{class:"input__field",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.description=e),onKeyup:t[1]||(t[1]=Object(o["withKeys"])((...e)=>n.createTask&&n.createTask(...e),["enter"])),placeholder:"Add a task",maxlength:"60"},null,544),[[o["vModelText"],n.description]]),Object(o["createElementVNode"])("button",{class:"input__add",onClick:t[2]||(t[2]=(...e)=>n.createTask&&n.createTask(...e))},"Add")])}var k=c("3ef4"),f=c("be92");const v=Object(f["b"])("tasks",()=>{const e=Object(o["ref"])([]);let t=localStorage.tasks?JSON.parse(localStorage.tasks):[];const c=Object(o["computed"])(()=>e.value.length),n=Object(o["computed"])(()=>e.value.filter(e=>!1===e.completed).length),a=Object(o["computed"])(()=>e.value.filter(e=>e.completed).length),l=Object(o["computed"])(()=>Math.random().toString(36).substring(2,15));function r(){localStorage.setItem("tasks",JSON.stringify(e.value))}function s(){e.value=t||[]}function d(t){e.value.push({id:l,description:t,completed:!1,createdAt:(new Date).toLocaleString(),updatedAt:(new Date).toLocaleString()}),r()}function i(e){e.completed=!e.completed,e.updatedAt=(new Date).toLocaleString(),r()}function u(e){e.completed=!e.completed,e.reopened=!0,e.reopenedAt=(new Date).toLocaleString(),r()}function p(t){const c=e.value.findIndex(e=>e.id==t.id);(t||c)&&(e.value.splice(c,1),r())}return{tasks:e,lsTasks:t,totalTasks:c,pendingTasks:n,completedTasks:a,updateStorage:r,updateTaskList:s,createTask:d,completeTask:i,uncompleteTask:u,removeTask:p}});var g={setup(){const e=Object(o["ref"])(""),t=v(),c=()=>{e.value.trim()?(t.createTask(e.value),n(),e.value=""):a()},n=()=>{Object(k["a"])({showClose:!0,message:"Success! Created new to-do item",type:"success"})},a=()=>{Object(k["a"])({showClose:!0,message:"You must enter something to create new to-do item",type:"warning"})};return{description:e,createTask:c,successMsg:n,notifyMsg:a}}},y=(c("8512"),c("6b0d")),h=c.n(y);const V=h()(g,[["render",j],["__scopeId","data-v-616d5f5f"]]);var N=V;const _={class:"tasks"};function E(e,t,c,n,a,l){const r=Object(o["resolveComponent"])("task-card");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",_,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.tasks,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"task__list",key:t},[Object(o["createVNode"])(r,{task:e},null,8,["task"])]))),128))])}const T=e=>(Object(o["pushScopeId"])("data-v-b3cc0d46"),e=e(),Object(o["popScopeId"])(),e),C={class:"card"},S={class:"card__task"},w={class:"card__task__infobtn"},D={class:"card__task__description"},B={class:"card__task__actions"},x={key:0,class:"card__additional"},A={class:"card__additional__info"},M=T(()=>Object(o["createElementVNode"])("th",null,"Created At:",-1)),I={key:0},L=T(()=>Object(o["createElementVNode"])("th",null,"Updated At:",-1)),P=Object(o["createTextVNode"])("Delete Task"),F=T(()=>Object(o["createElementVNode"])("p",null,"Are you sure you want to delete selected todo item?",-1)),J={class:"dialog-footer"},z=Object(o["createTextVNode"])("Cancel"),U=Object(o["createTextVNode"])(" Confirm ");function K(e,t,c,n,a,l){const r=Object(o["resolveComponent"])("el-button"),s=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",C,[Object(o["createElementVNode"])("div",S,[Object(o["createElementVNode"])("div",w,[Object(o["createVNode"])(r,{circle:"",size:"small",type:"info",icon:n.MoreFilled,text:"",onClick:t[0]||(t[0]=e=>n.isInfoOpened=!n.isInfoOpened)},null,8,["icon"])]),Object(o["createElementVNode"])("div",D,[Object(o["createElementVNode"])("p",{class:Object(o["normalizeClass"])({completed:c.task.completed})},Object(o["toDisplayString"])(c.task.description),3)]),Object(o["createElementVNode"])("div",B,[c.task.completed?(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:1,onClick:t[2]||(t[2]=e=>n.uncompleteTask(c.task)),icon:n.Check,type:"primary",circle:""},null,8,["icon"])):(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:0,onClick:t[1]||(t[1]=e=>n.completeTask(c.task)),icon:n.Check,circle:""},null,8,["icon"]))])]),n.isInfoOpened?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",x,[Object(o["createElementVNode"])("table",A,[Object(o["createElementVNode"])("tbody",null,[Object(o["createElementVNode"])("tr",null,[M,Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(c.task.createdAt),1)]),Object(o["createElementVNode"])("tr",null,[c.task.reopened?(Object(o["openBlock"])(),Object(o["createElementBlock"])("th",I,"Reopened At:")):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(c.task.reopenedAt),1)]),Object(o["createElementVNode"])("tr",null,[L,Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(c.task.updatedAt),1)])])]),Object(o["createVNode"])(r,{type:"danger",text:"",onClick:t[3]||(t[3]=e=>n.isDialogActive=!0)},{default:Object(o["withCtx"])(()=>[P]),_:1})])):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])(s,{modelValue:n.isDialogActive,"onUpdate:modelValue":t[6]||(t[6]=e=>n.isDialogActive=e),title:"Delete Todo",width:"320px",center:""},{footer:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("span",J,[Object(o["createVNode"])(r,{onClick:t[4]||(t[4]=e=>n.isDialogActive=!1)},{default:Object(o["withCtx"])(()=>[z]),_:1}),Object(o["createVNode"])(r,{type:"success",onClick:t[5]||(t[5]=e=>n.removeTask(c.task))},{default:Object(o["withCtx"])(()=>[U]),_:1})])]),default:Object(o["withCtx"])(()=>[F]),_:1},8,["modelValue"])],64)}var R=c("f6f2"),Y=c("db9d"),q=c("cf2e"),G={props:["task"],setup(){const e=v(),t=Object(o["ref"])(!1),c=Object(o["ref"])(!1),n=c=>{e.removeTask(c),t.value=!1,Object(k["a"])({showClose:!0,message:"Done! To-do item has benn deleted",type:"success"})};return{isDialogActive:t,isInfoOpened:c,completeTask:e.completeTask,uncompleteTask:e.uncompleteTask,removeTask:n,Check:R["a"],Delete:R["b"],MoreFilled:R["d"],ElDialog:Y["a"],ElButton:q["a"]}}};c("816a");const H=h()(G,[["render",K],["__scopeId","data-v-b3cc0d46"]]);var Q=H,W={components:{TaskCard:Q},setup(){const e=v();return{tasks:e.tasks}}};c("49d8");const X=h()(W,[["render",E],["__scopeId","data-v-1a0ebb09"]]);var Z=X;const $={class:"card__content"},ee={class:"title"},te={class:"count"};function ce(e,t,c,n,a,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["card",c.cardStyle])},[Object(o["createElementVNode"])("div",$,[Object(o["createElementVNode"])("p",ee,Object(o["toDisplayString"])(c.title),1),Object(o["createElementVNode"])("p",te,Object(o["toDisplayString"])(c.count),1)])],2)}var oe={props:{title:String,count:Number,cardStyle:String},setup(){return{}}};c("fbed");const ne=h()(oe,[["render",ce],["__scopeId","data-v-51c0d0cb"]]);var ae=ne,le={components:{InputField:N,TaskSection:Z,InfoCard:ae},name:"MainPage",setup(){const e=v(),t=Object(o["computed"])(()=>e.pendingTasks),c=Object(o["computed"])(()=>e.completedTasks),n=Object(o["computed"])(()=>e.totalTasks);return e.updateTaskList(),{pending:t,completed:c,total:n}}};c("732a");const re=h()(le,[["render",O],["__scopeId","data-v-cb849d3a"]]);var se=re;const de=Object(f["b"])("layout",()=>{const e=Object(o["ref"])(null),t=localStorage.layout,c=Object(o["computed"])(()=>"dark"===e.value);function n(e){document.documentElement.setAttribute("data-theme",e)}function a(e){localStorage.setItem("layout",e)}function l(){if(localStorage.layout)n(t),e.value=t;else{const t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;let c=t?"dark":"light";a(c),n(c),e.value=c}}function r(){e.value&&"dark"===e.value?(n("light"),a("light"),e.value="light"):(n("dark"),a("dark"),e.value="dark")}return{mode:e,persistMode:t,isDark:c,toggleLayout:r,initLayout:l}});var ie={components:{"to-do":se,ElButton:q["a"]},setup(){const e=v(),t=de(),c=Object(o["computed"])(()=>t.isDark),n=()=>t.toggleLayout();return Object(o["onBeforeMount"])(()=>{e.updateTaskList(),t.initLayout()}),{isDark:c,Sunny:R["e"],Moon:R["c"],toggle:n}}};c("4fc6");const ue=h()(ie,[["render",d]]);var pe=ue,be=c("c3a1");c("7437");const Oe=Object(f["a"])(),me=Object(o["createApp"])(pe);me.use(be["a"]).use(Oe).mount("#app")},5891:function(e,t,c){},"732a":function(e,t,c){"use strict";c("c77a")},"816a":function(e,t,c){"use strict";c("4a6a")},8512:function(e,t,c){"use strict";c("a7ff")},a7ff:function(e,t,c){},b338:function(e,t,c){},c77a:function(e,t,c){},d0a1:function(e,t,c){},fbed:function(e,t,c){"use strict";c("d0a1")}});
//# sourceMappingURL=app.714664c4.js.map