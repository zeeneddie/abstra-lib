import{d as y,r as i,G as x,b as g,eu as v,dh as b,e as p,eD as m,ev as D,t as w}from"./outputWidgets.10d5b7b3.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="c193ddc5-5ea1-40c6-8785-5325d0971525",t._sentryDebugIdIdentifier="sentry-dbid-c193ddc5-5ea1-40c6-8785-5325d0971525")}catch{}})();const B={class:"text"},h=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=i(Date.now()),c=()=>{s.value=Date.now()},n=i(null),u=()=>{var a,l,d;const o=(a=n.value)==null?void 0:a.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${r+((d=e.left)!=null?d:0)}px`}},f=x(()=>{var o;return e.fixed?u():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(g(),v("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:c},[b(o.$slots,"default",{},void 0,!0),p("div",{class:"tooltip",style:D(f.value)},[p("span",B,m(t.text),1)],4)],544))}});const I=w(h,[["__scopeId","data-v-74636348"]]);export{I as T};
//# sourceMappingURL=Tooltip.06969085.js.map
