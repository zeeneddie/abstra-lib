import{d as b,E as h,es as g,F as T,U as k,o as y,a as w,b as o,c,er as _,bu as f,c2 as r,eu as u,bw as I,ez as A,ew as $,u as C,bh as D,eA as S,t as m,V as x,aS as B,aT as E}from"./registerWidgets.d68712f0.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="f2648130-da7f-4524-9eb1-33e752306395",s._sentryDebugIdIdentifier="sentry-dbid-f2648130-da7f-4524-9eb1-33e752306395")}catch{}})();const M={class:"tab-menu"},V={class:"tabs"},N={key:0,class:"group"},U={class:"group"},z=["onClick"],F={key:1,class:"group"},j={class:"content"},L=b({__name:"TabMenuUnderline",setup(s){const e=h([]),n=g(),d=t=>{const p=i=>i==t;e.forEach((i,a)=>{i.isActive=p(a)})},l=T(()=>e.findIndex(t=>t.isActive));return k("addTab",t=>{e.push(t)}),y(()=>{d(0)}),(t,p)=>{const i=w("icon");return o(),c("div",M,[_("div",V,[f(n).left?(o(),c("div",N,[r(t.$slots,"left",{},void 0,!0)])):u("",!0),_("div",U,[(o(!0),c(I,null,A(e,(a,v)=>(o(),c("button",{key:a.title,class:$(["form-tab",l.value==v&&"active"]),onClick:H=>d(v)},[a.icon?(o(),C(i,{key:0,path:a.icon,fill:"#8692A5",width:"10",height:"10"},null,8,["path"])):u("",!0),D(" "+S(a.title),1)],10,z))),128))]),f(n).right?(o(),c("div",F,[r(t.$slots,"right",{},void 0,!0)])):u("",!0)]),_("div",j,[r(t.$slots,"default",{},void 0,!0)])])}}});const K=m(L,[["__scopeId","data-v-1341a074"]]),q={class:"tab"},G=b({__name:"Tab",props:{title:{},icon:{}},setup(s){const e=s,n=h({isActive:!1,title:e.title,icon:e.icon}),d=x("addTab");return y(()=>{d(n)}),(l,t)=>B((o(),c("div",q,[r(l.$slots,"default",{},void 0,!0)],512)),[[E,n.isActive]])}});const O=m(G,[["__scopeId","data-v-497e4e8e"]]);export{K as T,O as a};
//# sourceMappingURL=Tab.8bda3640.js.map
