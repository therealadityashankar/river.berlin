import{e as te,h as w,a as K,b as Q,c as ne,s as N,d as se,f as V,t as W,g as ie,i as F,j as G,k as fe}from"../chunks/disclose-version.CZswmyyp.js";import{o as le,q as Z,H as ve,t as ue,v as oe,w as j,x as ee,y as de,I as pe,z as _e,E as b,k as J,A as L,B as O,n as Ee,C as U,D as me,F as ge,G as xe,J as Ae,K as Te,S as ye,M as Se,N as ce,O as he,Q as be,R as ke,T as R}from"../chunks/runtime.D_aISP4C.js";import{H as we,s as Ce}from"../chunks/header.wfMmi_D6.js";import{i as Ie}from"../chunks/lifecycle.DHqd5Qhv.js";import{p as He}from"../chunks/props.CGPBbyC9.js";let D=null;function Ne(e,a){return a}function Re(e,a,n){for(var s=[],v=e.length,o=0;o<v;o++)me(e[o].e,s,!0);var d=v>0&&s.length===0&&a!==null;if(d){var E=a.parentNode;se(E),E.append(a),n.clear(),y(e[0].prev,e[v-1].next)}ge(s,()=>{for(var u=0;u<v;u++){var p=e[u];d||(n.delete(p.k),y(p.prev,p.next)),xe(p.e,!d)}})}function De(e,a,n,s,v,o=null){var d={flags:a,items:new Map,next:null};{var E=e;e=w?K(E.firstChild):E.appendChild(te())}var u=null;le(()=>{var p=n(),m=Z(p)?p:p==null?[]:Array.from(p),r=m.length,_=d.flags;_&O&&!Te(m)&&!(ye in m)&&(_^=O,_&Se&&!(_&b)&&(_^=b));let f=!1;if(w){var S=e.data===ve;(S!==(r===0)||Q===void 0)&&(ue(ne),N(!1),f=!0)}if(w){for(var l=Q,x=d,A,g=0;g<r;g++){if(l.nodeType!==8||l.data!==oe){f=!0,N(!1);break}l=K(l);var t=m[g],i=s(t,g);A=ae(l,x,null,t,i,g,v,_),d.items.set(i,A),l=l.nextSibling,x=A}if(r>0)for(;l!==e;){var C=l.nextSibling;l.remove(),l=C}}w||Oe(m,d,e,v,_,s),o!==null&&(r===0?u?j(u):u=ee(()=>o(e)):u!==null&&de(u,()=>{u=null})),f&&N(!0)})}function Oe(e,a,n,s,v,o){var Y,B,$,q;var d=(v&Ae)!==0,E=(v&(b|L))!==0,u=e.length,p=a.items,m=a.next,r=m,_=new Set,f=a,S=new Set,l=[],x=[],A,g,t,i;if(d)for(i=0;i<u;i+=1)A=e[i],g=o(A,i),t=p.get(g),t!==void 0&&((Y=t.a)==null||Y.measure(),S.add(t));for(i=0;i<u;i+=1){if(A=e[i],g=o(A,i),t=p.get(g),t===void 0){var C=r?h(r.e):n;f=ae(C,f,f.next,A,g,i,s,v),p.set(g,f),l=[],x=[],r=f.next;continue}if(E&&Le(t,A,i,v),t.e.f&pe&&(j(t.e),d&&((B=t.a)==null||B.unfix(),S.delete(t))),t!==r){if(_.has(t)){if(l.length<x.length){var k=x[0],T;f=k.prev;var M=l[0],I=l[l.length-1];for(T=0;T<l.length;T+=1)P(l[T],k,n);for(T=0;T<x.length;T+=1)_.delete(x[T]);y(M.prev,I.next),y(f,M),y(I,k),r=k,f=I,i-=1,l=[],x=[]}else _.delete(t),P(t,r,n),y(t.prev,t.next),y(t,f.next),y(f,t),f=t;continue}for(l=[],x=[];r!==null&&r.k!==g;)_.add(r),x.push(r),r=r.next;if(r===null)continue;t=r}l.push(t),f=t,r=t.next}const c=Array.from(_);for(;r!==null;)c.push(r),r=r.next;var H=c.length;if(H>0){var re=v&ce&&u===0?n:null;if(d){for(i=0;i<H;i+=1)($=c[i].a)==null||$.measure();for(i=0;i<H;i+=1)(q=c[i].a)==null||q.fix()}Re(c,re,p)}d&&_e(()=>{var z;for(t of S)(z=t.a)==null||z.apply()})}function Le(e,a,n,s){s&b&&J(e.v,a),s&L?J(e.i,n):e.i=n}function ae(e,a,n,s,v,o,d,E){var u=D;try{var p=(E&b)!==0,m=(E&O)===0,r=p?m?Ee(s):U(s):s,_=E&L?U(o):o,f={i:_,v:r,k:v,a:null,e:null,prev:a,next:n};return a.next=f,n!==null&&(n.prev=f),D=f,f.e=ee(()=>d(e,r,_)),f}finally{D=u}}function X(e,a){if(e.nodeType===3&&e.data===""||e.nodeType===8){for(var n=a.first,s;n!==null&&(s=n.first,n.dom===null);){if(s===null)return e.previousSibling;n=s}return h(n)}return e}function h(e){var a=e.dom;return Z(a)?X(a[0],e):X(a,e)}function P(e,a,n){for(var s=e.next?h(e.next.e):n,v=a?h(a.e):n,o=h(e.e);o!==s;){var d=o.nextSibling;v.before(o),o=d}}function y(e,a){e.next=a,a!==null&&(a.prev=e)}var Me=W("<a> </a>"),Ye=W('<!> <div class="content"><div class="stuff book-review"></div></div>',1);function Qe(e,a){he(a,!1);let n=He(a,"data");Ie();var s=Ye(),v=ie(s);we(v);var o=G(G(v,!0)),d=F(o);De(d,9,()=>n().blogs,Ne,(E,u,p)=>{var m=Me(),r=F(m);ke(()=>{Ce(m,"href",`/book-reviews/book-${R(u).num??""}`),fe(r,`Book take away #${R(u).num??""} : ${R(u).metadata.title??""}`)}),V(E,m)}),V(e,s),be()}export{Qe as component};
