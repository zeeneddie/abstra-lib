import{g as O}from"./api.c7af8111.js";import{a as A}from"./asyncComputed.27df476d.js";import{f as c,eG as C,d as h,b as s,c as i,w as l,u as n,ar as m,bV as I,v as w,eA as B,H as D,ev as b,ex as P,e as S,ew as T,bv as N,a$ as R,eC as $,eD as j,I as K}from"./outputWidgets.0d6c71c4.js";import{e as V}from"./icons.3c0b1217.js";import{A as H}from"./ArrowRightOutlined.08fa31dd.js";import{P as z}from"./PlayerNavbar.4365bc40.js";import"./index.29ca308b.js";import"./index.1d57612b.js";import{A as g}from"./index.79a50c9a.js";import{T as y}from"./Typography.a1d2ddc8.js";import{C as E}from"./Card.a3c31f89.js";import"./runnerData.87fb3f80.js";import"./url.54f51be3.js";import"./Base.027fcad1.js";import"./Link.e223ba21.js";import"./Paragraph.fa27bd72.js";import"./Text.5f5581ee.js";import"./Title.773b1396.js";import"./TabPane.e1ce12d2.js";import"./hasIn.e6aa186e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="1a10eaf9-ffca-4d07-9995-afa8a371f9da",a._sentryDebugIdIdentifier="sentry-dbid-1a10eaf9-ffca-4d07-9995-afa8a371f9da")}catch{}})();function v(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.forEach(function(o){F(a,o,t[o])})}return a}function F(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var _=function(e,t){var r=v({},e,t.attrs);return c(C,v({},r,{icon:H}),null)};_.displayName="ArrowRightOutlined";_.inheritAttrs=!1;const G=_,L=h({__name:"KanbanButton",emits:["go-to-kanban"],setup(a,{emit:e}){return(t,r)=>(s(),i(n(I),{class:"kanban-btn",onClick:r[0]||(r[0]=o=>e("go-to-kanban"))},{default:l(()=>[m(" Kanban "),c(n(G))]),_:1}))}});const W=w(L,[["__scopeId","data-v-73dd2178"]]),q={class:"page"},J=h({__name:"Home",setup(a){const e=B(),{result:t,loading:r}=A(O),o=D(()=>{var d,p;return(p=(d=t.value)==null?void 0:d.sidebar.filter(u=>u.visible))!=null?p:[]}),k=d=>{e.push({path:`/${d}`})},x=()=>{e.push({name:"playerKanban"})};return(d,p)=>{var u;return s(),b("div",q,[n(t)?(s(),i(z,{key:0,"runner-data":n(t),"hide-sidebar":""},null,8,["runner-data"])):P("",!0),S("div",{class:"container",style:T({backgroundColor:(u=n(t))==null?void 0:u.theme})},[n(r)?(s(),i(n(N),{key:0})):o.value.length===0?(s(),i(n(y),{key:1,type:"secondary",style:{"font-size":"18px"}},{default:l(()=>[m(" There are no public forms available ")]),_:1})):(s(),i(n(g),{key:2,vertical:"",gap:"large",style:{padding:"120px 0"}},{default:l(()=>[(s(!0),b(R,null,$(o.value,f=>(s(),i(n(E),{key:f.id,class:"form-card",onClick:M=>k(f.path)},{default:l(()=>[c(n(g),{gap:"large",align:"center",justify:"space-between"},{default:l(()=>[c(n(y),{style:{"font-size":"18px","font-weight":"500"}},{default:l(()=>[m(j(f.name),1)]),_:2},1024),c(K,{path:n(V),fill:"#000",width:"20"},null,8,["path"])]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})),c(W,{onGoToKanban:x})],4)])}}});const _e=w(J,[["__scopeId","data-v-c916dcb9"]]);export{_e as default};
//# sourceMappingURL=Home.d2257b5a.js.map