var R=Object.defineProperty;var V=(n,e,a)=>e in n?R(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var U=(n,e,a)=>(V(n,typeof e!="symbol"?e+"":e,a),a);import{d as I,G as j,b as y,c as h,w as s,f as l,u as o,bV as g,ar as b,cF as A,bO as E,ae as S,eB as F,r as O,H as G,ev as L,ex as q,a$ as H}from"./outputWidgets.8e744bdb.js";import{t as T,o as W}from"./icons.805cd884.js";import{a as z}from"./asyncComputed.317c8625.js";import{C as J}from"./contracts.generated.9cdc57c3.js";import{A as C}from"./FormItem.22e63e90.js";import{F as B}from"./Form.814fe9cf.js";import{A as N}from"./index.d4a82fb7.js";import{C as _}from"./router.ddb0ef46.js";import"./index.262383aa.js";import{C as K}from"./CrudView.64d9681d.js";import{p as $}from"./popupNotifcation.c561d2a6.js";import"./index.cf4c23b9.js";import"./hasIn.23fe66f7.js";import"./isNumeric.75337b1e.js";import"./record.45c6e9c7.js";import"./pubsub.a3628e87.js";import"./Paragraph.15ec5eb0.js";import"./Base.bd673c5e.js";import"./Modal.c54156f6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.bcece02a.js";import"./url.9304e931.js";import"./index.cbd0123e.js";import"./Title.d066fbae.js";import"./Text.07e986e0.js";import"./index.e35eed98.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="35fd6d53-e7c9-449e-89c1-ed9739229a0f",n._sentryDebugIdIdentifier="sentry-dbid-35fd6d53-e7c9-449e-89c1-ed9739229a0f")}catch{}})();class Q{constructor(){U(this,"urlPath","users")}async create(e,a){return _.post(`projects/${e}/${this.urlPath}`,a)}async delete(e,a){await _.delete(`projects/${e}/${this.urlPath}/${a}`)}async list(e,{limit:a,offset:t}){const r={};a&&(r.limit=a.toString()),t&&(r.offset=t.toString());const i=new URLSearchParams(r);return _.get(`projects/${e}/${this.urlPath}?${i.toString()}`)}async update(e,a,t){return _.patch(`projects/${e}/${this.urlPath}/${a}`,t)}}const v=new Q;class w{constructor(e){this.dto=e}static async list(e,a,t){return(await v.list(e,{limit:a,offset:t})).map(i=>new w(i))}static async create(e,a){const t=await v.create(e,a);return new w(t)}async delete(){await v.delete(this.projectId,this.id)}async change(e){this.roles=e.roles,await v.update(this.projectId,this.id,e)}get id(){return this.dto.id}get email(){return this.dto.email}get projectId(){return this.dto.projectId}get roles(){return this.dto.roles}set roles(e){this.dto.roles=e}}const X=I({__name:"NewUser",emits:["created","cancel"],setup(n,{emit:e}){const a=J.map(p=>({label:p,value:p})),t=j({email:"",roles:[]});function r(){e("cancel")}function i(){!t.email||e("created",t)}return(p,m)=>(y(),h(o(N),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:r},{extra:s(()=>[l(o(A),null,{default:s(()=>[l(o(g),{onClick:r},{default:s(()=>[b("Cancel")]),_:1}),l(o(g),{type:"primary",onClick:i},{default:s(()=>[b("Submit")]),_:1})]),_:1})]),default:s(()=>[l(o(B),{model:t,layout:"vertical"},{default:s(()=>[l(o(C),{key:"email",label:"Email",required:!0},{default:s(()=>[l(o(E),{value:t.email,"onUpdate:value":m[0]||(m[0]=d=>t.email=d)},null,8,["value"])]),_:1}),l(o(C),{key:"role",label:"Role"},{default:s(()=>[l(o(S),{value:t.roles,"onUpdate:value":m[1]||(m[1]=d=>t.roles=d),mode:"multiple",options:o(a)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Y=I({__name:"UpdateUser",props:{roles:{},email:{}},emits:["updated","cancel"],setup(n,{emit:e}){const a=n,t=[{value:"workflow_viewer",label:"Workflow viewer"}],r=j({roles:a.roles});function i(){e("cancel")}function p(){e("updated",r)}return(m,d)=>(y(),h(o(N),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:i},{extra:s(()=>[l(o(A),null,{default:s(()=>[l(o(g),{onClick:i},{default:s(()=>[b("Cancel")]),_:1}),l(o(g),{type:"primary",onClick:p},{default:s(()=>[b("Submit")]),_:1})]),_:1})]),default:s(()=>[l(o(B),{model:r,layout:"vertical"},{default:s(()=>[l(o(C),{key:"email",label:"Email"},{default:s(()=>[l(o(E),{value:a.email,disabled:""},null,8,["value"])]),_:1}),l(o(C),{key:"role",label:"Role"},{default:s(()=>[l(o(S),{value:r.roles,"onUpdate:value":d[0]||(d[0]=k=>r.roles=k),mode:"multiple",options:t},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),xe=I({__name:"Users",setup(n){const a=F().params.projectId,t=O({type:"none"}),r=()=>{t.value.type="none"},i=()=>{t.value.type="new"},p=c=>{t.value={type:"edit",user:c}},m=async c=>{try{await w.create(a,c),r(),x()}catch(u){u instanceof Error&&$("Create Error",u.message)}},d=async c=>{try{if(t.value.type!=="edit")return;t.value.user.roles=c.roles,await t.value.user.change(c),r(),x()}catch(u){u instanceof Error&&$("Update Error",u.message)}},{loading:k,result:P,refetch:x}=z(()=>w.list(a,100,0)),D=G(()=>{var c,u;return{columns:[{name:"Email"},{name:"Roles"},{name:"",align:"right"}],rows:(u=(c=P.value)==null?void 0:c.map(f=>({key:f.email,cells:[{type:"text",text:f.email},{type:"text",text:f.roles.join(", ")},{type:"actions",actions:[{icon:T,label:"Edit",onClick:()=>p(f)},{icon:W,label:"Delete",onClick:async()=>{await f.delete(),x()}}]}]})))!=null?u:[]}});return(c,u)=>(y(),L(H,null,[l(K,{"entity-name":"users",loading:o(k),title:"Application users",description:"List all application users.","empty-title":"No users yet",table:D.value,"create-button-text":"Add users",onCreate:i},null,8,["loading","table"]),t.value.type==="new"?(y(),h(X,{key:0,onCancel:r,onCreated:m})):t.value.type==="edit"?(y(),h(Y,{key:1,email:t.value.user.email,roles:t.value.user.roles,onUpdated:d,onCancel:r},null,8,["email","roles"])):q("",!0)],64))}});export{xe as default};
//# sourceMappingURL=Users.cc0941f3.js.map
