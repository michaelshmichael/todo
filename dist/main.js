(()=>{"use strict";var e={732:(e,t,a)=>{a.d(t,{c:()=>ie,b:()=>oe});const n=()=>{let e=JSON.parse(localStorage.getItem("categoryCollection")),t=0;bottomLeftCategoryContainer.textContent="",e.forEach((e=>{let a=document.createElement("p");a.classList.add("newCategory"),a.textContent=e.id,bottomLeftCategoryContainer.appendChild(a),a.setAttribute("id",""+t),a.setAttribute("data-index",""+t);let n=document.createElement("i");n.setAttribute("class","fa fa-trash deleteCategoryIcon"),n.setAttribute("data-index",""+t),a.appendChild(n),t++})),t=0,ie()},r=e=>{let t=JSON.parse(localStorage.getItem("categoryCollection"));topRightContainer.textContent="";let a=e.target.id,n=document.createElement("h1");n.textContent=t[a].id,n.setAttribute("id","categoryHeading"),topRightContainer.appendChild(n)};class i{constructor(e,t){this.id=e,this.tasks=t,this.active=!1}}class o{constructor(e,t,a,n,r){this.id=e,this.dueDate=t,this.priority=a,this.checklist=!1,this.notes=r}}const l=()=>{let e=JSON.parse(localStorage.getItem("categoryCollection"));e.forEach((t=>{t.active&&(t.active=!1),localStorage.setItem("categoryCollection",JSON.stringify(e))}))},s=()=>{let e;e=localStorage.getItem("categoryCollection")?JSON.parse(localStorage.getItem("categoryCollection")):[];const t=document.querySelector(".categoryInputTableActive");let a=document.getElementById("categoryInputField"),n=a.value;if(n){let a=new i(n,[]);e.push(a),t.classList.remove("categoryInputTableActive"),t.classList.add("categoryInputTable"),ie(),localStorage.setItem("categoryCollection",JSON.stringify(e))}else alert("Please Enter a Value");l(),a.value=""};function c(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function u(e){c(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(e,t){c(2,arguments);var a=u(e),n=u(t),r=a.getTime()-n.getTime();return r<0?-1:r>0?1:r}function m(e,t){c(2,arguments);var a=u(e),n=u(t),r=a.getFullYear()-n.getFullYear(),i=a.getMonth()-n.getMonth();return 12*r+i}function g(e,t){c(2,arguments);var a=u(e),n=u(t),r=d(a,n),i=Math.abs(m(a,n));a.setMonth(a.getMonth()-r*i);var o=d(a,n)===-r,l=r*(i-o);return 0===l?0:l}function h(e,t){c(2,arguments);var a=u(e),n=u(t);return a.getTime()-n.getTime()}function f(e,t){c(2,arguments);var a=h(e,t)/1e3;return a>0?Math.floor(a):Math.ceil(a)}var y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function v(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var p,b={date:v({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:v({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:v({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},C={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function w(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;n=e.formattingValues[o]||e.formattingValues[i]}else{var l=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;n=e.values[s]||e.values[l]}return n[e.argumentCallback?e.argumentCallback(t):t]}}function S(e){return function(t,a){var n=String(t),r=a||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],l=n.match(o);if(!l)return null;var s,c=l[0],u=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(u)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(c))return a}(u):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(c))return a}(u),s=e.valueCallback?e.valueCallback(s):s,{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(c.length)}}}const D={code:"en-US",formatDistance:function(e,t,a){var n;return a=a||{},n="string"==typeof y[e]?y[e]:1===t?y[e].one:y[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"in "+n:n+" ago":n},formatLong:b,formatRelative:function(e,t,a,n){return C[e]},localize:{ordinalNumber:function(e,t){var a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:w({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:w({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:w({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:w({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:w({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(p={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var a=String(e),n=t||{},r=a.match(p.matchPattern);if(!r)return null;var i=r[0],o=a.match(p.parsePattern);if(!o)return null;var l=p.valueCallback?p.valueCallback(o[0]):o[0];return{value:l=n.valueCallback?n.valueCallback(l):l,rest:a.slice(i.length)}}),era:S({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:S({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:S({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:S({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function E(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t=t||{})t.hasOwnProperty(a)&&(e[a]=t[a]);return e}({},e)}var k=6e4;function I(e){return e.getTime()%k}function N(e){var t=new Date(e.getTime()),a=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var n=a>0?(k+I(t))%k:I(t);return a*k+n}var T=1440,M=43200;function A(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var x=36e5,P={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},B=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,L=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,W=/^([+-])(\d{2})(?::?(\d{2}))?$/;function O(e){var t,a={},n=e.split(P.dateTimeDelimiter);if(n.length>2)return a;if(/:/.test(n[0])?(a.date=null,t=n[0]):(a.date=n[0],t=n[1],P.timeZoneDelimiter.test(a.date)&&(a.date=e.split(P.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length))),t){var r=P.timezone.exec(t);r?(a.time=t.replace(r[1],""),a.timezone=r[1]):a.time=t}return a}function J(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(a);if(!n)return{year:null};var r=n[1]&&parseInt(n[1]),i=n[2]&&parseInt(n[2]);return{year:null==i?r:100*i,restDateString:e.slice((n[1]||n[2]).length)}}function j(e,t){if(null===t)return null;var a=e.match(B);if(!a)return null;var n=!!a[4],r=F(a[1]),i=F(a[2])-1,o=F(a[3]),l=F(a[4]),s=F(a[5])-1;if(n)return function(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}(0,l,s)?function(e,t,a){var n=new Date(0);n.setUTCFullYear(e,0,4);var r=7*(t-1)+a+1-(n.getUTCDay()||7);return n.setUTCDate(n.getUTCDate()+r),n}(t,l,s):new Date(NaN);var c=new Date(0);return function(e,t,a){return t>=0&&t<=11&&a>=1&&a<=(Y[t]||(z(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(z(e)?366:365)}(t,r)?(c.setUTCFullYear(t,i,Math.max(r,o)),c):new Date(NaN)}function F(e){return e?parseInt(e):1}function X(e){var t=e.match(L);if(!t)return null;var a=q(t[1]),n=q(t[2]),r=q(t[3]);return function(e,t,a){return 24===e?0===t&&0===a:a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}(a,n,r)?a*x+6e4*n+1e3*r:NaN}function q(e){return e&&parseFloat(e.replace(",","."))||0}function U(e){if("Z"===e)return 0;var t=e.match(W);if(!t)return 0;var a="+"===t[1]?-1:1,n=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,r)?a*(n*x+6e4*r):NaN}var Y=[31,null,31,30,31,30,31,31,30,31,30,31];function z(e){return e%400==0||e%4==0&&e%100}const R=()=>{let e=JSON.parse(localStorage.getItem("categoryCollection")),t=0;document.querySelectorAll(".tasksDisplay").forEach((e=>e.remove())),document.querySelectorAll(".completedTasksDisplay").forEach((e=>e.remove())),e.find((e=>e.active)).tasks.forEach((e=>{let a=document.createElement("div");e.checklist?a.setAttribute("class","completedTasksDisplay"):a.setAttribute("class","tasksDisplay");let n=document.createElement("div");n.setAttribute("class","taskInfoContainer"),bottomRightContainer.appendChild(a);let r=document.createElement("div");1===e.priority?r.classList.add("highPriorityIndicator"):2===e.priority?r.classList.add("mediumPriorityIndicator"):3===e.priority&&r.classList.add("lowPriorityIndicator");let i=document.createElement("div");i.setAttribute("class","taskNameAndDueDateContainer");let o=document.createElement("div");o.setAttribute("class","taskName"),o.textContent=""+e.id;let l=document.createElement("div");if(l.setAttribute("class","dueDate"),e.dueDate){let t=function(e,t,a){c(2,arguments);var n=a||{},r=n.locale||D;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var i=d(e,t);if(isNaN(i))throw new RangeError("Invalid time value");var o,l,s=E(n);s.addSuffix=Boolean(n.addSuffix),s.comparison=i,i>0?(o=u(t),l=u(e)):(o=u(e),l=u(t));var m,h=f(l,o),y=(N(l)-N(o))/1e3,v=Math.round((h-y)/60);if(v<2)return n.includeSeconds?h<5?r.formatDistance("lessThanXSeconds",5,s):h<10?r.formatDistance("lessThanXSeconds",10,s):h<20?r.formatDistance("lessThanXSeconds",20,s):h<40?r.formatDistance("halfAMinute",null,s):h<60?r.formatDistance("lessThanXMinutes",1,s):r.formatDistance("xMinutes",1,s):0===v?r.formatDistance("lessThanXMinutes",1,s):r.formatDistance("xMinutes",v,s);if(v<45)return r.formatDistance("xMinutes",v,s);if(v<90)return r.formatDistance("aboutXHours",1,s);if(v<T){var p=Math.round(v/60);return r.formatDistance("aboutXHours",p,s)}if(v<2520)return r.formatDistance("xDays",1,s);if(v<M){var b=Math.round(v/T);return r.formatDistance("xDays",b,s)}if(v<86400)return m=Math.round(v/M),r.formatDistance("aboutXMonths",m,s);if((m=g(l,o))<12){var C=Math.round(v/M);return r.formatDistance("xMonths",C,s)}var w=m%12,S=Math.floor(m/12);return w<3?r.formatDistance("aboutXYears",S,s):w<9?r.formatDistance("overXYears",S,s):r.formatDistance("almostXYears",S+1,s)}(function(e,t){c(1,arguments);var a=t||{},n=null==a.additionalDigits?2:A(a.additionalDigits);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var r,i=O(e);if(i.date){var o=J(i.date,n);r=j(o.restDateString,o.year)}if(isNaN(r)||!r)return new Date(NaN);var l,s=r.getTime(),u=0;if(i.time&&(u=X(i.time),isNaN(u)||null===u))return new Date(NaN);if(!i.timezone){var d=new Date(s+u),m=new Date(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate(),d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds());return m.setFullYear(d.getUTCFullYear()),m}return l=U(i.timezone),isNaN(l)?new Date(NaN):new Date(s+u+l)}(e.dueDate),new Date);l.textContent="Due in "+t}else l.textContent="No due date";let s=document.createElement("div");s.setAttribute("class","notesContainer");let m=document.createElement("div");m.setAttribute("class","notesHeading"),m.textContent="Notes";let h=document.createElement("div");h.setAttribute("class","notesContent"),h.textContent=""+e.notes,a.appendChild(r),a.appendChild(n),n.appendChild(i),i.appendChild(o),i.appendChild(l),n.appendChild(s),s.appendChild(m),s.appendChild(h);let y=document.createElement("div");y.setAttribute("class","deleteEditAndCheckContainer"),n.appendChild(y);let v=document.createElement("i");v.setAttribute("class","fa fa-trash deleteTaskIcon"),v.setAttribute("data-index",""+t),y.appendChild(v);let p=document.createElement("i");p.setAttribute("class","fa fa-edit editTaskIcon"),p.setAttribute("data-index",""+t),y.appendChild(p);let b=document.createElement("i");b.setAttribute("class","fa fa-check-circle checkboxComplete"),b.setAttribute("data-index",""+t),y.appendChild(b),t++})),t=0,oe()},H=e=>{let t=JSON.parse(localStorage.getItem("categoryCollection")),a=Array.from(document.getElementsByClassName("newCategory"));a.forEach((e=>{e.classList.remove("activeCategory")}));let n=e.target.id;a[n].classList.add("activeCategory"),t[n].active=!0,localStorage.setItem("categoryCollection",JSON.stringify(t)),R()},V=e=>{if(confirm("Delete Category?")){let t=JSON.parse(localStorage.getItem("categoryCollection"));document.querySelectorAll(".tasksDisplay .completedTasksDisplay").forEach((e=>e.remove()));const a=e.target.dataset.index;t.splice(a,1),localStorage.setItem("categoryCollection",JSON.stringify(t))}l(),ie(),R()},Z=document.querySelector(".inputTable"),$=document.getElementById("inputTableContainer"),Q=document.getElementById("taskTitleForm"),G=e=>{let t=JSON.parse(localStorage.getItem("categoryCollection")).find((e=>e.active));const a=document.getElementById("taskInputField").value;e.preventDefault(),null==t?alert("Please Select a Category"):a?a&&(Z.classList.remove("inputTable"),Z.classList.add("inputTableActive"),$.setAttribute("id","inputTableContainerActive"),Q.textContent="Details For "+a):alert("Please Enter a Value")},K=()=>{let e,t=JSON.parse(localStorage.getItem("categoryCollection")),a=t.find((e=>e.active)),n=document.getElementById("taskInputField").value,r=document.getElementById("dueDate").value;document.getElementById("highPriority").checked?e=1:document.getElementById("mediumPriority").checked?e=2:document.getElementById("lowPriority").checked?e=3:alert("Please Select a Priority Level");let i=document.getElementById("notes").value,l=new o(n,r,e,!1,i);a.tasks.push(l),Z.classList.remove("inputTableActive"),$.setAttribute("id","inputTableContainer"),localStorage.setItem("categoryCollection",JSON.stringify(t)),ee(),R()},_=()=>{Z.classList.remove("inputTableActive"),Z.classList.add("inputTable"),$.setAttribute("id","inputTableContainer"),ee()};function ee(){let e=document.getElementById("taskInputField"),t=document.getElementById("dueDate"),a=document.getElementById("notes");e.value="",t.value="",a.value=""}const te=e=>{let t=JSON.parse(localStorage.getItem("categoryCollection")),a=e.target.dataset.index,n=t.find((e=>e.active)).tasks[a];n.checklist?n.checklist=!1:n.checklist=!0,localStorage.setItem("categoryCollection",JSON.stringify(t)),R()},ae=e=>{let t=JSON.parse(localStorage.getItem("categoryCollection")),a=t.find((e=>!0===e.active));if(confirm("Delete Task?")){const n=e.target.dataset.index;a.tasks.splice(n,1),localStorage.setItem("categoryCollection",JSON.stringify(t)),R()}},ne=()=>{let e=JSON.parse(localStorage.getItem("categoryCollection"));e.find((e=>e.active)).tasks.sort((function(e,t){return e.dueDate>t.dueDate?1:e.dueDate<t.dueDate?-1:0})),localStorage.setItem("categoryCollection",JSON.stringify(e)),R()},re=()=>{let e=JSON.parse(localStorage.getItem("categoryCollection"));e.find((e=>e.active)).tasks.sort((function(e,t){return e.priority>t.priority?1:e.priority<t.priority?-1:0})),localStorage.setItem("categoryCollection",JSON.stringify(e)),R()},ie=()=>{const e=document.getElementById("addCategoryButton"),t=document.querySelector(".categoryInputTable"),a=document.getElementById("categoryInputField"),i=document.getElementById("submitCategory"),o=document.getElementById("cancelCategoryInput");Array.from(document.getElementsByClassName("newCategory")).forEach((e=>{e.addEventListener("click",r),e.addEventListener("click",l),e.addEventListener("click",H)})),Array.from(document.getElementsByClassName("deleteCategoryIcon")).forEach((e=>{e.addEventListener("click",V),e.addEventListener("click",n)})),e.addEventListener("click",(()=>{t.classList.remove("categoryInputTable"),t.classList.add("categoryInputTableActive")})),i.addEventListener("click",s),i.addEventListener("click",n),o.addEventListener("click",(()=>{t.classList.remove("categoryInputTableActive"),t.classList.add("categoryInputTable"),a.value=""}))};ie();const oe=()=>{const e=document.getElementById("addTaskButton"),t=document.getElementById("submitButton"),a=document.getElementById("cancelButton"),n=document.getElementById("importanceButton"),r=document.getElementById("dateButton");e.addEventListener("click",G),t.addEventListener("click",K),a.addEventListener("click",_),Array.from(document.getElementsByClassName("deleteTaskIcon")).forEach((e=>{e.addEventListener("click",ae)})),n.addEventListener("click",re),r.addEventListener("click",ne),Array.from(document.getElementsByClassName("checkboxComplete")).forEach((e=>{e.addEventListener("click",te)}))};oe(),n(),l()}},t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a(732)})();