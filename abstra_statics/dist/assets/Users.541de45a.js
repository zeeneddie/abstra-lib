var R=Object.defineProperty;var q=(r,e,t)=>e in r?R(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var I=(r,e,t)=>(q(r,typeof e!="symbol"?e+"":e,t),t);import{d as x,F as U,b as f,c as w,w as s,f as l,u as o,bO as h,aq as g,cC as $,bH as E,ad as j,eB as V,r as G,G as L,ev as O,ex as H,bq as T}from"./outputWidgets.c7c3593b.js";import{q as z,n as J}from"./icons.e912a40c.js";import{a as K}from"./asyncComputed.87d89e82.js";import"./authorManager.33208873.js";import{C as _}from"./gateway.94d6767e.js";import"./index.640c3418.js";import{A as v}from"./FormItem.9941e947.js";import{F as S}from"./Form.5652ed9b.js";import{A as B}from"./index.e1ffda91.js";import{C as Q}from"./CrudView.b146ef3d.js";import{p as A}from"./popupNotifcation.912e0a0f.js";import"./index.cf4c23b9.js";import"./record.b6e0d210.js";import"./pubsub.a1271b13.js";import"./hasIn.f4bb54d3.js";import"./isNumeric.75337b1e.js";import"./Title.47031f69.js";import"./Text.1c53905c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.252f0a18.js";import"./router.051bd37d.js";import"./index.50d90398.js";import"./url.03aeeb48.js";import"./index.6a297772.js";import"./index.26b290e3.js";import"./index.03af204f.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="5c6d6b82-e52e-4d2c-951f-c44be5c6cf88",r._sentryDebugIdIdentifier="sentry-dbid-5c6d6b82-e52e-4d2c-951f-c44be5c6cf88")}catch{}})();const W=["admin","user"],N=W.map(r=>({label:r,value:r}));class X{constructor(){I(this,"urlPath","users")}async create(e,t){return _.post(`projects/${e}/${this.urlPath}`,t)}async delete(e,t){await _.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e,t,a){const n=new URLSearchParams({limit:t.toString(),offset:a.toString()});return _.get(`projects/${e}/${this.urlPath}?${n.toString()}`)}async update(e,t,a){return _.patch(`projects/${e}/${this.urlPath}/${t}`,a)}}const b=new X;class y{constructor(e){this.dto=e}static async list(e,t,a){return(await b.list(e,t,a)).map(p=>new y(p))}static async create(e,t){const a=await b.create(e,t);return new y(a)}async delete(){await b.delete(this.projectId,this.id)}async change(e){this.roles=e.roles,await b.update(this.projectId,this.id,e)}get id(){return this.dto.id}get email(){return this.dto.email}get projectId(){return this.dto.projectId}get roles(){return this.dto.roles}set roles(e){this.dto.roles=e}}const Y=x({__name:"NewUser",emits:["created","cancel"],setup(r,{emit:e}){const t=U({email:"",roles:[]});function a(){e("cancel")}function n(){!t.email||e("created",t)}return(p,d)=>(f(),w(o(B),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:a},{extra:s(()=>[l(o($),null,{default:s(()=>[l(o(h),{onClick:a},{default:s(()=>[g("Cancel")]),_:1}),l(o(h),{type:"primary",onClick:n},{default:s(()=>[g("Submit")]),_:1})]),_:1})]),default:s(()=>[l(o(S),{model:t,layout:"vertical"},{default:s(()=>[l(o(v),{key:"email",label:"Email",required:!0},{default:s(()=>[l(o(E),{value:t.email,"onUpdate:value":d[0]||(d[0]=u=>t.email=u)},null,8,["value"])]),_:1}),l(o(v),{key:"role",label:"Role"},{default:s(()=>[l(o(j),{value:t.roles,"onUpdate:value":d[1]||(d[1]=u=>t.roles=u),mode:"multiple",options:o(N)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Z=x({__name:"UpdateUser",props:{roles:{},email:{}},emits:["updated","cancel"],setup(r,{emit:e}){const t=r,a=U({roles:t.roles});function n(){e("cancel")}function p(){e("updated",a)}return(d,u)=>(f(),w(o(B),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:n},{extra:s(()=>[l(o($),null,{default:s(()=>[l(o(h),{onClick:n},{default:s(()=>[g("Cancel")]),_:1}),l(o(h),{type:"primary",onClick:p},{default:s(()=>[g("Submit")]),_:1})]),_:1})]),default:s(()=>[l(o(S),{model:a,layout:"vertical"},{default:s(()=>[l(o(v),{key:"email",label:"Email"},{default:s(()=>[l(o(E),{value:t.email,disabled:""},null,8,["value"])]),_:1}),l(o(v),{key:"role",label:"Role"},{default:s(()=>[l(o(j),{value:a.roles,"onUpdate:value":u[0]||(u[0]=C=>a.roles=C),mode:"multiple",options:o(N)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Ie=x({__name:"Users",setup(r){const t=V().params.projectId,a=G({type:"none"}),n=()=>{a.value.type="none"},p=()=>{a.value.type="new"},d=i=>{a.value={type:"edit",user:i}},u=async i=>{try{await y.create(t,i),n(),k()}catch(c){c instanceof Error&&A("Create Error",c.message)}},C=async i=>{try{if(a.value.type!=="edit")return;a.value.user.roles=i.roles,await a.value.user.change(i),n(),k()}catch(c){c instanceof Error&&A("Update Error",c.message)}},{loading:P,result:D,refetch:k}=K(()=>y.list(t,100,0)),F=L(()=>{var i,c;return{columns:[{name:"Email"},{name:"Roles"},{name:"Actions",align:"right"}],rows:(c=(i=D.value)==null?void 0:i.map(m=>({key:m.email,cells:[{text:m.email},{text:m.roles.join(", ")},{text:"",actions:[{icon:z,label:"Edit",onClick:()=>d(m)},{icon:J,label:"Delete",onClick:async()=>{await m.delete(),k()}}]}]})))!=null?c:[]}});return(i,c)=>(f(),O(T,null,[l(Q,{"entity-name":"users",loading:o(P),title:"Application users",description:"List all application users.","empty-title":"No users yet",table:F.value,"create-button-text":"Add users",onCreate:p},null,8,["loading","table"]),a.value.type==="new"?(f(),w(Y,{key:0,onCancel:n,onCreated:u})):a.value.type==="edit"?(f(),w(Z,{key:1,email:a.value.user.email,roles:a.value.user.roles,onUpdated:C,onCancel:n},null,8,["email","roles"])):H("",!0)],64))}});export{Ie as default};
//# sourceMappingURL=Users.541de45a.js.map
