import{S as U,i as F,s as M,l as m,a as I,u as N,m as d,p as b,c as w,v as T,h as g,q as l,b as R,F as u,R as v,M as E,n as A,T as k}from"../chunks/index-76207ca0.js";import{g as z}from"../chunks/navigation-75a744b1.js";import{i as C,s as D}from"../chunks/firebase-e099c21b.js";import"../chunks/singletons-eca981c1.js";function L(c){let t,e,o,s,f,p,h,i,_,r,y,P,S;return{c(){t=m("form"),e=m("input"),o=I(),s=m("input"),f=I(),p=m("input"),h=I(),i=m("p"),_=N("press "),r=m("span"),y=N("enter"),this.h()},l(n){t=d(n,"FORM",{class:!0});var a=b(t);e=d(a,"INPUT",{type:!0,placeholder:!0,autocomplete:!0,class:!0}),o=w(a),s=d(a,"INPUT",{type:!0,placeholder:!0,class:!0}),f=w(a),p=d(a,"INPUT",{type:!0,class:!0}),h=w(a),i=d(a,"P",{class:!0});var j=b(i);_=T(j,"press "),r=d(j,"SPAN",{class:!0});var q=b(r);y=T(q,"enter"),q.forEach(g),j.forEach(g),a.forEach(g),this.h()},h(){l(e,"type","email"),e.required=!0,l(e,"placeholder","Email Id"),l(e,"autocomplete","off"),e.autofocus=!0,l(e,"class","svelte-6egjc"),l(s,"type","password"),s.required=!0,l(s,"placeholder","Password"),l(s,"class","svelte-6egjc"),l(p,"type","submit"),p.hidden=!0,l(p,"class","svelte-6egjc"),l(r,"class","svelte-6egjc"),l(i,"class","svelte-6egjc"),l(t,"class","svelte-6egjc")},m(n,a){R(n,t,a),u(t,e),v(e,c[0]),u(t,o),u(t,s),v(s,c[1]),u(t,f),u(t,p),u(t,h),u(t,i),u(i,_),u(i,r),u(r,y),e.focus(),P||(S=[E(e,"input",c[3]),E(s,"input",c[4]),E(t,"submit",c[2])],P=!0)},p(n,[a]){a&1&&e.value!==n[0]&&v(e,n[0]),a&2&&s.value!==n[1]&&v(s,n[1])},i:A,o:A,d(n){n&&g(t),P=!1,k(S)}}}function O(c,t,e){let o,s;const{firebaseAuth:f}=C();function p(_){_.preventDefault(),D(f,o,s).then(r=>{console.log(r.user.uid),localStorage.setItem("uid",r.user.uid),z("/link/new")}).catch(r=>console.error(r.message)),e(0,o=""),e(1,s="")}function h(){o=this.value,e(0,o)}function i(){s=this.value,e(1,s)}return[o,s,p,h,i]}class J extends U{constructor(t){super(),F(this,t,O,L,M,{})}}export{J as default};