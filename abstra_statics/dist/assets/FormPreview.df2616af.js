import{d as _,G as k,b as c,ev as d,e as a,eD as u,eE as $,eF as D,v as m,a as q,f as p,u as t,aq as C,eA as S,eB as A,F as L,r as N,c as M}from"./outputWidgets.781e41f9.js";import{L as V}from"./CircularLoading.091d9b3b.js";import{F as O,r as T,R as W}from"./FormRunner.91c833a7.js";import{x as j}from"./icons.0ffc383b.js";import{a as w}from"./asyncComputed.d06d5356.js";import{F as G}from"./forms.78743071.js";import{W as H}from"./workspaces.3927864d.js";import"./url.a0d7eae0.js";import"./index.dbc12d17.js";import"./pubsub.2273fc34.js";import"./PlayerNavbar.a8bfaff8.js";import"./ActionButton.3612b79f.js";import"./WidgetsFrame.0130ea36.js";import"./index.b7e930e8.js";import"./Card.7e708e2a.js";import"./TabPane.6d00c211.js";import"./hasIn.205b6afa.js";import"./index.1ca3acf8.js";import"./Text.6168f33a.js";import"./Link.77931b3a.js";import"./Title.bf1f8106.js";import"./record.71f43d7d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="7f120a04-fcdd-4fbc-8812-dfbe67a12968",e._sentryDebugIdIdentifier="sentry-dbid-7f120a04-fcdd-4fbc-8812-dfbe67a12968")}catch{}})();const x=e=>($("data-v-3e46b76c"),e=e(),D(),e),U={class:"error"},z=x(()=>a("h1",{class:"error-header"},"Error",-1)),J={class:"error-body"},K={class:"error-message"},Q={class:"error-details"},X=x(()=>a("span",null,"Reload",-1)),Y=[X],Z=_({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:r}){const o=e,s=k(()=>o.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function i(){r("reload")}return(l,f)=>(c(),d("div",U,[z,a("div",J,[a("div",K,[a("p",null,u(s.value),1),a("p",Q,u(e.error.name)+": "+u(e.error.message),1)]),a("div",{class:"error-actions"},[a("button",{class:"btn btn-primary",onClick:i},Y)])])]))}});const ee=m(Z,[["__scopeId","data-v-3e46b76c"]]),re=_({__name:"BackButton",emits:["exitFullscreenPreview"],setup(e,{emit:r}){return(o,s)=>{const i=q("icon");return c(),d("button",{class:"back-btn",onClick:s[0]||(s[0]=l=>r("exitFullscreenPreview"))},[p(i,{class:"icon",path:t(j),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),C(" Editor ")])}}});const te=m(re,[["__scopeId","data-v-a3f31716"]]),oe={class:"page"},se={key:1,class:"error"},ae={key:2,style:{width:"100%",height:"100%",display:"flex"}},ne={style:{width:"100%",height:"100%",display:"flex"}},ce=_({__name:"FormPreview",setup(e){const r=S(),o=A(),s=L({started:!1});function i(n,g){T("preview",r,n,g)}const l=N(null),{loading:f,result:v,error:h,refetch:y}=w(()=>G.get(o.params.id)),{result:b}=w(()=>H.get()),B=k(()=>W.create(o.params.id)),F=async()=>{var n;if(!s.started){(n=l.value)==null||n.run();return}s.started=!1},I=({id:n})=>{r.push({params:{id:n},name:"formPreview",query:o.query}),y()},E=()=>{r.push(`/_editor/form/${encodeURIComponent(o.params.id)}`)},R=()=>{s.started=!0},P=()=>{s.started=!1};return(n,g)=>(c(),d("div",oe,[t(f)||!t(v)||!t(b)?(c(),M(V,{key:0})):t(h)?(c(),d("div",se,[p(ee,{error:t(h),onReload:t(y)},null,8,["error","onReload"])])):(c(),d("main",ae,[a("div",ne,[p(O,{ref_key:"runner",ref:l,form:t(v).makeRunnerData(t(b)),params:t(o).query,"is-preview":!0,"enable-auto-focus":!0,broker:B.value,style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:I,onLogout:F,onExit:P,onStart:R,onRedirect:i},null,8,["form","params","broker"]),p(te,{onExitFullscreenPreview:E})])]))]))}});const $e=m(ce,[["__scopeId","data-v-e5c3d383"]]);export{$e as default};
//# sourceMappingURL=FormPreview.df2616af.js.map
