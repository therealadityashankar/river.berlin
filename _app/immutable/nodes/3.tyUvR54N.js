import{h as x,c as N,p,f as H,t as V,i as m,g as $,j as o,k as j}from"../chunks/disclose-version.CZswmyyp.js";import{U as _,V as q,g as B,t as C,W as L,q as c,h as M,R}from"../chunks/runtime.D_aISP4C.js";import{H as T,s as U}from"../chunks/header.wfMmi_D6.js";import{p as W}from"../chunks/props.CGPBbyC9.js";function z(r,a){const t=r.dom;if(c(t)){for(let i=t.length-1;i>=0;i--)if(a.includes(t[i])){t.splice(i,1);break}}else t!==null&&a.includes(t)&&(r.dom=null)}function A(r,a,t,i){var s;const n=r.parentNode!==((s=_)==null?void 0:s.dom)?_:null;let l=M(a);q(()=>{var e=D(r,n,B(l));if(e)return()=>{n!==null&&z(n,c(e)?e:[e]),C(e)}})}function D(r,a,t,i,n){if(x)return N;var l=t+"",s=L(l);if(s.childNodes.length===1){var e=s.firstChild;return r.before(e),a!==null&&p(e,a),e}var d=[...s.childNodes];return r.before(s),a!==null&&p(d,a),d}var E=V('<!> <div class="content"><div class="stuff book-review"><h1><span class="slightly-bold"> </span> </h1></div> <img alt="" width="200"> <div class="review"><!></div></div>',1);function K(r,a){let t=W(a,"data"),{blogNum:i,markdownHTML:n,metadata:l,icon:s}=t();var e=E(),d=$(e);T(d);var h=o(o(d,!0)),v=m(h),g=m(v),f=m(g),b=m(f);b.nodeValue=`Book take away #${i??""}`;var k=o(f,!0),u=o(o(v,!0));U(u,"src",s);var w=o(o(u,!0)),y=m(w);A(y,()=>n),R(()=>j(k,` : ${l.title??""}`)),H(r,e)}export{K as component};