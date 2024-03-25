import{I as N}from"./router.1fa38c42.js";import{d as A,H as C,b as o,c as u,w as n,f as h,ar as _,eD as m,u as i,bG as I,ex as y,r as x,ev as k,dm as O,e as w,ew as V,v as $,eA as z,eB as E,eC as B,cw as L,aD as M,bf as R,ez as T,I as D,bh as G}from"./outputWidgets.7e6eb177.js";import{A as H}from"./Text.497ac05f.js";import{A as q}from"./index.01890b09.js";import{O as F}from"./icons.42e022b7.js";import{A as S}from"./index.a964b97b.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[s]="318ed9bd-199f-4058-9b21-83e2aa819f6a",l._sentryDebugIdIdentifier="sentry-dbid-318ed9bd-199f-4058-9b21-83e2aa819f6a")}catch{}})();const te=A({__name:"BillingAlert",props:{billingMetadata:{}},setup(l){const s=l,c=C(()=>{var a,d;return(d=(a=s.billingMetadata)==null?void 0:a.messageCTA)!=null?d:"Contact Us"}),b=()=>N.showNewMessage("Help me with my plan");return(a,d)=>{var f;return(f=a.billingMetadata)!=null&&f.message?(o(),u(i(q),{key:0,type:"error"},{message:n(()=>[h(i(H),{type:"secondary"},{default:n(()=>{var e;return[_(m((e=a.billingMetadata)==null?void 0:e.message),1)]}),_:1})]),action:n(()=>{var e;return[(e=a.billingMetadata)!=null&&e.messageLink?(o(),u(i(I),{key:0,type:"primary",target:"_blank",href:a.billingMetadata.messageLink},{default:n(()=>[_(m(c.value),1)]),_:1},8,["href"])):(o(),u(i(I),{key:1,type:"primary",onClick:b},{default:n(()=>[_(m(c.value),1)]),_:1}))]}),_:1})):y("",!0)}}}),P={class:"text"},U=A({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(l){const s=l,c=x(Date.now()),b=()=>{c.value=Date.now()},a=x(null),d=()=>{var p,t,v;const e=(p=a.value)==null?void 0:p.getBoundingClientRect();if(!e)return{};const{x:r,y:g}=e;return c.value,{position:"fixed",top:`${g+((t=s.top)!=null?t:0)}px`,left:`${r+((v=s.left)!=null?v:0)}px`}},f=C(()=>{var e;return s.fixed?d():{left:`${(e=s.left)!=null?e:-14}px`,...s.top?{top:`${s.top}px`}:{}}});return(e,r)=>(o(),k("div",{ref_key:"tooltipBox",ref:a,class:"tooltip-box",onMouseenter:b},[O(e.$slots,"default",{},void 0,!0),w("div",{class:"tooltip",style:V(f.value)},[w("span",P,m(l.text),1)],4)],544))}});const j=$(U,[["__scopeId","data-v-c3a6ca5e"]]),J={style:{"margin-right":"5px"}},K=A({__name:"Sidebar",props:{sections:{}},setup(l){var e;const s=l,c=z(),b=E(),a=x((e=b.name)!=null?e:"forms"),d=C(()=>s.sections.map(r=>({...r,items:r.items.filter(g=>!g.unavailable)}))),f=r=>{r.unavailable||(c.push(r.path),a.value=r.path)};return(r,g)=>(o(),u(i(G),null,{default:n(()=>[(o(!0),k(M,null,B(d.value,p=>(o(),u(i(L),{key:p.name},{title:n(()=>[_(m(p.name),1)]),default:n(()=>[(o(!0),k(M,null,B(p.items,t=>(o(),u(i(R),{key:t.name,role:"button",class:T({"menu-item":!0,active:a.value===t.path,disabled:t.unavailable||p.cloud}),tabindex:"0",onClick:v=>f(t)},{icon:n(()=>[h(D,{class:T({disabled:t.unavailable,active:a.value===t.path}),path:t.icon,width:"20",height:"20"},null,8,["class","path"])]),default:n(()=>[w("span",J,m(t.name),1),t.unavailable?(o(),u(i(S),{key:0},{default:n(()=>[_("SOON")]),_:1})):y("",!0),t.beta?(o(),u(i(S),{key:1},{default:n(()=>[_("BETA")]),_:1})):y("",!0),t.warning?(o(),u(j,{key:2,text:t.warning,fixed:!0,top:18,left:18},{default:n(()=>[h(D,{path:i(F),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):y("",!0)]),_:2},1032,["class","onClick"]))),128))]),_:2},1024))),128))]),_:1}))}});const ae=$(K,[["__scopeId","data-v-38667610"]]);export{ae as S,te as _};
//# sourceMappingURL=Sidebar.c0ad33ee.js.map
