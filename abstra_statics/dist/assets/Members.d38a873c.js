import{d as b,eA as u,J as f,b as y,c as _,u as g}from"./outputWidgets.541a6a3f.js";import{a as w}from"./asyncComputed.6496ca6b.js";import"./console.7080c244.js";import{M as m}from"./member.9b1db9b8.js";import"./index.56c0102f.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.af69973c.js";import"./index.1b1480b6.js";import"./Form.2a9acb85.js";import"./Title.3011141f.js";import"./index.7fb7f882.js";import"./index.33fb7a48.js";import"./index.5d5870f2.js";import"./dayjs.03d6e1d3.js";import"./index.f20ad580.js";import"./index.d89692b2.js";import"./TabPane.40396dd5.js";import"./index.ef35da09.js";import"./index.c3edc651.js";import"./index.dda022dd.js";import"./index.1797b918.js";import"./index.7f86f9a3.js";import"./index.68ffc7e6.js";import"./index.3cff0676.js";import"./index.07910c0e.js";import"./gateway.647cec74.js";import"./activeRecord.867c40fa.js";import"./pubsub.8482a29f.js";import"./icons.fbbc5318.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="8c532592-07b2-4d58-b6a3-bc61f2a02840",e._sentryDebugIdIdentifier="sentry-dbid-8c532592-07b2-4d58-b6a3-bc61f2a02840")}catch{}})();const V=b({__name:"Members",setup(e){const r=u().params.organizationId,n=[{key:"email",label:"Email"}],s=async t=>{await m.create(r,t.email),d()},{loading:p,result:l,refetch:d}=w(()=>m.list(r)),c=f(()=>{var t,i;return{columns:[{name:"Email"},{name:"Role"}],rows:(i=(t=l.value)==null?void 0:t.map(a=>({key:a.email,cells:[{text:a.email},{text:a.role}]})))!=null?i:[]}});return(t,i)=>(y(),_(I,{"entity-name":"members",loading:g(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:n,onCreate:s},null,8,["loading","table"]))}});export{V as default};
//# sourceMappingURL=Members.d38a873c.js.map
