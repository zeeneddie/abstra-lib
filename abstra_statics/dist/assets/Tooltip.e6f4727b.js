import{d as y,r as p,K as x,b as g,c as b,B as m,x as d,N as v,A as B,z as w,q as D}from"./registerWidgets.553de467.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1864d53e-5517-457a-93a7-28466304c90c",t._sentryDebugIdIdentifier="sentry-dbid-1864d53e-5517-457a-93a7-28466304c90c")}catch{}})();const k={class:"text"},I=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=p(Date.now()),c=()=>{s.value=Date.now()},n=p(null),f=()=>{var a,l,i;const o=(a=n.value)==null?void 0:a.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${r+((i=e.left)!=null?i:0)}px`}},u=x(()=>{var o;return e.fixed?f():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(g(),b("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:c},[m(o.$slots,"default",{},void 0,!0),d("div",{class:"tooltip",style:B(w(u))},[d("span",k,v(t.text),1)],4)],544))}});const $=D(I,[["__scopeId","data-v-74636348"]]);export{$ as T};
//# sourceMappingURL=Tooltip.e6f4727b.js.map