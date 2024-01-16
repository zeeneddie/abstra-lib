var g=Object.defineProperty;var m=(s,t,e)=>t in s?g(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var d=(s,t,e)=>(m(s,typeof t!="symbol"?t+"":t,e),e);import{A as l}from"./record.71f43d7d.js";import"./outputWidgets.781e41f9.js";import{n as u}from"./string.68e47d80.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="27c861b1-20f9-42c3-9d1a-5fc5d552316e",s._sentryDebugIdIdentifier="sentry-dbid-27c861b1-20f9-42c3-9d1a-5fc5d552316e")}catch{}})();class b{async list(){return await(await fetch("/_editor/api/hooks")).json()}async create(t,e,a){return await(await fetch("/_editor/api/hooks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,file:e,position:a})})).json()}async get(t){return await(await fetch(`/_editor/api/hooks/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/hooks/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t,e){const a=e?"?remove_file=true":"",r=`/_editor/api/hooks/${t}`+a;await fetch(r,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async test(t,e){const a=new URLSearchParams(e.query),r=await fetch(`/_editor/api/hooks/${t}/test?${a.toString()}`,{method:e.method,headers:{"Content-Type":"application/json",...e.headers},body:e.method==="GET"?void 0:e.body}),{status:h,headers:p,body:y,stderr:f,stdout:w}=await r.json();return{status:h,headers:p,body:y,stderr:f,stdout:w}}}const n=new b;class o{constructor(t){d(this,"record");this.record=l.create(n,t)}static async list(){return(await n.list()).map(e=>new o(e))}static async create(t,e,a){const r=await n.create(t,e,a);return new o(r)}static async get(t){const e=await n.get(t);return new o(e)}async delete(t){await n.delete(this.id,t)}async duplicate(){return this}async save(t){await this.record.save(t)}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(t){return this.record.hasChanges(t)}getInitialState(t){return this.record.getInitialState(t)}updateInitialState(t,e){this.record.updateInitialState(t,e)}get id(){return this.record.get("id")}get path(){return this.record.get("path")}set path(t){this.record.set("path",t)}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get codeContent(){return this.record.get("code_content")}set codeContent(t){this.record.set("code_content",t)}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}async test(t){return n.test(this.id,t)}get position(){const[t,e]=this.record.get("workflow_position");return{x:t,y:e,referential:"world"}}get isInitial(){return this.record.get("is_initial")}static from(t){return new o(t)}}class j{async list(){return await(await fetch("/_editor/api/jobs")).json()}async create(t,e,a){return await(await fetch("/_editor/api/jobs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,file:e,position:a})})).json()}async get(t){return await(await fetch(`/_editor/api/jobs/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/jobs/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t,e){const a=e?"?remove_file=true":"",r=`/_editor/api/jobs/${t}`+a;await fetch(r,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async test(t){return(await fetch(`/_editor/api/jobs/${t}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}}const i=new j;class c{constructor(t){d(this,"record");d(this,"isInitial",!0);this.record=l.create(i,t)}static async list(){return(await i.list()).map(e=>new c(e))}static async create(t,e,a){const r=await i.create(t,e,a);return new c(r)}static async get(t){const e=await i.get(t);return new c(e)}async delete(t){await i.delete(this.id,t)}async duplicate(){return this}async save(t){await this.record.save(t)}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(t){return this.record.hasChanges(t)}getInitialState(t){return this.record.getInitialState(t)}updateInitialState(t,e){this.record.updateInitialState(t,e)}get schedule(){return this.record.get("schedule")}set schedule(t){this.record.set("schedule",t)}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get codeContent(){return this.record.get("code_content")}set codeContent(t){this.record.set("code_content",t)}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}get id(){return this.record.get("id")}async test(){return i.test(this.id)}get position(){const[t,e]=this.record.get("workflow_position");return{x:t,y:e,referential:"world"}}static from(t){return new c(t)}}function C(s){return s.replace(/\.py$/,"").trim().length===0?{valid:!1,reason:"File name cannot be empty"}:s.length>255?{valid:!1,reason:"File name cannot be longer than 255 characters"}:s.includes("/")?{valid:!1,reason:"File name cannot contain slashes"}:s.endsWith(".py")?{valid:!0}:{valid:!1,reason:"File name must end with .py"}}function I(s){if(!C(s).valid)throw new Error("Invalid filename");const t=s.slice(0,-3);return u(t,!0,!0)+".py"}function $(s){return u(s,!0,!0)+".py"}export{o as H,c as J,$ as b,I as n,C as v};
//# sourceMappingURL=validations.4147655a.js.map
