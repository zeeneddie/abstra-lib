import{f as o,eG as f,d as b,b as p,c as y,w as r,u as i,ar as s,bG as c,m,cA as g}from"./outputWidgets.cb403911.js";import{A as v}from"./Text.685c8d87.js";import{A as _}from"./index.ee47e378.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="ce00489b-6aa5-4809-8525-ac735db94b00",t._sentryDebugIdIdentifier="sentry-dbid-ce00489b-6aa5-4809-8525-ac735db94b00")}catch{}})();var P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z"}}]},name:"play-circle",theme:"filled"};const w=P;function u(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),n.forEach(function(l){C(t,l,a[l])})}return t}function C(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d=function(e,a){var n=u({},e,a.attrs);return o(f,u({},n,{icon:w}),null)};d.displayName="PlayCircleFilled";d.inheritAttrs=!1;const h=d,F=b({__name:"RunButton",props:{loading:{type:Boolean},disabled:{type:Boolean}},emits:["click","save"],setup(t,{emit:e}){return(a,n)=>(p(),y(i(g),{visible:a.disabled?void 0:!1,placement:"bottom"},{content:r(()=>[o(i(_),{vertical:"",gap:"small"},{default:r(()=>[o(i(v),null,{default:r(()=>[s("You have unsaved changes")]),_:1}),o(i(c),{onClick:n[0]||(n[0]=l=>e("save"))},{default:r(()=>[s("Save")]),_:1})]),_:1})]),default:r(()=>[o(i(c),{style:{width:"100%"},loading:a.loading,icon:m(i(h)),disabled:a.disabled,size:"large",type:"primary",onClick:n[1]||(n[1]=l=>e("click"))},{default:r(()=>[s(" Run ")]),_:1},8,["loading","icon","disabled"])]),_:1},8,["visible"]))}});export{F as _};
//# sourceMappingURL=RunButton.vue_vue_type_script_setup_true_lang.43a655fa.js.map
