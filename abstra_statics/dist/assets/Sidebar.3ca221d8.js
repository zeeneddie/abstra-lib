import{d as C,r as h,H as T,b as o,ev as g,dp as A,e as m,eD as w,ew as M,v as N,eA as O,eB as V,c as i,w as l,eC as k,u as c,cx as z,ar as x,a$ as I,bu as E,ez as B,f as S,I as D,ex as y,bw as R}from"./outputWidgets.0a8e4948.js";import{O as q}from"./icons.b13f0b09.js";import{A as $}from"./index.e5d762a8.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="73ea5300-df5a-4771-908e-42e2bd37e439",s._sentryDebugIdIdentifier="sentry-dbid-73ea5300-df5a-4771-908e-42e2bd37e439")}catch{}})();const F={class:"text"},G=C({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(s){const t=s,d=h(Date.now()),f=()=>{d.value=Date.now()},u=h(null),_=()=>{var r,e,v;const a=(r=u.value)==null?void 0:r.getBoundingClientRect();if(!a)return{};const{x:n,y:p}=a;return d.value,{position:"fixed",top:`${p+((e=t.top)!=null?e:0)}px`,left:`${n+((v=t.left)!=null?v:0)}px`}},b=T(()=>{var a;return t.fixed?_():{left:`${(a=t.left)!=null?a:-14}px`,...t.top?{top:`${t.top}px`}:{}}});return(a,n)=>(o(),g("div",{ref_key:"tooltipBox",ref:u,class:"tooltip-box",onMouseenter:f},[A(a.$slots,"default",{},void 0,!0),m("div",{class:"tooltip",style:M(b.value)},[m("span",F,w(s.text),1)],4)],544))}});const H=N(G,[["__scopeId","data-v-c3a6ca5e"]]),L={style:{"margin-right":"5px"}},P=C({__name:"Sidebar",props:{sections:{}},setup(s){var a;const t=s,d=O(),f=V(),u=h((a=f.name)!=null?a:"forms"),_=T(()=>t.sections.map(n=>({...n,items:n.items.filter(p=>!p.unavailable)}))),b=n=>{n.unavailable||(d.push(n.path),u.value=n.path)};return(n,p)=>(o(),i(c(R),null,{default:l(()=>[(o(!0),g(I,null,k(_.value,r=>(o(),i(c(z),{key:r.name},{title:l(()=>[x(w(r.name),1)]),default:l(()=>[(o(!0),g(I,null,k(r.items,e=>(o(),i(c(E),{key:e.name,role:"button",class:B({"menu-item":!0,active:u.value===e.path,disabled:e.unavailable||r.cloud}),tabindex:"0",onClick:v=>b(e)},{icon:l(()=>[S(D,{class:B({disabled:e.unavailable,active:u.value===e.path}),path:e.icon,width:"20",height:"20"},null,8,["class","path"])]),default:l(()=>[m("span",L,w(e.name),1),e.unavailable?(o(),i(c($),{key:0},{default:l(()=>[x("SOON")]),_:1})):y("",!0),e.beta?(o(),i(c($),{key:1},{default:l(()=>[x("BETA")]),_:1})):y("",!0),e.warning?(o(),i(H,{key:2,text:e.warning,fixed:!0,top:18,left:18},{default:l(()=>[S(D,{path:c(q),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):y("",!0)]),_:2},1032,["class","onClick"]))),128))]),_:2},1024))),128))]),_:1}))}});const Q=N(P,[["__scopeId","data-v-38667610"]]);export{Q as S};
//# sourceMappingURL=Sidebar.3ca221d8.js.map
