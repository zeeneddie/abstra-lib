import{d as b,ez as y,F as g,b as _,c as w,u as h}from"./outputWidgets.c5bb0ffd.js";import{a as I}from"./asyncComputed.01a998b0.js";import{b as k}from"./router.349f1a13.js";import"./index.8e24d5f4.js";import{M as n}from"./member.b839ae45.js";import{C as x}from"./CrudView.56ccfa2e.js";import{F as C}from"./icons.069bc807.js";import{a as M}from"./ant-design.72a12637.js";import"./FormItem.bf725b43.js";import"./hasIn.8dd71763.js";import"./jwt-decode.esm.74bd4619.js";import"./storage.29370dcf.js";import"./index.09d2601c.js";import"./index.cf4c23b9.js";import"./record.0052787e.js";import"./pubsub.4dcc4eda.js";import"./Title.e8aca433.js";import"./Text.fa2a0c37.js";import"./Form.7efe9a60.js";import"./Modal.c5afd51d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.149fc352.js";import"./url.537a5ab7.js";import"./index.66cc3f55.js";import"./index.21590a9d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="cd74fd1b-7fb7-472d-9686-dfc66355d5a3",t._sentryDebugIdIdentifier="sentry-dbid-cd74fd1b-7fb7-472d-9686-dfc66355d5a3")}catch{}})();const X=b({__name:"Members",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),m()};async function c(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:d},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.ad572412.js.map
