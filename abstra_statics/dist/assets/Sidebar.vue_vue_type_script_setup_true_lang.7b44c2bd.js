import{d as N,r as h,G as $,b as a,ev as v,dp as A,e as g,eD as k,ew as S,v as M,eA as O,eB as V,c as u,w as n,eC as B,u as d,cu as q,aq as _,bq as D,bf as z,ez as I,f as C,I as T,ex as b,bh as E}from"./outputWidgets.4dca5506.js";import{G}from"./icons.bd47d131.js";import{A as x}from"./index.7d0729b5.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="73434631-d8fd-495e-a1af-d3c32d78b89a",o._sentryDebugIdIdentifier="sentry-dbid-73434631-d8fd-495e-a1af-d3c32d78b89a")}catch{}})();const R={class:"text"},L=N({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(o){const t=o,c=h(Date.now()),i=()=>{c.value=Date.now()},p=h(null),f=()=>{var y,m,w;const s=(y=p.value)==null?void 0:y.getBoundingClientRect();if(!s)return{};const{x:r,y:e}=s;return c.value,{position:"fixed",top:`${e+((m=t.top)!=null?m:0)}px`,left:`${r+((w=t.left)!=null?w:0)}px`}},l=$(()=>{var s;return t.fixed?f():{left:`${(s=t.left)!=null?s:-14}px`,...t.top?{top:`${t.top}px`}:{}}});return(s,r)=>(a(),v("div",{ref_key:"tooltipBox",ref:p,class:"tooltip-box",onMouseenter:i},[A(s.$slots,"default",{},void 0,!0),g("div",{class:"tooltip",style:S(l.value)},[g("span",R,k(o.text),1)],4)],544))}});const F=M(L,[["__scopeId","data-v-c3a6ca5e"]]),H=N({__name:"Sidebar",props:{sections:{}},setup(o){var f;const t=O(),c=V(),i=h((f=c.name)!=null?f:"forms"),p=l=>{l.unavailable||(t.push(l.path),i.value=l.path)};return(l,s)=>(a(),u(d(E),null,{default:n(()=>[(a(!0),v(D,null,B(l.sections,r=>(a(),u(d(q),{key:r.name},{title:n(()=>[_(k(r.name),1)]),default:n(()=>[(a(!0),v(D,null,B(r.items,e=>(a(),u(d(z),{key:e.name,role:"button",class:I({active:i.value===e.path,disabled:e.unavailable||r.cloud}),tabindex:"0",onClick:y=>p(e)},{icon:n(()=>[C(T,{class:I({disabled:e.unavailable,active:i.value===e.path}),path:e.icon,width:"20",height:"20"},null,8,["class","path"])]),default:n(()=>[g("span",null,k(e.name),1),e.unavailable?(a(),u(d(x),{key:0},{default:n(()=>[_("SOON")]),_:1})):b("",!0),e.beta?(a(),u(d(x),{key:1},{default:n(()=>[_("BETA")]),_:1})):b("",!0),e.cloud?(a(),u(d(x),{key:2},{default:n(()=>[_("CLOUD")]),_:1})):b("",!0),e.warning?(a(),u(F,{key:3,text:e.warning,fixed:!0,top:18,left:18},{default:n(()=>[C(T,{path:d(G),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):b("",!0)]),_:2},1032,["class","onClick"]))),128))]),_:2},1024))),128))]),_:1}))}});export{H as _};
//# sourceMappingURL=Sidebar.vue_vue_type_script_setup_true_lang.7b44c2bd.js.map
