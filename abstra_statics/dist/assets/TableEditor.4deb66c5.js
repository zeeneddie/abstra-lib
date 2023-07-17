import{a as B}from"./asyncComputed.0bf661db.js";import{d as U,H as G,b as t,c as l,x as e,V as f,W as V,G as E,e as c,z as s,I as $,F as k,L as w,t as R,D as T,an as H,N as C,a0 as J,S as A,O as Q,Q as W,q as K,r as S,ab as I,w as y,J as P}from"./registerWidgets.88d12ae1.js";import{T as L}from"./tables.1eeef4d2.js";import{L as F}from"./CircularLoading.0c459b72.js";import{T as X,B as Y,a as N}from"./BackButton.ff64d06f.js";import{j as M,F as Z,t as j,E as ee,g as te,i as ae}from"./icons.778999cd.js";import"./activeRecord.57c6bf02.js";const D=n=>(Q("data-v-5812aa88"),n=n(),W(),n),le={class:"table-settings"},ne=D(()=>e("label",null,"Name",-1)),se={class:"table-field"},oe={class:"columns"},ue=D(()=>e("label",null,"Columns",-1)),de=["onUpdate:modelValue"],re=["onUpdate:modelValue"],ie=["onUpdate:modelValue"],ce=["onUpdate:modelValue","disabled"],be=D(()=>e("label",null,"Not null",-1)),pe=["onClick"],_e=["onClick"],me=U({__name:"TableSettings",props:{table:null},setup(n){var o;const r=n,{result:_}=B(()=>L.dbTypes()),g=G();(o=r.table)==null||o.onUpdate(()=>{g.replace({name:"tableEditor",params:{tableName:r.table.name}})});function m(p){confirm(`Are you sure you want to delete column "${p.name}"?`)&&p.delete()}return(p,b)=>(t(),l("div",le,[ne,e("div",se,[f(e("input",{"onUpdate:modelValue":b[0]||(b[0]=a=>n.table.name=a),class:"table-name"},null,512),[[V,n.table.name]]),e("button",{class:E(["button","save",{disabled:!n.table.hasChanges()}]),onClick:b[1]||(b[1]=a=>n.table.save())},[c($,{path:s(M)},null,8,["path"])],2)]),e("div",oe,[ue,(t(!0),l(k,null,w(n.table.columns,a=>(t(),l("div",{key:a.id,class:"column"},[a.primaryKey?(t(),R($,{key:0,class:"column-primary-key",path:s(Z)},null,8,["path"])):T("",!0),s(_)?f((t(),l("select",{key:1,"onUpdate:modelValue":d=>a.type=d,class:"column-type"},[(t(!0),l(k,null,w(s(_),d=>(t(),l("option",{key:d.type},C(d.type),1))),128))],8,de)),[[H,a.type]]):T("",!0),f(e("input",{"onUpdate:modelValue":d=>a.name=d,class:"column-name",placeholder:"Column name"},null,8,re),[[V,a.name]]),f(e("input",{"onUpdate:modelValue":d=>a.default=d,class:"column-default",placeholder:"Default value"},null,8,ie),[[V,a.default]]),f(e("input",{"onUpdate:modelValue":d=>a.notNull=d,type:"checkbox",disabled:!a.default},null,8,ce),[[J,a.notNull]]),be,a.primaryKey?T("",!0):(t(),l("button",{key:2,class:"button delete",onClick:d=>m(a)},[c($,{path:s(j)},null,8,["path"])],8,pe)),e("button",{class:E(["button","save",{disabled:!a.hasChanges()}]),onClick:d=>a.save()},[c($,{path:s(M)},null,8,["path"])],10,_e)]))),128)),e("button",{class:"button add",onClick:b[2]||(b[2]=a=>n.table.createColumn())},[c($,{path:s(ee)},null,8,["path"]),A(" Add Column ")])])]))}});const ve=K(me,[["__scopeId","data-v-5812aa88"]]),he={class:"table-data"},ye={class:"column-header"},fe={class:"column-name"},ke=e("th",null,null,-1),we={key:1},Ce=["open"],ge={key:0,class:"editing-row-content"},$e={class:"editing-row-header"},Te=["onUpdate:modelValue"],xe={key:0,class:"row-error"},Ve=U({__name:"TableData",props:{table:null},setup(n){const r=n,{result:_,loading:g,refetch:m}=B(()=>r.table.select()),o=S(null),p=S(null),b=S(null);function a(){!r.table||(o.value={},b.value=null,p.value=null)}function d(i){return Object.keys(i).reduce((x,u)=>{var v;return(v=r.table.columns.find(h=>h.name===u))!=null&&v.primaryKey?{[u]:i[u]}:x},{})}async function z(){if(!(!r.table||!o.value))if(b.value){const i=await r.table.updateRow(d(b.value),o.value);i.type==="update-row:error"?p.value=i.reason:(o.value=null,b.value=null,p.value=null,m())}else{const i=await r.table.insertRow(o.value);i.type==="insert-row:error"?p.value=i.reason:(o.value=null,b.value=null,p.value=null,m())}}function O(i){!r.table||(o.value={...i},b.value={...i},p.value=null)}async function q(i){confirm("Are you sure you want to delete this row?")&&(await r.table.deleteRow(d(i)),m())}return(i,x)=>(t(),l("div",he,[e("button",{class:"add-row",onClick:a},"Add Row"),e("table",null,[e("thead",null,[e("tr",null,[(t(!0),l(k,null,w(n.table.columns,u=>(t(),l("th",{key:u.id},[e("div",ye,[e("div",fe,C(u.name),1)])]))),128)),ke])]),s(g)?(t(),R(F,{key:0})):(t(),l("tbody",we,[(t(!0),l(k,null,w(s(_),(u,v)=>(t(),l("tr",{key:v},[(t(!0),l(k,null,w(n.table.columns,h=>(t(),l("td",{key:h.id},C(u[h.name]),1))),128)),e("td",null,[c(I,{class:"delete-row",path:s(j),onClick:h=>q(u)},null,8,["path","onClick"]),c(I,{class:"edit-row",path:s(te),onClick:h=>O(u)},null,8,["path","onClick"])])]))),128))]))]),e("dialog",{class:"editing-row-container",open:!!o.value},[o.value?(t(),l("div",ge,[e("div",$e,[A(" New Row "),c(I,{path:s(ae),class:"close",onClick:x[0]||(x[0]=u=>o.value=null)},null,8,["path"])]),(t(!0),l(k,null,w(n.table.columns,u=>(t(),l("div",{key:u.id,class:"column"},[e("label",null,C(u.name),1),f(e("input",{"onUpdate:modelValue":v=>o.value[u.name]=v,type:"text"},null,8,Te),[[V,o.value[u.name]]])]))),128)),e("button",{class:"button save",onClick:z},"Save"),p.value?(t(),l("div",xe,C(p.value),1)):T("",!0)])):T("",!0)],8,Ce)]))}});const Re={class:"table-connect"},Ue=U({__name:"TableConnect",props:{table:null},setup(n){return(r,_)=>(t(),l("pre",Re,`        from abstra.tables import get_table

        table = get_table('`+C(n.table.name)+`')

        table.select(where=...)
        table.update(where=..., set=...)
        table.insert(values=...)
        table.delete(where=...)
    `,1))}});const Se=K(Ue,[["__scopeId","data-v-0b54f9e9"]]),Ke=U({__name:"TableEditor",setup(n){const r=P(),{result:_,loading:g}=B(()=>L.get(r.params.tableName));return(m,o)=>s(g)||!s(_)?(t(),R(F,{key:0})):(t(),R(X,{key:1,class:"editor"},{left:y(()=>[c(Y,{link:"/_editor/tables"})]),right:y(()=>[]),default:y(()=>[c(N,{title:"Table data"},{default:y(()=>[c(Ve,{table:s(_)},null,8,["table"])]),_:1}),c(N,{title:"Settings"},{default:y(()=>[c(ve,{table:s(_)},null,8,["table"])]),_:1}),c(N,{title:"Connect"},{default:y(()=>[c(Se,{table:s(_)},null,8,["table"])]),_:1})]),_:1}))}});export{Ke as default};
//# sourceMappingURL=TableEditor.4deb66c5.js.map
