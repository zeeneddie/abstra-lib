import{B as p,e as f,a as r,c as h}from"./Title.f9e3ac72.js";import{W as o,ad as T,f as g,R as l}from"./outputWidgets.300f3e96.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="c9e92789-08c0-4057-8f27-7b841774acc2",e._sentryDebugIdIdentifier="sentry-dbid-c9e92789-08c0-4057-8f27-7b841774acc2")}catch{}})();var w=globalThis&&globalThis.__rest||function(e,a){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(s[t[n]]=e[t[n]]);return s};const A=()=>l(o(o({},f()),{ellipsis:{type:Boolean,default:void 0}}),["component"]),i=(e,a)=>{let{slots:s,attrs:t}=a;const n=o(o({},e),t),{ellipsis:d,rel:m}=n,b=w(n,["ellipsis","rel"]);T();const u=o(o({},b),{rel:m===void 0&&b.target==="_blank"?"noopener noreferrer":m,ellipsis:!!d,component:"a"});return delete u.navigate,g(p,u,s)};i.displayName="ATypographyLink";i.inheritAttrs=!1;i.props=A();const P=i,O=()=>l(f(),["component"]),c=(e,a)=>{let{slots:s,attrs:t}=a;const n=o(o(o({},e),{component:"div"}),t);return g(p,n,s)};c.displayName="ATypographyParagraph";c.inheritAttrs=!1;c.props=O();const x=c,k=()=>o(o({},l(f(),["component"])),{ellipsis:{type:[Boolean,Object],default:void 0}}),y=(e,a)=>{let{slots:s,attrs:t}=a;const{ellipsis:n}=e;T();const d=o(o(o({},e),{ellipsis:n&&typeof n=="object"?l(n,["expandable","rows"]):n,component:"span"}),t);return g(p,d,s)};y.displayName="ATypographyText";y.inheritAttrs=!1;y.props=k();const _=y;r.Text=_;r.Title=h;r.Paragraph=x;r.Link=P;r.Base=p;r.install=function(e){return e.component(r.name,r),e.component(r.Text.displayName,_),e.component(r.Title.displayName,h),e.component(r.Paragraph.displayName,x),e.component(r.Link.displayName,P),e};export{x as A,P as L,_ as a};
//# sourceMappingURL=index.b12dda90.js.map
