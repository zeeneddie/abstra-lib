import{S as w,_ as h}from"./ActionButton.vue_vue_type_script_setup_true_lang.f359c885.js";import{W}from"./WidgetsFrame.1da70636.js";import{d as k,eB as B,r as I,b as r,c as a,w as P,ex as f,e as p,ev as u,eC as m,eO as q,bq as _,m as x,n as C,v as D}from"./outputWidgets.90a37dfb.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="69096304-a131-4503-9bf6-11cadac27924",o._sentryDebugIdIdentifier="sentry-dbid-69096304-a131-4503-9bf6-11cadac27924")}catch{}})();const S={class:"form"},A={class:"form-wrapper"},E={key:0,class:"buttons"},L=k({__name:"WidgetPreview",setup(o){const s=B(),i=I([]);function y(e){return x[e]||C[e]||null}function c(e){try{const t=JSON.parse(e);if(t.component=y(t.type),!t.component)throw new Error(`Widget ${t.type} not found`);return t.component?t:null}catch{return null}}function g(){const e=s.query.widget;return Array.isArray(e)?e.map(c).filter(Boolean):[c(e)]}function v(){return s.query.steps==="true"}function d(){const e=s.query.button;return e?Array.isArray(e)?e:[e]:[]}const l=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,t)=>(r(),a(W,{"main-color":"#d14056",class:"preview",theme:"#fbfbfb",runtime:"form","font-family":"Inter"},{default:P(()=>[v()?(r(),a(w,{key:0,"steps-info":{current:2,total:3}})):f("",!0),p("div",S,[p("div",A,[(r(!0),u(_,null,m(g(),(n,b)=>(r(),u("div",{key:b,class:"widget"},[(r(),a(q(n.component),{"user-props":n.userProps,value:n.userProps.value,errors:i.value},null,8,["user-props","value","errors"]))]))),128))]),d().length?(r(),u("div",E,[(r(!0),u(_,null,m(d(),n=>(r(),a(h,{key:n,"display-name":l(n).name,action:l(n)},null,8,["display-name","action"]))),128))])):f("",!0)])]),_:1}))}});const O=D(L,[["__scopeId","data-v-ef293d5b"]]);export{O as default};
//# sourceMappingURL=WidgetPreview.58adcc86.js.map