import{g as O}from"./api.a5bfc925.js";import{a as A}from"./asyncComputed.c2e425ff.js";import{f as c,eG as C,d as h,b as s,c as i,w as l,u as a,ar as m,bV as I,v as w,eA as B,H as D,ev as b,ex as P,e as S,ew as T,bv as N,a$ as R,eC as $,eD as j,I as K}from"./outputWidgets.f9d55cb0.js";import{e as V}from"./icons.26963148.js";import{A as H}from"./ArrowRightOutlined.08fa31dd.js";import{P as z}from"./PlayerNavbar.6a66a042.js";import"./index.218a9012.js";import"./index.51c8dad2.js";import{A as g}from"./index.922e9b73.js";import{T as y}from"./Typography.3699d45d.js";import{C as E}from"./Card.76a3431f.js";import"./runnerData.9a65427c.js";import"./url.af4204dd.js";import"./Base.910fdb8b.js";import"./Link.61299810.js";import"./Paragraph.3b137fb5.js";import"./Text.8d155850.js";import"./Title.785efc74.js";import"./TabPane.28c4aaad.js";import"./hasIn.d928989a.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="8714f54c-391f-493e-9822-b9c4d1462810",n._sentryDebugIdIdentifier="sentry-dbid-8714f54c-391f-493e-9822-b9c4d1462810")}catch{}})();function v(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.forEach(function(o){F(n,o,t[o])})}return n}function F(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var _=function(e,t){var r=v({},e,t.attrs);return c(C,v({},r,{icon:H}),null)};_.displayName="ArrowRightOutlined";_.inheritAttrs=!1;const G=_,L=h({__name:"KanbanButton",emits:["go-to-kanban"],setup(n,{emit:e}){return(t,r)=>(s(),i(a(I),{class:"kanban-btn",onClick:r[0]||(r[0]=o=>e("go-to-kanban"))},{default:l(()=>[m(" Kanban "),c(a(G))]),_:1}))}});const W=w(L,[["__scopeId","data-v-73dd2178"]]),q={class:"page"},J=h({__name:"Home",setup(n){const e=B(),{result:t,loading:r}=A(O),o=D(()=>{var u,p;return(p=(u=t.value)==null?void 0:u.sidebar.filter(d=>d.visible))!=null?p:[]}),k=u=>{e.push({path:`/${u}`})},x=()=>{e.push({name:"playerKanban"})};return(u,p)=>{var d;return s(),b("div",q,[a(t)?(s(),i(z,{key:0,"runner-data":a(t),"hide-sidebar":""},null,8,["runner-data"])):P("",!0),S("div",{class:"container",style:T({backgroundColor:(d=a(t))==null?void 0:d.theme})},[a(r)?(s(),i(a(N),{key:0})):o.value.length===0?(s(),i(a(y),{key:1,type:"secondary",style:{"font-size":"18px"}},{default:l(()=>[m(" There are no public forms available ")]),_:1})):(s(),i(a(g),{key:2,vertical:"",gap:"large",style:{padding:"120px 0"}},{default:l(()=>[(s(!0),b(R,null,$(o.value,f=>(s(),i(a(E),{key:f.id,class:"form-card",onClick:M=>k(f.path)},{default:l(()=>[c(a(g),{gap:"large",align:"center",justify:"space-between"},{default:l(()=>[c(a(y),{style:{"font-size":"18px","font-weight":"500"}},{default:l(()=>[m(j(f.name),1)]),_:2},1024),c(K,{path:a(V),fill:"#000",width:"20"},null,8,["path"])]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})),c(W,{onGoToKanban:x})],4)])}}});const _e=w(J,[["__scopeId","data-v-c916dcb9"]]);export{_e as default};
//# sourceMappingURL=Home.7694c22d.js.map
