import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.0a8e4948.js";import{a as I}from"./asyncComputed.059a4705.js";import{b as k}from"./router.a730a2c1.js";import"./index.fea4a6f4.js";import{M as n}from"./member.804adcef.js";import{C as x}from"./CrudView.d727886c.js";import{K as C}from"./icons.b13f0b09.js";import{a as M}from"./ant-design.efb76e31.js";import"./Form.c559c050.js";import"./hasIn.8bcc6abb.js";import"./index.cf4c23b9.js";import"./record.68d70ea4.js";import"./pubsub.dcb12b9f.js";import"./Paragraph.b4aaf7da.js";import"./Base.dda5d58b.js";import"./Typography.fd999a5c.js";import"./Modal.7e08920e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.db2454e0.js";import"./url.5c05e609.js";import"./index.2673874d.js";import"./Title.ca8d43a3.js";import"./Text.ec9c769b.js";import"./index.e5d762a8.js";import"./index.ab9ed469.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="93412138-e214-489b-a773-5990eb177107",t._sentryDebugIdIdentifier="sentry-dbid-93412138-e214-489b-a773-5990eb177107")}catch{}})();const X=b({__name:"Members",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),m()};async function p(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:d,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>p(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.51629b91.js.map
