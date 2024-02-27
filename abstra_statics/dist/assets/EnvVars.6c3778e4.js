var _=Object.defineProperty;var j=(o,e,t)=>e in o?_(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var k=(o,e,t)=>(j(o,typeof e!="symbol"?e+"":e,t),t);import{d as x,eB as A,r as D,H as P,a as E,b as g,ev as U,f as u,u as c,w as m,a$ as B,c as N,ar as F,eD as H,bO as O,ex as S}from"./outputWidgets.1b9917d7.js";import{C as p}from"./router.ed0c43d6.js";import"./index.1731bd8a.js";import{i as T,H as G}from"./icons.cb6751d7.js";import{a as K}from"./asyncComputed.a675a47b.js";import{C as R}from"./CrudView.4c6cab89.js";import{A as q}from"./Form.96ed5311.js";import{A as z}from"./Text.a5f07fa9.js";import{M as J}from"./Modal.b0432274.js";import"./index.cf4c23b9.js";import"./record.8a2949c6.js";import"./pubsub.9df0f703.js";import"./Paragraph.8b003c5c.js";import"./Base.ad9b895d.js";import"./Typography.65838b86.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5a9868d0.js";import"./url.64ed745f.js";import"./index.c11bcc5f.js";import"./Title.0151225d.js";import"./index.42da6b91.js";import"./hasIn.5349e2f4.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="861f00ec-5813-42a8-9dcc-bd4e0768af55",o._sentryDebugIdIdentifier="sentry-dbid-861f00ec-5813-42a8-9dcc-bd4e0768af55")}catch{}})();class L{constructor(){k(this,"urlPath","env-vars")}async create(e){return p.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await p.delete(`projects/${e}/${this.urlPath}/${t}`)}async update(e,t,a){await p.patch(`projects/${e}/${this.urlPath}/${t}`,{value:a})}async list(e){return p.get(`projects/${e}/${this.urlPath}`)}async get(e){return p.get(`${this.urlPath}/${e}`)}}const d=new L;class l{constructor(e,t){this.projectId=e,this.dto=t}static async list(e){return(await d.list(e)).map(a=>new l(e,a))}static async create(e,t,a){const y=await d.create({projectId:e,name:t,value:a});return new l(e,y)}static async get(e,t){const a=await d.get(t);return new l(e,a)}get key(){return this.dto.name}get value(){return this.dto.value}async delete(){await d.delete(this.projectId,this.key)}async update(e){await d.update(this.projectId,this.key,e)}}const ve=x({__name:"EnvVars",setup(o){const t=A().params.projectId,a=D({type:"idle"}),{loading:y,result:f,refetch:v}=K(()=>l.list(t)),h=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function $({key:r,value:n}){await l.create(t,r,n),v()}function C(r){a.value={type:"update-value",key:r.key,newValue:""}}async function w(r){var n;if(a.value.type==="update-value"&&r){const{key:s,newValue:i}=a.value,b=(n=f.value)==null?void 0:n.find(V=>V.key===s);b&&await b.update(i)}a.value={type:"idle"}}const I=P(()=>{var r,n;return{columns:[{name:"Key"},{name:"",align:"right"}],rows:(n=(r=f.value)==null?void 0:r.map(s=>({key:s.key,cells:[{type:"text",text:s.key},{type:"actions",actions:[{icon:T,label:"Delete",async onClick(){await s.delete(),v()},dangerous:!0},{icon:G,label:"Update value",onClick(){C(s)}}]}]})))!=null?n:[]}});return(r,n)=>{const s=E("ant-form");return g(),U(B,null,[u(R,{"entity-name":"Env var",loading:c(y),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:I.value,"create-button-text":"Add Environment Variable",fields:h,onCreate:$},null,8,["loading","table"]),u(c(J),{open:a.value.type==="update-value",title:"Update value",onCancel:n[1]||(n[1]=i=>w(!1)),onOk:n[2]||(n[2]=i=>w(!0))},{default:m(()=>[a.value.type==="update-value"?(g(),N(s,{key:0,layout:"vertical"},{default:m(()=>[u(c(q),null,{default:m(()=>[u(c(z),null,{default:m(()=>[F(H(a.value.key),1)]),_:1}),u(c(O),{value:a.value.newValue,"onUpdate:value":n[0]||(n[0]=i=>a.value.newValue=i)},null,8,["value"])]),_:1})]),_:1})):S("",!0)]),_:1},8,["open"])],64)}}});export{ve as default};
//# sourceMappingURL=EnvVars.6c3778e4.js.map
