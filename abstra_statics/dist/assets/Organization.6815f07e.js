import{S as m}from"./Sidebar.0abdc27c.js";import{N as p}from"./Navbar.a1669887.js";import{F as d,G as l,H as _}from"./icons.03f7ad73.js";import{d as u,K as b,b as g,c as v,e,z as t,x as s,w as f,F as z,J as h,a as O,O as w,Q as x,q as I}from"./registerWidgets.802bba2f.js";import{a as S}from"./asyncComputed.1364aaa9.js";import"./utils.acbba3b4.js";import{O as y}from"./organization.843e0012.js";import"./Tooltip.345f0ce8.js";import"./logo.084e5d7c.js";import"./passwordlessManager.d5134797.js";import"./pubsub.a0411919.js";const B=a=>(w("data-v-580769d7"),a=a(),x(),a),C={class:"organization"},N=B(()=>s("div",null,"div",-1)),k=u({__name:"Organization",setup(a){const n=h().params.organizationId,{result:o}=S(()=>y.get(n)),r=b(()=>o.value?[{label:o.value.name,path:`/organizations/${o.value.id}`}]:void 0),i=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:_,path:"billing",unavailable:!0}]}];return(j,M)=>{const c=O("router-view");return g(),v(z,null,[e(p,{breadcrumb:t(r)},null,8,["breadcrumb"]),s("div",C,[e(m,{class:"sidebar",sections:t(i)},{default:f(()=>[N]),_:1},8,["sections"]),e(c)])],64)}}});const A=I(k,[["__scopeId","data-v-580769d7"]]);export{A as default};
//# sourceMappingURL=Organization.6815f07e.js.map
