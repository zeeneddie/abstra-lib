import{d as v,J as k,b as t,c as o,z as C,y as c,p as f,A as w,E as y,u as x,e as d,w as B,L as u,B as p,q as m,I as _,F as b,K as D,v as h}from"./registerWidgets.990552e9.js";const j="/assets/empty-box.758770e4.svg",I=v({__name:"Triangle",props:{color:{type:String,required:!1}},setup(e){const s=e,n=k(()=>s.color?{borderColor:`${s.color} transparent transparent transparent`}:{});return(l,i)=>(t(),o("div",{class:"triangle",style:C(c(n))},null,4))}});const S=f(I,[["__scopeId","data-v-7ca41e33"]]),q=v({__name:"BoxShadowButton",props:{active:{type:Boolean}},setup(e){return(s,n)=>(t(),o("button",{class:y(["box-shadow-button",{active:e.active}])},[w(s.$slots,"default",{},void 0,!0)],2))}});const $=f(q,[["__scopeId","data-v-04d82775"]]),L={class:"dropdown-menu"},z={key:0},A={key:0,class:"options"},M=["onClick"],N={key:0,class:"line"},O=v({__name:"DropdownMenu",props:{title:{type:String,required:!1},options:{type:Array,required:!0},highlightLast:{type:Boolean,required:!1,default:!1},selectIcon:{type:Object,required:!1},payload:{required:!1,default:()=>({}),type:Object}},setup(e){const s=e,n=x({open:!1}),l=k(()=>s.options[s.options.length-1]),i=async g=>{await g(s.payload),n.open=!1};return(g,r)=>(t(),o("div",L,[d($,{class:"title",active:n.open,onClick:r[0]||(r[0]=a=>n.open=!n.open)},{default:B(()=>[e.title?(t(),o("span",z,u(e.title),1)):p("",!0),e.selectIcon?(t(),m(_,{key:1,class:"select-icon",width:"18",height:"18",path:e.selectIcon,fill:"#6D7C93"},null,8,["path"])):(t(),m(S,{key:2,class:"icon",color:"#414a58"}))]),_:1},8,["active"]),n.open?(t(),o("div",A,[(t(!0),o(b,null,D(e.options.slice(0,-1),a=>(t(),o("div",{key:a.label,class:y(["option",{dangerous:!!a.dangerous}]),onClick:T=>i(a.onClick)},[d(_,{class:"option-icon",width:"14",height:"14",path:a.icon,fill:"#6D7C93"},null,8,["path"]),h("span",null,u(a.label),1)],10,M))),128)),e.highlightLast?(t(),o("div",N)):p("",!0),h("div",{class:y(["option",{dangerous:!!c(l).dangerous}]),onClick:r[1]||(r[1]=a=>i(c(l).onClick))},[d(_,{class:"option-icon",width:"14",height:"14",path:c(l).icon,fill:"#6D7C93"},null,8,["path"]),h("span",null,u(c(l).label),1)],2)])):p("",!0)]))}});const E=f(O,[["__scopeId","data-v-c4232f59"]]);export{E as D,j as _};
//# sourceMappingURL=DropdownMenu.b023d396.js.map
