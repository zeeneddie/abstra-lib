import{_ as w}from"./ActionButton.vue_vue_type_script_setup_true_lang.ae7130c6.js";import{W as v,S as h}from"./WidgetsFrame.744aec31.js";import{d as k,b as t,t as a,w as W,J as I,D as f,x as l,c as u,L as p,a6 as B,F as _,an as D,l as q,m as x,q as S}from"./registerWidgets.5bbfbb1a.js";import"./colors.71cbc60b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="ed9b07d4-b212-4472-a973-0b8afcb62ec8",o._sentryDebugIdIdentifier="sentry-dbid-ed9b07d4-b212-4472-a973-0b8afcb62ec8")}catch{}})();const A={class:"form"},C={class:"form-wrapper"},L={key:0,class:"buttons"},P=k({__name:"WidgetPreview",setup(o){const s=I();function i(e){return q[e]||x[e]||null}function c(e){try{const n=JSON.parse(e);return n.component=i(n.type),n.response=new D,n.component?n:null}catch{return null}}function m(){const e=s.query.widget;return Array.isArray(e)?e.map(c).filter(Boolean):[c(e)]}function y(){return s.query.steps==="true"}function d(){const e=s.query.button;return e?Array.isArray(e)?e:[e]:[]}const g=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,n)=>(t(),a(v,{"main-color":"#d14056",class:"preview",theme:"#fbfbfb",runtime:"dash","font-family":"Inter"},{default:W(()=>[y()?(t(),a(h,{key:0,"steps-info":{current:2,total:3}})):f("",!0),l("div",A,[l("div",C,[(t(!0),u(_,null,p(m(),(r,b)=>(t(),u("div",{key:b,class:"widget"},[(t(),a(B(r.component),{data:r.props,response:r.response},null,8,["data","response"]))]))),128))]),d().length?(t(),u("div",L,[(t(!0),u(_,null,p(d(),r=>(t(),a(w,{key:r,action:g(r)},null,8,["action"]))),128))])):f("",!0)])]),_:1}))}});const J=S(P,[["__scopeId","data-v-f3f8afa8"]]);export{J as default};
//# sourceMappingURL=WidgetPreview.0d5a545a.js.map
