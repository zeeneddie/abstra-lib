import{d as f,K as u,b as y,t as g,z as s,J as _}from"./registerWidgets.bac2b379.js";import{a as w}from"./asyncComputed.83599e4d.js";import"./gateway.255fbec9.js";import{M as i}from"./member.cd6258fc.js";import"./index.b42de1d1.js";import{C as I}from"./CrudView.fd4830e9.js";import"./passwordlessManager.5719ed30.js";import"./pubsub.bffb362a.js";import"./activeRecord.6456961c.js";import"./DropdownMenu.e82bbd6b.js";import"./Modal.de61d72b.js";import"./LoadingIndicator.e04e222e.js";import"./lottie.ba581d78.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="be351692-167a-4282-b2bc-9b47ff69f738",e._sentryDebugIdIdentifier="sentry-dbid-be351692-167a-4282-b2bc-9b47ff69f738")}catch{}})();const K=f({__name:"Members",setup(e){const a=_().params.organizationId,m=[{key:"email",label:"Email"}],l=async t=>{await i.create(a,t.email),b()},{loading:d,result:c,refetch:b}=w(()=>i.list(a)),p=u(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=c.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:s(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:s(p),"create-button-text":"Add members",fields:m,onCreate:l},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Members.b5e7aa1d.js.map
