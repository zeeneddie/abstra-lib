import{d as b,eA as u,J as f,b as y,c as _,u as g}from"./outputWidgets.1f56779e.js";import{a as w}from"./asyncComputed.d1a24b24.js";import"./console.a116161c.js";import{M as m}from"./member.47daf622.js";import"./index.1673750d.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.dc500114.js";import"./index.91df0c63.js";import"./Form.d0b25830.js";import"./Title.09ee3c70.js";import"./index.46183ade.js";import"./index.a6316f6c.js";import"./index.8d23e716.js";import"./dayjs.1fdf06ce.js";import"./index.040232d6.js";import"./index.213814db.js";import"./TabPane.aeb045bc.js";import"./index.14bfcb45.js";import"./index.d730b926.js";import"./index.52be8993.js";import"./index.7a43a3b4.js";import"./index.6e27fda4.js";import"./index.fb90d995.js";import"./index.7e1928c2.js";import"./index.66108ce0.js";import"./gateway.f14016d6.js";import"./activeRecord.f5ff3ff8.js";import"./pubsub.e84eeb5e.js";import"./icons.6ae18354.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="180949d6-e9bc-481f-a950-b93b0ed9fa23",e._sentryDebugIdIdentifier="sentry-dbid-180949d6-e9bc-481f-a950-b93b0ed9fa23")}catch{}})();const V=b({__name:"Members",setup(e){const r=u().params.organizationId,n=[{key:"email",label:"Email"}],s=async t=>{await m.create(r,t.email),d()},{loading:p,result:l,refetch:d}=w(()=>m.list(r)),c=f(()=>{var t,i;return{columns:[{name:"Email"},{name:"Role"}],rows:(i=(t=l.value)==null?void 0:t.map(a=>({key:a.email,cells:[{text:a.email},{text:a.role}]})))!=null?i:[]}});return(t,i)=>(y(),_(I,{"entity-name":"members",loading:g(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:n,onCreate:s},null,8,["loading","table"]))}});export{V as default};
//# sourceMappingURL=Members.4fdb6348.js.map
