import{d as f,K as m,b as n,c as a,A as w,q as v,B as b,G as y,v as k,e as i,w as C,N as d,D as u,t as g,I as p,F as x,L as B,x as _}from"./registerWidgets.cecc7add.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f78ccc6a-2073-4dae-9d43-aae46c942a8d",e._sentryDebugIdIdentifier="sentry-dbid-f78ccc6a-2073-4dae-9d43-aae46c942a8d")}catch{}})();const j="/assets/empty-box.758770e4.svg",D=f({__name:"Triangle",props:{color:{type:String,required:!1}},setup(e){const t=e,s=m(()=>t.color?{borderColor:`${t.color} transparent transparent transparent`}:{});return(l,r)=>(n(),a("div",{class:"triangle",style:w(s.value)},null,4))}});const I=v(D,[["__scopeId","data-v-7ca41e33"]]),S=f({__name:"BoxShadowButton",props:{active:{type:Boolean}},setup(e){return(t,s)=>(n(),a("button",{class:y(["box-shadow-button",{active:t.active}])},[b(t.$slots,"default",{},void 0,!0)],2))}});const q=v(S,[["__scopeId","data-v-04d82775"]]),$={class:"dropdown-menu"},L={key:0},N={key:0,class:"options"},A=["onClick"],M={key:0,class:"line"},O=f({__name:"DropdownMenu",props:{title:{type:String,required:!1},options:{type:Array,required:!0},highlightLast:{type:Boolean,required:!1,default:!1},selectIcon:{type:Object,required:!1},payload:{required:!1,default:()=>({}),type:Object}},setup(e){const t=e,s=k({open:!1}),l=m(()=>t.options[t.options.length-1]),r=async h=>{await h(t.payload),s.open=!1};return(h,c)=>(n(),a("div",$,[i(q,{class:"title",active:s.open,onClick:c[0]||(c[0]=o=>s.open=!s.open)},{default:C(()=>[e.title?(n(),a("span",L,d(e.title),1)):u("",!0),e.selectIcon?(n(),g(p,{key:1,class:"select-icon",width:"18",height:"18",path:e.selectIcon,fill:"#6D7C93"},null,8,["path"])):(n(),g(I,{key:2,class:"icon",color:"#414a58"}))]),_:1},8,["active"]),s.open?(n(),a("div",N,[(n(!0),a(x,null,B(e.options.slice(0,-1),o=>(n(),a("div",{key:o.label,class:y(["option",{dangerous:!!o.dangerous}]),onClick:T=>r(o.onClick)},[i(p,{class:"option-icon",width:"14",height:"14",path:o.icon,fill:"#6D7C93"},null,8,["path"]),_("span",null,d(o.label),1)],10,A))),128)),e.highlightLast?(n(),a("div",M)):u("",!0),_("div",{class:y(["option",{dangerous:!!l.value.dangerous}]),onClick:c[1]||(c[1]=o=>r(l.value.onClick))},[i(p,{class:"option-icon",width:"14",height:"14",path:l.value.icon,fill:"#6D7C93"},null,8,["path"]),_("span",null,d(l.value.label),1)],2)])):u("",!0)]))}});const z=v(O,[["__scopeId","data-v-c4232f59"]]);export{z as D,j as _};
//# sourceMappingURL=DropdownMenu.4df8c96d.js.map
