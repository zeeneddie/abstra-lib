import{d as C,r as h,H as T,b as o,ev as g,dp as A,e as m,eD as w,ew as M,v as N,eA as V,eB as z,c,w as l,eC as k,u as d,cx as E,ar as y,a$ as I,bu as O,ez as B,f as S,I as D,ex as b,bw as R}from"./outputWidgets.bb2f46e4.js";import{J as q}from"./icons.94ad51fe.js";import{A as $}from"./index.38894597.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="7dff1e66-0829-4df1-848c-3e80da100d51",s._sentryDebugIdIdentifier="sentry-dbid-7dff1e66-0829-4df1-848c-3e80da100d51")}catch{}})();const F={class:"text"},G=C({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(s){const t=s,i=h(Date.now()),f=()=>{i.value=Date.now()},u=h(null),_=()=>{var r,e,x;const a=(r=u.value)==null?void 0:r.getBoundingClientRect();if(!a)return{};const{x:n,y:p}=a;return i.value,{position:"fixed",top:`${p+((e=t.top)!=null?e:0)}px`,left:`${n+((x=t.left)!=null?x:0)}px`}},v=T(()=>{var a;return t.fixed?_():{left:`${(a=t.left)!=null?a:-14}px`,...t.top?{top:`${t.top}px`}:{}}});return(a,n)=>(o(),g("div",{ref_key:"tooltipBox",ref:u,class:"tooltip-box",onMouseenter:f},[A(a.$slots,"default",{},void 0,!0),m("div",{class:"tooltip",style:M(v.value)},[m("span",F,w(s.text),1)],4)],544))}});const H=N(G,[["__scopeId","data-v-c3a6ca5e"]]),J={style:{"margin-right":"5px"}},L=C({__name:"Sidebar",props:{sections:{}},setup(s){var a;const t=s,i=V(),f=z(),u=h((a=f.name)!=null?a:"forms"),_=T(()=>t.sections.map(n=>({...n,items:n.items.filter(p=>!p.unavailable)}))),v=n=>{n.unavailable||(i.push(n.path),u.value=n.path)};return(n,p)=>(o(),c(d(R),null,{default:l(()=>[(o(!0),g(I,null,k(_.value,r=>(o(),c(d(E),{key:r.name},{title:l(()=>[y(w(r.name),1)]),default:l(()=>[(o(!0),g(I,null,k(r.items,e=>(o(),c(d(O),{key:e.name,role:"button",class:B({"menu-item":!0,active:u.value===e.path,disabled:e.unavailable||r.cloud}),tabindex:"0",onClick:x=>v(e)},{icon:l(()=>[S(D,{class:B({disabled:e.unavailable,active:u.value===e.path}),path:e.icon,width:"20",height:"20"},null,8,["class","path"])]),default:l(()=>[m("span",J,w(e.name),1),e.unavailable?(o(),c(d($),{key:0},{default:l(()=>[y("SOON")]),_:1})):b("",!0),e.beta?(o(),c(d($),{key:1},{default:l(()=>[y("BETA")]),_:1})):b("",!0),e.warning?(o(),c(H,{key:2,text:e.warning,fixed:!0,top:18,left:18},{default:l(()=>[S(D,{path:d(q),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):b("",!0)]),_:2},1032,["class","onClick"]))),128))]),_:2},1024))),128))]),_:1}))}});const Q=N(L,[["__scopeId","data-v-38667610"]]);export{Q as S};
//# sourceMappingURL=Sidebar.684db26d.js.map