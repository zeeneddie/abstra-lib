var R=Object.defineProperty;var V=(n,e,a)=>e in n?R(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var U=(n,e,a)=>(V(n,typeof e!="symbol"?e+"":e,a),a);import{d as I,G as j,b as y,c as v,w as s,f as l,u as o,bV as h,ar as g,cF as A,bO as E,ae as S,eB as F,r as O,H as q,ev as G,ex as L,a$ as H}from"./outputWidgets.52d47f16.js";import{q as T,d as W}from"./icons.22b07466.js";import{a as z}from"./asyncComputed.4c8b6226.js";import{C as J}from"./contracts.generated.4dfd54e6.js";import{A as C}from"./FormItem.f8e049e8.js";import{F as B}from"./Form.7de0f394.js";import{A as N}from"./index.d8bd0329.js";import{C as w}from"./router.ea56abc1.js";import"./index.b0e912f1.js";import{C as K}from"./CrudView.f4ed8d29.js";import{p as $}from"./popupNotifcation.f03d29c4.js";import"./index.cf4c23b9.js";import"./hasIn.1b3df496.js";import"./isNumeric.75337b1e.js";import"./record.c6473ef2.js";import"./pubsub.aae16efd.js";import"./Paragraph.358c5b85.js";import"./Base.73331908.js";import"./Typography.3ab66b91.js";import"./Modal.4734ef4e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.50955cf6.js";import"./url.0e01f007.js";import"./index.e38634fb.js";import"./Title.55fb2f67.js";import"./Text.1eb3c39b.js";import"./index.8bd5fc6f.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="229bbd35-7428-47d7-a89b-6cd784db4d9d",n._sentryDebugIdIdentifier="sentry-dbid-229bbd35-7428-47d7-a89b-6cd784db4d9d")}catch{}})();class Q{constructor(){U(this,"urlPath","users")}async create(e,a){return w.post(`projects/${e}/${this.urlPath}`,a)}async delete(e,a){await w.delete(`projects/${e}/${this.urlPath}/${a}`)}async list(e,{limit:a,offset:t}){const r={};a&&(r.limit=a.toString()),t&&(r.offset=t.toString());const i=new URLSearchParams(r);return w.get(`projects/${e}/${this.urlPath}?${i.toString()}`)}async update(e,a,t){return w.patch(`projects/${e}/${this.urlPath}/${a}`,t)}}const _=new Q;class b{constructor(e){this.dto=e}static async list(e,a,t){return(await _.list(e,{limit:a,offset:t})).map(i=>new b(i))}static async create(e,a){const t=await _.create(e,a);return new b(t)}async delete(){await _.delete(this.projectId,this.id)}async change(e){this.roles=e.roles,await _.update(this.projectId,this.id,e)}get id(){return this.dto.id}get email(){return this.dto.email}get projectId(){return this.dto.projectId}get roles(){return this.dto.roles}set roles(e){this.dto.roles=e}}const X=I({__name:"NewUser",emits:["created","cancel"],setup(n,{emit:e}){const a=J.map(p=>({label:p,value:p})),t=j({email:"",roles:[]});function r(){e("cancel")}function i(){!t.email||e("created",t)}return(p,m)=>(y(),v(o(N),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:r},{extra:s(()=>[l(o(A),null,{default:s(()=>[l(o(h),{onClick:r},{default:s(()=>[g("Cancel")]),_:1}),l(o(h),{type:"primary",onClick:i},{default:s(()=>[g("Submit")]),_:1})]),_:1})]),default:s(()=>[l(o(B),{model:t,layout:"vertical"},{default:s(()=>[l(o(C),{key:"email",label:"Email",required:!0},{default:s(()=>[l(o(E),{value:t.email,"onUpdate:value":m[0]||(m[0]=d=>t.email=d)},null,8,["value"])]),_:1}),l(o(C),{key:"role",label:"Role"},{default:s(()=>[l(o(S),{value:t.roles,"onUpdate:value":m[1]||(m[1]=d=>t.roles=d),mode:"multiple",options:o(a)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Y=I({__name:"UpdateUser",props:{roles:{},email:{}},emits:["updated","cancel"],setup(n,{emit:e}){const a=n,t=[{value:"workflow_viewer",label:"Workflow viewer"}],r=j({roles:a.roles});function i(){e("cancel")}function p(){e("updated",r)}return(m,d)=>(y(),v(o(N),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:i},{extra:s(()=>[l(o(A),null,{default:s(()=>[l(o(h),{onClick:i},{default:s(()=>[g("Cancel")]),_:1}),l(o(h),{type:"primary",onClick:p},{default:s(()=>[g("Submit")]),_:1})]),_:1})]),default:s(()=>[l(o(B),{model:r,layout:"vertical"},{default:s(()=>[l(o(C),{key:"email",label:"Email"},{default:s(()=>[l(o(E),{value:a.email,disabled:""},null,8,["value"])]),_:1}),l(o(C),{key:"role",label:"Role"},{default:s(()=>[l(o(S),{value:r.roles,"onUpdate:value":d[0]||(d[0]=k=>r.roles=k),mode:"multiple",options:t},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Ie=I({__name:"Users",setup(n){const a=F().params.projectId,t=O({type:"none"}),r=()=>{t.value.type="none"},i=()=>{t.value.type="new"},p=c=>{t.value={type:"edit",user:c}},m=async c=>{try{await b.create(a,c),r(),x()}catch(u){u instanceof Error&&$("Create Error",u.message)}},d=async c=>{try{if(t.value.type!=="edit")return;t.value.user.roles=c.roles,await t.value.user.change(c),r(),x()}catch(u){u instanceof Error&&$("Update Error",u.message)}},{loading:k,result:P,refetch:x}=z(()=>b.list(a,100,0)),D=q(()=>{var c,u;return{columns:[{name:"Email"},{name:"Roles"},{name:"",align:"right"}],rows:(u=(c=P.value)==null?void 0:c.map(f=>({key:f.email,cells:[{type:"text",text:f.email},{type:"text",text:f.roles.join(", ")},{type:"actions",actions:[{icon:T,label:"Edit",onClick:()=>p(f)},{icon:W,label:"Delete",onClick:async()=>{await f.delete(),x()}}]}]})))!=null?u:[]}});return(c,u)=>(y(),G(H,null,[l(K,{"entity-name":"users",loading:o(k),title:"Application users",description:"List all application users.","empty-title":"No users yet",table:D.value,"create-button-text":"Add users",onCreate:i},null,8,["loading","table"]),t.value.type==="new"?(y(),v(X,{key:0,onCancel:r,onCreated:m})):t.value.type==="edit"?(y(),v(Y,{key:1,email:t.value.user.email,roles:t.value.user.roles,onUpdated:d,onCancel:r},null,8,["email","roles"])):L("",!0)],64))}});export{Ie as default};
//# sourceMappingURL=Users.92c881aa.js.map
