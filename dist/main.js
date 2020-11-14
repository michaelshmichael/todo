(()=>{"use strict";var e={236:(e,t,a)=>{a.d(t,{W:()=>f,b:()=>k});class l{constructor(e,t){this.id=e,this.tasks=t,this.active=!1}}class o{constructor(e,t,a,l,o){this.id=e,this.dueDate=t,this.priority=a,this.checklist=!1,this.notes=o}}const n=()=>{let e=JSON.parse(localStorage.getItem("categoryCollection")),t=0;bottomLeftCategoryContainer.textContent="",e.forEach((e=>{let a=document.createElement("p");a.classList.add("newCategory"),a.textContent=e.id,bottomLeftCategoryContainer.appendChild(a),a.setAttribute("id",""+t),a.setAttribute("data-index",""+t);let l=document.createElement("i");l.setAttribute("class","fa fa-trash deleteCategoryIcon"),l.setAttribute("data-index",""+t),a.appendChild(l),t++})),t=0,f.setCategoryListeners()};let c;c=localStorage.getItem("categoryCollection")?JSON.parse(localStorage.getItem("categoryCollection")):[];const i=()=>{const e=document.querySelector(".categoryInputTableActive");let t=document.getElementById("categoryInputField"),a=t.value;if(""===a)alert("Please Enter a Value");else if(a){let t=new l(a,[]);c.push(t),e.classList.remove("categoryInputTableActive"),e.classList.add("categoryInputTable"),f.setCategoryListeners(),localStorage.setItem("categoryCollection",JSON.stringify(c))}t.value=""},r=e=>{let t=JSON.parse(localStorage.getItem("categoryCollection"));topRightContainer.textContent="";let a=e.target.id,l=document.createElement("h1");l.textContent=t[a].id,l.setAttribute("id","categoryHeading"),topRightContainer.appendChild(l)},s=()=>{let e=JSON.parse(localStorage.getItem("categoryCollection"));e.forEach((t=>{t.active&&(t.active=!1),localStorage.setItem("categoryCollection",JSON.stringify(e))}))},d=e=>{if(confirm("Delete Category?")){let t=JSON.parse(localStorage.getItem("categoryCollection"));document.querySelectorAll(".tasksDisplay .completedTasksDisplay").forEach((e=>e.remove()));const a=e.target.dataset.index;t.splice(a,1),localStorage.setItem("categoryCollection",JSON.stringify(t))}s(),f.setCategoryListeners()},m=()=>{let e=JSON.parse(localStorage.getItem("categoryCollection")),t=0;document.querySelectorAll(".tasksDisplay").forEach((e=>e.remove())),document.querySelectorAll(".completedTasksDisplay").forEach((e=>e.remove())),e.find((e=>!0===e.active)).tasks.forEach((e=>{let a=document.createElement("div");0==e.checklist?a.setAttribute("class","tasksDisplay"):a.setAttribute("class","completedTasksDisplay");let l=document.createElement("div");l.setAttribute("class","taskInfoContainer"),bottomRightContainer.appendChild(a);let o=document.createElement("div");1==e.priority?o.classList.add("highPriorityIndicator"):2==e.priority?o.classList.add("mediumPriorityIndicator"):3==e.priority&&o.classList.add("lowPriorityIndicator");let n=document.createElement("div");n.setAttribute("class","taskNameAndDueDateContainer");let c=document.createElement("div");c.setAttribute("class","taskName"),c.textContent=""+e.id;let i=document.createElement("div");i.setAttribute("class","dueDate"),i.textContent="Due: "+e.dueDate;let r=document.createElement("div");r.setAttribute("class","notesContainer");let s=document.createElement("div");s.setAttribute("class","notesHeading");let d=document.createElement("div");d.setAttribute("class","notesContent"),d.textContent=""+e.notes,a.appendChild(o),a.appendChild(l),l.appendChild(n),n.appendChild(c),n.appendChild(i),l.appendChild(r),r.appendChild(s),r.appendChild(d),s.textContent="Notes";let m=document.createElement("div");m.setAttribute("class","deleteEditAndCheckContainer"),l.appendChild(m);let u=document.createElement("i");u.setAttribute("class","fa fa-trash deleteTaskIcon"),u.setAttribute("data-index",""+t),m.appendChild(u);let g=document.createElement("i");g.setAttribute("class","fa fa-edit editTaskIcon"),g.setAttribute("data-index",""+t),m.appendChild(g);let y=document.createElement("i");y.setAttribute("class","fa fa-check-circle checkboxComplete"),y.setAttribute("data-index",""+t),m.appendChild(y),t++})),t=0,k()},u=e=>{let t=JSON.parse(localStorage.getItem("categoryCollection")),a=Array.from(document.getElementsByClassName("newCategory"));a.forEach((e=>{e.classList.remove("activeCategory")}));let l=e.target.id;a[l].classList.add("activeCategory"),t[l].active=!0,localStorage.setItem("categoryCollection",JSON.stringify(t)),m()},g=e=>{let t=JSON.parse(localStorage.getItem("categoryCollection")),a=e.target.dataset.index,l=t.find((e=>!0===e.active)).tasks[a];l.checklist?l.checklist=!1:l.checklist=!0,localStorage.setItem("categoryCollection",JSON.stringify(t)),m()},y=e=>{let t=JSON.parse(localStorage.getItem("categoryCollection")),a=t.find((e=>!0===e.active));if(confirm("Delete Task?")){const l=e.target.dataset.index;a.tasks.splice(l,1),localStorage.setItem("categoryCollection",JSON.stringify(t)),m()}},p=document.querySelector(".inputTable"),C=document.getElementById("inputTableContainer"),E=document.getElementById("taskTitleForm"),v=e=>{let t=JSON.parse(localStorage.getItem("categoryCollection")),a=t.find((e=>1==e.active));const l=document.getElementById("taskInputField").value;e.preventDefault(),void 0===a?alert("Please Select a Category"):""===l?alert("Please Enter a Value"):l&&(p.classList.remove("inputTable"),p.classList.add("inputTableActive"),C.setAttribute("id","inputTableContainerActive"),E.textContent="Details For "+l,console.log(t))},I=()=>{let e,t=JSON.parse(localStorage.getItem("categoryCollection")),a=t.find((e=>!0===e.active)),l=document.getElementById("taskInputField").value,n=document.getElementById("dueDate").value;document.getElementById("highPriority").checked?e=1:document.getElementById("mediumPriority").checked?e=2:document.getElementById("lowPriority").checked?e=3:alert("Please Select a Priority Level");let c=document.getElementById("notes").value,i=new o(l,n,e,!1,c);a.tasks.push(i),p.classList.remove("inputTableActive"),C.setAttribute("id","inputTableContainer"),localStorage.setItem("categoryCollection",JSON.stringify(t)),b(),m()},h=()=>{p.classList.remove("inputTableActive"),p.classList.add("inputTable"),C.setAttribute("id","inputTableContainer"),b()};function b(){let e=document.getElementById("taskInputField"),t=document.getElementById("dueDate"),a=document.getElementById("notes");e.value="",t.value="",a.value=""}const f=(()=>{const e=()=>{const e=document.getElementById("addCategoryButton"),t=document.querySelector(".categoryInputTable"),a=document.getElementById("categoryInputField"),l=document.getElementById("submitCategory"),o=document.getElementById("cancelCategoryInput");Array.from(document.getElementsByClassName("newCategory")).forEach((e=>{e.addEventListener("click",r),e.addEventListener("click",s),e.addEventListener("click",u)})),Array.from(document.getElementsByClassName("deleteCategoryIcon")).forEach((e=>{e.addEventListener("click",d),e.addEventListener("click",n)})),e.addEventListener("click",(()=>{t.classList.remove("categoryInputTable"),t.classList.add("categoryInputTableActive")})),l.addEventListener("click",i),l.addEventListener("click",n),o.addEventListener("click",(()=>{t.classList.remove("categoryInputTableActive"),t.classList.add("categoryInputTable"),a.value=""}))};return s(),e(),{setCategoryListeners:e}})(),k=()=>{const e=document.getElementById("addTaskButton"),t=document.getElementById("submitButton"),a=document.getElementById("cancelButton");document.getElementById("importanceButton"),document.getElementById("dateButton"),e.addEventListener("click",v),t.addEventListener("click",I),a.addEventListener("click",h),Array.from(document.getElementsByClassName("deleteTaskIcon")).forEach((e=>{e.addEventListener("click",y)})),Array.from(document.getElementsByClassName("checkboxComplete")).forEach((e=>{e.addEventListener("click",g)}))};k(),n()}},t={};function a(l){if(t[l])return t[l].exports;var o=t[l]={exports:{}};return e[l](o,o.exports,a),o.exports}a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a(236)})();