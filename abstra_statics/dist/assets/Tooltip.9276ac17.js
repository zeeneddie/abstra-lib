import{d as y,r as d,F as x,b as g,c as b,c2 as v,er as i,eA as m,et as w,t as B}from"./registerWidgets.35e57f84.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1c1f08d1-cac0-4c9d-8a5e-f638de3fc777",t._sentryDebugIdIdentifier="sentry-dbid-1c1f08d1-cac0-4c9d-8a5e-f638de3fc777")}catch{}})();const D={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=d(Date.now()),p=()=>{s.value=Date.now()},n=d(null),f=()=>{var a,c,l;const o=(a=n.value)==null?void 0:a.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((c=e.top)!=null?c:0)}px`,left:`${r+((l=e.left)!=null?l:0)}px`}},u=x(()=>{var o;return e.fixed?f():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(g(),b("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:p},[v(o.$slots,"default",{},void 0,!0),i("div",{class:"tooltip",style:w(u.value)},[i("span",D,m(t.text),1)],4)],544))}});const h=B(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.9276ac17.js.map
