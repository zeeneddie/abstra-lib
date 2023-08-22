import{a as S}from"./asyncComputed.e710533c.js";import{d as B,H as q,b as e,c as n,x as t,W as h,Z as x,F as k,L as w,t as I,z as d,I as R,D as T,X as z,N as $,a3 as H,e as m,U as M,O as J,Q as K,q as Q,r as D,ad as U,w as C,J as W}from"./registerWidgets.240bf3ff.js";import{T as A}from"./tables.8b7ce84b.js";import{L}from"./CircularLoading.846828c4.js";import{T as X,a as E}from"./Tab.c6910996.js";import{B as Z}from"./BackButton.a3be2b23.js";import{D as G,r as F,C as P,g as Y,i as ee}from"./icons.8dbdad3c.js";import{D as te}from"./DocsButton.3ad45f71.js";import{S as ae}from"./SaveButton.40f60648.js";import"./activeRecord.d21ad35a.js";import"./pubsub.83908d54.js";import"./lottie.b1d7a5e6.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="dadcf17c-0637-4412-a528-590cb4e04a90",a._sentryDebugIdIdentifier="sentry-dbid-dadcf17c-0637-4412-a528-590cb4e04a90")}catch{}})();const N=a=>(J("data-v-36a6e10a"),a=a(),K(),a),le={class:"table-settings"},ne=N(()=>t("label",null,"Name",-1)),oe={class:"table-field"},se={class:"columns"},ue=N(()=>t("label",null,"Columns",-1)),de=["onUpdate:modelValue"],re=["onUpdate:modelValue"],ie=["onUpdate:modelValue"],ce=["onUpdate:modelValue","disabled"],pe=N(()=>t("label",null,"Not null",-1)),me=["onClick"],_e=B({__name:"TableSettings",props:{table:null},setup(a){var _;const o=a,{result:c}=S(()=>A.dbTypes()),g=q();(_=o.table)==null||_.onUpdate(()=>{g.replace({name:"tableEditor",params:{tableName:o.table.name}})});function v(p){confirm(`Are you sure you want to delete column "${p}"?`)&&o.table.deleteColumn(p)}function u(){if(!c.value)return;const p=c.value[0].type,b=prompt("Enter column name");!b||o.table.addColumn(b,p)}return(p,b)=>(e(),n("div",le,[ne,t("div",oe,[h(t("input",{"onUpdate:modelValue":b[0]||(b[0]=l=>a.table.name=l),class:"table-name"},null,512),[[x,a.table.name]])]),t("div",se,[ue,(e(!0),n(k,null,w(a.table.getColumns(),l=>(e(),n("div",{key:l.id,class:"column"},[l.primary_key?(e(),I(R,{key:0,class:"column-primary-key",path:d(G)},null,8,["path"])):T("",!0),d(c)?h((e(),n("select",{key:1,"onUpdate:modelValue":i=>l.type=i,class:"column-type"},[(e(!0),n(k,null,w(d(c),i=>(e(),n("option",{key:i.type},$(i.type),1))),128))],8,de)),[[z,l.type]]):T("",!0),h(t("input",{"onUpdate:modelValue":i=>l.name=i,class:"column-name",placeholder:"Column name"},null,8,re),[[x,l.name]]),h(t("input",{"onUpdate:modelValue":i=>l.default=i,class:"column-default",placeholder:"Default value"},null,8,ie),[[x,l.default]]),h(t("input",{"onUpdate:modelValue":i=>l.not_null=i,type:"checkbox",disabled:!l.default},null,8,ce),[[H,l.not_null]]),pe,l.primary_key?T("",!0):(e(),n("button",{key:2,class:"button delete",onClick:i=>v(l.name)},[m(R,{path:d(F)},null,8,["path"])],8,me))]))),128)),t("button",{class:"button add",onClick:b[1]||(b[1]=l=>u())},[m(R,{path:d(P)},null,8,["path"]),M(" Add Column")])])]))}});const be=Q(_e,[["__scopeId","data-v-36a6e10a"]]),ve={class:"table-data"},ye={class:"column-header"},fe={class:"column-name"},he=t("th",null,null,-1),ke={key:1},we=["open"],ge={key:0,class:"editing-row-content"},Ce={class:"editing-row-header"},$e=["onUpdate:modelValue"],Te={key:0,class:"row-error"},Ve=B({__name:"TableData",props:{table:null},setup(a){const o=a,{result:c,loading:g,refetch:v}=S(()=>o.table.select()),u=D(null),_=D(null),p=D(null);function b(){!o.table||(u.value={},p.value=null,_.value=null)}function l(r){return Object.keys(r).reduce((V,s)=>{var y;return(y=o.table.getColumns().find(f=>f.name===s))!=null&&y.primary_key?{[s]:r[s]}:V},{})}async function i(){if(!(!o.table||!u.value))if(p.value){const r=await o.table.updateRow(l(p.value),u.value);r.type==="update-row:error"?_.value=r.reason:(u.value=null,p.value=null,_.value=null,v())}else{const r=await o.table.insertRow(u.value);r.type==="insert-row:error"?_.value=r.reason:(u.value=null,p.value=null,_.value=null,v())}}function O(r){!o.table||(u.value={...r},p.value={...r},_.value=null)}async function j(r){confirm("Are you sure you want to delete this row?")&&(await o.table.deleteRow(l(r)),v())}return(r,V)=>(e(),n("div",ve,[t("button",{class:"add-row",onClick:b},"Add Row"),t("table",null,[t("thead",null,[t("tr",null,[(e(!0),n(k,null,w(a.table.getColumns(),s=>(e(),n("th",{key:s.id},[t("div",ye,[t("div",fe,$(s.name),1)])]))),128)),he])]),d(g)?(e(),I(L,{key:0})):(e(),n("tbody",ke,[(e(!0),n(k,null,w(d(c),(s,y)=>(e(),n("tr",{key:y},[(e(!0),n(k,null,w(a.table.getColumns(),f=>(e(),n("td",{key:f.id},$(s[f.name]),1))),128)),t("td",null,[m(U,{class:"delete-row",path:d(F),onClick:f=>j(s)},null,8,["path","onClick"]),m(U,{class:"edit-row",path:d(Y),onClick:f=>O(s)},null,8,["path","onClick"])])]))),128))]))]),t("dialog",{class:"editing-row-container",open:!!u.value},[u.value?(e(),n("div",ge,[t("div",Ce,[M(" New Row "),m(U,{path:d(ee),class:"close",onClick:V[0]||(V[0]=s=>u.value=null)},null,8,["path"])]),(e(!0),n(k,null,w(a.table.getColumns(),s=>(e(),n("div",{key:s.id,class:"column"},[t("label",null,$(s.name),1),h(t("input",{"onUpdate:modelValue":y=>u.value[s.name]=y,type:"text"},null,8,$e),[[x,u.value[s.name]]])]))),128)),t("button",{class:"button save",onClick:i},"Save"),_.value?(e(),n("div",Te,$(_.value),1)):T("",!0)])):T("",!0)],8,we)]))}});const Fe=B({__name:"TableEditor",setup(a){const o=W(),{result:c,loading:g}=S(()=>A.get(o.params.tableName));return(v,u)=>d(g)||!d(c)?(e(),I(L,{key:0})):(e(),I(X,{key:1,class:"editor"},{left:C(()=>[m(Z,{link:"/_editor/tables"})]),right:C(()=>[m(te,{path:"tables/overview"}),m(ae,{model:d(c)},null,8,["model"])]),default:C(()=>[m(E,{title:"Table data"},{default:C(()=>[m(Ve,{table:d(c)},null,8,["table"])]),_:1}),m(E,{title:"Settings"},{default:C(()=>[m(be,{table:d(c)},null,8,["table"])]),_:1})]),_:1}))}});export{Fe as default};
//# sourceMappingURL=TableEditor.1a2093e2.js.map
