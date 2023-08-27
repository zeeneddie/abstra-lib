import{d as p,J as u,K as b,b as y,t as g,z as _}from"./registerWidgets.7afd6438.js";import{a as w}from"./asyncComputed.b60ddd9a.js";import"./gateway.2390ee89.js";import{M as s}from"./member.4430593b.js";import"./index.9e389ffd.js";import{C as I}from"./CrudView.ab882a67.js";import"./passwordlessManager.7da7ab9e.js";import"./pubsub.9805d82b.js";import"./activeRecord.e140ff8e.js";import"./DropdownMenu.90d44aab.js";import"./Modal.94284cfc.js";import"./LoadingIndicator.b2e0f173.js";import"./lottie.36f8e1f2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="ff61742f-a4c7-4879-93fb-f1809575a97f",e._sentryDebugIdIdentifier="sentry-dbid-ff61742f-a4c7-4879-93fb-f1809575a97f")}catch{}})();const K=p({__name:"Members",setup(e){const o=u().params.organizationId,i=[{key:"email",label:"Email"}],m=async t=>{await s.create(o,t.email),c()},{loading:l,result:d,refetch:c}=w(()=>s.list(o)),f=b(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:i,onCreate:m},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Members.564a52ef.js.map
