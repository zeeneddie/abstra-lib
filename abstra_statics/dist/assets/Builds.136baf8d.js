import{d as p,ey as u,F as m,b as f,u as _,eq as b,bu as y,eB as g,eC as w,er as i,bh as n,t as h}from"./registerWidgets.ff0e603c.js";import{a as I}from"./asyncComputed.47db4727.js";import"./gateway.69285524.js";import{B as x}from"./build.d4a495ea.js";import"./index.3750a98d.js";import{C as v}from"./CrudView.edc9a540.js";import{K as B,M as C}from"./icons.e90de051.js";import{r as D}from"./console.601dec87.js";import{f as k}from"./index.b048d0fb.js";import"./passwordlessManager.c02d6ee2.js";import"./pubsub.bd8735a3.js";import"./storage.db287aee.js";import"./activeRecord.193d97cb.js";import"./DropdownMenu.4c2a4e7f.js";import"./Modal.61a541af.js";import"./LoadingIndicator.40ce0e4a.js";import"./lottie.0af290d8.js";import"./index.e3ad034d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="2890e31e-45a1-41f3-913a-3c3a783b1685",e._sentryDebugIdIdentifier="sentry-dbid-2890e31e-45a1-41f3-913a-3c3a783b1685")}catch{}})();const S=e=>(g("data-v-e61ab2b9"),e=e(),w(),e),V=S(()=>i("div",{class:"instructions"},[n(" Get started with the local editor in seconds: "),i("pre",null,`    $ pip install abstra --upgrade
    $ abstra serve ./your-project-directory
    `),n(" And you're done! Explore the local editor and start building apps. ")],-1)),j=p({__name:"Builds",setup(e){const a=u().params.projectId,{loading:d,result:l}=I(()=>x.list(a)),c=m(()=>{var s,r;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions"}],rows:(r=(s=l.value)==null?void 0:s.map(t=>({key:t.id,cells:[{text:t.id.slice(0,8),classes:["centered"]},{text:k(t.createdAt,Date.now(),{addSuffix:!0}),classes:[]},{text:t.status+(t.log?": "+t.log:""),classes:[]},{text:"",classes:["centered"],actions:[{icon:B,label:"View logs",onClick:()=>D.push({name:"logs",params:{projectId:a},query:{buildId:t.id}})},{icon:C,label:"Download files",onClick:()=>t.download()}]}]})))!=null?r:[]}});return(s,r)=>(f(),_(v,{"entity-name":"build",loading:y(d),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:c.value},{"empty-description":b(()=>[V]),_:1},8,["loading","table"]))}});const Q=h(j,[["__scopeId","data-v-e61ab2b9"]]);export{Q as default};
//# sourceMappingURL=Builds.136baf8d.js.map