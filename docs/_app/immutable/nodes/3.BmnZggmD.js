import{h as k,b as w,p as u,a as y,t as x,f as H,s as n,c as m}from"../chunks/disclose-version.Dt5KcnrQ.js";import{i as p,r as N,b as j,j as B,k as C,l as _,d as L,t as M}from"../chunks/runtime.DYlSYe5c.js";import{s as T}from"../chunks/render.75zkpE6B.js";import{H as $,s as q}from"../chunks/header.s5gAsO07.js";import{p as z}from"../chunks/props.Cse3yEn9.js";function A(r,t){const a=r.dom;if(_(a)){for(let i=a.length-1;i>=0;i--)if(t.includes(a[i])){a.splice(i,1);break}}else a!==null&&t.includes(a)&&(r.dom=null)}function D(r,t,a,i){var s;const o=r.parentNode!==((s=p)==null?void 0:s.dom)?p:null;let d=L(t);N(()=>{var e=E(r,o,j(d));if(e)return()=>{o!==null&&A(o,_(e)?e:[e]),B(e)}})}function E(r,t,a,i,o){if(k)return w;var d=a+"",s=C(d);if(s.childNodes.length===1){var e=s.firstChild;return r.before(e),t!==null&&u(e,t),e}var l=[...s.childNodes];return r.before(s),t!==null&&u(l,t),l}var F=x('<!> <div class="content"><div class="stuff book-review"><h1> </h1></div> <img alt="" width="200"> <div class="review"><!></div></div>',1);function P(r,t){let a=z(t,"data"),{markdownHTML:i,metadata:o,icon:d}=a();var s=F(),e=H(s);$(e);var l=n(n(e,!0)),f=m(l),c=m(f),h=m(c),v=n(n(f,!0));q(v,"src",d);var g=n(n(v,!0)),b=m(g);D(b,()=>i),M(()=>T(h,`Book take away #1 : ${o.title??""}`)),y(r,s)}export{P as component};
