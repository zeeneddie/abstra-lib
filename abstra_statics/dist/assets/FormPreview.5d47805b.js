import{u as I}from"./index.64b66deb.js";import{d as k,X as w,H as g,b as a,eu as n,dl as P,ew as L,ez as V,e as t,eE as S,eF as $,eG as D,v as B,f as b,u as d,aq as U,eA as W,eB as Z,r as F,c as q,eL as N}from"./outputWidgets.2f54a46f.js";import{b as z,c as j,d as T,r as G}from"./FormRunner.6152bcb5.js";import{a as O}from"./asyncComputed.2e5475ea.js";import{L as X}from"./CircularLoading.3c01c951.js";import{F as J}from"./forms.02272155.js";import{W as K}from"./workspaces.315fc6b4.js";import"./envVars.cdd38b6d.js";import"./pubsub.28305d1c.js";import"./url.3c35ecc3.js";import"./Passwordless.e287ce24.js";import"./index.b9cedb30.js";import"./PhArrowClockwise.vue.6562e692.js";import"./PlayerNavbar.a69990c6.js";import"./PhKanban.vue.412ec6ac.js";import"./repository.901cca6b.js";import"./Text.4c3787cc.js";import"./index.629048b2.js";import"./Link.ae8b2f11.js";import"./Paragraph.b5c2bff3.js";import"./Title.91cb4483.js";import"./index.125f94db.js";import"./WidgetsFrame.2678a873.js";import"./Steps.c380e664.js";import"./Card.038b5370.js";import"./TabPane.5c3c6939.js";import"./hasIn.86cc139a.js";import"./record.f8174d1b.js";import"./runnerData.11088c32.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="af499cc4-8642-45d2-80f4-5ca7613bcde6",e._sentryDebugIdIdentifier="sentry-dbid-af499cc4-8642-45d2-80f4-5ca7613bcde6")}catch{}})();const Q=["width","height","fill","transform"],Y={key:0},ee=t("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"},null,-1),re=[ee],te={key:1},oe=t("path",{d:"M112,56V200L40,128Z",opacity:"0.2"},null,-1),ae=t("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"},null,-1),ne=[oe,ae],se={key:2},le=t("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"},null,-1),ie=[le],ce={key:3},de=t("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"},null,-1),ue=[de],pe={key:4},me=t("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"},null,-1),_e=[me],ve={key:5},fe=t("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"},null,-1),ge=[fe],he={name:"PhArrowLeft"},ye=k({...he,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(e){const r=e,i=w("weight","regular"),s=w("size","1em"),u=w("color","currentColor"),h=w("mirrored",!1),l=g(()=>{var o;return(o=r.weight)!=null?o:i}),y=g(()=>{var o;return(o=r.size)!=null?o:s}),p=g(()=>{var o;return(o=r.color)!=null?o:u}),x=g(()=>r.mirrored!==void 0?r.mirrored?"scale(-1, 1)":void 0:h?"scale(-1, 1)":void 0);return(o,A)=>(a(),n("svg",V({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:y.value,height:y.value,fill:p.value,transform:x.value},o.$attrs),[P(o.$slots,"default"),l.value==="bold"?(a(),n("g",Y,re)):l.value==="duotone"?(a(),n("g",te,ne)):l.value==="fill"?(a(),n("g",se,ie)):l.value==="light"?(a(),n("g",ce,ue)):l.value==="regular"?(a(),n("g",pe,_e)):l.value==="thin"?(a(),n("g",ve,ge)):L("",!0)],16,Q))}}),R=e=>($("data-v-3e46b76c"),e=e(),D(),e),we={class:"error"},be=R(()=>t("h1",{class:"error-header"},"Error",-1)),ke={class:"error-body"},xe={class:"error-message"},Ae={class:"error-details"},Se=R(()=>t("span",null,"Reload",-1)),Fe=[Se],Be=k({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:r}){const i=e,s=g(()=>i.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function u(){r("reload")}return(h,l)=>(a(),n("div",we,[be,t("div",ke,[t("div",xe,[t("p",null,S(s.value),1),t("p",Ae,S(e.error.name)+": "+S(e.error.message),1)]),t("div",{class:"error-actions"},[t("button",{class:"btn btn-primary",onClick:u},Fe)])])]))}});const Ee=B(Be,[["__scopeId","data-v-3e46b76c"]]),Me=k({__name:"BackButton",emits:["exitFullscreenPreview"],setup(e,{emit:r}){return(i,s)=>(a(),n("button",{class:"back-btn",onClick:s[0]||(s[0]=u=>r("exitFullscreenPreview"))},[b(d(ye),{size:20,color:"#5A677A"}),U(" Editor ")]))}});const Re=B(Me,[["__scopeId","data-v-f34f7ac4"]]),Ce={class:"page"},He={key:1,class:"error"},Ie={key:2,style:{width:"100%",height:"100%",display:"flex"}},Pe={style:{width:"100%",height:"100%",display:"flex"}},Le=k({__name:"FormPreview",setup(e){const r=W(),i=Z(),s=F(null),u=F(null),h=i.query,l=F(null);function y(c,m){G("preview",r,c,m)}const{result:p,loading:x,refetch:o,error:A}=O(async()=>{const[c,m]=await Promise.all([J.get(i.params.id),K.get()]),v=new j({formRunnerData:c.makeRunnerData(m),queryParams:h,userManager:I,connectionManager:new T(c.id),onFormStart:()=>{},onFormEnd:()=>{},onRedirect:y,onAuthUpdate:_=>l.value=_,onStateUpdate:_=>s.value=_,logService:null,onStackTraceUpdate:null});u.value=c.makeRunnerData(m);const f=v.getState();return s.value=f.formState,l.value=f.passwordlessUser,N({form:c,workspace:m,controller:v})}),C=async({id:c})=>{await r.push({params:{id:c},name:"formPreview",query:i.query}),o()},H=()=>{r.push(`/_editor/form/${encodeURIComponent(i.params.id)}`)};return(c,m)=>{var v,f,_,E,M;return a(),n("div",Ce,[d(x)||!s.value||!u.value?(a(),q(X,{key:0})):d(A)?(a(),n("div",He,[b(Ee,{error:d(A),onReload:d(o)},null,8,["error","onReload"])])):(a(),n("main",Ie,[t("div",Pe,[b(z,{style:{height:"unset",flex:1,overflow:"hidden"},"is-preview":!1,"form-runner-data":u.value,"form-state":s.value,"user-email":(v=l.value)==null?void 0:v.claims.email,onUpdateWidgetErrors:(f=d(p))==null?void 0:f.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(_=d(p))==null?void 0:_.controller.updateWidgetValue,onActionClicked:(E=d(p))==null?void 0:E.controller.handleActionClick,onNavigate:C,onLogout:(M=d(p))==null?void 0:M.controller.logout},null,8,["form-runner-data","form-state","user-email","onUpdateWidgetErrors","onUpdateWidgetValue","onActionClicked","onLogout"]),b(Re,{onExitFullscreenPreview:H})])]))])}}});const ur=B(Le,[["__scopeId","data-v-2b94eb6e"]]);export{ur as default};
//# sourceMappingURL=FormPreview.5d47805b.js.map