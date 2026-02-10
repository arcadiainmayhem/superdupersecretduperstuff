(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var ea=!1,ta=!1,Zn=[],na=-1,co=!1;function hf(n){_f(n)}function pf(){co=!0}function mf(){co=!1,oc()}function _f(n){Zn.includes(n)||Zn.push(n),oc()}function gf(n){let e=Zn.indexOf(n);e!==-1&&e>na&&Zn.splice(e,1)}function oc(){if(!ta&&!ea){if(co)return;ea=!0,queueMicrotask(xf)}}function xf(){ea=!1,ta=!0;for(let n=0;n<Zn.length;n++)Zn[n](),na=n;Zn.length=0,na=-1,ta=!1}var Li,ai,Ii,lc,ia=!0;function vf(n){ia=!1,n(),ia=!0}function Sf(n){Li=n.reactive,Ii=n.release,ai=e=>n.effect(e,{scheduler:t=>{ia?hf(t):t()}}),lc=n.raw}function Jo(n){ai=n}function Mf(n){let e=()=>{};return[i=>{let r=ai(i);return n._x_effects||(n._x_effects=new Set,n._x_runEffects=()=>{n._x_effects.forEach(s=>s())}),n._x_effects.add(r),e=()=>{r!==void 0&&(n._x_effects.delete(r),Ii(r))},r},()=>{e()}]}function cc(n,e){let t=!0,i,r=ai(()=>{let s=n();if(JSON.stringify(s),!t&&(typeof s=="object"||s!==i)){let a=i;queueMicrotask(()=>{e(s,a)})}i=s,t=!1});return()=>Ii(r)}async function Ef(n){pf();try{await n(),await Promise.resolve()}finally{mf()}}var uc=[],fc=[],dc=[];function yf(n){dc.push(n)}function uo(n,e){typeof e=="function"?(n._x_cleanups||(n._x_cleanups=[]),n._x_cleanups.push(e)):(e=n,fc.push(e))}function hc(n){uc.push(n)}function pc(n,e,t){n._x_attributeCleanups||(n._x_attributeCleanups={}),n._x_attributeCleanups[e]||(n._x_attributeCleanups[e]=[]),n._x_attributeCleanups[e].push(t)}function mc(n,e){n._x_attributeCleanups&&Object.entries(n._x_attributeCleanups).forEach(([t,i])=>{(e===void 0||e.includes(t))&&(i.forEach(r=>r()),delete n._x_attributeCleanups[t])})}function bf(n){for(n._x_effects?.forEach(gf);n._x_cleanups?.length;)n._x_cleanups.pop()()}var fo=new MutationObserver(_o),ho=!1;function po(){fo.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),ho=!0}function _c(){Tf(),fo.disconnect(),ho=!1}var Vi=[];function Tf(){let n=fo.takeRecords();Vi.push(()=>n.length>0&&_o(n));let e=Vi.length;queueMicrotask(()=>{if(Vi.length===e)for(;Vi.length>0;)Vi.shift()()})}function st(n){if(!ho)return n();_c();let e=n();return po(),e}var mo=!1,Kr=[];function Af(){mo=!0}function wf(){mo=!1,_o(Kr),Kr=[]}function _o(n){if(mo){Kr=Kr.concat(n);return}let e=[],t=new Set,i=new Map,r=new Map;for(let s=0;s<n.length;s++)if(!n[s].target._x_ignoreMutationObserver&&(n[s].type==="childList"&&(n[s].removedNodes.forEach(a=>{a.nodeType===1&&a._x_marker&&t.add(a)}),n[s].addedNodes.forEach(a=>{if(a.nodeType===1){if(t.has(a)){t.delete(a);return}a._x_marker||e.push(a)}})),n[s].type==="attributes")){let a=n[s].target,o=n[s].attributeName,l=n[s].oldValue,c=()=>{i.has(a)||i.set(a,[]),i.get(a).push({name:o,value:a.getAttribute(o)})},u=()=>{r.has(a)||r.set(a,[]),r.get(a).push(o)};a.hasAttribute(o)&&l===null?c():a.hasAttribute(o)?(u(),c()):u()}r.forEach((s,a)=>{mc(a,s)}),i.forEach((s,a)=>{uc.forEach(o=>o(a,s))});for(let s of t)e.some(a=>a.contains(s))||fc.forEach(a=>a(s));for(let s of e)s.isConnected&&dc.forEach(a=>a(s));e=null,t=null,i=null,r=null}function gc(n){return ni(ti(n))}function lr(n,e,t){return n._x_dataStack=[e,...ti(t||n)],()=>{n._x_dataStack=n._x_dataStack.filter(i=>i!==e)}}function ti(n){return n._x_dataStack?n._x_dataStack:typeof ShadowRoot=="function"&&n instanceof ShadowRoot?ti(n.host):n.parentNode?ti(n.parentNode):[]}function ni(n){return new Proxy({objects:n},Rf)}var Rf={ownKeys({objects:n}){return Array.from(new Set(n.flatMap(e=>Object.keys(e))))},has({objects:n},e){return e==Symbol.unscopables?!1:n.some(t=>Object.prototype.hasOwnProperty.call(t,e)||Reflect.has(t,e))},get({objects:n},e,t){return e=="toJSON"?Cf:Reflect.get(n.find(i=>Reflect.has(i,e))||{},e,t)},set({objects:n},e,t,i){const r=n.find(a=>Object.prototype.hasOwnProperty.call(a,e))||n[n.length-1],s=Object.getOwnPropertyDescriptor(r,e);return s?.set&&s?.get?s.set.call(i,t)||!0:Reflect.set(r,e,t)}};function Cf(){return Reflect.ownKeys(this).reduce((e,t)=>(e[t]=Reflect.get(this,t),e),{})}function go(n){let e=i=>typeof i=="object"&&!Array.isArray(i)&&i!==null,t=(i,r="")=>{Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([s,{value:a,enumerable:o}])=>{if(o===!1||a===void 0||typeof a=="object"&&a!==null&&a.__v_skip)return;let l=r===""?s:`${r}.${s}`;typeof a=="object"&&a!==null&&a._x_interceptor?i[s]=a.initialize(n,l,s):e(a)&&a!==i&&!(a instanceof Element)&&t(a,l)})};return t(n)}function xc(n,e=()=>{}){let t={initialValue:void 0,_x_interceptor:!0,initialize(i,r,s){return n(this.initialValue,()=>Pf(i,r),a=>ra(i,r,a),r,s)}};return e(t),i=>{if(typeof i=="object"&&i!==null&&i._x_interceptor){let r=t.initialize.bind(t);t.initialize=(s,a,o)=>{let l=i.initialize(s,a,o);return t.initialValue=l,r(s,a,o)}}else t.initialValue=i;return t}}function Pf(n,e){return e.split(".").reduce((t,i)=>t[i],n)}function ra(n,e,t){if(typeof e=="string"&&(e=e.split(".")),e.length===1)n[e[0]]=t;else{if(e.length===0)throw error;return n[e[0]]||(n[e[0]]={}),ra(n[e[0]],e.slice(1),t)}}var vc={};function Yt(n,e){vc[n]=e}function tr(n,e){let t=Df(e);return Object.entries(vc).forEach(([i,r])=>{Object.defineProperty(n,`$${i}`,{get(){return r(e,t)},enumerable:!1})}),n}function Df(n){let[e,t]=wc(n),i={interceptor:xc,...e};return uo(n,t),i}function Lf(n,e,t,...i){try{return t(...i)}catch(r){nr(r,n,e)}}function nr(...n){return Sc(...n)}var Sc=Uf;function If(n){Sc=n}function Uf(n,e,t=void 0){n=Object.assign(n??{message:"No error message given."},{el:e,expression:t}),console.warn(`Alpine Expression Error: ${n.message}

${t?'Expression: "'+t+`"

`:""}`,e),setTimeout(()=>{throw n},0)}var yi=!0;function Mc(n){let e=yi;yi=!1;let t=n();return yi=e,t}function Jn(n,e,t={}){let i;return bt(n,e)(r=>i=r,t),i}function bt(...n){return Ec(...n)}var Ec=bc;function Nf(n){Ec=n}var yc;function Ff(n){yc=n}function bc(n,e){let t={};tr(t,n);let i=[t,...ti(n)],r=typeof e=="function"?Of(i,e):zf(i,e,n);return Lf.bind(null,n,e,r)}function Of(n,e){return(t=()=>{},{scope:i={},params:r=[],context:s}={})=>{if(!yi){ir(t,e,ni([i,...n]),r);return}let a=e.apply(ni([i,...n]),r);ir(t,a)}}var xs={};function Bf(n,e){if(xs[n])return xs[n];let t=Object.getPrototypeOf(async function(){}).constructor,i=/^[\n\s]*if.*\(.*\)/.test(n.trim())||/^(let|const)\s/.test(n.trim())?`(async()=>{ ${n} })()`:n,s=(()=>{try{let a=new t(["__self","scope"],`with (scope) { __self.result = ${i} }; __self.finished = true; return __self.result;`);return Object.defineProperty(a,"name",{value:`[Alpine] ${n}`}),a}catch(a){return nr(a,e,n),Promise.resolve()}})();return xs[n]=s,s}function zf(n,e,t){let i=Bf(e,t);return(r=()=>{},{scope:s={},params:a=[],context:o}={})=>{i.result=void 0,i.finished=!1;let l=ni([s,...n]);if(typeof i=="function"){let c=i.call(o,i,l).catch(u=>nr(u,t,e));i.finished?(ir(r,i.result,l,a,t),i.result=void 0):c.then(u=>{ir(r,u,l,a,t)}).catch(u=>nr(u,t,e)).finally(()=>i.result=void 0)}}}function ir(n,e,t,i,r){if(yi&&typeof e=="function"){let s=e.apply(t,i);s instanceof Promise?s.then(a=>ir(n,a,t,i)).catch(a=>nr(a,r,e)):n(s)}else typeof e=="object"&&e instanceof Promise?e.then(s=>n(s)):n(e)}function Vf(...n){return yc(...n)}function Gf(n,e,t={}){let i={};tr(i,n);let r=[i,...ti(n)],s=ni([t.scope??{},...r]),a=t.params??[];if(e.includes("await")){let o=Object.getPrototypeOf(async function(){}).constructor,l=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e;return new o(["scope"],`with (scope) { let __result = ${l}; return __result }`).call(t.context,s)}else{let o=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(()=>{ ${e} })()`:e,c=new Function(["scope"],`with (scope) { let __result = ${o}; return __result }`).call(t.context,s);return typeof c=="function"&&yi?c.apply(s,a):c}}var xo="x-";function Ui(n=""){return xo+n}function Hf(n){xo=n}var jr={};function ht(n,e){return jr[n]=e,{before(t){if(!jr[t]){console.warn(String.raw`Cannot find directive \`${t}\`. \`${n}\` will use the default order of execution`);return}const i=$n.indexOf(t);$n.splice(i>=0?i:$n.indexOf("DEFAULT"),0,n)}}}function kf(n){return Object.keys(jr).includes(n)}function vo(n,e,t){if(e=Array.from(e),n._x_virtualDirectives){let s=Object.entries(n._x_virtualDirectives).map(([o,l])=>({name:o,value:l})),a=Tc(s);s=s.map(o=>a.find(l=>l.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),e=e.concat(s)}let i={};return e.map(Pc((s,a)=>i[s]=a)).filter(Lc).map(qf(i,t)).sort(Yf).map(s=>Xf(n,s))}function Tc(n){return Array.from(n).map(Pc()).filter(e=>!Lc(e))}var sa=!1,ji=new Map,Ac=Symbol();function Wf(n){sa=!0;let e=Symbol();Ac=e,ji.set(e,[]);let t=()=>{for(;ji.get(e).length;)ji.get(e).shift()();ji.delete(e)},i=()=>{sa=!1,t()};n(t),i()}function wc(n){let e=[],t=o=>e.push(o),[i,r]=Mf(n);return e.push(r),[{Alpine:Fi,effect:i,cleanup:t,evaluateLater:bt.bind(bt,n),evaluate:Jn.bind(Jn,n)},()=>e.forEach(o=>o())]}function Xf(n,e){let t=()=>{},i=jr[e.type]||t,[r,s]=wc(n);pc(n,e.original,s);let a=()=>{n._x_ignore||n._x_ignoreSelf||(i.inline&&i.inline(n,e,r),i=i.bind(i,n,e,r),sa?ji.get(Ac).push(i):i())};return a.runCleanups=s,a}var Rc=(n,e)=>({name:t,value:i})=>(t.startsWith(n)&&(t=t.replace(n,e)),{name:t,value:i}),Cc=n=>n;function Pc(n=()=>{}){return({name:e,value:t})=>{let{name:i,value:r}=Dc.reduce((s,a)=>a(s),{name:e,value:t});return i!==e&&n(i,e),{name:i,value:r}}}var Dc=[];function So(n){Dc.push(n)}function Lc({name:n}){return Ic().test(n)}var Ic=()=>new RegExp(`^${xo}([^:^.]+)\\b`);function qf(n,e){return({name:t,value:i})=>{t===i&&(i="");let r=t.match(Ic()),s=t.match(/:([a-zA-Z0-9\-_:]+)/),a=t.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],o=e||n[t]||t;return{type:r?r[1]:null,value:s?s[1]:null,modifiers:a.map(l=>l.replace(".","")),expression:i,original:o}}}var aa="DEFAULT",$n=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",aa,"teleport"];function Yf(n,e){let t=$n.indexOf(n.type)===-1?aa:n.type,i=$n.indexOf(e.type)===-1?aa:e.type;return $n.indexOf(t)-$n.indexOf(i)}function Qi(n,e,t={}){n.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0}))}function ii(n,e){if(typeof ShadowRoot=="function"&&n instanceof ShadowRoot){Array.from(n.children).forEach(r=>ii(r,e));return}let t=!1;if(e(n,()=>t=!0),t)return;let i=n.firstElementChild;for(;i;)ii(i,e),i=i.nextElementSibling}function Vt(n,...e){console.warn(`Alpine Warning: ${n}`,...e)}var Qo=!1;function $f(){Qo&&Vt("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Qo=!0,document.body||Vt("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),Qi(document,"alpine:init"),Qi(document,"alpine:initializing"),po(),yf(e=>gn(e,ii)),uo(e=>Ni(e)),hc((e,t)=>{vo(e,t).forEach(i=>i())});let n=e=>!ns(e.parentElement,!0);Array.from(document.querySelectorAll(Fc().join(","))).filter(n).forEach(e=>{gn(e)}),Qi(document,"alpine:initialized"),setTimeout(()=>{Jf()})}var Mo=[],Uc=[];function Nc(){return Mo.map(n=>n())}function Fc(){return Mo.concat(Uc).map(n=>n())}function Oc(n){Mo.push(n)}function Bc(n){Uc.push(n)}function ns(n,e=!1){return ri(n,t=>{if((e?Fc():Nc()).some(r=>t.matches(r)))return!0})}function ri(n,e){if(n){if(e(n))return n;if(n._x_teleportBack&&(n=n._x_teleportBack),n.parentNode instanceof ShadowRoot)return ri(n.parentNode.host,e);if(n.parentElement)return ri(n.parentElement,e)}}function Kf(n){return Nc().some(e=>n.matches(e))}var zc=[];function jf(n){zc.push(n)}var Zf=1;function gn(n,e=ii,t=()=>{}){ri(n,i=>i._x_ignore)||Wf(()=>{e(n,(i,r)=>{i._x_marker||(t(i,r),zc.forEach(s=>s(i,r)),vo(i,i.attributes).forEach(s=>s()),i._x_ignore||(i._x_marker=Zf++),i._x_ignore&&r())})})}function Ni(n,e=ii){e(n,t=>{bf(t),mc(t),delete t._x_marker})}function Jf(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([e,t,i])=>{kf(t)||i.some(r=>{if(document.querySelector(r))return Vt(`found "${r}", but missing ${e} plugin`),!0})})}var oa=[],Eo=!1;function yo(n=()=>{}){return queueMicrotask(()=>{Eo||setTimeout(()=>{la()})}),new Promise(e=>{oa.push(()=>{n(),e()})})}function la(){for(Eo=!1;oa.length;)oa.shift()()}function Qf(){Eo=!0}function bo(n,e){return Array.isArray(e)?el(n,e.join(" ")):typeof e=="object"&&e!==null?ed(n,e):typeof e=="function"?bo(n,e()):el(n,e)}function el(n,e){let t=r=>r.split(" ").filter(s=>!n.classList.contains(s)).filter(Boolean),i=r=>(n.classList.add(...r),()=>{n.classList.remove(...r)});return e=e===!0?e="":e||"",i(t(e))}function ed(n,e){let t=o=>o.split(" ").filter(Boolean),i=Object.entries(e).flatMap(([o,l])=>l?t(o):!1).filter(Boolean),r=Object.entries(e).flatMap(([o,l])=>l?!1:t(o)).filter(Boolean),s=[],a=[];return r.forEach(o=>{n.classList.contains(o)&&(n.classList.remove(o),a.push(o))}),i.forEach(o=>{n.classList.contains(o)||(n.classList.add(o),s.push(o))}),()=>{a.forEach(o=>n.classList.add(o)),s.forEach(o=>n.classList.remove(o))}}function is(n,e){return typeof e=="object"&&e!==null?td(n,e):nd(n,e)}function td(n,e){let t={};return Object.entries(e).forEach(([i,r])=>{t[i]=n.style[i],i.startsWith("--")||(i=id(i)),n.style.setProperty(i,r)}),setTimeout(()=>{n.style.length===0&&n.removeAttribute("style")}),()=>{is(n,t)}}function nd(n,e){let t=n.getAttribute("style",e);return n.setAttribute("style",e),()=>{n.setAttribute("style",t||"")}}function id(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function ca(n,e=()=>{}){let t=!1;return function(){t?e.apply(this,arguments):(t=!0,n.apply(this,arguments))}}ht("transition",(n,{value:e,modifiers:t,expression:i},{evaluate:r})=>{typeof i=="function"&&(i=r(i)),i!==!1&&(!i||typeof i=="boolean"?sd(n,t,e):rd(n,i,e))});function rd(n,e,t){Vc(n,bo,""),{enter:r=>{n._x_transition.enter.during=r},"enter-start":r=>{n._x_transition.enter.start=r},"enter-end":r=>{n._x_transition.enter.end=r},leave:r=>{n._x_transition.leave.during=r},"leave-start":r=>{n._x_transition.leave.start=r},"leave-end":r=>{n._x_transition.leave.end=r}}[t](e)}function sd(n,e,t){Vc(n,is);let i=!e.includes("in")&&!e.includes("out")&&!t,r=i||e.includes("in")||["enter"].includes(t),s=i||e.includes("out")||["leave"].includes(t);e.includes("in")&&!i&&(e=e.filter((f,y)=>y<e.indexOf("out"))),e.includes("out")&&!i&&(e=e.filter((f,y)=>y>e.indexOf("out")));let a=!e.includes("opacity")&&!e.includes("scale"),o=a||e.includes("opacity"),l=a||e.includes("scale"),c=o?0:1,u=l?Gi(e,"scale",95)/100:1,d=Gi(e,"delay",0)/1e3,p=Gi(e,"origin","center"),_="opacity, transform",x=Gi(e,"duration",150)/1e3,S=Gi(e,"duration",75)/1e3,h="cubic-bezier(0.4, 0.0, 0.2, 1)";r&&(n._x_transition.enter.during={transformOrigin:p,transitionDelay:`${d}s`,transitionProperty:_,transitionDuration:`${x}s`,transitionTimingFunction:h},n._x_transition.enter.start={opacity:c,transform:`scale(${u})`},n._x_transition.enter.end={opacity:1,transform:"scale(1)"}),s&&(n._x_transition.leave.during={transformOrigin:p,transitionDelay:`${d}s`,transitionProperty:_,transitionDuration:`${S}s`,transitionTimingFunction:h},n._x_transition.leave.start={opacity:1,transform:"scale(1)"},n._x_transition.leave.end={opacity:c,transform:`scale(${u})`})}function Vc(n,e,t={}){n._x_transition||(n._x_transition={enter:{during:t,start:t,end:t},leave:{during:t,start:t,end:t},in(i=()=>{},r=()=>{}){ua(n,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},i,r)},out(i=()=>{},r=()=>{}){ua(n,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},i,r)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(n,e,t,i){const r=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let s=()=>r(t);if(e){n._x_transition&&(n._x_transition.enter||n._x_transition.leave)?n._x_transition.enter&&(Object.entries(n._x_transition.enter.during).length||Object.entries(n._x_transition.enter.start).length||Object.entries(n._x_transition.enter.end).length)?n._x_transition.in(t):s():n._x_transition?n._x_transition.in(t):s();return}n._x_hidePromise=n._x_transition?new Promise((a,o)=>{n._x_transition.out(()=>{},()=>a(i)),n._x_transitioning&&n._x_transitioning.beforeCancel(()=>o({isFromCancelledTransition:!0}))}):Promise.resolve(i),queueMicrotask(()=>{let a=Gc(n);a?(a._x_hideChildren||(a._x_hideChildren=[]),a._x_hideChildren.push(n)):r(()=>{let o=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(o)]).then(([u])=>u?.());return delete l._x_hidePromise,delete l._x_hideChildren,c};o(n).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function Gc(n){let e=n.parentNode;if(e)return e._x_hidePromise?e:Gc(e)}function ua(n,e,{during:t,start:i,end:r}={},s=()=>{},a=()=>{}){if(n._x_transitioning&&n._x_transitioning.cancel(),Object.keys(t).length===0&&Object.keys(i).length===0&&Object.keys(r).length===0){s(),a();return}let o,l,c;ad(n,{start(){o=e(n,i)},during(){l=e(n,t)},before:s,end(){o(),c=e(n,r)},after:a,cleanup(){l(),c()}})}function ad(n,e){let t,i,r,s=ca(()=>{st(()=>{t=!0,i||e.before(),r||(e.end(),la()),e.after(),n.isConnected&&e.cleanup(),delete n._x_transitioning})});n._x_transitioning={beforeCancels:[],beforeCancel(a){this.beforeCancels.push(a)},cancel:ca(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();s()}),finish:s},st(()=>{e.start(),e.during()}),Qf(),requestAnimationFrame(()=>{if(t)return;let a=Number(getComputedStyle(n).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,o=Number(getComputedStyle(n).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;a===0&&(a=Number(getComputedStyle(n).animationDuration.replace("s",""))*1e3),st(()=>{e.before()}),i=!0,requestAnimationFrame(()=>{t||(st(()=>{e.end()}),la(),setTimeout(n._x_transitioning.finish,a+o),r=!0)})})}function Gi(n,e,t){if(n.indexOf(e)===-1)return t;const i=n[n.indexOf(e)+1];if(!i||e==="scale"&&isNaN(i))return t;if(e==="duration"||e==="delay"){let r=i.match(/([0-9]+)ms/);if(r)return r[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(n[n.indexOf(e)+2])?[i,n[n.indexOf(e)+2]].join(" "):i}var Ln=!1;function Nn(n,e=()=>{}){return(...t)=>Ln?e(...t):n(...t)}function od(n){return(...e)=>Ln&&n(...e)}var Hc=[];function rs(n){Hc.push(n)}function ld(n,e){Hc.forEach(t=>t(n,e)),Ln=!0,kc(()=>{gn(e,(t,i)=>{i(t,()=>{})})}),Ln=!1}var fa=!1;function cd(n,e){e._x_dataStack||(e._x_dataStack=n._x_dataStack),Ln=!0,fa=!0,kc(()=>{ud(e)}),Ln=!1,fa=!1}function ud(n){let e=!1;gn(n,(i,r)=>{ii(i,(s,a)=>{if(e&&Kf(s))return a();e=!0,r(s,a)})})}function kc(n){let e=ai;Jo((t,i)=>{let r=e(t);return Ii(r),()=>{}}),n(),Jo(e)}function Wc(n,e,t,i=[]){switch(n._x_bindings||(n._x_bindings=Li({})),n._x_bindings[e]=t,e=i.includes("camel")?xd(e):e,e){case"value":fd(n,t);break;case"style":hd(n,t);break;case"class":dd(n,t);break;case"selected":case"checked":pd(n,e,t);break;default:Xc(n,e,t);break}}function fd(n,e){if($c(n))n.attributes.value===void 0&&(n.value=e),window.fromModel&&(typeof e=="boolean"?n.checked=Hr(n.value)===e:n.checked=tl(n.value,e));else if(To(n))Number.isInteger(e)?n.value=e:!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?n.value=String(e):Array.isArray(e)?n.checked=e.some(t=>tl(t,n.value)):n.checked=!!e;else if(n.tagName==="SELECT")gd(n,e);else{if(n.value===e)return;n.value=e===void 0?"":e}}function dd(n,e){n._x_undoAddedClasses&&n._x_undoAddedClasses(),n._x_undoAddedClasses=bo(n,e)}function hd(n,e){n._x_undoAddedStyles&&n._x_undoAddedStyles(),n._x_undoAddedStyles=is(n,e)}function pd(n,e,t){Xc(n,e,t),_d(n,e,t)}function Xc(n,e,t){[null,void 0,!1].includes(t)&&Sd(e)?n.removeAttribute(e):(qc(e)&&(t=e),md(n,e,t))}function md(n,e,t){n.getAttribute(e)!=t&&n.setAttribute(e,t)}function _d(n,e,t){n[e]!==t&&(n[e]=t)}function gd(n,e){const t=[].concat(e).map(i=>i+"");Array.from(n.options).forEach(i=>{i.selected=t.includes(i.value)})}function xd(n){return n.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function tl(n,e){return n==e}function Hr(n){return[1,"1","true","on","yes",!0].includes(n)?!0:[0,"0","false","off","no",!1].includes(n)?!1:n?!!n:null}var vd=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function qc(n){return vd.has(n)}function Sd(n){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(n)}function Md(n,e,t){return n._x_bindings&&n._x_bindings[e]!==void 0?n._x_bindings[e]:Yc(n,e,t)}function Ed(n,e,t,i=!0){if(n._x_bindings&&n._x_bindings[e]!==void 0)return n._x_bindings[e];if(n._x_inlineBindings&&n._x_inlineBindings[e]!==void 0){let r=n._x_inlineBindings[e];return r.extract=i,Mc(()=>Jn(n,r.expression))}return Yc(n,e,t)}function Yc(n,e,t){let i=n.getAttribute(e);return i===null?typeof t=="function"?t():t:i===""?!0:qc(e)?!![e,"true"].includes(i):i}function To(n){return n.type==="checkbox"||n.localName==="ui-checkbox"||n.localName==="ui-switch"}function $c(n){return n.type==="radio"||n.localName==="ui-radio"}function Kc(n,e){let t;return function(){const i=this,r=arguments,s=function(){t=null,n.apply(i,r)};clearTimeout(t),t=setTimeout(s,e)}}function jc(n,e){let t;return function(){let i=this,r=arguments;t||(n.apply(i,r),t=!0,setTimeout(()=>t=!1,e))}}function Zc({get:n,set:e},{get:t,set:i}){let r=!0,s,a=ai(()=>{let o=n(),l=t();if(r)i(vs(o)),r=!1;else{let c=JSON.stringify(o),u=JSON.stringify(l);c!==s?i(vs(o)):c!==u&&e(vs(l))}s=JSON.stringify(n()),JSON.stringify(t())});return()=>{Ii(a)}}function vs(n){return typeof n=="object"?JSON.parse(JSON.stringify(n)):n}function yd(n){(Array.isArray(n)?n:[n]).forEach(t=>t(Fi))}var Wn={},nl=!1;function bd(n,e){if(nl||(Wn=Li(Wn),nl=!0),e===void 0)return Wn[n];Wn[n]=e,go(Wn[n]),typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&Wn[n].init()}function Td(){return Wn}var Jc={};function Ad(n,e){let t=typeof e!="function"?()=>e:e;return n instanceof Element?Qc(n,t()):(Jc[n]=t,()=>{})}function wd(n){return Object.entries(Jc).forEach(([e,t])=>{Object.defineProperty(n,e,{get(){return(...i)=>t(...i)}})}),n}function Qc(n,e,t){let i=[];for(;i.length;)i.pop()();let r=Object.entries(e).map(([a,o])=>({name:a,value:o})),s=Tc(r);return r=r.map(a=>s.find(o=>o.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),vo(n,r,t).map(a=>{i.push(a.runCleanups),a()}),()=>{for(;i.length;)i.pop()()}}var eu={};function Rd(n,e){eu[n]=e}function Cd(n,e){return Object.entries(eu).forEach(([t,i])=>{Object.defineProperty(n,t,{get(){return(...r)=>i.bind(e)(...r)},enumerable:!1})}),n}var Pd={get reactive(){return Li},get release(){return Ii},get effect(){return ai},get raw(){return lc},get transaction(){return Ef},version:"3.15.8",flushAndStopDeferringMutations:wf,dontAutoEvaluateFunctions:Mc,disableEffectScheduling:vf,startObservingMutations:po,stopObservingMutations:_c,setReactivityEngine:Sf,onAttributeRemoved:pc,onAttributesAdded:hc,closestDataStack:ti,skipDuringClone:Nn,onlyDuringClone:od,addRootSelector:Oc,addInitSelector:Bc,setErrorHandler:If,interceptClone:rs,addScopeToNode:lr,deferMutations:Af,mapAttributes:So,evaluateLater:bt,interceptInit:jf,initInterceptors:go,injectMagics:tr,setEvaluator:Nf,setRawEvaluator:Ff,mergeProxies:ni,extractProp:Ed,findClosest:ri,onElRemoved:uo,closestRoot:ns,destroyTree:Ni,interceptor:xc,transition:ua,setStyles:is,mutateDom:st,directive:ht,entangle:Zc,throttle:jc,debounce:Kc,evaluate:Jn,evaluateRaw:Vf,initTree:gn,nextTick:yo,prefixed:Ui,prefix:Hf,plugin:yd,magic:Yt,store:bd,start:$f,clone:cd,cloneNode:ld,bound:Md,$data:gc,watch:cc,walk:ii,data:Rd,bind:Ad},Fi=Pd;function Dd(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return r=>!!t[r]}var Ld=Object.freeze({}),Id=Object.prototype.hasOwnProperty,ss=(n,e)=>Id.call(n,e),Qn=Array.isArray,er=n=>tu(n)==="[object Map]",Ud=n=>typeof n=="string",Ao=n=>typeof n=="symbol",as=n=>n!==null&&typeof n=="object",Nd=Object.prototype.toString,tu=n=>Nd.call(n),nu=n=>tu(n).slice(8,-1),wo=n=>Ud(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Fd=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Od=Fd(n=>n.charAt(0).toUpperCase()+n.slice(1)),iu=(n,e)=>n!==e&&(n===n||e===e),da=new WeakMap,Hi=[],jt,ei=Symbol("iterate"),ha=Symbol("Map key iterate");function Bd(n){return n&&n._isEffect===!0}function zd(n,e=Ld){Bd(n)&&(n=n.raw);const t=Hd(n,e);return e.lazy||t(),t}function Vd(n){n.active&&(ru(n),n.options.onStop&&n.options.onStop(),n.active=!1)}var Gd=0;function Hd(n,e){const t=function(){if(!t.active)return n();if(!Hi.includes(t)){ru(t);try{return Wd(),Hi.push(t),jt=t,n()}finally{Hi.pop(),su(),jt=Hi[Hi.length-1]}}};return t.id=Gd++,t.allowRecurse=!!e.allowRecurse,t._isEffect=!0,t.active=!0,t.raw=n,t.deps=[],t.options=e,t}function ru(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}var Ai=!0,Ro=[];function kd(){Ro.push(Ai),Ai=!1}function Wd(){Ro.push(Ai),Ai=!0}function su(){const n=Ro.pop();Ai=n===void 0?!0:n}function qt(n,e,t){if(!Ai||jt===void 0)return;let i=da.get(n);i||da.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=new Set),r.has(jt)||(r.add(jt),jt.deps.push(r),jt.options.onTrack&&jt.options.onTrack({effect:jt,target:n,type:e,key:t}))}function In(n,e,t,i,r,s){const a=da.get(n);if(!a)return;const o=new Set,l=u=>{u&&u.forEach(d=>{(d!==jt||d.allowRecurse)&&o.add(d)})};if(e==="clear")a.forEach(l);else if(t==="length"&&Qn(n))a.forEach((u,d)=>{(d==="length"||d>=i)&&l(u)});else switch(t!==void 0&&l(a.get(t)),e){case"add":Qn(n)?wo(t)&&l(a.get("length")):(l(a.get(ei)),er(n)&&l(a.get(ha)));break;case"delete":Qn(n)||(l(a.get(ei)),er(n)&&l(a.get(ha)));break;case"set":er(n)&&l(a.get(ei));break}const c=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:n,key:t,type:e,newValue:i,oldValue:r,oldTarget:s}),u.options.scheduler?u.options.scheduler(u):u()};o.forEach(c)}var Xd=Dd("__proto__,__v_isRef,__isVue"),au=new Set(Object.getOwnPropertyNames(Symbol).map(n=>Symbol[n]).filter(Ao)),qd=ou(),Yd=ou(!0),il=$d();function $d(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=it(this);for(let s=0,a=this.length;s<a;s++)qt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(it)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){kd();const i=it(this)[e].apply(this,t);return su(),i}}),n}function ou(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_raw"&&s===(n?e?lh:fu:e?oh:uu).get(i))return i;const a=Qn(i);if(!n&&a&&ss(il,r))return Reflect.get(il,r,s);const o=Reflect.get(i,r,s);return(Ao(r)?au.has(r):Xd(r))||(n||qt(i,"get",r),e)?o:pa(o)?!a||!wo(r)?o.value:o:as(o)?n?du(o):Lo(o):o}}var Kd=jd();function jd(n=!1){return function(t,i,r,s){let a=t[i];if(!n&&(r=it(r),a=it(a),!Qn(t)&&pa(a)&&!pa(r)))return a.value=r,!0;const o=Qn(t)&&wo(i)?Number(i)<t.length:ss(t,i),l=Reflect.set(t,i,r,s);return t===it(s)&&(o?iu(r,a)&&In(t,"set",i,r,a):In(t,"add",i,r)),l}}function Zd(n,e){const t=ss(n,e),i=n[e],r=Reflect.deleteProperty(n,e);return r&&t&&In(n,"delete",e,void 0,i),r}function Jd(n,e){const t=Reflect.has(n,e);return(!Ao(e)||!au.has(e))&&qt(n,"has",e),t}function Qd(n){return qt(n,"iterate",Qn(n)?"length":ei),Reflect.ownKeys(n)}var eh={get:qd,set:Kd,deleteProperty:Zd,has:Jd,ownKeys:Qd},th={get:Yd,set(n,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,n),!0},deleteProperty(n,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,n),!0}},Co=n=>as(n)?Lo(n):n,Po=n=>as(n)?du(n):n,Do=n=>n,os=n=>Reflect.getPrototypeOf(n);function mr(n,e,t=!1,i=!1){n=n.__v_raw;const r=it(n),s=it(e);e!==s&&!t&&qt(r,"get",e),!t&&qt(r,"get",s);const{has:a}=os(r),o=i?Do:t?Po:Co;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function _r(n,e=!1){const t=this.__v_raw,i=it(t),r=it(n);return n!==r&&!e&&qt(i,"has",n),!e&&qt(i,"has",r),n===r?t.has(n):t.has(n)||t.has(r)}function gr(n,e=!1){return n=n.__v_raw,!e&&qt(it(n),"iterate",ei),Reflect.get(n,"size",n)}function rl(n){n=it(n);const e=it(this);return os(e).has.call(e,n)||(e.add(n),In(e,"add",n,n)),this}function sl(n,e){e=it(e);const t=it(this),{has:i,get:r}=os(t);let s=i.call(t,n);s?cu(t,i,n):(n=it(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?iu(e,a)&&In(t,"set",n,e,a):In(t,"add",n,e),this}function al(n){const e=it(this),{has:t,get:i}=os(e);let r=t.call(e,n);r?cu(e,t,n):(n=it(n),r=t.call(e,n));const s=i?i.call(e,n):void 0,a=e.delete(n);return r&&In(e,"delete",n,void 0,s),a}function ol(){const n=it(this),e=n.size!==0,t=er(n)?new Map(n):new Set(n),i=n.clear();return e&&In(n,"clear",void 0,void 0,t),i}function xr(n,e){return function(i,r){const s=this,a=s.__v_raw,o=it(a),l=e?Do:n?Po:Co;return!n&&qt(o,"iterate",ei),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function vr(n,e,t){return function(...i){const r=this.__v_raw,s=it(r),a=er(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Do:e?Po:Co;return!e&&qt(s,"iterate",l?ha:ei),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:o?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function yn(n){return function(...e){{const t=e[0]?`on key "${e[0]}" `:"";console.warn(`${Od(n)} operation ${t}failed: target is readonly.`,it(this))}return n==="delete"?!1:this}}function nh(){const n={get(s){return mr(this,s)},get size(){return gr(this)},has:_r,add:rl,set:sl,delete:al,clear:ol,forEach:xr(!1,!1)},e={get(s){return mr(this,s,!1,!0)},get size(){return gr(this)},has:_r,add:rl,set:sl,delete:al,clear:ol,forEach:xr(!1,!0)},t={get(s){return mr(this,s,!0)},get size(){return gr(this,!0)},has(s){return _r.call(this,s,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:xr(!0,!1)},i={get(s){return mr(this,s,!0,!0)},get size(){return gr(this,!0)},has(s){return _r.call(this,s,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=vr(s,!1,!1),t[s]=vr(s,!0,!1),e[s]=vr(s,!1,!0),i[s]=vr(s,!0,!0)}),[n,t,e,i]}var[ih,rh]=nh();function lu(n,e){const t=n?rh:ih;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ss(t,r)&&r in i?t:i,r,s)}var sh={get:lu(!1)},ah={get:lu(!0)};function cu(n,e,t){const i=it(t);if(i!==t&&e.call(n,i)){const r=nu(n);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var uu=new WeakMap,oh=new WeakMap,fu=new WeakMap,lh=new WeakMap;function ch(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uh(n){return n.__v_skip||!Object.isExtensible(n)?0:ch(nu(n))}function Lo(n){return n&&n.__v_isReadonly?n:hu(n,!1,eh,sh,uu)}function du(n){return hu(n,!0,th,ah,fu)}function hu(n,e,t,i,r){if(!as(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=uh(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function it(n){return n&&it(n.__v_raw)||n}function pa(n){return!!(n&&n.__v_isRef===!0)}Yt("nextTick",()=>yo);Yt("dispatch",n=>Qi.bind(Qi,n));Yt("watch",(n,{evaluateLater:e,cleanup:t})=>(i,r)=>{let s=e(i),o=cc(()=>{let l;return s(c=>l=c),l},r);t(o)});Yt("store",Td);Yt("data",n=>gc(n));Yt("root",n=>ns(n));Yt("refs",n=>(n._x_refs_proxy||(n._x_refs_proxy=ni(fh(n))),n._x_refs_proxy));function fh(n){let e=[];return ri(n,t=>{t._x_refs&&e.push(t._x_refs)}),e}var Ss={};function pu(n){return Ss[n]||(Ss[n]=0),++Ss[n]}function dh(n,e){return ri(n,t=>{if(t._x_ids&&t._x_ids[e])return!0})}function hh(n,e){n._x_ids||(n._x_ids={}),n._x_ids[e]||(n._x_ids[e]=pu(e))}Yt("id",(n,{cleanup:e})=>(t,i=null)=>{let r=`${t}${i?`-${i}`:""}`;return ph(n,r,e,()=>{let s=dh(n,t),a=s?s._x_ids[t]:pu(t);return i?`${t}-${a}-${i}`:`${t}-${a}`})});rs((n,e)=>{n._x_id&&(e._x_id=n._x_id)});function ph(n,e,t,i){if(n._x_id||(n._x_id={}),n._x_id[e])return n._x_id[e];let r=i();return n._x_id[e]=r,t(()=>{delete n._x_id[e]}),r}Yt("el",n=>n);mu("Focus","focus","focus");mu("Persist","persist","persist");function mu(n,e,t){Yt(e,i=>Vt(`You can't use [$${e}] without first installing the "${n}" plugin here: https://alpinejs.dev/plugins/${t}`,i))}ht("modelable",(n,{expression:e},{effect:t,evaluateLater:i,cleanup:r})=>{let s=i(e),a=()=>{let u;return s(d=>u=d),u},o=i(`${e} = __placeholder`),l=u=>o(()=>{},{scope:{__placeholder:u}}),c=a();l(c),queueMicrotask(()=>{if(!n._x_model)return;n._x_removeModelListeners.default();let u=n._x_model.get,d=n._x_model.set,p=Zc({get(){return u()},set(_){d(_)}},{get(){return a()},set(_){l(_)}});r(p)})});ht("teleport",(n,{modifiers:e,expression:t},{cleanup:i})=>{n.tagName.toLowerCase()!=="template"&&Vt("x-teleport can only be used on a <template> tag",n);let r=ll(t),s=n.content.cloneNode(!0).firstElementChild;n._x_teleport=s,s._x_teleportBack=n,n.setAttribute("data-teleport-template",!0),s.setAttribute("data-teleport-target",!0),n._x_forwardEvents&&n._x_forwardEvents.forEach(o=>{s.addEventListener(o,l=>{l.stopPropagation(),n.dispatchEvent(new l.constructor(l.type,l))})}),lr(s,{},n);let a=(o,l,c)=>{c.includes("prepend")?l.parentNode.insertBefore(o,l):c.includes("append")?l.parentNode.insertBefore(o,l.nextSibling):l.appendChild(o)};st(()=>{a(s,r,e),Nn(()=>{gn(s)})()}),n._x_teleportPutBack=()=>{let o=ll(t);st(()=>{a(n._x_teleport,o,e)})},i(()=>st(()=>{s.remove(),Ni(s)}))});var mh=document.createElement("div");function ll(n){let e=Nn(()=>document.querySelector(n),()=>mh)();return e||Vt(`Cannot find x-teleport element for selector: "${n}"`),e}var _u=()=>{};_u.inline=(n,{modifiers:e},{cleanup:t})=>{e.includes("self")?n._x_ignoreSelf=!0:n._x_ignore=!0,t(()=>{e.includes("self")?delete n._x_ignoreSelf:delete n._x_ignore})};ht("ignore",_u);ht("effect",Nn((n,{expression:e},{effect:t})=>{t(bt(n,e))}));function Ei(n,e,t,i){let r=n,s=l=>i(l),a={},o=(l,c)=>u=>c(l,u);if(t.includes("dot")&&(e=_h(e)),t.includes("camel")&&(e=gh(e)),t.includes("passive")&&(a.passive=!0),t.includes("capture")&&(a.capture=!0),t.includes("window")&&(r=window),t.includes("document")&&(r=document),t.includes("debounce")){let l=t[t.indexOf("debounce")+1]||"invalid-wait",c=Zr(l.split("ms")[0])?Number(l.split("ms")[0]):250;s=Kc(s,c)}if(t.includes("throttle")){let l=t[t.indexOf("throttle")+1]||"invalid-wait",c=Zr(l.split("ms")[0])?Number(l.split("ms")[0]):250;s=jc(s,c)}return t.includes("prevent")&&(s=o(s,(l,c)=>{c.preventDefault(),l(c)})),t.includes("stop")&&(s=o(s,(l,c)=>{c.stopPropagation(),l(c)})),t.includes("once")&&(s=o(s,(l,c)=>{l(c),r.removeEventListener(e,s,a)})),(t.includes("away")||t.includes("outside"))&&(r=document,s=o(s,(l,c)=>{n.contains(c.target)||c.target.isConnected!==!1&&(n.offsetWidth<1&&n.offsetHeight<1||n._x_isShown!==!1&&l(c))})),t.includes("self")&&(s=o(s,(l,c)=>{c.target===n&&l(c)})),e==="submit"&&(s=o(s,(l,c)=>{c.target._x_pendingModelUpdates&&c.target._x_pendingModelUpdates.forEach(u=>u()),l(c)})),(vh(e)||gu(e))&&(s=o(s,(l,c)=>{Sh(c,t)||l(c)})),r.addEventListener(e,s,a),()=>{r.removeEventListener(e,s,a)}}function _h(n){return n.replace(/-/g,".")}function gh(n){return n.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function Zr(n){return!Array.isArray(n)&&!isNaN(n)}function xh(n){return[" ","_"].includes(n)?n:n.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function vh(n){return["keydown","keyup"].includes(n)}function gu(n){return["contextmenu","click","mouse"].some(e=>n.includes(e))}function Sh(n,e){let t=e.filter(s=>!["window","document","prevent","stop","once","capture","self","away","outside","passive","preserve-scroll","blur","change","lazy"].includes(s));if(t.includes("debounce")){let s=t.indexOf("debounce");t.splice(s,Zr((t[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(t.includes("throttle")){let s=t.indexOf("throttle");t.splice(s,Zr((t[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(t.length===0||t.length===1&&cl(n.key).includes(t[0]))return!1;const r=["ctrl","shift","alt","meta","cmd","super"].filter(s=>t.includes(s));return t=t.filter(s=>!r.includes(s)),!(r.length>0&&r.filter(a=>((a==="cmd"||a==="super")&&(a="meta"),n[`${a}Key`])).length===r.length&&(gu(n.type)||cl(n.key).includes(t[0])))}function cl(n){if(!n)return[];n=xh(n);let e={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return e[n]=n,Object.keys(e).map(t=>{if(e[t]===n)return t}).filter(t=>t)}ht("model",(n,{modifiers:e,expression:t},{effect:i,cleanup:r})=>{let s=n;e.includes("parent")&&(s=n.parentNode);let a=bt(s,t),o;typeof t=="string"?o=bt(s,`${t} = __placeholder`):typeof t=="function"&&typeof t()=="string"?o=bt(s,`${t()} = __placeholder`):o=()=>{};let l=()=>{let S;return a(h=>S=h),ul(S)?S.get():S},c=S=>{let h;a(f=>h=f),ul(h)?h.set(S):o(()=>{},{scope:{__placeholder:S}})};typeof t=="string"&&n.type==="radio"&&st(()=>{n.hasAttribute("name")||n.setAttribute("name",t)});let u=e.includes("change")||e.includes("lazy"),d=e.includes("blur"),p=e.includes("enter"),_=u||d||p,x;if(Ln)x=()=>{};else if(_){let S=[],h=f=>c(Sr(n,e,f,l()));if(u&&S.push(Ei(n,"change",e,h)),d&&(S.push(Ei(n,"blur",e,h)),n.form)){let f=()=>h({target:n});n.form._x_pendingModelUpdates||(n.form._x_pendingModelUpdates=[]),n.form._x_pendingModelUpdates.push(f),r(()=>n.form._x_pendingModelUpdates.splice(n.form._x_pendingModelUpdates.indexOf(f),1))}p&&S.push(Ei(n,"keydown",e,f=>{f.key==="Enter"&&h(f)})),x=()=>S.forEach(f=>f())}else{let S=n.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(n.type)?"change":"input";x=Ei(n,S,e,h=>{c(Sr(n,e,h,l()))})}if(e.includes("fill")&&([void 0,null,""].includes(l())||To(n)&&Array.isArray(l())||n.tagName.toLowerCase()==="select"&&n.multiple)&&c(Sr(n,e,{target:n},l())),n._x_removeModelListeners||(n._x_removeModelListeners={}),n._x_removeModelListeners.default=x,r(()=>n._x_removeModelListeners.default()),n.form){let S=Ei(n.form,"reset",[],h=>{yo(()=>n._x_model&&n._x_model.set(Sr(n,e,{target:n},l())))});r(()=>S())}n._x_model={get(){return l()},set(S){c(S)}},n._x_forceModelUpdate=S=>{S===void 0&&typeof t=="string"&&t.match(/\./)&&(S=""),window.fromModel=!0,st(()=>Wc(n,"value",S)),delete window.fromModel},i(()=>{let S=l();e.includes("unintrusive")&&document.activeElement.isSameNode(n)||n._x_forceModelUpdate(S)})});function Sr(n,e,t,i){return st(()=>{if(t instanceof CustomEvent&&t.detail!==void 0)return t.detail!==null&&t.detail!==void 0?t.detail:t.target.value;if(To(n))if(Array.isArray(i)){let r=null;return e.includes("number")?r=Ms(t.target.value):e.includes("boolean")?r=Hr(t.target.value):r=t.target.value,t.target.checked?i.includes(r)?i:i.concat([r]):i.filter(s=>!Mh(s,r))}else return t.target.checked;else{if(n.tagName.toLowerCase()==="select"&&n.multiple)return e.includes("number")?Array.from(t.target.selectedOptions).map(r=>{let s=r.value||r.text;return Ms(s)}):e.includes("boolean")?Array.from(t.target.selectedOptions).map(r=>{let s=r.value||r.text;return Hr(s)}):Array.from(t.target.selectedOptions).map(r=>r.value||r.text);{let r;return $c(n)?t.target.checked?r=t.target.value:r=i:r=t.target.value,e.includes("number")?Ms(r):e.includes("boolean")?Hr(r):e.includes("trim")?r.trim():r}}})}function Ms(n){let e=n?parseFloat(n):null;return Eh(e)?e:n}function Mh(n,e){return n==e}function Eh(n){return!Array.isArray(n)&&!isNaN(n)}function ul(n){return n!==null&&typeof n=="object"&&typeof n.get=="function"&&typeof n.set=="function"}ht("cloak",n=>queueMicrotask(()=>st(()=>n.removeAttribute(Ui("cloak")))));Bc(()=>`[${Ui("init")}]`);ht("init",Nn((n,{expression:e},{evaluate:t})=>typeof e=="string"?!!e.trim()&&t(e,{},!1):t(e,{},!1)));ht("text",(n,{expression:e},{effect:t,evaluateLater:i})=>{let r=i(e);t(()=>{r(s=>{st(()=>{n.textContent=s})})})});ht("html",(n,{expression:e},{effect:t,evaluateLater:i})=>{let r=i(e);t(()=>{r(s=>{st(()=>{n.innerHTML=s,n._x_ignoreSelf=!0,gn(n),delete n._x_ignoreSelf})})})});So(Rc(":",Cc(Ui("bind:"))));var xu=(n,{value:e,modifiers:t,expression:i,original:r},{effect:s,cleanup:a})=>{if(!e){let l={};wd(l),bt(n,i)(u=>{Qc(n,u,r)},{scope:l});return}if(e==="key")return yh(n,i);if(n._x_inlineBindings&&n._x_inlineBindings[e]&&n._x_inlineBindings[e].extract)return;let o=bt(n,i);s(()=>o(l=>{l===void 0&&typeof i=="string"&&i.match(/\./)&&(l=""),st(()=>Wc(n,e,l,t))})),a(()=>{n._x_undoAddedClasses&&n._x_undoAddedClasses(),n._x_undoAddedStyles&&n._x_undoAddedStyles()})};xu.inline=(n,{value:e,modifiers:t,expression:i})=>{e&&(n._x_inlineBindings||(n._x_inlineBindings={}),n._x_inlineBindings[e]={expression:i,extract:!1})};ht("bind",xu);function yh(n,e){n._x_keyExpression=e}Oc(()=>`[${Ui("data")}]`);ht("data",(n,{expression:e},{cleanup:t})=>{if(bh(n))return;e=e===""?"{}":e;let i={};tr(i,n);let r={};Cd(r,i);let s=Jn(n,e,{scope:r});(s===void 0||s===!0)&&(s={}),tr(s,n);let a=Li(s);go(a);let o=lr(n,a);a.init&&Jn(n,a.init),t(()=>{a.destroy&&Jn(n,a.destroy),o()})});rs((n,e)=>{n._x_dataStack&&(e._x_dataStack=n._x_dataStack,e.setAttribute("data-has-alpine-state",!0))});function bh(n){return Ln?fa?!0:n.hasAttribute("data-has-alpine-state"):!1}ht("show",(n,{modifiers:e,expression:t},{effect:i})=>{let r=bt(n,t);n._x_doHide||(n._x_doHide=()=>{st(()=>{n.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),n._x_doShow||(n._x_doShow=()=>{st(()=>{n.style.length===1&&n.style.display==="none"?n.removeAttribute("style"):n.style.removeProperty("display")})});let s=()=>{n._x_doHide(),n._x_isShown=!1},a=()=>{n._x_doShow(),n._x_isShown=!0},o=()=>setTimeout(a),l=ca(d=>d?a():s(),d=>{typeof n._x_toggleAndCascadeWithTransitions=="function"?n._x_toggleAndCascadeWithTransitions(n,d,a,s):d?o():s()}),c,u=!0;i(()=>r(d=>{!u&&d===c||(e.includes("immediate")&&(d?o():s()),l(d),c=d,u=!1)}))});ht("for",(n,{expression:e},{effect:t,cleanup:i})=>{let r=Ah(e),s=bt(n,r.items),a=bt(n,n._x_keyExpression||"index");n._x_prevKeys=[],n._x_lookup={},t(()=>Th(n,r,s,a)),i(()=>{Object.values(n._x_lookup).forEach(o=>st(()=>{Ni(o),o.remove()})),delete n._x_prevKeys,delete n._x_lookup})});function Th(n,e,t,i){let r=a=>typeof a=="object"&&!Array.isArray(a),s=n;t(a=>{wh(a)&&a>=0&&(a=Array.from(Array(a).keys(),h=>h+1)),a===void 0&&(a=[]);let o=n._x_lookup,l=n._x_prevKeys,c=[],u=[];if(r(a))a=Object.entries(a).map(([h,f])=>{let y=fl(e,f,h,a);i(T=>{u.includes(T)&&Vt("Duplicate key on x-for",n),u.push(T)},{scope:{index:h,...y}}),c.push(y)});else for(let h=0;h<a.length;h++){let f=fl(e,a[h],h,a);i(y=>{u.includes(y)&&Vt("Duplicate key on x-for",n),u.push(y)},{scope:{index:h,...f}}),c.push(f)}let d=[],p=[],_=[],x=[];for(let h=0;h<l.length;h++){let f=l[h];u.indexOf(f)===-1&&_.push(f)}l=l.filter(h=>!_.includes(h));let S="template";for(let h=0;h<u.length;h++){let f=u[h],y=l.indexOf(f);if(y===-1)l.splice(h,0,f),d.push([S,h]);else if(y!==h){let T=l.splice(h,1)[0],b=l.splice(y-1,1)[0];l.splice(h,0,b),l.splice(y,0,T),p.push([T,b])}else x.push(f);S=f}for(let h=0;h<_.length;h++){let f=_[h];f in o&&(st(()=>{Ni(o[f]),o[f].remove()}),delete o[f])}for(let h=0;h<p.length;h++){let[f,y]=p[h],T=o[f],b=o[y],A=document.createElement("div");st(()=>{b||Vt('x-for ":key" is undefined or invalid',s,y,o),b.after(A),T.after(b),b._x_currentIfEl&&b.after(b._x_currentIfEl),A.before(T),T._x_currentIfEl&&T.after(T._x_currentIfEl),A.remove()}),b._x_refreshXForScope(c[u.indexOf(y)])}for(let h=0;h<d.length;h++){let[f,y]=d[h],T=f==="template"?s:o[f];T._x_currentIfEl&&(T=T._x_currentIfEl);let b=c[y],A=u[y],w=document.importNode(s.content,!0).firstElementChild,C=Li(b);lr(w,C,s),w._x_refreshXForScope=N=>{Object.entries(N).forEach(([v,M])=>{C[v]=M})},st(()=>{T.after(w),Nn(()=>gn(w))()}),typeof A=="object"&&Vt("x-for key cannot be an object, it must be a string or an integer",s),o[A]=w}for(let h=0;h<x.length;h++)o[x[h]]._x_refreshXForScope(c[u.indexOf(x[h])]);s._x_prevKeys=u})}function Ah(n){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,t=/^\s*\(|\)\s*$/g,i=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,r=n.match(i);if(!r)return;let s={};s.items=r[2].trim();let a=r[1].replace(t,"").trim(),o=a.match(e);return o?(s.item=a.replace(e,"").trim(),s.index=o[1].trim(),o[2]&&(s.collection=o[2].trim())):s.item=a,s}function fl(n,e,t,i){let r={};return/^\[.*\]$/.test(n.item)&&Array.isArray(e)?n.item.replace("[","").replace("]","").split(",").map(a=>a.trim()).forEach((a,o)=>{r[a]=e[o]}):/^\{.*\}$/.test(n.item)&&!Array.isArray(e)&&typeof e=="object"?n.item.replace("{","").replace("}","").split(",").map(a=>a.trim()).forEach(a=>{r[a]=e[a]}):r[n.item]=e,n.index&&(r[n.index]=t),n.collection&&(r[n.collection]=i),r}function wh(n){return!Array.isArray(n)&&!isNaN(n)}function vu(){}vu.inline=(n,{expression:e},{cleanup:t})=>{let i=ns(n);i._x_refs||(i._x_refs={}),i._x_refs[e]=n,t(()=>delete i._x_refs[e])};ht("ref",vu);ht("if",(n,{expression:e},{effect:t,cleanup:i})=>{n.tagName.toLowerCase()!=="template"&&Vt("x-if can only be used on a <template> tag",n);let r=bt(n,e),s=()=>{if(n._x_currentIfEl)return n._x_currentIfEl;let o=n.content.cloneNode(!0).firstElementChild;return lr(o,{},n),st(()=>{n.after(o),Nn(()=>gn(o))()}),n._x_currentIfEl=o,n._x_undoIf=()=>{st(()=>{Ni(o),o.remove()}),delete n._x_currentIfEl},o},a=()=>{n._x_undoIf&&(n._x_undoIf(),delete n._x_undoIf)};t(()=>r(o=>{o?s():a()})),i(()=>n._x_undoIf&&n._x_undoIf())});ht("id",(n,{expression:e},{evaluate:t})=>{t(e).forEach(r=>hh(n,r))});rs((n,e)=>{n._x_ids&&(e._x_ids=n._x_ids)});So(Rc("@",Cc(Ui("on:"))));ht("on",Nn((n,{value:e,modifiers:t,expression:i},{cleanup:r})=>{let s=i?bt(n,i):()=>{};n.tagName.toLowerCase()==="template"&&(n._x_forwardEvents||(n._x_forwardEvents=[]),n._x_forwardEvents.includes(e)||n._x_forwardEvents.push(e));let a=Ei(n,e,t,o=>{s(()=>{},{scope:{$event:o},params:[o]})});r(()=>a())}));ls("Collapse","collapse","collapse");ls("Intersect","intersect","intersect");ls("Focus","trap","focus");ls("Mask","mask","mask");function ls(n,e,t){ht(e,i=>Vt(`You can't use [x-${e}] without first installing the "${n}" plugin here: https://alpinejs.dev/plugins/${t}`,i))}Fi.setEvaluator(bc);Fi.setRawEvaluator(Gf);Fi.setReactivityEngine({reactive:Lo,effect:zd,release:Vd,raw:it});var Rh=Fi,Su=Rh;const Io="182",Ch=0,dl=1,Ph=2,kr=1,Dh=2,Zi=3,Un=0,Ct=1,dn=2,pn=0,bi=1,hl=2,pl=3,ml=4,Lh=5,qn=100,Ih=101,Uh=102,Nh=103,Fh=104,Oh=200,Bh=201,zh=202,Vh=203,ma=204,_a=205,Gh=206,Hh=207,kh=208,Wh=209,Xh=210,qh=211,Yh=212,$h=213,Kh=214,ga=0,xa=1,va=2,wi=3,Sa=4,Ma=5,Ea=6,ya=7,Mu=0,jh=1,Zh=2,en=0,Eu=1,yu=2,bu=3,Tu=4,Au=5,wu=6,Ru=7,Cu=300,si=301,Ri=302,ba=303,Ta=304,cs=306,Aa=1e3,hn=1001,wa=1002,xt=1003,Jh=1004,Mr=1005,Mt=1006,Es=1007,Kn=1008,zt=1009,Pu=1010,Du=1011,rr=1012,Uo=1013,rn=1014,Jt=1015,xn=1016,No=1017,Fo=1018,sr=1020,Lu=35902,Iu=35899,Uu=1021,Nu=1022,Xt=1023,vn=1026,jn=1027,Fu=1028,Oo=1029,Ci=1030,Bo=1031,zo=1033,Wr=33776,Xr=33777,qr=33778,Yr=33779,Ra=35840,Ca=35841,Pa=35842,Da=35843,La=36196,Ia=37492,Ua=37496,Na=37488,Fa=37489,Oa=37490,Ba=37491,za=37808,Va=37809,Ga=37810,Ha=37811,ka=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,$a=37817,Ka=37818,ja=37819,Za=37820,Ja=37821,Qa=36492,eo=36494,to=36495,no=36283,io=36284,ro=36285,so=36286,Qh=3200,ep=0,tp=1,Pn="",Ot="srgb",Pi="srgb-linear",Jr="linear",Ye="srgb",li=7680,_l=519,np=512,ip=513,rp=514,Vo=515,sp=516,ap=517,Go=518,op=519,gl=35044,xl="300 es",Qt=2e3,Qr=2001;function Ou(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function es(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lp(){const n=es("canvas");return n.style.display="block",n}const vl={};function Sl(...n){const e="THREE."+n.shift();console.log(e,...n)}function Re(...n){const e="THREE."+n.shift();console.warn(e,...n)}function He(...n){const e="THREE."+n.shift();console.error(e,...n)}function ar(...n){const e=n.join(" ");e in vl||(vl[e]=!0,Re(...n))}function cp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ys=Math.PI/180,ao=180/Math.PI;function cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toLowerCase()}function Oe(n,e,t){return Math.max(e,Math.min(t,n))}function up(n,e){return(n%e+e)%e}function bs(n,e,t){return(1-t)*n+t*e}function ki(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],p=s[a+0],_=s[a+1],x=s[a+2],S=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o>=1){e[t+0]=p,e[t+1]=_,e[t+2]=x,e[t+3]=S;return}if(d!==S||l!==p||c!==_||u!==x){let h=l*p+c*_+u*x+d*S;h<0&&(p=-p,_=-_,x=-x,S=-S,h=-h);let f=1-o;if(h<.9995){const y=Math.acos(h),T=Math.sin(y);f=Math.sin(f*y)/T,o=Math.sin(o*y)/T,l=l*f+p*o,c=c*f+_*o,u=u*f+x*o,d=d*f+S*o}else{l=l*f+p*o,c=c*f+_*o,u=u*f+x*o,d=d*f+S*o;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],p=s[a+1],_=s[a+2],x=s[a+3];return e[t]=o*x+u*d+l*_-c*p,e[t+1]=l*x+u*p+c*d-o*_,e[t+2]=c*x+u*_+o*p-l*d,e[t+3]=u*x-o*d-l*p-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),p=l(i/2),_=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=p*u*d+c*_*x,this._y=c*_*d-p*u*x,this._z=c*u*x+p*_*d,this._w=c*u*d-p*_*x;break;case"YXZ":this._x=p*u*d+c*_*x,this._y=c*_*d-p*u*x,this._z=c*u*x-p*_*d,this._w=c*u*d+p*_*x;break;case"ZXY":this._x=p*u*d-c*_*x,this._y=c*_*d+p*u*x,this._z=c*u*x+p*_*d,this._w=c*u*d-p*_*x;break;case"ZYX":this._x=p*u*d-c*_*x,this._y=c*_*d+p*u*x,this._z=c*u*x-p*_*d,this._w=c*u*d+p*_*x;break;case"YZX":this._x=p*u*d+c*_*x,this._y=c*_*d+p*u*x,this._z=c*u*x-p*_*d,this._w=c*u*d-p*_*x;break;case"XZY":this._x=p*u*d-c*_*x,this._y=c*_*d-p*u*x,this._z=c*u*x+p*_*d,this._w=c*u*d+p*_*x;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=i+o+d;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(u-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(i>o&&i>d){const _=2*Math.sqrt(1+i-o-d);this._w=(u-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>d){const _=2*Math.sqrt(1+o-i-d);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+d-i-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ts.copy(this).projectOnVector(e),this.sub(Ts)}reflect(e){return this.sub(Ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ts=new O,Ml=new ur;class Pe{constructor(e,t,i,r,s,a,o,l,c){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],_=i[5],x=i[8],S=r[0],h=r[3],f=r[6],y=r[1],T=r[4],b=r[7],A=r[2],w=r[5],C=r[8];return s[0]=a*S+o*y+l*A,s[3]=a*h+o*T+l*w,s[6]=a*f+o*b+l*C,s[1]=c*S+u*y+d*A,s[4]=c*h+u*T+d*w,s[7]=c*f+u*b+d*C,s[2]=p*S+_*y+x*A,s[5]=p*h+_*T+x*w,s[8]=p*f+_*b+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,p=o*l-u*s,_=c*s-a*l,x=t*d+i*p+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=d*S,e[1]=(r*c-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=p*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=_*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(As.makeScale(e,t)),this}rotate(e){return this.premultiply(As.makeRotation(-e)),this}translate(e,t){return this.premultiply(As.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const As=new Pe,El=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yl=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fp(){const n={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ye&&(r.r=mn(r.r),r.g=mn(r.g),r.b=mn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ye&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pn?Jr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ar("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ar("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Pi]:{primaries:e,whitePoint:i,transfer:Jr,toXYZ:El,fromXYZ:yl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:i,transfer:Ye,toXYZ:El,fromXYZ:yl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),n}const ze=fp();function mn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ti(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ci;class dp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ci===void 0&&(ci=es("canvas")),ci.width=e.width,ci.height=e.height;const r=ci.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ci}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=es("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mn(t[i]/255)*255):t[i]=mn(t[i]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hp=0;class Ho{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ws(r[a].image)):s.push(ws(r[a]))}else s=ws(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ws(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let pp=0;const Rs=new O;class Tt extends Oi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,i=hn,r=hn,s=Mt,a=Kn,o=Xt,l=zt,c=Tt.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=cr(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rs).x}get height(){return this.source.getSize(Rs).y}get depth(){return this.source.getSize(Rs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Aa:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Aa:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Cu;Tt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],_=l[5],x=l[9],S=l[2],h=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-S)<.01&&Math.abs(x-h)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+S)<.1&&Math.abs(x+h)<.1&&Math.abs(c+_+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,b=(_+1)/2,A=(f+1)/2,w=(u+p)/4,C=(d+S)/4,N=(x+h)/4;return T>b&&T>A?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=w/i,s=C/i):b>A?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=w/r,s=N/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=N/s),this.set(i,r,s,t),this}let y=Math.sqrt((h-x)*(h-x)+(d-S)*(d-S)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(h-x)/y,this.y=(d-S)/y,this.z=(p-u)/y,this.w=Math.acos((c+_+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mp extends Oi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Tt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ho(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tn extends mp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bu extends Tt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _p extends Tt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gt):Gt.fromBufferAttribute(s,a),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Er.copy(i.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),yr.subVectors(this.max,Wi),ui.subVectors(e.a,Wi),fi.subVectors(e.b,Wi),di.subVectors(e.c,Wi),bn.subVectors(fi,ui),Tn.subVectors(di,fi),Bn.subVectors(ui,di);let t=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-Bn.z,Bn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,Bn.z,0,-Bn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-Bn.y,Bn.x,0];return!Cs(t,ui,fi,di,yr)||(t=[1,0,0,0,1,0,0,0,1],!Cs(t,ui,fi,di,yr))?!1:(br.crossVectors(bn,Tn),t=[br.x,br.y,br.z],Cs(t,ui,fi,di,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const on=[new O,new O,new O,new O,new O,new O,new O,new O],Gt=new O,Er=new fr,ui=new O,fi=new O,di=new O,bn=new O,Tn=new O,Bn=new O,Wi=new O,yr=new O,br=new O,zn=new O;function Cs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){zn.fromArray(n,s);const o=r.x*Math.abs(zn.x)+r.y*Math.abs(zn.y)+r.z*Math.abs(zn.z),l=e.dot(zn),c=t.dot(zn),u=i.dot(zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const gp=new fr,Xi=new O,Ps=new O;class ko{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):gp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ps.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(Ps)),this.expandByPoint(Xi.copy(e.center).sub(Ps))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ln=new O,Ds=new O,Tr=new O,An=new O,Ls=new O,Ar=new O,Is=new O;class xp{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ds.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),An.copy(this.origin).sub(Ds);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Tr),o=An.dot(this.direction),l=-An.dot(Tr),c=An.lengthSq(),u=Math.abs(1-a*a);let d,p,_,x;if(u>0)if(d=a*l-o,p=a*o-l,x=s*u,d>=0)if(p>=-x)if(p<=x){const S=1/u;d*=S,p*=S,_=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=s,d=Math.max(0,-(a*p+o)),_=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(a*p+o)),_=-d*d+p*(p+2*l)+c;else p<=-x?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-l),s),_=-d*d+p*(p+2*l)+c):p<=x?(d=0,p=Math.min(Math.max(-s,-l),s),_=p*(p+2*l)+c):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-l),s),_=-d*d+p*(p+2*l)+c);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),_=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ds).addScaledVector(Tr,p),_}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const i=ln.dot(this.direction),r=ln.dot(ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,i,r,s){Ls.subVectors(t,e),Ar.subVectors(i,e),Is.crossVectors(Ls,Ar);let a=this.direction.dot(Is),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const l=o*this.direction.dot(Ar.crossVectors(An,Ar));if(l<0)return null;const c=o*this.direction.dot(Ls.cross(An));if(c<0||l+c>a)return null;const u=-o*An.dot(Is);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,s,a,o,l,c,u,d,p,_,x,S,h){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,p,_,x,S,h)}set(e,t,i,r,s,a,o,l,c,u,d,p,_,x,S,h){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=p,f[3]=_,f[7]=x,f[11]=S,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/hi.setFromMatrixColumn(e,0).length(),s=1/hi.setFromMatrixColumn(e,1).length(),a=1/hi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=a*u,_=a*d,x=o*u,S=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=_+x*c,t[5]=p-S*c,t[9]=-o*l,t[2]=S-p*c,t[6]=x+_*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*u,_=l*d,x=c*u,S=c*d;t[0]=p+S*o,t[4]=x*o-_,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=_*o-x,t[6]=S+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*u,_=l*d,x=c*u,S=c*d;t[0]=p-S*o,t[4]=-a*d,t[8]=x+_*o,t[1]=_+x*o,t[5]=a*u,t[9]=S-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*u,_=a*d,x=o*u,S=o*d;t[0]=l*u,t[4]=x*c-_,t[8]=p*c+S,t[1]=l*d,t[5]=S*c+p,t[9]=_*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,_=a*c,x=o*l,S=o*c;t[0]=l*u,t[4]=S-p*d,t[8]=x*d+_,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=_*d+x,t[10]=p-S*d}else if(e.order==="XZY"){const p=a*l,_=a*c,x=o*l,S=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+S,t[5]=a*u,t[9]=_*d-x,t[2]=x*d-_,t[6]=o*u,t[10]=S*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vp,e,Sp)}lookAt(e,t,i){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),wn.crossVectors(i,Lt),wn.lengthSq()===0&&(Math.abs(i.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),wn.crossVectors(i,Lt)),wn.normalize(),wr.crossVectors(Lt,wn),r[0]=wn.x,r[4]=wr.x,r[8]=Lt.x,r[1]=wn.y,r[5]=wr.y,r[9]=Lt.y,r[2]=wn.z,r[6]=wr.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],_=i[13],x=i[2],S=i[6],h=i[10],f=i[14],y=i[3],T=i[7],b=i[11],A=i[15],w=r[0],C=r[4],N=r[8],v=r[12],M=r[1],D=r[5],G=r[9],V=r[13],Y=r[2],X=r[6],k=r[10],z=r[14],j=r[3],ue=r[7],ae=r[11],fe=r[15];return s[0]=a*w+o*M+l*Y+c*j,s[4]=a*C+o*D+l*X+c*ue,s[8]=a*N+o*G+l*k+c*ae,s[12]=a*v+o*V+l*z+c*fe,s[1]=u*w+d*M+p*Y+_*j,s[5]=u*C+d*D+p*X+_*ue,s[9]=u*N+d*G+p*k+_*ae,s[13]=u*v+d*V+p*z+_*fe,s[2]=x*w+S*M+h*Y+f*j,s[6]=x*C+S*D+h*X+f*ue,s[10]=x*N+S*G+h*k+f*ae,s[14]=x*v+S*V+h*z+f*fe,s[3]=y*w+T*M+b*Y+A*j,s[7]=y*C+T*D+b*X+A*ue,s[11]=y*N+T*G+b*k+A*ae,s[15]=y*v+T*V+b*z+A*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],_=e[14],x=e[3],S=e[7],h=e[11],f=e[15],y=l*_-c*p,T=o*_-c*d,b=o*p-l*d,A=a*_-c*u,w=a*p-l*u,C=a*d-o*u;return t*(S*y-h*T+f*b)-i*(x*y-h*A+f*w)+r*(x*T-S*A+f*C)-s*(x*b-S*w+h*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],_=e[11],x=e[12],S=e[13],h=e[14],f=e[15],y=d*h*c-S*p*c+S*l*_-o*h*_-d*l*f+o*p*f,T=x*p*c-u*h*c-x*l*_+a*h*_+u*l*f-a*p*f,b=u*S*c-x*d*c+x*o*_-a*S*_-u*o*f+a*d*f,A=x*d*l-u*S*l-x*o*p+a*S*p+u*o*h-a*d*h,w=t*y+i*T+r*b+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=y*C,e[1]=(S*p*s-d*h*s-S*r*_+i*h*_+d*r*f-i*p*f)*C,e[2]=(o*h*s-S*l*s+S*r*c-i*h*c-o*r*f+i*l*f)*C,e[3]=(d*l*s-o*p*s-d*r*c+i*p*c+o*r*_-i*l*_)*C,e[4]=T*C,e[5]=(u*h*s-x*p*s+x*r*_-t*h*_-u*r*f+t*p*f)*C,e[6]=(x*l*s-a*h*s-x*r*c+t*h*c+a*r*f-t*l*f)*C,e[7]=(a*p*s-u*l*s+u*r*c-t*p*c-a*r*_+t*l*_)*C,e[8]=b*C,e[9]=(x*d*s-u*S*s-x*i*_+t*S*_+u*i*f-t*d*f)*C,e[10]=(a*S*s-x*o*s+x*i*c-t*S*c-a*i*f+t*o*f)*C,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*_-t*o*_)*C,e[12]=A*C,e[13]=(u*S*r-x*d*r+x*i*p-t*S*p-u*i*h+t*d*h)*C,e[14]=(x*o*r-a*S*r-x*i*l+t*S*l+a*i*h-t*o*h)*C,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*p+t*o*p)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,p=s*c,_=s*u,x=s*d,S=a*u,h=a*d,f=o*d,y=l*c,T=l*u,b=l*d,A=i.x,w=i.y,C=i.z;return r[0]=(1-(S+f))*A,r[1]=(_+b)*A,r[2]=(x-T)*A,r[3]=0,r[4]=(_-b)*w,r[5]=(1-(p+f))*w,r[6]=(h+y)*w,r[7]=0,r[8]=(x+T)*C,r[9]=(h-y)*C,r[10]=(1-(p+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=hi.set(r[0],r[1],r[2]).length();const a=hi.set(r[4],r[5],r[6]).length(),o=hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Ht.copy(this);const c=1/s,u=1/a,d=1/o;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=d,Ht.elements[9]*=d,Ht.elements[10]*=d,t.setFromRotationMatrix(Ht),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Qt,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),p=(t+e)/(t-e),_=(i+r)/(i-r);let x,S;if(l)x=s/(a-s),S=a*s/(a-s);else if(o===Qt)x=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Qr)x=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Qt,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),p=-(t+e)/(t-e),_=-(i+r)/(i-r);let x,S;if(l)x=1/(a-s),S=a/(a-s);else if(o===Qt)x=-2/(a-s),S=-(a+s)/(a-s);else if(o===Qr)x=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hi=new O,Ht=new dt,vp=new O(0,0,0),Sp=new O(1,1,1),wn=new O,wr=new O,Lt=new O,bl=new dt,Tl=new ur;class Sn{constructor(e=0,t=0,i=0,r=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mp=0;const Al=new O,pi=new ur,cn=new dt,Rr=new O,qi=new O,Ep=new O,yp=new ur,wl=new O(1,0,0),Rl=new O(0,1,0),Cl=new O(0,0,1),Pl={type:"added"},bp={type:"removed"},mi={type:"childadded",child:null},Us={type:"childremoved",child:null};class Ut extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new O,t=new Sn,i=new ur,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Pe}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(wl,e)}rotateY(e){return this.rotateOnAxis(Rl,e)}rotateZ(e){return this.rotateOnAxis(Cl,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wl,e)}translateY(e){return this.translateOnAxis(Rl,e)}translateZ(e){return this.translateOnAxis(Cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rr.copy(e):Rr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(qi,Rr,this.up):cn.lookAt(Rr,qi,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),pi.setFromRotationMatrix(cn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pl),mi.child=e,this.dispatchEvent(mi),mi.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bp),Us.child=e,this.dispatchEvent(Us),Us.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pl),mi.child=e,this.dispatchEvent(mi),mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),p=a(e.skeletons),_=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),_.length>0&&(i.animations=_),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new O(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kt=new O,un=new O,Ns=new O,fn=new O,_i=new O,gi=new O,Dl=new O,Fs=new O,Os=new O,Bs=new O,zs=new lt,Vs=new lt,Gs=new lt;class Wt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kt.subVectors(e,t),r.cross(kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kt.subVectors(r,t),un.subVectors(i,t),Ns.subVectors(e,t);const a=kt.dot(kt),o=kt.dot(un),l=kt.dot(Ns),c=un.dot(un),u=un.dot(Ns),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,_=(c*l-o*u)*p,x=(a*u-o*l)*p;return s.set(1-_-x,x,_)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return zs.setScalar(0),Vs.setScalar(0),Gs.setScalar(0),zs.fromBufferAttribute(e,t),Vs.fromBufferAttribute(e,i),Gs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(zs,s.x),a.addScaledVector(Vs,s.y),a.addScaledVector(Gs,s.z),a}static isFrontFacing(e,t,i,r){return kt.subVectors(i,t),un.subVectors(e,t),kt.cross(un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),kt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;_i.subVectors(r,i),gi.subVectors(s,i),Fs.subVectors(e,i);const l=_i.dot(Fs),c=gi.dot(Fs);if(l<=0&&c<=0)return t.copy(i);Os.subVectors(e,r);const u=_i.dot(Os),d=gi.dot(Os);if(u>=0&&d<=u)return t.copy(r);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(_i,a);Bs.subVectors(e,s);const _=_i.dot(Bs),x=gi.dot(Bs);if(x>=0&&_<=x)return t.copy(s);const S=_*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(gi,o);const h=u*x-_*d;if(h<=0&&d-u>=0&&_-x>=0)return Dl.subVectors(s,r),o=(d-u)/(d-u+(_-x)),t.copy(r).addScaledVector(Dl,o);const f=1/(h+S+p);return a=S*f,o=p*f,t.copy(i).addScaledVector(_i,a).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Hs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ze.workingColorSpace){if(e=up(e,1),t=Oe(t,0,1),i=Oe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Hs(a,s,e+1/3),this.g=Hs(a,s,e),this.b=Hs(a,s,e-1/3)}return ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const i=Vu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return ze.workingToColorSpace(St.copy(this),e),Math.round(Oe(St.r*255,0,255))*65536+Math.round(Oe(St.g*255,0,255))*256+Math.round(Oe(St.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(St.copy(this),t);const i=St.r,r=St.g,s=St.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Ot){ze.workingToColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(Cr);const i=bs(Rn.h,Cr.h,t),r=bs(Rn.s,Cr.s,t),s=bs(Rn.l,Cr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new $e;$e.NAMES=Vu;let Tp=0;class us extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=bi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=_a,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(i.blending=this.blending),this.side!==Un&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ma&&(i.blendSrc=this.blendSrc),this.blendDst!==_a&&(i.blendDst=this.blendDst),this.blendEquation!==qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gu extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new O,Pr=new je;let Ap=0;class nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ap++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gl,this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gl&&(e.usage=this.usage),e}}class Hu extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ku extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _n extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wp=0;const Ft=new dt,ks=new Ut,xi=new O,It=new fr,Yi=new fr,gt=new O;class En extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?ku:Hu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Pe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,i){return Ft.makeTranslation(e,t,i),this.applyMatrix4(Ft),this}scale(e,t,i){return Ft.makeScale(e,t,i),this.applyMatrix4(Ft),this}lookAt(e){return ks.lookAt(e),ks.updateMatrix(),this.applyMatrix4(ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _n(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];It.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(It.min,Yi.min),It.expandByPoint(gt),gt.addVectors(It.max,Yi.max),It.expandByPoint(gt)):(It.expandByPoint(Yi.min),It.expandByPoint(Yi.max))}It.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gt.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(e,c),gt.add(xi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new O,l[N]=new O;const c=new O,u=new O,d=new O,p=new je,_=new je,x=new je,S=new O,h=new O;function f(N,v,M){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,v),d.fromBufferAttribute(i,M),p.fromBufferAttribute(s,N),_.fromBufferAttribute(s,v),x.fromBufferAttribute(s,M),u.sub(c),d.sub(c),_.sub(p),x.sub(p);const D=1/(_.x*x.y-x.x*_.y);isFinite(D)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(d,-_.y).multiplyScalar(D),h.copy(d).multiplyScalar(_.x).addScaledVector(u,-x.x).multiplyScalar(D),o[N].add(S),o[v].add(S),o[M].add(S),l[N].add(h),l[v].add(h),l[M].add(h))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,v=y.length;N<v;++N){const M=y[N],D=M.start,G=M.count;for(let V=D,Y=D+G;V<Y;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new O,b=new O,A=new O,w=new O;function C(N){A.fromBufferAttribute(r,N),w.copy(A);const v=o[N];T.copy(v),T.sub(A.multiplyScalar(A.dot(v))).normalize(),b.crossVectors(w,v);const D=b.dot(l[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,D)}for(let N=0,v=y.length;N<v;++N){const M=y[N],D=M.start,G=M.count;for(let V=D,Y=D+G;V<Y;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,_=i.count;p<_;p++)i.setXYZ(p,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let p=0,_=e.count;p<_;p+=3){const x=e.getX(p+0),S=e.getX(p+1),h=e.getX(p+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,h),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,h),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let p=0,_=t.count;p<_;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u);let _=0,x=0;for(let S=0,h=l.length;S<h;S++){o.isInterleavedBufferAttribute?_=l[S]*o.data.stride+o.offset:_=l[S]*u;for(let f=0;f<u;f++)p[x++]=c[_++]}return new nn(p,u,d)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],_=e(p,i);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const _=c[d];u.push(_.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let p=0,_=d.length;p<_;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ll=new dt,Vn=new xp,Dr=new ko,Il=new O,Lr=new O,Ir=new O,Ur=new O,Ws=new O,Nr=new O,Ul=new O,Fr=new O;class Mn extends Ut{constructor(e=new En,t=new Gu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Nr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Ws.fromBufferAttribute(d,e),a?Nr.addScaledVector(Ws,u):Nr.addScaledVector(Ws.sub(t),u))}t.add(Nr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(s),Vn.copy(e.ray).recast(e.near),!(Dr.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Dr,Il)===null||Vn.origin.distanceToSquared(Il)>(e.far-e.near)**2))&&(Ll.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(Ll),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=p.length;x<S;x++){const h=p[x],f=a[h.materialIndex],y=Math.max(h.start,_.start),T=Math.min(o.count,Math.min(h.start+h.count,_.start+_.count));for(let b=y,A=T;b<A;b+=3){const w=o.getX(b),C=o.getX(b+1),N=o.getX(b+2);r=Or(this,f,e,i,c,u,d,w,C,N),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const x=Math.max(0,_.start),S=Math.min(o.count,_.start+_.count);for(let h=x,f=S;h<f;h+=3){const y=o.getX(h),T=o.getX(h+1),b=o.getX(h+2);r=Or(this,a,e,i,c,u,d,y,T,b),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=p.length;x<S;x++){const h=p[x],f=a[h.materialIndex],y=Math.max(h.start,_.start),T=Math.min(l.count,Math.min(h.start+h.count,_.start+_.count));for(let b=y,A=T;b<A;b+=3){const w=b,C=b+1,N=b+2;r=Or(this,f,e,i,c,u,d,w,C,N),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const x=Math.max(0,_.start),S=Math.min(l.count,_.start+_.count);for(let h=x,f=S;h<f;h+=3){const y=h,T=h+1,b=h+2;r=Or(this,a,e,i,c,u,d,y,T,b),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function Rp(n,e,t,i,r,s,a,o){let l;if(e.side===Ct?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Un,o),l===null)return null;Fr.copy(o),Fr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Fr);return c<t.near||c>t.far?null:{distance:c,point:Fr.clone(),object:n}}function Or(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Lr),n.getVertexPosition(l,Ir),n.getVertexPosition(c,Ur);const u=Rp(n,e,t,i,Lr,Ir,Ur,Ul);if(u){const d=new O;Wt.getBarycoord(Ul,Lr,Ir,Ur,d),r&&(u.uv=Wt.getInterpolatedAttribute(r,o,l,c,d,new je)),s&&(u.uv1=Wt.getInterpolatedAttribute(s,o,l,c,d,new je)),a&&(u.normal=Wt.getInterpolatedAttribute(a,o,l,c,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new O,materialIndex:0};Wt.getNormal(Lr,Ir,Ur,p.normal),u.face=p,u.barycoord=d}return u}class dr extends En{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let p=0,_=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(d,2));function x(S,h,f,y,T,b,A,w,C,N,v){const M=b/C,D=A/N,G=b/2,V=A/2,Y=w/2,X=C+1,k=N+1;let z=0,j=0;const ue=new O;for(let ae=0;ae<k;ae++){const fe=ae*D-V;for(let Ne=0;Ne<X;Ne++){const Le=Ne*M-G;ue[S]=Le*y,ue[h]=fe*T,ue[f]=Y,c.push(ue.x,ue.y,ue.z),ue[S]=0,ue[h]=0,ue[f]=w>0?1:-1,u.push(ue.x,ue.y,ue.z),d.push(Ne/C),d.push(1-ae/N),z+=1}}for(let ae=0;ae<N;ae++)for(let fe=0;fe<C;fe++){const Ne=p+fe+X*ae,Le=p+fe+X*(ae+1),rt=p+(fe+1)+X*(ae+1),nt=p+(fe+1)+X*ae;l.push(Ne,Le,nt),l.push(Le,rt,nt),j+=6}o.addGroup(_,j,v),_+=j,p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yt(n){const e={};for(let t=0;t<n.length;t++){const i=Di(n[t]);for(const r in i)e[r]=i[r]}return e}function Cp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const Pp={clone:Di,merge:yt};var Dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xu extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new O,Nl=new je,Fl=new je;class Bt extends Xu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,Nl,Fl),t.subVectors(Fl,Nl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,Si=1;class Ip extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bt(vi,Si,e,t);r.layers=this.layers,this.add(r);const s=new Bt(vi,Si,e,t);s.layers=this.layers,this.add(s);const a=new Bt(vi,Si,e,t);a.layers=this.layers,this.add(a);const o=new Bt(vi,Si,e,t);o.layers=this.layers,this.add(o);const l=new Bt(vi,Si,e,t);l.layers=this.layers,this.add(l);const c=new Bt(vi,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Qt)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,_),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class qu extends Tt{constructor(e=[],t=si,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yu extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new qu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new dr(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ct,blending:pn});s.uniforms.tEquirect.value=t;const a=new Mn(r,s),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Mt),new Ip(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Br extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Up={type:"move"};class Xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const h=t.getJointPose(S,i),f=this._getHandJoint(c,S);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),_=.02,x=.005;c.inputState.pinching&&p>_+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=_-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Up)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Br;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Np extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fp extends Tt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=xt,u=xt,d,p){super(null,a,o,l,c,u,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qs=new O,Op=new O,Bp=new Pe;class Xn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=qs.subVectors(i,t).cross(Op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(qs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Bp.getNormalMatrix(e),r=this.coplanarPoint(qs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new ko,zp=new je(.5,.5),zr=new O;class $u{constructor(e=new Xn,t=new Xn,i=new Xn,r=new Xn,s=new Xn,a=new Xn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qt,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],p=s[6],_=s[7],x=s[8],S=s[9],h=s[10],f=s[11],y=s[12],T=s[13],b=s[14],A=s[15];if(r[0].setComponents(c-a,_-u,f-x,A-y).normalize(),r[1].setComponents(c+a,_+u,f+x,A+y).normalize(),r[2].setComponents(c+o,_+d,f+S,A+T).normalize(),r[3].setComponents(c-o,_-d,f-S,A-T).normalize(),i)r[4].setComponents(l,p,h,b).normalize(),r[5].setComponents(c-l,_-p,f-h,A-b).normalize();else if(r[4].setComponents(c-l,_-p,f-h,A-b).normalize(),t===Qt)r[5].setComponents(c+l,_+p,f+h,A+b).normalize();else if(t===Qr)r[5].setComponents(l,p,h,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){Gn.center.set(0,0,0);const t=zp.distanceTo(e.center);return Gn.radius=.7071067811865476+t,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class or extends Tt{constructor(e,t,i=rn,r,s,a,o=xt,l=xt,c,u=vn,d=1){if(u!==vn&&u!==jn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vp extends or{constructor(e,t=rn,i=si,r,s,a=xt,o=xt,l,c=vn){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ku extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fs extends En{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,p=t/l,_=[],x=[],S=[],h=[];for(let f=0;f<u;f++){const y=f*p-a;for(let T=0;T<c;T++){const b=T*d-s;x.push(b,-y,0),S.push(0,0,1),h.push(T/o),h.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const T=y+c*f,b=y+c*(f+1),A=y+1+c*(f+1),w=y+1+c*f;_.push(T,b,w),_.push(b,A,w)}this.setIndex(_),this.setAttribute("position",new _n(x,3)),this.setAttribute("normal",new _n(S,3)),this.setAttribute("uv",new _n(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gp extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hp extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kp extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ju extends Xu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wp extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ol(n,e,t,i){const r=Xp(i);switch(t){case Uu:return n*e;case Fu:return n*e/r.components*r.byteLength;case Oo:return n*e/r.components*r.byteLength;case Ci:return n*e*2/r.components*r.byteLength;case Bo:return n*e*2/r.components*r.byteLength;case Nu:return n*e*3/r.components*r.byteLength;case Xt:return n*e*4/r.components*r.byteLength;case zo:return n*e*4/r.components*r.byteLength;case Wr:case Xr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qr:case Yr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ca:case Da:return Math.max(n,16)*Math.max(e,8)/4;case Ra:case Pa:return Math.max(n,8)*Math.max(e,8)/2;case La:case Ia:case Na:case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Oa:case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ka:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Za:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qa:case eo:case to:return Math.ceil(n/4)*Math.ceil(e/4)*16;case no:case io:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ro:case so:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xp(n){switch(n){case zt:case Pu:return{byteLength:1,components:1};case rr:case Du:case xn:return{byteLength:2,components:1};case No:case Fo:return{byteLength:2,components:4};case rn:case Uo:case Jt:return{byteLength:4,components:1};case Lu:case Iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Io}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Io);const Ys={entrance:{id:"entrance",image:"/images/entrance/bunker.png",text:"A dim corridor stretches ahead.....The air is thick with dust",actions:[{label:" -> Step Forward",goto:"hallway"},{label:" -> Touch the wall",goto:"wall-discovery"}]}};Su.store("game",{currentScreen:null,inventory:[],visited:[],init(){this.currentScreen="entrance"},getScreen(){return Ys[this.currentScreen]},handleAction(n){n.goto&&this.goTo(n.goto),n.action&&this[n.action]?.(n)},goTo(n){if(!Ys[n]){console.warn('Screen "${screenID}" not found');return}this.currentScreen=n,this.enterScreen(n)},enterScreen(n){const e=Ys[n];this.visited.includes(n)||this.visited.push(n),e?.onEnter&&e.onEnter(this)}});function Zu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function qp(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),o.onUploadCallback();let _;if(c instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=n.SHORT;else if(c instanceof Uint32Array)_=n.UNSIGNED_INT;else if(c instanceof Int32Array)_=n.INT;else if(c instanceof Int8Array)_=n.BYTE;else if(c instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((_,x)=>_.start-x.start);let p=0;for(let _=1;_<d.length;_++){const x=d[p],S=d[_];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++p,d[p]=S)}d.length=p+1;for(let _=0,x=d.length;_<x;_++){const S=d[_];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,am=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,om=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_m=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",bm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,n_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,c_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,f_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,__=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,E_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,P_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,D_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,U_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,F_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,V_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,G_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,X_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Q_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Yp,alphahash_pars_fragment:$p,alphamap_fragment:Kp,alphamap_pars_fragment:jp,alphatest_fragment:Zp,alphatest_pars_fragment:Jp,aomap_fragment:Qp,aomap_pars_fragment:em,batching_pars_vertex:tm,batching_vertex:nm,begin_vertex:im,beginnormal_vertex:rm,bsdfs:sm,iridescence_fragment:am,bumpmap_pars_fragment:om,clipping_planes_fragment:lm,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:um,clipping_planes_vertex:fm,color_fragment:dm,color_pars_fragment:hm,color_pars_vertex:pm,color_vertex:mm,common:_m,cube_uv_reflection_fragment:gm,defaultnormal_vertex:xm,displacementmap_pars_vertex:vm,displacementmap_vertex:Sm,emissivemap_fragment:Mm,emissivemap_pars_fragment:Em,colorspace_fragment:ym,colorspace_pars_fragment:bm,envmap_fragment:Tm,envmap_common_pars_fragment:Am,envmap_pars_fragment:wm,envmap_pars_vertex:Rm,envmap_physical_pars_fragment:zm,envmap_vertex:Cm,fog_vertex:Pm,fog_pars_vertex:Dm,fog_fragment:Lm,fog_pars_fragment:Im,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Nm,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Om,lights_pars_begin:Bm,lights_toon_fragment:Vm,lights_toon_pars_fragment:Gm,lights_phong_fragment:Hm,lights_phong_pars_fragment:km,lights_physical_fragment:Wm,lights_physical_pars_fragment:Xm,lights_fragment_begin:qm,lights_fragment_maps:Ym,lights_fragment_end:$m,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Jm,map_fragment:Qm,map_pars_fragment:e_,map_particle_fragment:t_,map_particle_pars_fragment:n_,metalnessmap_fragment:i_,metalnessmap_pars_fragment:r_,morphinstance_vertex:s_,morphcolor_vertex:a_,morphnormal_vertex:o_,morphtarget_pars_vertex:l_,morphtarget_vertex:c_,normal_fragment_begin:u_,normal_fragment_maps:f_,normal_pars_fragment:d_,normal_pars_vertex:h_,normal_vertex:p_,normalmap_pars_fragment:m_,clearcoat_normal_fragment_begin:__,clearcoat_normal_fragment_maps:g_,clearcoat_pars_fragment:x_,iridescence_pars_fragment:v_,opaque_fragment:S_,packing:M_,premultiplied_alpha_fragment:E_,project_vertex:y_,dithering_fragment:b_,dithering_pars_fragment:T_,roughnessmap_fragment:A_,roughnessmap_pars_fragment:w_,shadowmap_pars_fragment:R_,shadowmap_pars_vertex:C_,shadowmap_vertex:P_,shadowmask_pars_fragment:D_,skinbase_vertex:L_,skinning_pars_vertex:I_,skinning_vertex:U_,skinnormal_vertex:N_,specularmap_fragment:F_,specularmap_pars_fragment:O_,tonemapping_fragment:B_,tonemapping_pars_fragment:z_,transmission_fragment:V_,transmission_pars_fragment:G_,uv_pars_fragment:H_,uv_pars_vertex:k_,uv_vertex:W_,worldpos_vertex:X_,background_vert:q_,background_frag:Y_,backgroundCube_vert:$_,backgroundCube_frag:K_,cube_vert:j_,cube_frag:Z_,depth_vert:J_,depth_frag:Q_,distance_vert:eg,distance_frag:tg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:rg,linedashed_frag:sg,meshbasic_vert:ag,meshbasic_frag:og,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:ug,meshmatcap_frag:fg,meshnormal_vert:dg,meshnormal_frag:hg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:_g,meshphysical_frag:gg,meshtoon_vert:xg,meshtoon_frag:vg,points_vert:Sg,points_frag:Mg,shadow_vert:Eg,shadow_frag:yg,sprite_vert:bg,sprite_frag:Tg},oe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Zt={basic:{uniforms:yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:yt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:yt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:yt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:yt([oe.points,oe.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:yt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:yt([oe.common,oe.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:yt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:yt([oe.sprite,oe.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:yt([oe.common,oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:yt([oe.lights,oe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Zt.physical={uniforms:yt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Vr={r:0,b:0,g:0},Hn=new Sn,Ag=new dt;function wg(n,e,t,i,r,s,a){const o=new $e(0);let l=s===!0?0:1,c,u,d=null,p=0,_=null;function x(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function S(T){let b=!1;const A=x(T);A===null?f(o,l):A&&A.isColor&&(f(A,1),b=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(T,b){const A=x(b);A&&(A.isCubeTexture||A.mapping===cs)?(u===void 0&&(u=new Mn(new dr(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Di(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hn.copy(b.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(Hn)),u.material.toneMapped=ze.getTransfer(A.colorSpace)!==Ye,(d!==A||p!==A.version||_!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,p=A.version,_=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Mn(new fs(2,2),new sn({name:"BackgroundMaterial",uniforms:Di(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ze.getTransfer(A.colorSpace)!==Ye,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||p!==A.version||_!==n.toneMapping)&&(c.material.needsUpdate=!0,d=A,p=A.version,_=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,b){T.getRGB(Vr,Wu(n)),i.buffers.color.setClear(Vr.r,Vr.g,Vr.b,b,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,b=1){o.set(T),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(o,l)},render:S,addToRenderList:h,dispose:y}}function Rg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(M,D,G,V,Y){let X=!1;const k=d(V,G,D);s!==k&&(s=k,c(s.object)),X=_(M,V,G,Y),X&&x(M,V,G,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,b(M,D,G,V),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,D,G){const V=G.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let X=Y[D.id];X===void 0&&(X={},Y[D.id]=X);let k=X[V];return k===void 0&&(k=p(l()),X[V]=k),k}function p(M){const D=[],G=[],V=[];for(let Y=0;Y<t;Y++)D[Y]=0,G[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:V,object:M,attributes:{},index:null}}function _(M,D,G,V){const Y=s.attributes,X=D.attributes;let k=0;const z=G.getAttributes();for(const j in z)if(z[j].location>=0){const ae=Y[j];let fe=X[j];if(fe===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;k++}return s.attributesNum!==k||s.index!==V}function x(M,D,G,V){const Y={},X=D.attributes;let k=0;const z=G.getAttributes();for(const j in z)if(z[j].location>=0){let ae=X[j];ae===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),Y[j]=fe,k++}s.attributes=Y,s.attributesNum=k,s.index=V}function S(){const M=s.newAttributes;for(let D=0,G=M.length;D<G;D++)M[D]=0}function h(M){f(M,0)}function f(M,D){const G=s.newAttributes,V=s.enabledAttributes,Y=s.attributeDivisors;G[M]=1,V[M]===0&&(n.enableVertexAttribArray(M),V[M]=1),Y[M]!==D&&(n.vertexAttribDivisor(M,D),Y[M]=D)}function y(){const M=s.newAttributes,D=s.enabledAttributes;for(let G=0,V=D.length;G<V;G++)D[G]!==M[G]&&(n.disableVertexAttribArray(G),D[G]=0)}function T(M,D,G,V,Y,X,k){k===!0?n.vertexAttribIPointer(M,D,G,Y,X):n.vertexAttribPointer(M,D,G,V,Y,X)}function b(M,D,G,V){S();const Y=V.attributes,X=G.getAttributes(),k=D.defaultAttributeValues;for(const z in X){const j=X[z];if(j.location>=0){let ue=Y[z];if(ue===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const ae=ue.normalized,fe=ue.itemSize,Ne=e.get(ue);if(Ne===void 0)continue;const Le=Ne.buffer,rt=Ne.type,nt=Ne.bytesPerElement,q=rt===n.INT||rt===n.UNSIGNED_INT||ue.gpuType===Uo;if(ue.isInterleavedBufferAttribute){const Z=ue.data,pe=Z.stride,Ce=ue.offset;if(Z.isInstancedInterleavedBuffer){for(let ge=0;ge<j.locationSize;ge++)f(j.location+ge,Z.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ge=0;ge<j.locationSize;ge++)h(j.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let ge=0;ge<j.locationSize;ge++)T(j.location+ge,fe/j.locationSize,rt,ae,pe*nt,(Ce+fe/j.locationSize*ge)*nt,q)}else{if(ue.isInstancedBufferAttribute){for(let Z=0;Z<j.locationSize;Z++)f(j.location+Z,ue.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Z=0;Z<j.locationSize;Z++)h(j.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let Z=0;Z<j.locationSize;Z++)T(j.location+Z,fe/j.locationSize,rt,ae,fe*nt,fe/j.locationSize*Z*nt,q)}}else if(k!==void 0){const ae=k[z];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(j.location,ae);break;case 3:n.vertexAttrib3fv(j.location,ae);break;case 4:n.vertexAttrib4fv(j.location,ae);break;default:n.vertexAttrib1fv(j.location,ae)}}}}y()}function A(){N();for(const M in i){const D=i[M];for(const G in D){const V=D[G];for(const Y in V)u(V[Y].object),delete V[Y];delete D[G]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const G in D){const V=D[G];for(const Y in V)u(V[Y].object),delete V[Y];delete D[G]}delete i[M.id]}function C(M){for(const D in i){const G=i[D];if(G[M.id]===void 0)continue;const V=G[M.id];for(const Y in V)u(V[Y].object),delete V[Y];delete G[M.id]}}function N(){v(),a=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:h,disableUnusedAttributes:y}}function Cg(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let _=0;for(let x=0;x<d;x++)_+=u[x];t.update(_,i,1)}function l(c,u,d,p){if(d===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<c.length;x++)a(c[x],u[x],p[x]);else{_.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,d);let x=0;for(let S=0;S<d;S++)x+=u[S]*p[S];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Pg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Xt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const N=C===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==zt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Jt&&!N)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Re("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:_,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:b,maxSamples:A,samples:w}}function Dg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Xn,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const _=d.length!==0||p||i!==0||r;return r=p,i=d.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,_){const x=d.clippingPlanes,S=d.clipIntersection,h=d.clipShadows,f=n.get(d);if(!r||x===null||x.length===0||s&&!h)s?u(null):c();else{const y=s?0:i,T=y*4;let b=f.clippingState||null;l.value=b,b=u(x,p,T,_);for(let A=0;A!==T;++A)b[A]=t[A];f.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,_,x){const S=d!==null?d.length:0;let h=null;if(S!==0){if(h=l.value,x!==!0||h===null){const f=_+S*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(h===null||h.length<f)&&(h=new Float32Array(f));for(let T=0,b=_;T!==S;++T,b+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(h,b),h[b+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,h}}function Lg(n){let e=new WeakMap;function t(a,o){return o===ba?a.mapping=si:o===Ta&&(a.mapping=Ri),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ba||o===Ta)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yu(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Dn=4,Bl=[.125,.215,.35,.446,.526,.582],Yn=20,Ig=256,$i=new ju,zl=new $e;let $s=null,Ks=0,js=0,Zs=!1;const Ug=new O;class Vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Ug}=s;$s=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($s,Ks,js),this._renderer.xr.enabled=Zs,e.scissorTest=!1,Mi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$s=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:xn,format:Xt,colorSpace:Pi,depthBuffer:!1},r=Gl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ng(s)),this._blurMaterial=Og(s,e,t),this._ggxMaterial=Fg(s,e,t)}return r}_compileMaterial(e){const t=new Mn(new En,e);this._renderer.compile(t,$i)}_sceneToCubeUV(e,t,i,r,s){const l=new Bt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,_=d.toneMapping;d.getClearColor(zl),d.toneMapping=en,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new dr,new Gu({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,h=S.material;let f=!1;const y=e.background;y?y.isColor&&(h.color.copy(y),e.background=null,f=!0):(h.color.copy(zl),f=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const A=this._cubeSize;Mi(r,b*A,T>2?A:0,A,A),d.setRenderTarget(r),f&&d.render(S,l),d.render(e,l)}d.toneMapping=_,d.autoClear=p,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===si||e.mapping===Ri;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Mi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,$i)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),p=0+c*1.25,_=d*p,{_lodMax:x}=this,S=this._sizeLods[i],h=3*S*(i>x-Dn?i-x+Dn:0),f=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=_,l.mipInt.value=x-t,Mi(s,h,f,3*S,2*S),r.setRenderTarget(s),r.render(o,$i),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Mi(e,h,f,3*S,2*S),r.setRenderTarget(e),r.render(o,$i)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const p=c.uniforms,_=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Yn-1),S=s/x,h=isFinite(s)?1+Math.floor(u*S):Yn;h>Yn&&Re(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Yn}`);const f=[];let y=0;for(let C=0;C<Yn;++C){const N=C/S,v=Math.exp(-N*N/2);f.push(v),C===0?y+=v:C<h&&(y+=2*v)}for(let C=0;C<f.length;C++)f[C]=f[C]/y;p.envMap.value=e.texture,p.samples.value=h,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:T}=this;p.dTheta.value=x,p.mipInt.value=T-i;const b=this._sizeLods[r],A=3*b*(r>T-Dn?r-T+Dn:0),w=4*(this._cubeSize-b);Mi(t,A,w,3*b,2*b),l.setRenderTarget(t),l.render(d,$i)}}function Ng(n){const e=[],t=[],i=[];let r=n;const s=n-Dn+1+Bl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Dn?l=Bl[a-n+Dn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],_=6,x=6,S=3,h=2,f=1,y=new Float32Array(S*x*_),T=new Float32Array(h*x*_),b=new Float32Array(f*x*_);for(let w=0;w<_;w++){const C=w%3*2/3-1,N=w>2?0:-1,v=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];y.set(v,S*x*w),T.set(p,h*x*w);const M=[w,w,w,w,w,w];b.set(M,f*x*w)}const A=new En;A.setAttribute("position",new nn(y,S)),A.setAttribute("uv",new nn(T,h)),A.setAttribute("faceIndex",new nn(b,f)),i.push(new Mn(A,null)),r>Dn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Gl(n,e,t){const i=new tn(n,e,t);return i.texture.mapping=cs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Fg(n,e,t){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ig,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ds(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Og(n,e,t){const i=new Float32Array(Yn),r=new O(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Hl(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function kl(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ds(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ba||l===Ta,u=l===si||l===Ri;if(c||u){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Vl(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const _=o.image;return c&&_&&_.height>0||u&&_&&r(_)?(t===null&&(t=new Vl(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function zg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ar("WebGLRenderer: "+i+" extension not supported."),r}}}function Vg(n,e,t,i){const r={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete r[p.id];const _=s.get(p);_&&(e.remove(_),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const _ in p)e.update(p[_],n.ARRAY_BUFFER)}function c(d){const p=[],_=d.index,x=d.attributes.position;let S=0;if(_!==null){const y=_.array;S=_.version;for(let T=0,b=y.length;T<b;T+=3){const A=y[T+0],w=y[T+1],C=y[T+2];p.push(A,w,w,C,C,A)}}else if(x!==void 0){const y=x.array;S=x.version;for(let T=0,b=y.length/3-1;T<b;T+=3){const A=T+0,w=T+1,C=T+2;p.push(A,w,w,C,C,A)}}else return;const h=new(Ou(p)?ku:Hu)(p,1);h.version=S;const f=s.get(d);f&&e.remove(f),s.set(d,h)}function u(d){const p=s.get(d);if(p){const _=d.index;_!==null&&p.version<_.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Gg(n,e,t){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,_){n.drawElements(i,_,s,p*a),t.update(_,i,1)}function c(p,_,x){x!==0&&(n.drawElementsInstanced(i,_,s,p*a,x),t.update(_,i,x))}function u(p,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,s,p,0,x);let h=0;for(let f=0;f<x;f++)h+=_[f];t.update(h,i,1)}function d(p,_,x,S){if(x===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<p.length;f++)c(p[f]/a,_[f],S[f]);else{h.multiDrawElementsInstancedWEBGL(i,_,0,s,p,0,S,0,x);let f=0;for(let y=0;y<x;y++)f+=_[y]*S[y];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Hg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kg(n,e,t){const i=new WeakMap,r=new lt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(o);if(p===void 0||p.count!==d){let M=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var _=M;p!==void 0&&p.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,h=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;x===!0&&(b=1),S===!0&&(b=2),h===!0&&(b=3);let A=o.attributes.position.count*b,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*w*4*d),N=new Bu(C,A,w,d);N.type=Jt,N.needsUpdate=!0;const v=b*4;for(let D=0;D<d;D++){const G=f[D],V=y[D],Y=T[D],X=A*w*4*D;for(let k=0;k<G.count;k++){const z=k*v;x===!0&&(r.fromBufferAttribute(G,k),C[X+z+0]=r.x,C[X+z+1]=r.y,C[X+z+2]=r.z,C[X+z+3]=0),S===!0&&(r.fromBufferAttribute(V,k),C[X+z+4]=r.x,C[X+z+5]=r.y,C[X+z+6]=r.z,C[X+z+7]=0),h===!0&&(r.fromBufferAttribute(Y,k),C[X+z+8]=r.x,C[X+z+9]=r.y,C[X+z+10]=r.z,C[X+z+11]=Y.itemSize===4?r.w:1)}}p={count:d,texture:N,size:new je(A,w)},i.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let h=0;h<c.length;h++)x+=c[h];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function Wg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Xg={[Eu]:"LINEAR_TONE_MAPPING",[yu]:"REINHARD_TONE_MAPPING",[bu]:"CINEON_TONE_MAPPING",[Tu]:"ACES_FILMIC_TONE_MAPPING",[wu]:"AGX_TONE_MAPPING",[Ru]:"NEUTRAL_TONE_MAPPING",[Au]:"CUSTOM_TONE_MAPPING"};function qg(n,e,t,i,r){const s=new tn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new tn(e,t,{type:xn,depthBuffer:!1,stencilBuffer:!1}),o=new En;o.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new _n([0,2,0,0,2,0],2));const l=new Gp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Mn(o,l),u=new ju(-1,1,1,-1,0,1);let d=null,p=null,_=!1,x,S=null,h=[],f=!1;this.setSize=function(y,T){s.setSize(y,T),a.setSize(y,T);for(let b=0;b<h.length;b++){const A=h[b];A.setSize&&A.setSize(y,T)}},this.setEffects=function(y){h=y,f=h.length>0&&h[0].isRenderPass===!0;const T=s.width,b=s.height;for(let A=0;A<h.length;A++){const w=h[A];w.setSize&&w.setSize(T,b)}},this.begin=function(y,T){if(_||y.toneMapping===en&&h.length===0)return!1;if(S=T,T!==null){const b=T.width,A=T.height;(s.width!==b||s.height!==A)&&this.setSize(b,A)}return f===!1&&y.setRenderTarget(s),x=y.toneMapping,y.toneMapping=en,!0},this.hasRenderPass=function(){return f},this.end=function(y,T){y.toneMapping=x,_=!0;let b=s,A=a;for(let w=0;w<h.length;w++){const C=h[w];if(C.enabled!==!1&&(C.render(y,A,b,T),C.needsSwap!==!1)){const N=b;b=A,A=N}}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,l.defines={},ze.getTransfer(d)===Ye&&(l.defines.SRGB_TRANSFER="");const w=Xg[p];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(S),y.render(c,u),S=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Ju=new Tt,oo=new or(1,1),Qu=new Bu,ef=new _p,tf=new qu,Wl=[],Xl=[],ql=new Float32Array(16),Yl=new Float32Array(9),$l=new Float32Array(4);function Bi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Wl[r];if(s===void 0&&(s=new Float32Array(r),Wl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hs(n,e){let t=Xl[e];t===void 0&&(t=new Int32Array(e),Xl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Yg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function Zg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;$l.set(i),n.uniformMatrix2fv(this.addr,!1,$l),mt(t,i)}}function Jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Yl.set(i),n.uniformMatrix3fv(this.addr,!1,Yl),mt(t,i)}}function Qg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;ql.set(i),n.uniformMatrix4fv(this.addr,!1,ql),mt(t,i)}}function e0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function i0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function r0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function a0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function o0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function l0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(oo.compareFunction=t.isReversedDepthBuffer()?Go:Vo,s=oo):s=Ju,t.setTexture2D(e||s,r)}function c0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ef,r)}function u0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tf,r)}function f0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qu,r)}function d0(n){switch(n){case 5126:return Yg;case 35664:return $g;case 35665:return Kg;case 35666:return jg;case 35674:return Zg;case 35675:return Jg;case 35676:return Qg;case 5124:case 35670:return e0;case 35667:case 35671:return t0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return r0;case 36294:return s0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return f0}}function h0(n,e){n.uniform1fv(this.addr,e)}function p0(n,e){const t=Bi(e,this.size,2);n.uniform2fv(this.addr,t)}function m0(n,e){const t=Bi(e,this.size,3);n.uniform3fv(this.addr,t)}function _0(n,e){const t=Bi(e,this.size,4);n.uniform4fv(this.addr,t)}function g0(n,e){const t=Bi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function x0(n,e){const t=Bi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function v0(n,e){const t=Bi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function S0(n,e){n.uniform1iv(this.addr,e)}function M0(n,e){n.uniform2iv(this.addr,e)}function E0(n,e){n.uniform3iv(this.addr,e)}function y0(n,e){n.uniform4iv(this.addr,e)}function b0(n,e){n.uniform1uiv(this.addr,e)}function T0(n,e){n.uniform2uiv(this.addr,e)}function A0(n,e){n.uniform3uiv(this.addr,e)}function w0(n,e){n.uniform4uiv(this.addr,e)}function R0(n,e,t){const i=this.cache,r=e.length,s=hs(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=oo:a=Ju;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function C0(n,e,t){const i=this.cache,r=e.length,s=hs(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ef,s[a])}function P0(n,e,t){const i=this.cache,r=e.length,s=hs(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||tf,s[a])}function D0(n,e,t){const i=this.cache,r=e.length,s=hs(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Qu,s[a])}function L0(n){switch(n){case 5126:return h0;case 35664:return p0;case 35665:return m0;case 35666:return _0;case 35674:return g0;case 35675:return x0;case 35676:return v0;case 5124:case 35670:return S0;case 35667:case 35671:return M0;case 35668:case 35672:return E0;case 35669:case 35673:return y0;case 5125:return b0;case 36294:return T0;case 36295:return A0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return D0}}class I0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=d0(t.type)}}class U0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L0(t.type)}}class N0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Js=/(\w+)(\])?(\[|\.)?/g;function Kl(n,e){n.seq.push(e),n.map[e.id]=e}function F0(n,e,t){const i=n.name,r=i.length;for(Js.lastIndex=0;;){const s=Js.exec(i),a=Js.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Kl(t,c===void 0?new I0(o,n,e):new U0(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new N0(o),Kl(t,d)),t=d}}}class $r{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);F0(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function jl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const O0=37297;let B0=0;function z0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Zl=new Pe;function V0(n){ze._getMatrix(Zl,ze.workingColorSpace,n);const e=`mat3( ${Zl.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(n)){case Jr:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+z0(n.getShaderSource(e),o)}else return s}function G0(n,e){const t=V0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const H0={[Eu]:"Linear",[yu]:"Reinhard",[bu]:"Cineon",[Tu]:"ACESFilmic",[wu]:"AgX",[Ru]:"Neutral",[Au]:"Custom"};function k0(n,e){const t=H0[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gr=new O;function W0(){ze.getLuminanceCoefficients(Gr);const n=Gr.x.toFixed(4),e=Gr.y.toFixed(4),t=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function q0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Y0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ji(n){return n!==""}function Ql(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ec(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $0=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(n){return n.replace($0,j0)}const K0=new Map;function j0(n,e){let t=De[e];if(t===void 0){const i=K0.get(e);if(i!==void 0)t=De[i],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lo(t)}const Z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(n){return n.replace(Z0,J0)}function J0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Q0={[kr]:"SHADOWMAP_TYPE_PCF",[Zi]:"SHADOWMAP_TYPE_VSM"};function ex(n){return Q0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tx={[si]:"ENVMAP_TYPE_CUBE",[Ri]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE_UV"};function nx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":tx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const ix={[Ri]:"ENVMAP_MODE_REFRACTION"};function rx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ix[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sx={[Mu]:"ENVMAP_BLENDING_MULTIPLY",[jh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function ax(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":sx[n.combine]||"ENVMAP_BLENDING_NONE"}function ox(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function lx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ex(t),c=nx(t),u=rx(t),d=ax(t),p=ox(t),_=X0(t),x=q0(s),S=r.createProgram();let h,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ji).join(`
`),h.length>0&&(h+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ji).join(`
`),f.length>0&&(f+=`
`)):(h=[nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),f=[nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==en?"#define TONE_MAPPING":"",t.toneMapping!==en?De.tonemapping_pars_fragment:"",t.toneMapping!==en?k0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,G0("linearToOutputTexel",t.outputColorSpace),W0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ji).join(`
`)),a=lo(a),a=Ql(a,t),a=ec(a,t),o=lo(o),o=Ql(o,t),o=ec(o,t),a=tc(a),o=tc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,f=["#define varying in",t.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=y+h+a,b=y+f+o,A=jl(r,r.VERTEX_SHADER,T),w=jl(r,r.FRAGMENT_SHADER,b);r.attachShader(S,A),r.attachShader(S,w),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(D){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(S)||"",V=r.getShaderInfoLog(A)||"",Y=r.getShaderInfoLog(w)||"",X=G.trim(),k=V.trim(),z=Y.trim();let j=!0,ue=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,A,w);else{const ae=Jl(r,A,"vertex"),fe=Jl(r,w,"fragment");He("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+ae+`
`+fe)}else X!==""?Re("WebGLProgram: Program Info Log:",X):(k===""||z==="")&&(ue=!1);ue&&(D.diagnostics={runnable:j,programLog:X,vertexShader:{log:k,prefix:h},fragmentShader:{log:z,prefix:f}})}r.deleteShader(A),r.deleteShader(w),N=new $r(r,S),v=Y0(r,S)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,O0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B0++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=w,this}let cx=0;class ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fx(e),t.set(e,i)),i}}class fx{constructor(e){this.id=cx++,this.code=e,this.usedTimes=0}}function dx(n,e,t,i,r,s,a){const o=new zu,l=new ux,c=new Set,u=[],d=new Map,p=r.logarithmicDepthBuffer;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(v){return c.add(v),v===0?"uv":`uv${v}`}function h(v,M,D,G,V){const Y=G.fog,X=V.geometry,k=v.isMeshStandardMaterial?G.environment:null,z=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),j=z&&z.mapping===cs?z.image.height:null,ue=x[v.type];v.precision!==null&&(_=r.getMaxPrecision(v.precision),_!==v.precision&&Re("WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fe=ae!==void 0?ae.length:0;let Ne=0;X.morphAttributes.position!==void 0&&(Ne=1),X.morphAttributes.normal!==void 0&&(Ne=2),X.morphAttributes.color!==void 0&&(Ne=3);let Le,rt,nt,q;if(ue){const Xe=Zt[ue];Le=Xe.vertexShader,rt=Xe.fragmentShader}else Le=v.vertexShader,rt=v.fragmentShader,l.update(v),nt=l.getVertexShaderID(v),q=l.getFragmentShaderID(v);const Z=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Ce=V.isInstancedMesh===!0,ge=V.isBatchedMesh===!0,Ve=!!v.map,_t=!!v.matcap,Be=!!z,We=!!v.aoMap,Ze=!!v.lightMap,Ie=!!v.bumpMap,ct=!!v.normalMap,R=!!v.displacementMap,ut=!!v.emissiveMap,ke=!!v.metalnessMap,Qe=!!v.roughnessMap,ve=v.anisotropy>0,E=v.clearcoat>0,m=v.dispersion>0,L=v.iridescence>0,W=v.sheen>0,K=v.transmission>0,H=ve&&!!v.anisotropyMap,Me=E&&!!v.clearcoatMap,ne=E&&!!v.clearcoatNormalMap,xe=E&&!!v.clearcoatRoughnessMap,Ae=L&&!!v.iridescenceMap,Q=L&&!!v.iridescenceThicknessMap,re=W&&!!v.sheenColorMap,_e=W&&!!v.sheenRoughnessMap,Se=!!v.specularMap,ie=!!v.specularColorMap,Ue=!!v.specularIntensityMap,P=K&&!!v.transmissionMap,ce=K&&!!v.thicknessMap,ee=!!v.gradientMap,de=!!v.alphaMap,J=v.alphaTest>0,$=!!v.alphaHash,te=!!v.extensions;let we=en;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(we=n.toneMapping);const et={shaderID:ue,shaderType:v.type,shaderName:v.name,vertexShader:Le,fragmentShader:rt,defines:v.defines,customVertexShaderID:nt,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:ge,batchingColor:ge&&V._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&V.instanceColor!==null,instancingMorph:Ce&&V.morphTexture!==null,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Pi,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:_t,envMap:Be,envMapMode:Be&&z.mapping,envMapCubeUVHeight:j,aoMap:We,lightMap:Ze,bumpMap:Ie,normalMap:ct,displacementMap:R,emissiveMap:ut,normalMapObjectSpace:ct&&v.normalMapType===tp,normalMapTangentSpace:ct&&v.normalMapType===ep,metalnessMap:ke,roughnessMap:Qe,anisotropy:ve,anisotropyMap:H,clearcoat:E,clearcoatMap:Me,clearcoatNormalMap:ne,clearcoatRoughnessMap:xe,dispersion:m,iridescence:L,iridescenceMap:Ae,iridescenceThicknessMap:Q,sheen:W,sheenColorMap:re,sheenRoughnessMap:_e,specularMap:Se,specularColorMap:ie,specularIntensityMap:Ue,transmission:K,transmissionMap:P,thicknessMap:ce,gradientMap:ee,opaque:v.transparent===!1&&v.blending===bi&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:$,combine:v.combine,mapUv:Ve&&S(v.map.channel),aoMapUv:We&&S(v.aoMap.channel),lightMapUv:Ze&&S(v.lightMap.channel),bumpMapUv:Ie&&S(v.bumpMap.channel),normalMapUv:ct&&S(v.normalMap.channel),displacementMapUv:R&&S(v.displacementMap.channel),emissiveMapUv:ut&&S(v.emissiveMap.channel),metalnessMapUv:ke&&S(v.metalnessMap.channel),roughnessMapUv:Qe&&S(v.roughnessMap.channel),anisotropyMapUv:H&&S(v.anisotropyMap.channel),clearcoatMapUv:Me&&S(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&S(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&S(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&S(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&S(v.iridescenceThicknessMap.channel),sheenColorMapUv:re&&S(v.sheenColorMap.channel),sheenRoughnessMapUv:_e&&S(v.sheenRoughnessMap.channel),specularMapUv:Se&&S(v.specularMap.channel),specularColorMapUv:ie&&S(v.specularColorMap.channel),specularIntensityMapUv:Ue&&S(v.specularIntensityMap.channel),transmissionMapUv:P&&S(v.transmissionMap.channel),thicknessMapUv:ce&&S(v.thicknessMap.channel),alphaMapUv:de&&S(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ct||ve),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(Ve||de),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:pe,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&ze.getTransfer(v.map.colorSpace)===Ye,decodeVideoTextureEmissive:ut&&v.emissiveMap.isVideoTexture===!0&&ze.getTransfer(v.emissiveMap.colorSpace)===Ye,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===dn,flipSided:v.side===Ct,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:te&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&v.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function f(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)M.push(D),M.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(y(M,v),T(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function y(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function T(v,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function b(v){const M=x[v.type];let D;if(M){const G=Zt[M];D=Pp.clone(G.uniforms)}else D=v.uniforms;return D}function A(v,M){let D=d.get(M);return D!==void 0?++D.usedTimes:(D=new lx(n,M,v,s),u.push(D),d.set(M,D)),D}function w(v){if(--v.usedTimes===0){const M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),d.delete(v.cacheKey),v.destroy()}}function C(v){l.remove(v)}function N(){l.dispose()}return{getParameters:h,getProgramCacheKey:f,getUniforms:b,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:N}}function hx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function px(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ic(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,p,_,x,S,h){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:_,groupOrder:x,renderOrder:d.renderOrder,z:S,group:h},n[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=_,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=S,f.group=h),e++,f}function o(d,p,_,x,S,h){const f=a(d,p,_,x,S,h);_.transmission>0?i.push(f):_.transparent===!0?r.push(f):t.push(f)}function l(d,p,_,x,S,h){const f=a(d,p,_,x,S,h);_.transmission>0?i.unshift(f):_.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,p){t.length>1&&t.sort(d||px),i.length>1&&i.sort(p||ic),r.length>1&&r.sort(p||ic)}function u(){for(let d=e,p=n.length;d<p;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function mx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new rc,n.set(i,[a])):r>=s.length?(a=new rc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function _x(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new $e};break;case"SpotLight":t={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function gx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let xx=0;function vx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Sx(n){const e=new _x,t=gx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new dt,a=new dt;function o(c){let u=0,d=0,p=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let _=0,x=0,S=0,h=0,f=0,y=0,T=0,b=0,A=0,w=0,C=0;c.sort(vx);for(let v=0,M=c.length;v<M;v++){const D=c[v],G=D.color,V=D.intensity,Y=D.distance;let X=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ci?X=D.shadow.map.texture:X=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=G.r*V,d+=G.g*V,p+=G.b*V;else if(D.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(D.sh.coefficients[k],V);C++}else if(D.isDirectionalLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const z=D.shadow,j=t.get(D);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,i.directionalShadow[_]=j,i.directionalShadowMap[_]=X,i.directionalShadowMatrix[_]=D.shadow.matrix,y++}i.directional[_]=k,_++}else if(D.isSpotLight){const k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(G).multiplyScalar(V),k.distance=Y,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,i.spot[S]=k;const z=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,z.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[S]=z.matrix,D.castShadow){const j=t.get(D);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,i.spotShadow[S]=j,i.spotShadowMap[S]=X,b++}S++}else if(D.isRectAreaLight){const k=e.get(D);k.color.copy(G).multiplyScalar(V),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),i.rectArea[h]=k,h++}else if(D.isPointLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){const z=D.shadow,j=t.get(D);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,j.shadowCameraNear=z.camera.near,j.shadowCameraFar=z.camera.far,i.pointShadow[x]=j,i.pointShadowMap[x]=X,i.pointShadowMatrix[x]=D.shadow.matrix,T++}i.point[x]=k,x++}else if(D.isHemisphereLight){const k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(V),k.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[f]=k,f++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const N=i.hash;(N.directionalLength!==_||N.pointLength!==x||N.spotLength!==S||N.rectAreaLength!==h||N.hemiLength!==f||N.numDirectionalShadows!==y||N.numPointShadows!==T||N.numSpotShadows!==b||N.numSpotMaps!==A||N.numLightProbes!==C)&&(i.directional.length=_,i.spot.length=S,i.rectArea.length=h,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,N.directionalLength=_,N.pointLength=x,N.spotLength=S,N.rectAreaLength=h,N.hemiLength=f,N.numDirectionalShadows=y,N.numPointShadows=T,N.numSpotShadows=b,N.numSpotMaps=A,N.numLightProbes=C,i.version=xx++)}function l(c,u){let d=0,p=0,_=0,x=0,S=0;const h=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const T=c[f];if(T.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),d++}else if(T.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),_++}else if(T.isRectAreaLight){const b=i.rectArea[x];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(h),a.identity(),s.copy(T.matrixWorld),s.premultiply(h),a.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(h),p++}else if(T.isHemisphereLight){const b=i.hemi[S];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(h),S++}}}return{setup:o,setupView:l,state:i}}function sc(n){const e=new Sx(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Mx(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new sc(n),e.set(r,[o])):s>=a.length?(o=new sc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bx=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Tx=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],ac=new dt,Ki=new O,Qs=new O;function Ax(n,e,t){let i=new $u;const r=new je,s=new je,a=new lt,o=new Hp,l=new kp,c={},u=t.maxTextureSize,d={[Un]:Ct,[Ct]:Un,[dn]:dn},p=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Ex,fragmentShader:yx}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const x=new En;x.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Mn(x,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kr;let f=this.type;this.render=function(w,C,N){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;w.type===Dh&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=kr);const v=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),G=n.state;G.setBlending(pn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=f!==this.type;V&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(X=>X.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,X=w.length;Y<X;Y++){const k=w[Y],z=k.shadow;if(z===void 0){Re("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const j=z.getFrameExtents();if(r.multiply(j),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,z.mapSize.y=s.y)),z.map===null||V===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Zi){if(k.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new tn(r.x,r.y,{format:Ci,type:xn,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new or(r.x,r.y,Jt),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=vn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=xt,z.map.depthTexture.magFilter=xt}else{k.isPointLight?(z.map=new Yu(r.x),z.map.depthTexture=new Vp(r.x,rn)):(z.map=new tn(r.x,r.y),z.map.depthTexture=new or(r.x,r.y,rn)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=vn;const ae=n.state.buffers.depth.getReversed();this.type===kr?(z.map.depthTexture.compareFunction=ae?Go:Vo,z.map.depthTexture.minFilter=Mt,z.map.depthTexture.magFilter=Mt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=xt,z.map.depthTexture.magFilter=xt)}z.camera.updateProjectionMatrix()}const ue=z.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<ue;ae++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ae),n.clear();else{ae===0&&(n.setRenderTarget(z.map),n.clear());const fe=z.getViewport(ae);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),G.viewport(a)}if(k.isPointLight){const fe=z.camera,Ne=z.matrix,Le=k.distance||fe.far;Le!==fe.far&&(fe.far=Le,fe.updateProjectionMatrix()),Ki.setFromMatrixPosition(k.matrixWorld),fe.position.copy(Ki),Qs.copy(fe.position),Qs.add(bx[ae]),fe.up.copy(Tx[ae]),fe.lookAt(Qs),fe.updateMatrixWorld(),Ne.makeTranslation(-Ki.x,-Ki.y,-Ki.z),ac.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(ac,fe.coordinateSystem,fe.reversedDepth)}else z.updateMatrices(k);i=z.getFrustum(),b(C,N,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===Zi&&y(z,N),z.needsUpdate=!1}f=this.type,h.needsUpdate=!1,n.setRenderTarget(v,M,D)};function y(w,C){const N=e.update(S);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,_.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new tn(r.x,r.y,{format:Ci,type:xn})),p.uniforms.shadow_pass.value=w.map.depthTexture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,N,p,S,null),_.uniforms.shadow_pass.value=w.mapPass.texture,_.uniforms.resolution.value=w.mapSize,_.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,N,_,S,null)}function T(w,C,N,v){let M=null;const D=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=N.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const G=M.uuid,V=C.uuid;let Y=c[G];Y===void 0&&(Y={},c[G]=Y);let X=Y[V];X===void 0&&(X=M.clone(),Y[V]=X,C.addEventListener("dispose",A)),M=X}if(M.visible=C.visible,M.wireframe=C.wireframe,v===Zi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=n.properties.get(M);G.light=N}return M}function b(w,C,N,v,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Zi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const V=e.update(w),Y=w.material;if(Array.isArray(Y)){const X=V.groups;for(let k=0,z=X.length;k<z;k++){const j=X[k],ue=Y[j.materialIndex];if(ue&&ue.visible){const ae=T(w,ue,v,M);w.onBeforeShadow(n,w,C,N,V,ae,j),n.renderBufferDirect(N,null,V,ae,w,j),w.onAfterShadow(n,w,C,N,V,ae,j)}}}else if(Y.visible){const X=T(w,Y,v,M);w.onBeforeShadow(n,w,C,N,V,X,null),n.renderBufferDirect(N,null,V,X,w,null),w.onAfterShadow(n,w,C,N,V,X,null)}}const G=w.children;for(let V=0,Y=G.length;V<Y;V++)b(G[V],C,N,v,M)}function A(w){w.target.removeEventListener("dispose",A);for(const N in c){const v=c[N],M=w.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const wx={[ga]:xa,[va]:Ea,[Sa]:ya,[wi]:Ma,[xa]:ga,[Ea]:va,[ya]:Sa,[Ma]:wi};function Rx(n,e){function t(){let P=!1;const ce=new lt;let ee=null;const de=new lt(0,0,0,0);return{setMask:function(J){ee!==J&&!P&&(n.colorMask(J,J,J,J),ee=J)},setLocked:function(J){P=J},setClear:function(J,$,te,we,et){et===!0&&(J*=we,$*=we,te*=we),ce.set(J,$,te,we),de.equals(ce)===!1&&(n.clearColor(J,$,te,we),de.copy(ce))},reset:function(){P=!1,ee=null,de.set(-1,0,0,0)}}}function i(){let P=!1,ce=!1,ee=null,de=null,J=null;return{setReversed:function($){if(ce!==$){const te=e.get("EXT_clip_control");$?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),ce=$;const we=J;J=null,this.setClear(we)}},getReversed:function(){return ce},setTest:function($){$?Z(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function($){ee!==$&&!P&&(n.depthMask($),ee=$)},setFunc:function($){if(ce&&($=wx[$]),de!==$){switch($){case ga:n.depthFunc(n.NEVER);break;case xa:n.depthFunc(n.ALWAYS);break;case va:n.depthFunc(n.LESS);break;case wi:n.depthFunc(n.LEQUAL);break;case Sa:n.depthFunc(n.EQUAL);break;case Ma:n.depthFunc(n.GEQUAL);break;case Ea:n.depthFunc(n.GREATER);break;case ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=$}},setLocked:function($){P=$},setClear:function($){J!==$&&(ce&&($=1-$),n.clearDepth($),J=$)},reset:function(){P=!1,ee=null,de=null,J=null,ce=!1}}}function r(){let P=!1,ce=null,ee=null,de=null,J=null,$=null,te=null,we=null,et=null;return{setTest:function(Xe){P||(Xe?Z(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(Xe){ce!==Xe&&!P&&(n.stencilMask(Xe),ce=Xe)},setFunc:function(Xe,$t,an){(ee!==Xe||de!==$t||J!==an)&&(n.stencilFunc(Xe,$t,an),ee=Xe,de=$t,J=an)},setOp:function(Xe,$t,an){($!==Xe||te!==$t||we!==an)&&(n.stencilOp(Xe,$t,an),$=Xe,te=$t,we=an)},setLocked:function(Xe){P=Xe},setClear:function(Xe){et!==Xe&&(n.clearStencil(Xe),et=Xe)},reset:function(){P=!1,ce=null,ee=null,de=null,J=null,$=null,te=null,we=null,et=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},p=new WeakMap,_=[],x=null,S=!1,h=null,f=null,y=null,T=null,b=null,A=null,w=null,C=new $e(0,0,0),N=0,v=!1,M=null,D=null,G=null,V=null,Y=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,z=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=z>=2);let ue=null,ae={};const fe=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Le=new lt().fromArray(fe),rt=new lt().fromArray(Ne);function nt(P,ce,ee,de){const J=new Uint8Array(4),$=n.createTexture();n.bindTexture(P,$),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<ee;te++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(ce+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return $}const q={};q[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(wi),Ie(!1),ct(dl),Z(n.CULL_FACE),We(pn);function Z(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function pe(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function Ce(P,ce){return d[P]!==ce?(n.bindFramebuffer(P,ce),d[P]=ce,P===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ce),P===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function ge(P,ce){let ee=_,de=!1;if(P){ee=p.get(ce),ee===void 0&&(ee=[],p.set(ce,ee));const J=P.textures;if(ee.length!==J.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let $=0,te=J.length;$<te;$++)ee[$]=n.COLOR_ATTACHMENT0+$;ee.length=J.length,de=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,de=!0);de&&n.drawBuffers(ee)}function Ve(P){return x!==P?(n.useProgram(P),x=P,!0):!1}const _t={[qn]:n.FUNC_ADD,[Ih]:n.FUNC_SUBTRACT,[Uh]:n.FUNC_REVERSE_SUBTRACT};_t[Nh]=n.MIN,_t[Fh]=n.MAX;const Be={[Oh]:n.ZERO,[Bh]:n.ONE,[zh]:n.SRC_COLOR,[ma]:n.SRC_ALPHA,[Xh]:n.SRC_ALPHA_SATURATE,[kh]:n.DST_COLOR,[Gh]:n.DST_ALPHA,[Vh]:n.ONE_MINUS_SRC_COLOR,[_a]:n.ONE_MINUS_SRC_ALPHA,[Wh]:n.ONE_MINUS_DST_COLOR,[Hh]:n.ONE_MINUS_DST_ALPHA,[qh]:n.CONSTANT_COLOR,[Yh]:n.ONE_MINUS_CONSTANT_COLOR,[$h]:n.CONSTANT_ALPHA,[Kh]:n.ONE_MINUS_CONSTANT_ALPHA};function We(P,ce,ee,de,J,$,te,we,et,Xe){if(P===pn){S===!0&&(pe(n.BLEND),S=!1);return}if(S===!1&&(Z(n.BLEND),S=!0),P!==Lh){if(P!==h||Xe!==v){if((f!==qn||b!==qn)&&(n.blendEquation(n.FUNC_ADD),f=qn,b=qn),Xe)switch(P){case bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hl:n.blendFunc(n.ONE,n.ONE);break;case pl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ml:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:He("WebGLState: Invalid blending: ",P);break}else switch(P){case bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case pl:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ml:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",P);break}y=null,T=null,A=null,w=null,C.set(0,0,0),N=0,h=P,v=Xe}return}J=J||ce,$=$||ee,te=te||de,(ce!==f||J!==b)&&(n.blendEquationSeparate(_t[ce],_t[J]),f=ce,b=J),(ee!==y||de!==T||$!==A||te!==w)&&(n.blendFuncSeparate(Be[ee],Be[de],Be[$],Be[te]),y=ee,T=de,A=$,w=te),(we.equals(C)===!1||et!==N)&&(n.blendColor(we.r,we.g,we.b,et),C.copy(we),N=et),h=P,v=!1}function Ze(P,ce){P.side===dn?pe(n.CULL_FACE):Z(n.CULL_FACE);let ee=P.side===Ct;ce&&(ee=!ee),Ie(ee),P.blending===bi&&P.transparent===!1?We(pn):We(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const de=P.stencilWrite;o.setTest(de),de&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ut(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(P){M!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),M=P)}function ct(P){P!==Ch?(Z(n.CULL_FACE),P!==D&&(P===dl?n.cullFace(n.BACK):P===Ph?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),D=P}function R(P){P!==G&&(k&&n.lineWidth(P),G=P)}function ut(P,ce,ee){P?(Z(n.POLYGON_OFFSET_FILL),(V!==ce||Y!==ee)&&(n.polygonOffset(ce,ee),V=ce,Y=ee)):pe(n.POLYGON_OFFSET_FILL)}function ke(P){P?Z(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Qe(P){P===void 0&&(P=n.TEXTURE0+X-1),ue!==P&&(n.activeTexture(P),ue=P)}function ve(P,ce,ee){ee===void 0&&(ue===null?ee=n.TEXTURE0+X-1:ee=ue);let de=ae[ee];de===void 0&&(de={type:void 0,texture:void 0},ae[ee]=de),(de.type!==P||de.texture!==ce)&&(ue!==ee&&(n.activeTexture(ee),ue=ee),n.bindTexture(P,ce||q[P]),de.type=P,de.texture=ce)}function E(){const P=ae[ue];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function m(){try{n.compressedTexImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function W(){try{n.texSubImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function K(){try{n.texSubImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function ne(){try{n.texStorage2D(...arguments)}catch(P){He("WebGLState:",P)}}function xe(){try{n.texStorage3D(...arguments)}catch(P){He("WebGLState:",P)}}function Ae(){try{n.texImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function Q(){try{n.texImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function re(P){Le.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Le.copy(P))}function _e(P){rt.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),rt.copy(P))}function Se(P,ce){let ee=c.get(ce);ee===void 0&&(ee=new WeakMap,c.set(ce,ee));let de=ee.get(P);de===void 0&&(de=n.getUniformBlockIndex(ce,P.name),ee.set(P,de))}function ie(P,ce){const de=c.get(ce).get(P);l.get(ce)!==de&&(n.uniformBlockBinding(ce,de,P.__bindingPointIndex),l.set(ce,de))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ue=null,ae={},d={},p=new WeakMap,_=[],x=null,S=!1,h=null,f=null,y=null,T=null,b=null,A=null,w=null,C=new $e(0,0,0),N=0,v=!1,M=null,D=null,G=null,V=null,Y=null,Le.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:pe,bindFramebuffer:Ce,drawBuffers:ge,useProgram:Ve,setBlending:We,setMaterial:Ze,setFlipSided:Ie,setCullFace:ct,setLineWidth:R,setPolygonOffset:ut,setScissorTest:ke,activeTexture:Qe,bindTexture:ve,unbindTexture:E,compressedTexImage2D:m,compressedTexImage3D:L,texImage2D:Ae,texImage3D:Q,updateUBOMapping:Se,uniformBlockBinding:ie,texStorage2D:ne,texStorage3D:xe,texSubImage2D:W,texSubImage3D:K,compressedTexSubImage2D:H,compressedTexSubImage3D:Me,scissor:re,viewport:_e,reset:Ue}}function Cx(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,m){return _?new OffscreenCanvas(E,m):es("canvas")}function S(E,m,L){let W=1;const K=ve(E);if((K.width>L||K.height>L)&&(W=L/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const H=Math.floor(W*K.width),Me=Math.floor(W*K.height);d===void 0&&(d=x(H,Me));const ne=m?x(H,Me):d;return ne.width=H,ne.height=Me,ne.getContext("2d").drawImage(E,0,0,H,Me),Re("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+H+"x"+Me+")."),ne}else return"data"in E&&Re("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function h(E){return E.generateMipmaps}function f(E){n.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(E,m,L,W,K=!1){if(E!==null){if(n[E]!==void 0)return n[E];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let H=m;if(m===n.RED&&(L===n.FLOAT&&(H=n.R32F),L===n.HALF_FLOAT&&(H=n.R16F),L===n.UNSIGNED_BYTE&&(H=n.R8)),m===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.R8UI),L===n.UNSIGNED_SHORT&&(H=n.R16UI),L===n.UNSIGNED_INT&&(H=n.R32UI),L===n.BYTE&&(H=n.R8I),L===n.SHORT&&(H=n.R16I),L===n.INT&&(H=n.R32I)),m===n.RG&&(L===n.FLOAT&&(H=n.RG32F),L===n.HALF_FLOAT&&(H=n.RG16F),L===n.UNSIGNED_BYTE&&(H=n.RG8)),m===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RG8UI),L===n.UNSIGNED_SHORT&&(H=n.RG16UI),L===n.UNSIGNED_INT&&(H=n.RG32UI),L===n.BYTE&&(H=n.RG8I),L===n.SHORT&&(H=n.RG16I),L===n.INT&&(H=n.RG32I)),m===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RGB8UI),L===n.UNSIGNED_SHORT&&(H=n.RGB16UI),L===n.UNSIGNED_INT&&(H=n.RGB32UI),L===n.BYTE&&(H=n.RGB8I),L===n.SHORT&&(H=n.RGB16I),L===n.INT&&(H=n.RGB32I)),m===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),L===n.UNSIGNED_INT&&(H=n.RGBA32UI),L===n.BYTE&&(H=n.RGBA8I),L===n.SHORT&&(H=n.RGBA16I),L===n.INT&&(H=n.RGBA32I)),m===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),m===n.RGBA){const Me=K?Jr:ze.getTransfer(W);L===n.FLOAT&&(H=n.RGBA32F),L===n.HALF_FLOAT&&(H=n.RGBA16F),L===n.UNSIGNED_BYTE&&(H=Me===Ye?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function b(E,m){let L;return E?m===null||m===rn||m===sr?L=n.DEPTH24_STENCIL8:m===Jt?L=n.DEPTH32F_STENCIL8:m===rr&&(L=n.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===rn||m===sr?L=n.DEPTH_COMPONENT24:m===Jt?L=n.DEPTH_COMPONENT32F:m===rr&&(L=n.DEPTH_COMPONENT16),L}function A(E,m){return h(E)===!0||E.isFramebufferTexture&&E.minFilter!==xt&&E.minFilter!==Mt?Math.log2(Math.max(m.width,m.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?m.mipmaps.length:1}function w(E){const m=E.target;m.removeEventListener("dispose",w),N(m),m.isVideoTexture&&u.delete(m)}function C(E){const m=E.target;m.removeEventListener("dispose",C),M(m)}function N(E){const m=i.get(E);if(m.__webglInit===void 0)return;const L=E.source,W=p.get(L);if(W){const K=W[m.__cacheKey];K.usedTimes--,K.usedTimes===0&&v(E),Object.keys(W).length===0&&p.delete(L)}i.remove(E)}function v(E){const m=i.get(E);n.deleteTexture(m.__webglTexture);const L=E.source,W=p.get(L);delete W[m.__cacheKey],a.memory.textures--}function M(E){const m=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(m.__webglFramebuffer[W]))for(let K=0;K<m.__webglFramebuffer[W].length;K++)n.deleteFramebuffer(m.__webglFramebuffer[W][K]);else n.deleteFramebuffer(m.__webglFramebuffer[W]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[W])}else{if(Array.isArray(m.__webglFramebuffer))for(let W=0;W<m.__webglFramebuffer.length;W++)n.deleteFramebuffer(m.__webglFramebuffer[W]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let W=0;W<m.__webglColorRenderbuffer.length;W++)m.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[W]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const L=E.textures;for(let W=0,K=L.length;W<K;W++){const H=i.get(L[W]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(L[W])}i.remove(E)}let D=0;function G(){D=0}function V(){const E=D;return E>=r.maxTextures&&Re("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),D+=1,E}function Y(E){const m=[];return m.push(E.wrapS),m.push(E.wrapT),m.push(E.wrapR||0),m.push(E.magFilter),m.push(E.minFilter),m.push(E.anisotropy),m.push(E.internalFormat),m.push(E.format),m.push(E.type),m.push(E.generateMipmaps),m.push(E.premultiplyAlpha),m.push(E.flipY),m.push(E.unpackAlignment),m.push(E.colorSpace),m.join()}function X(E,m){const L=i.get(E);if(E.isVideoTexture&&ke(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&L.__version!==E.version){const W=E.image;if(W===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{q(L,E,m);return}}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+m)}function k(E,m){const L=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){q(L,E,m);return}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+m)}function z(E,m){const L=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){q(L,E,m);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+m)}function j(E,m){const L=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&L.__version!==E.version){Z(L,E,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+m)}const ue={[Aa]:n.REPEAT,[hn]:n.CLAMP_TO_EDGE,[wa]:n.MIRRORED_REPEAT},ae={[xt]:n.NEAREST,[Jh]:n.NEAREST_MIPMAP_NEAREST,[Mr]:n.NEAREST_MIPMAP_LINEAR,[Mt]:n.LINEAR,[Es]:n.LINEAR_MIPMAP_NEAREST,[Kn]:n.LINEAR_MIPMAP_LINEAR},fe={[np]:n.NEVER,[op]:n.ALWAYS,[ip]:n.LESS,[Vo]:n.LEQUAL,[rp]:n.EQUAL,[Go]:n.GEQUAL,[sp]:n.GREATER,[ap]:n.NOTEQUAL};function Ne(E,m){if(m.type===Jt&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Mt||m.magFilter===Es||m.magFilter===Mr||m.magFilter===Kn||m.minFilter===Mt||m.minFilter===Es||m.minFilter===Mr||m.minFilter===Kn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ue[m.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ue[m.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ue[m.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ae[m.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ae[m.minFilter]),m.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,fe[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===xt||m.minFilter!==Mr&&m.minFilter!==Kn||m.type===Jt&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Le(E,m){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,m.addEventListener("dispose",w));const W=m.source;let K=p.get(W);K===void 0&&(K={},p.set(W,K));const H=Y(m);if(H!==E.__cacheKey){K[H]===void 0&&(K[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),K[H].usedTimes++;const Me=K[E.__cacheKey];Me!==void 0&&(K[E.__cacheKey].usedTimes--,Me.usedTimes===0&&v(m)),E.__cacheKey=H,E.__webglTexture=K[H].texture}return L}function rt(E,m,L){return Math.floor(Math.floor(E/L)/m)}function nt(E,m,L,W){const H=E.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,L,W,m.data);else{H.sort((Q,re)=>Q.start-re.start);let Me=0;for(let Q=1;Q<H.length;Q++){const re=H[Me],_e=H[Q],Se=re.start+re.count,ie=rt(_e.start,m.width,4),Ue=rt(re.start,m.width,4);_e.start<=Se+1&&ie===Ue&&rt(_e.start+_e.count-1,m.width,4)===ie?re.count=Math.max(re.count,_e.start+_e.count-re.start):(++Me,H[Me]=_e)}H.length=Me+1;const ne=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let Q=0,re=H.length;Q<re;Q++){const _e=H[Q],Se=Math.floor(_e.start/4),ie=Math.ceil(_e.count/4),Ue=Se%m.width,P=Math.floor(Se/m.width),ce=ie,ee=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Ue,P,ce,ee,L,W,m.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ne),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function q(E,m,L){let W=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(W=n.TEXTURE_3D);const K=Le(E,m),H=m.source;t.bindTexture(W,E.__webglTexture,n.TEXTURE0+L);const Me=i.get(H);if(H.version!==Me.__version||K===!0){t.activeTexture(n.TEXTURE0+L);const ne=ze.getPrimaries(ze.workingColorSpace),xe=m.colorSpace===Pn?null:ze.getPrimaries(m.colorSpace),Ae=m.colorSpace===Pn||ne===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Q=S(m.image,!1,r.maxTextureSize);Q=Qe(m,Q);const re=s.convert(m.format,m.colorSpace),_e=s.convert(m.type);let Se=T(m.internalFormat,re,_e,m.colorSpace,m.isVideoTexture);Ne(W,m);let ie;const Ue=m.mipmaps,P=m.isVideoTexture!==!0,ce=Me.__version===void 0||K===!0,ee=H.dataReady,de=A(m,Q);if(m.isDepthTexture)Se=b(m.format===jn,m.type),ce&&(P?t.texStorage2D(n.TEXTURE_2D,1,Se,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Se,Q.width,Q.height,0,re,_e,null));else if(m.isDataTexture)if(Ue.length>0){P&&ce&&t.texStorage2D(n.TEXTURE_2D,de,Se,Ue[0].width,Ue[0].height);for(let J=0,$=Ue.length;J<$;J++)ie=Ue[J],P?ee&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ie.width,ie.height,re,_e,ie.data):t.texImage2D(n.TEXTURE_2D,J,Se,ie.width,ie.height,0,re,_e,ie.data);m.generateMipmaps=!1}else P?(ce&&t.texStorage2D(n.TEXTURE_2D,de,Se,Q.width,Q.height),ee&&nt(m,Q,re,_e)):t.texImage2D(n.TEXTURE_2D,0,Se,Q.width,Q.height,0,re,_e,Q.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){P&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Se,Ue[0].width,Ue[0].height,Q.depth);for(let J=0,$=Ue.length;J<$;J++)if(ie=Ue[J],m.format!==Xt)if(re!==null)if(P){if(ee)if(m.layerUpdates.size>0){const te=Ol(ie.width,ie.height,m.format,m.type);for(const we of m.layerUpdates){const et=ie.data.subarray(we*te/ie.data.BYTES_PER_ELEMENT,(we+1)*te/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,we,ie.width,ie.height,1,re,et)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ie.width,ie.height,Q.depth,re,ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Se,ie.width,ie.height,Q.depth,0,ie.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ie.width,ie.height,Q.depth,re,_e,ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Se,ie.width,ie.height,Q.depth,0,re,_e,ie.data)}else{P&&ce&&t.texStorage2D(n.TEXTURE_2D,de,Se,Ue[0].width,Ue[0].height);for(let J=0,$=Ue.length;J<$;J++)ie=Ue[J],m.format!==Xt?re!==null?P?ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ie.width,ie.height,re,ie.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Se,ie.width,ie.height,0,ie.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ee&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ie.width,ie.height,re,_e,ie.data):t.texImage2D(n.TEXTURE_2D,J,Se,ie.width,ie.height,0,re,_e,ie.data)}else if(m.isDataArrayTexture)if(P){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Se,Q.width,Q.height,Q.depth),ee)if(m.layerUpdates.size>0){const J=Ol(Q.width,Q.height,m.format,m.type);for(const $ of m.layerUpdates){const te=Q.data.subarray($*J/Q.data.BYTES_PER_ELEMENT,($+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,re,_e,te)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,re,_e,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,Q.width,Q.height,Q.depth,0,re,_e,Q.data);else if(m.isData3DTexture)P?(ce&&t.texStorage3D(n.TEXTURE_3D,de,Se,Q.width,Q.height,Q.depth),ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,re,_e,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Se,Q.width,Q.height,Q.depth,0,re,_e,Q.data);else if(m.isFramebufferTexture){if(ce)if(P)t.texStorage2D(n.TEXTURE_2D,de,Se,Q.width,Q.height);else{let J=Q.width,$=Q.height;for(let te=0;te<de;te++)t.texImage2D(n.TEXTURE_2D,te,Se,J,$,0,re,_e,null),J>>=1,$>>=1}}else if(Ue.length>0){if(P&&ce){const J=ve(Ue[0]);t.texStorage2D(n.TEXTURE_2D,de,Se,J.width,J.height)}for(let J=0,$=Ue.length;J<$;J++)ie=Ue[J],P?ee&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,re,_e,ie):t.texImage2D(n.TEXTURE_2D,J,Se,re,_e,ie);m.generateMipmaps=!1}else if(P){if(ce){const J=ve(Q);t.texStorage2D(n.TEXTURE_2D,de,Se,J.width,J.height)}ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re,_e,Q)}else t.texImage2D(n.TEXTURE_2D,0,Se,re,_e,Q);h(m)&&f(W),Me.__version=H.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function Z(E,m,L){if(m.image.length!==6)return;const W=Le(E,m),K=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+L);const H=i.get(K);if(K.version!==H.__version||W===!0){t.activeTexture(n.TEXTURE0+L);const Me=ze.getPrimaries(ze.workingColorSpace),ne=m.colorSpace===Pn?null:ze.getPrimaries(m.colorSpace),xe=m.colorSpace===Pn||Me===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ae=m.isCompressedTexture||m.image[0].isCompressedTexture,Q=m.image[0]&&m.image[0].isDataTexture,re=[];for(let $=0;$<6;$++)!Ae&&!Q?re[$]=S(m.image[$],!0,r.maxCubemapSize):re[$]=Q?m.image[$].image:m.image[$],re[$]=Qe(m,re[$]);const _e=re[0],Se=s.convert(m.format,m.colorSpace),ie=s.convert(m.type),Ue=T(m.internalFormat,Se,ie,m.colorSpace),P=m.isVideoTexture!==!0,ce=H.__version===void 0||W===!0,ee=K.dataReady;let de=A(m,_e);Ne(n.TEXTURE_CUBE_MAP,m);let J;if(Ae){P&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Ue,_e.width,_e.height);for(let $=0;$<6;$++){J=re[$].mipmaps;for(let te=0;te<J.length;te++){const we=J[te];m.format!==Xt?Se!==null?P?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,te,0,0,we.width,we.height,Se,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,te,Ue,we.width,we.height,0,we.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,te,0,0,we.width,we.height,Se,ie,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,te,Ue,we.width,we.height,0,Se,ie,we.data)}}}else{if(J=m.mipmaps,P&&ce){J.length>0&&de++;const $=ve(re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Ue,$.width,$.height)}for(let $=0;$<6;$++)if(Q){P?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,re[$].width,re[$].height,Se,ie,re[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ue,re[$].width,re[$].height,0,Se,ie,re[$].data);for(let te=0;te<J.length;te++){const et=J[te].image[$].image;P?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,te+1,0,0,et.width,et.height,Se,ie,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,te+1,Ue,et.width,et.height,0,Se,ie,et.data)}}else{P?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Se,ie,re[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ue,Se,ie,re[$]);for(let te=0;te<J.length;te++){const we=J[te];P?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,te+1,0,0,Se,ie,we.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,te+1,Ue,Se,ie,we.image[$])}}}h(m)&&f(n.TEXTURE_CUBE_MAP),H.__version=K.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function pe(E,m,L,W,K,H){const Me=s.convert(L.format,L.colorSpace),ne=s.convert(L.type),xe=T(L.internalFormat,Me,ne,L.colorSpace),Ae=i.get(m),Q=i.get(L);if(Q.__renderTarget=m,!Ae.__hasExternalTextures){const re=Math.max(1,m.width>>H),_e=Math.max(1,m.height>>H);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,H,xe,re,_e,m.depth,0,Me,ne,null):t.texImage2D(K,H,xe,re,_e,0,Me,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ut(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,K,Q.__webglTexture,0,R(m)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,K,Q.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(E,m,L){if(n.bindRenderbuffer(n.RENDERBUFFER,E),m.depthBuffer){const W=m.depthTexture,K=W&&W.isDepthTexture?W.type:null,H=b(m.stencilBuffer,K),Me=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ut(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(m),H,m.width,m.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(m),H,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,H,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,E)}else{const W=m.textures;for(let K=0;K<W.length;K++){const H=W[K],Me=s.convert(H.format,H.colorSpace),ne=s.convert(H.type),xe=T(H.internalFormat,Me,ne,H.colorSpace);ut(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(m),xe,m.width,m.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(m),xe,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,xe,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(E,m,L){const W=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(m.depthTexture);if(K.__renderTarget=m,(!K.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,m.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,m.depthTexture);const Ae=s.convert(m.depthTexture.format),Q=s.convert(m.depthTexture.type);let re;m.depthTexture.format===vn?re=n.DEPTH_COMPONENT24:m.depthTexture.format===jn&&(re=n.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,re,m.width,m.height,0,Ae,Q,null)}}else X(m.depthTexture,0);const H=K.__webglTexture,Me=R(m),ne=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,xe=m.depthTexture.format===jn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===vn)ut(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ne,H,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ne,H,0);else if(m.depthTexture.format===jn)ut(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ne,H,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ne,H,0);else throw new Error("Unknown depthTexture format")}function Ve(E){const m=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==E.depthTexture){const W=E.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),W){const K=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),m.__depthDisposeCallback=K}m.__boundDepthTexture=W}if(E.depthTexture&&!m.__autoAllocateDepthBuffer)if(L)for(let W=0;W<6;W++)ge(m.__webglFramebuffer[W],E,W);else{const W=E.texture.mipmaps;W&&W.length>0?ge(m.__webglFramebuffer[0],E,0):ge(m.__webglFramebuffer,E,0)}else if(L){m.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[W]),m.__webglDepthbuffer[W]===void 0)m.__webglDepthbuffer[W]=n.createRenderbuffer(),Ce(m.__webglDepthbuffer[W],E,!1);else{const K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=m.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,H)}}else{const W=E.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),Ce(m.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(E,m,L){const W=i.get(E);m!==void 0&&pe(W.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Ve(E)}function Be(E){const m=E.texture,L=i.get(E),W=i.get(m);E.addEventListener("dispose",C);const K=E.textures,H=E.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=m.version,a.memory.textures++),H){L.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer[ne]=[];for(let xe=0;xe<m.mipmaps.length;xe++)L.__webglFramebuffer[ne][xe]=n.createFramebuffer()}else L.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer=[];for(let ne=0;ne<m.mipmaps.length;ne++)L.__webglFramebuffer[ne]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ne=0,xe=K.length;ne<xe;ne++){const Ae=i.get(K[ne]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&ut(E)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ne=0;ne<K.length;ne++){const xe=K[ne];L.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ne]);const Ae=s.convert(xe.format,xe.colorSpace),Q=s.convert(xe.type),re=T(xe.internalFormat,Ae,Q,xe.colorSpace,E.isXRRenderTarget===!0),_e=R(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,re,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,L.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,m);for(let ne=0;ne<6;ne++)if(m.mipmaps&&m.mipmaps.length>0)for(let xe=0;xe<m.mipmaps.length;xe++)pe(L.__webglFramebuffer[ne][xe],E,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe);else pe(L.__webglFramebuffer[ne],E,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);h(m)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ne=0,xe=K.length;ne<xe;ne++){const Ae=K[ne],Q=i.get(Ae);let re=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,Q.__webglTexture),Ne(re,Ae),pe(L.__webglFramebuffer,E,Ae,n.COLOR_ATTACHMENT0+ne,re,0),h(Ae)&&f(re)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,W.__webglTexture),Ne(ne,m),m.mipmaps&&m.mipmaps.length>0)for(let xe=0;xe<m.mipmaps.length;xe++)pe(L.__webglFramebuffer[xe],E,m,n.COLOR_ATTACHMENT0,ne,xe);else pe(L.__webglFramebuffer,E,m,n.COLOR_ATTACHMENT0,ne,0);h(m)&&f(ne),t.unbindTexture()}E.depthBuffer&&Ve(E)}function We(E){const m=E.textures;for(let L=0,W=m.length;L<W;L++){const K=m[L];if(h(K)){const H=y(E),Me=i.get(K).__webglTexture;t.bindTexture(H,Me),f(H),t.unbindTexture()}}}const Ze=[],Ie=[];function ct(E){if(E.samples>0){if(ut(E)===!1){const m=E.textures,L=E.width,W=E.height;let K=n.COLOR_BUFFER_BIT;const H=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(E),ne=m.length>1;if(ne)for(let Ae=0;Ae<m.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const xe=E.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ae=0;Ae<m.length;Ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ae]);const Q=i.get(m[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,L,W,0,0,L,W,K,n.NEAREST),l===!0&&(Ze.length=0,Ie.length=0,Ze.push(n.COLOR_ATTACHMENT0+Ae),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ze.push(H),Ie.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ie)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Ae=0;Ae<m.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ae]);const Q=i.get(m[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const m=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function R(E){return Math.min(r.maxSamples,E.samples)}function ut(E){const m=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function ke(E){const m=a.render.frame;u.get(E)!==m&&(u.set(E,m),E.update())}function Qe(E,m){const L=E.colorSpace,W=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==Pi&&L!==Pn&&(ze.getTransfer(L)===Ye?(W!==Xt||K!==zt)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",L)),m}function ve(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=_t,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Px(n,e){function t(i,r=Pn){let s;const a=ze.getTransfer(r);if(i===zt)return n.UNSIGNED_BYTE;if(i===No)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Iu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Pu)return n.BYTE;if(i===Du)return n.SHORT;if(i===rr)return n.UNSIGNED_SHORT;if(i===Uo)return n.INT;if(i===rn)return n.UNSIGNED_INT;if(i===Jt)return n.FLOAT;if(i===xn)return n.HALF_FLOAT;if(i===Uu)return n.ALPHA;if(i===Nu)return n.RGB;if(i===Xt)return n.RGBA;if(i===vn)return n.DEPTH_COMPONENT;if(i===jn)return n.DEPTH_STENCIL;if(i===Fu)return n.RED;if(i===Oo)return n.RED_INTEGER;if(i===Ci)return n.RG;if(i===Bo)return n.RG_INTEGER;if(i===zo)return n.RGBA_INTEGER;if(i===Wr||i===Xr||i===qr||i===Yr)if(a===Ye)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ra||i===Ca||i===Pa||i===Da)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ra)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ca)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Da)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===La||i===Ia||i===Ua||i===Na||i===Fa||i===Oa||i===Ba)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===La||i===Ia)return a===Ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ua)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Na)return s.COMPRESSED_R11_EAC;if(i===Fa)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Oa)return s.COMPRESSED_RG11_EAC;if(i===Ba)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===za||i===Va||i===Ga||i===Ha||i===ka||i===Wa||i===Xa||i===qa||i===Ya||i===$a||i===Ka||i===ja||i===Za||i===Ja)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===za)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Va)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ga)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ha)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ka)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wa)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xa)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qa)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ya)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$a)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ka)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ja)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Za)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ja)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qa||i===eo||i===to)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qa)return a===Ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===to)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===no||i===io||i===ro||i===so)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===no)return s.COMPRESSED_RED_RGTC1_EXT;if(i===io)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ro)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===so)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ix{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ku(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new sn({vertexShader:Dx,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ux extends Oi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,_=null,x=null;const S=typeof XRWebGLBinding<"u",h=new Ix,f={},y=t.getContextAttributes();let T=null,b=null;const A=[],w=[],C=new je;let N=null;const v=new Bt;v.viewport=new lt;const M=new Bt;M.viewport=new lt;const D=[v,M],G=new Wp;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=A[q];return Z===void 0&&(Z=new Xs,A[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=A[q];return Z===void 0&&(Z=new Xs,A[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=A[q];return Z===void 0&&(Z=new Xs,A[q]=Z),Z.getHandSpace()};function X(q){const Z=w.indexOf(q.inputSource);if(Z===-1)return;const pe=A[Z];pe!==void 0&&(pe.update(q.inputSource,q.frame,c||a),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",z);for(let q=0;q<A.length;q++){const Z=w[q];Z!==null&&(w[q]=null,A[q].disconnect(Z))}V=null,Y=null,h.reset();for(const q in f)delete f[q];e.setRenderTarget(T),_=null,p=null,d=null,r=null,b=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",k),r.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ce=null,ge=null;y.depth&&(ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=y.stencil?jn:vn,Ce=y.stencil?sr:rn);const Ve={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(Ve),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new tn(p.textureWidth,p.textureHeight,{format:Xt,type:zt,depthTexture:new or(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const pe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),b=new tn(_.framebufferWidth,_.framebufferHeight,{format:Xt,type:zt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function z(q){for(let Z=0;Z<q.removed.length;Z++){const pe=q.removed[Z],Ce=w.indexOf(pe);Ce>=0&&(w[Ce]=null,A[Ce].disconnect(pe))}for(let Z=0;Z<q.added.length;Z++){const pe=q.added[Z];let Ce=w.indexOf(pe);if(Ce===-1){for(let Ve=0;Ve<A.length;Ve++)if(Ve>=w.length){w.push(pe),Ce=Ve;break}else if(w[Ve]===null){w[Ve]=pe,Ce=Ve;break}if(Ce===-1)break}const ge=A[Ce];ge&&ge.connect(pe)}}const j=new O,ue=new O;function ae(q,Z,pe){j.setFromMatrixPosition(Z.matrixWorld),ue.setFromMatrixPosition(pe.matrixWorld);const Ce=j.distanceTo(ue),ge=Z.projectionMatrix.elements,Ve=pe.projectionMatrix.elements,_t=ge[14]/(ge[10]-1),Be=ge[14]/(ge[10]+1),We=(ge[9]+1)/ge[5],Ze=(ge[9]-1)/ge[5],Ie=(ge[8]-1)/ge[0],ct=(Ve[8]+1)/Ve[0],R=_t*Ie,ut=_t*ct,ke=Ce/(-Ie+ct),Qe=ke*-Ie;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Qe),q.translateZ(ke),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ge[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ve=_t+ke,E=Be+ke,m=R-Qe,L=ut+(Ce-Qe),W=We*Be/E*ve,K=Ze*Be/E*ve;q.projectionMatrix.makePerspective(m,L,W,K,ve,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function fe(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Z=q.near,pe=q.far;h.texture!==null&&(h.depthNear>0&&(Z=h.depthNear),h.depthFar>0&&(pe=h.depthFar)),G.near=M.near=v.near=Z,G.far=M.far=v.far=pe,(V!==G.near||Y!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),V=G.near,Y=G.far),G.layers.mask=q.layers.mask|6,v.layers.mask=G.layers.mask&3,M.layers.mask=G.layers.mask&5;const Ce=q.parent,ge=G.cameras;fe(G,Ce);for(let Ve=0;Ve<ge.length;Ve++)fe(ge[Ve],Ce);ge.length===2?ae(G,v,M):G.projectionMatrix.copy(v.projectionMatrix),Ne(q,G,Ce)};function Ne(q,Z,pe){pe===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ao*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(p===null&&_===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=q)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(G)},this.getCameraTexture=function(q){return f[q]};let Le=null;function rt(q,Z){if(u=Z.getViewerPose(c||a),x=Z,u!==null){const pe=u.views;_!==null&&(e.setRenderTargetFramebuffer(b,_.framebuffer),e.setRenderTarget(b));let Ce=!1;pe.length!==G.cameras.length&&(G.cameras.length=0,Ce=!0);for(let Be=0;Be<pe.length;Be++){const We=pe[Be];let Ze=null;if(_!==null)Ze=_.getViewport(We);else{const ct=d.getViewSubImage(p,We);Ze=ct.viewport,Be===0&&(e.setRenderTargetTextures(b,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(b))}let Ie=D[Be];Ie===void 0&&(Ie=new Bt,Ie.layers.enable(Be),Ie.viewport=new lt,D[Be]=Ie),Ie.matrix.fromArray(We.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(We.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Be===0&&(G.matrix.copy(Ie.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ce===!0&&G.cameras.push(Ie)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const Be=d.getDepthInformation(pe[0]);Be&&Be.isValid&&Be.texture&&h.init(Be,r.renderState)}if(ge&&ge.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let Be=0;Be<pe.length;Be++){const We=pe[Be].camera;if(We){let Ze=f[We];Ze||(Ze=new Ku,f[We]=Ze);const Ie=d.getCameraImage(We);Ze.sourceTexture=Ie}}}}for(let pe=0;pe<A.length;pe++){const Ce=w[pe],ge=A[pe];Ce!==null&&ge!==void 0&&ge.update(Ce,Z,c||a)}Le&&Le(q,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),x=null}const nt=new Zu;nt.setAnimationLoop(rt),this.setAnimationLoop=function(q){Le=q},this.dispose=function(){}}}const kn=new Sn,Nx=new dt;function Fx(n,e){function t(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function i(h,f){f.color.getRGB(h.fogColor.value,Wu(n)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function r(h,f,y,T,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(h,f):f.isMeshToonMaterial?(s(h,f),d(h,f)):f.isMeshPhongMaterial?(s(h,f),u(h,f)):f.isMeshStandardMaterial?(s(h,f),p(h,f),f.isMeshPhysicalMaterial&&_(h,f,b)):f.isMeshMatcapMaterial?(s(h,f),x(h,f)):f.isMeshDepthMaterial?s(h,f):f.isMeshDistanceMaterial?(s(h,f),S(h,f)):f.isMeshNormalMaterial?s(h,f):f.isLineBasicMaterial?(a(h,f),f.isLineDashedMaterial&&o(h,f)):f.isPointsMaterial?l(h,f,y,T):f.isSpriteMaterial?c(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,t(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===Ct&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,t(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===Ct&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,t(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,t(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);const y=e.get(f),T=y.envMap,b=y.envMapRotation;T&&(h.envMap.value=T,kn.copy(b),kn.x*=-1,kn.y*=-1,kn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),h.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(kn)),h.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap&&(h.lightMap.value=f.lightMap,h.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,h.lightMapTransform)),f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,h.aoMapTransform))}function a(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform))}function o(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function l(h,f,y,T){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*y,h.scale.value=T*.5,f.map&&(h.map.value=f.map,t(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function c(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function u(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function d(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function p(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,h.roughnessMapTransform)),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function _(h,f,y){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&h.clearcoatNormalScale.value.negate())),f.dispersion>0&&(h.dispersion.value=f.dispersion),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=y.texture,h.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,h.specularIntensityMapTransform))}function x(h,f){f.matcap&&(h.matcap.value=f.matcap)}function S(h,f){const y=e.get(f).light;h.referencePosition.value.setFromMatrixPosition(y.matrixWorld),h.nearDistance.value=y.shadow.camera.near,h.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ox(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const b=T.program;i.uniformBlockBinding(y,b)}function c(y,T){let b=r[y.id];b===void 0&&(x(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",h));const A=T.program;i.updateUBOMapping(y,A);const w=e.render.frame;s[y.id]!==w&&(p(y),s[y.id]=w)}function u(y){const T=d();y.__bindingPointIndex=T;const b=n.createBuffer(),A=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const T=r[y.id],b=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let w=0,C=b.length;w<C;w++){const N=Array.isArray(b[w])?b[w]:[b[w]];for(let v=0,M=N.length;v<M;v++){const D=N[v];if(_(D,w,v,A)===!0){const G=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let X=0;X<V.length;X++){const k=V[X],z=S(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,G+Y,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,Y),Y+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(y,T,b,A){const w=y.value,C=T+"_"+b;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const N=A[C];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return A[C]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function x(y){const T=y.uniforms;let b=0;const A=16;for(let C=0,N=T.length;C<N;C++){const v=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,D=v.length;M<D;M++){const G=v[M],V=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,X=V.length;Y<X;Y++){const k=V[Y],z=S(k),j=b%A,ue=j%z.boundary,ae=j+ue;b+=ue,ae!==0&&A-ae<z.storage&&(b+=A-ae),G.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=z.storage}}}const w=b%A;return w>0&&(b+=A-w),y.__size=b,y.__cache={},this}function S(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Re("WebGLRenderer: Unsupported uniform value type.",y),T}function h(y){const T=y.target;T.removeEventListener("dispose",h);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}const Bx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kt=null;function zx(){return Kt===null&&(Kt=new Fp(Bx,16,16,Ci,xn),Kt.name="DFG_LUT",Kt.minFilter=Mt,Kt.magFilter=Mt,Kt.wrapS=hn,Kt.wrapT=hn,Kt.generateMipmaps=!1,Kt.needsUpdate=!0),Kt}class Vx{constructor(e={}){const{canvas:t=lp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:_=zt}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const S=_,h=new Set([zo,Bo,Oo]),f=new Set([zt,rn,rr,sr,No,Fo]),y=new Uint32Array(4),T=new Int32Array(4);let b=null,A=null;const w=[],C=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=en,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let M=!1;this._outputColorSpace=Ot;let D=0,G=0,V=null,Y=-1,X=null;const k=new lt,z=new lt;let j=null;const ue=new $e(0);let ae=0,fe=t.width,Ne=t.height,Le=1,rt=null,nt=null;const q=new lt(0,0,fe,Ne),Z=new lt(0,0,fe,Ne);let pe=!1;const Ce=new $u;let ge=!1,Ve=!1;const _t=new dt,Be=new O,We=new lt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function ct(){return V===null?Le:1}let R=i;function ut(g,I){return t.getContext(g,I)}try{const g={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Io}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),R===null){const I="webgl2";if(R=ut(I,g),R===null)throw ut(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw He("WebGLRenderer: "+g.message),g}let ke,Qe,ve,E,m,L,W,K,H,Me,ne,xe,Ae,Q,re,_e,Se,ie,Ue,P,ce,ee,de,J;function $(){ke=new zg(R),ke.init(),ee=new Px(R,ke),Qe=new Pg(R,ke,e,ee),ve=new Rx(R,ke),Qe.reversedDepthBuffer&&p&&ve.buffers.depth.setReversed(!0),E=new Hg(R),m=new hx,L=new Cx(R,ke,ve,m,Qe,ee,E),W=new Lg(v),K=new Bg(v),H=new qp(R),de=new Rg(R,H),Me=new Vg(R,H,E,de),ne=new Wg(R,Me,H,E),Ue=new kg(R,Qe,L),_e=new Dg(m),xe=new dx(v,W,K,ke,Qe,de,_e),Ae=new Fx(v,m),Q=new mx,re=new Mx(ke),ie=new wg(v,W,K,ve,ne,x,l),Se=new Ax(v,ne,Qe),J=new Ox(R,E,Qe,ve),P=new Cg(R,ke,E),ce=new Gg(R,ke,E),E.programs=xe.programs,v.capabilities=Qe,v.extensions=ke,v.properties=m,v.renderLists=Q,v.shadowMap=Se,v.state=ve,v.info=E}$(),S!==zt&&(N=new qg(S,t.width,t.height,r,s));const te=new Ux(v,R);this.xr=te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const g=ke.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=ke.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(g){g!==void 0&&(Le=g,this.setSize(fe,Ne,!1))},this.getSize=function(g){return g.set(fe,Ne)},this.setSize=function(g,I,B=!0){if(te.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=g,Ne=I,t.width=Math.floor(g*Le),t.height=Math.floor(I*Le),B===!0&&(t.style.width=g+"px",t.style.height=I+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,g,I)},this.getDrawingBufferSize=function(g){return g.set(fe*Le,Ne*Le).floor()},this.setDrawingBufferSize=function(g,I,B){fe=g,Ne=I,Le=B,t.width=Math.floor(g*B),t.height=Math.floor(I*B),this.setViewport(0,0,g,I)},this.setEffects=function(g){if(S===zt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let I=0;I<g.length;I++)if(g[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(k)},this.getViewport=function(g){return g.copy(q)},this.setViewport=function(g,I,B,F){g.isVector4?q.set(g.x,g.y,g.z,g.w):q.set(g,I,B,F),ve.viewport(k.copy(q).multiplyScalar(Le).round())},this.getScissor=function(g){return g.copy(Z)},this.setScissor=function(g,I,B,F){g.isVector4?Z.set(g.x,g.y,g.z,g.w):Z.set(g,I,B,F),ve.scissor(z.copy(Z).multiplyScalar(Le).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(g){ve.setScissorTest(pe=g)},this.setOpaqueSort=function(g){rt=g},this.setTransparentSort=function(g){nt=g},this.getClearColor=function(g){return g.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(g=!0,I=!0,B=!0){let F=0;if(g){let U=!1;if(V!==null){const se=V.texture.format;U=h.has(se)}if(U){const se=V.texture.type,he=f.has(se),le=ie.getClearColor(),me=ie.getClearAlpha(),Ee=le.r,Te=le.g,ye=le.b;he?(y[0]=Ee,y[1]=Te,y[2]=ye,y[3]=me,R.clearBufferuiv(R.COLOR,0,y)):(T[0]=Ee,T[1]=Te,T[2]=ye,T[3]=me,R.clearBufferiv(R.COLOR,0,T))}else F|=R.COLOR_BUFFER_BIT}I&&(F|=R.DEPTH_BUFFER_BIT),B&&(F|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),ie.dispose(),Q.dispose(),re.dispose(),m.dispose(),W.dispose(),K.dispose(),ne.dispose(),de.dispose(),J.dispose(),xe.dispose(),te.dispose(),te.removeEventListener("sessionstart",Xo),te.removeEventListener("sessionend",qo),Fn.stop()};function we(g){g.preventDefault(),Sl("WebGLRenderer: Context Lost."),M=!0}function et(){Sl("WebGLRenderer: Context Restored."),M=!1;const g=E.autoReset,I=Se.enabled,B=Se.autoUpdate,F=Se.needsUpdate,U=Se.type;$(),E.autoReset=g,Se.enabled=I,Se.autoUpdate=B,Se.needsUpdate=F,Se.type=U}function Xe(g){He("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function $t(g){const I=g.target;I.removeEventListener("dispose",$t),an(I)}function an(g){sf(g),m.remove(g)}function sf(g){const I=m.get(g).programs;I!==void 0&&(I.forEach(function(B){xe.releaseProgram(B)}),g.isShaderMaterial&&xe.releaseShaderCache(g))}this.renderBufferDirect=function(g,I,B,F,U,se){I===null&&(I=Ze);const he=U.isMesh&&U.matrixWorld.determinant()<0,le=of(g,I,B,F,U);ve.setMaterial(F,he);let me=B.index,Ee=1;if(F.wireframe===!0){if(me=Me.getWireframeAttribute(B),me===void 0)return;Ee=2}const Te=B.drawRange,ye=B.attributes.position;let Fe=Te.start*Ee,Ke=(Te.start+Te.count)*Ee;se!==null&&(Fe=Math.max(Fe,se.start*Ee),Ke=Math.min(Ke,(se.start+se.count)*Ee)),me!==null?(Fe=Math.max(Fe,0),Ke=Math.min(Ke,me.count)):ye!=null&&(Fe=Math.max(Fe,0),Ke=Math.min(Ke,ye.count));const at=Ke-Fe;if(at<0||at===1/0)return;de.setup(U,F,le,B,me);let ot,Je=P;if(me!==null&&(ot=H.get(me),Je=ce,Je.setIndex(ot)),U.isMesh)F.wireframe===!0?(ve.setLineWidth(F.wireframeLinewidth*ct()),Je.setMode(R.LINES)):Je.setMode(R.TRIANGLES);else if(U.isLine){let be=F.linewidth;be===void 0&&(be=1),ve.setLineWidth(be*ct()),U.isLineSegments?Je.setMode(R.LINES):U.isLineLoop?Je.setMode(R.LINE_LOOP):Je.setMode(R.LINE_STRIP)}else U.isPoints?Je.setMode(R.POINTS):U.isSprite&&Je.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ar("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const be=U._multiDrawStarts,qe=U._multiDrawCounts,Ge=U._multiDrawCount,Pt=me?H.get(me).bytesPerElement:1,oi=m.get(F).currentProgram.getUniforms();for(let Dt=0;Dt<Ge;Dt++)oi.setValue(R,"_gl_DrawID",Dt),Je.render(be[Dt]/Pt,qe[Dt])}else if(U.isInstancedMesh)Je.renderInstances(Fe,at,U.count);else if(B.isInstancedBufferGeometry){const be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,qe=Math.min(B.instanceCount,be);Je.renderInstances(Fe,at,qe)}else Je.render(Fe,at)};function Wo(g,I,B){g.transparent===!0&&g.side===dn&&g.forceSinglePass===!1?(g.side=Ct,g.needsUpdate=!0,pr(g,I,B),g.side=Un,g.needsUpdate=!0,pr(g,I,B),g.side=dn):pr(g,I,B)}this.compile=function(g,I,B=null){B===null&&(B=g),A=re.get(B),A.init(I),C.push(A),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(A.pushLight(U),U.castShadow&&A.pushShadow(U))}),g!==B&&g.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(A.pushLight(U),U.castShadow&&A.pushShadow(U))}),A.setupLights();const F=new Set;return g.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){const le=se[he];Wo(le,B,U),F.add(le)}else Wo(se,B,U),F.add(se)}),A=C.pop(),F},this.compileAsync=function(g,I,B=null){const F=this.compile(g,I,B);return new Promise(U=>{function se(){if(F.forEach(function(he){m.get(he).currentProgram.isReady()&&F.delete(he)}),F.size===0){U(g);return}setTimeout(se,10)}ke.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let ms=null;function af(g){ms&&ms(g)}function Xo(){Fn.stop()}function qo(){Fn.start()}const Fn=new Zu;Fn.setAnimationLoop(af),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(g){ms=g,te.setAnimationLoop(g),g===null?Fn.stop():Fn.start()},te.addEventListener("sessionstart",Xo),te.addEventListener("sessionend",qo),this.render=function(g,I){if(I!==void 0&&I.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const B=te.enabled===!0&&te.isPresenting===!0,F=N!==null&&(V===null||B)&&N.begin(v,V);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(I),I=te.getCamera()),g.isScene===!0&&g.onBeforeRender(v,g,I,V),A=re.get(g,C.length),A.init(I),C.push(A),_t.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ce.setFromProjectionMatrix(_t,Qt,I.reversedDepth),Ve=this.localClippingEnabled,ge=_e.init(this.clippingPlanes,Ve),b=Q.get(g,w.length),b.init(),w.push(b),te.enabled===!0&&te.isPresenting===!0){const he=v.xr.getDepthSensingMesh();he!==null&&_s(he,I,-1/0,v.sortObjects)}_s(g,I,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(rt,nt),Ie=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ie&&ie.addToRenderList(b,g),this.info.render.frame++,ge===!0&&_e.beginShadows();const U=A.state.shadowsArray;if(Se.render(U,g,I),ge===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(F&&N.hasRenderPass())===!1){const he=b.opaque,le=b.transmissive;if(A.setupLights(),I.isArrayCamera){const me=I.cameras;if(le.length>0)for(let Ee=0,Te=me.length;Ee<Te;Ee++){const ye=me[Ee];$o(he,le,g,ye)}Ie&&ie.render(g);for(let Ee=0,Te=me.length;Ee<Te;Ee++){const ye=me[Ee];Yo(b,g,ye,ye.viewport)}}else le.length>0&&$o(he,le,g,I),Ie&&ie.render(g),Yo(b,g,I)}V!==null&&G===0&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),F&&N.end(v),g.isScene===!0&&g.onAfterRender(v,g,I),de.resetDefaultState(),Y=-1,X=null,C.pop(),C.length>0?(A=C[C.length-1],ge===!0&&_e.setGlobalState(v.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?b=w[w.length-1]:b=null};function _s(g,I,B,F){if(g.visible===!1)return;if(g.layers.test(I.layers)){if(g.isGroup)B=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(I);else if(g.isLight)A.pushLight(g),g.castShadow&&A.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||Ce.intersectsSprite(g)){F&&We.setFromMatrixPosition(g.matrixWorld).applyMatrix4(_t);const he=ne.update(g),le=g.material;le.visible&&b.push(g,he,le,B,We.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||Ce.intersectsObject(g))){const he=ne.update(g),le=g.material;if(F&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),We.copy(g.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),We.copy(he.boundingSphere.center)),We.applyMatrix4(g.matrixWorld).applyMatrix4(_t)),Array.isArray(le)){const me=he.groups;for(let Ee=0,Te=me.length;Ee<Te;Ee++){const ye=me[Ee],Fe=le[ye.materialIndex];Fe&&Fe.visible&&b.push(g,he,Fe,B,We.z,ye)}}else le.visible&&b.push(g,he,le,B,We.z,null)}}const se=g.children;for(let he=0,le=se.length;he<le;he++)_s(se[he],I,B,F)}function Yo(g,I,B,F){const{opaque:U,transmissive:se,transparent:he}=g;A.setupLightsView(B),ge===!0&&_e.setGlobalState(v.clippingPlanes,B),F&&ve.viewport(k.copy(F)),U.length>0&&hr(U,I,B),se.length>0&&hr(se,I,B),he.length>0&&hr(he,I,B),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function $o(g,I,B,F){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[F.id]===void 0){const Fe=ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[F.id]=new tn(1,1,{generateMipmaps:!0,type:Fe?xn:zt,minFilter:Kn,samples:Qe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const se=A.state.transmissionRenderTarget[F.id],he=F.viewport||k;se.setSize(he.z*v.transmissionResolutionScale,he.w*v.transmissionResolutionScale);const le=v.getRenderTarget(),me=v.getActiveCubeFace(),Ee=v.getActiveMipmapLevel();v.setRenderTarget(se),v.getClearColor(ue),ae=v.getClearAlpha(),ae<1&&v.setClearColor(16777215,.5),v.clear(),Ie&&ie.render(B);const Te=v.toneMapping;v.toneMapping=en;const ye=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),A.setupLightsView(F),ge===!0&&_e.setGlobalState(v.clippingPlanes,F),hr(g,B,F),L.updateMultisampleRenderTarget(se),L.updateRenderTargetMipmap(se),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ke=0,at=I.length;Ke<at;Ke++){const ot=I[Ke],{object:Je,geometry:be,material:qe,group:Ge}=ot;if(qe.side===dn&&Je.layers.test(F.layers)){const Pt=qe.side;qe.side=Ct,qe.needsUpdate=!0,Ko(Je,B,F,be,qe,Ge),qe.side=Pt,qe.needsUpdate=!0,Fe=!0}}Fe===!0&&(L.updateMultisampleRenderTarget(se),L.updateRenderTargetMipmap(se))}v.setRenderTarget(le,me,Ee),v.setClearColor(ue,ae),ye!==void 0&&(F.viewport=ye),v.toneMapping=Te}function hr(g,I,B){const F=I.isScene===!0?I.overrideMaterial:null;for(let U=0,se=g.length;U<se;U++){const he=g[U],{object:le,geometry:me,group:Ee}=he;let Te=he.material;Te.allowOverride===!0&&F!==null&&(Te=F),le.layers.test(B.layers)&&Ko(le,I,B,me,Te,Ee)}}function Ko(g,I,B,F,U,se){g.onBeforeRender(v,I,B,F,U,se),g.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),U.onBeforeRender(v,I,B,F,g,se),U.transparent===!0&&U.side===dn&&U.forceSinglePass===!1?(U.side=Ct,U.needsUpdate=!0,v.renderBufferDirect(B,I,F,U,g,se),U.side=Un,U.needsUpdate=!0,v.renderBufferDirect(B,I,F,U,g,se),U.side=dn):v.renderBufferDirect(B,I,F,U,g,se),g.onAfterRender(v,I,B,F,U,se)}function pr(g,I,B){I.isScene!==!0&&(I=Ze);const F=m.get(g),U=A.state.lights,se=A.state.shadowsArray,he=U.state.version,le=xe.getParameters(g,U.state,se,I,B),me=xe.getProgramCacheKey(le);let Ee=F.programs;F.environment=g.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(g.isMeshStandardMaterial?K:W).get(g.envMap||F.environment),F.envMapRotation=F.environment!==null&&g.envMap===null?I.environmentRotation:g.envMapRotation,Ee===void 0&&(g.addEventListener("dispose",$t),Ee=new Map,F.programs=Ee);let Te=Ee.get(me);if(Te!==void 0){if(F.currentProgram===Te&&F.lightsStateVersion===he)return Zo(g,le),Te}else le.uniforms=xe.getUniforms(g),g.onBeforeCompile(le,v),Te=xe.acquireProgram(le,me),Ee.set(me,Te),F.uniforms=le.uniforms;const ye=F.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(ye.clippingPlanes=_e.uniform),Zo(g,le),F.needsLights=cf(g),F.lightsStateVersion=he,F.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),F.currentProgram=Te,F.uniformsList=null,Te}function jo(g){if(g.uniformsList===null){const I=g.currentProgram.getUniforms();g.uniformsList=$r.seqWithValue(I.seq,g.uniforms)}return g.uniformsList}function Zo(g,I){const B=m.get(g);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function of(g,I,B,F,U){I.isScene!==!0&&(I=Ze),L.resetTextureUnits();const se=I.fog,he=F.isMeshStandardMaterial?I.environment:null,le=V===null?v.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Pi,me=(F.isMeshStandardMaterial?K:W).get(F.envMap||he),Ee=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Te=!!B.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),ye=!!B.morphAttributes.position,Fe=!!B.morphAttributes.normal,Ke=!!B.morphAttributes.color;let at=en;F.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(at=v.toneMapping);const ot=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Je=ot!==void 0?ot.length:0,be=m.get(F),qe=A.state.lights;if(ge===!0&&(Ve===!0||g!==X)){const Et=g===X&&F.id===Y;_e.setState(F,g,Et)}let Ge=!1;F.version===be.__version?(be.needsLights&&be.lightsStateVersion!==qe.state.version||be.outputColorSpace!==le||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==me||F.fog===!0&&be.fog!==se||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==_e.numPlanes||be.numIntersection!==_e.numIntersection)||be.vertexAlphas!==Ee||be.vertexTangents!==Te||be.morphTargets!==ye||be.morphNormals!==Fe||be.morphColors!==Ke||be.toneMapping!==at||be.morphTargetsCount!==Je)&&(Ge=!0):(Ge=!0,be.__version=F.version);let Pt=be.currentProgram;Ge===!0&&(Pt=pr(F,I,U));let oi=!1,Dt=!1,zi=!1;const tt=Pt.getUniforms(),At=be.uniforms;if(ve.useProgram(Pt.program)&&(oi=!0,Dt=!0,zi=!0),F.id!==Y&&(Y=F.id,Dt=!0),oi||X!==g){ve.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),tt.setValue(R,"projectionMatrix",g.projectionMatrix),tt.setValue(R,"viewMatrix",g.matrixWorldInverse);const wt=tt.map.cameraPosition;wt!==void 0&&wt.setValue(R,Be.setFromMatrixPosition(g.matrixWorld)),Qe.logarithmicDepthBuffer&&tt.setValue(R,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&tt.setValue(R,"isOrthographic",g.isOrthographicCamera===!0),X!==g&&(X=g,Dt=!0,zi=!0)}if(be.needsLights&&(qe.state.directionalShadowMap.length>0&&tt.setValue(R,"directionalShadowMap",qe.state.directionalShadowMap,L),qe.state.spotShadowMap.length>0&&tt.setValue(R,"spotShadowMap",qe.state.spotShadowMap,L),qe.state.pointShadowMap.length>0&&tt.setValue(R,"pointShadowMap",qe.state.pointShadowMap,L)),U.isSkinnedMesh){tt.setOptional(R,U,"bindMatrix"),tt.setOptional(R,U,"bindMatrixInverse");const Et=U.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),tt.setValue(R,"boneTexture",Et.boneTexture,L))}U.isBatchedMesh&&(tt.setOptional(R,U,"batchingTexture"),tt.setValue(R,"batchingTexture",U._matricesTexture,L),tt.setOptional(R,U,"batchingIdTexture"),tt.setValue(R,"batchingIdTexture",U._indirectTexture,L),tt.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&tt.setValue(R,"batchingColorTexture",U._colorsTexture,L));const Nt=B.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&Ue.update(U,B,Pt),(Dt||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,tt.setValue(R,"receiveShadow",U.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(At.envMap.value=me,At.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&I.environment!==null&&(At.envMapIntensity.value=I.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=zx()),Dt&&(tt.setValue(R,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&lf(At,zi),se&&F.fog===!0&&Ae.refreshFogUniforms(At,se),Ae.refreshMaterialUniforms(At,F,Le,Ne,A.state.transmissionRenderTarget[g.id]),$r.upload(R,jo(be),At,L)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&($r.upload(R,jo(be),At,L),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&tt.setValue(R,"center",U.center),tt.setValue(R,"modelViewMatrix",U.modelViewMatrix),tt.setValue(R,"normalMatrix",U.normalMatrix),tt.setValue(R,"modelMatrix",U.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Et=F.uniformsGroups;for(let wt=0,gs=Et.length;wt<gs;wt++){const On=Et[wt];J.update(On,Pt),J.bind(On,Pt)}}return Pt}function lf(g,I){g.ambientLightColor.needsUpdate=I,g.lightProbe.needsUpdate=I,g.directionalLights.needsUpdate=I,g.directionalLightShadows.needsUpdate=I,g.pointLights.needsUpdate=I,g.pointLightShadows.needsUpdate=I,g.spotLights.needsUpdate=I,g.spotLightShadows.needsUpdate=I,g.rectAreaLights.needsUpdate=I,g.hemisphereLights.needsUpdate=I}function cf(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(g,I,B){const F=m.get(g);F.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),m.get(g.texture).__webglTexture=I,m.get(g.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:B,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,I){const B=m.get(g);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0};const uf=R.createFramebuffer();this.setRenderTarget=function(g,I=0,B=0){V=g,D=I,G=B;let F=null,U=!1,se=!1;if(g){const le=m.get(g);if(le.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(R.FRAMEBUFFER,le.__webglFramebuffer),k.copy(g.viewport),z.copy(g.scissor),j=g.scissorTest,ve.viewport(k),ve.scissor(z),ve.setScissorTest(j),Y=-1;return}else if(le.__webglFramebuffer===void 0)L.setupRenderTarget(g);else if(le.__hasExternalTextures)L.rebindTextures(g,m.get(g.texture).__webglTexture,m.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const Te=g.depthTexture;if(le.__boundDepthTexture!==Te){if(Te!==null&&m.has(Te)&&(g.width!==Te.image.width||g.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(g)}}const me=g.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(se=!0);const Ee=m.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Ee[I])?F=Ee[I][B]:F=Ee[I],U=!0):g.samples>0&&L.useMultisampledRTT(g)===!1?F=m.get(g).__webglMultisampledFramebuffer:Array.isArray(Ee)?F=Ee[B]:F=Ee,k.copy(g.viewport),z.copy(g.scissor),j=g.scissorTest}else k.copy(q).multiplyScalar(Le).floor(),z.copy(Z).multiplyScalar(Le).floor(),j=pe;if(B!==0&&(F=uf),ve.bindFramebuffer(R.FRAMEBUFFER,F)&&ve.drawBuffers(g,F),ve.viewport(k),ve.scissor(z),ve.setScissorTest(j),U){const le=m.get(g.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,le.__webglTexture,B)}else if(se){const le=I;for(let me=0;me<g.textures.length;me++){const Ee=m.get(g.textures[me]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+me,Ee.__webglTexture,B,le)}}else if(g!==null&&B!==0){const le=m.get(g.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,le.__webglTexture,B)}Y=-1},this.readRenderTargetPixels=function(g,I,B,F,U,se,he,le=0){if(!(g&&g.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=m.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&he!==void 0&&(me=me[he]),me){ve.bindFramebuffer(R.FRAMEBUFFER,me);try{const Ee=g.textures[le],Te=Ee.format,ye=Ee.type;if(!Qe.textureFormatReadable(Te)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(ye)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=g.width-F&&B>=0&&B<=g.height-U&&(g.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+le),R.readPixels(I,B,F,U,ee.convert(Te),ee.convert(ye),se))}finally{const Ee=V!==null?m.get(V).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(g,I,B,F,U,se,he,le=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=m.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&he!==void 0&&(me=me[he]),me)if(I>=0&&I<=g.width-F&&B>=0&&B<=g.height-U){ve.bindFramebuffer(R.FRAMEBUFFER,me);const Ee=g.textures[le],Te=Ee.format,ye=Ee.type;if(!Qe.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.bufferData(R.PIXEL_PACK_BUFFER,se.byteLength,R.STREAM_READ),g.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+le),R.readPixels(I,B,F,U,ee.convert(Te),ee.convert(ye),0);const Ke=V!==null?m.get(V).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,Ke);const at=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await cp(R,at,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,se),R.deleteBuffer(Fe),R.deleteSync(at),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,I=null,B=0){const F=Math.pow(2,-B),U=Math.floor(g.image.width*F),se=Math.floor(g.image.height*F),he=I!==null?I.x:0,le=I!==null?I.y:0;L.setTexture2D(g,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,he,le,U,se),ve.unbindTexture()};const ff=R.createFramebuffer(),df=R.createFramebuffer();this.copyTextureToTexture=function(g,I,B=null,F=null,U=0,se=null){se===null&&(U!==0?(ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=U,U=0):se=0);let he,le,me,Ee,Te,ye,Fe,Ke,at;const ot=g.isCompressedTexture?g.mipmaps[se]:g.image;if(B!==null)he=B.max.x-B.min.x,le=B.max.y-B.min.y,me=B.isBox3?B.max.z-B.min.z:1,Ee=B.min.x,Te=B.min.y,ye=B.isBox3?B.min.z:0;else{const Nt=Math.pow(2,-U);he=Math.floor(ot.width*Nt),le=Math.floor(ot.height*Nt),g.isDataArrayTexture?me=ot.depth:g.isData3DTexture?me=Math.floor(ot.depth*Nt):me=1,Ee=0,Te=0,ye=0}F!==null?(Fe=F.x,Ke=F.y,at=F.z):(Fe=0,Ke=0,at=0);const Je=ee.convert(I.format),be=ee.convert(I.type);let qe;I.isData3DTexture?(L.setTexture3D(I,0),qe=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(L.setTexture2DArray(I,0),qe=R.TEXTURE_2D_ARRAY):(L.setTexture2D(I,0),qe=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const Ge=R.getParameter(R.UNPACK_ROW_LENGTH),Pt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),oi=R.getParameter(R.UNPACK_SKIP_PIXELS),Dt=R.getParameter(R.UNPACK_SKIP_ROWS),zi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ot.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ot.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ee),R.pixelStorei(R.UNPACK_SKIP_ROWS,Te),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ye);const tt=g.isDataArrayTexture||g.isData3DTexture,At=I.isDataArrayTexture||I.isData3DTexture;if(g.isDepthTexture){const Nt=m.get(g),Et=m.get(I),wt=m.get(Nt.__renderTarget),gs=m.get(Et.__renderTarget);ve.bindFramebuffer(R.READ_FRAMEBUFFER,wt.__webglFramebuffer),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,gs.__webglFramebuffer);for(let On=0;On<me;On++)tt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,m.get(g).__webglTexture,U,ye+On),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,m.get(I).__webglTexture,se,at+On)),R.blitFramebuffer(Ee,Te,he,le,Fe,Ke,he,le,R.DEPTH_BUFFER_BIT,R.NEAREST);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||g.isRenderTargetTexture||m.has(g)){const Nt=m.get(g),Et=m.get(I);ve.bindFramebuffer(R.READ_FRAMEBUFFER,ff),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,df);for(let wt=0;wt<me;wt++)tt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Nt.__webglTexture,U,ye+wt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Nt.__webglTexture,U),At?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Et.__webglTexture,se,at+wt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Et.__webglTexture,se),U!==0?R.blitFramebuffer(Ee,Te,he,le,Fe,Ke,he,le,R.COLOR_BUFFER_BIT,R.NEAREST):At?R.copyTexSubImage3D(qe,se,Fe,Ke,at+wt,Ee,Te,he,le):R.copyTexSubImage2D(qe,se,Fe,Ke,Ee,Te,he,le);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else At?g.isDataTexture||g.isData3DTexture?R.texSubImage3D(qe,se,Fe,Ke,at,he,le,me,Je,be,ot.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(qe,se,Fe,Ke,at,he,le,me,Je,ot.data):R.texSubImage3D(qe,se,Fe,Ke,at,he,le,me,Je,be,ot):g.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,se,Fe,Ke,he,le,Je,be,ot.data):g.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,se,Fe,Ke,ot.width,ot.height,Je,ot.data):R.texSubImage2D(R.TEXTURE_2D,se,Fe,Ke,he,le,Je,be,ot);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ge),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Pt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,oi),R.pixelStorei(R.UNPACK_SKIP_ROWS,Dt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,zi),se===0&&I.generateMipmaps&&R.generateMipmap(qe),ve.unbindTexture()},this.initRenderTarget=function(g){m.get(g).__webglFramebuffer===void 0&&L.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?L.setTextureCube(g,0):g.isData3DTexture?L.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?L.setTexture2DArray(g,0):L.setTexture2D(g,0),ve.unbindTexture()},this.resetState=function(){D=0,G=0,V=null,ve.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}Su.start();const Gx=document.getElementById("game-canvas"),nf=new Np,ts=new Bt(75,window.innerWidth,window.innerHeight,.1,1e3),ps=new Vx({canvas:Gx,alpha:!0});ps.setSize(window.innerWidth,window.innerHeight);ps.setPixelRatio(Math.min(window.devicePixelRatio,2));ts.position.z=.5;nf.background=new $e("#0a0a0a");window.addEventListener("resize",()=>{ts.aspect=window.innerWidth/window.innerHeight,ts.updateProjectionMatrix(),ps.setSize(window.innerWidth,window.innerHeight)});function rf(){requestAnimationFrame(rf),ps.render(nf,ts)}rf();
