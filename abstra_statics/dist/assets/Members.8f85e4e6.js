import{d as b,ez as y,F as g,b as _,c as w,u as h}from"./outputWidgets.dbf31506.js";import{a as I}from"./asyncComputed.22d83ebd.js";import{b as k}from"./router.50e0effa.js";import"./index.26ac7d5a.js";import{M as n}from"./member.93d4ff7b.js";import{C as x}from"./CrudView.6dd71906.js";import{F as C}from"./icons.17139281.js";import{a as M}from"./ant-design.77528537.js";import"./FormItem.14aec113.js";import"./hasIn.cb997ddd.js";import"./jwt-decode.esm.74bd4619.js";import"./storage.38bf401b.js";import"./index.c87831d1.js";import"./index.cf4c23b9.js";import"./record.d3b10a69.js";import"./pubsub.df3ed44c.js";import"./Title.f2db1f8a.js";import"./Text.44b29478.js";import"./Form.9c899dd2.js";import"./Modal.039b45d9.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.59443374.js";import"./url.11385709.js";import"./index.a66cb776.js";import"./index.0ffedf5d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="30f8aaa0-74ad-4946-bc60-d64882f11d49",t._sentryDebugIdIdentifier="sentry-dbid-30f8aaa0-74ad-4946-bc60-d64882f11d49")}catch{}})();const X=b({__name:"Members",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),m()};async function c(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:d},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.8f85e4e6.js.map
