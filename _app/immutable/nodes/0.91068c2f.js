import{s as T,c as H,u as I,g as D,d as $}from"../chunks/scheduler.e108d1fd.js";import{S as M,i as N,g as x,s as S,m as O,h as _,j as b,x as V,c as L,n as A,f as m,k as p,a as E,y as g,z as B,o as C,d as q,t as P}from"../chunks/index.10baf253.js";const R=!0,U=!1,Q=Object.freeze(Object.defineProperty({__proto__:null,prerender:R,ssr:U},Symbol.toStringTag,{value:"Module"}));function F(r){let l,s,n,h='<a href="/" class="mx-2 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white hover:-translate-y-2 transition-transform duration-200 hover:text-zinc-600 dark:hover:text-zinc-300">Home</a> <a href="/honours" class="mx-2 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white hover:-translate-y-2 transition-transform duration-200 hover:text-zinc-600 dark:hover:text-zinc-300">Honours</a> <a href="/notes" class="mx-2 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white hover:-translate-y-2 transition-transform duration-200 hover:text-zinc-600 dark:hover:text-zinc-300">Notes</a>',i,a,f,d,c,u,k,z;const y=r[3].default,e=H(y,r,r[2],null);return{c(){l=x("header"),s=x("nav"),n=x("div"),n.innerHTML=h,i=S(),a=x("button"),f=O(r[0]),d=S(),c=x("div"),e&&e.c(),this.h()},l(t){l=_(t,"HEADER",{class:!0});var o=b(l);s=_(o,"NAV",{class:!0});var v=b(s);n=_(v,"DIV",{class:!0,"data-svelte-h":!0}),V(n)!=="svelte-1daiyjy"&&(n.innerHTML=h),i=L(v),a=_(v,"BUTTON",{class:!0});var w=b(a);f=A(w,r[0]),w.forEach(m),v.forEach(m),o.forEach(m),d=L(t),c=_(t,"DIV",{class:!0});var j=b(c);e&&e.l(j),j.forEach(m),this.h()},h(){p(n,"class","flex gap-0 sm:gap-3 lg:gap-6 flex-grow sm:justify-center"),p(a,"class","mx-2 text-l sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white hover:blur transition duration-300"),p(s,"class","flex justify-between m-3"),p(l,"class","sticky top-0 z-50 py-2 bg-white dark:bg-black drop-shadow-lg transition-colors duration-500 ease-in-out"),p(c,"class","grid grid-cols-1 gap-8 p-4 sm:p-8 lg:p-20")},m(t,o){E(t,l,o),g(l,s),g(s,n),g(s,i),g(s,a),g(a,f),E(t,d,o),E(t,c,o),e&&e.m(c,null),u=!0,k||(z=B(a,"click",r[1]),k=!0)},p(t,[o]){(!u||o&1)&&C(f,t[0]),e&&e.p&&(!u||o&4)&&I(e,y,t,t[2],u?$(y,t[2],o,null):D(t[2]),null)},i(t){u||(q(e,t),u=!0)},o(t){P(e,t),u=!1},d(t){t&&(m(l),m(d),m(c)),e&&e.d(t),k=!1,z()}}}function G(r,l,s){let{$$slots:n={},$$scope:h}=l,i="🌝",a=localStorage.getItem("aetherdarktheme")==="true";a&&(document.documentElement.classList.add("dark"),i="🌞");const f=()=>{a=!a,a?(localStorage.setItem("aetherdarktheme","true"),document.documentElement.classList.add("dark"),s(0,i="🌞")):(localStorage.setItem("aetherdarktheme","false"),document.documentElement.classList.remove("dark"),s(0,i="🌝"))};return r.$$set=d=>{"$$scope"in d&&s(2,h=d.$$scope)},[i,f,h,n]}class W extends M{constructor(l){super(),N(this,l,G,F,T,{})}}export{W as component,Q as universal};
