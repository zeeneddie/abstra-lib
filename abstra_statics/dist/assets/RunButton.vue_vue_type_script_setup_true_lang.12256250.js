import{f as c,eF as s,d,b as u,c as f,w as p,az as y,l as g,u as i,bX as b}from"./outputWidgets.6d6b4a37.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="781a4504-3490-4596-9ee5-a8a300d3322a",t._sentryDebugIdIdentifier="sentry-dbid-781a4504-3490-4596-9ee5-a8a300d3322a")}catch{}})();var m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z"}}]},name:"play-circle",theme:"filled"};const _=m;function o(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){v(t,a,n[a])})}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(e,n){var r=o({},e,n.attrs);return c(s,o({},r,{icon:_}),null)};l.displayName="PlayCircleFilled";l.inheritAttrs=!1;const w=l,C=d({__name:"RunButton",props:{loading:{type:Boolean}},emits:["click"],setup(t,{emit:e}){return(n,r)=>(u(),f(i(b),{style:{width:"100%"},loading:n.loading,icon:g(i(w)),size:"large",type:"primary",onClick:r[0]||(r[0]=a=>e("click"))},{default:p(()=>[y(" Run ")]),_:1},8,["loading","icon"]))}});export{C as _};
//# sourceMappingURL=RunButton.vue_vue_type_script_setup_true_lang.12256250.js.map