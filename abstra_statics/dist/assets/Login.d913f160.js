import{d as y,G as b,b as d,ev as c,e as o,eD as i,u as a,b6 as I,eV as $,eT as x,ex as g,eN as r,eE as A,eF as T,v as k,ar as S,f as m,eA as B,eB as D,o as C,w as L}from"./outputWidgets.1f5e37db.js";import{u as V}from"./icons.3ee16103.js";import{b as v}from"./router.0f91c45d.js";import{L as q}from"./CircularLoading.2ab8182b.js";import"./index.2108931e.js";import{M}from"./member.fa2029af.js";import{W as P}from"./WidgetsFrame.fbab77e0.js";import"./FormItem.35b801a2.js";import"./hasIn.8ed1a5a4.js";import"./index.cf4c23b9.js";import"./record.a20dd19d.js";import"./pubsub.82b0dd97.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="859616c0-8d64-4448-aa86-4d5b6421bd7e",t._sentryDebugIdIdentifier="sentry-dbid-859616c0-8d64-4448-aa86-4d5b6421bd7e")}catch{}})();const R=t=>(A("data-v-06bca615"),t=t(),T(),t),E={class:"auth-info"},K={class:"auth-header"},N={class:"auth-label"},U={class:"description"},F=["onKeyup"],O={key:0,class:"span-error"},W=R(()=>o("div",{class:"spacer"},null,-1)),j=y({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(t,{emit:n}){const e=b({email:""}),s=()=>{n("sendAuthInfo",e)};return(p,l)=>(d(),c("div",E,[o("div",K,[o("div",N,i(t.header),1),o("div",U,i(a(r).translate("i18n_auth_info_description")),1)]),I(o("input",{"onUpdate:modelValue":l[0]||(l[0]=h=>e.email=h),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:x(s,["enter"])},null,40,F),[[$,e.email]]),t.invalid?(d(),c("span",O,i(a(r).translate("i18n_auth_info_invalid_email")),1)):g("",!0),W,o("button",{class:"next-button",onClick:s},i(a(r).translate("i18n_auth_info_send_code")),1)]))}});const G=k(j,[["__scopeId","data-v-06bca615"]]),z=t=>(A("data-v-9fec7fd3"),t=t(),T(),t),H={class:"auth-token"},J={class:"auth-label"},Q=["onKeyup"],X={key:0,class:"span-error"},Y={key:1,class:"span-error"},Z=z(()=>o("div",{class:"spacer"},null,-1)),ee={class:"button-icon",viewBox:"0 0 24 24"},te=["d"],oe={class:"footer"},ne=y({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(t,{emit:n}){const e=b({token:""}),s=()=>{n("restartAuth")},p=()=>{n("resendToken")},l=()=>{n("sendToken",e.token)};return(h,_)=>(d(),c("div",H,[o("div",J,i(a(r).translate("i18n_auth_token_label",{email:h.email})),1),I(o("input",{"onUpdate:modelValue":_[0]||(_[0]=u=>e.token=u),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:x(l,["enter"])},null,40,Q),[[$,e.token]]),h.expired?(d(),c("span",X,i(a(r).translate("i18n_auth_token_expired")),1)):g("",!0),h.invalid?(d(),c("span",Y,i(a(r).translate("i18n_auth_token_invalid")),1)):g("",!0),Z,o("button",{class:"next-button",onClick:l},i(a(r).translate("i18n_auth_token_verify_email")),1),o("button",{class:"secondary-button back",onClick:s},[(d(),c("svg",ee,[o("path",{d:a(V)},null,8,te)])),S(" "+i(a(r).translate("i18n_auth_token_try_again")),1)]),o("button",{class:"secondary-button back",onClick:p},i(a(r).translate("i18n_auth_token_resend_email")),1),o("div",oe,i(a(r).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const se=k(ne,[["__scopeId","data-v-9fec7fd3"]]),ae={key:0,class:"form"},ie={class:"form-wrapper"},re={class:"widget"},de={key:1,class:"form"},ce={class:"form-wrapper"},le={class:"widget"},_e={key:2,class:"form"},ue={class:"form-wrapper"},pe={class:"loading"},he=y({__name:"Passwordless",props:{header:{type:String,default:r.translate("i18n_auth_validate_your_email")}},emits:["done"],setup(t,{emit:n}){const e=b({stage:"collect-info",info:null,token:null,invalid:!1}),s=async _=>{e.info=_,e.stage="loading";const u=await v.authenticate(_.email);e.invalid=!!u,u?e.stage="collect-info":e.stage="collect-token"},p=async _=>{var u;if(!!((u=e.info)!=null&&u.email)){e.token=_,e.stage="loading";try{const f=await v.verify(e.info.email,e.token);if(!f)throw new Error("no user");n("done",f),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},l=()=>{e.info&&s(e.info)},h=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(_,u)=>{var f,w;return e.stage==="collect-info"?(d(),c("div",ae,[o("div",ie,[o("div",re,[m(G,{invalid:e.invalid,header:t.header,onSendAuthInfo:s},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(d(),c("div",de,[o("div",ce,[o("div",le,[m(se,{invalid:e.invalid,email:(w=(f=e.info)==null?void 0:f.email)!=null?w:"",onSendToken:p,onResendToken:l,onRestartAuth:h},null,8,["invalid","email"])])])])):(d(),c("div",_e,[o("div",ue,[o("div",pe,[m(q)])])]))}}});const fe=k(he,[["__scopeId","data-v-6b5a711a"]]),me=async()=>{const t=await M.onboarding(),n=v.getAuthor();if(t.shouldBeOnboarded&&n){const e="https://onboarding.abstra.app/signup-form",s=new URLSearchParams({token:n.jwt}),p=e+"?"+s;window.location.replace(p)}},ve={class:"login"},ye=y({__name:"Login",setup(t){const n=B(),e=D();async function s(){await me(),e.query.redirect?n.push({path:e.query.redirect,query:{...e.query,redirect:e.query["prev-redirect"],"prev-redirect":void 0}}):n.push({name:"home"})}return C(()=>v.removeAuthor()),(p,l)=>(d(),c("div",ve,[m(P,{theme:"white","main-color":"#d14056","font-family":"sans-serif"},{default:L(()=>[m(fe,{class:"passwordless",onDone:s})]),_:1})]))}});const Ce=k(ye,[["__scopeId","data-v-f8143a8f"]]);export{Ce as default};
//# sourceMappingURL=Login.d913f160.js.map
