import{f as d,t as m,i as o,j as c,m as v,g as b}from"../chunks/disclose-version.D0xC6aFX.js";import{a1 as a,Z as h,b as $,g as x,a2 as f,k as l,n as I,Q as y,T as k,R as E}from"../chunks/runtime.DUyZiCcr.js";import{i as N}from"../chunks/lifecycle.uY8AU8Jh.js";import{s as T}from"../chunks/entry.DnFk8dAR.js";function Z(s,t,n){if(s==null)return t(void 0),a;const e=s.subscribe(t,n);return e.unsubscribe?()=>e.unsubscribe():e}function j(s,t,n){let e=n[t];const r=e===void 0;r&&(e={store:null,last_value:null,value:I(f),unsubscribe:a},n[t]=e),(r||e.store!==s)&&(e.unsubscribe(),e.store=s??null,e.unsubscribe=w(s,e.value));const u=x(e.value);return u===f?e.last_value:u}function w(s,t){return s==null?(l(t,void 0),a):Z(s,n=>l(t,n))}function A(s){D(()=>{let t;for(t in s)s[t].unsubscribe()})}function D(s){h(()=>()=>$(s))}const L=()=>{const s=T;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},Q={subscribe(s){return L().page.subscribe(s)}};var R=m("<h1> </h1> <p> </p>",1);function B(s,t){y(t,!1);const n={};A(n);const e=()=>j(Q,"$page",n);N();var r=R(),u=v(r),p=c(u),g=b(b(u,!0)),_=c(g);k(()=>{var i;o(p,e().status),o(_,(i=e().error)==null?void 0:i.message)}),d(s,r),E()}export{B as component};
