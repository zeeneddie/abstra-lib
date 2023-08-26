import{d as u,K as m,b as f,t as _,w as b,z as d,J as y,O as g,Q as w,x as i,U as n,q as h}from"./registerWidgets.4d894c88.js";import{a as x}from"./asyncComputed.f06ba433.js";import"./gateway.29937745.js";import{B as I}from"./build.341e6bb3.js";import"./index.c8e558b7.js";import{C as v}from"./CrudView.a2e3bf47.js";import{K as B,M as D}from"./icons.d073d483.js";import{r as C}from"./console.3a2d22f0.js";import{f as k}from"./index.b048d0fb.js";import"./passwordlessManager.3d3954ba.js";import"./pubsub.4864d8e8.js";import"./activeRecord.df5c2816.js";import"./DropdownMenu.2e4a006c.js";import"./Modal.e78ee0d6.js";import"./LoadingIndicator.6ba4f4ce.js";import"./lottie.759f75ba.js";import"./index.cb27b144.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="0c393f5a-b4d2-464b-a5df-76d2a880c3c1",e._sentryDebugIdIdentifier="sentry-dbid-0c393f5a-b4d2-464b-a5df-76d2a880c3c1")}catch{}})();const S=e=>(g("data-v-e61ab2b9"),e=e(),w(),e),V=S(()=>i("div",{class:"instructions"},[n(" Get started with the local editor in seconds: "),i("pre",null,`    $ pip install abstra --upgrade
    $ abstra serve ./your-project-directory
    `),n(" And you're done! Explore the local editor and start building apps. ")],-1)),j=u({__name:"Builds",setup(e){const a=y().params.projectId,{loading:c,result:l}=x(()=>I.list(a)),p=m(()=>{var s,r;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions"}],rows:(r=(s=l.value)==null?void 0:s.map(t=>({key:t.id,cells:[{text:t.id.slice(0,8),classes:["centered"]},{text:k(t.createdAt,Date.now(),{addSuffix:!0}),classes:[]},{text:t.status+(t.log?": "+t.log:""),classes:[]},{text:"",classes:["centered"],actions:[{icon:B,label:"View logs",onClick:()=>C.push({name:"logs",params:{projectId:a},query:{buildId:t.id}})},{icon:D,label:"Download files",onClick:()=>t.download()}]}]})))!=null?r:[]}});return(s,r)=>(f(),_(v,{"entity-name":"build",loading:d(c),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:d(p)},{"empty-description":b(()=>[V]),_:1},8,["loading","table"]))}});const H=h(j,[["__scopeId","data-v-e61ab2b9"]]);export{H as default};
//# sourceMappingURL=Builds.46eacb0f.js.map
