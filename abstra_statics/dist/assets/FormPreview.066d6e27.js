import{u as H}from"./index.ad5ce512.js";import{d as b,X as w,H as g,b as a,eu as n,dh as P,ew as L,ez as D,e as t,eD as S,eE as V,eF as $,v as E,f as k,u as c,aq as U,eI as W,eA as Z,r as F,c as q,eL as N}from"./outputWidgets.c199cd65.js";import{b as z,c as j,d as T,r as O}from"./FormRunner.6a0b5a62.js";import{a as G}from"./asyncComputed.e8505f10.js";import{L as X}from"./CircularLoading.b3b0a392.js";import{F as J}from"./forms.05f428dc.js";import{W as K}from"./workspaces.6907ae87.js";import"./envVars.66ce4ea6.js";import"./pubsub.6235e50c.js";import"./fetch.2b5e9b72.js";import"./url.266b7147.js";import"./Passwordless.439cdc97.js";import"./index.b7b9a7a6.js";import"./PhArrowClockwise.vue.90236a2a.js";import"./PlayerNavbar.7d48330c.js";import"./PhKanban.vue.9f2d7f7b.js";import"./PhSignOut.vue.fde161f8.js";import"./Text.47bac3a4.js";import"./index.869e7552.js";import"./Link.dcc50f83.js";import"./Paragraph.72c12540.js";import"./Title.2a2cadae.js";import"./index.b163fa6b.js";import"./WidgetsFrame.20a89b58.js";import"./Steps.21019a95.js";import"./PhInfo.vue.57339a00.js";import"./Card.b21ac257.js";import"./index.f8d3c2d8.js";import"./TabPane.af37a735.js";import"./hasIn.7b6e24c6.js";import"./record.e60b008b.js";import"./runnerData.2958fc11.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="f46e7d4a-849f-4980-97e8-e0890362d6fe",e._sentryDebugIdIdentifier="sentry-dbid-f46e7d4a-849f-4980-97e8-e0890362d6fe")}catch{}})();const Q=["width","height","fill","transform"],Y={key:0},ee=t("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"},null,-1),re=[ee],te={key:1},oe=t("path",{d:"M112,56V200L40,128Z",opacity:"0.2"},null,-1),ae=t("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"},null,-1),ne=[oe,ae],se={key:2},le=t("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"},null,-1),ie=[le],de={key:3},ce=t("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"},null,-1),ue=[ce],pe={key:4},me=t("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"},null,-1),_e=[me],fe={key:5},ve=t("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"},null,-1),ge=[ve],he={name:"PhArrowLeft"},ye=b({...he,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(e){const r=e,i=w("weight","regular"),s=w("size","1em"),u=w("color","currentColor"),h=w("mirrored",!1),l=g(()=>{var o;return(o=r.weight)!=null?o:i}),y=g(()=>{var o;return(o=r.size)!=null?o:s}),p=g(()=>{var o;return(o=r.color)!=null?o:u}),x=g(()=>r.mirrored!==void 0?r.mirrored?"scale(-1, 1)":void 0:h?"scale(-1, 1)":void 0);return(o,A)=>(a(),n("svg",D({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:y.value,height:y.value,fill:p.value,transform:x.value},o.$attrs),[P(o.$slots,"default"),l.value==="bold"?(a(),n("g",Y,re)):l.value==="duotone"?(a(),n("g",te,ne)):l.value==="fill"?(a(),n("g",se,ie)):l.value==="light"?(a(),n("g",de,ue)):l.value==="regular"?(a(),n("g",pe,_e)):l.value==="thin"?(a(),n("g",fe,ge)):L("",!0)],16,Q))}}),B=e=>(V("data-v-3e46b76c"),e=e(),$(),e),we={class:"error"},ke=B(()=>t("h1",{class:"error-header"},"Error",-1)),be={class:"error-body"},xe={class:"error-message"},Ae={class:"error-details"},Se=B(()=>t("span",null,"Reload",-1)),Fe=[Se],Ee=b({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:r}){const i=e,s=g(()=>i.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function u(){r("reload")}return(h,l)=>(a(),n("div",we,[ke,t("div",be,[t("div",xe,[t("p",null,S(s.value),1),t("p",Ae,S(e.error.name)+": "+S(e.error.message),1)]),t("div",{class:"error-actions"},[t("button",{class:"btn btn-primary",onClick:u},Fe)])])]))}});const Me=E(Ee,[["__scopeId","data-v-3e46b76c"]]),Re=b({__name:"BackButton",emits:["exitFullscreenPreview"],setup(e,{emit:r}){return(i,s)=>(a(),n("button",{class:"back-btn",onClick:s[0]||(s[0]=u=>r("exitFullscreenPreview"))},[k(c(ye),{size:20,color:"#5A677A"}),U(" Editor ")]))}});const Be=E(Re,[["__scopeId","data-v-f34f7ac4"]]),Ie={class:"page"},Ce={key:1,class:"error"},He={key:2,style:{width:"100%",height:"100%",display:"flex"}},Pe={style:{width:"100%",height:"100%",display:"flex"}},Le=b({__name:"FormPreview",setup(e){const r=W(),i=Z(),s=F(null),u=F(null),h=i.query,l=F(null);function y(d,m){O("preview",r,d,m)}const{result:p,loading:x,refetch:o,error:A}=G(async()=>{const[d,m]=await Promise.all([J.get(i.params.id),K.get()]),f=new j({formRunnerData:d.makeRunnerData(m),queryParams:h,userManager:H,connectionManager:new T(d.id),onFormStart:()=>{},onFormEnd:()=>{},onRedirect:y,onAuthUpdate:_=>l.value=_,onStateUpdate:_=>s.value=_,logService:null,onStackTraceUpdate:null});u.value=d.makeRunnerData(m);const v=f.getState();return s.value=v.formState,l.value=v.passwordlessUser,N({form:d,workspace:m,controller:f})}),I=async({id:d})=>{await r.push({params:{id:d},name:"formPreview",query:i.query}),o()},C=()=>{r.push(`/_editor/form/${encodeURIComponent(i.params.id)}`)};return(d,m)=>{var f,v,_,M,R;return a(),n("div",Ie,[c(x)||!s.value||!u.value?(a(),q(X,{key:0})):c(A)?(a(),n("div",Ce,[k(Me,{error:c(A),onReload:c(o)},null,8,["error","onReload"])])):(a(),n("main",He,[t("div",Pe,[k(z,{style:{height:"unset",flex:1,overflow:"hidden"},"is-preview":!1,"form-runner-data":u.value,"form-state":s.value,"user-email":(f=l.value)==null?void 0:f.claims.email,onUpdateWidgetErrors:(v=c(p))==null?void 0:v.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(_=c(p))==null?void 0:_.controller.updateWidgetValue,onActionClicked:(M=c(p))==null?void 0:M.controller.handleActionClick,onNavigate:I,onLogout:(R=c(p))==null?void 0:R.controller.logout},null,8,["form-runner-data","form-state","user-email","onUpdateWidgetErrors","onUpdateWidgetValue","onActionClicked","onLogout"]),k(Be,{onExitFullscreenPreview:C})])]))])}}});const _r=E(Le,[["__scopeId","data-v-2b94eb6e"]]);export{_r as default};
//# sourceMappingURL=FormPreview.066d6e27.js.map
