import{d as v,H as k,b as r,et as d,e as t,eC as a,u as s,am as I,eG as $,eN as x,ew as y,eT as i,eD as T,eE as A,x as g,b2 as S,f as m,ez as C,w as D}from"./outputWidgets.b13a87c2.js";import{t as B}from"./icons.76c1fe8b.js";import{a as w}from"./console.d76c010c.js";import{L as V}from"./CircularLoading.9771b42b.js";import{M as E}from"./member.bec819e5.js";import{W as K}from"./WidgetsFrame.023caee0.js";import"./index.98e61e8e.js";import"./Form.e21e0d73.js";import"./Title.6f86755a.js";import"./index.3d7f8177.js";import"./index.55a2786b.js";import"./index.c4d59e95.js";import"./dayjs.2e90d17d.js";import"./index.fbf04eaa.js";import"./index.7011a200.js";import"./TabPane.3cb0210e.js";import"./index.0345671f.js";import"./index.24360d49.js";import"./index.c32ce6af.js";import"./index.73746068.js";import"./index.7dcc157a.js";import"./index.0b99f8ef.js";import"./index.1b5bc05c.js";import"./index.957937c4.js";import"./gateway.f581ef9f.js";import"./activeRecord.f5a2d19d.js";import"./pubsub.dab46576.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="1cf09fd0-e9ce-49b4-94e3-c7c37c2cc721",o._sentryDebugIdIdentifier="sentry-dbid-1cf09fd0-e9ce-49b4-94e3-c7c37c2cc721")}catch{}})();const L=o=>(T("data-v-2b2eeeb7"),o=o(),A(),o),M={class:"auth-info"},N={class:"auth-header"},P={class:"auth-label"},R={class:"description"},U=["onKeyup"],W={key:0,class:"span-error"},z=L(()=>t("div",{class:"spacer"},null,-1)),F=v({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(o,{emit:n}){const e=k({email:""}),c=()=>{n("sendAuthInfo",e)};return(h,u)=>(r(),d("div",M,[t("div",N,[t("div",P,a(o.header),1),t("div",R,a(s(i).get("i18n_auth_info_description")),1)]),I(t("input",{"onUpdate:modelValue":u[0]||(u[0]=p=>e.email=p),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:x(c,["enter"])},null,40,U),[[$,e.email]]),o.invalid?(r(),d("span",W,a(s(i).get("i18n_auth_info_invalid_email")),1)):y("",!0),z,t("button",{class:"next-button",onClick:c},a(s(i).get("i18n_auth_info_send_code")),1)]))}});const G=g(F,[["__scopeId","data-v-2b2eeeb7"]]),H=o=>(T("data-v-e4f972d6"),o=o(),A(),o),j={class:"auth-token"},q={class:"auth-label"},J=["onKeyup"],O={key:0,class:"span-error"},Q={key:1,class:"span-error"},X=H(()=>t("div",{class:"spacer"},null,-1)),Y={class:"button-icon",viewBox:"0 0 24 24"},Z=["d"],ee={class:"footer"},te=v({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(o,{emit:n}){const e=k({token:""}),c=()=>{n("restartAuth")},h=()=>{n("resendToken")},u=()=>{n("sendToken",e.token)};return(p,l)=>(r(),d("div",j,[t("div",q,a(s(i).get("i18n_auth_token_label",{email:p.email})),1),I(t("input",{"onUpdate:modelValue":l[0]||(l[0]=_=>e.token=_),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:x(u,["enter"])},null,40,J),[[$,e.token]]),p.expired?(r(),d("span",O,a(s(i).get("i18n_auth_token_expired")),1)):y("",!0),p.invalid?(r(),d("span",Q,a(s(i).get("i18n_auth_token_invalid"))+"} ",1)):y("",!0),X,t("button",{class:"next-button",onClick:u},a(s(i).get("i18n_auth_token_verify_email")),1),t("button",{class:"secondary-button back",onClick:c},[(r(),d("svg",Y,[t("path",{d:s(B)},null,8,Z)])),S(" "+a(s(i).get("i18n_auth_token_try_again")),1)]),t("button",{class:"secondary-button back",onClick:h},a(s(i).get("i18n_auth_token_resend_email")),1),t("div",ee,a(s(i).get("i18n_auth_token_footer_alternative_email")),1)]))}});const oe=g(te,[["__scopeId","data-v-e4f972d6"]]),ne={key:0,class:"form"},se={class:"form-wrapper"},ae={class:"widget"},ie={key:1,class:"form"},re={class:"form-wrapper"},de={class:"widget"},ce={key:2,class:"form"},le={class:"form-wrapper"},_e={class:"loading"},ue=v({__name:"Passwordless",props:{header:{type:String,default:i.get("i18n_auth_validate_your_email")}},emits:["done"],setup(o,{emit:n}){const e=k({stage:"collect-info",info:null,token:null,invalid:!1}),c=async l=>{e.info=l,e.stage="loading";const _=await w.authenticate(l.email);e.invalid=!!_,_?e.stage="collect-info":e.stage="collect-token"},h=async l=>{var _;if(!!((_=e.info)!=null&&_.email)){e.token=l,e.stage="loading";try{const f=await w.verify(e.info.email,e.token);if(!f)throw new Error("no user");n("done",f),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},u=()=>{e.info&&c(e.info)},p=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(l,_)=>{var f,b;return e.stage==="collect-info"?(r(),d("div",ne,[t("div",se,[t("div",ae,[m(G,{invalid:e.invalid,header:o.header,onSendAuthInfo:c},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(r(),d("div",ie,[t("div",re,[t("div",de,[m(oe,{invalid:e.invalid,email:(b=(f=e.info)==null?void 0:f.email)!=null?b:"",onSendToken:h,onResendToken:u,onRestartAuth:p},null,8,["invalid","email"])])])])):(r(),d("div",ce,[t("div",le,[t("div",_e,[m(V)])])]))}}});const pe=g(ue,[["__scopeId","data-v-fb0b76f8"]]),fe={class:"login"},he=v({__name:"Login",setup(o){const n=C();async function e(c){await E.login(),n.push({name:"home"})}return(c,h)=>(r(),d("div",fe,[m(K,{theme:"white","main-color":"#d14056","font-family":"sans-serif",runtime:"dash"},{default:D(()=>[m(pe,{class:"passwordless",onDone:e})]),_:1})]))}});const Fe=g(he,[["__scopeId","data-v-665024a7"]]);export{Fe as default};
//# sourceMappingURL=Login.4fb3151d.js.map
