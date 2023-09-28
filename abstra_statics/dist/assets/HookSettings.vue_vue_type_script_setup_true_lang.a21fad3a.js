import{d as U,H as B,G as E,r as G,b as u,c,w as o,f as l,u as e,b0 as i,cb as y,ad as O,er as _,ez as k,c4 as b,bu as A,cG as C,eu as P,eA as w}from"./registerWidgets.dc9f1313.js";import{A as x}from"./index.aeb5998e.js";import{D as F,A as Q}from"./index.56fa7ca8.js";import{c as V,A as v}from"./Title.aac0de3b.js";import{A as $}from"./index.a6b470f8.js";import{A as S}from"./index.a5ea279e.js";import{A as j}from"./index.13368493.js";import{F as D}from"./Form.14d2c95c.js";import{R as J}from"./SmartConsole.92c3a8ad.js";(function(){try{var f=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(f._sentryDebugIds=f._sentryDebugIds||{},f._sentryDebugIds[p]="7a715f48-d407-4bd4-b3d3-568c58f48365",f._sentryDebugIdIdentifier="sentry-dbid-7a715f48-d407-4bd4-b3d3-568c58f48365")}catch{}})();const Y={key:1},ae=U({__name:"HookTester",props:{hook:{},logService:{}},setup(f,{expose:p}){const m=f,g=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],H=B(()=>{var s;if((s=t.response)!=null&&s.status)return t.response.status>=500?"red":t.response.status>=400?"orange":t.response.status>=200?"green":"blue"}),t=E({queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({firstName:"John",lastName:"Doe",age:25,address:{streetAddress:"21 2nd Ave",city:"New York",state:"NY",postalCode:"10021"}},null,4)}),h=G(!1),T=async()=>{h.value=!0;try{const s=await m.hook.test({method:t.method,query:t.queryParams.reduce((n,{name:a,value:r})=>(a&&r&&(n[a]=r),n),{}),body:t.body,headers:t.headers.reduce((n,{key:a,value:r})=>(a&&r&&(n[a]=r),n),{})});t.response=s,s.stderr&&m.logService.log({type:"stderr",log:s.stderr}),s.stdout&&m.logService.log({type:"stdout",log:s.stdout})}finally{h.value=!1}},N=()=>{t.queryParams.push({name:"",value:""})},I=s=>{t.queryParams=t.queryParams.filter((n,a)=>a!==s)},q=()=>{t.headers.push({key:"",value:""})},R=s=>{t.headers=t.headers.filter((n,a)=>a!==s)};return p({runHook:T}),(s,n)=>(u(),c(e(D),{layout:"vertical"},{default:o(()=>[l(e($),{align:"middle",justify:"space-between"},{default:o(()=>[l(e(V),{level:3},{default:o(()=>[i("Request configuration")]),_:1}),l(e(y),{loading:h.value,onClick:T},{default:o(()=>[i(" Run ")]),_:1},8,["loading"])]),_:1}),l(e(v),{label:"Method"},{default:o(()=>[l(e(O),{value:t.method,options:g,onSelect:n[0]||(n[0]=a=>t.method=a)},null,8,["value"])]),_:1}),(u(!0),_(A,null,k(t.queryParams,(a,r)=>(u(),c(e(v),{key:r,label:r===0?"Query Params":void 0},{default:o(()=>[l(e(S),null,{default:o(()=>[l(e(b),{value:a.name,"onUpdate:value":d=>a.name=d,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),l(e(b),{value:a.value,"onUpdate:value":d=>a.value=d,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),l(e(y),{danger:"",onClick:d=>I(r)},{default:o(()=>[i("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),l(e(v),null,{default:o(()=>[l(e(y),{type:"dashed",style:{width:"100%"},onClick:N},{default:o(()=>[i("Add Query Param")]),_:1})]),_:1}),(u(!0),_(A,null,k(t.headers,(a,r)=>(u(),c(e(v),{key:r,label:r===0?"Headers":void 0},{default:o(()=>[l(e(S),null,{default:o(()=>[l(e(b),{value:a.key,"onUpdate:value":d=>a.key=d,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),l(e(b),{value:a.value,"onUpdate:value":d=>a.value=d,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),l(e(y),{danger:"",onClick:d=>R(r)},{default:o(()=>[i("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),l(e(v),null,{default:o(()=>[l(e(y),{type:"dashed",style:{width:"100%"},onClick:q},{default:o(()=>[i("Add Header")]),_:1})]),_:1}),t.method!=="GET"?(u(),c(e(v),{key:0,label:"Body"},{default:o(()=>[l(e(C),{value:t.body,"onUpdate:value":n[1]||(n[1]=a=>t.body=a)},null,8,["value"])]),_:1})):P("",!0),l(e(j),{orientation:"left"},{default:o(()=>[i("Response")]),_:1}),t.response?(u(),_("div",Y,[l(e(x),{color:H.value},{default:o(()=>[i(w(t.response.status),1)]),_:1},8,["color"]),l(e(Q),null,{default:o(()=>[(u(!0),_(A,null,k(t.response.headers,(a,r)=>(u(),c(e(F),{key:r,label:r},{default:o(()=>[i(w(a),1)]),_:2},1032,["label"]))),128))]),_:1}),l(e(C),{value:t.response.body},null,8,["value"])])):P("",!0)]),_:1}))}}),le=U({__name:"HookSettings",props:{hook:{}},setup(f){return(p,m)=>(u(),c(e(D),{layout:"vertical"},{default:o(()=>[l(e(v),{label:"Name",required:""},{default:o(()=>[l(e(b),{value:p.hook.title,"onUpdate:value":m[0]||(m[0]=g=>p.hook.title=g)},null,8,["value"])]),_:1}),l(J,{runtime:p.hook},null,8,["runtime"])]),_:1}))}});export{ae as _,le as a};
//# sourceMappingURL=HookSettings.vue_vue_type_script_setup_true_lang.a21fad3a.js.map