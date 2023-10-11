import{d as g,b as t,eu as a,H as T,bg as C,eB as $,e as O,eC as A,f as m,x as D,J as P,ew as _,c as y,eX as E,eI as G,r as J,eA as L,ez as U,a as H,w as l,u as o,aJ as M,af as X,cL as S,c4 as Q,eF as W}from"./outputWidgets.5f5dca9f.js";import{b as q}from"./index.fcdb7e23.js";import{P as Y}from"./project.de2f38b9.js";import"./router.a7910fab.js";import{O as Z}from"./organization.dacfc6ab.js";import{C as K}from"./connector.7bb840ae.js";import{a as ee}from"./asyncComputed.eae0c0ea.js";import{_ as te}from"./SaveButton.vue_vue_type_script_setup_true_lang.4f8148d9.js";import{B as ne}from"./BaseLayout.ff65337e.js";import{T as ae,A as N}from"./TabPane.c45032a7.js";import{B as se,a as oe,c as re}from"./index.de5dbed2.js";import{F}from"./Form.09052538.js";import{A as V}from"./Title.c2ba09dc.js";import{A as ue}from"./index.7ef152c5.js";import"./gateway.68ea1e37.js";import"./activeRecord.ad81cab4.js";import"./pubsub.628f19a6.js";import"./index.92c8cf6e.js";import"./ant-design.b34b2997.js";import"./index.7ab474e7.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="cbfa1d80-2bee-4b60-a0a5-227924a12770",i._sentryDebugIdIdentifier="sentry-dbid-cbfa1d80-2bee-4b60-a0a5-227924a12770")}catch{}})();const ce=["value"],le=g({__name:"TextInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ce))}}),ie=["value"],pe=g({__name:"NumberInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"number",onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ie))}}),de=["value"],me=g({__name:"BooleanInput",props:{value:{type:Boolean},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"checkbox",onChange:n[0]||(n[0]=e=>s("change",e.target.checked))},null,40,de))}}),_e={class:"oi"},ve={class:"oi-item-label"},he=g({__name:"ObjectInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var f;const r=i,n=T({value:(f=r.value)!=null?f:{}}),e=(j,B)=>{n.value[j]=B,k()},k=()=>{s("change",n.value)};return(j,B)=>(t(),a("div",_e,[(t(!0),a(C,null,$(r.schema.values,(b,v)=>(t(),a("div",{key:v,class:"oi-item"},[O("div",ve,A(v),1),m(z,{class:"oi-item-input",schema:b,value:n.value[v],onChange:u=>e(v,u)},null,8,["schema","value","onChange"])]))),128))]))}});const ge=D(he,[["__scopeId","data-v-bd751ecc"]]),fe={class:"ai"},be=["onClick"],ye=g({__name:"ArrayInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var B;const n=T({value:(B=i.value)!=null?B:[]}),e=()=>{n.value.push(void 0)},k=b=>{n.value.splice(b,1),j()},f=(b,v)=>{n.value[b]=v,j()},j=()=>{s("change",n.value)};return(b,v)=>(t(),a("div",fe,[(t(!0),a(C,null,$(n.value,(u,R)=>(t(),a("div",{key:R,class:"ai-item"},[m(z,{schema:b.schema.items,value:u,onChange:d=>f(R,d)},null,8,["schema","value","onChange"]),O("button",{class:"ai-item-remove",onClick:d=>k(R)},"x",8,be)]))),128)),O("button",{class:"ai-item-add",onClick:v[0]||(v[0]=u=>e())},"Add")]))}});const ke=D(ye,[["__scopeId","data-v-a6c8b9fb"]]),Ie=["value"],Ce=["value"],$e=g({__name:"OptionsInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("select",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},[(t(!0),a(C,null,$(r.schema.values,e=>(t(),a("option",{key:e,value:e},A(e),9,Ce))),128))],40,Ie))}}),Ae=["value"],je=g({__name:"UnionInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,Ae))}}),Be=["value"],we=g({__name:"AnyInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,Be))}}),Re={string:le,number:pe,boolean:me,object:ge,array:ke,options:$e,any:we,union:je},Me={class:"gi"},Oe={key:0,class:"gi-header"},Pe={key:0,class:"gi-label"},ze={key:1,class:"gi-tags"},Te={key:0,class:"gi-required"},De={key:1,class:"gi-required"},Se={key:1,class:"gi-description"},qe=g({__name:"GenericInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){const r=i,n=P(()=>({component:Re[r.schema.type],props:{value:r.value,schema:r.schema}}));return(e,k)=>(t(),a("div",Me,["label"in e.schema?(t(),a("div",Oe,["label"in e.schema?(t(),a("label",Pe,A(e.schema.label),1)):_("",!0),"required"in e.schema||"secret"in e.schema?(t(),a("div",ze,["required"in e.schema&&e.schema.required?(t(),a("span",Te,"[Required]")):_("",!0),"secret"in e.schema&&e.schema.secret?(t(),a("span",De,"[Secret]")):_("",!0)])):_("",!0)])):_("",!0),"description"in e.schema?(t(),a("div",Se,A(e.schema.description),1)):_("",!0),(t(),y(G(n.value.component),E({class:"gi-input"},n.value.props,{onChange:k[0]||(k[0]=f=>s("change",f))}),null,16))]))}});const z=D(qe,[["__scopeId","data-v-dd33d764"]]),Ne={key:0},Fe={key:1},Ve={key:0},xe={key:1},ct=g({__name:"ConnectorEditor",setup(i){const s=J("connect"),n=L().params.connectorId,{result:e,loading:k}=ee(async()=>{const d=await K.get(n),p=await Y.get(d.projectId),I=await Z.get(p.organizationId);return W({connector:d,project:p,organization:I})}),f=P(()=>!k.value&&e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.organization.name,path:`/organizations/${e.value.organization.id}`},{label:e.value.project.name,path:`/projects/${e.value.project.id}/connectors`}]:void 0),j=U();function B(){e.value&&j.push({name:"connectors",params:{projectId:e.value.project.id}})}const b=P(()=>{var d;return(d=e.value)!=null&&d.connector.schema.methods?Object.entries(e.value.connector.schema.methods).reduce((p,[I,c])=>[...p,{key:I,...c}],[]):[]}),v=P(()=>{var d,p,I;return!((d=e.value)!=null&&d.connector)||!(((p=e.value)==null?void 0:p.connector.type)in q.schema)?null:q.schema[(I=e.value)==null?void 0:I.connector.type]}),u=T({testMethod:void 0,testParams:{},testResponse:null}),R=async()=>{var d,p;!((d=e.value)!=null&&d.connector)||!u.testMethod||!u.testParams||(u.testResponse=await((p=e.value)==null?void 0:p.connector.test(u.testMethod,u.testParams)))};return(d,p)=>{const I=H("router-link");return t(),y(ne,null,{navbar:l(()=>{var c;return[m(o(re),{title:(c=o(e))==null?void 0:c.connector.name,style:{padding:"5px 10px"},onBack:B},{footer:l(()=>[m(o(ae),{"active-key":s.value,"onUpdate:activeKey":p[0]||(p[0]=h=>s.value=h)},{default:l(()=>[m(o(N),{key:"connect",tab:"Connect"}),m(o(N),{key:"test",tab:"Test"})]),_:1},8,["active-key"])]),breadcrumb:l(()=>[f.value?(t(),y(o(se),{key:0},{default:l(()=>[(t(!0),a(C,null,$(f.value,(h,w)=>(t(),y(o(oe),{key:w},{default:l(()=>[m(I,{to:h.path},{default:l(()=>[M(A(h.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):_("",!0)]),extra:l(()=>[o(e)?(t(),y(te,{key:0,model:o(e).connector},null,8,["model"])):_("",!0)]),_:1},8,["title"])]}),content:l(()=>[o(e)&&s.value==="connect"?(t(),y(o(F),{key:0},{default:l(()=>{var c;return[(t(!0),a(C,null,$((c=v.value)==null?void 0:c.settings,(h,w)=>(t(),y(o(V),{key:w},{default:l(()=>[m(z,{schema:h,value:o(e).connector.settings[w],onChange:x=>o(e).connector.settings[w]=x},null,8,["schema","value","onChange"])]),_:2},1024))),128))]}),_:1})):_("",!0),o(e)&&s.value==="test"?(t(),y(o(F),{key:1},{default:l(()=>[m(o(V),{label:"Method"},{default:l(()=>[m(o(X),{value:u.testMethod,"onUpdate:value":p[1]||(p[1]=c=>u.testMethod=c)},{default:l(()=>[m(o(S),{value:null,disabled:"",selected:"",hidden:""},{default:l(()=>[M("Select a method")]),_:1}),(t(!0),a(C,null,$(b.value,c=>(t(),y(o(S),{key:c.key,value:c.key},{default:l(()=>[M(A(c.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u.testMethod?(t(),a("div",Ne,[(t(!0),a(C,null,$(o(e).connector.schema.methods[u.testMethod].params,(c,h)=>(t(),a("div",{key:h},[m(z,{schema:c,value:u.testParams[h],onChange:w=>u.testParams[h]=w},null,8,["schema","value","onChange"])]))),128)),m(o(Q),{type:"primary",onClick:p[2]||(p[2]=c=>R())},{default:l(()=>[M("Test")]),_:1})])):_("",!0),u.testResponse?(t(),a("div",Fe,[m(o(ue),{orientation:"left"},{default:l(()=>[M("Response")]),_:1}),u.testResponse.errors.length>0?(t(),a("div",Ve,[(t(!0),a(C,null,$(u.testResponse.errors,c=>(t(),a("div",{key:c},A(c),1))),128))])):_("",!0),u.testResponse.returns&&Object.keys(u.testResponse.returns).length>0?(t(),a("div",xe,[O("span",null,[O("pre",null,A(JSON.stringify(u.testResponse.returns,null,2)),1)])])):_("",!0)])):_("",!0)]),_:1})):_("",!0)]),_:1})}}});export{ct as default};
//# sourceMappingURL=ConnectorEditor.e426b7e7.js.map