import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.f2dbcdfc.js";import{a as I}from"./asyncComputed.37132230.js";import{b as k}from"./router.11cb60a2.js";import"./index.89d31b1f.js";import{M as n}from"./member.d98a63ae.js";import{C as x}from"./CrudView.2fadcd7e.js";import{F as C}from"./icons.ac84ddf6.js";import{a as M}from"./ant-design.7bf5dcea.js";import"./FormItem.cd189ec8.js";import"./hasIn.84ebe126.js";import"./index.cf4c23b9.js";import"./record.50d91012.js";import"./pubsub.d8506141.js";import"./Paragraph.a4acc8de.js";import"./Base.e7a1d92f.js";import"./Form.45d9e489.js";import"./Modal.cc063c68.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.07f8bbed.js";import"./url.978d277d.js";import"./index.1b352efb.js";import"./Title.5cdc55b4.js";import"./Text.e98aa09c.js";import"./index.c073fe31.js";import"./index.ab2d11b8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="adc1d9ce-7b18-4533-ae6a-a35aa2eba78d",t._sentryDebugIdIdentifier="sentry-dbid-adc1d9ce-7b18-4533-ae6a-a35aa2eba78d")}catch{}})();const X=b({__name:"Members",setup(t){const o=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(o,e.email),m()};async function d(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(o,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(o)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(a=>{var s;return{key:a.email,cells:[{type:"text",text:a.email},{type:"text",text:a.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===a.email?[]:[{icon:C,label:"Remove access",onClick:()=>d(a),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.71ff50a7.js.map
