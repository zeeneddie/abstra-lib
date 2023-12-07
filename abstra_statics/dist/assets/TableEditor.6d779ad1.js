import{d as P,r as x,G as B,F as ee,b as r,eu as S,f as t,w as a,a_ as q,aq as k,eD as R,ew as U,e as C,u as e,cA as te,bU as E,cH as ae,cF as j,eC as L,c as D,bN as H,eH as Z,ad as M,cE as le,a as G,t as J,H as ce,eA as ne,eE as oe,eF as se,eB as pe,eG as me}from"./outputWidgets.a5fcf389.js";import{p as re,T as fe}from"./tables.165ad279.js";import{B as ve}from"./BaseLayout.19687f5a.js";import{a as ue}from"./asyncComputed.b7d3265e.js";import{p as z}from"./popupNotifcation.f267868b.js";import{A as Q,a as F}from"./index.689f68cc.js";import{A as ie}from"./index.48f4731a.js";import{F as W,A}from"./Base.175f3ec4.js";import"./router.8a74f04b.js";import{P as be}from"./project.26e79e92.js";import"./index.b67da7e9.js";import{O as ye}from"./organization.269baf36.js";import{H as ge,w as _e,I as he}from"./icons.1a1dc210.js";import{L as Ce}from"./CircularLoading.9003e8f8.js";import{T as ke,A as V}from"./TabPane.b49fecf2.js";import{B as we,a as De,c as Se}from"./index.a675a1a6.js";import"./record.e2e84f62.js";import"./pubsub.903f7e54.js";import"./gateway.5878b159.js";import"./isNumeric.75337b1e.js";import"./transButton.fc314012.js";import"./Text.d2260f67.js";import"./Title.42ad4bfb.js";import"./index.39083dd8.js";(function(){try{var y=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b=new Error().stack;b&&(y._sentryDebugIds=y._sentryDebugIds||{},y._sentryDebugIds[b]="40fb7657-fd63-4eec-99c0-ba6efa6ce124",y._sentryDebugIdIdentifier="sentry-dbid-40fb7657-fd63-4eec-99c0-ba6efa6ce124")}catch{}})();const $e={class:"table-data",style:{width:"calc(100% - 80px)"}},Ie={key:1},Ue=["onClick"],Te=C("a",null,"Delete",-1),Ae=P({__name:"TableData",props:{table:{}},setup(y){var i;const b=y,o=x(1),n=x(5),$=B(()=>{var m,f;return{total:(f=(m=c.value)==null?void 0:m.total)!=null?f:0,current:o.value,pageSize:n.value,onChange:async(h,K)=>{o.value=h,n.value=K,await w()}}}),{result:c,loading:g,refetch:w}=ue(()=>b.table.select({},(o.value-1)*n.value,n.value)),v=B(()=>{var f;return[...(f=b.table)==null?void 0:f.getColumns().map(h=>({title:h.name,dataIndex:h.name})),{title:"Actions",key:"action",fixed:"right",width:100,align:"center"}]}),s=B(()=>{var m;return((m=c.value)==null?void 0:m.rows.map(f=>({key:f.id,...f})))||[]}),T=x(!1),d=x({}),_=()=>{T.value=!0},I=()=>{d.value={},T.value=!1};let N=ee((i=b.table)==null?void 0:i.getUnprotectedColumns().reduce((m,f)=>({...m,[f.name]:""}),{}));async function u(){if(!(!b.table||!N))try{d.value.id?await b.table.updateRow(d.value.id,d.value):await b.table.insertRow(d.value),d.value={},w(),I()}catch(m){m instanceof Error&&z("Database error",m.message)}}const l=async m=>{if(!(!c.value||!c.value.rows.find(f=>f.id===m)))try{await b.table.deleteRow(m),w()}catch(f){f instanceof Error&&z("Database error",f.message)}},p=m=>{var f;d.value=Z.exports.pick(Z.exports.cloneDeep((f=s.value)==null?void 0:f.filter(h=>m===h.key)[0]),b.table.getColumns().map(h=>h.name)),_()};return(m,f)=>(r(),S("div",$e,[t(e(ae),{columns:v.value,"data-source":s.value,pagination:$.value,bordered:"",loading:e(g),scroll:{x:2e3,y:720}},{bodyCell:a(({column:h,text:K,record:Y})=>[v.value.map(O=>O.title).includes(h.dataIndex)?(r(),S(q,{key:0},[k(R(K),1)],64)):U("",!0),h.key==="action"?(r(),S("div",Ie,[C("span",null,[C("a",{onClick:O=>p(Y.id)},"Edit",8,Ue)]),t(e(ie),{type:"vertical"}),t(e(te),{title:"Sure to delete?",onConfirm:O=>l(Y.id)},{default:a(()=>[Te]),_:2},1032,["onConfirm"])])):U("",!0)]),footer:a(()=>[t(e(E),{type:"primary",onClick:_},{default:a(()=>[k("+ Add New Data")]),_:1})]),_:1},8,["columns","data-source","pagination","loading"]),t(e(Q),{title:"Data",width:720,open:T.value,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:I},{extra:a(()=>[t(e(j),null,{default:a(()=>[t(e(E),{onClick:I},{default:a(()=>[k("Cancel")]),_:1}),t(e(E),{type:"primary",onClick:u},{default:a(()=>[k("Submit")]),_:1})]),_:1})]),default:a(()=>[t(e(W),{model:d.value,layout:"vertical"},{default:a(()=>[(r(!0),S(q,null,L(m.table.getUnprotectedColumns(),h=>(r(),D(e(A),{key:h.id,label:h.name},{default:a(()=>[d.value?(r(),D(e(H),{key:0,value:d.value[h.name],"onUpdate:value":K=>d.value[h.name]=K},null,8,["value","onUpdate:value"])):U("",!0)]),_:2},1032,["label"]))),128))]),_:1},8,["model"])]),_:1},8,["open"])]))}});const Ee=P({__name:"NewColumn",props:{open:{type:Boolean},table:{}},emits:["created","cancel"],setup(y,{emit:b}){const o=y,n=x({name:"",type:"varchar",nullable:!0,unique:!1}),$=()=>{n.value={name:"",type:"varchar",nullable:!0,unique:!1}};function c(){b("cancel")}async function g(){if(!o.table||!n.value.name||!n.value.type)return;const{success:w,error:v}=await o.table.addColumn(n.value);w||z("Database error",v),$(),b("created")}return(w,v)=>(r(),D(e(Q),{title:"New column",width:720,open:o.open,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:c},{extra:a(()=>[t(e(j),null,{default:a(()=>[t(e(E),{onClick:c},{default:a(()=>[k("Cancel")]),_:1}),t(e(E),{type:"primary",onClick:g},{default:a(()=>[k("Submit")]),_:1})]),_:1})]),default:a(()=>[t(e(W),{model:n.value,layout:"vertical"},{default:a(()=>[t(e(A),{key:"name",label:"Name"},{default:a(()=>[t(e(H),{value:n.value.name,"onUpdate:value":v[0]||(v[0]=s=>n.value.name=s)},null,8,["value"])]),_:1}),t(e(A),{key:"type",label:"Type"},{default:a(()=>[t(e(M),{value:n.value.type,"onUpdate:value":v[1]||(v[1]=s=>n.value.type=s),"default-active-first-option":""},{default:a(()=>[(r(!0),S(q,null,L(e(re),s=>(r(),D(e(le),{key:s,value:s},{default:a(()=>[k(R(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),t(e(A),{key:"nullable",label:"Nullable"},{default:a(()=>[t(e(F),{checked:n.value.nullable,"onUpdate:checked":v[2]||(v[2]=s=>n.value.nullable=s)},null,8,["checked"])]),_:1}),t(e(A),{key:"unique",label:"Unique"},{default:a(()=>[t(e(F),{checked:n.value.unique,"onUpdate:checked":v[3]||(v[3]=s=>n.value.unique=s)},null,8,["checked"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"]))}}),Ne={class:"types-container"},xe={class:"fullwidth-input"},Be={class:"fullwidth-input"},qe={class:"using-container"},Re={class:"fullwidth-input"},ze=P({__name:"UpdateColumn",props:{open:{type:Boolean},table:{},column:{}},emits:["updated","cancel"],setup(y,{emit:b}){const o=y;function n(){b("cancel")}const $=()=>o.column.record.hasChangesDeep("type"),c=x({type:"default"});function g(u,l){return l==="varchar"||u==="int"&&l==="boolean"||u==="boolean"&&l==="int"}const w=()=>{s.value&&(c.value={type:"user-defined",using:I.value,mandatory:!0})},v=B(()=>c.value.type==="default"&&g(o.column.record.initialState.type,o.column.type)),s=B(()=>!g(o.column.record.initialState.type,o.column.type));function T(u){u?c.value={type:"default"}:c.value={type:"user-defined",using:I.value,mandatory:!1}}function d(u){if(c.value.type==="default")throw new Error("Can't change using when using default casting");c.value.using=u!=null?u:""}const _=()=>s.value?!0:$()&&c.value.type==="user-defined",I=B(()=>`${o.column.record.initialState.name}::${o.column.type}`);async function N(){if(!o.column)return;const u=c.value.type==="default"?I.value:c.value.using;try{await o.column.update(u),b("updated")}catch(l){l instanceof Error&&z("Database error",l.message)}}return(u,l)=>{const p=G("icon");return r(),D(e(Q),{title:"Edit column",width:720,open:o.open,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:n},{extra:a(()=>[t(e(j),null,{default:a(()=>[t(e(E),{onClick:n},{default:a(()=>[k("Cancel")]),_:1}),t(e(E),{type:"primary",onClick:N},{default:a(()=>[k("Submit")]),_:1})]),_:1})]),default:a(()=>[t(e(W),{model:u.column,layout:"vertical"},{default:a(()=>[t(e(A),{key:"name",label:"Name"},{default:a(()=>[t(e(H),{value:u.column.name,"onUpdate:value":l[0]||(l[0]=i=>u.column.name=i)},null,8,["value"])]),_:1}),C("div",Ne,[C("span",xe,[t(e(A),{key:"type",label:"Current Type"},{default:a(()=>[t(e(M),{value:u.column.record.initialState.type,"onUpdate:value":l[1]||(l[1]=i=>u.column.record.initialState.type=i),"default-active-first-option":"",disabled:""},null,8,["value"])]),_:1})]),t(p,{class:"right-arrow",path:e(ge)},null,8,["path"]),C("span",Be,[t(e(A),{key:"new-type",label:"New Type"},{default:a(()=>[t(e(M),{value:u.column.type,"onUpdate:value":l[2]||(l[2]=i=>u.column.type=i),"default-active-first-option":"",onChange:l[3]||(l[3]=i=>w())},{default:a(()=>[(r(!0),S(q,null,L(e(re),i=>(r(),D(e(le),{key:i,value:i},{default:a(()=>[k(R(i),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})])]),C("div",qe,[$()?(r(),D(e(A),{key:"default-casting",label:"Use default casting"},{default:a(()=>[t(e(F),{checked:v.value,disabled:s.value,"onUpdate:checked":l[4]||(l[4]=i=>T(!!i))},null,8,["checked","disabled"])]),_:1})):U("",!0),C("span",Re,[$()?(r(),D(e(A),{key:"using",label:"Using"},{default:a(()=>[t(e(H),{value:c.value.type==="user-defined"?c.value.using:I.value,disabled:!_(),onInput:l[5]||(l[5]=i=>d(i.target.value))},null,8,["value","disabled"])]),_:1})):U("",!0)])]),t(e(A),{key:"nullable",label:"Nullable"},{default:a(()=>[t(e(F),{checked:u.column.nullable,"onUpdate:checked":l[6]||(l[6]=i=>u.column.nullable=i)},null,8,["checked"])]),_:1}),t(e(A),{key:"unique",label:"Unique"},{default:a(()=>[t(e(F),{checked:u.column.unique,"onUpdate:checked":l[7]||(l[7]=i=>u.column.unique=i)},null,8,["checked"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])}}});const Pe=J(ze,[["__scopeId","data-v-e474c12f"]]),de=y=>(oe("data-v-1d368adf"),y=y(),se(),y),Ke={class:"table-settings"},Fe={key:0},je=de(()=>C("span",null," protected ",-1)),He=[je],Le={key:1},Oe=["onClick"],Ve=de(()=>C("a",null,"Delete",-1)),Me=P({__name:"TableColumns",props:{table:{},loading:{type:Boolean}},emits:["refresh"],setup(y,{emit:b}){var u;const o=y,n=x(o.loading);ce(()=>o.loading,()=>{n.value=o.loading});const $=ne();(u=o.table)==null||u.onUpdate(()=>{var l;$.replace({name:"tableEditor",params:{tableName:(l=o.table)==null?void 0:l.name}})});const g=[...[{title:"Name",dataIndex:"name",sorter:(l,p)=>l.name.localeCompare(p.name)},{title:"Type",dataIndex:"type",sorter:(l,p)=>l.type.localeCompare(p.type)},{title:"Default Value",dataIndex:"default",sorter:(l,p)=>{var i,m,f,h;return(h=(f=l.default)==null?void 0:f.localeCompare((m=(i=p.default)==null?void 0:i.toString())!=null?m:""))!=null?h:0}},{title:"Nullable",dataIndex:"nullable",sorter:(l,p)=>l.nullable.toString().localeCompare(p.nullable.toString())},{title:"Primary Key",dataIndex:"primaryKey",sorter:(l,p)=>l.primaryKey.toString().localeCompare(p.primaryKey.toString())}],{title:"Actions",key:"action"}],w=B(()=>{var l;return(l=o.table)==null?void 0:l.getColumns().map(p=>({name:p.name,type:p.type,default:p.default,nullable:p.nullable,primaryKey:p.primaryKey,id:p.id,unique:p.unique}))});function v(){d.value={type:"idle"}}function s(){v(),n.value=!0,setTimeout(()=>{b("refresh")},500)}function T(){d.value={type:"creating"}}const d=x({type:"idle"});function _(l){var p,i;(i=(p=o.table)==null?void 0:p.getColumn(l))==null||i.delete(),n.value=!0,setTimeout(()=>{b("refresh")},500)}const I=l=>{var p,i,m;return(m=(i=(p=o.table)==null?void 0:p.getColumn(l))==null?void 0:i.protected)!=null?m:!1},N=l=>{if(!o.table)throw new Error("Table not found");d.value={type:"editing",column:o.table.getColumn(l)}};return(l,p)=>(r(),S("div",Ke,[t(e(ae),{columns:g,"data-source":w.value,bordered:"",loading:n.value,pagination:!1},{bodyCell:a(({column:i,text:m,record:f})=>[i.key!=="action"?(r(),S(q,{key:0},[k(R(m),1)],64)):(r(),S(q,{key:1},[I(f.id)?(r(),S("div",Fe,He)):(r(),S("div",Le,[C("span",null,[C("a",{onClick:()=>N(f.id)},"Edit",8,Oe)]),t(e(ie),{type:"vertical"}),t(e(te),{title:"Sure to delete?",onConfirm:h=>_(f.id)},{default:a(()=>[Ve]),_:2},1032,["onConfirm"])]))],64))]),footer:a(()=>[t(e(E),{type:"primary",onClick:T},{default:a(()=>[k("+ Add New Column")]),_:1})]),_:1},8,["data-source","loading"]),l.table&&d.value.type==="creating"?(r(),D(Ee,{key:0,open:"",table:o.table,onClose:v,onCreated:s},null,8,["table"])):U("",!0),l.table&&d.value.type==="editing"?(r(),D(Pe,{key:1,column:d.value.column,open:"",table:l.table,onUpdated:s,onClose:v,onCancel:v},null,8,["column","table"])):U("",!0)]))}});const Ge=J(Me,[["__scopeId","data-v-1d368adf"]]),X=y=>(oe("data-v-06f57b7a"),y=y(),se(),y),Je={class:"table-settings"},Qe=X(()=>C("h2",{class:"title"},"Table settings",-1)),We=X(()=>C("div",{class:"subtitle"},"Edit table metadata",-1)),Xe={key:0,class:"table-presenter"},Ye={class:"table-property-item"},Ze={class:"property-item"},et={key:1},tt={class:"change-warning"},at={class:"section-title"},lt=X(()=>C("div",{class:"section-body"}," Changing the table's name can possibly result in the break of running applications. ",-1)),nt={class:"table-name-value-input"},ot={key:0,class:"error"},st=P({__name:"TableSettings",props:{table:{}},emits:["refresh"],setup(y,{emit:b}){const o=y,n=ee({error:"",editing:!1,loading:!1}),$=()=>n.editing=!0,c=()=>{o.table.resetChanges(),n.editing=!1,n.error=""},g=async()=>{n.error="",n.loading=!0;try{await w()}catch(s){s instanceof Error&&(z("Database error",s.message),n.error=s.message)}n.error||(n.editing=!1),n.loading=!1},w=async()=>{if(!o.table.name){n.error="Table name cannot be empty";return}try{await o.table.save(),b("refresh")}catch(s){s instanceof Error&&(z("Database error",s.message),n.error=s.message)}},v=s=>{o.table.name=s.target.value};return(s,T)=>{var _;const d=G("icon");return r(),S("div",Je,[Qe,We,n.editing?(r(),S("div",et,[C("div",tt,[C("div",at,[t(d,{path:e(_e),width:"12",height:"12",fill:"#D35249"},null,8,["path"]),k(" Be careful ")]),lt]),t(e(j),{direction:"vertical"},{default:a(()=>[C("div",nt,[t(e(H),{value:s.table.name,type:"text",onInput:v,onBlur:T[0]||(T[0]=I=>s.table.fixTraillingName())},null,8,["value"])]),n.error?(r(),S("div",ot,[t(d,{path:e(he),fill:"#D35249",width:"12",height:"12"},null,8,["path"]),k(" "+R(n.error),1)])):U("",!0),t(e(j),null,{default:a(()=>[t(e(E),{onClick:c},{default:a(()=>[k("Cancel")]),_:1}),t(e(E),{type:"primary",disabled:!s.table.hasChangesDeep("name"),onClick:g},{default:a(()=>[k(" Save Changes "),n.loading?(r(),D(Ce,{key:0,size:"16"})):U("",!0)]),_:1},8,["disabled"])]),_:1})]),_:1})])):(r(),S("div",Xe,[C("div",Ye,[C("div",Ze,"Name: "+R((_=s.table)==null?void 0:_.name),1)]),t(e(E),{onClick:$},{default:a(()=>[k("Edit Name")]),_:1})]))])}}});const rt=J(st,[["__scopeId","data-v-06f57b7a"]]),Nt=P({__name:"TableEditor",setup(y){const b=ne(),o=pe(),n=o.params.tableId,$=o.params.projectId,c=x("data"),{result:g,loading:w,refetch:v}=ue(()=>Promise.all([be.get($).then(async d=>{const _=await ye.get(d.organizationId);return{project:d,organization:_}}),fe.get($,n)]).then(([{project:d,organization:_},I])=>me({project:d,organization:_,table:I}))),s=B(()=>!w.value&&g.value?[{label:"My organizations",path:"/organizations"},{label:g.value.organization.name,path:`/organizations/${g.value.organization.id}`},{label:g.value.project.name,path:`/projects/${g.value.project.id}/tables`}]:void 0);function T(){b.push({name:"tables",params:{projectId:$}})}return(d,_)=>{const I=G("router-link");return r(),D(ve,null,{navbar:a(()=>{var N;return[t(e(Se),{title:(N=e(g))==null?void 0:N.table.name,style:{padding:"5px 10px"},onBack:T},{footer:a(()=>[t(e(ke),{"active-key":c.value,"onUpdate:activeKey":_[0]||(_[0]=u=>c.value=u)},{default:a(()=>[t(e(V),{key:"data",tab:"Data"}),t(e(V),{key:"columns",tab:"Columns"}),t(e(V),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),breadcrumb:a(()=>[s.value?(r(),D(e(we),{key:0},{default:a(()=>[(r(!0),S(q,null,L(s.value,(u,l)=>(r(),D(e(De),{key:l},{default:a(()=>[t(I,{to:u.path},{default:a(()=>[k(R(u.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):U("",!0)]),_:1},8,["title"])]}),content:a(()=>[e(g)&&c.value==="data"?(r(),D(Ae,{key:0,loading:e(w),table:e(g).table},null,8,["loading","table"])):U("",!0),e(g)&&c.value==="columns"?(r(),D(Ge,{key:1,table:e(g).table,loading:e(w),onRefresh:_[1]||(_[1]=N=>e(v)())},null,8,["table","loading"])):U("",!0),e(g)&&c.value==="settings"?(r(),D(rt,{key:2,table:e(g).table,loading:e(w),onRefresh:_[2]||(_[2]=N=>e(v)())},null,8,["table","loading"])):U("",!0)]),_:1})}}});export{Nt as default};
//# sourceMappingURL=TableEditor.6d779ad1.js.map