(()=>{let t;t=localStorage.getItem("categoryCollection")?JSON.parse(localStorage.getItem("categoryCollection")):[],localStorage.setItem("categoryCollection",JSON.stringify(t)),JSON.parse(localStorage.getItem("categoryCollection"));let e=!0;const n=(()=>{class n{constructor(t,e){this.id=t,this.tasks=e,this.active=!1}}function a(){const t=document.getElementById("addCategoryButton");let e=Array.from(document.getElementsByClassName("newCategory")),n=Array.from(document.getElementsByClassName("deleteCategoryIcon"));e.forEach((t=>{t.addEventListener("click",r),t.addEventListener("click",l)})),n.forEach((t=>{t.addEventListener("click",d)})),t.addEventListener("click",o)}function o(){let e=prompt("Write the name of your category");if(""===e)alert("Please Enter a Value");else if(e){let i=new n(e,[]);t.push(i),c(),a(),localStorage.setItem("categoryCollection",JSON.stringify(t))}s()}function r(e){topRightContainer.textContent="";let n=e.target.id,i=document.createElement("h1");i.textContent=t[n].id,i.setAttribute("id","categoryHeading"),topRightContainer.appendChild(i)}function c(){let e=0;bottomLeftCategoryContainer.textContent="",t.forEach((t=>{let n=document.createElement("p");n.classList.add("newCategory"),n.textContent=t.id,bottomLeftCategoryContainer.appendChild(n),n.setAttribute("id",""+e),n.setAttribute("data-index",""+e);let i=document.createElement("i");i.setAttribute("class","fa fa-trash deleteCategoryIcon"),i.setAttribute("data-index",""+e),n.appendChild(i),e++})),e=0,a()}function l(n){let a=Array.from(document.getElementsByClassName("newCategory"));a.forEach((t=>{t.classList.remove("activeCategory")}));let o=n.target.id;a[o].classList.add("activeCategory"),s(),t[o].active=!0,localStorage.setItem("categoryCollection",JSON.stringify(t)),e=!0,i.renderTasks()}function s(){t.forEach((t=>{t.active=!1}))}function d(e){if(1==confirm("Delete Category?")){document.querySelectorAll(".tasksDisplay").forEach((t=>t.remove()));const n=e.target.dataset.index;t.splice(n,1),localStorage.setItem("categoryCollection",JSON.stringify(t)),c()}}return a(),c(),{identifyActiveCategory:function(){return t.find((t=>!0===t.active))}}})(),i=(()=>{const i=document.getElementById("addTaskButton"),a=document.getElementById("submitButton"),o=document.getElementById("cancelButton"),r=document.querySelector(".inputTable"),c=document.getElementById("inputTableContainer"),l=document.getElementById("importanceButton"),s=document.getElementById("dateButton");class d{constructor(t,e,n,i,a){this.id=t,this.dueDate=e,this.priority=n,this.checklist=!1,this.notes=a}}function u(){i.addEventListener("click",m),a.addEventListener("click",y),Array.from(document.getElementsByClassName("deleteTaskIcon")).forEach((t=>{t.addEventListener("click",p)})),o.addEventListener("click",(()=>{r.classList.remove("inputTableActive"),r.classList.add("inputTable"),c.setAttribute("id","inputTableContainer")})),1==e&&(l.addEventListener("click",C),s.addEventListener("click",f))}function m(t){const e=document.getElementById("taskInputField").value;if(t.preventDefault(),void 0===n.identifyActiveCategory())alert("Please Select a Category");else if(""===e)alert("Please Enter a Value");else if(e){let t=document.getElementById("taskTitleForm");r.classList.remove("inputTable"),r.classList.add("inputTableActive"),c.setAttribute("id","inputTableContainerActive"),t.textContent="Details For "+e}}function y(){let e,i=document.getElementById("taskInputField").value,a=document.getElementById("dueDate").value;document.getElementById("highPriority").checked?e=1:document.getElementById("mediumPriority").checked?e=2:document.getElementById("lowPriority").checked&&(e=3);let o=document.getElementById("notes").value;var l;l=new d(i,a,e,!1,o),n.identifyActiveCategory().tasks.push(l),r.classList.remove("inputTableActive"),c.setAttribute("id","inputTableContainer"),localStorage.setItem("categoryCollection",JSON.stringify(t)),g()}function g(){let e=0;document.querySelectorAll(".tasksDisplay").forEach((t=>t.remove())),t.find((t=>!0===t.active)).tasks.forEach((t=>{let n=document.createElement("div");n.setAttribute("class","tasksDisplay");let i=document.createElement("div");i.setAttribute("class","taskInfoContainer"),bottomRightContainer.appendChild(n);let a=document.createElement("div");1==t.priority?a.classList.add("highPriorityIndicator"):2==t.priority?a.classList.add("mediumPriorityIndicator"):3==t.priority&&a.classList.add("lowPriorityIndicator");let o=document.createElement("div");o.setAttribute("class","taskNameAndDueDateContainer");let r=document.createElement("div");r.setAttribute("class","taskName"),r.textContent=""+t.id;let c=document.createElement("div");c.setAttribute("class","dueDate"),c.textContent="Due: "+t.dueDate;let l=document.createElement("div");l.setAttribute("class","notesContainer");let s=document.createElement("div");s.setAttribute("class","notesHeading");let d=document.createElement("div");d.setAttribute("class","notesContent"),d.textContent=""+t.notes,n.appendChild(a),n.appendChild(i),i.appendChild(o),o.appendChild(r),o.appendChild(c),i.appendChild(l),l.appendChild(s),l.appendChild(d),s.textContent="Notes";let u=document.createElement("i");u.setAttribute("class","fa fa-trash deleteTaskIcon"),u.setAttribute("data-index",""+e),n.appendChild(u),e++})),e=0,u()}function C(){console.log("order by importance"),t.find((t=>!0===t.active)).tasks.sort((function(t,e){return t.priority>e.priority?1:t.priority<e.priority?-1:0})),e=!1,l.removeEventListener("click",C),localStorage.setItem("categoryCollection",JSON.stringify(t)),g()}function f(){console.log("order by date"),t.find((t=>!0===t.active)).tasks.sort((function(t,e){return t.dueDate>e.dueDate?1:t.dueDate<e.dueDate?-1:0})),e=!1,s.removeEventListener("click",f),localStorage.setItem("categoryCollection",JSON.stringify(t)),g()}function p(e){if(1==confirm("Delete Task?")){const n=t.find((t=>!0===t.active)),i=e.target.dataset.index;n.tasks.splice(i,1),localStorage.setItem("categoryCollection",JSON.stringify(t)),g()}}return u(),{renderTasks:g}})()})();