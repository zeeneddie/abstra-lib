import{d as g,b as t,ev as a,F as z,bq as I,eC as $,e as O,eD as A,f as m,v as D,G as P,ex as _,c as y,e_ as V,eU as x,r as E,eB as L,eA as H,a as J,w as l,eK as K,u as o,aq as M,ad as Q,cB as T,bO as W}from"./outputWidgets.308fc26e.js";import{B as X}from"./BaseLayout.df0b4879.js";import{a as Y}from"./asyncComputed.7ba10fe2.js";import{b as S}from"./index.61e3d21d.js";import{_ as Z}from"./SaveButton.vue_vue_type_script_setup_true_lang.4b878cf2.js";import"./authorManager.61b245b2.js";import{P as ee}from"./project.ce2bdfda.js";import{C as te}from"./connector.bacae788.js";import{O as ne}from"./organization.9fc338e8.js";import{T as ae,A as N}from"./TabPane.66ea01f5.js";import{B as se,a as oe,c as re}from"./index.a6ccaaa8.js";import{F}from"./Form.b644815c.js";import{A as G}from"./FormItem.d0e912fc.js";import{A as ue}from"./index.afc8f873.js";import"./index.cf4c23b9.js";import"./record.1ea6e7e1.js";import"./pubsub.d9c6c339.js";import"./gateway.8216c3fe.js";import"./ant-design.60fb69b6.js";import"./index.30ae7068.js";import"./Title.3127a7b5.js";import"./Text.e9c2c18e.js";import"./index.bdbfa702.js";import"./Link.8ca2f88d.js";import"./hasIn.1b9bee8b.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="cb9a8bfc-654b-41e8-b977-4f9b2d974147",i._sentryDebugIdIdentifier="sentry-dbid-cb9a8bfc-654b-41e8-b977-4f9b2d974147")}catch{}})();const ce=["value"],le=g({__name:"TextInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ce))}}),ie=["value"],pe=g({__name:"NumberInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"number",onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ie))}}),de=["value"],me=g({__name:"BooleanInput",props:{value:{type:Boolean},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"checkbox",onChange:n[0]||(n[0]=e=>s("change",e.target.checked))},null,40,de))}}),_e={class:"oi"},ve={class:"oi-item-label"},he=g({__name:"ObjectInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var b;const r=i,n=z({value:(b=r.value)!=null?b:{}}),e=(B,j)=>{n.value[B]=j,k()},k=()=>{s("change",n.value)};return(B,j)=>(t(),a("div",_e,[(t(!0),a(I,null,$(r.schema.values,(f,v)=>(t(),a("div",{key:v,class:"oi-item"},[O("div",ve,A(v),1),m(q,{class:"oi-item-input",schema:f,value:n.value[v],onChange:u=>e(v,u)},null,8,["schema","value","onChange"])]))),128))]))}});const ge=D(he,[["__scopeId","data-v-bd751ecc"]]),be={class:"ai"},fe=["onClick"],ye=g({__name:"ArrayInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var j;const n=z({value:(j=i.value)!=null?j:[]}),e=()=>{n.value.push(void 0)},k=f=>{n.value.splice(f,1),B()},b=(f,v)=>{n.value[f]=v,B()},B=()=>{s("change",n.value)};return(f,v)=>(t(),a("div",be,[(t(!0),a(I,null,$(n.value,(u,w)=>(t(),a("div",{key:w,class:"ai-item"},[m(q,{schema:f.schema.items,value:u,onChange:d=>b(w,d)},null,8,["schema","value","onChange"]),O("button",{class:"ai-item-remove",onClick:d=>k(w)},"x",8,fe)]))),128)),O("button",{class:"ai-item-add",onClick:v[0]||(v[0]=u=>e())},"Add")]))}});const ke=D(ye,[["__scopeId","data-v-a6c8b9fb"]]),Ce=["value"],Ie=["value"],$e=g({__name:"OptionsInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("select",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},[(t(!0),a(I,null,$(r.schema.values,e=>(t(),a("option",{key:e,value:e},A(e),9,Ie))),128))],40,Ce))}}),Ae=["value"],Be=g({__name:"UnionInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,Ae))}}),je=["value"],Re=g({__name:"AnyInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,je))}}),we={string:le,number:pe,boolean:me,object:ge,array:ke,options:$e,any:Re,union:Be},Me={class:"gi"},Oe={key:0,class:"gi-header"},Pe={key:0,class:"gi-label"},qe={key:1,class:"gi-tags"},ze={key:0,class:"gi-required"},De={key:1,class:"gi-required"},Te={key:1,class:"gi-description"},Se=g({__name:"GenericInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){const r=i,n=P(()=>({component:we[r.schema.type],props:{value:r.value,schema:r.schema}}));return(e,k)=>(t(),a("div",Me,["label"in e.schema?(t(),a("div",Oe,["label"in e.schema?(t(),a("label",Pe,A(e.schema.label),1)):_("",!0),"required"in e.schema||"secret"in e.schema?(t(),a("div",qe,["required"in e.schema&&e.schema.required?(t(),a("span",ze,"[Required]")):_("",!0),"secret"in e.schema&&e.schema.secret?(t(),a("span",De,"[Secret]")):_("",!0)])):_("",!0)])):_("",!0),"description"in e.schema?(t(),a("div",Te,A(e.schema.description),1)):_("",!0),(t(),y(x(n.value.component),V({class:"gi-input"},n.value.props,{onChange:k[0]||(k[0]=b=>s("change",b))}),null,16))]))}});const q=D(Se,[["__scopeId","data-v-dd33d764"]]),Ne={key:0},Fe={key:1},Ge={key:0},Ue={key:1},mt=g({__name:"ConnectorEditor",setup(i){const s=E("connect"),n=L().params.connectorId,{result:e,loading:k}=Y(async()=>{const d=await te.get(n),p=await ee.get(d.projectId),C=await ne.get(p.organizationId);return K({connector:d,project:p,organization:C})}),b=P(()=>!k.value&&e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.organization.name,path:`/organizations/${e.value.organization.id}`},{label:e.value.project.name,path:`/projects/${e.value.project.id}/connectors`}]:void 0),B=H();function j(){e.value&&B.push({name:"connectors",params:{projectId:e.value.project.id}})}const f=P(()=>{var d;return(d=e.value)!=null&&d.connector.schema.methods?Object.entries(e.value.connector.schema.methods).reduce((p,[C,c])=>[...p,{key:C,...c}],[]):[]}),v=P(()=>{var d,p,C;return!((d=e.value)!=null&&d.connector)||!(((p=e.value)==null?void 0:p.connector.type)in S.schema)?null:S.schema[(C=e.value)==null?void 0:C.connector.type]}),u=z({testMethod:void 0,testParams:{},testResponse:null}),w=async()=>{var d,p;!((d=e.value)!=null&&d.connector)||!u.testMethod||!u.testParams||(u.testResponse=await((p=e.value)==null?void 0:p.connector.test(u.testMethod,u.testParams)))};return(d,p)=>{const C=J("router-link");return t(),y(X,null,{navbar:l(()=>{var c;return[m(o(re),{title:(c=o(e))==null?void 0:c.connector.name,style:{padding:"5px 25px"},onBack:j},{footer:l(()=>[m(o(ae),{"active-key":s.value,"onUpdate:activeKey":p[0]||(p[0]=h=>s.value=h)},{default:l(()=>[m(o(N),{key:"connect",tab:"Connect"}),m(o(N),{key:"test",tab:"Test"})]),_:1},8,["active-key"])]),breadcrumb:l(()=>[b.value?(t(),y(o(se),{key:0},{default:l(()=>[(t(!0),a(I,null,$(b.value,(h,R)=>(t(),y(o(oe),{key:R},{default:l(()=>[m(C,{to:h.path},{default:l(()=>[M(A(h.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):_("",!0)]),extra:l(()=>[o(e)?(t(),y(Z,{key:0,model:o(e).connector},null,8,["model"])):_("",!0)]),_:1},8,["title"])]}),content:l(()=>[o(e)&&s.value==="connect"?(t(),y(o(F),{key:0},{default:l(()=>{var c;return[(t(!0),a(I,null,$((c=v.value)==null?void 0:c.settings,(h,R)=>(t(),y(o(G),{key:R},{default:l(()=>[m(q,{schema:h,value:o(e).connector.settings[R],onChange:U=>o(e).connector.settings[R]=U},null,8,["schema","value","onChange"])]),_:2},1024))),128))]}),_:1})):_("",!0),o(e)&&s.value==="test"?(t(),y(o(F),{key:1},{default:l(()=>[m(o(G),{label:"Method"},{default:l(()=>[m(o(Q),{value:u.testMethod,"onUpdate:value":p[1]||(p[1]=c=>u.testMethod=c)},{default:l(()=>[m(o(T),{value:null,disabled:"",selected:"",hidden:""},{default:l(()=>[M("Select a method")]),_:1}),(t(!0),a(I,null,$(f.value,c=>(t(),y(o(T),{key:c.key,value:c.key},{default:l(()=>[M(A(c.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u.testMethod?(t(),a("div",Ne,[(t(!0),a(I,null,$(o(e).connector.schema.methods[u.testMethod].params,(c,h)=>(t(),a("div",{key:h},[m(q,{schema:c,value:u.testParams[h],onChange:R=>u.testParams[h]=R},null,8,["schema","value","onChange"])]))),128)),m(o(W),{type:"primary",onClick:p[2]||(p[2]=c=>w())},{default:l(()=>[M("Test")]),_:1})])):_("",!0),u.testResponse?(t(),a("div",Fe,[m(o(ue),{orientation:"left"},{default:l(()=>[M("Response")]),_:1}),u.testResponse.errors.length>0?(t(),a("div",Ge,[(t(!0),a(I,null,$(u.testResponse.errors,c=>(t(),a("div",{key:c},A(c),1))),128))])):_("",!0),u.testResponse.returns&&Object.keys(u.testResponse.returns).length>0?(t(),a("div",Ue,[O("span",null,[O("pre",null,A(JSON.stringify(u.testResponse.returns,null,2)),1)])])):_("",!0)])):_("",!0)]),_:1})):_("",!0)]),_:1})}}});export{mt as default};
//# sourceMappingURL=ConnectorEditor.f59d88e6.js.map