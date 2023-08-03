import{d as u,K as m,b as _,t as y,w as f,z as r,J as b,O as g,Q as h,x as i,S as n,q as w}from"./registerWidgets.db466a36.js";import{a as I}from"./asyncComputed.9891ab9c.js";import"./gateway.6ecad65a.js";import{B as x}from"./build.73154dfd.js";import{C as v}from"./CrudView.0d3fe88b.js";import"./passwordlessManager.3137a6b4.js";import"./activeRecord.74699a56.js";import"./DropdownMenu.637f3ff1.js";import"./Modal.94856ed8.js";import"./LoadingIndicator.c4c5e69c.js";import"./lottie.e796547d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="34c1a45e-e9ed-434b-a97a-2c0326edcfdd",e._sentryDebugIdIdentifier="sentry-dbid-34c1a45e-e9ed-434b-a97a-2c0326edcfdd")}catch{}})();const B=e=>(g("data-v-1b7a68a8"),e=e(),h(),e),C=B(()=>i("div",{class:"instructions"},[n(" Get started with the local editor in seconds: "),i("pre",null,`    $ pip install abstra --upgrade
    $ abstra serve ./your-project-directory
    `),n(" And you're done! Explore the local editor and start building apps. ")],-1)),S=u({__name:"Builds",setup(e){const d=b().params.projectId,{loading:c,result:p}=I(()=>x.list(d)),l=m(()=>{var o,s;return{columns:[{name:"Id"},{name:"Creation date"},{name:"Status"}],rows:(s=(o=p.value)==null?void 0:o.map(t=>({key:t.id,cells:[{text:t.id,classes:["title","centered"]},{text:t.createdAt.toLocaleString(),classes:[]},{text:t.status,classes:["centered"]}]})))!=null?s:[]}});return(o,s)=>(_(),y(v,{"entity-name":"build",loading:r(c),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:r(l)},{"empty-description":f(()=>[C]),_:1},8,["loading","table"]))}});const J=w(S,[["__scopeId","data-v-1b7a68a8"]]);export{J as default};
//# sourceMappingURL=Builds.93d49539.js.map
