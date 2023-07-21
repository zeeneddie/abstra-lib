import{d as l,J as u,b as m,q as _,w as y,y as s,H as b,N as f,O as h,v as r,R as i,p as x}from"./registerWidgets.4cc86716.js";import{a as v}from"./asyncComputed.f9d446a7.js";import"./gateway.6112d0c1.js";import{B}from"./build.3fdd5895.js";import{C as g}from"./CrudView.58195497.js";import"./passwordlessManager.d432fb48.js";import"./activeRecord.57c6bf02.js";import"./DropdownMenu.e399150c.js";import"./CircularLoading.249aa989.js";import"./Modal.7d907bdb.js";const w=e=>(f("data-v-1b7a68a8"),e=e(),h(),e),I=w(()=>r("div",{class:"instructions"},[i(" Get started with the local editor in seconds: "),r("pre",null,`    $ pip install abstra --upgrade
    $ abstra serve ./your-project-directory
    `),i(" And you're done! Explore the local editor and start building apps. ")],-1)),C=l({__name:"Builds",setup(e){const d=b().params.projectId,{loading:c,result:n}=v(()=>B.list(d)),p=u(()=>{var a,o;return{columns:[{name:"Id"},{name:"Creation date"},{name:"Status"}],rows:(o=(a=n.value)==null?void 0:a.map(t=>({key:t.id,cells:[{text:t.id,classes:["title","centered"]},{text:t.createdAt.toLocaleString(),classes:[]},{text:t.status,classes:["centered"]}]})))!=null?o:[]}});return(a,o)=>(m(),_(g,{"entity-name":"build",loading:s(c),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:s(p)},{"empty-description":y(()=>[I]),_:1},8,["loading","table"]))}});const H=x(C,[["__scopeId","data-v-1b7a68a8"]]);export{H as default};
//# sourceMappingURL=Builds.32230db9.js.map
