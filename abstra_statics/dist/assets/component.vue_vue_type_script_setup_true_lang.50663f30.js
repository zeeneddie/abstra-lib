import{d as g,eA as m,b as r,c as p,w as t,u as e,eu as k,f as o,bS as I,bv as w,bt as A,e as j,I as f,aq as s,cF as i,eD as l,ew as y,cn as D}from"./outputWidgets.ee623de8.js";import{E as S,a as v,f as L,j as x,h as C}from"./icons.2279e506.js";import{a as N}from"./router.f4382047.js";import{c as d}from"./Text.c71af019.js";import{a as V,A as z}from"./index.0ea4dafd.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[c]="cd369cbb-76d9-4fd3-b70a-653533b38349",u._sentryDebugIdIdentifier="sentry-dbid-cd369cbb-76d9-4fd3-b70a-653533b38349")}catch{}})();const B={style:{display:"flex","align-items":"center",gap:"5px"}},E={key:1},G=g({__name:"component",props:{buildSpec:{},subdomain:{}},setup(u){const c=u,b=m(),h=n=>!c.subdomain||n.type!="form"?"":`https://${c.subdomain}.abstra.app/${n.path}`,_=n=>{b.push({name:"logs",params:{projectId:c.buildSpec.projectId},query:n.logQuery})};return(n,M)=>n.buildSpec.runtimes.length>0?(r(),p(e(z),{key:0,"item-layout":"horizontal","data-source":n.buildSpec.runtimes},{renderItem:t(({item:a})=>[o(e(V),null,{actions:t(()=>[o(e(I),null,{overlay:t(()=>[o(e(w),null,{default:t(()=>[o(e(A),{onClick:T=>_(a)},{default:t(()=>[j("div",B,[o(f,{path:e(S)},null,8,["path"]),o(e(d),null,{default:t(()=>[s(" View Logs")]),_:1})])]),_:2},1032,["onClick"])]),_:2},1024)]),default:t(()=>[o(f,{path:e(v),style:{cursor:"pointer"}},null,8,["path"])]),_:2},1024)]),default:t(()=>[a.type=="form"?(r(),p(e(i),{key:0,size:"large"},{default:t(()=>[o(f,{path:e(L)},null,8,["path"]),h(a)?(r(),p(e(N),{key:0,href:h(a),strong:""},{default:t(()=>[s(l(a.title),1)]),_:2},1032,["href"])):(r(),p(e(d),{key:1,strong:""},{default:t(()=>[s(l(a.title),1)]),_:2},1024)),o(e(d),{type:"secondary",code:""},{default:t(()=>[s("/"+l(a.path),1)]),_:2},1024)]),_:2},1024)):y("",!0),a.type=="job"?(r(),p(e(i),{key:1,size:"large"},{default:t(()=>[o(f,{path:e(x)},null,8,["path"]),o(e(d),{strong:""},{default:t(()=>[s(l(a.title),1)]),_:2},1024),o(e(d),{type:"secondary",code:""},{default:t(()=>[s(l(a.schedule),1)]),_:2},1024)]),_:2},1024)):y("",!0),a.type=="hook"?(r(),p(e(i),{key:2,size:"large"},{default:t(()=>[o(f,{path:e(C)},null,8,["path"]),o(e(d),{strong:""},{default:t(()=>[s(l(a.title),1)]),_:2},1024),o(e(d),{type:"secondary",code:""},{default:t(()=>[s("/_hooks/"+l(a.path),1)]),_:2},1024)]),_:2},1024)):y("",!0)]),_:2},1024)]),_:1},8,["data-source"])):(r(),k("div",E,[o(e(D),{description:"No runtimes found. Make sure your project has forms, hooks or jobs before deploying it"})]))}});export{G as _};
//# sourceMappingURL=component.vue_vue_type_script_setup_true_lang.50663f30.js.map
