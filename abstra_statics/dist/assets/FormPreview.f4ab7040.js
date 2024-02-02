import{d as _,H as k,b as i,ev as d,e as a,eD as u,eE as $,eF as D,v as m,a as C,f as p,u as t,ar as q,eA as S,eB as A,G as L,r as N,c as M}from"./outputWidgets.f2dbcdfc.js";import{L as V}from"./CircularLoading.ca677d59.js";import{F as H,r as O,R as T}from"./FormRunner.cf29d10e.js";import{x as W}from"./icons.ac84ddf6.js";import{a as w}from"./asyncComputed.37132230.js";import{F as j}from"./forms.77eccfe6.js";import{W as G}from"./workspaces.1bcacb1f.js";import"./api.7f5dabf4.js";import"./runnerData.15c3b047.js";import"./url.978d277d.js";import"./Passwordless.f68808ed.js";import"./index.a57e7d56.js";import"./pubsub.d8506141.js";import"./PlayerNavbar.f3b51f00.js";import"./ActionButton.3509783f.js";import"./WidgetsFrame.04da177a.js";import"./index.0b37c2a5.js";import"./Base.e7a1d92f.js";import"./Link.7ebe42d5.js";import"./Paragraph.a4acc8de.js";import"./Text.e98aa09c.js";import"./Title.5cdc55b4.js";import"./Card.e4c20161.js";import"./TabPane.37e9c944.js";import"./hasIn.84ebe126.js";import"./record.50d91012.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="8f53bd9f-229c-432c-8648-6d2a1e146f61",e._sentryDebugIdIdentifier="sentry-dbid-8f53bd9f-229c-432c-8648-6d2a1e146f61")}catch{}})();const x=e=>($("data-v-3e46b76c"),e=e(),D(),e),U={class:"error"},z=x(()=>a("h1",{class:"error-header"},"Error",-1)),J={class:"error-body"},K={class:"error-message"},Q={class:"error-details"},X=x(()=>a("span",null,"Reload",-1)),Y=[X],Z=_({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:r}){const o=e,s=k(()=>o.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function c(){r("reload")}return(l,f)=>(i(),d("div",U,[z,a("div",J,[a("div",K,[a("p",null,u(s.value),1),a("p",Q,u(e.error.name)+": "+u(e.error.message),1)]),a("div",{class:"error-actions"},[a("button",{class:"btn btn-primary",onClick:c},Y)])])]))}});const ee=m(Z,[["__scopeId","data-v-3e46b76c"]]),re=_({__name:"BackButton",emits:["exitFullscreenPreview"],setup(e,{emit:r}){return(o,s)=>{const c=C("icon");return i(),d("button",{class:"back-btn",onClick:s[0]||(s[0]=l=>r("exitFullscreenPreview"))},[p(c,{class:"icon",path:t(W),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),q(" Editor ")])}}});const te=m(re,[["__scopeId","data-v-a3f31716"]]),oe={class:"page"},se={key:1,class:"error"},ae={key:2,style:{width:"100%",height:"100%",display:"flex"}},ne={style:{width:"100%",height:"100%",display:"flex"}},ie=_({__name:"FormPreview",setup(e){const r=S(),o=A(),s=L({started:!1});function c(n,g){O("preview",r,n,g)}const l=N(null),{loading:f,result:v,error:h,refetch:y}=w(()=>j.get(o.params.id)),{result:b}=w(()=>G.get()),B=k(()=>T.create(o.params.id)),I=async()=>{var n;if(!s.started){(n=l.value)==null||n.run();return}s.started=!1},F=async({id:n})=>{await r.push({params:{id:n},name:"formPreview",query:o.query}),y()},E=()=>{r.push(`/_editor/form/${encodeURIComponent(o.params.id)}`)},R=()=>{s.started=!0},P=()=>{s.started=!1};return(n,g)=>(i(),d("div",oe,[t(f)||!t(v)||!t(b)?(i(),M(V,{key:0})):t(h)?(i(),d("div",se,[p(ee,{error:t(h),onReload:t(y)},null,8,["error","onReload"])])):(i(),d("main",ae,[a("div",ne,[p(H,{ref_key:"runner",ref:l,form:t(v).makeRunnerData(t(b)),params:t(o).query,"is-preview":!0,"enable-auto-focus":!0,broker:B.value,style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:F,onLogout:I,onExit:P,onStart:R,onRedirect:c},null,8,["form","params","broker"]),p(te,{onExitFullscreenPreview:E})])]))]))}});const Se=m(ie,[["__scopeId","data-v-63264cab"]]);export{Se as default};
//# sourceMappingURL=FormPreview.f4ab7040.js.map