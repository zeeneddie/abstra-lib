import{S as b,_ as h}from"./ActionButton.vue_vue_type_script_setup_true_lang.3e64c25f.js";import{W}from"./WidgetsFrame.cec3cfa1.js";import{d as k,eB as B,r as I,b as r,c as a,w as P,ew as f,e as p,eu as u,eC as m,eK as C,a_ as _,m as D,n as S,t as q}from"./outputWidgets.73d3a989.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="df099ec8-387b-4192-b49c-38526560ea87",o._sentryDebugIdIdentifier="sentry-dbid-df099ec8-387b-4192-b49c-38526560ea87")}catch{}})();const x={class:"form"},A={class:"form-wrapper"},E={key:0,class:"buttons"},L=k({__name:"WidgetPreview",setup(o){const s=B(),i=I([]);function y(e){return D[e]||S[e]||null}function c(e){try{const t=JSON.parse(e);if(t.component=y(t.type),!t.component)throw new Error(`Widget ${t.type} not found`);return t.component?t:null}catch(t){return console.error(t),null}}function g(){const e=s.query.widget;return Array.isArray(e)?e.map(c).filter(Boolean):[c(e)]}function v(){return s.query.steps==="true"}function d(){const e=s.query.button;return e?Array.isArray(e)?e:[e]:[]}const l=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,t)=>(r(),a(W,{"main-color":"#d14056",class:"preview",theme:"#fbfbfb",runtime:"form","font-family":"Inter"},{default:P(()=>[v()?(r(),a(b,{key:0,"steps-info":{current:2,total:3}})):f("",!0),p("div",x,[p("div",A,[(r(!0),u(_,null,m(g(),(n,w)=>(r(),u("div",{key:w,class:"widget"},[(r(),a(C(n.component),{"user-props":n.userProps,value:n.userProps.value,errors:i.value},null,8,["user-props","value","errors"]))]))),128))]),d().length?(r(),u("div",E,[(r(!0),u(_,null,m(d(),n=>(r(),a(h,{key:n,"display-name":l(n).name,action:l(n)},null,8,["display-name","action"]))),128))])):f("",!0)])]),_:1}))}});const K=q(L,[["__scopeId","data-v-fad72749"]]);export{K as default};
//# sourceMappingURL=WidgetPreview.75ee93d3.js.map
