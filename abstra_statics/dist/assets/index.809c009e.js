import{B as p,l as f,a as r,c as h}from"./Title.aac0de3b.js";import{U as o,ab as T,f as g,Q as l}from"./registerWidgets.dc9f1313.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="4542e8da-7839-4c59-95cd-16ca5ee74f1e",e._sentryDebugIdIdentifier="sentry-dbid-4542e8da-7839-4c59-95cd-16ca5ee74f1e")}catch{}})();var w=globalThis&&globalThis.__rest||function(e,a){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(s[t[n]]=e[t[n]]);return s};const A=()=>l(o(o({},f()),{ellipsis:{type:Boolean,default:void 0}}),["component"]),i=(e,a)=>{let{slots:s,attrs:t}=a;const n=o(o({},e),t),{ellipsis:y,rel:m}=n,u=w(n,["ellipsis","rel"]);T();const b=o(o({},u),{rel:m===void 0&&u.target==="_blank"?"noopener noreferrer":m,ellipsis:!!y,component:"a"});return delete b.navigate,g(p,b,s)};i.displayName="ATypographyLink";i.inheritAttrs=!1;i.props=A();const P=i,O=()=>l(f(),["component"]),c=(e,a)=>{let{slots:s,attrs:t}=a;const n=o(o(o({},e),{component:"div"}),t);return g(p,n,s)};c.displayName="ATypographyParagraph";c.inheritAttrs=!1;c.props=O();const x=c,k=()=>o(o({},l(f(),["component"])),{ellipsis:{type:[Boolean,Object],default:void 0}}),d=(e,a)=>{let{slots:s,attrs:t}=a;const{ellipsis:n}=e;T();const y=o(o(o({},e),{ellipsis:n&&typeof n=="object"?l(n,["expandable","rows"]):n,component:"span"}),t);return g(p,y,s)};d.displayName="ATypographyText";d.inheritAttrs=!1;d.props=k();const _=d;r.Text=_;r.Title=h;r.Paragraph=x;r.Link=P;r.Base=p;r.install=function(e){return e.component(r.name,r),e.component(r.Text.displayName,_),e.component(r.Title.displayName,h),e.component(r.Paragraph.displayName,x),e.component(r.Link.displayName,P),e};export{x as A,P as L,_ as a};
//# sourceMappingURL=index.809c009e.js.map