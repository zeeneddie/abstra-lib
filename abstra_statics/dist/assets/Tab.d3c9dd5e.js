import{d as v,v as h,y as g,K as T,aa as k,o as y,a as I,b as o,c,x as _,z as p,B as r,D as u,F as w,L as D,G as $,t as A,U as C,N as x,q as m,ab as B,W as M,ac as N}from"./registerWidgets.7afd6438.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="e295ba76-7e4b-4081-8bfa-fe37b3749902",s._sentryDebugIdIdentifier="sentry-dbid-e295ba76-7e4b-4081-8bfa-fe37b3749902")}catch{}})();const S={class:"tab-menu"},E={class:"tabs"},U={key:0,class:"group"},V={class:"group"},z=["onClick"],F={key:1,class:"group"},L={class:"content"},j=v({__name:"TabMenuUnderline",setup(s){const e=h([]),a=g(),d=t=>{const b=i=>i==t;e.forEach((i,n)=>{i.isActive=b(n)})},l=T(()=>e.findIndex(t=>t.isActive));return k("addTab",t=>{e.push(t)}),y(()=>{d(0)}),(t,b)=>{const i=I("icon");return o(),c("div",S,[_("div",E,[p(a).left?(o(),c("div",U,[r(t.$slots,"left",{},void 0,!0)])):u("",!0),_("div",V,[(o(!0),c(w,null,D(e,(n,f)=>(o(),c("button",{key:n.title,class:$(["form-tab",l.value==f&&"active"]),onClick:K=>d(f)},[n.icon?(o(),A(i,{key:0,path:n.icon,fill:"#8692A5",width:"10",height:"10"},null,8,["path"])):u("",!0),C(" "+x(n.title),1)],10,z))),128))]),p(a).right?(o(),c("div",F,[r(t.$slots,"right",{},void 0,!0)])):u("",!0)]),_("div",L,[r(t.$slots,"default",{},void 0,!0)])])}}});const H=m(j,[["__scopeId","data-v-60b2affa"]]),q={class:"tab"},G=v({__name:"Tab",props:{title:{},icon:{}},setup(s){const e=s,a=h({isActive:!1,title:e.title,icon:e.icon}),d=B("addTab");return y(()=>{d(a)}),(l,t)=>M((o(),c("div",q,[r(l.$slots,"default",{},void 0,!0)],512)),[[N,a.isActive]])}});const J=m(G,[["__scopeId","data-v-9c2e92c2"]]);export{H as T,J as a};
//# sourceMappingURL=Tab.d3c9dd5e.js.map
