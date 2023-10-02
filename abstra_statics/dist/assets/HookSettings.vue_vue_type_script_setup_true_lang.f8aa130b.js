import{d as U,J as R,H as E,r as O,b as u,c as y,w as o,f as l,u as e,b2 as i,cd as c,af as x,et as _,eB as k,c6 as b,bw as A,cI as T,ew as w,eC as P}from"./outputWidgets.541a6a3f.js";import{D as F,A as Q}from"./index.dda022dd.js";import{c as G,A as v}from"./Title.3011141f.js";import{A as J}from"./index.3cff0676.js";import{A as S}from"./index.33fb7a48.js";import{A as V}from"./index.1797b918.js";import{A as $}from"./index.f20ad580.js";import{F as D}from"./Form.2a9acb85.js";import{R as j}from"./SmartConsole.e1c7bfc3.js";(function(){try{var f=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(f._sentryDebugIds=f._sentryDebugIds||{},f._sentryDebugIds[p]="9bd3453f-8526-40a7-975a-a5bd17b13321",f._sentryDebugIdIdentifier="sentry-dbid-9bd3453f-8526-40a7-975a-a5bd17b13321")}catch{}})();const Y={key:1},ae=U({__name:"HookTester",props:{hook:{},logService:{}},setup(f,{expose:p}){const m=f,g=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],H=R(()=>{var s;if((s=t.response)!=null&&s.status)return t.response.status>=500?"red":t.response.status>=400?"orange":t.response.status>=200?"green":"blue"}),t=E({queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({firstName:"John",lastName:"Doe",age:25,address:{streetAddress:"21 2nd Ave",city:"New York",state:"NY",postalCode:"10021"}},null,4)}),h=O(!1),C=async()=>{h.value=!0;try{const s=await m.hook.test({method:t.method,query:t.queryParams.reduce((n,{name:a,value:r})=>(a&&r&&(n[a]=r),n),{}),body:t.body,headers:t.headers.reduce((n,{key:a,value:r})=>(a&&r&&(n[a]=r),n),{})});t.response=s,s.stderr&&m.logService.log({type:"stderr",log:s.stderr}),s.stdout&&m.logService.log({type:"stdout",log:s.stdout})}finally{h.value=!1}},I=()=>{t.queryParams.push({name:"",value:""})},N=s=>{t.queryParams=t.queryParams.filter((n,a)=>a!==s)},q=()=>{t.headers.push({key:"",value:""})},B=s=>{t.headers=t.headers.filter((n,a)=>a!==s)};return p({runHook:C}),(s,n)=>(u(),y(e(D),{layout:"vertical"},{default:o(()=>[l(e(J),{align:"middle",justify:"space-between"},{default:o(()=>[l(e(G),{level:3},{default:o(()=>[i("Request configuration")]),_:1}),l(e(c),{loading:h.value,onClick:C},{default:o(()=>[i(" Run ")]),_:1},8,["loading"])]),_:1}),l(e(v),{label:"Method"},{default:o(()=>[l(e(x),{value:t.method,options:g,onSelect:n[0]||(n[0]=a=>t.method=a)},null,8,["value"])]),_:1}),(u(!0),_(A,null,k(t.queryParams,(a,r)=>(u(),y(e(v),{key:r,label:r===0?"Query Params":void 0},{default:o(()=>[l(e(S),null,{default:o(()=>[l(e(b),{value:a.name,"onUpdate:value":d=>a.name=d,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),l(e(b),{value:a.value,"onUpdate:value":d=>a.value=d,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),l(e(c),{danger:"",onClick:d=>N(r)},{default:o(()=>[i("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),l(e(v),null,{default:o(()=>[l(e(c),{type:"dashed",style:{width:"100%"},onClick:I},{default:o(()=>[i("Add Query Param")]),_:1})]),_:1}),(u(!0),_(A,null,k(t.headers,(a,r)=>(u(),y(e(v),{key:r,label:r===0?"Headers":void 0},{default:o(()=>[l(e(S),null,{default:o(()=>[l(e(b),{value:a.key,"onUpdate:value":d=>a.key=d,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),l(e(b),{value:a.value,"onUpdate:value":d=>a.value=d,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),l(e(c),{danger:"",onClick:d=>B(r)},{default:o(()=>[i("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),l(e(v),null,{default:o(()=>[l(e(c),{type:"dashed",style:{width:"100%"},onClick:q},{default:o(()=>[i("Add Header")]),_:1})]),_:1}),t.method!=="GET"?(u(),y(e(v),{key:0,label:"Body"},{default:o(()=>[l(e(T),{value:t.body,"onUpdate:value":n[1]||(n[1]=a=>t.body=a)},null,8,["value"])]),_:1})):w("",!0),l(e(V),{orientation:"left"},{default:o(()=>[i("Response")]),_:1}),t.response?(u(),_("div",Y,[l(e($),{color:H.value},{default:o(()=>[i(P(t.response.status),1)]),_:1},8,["color"]),l(e(Q),null,{default:o(()=>[(u(!0),_(A,null,k(t.response.headers,(a,r)=>(u(),y(e(F),{key:r,label:r},{default:o(()=>[i(P(a),1)]),_:2},1032,["label"]))),128))]),_:1}),l(e(T),{value:t.response.body},null,8,["value"])])):w("",!0)]),_:1}))}}),le=U({__name:"HookSettings",props:{hook:{}},setup(f){return(p,m)=>(u(),y(e(D),{layout:"vertical"},{default:o(()=>[l(e(v),{label:"Name",required:""},{default:o(()=>[l(e(b),{value:p.hook.title,"onUpdate:value":m[0]||(m[0]=g=>p.hook.title=g)},null,8,["value"])]),_:1}),l(j,{runtime:p.hook},null,8,["runtime"])]),_:1}))}});export{ae as _,le as a};
//# sourceMappingURL=HookSettings.vue_vue_type_script_setup_true_lang.f8aa130b.js.map
