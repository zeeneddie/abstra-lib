import{L as S}from"./CircularLoading.45f7b299.js";import{d as f,v,b as n,c as a,x as t,N as b,W as g,Z as w,af as I,D as h,O as T,Q as $,q as y,z as V,U as B,e as p}from"./registerWidgets.cecc7add.js";import{t as C}from"./icons.a47594f6.js";import{p as k}from"./passwordlessManager.8b0c672e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="5a6451bb-3a16-4e35-9dcd-af4ea7905b84",o._sentryDebugIdIdentifier="sentry-dbid-5a6451bb-3a16-4e35-9dcd-af4ea7905b84")}catch{}})();const x=o=>(T("data-v-1b435c3a"),o=o(),$(),o),D={class:"auth-info"},E={class:"auth-header"},K={class:"auth-label"},N=x(()=>t("div",{class:"description"},"To continue we need you to authenticate",-1)),P=["onKeyup"],R={key:0,class:"span-error"},U=x(()=>t("div",{class:"spacer"},null,-1)),L=f({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(o,{emit:s}){const e=v({email:""}),c=()=>{s("sendAuthInfo",e)};return(u,l)=>(n(),a("div",D,[t("div",E,[t("div",K,b(o.header),1),N]),g(t("input",{"onUpdate:modelValue":l[0]||(l[0]=r=>e.email=r),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:I(c,["enter"])},null,40,P),[[w,e.email]]),o.invalid?(n(),a("span",R," Email invalid, please try again. ")):h("",!0),U,t("button",{class:"next-button",onClick:c}," Send a verification email ")]))}});const M=y(L,[["__scopeId","data-v-1b435c3a"]]),A=o=>(T("data-v-9316d802"),o=o(),$(),o),q={class:"auth-token"},z={class:"auth-label"},O=["onKeyup"],Q={key:0,class:"span-error"},W={key:1,class:"span-error"},Z=A(()=>t("div",{class:"spacer"},null,-1)),j={class:"button-icon",viewBox:"0 0 24 24"},F=["d"],G=A(()=>t("div",{class:"footer"}," If you haven't received the verification code, try again or choose another email ",-1)),H=f({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:{}},emits:["sendToken","restartAuth","resendToken"],setup(o,{emit:s}){const e=v({token:""}),c=()=>{s("restartAuth")},u=()=>{s("resendToken")},l=()=>{s("sendToken",e.token)};return(r,i)=>(n(),a("div",q,[t("div",z," Check "+b(r.email)+"'s inbox and enter your verification code below ",1),g(t("input",{"onUpdate:modelValue":i[0]||(i[0]=d=>e.token=d),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:I(l,["enter"])},null,40,O),[[w,e.token]]),r.expired?(n(),a("span",Q," Token expired, try to resend it. ")):h("",!0),r.invalid?(n(),a("span",W," Token invalid, please try again or go back and alter you email address. ")):h("",!0),Z,t("button",{class:"next-button",onClick:l},"Verify Email"),t("button",{class:"secondary-button back",onClick:c},[(n(),a("svg",j,[t("path",{d:V(C)},null,8,F)])),B(" Try Again ")]),t("button",{class:"secondary-button back",onClick:u}," Resend Email "),G]))}});const J=y(H,[["__scopeId","data-v-9316d802"]]),X={key:0,class:"form"},Y={class:"form-wrapper"},ee={class:"widget"},te={key:1,class:"form"},oe={class:"form-wrapper"},se={class:"widget"},ne={key:2,class:"form"},ae={class:"form-wrapper"},ie={class:"loading"},de=f({__name:"Passwordless",props:{header:{type:String,default:"Validate your email"}},emits:["done"],setup(o,{emit:s}){const e=v({stage:"collect-info",info:null,token:null,invalid:!1}),c=async i=>{e.info=i,e.stage="loading";const d=await k.authenticate(i.email);e.invalid=!!d,d?e.stage="collect-info":e.stage="collect-token"},u=async i=>{var d;if(!!((d=e.info)!=null&&d.email)){e.token=i,e.stage="loading";try{const _=await k.verify(e.info.email,e.token);if(!_)throw new Error("no user");s("done",_),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},l=()=>{e.info&&c(e.info)},r=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(i,d)=>{var _,m;return e.stage==="collect-info"?(n(),a("div",X,[t("div",Y,[t("div",ee,[p(M,{invalid:e.invalid,header:o.header,onSendAuthInfo:c},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(n(),a("div",te,[t("div",oe,[t("div",se,[p(J,{invalid:e.invalid,email:(m=(_=e.info)==null?void 0:_.email)!=null?m:"",onSendToken:u,onResendToken:l,onRestartAuth:r},null,8,["invalid","email"])])])])):(n(),a("div",ne,[t("div",ae,[t("div",ie,[p(S)])])]))}}});const ue=y(de,[["__scopeId","data-v-c7662bee"]]);export{ue as P};
//# sourceMappingURL=Passwordless.0943eeec.js.map