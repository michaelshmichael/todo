(()=>{let e;e=localStorage.getItem("categoryCollection")?JSON.parse(localStorage.getItem("categoryCollection")):[],localStorage.setItem("categoryCollection",JSON.stringify(e)),JSON.parse(localStorage.getItem("categoryCollection"));const t=(()=>{class t{constructor(e,t){this.id=e,this.tasks=t,this.active=!1}}function n(){const e=document.getElementById("addCategoryButton"),t=document.querySelector(".categoryInputTable"),a=document.getElementById("categoryInputField"),n=document.getElementById("submitCategory"),c=document.getElementById("cancelCategoryInput");let r=Array.from(document.getElementsByClassName("newCategory")),d=Array.from(document.getElementsByClassName("deleteCategoryIcon"));r.forEach((e=>{e.addEventListener("click",o),e.addEventListener("click",l)})),d.forEach((e=>{e.addEventListener("click",s)})),e.addEventListener("click",(()=>{t.classList.remove("categoryInputTable"),t.classList.add("categoryInputTableActive")})),n.addEventListener("click",i),c.addEventListener("click",(()=>{t.classList.remove("categoryInputTableActive"),t.classList.add("categoryInputTable"),a.value=""}))}function i(){const a=document.querySelector(".categoryInputTableActive");let i=document.getElementById("categoryInputField").value;if(""===i)alert("Please Enter a Value");else if(i){let o=new t(i,[]);e.push(o),a.classList.remove("categoryInputTableActive"),a.classList.add("categoryInputTable"),c(),n(),localStorage.setItem("categoryCollection",JSON.stringify(e))}r()}function o(t){topRightContainer.textContent="";let a=t.target.id,n=document.createElement("h1");n.textContent=e[a].id,n.setAttribute("id","categoryHeading"),topRightContainer.appendChild(n)}function c(){let t=0;bottomLeftCategoryContainer.textContent="",e.forEach((e=>{let a=document.createElement("p");a.classList.add("newCategory"),a.textContent=e.id,bottomLeftCategoryContainer.appendChild(a),a.setAttribute("id",""+t),a.setAttribute("data-index",""+t);let n=document.createElement("i");n.setAttribute("class","fa fa-trash deleteCategoryIcon"),n.setAttribute("data-index",""+t),a.appendChild(n),t++})),t=0,n()}function l(t){let n=Array.from(document.getElementsByClassName("newCategory"));n.forEach((e=>{e.classList.remove("activeCategory")}));let i=t.target.id;n[i].classList.add("activeCategory"),r(),e[i].active=!0,localStorage.setItem("categoryCollection",JSON.stringify(e)),a.renderTasks()}function r(){e.forEach((e=>{e.active=!1}))}function s(t){if(confirm("Delete Category?")){document.querySelectorAll(".tasksDisplay .completedTasksDisplay").forEach((e=>e.remove()));const n=t.target.dataset.index;e.splice(n,1),localStorage.setItem("categoryCollection",JSON.stringify(e)),c(),a.renderTasks()}}return n(),c(),r(),{identifyActiveCategory:function(){return e.find((e=>!0===e.active))}}})(),a=(()=>{const a=document.getElementById("addTaskButton"),n=document.getElementById("submitButton"),i=document.getElementById("cancelButton"),o=document.querySelector(".inputTable"),c=document.getElementById("inputTableContainer"),l=document.getElementById("importanceButton"),r=document.getElementById("dateButton");class s{constructor(e,t,a,n,i){this.id=e,this.dueDate=t,this.priority=a,this.checklist=!1,this.notes=i}}function d(){a.addEventListener("click",u),n.addEventListener("click",m),Array.from(document.getElementsByClassName("deleteTaskIcon")).forEach((e=>{e.addEventListener("click",f)})),i.addEventListener("click",(()=>{o.classList.remove("inputTableActive"),o.classList.add("inputTable"),c.setAttribute("id","inputTableContainer")})),l.addEventListener("click",p),r.addEventListener("click",C),Array.from(document.getElementsByClassName("checkboxComplete")).forEach((e=>{e.addEventListener("click",g)}))}function u(e){const a=document.getElementById("taskInputField").value;if(e.preventDefault(),void 0===t.identifyActiveCategory())alert("Please Select a Category");else if(""===a)alert("Please Enter a Value");else if(a){let e=document.getElementById("taskTitleForm");o.classList.remove("inputTable"),o.classList.add("inputTableActive"),c.setAttribute("id","inputTableContainerActive"),e.textContent="Details For "+a}}function m(){let a,n=document.getElementById("taskInputField").value,i=document.getElementById("dueDate").value;document.getElementById("highPriority").checked?a=1:document.getElementById("mediumPriority").checked?a=2:document.getElementById("lowPriority").checked?a=3:(alert("Please Select a Priority Level"),m());let l=document.getElementById("notes").value;var r;r=new s(n,i,a,!1,l),t.identifyActiveCategory().tasks.push(r),o.classList.remove("inputTableActive"),c.setAttribute("id","inputTableContainer"),localStorage.setItem("categoryCollection",JSON.stringify(e)),y()}function y(){let t=0;document.querySelectorAll(".tasksDisplay").forEach((e=>e.remove())),document.querySelectorAll(".completedTasksDisplay").forEach((e=>e.remove())),e.find((e=>!0===e.active)).tasks.forEach((e=>{let a=document.createElement("div");0==e.checklist?a.setAttribute("class","tasksDisplay"):a.setAttribute("class","completedTasksDisplay");let n=document.createElement("div");n.setAttribute("class","taskInfoContainer"),bottomRightContainer.appendChild(a);let i=document.createElement("div");1==e.priority?i.classList.add("highPriorityIndicator"):2==e.priority?i.classList.add("mediumPriorityIndicator"):3==e.priority&&i.classList.add("lowPriorityIndicator");let o=document.createElement("div");o.setAttribute("class","taskNameAndDueDateContainer");let c=document.createElement("div");c.setAttribute("class","taskName"),c.textContent=""+e.id;let l=document.createElement("div");l.setAttribute("class","dueDate"),l.textContent="Due: "+e.dueDate;let r=document.createElement("div");r.setAttribute("class","notesContainer");let s=document.createElement("div");s.setAttribute("class","notesHeading");let d=document.createElement("div");d.setAttribute("class","notesContent"),d.textContent=""+e.notes,a.appendChild(i),a.appendChild(n),n.appendChild(o),o.appendChild(c),o.appendChild(l),n.appendChild(r),r.appendChild(s),r.appendChild(d),s.textContent="Notes";let u=document.createElement("div");u.setAttribute("class","deleteEditAndCheckContainer"),n.appendChild(u);let m=document.createElement("i");m.setAttribute("class","fa fa-trash deleteTaskIcon"),m.setAttribute("data-index",""+t),u.appendChild(m);let y=document.createElement("i");y.setAttribute("class","fa fa-edit editTaskIcon"),y.setAttribute("data-index",""+t),u.appendChild(y);let g=document.createElement("i");g.setAttribute("class","fa fa-check-circle checkboxComplete"),g.setAttribute("data-index",""+t),u.appendChild(g),t++})),t=0,d()}function g(t){let a=t.target.dataset.index,n=e.find((e=>!0===e.active)).tasks[a];n.checklist?n.checklist=!1:n.checklist=!0,localStorage.setItem("categoryCollection",JSON.stringify(e)),y()}function p(){console.log("order by importance"),e.find((e=>!0===e.active)).tasks.sort((function(e,t){return e.priority>t.priority?1:e.priority<t.priority?-1:0})),localStorage.setItem("categoryCollection",JSON.stringify(e)),y()}function C(){console.log("order by date"),e.find((e=>!0===e.active)).tasks.sort((function(e,t){return e.dueDate>t.dueDate?1:e.dueDate<t.dueDate?-1:0})),localStorage.setItem("categoryCollection",JSON.stringify(e)),y()}function f(t){if(confirm("Delete Task?")){const a=e.find((e=>!0===e.active)),n=t.target.dataset.index;a.tasks.splice(n,1),localStorage.setItem("categoryCollection",JSON.stringify(e)),y()}}return d(),{renderTasks:y}})()})();