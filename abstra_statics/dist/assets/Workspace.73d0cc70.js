import{d as k,ex as S,ey as $,r as C,H as B,b as a,d2 as t,bu as u,ez as b,e as c,eA as v,ew as g,f as o,I as y,eu as i,c as D,w as l,u as f,v as m,eB as L,eC as T,a as A,cb as N,b0 as O}from"./registerWidgets.d6e66474.js";import{f as V,h as W,j,d as E,c as H,m as R,w as z}from"./icons.4be6cb33.js";import{T as F}from"./Tooltip.a5a595bc.js";import{_ as J}from"./logo.084e5d7c.js";import{L as P}from"./LoginBlock.f87f8587.js";import{_ as U}from"./DocsButton.vue_vue_type_script_setup_true_lang.3de0e9fb.js";import{c as q}from"./index.ba35d345.js";import"./workspaces.5e4a741d.js";import"./activeRecord.1009e596.js";import"./pubsub.9e806cff.js";import"./popupNotifcation.bc8b7d60.js";import"./asyncComputed.5c362931.js";import"./transButton.63ba82b1.js";import"./index.4d1ecd17.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="cfac4edd-718d-4572-8ff8-fefe2c7ba055",s._sentryDebugIdIdentifier="sentry-dbid-cfac4edd-718d-4572-8ff8-fefe2c7ba055")}catch{}})();const G={class:"sidebar"},K={class:"section-name"},M=["onClick"],Q={class:"item-name"},X={key:0,class:"tag soon"},Y={key:1,class:"tag beta"},Z={key:2,class:"tag cloud"},ee=k({__name:"Sidebar",setup(s){var h;const n=S(),p=$(),r=C((h=p.name)!=null?h:"forms"),x=B(()=>[{name:"Runtime",items:[{name:"Forms",icon:V,path:"forms"},{name:"Hooks",icon:W,path:"hooks"},{name:"Jobs",icon:j,path:"jobs"},{name:"Dashes",icon:E,path:"dashes",beta:!0}]},{name:"Settings",items:[{name:"Style",icon:H,path:"style"},{name:"Sidebar",icon:R,path:"sidebar"}]}]),I=d=>{d.unavailable||(n.push(d.path),r.value=d.path)};return(d,pe)=>(a(),t("div",G,[(a(!0),t(u,null,b(x.value,_=>(a(),t("div",{key:_.name,class:"section"},[c("span",K,v(_.name),1),(a(!0),t(u,null,b(_.items,e=>(a(),t("div",{key:e.name,role:"button",class:g(["item",{active:r.value===e.path,disabled:e.unavailable||_.cloud}]),tabindex:"0",onClick:ue=>I(e)},[o(y,{class:g(["icon",{disabled:e.unavailable,active:r.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),c("span",Q,v(e.name),1),e.unavailable?(a(),t("span",X,"SOON")):i("",!0),e.beta?(a(),t("span",Y,"BETA")):i("",!0),e.cloud?(a(),t("span",Z,"CLOUD")):i("",!0),e.warning?(a(),D(F,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:l(()=>[o(y,{path:f(z),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):i("",!0)],10,M))),128))]))),128))]))}});const se=m(ee,[["__scopeId","data-v-279aaccd"]]);const ae={},w=s=>(L("data-v-81cd596e"),s=s(),T(),s),te={class:"logo"},oe=w(()=>c("img",{src:J,alt:"Abstra cloud logo"},null,-1)),ne=w(()=>c("span",null," Abstra ",-1)),ce=[oe,ne];function re(s,n){return a(),t("div",te,ce)}const de=m(ae,[["render",re],["__scopeId","data-v-81cd596e"]]),_e={class:"workspace"},ie={class:"page-content"},le=k({__name:"Workspace",setup(s){return(n,p)=>{const r=A("router-view");return a(),t(u,null,[o(f(q),{style:{padding:"5px 10px"}},{title:l(()=>[o(de)]),extra:l(()=>[o(f(N),{type:"primary",href:"/_editor/workflow"},{default:l(()=>[O("Workflow editor")]),_:1}),o(U),o(P)]),_:1}),c("div",_e,[o(se,{class:"sidebar"}),c("div",ie,[o(r)])])],64)}}});const Be=m(le,[["__scopeId","data-v-02cd8bcb"]]);export{Be as default};
//# sourceMappingURL=Workspace.73d0cc70.js.map
