import{d as u,ey as f,F as b,b as y,u as g,bu as _}from"./registerWidgets.48d70646.js";import{a as w}from"./asyncComputed.fc1ea7a0.js";import"./gateway.2de0c194.js";import{M as s}from"./member.9990ae25.js";import"./index.58a2ace2.js";import{C as I}from"./CrudView.34e45c92.js";import"./passwordlessManager.03d1b335.js";import"./pubsub.e10d523f.js";import"./activeRecord.a633f408.js";import"./DropdownMenu.af40c195.js";import"./Modal.59f8feb2.js";import"./LoadingIndicator.1ce4746a.js";import"./lottie.59a9905b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="1347c4eb-d5d4-4f02-93e1-f518821731f1",e._sentryDebugIdIdentifier="sentry-dbid-1347c4eb-d5d4-4f02-93e1-f518821731f1")}catch{}})();const L=u({__name:"Members",setup(e){const a=f().params.organizationId,i=[{key:"email",label:"Email"}],m=async t=>{await s.create(a,t.email),c()},{loading:l,result:d,refetch:c}=w(()=>s.list(a)),p=b(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:p.value,"create-button-text":"Add members",fields:i,onCreate:m},null,8,["loading","table"]))}});export{L as default};
//# sourceMappingURL=Members.36a2d6fa.js.map
