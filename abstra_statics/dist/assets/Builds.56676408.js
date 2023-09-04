import{d as p,ey as u,F as m,b as f,u as _,eq as b,bu as y,eB as g,eC as w,er as i,bh as n,t as h}from"./registerWidgets.92d2f644.js";import{a as I}from"./asyncComputed.969e5e52.js";import"./gateway.b5fd6e0f.js";import{B as x}from"./build.cd36e0e4.js";import"./index.a8106eac.js";import{C as v}from"./CrudView.bf94fe37.js";import{K as B,M as C}from"./icons.f7e2c66d.js";import{r as D}from"./console.f3fdd9ce.js";import{f as k}from"./index.b048d0fb.js";import"./passwordlessManager.d1484834.js";import"./pubsub.cabffe13.js";import"./storage.63ab52ef.js";import"./activeRecord.1a640186.js";import"./DropdownMenu.737d17d7.js";import"./Modal.2ef1e90a.js";import"./LoadingIndicator.6e991a44.js";import"./lottie.8475a642.js";import"./index.75f517f3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="2f943563-e5b2-4a5e-8639-19316fe1ed79",e._sentryDebugIdIdentifier="sentry-dbid-2f943563-e5b2-4a5e-8639-19316fe1ed79")}catch{}})();const S=e=>(g("data-v-e61ab2b9"),e=e(),w(),e),V=S(()=>i("div",{class:"instructions"},[n(" Get started with the local editor in seconds: "),i("pre",null,`    $ pip install abstra --upgrade
    $ abstra serve ./your-project-directory
    `),n(" And you're done! Explore the local editor and start building apps. ")],-1)),j=p({__name:"Builds",setup(e){const s=u().params.projectId,{loading:d,result:l}=I(()=>x.list(s)),c=m(()=>{var a,r;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions"}],rows:(r=(a=l.value)==null?void 0:a.map(t=>({key:t.id,cells:[{text:t.id.slice(0,8),classes:["centered"]},{text:k(t.createdAt,Date.now(),{addSuffix:!0}),classes:[]},{text:t.status+(t.log?": "+t.log:""),classes:[]},{text:"",classes:["centered"],actions:[{icon:B,label:"View logs",onClick:()=>D.push({name:"logs",params:{projectId:s},query:{buildId:t.id}})},{icon:C,label:"Download files",onClick:()=>t.download()}]}]})))!=null?r:[]}});return(a,r)=>(f(),_(v,{"entity-name":"build",loading:y(d),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:c.value},{"empty-description":b(()=>[V]),_:1},8,["loading","table"]))}});const Q=h(j,[["__scopeId","data-v-e61ab2b9"]]);export{Q as default};
//# sourceMappingURL=Builds.56676408.js.map
