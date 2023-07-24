var l=Object.defineProperty;var u=(a,t,r)=>t in a?l(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;var d=(a,t,r)=>(u(a,typeof t!="symbol"?t+"":t,r),r);import{A as w}from"./activeRecord.57c6bf02.js";import{d as y,w as p}from"./runnerData.65fd37db.js";function c(a){return Object.entries(a).reduce((t,[r,o])=>{var s;if(o.type in p){const e=o;if(!e.id)throw new Error("Widget must have an id");return{...t,[r]:{events:e.events,id:e.id,props:e.props,position:{rowStart:e.rowStart,rowEnd:e.rowEnd,colStart:e.colStart,colEnd:e.colEnd},type:e.type,variable:(s=e.variable)!=null?s:null}}}else{const e=o;return{...t,[r]:{id:e.id,props:e.props,row:e.row,height:e.height,type:e.type,slot:c(e.slot),order:e.order}}}},{})}function h(a){return Object.entries(a).reduce((t,[r,o])=>{var s;if(o.type in p){const e=o;return{...t,[r]:{id:e.id,name:e.id,type:e.type,colStart:e.position.colStart,colEnd:e.position.colEnd,rowStart:e.position.rowStart,rowEnd:e.position.rowEnd,props:e.props,events:e.events,variable:(s=e.variable)!=null?s:void 0}}}else{const e=o;return{...t,[r]:{id:e.id,type:e.type,row:e.row,height:e.height,order:0,props:e.props,slot:h(e.slot)}}}},{})}class g{async list(){return await(await fetch("/_editor/api/dashes")).json()}async create(){return await(await fetch("/_editor/api/dashes",{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async get(t){return await(await fetch(`/_editor/api/dashes/${t}`)).json()}async update(t,r){return await(await fetch(`/_editor/api/dashes/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json()}async delete(t){await fetch(`/_editor/api/dashes/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async duplicate(t){return await(await fetch(`/_editor/api/dashes/${t}/duplicate`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async addVariableToCode(t,r){await fetch(`/_editor/api/dashes/${t}/add-variable`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({variable:r})})}}const i=new g;class n{constructor(t){d(this,"record");this.record=new w(i,t,"path")}static async list(){return(await i.list()).map(r=>new n(r))}static async create(){const t=await i.create();return new n(t)}static async get(t){const r=await i.get(t);return new n(r)}get path(){return this.record.get("path")}set path(t){this.record.set("path",t)}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get layout(){const t=this.record.get("layout");return{version:"0.2",props:t.props,slot:h(t.slot)}}set layout(t){if(t.version==="0.1")throw new Error("TODO: convert 0.1 to 0.2");const r={version:"0.2",props:t.props,slot:c(t.slot)};this.record.set("layout",r)}async save(){await this.record.save()}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(){return this.record.hasChanges()}async delete(){await i.delete(this.path)}async duplicate(){const t=await i.duplicate(this.path);return new n(t)}async addVariableToCode(t){await i.addVariableToCode(this.path,t)}get rootSlot(){if(this.layout.version==="0.1")throw new Error("TODO: convert 0.1 to 0.2");return this.layout.slot}makeRunnerData(t,r){var o,s;return{id:this.path,path:this.path,title:this.title,theme:t.theme,brandName:(o=t.brandName)!=null?o:null,logoUrl:(s=t.logoUrl)!=null?s:null,mainColor:t.mainColor,fontFamily:t.fontFamily,layout:y(r!=null?r:this.layout),idOrPath:this.path,workspaceName:"Untitled Workspace",sidebar:t.sidebar,runtimeType:"dash"}}get routeName(){return"dash"}}export{n as D};
//# sourceMappingURL=dashes.c5752781.js.map
