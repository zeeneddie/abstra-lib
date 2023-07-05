import{d as k,H as S,J as j,r as L,K as D,b as t,c as s,F as v,L as w,x as c,N as x,G as $,e as l,I as C,D as f,t as T,w as B,z as d,q as m,O,Q as A,a as E}from"./registerWidgets.69eb7b40.js";import{d as N,s as F,w as W,a as R,b as J,c as V,e as z}from"./icons.ea1ef9e9.js";import{T as G}from"./Tooltip.b3ee6275.js";import{_ as H}from"./logo.084e5d7c.js";import{a as q}from"./asyncComputed.5c8fd07f.js";import{W as K}from"./workspaces.9076bb64.js";const P={class:"sidebar"},Q={class:"section-name"},U=["onClick"],M={class:"item-name"},X={key:0,class:"tag soon"},Y={key:1,class:"tag beta"},Z={key:2,class:"tag cloud"},ee=k({__name:"Sidebar",setup(r){var h;const e=S(),a=j(),n=L((h=a.name)!=null?h:"forms"),p=D(()=>[{name:"Runtime",items:[{name:"Forms",icon:N,path:"forms"},{name:"Jobs",icon:F,path:"jobs",cloud:!0},{name:"Hooks",icon:W,path:"hooks"},{name:"Dashes",icon:R,path:"dashes",beta:!0}]},{name:"Resources",items:[{name:"Tables",icon:J,path:"tables",beta:!0}]},{name:"Settings",items:[{name:"Settings",icon:V,path:"settings"}]}]),b=i=>{i.unavailable||(e.push(i.path),n.value=i.path)};return(i,g)=>(t(),s("div",P,[(t(!0),s(v,null,w(d(p),_=>(t(),s("div",{key:_.name,class:"section"},[c("span",Q,x(_.name),1),(t(!0),s(v,null,w(_.items,o=>(t(),s("div",{key:o.name,role:"button",class:$(["item",{active:n.value===o.path,disabled:o.unavailable||_.cloud}]),tabindex:"0",onClick:ye=>b(o)},[l(C,{class:$(["icon",{disabled:o.unavailable,active:n.value===o.path}]),path:o.icon,width:"20",height:"20"},null,8,["class","path"]),c("span",M,x(o.name),1),o.unavailable?(t(),s("span",X,"SOON")):f("",!0),o.beta?(t(),s("span",Y,"BETA")):f("",!0),o.cloud?(t(),s("span",Z,"CLOUD")):f("",!0),o.warning?(t(),T(G,{key:3,class:"warning",text:o.warning,fixed:!0,top:18,left:18},{default:B(()=>[l(C,{path:d(z),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):f("",!0)],10,U))),128))]))),128))]))}});const te=m(ee,[["__scopeId","data-v-873a191e"]]);const se={},I=r=>(O("data-v-ccfb70ef"),r=r(),A(),r),oe={class:"logo"},ae=I(()=>c("img",{src:H,alt:"Abstra cloud logo"},null,-1)),ne=I(()=>c("span",null," Abstra ",-1)),ce=[ae,ne];function re(r,e){return t(),s("div",oe,ce)}const ie=m(se,[["render",re],["__scopeId","data-v-ccfb70ef"]]);class le{async get(){return(await fetch("/_editor/api/login")).json()}async create(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"})}}const y=new le;class u{constructor(e,a){this.projectId=e,this.authorId=a}static async get(){const e=await y.get();return e.logged?new u(e.project_id,e.author_id):null}static async create(e){const a=await y.create(e);if(!a.logged)throw new Error("Failed to login");return new u(a.project_id,a.author_id)}async delete(){return y.delete()}}const _e={key:0,class:"login-block"},de={key:1,class:"login-block"},ue=["href"],pe={key:1,class:"button"},he={key:2,class:"login-block"},ge=k({__name:"LoginBlock",setup(r){const e=L(!1),{loading:a,result:n,refetch:p}=q(()=>u.get());async function b(){const g=prompt("Token");!g||(await u.create(g),p())}async function h(){!n.value||(await n.value.delete(),p())}async function i(){!n.value||(e.value=!0,confirm("Are you sure you want to deploy this project to Abstra Cloud?")&&(await K.deploy(),alert("Deployed!")),e.value=!1)}return(g,_)=>d(a)?(t(),s("div",_e,"loading...")):d(n)?(t(),s("div",de,[c("a",{class:"button",href:`https://cloud.abstra.io/projects/${d(n).projectId}`,target:"_blank"},"Go to console ",8,ue),e.value?(t(),s("button",pe,"Deploying...")):(t(),s("button",{key:0,class:"button",onClick:i},"Deploy")),c("button",{class:"button",onClick:h},"Logout")])):(t(),s("div",he,[c("button",{class:"button",onClick:b},"Login")]))}});const fe=m(ge,[["__scopeId","data-v-0bedf9fe"]]),me={class:"workspace"},be=k({__name:"Workspace",setup(r){return(e,a)=>{const n=E("router-view");return t(),s(v,null,[c("nav",null,[l(ie),l(fe)]),c("div",me,[l(te,{class:"sidebar"}),l(n)])],64)}}});const Le=m(be,[["__scopeId","data-v-91804c74"]]);export{Le as default};
//# sourceMappingURL=Workspace.d587289b.js.map