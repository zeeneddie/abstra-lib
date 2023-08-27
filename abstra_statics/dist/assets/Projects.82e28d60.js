import{d as b,J as P,H as w,K as _,z as i,b as k,t as C,D as I}from"./registerWidgets.7afd6438.js";import{f as h,g as x}from"./icons.0ae396f2.js";import{a as z}from"./asyncComputed.b60ddd9a.js";import{P as d}from"./project.74421f3d.js";import"./gateway.2390ee89.js";import{O as D}from"./organization.89788a5f.js";import"./index.9e389ffd.js";import{C as v}from"./CrudView.ab882a67.js";import"./activeRecord.e140ff8e.js";import"./pubsub.9805d82b.js";import"./passwordlessManager.7da7ab9e.js";import"./DropdownMenu.90d44aab.js";import"./Modal.94284cfc.js";import"./LoadingIndicator.b2e0f173.js";import"./lottie.36f8e1f2.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="918cde1d-6865-4326-aa5c-f78c90af291d",a._sentryDebugIdIdentifier="sentry-dbid-918cde1d-6865-4326-aa5c-f78c90af291d")}catch{}})();const F=b({__name:"Projects",setup(a){const r=[{key:"name",label:"Project Name"}],s=P().params.organizationId,m=w(),{loading:u,result:n,refetch:p}=z(()=>Promise.all([d.list(s),D.get(s)]).then(([e,t])=>({projects:e,organization:t}))),c=({key:e})=>m.push({name:"project",params:{projectId:e}}),f=async e=>{const t=await d.create({organizationId:s,name:e.name});c({key:t.id})},y=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=n.value)==null?void 0:t.projects.find(j=>j.id===e))==null?void 0:o.delete()),p())},g=_(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Project Actions"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8),classes:["centered"]},{text:o.name,classes:["title"],link:`/projects/${encodeURIComponent(o.id)}`},{text:"",classes:["centered"],actions:[{icon:h,label:"Delete",onClick:y,dangerous:!0},{icon:x,label:"Edit Project",onClick:c}]}]})))!=null?t:[]}});return(e,t)=>i(n)?(k(),C(v,{key:0,"entity-name":"project",loading:i(u),title:`${i(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:g.value,fields:r,onCreate:f},null,8,["loading","title","table"])):I("",!0)}});export{F as default};
//# sourceMappingURL=Projects.82e28d60.js.map
