import{d as f,v as h,y as g,K as T,o as y,b as o,c,x as _,z as u,B as r,D as p,F as k,L as I,aa as w,a as D,G as $,t as A,U as C,N as x,q as m,ab as B,W as M,ac as N}from"./registerWidgets.2603eccb.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="b2e90502-0091-46d9-b721-98759c490d10",s._sentryDebugIdIdentifier="sentry-dbid-b2e90502-0091-46d9-b721-98759c490d10")}catch{}})();const S={class:"tab-menu"},E={class:"tabs"},U={key:0,class:"group"},V={class:"group"},z=["onClick"],F={key:1,class:"group"},L={class:"content"},j=f({__name:"TabMenuUnderline",setup(s){const e=h([]),n=g(),d=t=>{const v=i=>i==t;e.forEach((i,a)=>{i.isActive=v(a)})},l=T(()=>e.findIndex(t=>t.isActive));return w("addTab",t=>{e.push(t)}),y(()=>{d(0)}),(t,v)=>{const i=D("icon");return o(),c("div",S,[_("div",E,[u(n).left?(o(),c("div",U,[r(t.$slots,"left",{},void 0,!0)])):p("",!0),_("div",V,[(o(!0),c(k,null,I(e,(a,b)=>(o(),c("button",{key:a.title,class:$(["form-tab",u(l)==b&&"active"]),onClick:K=>d(b)},[a.icon?(o(),A(i,{key:0,path:a.icon,fill:"#8692A5",width:"10",height:"10"},null,8,["path"])):p("",!0),C(" "+x(a.title),1)],10,z))),128))]),u(n).right?(o(),c("div",F,[r(t.$slots,"right",{},void 0,!0)])):p("",!0)]),_("div",L,[r(t.$slots,"default",{},void 0,!0)])])}}});const H=m(j,[["__scopeId","data-v-60b2affa"]]),q={class:"tab"},G=f({__name:"Tab",props:{title:null,icon:null},setup(s){const e=s,n=h({isActive:!1,title:e.title,icon:e.icon}),d=B("addTab");return y(()=>{d(n)}),(l,t)=>M((o(),c("div",q,[r(l.$slots,"default",{},void 0,!0)],512)),[[N,n.isActive]])}});const J=m(G,[["__scopeId","data-v-9c2e92c2"]]);export{H as T,J as a};
//# sourceMappingURL=Tab.67d1bef4.js.map
