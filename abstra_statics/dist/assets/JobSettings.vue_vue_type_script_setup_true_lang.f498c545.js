import{_ as R}from"./RunButton.vue_vue_type_script_setup_true_lang.39c917bb.js";import{d as F,r as b,b as y,c as _,J,o as L,H as N,et as C,f as i,w as s,u as n,af as A,aJ as h,cL as I,bg as $,eB as T,eC as U,bZ as H,cy as D,ew as P,K as W}from"./outputWidgets.a63119cc.js";import{f as E,T as M}from"./dayjs.27fd9ade.js";import{A as B,c as q}from"./Title.96f1946a.js";import{R as G}from"./SmartConsole.ef8dd32b.js";import{F as K}from"./Form.fd17293d.js";(function(){try{var m=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v=new Error().stack;v&&(m._sentryDebugIds=m._sentryDebugIds||{},m._sentryDebugIds[v]="73698a6e-b5a0-4880-8b91-4d0921cfb42f",m._sentryDebugIdIdentifier="sentry-dbid-73698a6e-b5a0-4880-8b91-4d0921cfb42f")}catch{}})();const le=F({__name:"JobTester",props:{job:{},logService:{}},setup(m,{expose:v}){const d=m,r=b(!1);async function t(){r.value=!0;try{const{stdout:u,stderr:f}=await d.job.test();d.logService.log({type:"stdout",log:u}),d.logService.log({type:"stderr",log:f})}finally{r.value=!1}}return v({test:t}),(u,f)=>(y(),_(R,{loading:r.value,onClick:t},null,8,["loading"]))}}),Z=()=>[...Array(31).keys()].map(m=>m+1),O={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},z=["hourly","daily","weekly","monthly"],Q={hourly:{minute:"0",hour:"*",day:"*",month:"*",weekday:"*"},daily:{minute:"0",hour:"6",day:"*",month:"*",weekday:"*"},weekly:{minute:"0",hour:"6",day:"*",month:"*",weekday:"1"},monthly:{minute:"0",hour:"6",day:"1",month:"*",weekday:"*"}},X=F({__name:"CronEditor",props:{crontab:{}},emits:["changeCrontab","saveCrontab","showAdvancedSettings"],setup(m,{emit:v}){const d=m,r=J(()=>{const a=t.hour,o=t.minute;return E(`${a}:${o}:00`,"HH:mm:ss")});L(()=>{const{hour:a,day:o,weekday:c,month:p,minute:S}=d.crontab;p=="*"&&c==="*"&&o!=="*"&&!l([o,a,S])?u.value="monthly":p==="*"&&o==="*"&&c!=="*"&&!l([c,a,S])?u.value="weekly":o==="*"&&c==="*"&&p==="*"&&a!=="*"&&!l([a,S])?u.value="daily":a=="*"&&o==="*"&&c==="*"&&p==="*"&&!l([S])?u.value="hourly":u.value="custom"});const t=N({minute:d.crontab.minute,hour:d.crontab.hour,day:d.crontab.day,month:d.crontab.month,weekday:d.crontab.weekday}),u=b(""),f=b(1),l=a=>a.some(o=>o.includes("-")||o.includes(",")),k=a=>{t.minute=a.minute,t.hour=a.hour,t.day=a.day,t.month=a.month,t.weekday=a.weekday},w=a=>{f.value=0,u.value=a,k(Q[u.value]),v("changeCrontab",t)},j=a=>{f.value=0,t.minute=a,v("changeCrontab",t)},e=a=>{const o=E(a);t.minute=o.minute().toString(),t.hour=o.hour().toString(),v("changeCrontab",t)},g=a=>{f.value=0;const o=a;t.weekday=o,v("changeCrontab",t)},x=a=>{f.value=0;const o=a;t.day=o,v("changeCrontab",t)};return(a,o)=>(y(),C($,null,[i(n(B),{title:"Recurrence"},{default:s(()=>[i(n(A),{placeholder:"Choose a periodicity",value:u.value,"onUpdate:value":w},{default:s(()=>[h(" > "),i(n(I),{value:"",disabled:"",hidden:""},{default:s(()=>[h("Custom")]),_:1}),(y(!0),C($,null,T(n(z),(c,p)=>(y(),_(n(I),{key:p,value:c},{default:s(()=>[h(U(c),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),i(n(B),null,{default:s(()=>[u.value==="hourly"?(y(),_(n(H),{key:0,value:t.minute,"onUpdate:value":j},{addonBefore:s(()=>[h(" at ")]),addonAfter:s(()=>[h(" minutes ")]),_:1},8,["value"])):u.value==="daily"?(y(),_(n(D),{key:1},{default:s(()=>[i(n(M),{value:r.value,"show-second":!1,"onUpdate:value":e},null,8,["value"])]),_:1})):u.value==="weekly"?(y(),_(n(D),{key:2},{default:s(()=>[h(" on "),i(n(A),{style:{width:"200px"},value:Object.values(n(O))[parseInt(t.weekday)],"onUpdate:value":g},{default:s(()=>[(y(!0),C($,null,T(n(O),(c,p)=>(y(),_(n(I),{key:p,value:p,selected:c===Object.values(n(O))[parseInt(t.weekday)]},{default:s(()=>[h(U(c),1)]),_:2},1032,["value","selected"]))),128))]),_:1},8,["value"]),h(" at "),i(n(M),{value:r.value,"show-second":!1,"onUpdate:value":e},null,8,["value"])]),_:1})):u.value==="monthly"?(y(),_(n(D),{key:3},{default:s(()=>[h(" on "),i(n(A),{value:parseInt(t.day),"onUpdate:value":x},{default:s(()=>[(y(!0),C($,null,T(n(Z)(),(c,p)=>(y(),_(n(I),{key:p,value:c},{default:s(()=>[h(U(c),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"]),h(" at "),i(n(M),{value:r.value,"show-second":!1,"onUpdate:value":e},null,8,["value"])]),_:1})):P("",!0)]),_:1})],64))}}),oe=F({__name:"JobSettings",props:{job:{}},setup(m){const v=m,d=b(!1),r=b(v.job),t=()=>{d.value=!d.value},u=()=>{d.value=!1},f=e=>({weekday:e.split(" ")[4],month:e.split(" ")[3],day:e.split(" ")[2],hour:e.split(" ")[1],minute:e.split(" ")[0]}),l=N(f(r.value.schedule)),k=J(()=>`${l.minute} ${l.hour} ${l.day} ${l.month} ${l.weekday}`),w=e=>{l.minute==e.minute&&l.hour==e.hour&&l.day==e.day&&l.month==e.month&&l.weekday==e.weekday||(l.minute=e.minute,l.hour=e.hour,l.day=e.day,l.month=e.month,l.weekday=e.weekday,r.value.schedule=k.value)},j=e=>{e?(r.value.schedule=e,Object.assign(l,f(e))):r.value.schedule=k.value,u()};return W(()=>r.value.schedule,e=>{w({minute:e.split(" ")[0],hour:e.split(" ")[1],day:e.split(" ")[2],month:e.split(" ")[3],weekday:e.split(" ")[4]})}),(e,g)=>(y(),_(n(K),{class:"schedule-editor",layout:"vertical"},{default:s(()=>[i(n(B),{label:"Name",required:""},{default:s(()=>[i(n(H),{value:r.value.title,"onUpdate:value":g[0]||(g[0]=x=>r.value.title=x)},null,8,["value"])]),_:1}),i(G,{runtime:r.value},null,8,["runtime"]),i(n(q),{level:3},{default:s(()=>[h("Schedule")]),_:1}),i(X,{class:"recurrence-settings",crontab:l,onChangeCrontab:w,onSaveCrontab:j,onShowAdvancedSettings:t},null,8,["crontab"])]),_:1}))}});export{le as _,oe as a};
//# sourceMappingURL=JobSettings.vue_vue_type_script_setup_true_lang.f498c545.js.map
