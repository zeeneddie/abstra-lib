var _=Object.defineProperty;var j=(o,e,t)=>e in o?_(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var k=(o,e,t)=>(j(o,typeof e!="symbol"?e+"":e,t),t);import{d as x,eB as D,r as A,H as P,a as E,b as g,ev as U,f as u,u as p,w as m,aD as B,c as N,ar as F,eD as S,bz as T,ex as z}from"./outputWidgets.c8053a9d.js";import{C as d}from"./router.c5eb5658.js";import"./index.7b750cfc.js";import{i as G,I as H}from"./icons.9e4059c8.js";import{a as K}from"./asyncComputed.f7e207a4.js";import{C as O}from"./CrudView.81651cd0.js";import{A as R}from"./Form.034d9295.js";import{A as q}from"./Text.d464b589.js";import{M as J}from"./Modal.63744d77.js";import"./popupNotifcation.b87aeac6.js";import"./index.cf4c23b9.js";import"./record.c60a7475.js";import"./pubsub.231a79a7.js";import"./Paragraph.68b1de18.js";import"./Base.d9fc6eef.js";import"./Typography.e5f51e32.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f912e8a7.js";import"./url.d8c088a2.js";import"./index.5905e3dd.js";import"./Title.ed86be86.js";import"./index.b514db2b.js";import"./hasIn.7ae70fa0.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="bede878e-5d93-4e2d-8412-0e47de546961",o._sentryDebugIdIdentifier="sentry-dbid-bede878e-5d93-4e2d-8412-0e47de546961")}catch{}})();class L{constructor(){k(this,"urlPath","env-vars")}async create(e){return d.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await d.delete(`projects/${e}/${this.urlPath}/${t}`)}async update(e,t,a){await d.patch(`projects/${e}/${this.urlPath}/${t}`,{value:a})}async list(e){return d.get(`projects/${e}/${this.urlPath}`)}async get(e){return d.get(`${this.urlPath}/${e}`)}}const c=new L;class l{constructor(e,t){this.projectId=e,this.dto=t}static async list(e){return(await c.list(e)).map(a=>new l(e,a))}static async create(e,t,a){const y=await c.create({projectId:e,name:t,value:a});return new l(e,y)}static async get(e,t){const a=await c.get(t);return new l(e,a)}get key(){return this.dto.name}get value(){return this.dto.value}async delete(){await c.delete(this.projectId,this.key)}async update(e){await c.update(this.projectId,this.key,e)}}const we=x({__name:"EnvVars",setup(o){const t=D().params.projectId,a=A({type:"idle"}),{loading:y,result:f,refetch:v}=K(()=>l.list(t)),h=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function I({key:r,value:n}){await l.create(t,r,n),v()}function $(r){a.value={type:"update-value",key:r.key,newValue:""}}async function w(r){var n;if(a.value.type==="update-value"&&r){const{key:s,newValue:i}=a.value,b=(n=f.value)==null?void 0:n.find(V=>V.key===s);b&&await b.update(i)}a.value={type:"idle"}}const C=P(()=>{var r,n;return{columns:[{name:"Key"},{name:"",align:"right"}],rows:(n=(r=f.value)==null?void 0:r.map(s=>({key:s.key,cells:[{type:"text",text:s.key},{type:"actions",actions:[{icon:G,label:"Delete",async onClick(){await s.delete(),v()},dangerous:!0},{icon:H,label:"Update value",onClick(){$(s)}}]}]})))!=null?n:[]}});return(r,n)=>{const s=E("ant-form");return g(),U(B,null,[u(O,{"entity-name":"Env var",loading:p(y),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:C.value,"create-button-text":"Add Environment Variable",fields:h,onCreate:I},null,8,["loading","table"]),u(p(J),{open:a.value.type==="update-value",title:"Update value",onCancel:n[1]||(n[1]=i=>w(!1)),onOk:n[2]||(n[2]=i=>w(!0))},{default:m(()=>[a.value.type==="update-value"?(g(),N(s,{key:0,layout:"vertical"},{default:m(()=>[u(p(R),null,{default:m(()=>[u(p(q),null,{default:m(()=>[F(S(a.value.key),1)]),_:1}),u(p(T),{value:a.value.newValue,"onUpdate:value":n[0]||(n[0]=i=>a.value.newValue=i)},null,8,["value"])]),_:1})]),_:1})):z("",!0)]),_:1},8,["open"])],64)}}});export{we as default};
//# sourceMappingURL=EnvVars.a1a8be86.js.map
