import{d,o as u,G as c,b as p,et as g,f,u as b,ae as w}from"./outputWidgets.46ba2efb.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="2f0b33f1-ae1e-4897-81a8-e8d3c8aa82b9",s._sentryDebugIdIdentifier="sentry-dbid-2f0b33f1-ae1e-4897-81a8-e8d3c8aa82b9")}catch{}})();class y{async list(e){const a=new URLSearchParams({stage:e});return await(await fetch(`/_editor/api/stage_runs?${a}`)).json()}}const m=new y;class r{constructor(e){this.dto=e}static async list(e){return(await m.list(e)).map(n=>new r(n))}get id(){return this.dto.id}get data(){return this.dto.data}get assignee(){return this.dto.assignee}get stage(){return this.dto.stage}get status(){return this.dto.status}}const v=d({__name:"StageRunSelector",props:{path:{},optional:{type:Boolean},disabled:{type:Boolean}},emits:["select"],setup(s,{emit:e}){const a=s;u(async()=>{const i=await r.list(a.path);o.options=i.filter(t=>t.status==="waiting").map(t=>({value:t.id,label:t.id.split("-")[0]}))});const n=i=>{e("select",i)},o=c({options:[],loading:!1});return(i,t)=>(p(),g("div",null,[f(b(w),{value:o.stageRunId,"onUpdate:value":t[0]||(t[0]=l=>o.stageRunId=l),"filter-option":"","allow-clear":a.optional,style:{width:"100%"},placeholder:"Select task instance",options:o.options,disabled:a.disabled,"not-found-content":"There are no waiting task instances",onClear:t[1]||(t[1]=l=>n(null)),onSelect:t[2]||(t[2]=l=>n(l))},null,8,["value","allow-clear","options","disabled"])]))}});export{r as S,v as _};
//# sourceMappingURL=StageRunSelector.vue_vue_type_script_setup_true_lang.376de68e.js.map
