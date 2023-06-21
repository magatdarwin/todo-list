(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(81),o=n.n(r),a=n(645),c=n.n(a),d=n(667),l=n.n(d),i=new URL(n(937),n.b),s=new URL(n(867),n.b),p=new URL(n(143),n.b),u=new URL(n(303),n.b),m=c()(o()),f=l()(i),h=l()(s),g=l()(p),v=l()(u);m.push([e.id,"@font-face {\r\n  font-family: 'Roboto-Regular';\r\n  src: url("+f+") format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto-Medium';\r\n  src: url("+h+") format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto-Bold';\r\n  src: url("+h+") format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'RobotoSlab-Regular';\r\n  src: url("+g+") format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'RobotoSlab-Black';\r\n  src: url("+v+") format('truetype');\r\n}\r\n\r\n* {\r\n  /* border: 1px dashed gray; */\r\n  font-family: 'Roboto-Regular';\r\n  color: #f0f0ef;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr;\r\n  grid-template-rows: 1fr 10fr;\r\n  grid-auto-rows: 100px;\r\n}\r\n\r\nheader {\r\n  grid-column: 1 / -1;\r\n  grid-row: 1 / 2;\r\n  text-align: center;\r\n  background-color: #0d0d0c;\r\n}\r\n\r\nheader h1 {\r\n  font-family: 'RobotoSlab-Black';\r\n  font-weight: 900;\r\n}\r\n\r\nnav {\r\n  padding: 20px;\r\n  grid-column: 1 / 2;\r\n  grid-row: 2 / -1;\r\n  background-color: #0d0d0c;\r\n}\r\n\r\nnav > ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nmain {\r\n  grid-column: 2 / -1;\r\n  grid-row: 2 / -1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 20px;\r\n  gap: 10px;\r\n  background-color: #1b1a18;\r\n}\r\n\r\nbutton, input[type=\"button\"] {\r\n  cursor: pointer;\r\n}\r\n\r\n#task-modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto; \r\n  background-color: rgb(0,0,0); \r\n  background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n#task-form, #project-form {\r\n  display: none;\r\n  background-color: white;\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  margin: 15% 35%;\r\n  padding: 40px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.input-group {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n  width: 250px;\r\n}\r\n\r\n.list-title-container {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.list-header {\r\n  margin: 0;\r\n}\r\n\r\n.list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.task-container {\r\n  display: flex;\r\n  /* padding: 10px; */\r\n  gap: 5px;\r\n}\r\n\r\n.task-container > .effort-level {\r\n  color: black;\r\n}\r\n\r\n.completed {\r\n  background-color: rgb(151, 202, 151);\r\n}\r\n\r\n.projects {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.project-list {\r\n  list-style: none;\r\n  padding-left: 20px;\r\n}\r\n\r\n#current-project {\r\n  background-color: #57cbc2;\r\n  color: #0d0d0c;\r\n}\r\n\r\n.editable {\r\n  background-color: rgb(219, 219, 219);\r\n  border: 1px solid black;\r\n}",""]);const y=m},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(c[l]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);r&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],d=0;d<e.length;d++){var l=e[d],i=r.base?l[0]+r.base:l[0],s=a[i]||0,p="".concat(i," ").concat(s);a[i]=s+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,r);r.byIndex=d,t.splice(d,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var d=n(a[c]);t[d].references--}for(var l=r(e,o),i=0;i<a.length;i++){var s=n(a[i]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},340:(e,t,n)=>{n.d(t,{He:()=>u,I5:()=>i,U1:()=>s,su:()=>m,yQ:()=>p});var r=n(326);const o=()=>{document.querySelector("#task-modal").style.display="block",document.querySelector("#task-form").style.display="flex"},a=()=>{document.querySelector("#task-modal").style.display="none";const e=document.querySelector("#task-form");e.style.display="none",e.reset()},c=()=>{document.querySelector("#task-modal").style.display="block",document.querySelector("#project-form").style.display="flex"},d=()=>{document.querySelector("#task-modal").style.display="none";const e=document.querySelector("#project-form");e.style.display="none",e.reset()},l=e=>{const t=e.target.classList.contains("edit-task"),n=e.target.parentElement,r=document.querySelectorAll(".task-container");for(let e of r)e!==n&&(e.querySelector(".edit-task").disabled=!0,e.querySelector(".delete-task").disabled=!0);n.querySelector(".task-title").readOnly=!t,n.querySelector(".effort-level").disabled=!t,n.querySelector(".due-date").readOnly=!t,n.querySelector(".save-changes").hidden=!t,n.querySelector(".cancel-changes").hidden=!t,n.querySelector(".edit-task").hidden=t,n.querySelector(".delete-task").hidden=t,t||s()},i=e=>{const t="edit-project"===e.target.id,n=e.target.parentElement,r=n.querySelector("#list-title");r.contentEditable=t,r.classList.add("editable"),n.querySelector("#edit-project").hidden=t,n.querySelector("#delete-project").hidden=t,n.querySelector("#save-project-changes").hidden=!t,n.querySelector("#cancel-project-changes").hidden=!t,t||(s(),r.classList.remove("editable"))},s=()=>{const e=localStorage.getItem("activeProject"),t=(0,r.eB)();document.querySelector(".list-title-container").dataset.projectIndex=t.getProjectIndex(e),document.querySelector("#list-title").innerText=e;const n=document.querySelector(".list-container");for(;n.firstChild;)n.removeChild(n.firstChild);const o=document.querySelector(".completed-container");for(;o.firstChild;)o.removeChild(o.firstChild);const a=t.getProject(e).getTasks();let c=0;for(let e in a){const t=a[e],d=t.getTitle(),i=document.createElement("div");i.classList.add("task-container"),i.dataset.taskIndex=e;const s=document.createElement("input");s.type="checkbox",s.classList.add("is-completed");const p=t.isCompleted();s.checked=p,s.addEventListener("click",r.Jo);const u=document.createElement("input");u.type="text",u.readOnly=!0,u.classList.add("task-title"),u.value=d;const m=document.createElement("select");m.classList.add("effort-level");const f=document.createElement("option");f.value="1",f.textContent="Easy";const h=document.createElement("option");h.value="2",h.textContent="Medium";const g=document.createElement("option");g.value="3",g.textContent="Hard",m.appendChild(f),m.appendChild(h),m.appendChild(g),m.value=t.getEffortLevel(),m.disabled=!0;const v=document.createElement("input");v.classList.add("due-date"),v.type="date",v.value=t.getDueDate(),v.readOnly=!0;const y=document.createElement("input");y.type="button",y.classList.add("edit-task"),y.value="Edit",y.addEventListener("click",l);const b=document.createElement("input");b.type="button",b.classList.add("save-changes"),b.value="Save Changes",b.addEventListener("click",r.eT),b.hidden=!0;const C=document.createElement("input");C.type="button",C.classList.add("delete-task"),C.value="Delete",C.addEventListener("click",r._5);const E=document.createElement("input");E.type="button",E.classList.add("cancel-changes"),E.value="Cancel",E.addEventListener("click",l),E.hidden=!0,i.appendChild(s),i.appendChild(u),i.appendChild(m),i.appendChild(v),i.appendChild(y),i.appendChild(b),i.appendChild(C),i.appendChild(E),p?(o.appendChild(i),c++):n.appendChild(i)}document.querySelector("#completed-title").innerText=c>0?"Completed Tasks":""},p=()=>{const e=document.querySelector("#current-project");null!==e&&e.removeAttribute("id");const t=localStorage.getItem("activeProject");document.querySelector(`[data-project-name="${t}"]`).id="current-project"},u=()=>{const e=document.querySelector(".project-list");for(;e.firstChild;)e.removeChild(e.firstChild);let t=(0,r.eB)().getProjectList();for(let n of t){const t=n.getName();if("General"!==t){const n=document.createElement("li"),o=document.createElement("button");o.innerText=t,o.classList.add("project"),o.dataset.projectName=t,o.addEventListener("click",(()=>{(0,r.bP)(t),s()})),n.appendChild(o),e.appendChild(n)}}p()},m=()=>{const e=document.querySelector("body");(e=>{const t=document.createElement("header"),n=document.createElement("h1");n.innerText="To-Do List",t.appendChild(n),e.appendChild(t)})(e),(e=>{const t=document.createElement("nav"),n=document.createElement("ul");n.classList.add("todo-lists");const o=document.createElement("li"),a=document.createElement("button");a.innerText="General",a.classList.add("project"),a.dataset.projectName="General",a.addEventListener("click",(()=>{(0,r.bP)("General"),s()})),a.id="current-project",o.appendChild(a),n.appendChild(o);const d=document.createElement("li"),l=document.createElement("div");l.classList.add("projects"),l.innerText="Projects";const i=document.createElement("button");i.textContent="+",i.id="new-project",i.addEventListener("click",c),l.appendChild(i),d.appendChild(l),n.appendChild(d);const p=document.createElement("ul");p.classList.add("project-list"),n.appendChild(p),t.appendChild(n),e.appendChild(t)})(e),(e=>{const t=document.createElement("main"),n=document.createElement("div");n.classList.add("list-title-container");const a=document.createElement("h2");a.id="list-title",a.classList.add("list-header");const c=document.createElement("input");c.id="edit-project",c.type="button",c.value="Edit",c.addEventListener("click",i);const d=document.createElement("input");d.id="delete-project",d.type="button",d.value="Delete",d.addEventListener("click",r.th);const l=document.createElement("input");l.id="save-project-changes",l.type="button",l.value="Save Changes",l.addEventListener("click",r.NV),l.hidden=!0;const s=document.createElement("input");s.id="cancel-project-changes",s.type="button",s.value="Cancel",s.addEventListener("click",i),s.hidden=!0,n.appendChild(a),n.appendChild(c),n.appendChild(d),n.appendChild(l),n.appendChild(s);const p=document.createElement("div");p.classList.add("list-container");const u=document.createElement("div");u.classList.add("list-controls");const m=document.createElement("button");m.id="add-todo",m.textContent="New Task",m.addEventListener("click",o),u.appendChild(m);const f=document.createElement("h3");f.id="completed-title",f.classList.add("list-header");const h=document.createElement("div");h.classList.add("completed-container"),t.appendChild(n),t.appendChild(p),t.appendChild(u),t.appendChild(f),t.appendChild(h),e.appendChild(t)})(e),(e=>{const t=document.createElement("div");t.id="task-modal";const n=document.createElement("form");n.id="task-form";const o=document.createElement("div");o.classList.add("input-group");const c=document.createElement("label");c.textContent="Title",c.htmlFor="title";const d=document.createElement("input");d.type="text",d.id="title",d.placeholder="Title",o.appendChild(c),o.appendChild(d);const l=document.createElement("div");l.classList.add("input-group");const i=document.createElement("label");i.textContent="Due Date",i.htmlFor="due-date";const p=document.createElement("input");p.type="date",p.id="due-date",p.placeholder="Due Date",l.appendChild(i),l.appendChild(p);const u=document.createElement("div");u.classList.add("input-group");const m=document.createElement("label");m.textContent="Effort",m.htmlFor="effort-level";const f=document.createElement("select");f.id="effort-level";const h=document.createElement("option");h.value="",h.textContent="Please choose an effort level",h.selected=!0,h.disabled=!0;const g=document.createElement("option");g.value="1",g.textContent="Easy";const v=document.createElement("option");v.value="2",v.textContent="Medium";const y=document.createElement("option");y.value="3",y.textContent="Hard",f.appendChild(h),f.appendChild(g),f.appendChild(v),f.appendChild(y),u.appendChild(m),u.appendChild(f);const b=document.createElement("div");b.classList.add("control-group");const C=document.createElement("input");C.type="submit",C.value="Add Task",C.id="submit-new-task",C.addEventListener("click",(e=>{(0,r.gI)(e),a(),s()})),b.appendChild(C);const E=document.createElement("input");E.type="button",E.value="Cancel",E.id="cancel-new-task",E.addEventListener("click",a),b.appendChild(E),n.appendChild(o),n.appendChild(l),n.appendChild(u),n.appendChild(b),t.appendChild(n),e.appendChild(t)})(e),(e=>{const t=document.querySelector("#task-modal"),n=document.createElement("form");n.id="project-form";const o=document.createElement("div");o.classList.add("input-group");const a=document.createElement("label");a.textContent="Name",a.htmlFor="project-name";const c=document.createElement("input");c.type="text",c.id="project-name",c.placeholder="Project Name",o.appendChild(a),o.appendChild(c);const l=document.createElement("div");l.classList.add("control-group");const i=document.createElement("input");i.type="submit",i.value="Add Project",i.id="add-new-project",i.addEventListener("click",(e=>{(0,r.B)(e),d(),u()})),l.appendChild(i);const s=document.createElement("input");s.type="button",s.value="Cancel",s.id="cancel-new-project",s.addEventListener("click",d),l.appendChild(s),n.appendChild(o),n.appendChild(l),t.appendChild(n)})(),(0,r.bP)("General"),u(),s()}},333:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(e,t=[])=>({getName:()=>e,getTask:e=>t[e],getTaskByName:e=>t[t.indexOf(e)],getTasks:()=>t,addTask:e=>{t.push(e)},deleteTask:e=>{t.splice(e,1)},setName:t=>{e=t}})},236:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(e=[])=>{const t=()=>{let t=[];for(let n of e)t.push(n.getName());return t};return{addProject:t=>{e.push(t)},getProject:t=>{const n=e.map((e=>e.getName())).indexOf(t);return e[n]},getProjectByIndex:t=>e[t],getProjectIndex:e=>t().indexOf(e),getProjectList:()=>{let t=[];for(let n of e)t.push(n);return t},getProjectNames:t,deleteProject:t=>{e.splice(t,1)}}}},326:(e,t,n)=>{n.d(t,{B:()=>g,Jo:()=>h,NV:()=>v,_5:()=>f,bP:()=>C,eB:()=>p,eT:()=>m,gI:()=>u,th:()=>y,vj:()=>s});var r=n(997),o=n(333),a=n(236),c=n(340);const d=e=>({title:e.getTitle(),dueDate:e.getDueDate(),effortLevel:e.getEffortLevel(),completed:e.isCompleted()}),l=e=>{let t=[];for(let n of e.getTasks())t.push(d(n));return{name:e.getName(),tasks:t}},i=e=>{let t=(0,o.Z)(e.name);for(let o of e.tasks)t.addTask((n=o,(0,r.Z)(n.title,n.dueDate,n.effortLevel,n.completed)));var n;return t},s=e=>{localStorage.setItem("projectList",JSON.stringify((e=>{let t={};for(let n of e.getProjectList())t[n.getName()]=l(n);return{projects:t}})(e)))},p=()=>(e=>{let t,n=(0,a.Z)();for(let r in e.projects)t=i(e.projects[r]),n.addProject(t);return n})(JSON.parse(localStorage.getItem("projectList"))),u=e=>{e.preventDefault();const t=localStorage.getItem("activeProject"),n=document.querySelector("#title").value,o=document.querySelector("#due-date").value,a=document.querySelector("#effort-level").value,c=(0,r.Z)(n,o,a),d=p();d.getProject(t).addTask(c),s(d),document.querySelector("#task-form").reset()},m=e=>{const t=e.target.parentElement,n=t.dataset.taskIndex,r=(t.querySelector(".edit-task"),t.querySelector(".task-title").value),o=t.querySelector(".effort-level").value,a=t.querySelector(".due-date").value,d=localStorage.getItem("activeProject");let l=p(),i=l.getProject(d).getTask(n);i.setTitle(r),i.setEffortLevel(o),i.setDueDate(a),s(l),(0,c.U1)()},f=e=>{if(confirm("Are you sure you want to delete this task?")){const t=e.target.parentElement.dataset.taskIndex;let n=p();const r=localStorage.getItem("activeProject");n.getProject(r).deleteTask(t),s(n),(0,c.U1)()}},h=e=>{const t=e.target.parentElement.dataset.taskIndex;let n=p();const r=localStorage.getItem("activeProject");n.getProject(r).getTask(t).toggleCompleted(),s(n),(0,c.U1)()},g=e=>{e.preventDefault();const t=document.querySelector("#project-name").value,n=p();if(b(t)){const e=(0,o.Z)(t);n.addProject(e),s(n),document.querySelector("#project-form").reset()}},v=e=>{const t=e.target.parentElement,n=t.querySelector("#list-title").innerText;if(b(n)){const r=p(),o=t.dataset.projectIndex;r.getProjectByIndex(o).setName(n),s(r),localStorage.setItem("activeProject",n),(0,c.I5)(e),(0,c.He)(),(0,c.U1)()}},y=e=>{if(confirm("Are you sure you want to delete this project?")){const t=e.target.parentElement.dataset.projectIndex,n=p();n.deleteProject(t),s(n),C("General"),(0,c.He)(),(0,c.U1)()}},b=e=>!p().getProjectNames().includes(e)||(alert(`${e} already exists. Please enter a unique project name.`),!1),C=e=>{p().getProjectNames().includes(e)&&(localStorage.setItem("activeProject",e),(0,c.yQ)())}},997:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(e,t,n,r=!1)=>({getTitle:()=>e,getDueDate:()=>t,isCompleted:()=>r,getEffortLevel:()=>n,setTitle:t=>{e=t},setDueDate:e=>{t=e},toggleCompleted:()=>{r=!r},setEffortLevel:e=>{n=e}})},867:(e,t,n)=>{e.exports=n.p+"7c8d04cd831df3033c8a.ttf"},937:(e,t,n)=>{e.exports=n.p+"fc2b5060f7accec5cf74.ttf"},303:(e,t,n)=>{e.exports=n.p+"e42c176e3c87124b6be2.ttf"},143:(e,t,n)=>{e.exports=n.p+"a699ec33d3b46442674d.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),c=n.n(a),d=n(565),l=n.n(d),i=n(216),s=n.n(i),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=n(340),g=n(326),v=n(333),y=n(236);(()=>{let e=localStorage.getItem("projectList");null===e&&(e=(0,y.Z)(),(e=>{if(void 0===e.getProject(0)){let t=(0,v.Z)("General");e.addProject(t)}})(e),(0,g.vj)(e))})(),(0,h.su)()})()})();