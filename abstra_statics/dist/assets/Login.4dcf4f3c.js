import{d as v,G as k,b as d,et as l,e as t,eB as a,u as s,ap as I,eG as $,eO as x,ev as g,eQ as i,eC as T,eD as A,v as y,aI as S,f as m,ey as B,w as C}from"./outputWidgets.4420c31f.js";import{t as D}from"./icons.2ee60219.js";import{a as w}from"./router.141c8be7.js";import{L as V}from"./CircularLoading.736211a4.js";import{M as K}from"./member.5fc3aff5.js";import{W as L}from"./WidgetsFrame.806347e9.js";import"./Title.f4c9dd29.js";import"./index.1ba1c343.js";import"./gateway.c8298b74.js";import"./activeRecord.a89b1253.js";import"./pubsub.1ac087cf.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="24037ef3-2ac6-46ae-aeaa-2daab16ee5a2",o._sentryDebugIdIdentifier="sentry-dbid-24037ef3-2ac6-46ae-aeaa-2daab16ee5a2")}catch{}})();const M=o=>(T("data-v-2b2eeeb7"),o=o(),A(),o),E={class:"auth-info"},N={class:"auth-header"},P={class:"auth-label"},R={class:"description"},G=["onKeyup"],U={key:0,class:"span-error"},W=M(()=>t("div",{class:"spacer"},null,-1)),F=v({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(o,{emit:n}){const e=k({email:""}),_=()=>{n("sendAuthInfo",e)};return(f,u)=>(d(),l("div",E,[t("div",N,[t("div",P,a(o.header),1),t("div",R,a(s(i).get("i18n_auth_info_description")),1)]),I(t("input",{"onUpdate:modelValue":u[0]||(u[0]=p=>e.email=p),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:x(_,["enter"])},null,40,G),[[$,e.email]]),o.invalid?(d(),l("span",U,a(s(i).get("i18n_auth_info_invalid_email")),1)):g("",!0),W,t("button",{class:"next-button",onClick:_},a(s(i).get("i18n_auth_info_send_code")),1)]))}});const O=y(F,[["__scopeId","data-v-2b2eeeb7"]]),Q=o=>(T("data-v-e4f972d6"),o=o(),A(),o),j={class:"auth-token"},q={class:"auth-label"},z=["onKeyup"],H={key:0,class:"span-error"},J={key:1,class:"span-error"},X=Q(()=>t("div",{class:"spacer"},null,-1)),Y={class:"button-icon",viewBox:"0 0 24 24"},Z=["d"],ee={class:"footer"},te=v({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(o,{emit:n}){const e=k({token:""}),_=()=>{n("restartAuth")},f=()=>{n("resendToken")},u=()=>{n("sendToken",e.token)};return(p,c)=>(d(),l("div",j,[t("div",q,a(s(i).get("i18n_auth_token_label",{email:p.email})),1),I(t("input",{"onUpdate:modelValue":c[0]||(c[0]=r=>e.token=r),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:x(u,["enter"])},null,40,z),[[$,e.token]]),p.expired?(d(),l("span",H,a(s(i).get("i18n_auth_token_expired")),1)):g("",!0),p.invalid?(d(),l("span",J,a(s(i).get("i18n_auth_token_invalid"))+"} ",1)):g("",!0),X,t("button",{class:"next-button",onClick:u},a(s(i).get("i18n_auth_token_verify_email")),1),t("button",{class:"secondary-button back",onClick:_},[(d(),l("svg",Y,[t("path",{d:s(D)},null,8,Z)])),S(" "+a(s(i).get("i18n_auth_token_try_again")),1)]),t("button",{class:"secondary-button back",onClick:f},a(s(i).get("i18n_auth_token_resend_email")),1),t("div",ee,a(s(i).get("i18n_auth_token_footer_alternative_email")),1)]))}});const oe=y(te,[["__scopeId","data-v-e4f972d6"]]),ne={key:0,class:"form"},se={class:"form-wrapper"},ae={class:"widget"},ie={key:1,class:"form"},de={class:"form-wrapper"},le={class:"widget"},_e={key:2,class:"form"},ce={class:"form-wrapper"},re={class:"loading"},ue=v({__name:"Passwordless",props:{header:{type:String,default:i.get("i18n_auth_validate_your_email")}},emits:["done"],setup(o,{emit:n}){const e=k({stage:"collect-info",info:null,token:null,invalid:!1}),_=async c=>{e.info=c,e.stage="loading";const r=await w.authenticate(c.email);e.invalid=!!r,r?e.stage="collect-info":e.stage="collect-token"},f=async c=>{var r;if(!!((r=e.info)!=null&&r.email)){e.token=c,e.stage="loading";try{const h=await w.verify(e.info.email,e.token);if(!h)throw new Error("no user");n("done",h),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},u=()=>{e.info&&_(e.info)},p=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(c,r)=>{var h,b;return e.stage==="collect-info"?(d(),l("div",ne,[t("div",se,[t("div",ae,[m(O,{invalid:e.invalid,header:o.header,onSendAuthInfo:_},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(d(),l("div",ie,[t("div",de,[t("div",le,[m(oe,{invalid:e.invalid,email:(b=(h=e.info)==null?void 0:h.email)!=null?b:"",onSendToken:f,onResendToken:u,onRestartAuth:p},null,8,["invalid","email"])])])])):(d(),l("div",_e,[t("div",ce,[t("div",re,[m(V)])])]))}}});const pe=y(ue,[["__scopeId","data-v-fb0b76f8"]]),he={class:"login"},fe=v({__name:"Login",setup(o){const n=B();async function e(_){await K.login(),n.push({name:"home"})}return(_,f)=>(d(),l("div",he,[m(L,{theme:"white","main-color":"#d14056","font-family":"sans-serif",runtime:"dash"},{default:C(()=>[m(pe,{class:"passwordless",onDone:e})]),_:1})]))}});const Ae=y(fe,[["__scopeId","data-v-665024a7"]]);export{Ae as default};
//# sourceMappingURL=Login.4dcf4f3c.js.map
