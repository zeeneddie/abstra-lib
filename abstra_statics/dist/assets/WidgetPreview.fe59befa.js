import{_ as k}from"./ActionButton.vue_vue_type_script_setup_true_lang.e2b7aceb.js";import{S as W}from"./Steps.224fdd6f.js";import{W as B}from"./WidgetsFrame.0c0e8621.js";import{d as D,J as I,r as d,b as t,t as o,w as q,D as f,x as p,c as u,L as _,$ as x,F as m,l as S,m as A,q as C}from"./registerWidgets.7afd6438.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[r]="f3668d05-79af-4e0a-8ed2-46b8a4bf3e06",s._sentryDebugIdIdentifier="sentry-dbid-f3668d05-79af-4e0a-8ed2-46b8a4bf3e06")}catch{}})();const L={class:"form"},P={class:"form-wrapper"},F={key:0,class:"buttons"},V=D({__name:"WidgetPreview",setup(s){const r=I(),i=d(null),y=d([]);function g(e){return S[e]||A[e]||null}function c(e){try{const n=JSON.parse(e);return n.component=g(n.type),n.component?n:null}catch{return null}}function v(){const e=r.query.widget;return Array.isArray(e)?e.map(c).filter(Boolean):[c(e)]}function b(){return r.query.steps==="true"}function l(){const e=r.query.button;return e?Array.isArray(e)?e:[e]:[]}const w=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,n)=>(t(),o(B,{"main-color":"#d14056",class:"preview",theme:"#fbfbfb",runtime:"dash","font-family":"Inter"},{default:q(()=>[b()?(t(),o(W,{key:0,"steps-info":{current:2,total:3}})):f("",!0),p("div",L,[p("div",P,[(t(!0),u(m,null,_(v(),(a,h)=>(t(),u("div",{key:h,class:"widget"},[(t(),o(x(a.component),{data:a.props,value:i.value,errors:y.value},null,8,["data","value","errors"]))]))),128))]),l().length?(t(),u("div",F,[(t(!0),u(m,null,_(l(),a=>(t(),o(k,{key:a,action:w(a)},null,8,["action"]))),128))])):f("",!0)])]),_:1}))}});const $=C(V,[["__scopeId","data-v-a38433ac"]]);export{$ as default};
//# sourceMappingURL=WidgetPreview.fe59befa.js.map
