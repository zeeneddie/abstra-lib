import{d as w,b as o,c as a,e as n,t as C,r as R,bh as k,eA as y,er as t,bw as S,ez as P,E as V,a as U,u as E,bu as d,aS as g,eF as B,eL as q,eu as H,eB as A,eC as L,ey as O,eq as f}from"./registerWidgets.ff0e603c.js";import{R as G,L as $,T as J,S as M,_ as N,a as D}from"./UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.ca5fb109.js";import{L as I}from"./CircularLoading.b4308657.js";import{a as Q}from"./asyncComputed.47db4727.js";import{H as F}from"./hooks.eec847d2.js";import{B as j}from"./BackButton.3b752962.js";import{A as z,B as K,e as W}from"./icons.e90de051.js";import{S as X}from"./SaveButton.1c8ff1e5.js";import{D as Y}from"./DocsButton.73363d5d.js";import"./forms.21b47742.js";import"./activeRecord.193d97cb.js";import"./pubsub.bd8735a3.js";import"./dashes.ae356330.js";import"./index.e3ad034d.js";import"./jobs.875f4f93.js";import"./workspaces.145b71db.js";import"./uuid.0307a1d7.js";import"./storage.db287aee.js";import"./lottie.0af290d8.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[c]="865a29aa-5e32-4068-bf1b-d3c452d31f60",r._sentryDebugIdIdentifier="sentry-dbid-865a29aa-5e32-4068-bf1b-d3c452d31f60")}catch{}})();const Z={class:"hook-settings"},ee=w({__name:"HookSettings",props:{hook:{}},setup(r){return(c,u)=>(o(),a("div",Z,[n(G,{runtime:c.hook},null,8,["runtime"])]))}});const oe=C(ee,[["__scopeId","data-v-6e8accf0"]]),te={class:"options-wrapper"},se=["onClick"],ae=w({__name:"ADropdown",props:{options:{},value:{}},emits:["select"],setup(r,{emit:c}){const u=R(null),e=s=>{var m;c("select",s),(m=u.value)==null||m.blur()};return(s,m)=>(o(),a("div",{ref_key:"dropdown",ref:u,class:"dropdown",tabindex:"1"},[k(y(s.value)+" ",1),t("div",te,[(o(!0),a(S,null,P(s.options,p=>(o(),a("div",{key:p.value,class:"option",onClick:T=>e(p.value)},y(p.label),9,se))),128))])],512))}});const ne=C(ae,[["__scopeId","data-v-cac46a2e"]]),x=r=>(A("data-v-36cb1667"),r=r(),L(),r),le={class:"hook-runner"},re={class:"title"},ie={class:"section"},ce=x(()=>t("div",{class:"section-header"},"Request configuration",-1)),de=x(()=>t("div",{class:"subsection-label"},"Method",-1)),ue={class:"subsection-label"},pe=["onUpdate:modelValue"],_e=["onUpdate:modelValue"],he={key:0,class:"subsection-label"},me={class:"property"},ve=x(()=>t("div",{class:"property-label"},"Body is JSON",-1)),ye={class:"section"},fe=x(()=>t("div",{class:"section-header"},"Response",-1)),ke={key:0,class:"section"},be={class:"no-execution-message"},ge={key:1,class:"section"},Se=w({__name:"HookRunner",props:{hook:{}},setup(r){const c=r,u=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],e=V({queryParams:[{name:"",value:""}],method:"GET",body:"",loading:!1,isBodyJson:!0}),s=$.create(),m=async()=>{const v={"Content-Type":e.isBodyJson?"application/json":"text/plain"},i=await c.hook.test({method:e.method,query:e.queryParams.reduce((_,{name:l,value:h})=>(l&&h&&(_[l]=h),_),{}),body:e.body,headers:{...v}});e.response=i,i.stderr&&s.log({type:"stderr",log:i.stderr}),i.stdout&&s.log({type:"stdout",log:i.stdout})},p=()=>{e.queryParams.push({name:"",value:""})},T=v=>{e.queryParams=e.queryParams.filter((i,_)=>_!==v)};return(v,i)=>{const _=U("icon");return o(),a("div",le,[t("div",re,[k(" Test your hook here "),e.loading?(o(),E(I,{key:0})):(o(),a("button",{key:1,class:"execution-button",onClick:m},[n(_,{path:d(z),width:"14",height:"14",fill:"#ffffff"},null,8,["path"]),k(" Run ")]))]),t("div",ie,[ce,de,n(ne,{value:e.method,options:u,onSelect:i[0]||(i[0]=l=>e.method=l)},null,8,["value"]),t("div",ue,[k(" Query Params "),n(_,{class:"action-icon",path:d(K),width:"16",height:"16","fill-hover":"#777777",onClick:p},null,8,["path"])]),(o(!0),a(S,null,P(e.queryParams,(l,h)=>(o(),a("div",{key:h,class:"params-input"},[g(t("input",{"onUpdate:modelValue":b=>l.name=b,type:"text",placeholder:"name"},null,8,pe),[[B,l.name]]),g(t("input",{"onUpdate:modelValue":b=>l.value=b,type:"text",placeholder:"value"},null,8,_e),[[B,l.value]]),n(_,{class:"delete-icon",path:d(W),"fill-hover":"#777777",onClick:b=>T(h)},null,8,["path","onClick"])]))),128)),e.method!=="GET"?(o(),a("div",he,[k(" Request Body "),t("div",me,[g(t("input",{"onUpdate:modelValue":i[1]||(i[1]=l=>e.isBodyJson=l),class:"checkbox-input",type:"checkbox"},null,512),[[q,e.isBodyJson]]),ve])])):H("",!0),e.method!=="GET"?g((o(),a("textarea",{key:1,"onUpdate:modelValue":i[2]||(i[2]=l=>e.body=l)},null,512)),[[B,e.body]]):H("",!0)]),t("div",ye,[fe,e.loading?(o(),a("div",ke,[t("div",be,[n(I)])])):e.response?(o(),a("div",ge,[t("pre",null,"Status: "+y(e.response.status),1),(o(!0),a(S,null,P(e.response.headers,(l,h)=>(o(),a("pre",{key:h},y(h)+": "+y(l),1))),128)),t("pre",null,y(e.response.body),1)])):H("",!0)])])}}});const we=C(Se,[["__scopeId","data-v-36cb1667"]]),Ce={class:"page"},xe={key:0,class:"loading"},Te=w({__name:"HookEditor",setup(r){const c=O(),u=$.create(),{loading:e,result:s}=Q(async()=>await F.get(c.params.hookPath)),m=async p=>{s.value&&(s.value.path=p,await s.value.save())};return(p,T)=>{var v;return o(),a(S,null,[t("div",Ce,[d(e)||!d(s)?(o(),a("div",xe,[n(I)])):(o(),E(J,{key:1,class:"editor"},{left:f(()=>[n(j,{link:"/_editor/hooks"})]),right:f(()=>[n(Y,{path:"hooks"}),n(X,{model:d(s)},null,8,["model"])]),default:f(()=>[n(D,{title:"Debug"},{default:f(()=>[n(we,{hook:d(s)},null,8,["hook"])]),_:1}),n(D,{title:"Settings"},{default:f(()=>[n(oe,{hook:d(s),onUpdatePath:m},null,8,["hook"])]),_:1})]),_:1})),n(M,{"log-service":d(u),runtime:"hooks"},null,8,["log-service"])]),n(N,{"has-changes":(v=d(s))==null?void 0:v.hasChanges()},null,8,["has-changes"])],64)}}});const Fe=C(Te,[["__scopeId","data-v-69cc27ff"]]);export{Fe as default};
//# sourceMappingURL=HookEditor.0e6bb5d5.js.map
