import{F as b}from"./PhArrowSquareOut.vue.ffd5aa73.js";import{d as k,H as v,b as o,eu as u,c,u as t,w as n,ev as w,bf as C,aq as m,aC as h,eB as x,f as d,eD as D,v as I}from"./outputWidgets.1c4947c7.js";import"./index.4e91d000.js";import"./index.a9ee542a.js";import{A as y}from"./index.a9af7b0b.js";import{a as _}from"./Text.4ed32514.js";import{C as B}from"./Card.10f7bd77.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="1702f544-dcc2-42e6-8a92-e98c97a0ef84",a._sentryDebugIdIdentifier="sentry-dbid-1702f544-dcc2-42e6-8a92-e98c97a0ef84")}catch{}})();const H=k({__name:"HomeContent",props:{loading:{type:Boolean},workspace:{}},emits:["form-click"],setup(a,{emit:r}){const p=a,f=v(()=>{var e,i;return(i=(e=p.workspace)==null?void 0:e.sidebar.filter(s=>s.visible))!=null?i:[]});function g(e){r("form-click",e)}return(e,i)=>{var s;return o(),u("div",{class:"container",style:w({backgroundColor:(s=e.workspace)==null?void 0:s.theme})},[e.loading?(o(),c(t(C),{key:0})):f.value.length===0?(o(),c(t(_),{key:1,type:"secondary",style:{"font-size":"18px"}},{default:n(()=>[m(" There are no public forms available ")]),_:1})):(o(),c(t(y),{key:2,vertical:"",gap:"large",style:{padding:"120px 0"}},{default:n(()=>[(o(!0),u(h,null,x(f.value,l=>(o(),c(t(B),{key:l.id,class:"form-card",onClick:F=>g(l.path)},{default:n(()=>[d(t(y),{gap:"large",align:"center",justify:"space-between"},{default:n(()=>[d(t(_),{style:{"font-size":"18px","font-weight":"500"}},{default:n(()=>[m(D(l.name),1)]),_:2},1024),d(t(b),{color:"#000",width:"20"})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}))],4)}}});const j=I(H,[["__scopeId","data-v-e246816b"]]);export{j as H};
//# sourceMappingURL=HomeContent.a28b2ed0.js.map
