import{d as b,ez as y,F as g,b as _,c as w,u as h}from"./outputWidgets.20c46f71.js";import{a as I}from"./asyncComputed.65465eba.js";import{b as k}from"./router.4543b4c7.js";import"./index.99d20c85.js";import{M as n}from"./member.a673bcbc.js";import{C as x}from"./CrudView.0a9bb280.js";import{F as C}from"./icons.08605b04.js";import{a as M}from"./ant-design.38fa3124.js";import"./FormItem.62d0b2be.js";import"./hasIn.6fec5c60.js";import"./jwt-decode.esm.74bd4619.js";import"./storage.9c7467f6.js";import"./index.c8e9fe2b.js";import"./index.cf4c23b9.js";import"./record.d3b6a1cf.js";import"./pubsub.a96313fc.js";import"./Title.773398ff.js";import"./Text.1983f516.js";import"./Form.f52e591f.js";import"./Modal.05f27f8d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c970c125.js";import"./url.56d9c3b9.js";import"./index.ca2a142c.js";import"./index.77238484.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="cb4eb614-2af5-4342-a656-e301e872072c",t._sentryDebugIdIdentifier="sentry-dbid-cb4eb614-2af5-4342-a656-e301e872072c")}catch{}})();const X=b({__name:"Members",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),m()};async function p(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:d,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>p(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.2e8c062e.js.map
