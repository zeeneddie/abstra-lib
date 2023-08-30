var C=Object.defineProperty;var P=(a,e,t)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var f=(a,e,t)=>(P(a,typeof e!="symbol"?e+"":e,t),t);import{d as v,r as w,b,u as k,x,V as I,y as l,O as D,Q as S,R as j,t as M,K as $,L as B,c as N,e as A,A as K,F as V}from"./registerWidgets.f2346c28.js";import{a as E}from"./asyncComputed.359496c4.js";import{P as z}from"./project.9c7be520.js";import{C as g}from"./gateway.0dbb3444.js";import{M as F}from"./member.775a788d.js";import{A as O}from"./activeRecord.58d61804.js";import"./index.d7dbb0cd.js";import{C as W}from"./CrudView.4a4cb74a.js";import{M as Y}from"./Modal.c8190c49.js";import{q}from"./icons.97ac1ffb.js";import{f as G}from"./index.b048d0fb.js";import"./passwordlessManager.d65765fb.js";import"./pubsub.db6cb532.js";import"./DropdownMenu.eb76cccb.js";import"./LoadingIndicator.a57b851f.js";import"./lottie.016d1ff3.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="0326812e-3814-46e4-bca8-534233073caf",a._sentryDebugIdIdentifier="sentry-dbid-0326812e-3814-46e4-bca8-534233073caf")}catch{}})();class H{constructor(){f(this,"urlPath","api-keys")}async create({projectId:e,name:t}){return g.post(`projects/${e}/${this.urlPath}`,{name:t})}async delete(e,t){await g.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return g.get(`projects/${e}/${this.urlPath}`)}async get(){throw new Error("Not implemented")}async update(){throw new Error("Not implemented")}}const u=new H;class c{constructor(e){f(this,"record");this.record=O.create(u,e,"id")}static async list(e){return(await u.list(e)).map(n=>new c(n))}static async create(e){const t=await u.create(e);return new c(t)}static async delete(e,t){await u.delete(e,t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}async save(){await this.record.save()}get createdAt(){return new Date(this.record.get("createdAt"))}hasChanges(){return this.record.hasChanges()}get ownerId(){return this.record.get("createdBy")}get value(){var e;return(e=this.record.get("value"))!=null?e:null}}const L=a=>(S("data-v-3da8363c"),a=a(),j(),a),Q={class:"main-text"},R=L(()=>l("div",{class:"separator"},null,-1)),T=["value"],U=v({__name:"ApiKeyModal",emits:["delete"],setup(a,{expose:e}){const t=w(null),n=w(""),m={maxWidth:"350px",height:"unset",padding:"30px"},y={display:"flex",flexDirection:"column",alignItems:"center",color:"#414A58",justifyContent:"center",lineHeight:"22px",fontSize:"18px",textAlign:"center",borderBottom:"none",gap:"23px",fontWeight:"700",marginBottom:"17px"},d={color:"#6D7C93",fontSize:"14px",textAlign:"center",justifyContent:"space-around"},h=o=>{var s;n.value=o,(s=t==null?void 0:t.value)==null||s.open()},p=()=>{var o;return(o=t==null?void 0:t.value)==null?void 0:o.close()};return e({open:h,close:p}),(o,s)=>(b(),k(Y,{ref_key:"modalRef",ref:t,"container-style":m,"header-style":y,"content-style":d},{header:x(()=>[I(" API Key Created ")]),content:x(()=>[l("div",Q,[I(D("Your API key has been created. Please copy it and store it in a safe place. You will not be able to see it again.")+" ",1),R,l("input",{disabled:"",value:n.value},null,8,T),l("div",{class:"buttons"},[l("button",{class:"cancel",onClick:p},"Close")])])]),_:1},512))}});const J=M(U,[["__scopeId","data-v-3da8363c"]]),he=v({__name:"ApiKeys",setup(a){const e=[{key:"name",label:"API key name"}],n=$().params.projectId,{loading:m,result:y,refetch:d}=E(async()=>Promise.all([c.list(n),z.get(n).then(o=>F.list(o.organizationId))]).then(([o,s])=>o.map(r=>({apiKey:r,member:s.find(i=>i.authorId===r.ownerId)})))),h=async o=>{const s=await c.create({projectId:n,name:o.name});d(),s.value&&prompt("Copy this API key and paste it in the local editor to deploy your app:",s==null?void 0:s.value)},p=B(()=>{var o,s;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions"}],rows:(s=(o=y.value)==null?void 0:o.map(({apiKey:r,member:i})=>{var _;return{key:r.id,cells:[{text:r.name,classes:["title","centered"]},{text:G(r.createdAt,Date.now(),{addSuffix:!0}),classes:[]},{text:(_=i==null?void 0:i.email)!=null?_:"Unknown"},{classes:["centered"],text:"actions",actions:[{label:"Delete",icon:q,dangerous:!0,onClick:async()=>{await c.delete(n,r.id),d()}}]}]}}))!=null?s:[]}});return(o,s)=>(b(),N(V,null,[A(W,{"entity-name":"API key","create-button-text":"Create API Key",loading:K(m),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:p.value,fields:e,onCreate:h},null,8,["loading","table"]),A(J)],64))}});export{he as default};
//# sourceMappingURL=ApiKeys.8bd48f7c.js.map
