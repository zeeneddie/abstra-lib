import{d as m,F as b,b as d,ev as l,e as t,eD as a,u as o,bj as I,eN as $,eU as x,ex as k,eT as i,eE as A,eF as T,v as y,aq as S,f as v,eA as B,eB as D,o as C,w as q}from"./outputWidgets.31ce2d5c.js";import{M}from"./member.c8733f7b.js";import{t as V}from"./icons.266b547d.js";import{a as g}from"./router.8f071dc2.js";import{L as E}from"./CircularLoading.edae9c88.js";import{W as K}from"./WidgetsFrame.6ae6a4f6.js";import"./gateway.3615e807.js";import"./FormItem.5f0b61bf.js";import"./hasIn.932773c2.js";import"./index.0d76378d.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[s]="485da525-71e2-4011-918c-424f9845522d",n._sentryDebugIdIdentifier="sentry-dbid-485da525-71e2-4011-918c-424f9845522d")}catch{}})();const L=n=>(A("data-v-06bca615"),n=n(),T(),n),N={class:"auth-info"},P={class:"auth-header"},R={class:"auth-label"},F={class:"description"},U=["onKeyup"],W={key:0,class:"span-error"},j=L(()=>t("div",{class:"spacer"},null,-1)),z=m({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(n,{emit:s}){const e=b({email:""}),r=()=>{s("sendAuthInfo",e)};return(h,c)=>(d(),l("div",N,[t("div",P,[t("div",R,a(n.header),1),t("div",F,a(o(i).translate("i18n_auth_info_description")),1)]),I(t("input",{"onUpdate:modelValue":c[0]||(c[0]=p=>e.email=p),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:x(r,["enter"])},null,40,U),[[$,e.email]]),n.invalid?(d(),l("span",W,a(o(i).translate("i18n_auth_info_invalid_email")),1)):k("",!0),j,t("button",{class:"next-button",onClick:r},a(o(i).translate("i18n_auth_info_send_code")),1)]))}});const G=y(z,[["__scopeId","data-v-06bca615"]]),H=n=>(A("data-v-9fec7fd3"),n=n(),T(),n),J={class:"auth-token"},O={class:"auth-label"},Q=["onKeyup"],X={key:0,class:"span-error"},Y={key:1,class:"span-error"},Z=H(()=>t("div",{class:"spacer"},null,-1)),ee={class:"button-icon",viewBox:"0 0 24 24"},te=["d"],ne={class:"footer"},se=m({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(n,{emit:s}){const e=b({token:""}),r=()=>{s("restartAuth")},h=()=>{s("resendToken")},c=()=>{s("sendToken",e.token)};return(p,_)=>(d(),l("div",J,[t("div",O,a(o(i).translate("i18n_auth_token_label",{email:p.email})),1),I(t("input",{"onUpdate:modelValue":_[0]||(_[0]=u=>e.token=u),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:x(c,["enter"])},null,40,Q),[[$,e.token]]),p.expired?(d(),l("span",X,a(o(i).translate("i18n_auth_token_expired")),1)):k("",!0),p.invalid?(d(),l("span",Y,a(o(i).translate("i18n_auth_token_invalid")),1)):k("",!0),Z,t("button",{class:"next-button",onClick:c},a(o(i).translate("i18n_auth_token_verify_email")),1),t("button",{class:"secondary-button back",onClick:r},[(d(),l("svg",ee,[t("path",{d:o(V)},null,8,te)])),S(" "+a(o(i).translate("i18n_auth_token_try_again")),1)]),t("button",{class:"secondary-button back",onClick:h},a(o(i).translate("i18n_auth_token_resend_email")),1),t("div",ne,a(o(i).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const oe=y(se,[["__scopeId","data-v-9fec7fd3"]]),ae={key:0,class:"form"},ie={class:"form-wrapper"},re={class:"widget"},de={key:1,class:"form"},le={class:"form-wrapper"},ce={class:"widget"},_e={key:2,class:"form"},ue={class:"form-wrapper"},pe={class:"loading"},he=m({__name:"Passwordless",props:{header:{type:String,default:i.translate("i18n_auth_validate_your_email")}},emits:["done"],setup(n,{emit:s}){const e=b({stage:"collect-info",info:null,token:null,invalid:!1}),r=async _=>{e.info=_,e.stage="loading";const u=await g.authenticate(_.email);e.invalid=!!u,u?e.stage="collect-info":e.stage="collect-token"},h=async _=>{var u;if(!!((u=e.info)!=null&&u.email)){e.token=_,e.stage="loading";try{const f=await g.verify(e.info.email,e.token);if(!f)throw new Error("no user");s("done",f),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},c=()=>{e.info&&r(e.info)},p=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(_,u)=>{var f,w;return e.stage==="collect-info"?(d(),l("div",ae,[t("div",ie,[t("div",re,[v(G,{invalid:e.invalid,header:n.header,onSendAuthInfo:r},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(d(),l("div",de,[t("div",le,[t("div",ce,[v(oe,{invalid:e.invalid,email:(w=(f=e.info)==null?void 0:f.email)!=null?w:"",onSendToken:h,onResendToken:c,onRestartAuth:p},null,8,["invalid","email"])])])])):(d(),l("div",_e,[t("div",ue,[t("div",pe,[v(E)])])]))}}});const fe=y(he,[["__scopeId","data-v-6b5a711a"]]),ve={class:"login"},me=m({__name:"Login",setup(n){const s=B(),e=D();async function r(){await M.login(),e.query.redirect?s.push({path:e.query.redirect,query:{...e.query,redirect:e.query["prev-redirect"],"prev-redirect":void 0}}):s.push({name:"home"})}return C(async()=>{g.getAuthor()&&await r()}),(h,c)=>(d(),l("div",ve,[v(K,{theme:"white","main-color":"#d14056","font-family":"sans-serif"},{default:q(()=>[v(fe,{class:"passwordless",onDone:r})]),_:1})]))}});const Se=y(me,[["__scopeId","data-v-c3f079b3"]]);export{Se as default};
//# sourceMappingURL=Login.210d9d63.js.map