import{e_ as P,e$ as A,f0 as b,f1 as f,f2 as z,f3 as N,f4 as j,f5 as W,f6 as X,f7 as Z,a as U,f8 as q,b as r,c as d,eV as V,c2 as v,bh as F,eA as c,eu as x,er as o,ew as _,e as K,eq as k,aU as J,et as D,eX as Q,bw as H,ez as G,aS as E,d as Y,ey as $,E as ee,F as te,bu as w,u as ie,eF as B,eU as se,eB as le,eC as ne,eD as oe,t as ae}from"./registerWidgets.ff0e603c.js";import{C as re}from"./gateway.69285524.js";import{B as de}from"./build.d4a495ea.js";import"./index.3750a98d.js";import{a as ue}from"./asyncComputed.47db4727.js";import{L as ce}from"./LoadingIndicator.40ce0e4a.js";import{f as he}from"./index.b048d0fb.js";import"./passwordlessManager.c02d6ee2.js";import"./pubsub.bd8735a3.js";import"./storage.db287aee.js";import"./activeRecord.193d97cb.js";import"./lottie.0af290d8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="92937bd3-045e-463a-861c-5603eaa33d57",e._sentryDebugIdIdentifier="sentry-dbid-92937bd3-045e-463a-861c-5603eaa33d57")}catch{}})();class pe{list(t){const s=new URLSearchParams({offset:t.offset.toString(),limit:t.limit.toString(),from:t.from.getTime().toString(),to:t.to.getTime().toString(),search:t.search});return re.get(`projects/${t.projectId}/builds/${t.buildId}/logs?${s}`)}}const fe=new pe;class M{constructor(t,s,u,l,i,O,L){this.executionId=t,this.runtimeType=s,this.runtimeName=u,this.payload=l,this.event=i,this.buildId=O,this.createdAt=L}static fromDTO(t){return new M(t.executionId,t.runtimeType,t.runtimeName,t.payload,t.event,t.buildId,new Date(t.createdAt))}static async list(t){return(await fe.list(t)).logs.map(M.fromDTO)}}var R={name:"Dropdown",emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},disabled:{type:Boolean,default:!1},dataKey:null,showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:String,default:null},inputStyle:{type:null,default:null},inputProps:{type:null,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},panelProps:{type:null,default:null},filterInputProps:{type:null,default:null},clearIconProps:{type:null,default:null},appendTo:{type:String,default:"body"},loading:{type:Boolean,default:!1},clearIcon:{type:String,default:"pi pi-times"},dropdownIcon:{type:String,default:"pi pi-chevron-down"},filterIcon:{type:String,default:"pi pi-search"},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,focusOnHover:!1,data(){return{id:this.$attrs.id,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||P()},modelValue(){this.isModelValueChanged=!0},options(){this.autoUpdateModel()}},mounted(){this.id=this.id||P(),this.autoUpdateModel()},updated(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(A.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t(e).index},getOptionLabel(e){return this.optionLabel?b.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?b.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e,t){return(this.dataKey?b.resolveFieldData(e,this.dataKey):this.getOptionLabel(e))+"_"+t},isOptionDisabled(e){return this.optionDisabled?b.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel(e){return b.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return b.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(t=>this.isOptionGroup(t)).length:e)+1},show(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&f.focus(this.$refs.focusInput)},hide(e){const t=()=>{this.$emit("before-hide"),this.overlayVisible=!1,this.focusedOptionIndex=-1,this.searchValue="",this.resetFilterOnHide&&(this.filterValue=null),e&&f.focus(this.$refs.focusInput)};setTimeout(()=>{t()},0)},onFocus(e){this.disabled||(this.focused=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.overlayVisible&&this.scrollInView(this.focusedOptionIndex),this.$emit("focus",e))},onBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e)},onKeyDown(e){if(this.disabled){e.preventDefault();return}const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,this.editable);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!t&&b.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}},onEditableInput(e){const t=e.target.value;this.searchValue="",!this.searchOptions(e,t)&&(this.focusedOptionIndex=-1),this.$emit("update:modelValue",t)},onContainerClick(e){this.disabled||this.loading||f.hasClass(e.target,"p-dropdown-clear-icon")||e.target.tagName==="INPUT"||(!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0))},onClearClick(e){this.updateModel(e,null)},onFirstHiddenFocus(e){const t=e.relatedTarget===this.$refs.focusInput?f.getFirstFocusableElement(this.overlay,":not(.p-hidden-focusable)"):this.$refs.focusInput;f.focus(t)},onLastHiddenFocus(e){const t=e.relatedTarget===this.$refs.focusInput?f.getLastFocusableElement(this.overlay,":not(.p-hidden-focusable)"):this.$refs.focusInput;f.focus(t)},onOptionSelect(e,t,s=!0){const u=this.getOptionValue(t);this.updateModel(e,u),s&&this.hide(!0)},onOptionMouseMove(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)},onFilterChange(e){const t=e.target.value;this.filterValue=t,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:t}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur(){this.focusedOptionIndex=-1},onFilterUpdated(){this.overlayVisible&&this.alignOverlay()},onOverlayClick(e){z.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey(e){const t=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,t),!this.overlayVisible&&this.show(),e.preventDefault()},onArrowUpKey(e,t=!1){if(e.altKey&&!t)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{const s=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,s),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey(e,t=!1){t&&(this.focusedOptionIndex=-1)},onHomeKey(e,t=!1){t?(e.currentTarget.setSelectionRange(0,0),this.focusedOptionIndex=-1):(this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show()),e.preventDefault()},onEndKey(e,t=!1){if(t){const s=e.currentTarget,u=s.value.length;s.setSelectionRange(u,u),this.focusedOptionIndex=-1}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onPageUpKey(e){this.scrollInView(0),e.preventDefault()},onPageDownKey(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):this.onArrowDownKey(e),e.preventDefault()},onSpaceKey(e,t=!1){!t&&this.onEnterKey(e)},onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey(e,t=!1){t||(this.overlayVisible&&this.hasFocusableElements()?(f.focus(this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey(e,t=!1){t&&!this.overlayVisible&&this.show()},onOverlayEnter(e){A.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&f.focus(this.$refs.filterInput)},onOverlayAfterEnter(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave(e){A.clear(e)},alignOverlay(){this.appendTo==="self"?f.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=f.getOuterWidth(this.$el)+"px",f.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.overlay&&!this.$el.contains(e.target)&&!this.overlay.contains(e.target)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new N(this.$refs.container,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!f.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},hasFocusableElements(){return f.getFocusableElements(this.overlay,":not(.p-hidden-focusable)").length>0},isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected(e){return b.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},findFirstOptionIndex(){return this.visibleOptions.findIndex(e=>this.isValidOption(e))},findLastOptionIndex(){return b.findLastIndex(this.visibleOptions,e=>this.isValidOption(e))},findNextOptionIndex(e){const t=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(s=>this.isValidOption(s)):-1;return t>-1?t+e+1:e},findPrevOptionIndex(e){const t=e>0?b.findLastIndex(this.visibleOptions.slice(0,e),s=>this.isValidOption(s)):-1;return t>-1?t:e},findSelectedOptionIndex(){return this.hasSelectedOption?this.visibleOptions.findIndex(e=>this.isValidSelectedOption(e)):-1},findFirstFocusedOptionIndex(){const e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex(){const e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions(e,t){this.searchValue=(this.searchValue||"")+t;let s=-1,u=!1;return this.focusedOptionIndex!==-1?(s=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(l=>this.isOptionMatched(l)),s=s===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(l=>this.isOptionMatched(l)):s+this.focusedOptionIndex):s=this.visibleOptions.findIndex(l=>this.isOptionMatched(l)),s!==-1&&(u=!0),s===-1&&this.focusedOptionIndex===-1&&(s=this.findFirstFocusedOptionIndex()),s!==-1&&this.changeFocusedOptionIndex(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),u},changeFocusedOptionIndex(e,t){this.focusedOptionIndex!==t&&(this.focusedOptionIndex=t,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[t],!1))},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedOptionId,s=f.findSingle(this.list,`li[id="${t}"]`);s?s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroller&&this.virtualScroller.scrollToIndex(e!==-1?e:this.focusedOptionIndex)},0)},autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel(e,t){this.$emit("update:modelValue",t),this.$emit("change",{originalEvent:e,value:t})},flatOptions(e){return(e||[]).reduce((t,s,u)=>{t.push({optionGroup:s,group:!0,index:u});const l=this.getOptionGroupChildren(s);return l&&l.forEach(i=>t.push(i)),t},[])},overlayRef(e){this.overlay=e},listRef(e,t){this.list=e,t&&t(e)},virtualScrollerRef(e){this.virtualScroller=e}},computed:{containerClass(){return["p-dropdown p-component p-inputwrapper",{"p-disabled":this.disabled,"p-dropdown-clearable":this.showClear&&!this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue,"p-inputwrapper-focus":this.focused||this.overlayVisible,"p-overlay-open":this.overlayVisible}]},inputStyleClass(){return["p-dropdown-label p-inputtext",this.inputClass,{"p-placeholder":!this.editable&&this.label===this.placeholder,"p-dropdown-label-empty":!this.editable&&!this.$slots.value&&(this.label==="p-emptylabel"||this.label.length===0)}]},panelStyleClass(){return["p-dropdown-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},dropdownIconClass(){return["p-dropdown-trigger-icon",this.loading?this.loadingIcon:this.dropdownIcon]},visibleOptions(){const e=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){const t=j.filter(e,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){const s=this.options||[],u=[];return s.forEach(l=>{const i=l.items.filter(O=>t.includes(O));i.length>0&&u.push({...l,items:[...i]})}),this.flatOptions(u)}return t}return e},hasSelectedOption(){return b.isNotEmpty(this.modelValue)},label(){const e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.placeholder||"p-emptylabel"},editableInputValue(){const e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.modelValue||""},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},filterResultMessageText(){return b.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId(){return this.focusedOptionIndex!==-1?`${this.id}_${this.focusedOptionIndex}`:null},ariaSetSize(){return this.visibleOptions.filter(e=>!this.isOptionGroup(e)).length},virtualScrollerDisabled(){return!this.virtualScrollerOptions}},directives:{ripple:W},components:{VirtualScroller:X,Portal:Z}};const ye=["id"],be=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"],me=["id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-disabled"],ge={class:"p-dropdown-trigger"},ve={key:0,class:"p-dropdown-header"},Oe={class:"p-dropdown-filter-container"},Ie=["value","placeholder","aria-owns","aria-activedescendant"],we={role:"status","aria-live":"polite",class:"p-hidden-accessible"},xe=["id"],Se=["id"],Ve=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove"],Le={key:0,class:"p-dropdown-empty-message",role:"option"},Fe={key:1,class:"p-dropdown-empty-message",role:"option"},_e={key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},Ce={role:"status","aria-live":"polite",class:"p-hidden-accessible"};function ke(e,t,s,u,l,i){const O=U("VirtualScroller"),L=U("Portal"),I=q("ripple");return r(),d("div",{ref:"container",id:l.id,class:_(i.containerClass),onClick:t[16]||(t[16]=(...n)=>i.onContainerClick&&i.onContainerClick(...n))},[s.editable?(r(),d("input",V({key:0,ref:"focusInput",id:s.inputId,type:"text",style:s.inputStyle,class:i.inputStyleClass,value:i.editableInputValue,placeholder:s.placeholder,tabindex:s.disabled?-1:s.tabindex,disabled:s.disabled,autocomplete:"off",role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":l.overlayVisible,"aria-controls":l.id+"_list","aria-activedescendant":l.focused?i.focusedOptionId:void 0,onFocus:t[0]||(t[0]=(...n)=>i.onFocus&&i.onFocus(...n)),onBlur:t[1]||(t[1]=(...n)=>i.onBlur&&i.onBlur(...n)),onKeydown:t[2]||(t[2]=(...n)=>i.onKeyDown&&i.onKeyDown(...n)),onInput:t[3]||(t[3]=(...n)=>i.onEditableInput&&i.onEditableInput(...n))},s.inputProps),null,16,be)):(r(),d("span",V({key:1,ref:"focusInput",id:s.inputId,style:s.inputStyle,class:i.inputStyleClass,tabindex:s.disabled?-1:s.tabindex,role:"combobox","aria-label":e.ariaLabel||(i.label==="p-emptylabel"?void 0:i.label),"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":l.overlayVisible,"aria-controls":l.id+"_list","aria-activedescendant":l.focused?i.focusedOptionId:void 0,"aria-disabled":s.disabled,onFocus:t[4]||(t[4]=(...n)=>i.onFocus&&i.onFocus(...n)),onBlur:t[5]||(t[5]=(...n)=>i.onBlur&&i.onBlur(...n)),onKeydown:t[6]||(t[6]=(...n)=>i.onKeyDown&&i.onKeyDown(...n))},s.inputProps),[v(e.$slots,"value",{value:s.modelValue,placeholder:s.placeholder},()=>[F(c(i.label==="p-emptylabel"?"\xA0":i.label||"empty"),1)])],16,me)),s.showClear&&s.modelValue!=null?(r(),d("i",V({key:2,class:["p-dropdown-clear-icon",s.clearIcon],onClick:t[7]||(t[7]=(...n)=>i.onClearClick&&i.onClearClick(...n))},s.clearIconProps),null,16)):x("",!0),o("div",ge,[v(e.$slots,"indicator",{},()=>[o("span",{class:_(i.dropdownIconClass),"aria-hidden":"true"},null,2)])]),K(L,{appendTo:s.appendTo},{default:k(()=>[K(J,{name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},{default:k(()=>[l.overlayVisible?(r(),d("div",V({key:0,ref:i.overlayRef,style:s.panelStyle,class:i.panelStyleClass,onClick:t[14]||(t[14]=(...n)=>i.onOverlayClick&&i.onOverlayClick(...n)),onKeydown:t[15]||(t[15]=(...n)=>i.onOverlayKeyDown&&i.onOverlayKeyDown(...n))},s.panelProps),[o("span",{ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[8]||(t[8]=(...n)=>i.onFirstHiddenFocus&&i.onFirstHiddenFocus(...n))},null,544),v(e.$slots,"header",{value:s.modelValue,options:i.visibleOptions}),s.filter?(r(),d("div",ve,[o("div",Oe,[o("input",V({ref:"filterInput",type:"text",value:l.filterValue,onVnodeUpdated:t[9]||(t[9]=(...n)=>i.onFilterUpdated&&i.onFilterUpdated(...n)),class:"p-dropdown-filter p-inputtext p-component",placeholder:s.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":l.id+"_list","aria-activedescendant":i.focusedOptionId,onKeydown:t[10]||(t[10]=(...n)=>i.onFilterKeyDown&&i.onFilterKeyDown(...n)),onBlur:t[11]||(t[11]=(...n)=>i.onFilterBlur&&i.onFilterBlur(...n)),onInput:t[12]||(t[12]=(...n)=>i.onFilterChange&&i.onFilterChange(...n))},s.filterInputProps),null,16,Ie),o("span",{class:_(["p-dropdown-filter-icon",s.filterIcon])},null,2)]),o("span",we,c(i.filterResultMessageText),1)])):x("",!0),o("div",{class:"p-dropdown-items-wrapper",style:D({"max-height":i.virtualScrollerDisabled?s.scrollHeight:""})},[K(O,V({ref:i.virtualScrollerRef},s.virtualScrollerOptions,{items:i.visibleOptions,style:{height:s.scrollHeight},tabindex:-1,disabled:i.virtualScrollerDisabled}),Q({content:k(({styleClass:n,contentRef:y,items:h,getItemOptions:m,contentStyle:C,itemSize:a})=>[o("ul",{ref:p=>i.listRef(p,y),id:l.id+"_list",class:_(["p-dropdown-items",n]),style:D(C),role:"listbox"},[(r(!0),d(H,null,G(h,(p,g)=>(r(),d(H,{key:i.getOptionRenderKey(p,i.getOptionIndex(g,m))},[i.isOptionGroup(p)?(r(),d("li",{key:0,id:l.id+"_"+i.getOptionIndex(g,m),style:D({height:a?a+"px":void 0}),class:"p-dropdown-item-group",role:"option"},[v(e.$slots,"optiongroup",{option:p.optionGroup,index:i.getOptionIndex(g,m)},()=>[F(c(i.getOptionGroupLabel(p.optionGroup)),1)])],12,Se)):E((r(),d("li",{key:1,id:l.id+"_"+i.getOptionIndex(g,m),style:D({height:a?a+"px":void 0}),class:_(["p-dropdown-item",{"p-highlight":i.isSelected(p),"p-focus":l.focusedOptionIndex===i.getOptionIndex(g,m),"p-disabled":i.isOptionDisabled(p)}]),role:"option","aria-label":i.getOptionLabel(p),"aria-selected":i.isSelected(p),"aria-disabled":i.isOptionDisabled(p),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(g,m)),onClick:T=>i.onOptionSelect(T,p),onMousemove:T=>i.onOptionMouseMove(T,i.getOptionIndex(g,m))},[v(e.$slots,"option",{option:p,index:i.getOptionIndex(g,m)},()=>[F(c(i.getOptionLabel(p)),1)])],46,Ve)),[[I]])],64))),128)),l.filterValue&&(!h||h&&h.length===0)?(r(),d("li",Le,[v(e.$slots,"emptyfilter",{},()=>[F(c(i.emptyFilterMessageText),1)])])):!s.options||s.options&&s.options.length===0?(r(),d("li",Fe,[v(e.$slots,"empty",{},()=>[F(c(i.emptyMessageText),1)])])):x("",!0)],14,xe)]),_:2},[e.$slots.loader?{name:"loader",fn:k(({options:n})=>[v(e.$slots,"loader",{options:n})]),key:"0"}:void 0]),1040,["items","style","disabled"])],4),v(e.$slots,"footer",{value:s.modelValue,options:i.visibleOptions}),!s.options||s.options&&s.options.length===0?(r(),d("span",_e,c(i.emptyMessageText),1)):x("",!0),o("span",Ce,c(i.selectedMessageText),1),o("span",{ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[13]||(t[13]=(...n)=>i.onLastHiddenFocus&&i.onLastHiddenFocus(...n))},null,544)],16)):x("",!0)]),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])],10,ye)}function De(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var u=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",s==="top"&&u.firstChild?u.insertBefore(l,u.firstChild):u.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var Ke=`
.p-dropdown {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
}
.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}
.p-dropdown-label-empty {
    overflow: hidden;
    opacity: 0;
}
input.p-dropdown-label {
    cursor: default;
}
.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}
.p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-dropdown-items-wrapper {
    overflow: auto;
}
.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.p-dropdown-item-group {
    cursor: auto;
}
.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-dropdown-filter {
    width: 100%;
}
.p-dropdown-filter-container {
    position: relative;
}
.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-fluid .p-dropdown {
    display: flex;
}
.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
`;De(Ke);R.render=ke;const S=e=>(le("data-v-5b6e8f26"),e=e(),ne(),e),Ee={key:1,class:"logs"},Me=S(()=>o("h1",null,"Logs",-1)),Te={class:"filters"},Ae={class:"field field-build"},Be=S(()=>o("label",null,"Build",-1)),He={class:"field"},Pe=S(()=>o("label",null,"From",-1)),Ue={class:"field"},Ge=S(()=>o("label",null,"To",-1)),Re={class:"field"},ze=S(()=>o("label",null,"Search",-1)),Ne={key:0,class:"log-list"},je={class:"search-summary"},We={class:"log"},Xe={class:"log-header"},Ze={key:0,class:"log-date log-header-item"},qe=S(()=>o("span",{class:"log-header-item-name"},"Build",-1)),Je=[qe],Qe=se('<div class="log-date log-header-item" data-v-5b6e8f26><span class="log-header-item-name" data-v-5b6e8f26>Date</span></div><div class="log-runtime log-header-item" data-v-5b6e8f26><span class="log-header-item-name" data-v-5b6e8f26>Runtime</span></div><div class="log-execution log-header-item" data-v-5b6e8f26><span class="log-header-item-name" data-v-5b6e8f26>Execution</span></div><div class="log-event log-header-item" data-v-5b6e8f26><span class="log-header-item-name" data-v-5b6e8f26>Event</span></div>',4),Ye={class:"log-header"},$e={key:0,class:"log-date log-header-item"},et={class:"log-header-item-value"},tt={class:"log-date log-header-item"},it={class:"log-header-item-value"},st={class:"log-runtime log-header-item"},lt={class:"log-header-item-value"},nt={class:"log-execution log-header-item"},ot={class:"log-header-item-value"},at={class:"log-event log-header-item"},rt={class:"log-header-item-value"},dt={class:"log-payload"},ut=["textContent"],ct=["textContent"],ht=["textContent"],pt=["textContent"],ft=["textContent"],yt={key:1,class:"no-logs"},bt=S(()=>o("p",null,"No logs found.",-1)),mt=[bt],gt=Y({__name:"Logs",setup(e){function t(y){return he(y,new Date,{addSuffix:!0})}const s=$(),u=s.params.projectId,l=ee({selectedBuild:s.query.buildId||"latest",from:new Date(Date.now()-1e3*60*60*24*7).toISOString().slice(0,16),to:new Date().toISOString().slice(0,16),search:"",limit:50,offset:0}),i=te(()=>I.value?[{label:"Latest",value:"latest"},{label:"All",value:"all"},...I.value.builds.map(y=>({label:`${t(y.createdAt)} (${y.id.slice(0,8)})`,value:y.id}))]:[{label:"Latest",value:"latest"},{label:"All",value:"all"}]),O=y=>{l.selectedBuild=y.value,n()},{loading:L,result:I,refetch:n}=ue(()=>Promise.all([M.list({projectId:u,limit:l.limit,offset:l.offset,buildId:l.selectedBuild,from:new Date(l.from),to:new Date(l.to),search:l.search}),de.list(u)]).then(([y,h])=>oe({logs:y,builds:h})));return(y,h)=>{var m,C;return w(L)||!((m=w(I))!=null&&m.logs)?(r(),ie(ce,{key:0})):(r(),d("div",Ee,[Me,o("div",Te,[o("div",Ae,[Be,K(w(R),{modelValue:l.selectedBuild,"onUpdate:modelValue":h[0]||(h[0]=a=>l.selectedBuild=a),class:"build-dropdown",options:i.value,"option-label":"label","option-value":"value",filter:!1,onChange:O},null,8,["modelValue","options"])]),o("div",He,[Pe,E(o("input",{"onUpdate:modelValue":h[1]||(h[1]=a=>l.from=a),type:"datetime-local"},null,512),[[B,l.from]])]),o("div",Ue,[Ge,E(o("input",{"onUpdate:modelValue":h[2]||(h[2]=a=>l.to=a),type:"datetime-local"},null,512),[[B,l.to]])]),o("div",Re,[ze,E(o("input",{"onUpdate:modelValue":h[3]||(h[3]=a=>l.search=a),type:"search"},null,512),[[B,l.search]])]),o("button",{onClick:h[4]||(h[4]=(...a)=>w(n)&&w(n)(...a))},"Filter")]),((C=w(I))==null?void 0:C.logs.length)>0?(r(),d("div",Ne,[o("div",je," Showing from "+c(l.offset+1)+" to "+c(l.offset+l.limit),1),o("details",We,[o("summary",Xe,[l.selectedBuild=="all"?(r(),d("div",Ze,Je)):x("",!0),Qe])]),(r(!0),d(H,null,G(w(I).logs,a=>{var p,g;return r(),d("details",{key:a.createdAt.toString(),class:"log"},[o("summary",Ye,[l.selectedBuild=="all"?(r(),d("div",$e,[o("span",et,c(a.buildId.split("-")[0]),1)])):x("",!0),o("div",tt,[o("span",it,c(t(a.createdAt)),1)]),o("div",st,[o("span",lt,c(a.runtimeType)+":"+c(a.runtimeName),1)]),o("div",nt,[o("span",ot,c(a.executionId.slice(0,8)),1)]),o("div",at,[o("span",rt,c(a.event),1)])]),o("div",dt,[a.event==="stdout"?(r(),d("pre",{key:0,class:"log-payload-content",textContent:c(a.payload.log)},null,8,ut)):a.event==="stderr"?(r(),d("pre",{key:1,class:"log-payload-content",textContent:c(a.payload.log)},null,8,ct)):a.event==="program-start-failed"?(r(),d("pre",{key:2,class:"log-payload-content",textContent:c(a.payload.error)},null,8,ht)):a.event==="widgets-computed"&&((g=(p=a.payload.errors)==null?void 0:p.general)==null?void 0:g.repr)?(r(),d("pre",{key:3,class:"log-payload-content",textContent:c(a.payload.errors.general.repr)},null,8,pt)):(r(),d("pre",{key:4,class:"log-payload-content",textContent:c(a.payload)},null,8,ft))])])}),128))])):(r(),d("div",yt,mt))]))}}});const Dt=ae(gt,[["__scopeId","data-v-5b6e8f26"]]);export{Dt as default};
//# sourceMappingURL=Logs.a4ccf779.js.map
