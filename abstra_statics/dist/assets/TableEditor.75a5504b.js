import{a as B}from"./asyncComputed.034a1382.js";import{d as x,H as q,b as e,c as l,x as t,W as h,Z as I,F as k,L as w,t as R,z as r,I as D,D as T,X as z,N as $,a5 as H,e as _,U as M,O as J,Q as K,q as Q,r as U,ad as S,J as W,w as C}from"./registerWidgets.ecebf756.js";import{T as A}from"./tables.ef1091ee.js";import{L}from"./CircularLoading.adea923c.js";import{T as X,a as E}from"./Tab.e8d8ca23.js";import{B as Z}from"./BackButton.8fccc424.js";import{D as G,r as F,C as P,g as Y,i as ee}from"./icons.a46d0a1e.js";import{D as te}from"./DocsButton.cb467a02.js";import{S as ae}from"./SaveButton.d0e5b403.js";import"./activeRecord.b1ad4fda.js";import"./pubsub.8db42968.js";import"./lottie.dac93cbe.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[n]="e9c65af5-d49b-4eaa-931a-3b6ea3e91de1",i._sentryDebugIdIdentifier="sentry-dbid-e9c65af5-d49b-4eaa-931a-3b6ea3e91de1")}catch{}})();const N=i=>(J("data-v-36a6e10a"),i=i(),K(),i),le={class:"table-settings"},ne=N(()=>t("label",null,"Name",-1)),oe={class:"table-field"},se={class:"columns"},ue=N(()=>t("label",null,"Columns",-1)),de=["onUpdate:modelValue"],re=["onUpdate:modelValue"],ie=["onUpdate:modelValue"],ce=["onUpdate:modelValue","disabled"],pe=N(()=>t("label",null,"Not null",-1)),_e=["onClick"],me=x({__name:"TableSettings",props:{table:{}},setup(i){var m;const n=i,{result:p}=B(()=>A.dbTypes()),g=q();(m=n.table)==null||m.onUpdate(()=>{g.replace({name:"tableEditor",params:{tableName:n.table.name}})});function v(d){confirm(`Are you sure you want to delete column "${d}"?`)&&n.table.deleteColumn(d)}function u(){if(!p.value)return;const d=p.value[0].type,b=prompt("Enter column name");!b||n.table.addColumn(b,d)}return(d,b)=>(e(),l("div",le,[ne,t("div",oe,[h(t("input",{"onUpdate:modelValue":b[0]||(b[0]=a=>d.table.name=a),class:"table-name"},null,512),[[I,d.table.name]])]),t("div",se,[ue,(e(!0),l(k,null,w(d.table.getColumns(),a=>(e(),l("div",{key:a.id,class:"column"},[a.primary_key?(e(),R(D,{key:0,class:"column-primary-key",path:r(G)},null,8,["path"])):T("",!0),r(p)?h((e(),l("select",{key:1,"onUpdate:modelValue":c=>a.type=c,class:"column-type"},[(e(!0),l(k,null,w(r(p),c=>(e(),l("option",{key:c.type},$(c.type),1))),128))],8,de)),[[z,a.type]]):T("",!0),h(t("input",{"onUpdate:modelValue":c=>a.name=c,class:"column-name",placeholder:"Column name"},null,8,re),[[I,a.name]]),h(t("input",{"onUpdate:modelValue":c=>a.default=c,class:"column-default",placeholder:"Default value"},null,8,ie),[[I,a.default]]),h(t("input",{"onUpdate:modelValue":c=>a.not_null=c,type:"checkbox",disabled:!a.default},null,8,ce),[[H,a.not_null]]),pe,a.primary_key?T("",!0):(e(),l("button",{key:2,class:"button delete",onClick:c=>v(a.name)},[_(D,{path:r(F)},null,8,["path"])],8,_e))]))),128)),t("button",{class:"button add",onClick:b[1]||(b[1]=a=>u())},[_(D,{path:r(P)},null,8,["path"]),M(" Add Column")])])]))}});const be=Q(me,[["__scopeId","data-v-36a6e10a"]]),ve={class:"table-data"},ye={class:"column-header"},fe={class:"column-name"},he=t("th",null,null,-1),ke={key:1},we=["open"],ge={key:0,class:"editing-row-content"},Ce={class:"editing-row-header"},$e=["onUpdate:modelValue"],Te={key:0,class:"row-error"},Ve=x({__name:"TableData",props:{table:{}},setup(i){const n=i,{result:p,loading:g,refetch:v}=B(()=>n.table.select()),u=U(null),m=U(null),d=U(null);function b(){!n.table||(u.value={},d.value=null,m.value=null)}function a(o){return Object.keys(o).reduce((V,s)=>{var y;return(y=n.table.getColumns().find(f=>f.name===s))!=null&&y.primary_key?{[s]:o[s]}:V},{})}async function c(){if(!(!n.table||!u.value))if(d.value){const o=await n.table.updateRow(a(d.value),u.value);o.type==="update-row:error"?m.value=o.reason:(u.value=null,d.value=null,m.value=null,v())}else{const o=await n.table.insertRow(u.value);o.type==="insert-row:error"?m.value=o.reason:(u.value=null,d.value=null,m.value=null,v())}}function O(o){!n.table||(u.value={...o},d.value={...o},m.value=null)}async function j(o){confirm("Are you sure you want to delete this row?")&&(await n.table.deleteRow(a(o)),v())}return(o,V)=>(e(),l("div",ve,[t("button",{class:"add-row",onClick:b},"Add Row"),t("table",null,[t("thead",null,[t("tr",null,[(e(!0),l(k,null,w(o.table.getColumns(),s=>(e(),l("th",{key:s.id},[t("div",ye,[t("div",fe,$(s.name),1)])]))),128)),he])]),r(g)?(e(),R(L,{key:0})):(e(),l("tbody",ke,[(e(!0),l(k,null,w(r(p),(s,y)=>(e(),l("tr",{key:y},[(e(!0),l(k,null,w(o.table.getColumns(),f=>(e(),l("td",{key:f.id},$(s[f.name]),1))),128)),t("td",null,[_(S,{class:"delete-row",path:r(F),onClick:f=>j(s)},null,8,["path","onClick"]),_(S,{class:"edit-row",path:r(Y),onClick:f=>O(s)},null,8,["path","onClick"])])]))),128))]))]),t("dialog",{class:"editing-row-container",open:!!u.value},[u.value?(e(),l("div",ge,[t("div",Ce,[M(" New Row "),_(S,{path:r(ee),class:"close",onClick:V[0]||(V[0]=s=>u.value=null)},null,8,["path"])]),(e(!0),l(k,null,w(o.table.getColumns(),s=>(e(),l("div",{key:s.id,class:"column"},[t("label",null,$(s.name),1),h(t("input",{"onUpdate:modelValue":y=>u.value[s.name]=y,type:"text"},null,8,$e),[[I,u.value[s.name]]])]))),128)),t("button",{class:"button save",onClick:c},"Save"),m.value?(e(),l("div",Te,$(m.value),1)):T("",!0)])):T("",!0)],8,we)]))}});const Fe=x({__name:"TableEditor",setup(i){const n=W(),{result:p,loading:g}=B(()=>A.get(n.params.tableName));return(v,u)=>r(g)||!r(p)?(e(),R(L,{key:0})):(e(),R(X,{key:1,class:"editor"},{left:C(()=>[_(Z,{link:"/_editor/tables"})]),right:C(()=>[_(te,{path:"tables/overview"}),_(ae,{model:r(p)},null,8,["model"])]),default:C(()=>[_(E,{title:"Table data"},{default:C(()=>[_(Ve,{table:r(p)},null,8,["table"])]),_:1}),_(E,{title:"Settings"},{default:C(()=>[_(be,{table:r(p)},null,8,["table"])]),_:1})]),_:1}))}});export{Fe as default};
//# sourceMappingURL=TableEditor.75a5504b.js.map
