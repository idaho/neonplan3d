var si=globalThis,ri=si.ShadowRoot&&(si.ShadyCSS===void 0||si.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lo=Symbol(),Vs=new WeakMap,$n=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==lo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ri&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Vs.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Vs.set(t,e))}return e}toString(){return this.cssText}},Cs=a=>new $n(typeof a=="string"?a:a+"",void 0,lo),tt=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((n,i,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+a[o+1],a[0]);return new $n(t,a,lo)},Bs=(a,e)=>{if(ri)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=si.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,a.appendChild(n)}},co=ri?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Cs(t)})(a):a;var{is:hd,defineProperty:ud,getOwnPropertyDescriptor:pd,getOwnPropertyNames:fd,getOwnPropertySymbols:md,getPrototypeOf:_d}=Object,ai=globalThis,Ns=ai.trustedTypes,gd=Ns?Ns.emptyScript:"",bd=ai.reactiveElementPolyfillSupport,xn=(a,e)=>a,ho={toAttribute(a,e){switch(e){case Boolean:a=a?gd:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},js=(a,e)=>!hd(a,e),Ks={attribute:!0,type:String,converter:ho,reflect:!1,useDefault:!1,hasChanged:js};Symbol.metadata??=Symbol("metadata"),ai.litPropertyMetadata??=new WeakMap;var at=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ks){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&ud(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:o}=pd(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){let s=i?.call(this);o?.call(this,r),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ks}static _$Ei(){if(this.hasOwnProperty(xn("elementProperties")))return;let e=_d(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(xn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xn("properties"))){let t=this.properties,n=[...fd(t),...md(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(co(i))}else e!==void 0&&t.push(co(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Bs(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:ho).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=n.getPropertyOptions(i),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ho;this._$Em=i;let s=r.fromAttribute(t,o.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(e,t,n,i=!1,o){if(e!==void 0){let r=this.constructor;if(i===!1&&(o=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??js)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:o},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),o!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,o]of n){let{wrapped:r}=o,s=this[i];r!==!0||this._$AL.has(i)||s===void 0||this.C(i,void 0,o,s)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};at.elementStyles=[],at.shadowRootOptions={mode:"open"},at[xn("elementProperties")]=new Map,at[xn("finalized")]=new Map,bd?.({ReactiveElement:at}),(ai.reactiveElementVersions??=[]).push("2.1.2");var po=globalThis,Gs=a=>a,li=po.trustedTypes,Us=li?li.createPolicy("lit-html",{createHTML:a=>a}):void 0,fo="$lit$",lt=`lit$${Math.random().toFixed(9).slice(2)}$`,mo="?"+lt,vd=`<${mo}>`,Rt=document,Mn=()=>Rt.createComment(""),Pn=a=>a===null||typeof a!="object"&&typeof a!="function",_o=Array.isArray,Qs=a=>_o(a)||typeof a?.[Symbol.iterator]=="function",uo=`[ 	
\f\r]`,Sn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zs=/-->/g,qs=/>/g,At=RegExp(`>|${uo}(?:([^\\s"'>=/]+)(${uo}*=${uo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xs=/'/g,Js=/"/g,er=/^(?:script|style|textarea|title)$/i,go=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),b=go(1),I=go(2),sh=go(3),dt=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Ys=new WeakMap,Ft=Rt.createTreeWalker(Rt,129);function tr(a,e){if(!_o(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Us!==void 0?Us.createHTML(e):e}var nr=(a,e)=>{let t=a.length-1,n=[],i,o=e===2?"<svg>":e===3?"<math>":"",r=Sn;for(let s=0;s<t;s++){let l=a[s],d,c,h=-1,u=0;for(;u<l.length&&(r.lastIndex=u,c=r.exec(l),c!==null);)u=r.lastIndex,r===Sn?c[1]==="!--"?r=Zs:c[1]!==void 0?r=qs:c[2]!==void 0?(er.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=At):c[3]!==void 0&&(r=At):r===At?c[0]===">"?(r=i??Sn,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,d=c[1],r=c[3]===void 0?At:c[3]==='"'?Js:Xs):r===Js||r===Xs?r=At:r===Zs||r===qs?r=Sn:(r=At,i=void 0);let p=r===At&&a[s+1].startsWith("/>")?" ":"";o+=r===Sn?l+vd:h>=0?(n.push(d),l.slice(0,h)+fo+l.slice(h)+lt+p):l+lt+(h===-2?s:p)}return[tr(a,o+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},zn=class a{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,r=0,s=e.length-1,l=this.parts,[d,c]=nr(e,t);if(this.el=a.createElement(d,n),Ft.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Ft.nextNode())!==null&&l.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(fo)){let u=c[r++],p=i.getAttribute(h).split(lt),f=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:f[2],strings:p,ctor:f[1]==="."?ci:f[1]==="?"?hi:f[1]==="@"?ui:Tt}),i.removeAttribute(h)}else h.startsWith(lt)&&(l.push({type:6,index:o}),i.removeAttribute(h));if(er.test(i.tagName)){let h=i.textContent.split(lt),u=h.length-1;if(u>0){i.textContent=li?li.emptyScript:"";for(let p=0;p<u;p++)i.append(h[p],Mn()),Ft.nextNode(),l.push({type:2,index:++o});i.append(h[u],Mn())}}}else if(i.nodeType===8)if(i.data===mo)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(lt,h+1))!==-1;)l.push({type:7,index:o}),h+=lt.length-1}o++}}static createElement(e,t){let n=Rt.createElement("template");return n.innerHTML=e,n}};function It(a,e,t=a,n){if(e===dt)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,o=Pn(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(a),i._$AT(a,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=It(a,i._$AS(a,e.values),i,n)),e}var di=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Rt).importNode(t,!0);Ft.currentNode=i;let o=Ft.nextNode(),r=0,s=0,l=n[0];for(;l!==void 0;){if(r===l.index){let d;l.type===2?d=new tn(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new pi(o,this,e)),this._$AV.push(d),l=n[++s]}r!==l?.index&&(o=Ft.nextNode(),r++)}return Ft.currentNode=Rt,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},tn=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=It(this,e,t),Pn(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==dt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Qs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&Pn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Rt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=zn.createElement(tr(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let o=new di(i,this),r=o.u(this.options);o.p(t),this.T(r),this._$AH=o}}_$AC(e){let t=Ys.get(e.strings);return t===void 0&&Ys.set(e.strings,t=new zn(e)),t}k(e){_o(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let o of e)i===t.length?t.push(n=new a(this.O(Mn()),this.O(Mn()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Gs(e).nextSibling;Gs(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Tt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,i){let o=this.strings,r=!1;if(o===void 0)e=It(this,e,t,0),r=!Pn(e)||e!==this._$AH&&e!==dt,r&&(this._$AH=e);else{let s=e,l,d;for(e=o[0],l=0;l<o.length-1;l++)d=It(this,s[n+l],t,l),d===dt&&(d=this._$AH[l]),r||=!Pn(d)||d!==this._$AH[l],d===y?e=y:e!==y&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}r&&!i&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ci=class extends Tt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},hi=class extends Tt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},ui=class extends Tt{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){if((e=It(this,e,t,0)??y)===dt)return;let n=this._$AH,i=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==y&&(n===y||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},pi=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){It(this,e)}},ir={M:fo,P:lt,A:mo,C:1,L:nr,R:di,D:Qs,V:It,I:tn,H:Tt,N:hi,U:ui,B:ci,F:pi},wd=po.litHtmlPolyfillSupport;wd?.(zn,tn),(po.litHtmlVersions??=[]).push("3.3.3");var or=(a,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let o=t?.renderBefore??null;n._$litPart$=i=new tn(e.insertBefore(Mn(),o),o,void 0,t??{})}return i._$AI(a),i};var bo=globalThis,Be=class extends at{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=or(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return dt}};Be._$litElement$=!0,Be.finalized=!0,bo.litElementHydrateSupport?.({LitElement:Be});var yd=bo.litElementPolyfillSupport;yd?.({LitElement:Be});(bo.litElementVersions??=[]).push("4.2.2");var fi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},En=a=>(...e)=>({_$litDirective$:a,values:e}),nn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var An=class extends nn{constructor(e){if(super(e),this.it=y,e.type!==fi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===y||e==null)return this._t=void 0,this.it=e;if(e===dt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};An.directiveName="unsafeHTML",An.resultType=1;var sr=En(An);var{I:Sh}=ir;var rr=a=>a.strings===void 0;var Fn=(a,e)=>{let t=a._$AN;if(t===void 0)return!1;for(let n of t)n._$AO?.(e,!1),Fn(n,e);return!0},mi=a=>{let e,t;do{if((e=a._$AM)===void 0)break;t=e._$AN,t.delete(a),a=e}while(t?.size===0)},ar=a=>{for(let e;e=a._$AM;a=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(a))break;t.add(a),xd(e)}};function kd(a){this._$AN!==void 0?(mi(this),this._$AM=a,ar(this)):this._$AM=a}function $d(a,e=!1,t=0){let n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let o=t;o<n.length;o++)Fn(n[o],!1),mi(n[o]);else n!=null&&(Fn(n,!1),mi(n));else Fn(this,a)}var xd=a=>{a.type==fi.CHILD&&(a._$AP??=$d,a._$AQ??=kd)},_i=class extends nn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),ar(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Fn(this,e),mi(this))}setValue(e){if(rr(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var vo=new WeakMap,lr=En(class extends _i{render(a){return y}update(a,[e]){let t=e!==this.G;return t&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=a.options?.host,this.rt(this.ct=a.element)),y}rt(a){if(this.G!==void 0)if(this.isConnected||(a=void 0),typeof this.G=="function"){let e=this.ht??globalThis,t=vo.get(e);t===void 0&&(t=new WeakMap,vo.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,a),a!==void 0&&this.G.call(this.ht,a)}else this.G.value=a}get lt(){return typeof this.G=="function"?vo.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});async function wo(a,e){return(await a.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function gi(a,e,t){await a.callWS({type:"neonplan3d/image/set",image_id:e,data:t})}async function dr(a){return(await a.callWS({type:"neonplan3d/history/list"})).snapshots}async function cr(a){await a.callWS({type:"neonplan3d/history/snapshot"})}async function hr(a,e){return(await a.callWS({type:"neonplan3d/history/restore",snapshot_id:e})).revision}async function ur(a,e){return a.callWS({type:"neonplan3d/packs/import",pack:e})}async function pr(a,e){await a.callWS({type:"neonplan3d/packs/remove",pack_id:e})}var Sd="neonplan3d.seenOffers";function fr(a){try{localStorage.setItem(Sd,JSON.stringify(a.map(e=>e.id)))}catch{}}var mr="neonplan3d.seenUpdates";function _r(a){let e=[];try{e=JSON.parse(localStorage.getItem(mr)??"[]")}catch{}return a.filter(t=>!e.includes(`${t.id}@${t.release}`))}function gr(a){try{localStorage.setItem(mr,JSON.stringify(a.map(e=>`${e.id}@${e.release}`)))}catch{}}function br(a,e){return e?`${a}${a.includes("?")?"&":"?"}np_coupon=${encodeURIComponent(e.code)}`:a}function yo(a){return a.callWS({type:"neonplan3d/license/get"})}function ko(a,e){return a.callWS({type:"neonplan3d/license/activate",key:e})}function vr(a){return a.callWS({type:"neonplan3d/license/remove"})}function wr(a){return a.callWS({type:"neonplan3d/license/refresh"})}function yr(a){return a.callWS({type:"neonplan3d/backup/export"})}function kr(a,e,t){return a.callWS({type:"neonplan3d/backup/import",building:e,packs:t})}function $r(a,e){return a.callWS({type:"neonplan3d/packs/install",pack_id:e})}async function xr(a){return a.callWS({type:"neonplan3d/diagnostics/get"})}async function Sr(a,e){return a.callWS({type:"neonplan3d/diagnostics/set",enabled:e})}async function Mr(a){return a.callWS({type:"neonplan3d/diagnostics/delete"})}var Pr=[],vi=new Map,Md=0;function zr(a){let e=he(a)?.product?.base??a;return[...vi.entries()].filter(([,t])=>t.product?.base===e).map(([t,n])=>({type:t,item:n}))}function Er(a){Pr=a,vi=new Map(a.flatMap(e=>e.items.map(t=>[Dt(e.id,t.id),t]))),Md++}function Ar(){return Pr}function Dt(a,e){return`pack:${a}:${e}`}function on(a){return a.startsWith("pack:")}function ct(a){return a==="robot_vacuum"||on(a)&&a.endsWith(":robot_vacuum")}var Pd={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Fr(a){return he(a)?.parts.find(e=>e.screen)}function Rr(a){let e=he(a);if(!e)return!1;let[t,n,i]=e.size;return e.parts.some(o=>{if(!o.screen)return!1;let[r,s]=[o.w*t,o.d*n,o.h*i].sort((l,d)=>d-l);return r>=.06&&s>=.06})}function he(a){if(!on(a))return;let e=vi.get(a);if(e)return e;let[,t,...n]=a.split(":"),i=Pd[t];return i?vi.get(`pack:${i}:${n.join(":")}`):void 0}function Te(a){return Ne[a]??he(a)?.size??[.6,.6,.8]}function Rn(a){return Or.has(a)||!!he(a)?.electric||!!he(a)?.light}function nt(a,e){let t=e.split("-")[0];return a.name[t]??a.name.en??Object.values(a.name)[0]??a.id}var zd={architecture:"Architecture & Fit-out",bath:"Bathroom",bedroom:"Bedroom",cinema:"Home Cinema & Hi-Fi",exclusive:"Exclusive: Smart Fridge",fitness:"Fitness",garage:"Garage & Workshop",garden:"Garden & Terrace",kids:"Kids' Room",kitchen:"Kitchen",living:"Living Room",office:"Office & Gaming",pets:"Pets",smarthome:"Smart Home & Tech",stairs:"Stairs & Railings",utility:"Utility & Building Services",vehicles:"Vehicles",starter:"Starter Pack",pro_auto:"Pro: Car Pro",pro_timetravel:"Pro: Time travel",pro_pool:"Pro: Pool Pro",pro_camera:"Pro: Camera Cockpit",pro_energy:"Pro: Energy Pro",pro_screens:"Pro: Live Screens",pro_sound:"Pro: Sound & Cinema",pro_weather:"Pro: Weather Outside"};function De(a,e){if(e.split("-")[0]==="de")return a.name;let t=a.id.replace(/^mastershort\./,""),n=t.endsWith("_sample"),i=zd[n?t.slice(0,-7):t];return i?n?`${i} \u2013 Sampler`:i:a.name}function ze(a,e){let t=he(e.type),n=ye(a,e.x,e.z);if(e.mount_y!=null)return n+e.mount_y;if(e.type==="lamp_wall")return n+Ir;if(Tr.has(e.type))return Math.max(n,bi(a,e.x,e.z)-Dr(e.type,e.h));if(e.type==="led_strip")return bi(a,e.x,e.z)-.04-Math.max(.02,e.h);switch(t?.mount){case"surface":return Wr(a,e.x,e.z);case"wall":return n+(t.wall_y??1);case"ceiling":return bi(a,e.x,e.z)-e.h;default:return n+(t?0:Lr(e))}}function Hr(a,e=0){let t=(a.rotation??0)*Math.PI/180,n=Math.cos(t),i=Math.sin(t),o=Ed(a,e+a.h/2);return[0,a.h].flatMap(r=>[[-a.w/2,-a.d/2],[a.w/2,-a.d/2],[a.w/2,a.d/2],[-a.w/2,a.d/2]].map(([s,l])=>o(a.x+s*n-l*i,e+r,a.z+s*i+l*n)))}function Vr(a){let e=Hr({...a,x:0,z:0}).map(([i,,o])=>[i,o]).sort((i,o)=>i[0]-o[0]||i[1]-o[1]),t=(i,o,r)=>(o[0]-i[0])*(r[1]-i[1])-(o[1]-i[1])*(r[0]-i[0]),n=i=>{let o=[];for(let r of i){for(;o.length>1&&t(o[o.length-2],o[o.length-1],r)<=1e-10;)o.pop();o.push(r)}return o.slice(0,-1)};return[...n(e),...n([...e].reverse())].map(([i,o])=>[i+a.x,o+a.z])}function Lt(a){if(!a.rotation_x&&!a.rotation_z)return[0,a.h];let e=Hr(a).map(t=>t[1]);return[Math.min(...e),Math.max(...e)]}function Ed(a,e){let t=(a.rotation_x??0)*Math.PI/180,n=(a.rotation_z??0)*Math.PI/180;if(!t&&!n)return(h,u,p)=>[h,u,p];let i=(a.rotation??0)*Math.PI/180,o=Math.cos(i),r=Math.sin(i),s=Math.cos(t),l=Math.sin(t),d=Math.cos(n),c=Math.sin(n);return(h,u,p)=>{let f=h-a.x,m=p-a.z,_=f*o+m*r,g=u-e,v=-f*r+m*o,w=g*s-v*l,$=g*l+v*s,k=_*d-w*c,x=_*c+w*d;return[a.x+k*o-$*r,e+x,a.z+k*r+$*o]}}var Cr=["always","no_power","never"],Br=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],wi={field:null,size:1,right:0,up:0},Nr=["navigate","more_info","service","fire_dom_event"];var In={cat:["orange","tabby","black","white","grey","calico","cream"],dog:["golden","cream","brown","black","white","grey"],rabbit:["white","grey","brown","black","cream"]},Kr=["dachshund","pug","terrier","labrador","shepherd"];function $o(a,e,t){return a?e?!!t.lock_plan:!!a.locked:!1}var jr=["rain","snow","fog","clouds","lightning","sky"],xo=["rain","snow","clouds","lightning","sky"],So=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola","balcony"],wt={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function yi(a){return a==="hedge"||a==="fence"||a==="pergola"}var Gr=["x","-x","z","-z"];function sn(a,e,t){let n=a.slope??0;if(!n||a.type==="pool")return 0;let i=a.slope_dir??"x",o=(d,c)=>i==="x"?d:i==="-x"?-d:i==="z"?c:-c,r=1/0,s=-1/0;for(let[d,c]of a.points){let h=o(d,c);r=Math.min(r,h),s=Math.max(s,h)}if(s-r<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-r)/(s-r)));return n*l}function Ad(a,e,t,n){return yt(a)+(e.offset??0)+wt[e.type]-sn(e,t,n)}function yt(a){return a.elevation>.3?0:-.2}function Ur(a,e,t){let n=(a.outdoor??[]).filter(o=>!yi(o.type)&&o.type!=="pool"&&K([e,t],o.points)),i=[...n].reverse().find(o=>o.cut)??n[0];return i?Ad(a,i,e,t):yt(a)}var Zr=["filter","backwash","rinse","waste","recirculate","closed"];function qr(a,e){return yt(a)+(e.offset??0)+(e.above?ki(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function Mo(a){return a.depth&&a.depth>=.3?Math.min(5,a.depth):a.above?ki(a):1.5}function Po(a,e){return e.above?!1:(a.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!yi(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>K(n,t.points)))}function Xr(a,e){return!e.above&&!Po(a,e)?zo(a,e)-.05:qr(a,e)-Mo(e)}function zo(a,e){return qr(a,e)-.15}function ki(a){return a.height&&a.height>.3?a.height:1.2}function $i(a,e,t,n,i){let o=_=>Math.round(_*1e3)/1e3,r=n-e,s=i-t,l=(e+n)/2,d=(t+i)/2;if(a==="rect")return[[e,t],[n,t],[n,i],[e,i]];let c=40;if(a==="round"){let _=Math.min(r,s)/2;return Array.from({length:c},(g,v)=>[o(l+_*Math.cos(v/c*Math.PI*2)),o(d+_*Math.sin(v/c*Math.PI*2))])}let h=r>=s,u=(h?s:r)/2,p=Math.max(0,(h?r:s)/2-u),f=[],m=c/2;for(let _=0;_<2;_++){let g=_===0?1:-1;for(let v=0;v<=m;v++){let w=-Math.PI/2+v/m*Math.PI+(_===0?0:Math.PI),$=g*p+u*Math.cos(w),k=u*Math.sin(w);f.push(h?[o(l+$),o(d+k)]:[o(l+k),o(d+$)])}}return f}var Fd={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},Jr=["wood","oak","tiles","carpet","stone","concrete"],Yr={type:"none",pitch:35,overhang:.4},Rd={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Yr}};function Qr(a,e,t){return{id:a,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var Id=2.75;function ea(a,e){if(e!=null&&Number.isFinite(e))return Math.round(e*Id*100)/100;let t=a.reduce((n,i)=>!n||ht(i)>ht(n)?i:n,null);return t?Math.round((ht(t)+.25)*100)/100:0}function ta(a,e,t){let n=a.rooms.flatMap(s=>s.points.map(l=>l[0])),i=a.rooms.flatMap(s=>s.points.map(l=>l[1])),o=n.length?Math.ceil(Math.max(...n))+1:0,r=i.length?Math.floor(Math.min(...i)):0;return e.map((s,l)=>{let d=o+l%3*4.5,c=r+Math.floor(l/3)*3.5;return{id:t(),name:s.name,area_id:s.area_id,points:[[d,c],[d+4,c],[d+4,c+3],[d,c+3]],floor_material:"wood"}})}function na(a,e,t,n){if(a.rotation_x||a.rotation_z){let g=Ee(a),[v,w]=e,$=Math.max(...g.map(T=>T[0]))-Math.min(...g.map(T=>T[0])),k=Math.max(...g.map(T=>T[1]))-Math.min(...g.map(T=>T[1]));if($*$+k*k<1e-12)return{x:a.x,z:a.z,w:a.w,d:a.d,h:a.h};let x=a.x-v*$/2,z=a.z-w*k/2,S=((t[0]-x)*v*$+(t[1]-z)*w*k)/($*$+k*k),A=Math.max(a.w,a.d,a.h),P=Math.min(...[a.w,a.d,a.h].filter(T=>T>0)),F=Math.max(.001/P,Math.round(S*A/n)*n/A);return{x:x+v*$*F/2,z:z+w*k*F/2,w:a.w*F,d:a.d*F,h:a.h*F}}let i=a.rotation*Math.PI/180,o=Math.cos(i),r=Math.sin(i),[s,l]=e,d=a.x-s*(a.w/2)*o+l*(a.d/2)*r,c=a.z-s*(a.w/2)*r-l*(a.d/2)*o,h=t[0]-d,u=t[1]-c,p=g=>Math.max(.1,Math.round(g/n)*n),f=p((h*o+u*r)*s),m=p((-h*r+u*o)*l),_=g=>Math.round(g*1e3)/1e3;return{x:_(d+s*(f/2)*o-l*(m/2)*r),z:_(c+s*(f/2)*r+l*(m/2)*o),w:_(f),d:_(m)}}var xi=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","ac_unit","sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_u","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve","parking","fridge_smart","stairwell"],Eo={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","ac_unit","stairs","stairs_u","robot_vacuum"],vehicles:["parking"]},ke=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],ia=.3,ut=["meter","inverter","home_battery","wallbox","grid_point"],oa=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Ir=1.75;function it(a){if(["lamp_ceiling","lamp_panel","lamp_pendant","stairwell","parking"].includes(a.type)||Ao.has(a.type))return!1;let e=he(a.type);return!(e?.mount==="ceiling"&&e.light)}var Tr=new Set(["lamp_downlight","lamp_spot"]);function Dr(a,e){return a==="lamp_spot"?Math.max(.06,e)+.008:.02}var Ao=new Set(["stairs","stairs_u"]);function sa(a,e,t){let n=Math.max(4,Math.round(t/.18)),i=Math.floor(n/2)+1,o=i-1,r=n-i,s=Math.min(.12,a*.06),l=(a-s)/2,d=Math.min(l,e*.45),c=(e-d)/o;return{n,k:i,steps1:o,steps2:r,gap:s,fw:l,landing:d,run:c,rise:t/n}}function Le(a){return oa.has(a)||!!he(a)?.light}var Td=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Si(a,e,t,n=0){let i=xe(a.points),o=i.x1-i.x0-2*n,r=i.z1-i.z0-2*n,s=[];for(let l=0;l<e;l++)for(let d=0;d<t;d++){let c=[Math.round((i.x0+n+o/t*(d+.5))*1e3)/1e3,Math.round((i.z0+n+r/e*(l+.5))*1e3)/1e3];K(c,a.points)&&s.push(c)}return s}function rn(a,e,t){let n=r=>Math.round(r*1e3)/1e3,[i,o]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[t];return[n(a[0]+i*e),n(a[1]+o*e)]}function Lr(a){switch(a.type){case"home_battery":return a.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-a.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Wr(a,e,t){let n=ye(a,e,t);for(let i of a.furniture)!(Td.has(i.type)||he(i.type)?.surface)||!K([e,t],Ee(i))||(n=Math.max(n,ye(a,i.x,i.z)+(i.mount_y??0)+i.h));return n}var Or=new Set([...oa,"radiator","ac_unit","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Ne={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Fo=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Ro=["standard","bars","glass_wall"];function Mi(a,e){return a.type==="door"?a.style&&Fo.includes(a.style)?a.style:e?"front":"interior":a.style&&Ro.includes(a.style)?a.style:"standard"}function ra(a,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let i=e==="sidelights",o=a-.04,r=Math.min(1.05,Math.max(.6,o-(i?.6:.3))),s=(o-r)/(i?2:1),l=n.sidelight_width??s,d=i?n.sidelight_width2??n.sidelight_width??s:0;l=Math.max(.1,l),d=i?Math.max(.1,d):0;let c=o-.5;if(l+d>c){let u=Math.max(0,c)/(l+d);l*=u,d*=u}return i?{panels:[[.02,.02+l],[a-.02-d,a-.02]],x0:.02+l,x1:a-.02-d}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:a-.02}:{panels:[[a-.02-l,a-.02]],x0:.02,x1:a-.02-l}}function Io(a){return a==="front"||a==="front_glass"||a==="sidelight"||a==="sidelights"}var Pi={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function zi(a){if(a.type==="garage")return"garage";if(a.type==="window"&&a.style==="glass_wall")return"glass_wall";let e=a.leaves===2;return a.type==="door"?!e&&a.style&&Io(a.style)?"front":e?"door_double":"door":a.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function Ei(a){a.energy={...Fd,...a.energy??{}},a.presence=a.presence??[],a.settings={...Rd,...a.settings,roof:{...Yr,...a.settings?.roof??{}}};for(let e of a.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let o=n[i.mount??"ceiling"],[r,s,l]=Ne[o];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:o,x:i.x,z:i.z,rotation:0,w:r,d:s,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return a}function G(a){return`${a}_${Math.random().toString(36).slice(2,10)}`}function me(a){let e=0;for(let t=0;t<a.length;t++){let[n,i]=a[t],[o,r]=a[(t+1)%a.length];e+=n*r-o*i}return e/2}function We(a){return Math.abs(me(a))}function Xe(a){let e=me(a);if(Math.abs(e)<1e-9){let i=a.length||1;return[a.reduce((o,r)=>o+r[0],0)/i,a.reduce((o,r)=>o+r[1],0)/i]}let t=0,n=0;for(let i=0;i<a.length;i++){let[o,r]=a[i],[s,l]=a[(i+1)%a.length],d=o*l-s*r;t+=(o+s)*d,n+=(r+l)*d}return[t/(6*e),n/(6*e)]}function Ai(a){if(a.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=a[e],[i,o]=a[(e+1)%4];if(Math.abs(t-i)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function xe(a){let e=1/0,t=1/0,n=-1/0,i=-1/0;for(let[o,r]of a)e=Math.min(e,o),t=Math.min(t,r),n=Math.max(n,o),i=Math.max(i,r);return{x0:e,z0:t,x1:n,z1:i}}function Ee(a){if(a.rotation_x||a.rotation_z)return Vr(a);let e=a.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=a.w/2,o=a.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([r,s])=>[a.x+r*t-s*n,a.z+r*n+s*t])}function K(a,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[o,r]=e[n],[s,l]=e[i];r>a[1]!=l>a[1]&&a[0]<(s-o)*(a[1]-r)/(l-r)+o&&(t=!t)}return t}function _e(a,e){return Tn(a,e)+(e?.floor_offset??0)}function Tn(a,e){return e?.wall_offset??(e?.elevation??a.elevation)-a.elevation}function Se(a,e){return e?.ceiling_height??e?.height??a.height}function Dn(a,e,t){return a.rooms.find(n=>K([e,t],n.points))}function ye(a,e,t){return _e(a,Dn(a,e,t))}function bi(a,e,t){let n=Dn(a,e,t);return _e(a,n)+Se(a,n)}function ht(a){let e=a.rooms.filter(t=>t.points.length>=3);return e.length?Math.max(...e.map(t=>a.elevation+_e(a,t)+Se(a,t))):a.elevation+a.height}var Fi={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var aa="neonplan3d";function Dd(a){let e=structuredClone(a);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let t of e.floors)t.placements=[],t.background=null,t.rooms=t.rooms.map(n=>({...n,area_id:null})),t.furniture=t.furniture.map(n=>({...n,entity:null,power:null})),t.openings=t.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return e}function la(a,e){return{format:aa,version:1,exported_at:new Date().toISOString(),building:e?Dd(a):structuredClone(a)}}function da(a){let e;try{e=JSON.parse(a)}catch{throw new Error("not_json")}let t=e,n=t?.format===aa?t.building:e;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return Ei(n)}function ca(a){let e=new Set;for(let t of a.floors){t.background?.image_id&&e.add(t.background.image_id);for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&e.add(i.image)}return[...e]}function To(a,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=t,n.download=a,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var Ld={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Wd=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Od=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Hd=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Ri=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],_a=new Set(["light","switch","fan"]);function ga(a){return a.slice(0,a.indexOf("."))}function te(a){return Ld[ga(a)]??null}function an(a){return a!==null&&a!=="scene"&&a!=="script"}function Ot(a,e){let t=a.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&a.devices?.[t.device_id]?.area_id||null:null}function ha(a,e){let t=te(e);if(!t)return!1;let n=a.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let i=a.states[e];if(!i)return!1;let o=i.attributes.device_class;return t==="sensor"?o?Wd.has(o):Od.has(String(i.attributes.unit_of_measurement??"")):t==="binary"?o?Hd.has(o):!!n?.area_id:!0}var Vd=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function ua(a,e){if(te(e)!=="sensor")return!1;let t=a.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=a.states[e];return!n||!n.attributes.unit_of_measurement||Vd.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Ii(n)}var Do=null;function Wt(a){let e=Do;if(e&&e.entities===a.entities&&e.devices===a.devices&&(e.states===a.states||(e.states=a.states,Object.keys(a.states).length===e.stateCount)))return e;let t=new Map,n=new Map,i=[],o=new Map,r=new Map;for(let l of Object.keys(a.entities??{})){let d=a.entities[l],c=d.device_id;c&&d.area_id&&(r.get(c)??r.set(c,new Set).get(c)).add(d.area_id),c&&No(a,l)&&(n.get(c)??n.set(c,[]).get(c)).push(l),c&&!d.hidden&&!d.entity_category&&(o.get(c)??o.set(c,new Set).get(c)).add(ga(l));let h=ha(a,l),u=Ot(a,l);if(!u){(h||ua(a,l))&&an(te(l))&&i.push(l);continue}h&&(t.get(u)??t.set(u,[]).get(u)).push(l)}if(a.entities)for(let l of Object.keys(a.states))a.entities[l]||(ha(a,l)||ua(a,l))&&an(te(l))&&i.push(l);i.sort((l,d)=>Ri.indexOf(te(l))-Ri.indexOf(te(d))||ge(a,l).localeCompare(ge(a,d)));for(let[l,d]of t){let c=a.areas?.[l]?.name;d.sort((h,u)=>{let p=Ri.indexOf(te(h)),f=Ri.indexOf(te(u));return p-f||ge(a,h,c).localeCompare(ge(a,u,c))})}let s=new Set([...r].filter(([,l])=>l.size>1).map(([l])=>l));return Do={entities:a.entities,devices:a.devices,states:a.states,stateCount:Object.keys(a.states).length,areas:t,power:n,unassigned:i,domains:o,hubs:s},Do}function ot(a,e){return!e||!a.entities?[]:Wt(a).areas.get(e)??[]}function ba(a,e){return a.entities?[...Wt(a).areas].filter(([t])=>t!==e).map(([t,n])=>({areaId:t,name:a.areas?.[t]?.name??t,ids:n.filter(i=>an(te(i)))})).filter(t=>t.ids.length).sort((t,n)=>t.name.localeCompare(n.name)):[]}function va(a){return a.entities?Wt(a).unassigned:[]}var Lo={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Cd=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Bd=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Wo(a,e){let t=a.entities?.[e]?.device_id,n=t&&!Wt(a).hubs.has(t)?Wt(a).domains.get(t):void 0;return n&&[...n].some(i=>Cd.has(i))?!1:!Bd.test(`${e} ${a.states[e]?.attributes.friendly_name??""}`)}function wa(a,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return a.states[i]?[i]:[];let o=Lo[n],r=(p,f)=>K([p,f],t.points),s=e?.placements.filter(p=>p.entity_id.startsWith("sensor."))??[],l=s.filter(p=>r(p.x,p.z)).map(p=>p.entity_id),d=new Set(s.filter(p=>!r(p.x,p.z)).map(p=>p.entity_id)),c=[...new Set([...ot(a,t.area_id).filter(p=>!d.has(p)),...l])],h=c.filter(p=>p.startsWith("sensor.")&&a.states[p]?.attributes.device_class===o&&Wo(a,p));if(h.length)return h;let u=Oo[n];return u?c.filter(p=>p.startsWith("climate.")&&typeof a.states[p]?.attributes[u]=="number"):[]}var Oo={temperature:"current_temperature",humidity:"current_humidity"};function ya(a,e){return!!a.entities&&Wt(a).hubs.has(e)}function Ho(a,e){return a.entities?Wt(a).power.get(e)??[]:[]}function ge(a,e,t){let i=a.states[e]?.attributes.friendly_name??a.entities?.[e]?.name??e;if(t&&i.length>t.length+1&&i.toLowerCase().startsWith(t.toLowerCase()+" ")){let o=i.slice(t.length+1);return o.charAt(0).toUpperCase()+o.slice(1)}return i}function Ii(a){return!a||a.state==="unavailable"||a.state==="unknown"}function ka(a){return!!a&&a.entity_id.startsWith("sensor.")&&a.attributes.device_class==="enum"}function Ti(a,e,t=null){if(a==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(a==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(a){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function Nd(a,e){let t=1/0;for(let n=0;n<e.length;n++){let i=e[n],o=e[(n+1)%e.length],r=o[0]-i[0],s=o[1]-i[1],l=r*r+s*s||1,d=Math.min(1,Math.max(0,((a[0]-i[0])*r+(a[1]-i[1])*s)/l));t=Math.min(t,Math.hypot(a[0]-i[0]-r*d,a[1]-i[1]-s*d))}return t}function Vo(a,e,t=[]){if(a.points.length<3||!e.length)return[];let n=a.points,i=n.map(v=>v[0]),o=n.map(v=>v[1]),r=Math.min(...i),s=Math.min(...o),l=Math.max(...i),d=Math.max(...o),c=Math.min(l-r,d-s),h=Math.max(.1,Math.min(.25,c/8)),u=Math.min(.35,c/5),p=Xe(n),f=[];for(let v=r+h/2;v<l;v+=h)for(let w=s+h/2;w<d;w+=h){let $=[v,w];if(!K($,n))continue;let k=Nd($,n);k<u||f.push({p:$,wall:k})}f.length||f.push({p,wall:0});let m=[...t],_=[],g=Math.min(.7,c/4);for(let v of e){let w=te(v)==="light",$=f[0].p,k=-1/0;for(let{p:z,wall:S}of f){let A=m.length?Math.min(...m.map(T=>Math.hypot(z[0]-T[0],z[1]-T[1]))):3,P=Math.hypot(z[0]-p[0],z[1]-p[1]),F=Math.min(A,3)*2;P<g&&!w&&(F-=10),F-=w?P*.35:S*1.2,F>k+1e-9&&(k=F,$=z)}let x=[Math.round($[0]*100)/100,Math.round($[1]*100)/100];m.push(x),_.push({entity_id:v,x:x[0],z:x[1],y:null,mount:null})}return _}var Kd=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),jd=new Set(["garage","gate"]),Gd=new Set(["window","opening"]);function Ln(a,e,t=!1){let n=new Map;return e.length&&a.forEach((i,o)=>{let r=t&&e.length===1?e[0]:e[o];r&&n.set(i.id,r)}),n}function $a(a,e){let t=new Map,n=(o,r)=>o==="none"?null:o??r??null,i=(o,r,s)=>({cover:n(o.cover,r),contact:o.sensor==="handle"&&o.contact==null?null:n(o.contact,s),tilt:o.tilt==="none"?null:o.tilt,contact2:o.leaves===2&&o.contact2&&o.contact2!=="none"?o.contact2:null,tilt2:o.leaves===2&&o.tilt2&&o.tilt2!=="none"?o.tilt2:null,position:o.position&&o.position!=="none"?o.position:null,positionInverted:!!o.position_inverted,tiltAngle:o.tilt_angle&&o.tilt_angle!=="none"?o.tilt_angle:null,tiltMax:o.tilt_max??null,tiltOffset:o.tilt_offset??null,tiltInvert:!!o.tilt_invert,shut:!!o.shut,...o.contact_invert?{contactInvert:!0}:{}});for(let o of e){for(let r of o.rooms){let s=o.openings.filter(w=>w.room_id===r.id).sort((w,$)=>w.edge-$.edge||w.offset-$.offset);if(!s.length)continue;let l=ot(a,r.area_id),d=w=>a.states[w]?.attributes.device_class,c=l.filter(w=>te(w)==="cover"&&Kd.has(d(w))),h=s.filter(w=>w.type==="window"),u=s.filter(w=>w.type==="door"),p=s.filter(w=>w.type==="garage"),f=Ln(h,c,!0),m=Ln(h,l.filter(w=>te(w)==="binary"&&Gd.has(d(w)))),_=Ln(u,l.filter(w=>te(w)==="binary"&&d(w)==="door")),g=Ln(p,l.filter(w=>te(w)==="cover"&&jd.has(d(w)??""))),v=Ln(p,l.filter(w=>te(w)==="binary"&&d(w)==="garage_door"));for(let w of s){let $=w.type==="window"?f:w.type==="garage"?g:null,k=w.type==="window"?m:w.type==="garage"?v:_;t.set(w.id,i(w,$?.get(w.id),k.get(w.id)))}}for(let r of o.openings)t.has(r.id)||t.set(r.id,i(r))}return t}var Ud=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Co(a){if(!a||Ii(a))return null;let e=a.attributes.window_state;for(let t of[typeof e=="string"?e:null,a.state]){if(!t)continue;let n=Ud.find(([i])=>i.test(t.trim()));if(n)return n[1]}return null}function Bo(a,e){let t=new Map,n=[];for(let r of e){let s=a.entities?.[r]?.device_id??`entity:${r}`,l=t.get(s);l||(t.set(s,l=[]),n.push(s)),l.push(r)}let i=n.map(r=>{let s=t.get(r),l=s.find(d=>!a.entities?.[d]?.name)??s[0];return{primary:l,others:s.filter(d=>d!==l)}}),o=new Map(e.map((r,s)=>[r,s]));return i.sort((r,s)=>o.get(r.primary)-o.get(s.primary))}function Zd(a,e){return Bo(a,e).map(t=>t.primary)}var pa={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i},xa=new Set(["tv_board","tv_wall"]);function Sa(a,e){let t=a.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let i=String(n).toLowerCase(),o=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===o||o.length>=3&&i.includes(o)}function Di(a){return xa.has(a)||!!Fr(a)}function Li(a){return Di(a)||a==="desk"||a==="fridge_smart"}var fa={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function No(a,e){return e.startsWith("sensor.")&&a.states[e]?.attributes.device_class==="power"}function qd(a,e){if(No(a,e))return e;let t=a.entities?.[e]?.device_id;return t?Ho(a,t).find(n=>n!==e)??null:null}function ln(a,e){let t=new Map;for(let n of e){let i=new Set([...n.furniture.flatMap(o=>[o.entity,o.power]),...n.placements.map(o=>o.entity_id)].filter(o=>!!o&&o!=="none"));for(let o of n.furniture){let r=o.type in fa,s=r?fa[o.type]:pa[o.type]??(ct(o.type)?pa.robot_vacuum:void 0);if(!s&&o.entity==null&&o.power==null)continue;let l=n.rooms.find(p=>p.points.length>=3&&K([o.x,o.z],p.points)),d=l?Zd(a,ot(a,l.area_id)):[],c=p=>`${p} ${ge(a,p)}`,h=o.entity==="none"?null:o.entity??null;if(o.entity==null){let p=d.filter(f=>!i.has(f));if(r){let f=p.filter(m=>te(m)==="light");h=f.find(m=>s.test(c(m)))??f[0]??null}else if(ct(o.type)){let f=l?.area_id??null;h=Object.keys(a.entities??{}).find(m=>m.startsWith("vacuum.")&&!i.has(m)&&Ot(a,m)===f)??null}else if(o.type==="radiator"||o.type==="ac_unit"){let f=p.filter(m=>te(m)==="climate");h=f.find(m=>s.test(c(m)))??f[0]??null}else if(Di(o.type)){let f=p.filter(m=>te(m)==="media");h=f.find(m=>a.states[m]?.attributes.device_class==="tv")??f.find(m=>s?.test(c(m)))??(xa.has(o.type)?f[0]??null:null)}else s&&(h=p.find(f=>["switch","media","fan"].includes(te(f)??"")&&s.test(c(f)))??null);h&&i.add(h)}let u=o.power==="none"?null:o.power??null;o.power==null&&(u=h?qd(a,h):null,!u&&s&&l&&!r&&(u=ot(a,l.area_id).find(f=>No(a,f)&&!i.has(f)&&s.test(c(f)))??null),u&&i.add(u)),(h||u)&&t.set(o.id,{entity:h,power:u})}}return t}var ma=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,Xd={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Ma(a,e){let t=e.car??{},n=h=>h&&h!=="none"?h:null,i=n(t.device)??n(e.entity),o=i?a.entities?.[i]?.device_id:null,r=o&&a.entities?Object.values(a.entities).filter(h=>h.device_id===o).map(h=>h.entity_id):[],s=h=>`${h} ${a.states[h]?.attributes.friendly_name??""} ${a.entities?.[h]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(h,u,p)=>r.find(f=>u.includes(f.split(".")[0])&&Xd[h].test(s(f))&&(!p||p(f)))??null,d=h=>String(a.states[h]?.attributes.unit_of_measurement??""),c=h=>String(a.states[h]?.attributes.device_class??"");return{soc:n(t.soc)??r.find(h=>h.startsWith("sensor.")&&c(h)==="battery")??l("soc",["sensor"],h=>d(h)==="%"),range:n(t.range)??l("range",["sensor"],h=>/km|mi/.test(d(h)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],h=>/^k?W$/.test(d(h)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??r.find(h=>h.startsWith("binary_sensor.")&&c(h)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??r.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??r.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??r.find(h=>h.startsWith("device_tracker."))??null}}function Pa(a,e,t){if(t==="none")return null;if(t)return t;let n=e?a.entities?.[e]?.device_id:null;if(!n||!a.entities)return null;for(let i of Object.values(a.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(ma.test(i.translation_key??"")||ma.test(i.entity_id.split(".")[1])))return i.entity_id;return null}var ie=(a,e,t,n,i="")=>I`<rect class=${i} x=${Math.min(a,t)} y=${Math.min(e,n)} width=${Math.abs(t-a)} height=${Math.abs(n-e)} />`,X=(a,e,t,n,i="")=>I`<line class=${i} x1=${a} y1=${e} x2=${t} y2=${n} />`,ue=(a,e,t,n="")=>I`<circle class=${n} cx=${a} cy=${e} r=${t} />`,Ko=(a,e,t,n,i="")=>I`<ellipse class=${i} cx=${a} cy=${e} rx=${t} ry=${n} />`;function jo(a,e,t){let n=[];for(let i=1;i<t;i++){let o=-a/2+a/t*i;n.push(X(o,e/2,o,e/2-Math.min(.12,e*.3)))}return n}function za(a,e,t,n){let i=Math.min(.24,e*.28),o=n?Math.min(.2,a*.12):0,r=[ie(-a/2,-e/2,a/2,-e/2+i,"fp3d-sym-fill")];n&&r.push(ie(-a/2,-e/2,-a/2+o,e/2,"fp3d-sym-fill"),ie(a/2-o,-e/2,a/2,e/2,"fp3d-sym-fill"));let s=a-2*o;for(let l=1;l<t;l++){let d=-a/2+o+s/t*l;r.push(X(d,-e/2+i,d,e/2-.02))}return r}function Ea(a,e,t){let n=-a/2,i=a/2,o=-e/2,r=e/2,s=Math.max(.3,Math.min(.95,e*.5,a*(t?.34:.45))),l=Math.min(.24,s*.28),d=Math.min(.2,s*.24),c=[ie(n,o,i,o+l,"fp3d-sym-fill"),ie(n,o+l,n+l,r,"fp3d-sym-fill"),ie(n+l,r-d,n+s,r,"fp3d-sym-fill")];t?c.push(ie(i-l,o+l,i,r,"fp3d-sym-fill"),ie(i-s,r-d,i-l,r,"fp3d-sym-fill")):c.push(ie(i-d,o+l,i,o+s,"fp3d-sym-fill"));let h=t?i-s:i-d;c.push(X(n+s,r-d,n+s,o+s),X(n+s,o+s,h,o+s)),t&&c.push(X(i-s,o+s,i-s,r-d));let u=n+l,p=t?i-l:i-d,f=Math.max(1,Math.round((p-u)/.62));for(let v=1;v<f;v++)c.push(X(u+(p-u)/f*v,o+l,u+(p-u)/f*v,o+s));let m=o+s,_=r-d,g=_-m<.2?0:Math.max(1,Math.round((_-m)/.62));for(let v=0;v<g;v++){let w=m+(_-m)/g*v;c.push(X(n+l,w,n+s,w)),t&&c.push(X(i-s,w,i-l,w))}return c}function Aa(a,e,t){switch(a){case"sofa":return za(e,t,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return za(e,t,1,!0);case"sofa_l":return Ea(e,t,!1);case"sofa_u":return Ea(e,t,!0);case"bench":return[ie(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,t*.4);return[ie(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill"),ie(-e/2,-t/2,-e/2+.08,t/2,"fp3d-sym-fill"),X(-e/2+n,-t/2+n,e/2,-t/2+n),X(-e/2+n,-t/2+n,-e/2+n,t/2)]}case"chair":return[ie(-e/2,-t/2,e/2,-t/2+.06,"fp3d-sym-fill")];case"office_chair":return[ue(0,.03,Math.min(e,t)*.36),ie(-e*.35,-t/2+.02,e*.35,-t/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[ue(0,0,Math.min(e,t)*.42)];case"stool":return[ie(-e/2+.04,-t/2+.04,e/2-.04,t/2-.04)];case"table":case"coffee_table":case"desk":{let n=[ie(-e/2+.05,-t/2+.05,e/2-.05,t/2-.05)];return a==="desk"&&n.push(X(-.3,-t/2+.1,.3,-t/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=e>1.2?2:1,i=(e-.2)/n,o=[ie(-e/2,-t/2,e/2,-t/2+.07,"fp3d-sym-fill"),X(-e/2,-t/2+(t-.1)*.36,e/2,-t/2+(t-.1)*.36)];for(let r=0;r<n;r++)o.push(ie(-e/2+.13+i*r,-t/2+.12,-e/2+.07+i*(r+1),-t/2+.12+Math.min(.4,t*.18)));return o}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return jo(e,t,a==="nightstand"||a==="tall_cabinet"||a==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[ie(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),...jo(e,t,Math.max(2,Math.round(e/.5)))];case"island":return[X(-e/2,t/2-.3,e/2,t/2-.3)];case"fridge":return[X(-e/2+.06,t/2-.04,e/2-.06,t/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(e,t)*.14;return[ue(-e*.22,-t*.2,n),ue(e*.22,-t*.2,n*.8),ue(-e*.22,t*.2,n*.8),ue(e*.22,t*.2,n)]}case"sink":{let n=Math.min(.5,e-.2);return[ie(-n/2,-t/2+.1,n/2,t/2-.08),ue(0,-t/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[X(-e/2+.08,t/2-.05,e/2-.08,t/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[ue(0,.05,Math.min(e,t)*.3),X(-e/2,-t/2+.1,e/2,-t/2+.1)];case"bathtub":return[ie(-e/2+.07,-t/2+.07,e/2-.07,t/2-.07),ue(-e/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[X(-e/2,-t/2,e/2,t/2),X(e/2,-t/2,-e/2,t/2),ue(0,0,.04)];case"wc":return[ie(-e/2,-t/2,e/2,-t/2+Math.min(.18,t*.3),"fp3d-sym-fill"),Ko(0,t*.1,e*.36,t*.3)];case"washbasin":return[Ko(0,.03,e*.34,t*.3)];case"tv_board":return[X(-Math.min(e*.4,.72),-t/2+.14,Math.min(e*.4,.72),-t/2+.14,"fp3d-sym-strong"),...jo(e,t,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[X(-e/2,0,e/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[ue(0,0,Math.min(e,t)*.45,"fp3d-sym-fill"),ue(0,0,Math.min(e,t)*1.4)];case"lamp_bollard":case"lamp_garden":return[ue(0,0,Math.min(e,t)*.5,"fp3d-sym-fill"),ue(0,0,Math.min(e,t)*1.6)];case"parking":return[ie(-e/2+.08,-t/2+.08,e/2-.08,t/2-.08),X(-e*.15,t/2-.5,0,t/2-.22,"fp3d-sym-strong"),X(0,t/2-.22,e*.15,t/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[ie(-e*.45,-t/2,e*.45,-t/2+t*.3,"fp3d-sym-fill"),ue(0,t*.14,Math.min(e,t)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(e/.1));for(let o=1;o<i;o++)n.push(X(-e/2+e/i*o,-t/2,-e/2+e/i*o,t/2));return n}case"lamp_panel":return[ie(-e/2+.03,-t/2+.03,e/2-.03,t/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(e,t)/2,i=[ue(0,0,n*.9,"fp3d-sym-fill"),ue(0,0,n*.3)];if(a==="lamp_ceiling"||a==="lamp_pendant")for(let o=0;o<8;o++){let r=o/8*Math.PI*2;i.push(X(Math.cos(r)*n*1.05,Math.sin(r)*n*1.05,Math.cos(r)*n*1.35,Math.sin(r)*n*1.35))}return i}case"lamp_wall":return[ie(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),Ko(0,.01,e*.4,t*.4)];case"led_strip":return[X(-e/2,0,e/2,0,"fp3d-sym-strong")];case"plant":return[ue(0,0,Math.min(e,t)*.46),ue(0,0,Math.min(e,t)*.25)];case"rug":return[ie(-e/2+.1,-t/2+.1,e/2-.1,t/2-.1)];case"stairs":{let n=Math.max(3,Math.round(t/.26)),i=[];for(let o=1;o<n;o++)i.push(X(-e/2,t/2-t/n*o,e/2,t/2-t/n*o));return i.push(X(0,t/2-.1,0,-t/2+.25,"fp3d-sym-strong"),X(-.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong"),X(.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong")),i}case"stairs_u":{let{steps1:n,steps2:i,fw:o,landing:r,run:s}=sa(e,t,2.75),l=-t/2+r,d=-e/2+o,c=e/2-o,h=[X(-e/2,l,d,l),X(d,l,d,t/2),X(c,l,c,t/2)];for(let _=1;_<n;_++)h.push(X(-e/2,t/2-s*_,d,t/2-s*_));for(let _=1;_<=i;_++)h.push(X(c,l+s*_,e/2,l+s*_));let u=(-e/2+d)/2,p=(c+e/2)/2,f=-t/2+r/2,m=t/2-.15;return h.push(X(u,t/2-.1,u,f,"fp3d-sym-strong"),X(u,f,p,f,"fp3d-sym-strong"),X(p,f,p,m,"fp3d-sym-strong"),X(p-.15,m-.2,p,m,"fp3d-sym-strong"),X(p+.15,m-.2,p,m,"fp3d-sym-strong")),h}default:{let n=he(a);return n?Jd(n,e,t):y}}}function Jd(a,e,t){return a.symbol?.length?a.symbol.map(n=>n.shape==="rect"?ie((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t,n.fill?"fp3d-sym-fill":""):n.shape==="circle"?ue(n.x*e,n.z*t,n.r*Math.min(e,t)):X(n.x1*e,n.z1*t,n.x2*e,n.z2*t)):a.parts.filter(n=>n.visible!==!1&&(n.w<.98||n.d<.98||n.shape==="polygon")).map(n=>n.shape==="polygon"?I`<polygon points=${(n.points??[]).map(([i,o])=>`${n.x*e+i*n.w*e},${n.z*t+o*n.d*t}`).join(" ")} />`:["sphere","ellipsoid","torus","bowl"].includes(n.shape)?I`<ellipse cx=${n.x*e} cy=${n.z*t} rx=${n.w*e/2} ry=${n.d*t/2} />`:n.shape==="cyl"&&(n.axis??"y")==="y"?ue(n.x*e,n.z*t,Math.min(n.w*e,n.d*t)/2):ie((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t))}var $e=(a,e)=>[a[0]-e[0],a[1]-e[1]],kt=(a,e)=>[a[0]+e[0],a[1]+e[1]],pt=(a,e)=>[a[0]*e,a[1]*e],On=(a,e)=>a[0]*e[0]+a[1]*e[1],dn=(a,e)=>a[0]*e[1]-a[1]*e[0],Wn=a=>Math.hypot(a[0],a[1]),st=a=>{let e=Wn(a)||1;return[a[0]/e,a[1]/e]},Fa=a=>[-a[1],a[0]],Ra=a=>[a[1],-a[0]];function Me(a,e,t=[]){let n=e.eps??.005,i=[],o=t.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),r=[],s=S=>{for(let A=0;A<r.length;A++)if(Math.abs(r[A][0]-S[0])<=n&&Math.abs(r[A][1]-S[1])<=n)return A;return r.push([S[0],S[1]]),r.length-1},l=[];for(let S of a){let A=S.points;if(A.length<3||Math.abs(me(A))<1e-6)continue;let P=me(A)>0,F=A.map(s);for(let T=0;T<A.length;T++){let O=F[T],L=F[(T+1)%A.length];O!==L&&l.push(P?{u:O,v:L,room:S.id,edge:T,forward:!0}:{u:L,v:O,room:S.id,edge:T,forward:!1})}}let d=o.map(S=>[s(S.a),s(S.b)]),c=new Set;for(let S of a){let A=S.points;A.length<3||(S.wall_splits??[]).forEach((P,F)=>{if(!P||F>=A.length)return;let T=A[F],O=$e(A[(F+1)%A.length],T),L=Wn(O);for(let D of P)D>n&&D<L-n&&c.add(s(kt(T,pt(O,D/L))))})}let h=[];for(let S of l){let A=r[S.u],P=r[S.v],F=$e(P,A),T=Wn(F),O=pt(F,1/T),L=[];for(let W=0;W<r.length;W++){if(W===S.u||W===S.v)continue;let V=$e(r[W],A),B=On(V,O);B<=n||B>=T-n||Math.abs(dn(O,V))<=n&&L.push({t:B,id:W})}L.sort((W,V)=>W.t-V.t);let D=[{t:0,id:S.u},...L,{t:T,id:S.v}];for(let W=0;W+1<D.length;W++){let V=D[W],B=D[W+1],J=S.forward?V.t:T-B.t,Z=S.forward?B.t:T-V.t;h.push({u:V.id,v:B.id,room:S.room,edge:S.edge,t0:J,t1:Z})}}let u=new Map;for(let S of h){let A=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,P=u.get(A);P||u.set(A,P=[]),P.push(S)}let p=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),f=new Map;for(let S of h){let A=`${S.room}:${S.edge}`;f.set(A,[...f.get(A)??[],S.t0].sort((P,F)=>P-F))}let m=S=>{let A=a.find(F=>F.id===S.room)?.wall_heights?.[S.edge];if(!Array.isArray(A))return A;let P=f.get(`${S.room}:${S.edge}`)??[];return A[P.indexOf(S.t0)]??null},_=S=>{let A=S.map(m).filter(F=>typeof F=="number"&&F>0);if(A.length)return Math.min(...A);let P=S.map(F=>a.find(T=>T.id===F.room)?.ceiling_height);return P.every(F=>typeof F=="number"&&F>0)?Math.max(...P):void 0},g=S=>{let A=S.map(P=>a.find(F=>F.id===P.room)?.wall_thickness?.[P.edge]).filter(P=>typeof P=="number"&&P>0);return A.length?Math.max(...A):void 0},v=S=>S.some(A=>m(A)===0),w=[],$=[];for(let S of u.values()){let A=S[0],P=S.find(F=>F!==A&&F.u===A.v&&F.v===A.u&&F.room!==A.room);for(let F of S)F!==A&&F!==P&&F.room!==A.room&&i.push(`overlap:${A.room}:${F.room}`);if(v(P?[A,P]:[A])){P&&w.push([A.room,P.room]);continue}if(P){let F=g([A,P])??e.interior;$.push({a:A.u,b:A.v,left:F/2,right:F/2,exterior:!1,roomLeft:A.room,roomRight:P.room,sources:[p(A),p(P)],height:_([A,P])})}else $.push({a:A.u,b:A.v,left:0,right:g([A])??e.exterior,exterior:!0,roomLeft:A.room,roomRight:null,sources:[p(A)],height:_([A])})}let k=S=>st($e(r[S.b],r[S.a]));for(let S of $){if(S.exterior||S.free)continue;let A=new Set;for(let F of[S.a,S.b])for(let T of $)!T.exterior||T.free||T.a!==F&&T.b!==F||Math.abs(dn(k(S),k(T)))>1e-6||(T.roomLeft===S.roomLeft?A.add("left"):T.roomLeft===S.roomRight&&A.add("right"));if(A.size!==1)continue;let P=S.left+S.right;A.has("left")?(S.left=0,S.right=P):(S.left=P,S.right=0)}o.forEach((S,A)=>{let[P,F]=d[A];if(P===F)return;let T=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],O=a.find(W=>W.points.length>=3&&K(T,W.points))?.id??null,L=(S.thickness??e.interior)/2,D=typeof S.height=="number"&&S.height>0?S.height:void 0;$.push({free:S.id,a:P,b:F,left:L,right:L,exterior:!1,roomLeft:O,roomRight:O,sources:[],height:D})}),$=Qd($,r,c);let x=tc($,r);return{walls:$.map((S,A)=>{let P=r[S.a],F=r[S.b],T=x.get(`${A}:a`),O=x.get(`${A}:b`),L=nc([T.right,O.left,F,O.right,T.left,P],1e-6);return{id:Yd(P,F),a:[P[0],P[1]],b:[F[0],F[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:L,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{}}}),warnings:[...new Set(i)],open:w}}function Yd(a,e){let t=o=>Math.round(o*100),[n,i]=a[0]<e[0]||a[0]===e[0]&&a[1]<=e[1]?[a,e]:[e,a];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function Ia(a){return{...a,a:a.b,b:a.a,left:a.right,right:a.left,roomLeft:a.roomRight,roomRight:a.roomLeft}}function Qd(a,e,t=new Set){let n=a.slice(),i=!0;for(;i;){i=!1;let o=new Map;n.forEach((r,s)=>{for(let l of[r.a,r.b]){let d=o.get(l);d||o.set(l,d=[]),d.push(s)}});for(let[r,s]of o){if(s.length!==2||t.has(r))continue;let l=n[s[0]],d=n[s[1]];if(l.b!==r&&(l=Ia(l)),d.a!==r&&(d=Ia(d)),l.a===d.b)continue;let c=st($e(e[l.b],e[l.a])),h=st($e(e[d.b],e[d.a]));if(Math.abs(dn(c,h))>1e-6||On(c,h)<=0||l.free||d.free||l.height!==d.height||l.exterior!==d.exterior||l.roomLeft!==d.roomLeft||l.roomRight!==d.roomRight||Math.abs(l.left-d.left)>1e-9||Math.abs(l.right-d.right)>1e-9)continue;let u={...l,b:d.b,sources:ec(l.sources,d.sources)},p=n.filter((f,m)=>m!==s[0]&&m!==s[1]);p.push(u),n.length=0,n.push(...p),i=!0;break}}return n}function ec(a,e){let t=a.map(n=>({...n}));for(let n of e){let i=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function tc(a,e){let t=new Map;a.forEach((i,o)=>{let r=st($e(e[i.b],e[i.a])),s=[[i.a,{key:`${o}:a`,d:r,left:i.left,right:i.right,angle:Math.atan2(r[1],r[0])}],[i.b,{key:`${o}:b`,d:pt(r,-1),left:i.right,right:i.left,angle:Math.atan2(-r[1],-r[0])}]];for(let[l,d]of s){let c=t.get(l);c||t.set(l,c=[]),c.push(d)}});let n=new Map;for(let[i,o]of t){let r=e[i];o.sort((d,c)=>d.angle-c.angle);let s=d=>({left:kt(r,pt(Fa(d.d),d.left)),right:kt(r,pt(Ra(d.d),d.right))});for(let d of o)n.set(d.key,s(d));if(o.length<2)continue;let l=4*Math.max(...o.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<o.length;d++){let c=o[d],h=o[(d+1)%o.length],u=kt(r,pt(Fa(c.d),c.left)),p=kt(r,pt(Ra(h.d),h.right)),f=dn(c.d,h.d);if(Math.abs(f)<1e-4)continue;let m=dn($e(p,u),h.d)/f,_=kt(u,pt(c.d,m));Wn($e(_,r))>l||(n.get(c.key).left=_,n.get(h.key).right=_)}}return n}function nc(a,e){let t=a.filter((i,o)=>Wn($e(i,a[(o+1)%a.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let o=t[(i+t.length-1)%t.length],r=t[i],s=t[(i+1)%t.length],l=$e(r,o),d=$e(s,r);if(Math.abs(dn(st(l),st(d)))<1e-7&&On(l,d)>0){t=t.filter((c,h)=>h!==i),n=!0;break}}}return t}function $t(a,e,t){let n=a.points[e],i=a.points[(e+1)%a.points.length],o=st($e(i,n));return kt(n,pt(o,t))}function xt(a,e,t){if(a.wall){let i=t.find(s=>s.id===a.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let o=st($e(i.b,i.a));return{room:{id:a.room_id,name:"",area_id:null,points:[i.a,i.b,kt(i.a,[-o[1],o[0]])]},edge:0}}let n=e.find(i=>i.id===a.room_id);return n&&a.edge<n.points.length?{room:n,edge:a.edge}:null}function Hn(a,e,t){if(!e.wall)return ic(a,t.room,t.edge,e.offset);let n=a.find(o=>o.free===e.wall);if(!n)return null;let i=$t(t.room,0,e.offset);return{wall:n,s:On($e(i,n.a),st($e(n.b,n.a)))}}function ic(a,e,t,n){for(let i of a){if(!i.sources.find(s=>s.room_id===e.id&&s.edge===t&&n>=s.t0-1e-6&&n<=s.t1+1e-6))continue;let r=$t(e,t,n);return{wall:i,s:On($e(r,i.a),st($e(i.b,i.a)))}}return null}function Go(a,e){let t=me(e)>0?1:-1,n=[...a];for(let i=0;i<e.length&&n.length;i++){let o=e[i],r=e[(i+1)%e.length],s=d=>t*((r[0]-o[0])*(d[1]-o[1])-(r[1]-o[1])*(d[0]-o[0])),l=n;n=[];for(let d=0;d<l.length;d++){let c=l[d],h=l[(d+1)%l.length],u=s(c),p=s(h);if(u>=0&&n.push(c),u>=0!=p>=0){let f=u/(u-p);n.push([c[0]+(h[0]-c[0])*f,c[1]+(h[1]-c[1])*f])}}}return n}var Ta=a=>a.length>=3?Math.abs(We(a)):0;function oc(a,e){return a.exterior?0:a.roomLeft===e?a.left:a.roomRight===e?a.right:0}function Da(a,e,t){let n=Ta(a.points);if(a.points.length<3)return n;let{walls:i}=Me(e.rooms,t,e.walls??[]),o=n,r=i.filter(s=>!s.free&&(s.roomLeft===a.id||s.roomRight===a.id));for(let s of i){let l=[(s.a[0]+s.b[0])/2,(s.a[1]+s.b[1])/2];if((s.free?!K(l,a.points):!r.includes(s))||(o-=Ta(Go(a.points,s.footprint)),!s.free))continue;let d=Math.hypot(s.b[0]-s.a[0],s.b[1]-s.a[1]);if(d<.2)continue;let c=[(s.b[0]-s.a[0])/d,(s.b[1]-s.a[1])/d],h=null;for(let u of r){let p=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1]);if(p<.2)continue;let f=[(u.b[0]-u.a[0])/p,(u.b[1]-u.a[1])/p];if(Math.abs(c[0]*f[1]-c[1]*f[0])>.05)continue;let m=Math.abs((l[0]-u.a[0])*f[1]-(l[1]-u.a[1])*f[0]),_=(s.a[0]-u.a[0])*f[0]+(s.a[1]-u.a[1])*f[1],g=(s.b[0]-u.a[0])*f[0]+(s.b[1]-u.a[1])*f[1],v=Math.min(p,Math.max(_,g))-Math.max(0,Math.min(_,g)),w=m-(s.left+s.right)/2-oc(u,a.id);v>.1&&w>0&&m<1&&(!h||w<h.gap)&&(h={gap:w,overlap:v})}h&&(o-=h.gap*h.overlap)}return Math.max(0,o)}function Uo(a,e){return e==="metric"||e==="imperial"?e:a?.config?.unit_system?.length==="mi"?"imperial":"metric"}function La(a,e){return String(Number(a.toFixed(e)))}function Ht(a,e=2){let t=a<0?"-":"",n=Math.round(Math.abs(a)/.0254*(e>=2?10:1))/(e>=2?10:1),i=Math.floor(n/12+1e-9),o=n-i*12,r=La(o,e>=2?1:0);return i?o<.05?`${t}${i}'`:`${t}${i}' ${r}"`:`${t}${r}"`}function Zo(a,e){let t=a.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,o=!1,r=!1,s=t;for(let l of t.matchAll(n)){let d=Number(l[1]);if(!Number.isFinite(d))return null;let c=l[2];o=!0,s=s.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(i+=d*.3048,r=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?i+=d*.0254:c==="mm"?i+=d/1e3:c==="cm"?i+=d/100:c==="m"?i+=d:i+=e==="imperial"?d*(r?.0254:.3048):d}return!o||/[^\s+]/.test(s)?null:i}function Wa(a,e,t){return e==="imperial"?Ht(a):`${t(a)} m`}function Oa(a,e,t){return e==="imperial"?`${La(a/(.3048*.3048),1)} ft\xB2`:`${t(a)} m\xB2`}function Vn(a,e){return e==="imperial"?a.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):a}var sc=.05,rc=.2,ac=.12;function lc(a){let e=[];return a.forEach((t,n)=>{let i=t.points;if(i.length<3)return;let o=me(i)>=0;for(let r=0;r<i.length;r++){let s=i[r],l=i[(r+1)%i.length],d=l[0]-s[0],c=l[1]-s[1],h=Math.hypot(d,c);if(h<.05)continue;let u=[d/h,c/h],p=o?[u[1],-u[0]]:[-u[1],u[0]];(u[1]<-1e-9||Math.abs(u[1])<=1e-9&&u[0]<0)&&(u=[-u[0],-u[1]]);let f=[-u[1],u[0]],m=s[0]*u[0]+s[1]*u[1],_=l[0]*u[0]+l[1]*u[1];e.push({room:n,index:r,dir:u,normal:f,offset:s[0]*f[0]+s[1]*f[1],outside:p[0]*f[0]+p[1]*f[1]>0?1:-1,t0:Math.min(m,_),t1:Math.max(m,_)})}}),e}function Ha(a,e=.6){let t=lc(a),n=t.map((c,h)=>h),i=c=>n[c]===c?c:n[c]=i(n[c]),o=[];for(let c=0;c<t.length;c++)for(let h=c+1;h<t.length;h++){let u=t[c],p=t[h];if(u.room===p.room||Math.abs(u.dir[0]*p.dir[1]-u.dir[1]*p.dir[0])>sc||u.outside===p.outside)continue;let f=(p.offset-u.offset)*u.outside;f>e||f<-ac||Math.abs(f)<1e-4||Math.min(u.t1,p.t1)-Math.max(u.t0,p.t0)<rc||(o.push(Math.round(f*1e3)/1e3),n[i(c)]=i(h))}if(!o.length)return{rooms:a.map(c=>({...c,points:c.points.map(h=>[h[0],h[1]])})),gaps:o};let r=new Map;t.forEach((c,h)=>{let u=i(h);if(u===h&&!t.some((f,m)=>m!==h&&i(m)===h))return;let p=r.get(u)??[];p.push(h),r.set(u,p)});let s=a.map(c=>c.points.map(()=>new Map));for(let[c,h]of r){let u=h.reduce((p,f)=>p+t[f].offset,0)/h.length;for(let p of h){let f=t[p],m=u-f.offset,_=[f.normal[0]*m,f.normal[1]*m],g=a[f.room].points.length;s[f.room][f.index].set(c,_),s[f.room][(f.index+1)%g].set(c,_)}}let l=c=>Math.round(c*1e3)/1e3;return{rooms:a.map((c,h)=>({...c,points:c.points.map((u,p)=>{let f=u[0],m=u[1];for(let[_,g]of s[h][p].values())f+=_,m+=g;return[l(f),l(m)]})})),gaps:o}}function Va(a){let e=a.filter(n=>n>.04).sort((n,i)=>n-i);if(!e.length)return null;let t=e[Math.floor(e.length/2)];return Math.min(.5,Math.max(.08,Math.round(t*100)/100))}function Ca(a,e=.05,t=.5){let n=a.map(o=>({...o,points:o.points.map(r=>[r[0],r[1]])})),i=0;for(let o=0;o<4;o++){let r=(l,d)=>n.reduce((c,h)=>c+h.points.filter(u=>Math.abs(u[l]-d)<1e-6).length,0),s=!1;for(let l of n)for(let d=0;d<l.points.length;d++){let c=l.points[d],h=l.points[(d+1)%l.points.length],u=Math.abs(h[0]-c[0]),p=Math.abs(h[1]-c[1]),f=p>1e-6&&p<=e&&u>=t?1:u>1e-6&&u<=e&&p>=t?0:null;if(f===null)continue;let[m,_]=r(f,c[f])>=r(f,h[f])?[c[f],h[f]]:[h[f],c[f]];for(let g of n)for(let v of g.points)Math.abs(v[f]-_)<1e-6&&(v[f]=m);i++,s=!0}if(!s)break}return{rooms:n,fixed:i}}var dc=.25,Wi=a=>Math.round(a*1e3)/1e3;function qo(a,e,t,n,i){let o=a.rooms.find(r=>r.points.length>=3&&K([e,t],r.points));return!o||K([n,i],o.points)?[n,i]:K([n,t],o.points)?[n,t]:K([e,i],o.points)?[e,i]:[e,t]}function St(a,e,t,n){let i=Math.hypot(n[0]-t[0],n[1]-t[1]);if(i<.01)return!1;let o=[(n[0]-t[0])/i,(n[1]-t[1])/i],r=l=>Math.abs(-(l[0]-t[0])*o[1]+(l[1]-t[1])*o[0]),s=l=>(l[0]-t[0])*o[0]+(l[1]-t[1])*o[1];return a.rooms.some(l=>l.id!==e&&l.points.some((d,c)=>{let h=l.points[(c+1)%l.points.length];return r(d)>.02||r(h)>.02?!1:Math.min(i,Math.max(s(d),s(h)))-Math.max(0,Math.min(s(d),s(h)))>.05}))}function Xo(a,e,t,n,i,o=.05){let r=a.rooms.find(u=>u.points.length>=3&&K([e.x,e.z],u.points));if(!r)return[t,n];let s=r.points,l=me(s)>=0?1:-1,d=Ee({...e}),c=t,h=n;for(let u=0;u<2;u++){let p=Ee({...e,x:c,z:h});for(let f=0;f<s.length;f++){let m=s[f],_=s[(f+1)%s.length],g=Math.hypot(_[0]-m[0],_[1]-m[1]);if(g<.05)continue;let v=[(_[0]-m[0])/g,(_[1]-m[1])/g],w=[-v[1]*l,v[0]*l],$=St(a,r.id,m,_)?i/2:0,k=0;p.forEach((x,z)=>{let S=(x[0]-m[0])*v[0]+(x[1]-m[1])*v[1];if(S<-.01||S>g+.01)return;let A=(x[0]-m[0])*w[0]+(x[1]-m[1])*w[1]-$,P=d[z];(P[0]-m[0])*w[0]+(P[1]-m[1])*w[1]-$<-o||A<k&&(k=A)}),k<-1e-4&&(c-=w[0]*k,h-=w[1]*k)}}return[Wi(c),Wi(h)]}function Cn(a,e,t,n=dc){let i=a.rooms.find(d=>d.points.length>=3&&K([e.x,e.z],d.points));if(!i)return null;let o=i.points,r=me(o)>=0?1:-1,s=t/2,l=null;for(let d=0;d<o.length;d++){let c=o[d],h=o[(d+1)%o.length],u=Math.hypot(h[0]-c[0],h[1]-c[1]);if(u<.3)continue;let p=[(h[0]-c[0])/u,(h[1]-c[1])/u],f=[-p[1]*r,p[0]*r],m=(e.x-c[0])*p[0]+(e.z-c[1])*p[1];if(m<0||m>u)continue;let g=a.rooms.some(S=>S.id!==i.id&&S.points.some((A,P)=>{let F=S.points[(P+1)%S.points.length],T=Math.abs((A[0]-c[0])*f[0]+(A[1]-c[1])*f[1]),O=Math.abs((F[0]-c[0])*f[0]+(F[1]-c[1])*f[1]);return T<.02&&O<.02}))?s:0,v=(e.x-c[0])*f[0]+(e.z-c[1])*f[1]-g,w=Math.atan2(-f[0],f[1])*180/Math.PI,$=S=>Math.abs((e.rotation-S+540)%360-180),x=[{rotation:w,extent:e.d/2},{rotation:w+90,extent:e.w/2},{rotation:w-90,extent:e.w/2}].reduce((S,A)=>$(A.rotation)<$(S.rotation)?A:S);if($(x.rotation)>50)continue;let z=v-x.extent;Math.abs(z)>n||l&&Math.abs(z)>=Math.abs(l.gap)||(l={x:Wi(e.x-f[0]*z),z:Wi(e.z-f[1]*z),rotation:(Math.round(x.rotation)%360+360)%360,gap:z})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function cn(a,e){let t=a.points,n=t[e],i=t[(e+1)%t.length],o=Math.hypot(i[0]-n[0],i[1]-n[1])||1,r=[(i[0]-n[0])/o,(i[1]-n[1])/o],s=[-r[1],r[0]],l=[(n[0]+i[0])/2,(n[1]+i[1])/2];K([l[0]+s[0]*.02,l[1]+s[1]*.02],t)||(s=[-s[0],-s[1]]);let d=[s[1],-s[0]];return{a:n,b:i,u:r,n:s,length:o,rightward:r[0]*d[0]+r[1]*d[1]>0}}function le(a,e){let t=e[0]-a.a[0],n=e[1]-a.a[1];return{s:t*a.u[0]+n*a.u[1],d:t*a.n[0]+n*a.n[1]}}function ft(a,e,t){return[a.a[0]+a.u[0]*e+a.n[0]*t,a.a[1]+a.u[1]*e+a.n[1]*t]}var cc=.45;function Oi(a,e,t){let n=[];for(let i of e.openings){if(i.wall)continue;let o=e.rooms.find(c=>c.id===i.room_id);if(!o||i.edge>=o.points.length)continue;let{s:r,d:s}=le(a,$t(o,i.edge,i.offset));if(Math.abs(s)>.4||r<-.05||r>a.length+.05)continue;let l=hc(i,r),d=_e(e,o)-_e(e,t);l.y0+=d,l.y1+=d,n.push(l)}return n}function hc(a,e){return{kind:"opening",id:a.id,s0:e-a.width/2,s1:e+a.width/2,y0:a.sill,y1:a.sill+a.height,d:0}}function hn(a,e,t,n=cc){let i=[];for(let o of e.furniture){if(o.type==="stairwell"||o.type==="parking")continue;let r=K([o.x,o.z],t.points),s=Ee(o).map(m=>le(a,m)),l=Math.min(...s.map(m=>m.d)),d=Math.min(...s.map(m=>m.s)),c=Math.max(...s.map(m=>m.s)),h=le(a,[o.x,o.z]);if(!r&&h.d<=0||h.d<=0||l>n||l<-.3||c<.02||d>a.length-.02)continue;let u=ze(e,o)-_e(e,t),[p,f]=Lt(o);i.push({kind:"furniture",id:o.id,s0:d,s1:c,y0:u+p,y1:u+f,d:l})}return i}function Hi(a,e,t){let n=i=>Math.round(i*1e3)/1e3;return{x:n(e.x+a.u[0]*t),z:n(e.z+a.u[1]*t)}}var Jo=.3;function Oe(a,e){let t=a.from?e(a.from):null,n=a.to?e(a.to):null,i=a.height??Jo,o=[];if(a.heights)t&&o.push([t.x,t.y,t.z]),a.points.forEach(([r,s],l)=>o.push([r,a.heights?.[l]??i,s])),n&&o.push([n.x,n.y,n.z]);else{if(!t||!n)return[];o.push([t.x,t.y,t.z],[t.x,i,t.z]);for(let[r,s]of a.points)o.push([r,i,s]);o.push([n.x,i,n.z],[n.x,n.y,n.z])}return o.filter((r,s)=>s===0||Vi(r,o[s-1])>.001)}function Vi(a,e){return Math.hypot(e[0]-a[0],e[1]-a[1],e[2]-a[2])}function Yo(a){let e=0;for(let t=1;t<a.length;t++)e+=Vi(a[t-1],a[t]);return e}function Ba(a,e){if(a.length<2)return null;let t=Math.max(0,e);for(let n=1;n<a.length;n++){let[i,o]=[a[n-1],a[n]],r=Vi(i,o);if(!(r<1e-6)){if(t<=r||n===a.length-1){let s=Math.min(1,t/r),l=[(o[0]-i[0])/r,(o[1]-i[1])/r,(o[2]-i[2])/r];return{p:[i[0]+(o[0]-i[0])*s,i[1]+(o[1]-i[1])*s,i[2]+(o[2]-i[2])*s],dir:l,seg:n-1}}t-=r}}return null}function un(a,e){let t=null,n=0;for(let i=1;i<a.length;i++){let[o,r]=[a[i-1],a[i]],s=[r[0]-o[0],r[1]-o[1],r[2]-o[2]],l=s[0]*s[0]+s[1]*s[1]+s[2]*s[2],d=l>0?Math.max(0,Math.min(1,((e[0]-o[0])*s[0]+(e[1]-o[1])*s[1]+(e[2]-o[2])*s[2])/l)):0,c=[o[0]+s[0]*d,o[1]+s[1]*d,o[2]+s[2]*d],h=Vi(c,e);(!t||h<t.d)&&(t={at:n+Math.sqrt(l)*d,d:h,seg:i-1,p:c}),n+=Math.sqrt(l)}return t}function mt(a,e,t,n){let[i,o]=ft(a,e,n);return[i,t,o]}function Na(a,e,t,n){let i=ft(a,0,e),o=ft(t,0,n),r=a.u[0]*-t.u[1]-a.u[1]*-t.u[0];if(Math.abs(r)<1e-6)return null;let s=o[0]-i[0],l=o[1]-i[1],d=(s*-t.u[1]-l*-t.u[0])/r;return[i[0]+a.u[0]*d,i[1]+a.u[1]*d]}var Ka=["top6","side6","four"];function Je(a){return a==="pool_pump"?["suction","pressure"]:a==="pool_filter"?["pump","return","waste"]:a==="pool_heat_pump"?["in","out"]:[]}function pn(a){return a==="wall"||a==="floor"?["inside","outside"]:["in","out1","out2"]}function ee(a){let[e="",t="",n]=a.split(":");return{kind:e,id:t,port:n||null}}function pe(a){let{kind:e,id:t}=ee(a);return e&&t?`${e}:${t}`:a}function uc(a,e){let{w:t,d:n,h:i}=a;if(a.type==="pool_pump")return e==="suction"?[t*.5,i*.55,0]:e==="pressure"?[t*.05,i*.9,0]:null;if(a.type==="pool_filter"){let o=Math.min(t,n)/2;if(a.variant==="side6"){let l=o+.08;return e==="pump"?[l,i*.6,0]:e==="return"?[l+.06,i*.48,0]:e==="waste"?[l,i*.36,0]:null}let r=i*.89,s=o*.45+.04;return e==="pump"?[-s,r,0]:e==="return"?[s,r,0]:e==="waste"?[0,r,-s]:null}if(a.type==="pool_heat_pump"){let o=a.variant==="left"||a.variant==="back"?a.variant:"right";if(e!=="in"&&e!=="out")return null;let r=e==="in"?i*.25:i*.45;return o==="back"?[e==="in"?-t*.15:t*.15,r,-n/2-.04]:[(o==="left"?-1:1)*(t/2+.04),r,-n*.2]}return null}function ja(a,e){let t=uc(a,e);if(!t)return null;let n=a.rotation*Math.PI/180,[i,o]=[Math.cos(n),Math.sin(n)];return{x:a.x+t[0]*i-t[2]*o,y:t[1],z:a.z+t[0]*o+t[2]*i}}function fn(a,e){if(e==="outside"){if(a.kind==="floor")return{x:a.x,y:a.y-.3,z:a.z};if(a.kind==="wall"){let t=(a.depth??.3)+.05;return{x:a.x-(a.nx??0)*t,y:a.y,z:a.z-(a.nz??0)*t}}}return{x:a.x,y:a.y,z:a.z}}function Bn(a){return a==="pressure"||a==="return"||a==="waste"||a==="out"?"source":a==="suction"||a==="pump"||a==="in"?"sink":null}function Nn(a){return a==="skimmer"||a==="drain"?"source":"sink"}function re(a,e,t){let n=t.pool??{},i=zo(e,t);return o=>{let{kind:r,id:s,port:l}=ee(o);if(r==="port"){let d=n.ports?.find(h=>h.id===s);if(!d)return null;let c=d.kind==="skimmer"?i-(d.depth??0):d.kind==="drain"?Xr(e,t)+.03:d.kind==="inlet"?i-(d.depth??.3):.02;return{x:d.x,z:d.z,y:c}}if(r==="joint"){let d=n.joints?.find(c=>c.id===s);return d?fn(d,l):null}if(r!=="dev")return null;for(let d of a.floors){let c=d.furniture.find(f=>f.id===s);if(!c||!ke.includes(c.type))continue;let h=l?ja(c,l):null,u=d.elevation-e.elevation;if(h)return{...h,y:h.y+ze(d,c)+u};let p=c.type==="pool_filter"?c.h*.88:c.type==="pool_dosing"?.95:c.type==="pool_valve"?ia:c.type==="pool_pump"?.2:.3;return{x:c.x,z:c.z,y:p+ze(d,c)+u}}return null}}function He(a,e){if(a.heights)return a;let t=a.height??Jo,n=e(a.from),i=e(a.to),o=[...n?[[n.x,n.z]]:[],...a.points,...i?[[i.x,i.z]]:[]];return{...a,points:o,heights:o.map(()=>t)}}var de=a=>Math.round(a*1e3)/1e3;function Qo(a,e,t,n,i){let o=He(a,e),r=Oe(o,e),s=un(r,t);if(!s)return null;let l={id:n,x:de(s.p[0]),z:de(s.p[2]),y:de(s.p[1])},d=Kn(o,e),c=Math.max(0,Math.min(o.points.length,s.seg+1-d)),h=o.heights??[],u=o.fittings??[],p={...o,to:`joint:${n}:in`,points:o.points.slice(0,c),heights:h.slice(0,c),fittings:u.filter(m=>m.at<=s.at)},f={...o,id:i,from:`joint:${n}:out1`,points:o.points.slice(c),heights:h.slice(c),fittings:u.filter(m=>m.at>s.at).map(m=>({...m,at:de(m.at-s.at)}))};return{joint:l,first:p,second:f}}function Kn(a,e){return a.from&&e(a.from)?1:0}var pc=1.6;function Ua(a,e,t){let n=[],i=o=>{let r=le(a,[o[0],o[2]]);return r.d>-.35&&r.d<pc&&r.s>-.3&&r.s<a.length+.3?r:null};for(let o of e){let r=He(o,t),s=Oe(r,t);if(s.length<2)continue;let l={id:o.id,pieces:[],points:[],fittings:[],ends:[]};for(let h=1;h<s.length;h++){let u=i(s[h-1]),p=i(s[h]);u&&p&&l.pieces.push({k:h-1,s0:u.s,y0:s[h-1][1],d0:u.d,s1:p.s,y1:s[h][1],d1:p.d})}if(!l.pieces.length)continue;let d=Kn(r,t);r.points.forEach((h,u)=>{let p=s[u+d],f=p&&i(p);f&&l.points.push({i:u,s:f.s,y:p[1]})});let c=Yo(s);for(let h of o.fittings??[]){let u=Math.min(c,h.at),p=Ba(s,u)?.p,f=p&&i(p);p&&f&&l.fittings.push({id:h.id,kind:h.kind,open:h.open!==!1,s:f.s,y:p[1]})}for(let[h,u]of[["from",s[0]],["to",s[s.length-1]]]){let p=(h==="from"?!o.from:!o.to)?i(u):null;p&&l.ends.push({end:h,s:p.s,y:u[1]})}n.push(l)}return n}var Za=-.3;function Ci(a,e,t,n,i){let o=[],r=[],s=_=>e(_),l=[],d=a.from,c=[];for(let _ of a.vias){if(_.kind!=="hole"){c.push(_.kind);continue}let g=t.find(x=>x.id===_.joint),v=s(d);if(!g||!v)continue;let w=s(`joint:${g.id}:inside`),$=s(`joint:${g.id}:outside`),k=_.dir?_.dir==="out":Math.hypot(v.x-w.x,v.z-w.z)<=Math.hypot(v.x-$.x,v.z-$.z);l.push({a:d,b:`joint:${g.id}:${k?"inside":"outside"}`,fits:c}),c=[],d=`joint:${g.id}:${k?"outside":"inside"}`}let h=a.to;if(h.length>1){let _=s(d),g=h.map(s).filter(v=>!!v);if(_&&g.length===h.length){let v=g.reduce((S,A)=>S+A.x,0)/g.length,w=g.reduce((S,A)=>S+A.z,0)/g.length,$=Math.hypot(_.x-v,_.z-w)||1,k=Math.min(1,$/2)/$,x=_.y<0||g.some(S=>S.y<0),z={id:i("joint"),kind:"tee",x:de(v+(_.x-v)*k),z:de(w+(_.z-w)*k),y:x?Za:de(_.y)};r.push(z),l.push({a:d,b:`joint:${z.id}:in`,fits:c}),c=[],h.forEach((S,A)=>l.push({a:`joint:${z.id}:out${A+1}`,b:S,fits:[]})),h=[]}}h.length&&l.push({a:d,b:h[0],fits:c});let u=_=>{let{kind:g,id:v,port:w}=ee(_),$=g==="joint"?r.find(k=>k.id===v):void 0;return $?fn($,w):s(_)},p=_=>n(_)==="source",f=_=>n(_)==="sink",m=a.to.some(p)&&!p(a.from)||f(a.from)&&!a.to.some(f);for(let _ of l){let g=u(_.a),v=u(_.b);if(!g||!v)continue;let w=fc(g,v,Ga(_.a,t),Ga(_.b,t)),$={id:i("pipe"),from:_.a,to:_.b,floor_id:a.floorId,points:w.map(x=>[x[0],x[2]]),heights:w.map(x=>x[1])},k=Yo(Oe($,u));$.fittings=_.fits.map((x,z)=>({id:i("fit"),kind:x,at:de(Math.min(k/2,.4+z*.25)),...x==="valve"?{open:!0}:{}})),m&&($={...$,from:$.to,to:$.from,points:[...$.points].reverse(),heights:[...$.heights??[]].reverse(),fittings:$.fittings?.map(x=>({...x,at:de(Math.max(0,k-x.at))}))}),o.push($)}return{pipes:o,joints:r}}function Ga(a,e){let{kind:t,id:n,port:i}=ee(a),o=t==="joint"&&i==="outside"?e.find(r=>r.id===n):void 0;return o?.kind==="wall"?[-(o.nx??0),-(o.nz??0)]:null}function fc(a,e,t=null,n=null){let i=a.y<0||e.y<0?Za:de(Math.max(a.y,e.y)),o=[],[r,s]=[a.x,a.z];t&&([r,s]=[de(r+t[0]*.5),de(s+t[1]*.5)],o.push([r,de(a.y),s]));let[l,d]=[e.x,e.z],c=[];return n&&([l,d]=[de(l+n[0]*.5),de(d+n[1]*.5)],c.push([l,de(e.y),d])),o.push([de(r),i,de(s)]),Math.abs(l-r)>.01&&o.push([de(l),i,de(s)]),Math.abs(d-s)>.01&&o.push([de(l),i,de(d)]),o.push(...c),o.filter((h,u)=>u===0||Math.hypot(h[0]-o[u-1][0],h[1]-o[u-1][1],h[2]-o[u-1][2])>.001)}function qa(a,e,t){let n=o=>{let{kind:r,id:s,port:l}=ee(o),d=r==="joint"&&(l==="inside"||l==="outside")?e.find(c=>c.id===s):void 0;return d&&(d.kind==="wall"||d.kind==="floor")?{id:s,port:l}:null},i=[];for(let o of a.filter(r=>r.from===t||r.to===t)){let r={start:t,other:"",pipes:[],holes:[],fittings:[]},s=o,l=t,d=new Set;for(;s&&!d.has(s.id);){d.add(s.id),r.pipes.push(s.id),r.fittings.push(...(s.fittings??[]).map(p=>p.kind));let c=s.from===l?s.to:s.from,h=c?n(c):null;if(!h){r.other=c;break}r.holes.push({joint:h.id,dir:h.port==="inside"?"out":"in"}),l=`joint:${h.id}:${h.port==="inside"?"outside":"inside"}`;let u=s;s=a.find(p=>p!==u&&(p.from===l||p.to===l)),s||(r.other=l)}i.push(r)}return i}function jn(a,e,t){let n=e.pool??{},i=n.pipes??[],{kind:o,id:r,port:s}=ee(a);if(o==="port"){let c=n.ports?.find(h=>h.id===r);return c?Nn(c.kind):null}if(o==="dev")return s?Bn(s):null;if(o!=="joint")return null;let l=n.joints?.find(c=>c.id===r);if(!l)return null;if(l.kind==="wall"||l.kind==="floor"){let c=`joint:${r}:${s==="outside"?"inside":"outside"}`,h=i.find(p=>p.from===c||p.to===c);if(h)return h.to===c?"source":"sink";let u=mc(i,n.joints??[],c);return u?jn(u,e,t):null}let d=`joint:${r}`;return _c(d,i,t)?"sink":i.some(c=>pe(c.to)===d)?"source":null}function mc(a,e,t){let n=t,i=new Set;for(;;){let o=a.find(h=>!i.has(h.id)&&(h.from===n||h.to===n));if(!o)return"";i.add(o.id);let r=o.from===n?o.to:o.from,{kind:s,id:l,port:d}=ee(r),c=s==="joint"?e.find(h=>h.id===l):void 0;if(c&&(c.kind==="wall"||c.kind==="floor")&&(d==="inside"||d==="outside")){n=`joint:${l}:${d==="inside"?"outside":"inside"}`;continue}return r}}function _c(a,e,t){let n=new Set(t.filter(r=>r.type==="pool_pump").map(r=>`dev:${r.id}`)),i=new Set,o=r=>n.has(r)?!0:i.has(r)?!1:(i.add(r),e.filter(s=>pe(s.from)===r).some(s=>o(pe(s.to))));return e.filter(r=>pe(r.from)===a).some(r=>o(pe(r.to)))}function Xa(a,e,t,n=[]){if(!Je(a).length)return null;let o=e==="source",r=a==="pool_pump"?o?["suction","pressure"]:["pressure","suction"]:a==="pool_filter"?o?["pump","return","waste"]:t?["waste","return","pump"]:["return","waste","pump"]:o?["in","out"]:["out","in"],s=r.filter(l=>Bn(l)===(o?"sink":"source"));return s.find(l=>!n.includes(l))??s[0]??r[0]}function Ja(a,e,t){return(e==="sink"||t==="source")&&e!=="source"&&t!=="sink"?{...a,from:a.to,to:a.from,points:[...a.points].reverse(),heights:a.heights?[...a.heights].reverse():a.heights}:a}function es(a,e){let t=a.pool??{},n=t.pipes??[],i=[];for(let r of n)r.from||i.push({kind:"loose",node:r.id}),r.to||i.push({kind:"loose",node:r.id});let o=new Set(n.flatMap(r=>[r.from,r.to]));for(let r of e){if(!["pool_pump","pool_filter","pool_heat_pump"].includes(r.type))continue;let s=Je(r.type).filter(d=>!(r.type==="pool_filter"&&d==="waste"&&!(t.ports??[]).some(c=>c.kind==="waste"))),l=[...o].some(d=>pe(d)===`dev:${r.id}`);if(!(r.type==="pool_heat_pump"&&!l))for(let d of s)!o.has(`dev:${r.id}:${d}`)&&!o.has(`dev:${r.id}`)&&i.push({kind:"port",node:`dev:${r.id}:${d}`})}for(let r of["skimmer","drain","inlet"])(t.ports??[]).filter(l=>l.kind===r).some(l=>!o.has(`port:${l.id}`))&&i.push({kind:"feed",node:r});return i}function ts(a,e){let t=a.pool??{},n=(t.ports??[]).filter(o=>o.kind===e),i=new Set((t.pipes??[]).flatMap(o=>[o.from,o.to]));return n.length>0&&n.every(o=>i.has(`port:${o.id}`))}function gc(a,e,t){let n=t[0]-e[0],i=t[1]-e[1],o=n*n+i*i,r=o?Math.max(0,Math.min(1,((a[0]-e[0])*n+(a[1]-e[1])*i)/o)):0;return Math.hypot(a[0]-e[0]-n*r,a[1]-e[1]-i*r)}function Ya(a,e,t=.03){return a.every(n=>K(n,e)||e.some((i,o)=>gc(n,i,e[(o+1)%e.length])<=t))}function Qa(a,e){return e&&a.states[e]?e:Object.keys(a.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function el(a,e){let t=a.states[e];if(!t)return!1;let n=String(t.attributes.device_class??"");return e.startsWith("binary_sensor.")?n==="moisture"||/(rain|regen|pluie|lluvia|pioggia)/.test(e):e.startsWith("sensor.")?n==="precipitation_intensity"||/\/h$/.test(String(t.attributes.unit_of_measurement??"")):!1}var ns=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool"],is=["fun_pets"],os=["pool","diagnostics"];function ss(){try{return localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function Ke(a){return!os.includes(a)||a!=="diagnostics"&&fe(a)||ss()}var bc=["fridge_smart"];function rs(a){return ns.includes(a)||bc.includes(a)||is.includes(a)}var tl=a=>(a??navigator.language).toLowerCase().startsWith("de");function Ye(a){return tl(a)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var vc={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},time_travel:{de:"pro-erweiterungen/#67-zeitreise",en:"pro-add-ons/#67-time-travel"},pool:{de:"pro-erweiterungen/#68-pool-pro",en:"pro-add-ons/#68-pool-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Vt(a,e){let t=tl(a),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",i=e?vc[e]:void 0,o=i?t?i.de:i.en:"",[r,s]=o.split("#");return`${n}${r}?lang=${t?"de":"en"}${s?`#${s}`:""}`}function as(a=Ar()){let e=new Set;for(let t of a)for(let n of t.features??[])rs(n)&&e.add(n);return e}function fe(a,e){return as(e).has(a)}var wc=["pool"];function Mt(a){return wc.includes(a)}var ls="https://discord.gg/SSdVVFsev7";function Bi(a){return(a??navigator.language).toLowerCase().startsWith("de")?"https://mastershort.de/neonplan3d/unterstuetzer/?lang=de":"https://mastershort.de/en/neonplan3d/supporters/?lang=en"}var kc=/(pool|schwimm|piscine|piscina|zwembad|basen|bazen)/;function nl(a,e){let t=e??{},n=Object.keys(a.states),i=h=>`${h} ${a.states[h]?.attributes.friendly_name??""}`.toLowerCase().replace(/[\s-]+/g,"_"),o=h=>String(a.states[h]?.attributes.device_class??""),r=h=>String(a.states[h]?.attributes.unit_of_measurement??""),s=n.filter(h=>kc.test(i(h))),l=(h,u)=>h.find(u)??null,d=(h,u)=>{let p=t[h];return p==="none"?null:p??u()},c=h=>h.split(".")[0];return{temperature:d("temperature",()=>l(s,h=>c(h)==="sensor"&&(o(h)==="temperature"||/°[CF]/.test(r(h)))&&/(wasser|water|eau|agua|acqua)/.test(i(h)))??l(s,h=>c(h)==="sensor"&&(o(h)==="temperature"||/°[CF]/.test(r(h))))),heater:d("heater",()=>l(s,h=>c(h)==="climate"||c(h)==="water_heater")??l(s,h=>/^(switch|input_boolean)$/.test(c(h))&&/(w(ae|ä)rmepumpe|heat|heiz|chauff)/.test(i(h)))),pump:d("pump",()=>l(s,h=>/^(switch|fan|input_boolean)$/.test(c(h))&&/(pump|pumpe|filter|pompe|bomba)/.test(i(h)))??l(s,h=>c(h)==="binary_sensor"&&/(pump|pumpe|filter)/.test(i(h)))),light:d("light",()=>l(s,h=>c(h)==="light")),ph:d("ph",()=>{let h=u=>c(u)==="sensor"&&(o(u)==="ph"||r(u).toLowerCase()==="ph"||/(^|[._])ph($|_)/.test(i(u)));return l(s,h)??l(n,h)}),chlorine:d("chlorine",()=>l(s,u=>c(u)==="sensor"&&(/(orp|redox|chlor|chlore|cloro)/.test(i(u))||r(u)==="mV"))??l(n,u=>c(u)==="sensor"&&/(orp|redox|chlor)/.test(i(u)))),cover:d("cover",()=>l(s,h=>c(h)==="cover"))}}var il=new Set(["skimmer","drain"]),ds=new Set(["backwash","rinse","waste"]),ol=a=>`port:${a}`,sl=a=>`dev:${a}`,cs=a=>!!a.fittings?.some(e=>e.kind==="valve"&&e.open===!1);function rl(a){let e=new Map(a.pipes.map(w=>[w.id,{active:!1,warm:!1,waste:!1}]));if(!a.pumpOn)return e;let t=new Map(a.pipes.map(w=>[w.id,ee(w.from).port])),n=a.pipes.map(w=>({...w,from:w.from?pe(w.from):`loose:${w.id}:a`,to:w.to?pe(w.to):`loose:${w.id}:b`})),i=new Map(a.devices.map(w=>[sl(w.id),w])),o=new Map(a.ports.map(w=>[ol(w.id),w])),r=w=>{let $=i.get(w);return!!$&&$.type==="pool_valve"&&$.open===!1},s=new Map,l=new Map;for(let w of n)s.set(w.from,[...s.get(w.from)??[],w]),l.set(w.to,[...l.get(w.to)??[],w]);let d=w=>o.get(w)?.kind==="waste",c=w=>i.get(w)?.type==="pool_heat_pump",h=new Map,u=(w,$=new Set)=>{let k=h.get(w.id);if(k)return k;if($.has(w.id))return{heat:!1,waste:!1};$.add(w.id);let x=c(w.to),z=d(w.to);if(!x||!z)for(let A of s.get(w.to)??[]){let P=u(A,$);x||=P.heat,z||=P.waste}let S={heat:x,waste:z};return h.set(w.id,S),S},p=a.devices.filter(w=>w.type==="pool_pump").map(w=>sl(w.id)),f=p.length?p:a.ports.filter(w=>il.has(w.kind)).map(w=>ol(w.id)),m=new Set,_=(w,$,k)=>{let x=`${w}|${$}|${k}`;if(m.has(x)||(m.add(x),r(w)))return;let z=s.get(w)??[],S=i.get(w);if(S?.type==="pool_filter"){let A=S.valve??"filter";if(A==="closed")return;let P=ds.has(A)?"waste":"return";z=z.filter(F=>{let T=t.get(F.id);return T?T===P:u(F).waste===ds.has(A)}),ds.has(A)&&(k=!0)}else if(z.length>1){z=z.filter(F=>!r(F.to)&&!cs(F));let A=z.filter(F=>u(F).heat),P=z.filter(F=>!u(F).heat);A.length&&P.length&&(z=a.heaterOn?A:P)}S?.type==="pool_heat_pump"&&a.heating&&($=!0);for(let A of z){if(r(A.to)||cs(A))continue;let P=e.get(A.id);P.active=!0,P.warm||=$,P.waste||=k,_(A.to,$,k)}},g=new Set,v=w=>{for(let $ of l.get(w)??[])g.has($.id)||r($.from)||cs($)||(g.add($.id),v($.from))};if(p.length){for(let $ of p)v($);let w=($,k=new Set)=>k.has($.id)?!1:(k.add($.id),il.has(o.get($.from)?.kind??"")?!0:(l.get($.from)??[]).some(x=>g.has(x.id)&&w(x,k)));for(let $ of g){let k=n.find(x=>x.id===$);w(k)&&(e.get($).active=!0)}}for(let w of f)_(w,!1,!1);return e}var $c=[.25,.7,1],xc=[1,.45,.18],Sc=[.75,.6,.35];function al(a){return a?.waste?Sc:a?.warm?xc:$c}function Ni(a,e){let t=a[0]??e,n=1/0;for(let i=0;i<a.length;i++){let o=a[i],r=a[(i+1)%a.length],s=r[0]-o[0],l=r[1]-o[1],d=s*s+l*l,c=d>0?Math.max(0,Math.min(1,((e[0]-o[0])*s+(e[1]-o[1])*l)/d)):0,h=[o[0]+s*c,o[1]+l*c],u=Math.hypot(h[0]-e[0],h[1]-e[1]);u<n&&([t,n]=[h,u])}return t}var ll={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",phone_hint:"Zeichnen geht am besten am PC oder Tablet \u2013 auf dem Handy kannst du ansehen und bedienen.",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",room_id:"ID (Karten-Option room:)",room_openings:"T\xFCren und Fenster",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",room_inherit_heights:"Etagenh\xF6hen \xFCbernehmen",room_wall_offset:"Wandbeginn \xFCber Etagenboden (m)",room_floor_offset:"Raumboden \xFCber Wandbeginn (m)",room_levels_hint:"Wandbeginn z\xE4hlt ab dem Etagenboden. Der zus\xE4tzliche Bodenversatz hebt den fertigen Raumboden an; die Deckenh\xF6he z\xE4hlt ab diesem Boden.",steps_offset:"Stufenversatz (m)",steps_offset_hint:"0: Beginn an der Wandfl\xE4che. Positiv: weiter in den gew\xE4hlten Raum, mit ebener Anschlussfl\xE4che. Negativ: in Richtung Durchbruch.",steps_title:"Stufen am Durchbruch",steps_side:"Stufen in diesem Raum",steps_none:"Ohne Stufen",steps_lower:"tiefer gelegen",steps_higher:"h\xF6her gelegen",steps_equal:"gleiches Niveau",steps_count:"Anzahl Stufen",steps_depth:"Gesamttiefe (m)",steps_hint:"Die Breite folgt dem Durchbruch. Im h\xF6heren Raum wird die Bodenfl\xE4che f\xFCr die abw\xE4rts f\xFChrenden Stufen ausgespart.",steps_fit_warning:"Der Stufenlauf passt mit dieser Tiefe und diesem Versatz nicht in die verbundenen R\xE4ume. Tiefe, Versatz oder Raumseite \xE4ndern.",steps_height_warning:"F\xFCr den Durchbruch fehlt gemeinsame H\xF6he. Raumh\xF6he erh\xF6hen oder Bodenh\xF6he anpassen.",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",tech_open:"Technikraum zeichnen",tech_open_hint:"Danach auf die Wand im Plan tippen, an der deine Anlage h\xE4ngt.",tech_step:"Schritt {n}",tech_step_feed:"Tippe links auf \u201E{name}\u201C und dann auf die Stelle an der Wand, wo die Leitung hereinkommt (ganz unten: aus dem Boden).",tech_step_devices:"Tippe links auf Filterpumpe und Sandfilter \u2013 sie stellen sich an die Wand. W\xE4rmepumpe und Dosieranlage, wenn du sie hast.",tech_step_line:"Zieh eine Linie: von \u201E{a}\u201C zu \u201E{b}\u201C. Einfach auf das eine dr\xFCcken und zum anderen ziehen.",tech_step_loose:"Ein Rohr endet noch lose \u2013 zieh es weiter zu einem Ger\xE4t oder einer Leitung, oder l\xF6sche es (\u270B Ausw\xE4hlen).",tech_step_drawing:"Zieh weiter oder tippe Punkt f\xFCr Punkt \u2013 auf einem Ger\xE4t, einer Leitung oder einem Rohr endet die Linie.",tech_step_fit:"Tippe auf das Rohr, in das der Hahn (das Sichtglas) soll \u2013 es leuchtet orange auf.",tech_mode:"Pooltechnik",tech_mode_hint:"Den Technikraum auf dieser Wand zeichnen: Leitungen vom Pool hereinf\xFChren, Ger\xE4te hinstellen, Rohre ziehen",tech_draw:"Zeichnen",tech_pick:"Ausw\xE4hlen",pool_delete_confirm:"Den Pool mit allen {n} Rohren l\xF6schen?",tech_erase:"Radieren",tech_erase_hint:"Tippe auf ein Rohr, einen Kugelhahn, ein Sichtglas oder ein Loch \u2013 es wird gel\xF6scht. Verzeichnet? R\xFCckg\xE4ngig hilft auch.",tech_feeds:"Leitungen vom Pool",tech_devices:"Ger\xE4te",tech_fittings:"Armaturen",tech_hint:"Linie ziehen: auf ein Ger\xE4t, eine Leitung oder ein Rohr tippen und zum n\xE4chsten ziehen (oder Punkt f\xFCr Punkt tippen). Auf ein Rohr gezogen entsteht ein T-St\xFCck. Die Richtung des Wassers und den Anschluss am Ger\xE4t erkennt NeonPlan selbst.",tech_no_ports:"Setz zuerst mit dem Pool-Werkzeug Skimmer, Bodenablauf und Einl\xE4ufe an den Pool.",tech_ok:"Alles verbunden \u2013 das Wasser flie\xDFt.",tech_issue_loose:"{n} lose Rohrenden",tech_issue_port:"{name} nicht verbunden",tech_issue_feed:"{name} noch nicht hereingef\xFChrt",tech_feed_place:"Tipp auf die Stelle, wo die Leitung in den Raum kommt \u2013 ganz unten: aus dem Boden, h\xF6her: durch die Wand.",tech_start:"Auf ein Ger\xE4t oder eine Leitung tippen und eine Linie ziehen.",feed_skimmer:"Skimmer",feed_drain:"Bodenablauf",feed_inlet:"Einl\xE4ufe",feed_waste:"Kanal (R\xFCcksp\xFClen)",hp_ports:"Anschl\xFCsse",hp_side_right:"rechts",hp_side_left:"links",hp_side_back:"hinten",pool_depth:"Beckentiefe (m)",pool_rim:"Rand \xFCber dem Rasen (m)",pool_depth_hint:"Beckentiefe: vom Rand bis zum Boden. Ein 1,50 m tiefer Pool, der 20 cm aus dem Rasen schaut: Tiefe 1,50, Rand 0,20. Das Wasser steht 15 cm unter dem Rand.",pool_depth_ground:"Die Tiefe zeigt sich in 3D, sobald der Pool in einer Rasen-, Terrassen- oder anderen Fl\xE4che liegt \u2013 ohne Boden drumherum w\xE4re das Becken von au\xDFen zu sehen.",pool_port_depth:"Tiefe",pool_port_depth_hint:"Wie tief unter der Wasserlinie (m): Einl\xE4ufe meist 0,30, der Skimmer an der Wasserlinie",pool_valves:"Kugelh\xE4hne",pool_valve_shut:"zu",pool_valve_toggle:"Tippen stellt um \u2013 so, wie der Hahn wirklich steht",pool_joint:"Verbindung",block_some_fixed:"\u{1F512} Ein Teil davon ist fixiert \u2013 der Block l\xE4sst sich erst verschieben, wenn alle gel\xF6st sind.",unfix_all:"Alle l\xF6sen",wv_block_all:"Ganzer Block",wv_block_one:"Nur dieses Teil",wv_gap:"L\xFCcke: {w} \u2013 das passt hinein:",wv_gap_hint:"Tipp auf eine freie Stelle an der Wand: Hier erscheint, was hineinpasst.",wv_kit_title:"An die Wand",wv_recent:"Zuletzt benutzt",wv_none_fits:"Nichts passt in diese L\xFCcke.",wv_cat_base:"Unterschr\xE4nke & Boards",wv_cat_hang:"H\xE4ngend",wv_cat_tall:"Hochschr\xE4nke",wv_cat_living:"Sitzen & Liegen",wv_cat_light:"Leuchten",wv_cat_pack:"Aus deinen Packs",wv_cat_energy:"Energie",block_title:"M\xF6bel-Block",multi_title:"{n} M\xF6bel ausgew\xE4hlt",block_hint:"Ein Klick w\xE4hlt den ganzen Block, Ziehen verschiebt ihn. Ein einzelnes Teil: doppelt antippen oder unten seinen Namen w\xE4hlen.",multi_hint:"Umschalt + Klick nimmt M\xF6bel dazu oder heraus, Umschalt + Ziehen \xFCber freie Fl\xE4che zieht einen Rahmen. Zusammen verschieben, drehen, kopieren oder als Block zusammenfassen.",block_part_edit:"Nur dieses Teil bearbeiten",block_break:"Block aufl\xF6sen",block_make:"Als Block zusammenfassen",multi_mode:"Mehrere ausw\xE4hlen (Tippen nimmt dazu, Ziehen zieht einen Rahmen)",block_part:"Teil eines Blocks.",block_select:"Ganzen Block w\xE4hlen",block_delete:"{n} M\xF6bel l\xF6schen?",block_delete_fixed:"{n} M\xF6bel l\xF6schen? Einige davon sind fixiert.",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",spots_height_error:"Die Montageh\xF6he muss zwischen 0 und 10 m \xFCber dem zugeh\xF6rigen Geschoss liegen. Bitte die Dach- oder \xDCberdachungsh\xF6he pr\xFCfen.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_busy_solar:"Solarmodule",stats_busy_sound:"Musik",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt auf dem Haus. Wie bei den W\xE4nden werden die zur Kamera gerichteten Fl\xE4chen durchsichtig.",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Sichtkegel in 3D zeigen",camera_detect_pins:"Erkennungs-Symbole zeigen (Person, Auto, Tier)",camera_detect_pins_hint:"Aus: Bei einer Erkennung erscheinen keine Symbole \xFCber der Kamera, nur der Sichtkegel f\xE4rbt sich rot \u2013 dezenter auf dem Wandtablet.",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m}. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort stellst du auch Auto Pro ein (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang & Kino)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",media_play_head:"Abspielen",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",wall_view:"Wandansicht",walk_start:"Rundgang durchs Haus",walk_title:"Rundgang",walk_end:"Beenden",walk_hint:"Ziehen: umsehen \xB7 Tippen auf den Boden: hinlaufen \xB7 W A S D / Pfeiltasten oder der Kn\xFCppel: laufen \xB7 Esc: beenden",card_next:"n\xE4chster Schritt \u2026",card_step_hole:"Durch ein Loch",card_step_fit:"Einbauen",card_step_end:"Oder ans Ziel",card_lay:"Verlegen",card_hole_out:"nach au\xDFen",card_hole_in:"nach innen",card_to:"Verbinden mit",card_through:"\xDCber (in Reihenfolge, wenn n\xF6tig)",card_group_pool:"Am Pool",card_group_tech:"Technik",card_group_joints:"T- und Y-St\xFCcke",card_group_holes:"L\xF6cher",card_open:"Anschl\xFCsse",card_open_other:"Karte dieses Teils \xF6ffnen",card_port:"Anschluss",card_via:"\xFCber",card_reroute:"Neu verlegen",card_disconnect:"Trennen",card_with:"verbinden mit \u2026",card_connect:"Verbinden",card_connect_with:"Verbinden mit \u2026",card_status:"{a} von {b} verbunden",card_show_plan:"Im Grundriss zeigen",card_show_wall:"In der Wandansicht zeigen",joint_name:"Name (z. B. Loch Skimmer)",conn_hole_out:"{name}: von innen nach au\xDFen",conn_hole_in:"{name}: von au\xDFen nach innen",hint_joint_place:"T- oder Y-St\xFCck: im Grundriss tippen \u2013 auf ein Rohr getippt, wird es ins Rohr eingesetzt",port_suction:"Saugseite",port_pressure:"Druckseite",port_pump:"Von der Pumpe",port_return:"R\xFCcklauf",port_waste:"Abwasser",port_in:"Eingang",port_out:"Ausgang",port_out1:"Ausgang 1",port_out2:"Ausgang 2",port_inside:"innen",port_outside:"au\xDFen",port_used:"belegt",joint_tee:"T-St\xFCck {n}",joint_y:"Y-St\xFCck {n}",joint_wall:"Loch {n} (Wand)",joint_floor:"Loch {n} (Boden)",joint_add_tee:"T-St\xFCck",joint_add_y:"Y-St\xFCck",wall_kit_hole_wall:"Loch in der Wand",wall_kit_hole_floor:"Loch im Boden",wall_kit_tee:"T-St\xFCck",wall_kit_y:"Y-St\xFCck",wall_run_place:"Auf die Wand tippen, wo es hin soll",valve_top6:"6-Wege-Ventil oben",valve_side6:"6-Wege-Ventil seitlich",valve_four:"4-Wege-Ventil",pool_valve_type:"Mehrwegeventil",pool_loose_end:"offenes Ende",pool_holes_hint:"L\xF6cher in Wand und Boden setzt du in der Wandansicht (Leiste links).",conn_add:"Rohr hinzuf\xFCgen",conn_from:"Von",conn_via:"\xDCber (in Reihenfolge)",conn_add_via:"+ Loch, Kugelhahn, Sichtglas \u2026",conn_to:"Nach",conn_and:"Und nach (zweites Ziel, mit T-St\xFCck davor)",conn_choose:"w\xE4hlen \u2026",conn_create:"Anlegen",conn_hint:"Der Weg wird automatisch gelegt \u2013 drinnen an den Anschl\xFCssen entlang, drau\xDFen rechtwinklig unter der Erde. Feinverlegen in der Wandansicht und im Grundriss.",wall_kit_pool:"Pooltechnik",wall_kit_energy:"Energie",wall_run_add:"+ Rohr",wall_run_start:"Rohr: am Ger\xE4t, auf einem Rohr (T-St\xFCck) oder auf der Wand anfangen",wall_run_next:"Weitere Punkte setzen \u2013 am Ger\xE4t oder auf einem Rohr endet es, Doppelklick oder Enter beendet",wall_run_down:"\u2193 In den Boden",wall_run_through:"\u27C2 Durch die Wand",wall_run_done:"Fertig",wall_run_fit:"Auf das Rohr tippen, wo es hin soll",wall_run_valve:"Kugelhahn",wall_run_sight:"Sichtglas",wall_run_pipe:"Rohr",wall_run_pt:"H\xF6he des Punkts (m)",wall_run_more:"Weiterzeichnen",wall_run_tip:"Punkte ziehen \xB7 Doppelklick entfernt \xB7 Kugelhahn antippen: auf/zu",wall_view_turn:"Um 45\xB0 drehen \u2013 an der Wand r\xFCckt es in den Raum",wall_view_fixed:"Fixiert \u2013 zum Ziehen erst l\xF6sen",wall_view_3d:"3D im Raum",wall_view_lift:"Nach oben oder unten ziehen: H\xF6he \xFCber Boden",wall_zoom_hint:"Vergr\xF6\xDFern: Mausrad oder zwei Finger",wall_zoom_all:"Ganze Wand",wall_view_hint_3d:"M\xF6bel antippen und auf dem Boden ziehen \xB7 Mausrad oder zwei Finger: n\xE4her oder weiter weg \xB7 mittlere oder rechte Maustaste (am Tablet zwei Finger): umsehen \xB7 unten Abst\xE4nde und H\xF6he eintippen \xB7 Pfeile links und rechts: zur n\xE4chsten Wand",wall_view_front:"Wand von vorne",wall_view_depth:"Abstand zur Wand (m)",wall_view_room:"W\xE4nde dieses Raums von vorne ansehen",hint_wall_pick:"Wandansicht: in den Raum klicken (oder nah an eine Wand)",wall_view_open:"Die Wand von vorne ansehen: M\xF6bel daran entlang der Wand und in der H\xF6he verschieben",wall_view_hint:"Ziehen verschiebt entlang der Wand und \u2013 bei H\xE4ngendem \u2013 in der H\xF6he \xB7 Pfeiltasten 1 cm, mit Umschalt 10 cm \xB7 Kanten rasten an Wandenden, T\xFCren, Fenstern und anderen M\xF6beln ein (Alt: frei) \xB7 Doppelklick \xF6ffnet das M\xF6bel im Grundriss",wall_view_empty:"An dieser Wand steht noch nichts \u2013 M\xF6bel, die mit dem R\xFCcken an der Wand stehen oder daran h\xE4ngen, erscheinen hier.",wall_view_left:"Abstand von links (m)",wall_view_floor:"steht auf dem Boden",wall_view_form:"Im Grundriss bearbeiten",wall_prev:"Vorige Wand",wall_next:"N\xE4chste Wand",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",rain_entity:"Regen von eigener Wetterstation",rain_entity_hint:"Ein Regensensor (an = Regen) oder eine Regenrate (mm/h) deiner Wetterstation sagt, ob es am Haus regnet \u2013 f\xFCr die Regenwarnung und den Regen in 3D. Ohne Auswahl entscheidet die Wetter-Entit\xE4t.",rain_ignore:"Bei Regen nicht warnen",rain_ignore_hint:"Dieses Fenster darf bei Regen offen bleiben (z. B. unter dem Vordach): keine Regenwarnung f\xFCr dieses Fenster, alle anderen warnen weiter.",outage_entity:"Stromausfall melden mit",outage_entity_hint:"Eine Entit\xE4t, die einen Stromausfall meldet: ein Netz-Sensor (binary_sensor der Klasse power \u2013 \u201Eaus\u201C hei\xDFt kein Strom), eine USV (\u201Eauf Batterie\u201C), eine Netzspannung unter 100 V oder ein eigener Helfer, der bei Ausfall \u201Ean\u201C ist. Dann erscheint eine Warnung, und der Netzanschluss wird durchgestrichen.",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_names:"Ger\xE4tenamen in Warnungen zeigen",alert_names_hint:"An: \u201EK\xFCche \xB7 Rauch: Rauchmelder K\xFCche\u201C. Aus: nur \u201EK\xFCche \xB7 Rauch\u201C \u2013 k\xFCrzer auf dem Wandtablet. Ohne Raum bleibt der Ger\xE4tename stehen.",alert_short_smoke:"Rauch",alert_short_gas:"Gas",alert_short_co:"Kohlenmonoxid",alert_short_water:"Wasser",alert_short_alarm:"Alarm ausgel\xF6st",alert_short_alarm_pending:"Alarm wird ausgel\xF6st",alert_short_window_rain:"Fenster offen bei Regen",alert_short_power_outage:"Stromausfall",power_outage:"Stromausfall",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_pets:"Haustiere zeigen",card_pets_hint:"Fun-Pack Haustiere: die angelegten Tiere in dieser Karte zeigen (z. B. am Wandtablet ausschalten)",news_pets_title:"Neu: Haustiere \u2013 ein Geschenk f\xFCr euch",news_pets_text:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus, laufen durch die R\xE4ume, legen sich aufs Sofa und gehen sogar die Treppe hoch \u2013 und im Aquarium schwimmen Fische. Das Fun-Pack holst du dir kostenlos im Shop.",news_to_shop:"Zum Shop",news_later:"Sp\xE4ter",news_never:"Nicht mehr anzeigen",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus. Zur Kamera gerichtete Dachfl\xE4chen werden wie die W\xE4nde durchsichtig.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",ext_show_list:"Liste zeigen",ext_hide_list:"Liste zuklappen",ext_sum_installed:"installiert",ext_sum_updates:"Updates",ext_sum_missing:"noch nicht installiert",ext_sum_all:"Alle {n} installieren/aktualisieren",ext_sum_packs:"M\xF6bel-Packs ({items} M\xF6bel)",ext_sum_feature_packs:"Erweiterungen",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 Pro-Funktionen: {n}",pack_needs_update:"Diese Erweiterung braucht eine neuere NeonPlan-Version \u2013 bitte NeonPlan 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie Pro",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun-Pack \xB7 kostenlos f\xFCr Kunden",offers_dot:"Neues im Shop",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"M\xF6bel-Packs und Pro-Erweiterungen f\xFCr NeonPlan 3D. Gekaufte Erweiterungen installierst du hier mit deinem Lizenzschl\xFCssel; sie bekommen Updates von selbst und funktionieren auch ohne Verbindung.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",fun_title:"Fun-Packs",fun_intro:"Kostenlose Extras zum Spa\xDF: im Shop f\xFCr 0 \u20AC holen (wer mag, gibt freiwillig etwas dazu) und hier ein- und ausschalten.",fun_name_pets:"Haustiere",fun_feature_pets:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus: Sie laufen durch die R\xE4ume, legen sich aufs Sofa, aufs Bett oder auf den Teppich und schlafen nachts.",fun_get:"Im Shop holen (0 \u20AC)",pets_show:"Haustiere zeigen",pet_add:"Haustier hinzuf\xFCgen",pet_name:"Name",pet_kind:"Tier",pet_kind_cat:"\u{1F431} Katze",pet_kind_dog:"\u{1F436} Hund",pet_kind_rabbit:"\u{1F430} Kaninchen",pet_fur:"Fell",pet_fur_orange:"Rot",pet_fur_tabby:"Getigert",pet_fur_black:"Schwarz",pet_fur_white:"Wei\xDF",pet_fur_grey:"Grau",pet_fur_brown:"Braun",pet_fur_calico:"Gl\xFCckskatze",pet_fur_golden:"Golden",pet_fur_cream:"Creme",pet_breed:"Rasse",pet_breed_dachshund:"Dackel",pet_breed_pug:"Mops",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Sch\xE4ferhund",pet_floor:"Etage",pet_floor_auto:"Erdgeschoss",ext_active:"aktiv",ext_get:"Im Shop ansehen",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Danke, dass du NeonPlan 3D unterst\xFCtzt! Mit diesem Code schaltest du auf Discord die Rolle \u{1F499} Supporter frei \u2013 damit siehst du den Kanal #beta-feedback und testest neue Erweiterungen als Erste.",supporter_open:"Discord \xF6ffnen",supporter_how:"So geht's: Discord \xF6ffnen, in einem beliebigen Kanal /supporter {code} eingeben und senden. Die Rolle kommt sofort.",beta_yours:"Beta \xB7 f\xFCr dich als Supporter",beta_supporters:"Beta \xB7 zuerst f\xFCr Supporter",beta_yours_hint:"Weil du Supporter bist, darfst du diese Erweiterung schon vorab testen. Sag uns auf Discord (Kanal #beta-feedback), was gut l\xE4uft und was nicht.",beta_supporters_hint:"Diese Erweiterung ist noch in der Beta und zuerst nur mit dem Supporter-Pass erh\xE4ltlich. Sobald sie fertig ist, gibt es sie f\xFCr alle im Shop.",beta_feedback:"Feedback auf Discord",beta_become:"Supporter werden",beta_bar:"Beta \u2013 du testest als Supporter zuerst. Feedback gern auf Discord (#beta-feedback).",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Pro-Funktionen",ext_teaser_text:"M\xF6bel-Packs, Shop-Verbindung und Pro-Erweiterungen findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te, Gas- und Wasserverbrauch von heute \u2013 W\xE4rme folgt als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",pro_name_time_travel:"Zeitreise",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft; eine Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe mit Solltemperatur, Filterpumpe, Licht, pH und Chlor/Redox mit Ampel; die Abdeckung f\xE4hrt \xFCber das Wasser; Warnungen bei pH, Chlor und Frost",pool_teaser:"Mit Pool Pro lebt dein Pool: Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft. Eine Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe, pH und Chlor \u2013 mit Kn\xF6pfen f\xFCr Solltemperatur, Pumpe, Licht und Abdeckung.",pool_pro_hint:"Leere Felder sucht NeonPlan selbst \xFCber den Namen (eine Entit\xE4t mit \u201Epool\u201C im Namen), \u201EKeine\u201C schaltet eine Rolle ab. Die W\xE4rmepumpe darf eine Klima- oder Warmwasser-Entit\xE4t sein (dann l\xE4sst sich die Solltemperatur einstellen) oder ein Schalter; die Filterpumpe ein Schalter oder ein Leistungssensor.",pool_activate:"Pool Pro f\xFCr diesen Pool einschalten",pool_temperature:"Wassertemperatur",pool_heater:"W\xE4rmepumpe / Heizung",pool_pump:"Filterpumpe",pool_light:"Poolbeleuchtung",pool_ph:"pH-Wert",pool_chlorine_role:"Chlor / Redox",pool_chlorine:"Chlor",pool_orp:"Redox",pool_cover:"Abdeckung",pool_cover_open:"offen",pool_cover_closed:"zu",pool_cover_closed_part:"zu",pool_cover_open_btn:"Abdeckung \xF6ffnen",pool_cover_close_btn:"Abdeckung schlie\xDFen",pool_cover_stop:"Abdeckung anhalten",pool_heating:"heizt",pool_pump_on:"Pumpe l\xE4uft",pool_heater_on:"W\xE4rmepumpe an",pool_heater_off:"W\xE4rmepumpe aus",pool_colder:"K\xE4lter",pool_warmer:"W\xE4rmer",pool_shape:"Form",pool_shape_rect:"Eckig",pool_shape_round:"Rund",pool_shape_oval:"Oval",pool_diameter:"Durchmesser (m)",pool_shape_free:"Frei",tool_pool:"Pool",hint_pool:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen",hint_pool_tech:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen \xB7 Anschl\xFCsse, Ger\xE4te und Rohre rechts",hint_pipe_start:"Rohr: Start antippen (Anschluss oder Ger\xE4t)",hint_pipe_pool:"Rohr: zuerst den Pool antippen, zu dem die Rohre geh\xF6ren",hint_pipe_next:"Ecken antippen, dann das Ziel (Anschluss oder Ger\xE4t) \xB7 Esc bricht ab",pool_tool_empty:"Noch kein Pool auf dieser Etage: W\xE4hle oben die Form und ziehe den Pool auf.",pool_choose:"Welchen Pool bearbeiten?",pool_ports:"Anschl\xFCsse",pool_ports_hint:"Skimmer und Einl\xE4sse sitzen am Beckenrand, der Bodenablauf im Becken; der Abwasser-Anschluss nimmt das R\xFCcksp\xFClwasser auf. Im Plan verschieben.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bodenablauf",pool_port_inlet:"Einlass",pool_port_waste:"Abwasser",pool_devices:"Technik",furn_pool_pump:"Filterpumpe",furn_pool_filter:"Sandfilter",furn_pool_heat_pump:"W\xE4rmepumpe",furn_pool_dosing:"Dosieranlage",furn_pool_valve:"Kugelhahn",pool_valve_position:"Stellung des 6-Wege-Ventils",valve_filter:"Filtern",valve_backwash:"R\xFCcksp\xFClen",valve_rinse:"Nachsp\xFClen",valve_waste:"Entleeren",valve_recirculate:"Zirkulieren",valve_closed:"Geschlossen",pool_valve_open:"offen",pool_pipes:"Rohre",pool_pipe_draw:"Rohr zeichnen",pool_pipe_draw_hint:"Rohre verbinden Anschl\xFCsse und Ger\xE4te in Flie\xDFrichtung: vom Skimmer zur Pumpe, weiter zum Filter, \xFCber W\xE4rmepumpe oder Bypass zu den Einl\xE4ssen. An einer Verteilung flie\xDFt das Wasser \xFCber die W\xE4rmepumpe, solange sie an ist, sonst \xFCber den Bypass; ein geschlossener Kugelhahn sperrt. Kugelhahn im Plan antippen: auf/zu.",pool_pipe_height:"H\xF6he \xFCber Boden (m)",pool_pipe_reverse:"Flie\xDFrichtung umdrehen",pool_pipes_pro:"Mit Pool Pro flie\xDFt das Wasser sichtbar durch die Rohre \u2013 blau, nach der W\xE4rmepumpe warm.",pool_above:"Aufstellpool (steht auf dem Boden)",pool_above_hint:"Ein Pool, der auf dem Boden steht, statt eingelassen zu sein: Wand rundum, das Wasser knapp unter dem Rand.",pool_height:"Beckenh\xF6he",alert_pool_ph:"Pool: pH {name}",alert_pool_chlorine:"Pool: Chlor/Redox {name}",alert_pool_frost:"Pool: Frostgefahr ({name})",pro_feature_time_travel:"Zeitreise: Ein Zeitregler spielt bis zu 7 Tage im Haus ab \u2013 Lichter, T\xFCren, Fenster, Rolll\xE4den, Bewegung, Heizung, Wetter und Sonne, mit Ereignis-Markern. Nur ansehen, nichts wird geschaltet",tt_chip:"Zeitreise",tt_hint:"Bis zu 7 Tage im Haus abspielen (nur ansehen, nichts wird geschaltet)",tt_badge:"ZEITREISE",tt_live:"Live",tt_live_hint:"Zur\xFCck zur Gegenwart",tt_play:"Abspielen",tt_pause:"Anhalten",tt_prev:"Voriges Ereignis",tt_next:"N\xE4chstes Ereignis",tt_speed:"Tempo: 1 Stunde in {s}",tt_now:"jetzt",tt_ago:"vor {d}",tt_since:"seit {time}",tt_loading:"Lade Verlauf \u2026",tt_error:"Verlauf nicht geladen: {error}",tt_retry:"Erneut",tt_no_recorder:"Ohne den Recorder von Home Assistant gibt es keinen Verlauf.",tt_restart:"Bitte Home Assistant neu starten \u2013 erst dann kennt es die Zeitreise.",tt_locked:"Die Zeitreise ist eine Pro-Erweiterung.",tt_readonly:"Zeitreise: nur ansehen \u2013 nichts wird geschaltet",tt_ev_door:"{name} ge\xF6ffnet",tt_ev_garage:"{name} ge\xF6ffnet",tt_ev_lock:"{name} entriegelt",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Rauch: {name}",tt_ev_outage:"Stromausfall",tt_ev_camera:"Kamera erkennt Bewegung: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Kohlenmonoxid: {name}",tt_ev_water:"Wasser: {name}",tt_ev_rain:"Fenster offen bei Regen: {name}",tt_ev_motion:"Bewegung in der Nacht: {name}",tt_ev_washer:"{name} fertig",tt_ev_robot_start:"{name} startet",tt_ev_robot_done:"{name} fertig",card_time_travel:"Knopf \u201EZeitreise\u201C",card_time_travel_hint:"Ein Knopf unten in der Karte spielt die letzten Stunden und Tage ab (Pro: Zeitreise).",auto_pro_teaser:"Mit Auto Pro zeigt das Fahrzeug hier Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, und \u201Eunterwegs\u201C mit dem Standort, wenn es weg ist.",car_hint:"Eine Entit\xE4t des Autos reicht: Die \xFCbrigen findet NeonPlan am selben Ger\xE4t in Home Assistant (Ladestand, Reichweite, Laden, Kabel, Schloss, Klima, Standort). Was es nicht findet, w\xE4hlst du hier; \u201EKeine\u201C schaltet eine Rolle ab.",car_device:"Fahrzeug (eine Entit\xE4t des Autos)",car_soc:"Ladestand (%)",car_range:"Reichweite",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_plugged:"Kabel eingesteckt",car_lock:"Verriegelung",car_climate:"Klima / Vorheizen",car_tracker:"Standort (device_tracker)",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",license_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",chk_pro_active:"Energie Pro ist aktiv",chk_pro_get:"Energie Pro freischalten (Leitungen, Module, Hologramm)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",energy_pro_active:"Energie Pro ist aktiv",energy_pro_active_hint:"Leitungen, lebende Module und das Hologramm laufen. Gas, Wasser und W\xE4rme kommen als Updates in diesem Pack.",pro_unlock:"Freischalten",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",help_discord:"Community auf Discord",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_mirror:"Von hinten gespiegelt (wie Glas)",holo_device_min_w:"Ger\xE4te-Karten ausblenden unter (W)",holo_device_house:"Ger\xE4te-Karten auch in der Hausansicht",holo_device_house_hint:"Aus: Die Karten \xFCber den Ger\xE4ten erscheinen nur, wenn ihre Etage ge\xF6ffnet ist.",holo_plant_floor:"Hausbilanz und Anlagen-Karten auch in Etagenansichten",room_ceiling:"Deckenh\xF6he (m)",units:"L\xE4ngen",units_auto:"Automatisch ({unit})",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:`Wie der Editor L\xE4ngen zeigt und liest. Automatisch folgt dem Einheitensystem von Home Assistant. Gespeichert wird immer in Metern \u2013 Fu\xDF und Zoll tippst du z. B. als 8' 2", 98in oder 8.2ft.`,room_area_net:"Fl\xE4che {a} \xB7 netto {n}",room_area_net_hint:"Netto: ohne die W\xE4nde, die in den Raum ragen \u2013 geteilte Innenw\xE4nde liegen zur H\xE4lfte im Raum, freie W\xE4nde und der Spalt hinter einer Vorwand z\xE4hlen nicht mit.",room_ceiling_hint:"Leer = H\xF6he der Etage. Mit eigener H\xF6he enden die W\xE4nde des Raums dort (au\xDFer ein Nachbarraum ist h\xF6her), und Deckenleuchten h\xE4ngen an dieser Decke \u2013 z. B. 2,5 m im Wohnraum neben einer 5 m hohen Garage.",holo_plant_floor_hint:"An: Die Karten bleiben auch sichtbar, wenn eine Etage ge\xF6ffnet ist \u2013 auf der Etage ihres Solarfelds (Felder auf dem Dach: oberste Etage, im Garten: unterste).",holo_device_room:"Ger\xE4te-Karten im ge\xF6ffneten Raum",holo_device_room_hint:"An: \xD6ffnest du einen Raum, erscheinen die Karten der Ger\xE4te in diesem Raum (nur dieses Raums).",holo_mirror_hint:"Schaust du von der R\xFCckseite des Solarfelds, zeigen die Karten ihre R\xFCckseite \u2013 gespiegelt wie eine Glasscheibe. Aus: Sie bleiben von \xFCberall lesbar.",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_no_field:"Noch kein Solarfeld im Plan: Das Hologramm schwebt neben dem Haus.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",contour_draw:"Kontur zeichnen",contour_draw_hint:"Ecken anklicken; erste Ecke, Enter oder Abschlie\xDFen schlie\xDFt die Fl\xE4che. Esc bricht ab.",contour_finish:"Abschlie\xDFen",contour_edit:"Freie Kontur bearbeiten",contour_vertices:"Eckpunkte",contour_edit_hint:"Wie bei R\xE4umen: Ecken im Plan ziehen oder X/Z \xE4ndern. Die + Marker auf den Kanten f\xFCgen Ecken ein; \xD7 entfernt eine Ecke.",contour_insert:"Eckpunkt auf der n\xE4chsten Kante einf\xFCgen",contour_remove:"Eckpunkt entfernen",contour_invalid:"Mindestens drei verschiedene Ecken und eine Fl\xE4che von 0,05 m\xB2 sind n\xF6tig. Kanten d\xFCrfen sich nicht kreuzen; maximal 200 Ecken.",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",hint_outdoor_free:"Ecken der Au\xDFenfl\xE4che setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",outdoor_shape_rect:"Rechteck",outdoor_shape_free:"Freie Form",outdoor_draw_type:"Zeichnen:",outdoor_draw_type_hint:"Was du als N\xE4chstes aufziehst: Rasen, Terrasse, Weg, Pool \u2026 Die Art l\xE4sst sich danach im Formular noch \xE4ndern.",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",out_balcony:"Balkon",balcony_rail:"Gel\xE4nderh\xF6he",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Dachabschnitte haben eine rechteckige oder freie Grundfl\xE4che, jeweils mit eigener Dachform, Firstrichtung, H\xF6he und Neigung. Rechteck aufziehen oder Freiform w\xE4hlen und Ecken anklicken. Antippen w\xE4hlt aus, Ziehen verschiebt; Eckpunkte bearbeiten die Kontur.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"\xDCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses als freie Dachgrundfl\xE4che. Die gew\xE4hlte Dachform bleibt erhalten; die Ecken lassen sich danach bearbeiten.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",straighten:"Schiefe Kanten begradigen",straighten_hint:"Findet Raumkanten, die nur um wenige Zentimeter schief laufen (eine Ecke 1 cm daneben), und richtet sie gerade aus. Bewusst schr\xE4ge W\xE4nde bleiben.",straighten_done:"{n} fast gerade Kanten begradigt.",straighten_none:"Keine schiefen Kanten gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",controls_side:"Wo Etagenbilder, Stern, Suche und Auge sitzen",controls_left:"Bedienleiste links",controls_right:"Bedienleiste rechts",keep_view:"Ansicht halten",keep_view_hint:"Beim Wechsel von Etage zu Etage bleibt die Kamera, wo sie ist \u2013 nur die H\xF6he wandert mit.",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",contact_invert:"Kontakt umkehren",contact_invert_hint:"F\xFCr Sensoren, die offen und geschlossen andersherum melden",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",furn_rotation_x:"Drehung X \u2013 kippen (\xB0)",furn_rotation_y:"Drehung Y \u2013 Grundriss (\xB0)",furn_rotation_z:"Drehung Z \u2013 seitlich kippen (\xB0)",furn_rotation_reset:"Ausrichtung zur\xFCcksetzen",furn_rotation_hint:"X und Z drehen um die Modellmitte, danach Y um die senkrechte Achse. Die Position bleibt unver\xE4ndert; der Grundriss zeigt die gedrehte Begrenzungsh\xFClle. Gr\xF6\xDFen-Griffe skalieren gekippte M\xF6bel proportional; Einzelma\xDFe oben eingeben.",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_sofa_l:"Ecksofa (L-Form)",furn_sofa_u:"Wohnlandschaft (U-Form)",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_u:"U-Treppe mit Podest",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. \xDCber mehreren R\xE4umen wird sie in jedem Raum ausgeschnitten; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",wall_pos_hint:"X und Y: die Mitte der Wand im Plan.",stairwell_outside:"Diese \xD6ffnung liegt in keinem Raum und wird deshalb nicht ausgeschnitten. Ziehe sie in einen Raum.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_ac_unit:"Klimager\xE4t (Wand)",furn_only_color:"Nur in einer Farbe leuchten",furn_only_color_pick:"Farbe",furn_only_color_hint:"Die Lampe leuchtet nur, solange das Licht ungef\xE4hr diese Farbe zeigt \u2013 z. B. gelb f\xFCr \u201EWasser\u201C am Waschbecken. Andere Farben desselben Lichts bleiben hier dunkel.",furn_run_w:"L\xE4uft ab (Watt)",furn_run_w_hint:"Ab wie viel Watt am Leistungssensor das Ger\xE4t als laufend gilt und leuchtet (leer: 10 W). F\xFCr Ger\xE4te hinter einer Steckdose, die im Standby ein paar Watt ziehen, z. B. 100.",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_hinge:"Angelpunkt",roof_window_hinge_top:"Oben",roof_window_hinge_middle:"Mittig",roof_window_hinge_bottom:"Unten",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_float:"Ohne Dach \xFCber dem Raum zeigen",roof_window_float_hint:"Blendet das Dach beim Heranzoomen an eine Etage oder einen Raum aus, bleibt das Fenster an seiner Stelle \xFCber dem Raum stehen \u2013 offen, gekippt, mit dem Rollladen. Aus: Es ist nur im Dach zu sehen.",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Der Fl\xFCgel \xF6ffnet am gew\xE4hlten Angelpunkt (oben, mittig oder unten); bei Kippstellung ein St\xFCck. Der Rahmen leuchtet warm, der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_wall_free:"frei stehend",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stairs_u_hint:"Die U-Treppe steigt von der markierten Vorderkante nach hinten, wendet am Podest und kommt auf der anderen Seite wieder nach vorn hoch. \u201ESpiegeln\u201C dreht die Laufrichtung um. Sie \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_gas_meter:"Gasz\xE4hler",energy_water_meter:"Wasserz\xE4hler",energy_meters_hint:"Energie Pro: Die Haus-Karte zeigt, wie viel Gas und Wasser heute verbraucht wurde \u2013 aus der Statistik der Z\xE4hler (Z\xE4hlerstand, z. B. in m\xB3). \u201EAus dem Energie-Dashboard \xFCbernehmen\u201C f\xFCllt beide mit.",holo_gas:"Gas",holo_water:"Wasser",holo_today_short:"heute",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen.",diag_title:"Hilf mit, NeonPlan besser zu machen",diag_intro:"Freiwillig und anonym: Wenn du es einschaltest, schickt NeonPlan h\xF6chstens einmal am Tag einen kleinen Bericht an den NeonPlan-Server (api.mastershort.de). Er zeigt, auf welchen Ger\xE4ten NeonPlan l\xE4uft, wo es ruckelt und welche Fehler auftreten \u2013 damit sie behoben werden k\xF6nnen.",diag_sent_head:"Was gesendet wird:",diag_sent:"eine zuf\xE4llige Kennung (nicht die von Home Assistant), die Versionen von NeonPlan, Home Assistant und Python, die Sprache, die installierten Pakete und Pro-Erweiterungen, Anzahlen aus dem Plan (Etagen, R\xE4ume, M\xF6bel, verkn\xFCpfte Ger\xE4te, Kameras), Ger\xE4teart, Browser und System der Bildschirme mit Bildrate und Grafikklasse, wie oft welche Ansicht ge\xF6ffnet wurde, und Fehlermeldungen von NeonPlan ohne Namen und Adressen.",diag_never_head:"Was nie gesendet wird:",diag_never:"Namen, Entit\xE4ten, Bereiche, die Form deines Grundrisses, IP-Adressen, die Kennung deiner Home-Assistant-Installation, Benutzernamen und dein Lizenzschl\xFCssel.",diag_voluntary:"Du kannst es jederzeit wieder ausschalten. Die Berichte werden 12 Monate aufbewahrt; mit \u201EMeine Daten l\xF6schen\u201C verschwinden sie sofort. Mehr dazu in der",diag_privacy:"Datenschutzerkl\xE4rung",diag_switch:"Anonyme Nutzungs- und Fehlerberichte senden",diag_view:"Daten ansehen",diag_view_head:"Das wird gesendet",diag_view_hint_on:"Genau dieser Bericht geht beim n\xE4chsten Mal hinaus (h\xF6chstens einmal am Tag); Fehler zus\xE4tzlich h\xF6chstens einmal pro Stunde.",diag_view_hint_off:"Ausgeschaltet: Es wird nichts gesendet. So s\xE4he der Bericht aus \u2013 die Kennung entsteht erst beim Einschalten.",diag_delete:"Meine Daten l\xF6schen",diag_delete_confirm:"Alle Berichte dieser Installation auf dem Server l\xF6schen und das Senden ausschalten?",diag_deleted:"Gel\xF6scht. Das Senden ist aus; schaltest du es wieder ein, gibt es eine neue Kennung.",diag_delete_failed:"Der NeonPlan-Server war nicht erreichbar. Bitte sp\xE4ter noch einmal versuchen.",diag_unavailable:"Diese Einstellung gibt es nach einem Neustart von Home Assistant."},dl={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",room_id:"ID (card option room:)",room_openings:"Doors and windows",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",room_inherit_heights:"Use floor heights",room_wall_offset:"Wall base above storey floor (m)",room_floor_offset:"Room floor above wall base (m)",room_levels_hint:"Wall base is relative to the storey floor. The additional offset raises the finished room floor; ceiling height starts at that floor.",steps_offset:"Stair offset (m)",steps_offset_hint:"0: starts at the wall face. Positive: farther into the selected room, with a level landing. Negative: towards the doorway.",steps_title:"Doorway steps",steps_side:"Place steps in this room",steps_none:"No steps",steps_lower:"lower level",steps_higher:"higher level",steps_equal:"same level",steps_count:"Number of steps",steps_depth:"Total depth (m)",steps_hint:"Width follows the doorway. Steps on the higher side cut a recess into that room's floor.",steps_fit_warning:"The staircase does not fit the connected rooms at this depth and offset. Adjust depth, offset or room side.",steps_height_warning:"There is not enough shared height for the opening. Increase room height or adjust floor elevation.",delete_point:"Delete corner",duplicate:"Duplicate",tech_open:"Draw the technical room",tech_open_hint:"Then tap the wall in the plan your equipment hangs on.",tech_step:"Step {n}",tech_step_feed:'Tap "{name}" on the left, then the spot on the wall where the line comes in (right at the bottom: out of the floor).',tech_step_devices:"Tap the filter pump and the sand filter on the left \u2013 they stand at the wall. The heat pump and dosing unit if you have them.",tech_step_line:'Draw a line: from "{a}" to "{b}". Just press on the one and drag to the other.',tech_step_loose:"A pipe still ends loose \u2013 draw it on to a device or a line, or delete it (\u270B Select).",tech_step_drawing:"Drag on or tap point by point \u2013 the line ends on a device, a line or a pipe.",tech_step_fit:"Tap the pipe the valve (sight glass) goes into \u2013 it lights up orange.",tech_mode:"Pool equipment",tech_mode_hint:"Draw the technical room on this wall: bring the pool's lines in, put the devices up, draw the pipes",tech_draw:"Draw",tech_pick:"Select",pool_delete_confirm:"Delete the pool with all {n} pipes?",tech_erase:"Erase",tech_erase_hint:"Tap a pipe, ball valve, sight glass or hole \u2013 it is removed. Drew it wrong? Undo helps too.",tech_feeds:"Lines from the pool",tech_devices:"Devices",tech_fittings:"Fittings",tech_hint:"Draw a line: tap a device, a line or a pipe and drag to the next one (or tap point by point). Dragged onto a pipe it makes a T-piece. NeonPlan works out which way the water runs and which connection of a device it takes.",tech_no_ports:"First put the skimmer, bottom drain and inlets at the pool with the pool tool.",tech_ok:"All connected \u2013 the water flows.",tech_issue_loose:"{n} loose pipe ends",tech_issue_port:"{name} not connected",tech_issue_feed:"{name} not brought in yet",tech_feed_place:"Tap where the line comes into the room \u2013 right at the bottom: out of the floor, higher up: through the wall.",tech_start:"Tap a device or a line and draw a line.",feed_skimmer:"Skimmer",feed_drain:"Bottom drain",feed_inlet:"Inlets",feed_waste:"Waste drain (backwash)",hp_ports:"Connections",hp_side_right:"right",hp_side_left:"left",hp_side_back:"back",pool_depth:"Basin depth (m)",pool_rim:"Rim above the lawn (m)",pool_depth_hint:"Basin depth: from the rim down to the floor. A 1.50 m deep pool standing 20 cm out of the lawn: depth 1.50, rim 0.20. The water stands 15 cm below the rim.",pool_depth_ground:"The depth shows in 3D once the pool lies in a lawn, terrace or other area \u2013 without ground around it the basin would show from outside.",pool_port_depth:"Depth",pool_port_depth_hint:"How far below the water line (m): inlets usually 0.30, the skimmer at the water line",pool_valves:"Ball valves",pool_valve_shut:"shut",pool_valve_toggle:"Tap to switch \u2013 the way the valve really stands",pool_joint:"Fitting",block_some_fixed:"\u{1F512} A part of it is fixed \u2013 the block moves once all parts are released.",unfix_all:"Release all",wv_block_all:"Whole block",wv_block_one:"This part only",wv_gap:"Gap: {w} \u2013 this fits in:",wv_gap_hint:"Tap a free spot on the wall: what fits there appears here.",wv_kit_title:"Onto the wall",wv_recent:"Recently used",wv_none_fits:"Nothing fits into this gap.",wv_cat_base:"Base cabinets & boards",wv_cat_hang:"Hanging",wv_cat_tall:"Tall cabinets",wv_cat_living:"Seating & beds",wv_cat_light:"Lights",wv_cat_pack:"From your packs",wv_cat_energy:"Energy",block_title:"Furniture block",multi_title:"{n} items selected",block_hint:"A click selects the whole block, dragging moves it. One part on its own: double-tap it or pick its name below.",multi_hint:"Shift + click adds or removes items, Shift + drag over empty ground draws a frame. Move, turn or copy them together, or join them into a block.",block_part_edit:"Edit only this part",block_break:"Break up block",block_make:"Join into a block",multi_mode:"Select several (a tap adds, a drag draws a frame)",block_part:"Part of a block.",block_select:"Select the whole block",block_delete:"Delete {n} items?",block_delete_fixed:"Delete {n} items? Some of them are fixed.",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",spots_height_error:"Mounting height must be between 0 and 10 m above the owning floor. Please check the roof or canopy height.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house. Camera-facing surfaces become transparent just like the walls.",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Show the field of view in 3D",camera_detect_pins:"Show detection symbols (person, car, animal)",camera_detect_pins_hint:"Off: a detection shows no symbols over the camera, only the field of view turns red \u2013 calmer on a wall tablet.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m}. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",wall_view:"Wall view",walk_start:"Walk through the house",walk_title:"Walk",walk_end:"End",walk_hint:"Drag: look around \xB7 tap the floor: walk there \xB7 W A S D / arrow keys or the stick: walk \xB7 Esc: end",card_next:"next step \u2026",card_step_hole:"Through a hole",card_step_fit:"Put in",card_step_end:"Or to its end",card_lay:"Lay it",card_hole_out:"outwards",card_hole_in:"inwards",card_to:"Connect to",card_through:"Through (in order, if needed)",card_group_pool:"At the pool",card_group_tech:"Equipment",card_group_joints:"T- and Y-pieces",card_group_holes:"Holes",card_open:"Connections",card_open_other:"Open this part's card",card_port:"Connection",card_via:"through",card_reroute:"Lay anew",card_disconnect:"Disconnect",card_with:"connect to \u2026",card_connect:"Connect",card_connect_with:"Connect to \u2026",card_status:"{a} of {b} connected",card_show_plan:"Show in the plan",card_show_wall:"Show in the wall view",joint_name:"Name (say hole skimmer)",conn_hole_out:"{name}: from inside out",conn_hole_in:"{name}: from outside in",hint_joint_place:"T- or Y-piece: tap the plan \u2013 tapped on a pipe, it is put into the pipe",port_suction:"suction side",port_pressure:"pressure side",port_pump:"from the pump",port_return:"return",port_waste:"waste",port_in:"in",port_out:"out",port_out1:"out 1",port_out2:"out 2",port_inside:"inside",port_outside:"outside",port_used:"in use",joint_tee:"T-piece {n}",joint_y:"Y-piece {n}",joint_wall:"Hole {n} (wall)",joint_floor:"Hole {n} (floor)",joint_add_tee:"T-piece",joint_add_y:"Y-piece",wall_kit_hole_wall:"Hole in the wall",wall_kit_hole_floor:"Hole in the floor",wall_kit_tee:"T-piece",wall_kit_y:"Y-piece",wall_run_place:"Tap the wall where it goes",valve_top6:"Six-way valve on top",valve_side6:"Six-way valve at the side",valve_four:"Four-way valve",pool_valve_type:"Multiport valve",pool_loose_end:"open end",pool_holes_hint:"Holes in walls and the floor are set in the wall view (side bar).",conn_add:"Add a pipe",conn_from:"From",conn_via:"Through (in order)",conn_add_via:"+ hole, ball valve, sight glass \u2026",conn_to:"To",conn_and:"And to (a second end, with a T-piece before)",conn_choose:"choose \u2026",conn_create:"Lay it",conn_hint:"The way is laid by itself \u2013 inside from connection to connection, outside at right angles under the ground. Fine-tune it in the wall view and the plan.",wall_kit_pool:"Pool equipment",wall_kit_energy:"Energy",wall_run_add:"+ Pipe",wall_run_start:"Pipe: start at a device, on a pipe (T-piece) or on the wall",wall_run_next:"Set more points \u2013 it ends at a device or on a pipe; double click or Enter finishes",wall_run_down:"\u2193 Into the floor",wall_run_through:"\u27C2 Through the wall",wall_run_done:"Done",wall_run_fit:"Tap the pipe where it goes",wall_run_valve:"Ball valve",wall_run_sight:"Sight glass",wall_run_pipe:"Pipe",wall_run_pt:"Height of the point (m)",wall_run_more:"Draw on",wall_run_tip:"Drag points \xB7 double click removes \xB7 tap a ball valve: open/closed",wall_view_turn:"Turn by 45\xB0 \u2013 at the wall it moves back into the room",wall_view_fixed:"Fixed \u2013 release it to drag",wall_view_3d:"3D in the room",wall_view_lift:"Drag up or down: height above the floor",wall_zoom_hint:"Zoom: mouse wheel or two fingers",wall_zoom_all:"Whole wall",wall_view_hint_3d:"Tap a piece and drag it on the floor \xB7 mouse wheel or two fingers: closer or further away \xB7 middle or right mouse button (two fingers on a tablet): look around \xB7 type distances and height below \xB7 arrows left and right: to the next wall",wall_view_front:"Wall from the front",wall_view_depth:"Distance from the wall (m)",wall_view_room:"See this room's walls from the front",hint_wall_pick:"Wall view: click into the room (or near a wall)",wall_view_open:"See the wall from the front: move the furniture on it along the wall and up or down",wall_view_hint:"Drag to move along the wall and \u2013 for hanging pieces \u2013 up or down \xB7 arrow keys 1 cm, with Shift 10 cm \xB7 edges snap to the wall's ends, doors, windows and other furniture (Alt: free) \xB7 double-click opens the piece in the plan",wall_view_empty:"Nothing at this wall yet \u2013 furniture standing with its back to the wall or hanging on it shows here.",wall_view_left:"Distance from the left (m)",wall_view_floor:"stands on the floor",wall_view_form:"Edit in the plan",wall_prev:"Previous wall",wall_next:"Next wall",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",rain_entity:"Rain from your own weather station",rain_entity_hint:"A rain sensor (on = rain) or a rain rate (mm/h) of your weather station says whether it rains at the house \u2013 for the rain warning and the rain in 3D. Without one the weather entity decides.",rain_ignore:"No rain warning",rain_ignore_hint:"This window may stay open in the rain (under a canopy, say): no rain warning for this window, all others still warn.",outage_entity:"Report a power outage with",outage_entity_hint:'An entity that reports a power outage: a grid sensor (binary_sensor of class power \u2013 "off" means no power), a UPS ("on battery"), a mains voltage below 100 V or a helper of your own that is "on" during an outage. A warning then shows, and the grid connection is crossed out.',sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_pets:"Show the pets",card_pets_hint:"Fun pack Pets: show the animals set up in this card (e.g. switch them off on the wall tablet)",news_pets_title:"New: pets \u2013 a present for you",news_pets_text:"A cat, a dog or a rabbit lives in your 3D house, walks through the rooms, lies down on the sofa and even takes the stairs \u2013 and fish swim in the aquarium. Get the fun pack for free in the shop.",news_to_shop:"To the shop",news_later:"Later",news_never:"Don't show again",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house. Camera-facing roof surfaces become transparent like the walls.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",ext_show_list:"Show the list",ext_hide_list:"Fold the list",ext_sum_installed:"installed",ext_sum_updates:"updates",ext_sum_missing:"not installed yet",ext_sum_all:"Install/update all {n}",ext_sum_packs:"furniture packs ({items} items)",ext_sum_feature_packs:"add-ons",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 Pro features: {n}",pack_needs_update:"This add-on needs a newer NeonPlan version \u2013 please update NeonPlan 3D (HACS) and reload the page.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun pack \xB7 free for customers",offers_dot:"New in the shop",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"Furniture packs and Pro add-ons for NeonPlan 3D. Install what you bought here with your licence key; it updates by itself and works without the connection too.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",fun_title:"Fun packs",fun_intro:"Free extras just for fun: get them in the shop for 0 \u20AC (give something if you like) and switch them on and off here.",fun_name_pets:"Pets",fun_feature_pets:"A cat, a dog or a rabbit lives in your 3D house: it walks through the rooms, lies down on the sofa, the bed or the rug and sleeps at night.",fun_get:"Get it in the shop (0 \u20AC)",pets_show:"Show the pets",pet_add:"Add a pet",pet_name:"Name",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Cat",pet_kind_dog:"\u{1F436} Dog",pet_kind_rabbit:"\u{1F430} Rabbit",pet_fur:"Fur",pet_fur_orange:"Ginger",pet_fur_tabby:"Tabby",pet_fur_black:"Black",pet_fur_white:"White",pet_fur_grey:"Grey",pet_fur_brown:"Brown",pet_fur_calico:"Calico",pet_fur_golden:"Golden",pet_fur_cream:"Cream",pet_breed:"Breed",pet_breed_dachshund:"Dachshund",pet_breed_pug:"Pug",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Shepherd",pet_floor:"Floor",pet_floor_auto:"Ground floor",ext_active:"active",ext_get:"See in the shop",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Thank you for supporting NeonPlan 3D! This code unlocks the \u{1F499} Supporter role on Discord \u2013 you then see the channel #beta-feedback and test new add-ons first.",supporter_open:"Open Discord",supporter_how:"How: open Discord, type /supporter {code} in any channel and send it. The role comes right away.",beta_yours:"Beta \xB7 yours as a supporter",beta_supporters:"Beta \xB7 supporters first",beta_yours_hint:"Because you are a supporter, you can try this add-on early. Tell us on Discord (channel #beta-feedback) what works and what doesn't.",beta_supporters_hint:"This add-on is still in beta and comes with the Supporter Pass first. Once it is finished, everyone can get it in the shop.",beta_feedback:"Feedback on Discord",beta_become:"Become a supporter",beta_bar:"Beta \u2013 as a supporter you test this first. Feedback welcome on Discord (#beta-feedback).",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs, the shop connection and Pro add-ons are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices, today's gas and water use \u2013 heat follows as an update",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',pro_name_time_travel:"Time travel",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: the water glows in the colour of the pool light and moves while the filter pump runs; a glass card shows water temperature, heat pump with target temperature, filter pump, light, pH and chlorine/redox with a traffic light; the cover slides over the water; warnings for pH, chlorine and frost",pool_teaser:"With Pool Pro your pool comes alive: the water glows in the colour of the pool light and moves while the filter pump runs. A glass card shows water temperature, heat pump, pH and chlorine \u2013 with buttons for target temperature, pump, light and cover.",pool_pro_hint:'Empty fields are found by name (an entity with "pool" in its name), "None" switches a role off. The heat pump may be a climate or water heater entity (then the target temperature can be set) or a switch; the filter pump a switch or a power sensor.',pool_activate:"Turn on Pool Pro for this pool",pool_temperature:"Water temperature",pool_heater:"Heat pump / heater",pool_pump:"Filter pump",pool_light:"Pool light",pool_ph:"pH value",pool_chlorine_role:"Chlorine / redox",pool_chlorine:"Chlorine",pool_orp:"Redox",pool_cover:"Cover",pool_cover_open:"open",pool_cover_closed:"closed",pool_cover_closed_part:"closed",pool_cover_open_btn:"Open the cover",pool_cover_close_btn:"Close the cover",pool_cover_stop:"Stop the cover",pool_heating:"heating",pool_pump_on:"pump running",pool_heater_on:"Heat pump on",pool_heater_off:"Heat pump off",pool_colder:"Colder",pool_warmer:"Warmer",pool_shape:"Shape",pool_shape_rect:"Rectangular",pool_shape_round:"Round",pool_shape_oval:"Oval",pool_diameter:"Diameter (m)",pool_shape_free:"Free",tool_pool:"Pool",hint_pool:"Choose a shape and draw the pool \xB7 tap a pool to select it",hint_pool_tech:"Choose a shape and draw the pool \xB7 tap a pool to select it \xB7 ports, devices and pipes on the right",hint_pipe_start:"Pipe: tap the start (port or device)",hint_pipe_pool:"Pipe: first tap the pool the pipes belong to",hint_pipe_next:"Tap corners, then the end (port or device) \xB7 Esc cancels",pool_tool_empty:"No pool on this floor yet: choose the shape above and draw the pool.",pool_choose:"Which pool?",pool_ports:"Ports",pool_ports_hint:"Skimmer and inlets sit on the rim, the bottom drain in the pool; the waste drain takes the backwash water. Move them in the plan.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bottom drain",pool_port_inlet:"Inlet",pool_port_waste:"Waste drain",pool_devices:"Equipment",furn_pool_pump:"Filter pump",furn_pool_filter:"Sand filter",furn_pool_heat_pump:"Heat pump",furn_pool_dosing:"Dosing unit",furn_pool_valve:"Ball valve",pool_valve_position:"Six-way valve position",valve_filter:"Filter",valve_backwash:"Backwash",valve_rinse:"Rinse",valve_waste:"Waste",valve_recirculate:"Recirculate",valve_closed:"Closed",pool_valve_open:"open",pool_pipes:"Pipes",pool_pipe_draw:"Draw a pipe",pool_pipe_draw_hint:"Pipes connect ports and devices in the flow direction: from the skimmer to the pump, on to the filter, through the heat pump or the bypass to the inlets. At a split the water goes through the heat pump while it is on, else through the bypass; a closed ball valve stops it. Tap a ball valve in the plan to open or close it.",pool_pipe_height:"Height above the floor (m)",pool_pipe_reverse:"Reverse the flow direction",pool_pipes_pro:"With Pool Pro the water flows visibly through the pipes \u2013 blue, warm after the heat pump.",pool_above:"Above-ground pool (stands on the ground)",pool_above_hint:"A pool standing on the ground instead of let into it: a wall all around, the water just below the rim.",pool_height:"Pool height",alert_pool_ph:"Pool: pH {name}",alert_pool_chlorine:"Pool: chlorine/redox {name}",alert_pool_frost:"Pool: risk of frost ({name})",pro_feature_time_travel:"Time travel: a time slider replays up to 7 days in the house \u2013 lights, doors, windows, blinds, motion, heating, weather and the sun, with event markers. View only, nothing is switched",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is a Pro add-on.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_outage:"Power outage",tt_ev_camera:"Camera detects motion: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (Pro: time travel).",auto_pro_teaser:'With Car Pro the vehicle here shows charge, range, charging, lock and climate from its integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, and "away" with its location when it is out.',car_hint:'One entity of the car is enough: NeonPlan finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',license_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",chk_pro_active:"Energy Pro is active",chk_pro_get:"Unlock Energy Pro (cables, modules, hologram)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",energy_pro_active:"Energy Pro is active",energy_pro_active_hint:"Cables, living modules and the hologram are running. Gas, water and heat come as updates of this pack.",pro_unlock:"Unlock",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",help_discord:"Community on Discord",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_mirror:"Mirrored from behind (like glass)",holo_device_min_w:"Hide device cards below (W)",holo_device_house:"Device cards in the house view too",holo_device_house_hint:"Off: the cards over devices only show when their floor is open.",holo_plant_floor:"House balance and plant cards in floor views too",room_ceiling:"Ceiling height (m)",units:"Lengths",units_auto:"Automatic ({unit})",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:`How the editor shows and reads lengths. Automatic follows Home Assistant's unit system. The plan always stores metres \u2013 type feet and inches as 8' 2", 98in or 8.2ft.`,room_area_net:"Area {a} \xB7 net {n}",room_area_net_hint:"Net: without the walls reaching into the room \u2013 shared interior walls stand half in the room, free walls and the gap behind a wall built in front of another do not count.",room_ceiling_hint:"Empty = the floor height. With a height of its own the room's walls end there (unless a neighbouring room is taller), and ceiling lamps hang from that ceiling \u2013 e.g. 2.5 m in a living room beside a 5 m garage.",holo_plant_floor_hint:"On: the cards stay visible when a floor is open \u2013 on the floor of their solar field (fields on the roof: the top floor, in the garden: the lowest).",holo_device_room:"Device cards in an opened room",holo_device_room_hint:"On: when you open a room, the cards of the devices in that room show (only that room's).",holo_mirror_hint:"Looking from the back of the solar field, the cards show their back \u2013 mirrored like a pane of glass. Off: they stay readable from everywhere.",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_no_field:"No solar field in the plan yet: the hologram floats beside the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",contour_draw:"Draw outline",contour_draw_hint:"Click corners; click the first corner, press Enter or Finish to close. Esc cancels.",contour_finish:"Finish",contour_edit:"Edit free outline",contour_vertices:"Vertices",contour_edit_hint:"Like rooms: drag corners or edit X/Z. The + markers on edges insert corners; \xD7 removes a corner.",contour_insert:"Insert vertex on the next edge",contour_remove:"Remove vertex",contour_invalid:"At least three distinct corners and an area of 0.05 m\xB2 are required. Edges must not cross; maximum 200 corners.",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",hint_outdoor_free:"Place the corners of the outdoor area \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",outdoor_shape_rect:"Rectangle",outdoor_shape_free:"Free form",outdoor_draw_type:"Draw:",outdoor_draw_type_hint:"What you draw next: lawn, terrace, path, pool \u2026 The type can still be changed in the form afterwards.",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_balcony:"Balcony",balcony_rail:"Railing height",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Roof sections have rectangular or free footprints, each with its own roof shape, ridge direction, height and pitch. Drag a rectangle or choose Free shape and click corners. Tap to select, drag to move; edit vertices to change the outline.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"Takes the shown floor's room outline as a free roof footprint. The selected roof shape is preserved; its corners can then be edited.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",straighten:"Straighten slanted edges",straighten_hint:"Finds room edges that are only a few centimetres off straight (a corner 1 cm out) and straightens them. Walls drawn slanted on purpose stay.",straighten_done:"{n} almost straight edges straightened.",straighten_none:"No slanted edges found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",keep_view_hint:"Switching from floor to floor keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",contact_invert:"Invert contact",contact_invert_hint:"For sensors that report open and closed the other way round",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",furn_rotation_x:"Rotation X \u2013 tilt (\xB0)",furn_rotation_y:"Rotation Y \u2013 floor plan (\xB0)",furn_rotation_z:"Rotation Z \u2013 sideways tilt (\xB0)",furn_rotation_reset:"Reset orientation",furn_rotation_hint:"X and Z rotate around the model centre, then Y around the vertical axis. Position stays unchanged; the plan shows the rotated bounds. Resize handles scale tilted furniture uniformly; use the fields above for individual dimensions.",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. Across several rooms it is cut in each of them; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",wall_pos_hint:"X and Y: the middle of the wall in the plan.",stairwell_outside:"This opening lies in no room and is therefore not cut. Move it into a room.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_ac_unit:"Air conditioner (wall)",furn_only_color:"Glow in one colour only",furn_only_color_pick:"Colour",furn_only_color_hint:`The lamp only glows while the light shows about this colour \u2013 e.g. yellow for "water" at the washbasin. The same light's other colours stay dark here.`,furn_run_w:"Running from (watts)",furn_run_w_hint:"From how many watts at the power sensor the appliance counts as running and glows (empty: 10 W). For appliances behind a smart plug that draw a few watts on standby, e.g. 100.",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_hinge:"Pivot point",roof_window_hinge_top:"Top",roof_window_hinge_middle:"Middle",roof_window_hinge_bottom:"Bottom",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_float:"Show over the room without the roof",roof_window_float_hint:"When the roof fades out as you zoom in on a floor or a room, the window stays where it is over the room \u2013 open, tilted, with its blind. Off: it shows in the roof only.",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"The sash opens around its selected pivot (top, middle or bottom); tilted, a little. The frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_wall_free:"free-standing",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stairs_u_hint:"The U-stair rises from the marked front edge towards the back, turns at the landing and comes back up on the other side. \u201CMirror\u201D turns it the other way. It opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_gas_meter:"Gas meter",energy_water_meter:"Water meter",energy_meters_hint:`Energy Pro: the house card shows how much gas and water were used today \u2013 from the meters' statistics (a counter, e.g. in m\xB3). "Take over from the energy dashboard" fills both too.`,holo_gas:"Gas",holo_water:"Water",holo_today_short:"today",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant.",diag_title:"Help make NeonPlan better",diag_intro:"Voluntary and anonymous: when you switch it on, NeonPlan sends a small report to the NeonPlan server (api.mastershort.de) at most once a day. It shows which devices NeonPlan runs on, where it stutters and which errors occur \u2013 so they can be fixed.",diag_sent_head:"What is sent:",diag_sent:"a random id (not Home Assistant's), the versions of NeonPlan, Home Assistant and Python, the language, the installed packs and Pro add-ons, counts from the plan (floors, rooms, furniture, linked devices, cameras), device type, browser and system of the screens with frame rate and graphics class, how often each view was opened, and NeonPlan's error messages without names and addresses.",diag_never_head:"What is never sent:",diag_never:"names, entities, areas, the shape of your floor plan, IP addresses, your Home Assistant installation's id, user names and your licence key.",diag_voluntary:'You can switch it off again at any time. Reports are kept for 12 months; "Delete my data" removes them at once. More in the',diag_privacy:"privacy notice",diag_switch:"Send anonymous usage and error reports",diag_view:"View data",diag_view_head:"This is what is sent",diag_view_hint_on:"Exactly this report goes out next time (at most once a day); errors in addition at most once an hour.",diag_view_hint_off:"Switched off: nothing is sent. This is how the report would look \u2013 the id is only created when you switch it on.",diag_delete:"Delete my data",diag_delete_confirm:"Delete all reports of this installation on the server and stop sending?",diag_deleted:"Deleted. Sending is off; if you switch it on again, you get a new id.",diag_delete_failed:"The NeonPlan server could not be reached. Please try again later.",diag_unavailable:"This setting is available after a restart of Home Assistant."},Mc=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl"],Gn=new Map,hs=new Map;function us(a){let e=(a??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return Mc.includes(t)?t:null}function cl(a){let e=us(a);return!e||Gn.has(e)}function hl(a){let e=us(a);if(!e||Gn.has(e))return Promise.resolve();let t=hs.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=58a914793cf0`,import.meta.url).href;t=fetch(n).then(i=>i.ok?i.json():{}).then(i=>{Gn.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{Gn.set(e,{})}).finally(()=>hs.delete(e)),hs.set(e,t)}return t}function je(a,e,t={}){let n=a?.language??navigator.language,i=n.startsWith("de")?null:us(n),r=(n.startsWith("de")?ll:i&&Gn.get(i)||dl)[e]??dl[e]??ll[e]??e;for(let[s,l]of Object.entries(t))r=r.replace(`{${s}}`,String(l));return r}function Ve(a,e,t=2){return e.toLocaleString(a?.language??void 0,{maximumFractionDigits:t})}var Pc={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Un(a){return Pc[a]}function ul(a,e){let t=`${e} ${String(a.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function pl(a,e){let t=a.entities?.[e]?.device_id;return t?Object.values(a.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(a.states[n]?.attributes.device_class))):[]}var Ce=(a,e,t)=>(e[0]-a[0])*(t[1]-a[1])-(e[1]-a[1])*(t[0]-a[0]);function qn(a){return a.reduce((e,t,n)=>{let i=a[(n+1)%a.length];return e+t[0]*i[1]-i[0]*t[1]},0)/2}var Zn=(a,e,t)=>Math.abs(Ce(e,t,a))<1e-8&&a[0]>=Math.min(e[0],t[0])-1e-8&&a[0]<=Math.max(e[0],t[0])+1e-8&&a[1]>=Math.min(e[1],t[1])-1e-8&&a[1]<=Math.max(e[1],t[1])+1e-8;function mn(a,e){let t=!1;for(let n=0,i=a.length-1;n<a.length;i=n++){let o=a[i],r=a[n];if(Zn(e,o,r))return!0;o[1]>e[1]!=r[1]>e[1]&&e[0]<(r[0]-o[0])*(e[1]-o[1])/(r[1]-o[1])+o[0]&&(t=!t)}return t}function Ct(a){if(a.length<3||a.length>200||!a.every(e=>e.every(Number.isFinite))||Math.abs(qn(a))<.05)return!1;for(let e=0;e<a.length;e++){let t=a[e],n=a[(e+1)%a.length];if(Math.hypot(t[0]-n[0],t[1]-n[1])<1e-8)return!1;let i=a[(e+2)%a.length];if(Math.abs(Ce(t,n,i))<1e-8&&(n[0]-t[0])*(i[0]-n[0])+(n[1]-t[1])*(i[1]-n[1])<0)return!1;for(let o=e+2;o<a.length;o++){if((o+1)%a.length===e)continue;let r=a[o],s=a[(o+1)%a.length];if(Ce(t,n,r)*Ce(t,n,s)<0&&Ce(r,s,t)*Ce(r,s,n)<0||Zn(t,r,s)||Zn(n,r,s)||Zn(r,t,n)||Zn(s,t,n))return!1}}return!0}function fl(a){let e=a.map((i,o)=>o);qn(a)<0&&e.reverse();let t=[],n=a.length*a.length;for(;e.length>3&&n-- >0;){let i=!1;for(let o=0;o<e.length;o++){let r=e[(o+e.length-1)%e.length],s=e[o],l=e[(o+1)%e.length],d=Ce(a[r],a[s],a[l]);if(Math.abs(d)<1e-8){e.splice(o,1),i=!0;break}if(!(d<0||e.some(c=>c!==r&&c!==s&&c!==l&&Ce(a[r],a[s],a[c])>=-1e-8&&Ce(a[s],a[l],a[c])>=-1e-8&&Ce(a[l],a[r],a[c])>=-1e-8))){t.push([r,s,l]),e.splice(o,1),i=!0;break}}if(!i)return[]}return e.length===3&&Math.abs(Ce(a[e[0]],a[e[1]],a[e[2]]))>1e-8&&t.push([...e]),t}function ml(a,e){let t=a,n=qn(e)<0?-1:1;for(let i=0;i<e.length&&t.length;i++){let o=e[i],r=e[(i+1)%e.length],s=t;t=[];for(let l=0;l<s.length;l++){let d=s[l],c=s[(l+1)%s.length],h=n*Ce(o,r,d),u=n*Ce(o,r,c);if(h>=-1e-8&&t.push(d),h>=-1e-8!=u>=-1e-8){let p=h/(h-u);t.push([d[0]+(c[0]-d[0])*p,d[1]+(c[1]-d[1])*p,d[2]+(c[2]-d[2])*p])}}}return t.filter((i,o)=>{let r=t[(o+1)%t.length];return Math.hypot(i[0]-r[0],i[1]-r[1])>1e-8})}function Xn(a,e,t){let n=[0,1],i=t[0]-e[0],o=t[1]-e[1];for(let s=0;s<a.length;s++){let l=a[s],d=a[(s+1)%a.length],c=d[0]-l[0],h=d[1]-l[1],u=i*h-o*c;if(Math.abs(u)<1e-8)continue;let p=((l[0]-e[0])*h-(l[1]-e[1])*c)/u,f=((l[0]-e[0])*o-(l[1]-e[1])*i)/u;p>1e-8&&p<1-1e-8&&f>=-1e-8&&f<=1+1e-8&&n.push(p)}n.sort((s,l)=>s-l);let r=[];for(let s=1;s<n.length;s++){let l=n[s-1],d=n[s],c=(l+d)/2;d-l>1e-8&&mn(a,[e[0]+i*c,e[1]+o*c])&&r.push([l,d])}return r}function _l(a,e){return e.every((t,n)=>mn(a,t)&&Xn(a,t,e[(n+1)%e.length]).reduce((i,[o,r])=>i+r-o,0)>1-1e-8)}var _t=Math.PI/180;function Qe(a){let e=Math.min(a.x0,a.x1),t=Math.max(a.x0,a.x1),n=Math.min(a.z0,a.z1),i=Math.max(a.z0,a.z1);return a.axis==="x"?{u0:e,u1:t,w:i-n,at:(o,r)=>[o,a.flip?i-r:n+r]}:{u0:n,u1:i,w:t-e,at:(o,r)=>[a.flip?t-r:e+r,o]}}function Re(a){let e=Qe(a).w,t=a.eave_a,n=a.eave_b,i=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*_t),o=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*_t);if(a.shape==="flat"||a.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(a.shape==="pent")return{vr:e,rh:t+e*i,y:l=>t+l*i};if(a.shape==="mansard"){let l=kl(e,t,n,i,o);return{vr:l.vr,rh:l.rh,y:l.y}}let r=i+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(i+o))):e/2,s=t+r*i;return{vr:r,rh:s,y:l=>l<=r?t+l*i:n+(e-l)*o}}var _n=.14;function bl(a,e){return!a.open&&Math.min(a.base,a.eave_a,a.eave_b)<e-.05}function vl(a,e,t){let n=[];for(let i of a.settings.roof.sections??[]){if(i.open||i.shape==="flat"||i.shape==="parapet"||i.shape==="mansard")continue;let o=Qe(i),r=Re(i),s=e+t+_n,l=[],d=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*_t),c=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*_t);d>1e-6&&l.push((s-i.eave_a)/d),i.shape==="gable"&&c>1e-6&&l.push(o.w-(s-i.eave_b)/c);for(let h of l){if(h<=.01||h>=o.w-.01||i.shape==="gable"&&Math.abs(r.y(h)-s)>1e-6)continue;let u=o.at(o.u0,h),p=o.at(o.u1,h);if(i.points?.length)for(let[f,m]of Xn(i.points,u,p))n.push([[u[0]+(p[0]-u[0])*f,u[1]+(p[1]-u[1])*f],[u[0]+(p[0]-u[0])*m,u[1]+(p[1]-u[1])*m]]);else n.push([u,p])}}return n}function wl(a,e){let t=a.length;if(t<3||Math.abs(e)<1e-9)return a.map(o=>[o[0],o[1]]);let n=me(a)>=0?1:-1,i=[];for(let o=0;o<t;o++){let r=a[(o+t-1)%t],s=a[o],l=a[(o+1)%t],d=gl([s[0]-r[0],s[1]-r[1]]),c=gl([l[0]-s[0],l[1]-s[1]]),h=[d[1]*n,-d[0]*n],u=[c[1]*n,-c[0]*n],p=h[0]+u[0],f=h[1]+u[1],m=Math.hypot(p,f);if(m<1e-6){i.push([s[0]+h[0]*e,s[1]+h[1]*e]);continue}let _=(p*h[0]+f*h[1])/m,g=Math.min(4,1/Math.max(.25,_));i.push([s[0]+p/m*e*g,s[1]+f/m*e*g])}return i}function gl(a){let e=Math.hypot(a[0],a[1])||1;return[a[0]/e,a[1]/e]}function ps(a,e){if(a.points&&a.points.length>=3)return wl(a.points,e);let t=Math.min(a.x0,a.x1)-e,n=Math.max(a.x0,a.x1)+e,i=Math.min(a.z0,a.z1)-e,o=Math.max(a.z0,a.z1)+e;return[[t,i],[n,i],[n,o],[t,o]]}function gt(a){let e=a.map(n=>n[0]),t=a.map(n=>n[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}function yl(a,e,t,n){let i=Me(a,{exterior:t,interior:n},e).walls.filter(h=>h.exterior&&!h.free);if(!i.length)return null;let o=h=>`${Math.round(h[0]*1e3)}:${Math.round(h[1]*1e3)}`,r=new Map,s=i.map(h=>({a:h.a,b:h.b}));for(let h of s)for(let u of[h.a,h.b])r.set(o(u),[...r.get(o(u))??[],h]);let l=new Set,d=null;for(let h of s){if(l.has(h))continue;l.add(h);let u=[h.a,h.b],p=h.b;for(;;){let f=(r.get(o(p))??[]).find(m=>!l.has(m));if(!f||(l.add(f),p=o(f.a)===o(p)?f.b:f.a,o(p)===o(u[0])))break;u.push(p)}u.length>=3&&o(p)===o(u[0])&&(!d||Math.abs(We(u))>Math.abs(We(d)))&&(d=u)}if(!d)return null;let c=[];for(let h=0;h<d.length;h++){let u=d[(h+d.length-1)%d.length],p=d[h],f=d[(h+1)%d.length],m=(p[0]-u[0])*(f[1]-p[1])-(p[1]-u[1])*(f[0]-p[0]);Math.abs(m)>1e-6&&c.push(p)}return c.length>=3?wl(c,t):null}var Jn=Math.tan(30*_t);function kl(a,e,t,n,i){let o=Math.min(a*.3,n>1e-6?2.4/n:a*.3),r=Math.min(a*.3,i>1e-6?2.4/i:a*.3),s=e+o*n,l=t+r*i,d=Math.min(a-r,Math.max(o,(l-s+Jn*(a-r+o))/(2*Jn))),c=s+(d-o)*Jn;return{vla:o,vlb:r,yla:s,ylb:l,vr:d,rh:c,y:u=>u<=o?e+u*n:u<=d?s+(u-o)*Jn:u<=a-r?l+(a-r-u)*Jn:t+(a-u)*i}}function Bt(a,e){let t=zc(a,e);if(!a.points||a.points.length<3)return t;let n=ps(a,Math.max(0,Math.min(e.u0,e.u1,e.a,e.b))).map(([d,c])=>Kt(a,d,c)),i=fl(n),o=t.faces.flatMap(d=>i.map(c=>ml(d,c.map(h=>n[h])))).filter(d=>d.length>=3&&Math.abs(qn(d))>1e-8),r=(d,c,h)=>[d[0]+(c[0]-d[0])*h,d[1]+(c[1]-d[1])*h,d[2]+(c[2]-d[2])*h],s=t.ridges.flatMap(([d,c])=>Xn(n,d,c).map(([h,u])=>[r(d,c,h),r(d,c,u)])),l=[];return n.forEach((d,c)=>{let h=n[(c+1)%n.length],u=[0,...t.faces.flatMap(p=>Xn(p.map(([f,m])=>[f,m]),d,h).flat())].filter(p=>p<1-1e-8).sort((p,f)=>p-f);for(let p=0;p<u.length;p++){if(p&&u[p]-u[p-1]<1e-8)continue;let f=u[p],m=d[0]+(h[0]-d[0])*f,_=d[1]+(h[1]-d[1])*f;l.push([m,_,Nt(t,m,_)??Re(a).y(_)])}}),{faces:o,rim:l,ridges:s,gable:null}}function zc(a,e){let t=Qe(a),n=Re(a),i=t.w,o=Math.max(0,e.a),r=Math.max(0,e.b),s=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=(v,w)=>[v,w,n.y(w)],c=d(s,-o),h=d(l,-o),u=d(l,i+r),p=d(s,i+r),f=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*_t),m=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*_t);if(a.shape==="pent"){let v=[c,h,u,p];return{faces:[v],rim:v,ridges:[[u,p]],gable:[[0,n.y(0)],[i,n.y(i)]]}}if(a.shape==="hip"||a.shape==="pyramid"){let v=a.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,i-n.vr)||i/2),w=[t.u0+v,n.vr,n.rh],$=[t.u1-v,n.vr,n.rh],k=a.shape==="pyramid"?[[c,h,w],[h,u,w],[u,p,w],[p,c,w]]:[[c,h,$,w],[w,$,u,p],[p,c,w],[h,u,$]],x=a.shape==="pyramid"?[[c,w],[p,w],[h,w],[u,w]]:[[w,$],[c,w],[p,w],[h,$],[u,$]];return{faces:k,rim:[c,h,u,p],ridges:x,gable:null}}if(a.shape==="halfhip"){let v=Math.min(n.y(0),n.y(i)),w=v+(n.rh-v)*.55,$=f>1e-6?Math.min(n.vr,(w-a.eave_a)/f):n.vr,k=m>1e-6?Math.max(n.vr,i-(w-a.eave_b)/m):n.vr,x=Math.min((t.u1-t.u0)/2-.1,(n.rh-w)/Math.max(.2,f)),z=[t.u0+x,n.vr,n.rh],S=[t.u1-x,n.vr,n.rh],A=[s,$,w],P=[s,k,w],F=[l,$,w],T=[l,k,w];return{faces:[[c,h,F,S,z,A],[z,S,T,u,p,P],[P,A,z],[F,T,S]],rim:[c,h,F,T,u,p,P,A],ridges:[[z,S],[A,z],[P,z],[F,S],[T,S]],gable:[[0,n.y(0)],[$,w],[k,w],[i,n.y(i)]]}}if(a.shape==="mansard"){let v=kl(i,a.eave_a,a.eave_b,f,m),w=[s,v.vla,v.yla],$=[l,v.vla,v.yla],k=[s,i-v.vlb,v.ylb],x=[l,i-v.vlb,v.ylb],z=[s,v.vr,v.rh],S=[l,v.vr,v.rh];return{faces:[[c,h,$,w],[w,$,S,z],[z,S,x,k],[k,x,u,p]],rim:[c,h,$,S,x,u,p,k,z,w],ridges:[[z,S],[w,$],[k,x]],gable:[[0,n.y(0)],[v.vla,v.yla],[v.vr,v.rh],[i-v.vlb,v.ylb],[i,n.y(i)]]}}let _=[s,n.vr,n.rh],g=[l,n.vr,n.rh];return{faces:[[c,h,g,_],[_,g,u,p]],rim:[c,h,g,u,p,_],ridges:[[_,g]],gable:[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]]}}function Nt(a,e,t){let n=null;for(let i of a.faces){if(!mn(i.map(v=>[v[0],v[1]]),[e,t]))continue;let[o,r]=i,s=i.slice(2).find(v=>Math.abs((r[0]-o[0])*(v[1]-o[1])-(r[1]-o[1])*(v[0]-o[0]))>1e-9);if(!s)continue;let l=r[0]-o[0],d=r[2]-o[2],c=r[1]-o[1],h=s[0]-o[0],u=s[2]-o[2],p=s[1]-o[1],f=d*p-c*u,m=c*h-l*p,_=l*u-d*h;if(Math.abs(m)<1e-9)continue;let g=o[2]-(f*(e-o[0])+_*(t-o[1]))/m;n=n===null?g:Math.min(n,g)}return n}function Kt(a,e,t){let n=Math.min(a.x0,a.x1),i=Math.max(a.x0,a.x1),o=Math.min(a.z0,a.z1),r=Math.max(a.z0,a.z1);return a.axis==="x"?[e,a.flip?r-t:t-o]:[t,a.flip?i-e:e-n]}function Ec(a){return{x0:Math.min(a.x0,a.x1),x1:Math.max(a.x0,a.x1),z0:Math.min(a.z0,a.z1),z1:Math.max(a.z0,a.z1)}}function $l(a,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,i=r=>Math.abs((r.x1-r.x0)*(r.z1-r.z0)),o=null;for(let r of a){if(r===e||r.dormer||r.open||r.shape==="flat"||r.shape==="parapet"||i(r)<i(e)*1.5)continue;let s=Ec(r);t<s.x0||t>s.x1||n<s.z0||n>s.z1||(!o||i(r)<i(o))&&(o=r)}return o}function xl(a,e,t,n){let i=Qe(a),o=Re(a),r=2,s=Math.max(i.u0+.3,Math.min(i.u1-r-.3,(n??(i.u0+i.u1)/2)-r/2)),l=e==="a"?a.eave_a:a.eave_b,d=e==="a"?a.pitch_a:a.pitch_b,c=l+1.4,h=r/2*Math.tan(35*_t),u=c+h,p=Math.max(.8,Math.min(i.w/2-.2,(u-l)/Math.max(.15,Math.tan(Math.min(80,d)*_t)))),f=e==="a"?0:i.w-p,m=e==="a"?p:i.w,_=i.at(s,f),g=i.at(s+r,m);return{id:t,x0:Math.round(Math.min(_[0],g[0])*100)/100,z0:Math.round(Math.min(_[1],g[1])*100)/100,x1:Math.round(Math.max(_[0],g[0])*100)/100,z1:Math.round(Math.max(_[1],g[1])*100)/100,shape:"gable",axis:a.axis==="x"?"z":"x",eave_a:Math.round(c*100)/100,eave_b:Math.round(c*100)/100,pitch_a:35,pitch_b:35,base:Math.round(o.y(e==="a"?0:i.w)*100)/100,overhang:.15,dormer:!0}}function Sl(a,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=Qe(e),n=Re(e).rh,i=Bt(a,{u0:0,u1:0,a:0,b:0}),o=Re(a),r=f=>{let[m,_]=t.at(f,t.w/2),[g,v]=Kt(a,m,_);return Nt(i,g,v)??o.y(v)},s=r(t.u0)<=r(t.u1),l=s?t.u0:t.u1,d=s?t.u1:t.u0,c=s?1:-1,h=Math.abs(d-l),u=d;for(let f=.5;f<h;f+=.05)if(r(l+c*f)>=n-.02){u=l+c*f;break}if(Math.abs(u-d)<.05)return e;let p={...e};return e.axis==="x"?d===t.u1?p.x1=u:p.x0=u:d===t.u1?p.z1=u:p.z0=u,p}function Ml(a,e,t){let n=Qe(e),i=a.floors.flatMap(d=>d.rooms.filter(c=>c.points.length>=3&&d.elevation+d.height>e.base+.05)),o=d=>d.some(c=>i.some(h=>K(c,h.points))),r=.35,s=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),l=[.15,.5,.85].map(d=>n.w*d);return{a:o(s.map(d=>n.at(d,-r)))?0:t,b:o(s.map(d=>n.at(d,n.w+r)))?0:t,u0:o(l.map(d=>n.at(n.u0-r,d)))?0:t,u1:o(l.map(d=>n.at(n.u1+r,d)))?0:t}}function Pl(a,e,t,n,i){let o=[];for(let s of[.2,.5,.8])for(let l of[.2,.5,.8])o.push([e+(n-e)*s,t+(i-t)*l]);let r=a.floors.flatMap(s=>s.rooms.filter(l=>l.points.length>=3&&o.some(d=>K(d,l.points))).map(l=>s.elevation+_e(s,l)+Se(s,l)));return r.length?Math.max(...r):null}function fs(a,e){let t=a.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}function Ki(a){return Re(a).rh}function zl(a,e=t=>`roof_${t+1}`){let t=a.settings.roof?.pitch??35,n=a.settings.wall_exterior,i=a.floors.filter(l=>l.rooms.some(d=>d.points.length>=3)).sort((l,d)=>d.elevation-l.elevation),o=[],r=[],s=l=>Math.round(l*1e3)/1e3;for(let l of i){let d=l.rooms.filter(w=>w.points.length>=3),c=[...new Set(d.flatMap(w=>w.points.map($=>s($[0]))))].sort((w,$)=>w-$),h=[...new Set(d.flatMap(w=>w.points.map($=>s($[1]))))].sort((w,$)=>w-$),u=c.length-1,p=h.length-1,f=(w,$)=>w.some(k=>K($,k.points)),m=[];for(let w=0;w<p;w++){m.push([]);for(let $=0;$<u;$++){let k=[(c[$]+c[$+1])/2,(h[w]+h[w+1])/2];m[w].push(f(d,k)&&!f(r,k))}}let _=m.map(w=>w.map(()=>!1)),g=(w,$)=>m[$][w]&&!_[$][w],v=ht(l);for(let w=0;w<p;w++)for(let $=0;$<u;$++){if(!g($,w))continue;let k=$;for(;k+1<u&&g(k+1,w);)k++;let x=w;for(;x+1<p&&Array.from({length:k-$+1},(F,T)=>g($+T,x+1)).every(Boolean);)x++;for(let F=w;F<=x;F++)for(let T=$;T<=k;T++)_[F][T]=!0;let z=c[$]-n,S=c[k+1]+n,A=h[w]-n,P=h[x+1]+n;Math.min(S-z,P-A)<.8||o.push({id:e(o.length),x0:s(z),z0:s(A),x1:s(S),z1:s(P),shape:"gable",axis:S-z>=P-A?"x":"z",eave_a:s(v),eave_b:s(v),pitch_a:t,pitch_b:t,base:s(v),overhang:null})}r.push(...d)}return o}function El(a,e){let t=[e.roomLeft,e.roomRight].map(n=>a.rooms.find(i=>i.id===n)).filter(n=>!!n);return t.length?{bottom:Math.min(...t.map(n=>Tn(a,n))),top:Math.max(...t.map(n=>_e(a,n)+Math.min(Se(a,n),e.height??1/0)))}:{bottom:0,top:Math.min(a.height,e.height??a.height)}}function ms(a,e,t){let n=xt(e,a.rooms,a.walls??[]),i=n&&Hn(t,e,n);if(!n||!i)return null;let o=i.wall,r=Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1]);if(r<1e-6)return null;let s=[(o.b[0]-o.a[0])/r,(o.b[1]-o.a[1])/r],l=o.roomLeft===n.room.id,d=a.rooms.find(U=>U.id===n.room.id||o.free&&U.id===o.roomLeft)??n.room,c=o.free?void 0:a.rooms.find(U=>U.id===(l?o.roomRight:o.roomLeft)),h=l?[-s[1],s[0]]:[s[1],-s[0]],u=Math.min(e.width,r),p=Math.max(0,Math.min(r-u,i.s-u/2)),f=[o.a[0]+s[0]*p,o.a[1]+s[1]*p],m=_e(a,d),_=c?_e(a,c):m,g=Math.min(m,_),v=Math.max(m,_),w={opening:e,room:d,other:c,wall:o,start:f,axis:s,toRoom:h,width:u,low:g,high:v,threshold:e.type==="window"?m:v,ceiling:Math.min(m+Se(a,d),c?_+Se(a,c):1/0)};if((d.wall_offset!=null||d.floor_offset!=null)&&(w.threshold=m),m+e.sill+e.height>w.ceiling+.001&&(w.issue="height"),!e.steps||!c||v-g<.001||e.type==="window")return w;let $=e.steps.side==="room",k=$?d:c,x=$?h:[-h[0],-h[1]],z=_e(a,k),S=z===v,A=$?l?o.left:o.right:l?o.right:o.left,P=e.steps.depth,F=e.steps.count,T=e.steps.offset??0,O=A+T,L=A-o.left-o.right;if(w.issue=w.issue??"fit",!Number.isFinite(P)||P<.1||P>10||!Number.isInteger(F)||F<1||F>30||!Number.isFinite(T)||Math.abs(T)>10||O+P<A+.01)return w;let D=(U,q)=>[f[0]+s[0]*U+x[0]*q,f[1]+s[1]*U+x[1]*q],W=T<0?O:-.005,V=[D(0,W),D(u,W),D(u,O+P),D(0,O+P)],B=[D(.01,Math.min(A,O)+.01),D(u-.01,Math.min(A,O)+.01),D(u-.01,O+P-.01),D(.01,O+P-.01)],J=[D(-.001,L-.001),D(u+.001,L-.001),D(u+.001,A+.001),D(-.001,A+.001)],Z=T<0?[d.points,c.points,J]:[k.points];return B.every((U,q)=>Z.some(ae=>K(U,ae))&&Ac(U,B[(q+1)%B.length],Z).length===0)&&(w.threshold=$?_:m,w.stair={room:k,toward:x,face:O,wallFace:A,back:L,offset:T,count:F,depth:P,recess:S,bay:V},w.issue=m+e.sill+e.height>w.ceiling+.001?"height":void 0),w}function Ac(a,e,t){let n=[0,1],i=e[0]-a[0],o=e[1]-a[1];for(let l of t)l.forEach((d,c)=>{let h=l[(c+1)%l.length],u=h[0]-d[0],p=h[1]-d[1],f=i*p-o*u;if(Math.abs(f)<1e-9)return;let m=((d[0]-a[0])*p-(d[1]-a[1])*u)/f,_=((d[0]-a[0])*o-(d[1]-a[1])*i)/f;m>0&&m<1&&_>=0&&_<=1&&n.push(m)});n.sort((l,d)=>l-d);let r=l=>[a[0]+i*l,a[1]+o*l],s=[];for(let l=1;l<n.length;l++)n[l]-n[l-1]>1e-9&&!t.some(d=>K(r((n[l]+n[l-1])/2),d))&&s.push([r(n[l-1]),r(n[l])]);return s}var Ut=Math.PI/180,Al=1.13,_s=1.72,Ge=.025,jt=.07,Fl=.25;function rt(a,e){let t=[];for(let n of a.floors){if(e&&n.id!==e)continue;let{walls:i}=Me(n.rooms,{exterior:a.settings.wall_exterior,interior:a.settings.wall_interior},n.walls??[]);for(let o of i){if(!o.exterior&&!o.free)continue;let r=o.b[0]-o.a[0],s=o.b[1]-o.a[1],l=Math.hypot(r,s);if(l<.5)continue;let d=s/l,c=-r/l,h=El(n,o),u=h.top-h.bottom,p=o.sources.find(_=>_.room_id===o.roomLeft)?.edge??null,f={floorId:n.id,room:o.roomLeft,edge:p,free:!!o.free},m=(_,g,v,w)=>t.push({key:_,section:null,side:"top",flat:!1,o:g,eu:v,es:[0,1,0],n:w,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[w[0],w[2]],wall:f});m(`wall:${n.id}:${o.id}`,[o.a[0]+d*o.right,n.elevation+h.bottom,o.a[1]+c*o.right],[r/l,0,s/l],[d,0,c]),o.free&&m(`wall:${n.id}:${o.id}:back`,[o.b[0]-d*o.left,n.elevation+h.bottom,o.b[1]-c*o.left],[-r/l,0,-s/l],[-d,0,-c])}}return t}var zt="ground";function Fc(a){let e=[...a.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??a.floors[0]??null}function Rl(a,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],o=Fc(a),r=n[0]*e.u+i[0]*e.v,s=n[2]*e.u+i[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:Ur(o,r,s)):e.base??0;return{key:zt,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Ie(a,e,t=ce(a)){return e.face===zt?Rl(a,e):e.face.startsWith("wall:")?rt(a,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function Il(a,e,t){let n=rt(a,t),i=a.settings.north??0,o=l=>{let d=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((d-180)*Math.PI/180))},r=[...n].sort((l,d)=>o(d)-o(l))[0];if(!r)return null;let s={...Ui(r,e),portrait:!1,rows:1};return s.cols=Math.max(1,Math.floor((r.lu-.8+Ge)/(_s+Ge))),s.u=Math.round((r.lu-(s.cols*_s+(s.cols-1)*Ge))/2*100)/100,s.v=Math.round(Math.max(0,r.ls-Al-.3)*100)/100,s}function bs(a,e){let t=a.floors.flatMap(o=>o.rooms.flatMap(r=>r.points)),n=t.length?Math.max(...t.map(o=>o[0]))+3:0,i=t.length?Math.min(...t.map(o=>o[1])):0;return{id:e,face:zt,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(a.settings.north??0)||0,look:"black",entity:null}}function vs(a){return a.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>ht(n)-ht(t))[0]??null}function ce(a){let e=a.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(v=>{let w=Ml(a,v,v.overhang??e.overhang),$=v.points?.length?ps(v,v.shape==="parapet"?0:Math.max(0,Math.min(w.a,w.b,w.u0,w.u1))):void 0;return Rc(v,w).map(k=>$?{...k,footprint:$}:k)});let t=vs(a);if(!t)return[];let n=t.rooms.flatMap(v=>v.points.map(w=>w[0])),i=t.rooms.flatMap(v=>v.points.map(w=>w[1])),o=a.settings.wall_exterior+e.overhang,r=Math.min(...n)-o,s=Math.max(...n)+o,l=Math.min(...i)-o,d=Math.max(...i)+o,c=ht(t);if(e.type==="flat")return[Tl("main",null,r,l,s,d,c+Fl)];let h=s-r>=d-l,u=e.ridge==="short"?!h:h,p=(u?d-l:s-r)/2,f=p*Math.tan(e.pitch*Ut),m=(v,w,$)=>u?[v,c+$,(l+d)/2+w]:[(r+s)/2+w,c+$,v],[_,g]=u?[r,s]:[l,d];return[-1,1].map(v=>ji(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",m(_,v*p,0),m(g,v*p,0),m(_,0,f),e.pitch,()=>[0,g-_]))}function Rc(a,e){let t=Qe(a),n=Re(a),i=(m,_,g)=>{let[v,w]=t.at(m,_);return[v,g,w]},o=Math.max(0,e.a),r=Math.max(0,e.b),s=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=l-s;if(a.shape==="flat"||a.shape==="parapet"){let m=t.at(s,-o),_=t.at(l,t.w+r);return[Tl(a.id,a.id,Math.min(m[0],_[0]),Math.min(m[1],_[1]),Math.max(m[0],_[0]),Math.max(m[1],_[1]),a.eave_a+Fl)]}if(a.shape==="pent")return[ji(`${a.id}:a`,a.id,"a",i(s,-o,n.y(-o)),i(l,-o,n.y(-o)),i(s,t.w+r,n.y(t.w+r)),a.pitch_a,()=>[0,d])];let c=a.shape==="hip"||a.shape==="pyramid",h=a.shape==="pyramid"?(t.u1-t.u0)/2:c?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,u=c?t.u0+h-s:0,p=c?l-(t.u1-h):0,f=[];if(n.vr>.3){let m=Math.hypot(n.vr+o,n.rh-n.y(-o));f.push(ji(`${a.id}:a`,a.id,"a",i(s,-o,n.y(-o)),i(l,-o,n.y(-o)),i(s,n.vr,n.rh),a.pitch_a,_=>[u*(_/m),d-p*(_/m)]))}if(t.w-n.vr>.3){let m=Math.hypot(t.w+r-n.vr,n.rh-n.y(t.w+r));f.push(ji(`${a.id}:b`,a.id,"b",i(l,t.w+r,n.y(t.w+r)),i(s,t.w+r,n.y(t.w+r)),i(l,n.vr,n.rh),a.pitch_b,_=>[p*(_/m),d-u*(_/m)]))}if(c){let m=n.y(-o),_=n.y(t.w+r),g=[[`${a.id}:c`,"c",i(s,t.w+r,_),i(s,-o,m),i(t.u0+h,n.vr,n.rh)],[`${a.id}:d`,"d",i(l,-o,m),i(l,t.w+r,_),i(t.u1-h,n.vr,n.rh)]];for(let[v,w,$,k,x]of g){let z=Ic(v,a.id,w,$,k,x);z&&f.push(z)}}return f}function Ic(a,e,t,n,i,o){let r=Yn(Gt(i,n));if(r<.3)return null;let s=Pt(Gt(i,n)),l=Gt(o,n),d=l[0]*s[0]+l[1]*s[1]+l[2]*s[2],c=[l[0]-s[0]*d,l[1]-s[1]*d,l[2]-s[2]*d],h=Yn(c);if(h<.3)return null;let u=Pt(c),p=Pt(Ll(s,u));p[1]<0&&(p=[-p[0],-p[1],-p[2]]);let f=Pt([-u[0],0,-u[2]]),m=Math.atan2(u[1],Math.hypot(u[0],u[2]))/Ut;return{key:a,section:e,side:t,flat:!1,o:n,eu:s,es:u,n:p,lu:r,ls:h,pitch:m,span:g=>{let v=Math.min(1,Math.max(0,g/h));return[d*v,r-(r-d)*v]},facing:[f[0],f[2]]}}function ji(a,e,t,n,i,o,r,s){let l=Pt(Gt(i,n)),d=Pt(Gt(o,n)),c=Pt(Ll(l,d));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let h=Pt([-d[0],0,-d[2]]);return{key:a,section:e,side:t,flat:!1,o:n,eu:l,es:d,n:c,lu:Yn(Gt(i,n)),ls:Yn(Gt(o,n)),pitch:r,span:s,facing:[h[0],h[2]]}}function Tl(a,e,t,n,i,o,r){let s=i-t>=o-n,l=s?i-t:o-n,d=s?o-n:i-t;return{key:`${a}:top`,section:e,side:"top",flat:!0,o:[t,r,n],eu:s?[1,0,0]:[0,0,1],es:s?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:d,pitch:0,span:()=>[0,l],facing:s?[0,1]:[1,0]}}function gn(a){let e=a.module_w||Al,t=a.module_h||_s;return a.portrait===!1?[t,e]:[e,t]}function Qn(a){return a.layout?.length?a.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,a.rows)},()=>Math.max(1,a.cols))}function ws(a,e){return a.flat?Math.min(45,Math.max(0,e.tilt??15))*Ut:a.wall?Math.min(90,Math.max(0,e.tilt??0))*Ut:0}function bn(a,e){let[t,n]=gn(e),i=Qn(e),o=Math.max(1,...i),s=(i.length-1)*ys(a,e)+n*Math.cos(ws(a,e));return[o*t+(o-1)*Ge,s]}function ys(a,e){let[,t]=gn(e),n=ws(a,e);return a.wall?t*Math.cos(n)+Ge:a.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+Ge}function bt(a,e,t=!1){let[n,i]=gn(e),o=[],r=ws(a,e),s=i*Math.cos(r),l=ys(a,e),d=Qn(e),c=Math.max(1,...d),h=new Set(e.skip??[]),u=!!a.wall&&n>a.lu+1e-6,p=(m,_,g)=>[a.o[0]+a.eu[0]*m+a.es[0]*_+a.n[0]*g,a.o[1]+a.eu[1]*m+a.es[1]*_+a.n[1]*g,a.o[2]+a.eu[2]*m+a.es[2]*_+a.n[2]*g],f=(m,_)=>{if(a.unbounded)return!0;if(_<-1e-6||_>a.ls+1e-6)return!1;let[g,v]=a.span(_);return m>=g-1e-6&&m<=v+1e-6};return d.forEach((m,_)=>{let g=e.align==="right"?c-m:e.align==="center"?(c-m)/2:0;for(let v=0;v<m;v++){let w=`${_}:${v}`,$=h.has(w);if($&&!t)continue;let k=e.u+(v+g)*(n+Ge),x=e.v+_*l,z=k+n,S=x+(a.flat||a.wall?s:i);if(u){if(!(f((k+z)/2,x)&&f((k+z)/2,S)))continue}else if(![[k,x],[z,x],[z,S],[k,S]].every(([L,D])=>f(L,D)))continue;if(a.footprint&&!_l(a.footprint,[[k,x],[z,x],[z,S],[k,S]].map(([L,D])=>{let W=p(L,D,0);return[W[0],W[2]]})))continue;if(a.wall&&r>.001){let L=jt+i*Math.sin(r),[D,W]=e.flip?[L,jt]:[jt,L],V=[p(k,x,D),p(z,x,D),p(z,S,W),p(k,S,W)],B=e.flip?x:S,J=[k+.05,z-.05].map(Z=>[p(Z,B,0),p(Z,B,L)]);o.push({corners:V,posts:J,cell:w,skipped:$});continue}if(!a.flat){o.push({corners:[p(k,x,jt),p(z,x,jt),p(z,S,jt),p(k,S,jt)],posts:[],cell:w,skipped:$});continue}let A=.15,P=A+i*Math.sin(r),[F,T]=e.flip?[S,x]:[x,S],O=[p(k,F,A),p(z,F,A),p(z,T,P),p(k,T,P)];o.push({corners:O,posts:[k+.05,z-.05].flatMap(L=>[[p(L,F,0),p(L,F,A)],[p(L,T,0),p(L,T,P)]]),cell:w,skipped:$})}}),o}function Gi(a,e){let t=[a.eu[0],a.eu[2]],n=[a.es[0],a.es[2]],i=[e[0]-a.o[0],e[1]-a.o[2]],o=t[0]*n[1]-t[1]*n[0];if(Math.abs(o)<1e-9)return null;let r=(i[0]*n[1]-i[1]*n[0])/o,s=(t[0]*i[1]-t[1]*i[0])/o;if(s<0||s>a.ls)return null;let[l,d]=a.span(s);return r>=l&&r<=d&&Ms(a,r,s)?{u:r,s}:null}function Dl(a,e){let t=null;for(let n of a){if(n.wall){let r=[e[0]-n.o[0],e[1]-n.o[2]],s=r[0]*n.eu[0]+r[1]*n.eu[2],l=r[0]*n.n[0]+r[1]*n.n[2];if(s>=0&&s<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:s,s:Number.NaN};s>=0&&s<=n.lu&&l>.35&&l<=.8&&!t&&(t={face:n,u:s,s:Number.NaN,y:-1/0});continue}let i=Gi(n,e);if(!i)continue;let o=n.o[1]+n.es[1]*i.s;(!t||o>t.y)&&(t={face:n,...i,y:o})}return t?{face:t.face,u:t.u,s:t.s}:null}function vn(a,e){if(a.unbounded)return{u:e.u,v:e.v};let[t,n]=bn(a,e),i=r=>Math.floor(r*100+1e-6)/100;return{u:a.wall&&t>a.lu?Math.round((a.lu-t)/2*100)/100:i(Math.min(Math.max(0,e.u),Math.max(0,a.lu-t))),v:i(Math.min(Math.max(0,e.v),Math.max(0,a.ls-n)))}}function Ui(a,e){let t={id:e,face:a.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:a.flat?15:null,flip:!1,entity:null,look:"black"},[n]=gn(t),i=.4,o=ys(a,t),[r,s]=a.span(a.ls/2);for(t.cols=Math.max(1,Math.floor((s-r-2*i+Ge)/(n+Ge))),t.rows=Math.max(1,Math.min(4,Math.floor((a.ls-2*i)/o)));t.cols>1&&bt(a,{...t,u:gs(a,t),v:i}).length<t.rows*t.cols;)t.cols--;return t.u=gs(a,t),t.v=i,t}function ks(a,e){let t={...e,face:a.key,tilt:a.flat?e.tilt??15:null,rotation:null,flip:!1};return a.wall&&Object.assign(t,Tc(a,t)),t.u=gs(a,t),t.v=.4,{...t,...vn(a,t)}}function Tc(a,e){let t=i=>Math.floor((a.lu+Ge+1e-6)/(gn({...e,portrait:i})[0]+Ge)),n=e.portrait===!1&&t(!1)<1?!0:e.portrait;return{portrait:n,cols:Math.max(1,Math.min(Math.max(...Qn(e)),t(n!==!1))),layout:void 0,skip:void 0}}function gs(a,e){let[t]=gn(e),n=e.cols*t+(e.cols-1)*Ge;return Math.round((a.lu-n)/2*100)/100}function $s(a,e){let t=(Math.atan2(a.facing[0],-a.facing[1])/Ut-e+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(t/45)%8]}function Zi(a,e){let t=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/Ut-e+720)%360,o=Math.cos((i-180)*Ut);return n.lu*n.ls*(1.2+o)};return[...a].sort((n,i)=>t(i)-t(n))[0]??null}function Gt(a,e){return[a[0]-e[0],a[1]-e[1],a[2]-e[2]]}function Yn(a){return Math.hypot(a[0],a[1],a[2])}function Pt(a){let e=Yn(a)||1;return[a[0]/e,a[1]/e,a[2]/e]}function Ll(a,e){return[a[1]*e[2]-a[2]*e[1],a[2]*e[0]-a[0]*e[2],a[0]*e[1]-a[1]*e[0]]}var Wl=.78,Ol=1.18;function wn(a){return{id:a.id,face:a.face,u:a.u,v:a.v,rows:1,cols:1,portrait:!0,module_w:a.w||Wl,module_h:a.h||Ol}}function Hl(a,e){let t=bt(a,wn(e))[0];if(!t)return null;let n=i=>[i[0]-a.n[0]*.05,i[1]-a.n[1]*.05,i[2]-a.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function xs(a,e){let t=Wl,n=Ol,[i,o]=a.span(a.ls/2);return{id:e,face:a.key,u:Math.round((i+o-t)/2*100)/100,v:Math.round(Math.max(0,Math.min(a.ls-n,a.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function ei(a,e,t){let n=Rl(a,e),[i,o]=bn(n,e),r=n.eu[0]*(e.u+i/2)+n.es[0]*(e.v+o/2),s=n.eu[2]*(e.u+i/2)+n.es[2]*(e.v+o/2),l=t*Math.PI/180,d=[Math.cos(l),Math.sin(l)],c=[-Math.sin(l),Math.cos(l)],h=r*d[0]+s*d[1]-i/2,u=r*c[0]+s*c[1]-o/2,p=f=>Math.round(f*100)/100;return{u:p(h),v:p(u),rotation:(Math.round(t)%360+360)%360}}function ti(a,e){let[t,n]=bn(a,e);return[a.o[0]+a.eu[0]*(e.u+t/2)+a.es[0]*(e.v+n/2),a.o[2]+a.eu[2]*(e.u+t/2)+a.es[2]*(e.v+n/2)]}function Ss(a,e,t){let n=t[0]*a.n[0]+t[1]*a.n[1]+t[2]*a.n[2];if(Math.abs(n)<1e-6)return null;let i=((a.o[0]-e[0])*a.n[0]+(a.o[1]-e[1])*a.n[1]+(a.o[2]-e[2])*a.n[2])/n;if(i<=0)return null;let o=[e[0]+t[0]*i-a.o[0],e[1]+t[1]*i-a.o[1],e[2]+t[2]*i-a.o[2]],r=o[0]*a.eu[0]+o[1]*a.eu[1]+o[2]*a.eu[2],s=o[0]*a.es[0]+o[1]*a.es[1]+o[2]*a.es[2];return{t:i,u:r,s}}function Ms(a,e,t){if(a.unbounded)return!0;if(t<0||t>a.ls)return!1;let[n,i]=a.span(t);return e<n||e>i?!1:!a.footprint||mn(a.footprint,[a.o[0]+a.eu[0]*e+a.es[0]*t,a.o[2]+a.eu[2]*e+a.es[2]*t])}function Vl(a,e,t,n){for(let i of bt(a,e)){let o=i.corners.map(c=>{let h=[c[0]-a.o[0],c[1]-a.o[1],c[2]-a.o[2]];return[h[0]*a.eu[0]+h[1]*a.eu[1]+h[2]*a.eu[2],h[0]*a.es[0]+h[1]*a.es[1]+h[2]*a.es[2]]}),[r,s]=[Math.min(...o.map(c=>c[0])),Math.max(...o.map(c=>c[0]))],[l,d]=[Math.min(...o.map(c=>c[1])),Math.max(...o.map(c=>c[1]))];if(t>=r-.05&&t<=s+.05&&n>=l-.05&&n<=d+.05)return!0}return!1}var Ue=.03,qi=a=>a&&a!=="none"?a:null;function zs(a,e=t=>qi(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of a.floors)for(let i of n.furniture){let o=e(i);if(i.type==="meter")t.grid??=o,t.gridExport??=qi(i.export);else if(i.type==="inverter"&&o&&!t.solar.includes(o))t.solar.push(o);else if(i.type==="home_battery"){o&&!t.battery.includes(o)&&t.battery.push(o);let r=qi(i.charge);r&&!t.charge.includes(r)&&t.charge.push(r),(o||r)&&t.batteries.push({power:o,charge:r});let s=qi(i.soc);s&&!t.soc.includes(s)&&t.soc.push(s)}}return t}function Es(a){for(let e of a.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return a.energy.meter}function jl(a){let e=n=>a.energy_sources?.find(i=>i.type===n)?.stat_energy_from??null,t=n=>n&&n.startsWith("sensor.")?n:null;return{gas:t(e("gas")),water:t(e("water"))}}function Xi(a,e,t="power"){if(!e)return null;let n=a.entities?.[e]?.device_id;if(!n)return null;let i=Object.keys(a.states).filter(s=>s.startsWith("sensor.")&&a.entities?.[s]?.device_id===n&&a.states[s]?.attributes.device_class===t);if(i.length<=1)return i[0]??null;let o=i.filter(s=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(s)),r=e.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return o.find(s=>r&&s.includes(r))??o[0]??i[0]}function Gl(a,e){let t={};for(let n of e.energy_sources??[])if(n.type==="grid"){let i=n.flow_from?.[0]?.stat_energy_from??n.flow_to?.[0]?.stat_energy_to,o=Xi(a,i);o&&!t.grid&&(t.grid=o)}else if(n.type==="solar"){let i=Xi(a,n.stat_energy_from);i&&!t.solar&&(t.solar=i)}else if(n.type==="battery"){let i=Xi(a,n.stat_energy_from??n.stat_energy_to);i&&!t.battery&&(t.battery=i);let o=Xi(a,n.stat_energy_from??n.stat_energy_to,"battery");o&&!t.battery_soc&&(t.battery_soc=o)}return t}var Dc=.07;function vt(a,e=!1){if(!a)return null;let t=Number(a.state);if(!Number.isFinite(t))return null;let n=String(a.attributes.unit_of_measurement??"W"),i=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-i:i}function Lc(a,e){return e.startsWith("sensor.")&&a.states[e]?.attributes.device_class==="power"}function Ul(a,e){if(Lc(a,e))return e;let t=a.entities?.[e]?.device_id;if(!t)return null;let n=ya(a,t),i=n?Ot(a,e):null;return Ho(a,t).find(o=>o!==e&&(!n||i!==null&&Ot(a,o)===i))??null}function Zl(a,e,t,n=zs(e)){let i=e.energy,o=i.grid??n.grid,r=o?vt(a.states[o],i.grid_invert):null;if(!i.grid&&n.gridExport){let m=Math.max(0,vt(a.states[n.gridExport])??0);r=Math.max(0,r??0)-m}let s=i.solar?vt(a.states[i.solar]):null;if(!i.solar&&n.solar.length){let m=n.solar.map(_=>vt(a.states[_])).filter(_=>_!==null);s=m.length?m.reduce((_,g)=>_+g,0):null}let l=i.battery?vt(a.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let m=n.batteries.map(_=>{if(_.charge){let g=_.power?Math.max(0,vt(a.states[_.power])??0):0,v=Math.max(0,vt(a.states[_.charge])??0);return g-v}return _.power?vt(a.states[_.power],i.battery_invert):null}).filter(_=>_!==null);l=m.length?m.reduce((_,g)=>_+g,0):null}let c=(i.battery_soc?[i.battery_soc]:n.soc).map(m=>Number(a.states[m]?.state)).filter(m=>Number.isFinite(m)),h=c.length?c.reduce((m,_)=>m+_,0)/c.length:NaN,u=i.tariff?a.states[i.tariff]:void 0,p=Number(u?.state),f=i.consumption?vt(a.states[i.consumption]):null;return f!==null?f=Math.max(0,f):r!==null||s!==null||l!==null?f=Math.max(0,(r??0)+Math.max(0,s??0)+(l??0)):t.length&&(f=t.reduce((m,_)=>m+_.power,0)),{grid:r,solar:s===null?null:Math.max(0,s),battery:l,soc:Number.isFinite(h)?h:null,tariff:u&&Number.isFinite(p)?{value:p,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:f}}function qt(a,e){return a.pos.push(e),a.adj.push([]),a.pos.length-1}function Zt(a,e,t){let n=Math.hypot(a.pos[e][0]-a.pos[t][0],a.pos[e][1]-a.pos[t][1]);a.adj[e].push({to:t,w:n}),a.adj[t].push({to:e,w:n})}function Wc(a,e){let t=a.length,n=a.map((i,o)=>{let r=a[(o+1)%t],s=r[0]-i[0],l=r[1]-i[1],d=Math.hypot(s,l)||1,c=-l/d,h=s/d;return{p:[i[0]+c*e[o],i[1]+h*e[o]],d:[s/d,l/d],n:[c,h]}});return a.map((i,o)=>{let r=n[(o-1+t)%t],s=n[o],l=r.d[0]*s.d[1]-r.d[1]*s.d[0];if(Math.abs(l)<1e-6)return[i[0]+s.n[0]*e[o],i[1]+s.n[1]*e[o]];let d=((s.p[0]-r.p[0])*s.d[1]-(s.p[1]-r.p[1])*s.d[0])/l;return[r.p[0]+r.d[0]*d,r.p[1]+r.d[1]*d]})}function Oc(a){return me(a.points)>=0?{pts:a.points,flipped:!1}:{pts:[...a.points].reverse(),flipped:!0}}function As(a,e,t){let n={pos:[],adj:[],rings:new Map},{walls:i}=Me(a.rooms,{exterior:e,interior:t},a.walls??[]);for(let o of a.rooms){if(o.points.length<3)continue;let{pts:r,flipped:s}=Oc(o),l=r.length,d=r.map((u,p)=>{let f=s?(l-2-p+l)%l:p,m=i.some(_=>!_.exterior&&_.sources.some(g=>g.room_id===o.id&&g.edge===f));return Dc+(m?t/2:0)}),c=Wc(r,d).map(u=>qt(n,u)),h=c.map((u,p)=>[u,c[(p+1)%l]]);for(let[u,p]of h)Zt(n,u,p);n.rings.set(o.id,h)}for(let o of i){if(o.exterior||!o.roomLeft||!o.roomRight)continue;let r=[(o.a[0]+o.b[0])/2,(o.a[1]+o.b[1])/2],s=Yi(n,o.roomLeft,r),l=Yi(n,o.roomRight,r);s!==null&&l!==null&&Zt(n,s,l)}return n}function Yi(a,e,t){let n=a.rings.get(e);if(!n)return null;let i=null;for(let r of n){let s=a.pos[r[0]],l=a.pos[r[1]],d=l[0]-s[0],c=l[1]-s[1],h=d*d+c*c||1,u=Math.min(1,Math.max(0,((t[0]-s[0])*d+(t[1]-s[1])*c)/h)),p=[s[0]+d*u,s[1]+c*u],f=Math.hypot(t[0]-p[0],t[1]-p[1]);(!i||f<i.d)&&(i={seg:r,q:p,d:f})}if(!i)return null;let o=qt(a,i.q);return Zt(a,o,i.seg[0]),Zt(a,o,i.seg[1]),o}function Qi(a,e,t){let n=a.pos[t],i=Yi(a,e.id,n);if(i===null)return!1;let o=a.pos[i],r=a.pos[a.adj[i][0].to],s=a.pos[a.adj[i][1].to],l=Math.hypot(s[0]-r[0],s[1]-r[1])||1,d=[(s[0]-r[0])/l,(s[1]-r[1])/l],c=(n[0]-o[0])*d[0]+(n[1]-o[1])*d[1],h=(n[1]-o[1])*d[0]-(n[0]-o[0])*d[1];if(Math.abs(c)<.01||Math.abs(h)<.01)return Zt(a,t,i),!0;let u=[o[0]+d[0]*c,o[1]+d[1]*c],p=[o[0]-d[1]*h,o[1]+d[0]*h],f=qt(a,K(p,e.points)||!K(u,e.points)?p:u);return Zt(a,i,f),Zt(a,f,t),!0}function ii(a,e){let t=a.rooms.filter(o=>o.points.length>=3),n=t.find(o=>K(e,o.points));if(n)return n;let i=null;for(let o of t)for(let r of o.points){let s=Math.hypot(e[0]-r[0],e[1]-r[1]);(!i||s<i.d)&&(i={room:o,d:s})}return i?.room??null}function ql(a,e){let t=a.pos.map(()=>1/0),n=a.pos.map(()=>-1),i=a.pos.map(()=>!1);for(t[e]=0;;){let o=-1;for(let r=0;r<t.length;r++)!i[r]&&t[r]<1/0&&(o<0||t[r]<t[o])&&(o=r);if(o<0)break;i[o]=!0;for(let{to:r,w:s}of a.adj[o])t[o]+s<t[r]-1e-9&&(t[r]=t[o]+s,n[r]=o)}return{dist:t,prev:n}}function Cl(a,e){return a.every(t=>e[t].kind==="battery")?"battery":a.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var Bl=new WeakMap;function Hc(a,e){let t=Es(a),n=a.floors.find(c=>c.id===t.floor_id),i=[],{wall_exterior:o,wall_interior:r}=a.settings,s=new Map,l=new Map;e.forEach((c,h)=>l.set(c.floorId,[...l.get(c.floorId)??[],h]));let d=a.floors.filter(c=>l.has(c.id));for(let c of d){if(c.id===n.id)continue;let h=c.elevation>n.elevation,u=l.get(c.id),p=Cl(u,e);i.push({floorId:n.id,a:[t.x,Ue,t.z],b:[t.x,h?n.height:-.2,t.z],dist:0,members:u,kind:p});let f=Math.abs(c.elevation-n.elevation);i.push({floorId:c.id,a:[t.x,h?-.2:c.height,t.z],b:[t.x,Ue,t.z],dist:f,members:u,kind:p}),s.set(c.id,f+.25)}for(let c of d){let h=As(c,o,r),u=ii(c,[t.x,t.z]);if(!u)continue;let p=qt(h,[t.x,t.z]);if(!Qi(h,u,p))continue;let f=[];for(let w of l.get(c.id)){let $=e[w],k=ii(c,[$.x,$.z]);if(!k)continue;let x=qt(h,[$.x,$.z]);Qi(h,k,x)&&f.push({node:x,member:w})}let{dist:m,prev:_}=ql(h,p),g=new Map;for(let w of f)if(Number.isFinite(m[w.node]))for(let $=w.node;_[$]>=0;$=_[$]){let k=_[$],x=`${k}>${$}`,z=g.get(x)??{a:k,b:$,members:[]};z.members.push(w.member),g.set(x,z)}let v=s.get(c.id)??0;for(let{a:w,b:$,members:k}of g.values()){let x=h.pos[w],z=h.pos[$],S=Cl(k,e);i.push({floorId:c.id,a:[x[0],Ue,x[1]],b:[z[0],Ue,z[1]],dist:v+m[w],members:k,kind:S})}}return i}function Xl({building:a,consumers:e,summary:t,battery:n,fieldPower:i,devicePower:o}){let r=Es(a);if(!r)return[];let s=a.floors.find(P=>P.id===r.floor_id);if(!s)return[];let l=P=>o?.get(P),d=Ps(a,"inverter"),c=Ps(a,"home_battery");!c.length&&n&&c.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let h=P=>{let F=null;for(let T of d)T.floorId===P.floorId&&(!F||Math.hypot(T.x-P.x,T.z-P.z)<Math.hypot(F.x-P.x,F.z-P.z))&&(F=T);return F},u=P=>l(P.id)??(c.length===1?t.battery??0:0),p=new Map;for(let P of c){let F=h(P);F&&p.set(P.id,F)}let f=e.map(P=>({floorId:P.floorId,x:P.x,z:P.z,kind:P.wallbox?"wallbox":"consumer",power:P.power}));for(let P of c)!p.has(P.id)&&t.battery!==null&&f.push({floorId:P.floorId,x:P.x,z:P.z,kind:"battery",power:Math.abs(u(P))});let m=`${r.floor_id}:${r.x},${r.z}|${f.map(P=>`${P.floorId}:${P.x},${P.z}:${P.kind}`).join(";")}`,_=Bl.get(a);_||Bl.set(a,_=new Map);let g=_.get(m);g||(g=Hc(a,f),_.clear(),_.set(m,g));let v=g.map(P=>({floorId:P.floorId,a:P.a,b:P.b,dist:P.dist,power:P.members.reduce((F,T)=>F+f[T].power,0),kind:P.kind})),w=t.grid!==null?Fs(a):null,$=a.settings.roof.cables??[],k=P=>$.find(F=>F.id===P),x=(P,F)=>P.map(T=>({...T,key:F}));if(w){let P=t.grid>=0,F=k("grid"),T=F?Ji(a,F,[w.end[0],s.elevation+Math.max(Ue,w.height),w.end[1]],[r.x,s.elevation+.4+1.1,r.z]):[...w.height>.05?[[w.end[0],w.height,w.end[1]]]:[],[w.end[0],Ue,w.end[1]],[w.wall[0],Ue,w.wall[1]],[r.x,Ue,r.z]],O=F?ni(a,P?T:[...T].reverse(),Math.abs(t.grid),P?"grid":"export",s):Yl(s.id,P?T:[...T].reverse(),Math.abs(t.grid),P?"grid":"export",0);v.push(...x(O,"grid"))}if(t.battery!==null&&t.battery>0)for(let P of v)P.kind==="battery"&&([P.a,P.b]=[P.b,P.a]);let z=a.settings.roof.solar??[],S=a.settings.roof.strings??[],A=new Map;if(i&&z.length){let P=[...ce(a),...rt(a)];for(let F of z){let T=i.get(F.id)??0,O=F.string?S.find(Z=>Z.id===F.string)?.inverter:null,L=O?d.find(Z=>Z.id===O)??null:null;if(!L&&d.length){let Z=Ie(a,F,P),U=Z?ti(Z,F):[F.u,F.v];L=d.reduce((q,ae)=>!q||Math.hypot(ae.x-U[0],ae.z-U[1])<Math.hypot(q.x-U[0],q.z-U[1])?ae:q,null)}L&&A.set(L.id,(A.get(L.id)??0)+T);let D=L??{floorId:r.floor_id,x:r.x,z:r.z},W=L?1.1+L.h:1.5,V=k(`solar:${F.id}`),B=V?Vc(a,F):null,J=a.floors.find(Z=>Z.id===D.floorId);V&&B&&J?v.push(...x(ni(a,Ji(a,V,B,[D.x,J.elevation+W,D.z]),T,"solar",J),`solar:${F.id}`)):v.push(...x(Bc(a,F,T,D,W),`solar:${F.id}`))}}else t.solar!==null&&!d.length&&v.push({floorId:s.id,a:[r.x+.08,s.height+.6,r.z+.08],b:[r.x+.08,Ue,r.z+.08],dist:0,power:t.solar,kind:"solar"});for(let P of d){let F=1.1+P.h,T=c.filter(D=>p.get(D.id)===P),O=l(P.id);if(O===void 0){O=A.get(P.id)??(d.length===1?t.solar??0:0);for(let D of T)O+=u(D)}let L=a.floors.find(D=>D.id===P.floorId);if(t.solar!==null||t.battery!==null){let D=k(`inv:${P.id}`),W=D&&L?ni(a,Ji(a,D,[P.x,L.elevation+F,P.z],[r.x,s.elevation+1.5,r.z]),Math.max(0,O),"inverter",L):Kl(a,P,F,{floorId:r.floor_id,x:r.x,z:r.z},1.5,Math.max(0,O),"inverter",0);v.push(...x(W,`inv:${P.id}`))}for(let D of T){let W=u(D);if(t.battery===null&&l(D.id)===void 0)continue;let V=D.variant==="wall"?.5+D.h:.9,B=k(`bat:${D.id}`),J=B&&L?ni(a,Ji(a,B,[P.x,L.elevation+F-.1,P.z],[D.x,L.elevation+V,D.z]),Math.abs(W),"battery",L):Kl(a,P,F-.1,D,V,Math.abs(W),"battery",0);v.push(...x(W<=0?J:J.map(Z=>({...Z,a:Z.b,b:Z.a})).reverse(),`bat:${D.id}`))}}return v}function Fs(a){let e=Es(a),t=e?a.floors.find(p=>p.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:i}=a.settings,{walls:o}=Me(t.rooms,{exterior:n,interior:i},t.walls??[]),r=Ps(a,"grid_point")[0],s=o.filter(p=>p.exterior);if(r){let p=null;for(let _ of s){let g=_.b[0]-_.a[0],v=_.b[1]-_.a[1],w=r.x-e.x,$=r.z-e.z,k=w*v-$*g;if(Math.abs(k)<1e-9)continue;let x=((_.a[0]-e.x)*v-(_.a[1]-e.z)*g)/k,z=((_.a[0]-e.x)*$-(_.a[1]-e.z)*w)/k;if(x<=0||x>1||z<0||z>1||p&&x>=p.t)continue;let S=Math.hypot(g,v)||1;p={q:[e.x+w*x,e.z+$*x],out:[v/S,-g/S],t:x}}let f=p?[p.q[0]+p.out[0]*(n/2+.05),p.q[1]+p.out[1]*(n/2+.05)]:[e.x,e.z],m=a.floors.flatMap(_=>_.furniture).find(_=>_.id===r.id)?.mount_y??0;return{floorId:t.id,wall:f,end:[r.x,r.z],height:Math.max(0,m)}}let l=null;for(let p of s){let f=p.b[0]-p.a[0],m=p.b[1]-p.a[1],_=f*f+m*m||1,g=Math.min(1,Math.max(0,((e.x-p.a[0])*f+(e.z-p.a[1])*m)/_)),v=[p.a[0]+f*g,p.a[1]+m*g],w=Math.hypot(e.x-v[0],e.z-v[1]),$=Math.sqrt(_);(!l||w<l.d)&&(l={q:v,out:[m/$,-f/$],d:w})}if(!l)return null;let{q:d,out:c}=l,h=0;for(let p of a.floors)for(let f of p.outdoor??[]){let m=f.points.length;for(let _=0;_<m;_++){let g=f.points[_],v=f.points[(_+1)%m],w=v[0]-g[0],$=v[1]-g[1],k=c[0]*$-c[1]*w;if(Math.abs(k)<1e-9)continue;let x=((g[0]-d[0])*$-(g[1]-d[1])*w)/k,z=((g[0]-d[0])*c[1]-(g[1]-d[1])*c[0])/k;x>0&&z>=0&&z<=1&&(h=Math.max(h,Math.min(15,x)))}}let u=h>n+1?h:n+2.5;return{floorId:t.id,wall:[d[0]+c[0]*(n/2+.05),d[1]+c[1]*(n/2+.05)],end:[d[0]+c[0]*u,d[1]+c[1]*u],height:0}}function Ps(a,e){let t=[];for(let n of a.floors)for(let i of n.furniture)i.type===e&&t.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return t}var Nl=new WeakMap;function Jl(a,e,t,n){let i=`${e.id}:${t.join(",")}>${n.join(",")}`,o=Nl.get(a);o||Nl.set(a,o=new Map);let r=o.get(i);if(r)return r;let{wall_exterior:s,wall_interior:l}=a.settings,d=As(e,s,l),c=[t,n],h=ii(e,t),u=ii(e,n);if(h&&u){let p=qt(d,t),f=qt(d,n);if(Qi(d,h,p)&&Qi(d,u,f)){let{dist:m,prev:_}=ql(d,p);if(Number.isFinite(m[f])){c.length=0;for(let g=f;g>=0;g=_[g])c.unshift(d.pos[g])}}}return o.set(i,c),c}function Kl(a,e,t,n,i,o,r,s){let l=a.floors.find(h=>h.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let d=Jl(a,l,[e.x,e.z],[n.x,n.z]),c=[[e.x,t,e.z],...d.map(h=>[h[0],Ue,h[1]]),[n.x,i,n.z]];return Yl(l.id,c,o,r,s)}function Yl(a,e,t,n,i){let o=[];for(let r=0;r+1<e.length;r++){let s=e[r],l=e[r+1],d=Math.hypot(l[0]-s[0],l[1]-s[1],l[2]-s[2]);d<1e-4||(o.push({floorId:a,a:s,b:l,dist:i,power:t,kind:n}),i+=d)}return o}function Ji(a,e,t,n){let o=(a.floors.find(r=>r.id===e.floor_id)?.elevation??0)+Math.max(Ue,e.height);return[t,...e.points.map(r=>[r[0],o,r[1]]),n]}function Vc(a,e){let t=Ie(a,e,[...ce(a),...rt(a)]);if(!t)return null;let[n,i]=bn(t,e),o=e.u+n/2,r=t.unbounded?e.v+i/2:e.v;return[t.o[0]+t.eu[0]*o+t.es[0]*r,t.o[1]+t.eu[1]*o+t.es[1]*r,t.o[2]+t.eu[2]*o+t.es[2]*r]}function Cc(a,e,t){let{wall_exterior:n,wall_interior:i}=a.settings,o=As(e,n,i),r=ii(e,t),s=r?Yi(o,r.id,t):null;return s===null?t:o.pos[s]}function ni(a,e,t,n,i){let o=[...a.floors].sort((d,c)=>d.elevation-c.elevation),r=d=>{let c=i;for(let h of o)d>=h.elevation-.01&&(c=h);return c},s=[],l=0;for(let d=0;d+1<e.length;d++){let c=e[d],h=e[d+1];if(Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2])<1e-4)continue;let p=[];if(Math.abs(h[1]-c[1])>.01){let f=Math.min(c[1],h[1]),m=Math.max(c[1],h[1]);for(let _ of o)_.elevation>f+.01&&_.elevation<m-.01&&p.push(_.elevation);h[1]<c[1]&&p.reverse()}for(let f of[...p,h[1]]){let m=(f-c[1])/(h[1]-c[1]||1),_=Math.abs(h[1]-c[1])>.01?[c[0]+(h[0]-c[0])*m,f,c[2]+(h[2]-c[2])*m]:h,g=r((c[1]+_[1])/2),v=Math.hypot(_[0]-c[0],_[1]-c[1],_[2]-c[2]);v>1e-4&&s.push({floorId:g.id,a:[c[0],c[1]-g.elevation,c[2]],b:[_[0],_[1]-g.elevation,_[2]],dist:l,power:t,kind:n}),l+=v,c=_}}return s}function Bc(a,e,t,n,i){let o=[...ce(a),...rt(a)],r=Ie(a,e,o),s=a.floors.find(_=>_.id===n.floorId);if(!r||!s)return[];let[l,d]=bn(r,e),c=(_,g)=>[r.o[0]+r.eu[0]*_+r.es[0]*g,r.o[1]+r.eu[1]*_+r.es[1]*g,r.o[2]+r.eu[2]*_+r.es[2]*g],h=e.u+l/2,u=s.elevation+Ue,p=[],f;if(r.unbounded){let _=c(h,e.v+d/2);f=[_[0],u,_[2]],p.push(f)}else if(r.wall){let _=c(h,e.v);f=[_[0],u,_[2]],p.push(_,f)}else{let _=c(h,e.v),g=vs(a)??s,v=Math.max(s.elevation+.5,Math.min(_[1]-.25,g.elevation+g.height-.12));f=[_[0],v,_[2]],p.push(_)}let m=Cc(a,s,[f[0],f[2]]);p.push([m[0],f[1],m[1]]),Math.abs(f[1]-u)>.05&&p.push([m[0],u,m[1]]);for(let _ of Jl(a,s,m,[n.x,n.z]).slice(1))p.push([_[0],u,_[1]]);return p.push([n.x,s.elevation+i,n.z]),ni(a,p,t,"solar",s)}function Ql(a,e){let t=a.floors.find(s=>s.id===e.floor_id);if(!t)return null;if(e.kind==="pergola"){let s=t.outdoor?.find(l=>l.id===e.id&&l.type==="pergola");return s?{floor:t,points:s.points,height:(l,d)=>yt(t)+(s.offset??0)+(s.height??wt.pergola)-sn(s,l,d)}:null}let n=a.settings.roof.sections?.find(s=>s.id===e.id);if(!n)return null;let i=n.points??[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]],o=Bt(n,{u0:0,u1:0,a:0,b:0}),r=n.shape==="flat"||n.shape==="parapet";return{floor:t,points:i,height:(s,l)=>{let[d,c]=Kt(n,s,l);return(r?n.eave_a:Nt(o,d,c)??Re(n).y(c))-(r||n.open?0:_n)-t.elevation}}}function Rs(a,e,t){let i=(a(e+.001,t)-a(e-.001,t))/.002,o=(a(e,t+.001)-a(e,t-.001))/(2*.001),r=Math.hypot(i,1,o);return{rotation_x:-Math.asin(o/r)*180/Math.PI,rotation_z:Math.atan2(i,1)*180/Math.PI}}function ed(a,e){for(let t of e.floors)for(let n of t.furniture){if(!n.surface_binding)continue;let i=Ql(e,n.surface_binding),o=a.floors.find(d=>d.id===t.id)?.furniture.find(d=>d.id===n.id),r=o?.surface_binding?Ql(a,o.surface_binding):null,s=d=>{if(o)for(let c of["x","z","rotation","rotation_x","rotation_z","mount_y"])Object.assign(n,{[c]:o[c]});n.surface_binding=null,n.binding_warning=d};if(!i||i.floor.id!==t.id){s("surface_missing");continue}if(r&&o){let d=r.points,c=i.points,h=c[0][0]-d[0][0],u=c[0][1]-d[0][1];d.length===c.length&&d.every((p,f)=>Math.abs(c[f][0]-p[0]-h)<1e-6&&Math.abs(c[f][1]-p[1]-u)<1e-6)&&(n.x=o.x+h,n.z=o.z+u)}if(!K([n.x,n.z],i.points)){s("surface_outside");continue}let l=i.height(n.x,n.z)-ye(t,n.x,n.z)-n.h;if(!Number.isFinite(l)||l<0||l>10){s("surface_height");continue}Object.assign(n,Rs(i.height,n.x,n.z),{rotation:0,mount_y:l,binding_warning:null})}}function eo(a){return`${a.roof?"roof":a.pergola?"pergola":"room"}:${a.id}`}function td(a,e,t,n){let[i,o,r]=Ne[e.type],s=a.roof,l=s?Bt(s,{u0:0,u1:0,a:0,b:0}):null;return Si(a,e.rows,e.cols).map(([d,c])=>{let h={id:n(),type:e.type,x:d,z:c,rotation:0,w:i,d:o,h:r,variant:null,entity:e.entity??"none",power:null},u=null;if(s&&l){let[p,f]=Kt(s,d,c),m=s.shape==="flat"||s.shape==="parapet";u=(m?s.eave_a:Nt(l,p,f)??Re(s).y(f))-(m||s.open?0:_n)-t.elevation}else if(a.pergola){let p=a.pergola;u=yt(t)+(p.offset??0)+(p.height??wt.pergola)-sn(p,d,c)}if(u!==null&&(h.surface_binding={kind:s?"roof":"pergola",id:a.id,floor_id:t.id},Object.assign(h,Rs((f,m)=>{if(s&&l){let[g,v]=Kt(s,f,m),w=s.shape==="flat"||s.shape==="parapet";return(w?s.eave_a:Nt(l,g,v)??Re(s).y(v))-(w||s.open?0:_n)-t.elevation}let _=a.pergola;return yt(t)+(_.offset??0)+(_.height??wt.pergola)-sn(_,f,m)},d,c)),h.mount_y=Math.round((u-ye(t,d,c)-r)*1e3)/1e3,!Number.isFinite(h.mount_y)||h.mount_y<0||h.mount_y>10))throw new Error("Invalid ceiling mounting height");return h})}var id=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Nc={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},Kc={back:0,right:90,front:180,left:270};function od(a,e,t){let n=xe(a.points),i=n.x1-n.x0,o=n.z1-n.z0,r=Nc[e],s=[],l=(c,h,u,p,f)=>{let[m,_,g]=f??Ne[c];s.push({id:t(),type:c,x:nd(h),z:nd(u),rotation:p,w:m,d:_,h:g,variant:null,entity:null,power:null})},d=.02;for(let c of r.rows){let h=c.items.map(_=>({type:_.type,size:_.size??Ne[_.type]})),u=c.wall==="back"||c.wall==="front"?i:o,p=[],f=0;for(let _ of h){if(f+_.size[0]>u-.1)break;p.push(_),f+=_.size[0]}let m=c.align==="start"?.05:c.align==="end"?u-f-.05:(u-f)/2;for(let _ of p){let[g,v]=_.size,w=m+g/2,$=v/2+d;c.wall==="back"?l(_.type,n.x0+w,n.z0+$,0,_.size):c.wall==="front"?l(_.type,n.x1-w,n.z1-$,180,_.size):c.wall==="right"?l(_.type,n.x1-$,n.z0+w,90,_.size):l(_.type,n.x0+$,n.z1-w,Kc.left,_.size),m+=g}}for(let c of r.free){let[h,u]=c.size??Ne[c.type],p=Math.min(n.x1-h/2-.05,Math.max(n.x0+h/2+.05,n.x0+i*c.at[0])),f=Math.min(n.z1-u/2-.05,Math.max(n.z0+u/2+.05,n.z0+o*c.at[1]));l(c.type,p,f,c.rotation,c.size)}return s}var nd=a=>Math.round(a*1e3)/1e3;var yn=tt`
  :host {
    --fp3d-bg: #070b14;
    --fp3d-bg2: #0d1424;
    --fp3d-chrome: rgba(14, 21, 38, 0.86);
    --fp3d-chrome-solid: #0f1729;
    --fp3d-line: rgba(120, 170, 255, 0.16);
    --fp3d-text: #e6eefc;
    --fp3d-muted: #8a9bb8;
    --fp3d-accent: #37e0ff;
    --fp3d-accent-text: #041018;
    --fp3d-soft: #5b7cff;
    --fp3d-warm: #ffb547;
    --fp3d-danger: #ff6b8b;
    --fp3d-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: dark;
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
`,to=tt`
  .fp3d-seg {
    display: inline-flex;
    padding: 3px;
    gap: 2px;
    border-radius: 999px;
    background: var(--fp3d-chrome);
    box-shadow: var(--fp3d-shadow);
  }
  .fp3d-seg button,
  .fp3d-chip {
    font: inherit;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--fp3d-muted);
    padding: 7px 13px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 34px;
  }
  .fp3d-seg button[aria-pressed="true"],
  .fp3d-chip[aria-pressed="true"] {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
  }
  .fp3d-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  .fp3d-chip {
    background: var(--fp3d-chrome);
    color: var(--fp3d-text);
    box-shadow: var(--fp3d-shadow);
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--fp3d-accent);
    outline-offset: 2px;
  }
  .fp3d-btn {
    font: inherit;
    font-weight: 600;
    border: 1px solid var(--fp3d-line);
    background: rgba(55, 224, 255, 0.06);
    color: var(--fp3d-text);
    border-radius: 10px;
    padding: 7px 12px;
    cursor: pointer;
    min-height: 34px;
  }
  .fp3d-btn:hover {
    border-color: var(--fp3d-accent);
  }
  .fp3d-btn.fp3d-danger {
    color: var(--fp3d-danger);
  }
  .fp3d-btn.fp3d-primary {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
    border-color: transparent;
  }
  .fp3d-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-field input,
  .fp3d-field select {
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
    min-width: 0;
  }
  .fp3d-field input[type="range"] {
    padding: 0;
    accent-color: var(--fp3d-accent);
  }
  .fp3d-field select option,
  select option {
    /* the opened list keeps the dark look (else light text on the browser's white list) */
    background: var(--fp3d-chrome-solid);
    color: var(--fp3d-text);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var sd=40,Is=class extends Be{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=r=>{let s=`${r.label} ${r.id}`.toLowerCase();return t.every(l=>s.includes(l))},i=this.fixed.filter(r=>!e||n(r)),o=e?this.options.filter(n):this.options;return[...i,...o.slice(0,sd)]}get leftOut(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=e?this.options.filter(i=>t.every(o=>`${i.label} ${i.id}`.toLowerCase().includes(o))).length:this.options.length;return Math.max(0,n-sd)}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let t=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(t.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&t[this._cursor]&&this.choose(t[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,t=this._open?this.hits:[];return b`<div class="wrap">
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${e?e.label:this.placeholder}
        .value=${this._open?this._query:e?.label??""}
        @focus=${()=>{clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${n=>{this._query=n.target.value,this._cursor=0,this._open=!0}}
        @keydown=${this.onKey}
      />
      ${this._open?b`<ul class="list" role="listbox">
            ${t.length?y:b`<li class="empty">–</li>`}
            ${t.map((n,i)=>b`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${o=>o.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?b`<small>${n.id}</small>`:y}
              </li>`)}
            ${this.leftOut>0?b`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:y}
          </ul>`:y}
    </div>`}static styles=[yn,tt`
      :host {
        display: block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 8px 10px;
      }
      input::placeholder {
        color: var(--fp3d-text);
        opacity: 0.9;
      }
      input:focus::placeholder {
        color: var(--fp3d-muted);
      }
      input:focus {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: -1px;
      }
      .list {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 20;
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: 280px;
        overflow-y: auto;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        box-shadow: var(--fp3d-shadow);
      }
      li {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 6px 8px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13.5px;
      }
      li small {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      li.cursor,
      li:hover {
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
      }
      li.chosen {
        color: var(--fp3d-accent);
      }
      li.empty {
        color: var(--fp3d-muted);
        cursor: default;
      }
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",Is);var jc=new URL(import.meta.url),Gc=new URL("./neonplan3d-3d.js?v=831fa15e99fa",jc).href,rd;function no(){return rd??=import(Gc),rd}function Et(a,e){if(!on(e))return je(a,`furn_${e}`);let t=he(e);return t?nt(t,a?.language??navigator.language):je(a,"pack_missing_item")}var Ts=class extends Be{static properties={hass:{attribute:!1},packs:{attribute:!1},building:{attribute:!1},_packMsg:{state:!0},_license:{state:!0},_licenseKey:{state:!0},_licenseBusy:{state:!0},_licenseMsg:{state:!0},_open:{state:!0}};licenseLoading=!1;freshUpdates=null;constructor(){super(),this._packMsg=null,this._license=null,this._licenseKey="",this._licenseBusy=null,this._licenseMsg=null;let e=[];try{e=JSON.parse(localStorage.getItem("neonplan3d.ext.open")??"[]")}catch{}this._open=new Set(e)}toggleOpen(e){let t=new Set(this._open);t.has(e)?t.delete(e):t.add(e),this._open=t;try{localStorage.setItem("neonplan3d.ext.open",JSON.stringify([...t]))}catch{}}summaryBar(e,t){let n=t.reduce((o,r)=>o+r.n,0),i=this._open.has(e);return b`<button class="fp3d-sum" aria-expanded=${i} @click=${()=>this.toggleOpen(e)}>
      <span class="fp3d-sum-bar">
        ${t.filter(o=>o.n>0).map(o=>b`<i class="fp3d-sum-${o.tone}" style="flex:${o.n}"></i>`)}
      </span>
      <span class="fp3d-sum-text">
        ${t.filter(o=>o.n>0||o.tone==="ok").map(o=>b`<b class="fp3d-sum-${o.tone}-text">${o.n}</b> ${o.label}`)}
        ${n?y:b`<span class="fp3d-sub">–</span>`}
      </span>
      <span class="fp3d-sum-caret">${i?"\u25BE":"\u25B8"} ${this.t(i?"ext_hide_list":"ext_show_list")}</span>
    </button>`}get isAdmin(){return this.hass?.user?.is_admin??!1}t(e,t){return je(this.hass,e,t)}render(){let e=as(this.packs??[]);return b`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn fp3d-primary" href=${Ye(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_shop")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="fp3d-btn" href="https://discord.gg/SSdVVFsev7" target="_blank" rel="noopener">💬 ${this.t("help_discord")}</a>
          <a class="fp3d-btn" href=${Vt(this.hass?.language,"extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      ${this.renderUpdates()} ${this.renderSupporter()} ${this.renderOffers()} ${this.renderShop()}
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${ns.filter(t=>Ke(t)).map(t=>b`<div class="fp3d-ext-feature ${e.has(t)?"fp3d-ext-on":""} ${Mt(t)?"fp3d-ext-beta":""}">
              <b>${e.has(t)?"\u2713":"\u{1F512}"} ${this.t(`pro_name_${t}`)}</b>
              ${Mt(t)?b`<span class="fp3d-beta-tag">🧪 ${this.t(e.has(t)?"beta_yours":"beta_supporters")}</span>`:y}
              <span class="fp3d-sub">${this.t(`pro_feature_${t}`)}</span>
              ${Mt(t)?b`<span class="fp3d-sub">${this.t(e.has(t)?"beta_yours_hint":"beta_supporters_hint")}</span>`:y}
              <span class="fp3d-ext-links">
                ${e.has(t)?b`<span class="fp3d-ext-state">${this.t("ext_active")}</span>
                      ${Mt(t)?b`<a class="fp3d-ext-link" href=${ls} target="_blank" rel="noopener">💬 ${this.t("beta_feedback")}</a>`:y}`:Mt(t)?b`<a class="fp3d-ext-link" href=${Bi(this.hass?.language)} target="_blank" rel="noopener">💙 ${this.t("beta_become")}</a>`:b`<a class="fp3d-ext-link" href=${Ye(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_get")}</a>`}
                <a class="fp3d-ext-link" href=${Vt(this.hass?.language,t)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`)}
        </div>
      </section>
      ${this.renderFun(e)} ${this.renderPacks()}
    </div>`}editBuilding(e){if(!this.building)return;let t=structuredClone(this.building);e(t),this.dispatchEvent(new CustomEvent("building-edit",{detail:t,bubbles:!0,composed:!0}))}renderFun(e){let t=is.filter(d=>e.has(d)||Ke(d));if(!t.length)return y;let n=this.building?.settings.pets??null,i=n?.list??[],o=n?.on!==!1,r=(this.building?.floors??[]).filter(d=>d.rooms.length).sort((d,c)=>d.elevation-c.elevation),s=d=>this.editBuilding(c=>{let h={on:c.settings.pets?.on!==!1,list:[...c.settings.pets?.list??[]]};d(h),c.settings.pets=h}),l=(d,c)=>s(h=>h.list=h.list.map(u=>u.id===d?{...u,...c}:u));return b`<section class="fp3d-ext-card">
      <h3>🎈 ${this.t("fun_title")}</h3>
      <p class="fp3d-sub">${this.t("fun_intro")}</p>
      ${t.map(d=>e.has(d)?b`<div class="fp3d-ext-feature fp3d-ext-on">
              <b>✓ ${this.t("fun_name_pets")}</b>
              <span class="fp3d-sub">${this.t("fun_feature_pets")}</span>
              ${this.isAdmin&&this.building?b`<label class="fp3d-check"><input type="checkbox" .checked=${o} @change=${c=>s(h=>h.on=c.target.checked)} /> ${this.t("pets_show")}</label>
                    ${i.map(c=>b`<div class="fp3d-pet-row">
                        <select
                          aria-label=${this.t("pet_kind")}
                          @change=${h=>{let u=h.target.value,p=In[u];l(c.id,{kind:u,fur:p.includes(c.fur)?c.fur:p[0],breed:u==="dog"?c.breed??"labrador":null})}}
                        >
                          ${["cat","dog","rabbit"].map(h=>b`<option value=${h} ?selected=${c.kind===h}>${this.t(`pet_kind_${h}`)}</option>`)}
                        </select>
                        ${c.kind==="dog"?b`<select aria-label=${this.t("pet_breed")} @change=${h=>l(c.id,{breed:h.target.value})}>
                              ${Kr.map(h=>b`<option value=${h} ?selected=${(c.breed??"labrador")===h}>${this.t(`pet_breed_${h}`)}</option>`)}
                            </select>`:y}
                        <input type="text" maxlength="30" .value=${c.name} placeholder=${this.t("pet_name")} aria-label=${this.t("pet_name")} @change=${h=>l(c.id,{name:h.target.value.trim()})} />
                        <select aria-label=${this.t("pet_fur")} @change=${h=>l(c.id,{fur:h.target.value})}>
                          ${In[c.kind].map(h=>b`<option value=${h} ?selected=${c.fur===h}>${this.t(`pet_fur_${h}`)}</option>`)}
                        </select>
                        ${r.length>1?b`<select title=${this.t("pet_floor")} aria-label=${this.t("pet_floor")} @change=${h=>l(c.id,{floor_id:h.target.value||null})}>
                              ${r.map((h,u)=>b`<option value=${u===0?"":h.id} ?selected=${(c.floor_id??r[0].id)===h.id}>🏠 ${h.name}</option>`)}
                            </select>`:y}
                        <button class="fp3d-btn" title=${this.t("delete")} @click=${()=>s(h=>h.list=h.list.filter(u=>u.id!==c.id))}>✕</button>
                      </div>`)}
                    ${i.length<8?b`<button class="fp3d-btn" @click=${()=>s(c=>c.list.push({id:`pet_${Date.now().toString(36)}`,kind:"cat",name:"",fur:In.cat[c.list.length%In.cat.length]}))}>+ ${this.t("pet_add")}</button>`:y}`:y}
            </div>`:b`<div class="fp3d-ext-feature">
              <b>🔒 ${this.t("fun_name_pets")}</b>
              <span class="fp3d-sub">${this.t("fun_feature_pets")}</span>
              <span class="fp3d-ext-links"><a class="fp3d-ext-link" href=${Ye(this.hass?.language)} target="_blank" rel="noopener">${this.t("fun_get")}</a></span>
            </div>`)}
    </section>`}async loadLicense(){if(!(!this.hass||this.licenseLoading)){this.licenseLoading=!0;try{this._license=await yo(this.hass)}catch{this._license=null}finally{this.licenseLoading=!1}}}async shopCall(e,t,n){this._licenseBusy=e,this._licenseMsg=null;try{this._license=await t(),n&&(this._licenseMsg={ok:!0,text:n})}catch(i){let{code:o,message:r}=i??{},s=`license_error_${o}`,l=this.t(s);this._licenseMsg={ok:!1,text:l===s?this.t("license_error_other",{detail:r??String(i)}):l}}finally{this._licenseBusy=null}}async installFromShop(e){if(!this.hass)return;let t=this.hass;await this.shopCall(e.id,async()=>{let n=await $r(t,e.id);return this._packMsg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),yo(t)})}renderUpdates(){let e=this._license;return e?.active?(this.freshUpdates||(this.freshUpdates=_r(e.updates??[]),gr(e.updates??[])),this.freshUpdates.length?b`<section class="fp3d-ext-card fp3d-updates">
      ${this.freshUpdates.map(t=>b`<p>✨ ${t.added>0?this.t("pack_updated_added",{name:De(t,this.hass?.language??"de"),release:t.release,n:t.added}):this.t("pack_updated",{name:De(t,this.hass?.language??"de"),release:t.release})}</p>`)}
    </section>`:y):y}renderSupporter(){let e=this._license?.active?this._license.supporter:null;return e?b`<section class="fp3d-ext-card fp3d-offers">
      <h3>💙 ${this.t("supporter_title")}</h3>
      <p class="fp3d-sub">${this.t("supporter_intro")}</p>
      <div class="fp3d-loyalty">
        <code>${e.code}</code>
        <button
          class="fp3d-btn"
          @click=${async()=>{try{await navigator.clipboard.writeText(`/supporter ${e.code}`),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
        >
          ${this.t("license_copy")}
        </button>
        <a class="fp3d-btn fp3d-primary" href=${ls} target="_blank" rel="noopener">💬 ${this.t("supporter_open")}</a>
      </div>
      <p class="fp3d-sub">${this.t("supporter_how",{code:e.code})}</p>
    </section>`:y}renderOffers(){let e=this._license;if(!e?.active)return y;let t=[...e.offers??[]].sort((i,o)=>Number(o.new)-Number(i.new)),n=e.loyalty??null;return!t.length&&!n?y:(fr(t),this.dispatchEvent(new CustomEvent("offers-seen",{bubbles:!0,composed:!0})),b`<section class="fp3d-ext-card fp3d-offers">
      <h3>${this.t("offers_title")}</h3>
      ${n?b`<div class="fp3d-loyalty">
            <span>🎁 ${this.t("offers_loyalty",{percent:n.percent})}</span>
            <code>${n.code}</code>
            <button
              class="fp3d-btn"
              @click=${async()=>{try{await navigator.clipboard.writeText(n.code),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
            >
              ${this.t("license_copy")}
            </button>
          </div>`:y}
      <div class="fp3d-offer-grid">
        ${t.map(i=>b`<a class="fp3d-offer" href=${br(i.url,n)} target="_blank" rel="noopener">
            ${i.image?b`<img src=${i.image} alt="" loading="lazy" />`:b`<div class="fp3d-offer-ph">✦</div>`}
            <div class="fp3d-offer-body">
              <b>${De(i,this.hass?.language??"de")}</b>
              ${i.new?b`<span class="fp3d-offer-new">${this.t("offers_new")}</span>`:y}
              <span class="fp3d-offer-kind">${this.t(`offers_kind_${i.kind}`)}${i.price&&i.kind!=="fun"?` \xB7 ${i.price}`:""}</span>
              ${i.teaser?b`<span class="fp3d-sub">${i.teaser}</span>`:y}
            </div>
          </a>`)}
      </div>
    </section>`)}renderShop(){let e=this._license;if(!this.isAdmin||!this.hass)return y;if(!e)return this.loadLicense(),y;let t=this.hass,n=this._licenseBusy,i=e.checked_at?new Date(e.checked_at*1e3).toLocaleString(t.language):null;return b`<div class="fp3d-shop fp3d-ext-card">
      <h3>${this.t("license_title")}</h3>
      <div class="fp3d-shop-row">
        <span>${this.t("license_instance")}</span>
        <code>${e.instance}</code>
        <button
          class="fp3d-btn"
          @click=${async()=>{try{await navigator.clipboard.writeText(e.instance),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
        >
          ${this.t("license_copy")}
        </button>
      </div>
      ${e.active?b`<div class="fp3d-shop-row">
              <span>${this.t("license_active",{name:e.licensee??"",key:e.key_hint??""})}</span>
              ${i?b`<span class="fp3d-sub">${this.t("license_checked",{time:i})}</span>`:y}
              <button class="fp3d-btn" ?disabled=${!!n} @click=${()=>this.shopCall("refresh",()=>wr(t),this.t("license_refreshed"))}>
                ${n==="refresh"?"\u2026":this.t("license_refresh")}
              </button>
              <button class="fp3d-btn fp3d-danger" ?disabled=${!!n} @click=${()=>confirm(this.t("license_remove_confirm"))&&this.shopCall("remove",()=>vr(t))}>
                ${this.t("license_remove")}
              </button>
            </div>
            ${e.error?b`<p class="fp3d-sub fp3d-pack-error">${this.t(`license_error_${e.error}`)}</p>`:y}
            ${e.packs.length?(()=>{let o=e.packs.filter(s=>s.installed!==null&&s.installed<s.release),r=e.packs.filter(s=>s.installed===null);return b`${this.summaryBar("shop",[{n:e.packs.length-o.length-r.length,label:this.t("ext_sum_installed"),tone:"ok"},{n:o.length,label:this.t("ext_sum_updates"),tone:"update"},{n:r.length,label:this.t("ext_sum_missing"),tone:"missing"}])}
                    ${o.length+r.length?b`<button class="fp3d-btn fp3d-primary fp3d-sum-all" ?disabled=${!!n} @click=${async()=>{for(let s of[...o,...r])await this.installFromShop(s)}}>${n?"\u2026":this.t("ext_sum_all",{n:o.length+r.length})}</button>`:y}`})():y}
            ${e.packs.length&&!this._open.has("shop")?y:e.packs.length?e.packs.map(o=>{let r=o.installed===null?"install":o.installed<o.release?"update":"installed";return b`<div class="fp3d-pack">
                    <div>
                      <b>${De(o,this.hass?.language??"de")}</b>
                      <span class="fp3d-sub">${r==="installed"?this.t("license_installed",{release:o.release}):r==="update"?this.t("license_update_available",{release:o.release}):this.t("license_not_installed")}</span>
                    </div>
                    ${r==="installed"?y:b`<button class="fp3d-btn fp3d-primary" ?disabled=${!!n} @click=${()=>this.installFromShop(o)}>
                          ${n===o.id?"\u2026":this.t(r==="update"?"license_update":"license_install")}
                        </button>`}
                  </div>`}):b`<p class="fp3d-sub">${this.t("license_none")}</p>`}`:b`<div class="fp3d-shop-row">
            <input
              type="text"
              class="fp3d-shop-key"
              placeholder="NP-XXXX-XXXX-XXXX-XXXX"
              autocomplete="off"
              spellcheck="false"
              .value=${this._licenseKey}
              @input=${o=>this._licenseKey=o.target.value}
              @keydown=${o=>{o.key==="Enter"&&this._licenseKey.trim()&&this.shopCall("activate",()=>ko(t,this._licenseKey),this.t("license_activated"))}}
            />
            <button class="fp3d-btn fp3d-primary" ?disabled=${!!n||!this._licenseKey.trim()} @click=${()=>this.shopCall("activate",()=>ko(t,this._licenseKey),this.t("license_activated"))}>
              ${n==="activate"?"\u2026":this.t("license_activate")}
            </button>
          </div>`}
      ${this._licenseMsg?b`<p class="fp3d-sub ${this._licenseMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._licenseMsg.text}</p>`:y}
      <p class="fp3d-sub">${this.t("license_hint")} <a href=${e.shop_url} target="_blank" rel="noopener">${this.t("license_shop")}</a></p>
    </div>`}renderPacks(){let e=this.packs??[],t=e.reduce((i,o)=>i+o.items.length,0),n=e.filter(i=>i.features?.length).length;return b`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${this.summaryBar("packs",[{n:e.length-n,label:this.t("ext_sum_packs",{items:t}),tone:"ok"},{n,label:this.t("ext_sum_feature_packs"),tone:"missing"}])}
      ${(this._open.has("packs")?e:[]).map(i=>b`<div class="fp3d-pack">
          <div>
            <b>${De(i,this.hass?.language??"de")}</b>
            <span class="fp3d-sub">${i.features?.length?this.t("pack_features",{publisher:i.publisher,n:i.features.length}):this.t("pack_by",{publisher:i.publisher,n:i.items.length})}</span>
            ${i.licensee?b`<span class="fp3d-sub">${this.t("pack_licensed",{name:i.licensee})}${i.release&&i.release>1?` \xB7 v${i.release}`:""}</span>`:y}
            ${(i.features??[]).some(o=>!rs(o))?b`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>`:y}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(i)}>${this.t("pack_remove")}</button>
        </div>`)}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${i=>this.importPackFile(i)} />
      </label>
      ${this._packMsg?b`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:y}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(e){let t=e.target,n=[...t.files??[]];if(t.value="",!n.length||!this.hass)return;let i=[],o=[];for(let s of n)try{let l=await ur(this.hass,await s.text());i.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:d,message:c}=l??{},h=`pack_error_${d}`,u=this.t(h,{detail:c??String(l)});o.push(`${s.name}: ${u===h?this.t("pack_error_other",{detail:c??String(l)}):u}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let r=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:o.length===0,text:[...r,...i,...o].join(" \xB7 ")}}async deletePack(e){!this.hass||!confirm(this.t("pack_remove_confirm",{name:De(e,this.hass?.language??"de")}))||(await pr(this.hass,e.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[yn,to,tt`
      .fp3d-sum {
        display: grid;
        gap: 6px;
        width: 100%;
        margin: 4px 0 8px;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        background: rgba(4, 8, 18, 0.35);
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-sum-bar {
        display: flex;
        gap: 2px;
        height: 8px;
        border-radius: 999px;
        overflow: hidden;
        background: rgba(120, 190, 255, 0.12);
      }
      .fp3d-sum-bar i {
        display: block;
      }
      .fp3d-sum-ok {
        background: #34d399;
      }
      .fp3d-sum-update {
        background: #fbbf24;
      }
      .fp3d-sum-missing {
        background: #60a5fa;
      }
      .fp3d-sum-text {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 14px;
        font-size: 0.92em;
      }
      .fp3d-sum-ok-text {
        color: #34d399;
      }
      .fp3d-sum-update-text {
        color: #fbbf24;
      }
      .fp3d-sum-missing-text {
        color: #60a5fa;
      }
      .fp3d-sum-caret {
        color: var(--fp3d-muted, #8ea3c4);
        font-size: 0.85em;
      }
      .fp3d-sum-all {
        margin-bottom: 8px;
      }
      .fp3d-updates {
        border-color: color-mix(in srgb, var(--fp3d-accent) 60%, transparent);
        background: color-mix(in srgb, var(--fp3d-accent) 8%, transparent);
      }
      .fp3d-updates p {
        margin: 4px 0;
      }
      .fp3d-loyalty a {
        text-decoration: none;
      }
      .fp3d-loyalty {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 6px 0 12px;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, #ffb547 55%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, #ffb547 10%, transparent);
      }
      .fp3d-loyalty code {
        font-size: 1.05em;
        font-weight: 700;
        letter-spacing: 0.04em;
      }
      .fp3d-offer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 10px;
      }
      .fp3d-offer {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        color: inherit;
        text-decoration: none;
        background: color-mix(in srgb, var(--fp3d-accent) 4%, transparent);
      }
      .fp3d-offer:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-offer img,
      .fp3d-offer-ph {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .fp3d-offer-ph {
        display: grid;
        place-items: center;
        font-size: 28px;
        color: var(--fp3d-accent);
      }
      .fp3d-offer-body {
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding: 10px 12px;
      }
      .fp3d-offer-new {
        align-self: flex-start;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1200;
        font-size: 11px;
        font-weight: 700;
      }
      .fp3d-offer-kind {
        color: var(--fp3d-accent);
        font-size: 12px;
      }
      :host {
        display: block;
        overflow: auto;
      }
      .fp3d-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .fp3d-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .fp3d-ext-head a {
        text-decoration: none;
      }
      .fp3d-ext-actions,
      .fp3d-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .fp3d-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .fp3d-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
      }
      .fp3d-ext-card h3 {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-soft);
      }
      .fp3d-ext-pro {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 10px;
      }
      .fp3d-pet-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
        margin-top: 6px;
      }
      .fp3d-pet-row input[type="text"],
      .fp3d-pet-row select {
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.25));
        background: rgba(4, 8, 18, 0.6);
        color: inherit;
        font: inherit;
      }
      .fp3d-pet-row input[type="text"] {
        flex: 1;
        min-width: 110px;
      }
      .fp3d-ext-feature {
        display: grid;
        gap: 6px;
        align-content: start;
        padding: 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      .fp3d-ext-on {
        border-color: var(--fp3d-accent);
      }
      .fp3d-ext-beta {
        border-style: dashed;
      }
      .fp3d-beta-tag {
        justify-self: start;
        padding: 2px 8px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
        color: var(--fp3d-accent);
        font-size: 12px;
        font-weight: 700;
      }
      .fp3d-ext-state {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-ext-link {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-sub {
        color: var(--fp3d-soft);
        font-size: 13px;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-shop {
        margin: 10px 0;
        padding: 10px 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      .fp3d-shop-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 6px 0;
      }
      .fp3d-shop code {
        padding: 2px 8px;
        border-radius: 6px;
        background: var(--fp3d-chrome-solid);
        font-size: 13px;
        letter-spacing: 0.08em;
        user-select: all;
      }
      .fp3d-shop-key {
        flex: 1;
        min-width: 180px;
        font-family: ui-monospace, monospace;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .fp3d-shop a {
        color: var(--fp3d-accent);
      }
      .fp3d-pack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-pack div {
        display: grid;
        gap: 2px;
      }
      .fp3d-pack-import {
        display: block;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
      }
      .fp3d-pack-error {
        color: var(--fp3d-danger);
      }
    `]};customElements.get("fp3d-extensions")||customElements.define("fp3d-extensions",Ts);var io=10,ad=new Set(["vertex","room","device","opening","furniture","furnset","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","outbox","pipept","poolport","pooldev","pooljoint","solarmove","solarturn","cablept","holopt","bgmove","bgscale","bgrotate"]),ld=100,Ds={base:["kitchen","sink","stove","dishwasher","sideboard","dresser","tv_board","nightstand","washbasin","washer","dryer","worktop","desk"],hang:["kitchen_wall","tv_wall","shelf","lamp_wall","radiator","ac_unit","led_strip"],tall:["kitchen_tall","fridge","wardrobe","tall_cabinet","shelf","coat_rack"],living:["sofa","armchair","bed","bunk_bed","bench","corner_bench","plant"],light:["lamp_wall","lamp_floor","led_strip","lamp_table"]},Jc=new Set(["kitchen_wall","tv_wall","lamp_wall","shelf","led_strip","ac_unit"]),oo=new Set(["kitchen","kitchen_wall","kitchen_tall","sideboard","dresser","tv_board","worktop","wardrobe","tall_cabinet","shelf","desk"]),Yc={kitchen:.15,kitchen_wall:.2,kitchen_tall:.3,sideboard:.4,dresser:.4,tv_board:.6,worktop:.1,wardrobe:.4,tall_cabinet:.3,shelf:.25,desk:.6},so=10,M=a=>Math.round(a*1e3)/1e3,Ls=.06;function Xt(a,e,t){let[n,,i]=mt(a,e,0,t);return[M(n),M(i)]}function Ws(a,e){let t=Oe(a,e),n=0;for(let i=1;i<t.length;i++)n+=Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1],t[i][2]-t[i-1][2]);return n}var dd={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},Qc=new Set(["parking","stairwell","rug","grid_point"]),Hs=class extends Be{static properties={productColors:{attribute:!1},_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_multi:{state:!0},_single:{state:!0},_multiMode:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_outdoorDevice:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_diag:{state:!0},_diagView:{state:!0},_diagBusy:{state:!0},_diagNote:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_drawShape:{state:!0},_contourVertex:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_wallView:{state:!0},_wallSel:{state:!0},_wallMulti:{state:!0},_wallSingle:{state:!0},_wallGap:{state:!0},_wallCat:{state:!0},_wallQuery:{state:!0},_wallFrame:{state:!0},_wallPicTick:{state:!0},_wallPick:{state:!0},_runMode:{state:!0},_techMode:{state:!0},_feedKind:{state:!0},_runDraft:{state:!0},_runSel:{state:!0},_conn:{state:!0},_jointPlace:{state:!0},_card:{state:!0},_cardJoin:{state:!0},_wallView3d:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_phoneHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_outdoorFree:{state:!0},_outdoorType:{state:!0},_poolShape:{state:!0},_pipeMode:{state:!0},_pipeDraft:{state:!0},_pipeId:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;lastFurnTap=null;shiftHeld=!1;onShift=e=>this.shiftHeld=e.shiftKey;kitPics=new Map;kitPicsAsked=new Set;_outdoorDevice=null;cableCache=null;techPress=null;wvZoom=null;wvTouch=new Map;wvPinch=null;wvTap=null;wvScale=1;techPick=!1;runDrag=null;runHover=null;jointDrag=null;fitDrag=null;runCtx3d=null;wall3dEl=null;wall3dKey="";liftRaf=0;lift=null;wallResize=null;wallDrag=null;wallPics=new Map;wallPicsAsked=new Set;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;fittedView=null;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._multi=[],this._single=!1,this._multiMode=!1,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let n=localStorage.getItem("neonplan3d.library");n&&(this._libOpen=new Set(JSON.parse(n)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._diag=null,this._diagView=!1,this._diagBusy=!1,this._diagNote="",this._spots=null,this._outdoorId=null,this._drawShape="polygon",this._contourVertex=null,this._wallId=null,this._edgeHi=null,this._wallView=null,this._techMode=!1,this._feedKind=null,this._wallSel=null,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallCat=null,this._wallQuery="",this._wallFrame=null,this._wallPicTick=0,this._wallPick=!1,this._runMode=null,this._runDraft=null,this._runSel=null,this._conn={from:"",vias:[],to:"",to2:""},this._jointPlace=null,this._card=null,this._cardJoin=null,this._wallView3d=(()=>{try{return localStorage.getItem("neonplan3d.wall3d")!=="0"}catch{return!0}})(),this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door",this._phoneHint=!0;try{this._phoneHint=localStorage.getItem("neonplan3d.phoneHint")!=="0"}catch{}let e=!1;try{e=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let n=Number(localStorage.getItem("neonplan3d.editorSplit"));n>=20&&n<=80&&(this._splitRatio=n/100)}catch{}this._backupBusy=!1,this._wall3d="cut";try{localStorage.getItem("neonplan3d.walls3d")==="auto"&&(this._wall3d="auto")}catch{}this._doc3d=this._doc,this._sideOpen=!1;let t=!0;try{t=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=t,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._outdoorFree=!1,this._outdoorType="lawn",this._poolShape="rect",this._pipeMode=!1,this._pipeDraft=null,this._pipeId=null,this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(e,t){return je(this.hass,e,t)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onShift)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onShift),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&Er(this.packs??[]),e.has("hass")&&this.hass&&!cl(this.hass.language)&&hl(this.hass.language).then(()=>this.requestUpdate()),e.has("_doc")&&(this._split||this._wallView)&&this.queue3d(),(e.has("_split")&&this._split||e.has("_wallView")&&this._wallView)&&(this._doc3d=this._doc),e.has("_runDraft")&&this._wallView&&(this._doc3d=this.docWithDraft()),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(t=>t.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null))}firstUpdated(){let e=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},(!this.fitted||this._view===this.fittedView)&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this.docWithDraft(),150)}onSplitDown(e){let t=e.currentTarget.parentElement,n=e.currentTarget;n.setPointerCapture(e.pointerId);let i=t.getBoundingClientRect(),o=s=>{this._splitRatio=Math.min(.8,Math.max(.2,(s.clientX-i.left)/i.width))},r=()=>{n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",r),n.removeEventListener("pointercancel",r);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",o),n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:t,x:n,z:i}=e.detail,o=this._doc.settings.wall_interior,r=this._wallView?this.wallSelection():this._furnitureId?this.selection():[],s=r.includes(t)&&r.length>1?r:[];if(s.length){let l=this.floor?.furniture.find(u=>u.id===t);if(!l||s.some(u=>this.isFixedItem("furniture",u)))return;let d=M(n-l.x),c=M(i-l.z),h=new Set(s);this.change((u,p)=>{for(let f of p.furniture)h.has(f.id)&&Object.assign(f,{x:M(f.x+d),z:M(f.z+c)})});return}this.change(l=>{for(let d of l.floors){let c=d.furniture.find(v=>v.id===t);if(!c)continue;let[h,u]=qo(d,c.x,c.z,n,i),[p,f]=Xo(d,c,h,u,o),m=Cn(d,c,o),_=m?Math.hypot(m.x-c.x,m.z-c.z):1/0;Object.assign(c,{x:p,z:f});let g=Cn(d,c,o);g&&Math.hypot(g.x-p,g.z-f)<=_+.01&&Object.assign(c,g)}})}onDeviceMoved3d(e){let{id:t,x:n,z:i}=e.detail;this.change(o=>{for(let r of o.floors){let s=r.placements.find(c=>c.entity_id===t);if(!s)continue;let[l,d]=qo(r,s.x,s.z,n,i);Object.assign(s,{x:l,z:d})}})}render3dBar(){if(!this.isAdmin)return y;let e=this.furnitureItem,t=this.device;if(e){let n=it(e),i=(r,s,l=.05)=>b`<label class="fp3d-3d-size" title=${this.t(`size_${r}`)}
        >${s}
        <input
          type=${this.unit==="imperial"?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min=${l}
          .value=${this.unit==="imperial"?Ht(e[r]):String(Math.round(e[r]*100)/100)}
          @change=${d=>{let c=this.readLen(d.target.value);c!==null&&c>=l&&this.updateFurniture({[r]:Math.round(c*1e3)/1e3})}}
        />
      </label>`,o=(r,s)=>b`<label class="fp3d-3d-size" title=${this.t(`furn_rotation_${s}`)}
        >${s.toUpperCase()}°
        <input type="number" inputmode="decimal" step="1" .value=${String(e[r]??0)} @change=${l=>{let d=parseFloat(l.target.value.replace(",","."));Number.isFinite(d)&&this.updateFurniture({[r]:r==="rotation"?(d%360+360)%360:((d+180)%360+360)%360-180})}} />
      </label>`;return b`<div class="fp3d-3d-bar">
        <span>${Et(this.hass,e.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${o("rotation_x","x")} ${o("rotation","y")} ${o("rotation_z","z")}
        ${n?b`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type=${this.unit==="imperial"?"text":"number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit==="imperial"?Ht(e.mount_y??ze(this.floor,e)-ye(this.floor,e.x,e.z)):String(Math.round((e.mount_y??ze(this.floor,e)-ye(this.floor,e.x,e.z))*100)/100)}
                @change=${r=>{let s=this.readLen(r.target.value);s!==null&&s>=0&&this.updateFurniture({mount_y:Math.round(Math.min(io,s)*1e3)/1e3})}}
              />
            </label>`:y}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(t){let n=te(t.entity_id),i=n==="light",o=n?Ti(n,this.floor?Se(this.floor,Dn(this.floor,t.x,t.z)):2.5,i?t.mount??"ceiling":null):1;return b`<div class="fp3d-3d-bar">
        <span>${ge(this.hass,t.entity_id)}</span>
        ${i?b`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(r=>b`<option value=${r} ?selected=${r===(t.mount??"ceiling")}>${this.t(`lamp_${r}`)}</option>`)}
            </select>`:y}
        <label class="fp3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((t.y??o)*100)/100)}
            @change=${r=>{let s=parseFloat(r.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.updateDevice({y:Math.round(s*1e3)/1e3})}}
          />
        </label>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:(((t.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:((t.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",t.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteItem("device",t.entity_id)}>${this.t("delete")}</button>
      </div>`}return y}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};grab3dStart(e){let t=this._doc,n=ce(t),i=null,o=(s,l,d,c,h=!1)=>{if(!d||h)return;let u=Ss(d,e.o,e.d);!u||!Vl(d,c,u.u,u.s)||i&&i.t<=u.t||(i={id:s,win:l,t:u.t,du:u.u-c.u,ds:u.s-c.v})};if(this._tool==="energy")for(let s of t.settings.roof.solar??[])o(s.id,!1,Ie(t,s,n),s,!!s.locked);if(this._tool==="roof")for(let s of t.settings.roof.windows??[])o(s.id,!0,n.find(l=>l.key===s.face)??null,wn(s),!!s.locked);if(!i)return!1;let r=i;return this.grab3d={id:r.id,win:r.win,du:r.du,ds:r.ds,base:t,moved:!1},r.win?this._roofWinId=r.id:this.selectSolar(r.id),!0}grab3dMove(e){let t=this.grab3d;if(!t)return;let n=t.base,i=t.win?n.settings.roof.windows?.find(p=>p.id===t.id):void 0,o=t.win?i?wn(i):void 0:n.settings.roof.solar?.find(p=>p.id===t.id);if(!o)return;let r=Ie(n,o),s=r?.unbounded?[r]:t.win?ce(n):[...ce(n),...rt(n)],l=null;for(let p of s){let f=Ss(p,e.o,e.d);f&&Ms(p,f.u,f.s)&&(!l||f.t<l.t)&&(l={face:p,...f})}if(!l)return;let d=l.face,c=.05,h=p=>M(Math.round(p/c)*c),u=vn(d,{...o,face:d.key,u:h(l.u-t.du),v:h(l.s-t.ds),tilt:d.flat?o.tilt??15:o.tilt});t.moved=!0,this.change(p=>{if(t.win){let m=p.settings.roof.windows?.find(_=>_.id===t.id);m&&Object.assign(m,{face:d.key,...u});return}let f=p.settings.roof.solar?.find(m=>m.id===t.id);f&&Object.assign(f,{face:d.key,...u},d.flat&&f.tilt==null?{tilt:15}:{})},t.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return b`<div class="fp3d-editor-3d">
      ${this.houseTool?y:b`<div class="fp3d-seg fp3d-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this.setWall3d("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this.setWall3d("cut")}>${this.t("walls_cut")}</button>
          </div>`}
      ${this.render3dBar()}
      <fp3d-view3d
              .walkable=${!1}
        .hass=${this.hass}
        .building=${this._doc3d}
        .floorId=${this.houseTool?null:this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool?"auto":this._wall3d}
        .explode=${!1}
        .keepRoof=${this._tool==="roof"||this._tool==="energy"}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .productColors=${this.productColors??!1}
        .packs=${this.packs}
        .showEnergy=${!1}
        .holograms=${this._tool==="energy"?!0:null}
        .flows=${!1}
        ?furnish=${this.isAdmin}
        .surfaceGrab=${this.isAdmin&&this.houseTool?this.surfaceGrabber:null}
        .furnishTypes=${this._tool==="energy"?ut:this._tool==="roof"?[]:null}
        .selectedFurniture=${this._furnitureId}
        .selectedDevice=${this._deviceId}
        .quality=${"auto"}
        .floorThumbs=${!1}
        .roomLabels=${!0}
        .floorStack=${this.houseTool?"stacked":"single"}
        .panelOpen=${!1}
        .alerts=${!1}
        .scenes=${!1}
        @furniture-select=${e=>{e.detail.id?this.selectFrom3d("furniture",e.detail.id):this._furnitureId&&this.selectFrom3d("furniture",null)}}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${e=>{e.detail.id?this.selectFrom3d("device",e.detail.id):this._deviceId&&this.selectFrom3d("device",null)}}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),this._sideOpen=!1}}
        @room-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),e.detail.roomId?this.selectFrom3d("room",e.detail.roomId):this._sideOpen=!1}}
      ></fp3d-view3d>
    </div>`}setWall3d(e){this._wall3d=e;try{localStorage.setItem("neonplan3d.walls3d",e)}catch{}}updated(){for(let t of this.renderRoot.querySelectorAll("select option[selected]"))t.selected||(t.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("fp3d-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&!this._images[e.image_id]&&!this.loadingImages.has(e.image_id)&&this.loadImage(e.image_id),this.furnitureItem?.pictures)for(let t of this.storedPictures())!this._images[t]&&!this.loadingImages.has(t)&&this.loadImage(t)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,t=this._doc){t&&(this.past.push(JSON.stringify(t)),this.past.length>ld&&this.past.shift(),this.future=[]),this._doc=e,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,t=this._doc,n=!0){let i=structuredClone(t),o=i.floors.find(r=>r.id===this._floorId);!o&&this._floorId||(e(i,o),ed(t,i),this.setDoc(i,n?t:null))}undo(){let e=this.past.pop();e&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}redo(){let e=this.future.pop();e&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}restore(e){this._doc=e,e.floors.some(t=>t.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:t,ox:n,oy:i}=this._view;return[e[0]*t+n,e[1]*t+i]}toWorld(e,t){let{scale:n,ox:i,oy:o}=this._view;return[(e-i)/n,(t-o)/n]}localPoint(e){let t=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}fit(){let e=this.floor?.rooms.flatMap(s=>s.points)??[];if(this._tool==="roof")for(let s of this._doc.settings.roof.sections??[])e.push([s.x0,s.z0],[s.x1,s.z1]);let t=e.length?xe(e):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=t.x1-t.x0+2*n,o=t.z1-t.z0+2*n,r=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/o)));this._view={scale:r,ox:this._size.w/2-(t.x0+t.x1)/2*r,oy:this._size.h/2-(t.z0+t.z1)/2*r},this.fittedView=this._view}showPoint(e,t){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-e*n,oy:this._size.h/2-t*n}}zoomAt(e,t,n){let{scale:i,ox:o,oy:r}=this._view,s=Math.max(8,Math.min(600,i*e)),l=s/i;this._view={scale:s,ox:t-(t-o)*l,oy:n-(n-r)*l}}snap(e,t,n=!1){if(this._guides={},n)return e;let i=so/this._view.scale,o=this.floor?.rooms??[],r=[];for(let f of o)f.points.forEach((m,_)=>{t&&f.id===t.roomId&&(t.index===void 0||t.index===_)||r.push(m)});let s=null,l=i;for(let f of r){let m=Math.hypot(f[0]-e[0],f[1]-e[1]);m<l&&(l=m,s=f)}if(s)return this._guides={point:s},[s[0],s[1]];for(let f of o)if(!(t&&f.id===t.roomId))for(let m=0;m<f.points.length;m++){let _=f.points[m],g=f.points[(m+1)%f.points.length],v=g[0]-_[0],w=g[1]-_[1],$=v*v+w*w;if($<1e-9)continue;let k=((e[0]-_[0])*v+(e[1]-_[1])*w)/$;if(k<=0||k>=1)continue;let x=[_[0]+k*v,_[1]+k*w],z=Math.hypot(x[0]-e[0],x[1]-e[1]),S=this._doc.settings.grid;Math.abs(w)<1e-9&&(x[0]=Math.min(Math.max(Math.round(x[0]/S)*S,Math.min(_[0],g[0])),Math.max(_[0],g[0]))),Math.abs(v)<1e-9&&(x[1]=Math.min(Math.max(Math.round(x[1]/S)*S,Math.min(_[1],g[1])),Math.max(_[1],g[1]))),z<l&&(l=z,s=x)}if(s)return this._guides={point:s},[M(s[0]),M(s[1])];let d=this._doc.settings.grid,c=[M(Math.round(e[0]/d)*d),M(Math.round(e[1]/d)*d)],h=i,u=i,p={};for(let f of r)Math.abs(f[0]-e[0])<h&&(h=Math.abs(f[0]-e[0]),c[0]=f[0],p.x=f[0]),Math.abs(f[1]-e[1])<u&&(u=Math.abs(f[1]-e[1]),c[1]=f[1],p.z=f[1]);return this._guides=p,c}onPointerDown(e){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let t=this.localPoint(e),n=e.target;this.pressStart=t,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,t))},550)}}guardFixed(e){let t=this.drag;if(!t)return;let n=null;t.kind==="vertex"||t.kind==="room"?n=["room",t.roomId]:t.kind==="device"||t.kind==="aim"?n=["device",t.entityId]:t.kind==="opening"?n=["opening",t.id]:t.kind==="furniture"||t.kind==="rotate"||t.kind==="resize"?n=["furniture",t.id]:t.kind==="furnset"?n=["furniture",t.ids.find(i=>this.isFixedItem("furniture",i))??t.ids[0]]:t.kind==="wallmove"?n=["wall",t.id]:t.kind==="outdoor"&&(n=["outdoor",t.id]),!(!n||!this.isFixedItem(...n))&&("moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){this.drag&&ad.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),o=e.target;if(this._wallPick){this.pickWall(i);return}if(this._bgLevel&&this.isAdmin&&this.floor?.background){let x=[...this._bgLevel,i];x.length<2?this._bgLevel=x:this.applyBgLevel(x[0],x[1]);return}if(this.bgHandles()&&this.floor.background&&o.closest("[data-bg-rotate]")){let x=this.floor.background,z=this._images[x.image_id],S=x.width*(z?.aspect??1),A=[x.x+x.width/2,x.z+S/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(i[1]-A[1],i[0]-A[0]),rot:x.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isAdmin&&this.floor?.background){this._bgRuler=[...this._bgRuler,i];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(o.closest("[data-bg-handle]")||o.closest("[data-bg]"))){let x=this.floor.background;this.drag=o.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:i,bx:x.x,bz:x.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isAdmin&&this.floor?.background){let x=this.floor.background;if(o.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(o.closest("[data-bg]")){this.drag={kind:"bgmove",start:i,bx:x.x,bz:x.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let x=this.snap(i,void 0,e.altKey);this.drag={kind:"freewall",start:x,end:x};return}let r=o.closest("[data-contour-vertex], [data-contour-mid]");if(r&&this.isAdmin){let x=r.hasAttribute("data-contour-mid"),[z,S,A]=r.getAttribute(x?"data-contour-mid":"data-contour-vertex").split(":"),P=z==="roof",F=P?this._doc.settings.roof.sections?.find(W=>W.id===S):void 0,T=P?void 0:this.floor?.outdoor.find(W=>W.id===S);if(this._doc.settings.lock_plan||F&&this.roofFixed(F)){this.drag={kind:"pan",last:n};return}let O=F?this.roofPoints(F):T?.points;if(!O)return;let L=this._doc,D=Number(A);if(P?this._roofId=S:this.selectItem("outdoor",S),x){if(O.length>=200)return;let W=O[D],V=O[(D+1)%O.length],B=[...O];if(B.splice(++D,0,[M((W[0]+V[0])/2),M((W[1]+V[1])/2)]),!Ct(B))return;this.change((J,Z)=>{P?Object.assign(J.settings.roof.sections.find(U=>U.id===S),{points:B,...gt(B)}):Object.assign(Z.outdoor.find(U=>U.id===S),{points:B,freeform:!0})},L,!1)}this._contourVertex={kind:P?"roof":"outdoor",id:S,index:D},this.drag={kind:P?"roofvertex":"outvertex",id:S,index:D,base:L,moved:x};return}if(this._tool==="pool"&&this.poolDown(e,o,i,n))return;if(this._tool==="roof"||this._tool==="energy"){let x=o.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),z=o.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex"),S=o.closest("[data-roof]")?.getAttribute("data-roof"),A=this._tool==="energy"?o.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(A){this._solarId=null,this.selectItem("furniture",A),this.drag=this.isAdmin?{kind:"furniture",id:A,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&o.closest("[data-holo-pt]")){this.drag=this.isAdmin?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let L=o.closest("[data-cable-pt]")?.getAttribute("data-cable-pt"),D=B=>!!this._doc.settings.roof.cables?.find(J=>J.id===B)?.locked;if(L&&this.isAdmin&&!D(L.slice(0,L.lastIndexOf(":")))){let B=L.lastIndexOf(":"),J=L.slice(0,B),Z=Number(L.slice(B+1));if(e.detail>=2){this.change(U=>{let q=U.settings.roof.cables?.find(ae=>ae.id===J);q&&q.points.length>1&&q.points.splice(Z,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:J,index:Z,base:this._doc,moved:!1};return}let W=o.closest("[data-cable-line]")?.getAttribute("data-cable-line");if(W&&this.isAdmin&&!D(W)){let B=Number(o.closest("[data-cable-line]")?.getAttribute("data-cable-seg")??0),J=this._doc;this.change(Z=>{let U=Z.settings.roof.cables?.find(q=>q.id===W);U&&U.points.splice(B,0,[M(i[0]),M(i[1])])}),this.drag={kind:"cablept",id:W,index:B,base:J,moved:!0};return}let V=o.closest("[data-cable]")?.getAttribute("data-cable");if(V){if(this._cableId=V,this.isAdmin&&this._floorId&&!this._doc.settings.roof.cables?.some(B=>B.id===V)){let B=this._doc;this.layCable(V);let J=this._doc.settings.roof.cables?.find(U=>U.id===V),Z=this.cableSegments().filter(U=>U.key===V);if(J&&Z.length){let U=[[Z[0].a[0],Z[0].a[2]],...J.points,[Z[Z.length-1].b[0],Z[Z.length-1].b[2]]],q=0,ae=1/0;for(let j=0;j+1<U.length;j++){let be=eh(i,U[j],U[j+1]);be<ae&&(ae=be,q=j)}this.change(j=>{let be=j.settings.roof.cables?.find(Ze=>Ze.id===V);be&&be.points.splice(q,0,[M(i[0]),M(i[1])])}),this.drag={kind:"cablept",id:V,index:q,base:B,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let P=this._tool==="energy"?o.closest("[data-solar]")?.getAttribute("data-solar"):null,F=this._tool==="energy"?o.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(F&&this.isAdmin){this.drag={kind:"solarturn",id:F,base:this._doc,moved:!1};return}if(P){let L=o.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&P===this._solarId&&L&&this.isAdmin){this.toggleSolarCell(L),this.drag={kind:"pan",last:n};return}P!==this._solarId&&(this._solarPick=!1),this._solarId=P,this._roofId=null;let D=this._doc.settings.roof.solar?.find(J=>J.id===P),W=D?Ie(this._doc,D)??void 0:void 0,V=W?this.faceHit(W,i):null,B=D&&V?{du:V.u-D.u,ds:Number.isNaN(V.s)?0:V.s-D.v}:null;this.drag=this.isAdmin&&!D?.locked?{kind:"solarmove",id:P,start:i,startScreen:n,base:this._doc,moved:!1,grab:B}:{kind:"pan",last:n};return}let T=this._tool==="roof"?o.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(T){this._roofWinId=T,this._roofId=null;let L=this._doc.settings.roof.windows?.find(B=>B.id===T),D=L?ce(this._doc).find(B=>B.key===L.face):void 0,W=D?Gi(D,i):null,V=L&&W?{du:W.u-L.u,ds:W.s-L.v}:null;this.drag=this.isAdmin&&!L?.locked?{kind:"solarmove",id:T,start:i,startScreen:n,base:this._doc,moved:!1,grab:V,win:!0}:{kind:"pan",last:n};return}if(this._tool==="roof"&&(this._roofWinId=null),this._tool==="roof"&&this.drawingPolygon&&(this._draft.length||!this._roofId)&&this.isAdmin){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}let O=this._tool==="energy"?o.closest(".fp3d-energy-item")?.getAttribute("data-furniture"):null;if(O){this._solarId=null,this.selectItem("furniture",O),this.drag=this.isAdmin?{kind:"furniture",id:O,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(z&&this.isAdmin){let[L,D]=z.split(":");this.drag={kind:"roofvertex",id:L,index:Number(D),base:this._doc,moved:!1}}else if(x&&this.isAdmin){let[L,D,W]=x.split(":");this.drag={kind:"roofcorner",id:L,corner:[D==="1"?1:0,W==="1"?1:0],base:this._doc,moved:!1}}else if(S){let L=this.roofFixed(this._doc.settings.roof.sections?.find(D=>D.id===S));L&&this._roofId===S&&(this._fixedHint=!0),this._roofId=S,this.drag=this.isAdmin&&!L?{kind:"roofmove",id:S,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let L=this.snap(i,void 0,e.altKey);this.drag=this.drawingPolygon?{kind:"tap",startScreen:n,last:n,panning:!1}:{kind:"rect",start:L,end:L,roof:!0}}else this.drag={kind:"pan",last:n};return}let s=this._tool==="pool"&&!this._pipeMode;if(this._tool==="rect"||(this._tool==="outdoor"||s)&&!this.drawingPolygon||this._tool==="hole"){let x=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:x,end:x,outdoor:this._tool==="outdoor"||s,hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"||(this._tool==="outdoor"||s)&&this.drawingPolygon){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}if(this.isAdmin&&(this._tool==="select"||this._tool==="furniture")&&(e.shiftKey||this._multiMode)){let x=o.closest("[data-furniture]");x?(this.toggleMulti(x.getAttribute("data-furniture")),this.drag=null):this.drag={kind:"marquee",start:i,end:i,add:!0};return}let l=o.closest("[data-device]");if(l&&this.isAdmin){this.drag={kind:"device",entityId:l.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let d=o.closest("[data-opening]");if(d){let x=d.getAttribute("data-opening");this.selectItem("opening",x),this.drag=this.isAdmin?{kind:"opening",id:x,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let c=o.closest("[data-resize]");if(c&&this.isAdmin){let[x,z,S]=c.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:x,corner:[z==="1"?1:-1,S==="1"?1:-1],base:this._doc,moved:!1};return}let h=o.closest("[data-rotate]");if(h&&this.isAdmin){this.drag={kind:"rotate",id:h.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let u=o.closest("[data-aim]");if(u&&this.isAdmin){this.drag={kind:"aim",entityId:u.getAttribute("data-aim"),base:this._doc,moved:!1};return}let p=o.closest("[data-furniture]");if(p&&!o.closest("[data-vertex], [data-mid]")){let x=p.getAttribute("data-furniture"),z=Date.now(),S=this.lastFurnTap?.id===x&&z-this.lastFurnTap.t<400;this.lastFurnTap={id:x,t:z};let A=this.floor.furniture.find(F=>F.id===x);S&&A?.group?(this.selectItem("furniture",x),this._single=!0):(!this.selection().includes(x)||this._single)&&this.selectItem("furniture",x);let P=this.selection();this.drag=this.isAdmin?P.length>1?{kind:"furnset",ids:P,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"furniture",id:x,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let f=o.closest("[data-vertex]"),m=o.closest("[data-mid]");if(f&&this.room&&this.isAdmin){this._vertex=Number(f.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(m&&this.room&&this.isAdmin){let x=Number(m.getAttribute("data-mid")),z=this.room.points,S=z[x],A=z[(x+1)%z.length],P=[M((S[0]+A[0])/2),M((S[1]+A[1])/2)],F=this._doc,T=this.room.id;this.change((O,L)=>{let D=L.rooms.find(V=>V.id===T);D.points.splice(x+1,0,P),D.wall_heights&&D.wall_heights.splice(x+1,0,D.wall_heights[x]??null),D.wall_thickness&&D.wall_thickness.splice(x+1,0,D.wall_thickness[x]??null);let W=Math.hypot(P[0]-S[0],P[1]-S[1]);for(let V of L.openings)V.room_id!==T||V.wall||(V.edge>x?V.edge+=1:V.edge===x&&V.offset>W&&(V.edge=x+1,V.offset=M(V.offset-W)))},F,!1),this._vertex=x+1,this.drag={kind:"vertex",roomId:T,index:x+1,base:F,moved:!0};return}let _=o.closest("[data-wall-end]");if(_&&this.isAdmin){let[x,z]=_.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:x,end:z,start:i,startScreen:n,base:this._doc,moved:!1};return}let g=o.closest("[data-free-wall]");if(g){let x=g.getAttribute("data-free-wall");this.selectItem("wall",x),this.drag=this.isAdmin?{kind:"wallmove",id:x,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let v=o.closest("[data-out-box]");if(v&&this.isAdmin){let[x,z]=v.getAttribute("data-out-box").split(":");this.drag={kind:"outbox",id:x,corner:Number(z),base:this._doc,moved:!1};return}let w=o.closest("[data-out-vertex]");if(w&&this.isAdmin){let[x,z]=w.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:x,index:Number(z),base:this._doc,moved:!1};return}let $=o.closest("[data-outdoor]");if($&&!o.closest("[data-room]")&&!this.roomAt(i)){let x=$.getAttribute("data-outdoor");this.selectItem("outdoor",x),this.drag=this.isAdmin?{kind:"outdoor",id:x,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let k=o.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(k){k!==this._roomId&&(this._vertex=null),this.selectItem("room",k),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:k,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(e){if(this.pressStart){let o=this.localPoint(e);Math.hypot(o[0]-this.pressStart[0],o[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let t=this.localPoint(e);if(this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.pinch){let o=this.pinchState();o&&(this.zoomAt(o.dist/Math.max(1,this.pinch.dist),...o.mid),this._view={...this._view,ox:this._view.ox+o.mid[0]-this.pinch.mid[0],oy:this._view.oy+o.mid[1]-this.pinch.mid[1]},this.pinch=o);return}let n=this.toWorld(...t),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,e.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]},i.last=t;break;case"tap":(i.panning||Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]}),i.last=t;break;case"rect":i.end=this.snap(n,void 0,e.altKey),this.requestUpdate();break;case"freewall":{let o=this.snap(n,void 0,e.altKey);e.shiftKey&&(o=Math.abs(o[0]-i.start[0])>Math.abs(o[1]-i.start[1])?[o[0],i.start[1]]:[i.start[0],o[1]]),i.end=o,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=(i.base.floors.find(s=>s.id===this._floorId)?.walls??[]).find(s=>s.id===i.id);if(!o)return;let r;if(i.end){let s=this.snap(n,void 0,e.altKey);r=i.end==="a"?{a:s,b:o.b}:{a:o.a,b:s}}else{let s=e.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-i.start[0])/s)*s,d=Math.round((n[1]-i.start[1])/s)*s;r={a:[M(o.a[0]+l),M(o.a[1]+d)],b:[M(o.b[0]+l),M(o.b[1]+d)]}}this.change((s,l)=>Object.assign((l.walls??[]).find(d=>d.id===i.id),r),i.base,!1);break}case"vertex":{let o=this.snap(n,{roomId:i.roomId,index:i.index},e.altKey);i.moved=!0,this.change((r,s)=>{s.rooms.find(l=>l.id===i.roomId).points[i.index]=o},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(d=>d.id===this._floorId)?.rooms.find(d=>d.id===i.roomId);if(!o)return;let r=this.roomDelta(o,[n[0]-i.start[0],n[1]-i.start[1]],e.altKey),s=i.base.floors.find(d=>d.id===this._floorId),l=new Set(s.placements.filter(d=>K([d.x,d.z],o.points)).map(d=>d.entity_id));this.change((d,c)=>{let h=c.rooms.find(u=>u.id===i.roomId);h.points=o.points.map(([u,p])=>[M(u+r[0]),M(p+r[1])]),c.placements=s.placements.map(u=>l.has(u.entity_id)?{...u,x:M(u.x+r[0]),z:M(u.z+r[1])}:u)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=e.altKey?.01:this._doc.settings.grid,r=M(Math.round((n[0]-i.start[0])/o)*o),s=M(Math.round((n[1]-i.start[1])/o)*o),l=i.base.settings.roof.sections?.find(d=>d.id===i.id);if(!l)return;this.change(d=>{let c=d.settings.roof.sections?.find(h=>h.id===i.id);c&&(Object.assign(c,{x0:M(l.x0+r),x1:M(l.x1+r),z0:M(l.z0+s),z1:M(l.z1+s)}),l.points&&(c.points=l.points.map(([h,u])=>[M(h+r),M(u+s)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let o=i.base.settings.roof.solar?.find(u=>u.id===i.id),r=o?Ie(i.base,o):null;if(!o||!r)return;let[s,l]=ti(r,o),d=Math.atan2(n[0]-s,-(n[1]-l))*180/Math.PI,c=e.altKey?1:15;d=Math.round(d/c)*c;let h=ei(i.base,o,d);this.change(u=>{let p=u.settings.roof.solar?.find(f=>f.id===i.id);p&&Object.assign(p,h)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.win?i.base.settings.roof.windows?.find(_=>_.id===i.id):void 0,r=i.win?o?wn(o):void 0:i.base.settings.roof.solar?.find(_=>_.id===i.id),s=i.win?ce(i.base):[...ce(i.base),...this._floorId?rt(i.base,this._floorId):[]],l=r?Ie(i.base,r,s):null;if(!r||!l)return;let d=e.altKey?.01:.05,c=_=>M(Math.round(_/d)*d),h=l.unbounded?null:Dl(s,n),u=l,p,f;if(h&&i.grab)u=h.face,p=c(h.u-i.grab.du),f=Number.isNaN(h.s)?h.face.key===r.face?r.v:Math.max(0,h.face.ls-1.5):c(h.s-i.grab.ds);else{let _=n[0]-i.start[0],g=n[1]-i.start[1],v=[l.es[0],l.es[2]],w=v[0]*v[0]+v[1]*v[1]||1;p=c(r.u+_*l.eu[0]+g*l.eu[2]),f=c(r.v+(_*v[0]+g*v[1])/w)}let m=vn(u,{...r,face:u.key,u:p,v:f,tilt:u.flat?r.tilt??15:r.tilt});this.change(_=>{if(i.win){let v=_.settings.roof.windows?.find(w=>w.id===i.id);v&&Object.assign(v,{face:u.key,...m});return}let g=_.settings.roof.solar?.find(v=>v.id===i.id);g&&Object.assign(g,{face:u.key,...m},u.flat&&g.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outbox":{i.moved=!0;let o=this.snap(n,void 0,e.altKey),r=i.base.floors.find(g=>g.id===this._floorId)?.outdoor.find(g=>g.id===i.id);if(!r?.pool_shape)return;let s=xe(r.points),d=[[s.x0,s.z0],[s.x1,s.z0],[s.x1,s.z1],[s.x0,s.z1]][(i.corner+2)%4],c=o[0]-d[0],h=o[1]-d[1];if(r.pool_shape==="round"){let g=Math.max(Math.abs(c),Math.abs(h),.5);c=Math.sign(c||1)*g,h=Math.sign(h||1)*g}else c=Math.sign(c||1)*Math.max(Math.abs(c),.5),h=Math.sign(h||1)*Math.max(Math.abs(h),.5);let u=Math.min(d[0],d[0]+c),p=Math.max(d[0],d[0]+c),f=Math.min(d[1],d[1]+h),m=Math.max(d[1],d[1]+h),_=r.pool_shape;this.change((g,v)=>{let w=v.outdoor.find($=>$.id===i.id);w&&(w.points=$i(_,M(u),M(f),M(p),M(m)))},i.base,!1);break}case"pipept":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change((r,s)=>{let l=s.outdoor.find(d=>d.id===i.pool)?.pool?.pipes?.find(d=>d.id===i.pipe);l&&(l.points[i.index]=[M(o[0]),M(o[1])])},i.base,!1);break}case"poolport":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change((r,s)=>{let l=s.outdoor.find(u=>u.id===i.pool),d=l?.pool?.ports?.find(u=>u.id===i.id);if(!l||!d)return;let[c,h]=d.kind==="skimmer"||d.kind==="inlet"?Ni(l.points,o):o;d.x=M(c),d.z=M(h)},i.base,!1);break}case"pooljoint":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let o=i.base.floors.flatMap(s=>s.outdoor).find(s=>s.id===i.pool)?.pool?.joints?.find(s=>s.id===i.id);if(!o)break;let r=this.snap([o.x+n[0]-i.start[0],o.z+n[1]-i.start[1]],void 0,e.altKey);if(o.kind==="wall"){let s=[-(o.nz??0),o.nx??0],l=(r[0]-o.x)*s[0]+(r[1]-o.z)*s[1];r=[o.x+s[0]*l,o.z+s[1]*l]}this.change(s=>{let l=s.floors.flatMap(d=>d.outdoor).find(d=>d.id===i.pool)?.pool?.joints?.find(d=>d.id===i.id);l&&([l.x,l.z]=[M(r[0]),M(r[1])])},i.base,!1);break}case"pooldev":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let o=i.base.floors.flatMap(s=>s.furniture).find(s=>s.id===i.id);if(!o)break;let r=this.snap([o.x+n[0]-i.start[0],o.z+n[1]-i.start[1]],void 0,e.altKey);this.change(s=>{let l=s.floors.flatMap(d=>d.furniture).find(d=>d.id===i.id);l&&([l.x,l.z]=[M(r[0]),M(r[1])])},i.base,!1);break}case"outvertex":{i.moved=!0;let o=this.snap(n,void 0,e.altKey),r=i.base.floors.find(s=>s.id===this._floorId)?.outdoor.find(s=>s.id===i.id);if(!r)return;this.change((s,l)=>{let d=l.outdoor.find(u=>u.id===i.id);if(!d)return;let c=r.points.map(u=>[...u]),h=i.index;c[h]=[M(o[0]),M(o[1])],Ct(c)&&(d.points=c,d.freeform=!0)},i.base,!1);break}case"cablept":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(r=>{let s=r.settings.roof.cables?.find(l=>l.id===i.id);s&&s.points[i.index]&&(s.points[i.index]=[M(o[0]),M(o[1])])},i.base,!1);break}case"holopt":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(r=>r.settings.roof.hologram={...r.settings.roof.hologram??wi,place:"free",x:M(o[0]),z:M(o[1])},i.base,!1);break}case"bgmove":{i.moved=!0;let o=n[0]-i.start[0],r=n[1]-i.start[1];this.change((s,l)=>{l.background&&(l.background.x=M(i.bx+o),l.background.z=M(i.bz+r))},i.base,!1);break}case"bgrotate":{i.moved=!0;let o=this.floor?.background,r=o?this._images[o.image_id]:void 0;if(!o||!r)break;let s=o.width*r.aspect,l=[o.x+o.width/2,o.z+s/2],d=Math.atan2(n[1]-l[1],n[0]-l[0]),c=i.rot+(d-i.start)*180/Math.PI;c=e.shiftKey?Math.round(c/15)*15:Math.round(c*10)/10,c=((c+180)%360+360)%360-180,this.change((h,u)=>{u.background&&(u.background.rotation=c)},i.base,!1);break}case"bgscale":{i.moved=!0;let o=this.floor?.background,r=o?this._images[o.image_id]:void 0;if(!o||!r)break;let[s]=this.bgLocal(o,n,r.aspect),l=Math.max(.5,M(s));this.change((d,c)=>{c.background&&(c.background.width=l)},i.base,!1);break}case"roofvertex":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(r=>{let s=r.settings.roof.sections?.find(c=>c.id===i.id);if(!s)return;let l=this.roofPoints(s);if(i.index>=l.length)return;let d=l.map((c,h)=>h===i.index?[M(o[0]),M(o[1])]:c);Ct(d)&&(s.points=d,Object.assign(s,gt(d)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(r=>{let s=r.settings.roof.sections?.find(l=>l.id===i.id);s&&(i.corner[0]?s.x1=M(o[0]):s.x0=M(o[0]),i.corner[1]?s.z1=M(o[1]):s.z0=M(o[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(d=>d.id===this._floorId),r=o?.openings.find(d=>d.id===i.id),s=r&&o?xt(r,o.rooms,o.walls??[]):null;if(!r||!s)return;let l=this.offsetOnEdge(s.room,s.edge,n,r.width,e.altKey);this.change((d,c)=>Object.assign(c.openings.find(h=>h.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(h=>h.id===this._floorId)?.furniture.find(h=>h.id===i.id);if(!o)return;let r=e.altKey?.01:this._doc.settings.grid,s=M(Math.round((o.x+n[0]-i.start[0])/r)*r),l=M(Math.round((o.z+n[1]-i.start[1])/r)*r),d=o.rotation,c=e.altKey?null:this.snapToWall({...o,x:s,z:l});c&&({x:s,z:l,rotation:d}=c),this.change((h,u)=>Object.assign(u.furniture.find(p=>p.id===i.id),{x:s,z:l,rotation:d}),i.base,!1);break}case"furnset":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=e.altKey?.01:this._doc.settings.grid,r=M(Math.round((n[0]-i.start[0])/o)*o),s=M(Math.round((n[1]-i.start[1])/o)*o),l=new Set(i.ids);this.change((d,c)=>{for(let h of c.furniture)l.has(h.id)&&Object.assign(h,{x:M(h.x+r),z:M(h.z+s)})},i.base,!1);break}case"marquee":i.end=n,this.requestUpdate();break;case"outdoor":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(d=>d.id===this._floorId)?.outdoor.find(d=>d.id===i.id);if(!o)return;let r=e.altKey?.01:this._doc.settings.grid,s=Math.round((n[0]-i.start[0])/r)*r,l=Math.round((n[1]-i.start[1])/r)*r;this.change((d,c)=>{let h=c.outdoor.find(u=>u.id===i.id);h.points=o.points.map(([u,p])=>[M(u+s),M(p+l)]),h.pool?.ports&&o.pool?.ports&&(h.pool.ports=o.pool.ports.map(u=>({...u,x:M(u.x+s),z:M(u.z+l)})))},i.base,!1);break}case"resize":{i.moved=!0;let o=i.base.floors.find(s=>s.id===this._floorId)?.furniture.find(s=>s.id===i.id);if(!o)return;let r=na(o,i.corner,n,e.altKey?.01:this._doc.settings.grid);this.change((s,l)=>Object.assign(l.furniture.find(d=>d.id===i.id),r),i.base,!1);break}case"rotate":{i.moved=!0;let o=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!o)return;let r=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,s=e.altKey?1:15;r=(Math.round(r/s)*s%360+360)%360,this.change((l,d)=>Object.assign(d.furniture.find(c=>c.id===i.id),{rotation:r}),i.base,!1);break}case"aim":{i.moved=!0;let o=i.base.floors.find(d=>d.id===this._floorId)?.placements.find(d=>d.entity_id===i.entityId);if(!o)return;let r=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,s=e.altKey?1:5;r=(Math.round(r/s)*s%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-o.x,n[1]-o.z)*10)/10));this.change((d,c)=>Object.assign(c.placements.find(h=>h.entity_id===i.entityId),{rotation:r,reach:l}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(d=>d.id===this._floorId)?.placements.find(d=>d.entity_id===i.entityId);if(!o)return;let r=e.altKey?.01:this._doc.settings.grid,s=M(Math.round((o.x+n[0]-i.start[0])/r)*r),l=M(Math.round((o.z+n[1]-i.start[1])/r)*r);this.change((d,c)=>Object.assign(c.placements.find(h=>h.entity_id===i.entityId),{x:s,z:l}),i.base,!1);break}}}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let t=this.drag;if(this.drag=null,!t||e.type==="pointercancel"){t&&ad.has(t.kind)&&"moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base);return}let n=this.localPoint(e);switch(t.kind){case"freewall":{Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1])>=.2&&this.addFreeWall(t.start,t.end),this._guides={};break}case"wallmove":t.moved&&this.pushHistory(t.base),this._guides={};break;case"rect":{let[i,o]=t.start,[r,s]=t.end;if(Math.abs(r-i)>=.2&&Math.abs(s-o)>=.2){let l=[Math.min(i,r),Math.min(o,s)],d=[Math.max(i,r),Math.max(o,s)],c=[l,[d[0],l[1]],d,[l[0],d[1]]];t.outdoor?this.addOutdoor(c):t.hole?this.addHole(l,d):t.roof?this.addRoofSection(l,d):this.addRoom(c)}this._guides={};break}case"tap":if(t.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,e.altKey),n);break;case"marquee":{let[i,o]=[Math.min(t.start[0],t.end[0]),Math.max(t.start[0],t.end[0])],[r,s]=[Math.min(t.start[1],t.end[1]),Math.max(t.start[1],t.end[1])],l=(this.floor?.furniture??[]).filter(d=>d.x>=i&&d.x<=o&&d.z>=r&&d.z<=s).map(d=>d.id);l.length&&this.setMulti([...new Set([...this.selection(),...this.withGroups(l)])]);break}case"opening":case"furniture":case"furnset":case"rotate":case"aim":case"resize":case"outdoor":case"outvertex":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"outbox":case"pipept":case"poolport":case"pooljoint":t.moved?this.pushHistory(t.base):(t.kind==="poolport"||t.kind==="pooljoint")&&this.openCard(t.pool,`${t.kind==="poolport"?"port":"joint"}:${t.id}`);break;case"holopt":case"bgmove":case"bgscale":case"bgrotate":t.moved&&this.pushHistory(t.base);break;case"pooldev":{t.moved?this.pushHistory(t.base):this._doc.floors.flatMap(i=>i.furniture).find(i=>i.id===t.id)?.type==="pool_valve"?this.togglePoolValve(t.id):this.poolArea&&this.openCard(this.poolArea.id,`dev:${t.id}`);break}case"device":t.moved?this.pushHistory(t.base):this.selectItem("device",t.entityId);break;case"vertex":case"room":t.moved&&this.pushHistory(t.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[t,n]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),t,n)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t[0]-n[0],t[1]-n[1]),mid:[(t[0]+n[0])/2,(t[1]+n[1])/2]}}pushHistory(e){this.past.push(JSON.stringify(e)),this.past.length>ld&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,t,n){if(n)return t;let i=this._doc.settings.grid,o=[Math.round(t[0]/i)*i,Math.round(t[1]/i)*i],s=so/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let d of l.points)for(let c of e.points){let h=Math.hypot(c[0]+t[0]-d[0],c[1]+t[1]-d[1]);h<s&&(s=h,o=[d[0]-c[0],d[1]-c[1]],this._guides={point:d})}return o}roomAt(e){return(this.floor?.rooms??[]).filter(i=>K(e,i.points)).sort((i,o)=>We(i.points)-We(o.points))[0]?.id??null}addDraftPoint(e,t){let n=this._draft;if(n.length>=3){let[o,r]=this.toScreen(n[0]);if(Math.hypot(o-t[0],r-t[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-e[0],i[1]-e[1])<1e-6||(this._draft=[...n,e])}get drawingPolygon(){return this._tool==="polygon"||(this._tool==="outdoor"||this._tool==="roof")&&this._drawShape==="polygon"||this._tool==="pool"&&!this._pipeMode&&this._outdoorFree}renderDrawShape(){return b`<div class="fp3d-shape-controls">
      <div class="fp3d-seg" role="group" aria-label=${this.t("contour_draw")}>
        ${["rect","polygon"].map(e=>b`<button ?disabled=${!this.isAdmin} aria-pressed=${this._drawShape===e} @click=${()=>{this._drawShape=e,this._draft=[],this._cursor=null,this._tool==="roof"&&(this._roofId=null)}}>${this.t(e==="rect"?"tool_rect":"tool_polygon")}</button>`)}
      </div>
      ${this.drawingPolygon?b`<span class="fp3d-sub">${this.t("contour_draw_hint")}</span>
        <button class="fp3d-btn" ?disabled=${!this.isAdmin||this._draft.length<3} @click=${()=>this.closeDraft()}>${this.t("contour_finish")}</button>
        <button class="fp3d-btn" title=${this.t("undo")} ?disabled=${!this._draft.length} @click=${()=>this._draft=this._draft.slice(0,-1)}>↶</button>`:y}
    </div>`}renderPointList(e,t,n,i,o){return b`<details class="fp3d-points" ?open=${o}>
      <summary>${this.t("points")} (${e.length})</summary>
      ${e.map((r,s)=>b`<div class="fp3d-point ${s===i?"fp3d-point-sel":""}">
        <span class="fp3d-muted">${s+1}</span>
        ${this.len(this.t("x"),r[0],l=>t(s,0,l))} ${this.len(this.t("z"),r[1],l=>t(s,1,l))}
        ${this.isAdmin?b`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${e.length<=3} @click=${()=>n(s)}>×</button>`:y}
      </div>`)}
    </details>`}renderContour(e,t,n,i){let o=s=>this.isAdmin?Ct(s)?(i(s),!0):(alert(this.t("contour_invalid")),!1):!1,r=this._contourVertex;return this.renderPointList(n,(s,l,d)=>{let c=n.map(h=>[...h]);c[s][l]=M(d),o(c)&&(this._contourVertex={kind:e,id:t,index:s})},s=>{n.length>3&&o(n.filter((l,d)=>d!==s))&&(this._contourVertex=null)},r?.kind===e&&r.id===t?r.index:null,!0)}roofPoints(e){return e.points??[[Math.min(e.x0,e.x1),Math.min(e.z0,e.z1)],[Math.max(e.x0,e.x1),Math.min(e.z0,e.z1)],[Math.max(e.x0,e.x1),Math.max(e.z0,e.z1)],[Math.min(e.x0,e.x1),Math.max(e.z0,e.z1)]]}renderContourActions(e){return this.isAdmin?b`<div class="fp3d-actions">
      ${e==="roof"||this.outdoorArea?.type==="pergola"?b`<button class="fp3d-btn" @click=${()=>{let t=e==="roof"?this.roofSpotSurface(this.roofSection):this.pergolaSpotSurface(this.outdoorArea);this.openSpotForm(t)}}>${this.t("spots_place")}</button>`:y}
      <button class="fp3d-btn" @click=${()=>e==="roof"?this.duplicateRoofSection():this.duplicateOutdoor()}>${this.t("duplicate")}</button>
      <button class="fp3d-btn fp3d-danger" @click=${()=>e==="roof"?this.deleteRoofSection():this.deleteOutdoor()}>${this.t("delete")}</button>
    </div>`:y}closeDraft(){if(this._tool==="outdoor"||this._tool==="pool"||this._tool==="roof"){if(!Ct(this._draft)){alert(this.t("contour_invalid"));return}if(this._tool!=="roof")this.addOutdoor(this._draft,!0);else{let e=gt(this._draft);this.addRoofSection([e.x0,e.z0],[e.x1,e.z1],this._draft)}}else this._draft.length>=3&&Math.abs(We(this._draft))>.05&&this.addRoom(this._draft);this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let t=this._draft[this._draft.length-1];if(!t||!(this._measureLen>0))return;let n=rn(t,this._measureLen,e),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let e=this._draft[0]??[0,0],[t,n]=this._rectSize;t>.1&&n>.1&&(this.addRoom([e,rn(e,t,"right"),rn(rn(e,t,"right"),n,"down"),rn(e,n,"down")]),this._draft=[])}renderMeasureForm(){let e=this._draft,t=e[0],n=e[e.length-1],i=t&&n&&e.length>1?Math.hypot(n[0]-t[0],n[1]-t[1]):0,o=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],r=s=>Ve(this.hass,s,2);return b`<section>
      <h3>${this.t("measure")}</h3>
      ${t?b`<p class="fp3d-sub">${this.t("measure_from",{x:this.m(t[0]),z:this.m(t[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${Vn(this.t("measure_length"),this.unit)}
                <input
                  class="fp3d-measure-input"
                  type=${this.unit==="imperial"?"text":"number"}
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${this.lenValue(this._measureLen)}
                  @change=${s=>this._measureLen=this.readLen(s.target.value)??0}
                  @keydown=${s=>{let l={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"}[s.key];l?(s.preventDefault(),this.measureStep(l)):s.key==="Enter"&&this.closeDraft()}}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${o.map(([s,l])=>b`<button class="fp3d-btn fp3d-arrow-${s}" title=${this.t(`dir_${s}`)} @click=${()=>this.measureStep(s)}>${l}</button>`)}
              </div>
            </div>
            ${e.length>1?b`<ol class="fp3d-measure-list">
                  ${e.slice(1).map((s,l)=>b`<li>${this.m(Math.hypot(s[0]-e[l][0],s[1]-e[l][1]))}</li>`)}
                </ol>`:y}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${e.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${e.length<2} @click=${()=>this._draft=e.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${e.length>=3?b`<p class="fp3d-sub">${this.t("measure_gap",{gap:r(i)})}</p>`:y}`:b`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.len(this.t("width"),this._rectSize[0],s=>this._rectSize=[Math.max(.1,s),this._rectSize[1]],.01,.1)}
        ${this.len(this.t("depth"),this._rectSize[1],s=>this._rectSize=[this._rectSize[0],Math.max(.1,s)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(e,t){if(!this.floor)return;let n={id:G("wall"),a:[M(e[0]),M(e[1])],b:[M(t[0]),M(t[1])],thickness:null};this.change((i,o)=>o.walls=[...o.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(e){let t=this._wallId;t&&this.change((n,i)=>Object.assign((i.walls??[]).find(o=>o.id===t),e))}deleteFreeWall(){let e=this._wallId;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((t,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==e),n.openings=n.openings.filter(i=>i.wall!==e)}),this._wallId=null)}renderFreeWalls(e){return I`<g>${(e.walls??[]).map(t=>{let[n,i]=this.toScreen(t.a),[o,r]=this.toScreen(t.b),s=t.id===this._wallId;return I`<g data-free-wall=${t.id} class=${`fp3d-free-wall${s?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${i} x2=${o} y2=${r} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${i} x2=${o} y2=${r} />
      </g>
      ${s&&this.isAdmin&&!$o(t,!0,this._doc.settings)?I`<g class="fp3d-vertex" data-wall-end=${`${t.id}:a`}><circle cx=${n} cy=${i} r="16" class="fp3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${t.id}:b`}><circle cx=${o} cy=${r} r="16" class="fp3d-hit" /><circle cx=${o} cy=${r} r="6" /></g>`:y}`})}</g>`}renderFreeWallForm(e){let t=this.isAdmin,n=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]),i=s=>{let d=Math.max(.1,s)/(n||1);this.updateFreeWall({b:[M(e.a[0]+(e.b[0]-e.a[0])*d),M(e.a[1]+(e.b[1]-e.a[1])*d)]})},o=[(e.a[0]+e.b[0])/2,(e.a[1]+e.b[1])/2],r=(s,l)=>{let d=l-o[s],c=h=>s===0?[M(h[0]+d),h[1]]:[h[0],M(h[1]+d)];this.updateFreeWall({a:c(e.a),b:c(e.b)})};return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",e.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"),o[0],s=>r(0,s))} ${this.len(this.t("z"),o[1],s=>r(1,s))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"),n,i,.01,.1)}
        ${this.len(this.t("wall_thickness"),e.thickness??this._doc.settings.wall_interior,s=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,s))}),.01,.02)}
        ${this.len(this.t("wall_height"),e.height??this.floor?.height??2.5,s=>this.updateFreeWall({height:s>=(this.floor?.height??2.5)-.005?null:Math.max(.05,s)}),.05,.05)}
      </div>
      ${t?b`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:y}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(e,t){if(!this.floor)return;let n={id:G("hole"),type:"stairwell",x:M((e[0]+t[0])/2),z:M((e[1]+t[1])/2),w:M(t[0]-e[0]),d:M(t[1]-e[1]),h:.02,rotation:0,variant:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id),this._tool="select"}addOutdoor(e,t=!0){if(!this.floor)return;let n=this._tool==="pool"?"pool":this._outdoorType??"lawn",i={id:G("outdoor"),type:n,points:e.map(([r,s])=>[M(r),M(s)]),...t?{freeform:!0}:{}},o=n==="pool"&&!this._outdoorFree?this._poolShape:"rect";if(o==="round"||o==="oval"){let r=xe(i.points);i.points=$i(o,r.x0,r.z0,r.x1,r.z1),i.pool_shape=o}n==="pool"&&fe("pool")&&(i.pool={}),this.change((r,s)=>s.outdoor.push(i)),this.selectItem("outdoor",i.id),this._tool!=="pool"&&(this._tool="select")}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(e){let t=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(o=>o.id===t),e))}deleteOutdoor(){let e=this._outdoorId;if(!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e))return;let t=this.floor?.outdoor.find(i=>i.id===e),n=t?.pool?.pipes?.length??0;t?.type==="pool"&&n&&!confirm(this.t("pool_delete_confirm",{n}))||(this.change((i,o)=>o.outdoor=o.outdoor.filter(r=>r.id!==e)),this._outdoorId=null)}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let t={...e,id:G("outdoor"),points:e.points.map(([n,i])=>[M(n+.5),M(i+.5)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id)}addRoom(e){if(!this.floor)return;let t=G("room"),n=this.floor.rooms.length+1;this.change((i,o)=>o.rooms.push({id:t,name:this.t("new_room",{n}),area_id:null,points:e.map(([r,s])=>[M(r),M(s)]),floor_material:"wood"})),this._roomId=t,this._vertex=null,this._tool="select"}onKey=e=>{if(this.shiftHeld=e.shiftKey,e.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=e.ctrlKey||e.metaKey;if(!(this._wallView&&!(n&&["z","y"].includes(e.key.toLowerCase())))){if(n&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(n&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(n&&e.key.toLowerCase()==="d")e.preventDefault(),this._furnitureId?this.duplicateFurniture():this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._contourVertex&&(this._contourVertex.kind==="outdoor"&&this._contourVertex.id===this._outdoorId||this._tool==="roof"&&this._contourVertex.kind==="roof"&&this._contourVertex.id===this._roofId)?this.deleteContourVertex():this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(e.key.toLowerCase()==="l"&&!n&&this._furnitureId&&this.selection().length>1)this.lockSelection(!this.selection().every(i=>this.isFixedItem("furniture",i)));else if(e.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.hasOwn(dd,e.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[o,r]=dd[e.key];this.nudge(o*i,r*i)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this.drawingPolygon&&this._draft.length)e.preventDefault(),this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this.drawingPolygon&&this._draft.length)e.preventDefault(),this.closeDraft();else if(e.key==="Escape"){if(this._ctx){this._ctx=null;return}if(this._pipeDraft){this._pipeDraft=null;return}if(this._pipeMode){this._pipeMode=!1;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}}};nudge(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.selectedFix,o=this._furnitureId?this.selection():[];if(i&&this.isFixedItem(i.kind,i.id)||o.some(s=>this.isFixedItem("furniture",s)))return this._fixedHint=!0,!0;let r=s=>[M(s[0]+e),M(s[1]+t)];if(o.length>1){let s=new Set(o);return this.change((l,d)=>{for(let c of d.furniture)s.has(c.id)&&([c.x,c.z]=r([c.x,c.z]))}),!0}if(this._deviceId){let s=this._deviceId;if(!n.placements.some(l=>l.entity_id===s))return!1;this.change((l,d)=>{let c=d.placements.find(h=>h.entity_id===s);[c.x,c.z]=r([c.x,c.z])})}else if(this._furnitureId){let s=this._furnitureId;this.change((l,d)=>{let c=d.furniture.find(h=>h.id===s);c&&([c.x,c.z]=r([c.x,c.z]))})}else if(this._openingId){let s=this.opening,l=s?xt(s,n.rooms,n.walls??[]):null;if(!s||!l)return!1;let d=l.room.points[l.edge],c=l.room.points[(l.edge+1)%l.room.points.length],h=Math.hypot(c[0]-d[0],c[1]-d[1])||1,u=(e*(c[0]-d[0])+t*(c[1]-d[1]))/h;if(Math.abs(u)<1e-9)return!0;let p=Math.min(s.width,h)/2;this.updateOpening({offset:M(Math.min(h-p,Math.max(p,s.offset+u)))})}else if(this._wallId){let s=this._wallId;this.change((l,d)=>{let c=(d.walls??[]).find(h=>h.id===s);c&&([c.a,c.b]=[r(c.a),r(c.b)])})}else if(this._outdoorId){let s=this._outdoorId;this.change((l,d)=>{let c=d.outdoor.find(h=>h.id===s);c&&(c.points=c.points.map(r))})}else if(this._roomId){let s=this._roomId,l=this._vertex,d=n.rooms.find(h=>h.id===s);if(!d)return!1;let c=new Set(n.placements.filter(h=>K([h.x,h.z],d.points)).map(h=>h.entity_id));this.change((h,u)=>{let p=u.rooms.find(f=>f.id===s);if(l!==null&&l<p.points.length){p.points[l]=r(p.points[l]);return}p.points=p.points.map(r);for(let f of u.placements)c.has(f.entity_id)&&([f.x,f.z]=r([f.x,f.z]))})}else return!1;return!0}get freeHaFloors(){let e=new Set(this._doc.floors.map(t=>t.ha_floor));return Object.values(this.hass?.floors??{}).filter(t=>!e.has(t.floor_id)).sort((t,n)=>(t.level??99)-(n.level??99)||t.name.localeCompare(n.name))}unplacedAreas(e){if(!e.ha_floor)return[];let t=new Set(this._doc.floors.flatMap(n=>n.rooms.map(i=>i.area_id)));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===e.ha_floor&&!t.has(n.area_id)).sort((n,i)=>n.name.localeCompare(i.name))}addFloor(e=null){let t=this._doc.floors,n=G("floor"),i=e?.name??(t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length})),o={...Qr(n,i,ea(t,e?.level)),ha_floor:e?.floor_id??null},r=structuredClone(this._doc),s=r.floors.findIndex(l=>l.elevation>o.elevation);r.floors.splice(s<0?r.floors.length:s,0,o),this.setDoc(r),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(e){let t=this.unplacedAreas(e);if(!t.length)return;let n=ta(e,t,()=>G("room"));this.change((i,o)=>o.rooms.push(...n)),this.fit()}moveFloor(e){let t=this._doc.floors.findIndex(o=>o.id===this._floorId),n=t+e;if(t<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[t],i.floors[n]]=[i.floors[n],i.floors[t]],this.setDoc(i)}deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let t=structuredClone(this._doc);t.floors=t.floors.filter(n=>n.id!==e.id),this.setDoc(t),this._floorId=t.floors[0]?.id??null,this._roomId=null}deleteRoom(){let e=this._roomId;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((t,n)=>{let i=n.rooms.find(o=>o.id===e);n.rooms=n.rooms.filter(o=>o.id!==e),n.openings=n.openings.filter(o=>o.room_id!==e||o.wall),i&&(n.placements=n.placements.filter(o=>!K([o.x,o.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let t=G("room");this.change((n,i)=>i.rooms.push({...structuredClone(e),id:t,points:e.points.map(([o,r])=>[M(o+.5),M(r+.5)])})),this._roomId=t}roofFixed(e){return!!e&&(!!e.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let e=[...this._doc.floors].sort((t,n)=>n.elevation-t.elevation);return e.length<2?y:b`<div class="fp3d-seg fp3d-dev-source">
      ${e.map(t=>b`<button aria-pressed=${t.id===this._floorId} @click=${()=>this._floorId=t.id}>${t.name}</button>`)}
    </div>`}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(e=>e.id===this._roofId):void 0}useRoofSections(e=!1){if(!this.isAdmin)return;let t=(this._doc.settings.roof.sections??[]).length>0;e&&t&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(e||!t)&&(n.settings.roof.sections=zl(n,()=>G("roof")))}),this._roofId=null)}addRoofSection(e,t,n){if(!this.isAdmin)return;let i=Pl(this._doc,e[0],e[1],t[0],t[1]),o=Math.min(...this._doc.floors.map(c=>c.elevation)),r=i===null,s=M(i??o+2.4),l=r?6:this._doc.settings.roof.pitch||35,d={id:G("roof"),x0:M(e[0]),z0:M(e[1]),x1:M(t[0]),z1:M(t[1]),shape:r?"pent":"gable",axis:t[0]-e[0]>=t[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:l,pitch_b:l,base:s,overhang:r?.15:null,...r?{open:!0}:{},...n?{points:n.map(([c,h])=>[M(c),M(h)])}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],d]}),this._roofId=d.id}takeRoofOutline(){let e=this.floor,t=this._roofId;if(!e||!t||!this.isAdmin)return;let n=yl(e.rooms,e.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let i=n.map(([o,r])=>[M(o),M(r)]);this.updateRoofSection({points:i,...gt(i)})}addDormer(e){let t=this.roofSection;if(!t||!this.isAdmin)return;let n=xl(t,e,G("roof"));this.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(e){let t=this._roofId;!t||!this.isAdmin||(e.locked===!1&&(this._fixedHint=!1),this.change(n=>{let i=n.settings.roof.sections?.find(o=>o.id===t);i&&Object.assign(i,e)}))}deleteRoofSection(){let e=this._roofId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.sections=(t.settings.roof.sections??[]).filter(n=>n.id!==e)),this._roofId=null)}duplicateRoofSection(){let e=this.roofSection;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:G("roof"),x0:M(e.x0+1),x1:M(e.x1+1),z0:M(e.z0+1),z1:M(e.z1+1)};e.points&&(t.points=e.points.map(([n,i])=>[M(n+1),M(i+1)])),this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],t]),this._roofId=t.id}renderRoofSections(){let e=this._doc.settings.roof,t=e.type==="custom"?e.sections??[]:[];return I`<g class="fp3d-roof-layer">${t.map((n,i)=>{let o=n.id===this._roofId,r=Qe(n),s=n.points&&n.points.length>=3?n.points:null,l=$l(t,n),d=l?Qe(Sl(l,n)):r,c=(s??[d.at(d.u0,0),d.at(d.u1,0),d.at(d.u1,d.w),d.at(d.u0,d.w)]).map(g=>this.toScreen(g)),h=(g,v)=>{let[w,$]=this.toScreen(g),[k,x]=this.toScreen(v);return I`<line x1=${w} y1=${$} x2=${k} y2=${x} />`},u=n.shape==="flat"||n.shape==="parapet"?null:Bt(n,{u0:0,u1:0,a:0,b:0}),p=u?I`${u.ridges.map(([g,v])=>h(r.at(g[0],g[1]),r.at(v[0],v[1])))}`:y,[f,m]=this.toScreen(r.at((r.u0+r.u1)/2,r.w/2)),_=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${this.m(Ki(n),1)}`;return I`<g data-roof=${n.id} class=${`fp3d-roof-sec${o?" fp3d-roof-sel":""}`}>
          <polygon points=${c.map(g=>g.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${p}</g>
          <text x=${f} y=${m-14}>${_}</text>
        </g>
        ${o&&this._tool==="roof"&&this.isAdmin&&!this.roofFixed(n)&&!this._draft.length?this.renderPolygonHandles(this.roofPoints(n),"roof",n.id,this._contourVertex?.kind==="roof"&&this._contourVertex.id===n.id?this._contourVertex.index:null):y}`})}</g>`}faceHit(e,t){return e.wall?{u:(t[0]-e.o[0])*e.eu[0]+(t[1]-e.o[2])*e.eu[2],s:Number.NaN}:Gi(e,t)}renderSolarFields(){let e=this._doc.settings.roof.solar??[];if(!e.length)return y;let t=ce(this._doc);return I`<g class="fp3d-solar-layer">${e.map(n=>{let i=Ie(this._doc,n,t);if(!i||i.wall&&i.wall.floorId!==this._floorId)return y;let o=n.id===this._solarId,r=y;if(o&&i.unbounded&&this.isAdmin&&!n.locked){let[s,l]=ti(i,n),d=(n.rotation??0)*Math.PI/180,c=.9+Math.max(...bt(i,n,!0).flatMap(m=>m.corners.map(_=>Math.hypot(_[0]-s,_[2]-l))))*.5,[h,u]=this.toScreen([s,l]),[p,f]=this.toScreen([s+Math.sin(d)*c,l-Math.cos(d)*c]);r=I`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${h} y1=${u} x2=${p} y2=${f} />
          <circle cx=${p} cy=${f} r="16" class="fp3d-hit" />
          <circle cx=${p} cy=${f} r="8" />
          <path d="M${p-4} ${f-1}a4 4 0 1 1 2 3.5" />
        </g>`}return I`<g data-solar=${n.id} class=${`fp3d-solar${o?" fp3d-solar-sel":""}${o&&this._solarPick?" fp3d-solar-pick":""}`}>${bt(i,n,o).map(s=>{let l=i.wall?Math.max(.3,...s.corners.map(c=>(c[0]-i.o[0])*i.n[0]+(c[2]-i.o[2])*i.n[2])):0,d=i.wall?[s.corners[0],s.corners[1]].flatMap((c,h)=>{let u=[c[0],c[2]],p=[c[0]+i.n[0]*l,c[2]+i.n[2]*l];return h===0?[u,p]:[p,u]}):s.corners.map(c=>[c[0],c[2]]);return I`<polygon data-cell=${s.cell} class=${s.skipped?"fp3d-solar-off":""} points=${d.map(c=>this.toScreen(c).join(",")).join(" ")} />`})}</g>${r}`})}</g>`}renderRoofWindows(){let e=this._doc.settings.roof.windows??[];if(!e.length)return y;let t=new Map(ce(this._doc).map(n=>[n.key,n]));return I`<g class="fp3d-roofwin-layer">${e.map(n=>{let i=t.get(n.face),o=i?Hl(i,n):null;return o?I`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${o.map(r=>this.toScreen([r[0],r[2]]).join(",")).join(" ")} /></g>`:y})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let e=ce(this._doc).filter(i=>!i.flat),t=Zi(e,this._doc.settings.north??0)??ce(this._doc)[0];if(!t)return;let n=xs(t,G("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(e){let t=this._roofWinId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.windows?.find(r=>r.id===t);if(!i)return;Object.assign(i,e);let o=ce(n).find(r=>r.key===i.face);o&&Object.assign(i,vn(o,wn(i)))})}deleteRoofWindow(){let e=this._roofWinId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.windows=(t.settings.roof.windows??[]).filter(n=>n.id!==e)),this._roofWinId=null)}renderRoofWindowList(){let e=this._doc.settings.roof.windows??[],t=new Map(ce(this._doc).map(n=>[n.key,n]));return b`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(t.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${e.length?b`<div class="fp3d-room-list">
            ${e.map((n,i)=>{let o=t.get(n.face);return b`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${o?this.faceLabel(o):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin||!t.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(e){let t=this.isAdmin,n=ce(this._doc),i=l=>this.updateRoofWindow(l),o=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===e.id)+1,r=this.entityOptions(l=>l.startsWith("cover.")),s=this.entityOptions(l=>Os(l)||Ae(l));return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${o}</h3>
          ${t?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:y}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!t} @change=${l=>{let d=n.find(c=>c.key===l.target.value);d&&i({...xs(d,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name,float:e.float})}}>
              ${n.map(l=>b`<option value=${l.key} ?selected=${l.key===e.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"),e.w??.78,l=>i({w:Math.max(.3,Math.min(4,M(l)))}),.01,.3)}
          ${this.len(this.t("height_m"),e.h??1.18,l=>i({h:Math.max(.3,Math.min(4,M(l)))}),.01,.3)}
          ${this.len(this.t("solar_u"),e.u,l=>i({u:M(l)}),.05)}
          ${this.len(this.t("solar_v"),e.v,l=>i({v:M(l)}),.05)}
          <label class="fp3d-field fp3d-wide">${this.t("roof_window_hinge")}
            <select ?disabled=${!t} @change=${l=>i({hinge:l.target.value})}>
              ${["top","middle","bottom"].map(l=>b`<option value=${l} ?selected=${(e.hinge??"top")===l}>${this.t(`roof_window_hinge_${l}`)}</option>`)}
            </select>
          </label>
          ${this.entitySelect(this.t("cover_entity"),e.cover??null,void 0,r,l=>i({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),e.contact??null,void 0,s,l=>i({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),e.tilt??null,void 0,s,l=>i({tilt:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_motor"),e.window??null,void 0,r,l=>i({window:l==="none"?null:l}))}
          <label class="fp3d-field fp3d-wide"
            >${this.t("roof_window_name")}
            <input .value=${e.name??""} ?disabled=${!t} maxlength="64" @change=${l=>i({name:l.target.value.trim()||null})}
          /></label>
        </div>
        <label class="fp3d-check"
          ><input type="checkbox" ?disabled=${!t} .checked=${!!e.float} @change=${l=>i({float:l.target.checked||void 0})} />
          ${this.t("roof_window_float")}</label
        >
        <p class="fp3d-sub">${this.t("roof_window_float_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${t?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:y}
      </section>`}cableSegments(){if(this.cableCache?.doc===this._doc)return this.cableCache.segs;let e=this._doc,t=new Map((e.settings.roof.solar??[]).map(o=>[o.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},i=[];try{i=Xl({building:e,consumers:[],summary:n,fieldPower:t}).filter(o=>o.key)}catch{i=[]}return this.cableCache={doc:e,segs:i},i}cableKeys(){let e=[...new Set(this.cableSegments().map(n=>n.key))],t=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return e.sort((n,i)=>t(n)-t(i)||n.localeCompare(i))}cableLabel(e){let t=s=>{let l=this._doc.floors.flatMap(d=>d.furniture).find(d=>d.id===s);return l?l.name||this.t(`furn_${l.type}`):"?"},n=this._doc.floors.flatMap(s=>s.furniture).find(s=>s.type==="meter"),i=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(e==="grid")return`${i} \u2192 ${this.t("furn_grid_point")}`;let[o,r]=[e.slice(0,e.indexOf(":")),e.slice(e.indexOf(":")+1)];if(o==="solar"){let s=this._doc.settings.roof.solar??[],l=s.findIndex(c=>c.id===r);return`${s[l]?.name||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return o==="inv"?`${t(r)} \u2192 ${i}`:`${this.t("furn_inverter")} \u2194 ${t(r)}`}layCable(e){if(!this.isAdmin||!this._floorId)return;let t=[];for(let o of this.cableSegments().filter(r=>r.key===e))for(let r of[o.a,o.b]){let s=[M(r[0]),M(r[2])],l=t[t.length-1];(!l||Math.hypot(l[0]-s[0],l[1]-s[1])>.05)&&t.push(s)}let n=t.length>2?t.slice(1,-1):t,i=this._floorId;this.change(o=>{o.settings.roof.cables=[...(o.settings.roof.cables??[]).filter(r=>r.id!==e),{id:e,floor_id:i,points:n.length?n:[t[0]??[0,0]],height:.03}]}),this._cableId=e}renderCables(){if(!fe("energy_pro"))return y;let e=this.cableSegments();if(!e.length)return y;let t=e.filter(r=>r.floorId===this._floorId),n=this._doc.settings.roof.cables??[],i=this._cableId,o=[...new Set(e.map(r=>r.key))];return I`<g class="fp3d-cable-layer">${o.map(r=>{let s=n.find(_=>_.id===r),l=`fp3d-cable fp3d-cable-${r.split(":")[0]}${s?" fp3d-cable-laid":""}${r===i?" fp3d-cable-sel":""}`,d=e.filter(_=>_.key===r),c=t.filter(_=>_.key===r).map(_=>{let g=this.toScreen([_.a[0],_.a[2]]),v=this.toScreen([_.b[0],_.b[2]]);return I`<line x1=${g[0]} y1=${g[1]} x2=${v[0]} y2=${v[1]} />`});if(!(s&&r===i&&s.floor_id===this._floorId&&!s.locked))return c.length?I`<g class=${l} data-cable=${r}><g class="fp3d-cable-hit">${c}</g>${c}</g>`:y;let h=d[0],u=d[d.length-1],p=[this.toScreen([h.a[0],h.a[2]]),...s.points.map(_=>this.toScreen(_)),this.toScreen([u.b[0],u.b[2]])],f=p.slice(0,-1).map((_,g)=>I`<line class="fp3d-cable-piece" data-cable-line=${r} data-cable-seg=${g} x1=${_[0]} y1=${_[1]} x2=${p[g+1][0]} y2=${p[g+1][1]} />`),m=s.points.map((_,g)=>{let v=this.toScreen(_);return I`<g class="fp3d-vertex" data-cable-pt=${`${r}:${g}`}><circle cx=${v[0]} cy=${v[1]} r="16" class="fp3d-hit" /><circle cx=${v[0]} cy=${v[1]} r="6" /></g>`});return I`<g class=${l} data-cable=${r}>${c}${f}${m}</g>`})}</g>`}renderCableSettings(){let e=this.cableKeys();if(!e.length)return y;let t=this.isAdmin,n=this._doc.settings.roof.cables??[],i=this._cableId?n.find(o=>o.id===this._cableId):void 0;return b`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${e.map(o=>b`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${o===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=o===this._cableId?null:o;let r=n.find(s=>s.id===o);this._cableId&&r&&this._doc.floors.some(s=>s.id===r.floor_id)&&(this._floorId=r.floor_id)}}
            >
              <span>${this.cableLabel(o)}${n.some(r=>r.id===o)?b` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:y}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?b`<div class="fp3d-actions">
              ${i?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!i.locked} title=${this.t("fix_hint")} ?disabled=${!t} @click=${()=>this.change(o=>{let r=o.settings.roof.cables?.find(s=>s.id===i.id);r&&(r.locked=!r.locked)})}>
                      ${i.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(o=>o.settings.roof.cables=(o.settings.roof.cables??[]).filter(r=>r.id!==this._cableId))}>${this.t("cable_auto")}</button>`:b`<button class="fp3d-btn fp3d-primary" ?disabled=${!t||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${i?b`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"),i.height,o=>this.change(r=>{let s=r.settings.roof.cables?.find(l=>l.id===i.id);s&&(s.height=Math.min(30,Math.max(0,M(o))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${i.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:this._doc.floors.find(o=>o.id===i.floor_id)?.name??""})}</p>`:y}`:y}
    </section>`}renderEnergyMarkers(){let e=this.floor;if(!e)return y;let t={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"},n=this._doc.settings.roof.hologram,i=fe("energy_pro")&&n?.place==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return I`<g class="fp3d-energy-markers">${i?I`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${i[0]} cy=${i[1]} r="17" />
          <text x=${i[0]} y=${i[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${i[0]} y=${i[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:y}${e.furniture.filter(o=>ut.includes(o.type)).map(o=>{let[r,s]=this.toScreen([o.x,o.z]),l=o.id===this._furnitureId;return I`<g data-energy-device=${o.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${r} cy=${s} r="17" />
          <text x=${r} y=${s+6} class="fp3d-energy-icon">${t[o.type]??"\u26A1"}</text>
          ${l?I`<text x=${r} y=${s+32} class="fp3d-energy-name">${this.t(`furn_${o.type}`)}</text>`:y}
          <title>${this.t(`furn_${o.type}`)}</title>
        </g>`})}</g>`}faceLabel(e){if(e.key===zt)return this.t("solar_ground");if(e.wall){let{floorId:o,room:r,edge:s,free:l}=e.wall,d=this._doc.floors.find(u=>u.id===o),c=d?.rooms.find(u=>u.id===r),h=l?this.t("solar_wall_free"):c?`${c.name}${s!=null?` ${s+1}\u2013${(s+1)%c.points.length+1}`:""}`:"";return`${this.t("solar_wall")} ${d?.name??""} \xB7 ${h?`${h} \xB7 `:""}${this.t(`compass_${$s(e,this._doc.settings.north??0)}`)} \xB7 ${this.m(e.lu,2)}`}let t=this._doc.settings.roof.sections??[],n=e.section?this.t("solar_section",{n:t.findIndex(o=>o.id===e.section)+1}):this.t("solar_main");if(e.flat)return`${n} \xB7 ${this.t("solar_flat")}`;let i=e.side==="c"||e.side==="d"?` \xB7 ${this.t("roof_shape_hip")}`:"";return`${n} \xB7 ${this.t(`compass_${$s(e,this._doc.settings.north??0)}`)} \xB7 ${Math.round(e.pitch)}\xB0${i}`}addSolarField(){if(!this.isAdmin)return;let e=ce(this._doc),t=new Set((this._doc.settings.roof.solar??[]).map(r=>r.face)),n=this._doc.settings.north??0,i=Zi(e.filter(r=>!t.has(r.key)),n)??Zi(e,n);if(!i)return;let o=Ui(i,G("pv"));this.change(r=>r.settings.roof.solar=[...r.settings.roof.solar??[],o]),this._solarId=o.id,this._roofId=null}selectSolar(e){this._solarId=e,this._roofId=null;let t=this._doc.settings.roof.solar?.find(n=>n.id===e);t?.face.startsWith("wall:")&&(this._floorId=t.face.split(":")[1])}addWallField(){if(!this.isAdmin)return;let e=this._floorId??this._doc.floors[0]?.id,t=e?Il(this._doc,G("pv"),e):null;t&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],t]),this._solarId=t.id)}addGroundField(){if(!this.isAdmin)return;let e=bs(this._doc,G("pv"));this.change(t=>t.settings.roof.solar=[...t.settings.roof.solar??[],e]),this._solarId=e.id}updateSolar(e){let t=this._solarId;!t||!this.isAdmin||(e.locked===!1&&(this._fixedHint=!1),this.change(n=>{let i=n.settings.roof.solar?.find(r=>r.id===t);if(!i)return;Object.assign(i,e);let o=Ie(n,i);o&&Object.assign(i,vn(o,i))}))}setSolarString(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof,o=i.solar?.find(s=>s.id===t);if(!o)return;if(e==="new"){let s=i.strings??[],l={id:G("str"),name:this.t("solar_string_n",{n:s.length+1}),entity:o.entity??null,inverter:null};i.strings=[...s,l],o.string=l.id}else o.string=e;let r=new Set((i.solar??[]).map(s=>s.string).filter(Boolean));i.strings=(i.strings??[]).filter(s=>r.has(s.id))})}updateSolarString(e){let n=this._doc.settings.roof.solar?.find(i=>i.id===this._solarId)?.string;!n||!this.isAdmin||this.change(i=>{let o=i.settings.roof.strings?.find(r=>r.id===n);o&&Object.assign(o,e)})}toggleSolarCell(e){this.updateSolarField(t=>{let n=new Set(t.skip??[]);n.has(e)?n.delete(e):n.add(e),t.skip=n.size?[...n].sort():null})}updateSolarField(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(o=>o.id===t);i&&e(i)})}deleteSolar(){let e=this._solarId;!e||!this.isAdmin||(this.change(t=>{let n=t.settings.roof;n.solar=(n.solar??[]).filter(o=>o.id!==e);let i=new Set(n.solar.map(o=>o.string).filter(Boolean));n.strings=(n.strings??[]).filter(o=>i.has(o.id))}),this._solarId=null)}renderSolarList(){let e=this._doc.settings.roof.solar??[],t=ce(this._doc),n=new Map(e.map(o=>[o.id,Ie(this._doc,o,t)])),i=this.isAdmin;return b`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(t.length?"solar_hint":"solar_no_roof")}</p>
      ${e.length?b`<div class="fp3d-room-list">
            ${e.map((o,r)=>{let s=n.get(o.id),l=s?bt(s,o).length:0;return b`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(o.id)}
                >
                  <span>${o.name||`${this.t("solar_field")} ${r+1}`} · ${s?this.faceLabel(s):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:Ve(this.hass,l*(o.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!i||!t.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?b`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(o=>{let r=e.filter(c=>c.string===o.id),s=r.map(c=>n.get(c.id)?bt(n.get(c.id),c).length:0),l=s.reduce((c,h)=>c+h,0),d=r.reduce((c,h,u)=>c+s[u]*(h.wp??400)/1e3,0);return b`<p class="fp3d-sub">🔗 <b>${o.name}</b> · ${this.t("solar_string_sum",{fields:r.length,n:l,kwp:Ve(this.hass,d,1)})}</p>`})}`:y}
    </section>`}renderSolarForm(e){let t=this.isAdmin,n=ce(this._doc),i=rt(this._doc),o=Ie(this._doc,e,n),r=e.face===zt,s=o?bt(o,e).length:0,l=Qn(e),d=l.reduce((p,f)=>p+f,0)-(e.skip?.length??0),c=this.entityOptions(p=>this.isPowerSensor(p)),h=p=>this.updateSolar(p),u=(this._doc.settings.roof.solar??[]).findIndex(p=>p.id===e.id)+1;return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${e.name||`${this.t("solar_field")} ${u}`}</h3>
          ${t?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:y}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!t}
              .value=${e.name??""}
              placeholder=${this.t("solar_name_hint")}
              @change=${p=>h({name:p.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!t}
              @change=${p=>{let f=p.target.value,m={portrait:e.portrait,look:e.look,name:e.name,string:e.string,entity:e.entity,module_w:e.module_w,module_h:e.module_h,wp:e.wp};f===zt&&h({...bs(this._doc,e.id),...m,rows:e.rows,cols:e.cols});let _=n.find(v=>v.key===f);_&&h(ks(_,{...e,...m}));let g=i.find(v=>v.key===f);g&&h(ks(g,{...e,...m,rows:1}))}}
            >
              ${o?y:b`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(p=>b`<option value=${p.key} ?selected=${p.key===e.face}>${this.faceLabel(p)}</option>`)}
              <option value=${zt} ?selected=${r}>${this.t("solar_ground")}</option>
              ${i.map(p=>b`<option value=${p.key} ?selected=${p.key===e.face}>${this.faceLabel(p)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,p=>{let f=Math.max(1,Math.min(40,Math.round(p)));h(e.layout?.length?{layout:Array.from({length:f},(m,_)=>e.layout[_]??e.layout[e.layout.length-1]),rows:f}:{rows:f})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!t}
              .value=${e.layout?.length?e.layout.join(", "):String(e.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${p=>{let f=p.target.value.split(/[,;\s]+/).map(m=>parseInt(m,10)).filter(m=>Number.isFinite(m)&&m>=0);f.length&&(f.length===1?h({cols:Math.max(1,Math.min(60,f[0])),layout:null,skip:null}):h({layout:f.slice(0,40).map(m=>Math.min(60,m)),rows:Math.min(40,f.length),cols:Math.max(1,...f),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${o&&!o.unbounded?b`${this.t("solar_face_size",{w:Ve(this.hass,o.lu,1),h:Ve(this.hass,o.ls,1)})} · `:y}${this.t("solar_cols_hint")}
        </p>
        ${e.layout?.length&&new Set(e.layout).size>1?b`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(p=>b`<button aria-pressed=${(e.align??"left")===p} ?disabled=${!t} @click=${()=>h({align:p})}>${this.t(`solar_align_${p}`)}</button>`)}
            </div>`:y}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${e.portrait!==!1} ?disabled=${!t} @click=${()=>h({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${e.portrait===!1} ?disabled=${!t} @click=${()=>h({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${e.look!=="blue"} ?disabled=${!t} @click=${()=>h({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${e.look==="blue"} ?disabled=${!t} @click=${()=>h({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.len(this.t("solar_module_w"),e.module_w??1.13,p=>h({module_w:Math.max(.3,Math.min(3,M(p)))}),.01,.3)}
          ${this.len(this.t("solar_module_h"),e.module_h??1.72,p=>h({module_h:Math.max(.3,Math.min(3,M(p)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),e.wp??400,p=>h({wp:Math.max(50,Math.min(1500,Math.round(p)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!t} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${e.skip?.length?b`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>h({skip:null})}>${this.t("solar_pick_all")}</button>`:y}
        </div>
        ${this._solarPick?b`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:y}
        <div class="fp3d-form">
          ${r?b`${this.len(this.t("solar_base"),e.base??0,p=>h({base:p>.001?Math.min(60,M(p)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),e.rotation??0,p=>h(ei(this._doc,e,p)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>h(ei(this._doc,e,(e.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>h(ei(this._doc,e,(e.rotation??0)+15))}>↻ 15°</button>
                </div>`:b`${this.len(this.t("solar_u"),e.u,p=>h({u:M(p)}),.05)} ${this.num(this.t(o?.wall?"solar_v_wall":"solar_v"),e.v,p=>h({v:M(p)}),.05)}`}
          ${o?.wall?b`${this.num(this.t("solar_tilt_wall"),e.tilt??0,p=>h({tilt:Math.max(0,Math.min(90,Math.round(p)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${p=>h({flip:p.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:y}
          ${o?.flat?b`${this.num(this.t("solar_tilt"),e.tilt??15,p=>h({tilt:Math.max(0,Math.min(45,Math.round(p)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${p=>h({flip:p.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:y}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:s,kwp:Ve(this.hass,s*(e.wp??400)/1e3,1)})}${s<d?b` · <b>${this.t("solar_partial",{n:s,total:d})}</b>`:y}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!t} @change=${p=>{let f=p.target.value;this.setSolarString(f===""?null:f)}}>
              <option value="" ?selected=${!e.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(p=>b`<option value=${p.id} ?selected=${p.id===e.string}>${p.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let p=this._doc.settings.roof.strings?.find(_=>_.id===e.string);if(!p)return this.entitySelect(this.t("solar_entity"),e.entity??null,void 0,c,_=>h({entity:_==="none"?null:_}));let f=this.hass?ln(this.hass,this._doc.floors):null,m=this._doc.floors.flatMap(_=>_.furniture.filter(g=>g.type==="inverter").map(g=>({m:g,fl:_}))).map(({m:_,fl:g},v)=>{let w=f?.get(_.id)?.entity,$=_.name?.trim()||(w&&this.hass?ge(this.hass,w):"");return{id:_.id,label:`${$||`${this.t("furn_inverter")} ${v+1}`} \xB7 ${g.name}`}});return b`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!t} .value=${p.name} @change=${_=>this.updateSolarString({name:_.target.value.trim()||p.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),p.entity??null,void 0,c,_=>this.updateSolarString({entity:_==="none"?null:_}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!t} @change=${_=>this.updateSolarString({inverter:_.target.value||null})}>
                  <option value="" ?selected=${!p.inverter}>${this.t(m.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${m.map(_=>b`<option value=${_.id} ?selected=${_.id===p.inverter}>${_.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${t?b`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!o} @click=${()=>o&&h({...Ui(o,e.id),portrait:e.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:y}
      </section>`}renderRoofPanel(){let e=this._doc.settings.roof,t=this.isAdmin,n=e.type==="custom"?this.roofSection:void 0,i=this._roofWinId?e.windows?.find(r=>r.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let o=e.type==="custom"?e.sections??[]:[];return b`<section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${e.type!=="custom"?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!t} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:b`<div class="fp3d-room-list">
              ${o.map((r,s)=>b`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=r.id}>
                    <span>${s+1} · ${r.dormer?this.t("roof_dormer"):this.t(`roof_shape_${r.shape}`)} · ${this.m(Math.abs(r.x1-r.x0),1)} × ${this.m(Math.abs(r.z1-r.z0),1)} · ${this.t("roof_ridge_height")} ${this.m(Ki(r),1)}</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(r=>r.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){let e=this._solarId?this._doc.settings.roof.solar?.find(i=>i.id===this._solarId):void 0;if(e)return this.renderSolarForm(e);let t=this._furnitureId?this.floor?.furniture.find(i=>i.id===this._furnitureId&&ut.includes(i.type)):void 0;if(t)return b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(t)}`;let n=fe("energy_pro");return b`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():y}${n?this.renderHologramSettings():y}${this.renderProCard()}`}renderHologramSettings(){let e=this._doc.settings.roof.solar??[],t=this.isAdmin,n=this._doc.settings.roof.hologram??wi,i=n.place==="free",o=l=>this.change(d=>d.settings.roof.hologram={...d.settings.roof.hologram??wi,...l}),r=(l,d)=>l.name||`${this.t("solar_field")} ${d+1}`,s=()=>{let l=-1/0,d=1/0,c=-1/0;for(let u of this._doc.floors)for(let p of u.rooms)for(let[f,m]of p.points)l=Math.max(l,f),d=Math.min(d,m),c=Math.max(c,m);let h=Number.isFinite(l);o({place:"free",x:n.x??(h?M(l+2):0),z:n.z??(h?M((d+c)/2):0),height:n.height??3})};return b`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!t} @change=${l=>l.target.value==="free"?s():o({place:"field"})}>
            <option value="field" ?selected=${!i}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${i}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${i?b`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)",n.x??0,l=>o({x:M(l)}),.25)} ${this.len("Z (m)",n.z??0,l=>o({z:M(l)}),.25)}
              ${this.len(this.t("holo_height"),n.height??3,l=>o({height:Math.min(60,Math.max(0,M(l)))}),.25,0)}`:e.length?b`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!t} @change=${l=>o({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${e.map((l,d)=>b`<option value=${l.id} ?selected=${l.id===n.field}>${r(l,d)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"),n.right,l=>o({right:Math.min(30,Math.max(-30,M(l)))}),.25)}
              ${this.len(this.t("holo_up"),n.up,l=>o({up:Math.min(30,Math.max(-30,M(l)))}),.25)}`:b`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`}
        ${this.num(this.t("holo_size"),n.size,l=>o({size:Math.min(3,Math.max(.3,M(l)))}),.1,.3)}
        ${this.num(this.t("holo_device_min_w"),n.device_min_w??0,l=>o({device_min_w:Math.max(0,Math.round(l))}),1,0)}
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_house_hint")}
          ><input type="checkbox" .checked=${n.device_house!==!1} ?disabled=${!t} @change=${l=>o({device_house:l.target.checked?void 0:!1})} />
          ${this.t("holo_device_house")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_room_hint")}
          ><input type="checkbox" .checked=${!!n.device_room} ?disabled=${!t} @change=${l=>o({device_room:l.target.checked||void 0})} />
          ${this.t("holo_device_room")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_plant_floor_hint")}
          ><input type="checkbox" .checked=${!!n.plant_floor} ?disabled=${!t} @change=${l=>o({plant_floor:l.target.checked||void 0})} />
          ${this.t("holo_plant_floor")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_mirror_hint")}
          ><input type="checkbox" .checked=${n.mirror!==!1} ?disabled=${!t} @change=${l=>o({mirror:l.target.checked?void 0:!1})} />
          ${this.t("holo_mirror")}</label
        >
      </div>
    </section>`}isPowerSensor(e){if(!Ae(e))return!1;let t=this.hass?.states[e]?.attributes;return t?.device_class==="power"||t?.unit_of_measurement==="W"||t?.unit_of_measurement==="kW"}devicePower(e,t){return e.power&&e.power!=="none"?e.power:t.get(e.id)?.power??null}renderEnergyChecklist(){let e=this._doc,t=this.hass?ln(this.hass,e.floors):new Map,n=e.floors.flatMap(g=>g.furniture.map(v=>({m:v,fl:g}))),i=g=>n.filter(v=>v.m.type===g),o=g=>{this._floorId=g.fl.id,this._solarId=null,this.selectItem("furniture",g.m.id),this.showPoint(g.m.x,g.m.z)},r=e.settings.roof.solar??[],s=i("meter"),l=i("inverter"),d=i("home_battery"),c=i("grid_point"),h=!!e.energy.grid||s.some(g=>this.devicePower(g.m,t)),u=!!e.energy.solar||l.length>0&&l.every(g=>this.devicePower(g.m,t)),p=d.every(g=>this.devicePower(g.m,t)&&g.m.soc&&g.m.soc!=="none")||!!e.energy.battery,f=fe("energy_pro"),m=[{state:r.length?"ok":"todo",label:this.t(r.length?"chk_solar":"chk_solar_add"),action:r.length?()=>this._solarId=r[0].id:()=>this.addSolarField()},s.length?{state:h?"ok":"todo",label:this.t(h?"chk_meter":"chk_meter_sensor"),action:()=>o(s[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:u?"ok":"todo",label:this.t(u?"chk_inverter":"chk_inverter_sensor"),action:()=>o(l.find(g=>!this.devicePower(g.m,t))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},d.length?{state:p?"ok":"todo",label:this.t(p?"chk_battery":"chk_battery_sensor"),action:()=>o(d[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},c.length?{state:"ok",label:this.t("chk_grid"),action:()=>o(c[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")},f?{state:"ok",label:this.t("chk_pro_active")}:{state:"opt",label:this.t("chk_pro_get"),href:Ye(this.hass?.language)}],_=m.filter(g=>g.state==="ok").length;return b`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${_}/${m.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${m.map(g=>g.href?b`<a class="fp3d-chk fp3d-chk-${g.state}" href=${g.href} target="_blank" rel="noopener"><span>${g.state==="ok"?"\u2713":g.state==="todo"?"\u25CB":"\xB7"}</span>${g.label}</a>`:b`<button class="fp3d-chk fp3d-chk-${g.state}" ?disabled=${!this.isAdmin&&!!g.action&&g.state!=="ok"} @click=${g.action}><span>${g.state==="ok"?"\u2713":g.state==="todo"?"\u25CB":"\xB7"}</span>${g.label}</button>`)}
    </section>`}renderHelpLinks(){return b`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
        <a class="fp3d-btn" href="https://discord.gg/SSdVVFsev7" target="_blank" rel="noopener">💬 ${this.t("help_discord")}</a>
      </div>
    </section>`}renderProCard(){let e=this.hass?.language;if(fe("energy_pro"))return b`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${Vt(e,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
      </section>`;let t=new URL("./images/solar-pro.jpg",import.meta.url).href;return b`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>⚡ ${this.t("pro_name_energy_pro")}</b><a class="fp3d-btn fp3d-primary" href=${Ye(e)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
      <img src=${t} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
      <div class="fp3d-actions"><a class="fp3d-btn" href=${Vt(e,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`}addEnergyDevice(e){let t=this.floor;if(!t||!this.isAdmin)return;if(e==="grid_point"){let v=Fs(this._doc),[w,$,k]=Te(e),[x,z]=v?v.end:this.toWorld(this._size.w/2,this._size.h/2),S={id:G("furniture"),type:e,x:M(x),z:M(z),rotation:0,w,d:$,h:k,variant:null};this.change((A,P)=>P.furniture.push(S)),this.selectItem("furniture",S.id),this.showPoint(S.x,S.z);return}let n=v=>`${v.name} ${v.area_id&&this.hass?.areas?.[v.area_id]?.name||""} ${v.area_id??""}`.toLowerCase(),i=t.rooms.filter(v=>v.points.length>=3),o=v=>i.find(w=>v.test(n(w))),r=i.find(v=>t.furniture.some(w=>w.type==="parking"&&K([w.x,w.z],v.points))),s=o(/garage|carport/)??r,l=o(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),d=o(/flur|diele|eingang|hall|entr|lobby/),c=(e==="wallbox"?s:e==="meter"?l??d??s:l??s)??this.room??i.sort((v,w)=>Math.abs(me(w.points))-Math.abs(me(v.points)))[0],[h,u,p]=Te(e),[f,m]=c?Xe(c.points):this.toWorld(this._size.w/2,this._size.h/2);if(c){let[v,w]=Xe(c.points),$=null,k=new Set(t.openings.filter(S=>S.room_id===c.id).map(S=>S.edge)),x=c.points.some((S,A)=>!k.has(A));c.points.forEach((S,A)=>{if(x&&k.has(A))return;let P=c.points[(A+1)%c.points.length],F=Math.hypot(P[0]-S[0],P[1]-S[1]);if($&&F<=$.l)return;let T=(S[0]+P[0])/2,O=(S[1]+P[1])/2,L=-(P[1]-S[1])/F,D=(P[0]-S[0])/F;(v-T)*L+(w-O)*D<0&&([L,D]=[-L,-D]),$={mx:T,mz:O,nx:L,nz:D,l:F}});let z=$;z&&([f,m]=[z.mx+z.nx*(u/2+.25),z.mz+z.nz*(u/2+.25)])}let _={id:G("furniture"),type:e,x:M(f),z:M(m),rotation:0,w:h,d:u,h:p,variant:null},g=c?Cn({...t,furniture:[...t.furniture,_]},_,this._doc.settings.wall_interior):null;g&&Object.assign(_,{x:M(g.x),z:M(g.z),rotation:g.rotation}),this.change((v,w)=>w.furniture.push(_)),this.selectItem("furniture",_.id),this.showPoint(_.x,_.z)}renderEnergyDevices(){let e=this.isAdmin,t=this._doc.floors.flatMap(n=>n.furniture.filter(i=>ut.includes(i.type)).map(i=>({fl:n,m:i})));return b`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${t.length?b`<div class="fp3d-room-list">
            ${t.map(({fl:n,m:i})=>b`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}}
                >
                  <span>${i.name||this.t(`furn_${i.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:y}
      <div class="fp3d-actions">
        ${ut.map(n=>b`<button
            class="fp3d-btn"
            ?disabled=${!e||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(e){let t=this.isAdmin,n=g=>this.updateRoofSection(g),i=this.roofPoints(e),o=Ai(i),r=gt(i),s=(g,v)=>{let{x0:w,z0:$,x1:k,z1:x}=r;g==="x"&&([w,k]=[v,v+k-w]),g==="z"&&([$,x]=[v,v+x-$]),g==="w"&&(k=w+Math.max(.05,v)),g==="d"&&(x=$+Math.max(.05,v));let z=[[w,$],[k,$],[k,x],[w,x]].map(([S,A])=>[M(S),M(A)]);n({points:z,...gt(z)})},l=e.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[d,c]=e.flip?[l[1],l[0]]:l,h=e.shape==="flat"||e.shape==="parapet",u=e.shape==="pent",p=g=>g.findIndex(v=>v.id===e.id)+1,f=(g,v,w,$=.05,k=0)=>this.len(g,v,x=>w(Math.max(k,M(x))),$,k),m=(g,v,w)=>this.num(g,v,$=>w(Math.max(0,M($))),1,0),_=!!this._doc.settings.lock_plan;return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${e.dormer?this.t("roof_dormer"):this.t("roof_section")} ${p(this._doc.settings.roof.sections??[])}</h3>
          ${t?_?b`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!e.locked})}>
                  ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:y}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!t} @change=${g=>n({shape:g.target.value})}>
            ${Br.map(g=>b`<option value=${g} ?selected=${e.shape===g}>${this.t(`roof_shape_${g}`)}</option>`)}
          </select>
        </label>
        ${h?y:b`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${e.axis==="x"} ?disabled=${!t} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${e.axis==="z"} ?disabled=${!t} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${g=>n({open:g.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${o?b`${this.num(this.t("x"),r.x0,g=>s("x",g))} ${this.num(this.t("z"),r.z0,g=>s("z",g))}
            ${this.num(this.t("width"),r.x1-r.x0,g=>s("w",g),.01,.05)} ${this.num(this.t("depth"),r.z1-r.z0,g=>s("d",g),.01,.05)}`:y}
          ${h?f(this.t("roof_height"),e.eave_a,g=>n({eave_a:g,eave_b:g})):b`${f(`${this.t("roof_eave")} ${u?"":d}`,e.eave_a,g=>n({eave_a:g}))}
              ${u?y:f(`${this.t("roof_eave")} ${c}`,e.eave_b,g=>n({eave_b:g}))}
              ${m(`${this.t("roof_pitch_short")} ${u?"":d}`,e.pitch_a,g=>n({pitch_a:Math.min(75,g)}))}
              ${u?y:m(`${this.t("roof_pitch_short")} ${c}`,e.pitch_b,g=>n({pitch_b:Math.min(75,g)}))}`}
          ${f(this.t("roof_base"),e.base,g=>n({base:g}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!t}
              @change=${g=>{let v=this._doc.floors.find(k=>k.id===g.target.value);if(!v)return;let w=M(v.elevation+v.height),$=w-e.base;n({base:w,eave_a:M(e.eave_a+$),eave_b:M(e.eave_b+$)})}}
            >
              ${[...this._doc.floors].filter(g=>g.rooms.length).sort((g,v)=>v.elevation-g.elevation).map(g=>b`<option value=${g.id} ?selected=${fs(this._doc,e)?.id===g.id}>${g.name}</option>`)}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${f(this.t("roof_overhang"),e.overhang??this._doc.settings.roof.overhang,g=>n({overhang:Math.min(2,g)}),.05,0)}
        </div>
        ${t&&!this.roofFixed(e)?b`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${e.points?b`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:y}
            </div>
            <p class="fp3d-sub">${this.t(e.points?"roof_points_hint":"roof_outline_hint")}</p>`:y}
        ${this.renderContour("roof",e.id,this.roofPoints(e),g=>n({points:g,...gt(g)}))}
        ${this.renderContourActions("roof")}
        ${this.renderSpotForm(this.roofSpotSurface(e))}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(Ki(e),2)} · ${this.t("roof_section_hint")}</p>
        ${t?b`<div class="fp3d-actions">
              ${h?y:b`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!e.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!h&&!e.dormer&&!e.open?b`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${d}</button>
                  ${u?y:b`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${c}</button>`}`:y}
            </div>`:y}
      </section>`}fixItem(e,t,n){if(e)switch(t){case"room":return e.rooms.find(i=>i.id===n);case"opening":return e.openings.find(i=>i.id===n);case"furniture":return e.furniture.find(i=>i.id===n);case"device":return e.placements.find(i=>i.entity_id===n);case"wall":return(e.walls??[]).find(i=>i.id===n);case"outdoor":return e.outdoor.find(i=>i.id===n)}}isFixedItem(e,t){return $o(this.fixItem(this.floor,e,t),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,t){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let n=!this.isFixedItem(e,t);n||(this._fixedHint=!1),this.change((i,o)=>{let r=this.fixItem(o,e,t);r&&(r.locked=n)})}toggleLockPlan(){this.isAdmin&&(this._doc.settings.lock_plan&&(this._fixedHint=!1),this.change(e=>e.settings.lock_plan=!e.settings.lock_plan))}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(e,t){return!this.isFixedItem(e,t)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,t){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...t),i=f=>e.closest(`[${f}]`)?.getAttribute(f)??null,o=null,r=i("data-device"),s=i("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),d=i("data-free-wall"),c=i("data-outdoor"),h=i("data-room")??this.roomAt(n);if(r?o=["device",r]:s?o=["opening",s]:l?o=["furniture",l]:d?o=["wall",d]:c&&!h?o=["outdoor",c]:h&&(o=["room",h]),!o){this._ctx=null;return}let[u,p]=o;this.selectItem(u,p),(u==="opening"||u==="furniture")&&(this._roomId=this._roomId??h),this._ctx={x:t[0],y:t[1],kind:u,id:p}}deleteItem(e,t){if(e==="device"){if(!this.confirmFixedDelete(e,t))return;this.removeDevice(t),this._deviceId=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return y;let t=this.isFixedItem(e.kind,e.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),i=Math.max(4,Math.min(e.x,(n?.clientWidth??800)-190)),o=Math.max(4,Math.min(e.y,(n?.clientHeight??600)-190)),r=s=>()=>{this._ctx=null,s()};return b`<div class="fp3d-ctx" style=${`left:${i}px;top:${o}px`} @pointerdown=${s=>s.stopPropagation()} @contextmenu=${s=>s.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?b`<button title=${this.t("fix_hint")} @click=${r(()=>this.toggleFixed(e.kind,e.id))}>${t?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:b`<button title=${this.t("lock_plan_hint")} @click=${r(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?b`<button @click=${r(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:y}
      ${e.kind==="furniture"?b`<button @click=${r(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${t} @click=${r(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${t} @click=${r(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${r(()=>{let s=this.floor?.furniture.find(l=>l.id===e.id);s&&this.openWallViewFor(s)})}>▦ ${this.t("wall_view")}</button>`:y}
      <button class="fp3d-ctx-danger" @click=${r(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,t){if(!this.isAdmin)return y;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?b`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:y;let n=this.isFixedItem(e,t);return b`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,t)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(e,t){if(this._notice=null,(e!=="outdoor"||t!==this._outdoorId)&&(this._contourVertex=null),t&&(this._sideOpen=!0),this._outdoorId=e==="outdoor"?t:null,this._wallId=e==="wall"?t:null,this._edgeHi=null,(e==="outdoor"||e==="wall")&&(this._roomId=null),(e!=="room"||t!==this._roomId)&&(this._vertex=null),this._roomId=e==="room"?t:this._roomId,this._openingId=e==="opening"?t:null,this._furnitureId=e==="furniture"?t:null,this._multi=[],this._single=!1,this._deviceId=e==="device"?t:null,e==="device"&&t){let n=this.floor?.placements.find(i=>i.entity_id===t);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}e==="opening"&&t&&(this._roomId=this.floor?.openings.find(n=>n.id===t)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(e,t,n,i,o){let r=e.points[t],s=e.points[(t+1)%e.points.length],l=Math.hypot(s[0]-r[0],s[1]-r[1])||1,d=((n[0]-r[0])*(s[0]-r[0])+(n[1]-r[1])*(s[1]-r[1]))/l,c=o?.01:this._doc.settings.grid,h=Math.min(i,l)/2;return M(Math.min(l-h,Math.max(h,Math.round(d/c)*c)))}placeOpening(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let m of n.walls??[]){let _=xt({room_id:"",edge:0,wall:m.id},n.rooms,n.walls??[]);if(!_)continue;let[g,v]=this.toScreen(m.a),[w,$]=this.toScreen(m.b),k=(w-g)**2+($-v)**2||1,x=Math.min(1,Math.max(0,((t[0]-g)*(w-g)+(t[1]-v)*($-v))/k)),z=Math.hypot(t[0]-g-(w-g)*x,t[1]-v-($-v)*x),S=[(m.a[0]+m.b[0])/2,(m.a[1]+m.b[1])/2],A=n.rooms.find(P=>P.points.length>=3&&K(S,P.points));z<so*2.2&&(!i||z-1<i.d)&&(i={room:_.room,edge:0,d:z-1,wall:m.id,roomId:A?.id??m.id})}for(let m of n.rooms)for(let _=0;_<m.points.length;_++){let[g,v]=this.toScreen(m.points[_]),[w,$]=this.toScreen(m.points[(_+1)%m.points.length]),k=(w-g)**2+($-v)**2||1,x=Math.min(1,Math.max(0,((t[0]-g)*(w-g)+(t[1]-v)*($-v))/k)),z=Math.hypot(t[0]-g-(w-g)*x,t[1]-v-($-v)*x),S=z-(m.id===this._roomId?.5:0);z<so*2.2&&(!i||S<i.d)&&(i={room:m,edge:_,d:S})}if(!i)return!1;let{room:o,edge:r,wall:s}=i,l=o.points[r],d=o.points[(r+1)%o.points.length],c=Math.hypot(d[0]-l[0],d[1]-l[1]),h=Pi[e],u=h.type,p=M(Math.min(h.width,Math.max(.3,c-.1))),f={id:G("opening"),room_id:i.roomId??o.id,edge:r,...s?{wall:s}:{},offset:this.offsetOnEdge(o,r,this.toWorld(...t),p,!1),width:p,type:u,sill:h.sill,height:h.height,hinge:"left",leaves:h.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((m,_)=>_.openings.push(f)),this._tool="select",this.selectItem("opening",f.id),!0}setOpeningPreset(e,t){let n=Pi[t];this._openingPreset=t;let i=zi(e)===t,o="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:o,...i?{}:{width:n.width}})}updateOpening(e){let t=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(o=>o.id===t),e))}deleteOpening(){let e=this._openingId;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((t,n)=>n.openings=n.openings.filter(i=>i.id!==e)),this._openingId=null)}glowScaleField(e,t){return b`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((e??1)*100))}
        ?disabled=${!this.isAdmin}
        @change=${n=>{let i=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;t(Math.abs(i-1)<.001?null:i)}}
    /></label>`}furnitureFor(e){let t=te(e),n=this.hass?.language??"en",i=[...xi.map(s=>({type:s,label:this.t(`furn_${s}`)})),...(this.packs??[]).flatMap(s=>s.items.map(l=>({type:Dt(s.id,l.id),label:`${nt(l,n)} \xB7 ${De(s,n)}`})))],o=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,r=s=>t==="light"?Le(s):t==="climate"?s==="radiator"||s==="ac_unit":e.startsWith("vacuum.")?ct(s):t==="media"?Li(s)||Rn(s)&&o.test(s):Rn(s)&&!Le(s);return i.filter(s=>r(s.type)).sort((s,l)=>s.label.localeCompare(l.label))}vehicleToSpot(e){if(!this.isAdmin)return;let[t,n,i]=Te("parking"),o={id:G("furniture"),type:"parking",x:e.x,z:e.z,rotation:e.rotation,w:Math.max(t,M(e.w+.5)),d:Math.max(n,M(e.d+.4)),h:i,variant:null,vehicle:e.type,...e.name?{name:e.name}:{}};this.change((r,s)=>{s.furniture=s.furniture.filter(l=>l.id!==e.id),s.furniture.push(o)}),this.selectItem("furniture",o.id)}deviceToFurniture(e,t){if(!this.isAdmin)return;let[n,i,o]=Te(t),r={id:G("furniture"),type:t,x:e.x,z:e.z,rotation:e.rotation??0,w:n,d:i,h:o,variant:null,entity:e.entity_id,name:e.name??null,...e.locked?{locked:!0}:{}};this.change((s,l)=>{l.placements=l.placements.filter(d=>d.entity_id!==e.entity_id),l.furniture.push(r)}),this._deviceId=null,this.selectItem("furniture",r.id)}furnitureToDevice(e){let t=e.entity;if(!this.isAdmin||!t||t==="none")return;let n={entity_id:t,x:e.x,z:e.z,y:null,rotation:e.rotation,...e.name?{name:e.name}:{},...t.startsWith("light.")?{pin:!0}:{}};this.change((i,o)=>{o.furniture=o.furniture.filter(r=>r.id!==e.id),o.placements.some(r=>r.entity_id===t)||o.placements.push(n)}),this._furnitureId=null,this.selectItem("device",t)}renderAsFurniture(e){if(!this.isAdmin)return y;let t=this.furnitureFor(e.entity_id);return t.length?b`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${n=>{let i=n.target.value;i&&this.deviceToFurniture(e,i)}}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${t.map(n=>b`<option value=${n.type}>${n.label}</option>`)}
      </select></label
    >`:y}addFurniture(e){let t=this.floor;if(!t||!this.isAdmin)return;let[n,i,o]=Te(e),r=this._doc.floors.filter(p=>p.elevation>t.elevation).sort((p,f)=>p.elevation-f.elevation)[0],s=this.room,[l,d]=s?Xe(s.points):this.toWorld(this._size.w/2,this._size.h/2),c=Ao.has(e)?Math.max(.2,M(r?r.elevation+ye(r,l,d)-t.elevation-_e(t,s):Se(t,s)+.25)):o,h=0;if(e==="parking"&&s){let p=t.openings.find(g=>g.room_id===s.id&&g.type==="garage"),f=p?s.points[p.edge]:null,m=p?s.points[(p.edge+1)%s.points.length]:null,_=xe(s.points);h=(f&&m?Math.abs(m[1]-f[1])>Math.abs(m[0]-f[0]):_.x1-_.x0>_.z1-_.z0)?90:0}let u={id:G("furniture"),type:e,x:M(l),z:M(d),rotation:h,w:n,d:i,h:c,variant:null};this.change((p,f)=>f.furniture.push(u)),this.selectItem("furniture",u.id),this.showPoint(u.x,u.z)}snapToWall(e){return this.floor?Cn(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let t=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(o=>o.id===t),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}rotateFurniture(e){let t=this.furnitureItem;if(!t||!this.isAdmin)return;if(this.selection().length>1)return this.rotateSelection(e);this.updateFurniture({rotation:((t.rotation+e)%360+360)%360})}deleteFurniture(){let e=this._furnitureId;if(!e||!this.isAdmin)return;let t=this.selection();if(t.length>1){let n=t.some(o=>this.isFixedItem("furniture",o));if(!confirm(this.t(n?"block_delete_fixed":"block_delete",{n:t.length})))return;let i=new Set(t);this.change((o,r)=>r.furniture=r.furniture.filter(s=>!i.has(s.id))),this.selectItem("room",this._roomId);return}this.confirmFixedDelete("furniture",e)&&(this.change((n,i)=>i.furniture=i.furniture.filter(o=>o.id!==e)),this._furnitureId=null)}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let t=this.selection();if(t.length>1){let i=this.floor.furniture.filter(s=>t.includes(s.id)),o=new Map,r=i.map(s=>({...structuredClone(s),id:G("furniture"),x:M(s.x+.3),z:M(s.z+.3),group:s.group?o.get(s.group)??o.set(s.group,G("block")).get(s.group):null,locked:null}));this.change((s,l)=>l.furniture.push(...r)),this.setMulti(r.map(s=>s.id));return}let n={...structuredClone(e),id:G("furniture"),x:M(e.x+.3),z:M(e.z+.3),group:this._single?e.group:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}selection(){if(this._multi.length)return this._multi;let e=this.furnitureItem;return e?e.group&&!this._single?(this.floor?.furniture??[]).filter(t=>t.group===e.group).map(t=>t.id):[e.id]:[]}withGroups(e){let t=new Set((this.floor?.furniture??[]).filter(n=>e.includes(n.id)&&n.group).map(n=>n.group));return[...new Set([...e,...(this.floor?.furniture??[]).filter(n=>n.group&&t.has(n.group)).map(n=>n.id)])]}setMulti(e){if(!e.length)return this.selectItem("room",this._roomId);this.selectItem("furniture",e[0]);let t=this.selection();e.length>1&&!(e.length===t.length&&e.every(n=>t.includes(n)))&&(this._multi=e)}toggleMulti(e){let t=this._furnitureId?this.selection():[],n=this.withGroups([e]),i=t.includes(e)?t.filter(o=>!n.includes(o)):[...new Set([...t,...n])];this.setMulti(i)}selectionCentre(e){let t=(this.floor?.furniture??[]).filter(o=>e.includes(o.id)),n=t.map(o=>o.x),i=t.map(o=>o.z);return[(Math.min(...n)+Math.max(...n))/2,(Math.min(...i)+Math.max(...i))/2]}rotateSelection(e){let t=this.selection();if(t.some(d=>this.isFixedItem("furniture",d))){this._fixedHint=!0;return}let[n,i]=this.selectionCentre(t),o=e*Math.PI/180,r=Math.round(Math.cos(o)*1e6)/1e6,s=Math.round(Math.sin(o)*1e6)/1e6,l=new Set(t);this.change((d,c)=>{for(let h of c.furniture){if(!l.has(h.id))continue;let u=h.x-n,p=h.z-i;Object.assign(h,{x:M(n+u*r-p*s),z:M(i+u*s+p*r),rotation:((h.rotation+e)%360+360)%360})}})}groupSelection(){let e=new Set(this.selection());if(e.size<2)return;let t=G("block");this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.group=t)}),this._multi=[],this._single=!1}ungroupSelection(){let e=this.selection(),t=new Set(e);this.change((n,i)=>{for(let o of i.furniture)t.has(o.id)&&(o.group=null)}),e.length>1&&(this._multi=e)}lockSelection(e){let t=new Set(this.selection());this.change((n,i)=>{for(let o of i.furniture)t.has(o.id)&&(o.locked=e||null)})}placeDevices(e){let t=this.room;if(!t||!e.length||!this.isAdmin)return;let n=new Set(e);this.change((i,o)=>{for(let s of i.floors)s.placements=s.placements.filter(l=>!n.has(l.entity_id)),s.furniture=s.furniture.filter(l=>!(Le(l.type)&&l.entity&&n.has(l.entity)));let r=[...o.placements.map(s=>[s.x,s.z]),...o.furniture.filter(s=>Le(s.type)).map(s=>[s.x,s.z])];for(let s of Vo(t,e,r)){if(!s.entity_id.startsWith("light.")){o.placements.push(s);continue}let[l,d,c]=Ne.lamp_ceiling;o.furniture.push({id:G("furniture"),type:"lamp_ceiling",x:s.x,z:s.z,rotation:0,w:l,d,h:c,variant:null,entity:s.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(e){let t=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(o=>o.entity_id===t),e))}centreDevice(){let e=this.device,t=e?this.roomAt([e.x,e.z]):null,n=this.floor?.rooms.find(r=>r.id===t);if(!e||!n)return;let[i,o]=Xe(n.points);this.updateDevice({x:M(i),z:M(o)})}spreadCeilingLights(e){let t=this.floor;if(!t)return;let n=t.placements.filter(h=>te(h.entity_id)==="light"&&(h.mount??"ceiling")==="ceiling"&&K([h.x,h.z],e.points));if(n.length<2)return;let i=xe(e.points),o=i.x1-i.x0,r=i.z1-i.z0,s=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,r)))),l=Math.ceil(n.length/s),d=n.map((h,u)=>{let p=Math.floor(u/s),f=p===l-1?n.length-s*(l-1):s,m=u-p*s;return[M(i.x0+o/f*(m+.5)),M(i.z0+r/l*(p+.5))]}),c=n.map(h=>h.entity_id);this.change((h,u)=>{c.forEach((p,f)=>Object.assign(u.placements.find(m=>m.entity_id===p),{x:d[f][0],z:d[f][1]}))})}straightenFloor(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,fixed:n}=Ca(e.rooms);if(!n){this._notice=this.t("straighten_none");return}this.change((i,o)=>o.rooms=t),this._notice=this.t("straighten_done",{n})}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,gaps:n}=Ha(e.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=Va(n);this.change((o,r)=>{r.rooms=t,i&&(o.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:Ve(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(e){this.change(t=>{for(let n of t.floors)n.placements=n.placements.filter(i=>i.entity_id!==e),n.furniture=n.furniture.filter(i=>!(Le(i.type)&&i.entity===e))})}deleteContourVertex(){let e=this._contourVertex;if(!e||!this.isAdmin)return;let t=e.kind==="roof"?this.roofSection:void 0,n=e.kind==="outdoor"?this.outdoorArea:void 0,i=t?this.roofPoints(t):n?.points;if(!i||i.length<=3)return;let o=i.filter((r,s)=>s!==e.index);if(!Ct(o)){alert(this.t("contour_invalid"));return}t?this.updateRoofSection({points:o,...gt(o)}):this.updateOutdoor({points:o,freeform:!0}),this._contourVertex=null}deleteVertex(e){let t=this.room;if(!t||t.points.length<=3)return;let n=t.points.length,i=(e-1+n)%n;this.change((o,r)=>{let s=r.rooms.find(l=>l.id===t.id);s.points.splice(e,1),s.wall_heights&&s.wall_heights.splice(e,1),s.wall_thickness&&s.wall_thickness.splice(e,1),r.openings=r.openings.filter(l=>l.room_id!==t.id||l.wall||l.edge!==e&&l.edge!==i).map(l=>l.room_id===t.id&&!l.wall&&l.edge>e?{...l,edge:l.edge-1}:l)}),this._vertex=null}shiftFloor(e,t){if(!this.isAdmin||!e&&!t)return;let n=o=>[M(o[0]+e),M(o[1]+t)],i=o=>{for(let r of o.rooms)r.points=r.points.map(n);for(let r of o.furniture)r.x=M(r.x+e),r.z=M(r.z+t);for(let r of o.placements)r.x=M(r.x+e),r.z=M(r.z+t);for(let r of o.outdoor)r.points=r.points.map(n);for(let r of o.walls??[])r.a=n(r.a),r.b=n(r.b);o.background&&(o.background.x=M(o.background.x+e),o.background.z=M(o.background.z+t))};this._shiftAll?this.change(o=>{for(let r of o.floors)i(r);this.moveHouseExtras(o,n)}):this.change((o,r)=>i(r)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(e,t){for(let i of e.settings.roof.sections??[]){let o=[t([i.x0,i.z0]),t([i.x1,i.z0]),t([i.x1,i.z1]),t([i.x0,i.z1])];i.x0=Math.min(...o.map(r=>r[0])),i.x1=Math.max(...o.map(r=>r[0])),i.z0=Math.min(...o.map(r=>r[1])),i.z1=Math.max(...o.map(r=>r[1])),i.points&&(i.points=i.points.map(t))}for(let i of e.settings.roof.cables??[])i.points=i.points.map(t);e.energy.meter&&([e.energy.meter.x,e.energy.meter.z]=t([e.energy.meter.x,e.energy.meter.z]));let n=e.settings.roof.hologram;n&&n.place==="free"&&n.x!=null&&n.z!=null&&([n.x,n.z]=t([n.x,n.z]))}turnFloor(){let e=this.floor;if(!e||!this.isAdmin)return;let t=(this._shiftAll?this._doc.floors:[e]).flatMap(d=>d.rooms.flatMap(c=>c.points));if(!t.length)return;let n=t.map(d=>d[0]),i=t.map(d=>d[1]),o=(Math.min(...n)+Math.max(...n))/2,r=(Math.min(...i)+Math.max(...i))/2,s=d=>[M(o-(d[1]-r)),M(r+(d[0]-o))],l=d=>{for(let c of d.rooms)c.points=c.points.map(s);for(let c of d.furniture)[c.x,c.z]=s([c.x,c.z]),c.rotation=(c.rotation+90)%360;for(let c of d.placements)[c.x,c.z]=s([c.x,c.z]),c.rotation=((c.rotation??0)+90)%360;for(let c of d.outdoor)c.points=c.points.map(s);for(let c of d.walls??[])c.a=s(c.a),c.b=s(c.b);d.background&&([d.background.x,d.background.z]=s([d.background.x,d.background.z]),d.background.rotation=((d.background.rotation??0)+90)%360)};this._shiftAll?this.change(d=>{for(let c of d.floors)l(c);this.moveHouseExtras(d,s)}):this.change((d,c)=>l(c))}updateFloor(e){this.change((t,n)=>Object.assign(n,e))}updateRoom(e){let t=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(o=>o.id===t),e))}setArea(e){let t=this.room;if(!t)return;let n=e?this.hass?.areas?.[e]:void 0,i=!t.name||/^(Raum|Room) \d+$/.test(t.name)||Object.values(this.hass?.areas??{}).some(o=>o.name===t.name);this.updateRoom({area_id:e||null,...n&&i?{name:n.name}:{}})}setRect(e,t){let n=this.room;if(!n||!Number.isFinite(t))return;let i=xe(n.points),{x0:o,z0:r,x1:s,z1:l}=i;e==="x"&&([o,s]=[t,t+(s-o)]),e==="z"&&([r,l]=[t,t+(l-r)]),e==="w"&&t>.05&&(s=o+t),e==="d"&&t>.05&&(l=r+t),this.updateRoom({points:[[M(o),M(r)],[M(s),M(r)],[M(s),M(l)],[M(o),M(l)]]})}setPoint(e,t,n){let i=this.room;if(!i||!Number.isFinite(n))return;let o=i.points.map(r=>[...r]);o[e][t]=M(n),this.updateRoom({points:o})}async loadImage(e){this.loadingImages.add(e);try{let t=await wo(this.hass,e),n=new Image;n.src=t,await n.decode(),this._images={...this._images,[e]:{url:t,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(e){let t=e.target,n=t.files?.[0];if(t.value="",!n)return;let i=await createImageBitmap(n),o=Math.min(1,2048/Math.max(i.width,i.height)),r=document.createElement("canvas");r.width=Math.round(i.width*o),r.height=Math.round(i.height*o),r.getContext("2d").drawImage(i,0,0,r.width,r.height);let s=r.toDataURL("image/jpeg",.85),l=G("img");await gi(this.hass,l,s),this._images={...this._images,[l]:{url:s,aspect:r.height/r.width}};let d=this.floor?.rooms.length?xe(this.floor.rooms.flatMap(c=>c.points)):null;this.updateFloor({background:{image_id:l,x:d?d.x0:0,z:d?d.z0:0,width:d?Math.max(4,M(d.x1-d.x0)):12,opacity:.5}})}newsLater=!1;renderNews(){let e=[{id:"fun_pets_2026",feature:"fun_pets"}];if(this.newsLater||!this.isAdmin)return y;let t=(this.packs??[]).some(o=>o.licensee),n=e.find(o=>{if(os.includes(o.feature)||fe(o.feature)||!t)return!1;try{return localStorage.getItem(`neonplan3d.news.${o.id}`)!=="never"}catch{return!0}});if(!n)return y;let i=()=>{try{localStorage.setItem(`neonplan3d.news.${n.id}`,"never")}catch{}this.newsLater=!0,this.requestUpdate()};return b`<div class="fp3d-news-veil" @click=${o=>o.target===o.currentTarget&&(this.newsLater=!0,this.requestUpdate())}>
      <div class="fp3d-news" role="dialog" aria-label=${this.t("news_pets_title")}>
        <div class="fp3d-news-pic">🐱 🐶 🐰 🐟</div>
        <h3>${this.t("news_pets_title")}</h3>
        <p>${this.t("news_pets_text")}</p>
        <div class="fp3d-news-actions">
          <a class="fp3d-btn fp3d-primary" href=${Ye(this.hass?.language)} target="_blank" rel="noopener" @click=${()=>(this.newsLater=!0,this.requestUpdate())}>🎁 ${this.t("news_to_shop")}</a>
          <button class="fp3d-btn" @click=${()=>(this.newsLater=!0,this.requestUpdate())}>${this.t("news_later")}</button>
          <button class="fp3d-btn" @click=${i}>${this.t("news_never")}</button>
        </div>
      </div>
    </div>`}render(){let e=this.floor,t=e?Me(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return b`
      ${this.renderPreview()} ${this.renderWallView()} ${this.renderPartCard()} ${this.renderDiagnosticsView()} ${this.renderNews()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            ${this._wallPick?b`<div class="fp3d-pick-tip" style=${`left:${this.wallPickTip[0]}px;top:${this.wallPickTip[1]}px`} @click=${()=>this._wallPick=!1}>${this.t("hint_wall_pick")}</div>`:y}
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","wall","opening","furniture","outdoor","pool","hole","roof","energy"].map(n=>b`<button
                  aria-pressed=${this._tool===n}
                  ?disabled=${!e||!this.isAdmin&&n!=="select"}
                  @click=${()=>{if(this._tool=n,this._draft=[],this._cursor=null,this._pipeMode=!1,this._pipeDraft=null,n==="pool"&&this.outdoorArea?.type!=="pool"){let i=e?.outdoor.find(o=>o.type==="pool");i&&this.selectItem("outdoor",i.id)}this._sideOpen=n!=="select"}}
                >
                  ${this.t(`tool_${n}`)}
                </button>`)}
            </div>
            <div class="fp3d-seg">
              <button ?disabled=${!this._canUndo} @click=${()=>this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${()=>this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${()=>this.fit()}>${this.t("fit")}</button>
              <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>this.toggleSplit()}>${this.t("split_3d")}</button>
              <button aria-pressed=${this._wallPick} title=${this.t("wall_view_open")} @click=${n=>this.toggleWallPick(n.currentTarget)}>▦ ${this.t("wall_view")}</button>
              ${this.isAdmin?b`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>${this.t("lock_plan")}</button>`:y}
            </div>
            ${this._tool==="pool"?b`<div class="fp3d-seg" role="group" aria-label=${this.t("pool_shape")}>
                    ${["rect","round","oval","free"].map(n=>b`<button
                          aria-pressed=${!this._pipeMode&&(this._poolShape??"rect")===n}
                          @click=${()=>(this._poolShape=n,this._outdoorFree=n==="free",this._pipeMode=!1,this._pipeDraft=null,this._draft=[])}
                        >
                          ${n==="rect"?"\u25AD":n==="round"?"\u25EF":n==="oval"?"\u2B2D":"\u270E"} ${this.t(`pool_shape_${n}`)}
                        </button>`)}
                  </div>
                  ${Ke("pool")?b`<div class="fp3d-seg" role="group">
                        <button aria-pressed=${!!this._pipeMode} title=${this.t("pool_pipe_draw_hint")} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null,this._draft=[])}>〰 ${this.t("pool_pipe_draw")}</button>
                      </div>`:y}`:y}
            ${this._tool==="outdoor"?b`<label class="fp3d-outdoor-type" title=${this.t("outdoor_draw_type_hint")}
                    >${this.t("outdoor_draw_type")}
                    <select
                      @change=${n=>{this._outdoorType=n.target.value,this._outdoorType==="pool"&&(this._outdoorFree=this._poolShape==="free"),this._draft=[]}}
                    >
                      ${So.filter(n=>n!=="pool").map(n=>b`<option value=${n} ?selected=${n===(this._outdoorType??"lawn")}>${this.t(`out_${n}`)}</option>`)}
                    </select></label
                  >
                  ${this.renderDrawShape()}`:y}
            ${this._tool==="roof"?this.renderDrawShape():y}
            ${t?.warnings.length?b`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:y}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this._phoneHint?b`<div class="fp3d-phone-hint">
                  <span>${this.t("phone_hint")}</span>
                  <button
                    class="fp3d-btn"
                    aria-label=${this.t("close")}
                    @click=${()=>{this._phoneHint=!1;try{localStorage.setItem("neonplan3d.phoneHint","0")}catch{}}}
                  >
                    ✕
                  </button>
                </div>`:y}
            ${this.houseTool?b`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:y}
            <svg
              class="fp3d-plan fp3d-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${()=>{this.drag||(this._cursor=null)}}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
            >
              ${this.renderBackground(e)} ${this.renderGrid()} ${this.renderGhost()} ${t?this.renderWalls(t.walls):y}
              ${e?this.renderOutdoor(e):y} ${e?this.renderRooms(e):y} ${e?this.renderLevelSteps(e):y} ${e?this.renderFurniture(e):y}
              ${e?this.renderFreeWalls(e):y}
              ${e&&t?this.renderOpenings(e,t.walls):y} ${e?this.renderMeter(e):y}
              ${e&&this._tool==="select"?this.renderDevices(e):y}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):y}
              ${e?this.renderOutdoorHandles(e):y}
              ${this.room&&this._tool==="select"?this.renderSplitMarks(this.room):y}
              ${e?this.renderHeadroom(e):y}
              ${this._tool==="roof"?I`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?I`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:this._tool==="pool"&&e&&Ke("pool")?this.renderPoolPlan(e):y} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${e?this._wallPick?this.t("hint_wall_pick"):this._fixedHint?this.t("fixed_drag_hint"):this._tool==="outdoor"&&this.drawingPolygon?this.t("hint_outdoor_free"):this._tool==="pool"&&this._jointPlace?this.t("hint_joint_place"):this._tool==="pool"&&this._pipeMode?this.t(this.poolArea?this._pipeDraft?"hint_pipe_next":"hint_pipe_start":"hint_pipe_pool"):this._tool==="pool"&&Ke("pool")?this.t("hint_pool_tech"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?b`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:y}
          ${this._split?this.render3d():y}
          </div>
        </div>
        ${this.renderAside(e)}
      </div>
    `}renderBackground(e){let t=e?.background,n=t?this._images[t.image_id]:void 0;if(!t||!n)return y;let[i,o]=this.toScreen([t.x,t.z]),r=t.width*this._view.scale,s=r*n.aspect,l=t.rotation??0,d=this.bgHandles();return I`<g transform="rotate(${l} ${i+r/2} ${o+s/2})">
      <image href=${n.url} x=${i} y=${o} width=${r} height=${s} opacity=${t.opacity} preserveAspectRatio="none" pointer-events=${d?"auto":"none"} data-bg="1" style=${d?"cursor:move":""} />
      ${d?I`<rect class="fp3d-bg-frame" x=${i} y=${o} width=${r} height=${s} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${i+r} cy=${o+s} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${i+r/2} y1=${o} x2=${i+r/2} y2=${o-30} />
            <circle cx=${i+r/2} cy=${o-30} r="16" class="fp3d-hit" />
            <circle cx=${i+r/2} cy=${o-30} r="8" />
            <path d="M${i+r/2-4} ${o-31}a4 4 0 1 1 2 3.5" />
          </g>`:y}
    </g>${this.renderBgRuler()}`}bgHandles(){return!!this.floor?.background&&this.isAdmin&&this._tool==="select"&&this._bgEdit}renderBgRuler(){let e=this._bgLevel?.length?this._bgLevel:this._bgRuler;if(!e?.length)return y;let t=e.map(n=>this.toScreen(n));return I`<g class="fp3d-bg-ruler">
      ${t.length===2?I`<line x1=${t[0][0]} y1=${t[0][1]} x2=${t[1][0]} y2=${t[1][1]} />`:y}
      ${t.map(([n,i])=>I`<circle cx=${n} cy=${i} r="6" />`)}
    </g>`}applyBgLevel(e,t){let n=this.floor?.background,i=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!i||Math.hypot(t[0]-e[0],t[1]-e[1])<.05)return;let o=Math.atan2(t[1]-e[1],t[0]-e[0]),r=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(r)<1e-4)return;let s=n.width*i.aspect,l=[n.x+n.width/2,n.z+s/2],d=l[0]-e[0],c=l[1]-e[1],h=[e[0]+d*Math.cos(r)-c*Math.sin(r),e[1]+d*Math.sin(r)+c*Math.cos(r)],u=(n.rotation??0)+r*180/Math.PI;u=Math.round((((u+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:u,x:M(h[0]-n.width/2),z:M(h[1]-s/2)}})}applyBgRuler(e){let n=this.floor?.background,i=this._bgRuler,o=n?this._images[n.image_id]:void 0;if(!n||!o||!i||i.length<2||!(e>0))return;let r=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1]);if(r<1e-4)return;let s=e/r,l=n.width*o.aspect,d=[n.x+n.width/2,n.z+l/2],c=i[0],h=[c[0]+s*(d[0]-c[0]),c[1]+s*(d[1]-c[1])],u=n.width*s,p=l*s;this.updateFloor({background:{...n,width:M(u),x:M(h[0]-u/2),z:M(h[1]-p/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(e,t,n){let i=e.width*n,o=e.x+e.width/2,r=e.z+i/2,s=-(e.rotation??0)*Math.PI/180,l=t[0]-o,d=t[1]-r;return[o+l*Math.cos(s)-d*Math.sin(s)-e.x,r+l*Math.sin(s)+d*Math.cos(s)-e.z]}renderGrid(){let{scale:e}=this._view,{w:t,h:n}=this._size,i=e>=90?.1:e>=30?.5:1,o=e>=20?1:5,[r,s]=this.toWorld(0,0),[l,d]=this.toWorld(t,n),c=[],h=(f,m)=>{for(let _=Math.ceil(r/f)*f;_<=l;_+=f){let g=this.toScreen([_,0])[0];c.push(I`<line class=${m} x1=${g} y1="0" x2=${g} y2=${n} />`)}for(let _=Math.ceil(s/f)*f;_<=d;_+=f){let g=this.toScreen([0,_])[1];c.push(I`<line class=${m} x1="0" y1=${g} x2=${t} y2=${g} />`)}};i<o&&h(i,"fp3d-grid-minor"),h(o,"fp3d-grid-major");let[u,p]=this.toScreen([0,0]);return c.push(I`<circle class="fp3d-origin" cx=${u} cy=${p} r="3" />`),I`<g pointer-events="none">${c}</g>`}renderGhost(){let e=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,t=e>0?this._doc.floors[e-1]:void 0;return t?I`<g pointer-events="none">${t.rooms.map(n=>I`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:y}renderWalls(e){let t=this.floor?.height??2.5;return I`<g pointer-events="none">${e.map(n=>{let i=n.height!==void 0&&n.height<t-.01,o=`fp3d-wall${n.exterior?" fp3d-wall-ext":""}${i?" fp3d-wall-low":""}`;return I`<polygon class=${o} points=${n.footprint.map(r=>this.toScreen(r).join(",")).join(" ")} />`})}</g>`}edgeParts(e,t){let n=this.floor;if(!n)return[0];let o=Me(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(r=>r.sources.filter(s=>s.room_id===e.id&&s.edge===t).map(s=>s.t0));return o.length?[...new Set(o)].sort((r,s)=>r-s):[0]}setEdgeHeight(e,t,n,i){let o=this.floor;if(!o||!this.isAdmin)return;if(i!==void 0){let l=this.edgeParts(e,t).length;this.change((d,c)=>{let h=c.rooms.find(m=>m.id===e.id);if(!h)return;let u=(h.wall_heights??[]).slice(0,h.points.length);for(;u.length<h.points.length;)u.push(null);let p=u[t],f=Array.isArray(p)?[...p]:new Array(l).fill(typeof p=="number"?p:null);for(;f.length<l;)f.push(null);f[i]=n,u[t]=f.every(m=>m===f[0])?f[0]:f,h.wall_heights=u.every(m=>m===null)?void 0:u});return}let s=Me(o.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},o.walls??[]).walls.filter(l=>l.sources.some(d=>d.room_id===e.id&&d.edge===t)).flatMap(l=>l.sources);s.some(l=>l.room_id===e.id&&l.edge===t)||s.push({room_id:e.id,edge:t,t0:0,t1:0}),this.change((l,d)=>{for(let c of s){let h=d.rooms.find(p=>p.id===c.room_id);if(!h)continue;let u=(h.wall_heights??[]).slice(0,h.points.length);for(;u.length<h.points.length;)u.push(null);u[c.edge]=n,h.wall_heights=u.every(p=>p===null)?void 0:u}})}renderCameraDetections(e){if(!this.hass)return y;let t=this.hass,n=pl(t,e),i=[...new Set(n.map(r=>ul(t,r)))],o=fe("camera_cockpit");return b`<p class="fp3d-sub fp3d-wide">
      ${n.length?b`${o?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:i.map(r=>this.t(`detect_${r}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(e,t,n){if(!this.isAdmin)return;let i=e.points,o=Math.hypot(i[(t+1)%i.length][0]-i[t][0],i[(t+1)%i.length][1]-i[t][1]),r=this.edgeParts(e,t),s=n===void 0?0:r[n],l=n===void 0?o:r[n+1]??o;if(l-s<.4)return;let d=Math.round((s+l)/2*100)/100;this.change((c,h)=>{let u=h.rooms.find(m=>m.id===e.id);if(!u)return;let p=(u.wall_splits??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);p[t]=[...p[t]??[],d].sort((m,_)=>m-_),u.wall_splits=p;let f=u.wall_heights?.[t];if(Array.isArray(f)){let m=n??0;f.splice(m+1,0,f[m]??null)}})}moveSplit(e,t,n,i){let o=e.points,r=Math.hypot(o[(t+1)%o.length][0]-o[t][0],o[(t+1)%o.length][1]-o[t][1]),s=this.edgeParts(e,t).filter(d=>Math.abs(d-n)>.001&&d>0),l=Math.max(.1,Math.min(r-.1,Math.round(i*100)/100));s.some(d=>Math.abs(d-l)<.1)&&(l=n),this.change((d,c)=>{let u=c.rooms.find(f=>f.id===e.id)?.wall_splits?.[t];if(!u)return;let p=u.findIndex(f=>Math.abs(f-n)<.001);p>=0&&(u[p]=l),u.sort((f,m)=>f-m)})}joinSplit(e,t,n,i){this.change((o,r)=>{let s=r.rooms.find(c=>c.id===e.id);if(!s?.wall_splits?.[t])return;let l=s.wall_splits[t].filter(c=>Math.abs(c-n)>.001);s.wall_splits[t]=l.length?l:null,s.wall_splits.every(c=>!c)&&(s.wall_splits=void 0);let d=s.wall_heights?.[t];Array.isArray(d)&&(d.splice(i,1),d.every(c=>c===d[0])&&(s.wall_heights[t]=d[0]??null))})}renderSplitMarks(e){let t=e.points;return I`${(e.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=t.length)return[];let o=t[i],r=t[(i+1)%t.length],s=Math.hypot(r[0]-o[0],r[1]-o[1])||1,l=(r[0]-o[0])/s,d=(r[1]-o[1])/s;return n.map(c=>{let[h,u]=this.toScreen([o[0]+l*c,o[1]+d*c]);return I`<line class="fp3d-split-mark" x1=${h-d*7} y1=${u+l*7} x2=${h+d*7} y2=${u-l*7} />`})})}`}renderEdgeHeights(e){let t=Se(this.floor,e),n=e.points.length,i=this._doc.settings,o=new Set;for(let s of Me(this.floor.rooms,{exterior:i.wall_exterior,interior:i.wall_interior},this.floor.walls??[]).walls)if(s.exterior)for(let l of s.sources)l.room_id===e.id&&o.add(l.edge);let r=(s,l)=>this.change((d,c)=>{let h=c.rooms.find(p=>p.id===e.id);if(!h)return;let u=(h.wall_thickness??[]).slice(0,h.points.length);for(;u.length<h.points.length;)u.push(null);u[s]=l,h.wall_thickness=u.every(p=>p===null)?void 0:u});return b`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${e.points.flatMap((s,l)=>{let d=e.points[(l+1)%n],c=Math.hypot(d[0]-s[0],d[1]-s[1]),h=e.wall_heights?.[l]??null,u=()=>this._edgeHi=l,p=()=>this._edgeHi=null,f=this.edgeParts(e,l);return(f.length>1?f.map((_,g)=>g):[void 0]).map(_=>{let g=_===void 0?Array.isArray(h)?h[0]??null:h:Array.isArray(h)?h[_]??null:h,v=_===void 0?c:(f[_+1]??c)-f[_],w=$=>this.setEdgeHeight(e,l,$,_);return b`<div
            class="fp3d-edge-height${l===this._edgeHi?" fp3d-edge-on":""}${g!==null?" fp3d-edge-low":""}"
            @mouseenter=${u}
            @mouseleave=${p}
            @focusin=${u}
            @focusout=${p}
          >
            <span
              ><b>${this.t("wall_n",{a:l+1,b:(l+1)%n+1})}${_===void 0?"":` \xB7 ${this.t("wall_part",{n:_+1})}`}</b><br /><span class="fp3d-muted"
                >${this.m(v,2)}</span
              ></span
            >
            ${g===0?b`<span class="fp3d-muted">${this.t("wall_none")}</span>`:this.len(this.t("wall_height"),g??t,$=>w($>=t-.005?null:Math.max(.05,$)),.05,.05)}
            ${this.isAdmin&&g!==null?b`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>w(null)}>↥</button>`:y}
            ${this.isAdmin&&g!==0?b`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>w(0)}>${this.t("wall_none")}</button>`:y}
            ${this.isAdmin&&v>=.4?b`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(e,l,_)}>✂</button>`:y}
            ${(_===void 0||_===0)&&g!==0?b`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallView(e.id,l)}>▦</button>`:y}
            ${(_===void 0||_===0)&&g!==0?b`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"),e.wall_thickness?.[l]??(o.has(l)?i.wall_exterior:i.wall_interior),$=>{let k=o.has(l)?i.wall_exterior:i.wall_interior,x=Math.min(1.5,Math.max(.02,Math.round($*1e3)/1e3));r(l,Math.abs(x-k)<5e-4?null:x)},.01,.02)}
                  ${this.isAdmin&&e.wall_thickness?.[l]!=null?b`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>r(l,null)}>↺</button>`:y}</span
                >`:y}
            ${_!==void 0&&_>0&&(e.wall_splits?.[l]??[]).some($=>Math.abs($-f[_])<.001)?b`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"),f[_],$=>this.moveSplit(e,l,f[_],$),.05,.1)}
                  ${this.isAdmin?b`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(e,l,f[_],_)}>⨉</button>`:y}</span
                >`:y}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(e){let t=this._outdoorId?e.outdoor.find(n=>n.id===this._outdoorId):void 0;if(!t||!this.isAdmin||this._tool!=="select"&&!(this._tool==="pool"&&!this._pipeMode)||this._doc.settings.lock_plan)return y;if(t.pool_shape){let n=xe(t.points),i=[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]];return I`${i.map((o,r)=>{let[s,l]=this.toScreen(o);return I`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${t.id}:${r}`}><circle cx=${s} cy=${l} r="16" class="fp3d-hit" /><rect x=${s-5} y=${l-5} width="10" height="10" /></g>`})}`}return this.renderPolygonHandles(t.points,"outdoor",t.id,this._contourVertex?.kind==="outdoor"&&this._contourVertex.id===t.id?this._contourVertex.index:null)}renderOutdoor(e){return I`<g>${e.outdoor.map(t=>{let n=t.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,o]=this.toScreen(Xe(t.points)),r=xe(t.points),s=Math.min(r.x1-r.x0,r.z1-r.z0)*this._view.scale>40;return I`<g data-outdoor=${t.id} class=${`fp3d-out fp3d-out-${t.type}${t.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${s?I`<text x=${i} y=${o+4}>${this.t(`out_${t.type}`)}</text>`:y}
      </g>`})}</g>`}renderOutdoorForm(e){let t=this.isAdmin,n=Ai(e.points),i=xe(e.points),o=(r,s)=>{let{x0:l,z0:d,x1:c,z1:h}=i;r==="x"&&([l,c]=[s,s+(c-l)]),r==="z"&&([d,h]=[s,s+(h-d)]),r==="w"&&(c=l+Math.max(.1,s)),r==="d"&&(h=d+Math.max(.1,s)),this.updateOutdoor({points:[[l,d],[c,d],[c,h],[l,h]].map(([u,p])=>[M(u),M(p)])})};return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide">${this.t("area")}
          <select ?disabled=${!t} @change=${r=>this.updateOutdoor({area_id:r.target.value||null})}>
            <option value="" ?selected=${!e.area_id}>${this.t("no_area")}</option>
            ${Object.values(this.hass?.areas??{}).map(r=>b`<option value=${r.area_id} ?selected=${e.area_id===r.area_id}>${r.name}</option>`)}
          </select>
        </label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!t} @change=${r=>this.updateOutdoor({type:r.target.value})}>
            ${So.map(r=>b`<option value=${r} ?selected=${r===e.type}>${this.t(`out_${r}`)}</option>`)}
          </select></label
        >
        ${n?b`${this.len(this.t("x"),i.x0,r=>o("x",r))} ${this.len(this.t("z"),i.z0,r=>o("z",r))}
            ${this.len(this.t("width"),i.x1-i.x0,r=>o("w",r),.01,.1)} ${this.len(this.t("depth"),i.z1-i.z0,r=>o("d",r),.01,.1)}`:y}
        ${yi(e.type)?this.len(this.t("outdoor_height"),e.height??wt[e.type],r=>this.updateOutdoor({height:Math.min(6,Math.max(.1,M(r)))}),.05,.1):e.type==="balcony"?this.len(this.t("balcony_rail"),e.height??1,r=>this.updateOutdoor({height:Math.min(2,Math.max(.4,M(r)))}),.05,.4):y}
        ${this.len(this.t("outdoor_offset"),e.offset??0,r=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,M(r)))||null}),.05)}
        ${e.type!=="pool"?b`${this.len(this.t("outdoor_slope"),e.slope??0,r=>this.updateOutdoor({slope:Math.min(20,Math.max(0,M(r)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!t} @change=${r=>this.updateOutdoor({slope_dir:r.target.value})}>
                  ${Gr.map(r=>b`<option value=${r} ?selected=${r===(e.slope_dir??"x")}>${this.t(`slope_${r.replace("-","n")}`)}</option>`)}
                </select></label
              >`:y}
        ${e.type==="pool"?this.renderPoolShape(e):y}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${e.outline!==!1} ?disabled=${!t} @change=${r=>this.updateOutdoor({outline:r.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${e.type==="fence"||e.type==="pergola"?b`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${r=>this.updateOutdoor({open:r.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:y}
        ${e.type==="pergola"?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.bracing} ?disabled=${!t} @change=${r=>this.updateOutdoor({bracing:r.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:y}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!e.cut} ?disabled=${!t} @change=${r=>this.updateOutdoor({cut:r.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${this.renderContour("outdoor",e.id,e.points,r=>this.updateOutdoor({points:r,freeform:!0}))}
      ${this.renderContourActions("outdoor")}
      ${e.type==="pergola"?this.renderSpotForm(this.pergolaSpotSurface(e)):y}
      ${e.area_id&&this.hass?b`<h4>Geräte aus ${this.hass.areas?.[e.area_id]?.name??e.area_id}</h4>
        ${this.entitySelect("Ger\xE4t oder Licht platzieren",this._outdoorDevice,void 0,this.entityOptions(r=>ot(this.hass,e.area_id).includes(r)&&an(te(r))),r=>{this._outdoorDevice=r==="none"?null:r})}
        <button class="fp3d-btn" ?disabled=${!t||!this._outdoorDevice} @click=${()=>{let r=this._outdoorDevice;if(!r)return;let s=this.floor?.placements.map(d=>[d.x,d.z])??[],l=Vo({id:e.id,name:"",area_id:e.area_id??null,points:e.points,floor_material:"wood"},[r],s)[0];l&&(this.change((d,c)=>{if(r.startsWith("light.")){let[h,u,p]=Ne.lamp_bollard;c.furniture.push({id:G("furniture"),type:"lamp_bollard",x:l.x,z:l.z,w:h,d:u,h:p,rotation:0,variant:null,entity:r})}else this._doc.floors.some(h=>h.placements.some(u=>u.entity_id===r))||c.placements.push(l)}),this._outdoorDevice=null)}}>Auf dieser Fläche platzieren</button>`:y}
      ${e.slope?b`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>`:y}
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${e.type==="pool"?this.renderPoolPro(e):y}
    </section>`}openWallView(e,t,n=null){this._wallView={roomId:e,edge:t},this._wallSel=n,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallFrame=null,this.wallDrag=null}wallSelection(){if(this._wallMulti.length)return this._wallMulti;let e=this._wallSel?this.floor?.furniture.find(t=>t.id===this._wallSel):void 0;return e?e.group&&!this._wallSingle?(this.floor?.furniture??[]).filter(t=>t.group===e.group).map(t=>t.id):[e.id]:[]}wallToggle(e){let t=this.wallSelection(),n=this.withGroups([e]),i=t.includes(e)?t.filter(o=>!n.includes(o)):[...new Set([...t,...n])];this.wallChoose(i,e)}wallChoose(e,t=e[0]??null){this._wallSingle=!1,this._wallSel=e.length?t&&e.includes(t)?t:e[0]:null,this._wallMulti=[];let n=this.wallSelection();e.length>1&&!(e.length===n.length&&e.every(i=>n.includes(i)))&&(this._wallMulti=e),this._wallGap=null}moveSetOnWall(e,t,n,i,o=this._doc,r=!0){let s=new Set(t);this.change((l,d)=>{for(let c of d.furniture)s.has(c.id)&&(Object.assign(c,Hi(e,c,n)),i!==null&&it(c)&&(c.mount_y=Math.round(Math.min(io,Math.max(0,ze(d,c)-ye(d,c.x,c.z)+i))*1e3)/1e3))},o,r)}wallGapAt(e,t,n,i,o){let r=o<1.2,s=e.length,l=[...hn(e,t,n).filter(h=>r?h.y0<1:h.y1>1.2).map(h=>[h.s0,h.s1]),...Oi(e,t,n).filter(h=>r?h.y0<.9:h.y1>1.2).map(h=>[h.s0,h.s1])];if(l.some(([h,u])=>i>h&&i<u))return null;let d=Math.max(0,...l.filter(([,h])=>h<=i).map(([,h])=>h)),c=Math.min(s,...l.filter(([h])=>h>=i).map(([h])=>h));return c-d>=.1?{s0:Math.round(d*1e3)/1e3,s1:Math.round(c*1e3)/1e3,low:r}:null}openWallViewFor(e){let t=this.floor;if(!t)return;let n=t.rooms.find(r=>r.points.length>=3&&K([e.x,e.z],r.points));if(!n)return;let i=-1,o=1/0;n.points.forEach((r,s)=>{let l=n.points[(s+1)%n.points.length],d=Math.hypot(l[0]-r[0],l[1]-r[1])||1,c=Math.max(0,Math.min(1,((e.x-r[0])*(l[0]-r[0])+(e.z-r[1])*(l[1]-r[1]))/(d*d))),h=Math.hypot(e.x-(r[0]+(l[0]-r[0])*c),e.z-(r[1]+(l[1]-r[1])*c));h<o&&(o=h,i=s)}),i>=0&&this.openWallView(n.id,i,e.id)}openRoomWalls(e){let t=this.floor;if(!t)return;let n=0,i=-1;e.points.forEach((o,r)=>{let s=hn(cn(e,r),t,e).length;s>i&&(i=s,n=r)}),this.openWallView(e.id,n)}setWallView3d(e){this._wallView3d=e,this.wall3dKey="";try{localStorage.setItem("neonplan3d.wall3d",e?"1":"0")}catch{}}setupWall3d(e,t,n){let i=`${t.id}|${n}`;if(this.wall3dKey===i&&this.wall3dEl===e)return;let o=this.wall3dEl!==e;this.wall3dKey=i,this.wall3dEl=e,o&&e.addEventListener("pointerdown",r=>this.runDown3d(r),{capture:!0}),(async()=>{let r;for(let p=0;p<120&&!(r=e.viewer);p++)await new Promise(f=>setTimeout(f,50));o&&await new Promise(p=>setTimeout(p,250));let s=this.floor;if(!r||!s||this.wall3dKey!==i)return;if(!r.__npWall){r.__npWall=!0,r.updateWalls=function(){for(let f of this.floors)f.mask.standing.value=65535,f.mask.glass.value=0},r.labels.style.display="none";let p=new CSSStyleSheet;p.replaceSync(".fp3d-find-btn, .fp3d-find { display: none !important; }"),e.shadowRoot&&(e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,p]),r.camera.fov=58,r.camera.updateProjectionMatrix(),r.controls.minRadius=.6,r.controls.leftDragTurns=!1}let l=cn(t,n),d=Math.max(1.5,...t.points.map(p=>le(l,p).d)),c=ft(l,l.length/2,0),h=s.elevation+_e(s,t)+(r.floorMap.get(s.id)?.y??0)+1.15;r.controls.maxRadius=Math.max(1.4,d-.25);let u=r.getView();u.target.set(c[0],h,c[1]),r.flyTo({...u,radius:Math.max(1.2,Math.min(d*.8,d-.35)),theta:Math.atan2(l.n[0],l.n[1]),phi:1.3},o?0:650),r.invalidate(),this.runLiftHandle()})()}runLiftHandle(){cancelAnimationFrame(this.liftRaf);let e=()=>{this.liftRaf=0;let t=this.wall3dEl,n=this.renderRoot.querySelector(".fp3d-wv-lift");if(!t?.isConnected||!this._wallView||!this._wallView3d||(this.liftRaf=requestAnimationFrame(e),!n))return;let i=this.floor,o=this._wallSel?i?.furniture.find(p=>p.id===this._wallSel):void 0,r=t.viewer;if(!o||!i||!r||!it(o)||o.locked){n.hidden=!0;return}let s=ze(i,o),l=i.elevation+(r.floorMap.get(i.id)?.y??0)+s+o.h,d=r.camera.position.clone().set(o.x,l+.12,o.z).project(r.camera);if(d.z>1){n.hidden=!0;return}n.hidden=!1;let c=t.getBoundingClientRect(),h=n.offsetParent?.getBoundingClientRect()??c;n.style.transform=`translate(${c.left-h.left+(d.x+1)/2*c.width}px, ${c.top-h.top+(1-d.y)/2*c.height}px)`;let u=n.querySelector("b");u&&(u.textContent=this.m(Math.round((s-ye(i,o.x,o.z))*100)/100,2))};this.liftRaf=requestAnimationFrame(e)}liftDown(e){let t=this.floor,n=this._wallSel?t?.furniture.find(c=>c.id===this._wallSel):void 0,o=this.wall3dEl?.viewer;if(!t||!n||!o||!this.isAdmin)return;e.preventDefault(),e.stopPropagation(),e.currentTarget.setPointerCapture(e.pointerId);let r=Math.hypot(o.camera.position.x-n.x,o.camera.position.z-n.z)||1,s=this.wall3dEl.clientHeight||1,l=t.rooms.find(c=>c.points.length>=3&&K([n.x,n.z],c.points)),d=Se(t,l);this.lift={id:n.id,y:ze(t,n)-ye(t,n.x,n.z),startY:e.clientY,perPx:2*r*Math.tan(o.camera.fov*Math.PI/360)/s,base:this._doc,top:Math.max(0,d-n.h),moved:!1}}liftMove(e){let t=this.lift,n=this._wallView?this.floor?.rooms.find(r=>r.id===this._wallView.roomId):void 0;if(!t||!n)return;let i=(t.startY-e.clientY)*t.perPx;if(!t.moved&&Math.abs(e.clientY-t.startY)<3)return;t.moved=!0;let o=Math.min(t.top,Math.max(0,Math.round((t.y+i)*100)/100));this.moveOnWall(cn(n,this._wallView.edge),t.id,0,o,t.base,!1)}liftUp(){let e=this.lift;this.lift=null,e?.moved&&this.pushHistory(e.base)}wallPickTip=[0,0];toggleWallPick(e){let t=e.closest(".fp3d-toolbar")?.getBoundingClientRect(),n=e.getBoundingClientRect();this.wallPickTip=t?[n.left-t.left+n.width/2,n.bottom-t.top+8]:[0,0],this._wallPick=!this._wallPick}pickWall(e){let t=this.floor;if(!t)return;let n=null;for(let i of t.rooms){if(i.points.length<3)continue;let o=K(e,i.points)?-.25:0;i.points.forEach((r,s)=>{let l=i.points[(s+1)%i.points.length],d=(l[0]-r[0])**2+(l[1]-r[1])**2||1,c=Math.max(0,Math.min(1,((e[0]-r[0])*(l[0]-r[0])+(e[1]-r[1])*(l[1]-r[1]))/d)),h=Math.hypot(e[0]-(r[0]+(l[0]-r[0])*c),e[1]-(r[1]+(l[1]-r[1])*c));h<.6&&(!n||h+o<n.d)&&(n={room:i,edge:s,d:h+o})})}if(!n){let i=t.rooms.find(o=>o.points.length>=3&&K(e,o.points));if(!i)return;this._wallPick=!1,this.openRoomWalls(i),this.techPick&&this.enterTech();return}this._wallPick=!1,this.openWallView(n.room.id,n.edge),this.techPick&&this.enterTech()}techDoc3d(){let e=this._doc3d;if(this.techDocCache?.src===e)return this.techDocCache.doc;let t={...e,floors:e.floors.map(n=>({...n,furniture:n.furniture.filter(i=>ke.includes(i.type))}))};return this.techDocCache={src:e,doc:t},t}techDocCache=null;enterTech(){this.techPick=!1,this._techMode=!0,this._wallSel=null,this._wallMulti=[],this._runSel=null,this._runDraft=null,this._feedKind=null,this._runMode="draw"}turnOnWall(e,t){let n=this._doc.settings.wall_interior;this.change((i,o)=>{let r=o.furniture.find(d=>d.id===e);if(!r)return;r.rotation=Math.round((t%360+360)%360);let[s,l]=Xo(o,r,r.x,r.z,n,.6);Object.assign(r,{x:s,z:l})})}moveFromWall(e,t,n){this.change((i,o)=>{let r=o.furniture.find(s=>s.id===t);r&&(r.x=Math.round((r.x+e.n[0]*n)*1e3)/1e3,r.z=Math.round((r.z+e.n[1]*n)*1e3)/1e3)})}moveOnWall(e,t,n,i,o=this._doc,r=!0){this.change((s,l)=>{let d=l.furniture.find(c=>c.id===t);d&&(Object.assign(d,Hi(e,d,n)),i!==null&&(d.mount_y=Math.round(Math.min(io,Math.max(0,i-Lt(d)[0]))*1e3)/1e3))},o,r)}alongAxis(e,t){if(t.rotation_x||t.rotation_z)return null;let n=this.wallTurn(e,t)*Math.PI/180;return Math.abs(Math.sin(n))<.05?"w":Math.abs(Math.cos(n))<.05?"d":null}resizeOnWall(e,t,n,i,o,r,s=this._doc,l=!0){this.change((d,c)=>{let h=c.furniture.find(p=>p.id===t);if(!h)return;if(h.rotation_x||h.rotation_z){let[p,f]=Lt(h),m=ze(c,h)-ye(c,h.x,h.z),_=o??m+p,g=r??m+f;if(g-_<.03||f-p<1e-6)return;let v=(g-_)/(f-p);h.w*=v,h.d*=v,h.h*=v,h.mount_y=Math.max(0,_-Lt(h)[0]);return}let u=this.alongAxis(e,h);if(n!==null&&i!==null&&u&&i-n>=.05){let p=Ee(h).map(m=>le(e,m).s),f=(Math.min(...p)+Math.max(...p))/2;h[u]=M(i-n),Object.assign(h,Hi(e,h,(n+i)/2-f))}if(o!==null||r!==null){let p=ze(c,h)-ye(c,h.x,h.z),f=o??p,m=r??p+h.h;if(m-f<.03)return;h.h=M(m-f),o!==null&&it(h)&&(h.mount_y=M(Math.max(0,f)))}},s,l)}wallTurn(e,t){let n=Math.atan2(-e.n[0],e.n[1])*180/Math.PI;return((t.rotation-n)%360+360)%360}wallPicKey(e,t){return`${t.type}|${t.w}|${t.d}|${t.h}|${t.variant??""}|${Math.round(this.wallTurn(e,t))}`}async askWallPics(e,t){let n=t.filter(i=>!this.wallPicsAsked.has(this.wallPicKey(e,i)));if(n.length){for(let i of n)this.wallPicsAsked.add(this.wallPicKey(e,i));try{let i=await no();for(let o of n){let r=i.furnitureFront({type:o.type,w:o.w,d:o.d,h:o.h,variant:o.variant,lamp:Fi[o.type]??null},this.wallTurn(e,o),180,this.packs??[],3.2);this.wallPics.set(this.wallPicKey(e,o),r)}}catch{}this._wallPicTick++}}renderWallView(){let e=this._wallView,t=this.floor,n=e?t?.rooms.find(E=>E.id===e.roomId):void 0;if(!e||!t||!n||e.edge>=n.points.length)return y;let i=n.points.length,o=cn(n,e.edge),r=o.length,s=Se(t,n),l=this._techMode?hn(o,t,n,1.6).filter(E=>ke.includes(t.furniture.find(R=>R.id===E.id)?.type??"")):hn(o,t,n),d=Oi(o,t,n),c=E=>o.rightward?E:r-E,h=(E,R)=>[Math.min(c(E),c(R)),Math.abs(R-E)],u=E=>s-E,p=this.isAdmin,f=this._wallSel?t.furniture.find(E=>E.id===this._wallSel):void 0,m=f?l.find(E=>E.id===f.id)??(()=>{let E=Ee(f).map(N=>le(o,N)),R=ze(t,f)-_e(t,n),[C,H]=Lt(f);return{kind:"furniture",id:f.id,s0:Math.min(...E.map(N=>N.s)),s1:Math.max(...E.map(N=>N.s)),y0:R+C,y1:R+H,d:Math.min(...E.map(N=>N.d))}})():null,_=!!f&&it(f),g=this.wallSelection(),v=g.length>1,w=l.filter(E=>g.includes(E.id)),$=w.length?{s0:Math.min(...w.map(E=>E.s0)),s1:Math.max(...w.map(E=>E.s1)),y0:Math.min(...w.map(E=>E.y0)),y1:Math.max(...w.map(E=>E.y1))}:null,k=E=>this.m(E,2),x=E=>{let R=E.currentTarget.closest("svg"),C=R.createSVGPoint();return C.x=E.clientX,C.y=E.clientY,C.matrixTransform(R.getScreenCTM().inverse())},z=E=>[0,r,...l.filter(R=>!E.includes(R.id)).flatMap(R=>[R.s0,R.s1]),...d.flatMap(R=>[R.s0,R.s1])],S=(E,R)=>{if(!p)return;if(Y&&this._runMode){this.techPress=Y.pt(E),this.runDown(E,Y);return}if(E.stopPropagation(),this._runSel=null,E.shiftKey||this._multiMode){this.wallToggle(R);return}(!this.wallSelection().includes(R)||this._wallSingle)&&this.wallChoose([R]);let C=this.wallSelection(),H=x(E);E.currentTarget.closest("svg").setPointerCapture(E.pointerId);let N=l.filter(Q=>C.includes(Q.id));if(C.length>1&&C.some(Q=>this.isFixedItem("furniture",Q)))return;if(C.length>1&&N.length){let Q=Math.min(...N.map(oe=>oe.s0));this.wallDrag={id:R,ids:C,w:Math.max(...N.map(oe=>oe.s1))-Q,x:H.x,y:H.y,base:this._doc,s0:Q,y0:0,lift:N.every(oe=>{let ve=t.furniture.find(qe=>qe.id===oe.id);return!!ve&&it(ve)}),moved:!1};return}let se=l.find(Q=>Q.id===R),ne=t.furniture.find(Q=>Q.id===R);this.wallDrag={id:R,x:H.x,y:H.y,base:this._doc,s0:se.s0,y0:se.y0,lift:!!ne&&it(ne),moved:!1}},A=E=>{if(!p||this._runMode)return;let R=x(E);if(E.shiftKey||this._multiMode){E.currentTarget.closest("svg").setPointerCapture(E.pointerId),this._wallFrame={x0:R.x,y0:R.y,x1:R.x,y1:R.y};return}this._wallSel=null,this._wallMulti=[],this._wallSingle=!1;let C=o.rightward?R.x:r-R.x;this._wallGap=C>=0&&C<=r&&R.y>=0&&R.y<=s?this.wallGapAt(o,t,n,C,s-R.y):null},P=E=>{let R=this.wallResize;if(R){let we=x(E);R.moved=!0;let Qt=z([R.id]).map(Fe=>c(Fe)),oi=Fe=>{if(Fe=Math.round(Fe*100)/100,!E.altKey){for(let et of Qt)if(Math.abs(Fe-et)<.04)return et}return Fe};if(R.side==="l"||R.side==="r"){let Fe=R.side==="l"?Math.min(oi(we.x),R.x1-.1):R.x0,et=R.side==="r"?Math.max(oi(we.x),R.x0+.1):R.x1,[en,ao]=o.rightward?[Fe,et]:[r-et,r-Fe];this.resizeOnWall(o,R.id,en,ao,null,null,R.base,!1)}else{let Fe=Math.round((s-we.y)*100)/100;R.side==="t"?this.resizeOnWall(o,R.id,null,null,null,Math.max(R.y0+.05,Math.min(s,Fe)),R.base,!1):this.resizeOnWall(o,R.id,null,null,Math.max(0,Math.min(R.y1-.05,Fe)),null,R.base,!1)}return}let C=this._wallFrame;if(C){let we=x(E);this._wallFrame={...C,x1:we.x,y1:we.y};return}let H=this.wallDrag;if(!H)return;let N=x(E),se=N.x-H.x,ne=H.y-N.y;if(!H.moved&&Math.hypot(se,ne)<.02)return;H.moved=!0;let Q=l.find(we=>we.id===H.id),oe=H.ids?H.w??0:Q?Q.s1-Q.s0:0,ve=H.s0+(o.rightward?se:-se);if(ve=Math.round(ve*100)/100,!E.altKey)for(let we of z(H.ids??[H.id]))Math.abs(ve-we)<.04?ve=we:Math.abs(ve+oe-we)<.04&&(ve=we-oe);if(H.ids){this.moveSetOnWall(o,H.ids,ve-H.s0,H.lift?Math.round(ne*100)/100:null,H.base,!1);return}let qe=H.lift?Math.round((H.y0+ne)*100)/100:null;this.moveOnWall(o,H.id,ve-H.s0,qe,H.base,!1)},F=()=>{let E=this.wallResize;if(E){this.wallResize=null,E.moved&&this.pushHistory(E.base);return}let R=this._wallFrame;if(R){this._wallFrame=null;let[H,N]=[Math.min(R.x0,R.x1),Math.max(R.x0,R.x1)],[se,ne]=[Math.min(R.y0,R.y1),Math.max(R.y0,R.y1)],Q=l.filter(oe=>{let[ve,qe]=h(oe.s0,oe.s1),we=ve+qe/2,Qt=u((oe.y0+oe.y1)/2);return we>=H&&we<=N&&Qt>=se&&Qt<=ne}).map(oe=>oe.id);Q.length&&this.wallChoose([...new Set([...this.wallSelection(),...this.withGroups(Q)])]);return}let C=this.wallDrag;this.wallDrag=null,C?.moved&&this.pushHistory(C.base)},T=E=>{if(this._runMode&&(E.key==="Escape"||E.key==="Enter")){E.preventDefault(),E.key==="Enter"?this.finishRun("",null):this._runDraft?this._runDraft=null:this._runMode=null;return}if(E.key==="Escape"){this._wallView=null;return}if((E.key==="Delete"||E.key==="Backspace")&&p&&Y&&this._runSel&&!g.length&&!E.target.closest("input, select, textarea")){E.preventDefault();let se=this._runSel.pipe;this.changePool(Y.pool.id,ne=>ne.pipes=(ne.pipes??[]).filter(Q=>Q.id!==se)),this._runSel=null;return}if((E.key==="Delete"||E.key==="Backspace")&&p&&g.length&&!E.target.closest("input, select, textarea")){E.preventDefault(),this.deleteOnWall(g);return}if(!m&&(E.key==="ArrowLeft"||E.key==="ArrowRight")){E.preventDefault(),B(E.key==="ArrowLeft"?W:D);return}if(!m||!p||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(E.key)||E.target.closest("input, select, textarea"))return;E.preventDefault();let R=E.shiftKey?.1:.01,C=E.key==="ArrowRight"?R:E.key==="ArrowLeft"?-R:0,H=o.rightward?C:-C,N=E.key==="ArrowUp"?R:E.key==="ArrowDown"?-R:0;if(v)return this.moveSetOnWall(o,g,H,N||null);this.moveOnWall(o,m.id,H,_&&N?m.y0+N:null)},O=v&&$?$:m,L=O?(()=>{let E=O,[R,C]=h(E.s0,E.s1),H=u(E.y0),N=Math.min(s+.25,u(0)+.25);return I`<g class="fp3d-wv-dims">
            ${R>.03?I`<line x1="0" y1=${N} x2=${R} y2=${N} /><text x=${R/2} y=${N-.05}>${k(R)}</text>`:y}
            ${r-R-C>.03?I`<line x1=${R+C} y1=${N} x2=${r} y2=${N} /><text x=${R+C+(r-R-C)/2} y=${N-.05}>${k(r-R-C)}</text>`:y}
            ${E.y0>.03?I`<line x1=${R+C/2} y1=${H} x2=${R+C/2} y2=${s} /><text x=${R+C/2+.05} y=${(H+s)/2} class="fp3d-wv-up">${k(E.y0)}</text>`:y}
          </g>`})():y,D=(e.edge+(o.rightward?1:-1)+i)%i,W=(e.edge+(o.rightward?-1:1)+i)%i,V=E=>this.t("wall_n",{a:E+1,b:(E+1)%i+1}),B=E=>this.openWallView(n.id,E);this._wallPicTick,this.askWallPics(o,l.map(E=>t.furniture.find(R=>R.id===E.id)).filter(E=>!!E));let J=`${n.id}:${e.edge}`,Z=this.wvZoom?.key===J?this.wvZoom:null,U=r+1,q=s+.9,ae=(E,R,C)=>{let H=Math.min(8,Math.max(1,E)),N=U/H,se=q/H;return{k:H,w:N,h:se,x0:Math.min(-.5+U-N,Math.max(-.5,R)),y0:Math.min(-.35+q-se,Math.max(-.35,C))}},j=ae(Z?.k??1,Z?.x0??-.5,Z?.y0??-.35),be=(E,R,C)=>{let H=ae(E,R,C);this.wvZoom=H.k<=1.001?null:{key:J,k:H.k,x0:H.x0,y0:H.y0},this.requestUpdate()},Ze=(E,R,C)=>{let H=Math.min(8,Math.max(1,C));be(H,E-(E-j.x0)*j.k/H,R-(R-j.y0)*j.k/H)},Jt=E=>{let R=this.wvPinch,[C,H]=[...this.wvTouch.values()],N=Math.hypot(C.x-H.x,C.y-H.y),se=(C.x+H.x)/2,ne=(C.y+H.y)/2,Q=E.getBoundingClientRect(),oe=U/R.k,ve=q/R.k,qe=Math.min(Q.width/oe,Q.height/ve),we=Q.left+(Q.width-oe*qe)/2,Qt=Q.top+(Q.height-ve*qe)/2,oi=R.x0+(R.mx-we)/qe,Fe=R.y0+(R.my-Qt)/qe,et=Math.min(8,Math.max(1,R.k*N/Math.max(1,R.d))),en=qe*(et/R.k),ao=Q.left+(Q.width-U/et*en)/2,cd=Q.top+(Q.height-q/et*en)/2;be(et,oi-(se-ao)/en,Fe-(ne-cd)/en)};this.wvScale=1/Math.sqrt(j.k);let Pe=Math.max(.09,Math.min(.16,r/40))*this.wvScale,Yt=this.canLayRuns?this.runPool:void 0,Y=this.runCtx3d=Yt?{frame:o,floor:t,room:n,key:`${n.id}|${e.edge}`,L:r,H:s,gap:(St(t,n.id,o.a,o.b)?this._doc.settings.wall_interior/2:0)+Ls,runs:Ua(o,(Yt.pool?.pipes??[]).filter(E=>E.floor_id===t.id),re(this._doc,t,Yt)),pool:Yt,pt:E=>{let R=x(E);return{s:o.rightward?R.x:r-R.x,y:s-R.y}}}:null;return b`<div class="fp3d-wv-veil" @click=${E=>E.target===E.currentTarget&&(this._wallView=null)}>
      <div class="fp3d-wv" role="dialog" aria-label=${this.t("wall_view")} tabindex="0" @keydown=${T}>
        <div class="fp3d-wv-head">
          <button class="fp3d-btn" title=${`${this.t("wall_prev")}: ${V(W)}`} @click=${()=>B(W)}>‹</button>
          <b>${this.t("wall_view")} · ${n.name} · ${this.t("wall_n",{a:e.edge+1,b:(e.edge+1)%i+1})} · ${this.m(r,2)}</b>
          <button class="fp3d-btn" title=${`${this.t("wall_next")}: ${V(D)}`} @click=${()=>B(D)}>›</button>
          <span class="fp3d-wv-grow"></span>
          ${p&&fe("pool")&&Ke("pool")&&this.runPool?b`<button class="fp3d-btn ${this._techMode?"fp3d-primary":""}" title=${this.t("tech_mode_hint")} @click=${()=>{this._techMode?(this._techMode=!1,this._runDraft=null,this._feedKind=null,this._runMode=null):this.enterTech()}}>🛠 ${this.t("tech_mode")}</button>`:y}
          ${Y&&p&&!this._techMode?b`<button class="fp3d-btn ${this._runMode==="draw"?"fp3d-primary":""}" @click=${()=>{this._wallSel=null,this._runSel=null,this._runDraft=null,this._runMode=this._runMode==="draw"?null:"draw"}}>${this.t("wall_run_add")}</button>`:y}
          <div class="fp3d-seg" role="group">
            <button aria-pressed=${this._wallView3d} @click=${()=>this.setWallView3d(!0)}>${this.t("wall_view_3d")}</button>
            <button aria-pressed=${!this._wallView3d} @click=${()=>this.setWallView3d(!1)}>${this.t("wall_view_front")}</button>
          </div>
          <button class="fp3d-btn" title=${this.t("close")} @click=${()=>this._wallView=null}>✕</button>
        </div>
        <div class="fp3d-wv-body">
        ${this.renderWallKit(o,n,Y)}
        <div class="fp3d-wv-stage">
          <button class="fp3d-wv-side fp3d-wv-left" title=${`${this.t("wall_prev")}: ${V(W)}`} @click=${()=>B(W)}>‹<small>${V(W)}</small></button>
          <button class="fp3d-wv-side fp3d-wv-right" title=${`${this.t("wall_next")}: ${V(D)}`} @click=${()=>B(D)}>›<small>${V(D)}</small></button>
          ${this._wallView3d?y:b`<div class="fp3d-wv-zoom" title=${this.t("wall_zoom_hint")}>
                <button class="fp3d-btn" aria-label="+" @click=${()=>Ze(j.x0+j.w/2,j.y0+j.h/2,j.k*1.6)}>＋</button>
                <button class="fp3d-btn" aria-label="−" ?disabled=${j.k<=1.001} @click=${()=>Ze(j.x0+j.w/2,j.y0+j.h/2,j.k/1.6)}>−</button>
                <button class="fp3d-btn" title=${this.t("wall_zoom_all")} ?disabled=${j.k<=1.001} @click=${()=>be(1,-.5,-.35)}>⤢</button>
                ${j.k>1.001?b`<button class="fp3d-btn" aria-label="←" @click=${()=>be(j.k,j.x0-j.w*.3,j.y0)}>←</button>
                      <button class="fp3d-btn" aria-label="→" @click=${()=>be(j.k,j.x0+j.w*.3,j.y0)}>→</button>
                      <button class="fp3d-btn" aria-label="↑" @click=${()=>be(j.k,j.x0,j.y0-j.h*.3)}>↑</button>
                      <button class="fp3d-btn" aria-label="↓" @click=${()=>be(j.k,j.x0,j.y0+j.h*.3)}>↓</button>`:y}
              </div>`}
        ${this._wallView3d?b`<fp3d-view3d
              .walkable=${!1}
              class="fp3d-wv-3d"
              ${lr(E=>E&&this.setupWall3d(E,n,e.edge))}
              .hass=${this.hass}
              .building=${this._techMode?this.techDoc3d():this._doc3d}
              .floorId=${this._floorId}
              .roomId=${null}
              .wallMode=${"auto"}
              .explode=${!1}
              .markerMode=${"none"}
              .heatMode=${"none"}
              .theme=${"neon"}
              .productColors=${this.productColors??!1}
              .packs=${this.packs}
              .showEnergy=${!1}
              .holograms=${!1}
              .flows=${!1}
              ?furnish=${p}
              .furnishTypes=${null}
              .selectedFurniture=${this._wallSel}
              .selectedSet=${g}
              .quality=${"auto"}
              .floorThumbs=${!1}
              .roomLabels=${!1}
              .floorStack=${"single"}
              .panelOpen=${!1}
              .alerts=${!1}
              .scenes=${!1}
              .central=${!1}
              @furniture-select=${E=>{let R=E.detail.id;R&&(this.shiftHeld||this._multiMode)?this.wallToggle(R):R?!this.wallSelection().includes(R)||this._wallSingle?this.wallChoose([R]):this._wallSel=R:this.wallChoose([])}}
              @furniture-move=${this.onFurnitureMoved3d}
            ></fp3d-view3d>
            <div class="fp3d-wv-lift" hidden title=${this.t("wall_view_lift")} @pointerdown=${E=>this.liftDown(E)} @pointermove=${E=>this.liftMove(E)} @pointerup=${()=>this.liftUp()} @pointercancel=${()=>this.liftUp()}>
              <span>↕</span><b></b>
            </div>`:b`<svg
          class="fp3d-wv-svg ${this._runMode?"fp3d-wv-drawing":""} ${this._runMode==="valve"||this._runMode==="sight"?"fp3d-wv-fitmode":""} ${this._runMode==="erase"?"fp3d-wv-fitmode fp3d-wv-erase":""}"
          viewBox="${j.x0} ${j.y0} ${j.w} ${j.h}"
          preserveAspectRatio="xMidYMid meet"
          @wheel=${E=>{E.preventDefault();let R=E.currentTarget,C=R.createSVGPoint();C.x=E.clientX,C.y=E.clientY;let H=C.matrixTransform(R.getScreenCTM().inverse());Ze(H.x,H.y,j.k*Math.exp(-E.deltaY*.0015))}}
          @pointerdown=${E=>{if(E.pointerType==="touch"){if(this.wvTouch.set(E.pointerId,{x:E.clientX,y:E.clientY}),this.wvTouch.size===2){let[R,C]=[...this.wvTouch.values()];this.wvPinch={d:Math.hypot(R.x-C.x,R.y-C.y),mx:(R.x+C.x)/2,my:(R.y+C.y)/2,k:j.k,x0:j.x0,y0:j.y0},this.wvTap=null,this.techPress=null,F(),this.runPointUp(),this.fitDrag=null,this.jointDrag=null;return}if(this.wvPinch)return;if(Y&&this._runMode&&this.isAdmin){E.stopPropagation();let R=Y.pt(E);this.wvTap=R,this.techPress=R;return}}Y&&this._runMode?(this.techPress=Y.pt(E),this.runDown(E,Y)):this._runSel?this._runSel=null:A(E)}}
          @pointermove=${E=>{if(this.wvTouch.has(E.pointerId)&&this.wvTouch.set(E.pointerId,{x:E.clientX,y:E.clientY}),this.wvPinch){this.wvTouch.size===2&&Jt(E.currentTarget);return}if(P(E),Y&&this.jointDrag)this.jointMove(E,Y);else if(Y&&this.fitDrag)this.fittingMove(E,Y);else if(Y&&this.runDrag)this.runPointMove(E,Y);else if(Y&&this._runMode==="draw"&&this._runDraft){let R=Y.pt(E);this.runHover=[R.s,R.y],this.requestUpdate()}}}
          @pointerup=${E=>{if(this.wvTouch.delete(E.pointerId),this.wvPinch){this.wvTouch.size||(this.wvPinch=null);return}let R=this.wvTap;this.wvTap=null,R&&Y&&this._runMode&&this.runAt(Y,R.s,R.y,!1,1,null);let C=this.techPress;if(this.techPress=null,Y&&this._techMode&&this._runMode==="draw"&&this._runDraft&&C){let N=Y.pt(E);Math.hypot(N.s-C.s,N.y-C.y)>.12&&this.runAt(Y,N.s,N.y,E.altKey,1,null)}F(),this.runPointUp(),this.fittingUp(Y);let H=this.jointDrag;this.jointDrag=null,H?.moved?this.pushHistory(H.base):H&&Y&&this.openCard(Y.pool.id,`joint:${H.id}`)}}
          @pointercancel=${E=>{this.wvTouch.delete(E.pointerId),this.wvTouch.size||(this.wvPinch=null),this.wvTap=null,this.techPress=null,F(),this.runPointUp(),this.fitDrag=null}}
          style="--fs:${Pe}px"
        >
          <rect class="fp3d-wv-wall" x="0" y="0" width=${r} height=${s} />
          ${Array.from({length:Math.floor(s/.5)},(E,R)=>I`<line class="fp3d-wv-grid" x1="0" x2=${r} y1=${u((R+1)*.5)} y2=${u((R+1)*.5)} /><text class="fp3d-wv-scale" x="-0.06" y=${u((R+1)*.5)+.03}>${((R+1)*.5).toFixed(1)}</text>`)}
          ${d.map(E=>{let[R,C]=h(E.s0,E.s1),H=t.openings.find(se=>se.id===E.id),N=H?.type==="window"?this.t("opening_window"):H?.type==="garage"?this.t("opening_garage"):this.t("opening_door");return I`<rect class="fp3d-wv-hole ${H?.type==="window"?"fp3d-wv-window":""}" x=${R} y=${u(E.y1)} width=${C} height=${E.y1-E.y0} />
              ${C>Pe*3.5?I`<text class="fp3d-wv-hole-label" x=${R+C/2} y=${u(E.y1)+Pe*1.3} style="font-size:${Pe*.85}px">${N}</text>`:y}`})}
          ${l.map(E=>{let[R,C]=h(E.s0,E.s1),H=t.furniture.find(oe=>oe.id===E.id),N=H.name||Et(this.hass,H.type),se=E.y1-E.y0,ne=this.wallPics.get(this.wallPicKey(o,H)),Q=c(le(o,[H.x,H.z]).s);return I`<g class="fp3d-wv-item ${ne?"fp3d-wv-pic":""} ${E.id===this._wallSel||g.includes(E.id)?"fp3d-wv-sel":""}" @pointerdown=${oe=>S(oe,E.id)} @dblclick=${()=>{if(t.furniture.find(ve=>ve.id===E.id)?.group&&!this._wallSingle){this.wallChoose([E.id]),this._wallSingle=!0;return}this._wallView=null,this.selectItem("furniture",E.id)}}>
              ${ne?I`<image href=${ne.url} x=${Q+ne.x0} y=${u(E.y0+ne.y1)} width=${ne.x1-ne.x0} height=${ne.y1-ne.y0} preserveAspectRatio="none" />`:y}
              <rect x=${R} y=${u(E.y1)} width=${C} height=${Math.max(.02,se)}><title>${N}</title></rect>
              ${!ne&&C>Pe*3&&se>Pe*1.4?I`<text x=${R+C/2} y=${u(E.y1)+Math.min(se/2,Pe*1.6)+Pe*.35} style="font-size:${Pe}px">${N}</text>`:y}
            </g>`})}
          ${L}
          ${m&&f&&!v&&p&&!f.locked&&l.some(E=>E.id===m.id)?(()=>{let[E,R]=h(m.s0,m.s1),C=u(m.y1),H=u(m.y0),N=Pe*.75,se=this.alongAxis(o,f),ne=Q=>oe=>{oe.stopPropagation(),oe.currentTarget.closest("svg").setPointerCapture(oe.pointerId),this.wallResize={id:m.id,side:Q,x0:E,x1:E+R,y0:m.y0,y1:m.y1,base:this._doc,moved:!1}};return I`<g class="fp3d-wv-handles">
                  ${se?I`<rect class="fp3d-wv-handle fp3d-wv-ew" x=${E-N/2} y=${(C+H)/2-N} width=${N} height=${N*2} rx=${N/3} @pointerdown=${ne("l")} />
                        <rect class="fp3d-wv-handle fp3d-wv-ew" x=${E+R-N/2} y=${(C+H)/2-N} width=${N} height=${N*2} rx=${N/3} @pointerdown=${ne("r")} />`:y}
                  <rect class="fp3d-wv-handle fp3d-wv-ns" x=${E+R/2-N} y=${C-N/2} width=${N*2} height=${N} rx=${N/3} @pointerdown=${ne("t")} />
                  ${m.y0>.05&&it(f)?I`<rect class="fp3d-wv-handle fp3d-wv-ns" x=${E+R/2-N} y=${H-N/2} width=${N*2} height=${N} rx=${N/3} @pointerdown=${ne("b")} />`:y}
                  <text class="fp3d-wv-size" x=${E+R/2} y=${C-N*.9} style="font-size:${Pe*.85}px">${k(m.s1-m.s0)} × ${k(m.y1-m.y0)}</text>
                </g>`})():y}
          ${v&&$?(()=>{let[E,R]=h($.s0,$.s1),C=!this._wallMulti.length;return I`<g class=${`fp3d-wv-setframe${C?" fp3d-wv-setblock":""}`}><rect x=${E-.03} y=${u($.y1)-.03} width=${R+.06} height=${$.y1-$.y0+.06} /><text x=${E} y=${u($.y1)-.07} style="font-size:${Pe*.85}px">${C?`\u25A3 ${this.t("block_title")} \xB7 ${g.length}`:this.t("multi_title",{n:g.length})}</text></g>`})():y}
          ${this._wallGap?(()=>{let E=this._wallGap,[R,C]=h(E.s0,E.s1),H=E.low?Math.min(s,.9):Math.min(s,2.2),N=E.low?0:1.3;return I`<g class="fp3d-wv-gap"><rect x=${R} y=${u(H)} width=${C} height=${H-N} /><text x=${R+C/2} y=${u((H+N)/2)} style="font-size:${Pe}px">${k(C)}</text></g>`})():y}
          ${this._wallFrame?I`<rect class="fp3d-wv-marquee" x=${Math.min(this._wallFrame.x0,this._wallFrame.x1)} y=${Math.min(this._wallFrame.y0,this._wallFrame.y1)} width=${Math.abs(this._wallFrame.x1-this._wallFrame.x0)} height=${Math.abs(this._wallFrame.y1-this._wallFrame.y0)} />`:y}
          <line class="fp3d-wv-floor" x1="-0.3" x2=${r+.3} y1=${s} y2=${s} />
          ${Y?this.renderRuns(Y,c,u):y}
        </svg>`}
        </div>
        </div>
        <div class="fp3d-wv-foot">
          ${Y&&this._techMode&&!this._runDraft&&!this._runSel&&!m&&(this._runMode==="draw"||this._runMode==="feed")?b`<span class="fp3d-muted">${this.t(this._runMode==="feed"?"tech_feed_place":"tech_start")}</span> ${this.renderTechIssues(Y)}`:Y&&(this._runMode||this._runSel&&!m)?this.renderRunFoot(Y):v&&p?this.renderWallSetFoot(o,g,$,h):m&&f?b`<b>${f.name||Et(this.hass,f.type)}</b>
                ${this.fixButton("furniture",m.id)}
                ${f.group&&p?b`<button class="fp3d-btn" title=${this.t("block_select")} @click=${()=>{this._wallSingle=!1,this.requestUpdate()}}>▣ ${this.t("wv_block_all")}</button>`:y}
                ${Y&&ke.includes(f.type)?b`<button class="fp3d-btn fp3d-primary" @click=${()=>this.openCard(Y.pool.id,`dev:${f.id}`)}>${this.t("card_open")}</button>`:y}
                ${f.locked&&p?b`<span class="fp3d-muted">${this.t("wall_view_fixed")}</span>`:y}
                ${this.len(this.t("wall_view_left"),Math.round(h(m.s0,m.s1)[0]*1e3)/1e3,E=>{let R=E-h(m.s0,m.s1)[0];this.moveOnWall(o,m.id,o.rightward?R:-R,null)},.01,0)}
                ${this.len(this.t("wall_view_depth"),Math.round(Math.max(0,m.d)*1e3)/1e3,E=>this.moveFromWall(o,m.id,E-m.d),.01,0)}
                ${p&&!f.locked&&this.alongAxis(o,f)?this.len(this.t("width"),Math.round((m.s1-m.s0)*1e3)/1e3,E=>{let R=Math.max(.05,E);o.rightward?this.resizeOnWall(o,m.id,m.s0,m.s0+R,null,null):this.resizeOnWall(o,m.id,m.s1-R,m.s1,null,null)},.01,.05):y}
                ${p&&!f.locked?this.len(this.t("height_m"),Math.round((m.y1-m.y0)*1e3)/1e3,E=>this.resizeOnWall(o,m.id,null,null,null,m.y0+Math.max(.03,E)),.01,.03):y}
                ${_?this.len(this.t("mount_height"),Math.round(m.y0*1e3)/1e3,E=>this.moveOnWall(o,m.id,0,E),.01,0):b`<span class="fp3d-muted">${this.t("wall_view_floor")}</span>`}
                ${p&&!f.locked?b`<span class="fp3d-wv-turn">
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation-45)}>↺ 45°</button>
                      ${this.num(this.t("rotation"),f.rotation,E=>this.turnOnWall(f.id,E),1)}
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation+45)}>↻ 45°</button>
                    </span>`:y}
                <button class="fp3d-btn" @click=${()=>{this._wallView=null,this.selectItem("furniture",m.id)}}>${this.t("wall_view_form")}</button>
                ${p?b`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall([m.id])}>${this.t("delete")}</button>`:y}`:b`<span class="fp3d-muted">${this._wallView3d?this.t("wall_view_hint_3d"):l.length?this.t("wall_view_hint"):this.t("wall_view_empty")}</span>`}
          ${p&&!this._techMode?this.renderMultiToggle():y}
        </div>
      </div>
    </div>`}renderWallSetFoot(e,t,n,i){let o=!this._wallMulti.length,r=t.every(l=>this.isFixedItem("furniture",l)),s=!r&&t.some(l=>this.isFixedItem("furniture",l));return b`<b>${o?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:t.length})}</b>
      ${s?b`<span class="fp3d-wv-fixnote">${this.t("block_some_fixed")}</span>`:y}
      ${o?b`<div class="fp3d-seg" role="group">
              <button aria-pressed="true">${this.t("wv_block_all")}</button>
              <button aria-pressed="false" @click=${()=>this._wallSingle=!0}>${this.t("wv_block_one")}</button>
            </div>
            <button class="fp3d-btn" @click=${()=>{let l=this._wallSel;this._wallMulti=t,this.ungroupSelectionOf(t),this._wallSel=l}}>${this.t("block_break")}</button>`:b`<button class="fp3d-btn fp3d-primary" @click=${()=>{this.groupIds(t),this._wallMulti=[]}}>▣ ${this.t("block_make")}</button>`}
      ${n?this.len(this.t("wall_view_left"),Math.round(i(n.s0,n.s1)[0]*1e3)/1e3,l=>{let d=l-i(n.s0,n.s1)[0];this.moveSetOnWall(e,t,e.rightward?d:-d,null)},.01,0):y}
      <button class="fp3d-btn ${s?"fp3d-primary":""}" @click=${()=>{let l=new Set(t),d=!r&&!s;this.change((c,h)=>{for(let u of h.furniture)l.has(u.id)&&(u.locked=d||null)})}}>${r?`\u{1F513} ${this.t("unfix")}`:s?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
      <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall(t)}>${this.t("delete")}</button>`}deleteOnWall(e){if(!e.length||!this.isAdmin)return;if(e.length>1){if(!confirm(this.t(e.some(n=>this.isFixedItem("furniture",n))?"block_delete_fixed":"block_delete",{n:e.length})))return}else if(!this.confirmFixedDelete("furniture",e[0]))return;let t=new Set(e);this.change((n,i)=>i.furniture=i.furniture.filter(o=>!t.has(o.id))),this._wallSel=null,this._wallMulti=[],this._wallSingle=!1}groupIds(e){let t=new Set(e),n=G("block");this.change((i,o)=>{for(let r of o.furniture)t.has(r.id)&&(r.group=n)})}ungroupSelectionOf(e){let t=new Set(e);this.change((n,i)=>{for(let o of i.furniture)t.has(o.id)&&(o.group=null)})}addOnWall(e,t,n){let i=this.floor;if(!i||!this.isAdmin)return;this.rememberWallType(e);let o=this._wallGap;if(o)return this.addIntoGap(e,t,n,o);let[r,s,l]=Te(e),d=[...hn(t,i,n).map(_=>[_.s0,_.s1]),...Oi(t,i,n).filter(_=>_.y0<.05).map(_=>[_.s0,_.s1])],c=Math.max(0,t.length/2-r/2);for(let _=.1;_+r<=t.length-.05;_+=.05)if(!d.some(([g,v])=>_<v+.05&&_+r>g-.05)){c=_;break}let h=St(i,n.id,t.a,t.b)?this._doc.settings.wall_interior/2:0,[u,p]=ft(t,c+r/2,h+s/2+.01),f=Math.round((Math.atan2(-t.n[0],t.n[1])*180/Math.PI%360+360)%360),m={id:G("furniture"),type:e,x:M(u),z:M(p),rotation:f,w:r,d:s,h:l,variant:null};this.change((_,g)=>g.furniture.push(m)),this._runSel=null,this._runMode=null,this._wallSel=m.id}addIntoGap(e,t,n,i){let o=this.floor,r=i.s1-i.s0,[s,l,d]=Te(e);oo.has(e)&&(s>r+.005||r-s<.1)&&(s=Math.round(r*1e3)/1e3);let c=St(o,n.id,t.a,t.b)?this._doc.settings.wall_interior/2:0,h=i.s0+Math.min(s,r)/2,[u,p]=ft(t,h,c+l/2+.01),f=Math.round((Math.atan2(-t.n[0],t.n[1])*180/Math.PI%360+360)%360),m={id:G("furniture"),type:e,x:M(u),z:M(p),rotation:f,w:s,d:l,h:d,variant:null};this.change((_,g)=>g.furniture.push(m)),this._wallGap=null,this._wallSel=m.id,this._wallMulti=[]}rememberWallType(e){try{let t=JSON.parse(localStorage.getItem("neonplan3d.wallRecent")??"[]");localStorage.setItem("neonplan3d.wallRecent",JSON.stringify([e,...t.filter(n=>n!==e)].slice(0,6)))}catch{}}wallRecent(){try{let e=JSON.parse(localStorage.getItem("neonplan3d.wallRecent")??"[]");return Array.isArray(e)?e.filter(t=>typeof t=="string"&&(xi.includes(t)||!!he(t))):[]}catch{return[]}}renderWallFurniture(e,t){let n=this.hass?.language??"en",i=this._wallGap,o=i?i.s1-i.s0:0,r=kn(this._wallQuery.trim()),s=this._wallCat,l=(this.packs??[]).flatMap(g=>g.items.filter(v=>!v.light&&!v.vehicle&&!v.hole&&v.mount!=="ceiling").map(v=>({type:Dt(g.id,v.id),label:nt(v,n),search:`${Object.values(v.name).join(" ")} ${g.name}`,wall:v.mount==="wall"}))),d=g=>this.t(`furn_${g}`),c=[];s==="pack"?c=l:s==="energy"?c=["meter","inverter","home_battery","wallbox"].map(g=>({type:g,label:d(g),search:""})):s?c=(Ds[s]??[]).map(g=>({type:g,label:d(g),search:je(ro,`furn_${g}`)})):r||i?c=[...Object.values(Ds).flat().filter((g,v,w)=>w.indexOf(g)===v).map(g=>({type:g,label:d(g),search:je(ro,`furn_${g}`)})),...l]:this.wallRecent().length||(c=Ds.base.map(g=>({type:g,label:d(g),search:""})));let h=r.split(/\s+/).filter(Boolean),u=h.length?c.filter(g=>h.every(v=>kn(`${g.label} ${g.search} ${g.type.replace(/[_:.]/g," ")}`).includes(v))):c;if(i){let g=(v,w)=>w||Jc.has(v);u=u.filter(v=>g(v.type,v.wall)===!i.low).filter(v=>Te(v.type)[0]<=o+.01||oo.has(v.type)&&o>=(Yc[v.type]??.2)).sort((v,w)=>{let $=k=>oo.has(k)?1:Math.min(1,Te(k)[0]/o);return $(w.type)-$(v.type)||Number(v.type.startsWith("pack:"))-Number(w.type.startsWith("pack:"))})}let p=!s&&!r&&!i?this.wallRecent():[],f=[["base","\u25AD"],["hang","\u2594"],["tall","\u25AF"],["living","\u{1F6CB}"],["light","\u{1F4A1}"],...(this.packs??[]).some(g=>g.items.length)?[["pack","\u{1F9E9}"]]:[],...fe("energy_pro")?[["energy","\u26A1"]]:[]],m=[...p,...u.slice(0,40).map(g=>g.type)];this.askKitPics(m),this._wallPicTick;let _=(g,v)=>{let w=Te(g)[0],$=i&&oo.has(g)&&(w>o+.005||o-w<.1),k=this.kitPics.get(g);return b`<button class="fp3d-wv-tile" title=${v} @click=${()=>this.addOnWall(g,e,t)}>
        <span class="fp3d-wv-tile-pic">${k?b`<img src=${k} alt="" />`:b`<i></i>`}</span>
        <span class="fp3d-wv-tile-name">${v}</span>
        <small class=${$?"fp3d-wv-fit":""}>${$?`\u2194 ${this.m(o,2)}`:this.m(w,2)}</small>
      </button>`};return b`<aside class="fp3d-wv-kit">
      <h4>${this.t("wv_kit_title")}</h4>
      <div class="fp3d-wv-cats">
        ${f.map(([g,v])=>b`<button class="fp3d-wv-cat ${s===g?"fp3d-on":""}" title=${this.t(`wv_cat_${g}`)} @click=${()=>this._wallCat=s===g?null:g}><span>${v}</span>${this.t(`wv_cat_${g}`)}</button>`)}
      </div>
      <input class="fp3d-search" type="search" placeholder=${this.t("furniture_search")} .value=${this._wallQuery} @input=${g=>this._wallQuery=g.target.value} />
      ${i?b`<p class="fp3d-sub fp3d-wv-gapnote">${this.t("wv_gap",{w:this.m(o,2)})} <button class="fp3d-link" @click=${()=>this._wallGap=null}>✕</button></p>`:!s&&!r?b`<p class="fp3d-sub">${this.t("wv_gap_hint")}</p>`:y}
      ${s?b`<h4>${this.t(`wv_cat_${s}`)}</h4>`:y}
      ${p.length?b`<h4>${this.t("wv_recent")}</h4><div class="fp3d-wv-tiles">${p.map(g=>_(g,he(g)?nt(he(g),n):d(g)))}</div>`:y}
      ${(s||r||i)&&!u.length?b`<p class="fp3d-sub">${this.t(i?"wv_none_fits":"furniture_search_none")}</p>`:y}
      <div class="fp3d-wv-tiles">${u.slice(0,40).map(g=>_(g.type,g.label))}</div>
    </aside>`}async askKitPics(e){let t=e.filter(n=>!this.kitPicsAsked.has(n));if(t.length){for(let n of t)this.kitPicsAsked.add(n);try{let n=await no();for(let i of t){let[o,r,s]=Te(i);this.kitPics.set(i,n.furniturePreview({type:i,w:o,d:r,h:s,variant:null,lamp:Fi[i]??null},120,this.packs??[]))}}catch{}this._wallPicTick++}}renderWallKit(e,t,n){let i=!!n,o=fe("energy_pro");if(!i)return this.isAdmin?this.renderWallFurniture(e,t):y;if(this._techMode&&n)return this.renderTechKit(e,t,n);if(!this.isAdmin||!i&&!o)return y;let r=l=>b`<button class="fp3d-btn" @click=${()=>this.addOnWall(l,e,t)}>+ ${this.t(`furn_${l}`)}</button>`,s=(l,d)=>b`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>this.kitFitting(n,l)}>+ ${this.t(d)}</button>`;return b`<aside class="fp3d-wv-kit">
      ${i?b`<h4>${this.t("wall_kit_pool")}</h4>
            ${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(r)} ${s("valve","wall_run_valve")} ${s("sight","wall_run_sight")}
            ${["hole_wall","hole_floor","tee","y"].map(l=>b`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_place")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===l?null:l}}>+ ${this.t(`wall_kit_${l}`)}</button>`)}`:y}
      ${o?b`<h4>${this.t("wall_kit_energy")}</h4>${["meter","inverter","home_battery","wallbox"].map(r)}`:y}
    </aside>`}get runPool(){return this.poolArea??this.floor?.outdoor.find(e=>e.type==="pool"&&e.points.length>=3)}get canLayRuns(){return(ss()||this._techMode)&&!!this.runPool}runFrame(e){let[t,n]=e.split("|"),i=this.floor?.rooms.find(o=>o.id===t);return i&&Number(n)<i.points.length?cn(i,Number(n)):null}docWithDraft(){let e=this._runDraft;if(!e||!this._wallView)return this._doc;let t=[...e.from||!e.anchor?[]:[e.anchor],...e.pts];if(!t.length)return this._doc;let n=structuredClone(this._doc),i=n.floors.find(s=>s.outdoor.some(l=>l.id===e.pool)),o=i?.outdoor.find(s=>s.id===e.pool);if(!i||!o)return this._doc;o.pool??={};let r={id:"__draft",from:e.from,to:"",floor_id:i.id,points:t.map(s=>[s[0],s[2]]),heights:t.map(s=>s[1])};return o.pool.pipes=[...o.pool.pipes??[],r],n}runLast(e,t){if(e.pts.length)return e.pts[e.pts.length-1];if(e.fromT)return e.fromT;let n=re(this._doc,t.floor,t.pool);if(e.extend){let o=t.pool.pool?.pipes?.find(s=>s.id===e.extend.pipe),r=o?Oe(o,n):[];return(e.extend.end==="to"?r[r.length-1]:r[0])??null}let i=n(e.from);return i?[i.x,i.y,i.z]:null}runPick(e,t,n,i=!1){if(!i){for(let l of e.runs)for(let d of l.ends)if(Math.hypot(d.s-t,d.y-n)<.12)return{end:{pipe:l.id,end:d.end}}}let o=re(this._doc,e.floor,e.pool),r=null,s=[...e.floor.furniture.filter(l=>ke.includes(l.type)).flatMap(l=>Je(l.type).length?Je(l.type).map(d=>`dev:${l.id}:${d}`):[`dev:${l.id}`]),...(e.pool.pool?.joints??[]).map(l=>l.kind==="wall"||l.kind==="floor"?`joint:${l.id}:inside`:`joint:${l.id}`)];for(let l of i?[]:s){let d=o(l);if(!d)continue;let c=le(e.frame,[d.x,d.z]);if(c.d<-.3||c.d>1.6)continue;let h=Math.hypot(c.s-t,d.y-n);h<.12&&(!r||h<r.d)&&(r={node:l,d:h})}if(r)return{node:r.node};if(this._techMode&&!i){let l=e.floor.furniture.find(d=>{if(!ke.includes(d.type)||d.type==="pool_valve")return!1;let c=Ee(d).map(u=>le(e.frame,u));if(Math.min(...c.map(u=>u.d))>1.6||Math.max(...c.map(u=>u.d))<-.3)return!1;let h=ze(e.floor,d);return Math.min(...c.map(u=>u.s))-.03<=t&&t<=Math.max(...c.map(u=>u.s))+.03&&h-.03<=n&&n<=h+d.h+.03});if(l)return{node:`dev:${l.id}`}}for(let l of e.runs)for(let d of l.pieces){let[c,h]=[d.s1-d.s0,d.y1-d.y0],u=c*c+h*h,p=u>0?Math.max(0,Math.min(1,((t-d.s0)*c+(n-d.y0)*h)/u)):0,[f,m]=[d.s0+c*p,d.y0+h*p];if(Math.hypot(f-t,m-n)<(i?.16:.07))return{pipe:{id:l.id,p:mt(e.frame,f,m,d.d0+(d.d1-d.d0)*p)}}}return{}}eraseAt(e,t,n){let i=(l,d,c)=>Math.hypot(l-t,d-n)<c;for(let l of e.runs)for(let d of l.fittings)if(i(d.s,d.y,.1*Math.max(1,this.wvScale))){this.changePool(e.pool.id,c=>{let h=c.pipes?.find(u=>u.id===l.id);h&&(h.fittings=(h.fittings??[]).filter(u=>u.id!==d.id))});return}let o=re(this._doc,e.floor,e.pool),r=(e.pool.pool?.joints??[]).find(l=>{let d=l.kind==="wall"||l.kind==="floor"?`joint:${l.id}:inside`:`joint:${l.id}`,c=o(d);if(!c)return!1;let h=le(e.frame,[c.x,c.z]);return h.d>-.3&&h.d<1.6&&i(h.s,c.y,.1)});if(r){let l=`joint:${r.id}`;this.changePool(e.pool.id,d=>{d.joints=(d.joints??[]).filter(c=>c.id!==r.id),d.pipes=(d.pipes??[]).filter(c=>pe(c.from)!==l&&pe(c.to)!==l)}),this._runSel=null;return}let s=this.runPick(e,t,n,!0);if(s.pipe){let l=s.pipe.id;this.changePool(e.pool.id,d=>d.pipes=(d.pipes??[]).filter(c=>c.id!==l)),this._runSel=null}}runDown(e,t){if(!this._runMode||!this.isAdmin)return;e.stopPropagation();let{s:n,y:i}=t.pt(e);this.runAt(t,n,i,e.altKey,e.detail,null)}runDown3d(e){let t=this.runCtx3d;if(!this._runMode||!t||e.button!==0||!this.isAdmin||!this._wallView3d)return;let n=this.wall3dEl?.viewer;if(!n)return;e.stopPropagation(),e.preventDefault();let i=n.renderer.domElement.getBoundingClientRect(),[o,r]=[e.clientX-i.left,e.clientY-i.top],s=n.furnitureIdAt(o,r),l=s?t.floor.furniture.find(v=>v.id===s&&ke.includes(v.type)):void 0,d=n.pointerRay(o,r),c=ft(t.frame,0,t.gap),h=t.frame.n,u=d.d[0]*h[0]+d.d[2]*h[1];if(Math.abs(u)<1e-6)return;let p=((c[0]-d.o[0])*h[0]+(c[1]-d.o[2])*h[1])/u;if(p<=0&&!l)return;let f=[d.o[0]+d.d[0]*p,d.o[1]+d.d[1]*p,d.o[2]+d.d[2]*p],m=t.floor.elevation+(n.floorMap.get(t.floor.id)?.y??0),_=re(this._doc,t.floor,t.pool),g=()=>{let v=Je(l.type);if(!v.length)return`dev:${l.id}`;let w=$=>{let k=_($),x=[k.x-d.o[0],k.y+m-d.o[1],k.z-d.o[2]],z=x[0]*d.d[0]+x[1]*d.d[1]+x[2]*d.d[2];return Math.hypot(x[0]-d.d[0]*z,x[1]-d.d[1]*z,x[2]-d.d[2]*z)};return v.map($=>`dev:${l.id}:${$}`).sort(($,k)=>w($)-w(k))[0]};this.runAt(t,le(t.frame,[f[0],f[2]]).s,f[1]-m,e.altKey,e.detail,l&&this._runMode==="draw"?g():null)}runAt(e,t,n,i,o,r){let s=this._runMode;if(!s)return;if(s==="hole_wall"||s==="hole_floor"||s==="tee"||s==="y")return this.placeJoint(e,s,t,n);if(s==="feed")return this.placeFeed(e,t,n);if(s==="erase")return this.eraseAt(e,t,n);let l=r?{node:r}:this.runPick(e,t,n,s!=="draw");if(s!=="draw"){l.pipe&&this.addFitting(e,l.pipe.id,l.pipe.p,s),this._runMode=this._techMode?"draw":null,this._techMode&&(this._runSel=null);return}let d=this._runDraft;if(!d){let c={pool:e.pool.id,from:"",fromT:null,extend:null,pts:[],anchor:null,wall:e.key,d:e.gap},h;l.end?h={...c,extend:l.end}:l.node?h={...c,from:l.node}:l.pipe?h={...c,fromT:l.pipe.p}:h={...c,pts:[mt(e.frame,Math.round(t*20)/20,Math.round(n*20)/20,e.gap)]},this._runDraft={...h,anchor:this.runLast({...h,pts:[]},e)};return}if(o>=2)return this.finishRun("",null);if(l.node&&l.node!==d.from)return this.finishRun(l.node,null);if(l.pipe)return this.finishRun("",l.pipe.p);this._runDraft={...d,pts:[...d.pts,...this.runStep(d,e,t,n,i)],wall:e.key,d:e.gap}}runStep(e,t,n,i,o){let r=Math.round(n*20)/20,s=Math.round(i*20)/20,l=[],d=this.runLast(e,t);if(d&&e.wall!==t.key){let c=this.runFrame(e.wall),h=c&&Na(c,e.d,t.frame,t.gap);h&&(d=[M(h[0]),d[1],M(h[1])],l.push(d))}if(d&&!o){let c=le(t.frame,[d[0],d[2]]);c.d>-.35&&c.d<.6&&(Math.abs(r-c.s)<Math.abs(s-d[1])?r=c.s:s=d[1])}return l.push(mt(t.frame,r,s,t.gap)),l.map(c=>[M(c[0]),M(c[1]),M(c[2])])}finishRun(e,t,n=[],i){let o=this._runDraft,r=this.floor;if(this._runDraft=null,!o||!r)return;let s=[...o.pts,...n],l=this._techMode?this.runFrame(o.wall):null,d=this._techMode?this.floor?.outdoor.find(h=>h.id===o.pool):void 0;if(l&&d&&!n.length&&(e||t)){let h=s.length?s[s.length-1]:(()=>{let p=o.from?re(this._doc,r,d)(o.from):null;return p?[p.x,p.y,p.z]:o.fromT})(),u=t?{x:t[0],y:t[1],z:t[2]}:re(this._doc,r,d)(e);if(h&&u){let p=le(l,[h[0],h[2]]),f=le(l,[u.x,u.z]);Math.abs(p.s-f.s)>.03&&Math.abs(h[1]-u.y)>.03&&s.push(mt(l,f.s,h[1],o.d))}}if(!s.length&&!t&&(!e||e===o.from)&&!o.fromT)return;let c=null;this.changePool(o.pool,(h,u)=>{let p=h.joints??=[],f=h.pipes??=[],m=re(this._doc,r,u),_=L=>{let D=L.startsWith("joint:")?p.find(W=>`joint:${W.id}`===L):void 0;return D?{x:D.x,z:D.z,y:D.y}:m(L)},g=L=>{let D=null;for(let V of f){let B=un(Oe(V,_),L);B&&B.d<.12&&(!D||B.d<D.d)&&(D={pipe:V,d:B.d})}let W=D&&Qo(D.pipe,_,L,G("joint"),G("pipe"));return!D||!W?"":(p.push(W.joint),f.splice(f.indexOf(D.pipe),1,W.first,W.second),`joint:${W.joint.id}:out2`)},v=(L,D=[])=>{let{kind:W,id:V,port:B}=ee(L),J=W==="joint"&&!B?p.find(q=>q.id===V):void 0;if(!J||!J.kind)return L;if(J.kind==="wall"||J.kind==="floor")return`joint:${V}:inside`;let Z=new Set([...f.flatMap(q=>[q.from,q.to]),...D]),U=pn(J.kind).find(q=>!Z.has(`joint:${V}:${q}`));return U?`joint:${V}:${U}`:L},w=o.fromT?g(o.fromT):v(o.from),$=t?g(t):v(e,[w]),k=r.furniture.filter(L=>ke.includes(L.type)).map(L=>({id:L.id,type:L.type})),x=L=>f.flatMap(D=>[D.from,D.to]).filter(D=>pe(D)===L).map(D=>ee(D).port).filter(D=>!!D),z=L=>{let{kind:D,id:W}=ee(L);return D==="port"?u.pool?.ports?.find(V=>V.id===W)?.kind==="waste":D==="joint"&&/kanal|waste|abwasser|backwash/i.test(p.find(V=>V.id===W)?.name??"")},S=(L,D)=>{let{kind:W,id:V,port:B}=ee(L);if(W!=="dev"||B)return L;let J=r.furniture.find(U=>U.id===V)?.type??"",Z=Xa(J,D?jn(D,u,k):null,z(D),x(`dev:${V}`));return Z?`dev:${V}:${Z}`:L};w=S(w,$),$=S($,w);let A=s.map(L=>[M(L[0]),M(L[2])]),P=s.map(L=>M(L[1])),F=o.extend,T=F&&f.find(L=>L.id===F.pipe);if(F&&T){Object.assign(T,He(T,_)),F.end==="to"?(T.points=[...T.points,...A],T.heights=[...T.heights??[],...P],T.to=$):(T.points=[...A.reverse(),...T.points],T.heights=[...P.reverse(),...T.heights??[]],T.from=$),i!==void 0&&(T.height=i),c=T.id;return}let O={id:G("pipe"),from:w,to:$,floor_id:r.id,points:A,heights:P,height:i??P[P.length-1]??null};O=Ja(O,w?jn(w,u,k):null,$?jn($,u,k):null),f.push(O),c=O.id}),c&&!this._techMode&&(this._runSel={pipe:c,pt:null}),this._runMode=this._techMode?"draw":null}placeFeed(e,t,n){let i=this._feedKind,o=this.floor;if(this._feedKind=null,this._runMode="draw",!i||!o)return;let r=Math.round(t*20)/20,s=n<.25,l=e.gap-Ls,d=St(e.floor,e.room.id,e.frame.a,e.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,c=this.t(`feed_${i}`),[h,u]=Xt(e.frame,r,s?e.gap:l),p=s?{id:G("joint"),kind:"floor",x:h,z:u,y:0,name:c}:{id:G("joint"),kind:"wall",x:h,z:u,y:Math.round(n*20)/20,nx:M(e.frame.n[0]),nz:M(e.frame.n[1]),depth:M(d),name:c};this.changePool(e.pool.id,(f,m)=>{f.joints=[...f.joints??[],p];let _=(f.ports??[]).filter(k=>k.kind===i);if(i==="waste"&&!_.length){let k=fn(p,"outside"),x={id:G("port"),kind:"waste",x:M(k.x-e.frame.n[0]*1),z:M(k.z-e.frame.n[1]*1)};f.ports=[...f.ports??[],x],_=[x]}if(!_.length)return;let g=re(this._doc,o,m),v=k=>{let{kind:x,id:z,port:S}=ee(k),A=x==="joint"?(f.joints??[]).find(F=>F.id===z):void 0;if(A)return fn(A,S);let P=x==="port"?(f.ports??[]).find(F=>F.id===z):void 0;return P?g(k)??{x:P.x,y:.02,z:P.z}:g(k)},w=k=>{let{kind:x,id:z}=ee(k);if(x==="port"){let S=(f.ports??[]).find(A=>A.id===z);return S?Nn(S.kind):null}return null},$=Ci({from:`joint:${p.id}:outside`,vias:[],to:_.map(k=>`port:${k.id}`),floorId:o.id},v,f.joints??[],w,k=>G(k));f.joints=[...f.joints??[],...$.joints],f.pipes=[...f.pipes??[],...$.pipes]})}renderTechKit(e,t,n){let i=n.pool,o=l=>b`<button class="fp3d-wv-tile" @click=${()=>this.addOnWall(l,e,t)}>
      <span class="fp3d-wv-tile-pic">${this.kitPics.get(l)?b`<img src=${this.kitPics.get(l)} alt="" />`:b`<i></i>`}</span>
      <span class="fp3d-wv-tile-name">${this.t(`furn_${l}`)}</span>
    </button>`;this.askKitPics(["pool_pump","pool_filter","pool_heat_pump","pool_dosing"]);let r=["skimmer","drain","inlet","waste"].filter(l=>l==="waste"||(i.pool?.ports??[]).some(d=>d.kind===l)),s=(l,d)=>b`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===l?"draw":l}}>+ ${this.t(d)}</button>`;return b`<aside class="fp3d-wv-kit fp3d-tech-kit">
      ${this.renderTechStep(n)}
      <div class="fp3d-seg fp3d-tech-pen" role="group">
        <button aria-pressed=${this._runMode==="draw"} @click=${()=>{this._runMode="draw",this._runSel=null}}><span>✏</span>${this.t("tech_draw")}</button>
        <button aria-pressed=${this._runMode!=="draw"&&this._runMode!=="feed"&&this._runMode!=="erase"} @click=${()=>{this._runDraft=null,this._runMode=null}}><span>✋</span>${this.t("tech_pick")}</button>
        <button aria-pressed=${this._runMode==="erase"} title=${this.t("tech_erase_hint")} @click=${()=>{this._runDraft=null,this._runSel=null,this._feedKind=null,this._runMode=this._runMode==="erase"?"draw":"erase"}}><span>🧽</span>${this.t("tech_erase")}</button>
      </div>
      <button class="fp3d-btn fp3d-tech-undo" ?disabled=${!this._canUndo} title="Ctrl+Z" @click=${()=>{this._runDraft=null,this.undo()}}>↶ ${this.t("undo")}</button>
      <h4>${this.t("tech_feeds")}</h4>
      ${r.map(l=>{let d=ts(i,l);return b`<button class="fp3d-btn fp3d-tech-feed ${this._feedKind===l?"fp3d-primary":""} ${d?"fp3d-on":""}" ?disabled=${d} @click=${()=>{this._runDraft=null,this._feedKind=this._feedKind===l?null:l,this._runMode=this._feedKind?"feed":"draw"}}><i>${l==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${l}`)}${d?b`<small>✓</small>`:y}</button>`})}
      ${(i.pool?.ports??[]).some(l=>l.kind!=="waste")?y:b`<p class="fp3d-sub">${this.t("tech_no_ports")}</p>`}
      <h4>${this.t("tech_devices")}</h4>
      <div class="fp3d-wv-tiles">${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(o)}</div>
      <h4>${this.t("tech_fittings")}</h4>
      ${s("valve","wall_run_valve")} ${s("sight","wall_run_sight")}
      <p class="fp3d-sub">${this.t("tech_hint")}</p>
    </aside>`}renderTechStep(e){let t=e.pool,n=t.pool?.ports??[],i=e.floor.furniture.filter(u=>ke.includes(u.type)),o=(u,p)=>b`<div class="fp3d-tech-step ${u===null?"fp3d-done":""}"><b>${u===null?"\u2713":this.t("tech_step",{n:u})}</b>${p}</div>`;if(this._runMode==="feed")return o(1,this.t("tech_feed_place"));if(this._runMode==="erase")return b`<div class="fp3d-tech-step fp3d-tech-erasing"><b>🧽 ${this.t("tech_erase")}</b>${this.t("tech_erase_hint")}</div>`;if(this._runMode==="valve"||this._runMode==="sight")return o(4,this.t("tech_step_fit"));if(this._runDraft)return o(3,this.t("tech_step_drawing"));if(!n.some(u=>u.kind!=="waste"))return o(1,this.t("tech_no_ports"));let r=["skimmer","drain","inlet"].find(u=>n.some(p=>p.kind===u)&&!ts(t,u));if(r)return o(1,this.t("tech_step_feed",{name:this.t(`feed_${r}`)}));let s=i.find(u=>u.type==="pool_pump"),l=i.find(u=>u.type==="pool_filter");if(!s||!l)return o(2,this.t("tech_step_devices"));let d=es(t,i.map(u=>({id:u.id,type:u.type}))),c=u=>this.poolNodeLabel(t,u),h=d.find(u=>u.kind==="port");if(h){let{port:u}=ee(h.node),p={suction:this.t("feed_skimmer"),pressure:c(`dev:${l.id}:pump`),pump:c(`dev:${s.id}:pressure`),return:i.some(f=>f.type==="pool_heat_pump")?this.t("furn_pool_heat_pump"):this.t("feed_inlet"),waste:this.t("feed_waste"),in:c(`dev:${l.id}:return`),out:this.t("feed_inlet")};return o(3,this.t("tech_step_line",{a:u?p[u]??"\u2026":"\u2026",b:c(h.node)}))}return d.some(u=>u.kind==="loose")?o(3,this.t("tech_step_loose")):o(null,this.t("tech_ok"))}renderTechIssues(e){let t=e.floor.furniture.filter(r=>ke.includes(r.type)).map(r=>({id:r.id,type:r.type})),n=es(e.pool,t);if(!n.length)return b`<span class="fp3d-tech-ok">✓ ${this.t("tech_ok")}</span>`;let i=n.filter(r=>r.kind==="loose").length,o=[...i?[this.t("tech_issue_loose",{n:i})]:[],...n.filter(r=>r.kind==="port").map(r=>this.t("tech_issue_port",{name:this.poolNodeLabel(e.pool,r.node)})),...n.filter(r=>r.kind==="feed").map(r=>this.t("tech_issue_feed",{name:this.t(`feed_${r.node}`)}))];return b`<span class="fp3d-tech-issues">⚠ ${o.slice(0,4).join(" \xB7 ")}${o.length>4?" \u2026":""}</span>`}placeJoint(e,t,n,i){let o=e.gap-Ls,r=Math.round(n*100)/100,s=Math.round(i*100)/100,l=St(e.floor,e.room.id,e.frame.a,e.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,d;if(t==="hole_wall"){let[c,h]=Xt(e.frame,r,o);d={id:G("joint"),kind:"wall",x:c,z:h,y:Math.max(.05,s),nx:M(e.frame.n[0]),nz:M(e.frame.n[1]),depth:M(l)}}else if(t==="hole_floor"){let[c,h]=Xt(e.frame,r,e.gap);d={id:G("joint"),kind:"floor",x:c,z:h,y:0}}else{let[c,h]=Xt(e.frame,r,e.gap);d={id:G("joint"),kind:t,x:c,z:h,y:s}}this.changePool(e.pool.id,c=>c.joints=[...c.joints??[],d]),this._runMode=null}runOut(e,t){let n=this._runDraft,i=n&&this.runLast(n,e);if(!n||!i)return;if(t==="down")return this.finishRun("",null,[[i[0],-.3,i[2]]],-.3);let o=le(e.frame,[i[0],i[2]]),r=St(e.floor,e.room.id,e.frame.a,e.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,s=mt(e.frame,o.s,i[1],-(r+.15));this.finishRun("",null,[[M(s[0]),i[1],M(s[2])]],i[1])}addFitting(e,t,n,i){let o=re(this._doc,e.floor,e.pool);this.changePool(e.pool.id,r=>{let s=r.pipes?.find(d=>d.id===t),l=s&&un(Oe(s,o),n);!s||!l||(s.fittings=[...s.fittings??[],{id:G("fit"),kind:i,at:M(l.at),...i==="valve"?{open:!0}:{}}])}),this._runSel={pipe:t,pt:null}}runPieceDown(e,t,n,i){if(this._runMode)return;if(e.stopPropagation(),this._wallSel=null,this._runSel?.pipe!==n.id||!this.isAdmin){this._runSel={pipe:n.id,pt:null};return}let{s:o,y:r}=t.pt(e),s=n.pieces.find(p=>p.k===i),l=Math.hypot(s.s1-s.s0,s.y1-s.y0)>0?Math.hypot(o-s.s0,r-s.y0)/Math.hypot(s.s1-s.s0,s.y1-s.y0):0,d=s.d0+(s.d1-s.d0)*Math.min(1,l),c=this._doc,h=re(c,t.floor,t.pool),u=-1;this.changePool(t.pool.id,p=>{let f=p.pipes?.find(m=>m.id===n.id);f&&(Object.assign(f,He(f,h)),u=Math.max(0,Math.min(f.points.length,i+1-Kn(f,h))),f.points.splice(u,0,Xt(t.frame,o,d)),f.heights.splice(u,0,M(r)))}),!(u<0)&&(this._runSel={pipe:n.id,pt:u},this.runDrag={pipe:n.id,i:u,d,base:c,moved:!0},e.currentTarget.closest("svg")?.setPointerCapture(e.pointerId))}runPointDown(e,t,n,i){if(this._runMode||!this.isAdmin)return;e.stopPropagation();let o=re(this._doc,t.floor,t.pool);if(e.detail>=2){this.changePool(t.pool.id,d=>{let c=d.pipes?.find(h=>h.id===n);c&&(Object.assign(c,He(c,o)),c.points.splice(i,1),c.heights.splice(i,1))}),this._runSel={pipe:n,pt:null};return}let r=t.pool.pool?.pipes?.find(d=>d.id===n),l=(r&&He(r,o))?.points[i];l&&(this._runSel={pipe:n,pt:i},this.runDrag={pipe:n,i,d:le(t.frame,l).d,base:this._doc,moved:!1},e.currentTarget.closest("svg")?.setPointerCapture(e.pointerId))}runPointMove(e,t){let n=this.runDrag;if(!n)return;let{s:i,y:o}=t.pt(e);i=Math.round(i*100)/100,o=Math.round(o*100)/100;let r=re(n.base,t.floor,t.pool),l=n.base.floors.flatMap(c=>c.outdoor).find(c=>c.id===t.pool.id)?.pool?.pipes?.find(c=>c.id===n.pipe);if(!l)return;let d=He(l,r);if(!e.altKey){let c=Oe(d,r),h=Kn(d,r);for(let u of[c[n.i+h-1],c[n.i+h+1]]){if(!u)continue;let p=le(t.frame,[u[0],u[2]]);Math.abs(p.s-i)<.04&&(i=M(p.s)),Math.abs(u[1]-o)<.04&&(o=M(u[1]))}}n.moved=!0,this.change((c,h)=>{let u=h.outdoor.find(p=>p.id===t.pool.id)?.pool?.pipes?.find(p=>p.id===n.pipe);u&&(Object.assign(u,He(u,r)),u.points[n.i]=Xt(t.frame,i,n.d),u.heights[n.i]=o)},n.base,!1)}runPointUp(){let e=this.runDrag;this.runDrag=null,e?.moved&&this.pushHistory(e.base)}fittingDown(e,t,n,i){if(!(this._runMode||!this.isAdmin)){if(e.stopPropagation(),this._runSel={pipe:n,pt:null},e.detail>=2){this.changePool(t.pool.id,o=>{let r=o.pipes?.find(s=>s.id===n);r?.fittings&&(r.fittings=r.fittings.filter(s=>s.id!==i))});return}this.fitDrag={pipe:n,id:i,base:this._doc,moved:!1,x:e.clientX,y:e.clientY},e.currentTarget.closest("svg")?.setPointerCapture(e.pointerId)}}jointDown(e,t,n){this._runMode||!this.isAdmin||(e.stopPropagation(),this.jointDrag={id:t,d:n,base:this._doc,moved:!1},e.currentTarget.closest("svg")?.setPointerCapture(e.pointerId))}jointMove(e,t){let n=this.jointDrag;if(!n)return;n.moved=!0;let{s:i,y:o}=t.pt(e),r=e.altKey?i:Math.round(i*100)/100,s=e.altKey?o:Math.round(o*100)/100;this.change((l,d)=>{let c=d.outdoor.find(h=>h.id===t.pool.id)?.pool?.joints?.find(h=>h.id===n.id);c&&([c.x,c.z]=Xt(t.frame,r,n.d),c.kind!=="floor"&&(c.y=Math.max(c.kind==="wall"?.05:-1,M(s))))},n.base,!1)}fittingMove(e,t){let n=this.fitDrag;if(!n||!n.moved&&Math.hypot(e.clientX-n.x,e.clientY-n.y)<4)return;n.moved=!0;let{s:i,y:o}=t.pt(e),r=t.runs.find(c=>c.id===n.pipe);if(!r)return;let s=null;for(let c of r.pieces){let[h,u]=[c.s1-c.s0,c.y1-c.y0],p=h*h+u*u,f=p>0?Math.max(0,Math.min(1,((i-c.s0)*h+(o-c.y0)*u)/p)):0,[m,_]=[c.s0+h*f,c.y0+u*f],g=Math.hypot(m-i,_-o);(!s||g<s.d)&&(s={p:mt(t.frame,m,_,c.d0+(c.d1-c.d0)*f),d:g})}if(!s)return;let l=re(n.base,t.floor,t.pool),d=s.p;this.change((c,h)=>{let u=h.outdoor.find(m=>m.id===t.pool.id)?.pool?.pipes?.find(m=>m.id===n.pipe),p=u?.fittings?.find(m=>m.id===n.id),f=u&&un(Oe(u,l),d);p&&f&&(p.at=M(f.at))},n.base,!1)}fittingUp(e){let t=this.fitDrag;if(this.fitDrag=null,!!t){if(t.moved)return this.pushHistory(t.base);e&&this.changePool(e.pool.id,n=>{let i=n.pipes?.find(o=>o.id===t.pipe)?.fittings?.find(o=>o.id===t.id);i?.kind==="valve"&&(i.open=i.open===!1)})}}kitFitting(e,t){this._runDraft=null;let n=e&&this._runSel?e.runs.find(o=>o.id===this._runSel.pipe):void 0;if(!e||!n||!n.pieces.length){this._runMode=this._runMode===t?null:t;return}let i=[...n.pieces].sort((o,r)=>Math.hypot(r.s1-r.s0,r.y1-r.y0)-Math.hypot(o.s1-o.s0,o.y1-o.y0))[0];this.addFitting(e,n.id,mt(e.frame,(i.s0+i.s1)/2,(i.y0+i.y1)/2,(i.d0+i.d1)/2),t),this._runMode=null}renderRuns(e,t,n){let i=this._runSel?.pipe,o=_=>{let g=le(e.frame,[_[0],_[2]]);return`${t(g.s)},${n(_[1])}`},r=this._runDraft,s=r&&this.runLast(r,e),l=r?[...r.fromT||r.extend||r.from?[this.runLast({...r,pts:[]},e)]:[],...r.pts].filter(_=>!!_):[],d=this.runHover,c=re(this._doc,e.floor,e.pool),h={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:"K"},u=(_,g,v="",w)=>{let $=c(_),k=$&&le(e.frame,[$.x,$.z]);return $&&k&&k.d>-.6&&k.d<1.6&&k.s>-.2&&k.s<e.L+.2?[I`<g class="fp3d-wv-node ${v} ${w?"fp3d-wv-joint":""}" transform="translate(${t(k.s)} ${n($.y)}) scale(${this.wvScale})" @pointerdown=${x=>w&&this.jointDown(x,w,k.d)}>
              <circle r="0.05" /><text y="0.11">${g}</text><title>${this.poolNodeLabel(e.pool,_)}</title>
            </g>`]:[]},p=[...e.floor.furniture.flatMap(_=>{if(h[_.type]===void 0)return[];let g=Je(_.type);return g.length?g.flatMap(v=>u(`dev:${_.id}:${v}`,this.t(`port_${v}`))):u(`dev:${_.id}`,h[_.type])}),...(e.pool.pool?.joints??[]).flatMap(_=>_.kind==="wall"||_.kind==="floor"?u(`joint:${_.id}:inside`,this.jointLabel(e.pool,_.id),"fp3d-wv-hole-mark",_.id):u(`joint:${_.id}`,this.jointLabel(e.pool,_.id),"",_.id))],f=this._techMode?rl({pipes:e.pool.pool?.pipes??[],ports:e.pool.pool?.ports??[],devices:this._doc.floors.flatMap(_=>_.furniture).filter(_=>ke.includes(_.type)).map(_=>({id:_.id,type:_.type,open:_.valve_open!==!1,valve:_.valve_position??null})),pumpOn:!0,heaterOn:!1,heating:!1}):null,m=_=>{let g=f?.get(_);if(!g?.active)return"";let[v,w,$]=al(g).map(k=>Math.round(k*255));return`stroke: rgb(${v}, ${w}, ${$}); stroke-opacity: 0.95`};return I`<g class="fp3d-wv-runs">
      ${p}
      ${e.runs.map(_=>I`<g class="fp3d-wv-run ${_.id===i?"fp3d-wv-run-sel":""} ${f&&!f.get(_.id)?.active?"fp3d-wv-dry":""}">
          ${_.pieces.map(g=>I`<line class=${g.y0<-.01&&g.y1<-.01?"fp3d-wv-under":""} style=${m(_.id)} x1=${t(g.s0)} y1=${n(g.y0)} x2=${t(g.s1)} y2=${n(g.y1)} @pointerdown=${v=>this.runPieceDown(v,e,_,g.k)} />`)}
          ${_.ends.map(g=>I`<circle class="fp3d-wv-end" cx=${t(g.s)} cy=${n(g.y)} r="0.035" />`)}
          ${_.fittings.map(g=>g.kind==="valve"?I`<g class="fp3d-wv-valve ${g.open?"":"fp3d-wv-shut"}" transform="translate(${t(g.s)} ${n(g.y)}) scale(${this.wvScale})" @pointerdown=${v=>this.fittingDown(v,e,_.id,g.id)}>
                  <circle r="0.05" /><line x1="0" y1="0" x2=${g.open?.11:0} y2=${g.open?0:-.11} />
                </g>`:I`<rect class="fp3d-wv-sight" x=${t(g.s)-.06} y=${n(g.y)-.035} width="0.12" height="0.07" rx="0.02" @pointerdown=${v=>this.fittingDown(v,e,_.id,g.id)} />`)}
          ${_.id===i?_.points.map(g=>I`<circle class="fp3d-wv-runpt ${this._runSel?.pt===g.i?"fp3d-on":""}" cx=${t(g.s)} cy=${n(g.y)} r="0.04" @pointerdown=${v=>this.runPointDown(v,e,_.id,g.i)} />`):y}
        </g>`)}
      ${l.length?I`<polyline class="fp3d-wv-draft" points=${l.map(o).join(" ")} />`:y}
      ${s&&d?I`<line class="fp3d-wv-draft fp3d-wv-rubber" x1=${o(s).split(",")[0]} y1=${o(s).split(",")[1]} x2=${t(d[0])} y2=${n(d[1])} />`:y}
    </g>`}renderRunFoot(e){let t=this._runMode,n=this._runDraft;if(t==="hole_wall"||t==="hole_floor"||t==="tee"||t==="y")return b`<span class="fp3d-muted">${this.t("wall_run_place")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(t==="valve"||t==="sight")return b`<span class="fp3d-muted">${this.t("wall_run_fit")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(t==="draw")return b`<span class="fp3d-muted">${this.t(n?"wall_run_next":"wall_run_start")}</span>
        ${n?b`<button class="fp3d-btn" @click=${()=>this.runOut(e,"down")}>${this.t("wall_run_down")}</button>
              <button class="fp3d-btn" @click=${()=>this.runOut(e,"through")}>${this.t("wall_run_through")}</button>
              <button class="fp3d-btn fp3d-primary" @click=${()=>this.finishRun("",null)}>${this.t("wall_run_done")}</button>`:y}
        <button class="fp3d-btn" @click=${()=>{this._runDraft=null,this._runMode=null}}>${this.t("cancel")}</button>`;let i=this._runSel,o=i&&e.pool.pool?.pipes?.find(h=>h.id===i.pipe);if(!i||!o)return y;let r=re(this._doc,e.floor,e.pool),s=He(o,r),l=i.pt,d=this.isAdmin,c=o.to?o.from?null:"from":"to";return b`<b>${this.t("wall_run_pipe")}</b>
      ${l!==null&&s.heights?.[l]!==void 0?this.len(this.t("wall_run_pt"),s.heights[l]??0,h=>this.changePool(e.pool.id,u=>{let p=u.pipes?.find(f=>f.id===o.id);p&&(Object.assign(p,He(p,r)),p.heights[l]=Math.min(10,Math.max(-5,M(h))))}),.01):y}
      ${d?b`<button class="fp3d-btn" @click=${()=>this.kitFitting(e,"valve")}>${this.t("wall_run_valve")}</button>
            <button class="fp3d-btn" @click=${()=>this.kitFitting(e,"sight")}>${this.t("wall_run_sight")}</button>
            ${c?b`<button class="fp3d-btn" @click=${()=>{this._runMode="draw";let h={pool:e.pool.id,from:"",fromT:null,extend:{pipe:o.id,end:c},pts:[],anchor:null,wall:e.key,d:e.gap};this._runDraft={...h,anchor:this.runLast(h,e)}}}>${this.t("wall_run_more")}</button>`:y}
            <button class="fp3d-btn" title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(e.pool.id,h=>{let u=h.pipes?.find(p=>p.id===o.id);u&&(Object.assign(u,He(u,r)),[u.from,u.to,u.points,u.heights]=[u.to,u.from,[...u.points].reverse(),[...u.heights??[]].reverse()],u.fittings=u.fittings?.map(p=>({...p,at:M(Math.max(0,Ws(u,r)-p.at))})))})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>{this.changePool(e.pool.id,h=>h.pipes=(h.pipes??[]).filter(u=>u.id!==o.id)),this._runSel=null}}>${this.t("delete")}</button>`:y}
      <span class="fp3d-muted">${this.t("wall_run_tip")}</span>`}get poolArea(){let e=this.outdoorArea;if(e?.type==="pool")return e;let t=this.floor?.outdoor.filter(n=>n.type==="pool")??[];return t.length===1?t[0]:void 0}poolDown(e,t,n,i){let o=this.floor;if(!o)return!1;let r=this.poolArea,s=t.closest("[data-pool-node]")?.getAttribute("data-pool-node")??null;if(this._jointPlace&&r)return this.isAdmin&&this.placeJointPlan(r,this._jointPlace,n,t.closest("[data-pipe]")?.getAttribute("data-pipe")??null),this._jointPlace=null,!0;if(this._pipeMode){if(!this.isAdmin)return!0;if(!r){let u=o.outdoor.find(p=>p.type==="pool"&&p.points.length>=3&&K(n,p.points));return u&&(this.selectItem("outdoor",u.id),this._tool="pool",this._pipeMode=!0),!0}let h=t.closest("[data-pipe-end]")?.getAttribute("data-pipe-end");if(h&&!this._pipeDraft){let[u,p]=h.split("|"),f=r.pool?.pipes?.find(_=>_.id===u),m=f&&(p==="to"?f.points[f.points.length-1]:f.points[0]);m&&(this._pipeDraft={from:"",points:[],extend:{pipe:u,end:p,at:m}})}else if(s){let u=this._pipeDraft;u?u.extend?(this.extendPipe(r,u.extend,s,u.points),this._pipeDraft=null):s!==u.from&&(this.addPipe(r.id,u.from,s,u.points),this._pipeDraft=null):this._pipeDraft={from:s,points:[]}}else if(this._pipeDraft){let u=this.snap(n,void 0,e.altKey);this._pipeDraft={...this._pipeDraft,points:[...this._pipeDraft.points,[M(u[0]),M(u[1])]]}}return!0}let l=h=>[h.slice(0,h.lastIndexOf(":")),Number(h.slice(h.lastIndexOf(":")+1))];if(r&&this.isAdmin){let h=t.closest("[data-pipe-pt]")?.getAttribute("data-pipe-pt");if(h){let[p,f]=l(h);return e.detail>=2?this.change((m,_)=>{let g=_.outdoor.find(v=>v.id===r.id)?.pool?.pipes?.find(v=>v.id===p);g?.points.splice(f,1),g?.heights?.splice(f,1)}):this.drag={kind:"pipept",pool:r.id,pipe:p,index:f,base:this._doc,moved:!1},!0}let u=t.closest("[data-pipe-seg]")?.getAttribute("data-pipe-seg");if(u){let[p,f]=l(u),m=this.snap(n,void 0,e.altKey);return this.change((_,g)=>{let v=g.outdoor.find(w=>w.id===r.id)?.pool?.pipes?.find(w=>w.id===p);v?.points.splice(f,0,[M(m[0]),M(m[1])]),v?.heights?.splice(f,0,v.heights[f-1]??v.heights[f]??null)}),this._pipeId=p,this.drag={kind:"pipept",pool:r.id,pipe:p,index:f,base:this._doc,moved:!1},!0}}let d=t.closest("[data-pipe]")?.getAttribute("data-pipe");if(d)return this._pipeId=d,!0;if(s&&r&&this.isAdmin)return s.startsWith("port:")?this.drag={kind:"poolport",pool:r.id,id:s.slice(5),base:this._doc,moved:!1}:s.startsWith("joint:")?this.drag={kind:"pooljoint",pool:r.id,id:ee(s).id,start:n,base:this._doc,moved:!1}:this.drag={kind:"pooldev",id:s.slice(4),start:n,base:this._doc,moved:!1},!0;if(this.isAdmin){let h=t.closest("[data-out-box]")?.getAttribute("data-out-box");if(h){let[p,f]=l(h);return this.drag={kind:"outbox",id:p,corner:f,base:this._doc,moved:!1},!0}let u=t.closest("[data-out-vertex]")?.getAttribute("data-out-vertex");if(u){let[p,f]=l(u);return this.drag={kind:"outvertex",id:p,index:f,base:this._doc,moved:!1},!0}}let c=t.closest("[data-outdoor]")?.getAttribute("data-outdoor");return c&&o.outdoor.some(h=>h.id===c&&h.type==="pool")?(this.selectItem("outdoor",c),this._pipeId=null,this.isAdmin&&(this.drag={kind:"outdoor",id:c,start:n,startScreen:i,base:this._doc,moved:!1}),!0):(this._pipeId=null,!1)}changePool(e,t){this.change((n,i)=>{let o=i.outdoor.find(r=>r.id===e);o&&(o.pool??={},t(o.pool,o))})}extendPipe(e,t,n,i){let o=this.floor;if(!o)return;let r=re(this._doc,o,e);n=this.jointEnd(e,n,i[i.length-1]),this.changePool(e.id,s=>{let l=s.pipes?.find(c=>c.id===t.pipe);if(!l)return;Object.assign(l,He(l,r));let d=l.heights??[];if(t.end==="to"){let c=d[d.length-1]??l.height??null;l.points=[...l.points,...i],l.heights=[...d,...i.map(()=>c)],l.to=n}else{let c=Ws(l,r),h=d[0]??l.height??null;l.points=[...[...i].reverse(),...l.points],l.heights=[...i.map(()=>h),...d],l.from=n;let u=Ws(l,r)-c;l.fittings=l.fittings?.map(p=>({...p,at:M(p.at+u)}))}}),this._pipeId=t.pipe}jointEnd(e,t,n,i=[]){let{kind:o,id:r,port:s}=ee(t),l=o==="joint"&&!s?e.pool?.joints?.find(h=>h.id===r):void 0;if(!l)return t;if(l.kind==="wall"||l.kind==="floor"){let h=this._doc.floors.find(m=>m.outdoor.some(_=>_.id===e.id)),u=h&&re(this._doc,h,e),[p,f]=[u?.(`joint:${r}:inside`),u?.(`joint:${r}:outside`)];return!n||!p||!f?`joint:${r}:inside`:`joint:${r}:${Math.hypot(n[0]-p.x,n[1]-p.z)<=Math.hypot(n[0]-f.x,n[1]-f.z)?"inside":"outside"}`}let d=new Set([...(e.pool?.pipes??[]).flatMap(h=>[h.from,h.to]),...i]),c=pn(l.kind).find(h=>!d.has(`joint:${r}:${h}`));return c?`joint:${r}:${c}`:t}addPipe(e,t,n,i){let o=this.floor;if(!o)return;let r=o.outdoor.find(l=>l.id===e);r&&(t=this.jointEnd(r,t,i[0]),n=this.jointEnd(r,n,i[i.length-1],[t]));let s={id:G("pipe"),from:t,to:n,floor_id:o.id,points:i};this.changePool(e,l=>l.pipes=[...l.pipes??[],s]),this._pipeId=s.id}addPoolPort(e){let t=this.poolArea;if(!t||!this.isAdmin)return;let n=t.pool?.ports??[],i=t.points.length,o=u=>{let p=t.points[u%i],f=t.points[(u+1)%i];return[(p[0]+f[0])/2,(p[1]+f[1])/2]},[r,s]=Xe(t.points),l=this._doc.floors.flatMap(u=>u.furniture).find(u=>u.type==="pool_filter"||u.type==="pool_pump"),d=n.filter(u=>u.kind==="inlet").length,c=e==="skimmer"?Ni(t.points,o(0)):e==="inlet"?Ni(t.points,o(Math.floor(i/2)+d*Math.max(1,Math.floor(i/8)))):e==="drain"?[r,s]:l?[l.x+.8,l.z]:[r,s+3],h={id:G("port"),kind:e,x:M(c[0]),z:M(c[1])};this.changePool(t.id,u=>u.ports=[...n,h])}addPoolDevice(e){let t=this.poolArea;this.addEnergyDevice(e),t&&this.selectItem("outdoor",t.id),this._tool="pool"}deletePoolDevice(e){this.change(t=>{for(let n of t.floors){n.furniture=n.furniture.filter(i=>i.id!==e);for(let i of n.outdoor)i.pool?.pipes&&(i.pool.pipes=i.pool.pipes.filter(o=>o.from!==`dev:${e}`&&o.to!==`dev:${e}`))}})}deletePoolPort(e,t){this.changePool(e,n=>{n.ports=(n.ports??[]).filter(i=>i.id!==t),n.pipes=(n.pipes??[]).filter(i=>i.from!==`port:${t}`&&i.to!==`port:${t}`)})}togglePoolValve(e){let t=this._doc.floors.flatMap(n=>n.furniture).find(n=>n.id===e);!t||t.type!=="pool_valve"||!this.isAdmin||this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===e);i&&(i.valve_open=i.valve_open===!1?null:!1)})}setPoolDevice(e,t){this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===e);i&&Object.assign(i,t)})}portText(e){let{kind:t,port:n}=ee(e),i={in:"A",out1:"B",out2:"C"};return t==="joint"&&n&&i[n]?`${this.t("card_port")} ${i[n]}`:n?this.t(`port_${n}`):""}openCard(e,t){this._card={pool:e,part:t},this._cardJoin=null}partPorts(e,t){let{kind:n,id:i}=ee(t);if(n==="joint"){let o=e.pool?.joints?.find(r=>r.id===i);return o?pn(o.kind).map(r=>`${t}:${r}`):[]}if(n==="dev"){let o=this._doc.floors.flatMap(s=>s.furniture).find(s=>s.id===i),r=o?Je(o.type):[];return r.length?r.map(s=>`${t}:${s}`):[t]}return[t]}partStatus(e,t){let n=e.pool?.pipes??[],i=this.partPorts(e,t);return[i.filter(o=>n.some(r=>r.from===o||r.to===o)).length,i.length]}cardConnect(e,t,n,i){let o=this._doc.floors.find(h=>h.outdoor.some(u=>u.id===e.id));if(!o||!n)return;let r=re(this._doc,o,e),s=e.pool?.ports??[],l=h=>{let{kind:u,id:p,port:f}=ee(h);return u==="port"?Nn(s.find(m=>m.id===p)?.kind??"inlet"):u==="dev"?Bn(f):null},d=this.jointEnd(e,n,void 0,[t]),c=Ci({from:t,vias:i,to:[d],floorId:o.id},r,e.pool?.joints??[],l,h=>G(h));this.changePool(e.id,h=>{h.joints=[...h.joints??[],...c.joints],h.pipes=[...h.pipes??[],...c.pipes]}),this._cardJoin=null}cardDisconnect(e,t){this.changePool(e.id,n=>n.pipes=(n.pipes??[]).filter(i=>!t.pipes.includes(i.id)))}cardReroute(e,t){let n=e.pool?.pipes??[],i=n.find(f=>f.id===t.pipes[0]);if(!i||!t.other)return;let o=i.from===t.start,r=[...t.holes.map(f=>({kind:"hole",joint:f.joint,dir:f.dir})),...t.fittings.map(f=>({kind:f}))],s=this._doc.floors.find(f=>f.outdoor.some(m=>m.id===e.id));if(!s)return;let l={...e,pool:{...e.pool,pipes:n.filter(f=>!t.pipes.includes(f.id))}},d=re(this._doc,s,l),c=o?t.start:t.other,h=o?t.other:t.start,u=o?r:[...t.holes].reverse().map(f=>({kind:"hole",joint:f.joint,dir:f.dir==="in"?"out":"in"})).concat(t.fittings.map(f=>({kind:f}))),p=Ci({from:c,vias:u,to:[h],floorId:s.id},d,e.pool?.joints??[],()=>null,f=>G(f));this.changePool(e.id,f=>{f.pipes=[...(f.pipes??[]).filter(m=>!t.pipes.includes(m.id)),...p.pipes]})}renderPartCard(){let e=this._card,t=e?this._doc.floors.flatMap(z=>z.outdoor).find(z=>z.id===e.pool):void 0;if(!e||!t)return y;let n=this.isAdmin,{kind:i,id:o}=ee(e.part),r=i==="joint"?t.pool?.joints?.find(z=>z.id===o):void 0,s=i==="dev"?this._doc.floors.flatMap(z=>z.furniture).find(z=>z.id===o):void 0,l=i==="port"?t.pool?.ports?.find(z=>z.id===o):void 0;if(!r&&!s&&!l)return y;let d=t.pool?.pipes??[],c=t.pool?.joints??[],h=this.partPorts(t,e.part),u=this.poolEnds(t).filter(z=>pe(z.node)!==e.part&&!z.used),p=c.filter(z=>z.kind==="wall"||z.kind==="floor"),f=z=>this.poolNodeLabel(t,z),m=z=>ee(z).port?this.portText(z):this.t("card_port"),_=z=>z.kind==="hole"?this.t(z.dir==="in"?"conn_hole_in":"conn_hole_out",{name:this.jointLabel(t,z.joint)}):this.t(z.kind==="valve"?"wall_run_valve":"wall_run_sight"),g=()=>{this._card=null,this._cardJoin=null},v=()=>r?[r.x,r.z]:s?[s.x,s.z]:l?[l.x,l.z]:null,w=h.map(z=>{let S=qa(d,c,z),A=this._cardJoin?.port===z?this._cardJoin:null;return b`<div class="fp3d-pc-row ${S.length?"fp3d-on":""}">
        <b>${m(z)}</b>
        <div class="fp3d-pc-conns">
          ${S.map(P=>b`<div class="fp3d-pc-conn">
              <div class="fp3d-pc-chain">
                ${[...P.holes.map(F=>_({kind:"hole",joint:F.joint,dir:F.dir})),...P.fittings.map(F=>_({kind:F}))].map(F=>b`<span class="fp3d-pc-arrow">→</span><span class="fp3d-pc-tile">${F}</span>`)}
                <span class="fp3d-pc-arrow">→</span>
                ${P.other?b`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("card_open_other")} @click=${()=>this.openCard(t.id,pe(P.other))}>${f(P.other)}</button>`:b`<span class="fp3d-pc-tile fp3d-muted">${this.t("pool_loose_end")}</span>`}
              </div>
              ${n?b`<span class="fp3d-pc-tools">
                    ${P.other?b`<button class="fp3d-btn" @click=${()=>this.cardReroute(t,P)}>${this.t("card_reroute")}</button>`:y}
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.cardDisconnect(t,P)}>${this.t("card_disconnect")}</button>
                  </span>`:y}
            </div>`)}
          ${n&&(!S.length||h.length===1)?A?this.renderJoinPicker(t,z,A,u,p,_):b`<button class="fp3d-btn ${S.length?"":"fp3d-pc-open"}" @click=${()=>this._cardJoin={port:z,to:"",vias:[]}}>+ ${this.t("card_connect_with")}</button>`:y}
        </div>
      </div>`}),[$,k]=this.partStatus(t,e.part),x=v();return b`<div class="fp3d-wv-veil fp3d-pc-veil" @click=${z=>z.target===z.currentTarget&&g()}>
      <div class="fp3d-pc" role="dialog" tabindex="0" @keydown=${z=>z.key==="Escape"&&g()}>
        <div class="fp3d-wv-head">
          ${r&&n?b`<input
                class="fp3d-pc-name"
                .value=${r.name??""}
                placeholder=${this.jointLabel(t,r.id)}
                title=${this.t("joint_name")}
                @change=${z=>{let S=z.target.value.trim().slice(0,60);this.changePool(t.id,A=>{let P=A.joints?.find(F=>F.id===r.id);P&&(P.name=S||null)})}}
              />`:b`<b class="fp3d-pc-title">${f(e.part)}</b>`}
          <span class="fp3d-muted">${this.t("card_status",{a:$,b:k})}</span>
          <span class="fp3d-wv-grow"></span>
          <button class="fp3d-btn" title=${this.t("close")} @click=${g}>✕</button>
        </div>
        <div class="fp3d-pc-body">
          ${this.renderPartDrawing(t,e.part,h)}
          <div class="fp3d-pc-rows">${w}</div>
        </div>
        <div class="fp3d-wv-foot">
          ${x?b`<button class="fp3d-btn" @click=${()=>{g(),this._wallView=null,this._tool="pool",this.showPoint(x[0],x[1])}}>${this.t("card_show_plan")}</button>`:y}
          ${x&&!l?b`<button class="fp3d-btn" @click=${()=>{g(),this.pickWall(x)}}>▦ ${this.t("card_show_wall")}</button>`:y}
          <span class="fp3d-wv-grow"></span>
          ${n?b`<button class="fp3d-btn fp3d-danger" @click=${()=>{g(),s?this.deletePoolDevice(s.id):l?this.deletePoolPort(t.id,l.id):r&&this.changePool(t.id,z=>{z.joints=(z.joints??[]).filter(S=>S.id!==r.id),z.pipes=(z.pipes??[]).filter(S=>pe(S.from)!==e.part&&pe(S.to)!==e.part)})}}>${this.t("delete")}</button>`:y}
        </div>
      </div>
    </div>`}renderJoinPicker(e,t,n,i,o,r){let s=u=>{let{kind:p,id:f}=ee(u);if(p==="port")return"pool";if(p==="dev")return"tech";let m=e.pool?.joints?.find(_=>_.id===f);return m?.kind==="wall"||m?.kind==="floor"?"holes":"joints"},l=["pool","tech","joints"].map(u=>({g:u,items:i.filter(p=>s(p.node)===u)})).filter(u=>u.items.length),d=u=>this._cardJoin={...n,...u},c=u=>d({vias:[...n.vias,u]}),h=new Set(n.vias.flatMap(u=>u.kind==="hole"?[u.joint]:[]));return b`<div class="fp3d-pc-join">
      <div class="fp3d-pc-chain">
        <span class="fp3d-pc-tile fp3d-pc-start">${this.poolNodeLabel(e,t)}</span>
        ${n.vias.map((u,p)=>b`<span class="fp3d-pc-arrow">→</span
            ><button class="fp3d-pc-tile fp3d-pc-stop" title=${this.t("delete")} @click=${()=>d({vias:n.vias.filter((f,m)=>m!==p)})}>${r(u)} <i>✕</i></button>`)}
        <span class="fp3d-pc-arrow">→</span>
        ${n.to?b`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("delete")} @click=${()=>d({to:""})}>${this.poolNodeLabel(e,n.to)} <i>✕</i></button>`:b`<span class="fp3d-pc-tile fp3d-pc-next">${this.t("card_next")}</span>`}
      </div>
      ${n.to?y:b`<div class="fp3d-pc-steps">
            ${o.some(u=>!h.has(u.id))?b`<div class="fp3d-pc-step">${this.t("card_step_hole")}</div>
                  ${o.filter(u=>!h.has(u.id)).map(u=>b`<div class="fp3d-pc-hole">
                        <span>${this.jointLabel(e,u.id)}</span>
                        <button class="fp3d-pc-pick" @click=${()=>c({kind:"hole",joint:u.id,dir:"in"})}>${this.t("card_hole_in")}</button>
                        <button class="fp3d-pc-pick" @click=${()=>c({kind:"hole",joint:u.id,dir:"out"})}>${this.t("card_hole_out")}</button>
                      </div>`)}`:y}
            <div class="fp3d-pc-step">${this.t("card_step_fit")}</div>
            <div class="fp3d-pc-picks">
              <button class="fp3d-pc-pick" @click=${()=>c({kind:"valve"})}>${this.t("wall_run_valve")}</button>
              <button class="fp3d-pc-pick" @click=${()=>c({kind:"sight"})}>${this.t("wall_run_sight")}</button>
            </div>
            <div class="fp3d-pc-step">${this.t("card_step_end")}</div>
            ${l.map(({g:u,items:p})=>b`<div class="fp3d-pc-group">
                <span class="fp3d-pc-glabel">${this.t(`card_group_${u}`)}</span>
                <div class="fp3d-pc-picks">${p.map(f=>b`<button class="fp3d-pc-pick fp3d-pc-target" @click=${()=>d({to:f.node})}>${f.label}</button>`)}</div>
              </div>`)}
          </div>`}
      <span class="fp3d-pc-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n.to} @click=${()=>this.cardConnect(e,t,n.to,n.vias)}>✓ ${this.t("card_lay")}</button>
        <button class="fp3d-btn" @click=${()=>this._cardJoin=null}>${this.t("cancel")}</button>
      </span>
    </div>`}renderPartDrawing(e,t,n){let i=e.pool?.pipes??[],o=f=>i.some(m=>m.from===f||m.to===f),{kind:r,id:s}=ee(t),l=r==="joint"?e.pool?.joints?.find(f=>f.id===s):void 0,d=r==="dev"?this._doc.floors.flatMap(f=>f.furniture).find(f=>f.id===s):void 0,c={},h=y,u=l?.kind??(d?d.type:"port");u==="tee"?(Object.assign(c,{in:[20,60],out1:[180,60],out2:[100,130]}),h=I`<path class="fp3d-pc-body-shape" d="M 55 48 H 145 V 72 H 112 V 100 H 88 V 72 H 55 Z" />`):u==="y"?(Object.assign(c,{in:[20,70],out1:[180,25],out2:[180,115]}),h=I`<path class="fp3d-pc-body-shape" d="M 55 58 H 95 L 140 30 L 152 50 L 112 70 L 152 90 L 140 110 L 95 82 H 55 Z" />`):u==="wall"||u==="floor"?(Object.assign(c,{outside:[20,70],inside:[180,70]}),h=I`<rect class="fp3d-pc-wall" x="85" y="10" width="30" height="120" /><rect class="fp3d-pc-body-shape" x="70" y="58" width="60" height="24" rx="4" />
        <text class="fp3d-pc-side" x="40" y="22">${this.t("port_outside")}</text><text class="fp3d-pc-side" x="160" y="22">${this.t("port_inside")}</text>`):u==="pool_pump"?(Object.assign(c,{suction:[20,95],pressure:[110,10]}),h=I`<rect class="fp3d-pc-body-shape" x="50" y="70" width="70" height="50" rx="8" /><circle class="fp3d-pc-body-shape" cx="140" cy="85" r="30" /><rect class="fp3d-pc-body-shape" x="98" y="40" width="24" height="32" />`):u==="pool_filter"?(Object.assign(c,{pump:[20,40],return:[180,40],waste:[100,4]}),h=I`<ellipse class="fp3d-pc-body-shape" cx="100" cy="95" rx="45" ry="40" /><rect class="fp3d-pc-body-shape" x="70" y="28" width="60" height="26" rx="10" />`):u==="pool_heat_pump"?(Object.assign(c,{in:[180,95],out:[180,45]}),h=I`<rect class="fp3d-pc-body-shape" x="30" y="20" width="120" height="100" rx="8" /><circle class="fp3d-pc-fan" cx="80" cy="70" r="32" />`):(c[""]=[180,70],h=I`<circle class="fp3d-pc-body-shape" cx="80" cy="70" r="40" />`);let p=u==="pool_filter"?[100,41]:u==="pool_pump"?[100,85]:[100,70];return b`<svg class="fp3d-pc-draw" viewBox="0 0 200 140">
      ${n.map(f=>{let m=ee(f).port??"",_=c[m]??c[""]??[180,70],g=o(f);return I`<g class="fp3d-pc-stub ${g?"fp3d-on":""}" @click=${()=>this.isAdmin&&!g&&(this._cardJoin={port:f,to:"",vias:[]})}>
          <line x1=${p[0]} y1=${p[1]} x2=${_[0]} y2=${_[1]} />
          <circle cx=${_[0]} cy=${_[1]} r="7" />
          <title>${m?this.portText(f):""}</title>
        </g>`})}
      ${h}
      ${n.map(f=>{let m=ee(f).port,_=c[m??""]??[180,70];return m?I`<text class="fp3d-pc-label" x=${Math.min(162,Math.max(38,_[0]))} y=${_[1]<70?_[1]+20:_[1]-12}>${this.portText(f)}</text>`:y})}
    </svg>`}jointLabel(e,t){let n=e.pool?.joints??[],i=n.find(s=>s.id===t);if(!i)return this.t("pool_loose_end");let o=s=>s==="wall"||s==="floor"?"hole":s??"tee";if(i.name?.trim())return i.name.trim();let r=n.filter(s=>o(s.kind)===o(i.kind));return`${this.t(`joint_${i.kind??"tee"}`,{n:r.indexOf(i)+1})}`}poolEnds(e){let t=e.pool?.pipes??[],n=o=>t.some(r=>r.from===o||r.to===o),i=[];for(let o of e.pool?.ports??[])i.push({node:`port:${o.id}`,label:this.poolNodeLabel(e,`port:${o.id}`),used:!1});for(let o of this._doc.floors.flatMap(r=>r.furniture).filter(r=>ke.includes(r.type)&&r.type!=="pool_valve")){let r=Je(o.type);for(let s of r.length?r.map(l=>`dev:${o.id}:${l}`):[`dev:${o.id}`])i.push({node:s,label:this.poolNodeLabel(e,s),used:r.length>0&&n(s)})}for(let o of e.pool?.joints??[])for(let r of pn(o.kind)){let s=`joint:${o.id}:${r}`;i.push({node:s,label:this.poolNodeLabel(e,s),used:n(s)})}return i}placeJointPlan(e,t,n,i){let o=this.floor;if(!o)return;let r=re(this._doc,o,e),s=i?e.pool?.pipes?.find(c=>c.id===i):void 0;if(s){let c=Oe(s,r),h=null;for(let p=1;p<c.length;p++){let[f,m]=[c[p-1],c[p]],[_,g]=[m[0]-f[0],m[2]-f[2]],v=_*_+g*g,w=v>0?Math.max(0,Math.min(1,((n[0]-f[0])*_+(n[1]-f[2])*g)/v)):0,$=[f[0]+_*w,f[1]+(m[1]-f[1])*w,f[2]+g*w],k=Math.hypot($[0]-n[0],$[2]-n[1]);(!h||k<h.d)&&(h={p:$,d:k})}let u=h&&Qo(s,r,h.p,G("joint"),G("pipe"));if(u){this.changePool(e.id,p=>{p.joints=[...p.joints??[],{...u.joint,kind:t}],p.pipes=(p.pipes??[]).flatMap(f=>f.id===s.id?[{...u.first,to:`joint:${u.joint.id}:in`},{...u.second,from:`joint:${u.joint.id}:out1`}]:[f])});return}}let l=o.rooms.some(c=>c.points.length>=3&&K(n,c.points)),d=this.snap(n);this.changePool(e.id,c=>c.joints=[...c.joints??[],{id:G("joint"),kind:t,x:M(d[0]),z:M(d[1]),y:l?.5:-.3}])}poolNodePos(e,t){if(!t)return null;let n=this._doc.floors.find(o=>o.outdoor.some(r=>r.id===e.id));if(t.startsWith("joint:")||t.split(":").length>2){let o=n&&re(this._doc,n,e)(t);return o?[o.x,o.z]:null}if(t.startsWith("port:")){let o=e.pool?.ports?.find(r=>r.id===t.slice(5));return o?[o.x,o.z]:null}let i=this._doc.floors.flatMap(o=>o.furniture).find(o=>o.id===t.slice(4));return i?[i.x,i.z]:null}poolNodeLabel(e,t){let{kind:n,id:i,port:o}=ee(t);if(!t)return this.t("pool_loose_end");if(o||n==="joint"){let d=n==="joint"?this.jointLabel(e,i):this.poolNodeLabel(e,`${n}:${i}`);return o?`${d} \xB7 ${this.portText(t)}`:d}if(t.startsWith("port:")){let d=e.pool?.ports??[],c=d.find(u=>u.id===t.slice(5));if(!c)return"?";let h=d.filter(u=>u.kind===c.kind);return`${this.t(`pool_port_${c.kind}`)}${h.length>1?` ${h.indexOf(c)+1}`:""}`}let r=this._doc.floors.flatMap(d=>d.furniture).filter(d=>ke.includes(d.type)),s=r.find(d=>d.id===t.slice(4));if(!s)return"?";let l=r.filter(d=>d.type===s.type);return`${s.name||this.t(`furn_${s.type}`)}${l.length>1&&!s.name?` ${l.indexOf(s)+1}`:""}`}renderPoolPlan(e){let t=this.poolArea,n=e.furniture.filter(p=>ke.includes(p.type)),i={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:""},o=t?(t.pool?.pipes??[]).filter(p=>p.floor_id===e.id):[],r=o.map(p=>{let f=this.poolNodePos(t,p.from),m=this.poolNodePos(t,p.to);if((!f||!m)&&!p.heights)return y;let _=f?1:0,g=[...f?[f]:[],...p.points,...m?[m]:[]].map(P=>this.toScreen(P));if(g.length<2)return y;let v=p.id===this._pipeId,w=0;for(let P=1;P<g.length-1;P++)Math.hypot(g[P+1][0]-g[P][0],g[P+1][1]-g[P][1])>Math.hypot(g[w+1][0]-g[w][0],g[w+1][1]-g[w][1])&&(w=P);let[$,k]=g[w],[x,z]=g[w+1],S=Math.atan2(z-k,x-$)*180/Math.PI,A=g.map(P=>P.join(",")).join(" ");return I`<g data-pipe=${p.id}>
        <polyline class="fp3d-pipe-hit" points=${A} />
        <polyline class="fp3d-pipe ${v?"fp3d-pipe-sel":""}" points=${A} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${($+x)/2} ${(k+z)/2}) rotate(${S})`} />
        ${v&&this.isAdmin?I`${g.slice(0,-1).map((P,F)=>I`<line class="fp3d-pipe-seg" data-pipe-seg=${`${p.id}:${F+1-_}`} x1=${P[0]} y1=${P[1]} x2=${g[F+1][0]} y2=${g[F+1][1]} />`)}
              ${p.points.map((P,F)=>{let[T,O]=this.toScreen(P);return I`<g class="fp3d-vertex" data-pipe-pt=${`${p.id}:${F}`}><circle cx=${T} cy=${O} r="14" class="fp3d-hit" /><circle cx=${T} cy=${O} r="5" /></g>`})}`:y}
      </g>`}),s=(p,f,m,_,g)=>{let[v,w]=this.toScreen(f);return I`<g class="fp3d-pool-node ${_}" data-pool-node=${p}><title>${g}</title><circle cx=${v} cy=${w} r="16" class="fp3d-hit" /><circle cx=${v} cy=${w} r="10" /><text x=${v} y=${w}>${m}</text></g>`},l=t?(t.pool?.ports??[]).map(p=>s(`port:${p.id}`,[p.x,p.z],{skimmer:"S",drain:"B",inlet:"E",waste:"A"}[p.kind],`fp3d-pool-port-${p.kind}`,this.poolNodeLabel(t,`port:${p.id}`))):[],d=n.map(p=>s(`dev:${p.id}`,[p.x,p.z],p.type==="pool_valve"?p.valve_open===!1?"\u2715":"":i[p.type],`fp3d-pool-dev ${p.type==="pool_valve"&&p.valve_open===!1?"fp3d-pool-closed":""}`,t?this.poolNodeLabel(t,`dev:${p.id}`):p.type)),c=y;if(t&&this._pipeDraft){let p=this._pipeDraft.extend?.at??this.poolNodePos(t,this._pipeDraft.from);if(p){let f=[p,...this._pipeDraft.points,...this._cursor?[this._cursor]:[]].map(m=>this.toScreen(m).join(",")).join(" ");c=I`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${f} />`}}let h=t?(t.pool?.joints??[]).map(p=>s(`joint:${p.id}`,[p.x,p.z],p.kind==="wall"||p.kind==="floor"?"\u25CE":p.kind==="y"?"Y":"T","fp3d-pool-jointnode",this.jointLabel(t,p.id))):[],u=o.flatMap(p=>p.heights&&p.points.length?["from","to"].filter(f=>!p[f]).map(f=>{let[m,_]=this.toScreen(f==="to"?p.points[p.points.length-1]:p.points[0]);return I`<g class="fp3d-pipe-end" data-pipe-end=${`${p.id}|${f}`}><circle cx=${m} cy=${_} r="14" class="fp3d-hit" /><circle cx=${m} cy=${_} r="6" /></g>`}):[]);return I`<g class="fp3d-pool-plan">${r}${c}${h}${u}${l}${d}</g>`}renderPoolPanel(e){let t=e?.outdoor.filter(i=>i.type==="pool")??[],n=this.poolArea;return n?b`${t.length>1?b`<section>
            <div class="fp3d-seg">${t.map((i,o)=>b`<button aria-pressed=${i.id===n.id} @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${o+1}</button>`)}</div>
          </section>`:y}
      ${this.renderPoolTech(n)} ${this.renderOutdoorForm(n)}`:b`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(t.length?"pool_choose":"pool_tool_empty")}</p>
        ${t.length?b`<div class="fp3d-actions">${t.map((i,o)=>b`<button class="fp3d-btn" @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${this.t("out_pool")} ${t.length>1?o+1:""}</button>`)}</div>`:y}
      </section>`}renderPoolTech(e){if(!Ke("pool"))return y;let t=this.isAdmin,n=e.pool?.ports??[],i=e.pool?.pipes??[],o=this._doc.floors.flatMap(s=>s.furniture).filter(s=>ke.includes(s.type)),r=i.find(s=>s.id===this._pipeId);return b`<section>
        <button class="fp3d-btn fp3d-primary fp3d-wide" ?disabled=${!t} title=${this.t("tech_open_hint")} @click=${()=>{this.techPick=!0,this._wallPick=!0}}>🛠 ${this.t("tech_open")}</button>
        <p class="fp3d-sub">${this.t("tech_open_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_ports")}</h3>
        <div class="fp3d-actions">
          ${["skimmer","drain","inlet","waste"].map(s=>b`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.addPoolPort(s)}>+ ${this.t(`pool_port_${s}`)}</button>`)}
        </div>
        ${n.map(s=>b`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(e.id,`port:${s.id}`)}>${this.poolNodeLabel(e,`port:${s.id}`)}</button>
            <span class="fp3d-muted">${this.partStatus(e,`port:${s.id}`)[0]?"\u2713":"\u25CB"}</span>
            ${s.kind==="inlet"||s.kind==="skimmer"?b`<label class="fp3d-pool-depth" title=${this.t("pool_port_depth_hint")}
                  >${this.t("pool_port_depth")}
                  <input type="number" step="0.05" min="0" max="3" .value=${String(s.depth??(s.kind==="inlet"?.3:0))} ?disabled=${!t} @change=${l=>{let d=Number(l.target.value.replace(",","."));Number.isFinite(d)&&this.change((c,h)=>{let u=h.outdoor.find(p=>p.id===e.id)?.pool?.ports?.find(p=>p.id===s.id);u&&(u.depth=Math.min(3,Math.max(0,M(d))))})}} />m</label
                >`:y}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.deletePoolPort(e.id,s.id)}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_ports_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_devices")}</h3>
        <div class="fp3d-actions">
          ${ke.filter(s=>s!=="pool_valve").map(s=>b`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.addPoolDevice(s)}>+ ${this.t(`furn_${s}`)}</button>`)}
          <button class="fp3d-btn ${this._jointPlace==="tee"?"fp3d-primary":""}" ?disabled=${!t} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="tee"?null:"tee"}>+ ${this.t("joint_add_tee")}</button>
          <button class="fp3d-btn ${this._jointPlace==="y"?"fp3d-primary":""}" ?disabled=${!t} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="y"?null:"y"}>+ ${this.t("joint_add_y")}</button>
        </div>
        ${o.map(s=>b`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(e.id,`dev:${s.id}`)}>${this.poolNodeLabel(e,`dev:${s.id}`)}</button>
            <span class="fp3d-ports">${Je(s.type).map(l=>b`<i class=${i.some(d=>d.from===`dev:${s.id}:${l}`||d.to===`dev:${s.id}:${l}`)?"fp3d-on":""}>${this.t(`port_${l}`)}</i>`)}</span>
            ${s.type==="pool_filter"?b`<select ?disabled=${!t} title=${this.t("pool_valve_type")} @change=${l=>this.setPoolDevice(s.id,{variant:l.target.value==="top6"?null:l.target.value})}>
                    ${Ka.map(l=>b`<option value=${l} ?selected=${(s.variant??"top6")===l}>${this.t(`valve_${l}`)}</option>`)}
                  </select>
                  <select ?disabled=${!t} title=${this.t("pool_valve_position")} @change=${l=>this.setPoolDevice(s.id,{valve_position:l.target.value})}>
                  ${Zr.map(l=>b`<option value=${l} ?selected=${(s.valve_position??"filter")===l}>${this.t(`valve_${l}`)}</option>`)}
                </select>`:s.type==="pool_heat_pump"?b`<select ?disabled=${!t} title=${this.t("hp_ports")} @change=${l=>this.setPoolDevice(s.id,{variant:l.target.value==="right"?null:l.target.value})}>
                    ${["right","left","back"].map(l=>b`<option value=${l} ?selected=${(s.variant??"right")===l}>${this.t("hp_ports")}: ${this.t(`hp_side_${l}`)}</option>`)}
                  </select>`:s.type==="pool_valve"?b`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${s.valve_open!==!1} ?disabled=${!t} @change=${l=>this.setPoolDevice(s.id,{valve_open:l.target.checked?null:!1})} />
                    ${this.t("pool_valve_open")}</label
                  >`:y}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.deletePoolDevice(s.id)}>✕</button>
          </div>`)}
        ${(e.pool?.joints??[]).map(s=>b`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(e.id,`joint:${s.id}`)}>${this.jointLabel(e,s.id)}</button>
            <span class="fp3d-ports">${pn(s.kind).map(l=>{let d=`joint:${s.id}:${l}`,c=i.some(h=>h.from===d||h.to===d||(s.kind??"tee")!=="wall"&&(s.kind??"tee")!=="floor"&&pe(h.from)===`joint:${s.id}`&&!ee(h.from).port&&l==="in");return b`<i class=${c?"fp3d-on":""} title=${this.portText(d)}>${this.portText(d)}</i>`})}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.changePool(e.id,l=>{l.joints=(l.joints??[]).filter(d=>d.id!==s.id),l.pipes=(l.pipes??[]).filter(d=>pe(d.from)!==`joint:${s.id}`&&pe(d.to)!==`joint:${s.id}`)})}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_holes_hint")}</p>
      </section>

      <section>
        <h3>${this.t("pool_pipes")}</h3>
        <div class="fp3d-actions">
          <button class="fp3d-btn ${this._pipeMode?"fp3d-primary":""}" ?disabled=${!t} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null)}>〰 ${this.t("pool_pipe_draw")}</button>
        </div>
        <p class="fp3d-sub">${this.t("pool_pipe_draw_hint")}</p>
        ${i.map(s=>b`<div class="fp3d-pool-row ${s.id===this._pipeId?"fp3d-pool-row-sel":""}">
            <button class="fp3d-link" @click=${()=>this._pipeId=s.id}>${this.poolNodeLabel(e,s.from)} → ${this.poolNodeLabel(e,s.to)}</button>
            <button class="fp3d-btn" ?disabled=${!t} title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(e.id,l=>{let d=l.pipes?.find(c=>c.id===s.id);d&&([d.from,d.to,d.points]=[d.to,d.from,[...d.points].reverse()])})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.changePool(e.id,l=>l.pipes=(l.pipes??[]).filter(d=>d.id!==s.id))}>✕</button>
          </div>`)}
        ${r?b`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"),r.height??.3,s=>this.changePool(e.id,l=>{let d=l.pipes?.find(c=>c.id===r.id);d&&(d.height=Math.min(10,Math.max(-5,M(s))))}),.05)}
            </div>`:y}
        ${fe("pool")||!Ke("pool")?y:b`<p class="fp3d-sub">${this.t("pool_pipes_pro")}</p>`}
      </section>`}renderPoolShape(e){let t=this.isAdmin,n=xe(e.points),i=e.pool_shape,o=(l,d,c,h)=>i&&this.updateOutdoor({points:$i(i,l,d,c,h)}),r=(n.x0+n.x1)/2,s=(n.z0+n.z1)/2;return b`${i==="round"?b`${this.len(this.t("pool_diameter"),n.x1-n.x0,l=>{let d=Math.max(.5,l)/2;o(r-d,s-d,r+d,s+d)},.01,1)}`:i==="oval"?b`${this.len(this.t("width"),n.x1-n.x0,l=>o(r-Math.max(1,l)/2,n.z0,r+Math.max(1,l)/2,n.z1),.01,1)}
            ${this.len(this.t("depth"),n.z1-n.z0,l=>o(n.x0,s-Math.max(1,l)/2,n.x1,s+Math.max(1,l)/2),.01,1)}`:y}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!e.above} ?disabled=${!t} @change=${l=>this.updateOutdoor({above:l.target.checked||void 0})} />
        ${this.t("pool_above")}</label
      >
      ${e.above?this.len(this.t("pool_height"),ki(e),l=>this.updateOutdoor({height:Math.min(2.5,Math.max(.4,M(l)))}),.05,.4):y}
      ${this.len(this.t("pool_depth"),Mo(e),l=>this.updateOutdoor({depth:Math.min(5,Math.max(.3,M(l)))}),.05,.3)}
      ${e.above?y:this.len(this.t("pool_rim"),e.rim??.06,l=>this.updateOutdoor({rim:Math.min(2,Math.max(-.3,M(l)))}),.01,-.3)}
      <p class="fp3d-sub fp3d-wide">${this.t("pool_depth_hint")}</p>
      ${!e.above&&this.floor&&!Po(this.floor,e)?b`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("pool_depth_ground")}</p>`:y}`}renderPoolPro(e){let t=this.hass?.language;if(!Ke("pool"))return y;if(!fe("pool")){let l=Mt("pool");return b`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head">
          <b>🏊 ${this.t("pro_name_pool")}</b>
          <a class="fp3d-btn fp3d-primary" href=${l?Bi(t):Ye(t)} target="_blank" rel="noopener">${this.t(l?"beta_become":"pro_unlock")}</a>
        </div>
        <p class="fp3d-sub">${this.t("pool_teaser")}</p>
      </section>`}if(!this.hass)return y;let n=e.pool??{},i=nl(this.hass,{}),o=l=>this.updateOutdoor({pool:{...n,...l}}),r=(l,d,c)=>this.entitySelect(this.t(d),n[l]??null,i[l]??void 0,this.entityOptions(c),h=>o({[l]:h==="none"?"none":h})),s=l=>l.startsWith("sensor.");return b`<section>
      <h3>🏊 ${this.t("pro_name_pool")}</h3>
      <p class="fp3d-sub">${this.t("pool_pro_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${r("temperature","pool_temperature",l=>/^(sensor|climate|water_heater)\./.test(l))}
        ${r("heater","pool_heater",l=>/^(climate|water_heater|switch|input_boolean)\./.test(l))}
        ${r("pump","pool_pump",l=>/^(switch|fan|input_boolean|binary_sensor|sensor)\./.test(l))}
        ${r("light","pool_light",l=>/^(light|switch)\./.test(l))}
        ${r("ph","pool_ph",s)}
        ${r("chlorine","pool_chlorine_role",s)}
        ${r("cover","pool_cover",l=>l.startsWith("cover."))}
      </div>
      ${e.pool?y:b`<button class="fp3d-btn fp3d-primary" ?disabled=${!this.isAdmin} @click=${()=>this.updateOutdoor({pool:{}})}>${this.t("pool_activate")}</button>`}
    </section>`}renderRooms(e){return I`
      <g>${e.rooms.map(t=>{let n=t.points.map(i=>this.toScreen(i).join(",")).join(" ");return I`<polygon data-room=${t.id} class=${t.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${e.rooms.map(t=>{let[n,i]=this.toScreen(Xe(t.points));return I`<text class="fp3d-room-name" x=${n} y=${i-2}>${t.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.area(We(t.points))}</text>`})}</g>
    `}renderEdgeHighlight(){let e=this.room,t=this._edgeHi;if(!e||t===null||t>=e.points.length)return y;let[n,i]=this.toScreen(e.points[t]),[o,r]=this.toScreen(e.points[(t+1)%e.points.length]);return I`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${o} y2=${r} />`}renderMeter(e){let t=this._doc.energy?.meter;if(!t||t.floor_id!==e.id)return y;let[n,i]=this.toScreen([t.x,t.z]);return I`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(e){let t=this._view.scale,n=this._furnitureId?this.selection():[],i=n.length>1;return I`<g>${this.renderSelectionFrame(e,n)}${e.furniture.map(o=>{let r=n.includes(o.id),s=o.id===this._furnitureId&&!i,[l,d]=this.toScreen([o.x,o.z]),c=Math.min(o.w,o.d)*t>44,h=!!(o.rotation_x||o.rotation_z),u=h?Ee(o):[],p=u.map(k=>this.toScreen(k).join(",")).join(" "),f=o.rotation*Math.PI/180,m=o.d/2+Math.max(.3,26/t),[_,g]=this.toScreen([o.x-Math.sin(f)*m,o.z+Math.cos(f)*m]),[v,w]=this.toScreen([o.x-Math.sin(f)*(o.d/2),o.z+Math.cos(f)*(o.d/2)]),$=Le(o.type)&&!!o.entity&&o.entity!=="none"&&this.hass?.states[o.entity]?.state==="on";return I`<g data-furniture=${o.id} class=${`fp3d-furn${s||r?" fp3d-furn-sel":""}${$?" fp3d-furn-lit":""}${ut.includes(o.type)?" fp3d-energy-item":""}`}>
        ${h?I`<polygon class="fp3d-furn-body fp3d-furn-projected" points=${p} />`:I`<g transform="translate(${l} ${d}) rotate(${o.rotation}) scale(${o.mirror?-t:t} ${t})">
          <rect class="fp3d-furn-body" x=${-o.w/2} y=${-o.d/2} width=${o.w} height=${o.d} />
          <g class="fp3d-furn-sym">${Aa(o.type,o.w,o.d)}</g>
          <line class="fp3d-furn-front" x1=${-o.w/2} y1=${o.d/2} x2=${o.w/2} y2=${o.d/2} />
        </g>`}
        ${c?I`<text x=${l} y=${d+4}>${Et(this.hass,o.type)}</text>`:y}
      </g>
      ${s&&this.isAdmin&&!o.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([k,x])=>{let[z,S]=this.toScreen(h?[k<0?Math.min(...u.map(A=>A[0])):Math.max(...u.map(A=>A[0])),x<0?Math.min(...u.map(A=>A[1])):Math.max(...u.map(A=>A[1]))]:[o.x+k*o.w*Math.cos(f)/2-x*o.d*Math.sin(f)/2,o.z+k*o.w*Math.sin(f)/2+x*o.d*Math.cos(f)/2]);return I`<g class="fp3d-resize" data-resize=${`${o.id}:${k}:${x}`}>
              <circle cx=${z} cy=${S} r="14" class="fp3d-hit" />
              <rect x=${z-5} y=${S-5} width="10" height="10" rx="2" />
            </g>`}):y}
      ${s?(()=>{let[k,x]=this.toScreen([o.x+Math.sin(f)*(o.d/2+18/t),o.z-Math.cos(f)*(o.d/2+18/t)]);return I`<text class="fp3d-dim" x=${k} y=${x+4}>${this.m(o.w,2)} × ${this.m(o.d,2)}</text>`})():y}
      ${s&&o.locked?I`<text class="fp3d-lock" x=${_} y=${g+5}>🔒</text>`:y}
      ${s&&this.isAdmin&&!o.locked?I`<g class="fp3d-rotate" data-rotate=${o.id}>
            <line x1=${v} y1=${w} x2=${_} y2=${g} />
            <circle cx=${_} cy=${g} r="16" class="fp3d-hit" />
            <circle cx=${_} cy=${g} r="8" />
            <path d="M${_-4} ${g-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}`})}</g>`}renderSelectionFrame(e,t){let n=this.drag,i=n?.kind==="marquee"?I`<rect class="fp3d-marquee" x=${Math.min(...[n.start,n.end].map(h=>this.toScreen(h)[0]))} y=${Math.min(...[n.start,n.end].map(h=>this.toScreen(h)[1]))} width=${Math.abs(this.toScreen(n.end)[0]-this.toScreen(n.start)[0])} height=${Math.abs(this.toScreen(n.end)[1]-this.toScreen(n.start)[1])} />`:y;if(t.length<2)return i;let o=e.furniture.filter(h=>t.includes(h.id)).flatMap(h=>Ee(h));if(!o.length)return i;let[r,s]=this.toScreen([Math.min(...o.map(h=>h[0])),Math.min(...o.map(h=>h[1]))]),[l,d]=this.toScreen([Math.max(...o.map(h=>h[0])),Math.max(...o.map(h=>h[1]))]),c=!this._multi.length;return I`${i}<g class=${`fp3d-selframe${c?" fp3d-selframe-block":""}`}>
      <rect x=${r-6} y=${s-6} width=${l-r+12} height=${d-s+12} rx="6" />
      <text x=${r-4} y=${s-12}>${c?`\u25A3 ${this.t("block_title")} \xB7 ${t.length}`:this.t("multi_title",{n:t.length})}</text>
    </g>`}renderBlockForm(){let e=this.selection(),t=(this.floor?.furniture??[]).filter(r=>e.includes(r.id)),n=!this._multi.length&&!!t[0]?.group,i=t.every(r=>this.isFixedItem("furniture",r.id)),o=!i&&t.some(r=>this.isFixedItem("furniture",r.id));return b`<section>
      <div class="fp3d-h3row"><h3>${n?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:t.length})}</h3></div>
      <p class="fp3d-sub">${this.t(n?"block_hint":"multi_hint")}</p>
      ${o?b`<p class="fp3d-sub fp3d-wv-fixnote">${this.t("block_some_fixed")}</p>`:y}
      <div class="fp3d-block-parts">
        ${t.map(r=>b`<button class="fp3d-chip" title=${this.t("block_part_edit")} @click=${()=>{this.selectItem("furniture",r.id),this._single=!!r.group}}>${r.name||Et(this.hass,r.type)}</button>`)}
      </div>
      <div class="fp3d-actions">
        ${n?b`<button class="fp3d-btn" @click=${()=>this.ungroupSelection()}>${this.t("block_break")}</button>`:b`<button class="fp3d-btn fp3d-primary" @click=${()=>this.groupSelection()}>▣ ${this.t("block_make")}</button>`}
        <button class="fp3d-btn" @click=${()=>this.rotateSelection(-90)}>${this.t("rotate_left")}</button>
        <button class="fp3d-btn" @click=${()=>this.rotateSelection(90)}>${this.t("rotate_right")}</button>
        <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
        <button class="fp3d-btn ${o?"fp3d-primary":""}" @click=${()=>this.lockSelection(!i&&!o)}>${i?`\u{1F513} ${this.t("unfix")}`:o?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
        <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>
      ${this.renderMultiToggle()}
    </section>`}renderMultiToggle(){return b`<label class="fp3d-check fp3d-multi-toggle"><input type="checkbox" .checked=${this._multiMode} @change=${e=>this._multiMode=e.target.checked} /> ${this.t("multi_mode")}</label>`}renderOpenings(e,t){return I`<g>${e.openings.map(n=>{let i=xt(n,e.rooms,e.walls??[]);if(!i)return y;let{room:o,edge:r}=i,s=Hn(t,n,i),l=$t(o,r,n.offset-n.width/2),d=$t(o,r,n.offset+n.width/2),c=(d[0]-l[0])/(n.width||1),h=(d[1]-l[1])/(n.width||1),u=me(o.points)>=0?1:-1,p=[-h*u,c*u],f=[.06,.06];s&&(f=s.wall.free||s.wall.roomLeft===o.id?[s.wall.left,s.wall.right]:[s.wall.right,s.wall.left]);let m=(S,A)=>this.toScreen([S[0]+p[0]*A,S[1]+p[1]*A]),_=[m(l,f[0]+.01),m(d,f[0]+.01),m(d,-f[1]-.01),m(l,-f[1]-.01)],g=n.id===this._openingId,v=Mi(n,s?.wall.exterior??!1),w=n.type==="door"&&Io(v),$=`fp3d-open fp3d-open-${n.type}${w?" fp3d-open-front":""}${g?" fp3d-open-sel":""}`,k;if(n.type==="garage"){let S=m(l,f[0]-.04),A=m(d,f[0]-.04),P=m(l,f[0]+Math.min(2,n.height)),F=m(d,f[0]+Math.min(2,n.height));k=I`<line x1=${S[0]} y1=${S[1]} x2=${A[0]} y2=${A[1]} />
          <path class="fp3d-open-track" d="M${S[0]} ${S[1]}L${P[0]} ${P[1]}M${A[0]} ${A[1]}L${F[0]} ${F[1]}" />`}else if(n.type==="door"){let S=n.swing==="out",A=S?-f[1]:f[0],P=n.hinge==="left"==u>0,F=n.leaves===2,T=l,O=d,L=[],D=ra(n.width,v,P,n);if(D){let U=q=>q<=.02?l:q>=n.width-.02?d:$t(o,r,n.offset-n.width/2+q);T=U(D.x0),O=U(D.x1),L=D.panels.map(([q,ae])=>[U(q),U(ae)])}let W=[(T[0]+O[0])/2,(T[1]+O[1])/2],V=(F?.5:1)*Math.hypot(O[0]-T[0],O[1]-T[1]),B=(f[0]-f[1])/2,J=L.map(([U,q])=>{let ae=m(U,B+.035),j=m(q,B+.035),be=m(U,B-.035),Ze=m(q,B-.035);return I`<line class="fp3d-open-pane" x1=${ae[0]} y1=${ae[1]} x2=${j[0]} y2=${j[1]} /><line class="fp3d-open-pane" x1=${be[0]} y1=${be[1]} x2=${Ze[0]} y2=${Ze[1]} />`}),Z=(U,q)=>{let[ae,j]=m(U,A),[be,Ze]=m(q,A),Jt=m(U,A+(S?-V:V)),Pe=V*this._view.scale,Yt=(Jt[0]-ae)*(Ze-j)-(Jt[1]-j)*(be-ae);return I`<path d="M${ae} ${j}L${Jt[0]} ${Jt[1]}A${Pe} ${Pe} 0 0 ${Yt>0?1:0} ${be} ${Ze}" />`};k=I`${J}${v==="passage"?I`<line class="fp3d-open-passage" x1=${m(l,B)[0]} y1=${m(l,B)[1]} x2=${m(d,B)[0]} y2=${m(d,B)[1]} />`:v==="sliding"?I`<line x1=${m(T,A)[0]} y1=${m(T,A)[1]} x2=${m(O,A)[0]} y2=${m(O,A)[1]} />`:F?I`${Z(T,W)}${Z(O,W)}`:Z(P?T:O,P?O:T)}`}else{let S=(f[0]-f[1])/2,A=m(l,S+.035),P=m(d,S+.035),F=m(l,S-.035),T=m(d,S-.035),O=[(l[0]+d[0])/2,(l[1]+d[1])/2],L=m(O,f[0]),D=m(O,-f[1]);k=I`<line x1=${A[0]} y1=${A[1]} x2=${P[0]} y2=${P[1]} /><line x1=${F[0]} y1=${F[1]} x2=${T[0]} y2=${T[1]} />${n.leaves===2?I`<line x1=${L[0]} y1=${L[1]} x2=${D[0]} y2=${D[1]} />`:y}`}let x=m(l,(f[0]-f[1])/2),z=m(d,(f[0]-f[1])/2);return I`<g data-opening=${n.id} class=${$}>
        <line class="fp3d-open-hit" x1=${x[0]} y1=${x[1]} x2=${z[0]} y2=${z[1]} />
        <polygon class="fp3d-open-gap" points=${_.map(S=>S.join(",")).join(" ")} />
        ${k}
      </g>`})}</g>`}renderDevices(e){return I`<g>${e.placements.map(t=>{let n=te(t.entity_id);if(!n)return y;let[i,o]=this.toScreen([t.x,t.z]),r=this.hass?.states[t.entity_id]?.state==="on",s=t.entity_id===this._deviceId,l=`fp3d-device${r?" fp3d-device-on":""}${s?" fp3d-device-sel":""}`;return I`${n==="camera"?this.renderCameraWedge(t,s):y}<g data-device=${t.entity_id} class=${l} transform="translate(${i} ${o})">
        <title>${ge(this.hass,t.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${Un(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${s&&t.locked?I`<text class="fp3d-lock" x=${i+16} y=${o-12}>🔒</text>`:y}`})}</g>`}renderCameraWedge(e,t){let n=e.mount==="ceiling",i=e.fov??(n?360:90),o=e.reach??(n?3:4.5),r=(e.rotation??0)*Math.PI/180,s=(w,$)=>this.toScreen([e.x-Math.sin(r+w)*$,e.z+Math.cos(r+w)*$]),[l,d]=this.toScreen([e.x,e.z]),c=Math.min(i,359.9)*Math.PI/180/2,[h,u]=s(-c,o),[p,f]=s(c,o),m=o*this._view.scale,_=i>=360?"":`M${l} ${d}L${h} ${u}A${m} ${m} 0 ${c>Math.PI/2?1:0} 1 ${p} ${f}Z`,[g,v]=s(0,o);return I`<g class="fp3d-wedge ${t?"fp3d-wedge-sel":""}">
      ${i>=360?I`<circle cx=${l} cy=${d} r=${m} />`:I`<path d=${_} />`}
      ${t&&this.isAdmin&&!e.locked?I`<g class="fp3d-rotate" data-aim=${e.entity_id}>
            <line x1=${l} y1=${d} x2=${g} y2=${v} />
            <circle cx=${g} cy=${v} r="16" class="fp3d-hit" />
            <circle cx=${g} cy=${v} r="8" />
            <path d="M${g-4} ${v-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}
    </g>`}renderHandles(e){return this.renderPolygonHandles(e.points,"room",e.id,this._vertex)}renderPolygonHandles(e,t,n,i){let o=e.length,r=(d,c,h)=>{let u=d?"fp3d-mid":c===i?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex";if(t==="room")return d?I`<g data-mid=${c} class=${u}>${h}</g>`:I`<g data-vertex=${c} class=${u}>${h}</g>`;let p=`${t}:${n}:${c}`;return d?I`<g data-contour-mid=${p} class=${u}>${h}</g>`:I`<g data-contour-vertex=${p} class=${u}>${h}</g>`},s=e.map((d,c)=>{let h=e[(c+1)%o],[u,p]=this.toScreen(d),[f,m]=this.toScreen(h),_=Math.hypot(h[0]-d[0],h[1]-d[1]),g=(u+f)/2,v=(p+m)/2,[w,$]=this.toScreen(Xe(e)),k=-(m-p),x=f-u,z=Math.hypot(k,x)||1;k/=z,x/=z,k*(g-w)+x*(v-$)<0&&(k=-k,x=-x);let S=Math.hypot(f-u,m-p);return I`
        ${S>50?Math.abs(k)>Math.abs(x)?I`<text class="fp3d-dim" style="text-anchor:${k>0?"start":"end"}" x=${g+k*13} y=${v+x*13+4}>${this.m(_,2)}</text>`:I`<text class="fp3d-dim" x=${g+k*16} y=${v+x*16+4}>${this.m(_,2)}</text>`:y}
        ${S>36&&e.length<200?r(!0,c,I`<circle cx=${g} cy=${v} r="14" class="fp3d-hit" /><circle cx=${g} cy=${v} r="6" /><path d="M${g-3} ${v}h6M${g} ${v-3}v6" />`):y}
      `}),l=e.map((d,c)=>{let[h,u]=this.toScreen(d);return I`${r(!1,c,I`<circle cx=${h} cy=${u} r="16" class="fp3d-hit" /><circle cx=${h} cy=${u} r="6" />`)}
        <text class="fp3d-vertex-no" x=${h+9} y=${u-9}>${c+1}</text>`});return I`<g>${s}${l}</g>`}renderDraft(){let e=this.drag;if(e?.kind==="freewall"){let[i,o]=this.toScreen(e.start),[r,s]=this.toScreen(e.end),l=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return I`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${i} y1=${o} x2=${r} y2=${s} />
        <text class="fp3d-dim" x=${(i+r)/2} y=${(o+s)/2-10}>${this.m(l,2)}</text>
      </g>`}if(e?.kind==="rect"){let[i,o]=this.toScreen(e.start),[r,s]=this.toScreen(e.end),l=Math.abs(e.end[0]-e.start[0]),d=Math.abs(e.end[1]-e.start[1]);return I`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(i,r)} y=${Math.min(o,s)} width=${Math.abs(r-i)} height=${Math.abs(s-o)} />
        <text class="fp3d-dim" x=${(i+r)/2} y=${Math.min(o,s)-8}>${this.m(l,2)} × ${this.m(d,2)}</text>
      </g>`}if(!this.drawingPolygon&&this._tool!=="measure")return y;let t=[...this._draft,...this._cursor&&this._draft.length?[this._cursor]:[]],n=t.map(i=>this.toScreen(i));return I`<g pointer-events="none">
      ${n.length>1?I`<polyline class="fp3d-draft" points=${n.map(i=>i.join(",")).join(" ")} />`:y}
      ${n.slice(1).map((i,o)=>{let r=n[o];return Math.hypot(i[0]-r[0],i[1]-r[1])<30?y:I`<text class="fp3d-dim" x=${(r[0]+i[0])/2} y=${(r[1]+i[1])/2-6}>${this.m(Math.hypot(t[o+1][0]-t[o][0],t[o+1][1]-t[o][1]),2)}</text>`})}
      ${this._draft.map((i,o)=>{let[r,s]=this.toScreen(i);return I`<circle class=${o===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${r} cy=${s} r=${o===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?I`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:y}
    </g>`}renderGuides(){let e=this._guides,{w:t,h:n}=this._size;return I`<g pointer-events="none">
      ${e.x!==void 0?I`<line class="fp3d-guide" x1=${this.toScreen([e.x,0])[0]} y1="0" x2=${this.toScreen([e.x,0])[0]} y2=${n} />`:y}
      ${e.z!==void 0?I`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,e.z])[1]} x2=${t} y2=${this.toScreen([0,e.z])[1]} />`:y}
      ${e.point?I`<circle class="fp3d-snap" cx=${this.toScreen(e.point)[0]} cy=${this.toScreen(e.point)[1]} r="9" />`:y}
    </g>`}get unit(){return Uo(this.hass,this._doc.settings.units)}m(e,t=2){return Wa(e,this.unit,n=>Ve(this.hass,n,t))}area(e){return Oa(Math.abs(e),this.unit,t=>Ve(this.hass,t,1))}lenValue(e){return this.unit==="imperial"?Ht(e):String(M(e))}readLen(e){if(this.unit==="imperial")return Zo(e,"imperial");let t=parseFloat(e.replace(",","."));return Number.isFinite(t)?t:null}len(e,t,n,i=.01,o){return this.unit!=="imperial"?this.num(e,t,n,i,o):b`<label class="fp3d-field"
      >${Vn(e,"imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        .value=${Ht(t)}
        ?disabled=${!this.isAdmin}
        @change=${r=>{let s=r.target,l=Zo(s.value,"imperial");l!==null?n(o!==void 0?Math.max(o,l):l):s.value=Ht(t)}}
    /></label>`}num(e,t,n,i=.01,o){return b`<label class="fp3d-field"
      >${e}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${o??y}
        .value=${String(M(t))}
        ?disabled=${!this.isAdmin}
        @change=${r=>{let s=parseFloat(r.target.value.replace(",","."));Number.isFinite(s)&&n(s)}}
    /></label>`}selectFrom3d(e,t){this.selectItem(e,t),this._sideOpen=!1}setSidePinned(e){this._sidePinned=e,this._sideOpen=!1;try{localStorage.setItem("neonplan3d.sidePinned",e?"1":"0")}catch{}}renderAside(e){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?b`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(e)}
      </aside>`:b`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this._furnitureId||this._deviceId||this._openingId?b`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>⚙</button>`:y}
        <button class="fp3d-strip-btn" title=${this.t("tool_furniture")} @click=${()=>(this._tool="furniture",this._draft=[],this._sideOpen=!0)}>🛋</button>
        <button class="fp3d-strip-btn" title=${this.t("tool_opening")} @click=${()=>(this._tool="opening",this._draft=[],this._sideOpen=!0)}>🚪</button>
      </aside>`:b`<aside class="fp3d-side">${this.renderPinRow()}${this.renderSide(e)}</aside>`}renderPinRow(e=!1){return!this._split||this.narrow?y:b`<div class="fp3d-pin-row">
      ${e?b`<button class="fp3d-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:y}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(e){let t=this._doc?.floors??[],n=this.room,i=this.isAdmin,o=Object.values(this.hass?.areas??{}).sort((s,l)=>s.name.localeCompare(l.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="pool")return this.renderPoolPanel(e);if(this._tool==="furniture"&&e&&i)return b`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):y} ${this.renderFurnitureLibrary()}`;let r=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return r?b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${r}`:n&&this._tool!=="measure"?b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:b`
      ${i?y:b`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...t].reverse().map(s=>b`<button
              class="fp3d-chip"
              aria-pressed=${s.id===this._floorId}
              @click=${()=>{this._floorId=s.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${s.name}
            </button>`)}
          ${i?b`<button
                class="fp3d-btn"
                aria-expanded=${this._floorMenu}
                @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:this.addFloor()}
              >
                + ${this.t("add_floor")}
              </button>`:y}
        </div>
        ${i&&this._floorMenu?b`<div class="fp3d-floor-menu">
              <p class="fp3d-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(s=>b`<button class="fp3d-btn" @click=${()=>this.addFloor(s)}>
                  ${s.name}${s.level!=null?b` <span class="fp3d-sub">· ${this.t("level",{n:s.level})}</span>`:y}
                </button>`)}
              <button class="fp3d-btn" @click=${()=>this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`:y}
        ${e?b`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${e.name} ?disabled=${!i} @change=${s=>this.updateFloor({name:s.target.value})}
              /></label>
              ${this.len(this.t("elevation"),e.elevation,s=>this.updateFloor({elevation:s}))}
              ${i?b`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${s=>this._shiftX=Number(s.target.value)||0} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${s=>this._shiftZ=Number(s.target.value)||0} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${()=>this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${e.start_view?b`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${()=>this.updateFloor({start_view:null})}>↺</button>`:y}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${s=>this._shiftAll=s.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:y}
              ${this.len(this.t("height"),e.height,s=>this.updateFloor({height:Math.max(1,s)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?b`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${s=>this.updateFloor({ha_floor:s.target.value||null})}>
                      <option value="" ?selected=${!e.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(s=>s.floor_id===e.ha_floor||!t.some(l=>l.ha_floor===s.floor_id)).map(s=>b`<option value=${s.floor_id} ?selected=${s.floor_id===e.ha_floor}>${s.name}</option>`)}
                    </select></label
                  >`:y}
              ${i&&this.unplacedAreas(e).length?b`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(e)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(e).length})}
                    </button>
                  </div>`:y}
              ${i?b`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${e.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                    <button class="fp3d-btn" title=${this.t("straighten_hint")} ?disabled=${!e.rooms.length} @click=${()=>this.straightenFloor()}>
                      ${this.t("straighten")}
                    </button>
                  </div>
                  ${this._notice?b`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:y}`:y}
            </div>`:y}
      </section>
      ${this._tool==="measure"&&e?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?b`${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:e?this.renderRoomList(e):y}
      ${i?this.renderStartView():y} ${i?this.renderFavorites():y}
      ${this.renderHelpLinks()}
      ${i&&!1?this.renderPresenceSettings():y}
      ${e&&i?this.renderBackgroundForm(e):y} ${i?this.renderSettings():y}
      ${i?this.renderBackup():y} ${i&&Ke("diagnostics")?this.renderDiagnostics():y}
    `}renderRoomList(e){return e.rooms.length?b`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${e.rooms.map(t=>b`<button class="fp3d-row" @click=${()=>this.selectItem("room",t.id)}>
            <span>${t.name}</span><span class="fp3d-muted">${this.area(We(t.points))}</span>
          </button>`)}
      </div>
    </section>`:y}renderRoomOpenings(e){let t=(this.floor?.openings??[]).filter(n=>n.room_id===e.id);return t.length?b`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${t.length})</summary>
      <div class="fp3d-room-list">
        ${t.map(n=>b`<button class="fp3d-row" @click=${()=>(this.selectItem("opening",n.id),this.renderRoot.querySelector(".fp3d-side")?.scrollTo(0,0))}>
            <span>${this.t(`preset_${zi(n)}`)}</span><span class="fp3d-muted">${this.m(n.width,2)}</span>
          </button>`)}
      </div>
    </details>`:y}renderRoomForm(e,t){let n=this.isAdmin,i=Ai(e.points),o=xe(e.points);return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",e.id)}</div>
      <button class="fp3d-btn fp3d-wv-open" title=${this.t("wall_view_open")} @click=${()=>this.openRoomWalls(e)}>▦ ${this.t("wall_view_room")}</button>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${e.name} ?disabled=${!n} @change=${r=>this.updateRoom({name:r.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${r=>this.setArea(r.target.value)}>
            <option value="" ?selected=${!e.area_id}>${this.t("no_area")}</option>
            ${t.map(r=>b`<option value=${r.area_id} ?selected=${r.area_id===e.area_id}>${r.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${r=>this.updateRoom({floor_material:r.target.value})}>
            ${Jr.map(r=>b`<option value=${r} ?selected=${r===e.floor_material}>${this.t(`mat_${r}`)}</option>`)}
          </select></label
        >
        ${i?b`${this.len(this.t("x"),o.x0,r=>this.setRect("x",r))} ${this.len(this.t("z"),o.z0,r=>this.setRect("z",r))}
            ${this.len(this.t("width"),o.x1-o.x0,r=>this.setRect("w",r),.01,.05)}
            ${this.len(this.t("depth"),o.z1-o.z0,r=>this.setRect("d",r),.01,.05)}`:y}
        ${this.len(this.t("room_wall_offset"),Tn(this.floor,e),r=>{Number.isFinite(r)&&r>=-50&&r<=200&&this.updateRoom({wall_offset:r,elevation:null})},.05,-50)}
        ${this.len(this.t("room_floor_offset"),e.floor_offset??0,r=>{Number.isFinite(r)&&r>=0&&r<=20&&this.updateRoom({floor_offset:r})},.05,0)}
        <button class="fp3d-btn fp3d-field-btn" ?disabled=${!n} @click=${()=>this.updateRoom({wall_offset:null,floor_offset:null,elevation:null,height:null,ceiling_height:null})}>${this.t("room_inherit_heights")}</button>
        <p class="fp3d-sub fp3d-wide">${this.t("room_levels_hint")}</p>
      </div>
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${Vn(this.t("room_ceiling"),this.unit)}
          <input
            type=${this.unit==="imperial"?"text":"number"}
            step="0.05"
            min="1"
            placeholder=${this.floor?this.lenValue(this.floor.height):""}
            .value=${e.ceiling_height!=null||e.height!=null?this.lenValue(Se(this.floor,e)):""}
            ?disabled=${!n}
            @change=${r=>{let s=r.target.value.trim(),l=s===""?null:this.readLen(s);this.updateRoom({ceiling_height:l===null||l<=0?null:Math.min(30,Math.max(1,l)),height:null})}}
        /></label>
        <p class="fp3d-sub fp3d-wide">${this.t("room_ceiling_hint")}</p>
      </div>
      <div class="fp3d-actions">
        <button class="fp3d-btn" title=${this.t("room_start_view_hint")} ?disabled=${!n} @click=${()=>this.rememberRoomView()}>${this.t("room_start_view")}</button>
        ${e.start_view?b`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!n} @click=${()=>this.updateRoom({start_view:null})}>↺</button>`:y}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net",{a:this.area(We(e.points)),n:this.area(Da(e,this.floor,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}))})}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${()=>{navigator.clipboard?.writeText(e.id).catch(()=>{})}}>${e.id}</code></p>
      ${this.renderEdgeHeights(e)} ${this.renderRoomClimate(e)} ${this.renderRoomOpenings(e)}
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${e.points.length})</summary>
        ${e.points.map((r,s)=>b`<div class="fp3d-point ${s===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${s+1}</span>
            ${this.len(this.t("x"),r[0],l=>this.setPoint(s,0,l))} ${this.len(this.t("z"),r[1],l=>this.setPoint(s,1,l))}
            ${n?b`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>this.deleteVertex(s)}>
                  ×
                </button>`:y}
          </div>`)}
      </details>
      ${n?b`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(e)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:y}
      ${this._spots?this.renderSpotForm(e):y}
      ${this._packages?b`<div class="fp3d-packages">
            ${id.map(r=>b`<button class="fp3d-btn" @click=${()=>this.applyPackage(e,r)}>
                <b>${this.t(`pkg_${r}`)}</b><span>${this.t(`pkg_${r}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:y}
    </section>`}applyPackage(e,t){if(!this.isAdmin)return;let n=od(e,t,()=>G("furniture"));this.change((i,o)=>o.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}roofSpotSurface(e){return{id:e.id,points:this.roofPoints(e),roof:e,floorId:fs(this._doc,e)?.id??this._floorId??void 0}}pergolaSpotSurface(e){return{id:e.id,points:e.points,area_id:e.area_id,pergola:e,floorId:this._floorId??void 0}}openSpotForm(e){let t=xe(e.points),n=this.hass?ot(this.hass,e.area_id??null).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.min(12,Math.round((t.z1-t.z0)/1.2))),cols:Math.max(1,Math.min(12,Math.round((t.x1-t.x0)/1.2))),entity:n[0]??null,target:eo(e)}}placeSpots(e){let t=this._spots;if(!t||!this.isAdmin||t.target!==eo(e))return;let n=this._doc.floors.find(o=>o.id===(e.floorId??this._floorId));if(!n)return;let i;try{i=td(e,t,n,()=>G("furniture"))}catch{alert(this.t("spots_height_error"));return}this.change(o=>o.floors.find(r=>r.id===n.id).furniture.push(...i)),this._spots=null,this._notice=this.t("spots_placed",{n:i.length})}renderSpotForm(e){let t=this._spots;if(!t||t.target!==eo(e))return y;let n=Si(e,t.rows,t.cols).length,i=new Set(this.hass?ot(this.hass,e.area_id??null):[]),o=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)).sort((s,l)=>Number(i.has(l.id))-Number(i.has(s.id))),r=s=>this._spots={...t,...s};return b`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select ?disabled=${!this.isAdmin} @change=${s=>r({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>b`<option value=${s} ?selected=${s===t.type}>${this.t(`furn_${s}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),t.cols,s=>r({cols:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.num(this.t("spots_rows"),t.rows,s=>r({rows:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),t.entity,void 0,o,s=>r({entity:s==="none"?null:s}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n||!this.isAdmin} @click=${()=>this.placeSpots(e)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}iconInput(e,t){let n=e?e.startsWith("mdi:")?e:`mdi:${e}`:"";return b`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!this.isAdmin} @change=${i=>t(i.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?sr(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):y}
      </span></label
    >`}markerSelect(e,t){return b`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>t(n.target.value||null)}>
        <option value="" ?selected=${!e}>${this.t("marker_show_auto")}</option>
        ${Cr.map(n=>b`<option value=${n} ?selected=${n===e}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(e){let t=this.furnitureItem,n=this.outdoorArea?.area_id??this.floor?.outdoor?.find(s=>s.area_id&&t&&K([t.x,t.z],s.points))?.area_id,i=new Set(this.hass&&n?ot(this.hass,n):[]),o=s=>t?.device_id&&this.hass?.entities?.[s]?.device_id===t.device_id?0:i.has(s)?1:2,r=s=>{let l=this.hass?.entities?.[s],d=l?.area_id??(l?.device_id?this.hass?.devices?.[l.device_id]?.area_id:null);return d?this.hass?.areas?.[d]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(e).map(s=>({id:s,label:`${ge(this.hass,s)}${r(s)?` \xB7 ${r(s)}`:""}`})).sort((s,l)=>o(s.id)-o(l.id)||s.label.localeCompare(l.label))}entitySelect(e,t,n,i,o){let r=n===void 0?null:n?this.t("entity_auto",{name:ge(this.hass,n)}):this.t("entity_auto_none"),s=[...r!==null?[{id:"__auto",label:r}]:[],{id:"none",label:this.t("entity_none")}];return b`<label class="fp3d-field fp3d-wide"
      >${e}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${s}
        .value=${t===null?r!==null?"__auto":"none":t}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${d=>{d.stopPropagation(),o(d.detail.value==="__auto"?null:d.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(e){let t=this.floor,n=t?xt(e,t.rooms,t.walls??[]):null;if(!t||!n)return!1;let i=Me(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]);return Hn(i.walls,e,n)?.wall.exterior??!1}renderSidelightFields(e){if(e.type!=="door")return y;let t=Mi(e,this.openingIsExterior(e));if(t!=="sidelight"&&t!=="sidelights")return y;let n=this.isAdmin,i=(o,r)=>b`<label class="fp3d-field"
      >${this.t(r)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${e[o]==null?"":String(e[o])}
        ?disabled=${!n}
        @change=${s=>{let l=Number(s.target.value);this.updateOpening({[o]:Number.isFinite(l)&&l>0?Math.min(3,Math.max(.1,Math.round(l*100)/100)):null})}}
      />
    </label>`;return t==="sidelight"?b`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!e.sidelight_hinge} ?disabled=${!n} @change=${o=>this.updateOpening({sidelight_hinge:o.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${i("sidelight_width","sidelight_width")}`:b`${i("sidelight_width","sidelight_width_left")} ${i("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(e){let t=e.type==="door"?Fo:Ro,n=Mi({type:e.type,style:null},this.openingIsExterior(e)),i=e.style&&t.includes(e.style)?e.style:"";return b`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${o=>this.updateOpening({style:o.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${t.map(o=>b`<option value=${o} ?selected=${o===i}>${this.t(`style_${o}`)}</option>`)}
      </select></label
    >`}renderLevelSteps(e){if(!e.openings.some(n=>n.steps))return y;let t=Me(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]).walls;return I`${e.openings.map(n=>{let i=ms(e,n,t),o=i?.stair;if(!i||!o)return y;let r=(l,d)=>this.toScreen([i.start[0]+i.axis[0]*l+o.toward[0]*d,i.start[1]+i.axis[1]*l+o.toward[1]*d]),s=[r(0,o.face),r(i.width,o.face),r(i.width,o.face+o.depth),r(0,o.face+o.depth)];return I`<g data-opening=${n.id} class="fp3d-level-steps"><polygon points=${s.map(l=>l.join(",")).join(" ")} />
        ${o.offset>0?I`<polygon class="fp3d-step-landing" points=${[r(0,o.wallFace),r(i.width,o.wallFace),r(i.width,o.face),r(0,o.face)].map(l=>l.join(",")).join(" ")} />`:y}
        ${Array.from({length:o.count+1},(l,d)=>{let c=r(0,o.face+o.depth*d/o.count),h=r(i.width,o.face+o.depth*d/o.count);return I`<line x1=${c[0]} y1=${c[1]} x2=${h[0]} y2=${h[1]} />`})}
      </g>`})}`}renderOpeningSteps(e){let t=this.floor;if(!t||e.type==="window")return y;let n=Me(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]).walls,i=ms(t,e,n);if(!i?.other)return y;let o=i.high-i.low;if(o<.001&&!e.steps)return y;let r=s=>{let l=Math.max(1,Math.min(30,Math.ceil(o/.18)));this.updateOpening({steps:s?{side:s,count:e.steps?.count??l,depth:e.steps?.depth??Math.min(10,l*.28),offset:e.steps?.offset??0}:null})};return b`<section>
      <h3>${this.t("steps_title")}</h3>
      <label class="fp3d-field">${this.t("steps_side")}
        <select ?disabled=${!this.isAdmin||o<.001} @change=${s=>r(s.target.value)}>
          <option value="" ?selected=${!e.steps}>${this.t("steps_none")}</option>
          ${[["room",i.room],["other",i.other]].map(([s,l])=>b`<option value=${s} ?selected=${e.steps?.side===s}>${l.name} · ${this.t(o<.001?"steps_equal":_e(t,l)===i.low?"steps_lower":"steps_higher")}</option>`)}
        </select>
      </label>
      ${e.steps&&o>.001?b`<div class="fp3d-form">
        ${this.num(this.t("steps_count"),e.steps.count,s=>this.updateOpening({steps:{...e.steps,count:Math.max(1,Math.min(30,Math.round(s)))}}),1,1)}
        ${this.len(this.t("steps_depth"),e.steps.depth,s=>this.updateOpening({steps:{...e.steps,depth:Math.max(.1,Math.min(10,s))}}),.05,.1)}
        ${this.len(this.t("steps_offset"),e.steps.offset??0,s=>{Number.isFinite(s)&&Math.abs(s)<=10&&this.updateOpening({steps:{...e.steps,offset:s}})},.05,-10)}
      </div>`:y}
      <p class="fp3d-sub">${this.t("steps_hint")}</p>
      ${e.steps?b`<p class="fp3d-sub">${this.t("steps_offset_hint")}</p>`:y}
      ${e.steps&&o>.001&&!i.stair?b`<p class="fp3d-warn">${this.t("steps_fit_warning")}</p>`:y}
      ${i.issue==="height"||i.ceiling-i.threshold-e.sill<e.height-.02?b`<p class="fp3d-warn">${this.t("steps_height_warning")}</p>`:y}
    </section>`}renderOpeningForm(e){let t=this.isAdmin,n=e.type==="window",i=e.type==="garage",o=m=>{if(!this.hass)return null;let _=structuredClone(this._doc.floors);for(let g of _)for(let v of g.openings)v.id===e.id&&(v[m]=null);return $a(this.hass,_).get(e.id)?.[m]??null},r=m=>this.hass?.states[m]?.attributes.device_class,s=this.entityOptions(m=>m.startsWith("cover.")),l=this.entityOptions(m=>/^(sensor|number|input_number)\./.test(m)&&Number.isFinite(Number(this.hass?.states[m]?.state))),d=this.entityOptions(m=>m.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(r(m)??"")||Ae(m)&&Co(this.hass?.states[m])!==null),c=this.entityOptions(m=>{let _=this.hass?.states[m];return m.startsWith("binary_sensor.")?typeof _?.attributes.window_state=="string":Ae(m)&&(Co(_)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${m} ${ge(this.hass,m)}`))}),h=this.entityOptions(m=>m.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(r(m)??"")),u=m=>{let _=m===1,g=_?e.tilt:e.tilt2??null,v=_?e.contact:e.contact2,w=(_?e.sensor:e.sensor2)??(g&&g!=="none"?"contact_tilt":"contact"),$=k=>this.updateOpening(_?{contact:k}:{contact2:k==="none"?null:k});return b`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!t}
            @change=${k=>{let x=k.target.value,z=x==="contact_tilt"?{}:_?{tilt:null}:{tilt2:null};this.updateOpening({..._?{sensor:x}:{sensor2:x},...z})}}
          >
            ${["contact","handle","contact_tilt"].map(k=>b`<option value=${k} ?selected=${k===w}>${this.t(`sensor_kind_${k}`)}</option>`)}
          </select></label
        >
        ${w==="handle"?this.entitySelect(this.t("handle_entity"),v,void 0,c,k=>$(k==="none"?_?"none":null:k)):this.entitySelect(this.t("contact_entity"),v,_?o("contact"):void 0,h,$)}
        ${w==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),g,void 0,d,k=>this.updateOpening(_?{tilt:k==="none"?null:k}:{tilt2:k==="none"?null:k})):y}
        ${_?b`${this.entitySelect(this.t("tilt_angle_entity"),e.tilt_angle??null,void 0,this.entityOptions(k=>Ae(k)),k=>this.updateOpening({tilt_angle:k==="none"?null:k}))}
            ${e.tilt_angle&&e.tilt_angle!=="none"?b`${this.num(this.t("tilt_angle_max"),e.tilt_max??15,k=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,k))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),e.tilt_offset??0,k=>this.updateOpening({tilt_offset:k}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!e.tilt_invert} ?disabled=${!t} @change=${k=>this.updateOpening({tilt_invert:k.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:y}`:y}`},p=zi(e),f=e.type==="door";return b`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${p}`)}</h3>${this.fixButton("opening",e.id)}</div>
      ${t?b`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(Pi).map(m=>b`<button class="fp3d-chip" aria-pressed=${m===p} @click=${()=>this.setOpeningPreset(e,m)}>${this.t(`preset_${m}`)}</button>`)}
          </div>`:y}
      ${t&&!i?b`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:e.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(e.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${f||n&&e.sill<.1?b`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:e.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:y}
          </div>`:y}
      <div class="fp3d-form">
        ${this.len(this.t("width"),e.width,m=>this.updateOpening({width:Math.max(.3,m)}),.01,.3)}
        ${this.len(this.t("opening_position"),e.offset,m=>this.updateOpening({offset:Math.max(0,m)}),.01,0)}
        ${n?this.len(this.t("sill"),e.sill,m=>this.updateOpening({sill:Math.max(0,m)}),.01,0):y}
        ${this.len(this.t("opening_height"),e.height,m=>this.updateOpening({height:Math.max(.3,m)}),.01,.3)}
        ${i?y:this.renderStyleSelect(e)}
        ${this.renderSidelightFields(e)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${m=>this.updateOpening({mark:m.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${e.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${e.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?y:b`<label class="fp3d-field fp3d-wide"
          >${this.t(e.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!t} @change=${m=>this.updateOpening({hinge:m.target.value})}>
            <option value="left" ?selected=${e.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${e.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i||f?this.entitySelect(this.t(n?"cover_entity":"door_cover"),e.cover,o("cover"),s,m=>this.updateOpening({cover:m})):y}
        ${(n||i||f)&&e.cover!=="none"&&(e.cover||o("cover"))?b`${this.entitySelect(this.t("cover_position_entity"),e.position??null,void 0,l,m=>this.updateOpening({position:m==="none"?null:m}))}
              ${e.position?b`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!t}
                      .checked=${!!e.position_inverted}
                      @change=${m=>this.updateOpening({position_inverted:m.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:y}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!t} .checked=${!!e.confirm} @change=${m=>this.updateOpening({confirm:m.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:y}
        ${n?b`${e.leaves===2?b`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:y}
              ${u(1)} ${e.leaves===2?b`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${u(2)}`:y}`:b`${this.entitySelect(this.t(e.leaves===2?"contact_main":"contact_entity"),e.contact,o("contact"),d,m=>this.updateOpening({contact:m}))}
              ${e.leaves===2&&!i?this.entitySelect(this.t("contact_second"),e.contact2,void 0,d,m=>this.updateOpening({contact2:m==="none"?null:m})):y}
              ${f?b`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!e.shut} ?disabled=${!t} @change=${m=>this.updateOpening({shut:m.target.checked})} />
                    ${this.t("door_shut")}</label
                  >`:y}`}
        ${e.contact!=="none"&&(e.contact||e.contact2||o("contact"))?b`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!e.contact_invert} ?disabled=${!t} @change=${m=>this.updateOpening({contact_invert:m.target.checked})} />
              ${this.t("contact_invert")}</label
            >`:y}
        ${e.type==="window"?b`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!e.rain_ignore} ?disabled=${!t} @change=${m=>this.updateOpening({rain_ignore:m.target.checked||void 0})} />
              ${this.t("rain_ignore")}</label
            >`:y}
      </div>
      ${this.renderOpeningSteps(e)}
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${t?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:y}
    </section>`}renderFurnitureForm(e){if(this.selection().length>1)return this.renderBlockForm();let t=this.isAdmin;return b`<section>
      <div class="fp3d-h3row"><h3>${e.name||this.t("furniture")}</h3>${this.fixButton("furniture",e.id)}</div>
      ${e.group?b`<p class="fp3d-sub fp3d-block-note">▣ ${this.t("block_part")} <button class="fp3d-link" @click=${()=>{this._single=!1,this.requestUpdate()}}>${this.t("block_select")}</button></p>`:y}
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!t} placeholder=${this.t(`furn_${e.type}`)===`furn_${e.type}`?"":this.t(`furn_${e.type}`)} @change=${n=>this.updateFurniture({name:n.target.value.trim()||null})} />
        </label>
        ${e.name?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${n=>this.updateFurniture({show_name:n.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:y}
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!t} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${xi.map(n=>b`<option value=${n} ?selected=${n===e.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).filter(n=>n.items.length).map(n=>b`<optgroup label=${De(n,this.hass?.language??"de")}>
                ${n.items.map(i=>{let o=Dt(n.id,i.id);return b`<option value=${o} ?selected=${o===e.type}>${nt(i,this.hass?.language??"en")}</option>`})}
              </optgroup>`)}
            ${e.type.startsWith("pack:")&&!(this.packs??[]).some(n=>e.type.startsWith(`pack:${n.id}:`))?b`<option value=${e.type} selected>${Et(this.hass,e.type)}</option>`:y}
          </select></label
        >
        ${this.len(this.t("x"),e.x,n=>this.updateFurniture({x:n}))} ${this.len(this.t("z"),e.z,n=>this.updateFurniture({z:n}))}
        ${this.len(this.t("width"),e.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.len(this.t("depth"),e.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.len(this.t("height_m"),e.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("furn_rotation_y"),e.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${this.num(this.t("furn_rotation_x"),e.rotation_x??0,n=>this.updateFurniture({rotation_x:((n+180)%360+360)%360-180}),1)}
        ${this.num(this.t("furn_rotation_z"),e.rotation_z??0,n=>this.updateFurniture({rotation_z:((n+180)%360+360)%360-180}),1)}
        ${Le(e.type)?this.num("Lichtkegel-\xD6ffnungswinkel (\xB0)",e.beam_angle??60,n=>{Number.isFinite(n)&&n>=5&&n<=160&&this.updateFurniture({beam_angle:n})},1,5):y}
        <button class="fp3d-btn fp3d-field-btn" ?disabled=${!t} @click=${()=>this.updateFurniture({rotation:0,rotation_x:0,rotation_z:0,...e.type==="led_strip"?{tilt:0,upright:!1}:{}})}>${this.t("furn_rotation_reset")}</button>
        ${Le(e.type)?y:b`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!e.mirror} ?disabled=${!t} @change=${n=>this.updateFurniture({mirror:n.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${e.type==="led_strip"?b`${this.num(this.t("strip_tilt"),e.tilt??0,n=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(n)))}),5)}
              <label class="fp3d-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!e.upright} ?disabled=${!t} @change=${n=>this.updateFurniture({upright:n.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:y}
        ${it(e)&&this.floor?b`${this.len(this.t("mount_height"),e.mount_y??ze(this.floor,e)-ye(this.floor,e.x,e.z),n=>this.updateFurniture({mount_y:Math.min(io,Math.max(0,n))}),.01,0)}
              ${e.mount_y!=null?b`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!t} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:y}`:y}
      </div>
      <p class="fp3d-sub">${this.t("furn_rotation_hint")}</p>
      ${e.surface_binding?b`<p class="fp3d-sub">Gebunden an ${e.surface_binding.kind==="roof"?"Dach":"Pergola"} · ${e.surface_binding.id}</p>
        <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.updateFurniture({surface_binding:null,binding_warning:null})}>Bindung lösen</button>`:y}
      ${e.binding_warning?b`<p class="fp3d-warn">Flächenbindung gelöst: ${e.binding_warning==="surface_missing"?"Zielfl\xE4che fehlt":e.binding_warning==="surface_outside"?"Leuchte liegt au\xDFerhalb der Fl\xE4che":"Montageh\xF6he ung\xFCltig"}. Letzte gültige Position bleibt erhalten.</p>`:y}
      ${e.type==="stairs"?b`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:y}
      ${e.type==="stairs_u"?b`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>`:y}
      ${e.type==="stairwell"?b`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&(Ya(Ee(e),n.points)||We(Go(n.points,Ee(e)))>.01))?b`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:y}`:y}
      ${e.type==="inverter"||e.type==="home_battery"?b`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${(e.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(n=>b`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`${e.type==="inverter"?"inverter":"battery"}_${n||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:y}
      ${e.type==="lamp_pendant"?b`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>b`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:y}
      ${Rn(e.type)?this.renderFurnitureLinks(e):Qc.has(e.type)?y:b`<div class="fp3d-form fp3d-links">${this.renderStateLinks(e)}</div>`} ${e.type==="parking"?this.renderParkingForm(e):y}
      ${this.renderCustomPackForm(e)}
      ${e.type.startsWith("pack:mastershort.vehicles:")&&this.isAdmin?b`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this.vehicleToSpot(e)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:y}
      ${t?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallViewFor(e)}>▦ ${this.t("wall_view")}</button>
            ${e.entity&&e.entity!=="none"&&e.type!=="parking"?b`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(e)}>${this.t("as_device")}</button>`:y}
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>
          ${this.renderMultiToggle()}`:y}
    </section>`}renderCustomPackForm(e){let t=he(e.type),n=zr(e.type);if(!t)return y;let i=(s,l)=>{let d=s==="main"?"entity":s,c=["entity","status","power","door_left","door_right"].includes(d)?{[d]:l==="none"||l==null?"none":l}:{};this.updateFurniture({bindings:{...e.bindings,[s]:l==="none"?null:l},...c})},o=(s,l)=>this.updateFurniture({spot_config:{...e.spot_config,[s]:{...e.spot_config?.[s],...l}}}),r=(s,l)=>this.updateFurniture({motion_config:{...e.motion_config,[s]:{...e.motion_config?.[s],...l}}});return b`<div class="fp3d-form">
      <label class="fp3d-field fp3d-wide">Home-Assistant-Gerät (Auswahlhilfe)
        <select ?disabled=${!this.isAdmin} @change=${s=>this.updateFurniture({device_id:s.target.value||null})}>
          <option value="" ?selected=${!e.device_id}>Alle Geräte und externe Helfer</option>
          ${Object.values(this.hass?.devices??{}).sort((s,l)=>(s.name_by_user??s.name??s.id).localeCompare(l.name_by_user??l.name??l.id)).map(s=>b`<option value=${s.id} ?selected=${e.device_id===s.id}>${s.name_by_user??s.name??s.id}</option>`)}
        </select>
      </label>
      ${n.length?b`<label class="fp3d-field fp3d-wide">Produktfarbe
        <select ?disabled=${!this.isAdmin} @change=${s=>this.updateFurniture({product_variant:s.target.value||null})}>
          <option value="" ?selected=${!e.product_variant}>${t.product?.label??"Pack-Standardfarbe"}</option>
          ${n.map(s=>b`<option value=${s.type} ?selected=${e.product_variant===s.type}>${s.item.product?.label}</option>`)}
        </select></label>`:y}
      ${(t.bindings??[]).map(s=>this.entitySelect(s.label,e.bindings?.[s.id]??null,void 0,this.entityOptions(l=>{let d=this.hass?.states[l],c=l.split(".")[0];return(!s.domains?.length||s.domains.includes(c))&&(!s.device_classes?.length||s.device_classes.includes(String(d?.attributes.device_class??"")))}),l=>i(s.id,l)))}
      ${(t.motions??[]).filter(s=>["door","window","slide"].includes(s.kind)).map(s=>b`<h4 class="fp3d-wide">Öffnung · ${s.id}</h4>
        <label class="fp3d-check fp3d-wide"><input type="checkbox" .checked=${!!e.motion_config?.[s.id]?.contact_invert} ?disabled=${!this.isAdmin} @change=${l=>r(s.id,{contact_invert:l.target.checked})}>Kontakt umkehren</label>
        ${s.kind==="slide"?this.len("Schiebeweg (m)",e.motion_config?.[s.id]?.travel_m??(s.travel??1)*e.w,l=>{Number.isFinite(l)&&l>=0&&l<=10&&r(s.id,{travel_m:l})},.01,0):this.num("\xD6ffnungswinkel (\xB0)",e.motion_config?.[s.id]?.angle??s.angle??Math.round((s.kind==="window"?1.2:1.5)*180/Math.PI*100)/100,l=>{Number.isFinite(l)&&l>=0&&l<=180&&r(s.id,{angle:l})},1,0)}
        ${s.kind==="window"?this.num("Kippwinkel (\xB0)",e.motion_config?.[s.id]?.tilt_angle??s.tilt_angle??Math.round(.2*180/Math.PI*100)/100,l=>{Number.isFinite(l)&&l>=0&&l<=90&&r(s.id,{tilt_angle:l})},1,0):y}
        <button class="fp3d-btn" ?disabled=${!this.isAdmin} @click=${()=>{let l={...e.motion_config};delete l[s.id],this.updateFurniture({motion_config:l})}}>Standardwerte übernehmen</button>`)}
      ${(t.spots??[]).map(s=>b`<h4 class="fp3d-wide">Strahler · ${s.id}</h4>
        ${["rotation_x","rotation_y","rotation_z"].map((l,d)=>this.num(`Drehung ${["X","Y","Z"][d]} (\xB0)`,e.spot_config?.[s.id]?.[l]??0,c=>{Number.isFinite(c)&&o(s.id,{[l]:Math.max(-360,Math.min(360,c))})},1))}
        ${this.entitySelect("Eigene Lichtentit\xE4t (sonst gemeinsame)",e.spot_config?.[s.id]?.entity??null,void 0,this.entityOptions(l=>l.startsWith("light.")),l=>o(s.id,{entity:l==="none"?null:l}))}
        ${this.num("Eigener \xD6ffnungswinkel (\xB0)",e.spot_config?.[s.id]?.beam_angle??e.beam_angle??s.angle??60,l=>{Number.isFinite(l)&&l>=5&&l<=160&&o(s.id,{beam_angle:l})},1,5)}
        <button class="fp3d-btn" ?disabled=${!this.isAdmin} @click=${()=>o(s.id,{beam_angle:null})}>Öffnungswinkel erben</button>`)}
      ${t.motions?.length||t.displays?.length||t.parts.some(s=>s.status)?b`
        <label class="fp3d-check fp3d-wide"><input type="checkbox" .checked=${this._doc.settings.pack_animations!==!1} ?disabled=${!this.isAdmin} @change=${s=>this.change(l=>{l.settings.pack_animations=s.target.checked})}>Pack-Animationen global</label>
        <label class="fp3d-check fp3d-wide"><input type="checkbox" .checked=${e.animations!==!1} ?disabled=${!this.isAdmin} @change=${s=>this.updateFurniture({animations:s.target.checked})}>Animationen für dieses Möbelstück</label>`:y}
      ${t.parts.filter(s=>s.id&&s.status?.colors).map(s=>b`<h4 class="fp3d-wide">Statusfarben · ${s.id}</h4>${Object.entries(s.status.colors).map(([l,d])=>b`
        <label class="fp3d-field">${l}<input type="color" .value=${e.status_colors?.[s.id]?.[l]??(d.startsWith("#")?d:"#37e0ff")} ?disabled=${!this.isAdmin}
          @change=${c=>this.updateFurniture({status_colors:{...e.status_colors,[s.id]:{...e.status_colors?.[s.id],[l]:c.target.value}}})}></label>`)}
        <button class="fp3d-btn" ?disabled=${!this.isAdmin} @click=${()=>{let l={...e.status_colors};delete l[s.id],this.updateFurniture({status_colors:l})}}>Pack-Farben übernehmen</button>`)}
    </div>`}setEnergy(e){let t=structuredClone(this._doc);t.energy={...t.energy,...e},this.setDoc(t)}async importEnergyPrefs(){if(!this.hass)return;let e;try{e=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let t=Gl(this.hass,e),n=0,i=s=>this._doc.floors.flatMap(l=>l.furniture).find(l=>l.type===s),o=(s,l,d)=>{if(!d)return;let c=i(s);if(!c&&this.floor&&(this.addEnergyDevice(s),c=i(s)),!c||c[l]&&c[l]!=="none")return;let h=c.id;this.change(u=>{let p=u.floors.flatMap(f=>f.furniture).find(f=>f.id===h);p&&(p[l]=d)}),n++};o("meter","power",t.grid),o("inverter","power",t.solar),o("home_battery","power",t.battery),o("home_battery","soc",t.battery_soc);let r=jl(e);for(let s of["gas","water"])r[s]&&!this._doc.energy[s]&&(this.setEnergy({[s]:r[s]}),n++);this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let e=this._doc.energy,t=this.isAdmin,n=(m,_)=>this.hass?.states[m]?.attributes[_],i=this.entityOptions(m=>this.isPowerSensor(m)),o=this.entityOptions(m=>Ae(m)&&n(m,"device_class")==="battery"),r=this.entityOptions(m=>Ae(m)&&(n(m,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(m,"unit_of_measurement")??""))),s=m=>_=>this.setEnergy({[m]:_==="none"?null:_}),l=m=>this.entityOptions(_=>Ae(_)&&(n(_,"device_class")===m||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(n(_,"unit_of_measurement")??""))),d=this.hass?ln(this.hass,this._doc.floors):new Map,c=zs(this._doc,m=>this.devicePower(m,d)),h=this.hass?Zl(this.hass,this._doc,[],c):null,u=!!h&&(h.solar??0)<20,p=u&&h.grid!==null&&h.grid<-50,f=u&&h.battery!==null&&h.battery<-50&&(h.grid??0)<=0;return b`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${p?b`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.setEnergy({grid_invert:!e.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:y}
      ${f?b`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.setEnergy({battery_invert:!e.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:y}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),e.grid,c.grid,i,s("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.grid_invert} ?disabled=${!t} @change=${m=>this.setEnergy({grid_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),e.solar,c.solar[0]??null,i,s("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),e.battery,c.battery[0]??null,i,s("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.battery_invert} ?disabled=${!t} @change=${m=>this.setEnergy({battery_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),e.battery_soc,c.soc[0]??null,o,s("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),e.consumption,null,i,s("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),e.tariff,void 0,r,s("tariff"))}
        ${this.entitySelect(this.t("energy_gas_meter"),e.gas??null,void 0,l("gas"),m=>this.setEnergy({gas:m==="none"?null:m}))}
        ${this.entitySelect(this.t("energy_water_meter"),e.water??null,void 0,l("water"),m=>this.setEnergy({water:m==="none"?null:m}))}
      </div>
      <p class="fp3d-sub">${this.t("energy_meters_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!t||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?b`<p class="fp3d-sub">${this._energyNote}</p>`:y}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderHeadroom(e){let t=e.elevation+e.height;if(!(this._doc.settings.roof.sections??[]).some(o=>bl(o,t)))return y;let i={settings:this._doc.settings};return I`${[1.5,2].map(o=>vl(i,e.elevation,o).map(([r,s])=>{let[l,d]=this.toScreen(r),[c,h]=this.toScreen(s);return I`<line class="fp3d-headroom" x1=${l} y1=${d} x2=${c} y2=${h} />
          <text class="fp3d-headroom-label" x=${(l+c)/2} y=${(d+h)/2-4}>${this.m(o,1)}</text>`}))}`}renderFavorites(){let e=this._doc.settings.favorites??[],t=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(r=>t.includes(r.split(".")[0])&&!e.includes(r)),i=r=>this.change(s=>s.settings.favorites=r.length?r:void 0),o=(r,s)=>{let l=[...e],[d]=l.splice(r,1);l.splice(Math.max(0,Math.min(l.length,r+s)),0,d),i(l)};return b`<details class="fp3d-section">
      <summary>${this.t("favorites")}${e.length?b` <span class="fp3d-lib-count">${e.length}</span>`:y}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${e.map((r,s)=>b`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${ge(this.hass,r)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${s===0} @click=${()=>o(s,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${s===e.length-1} @click=${()=>o(s,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>i(e.filter(l=>l!==r))}>✕</button>
        </div>`)}
      ${e.length<40?b`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,r=>{r&&r!=="none"&&!e.includes(r)&&i([...e,r])})}
          </div>`:y}
      ${this.renderOwnButtons()} ${this.renderMediaPresets()}
    </details>`}renderMediaPresets(){let e=this._doc.settings.media_presets??[],t=i=>this.change(o=>o.settings.media_presets=i.length?i:void 0),n=(i,o)=>t(e.map((r,s)=>s===i?{...r,...o}:r));return b`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"].map(i=>b`<option value=${i}></option>`)}
      </datalist>
      ${e.map((i,o)=>b`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${i.label} @change=${r=>n(o,{label:r.target.value.trim()||"Radio"})}
          /></label>
          <label class="fp3d-field" title=${this.t("preset_type_hint")}
            >${this.t("preset_type")}
            <input type="text" list="fp3d-preset-types" .value=${i.type} @change=${r=>n(o,{type:r.target.value.trim()||"music"})}
          /></label>
          <label class="fp3d-field fp3d-wide" title=${this.t("preset_content_hint")}
            >${this.t("preset_content")}
            <input type="text" .value=${i.content} placeholder="https://… · spotify:playlist:… · Rock Antenne" @change=${r=>n(o,{content:r.target.value.trim()})}
          /></label>
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn fp3d-danger" @click=${()=>t(e.filter((r,s)=>s!==o))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${e.length<30?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>t([...e,{id:G("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:y}`}renderOwnButtons(){let e=this._doc.settings.buttons??[],t=o=>this.change(r=>r.settings.buttons=o.length?o:void 0),n=(o,r)=>t(e.map((s,l)=>l===o?{...s,...r}:s)),i={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""};return b`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${e.map((o,r)=>b`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${o.label} @change=${s=>n(r,{label:s.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${s=>n(r,{action:s.target.value})}>
              ${Nr.map(s=>b`<option value=${s} ?selected=${s===o.action}>${this.t(`own_action_${s}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(o.icon??null,s=>n(r,{icon:s}))}
          ${o.action!=="fire_dom_event"?b`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${o.action}`)}
                <input type="text" .value=${o.target??""} placeholder=${i[o.action]} @change=${s=>n(r,{target:s.target.value.trim()||null})}
              /></label>`:y}
          ${o.action==="service"||o.action==="fire_dom_event"?b`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${o.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${o.data?JSON.stringify(o.data,null,1):""}
                  @change=${s=>{s.target.setCustomValidity("");let l=s.target.value.trim();if(!l)return n(r,{data:null});try{let d=JSON.parse(l);d&&typeof d=="object"&&!Array.isArray(d)&&n(r,{data:d})}catch{s.target.setCustomValidity(this.t("own_data_bad")),s.target.reportValidity()}}}
                ></textarea></label
              >`:y}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${r===0} @click=${()=>t([...e.slice(0,r-1),o,e[r-1],...e.slice(r+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>t(e.filter((s,l)=>l!==r))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${e.length<20?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>t([...e,{id:G("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:y}`}paneView(){let t=this.renderRoot.querySelector("fp3d-view3d")?.currentView();if(!t)return null;let n=t.target;return{theta:M(t.theta),phi:M(t.phi),radius:M(t.radius),...n?{target:{x:M(n.x),y:M(n.y),z:M(n.z)}}:{}}}rememberFloorView(){let e=this.paneView();if(!e){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:e})}rememberRoomView(){let e=this.paneView();if(!e){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:e})}renderStartView(){let e=this._doc.settings.start_view??null,t=()=>{let n=this.paneView();n&&this.change(i=>i.settings.start_view=n)};return b`<details class="fp3d-section">
      <summary>${this.t("start_view")}</summary>
      <p class="fp3d-sub">${this.t("start_view_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" @click=${t}>${this.t("start_view_set")}</button>
        ${e?b`<button class="fp3d-btn" @click=${()=>this.change(n=>n.settings.start_view=null)}>${this.t("start_view_reset")}</button>`:y}
      </div>
      ${e?b`<p class="fp3d-sub">${this.t("start_view_saved")}</p>
            <p class="fp3d-sub">${this.t("start_view_card")}</p>
            <code class="fp3d-code"
              >start_view: { theta: ${e.theta}, phi: ${e.phi}, radius: ${e.radius}${e.target?`, target: { x: ${e.target.x}, y: ${e.target.y}, z: ${e.target.z} }`:""} }</code
            >`:y}
    </details>`}renderPresenceSettings(){let e=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),t=i=>{let o=i.slice(7),r=this.entityOptions(l=>Ae(l)),s=l=>l.includes(o)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...r.filter(l=>s(l.id)),...r.filter(l=>!s(l.id))]},n=(i,o)=>{let r=structuredClone(this._doc);r.presence=r.presence.filter(s=>s.person!==i),o&&o!=="none"&&r.presence.push({person:i,sensor:o}),this.setDoc(r)};return b`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${e.length?e.map(i=>this.entitySelect(`${ge(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(o=>o.person===i)?.sensor??null,void 0,t(i),o=>n(i,o))):b`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderStateLinks(e){return b`${this.entitySelect(this.t("furn_state_entity"),e.state_entity??null,void 0,this.entityOptions(t=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(t)),t=>this.updateFurniture({state_entity:t==="none"?null:t}))}
              ${e.state_entity&&e.state_entity!=="none"?b`${this.entitySelect(this.t("furn_state_entity2"),e.state_entity2??null,void 0,this.entityOptions(t=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(t)),t=>this.updateFurniture({state_entity2:t==="none"?null:t}))}
                    ${e.state_entity2&&e.state_entity2!=="none"?b`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isAdmin} @change=${t=>this.updateFurniture({state_split:t.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${e.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${e.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:y}`:y}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`}renderFurnitureLinks(e){let t=new Set(["smoke","gas","carbon_monoxide","heat","moisture","safety","sound","problem"]);if(!this.hass)return y;let n=this.hass,i=h=>{let u=structuredClone(this._doc.floors);for(let p of u)for(let f of p.furniture)f.id===e.id&&(f[h]=null);return ln(n,u).get(e.id)?.[h]??null},o=Di(e.type),r=o&&(!on(e.type)||Rr(e.type)),s=Le(e.type),l=this.entityOptions(h=>s?/^(light|switch|input_boolean)\./.test(h):r?/^(media_player|switch|input_boolean|light)\./.test(h):e.type==="radiator"||e.type==="ac_unit"?h.startsWith("climate."):ct(e.type)?h.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(h)||ka(n.states[h])||h.startsWith("binary_sensor.")&&(e.type.endsWith("smoke_detector")||t.has(String(n.states[h]?.attributes.device_class??"")))),d=this.entityOptions(h=>this.isPowerSensor(h)),c=e.type==="fridge_smart"?this.entityOptions(h=>h.startsWith("binary_sensor.")):[];return b`<div class="fp3d-form fp3d-links">
        ${e.type==="grid_point"?b`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(s?"furn_entity_light":r?"furn_entity_tv":e.type==="radiator"||e.type==="ac_unit"?"furn_entity_climate":ct(e.type)?"furn_entity_vacuum":"furn_entity"),e.entity??null,i("entity"),l,h=>this.updateFurniture({entity:h}))}
        ${!s&&!ut.includes(e.type)&&!Li(e.type)?this.renderStateLinks(e):y}
        ${s&&e.entity&&e.entity!=="none"?b`${this.entitySelect(this.t("furn_color_entity"),e.color_entity??null,void 0,this.entityOptions(h=>h.startsWith("light.")&&h!==e.entity),h=>this.updateFurniture({color_entity:h==="none"?null:h}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:y}
        ${s?this.glowScaleField(e.glow_scale,h=>this.updateFurniture({glow_scale:h})):y}
        ${s&&e.entity&&e.entity!=="none"?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_only_color_hint")}
                ><input type="checkbox" .checked=${!!e.only_color} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({only_color:h.target.checked?"#ffd400":null})} />
                ${this.t("furn_only_color")}</label
              >
              ${e.only_color?b`<label class="fp3d-field"
                      >${this.t("furn_only_color_pick")}
                      <input type="color" .value=${e.only_color} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({only_color:h.target.value})} /></label>
                    <p class="fp3d-sub fp3d-wide">${this.t("furn_only_color_hint")}</p>`:y}`:y}
        ${s||e.type==="grid_point"?y:this.entitySelect(this.t(e.type==="meter"?"energy_grid":e.type==="inverter"?"energy_solar_sensor":e.type==="home_battery"?"energy_battery_sensor":"furn_power"),e.power??null,i("power"),d,h=>this.updateFurniture({power:h}))}
        ${!s&&e.power&&e.power!=="none"&&!ut.includes(e.type)?b`<label class="fp3d-field" title=${this.t("furn_run_w_hint")}
              >${this.t("furn_run_w")}
              <input
                type="number"
                min="1"
                max="5000"
                step="5"
                placeholder="10"
                .value=${e.run_w?String(e.run_w):""}
                ?disabled=${!this.isAdmin}
                @change=${h=>{let u=Number(h.target.value);this.updateFurniture({run_w:u>0?Math.min(5e3,Math.round(u)):null})}}
            /></label>`:y}
        ${fe("energy_pro")&&!s&&!["grid_point","meter","inverter","home_battery"].includes(e.type)?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!e.holo} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({holo:h.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:fe("energy_pro")&&e.type==="inverter"?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${e.plant_card!==!1} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({plant_card:h.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >
              ${e.plant_card!==!1?b`${this.len(this.t("holo_right"),e.plant_right??0,h=>this.updateFurniture({plant_right:Math.min(30,Math.max(-30,M(h)))||void 0}),.25)}
                  ${this.len(this.t("holo_up"),e.plant_up??0,h=>this.updateFurniture({plant_up:Math.min(30,Math.max(-30,M(h)))||void 0}),.25)}`:y}`:y}
      </div>
      ${e.type==="meter"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),e.export??null,void 0,d,h=>this.updateFurniture({export:h==="none"?null:h}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:y}
      ${e.type==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let h=(this._doc.settings.roof.strings??[]).filter(u=>u.inverter===e.id).map(u=>u.name);return b`<p class="fp3d-sub fp3d-wide">${h.length?this.t("inverter_strings",{names:h.join(", ")}):this.t("inverter_strings_none")}</p>`})():y}
      ${e.type==="home_battery"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),e.soc??null,void 0,this.entityOptions(h=>Ae(h)&&(n.states[h]?.attributes.device_class==="battery"||n.states[h]?.attributes.unit_of_measurement==="%")),h=>this.updateFurniture({soc:h==="none"?null:h}))}
            ${this.entitySelect(this.t("furn_charge"),e.charge??null,void 0,d,h=>this.updateFurniture({charge:h==="none"?null:h}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:y}
      ${e.type==="wallbox"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),e.status??null,void 0,this.entityOptions(h=>Os(h)||Ae(h)),h=>this.updateFurniture({status:h==="none"?null:h}))}
          </div>`:y}
      ${!s||e.entity?b`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({confirm:h.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(e.marker??null,h=>this.updateFurniture({marker:h}))}${this.iconInput(e.icon,h=>this.updateFurniture({icon:h}))}</div>`:y}
      ${ct(e.type)?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),e.room_sensor??null,Pa(n,ln(n,this._doc.floors).get(e.id)?.entity??null,null),this.entityOptions(h=>Ae(h)),h=>this.updateFurniture({room_sensor:h}))}
          </div>`:y}
      ${e.type==="fridge_smart"?b`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),e.door_left??null,void 0,c,h=>this.updateFurniture({door_left:h}))}
              ${this.entitySelect(this.t("furn_door_right"),e.door_right??null,void 0,c,h=>this.updateFurniture({door_right:h}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:y}
      ${Li(e.type)?this.renderPictureRules(e):y}
      <p class="fp3d-sub">${this.t(s?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":o?"furn_links_hint_tv":ct(e.type)?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(e){let t=this.isAdmin,n=this.hass?.language??"en",i=(this.packs??[]).flatMap(v=>v.items.filter(w=>w.vehicle).map(w=>({id:Dt(v.id,w.id),label:`${nt(w,n)} \xB7 ${De(v,n)}`}))),o=v=>v.startsWith("device_tracker.")?this.hass?.states[v]?.attributes.source_type==="router"?2:0:1,r=this.entityOptions(v=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(v)).sort((v,w)=>o(v.id)-o(w.id)),s=this.entityOptions(v=>/^(sensor|input_select|select|input_text)\./.test(v)),l=e.type_entity?this.hass?.states[e.type_entity]:void 0,d=Array.isArray(l?.attributes.options)?l.attributes.options:[],c=e.types??[],h=v=>this.updateFurniture({types:v}),u=(v,w)=>b`<select ?disabled=${!t} @change=${$=>w($.target.value||null)}>
        <option value="" ?selected=${!v}>${this.t("parking_vehicle_none")}</option>
        ${i.map($=>b`<option value=${$.id} ?selected=${$.id===v}>${$.label}</option>`)}
      </select>`,p=this.floor,f=p?.rooms.find(v=>v.points.length>=3&&K([e.x,e.z],v.points)),m=e.vehicle?he(e.vehicle):void 0,_=m?m.size[2]*(e.scale??1):0,g=!!f&&!!p&&_>p.height+1e-6;return b`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),e.entity??null,void 0,r,v=>this.updateFurniture({entity:v==="none"?null:v}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${u(e.vehicle??null,v=>this.updateFurniture({vehicle:v}))}</label>
        ${i.length?y:b`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((e.scale??1)*100),v=>this.updateFurniture({scale:Math.min(150,Math.max(30,v))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),e.type_entity??null,void 0,s,v=>this.updateFurniture({type_entity:v==="none"?null:v}))}
        ${e.type_entity?b`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${c.map((v,w)=>b`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${v.state}
                    ?disabled=${!t}
                    @change=${$=>h(c.map((k,x)=>x===w?{...k,state:$.target.value}:k))}
                  />
                  ${u(v.vehicle,$=>h(c.map((k,x)=>x===w?{...k,vehicle:$??""}:k)))}
                  <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>h(c.filter(($,k)=>k!==w))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${d.map(v=>b`<option value=${v}></option>`)}</datalist>
              ${t?b`<button class="fp3d-btn" @click=${()=>h([...c,{state:d[c.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:y}
            </div>`:y}
      </div>
      ${g?b`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:Ve(this.hass,_,2),room:Ve(this.hass,p.height,2)})}</p>`:y}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(e)}`}renderCarForm(e){let t=this.hass?.language;if(!fe("auto_pro"))return b`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🚗 ${this.t("pro_name_auto_pro")}</b><a class="fp3d-btn fp3d-primary" href=${Ye(t)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
        <p class="fp3d-sub">${this.t("auto_pro_teaser")}</p>
      </section>`;if(!this.hass)return y;let n=this.hass,i=e.car??{},o=Ma(n,{entity:e.entity,car:{device:i.device}}),r=d=>this.updateFurniture({car:{...i,...d}}),s=this.entityOptions(d=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(d)),l=(d,c,h)=>this.entitySelect(this.t(c),i[d]??null,o[d],h,u=>r({[d]:u==="none"?"none":u}));return b`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),i.device??null,void 0,s,d=>r({device:d==="none"?null:d}))}
        ${l("soc","car_soc",this.entityOptions(d=>Ae(d)))}
        ${l("range","car_range",this.entityOptions(d=>Ae(d)))}
        ${l("charging","car_charging",this.entityOptions(d=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(d)))}
        ${l("plugged","car_plugged",this.entityOptions(d=>Os(d)))}
        ${l("lock","car_lock",this.entityOptions(d=>/^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(d)))}
        ${l("climate","car_climate",this.entityOptions(d=>/^(climate|switch|binary_sensor|input_boolean)\./.test(d)))}
        ${l("tracker","car_tracker",this.entityOptions(d=>d.startsWith("device_tracker.")))}
      </div>
    </section>`}toggleLibrary(e){let t=new Set(this._libOpen);t.has(e)?t.delete(e):t.add(e),this._libOpen=t;try{localStorage.setItem("neonplan3d.library",JSON.stringify([...t]))}catch{}}librarySection(e,t,n,i){let o=kn(i).split(/\s+/).filter(Boolean),r=o.length?n.filter(l=>{let d=kn(`${l.label} ${l.search??""} ${l.type.replace(/[_:.]/g," ")} ${t}`);return o.every(c=>d.includes(c))}):n;if(i&&!r.length)return y;let s=i?!0:this._libOpen.has(e);return b`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${s} @click=${()=>this.toggleLibrary(e)}>
        <span class="fp3d-lib-caret">${s?"\u25BE":"\u25B8"}</span>${t} <span class="fp3d-lib-count">${r.length}</span>
      </button>
      ${s?b`<div class="fp3d-library">${r.map(l=>this.libraryButton(l.type,l.label))}</div>`:y}`}libraryHasHits(e){let t=kn(e).split(/\s+/).filter(Boolean),n=this.hass?.language??"en";return[...Object.entries(Eo).flatMap(([o,r])=>r.map(s=>`${this.t(`furn_${s}`)} ${je(ro,`furn_${s}`)} ${s.replace(/_/g," ")} ${this.t(`furn_group_${o}`)}`)),...(this.packs??[]).flatMap(o=>o.items.map(r=>`${nt(r,n)} ${Object.values(r.name).join(" ")} ${r.id.replace(/_/g," ")} ${o.name} ${De(o,"en")}`))].some(o=>{let r=kn(o);return t.every(s=>r.includes(s))})}storedPictures(){let e=[];for(let t of this._doc.floors)for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!e.includes(i.image)&&e.push(i.image);return e}renderPictureRules(e){let t=this.isAdmin,n=e.pictures??[];if(!fe("screens"))return b`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${Ye(this.hass?.language)} target="_blank" rel="noopener">${this.t("pro_shop")}</a> · <a href=${Vt(this.hass?.language,"screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let i=g=>this.updateFurniture({pictures:g}),o=this.entityOptions(()=>!0),r=g=>["string","number","boolean"].includes(typeof g),s=g=>Object.entries(this.hass?.states[g]?.attributes??{}).filter(([v,w])=>r(w)&&v!=="friendly_name"&&v!=="icon").map(([v])=>v),l=(g,v)=>{let w=this.hass?.states[g];return w?String((v?w.attributes[v]:w.state)??""):""},d=(g,v)=>{let w=this.hass?.states[g],$=!v&&Array.isArray(w?.attributes.options)?w.attributes.options:[];return $.length?$:[l(g,v)]},c=g=>`${g.entity}\0${g.attribute??""}`,h=[];n.forEach((g,v)=>{let w=h.find($=>c($)===c(g));w?w.rows.push(v):h.push({entity:g.entity,attribute:g.attribute??null,rows:[v]})});let u=(g,v)=>i(n.map((w,$)=>g.rows.includes($)?{...w,...v}:w)),p=(g,v)=>i(n.map((w,$)=>$===g?{...w,...v}:w)),f=this.storedPictures(),m=this.entityOptions(g=>g.startsWith("camera.")),_=g=>g.image.startsWith("camera:")?g.image.slice(7):null;return b`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?b`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!t} @change=${g=>this.updateFurniture({screen_bg:g.target.value})}>
              <option value="black" ?selected=${(e.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${e.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:y}
      ${h.map(g=>b`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${o}
            .value=${g.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!t}
            @change=${v=>{v.stopPropagation(),u(g,{entity:v.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!t}
            title=${this.t("picture_attribute")}
            @change=${v=>{let w=v.target.value||null,$=l(g.entity,w);i(n.map((k,x)=>g.rows.includes(x)?{...k,attribute:w,state:g.rows[0]===x?$:k.state}:k))}}
          >
            <option value="" ?selected=${!g.attribute}>${this.t("picture_state_of")}</option>
            ${s(g.entity).map(v=>b`<option value=${v} ?selected=${v===g.attribute}>${v}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(g.entity,g.attribute)||"\u2013"})}</span>
          ${g.rows.map(v=>{let w=n[v],$=!!this.hass&&Sa(this.hass,w);return b`<div class="fp3d-picture-row ${$?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${v}"
                placeholder=${this.t("picture_state")}
                .value=${w.state}
                ?disabled=${!t}
                @change=${k=>p(v,{state:k.target.value})}
              />
              <datalist id="fp3d-picture-states-${v}"><option value="*"></option>${d(g.entity,g.attribute).map(k=>b`<option value=${k}></option>`)}</datalist>
              ${this._images[w.image]?b`<img class="fp3d-picture-thumb" src=${this._images[w.image].url} alt="" /> `:y}
              ${_(w)&&this.hass?.states[_(w)]?.attributes.entity_picture?b`<img class="fp3d-picture-thumb" src=${String(this.hass.states[_(w)].attributes.entity_picture)} alt="" />`:y}
              <label class="fp3d-btn fp3d-picture-pick">
                ${w.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!t} @change=${k=>{this.uploadPicture(k,e,v)}} />
              </label>
              ${f.filter(k=>k!==w.image).length?b`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${f.filter(k=>k!==w.image&&this._images[k]).map(k=>b`<button class="fp3d-picture-reuse-btn" ?disabled=${!t} @click=${()=>p(v,{image:k})}><img src=${this._images[k].url} alt="" /></button>`)}
                  </div>`:y}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(w.image)?w.image:""}
                ?disabled=${!t}
                @change=${k=>{let x=k.target.value.trim();x&&p(v,{image:x})}}
              />
              ${m.length?b`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${m}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${_(w)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!t}
                    @change=${k=>{k.stopPropagation(),k.detail.value!=="none"?p(v,{image:`camera:${k.detail.value}`}):_(w)&&p(v,{image:""})}}
                  ></fp3d-entity-picker>`:y}
              <span class="fp3d-sub">${$?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>i(n.filter((k,x)=>x!==v))}>✕</button>
            </div>`})}
          ${t?b`<button class="fp3d-btn" @click=${()=>i([...n,{entity:g.entity,attribute:g.attribute,state:l(g.entity,g.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:y}
        </div>`)}
      ${t?b`<button class="fp3d-btn" @click=${()=>i([...n,{entity:o[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:y}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(e,t,n){let i=e.target,o=i.files?.[0];if(i.value="",!o)return;let r=await createImageBitmap(o),s=Math.min(1,512/Math.max(r.width,r.height)),l=document.createElement("canvas");l.width=Math.round(r.width*s),l.height=Math.round(r.height*s),l.getContext("2d").drawImage(r,0,0,l.width,l.height);let d=l.toDataURL(o.type==="image/png"?"image/png":"image/jpeg",.85),c=G("pic");await gi(this.hass,c,d),this._images={...this._images,[c]:{url:d,aspect:l.height/l.width}};let h=this.furnitureItem?.id===t.id?this.furnitureItem.pictures??[]:t.pictures??[];this.updateFurniture({pictures:h.map((u,p)=>p===n?{...u,image:c}:u)})}renderFurnitureLibrary(){let e=this.room,t=this._furnQuery.trim().toLowerCase(),n=this.hass?.language??"en";return b`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${e?this.t("furniture_into",{room:e.name}):this.t("furniture_pick_room")}</p>
      <input
        class="fp3d-search"
        type="search"
        placeholder=${this.t("furniture_search")}
        .value=${this._furnQuery}
        @input=${i=>this._furnQuery=i.target.value}
        @keydown=${i=>{i.key==="Escape"&&(this._furnQuery="")}}
      />
      ${t&&!this.libraryHasHits(t)?b`<p class="fp3d-sub">${this.t("furniture_search_none")}</p>`:y}
      ${Object.entries(Eo).map(([i,o])=>this.librarySection(`group:${i}`,this.t(`furn_group_${i}`),[...o,...i==="kitchen"&&fe("fridge_smart")?["fridge_smart"]:[]].map(r=>({type:r,label:this.t(`furn_${r}`),search:je(ro,`furn_${r}`)})),t))}
      ${(this.packs??[]).filter(i=>i.items.length).map(i=>this.librarySection(`pack:${i.id}`,De(i,n),i.items.map(o=>({type:Dt(i.id,o.id),label:nt(o,n),search:Object.values(o.name).join(" ")})),t))}
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(e,t){let n=o=>{this.showPreview(e,o.currentTarget)},i=Le(e)?"light":Rn(e)?"switch":null;return b`<button
      class="fp3d-btn ${i?"fp3d-lib-electric":""}"
      title=${i?this.t(i==="light"?"lib_badge_light":"lib_badge_electric"):t}
      @click=${()=>this.addFurniture(e)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${t}
      ${i?b`<svg class="fp3d-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Un(i)} />
          </svg>`:y}
    </button>`}async showPreview(e,t){let n=t.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:e,url:null,...i};try{let o=await no(),[r,s,l]=Te(e),d=o.furniturePreview({type:e,w:r,d:s,h:l,variant:null,lamp:Fi[e]??null},180,this.packs??[]);this._preview?.type===e&&(this._preview={type:e,url:d,...i})}catch{this._preview=null}}renderPreview(){let e=this._preview;return e?b`<div class="fp3d-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
      ${e.url?b`<img src=${e.url} alt="" />`:b`<span class="fp3d-preview-wait"></span>`}
      <b>${Et(this.hass,e.type)}</b>
    </div>`:y}renderDeviceForm(e){let t=this.isAdmin,n=te(e.entity_id),i=n==="light",o=e.mount??"ceiling",r=n?Ti(n,this.floor?Se(this.floor,Dn(this.floor,e.x,e.z)):2.5,i?o:null):1;return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",e.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?Un(n):""} />
        </svg>
        ${ge(this.hass,e.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?b`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!t} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(s=>b`<option value=${s} ?selected=${s===o}>${this.t(`lamp_${s}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(e.glow_scale,s=>this.updateDevice({glow_scale:s}))}`:n==="camera"?b`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!t} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
                  <option value="wall" ?selected=${(e.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${e.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:y}
        ${this.len(this.t("x"),e.x,s=>this.updateDevice({x:s}))} ${this.len(this.t("z"),e.z,s=>this.updateDevice({z:s}))}
        ${this.len(this.t("marker_height"),e.y??r,s=>this.updateDevice({y:Math.max(0,s)}),.05,0)}
        ${this.num(this.t("rotation"),e.rotation??0,s=>this.updateDevice({rotation:(s%360+360)%360}),1)}
        ${n==="camera"?b`${this.num(this.t("camera_fov"),e.fov??(e.mount==="ceiling"?360:90),s=>this.updateDevice({fov:Math.min(360,Math.max(10,s))}),5,10)}
            ${this.len(this.t("camera_reach"),e.reach??(e.mount==="ceiling"?3:4.5),s=>this.updateDevice({reach:Math.min(50,Math.max(.5,s))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),e.tilt??(e.mount==="ceiling"?65:20),s=>this.updateDevice({tilt:Math.min(90,Math.max(0,s))}),5,0)}
            <label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${e.cone!==!1} ?disabled=${!t} @change=${s=>this.updateDevice({cone:s.target.checked?null:!1})} />
              ${this.t("camera_cone")}</label
            >
            <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_pins_hint")}
              ><input type="checkbox" .checked=${e.detect_pins!==!1} ?disabled=${!t} @change=${s=>this.updateDevice({detect_pins:s.target.checked?null:!1})} />
              ${this.t("camera_detect_pins")}</label
            >
            <p class="fp3d-sub fp3d-wide">${this.t("camera_aim_hint")}</p>
            ${this.renderCameraDetections(e.entity_id)}`:y}
        ${n&&_a.has(n)?b`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!t} @change=${s=>this.updateDevice({confirm:s.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:y}
        ${fe("energy_pro")&&Ul(this.hass,e.entity_id)?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!e.holo} ?disabled=${!t} @change=${s=>this.updateDevice({holo:s.target.checked||void 0})} />
              ${this.t("furn_holo")}</label
            >`:y}
        ${this.markerSelect(e.marker??null,s=>this.updateDevice({marker:s}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${e.name??""} ?disabled=${!t} maxlength="60" placeholder=${ge(this.hass,e.entity_id)} @change=${s=>this.updateDevice({name:s.target.value.trim()||null})}
        /></label>
        ${e.name?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${s=>this.updateDevice({show_name:s.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:y}
        ${this.iconInput(e.icon,s=>this.updateDevice({icon:s}))}
      </div>
      ${t?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${e.y!==null?b`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:y}
            ${this.renderAsFurniture(e)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(e.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:y}
    </section>`}renderDeviceList(e){let t=this.isAdmin,n=this.hass,i=e.area_id?n?.areas?.[e.area_id]?.name:void 0,o=n?ot(n,e.area_id).filter(k=>an(te(k))):[],r=new Set([...this.floor?.placements.filter(k=>K([k.x,k.z],e.points)).map(k=>k.entity_id)??[],...this.floor?.furniture.filter(k=>Le(k.type)&&k.entity&&K([k.x,k.z],e.points)).map(k=>k.entity)??[]]),s=n?Bo(n,o):[],l=s.map(k=>k.primary).filter(k=>!r.has(k)),d=this._deviceQuery.trim().toLowerCase(),c=k=>!d||ge(n,k,i).toLowerCase().includes(d)||k.includes(d),h=this.floor?.placements.filter(k=>te(k.entity_id)==="light"&&(k.mount??"ceiling")==="ceiling"&&K([k.x,k.z],e.points)).length,u=new Set(e.panel??[]),p=new Set(e.hidden??[]),f=new Set(e.no_state??[]),m=new Map;for(let k of this._doc.floors)for(let x of[...k.placements.map(z=>[z.entity_id,z.x,z.z]),...k.furniture.filter(z=>Le(z.type)&&z.entity).map(z=>[z.entity,z.x,z.z])]){let z=k.rooms.find(S=>K([x[1],x[2]],S.points));z&&z.id!==e.id&&m.set(x[0],z.name)}let _=(k,x=!1,z=i)=>{let S=r.has(k),A=S?void 0:m.get(k);return b`<div class="fp3d-row fp3d-dev-row ${x?"fp3d-dev-extra":""} ${p.has(k)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${S?"":"fp3d-muted"}" ?disabled=${!S} @click=${()=>this.selectItem("device",k)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Un(te(k))} />
          </svg>
          <span>${ge(n,k,z)}${A?b`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:A})}</small>`:y}</span>
        </button>
        ${t&&!x?b`<button
              class="fp3d-pin ${p.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${p.has(k)}
              title=${this.t(p.has(k)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:p.has(k)?[...p].filter(P=>P!==k):[...p,k]})}
            >
              ${p.has(k)?"\u{1F648}":"\u{1F441}"}
            </button>`:y}
        ${t&&!x&&!p.has(k)?b`<button
              class="fp3d-pin ${f.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(k)}
              title=${this.t(f.has(k)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:f.has(k)?[...f].filter(P=>P!==k):[...f,k]})}
            >
              ${f.has(k)?"\u2205":"Aa"}
            </button>`:y}
        ${t&&!S?b`<button
              class="fp3d-pin ${u.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${u.has(k)}
              title=${this.t(u.has(k)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:u.has(k)?[...u].filter(P=>P!==k):[...u,k]})}
            >
              ${u.has(k)?"\u2605":"\u2606"}
            </button>`:y}
        ${t?S?b`<button class="fp3d-link" @click=${()=>this.removeDevice(k)}>${this.t("devices_remove")}</button>`:b`<button class="fp3d-link" @click=${()=>this.placeDevices([k])}>${this.t("devices_place")}</button>`:y}
      </div>`},g=t?this._devSource:"area",v=k=>{this._devSource=k,this._deviceQuery=""},w=b`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${k=>this._deviceQuery=k.target.value}
    />`,$=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return b`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${t?b`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${g==="area"} @click=${()=>v("area")}>${this.t("devices_src_area")}${o.length?` (${s.length})`:""}</button>
            <button aria-pressed=${g==="other"} @click=${()=>v("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${g==="none"} @click=${()=>v("none")}>${this.t("devices_src_none")}</button>
          </div>`:y}
      ${g!=="area"?b`${w}${this.renderDeviceExtras(e,_,g)}`:e.area_id?o.length?b`${t&&(h??0)>=2?b`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(e)}>${this.t("lights_spread")}</button>`:y}
              ${o.length>8?w:y}
              <div class="fp3d-room-list">
                ${s.map(k=>{let x=k.others.filter(c),z=this._expanded.has(k.primary)||!!d&&x.length>0;return!c(k.primary)&&!x.length?y:b`${_(k.primary)}
                  ${k.others.length?b`<button
                        class="fp3d-more"
                        @click=${()=>{let S=new Set(this._expanded);S.has(k.primary)?S.delete(k.primary):S.add(k.primary),this._expanded=S}}
                      >
                        ${z?this.t("devices_less"):this.t("devices_more",{n:k.others.length})}
                      </button>`:y}
                  ${z?(d?x:k.others).map(S=>_(S,!0)):y}`})}
              </div>
              ${t&&l.length>1?b`<button class="fp3d-link fp3d-place-all" @click=${$}>${this.t("devices_place_all_n",{n:l.length})}</button>`:y}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`:b`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(e,t,n){let i=this.hass;if(!i)return y;let o=50,r=this._deviceQuery.trim().toLowerCase(),s=(c,h)=>!r||`${ge(i,c,h)} ${c} ${h??""}`.toLowerCase().includes(r),l=c=>c>0?b`<p class="fp3d-sub">${this.t("devices_narrow",{n:c})}</p>`:y;if(n==="other"){let c=0,h=0,u=ba(i,e.area_id).map(p=>{let f=p.ids.filter(_=>s(_,p.name)),m=f.slice(0,Math.max(0,o-c));return c+=m.length,h+=f.length-m.length,m.length?b`<div class="fp3d-dev-area">${p.name}</div>${m.map(_=>t(_,!1,p.name))}`:y});return c?b`<div class="fp3d-room-list">${u}</div>${l(h)}`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let d=va(i).filter(c=>s(c));return d.length?b`<div class="fp3d-room-list">${d.slice(0,o).map(c=>t(c))}</div>${l(d.length-Math.min(d.length,o))}`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(e){let t=this.hass;if(!t)return y;let n=(r,s)=>{let l={...e.climate??{},[r]:s},d=Object.values(l).every(c=>c==null);this.updateRoom({climate:d?null:l})},i=!!e.climate&&Object.values(e.climate).some(r=>r!=null),o=(r,s)=>{let l=Lo[r],d=wa(t,this.floor??null,{...e,climate:null},r),c=Oo[r],h=this.entityOptions(u=>Ae(u)&&t.states[u]?.attributes.device_class===l||!!c&&u.startsWith("climate.")&&typeof t.states[u]?.attributes[c]=="number").map(u=>({...u,rank:(Ot(t,u.id)===e.area_id?0:1)+(Wo(t,u.id)?0:2)})).sort((u,p)=>u.rank-p.rank).map(({id:u,label:p})=>({id:u,label:p}));return this.entitySelect(s,e.climate?.[r]??null,d[0]??null,h,u=>n(r,u))};return b`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${o("temperature",this.t("climate_temperature"))} ${o("humidity",this.t("climate_humidity"))} ${o("co2",this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(e){let t=e.background;return b`<details class="fp3d-section" ?open=${this._bgOpen} @toggle=${n=>this._bgOpen=n.target.open}>
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${t?b`${this.len(this.t("x"),t.x,n=>this.updateFloor({background:{...t,x:n}}))}
              ${this.len(this.t("z"),t.z,n=>this.updateFloor({background:{...t,z:n}}))}
              ${this.len(this.t("background_width"),t.width,n=>this.updateFloor({background:{...t,width:Math.max(.1,n)}}),.01,.1)}
              ${this.num(this.t("background_rotation"),t.rotation??0,n=>this.updateFloor({background:{...t,rotation:Math.round(n*10)/10}}),.5)}
              ${this.isAdmin?b`<button
                      class="fp3d-btn fp3d-wide ${this._bgEdit?"fp3d-primary":""}"
                      aria-pressed=${this._bgEdit}
                      @click=${()=>{this._bgEdit=!this._bgEdit,this._bgEdit&&(this._tool="select")}}
                    >
                      ${this.t(this._bgEdit?"background_edit_done":"background_edit")}
                    </button>
                    <p class="fp3d-sub fp3d-wide">${this.t(this._bgEdit?"background_handles_hint":"background_fixed_hint")}</p>
                  <button class="fp3d-btn fp3d-wide ${this._bgLevel?"fp3d-primary":""}" aria-pressed=${!!this._bgLevel} @click=${()=>{this._bgLevel=this._bgLevel?null:[],this._bgRuler=null,this._bgEdit=!1}}>📐 ${this.t(this._bgLevel?"bg_level_cancel":"bg_level")}</button>
                  ${this._bgLevel?b`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length?"bg_level_second":"bg_level_first")}</p>`:y}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler?"fp3d-primary":""}" aria-pressed=${!!this._bgRuler} @click=${()=>{this._bgRuler=this._bgRuler?null:[],this._bgLevel=null,this._bgEdit=!1}}>📏 ${this.t(this._bgRuler?"bg_ruler_cancel":"bg_ruler")}</button>
                  ${this._bgRuler?this._bgRuler.length<2?b`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length?"bg_ruler_second":"bg_ruler_first")}</p>`:b`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint",{m:this.m(Math.hypot(this._bgRuler[1][0]-this._bgRuler[0][0],this._bgRuler[1][1]-this._bgRuler[0][1]))})}</p>
                          <label class="fp3d-field"
                            >${Vn(this.t("bg_ruler_length"),this.unit)}
                            <input type=${this.unit==="imperial"?"text":"number"} min="0.01" step="0.01" .value=${this._bgRulerLen?this.lenValue(this._bgRulerLen):""} @input=${n=>this._bgRulerLen=this.readLen(n.target.value)??0} @keydown=${n=>n.key==="Enter"&&this.applyBgRuler(this._bgRulerLen)}
                          /></label>
                          <button class="fp3d-btn fp3d-primary" ?disabled=${!(this._bgRulerLen>0)} @click=${()=>this.applyBgRuler(this._bgRulerLen)}>${this.t("bg_ruler_apply")}</button>`:y}`:y}
              <label class="fp3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(t.opacity)}
                  @change=${n=>this.updateFloor({background:{...t,opacity:parseFloat(n.target.value)}})}
              /></label>
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:y}
      </div>
    </details>`}async loadDiagnostics(){if(this.hass)try{this._diag=await xr(this.hass)}catch{this._diag="error"}}async changeDiagnostics(e){if(!(!this.hass||this._diagBusy)&&!(e==="delete"&&!confirm(this.t("diag_delete_confirm")))){this._diagBusy=!0,this._diagNote="";try{this._diag=e==="delete"?await Mr(this.hass):await Sr(this.hass,e==="on"),e==="delete"&&(this._diagNote=this.t("diag_deleted")),window.dispatchEvent(new CustomEvent("neonplan3d-diagnostics",{detail:{enabled:this._diag.enabled}}))}catch{this._diagNote=this.t(e==="delete"?"diag_delete_failed":"save_error")}this._diagBusy=!1}}renderDiagnostics(){let e=this._diag,t=e!==null&&e!=="error"&&e.enabled;return b`<details
      class="fp3d-section"
      @toggle=${n=>{n.target.open&&this.loadDiagnostics()}}
    >
      <summary>${this.t("diag_title")}</summary>
      <p class="fp3d-sub">${this.t("diag_intro")}</p>
      <p class="fp3d-sub"><b>${this.t("diag_sent_head")}</b> ${this.t("diag_sent")}</p>
      <p class="fp3d-sub"><b>${this.t("diag_never_head")}</b> ${this.t("diag_never")}</p>
      <p class="fp3d-sub">
        ${this.t("diag_voluntary")}
        <a href="https://mastershort.de/datenschutz/" target="_blank" rel="noopener noreferrer">${this.t("diag_privacy")}</a>
      </p>
      ${e===null?b`<p class="fp3d-sub">${this.t("loading")}</p>`:e==="error"?b`<p class="fp3d-sub">${this.t("diag_unavailable")}</p>`:b`<label class="fp3d-check fp3d-wide"
                ><input type="checkbox" .checked=${t} ?disabled=${this._diagBusy} @change=${n=>{this.changeDiagnostics(n.target.checked?"on":"off")}} />
                ${this.t("diag_switch")}</label
              >
              <div class="fp3d-actions">
                <button class="fp3d-btn" @click=${()=>this._diagView=!0}>${this.t("diag_view")}</button>
                <button class="fp3d-btn" ?disabled=${this._diagBusy||!t&&!e.can_delete} @click=${()=>{this.changeDiagnostics("delete")}}>${this.t("diag_delete")}</button>
              </div>`}
      ${this._diagNote?b`<p class="fp3d-sub">${this._diagNote}</p>`:y}
    </details>`}renderDiagnosticsView(){let e=this._diag;if(!this._diagView||!e||e==="error")return y;let t=e.enabled;return b`<div class="fp3d-wv-veil" @click=${n=>n.target===n.currentTarget&&(this._diagView=!1)}>
      <div class="fp3d-wv fp3d-diag" role="dialog" aria-label=${this.t("diag_view")}>
        <h4 class="fp3d-lib-head">${this.t("diag_view_head")}</h4>
        <pre class="fp3d-diag-json">${JSON.stringify(e.preview,null,2)}</pre>
        <p class="fp3d-sub">${this.t(t?"diag_view_hint_on":"diag_view_hint_off")}</p>
        <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this._diagView=!1}>${this.t("close")}</button></div>
      </div>
    </div>`}async loadHistory(){if(this.hass)try{this._history=await dr(this.hass)}catch{this._history=[]}}async restoreFromHistory(e){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(e)}))||(await hr(this.hass,e.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let e=await yr(this.hass),t={};for(let i of ca(e.building))try{t[i]=await wo(this.hass,i)}catch{}let n=new Date().toISOString().slice(0,10);To(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...e,exported_at:new Date().toISOString(),images:t}))}catch(e){alert(this.t("backup_import_error",{error:String(e?.message??e)}))}finally{this._backupBusy=!1}}}async importBackup(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if(i?.format!=="neonplan3d-backup"||!i.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let o=await kr(this.hass,i.building,i.packs??[]),r=0;for(let[l,d]of Object.entries(i.images??{}))try{await gi(this.hass,l,d),r++}catch{}this.setDoc(Ei(o.building)),this._floorId=o.building.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=o.skipped.length?` ${this.t("backup_full_skipped",{packs:o.skipped.map(l=>l.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:o.packs,pictures:r})+s}catch(o){let{code:r,message:s}=o??{};alert(this.t("backup_import_error",{error:s??r??String(o)}))}finally{this._backupBusy=!1}}}exportPlan(e){let t=new Date().toISOString().slice(0,10);To(`neonplan3d-${this.t(e?"export_name_template":"export_name_backup")}-${t}.json`,JSON.stringify(la(this._doc,e),null,2))}async importPlan(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=da(await n.text())}catch(o){let r=o.message;alert(r==="not_json"?this.t("import_error_not_json"):r==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:r}));return}confirm(this.t("backup_import_confirm"))&&(await cr(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(e){return new Date(e.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return b`<details
      class="fp3d-section"
      @toggle=${e=>{e.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?b`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?b`<div class="fp3d-room-list">
              ${this._history.map(e=>b`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(e)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:e.rooms,furniture:e.furniture})}</span></span>
                  <button class="fp3d-link" @click=${()=>this.restoreFromHistory(e)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:b`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("backup_file")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.exportPlan(!1)}>${this.t("backup_export")}</button>
        <button class="fp3d-btn" title=${this.t("backup_export_share_hint")} @click=${()=>this.exportPlan(!0)}>${this.t("backup_export_share")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_hint")}</p>
      <h4 class="fp3d-lib-head">${this.t("backup_full")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${this._backupBusy} @click=${()=>this.exportBackup()}>${this._backupBusy?"\u2026":this.t("backup_full_export")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_full_import")}<input type="file" accept="application/json,.json" @change=${this.importBackup}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_full_hint")}</p>
    </details>`}renderSettings(){let e=this._doc.settings,t=n=>{let i=structuredClone(this._doc);Object.assign(i.settings,n),this.setDoc(i)};return b`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.len(this.t("wall_exterior"),e.wall_exterior,n=>t({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("wall_interior"),e.wall_interior,n=>t({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("grid"),e.grid,n=>t({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        <label class="fp3d-field" title=${this.t("units_hint")}
          >${this.t("units")}
          <select @change=${n=>{let i=n.target.value;t({units:i==="metric"||i==="imperial"?i:null})}}>
            <option value="auto" ?selected=${!e.units}>${this.t("units_auto",{unit:this.t(Uo(this.hass,null)==="imperial"?"units_imperial":"units_metric")})}</option>
            <option value="metric" ?selected=${e.units==="metric"}>${this.t("units_metric")}</option>
            <option value="imperial" ?selected=${e.units==="imperial"}>${this.t("units_imperial")}</option>
          </select></label
        >
        ${this.num(this.t("north"),e.north,n=>t({north:(Math.round(n)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select
            @change=${n=>{let i=n.target.value;i==="custom"?(this.useRoofSections(),this._tool="roof"):t({roof:{...e.roof,type:i}})}}
          >
            ${["none","flat","gable","custom"].map(n=>b`<option value=${n} ?selected=${n===e.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${e.roof.type==="gable"?b`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>t({roof:{...e.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${e.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${e.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:y}
        ${e.roof.type==="gable"?this.num(this.t("roof_pitch"),e.roof.pitch,n=>t({roof:{...e.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):y}
        ${e.roof.type!=="none"?this.len(this.t("roof_overhang"),e.roof.overhang,n=>t({roof:{...e.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):y}
        ${this.hass?this.entitySelect(this.t("weather_entity"),e.weather_entity??null,Qa(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>t({weather_entity:n})):y}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${jr.map(n=>{let i=e.weather_effects??xo;return b`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${i.includes(n)}
              @change=${o=>{let r=o.target.checked;t({weather_effects:r?[...new Set([...i,n])]:i.filter(s=>s!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.rain_warning!==!1} @change=${n=>t({rain_warning:n.target.checked})} />
          ${this.t("rain_warning")}</label
        >
        ${this.hass?b`${this.entitySelect(this.t("rain_entity"),e.rain_entity??null,void 0,this.entityOptions(n=>el(this.hass,n)),n=>t({rain_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("rain_entity_hint")}</p>`:y}
        <label class="fp3d-check fp3d-wide" title=${this.t("alert_names_hint")}
          ><input type="checkbox" .checked=${e.alert_names!==!1} @change=${n=>t({alert_names:n.target.checked})} />
          ${this.t("alert_names")}</label
        >
        ${this.hass?b`${this.entitySelect(this.t("outage_entity"),e.outage_entity??null,void 0,this.entityOptions(n=>/^(binary_sensor|sensor|input_boolean|switch)\./.test(n)),n=>t({outage_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("outage_entity_hint")}</p>`:y}
        <label class="fp3d-check fp3d-wide" title=${this.t("sun_patches_hint")}
          ><input type="checkbox" .checked=${e.sun_patches!==!1} @change=${n=>t({sun_patches:n.target.checked})} />
          ${this.t("sun_patches")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("north_hint")} ${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[yn,to,tt`
      :host {
        display: block;
        height: 100%;
      }
      .fp3d-editor {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 320px;
        height: 100%;
        min-height: 0;
      }
      .fp3d-editor:has(> .fp3d-side-strip) {
        grid-template-columns: 1fr 52px;
      }
      .fp3d-side-strip {
        padding: 10px 6px;
        gap: 8px;
        align-items: center;
      }
      .fp3d-strip-btn {
        width: 40px;
        height: 40px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 18px;
        cursor: pointer;
      }
      .fp3d-strip-hot {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-side-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(340px, 60%);
        z-index: 6;
        box-shadow: -12px 0 32px rgba(0, 0, 0, 0.45);
      }
      .fp3d-pin-row {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }
      .fp3d-3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--fp3d-muted);
        font-size: 12px;
      }
      .fp3d-3d-size input {
        width: 58px;
        padding: 4px 6px;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-3d-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-editor.fp3d-narrow {
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: minmax(360px, 62vh) auto;
        height: auto;
      }
      .fp3d-main {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: auto 1fr;
        /* the column never grows with a wide toolbar (that would push the plan under the sidebar) */
        grid-template-columns: minmax(0, 1fr);
        min-height: 0;
        min-width: 0;
      }
      .fp3d-toolbar {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        padding: 10px 12px;
      }
      .fp3d-shape-controls {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        flex-basis: 100%;
      }
      .fp3d-narrow .fp3d-toolbar > .fp3d-seg,
      .fp3d-narrow .fp3d-shape-controls > .fp3d-seg {
        max-width: 100%;
        overflow-x: auto;
      }
      .fp3d-pick-tip {
        position: absolute;
        z-index: 5;
        transform: translateX(-50%);
        white-space: nowrap;
        padding: 8px 12px;
        border-radius: 10px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
        font-size: 13px;
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.45), 0 0 16px rgba(55, 224, 255, 0.45);
        cursor: pointer;
        animation: fp3d-tip-in 0.18s ease-out;
      }
      .fp3d-pick-tip::before {
        content: "";
        position: absolute;
        left: 50%;
        top: -6px;
        margin-left: -6px;
        border: 6px solid transparent;
        border-top: 0;
        border-bottom-color: var(--fp3d-accent);
      }
      @keyframes fp3d-tip-in {
        from {
          opacity: 0;
          transform: translate(-50%, -4px);
        }
      }
      /* the tool row scrolls sideways when it is wider than the plan (it must never push into the sidebar) */
      .fp3d-toolbar > .fp3d-seg {
        max-width: 100%;
        overflow-x: auto;
        scrollbar-width: none;
      }
      .fp3d-toolbar > .fp3d-seg::-webkit-scrollbar {
        display: none;
      }
      .fp3d-toolbar > .fp3d-seg > button {
        flex: none;
      }
      .fp3d-warn {
        color: var(--fp3d-warm);
        font-size: 12.5px;
      }
      .fp3d-picture-group {
        display: grid;
        gap: 6px;
        margin: 6px 0 10px;
        padding: 8px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
      }
      .fp3d-picture-group > select {
        min-width: 0;
      }
      .fp3d-picture-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
        padding: 6px;
        border-radius: 8px;
        background: color-mix(in srgb, var(--fp3d-line) 40%, transparent);
      }
      .fp3d-picture-row input[type="url"] {
        grid-column: 1 / -1;
        min-width: 0;
      }
      .fp3d-picture-row > .fp3d-sub,
      .fp3d-picture-row > .fp3d-picture-camera {
        grid-column: 1 / -1;
      }
      .fp3d-picture-row.fp3d-rule-hit {
        outline: 1px solid var(--fp3d-accent);
      }
      .fp3d-rule-now {
        grid-column: 1 / -1;
      }
      .fp3d-rule-hit {
        color: var(--fp3d-accent);
      }
      .fp3d-picture-reuse {
        grid-column: 1 / -1;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .fp3d-picture-reuse-btn {
        padding: 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 6px;
        background: var(--fp3d-chrome-solid);
        cursor: pointer;
      }
      .fp3d-picture-reuse-btn img {
        display: block;
        height: 28px;
        max-width: 60px;
        object-fit: contain;
      }
      .fp3d-picture-reuse-btn:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-picture-thumb {
        max-height: 60px;
        max-width: 100%;
        border-radius: 6px;
        justify-self: start;
      }
      .fp3d-picture-pick {
        justify-self: start;
      }
      .fp3d-parking-row {
        display: flex;
        gap: 6px;
        align-items: center;
        margin: 4px 0;
      }
      .fp3d-parking-row input,
      .fp3d-parking-row select {
        flex: 1;
        min-width: 0;
      }
      .fp3d-stage-pair {
        display: flex;
        min-height: 0;
        min-width: 0;
      }
      .fp3d-stage-pair > .fp3d-canvas-wrap {
        flex: 1 1 var(--fp3d-split, 55%);
        min-width: 0;
      }
      .fp3d-split > .fp3d-canvas-wrap {
        flex: 0 0 var(--fp3d-split, 55%);
      }
      .fp3d-split-handle {
        flex: 0 0 8px;
        cursor: col-resize;
        background: var(--fp3d-line);
        touch-action: none;
      }
      .fp3d-split-handle:hover {
        background: var(--fp3d-accent);
      }
      .fp3d-editor-3d {
        position: relative;
        flex: 1 1 0;
        min-width: 240px;
        min-height: 0;
        border-left: 1px solid var(--fp3d-line);
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-editor-3d fp3d-view3d {
        display: block;
        height: 100%;
      }
      .fp3d-3d-walls {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 3;
      }
      .fp3d-3d-bar {
        position: absolute;
        left: 50%;
        bottom: 12px;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 6px 8px 6px 14px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger, #ff6b7a);
      }
      .fp3d-narrow .fp3d-stage-pair.fp3d-split {
        flex-direction: column;
      }
      .fp3d-narrow .fp3d-split > .fp3d-canvas-wrap {
        flex: 1 1 auto;
      }
      .fp3d-narrow .fp3d-editor-3d {
        flex: 0 0 42%;
        min-width: 0;
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-canvas-wrap {
        position: relative;
        min-height: 0;
        overflow: hidden;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-bg2), var(--fp3d-bg) 75%);
      }
      svg.fp3d-plan {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        touch-action: none;
        user-select: none;
        -webkit-user-select: none;
        cursor: default;
      }
      svg.fp3d-tool-rect,
      svg.fp3d-tool-polygon {
        cursor: crosshair;
      }
      .fp3d-grid-minor {
        stroke: rgba(55, 224, 255, 0.05);
        stroke-width: 1;
      }
      .fp3d-grid-major {
        stroke: rgba(91, 124, 255, 0.16);
        stroke-width: 1;
      }
      .fp3d-origin {
        fill: rgba(91, 124, 255, 0.5);
      }
      .fp3d-ghost {
        fill: none;
        stroke: rgba(138, 155, 184, 0.35);
        stroke-dasharray: 4 4;
      }
      .fp3d-wall {
        fill: #1b2a47;
      }
      .fp3d-wall-ext {
        fill: #22345a;
      }
      .fp3d-room {
        fill: rgba(55, 224, 255, 0.05);
        stroke: rgba(55, 224, 255, 0.75);
        stroke-width: 1.5;
        stroke-linejoin: round;
        cursor: pointer;
      }
      .fp3d-room:hover {
        fill: rgba(55, 224, 255, 0.09);
      }
      .fp3d-room-sel {
        fill: rgba(55, 224, 255, 0.14);
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
      }
      .fp3d-room-name {
        fill: var(--fp3d-text);
        font: 600 13px var(--fp3d-title-font);
        text-anchor: middle;
      }
      .fp3d-room-area {
        fill: var(--fp3d-muted);
        font: 500 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-dim {
        fill: var(--fp3d-accent);
        font: 600 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
        paint-order: stroke;
        stroke: var(--fp3d-bg);
        stroke-width: 3px;
      }
      .fp3d-vertex circle:not(.fp3d-hit) {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-vertex-sel circle:not(.fp3d-hit) {
        fill: var(--fp3d-accent);
      }
      .fp3d-vertex,
      .fp3d-mid {
        cursor: grab;
      }
      .fp3d-level-steps polygon {
        fill: rgba(55, 224, 255, 0.1);
        stroke: var(--fp3d-accent);
        stroke-width: 1;
      }
      .fp3d-level-steps line {
        stroke: var(--fp3d-accent);
        stroke-width: 1;
      }
      .fp3d-hit {
        fill: transparent;
      }
      .fp3d-mid circle:not(.fp3d-hit) {
        fill: rgba(91, 124, 255, 0.35);
        stroke: var(--fp3d-soft);
      }
      .fp3d-mid path {
        stroke: var(--fp3d-text);
        stroke-width: 1.5;
      }
      .fp3d-draft {
        fill: rgba(255, 181, 71, 0.08);
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      polyline.fp3d-draft {
        fill: none;
      }
      .fp3d-draft-pt {
        fill: var(--fp3d-warm);
      }
      .fp3d-draft-first {
        fill: transparent;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
      }
      .fp3d-cursor {
        fill: var(--fp3d-warm);
      }
      .fp3d-guide {
        stroke: rgba(255, 95, 210, 0.55);
        stroke-dasharray: 3 5;
      }
      .fp3d-snap {
        fill: none;
        stroke: #ff5fd2;
        stroke-width: 2;
      }
      .fp3d-hint {
        position: absolute;
        left: 12px;
        right: 12px;
        bottom: 8px;
        margin: 0;
        font-size: 12px;
        color: var(--fp3d-muted);
        pointer-events: none;
      }
      .fp3d-side {
        border-left: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        overflow-y: auto;
        padding: 12px 14px 24px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        min-height: 0;
      }
      .fp3d-narrow .fp3d-side {
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      h3,
      summary {
        margin: 0 0 8px;
        font-size: 11.5px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-muted);
        font-weight: 600;
      }
      summary {
        cursor: pointer;
        margin: 0;
      }
      details[open] > summary {
        margin-bottom: 8px;
      }
      .fp3d-floor-list,
      .fp3d-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-floor-list .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
      }
      .fp3d-wide {
        grid-column: 1 / -1;
      }
      .fp3d-room-list {
        display: grid;
        gap: 2px;
      }
      .fp3d-row {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: none;
        border-bottom: 1px solid var(--fp3d-line);
        padding: 9px 2px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-row:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-check input {
        accent-color: var(--fp3d-accent);
      }
      .fp3d-meter rect {
        fill: #2a2a10;
        stroke: #ffc633;
        stroke-width: 1.5;
      }
      .fp3d-meter path {
        fill: #ffc633;
      }
      .fp3d-packages {
        display: grid;
        gap: 6px;
        margin-top: 10px;
      }
      .fp3d-packages .fp3d-btn {
        display: grid;
        text-align: left;
        gap: 2px;
      }
      .fp3d-packages .fp3d-btn span {
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-arrows {
        display: grid;
        grid-template-columns: repeat(3, 52px);
        grid-template-areas: ". up ." "left . right" ". down .";
        gap: 6px;
        justify-content: center;
      }
      .fp3d-arrows .fp3d-btn {
        font-size: 20px;
        padding: 6px 0;
      }
      .fp3d-arrow-up {
        grid-area: up;
      }
      .fp3d-arrow-left {
        grid-area: left;
      }
      .fp3d-arrow-right {
        grid-area: right;
      }
      .fp3d-arrow-down {
        grid-area: down;
      }
      .fp3d-measure-list {
        margin: 8px 0;
        padding-left: 22px;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-library {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-library .fp3d-btn {
        font-weight: 500;
        font-size: 13px;
      }
      /* the background picture while it is edited: a dashed frame and a corner handle */
      .fp3d-bg-frame {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-bg-handle {
        fill: var(--fp3d-accent);
        stroke: #041018;
        stroke-width: 2;
        cursor: nwse-resize;
      }
      .fp3d-furn-body {
        fill: rgba(91, 124, 255, 0.1);
        stroke: rgba(91, 124, 255, 0.55);
        stroke-width: 1.2;
        vector-effect: non-scaling-stroke;
        cursor: grab;
      }
      .fp3d-furn-sym * {
        fill: none;
        stroke: rgba(150, 175, 255, 0.55);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
        pointer-events: none;
      }
      .fp3d-furn-sym .fp3d-sym-fill {
        fill: rgba(91, 124, 255, 0.28);
      }
      .fp3d-furn-sym .fp3d-sym-strong {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-out polygon {
        fill: rgba(91, 124, 255, 0.06);
        stroke: rgba(91, 124, 255, 0.4);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        cursor: grab;
      }
      .fp3d-out-lawn polygon,
      .fp3d-out-bed polygon,
      .fp3d-out-wild polygon,
      .fp3d-out-hedge polygon {
        fill: rgba(61, 224, 160, 0.1);
        stroke: rgba(61, 224, 160, 0.5);
      }
      .fp3d-out-pool polygon {
        fill: rgba(55, 224, 255, 0.18);
        stroke: var(--fp3d-accent);
      }
      .fp3d-out-terrace polygon {
        fill: rgba(150, 130, 255, 0.12);
      }
      .fp3d-free-wall {
        cursor: grab;
      }
      .fp3d-vertex-no {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 700;
        pointer-events: none;
      }
      /* the opt-in reports: the exact JSON they send */
      .fp3d-wv.fp3d-diag {
        width: min(640px, 100%);
        grid-template-rows: auto minmax(0, 1fr) auto auto;
      }
      .fp3d-diag-json {
        margin: 0;
        overflow: auto;
        padding: 10px;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.3);
        font-size: 12px;
        line-height: 1.4;
        white-space: pre;
      }
      /* the wall view: a room's wall from the front, furniture on it to slide along and up */
      .fp3d-wv-veil {
        position: fixed;
        inset: 0;
        z-index: 60;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(3, 6, 12, 0.6);
      }
      .fp3d-wv {
        width: min(1100px, 100%);
        max-height: calc(100vh - 32px);
        display: grid;
        grid-template-rows: auto minmax(0, 1fr) auto;
        gap: 10px;
        padding: 14px 16px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        outline: none;
      }
      .fp3d-wv-head,
      .fp3d-wv-foot {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .fp3d-wv-foot .fp3d-field {
        width: 170px;
      }
      .fp3d-wv-grow {
        flex: 1;
      }
      .fp3d-pipe-end circle:not(.fp3d-hit) {
        fill: none;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 3 2;
      }
      .fp3d-pipe-end {
        cursor: pointer;
      }
      .fp3d-pool-joint {
        fill: #8a929c;
        stroke: var(--fp3d-bg, #0b1220);
        stroke-width: 1.5;
        pointer-events: none;
      }
      .fp3d-wv-node circle {
        fill: rgba(55, 224, 255, 0.12);
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        stroke-dasharray: 0.03 0.02;
      }
      .fp3d-wv-node text {
        fill: var(--fp3d-accent);
        font-size: 0.055px;
        font-weight: 700;
        text-anchor: middle;
      }
      .fp3d-wv-hole-mark circle {
        fill: #0b1220;
        stroke: var(--fp3d-warm);
        stroke-dasharray: none;
        stroke-width: 0.02;
      }
      .fp3d-wv-hole-mark text {
        fill: var(--fp3d-warm);
      }
      .fp3d-pc-veil {
        z-index: 70;
      }
      .fp3d-pc {
        width: min(760px, 100%);
        max-height: calc(100vh - 32px);
        overflow: auto;
        display: grid;
        gap: 12px;
        padding: 14px 16px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        outline: none;
      }
      .fp3d-pc-title {
        font-size: 17px;
      }
      .fp3d-pc-name {
        font: inherit;
        font-size: 17px;
        font-weight: 700;
        padding: 4px 8px;
        border-radius: 8px;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
        min-width: 0;
        flex: 1;
        max-width: 320px;
      }
      .fp3d-pc-body {
        display: grid;
        grid-template-columns: 220px minmax(0, 1fr);
        gap: 14px;
        align-items: start;
      }
      @media (max-width: 640px) {
        .fp3d-pc-body {
          grid-template-columns: 1fr;
        }
      }
      .fp3d-pc-draw {
        width: 100%;
        border-radius: 12px;
        background: rgba(120, 170, 255, 0.05);
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-pc-body-shape {
        fill: #2a313a;
        stroke: #8a929c;
        stroke-width: 2;
      }
      .fp3d-pc-fan {
        fill: none;
        stroke: #8a929c;
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-pc-wall {
        fill: rgba(120, 170, 255, 0.18);
        stroke: var(--fp3d-line);
      }
      .fp3d-pc-side {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
      }
      .fp3d-pc-stub line {
        stroke: #8a929c;
        stroke-width: 10;
        stroke-dasharray: 6 4;
      }
      .fp3d-pc-stub circle {
        fill: #0b1220;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 3 2;
      }
      .fp3d-pc-stub {
        cursor: pointer;
      }
      .fp3d-pc-stub.fp3d-on line {
        stroke: #8a929c;
        stroke-dasharray: none;
      }
      .fp3d-pc-stub.fp3d-on circle {
        fill: var(--fp3d-accent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      .fp3d-pc-label {
        fill: var(--fp3d-text, #dfe7f5);
        font-size: 11px;
        font-weight: 700;
        text-anchor: middle;
      }
      .fp3d-pc-rows {
        display: grid;
        gap: 8px;
      }
      .fp3d-pc-row {
        display: grid;
        grid-template-columns: 110px minmax(0, 1fr);
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px dashed var(--fp3d-line);
      }
      .fp3d-pc-row.fp3d-on {
        border-style: solid;
        border-color: rgba(55, 224, 255, 0.45);
      }
      .fp3d-pc-conns,
      .fp3d-pc-join {
        display: grid;
        gap: 6px;
      }
      .fp3d-pc-conn {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .fp3d-pc-tools {
        display: inline-flex;
        gap: 6px;
        margin-left: auto;
      }
      .fp3d-pc-chain {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .fp3d-pc-arrow {
        color: var(--fp3d-accent);
        font-weight: 800;
      }
      .fp3d-pc-tile {
        font: inherit;
        font-size: 13px;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.05);
        color: var(--fp3d-text);
      }
      button.fp3d-pc-tile {
        cursor: pointer;
      }
      .fp3d-pc-tile i {
        font-style: normal;
        opacity: 0.6;
        margin-left: 4px;
      }
      .fp3d-pc-start {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-pc-stop {
        border-color: #2f8cff;
      }
      .fp3d-pc-end {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-pc-next {
        border-style: dashed;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-steps {
        display: grid;
        gap: 6px;
        padding-top: 4px;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-pc-target {
        border-color: rgba(55, 224, 255, 0.45);
      }
      .fp3d-pc-join {
        padding: 10px;
        border-radius: 10px;
        background: rgba(120, 170, 255, 0.05);
      }
      .fp3d-pc-step {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-top: 4px;
      }
      .fp3d-pc-group {
        display: grid;
        gap: 4px;
      }
      .fp3d-pc-glabel {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-picks {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-pc-pick {
        font: inherit;
        font-size: 13px;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.04);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-pc-pick:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-pc-pick.fp3d-on {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-pc-hole {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        font-size: 13px;
      }
      .fp3d-pc-hole > span {
        min-width: 120px;
      }
      .fp3d-pc-via {
        border-style: dashed;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-open {
        border-style: dashed;
      }
      .fp3d-joint-name {
        flex: 1;
        min-width: 90px;
        font: inherit;
        font-size: 13px;
        padding: 3px 6px;
        border-radius: 6px;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
      }
      .fp3d-ports {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 3px;
      }
      .fp3d-ports i {
        font-style: normal;
        font-size: 10px;
        padding: 1px 5px;
        border-radius: 6px;
        border: 1px dashed var(--fp3d-line);
        color: var(--fp3d-muted);
      }
      .fp3d-ports i.fp3d-on {
        border-style: solid;
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 4px;
      }
      .fp3d-chip {
        font: inherit;
        font-size: 12px;
        padding: 3px 8px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-accent);
        background: transparent;
        color: var(--fp3d-accent);
        cursor: pointer;
      }
      .fp3d-wv-node {
        pointer-events: none;
      }
      .fp3d-wv-joint {
        pointer-events: auto;
        cursor: move;
      }
      .fp3d-wv-run line {
        stroke: #8a929c;
        stroke-width: 0.05;
        stroke-linecap: round;
        cursor: pointer;
      }
      .fp3d-wv-run line.fp3d-wv-under {
        stroke: #5a616b;
        stroke-dasharray: 0.06 0.05;
      }
      .fp3d-wv-run-sel line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-wv-runpt {
        fill: var(--fp3d-bg, #0b1220);
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        cursor: move;
      }
      .fp3d-wv-runpt.fp3d-on {
        fill: var(--fp3d-accent);
      }
      .fp3d-wv-fitmode .fp3d-wv-run line {
        cursor: copy;
        stroke-width: 0.05 !important;
      }
      .fp3d-wv-fitmode .fp3d-wv-run line:hover {
        stroke: #ffb547 !important;
      }
      .fp3d-tech-step {
        border: 1px solid #ffb547;
        background: rgba(255, 181, 71, 0.1);
        border-radius: 10px;
        padding: 8px 10px;
        font-size: 12.5px;
        line-height: 1.35;
      }
      .fp3d-tech-step b {
        display: block;
        color: #ffb547;
        font-size: 11px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 2px;
      }
      .fp3d-tech-step.fp3d-done {
        border-color: #4dff9a;
        background: rgba(77, 255, 154, 0.08);
      }
      .fp3d-tech-step.fp3d-done b {
        color: #4dff9a;
      }
      .fp3d-wv-dry line {
        stroke-dasharray: 0.04 0.03;
      }
      .fp3d-wv-erase {
        cursor: not-allowed;
      }
      .fp3d-wv-erase .fp3d-wv-run:hover line,
      .fp3d-wv-erase .fp3d-wv-valve:hover circle,
      .fp3d-wv-erase .fp3d-wv-sight:hover,
      .fp3d-wv-erase .fp3d-wv-joint:hover circle {
        stroke: #ff4d6d;
      }
      .fp3d-tech-step.fp3d-tech-erasing {
        border-color: #ff4d6d;
        background: rgba(255, 77, 109, 0.12);
      }
      .fp3d-tech-undo {
        justify-self: start;
      }
      .fp3d-tech-kit .fp3d-tech-pen {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
      .fp3d-tech-kit .fp3d-tech-pen button {
        display: grid;
        justify-items: center;
        gap: 2px;
        padding: 6px 2px;
        font-size: 0.82em;
        white-space: nowrap;
      }
      .fp3d-tech-feed {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .fp3d-tech-feed i {
        font-style: normal;
      }
      .fp3d-tech-feed small {
        margin-left: auto;
        color: #4dff9a;
      }
      .fp3d-tech-feed.fp3d-on {
        opacity: 0.75;
      }
      .fp3d-tech-ok {
        color: #4dff9a;
        font-weight: 600;
      }
      .fp3d-tech-issues {
        color: #ffb547;
        font-size: 12.5px;
      }
      .fp3d-wv-end {
        fill: none;
        stroke: var(--fp3d-warm);
        stroke-width: 0.012;
        stroke-dasharray: 0.02 0.015;
      }
      .fp3d-wv-valve circle {
        fill: #3c4148;
        stroke: #2f8cff;
        stroke-width: 0.012;
        cursor: grab;
      }
      .fp3d-wv-valve line {
        stroke: #2f8cff;
        stroke-width: 0.025;
        stroke-linecap: round;
        pointer-events: none;
      }
      .fp3d-wv-shut circle {
        stroke: #ff5a6e;
      }
      .fp3d-wv-sight {
        fill: rgba(140, 220, 255, 0.55);
        stroke: #4a4f56;
        stroke-width: 0.012;
        cursor: pointer;
      }
      .fp3d-wv-draft {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 0.05;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-wv-rubber {
        stroke-dasharray: 0.05 0.04;
        opacity: 0.5;
      }
      .fp3d-wv-drawing {
        cursor: crosshair;
      }
      .fp3d-wv-drawing .fp3d-wv-item {
        pointer-events: none;
      }
      .fp3d-wv-svg {
        width: 100%;
        height: min(62vh, 560px);
        touch-action: none;
        user-select: none;
        font-family: var(--fp3d-font);
      }
      .fp3d-wv-wall {
        fill: rgba(120, 170, 255, 0.06);
        stroke: var(--fp3d-soft);
        stroke-width: 0.015;
      }
      .fp3d-wv-grid {
        stroke: var(--fp3d-line);
        stroke-width: 0.006;
      }
      .fp3d-wv-scale {
        fill: var(--fp3d-muted);
        font-size: 0.09px;
        text-anchor: end;
      }
      .fp3d-wv-floor {
        stroke: var(--fp3d-accent);
        stroke-width: 0.02;
      }
      .fp3d-wv-hole {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-muted);
        stroke-width: 0.01;
        stroke-dasharray: 0.04 0.03;
      }
      .fp3d-wv-window {
        fill: rgba(55, 224, 255, 0.12);
      }
      .fp3d-wv-item {
        cursor: grab;
      }
      .fp3d-wv-item rect {
        fill: rgba(91, 124, 255, 0.28);
        stroke: var(--fp3d-soft);
        stroke-width: 0.012;
      }
      .fp3d-wv-item text {
        fill: var(--fp3d-text);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-open {
        width: 100%;
        justify-content: center;
        margin: 2px 0 10px;
      }
      .fp3d-wv-turn {
        display: inline-flex;
        align-items: end;
        gap: 6px;
      }
      .fp3d-wv-turn .fp3d-field {
        width: 76px;
      }
      .fp3d-wv-lift {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        margin: -46px 0 0 -22px;
        display: grid;
        justify-items: center;
        gap: 2px;
        cursor: ns-resize;
        touch-action: none;
        user-select: none;
      }
      .fp3d-wv-lift[hidden] {
        display: none;
      }
      .fp3d-wv-lift span {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 24px;
        font-weight: 800;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.55);
      }
      .fp3d-wv-lift b {
        font-size: 12px;
        color: var(--fp3d-warm);
        background: rgba(7, 11, 20, 0.85);
        padding: 1px 6px;
        border-radius: 8px;
      }
      .fp3d-wv-3d {
        display: block;
        width: 100%;
        height: min(62vh, 560px);
        border-radius: 12px;
        overflow: hidden;
      }
      .fp3d-wv-pic rect {
        fill: transparent;
        stroke: transparent;
      }
      .fp3d-wv-pic:hover rect {
        stroke: var(--fp3d-soft);
      }
      .fp3d-wv-body {
        display: flex;
        gap: 8px;
        min-height: 0;
      }
      .fp3d-wv-kit {
        flex: none;
        width: 236px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        overflow-y: auto;
        max-height: min(62vh, 560px);
      }
      .fp3d-wv-kit h4 {
        margin: 4px 0 0;
        font-size: 11px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-kit .fp3d-btn {
        justify-content: flex-start;
        text-align: left;
      }
      .fp3d-wv-cats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
      }
      .fp3d-wv-cat {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 8px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(91, 124, 255, 0.25));
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text, #d6ecff);
        font: inherit;
        font-size: 12px;
        text-align: left;
        cursor: pointer;
        line-height: 1.15;
      }
      .fp3d-wv-cat span {
        font-size: 15px;
        width: 18px;
        text-align: center;
        flex: none;
      }
      .fp3d-wv-cat.fp3d-on {
        border-color: var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.14);
        color: #fff;
      }
      .fp3d-wv-tiles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-wv-tile {
        display: grid;
        grid-template-rows: auto auto auto;
        justify-items: center;
        gap: 2px;
        padding: 6px 4px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(91, 124, 255, 0.25));
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text, #d6ecff);
        font: inherit;
        cursor: pointer;
        text-align: center;
      }
      .fp3d-wv-tile:hover {
        border-color: var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.08);
      }
      .fp3d-wv-tile-pic {
        width: 72px;
        height: 60px;
        display: grid;
        place-items: center;
      }
      .fp3d-wv-tile-pic img {
        max-width: 72px;
        max-height: 60px;
      }
      .fp3d-wv-tile-pic i {
        width: 36px;
        height: 28px;
        border-radius: 6px;
        border: 1px dashed var(--fp3d-muted);
        opacity: 0.4;
      }
      .fp3d-wv-tile-name {
        font-size: 11.5px;
        font-weight: 600;
        line-height: 1.15;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .fp3d-wv-tile small {
        font-size: 10.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-tile small.fp3d-wv-fit {
        color: var(--fp3d-accent);
      }
      .fp3d-wv-kit .fp3d-search {
        width: 100%;
        box-sizing: border-box;
      }
      .fp3d-wv-kit .fp3d-wv-pick {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6px;
        height: auto;
        min-height: 32px;
        line-height: 1.2;
        font-size: 12.5px;
      }
      .fp3d-wv-pick small {
        color: var(--fp3d-muted);
        white-space: nowrap;
      }
      .fp3d-wv-gapnote {
        color: var(--fp3d-accent);
      }
      .fp3d-wv-setframe rect {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        stroke-dasharray: 0.05 0.03;
        pointer-events: none;
      }
      .fp3d-wv-setblock rect {
        stroke: #ffb547;
      }
      .fp3d-wv-setframe text {
        fill: var(--fp3d-accent);
        pointer-events: none;
      }
      .fp3d-wv-setblock text {
        fill: #ffb547;
      }
      .fp3d-wv-gap rect {
        fill: rgba(55, 224, 255, 0.1);
        stroke: var(--fp3d-accent);
        stroke-width: 0.01;
        stroke-dasharray: 0.04 0.03;
        pointer-events: none;
      }
      .fp3d-wv-gap text {
        fill: var(--fp3d-accent);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-handle {
        fill: var(--fp3d-accent);
        stroke: #06101c;
        stroke-width: 0.006;
        cursor: ew-resize;
      }
      .fp3d-wv-handle.fp3d-wv-ns {
        cursor: ns-resize;
      }
      .fp3d-wv-size {
        fill: var(--fp3d-accent);
        text-anchor: middle;
        font-weight: 600;
        pointer-events: none;
      }
      .fp3d-wv-fixnote {
        color: #ffb547;
        font-size: 12.5px;
      }
      .fp3d-pool-depth {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-pool-depth input {
        width: 58px;
        padding: 3px 5px;
      }
      .fp3d-wv-marquee {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
        stroke-width: 0.008;
        stroke-dasharray: 0.03 0.02;
        pointer-events: none;
      }
      @media (max-width: 700px) {
        .fp3d-wv-body {
          flex-direction: column;
        }
        .fp3d-wv-kit {
          width: auto;
          flex-direction: row;
          flex-wrap: wrap;
          max-height: none;
        }
      }
      .fp3d-wv-stage {
        flex: 1;
        min-width: 0;
        position: relative;
        min-height: 0;
        padding: 0 60px;
      }
      .fp3d-news-veil {
        position: fixed;
        inset: 0;
        z-index: 40;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(2, 6, 14, 0.55);
      }
      .fp3d-news {
        max-width: 420px;
        padding: 22px 22px 18px;
        border-radius: 18px;
        border: 1px solid var(--fp3d-accent, #22d3ee);
        background: var(--fp3d-panel, #0d1628);
        box-shadow: 0 0 40px rgba(34, 211, 238, 0.25);
        text-align: center;
      }
      .fp3d-news-pic {
        font-size: 34px;
        letter-spacing: 6px;
      }
      .fp3d-news h3 {
        margin: 10px 0 6px;
      }
      .fp3d-news p {
        margin: 0 0 14px;
        color: var(--fp3d-muted, #a9b8d4);
      }
      .fp3d-news-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: center;
      }
      .fp3d-wv-zoom {
        position: absolute;
        right: 64px;
        bottom: 6px;
        z-index: 1;
        display: flex;
        gap: 4px;
      }
      .fp3d-wv-zoom .fp3d-btn {
        min-width: 34px;
        padding: 4px 8px;
      }
      .fp3d-wv-side {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        display: grid;
        justify-items: center;
        gap: 2px;
        width: 54px;
        padding: 10px 0;
        border-radius: 14px;
        border: 1px solid var(--fp3d-line);
        background: rgba(14, 21, 38, 0.82);
        color: var(--fp3d-accent);
        font-size: 30px;
        line-height: 1;
        cursor: pointer;
      }
      .fp3d-wv-side small {
        font-size: 10px;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-side:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-wv-left {
        left: 0;
      }
      .fp3d-wv-right {
        right: 0;
      }
      .fp3d-wv-sel rect {
        fill: rgba(55, 224, 255, 0.3);
        stroke: var(--fp3d-accent);
        stroke-width: 0.02;
      }
      .fp3d-wv-pic.fp3d-wv-sel rect {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wv-dims line {
        stroke: var(--fp3d-warm);
        stroke-width: 0.012;
        stroke-dasharray: 0.03 0.02;
      }
      .fp3d-wv-dims text {
        fill: var(--fp3d-warm);
        font-size: 0.11px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: var(--fp3d-chrome-solid);
        stroke-width: 0.035px;
      }
      .fp3d-wv-item text,
      .fp3d-wv-hole-label {
        paint-order: stroke;
        stroke: var(--fp3d-chrome-solid);
        stroke-width: 0.025px;
      }
      .fp3d-wv-hole-label {
        fill: var(--fp3d-muted);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-dims text.fp3d-wv-up {
        text-anchor: start;
      }
      .fp3d-edge-box {
        margin: 12px 0;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 45%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, var(--fp3d-accent) 6%, transparent);
      }
      .fp3d-edge-box h4 {
        margin: 0 0 4px;
        color: var(--fp3d-accent);
        font-size: 13px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      /* a wall row: name and length, the height, then the buttons (full height, no wall, cut) in one line;
         a split point gets a line of its own below */
      .fp3d-edge-height {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: end;
        padding: 4px 6px;
        margin: 0 -6px;
        border-radius: 8px;
      }
      .fp3d-edge-height > span:first-child {
        flex: 1 1 84px;
        min-width: 84px;
      }
      .fp3d-edge-height > .fp3d-field {
        flex: 1 1 90px;
        min-width: 0;
      }
      .fp3d-edge-height > .fp3d-muted {
        flex: 1 1 90px;
        align-self: center;
      }
      .fp3d-edge-height > .fp3d-btn {
        flex: 0 0 auto;
        white-space: nowrap;
        padding-left: 10px;
        padding-right: 10px;
      }
      .fp3d-edge-height > .fp3d-split-row {
        flex: 1 1 100%;
        display: flex;
        gap: 6px;
        align-items: end;
      }
      .fp3d-edge-height > .fp3d-split-row > .fp3d-field {
        flex: 1;
      }
      .fp3d-edge-on {
        background: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
      }
      .fp3d-edge-low b {
        color: var(--fp3d-accent);
      }
      .fp3d-wall-low {
        opacity: 0.55;
      }
      .fp3d-dev-source {
        display: flex;
        margin: 8px 0;
      }
      .fp3d-dev-source button {
        flex: 1 1 0;
        min-width: 0;
        padding: 6px 4px;
        font-size: 12px;
        line-height: 1.2;
        white-space: normal;
        text-align: center;
        border-radius: 10px;
      }
      .fp3d-place-all {
        margin: 10px 0 0;
      }
      .fp3d-roof-sec polygon {
        fill: color-mix(in srgb, #ffb547 10%, transparent);
        stroke: #ffb547;
        stroke-width: 2;
        stroke-dasharray: 8 6;
        cursor: move;
      }
      .fp3d-roof-sel polygon {
        fill: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      /* solar modules: dark blue panes with a light frame, so they do not look like a selected room */
      .fp3d-roofwin polygon {
        fill: color-mix(in srgb, #2b6b8f 70%, transparent);
        stroke: #e3e9f5;
        stroke-width: 2;
        cursor: move;
      }
      .fp3d-roofwin-sel polygon {
        stroke: #ffd75a;
      }
      .fp3d-tool-energy .fp3d-roof-layer {
        opacity: 0.45;
      }
      .fp3d-tool-energy .fp3d-energy-item {
        pointer-events: auto;
      }
      /* the cables in the energy tool: faint automatic ways, solid laid ones */
      .fp3d-cable line {
        stroke: #ffd75a;
        stroke-width: 2;
        stroke-dasharray: 5 4;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-cable-bat line {
        stroke: #5dffb0;
      }
      .fp3d-cable-grid line {
        stroke: #4ff6ff;
      }
      .fp3d-cable-hit line {
        stroke-width: 12;
        opacity: 0;
        pointer-events: stroke;
        cursor: pointer;
      }
      .fp3d-cable-laid line {
        stroke-dasharray: none;
        opacity: 0.9;
      }
      .fp3d-cable-sel line {
        stroke-width: 2.5;
        opacity: 1;
        filter: drop-shadow(0 0 4px currentColor);
      }
      .fp3d-cable-sel .fp3d-cable-piece {
        stroke-width: 14;
        opacity: 0;
        pointer-events: stroke;
        cursor: copy;
      }
      .fp3d-cable .fp3d-vertex circle {
        pointer-events: auto;
      }
      .fp3d-energy-marker {
        cursor: move;
      }
      .fp3d-checklist .fp3d-chk {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        margin: 2px 0;
        padding: 6px 8px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        text-align: left;
        text-decoration: none;
        cursor: pointer;
      }
      .fp3d-checklist .fp3d-chk:hover {
        background: rgba(127, 127, 127, 0.12);
      }
      .fp3d-checklist .fp3d-chk span {
        width: 18px;
        text-align: center;
        font-weight: 700;
      }
      .fp3d-chk-ok span {
        color: #59ff8c;
      }
      .fp3d-chk-todo span {
        color: #ffc633;
      }
      .fp3d-chk-opt {
        opacity: 0.75;
      }
      .fp3d-teaser-on {
        border-color: rgba(89, 255, 140, 0.5);
      }
      .fp3d-teaser {
        margin-top: 12px;
        padding: 12px;
        border-radius: 14px;
        border: 1px solid color-mix(in srgb, #ffd75a 45%, transparent);
        background: linear-gradient(160deg, color-mix(in srgb, #ffd75a 10%, transparent), transparent 60%);
      }
      .fp3d-teaser-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
      .fp3d-teaser-soon {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #0b1426;
        background: #ffd75a;
        border-radius: 999px;
        padding: 2px 8px;
        white-space: nowrap;
      }
      .fp3d-teaser img {
        display: block;
        width: 100%;
        border-radius: 10px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 40%, transparent);
      }
      .fp3d-teaser ul {
        margin: 8px 0 4px;
        padding-left: 18px;
        font-size: 13px;
      }
      /* the roof and energy tools say what can be moved there (everything else is locked) */
      .fp3d-phone-hint {
        display: none;
      }
      @media (max-width: 600px) {
        .fp3d-phone-hint {
          position: absolute;
          top: 8px;
          left: 8px;
          /* the plan may be wider than the phone: stay on the screen */
          width: calc(min(100%, 100vw) - 16px);
          box-sizing: border-box;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 6px 6px 12px;
          border-radius: 12px;
          background: var(--fp3d-chrome-solid);
          border: 1px solid var(--fp3d-accent);
          font-size: 13px;
        }
      }
      .fp3d-tool-note {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        max-width: calc(100% - 24px);
        padding: 5px 12px;
        border-radius: 999px;
        background: color-mix(in srgb, #0b1426 85%, transparent);
        border: 1px solid color-mix(in srgb, #ffd75a 60%, transparent);
        color: #ffe7a3;
        font-size: 12px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-energy-marker circle {
        fill: color-mix(in srgb, #0b1426 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-holo-pt circle {
        stroke: #c9a4ff;
        cursor: grab;
      }
      .fp3d-holo-pt .fp3d-energy-name {
        fill: #c9a4ff;
      }
      .fp3d-energy-marker-sel circle {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
        fill: color-mix(in srgb, var(--fp3d-accent) 25%, #0b1426);
      }
      .fp3d-energy-marker text {
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-energy-icon {
        font-size: 17px;
      }
      .fp3d-energy-name {
        font-size: 11px;
        font-weight: 700;
        fill: #ffd75a;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.65);
        stroke-width: 3px;
      }
      .fp3d-solar polygon {
        fill: color-mix(in srgb, #1b3a8f 75%, transparent);
        stroke: #9fb8ff;
        stroke-width: 1.5;
        cursor: move;
      }
      .fp3d-solar-sel polygon {
        fill: color-mix(in srgb, #1b3a8f 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-solar polygon.fp3d-solar-off {
        fill: transparent;
        stroke-dasharray: 4 4;
        stroke-width: 1.5;
      }
      .fp3d-solar-pick polygon {
        cursor: pointer;
      }
      .fp3d-roof-ridge line {
        stroke: #ffb547;
        stroke-width: 2.5;
        pointer-events: none;
      }
      .fp3d-roof-sel .fp3d-roof-ridge line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-roof-sec text {
        fill: #ffd28a;
        font-size: 12px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.6);
        stroke-width: 3px;
        pointer-events: none;
      }
      .fp3d-tool-energy .fp3d-room,
      .fp3d-tool-energy [data-furniture],
      .fp3d-tool-energy [data-device],
      .fp3d-tool-energy [data-opening],
      .fp3d-tool-energy [data-free-wall],
      .fp3d-tool-energy [data-outdoor],
      .fp3d-tool-energy .fp3d-roof-layer,
      .fp3d-tool-roof .fp3d-room,
      .fp3d-tool-roof [data-furniture],
      .fp3d-tool-roof [data-device],
      .fp3d-tool-roof [data-opening],
      .fp3d-tool-roof [data-free-wall],
      .fp3d-tool-roof [data-outdoor] {
        pointer-events: none;
      }
      .fp3d-dev-area {
        margin: 10px 0 2px;
        color: var(--fp3d-muted);
        font-size: 12px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .fp3d-h3row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .fp3d-h3row h3 {
        margin-bottom: 0;
      }
      .fp3d-fix {
        min-height: 30px;
        padding: 4px 10px;
        font-size: 13px;
      }
      .fp3d-pipe,
      .fp3d-pipe-hit {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-pipe {
        stroke: #37a8ff;
        stroke-width: 3;
        opacity: 0.85;
        pointer-events: none;
      }
      .fp3d-pipe-sel {
        stroke-width: 5;
        opacity: 1;
        filter: drop-shadow(0 0 4px #37a8ff);
      }
      .fp3d-pipe-draft {
        stroke-dasharray: 6 5;
      }
      .fp3d-pipe-hit {
        stroke: transparent;
        stroke-width: 16;
        cursor: pointer;
      }
      .fp3d-pipe-seg {
        stroke: transparent;
        stroke-width: 14;
        cursor: copy;
      }
      .fp3d-pipe-arrow {
        fill: #37a8ff;
        pointer-events: none;
      }
      .fp3d-pool-node {
        cursor: grab;
      }
      .fp3d-pool-node circle:not(.fp3d-hit) {
        fill: #0b1a2e;
        stroke: #37e0ff;
        stroke-width: 2;
      }
      .fp3d-pool-node.fp3d-pool-dev circle:not(.fp3d-hit) {
        stroke: #5b7cff;
      }
      .fp3d-pool-node.fp3d-pool-closed circle:not(.fp3d-hit) {
        stroke: #ff4d40;
      }
      .fp3d-pool-node text {
        fill: #e6f6ff;
        font-size: 10px;
        font-weight: 700;
        text-anchor: middle;
        dominant-baseline: central;
        pointer-events: none;
      }
      .fp3d-conn {
        grid-template-columns: 1fr;
      }
      .fp3d-conn select {
        width: 100%;
      }
      .fp3d-pool-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        margin: 4px 0;
        font-size: 13px;
      }
      .fp3d-pool-row > span,
      .fp3d-pool-row > .fp3d-link {
        flex: 1;
        text-align: left;
      }
      .fp3d-pool-row-sel {
        background: rgba(55, 224, 255, 0.1);
        border-radius: 8px;
        box-shadow: inset 3px 0 0 var(--fp3d-accent);
        padding-left: 6px;
      }
      .fp3d-outdoor-type {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-outdoor-type select {
        min-height: 34px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line, rgba(160, 200, 255, 0.25));
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-weight: 600;
      }
      .fp3d-fix[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-lock {
        font-size: 13px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-hint-fixed {
        color: var(--fp3d-accent);
      }
      .fp3d-ctx {
        position: absolute;
        z-index: 5;
        display: flex;
        flex-direction: column;
        min-width: 170px;
        padding: 4px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: var(--fp3d-panel, #111a2e);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
      }
      .fp3d-ctx button {
        padding: 8px 12px;
        border: none;
        border-radius: 7px;
        background: none;
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-ctx button:hover:not(:disabled) {
        background: color-mix(in srgb, var(--fp3d-accent) 16%, transparent);
      }
      .fp3d-ctx button:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .fp3d-ctx-danger {
        color: var(--fp3d-danger, #ff6b7a) !important;
      }
      .fp3d-edge-hi {
        stroke: var(--fp3d-accent);
        stroke-width: 6;
        stroke-linecap: round;
        filter: drop-shadow(0 0 6px var(--fp3d-accent));
      }
      .fp3d-room-id code {
        user-select: all;
        cursor: copy;
      }
      .fp3d-open .fp3d-open-hit {
        stroke: transparent;
        stroke-width: 26;
      }
      .fp3d-free-wall .fp3d-hit {
        stroke: transparent;
        stroke-width: 18;
      }
      .fp3d-free-wall-line {
        stroke: transparent;
        stroke-width: 1;
      }
      .fp3d-free-wall-sel .fp3d-free-wall-line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-draft-wall {
        stroke-width: 4;
      }
      .fp3d-open-passage {
        stroke-dasharray: 4 4;
      }
      .fp3d-out-sel polygon {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: none;
      }
      .fp3d-out text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-lit .fp3d-furn-body {
        fill: rgba(255, 181, 71, 0.35);
        stroke: var(--fp3d-warm);
      }
      .fp3d-rotate {
        cursor: grab;
      }
      .fp3d-preview {
        position: fixed;
        z-index: 20;
        width: 180px;
        padding: 8px 8px 10px;
        border-radius: 16px;
        background: radial-gradient(circle at 50% 40%, #1d2c4d, #0b1222 75%);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        text-align: center;
        pointer-events: none;
        animation: fp3d-pop 120ms ease-out;
      }
      @keyframes fp3d-pop {
        from {
          opacity: 0;
          transform: translateX(8px);
        }
      }
      .fp3d-preview img,
      .fp3d-preview-wait {
        display: block;
        width: 164px;
        height: 164px;
      }
      .fp3d-preview-wait {
        margin: 0 auto;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
      }
      .fp3d-preview b {
        display: block;
        margin-top: 2px;
        font-size: 13px;
        color: #e8eeff;
      }
      .fp3d-lib-badge {
        margin-left: 4px;
        color: #37e0ff;
        vertical-align: -2px;
      }
      .fp3d-ext-teaser {
        display: grid;
        gap: 6px;
        margin: 12px 0;
        padding: 12px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(55, 224, 255, 0.08), rgba(91, 124, 255, 0.08));
      }
      .fp3d-pin {
        border: 0;
        background: none;
        padding: 2px 6px;
        font-size: 17px;
        line-height: 1;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-pin-on {
        color: var(--fp3d-warm);
      }
      .fp3d-back {
        margin-bottom: 12px;
      }
      .fp3d-presets {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
      }
      .fp3d-resize {
        cursor: nwse-resize;
      }
      .fp3d-resize rect {
        fill: var(--fp3d-accent);
        stroke: #0b1222;
        stroke-width: 1.5;
      }
      .fp3d-code {
        display: block;
        font: 12px/1.4 ui-monospace, Menlo, Consolas, monospace;
        padding: 6px 8px;
        border-radius: 8px;
        background: rgba(127, 127, 127, 0.12);
        user-select: all;
        word-break: break-all;
      }
      .fp3d-shift {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .fp3d-shift input {
        width: 5.5em;
      }
      .fp3d-headroom {
        stroke: rgba(255, 214, 90, 0.55);
        stroke-width: 1;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-headroom-label {
        font-size: 10px;
        fill: rgba(255, 214, 90, 0.75);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-split-mark {
        stroke: rgba(55, 224, 255, 0.9);
        stroke-width: 2;
        pointer-events: none;
      }
      .fp3d-floor-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 8px 0;
        padding: 10px;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
        max-width: 100%;
        box-sizing: border-box;
      }
      .fp3d-icon-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .fp3d-icon-row input {
        flex: 1;
        min-width: 0;
      }
      .fp3d-icon-row ha-icon {
        --mdc-icon-size: 22px;
        color: var(--fp3d-accent);
      }
      .fp3d-floor-menu .fp3d-btn {
        text-align: left;
        width: 100%;
        min-width: 0;
        white-space: normal;
        overflow-wrap: anywhere;
      }
      .fp3d-rotate line {
        stroke: var(--fp3d-accent);
        stroke-dasharray: 3 3;
      }
      .fp3d-rotate circle:not(.fp3d-hit) {
        fill: #0b1222;
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-rotate path {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-linecap: round;
      }
      .fp3d-lib-toggle {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 0;
        border: 0;
        background: none;
        font: inherit;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-lib-toggle:hover {
        color: var(--fp3d-text);
      }
      .fp3d-lib-caret {
        width: 12px;
        color: var(--fp3d-accent);
      }
      .fp3d-lib-count {
        margin-left: auto;
        font-weight: 500;
        letter-spacing: 0;
        text-transform: none;
        opacity: 0.7;
      }
      .fp3d-lib-head {
        margin: 10px 0 0;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-furn-front {
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
        vector-effect: non-scaling-stroke;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-furn text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-sel .fp3d-furn-body {
        fill: rgba(55, 224, 255, 0.16);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      /* furniture blocks and multi selections: a dashed frame with its name, the frame being drawn */
      .fp3d-selframe rect {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-selframe-block rect {
        stroke: #ffb547;
      }
      .fp3d-selframe text {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 600;
        pointer-events: none;
      }
      .fp3d-selframe-block text {
        fill: #ffb547;
      }
      .fp3d-marquee {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        pointer-events: none;
      }
      .fp3d-block-parts {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 6px 0 10px;
      }
      .fp3d-block-note {
        display: flex;
        gap: 6px;
        align-items: center;
        flex-wrap: wrap;
      }
      .fp3d-multi-toggle {
        margin-top: 8px;
      }
      .fp3d-open {
        cursor: grab;
      }
      .fp3d-open-gap {
        fill: #0b1222;
        stroke: none;
      }
      .fp3d-open path,
      .fp3d-open line {
        fill: none;
        stroke-width: 1.6;
        stroke-linecap: round;
      }
      .fp3d-open-door path {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 3 3;
      }
      .fp3d-open-front path,
      .fp3d-open-door line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
        stroke-dasharray: none;
      }
      .fp3d-open-door line.fp3d-open-pane {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-garage line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
      }
      .fp3d-open-track {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 4 4;
        opacity: 0.6;
      }
      .fp3d-open-window line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-sel .fp3d-open-gap {
        fill: rgba(55, 224, 255, 0.25);
      }
      .fp3d-open-sel path,
      .fp3d-open-sel line {
        stroke-width: 2.4;
      }
      .fp3d-bg-rotate {
        cursor: grab;
      }
      .fp3d-bg-ruler line {
        stroke: #ffb020;
        stroke-width: 2.5;
        stroke-dasharray: 6 4;
      }
      .fp3d-bg-ruler circle {
        fill: #ffb020;
        stroke: #1a1000;
        stroke-width: 1.5;
      }
      .fp3d-own-button {
        padding: 10px 0;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-own-button textarea {
        font: 12px/1.4 ui-monospace, monospace;
        width: 100%;
        box-sizing: border-box;
        padding: 6px 8px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-search {
        position: sticky;
        top: 0;
        z-index: 2;
        background-color: var(--fp3d-panel, #0d1424);
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 7px 9px;
        margin: 2px 0 6px;
      }
      .fp3d-more {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-muted);
        background: none;
        border: none;
        text-align: left;
        padding: 2px 26px 8px;
        cursor: pointer;
      }
      .fp3d-more:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-dev-hidden .fp3d-dev-name {
        opacity: 0.45;
        text-decoration: line-through;
      }
      .fp3d-dev-extra {
        padding-left: 18px;
        font-size: 13px;
      }
      .fp3d-dev-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 8px;
        font-weight: 600;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-device-sel circle:not(.fp3d-hit) {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
      }
      .fp3d-dev-row {
        align-items: center;
        cursor: default;
      }
      .fp3d-dev-row:hover {
        color: var(--fp3d-text);
      }
      .fp3d-dev-name {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-dev-name:disabled {
        cursor: default;
      }
      .fp3d-dev-name span {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-name svg {
        flex: none;
      }
      .fp3d-link {
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-accent);
        background: none;
        border: none;
        padding: 4px 2px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-wide-btn {
        width: 100%;
        margin-bottom: 6px;
      }
      .fp3d-device {
        cursor: grab;
      }
      .fp3d-wedge path,
      .fp3d-wedge circle:not(.fp3d-hit) {
        fill: rgba(55, 224, 255, 0.12);
        stroke: rgba(55, 224, 255, 0.45);
        stroke-width: 1;
        pointer-events: none;
      }
      .fp3d-wedge-sel path,
      .fp3d-wedge-sel > circle {
        fill: rgba(55, 224, 255, 0.2);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wedge .fp3d-rotate circle {
        pointer-events: auto;
      }
      .fp3d-device circle:not(.fp3d-hit) {
        fill: #111a2e;
        stroke: var(--fp3d-soft);
        stroke-width: 1.5;
        vector-effect: non-scaling-stroke;
      }
      .fp3d-device path {
        fill: none;
        stroke: var(--fp3d-text);
        stroke-width: 2.6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-device-on circle:not(.fp3d-hit) {
        fill: var(--fp3d-warm);
        stroke: var(--fp3d-warm);
      }
      .fp3d-device-on path {
        stroke: #2a1a00;
      }
      .fp3d-muted {
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-points {
        margin: 12px 0;
      }
      .fp3d-point {
        display: grid;
        grid-template-columns: 18px 1fr 1fr auto;
        gap: 6px;
        align-items: end;
        padding: 4px 0;
      }
      .fp3d-point-sel .fp3d-muted {
        color: var(--fp3d-accent);
      }
      .fp3d-point .fp3d-btn {
        min-height: 34px;
        padding: 4px 10px;
      }
      .fp3d-upload {
        position: relative;
        text-align: center;
        overflow: hidden;
      }
      .fp3d-upload input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
      }
      .fp3d-sub {
        margin: 8px 0 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-note {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-warm);
      }
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",Hs);function eh(a,e,t){let n=t[0]-e[0],i=t[1]-e[1],o=n*n+i*i||1,r=Math.min(1,Math.max(0,((a[0]-e[0])*n+(a[1]-e[1])*i)/o));return Math.hypot(a[0]-e[0]-n*r,a[1]-e[1]-i*r)}function kn(a){return a.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var ro={language:"en"};function Ae(a){return/^(sensor|input_number|number)\./.test(a)}function Os(a){return/^(binary_sensor|input_boolean)\./.test(a)}export{Hs as Fp3dEditor};
