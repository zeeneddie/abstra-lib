import{f as o,eG as u,d as p,b,c as y,w as r,u as i,ar as s,bG as d,m,cA as g}from"./outputWidgets.ef5495da.js";import{A as v}from"./Text.bea7b7ec.js";import{A as _}from"./index.4a2b5217.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="ccc6bd8f-829f-42e5-930c-f0f1c0f5962b",t._sentryDebugIdIdentifier="sentry-dbid-ccc6bd8f-829f-42e5-930c-f0f1c0f5962b")}catch{}})();var P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z"}}]},name:"play-circle",theme:"filled"};const w=P;function f(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable}))),a.forEach(function(l){C(t,l,n[l])})}return t}function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(e,n){var a=f({},e,n.attrs);return o(u,f({},a,{icon:w}),null)};c.displayName="PlayCircleFilled";c.inheritAttrs=!1;const h=c,F=p({__name:"RunButton",props:{loading:{type:Boolean},disabled:{type:Boolean}},emits:["click","save"],setup(t,{emit:e}){return(n,a)=>(b(),y(i(g),{visible:n.disabled?void 0:!1,placement:"bottom"},{content:r(()=>[o(i(_),{vertical:"",gap:"small"},{default:r(()=>[o(i(v),null,{default:r(()=>[s("You have unsaved changes")]),_:1}),o(i(d),{onClick:a[0]||(a[0]=l=>e("save"))},{default:r(()=>[s("Save")]),_:1})]),_:1})]),default:r(()=>[o(i(d),{style:{width:"100%"},loading:n.loading,icon:m(i(h)),disabled:n.disabled,size:"large",type:"primary",onClick:a[1]||(a[1]=l=>e("click"))},{default:r(()=>[s(" Run ")]),_:1},8,["loading","icon","disabled"])]),_:1},8,["visible"]))}});export{F as _};
//# sourceMappingURL=RunButton.vue_vue_type_script_setup_true_lang.d995a423.js.map
