import{d as v,v as h,y as g,K as T,o as y,b as a,c,x as _,z as u,B as r,D as f,F as k,L as I,aa as w,a as D,G as $,t as A,U as C,N as x,q as m,ab as B,W as M,ac as N}from"./registerWidgets.dfdff788.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="c4f26b60-4bd0-4714-abc4-4a5aaede0cf6",s._sentryDebugIdIdentifier="sentry-dbid-c4f26b60-4bd0-4714-abc4-4a5aaede0cf6")}catch{}})();const S={class:"tab-menu"},E={class:"tabs"},U={key:0,class:"group"},V={class:"group"},z=["onClick"],F={key:1,class:"group"},L={class:"content"},j=v({__name:"TabMenuUnderline",setup(s){const e=h([]),o=g(),d=t=>{const p=i=>i==t;e.forEach((i,n)=>{i.isActive=p(n)})},l=T(()=>e.findIndex(t=>t.isActive));return w("addTab",t=>{e.push(t)}),y(()=>{d(0)}),(t,p)=>{const i=D("icon");return a(),c("div",S,[_("div",E,[u(o).left?(a(),c("div",U,[r(t.$slots,"left",{},void 0,!0)])):f("",!0),_("div",V,[(a(!0),c(k,null,I(e,(n,b)=>(a(),c("button",{key:n.title,class:$(["form-tab",u(l)==b&&"active"]),onClick:K=>d(b)},[n.icon?(a(),A(i,{key:0,path:n.icon,fill:"#8692A5",width:"10",height:"10"},null,8,["path"])):f("",!0),C(" "+x(n.title),1)],10,z))),128))]),u(o).right?(a(),c("div",F,[r(t.$slots,"right",{},void 0,!0)])):f("",!0)]),_("div",L,[r(t.$slots,"default",{},void 0,!0)])])}}});const H=m(j,[["__scopeId","data-v-60b2affa"]]),q={class:"tab"},G=v({__name:"Tab",props:{title:null,icon:null},setup(s){const e=s,o=h({isActive:!1,title:e.title,icon:e.icon}),d=B("addTab");return y(()=>{d(o)}),(l,t)=>M((a(),c("div",q,[r(l.$slots,"default",{},void 0,!0)],512)),[[N,o.isActive]])}});const J=m(G,[["__scopeId","data-v-9c2e92c2"]]);export{H as T,J as a};
//# sourceMappingURL=Tab.e04bcc58.js.map
