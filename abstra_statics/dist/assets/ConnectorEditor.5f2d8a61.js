import{d as v,v as T,a9 as N,o as O,V as q,aa as P,b as t,c as s,B as M,q as C,F as $,L as k,x as d,N as I,e as y,K as S,D as m,t as w,ak as E,z as _,a6 as V,y as L,a8 as G,a as U,G as z,S as F,w as x,J,W as Q,O as W,Q as H}from"./registerWidgets.ef15081f.js";import{b as j}from"./index.4cfafb06.js";import"./gateway.fa951f3a.js";import{C as X}from"./connector.f21dbbbc.js";import{a as Y}from"./asyncComputed.86367e33.js";import{B as Z}from"./BackButton.00f354de.js";import{S as K}from"./SaveButton.fd7bd133.js";import{L as ee}from"./CircularLoading.65cb8c64.js";import"./passwordlessManager.b4322d52.js";import"./activeRecord.8aa582bd.js";import"./icons.0b88355c.js";import"./lottie.b93b14fe.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="fd717cac-ac0d-4892-8fd4-d85cf2c9f891",e._sentryDebugIdIdentifier="sentry-dbid-fd717cac-ac0d-4892-8fd4-d85cf2c9f891")}catch{}})();const te={class:"tab"},se=v({__name:"Tab",props:{title:null,icon:null},setup(e){const o=e,u=T({isActive:!1,title:o.title,icon:o.icon}),n=N("addTab");return O(()=>{n(u)}),(l,a)=>q((t(),s("div",te,[M(l.$slots,"default",{},void 0,!0)],512)),[[P,u.isActive]])}});const D=C(se,[["__scopeId","data-v-497e4e8e"]]),ne=["value"],ae=v({__name:"TextInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){return(u,n)=>(t(),s("input",{value:e.value,onChange:n[0]||(n[0]=l=>o("change",l.target.value))},null,40,ne))}}),oe=["value"],ce=v({__name:"NumberInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){return(u,n)=>(t(),s("input",{value:e.value,type:"number",onChange:n[0]||(n[0]=l=>o("change",l.target.value))},null,40,oe))}}),le=["value"],ue=v({__name:"BooleanInput",props:{value:{type:Boolean},schema:null},emits:["change"],setup(e,{emit:o}){return(u,n)=>(t(),s("input",{value:e.value,type:"checkbox",onChange:n[0]||(n[0]=l=>o("change",l.target.checked))},null,40,le))}}),re={class:"oi"},ie={class:"oi-item-label"},de=v({__name:"ObjectInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){var g;const u=e,n=T({value:(g=u.value)!=null?g:{}}),l=(h,c)=>{n.value[h]=c,a()},a=()=>{o("change",n.value)};return(h,c)=>(t(),s("div",re,[(t(!0),s($,null,k(u.schema.values,(f,i)=>(t(),s("div",{key:i,class:"oi-item"},[d("div",ie,I(i),1),y(B,{class:"oi-item-input",schema:f,value:n.value[i],onChange:b=>l(i,b)},null,8,["schema","value","onChange"])]))),128))]))}});const _e=C(de,[["__scopeId","data-v-bd751ecc"]]),he={class:"ai"},me=["onClick"],pe=v({__name:"ArrayInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){var c;const n=T({value:(c=e.value)!=null?c:[]}),l=()=>{n.value.push(void 0)},a=f=>{n.value.splice(f,1),h()},g=(f,i)=>{n.value[f]=i,h()},h=()=>{o("change",n.value)};return(f,i)=>(t(),s("div",he,[(t(!0),s($,null,k(n.value,(b,r)=>(t(),s("div",{key:r,class:"ai-item"},[y(B,{schema:e.schema.items,value:b,onChange:p=>g(r,p)},null,8,["schema","value","onChange"]),d("button",{class:"ai-item-remove",onClick:p=>a(r)},"x",8,me)]))),128)),d("button",{class:"ai-item-add",onClick:i[0]||(i[0]=b=>l())},"Add")]))}});const ve=C(pe,[["__scopeId","data-v-a6c8b9fb"]]),ge=["value"],fe=["value"],be=v({__name:"OptionsInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){return(u,n)=>(t(),s("select",{value:e.value,onChange:n[0]||(n[0]=l=>o("change",l.target.value))},[(t(!0),s($,null,k(e.schema.values,l=>(t(),s("option",{key:l,value:l},I(l),9,fe))),128))],40,ge))}}),ye=["value"],$e=v({__name:"UnionInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){return(u,n)=>(t(),s("input",{value:e.value,onChange:n[0]||(n[0]=l=>o("change",l.target.value))},null,40,ye))}}),ke=["value"],Ie=v({__name:"AnyInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){return(u,n)=>(t(),s("input",{value:e.value,onChange:n[0]||(n[0]=l=>o("change",l.target.value))},null,40,ke))}}),Ce={string:ae,number:ce,boolean:ue,object:_e,array:ve,options:be,any:Ie,union:$e},xe={class:"gi"},Se={key:0,class:"gi-header"},Te={key:0,class:"gi-label"},Me={key:1,class:"gi-tags"},we={key:0,class:"gi-required"},Be={key:1,class:"gi-required"},Ae={key:1,class:"gi-description"},Re=v({__name:"GenericInput",props:{value:null,schema:null},emits:["change"],setup(e,{emit:o}){const u=e,n=S(()=>({component:Ce[u.schema.type],props:{value:u.value,schema:u.schema}}));return(l,a)=>(t(),s("div",xe,["label"in e.schema?(t(),s("div",Se,["label"in e.schema?(t(),s("label",Te,I(e.schema.label),1)):m("",!0),"required"in e.schema||"secret"in e.schema?(t(),s("div",Me,["required"in e.schema&&e.schema.required?(t(),s("span",we,"[Required]")):m("",!0),"secret"in e.schema&&e.schema.secret?(t(),s("span",Be,"[Secret]")):m("",!0)])):m("",!0)])):m("",!0),"description"in e.schema?(t(),s("div",Ae,I(e.schema.description),1)):m("",!0),(t(),w(V(_(n).component),E({class:"gi-input"},_(n).props,{onChange:a[0]||(a[0]=g=>o("change",g))}),null,16))]))}});const B=C(Re,[["__scopeId","data-v-dd33d764"]]),je={class:"tab-menu"},De={class:"tabs"},Oe={key:0,class:"group"},qe={class:"group"},Ne=["onClick"],Pe={key:1,class:"group"},Ee={class:"content"},Ve=v({__name:"TabMenuUnderline",setup(e){const o=T([]),u=L(),n=a=>{const g=h=>h==a;o.forEach((h,c)=>{h.isActive=g(c)})},l=S(()=>o.findIndex(a=>a.isActive));return G("addTab",a=>{o.push(a)}),O(()=>{n(0)}),(a,g)=>{const h=U("icon");return t(),s("div",je,[d("div",De,[_(u).left?(t(),s("div",Oe,[M(a.$slots,"left",{},void 0,!0)])):m("",!0),d("div",qe,[(t(!0),s($,null,k(o,(c,f)=>(t(),s("button",{key:c.title,class:z(["form-tab",_(l)==f&&"active"]),onClick:i=>n(f)},[c.icon?(t(),w(h,{key:0,path:c.icon,fill:"#8692A5",width:"10",height:"10"},null,8,["path"])):m("",!0),F(" "+I(c.title),1)],10,Ne))),128))]),_(u).right?(t(),s("div",Pe,[M(a.$slots,"right",{},void 0,!0)])):m("",!0)]),d("div",Ee,[M(a.$slots,"default",{},void 0,!0)])])}}});const Le=C(Ve,[["__scopeId","data-v-f2e43fa2"]]),A=e=>(W("data-v-63dce332"),e=e(),H(),e),Ge={class:"page settings"},Ue={class:"page test"},ze={class:"test-method-selector"},Fe=A(()=>d("label",{class:"test-method-selector-label"},"Method",-1)),Je=A(()=>d("option",{value:null,disabled:"",selected:"",hidden:""},"Select a method",-1)),Qe=["value"],We={key:0,class:"test-method-parameters"},He=A(()=>d("label",{class:"test-method-parameters-label"},"Params",-1)),Xe={key:1,class:"test-method-response"},Ye=A(()=>d("label",{class:"test-method-response-label"},"Response",-1)),Ze={key:0,class:"test-method-response-errors"},Ke={key:1,class:"test-method-response-returns"},et={class:"test-method-response-returns-value"},tt=v({__name:"ConnectorEditor",setup(e){const o=S(()=>{var i;return`/projects/${(i=a.value)==null?void 0:i.projectId}/connectors`}),n=J().params.connectorId,{loading:l,result:a}=Y(()=>X.get(n)),g=S(()=>{var i;return(i=a.value)!=null&&i.schema.methods?Object.keys(a.value.schema.methods).reduce((b,r)=>{const p=a.value.schema.methods[r];return[...b,{key:r,...p}]},[]):[]}),h=S(()=>!a.value||!(a.value.type in j.schema)?null:j.schema[a.value.type]),c=T({testMethod:null,testParams:{},testResponse:null}),f=async()=>{!a.value||!c.testMethod||!c.testParams||(c.testResponse=await a.value.test(c.testMethod,c.testParams))};return(i,b)=>_(l)||!_(a)||!_(h)?(t(),w(ee,{key:0})):(t(),w(Le,{key:1,class:"connector-editor"},{left:x(()=>[y(Z,{link:_(o)},null,8,["link"])]),right:x(()=>[y(K,{model:_(a)},null,8,["model"])]),default:x(()=>[y(D,{title:"Settings"},{default:x(()=>[d("div",Ge,[(t(!0),s($,null,k(_(h).settings,(r,p)=>(t(),s("div",{key:p},[y(B,{schema:r,value:_(a).settings[p],onChange:R=>_(a).settings[p]=R},null,8,["schema","value","onChange"])]))),128))])]),_:1}),y(D,{title:"Test"},{default:x(()=>[d("div",Ue,[d("div",ze,[Fe,q(d("select",{"onUpdate:modelValue":b[0]||(b[0]=r=>c.testMethod=r),class:"test-method-selector-selector"},[Je,(t(!0),s($,null,k(_(g),r=>(t(),s("option",{key:r.key,value:r.key},I(r.label),9,Qe))),128))],512),[[Q,c.testMethod]])]),c.testMethod?(t(),s("div",We,[He,(t(!0),s($,null,k(_(a).schema.methods[c.testMethod].params,(r,p)=>(t(),s("div",{key:p,class:"test-field"},[y(B,{schema:r,value:c.testParams[p],onChange:R=>c.testParams[p]=R},null,8,["schema","value","onChange"])]))),128)),d("button",{class:"test-method-run",onClick:b[1]||(b[1]=r=>f())},"Test")])):m("",!0),c.testResponse?(t(),s("div",Xe,[Ye,c.testResponse.errors.length>0?(t(),s("div",Ze,[(t(!0),s($,null,k(c.testResponse.errors,r=>(t(),s("div",{key:r},I(r),1))),128))])):m("",!0),c.testResponse.returns&&Object.keys(c.testResponse.returns).length>0?(t(),s("div",Ke,[d("span",et,[d("pre",null,I(JSON.stringify(c.testResponse.returns,null,2)),1)])])):m("",!0)])):m("",!0)])]),_:1})]),_:1}))}});const mt=C(tt,[["__scopeId","data-v-63dce332"]]);export{mt as default};
//# sourceMappingURL=ConnectorEditor.5f2d8a61.js.map