import{d as u,eA as b,G as f,b as y,c as g,u as _}from"./outputWidgets.e350d8e4.js";import{a as w}from"./asyncComputed.11f5ac08.js";import"./router.d677740c.js";import"./index.13a5dbe3.js";import{M as n}from"./member.19ceade1.js";import{C as I}from"./CrudView.35101150.js";import"./Form.b043e834.js";import"./index.c53bcd95.js";import"./record.8c9e165d.js";import"./pubsub.dd4743a2.js";import"./gateway.1fcbfbcf.js";import"./icons.2c394e63.js";import"./Text.1223a40d.js";import"./Title.f9a2b403.js";import"./url.958bb521.js";import"./index.6d013bd4.js";import"./index.310b827e.js";import"./index.ecead728.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="31d0ab7f-3e05-4da5-890e-1e9342a6c81c",e._sentryDebugIdIdentifier="sentry-dbid-31d0ab7f-3e05-4da5-890e-1e9342a6c81c")}catch{}})();const q=u({__name:"Members",setup(e){const a=b().params.organizationId,m=[{key:"email",label:"Email"}],s=async t=>{await n.create(a,t.email),p()},{loading:l,result:d,refetch:p}=w(()=>n.list(a)),c=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:m,onCreate:s},null,8,["loading","table"]))}});export{q as default};
//# sourceMappingURL=Members.4b98fcec.js.map
