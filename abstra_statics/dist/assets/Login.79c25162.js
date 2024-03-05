import{d as m,G as b,b as r,ev as c,e as t,eD as a,u as o,aK as I,eS as $,f1 as x,ex as k,eY as i,eE as A,eF as T,v as y,ar as B,f as v,eA as D,eB as C,H as K,de as L,w as V}from"./outputWidgets.a9a26b52.js";import{J as q}from"./icons.497d8b8f.js";import{b as g}from"./router.866ec0f5.js";import{L as S}from"./CircularLoading.d9b2fa79.js";import{W as E}from"./WidgetsFrame.ac77bccc.js";import"./Form.e65a4592.js";import"./hasIn.f6010454.js";import"./popupNotifcation.2efa6a99.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="2238c0fe-9a16-46b5-8006-bc8a67198b0b",s._sentryDebugIdIdentifier="sentry-dbid-2238c0fe-9a16-46b5-8006-bc8a67198b0b")}catch{}})();const P=s=>(A("data-v-06bca615"),s=s(),T(),s),N={class:"auth-info"},R={class:"auth-header"},M={class:"auth-label"},F={class:"description"},U=["onKeyup"],W={key:0,class:"span-error"},G=P(()=>t("div",{class:"spacer"},null,-1)),H=m({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(s,{emit:n}){const e=b({email:""}),d=()=>{n("sendAuthInfo",e)};return(h,l)=>(r(),c("div",N,[t("div",R,[t("div",M,a(s.header),1),t("div",F,a(o(i).translate("i18n_auth_info_description")),1)]),I(t("input",{"onUpdate:modelValue":l[0]||(l[0]=_=>e.email=_),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:x(d,["enter"])},null,40,U),[[$,e.email]]),s.invalid?(r(),c("span",W,a(o(i).translate("i18n_auth_info_invalid_email")),1)):k("",!0),G,t("button",{class:"next-button",onClick:d},a(o(i).translate("i18n_auth_info_send_code")),1)]))}});const J=y(H,[["__scopeId","data-v-06bca615"]]),Y=s=>(A("data-v-9fec7fd3"),s=s(),T(),s),j={class:"auth-token"},z={class:"auth-label"},O=["onKeyup"],Q={key:0,class:"span-error"},X={key:1,class:"span-error"},Z=Y(()=>t("div",{class:"spacer"},null,-1)),ee={class:"button-icon",viewBox:"0 0 24 24"},te=["d"],se={class:"footer"},ne=m({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(s,{emit:n}){const e=b({token:""}),d=()=>{n("restartAuth")},h=()=>{n("resendToken")},l=()=>{n("sendToken",e.token)};return(_,u)=>(r(),c("div",j,[t("div",z,a(o(i).translate("i18n_auth_token_label",{email:_.email})),1),I(t("input",{"onUpdate:modelValue":u[0]||(u[0]=p=>e.token=p),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:x(l,["enter"])},null,40,O),[[$,e.token]]),_.expired?(r(),c("span",Q,a(o(i).translate("i18n_auth_token_expired")),1)):k("",!0),_.invalid?(r(),c("span",X,a(o(i).translate("i18n_auth_token_invalid")),1)):k("",!0),Z,t("button",{class:"next-button",onClick:l},a(o(i).translate("i18n_auth_token_verify_email")),1),t("button",{class:"secondary-button back",onClick:d},[(r(),c("svg",ee,[t("path",{d:o(q)},null,8,te)])),B(" "+a(o(i).translate("i18n_auth_token_try_again")),1)]),t("button",{class:"secondary-button back",onClick:h},a(o(i).translate("i18n_auth_token_resend_email")),1),t("div",se,a(o(i).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const oe=y(ne,[["__scopeId","data-v-9fec7fd3"]]),ae={key:0,class:"form"},ie={class:"form-wrapper"},re={class:"widget"},ce={key:1,class:"form"},de={class:"form-wrapper"},le={class:"widget"},_e={key:2,class:"form"},ue={class:"form-wrapper"},pe={class:"loading"},he=m({__name:"Passwordless",props:{header:{type:String,default:i.translate("i18n_auth_validate_your_email")}},emits:["done"],setup(s,{emit:n}){const e=b({stage:"collect-info",info:null,token:null,invalid:!1}),d=async u=>{e.info=u,e.stage="loading";const p=await g.authenticate(u.email);e.invalid=!!p,p?e.stage="collect-info":e.stage="collect-token"},h=async u=>{var p;if(!!((p=e.info)!=null&&p.email)){e.token=u,e.stage="loading";try{const f=await g.verify(e.info.email,e.token);if(!f)throw new Error("no user");n("done",f),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},l=()=>{e.info&&d(e.info)},_=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(u,p)=>{var f,w;return e.stage==="collect-info"?(r(),c("div",ae,[t("div",ie,[t("div",re,[v(J,{invalid:e.invalid,header:s.header,onSendAuthInfo:d},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(r(),c("div",ce,[t("div",de,[t("div",le,[v(oe,{invalid:e.invalid,email:(w=(f=e.info)==null?void 0:f.email)!=null?w:"",onSendToken:h,onResendToken:l,onRestartAuth:_},null,8,["invalid","email"])])])])):(r(),c("div",_e,[t("div",ue,[t("div",pe,[v(S)])])]))}}});const fe=y(he,[["__scopeId","data-v-6b5a711a"]]),ve={key:0,class:"login"},me={key:1,class:"loading"},ye=m({__name:"Login",setup(s){const n=D(),e=C();async function d(){e.query.redirect?await n.push({path:e.query.redirect,query:{...e.query,redirect:e.query["prev-redirect"],"prev-redirect":void 0}}):n.push({name:"home"})}const h=K(()=>!g.getAuthor());return L(()=>{h.value||d()}),(l,_)=>h.value?(r(),c("div",ve,[v(E,{theme:"white","main-color":"#d14056","font-family":"sans-serif"},{default:V(()=>[v(fe,{class:"passwordless",onDone:d})]),_:1})])):(r(),c("div",me,[v(S)]))}});const Te=y(ye,[["__scopeId","data-v-6ece069c"]]);export{Te as default};
//# sourceMappingURL=Login.79c25162.js.map
