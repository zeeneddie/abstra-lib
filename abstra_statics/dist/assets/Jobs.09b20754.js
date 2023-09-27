import{d as f,ex as y,H as _,b as J,c as g,u as h}from"./registerWidgets.5ceb46ef.js";import{e as k,a as w,b as C}from"./icons.b59fe784.js";import{a as x}from"./asyncComputed.fd157db2.js";import{J as l}from"./jobs.d7e56706.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.af549d55.js";import"./activeRecord.693e9703.js";import"./pubsub.451b7de0.js";import"./Modal.4e47c5c5.js";import"./Title.d4cb8bc4.js";import"./index.1a41b32a.js";import"./index.f7704414.js";import"./index.4fdcdf65.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="c95308b4-bb26-4930-92ed-af0d28616b21",n._sentryDebugIdIdentifier="sentry-dbid-c95308b4-bb26-4930-92ed-af0d28616b21")}catch{}})();const M=f({__name:"Jobs",setup(n){const i=y(),{loading:s,result:a,refetch:c}=x(()=>l.list()),d=({key:e})=>i.push({path:`/_editor/job/${encodeURIComponent(e)}`}),b=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await l.create();d({key:e.identifier})},p=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.delete()),c())},m=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",actions:[{icon:k,label:"Edit Job",onClick:d},{icon:w,label:"Duplicate",onClick:b},{icon:C,label:"Delete",onClick:p,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(J(),g(I,{loading:h(s),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:m.value,"entity-name":"Job",onCreate:u},null,8,["loading","table"]))}});export{M as default};
//# sourceMappingURL=Jobs.09b20754.js.map
