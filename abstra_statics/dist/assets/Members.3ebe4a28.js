import{d as u,K as b,b as y,t as g,z as s,J as _}from"./registerWidgets.dfdff788.js";import{a as w}from"./asyncComputed.b3051259.js";import"./gateway.c57a498b.js";import{M as i}from"./member.2c6fac0a.js";import"./index.73e2e42d.js";import{C as I}from"./CrudView.06b340cc.js";import"./passwordlessManager.f4b631cc.js";import"./pubsub.01b5bd69.js";import"./activeRecord.91994ff2.js";import"./DropdownMenu.dd2df44b.js";import"./Modal.481ae592.js";import"./LoadingIndicator.07769849.js";import"./lottie.c1686162.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="26e4af8f-f7aa-4563-891a-13849821c3af",e._sentryDebugIdIdentifier="sentry-dbid-26e4af8f-f7aa-4563-891a-13849821c3af")}catch{}})();const K=u({__name:"Members",setup(e){const o=_().params.organizationId,m=[{key:"email",label:"Email"}],l=async t=>{await i.create(o,t.email),f()},{loading:d,result:c,refetch:f}=w(()=>i.list(o)),p=b(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=c.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:s(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:s(p),"create-button-text":"Add members",fields:m,onCreate:l},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Members.3ebe4a28.js.map
