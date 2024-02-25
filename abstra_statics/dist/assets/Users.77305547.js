var R=Object.defineProperty;var V=(n,e,a)=>e in n?R(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var U=(n,e,a)=>(V(n,typeof e!="symbol"?e+"":e,a),a);import{d as I,G as j,b as y,c as b,w as s,f as l,u as o,bV as h,ar as g,cF as A,bO as E,ae as S,eB as F,r as O,H as G,ev as H,ex as L,a$ as q}from"./outputWidgets.0d6c71c4.js";import{H as T,i as W}from"./icons.3c0b1217.js";import{a as z}from"./asyncComputed.27df476d.js";import{C as J}from"./contracts.generated.8f994acd.js";import{A as C,F as B}from"./Form.4c2d0255.js";import{A as N}from"./index.5f8393fd.js";import{C as _}from"./router.e5be387e.js";import"./index.a0d2b41b.js";import{C as K}from"./CrudView.7208f86a.js";import{p as $}from"./popupNotifcation.1d908839.js";import"./index.cf4c23b9.js";import"./hasIn.e6aa186e.js";import"./isNumeric.75337b1e.js";import"./record.19c12a45.js";import"./pubsub.a3cc160d.js";import"./Paragraph.fa27bd72.js";import"./Base.027fcad1.js";import"./Typography.a1d2ddc8.js";import"./Modal.2b3bb1b6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ba54ed30.js";import"./url.54f51be3.js";import"./index.79a50c9a.js";import"./Title.773b1396.js";import"./Text.5f5581ee.js";import"./index.c2096d22.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="177b75a2-1d8d-4181-9269-67ef300cdc24",n._sentryDebugIdIdentifier="sentry-dbid-177b75a2-1d8d-4181-9269-67ef300cdc24")}catch{}})();class Q{constructor(){U(this,"urlPath","users")}async create(e,a){return _.post(`projects/${e}/${this.urlPath}`,a)}async delete(e,a){await _.delete(`projects/${e}/${this.urlPath}/${a}`)}async list(e,{limit:a,offset:t}){const r={};a&&(r.limit=a.toString()),t&&(r.offset=t.toString());const i=new URLSearchParams(r);return _.get(`projects/${e}/${this.urlPath}?${i.toString()}`)}async update(e,a,t){return _.patch(`projects/${e}/${this.urlPath}/${a}`,t)}}const v=new Q;class w{constructor(e){this.dto=e}static async list(e,a,t){return(await v.list(e,{limit:a,offset:t})).map(i=>new w(i))}static async create(e,a){const t=await v.create(e,a);return new w(t)}async delete(){await v.delete(this.projectId,this.id)}async change(e){this.roles=e.roles,await v.update(this.projectId,this.id,e)}get id(){return this.dto.id}get email(){return this.dto.email}get projectId(){return this.dto.projectId}get roles(){return this.dto.roles}set roles(e){this.dto.roles=e}}const X=I({__name:"NewUser",emits:["created","cancel"],setup(n,{emit:e}){const a=J.map(p=>({label:p,value:p})),t=j({email:"",roles:[]});function r(){e("cancel")}function i(){!t.email||e("created",t)}return(p,m)=>(y(),b(o(N),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:r},{extra:s(()=>[l(o(A),null,{default:s(()=>[l(o(h),{onClick:r},{default:s(()=>[g("Cancel")]),_:1}),l(o(h),{type:"primary",onClick:i},{default:s(()=>[g("Submit")]),_:1})]),_:1})]),default:s(()=>[l(o(B),{model:t,layout:"vertical"},{default:s(()=>[l(o(C),{key:"email",label:"Email",required:!0},{default:s(()=>[l(o(E),{value:t.email,"onUpdate:value":m[0]||(m[0]=d=>t.email=d)},null,8,["value"])]),_:1}),l(o(C),{key:"role",label:"Role"},{default:s(()=>[l(o(S),{value:t.roles,"onUpdate:value":m[1]||(m[1]=d=>t.roles=d),mode:"multiple",options:o(a)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Y=I({__name:"UpdateUser",props:{roles:{},email:{}},emits:["updated","cancel"],setup(n,{emit:e}){const a=n,t=[{value:"workflow_viewer",label:"Workflow viewer"}],r=j({roles:a.roles});function i(){e("cancel")}function p(){e("updated",r)}return(m,d)=>(y(),b(o(N),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:i},{extra:s(()=>[l(o(A),null,{default:s(()=>[l(o(h),{onClick:i},{default:s(()=>[g("Cancel")]),_:1}),l(o(h),{type:"primary",onClick:p},{default:s(()=>[g("Submit")]),_:1})]),_:1})]),default:s(()=>[l(o(B),{model:r,layout:"vertical"},{default:s(()=>[l(o(C),{key:"email",label:"Email"},{default:s(()=>[l(o(E),{value:a.email,disabled:""},null,8,["value"])]),_:1}),l(o(C),{key:"role",label:"Role"},{default:s(()=>[l(o(S),{value:r.roles,"onUpdate:value":d[0]||(d[0]=k=>r.roles=k),mode:"multiple",options:t},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),xe=I({__name:"Users",setup(n){const a=F().params.projectId,t=O({type:"none"}),r=()=>{t.value.type="none"},i=()=>{t.value.type="new"},p=c=>{t.value={type:"edit",user:c}},m=async c=>{try{await w.create(a,c),r(),x()}catch(u){u instanceof Error&&$("Create Error",u.message)}},d=async c=>{try{if(t.value.type!=="edit")return;t.value.user.roles=c.roles,await t.value.user.change(c),r(),x()}catch(u){u instanceof Error&&$("Update Error",u.message)}},{loading:k,result:P,refetch:x}=z(()=>w.list(a,100,0)),D=G(()=>{var c,u;return{columns:[{name:"Email"},{name:"Roles"},{name:"",align:"right"}],rows:(u=(c=P.value)==null?void 0:c.map(f=>({key:f.email,cells:[{type:"text",text:f.email},{type:"text",text:f.roles.join(", ")},{type:"actions",actions:[{icon:T,label:"Edit",onClick:()=>p(f)},{icon:W,label:"Delete",onClick:async()=>{await f.delete(),x()}}]}]})))!=null?u:[]}});return(c,u)=>(y(),H(q,null,[l(K,{"entity-name":"users",loading:o(k),title:"Application users",description:"List all application users.","empty-title":"No users yet",table:D.value,"create-button-text":"Add users",onCreate:i},null,8,["loading","table"]),t.value.type==="new"?(y(),b(X,{key:0,onCancel:r,onCreated:m})):t.value.type==="edit"?(y(),b(Y,{key:1,email:t.value.user.email,roles:t.value.user.roles,onUpdated:d,onCancel:r},null,8,["email","roles"])):L("",!0)],64))}});export{xe as default};
//# sourceMappingURL=Users.77305547.js.map