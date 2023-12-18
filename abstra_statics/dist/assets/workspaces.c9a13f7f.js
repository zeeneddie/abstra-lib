var i=Object.defineProperty;var c=(r,e,t)=>e in r?i(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var s=(r,e,t)=>(c(r,typeof e!="symbol"?e+"":e,t),t);import{A as d}from"./record.7d38c825.js";import{i as l}from"./url.2dba12d6.js";import"./outputWidgets.4dca5506.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="4f8af9ab-15f5-4887-959f-a8dea251a559",r._sentryDebugIdIdentifier="sentry-dbid-4f8af9ab-15f5-4887-959f-a8dea251a559")}catch{}})();function h(r,e,t){return e?l(e)?e:t==="player"?`/_assets/${r}`:`/_editor/api/assets/${e}`:null}class p{async get(){return await(await fetch("/_editor/api/workspace",{method:"GET",headers:{"Content-Type":"application/json"}})).json()}async update(e,t){return await(await fetch("/_editor/api/workspace",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async create(e){throw new Error("Not implemented")}async openFile(e){await fetch("/_editor/api/workspace/open-file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:e})})}async initFile(e,t){await fetch("/_editor/api/workspace/init-file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:e,type:t})})}async checkFile(e){const t=await fetch(`/_editor/api/workspace/check-file?path=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error("Failed to check file");return await t.json()}async deploy(){if(!(await fetch("/_editor/api/workspace/deploy",{method:"POST",headers:{"Content-Type":"application/json"}})).ok)throw new Error("Failed to deploy")}}const o=new p;class a{constructor(e){s(this,"record");this.record=d.create(o,e)}static async get(){const e=await o.get();return new a(e)}static from(e){return new a(e)}get brandName(){var e;return(e=this.record.get("brand_name"))!=null?e:""}set brandName(e){this.record.set("brand_name",e)}get fontColor(){var e;return(e=this.record.get("font_color"))!=null?e:"#000000"}set fontColor(e){this.record.set("font_color",e)}get logoUrl(){var e;return(e=this.record.get("logo_url"))!=null?e:""}set logoUrl(e){this.record.set("logo_url",e)}get mainColor(){var e;return(e=this.record.get("main_color"))!=null?e:"#000000"}set mainColor(e){this.record.set("main_color",e)}get fontFamily(){var e;return(e=this.record.get("font_family"))!=null?e:"Inter"}set fontFamily(e){this.record.set("font_family",e)}get theme(){var e;return(e=this.record.get("theme"))!=null?e:"#ffffff"}set theme(e){this.record.set("theme",e)}async save(){return this.record.save()}hasChanges(){return this.record.hasChanges()}async openFile(e){await o.openFile(e)}async initFile(e,t){await o.initFile(e,t)}static async checkFile(e){return o.checkFile(e)}static async deploy(){return o.deploy()}get sidebar(){var e;return(e=this.record.get("sidebar"))!=null?e:[]}set sidebar(e){this.record.set("sidebar",e)}makeRunnerData(){return{sidebar:this.sidebar,brandName:this.brandName,fontFamily:this.fontFamily,logoUrl:h("logo",this.logoUrl,"player"),mainColor:this.mainColor,theme:this.theme}}}export{a as W,h as m};
//# sourceMappingURL=workspaces.c9a13f7f.js.map