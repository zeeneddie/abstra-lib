import{f as c,eG as s,d,b as f,c as u,w as p,aq as y,l as b,u as i,bO as g}from"./outputWidgets.d5b75ebe.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="52592477-947f-4aaa-aabc-3939ddaaaef9",t._sentryDebugIdIdentifier="sentry-dbid-52592477-947f-4aaa-aabc-3939ddaaaef9")}catch{}})();var m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z"}}]},name:"play-circle",theme:"filled"};const _=m;function o(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),n.forEach(function(r){v(t,r,a[r])})}return t}function v(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l=function(e,a){var n=o({},e,a.attrs);return c(s,o({},n,{icon:_}),null)};l.displayName="PlayCircleFilled";l.inheritAttrs=!1;const w=l,C=d({__name:"RunButton",props:{loading:{type:Boolean}},emits:["click"],setup(t,{emit:e}){return(a,n)=>(f(),u(i(g),{style:{width:"100%"},loading:a.loading,icon:b(i(w)),size:"large",type:"primary",onClick:n[0]||(n[0]=r=>e("click"))},{default:p(()=>[y(" Run ")]),_:1},8,["loading","icon"]))}});export{C as _};
//# sourceMappingURL=RunButton.vue_vue_type_script_setup_true_lang.1d30a7c9.js.map
