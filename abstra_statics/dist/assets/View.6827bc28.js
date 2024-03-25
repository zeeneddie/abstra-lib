var ue=Object.defineProperty;var pe=(i,e,t)=>e in i?ue(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var $=(i,e,t)=>(pe(i,typeof e!="symbol"?e+"":e,t),t);import{d as C,G as S,b as m,c as g,w as l,u as o,f as r,bG as _,ar as f,cE as P,bz as O,ae as H,H as Q,ev as W,eC as me,eD as ye,aD as X,cr as Z,r as A,e as fe,cB as L,aj as ge,eB as he,ex as j,dk as ve}from"./outputWidgets.7e6eb177.js";import{a as G}from"./asyncComputed.5c83bb8a.js";import{A as b,F as N}from"./Form.f6e73dd6.js";import{A as B}from"./index.bd8cf264.js";import{C as M}from"./CrudView.93e6cce5.js";import{H as ee,i as te}from"./icons.42e022b7.js";import{A as we}from"./index.a964b97b.js";import{A as z}from"./Paragraph.a13a9f0d.js";import{C as v}from"./router.1fa38c42.js";import{p as k}from"./popupNotifcation.1c8d50aa.js";import"./index.0e1d2395.js";import{E as _e}from"./record.a100d067.js";import{a as K}from"./ant-design.3e571b9a.js";import{A as be}from"./Title.f948a676.js";import{A as q,T as Ce}from"./TabPane.31848b67.js";import"./hasIn.958b80f9.js";import"./isNumeric.75337b1e.js";import"./Modal.dcc2c9e3.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5e43f505.js";import"./url.577173aa.js";import"./index.d8062c86.js";import"./Text.497ac05f.js";import"./Base.fe1b5bdf.js";import"./Typography.9133b65d.js";import"./index.cf4c23b9.js";import"./pubsub.782b9d46.js";import"./index.22b3b986.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="f2807a66-d68c-490b-827f-bdaaa599e59a",i._sentryDebugIdIdentifier="sentry-dbid-f2807a66-d68c-490b-827f-bdaaa599e59a")}catch{}})();class ke{constructor(){$(this,"urlPath","users")}async create(e,t){return v.post(`projects/${e}/${this.urlPath}`,t)}async delete(e,t){await v.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e,{limit:t,offset:a}){const n={};t&&(n.limit=t.toString()),a&&(n.offset=a.toString());const s=new URLSearchParams(n);return v.get(`projects/${e}/${this.urlPath}?${s.toString()}`)}async update(e,t,a){return v.patch(`projects/${e}/${this.urlPath}/${t}`,a)}}const I=new ke;class E{constructor(e){this.dto=e}static async list(e,t,a){return(await I.list(e,{limit:t,offset:a})).map(s=>new E(s))}static async create(e,t){const a=await I.create(e,t);return new E(a)}async delete(){await I.delete(this.projectId,this.id)}async change(e){await I.update(this.projectId,this.id,e),e.roles&&(this.roles=e.roles),e.email&&(this.email=e.email)}get id(){return this.dto.id}get email(){return this.dto.email}set email(e){this.dto.email=e}get projectId(){return this.dto.projectId}get roles(){return this.dto.roles}set roles(e){this.dto.roles=e}}class Pe{constructor(){$(this,"urlPath","roles")}async create(e,t){return v.post(`projects/${e}/${this.urlPath}`,t)}async delete(e,t){await v.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e,{limit:t,offset:a}){const n={};t&&(n.limit=t.toString()),a&&(n.offset=a.toString());const s=new URLSearchParams(n);return v.get(`projects/${e}/${this.urlPath}?${s.toString()}`)}async update(e,t,a){return v.patch(`projects/${e}/${this.urlPath}/${t}`,a)}}const D=new Pe;class x{constructor(e){this.dto=e}static async list(e,t,a){return(await D.list(e,{limit:t,offset:a})).map(s=>new x(s))}static async create(e,t){const a=await D.create(e,t);return new x(a)}async delete(){await D.delete(this.projectId,this.id)}async change(e){await D.update(this.projectId,this.id,e),e.description&&(this.description=e.description)}get id(){return this.dto.id}get name(){return this.dto.name}get description(){return this.dto.description||""}set description(e){this.dto.description=e}get projectId(){return this.dto.projectId}}class Ue{constructor(){$(this,"urlPath","signup-policy")}async update(e,t){return v.patch(`projects/${e}/${this.urlPath}`,t)}async get(e){return v.get(`projects/${e}/${this.urlPath}`)}}const J=new Ue;class Y{constructor(e){$(this,"record");this.dto=e,this.record=_e.from(e)}static async get(e){const t=await J.get(e);return new Y(t)}async change(){const{emailPatterns:e}=this.record.changes;!e||(await J.update(this.projectId,{emailPatterns:e}),this.record.commit())}get id(){return this.record.get("id")}get projectId(){return this.record.get("projectId")}get emailPatterns(){return this.record.get("emailPatterns")}set emailPatterns(e){this.record.set("emailPatterns",e)}get hasChanges(){return this.record.hasChangesDeep("emailPatterns")}get strategy(){return this.dto.emailPatterns.length===0?"inviteOnly":this.dto.emailPatterns.length==1&&this.dto.emailPatterns[0]=="*"?"anyone":"patternOnly"}allowAnyone(){this.record.set("emailPatterns",["*"])}allowOnlyInvited(){this.record.set("emailPatterns",[])}}const $e=C({__name:"NewUser",props:{roleOptions:{}},emits:["created","cancel"],setup(i,{emit:e}){const a=i.roleOptions.map(p=>({label:p.name,value:p.name})),n=S({email:"",roles:[]});function s(){e("cancel")}function y(){!n.email||e("created",n)}return(p,c)=>(m(),g(o(B),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:s},{extra:l(()=>[r(o(P),null,{default:l(()=>[r(o(_),{onClick:s},{default:l(()=>[f("Cancel")]),_:1}),r(o(_),{type:"primary",onClick:y},{default:l(()=>[f("Submit")]),_:1})]),_:1})]),default:l(()=>[r(o(N),{model:n,layout:"vertical"},{default:l(()=>[r(o(b),{key:"email",label:"Email",required:!0},{default:l(()=>[r(o(O),{value:n.email,"onUpdate:value":c[0]||(c[0]=h=>n.email=h)},null,8,["value"])]),_:1}),r(o(b),{key:"role",label:"Role"},{default:l(()=>[r(o(H),{value:n.roles,"onUpdate:value":c[1]||(c[1]=h=>n.roles=h),mode:"multiple",options:o(a)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Ae=C({__name:"UpdateUser",props:{roleOptions:{},email:{},roles:{}},emits:["updated","cancel"],setup(i,{emit:e}){const t=i,a=t.roleOptions.map(p=>({label:p.name,value:p.name})),n=S({email:t.email,roles:t.roles});function s(){e("cancel")}function y(){e("updated",n)}return(p,c)=>(m(),g(o(B),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:s},{extra:l(()=>[r(o(P),null,{default:l(()=>[r(o(_),{onClick:s},{default:l(()=>[f("Cancel")]),_:1}),r(o(_),{type:"primary",onClick:y},{default:l(()=>[f("Submit")]),_:1})]),_:1})]),default:l(()=>[r(o(N),{model:n,layout:"vertical"},{default:l(()=>[r(o(b),{key:"email",label:"Email"},{default:l(()=>[r(o(O),{value:n.email,"onUpdate:value":c[0]||(c[0]=h=>n.email=h)},null,8,["value"])]),_:1}),r(o(b),{key:"role",label:"Role"},{default:l(()=>[r(o(H),{value:n.roles,"onUpdate:value":c[1]||(c[1]=h=>n.roles=h),mode:"multiple",options:o(a)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Ee=C({__name:"View",props:{loading:{type:Boolean},users:{},onCreate:{type:Function},onEdit:{type:Function},onDelete:{type:Function}},setup(i){const e=i,t=Q(()=>{var a;return{columns:[{name:"Email"},{name:"Roles"},{name:"",align:"right"}],rows:(a=e.users.map(n=>({key:n.email,cells:[{type:"text",text:n.email},{type:"slot",key:"roles",payload:{roles:n.roles}},{type:"actions",actions:[{icon:ee,label:"Edit",onClick:()=>e.onEdit(n)},{icon:te,label:"Delete",onClick:()=>e.onDelete(n)}]}]})))!=null?a:[]}});return(a,n)=>(m(),g(M,{"entity-name":"users",title:"",loading:a.loading,description:"List all app users.","empty-title":"No users yet",table:t.value,"create-button-text":"Add users",onCreate:a.onCreate},{roles:l(({payload:s})=>[(m(!0),W(X,null,me(s.roles,y=>(m(),g(o(we),{key:y,bordered:""},{default:l(()=>[f(ye(y),1)]),_:2},1024))),128))]),_:1},8,["loading","table","onCreate"]))}}),xe=C({__name:"NewRole",emits:["created","cancel"],setup(i,{emit:e}){const t=S({name:"",description:""});function a(){e("cancel")}function n(){!t.name||e("created",t)}return(s,y)=>(m(),g(o(B),{open:"",title:"New role",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:a},{extra:l(()=>[r(o(P),null,{default:l(()=>[r(o(_),{onClick:a},{default:l(()=>[f("Cancel")]),_:1}),r(o(_),{type:"primary",onClick:n},{default:l(()=>[f("Submit")]),_:1})]),_:1})]),default:l(()=>[r(o(N),{model:t,layout:"vertical"},{default:l(()=>[r(o(b),{key:"name",label:"Name",required:!0},{default:l(()=>[r(o(O),{value:t.name,"onUpdate:value":y[0]||(y[0]=p=>t.name=p)},null,8,["value"])]),_:1}),r(o(b),{key:"description",label:"Description"},{default:l(()=>[r(o(Z),{value:t.description,"onUpdate:value":y[1]||(y[1]=p=>t.description=p),placeholder:"Optional description",rows:3},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Re=C({__name:"UpdateRole",props:{name:{},description:{}},emits:["updated","cancel"],setup(i,{emit:e}){const t=i,a=S({description:t.description});function n(){e("cancel")}function s(){e("updated",a)}return(y,p)=>(m(),g(o(B),{open:"",title:"Update role",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:n},{extra:l(()=>[r(o(P),null,{default:l(()=>[r(o(_),{onClick:n},{default:l(()=>[f("Cancel")]),_:1}),r(o(_),{type:"primary",onClick:s},{default:l(()=>[f("Submit")]),_:1})]),_:1})]),default:l(()=>[r(o(N),{model:a,layout:"vertical"},{default:l(()=>[r(o(b),{key:"name",label:"Name"},{default:l(()=>[r(o(O),{value:t.name,disabled:""},null,8,["value"])]),_:1}),r(o(b),{key:"role",label:"Role"},{default:l(()=>[r(o(Z),{value:a.description,"onUpdate:value":p[0]||(p[0]=c=>a.description=c),placeholder:"Optional description",rows:3},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),je=C({__name:"View",props:{loading:{type:Boolean},roles:{},onCreate:{type:Function},onEdit:{type:Function},onDelete:{type:Function}},setup(i){const e=i,t=Q(()=>{var a;return{columns:[{name:"Name"},{name:"Description"},{name:"",align:"right"}],rows:(a=e.roles.map(n=>({key:n.id,cells:[{type:"text",text:n.name},{type:"text",text:n.description},{type:"actions",actions:[{icon:ee,label:"Edit",onClick:()=>e.onEdit(n)},{icon:te,label:"Delete",onClick:()=>e.onDelete(n)}]}]})))!=null?a:[]}});return(a,n)=>(m(),g(M,{"entity-name":"roles",loading:a.loading,title:"",description:"List all app roles.","empty-title":"No roles yet",table:t.value,"create-button-text":"Add roles",onCreate:a.onCreate},null,8,["loading","table","onCreate"]))}}),Ie={style:{padding:"30px"}},De=C({__name:"View",props:{signupPolicy:{},onSave:{type:Function}},emits:["update:signup-policy"],setup(i,{emit:e}){const t=i,a=A(t.signupPolicy.strategy),n=A([]),s=A([]),y=c=>{const h=c;n.value=h,s.value=h.map(F=>({label:F})),t.signupPolicy.emailPatterns=c,e("update:signup-policy",t.signupPolicy)},p=c=>{a.value=c,c==="anyone"&&t.signupPolicy.allowAnyone(),c==="inviteOnly"&&t.signupPolicy.allowOnlyInvited()};return(c,h)=>(m(),g(o(P),{direction:"vertical",style:{"padding-top":"8px"}},{default:l(()=>[r(o(z),null,{default:l(()=>[f(" Control which end users may sign-up to your app. ")]),_:1}),r(o(_),{disabled:!c.signupPolicy.hasChanges,type:"primary",onClick:c.onSave},{default:l(()=>[f(" Save changes ")]),_:1},8,["disabled","onClick"]),fe("div",Ie,[r(o(z),{strong:""},{default:l(()=>[f(" Allow self sign-up? ")]),_:1}),r(o(ge),{value:a.value,"onUpdate:value":p},{default:l(()=>[r(o(P),{direction:"vertical"},{default:l(()=>[r(o(L),{value:"inviteOnly"},{default:l(()=>[f("No, users must be added by me.")]),_:1}),r(o(P),null,{default:l(()=>[r(o(L),{value:"patternOnly"},{default:l(()=>[f("Yes, but only for users in")]),_:1}),r(o(H),{mode:"tags",value:n.value,style:{"min-width":"200px"},placeholder:"*@domain.com",disabled:a.value!=="patternOnly",options:s.value,"dropdown-match-select-width":"",open:!1,"onUpdate:value":y},null,8,["value","disabled","options"])]),_:1}),r(o(L),{value:"anyone"},{default:l(()=>[f("Yes, for anyone")]),_:1})]),_:1})]),_:1},8,["value"])])]),_:1}))}}),it=C({__name:"View",setup(i){const t=he().params.projectId,a=A({type:"initial"}),n=A("users"),s=()=>{a.value.type="initial"},y=()=>{a.value.type="creatingUser"},p=u=>{a.value={type:"editingUser",payload:u}},c=()=>{a.value.type="creatingRole"},h=u=>{a.value={type:"editingRole",payload:u}},{loading:F,result:ae,refetch:R}=G(()=>E.list(t,100,0)),{loading:oe,result:T,refetch:V}=G(()=>x.list(t,100,0)),{result:U}=G(()=>Y.get(t)),ne=async u=>{try{if(a.value.type!=="creatingUser")return;await E.create(t,u),s(),R()}catch(d){d instanceof Error&&k("Create Error",d.message)}},re=async u=>{try{if(a.value.type!=="editingUser")return;await a.value.payload.change(u),s(),R()}catch(d){d instanceof Error&&k("Update Error",d.message)}},le=async u=>{if(!!await K("Deleteing users revoke their access to your application in case they aren't allowed to self sign-up. Are you sure you want to continue?"))try{await u.delete(),R()}catch(w){w instanceof Error&&k("Delete Error",w.message)}},se=async u=>{try{if(a.value.type!=="creatingRole")return;await x.create(t,u),s(),V()}catch(d){d instanceof Error&&k("Create Error",d.message)}},ie=async u=>{try{if(a.value.type!=="editingRole")return;await a.value.payload.change(u),s(),V()}catch(d){d instanceof Error&&k("Update Error",d.message)}},ce=async()=>{var u;try{await((u=U.value)==null?void 0:u.change())}catch(d){d instanceof Error&&k("Update Error",d.message)}},de=async u=>{if(!!await K("Deleteing roles may revoke access to some features in your application. Are you sure you want to continue?"))try{await u.delete(),V(),R()}catch(w){w instanceof Error&&k("Delete Error",w.message)}};return(u,d)=>(m(),W(X,null,[r(o(be),null,{default:l(()=>[f("Access Control")]),_:1}),r(o(Ce),{"active-key":n.value,"onUpdate:activeKey":d[0]||(d[0]=w=>n.value=w)},{default:l(()=>[r(o(q),{key:"users",tab:"Users"}),r(o(q),{key:"roles",tab:"Roles"}),r(o(q),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),n.value==="users"?(m(),g(Ee,{key:0,loading:o(F),users:o(ae)||[],onCreate:y,onEdit:p,onDelete:le},null,8,["loading","users"])):j("",!0),n.value==="roles"?(m(),g(je,{key:1,loading:o(oe),roles:o(T)||[],onCreate:c,onEdit:h,onDelete:de},null,8,["loading","roles"])):j("",!0),n.value==="settings"&&o(U)?(m(),g(De,{key:2,"signup-policy":o(U),"onUpdate:signupPolicy":d[1]||(d[1]=w=>ve(U)?U.value=w:null),"on-save":ce},null,8,["signup-policy"])):j("",!0),a.value.type==="creatingUser"?(m(),g($e,{key:3,"role-options":o(T)||[],onCancel:s,onCreated:ne},null,8,["role-options"])):a.value.type==="editingUser"?(m(),g(Ae,{key:4,email:a.value.payload.email,roles:a.value.payload.roles||[],"role-options":o(T)||[],onUpdated:re,onCancel:s},null,8,["email","roles","role-options"])):a.value.type==="creatingRole"?(m(),g(xe,{key:5,onCancel:s,onCreated:se})):a.value.type==="editingRole"?(m(),g(Re,{key:6,name:a.value.payload.name,description:a.value.payload.description,onUpdated:ie,onCancel:s},null,8,["name","description"])):j("",!0)],64))}});export{it as default};
//# sourceMappingURL=View.6827bc28.js.map