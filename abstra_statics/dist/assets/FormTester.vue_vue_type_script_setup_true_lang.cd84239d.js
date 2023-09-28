import{d as R,r as y,G as T,b as c,c as f,w as m,f as n,er as w,ez as x,e as K,b0 as B,eA as E,u as t,bu as F,c4 as I,c5 as C,H as A,ex as D,bP as M}from"./registerWidgets.dc9f1313.js";import{R as N}from"./SmartConsole.92c3a8ad.js";import{c as P,A as v}from"./Title.aac0de3b.js";import{F as L}from"./Form.14d2c95c.js";import{W as V}from"./workspaces.1cc68e1c.js";import{R as W,F as G}from"./broker.6a95255e.js";import{a as H}from"./asyncComputed.b23fa538.js";import{r as U}from"./index.306aab55.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="23473e58-5592-46ce-b883-1261614ff238",o._sentryDebugIdIdentifier="sentry-dbid-23473e58-5592-46ce-b883-1261614ff238")}catch{}})();const z="forms_workspace_id_path_key",$="This path is already being used by another form or dash on your workspace",te=R({__name:"FormSettings",props:{form:{}},setup(o){const e=y(o.form),d=[{label:"General",props:[{label:"Form name",valueKey:"title"}]},{label:"Welcome Screen",props:[{label:"Title",valueKey:"welcomeTitle"},{label:"Subtitle",valueKey:"startMessage"},{label:"Start button text",valueKey:"startButtonText"}]},{label:"Ending Screen",props:[{label:"Title",valueKey:"endMessage"},{label:"Restart button text",valueKey:"restartButtonText"}]},{label:"Alert Messages",props:[{label:"Error message",valueKey:"errorMessage"}]}],g=T({pathError:null,sectionsShown:[!0,!1,!1]}),b=l=>{l.detail.includes(z)&&(g.pathError=$)};return addEventListener("hasura-error",b),(l,u)=>(c(),f(t(L),{layout:"vertical"},{default:m(()=>[n(N,{runtime:e.value},null,8,["runtime"]),(c(),w(F,null,x(d,a=>K("div",{key:a.label},[n(t(P),{level:3},{default:m(()=>[B(E(a.label),1)]),_:2},1024),(c(!0),w(F,null,x(a.props,s=>(c(),f(t(v),{key:s.label,label:s.label},{default:m(()=>[n(t(I),{type:"text",value:e.value[s.valueKey],onChange:p=>e.value[s.valueKey]=p.target.value},null,8,["value","onChange"])]),_:2},1032,["label"]))),128))])),64)),n(t(v),{label:"Start smart form automatically"},{default:m(()=>[n(t(C),{checked:e.value.autoStart,"onUpdate:checked":u[0]||(u[0]=a=>e.value.autoStart=a)},null,8,["checked"])]),_:1}),n(t(v),{label:"Allow the user to restart the smart form after it is over"},{default:m(()=>[n(t(C),{checked:e.value.allowRestart,"onUpdate:checked":u[1]||(u[1]=a=>e.value.allowRestart=a)},null,8,["checked"])]),_:1})]),_:1}))}}),re=R({__name:"FormTester",props:{form:{},logService:{}},setup(o,{expose:i}){var h,k,_,S;const e=o,{result:d,loading:g}=H(()=>V.get()),b=y({}),l=A(()=>W.create({formPath:e.form.path}));(h=l.value)==null||h.on("stdout",r=>{e.logService.log({type:"stdout",log:r.log})}),(k=l.value)==null||k.on("stderr",r=>{e.logService.log({type:"stderr",log:r.log})}),(_=l.value)==null||_.onClose(()=>{e.logService.log({type:"stderr",log:"Program closed"})}),(S=l.value)==null||S.on("files:changed",()=>{e.logService.log({type:"files-changed",log:"Files changed"})});const u=D(),a=({path:r})=>{U("editor",u,r)},s=y(null);async function p(){var r;return e.logService.log({type:"restart"}),(r=s.value)==null?void 0:r.run()}return i({restart:p}),(r,j)=>t(g)||!t(d)?(c(),f(t(M),{key:0})):(c(),f(G,{key:1,ref_key:"runner",ref:s,form:r.form.makeRunnerData(t(d)),params:b.value,"is-preview":"","enable-auto-focus":"",broker:l.value,onNavigate:a,onLogout:p},null,8,["form","params","broker"]))}});export{re as _,te as a};
//# sourceMappingURL=FormTester.vue_vue_type_script_setup_true_lang.cd84239d.js.map