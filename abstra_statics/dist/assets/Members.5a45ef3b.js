import{d as u,ez as b,H as f,b as y,c as g,u as _}from"./outputWidgets.7f968caf.js";import{a as w}from"./asyncComputed.fdc164f0.js";import"./router.d23a4a60.js";import{M as m}from"./member.9526c1d8.js";import"./columns.013b9e51.js";import{C as I}from"./CrudView.1eecc76a.js";import"./Title.d8e3350b.js";import"./index.35253f43.js";import"./gateway.e0df6c1f.js";import"./activeRecord.42da519e.js";import"./pubsub.7e5686b2.js";import"./index.f4ac7424.js";import"./icons.c30c7a3d.js";import"./index.4ad346db.js";import"./Form.b10b090a.js";import"./url.19f02b2c.js";import"./index.a668da42.js";import"./index.029e59cc.js";import"./index.371754e3.js";import"./index.6a968710.js";import"./index.8d2abc42.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="e7e50a0f-6950-4906-8bf7-4a90b06988c7",e._sentryDebugIdIdentifier="sentry-dbid-e7e50a0f-6950-4906-8bf7-4a90b06988c7")}catch{}})();const J=u({__name:"Members",setup(e){const r=b().params.organizationId,n=[{key:"email",label:"Email"}],s=async t=>{await m.create(r,t.email),d()},{loading:l,result:p,refetch:d}=w(()=>m.list(r)),c=f(()=>{var t,a;return{columns:[{name:"Email"},{name:"Role"}],rows:(a=(t=p.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?a:[]}});return(t,a)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:n,onCreate:s},null,8,["loading","table"]))}});export{J as default};
//# sourceMappingURL=Members.5a45ef3b.js.map
