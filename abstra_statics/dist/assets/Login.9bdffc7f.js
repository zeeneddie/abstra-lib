import{d as y,G as b,b as c,ev as d,e as o,eD as i,u as a,aK as I,eW as $,f2 as x,ex as g,eZ as r,eE as A,eF as T,v as k,ar as B,f as m,eA as D,eB as L,H as C,dc as P,w as q}from"./outputWidgets.7e6eb177.js";import{I as K}from"./icons.42e022b7.js";import{b as v}from"./router.1fa38c42.js";import{L as S}from"./CircularLoading.1961274b.js";import{W as M}from"./WidgetsFrame.7cbab09f.js";import"./index.0e1d2395.js";import{M as R}from"./member.b0fca5c5.js";import"./Form.f6e73dd6.js";import"./hasIn.958b80f9.js";import"./popupNotifcation.1c8d50aa.js";import"./index.cf4c23b9.js";import"./record.a100d067.js";import"./pubsub.782b9d46.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="b43ecbcf-b5d9-475b-8501-c22688c82ac1",t._sentryDebugIdIdentifier="sentry-dbid-b43ecbcf-b5d9-475b-8501-c22688c82ac1")}catch{}})();const V=t=>(A("data-v-06bca615"),t=t(),T(),t),E={class:"auth-info"},N={class:"auth-header"},U={class:"auth-label"},F={class:"description"},W=["onKeyup"],O={key:0,class:"span-error"},j=V(()=>o("div",{class:"spacer"},null,-1)),G=y({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(t,{emit:n}){const e=b({email:""}),s=()=>{n("sendAuthInfo",e)};return(l,_)=>(c(),d("div",E,[o("div",N,[o("div",U,i(t.header),1),o("div",F,i(a(r).translate("i18n_auth_info_description")),1)]),I(o("input",{"onUpdate:modelValue":_[0]||(_[0]=u=>e.email=u),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:x(s,["enter"])},null,40,W),[[$,e.email]]),t.invalid?(c(),d("span",O,i(a(r).translate("i18n_auth_info_invalid_email")),1)):g("",!0),j,o("button",{class:"next-button",onClick:s},i(a(r).translate("i18n_auth_info_send_code")),1)]))}});const H=k(G,[["__scopeId","data-v-06bca615"]]),Z=t=>(A("data-v-9fec7fd3"),t=t(),T(),t),z={class:"auth-token"},J={class:"auth-label"},Q=["onKeyup"],X={key:0,class:"span-error"},Y={key:1,class:"span-error"},ee=Z(()=>o("div",{class:"spacer"},null,-1)),te={class:"button-icon",viewBox:"0 0 24 24"},oe=["d"],ne={class:"footer"},se=y({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(t,{emit:n}){const e=b({token:""}),s=()=>{n("restartAuth")},l=()=>{n("resendToken")},_=()=>{n("sendToken",e.token)};return(u,p)=>(c(),d("div",z,[o("div",J,i(a(r).translate("i18n_auth_token_label",{email:u.email})),1),I(o("input",{"onUpdate:modelValue":p[0]||(p[0]=h=>e.token=h),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:x(_,["enter"])},null,40,Q),[[$,e.token]]),u.expired?(c(),d("span",X,i(a(r).translate("i18n_auth_token_expired")),1)):g("",!0),u.invalid?(c(),d("span",Y,i(a(r).translate("i18n_auth_token_invalid")),1)):g("",!0),ee,o("button",{class:"next-button",onClick:_},i(a(r).translate("i18n_auth_token_verify_email")),1),o("button",{class:"secondary-button back",onClick:s},[(c(),d("svg",te,[o("path",{d:a(K)},null,8,oe)])),B(" "+i(a(r).translate("i18n_auth_token_try_again")),1)]),o("button",{class:"secondary-button back",onClick:l},i(a(r).translate("i18n_auth_token_resend_email")),1),o("div",ne,i(a(r).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const ae=k(se,[["__scopeId","data-v-9fec7fd3"]]),ie={key:0,class:"form"},re={class:"form-wrapper"},ce={class:"widget"},de={key:1,class:"form"},le={class:"form-wrapper"},_e={class:"widget"},ue={key:2,class:"form"},pe={class:"form-wrapper"},he={class:"loading"},fe=y({__name:"Passwordless",props:{header:{type:String,default:r.translate("i18n_auth_validate_your_email")}},emits:["done"],setup(t,{emit:n}){const e=b({stage:"collect-info",info:null,token:null,invalid:!1}),s=async p=>{e.info=p,e.stage="loading";const h=await v.authenticate(p.email);e.invalid=!!h,h?e.stage="collect-info":e.stage="collect-token"},l=async p=>{var h;if(!!((h=e.info)!=null&&h.email)){e.token=p,e.stage="loading";try{const f=await v.verify(e.info.email,e.token);if(!f)throw new Error("no user");n("done",f),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},_=()=>{e.info&&s(e.info)},u=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(p,h)=>{var f,w;return e.stage==="collect-info"?(c(),d("div",ie,[o("div",re,[o("div",ce,[m(H,{invalid:e.invalid,header:t.header,onSendAuthInfo:s},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(c(),d("div",de,[o("div",le,[o("div",_e,[m(ae,{invalid:e.invalid,email:(w=(f=e.info)==null?void 0:f.email)!=null?w:"",onSendToken:l,onResendToken:_,onRestartAuth:u},null,8,["invalid","email"])])])])):(c(),d("div",ue,[o("div",pe,[o("div",he,[m(S)])])]))}}});const me=k(fe,[["__scopeId","data-v-6b5a711a"]]),ve=async()=>{const t=await R.onboarding(),n=v.getAuthor();if(t.shouldBeOnboarded&&n){const e="https://onboarding.abstra.app/signup-form",s=new URLSearchParams({token:n.jwt,redirect:location.href}),l=e+"?"+s;window.location.replace(l)}},ye={key:0,class:"login"},ke={key:1,class:"loading"},ge=y({__name:"Login",setup(t){const n=D(),e=L();async function s(){await ve(),e.query.redirect?await n.push({path:e.query.redirect,query:{...e.query,redirect:e.query["prev-redirect"],"prev-redirect":void 0}}):n.push({name:"home"})}const l=C(()=>!v.getAuthor());return P(()=>{l.value||s()}),(_,u)=>l.value?(c(),d("div",ye,[m(M,{theme:"white","main-color":"#d14056","font-family":"sans-serif"},{default:q(()=>[m(me,{class:"passwordless",onDone:s})]),_:1})])):(c(),d("div",ke,[m(S)]))}});const qe=k(ge,[["__scopeId","data-v-a7a1a259"]]);export{qe as default};
//# sourceMappingURL=Login.9bdffc7f.js.map