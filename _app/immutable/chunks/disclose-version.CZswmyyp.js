import{v as N,$ as H,a0 as O,a1 as Y,U as I,a2 as $,q as R,a3 as L,a4 as q,a5 as U,a6 as V,x as B,O as F,Q as W,a7 as j,c as G,W as Q,a8 as x,a9 as z}from"./runtime.D_aISP4C.js";function J(e){console.warn("hydration_mismatch")}let u=!1;function T(e){u=e}let y=null,l;function K(e){y=e,l=e&&e[0]}function b(e){if(e.nodeType!==8)return e;var n=e;if(n.data!==N)return e;for(var r=[],i=0;(n=n.nextSibling)!==null;){if(n.nodeType===8){var t=n.data;if(t===N)i+=1;else if(t[0]===H){if(i===0)return y=r,l=r[0],n;i-=1}}r.push(n)}throw J(),O}var C;function k(){if(C===void 0){C=window;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function p(){return document.createTextNode("")}function ae(e){const n=e.firstChild;return u?n===null?e.appendChild(p()):b(n):n}function ie(e,n){return u?b(l):e.firstChild}function X(e,n=!1){var r=e.nextSibling;if(!u)return r;var i=r.nodeType;if(i===8&&r.data===Y)return X(r,n);if(n&&i!==3){var t=p(),a=I.dom;return a.unshift(t),r==null||r.before(t),t}return b(r)}function Z(e){e.textContent=""}function E(e){var A;var n=this,r=n.ownerDocument,i=e.type,t=((A=e.composedPath)==null?void 0:A.call(e))||[],a=t[0]||e.target,v=0,_=e.__root;if(_){var f=t.indexOf(_);if(f!==-1&&(n===document||n===window)){e.__root=n;return}var c=t.indexOf(n);if(c===-1)return;f<=c&&(v=f)}if(a=t[v]||e.target,a!==n){$(e,"currentTarget",{configurable:!0,get(){return a||r}});try{for(var h,o=[];a!==null;){var d=a.parentNode||a.host||null;try{var s=a["__"+i];if(s!==void 0&&!a.disabled)if(R(s)){var[w,...P]=s;w.apply(a,[e,...P])}else s.call(a,e)}catch(g){h?o.push(g):h=g}if(e.cancelBubble||d===n||d===null)break;a=d}if(h){for(let g of o)queueMicrotask(()=>{throw g});throw h}}finally{e.__root=n,a=n}}}const ee=new Set,D=new Set;function oe(e,n){(e.__t??(e.__t=e.nodeValue))!==n&&(e.nodeValue=e.__t=n)}function se(e,n,r,i){n===void 0||n(e,r)}function ne(e,n){const r=n.anchor??n.target.appendChild(p());return L(()=>M(e,{...n,anchor:r}),!1)}function ue(e,n){const r=n.target,i=y;try{return L(()=>{T(!0);for(var t=r.firstChild;t&&(t.nodeType!==8||t.data!==N);)t=t.nextSibling;if(!t)throw O;const a=b(t),v=M(e,{...n,anchor:a});return T(!1),v},!1)}catch(t){if(t===O)return n.recover===!1&&q(),k(),Z(r),T(!1),ne(e,n);throw t}finally{T(!!i),K(i)}}function M(e,{target:n,anchor:r,props:i={},events:t,context:a,intro:v=!1}){k();const _=new Set,f=o=>{for(let d=0;d<o.length;d++){const s=o[d],w=j.includes(s);_.has(s)||(_.add(s),n.addEventListener(s,E,{passive:w}),document.addEventListener(s,E,{passive:w}))}};f(U(ee)),D.add(f);let c;const h=V(()=>(B(()=>{if(a){F({});var o=G;o.c=a}t&&(i.$$events=t),c=e(r,i)||{},a&&W()}),()=>{for(const o of _)n.removeEventListener(o,E),document.removeEventListener(o,E);D.delete(f),S.delete(c)}));return S.set(c,h),c}let S=new WeakMap;function fe(e){const n=S.get(e);n==null||n()}function m(e,n=I){var r=n.dom;return r===null?n.dom=e:(R(r)||(r=n.dom=[r]),R(e)?r.push(...e):r.push(e)),e}function ce(e,n){var r=(n&x)!==0,i=(n&z)!==0,t;return()=>{if(u)return m(r?y:l),l;t||(t=Q(e),r||(t=t.firstChild));var a=i?document.importNode(t,!0):t.cloneNode(!0);return m(r?[...a.childNodes]:a),a}}function de(e){if(!u)return m(p());var n=l;return n||e.before(n=p()),m(n),n}function le(){if(u)return m(y),l;var e=document.createDocumentFragment(),n=p();return e.append(n),m([n]),e}function _e(e,n){u||e.before(n)}const re="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(re);export{b as a,l as b,y as c,Z as d,p as e,_e as f,ie as g,u as h,ae as i,X as j,oe as k,le as l,se as m,ue as n,ne as o,m as p,de as q,T as s,ce as t,fe as u};
