import{u as I}from"./index.d8a73281.js";import{d as k,X as w,H as h,b as a,eu as n,dl as P,ew as L,ez as V,e as t,eE as S,eF as $,eG as D,v as B,f as b,u as c,aq as U,eA as W,eB as Z,r as F,c as q,eL as N}from"./outputWidgets.36438843.js";import{b as z,c as j,d as T,r as G}from"./FormRunner.3736858f.js";import{a as O}from"./asyncComputed.337ea25d.js";import{L as X}from"./CircularLoading.cc0ba69e.js";import{F as J}from"./forms.cce38b61.js";import{W as K}from"./workspaces.fc8248ce.js";import"./envVars.cc1ecbde.js";import"./pubsub.0ad28dde.js";import"./url.5c79ed51.js";import"./Passwordless.675dbc98.js";import"./index.c636e08c.js";import"./PhArrowClockwise.vue.59f629f1.js";import"./PlayerNavbar.b7b1ea68.js";import"./PhKanban.vue.0095fbc2.js";import"./repository.1b3a1232.js";import"./Text.0a4c76ae.js";import"./index.60dd27c4.js";import"./Link.0405183d.js";import"./Paragraph.db54cd0a.js";import"./Title.06965b70.js";import"./index.46e7eb67.js";import"./WidgetsFrame.100bf0bd.js";import"./Steps.f55eb08a.js";import"./Card.5a1294b3.js";import"./TabPane.3879967a.js";import"./hasIn.0e346df9.js";import"./record.84099288.js";import"./runnerData.4f481531.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="aabc2078-4642-44aa-b8d5-109129831772",e._sentryDebugIdIdentifier="sentry-dbid-aabc2078-4642-44aa-b8d5-109129831772")}catch{}})();const Q=["width","height","fill","transform"],Y={key:0},ee=t("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"},null,-1),re=[ee],te={key:1},oe=t("path",{d:"M112,56V200L40,128Z",opacity:"0.2"},null,-1),ae=t("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"},null,-1),ne=[oe,ae],se={key:2},le=t("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"},null,-1),ie=[le],de={key:3},ce=t("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"},null,-1),ue=[ce],pe={key:4},me=t("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"},null,-1),_e=[me],ve={key:5},ge=t("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"},null,-1),he=[ge],fe={name:"PhArrowLeft"},ye=k({...fe,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(e){const r=e,i=w("weight","regular"),s=w("size","1em"),u=w("color","currentColor"),f=w("mirrored",!1),l=h(()=>{var o;return(o=r.weight)!=null?o:i}),y=h(()=>{var o;return(o=r.size)!=null?o:s}),p=h(()=>{var o;return(o=r.color)!=null?o:u}),x=h(()=>r.mirrored!==void 0?r.mirrored?"scale(-1, 1)":void 0:f?"scale(-1, 1)":void 0);return(o,A)=>(a(),n("svg",V({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:y.value,height:y.value,fill:p.value,transform:x.value},o.$attrs),[P(o.$slots,"default"),l.value==="bold"?(a(),n("g",Y,re)):l.value==="duotone"?(a(),n("g",te,ne)):l.value==="fill"?(a(),n("g",se,ie)):l.value==="light"?(a(),n("g",de,ue)):l.value==="regular"?(a(),n("g",pe,_e)):l.value==="thin"?(a(),n("g",ve,he)):L("",!0)],16,Q))}}),R=e=>($("data-v-3e46b76c"),e=e(),D(),e),we={class:"error"},be=R(()=>t("h1",{class:"error-header"},"Error",-1)),ke={class:"error-body"},xe={class:"error-message"},Ae={class:"error-details"},Se=R(()=>t("span",null,"Reload",-1)),Fe=[Se],Be=k({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:r}){const i=e,s=h(()=>i.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function u(){r("reload")}return(f,l)=>(a(),n("div",we,[be,t("div",ke,[t("div",xe,[t("p",null,S(s.value),1),t("p",Ae,S(e.error.name)+": "+S(e.error.message),1)]),t("div",{class:"error-actions"},[t("button",{class:"btn btn-primary",onClick:u},Fe)])])]))}});const Ee=B(Be,[["__scopeId","data-v-3e46b76c"]]),Me=k({__name:"BackButton",emits:["exitFullscreenPreview"],setup(e,{emit:r}){return(i,s)=>(a(),n("button",{class:"back-btn",onClick:s[0]||(s[0]=u=>r("exitFullscreenPreview"))},[b(c(ye),{size:20,color:"#5A677A"}),U(" Editor ")]))}});const Re=B(Me,[["__scopeId","data-v-f34f7ac4"]]),Ce={class:"page"},He={key:1,class:"error"},Ie={key:2,style:{width:"100%",height:"100%",display:"flex"}},Pe={style:{width:"100%",height:"100%",display:"flex"}},Le=k({__name:"FormPreview",setup(e){const r=W(),i=Z(),s=F(null),u=F(null),f=i.query,l=F(null);function y(d,m){G("preview",r,d,m)}const{result:p,loading:x,refetch:o,error:A}=O(async()=>{const[d,m]=await Promise.all([J.get(i.params.id),K.get()]),v=new j({formRunnerData:d.makeRunnerData(m),queryParams:f,userManager:I,connectionManager:new T(d.id),onFormStart:()=>{},onFormEnd:()=>{},onRedirect:y,onAuthUpdate:_=>l.value=_,onStateUpdate:_=>s.value=_,logService:null,onStackTraceUpdate:null});u.value=d.makeRunnerData(m);const g=v.getState();return s.value=g.formState,l.value=g.passwordlessUser,N({form:d,workspace:m,controller:v})}),C=async({id:d})=>{await r.push({params:{id:d},name:"formPreview",query:i.query}),o()},H=()=>{r.push(`/_editor/form/${encodeURIComponent(i.params.id)}`)};return(d,m)=>{var v,g,_,E,M;return a(),n("div",Ce,[c(x)||!s.value||!u.value?(a(),q(X,{key:0})):c(A)?(a(),n("div",He,[b(Ee,{error:c(A),onReload:c(o)},null,8,["error","onReload"])])):(a(),n("main",Ie,[t("div",Pe,[b(z,{style:{height:"unset",flex:1,overflow:"hidden"},"is-preview":!1,"form-runner-data":u.value,"form-state":s.value,"user-email":(v=l.value)==null?void 0:v.claims.email,onUpdateWidgetErrors:(g=c(p))==null?void 0:g.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(_=c(p))==null?void 0:_.controller.updateWidgetValue,onActionClicked:(E=c(p))==null?void 0:E.controller.handleActionClick,onNavigate:C,onLogout:(M=c(p))==null?void 0:M.controller.logout},null,8,["form-runner-data","form-state","user-email","onUpdateWidgetErrors","onUpdateWidgetValue","onActionClicked","onLogout"]),b(Re,{onExitFullscreenPreview:H})])]))])}}});const ur=B(Le,[["__scopeId","data-v-2b94eb6e"]]);export{ur as default};
//# sourceMappingURL=FormPreview.a1b99bb2.js.map
