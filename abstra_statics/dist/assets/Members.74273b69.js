import{d as u,eA as f,J as b,b as y,c as _,u as g}from"./outputWidgets.cdd73ae7.js";import{a as w}from"./asyncComputed.1e379dfc.js";import"./console.da68e7a5.js";import{M as a}from"./member.35474079.js";import"./index.3432358a.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.d70fb4a4.js";import"./index.bb21662d.js";import"./Form.989d9f34.js";import"./Title.a585f3b7.js";import"./CollapsePanel.b3533acc.js";import"./index.3a1041eb.js";import"./index.23699d9e.js";import"./index.0ff4e9e1.js";import"./dayjs.8c54e3e0.js";import"./index.74f12426.js";import"./index.d0d1a721.js";import"./TabPane.df53a43e.js";import"./index.4b8538be.js";import"./index.08f7b30c.js";import"./index.2eef836d.js";import"./index.2a1509cb.js";import"./index.165bdf52.js";import"./index.1d69d182.js";import"./index.2ae175da.js";import"./index.71dc62b0.js";import"./index.5d73eb3d.js";import"./gateway.701cfd2d.js";import"./activeRecord.7c91f6d1.js";import"./pubsub.f5d6db77.js";import"./icons.5a4d121b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="90c5fa2c-c7e5-4e6f-990b-ddc54155194c",e._sentryDebugIdIdentifier="sentry-dbid-90c5fa2c-c7e5-4e6f-990b-ddc54155194c")}catch{}})();const X=u({__name:"Members",setup(e){const r=f().params.organizationId,n=[{key:"email",label:"Email"}],s=async t=>{await a.create(r,t.email),c()},{loading:p,result:l,refetch:c}=w(()=>a.list(r)),d=b(()=>{var t,i;return{columns:[{name:"Email"},{name:"Role"}],rows:(i=(t=l.value)==null?void 0:t.map(m=>({key:m.email,cells:[{text:m.email},{text:m.role}]})))!=null?i:[]}});return(t,i)=>(y(),_(I,{"entity-name":"members",loading:g(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:d.value,"create-button-text":"Add members",fields:n,onCreate:s},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.74273b69.js.map