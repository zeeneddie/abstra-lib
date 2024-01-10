var F=Object.defineProperty;var O=(l,e,a)=>e in l?F(l,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[e]=a;var k=(l,e,a)=>(O(l,typeof e!="symbol"?e+"":e,a),a);import{d as U,F as P,b as h,c as w,w as n,f as s,u as r,bO as _,aq as v,cC as R,bH as E,ad as $,eB as V,r as z,G,ev as Q,ex as H,bq as T}from"./outputWidgets.bf79c6b8.js";import{u as W,o as J}from"./icons.cf4b109d.js";import{a as K}from"./asyncComputed.42c5da60.js";import{z as o}from"./index.cf4c23b9.js";import{A as S}from"./FormItem.56138d9e.js";import{F as B}from"./Form.b42a9c68.js";import{A as D}from"./index.41603db6.js";import"./authorManager.09a2317d.js";import{C as g}from"./gateway.8adee4a2.js";import"./index.1e489b02.js";import{C as X}from"./CrudView.255ead71.js";import{p as x}from"./popupNotifcation.16c391a1.js";import"./hasIn.36ac051b.js";import"./isNumeric.75337b1e.js";import"./record.fe4e890f.js";import"./pubsub.8fba7f4f.js";import"./Title.1751190b.js";import"./Text.db5ef3fa.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.fc0b8e07.js";import"./router.08175d4d.js";import"./index.e5b14e39.js";import"./url.379334d1.js";import"./index.934b837d.js";import"./index.bcfb1cc8.js";import"./index.9404929f.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[e]="15207a9e-ed45-4223-ad10-df2f87b0e731",l._sentryDebugIdIdentifier="sentry-dbid-15207a9e-ed45-4223-ad10-df2f87b0e731")}catch{}})();class Y{constructor(){k(this,"urlPath","users")}async create(e,a){return g.post(`projects/${e}/${this.urlPath}`,a)}async delete(e,a){await g.delete(`projects/${e}/${this.urlPath}/${a}`)}async list(e,{limit:a,offset:t}){const i=new URLSearchParams({limit:a.toString(),offset:t.toString()});return g.get(`projects/${e}/${this.urlPath}?${i.toString()}`)}async update(e,a,t){return g.patch(`projects/${e}/${this.urlPath}/${a}`,t)}}const b=new Y;class y{constructor(e){this.dto=e}static async list(e,a,t){return(await b.list(e,{limit:a,offset:t})).map(u=>new y(u))}static async create(e,a){const t=await b.create(e,a);return new y(t)}async delete(){await b.delete(this.projectId,this.id)}async change(e){this.roles=e.roles,await b.update(this.projectId,this.id,e)}get id(){return this.dto.id}get email(){return this.dto.email}get projectId(){return this.dto.projectId}get roles(){return this.dto.roles}set roles(e){this.dto.roles=e}}const Z=o.string(),M=o.string();o.object({authorId:Z,projectId:M});const ee=o.string(),N=o.string(),te=["workflow_viewer"],oe=o.literal("workflow_viewer"),A=o.array(oe),ae=o.string(),re=o.string(),se=o.object({id:ee,email:N,roles:A,projectId:ae,createdAt:re}),ne=o.string(),le=o.string();o.object({url:ne,buildId:le});const ie=A;o.object({roles:ie});const ce=o.number(),me=o.number();o.object({offset:ce,limit:me});const ue=se;o.array(ue);const de=N,pe=A;o.object({email:de,roles:pe});const fe=o.string(),Ce=o.string(),he=o.string(),ye=o.string(),ge=o.null(),be=o.string(),we=o.union([ge,be]);o.object({id:fe,name:Ce,subdomain:he,organizationId:ye,customDomain:we});const _e=U({__name:"NewUser",emits:["created","cancel"],setup(l,{emit:e}){const a=te.map(p=>({label:p,value:p})),t=P({email:"",roles:[]});function i(){e("cancel")}function u(){!t.email||e("created",t)}return(p,f)=>(h(),w(r(D),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:i},{extra:n(()=>[s(r(R),null,{default:n(()=>[s(r(_),{onClick:i},{default:n(()=>[v("Cancel")]),_:1}),s(r(_),{type:"primary",onClick:u},{default:n(()=>[v("Submit")]),_:1})]),_:1})]),default:n(()=>[s(r(B),{model:t,layout:"vertical"},{default:n(()=>[s(r(S),{key:"email",label:"Email",required:!0},{default:n(()=>[s(r(E),{value:t.email,"onUpdate:value":f[0]||(f[0]=d=>t.email=d)},null,8,["value"])]),_:1}),s(r(S),{key:"role",label:"Role"},{default:n(()=>[s(r($),{value:t.roles,"onUpdate:value":f[1]||(f[1]=d=>t.roles=d),mode:"multiple",options:r(a)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),ve=U({__name:"UpdateUser",props:{roles:{},email:{}},emits:["updated","cancel"],setup(l,{emit:e}){const a=l,t=[{value:"workflow_viewer",label:"Workflow viewer"}],i=P({roles:a.roles});function u(){e("cancel")}function p(){e("updated",i)}return(f,d)=>(h(),w(r(D),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:u},{extra:n(()=>[s(r(R),null,{default:n(()=>[s(r(_),{onClick:u},{default:n(()=>[v("Cancel")]),_:1}),s(r(_),{type:"primary",onClick:p},{default:n(()=>[v("Submit")]),_:1})]),_:1})]),default:n(()=>[s(r(B),{model:i,layout:"vertical"},{default:n(()=>[s(r(S),{key:"email",label:"Email"},{default:n(()=>[s(r(E),{value:a.email,disabled:""},null,8,["value"])]),_:1}),s(r(S),{key:"role",label:"Role"},{default:n(()=>[s(r($),{value:i.roles,"onUpdate:value":d[0]||(d[0]=I=>i.roles=I),mode:"multiple",options:t},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Ke=U({__name:"Users",setup(l){const a=V().params.projectId,t=z({type:"none"}),i=()=>{t.value.type="none"},u=()=>{t.value.type="new"},p=c=>{t.value={type:"edit",user:c}},f=async c=>{try{await y.create(a,c),i(),j()}catch(m){m instanceof Error&&x("Create Error",m.message)}},d=async c=>{try{if(t.value.type!=="edit")return;t.value.user.roles=c.roles,await t.value.user.change(c),i(),j()}catch(m){m instanceof Error&&x("Update Error",m.message)}},{loading:I,result:q,refetch:j}=K(()=>y.list(a,100,0)),L=G(()=>{var c,m;return{columns:[{name:"Email"},{name:"Roles"},{name:"Actions",align:"right"}],rows:(m=(c=q.value)==null?void 0:c.map(C=>({key:C.email,cells:[{text:C.email},{text:C.roles.join(", ")},{text:"",actions:[{icon:W,label:"Edit",onClick:()=>p(C)},{icon:J,label:"Delete",onClick:async()=>{await C.delete(),j()}}]}]})))!=null?m:[]}});return(c,m)=>(h(),Q(T,null,[s(X,{"entity-name":"users",loading:r(I),title:"Application users",description:"List all application users.","empty-title":"No users yet",table:L.value,"create-button-text":"Add users",onCreate:u},null,8,["loading","table"]),t.value.type==="new"?(h(),w(_e,{key:0,onCancel:i,onCreated:f})):t.value.type==="edit"?(h(),w(ve,{key:1,email:t.value.user.email,roles:t.value.user.roles,onUpdated:d,onCancel:i},null,8,["email","roles"])):H("",!0)],64))}});export{Ke as default};
//# sourceMappingURL=Users.493bd82b.js.map
