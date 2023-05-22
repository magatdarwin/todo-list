(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),a=n.n(o),r=n(645),d=n.n(r)()(a());d.push([e.id,"* {\n  border: 1px dashed gray;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-auto-rows: 100px; \n}\n\nheader {\n  grid-column: 1 / -1;\n  text-align: center;\n}\n\nnav {\n  padding: 20px;\n}\n\nnav > ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n}\n\n.list-controls button {\n  cursor: pointer;\n}\n\n#task-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto; \n  background-color: rgb(0,0,0); \n  background-color: rgba(0,0,0,0.4);\n}\n\n#task-form {\n  background-color: white;\n  border-radius: 20px;\n  padding: 20px;\n  margin: 15% 35%;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.input-group {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  width: 250px;\n}",""]);const c=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(d[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&d[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},d=[],c=0;c<e.length;c++){var i=e[c],l=o.base?i[0]+o.base:i[0],s=r[l]||0,p="".concat(l," ").concat(s);r[l]=s+1;var u=n(p),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=a(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}d.push(p)}return d}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var d=0;d<r.length;d++){var c=n(r[d]);t[c].references--}for(var i=o(e,a),l=0;l<r.length;l++){var s=n(r[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),r=n(569),d=n.n(r),c=n(565),i=n.n(c),l=n(216),s=n.n(l),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=i(),f.insert=d().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=()=>{document.querySelector("#task-modal").style.display="block"},v=e=>{document.querySelector("#task-modal").style.display="none",document.querySelector("#task-form").reset()};(()=>{const e=document.querySelector("body");(e=>{const t=document.createElement("header"),n=document.createElement("h1");n.innerText="To-Do List",t.appendChild(n),e.appendChild(t)})(e),(e=>{const t=document.createElement("nav"),n=document.createElement("ul");n.classList.add("todo-lists");const o=document.createElement("li");o.innerText="Home",n.appendChild(o);const a=document.createElement("li");a.innerText="Projects",n.appendChild(a);const r=document.createElement("ul");r.classList.add("projects-list"),n.appendChild(r),t.appendChild(n),e.appendChild(t)})(e),(e=>{const t=document.createElement("main"),n=document.createElement("div");n.classList.add("list-container");const o=document.createElement("div");o.classList.add("list-controls");const a=document.createElement("button");a.id="add-todo",a.textContent="New Task",a.addEventListener("click",h),o.appendChild(a),t.appendChild(n),t.appendChild(o),e.appendChild(t)})(e),(e=>{const t=document.createElement("div");t.id="task-modal";const n=document.createElement("form");n.id="task-form";const o=document.createElement("div");o.classList.add("input-group");const a=document.createElement("label");a.textContent="Title",a.htmlFor="title";const r=document.createElement("input");r.type="text",r.id="title",r.placeholder="Title",o.appendChild(a),o.appendChild(r);const d=document.createElement("div");d.classList.add("input-group");const c=document.createElement("label");c.textContent="Due Date",c.htmlFor="due-date";const i=document.createElement("input");i.type="date",i.id="due-date",i.placeholder="Due Date",d.appendChild(c),d.appendChild(i);const l=document.createElement("div");l.classList.add("input-group");const s=document.createElement("label");s.textContent="Effort",s.htmlFor="effort-level";const p=document.createElement("select");p.id="effort-level";const u=document.createElement("option");u.value="",u.textContent="Please choose an effort level",u.selected=!0,u.disabled=!0;const m=document.createElement("option");m.value="1",m.textContent="Easy";const f=document.createElement("option");f.value="2",f.textContent="Medium";const h=document.createElement("option");h.value="3",h.textContent="Hard",p.appendChild(u),p.appendChild(m),p.appendChild(f),p.appendChild(h),l.appendChild(s),l.appendChild(p);const y=document.createElement("div");y.classList.add("control-group");const C=document.createElement("input");C.type="submit",C.textContent="Submit",C.id="submit-new-task",y.appendChild(C);const g=document.createElement("input");g.type="button",g.value="Cancel",g.id="cancel-new-task",g.addEventListener("click",v),y.appendChild(g),n.appendChild(o),n.appendChild(d),n.appendChild(l),n.appendChild(y),t.appendChild(n),e.appendChild(t)})(e)})()})()})();