import{d as y,r as c,K as x,b,c as g,B as m,x as d,N as v,A as B,z as w,q as D}from"./registerWidgets.2bf05ebf.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1c3fd7b6-d1bc-4284-9425-55c4c267b342",t._sentryDebugIdIdentifier="sentry-dbid-1c3fd7b6-d1bc-4284-9425-55c4c267b342")}catch{}})();const k={class:"text"},I=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=c(Date.now()),p=()=>{s.value=Date.now()},n=c(null),f=()=>{var a,l,i;const o=(a=n.value)==null?void 0:a.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${r+((i=e.left)!=null?i:0)}px`}},u=x(()=>{var o;return e.fixed?f():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(b(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:p},[m(o.$slots,"default",{},void 0,!0),d("div",{class:"tooltip",style:B(w(u))},[d("span",k,v(t.text),1)],4)],544))}});const $=D(I,[["__scopeId","data-v-74636348"]]);export{$ as T};
//# sourceMappingURL=Tooltip.98630364.js.map