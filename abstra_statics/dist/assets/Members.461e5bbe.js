import{d as u,eA as b,J as f,b as y,c as g,u as _}from"./outputWidgets.3f6d0550.js";import{a as w}from"./asyncComputed.bd80460e.js";import"./router.f2ffb037.js";import{M as n}from"./member.d98ec36d.js";import"./index.4a6147e4.js";import{C as I}from"./CrudView.7764d20a.js";import"./Title.d85134a2.js";import"./index.3719e3b6.js";import"./gateway.985e8615.js";import"./activeRecord.4331371e.js";import"./pubsub.0f07f3a4.js";import"./icons.51140278.js";import"./index.eb4bb603.js";import"./Form.7ff4c526.js";import"./url.980858d4.js";import"./index.6a58cd86.js";import"./index.9fce520b.js";import"./index.4614c424.js";import"./index.dee2e461.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="c8a9d623-d17b-47df-88e1-dea4cc5b1143",e._sentryDebugIdIdentifier="sentry-dbid-c8a9d623-d17b-47df-88e1-dea4cc5b1143")}catch{}})();const F=u({__name:"Members",setup(e){const r=b().params.organizationId,m=[{key:"email",label:"Email"}],s=async t=>{await n.create(r,t.email),c()},{loading:d,result:l,refetch:c}=w(()=>n.list(r)),p=f(()=>{var t,a;return{columns:[{name:"Email"},{name:"Role"}],rows:(a=(t=l.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?a:[]}});return(t,a)=>(y(),g(I,{"entity-name":"members",loading:_(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:p.value,"create-button-text":"Add members",fields:m,onCreate:s},null,8,["loading","table"]))}});export{F as default};
//# sourceMappingURL=Members.461e5bbe.js.map
