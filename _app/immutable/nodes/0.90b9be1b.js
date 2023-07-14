import{s as X,c as Z,u as $,g as ee,d as ae,e as te,o as se}from"../chunks/scheduler.d35e8dc7.js";import{S as le,i as ne,g,m as O,s as A,h as w,j as k,n as H,f,c as I,k as a,l as W,a as Q,x as t,y as re,o as oe,d as ie,t as ce}from"../chunks/index.7c446a16.js";import{p as ue}from"../chunks/stores.0c1298bf.js";const me=!0,de=!1,ge=Object.freeze(Object.defineProperty({__proto__:null,prerender:me,ssr:de},Symbol.toStringTag,{value:"Module"}));function fe(s){let i,r,l,p,S,_,b,h,E,M,o,u,v,m,q,L,C,V,z,y,D,N,j,d,B,R;const P=s[5].default,c=Z(P,s,s[4],null);return{c(){i=g("header"),r=g("nav"),l=g("div"),p=g("a"),S=O("Home"),b=A(),h=g("a"),E=O("CV"),o=A(),u=g("a"),v=O("Notes"),q=A(),L=g("a"),C=O("Lab"),z=A(),y=g("button"),D=O(s[0]),N=A(),j=g("div"),c&&c.c(),this.h()},l(e){i=w(e,"HEADER",{class:!0,style:!0});var n=k(i);r=w(n,"NAV",{class:!0});var T=k(r);l=w(T,"DIV",{class:!0});var x=k(l);p=w(x,"A",{href:!0,class:!0});var U=k(p);S=H(U,"Home"),U.forEach(f),b=I(x),h=w(x,"A",{href:!0,class:!0});var Y=k(h);E=H(Y,"CV"),Y.forEach(f),o=I(x),u=w(x,"A",{href:!0,class:!0});var F=k(u);v=H(F,"Notes"),F.forEach(f),q=I(x),L=w(x,"A",{href:!0,class:!0});var G=k(L);C=H(G,"Lab"),G.forEach(f),x.forEach(f),z=I(T),y=w(T,"BUTTON",{class:!0});var J=k(y);D=H(J,s[0]),J.forEach(f),T.forEach(f),n.forEach(f),N=I(e),j=w(e,"DIV",{class:!0});var K=k(j);c&&c.l(K),K.forEach(f),this.h()},h(){a(p,"href","/"),a(p,"class",_="nav-link "+(s[2].url.pathname==="/"?"underline":"")),a(h,"href","/work"),a(h,"class",M="nav-link "+(s[2].url.pathname==="/work"?"underline":"")),a(u,"href","/notes"),a(u,"class",m="nav-link "+(s[2].url.pathname==="/notes"?"underline":"")),a(L,"href","/lab"),a(L,"class",V="nav-link "+(s[2].url.pathname==="/lab"?"underline":"")),a(l,"class","flex gap-0 sm:gap-3 lg:gap-6 flex-grow sm:justify-center"),a(y,"class","mx-2 text-l sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white hover:blur-sm transition duration-300"),a(r,"class","flex justify-between m-3"),a(i,"class","sticky top-0 z-50 py-2 bg-white dark:bg-black transition-colors duration-500 ease-in-out"),W(i,"opacity",s[1]),a(j,"class","mx-auto max-w-xs sm:max-w-screen-sm lg:max-w-screen-lg grid grid-cols-1 gap-8 p-4 sm:p-8 lg:p-20")},m(e,n){Q(e,i,n),t(i,r),t(r,l),t(l,p),t(p,S),t(l,b),t(l,h),t(h,E),t(l,o),t(l,u),t(u,v),t(l,q),t(l,L),t(L,C),t(r,z),t(r,y),t(y,D),Q(e,N,n),Q(e,j,n),c&&c.m(j,null),d=!0,B||(R=re(y,"click",s[3]),B=!0)},p(e,[n]){(!d||n&4&&_!==(_="nav-link "+(e[2].url.pathname==="/"?"underline":"")))&&a(p,"class",_),(!d||n&4&&M!==(M="nav-link "+(e[2].url.pathname==="/work"?"underline":"")))&&a(h,"class",M),(!d||n&4&&m!==(m="nav-link "+(e[2].url.pathname==="/notes"?"underline":"")))&&a(u,"class",m),(!d||n&4&&V!==(V="nav-link "+(e[2].url.pathname==="/lab"?"underline":"")))&&a(L,"class",V),(!d||n&1)&&oe(D,e[0]),(!d||n&2)&&W(i,"opacity",e[1]),c&&c.p&&(!d||n&16)&&$(c,P,e,e[4],d?ae(P,e[4],n,null):ee(e[4]),null)},i(e){d||(ie(c,e),d=!0)},o(e){ce(c,e),d=!1},d(e){e&&(f(i),f(N),f(j)),c&&c.d(e),B=!1,R()}}}function he(s,i,r){let l;te(s,ue,o=>r(2,l=o));let{$$slots:p={},$$scope:S}=i,_="🌝",b=localStorage.getItem("aetherdarktheme")==="true";b&&(document.documentElement.classList.add("dark"),_="🌞");let h=1,E=200;const M=()=>{b=!b,b?(localStorage.setItem("aetherdarktheme","true"),document.documentElement.classList.add("dark"),r(0,_="🌞")):(localStorage.setItem("aetherdarktheme","false"),document.documentElement.classList.remove("dark"),r(0,_="🌝"))};return se(()=>{const o={small:window.matchMedia("(max-width: 640px)"),medium:window.matchMedia("(min-width: 641px) and (max-width: 1024px)"),large:window.matchMedia("(min-width: 1025px)")},u=()=>{o.small.matches?E=16*.8:o.medium.matches?E=32*.8:o.large.matches&&(E=80*.8)},v=()=>{const m=window.scrollY;r(1,h=Math.max(0,1-m/E))};u(),v(),window.addEventListener("scroll",v);for(const m of Object.values(o))m.addListener(u),m.addListener(v);return()=>{window.removeEventListener("scroll",v);for(const m of Object.values(o))m.removeListener(u),m.removeListener(v)}}),s.$$set=o=>{"$$scope"in o&&r(4,S=o.$$scope)},[_,h,l,M,S,p]}class we extends le{constructor(i){super(),ne(this,i,he,fe,X,{})}}export{we as component,ge as universal};
