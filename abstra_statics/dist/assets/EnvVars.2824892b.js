var _=Object.defineProperty;var j=(o,e,t)=>e in o?_(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var k=(o,e,t)=>(j(o,typeof e!="symbol"?e+"":e,t),t);import{d as x,eB as D,r as A,H as P,a as E,b as g,ev as U,f as u,u as c,w as m,aD as B,c as N,ar as F,eD as H,bz as S,ex as T}from"./outputWidgets.33535317.js";import{C as d}from"./router.477783f4.js";import"./index.a405b124.js";import{i as z,H as G}from"./icons.3c082a53.js";import{a as K}from"./asyncComputed.eceaf3f4.js";import{C as O}from"./CrudView.418c1719.js";import{A as R}from"./Form.bb02d3a3.js";import{A as q}from"./Text.0d020666.js";import{M as J}from"./Modal.40f2d981.js";import"./popupNotifcation.ce5e5591.js";import"./index.cf4c23b9.js";import"./record.49cb918d.js";import"./pubsub.fa124b5f.js";import"./Paragraph.e5c0c444.js";import"./Base.abc79167.js";import"./Typography.6c9836cc.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b0a6885c.js";import"./url.807a6d7f.js";import"./index.aaedd1ff.js";import"./Title.55e2ce15.js";import"./index.dd98bcf9.js";import"./hasIn.0dff4f2d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="dc00b48c-2a1a-4abf-8dba-dc9b69d8ca0d",o._sentryDebugIdIdentifier="sentry-dbid-dc00b48c-2a1a-4abf-8dba-dc9b69d8ca0d")}catch{}})();class L{constructor(){k(this,"urlPath","env-vars")}async create(e){return d.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await d.delete(`projects/${e}/${this.urlPath}/${t}`)}async update(e,t,a){await d.patch(`projects/${e}/${this.urlPath}/${t}`,{value:a})}async list(e){return d.get(`projects/${e}/${this.urlPath}`)}async get(e){return d.get(`${this.urlPath}/${e}`)}}const p=new L;class l{constructor(e,t){this.projectId=e,this.dto=t}static async list(e){return(await p.list(e)).map(a=>new l(e,a))}static async create(e,t,a){const y=await p.create({projectId:e,name:t,value:a});return new l(e,y)}static async get(e,t){const a=await p.get(t);return new l(e,a)}get key(){return this.dto.name}get value(){return this.dto.value}async delete(){await p.delete(this.projectId,this.key)}async update(e){await p.update(this.projectId,this.key,e)}}const be=x({__name:"EnvVars",setup(o){const t=D().params.projectId,a=A({type:"idle"}),{loading:y,result:f,refetch:v}=K(()=>l.list(t)),h=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function $({key:r,value:n}){await l.create(t,r,n),v()}function C(r){a.value={type:"update-value",key:r.key,newValue:""}}async function b(r){var n;if(a.value.type==="update-value"&&r){const{key:s,newValue:i}=a.value,w=(n=f.value)==null?void 0:n.find(V=>V.key===s);w&&await w.update(i)}a.value={type:"idle"}}const I=P(()=>{var r,n;return{columns:[{name:"Key"},{name:"",align:"right"}],rows:(n=(r=f.value)==null?void 0:r.map(s=>({key:s.key,cells:[{type:"text",text:s.key},{type:"actions",actions:[{icon:z,label:"Delete",async onClick(){await s.delete(),v()},dangerous:!0},{icon:G,label:"Update value",onClick(){C(s)}}]}]})))!=null?n:[]}});return(r,n)=>{const s=E("ant-form");return g(),U(B,null,[u(O,{"entity-name":"Env var",loading:c(y),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:I.value,"create-button-text":"Add Environment Variable",fields:h,onCreate:$},null,8,["loading","table"]),u(c(J),{open:a.value.type==="update-value",title:"Update value",onCancel:n[1]||(n[1]=i=>b(!1)),onOk:n[2]||(n[2]=i=>b(!0))},{default:m(()=>[a.value.type==="update-value"?(g(),N(s,{key:0,layout:"vertical"},{default:m(()=>[u(c(R),null,{default:m(()=>[u(c(q),null,{default:m(()=>[F(H(a.value.key),1)]),_:1}),u(c(S),{value:a.value.newValue,"onUpdate:value":n[0]||(n[0]=i=>a.value.newValue=i)},null,8,["value"])]),_:1})]),_:1})):T("",!0)]),_:1},8,["open"])],64)}}});export{be as default};
//# sourceMappingURL=EnvVars.2824892b.js.map