import{d as u,K as b,b as y,t as g,z as s,J as _}from"./registerWidgets.60bba559.js";import{a as w}from"./asyncComputed.d00a688c.js";import"./gateway.aefff1da.js";import{M as i}from"./member.4ea40a45.js";import"./index.320037c9.js";import{C as I}from"./CrudView.a60cfd24.js";import"./passwordlessManager.e1b568b1.js";import"./pubsub.6df2423b.js";import"./activeRecord.5794d4d2.js";import"./DropdownMenu.5abb73fd.js";import"./Modal.8fbea10f.js";import"./LoadingIndicator.0b01cf4c.js";import"./lottie.fd5d7b21.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="8c11e1f0-39e6-42a1-9daa-750ce07df8fb",e._sentryDebugIdIdentifier="sentry-dbid-8c11e1f0-39e6-42a1-9daa-750ce07df8fb")}catch{}})();const K=u({__name:"Members",setup(e){const o=_().params.organizationId,m=[{key:"email",label:"Email"}],l=async t=>{await i.create(o,t.email),p()},{loading:d,result:c,refetch:p}=w(()=>i.list(o)),f=b(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=c.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:s(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:s(f),"create-button-text":"Add members",fields:m,onCreate:l},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Members.ce88f63a.js.map
