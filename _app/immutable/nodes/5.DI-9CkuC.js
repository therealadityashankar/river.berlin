import{k as x,m as I,f as p,t as v,$ as C,l as _,j as a,g,i as N}from"../chunks/disclose-version.C23NFfyI.js";import{U as O,_ as T,$ as V,V as W,g as o,n as u,k as n,W as q,a0 as z}from"../chunks/runtime.ChTHN0K2.js";import{i as M}from"../chunks/if.B9jbmBj4.js";import{b as h}from"../chunks/this.C719OFBL.js";function $(y){return function(...f){var c=f[0];return c.preventDefault(),y.apply(this,f)}}var F=v('<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""> <link href="https://fonts.googleapis.com/css2?family=Bad+Script&amp;display=swap" rel="stylesheet">',1),G=v('Release <span class="m blue-bolder svelte-1vhtuc9">M</span> to play audio',1),H=v('Press <span class="m svelte-1vhtuc9">M</span> to record audio',1),J=v('<br><p class="time-recorded svelte-1vhtuc9"> </p>',1),Q=v('<div class="full-page svelte-1vhtuc9"><div class="main-text svelte-1vhtuc9"><!> <div class="audio-stuff"><audio></audio></div></div> <!></div>');function te(y,f){O(f,!1);const c=u();let m=u(),l=u(),w=u(),d=u(!1),b=[],s,k=Date.now();async function j(){k=Date.now();const e=await navigator.mediaDevices.getUserMedia({audio:!0});s=new MediaRecorder(e),s.start(),s.onstart=t=>{console.log(s.state)},s.ondataavailable=t=>{b.push(t.data),console.log(s.state),console.log("recorder started")},k=Date.now()}function B(){let e=b;b=[];const t=new Blob(e,{type:"audio/ogg; codecs=opus"}),r=window.URL.createObjectURL(t);z(l,o(l).src=r),o(l).addEventListener("canplaythrough",()=>{o(l).play()})}async function E(e){e.keyCode==77&&(o(d)==!1?(n(d,!0),j()):n(c,Number.parseInt((Date.now()-k)/1e3)))}function K(e){e.keyCode==77&&n(d,!1),s&&(s.stop(),s.addEventListener("stop",B))}T(()=>{},()=>{n(c,0)}),V();var R=Q();x("keydown",C,$(E),!1),x("keyup",C,$(K),!1),I(e=>{var t=F(),r=_(t),i=a(a(r,!0)),S=a(a(i,!0));p(e,t)});var D=g(R),U=g(D);M(U,()=>o(d),e=>{var t=G(),r=a(_(t,!0));h(r,i=>n(m,i),()=>o(m)),p(e,t)},e=>{var t=H(),r=a(_(t,!0));h(r,i=>n(m,i),()=>o(m)),p(e,t)});var L=a(a(U,!0));h(L,e=>n(w,e),()=>o(w));var P=g(L);h(P,e=>n(l,e),()=>o(l));var A=a(a(D,!0));M(A,()=>o(d),e=>{var t=J(),r=_(t),i=a(r),S=g(i);q(()=>N(S,o(c))),p(e,t)}),p(y,R),W()}export{te as component};
