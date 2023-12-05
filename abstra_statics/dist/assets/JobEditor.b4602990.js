import{d as T,r as g,b as c,eu as C,f as l,G as N,o as P,F as H,w as s,u as e,ad as U,aq as h,cE as A,a_ as I,eC as B,c as p,eD as D,bN as L,cp as M,ew as w,H as q,eA as G,eB as W}from"./outputWidgets.4eff76e6.js";import{J as K}from"./jobs.b0e2a0a4.js";import{R as z,_ as Q,S as X,L as Y}from"./RuntimeCommonSettings.75238e06.js";import{B as Z}from"./BaseLayout.8c3cc89a.js";import{a as V}from"./asyncComputed.4874377b.js";import{_ as ee}from"./SaveButton.vue_vue_type_script_setup_true_lang.18123fec.js";import{_ as te}from"./DocsButton.vue_vue_type_script_setup_true_lang.2295d6e1.js";import{_ as ae}from"./RunButton.vue_vue_type_script_setup_true_lang.4eae44fc.js";import{h as O}from"./index.7b326338.js";import{T as R}from"./dayjs.78edc1d2.js";import{A as F,F as oe}from"./Base.34de9a78.js";import{A as ne}from"./Title.e93cc21e.js";import{c as se}from"./index.8449460c.js";import{A as J,T as le}from"./TabPane.512c5bd8.js";import"./record.9c05c036.js";import"./pubsub.2c4444ee.js";import"./uuid.ea6cfa74.js";import"./icons.82d13829.js";import"./Text.e43234cf.js";import"./forms.f91d76f2.js";import"./hooks.bbbf74d9.js";import"./workspaces.7c0783d4.js";import"./url.33e1e1fe.js";import"./ant-design.77b028eb.js";import"./transButton.b80e5b6e.js";(function(){try{var f=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y=new Error().stack;y&&(f._sentryDebugIds=f._sentryDebugIds||{},f._sentryDebugIds[y]="1ce80cec-940e-4c11-8b70-7af6adbfb080",f._sentryDebugIdIdentifier="sentry-dbid-1ce80cec-940e-4c11-8b70-7af6adbfb080")}catch{}})();const ue={style:{width:"100%",display:"flex","justify-content":"center"}},re=T({__name:"JobTester",props:{job:{},logService:{}},setup(f,{expose:y}){const m=f,u=g(!1);async function t(){u.value=!0;try{const{stdout:r,stderr:i}=await m.job.test();m.logService.log({type:"stdout",log:r}),m.logService.log({type:"stderr",log:i})}finally{u.value=!1}}return y({test:t}),(r,i)=>(c(),C("div",ue,[l(ae,{loading:u.value,style:{"max-width":"350px"},onClick:t},null,8,["loading"])]))}}),ie=()=>[...Array(31).keys()].map(f=>f+1),E={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},ce=["hourly","daily","weekly","monthly"],de={hourly:{minute:"0",hour:"*",day:"*",month:"*",weekday:"*"},daily:{minute:"0",hour:"6",day:"*",month:"*",weekday:"*"},weekly:{minute:"0",hour:"6",day:"*",month:"*",weekday:"1"},monthly:{minute:"0",hour:"6",day:"1",month:"*",weekday:"*"}},me=T({__name:"CronEditor",props:{crontab:{}},emits:["changeCrontab","saveCrontab","showAdvancedSettings"],setup(f,{emit:y}){const m=f,u=N(()=>{const o=t.hour,d=t.minute;return O(`${o}:${d}:00`,"HH:mm:ss")});P(()=>{const{hour:o,day:d,weekday:v,month:_,minute:x}=m.crontab;_=="*"&&v==="*"&&d!=="*"&&!n([d,o,x])?r.value="monthly":_==="*"&&d==="*"&&v!=="*"&&!n([v,o,x])?r.value="weekly":d==="*"&&v==="*"&&_==="*"&&o!=="*"&&!n([o,x])?r.value="daily":o=="*"&&d==="*"&&v==="*"&&_==="*"&&!n([x])?r.value="hourly":r.value="custom"});const t=H({minute:m.crontab.minute,hour:m.crontab.hour,day:m.crontab.day,month:m.crontab.month,weekday:m.crontab.weekday}),r=g(""),i=g(1),n=o=>o.some(d=>d.includes("-")||d.includes(",")),S=o=>{t.minute=o.minute,t.hour=o.hour,t.day=o.day,t.month=o.month,t.weekday=o.weekday},k=o=>{i.value=0,r.value=o,S(de[r.value]),y("changeCrontab",t)},b=o=>{i.value=0,t.minute=o,y("changeCrontab",t)},a=o=>{const d=O(o);t.minute=d.minute().toString(),t.hour=d.hour().toString(),y("changeCrontab",t)},j=o=>{i.value=0;const d=o;t.weekday=d,y("changeCrontab",t)},$=o=>{i.value=0;const d=o;t.day=d,y("changeCrontab",t)};return(o,d)=>(c(),C(I,null,[l(e(F),{title:"Recurrence"},{default:s(()=>[l(e(U),{placeholder:"Choose a periodicity",value:r.value,"onUpdate:value":k},{default:s(()=>[h(" > "),l(e(A),{value:"",disabled:"",hidden:""},{default:s(()=>[h("Custom")]),_:1}),(c(!0),C(I,null,B(e(ce),(v,_)=>(c(),p(e(A),{key:_,value:v},{default:s(()=>[h(D(v),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),l(e(F),null,{default:s(()=>[r.value==="hourly"?(c(),p(e(L),{key:0,value:t.minute,"onUpdate:value":b},{addonBefore:s(()=>[h(" at ")]),addonAfter:s(()=>[h(" minutes ")]),_:1},8,["value"])):r.value==="daily"?(c(),p(e(M),{key:1},{default:s(()=>[l(e(R),{value:u.value,"show-second":!1,"onUpdate:value":a},null,8,["value"])]),_:1})):r.value==="weekly"?(c(),p(e(M),{key:2},{default:s(()=>[h(" on "),l(e(U),{style:{width:"200px"},value:Object.values(e(E))[parseInt(t.weekday)],"onUpdate:value":j},{default:s(()=>[(c(!0),C(I,null,B(e(E),(v,_)=>(c(),p(e(A),{key:_,value:_,selected:v===Object.values(e(E))[parseInt(t.weekday)]},{default:s(()=>[h(D(v),1)]),_:2},1032,["value","selected"]))),128))]),_:1},8,["value"]),h(" at "),l(e(R),{value:u.value,"show-second":!1,"onUpdate:value":a},null,8,["value"])]),_:1})):r.value==="monthly"?(c(),p(e(M),{key:3},{default:s(()=>[h(" on "),l(e(U),{value:parseInt(t.day),"onUpdate:value":$},{default:s(()=>[(c(!0),C(I,null,B(e(ie)(),(v,_)=>(c(),p(e(A),{key:_,value:v},{default:s(()=>[h(D(v),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"]),h(" at "),l(e(R),{value:u.value,"show-second":!1,"onUpdate:value":a},null,8,["value"])]),_:1})):w("",!0)]),_:1})],64))}}),ye=T({__name:"JobSettings",props:{job:{}},setup(f){const y=f,m=g(!1),u=g(y.job),t=()=>{m.value=!m.value},r=()=>{m.value=!1},i=a=>({weekday:a.split(" ")[4],month:a.split(" ")[3],day:a.split(" ")[2],hour:a.split(" ")[1],minute:a.split(" ")[0]}),n=H(i(u.value.schedule)),S=N(()=>`${n.minute} ${n.hour} ${n.day} ${n.month} ${n.weekday}`),k=a=>{n.minute==a.minute&&n.hour==a.hour&&n.day==a.day&&n.month==a.month&&n.weekday==a.weekday||(n.minute=a.minute,n.hour=a.hour,n.day=a.day,n.month=a.month,n.weekday=a.weekday,u.value.schedule=S.value)},b=a=>{a?(u.value.schedule=a,Object.assign(n,i(a))):u.value.schedule=S.value,r()};return q(()=>u.value.schedule,a=>{k({minute:a.split(" ")[0],hour:a.split(" ")[1],day:a.split(" ")[2],month:a.split(" ")[3],weekday:a.split(" ")[4]})}),(a,j)=>(c(),p(e(oe),{class:"schedule-editor",layout:"vertical"},{default:s(()=>[l(e(F),{label:"Name",required:""},{default:s(()=>[l(e(L),{value:u.value.title,"onUpdate:value":j[0]||(j[0]=$=>u.value.title=$)},null,8,["value"])]),_:1}),l(z,{runtime:u.value},null,8,["runtime"]),l(e(ne),{level:3},{default:s(()=>[h("Schedule")]),_:1}),l(me,{class:"recurrence-settings",crontab:n,onChangeCrontab:k,onSaveCrontab:b,onShowAdvancedSettings:t},null,8,["crontab"])]),_:1}))}}),Je=T({__name:"JobEditor",setup(f){const y=G(),m=W(),u=g(null),t=g("test");function r(){y.push({name:"jobs"})}const{result:i}=V(()=>K.get(m.params.id)),n=Y.create();return(S,k)=>(c(),p(Z,null,{navbar:s(()=>[e(i)?(c(),p(e(se),{key:0,title:e(i).title,style:{padding:"5px 10px"},onBack:r},{footer:s(()=>[l(e(le),{"active-key":t.value,"onUpdate:activeKey":k[0]||(k[0]=b=>t.value=b)},{default:s(()=>[l(e(J),{key:"test",tab:"Test"}),l(e(J),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:s(()=>[l(Q),l(te),t.value==="settings"?(c(),p(ee,{key:0,model:e(i)},null,8,["model"])):w("",!0)]),_:1},8,["title"])):w("",!0)]),content:s(()=>[e(i)&&t.value==="test"?(c(),p(re,{key:0,ref_key:"tester",ref:u,job:e(i),"log-service":e(n)},null,8,["job","log-service"])):w("",!0),e(i)&&t.value==="settings"?(c(),p(ye,{key:1,job:e(i)},null,8,["job"])):w("",!0)]),footer:s(()=>{var b;return[e(i)&&t.value==="test"?(c(),p(X,{key:0,runtime:"forms","log-service":e(n),onRestart:(b=u.value)==null?void 0:b.test},null,8,["log-service","onRestart"])):w("",!0)]}),_:1}))}});export{Je as default};
//# sourceMappingURL=JobEditor.b4602990.js.map
