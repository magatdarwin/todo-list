(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),a=n.n(o),r=n(645),d=n.n(r)()(a());d.push([e.id,'* {\n  border: 1px dashed gray;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr 10fr;\n  grid-auto-rows: 100px;\n}\n\nheader {\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n  text-align: center;\n}\n\nnav {\n  padding: 20px;\n  grid-column: 1 / 2;\n  grid-row: 2 / -1;\n}\n\nnav > ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\nmain {\n  grid-column: 2 / -1;\n  grid-row: 2 / -1;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  gap: 10px;\n}\n\nbutton, input[type="button"] {\n  cursor: pointer;\n}\n\n#task-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto; \n  background-color: rgb(0,0,0); \n  background-color: rgba(0,0,0,0.4);\n}\n\n#task-form, #project-form {\n  display: none;\n  background-color: white;\n  border-radius: 20px;\n  padding: 20px;\n  margin: 15% 35%;\n  padding: 40px;\n  /* display: flex; */\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.input-group {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  width: 250px;\n}\n\n.list-header {\n  margin: 0;\n}\n\n.list-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.task-container {\n  display: flex;\n  /* padding: 10px; */\n  gap: 5px;\n}\n\n.task-container > .effort-level {\n  color: black;\n}\n\n.completed {\n  background-color: rgb(151, 202, 151);\n}\n\n.projects {\n  display: flex;\n  justify-content: space-between;\n}\n\n.project-list {\n  list-style: none;\n  padding-left: 20px;\n}\n\n#current-project {\n  background-color: rgb(151, 202, 151);\n}',""]);const c=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(d[l]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);o&&d[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},d=[],c=0;c<e.length;c++){var l=e[c],i=o.base?l[0]+o.base:l[0],s=r[i]||0,p="".concat(i," ").concat(s);r[i]=s+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=a(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}d.push(p)}return d}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var d=0;d<r.length;d++){var c=n(r[d]);t[c].references--}for(var l=o(e,a),i=0;i<r.length;i++){var s=n(r[i]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},340:(e,t,n)=>{n.d(t,{U1:()=>i,su:()=>p});var o=n(326);const a=()=>{document.querySelector("#task-modal").style.display="block",document.querySelector("#task-form").style.display="flex"},r=()=>{document.querySelector("#task-modal").style.display="none";const e=document.querySelector("#task-form");e.style.display="none",e.reset()},d=()=>{document.querySelector("#task-modal").style.display="block",document.querySelector("#project-form").style.display="flex"},c=()=>{document.querySelector("#task-modal").style.display="none";const e=document.querySelector("#project-form");e.style.display="none",e.reset()},l=e=>{const t=e.target.classList.contains("edit-task"),n=e.target.parentElement,o=document.querySelectorAll(".task-container");for(let e of o)e!==n&&(e.querySelector(".edit-task").disabled=!0,e.querySelector(".delete-task").disabled=!0);n.querySelector(".task-title").readOnly=!t,n.querySelector(".effort-level").disabled=!t,n.querySelector(".due-date").readOnly=!t,n.querySelector(".save-changes").hidden=!t,n.querySelector(".cancel-changes").hidden=!t,n.querySelector(".edit-task").hidden=t,n.querySelector(".delete-task").hidden=t,t||i()},i=()=>{const e=localStorage.getItem("activeProject");document.querySelector("#list-title").innerText=e;const t=document.querySelector(".list-container");for(;t.firstChild;)t.removeChild(t.firstChild);const n=document.querySelector(".completed-container");for(;n.firstChild;)n.removeChild(n.firstChild);let a=(0,o.eB)().getProject(e).getTasks(),r=0;for(let e in a){const d=a[e],c=d.getTitle(),i=document.createElement("div");i.classList.add("task-container"),i.dataset.taskIndex=e;const s=document.createElement("input");s.type="checkbox",s.classList.add("is-completed");const p=d.isCompleted();s.checked=p,s.addEventListener("click",o.Jo);const u=document.createElement("input");u.type="text",u.readOnly=!0,u.classList.add("task-title"),u.value=c;const m=document.createElement("select");m.classList.add("effort-level");const f=document.createElement("option");f.value="1",f.textContent="Easy";const h=document.createElement("option");h.value="2",h.textContent="Medium";const v=document.createElement("option");v.value="3",v.textContent="Hard",m.appendChild(f),m.appendChild(h),m.appendChild(v),m.value=d.getEffortLevel(),m.disabled=!0;const g=document.createElement("input");g.classList.add("due-date"),g.type="date",g.value=d.getDueDate(),g.readOnly=!0;const y=document.createElement("input");y.type="button",y.classList.add("edit-task"),y.value="Edit",y.addEventListener("click",l);const C=document.createElement("input");C.type="button",C.classList.add("save-changes"),C.value="Save Changes",C.addEventListener("click",o.eT),C.hidden=!0;const E=document.createElement("input");E.type="button",E.classList.add("delete-task"),E.value="Delete",E.addEventListener("click",o._5);const k=document.createElement("input");k.type="button",k.classList.add("cancel-changes"),k.value="Cancel",k.addEventListener("click",l),k.hidden=!0,i.appendChild(s),i.appendChild(u),i.appendChild(m),i.appendChild(g),i.appendChild(y),i.appendChild(C),i.appendChild(E),i.appendChild(k),p?(n.appendChild(i),r++):t.appendChild(i)}document.querySelector("#completed-title").innerText=r>0?"Completed Tasks":""},s=()=>{const e=document.querySelector(".project-list");for(;e.firstChild;)e.removeChild(e.firstChild);let t=(0,o.eB)().getProjectList();t.splice(0,1);for(let n of t){const t=document.createElement("li"),a=document.createElement("button"),r=n.getName();a.innerText=r,a.classList.add("project"),a.dataset.projectName=r,a.addEventListener("click",(()=>{(0,o.bP)(r),i()})),t.appendChild(a),e.appendChild(t)}},p=()=>{const e=document.querySelector("body");(e=>{const t=document.createElement("header"),n=document.createElement("h1");n.innerText="To-Do List",t.appendChild(n),e.appendChild(t)})(e),(e=>{const t=document.createElement("nav"),n=document.createElement("ul");n.classList.add("todo-lists");const a=document.createElement("li"),r=document.createElement("button");r.innerText="General",r.classList.add("project"),r.dataset.projectName="General",r.addEventListener("click",(()=>{(0,o.bP)("General"),i()})),r.id="current-project",a.appendChild(r),n.appendChild(a);const c=document.createElement("li"),l=document.createElement("div");l.classList.add("projects"),l.innerText="Projects";const p=document.createElement("button");p.textContent="+",p.id="new-project",p.addEventListener("click",d),l.appendChild(p),c.appendChild(l),n.appendChild(c);const u=document.createElement("ul");u.classList.add("project-list"),n.appendChild(u),t.appendChild(n),e.appendChild(t),s()})(e),(e=>{const t=document.createElement("main"),n=document.createElement("h2");n.id="list-title",n.classList.add("list-header");const o=document.createElement("div");o.classList.add("list-container");const r=document.createElement("div");r.classList.add("list-controls");const d=document.createElement("button");d.id="add-todo",d.textContent="New Task",d.addEventListener("click",a),r.appendChild(d);const c=document.createElement("h3");c.id="completed-title",c.classList.add("list-header");const l=document.createElement("div");l.classList.add("completed-container"),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(c),t.appendChild(l),e.appendChild(t)})(e),(e=>{const t=document.createElement("div");t.id="task-modal";const n=document.createElement("form");n.id="task-form";const a=document.createElement("div");a.classList.add("input-group");const d=document.createElement("label");d.textContent="Title",d.htmlFor="title";const c=document.createElement("input");c.type="text",c.id="title",c.placeholder="Title",a.appendChild(d),a.appendChild(c);const l=document.createElement("div");l.classList.add("input-group");const s=document.createElement("label");s.textContent="Due Date",s.htmlFor="due-date";const p=document.createElement("input");p.type="date",p.id="due-date",p.placeholder="Due Date",l.appendChild(s),l.appendChild(p);const u=document.createElement("div");u.classList.add("input-group");const m=document.createElement("label");m.textContent="Effort",m.htmlFor="effort-level";const f=document.createElement("select");f.id="effort-level";const h=document.createElement("option");h.value="",h.textContent="Please choose an effort level",h.selected=!0,h.disabled=!0;const v=document.createElement("option");v.value="1",v.textContent="Easy";const g=document.createElement("option");g.value="2",g.textContent="Medium";const y=document.createElement("option");y.value="3",y.textContent="Hard",f.appendChild(h),f.appendChild(v),f.appendChild(g),f.appendChild(y),u.appendChild(m),u.appendChild(f);const C=document.createElement("div");C.classList.add("control-group");const E=document.createElement("input");E.type="submit",E.value="Add Task",E.id="submit-new-task",E.addEventListener("click",(e=>{(0,o.gI)(e),r(),i()})),C.appendChild(E);const k=document.createElement("input");k.type="button",k.value="Cancel",k.id="cancel-new-task",k.addEventListener("click",r),C.appendChild(k),n.appendChild(a),n.appendChild(l),n.appendChild(u),n.appendChild(C),t.appendChild(n),e.appendChild(t)})(e),(e=>{const t=document.querySelector("#task-modal"),n=document.createElement("form");n.id="project-form";const a=document.createElement("div");a.classList.add("input-group");const r=document.createElement("label");r.textContent="Name",r.htmlFor="project-name";const d=document.createElement("input");d.type="text",d.id="project-name",d.placeholder="Project Name",a.appendChild(r),a.appendChild(d);const l=document.createElement("div");l.classList.add("control-group");const i=document.createElement("input");i.type="submit",i.value="Add Project",i.id="add-new-project",i.addEventListener("click",(e=>{(0,o.B)(e),c(),s()})),l.appendChild(i);const p=document.createElement("input");p.type="button",p.value="Cancel",p.id="cancel-new-project",p.addEventListener("click",c),l.appendChild(p),n.appendChild(a),n.appendChild(l),t.appendChild(n)})(),(0,o.bP)("General"),i()}},333:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(e,t=[])=>({getName:()=>e,getTask:e=>t[e],getTaskByName:e=>t[t.indexOf(e)],getTasks:()=>t,addTask:e=>{t.push(e)},deleteTask:e=>{t.splice(e,1)}})},236:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(e=[])=>({addProject:t=>{e.push(t)},getProject:t=>{const n=e.map((e=>e.getName())).indexOf(t);return e[n]},getProjectList:()=>{let t=[];for(let n of e)t.push(n);return t},getProjectNames:()=>{let t=[];for(let n of e)t.push(n.getName());return t},removeProject:t=>{e.splice(t,1)}})},326:(e,t,n)=>{n.d(t,{B:()=>v,Jo:()=>h,_5:()=>f,bP:()=>g,eB:()=>p,eT:()=>m,gI:()=>u,vj:()=>s});var o=n(997),a=n(333),r=n(236),d=n(340);const c=e=>({title:e.getTitle(),dueDate:e.getDueDate(),effortLevel:e.getEffortLevel(),completed:e.isCompleted()}),l=e=>{let t=[];for(let n of e.getTasks())t.push(c(n));return{name:e.getName(),tasks:t}},i=e=>{let t=(0,a.Z)(e.name);for(let a of e.tasks)t.addTask((n=a,(0,o.Z)(n.title,n.dueDate,n.effortLevel,n.completed)));var n;return t},s=e=>{localStorage.setItem("projectList",JSON.stringify((e=>{let t={};for(let n of e.getProjectList())t[n.getName()]=l(n);return{projects:t}})(e)))},p=()=>(e=>{let t,n=(0,r.Z)();for(let o in e.projects)t=i(e.projects[o]),n.addProject(t);return n})(JSON.parse(localStorage.getItem("projectList"))),u=e=>{e.preventDefault();const t=localStorage.getItem("activeProject"),n=document.querySelector("#title").value,a=document.querySelector("#due-date").value,r=document.querySelector("#effort-level").value,d=(0,o.Z)(n,a,r),c=p();c.getProject(t).addTask(d),s(c),document.querySelector("#task-form").reset()},m=e=>{const t=e.target.parentElement,n=t.dataset.taskIndex,o=t.querySelector(".edit-task"),a=t.querySelector(".task-title").value,r=t.querySelector(".effort-level").value,c=t.querySelector(".due-date").value,l=localStorage.getItem("activeProject");let i=p(),u=i.getProject(l).getTask(n);u.setTitle(a),u.setEffortLevel(r),u.setDueDate(c),s(i),t.querySelector(".save-changes").hidden=!1,o.hidden=!1,e.target.hidden=!0,(0,d.U1)()},f=e=>{const t=e.target.parentElement.dataset.taskIndex;let n=p();const o=localStorage.getItem("activeProject");n.getProject(o).deleteTask(t),s(n),(0,d.U1)()},h=e=>{const t=e.target.parentElement.dataset.taskIndex;let n=p();const o=localStorage.getItem("activeProject");n.getProject(o).getTask(t).toggleCompleted(),s(n),(0,d.U1)()},v=e=>{e.preventDefault();const t=document.querySelector("#project-name").value,n=p();if(n.getProjectNames().includes(t))alert(`${t} already exists. Please enter a unique project name.`);else{const e=(0,a.Z)(t);n.addProject(e),s(n),document.querySelector("#project-form").reset()}},g=e=>{p().getProjectNames().includes(e)&&(localStorage.setItem("activeProject",e),document.querySelector("#current-project").removeAttribute("id"),document.querySelector(`[data-project-name="${e}"]`).id="current-project")}},997:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(e,t,n,o=!1)=>({getTitle:()=>e,getDueDate:()=>t,isCompleted:()=>o,getEffortLevel:()=>n,setTitle:t=>{e=t},setDueDate:e=>{t=e},toggleCompleted:()=>{o=!o},setEffortLevel:e=>{n=e}})}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),r=n(569),d=n.n(r),c=n(565),l=n.n(c),i=n(216),s=n.n(i),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=d().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=n(340),v=n(326),g=n(333),y=n(236);(()=>{let e=localStorage.getItem("projectList");null===e&&(e=(0,y.Z)(),(e=>{if(void 0===e.getProject(0)){let t=(0,g.Z)("General");e.addProject(t)}})(e),(0,v.vj)(e))})(),(0,h.su)()})()})();