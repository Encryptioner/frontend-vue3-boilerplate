import{d as g,g as x,r as b,o as c,b as i,e,t as r,u as s,n as h,F as p,p as y,h as v,i as f,j as n,k as w,l as S,a as k}from"./index.c025810f.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";const D=t=>(y("data-v-9a5c32ba"),t=t(),v(),t),$={class:"!mt-0 font-poppins"},C=D(()=>e("p",null,[n("Edit "),e("code",null,"components/HelloWorld.vue"),n(" to test hot module replacement.")],-1)),I=g({name:"HelloWorld",props:{msg:null,optionalProp:null},setup(t){const a=t,l=f.home1,o=x(()=>l.count),d=b(`rounded-${o?"full":"md"}`);function _(){l.increment()}function u(){l.$reset()}return(m,j)=>(c(),i(p,null,[e("h2",$,r(a.msg),1),e("button",{class:h(`rounded-${s(o)?"full":"md"} border border-gray-300 bg-white px-3 py-2 shadow`),onClick:_}," count is: "+r(s(o)),3),e("button",{class:h(`${d.value} ml-2 rounded-full
    border border-gray-300 bg-white px-3 py-2 shadow`),onClick:u}," Reset ",2),C],64))}});var V=H(I,[["__scopeId","data-v-9a5c32ba"]]);const W={class:"relative min-h-screen py-8"},E=e("div",{class:"absolute inset-0 bg-[url(/img/grid.svg)] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"},null,-1),N={class:"container relative mx-auto max-w-2xl bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"},B={class:"prose-sm px-4 pt-6 md:prose md:px-6"},R=e("p",{class:"pb-4 text-xl leading-relaxed tracking-wide text-gray-700"}," Simple, fully typed template ",-1),T={class:"prose-indigo prose mx-auto p-4 sm:rounded-md md:px-6"},A={class:"py-6 text-center text-sm text-gray-700"},F=n(" See more at "),L=e("a",{class:"underline",href:"https://github.com/Encryptioner/frontend-vue3-boilerplate"},"github",-1),Y=n(" Development mode. "),P=g({name:"Home",setup(t){const a=w();S({bodyAttrs:{title:a.meta.title},meta:[{property:"og:title",content:a.meta.title},{name:"twitter:title",content:a.meta.title}]});const l="1.0.1",o=new Date(Number("1656867111273")),d=new Date().getFullYear();return(_,u)=>{const m=V;return c(),i("div",W,[E,e("div",N,[e("header",B,[e("h1",null,"Vite + Vue 3 + TypeScript + Tailwind v"+r(s(l)),1),R]),e("main",null,[e("div",T,[k(m,{msg:"Hello World Component"})])]),e("footer",A,[e("p",null,[F,L,n(" \xA9"+r(s(d))+". ",1),s(o)?(c(),i(p,{key:0},[n(" Site built "+r(s(o).toLocaleDateString())+". ",1)],64)):(c(),i(p,{key:1},[Y],64))])])])])}}});export{P as default};
