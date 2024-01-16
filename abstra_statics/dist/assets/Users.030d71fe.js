var B=Object.defineProperty;var V=(l,o,a)=>o in l?B(l,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[o]=a;var U=(l,o,a)=>(V(l,typeof o!="symbol"?o+"":o,a),a);import{d as x,F as D,b as y,c as f,w as i,f as r,u as n,bO as E,aq as O,cC as I,bH as A,ad as L,eB as J,r as W,G,ev as Q,ex as H,bq as K}from"./outputWidgets.781e41f9.js";import{u as X,o as Y}from"./icons.0ffc383b.js";import{a as Z}from"./asyncComputed.d06d5356.js";import{z as e}from"./index.cf4c23b9.js";import{A as w}from"./FormItem.341ebdb6.js";import{F as v}from"./Form.a1506234.js";import{A as T}from"./index.82ed657d.js";import{C as S}from"./authorManager.2805bec3.js";import"./index.fc2f40fb.js";import{C as ee}from"./CrudView.331f38ea.js";import{p as j}from"./popupNotifcation.aa17bce8.js";import"./hasIn.205b6afa.js";import"./isNumeric.75337b1e.js";import"./record.71f43d7d.js";import"./pubsub.2273fc34.js";import"./Title.bf1f8106.js";import"./Text.6168f33a.js";import"./Modal.3a32e945.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.942344e3.js";import"./router.2dba10c4.js";import"./index.db0f7a49.js";import"./url.a0d7eae0.js";import"./index.0ad8ad84.js";import"./index.574af34c.js";import"./index.b2c1bb4a.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="6fefbd40-1517-404f-9e0a-ecd80abfc875",l._sentryDebugIdIdentifier="sentry-dbid-6fefbd40-1517-404f-9e0a-ecd80abfc875")}catch{}})();class oe{constructor(){U(this,"urlPath","users")}async create(o,a){return S.post(`projects/${o}/${this.urlPath}`,a)}async delete(o,a){await S.delete(`projects/${o}/${this.urlPath}/${a}`)}async list(o,{limit:a,offset:t}){const s={};a&&(s.limit=a.toString()),t&&(s.offset=t.toString());const m=new URLSearchParams(s);return S.get(`projects/${o}/${this.urlPath}?${m.toString()}`)}async update(o,a,t){return S.patch(`projects/${o}/${this.urlPath}/${a}`,t)}}const h=new oe;class R{constructor(o){this.dto=o}static async list(o,a,t){return(await h.list(o,{limit:a,offset:t})).map(m=>new R(m))}static async create(o,a){const t=await h.create(o,a);return new R(t)}async delete(){await h.delete(this.projectId,this.id)}async change(o){this.roles=o.roles,await h.update(this.projectId,this.id,o)}get id(){return this.dto.id}get email(){return this.dto.email}get projectId(){return this.dto.projectId}get roles(){return this.dto.roles}set roles(o){this.dto.roles=o}}const te=e.boolean().default(!0),ae=e.boolean().default(!0),ne=e.boolean().default(!1),se=e.boolean().default(!0),re=e.boolean().default(!1);e.object({PROJECT_LIVE:te.optional(),ALLOW_RELEASE:ae.optional(),CONNECTORS_CONSOLE:ne.optional(),CONNECTORS_EDITOR:se.optional(),DUPLICATE_PROJECTS:re.optional()});const ie=e.string(),le=e.string(),me=e.string(),ce=e.string(),ue=e.null(),pe=e.string(),de=e.union([ue,pe]),Ce=e.string().regex(new RegExp("^[0-9]+m$")),ge=e.string().regex(new RegExp("^[0-9]+m$")),ye=e.string().regex(new RegExp("^[0-9]+Mi$")),Re=e.string().regex(new RegExp("^[0-9]+Mi$")),Se=e.string().regex(new RegExp("^[0-9]+$")),he=e.string().regex(new RegExp("^[0-9]+$")),fe=e.literal("shared"),Ee=e.object({requestsCPU:Ce.optional(),limitsCPU:ge.optional(),requestsMemory:ye.optional(),limitsMemory:Re.optional(),minReplicas:Se.optional(),timeoutSeconds:he.optional(),workerType:fe.optional()});e.object({id:ie,name:le,subdomain:me,organizationId:ce,customDomain:de.optional(),deploymentResources:Ee.optional()});const Oe=e.string().regex(new RegExp("^[0-9]+m$")),we=e.string().regex(new RegExp("^[0-9]+m$")),be=e.string().regex(new RegExp("^[0-9]+Mi$")),Pe=e.string().regex(new RegExp("^[0-9]+Mi$")),xe=e.string().regex(new RegExp("^[0-9]+$")),_e=e.string().regex(new RegExp("^[0-9]+$")),Ue=e.literal("shared");e.object({requestsCPU:Oe.optional(),limitsCPU:we.optional(),requestsMemory:be.optional(),limitsMemory:Pe.optional(),minReplicas:xe.optional(),timeoutSeconds:_e.optional(),workerType:Ue.optional()});const je=e.string(),F=e.string(),De=["workflow_viewer"],Ie=e.literal("workflow_viewer"),_=e.array(Ie),Ae=e.string(),Le=e.string(),ve=e.object({id:je,email:F,roles:_,projectId:Ae,createdAt:Le}),$=e.string(),N=e.string(),Te=e.boolean().default(!0),Fe=e.boolean().default(!0),$e=e.boolean().default(!1),Ne=e.boolean().default(!0),ke=e.boolean().default(!1),k=e.object({PROJECT_LIVE:Te,ALLOW_RELEASE:Fe,CONNECTORS_CONSOLE:$e,CONNECTORS_EDITOR:Ne,DUPLICATE_PROJECTS:ke}),ze=e.string().default("Free"),z=e.object({plan:ze}),Me=e.string().regex(new RegExp("^[0-9]+m$")),qe=e.string().regex(new RegExp("^[0-9]+m$")),Be=e.string().regex(new RegExp("^[0-9]+Mi$")),Ve=e.string().regex(new RegExp("^[0-9]+Mi$")),Je=e.string().regex(new RegExp("^[0-9]+$")),We=e.string().regex(new RegExp("^[0-9]+$")),Ge=e.literal("shared"),Qe=e.object({requestsCPU:Me.optional(),limitsCPU:qe.optional(),requestsMemory:Be.optional(),limitsMemory:Ve.optional(),minReplicas:Je.optional(),timeoutSeconds:We.optional(),workerType:Ge.optional()});e.object({id:$,name:N,featureFlags:k,billingMetadata:z,deploymentResources:Qe.optional()});const He=$,Ke=N,Xe=k,Ye=z;e.object({id:He,name:Ke,featureFlags:Xe,billingMetadata:Ye});const Ze=_;e.object({roles:Ze});const eo=e.number(),oo=e.number();e.object({offset:eo.optional(),limit:oo.optional()});const to=ve;e.array(to);const ao=F,no=_;e.object({email:ao,roles:no});const so=x({__name:"NewUser",emits:["created","cancel"],setup(l,{emit:o}){const a=De.map(d=>({label:d,value:d})),t=D({email:"",roles:[]});function s(){o("cancel")}function m(){!t.email||o("created",t)}return(d,C)=>(y(),f(n(T),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:s},{extra:i(()=>[r(n(I),null,{default:i(()=>[r(n(E),{onClick:s},{default:i(()=>[O("Cancel")]),_:1}),r(n(E),{type:"primary",onClick:m},{default:i(()=>[O("Submit")]),_:1})]),_:1})]),default:i(()=>[r(n(v),{model:t,layout:"vertical"},{default:i(()=>[r(n(w),{key:"email",label:"Email",required:!0},{default:i(()=>[r(n(A),{value:t.email,"onUpdate:value":C[0]||(C[0]=p=>t.email=p)},null,8,["value"])]),_:1}),r(n(w),{key:"role",label:"Role"},{default:i(()=>[r(n(L),{value:t.roles,"onUpdate:value":C[1]||(C[1]=p=>t.roles=p),mode:"multiple",options:n(a)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),ro=x({__name:"UpdateUser",props:{roles:{},email:{}},emits:["updated","cancel"],setup(l,{emit:o}){const a=l,t=[{value:"workflow_viewer",label:"Workflow viewer"}],s=D({roles:a.roles});function m(){o("cancel")}function d(){o("updated",s)}return(C,p)=>(y(),f(n(T),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:m},{extra:i(()=>[r(n(I),null,{default:i(()=>[r(n(E),{onClick:m},{default:i(()=>[O("Cancel")]),_:1}),r(n(E),{type:"primary",onClick:d},{default:i(()=>[O("Submit")]),_:1})]),_:1})]),default:i(()=>[r(n(v),{model:s,layout:"vertical"},{default:i(()=>[r(n(w),{key:"email",label:"Email"},{default:i(()=>[r(n(A),{value:a.email,disabled:""},null,8,["value"])]),_:1}),r(n(w),{key:"role",label:"Role"},{default:i(()=>[r(n(L),{value:s.roles,"onUpdate:value":p[0]||(p[0]=b=>s.roles=b),mode:"multiple",options:t},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),vo=x({__name:"Users",setup(l){const a=J().params.projectId,t=W({type:"none"}),s=()=>{t.value.type="none"},m=()=>{t.value.type="new"},d=c=>{t.value={type:"edit",user:c}},C=async c=>{try{await R.create(a,c),s(),P()}catch(u){u instanceof Error&&j("Create Error",u.message)}},p=async c=>{try{if(t.value.type!=="edit")return;t.value.user.roles=c.roles,await t.value.user.change(c),s(),P()}catch(u){u instanceof Error&&j("Update Error",u.message)}},{loading:b,result:M,refetch:P}=Z(()=>R.list(a,100,0)),q=G(()=>{var c,u;return{columns:[{name:"Email"},{name:"Roles"},{name:"Actions",align:"right"}],rows:(u=(c=M.value)==null?void 0:c.map(g=>({key:g.email,cells:[{text:g.email},{text:g.roles.join(", ")},{text:"",actions:[{icon:X,label:"Edit",onClick:()=>d(g)},{icon:Y,label:"Delete",onClick:async()=>{await g.delete(),P()}}]}]})))!=null?u:[]}});return(c,u)=>(y(),Q(K,null,[r(ee,{"entity-name":"users",loading:n(b),title:"Application users",description:"List all application users.","empty-title":"No users yet",table:q.value,"create-button-text":"Add users",onCreate:m},null,8,["loading","table"]),t.value.type==="new"?(y(),f(so,{key:0,onCancel:s,onCreated:C})):t.value.type==="edit"?(y(),f(ro,{key:1,email:t.value.user.email,roles:t.value.user.roles,onUpdated:p,onCancel:s},null,8,["email","roles"])):H("",!0)],64))}});export{vo as default};
//# sourceMappingURL=Users.030d71fe.js.map
