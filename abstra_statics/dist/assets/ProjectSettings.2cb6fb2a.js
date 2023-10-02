import{a as S}from"./asyncComputed.8c09123d.js";import{P as I}from"./project.af81bb65.js";import"./console.3916321d.js";import{d as v,H as C,a as E,b as i,et as c,e as t,f as p,u as r,b2 as a,eC as _,ew as m,c as D,eD as f,eE as g,x as y,eA as P}from"./outputWidgets.a732e2ee.js";import"./index.3c51f3cb.js";import{n as x}from"./index.503b52e5.js";import{L as A}from"./CircularLoading.9b2c3e03.js";import{Q as B,w as N,R as H}from"./icons.2907d45a.js";import"./gateway.702e8be9.js";import"./activeRecord.30e3101b.js";import"./pubsub.e674f7d3.js";import"./Form.810575f7.js";import"./Title.227355c5.js";import"./index.23256117.js";import"./index.d4ebf13a.js";import"./index.150bd0fa.js";import"./dayjs.28342a14.js";import"./index.386264ce.js";import"./index.b5d54032.js";import"./TabPane.7aaf8dd4.js";import"./index.fade4b0b.js";import"./index.ea2bcc93.js";import"./index.3d1baf20.js";import"./index.d731347d.js";import"./index.cf1c4484.js";import"./index.119d5c1a.js";import"./index.32eb63a2.js";import"./index.0d75f9f4.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[o]="77c2b7cf-e6d1-48b9-a810-75826a306995",s._sentryDebugIdIdentifier="sentry-dbid-77c2b7cf-e6d1-48b9-a810-75826a306995")}catch{}})();const n=s=>(f("data-v-73cc16b2"),s=s(),g(),s),V={class:"subdomain-editor"},$={class:"title"},L=n(()=>t("div",{class:"subtitle"}," Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ",-1)),R={key:0,class:"subdomain-presenter"},T={class:"link-item"},z=n(()=>t("div",{class:"link-title"},"Forms and Dashes available at:",-1)),F={class:"link"},M={class:"custom-subdomain"},O={class:"link-item"},Q=n(()=>t("div",{class:"link-title"},"Hooks available at:",-1)),U={class:"link"},q={class:"custom-subdomain"},G={key:1,class:"subdomain-value-editor"},J={class:"subdomain-change-warning"},K={class:"section-title"},W=n(()=>t("div",{class:"section-body"}," Changing the project's subdomain will result in the replacement of the previous URL, which may break any links you've shared previously. ",-1)),X={class:"input-section"},Y={class:"subdomain-value-input"},Z=n(()=>t("span",null,"https://",-1)),tt=["value"],et=n(()=>t("span",null,".abstra.app",-1)),st={key:0,class:"error"},ot={class:"option-buttons"},at=v({__name:"SubdomainEditor",props:{project:{}},setup(s){const o=s,e=C({name:o.project.subdomain,error:"",editing:!1,loading:!1}),d=()=>e.editing=!0,h=()=>{k(),e.editing=!1,e.error=""},b=async()=>{e.error="",e.loading=!0,await j(),e.error||(e.editing=!1),e.loading=!1},j=async()=>{if(!(!o.project||o.project.subdomain===e.name)){if(!e.name){e.error="Subdomain cannot be empty";return}o.project.subdomain=e.name,await o.project.save()}},k=()=>e.name=o.project.subdomain,w=l=>{e.name=x(l.target.value,{replacement:"-",lower:!0,strict:!0})};return(l,lt)=>{const u=E("icon");return i(),c("div",V,[t("h2",$,[p(u,{width:"22",height:"22",path:r(B),fill:"#414A58"},null,8,["path"]),a("Subdomain ")]),L,e.editing?(i(),c("div",G,[t("div",J,[t("div",K,[p(u,{path:r(N),width:"12",height:"12",fill:"#D35249"},null,8,["path"]),a(" Be careful ")]),W]),t("div",X,[t("div",Y,[Z,t("input",{value:e.name,type:"text",onInput:w},null,40,tt),et]),e.error?(i(),c("div",st,[p(u,{path:r(H),fill:"#D35249",width:"12",height:"12"},null,8,["path"]),a(" "+_(e.error),1)])):m("",!0),t("div",ot,[t("button",{class:"cancel-button",onClick:h},"Cancel"),t("button",{class:"save-button",onClick:b},[a(" Save Changes "),e.loading?(i(),D(A,{key:0,size:"16"})):m("",!0)])])])])):(i(),c("div",R,[t("div",T,[z,t("div",F,[a(" https://"),t("span",M,_(l.project.subdomain),1),a(".abstra.app/[PATH] ")])]),t("div",O,[Q,t("div",U,[a(" https://"),t("span",q,_(l.project.subdomain),1),a(".abstra.app/_hooks/[PATH] ")])]),t("button",{onClick:d},"Edit Subdomain")]))])}}});const it=y(at,[["__scopeId","data-v-73cc16b2"]]),nt=s=>(f("data-v-a75430c8"),s=s(),g(),s),ct={key:0,class:"project-settings"},rt=nt(()=>t("div",{class:"header"},[t("div",{class:"title-wrapper"},[t("h1",null,"Project Settings")])],-1)),dt=v({__name:"ProjectSettings",setup(s){const e=P().params.projectId,{result:d}=S(()=>I.get(e));return(h,b)=>r(d)?(i(),c("div",ct,[rt,p(it,{project:r(d)},null,8,["project"])])):m("",!0)}});const Tt=y(dt,[["__scopeId","data-v-a75430c8"]]);export{Tt as default};
//# sourceMappingURL=ProjectSettings.2cb6fb2a.js.map