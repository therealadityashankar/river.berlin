import{d as q,g as z,p as B,h as D,a as x,t as S,f as G,b as t,$ as I,m as u,n as J}from"../chunks/disclose-version.D08hq0Pc.js";import{Y as N,x as K,g as p,A as O,Z as P,F as A,d as Q,p as V,t as R,a as W,m as X}from"../chunks/runtime.BxdIbG5o.js";import{s as m}from"../chunks/attributes.Q_uhlo0_.js";import{i as tt}from"../chunks/lifecycle.CwNMq4XB.js";import{p as et}from"../chunks/props.DG177b74.js";function at(n,a){const o=n.dom;if(A(o)){for(let r=o.length-1;r>=0;r--)if(a.includes(o[r])){o.splice(r,1);break}}else o!==null&&a.includes(o)&&(n.dom=null)}function rt(n,a,o,r){var s;const l=n.parentNode!==((s=N)==null?void 0:s.dom)?N:null;let i=Q(a);K(()=>{var e=ot(n,l,p(i));if(e)return()=>{l!==null&&at(l,A(e)?e:[e]),O(e)}})}function ot(n,a,o,r,l){if(q)return z;var i=o+"",s=P(i);if(s.childNodes.length===1){var e=s.firstChild;return n.before(e),a!==null&&B(e,a),e}var v=[...s.childNodes];return n.before(s),a!==null&&B(v,a),v}var nt=S('<meta name="twitter:title"> <meta property="og:title"> <meta property="og:url"> <meta property="og:type" content="article"> <meta property="article:publisher" content="https://river.berlin"> <meta property="og:image"> <meta name="twitter:image"> <meta property="og:image:secure_url"> <meta property="og:description"> <meta property="og:image:width" content="1000"> <meta property="og:image:height" content="500"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:site"> <meta name="twitter:description">',1),it=S('<div class="content"><div class="stuff book-review"><h1> </h1></div> <img alt="" width="200"> <div class="review"><!></div></div>');function ut(n,a){V(a,!1);let o=et(a,"data"),{blogNum:r,markdownHTML:l,metadata:i,icon:s}=o(),e=X("https://river.berlin");tt();var v=it();D(H=>{var _=nt(),g=G(_),f=t(t(g,!0)),h=t(t(f,!0)),M=t(t(h,!0)),T=t(t(M,!0)),y=t(t(T,!0)),k=t(t(y,!0)),w=t(t(k,!0)),b=t(t(w,!0)),U=t(t(b,!0)),Y=t(t(U,!0)),Z=t(t(Y,!0)),$=t(t(Z,!0)),j=t(t($,!0));R(()=>{I.title=`River's Blog: Book takeaways\`- ${i.title??""}`,m(g,"content",`River's Blog: Book takeaways - ${i.title??""}`),m(f,"content",`River's Blog: Book takeaways - ${i.title??""}`),m(h,"content",`${p(e)??""}/book-reviews/book-${r??""}/`),m(y,"content",`${p(e)??""}/opengraph/book-takeaways/${r??""}.png`),m(k,"content",`${p(e)??""}/opengraph/book-takeaways/${r??""}.png`),m(w,"content",`${p(e)??""}/opengraph/book-takeaways/${r??""}.png`),m(b,"content",i.shortSummary),m($,"content",p(e)),m(j,"content",i.shortSummary)}),x(H,_)});var d=u(v),L=u(d),C=u(L),c=t(t(d,!0));m(c,"src",s);var E=t(t(c,!0)),F=u(E);rt(F,()=>l),R(()=>J(C,`Book take away #${r??""} : ${i.title??""}`)),x(n,v),W()}export{ut as component};