import{d as v,y as _,v as f,b as c,c as r,x as d,z as m,A as t,B as i,D as S,E as k,G as h,q as C}from"./registerWidgets.69eb7b40.js";const M=v({__name:"Modal",props:{containerStyle:null,headerStyle:null,contentStyle:null},emits:["open","close"],setup(e,{expose:p,emit:n}){const u=_(),y=()=>{s.isOpened=!0,n("open")},o=()=>{s.isOpened=!1,n("close")};p({open:y,close:o});const s=f({isOpened:!1});return(a,l)=>(c(),r("div",{class:h(["background",s.isOpened&&"visible"]),onClick:o},[d("div",{class:"container",style:t(e.containerStyle),onClick:l[0]||(l[0]=k(()=>{},["stop"]))},[m(u).header?(c(),r("div",{key:0,class:"header",style:t(e.headerStyle)},[i(a.$slots,"header",{},void 0,!0)],4)):S("",!0),d("div",{class:"content",style:t(e.contentStyle)},[i(a.$slots,"content",{},void 0,!0)],4)],4)],2))}});const O=C(M,[["__scopeId","data-v-24f739ca"]]);export{O as M};
//# sourceMappingURL=Modal.bf2e2708.js.map
