const __vite__fileDeps=["../nodes/0.qc93ncgK.js","../chunks/disclose-version.CZswmyyp.js","../chunks/runtime.D_aISP4C.js","../assets/0.BkZDYchg.css","../nodes/1.DcUEaSVR.js","../chunks/lifecycle.DHqd5Qhv.js","../chunks/entry.DguRlt2H.js","../nodes/2.DvAEunVj.js","../chunks/header.wfMmi_D6.js","../assets/header.Cq8Hygme.css","../chunks/props.CGPBbyC9.js","../nodes/3.BNbpTc8V.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var Y=t=>{throw TypeError(t)};var F=(t,e,n)=>e.has(t)||Y("Cannot "+n);var d=(t,e,n)=>(F(t,e,"read from private field"),n?n.call(t):e.get(t)),A=(t,e,n)=>e.has(t)?Y("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),L=(t,e,n,s)=>(F(t,e,"write to private field"),s?s.call(t,n):e.set(t,n),n);import{K as se,aa as re,S as _,ab as ie,ac as ae,a2 as J,C as k,q as oe,k as v,f as K,n as Z,g as E,Z as x,U as ce,b as V,ad as fe,o as X,H as le,t as ue,w as z,x as j,y as B,ae as de,Y as _e,V as me,z as he,c as p,a as $,O as ye,u as ve,Q as ge,af as be,R as Ee}from"../chunks/runtime.D_aISP4C.js";import{h as we,s as H,c as Re,n as ke,o as Pe,u as xe,f as R,t as ee,l as D,g as T,j as M,k as Oe,i as Te,q as Se}from"../chunks/disclose-version.CZswmyyp.js";import{p as I}from"../chunks/props.CGPBbyC9.js";function w(t,e=!0,n=null,s){if(typeof t=="object"&&t!=null&&!se(t)&&!(re in t)){if(_ in t){const i=t[_];if(i.t===t||i.p===t)return i.p}const r=fe(t);if(r===ie||r===ae){const i=new Proxy(t,Ae);return J(t,_,{value:{s:new Map,v:k(0),a:oe(t),i:e,p:i,t},writable:!0,enumerable:!1}),i}}return t}function Q(t,e=1){v(t,t.v+e)}const Ae={defineProperty(t,e,n){if(n.value){const s=t[_],r=s.s.get(e);r!==void 0&&v(r,w(n.value,s.i,s))}return Reflect.defineProperty(t,e,n)},deleteProperty(t,e){const n=t[_],s=n.s.get(e),r=n.a,i=delete t[e];if(r&&i){const a=n.s.get("length"),l=t.length-1;a!==void 0&&a.v!==l&&v(a,l)}return s!==void 0&&v(s,x),i&&Q(n.v),i},get(t,e,n){var i;if(e===_)return Reflect.get(t,_);const s=t[_];let r=s.s.get(e);if(r===void 0&&(!(e in t)||(i=K(t,e))!=null&&i.writable)&&(r=(s.i?k:Z)(w(t[e],s.i,s)),s.s.set(e,r)),r!==void 0){const a=E(r);return a===x?void 0:a}return Reflect.get(t,e,n)},getOwnPropertyDescriptor(t,e){const n=Reflect.getOwnPropertyDescriptor(t,e);if(n&&"value"in n){const r=t[_].s.get(e);r&&(n.value=E(r))}return n},has(t,e){var i;if(e===_)return!0;const n=t[_],s=Reflect.has(t,e);let r=n.s.get(e);return(r!==void 0||ce!==null&&(!s||(i=K(t,e))!=null&&i.writable))&&(r===void 0&&(r=(n.i?k:Z)(s?w(t[e],n.i,n):x),n.s.set(e,r)),E(r)===x)?!1:s},set(t,e,n,s){const r=t[_];let i=r.s.get(e);i===void 0&&(V(()=>s[e]),i=r.s.get(e)),i!==void 0&&v(i,w(n,r.i,r));const a=r.a,l=!(e in t);if(a&&e==="length")for(let o=n;o<t.length;o+=1){const c=r.s.get(o+"");c!==void 0&&v(c,x)}if(t[e]=n,l){if(a){const o=r.s.get("length"),c=t.length;o!==void 0&&o.v!==c&&v(o,c)}Q(r.v)}return!0},ownKeys(t){const e=t[_];return E(e.v),Reflect.ownKeys(t)}};function Le(t){throw new Error("lifecycle_outside_component")}function C(t,e,n,s=null,r=!1){var i=null,a=null,l=null,o=r?de:0;X(()=>{if(l===(l=!!e()))return;let c=!1;if(we){const P=t.data===le;l===P&&(ue(Re),H(!1),c=!0)}l?(i?z(i):i=j(()=>n(t)),a&&B(a,()=>{a=null})):(a?z(a):s&&(a=j(()=>s(t))),i&&B(i,()=>{i=null})),c&&H(!0)},o)}function q(t,e){let n,s;X(()=>{n!==(n=t())&&(s&&(B(s),s=null),n&&(s=j(()=>e(n))))})}function W(t,e){var s;var n=t&&((s=t[_])==null?void 0:s.t);return t===e||n===e}function N(t,e,n,s){_e(()=>{var r,i;return me(()=>{r=i,i=[],V(()=>{t!==n(...i)&&(e(t,...i),r&&W(n(...r),t)&&e(null,...r))})}),()=>{he(()=>{i&&W(n(...i),t)&&e(null,...i)})}})}function pe(t){return class extends De{constructor(e){super({component:t,...e})}}}var g,m;class De{constructor(e){A(this,g);A(this,m);const n=w({...e.props||{},$$events:{}},!1);L(this,m,(e.hydrate?ke:Pe)(e.component,{target:e.target,props:n,context:e.context,intro:e.intro,recover:e.recover})),L(this,g,n.$$events);for(const s of Object.keys(d(this,m)))s==="$set"||s==="$destroy"||s==="$on"||J(this,s,{get(){return d(this,m)[s]},set(r){d(this,m)[s]=r},enumerable:!0});d(this,m).$set=s=>{Object.assign(n,s)},d(this,m).$destroy=()=>{xe(d(this,m))}}$set(e){d(this,m).$set(e)}$on(e,n){d(this,g)[e]=d(this,g)[e]||[];const s=(...r)=>n.call(this,...r);return d(this,g)[e].push(s),()=>{d(this,g)[e]=d(this,g)[e].filter(r=>r!==s)}}$destroy(){d(this,m).$destroy()}}g=new WeakMap,m=new WeakMap;function Ie(t){p===null&&Le(),p.l!==null?Ce(p).m.push(t):$(()=>{const e=V(t);if(typeof e=="function")return e})}function Ce(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const qe="modulepreload",Ne=function(t,e){return new URL(t,e).href},G={},S=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.all(n.map(o=>{if(o=Ne(o,s),o in G)return;G[o]=!0;const c=o.endsWith(".css"),P=c?'[rel="stylesheet"]':"";if(!!s)for(let h=i.length-1;h>=0;h--){const y=i[h];if(y.href===o&&(!c||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${P}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":qe,c||(f.as="script",f.crossOrigin=""),f.href=o,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((h,y)=>{f.addEventListener("load",h),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},ze={};var je=ee('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Be=ee("<!> <!>",1);function Ve(t,e){ye(e,!0);let n=I(e,"components",15,()=>w([])),s=I(e,"data_0",3,null),r=I(e,"data_1",3,null);ve(()=>e.stores.page.set(e.page)),$(()=>{e.stores,e.page,e.constructors,n(),e.form,s(),r(),e.stores.page.notify()});let i=k(!1),a=k(!1),l=k(null);Ie(()=>{const b=e.stores.page.subscribe(()=>{E(i)&&(v(a,!0),be().then(()=>{v(l,w(document.title||"untitled page"))}))});return v(i,!0),b});var o=Be(),c=T(o);C(c,()=>e.constructors[1],b=>{var f=D(),h=T(f);q(()=>e.constructors[0],y=>{N(y(h,{get data(){return s()},children:(u,Ue)=>{var U=D(),te=T(U);q(()=>e.constructors[1],ne=>{N(ne(te,{get data(){return r()},get form(){return e.form}}),O=>n()[1]=O,()=>{var O;return(O=n())==null?void 0:O[1]})}),R(u,U)},$$slots:{default:!0}}),u=>n()[0]=u,()=>{var u;return(u=n())==null?void 0:u[0]})}),R(b,f)},b=>{var f=D(),h=T(f);q(()=>e.constructors[0],y=>{N(y(h,{get data(){return s()},get form(){return e.form}}),u=>n()[0]=u,()=>{var u;return(u=n())==null?void 0:u[0]})}),R(b,f)});var P=M(M(c,!0));C(P,()=>E(i),b=>{var f=je(),h=Te(f);C(h,()=>E(a),y=>{var u=Se(y);Ee(()=>Oe(u,E(l))),R(y,u)}),R(b,f)}),R(t,o),ge()}const He=pe(Ve),Me=[()=>S(()=>import("../nodes/0.qc93ncgK.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>S(()=>import("../nodes/1.DcUEaSVR.js"),__vite__mapDeps([4,1,2,5,6]),import.meta.url),()=>S(()=>import("../nodes/2.DvAEunVj.js"),__vite__mapDeps([7,1,2,8,9,5,10]),import.meta.url),()=>S(()=>import("../nodes/3.BNbpTc8V.js"),__vite__mapDeps([11,1,2,8,9,10]),import.meta.url)],Qe=[],We={"/":[-3],"/book-reviews/book-[num]":[-4]},Ge={handleError:({error:t})=>{console.error(t)},reroute:()=>{}};export{We as dictionary,Ge as hooks,ze as matchers,Me as nodes,He as root,Qe as server_loads};