import{d as v,F as b,b as c,eu as d,e as t,eC as a,u as o,ao as I,eM as $,eT as x,ew as k,eS as i,eD as A,eE as T,t as y,az as S,f as m,ez as C,eA as D,o as B,w as M}from"./outputWidgets.e350d8e4.js";import{M as V}from"./member.19ceade1.js";import{t as q}from"./icons.2c394e63.js";import{a as g}from"./router.d677740c.js";import{L as E}from"./CircularLoading.d2abb58c.js";import{W as K}from"./WidgetsFrame.30d75202.js";import"./gateway.1fcbfbcf.js";import"./Form.b043e834.js";import"./index.c53bcd95.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[s]="710378fd-e314-46cf-9061-c93eacc32b74",n._sentryDebugIdIdentifier="sentry-dbid-710378fd-e314-46cf-9061-c93eacc32b74")}catch{}})();const L=n=>(A("data-v-06bca615"),n=n(),T(),n),N={class:"auth-info"},P={class:"auth-header"},R={class:"auth-label"},z={class:"description"},F=["onKeyup"],U={key:0,class:"span-error"},W=L(()=>t("div",{class:"spacer"},null,-1)),j=v({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(n,{emit:s}){const e=b({email:""}),r=()=>{s("sendAuthInfo",e)};return(f,l)=>(c(),d("div",N,[t("div",P,[t("div",R,a(n.header),1),t("div",z,a(o(i).translate("i18n_auth_info_description")),1)]),I(t("input",{"onUpdate:modelValue":l[0]||(l[0]=p=>e.email=p),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:x(r,["enter"])},null,40,F),[[$,e.email]]),n.invalid?(c(),d("span",U,a(o(i).translate("i18n_auth_info_invalid_email")),1)):k("",!0),W,t("button",{class:"next-button",onClick:r},a(o(i).translate("i18n_auth_info_send_code")),1)]))}});const G=y(j,[["__scopeId","data-v-06bca615"]]),H=n=>(A("data-v-9fec7fd3"),n=n(),T(),n),J={class:"auth-token"},O={class:"auth-label"},Q=["onKeyup"],X={key:0,class:"span-error"},Y={key:1,class:"span-error"},Z=H(()=>t("div",{class:"spacer"},null,-1)),ee={class:"button-icon",viewBox:"0 0 24 24"},te=["d"],ne={class:"footer"},se=v({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(n,{emit:s}){const e=b({token:""}),r=()=>{s("restartAuth")},f=()=>{s("resendToken")},l=()=>{s("sendToken",e.token)};return(p,_)=>(c(),d("div",J,[t("div",O,a(o(i).translate("i18n_auth_token_label",{email:p.email})),1),I(t("input",{"onUpdate:modelValue":_[0]||(_[0]=u=>e.token=u),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:x(l,["enter"])},null,40,Q),[[$,e.token]]),p.expired?(c(),d("span",X,a(o(i).translate("i18n_auth_token_expired")),1)):k("",!0),p.invalid?(c(),d("span",Y,a(o(i).translate("i18n_auth_token_invalid")),1)):k("",!0),Z,t("button",{class:"next-button",onClick:l},a(o(i).translate("i18n_auth_token_verify_email")),1),t("button",{class:"secondary-button back",onClick:r},[(c(),d("svg",ee,[t("path",{d:o(q)},null,8,te)])),S(" "+a(o(i).translate("i18n_auth_token_try_again")),1)]),t("button",{class:"secondary-button back",onClick:f},a(o(i).translate("i18n_auth_token_resend_email")),1),t("div",ne,a(o(i).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const oe=y(se,[["__scopeId","data-v-9fec7fd3"]]),ae={key:0,class:"form"},ie={class:"form-wrapper"},re={class:"widget"},ce={key:1,class:"form"},de={class:"form-wrapper"},le={class:"widget"},_e={key:2,class:"form"},ue={class:"form-wrapper"},pe={class:"loading"},fe=v({__name:"Passwordless",props:{header:{type:String,default:i.translate("i18n_auth_validate_your_email")}},emits:["done"],setup(n,{emit:s}){const e=b({stage:"collect-info",info:null,token:null,invalid:!1}),r=async _=>{e.info=_,e.stage="loading";const u=await g.authenticate(_.email);e.invalid=!!u,u?e.stage="collect-info":e.stage="collect-token"},f=async _=>{var u;if(!!((u=e.info)!=null&&u.email)){e.token=_,e.stage="loading";try{const h=await g.verify(e.info.email,e.token);if(!h)throw new Error("no user");s("done",h),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},l=()=>{e.info&&r(e.info)},p=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(_,u)=>{var h,w;return e.stage==="collect-info"?(c(),d("div",ae,[t("div",ie,[t("div",re,[m(G,{invalid:e.invalid,header:n.header,onSendAuthInfo:r},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(c(),d("div",ce,[t("div",de,[t("div",le,[m(oe,{invalid:e.invalid,email:(w=(h=e.info)==null?void 0:h.email)!=null?w:"",onSendToken:f,onResendToken:l,onRestartAuth:p},null,8,["invalid","email"])])])])):(c(),d("div",_e,[t("div",ue,[t("div",pe,[m(E)])])]))}}});const he=y(fe,[["__scopeId","data-v-6b5a711a"]]),me={class:"login"},ve=v({__name:"Login",setup(n){const s=C(),e=D();async function r(){await V.login(),e.query.redirect?s.push({path:e.query.redirect,query:{...e.query,redirect:e.query["prev-redirect"],"prev-redirect":void 0}}):s.push({name:"home"})}return B(async()=>{g.getAuthor()&&await r()}),(f,l)=>(c(),d("div",me,[m(K,{theme:"white","main-color":"#d14056","font-family":"sans-serif"},{default:M(()=>[m(he,{class:"passwordless",onDone:r})]),_:1})]))}});const Te=y(ve,[["__scopeId","data-v-c3f079b3"]]);export{Te as default};
//# sourceMappingURL=Login.2367994f.js.map
