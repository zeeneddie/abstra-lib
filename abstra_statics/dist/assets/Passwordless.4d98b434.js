import{d as b,eZ as i,H as k,G as w,b as l,ev as u,e as t,eD as _,u as r,c as T,aK as $,eW as P,f2 as S,ex as y,eE as B,eF as D,v as I,ar as E,o as K,f as m}from"./outputWidgets.7e6eb177.js";import{u as x,S as g}from"./index.53663aef.js";import{A as L}from"./index.01890b09.js";import{I as N}from"./icons.42e022b7.js";import{L as A}from"./CircularLoading.1961274b.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="05ab7d5b-b216-4461-a023-315db8d484ab",s._sentryDebugIdIdentifier="sentry-dbid-05ab7d5b-b216-4461-a023-315db8d484ab")}catch{}})();class V{async authenticate(a){try{const e=await fetch("/_auth/authenticate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:a})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(a,e){const d=await fetch("/_auth/verify",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:a,token:e})});if(!d.ok)return null;const h=await d.json();return x.saveJWT(h.jwt),x.getUser()}}const M=s=>(B("data-v-2f442942"),s=s(),D(),s),j={class:"auth-info"},O={class:"auth-header"},U={class:"auth-label"},J={key:1,class:"description"},R=["onKeyup"],W={key:0,class:"span-error"},F=M(()=>t("div",{class:"spacer"},null,-1)),G=b({__name:"AuthInfo",props:{invalid:{type:Boolean}},emits:["sendAuthInfo"],setup(s,{emit:a}){const e=s,d={description:i.translate("i18n_local_auth_info_description"),button:i.translate("i18n_local_auth_info_authenticate")},h={description:i.translate("i18n_auth_info_description"),button:i.translate("i18n_auth_info_send_code")},f=k(()=>{var o;return(o=g.instance)==null?void 0:o.isLocal}),p=k(()=>{var o;return(o=g.instance)!=null&&o.isLocal?d:h}),n=w({email:""}),c=()=>{a("sendAuthInfo",n)};return(o,v)=>(l(),u("div",j,[t("div",O,[t("div",U,_(r(i).translate("i18n_auth_validate_your_email")),1),f.value?(l(),T(r(L),{key:0,message:p.value.description,type:"warning","show-icon":"",style:{width:"100%","text-align":"left"}},null,8,["message"])):(l(),u("div",J,_(p.value.description),1))]),$(t("input",{"onUpdate:modelValue":v[0]||(v[0]=C=>n.email=C),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:S(c,["enter"])},null,40,R),[[P,n.email]]),e.invalid?(l(),u("span",W,_(r(i).translate("i18n_auth_info_invalid_email")),1)):y("",!0),F,t("button",{class:"next-button",onClick:c},_(p.value.button),1)]))}});const H=I(G,[["__scopeId","data-v-2f442942"]]),Z=s=>(B("data-v-d84261cc"),s=s(),D(),s),q={class:"auth-token"},z={class:"auth-label"},Q=["onKeyup"],X={key:1,class:"span-error"},Y={key:2,class:"span-error"},ee=Z(()=>t("div",{class:"spacer"},null,-1)),te={class:"button-icon",viewBox:"0 0 24 24"},se=["d"],ne={class:"footer"},oe=b({__name:"AuthToken",props:{email:{},invalid:{type:Boolean},expired:{type:Boolean}},emits:["sendToken","restartAuth","resendToken"],setup(s,{emit:a}){const e=k(()=>{var n;return(n=g.instance)==null?void 0:n.isLocal}),d=w({token:""}),h=()=>{a("restartAuth")},f=()=>{a("resendToken")},p=()=>{a("sendToken",d.token)};return(n,c)=>(l(),u("div",q,[t("div",z,_(r(i).translate("i18n_auth_token_label",{email:n.email})),1),e.value?(l(),T(r(L),{key:0,message:r(i).translate("i18n_auth_token_development_warning"),type:"warning","show-icon":"",style:{width:"100%","text-align":"left","margin-bottom":"20px"}},null,8,["message"])):y("",!0),$(t("input",{"onUpdate:modelValue":c[0]||(c[0]=o=>d.token=o),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:S(p,["enter"])},null,40,Q),[[P,d.token]]),n.expired?(l(),u("span",X,_(r(i).translate("i18n_auth_token_expired")),1)):y("",!0),n.invalid?(l(),u("span",Y,_(r(i).translate("i18n_auth_token_invalid")),1)):y("",!0),ee,t("button",{class:"next-button",onClick:p},_(r(i).translate("i18n_auth_token_verify_email")),1),t("button",{class:"secondary-button back",onClick:h},[(l(),u("svg",te,[t("path",{d:r(N)},null,8,se)])),E(" "+_(r(i).translate("i18n_auth_token_try_again")),1)]),t("button",{class:"secondary-button back",onClick:f},_(r(i).translate("i18n_auth_token_resend_email")),1),t("div",ne,_(r(i).translate("i18n_auth_token_footer_alternative_email")),1)]))}});const ae=I(oe,[["__scopeId","data-v-d84261cc"]]),ie={key:0,class:"form"},re={class:"form-wrapper"},le={class:"loading"},ce={key:1,class:"form"},de={class:"form-wrapper"},_e={class:"widget"},ue={key:2,class:"form"},pe={class:"form-wrapper"},he={class:"widget"},fe={key:3,class:"form"},ve={class:"form-wrapper"},me={class:"loading"},ye=b({__name:"Passwordless",emits:["done"],setup(s,{emit:a}){const e=w({stage:"collect-info",userProvider:null,invalid:!1,token:null,info:null});K(()=>{e.userProvider=new V});const d=async n=>{if(!e.userProvider)return;e.info=n,e.stage="loading";const c=await e.userProvider.authenticate(n.email);e.invalid=!!c,c?e.stage="collect-info":e.stage="collect-token"},h=async n=>{var c;if(!(!e.userProvider||!((c=e.info)!=null&&c.email))){e.token=n,e.stage="loading";try{const o=await e.userProvider.verify(e.info.email,e.token);if(!o)throw new Error("no user");a("done",o),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},f=()=>{e.info&&d(e.info)},p=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(n,c)=>{var o,v;return e.userProvider?e.stage==="collect-info"?(l(),u("div",ce,[t("div",de,[t("div",_e,[m(H,{invalid:e.invalid,onSendAuthInfo:d},null,8,["invalid"])])])])):e.stage==="collect-token"?(l(),u("div",ue,[t("div",pe,[t("div",he,[m(ae,{invalid:e.invalid,email:(v=(o=e.info)==null?void 0:o.email)!=null?v:"",onSendToken:h,onResendToken:f,onRestartAuth:p},null,8,["invalid","email"])])])])):(l(),u("div",fe,[t("div",ve,[t("div",me,[m(A)])])])):(l(),u("div",ie,[t("div",re,[t("div",le,[m(A)])])]))}}});const xe=I(ye,[["__scopeId","data-v-d468d037"]]);export{xe as P};
//# sourceMappingURL=Passwordless.4d98b434.js.map