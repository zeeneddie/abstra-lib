var de=Object.defineProperty;var pe=(i,e,t)=>e in i?de(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var A=(i,e,t)=>(pe(i,typeof e!="symbol"?e+"":e,t),t);import{d as P,G as N,b as m,c as h,w as l,u as n,f as r,bF as _,aq as g,cD as U,by as B,ad as H,H as W,eP as X,eu as Z,eC as me,eE as ye,aC as M,cq as ee,r as E,e as fe,cA as G,ai as ge,eB as he,ew as O,dj as ve}from"./outputWidgets.36438843.js";import{a as q}from"./asyncComputed.337ea25d.js";import{A as C,F}from"./Form.89631493.js";import{A as T}from"./index.0d945e93.js";import{C as te}from"./CrudView.9ec0615c.js";import{G as ae}from"./PhPencil.vue.579176a6.js";import{A as we}from"./index.6dc92ff0.js";import{A as z}from"./Paragraph.db54cd0a.js";import{C as v}from"./router.dee1064a.js";import{p as k}from"./popupNotifcation.a4e64d79.js";import"./index.ec4ce82c.js";import{E as _e}from"./record.84099288.js";import{a as J}from"./ant-design.ae109f6e.js";import{A as be}from"./Title.06965b70.js";import{A as Y,T as Ce}from"./TabPane.3879967a.js";import"./hasIn.0e346df9.js";import"./isNumeric.75337b1e.js";import"./Modal.bc5706c4.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6a8a8129.js";import"./url.5c79ed51.js";import"./index.173d5349.js";import"./Text.0a4c76ae.js";import"./index.cf4c23b9.js";import"./pubsub.0ad28dde.js";import"./index.c7e21684.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="9e085b9a-6e8c-4343-bd21-a59de3ad562f",i._sentryDebugIdIdentifier="sentry-dbid-9e085b9a-6e8c-4343-bd21-a59de3ad562f")}catch{}})();class Pe{constructor(){A(this,"urlPath","users")}async create(e,t){return v.post(`projects/${e}/${this.urlPath}`,t)}async delete(e,t){await v.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e,{limit:t,offset:a}){const o={};t&&(o.limit=t.toString()),a&&(o.offset=a.toString());const s=new URLSearchParams(o);return v.get(`projects/${e}/${this.urlPath}?${s.toString()}`)}async update(e,t,a){return v.patch(`projects/${e}/${this.urlPath}/${t}`,a)}}const D=new Pe;class x{constructor(e){this.dto=e}static async list(e,t,a){return(await D.list(e,{limit:t,offset:a})).map(s=>new x(s))}static async create(e,t){const a=await D.create(e,t);return new x(a)}async delete(){await D.delete(this.projectId,this.id)}async change(e){await D.update(this.projectId,this.id,e),e.roles&&(this.roles=e.roles),e.email&&(this.email=e.email)}get id(){return this.dto.id}get email(){return this.dto.email}set email(e){this.dto.email=e}get projectId(){return this.dto.projectId}get roles(){return this.dto.roles}set roles(e){this.dto.roles=e}}class ke{constructor(){A(this,"urlPath","roles")}async create(e,t){return v.post(`projects/${e}/${this.urlPath}`,t)}async delete(e,t){await v.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e,{limit:t,offset:a}){const o={};t&&(o.limit=t.toString()),a&&(o.offset=a.toString());const s=new URLSearchParams(o);return v.get(`projects/${e}/${this.urlPath}?${s.toString()}`)}async update(e,t,a){return v.patch(`projects/${e}/${this.urlPath}/${t}`,a)}}const S=new ke;class R{constructor(e){this.dto=e}static async list(e,t,a){return(await S.list(e,{limit:t,offset:a})).map(s=>new R(s))}static async create(e,t){const a=await S.create(e,t);return new R(a)}async delete(){await S.delete(this.projectId,this.id)}async change(e){await S.update(this.projectId,this.id,e),e.description&&(this.description=e.description)}get id(){return this.dto.id}get name(){return this.dto.name}get description(){return this.dto.description||""}set description(e){this.dto.description=e}get projectId(){return this.dto.projectId}}class Ue{constructor(){A(this,"urlPath","signup-policy")}async update(e,t){return v.patch(`projects/${e}/${this.urlPath}`,t)}async get(e){return v.get(`projects/${e}/${this.urlPath}`)}}const Q=new Ue;class K{constructor(e){A(this,"record");this.dto=e,this.record=_e.from(e)}static async get(e){const t=await Q.get(e);return new K(t)}async change(){const{emailPatterns:e}=this.record.changes;!e||(await Q.update(this.projectId,{emailPatterns:e}),this.record.commit())}get id(){return this.record.get("id")}get projectId(){return this.record.get("projectId")}get emailPatterns(){return this.record.get("emailPatterns")}set emailPatterns(e){this.record.set("emailPatterns",e)}get hasChanges(){return this.record.hasChangesDeep("emailPatterns")}get strategy(){return this.dto.emailPatterns.length===0?"inviteOnly":this.dto.emailPatterns.length==1&&this.dto.emailPatterns[0]=="*"?"anyone":"patternOnly"}allowAnyone(){this.record.set("emailPatterns",["*"])}allowOnlyInvited(){this.record.set("emailPatterns",[])}}const $e=P({__name:"NewUser",props:{roleOptions:{}},emits:["created","cancel"],setup(i,{emit:e}){const a=i.roleOptions.map(p=>({label:p.name,value:p.name})),o=N({email:"",roles:[]});function s(){e("cancel")}function y(){!o.email||e("created",o)}return(p,f)=>(m(),h(n(T),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:s},{extra:l(()=>[r(n(U),null,{default:l(()=>[r(n(_),{onClick:s},{default:l(()=>[g("Cancel")]),_:1}),r(n(_),{type:"primary",onClick:y},{default:l(()=>[g("Submit")]),_:1})]),_:1})]),default:l(()=>[r(n(F),{model:o,layout:"vertical"},{default:l(()=>[r(n(C),{key:"email",label:"Email",required:!0},{default:l(()=>[r(n(B),{value:o.email,"onUpdate:value":f[0]||(f[0]=c=>o.email=c)},null,8,["value"])]),_:1}),r(n(C),{key:"role",label:"Role"},{default:l(()=>[r(n(H),{value:o.roles,"onUpdate:value":f[1]||(f[1]=c=>o.roles=c),mode:"multiple",options:n(a)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Ae=P({__name:"UpdateUser",props:{roleOptions:{},email:{},roles:{}},emits:["updated","cancel"],setup(i,{emit:e}){const t=i,a=t.roleOptions.map(p=>({label:p.name,value:p.name})),o=N({email:t.email,roles:t.roles});function s(){e("cancel")}function y(){e("updated",o)}return(p,f)=>(m(),h(n(T),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:s},{extra:l(()=>[r(n(U),null,{default:l(()=>[r(n(_),{onClick:s},{default:l(()=>[g("Cancel")]),_:1}),r(n(_),{type:"primary",onClick:y},{default:l(()=>[g("Submit")]),_:1})]),_:1})]),default:l(()=>[r(n(F),{model:o,layout:"vertical"},{default:l(()=>[r(n(C),{key:"email",label:"Email"},{default:l(()=>[r(n(B),{value:o.email,"onUpdate:value":f[0]||(f[0]=c=>o.email=c)},null,8,["value"])]),_:1}),r(n(C),{key:"role",label:"Role"},{default:l(()=>[r(n(H),{value:o.roles,"onUpdate:value":f[1]||(f[1]=c=>o.roles=c),mode:"multiple",options:n(a)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Ee=P({__name:"View",props:{loading:{type:Boolean},users:{},onCreate:{type:Function},onEdit:{type:Function},onDelete:{type:Function}},setup(i){const e=i,t=W(()=>{var a;return{columns:[{name:"Email"},{name:"Roles"},{name:"",align:"right"}],rows:(a=e.users.map(o=>({key:o.email,cells:[{type:"text",text:o.email},{type:"slot",key:"roles",payload:{roles:o.roles}},{type:"actions",actions:[{icon:ae,label:"Edit",onClick:()=>e.onEdit(o)},{icon:X,label:"Delete",onClick:()=>e.onDelete(o)}]}]})))!=null?a:[]}});return(a,o)=>(m(),h(te,{"entity-name":"users",title:"",loading:a.loading,description:"List all app users.","empty-title":"No users yet",table:t.value,"create-button-text":"Add users",onCreate:a.onCreate},{roles:l(({payload:s})=>[(m(!0),Z(M,null,me(s.roles,y=>(m(),h(n(we),{key:y,bordered:""},{default:l(()=>[g(ye(y),1)]),_:2},1024))),128))]),_:1},8,["loading","table","onCreate"]))}}),xe=P({__name:"NewRole",emits:["created","cancel"],setup(i,{emit:e}){const t=N({name:"",description:""});function a(){e("cancel")}function o(){!t.name||e("created",t)}return(s,y)=>(m(),h(n(T),{open:"",title:"New role",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:a},{extra:l(()=>[r(n(U),null,{default:l(()=>[r(n(_),{onClick:a},{default:l(()=>[g("Cancel")]),_:1}),r(n(_),{type:"primary",onClick:o},{default:l(()=>[g("Submit")]),_:1})]),_:1})]),default:l(()=>[r(n(F),{model:t,layout:"vertical"},{default:l(()=>[r(n(C),{key:"name",label:"Name",required:!0},{default:l(()=>[r(n(B),{value:t.name,"onUpdate:value":y[0]||(y[0]=p=>t.name=p)},null,8,["value"])]),_:1}),r(n(C),{key:"description",label:"Description"},{default:l(()=>[r(n(ee),{value:t.description,"onUpdate:value":y[1]||(y[1]=p=>t.description=p),placeholder:"Optional description",rows:3},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Re=P({__name:"UpdateRole",props:{name:{},description:{}},emits:["updated","cancel"],setup(i,{emit:e}){const t=i,a=N({description:t.description});function o(){e("cancel")}function s(){e("updated",a)}return(y,p)=>(m(),h(n(T),{open:"",title:"Update role",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:o},{extra:l(()=>[r(n(U),null,{default:l(()=>[r(n(_),{onClick:o},{default:l(()=>[g("Cancel")]),_:1}),r(n(_),{type:"primary",onClick:s},{default:l(()=>[g("Submit")]),_:1})]),_:1})]),default:l(()=>[r(n(F),{model:a,layout:"vertical"},{default:l(()=>[r(n(C),{key:"name",label:"Name"},{default:l(()=>[r(n(B),{value:t.name,disabled:""},null,8,["value"])]),_:1}),r(n(C),{key:"role",label:"Role"},{default:l(()=>[r(n(ee),{value:a.description,"onUpdate:value":p[0]||(p[0]=f=>a.description=f),placeholder:"Optional description",rows:3},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),je=P({__name:"View",props:{loading:{type:Boolean},roles:{},onCreate:{type:Function},onEdit:{type:Function},onDelete:{type:Function}},setup(i){const e=i,t=W(()=>{var a;return{columns:[{name:"Name"},{name:"Description"},{name:"",align:"right"}],rows:(a=e.roles.map(o=>({key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:o.description},{type:"actions",actions:[{icon:ae,label:"Edit",onClick:()=>e.onEdit(o)},{icon:X,label:"Delete",onClick:()=>e.onDelete(o)}]}]})))!=null?a:[]}});return(a,o)=>(m(),h(te,{"entity-name":"roles",loading:a.loading,title:"",description:"List all app roles.","empty-title":"No roles yet",table:t.value,"create-button-text":"Add roles",onCreate:a.onCreate},null,8,["loading","table","onCreate"]))}}),Ie={style:{padding:"30px"}},Oe=P({__name:"View",props:{signupPolicy:{}},emits:["update:signup-policy","save"],setup(i,{emit:e}){const t=i,a=E(t.signupPolicy.strategy),o=E(t.signupPolicy.strategy==="patternOnly"?t.signupPolicy.emailPatterns:[]),s=E(t.signupPolicy.strategy==="patternOnly"?t.signupPolicy.emailPatterns.map(c=>({label:c})):[]),y=()=>{o.value=[],s.value=[]},p=c=>{const b=c;if(b.length===0){f("inviteOnly");return}o.value=b,s.value=b.map(j=>({label:j})),t.signupPolicy.emailPatterns=c,e("update:signup-policy",t.signupPolicy)},f=c=>{a.value=c,c!=="patternOnly"&&(c==="anyone"&&t.signupPolicy.allowAnyone(),c==="inviteOnly"&&t.signupPolicy.allowOnlyInvited(),y(),e("update:signup-policy",t.signupPolicy))};return(c,b)=>(m(),h(n(U),{direction:"vertical",style:{"padding-top":"8px"}},{default:l(()=>[r(n(z),null,{default:l(()=>[g(" Control which end users may sign-up to your app. ")]),_:1}),r(n(_),{disabled:!c.signupPolicy.hasChanges,type:"primary",onClick:b[0]||(b[0]=j=>e("save"))},{default:l(()=>[g(" Save changes ")]),_:1},8,["disabled"]),fe("div",Ie,[r(n(z),{strong:""},{default:l(()=>[g(" Allow self sign-up? ")]),_:1}),r(n(ge),{value:a.value,"onUpdate:value":f},{default:l(()=>[r(n(U),{direction:"vertical"},{default:l(()=>[r(n(G),{value:"inviteOnly"},{default:l(()=>[g("No, users must be added by me.")]),_:1}),r(n(U),null,{default:l(()=>[r(n(G),{value:"patternOnly"},{default:l(()=>[g("Yes, but only for users in")]),_:1}),r(n(H),{mode:"tags",value:o.value,style:{"min-width":"200px"},placeholder:"*@domain.com",disabled:a.value!=="patternOnly",options:s.value,"dropdown-match-select-width":"",open:!1,"onUpdate:value":p},null,8,["value","disabled","options"])]),_:1}),r(n(G),{value:"anyone"},{default:l(()=>[g("Yes, for anyone")]),_:1})]),_:1})]),_:1},8,["value"])])]),_:1}))}}),lt=P({__name:"View",setup(i){const t=he().params.projectId,a=E({type:"initial"}),o=E("users"),s=()=>{a.value.type="initial"},y=()=>{a.value.type="creatingUser"},p=d=>{a.value={type:"editingUser",payload:d}},f=()=>{a.value.type="creatingRole"},c=d=>{a.value={type:"editingRole",payload:d}},{loading:b,result:j,refetch:I}=q(()=>x.list(t,100,0)),{loading:ne,result:V,refetch:L}=q(()=>R.list(t,100,0)),{result:$}=q(()=>K.get(t)),oe=async d=>{try{if(a.value.type!=="creatingUser")return;await x.create(t,d),s(),I()}catch(u){u instanceof Error&&k("Create Error",u.message)}},re=async d=>{try{if(a.value.type!=="editingUser")return;await a.value.payload.change(d),s(),I()}catch(u){u instanceof Error&&k("Update Error",u.message)}},le=async d=>{if(!!await J("Deleteing users revoke their access to your application in case they aren't allowed to self sign-up. Are you sure you want to continue?"))try{await d.delete(),I()}catch(w){w instanceof Error&&k("Delete Error",w.message)}},se=async d=>{try{if(a.value.type!=="creatingRole")return;await R.create(t,d),s(),L()}catch(u){u instanceof Error&&k("Create Error",u.message)}},ie=async d=>{try{if(a.value.type!=="editingRole")return;await a.value.payload.change(d),s(),L()}catch(u){u instanceof Error&&k("Update Error",u.message)}},ce=async()=>{var d;try{await((d=$.value)==null?void 0:d.change())}catch(u){u instanceof Error&&k("Update Error",u.message)}},ue=async d=>{if(!!await J("Deleteing roles may revoke access to some features in your application. Are you sure you want to continue?"))try{await d.delete(),L(),I()}catch(w){w instanceof Error&&k("Delete Error",w.message)}};return(d,u)=>(m(),Z(M,null,[r(n(be),null,{default:l(()=>[g("Access Control")]),_:1}),r(n(Ce),{"active-key":o.value,"onUpdate:activeKey":u[0]||(u[0]=w=>o.value=w)},{default:l(()=>[r(n(Y),{key:"users",tab:"Users"}),r(n(Y),{key:"roles",tab:"Roles"}),r(n(Y),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),o.value==="users"?(m(),h(Ee,{key:0,loading:n(b),users:n(j)||[],onCreate:y,onEdit:p,onDelete:le},null,8,["loading","users"])):O("",!0),o.value==="roles"?(m(),h(je,{key:1,loading:n(ne),roles:n(V)||[],onCreate:f,onEdit:c,onDelete:ue},null,8,["loading","roles"])):O("",!0),o.value==="settings"&&n($)?(m(),h(Oe,{key:2,"signup-policy":n($),"onUpdate:signupPolicy":u[1]||(u[1]=w=>ve($)?$.value=w:null),onSave:ce},null,8,["signup-policy"])):O("",!0),a.value.type==="creatingUser"?(m(),h($e,{key:3,"role-options":n(V)||[],onCancel:s,onCreated:oe},null,8,["role-options"])):a.value.type==="editingUser"?(m(),h(Ae,{key:4,email:a.value.payload.email,roles:a.value.payload.roles||[],"role-options":n(V)||[],onUpdated:re,onCancel:s},null,8,["email","roles","role-options"])):a.value.type==="creatingRole"?(m(),h(xe,{key:5,onCancel:s,onCreated:se})):a.value.type==="editingRole"?(m(),h(Re,{key:6,name:a.value.payload.name,description:a.value.payload.description,onUpdated:ie,onCancel:s},null,8,["name","description"])):O("",!0)],64))}});export{lt as default};
//# sourceMappingURL=View.eb0e95b1.js.map
