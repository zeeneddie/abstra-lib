import{d as f,eA as u,G as b,b as y,c as g,u as _}from"./outputWidgets.a177f9c3.js";import{a as w}from"./asyncComputed.acb737a7.js";import"./router.c47a87c6.js";import"./index.049a6d97.js";import{M as n}from"./member.b8475642.js";import{C as I}from"./CrudView.a68d4ad4.js";import"./Form.17a59008.js";import"./index.f5af42aa.js";import"./record.56549bf6.js";import"./pubsub.a5b7cb2c.js";import"./gateway.c17828e8.js";import"./icons.7303f3f1.js";import"./index.57b83223.js";import"./Title.cb335585.js";import"./url.c6cd062a.js";import"./index.1de85727.js";import"./index.a0bf1021.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="81d0123b-2f7b-4fdd-9f7b-f2aa25c85ce2",e._sentryDebugIdIdentifier="sentry-dbid-81d0123b-2f7b-4fdd-9f7b-f2aa25c85ce2")}catch{}})();const j=f({__name:"Members",setup(e){const a=u().params.organizationId,m=[{key:"email",label:"Email"}],s=async t=>{await n.create(a,t.email),c()},{loading:l,result:d,refetch:c}=w(()=>n.list(a)),p=b(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:p.value,"create-button-text":"Add members",fields:m,onCreate:s},null,8,["loading","table"]))}});export{j as default};
//# sourceMappingURL=Members.9f838253.js.map
