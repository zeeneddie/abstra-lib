import{bo as M,aP as g,aQ as P,a6 as K,aO as N,B as J,D as L,cg as Q,V as S,bw as Y,$ as Z,d as j,a0 as F,cd as ee,r as ne,e0 as oe,J as ae,N as G,H as te,O as R,f as b,R as E,e1 as le,ag as se,aE as re,ai as V,b7 as ie,ad as de,F as ce,aN as pe,aB as ue,ap as fe,ao as be,aq as ve}from"./outputWidgets.045188bd.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="799d90cc-9e22-4efc-8de2-63777bdb085e",n._sentryDebugIdIdentifier="sentry-dbid-799d90cc-9e22-4efc-8de2-63777bdb085e")}catch{}})();const ge=()=>({prefixCls:String,activeKey:M([Array,Number,String]),defaultActiveKey:M([Array,Number,String]),accordion:g(),destroyInactivePanel:g(),bordered:g(),expandIcon:P(),openAnimation:K.object,expandIconPosition:N(),collapsible:N(),ghost:g(),onChange:P(),"onUpdate:activeKey":P()}),U=()=>({openAnimation:K.object,prefixCls:String,header:K.any,headerClass:String,showArrow:g(),isActive:g(),destroyInactivePanel:g(),disabled:g(),accordion:g(),forceRender:g(),expandIcon:P(),extra:K.any,panelKey:M(),collapsible:N(),role:String,onItemClick:P()}),$e=n=>{const{componentCls:e,collapseContentBg:a,padding:p,collapseContentPaddingHorizontal:r,collapseHeaderBg:i,collapseHeaderPadding:s,collapsePanelBorderRadius:u,lineWidth:v,lineType:m,colorBorder:A,colorText:x,colorTextHeading:$,colorTextDisabled:y,fontSize:I,lineHeight:h,marginSM:o,paddingSM:t,motionDurationSlow:l,fontSizeIcon:f}=n,d=`${v}px ${m} ${A}`;return{[e]:S(S({},Z(n)),{backgroundColor:i,border:d,borderBottom:0,borderRadius:`${u}px`,["&-rtl"]:{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:d,["&:last-child"]:{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${u}px ${u}px`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:s,color:$,lineHeight:h,cursor:"pointer",transition:`all ${l}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:I*h,display:"flex",alignItems:"center",paddingInlineEnd:o},[`${e}-arrow`]:S(S({},Y()),{fontSize:f,svg:{transition:`transform ${l}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-header-collapsible-only`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"},[`${e}-expand-icon`]:{cursor:"pointer"}},[`${e}-icon-collapsible-only`]:{cursor:"default",[`${e}-expand-icon`]:{cursor:"pointer"}},[`&${e}-no-arrow`]:{[`> ${e}-header`]:{paddingInlineStart:t}}},[`${e}-content`]:{color:x,backgroundColor:a,borderTop:d,[`& > ${e}-content-box`]:{padding:`${p}px ${r}px`},["&-hidden"]:{display:"none"}},[`${e}-item:last-child`]:{[`> ${e}-content`]:{borderRadius:`0 0 ${u}px ${u}px`}},[`& ${e}-item-disabled > ${e}-header`]:{[`
          &,
          & > .arrow
        `]:{color:y,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:o}}}}})}},me=n=>{const{componentCls:e}=n,a=`> ${e}-item > ${e}-header ${e}-arrow svg`;return{[`${e}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},ye=n=>{const{componentCls:e,collapseHeaderBg:a,paddingXXS:p,colorBorder:r}=n;return{[`${e}-borderless`]:{backgroundColor:a,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${r}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:p}}}},he=n=>{const{componentCls:e,paddingSM:a}=n;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:a}}}}}},xe=J("Collapse",n=>{const e=L(n,{collapseContentBg:n.colorBgContainer,collapseHeaderBg:n.colorFillAlter,collapseHeaderPadding:`${n.paddingSM}px ${n.padding}px`,collapsePanelBorderRadius:n.borderRadiusLG,collapseContentPaddingHorizontal:16});return[$e(e),ye(e),he(e),me(e),Q(e)]});function W(n){let e=n;if(!Array.isArray(e)){const a=typeof e;e=a==="number"||a==="string"?[e]:[]}return e.map(a=>String(a))}const Ie=j({compatConfig:{MODE:3},name:"ACollapse",inheritAttrs:!1,props:F(ge(),{accordion:!1,destroyInactivePanel:!1,bordered:!0,openAnimation:ee("ant-motion-collapse",!1),expandIconPosition:"start"}),slots:Object,setup(n,e){let{attrs:a,slots:p,emit:r}=e;const i=ne(W(oe([n.activeKey,n.defaultActiveKey])));ae(()=>n.activeKey,()=>{i.value=W(n.activeKey)},{deep:!0});const{prefixCls:s,direction:u}=G("collapse",n),[v,m]=xe(s),A=te(()=>{const{expandIconPosition:o}=n;return o!==void 0?o:u.value==="rtl"?"end":"start"}),x=o=>{const{expandIcon:t=p.expandIcon}=n,l=t?t(o):b(ie,{rotate:o.isActive?90:void 0},null);return b("div",{class:[`${s.value}-expand-icon`,m.value],onClick:()=>["header","icon"].includes(n.collapsible)&&y(o.panelKey)},[de(Array.isArray(t)?l[0]:l)?V(l,{class:`${s.value}-arrow`},!1):l])},$=o=>{n.activeKey===void 0&&(i.value=o);const t=n.accordion?o[0]:o;r("update:activeKey",t),r("change",t)},y=o=>{let t=i.value;if(n.accordion)t=t[0]===o?[]:[o];else{t=[...t];const l=t.indexOf(o);l>-1?t.splice(l,1):t.push(o)}$(t)},I=(o,t)=>{var l,f,d;if(re(o))return;const w=i.value,{accordion:c,destroyInactivePanel:T,collapsible:k,openAnimation:B}=n,C=String((l=o.key)!==null&&l!==void 0?l:t),{header:D=(d=(f=o.children)===null||f===void 0?void 0:f.header)===null||d===void 0?void 0:d.call(f),headerClass:X,collapsible:_,disabled:z}=o.props||{};let H=!1;c?H=w[0]===C:H=w.indexOf(C)>-1;let O=_!=null?_:k;(z||z==="")&&(O="disabled");const q={key:C,panelKey:C,header:D,headerClass:X,isActive:H,prefixCls:s.value,destroyInactivePanel:T,openAnimation:B,accordion:c,onItemClick:O==="disabled"?null:y,expandIcon:x,collapsible:O};return V(o,q)},h=()=>{var o;return se((o=p.default)===null||o===void 0?void 0:o.call(p)).map(I)};return()=>{const{accordion:o,bordered:t,ghost:l}=n,f=R(s.value,{[`${s.value}-borderless`]:!t,[`${s.value}-icon-position-${A.value}`]:!0,[`${s.value}-rtl`]:u.value==="rtl",[`${s.value}-ghost`]:!!l,[a.class]:!!a.class},m.value);return v(b("div",E(E({class:f},le(a)),{},{style:a.style,role:o?"tablist":null}),[h()]))}}}),Ce=j({compatConfig:{MODE:3},name:"PanelContent",props:U(),setup(n,e){let{slots:a}=e;const p=ce(!1);return pe(()=>{(n.isActive||n.forceRender)&&(p.value=!0)}),()=>{var r;if(!p.value)return null;const{prefixCls:i,isActive:s,role:u}=n;return b("div",{class:R(`${i}-content`,{[`${i}-content-active`]:s,[`${i}-content-inactive`]:!s}),role:u},[b("div",{class:`${i}-content-box`},[(r=a.default)===null||r===void 0?void 0:r.call(a)])])}}}),we=j({compatConfig:{MODE:3},name:"ACollapsePanel",inheritAttrs:!1,props:F(U(),{showArrow:!0,isActive:!1,onItemClick(){},headerClass:"",forceRender:!1}),slots:Object,setup(n,e){let{slots:a,emit:p,attrs:r}=e;ue(n.disabled===void 0,"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');const{prefixCls:i}=G("collapse",n),s=()=>{p("itemClick",n.panelKey)},u=v=>{(v.key==="Enter"||v.keyCode===13||v.which===13)&&s()};return()=>{var v,m;const{header:A=(v=a.header)===null||v===void 0?void 0:v.call(a),headerClass:x,isActive:$,showArrow:y,destroyInactivePanel:I,accordion:h,forceRender:o,openAnimation:t,expandIcon:l=a.expandIcon,extra:f=(m=a.extra)===null||m===void 0?void 0:m.call(a),collapsible:d}=n,w=d==="disabled",c=i.value,T=R(`${c}-header`,{[x]:x,[`${c}-header-collapsible-only`]:d==="header",[`${c}-icon-collapsible-only`]:d==="icon"}),k=R({[`${c}-item`]:!0,[`${c}-item-active`]:$,[`${c}-item-disabled`]:w,[`${c}-no-arrow`]:!y,[`${r.class}`]:!!r.class});let B=b("i",{class:"arrow"},null);y&&typeof l=="function"&&(B=l(n));const C=fe(b(Ce,{prefixCls:c,isActive:$,forceRender:o,role:h?"tabpanel":null},{default:a.default}),[[ve,$]]),D=S({appear:!1,css:!1},t);return b("div",E(E({},r),{},{class:k}),[b("div",{class:T,onClick:()=>!["header","icon"].includes(d)&&s(),role:h?"tab":"button",tabindex:w?-1:0,"aria-expanded":$,onKeypress:u},[y&&B,b("span",{onClick:()=>d==="header"&&s(),class:`${c}-header-text`},[A]),f&&b("div",{class:`${c}-extra`},[f])]),b(be,D,{default:()=>[!I||$?C:null]})])}}});export{we as A,Ie as C};
//# sourceMappingURL=CollapsePanel.5b61c53e.js.map