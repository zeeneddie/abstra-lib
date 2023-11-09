var z=Object.defineProperty;var F=(a,e,t)=>e in a?z(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var u=(a,e,t)=>(F(a,typeof e!="symbol"?e+"":e,t),t);import{f as i,b7 as E,d as I,ey as V,ez as H,r as O,H as N,b as r,et as d,b9 as v,eA as y,e as w,eB as x,ex as L,I as D,ev as h,c as b,w as o,u as p,v as T,eC as R,eD as M,o as U,L as q,aB as g,b_ as S,cC as J,a as G}from"./outputWidgets.d6334d0e.js";import{f as Q,h as X,j as Y,d as Z,c as K,m as ee,p as te,w as ae}from"./icons.09e1f108.js";import{T as ne}from"./Tooltip.bb730cca.js";import{_ as se}from"./logo.084e5d7c.js";import{L as re}from"./LoginBlock.c6fae98c.js";import{a as oe}from"./asyncComputed.95fd0999.js";import{A as ie}from"./index.2221e01c.js";import{A as ce}from"./index.6da051f8.js";import{B as le}from"./index.bf91a588.js";import{_ as ue}from"./DocsButton.vue_vue_type_script_setup_true_lang.cfa74815.js";import{B as de}from"./BaseLayout.17a4d39d.js";import{c as pe}from"./index.02b3bfd1.js";import"./workspaces.27037c79.js";import"./activeRecord.aa738a85.js";import"./pubsub.9d7d329e.js";import"./url.dce42ecb.js";import"./popupNotifcation.03d4e2fa.js";import"./index.885880ce.js";import"./transButton.97ae4a5a.js";import"./isNumeric.75337b1e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="6dad84a2-d2dd-4504-8bbc-8611f8d9d30e",a._sentryDebugIdIdentifier="sentry-dbid-6dad84a2-d2dd-4504-8bbc-8611f8d9d30e")}catch{}})();var _e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"};const me=_e;function P(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},s=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),s.forEach(function(l){fe(a,l,t[l])})}return a}function fe(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var C=function(e,t){var s=P({},e,t.attrs);return i(E,P({},s,{icon:me}),null)};C.displayName="WarningOutlined";C.inheritAttrs=!1;const he=C,be={class:"sidebar"},ge={class:"section-name"},ve=["onClick"],ye={class:"item-name"},we={key:0,class:"tag soon"},xe={key:1,class:"tag beta"},ke={key:2,class:"tag cloud"},Oe=I({__name:"Sidebar",setup(a){var f;const e=V(),t=H(),s=O((f=t.name)!=null?f:"forms"),l=N(()=>[{name:"Runtime",items:[{name:"Forms",icon:Q,path:"forms"},{name:"Hooks",icon:X,path:"hooks"},{name:"Jobs",icon:Y,path:"jobs",cloud:!0},{name:"Dashes",icon:Z,path:"dashes",beta:!0}]},{name:"Settings",items:[{name:"Style",icon:K,path:"style"},{name:"Sidebar",icon:ee,path:"sidebar"},{name:"Packages",icon:te,path:"requirements"}]}]),k=m=>{m.unavailable||(e.push(m.path),s.value=m.path)};return(m,B)=>(r(),d("div",be,[(r(!0),d(v,null,y(l.value,c=>(r(),d("div",{key:c.name,class:"section"},[w("span",ge,x(c.name),1),(r(!0),d(v,null,y(c.items,n=>(r(),d("div",{key:n.name,role:"button",class:L(["item",{active:s.value===n.path,disabled:n.unavailable||c.cloud}]),tabindex:"0",onClick:_=>k(n)},[i(D,{class:L(["icon",{disabled:n.unavailable,active:s.value===n.path}]),path:n.icon,width:"20",height:"20"},null,8,["class","path"]),w("span",ye,x(n.name),1),n.unavailable?(r(),d("span",we,"SOON")):h("",!0),n.beta?(r(),d("span",xe,"BETA")):h("",!0),n.cloud?(r(),d("span",ke,"CLOUD")):h("",!0),n.warning?(r(),b(ne,{key:3,class:"warning",text:n.warning,fixed:!0,top:18,left:18},{default:o(()=>[i(D,{path:p(ae),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):h("",!0)],10,ve))),128))]))),128))]))}});const Se=T(Oe,[["__scopeId","data-v-a17c56d8"]]);const Ie={},j=a=>(R("data-v-81cd596e"),a=a(),M(),a),Ce={class:"logo"},Ae=j(()=>w("img",{src:se,alt:"Abstra cloud logo"},null,-1)),Be=j(()=>w("span",null," Abstra ",-1)),$e=[Ae,Be];function Le(a,e){return r(),d("div",Ce,$e)}const De=T(Ie,[["render",Le],["__scopeId","data-v-81cd596e"]]);class Pe{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){if(!(await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"})).ok)throw new Error("Failed to fix")}}const W=new Pe;class Ne{constructor(e,t){u(this,"name");u(this,"label");u(this,"description");u(this,"ruleName");this.name=e.name,this.label=e.label,this.description=e.description,this.ruleName=t}async fix(){await W.fix(this.ruleName,this.name)}}class A{constructor(e){u(this,"name");u(this,"label");u(this,"description");u(this,"type");u(this,"fixes");u(this,"valid");this.name=e.name,this.label=e.label,this.description=e.description,this.type=e.type,this.fixes=e.fixes.map(t=>new Ne(t,e.name)),this.valid=e.valid}static async check(){return(await W.check()).map(t=>new A(t))}}const Te=I({__name:"Linter",setup(a){const{result:e,refetch:t}=oe(()=>A.check()),s=N(()=>{var c,n;return(n=(c=e.value)==null?void 0:c.filter(_=>!_.valid))!=null?n:[]}),l=O(!1);async function k(c){l.value=!0;try{await c.fix(),t()}finally{l.value=!1}}const f=O(!1);function m(){setTimeout(async()=>{await t(),f.value&&m()},1e3)}U(()=>{f.value=!0,m()}),q(()=>{f.value=!1});function B(c){return c.type==="bug"?"warning":c.type==="security"?"error":"info"}return(c,n)=>s.value.length>0?(r(),b(p(J),{key:0},{content:o(()=>[i(p(ce),{direction:"vertical"},{default:o(()=>[(r(!0),d(v,null,y(s.value,_=>(r(),b(p(ie),{key:_.name,type:B(_)},{message:o(()=>[g(x(_.label),1)]),description:o(()=>[g(x(_.description),1)]),action:o(()=>[(r(!0),d(v,null,y(_.fixes,$=>(r(),b(p(S),{key:$.name,loading:l.value,disabled:l.value,onClick:je=>k($)},{default:o(()=>[g(" Fix ")]),_:2},1032,["loading","disabled","onClick"]))),128))]),_:2},1032,["type"]))),128))]),_:1})]),default:o(()=>[i(p(le),{count:s.value.length},{default:o(()=>[i(p(S),null,{default:o(()=>[i(p(he))]),_:1})]),_:1},8,["count"])]),_:1})):h("",!0)}}),st=I({__name:"Workspace",setup(a){return(e,t)=>{const s=G("router-view");return r(),b(de,null,{navbar:o(()=>[i(p(pe),{style:{padding:"5px 10px"}},{title:o(()=>[i(De)]),extra:o(()=>[i(Te),i(p(S),{type:"primary",href:"/_editor/workflow"},{default:o(()=>[g("Workflow editor")]),_:1}),i(ue),i(re)]),_:1})]),sidebar:o(()=>[i(Se,{class:"sidebar"})]),content:o(()=>[i(s)]),_:1})}}});export{st as default};
//# sourceMappingURL=Workspace.f87cfdf7.js.map
