import{a as g}from"./ant-design.e9641753.js";import{d as i,eH as _,K as m,o as p,N as y,b as f,eu as h,x as b,r as w,f as c,w as C,aJ as k,ey as E,u as L,c4 as B,bg as D}from"./outputWidgets.300f3e96.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="c522b1e5-8ee7-48e2-91c0-1b6aaad02856",s._sentryDebugIdIdentifier="sentry-dbid-c522b1e5-8ee7-48e2-91c0-1b6aaad02856")}catch{}})();const I={class:"unsaved-changes-handler"},u="You have unsaved changes. Are you sure you want to leave?",U=i({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(s){const n=s,t=a=>(a=a||window.event,a&&(a.returnValue=u),u),r=()=>{window.addEventListener("beforeunload",t)};_(async(a,l,o)=>{if(!n.hasChanges)return o();await g(u)?o():o(!1)});const e=()=>window.removeEventListener("beforeunload",t),d=a=>a?r():e();return m(()=>n.hasChanges,d),p(()=>d(n.hasChanges)),y(e),(a,l)=>(f(),h("div",I))}});const H=b(U,[["__scopeId","data-v-fa94acdd"]]),K=i({__name:"SaveButton",props:{model:{}},setup(s){const n=s,t=w(!1);async function r(){t.value=!0;try{await n.model.save()}finally{t.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),r())}),addEventListener("beforeunload",e=>{n.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,d)=>{var a,l,o;return f(),h(D,null,[c(L(B),{class:E(["save-button",{changes:(a=e.model)==null?void 0:a.hasChanges()}]),loading:t.value,disabled:!((l=e.model)!=null&&l.hasChanges()),onClick:d[0]||(d[0]=v=>r())},{default:C(()=>[k(" Save ")]),_:1},8,["class","loading","disabled"]),c(H,{"has-changes":(o=e.model)==null?void 0:o.hasChanges()},null,8,["has-changes"])],64)}}});export{K as _};
//# sourceMappingURL=SaveButton.vue_vue_type_script_setup_true_lang.696d43cd.js.map
