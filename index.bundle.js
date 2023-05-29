(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),d=n.n(a)()(r());d.push([e.id,"* {\n  border: 1px dashed gray;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-auto-rows: 100px; \n}\n\nheader {\n  grid-column: 1 / -1;\n  text-align: center;\n}\n\nnav {\n  padding: 20px;\n}\n\nnav > ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n}\n\n.list-controls button {\n  cursor: pointer;\n}\n\n#task-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto; \n  background-color: rgb(0,0,0); \n  background-color: rgba(0,0,0,0.4);\n}\n\n#task-form {\n  background-color: white;\n  border-radius: 20px;\n  padding: 20px;\n  margin: 15% 35%;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.input-group {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  width: 250px;\n}",""]);const c=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(d[l]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);o&&d[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},d=[],c=0;c<e.length;c++){var l=e[c],i=o.base?l[0]+o.base:l[0],s=a[i]||0,p="".concat(i," ").concat(s);a[i]=s+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}d.push(p)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<a.length;d++){var c=n(a[d]);t[c].references--}for(var l=o(e,r),i=0;i<a.length;i++){var s=n(a[i]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},333:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(e,t=[])=>({getName:()=>e,getTasks:()=>t,addTask:e=>{t.push(e)}})},236:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(e={})=>({addProject:t=>{e[t.getName()]=t},getProject:t=>e[t],getProjectList:()=>{let t=[];for(let n in e)t.push(e[n]);return t},removeProject:t=>{delete e.name}})},326:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(997),r=n(333),a=n(236);const d=()=>{const e=e=>({title:e.getTitle(),dueDate:e.getDueDate(),effortLevel:e.getEffortLevel(),completed:e.isCompleted()}),t=t=>{let n=[];for(let o of t.getTasks())n.push(e(o));return{name:t.getName(),tasks:n}},n=e=>{let t=(0,r.Z)(e.name);for(let r of e.tasks)t.addTask((n=r,(0,o.Z)(n.title,n.dueDate,n.effortLevel,n.completed)));var n;return t};return{storeProjectList:e=>{localStorage.setItem("projectList",JSON.stringify((e=>{let n={};for(let o of e.getProjectList())n[o.getName()]=t(o);return{projects:n}})(e)))},retrieveProjectListObject:()=>(e=>{let t,o=(0,a.Z)();for(let r in e.projects)t=n(e.projects[r]),o.addProject(t);return o})(JSON.parse(localStorage.getItem("projectList")))}}},997:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(e,t,n,o=!1)=>({getTitle:()=>e,getDueDate:()=>t,isCompleted:()=>o,getEffortLevel:()=>n,setTitle:t=>{e=t},setDueDate:e=>{t=e},toggleCompleted:()=>{o=!o},setEffortLevel:e=>{n=e}})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),d=n.n(a),c=n(565),l=n.n(c),i=n(216),s=n.n(i),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=d().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v=()=>{document.querySelector("#task-modal").style.display="block"},h=e=>{document.querySelector("#task-modal").style.display="none",document.querySelector("#task-form").reset()};var g=n(997),y=n(333),C=n(236),E=n(326);(()=>{const e=document.querySelector("body");(e=>{const t=document.createElement("header"),n=document.createElement("h1");n.innerText="To-Do List",t.appendChild(n),e.appendChild(t)})(e),(e=>{const t=document.createElement("nav"),n=document.createElement("ul");n.classList.add("todo-lists");const o=document.createElement("li");o.innerText="Home",n.appendChild(o);const r=document.createElement("li");r.innerText="Projects",n.appendChild(r);const a=document.createElement("ul");a.classList.add("projects-list"),n.appendChild(a),t.appendChild(n),e.appendChild(t)})(e),(e=>{const t=document.createElement("main"),n=document.createElement("div");n.classList.add("list-container");const o=document.createElement("div");o.classList.add("list-controls");const r=document.createElement("button");r.id="add-todo",r.textContent="New Task",r.addEventListener("click",v),o.appendChild(r),t.appendChild(n),t.appendChild(o),e.appendChild(t)})(e),(e=>{const t=document.createElement("div");t.id="task-modal";const n=document.createElement("form");n.id="task-form";const o=document.createElement("div");o.classList.add("input-group");const r=document.createElement("label");r.textContent="Title",r.htmlFor="title";const a=document.createElement("input");a.type="text",a.id="title",a.placeholder="Title",o.appendChild(r),o.appendChild(a);const d=document.createElement("div");d.classList.add("input-group");const c=document.createElement("label");c.textContent="Due Date",c.htmlFor="due-date";const l=document.createElement("input");l.type="date",l.id="due-date",l.placeholder="Due Date",d.appendChild(c),d.appendChild(l);const i=document.createElement("div");i.classList.add("input-group");const s=document.createElement("label");s.textContent="Effort",s.htmlFor="effort-level";const p=document.createElement("select");p.id="effort-level";const u=document.createElement("option");u.value="",u.textContent="Please choose an effort level",u.selected=!0,u.disabled=!0;const m=document.createElement("option");m.value="1",m.textContent="Easy";const f=document.createElement("option");f.value="2",f.textContent="Medium";const v=document.createElement("option");v.value="3",v.textContent="Hard",p.appendChild(u),p.appendChild(m),p.appendChild(f),p.appendChild(v),i.appendChild(s),i.appendChild(p);const g=document.createElement("div");g.classList.add("control-group");const y=document.createElement("input");y.type="submit",y.value="Add Task",y.id="submit-new-task",g.appendChild(y);const C=document.createElement("input");C.type="button",C.value="Cancel",C.id="cancel-new-task",C.addEventListener("click",h),g.appendChild(C),n.appendChild(o),n.appendChild(d),n.appendChild(i),n.appendChild(g),t.appendChild(n),e.appendChild(t)})(e)})();let x=(0,C.Z)(),b=(0,g.Z)("Laundry","May 29, 2023","Easy"),T=(0,g.Z)("Work","May 29, 2023","Hard"),L=(0,y.Z)("default");L.addTask(b),L.addTask(T),x.addProject(L);let k=(0,E.Z)();k.storeProjectList(x);let j=k.retrieveProjectListObject();console.log("RETRIEVED PROJECT LIST OBJECT"),console.log(j.getProjectList()),console.log(j.getProjectList()[0].getTasks()[0].getTitle())})()})();