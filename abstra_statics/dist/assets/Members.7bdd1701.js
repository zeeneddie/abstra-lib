import{d as u,K as f,b as y,t as g,z as s,J as _}from"./registerWidgets.29ceb1a3.js";import{a as w}from"./asyncComputed.9ed582d0.js";import"./gateway.59946eef.js";import{M as i}from"./member.ae4927db.js";import{C as I}from"./CrudView.0e202885.js";import"./passwordlessManager.68f14bfc.js";import"./activeRecord.ab1afca6.js";import"./DropdownMenu.e7128f2e.js";import"./Modal.466a15f5.js";import"./LoadingIndicator.4fe2121c.js";import"./lottie.dc9b75c3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="66abba20-f5cf-44bc-826e-60215d71ecec",e._sentryDebugIdIdentifier="sentry-dbid-66abba20-f5cf-44bc-826e-60215d71ecec")}catch{}})();const A=u({__name:"Members",setup(e){const o=_().params.organizationId,m=[{key:"email",label:"Email"}],l=async t=>{await i.create(o,t.email),b()},{loading:c,result:d,refetch:b}=w(()=>i.list(o)),p=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:s(c),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:s(p),"create-button-text":"Add members",fields:m,onCreate:l},null,8,["loading","table"]))}});export{A as default};
//# sourceMappingURL=Members.7bdd1701.js.map