import{d as u,ey as b,F as f,b as y,u as g,bu as _}from"./registerWidgets.92d2f644.js";import{a as w}from"./asyncComputed.969e5e52.js";import"./gateway.b5fd6e0f.js";import{M as s}from"./member.2ffa4868.js";import"./index.a8106eac.js";import{C as I}from"./CrudView.bf94fe37.js";import"./passwordlessManager.d1484834.js";import"./pubsub.cabffe13.js";import"./storage.63ab52ef.js";import"./activeRecord.1a640186.js";import"./DropdownMenu.737d17d7.js";import"./Modal.2ef1e90a.js";import"./LoadingIndicator.6e991a44.js";import"./lottie.8475a642.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="03876b95-1ebb-4a3d-8d3f-0314135f2aea",e._sentryDebugIdIdentifier="sentry-dbid-03876b95-1ebb-4a3d-8d3f-0314135f2aea")}catch{}})();const N=u({__name:"Members",setup(e){const o=b().params.organizationId,i=[{key:"email",label:"Email"}],m=async t=>{await s.create(o,t.email),c()},{loading:l,result:d,refetch:c}=w(()=>s.list(o)),p=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:p.value,"create-button-text":"Add members",fields:i,onCreate:m},null,8,["loading","table"]))}});export{N as default};
//# sourceMappingURL=Members.7275521a.js.map
