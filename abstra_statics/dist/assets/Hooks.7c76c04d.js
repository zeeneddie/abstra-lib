import{d as y,ez as b,G as h,b as g,c as w,u as _}from"./outputWidgets.3acae187.js";import{e as H,d as C}from"./icons.238cb834.js";import{a as x}from"./asyncComputed.4acb40f3.js";import{H as l}from"./hooks.94468817.js";import{C as D}from"./CrudView.ad3897c2.js";import{a as c}from"./ant-design.0486e70d.js";import"./record.8667ddd6.js";import"./pubsub.bc590f31.js";import"./Form.01134ed5.js";import"./router.330b5ee2.js";import"./index.30e21000.js";import"./index.d2e87b7c.js";import"./Title.b0254e64.js";import"./url.ba80c662.js";import"./index.a63dba09.js";import"./index.72042afd.js";import"./index.ea121cf6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="51924047-8eb7-42e6-9a91-8db8d07b8dc9",o._sentryDebugIdIdentifier="sentry-dbid-51924047-8eb7-42e6-9a91-8db8d07b8dc9")}catch{}})();const Y=y({__name:"Hooks",setup(o){const i=b(),{loading:n,result:r,refetch:m}=x(()=>l.list()),s=({key:e})=>i.push({name:"hookEditor",params:{id:e}}),p=async()=>{const e=await l.create();s({key:e.id})},u=async({key:e})=>{var t,d;const a=await c("Do you want to delete the .py file associated with this hook?",{okText:"Yes",cancelText:"No"});await c("Are you sure you want to delete this hook?")&&(await((d=(t=r.value)==null?void 0:t.find(k=>k.id===e))==null?void 0:d.delete(a)),m())},f=h(()=>{var e,a;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"File"},{name:"Actions",align:"right"}],rows:(a=(e=r.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.id)}`},{text:t.path},{text:t.file},{text:"",actions:[{icon:H,label:"Edit Hook",onClick:s},{icon:C,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(g(),w(D,{loading:_(n),title:"Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:p},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Hooks.7c76c04d.js.map