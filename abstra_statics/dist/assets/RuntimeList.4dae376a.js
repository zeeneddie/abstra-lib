import{D as v,_ as g}from"./DropdownMenu.06bbb53d.js";import{L as w}from"./CircularLoading.30fd4d73.js";import{d as x,b as t,t as d,c as a,x as s,N as n,B as I,F as u,L as m,D as B,a as D,G as _,w as C,S as L,O as S,Q as T,q as N}from"./registerWidgets.68572380.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[l]="2d1aecd3-c2b4-40bc-ba0b-f741ba94ba79",e._sentryDebugIdIdentifier="sentry-dbid-2d1aecd3-c2b4-40bc-ba0b-f741ba94ba79")}catch{}})();const b=e=>(S("data-v-a0aa59f6"),e=e(),T(),e),R={key:1,class:"runtimes-container"},U={class:"header"},V={class:"title-wrapper"},E={class:"description"},F={key:0,class:"empty-list"},j=b(()=>s("img",{src:g},null,-1)),q={class:"empty-list-title"},z={class:"empty-list-description"},A={key:1},G={key:2},M={key:2,class:"video-section"},O=b(()=>s("h1",null,"See it in action",-1)),Q=["src"],$=x({__name:"RuntimeList",props:{loading:{type:Boolean},title:null,description:null,createButtonText:null,emptyTitle:null,videoUrl:null,table:null},emits:["create"],setup(e,{emit:l}){async function c(){l("create")}return(f,H)=>{const h=D("router-link");return e.loading?(t(),d(w,{key:0,class:"loading-wrapper",justify:"center"})):(t(),a("div",R,[s("div",U,[s("div",V,[s("h1",null,n(e.title),1),s("p",E,n(e.description),1),s("button",{onClick:c},n(e.createButtonText),1)])]),e.table.rows.length===0?(t(),a("div",F,[j,s("div",q,n(e.emptyTitle),1),s("div",z,[I(f.$slots,"empty-description",{},void 0,!0)]),s("button",{onClick:c},n(e.createButtonText),1)])):(t(),a("table",A,[s("thead",null,[(t(!0),a(u,null,m(e.table.columns,(i,r)=>(t(),a("td",{key:r,class:"cell"},n(i.name),1))),128))]),(t(!0),a(u,null,m(e.table.rows,(i,r)=>{var y;return t(),a("tr",{key:r,class:_((y=i.classes)!=null?y:[])},[(t(!0),a(u,null,m(i.cells,(o,k)=>{var p;return t(),a("td",{key:k,class:_((p=o.classes)!=null?p:[])},[o.actions?(t(),d(v,{key:0,title:"Actions","highlight-last":!0,options:o.actions,payload:{key:i.key}},null,8,["options","payload"])):o.link?(t(),d(h,{key:1,to:o.link,class:"runtime-title"},{default:C(()=>[L(n(o.text),1)]),_:2},1032,["to"])):(t(),a("div",G,n(o.text),1))],2)}),128))],2)}),128))])),e.videoUrl?(t(),a("section",M,[O,s("iframe",{class:"runtimes-example-video",src:e.videoUrl,title:"runtimes example",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,Q)])):B("",!0)]))}}});const W=N($,[["__scopeId","data-v-a0aa59f6"]]);export{W as R};
//# sourceMappingURL=RuntimeList.4dae376a.js.map
