import{F as b}from"./PhArrowSquareOut.vue.13447077.js";import{d as k,H as v,b as o,eu as u,c as d,u as t,w as n,ev as w,bf as C,aq as m,aC as h,eB as x,f as c,eD as D,v as I}from"./outputWidgets.6d35c6b1.js";import"./index.fa46d640.js";import"./index.4c0107d8.js";import{A as y}from"./index.955dc47e.js";import{a as _}from"./Text.3b2ffaec.js";import{C as B}from"./Card.3a07c675.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="41222d9c-fa4d-414d-9469-f512168db3de",a._sentryDebugIdIdentifier="sentry-dbid-41222d9c-fa4d-414d-9469-f512168db3de")}catch{}})();const H=k({__name:"HomeContent",props:{loading:{type:Boolean},workspace:{}},emits:["form-click"],setup(a,{emit:r}){const p=a,f=v(()=>{var e,i;return(i=(e=p.workspace)==null?void 0:e.sidebar.filter(s=>s.visible))!=null?i:[]});function g(e){r("form-click",e)}return(e,i)=>{var s;return o(),u("div",{class:"container",style:w({backgroundColor:(s=e.workspace)==null?void 0:s.theme})},[e.loading?(o(),d(t(C),{key:0})):f.value.length===0?(o(),d(t(_),{key:1,type:"secondary",style:{"font-size":"18px"}},{default:n(()=>[m(" There are no public forms available ")]),_:1})):(o(),d(t(y),{key:2,vertical:"",gap:"large",style:{padding:"120px 0"}},{default:n(()=>[(o(!0),u(h,null,x(f.value,l=>(o(),d(t(B),{key:l.id,class:"form-card",onClick:F=>g(l.path)},{default:n(()=>[c(t(y),{gap:"large",align:"center",justify:"space-between"},{default:n(()=>[c(t(_),{style:{"font-size":"18px","font-weight":"500"}},{default:n(()=>[m(D(l.name),1)]),_:2},1024),c(t(b),{color:"#000",width:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}))],4)}}});const j=I(H,[["__scopeId","data-v-e246816b"]]);export{j as H};
//# sourceMappingURL=HomeContent.8c1bca29.js.map
