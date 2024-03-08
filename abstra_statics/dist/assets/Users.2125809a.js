var R=Object.defineProperty;var V=(n,e,a)=>e in n?R(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var U=(n,e,a)=>(V(n,typeof e!="symbol"?e+"":e,a),a);import{d as I,G as $,b as y,c as b,w as s,f as l,u as o,bG as h,ar as g,cE as j,bz as A,ae as S,eB as F,r as G,H as O,ev as L,ex as q,aD as z}from"./outputWidgets.e95bb5ba.js";import{I as H,i as T}from"./icons.c7f42c0c.js";import{a as W}from"./asyncComputed.a918aff5.js";import{C as J}from"./contracts.generated.eeb1bc1f.js";import{A as C,F as B}from"./Form.f0f90fb3.js";import{A as D}from"./index.3a92537c.js";import{C as _}from"./router.3a6e59a9.js";import{p as E}from"./popupNotifcation.217238e6.js";import"./index.625c948c.js";import{C as K}from"./CrudView.94891a85.js";import"./index.cf4c23b9.js";import"./hasIn.c432e05d.js";import"./isNumeric.75337b1e.js";import"./record.725c0e31.js";import"./pubsub.9f576728.js";import"./Paragraph.3bf751f9.js";import"./Base.fb82d3c2.js";import"./Typography.c0addfce.js";import"./Modal.d9b4f07f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d389fa9d.js";import"./url.409b259d.js";import"./index.57d47c25.js";import"./Title.c4936cbe.js";import"./Text.dbae65ca.js";import"./index.85a9f4d0.js";import"./SyncOutlined.e872f431.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="43cfc118-5322-4b72-80a9-a0efca4537e2",n._sentryDebugIdIdentifier="sentry-dbid-43cfc118-5322-4b72-80a9-a0efca4537e2")}catch{}})();class Q{constructor(){U(this,"urlPath","users")}async create(e,a){return _.post(`projects/${e}/${this.urlPath}`,a)}async delete(e,a){await _.delete(`projects/${e}/${this.urlPath}/${a}`)}async list(e,{limit:a,offset:t}){const r={};a&&(r.limit=a.toString()),t&&(r.offset=t.toString());const i=new URLSearchParams(r);return _.get(`projects/${e}/${this.urlPath}?${i.toString()}`)}async update(e,a,t){return _.patch(`projects/${e}/${this.urlPath}/${a}`,t)}}const v=new Q;class w{constructor(e){this.dto=e}static async list(e,a,t){return(await v.list(e,{limit:a,offset:t})).map(i=>new w(i))}static async create(e,a){const t=await v.create(e,a);return new w(t)}async delete(){await v.delete(this.projectId,this.id)}async change(e){this.roles=e.roles,await v.update(this.projectId,this.id,e)}get id(){return this.dto.id}get email(){return this.dto.email}get projectId(){return this.dto.projectId}get roles(){return this.dto.roles}set roles(e){this.dto.roles=e}}const X=I({__name:"NewUser",emits:["created","cancel"],setup(n,{emit:e}){const a=J.map(d=>({label:d,value:d})),t=$({email:"",roles:[]});function r(){e("cancel")}function i(){!t.email||e("created",t)}return(d,m)=>(y(),b(o(D),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:r},{extra:s(()=>[l(o(j),null,{default:s(()=>[l(o(h),{onClick:r},{default:s(()=>[g("Cancel")]),_:1}),l(o(h),{type:"primary",onClick:i},{default:s(()=>[g("Submit")]),_:1})]),_:1})]),default:s(()=>[l(o(B),{model:t,layout:"vertical"},{default:s(()=>[l(o(C),{key:"email",label:"Email",required:!0},{default:s(()=>[l(o(A),{value:t.email,"onUpdate:value":m[0]||(m[0]=p=>t.email=p)},null,8,["value"])]),_:1}),l(o(C),{key:"role",label:"Role"},{default:s(()=>[l(o(S),{value:t.roles,"onUpdate:value":m[1]||(m[1]=p=>t.roles=p),mode:"multiple",options:o(a)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Y=I({__name:"UpdateUser",props:{roles:{},email:{}},emits:["updated","cancel"],setup(n,{emit:e}){const a=n,t=[{value:"workflow_viewer",label:"Workflow viewer"}],r=$({roles:a.roles});function i(){e("cancel")}function d(){e("updated",r)}return(m,p)=>(y(),b(o(D),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:i},{extra:s(()=>[l(o(j),null,{default:s(()=>[l(o(h),{onClick:i},{default:s(()=>[g("Cancel")]),_:1}),l(o(h),{type:"primary",onClick:d},{default:s(()=>[g("Submit")]),_:1})]),_:1})]),default:s(()=>[l(o(B),{model:r,layout:"vertical"},{default:s(()=>[l(o(C),{key:"email",label:"Email"},{default:s(()=>[l(o(A),{value:a.email,disabled:""},null,8,["value"])]),_:1}),l(o(C),{key:"role",label:"Role"},{default:s(()=>[l(o(S),{value:r.roles,"onUpdate:value":p[0]||(p[0]=k=>r.roles=k),mode:"multiple",options:t},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Ie=I({__name:"Users",setup(n){const a=F().params.projectId,t=G({type:"none"}),r=()=>{t.value.type="none"},i=()=>{t.value.type="new"},d=c=>{t.value={type:"edit",user:c}},m=async c=>{try{await w.create(a,c),r(),x()}catch(u){u instanceof Error&&E("Create Error",u.message)}},p=async c=>{try{if(t.value.type!=="edit")return;t.value.user.roles=c.roles,await t.value.user.change(c),r(),x()}catch(u){u instanceof Error&&E("Update Error",u.message)}},{loading:k,result:N,refetch:x}=W(()=>w.list(a,100,0)),P=O(()=>{var c,u;return{columns:[{name:"Email"},{name:"Roles"},{name:"",align:"right"}],rows:(u=(c=N.value)==null?void 0:c.map(f=>({key:f.email,cells:[{type:"text",text:f.email},{type:"text",text:f.roles.join(", ")},{type:"actions",actions:[{icon:H,label:"Edit",onClick:()=>d(f)},{icon:T,label:"Delete",onClick:async()=>{await f.delete(),x()}}]}]})))!=null?u:[]}});return(c,u)=>(y(),L(z,null,[l(K,{"entity-name":"users",loading:o(k),title:"Application users",description:"List all application users.","empty-title":"No users yet",table:P.value,"create-button-text":"Add users",onCreate:i},null,8,["loading","table"]),t.value.type==="new"?(y(),b(X,{key:0,onCancel:r,onCreated:m})):t.value.type==="edit"?(y(),b(Y,{key:1,email:t.value.user.email,roles:t.value.user.roles,onUpdated:p,onCancel:r},null,8,["email","roles"])):q("",!0)],64))}});export{Ie as default};
//# sourceMappingURL=Users.2125809a.js.map