var i=Object.defineProperty;var c=(r,e,t)=>e in r?i(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var n=(r,e,t)=>(c(r,typeof e!="symbol"?e+"":e,t),t);import{D as d,a as l,b as h,m as p}from"./runnerData.94af0e51.js";import{A as y}from"./record.dd66f38b.js";import"./outputWidgets.bb2f46e4.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="286331be-792c-4dd9-869c-e7ff1635ac96",r._sentryDebugIdIdentifier="sentry-dbid-286331be-792c-4dd9-869c-e7ff1635ac96")}catch{}})();class f{async get(){return await(await fetch("/_editor/api/workspace",{method:"GET",headers:{"Content-Type":"application/json"}})).json()}async update(e,t){return await(await fetch("/_editor/api/workspace",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async create(e){throw new Error("Not implemented")}async openFile(e){await fetch("/_editor/api/workspace/open-file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:e})})}async initFile(e,t){await fetch("/_editor/api/workspace/init-file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:e,type:t})})}async checkFile(e){const t=await fetch(`/_editor/api/workspace/check-file?path=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error("Failed to check file");return await t.json()}async readFile(e){const t=await fetch(`/_editor/api/workspace/read-file?file=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return t.status===404?null:await t.text()}async deploy(){if(!(await fetch("/_editor/api/workspace/deploy",{method:"POST",headers:{"Content-Type":"application/json"}})).ok)throw new Error("Failed to deploy")}}const o=new f;class a{constructor(e){n(this,"record");this.record=y.create(o,e)}static async get(){const e=await o.get();return new a(e)}static from(e){return new a(e)}get brandName(){var e;return(e=this.record.get("brand_name"))!=null?e:""}set brandName(e){this.record.set("brand_name",e)}get fontColor(){var e;return(e=this.record.get("font_color"))!=null?e:"#000000"}set fontColor(e){this.record.set("font_color",e)}get logoUrl(){var e;return(e=this.record.get("logo_url"))!=null?e:""}set logoUrl(e){this.record.set("logo_url",e)}get mainColor(){var e;return(e=this.record.get("main_color"))!=null?e:d}set mainColor(e){this.record.set("main_color",e)}get fontFamily(){var e;return(e=this.record.get("font_family"))!=null?e:l}set fontFamily(e){this.record.set("font_family",e)}get theme(){var e;return(e=this.record.get("theme"))!=null?e:h}set theme(e){this.record.set("theme",e)}async save(){return this.record.save()}hasChanges(){return this.record.hasChanges()}async openFile(e){await o.openFile(e)}async initFile(e,t){await o.initFile(e,t)}static async checkFile(e){return o.checkFile(e)}async readFile(e){return o.readFile(e)}static async deploy(){return o.deploy()}get sidebar(){var e;return(e=this.record.get("sidebar"))!=null?e:[]}set sidebar(e){this.record.set("sidebar",e)}makeRunnerData(){return{sidebar:this.sidebar,brandName:this.brandName,fontFamily:this.fontFamily,logoUrl:p("logo",this.logoUrl,"player"),mainColor:this.mainColor,theme:this.theme}}}export{a as W};
//# sourceMappingURL=workspaces.18464cbe.js.map