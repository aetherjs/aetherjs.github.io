import{s as j,c as H,u as I,g as D,d as $}from"../chunks/scheduler.e108d1fd.js";import{S as M,i as N,g as x,s as L,m as O,h as _,j as b,x as V,c as T,n as A,f as m,k as p,a as z,y as g,z as B,o as C,d as q,t as P}from"../chunks/index.10baf253.js";const R=!0,U=!1,Q=Object.freeze(Object.defineProperty({__proto__:null,prerender:R,ssr:U},Symbol.toStringTag,{value:"Module"}));function F(r){let l,s,n,h='<a href="/" class="mx-2 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300">Home</a> <a href="/honours" class="mx-2 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300">Honours</a> <a href="/notes" class="mx-2 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300">Notes</a>',i,a,f,c,d,u,k,E;const y=r[3].default,t=H(y,r,r[2],null);return{c(){l=x("header"),s=x("nav"),n=x("div"),n.innerHTML=h,i=L(),a=x("button"),f=O(r[0]),c=L(),d=x("div"),t&&t.c(),this.h()},l(e){l=_(e,"HEADER",{class:!0});var o=b(l);s=_(o,"NAV",{class:!0});var v=b(s);n=_(v,"DIV",{class:!0,"data-svelte-h":!0}),V(n)!=="svelte-z0saxy"&&(n.innerHTML=h),i=T(v),a=_(v,"BUTTON",{class:!0});var w=b(a);f=A(w,r[0]),w.forEach(m),v.forEach(m),o.forEach(m),c=T(e),d=_(e,"DIV",{class:!0});var S=b(d);t&&t.l(S),S.forEach(m),this.h()},h(){p(n,"class","flex gap-0 sm:gap-3 lg:gap-6"),p(a,"class","mx-2 text-l sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white hover:blur transition duration-300"),p(s,"class","flex justify-between m-3"),p(l,"class","sticky top-0 z-50 py-2 bg-white dark:bg-black drop-shadow-lg transition-colors duration-500 ease-in-out"),p(d,"class","grid grid-cols-1 gap-8 p-4 sm:p-8 lg:p-20")},m(e,o){z(e,l,o),g(l,s),g(s,n),g(s,i),g(s,a),g(a,f),z(e,c,o),z(e,d,o),t&&t.m(d,null),u=!0,k||(E=B(a,"click",r[1]),k=!0)},p(e,[o]){(!u||o&1)&&C(f,e[0]),t&&t.p&&(!u||o&4)&&I(t,y,e,e[2],u?$(y,e[2],o,null):D(e[2]),null)},i(e){u||(q(t,e),u=!0)},o(e){P(t,e),u=!1},d(e){e&&(m(l),m(c),m(d)),t&&t.d(e),k=!1,E()}}}function G(r,l,s){let{$$slots:n={},$$scope:h}=l,i="🌝",a=localStorage.getItem("aetherdarktheme")==="true";a&&(document.documentElement.classList.add("dark"),i="🌞");const f=()=>{a=!a,a?(localStorage.setItem("aetherdarktheme","true"),document.documentElement.classList.add("dark"),s(0,i="🌞")):(localStorage.setItem("aetherdarktheme","false"),document.documentElement.classList.remove("dark"),s(0,i="🌝"))};return r.$$set=c=>{"$$scope"in c&&s(2,h=c.$$scope)},[i,f,h,n]}class W extends M{constructor(l){super(),N(this,l,G,F,j,{})}}export{W as component,Q as universal};
