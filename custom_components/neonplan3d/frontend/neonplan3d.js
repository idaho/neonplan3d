Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=n=>n===void 0?n:JSON.parse(JSON.stringify(n)));var $i=new URL(import.meta.url),ki=$i.searchParams.get("v"),xi=n=>new URL(`./fonts/${n}${ki?`?v=${ki}`:""}`,$i).href,Si="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Mi(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let n=document.createElement("style");n.id="fp3d-fonts",n.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${xi("figtree.woff2")}) format("woff2");unicode-range:${Si}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${xi("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Si}}`,document.head.append(n)}function Pi(n,e){return e==="metric"||e==="imperial"?e:n?.config?.unit_system?.length==="mi"?"imperial":"metric"}function wc(n,e){return String(Number(n.toFixed(e)))}function zi(n,e=2){let t=n<0?"-":"",o=Math.round(Math.abs(n)/.0254*(e>=2?10:1))/(e>=2?10:1),i=Math.floor(o/12+1e-9),r=o-i*12,s=wc(r,e>=2?1:0);return i?r<.05?`${t}${i}'`:`${t}${i}' ${s}"`:`${t}${s}"`}function Ei(n,e){let t=n.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let o=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,r=!1,s=!1,a=t;for(let l of t.matchAll(o)){let d=Number(l[1]);if(!Number.isFinite(d))return null;let c=l[2];r=!0,a=a.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(i+=d*.3048,s=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?i+=d*.0254:c==="mm"?i+=d/1e3:c==="cm"?i+=d/100:c==="m"?i+=d:i+=e==="imperial"?d*(s?.0254:.3048):d}return!r||/[^\s+]/.test(a)?null:i}var Vn=globalThis,Nn=Vn.ShadowRoot&&(Vn.ShadyCSS===void 0||Vn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ao=Symbol(),Ai=new WeakMap,Zt=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ao)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Nn&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=Ai.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ai.set(t,e))}return e}toString(){return this.cssText}},Ri=n=>new Zt(typeof n=="string"?n:n+"",void 0,Ao),we=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((o,i,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new Zt(t,n,Ao)},Ti=(n,e)=>{if(Nn)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let o=document.createElement("style"),i=Vn.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=t.cssText,n.appendChild(o)}},Ro=Nn?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return Ri(t)})(n):n;var{is:vc,defineProperty:yc,getOwnPropertyDescriptor:kc,getOwnPropertyNames:xc,getOwnPropertySymbols:Sc,getPrototypeOf:$c}=Object,Kn=globalThis,Fi=Kn.trustedTypes,Mc=Fi?Fi.emptyScript:"",Pc=Kn.reactiveElementPolyfillSupport,Xt=(n,e)=>n,To={toAttribute(n,e){switch(e){case Boolean:n=n?Mc:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Ii=(n,e)=>!vc(n,e),Di={attribute:!0,type:String,converter:To,reflect:!1,useDefault:!1,hasChanged:Ii};Symbol.metadata??=Symbol("metadata"),Kn.litPropertyMetadata??=new WeakMap;var He=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Di){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),i=this.getPropertyDescriptor(e,o,t);i!==void 0&&yc(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){let{get:i,set:r}=kc(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let a=i?.call(this);r?.call(this,s),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Di}static _$Ei(){if(this.hasOwnProperty(Xt("elementProperties")))return;let e=$c(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Xt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xt("properties"))){let t=this.properties,o=[...xc(t),...Sc(t)];for(let i of o)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[o,i]of t)this.elementProperties.set(o,i)}this._$Eh=new Map;for(let[t,o]of this.elementProperties){let i=this._$Eu(t,o);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let i of o)t.unshift(Ro(i))}else e!==void 0&&t.push(Ro(e));return t}static _$Eu(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ti(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){let r=(o.converter?.toAttribute!==void 0?o.converter:To).toAttribute(t,o.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let r=o.getPropertyOptions(i),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:To;this._$Em=i;let a=s.fromAttribute(t,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,o,i=!1,r){if(e!==void 0){let s=this.constructor;if(i===!1&&(r=this[e]),o??=s.getPropertyOptions(e),!((o.hasChanged??Ii)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:r},s){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),r!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[i,r]of o){let{wrapped:s}=r,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};He.elementStyles=[],He.shadowRootOptions={mode:"open"},He[Xt("elementProperties")]=new Map,He[Xt("finalized")]=new Map,Pc?.({ReactiveElement:He}),(Kn.reactiveElementVersions??=[]).push("2.1.2");var Lo=globalThis,Hi=n=>n,Gn=Lo.trustedTypes,Wi=Gn?Gn.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ni="$lit$",Ne=`lit$${Math.random().toFixed(9).slice(2)}$`,Ki="?"+Ne,zc=`<${Ki}>`,it=document,Jt=()=>it.createComment(""),Qt=n=>n===null||typeof n!="object"&&typeof n!="function",Oo=Array.isArray,Ec=n=>Oo(n)||typeof n?.[Symbol.iterator]=="function",Fo=`[ 	
\f\r]`,Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ci=/-->/g,Li=/>/g,ot=RegExp(`>|${Fo}(?:([^\\s"'>=/]+)(${Fo}*=${Fo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oi=/'/g,Bi=/"/g,Gi=/^(?:script|style|textarea|title)$/i,Bo=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),w=Bo(1),nn=Bo(2),mh=Bo(3),st=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Vi=new WeakMap,rt=it.createTreeWalker(it,129);function Ui(n,e){if(!Oo(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Wi!==void 0?Wi.createHTML(e):e}var Ac=(n,e)=>{let t=n.length-1,o=[],i,r=e===2?"<svg>":e===3?"<math>":"",s=Yt;for(let a=0;a<t;a++){let l=n[a],d,c,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===Yt?c[1]==="!--"?s=Ci:c[1]!==void 0?s=Li:c[2]!==void 0?(Gi.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=ot):c[3]!==void 0&&(s=ot):s===ot?c[0]===">"?(s=i??Yt,u=-1):c[1]===void 0?u=-2:(u=s.lastIndex-c[2].length,d=c[1],s=c[3]===void 0?ot:c[3]==='"'?Bi:Oi):s===Bi||s===Oi?s=ot:s===Ci||s===Li?s=Yt:(s=ot,i=void 0);let f=s===ot&&n[a+1].startsWith("/>")?" ":"";r+=s===Yt?l+zc:u>=0?(o.push(d),l.slice(0,u)+Ni+l.slice(u)+Ne+f):l+Ne+(u===-2?a:f)}return[Ui(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},en=class n{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[d,c]=Ac(e,t);if(this.el=n.createElement(d,o),rt.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=rt.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(Ni)){let p=c[s++],f=i.getAttribute(u).split(Ne),g=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:g[2],strings:f,ctor:g[1]==="."?Io:g[1]==="?"?Ho:g[1]==="@"?Wo:yt}),i.removeAttribute(u)}else u.startsWith(Ne)&&(l.push({type:6,index:r}),i.removeAttribute(u));if(Gi.test(i.tagName)){let u=i.textContent.split(Ne),p=u.length-1;if(p>0){i.textContent=Gn?Gn.emptyScript:"";for(let f=0;f<p;f++)i.append(u[f],Jt()),rt.nextNode(),l.push({type:2,index:++r});i.append(u[p],Jt())}}}else if(i.nodeType===8)if(i.data===Ki)l.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(Ne,u+1))!==-1;)l.push({type:7,index:r}),u+=Ne.length-1}r++}}static createElement(e,t){let o=it.createElement("template");return o.innerHTML=e,o}};function vt(n,e,t=n,o){if(e===st)return e;let i=o!==void 0?t._$Co?.[o]:t._$Cl,r=Qt(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,t,o)),o!==void 0?(t._$Co??=[])[o]=i:t._$Cl=i),i!==void 0&&(e=vt(n,i._$AS(n,e.values),i,o)),e}var Do=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??it).importNode(t,!0);rt.currentNode=i;let r=rt.nextNode(),s=0,a=0,l=o[0];for(;l!==void 0;){if(s===l.index){let d;l.type===2?d=new tn(r,r.nextSibling,this,e):l.type===1?d=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(d=new Co(r,this,e)),this._$AV.push(d),l=o[++a]}s!==l?.index&&(r=rt.nextNode(),s++)}return rt.currentNode=it,i}p(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},tn=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=vt(this,e,t),Qt(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==st&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ec(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&Qt(this._$AH)?this._$AA.nextSibling.data=e:this.T(it.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=en.createElement(Ui(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{let r=new Do(i,this),s=r.u(this.options);r.p(t),this.T(s),this._$AH=r}}_$AC(e){let t=Vi.get(e.strings);return t===void 0&&Vi.set(e.strings,t=new en(e)),t}k(e){Oo(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,i=0;for(let r of e)i===t.length?t.push(o=new n(this.O(Jt()),this.O(Jt()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let o=Hi(e).nextSibling;Hi(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},yt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,r){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=S}_$AI(e,t=this,o,i){let r=this.strings,s=!1;if(r===void 0)e=vt(this,e,t,0),s=!Qt(e)||e!==this._$AH&&e!==st,s&&(this._$AH=e);else{let a=e,l,d;for(e=r[0],l=0;l<r.length-1;l++)d=vt(this,a[o+l],t,l),d===st&&(d=this._$AH[l]),s||=!Qt(d)||d!==this._$AH[l],d===S?e=S:e!==S&&(e+=(d??"")+r[l+1]),this._$AH[l]=d}s&&!i&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Io=class extends yt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}},Ho=class extends yt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}},Wo=class extends yt{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){if((e=vt(this,e,t,0)??S)===st)return;let o=this._$AH,i=e===S&&o!==S||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==S&&(o===S||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Co=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){vt(this,e)}};var Rc=Lo.litHtmlPolyfillSupport;Rc?.(en,tn),(Lo.litHtmlVersions??=[]).push("3.3.3");var ji=(n,e,t)=>{let o=t?.renderBefore??e,i=o._$litPart$;if(i===void 0){let r=t?.renderBefore??null;o._$litPart$=i=new tn(e.insertBefore(Jt(),r),r,void 0,t??{})}return i._$AI(n),i};var Vo=globalThis,me=class extends He{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ji(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return st}};me._$litElement$=!0,me.finalized=!0,Vo.litElementHydrateSupport?.({LitElement:me});var Tc=Vo.litElementPolyfillSupport;Tc?.({LitElement:me});(Vo.litElementVersions??=[]).push("4.2.2");async function qi(n){return n.callWS({type:"neonplan3d/building/get"})}async function Un(n,e){return(await n.callWS({type:"neonplan3d/building/save",building:e})).revision}function Zi(n,e){return n.connection.subscribeMessage(t=>e(t.revision),{type:"neonplan3d/building/subscribe"})}async function Xi(n,e){return(await n.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function Yi(n){return(await n.callWS({type:"neonplan3d/packs/list"})).packs}var Fc="neonplan3d.seenOffers";function Ji(n){let e=[];try{e=JSON.parse(localStorage.getItem(Fc)??"[]")}catch{}return n.filter(t=>!e.includes(t.id))}var Dc="neonplan3d.seenUpdates";function Qi(n){let e=[];try{e=JSON.parse(localStorage.getItem(Dc)??"[]")}catch{}return n.filter(t=>!e.includes(`${t.id}@${t.release}`))}function es(n){return n.callWS({type:"neonplan3d/license/get"})}var Ic="1.19.0",Hc="neonplan3d-diagnostics";var Wc="alarm_control_panel|automation|binary_sensor|button|calendar|camera|climate|counter|cover|date|datetime|device_tracker|event|fan|group|humidifier|image|input_boolean|input_button|input_datetime|input_number|input_select|input_text|lawn_mower|light|lock|media_player|notify|number|person|remote|scene|script|select|sensor|siren|sun|switch|text|time|timer|todo|update|vacuum|valve|water_heater|weather|zone",Cc=[[/\b(?:https?|wss?|file|blob|data|ftp):[^\s'"<>)\]]*/gi,"<url>"],[/\beyJ[\w-]+\.[\w-]+\.[\w-]+/g,"<token>"],[/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g,"<email>"],[/\b\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?\b/g,"<ip>"],[/\b[0-9a-f]{1,4}(?::[0-9a-f]{0,4}){2,7}\b/gi,"<ip>"],[new RegExp(`\\b(?:${Wc})\\.[a-z0-9_]+\\b`,"g"),"<entity>"],[/\b[a-z][a-z0-9_]*\.[a-z0-9]*_[a-z0-9_]*\b/g,"<entity>"],[/\b[0-9a-f]{16,}\b/gi,"<id>"]];function Lc(n){let e=String(n??"");for(let[t,o]of Cc)e=e.replace(t,o);return e.replace(/\s+/g," ").trim().slice(0,200)}var Oc=/(neonplan3d[\w-]*\.js)(?:\?[^:\s)]*)?:(\d+):(\d+)/;function is(n,e,t,o){let i=Oc.exec(n??"");if(i)return`${i[1]}:${i[2]}:${i[3]}`;let r=/(neonplan3d[\w-]*\.js)(?:\?|$)/.exec(e??"");return r?`${r[1]}:${t??0}:${o??0}`:null}function Bc(n,e,t){return/iPad|Tablet|Silk|\bKF[A-Z]{2,4}\b/.test(n)||/Macintosh/.test(n)&&t>1?"tablet":/iPhone|iPod|Windows Phone/.test(n)?"phone":/Android/.test(n)?/Mobile/.test(n)&&e<600?"phone":"tablet":t>0&&e>0&&e<500?"phone":"desktop"}function Vc(n){let e=[[/Edg(?:e|A|iOS)?\/(\d+)/,"Edge"],[/OPR\/(\d+)/,"Opera"],[/SamsungBrowser\/(\d+)/,"Samsung"],[/Silk\/(\d+)/,"Silk"],[/(?:Firefox|FxiOS)\/(\d+)/,"Firefox"],[/CriOS\/(\d+)/,"Chrome"],[/; wv\).*Chrome\/(\d+)/,"WebView"],[/Chrome\/(\d+)/,"Chrome"],[/Version\/(\d+)[\d.]* (?:Mobile\/\w+ )?Safari/,"Safari"]];for(let[t,o]of e){let i=t.exec(n);if(i)return`${o} ${i[1]}`}return/AppleWebKit/.test(n)&&/iPhone|iPad|Macintosh/.test(n)?"WebKit":"other"}function Nc(n,e=0){let t;return(t=/Android (\d+)/.exec(n))?`Android ${t[1]}`:(t=/iPad.*? OS (\d+)/.exec(n))?`iPadOS ${t[1]}`:(t=/(?:iPhone|iPod).*? OS (\d+)/.exec(n))?`iOS ${t[1]}`:/Macintosh/.test(n)?e>1?"iPadOS":"macOS":(t=/Windows NT (\d+)/.exec(n))?`Windows ${t[1]}`:/CrOS/.test(n)?"ChromeOS":/Linux/.test(n)?"Linux":"other"}function Kc(n){let e=n??"";return e.trim()?/SwiftShader|llvmpipe|Software|Mali-[4T]|Mali-G(?:31|51|52|57)\b|Adreno[^\d]*[2-5]\d\d\b|PowerVR|Vivante|VideoCore|\bGC\d{3,4}\b|Intel.*\bHD Graphics(?:[2-5]\d{3})?\b/i.test(e)?"low":/RTX|GTX|GeForce|Quadro|Radeon (?:RX|Pro)|Apple (?:M\d|GPU)|Adreno[^\d]*[67]\d\d\b|Mali-G7\d|Iris Xe|Intel.*Arc/i.test(e)?"high":"mid":null}var ss,ts=!1,Ge=!1,No,Ke={},jn=0,kt=0,as=null,ls=null,cs=null,We=[],Ko=new Set;function Go(){return Ge}function ds(n){return Ko.add(n),()=>Ko.delete(n)}function us(n){ss=n,!ts&&(ts=!0,window.addEventListener(Hc,e=>{let t=!!e.detail?.enabled;fs(t)}),Uo())}function at(n){Ge&&(Ke[n]=(Ke[n]??0)+1)}function hs(n){if(!Ge)return;n.fps>0&&(jn+=n.fps,kt++),as=n.low;let e=window.devicePixelRatio||1;ls=Math.round(n.pixelRatio/e*100)/100,n.gpu!==void 0&&(cs=Kc(n.gpu))}function ps(n,e){if(!e)return;let t=Lc(n);if(!t)return;let o=We.find(i=>i.msg===t&&i.where===e);o?o.count++:We.length<20&&We.push({msg:t,where:e,count:1,version:Ic})}function ns(n){let e=n.error,t=e?`${e.name}: ${e.message}`:n.message;ps(t,is(e?.stack,n.filename,n.lineno,n.colno))}function os(n){let e=n.reason;e instanceof Error&&ps(`${e.name}: ${e.message}`,is(e.stack))}function rs(){Uo()}function fs(n){if(n!==Ge){Ge=n,n?(window.addEventListener("error",ns),window.addEventListener("unhandledrejection",os),window.addEventListener("pagehide",rs),No=setInterval(()=>{Uo()},6e5)):(window.removeEventListener("error",ns),window.removeEventListener("unhandledrejection",os),window.removeEventListener("pagehide",rs),clearInterval(No),No=void 0,Ke={},jn=kt=0,We=[]);for(let e of Ko)e(n)}}function Gc(){let n=navigator.userAgent,e=navigator.maxTouchPoints||0,t=Math.min(screen.width||0,screen.height||0);return{device:Bc(n,t,e),browser:Vc(n),os:Nc(n,e),low_end:as,render_scale:ls,fps:kt?Math.round(jn/kt*10)/10:null,fps_n:kt,gpu_tier:cs,views:{...Ke}}}async function Uo(){let n=ss;if(!n)return;let e={type:"neonplan3d/diagnostics/client"};Ge&&(e.client=Gc(),e.errors=We);let t=Ke,o=We;Ge&&(Ke={},jn=kt=0,We=[]);try{let i=await n.callWS(e);fs(!!i?.enabled)}catch{if(Ge){for(let[i,r]of Object.entries(t))Ke[i]=(Ke[i]??0)+r;We=[...o,...We].slice(0,20)}}}function Uc(n){return n.shape==="cyl"&&(n.axis??"y")==="y"&&n.y>.9&&n.h<.02}function qo(n){let e=ue(n);return!!e&&/(hob|cooker|stove|herd)/.test(n)&&e.parts.filter(Uc).length>=2}function on(n){return!!ue(n)?.bindings?.some(e=>e.id==="climate"&&e.domains?.includes("climate"))}var ms=[],jo=new Map,gs=0;function _s(n){ms=n,jo=new Map(n.flatMap(e=>e.items.map(t=>[jc(e.id,t.id),t]))),gs++}function rn(){return ms}function xt(){return gs}function jc(n,e){return`pack:${n}:${e}`}function St(n){return n.startsWith("pack:")}function $t(n){return n==="robot_vacuum"||St(n)&&n.endsWith(":robot_vacuum")}var qc={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function bs(n){return ue(n)?.parts.find(e=>e.screen)}function ue(n){if(!St(n))return;let e=jo.get(n);if(e)return e;let[,t,...o]=n.split(":"),i=qc[t];return i?jo.get(`pack:${i}:${o.join(":")}`):void 0}function ws(n,e){let t=e.split("-")[0];return n.name[t]??n.name.en??Object.values(n.name)[0]??n.id}function pe(n,e){let t=ue(e.type),o=Ce(n,e.x,e.z);if(e.mount_y!=null)return o+e.mount_y;if(e.type==="lamp_wall")return o+vs;if(qn.has(e.type))return Math.max(o,lt(n,e.x,e.z)-Zn(e.type,e.h));if(e.type==="led_strip")return lt(n,e.x,e.z)-.04-Math.max(.02,e.h);switch(t?.mount){case"surface":return Xn(n,e.x,e.z);case"wall":return o+(t.wall_y??1);case"ceiling":return lt(n,e.x,e.z)-e.h;default:return o+(t?0:ys(e))}}function Xc(n,e=0){let t=(n.rotation??0)*Math.PI/180,o=Math.cos(t),i=Math.sin(t),r=Yc(n,e+n.h/2);return[0,n.h].flatMap(s=>[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]].map(([a,l])=>r(n.x+a*o-l*i,e+s,n.z+a*i+l*o)))}function xs(n){let e=Xc({...n,x:0,z:0}).map(([i,,r])=>[i,r]).sort((i,r)=>i[0]-r[0]||i[1]-r[1]),t=(i,r,s)=>(r[0]-i[0])*(s[1]-i[1])-(r[1]-i[1])*(s[0]-i[0]),o=i=>{let r=[];for(let s of i){for(;r.length>1&&t(r[r.length-2],r[r.length-1],s)<=1e-10;)r.pop();r.push(s)}return r.slice(0,-1)};return[...o(e),...o([...e].reverse())].map(([i,r])=>[i+n.x,r+n.z])}function Yc(n,e){let t=(n.rotation_x??0)*Math.PI/180,o=(n.rotation_z??0)*Math.PI/180;if(!t&&!o)return(u,p,f)=>[u,p,f];let i=(n.rotation??0)*Math.PI/180,r=Math.cos(i),s=Math.sin(i),a=Math.cos(t),l=Math.sin(t),d=Math.cos(o),c=Math.sin(o);return(u,p,f)=>{let g=u-n.x,m=f-n.z,h=g*r+m*s,v=p-e,_=-g*s+m*r,b=v*a-_*l,k=v*l+_*a,z=h*d-b*c,E=h*c+b*d;return[n.x+z*r-k*s,e+E,n.z+z*s+k*r]}}var Le={field:null,size:1,right:0,up:0};var Ss=["rain","snow","clouds","lightning","sky"];var Jc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,gravel_bed:.03,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function $s(n){return n==="hedge"||n==="fence"||n==="pergola"}function Qc(n,e,t){let o=n.slope??0;if(!o||n.type==="pool")return 0;let i=n.slope_dir??"x",r=(d,c)=>i==="x"?d:i==="-x"?-d:i==="z"?c:-c,s=1/0,a=-1/0;for(let[d,c]of n.points){let u=r(d,c);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(e,t)-s)/(a-s)));return o*l}function ed(n,e,t,o){return zs(n,e)+Jc[e.type]-td(n,e,t,o)}var Xo=-.2,Zo={set:!1,level:Xo};function Ms(n){let e=n?.settings.terrain??null;Zo={set:e?.level!=null,level:e?.level??Xo}}function Ps(n){return n.elevation>.3?0:Zo.set?Zo.level-n.elevation:Xo}function zs(n,e){return Ps(n)+(e.offset??0)}function td(n,e,t,o){return e.type==="pool"?0:Qc(e,t,o)}function sn(n,e,t){let o=(n.outdoor??[]).filter(r=>!$s(r.type)&&r.type!=="pool"&&G([e,t],r.points)),i=[...o].reverse().find(r=>r.cut)??o[0];return i?ed(n,i,e,t):Ps(n)}function Es(n,e){return zs(n,e)+(e.above?As(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function nd(n){return n.depth&&n.depth>=.3?Math.min(5,n.depth):n.above?As(n):1.5}function od(n,e){return e.above?!1:(n.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!$s(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(o=>G(o,t.points)))}function an(n,e){return!e.above&&!od(n,e)?ln(n,e)-.05:Es(n,e)-nd(e)}function ln(n,e){return Es(n,e)-.15}function As(n){return n.height&&n.height>.3?n.height:1.2}var rd={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var Rs={type:"none",pitch:35,overhang:.4},id={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Rs}};var cn=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],Ts=.3;var Fs=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),vs=1.75;function Ds(n){if(["lamp_ceiling","lamp_panel","lamp_pendant","stairwell","parking"].includes(n.type))return!1;let e=ue(n.type);return!(e?.mount==="ceiling"&&e.light)}var qn=new Set(["lamp_downlight","lamp_spot"]);function Zn(n,e){return n==="lamp_spot"?Math.max(.06,e)+.008:.02}function Yo(n){return Fs.has(n)||!!ue(n)?.light}var sd=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function ys(n){switch(n.type){case"home_battery":return n.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-n.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return n.variant==="bank"?.75:n.variant==="pole"||n.variant==="pillar"||n.variant==="parcel"?0:1;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Xn(n,e,t){let o=Ce(n,e,t);for(let i of n.furniture)!(sd.has(i.type)||ue(i.type)?.surface)||!G([e,t],Mt(i))||(o=Math.max(o,Ce(n,i.x,i.z)+(i.mount_y??0)+i.h));return o}var Zc=new Set([...Fs,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),ks={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function Jo(n){n.energy={...rd,...n.energy??{}},n.presence=n.presence??[],n.settings={...id,...n.settings,roof:{...Rs,...n.settings?.roof??{}}};for(let e of n.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(o=>({...o,panel:o.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(o=>({...o,mount:o.mount??null,rotation:o.rotation??0})),e.furniture=e.furniture.map(o=>({...o,entity:o.entity??null,power:o.power??null}));let t=e.placements.filter(o=>o.entity_id.startsWith("light.")&&!o.pin);if(t.length){let o={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let r=o[i.mount??"ceiling"],[s,a,l]=ks[r];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:r,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}e.openings=e.openings.map(o=>({...o,hinge:o.hinge??"left",leaves:o.leaves??1,swing:o.swing??"in",style:o.style??null,cover:o.cover??null,contact:o.contact??null,contact2:o.contact2??null,tilt:o.tilt??null}))}return n}function Fe(n){let e=0;for(let t=0;t<n.length;t++){let[o,i]=n[t],[r,s]=n[(t+1)%n.length];e+=o*s-r*i}return e/2}function xe(n){let e=Fe(n);if(Math.abs(e)<1e-9){let i=n.length||1;return[n.reduce((r,s)=>r+s[0],0)/i,n.reduce((r,s)=>r+s[1],0)/i]}let t=0,o=0;for(let i=0;i<n.length;i++){let[r,s]=n[i],[a,l]=n[(i+1)%n.length],d=r*l-a*s;t+=(r+a)*d,o+=(s+l)*d}return[t/(6*e),o/(6*e)]}function Mt(n){if(n.rotation_x||n.rotation_z)return xs(n);let e=n.rotation*Math.PI/180,t=Math.cos(e),o=Math.sin(e),i=n.w/2,r=n.d/2;return[[-i,-r],[i,-r],[i,r],[-i,r]].map(([s,a])=>[n.x+s*t-a*o,n.z+s*o+a*t])}function G(n,e){let t=!1;for(let o=0,i=e.length-1;o<e.length;i=o++){let[r,s]=e[o],[a,l]=e[i];s>n[1]!=l>n[1]&&n[0]<(a-r)*(n[1]-s)/(l-s)+r&&(t=!t)}return t}function ze(n,e){return Qo(n,e)+(e?.floor_offset??0)}function Qo(n,e){return e?.wall_offset??(e?.elevation??n.elevation)-n.elevation}function Ue(n,e){return e?.ceiling_height??e?.height??n.height}function Is(n,e,t){return n.rooms.find(o=>G([e,t],o.points))}function Ce(n,e,t){return ze(n,Is(n,e,t))}function lt(n,e,t){let o=Is(n,e,t);return ze(n,o)+Ue(n,o)}function dn(n){let e=n.rooms.filter(t=>t.points.length>=3);return e.length?Math.max(...e.map(t=>n.elevation+ze(n,t)+Ue(n,t))):n.elevation+n.height}var Hs={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var ad=700,tr="neonplan3d.unsaved",Pt="1.19.0",Cs="floorplan-3d.unsaved";function ld(){try{let n=localStorage.getItem(tr)??localStorage.getItem(Cs);return n?JSON.parse(n):null}catch{return null}}function er(n){try{n?localStorage.setItem(tr,JSON.stringify(n)):(localStorage.removeItem(tr),localStorage.removeItem(Cs))}catch{}}var zt=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];packsLoaded=!1;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},ad),this.host.requestUpdate()}get frontendVersion(){return Pt}get versionGap(){return!this.backendVersion||Pt==="dev"||this.backendVersion===Pt?null:cd(this.backendVersion,Pt)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Pt!=="dev"&&this.backendVersion!==Pt}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Jo(e.building))}discardDraft(){this.draft=null,er(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!(!e||!this.hass)){this.pending=null;for(let t of e.floors)for(let o of t.furniture)o.mount_y!=null&&o.mount_y>10&&(o.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await Un(this.hass,e);this.ownRevisions.add(t),this.revision=t,this.saveState=this.pending?"saving":"saved",this.saveError=null,er(null)}catch(t){this.saveState="error",this.saveError=Ws(t),er({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null}}async start(){if(this.hass&&(us(this.hass),await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await Zi(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await Yi(this.hass)}catch{this.packs=[]}_s(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await qi(this.hass);this.building=Jo(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=ld()),this.revision=e.revision,this.error=null}catch(e){this.error=Ws(e)}this.host.requestUpdate()}}};function Ws(n){return n&&typeof n=="object"&&"message"in n?String(n.message):String(n)}function cd(n,e){let t=n.split(/[.-]/).map(i=>Number.parseInt(i,10)||0),o=e.split(/[.-]/).map(i=>Number.parseInt(i,10)||0);for(let i=0;i<Math.max(t.length,o.length);i++){let r=(t[i]??0)-(o[i]??0);if(r)return r}return 0}var Ls;function nr(){let n=new URL("./neonplan3d-editor.js?v=2682e1e76868",new URL(import.meta.url)).href;return Ls??=import(n),Ls}var dd={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},ud=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),hd=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),pd=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Yn=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],js=new Set(["light","switch","fan"]);function qs(n){return n.slice(0,n.indexOf("."))}function I(n){return dd[qs(n)]??null}function Os(n){return n!==null&&n!=="scene"&&n!=="script"}function pn(n,e){let t=n.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&n.devices?.[t.device_id]?.area_id||null:null}function Bs(n,e){let t=I(e);if(!t)return!1;let o=n.entities?.[e];if(o?.hidden||o?.entity_category)return!1;let i=n.states[e];if(!i)return!1;let r=i.attributes.device_class;return t==="sensor"?r?ud.has(r):hd.has(String(i.attributes.unit_of_measurement??"")):t==="binary"?r?pd.has(r):!!o?.area_id:!0}var fd=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Vs(n,e){if(I(e)!=="sensor")return!1;let t=n.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let o=n.states[e];return!o||!o.attributes.unit_of_measurement||fd.has(String(o.attributes.device_class??""))?!1:Number.isFinite(Number(o.state))||K(o)}var or=null;function hn(n){let e=or;if(e&&e.entities===n.entities&&e.devices===n.devices&&(e.states===n.states||(e.states=n.states,Object.keys(n.states).length===e.stateCount)))return e;let t=new Map,o=new Map,i=[],r=new Map,s=new Map;for(let l of Object.keys(n.entities??{})){let d=n.entities[l],c=d.device_id;c&&d.area_id&&(s.get(c)??s.set(c,new Set).get(c)).add(d.area_id),c&&ur(n,l)&&(o.get(c)??o.set(c,[]).get(c)).push(l),c&&!d.hidden&&!d.entity_category&&(r.get(c)??r.set(c,new Set).get(c)).add(qs(l));let u=Bs(n,l),p=pn(n,l);if(!p){(u||Vs(n,l))&&Os(I(l))&&i.push(l);continue}u&&(t.get(p)??t.set(p,[]).get(p)).push(l)}if(n.entities)for(let l of Object.keys(n.states))n.entities[l]||(Bs(n,l)||Vs(n,l))&&Os(I(l))&&i.push(l);i.sort((l,d)=>Yn.indexOf(I(l))-Yn.indexOf(I(d))||Z(n,l).localeCompare(Z(n,d)));for(let[l,d]of t){let c=n.areas?.[l]?.name;d.sort((u,p)=>{let f=Yn.indexOf(I(u)),g=Yn.indexOf(I(p));return f-g||Z(n,u,c).localeCompare(Z(n,p,c))})}let a=new Set([...s].filter(([,l])=>l.size>1).map(([l])=>l));return or={entities:n.entities,devices:n.devices,states:n.states,stateCount:Object.keys(n.states).length,areas:t,power:o,unassigned:i,domains:r,hubs:a},or}function le(n,e){return!e||!n.entities?[]:hn(n).areas.get(e)??[]}var md={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},gd=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),_d=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function bd(n,e){let t=n.entities?.[e]?.device_id,o=t&&!hn(n).hubs.has(t)?hn(n).domains.get(t):void 0;return o&&[...o].some(i=>gd.has(i))?!1:!_d.test(`${e} ${n.states[e]?.attributes.friendly_name??""}`)}function ir(n,e,t,o){let i=t.climate?.[o];if(i==="none")return[];if(i)return n.states[i]?[i]:[];let r=md[o],s=(f,g)=>G([f,g],t.points),a=e?.placements.filter(f=>f.entity_id.startsWith("sensor."))??[],l=a.filter(f=>s(f.x,f.z)).map(f=>f.entity_id),d=new Set(a.filter(f=>!s(f.x,f.z)).map(f=>f.entity_id)),c=[...new Set([...le(n,t.area_id).filter(f=>!d.has(f)),...l])],u=c.filter(f=>f.startsWith("sensor.")&&n.states[f]?.attributes.device_class===r&&bd(n,f));if(u.length)return u;let p=Zs[o];return p?c.filter(f=>f.startsWith("climate.")&&typeof n.states[f]?.attributes[p]=="number"):[]}var Zs={temperature:"current_temperature",humidity:"current_humidity"};function wd(n,e,t){let o=n.states[e];if(e.startsWith("climate.")){let r=Zs[t],s=r?Number(o?.attributes[r]):Number.NaN;return t==="temperature"?Ns(s,Ee(n)):s}let i=Number(o?.state);return t==="temperature"?Ns(i,o?.attributes.unit_of_measurement):i}function Ee(n){return n.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function Ns(n,e){return e==="\xB0F"?(n-32)*5/9:e==="K"?n-273.15:n}function Et(n,e){return Ee(n)==="\xB0F"?e*9/5+32:e}function je(n,e,t,o){let i=ir(n,e,t,o).map(r=>wd(n,r,o)).filter(r=>Number.isFinite(r));return i.length?i.reduce((r,s)=>r+s,0)/i.length:null}function Xs(n,e){return!!n.entities&&hn(n).hubs.has(e)}function sr(n,e){return n.entities?hn(n).power.get(e)??[]:[]}function Z(n,e,t){let i=n.states[e]?.attributes.friendly_name??n.entities?.[e]?.name??e;if(t&&i.length>t.length+1&&i.toLowerCase().startsWith(t.toLowerCase()+" ")){let r=i.slice(t.length+1);return r.charAt(0).toUpperCase()+r.slice(1)}return i}function K(n){return!n||n.state==="unavailable"||n.state==="unknown"}var vd=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function ar(n){return!!n&&n.entity_id.startsWith("sensor.")&&n.attributes.device_class==="enum"}function lr(n){return n?n==="cleaning"||/clean|sweep|mop/.test(n.toLowerCase()):!1}function Oe(n){if(!n)return!1;if(n.entity_id.startsWith("vacuum."))return lr(n.state)||n.state==="returning";switch(I(n.entity_id)){case"light":case"switch":case"fan":case"binary":return n.state==="on";case"cover":return n.state==="open"||n.state==="opening";case"climate":return n.attributes.hvac_action==="heating"||n.attributes.hvac_action==="cooling";case"media":return n.state==="playing";case"lock":return n.state==="unlocked"||n.state==="open";case"sensor":return ar(n)&&vd.has(String(n.state).toLowerCase());default:return!1}}function Ys(n,e){if(!n||K(n))return e?1:0;let t=String(n.state).toLowerCase();return e||t==="run"||t==="cooking"||t==="on"?1:t==="ready"||t==="standby"||t==="pause"||t==="paused"?.3:0}function Js(n){if(!n||K(n))return null;let e=String(n.state).toLowerCase();if(e==="off")return null;let t=String(n.attributes.hvac_action??"").toLowerCase(),o=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],i=["heating","cooling","drying","fan"].includes(t);return{color:o,level:i||!t?1:.45}}function Qs(n,e){if(!n||!e||!/^#[0-9a-f]{6}$/i.test(e))return n;let t=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),o=a=>{let l=Math.max(...a),d=Math.min(...a),c=l-d;return l<=0||c/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/c+6)%6:l===a[1]?(a[2]-a[0])/c+2:(a[0]-a[1])/c+4)*60,c/l]},[i]=o(t),[r]=o(n.color);if(i<0||r<0)return i<0&&r<0?n:null;let s=Math.abs(i-r);return Math.min(s,360-s)<=30?n:null}function qe(n,e){if(!n||n.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:n.attributes,o=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,i=t.rgb_color,r;return i&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?r=[i[0]/255,i[1]/255,i[2]/255]:typeof t.color_temp_kelvin=="number"?r=yd(t.color_temp_kelvin):r=[1,.71,.28],{color:r,level:o}}function yd(n){let e=Math.min(1,Math.max(0,(n-2200)/4300)),t=[1,.66,.26],o=[.78,.9,1];return[t[0]+(o[0]-t[0])*e,t[1]+(o[1]-t[1])*e,t[2]+(o[2]-t[2])*e]}function At(n,e,t=null){if(n==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(n==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(n){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var kd=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),xd=new Set(["garage","gate"]),Sd=new Set(["window","opening"]);function un(n,e,t=!1){let o=new Map;return e.length&&n.forEach((i,r)=>{let s=t&&e.length===1?e[0]:e[r];s&&o.set(i.id,s)}),o}function fn(n,e){let t=new Map,o=(r,s)=>r==="none"?null:r??s??null,i=(r,s,a)=>({cover:o(r.cover,s),contact:r.sensor==="handle"&&r.contact==null?null:o(r.contact,a),tilt:r.tilt==="none"?null:r.tilt,contact2:r.leaves===2&&r.contact2&&r.contact2!=="none"?r.contact2:null,tilt2:r.leaves===2&&r.tilt2&&r.tilt2!=="none"?r.tilt2:null,position:r.position&&r.position!=="none"?r.position:null,positionInverted:!!r.position_inverted,tiltAngle:r.tilt_angle&&r.tilt_angle!=="none"?r.tilt_angle:null,tiltMax:r.tilt_max??null,tiltOffset:r.tilt_offset??null,tiltInvert:!!r.tilt_invert,shut:!!r.shut,...r.contact_invert?{contactInvert:!0}:{}});for(let r of e){for(let s of r.rooms){let a=r.openings.filter(b=>b.room_id===s.id).sort((b,k)=>b.edge-k.edge||b.offset-k.offset);if(!a.length)continue;let l=le(n,s.area_id),d=b=>n.states[b]?.attributes.device_class,c=l.filter(b=>I(b)==="cover"&&kd.has(d(b))),u=a.filter(b=>b.type==="window"),p=a.filter(b=>b.type==="door"),f=a.filter(b=>b.type==="garage"),g=un(u,c,!0),m=un(u,l.filter(b=>I(b)==="binary"&&Sd.has(d(b)))),h=un(p,l.filter(b=>I(b)==="binary"&&d(b)==="door")),v=un(f,l.filter(b=>I(b)==="cover"&&xd.has(d(b)??""))),_=un(f,l.filter(b=>I(b)==="binary"&&d(b)==="garage_door"));for(let b of a){let k=b.type==="window"?g:b.type==="garage"?v:null,z=b.type==="window"?m:b.type==="garage"?_:h;t.set(b.id,i(b,k?.get(b.id),z.get(b.id)))}}for(let s of r.openings)t.has(s.id)||t.set(s.id,i(s))}return t}var $d=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Md(n){if(!n||K(n))return null;let e=n.attributes.window_state;for(let t of[typeof e=="string"?e:null,n.state]){if(!t)continue;let o=$d.find(([i])=>i.test(t.trim()));if(o)return o[1]}return null}var Pd=.5;function Be(n,e,t="window"){let o=h=>!!h&&n.states[h]?.state==="on",i=h=>!!h&&!!n.states[h]&&!K(n.states[h]),r=h=>h?Md(n.states[h]):null,s=h=>{let v=r(h);return e.contactInvert&&h&&h!==e.tilt&&h!==e.tilt2&&v!=="tilted"&&v?v==="open"?"closed":"open":v},a=o(e.tilt2)||s(e.tilt2)==="tilted"||s(e.contact2)==="tilted",l=s(e.contact2)==="open"&&!a?1:0,d=o(e.tilt)||s(e.tilt)==="tilted"||s(e.contact)==="tilted",c=d?1:0,u=e.tiltAngle?Number(n.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(u)){let h=(u-(e.tiltOffset??0))*(e.tiltInvert?-1:1);c=Math.min(1,Math.max(0,h/(e.tiltMax||15))),c<.08&&(c=0),d=c>0}let p=s(e.contact)==="open"&&!d?1:0,f=null,g=e.cover?n.states[e.cover]:void 0,m=zd(n,e.position);if(m!==null)f=e.positionInverted?m:1-m;else if(g&&!K(g)){let h=g.attributes.current_position;typeof h=="number"?f=1-Math.min(100,Math.max(0,h))/100:f=g.state==="closed"?1:g.state==="opening"||g.state==="closing"?.5:0}else e.cover&&(f=0);if(t==="door"){let h=s(e.contact);return{open:h===null?e.shut?0:Pd:h==="closed"?0:1,open2:s(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:f,sensed:h!==null||f!==null}}if(t==="garage"){let h=s(e.contact),v=f!==null||h!==null;return f===null&&(f=h===null||h==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:f,sensed:v}}return{open:p,open2:l,tilt:c,tilt2:a?1:0,cover:f,sensed:i(e.contact)||i(e.tilt)||Number.isFinite(u)}}function zd(n,e){let t=e?n.states[e]:void 0;if(!t||K(t))return null;let o=Number(t.state);if(!Number.isFinite(o))return null;let i=t.attributes.unit_of_measurement==="%"||o>1;return Math.min(1,Math.max(0,i?o/100:o))}function cr(n,e){let t=new Map,o=[];for(let s of e){let a=I(s)==="camera"?`camera:${s}`:n.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),o.push(a)),l.push(s)}let i=o.map(s=>{let a=t.get(s),l=a.find(d=>!n.entities?.[d]?.name)??a[0];return{primary:l,others:a.filter(d=>d!==l)}}),r=new Map(e.map((s,a)=>[s,a]));return i.sort((s,a)=>r.get(s.primary)-r.get(a.primary))}function Jn(n,e){return cr(n,e).map(t=>t.primary)}var rr={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},ea=new Set(["tv_board","tv_wall"]);function ta(n,e){let t=n.states[e.entity];if(!t)return!1;let o=e.attribute?t.attributes[e.attribute]:t.state;if(o==null)return!1;let i=String(o).toLowerCase(),r=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===r||r.length>=3&&i.includes(r)}function na(n){return ea.has(n)||!!bs(n)}function Qn(n){return na(n)||n==="desk"||n==="fridge_smart"}function Rt(n,e){let t=new Set,o=ct(n,e),i=e.some(r=>r.openings.some(s=>s.confirm))?fn(n,e):null;for(let r of e){for(let s of r.placements)s.confirm&&t.add(s.entity_id);for(let s of r.openings){let a=s.confirm?i?.get(s.id)?.cover:null;a&&a!=="none"&&t.add(a)}for(let s of r.furniture){let a=s.confirm?o.get(s.id)?.entity:null;a&&a!=="none"&&t.add(a)}}return t}function oa(n,e){let t=new Map;for(let o of e)for(let i of o.furniture){if(i.type!=="awning")continue;let r=i.entity&&i.entity!=="none"?i.entity:null,s=r?n.states[r]:void 0,a=i.awning_position&&i.awning_position!=="none"?n.states[i.awning_position]:void 0,l=i.awning_time??20;if(!s||K(s)){t.set(i.id,{out:0,moving:0,time:l});continue}let d=p=>i.awning_invert?1-p:p,c=a&&Number.isFinite(Number(a.state))?Number(a.state):s.attributes.current_position,u=s.state==="opening"?i.awning_invert?-1:1:s.state==="closing"?i.awning_invert?1:-1:0;typeof c=="number"&&Number.isFinite(c)?t.set(i.id,{out:d(Math.min(1,Math.max(0,c/100))),moving:0,time:l}):u?t.set(i.id,{out:null,moving:u,time:l}):t.set(i.id,{out:d(s.state==="open"?1:0),moving:0,time:l})}return t}function dr(n,e){let t=i=>{if(!i||i==="none")return!1;let r=n.states[i]?.state;return r==="on"||r==="open"},o=new Map;for(let i of e)for(let r of i.furniture)r.type==="fridge_smart"&&o.set(r.id,{left:t(r.door_left),right:t(r.door_right)});return o}var Ks={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function ur(n,e){return e.startsWith("sensor.")&&n.states[e]?.attributes.device_class==="power"}function Ed(n,e){if(ur(n,e))return e;let t=n.entities?.[e]?.device_id;return t?sr(n,t).find(o=>o!==e)??null:null}function ct(n,e){let t=new Map;for(let o of e){let i=new Set([...o.furniture.flatMap(r=>[r.entity,r.power,r.bindings?.climate]),...o.placements.map(r=>r.entity_id)].filter(r=>!!r&&r!=="none"));for(let r of o.furniture){let s=r.type in Ks,a=on(r.type),l=a&&Object.prototype.hasOwnProperty.call(r.bindings??{},"climate"),d=s?Ks[r.type]:rr[r.type]??(a?rr.ac_unit:$t(r.type)?rr.robot_vacuum:void 0);if(!d&&r.entity==null&&r.power==null)continue;let c=o.rooms.find(h=>h.points.length>=3&&G([r.x,r.z],h.points)),u=c?Jn(n,le(n,c.area_id)):[],p=h=>`${h} ${Z(n,h)}`,f=l?r.bindings?.climate:r.entity,g=f==="none"?null:f??null;if(f==null&&!l){let h=u.filter(v=>!i.has(v));if(s){let v=h.filter(_=>I(_)==="light");g=v.find(_=>d.test(p(_)))??v[0]??null}else if($t(r.type)){let v=c?.area_id??null;g=Object.keys(n.entities??{}).find(_=>_.startsWith("vacuum.")&&!i.has(_)&&pn(n,_)===v)??null}else if(r.type==="radiator"||r.type==="ac_unit"||a){let v=h.filter(_=>I(_)==="climate");g=v.find(_=>d.test(p(_)))??v[0]??null}else if(na(r.type)){let v=h.filter(_=>I(_)==="media");g=v.find(_=>n.states[_]?.attributes.device_class==="tv")??v.find(_=>d?.test(p(_)))??(ea.has(r.type)?v[0]??null:null)}else d&&(g=h.find(v=>["switch","media","fan"].includes(I(v)??"")&&d.test(p(v)))??null);g&&i.add(g)}let m=r.power==="none"?null:r.power??null;r.power==null&&(m=g?Ed(n,g):null,!m&&d&&c&&!s&&(m=le(n,c.area_id).find(v=>ur(n,v)&&!i.has(v)&&d.test(p(v)))??null),m&&i.add(m)),(g||m)&&t.set(r.id,{entity:g,power:m})}}return t}function hr(n){if(!n||n.state==="off"||n.state==="standby"||K(n))return null;let e=n.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function ra(n,e,t,o=[]){let i=(u,p)=>G([u,p],t.points),r=ct(n,[e]),s=fn(n,[e]),a=[...e.placements.filter(u=>i(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>i(u.x,u.z)).flatMap(u=>[r.get(u.id)?.entity,r.get(u.id)?.power]),...e.openings.filter(u=>u.room_id===t.id).flatMap(u=>{let p=s.get(u.id);return p?[p.cover,p.contact,p.tilt,p.contact2]:[]}),...o.flatMap(u=>[u.window,u.cover,u.contact,u.tilt]),...t.panel??[]].filter(u=>!!u&&!!n.states[u]),l=new Set(t.hidden??[]),d=[...new Set(a)].filter(u=>!l.has(u)),c=new Set(d);return{shown:d,more:le(n,t.area_id).filter(u=>!c.has(u)&&!l.has(u))}}var Gs=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,Ad={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function eo(n,e){let t=e.car??{},o=u=>u&&u!=="none"?u:null,i=o(t.device)??o(e.entity),r=i?n.entities?.[i]?.device_id:null,s=r&&n.entities?Object.values(n.entities).filter(u=>u.device_id===r).map(u=>u.entity_id):[],a=u=>`${u} ${n.states[u]?.attributes.friendly_name??""} ${n.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,p,f)=>s.find(g=>p.includes(g.split(".")[0])&&Ad[u].test(a(g))&&(!f||f(g)))??null,d=u=>String(n.states[u]?.attributes.unit_of_measurement??""),c=u=>String(n.states[u]?.attributes.device_class??"");return{soc:o(t.soc)??s.find(u=>u.startsWith("sensor.")&&c(u)==="battery")??l("soc",["sensor"],u=>d(u)==="%"),range:o(t.range)??l("range",["sensor"],u=>/km|mi/.test(d(u)))??l("range",["sensor"]),charging:o(t.charging)??l("charging",["sensor"],u=>/^k?W$/.test(d(u)))??l("charging",["binary_sensor","switch"]),plugged:o(t.plugged)??s.find(u=>u.startsWith("binary_sensor.")&&c(u)==="plug")??l("plugged",["binary_sensor"]),lock:o(t.lock)??s.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:o(t.climate)??s.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:o(t.tracker)??s.find(u=>u.startsWith("device_tracker."))??null}}function Rd(n){let e=n.entity_id,t=String(n.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?n.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function to(n,e){let t=eo(n,e),o=h=>h?n.states[h]:void 0,i=h=>{let v=Number(o(h)?.state);return h&&Number.isFinite(v)?v:null},r=i(t.soc),s=i(t.range),a=o(t.charging),l=String(a?.attributes.unit_of_measurement??""),d=a&&/^k?W$/.test(l)?(i(t.charging)??0)*(l==="kW"?1e3:1):null,c=d!==null?d>50:!!a&&["on","charging","laden"].includes(a.state.toLowerCase()),u=o(t.plugged),p=o(t.lock),f=o(t.climate),g=o(t.tracker),m=g?.state.toLowerCase()??"";return{entities:t,soc:r!==null?Math.max(0,Math.min(100,r)):null,range:s,rangeUnit:String(o(t.range)?.attributes.unit_of_measurement??"km"),chargingW:d,charging:c,plugged:u?u.state==="on":null,locked:p?Rd(p):null,climateOn:f?f.entity_id.startsWith("climate.")?f.state!=="off"&&f.state!=="unavailable":f.state==="on":null,away:g&&m!=="home"&&!K(g)?m==="not_home"?"":g.state:null}}function ia(n,e){return e.flatMap(t=>t.furniture.filter(o=>o.type==="parking"&&o.car).flatMap(o=>Object.values(eo(n,o)))).filter(t=>!!t)}function mn(n,e,t){if(t==="none")return null;if(t)return t;let o=e?n.entities?.[e]?.device_id:null;if(!o||!n.entities)return null;for(let i of Object.values(n.entities))if(!(i.device_id!==o||!i.entity_id.startsWith("sensor."))&&(Gs.test(i.translation_key??"")||Gs.test(i.entity_id.split(".")[1])))return i.entity_id;return null}function Us(n){return n.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function sa(n,e,t,o){let i=t?n.states[t]?.attributes:void 0;for(let r of[o?n.states[o]?.state:void 0,i?.current_room,i?.room,i?.current_segment]){let s=pr(n,e,r);if(s)return s}return null}function pr(n,e,t){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let o=Us(t);if(!o)return null;let i=r=>[r.name,r.area_id??"",r.area_id&&n.areas?.[r.area_id]?.name||""].map(Us).filter(Boolean);return e.find(r=>i(r).includes(o))??e.find(r=>i(r).some(s=>s.length>=3&&(s.includes(o)||o.includes(s))))??null}var Td=new Set(["garage","gate","door"]);function fr(n,e){let t=new Set,o=new Set,i=r=>{if(!r||r==="none"||!n.states[r])return;let s=I(r);s==="light"?t.add(r):s==="cover"&&!Td.has(String(n.states[r].attributes.device_class??""))&&o.add(r)};for(let r of e.rooms){let s=new Set(r.hidden??[]);for(let a of Jn(n,le(n,r.area_id)))s.has(a)||i(a)}for(let r of e.placements)i(r.entity_id);for(let r of e.furniture)i(r.entity);return{lights:[...t],covers:[...o]}}function aa(n){let e=n.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function la(n,e,t){let o=t.target?.trim()??"";if(t.action==="navigate"&&o)history.pushState(null,"",o),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(t.action==="more_info"&&o)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:o},bubbles:!0,composed:!0}));else if(t.action==="service"&&o.includes(".")){let[i,r]=o.split(".",2);n.callService(i,r,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var ca={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",phone_hint:"Zeichnen geht am besten am PC oder Tablet \u2013 auf dem Handy kannst du ansehen und bedienen.",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",show_menu:"Anzeige",tool_menu:"Werkzeug",floor_label:"Etage:",floor_settings:"Etagen-Einstellungen",floor_settings_of:"Etage {floor}",floor_none_hint:"Lege oben mit \u201EEtage\u201C \u2192 \u201EEtage hinzuf\xFCgen\u201C deine erste Etage an.",tool_group_build:"Bauen",tool_group_outside:"Drau\xDFen",tool_room:"Raum",view_menu:"Ansicht",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Grundriss komplett",fit_hint:"Den ganzen Grundriss der Etage ins Bild holen (bei Drau\xDFen mit Garten)",room:"Raum",rooms:"R\xE4ume",room_name:"Name",room_id:"ID (Karten-Option room:)",room_openings:"T\xFCren und Fenster",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",room_inherit_heights:"Etagenh\xF6hen \xFCbernehmen",room_wall_offset:"Wandbeginn \xFCber Etagenboden (m)",room_floor_offset:"Raumboden \xFCber Wandbeginn (m)",room_levels_hint:"Wandbeginn z\xE4hlt ab dem Etagenboden. Der zus\xE4tzliche Bodenversatz hebt den fertigen Raumboden an; die Deckenh\xF6he z\xE4hlt ab diesem Boden.",steps_offset:"Stufenversatz (m)",steps_offset_hint:"0: Beginn an der Wandfl\xE4che. Positiv: weiter in den gew\xE4hlten Raum, mit ebener Anschlussfl\xE4che. Negativ: in Richtung Durchbruch.",steps_title:"Stufen am Durchbruch",steps_side:"Stufen in diesem Raum",steps_none:"Ohne Stufen",steps_lower:"tiefer gelegen",steps_higher:"h\xF6her gelegen",steps_equal:"gleiches Niveau",steps_count:"Anzahl Stufen",steps_depth:"Gesamttiefe (m)",steps_hint:"Die Breite folgt dem Durchbruch. Im h\xF6heren Raum wird die Bodenfl\xE4che f\xFCr die abw\xE4rts f\xFChrenden Stufen ausgespart.",steps_fit_warning:"Der Stufenlauf passt mit dieser Tiefe und diesem Versatz nicht in die verbundenen R\xE4ume. Tiefe, Versatz oder Raumseite \xE4ndern.",steps_height_warning:"F\xFCr den Durchbruch fehlt gemeinsame H\xF6he. Raumh\xF6he erh\xF6hen oder Bodenh\xF6he anpassen.",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",tech_open:"Technikraum zeichnen",tech_open_hint:"Danach auf die Wand im Plan tippen, an der deine Anlage h\xE4ngt.",tech_step:"Schritt {n}",tech_step_feed:"Tippe links auf \u201E{name}\u201C und dann auf die Stelle an der Wand, wo die Leitung hereinkommt (ganz unten: aus dem Boden).",tech_step_devices:"Tippe links auf Filterpumpe und Sandfilter \u2013 sie stellen sich an die Wand. W\xE4rmepumpe und Dosieranlage, wenn du sie hast.",tech_step_line:"Zieh eine Linie: von \u201E{a}\u201C zu \u201E{b}\u201C. Einfach auf das eine dr\xFCcken und zum anderen ziehen.",tech_step_loose:"Ein Rohr endet noch lose \u2013 zieh es weiter zu einem Ger\xE4t oder einer Leitung, oder l\xF6sche es (\u270B Ausw\xE4hlen).",tech_step_drawing:"Zieh weiter oder tippe Punkt f\xFCr Punkt \u2013 auf einem Ger\xE4t, einer Leitung oder einem Rohr endet die Linie.",tech_step_fit:"Tippe auf das Rohr, in das der Hahn (das Sichtglas) soll \u2013 es leuchtet orange auf.",tech_mode:"Pooltechnik",tech_mode_hint:"Den Technikraum auf dieser Wand zeichnen: Leitungen vom Pool hereinf\xFChren, Ger\xE4te hinstellen, Rohre ziehen",tech_draw:"Zeichnen",tech_pick:"Ausw\xE4hlen",pool_delete_confirm:"Den Pool mit allen {n} Rohren l\xF6schen?",tech_erase:"Radieren",tech_erase_hint:"Tippe auf ein Rohr, einen Kugelhahn, ein Sichtglas oder ein Loch \u2013 es wird gel\xF6scht. Verzeichnet? R\xFCckg\xE4ngig hilft auch.",tech_feeds:"Leitungen vom Pool",tech_devices:"Ger\xE4te",tech_fittings:"Armaturen",tech_hint:"Linie ziehen: auf ein Ger\xE4t, eine Leitung oder ein Rohr tippen und zum n\xE4chsten ziehen (oder Punkt f\xFCr Punkt tippen). Auf ein Rohr gezogen entsteht ein T-St\xFCck. Die Richtung des Wassers und den Anschluss am Ger\xE4t erkennt NeonPlan selbst.",tech_no_ports:"Setz zuerst mit dem Pool-Werkzeug Skimmer, Bodenablauf und Einl\xE4ufe an den Pool.",tech_ok:"Alles verbunden \u2013 das Wasser flie\xDFt.",tech_issue_loose:"{n} lose Rohrenden",tech_issue_port:"{name} nicht verbunden",tech_issue_feed:"{name} noch nicht hereingef\xFChrt",tech_feed_place:"Tipp auf die Stelle, wo die Leitung in den Raum kommt \u2013 ganz unten: aus dem Boden, h\xF6her: durch die Wand.",tech_start:"Auf ein Ger\xE4t oder eine Leitung tippen und eine Linie ziehen.",feed_skimmer:"Skimmer",feed_drain:"Bodenablauf",feed_inlet:"Einl\xE4ufe",feed_waste:"Kanal (R\xFCcksp\xFClen)",hp_ports:"Anschl\xFCsse",hp_side_right:"rechts",hp_side_left:"links",hp_side_back:"hinten",pool_depth:"Beckentiefe (m)",pool_rim:"Rand \xFCber dem Rasen (m)",pool_depth_hint:"Beckentiefe: vom Rand bis zum Boden. Ein 1,50 m tiefer Pool, der 20 cm aus dem Rasen schaut: Tiefe 1,50, Rand 0,20. Das Wasser steht 15 cm unter dem Rand.",pool_depth_ground:"Die Tiefe zeigt sich in 3D, sobald der Pool in einer Rasen-, Terrassen- oder anderen Fl\xE4che liegt \u2013 ohne Boden drumherum w\xE4re das Becken von au\xDFen zu sehen.",pool_port_depth:"Tiefe",pool_port_depth_hint:"Wie tief unter der Wasserlinie (m): Einl\xE4ufe meist 0,30, der Skimmer an der Wasserlinie",pool_valves:"Kugelh\xE4hne",pool_valve_shut:"zu",pool_valve_toggle:"Tippen stellt um \u2013 so, wie der Hahn wirklich steht",pool_joint:"Verbindung",block_some_fixed:"\u{1F512} Ein Teil davon ist fixiert \u2013 der Block l\xE4sst sich erst verschieben, wenn alle gel\xF6st sind.",unfix_all:"Alle l\xF6sen",wv_block_all:"Ganzer Block",wv_block_one:"Nur dieses Teil",wv_gap:"L\xFCcke: {w} \u2013 das passt hinein:",wv_gap_hint:"Tipp auf eine freie Stelle an der Wand: Hier erscheint, was hineinpasst.",wv_kit_title:"An die Wand",wv_recent:"Zuletzt benutzt",wv_none_fits:"Nichts passt in diese L\xFCcke.",wv_cat_base:"Unterschr\xE4nke & Boards",wv_cat_hang:"H\xE4ngend",wv_cat_tall:"Hochschr\xE4nke",wv_cat_living:"Sitzen & Liegen",wv_cat_light:"Leuchten",wv_cat_pack:"Aus deinen Packs",wv_cat_energy:"Energie",block_title:"M\xF6bel-Block",multi_title:"{n} M\xF6bel ausgew\xE4hlt",block_hint:"Ein Klick w\xE4hlt den ganzen Block, Ziehen verschiebt ihn. Ein einzelnes Teil: doppelt antippen oder unten seinen Namen w\xE4hlen.",multi_hint:"Umschalt + Klick nimmt M\xF6bel dazu oder heraus, Umschalt + Ziehen \xFCber freie Fl\xE4che zieht einen Rahmen. Zusammen verschieben, drehen, kopieren oder als Block zusammenfassen.",block_part_edit:"Nur dieses Teil bearbeiten",block_break:"Block aufl\xF6sen",block_make:"Als Block zusammenfassen",multi_mode:"Mehrere ausw\xE4hlen (Tippen nimmt dazu, Ziehen zieht einen Rahmen)",block_part:"Teil eines Blocks.",block_select:"Ganzen Block w\xE4hlen",block_delete:"{n} M\xF6bel l\xF6schen?",block_delete_fixed:"{n} M\xF6bel l\xF6schen? Einige davon sind fixiert.",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",spots_height_error:"Die Montageh\xF6he muss zwischen 0 und 10 m \xFCber dem zugeh\xF6rigen Geschoss liegen. Bitte die Dach- oder \xDCberdachungsh\xF6he pr\xFCfen.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_other_hint:"Grundriss aus Sweet Home 3D, einem iPhone-Scan, CAD (DXF), Blender/SketchUp oder einer Saugroboterkarte?",backup_other:"Zur Import-Seite (Beta)",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_busy_solar:"Solarmodule",stats_busy_sound:"Musik",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt auf dem Haus. Wie bei den W\xE4nden werden die zur Kamera gerichteten Fl\xE4chen durchsichtig.",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Sichtkegel in 3D zeigen",camera_detect_pins:"Erkennungs-Symbole zeigen (Person, Auto, Tier)",camera_detect_pins_hint:"Aus: Bei einer Erkennung erscheinen keine Symbole \xFCber der Kamera, nur der Sichtkegel f\xE4rbt sich rot \u2013 dezenter auf dem Wandtablet.",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m}. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort stellst du auch Auto Pro ein (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang & Kino)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",media_play_head:"Abspielen",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",wall_view:"Wandansicht",walk_start:"Rundgang durchs Haus",walk_title:"Rundgang",walk_end:"Beenden",walk_hint:"Ziehen: umsehen \xB7 Tippen auf den Boden: hinlaufen \xB7 W A S D / Pfeiltasten oder der Kn\xFCppel: laufen \xB7 Esc: beenden",card_next:"n\xE4chster Schritt \u2026",card_step_hole:"Durch ein Loch",card_step_fit:"Einbauen",card_step_end:"Oder ans Ziel",card_lay:"Verlegen",card_hole_out:"nach au\xDFen",card_hole_in:"nach innen",card_to:"Verbinden mit",card_through:"\xDCber (in Reihenfolge, wenn n\xF6tig)",card_group_pool:"Am Pool",card_group_tech:"Technik",card_group_joints:"T- und Y-St\xFCcke",card_group_holes:"L\xF6cher",card_open:"Anschl\xFCsse",card_open_other:"Karte dieses Teils \xF6ffnen",card_port:"Anschluss",card_via:"\xFCber",card_reroute:"Neu verlegen",card_disconnect:"Trennen",card_with:"verbinden mit \u2026",card_connect:"Verbinden",card_connect_with:"Verbinden mit \u2026",card_status:"{a} von {b} verbunden",card_show_plan:"Im Grundriss zeigen",card_show_wall:"In der Wandansicht zeigen",joint_name:"Name (z. B. Loch Skimmer)",conn_hole_out:"{name}: von innen nach au\xDFen",conn_hole_in:"{name}: von au\xDFen nach innen",hint_joint_place:"T- oder Y-St\xFCck: im Grundriss tippen \u2013 auf ein Rohr getippt, wird es ins Rohr eingesetzt",port_suction:"Saugseite",port_pressure:"Druckseite",port_pump:"Von der Pumpe",port_return:"R\xFCcklauf",port_waste:"Abwasser",port_in:"Eingang",port_out:"Ausgang",port_out1:"Ausgang 1",port_out2:"Ausgang 2",port_inside:"innen",port_outside:"au\xDFen",port_used:"belegt",joint_tee:"T-St\xFCck {n}",joint_y:"Y-St\xFCck {n}",joint_wall:"Loch {n} (Wand)",joint_floor:"Loch {n} (Boden)",joint_add_tee:"T-St\xFCck",joint_add_y:"Y-St\xFCck",wall_kit_hole_wall:"Loch in der Wand",wall_kit_hole_floor:"Loch im Boden",wall_kit_tee:"T-St\xFCck",wall_kit_y:"Y-St\xFCck",wall_run_place:"Auf die Wand tippen, wo es hin soll",valve_top6:"6-Wege-Ventil oben",valve_side6:"6-Wege-Ventil seitlich",valve_four:"4-Wege-Ventil",pool_valve_type:"Mehrwegeventil",pool_loose_end:"offenes Ende",pool_holes_hint:"L\xF6cher in Wand und Boden setzt du in der Wandansicht (Leiste links).",conn_add:"Rohr hinzuf\xFCgen",conn_from:"Von",conn_via:"\xDCber (in Reihenfolge)",conn_add_via:"+ Loch, Kugelhahn, Sichtglas \u2026",conn_to:"Nach",conn_and:"Und nach (zweites Ziel, mit T-St\xFCck davor)",conn_choose:"w\xE4hlen \u2026",conn_create:"Anlegen",conn_hint:"Der Weg wird automatisch gelegt \u2013 drinnen an den Anschl\xFCssen entlang, drau\xDFen rechtwinklig unter der Erde. Feinverlegen in der Wandansicht und im Grundriss.",wall_kit_pool:"Pooltechnik",wall_kit_energy:"Energie",wall_run_add:"+ Rohr",wall_run_start:"Rohr: am Ger\xE4t, auf einem Rohr (T-St\xFCck) oder auf der Wand anfangen",wall_run_next:"Weitere Punkte setzen \u2013 am Ger\xE4t oder auf einem Rohr endet es, Doppelklick oder Enter beendet",wall_run_down:"\u2193 In den Boden",wall_run_through:"\u27C2 Durch die Wand",wall_run_done:"Fertig",wall_run_fit:"Auf das Rohr tippen, wo es hin soll",wall_run_valve:"Kugelhahn",wall_run_sight:"Sichtglas",wall_run_pipe:"Rohr",wall_run_pt:"H\xF6he des Punkts (m)",wall_run_more:"Weiterzeichnen",wall_run_tip:"Punkte ziehen \xB7 Doppelklick entfernt \xB7 Kugelhahn antippen: auf/zu",wall_view_turn:"Um 45\xB0 drehen \u2013 an der Wand r\xFCckt es in den Raum",wall_view_fixed:"Fixiert \u2013 zum Ziehen erst l\xF6sen",wall_view_3d:"3D im Raum",wall_view_lift:"Nach oben oder unten ziehen: H\xF6he \xFCber Boden",wall_zoom_hint:"Vergr\xF6\xDFern: Mausrad oder zwei Finger",wall_zoom_all:"Ganze Wand",wall_view_hint_3d:"M\xF6bel antippen und auf dem Boden ziehen \xB7 Mausrad oder zwei Finger: n\xE4her oder weiter weg \xB7 mittlere oder rechte Maustaste (am Tablet zwei Finger): umsehen \xB7 unten Abst\xE4nde und H\xF6he eintippen \xB7 Pfeile links und rechts: zur n\xE4chsten Wand",wall_view_front:"Wand von vorne",wall_view_depth:"Abstand zur Wand (m)",wall_view_room:"W\xE4nde dieses Raums von vorne ansehen",hint_wall_pick:"Wandansicht: in den Raum klicken (oder nah an eine Wand)",wall_view_open:"Die Wand von vorne ansehen: M\xF6bel daran entlang der Wand und in der H\xF6he verschieben",wall_view_hint:"Ziehen verschiebt entlang der Wand und \u2013 bei H\xE4ngendem \u2013 in der H\xF6he \xB7 Pfeiltasten 1 cm, mit Umschalt 10 cm \xB7 Kanten rasten an Wandenden, T\xFCren, Fenstern und anderen M\xF6beln ein (Alt: frei) \xB7 Doppelklick \xF6ffnet das M\xF6bel im Grundriss",wall_view_empty:"An dieser Wand steht noch nichts \u2013 M\xF6bel, die mit dem R\xFCcken an der Wand stehen oder daran h\xE4ngen, erscheinen hier.",wall_view_left:"Abstand von links (m)",wall_view_floor:"steht auf dem Boden",wall_view_form:"Im Grundriss bearbeiten",wall_prev:"Vorige Wand",wall_next:"N\xE4chste Wand",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",rain_entity:"Regen von eigener Wetterstation",rain_entity_hint:"Ein Regensensor (an = Regen) oder eine Regenrate (mm/h) deiner Wetterstation sagt, ob es am Haus regnet \u2013 f\xFCr die Regenwarnung und den Regen in 3D. Ohne Auswahl entscheidet die Wetter-Entit\xE4t.",rain_ignore:"Bei Regen nicht warnen",rain_ignore_hint:"Dieses Fenster darf bei Regen offen bleiben (z. B. unter dem Vordach): keine Regenwarnung f\xFCr dieses Fenster, alle anderen warnen weiter.",outage_entity:"Stromausfall melden mit",outage_entity_hint:"Eine Entit\xE4t, die einen Stromausfall meldet: ein Netz-Sensor (binary_sensor der Klasse power \u2013 \u201Eaus\u201C hei\xDFt kein Strom), eine USV (\u201Eauf Batterie\u201C), eine Netzspannung unter 100 V oder ein eigener Helfer, der bei Ausfall \u201Ean\u201C ist. Dann erscheint eine Warnung, und der Netzanschluss wird durchgestrichen.",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_names:"Ger\xE4tenamen in Warnungen zeigen",alert_names_hint:"An: \u201EK\xFCche \xB7 Rauch: Rauchmelder K\xFCche\u201C. Aus: nur \u201EK\xFCche \xB7 Rauch\u201C \u2013 k\xFCrzer auf dem Wandtablet. Ohne Raum bleibt der Ger\xE4tename stehen.",alert_short_smoke:"Rauch",alert_short_gas:"Gas",alert_short_co:"Kohlenmonoxid",alert_short_water:"Wasser",alert_short_alarm:"Alarm ausgel\xF6st",alert_short_alarm_pending:"Alarm wird ausgel\xF6st",alert_short_window_rain:"Fenster offen bei Regen",alert_short_power_outage:"Stromausfall",power_outage:"Stromausfall",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_pets:"Haustiere zeigen",card_ghost:"Halloween-Geist zeigen",card_ghost_hint:"Fun-Pack Halloween: der Geist schwebt auch durch das Haus dieser Karte (z. B. am Wandtablet ausschalten)",card_pets_hint:"Fun-Pack Haustiere: die angelegten Tiere in dieser Karte zeigen (z. B. am Wandtablet ausschalten)",news_pets_title:"Neu: Haustiere \u2013 ein Geschenk f\xFCr euch",news_pets_text:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus, laufen durch die R\xE4ume, legen sich aufs Sofa und gehen sogar die Treppe hoch \u2013 und im Aquarium schwimmen Fische. Das Fun-Pack gibt es gratis mit jedem Kundenkonto.",news_to_shop:"Zum Shop",news_later:"Sp\xE4ter",news_never:"Nicht mehr anzeigen",gift_title:"\u{1F381} Zwei Geschenke f\xFCr dich: Halloween und Haustiere",gift_text:"Die Fun-Packs Halloween (K\xFCrbisse, Flederm\xE4use, Hexenkessel und ein Geist, der durchs Haus schwebt) und Haustiere (Katze, Hund und Kaninchen, die durch dein Haus laufen) liegen gratis in deinem Kundenkonto. Unter Erweiterungen installierst du sie mit einem Klick.",gift_install:"Zu den Erweiterungen",gift_title_free:"\u{1F381} Gratis: Halloween und Haustiere",gift_text_free:"K\xFCrbisse, Flederm\xE4use und ein Geist, der durchs Haus schwebt \u2013 dazu Katze, Hund und Kaninchen, die in deinem 3D-Haus leben. Beide Fun-Packs gibt es kostenlos mit einem Kundenkonto: Konto anlegen, E-Mail best\xE4tigen, den Schl\xFCssel aus der Mail unter Erweiterungen \u2192 Shop-Verbindung einf\xFCgen. Danach siehst du neue Packs direkt hier.",gift_register:"Kostenloses Konto anlegen",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus. Zur Kamera gerichtete Dachfl\xE4chen werden wie die W\xE4nde durchsichtig.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",ext_show_list:"Liste zeigen",ext_hide_list:"Liste zuklappen",ext_sum_installed:"installiert",ext_sum_updates:"Updates",ext_sum_missing:"noch nicht installiert",ext_sum_all:"Alle {n} installieren/aktualisieren",ext_sum_packs:"M\xF6bel-Packs ({items} M\xF6bel)",ext_sum_feature_packs:"Erweiterungen",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 Pro-Funktionen: {n}",pack_needs_update:"Diese Erweiterung braucht eine neuere NeonPlan-Version \u2013 bitte NeonPlan 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie Pro",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun-Pack \xB7 kostenlos f\xFCr Kunden",offers_dot:"Neues im Shop",ext_badge_new:"{n} neu",ext_badge_ready:"{n} bereit",ext_badge_ready_hint:"Packs zum Installieren oder Aktualisieren \u2013 ein Klick unter Erweiterungen",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"M\xF6bel-Packs und Pro-Erweiterungen f\xFCr NeonPlan 3D. Gekaufte Erweiterungen installierst du hier mit deinem Lizenzschl\xFCssel; sie bekommen Updates von selbst und funktionieren auch ohne Verbindung.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",fun_title:"Fun-Packs",fun_intro:"Kostenlose Extras zum Spa\xDF \u2013 f\xFCr jeden mit Kundenkonto. Mit verbundenem Schl\xFCssel liegen sie oben bei deinen Packs zum Installieren; hier schaltest du sie ein und aus.",fun_in_account:"Gratis in deinem Kundenkonto \u2013 oben bei deinen Packs installieren.",fun_register:"\u{1F381} Kostenloses Kundenkonto anlegen",fun_register_steps:"Gratis mit einem Kundenkonto: Konto anlegen, E-Mail best\xE4tigen, den Schl\xFCssel aus der Mail unter Shop-Verbindung einf\xFCgen.",fun_name_pets:"Haustiere",fun_feature_pets:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus: Sie laufen durch die R\xE4ume, legen sich aufs Sofa, aufs Bett oder auf den Teppich und schlafen nachts.",fun_name_halloween:"Halloween",fun_feature_halloween:"K\xFCrbisse, die mit einem Licht leuchten, Spinnennetz, Flederm\xE4use, Grabsteine, Skelett, Hexenkessel und Kerzen \u2013 und ein Geist, der ab und zu durchs Haus schwebt.",halloween_ghost:"Geist schweben lassen",halloween_deco_hint:"Die Deko findest du im Editor in der M\xF6bel-Bibliothek unter \u201EFun-Pack: Halloween\u201C. K\xFCrbis, Kessel und Kerzen leuchten mit einem verkn\xFCpften Licht.",pets_show:"Haustiere zeigen",pet_add:"Haustier hinzuf\xFCgen",pet_name:"Name",pet_kind:"Tier",pet_kind_cat:"\u{1F431} Katze",pet_kind_dog:"\u{1F436} Hund",pet_kind_rabbit:"\u{1F430} Kaninchen",pet_fur:"Fell",pet_fur_orange:"Rot",pet_fur_tabby:"Getigert",pet_fur_black:"Schwarz",pet_fur_white:"Wei\xDF",pet_fur_grey:"Grau",pet_fur_brown:"Braun",pet_fur_calico:"Gl\xFCckskatze",pet_fur_golden:"Golden",pet_fur_cream:"Creme",pet_breed:"Rasse",pet_breed_dachshund:"Dackel",pet_breed_pug:"Mops",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Sch\xE4ferhund",pet_floor:"Etage",pet_floor_auto:"Erdgeschoss",ext_active:"aktiv",ext_get:"Im Shop ansehen",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Danke, dass du NeonPlan 3D unterst\xFCtzt! Mit diesem Code schaltest du auf Discord die Rolle \u{1F499} Supporter frei \u2013 damit siehst du den Kanal #beta-feedback und testest neue Erweiterungen als Erste.",supporter_open:"Discord \xF6ffnen",supporter_how:"So geht's: Discord \xF6ffnen, in einem beliebigen Kanal /supporter {code} eingeben und senden. Die Rolle kommt sofort.",beta_yours:"Beta \xB7 f\xFCr dich als Supporter",beta_supporters:"Beta \xB7 zuerst f\xFCr Supporter",beta_yours_hint:"Weil du Supporter bist, darfst du diese Erweiterung schon vorab testen. Sag uns auf Discord (Kanal #beta-feedback), was gut l\xE4uft und was nicht.",beta_supporters_hint:"Diese Erweiterung ist noch in der Beta und zuerst nur mit dem Supporter-Pass erh\xE4ltlich. Sobald sie fertig ist, gibt es sie f\xFCr alle im Shop.",beta_feedback:"Feedback auf Discord",beta_become:"Supporter werden",beta_bar:"Beta \u2013 du testest als Supporter zuerst. Feedback gern auf Discord (#beta-feedback).",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Pro-Funktionen",ext_teaser_text:"M\xF6bel-Packs, Shop-Verbindung und Pro-Erweiterungen findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te, Gas- und Wasserverbrauch von heute \u2013 W\xE4rme folgt als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",pro_name_time_travel:"Zeitreise",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft; eine Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe mit Solltemperatur, Filterpumpe, Licht, pH und Chlor/Redox mit Ampel; die Abdeckung f\xE4hrt \xFCber das Wasser; Warnungen bei pH, Chlor und Frost",pool_teaser:"Mit Pool Pro lebt dein Pool: Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft. Eine Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe, pH und Chlor \u2013 mit Kn\xF6pfen f\xFCr Solltemperatur, Pumpe, Licht und Abdeckung.",pool_pro_hint:"Leere Felder sucht NeonPlan selbst \xFCber den Namen (eine Entit\xE4t mit \u201Epool\u201C im Namen), \u201EKeine\u201C schaltet eine Rolle ab. Die W\xE4rmepumpe darf eine Klima- oder Warmwasser-Entit\xE4t sein (dann l\xE4sst sich die Solltemperatur einstellen) oder ein Schalter; die Filterpumpe ein Schalter oder ein Leistungssensor.",pool_activate:"Pool Pro f\xFCr diesen Pool einschalten",pool_temperature:"Wassertemperatur",pool_heater:"W\xE4rmepumpe / Heizung",pool_pump:"Filterpumpe",pool_light:"Poolbeleuchtung",pool_ph:"pH-Wert",pool_chlorine_role:"Chlor / Redox",pool_chlorine:"Chlor",pool_orp:"Redox",pool_cover:"Abdeckung",pool_cover_open:"offen",pool_cover_closed:"zu",pool_cover_closed_part:"zu",pool_cover_open_btn:"Abdeckung \xF6ffnen",pool_cover_close_btn:"Abdeckung schlie\xDFen",pool_cover_stop:"Abdeckung anhalten",pool_heating:"heizt",pool_pump_on:"Pumpe l\xE4uft",pool_heater_on:"W\xE4rmepumpe an",pool_heater_off:"W\xE4rmepumpe aus",pool_colder:"K\xE4lter",pool_warmer:"W\xE4rmer",pool_shape:"Form",pool_shape_rect:"Eckig",pool_shape_round:"Rund",pool_shape_oval:"Oval",pool_diameter:"Durchmesser (m)",pool_shape_free:"Frei",tool_pool:"Pool",hint_pool:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen",hint_pool_tech:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen \xB7 Anschl\xFCsse, Ger\xE4te und Rohre rechts",hint_pipe_start:"Rohr: Start antippen (Anschluss oder Ger\xE4t)",hint_pipe_pool:"Rohr: zuerst den Pool antippen, zu dem die Rohre geh\xF6ren",hint_pipe_next:"Ecken antippen, dann das Ziel (Anschluss oder Ger\xE4t) \xB7 Esc bricht ab",pool_tool_empty:"Noch kein Pool auf dieser Etage: W\xE4hle oben die Form und ziehe den Pool auf.",pool_choose:"Welchen Pool bearbeiten?",pool_ports:"Anschl\xFCsse",pool_ports_hint:"Skimmer und Einl\xE4sse sitzen am Beckenrand, der Bodenablauf im Becken; der Abwasser-Anschluss nimmt das R\xFCcksp\xFClwasser auf. Im Plan verschieben.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bodenablauf",pool_port_inlet:"Einlass",pool_port_waste:"Abwasser",pool_devices:"Technik",furn_pool_pump:"Filterpumpe",furn_pool_filter:"Sandfilter",furn_pool_heat_pump:"W\xE4rmepumpe",furn_pool_dosing:"Dosieranlage",furn_pool_valve:"Kugelhahn",pool_valve_position:"Stellung des 6-Wege-Ventils",valve_filter:"Filtern",valve_backwash:"R\xFCcksp\xFClen",valve_rinse:"Nachsp\xFClen",valve_waste:"Entleeren",valve_recirculate:"Zirkulieren",valve_closed:"Geschlossen",pool_valve_open:"offen",pool_pipes:"Rohre",pool_pipe_draw:"Rohr zeichnen",pool_pipe_draw_hint:"Rohre verbinden Anschl\xFCsse und Ger\xE4te in Flie\xDFrichtung: vom Skimmer zur Pumpe, weiter zum Filter, \xFCber W\xE4rmepumpe oder Bypass zu den Einl\xE4ssen. An einer Verteilung flie\xDFt das Wasser \xFCber die W\xE4rmepumpe, solange sie an ist, sonst \xFCber den Bypass; ein geschlossener Kugelhahn sperrt. Kugelhahn im Plan antippen: auf/zu.",pool_pipe_height:"H\xF6he \xFCber Boden (m)",pool_pipe_reverse:"Flie\xDFrichtung umdrehen",pool_pipes_pro:"Mit Pool Pro flie\xDFt das Wasser sichtbar durch die Rohre \u2013 blau, nach der W\xE4rmepumpe warm.",pool_above:"Aufstellpool (steht auf dem Boden)",pool_above_hint:"Ein Pool, der auf dem Boden steht, statt eingelassen zu sein: Wand rundum, das Wasser knapp unter dem Rand.",pool_height:"Beckenh\xF6he",alert_pool_ph:"Pool: pH {name}",alert_pool_chlorine:"Pool: Chlor/Redox {name}",alert_pool_frost:"Pool: Frostgefahr ({name})",pro_feature_time_travel:"Zeitreise: Ein Zeitregler spielt bis zu 7 Tage im Haus ab \u2013 Lichter, T\xFCren, Fenster, Rolll\xE4den, Bewegung, Heizung, Wetter und Sonne, mit Ereignis-Markern. Nur ansehen, nichts wird geschaltet",tt_chip:"Zeitreise",tt_hint:"Bis zu 7 Tage im Haus abspielen (nur ansehen, nichts wird geschaltet)",tt_badge:"ZEITREISE",tt_live:"Live",tt_live_hint:"Zur\xFCck zur Gegenwart",tt_play:"Abspielen",tt_pause:"Anhalten",tt_prev:"Voriges Ereignis",tt_next:"N\xE4chstes Ereignis",tt_speed:"Tempo: 1 Stunde in {s}",tt_now:"jetzt",tt_ago:"vor {d}",tt_since:"seit {time}",tt_loading:"Lade Verlauf \u2026",tt_error:"Verlauf nicht geladen: {error}",tt_retry:"Erneut",tt_no_recorder:"Ohne den Recorder von Home Assistant gibt es keinen Verlauf.",tt_restart:"Bitte Home Assistant neu starten \u2013 erst dann kennt es die Zeitreise.",tt_locked:"Die Zeitreise ist eine Pro-Erweiterung.",tt_readonly:"Zeitreise: nur ansehen \u2013 nichts wird geschaltet",tt_ev_door:"{name} ge\xF6ffnet",tt_ev_garage:"{name} ge\xF6ffnet",tt_ev_lock:"{name} entriegelt",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Rauch: {name}",tt_ev_outage:"Stromausfall",tt_ev_camera:"Kamera erkennt Bewegung: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Kohlenmonoxid: {name}",tt_ev_water:"Wasser: {name}",tt_ev_rain:"Fenster offen bei Regen: {name}",tt_ev_motion:"Bewegung in der Nacht: {name}",tt_ev_washer:"{name} fertig",tt_ev_robot_start:"{name} startet",tt_ev_robot_done:"{name} fertig",card_time_travel:"Knopf \u201EZeitreise\u201C",card_time_travel_hint:"Ein Knopf unten in der Karte spielt die letzten Stunden und Tage ab (Pro: Zeitreise).",auto_pro_teaser:"Mit Auto Pro zeigt das Fahrzeug hier Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, und \u201Eunterwegs\u201C mit dem Standort, wenn es weg ist.",car_hint:"Eine Entit\xE4t des Autos reicht: Die \xFCbrigen findet NeonPlan am selben Ger\xE4t in Home Assistant (Ladestand, Reichweite, Laden, Kabel, Schloss, Klima, Standort). Was es nicht findet, w\xE4hlst du hier; \u201EKeine\u201C schaltet eine Rolle ab.",car_device:"Fahrzeug (eine Entit\xE4t des Autos)",car_soc:"Ladestand (%)",car_range:"Reichweite",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_plugged:"Kabel eingesteckt",car_lock:"Verriegelung",car_climate:"Klima / Vorheizen",car_tracker:"Standort (device_tracker)",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",license_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",chk_pro_active:"Energie Pro ist aktiv",chk_pro_get:"Energie Pro freischalten (Leitungen, Module, Hologramm)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",energy_pro_active:"Energie Pro ist aktiv",energy_pro_active_hint:"Leitungen, lebende Module und das Hologramm laufen. Gas, Wasser und W\xE4rme kommen als Updates in diesem Pack.",pro_unlock:"Freischalten",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",help_discord:"Community auf Discord",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_mirror:"Von hinten gespiegelt (wie Glas)",holo_device_min_w:"Ger\xE4te-Karten ausblenden unter (W)",holo_device_house:"Ger\xE4te-Karten auch in der Hausansicht",holo_device_house_hint:"Aus: Die Karten \xFCber den Ger\xE4ten erscheinen nur, wenn ihre Etage ge\xF6ffnet ist.",holo_plant_floor:"Hausbilanz und Anlagen-Karten auch in Etagenansichten",room_ceiling:"Deckenh\xF6he (m)",units:"L\xE4ngen",units_auto:"Automatisch ({unit})",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:`Wie der Editor L\xE4ngen zeigt und liest. Automatisch folgt dem Einheitensystem von Home Assistant. Gespeichert wird immer in Metern \u2013 Fu\xDF und Zoll tippst du z. B. als 8' 2", 98in oder 8.2ft.`,room_area_net:"Fl\xE4che {a} \xB7 netto {n}",room_area_net_hint:"Netto: ohne die W\xE4nde, die in den Raum ragen \u2013 geteilte Innenw\xE4nde liegen zur H\xE4lfte im Raum, freie W\xE4nde und der Spalt hinter einer Vorwand z\xE4hlen nicht mit.",room_ceiling_hint:"Leer = H\xF6he der Etage. Mit eigener H\xF6he enden die W\xE4nde des Raums dort (au\xDFer ein Nachbarraum ist h\xF6her), und Deckenleuchten h\xE4ngen an dieser Decke \u2013 z. B. 2,5 m im Wohnraum neben einer 5 m hohen Garage.",holo_plant_floor_hint:"An: Die Karten bleiben auch sichtbar, wenn eine Etage ge\xF6ffnet ist \u2013 auf der Etage ihres Solarfelds (Felder auf dem Dach: oberste Etage, im Garten: unterste).",holo_device_room:"Ger\xE4te-Karten im ge\xF6ffneten Raum",holo_device_room_hint:"An: \xD6ffnest du einen Raum, erscheinen die Karten der Ger\xE4te in diesem Raum (nur dieses Raums).",holo_mirror_hint:"Schaust du von der R\xFCckseite des Solarfelds, zeigen die Karten ihre R\xFCckseite \u2013 gespiegelt wie eine Glasscheibe. Aus: Sie bleiben von \xFCberall lesbar.",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_no_field:"Noch kein Solarfeld im Plan: Das Hologramm schwebt neben dem Haus.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_front_slot:"Haust\xFCr mit Sichtschlitz \xB7 Ohne Leuchte",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_sliding_glass:"Glasschiebet\xFCr",style_sliding_wood:"Holzschiebet\xFCr \xB7 K\xFCchenholzton",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",contour_draw:"Kontur zeichnen",contour_draw_hint:"Ecken anklicken; erste Ecke, Enter oder Abschlie\xDFen schlie\xDFt die Fl\xE4che. Esc bricht ab.",contour_finish:"Abschlie\xDFen",contour_edit:"Freie Kontur bearbeiten",contour_vertices:"Eckpunkte",contour_edit_hint:"Wie bei R\xE4umen: Ecken im Plan ziehen oder X/Z \xE4ndern. Die + Marker auf den Kanten f\xFCgen Ecken ein; \xD7 entfernt eine Ecke.",contour_insert:"Eckpunkt auf der n\xE4chsten Kante einf\xFCgen",contour_remove:"Eckpunkt entfernen",contour_invalid:"Mindestens drei verschiedene Ecken und eine Fl\xE4che von 0,05 m\xB2 sind n\xF6tig. Kanten d\xFCrfen sich nicht kreuzen; maximal 200 Ecken.",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",hint_outdoor_free:"Ecken der Au\xDFenfl\xE4che setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",outdoor_shape_rect:"Rechteck",outdoor_shape_free:"Freie Form",outdoor_draw_type:"Zeichnen:",outdoor_draw_type_hint:"Was du als N\xE4chstes aufziehst: Rasen, Terrasse, Weg, Pool \u2026 Die Art l\xE4sst sich danach im Formular noch \xE4ndern.",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_gravel_bed:"Kiesbeet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",out_balcony:"Balkon",balcony_rail:"Gel\xE4nderh\xF6he",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Dachabschnitte haben eine rechteckige oder freie Grundfl\xE4che, jeweils mit eigener Dachform, Firstrichtung, H\xF6he und Neigung. Rechteck aufziehen oder Freiform w\xE4hlen und Ecken anklicken. Antippen w\xE4hlt aus, Ziehen verschiebt; Eckpunkte bearbeiten die Kontur.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"\xDCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses als freie Dachgrundfl\xE4che. Die gew\xE4hlte Dachform bleibt erhalten; die Ecken lassen sich danach bearbeiten.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",straighten:"Schiefe Kanten begradigen",straighten_hint:"Findet Raumkanten, die nur um wenige Zentimeter schief laufen (eine Ecke 1 cm daneben), und richtet sie gerade aus. Bewusst schr\xE4ge W\xE4nde bleiben.",straighten_done:"{n} fast gerade Kanten begradigt.",straighten_none:"Keine schiefen Kanten gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",controls_side:"Wo Etagenbilder, Stern, Suche und Auge sitzen",controls_left:"Bedienleiste links",controls_right:"Bedienleiste rechts",keep_view:"Ansicht halten",keep_view_hint:"Beim Wechsel von Etage zu Etage bleibt die Kamera, wo sie ist \u2013 nur die H\xF6he wandert mit.",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",terrain:"Gel\xE4nde",terrain_hint:"Wo der Boden um das Haus liegt. Was darunter liegt \u2013 ein Keller, der untere Teil eines Souterrains \u2013 steckt in 3D in der Erde; Rasen, Wege und Terrassen liegen auf dem Gel\xE4nde.",terrain_level:"Gel\xE4ndeh\xF6he (m, Erdgeschoss = 0)",terrain_earth:"Keller in der Erde zeigen",terrain_earth_hint:"Etagen unter dem Gel\xE4nde stecken in der Erde; \xF6ffnest du sie, siehst du sie wie in einer Baugrube. Aus: Sie stehen frei wie bisher.",terrain_cellar_hint:"Souterrain: die Gel\xE4ndeh\xF6he so weit senken, wie der Keller herausschauen soll \u2013 etwa \u22121,2 m. Kellerfenster unter dem Gel\xE4nde bekommen einen Lichtschacht.",terrain_no_cellar_hint:"Einen Keller legst du als Etage mit negativer H\xF6he an, zum Beispiel \u22122,6 m.",terrain_reset:"Gel\xE4nde zur\xFCcksetzen",cellar_window:"Kellerfenster",well:"Lichtschacht",well_hint:"Dieses Fenster liegt unter dem Gel\xE4nde: In 3D bekommt es einen Lichtschacht mit Gitterrost. Ohne Haken keinen \u2013 etwa wenn au\xDFen ein Weg vorbeif\xFChrt.",well_rim:"Rand \xFCber dem Gel\xE4nde (m)",cellar_window_hint:"Klein und oben in der Wand: 100 \xD7 50 cm, 25 cm unter der Decke. Liegt es unter dem Gel\xE4nde, bekommt es in 3D einen Lichtschacht mit Gitterrost.",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",contact_invert:"Kontakt umkehren",contact_invert_hint:"F\xFCr Sensoren, die offen und geschlossen andersherum melden",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",furn_rotation_x:"Drehung X \u2013 kippen (\xB0)",furn_rotation_y:"Drehung Y \u2013 Grundriss (\xB0)",furn_rotation_z:"Drehung Z \u2013 seitlich kippen (\xB0)",furn_rotation_reset:"Ausrichtung zur\xFCcksetzen",furn_rotation_hint:"X und Z drehen um die Modellmitte, danach Y um die senkrechte Achse. Die Position bleibt unver\xE4ndert; der Grundriss zeigt die gedrehte Begrenzungsh\xFClle. Gr\xF6\xDFen-Griffe skalieren gekippte M\xF6bel proportional; Einzelma\xDFe oben eingeben.",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_sofa_l:"Ecksofa (L-Form)",furn_sofa_u:"Wohnlandschaft (U-Form)",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_u:"U-Treppe mit Podest",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. \xDCber mehreren R\xE4umen wird sie in jedem Raum ausgeschnitten; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",wall_pos_hint:"X und Y: die Mitte der Wand im Plan.",stairwell_outside:"Diese \xD6ffnung liegt in keinem Raum und wird deshalb nicht ausgeschnitten. Ziehe sie in einen Raum.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Einklappen",side_fold_hint:"Seitenleiste schmal machen \u2013 mehr Platz f\xFCr den Grundriss",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_ac_unit:"Klimager\xE4t (Wand)",furn_awning:"Markise",furn_group_outdoor:"Terrasse & Balkon",bin_from:"Leuchten ab (Uhr, am Vortag)",bin_until:"bis (Uhr, am Abholtag)",bin_none:"Keine Abholung in Sicht",hh_title:"Heute im Haushalt",hh_left:"noch {t}",hh_done:"Fertig!",hh_finished:"{name} ist fertig",hh_thirsty:"Durst",hh_plant:"{name} braucht Wasser",hh_service:"{name}: Wartung f\xE4llig",hh_fridge_open:"{name} steht offen",alert_fridge_door:"K\xFChlschrank offen: {name}",alert_short_fridge_door:"K\xFChlschrank offen",hh_moisture:"Pflanze (plant.*) oder Feuchtesensor",hh_moisture_min:"Durst unter (%)",hh_remaining:"Restzeit (Sensor)",hh_door:"T\xFCr-Sensor",hh_fridge_door:"T\xFCr-Sensor",hh_appliance_hint:"L\xE4uft das Ger\xE4t, zeigt seine Markierung die Restzeit; danach \u201EFertig!\u201C, bis die T\xFCr aufgeht oder es wieder l\xE4uft.",hh_door_alarm:"Warnen nach (Minuten offen)",hh_service_entity:"Verbrauchsteil / Wartung (Sensor)",hh_service_min:"F\xE4llig ab (\u2264 Prozent oder Tage)",hh_service_hint:"Etwa Filter, Salz oder Klarsp\xFCler: ein Bin\xE4rsensor (an = f\xE4llig), eine Zahl (Prozent oder Tage \xFCbrig) oder ein Datum. Ist es f\xE4llig, leuchtet das Ger\xE4t gelb und steht in \u201EHeute im Haushalt\u201C.",hh_teaser_plant:"Mit Haushalt Pro zeigt die Pflanze, wann sie Wasser braucht.",hh_teaser_appliance:"Mit Haushalt Pro zeigt das Ger\xE4t seine Restzeit und \u201EFertig!\u201C, bis die T\xFCr aufgeht.",hh_teaser_fridge:"Mit Haushalt Pro warnt NeonPlan, wenn die K\xFChlschrankt\xFCr zu lange offen steht.",card_household:"Heute im Haushalt",card_household_hint:"Haushalt Pro: Glaskarte mit Tonnen, Post, fertigen Ger\xE4ten, durstigen Pflanzen und f\xE4lliger Wartung",furn_waste_bin:"M\xFClltonne",furn_mailbox:"Briefkasten",furn_group_household:"Haushalt",bin_shape:"Bauform",bin_shape_bin120:"Rolltonne 120 l",bin_shape_bin240:"Rolltonne 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Mehrkammer-Tonne",bin_shape_bag:"Sack",bin_shape_caddy:"Eimer / Caddy",bin_shape_underground:"Unterflur-Container",bin_kind:"Abfallart",bin_kind_rest:"Restm\xFCll",bin_kind_bio:"Bio",bin_kind_paper:"Papier",bin_kind_plastic:"Verpackung (Gelbe Tonne / Sack)",bin_kind_glass:"Glas",bin_kind_garden:"Garten / Gr\xFCnschnitt",bin_kind_recycling:"Recycling / Wertstoffe",bin_kind_other:"Sonstiges",bin_color:"Farbe",bin_lid:"Deckel",bin_source:"Abfallkalender oder Sensor",bin_match:"Stichwort im Kalender (leer: nach Abfallart)",bin_hint:"Die Tonne leuchtet am Vortag ab der eingestellten Uhrzeit bis zur Uhrzeit am Abholtag (gilt f\xFCr alle Tonnen); ihre Markierung zeigt \u201EHeute\u201C oder \u201EMorgen\u201C, Antippen der Tonne zeigt die n\xE4chsten Termine. Ein Kalender (z. B. von Waste Collection Schedule) wird nach den W\xF6rtern ihrer Abfallart durchsucht, ein Sensor kann die Tage bis zur Abholung oder das Datum liefern.",bin_today:"Heute",bin_tomorrow:"Morgen",bin_in_days:"in {n} Tagen",mailbox_shape:"Bauform",mailbox_shape_wall:"Wandbriefkasten",mailbox_shape_pole:"Briefkasten auf Pfosten (mit F\xE4hnchen)",mailbox_shape_pillar:"Standbriefkasten mit Zeitungsfach",mailbox_shape_parcel:"Paketbox",mailbox_shape_bank:"Briefkastenanlage",mailbox_entity:"Sensor f\xFCr Post (Klappe oder Merker)",mailbox_door:"Sensor der Entnahmet\xFCr (optional)",mailbox_hint:"Mit einem Merker (z. B. input_boolean \u201EPost da\u201C aus einer Automation) leuchtet der Briefkasten, solange er an ist. Mit Einwurfklappe und Entnahmet\xFCr leuchtet er, wenn nach dem letzten Leeren Post eingeworfen wurde.",mailbox_post:"Post da",pro_name_household:"Haushalt Pro",pro_feature_household:"Haushalt Pro: M\xFClltonnen leuchten am Vorabend der Abholung (Abfallkalender oder Sensor), der Briefkasten bei Post, Pflanzen bei Durst; Waschmaschine, Trockner und Sp\xFCler zeigen Restzeit und \u201EFertig!\u201C; f\xE4llige Filter und Verbrauchsteile leuchten gelb; offene K\xFChlschrankt\xFCren warnen; Glaskarte \u201EHeute im Haushalt\u201C; dazu der Smart-K\xFChlschrank (Side-by-Side, T\xFCren mit Sensoren)",household_teaser_bin:"Mit Haushalt Pro leuchtet die Tonne am Vorabend der Abholung \u2013 aus deinem Abfallkalender.",household_teaser_mail:"Mit Haushalt Pro leuchtet der Briefkasten, sobald Post da ist \u2013 bis er geleert wurde.",awning_cover:"Markise (Cover)",awning_pitch:"Neigung (\xB0)",awning_time:"Laufzeit ganz aus (s)",awning_position:"Positionssensor (optional)",awning_valance:"Volant (Stoffkante vorne)",awning_invert:"Richtung umkehren",awning_invert_hint:"F\xFCr Covers, die 100 % melden, wenn die Markise eingefahren ist.",awning_kind:"Art",awning_kind_arm:"Gelenkarm-Markise (Terrasse)",awning_kind_drop:"Fallarm-Markise (Balkon, Fenster)",awning_kind_vertical:"Senkrechtmarkise / ZIP (Fenster, Balkon)",awning_kind_pergola:"Pergola- / Wintergartenmarkise",awning_kind_side:"Seitenmarkise (Sichtschutz)",awning_kind_arm_hint:"Die Klassiker \xFCber der Terrasse: Gelenkarme schieben das Tuch mit leichtem Gef\xE4lle hinaus. Tiefe = Ausfall.",awning_kind_drop_hint:"Die Arme schwenken von der Wand nach vorn und unten, das Tuch spannt sich schr\xE4g davor. Tiefe = Arml\xE4nge, Neigung = wie weit die Arme unter die Waagerechte gehen.",awning_kind_vertical_hint:"Das Tuch f\xE4hrt senkrecht in Seitenschienen bis zum Boden herunter \u2013 vor ein Fenster, eine Balkonbr\xFCstung oder die Front einer Pergola. H\xF6he \xFCber Boden = Unterkante des Kastens.",awning_kind_pergola_hint:"Ein fester Rahmen mit Pfosten vorne; das Tuch f\xE4hrt oben auf den Schienen aus. Tiefe = bis zu den Pfosten, Neigung = Gef\xE4lle des Dachs.",awning_kind_side_hint:"Ein Pfosten mit dem aufgerollten Tuch links, das Tuch zieht sich waagerecht nach rechts bis zum Gegenpfosten. Breite = Auszug, H\xF6he \xFCber Boden = H\xF6he des Tuchs.",awning_hint:"Breite = Markise entlang der Wand, Tiefe = Ausfall ganz ausgefahren; die R\xFCckseite des Rahmens kommt an die Hauswand, H\xF6he \xFCber Boden ist die Unterkante der Kassette. Meldet das Cover seine Position auch beim Fahren, f\xE4hrt die Markise in 3D langsam mit; meldet es nur \u201Ef\xE4hrt aus/ein\u201C, f\xE4hrt sie in der Laufzeit mit.",furn_only_color:"Nur in einer Farbe leuchten",furn_only_color_pick:"Farbe",furn_only_color_hint:"Die Lampe leuchtet nur, solange das Licht ungef\xE4hr diese Farbe zeigt \u2013 z. B. gelb f\xFCr \u201EWasser\u201C am Waschbecken. Andere Farben desselben Lichts bleiben hier dunkel.",furn_run_w:"L\xE4uft ab (Watt)",furn_run_w_hint:"Ab wie viel Watt am Leistungssensor das Ger\xE4t als laufend gilt und leuchtet (leer: 10 W). F\xFCr Ger\xE4te hinter einer Steckdose, die im Standby ein paar Watt ziehen, z. B. 100.",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window_freeform:"In Freiform umwandeln",roof_window_rectangle:"Rechteck verwenden",roof_window_draw:"Kontur neu zeichnen",roof_window_draw_hint:"Eckpunkte auf der gew\xE4hlten Dachfl\xE4che anklicken. Am Startpunkt oder mit Fertig schlie\xDFen; Escape bricht ab. Maximal 32 Punkte. Danach Ecken ziehen oder mit + erg\xE4nzen.",roof_cover_style:"Beschattungsart",roof_cover_roller:"Rollo am Fensterfl\xFCgel",roof_cover_awning:"Markise \xFCber dem Glas",roof_cover_direction:"Auszugsrichtung",roof_cover_top:"Von oben nach unten",roof_cover_bottom:"Von unten nach oben",roof_cover_left:"Von links nach rechts",roof_cover_right:"Von rechts nach links",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_hinge:"Angelpunkt",roof_window_hinge_top:"Oben",roof_window_hinge_middle:"Mittig",roof_window_hinge_bottom:"Unten",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_float:"Ohne Dach \xFCber dem Raum zeigen",roof_window_float_hint:"Blendet das Dach beim Heranzoomen an eine Etage oder einen Raum aus, bleibt das Fenster an seiner Stelle \xFCber dem Raum stehen \u2013 offen, gekippt, mit dem Rollladen. Das geht \xFCber R\xE4umen der Etage, auf der das Dach sitzt; reicht die Schr\xE4ge \xFCber eine tiefere Etage, bleiben die Fenster dort im Dach. Aus: Es ist nur im Dach zu sehen.",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Der Fl\xFCgel \xF6ffnet am gew\xE4hlten Angelpunkt (oben, mittig oder unten); bei Kippstellung ein St\xFCck. Der Rahmen leuchtet warm, der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_wall_free:"frei stehend",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Angeschlossen an (Wechselrichter oder Speicher)",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stairs_u_hint:"Die U-Treppe steigt von der markierten Vorderkante nach hinten, wendet am Podest und kommt auf der anderen Seite wieder nach vorn hoch. \u201ESpiegeln\u201C dreht die Laufrichtung um. Sie \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_gas_meter:"Gasz\xE4hler",energy_water_meter:"Wasserz\xE4hler",energy_meters_hint:"Energie Pro: Die Haus-Karte zeigt, wie viel Gas und Wasser heute verbraucht wurde \u2013 aus der Statistik der Z\xE4hler (Z\xE4hlerstand, z. B. in m\xB3). \u201EAus dem Energie-Dashboard \xFCbernehmen\u201C f\xFCllt beide mit.",holo_gas:"Gas",holo_water:"Wasser",holo_today_short:"heute",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen.",diag_title:"Hilf mit, NeonPlan besser zu machen",diag_intro:"Freiwillig und anonym: Wenn du es einschaltest, schickt NeonPlan h\xF6chstens einmal am Tag einen kleinen Bericht an den NeonPlan-Server (api.mastershort.de). Er zeigt, auf welchen Ger\xE4ten NeonPlan l\xE4uft, wo es ruckelt und welche Fehler auftreten \u2013 damit sie behoben werden k\xF6nnen.",diag_sent_head:"Was gesendet wird:",diag_sent:"eine zuf\xE4llige Kennung (nicht die von Home Assistant), die Versionen von NeonPlan, Home Assistant und Python, die Sprache, die installierten Pakete und Pro-Erweiterungen, Anzahlen aus dem Plan (Etagen, R\xE4ume, M\xF6bel, verkn\xFCpfte Ger\xE4te, Kameras), Ger\xE4teart, Browser und System der Bildschirme mit Bildrate und Grafikklasse, wie oft welche Ansicht ge\xF6ffnet wurde, und Fehlermeldungen von NeonPlan ohne Namen und Adressen.",diag_never_head:"Was nie gesendet wird:",diag_never:"Namen, Entit\xE4ten, Bereiche, die Form deines Grundrisses, IP-Adressen, die Kennung deiner Home-Assistant-Installation, Benutzernamen und dein Lizenzschl\xFCssel.",diag_voluntary:"Du kannst es jederzeit wieder ausschalten. Die Berichte werden 12 Monate aufbewahrt; mit \u201EMeine Daten l\xF6schen\u201C verschwinden sie sofort. Mehr dazu in der",diag_privacy:"Datenschutzerkl\xE4rung",diag_switch:"Anonyme Nutzungs- und Fehlerberichte senden",diag_view:"Daten ansehen",diag_view_head:"Das wird gesendet",diag_view_hint_on:"Genau dieser Bericht geht beim n\xE4chsten Mal hinaus (h\xF6chstens einmal am Tag); Fehler zus\xE4tzlich h\xF6chstens einmal pro Stunde.",diag_view_hint_off:"Ausgeschaltet: Es wird nichts gesendet. So s\xE4he der Bericht aus \u2013 die Kennung entsteht erst beim Einschalten.",diag_delete:"Meine Daten l\xF6schen",diag_delete_confirm:"Alle Berichte dieser Installation auf dem Server l\xF6schen und das Senden ausschalten?",diag_deleted:"Gel\xF6scht. Das Senden ist aus; schaltest du es wieder ein, gibt es eine neue Kennung.",diag_delete_failed:"Der NeonPlan-Server war nicht erreichbar. Bitte sp\xE4ter noch einmal versuchen.",diag_unavailable:"Diese Einstellung gibt es nach einem Neustart von Home Assistant."},da={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",show_menu:"Show",tool_menu:"Tool",floor_label:"Floor:",floor_settings:"Floor settings",floor_settings_of:"Floor {floor}",floor_none_hint:'Add your first floor at the top with "Floor" \u2192 "Add floor".',tool_group_build:"Build",tool_group_outside:"Outside",tool_room:"Room",view_menu:"View",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Whole plan",fit_hint:"Bring the whole floor plan of the floor into view (with the garden when outside)",room:"Room",rooms:"Rooms",room_name:"Name",room_id:"ID (card option room:)",room_openings:"Doors and windows",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",room_inherit_heights:"Use floor heights",room_wall_offset:"Wall base above storey floor (m)",room_floor_offset:"Room floor above wall base (m)",room_levels_hint:"Wall base is relative to the storey floor. The additional offset raises the finished room floor; ceiling height starts at that floor.",steps_offset:"Stair offset (m)",steps_offset_hint:"0: starts at the wall face. Positive: farther into the selected room, with a level landing. Negative: towards the doorway.",steps_title:"Doorway steps",steps_side:"Place steps in this room",steps_none:"No steps",steps_lower:"lower level",steps_higher:"higher level",steps_equal:"same level",steps_count:"Number of steps",steps_depth:"Total depth (m)",steps_hint:"Width follows the doorway. Steps on the higher side cut a recess into that room's floor.",steps_fit_warning:"The staircase does not fit the connected rooms at this depth and offset. Adjust depth, offset or room side.",steps_height_warning:"There is not enough shared height for the opening. Increase room height or adjust floor elevation.",delete_point:"Delete corner",duplicate:"Duplicate",tech_open:"Draw the technical room",tech_open_hint:"Then tap the wall in the plan your equipment hangs on.",tech_step:"Step {n}",tech_step_feed:'Tap "{name}" on the left, then the spot on the wall where the line comes in (right at the bottom: out of the floor).',tech_step_devices:"Tap the filter pump and the sand filter on the left \u2013 they stand at the wall. The heat pump and dosing unit if you have them.",tech_step_line:'Draw a line: from "{a}" to "{b}". Just press on the one and drag to the other.',tech_step_loose:"A pipe still ends loose \u2013 draw it on to a device or a line, or delete it (\u270B Select).",tech_step_drawing:"Drag on or tap point by point \u2013 the line ends on a device, a line or a pipe.",tech_step_fit:"Tap the pipe the valve (sight glass) goes into \u2013 it lights up orange.",tech_mode:"Pool equipment",tech_mode_hint:"Draw the technical room on this wall: bring the pool's lines in, put the devices up, draw the pipes",tech_draw:"Draw",tech_pick:"Select",pool_delete_confirm:"Delete the pool with all {n} pipes?",tech_erase:"Erase",tech_erase_hint:"Tap a pipe, ball valve, sight glass or hole \u2013 it is removed. Drew it wrong? Undo helps too.",tech_feeds:"Lines from the pool",tech_devices:"Devices",tech_fittings:"Fittings",tech_hint:"Draw a line: tap a device, a line or a pipe and drag to the next one (or tap point by point). Dragged onto a pipe it makes a T-piece. NeonPlan works out which way the water runs and which connection of a device it takes.",tech_no_ports:"First put the skimmer, bottom drain and inlets at the pool with the pool tool.",tech_ok:"All connected \u2013 the water flows.",tech_issue_loose:"{n} loose pipe ends",tech_issue_port:"{name} not connected",tech_issue_feed:"{name} not brought in yet",tech_feed_place:"Tap where the line comes into the room \u2013 right at the bottom: out of the floor, higher up: through the wall.",tech_start:"Tap a device or a line and draw a line.",feed_skimmer:"Skimmer",feed_drain:"Bottom drain",feed_inlet:"Inlets",feed_waste:"Waste drain (backwash)",hp_ports:"Connections",hp_side_right:"right",hp_side_left:"left",hp_side_back:"back",pool_depth:"Basin depth (m)",pool_rim:"Rim above the lawn (m)",pool_depth_hint:"Basin depth: from the rim down to the floor. A 1.50 m deep pool standing 20 cm out of the lawn: depth 1.50, rim 0.20. The water stands 15 cm below the rim.",pool_depth_ground:"The depth shows in 3D once the pool lies in a lawn, terrace or other area \u2013 without ground around it the basin would show from outside.",pool_port_depth:"Depth",pool_port_depth_hint:"How far below the water line (m): inlets usually 0.30, the skimmer at the water line",pool_valves:"Ball valves",pool_valve_shut:"shut",pool_valve_toggle:"Tap to switch \u2013 the way the valve really stands",pool_joint:"Fitting",block_some_fixed:"\u{1F512} A part of it is fixed \u2013 the block moves once all parts are released.",unfix_all:"Release all",wv_block_all:"Whole block",wv_block_one:"This part only",wv_gap:"Gap: {w} \u2013 this fits in:",wv_gap_hint:"Tap a free spot on the wall: what fits there appears here.",wv_kit_title:"Onto the wall",wv_recent:"Recently used",wv_none_fits:"Nothing fits into this gap.",wv_cat_base:"Base cabinets & boards",wv_cat_hang:"Hanging",wv_cat_tall:"Tall cabinets",wv_cat_living:"Seating & beds",wv_cat_light:"Lights",wv_cat_pack:"From your packs",wv_cat_energy:"Energy",block_title:"Furniture block",multi_title:"{n} items selected",block_hint:"A click selects the whole block, dragging moves it. One part on its own: double-tap it or pick its name below.",multi_hint:"Shift + click adds or removes items, Shift + drag over empty ground draws a frame. Move, turn or copy them together, or join them into a block.",block_part_edit:"Edit only this part",block_break:"Break up block",block_make:"Join into a block",multi_mode:"Select several (a tap adds, a drag draws a frame)",block_part:"Part of a block.",block_select:"Select the whole block",block_delete:"Delete {n} items?",block_delete_fixed:"Delete {n} items? Some of them are fixed.",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",spots_height_error:"Mounting height must be between 0 and 10 m above the owning floor. Please check the roof or canopy height.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_other_hint:"A floor plan from Sweet Home 3D, an iPhone scan, CAD (DXF), Blender/SketchUp or a robot vacuum map?",backup_other:"To the import page (Beta)",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house. Camera-facing surfaces become transparent just like the walls.",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Show the field of view in 3D",camera_detect_pins:"Show detection symbols (person, car, animal)",camera_detect_pins_hint:"Off: a detection shows no symbols over the camera, only the field of view turns red \u2013 calmer on a wall tablet.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m}. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",wall_view:"Wall view",walk_start:"Walk through the house",walk_title:"Walk",walk_end:"End",walk_hint:"Drag: look around \xB7 tap the floor: walk there \xB7 W A S D / arrow keys or the stick: walk \xB7 Esc: end",card_next:"next step \u2026",card_step_hole:"Through a hole",card_step_fit:"Put in",card_step_end:"Or to its end",card_lay:"Lay it",card_hole_out:"outwards",card_hole_in:"inwards",card_to:"Connect to",card_through:"Through (in order, if needed)",card_group_pool:"At the pool",card_group_tech:"Equipment",card_group_joints:"T- and Y-pieces",card_group_holes:"Holes",card_open:"Connections",card_open_other:"Open this part's card",card_port:"Connection",card_via:"through",card_reroute:"Lay anew",card_disconnect:"Disconnect",card_with:"connect to \u2026",card_connect:"Connect",card_connect_with:"Connect to \u2026",card_status:"{a} of {b} connected",card_show_plan:"Show in the plan",card_show_wall:"Show in the wall view",joint_name:"Name (say hole skimmer)",conn_hole_out:"{name}: from inside out",conn_hole_in:"{name}: from outside in",hint_joint_place:"T- or Y-piece: tap the plan \u2013 tapped on a pipe, it is put into the pipe",port_suction:"suction side",port_pressure:"pressure side",port_pump:"from the pump",port_return:"return",port_waste:"waste",port_in:"in",port_out:"out",port_out1:"out 1",port_out2:"out 2",port_inside:"inside",port_outside:"outside",port_used:"in use",joint_tee:"T-piece {n}",joint_y:"Y-piece {n}",joint_wall:"Hole {n} (wall)",joint_floor:"Hole {n} (floor)",joint_add_tee:"T-piece",joint_add_y:"Y-piece",wall_kit_hole_wall:"Hole in the wall",wall_kit_hole_floor:"Hole in the floor",wall_kit_tee:"T-piece",wall_kit_y:"Y-piece",wall_run_place:"Tap the wall where it goes",valve_top6:"Six-way valve on top",valve_side6:"Six-way valve at the side",valve_four:"Four-way valve",pool_valve_type:"Multiport valve",pool_loose_end:"open end",pool_holes_hint:"Holes in walls and the floor are set in the wall view (side bar).",conn_add:"Add a pipe",conn_from:"From",conn_via:"Through (in order)",conn_add_via:"+ hole, ball valve, sight glass \u2026",conn_to:"To",conn_and:"And to (a second end, with a T-piece before)",conn_choose:"choose \u2026",conn_create:"Lay it",conn_hint:"The way is laid by itself \u2013 inside from connection to connection, outside at right angles under the ground. Fine-tune it in the wall view and the plan.",wall_kit_pool:"Pool equipment",wall_kit_energy:"Energy",wall_run_add:"+ Pipe",wall_run_start:"Pipe: start at a device, on a pipe (T-piece) or on the wall",wall_run_next:"Set more points \u2013 it ends at a device or on a pipe; double click or Enter finishes",wall_run_down:"\u2193 Into the floor",wall_run_through:"\u27C2 Through the wall",wall_run_done:"Done",wall_run_fit:"Tap the pipe where it goes",wall_run_valve:"Ball valve",wall_run_sight:"Sight glass",wall_run_pipe:"Pipe",wall_run_pt:"Height of the point (m)",wall_run_more:"Draw on",wall_run_tip:"Drag points \xB7 double click removes \xB7 tap a ball valve: open/closed",wall_view_turn:"Turn by 45\xB0 \u2013 at the wall it moves back into the room",wall_view_fixed:"Fixed \u2013 release it to drag",wall_view_3d:"3D in the room",wall_view_lift:"Drag up or down: height above the floor",wall_zoom_hint:"Zoom: mouse wheel or two fingers",wall_zoom_all:"Whole wall",wall_view_hint_3d:"Tap a piece and drag it on the floor \xB7 mouse wheel or two fingers: closer or further away \xB7 middle or right mouse button (two fingers on a tablet): look around \xB7 type distances and height below \xB7 arrows left and right: to the next wall",wall_view_front:"Wall from the front",wall_view_depth:"Distance from the wall (m)",wall_view_room:"See this room's walls from the front",hint_wall_pick:"Wall view: click into the room (or near a wall)",wall_view_open:"See the wall from the front: move the furniture on it along the wall and up or down",wall_view_hint:"Drag to move along the wall and \u2013 for hanging pieces \u2013 up or down \xB7 arrow keys 1 cm, with Shift 10 cm \xB7 edges snap to the wall's ends, doors, windows and other furniture (Alt: free) \xB7 double-click opens the piece in the plan",wall_view_empty:"Nothing at this wall yet \u2013 furniture standing with its back to the wall or hanging on it shows here.",wall_view_left:"Distance from the left (m)",wall_view_floor:"stands on the floor",wall_view_form:"Edit in the plan",wall_prev:"Previous wall",wall_next:"Next wall",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",rain_entity:"Rain from your own weather station",rain_entity_hint:"A rain sensor (on = rain) or a rain rate (mm/h) of your weather station says whether it rains at the house \u2013 for the rain warning and the rain in 3D. Without one the weather entity decides.",rain_ignore:"No rain warning",rain_ignore_hint:"This window may stay open in the rain (under a canopy, say): no rain warning for this window, all others still warn.",outage_entity:"Report a power outage with",outage_entity_hint:'An entity that reports a power outage: a grid sensor (binary_sensor of class power \u2013 "off" means no power), a UPS ("on battery"), a mains voltage below 100 V or a helper of your own that is "on" during an outage. A warning then shows, and the grid connection is crossed out.',sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_pets:"Show the pets",card_ghost:"Show the Halloween ghost",card_ghost_hint:"Fun pack Halloween: the ghost floats through this card's house too (e.g. switch it off on the wall tablet)",card_pets_hint:"Fun pack Pets: show the animals set up in this card (e.g. switch them off on the wall tablet)",news_pets_title:"New: pets \u2013 a present for you",news_pets_text:"A cat, a dog or a rabbit lives in your 3D house, walks through the rooms, lies down on the sofa and even takes the stairs \u2013 and fish swim in the aquarium. The fun pack is free with every customer account.",news_to_shop:"To the shop",news_later:"Later",news_never:"Don't show again",gift_title:"\u{1F381} Two presents for you: Halloween and pets",gift_text:"The fun packs Halloween (pumpkins, bats, a witch's cauldron and a ghost that floats through the house) and Pets (a cat, a dog and a rabbit walking through your house) are free in your customer account. Install them with one click under Extensions.",gift_install:"To the extensions",gift_title_free:"\u{1F381} Free: Halloween and pets",gift_text_free:"Pumpkins, bats and a ghost that floats through the house \u2013 plus a cat, a dog and a rabbit living in your 3D house. Both fun packs are free with a customer account: create the account, confirm your e-mail, paste the key from the mail under Extensions \u2192 Shop connection. New packs then show up right here.",gift_register:"Create a free account",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house. Camera-facing roof surfaces become transparent like the walls.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",ext_show_list:"Show the list",ext_hide_list:"Fold the list",ext_sum_installed:"installed",ext_sum_updates:"updates",ext_sum_missing:"not installed yet",ext_sum_all:"Install/update all {n}",ext_sum_packs:"furniture packs ({items} items)",ext_sum_feature_packs:"add-ons",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 Pro features: {n}",pack_needs_update:"This add-on needs a newer NeonPlan version \u2013 please update NeonPlan 3D (HACS) and reload the page.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun pack \xB7 free for customers",offers_dot:"New in the shop",ext_badge_new:"{n} new",ext_badge_ready:"{n} ready",ext_badge_ready_hint:"Packs to install or update \u2013 one click under Extensions",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"Furniture packs and Pro add-ons for NeonPlan 3D. Install what you bought here with your licence key; it updates by itself and works without the connection too.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",fun_title:"Fun packs",fun_intro:"Free extras just for fun \u2013 for everyone with a customer account. With a connected key they wait among your packs above to install; switch them on and off here.",fun_in_account:"Free in your customer account \u2013 install it among your packs above.",fun_register:"\u{1F381} Create a free customer account",fun_register_steps:"Free with a customer account: create the account, confirm your e-mail, paste the key from the mail under Shop connection.",fun_name_pets:"Pets",fun_feature_pets:"A cat, a dog or a rabbit lives in your 3D house: it walks through the rooms, lies down on the sofa, the bed or the rug and sleeps at night.",fun_name_halloween:"Halloween",fun_feature_halloween:"Pumpkins that glow with a light, a cobweb, bats, gravestones, a skeleton, a witch's cauldron and candles \u2013 and a ghost that floats through the house now and then.",halloween_ghost:"Let the ghost float",halloween_deco_hint:`The decorations are in the editor's furniture library under "Fun pack: Halloween". Pumpkin, cauldron and candles glow with a linked light.`,pets_show:"Show the pets",pet_add:"Add a pet",pet_name:"Name",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Cat",pet_kind_dog:"\u{1F436} Dog",pet_kind_rabbit:"\u{1F430} Rabbit",pet_fur:"Fur",pet_fur_orange:"Ginger",pet_fur_tabby:"Tabby",pet_fur_black:"Black",pet_fur_white:"White",pet_fur_grey:"Grey",pet_fur_brown:"Brown",pet_fur_calico:"Calico",pet_fur_golden:"Golden",pet_fur_cream:"Cream",pet_breed:"Breed",pet_breed_dachshund:"Dachshund",pet_breed_pug:"Pug",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Shepherd",pet_floor:"Floor",pet_floor_auto:"Ground floor",ext_active:"active",ext_get:"See in the shop",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Thank you for supporting NeonPlan 3D! This code unlocks the \u{1F499} Supporter role on Discord \u2013 you then see the channel #beta-feedback and test new add-ons first.",supporter_open:"Open Discord",supporter_how:"How: open Discord, type /supporter {code} in any channel and send it. The role comes right away.",beta_yours:"Beta \xB7 yours as a supporter",beta_supporters:"Beta \xB7 supporters first",beta_yours_hint:"Because you are a supporter, you can try this add-on early. Tell us on Discord (channel #beta-feedback) what works and what doesn't.",beta_supporters_hint:"This add-on is still in beta and comes with the Supporter Pass first. Once it is finished, everyone can get it in the shop.",beta_feedback:"Feedback on Discord",beta_become:"Become a supporter",beta_bar:"Beta \u2013 as a supporter you test this first. Feedback welcome on Discord (#beta-feedback).",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs, the shop connection and Pro add-ons are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices, today's gas and water use \u2013 heat follows as an update",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',pro_name_time_travel:"Time travel",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: the water glows in the colour of the pool light and moves while the filter pump runs; a glass card shows water temperature, heat pump with target temperature, filter pump, light, pH and chlorine/redox with a traffic light; the cover slides over the water; warnings for pH, chlorine and frost",pool_teaser:"With Pool Pro your pool comes alive: the water glows in the colour of the pool light and moves while the filter pump runs. A glass card shows water temperature, heat pump, pH and chlorine \u2013 with buttons for target temperature, pump, light and cover.",pool_pro_hint:'Empty fields are found by name (an entity with "pool" in its name), "None" switches a role off. The heat pump may be a climate or water heater entity (then the target temperature can be set) or a switch; the filter pump a switch or a power sensor.',pool_activate:"Turn on Pool Pro for this pool",pool_temperature:"Water temperature",pool_heater:"Heat pump / heater",pool_pump:"Filter pump",pool_light:"Pool light",pool_ph:"pH value",pool_chlorine_role:"Chlorine / redox",pool_chlorine:"Chlorine",pool_orp:"Redox",pool_cover:"Cover",pool_cover_open:"open",pool_cover_closed:"closed",pool_cover_closed_part:"closed",pool_cover_open_btn:"Open the cover",pool_cover_close_btn:"Close the cover",pool_cover_stop:"Stop the cover",pool_heating:"heating",pool_pump_on:"pump running",pool_heater_on:"Heat pump on",pool_heater_off:"Heat pump off",pool_colder:"Colder",pool_warmer:"Warmer",pool_shape:"Shape",pool_shape_rect:"Rectangular",pool_shape_round:"Round",pool_shape_oval:"Oval",pool_diameter:"Diameter (m)",pool_shape_free:"Free",tool_pool:"Pool",hint_pool:"Choose a shape and draw the pool \xB7 tap a pool to select it",hint_pool_tech:"Choose a shape and draw the pool \xB7 tap a pool to select it \xB7 ports, devices and pipes on the right",hint_pipe_start:"Pipe: tap the start (port or device)",hint_pipe_pool:"Pipe: first tap the pool the pipes belong to",hint_pipe_next:"Tap corners, then the end (port or device) \xB7 Esc cancels",pool_tool_empty:"No pool on this floor yet: choose the shape above and draw the pool.",pool_choose:"Which pool?",pool_ports:"Ports",pool_ports_hint:"Skimmer and inlets sit on the rim, the bottom drain in the pool; the waste drain takes the backwash water. Move them in the plan.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bottom drain",pool_port_inlet:"Inlet",pool_port_waste:"Waste drain",pool_devices:"Equipment",furn_pool_pump:"Filter pump",furn_pool_filter:"Sand filter",furn_pool_heat_pump:"Heat pump",furn_pool_dosing:"Dosing unit",furn_pool_valve:"Ball valve",pool_valve_position:"Six-way valve position",valve_filter:"Filter",valve_backwash:"Backwash",valve_rinse:"Rinse",valve_waste:"Waste",valve_recirculate:"Recirculate",valve_closed:"Closed",pool_valve_open:"open",pool_pipes:"Pipes",pool_pipe_draw:"Draw a pipe",pool_pipe_draw_hint:"Pipes connect ports and devices in the flow direction: from the skimmer to the pump, on to the filter, through the heat pump or the bypass to the inlets. At a split the water goes through the heat pump while it is on, else through the bypass; a closed ball valve stops it. Tap a ball valve in the plan to open or close it.",pool_pipe_height:"Height above the floor (m)",pool_pipe_reverse:"Reverse the flow direction",pool_pipes_pro:"With Pool Pro the water flows visibly through the pipes \u2013 blue, warm after the heat pump.",pool_above:"Above-ground pool (stands on the ground)",pool_above_hint:"A pool standing on the ground instead of let into it: a wall all around, the water just below the rim.",pool_height:"Pool height",alert_pool_ph:"Pool: pH {name}",alert_pool_chlorine:"Pool: chlorine/redox {name}",alert_pool_frost:"Pool: risk of frost ({name})",pro_feature_time_travel:"Time travel: a time slider replays up to 7 days in the house \u2013 lights, doors, windows, blinds, motion, heating, weather and the sun, with event markers. View only, nothing is switched",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is a Pro add-on.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_outage:"Power outage",tt_ev_camera:"Camera detects motion: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (Pro: time travel).",auto_pro_teaser:'With Car Pro the vehicle here shows charge, range, charging, lock and climate from its integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, and "away" with its location when it is out.',car_hint:'One entity of the car is enough: NeonPlan finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',license_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",chk_pro_active:"Energy Pro is active",chk_pro_get:"Unlock Energy Pro (cables, modules, hologram)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",energy_pro_active:"Energy Pro is active",energy_pro_active_hint:"Cables, living modules and the hologram are running. Gas, water and heat come as updates of this pack.",pro_unlock:"Unlock",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",help_discord:"Community on Discord",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_mirror:"Mirrored from behind (like glass)",holo_device_min_w:"Hide device cards below (W)",holo_device_house:"Device cards in the house view too",holo_device_house_hint:"Off: the cards over devices only show when their floor is open.",holo_plant_floor:"House balance and plant cards in floor views too",room_ceiling:"Ceiling height (m)",units:"Lengths",units_auto:"Automatic ({unit})",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:`How the editor shows and reads lengths. Automatic follows Home Assistant's unit system. The plan always stores metres \u2013 type feet and inches as 8' 2", 98in or 8.2ft.`,room_area_net:"Area {a} \xB7 net {n}",room_area_net_hint:"Net: without the walls reaching into the room \u2013 shared interior walls stand half in the room, free walls and the gap behind a wall built in front of another do not count.",room_ceiling_hint:"Empty = the floor height. With a height of its own the room's walls end there (unless a neighbouring room is taller), and ceiling lamps hang from that ceiling \u2013 e.g. 2.5 m in a living room beside a 5 m garage.",holo_plant_floor_hint:"On: the cards stay visible when a floor is open \u2013 on the floor of their solar field (fields on the roof: the top floor, in the garden: the lowest).",holo_device_room:"Device cards in an opened room",holo_device_room_hint:"On: when you open a room, the cards of the devices in that room show (only that room's).",holo_mirror_hint:"Looking from the back of the solar field, the cards show their back \u2013 mirrored like a pane of glass. Off: they stay readable from everywhere.",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_no_field:"No solar field in the plan yet: the hologram floats beside the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_front_slot:"Front door with vision slit \xB7 No light",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_sliding_glass:"Glass sliding door",style_sliding_wood:"Wooden sliding door \xB7 Kitchen finish",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",contour_draw:"Draw outline",contour_draw_hint:"Click corners; click the first corner, press Enter or Finish to close. Esc cancels.",contour_finish:"Finish",contour_edit:"Edit free outline",contour_vertices:"Vertices",contour_edit_hint:"Like rooms: drag corners or edit X/Z. The + markers on edges insert corners; \xD7 removes a corner.",contour_insert:"Insert vertex on the next edge",contour_remove:"Remove vertex",contour_invalid:"At least three distinct corners and an area of 0.05 m\xB2 are required. Edges must not cross; maximum 200 corners.",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",hint_outdoor_free:"Place the corners of the outdoor area \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",outdoor_shape_rect:"Rectangle",outdoor_shape_free:"Free form",outdoor_draw_type:"Draw:",outdoor_draw_type_hint:"What you draw next: lawn, terrace, path, pool \u2026 The type can still be changed in the form afterwards.",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_gravel_bed:"Gravel bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_balcony:"Balcony",balcony_rail:"Railing height",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Roof sections have rectangular or free footprints, each with its own roof shape, ridge direction, height and pitch. Drag a rectangle or choose Free shape and click corners. Tap to select, drag to move; edit vertices to change the outline.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"Takes the shown floor's room outline as a free roof footprint. The selected roof shape is preserved; its corners can then be edited.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",straighten:"Straighten slanted edges",straighten_hint:"Finds room edges that are only a few centimetres off straight (a corner 1 cm out) and straightens them. Walls drawn slanted on purpose stay.",straighten_done:"{n} almost straight edges straightened.",straighten_none:"No slanted edges found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",keep_view_hint:"Switching from floor to floor keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",terrain:"Ground",terrain_hint:"Where the ground lies around the house. What lies below it \u2013 a cellar, the lower part of a semi-basement \u2013 sits in the earth in 3D; lawns, paths and terraces lie on the ground.",terrain_level:"Ground height (m, ground floor = 0)",terrain_earth:"Show cellars in the earth",terrain_earth_hint:"Floors below the ground sit in the earth; open one and you see it as in a building pit. Off: they stand free as before.",terrain_cellar_hint:"Semi-basement: lower the ground height as far as the cellar should show \u2013 e.g. \u22121.2 m. Cellar windows below the ground get a light well.",terrain_no_cellar_hint:"A cellar is a floor with a negative elevation, e.g. \u22122.6 m.",terrain_reset:"Reset the ground",cellar_window:"Cellar window",well:"Light well",well_hint:"This window lies below the ground: in 3D it gets a light well with a grate. Untick for none \u2013 e.g. where a path runs past outside.",well_rim:"Rim above the ground (m)",cellar_window_hint:"Small and high up in the wall: 100 \xD7 50 cm, 25 cm under the ceiling. Below the ground it gets a light well with a grate in 3D.",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",contact_invert:"Invert contact",contact_invert_hint:"For sensors that report open and closed the other way round",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",furn_rotation_x:"Rotation X \u2013 tilt (\xB0)",furn_rotation_y:"Rotation Y \u2013 floor plan (\xB0)",furn_rotation_z:"Rotation Z \u2013 sideways tilt (\xB0)",furn_rotation_reset:"Reset orientation",furn_rotation_hint:"X and Z rotate around the model centre, then Y around the vertical axis. Position stays unchanged; the plan shows the rotated bounds. Resize handles scale tilted furniture uniformly; use the fields above for individual dimensions.",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. Across several rooms it is cut in each of them; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",wall_pos_hint:"X and Y: the middle of the wall in the plan.",stairwell_outside:"This opening lies in no room and is therefore not cut. Move it into a room.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Collapse",side_fold_hint:"Make the sidebar narrow \u2013 more room for the floor plan",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_ac_unit:"Air conditioner (wall)",furn_awning:"Awning",furn_group_outdoor:"Terrace & balcony",bin_from:"Glow from (hour, the day before)",bin_until:"until (hour, on pickup day)",bin_none:"No pickup in sight",hh_title:"Today in the household",hh_left:"{t} left",hh_done:"Done!",hh_finished:"{name} is done",hh_thirsty:"Thirsty",hh_plant:"{name} needs water",hh_service:"{name}: service due",hh_fridge_open:"{name} is open",alert_fridge_door:"Fridge open: {name}",alert_short_fridge_door:"Fridge open",hh_moisture:"Plant (plant.*) or moisture sensor",hh_moisture_min:"Thirsty below (%)",hh_remaining:"Time left (sensor)",hh_door:"Door sensor",hh_fridge_door:"Door sensor",hh_appliance_hint:'While it runs, its pin shows the time left; afterwards "Done!" until the door opens or it runs again.',hh_door_alarm:"Warn after (minutes open)",hh_service_entity:"Consumable / service (sensor)",hh_service_min:"Due at (\u2264 percent or days)",hh_service_hint:'E.g. a filter, salt or rinse aid: a binary sensor (on = due), a number (percent or days left) or a date. When it is due the item glows yellow and shows in "Today in the household".',hh_teaser_plant:"With Household Pro the plant shows when it needs water.",hh_teaser_appliance:'With Household Pro the appliance shows its time left and "Done!" until the door opens.',hh_teaser_fridge:"With Household Pro NeonPlan warns when the fridge door stands open too long.",card_household:"Today in the household",card_household_hint:"Household Pro: glass card with bins, post, finished appliances, thirsty plants and service due",furn_waste_bin:"Waste bin",furn_mailbox:"Mailbox",furn_group_household:"Household",bin_shape:"Shape",bin_shape_bin120:"Wheelie bin 120 l",bin_shape_bin240:"Wheelie bin 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Multi-compartment bin",bin_shape_bag:"Bag",bin_shape_caddy:"Caddy / pail",bin_shape_underground:"Underground container",bin_kind:"Waste",bin_kind_rest:"General waste",bin_kind_bio:"Food / organic",bin_kind_paper:"Paper",bin_kind_plastic:"Packaging / plastic",bin_kind_glass:"Glass",bin_kind_garden:"Garden waste",bin_kind_recycling:"Recycling",bin_kind_other:"Other",bin_color:"Colour",bin_lid:"Lid",bin_source:"Waste calendar or sensor",bin_match:"Word in the calendar (empty: by its waste)",bin_hint:'The bin glows from the set hour the day before until the hour on pickup day (for all bins); its pin says "Today" or "Tomorrow", a tap on the bin shows its next pickups. A calendar (e.g. from Waste Collection Schedule) is searched for the words of its waste; a sensor can give the days to the pickup or its date.',bin_today:"Today",bin_tomorrow:"Tomorrow",bin_in_days:"in {n} days",mailbox_shape:"Shape",mailbox_shape_wall:"Wall mailbox",mailbox_shape_pole:"Mailbox on a post (with flag)",mailbox_shape_pillar:"Post box with newspaper holder",mailbox_shape_parcel:"Parcel box",mailbox_shape_bank:"Mailbox bank",mailbox_entity:"Post sensor (flap or flag)",mailbox_door:"Sensor of the emptying door (optional)",mailbox_hint:'With a flag (e.g. an input_boolean "post" set by an automation) the mailbox glows while it is on. With a flap and an emptying door it glows when post came in after it was last emptied.',mailbox_post:"Post",pro_name_household:"Household Pro",pro_feature_household:'Household Pro: bins glow the evening before their pickup (waste calendar or sensor), the mailbox while post is in it, plants when thirsty; washer, dryer and dishwasher show their time left and "Done!"; filters and consumables due glow yellow; open fridge doors warn; glass card "Today in the household"; plus the smart fridge (side-by-side, doors with sensors)',household_teaser_bin:"With Household Pro the bin glows the evening before its pickup \u2013 from your waste calendar.",household_teaser_mail:"With Household Pro the mailbox glows as soon as post is in it \u2013 until it is emptied.",awning_cover:"Awning (cover)",awning_pitch:"Fall (\xB0)",awning_time:"Run time fully out (s)",awning_position:"Position sensor (optional)",awning_valance:"Valance (fabric edge at the front)",awning_invert:"Reverse direction",awning_invert_hint:"For covers that report 100 % while the awning is in.",awning_kind:"Kind",awning_kind_arm:"Folding-arm awning (terrace)",awning_kind_drop:"Drop-arm awning (balcony, window)",awning_kind_vertical:"Vertical screen / ZIP (window, balcony)",awning_kind_pergola:"Pergola / conservatory awning",awning_kind_side:"Side awning (privacy screen)",awning_kind_arm_hint:"The classic over a terrace: folding arms push the fabric out with a slight fall. Depth = projection.",awning_kind_drop_hint:"The arms swing out and down from the wall, the fabric stretches at a slant in front. Depth = arm length, fall = how far the arms go below the horizontal.",awning_kind_vertical_hint:"The fabric runs straight down in side rails to the floor \u2013 in front of a window, a balcony railing or the front of a pergola. Height above the floor = the box's underside.",awning_kind_pergola_hint:"A fixed frame with posts at the front; the fabric runs out on top of its rails. Depth = to the posts, fall = the roof's slope.",awning_kind_side_hint:"A post with the rolled fabric on the left, the fabric pulls out sideways to the right up to the other post. Width = how far it pulls out, height above the floor = the fabric's height.",awning_hint:"Width = the awning along the wall, depth = its projection fully out; the back of the frame goes against the house wall, height above the floor is the cassette's underside. If the cover reports its position while it runs, the awning runs out slowly in 3D; if it only says opening/closing, it moves along at the run time.",furn_only_color:"Glow in one colour only",furn_only_color_pick:"Colour",furn_only_color_hint:`The lamp only glows while the light shows about this colour \u2013 e.g. yellow for "water" at the washbasin. The same light's other colours stay dark here.`,furn_run_w:"Running from (watts)",furn_run_w_hint:"From how many watts at the power sensor the appliance counts as running and glows (empty: 10 W). For appliances behind a smart plug that draw a few watts on standby, e.g. 100.",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window_freeform:"Convert to freeform",roof_window_rectangle:"Use rectangle",roof_window_draw:"Redraw contour",roof_window_draw_hint:"Click corners on the selected roof face. Close at the start or with Finish; Escape cancels. Up to 32 points. Then drag corners or insert them with +.",roof_cover_style:"Shading type",roof_cover_roller:"Blind on the sash",roof_cover_awning:"Awning above the glass",roof_cover_direction:"Extension direction",roof_cover_top:"Top to bottom",roof_cover_bottom:"Bottom to top",roof_cover_left:"Left to right",roof_cover_right:"Right to left",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_hinge:"Pivot point",roof_window_hinge_top:"Top",roof_window_hinge_middle:"Middle",roof_window_hinge_bottom:"Bottom",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_float:"Show over the room without the roof",roof_window_float_hint:"When the roof fades out as you zoom in on a floor or a room, the window stays where it is over the room \u2013 open, tilted, with its blind. This works over rooms of the floor the roof sits on; where the slope reaches down over a lower floor, the windows stay in the roof. Off: it shows in the roof only.",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"The sash opens around its selected pivot (top, middle or bottom); tilted, a little. The frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_wall_free:"free-standing",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Connected to (inverter or battery)",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stairs_u_hint:"The U-stair rises from the marked front edge towards the back, turns at the landing and comes back up on the other side. \u201CMirror\u201D turns it the other way. It opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_gas_meter:"Gas meter",energy_water_meter:"Water meter",energy_meters_hint:`Energy Pro: the house card shows how much gas and water were used today \u2013 from the meters' statistics (a counter, e.g. in m\xB3). "Take over from the energy dashboard" fills both too.`,holo_gas:"Gas",holo_water:"Water",holo_today_short:"today",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant.",diag_title:"Help make NeonPlan better",diag_intro:"Voluntary and anonymous: when you switch it on, NeonPlan sends a small report to the NeonPlan server (api.mastershort.de) at most once a day. It shows which devices NeonPlan runs on, where it stutters and which errors occur \u2013 so they can be fixed.",diag_sent_head:"What is sent:",diag_sent:"a random id (not Home Assistant's), the versions of NeonPlan, Home Assistant and Python, the language, the installed packs and Pro add-ons, counts from the plan (floors, rooms, furniture, linked devices, cameras), device type, browser and system of the screens with frame rate and graphics class, how often each view was opened, and NeonPlan's error messages without names and addresses.",diag_never_head:"What is never sent:",diag_never:"names, entities, areas, the shape of your floor plan, IP addresses, your Home Assistant installation's id, user names and your licence key.",diag_voluntary:'You can switch it off again at any time. Reports are kept for 12 months; "Delete my data" removes them at once. More in the',diag_privacy:"privacy notice",diag_switch:"Send anonymous usage and error reports",diag_view:"View data",diag_view_head:"This is what is sent",diag_view_hint_on:"Exactly this report goes out next time (at most once a day); errors in addition at most once an hour.",diag_view_hint_off:"Switched off: nothing is sent. This is how the report would look \u2013 the id is only created when you switch it on.",diag_delete:"Delete my data",diag_delete_confirm:"Delete all reports of this installation on the server and stop sending?",diag_deleted:"Deleted. Sending is off; if you switch it on again, you get a new id.",diag_delete_failed:"The NeonPlan server could not be reached. Please try again later.",diag_unavailable:"This setting is available after a restart of Home Assistant."},Fd=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl","zh","pt"],gn=new Map,mr=new Map;function gr(n){let e=(n??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return Fd.includes(t)?t:null}function Tt(n){let e=gr(n);return!e||gn.has(e)}function no(n){let e=gr(n);if(!e||gn.has(e))return Promise.resolve();let t=mr.get(e);if(!t){let o=new URL(`./lang/${e}.json?v=18b4d5c06908`,import.meta.url).href;t=fetch(o).then(i=>i.ok?i.json():{}).then(i=>{gn.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{gn.set(e,{})}).finally(()=>mr.delete(e)),mr.set(e,t)}return t}function A(n,e,t={}){let o=n?.language??navigator.language,i=o.startsWith("de")?null:gr(o),s=(o.startsWith("de")?ca:i&&gn.get(i)||da)[e]??da[e]??ca[e]??e;for(let[a,l]of Object.entries(t))s=s.replace(`{${a}}`,String(l));return s}function J(n,e,t=2){return e.toLocaleString(n?.language??void 0,{maximumFractionDigits:t})}var Dd=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household"],Id=["fun_pets","fun_halloween"],ua=["pool","diagnostics"];var Hd=["fridge_smart"];function Wd(n){return Dd.includes(n)||Hd.includes(n)||Id.includes(n)}var _r=n=>(n??navigator.language).toLowerCase().startsWith("de");function ha(n){return`https://mastershort.de/my-account/?lang=${_r(n)?"de":"en"}&src=neonplan-app`}function pa(n){return _r(n)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var Cd={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},time_travel:{de:"pro-erweiterungen/#67-zeitreise",en:"pro-add-ons/#67-time-travel"},pool:{de:"pro-erweiterungen/#68-pool-pro",en:"pro-add-ons/#68-pool-pro"},household:{de:"pro-erweiterungen/#68-haushalt-pro-beta",en:"pro-add-ons/#68-household-pro-beta"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function fa(n,e){let t=_r(n),o=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",i=e?Cd[e]:void 0,r=i?t?i.de:i.en:"",[s,a]=r.split("#");return`${o}${s}?lang=${t?"de":"en"}${a?`#${a}`:""}`}function Ld(n=rn()){let e=new Set;for(let t of n)for(let o of t.features??[])Wd(o)&&e.add(o);return e}function H(n,e){return Ld(e).has(n)}var ma={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function oo(n){return ma[n]}function ro(n){return`<ha-icon icon="mdi:${n.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function _n(n){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ma[n]}"/></svg>`}var Ze=(n,e)=>A(n,e);function ge(n,e){if(!e||K(e))return Ze(n,"state_unavailable");let t=e.attributes;switch(I(e.entity_id)){case"light":return e.state!=="on"?Ze(n,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:Ze(n,"state_on");case"switch":case"fan":return Ze(n,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:io(n,e.state);case"climate":{let o=typeof t.current_temperature=="number"?`${J(n,t.current_temperature,1)} ${n?Ee(n):"\xB0C"}`:null;return e.state==="off"?o?`${o} \xB7 ${Ze(n,"state_off")}`:Ze(n,"state_off"):o??io(n,e.state)}case"media":{let o=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",i=[t.app_name,t.media_title,t.source].find(r=>typeof r=="string"&&r);return o&&i?i:io(n,e.state)}case"lock":case"camera":return io(n,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?Ze(n,e.state==="on"?"state_open":"state_closed"):Ze(n,e.state==="on"?"state_detected":"state_clear");case"sensor":{let o=Number(e.state),i=t.unit_of_measurement??"",r=n?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(o)?`${J(n,o,r)}${i?` ${i}`:""}`:e.state}default:return""}}function io(n,e){let t=`state_${e}`,o=A(n,t);return o===t?e:o}function ga(n,e){let t=[];for(let o of e.floors)for(let i of o.placements){let r=I(i.entity_id),s=n.states[i.entity_id];if(!r||!s)continue;let a=o.rooms.find(d=>d.points.length>=3&&G([i.x,i.z],d.points))??null,l=a?.area_id?n.areas?.[a.area_id]?.name:void 0;t.push({id:i.entity_id,floorId:o.id,roomId:a?.id??null,x:i.x,z:i.z,y:ze(o,a)+(i.y??At(r,Ue(o,a),i.mount??null)),base:ze(o,a),top:ze(o,a)+Ue(o,a),lamp:r==="light"?i.mount??"ceiling":null,model:r==="camera"?i.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:r==="camera"?Od(n,i.entity_id):void 0,fov:i.fov??void 0,reach:i.reach??void 0,tilt:i.tilt??void 0,rotation:i.rotation??0,icon:i.icon?ro(i.icon):_n(r),cone:r==="camera"&&i.cone===!1?!1:void 0,name:i.name||Z(n,i.entity_id,l),ownName:i.name||void 0,showName:!!i.show_name,text:ge(n,s),active:Oe(s),unavailable:K(s),glow:r==="light"?br(qe(s),i.glow_scale):null,show:i.marker??void 0,fixed:!!i.locked})}return t}function _a(n,e){let t=`${e} ${String(n.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function Od(n,e){return Xe(n,e).some(t=>n.states[t]?.state==="on")}function Xe(n,e){let t=n.entities?.[e]?.device_id;return t?Object.values(n.entities??{}).filter(o=>o.device_id===t&&o.entity_id.startsWith("binary_sensor.")).map(o=>o.entity_id).filter(o=>["motion","occupancy","presence"].includes(String(n.states[o]?.attributes.device_class))):[]}function ba(n){return n.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function Se(n,e){n.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function wa(n,e){let t=e.slice(0,e.indexOf("."));return n.callService(t,"toggle",{entity_id:e})}function br(n,e){return!n||e==null||e===1?n:{...n,level:Math.max(.02,Math.min(1.5,n.level*e))}}var $e=(n,e)=>[n[0]-e[0],n[1]-e[1]],Ft=(n,e)=>[n[0]+e[0],n[1]+e[1]],Ye=(n,e)=>[n[0]*e,n[1]*e],wr=(n,e)=>n[0]*e[0]+n[1]*e[1],Dt=(n,e)=>n[0]*e[1]-n[1]*e[0],bn=n=>Math.hypot(n[0],n[1]),It=n=>{let e=bn(n)||1;return[n[0]/e,n[1]/e]},va=n=>[-n[1],n[0]],ya=n=>[n[1],-n[0]];function Ht(n,e,t=[]){let o=e.eps??.005,i=[],r=t.filter(y=>Math.hypot(y.b[0]-y.a[0],y.b[1]-y.a[1])>.05),s=[],a=y=>{for(let x=0;x<s.length;x++)if(Math.abs(s[x][0]-y[0])<=o&&Math.abs(s[x][1]-y[1])<=o)return x;return s.push([y[0],y[1]]),s.length-1},l=[];for(let y of n){let x=y.points;if(x.length<3||Math.abs(Fe(x))<1e-6)continue;let $=Fe(x)>0,M=x.map(a);for(let F=0;F<x.length;F++){let N=M[F],O=M[(F+1)%x.length];N!==O&&l.push($?{u:N,v:O,room:y.id,edge:F,forward:!0}:{u:O,v:N,room:y.id,edge:F,forward:!1})}}let d=r.map(y=>[a(y.a),a(y.b)]),c=new Set;for(let y of n){let x=y.points;x.length<3||(y.wall_splits??[]).forEach(($,M)=>{if(!$||M>=x.length)return;let F=x[M],N=$e(x[(M+1)%x.length],F),O=bn(N);for(let C of $)C>o&&C<O-o&&c.add(a(Ft(F,Ye(N,C/O))))})}let u=[];for(let y of l){let x=s[y.u],$=s[y.v],M=$e($,x),F=bn(M),N=Ye(M,1/F),O=[];for(let B=0;B<s.length;B++){if(B===y.u||B===y.v)continue;let ne=$e(s[B],x),Q=wr(ne,N);Q<=o||Q>=F-o||Math.abs(Dt(N,ne))<=o&&O.push({t:Q,id:B})}O.sort((B,ne)=>B.t-ne.t);let C=[{t:0,id:y.u},...O,{t:F,id:y.v}];for(let B=0;B+1<C.length;B++){let ne=C[B],Q=C[B+1],te=y.forward?ne.t:F-Q.t,ce=y.forward?Q.t:F-ne.t;u.push({u:ne.id,v:Q.id,room:y.room,edge:y.edge,t0:te,t1:ce})}}let p=new Map;for(let y of u){let x=y.u<y.v?`${y.u}-${y.v}`:`${y.v}-${y.u}`,$=p.get(x);$||p.set(x,$=[]),$.push(y)}let f=y=>({room_id:y.room,edge:y.edge,t0:y.t0,t1:y.t1}),g=new Map;for(let y of u){let x=`${y.room}:${y.edge}`;g.set(x,[...g.get(x)??[],y.t0].sort(($,M)=>$-M))}let m=y=>{let x=n.find(M=>M.id===y.room)?.wall_heights?.[y.edge];if(!Array.isArray(x))return x;let $=g.get(`${y.room}:${y.edge}`)??[];return x[$.indexOf(y.t0)]??null},h=y=>{let x=y.map(m).filter(M=>typeof M=="number"&&M>0);if(x.length)return Math.min(...x);let $=y.map(M=>n.find(F=>F.id===M.room)?.ceiling_height);return $.every(M=>typeof M=="number"&&M>0)?Math.max(...$):void 0},v=y=>{let x=y.map($=>n.find(M=>M.id===$.room)?.wall_thickness?.[$.edge]).filter($=>typeof $=="number"&&$>0);return x.length?Math.max(...x):void 0},_=y=>y.some(x=>m(x)===0),b=[],k=[];for(let y of p.values()){let x=y[0],$=y.find(M=>M!==x&&M.u===x.v&&M.v===x.u&&M.room!==x.room);for(let M of y)M!==x&&M!==$&&M.room!==x.room&&i.push(`overlap:${x.room}:${M.room}`);if(_($?[x,$]:[x])){$&&b.push([x.room,$.room]);continue}if($){let M=v([x,$])??e.interior;k.push({a:x.u,b:x.v,left:M/2,right:M/2,exterior:!1,roomLeft:x.room,roomRight:$.room,sources:[f(x),f($)],height:h([x,$])})}else k.push({a:x.u,b:x.v,left:0,right:v([x])??e.exterior,exterior:!0,roomLeft:x.room,roomRight:null,sources:[f(x)],height:h([x])})}let z=y=>It($e(s[y.b],s[y.a]));for(let y of k){if(y.exterior||y.free)continue;let x=new Set;for(let M of[y.a,y.b])for(let F of k)!F.exterior||F.free||F.a!==M&&F.b!==M||Math.abs(Dt(z(y),z(F)))>1e-6||(F.roomLeft===y.roomLeft?x.add("left"):F.roomLeft===y.roomRight&&x.add("right"));if(x.size!==1)continue;let $=y.left+y.right;x.has("left")?(y.left=0,y.right=$):(y.left=$,y.right=0)}r.forEach((y,x)=>{let[$,M]=d[x];if($===M)return;let F=[(y.a[0]+y.b[0])/2,(y.a[1]+y.b[1])/2],N=n.find(B=>B.points.length>=3&&G(F,B.points))?.id??null,O=(y.thickness??e.interior)/2,C=typeof y.height=="number"&&y.height>0?y.height:void 0;k.push({free:y.id,a:$,b:M,left:O,right:O,exterior:!1,roomLeft:N,roomRight:N,sources:[],height:C})}),k=Vd(k,s,c);let E=Kd(k,s);return{walls:k.map((y,x)=>{let $=s[y.a],M=s[y.b],F=E.get(`${x}:a`),N=E.get(`${x}:b`),O=Gd([F.right,N.left,M,N.right,F.left,$],1e-6);return{id:Bd($,M),a:[$[0],$[1]],b:[M[0],M[1]],left:y.left,right:y.right,exterior:y.exterior,roomLeft:y.roomLeft,roomRight:y.roomRight,sources:y.sources,footprint:O,...y.free?{free:y.free}:{},...y.height!==void 0?{height:y.height}:{}}}),warnings:[...new Set(i)],open:b}}function Bd(n,e){let t=r=>Math.round(r*100),[o,i]=n[0]<e[0]||n[0]===e[0]&&n[1]<=e[1]?[n,e]:[e,n];return`w_${t(o[0])}_${t(o[1])}_${t(i[0])}_${t(i[1])}`}function ka(n){return{...n,a:n.b,b:n.a,left:n.right,right:n.left,roomLeft:n.roomRight,roomRight:n.roomLeft}}function Vd(n,e,t=new Set){let o=n.slice(),i=!0;for(;i;){i=!1;let r=new Map;o.forEach((s,a)=>{for(let l of[s.a,s.b]){let d=r.get(l);d||r.set(l,d=[]),d.push(a)}});for(let[s,a]of r){if(a.length!==2||t.has(s))continue;let l=o[a[0]],d=o[a[1]];if(l.b!==s&&(l=ka(l)),d.a!==s&&(d=ka(d)),l.a===d.b)continue;let c=It($e(e[l.b],e[l.a])),u=It($e(e[d.b],e[d.a]));if(Math.abs(Dt(c,u))>1e-6||wr(c,u)<=0||l.free||d.free||l.height!==d.height||l.exterior!==d.exterior||l.roomLeft!==d.roomLeft||l.roomRight!==d.roomRight||Math.abs(l.left-d.left)>1e-9||Math.abs(l.right-d.right)>1e-9)continue;let p={...l,b:d.b,sources:Nd(l.sources,d.sources)},f=o.filter((g,m)=>m!==a[0]&&m!==a[1]);f.push(p),o.length=0,o.push(...f),i=!0;break}}return o}function Nd(n,e){let t=n.map(o=>({...o}));for(let o of e){let i=t.find(r=>r.room_id===o.room_id&&r.edge===o.edge&&(Math.abs(r.t1-o.t0)<1e-6||Math.abs(o.t1-r.t0)<1e-6));i?(i.t0=Math.min(i.t0,o.t0),i.t1=Math.max(i.t1,o.t1)):t.push({...o})}return t}function Kd(n,e){let t=new Map;n.forEach((i,r)=>{let s=It($e(e[i.b],e[i.a])),a=[[i.a,{key:`${r}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${r}:b`,d:Ye(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,d]of a){let c=t.get(l);c||t.set(l,c=[]),c.push(d)}});let o=new Map;for(let[i,r]of t){let s=e[i];r.sort((d,c)=>d.angle-c.angle);let a=d=>({left:Ft(s,Ye(va(d.d),d.left)),right:Ft(s,Ye(ya(d.d),d.right))});for(let d of r)o.set(d.key,a(d));if(r.length<2)continue;let l=4*Math.max(...r.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<r.length;d++){let c=r[d],u=r[(d+1)%r.length],p=Ft(s,Ye(va(c.d),c.left)),f=Ft(s,Ye(ya(u.d),u.right)),g=Dt(c.d,u.d);if(Math.abs(g)<1e-4)continue;let m=Dt($e(f,p),u.d)/g,h=Ft(p,Ye(c.d,m));bn($e(h,s))>l||(o.get(c.key).left=h,o.get(u.key).right=h)}}return o}function Gd(n,e){let t=n.filter((i,r)=>bn($e(i,n[(r+1)%n.length]))>e),o=!0;for(;o&&t.length>3;){o=!1;for(let i=0;i<t.length;i++){let r=t[(i+t.length-1)%t.length],s=t[i],a=t[(i+1)%t.length],l=$e(s,r),d=$e(a,s);if(Math.abs(Dt(It(l),It(d)))<1e-7&&wr(l,d)>0){t=t.filter((c,u)=>u!==i),o=!0;break}}}return t}var ke=(n,e,t)=>(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0]);function Ve(n){return n.reduce((e,t,o)=>{let i=n[(o+1)%n.length];return e+t[0]*i[1]-i[0]*t[1]},0)/2}var wn=(n,e,t)=>Math.abs(ke(e,t,n))<1e-8&&n[0]>=Math.min(e[0],t[0])-1e-8&&n[0]<=Math.max(e[0],t[0])+1e-8&&n[1]>=Math.min(e[1],t[1])-1e-8&&n[1]<=Math.max(e[1],t[1])+1e-8;function Wt(n,e){let t=!1;for(let o=0,i=n.length-1;o<n.length;i=o++){let r=n[i],s=n[o];if(wn(e,r,s))return!0;r[1]>e[1]!=s[1]>e[1]&&e[0]<(s[0]-r[0])*(e[1]-r[1])/(s[1]-r[1])+r[0]&&(t=!t)}return t}function xa(n){if(n.length<3||n.length>200||!n.every(e=>e.every(Number.isFinite))||Math.abs(Ve(n))<.05)return!1;for(let e=0;e<n.length;e++){let t=n[e],o=n[(e+1)%n.length];if(Math.hypot(t[0]-o[0],t[1]-o[1])<1e-8)return!1;let i=n[(e+2)%n.length];if(Math.abs(ke(t,o,i))<1e-8&&(o[0]-t[0])*(i[0]-o[0])+(o[1]-t[1])*(i[1]-o[1])<0)return!1;for(let r=e+2;r<n.length;r++){if((r+1)%n.length===e)continue;let s=n[r],a=n[(r+1)%n.length];if(ke(t,o,s)*ke(t,o,a)<0&&ke(s,a,t)*ke(s,a,o)<0||wn(t,s,a)||wn(o,s,a)||wn(s,t,o)||wn(a,t,o))return!1}}return!0}function vn(n){let e=n.map((i,r)=>r);Ve(n)<0&&e.reverse();let t=[],o=n.length*n.length;for(;e.length>3&&o-- >0;){let i=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],a=e[r],l=e[(r+1)%e.length],d=ke(n[s],n[a],n[l]);if(Math.abs(d)<1e-8){e.splice(r,1),i=!0;break}if(!(d<0||e.some(c=>c!==s&&c!==a&&c!==l&&ke(n[s],n[a],n[c])>=-1e-8&&ke(n[a],n[l],n[c])>=-1e-8&&ke(n[l],n[s],n[c])>=-1e-8))){t.push([s,a,l]),e.splice(r,1),i=!0;break}}if(!i)return[]}return e.length===3&&Math.abs(ke(n[e[0]],n[e[1]],n[e[2]]))>1e-8&&t.push([...e]),t}function Sa(n,e){let t=n,o=Ve(e)<0?-1:1;for(let i=0;i<e.length&&t.length;i++){let r=e[i],s=e[(i+1)%e.length],a=t;t=[];for(let l=0;l<a.length;l++){let d=a[l],c=a[(l+1)%a.length],u=o*ke(r,s,d),p=o*ke(r,s,c);if(u>=-1e-8&&t.push(d),u>=-1e-8!=p>=-1e-8){let f=u/(u-p);t.push([d[0]+(c[0]-d[0])*f,d[1]+(c[1]-d[1])*f,d[2]+(c[2]-d[2])*f])}}}return t.filter((i,r)=>{let s=t[(r+1)%t.length];return Math.hypot(i[0]-s[0],i[1]-s[1])>1e-8})}function so(n,e,t){let o=[0,1],i=t[0]-e[0],r=t[1]-e[1];for(let a=0;a<n.length;a++){let l=n[a],d=n[(a+1)%n.length],c=d[0]-l[0],u=d[1]-l[1],p=i*u-r*c;if(Math.abs(p)<1e-8)continue;let f=((l[0]-e[0])*u-(l[1]-e[1])*c)/p,g=((l[0]-e[0])*r-(l[1]-e[1])*i)/p;f>1e-8&&f<1-1e-8&&g>=-1e-8&&g<=1+1e-8&&o.push(f)}o.sort((a,l)=>a-l);let s=[];for(let a=1;a<o.length;a++){let l=o[a-1],d=o[a],c=(l+d)/2;d-l>1e-8&&Wt(n,[e[0]+i*c,e[1]+r*c])&&s.push([l,d])}return s}function vr(n,e){return e.every((t,o)=>Wt(n,t)&&so(n,t,e[(o+1)%e.length]).reduce((i,[r,s])=>i+s-r,0)>1-1e-8)}var kn=Math.PI/180;function xn(n){let e=Math.min(n.x0,n.x1),t=Math.max(n.x0,n.x1),o=Math.min(n.z0,n.z1),i=Math.max(n.z0,n.z1);return n.axis==="x"?{u0:e,u1:t,w:i-o,at:(r,s)=>[r,n.flip?i-s:o+s]}:{u0:o,u1:i,w:t-e,at:(r,s)=>[n.flip?t-s:e+s,r]}}function Sn(n){let e=xn(n).w,t=n.eave_a,o=n.eave_b,i=Math.tan(Math.min(80,Math.max(0,n.pitch_a))*kn),r=Math.tan(Math.min(80,Math.max(0,n.pitch_b))*kn);if(n.shape==="flat"||n.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(n.shape==="pent")return{vr:e,rh:t+e*i,y:l=>t+l*i};if(n.shape==="mansard"){let l=za(e,t,o,i,r);return{vr:l.vr,rh:l.rh,y:l.y}}let s=i+r>1e-6?Math.min(e,Math.max(0,(o-t+e*r)/(i+r))):e/2,a=t+s*i;return{vr:s,rh:a,y:l=>l<=s?t+l*i:o+(e-l)*r}}var Ud=.14;function Ma(n,e){return!n.open&&Math.min(n.base,n.eave_a,n.eave_b)<e-.05}function Pa(n,e,t){let o=null,i=Math.max(0,n.settings.roof.overhang??0);for(let r of n.settings.roof.sections??[]){if(r.open)continue;let s=Math.min(r.x0,r.x1),a=Math.max(r.x0,r.x1),l=Math.min(r.z0,r.z1),d=Math.max(r.z0,r.z1);if(e<s-1e-6||e>a+1e-6||t<l-1e-6||t>d+1e-6||r.points&&r.points.length>=3&&!G([e,t],r.points))continue;let[c,u]=Aa(r,e,t),p=r.shape==="flat"||r.shape==="parapet",f=Math.max(0,r.overhang??i),m=((p?null:Ea(qd(r,{u0:f,u1:f,a:f,b:f}),c,u))??Sn(r).y(u))-Ud;o=o===null?m:Math.max(o,m)}return o}function jd(n,e){let t=n.length;if(t<3||Math.abs(e)<1e-9)return n.map(r=>[r[0],r[1]]);let o=Fe(n)>=0?1:-1,i=[];for(let r=0;r<t;r++){let s=n[(r+t-1)%t],a=n[r],l=n[(r+1)%t],d=$a([a[0]-s[0],a[1]-s[1]]),c=$a([l[0]-a[0],l[1]-a[1]]),u=[d[1]*o,-d[0]*o],p=[c[1]*o,-c[0]*o],f=u[0]+p[0],g=u[1]+p[1],m=Math.hypot(f,g);if(m<1e-6){i.push([a[0]+u[0]*e,a[1]+u[1]*e]);continue}let h=(f*u[0]+g*u[1])/m,v=Math.min(4,1/Math.max(.25,h));i.push([a[0]+f/m*e*v,a[1]+g/m*e*v])}return i}function $a(n){let e=Math.hypot(n[0],n[1])||1;return[n[0]/e,n[1]/e]}function yr(n,e){if(n.points&&n.points.length>=3)return jd(n.points,e);let t=Math.min(n.x0,n.x1)-e,o=Math.max(n.x0,n.x1)+e,i=Math.min(n.z0,n.z1)-e,r=Math.max(n.z0,n.z1)+e;return[[t,i],[o,i],[o,r],[t,r]]}var yn=Math.tan(30*kn);function za(n,e,t,o,i){let r=Math.min(n*.3,o>1e-6?2.4/o:n*.3),s=Math.min(n*.3,i>1e-6?2.4/i:n*.3),a=e+r*o,l=t+s*i,d=Math.min(n-s,Math.max(r,(l-a+yn*(n-s+r))/(2*yn))),c=a+(d-r)*yn;return{vla:r,vlb:s,yla:a,ylb:l,vr:d,rh:c,y:p=>p<=r?e+p*o:p<=d?a+(p-r)*yn:p<=n-s?l+(n-s-p)*yn:t+(n-p)*i}}function qd(n,e){let t=Zd(n,e);if(!n.points||n.points.length<3)return t;let o=yr(n,Math.max(0,Math.min(e.u0,e.u1,e.a,e.b))).map(([d,c])=>Aa(n,d,c)),i=vn(o),r=t.faces.flatMap(d=>i.map(c=>Sa(d,c.map(u=>o[u])))).filter(d=>d.length>=3&&Math.abs(Ve(d))>1e-8),s=(d,c,u)=>[d[0]+(c[0]-d[0])*u,d[1]+(c[1]-d[1])*u,d[2]+(c[2]-d[2])*u],a=t.ridges.flatMap(([d,c])=>so(o,d,c).map(([u,p])=>[s(d,c,u),s(d,c,p)])),l=[];return o.forEach((d,c)=>{let u=o[(c+1)%o.length],p=[0,...t.faces.flatMap(f=>so(f.map(([g,m])=>[g,m]),d,u).flat())].filter(f=>f<1-1e-8).sort((f,g)=>f-g);for(let f=0;f<p.length;f++){if(f&&p[f]-p[f-1]<1e-8)continue;let g=p[f],m=d[0]+(u[0]-d[0])*g,h=d[1]+(u[1]-d[1])*g;l.push([m,h,Ea(t,m,h)??Sn(n).y(h)])}}),{faces:r,rim:l,ridges:a,gable:null}}function Zd(n,e){let t=xn(n),o=Sn(n),i=t.w,r=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=(_,b)=>[_,b,o.y(b)],c=d(a,-r),u=d(l,-r),p=d(l,i+s),f=d(a,i+s),g=Math.tan(Math.min(80,Math.max(0,n.pitch_a))*kn),m=Math.tan(Math.min(80,Math.max(0,n.pitch_b))*kn);if(n.shape==="pent"){let _=[c,u,p,f];return{faces:[_],rim:_,ridges:[[p,f]],gable:[[0,o.y(0)],[i,o.y(i)]]}}if(n.shape==="hip"||n.shape==="pyramid"){let _=n.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(o.vr,i-o.vr)||i/2),b=[t.u0+_,o.vr,o.rh],k=[t.u1-_,o.vr,o.rh],z=n.shape==="pyramid"?[[c,u,b],[u,p,b],[p,f,b],[f,c,b]]:[[c,u,k,b],[b,k,p,f],[f,c,b],[u,p,k]],E=n.shape==="pyramid"?[[c,b],[f,b],[u,b],[p,b]]:[[b,k],[c,b],[f,b],[u,k],[p,k]];return{faces:z,rim:[c,u,p,f],ridges:E,gable:null}}if(n.shape==="halfhip"){let _=Math.min(o.y(0),o.y(i)),b=_+(o.rh-_)*.55,k=g>1e-6?Math.min(o.vr,(b-n.eave_a)/g):o.vr,z=m>1e-6?Math.max(o.vr,i-(b-n.eave_b)/m):o.vr,E=Math.min((t.u1-t.u0)/2-.1,(o.rh-b)/Math.max(.2,g)),T=[t.u0+E,o.vr,o.rh],y=[t.u1-E,o.vr,o.rh],x=[a,k,b],$=[a,z,b],M=[l,k,b],F=[l,z,b];return{faces:[[c,u,M,y,T,x],[T,y,F,p,f,$],[$,x,T],[M,F,y]],rim:[c,u,M,F,p,f,$,x],ridges:[[T,y],[x,T],[$,T],[M,y],[F,y]],gable:[[0,o.y(0)],[k,b],[z,b],[i,o.y(i)]]}}if(n.shape==="mansard"){let _=za(i,n.eave_a,n.eave_b,g,m),b=[a,_.vla,_.yla],k=[l,_.vla,_.yla],z=[a,i-_.vlb,_.ylb],E=[l,i-_.vlb,_.ylb],T=[a,_.vr,_.rh],y=[l,_.vr,_.rh];return{faces:[[c,u,k,b],[b,k,y,T],[T,y,E,z],[z,E,p,f]],rim:[c,u,k,y,E,p,f,z,T,b],ridges:[[T,y],[b,k],[z,E]],gable:[[0,o.y(0)],[_.vla,_.yla],[_.vr,_.rh],[i-_.vlb,_.ylb],[i,o.y(i)]]}}let h=[a,o.vr,o.rh],v=[l,o.vr,o.rh];return{faces:[[c,u,v,h],[h,v,p,f]],rim:[c,u,v,p,f,h],ridges:[[h,v]],gable:[[0,o.y(0)],[o.vr,o.rh],[i,o.y(i)]]}}function Ea(n,e,t){let o=null;for(let i of n.faces){if(!Wt(i.map(_=>[_[0],_[1]]),[e,t]))continue;let[r,s]=i,a=i.slice(2).find(_=>Math.abs((s[0]-r[0])*(_[1]-r[1])-(s[1]-r[1])*(_[0]-r[0]))>1e-9);if(!a)continue;let l=s[0]-r[0],d=s[2]-r[2],c=s[1]-r[1],u=a[0]-r[0],p=a[2]-r[2],f=a[1]-r[1],g=d*f-c*p,m=c*u-l*f,h=l*p-d*u;if(Math.abs(m)<1e-9)continue;let v=r[2]-(g*(e-r[0])+h*(t-r[1]))/m;o=o===null?v:Math.min(o,v)}return o}function Aa(n,e,t){let o=Math.min(n.x0,n.x1),i=Math.max(n.x0,n.x1),r=Math.min(n.z0,n.z1),s=Math.max(n.z0,n.z1);return n.axis==="x"?[e,n.flip?s-t:t-r]:[t,n.flip?i-e:e-o]}function Ra(n,e,t){let o=xn(e),i=n.floors.flatMap(d=>d.rooms.filter(c=>c.points.length>=3&&d.elevation+d.height>e.base+.05)),r=d=>d.some(c=>i.some(u=>G(c,u.points))),s=.35,a=[.15,.5,.85].map(d=>o.u0+(o.u1-o.u0)*d),l=[.15,.5,.85].map(d=>o.w*d);return{a:r(a.map(d=>o.at(d,-s)))?0:t,b:r(a.map(d=>o.at(d,o.w+s)))?0:t,u0:r(l.map(d=>o.at(o.u0-s,d)))?0:t,u1:r(l.map(d=>o.at(o.u1+s,d)))?0:t}}function Ta(n,e){let t=[e.roomLeft,e.roomRight].map(o=>n.rooms.find(i=>i.id===o)).filter(o=>!!o);return t.length?{bottom:Math.min(...t.map(o=>Qo(n,o))),top:Math.max(...t.map(o=>ze(n,o)+Math.min(Ue(n,o),e.height??1/0)))}:{bottom:0,top:Math.min(n.height,e.height??n.height)}}var Xd=[[0,0],[1,0],[1,1],[0,1]];function kr(n){return n.length<=32&&n.every(e=>e.length===2&&e.every(t=>Number.isFinite(t)&&t>=0&&t<=1))&&xa(n)}function xr(n){return n.points&&kr(n.points)?n.points:Xd}function Sr(n){return xr(n).map(([e,t])=>[n.u+e*(n.w??.78),n.v+t*(n.h??1.18)])}var lo=Math.PI/180,Yd=1.13,Jd=1.72,co=.025,dt=.07,Fa=.25;function Mn(n,e){let t=[];for(let o of n.floors){if(e&&o.id!==e)continue;let{walls:i}=Ht(o.rooms,{exterior:n.settings.wall_exterior,interior:n.settings.wall_interior},o.walls??[]);for(let r of i){if(!r.exterior&&!r.free)continue;let s=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(s,a);if(l<.5)continue;let d=a/l,c=-s/l,u=Ta(o,r),p=u.top-u.bottom,f=r.sources.find(h=>h.room_id===r.roomLeft)?.edge??null,g={floorId:o.id,room:r.roomLeft,edge:f,free:!!r.free},m=(h,v,_,b)=>t.push({key:h,section:null,side:"top",flat:!1,o:v,eu:_,es:[0,1,0],n:b,lu:l,ls:p,pitch:90,span:()=>[0,l],facing:[b[0],b[2]],wall:g});m(`wall:${o.id}:${r.id}`,[r.a[0]+d*r.right,o.elevation+u.bottom,r.a[1]+c*r.right],[s/l,0,a/l],[d,0,c]),r.free&&m(`wall:${o.id}:${r.id}:back`,[r.b[0]-d*r.left,o.elevation+u.bottom,r.b[1]-c*r.left],[-s/l,0,-a/l],[-d,0,-c])}}return t}var Da="ground";function Qd(n){let e=[...n.floors.filter(t=>t.rooms.some(o=>o.points.length>=3))].sort((t,o)=>t.elevation-o.elevation);return e.find(t=>t.elevation>-.5)??e[0]??n.floors[0]??null}function eu(n,e){let t=(e.rotation??0)*Math.PI/180,o=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],r=Qd(n),s=o[0]*e.u+i[0]*e.v,a=o[2]*e.u+i[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:sn(r,s,a)):e.base??0;return{key:Da,section:null,side:"top",flat:!0,o:[0,l,0],eu:o,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function ht(n,e,t=Ct(n)){return e.face===Da?eu(n,e):e.face.startsWith("wall:")?Mn(n,e.face.split(":")[1]).find(o=>o.key===e.face)??null:t.find(o=>o.key===e.face)??null}function $r(n){return n.floors.filter(t=>t.rooms.some(o=>o.points.length>=3)).sort((t,o)=>dn(o)-dn(t))[0]??null}function Ct(n){let e=n.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(_=>{let b=Ra(n,_,_.overhang??e.overhang),k=_.points?.length?yr(_,_.shape==="parapet"?0:Math.max(0,Math.min(b.a,b.b,b.u0,b.u1))):void 0;return tu(_,b).map(z=>k?{...z,footprint:k}:z)});let t=$r(n);if(!t)return[];let o=t.rooms.flatMap(_=>_.points.map(b=>b[0])),i=t.rooms.flatMap(_=>_.points.map(b=>b[1])),r=n.settings.wall_exterior+e.overhang,s=Math.min(...o)-r,a=Math.max(...o)+r,l=Math.min(...i)-r,d=Math.max(...i)+r,c=dn(t);if(e.type==="flat")return[Ia("main",null,s,l,a,d,c+Fa)];let u=a-s>=d-l,p=e.ridge==="short"?!u:u,f=(p?d-l:a-s)/2,g=f*Math.tan(e.pitch*lo),m=(_,b,k)=>p?[_,c+k,(l+d)/2+b]:[(s+a)/2+b,c+k,_],[h,v]=p?[s,a]:[l,d];return[-1,1].map(_=>ao(`main:${_<0?"a":"b"}`,null,_<0?"a":"b",m(h,_*f,0),m(v,_*f,0),m(h,0,g),e.pitch,()=>[0,v-h]))}function tu(n,e){let t=xn(n),o=Sn(n),i=(m,h,v)=>{let[_,b]=t.at(m,h);return[_,v,b]},r=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=l-a;if(n.shape==="flat"||n.shape==="parapet"){let m=t.at(a,-r),h=t.at(l,t.w+s);return[Ia(n.id,n.id,Math.min(m[0],h[0]),Math.min(m[1],h[1]),Math.max(m[0],h[0]),Math.max(m[1],h[1]),n.eave_a+Fa)]}if(n.shape==="pent")return[ao(`${n.id}:a`,n.id,"a",i(a,-r,o.y(-r)),i(l,-r,o.y(-r)),i(a,t.w+s,o.y(t.w+s)),n.pitch_a,()=>[0,d])];let c=n.shape==="hip"||n.shape==="pyramid",u=n.shape==="pyramid"?(t.u1-t.u0)/2:c?Math.min((t.u1-t.u0)/2,Math.min(o.vr,t.w-o.vr)||t.w/2):0,p=c?t.u0+u-a:0,f=c?l-(t.u1-u):0,g=[];if(o.vr>.3){let m=Math.hypot(o.vr+r,o.rh-o.y(-r));g.push(ao(`${n.id}:a`,n.id,"a",i(a,-r,o.y(-r)),i(l,-r,o.y(-r)),i(a,o.vr,o.rh),n.pitch_a,h=>[p*(h/m),d-f*(h/m)]))}if(t.w-o.vr>.3){let m=Math.hypot(t.w+s-o.vr,o.rh-o.y(t.w+s));g.push(ao(`${n.id}:b`,n.id,"b",i(l,t.w+s,o.y(t.w+s)),i(a,t.w+s,o.y(t.w+s)),i(l,o.vr,o.rh),n.pitch_b,h=>[f*(h/m),d-p*(h/m)]))}if(c){let m=o.y(-r),h=o.y(t.w+s),v=[[`${n.id}:c`,"c",i(a,t.w+s,h),i(a,-r,m),i(t.u0+u,o.vr,o.rh)],[`${n.id}:d`,"d",i(l,-r,m),i(l,t.w+s,h),i(t.u1-u,o.vr,o.rh)]];for(let[_,b,k,z,E]of v){let T=nu(_,n.id,b,k,z,E);T&&g.push(T)}}return g}function nu(n,e,t,o,i,r){let s=$n(ut(i,o));if(s<.3)return null;let a=Je(ut(i,o)),l=ut(r,o),d=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],c=[l[0]-a[0]*d,l[1]-a[1]*d,l[2]-a[2]*d],u=$n(c);if(u<.3)return null;let p=Je(c),f=Je(Ca(a,p));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let g=Je([-p[0],0,-p[2]]),m=Math.atan2(p[1],Math.hypot(p[0],p[2]))/lo;return{key:n,section:e,side:t,flat:!1,o,eu:a,es:p,n:f,lu:s,ls:u,pitch:m,span:v=>{let _=Math.min(1,Math.max(0,v/u));return[d*_,s-(s-d)*_]},facing:[g[0],g[2]]}}function ao(n,e,t,o,i,r,s,a){let l=Je(ut(i,o)),d=Je(ut(r,o)),c=Je(Ca(l,d));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let u=Je([-d[0],0,-d[2]]);return{key:n,section:e,side:t,flat:!1,o,eu:l,es:d,n:c,lu:$n(ut(i,o)),ls:$n(ut(r,o)),pitch:s,span:a,facing:[u[0],u[2]]}}function Ia(n,e,t,o,i,r,s){let a=i-t>=r-o,l=a?i-t:r-o,d=a?r-o:i-t;return{key:`${n}:top`,section:e,side:"top",flat:!0,o:[t,s,o],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:d,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Mr(n){let e=n.module_w||Yd,t=n.module_h||Jd;return n.portrait===!1?[t,e]:[e,t]}function Ha(n){return n.layout?.length?n.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,n.rows)},()=>Math.max(1,n.cols))}function Pr(n,e){return n.flat?Math.min(45,Math.max(0,e.tilt??15))*lo:n.wall?Math.min(90,Math.max(0,e.tilt??0))*lo:0}function pt(n,e){let[t,o]=Mr(e),i=Ha(e),r=Math.max(1,...i),a=(i.length-1)*Wa(n,e)+o*Math.cos(Pr(n,e));return[r*t+(r-1)*co,a]}function Wa(n,e){let[,t]=Mr(e),o=Pr(n,e);return n.wall?t*Math.cos(o)+co:n.flat?t*Math.cos(o)+Math.max(.3,2*t*Math.sin(o)):t+co}function ou(n,e,t=!1){let[o,i]=Mr(e),r=[],s=Pr(n,e),a=i*Math.cos(s),l=Wa(n,e),d=Ha(e),c=Math.max(1,...d),u=new Set(e.skip??[]),p=!!n.wall&&o>n.lu+1e-6,f=(m,h,v)=>[n.o[0]+n.eu[0]*m+n.es[0]*h+n.n[0]*v,n.o[1]+n.eu[1]*m+n.es[1]*h+n.n[1]*v,n.o[2]+n.eu[2]*m+n.es[2]*h+n.n[2]*v],g=(m,h)=>{if(n.unbounded)return!0;if(h<-1e-6||h>n.ls+1e-6)return!1;let[v,_]=n.span(h);return m>=v-1e-6&&m<=_+1e-6};return d.forEach((m,h)=>{let v=e.align==="right"?c-m:e.align==="center"?(c-m)/2:0;for(let _=0;_<m;_++){let b=`${h}:${_}`,k=u.has(b);if(k&&!t)continue;let z=e.u+(_+v)*(o+co),E=e.v+h*l,T=z+o,y=E+(n.flat||n.wall?a:i);if(p){if(!(g((z+T)/2,E)&&g((z+T)/2,y)))continue}else if(![[z,E],[T,E],[T,y],[z,y]].every(([O,C])=>g(O,C)))continue;if(n.footprint&&!vr(n.footprint,[[z,E],[T,E],[T,y],[z,y]].map(([O,C])=>{let B=f(O,C,0);return[B[0],B[2]]})))continue;if(n.wall&&s>.001){let O=dt+i*Math.sin(s),[C,B]=e.flip?[O,dt]:[dt,O],ne=[f(z,E,C),f(T,E,C),f(T,y,B),f(z,y,B)],Q=e.flip?E:y,te=[z+.05,T-.05].map(ce=>[f(ce,Q,0),f(ce,Q,O)]);r.push({corners:ne,posts:te,cell:b,skipped:k});continue}if(!n.flat){r.push({corners:[f(z,E,dt),f(T,E,dt),f(T,y,dt),f(z,y,dt)],posts:[],cell:b,skipped:k});continue}let x=.15,$=x+i*Math.sin(s),[M,F]=e.flip?[y,E]:[E,y],N=[f(z,M,x),f(T,M,x),f(T,F,$),f(z,F,$)];r.push({corners:N,posts:[z+.05,T-.05].flatMap(O=>[[f(O,M,0),f(O,M,x)],[f(O,F,0),f(O,F,$)]]),cell:b,skipped:k})}}),r}function ut(n,e){return[n[0]-e[0],n[1]-e[1],n[2]-e[2]]}function $n(n){return Math.hypot(n[0],n[1],n[2])}function Je(n){let e=$n(n)||1;return[n[0]/e,n[1]/e,n[2]/e]}function Ca(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}var ru=.78,iu=1.18;function su(n){return{id:n.id,face:n.face,u:n.u,v:n.v,rows:1,cols:1,portrait:!0,module_w:n.w||ru,module_h:n.h||iu}}function au(n,e){if(e.points){if(!kr(e.points)||Sr(e).some(([r,s])=>!cu(n,r,s)))return null;let i=Sr(e).map(([r,s])=>n.o.map((a,l)=>a+n.eu[l]*r+n.es[l]*s+n.n[l]*.02));return n.footprint&&!vr(n.footprint,i.map(r=>[r[0]-n.n[0]*.02,r[2]-n.n[2]*.02]))?null:i}let t=ou(n,su(e))[0];if(!t)return null;let o=i=>[i[0]-n.n[0]*.05,i[1]-n.n[1]*.05,i[2]-n.n[2]*.05];return[o(t.corners[0]),o(t.corners[1]),o(t.corners[2]),o(t.corners[3])]}function lu(n,e,t){let o=e?au(e,t):null;if(!o)return null;let i=xr(t),r=t.points?vn(i).sort((c,u)=>Math.abs(Ve(u.map(p=>i[p])))-Math.abs(Ve(c.map(p=>i[p]))))[0]:null,s=r?r.map(c=>o[c]):o,a=s.reduce((c,u)=>c+u[0],0)/s.length,l=s.reduce((c,u)=>c+u[1],0)/s.length,d=s.reduce((c,u)=>c+u[2],0)/s.length;for(let c of[...n.floors].sort((u,p)=>p.elevation-u.elevation)){if(c.elevation>l)continue;let u=c.rooms.find(p=>G([a,d],p.points));if(u)return{floor:c,roomId:u.id,corners:o}}return null}function La(n,e){let t=n.settings.roof?.windows??[];if(!t.length)return[];let o=new Map(Ct(n).map(i=>[i.key,i]));return t.filter(i=>lu(n,o.get(i.face),i)?.roomId===e)}function Oa(n,e){let[t,o]=pt(n,e);return[n.o[0]+n.eu[0]*(e.u+t/2)+n.es[0]*(e.v+o/2),n.o[2]+n.eu[2]*(e.u+t/2)+n.es[2]*(e.v+o/2)]}function cu(n,e,t){if(n.unbounded)return!0;if(t<0||t>n.ls)return!1;let[o,i]=n.span(t);return e<o||e>i?!1:!n.footprint||Wt(n.footprint,[n.o[0]+n.eu[0]*e+n.es[0]*t,n.o[2]+n.eu[2]*e+n.es[2]*t])}var De=we`
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
`,Qe=we`
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
  /* a colour picker shows its colour as a full swatch, not a line inside the text field's padding */
  .fp3d-field input[type="color"] {
    padding: 3px;
    height: 36px;
    width: 100%;
    cursor: pointer;
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
`;var du=4,uu=3e3,hu=8,pu=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],Lt=n=>w`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${oo(n)} />
  </svg>`,uo={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},zr=n=>w`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${n} /></svg>`,Er=class extends me{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},readOnly:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},uu)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return A(this.hass,e,t)}call(e,t,o){this.readOnly||this.hass.callService(e,t,o)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return Z(this.hass,e,this.areaName)}nameButton(e){return w`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&Se(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,o){let i=()=>{this.readOnly||this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||o()};return w`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${K(e)}
      @click=${i}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return S;let t=le(this.hass,e.area_id),o=this.memo,{shown:i,more:r}=o&&o.entities===this.hass.entities&&o.floor===this.floor&&o.building===this.building&&o.room===e?o:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?ra(this.hass,this.floor,e,this.building?La(this.building,e.id):[]):{shown:t,more:[]}},s=cr(this.hass,r).map(k=>k.primary),a=s.length,l=this._showAll?[...i,...s]:i,d=k=>l.filter(z=>k.includes(I(z))).map(z=>this.hass.states[z]),c=d(["light"]),u=d(["cover"]),p=d(["climate"]),f=d(["media"]),g=d(["switch","fan","lock"]),m=d(["sensor","binary"]),h=d(["camera"]);this.hasCameras=h.length>0;let v=d(["scene","script"]),_=this.facts(p),b=c.filter(k=>k.state==="on");return w`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${_.length?w`<p class="fp3d-rp-facts">${_.join(" \xB7 ")}</p>`:S}
          ${this.readOnly?w`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:S}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?S:w`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:w`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${c.length?this.section("panel_lights",c.map(k=>this.lightRow(k)),w`${b.length<c.length?w`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:c.filter(k=>!K(k)).map(k=>k.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:S}${b.length?w`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:b.map(k=>k.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:S}`):S}
        ${u.length?this.section("panel_covers",u.map(k=>this.coverRow(k)),u.length>1?w`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:u.filter(k=>!K(k)).map(k=>k.entity_id)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:u.filter(k=>!K(k)).map(k=>k.entity_id)})}>
                      ${this.t("panel_all_close")}
                    </button>`:S):S}
        ${p.length?this.section("panel_climate",p.map(k=>this.climateRow(k))):S}
        ${f.length?this.section("panel_media",f.map(k=>this.mediaRow(k))):S}
        ${g.length?this.section("panel_switches",g.map(k=>this.switchRow(k))):S}
        ${h.length?this.section("panel_cameras",h.map(k=>this.cameraTile(k))):S}
        ${m.length?this.section("panel_sensors",m.map(k=>this.sensorRow(k))):S}
        ${v.length?this.section("panel_scenes",[w`<div class="fp3d-rp-scenes">
                  ${v.map(k=>w`<button
                      class="fp3d-btn"
                      ?disabled=${K(k)}
                      @click=${()=>this.call(I(k.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:k.entity_id})}
                    >
                      ${this.name(k.entity_id)}
                    </button>`)}
                </div>`]):S}
        ${a?w`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:S}
      </div>
    </section>`}facts(e){let t=[],o=this.room,i=(l,d)=>{let c=je(this.hass,this.floor,o,l);if(c===null)return null;if(l==="temperature")return`${J(this.hass,Et(this.hass,c),1)} ${Ee(this.hass)}`;let u=ir(this.hass,this.floor,o,l)[0],p=this.hass.states[u]?.attributes.unit_of_measurement??d;return`${J(this.hass,c,1)} ${p}`},r=e.find(l=>typeof l.attributes.current_temperature=="number"),s=i("temperature","\xB0C");s?t.push(s):r&&o.climate?.temperature!=="none"&&t.push(`${J(this.hass,r.attributes.current_temperature,1)} ${Ee(this.hass)}`);let a=i("humidity","%");return a&&t.push(a),t}section(e,t,o=S){return w`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${o}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,o=e.state==="on",i=t.supported_color_modes??[],r=i.some(p=>p!=="onoff"),s=i.includes("color_temp"),a=i.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,d=t.min_color_temp_kelvin??2200,c=t.max_color_temp_kelvin??6500,u=e.entity_id;return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${o?"fp3d-rp-on":""}">${Lt("light")}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,o,()=>this.call("light","toggle",{entity_id:u}))}
      ${o&&r?w`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(p.target.value)})}
          /></label>`:S}
      ${o&&s?w`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${d}
              max=${c}
              step="50"
              .value=${String(t.color_temp_kelvin??d)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:S}
      ${o&&a?w`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${pu.map(p=>w`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:p})}
              ></button>`)}
          </div>`:S}
    </div>`}coverRow(e){let t=e.attributes,o=t.supported_features??0,i=e.entity_id,r=K(e);return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${Lt("cover")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(i)&&this.call("cover","open_cover",{entity_id:i})}>${this.t("cover_open")}</button>
        ${o&hu?w`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","stop_cover",{entity_id:i})}>${this.t("cover_stop")}</button>`:S}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(i)&&this.call("cover","close_cover",{entity_id:i})}>${this.t("cover_close")}</button>
      </div>
      ${o&du&&typeof t.current_position=="number"?w`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:i,position:Number(s.target.value)})}
          /></label>`:S}
      ${o&128&&typeof t.current_tilt_position=="number"?w`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:i,tilt_position:Number(s.target.value)})}
          /></label>`:o&48?w`<div class="fp3d-rp-buttons">
              ${o&16?w`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_open")}</button>`:S}
              ${o&32?w`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_close")}</button>`:S}
            </div>`:S}
    </div>`}climateRow(e){let t=e.attributes,o=e.entity_id,i=typeof t.temperature=="number"?t.temperature:null,r=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],d=c=>this.call("climate","set_temperature",{entity_id:o,temperature:Math.min(a,Math.max(s,Math.round(c/r)*r))});return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${Lt("climate")}</span>
      ${this.nameButton(o)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${i!==null?w`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>d(i-r)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${J(this.hass,i,1)} ${Ee(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>d(i+r)}>+</button>
          </div>`:S}
      ${l.length>1?w`<div class="fp3d-rp-chips">
            ${l.map(c=>w`<button
                class="fp3d-chip"
                aria-pressed=${e.state===c}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:o,hvac_mode:c})}
              >
                ${this.stateLabel(c)}
              </button>`)}
          </div>`:S}
    </div>`}stateOf(e,t=ge(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let o=I(e.entity_id);return e.state==="unknown"&&o!=="sensor"&&o!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,o=this.t(t);return o===t?e:o}mediaRow(e){let t=e.attributes,o=e.entity_id,i=K(e)||e.state==="off",r=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${Lt("media")}</span>
      ${this.nameButton(o)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${r?w`<p class="fp3d-rp-media fp3d-rp-wide">${r}</p>`:S}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:o})}>
          ${zr(uo.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${K(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:o})}>
          ${zr(e.state==="playing"?uo.pause:uo.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:o})}>
          ${zr(uo.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?w`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:o,volume_level:Number(s.target.value)/100})}
          /></label>`:S}
    </div>`}switchRow(e){let t=e.entity_id,o=I(t),i=t.slice(0,t.indexOf(".")),r=o==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>o==="lock"?this.call("lock",r?"lock":"unlock",{entity_id:t}):this.call(i,"toggle",{entity_id:t});return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${r?"fp3d-rp-on":""}">${Lt(o)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,r,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,o=t&&!K(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,i=this.floor?.placements.some(r=>r.entity_id===e.entity_id);return w`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&Se(this,e.entity_id)}>
        ${o?w`<img src=${o} alt=${this.name(e.entity_id)} loading="lazy" />`:w`<span class="fp3d-rp-note">${ge(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${i?w`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${H("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:S}
    </div>`}sensorRow(e){let t=I(e.entity_id),o=t==="binary"&&e.state==="on";return w`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${o?"fp3d-rp-on":""}">${Lt(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[De,Qe,we`
      :host {
        display: block;
      }
      .fp3d-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        box-shadow: var(--fp3d-shadow);
        overflow: hidden;
      }
      /* time travel: the controls show the past and take no touches (the list still scrolls) */
      .fp3d-rp-ro .fp3d-rp-body :is(button, input, select) {
        pointer-events: none;
      }
      .fp3d-rp-ro-note {
        color: #ffb020;
      }
      .fp3d-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      h2 {
        margin: 0;
        font: 700 21px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-rp-facts {
        margin: 2px 0 0;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      @media (pointer: coarse) {
        .fp3d-rp-close {
          width: 40px;
          height: 40px;
        }
        .fp3d-rp-swatch {
          width: 36px;
          height: 36px;
        }
        .fp3d-rp-small {
          min-height: 36px;
        }
      }
      .fp3d-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.06);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .fp3d-rp-note {
        color: var(--fp3d-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .fp3d-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-row:last-child {
        border-bottom: none;
      }
      .fp3d-rp-row > :nth-child(n + 5),
      .fp3d-rp-row > .fp3d-rp-wide {
        grid-column: 2 / -1;
      }
      .fp3d-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--fp3d-muted);
        background: rgba(91, 124, 255, 0.12);
      }
      .fp3d-rp-on {
        color: #2a1a00;
        background: var(--fp3d-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .fp3d-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--fp3d-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rp-state {
        font-size: 12.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-rp-row > .fp3d-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .fp3d-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      .fp3d-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .fp3d-switch[aria-checked="true"] {
        background: var(--fp3d-warm);
      }
      .fp3d-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .fp3d-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .fp3d-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-slider input {
        width: 100%;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-rp-ct input {
        accent-color: var(--fp3d-warm);
      }
      .fp3d-rp-swatches,
      .fp3d-rp-buttons,
      .fp3d-rp-chips,
      .fp3d-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .fp3d-rp-camera {
        position: relative;
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin: 6px 0;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        overflow: hidden;
        background: #05080f;
        cursor: pointer;
      }
      .fp3d-rp-camera img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fp3d-rp-camera-wrap {
        position: relative;
      }
      .fp3d-rp-look {
        position: absolute;
        right: 8px;
        bottom: 12px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        background: rgba(7, 11, 20, 0.8);
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-rp-camera-name {
        position: absolute;
        left: 8px;
        bottom: 6px;
        padding: 2px 8px;
        border-radius: 8px;
        background: rgba(7, 11, 20, 0.75);
        color: var(--fp3d-text);
        font-size: 12px;
        font-weight: 600;
      }
      .fp3d-rp-more {
        justify-self: start;
      }
      .fp3d-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .fp3d-rp-stepper small {
        color: var(--fp3d-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .fp3d-rp-stepper .fp3d-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .fp3d-rp-chips .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .fp3d-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",Er);var Ba=n=>{let e=typeof n=="number"?n:typeof n=="string"&&n.trim()?Number(n):NaN;return Number.isFinite(e)?Math.min(1,Math.max(0,e/100)):null};function Va(n,e){let t=l=>l&&l!=="none"?l:null,o=Be(n,{cover:null,contact:t(e.contact),tilt:t(e.tilt)},"window"),i=t(e.window)?n.states[e.window]:void 0,r=o.open;i&&!K(i)&&(r=Ba(i.attributes.current_position)??(["open","opening"].includes(i.state)?1:0));let s=t(e.cover)?n.states[e.cover]:void 0,a=0;if(s&&!K(s)){let l=Ba(s.attributes.current_position)??(s.state==="open"?1:s.state==="closed"?0:["opening","closing"].includes(s.state)?.5:null),d=s.attributes.device_class==="awning"||!s.attributes.device_class&&e.cover_style==="awning";l!==null&&(a=d?l:1-l)}return{open:r,tilt:o.tilt,cover:a}}var fu={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function Ot(n,e){return e&&n.states[e]?e:Object.keys(n.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function Ar(n,e){let t=e?n.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;if(t.entity_id.startsWith("binary_sensor."))return t.state==="on"?.6:0;let o=Number(t.state);if(!Number.isFinite(o))return null;let r=String(t.attributes.unit_of_measurement??"").startsWith("in")?o*25.4:o;return r<=.1?0:Math.min(1,.3+r/10)}function Na(n,e,t){let o=e?n.states[e]:void 0;if(!o||o.state==="unavailable"||o.state==="unknown")return null;let i=fu[o.state];if(!i)return null;let r=o.attributes,s=i.cloud??0;typeof r.cloud_coverage=="number"&&(s=Math.min(1,Math.max(0,r.cloud_coverage/100)));let a=i.wind??0;if(typeof r.wind_speed=="number"){let d=r.wind_speed_unit==="m/s"?r.wind_speed*3.6:r.wind_speed_unit==="mph"?r.wind_speed*1.609:r.wind_speed;a=Math.max(a,Math.min(1,d/60))}let l=Ar(n,t);return l!==null&&l>0&&(s=Math.max(s,.85)),{entity:o.entity_id,condition:o.state,rain:l??i.rain??0,snow:i.snow??0,fog:i.fog??0,cloud:s,wind:a,lightning:!!i.lightning}}function Ka(n,e){let t=new Set(e??Ss);return{...n,rain:t.has("rain")?n.rain:0,snow:t.has("snow")?n.snow:0,fog:t.has("fog")?n.fog:0,cloud:t.has("clouds")?n.cloud:0,lightning:t.has("lightning")&&n.lightning,sky:t.has("sky")}}var mu=/(pool|schwimm|piscine|piscina|zwembad|basen|bazen)/;function Ga(n,e){let[t,o,i,r]=n==="ph"?[7,7.4,6.8,7.8]:n==="orp"?[650,800,600,850]:[.3,1.5,.1,3];return e>=t&&e<=o?"ok":e>=i&&e<=r?"warn":"bad"}function po(n,e){let t=e??{},o=Object.keys(n.states),i=u=>`${u} ${n.states[u]?.attributes.friendly_name??""}`.toLowerCase().replace(/[\s-]+/g,"_"),r=u=>String(n.states[u]?.attributes.device_class??""),s=u=>String(n.states[u]?.attributes.unit_of_measurement??""),a=o.filter(u=>mu.test(i(u))),l=(u,p)=>u.find(p)??null,d=(u,p)=>{let f=t[u];return f==="none"?null:f??p()},c=u=>u.split(".")[0];return{temperature:d("temperature",()=>l(a,u=>c(u)==="sensor"&&(r(u)==="temperature"||/°[CF]/.test(s(u)))&&/(wasser|water|eau|agua|acqua)/.test(i(u)))??l(a,u=>c(u)==="sensor"&&(r(u)==="temperature"||/°[CF]/.test(s(u))))),heater:d("heater",()=>l(a,u=>c(u)==="climate"||c(u)==="water_heater")??l(a,u=>/^(switch|input_boolean)$/.test(c(u))&&/(w(ae|ä)rmepumpe|heat|heiz|chauff)/.test(i(u)))),pump:d("pump",()=>l(a,u=>/^(switch|fan|input_boolean)$/.test(c(u))&&/(pump|pumpe|filter|pompe|bomba)/.test(i(u)))??l(a,u=>c(u)==="binary_sensor"&&/(pump|pumpe|filter)/.test(i(u)))),light:d("light",()=>l(a,u=>c(u)==="light")),ph:d("ph",()=>{let u=p=>c(p)==="sensor"&&(r(p)==="ph"||s(p).toLowerCase()==="ph"||/(^|[._])ph($|_)/.test(i(p)));return l(a,u)??l(o,u)}),chlorine:d("chlorine",()=>l(a,p=>c(p)==="sensor"&&(/(orp|redox|chlor|chlore|cloro)/.test(i(p))||s(p)==="mV"))??l(o,p=>c(p)==="sensor"&&/(orp|redox|chlor)/.test(i(p)))),cover:d("cover",()=>l(a,u=>c(u)==="cover"))}}function ho(n){if(!n||K(n))return null;let e=Number(n.state);return n.state!==""&&Number.isFinite(e)?e:null}function Bt(n,e){let t={...n??{}},o=i=>{for(let r of e)for(let s of r.furniture)if(s.type===i&&s.entity&&s.entity!=="none")return s.entity};return t.pump||(t.pump=o("pool_pump")),t.heater||(t.heater=o("pool_heat_pump")),t}function ft(n,e){let t=po(n,e),o=k=>k?n.states[k]:void 0,i=o(t.heater),r=o(t.temperature),s=ho(r),a=String(r?.attributes.unit_of_measurement??"");s===null&&i&&typeof i.attributes.current_temperature=="number"&&(s=i.attributes.current_temperature),a||(a=String(n.config?.unit_system?.temperature??"\xB0C"));let l=null;if(i&&t.heater&&!K(i)){let k=i.attributes,z=t.heater.startsWith("climate.")?"climate":t.heater.startsWith("water_heater.")?"water_heater":"switch",E=z==="switch"?i.state==="on":i.state!=="off",T=String(k.hvac_action??""),y=typeof k.temperature=="number"?k.temperature:null,x=z==="switch"?E:T?T==="heating":E&&y!==null&&s!==null&&s<y-.2;l={id:t.heater,kind:z,on:E,heating:x,target:y,step:typeof k.target_temp_step=="number"?k.target_temp_step:.5,min:typeof k.min_temp=="number"?k.min_temp:10,max:typeof k.max_temp=="number"?k.max_temp:40}}let d=null,c=o(t.pump);if(c&&t.pump&&!K(c)){let k=t.pump.startsWith("sensor.")?ho(c):null,z=String(c.attributes.unit_of_measurement??"")==="kW",E=k===null?null:z?k*1e3:k;d={id:t.pump,on:E!==null?E>20:c.state==="on",watts:E,switchable:/^(switch|fan|input_boolean)\./.test(t.pump)}}let u=null,p=o(t.light);if(p&&t.light&&!K(p)){let k=t.light.startsWith("light.")?qe(p):p.state==="on"?{color:[.3,.75,1],level:1}:null;u={id:t.light,on:!!k,color:k?.color??[.3,.75,1],level:k?.level??0}}let f=ho(o(t.ph)),g=o(t.chlorine),m=ho(g),h=String(g?.attributes.unit_of_measurement??""),v=h==="mV"||m!==null&&m>50,_=null,b=o(t.cover);if(b&&t.cover&&!K(b)){let k=b.attributes.current_position,z=typeof k=="number"?1-Math.max(0,Math.min(100,k))/100:b.state==="closed"?1:b.state==="open"?0:.5;_={id:t.cover,closed:z,moving:b.state==="opening"||b.state==="closing"}}return{entities:t,temp:s,unit:a||"\xB0C",heater:l,pump:d,light:u,ph:f===null?null:{value:f,range:Ga("ph",f)},chlorine:m===null?null:{value:m,unit:v?"mV":h||"mg/l",orp:v,range:Ga(v?"orp":"chlorine",m)},cover:_}}function mt(n){return n.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}function Ua(n,e){return mt(e).flatMap(({area:t})=>Object.values(po(n,t.pool)).filter(o=>!!o))}function ja(n){if(n.light?.on)return{color:n.light.color,level:.35+.65*n.light.level};if(n.temp===null)return{color:[.1,.45,.8],level:.18};let e=n.unit.includes("F")?(n.temp-32)*5/9:n.temp,t=Math.max(0,Math.min(1,(e-14)/16));return{color:[.08+.1*t,.35+.45*t,.85-.1*t],level:.16+.12*t}}var gu=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),_u=new Set(["power","plug","connectivity","running"]);function fo(n){if(!n||n.state==="unavailable"||n.state==="unknown")return!1;let e=n.entity_id.split(".")[0];if(e==="binary_sensor")return _u.has(String(n.attributes.device_class))?n.state==="off":n.state==="on";if(e==="input_boolean"||e==="switch")return n.state==="on";let t=Number(n.state);if(n.state!==""&&Number.isFinite(t))return n.attributes.unit_of_measurement==="V"&&t<100;let o=String(n.state).toLowerCase().trim();return gu.has(o)||o.startsWith("ob ")}function Xa(n){let e=ue(n);if(!e||e.light)return!1;let t=e.parts.filter(o=>o.color==="plant").length;return t>0&&t+e.parts.filter(o=>o.color==="pot").length>=e.parts.length/2}var ae=["#3a3f47","#3a3f47"],gt=["#23262b","#23262b"],Ae=["#5a3b25","#5a3b25"],oe=["#1f4fa8","#1f4fa8"],et=["#e3b616","#e3b616"],q=["#2f7d3b","#2f7d3b"],qa={default:{rest:ae,bio:Ae,paper:oe,plastic:et,glass:q,garden:q,recycling:et,other:ae},DE:{rest:gt,bio:Ae,paper:oe,plastic:et,glass:q,garden:q,recycling:et},AT:{rest:ae,bio:Ae,paper:[ae[0],"#c0262d"],plastic:et,glass:q,garden:q},CH:{rest:["#d8d8d8","#d8d8d8"],bio:q,paper:oe,plastic:ae,glass:q,garden:q},NL:{rest:ae,bio:q,paper:oe,plastic:["#3a3f47","#e57a1f"],glass:q,garden:q},BE:{rest:ae,bio:q,paper:oe,plastic:oe,glass:q,garden:q},GB:{rest:gt,bio:["#3a3f47","#5a3b25"],paper:oe,plastic:oe,glass:gt,garden:Ae,recycling:oe},US:{rest:gt,bio:q,paper:oe,plastic:oe,glass:oe,garden:q,recycling:oe},CA:{rest:gt,bio:q,paper:oe,plastic:oe,glass:oe,garden:q,recycling:oe},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:ae,bio:Ae,paper:[ae[0],"#e3b616"],plastic:[ae[0],"#e3b616"],recycling:[ae[0],"#e3b616"],glass:q,garden:q},IT:{rest:ae,bio:Ae,paper:oe,plastic:et,glass:q,garden:q},ES:{rest:ae,bio:Ae,paper:oe,plastic:et,glass:q,garden:q},PT:{rest:ae,bio:Ae,paper:oe,plastic:et,glass:q,garden:q},DK:{rest:gt,bio:q,paper:oe,plastic:ae,glass:q,garden:q},SE:{rest:gt,bio:Ae,paper:oe,plastic:ae,glass:q,garden:q},NO:{rest:ae,bio:Ae,paper:oe,plastic:ae,glass:q,garden:q},FI:{rest:ae,bio:Ae,paper:oe,plastic:ae,glass:q,garden:q}},Ya="DE";function Ja(n){Ya=n}function Qa(n){let e=n?.config?.country;if(e)return e.toUpperCase();let t=(n?.language??"").split("-")[1];return t?t.toUpperCase():"DE"}function bu(n,e){return qa[e]?.[n]??qa.default[n]??ae}function el(n,e=Ya){let t=bu(n.bin_kind??"rest",e),o=n.bin_color||t[0];return[o,n.bin_lid||(n.bin_color?o:t[1])]}var wu={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function Tr(n,e,t){let o=` ${n.toLowerCase()} `;return t&&t.trim()?t.toLowerCase().split(/[,;|]/).some(i=>i.trim()&&o.includes(i.trim())):e==="other"?!1:wu[e].some(i=>o.includes(i))}function Fr(n){let e=typeof n=="string"?n:n?.date??n?.dateTime;if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),o=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(o.getTime())?null:new Date(o.getFullYear(),o.getMonth(),o.getDate())}function vu(n){return n.map(e=>({day:Fr(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,t)=>e.day.getTime()-t.day.getTime())}function tl(n){let e=new Set;for(let t of n.flatMap(o=>o.furniture))t.type==="waste_bin"&&typeof t.bin_source=="string"&&t.bin_source.startsWith("calendar.")&&e.add(t.bin_source);return[...e]}async function Dr(n,e,t=new Date,o=10){let i=new Map,r=n.callApi;if(!r)return i;let s=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=new Date(s.getTime()+o*864e5);return await Promise.all(e.map(async l=>{try{let d=await r.call(n,"GET",`calendars/${l}?start=${encodeURIComponent(s.toISOString())}&end=${encodeURIComponent(a.toISOString())}`);i.set(l,vu(Array.isArray(d)?d:[]))}catch{}})),i}var Pn=n=>new Date(n.getFullYear(),n.getMonth(),n.getDate()),mo=(n,e)=>Math.round((Pn(e).getTime()-Pn(n).getTime())/864e5);function Rr(n,e,t={}){let o=t.from??14,i=t.until??12,r=e.getHours()+e.getMinutes()/60;return n===1&&r>=o||n===0&&r<i}function nl(n,e,t,o=new Date,i=3){let r=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null;if(!r)return[];if(r.startsWith("calendar.")){let a=Pn(o);return(t.get(r)??[]).filter(l=>l.day>=a&&Tr(l.summary,n.bin_kind??"rest",n.bin_match)).slice(0,i)}let s=Ir(n,e,t,o);return s?[{day:s.day,summary:s.summary}]:[]}function Ir(n,e,t,o=new Date,i={}){let r=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null;if(!r)return null;let s=Pn(o);if(r.startsWith("calendar.")){let c=(t.get(r)??[]).find(p=>p.day>=s&&Tr(p.summary,n.bin_kind??"rest",n.bin_match));if(!c)return null;let u=mo(s,c.day);if(u===0&&o.getHours()+o.getMinutes()/60>=(i.until??12)){let p=(t.get(r)??[]).find(f=>f.day>s&&Tr(f.summary,n.bin_kind??"rest",n.bin_match));if(p)return{days:mo(s,p.day),day:p.day,summary:p.summary,glow:Rr(mo(s,p.day),o,i)}}return{days:u,day:c.day,summary:c.summary,glow:Rr(u,o,i)}}let a=e.states[r];if(!a)return null;let l=yu(a,o);if(l===null||l<0)return null;let d=new Date(s.getTime()+l*864e5);return{days:l,day:d,summary:String(a.attributes.friendly_name??""),glow:Rr(l,o,i)}}function yu(n,e=new Date){let t=n.attributes;if(typeof t.daysTo=="number")return t.daysTo;let o=String(n.state).trim();if(/^-?\d+(\.\d+)?$/.test(o))return Math.round(Number(o));let i=Fr(o);if(i)return mo(e,i);let r=o.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(r))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(r))return 1;let s=/(\d+)/.exec(r);return s?Number(s[1]):null}var ku=new Set(["on","open","true","detected","home"]);function Za(n){let e=n?.last_changed?Date.parse(n.last_changed):NaN;return Number.isFinite(e)?e:null}function ol(n,e,t=Date.now()){let o=typeof n.entity=="string"&&n.entity!=="none"?n.entity:null;if(!o)return!1;let i=e.states[o];if(!i||i.state==="unavailable"||i.state==="unknown")return!1;let r=typeof n.mailbox_door=="string"&&n.mailbox_door!=="none"?n.mailbox_door:null;if(!r){let l=Number(i.state);return ku.has(i.state.toLowerCase())||Number.isFinite(l)&&l>0}let s=Za(i),a=Za(e.states[r]);return s===null||t-s>7*864e5?!1:a===null||s>a+1e3}function rl(n){return n.type==="waste_bin"?[n.bin_source??null]:n.type==="mailbox"?[n.entity??null,n.mailbox_door??null]:Su(n)}var il=n=>{let e=n?Number(n.state):NaN;return Number.isFinite(e)?e:null};function sl(n,e){let t=typeof n.moisture=="string"&&n.moisture!=="none"?n.moisture:null,o=t?e.states[t]:void 0;if(!t||!o)return!1;if(t.startsWith("plant.")){let r=o.attributes,s=String(r.problem??"").toLowerCase();return String(r.moisture_status??"").toLowerCase()==="low"||o.state==="problem"&&s.includes("moisture")&&!s.includes("high")}let i=il(o);return i!==null&&i<(n.moisture_min??20)}function al(n,e=Date.now()){if(!n||n.state==="unavailable"||n.state==="unknown")return null;let t=String(n.state).trim(),o=String(n.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(t)){let s=Number(t),a=o==="s"?s/60:o==="h"?s*60:s;return Math.max(0,Math.round(a))}let i=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(t);if(i)return Number(i[1])*60+Number(i[2])+Math.round(Number(i[3]??0)/60);let r=Date.parse(t);return Number.isFinite(r)&&/\d{4}-\d{2}-\d{2}T/.test(t)?Math.max(0,Math.round((r-e)/6e4)):null}var xu=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function Hr(n){if(!n)return!1;let e=String(n.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return xu.has(e)}function ll(n){return n>=60?`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")} h`:`${n} min`}function cl(n,e,t=new Date){let o=typeof n.service=="string"&&n.service!=="none"?n.service:null,i=o?e.states[o]:void 0;if(!o||!i||i.state==="unavailable"||i.state==="unknown")return!1;if(o.startsWith("binary_sensor.")||o.startsWith("input_boolean."))return i.state==="on";let r=il(i);if(r!==null)return r<=(n.service_min??10);let s=Fr(i.state);return!!s&&s.getTime()<=Pn(t).getTime()}var tt=n=>[n.door_left,n.door_right].filter(e=>typeof e=="string"&&e!=="none"),dl=n=>!!n&&(n.state==="on"||n.state==="open");function _o(n,e,t=Date.now()){let o=(n.door_alarm??2)*6e4;for(let i of tt(n)){let r=e.states[i];if(dl(r)&&r?.last_changed&&t-Date.parse(r.last_changed)>=o)return i}return null}function ul(n,e,t=Date.now()){let o=null;for(let i of n)if(!(i.type!=="fridge"&&i.type!=="fridge_smart"))for(let r of tt(i)){let s=e.states[r];if(!dl(s)||!s?.last_changed)continue;let a=Date.parse(s.last_changed)+(i.door_alarm??2)*6e4-t;a>0&&(o===null||a<o)&&(o=a)}return o}var go=class{running=new Map;ended=new Map;update(e,t,o,i=Date.now()){let r=this.running.get(e);if(this.running.set(e,t),t)return this.ended.delete(e),!1;r===!0&&this.ended.set(e,i);let s=this.ended.get(e);return s===void 0?!1:i-s>12*36e5||o(s)?(this.ended.delete(e),!1):!0}};function Su(n){return[n.moisture??null,n.remaining??null,n.service??null]}var $u=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),hl={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function Wr(n,e,t){let o=[];for(let u of e.floors)for(let p of u.rooms){let f=le(n,p.area_id).filter(g=>g.startsWith("binary_sensor.")&&!!hl[String(n.states[g]?.attributes.device_class)]);f.length&&o.push({floorId:u.id,roomId:p.id,sensors:f})}let i=Object.keys(n.states),r=e.settings.rain_warning===!1?null:Ot(n,t??e.settings.weather_entity),s=e.settings.outage_entity&&n.states[e.settings.outage_entity]?e.settings.outage_entity:null,a=H("pool")?mt(e.floors).map(({floor:u,area:p})=>({floorId:u.id,areaId:p.id,ids:Object.values(po(n,p.pool)).filter(f=>!!f)})):[],l=H("household")?e.floors.flatMap(u=>u.furniture.filter(p=>(p.type==="fridge"||p.type==="fridge_smart")&&tt(p).length).map(p=>({floorId:u.id,roomId:u.rooms.find(f=>f.points.length>=3&&G([p.x,p.z],f.points))?.id??null,furnitureId:p.id,ids:tt(p)}))):[],d=e.settings.rain_warning===!1?null:e.settings.rain_entity,c=d&&n.states[d]?d:null;return{rooms:o,alarms:i.filter(u=>u.startsWith("alarm_control_panel.")),weather:r,outage:s,pools:a,rain:c,fridges:l}}function Cr(n){return[...n.rooms.flatMap(e=>e.sensors),...n.alarms,...n.weather?[n.weather]:[],...n.outage?[n.outage]:[],...n.rain?[n.rain]:[],...(n.pools??[]).flatMap(e=>e.ids),...(n.fridges??[]).flatMap(e=>e.ids)]}function pl(n,e,t,o){let i=[];for(let a of t.rooms)for(let l of a.sensors){let d=n.states[l];d?.state==="on"&&i.push({kind:hl[String(d.attributes.device_class)],entity:l,roomId:a.roomId,floorId:a.floorId})}let r=t.rain?Ar(n,t.rain):null;if(r!==null?r>0:!!t.weather&&$u.has(n.states[t.weather]?.state??""))for(let a of e.floors)for(let l of a.openings){if(l.type!=="window"||l.rain_ignore)continue;let d=o.get(l.id);if(!d)continue;let c=Be(n,d,"window");c.open<.5&&c.tilt<.5&&c.open2<.5&&c.tilt2<.5||i.push({kind:"window_rain",entity:d.contact??d.tilt??d.contact2??l.id,roomId:l.room_id,floorId:a.id})}t.outage&&fo(n.states[t.outage])&&i.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null});for(let a of t.pools??[]){let l=e.floors.find(u=>u.id===a.floorId)?.outdoor?.find(u=>u.id===a.areaId);if(!l)continue;let d=ft(n,Bt(l.pool,e.floors));d.ph?.range==="bad"&&d.entities.ph&&i.push({kind:"pool_ph",entity:d.entities.ph,roomId:null,floorId:a.floorId}),d.chlorine?.range==="bad"&&d.entities.chlorine&&i.push({kind:"pool_chlorine",entity:d.entities.chlorine,roomId:null,floorId:a.floorId});let c=d.temp===null?null:d.unit.includes("F")?(d.temp-32)*5/9:d.temp;c!==null&&c<=3&&!d.pump?.on&&i.push({kind:"pool_frost",entity:d.entities.temperature??d.entities.heater??a.areaId,roomId:null,floorId:a.floorId})}for(let a of t.fridges??[]){let l=e.floors.find(c=>c.id===a.floorId)?.furniture.find(c=>c.id===a.furnitureId),d=l?_o(l,n):null;d&&i.push({kind:"fridge_door",entity:d,roomId:a.roomId,floorId:a.floorId})}for(let a of t.alarms){let l=n.states[a]?.state;l==="triggered"?i.push({kind:"alarm",entity:a,roomId:null,floorId:null}):l==="pending"&&i.push({kind:"alarm_pending",entity:a,roomId:null,floorId:null})}return i}function fl(n){switch(n){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"pool_ph":case"pool_chlorine":return[1,.62,.2];case"pool_frost":return[.55,.8,1];case"fridge_door":return[.45,.85,1];default:return[1,.2,.25]}}function Lr(n,e,t){let o=t.roomId?e.floors.flatMap(a=>a.rooms).find(a=>a.id===t.roomId):null,i=n?.states[t.entity],r=t.kind.startsWith("pool_")&&i?`${i.state}${i.attributes.unit_of_measurement?` ${i.attributes.unit_of_measurement}`:""}`:n?Z(n,t.entity):t.entity,s=A(n,`alert_${t.kind}`,{name:r});return o?e.settings.alert_names===!1?`${o.name} \xB7 ${A(n,`alert_short_${t.kind}`)}`:`${o.name} \xB7 ${s}`:s}var Me=.03,bo=n=>n&&n!=="none"?n:null;function Nt(n,e=t=>bo(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let o of n.floors)for(let i of o.furniture){let r=e(i);if(i.type==="meter")t.grid??=r,t.gridExport??=bo(i.export);else if(i.type==="inverter"&&r&&!t.solar.includes(r))t.solar.push(r);else if(i.type==="home_battery"){r&&!t.battery.includes(r)&&t.battery.push(r);let s=bo(i.charge);s&&!t.charge.includes(s)&&t.charge.push(s),(r||s)&&t.batteries.push({power:r,charge:s});let a=bo(i.soc);a&&!t.soc.includes(a)&&t.soc.push(a)}}return t}function Br(n){for(let e of n.floors){let t=e.furniture.find(o=>o.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return n.energy.meter}async function yl(n,e){let t=new Date;t.setHours(0,0,0,0);try{let o=await n.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),i=new Map;for(let r of e)i.set(r,(o?.[r]??[]).reduce((s,a)=>s+(typeof a.change=="number"?a.change:0),0));return i}catch{return null}}var Mu=.07;function ie(n,e=!1){if(!n)return null;let t=Number(n.state);if(!Number.isFinite(t))return null;let o=String(n.attributes.unit_of_measurement??"W"),i=o==="kW"?t*1e3:o==="MW"?t*1e6:t;return e?-i:i}function Pu(n,e){return e.startsWith("sensor.")&&n.states[e]?.attributes.device_class==="power"}function An(n,e){if(Pu(n,e))return e;let t=n.entities?.[e]?.device_id;if(!t)return null;let o=Xs(n,t),i=o?pn(n,e):null;return sr(n,t).find(r=>r!==e&&(!o||i!==null&&pn(n,r)===i))??null}function kl(n,e){let t=e.energy,o=new Set([t.grid,t.solar,t.battery].filter(Boolean)),i=[],r=new Set;for(let s of e.floors)for(let a of s.placements){let l=An(n,a.entity_id);!l||o.has(l)||r.has(l)||(r.add(l),i.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,ie(n.states[l])??0)}))}return i}function xl(n,e,t,o=Nt(e)){let i=e.energy,r=i.grid??o.grid,s=r?ie(n.states[r],i.grid_invert):null;if(!i.grid&&o.gridExport){let m=Math.max(0,ie(n.states[o.gridExport])??0);s=Math.max(0,s??0)-m}let a=i.solar?ie(n.states[i.solar]):null;if(!i.solar&&o.solar.length){let m=o.solar.map(h=>ie(n.states[h])).filter(h=>h!==null);a=m.length?m.reduce((h,v)=>h+v,0):null}let l=i.battery?ie(n.states[i.battery],i.battery_invert):null;if(!i.battery&&o.batteries.length){let m=o.batteries.map(h=>{if(h.charge){let v=h.power?Math.max(0,ie(n.states[h.power])??0):0,_=Math.max(0,ie(n.states[h.charge])??0);return v-_}return h.power?ie(n.states[h.power],i.battery_invert):null}).filter(h=>h!==null);l=m.length?m.reduce((h,v)=>h+v,0):null}let c=(i.battery_soc?[i.battery_soc]:o.soc).map(m=>Number(n.states[m]?.state)).filter(m=>Number.isFinite(m)),u=c.length?c.reduce((m,h)=>m+h,0)/c.length:NaN,p=i.tariff?n.states[i.tariff]:void 0,f=Number(p?.state),g=i.consumption?ie(n.states[i.consumption]):null;return g!==null?g=Math.max(0,g):s!==null||a!==null||l!==null?g=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):t.length&&(g=t.reduce((m,h)=>m+h.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:p&&Number.isFinite(f)?{value:f,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:g}}function bt(n,e){return n.pos.push(e),n.adj.push([]),n.pos.length-1}function _t(n,e,t){let o=Math.hypot(n.pos[e][0]-n.pos[t][0],n.pos[e][1]-n.pos[t][1]);n.adj[e].push({to:t,w:o}),n.adj[t].push({to:e,w:o})}function zu(n,e){let t=n.length,o=n.map((i,r)=>{let s=n[(r+1)%t],a=s[0]-i[0],l=s[1]-i[1],d=Math.hypot(a,l)||1,c=-l/d,u=a/d;return{p:[i[0]+c*e[r],i[1]+u*e[r]],d:[a/d,l/d],n:[c,u]}});return n.map((i,r)=>{let s=o[(r-1+t)%t],a=o[r],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*e[r],i[1]+a.n[1]*e[r]];let d=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*d,s.p[1]+s.d[1]*d]})}function Eu(n){return Fe(n.points)>=0?{pts:n.points,flipped:!1}:{pts:[...n.points].reverse(),flipped:!0}}function Vr(n,e,t){let o={pos:[],adj:[],rings:new Map},{walls:i}=Ht(n.rooms,{exterior:e,interior:t},n.walls??[]);for(let r of n.rooms){if(r.points.length<3)continue;let{pts:s,flipped:a}=Eu(r),l=s.length,d=s.map((p,f)=>{let g=a?(l-2-f+l)%l:f,m=i.some(h=>!h.exterior&&h.sources.some(v=>v.room_id===r.id&&v.edge===g));return Mu+(m?t/2:0)}),c=zu(s,d).map(p=>bt(o,p)),u=c.map((p,f)=>[p,c[(f+1)%l]]);for(let[p,f]of u)_t(o,p,f);o.rings.set(r.id,u)}for(let r of i){if(r.exterior||!r.roomLeft||!r.roomRight)continue;let s=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2],a=wo(o,r.roomLeft,s),l=wo(o,r.roomRight,s);a!==null&&l!==null&&_t(o,a,l)}return o}function wo(n,e,t){let o=n.rings.get(e);if(!o)return null;let i=null;for(let s of o){let a=n.pos[s[0]],l=n.pos[s[1]],d=l[0]-a[0],c=l[1]-a[1],u=d*d+c*c||1,p=Math.min(1,Math.max(0,((t[0]-a[0])*d+(t[1]-a[1])*c)/u)),f=[a[0]+d*p,a[1]+c*p],g=Math.hypot(t[0]-f[0],t[1]-f[1]);(!i||g<i.d)&&(i={seg:s,q:f,d:g})}if(!i)return null;let r=bt(n,i.q);return _t(n,r,i.seg[0]),_t(n,r,i.seg[1]),r}function vo(n,e,t){let o=n.pos[t],i=wo(n,e.id,o);if(i===null)return!1;let r=n.pos[i],s=n.pos[n.adj[i][0].to],a=n.pos[n.adj[i][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,d=[(a[0]-s[0])/l,(a[1]-s[1])/l],c=(o[0]-r[0])*d[0]+(o[1]-r[1])*d[1],u=(o[1]-r[1])*d[0]-(o[0]-r[0])*d[1];if(Math.abs(c)<.01||Math.abs(u)<.01)return _t(n,t,i),!0;let p=[r[0]+d[0]*c,r[1]+d[1]*c],f=[r[0]-d[1]*u,r[1]+d[0]*u],g=bt(n,G(f,e.points)||!G(p,e.points)?f:p);return _t(n,i,g),_t(n,g,t),!0}function En(n,e){let t=n.rooms.filter(r=>r.points.length>=3),o=t.find(r=>G(e,r.points));if(o)return o;let i=null;for(let r of t)for(let s of r.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!i||a<i.d)&&(i={room:r,d:a})}return i?.room??null}function Sl(n,e){let t=n.pos.map(()=>1/0),o=n.pos.map(()=>-1),i=n.pos.map(()=>!1);for(t[e]=0;;){let r=-1;for(let s=0;s<t.length;s++)!i[s]&&t[s]<1/0&&(r<0||t[s]<t[r])&&(r=s);if(r<0)break;i[r]=!0;for(let{to:s,w:a}of n.adj[r])t[r]+a<t[s]-1e-9&&(t[s]=t[r]+a,o[s]=r)}return{dist:t,prev:o}}function ml(n,e){return n.every(t=>e[t].kind==="battery")?"battery":n.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var gl=new WeakMap;function Au(n,e){let t=Br(n),o=n.floors.find(c=>c.id===t.floor_id),i=[],{wall_exterior:r,wall_interior:s}=n.settings,a=new Map,l=new Map;e.forEach((c,u)=>l.set(c.floorId,[...l.get(c.floorId)??[],u]));let d=n.floors.filter(c=>l.has(c.id));for(let c of d){if(c.id===o.id)continue;let u=c.elevation>o.elevation,p=l.get(c.id),f=ml(p,e);i.push({floorId:o.id,a:[t.x,Me,t.z],b:[t.x,u?o.height:-.2,t.z],dist:0,members:p,kind:f});let g=Math.abs(c.elevation-o.elevation);i.push({floorId:c.id,a:[t.x,u?-.2:c.height,t.z],b:[t.x,Me,t.z],dist:g,members:p,kind:f}),a.set(c.id,g+.25)}for(let c of d){let u=Vr(c,r,s),p=En(c,[t.x,t.z]);if(!p)continue;let f=bt(u,[t.x,t.z]);if(!vo(u,p,f))continue;let g=[];for(let b of l.get(c.id)){let k=e[b],z=En(c,[k.x,k.z]);if(!z)continue;let E=bt(u,[k.x,k.z]);vo(u,z,E)&&g.push({node:E,member:b})}let{dist:m,prev:h}=Sl(u,f),v=new Map;for(let b of g)if(Number.isFinite(m[b.node]))for(let k=b.node;h[k]>=0;k=h[k]){let z=h[k],E=`${z}>${k}`,T=v.get(E)??{a:z,b:k,members:[]};T.members.push(b.member),v.set(E,T)}let _=a.get(c.id)??0;for(let{a:b,b:k,members:z}of v.values()){let E=u.pos[b],T=u.pos[k],y=ml(z,e);i.push({floorId:c.id,a:[E[0],Me,E[1]],b:[T[0],Me,T[1]],dist:_+m[b],members:z,kind:y})}}return i}function $l({building:n,consumers:e,summary:t,battery:o,fieldPower:i,devicePower:r}){let s=Br(n);if(!s)return[];let a=n.floors.find($=>$.id===s.floor_id);if(!a)return[];let l=$=>r?.get($),d=Or(n,"inverter"),c=Or(n,"home_battery");!c.length&&o&&c.push({id:"battery",type:"home_battery",floorId:o.floorId,x:o.x,z:o.z,h:1.1,variant:null});let u=$=>{let M=null;for(let F of d)F.floorId===$.floorId&&(!M||Math.hypot(F.x-$.x,F.z-$.z)<Math.hypot(M.x-$.x,M.z-$.z))&&(M=F);return M},p=$=>l($.id)??(c.length===1?t.battery??0:0),f=new Map;for(let $ of c){let M=u($);M&&f.set($.id,M)}let g=e.map($=>({floorId:$.floorId,x:$.x,z:$.z,kind:$.wallbox?"wallbox":"consumer",power:$.power}));for(let $ of c)!f.has($.id)&&t.battery!==null&&g.push({floorId:$.floorId,x:$.x,z:$.z,kind:"battery",power:Math.abs(p($))});let m=`${s.floor_id}:${s.x},${s.z}|${g.map($=>`${$.floorId}:${$.x},${$.z}:${$.kind}`).join(";")}`,h=gl.get(n);h||gl.set(n,h=new Map);let v=h.get(m);v||(v=Au(n,g),h.clear(),h.set(m,v));let _=v.map($=>({floorId:$.floorId,a:$.a,b:$.b,dist:$.dist,power:$.members.reduce((M,F)=>M+g[F].power,0),kind:$.kind})),b=t.grid!==null?Nr(n):null,k=n.settings.roof.cables??[],z=$=>k.find(M=>M.id===$),E=($,M)=>$.map(F=>({...F,key:M}));if(b){let $=t.grid>=0,M=z("grid"),F=M?zn(n,M,[b.end[0],a.elevation+Math.max(Me,b.height),b.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...b.height>.05?[[b.end[0],b.height,b.end[1]]]:[],[b.end[0],Me,b.end[1]],[b.wall[0],Me,b.wall[1]],[s.x,Me,s.z]],N=M?Vt(n,$?F:[...F].reverse(),Math.abs(t.grid),$?"grid":"export",a):Pl(a.id,$?F:[...F].reverse(),Math.abs(t.grid),$?"grid":"export",0);_.push(...E(N,"grid"))}if(t.battery!==null&&t.battery>0)for(let $ of _)$.kind==="battery"&&([$.a,$.b]=[$.b,$.a]);let T=n.settings.roof.solar??[],y=n.settings.roof.strings??[],x=new Map;if(i&&T.length){let $=[...Ct(n),...Mn(n)];for(let M of T){let F=i.get(M.id)??0,N=M.string?y.find(he=>he.id===M.string)?.inverter:null,O=N?c.find(he=>he.id===N)??null:null,C=N&&!O?d.find(he=>he.id===N)??null:null;if(O){let he=f.get(O.id);he&&x.set(he.id,(x.get(he.id)??0)+F);let Pe=O.variant==="wall"?.5+O.h:.9,L=z(`solar:${M.id}`),ee=L?wl(n,M):null,be=n.floors.find(Ie=>Ie.id===O.floorId);L&&ee&&be?_.push(...E(Vt(n,zn(n,L,ee,[O.x,be.elevation+Pe,O.z]),F,"solar",be),`solar:${M.id}`)):_.push(...E(vl(n,M,F,O,Pe),`solar:${M.id}`));continue}if(!C&&d.length){let he=ht(n,M,$),Pe=he?Oa(he,M):[M.u,M.v];C=d.reduce((L,ee)=>!L||Math.hypot(ee.x-Pe[0],ee.z-Pe[1])<Math.hypot(L.x-Pe[0],L.z-Pe[1])?ee:L,null)}C&&x.set(C.id,(x.get(C.id)??0)+F);let B=C??{floorId:s.floor_id,x:s.x,z:s.z},ne=C?1.1+C.h:1.5,Q=z(`solar:${M.id}`),te=Q?wl(n,M):null,ce=n.floors.find(he=>he.id===B.floorId);Q&&te&&ce?_.push(...E(Vt(n,zn(n,Q,te,[B.x,ce.elevation+ne,B.z]),F,"solar",ce),`solar:${M.id}`)):_.push(...E(vl(n,M,F,B,ne),`solar:${M.id}`))}}else t.solar!==null&&!d.length&&_.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,Me,s.z+.08],dist:0,power:t.solar,kind:"solar"});for(let $ of d){let M=1.1+$.h,F=c.filter(C=>f.get(C.id)===$),N=l($.id);if(N===void 0){N=x.get($.id)??(d.length===1?t.solar??0:0);for(let C of F)N+=p(C)}let O=n.floors.find(C=>C.id===$.floorId);if(t.solar!==null||t.battery!==null){let C=z(`inv:${$.id}`),B=C&&O?Vt(n,zn(n,C,[$.x,O.elevation+M,$.z],[s.x,a.elevation+1.5,s.z]),Math.max(0,N),"inverter",O):bl(n,$,M,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,N),"inverter",0);_.push(...E(B,`inv:${$.id}`))}for(let C of F){let B=p(C);if(t.battery===null&&l(C.id)===void 0)continue;let ne=C.variant==="wall"?.5+C.h:.9,Q=z(`bat:${C.id}`),te=Q&&O?Vt(n,zn(n,Q,[$.x,O.elevation+M-.1,$.z],[C.x,O.elevation+ne,C.z]),Math.abs(B),"battery",O):bl(n,$,M-.1,C,ne,Math.abs(B),"battery",0);_.push(...E(B<=0?te:te.map(ce=>({...ce,a:ce.b,b:ce.a})).reverse(),`bat:${C.id}`))}}return _}function Nr(n){let e=Br(n),t=e?n.floors.find(f=>f.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:o,wall_interior:i}=n.settings,{walls:r}=Ht(t.rooms,{exterior:o,interior:i},t.walls??[]),s=Or(n,"grid_point")[0],a=r.filter(f=>f.exterior);if(s){let f=null;for(let h of a){let v=h.b[0]-h.a[0],_=h.b[1]-h.a[1],b=s.x-e.x,k=s.z-e.z,z=b*_-k*v;if(Math.abs(z)<1e-9)continue;let E=((h.a[0]-e.x)*_-(h.a[1]-e.z)*v)/z,T=((h.a[0]-e.x)*k-(h.a[1]-e.z)*b)/z;if(E<=0||E>1||T<0||T>1||f&&E>=f.t)continue;let y=Math.hypot(v,_)||1;f={q:[e.x+b*E,e.z+k*E],out:[_/y,-v/y],t:E}}let g=f?[f.q[0]+f.out[0]*(o/2+.05),f.q[1]+f.out[1]*(o/2+.05)]:[e.x,e.z],m=n.floors.flatMap(h=>h.furniture).find(h=>h.id===s.id)?.mount_y??0;return{floorId:t.id,wall:g,end:[s.x,s.z],height:Math.max(0,m)}}let l=null;for(let f of a){let g=f.b[0]-f.a[0],m=f.b[1]-f.a[1],h=g*g+m*m||1,v=Math.min(1,Math.max(0,((e.x-f.a[0])*g+(e.z-f.a[1])*m)/h)),_=[f.a[0]+g*v,f.a[1]+m*v],b=Math.hypot(e.x-_[0],e.z-_[1]),k=Math.sqrt(h);(!l||b<l.d)&&(l={q:_,out:[m/k,-g/k],d:b})}if(!l)return null;let{q:d,out:c}=l,u=0;for(let f of n.floors)for(let g of f.outdoor??[]){let m=g.points.length;for(let h=0;h<m;h++){let v=g.points[h],_=g.points[(h+1)%m],b=_[0]-v[0],k=_[1]-v[1],z=c[0]*k-c[1]*b;if(Math.abs(z)<1e-9)continue;let E=((v[0]-d[0])*k-(v[1]-d[1])*b)/z,T=((v[0]-d[0])*c[1]-(v[1]-d[1])*c[0])/z;E>0&&T>=0&&T<=1&&(u=Math.max(u,Math.min(15,E)))}}let p=u>o+1?u:o+2.5;return{floorId:t.id,wall:[d[0]+c[0]*(o/2+.05),d[1]+c[1]*(o/2+.05)],end:[d[0]+c[0]*p,d[1]+c[1]*p],height:0}}function Or(n,e){let t=[];for(let o of n.floors)for(let i of o.furniture)i.type===e&&t.push({id:i.id,type:i.type,floorId:o.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return t}var _l=new WeakMap;function Ml(n,e,t,o){let i=`${e.id}:${t.join(",")}>${o.join(",")}`,r=_l.get(n);r||_l.set(n,r=new Map);let s=r.get(i);if(s)return s;let{wall_exterior:a,wall_interior:l}=n.settings,d=Vr(e,a,l),c=[t,o],u=En(e,t),p=En(e,o);if(u&&p){let f=bt(d,t),g=bt(d,o);if(vo(d,u,f)&&vo(d,p,g)){let{dist:m,prev:h}=Sl(d,f);if(Number.isFinite(m[g])){c.length=0;for(let v=g;v>=0;v=h[v])c.unshift(d.pos[v])}}}return r.set(i,c),c}function bl(n,e,t,o,i,r,s,a){let l=n.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==o.floorId)return[];let d=Ml(n,l,[e.x,e.z],[o.x,o.z]),c=[[e.x,t,e.z],...d.map(u=>[u[0],Me,u[1]]),[o.x,i,o.z]];return Pl(l.id,c,r,s,a)}function Pl(n,e,t,o,i){let r=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],d=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);d<1e-4||(r.push({floorId:n,a,b:l,dist:i,power:t,kind:o}),i+=d)}return r}function zn(n,e,t,o){let r=(n.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(Me,e.height);return[t,...e.points.map(s=>[s[0],r,s[1]]),o]}function wl(n,e){let t=ht(n,e,[...Ct(n),...Mn(n)]);if(!t)return null;let[o,i]=pt(t,e),r=e.u+o/2,s=t.unbounded?e.v+i/2:e.v;return[t.o[0]+t.eu[0]*r+t.es[0]*s,t.o[1]+t.eu[1]*r+t.es[1]*s,t.o[2]+t.eu[2]*r+t.es[2]*s]}function Ru(n,e,t){let{wall_exterior:o,wall_interior:i}=n.settings,r=Vr(e,o,i),s=En(e,t),a=s?wo(r,s.id,t):null;return a===null?t:r.pos[a]}function Vt(n,e,t,o,i){let r=[...n.floors].sort((d,c)=>d.elevation-c.elevation),s=d=>{let c=i;for(let u of r)d>=u.elevation-.01&&(c=u);return c},a=[],l=0;for(let d=0;d+1<e.length;d++){let c=e[d],u=e[d+1];if(Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])<1e-4)continue;let f=[];if(Math.abs(u[1]-c[1])>.01){let g=Math.min(c[1],u[1]),m=Math.max(c[1],u[1]);for(let h of r)h.elevation>g+.01&&h.elevation<m-.01&&f.push(h.elevation);u[1]<c[1]&&f.reverse()}for(let g of[...f,u[1]]){let m=(g-c[1])/(u[1]-c[1]||1),h=Math.abs(u[1]-c[1])>.01?[c[0]+(u[0]-c[0])*m,g,c[2]+(u[2]-c[2])*m]:u,v=s((c[1]+h[1])/2),_=Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2]);_>1e-4&&a.push({floorId:v.id,a:[c[0],c[1]-v.elevation,c[2]],b:[h[0],h[1]-v.elevation,h[2]],dist:l,power:t,kind:o}),l+=_,c=h}}return a}function vl(n,e,t,o,i){let r=[...Ct(n),...Mn(n)],s=ht(n,e,r),a=n.floors.find(h=>h.id===o.floorId);if(!s||!a)return[];let[l,d]=pt(s,e),c=(h,v)=>[s.o[0]+s.eu[0]*h+s.es[0]*v,s.o[1]+s.eu[1]*h+s.es[1]*v,s.o[2]+s.eu[2]*h+s.es[2]*v],u=e.u+l/2,p=a.elevation+Me,f=[],g;if(s.unbounded){let h=c(u,e.v+d/2);g=[h[0],p,h[2]],f.push(g)}else if(s.wall){let h=c(u,e.v);g=[h[0],p,h[2]],f.push(h,g)}else{let h=c(u,e.v),v=$r(n)??a,_=Math.max(a.elevation+.5,Math.min(h[1]-.25,v.elevation+v.height-.12));g=[h[0],_,h[2]],f.push(h)}let m=Ru(n,a,[g[0],g[2]]);f.push([m[0],g[1],m[1]]),Math.abs(g[1]-p)>.05&&f.push([m[0],p,m[1]]);for(let h of Ml(n,a,m,[o.x,o.z]).slice(1))f.push([h[0],p,h[1]]);return f.push([o.x,a.elevation+i,o.z]),Vt(n,f,t,"solar",a)}function zl(n,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let o=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),i=new Array(o).fill(0),r=-1;for(let a of Object.values(n))for(let l of a){let d=typeof l.start=="number"?l.start:Date.parse(l.start),c=Math.floor((d-t.getTime())/3e5);c<0||c>=o||typeof l.mean!="number"||(i[c]+=Math.max(0,l.mean),r=Math.max(r,c))}return i.length=Math.max(r+1,o-3,1),{kwh:i.reduce((a,l)=>a+l*5/60/1e3,0),peak:Math.max(0,...i),curve:i}}async function El(n,e){let t=new Date;t.setHours(0,0,0,0);try{return await n.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function Kr(n,e){let o=l=>42-(e>0?l/e*36:0),i=n.map((l,d)=>[d/288*220,o(l)]),r=i.map(([l,d],c)=>`${c?"L":"M"}${l.toFixed(1)} ${d.toFixed(1)}`).join(" "),[s,a]=i[i.length-1];return{line:r,area:`${r} L${s.toFixed(1)} 44 L0 44 Z`,endX:s,endY:a}}function Al(n){return Math.max(1,n.rows*n.cols-(n.skip?.length??0))}var Tu=400;function Rl(n,e){let t=new Map;for(let o of n.settings.roof.solar??[]){let i=Math.min(1,(e.get(o.id)??0)/(Al(o)*(o.wp??Tu)));t.set(o.id,i>.003?Math.pow(i,.6):0)}return t}function Tl(n,e,t){let o=new Map,i=e.settings.roof.solar??[],r=e.settings.roof.strings??[],s=Al,a=[],l=0,d=new Map;for(let p of i){let f=p.entity&&p.entity!=="none"?ie(n.states[p.entity]):null;if(f!==null){o.set(p.id,Math.max(0,f)),l+=Math.max(0,f);continue}let g=p.string?r.find(h=>h.id===p.string):void 0,m=g?.entity&&g.entity!=="none"?ie(n.states[g.entity]):null;if(g&&m!==null){d.set(g.id,[...d.get(g.id)??[],p]);continue}a.push(p)}for(let[p,f]of d){let g=r.find(v=>v.id===p),m=Math.max(0,ie(n.states[g.entity])??0),h=f.reduce((v,_)=>v+s(_),0);for(let v of f)o.set(v.id,m*s(v)/h);l+=m}let c=Math.max(0,(t??0)-l),u=a.reduce((p,f)=>p+s(f),0);for(let p of a)o.set(p.id,u?c*s(p)/u:0);return o}var Re={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function Fl(n,e){if(n==="grid")return Re.import;if(n==="export")return Re.export;if(n==="solar")return Re.solar;if(n==="battery")return Re.battery;if(n==="wallbox")return Re.wallbox;if(n==="inverter")return(e.solar??0)>5?Re.solar:Re.battery;let t=[[Math.max(0,e.grid??0),Re.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),Re.solar],[Math.max(0,e.battery??0),Re.battery]],[o]=t.reduce((i,r)=>r[0]>i[0]?r:i);return o>0?t.find(i=>i[0]===o)[1]:Re.house}var Gr=["neon","blueprint","day"],Rn={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var yo={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Dl(n,e){let t=yo[n].stops;if(e<=t[0][0])return t[0][1];for(let o=1;o<t.length;o++){let[i,r]=t[o],[s,a]=t[o-1];if(e<=i){let l=(e-s)/(i-s);return[a[0]+(r[0]-a[0])*l,a[1]+(r[1]-a[1])*l,a[2]+(r[2]-a[2])*l]}}return t[t.length-1][1]}function Il(n,e,t){let o=new Map;for(let i of e.floors)for(let r of i.rooms){let s=je(n,i,r,t);s!==null&&o.set(r.id,s)}return o}function Hl(n){let e=yo[n].stops,t=e[0][0],o=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([i,r])=>`rgb(${r.map(s=>Math.round(s*255)).join(",")}) ${Math.round((i-t)/(o-t)*100)}%`).join(", ")})`}function _e(n,e){if(!St(e))return A(n,`furn_${e}`);let t=ue(e);return t?ws(t,n?.language??navigator.language):A(n,"pack_missing_item")}var Ur=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function ko(n){return n&&n!=="none"?n:null}function Tn(n,e){if(e.type!=="parking")return null;let t=ko(e.entity);if(t){let r=n.states[t];if(!r||!Ur.has(r.state.toLowerCase()))return null}let o=e.vehicle??null,i=ko(e.type_entity);if(i&&e.types?.length){let r=(n.states[i]?.state??"").trim().toLowerCase();if(r){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===r)??e.types.find(l=>s(l.state)&&r.includes(s(l.state)));a&&(o=a.vehicle)}}return o&&ue(o)?o:null}function jr(n,e){let t=new Map;for(let o of e.floors)for(let i of o.furniture){let r=Tn(n,i);r&&t.set(i.id,r)}return t}function Wl(n){return n.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[ko(t.entity),ko(t.type_entity)])).filter(e=>!!e)}function Cl(n,e){let t=ue(e);if(!t)return null;let o=n.scale??1;return{id:`${n.id}:vehicle`,type:e,x:n.x,z:n.z,rotation:n.rotation,rotation_x:n.rotation_x,rotation_z:n.rotation_z,mount_y:n.mount_y,w:t.size[0]*o,d:t.size[1]*o,h:t.size[2]*o,variant:null,entity:null,power:null}}var Fn=1800*1e3,Fu=new Set(["motion","occupancy","presence"]);function Ll(n,e){return e.startsWith("binary_sensor.")&&Fu.has(String(n.states[e]?.attributes.device_class))}function Dn(n,e){let t=[],o=new Set,i=(r,s,a,l)=>{o.has(r)||(o.add(r),t.push({entity:r,floorId:s,x:a,z:l}))};for(let r of e.floors)for(let s of r.placements)if(Ll(n,s.entity_id))i(s.entity_id,r.id,s.x,s.z);else if(I(s.entity_id)==="camera")for(let a of Xe(n,s.entity_id))i(a,r.id,s.x,s.z);for(let r of e.floors)for(let s of r.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=xe(s.points);for(let d of le(n,s.area_id))Ll(n,d)&&i(d,r.id,a,l)}return t}function Ol(n,e,t,o=Fn){let i=t-o,r=[];for(let[s,a]of Object.entries(n)){let l="";for(let d of a){let c=(d.lc??d.lu)*1e3;d.s==="on"&&l!=="on"&&c>=i&&c<=t&&r.push({entity:s,time:c}),l=d.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=i&&a<=t)||r.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||r.push({entity:s.entity,time:a})}return r.sort((s,a)=>s.time-a.time)}function Bl(n,e,t,o=Fn){let i=new Map(n.map(s=>[s.entity,s])),r=[];for(let s of e){let a=i.get(s.entity);if(!a)continue;let l=r[r.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||r.push({...a,time:s.time,age:Math.min(1,Math.max(0,(t-s.time)/o))})}return r.slice(-40)}function xo(n,e){return new Date(e).toLocaleTimeString(n.language,{hour:"2-digit",minute:"2-digit"})}var Vl='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var So=n=>n.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function qr(n,e){let t=[],o=ct(n,e.floors),i=e.floors.length>1;for(let r of e.floors){let s=(c,u)=>r.rooms.find(p=>p.points.length>=3&&G([c,u],p.points))??null,a=(c,u)=>[s(c,u)?.name,i?r.name:null].filter(Boolean).join(" \xB7 ");for(let c of r.rooms){if(c.points.length<3)continue;let[u,p]=xe(c.points);t.push({kind:"room",name:c.name,where:i?r.name:"",floorId:r.id,roomId:c.id,entity:null,icon:null,x:u,z:p,y:0})}let l=new Set,d=(c,u,p,f)=>{l.has(c)||!n.states[c]||(l.add(c),t.push({kind:"device",name:Z(n,c),where:a(u,p),floorId:r.id,roomId:s(u,p)?.id??null,entity:c,icon:I(c),x:u,z:p,y:f}))};for(let c of r.placements)d(c.entity_id,c.x,c.z,c.y??At(I(c.entity_id)??"sensor",r.height,c.mount));for(let c of r.furniture){let u=o.get(c.id),p=u?.entity??u?.power;p&&d(p,c.x,c.z,Math.min(r.height-.3,Math.max(.5,c.h)))}}return t}function Nl(n,e,t=8){let o=So(e).split(/\s+/).filter(Boolean);if(!o.length)return[];let i=n.filter(a=>{let l=So(`${a.name} ${a.where} ${a.entity??""}`);return o.every(d=>l.includes(d))}),r=So(e.trim()),s=a=>(So(a.name).startsWith(r)?0:2)+(a.kind==="room"?0:1);return i.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,t)}var Du=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Iu=[2200,2700,3200,4e3,5e3,6500],Hu=["hs","rgb","rgbw","rgbww","xy"],Wu=4,Kl=16,Gl=32,Cu=128;function Xr(n){let e=n.attributes.supported_color_modes??[],t=e.some(o=>Hu.includes(o));return{dim:e.some(o=>o!=="onoff"),color:t,temp:e.includes("color_temp")}}function Yr(n){return((n.attributes.supported_features??0)&Wu)!==0&&typeof n.attributes.current_position=="number"}var Zr=class extends me{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{I(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,o=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return w`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${o?w`<img src=${o} alt=${Z(this.hass,this.entity)} />`:w`<span class="qm-note">${ge(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return A(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:Z(this.hass,this.entity)}))}call(e,t,o={}){this.hass.callService(e,t,{entity_id:this.entity,...o})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){Se(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((o,i)=>{let r=i/t*Math.PI*2-Math.PI/2;return w`<div class="qm-at" style="left:${50+Math.cos(r)*39}%;top:${50+Math.sin(r)*39}%">${o}</div>`})}renderLight(e){let t=Xr(e),o=e.state==="on",i=o&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):o?100:0,r=t.color?Du.map(s=>w`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?Iu.map(s=>w`<button class="qm-swatch" style="background:${Lu(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return w`<div class="qm-ring ${r.length?"":"qm-ring-small"}">
        ${this.ring(r)}
        <button class="qm-power ${o?"qm-on":""}" aria-pressed=${o} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${o?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?w`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:S}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,o=e.state==="opening"||e.state==="closing",i=Yr(e),r=(d,c,u,p=!1)=>w`<button class="qm-swatch qm-slot ${p?"qm-slot-on":""}" aria-label=${c} @click=${u}>${d}</button>`,s=d=>t!==null&&Math.abs(t-d)<3,a=[r("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...i?[75,50].map(d=>r(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],r("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...i?[25].map(d=>r(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],r("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),o)],l=t===null?e.state==="closed"?100:0:100-t;return w`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${o?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>o?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:ge(this.hass,e)}</b>
        </button>
      </div>
      ${i?w`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${d=>this.call("cover","set_cover_position",{position:Number(d.target.value)})}
          />`:S}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,o=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&Cu&&o!==null?w`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${o} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(o)}
          aria-label=${this.t("cover_tilt")}
          @change=${i=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(i.target.value)})}
      /></label>`:t&(Kl|Gl)?w`<div class="qm-tilt-buttons">
        ${t&Kl?w`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:S}
        ${t&Gl?w`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:S}
      </div>`:S}renderCar(e){let t=e.entities,o=(u,p,f,g={})=>{this.hass.callService(u,p,{entity_id:f,...g})},i=t.lock,r=!!i&&i.startsWith("lock."),s=u=>/^(switch|input_boolean|fan|light)\./.test(u),a=t.climate,l=!!a&&a.startsWith("climate."),d=t.charging&&s(t.charging)?t.charging:null,c=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return w`<p class="qm-car-line">${c||ge(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${r||i&&s(i)?w`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(r?o("lock","unlock",i):o("homeassistant","turn_off",i)):r?o("lock","lock",i):o("homeassistant","turn_on",i)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:S}
        ${a?w`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>o(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",a)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:S}
        ${d?w`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>o("homeassistant",e.charging?"turn_off":"turn_on",d)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:S}
        ${!r&&!a&&!d?w`<p class="qm-note">${this.t("car_no_controls")}</p>`:S}
      </div>`}renderMedia(e){let t=e.attributes,o=e.state==="playing",i=e.state==="off"||e.state==="standby",r=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,s=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof t.entity_picture=="string"?t.entity_picture:null;return w`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${o?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",i?"turn_on":o?"media_pause":"media_play")}>
          <span>${i?"\u23FB":o?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?w`<p class="qm-media-title">${s}</p>`:S}
      ${r!==null?w`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(r)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:S}
      ${this.renderPlay(e)}`}renderPlay(e){if(!H("sound"))return S;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],o=this.presets??[];if(!t.length&&!o.length)return S;let i=e.attributes.source;return w`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${o.map(r=>w`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:r.type,media_content_id:r.content})}>
            ▶ ${r.label}
          </button>`)}
        ${t.map(r=>w`<button class="qm-chip ${r===i?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:r})}>${r}</button>`)}
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",o=e.entity_id.split(".")[0];return w`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(o==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${ge(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return S;let t=I(this.entity),o=this.car?this.renderCar(this.car):K(e)?w`<p class="qm-note">${ge(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&H("sound")?this.renderMedia(e):this.renderToggle(e);return w`<div class="qm" role="dialog" aria-label=${Z(this.hass,this.entity)}>
      <div class="qm-title">${Z(this.hass,this.entity)}</div>
      ${o}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[De,we`
    .qm-play-head {
      margin: 10px 0 4px;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.7;
    }
    .qm-play {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      max-height: 110px;
      overflow-y: auto;
    }
    .qm-chip {
      border: 1px solid rgba(160, 240, 255, 0.35);
      border-radius: 999px;
      padding: 5px 10px;
      background: rgba(8, 16, 34, 0.55);
      color: inherit;
      font: inherit;
      font-size: 12.5px;
      cursor: pointer;
    }
    .qm-chip-on {
      border-color: var(--fp3d-accent, #37e0ff);
      color: var(--fp3d-accent, #37e0ff);
    }
      .qm-camera {
        display: block;
        width: 100%;
        padding: 0;
        margin: 6px 0 8px;
        border: 0;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
        cursor: pointer;
      }
      .qm-camera img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .qm:has(.qm-camera) {
        width: 300px;
      }
      .qm {
        width: 232px;
        padding: 12px 14px 10px;
        border-radius: 22px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        backdrop-filter: blur(10px);
      }
      :host([low]) .qm {
        backdrop-filter: none;
        box-shadow: 0 0 0 1px var(--fp3d-line);
        animation: none;
        color: var(--fp3d-text);
        text-align: center;
        animation: qm-in 140ms ease-out;
      }
      @keyframes qm-in {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      .qm-title {
        font: 700 14.5px var(--fp3d-title-font);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-ring {
        position: relative;
        width: 196px;
        height: 196px;
        margin: 6px auto 4px;
        display: grid;
        place-items: center;
      }
      .qm-ring-small {
        height: 110px;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 34px;
        height: 34px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
      }
      .qm-swatch:active {
        transform: scale(0.9);
      }
      .qm-power {
        display: grid;
        place-items: center;
        gap: 2px;
        width: 88px;
        height: 88px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-muted);
        box-shadow: inset 0 0 0 2px var(--fp3d-line);
        cursor: pointer;
        font: inherit;
      }
      .qm-power b {
        font: 700 15px var(--fp3d-title-font);
        color: var(--fp3d-text);
      }
      .qm-power small {
        font-size: 11px;
      }
      .qm-on {
        color: #1a1204;
        background: var(--fp3d-warm);
        box-shadow: 0 0 24px rgba(255, 181, 71, 0.55);
      }
      .qm-on b {
        color: #1a1204;
      }
      .qm-slot {
        display: grid;
        place-items: center;
        border-color: var(--fp3d-line);
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-text);
        font: 700 12px var(--fp3d-title-font);
      }
      .qm-slot-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 14px rgba(55, 224, 255, 0.45);
      }
      /* the blind: its closed part covers the circle from the top, the open part glows like daylight */
      .qm-blind.qm-on {
        background: linear-gradient(to bottom, #1e2c4c var(--closed), #9fd9ff var(--closed));
        box-shadow: 0 0 22px rgba(120, 200, 255, 0.4);
        color: #06101f;
      }
      .qm-blind b {
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        color: #fff;
      }
      .qm-round {
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 17px;
        cursor: pointer;
      }
      .qm-car-line {
        margin: 2px 0 8px;
        text-align: center;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .qm-car {
        display: grid;
        gap: 6px;
        justify-items: stretch;
      }
      .qm-car .qm-slot {
        width: auto;
        padding: 6px 10px;
        font-size: 13px;
      }
      .qm-media {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 6px 0;
      }
      .qm-media-main {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        position: relative;
      }
      .qm-media-main span {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font-size: 22px;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
        color: #fff;
      }
      .qm-media .qm-slot {
        width: auto;
        padding: 0 10px;
      }
      .qm-media-title {
        margin: 2px 0 4px;
        text-align: center;
        font-size: 12px;
        opacity: 0.85;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-tilt {
        display: grid;
        gap: 4px;
        margin-top: 8px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .qm-tilt-buttons {
        display: flex;
        gap: 6px;
        justify-content: center;
        margin-top: 8px;
      }
      .qm-tilt-buttons .qm-slot {
        width: auto;
        padding: 0 10px;
        font-size: 12px;
      }
      .qm-slider {
        width: 100%;
        margin: 4px 0 6px;
        accent-color: var(--fp3d-accent);
      }
      .qm-look {
        display: block;
        width: 100%;
        margin-top: -4px;
      }
      .qm-details {
        border: 0;
        background: none;
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 13px;
        padding: 6px;
        cursor: pointer;
      }
      .qm-note {
        color: var(--fp3d-muted);
      }
    `]};function Lu(n){let e=Math.min(1,Math.max(0,(n-2200)/4300)),t=(o,i)=>Math.round(o+(i-o)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",Zr);var Ou=new URL(import.meta.url),Bu=new URL("./neonplan3d-3d.js?v=29171ac1a9af",Ou).href,Ul;function In(){return Ul??=import(Bu),Ul}var Jr;function Qr(){let n=new URL("./neonplan3d-fun.js?v=014c3da4ac73",new URL(import.meta.url)).href;return Jr??=import(n).catch(e=>{throw Jr=void 0,e}),Jr}var jl=.3;function Hn(n,e){let t=n.from?e(n.from):null,o=n.to?e(n.to):null,i=n.height??jl,r=[];if(n.heights)t&&r.push([t.x,t.y,t.z]),n.points.forEach(([s,a],l)=>r.push([s,n.heights?.[l]??i,a])),o&&r.push([o.x,o.y,o.z]);else{if(!t||!o)return[];r.push([t.x,t.y,t.z],[t.x,i,t.z]);for(let[s,a]of n.points)r.push([s,i,a]);r.push([o.x,i,o.z],[o.x,o.y,o.z])}return r.filter((s,a)=>a===0||ei(s,r[a-1])>.001)}function ei(n,e){return Math.hypot(e[0]-n[0],e[1]-n[1],e[2]-n[2])}function ti(n){let e=0;for(let t=1;t<n.length;t++)e+=ei(n[t-1],n[t]);return e}function $o(n,e){if(n.length<2)return null;let t=Math.max(0,e);for(let o=1;o<n.length;o++){let[i,r]=[n[o-1],n[o]],s=ei(i,r);if(!(s<1e-6)){if(t<=s||o===n.length-1){let a=Math.min(1,t/s),l=[(r[0]-i[0])/s,(r[1]-i[1])/s,(r[2]-i[2])/s];return{p:[i[0]+(r[0]-i[0])*a,i[1]+(r[1]-i[1])*a,i[2]+(r[2]-i[2])*a],dir:l,seg:o-1}}t-=s}}return null}function Kt(n){let[e="",t="",o]=n.split(":");return{kind:e,id:t,port:o||null}}function ni(n){let{kind:e,id:t}=Kt(n);return e&&t?`${e}:${t}`:n}function Vu(n,e){let{w:t,d:o,h:i}=n;if(n.type==="pool_pump")return e==="suction"?[t*.5,i*.55,0]:e==="pressure"?[t*.05,i*.9,0]:null;if(n.type==="pool_filter"){let r=Math.min(t,o)/2;if(n.variant==="side6"){let l=r+.08;return e==="pump"?[l,i*.6,0]:e==="return"?[l+.06,i*.48,0]:e==="waste"?[l,i*.36,0]:null}let s=i*.89,a=r*.45+.04;return e==="pump"?[-a,s,0]:e==="return"?[a,s,0]:e==="waste"?[0,s,-a]:null}if(n.type==="pool_heat_pump"){let r=n.variant==="left"||n.variant==="back"?n.variant:"right";if(e!=="in"&&e!=="out")return null;let s=e==="in"?i*.25:i*.45;return r==="back"?[e==="in"?-t*.15:t*.15,s,-o/2-.04]:[(r==="left"?-1:1)*(t/2+.04),s,-o*.2]}return null}function ql(n,e){let t=Vu(n,e);if(!t)return null;let o=n.rotation*Math.PI/180,[i,r]=[Math.cos(o),Math.sin(o)];return{x:n.x+t[0]*i-t[2]*r,y:t[1],z:n.z+t[0]*r+t[2]*i}}function Zl(n,e){if(e==="outside"){if(n.kind==="floor")return{x:n.x,y:n.y-.3,z:n.z};if(n.kind==="wall"){let t=(n.depth??.3)+.05;return{x:n.x-(n.nx??0)*t,y:n.y,z:n.z-(n.nz??0)*t}}}return{x:n.x,y:n.y,z:n.z}}var Xl=new Set(["skimmer","drain"]),oi=new Set(["backwash","rinse","waste"]),Yl=n=>`port:${n}`,Jl=n=>`dev:${n}`,ri=n=>!!n.fittings?.some(e=>e.kind==="valve"&&e.open===!1);function Ql(n){let e=new Map(n.pipes.map(b=>[b.id,{active:!1,warm:!1,waste:!1}]));if(!n.pumpOn)return e;let t=new Map(n.pipes.map(b=>[b.id,Kt(b.from).port])),o=n.pipes.map(b=>({...b,from:b.from?ni(b.from):`loose:${b.id}:a`,to:b.to?ni(b.to):`loose:${b.id}:b`})),i=new Map(n.devices.map(b=>[Jl(b.id),b])),r=new Map(n.ports.map(b=>[Yl(b.id),b])),s=b=>{let k=i.get(b);return!!k&&k.type==="pool_valve"&&k.open===!1},a=new Map,l=new Map;for(let b of o)a.set(b.from,[...a.get(b.from)??[],b]),l.set(b.to,[...l.get(b.to)??[],b]);let d=b=>r.get(b)?.kind==="waste",c=b=>i.get(b)?.type==="pool_heat_pump",u=new Map,p=(b,k=new Set)=>{let z=u.get(b.id);if(z)return z;if(k.has(b.id))return{heat:!1,waste:!1};k.add(b.id);let E=c(b.to),T=d(b.to);if(!E||!T)for(let x of a.get(b.to)??[]){let $=p(x,k);E||=$.heat,T||=$.waste}let y={heat:E,waste:T};return u.set(b.id,y),y},f=n.devices.filter(b=>b.type==="pool_pump").map(b=>Jl(b.id)),g=f.length?f:n.ports.filter(b=>Xl.has(b.kind)).map(b=>Yl(b.id)),m=new Set,h=(b,k,z)=>{let E=`${b}|${k}|${z}`;if(m.has(E)||(m.add(E),s(b)))return;let T=a.get(b)??[],y=i.get(b);if(y?.type==="pool_filter"){let x=y.valve??"filter";if(x==="closed")return;let $=oi.has(x)?"waste":"return";T=T.filter(M=>{let F=t.get(M.id);return F?F===$:p(M).waste===oi.has(x)}),oi.has(x)&&(z=!0)}else if(T.length>1){T=T.filter(M=>!s(M.to)&&!ri(M));let x=T.filter(M=>p(M).heat),$=T.filter(M=>!p(M).heat);x.length&&$.length&&(T=n.heaterOn?x:$)}y?.type==="pool_heat_pump"&&n.heating&&(k=!0);for(let x of T){if(s(x.to)||ri(x))continue;let $=e.get(x.id);$.active=!0,$.warm||=k,$.waste||=z,h(x.to,k,z)}},v=new Set,_=b=>{for(let k of l.get(b)??[])v.has(k.id)||s(k.from)||ri(k)||(v.add(k.id),_(k.from))};if(f.length){for(let k of f)_(k);let b=(k,z=new Set)=>z.has(k.id)?!1:(z.add(k.id),Xl.has(r.get(k.from)?.kind??"")?!0:(l.get(k.from)??[]).some(E=>v.has(E.id)&&b(E,z)));for(let k of v){let z=o.find(E=>E.id===k);b(z)&&(e.get(k).active=!0)}}for(let b of g)h(b,!1,!1);return e}var Nu=[.25,.7,1],Ku=[1,.45,.18],Gu=[.75,.6,.35],Uu=900;function Mo(n){return n?.waste?Gu:n?.warm?Ku:Nu}function ec(n,e,t,o=i=>i){let i=[];for(let r of n){let s=o(Hn(r,t),r);if(s.length<2)continue;let a=e.get(r.id),l=Mo(a),d=0;for(let c=1;c<s.length;c++){let[u,p]=[s[c-1],s[c]],f=Math.hypot(p[0]-u[0],p[1]-u[1],p[2]-u[2]);f<.01||(i.push({floorId:r.floor_id,a:u,b:p,dist:d,power:a?.active?Uu:0,color:l}),d+=f)}}return i}function tc(n,e,t){let o=t.pool??{},i=ln(e,t);return r=>{let{kind:s,id:a,port:l}=Kt(r);if(s==="port"){let d=o.ports?.find(u=>u.id===a);if(!d)return null;let c=d.kind==="skimmer"?i-(d.depth??0):d.kind==="drain"?an(e,t)+.03:d.kind==="inlet"?i-(d.depth??.3):.02;return{x:d.x,z:d.z,y:c}}if(s==="joint"){let d=o.joints?.find(c=>c.id===a);return d?Zl(d,l):null}if(s!=="dev")return null;for(let d of n.floors){let c=d.furniture.find(g=>g.id===a);if(!c||!cn.includes(c.type))continue;let u=l?ql(c,l):null,p=d.elevation-e.elevation;if(u)return{...u,y:u.y+pe(d,c)+p};let f=c.type==="pool_filter"?c.h*.88:c.type==="pool_dosing"?.95:c.type==="pool_valve"?Ts:c.type==="pool_pump"?.2:.3;return{x:c.x,z:c.z,y:f+pe(d,c)+p}}return null}}function ii(n,e,t,o){let i=c=>{let{kind:u,id:p}=Kt(c);return u==="port"?t.pool?.ports?.find(f=>f.id===p)?.kind:void 0},r=c=>i(c)==="drain",s=c=>i(c)==="inlet"||i(c)==="skimmer",a=c=>{if(c.length<2)return c;let u=c[0],p=si(t,[u[0],u[2]]);if(!p)return c;let f=[u[0]+p[0]*.35,u[1],u[2]+p[1]*.35],g=1;for(;g<c.length&&Math.hypot(c[g][0]-u[0],c[g][2]-u[2])<.01;)g++;let m=c.slice(g).map(v=>[...v]);for(let v=0;v<m.length-1;v++){let _=(m[v][0]-u[0])*p[0]+(m[v][2]-u[2])*p[1];if(_>=.349999)break;m[v][0]+=p[0]*(.35-_),m[v][2]+=p[1]*(.35-_)}let h=m[0]??c[c.length-1];return[u,f,[f[0],h[1],f[2]],...m]},l=c=>{if(c.length<2)return c;let u=c[0];if(!G([u[0],u[2]],t.points))return c;let p=an(o,t)-.15,f=c.findIndex((v,_)=>_>0&&Math.hypot(v[0]-u[0],v[2]-u[2])>.01);if(f<0)return c;let g=c[f],m=[g[0],g[2]];for(let v=0;v<t.points.length;v++){let _=t.points[v],b=t.points[(v+1)%t.points.length],k=ju([u[0],u[2]],[g[0],g[2]],_,b);k&&(m=k)}let h=Math.hypot(m[0]-u[0],m[1]-u[2])>1e-6?[m[0]+(m[0]-u[0])*.02,m[1]+(m[1]-u[2])*.02]:m;return[u,[u[0],p,u[2]],[h[0],p,h[1]],[h[0],g[1],h[1]],...c.slice(f)]},d=n;return e.from&&r(e.from)&&(d=l(d)),e.to&&r(e.to)&&(d=l([...d].reverse()).reverse()),e.from&&s(e.from)&&(d=a(d)),e.to&&s(e.to)&&(d=a([...d].reverse()).reverse()),d}function si(n,e){let t=n.points;if(t.length<3)return null;let o=0;for(let r=0;r<t.length;r++){let s=t[r],a=t[(r+1)%t.length];o+=s[0]*a[1]-a[0]*s[1]}let i=null;for(let r=0;r<t.length;r++){let s=t[r],a=t[(r+1)%t.length],l=a[0]-s[0],d=a[1]-s[1],c=Math.hypot(l,d);if(c<1e-6)continue;let u=Math.max(0,Math.min(1,((e[0]-s[0])*l+(e[1]-s[1])*d)/(c*c))),p=Math.hypot(s[0]+l*u-e[0],s[1]+d*u-e[1]),f=o>0?[d/c+0,-l/c+0]:[-d/c+0,l/c+0];(!i||p<i.d)&&(i={d:p,n:f})}return i?i.n:null}function ju(n,e,t,o){let i=[e[0]-n[0],e[1]-n[1]],r=[o[0]-t[0],o[1]-t[1]],s=i[0]*r[1]-i[1]*r[0];if(Math.abs(s)<1e-9)return null;let a=((t[0]-n[0])*r[1]-(t[1]-n[1])*r[0])/s,l=((t[0]-n[0])*i[1]-(t[1]-n[1])*i[0])/s;return a>=0&&a<=1&&l>=0&&l<=1?[n[0]+i[0]*a,n[1]+i[1]*a]:null}var nc=n=>n.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function qu(n,e,t){let o=nc(t);if(!o||o==="unknown"||o==="unavailable"||o==="not home"||o==="away")return null;for(let i of e.floors)for(let r of i.rooms)if([r.name,r.area_id??"",r.area_id?n.areas?.[r.area_id]?.name??"":""].filter(Boolean).map(nc).includes(o))return{floorId:i.id,room:r};return null}function Zu(n){let e=n.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function oc(n,e){let t=[],o=new Map;for(let i of e.presence){let r=n.states[i.person];if(!r||!i.sensor||r.state!=="home"&&r.state!=="on")continue;let s=n.states[i.sensor];if(!s)continue;let a=qu(n,e,s.state);if(!a)continue;let l=o.get(a.room.id)??0;o.set(a.room.id,l+1);let[d,c]=xe(a.room.points),u=-Math.PI/2+.9+l*1.15,p=.75,f=r.attributes.friendly_name??i.person;t.push({id:i.person,name:f,initials:Zu(f),picture:r.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:d+Math.cos(u)*p,z:c+Math.sin(u)*p})}return t}function rc(n,e,t,o){let i=new Map,r=s=>!!s&&n.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let d of s.rooms)for(let c of Jn(n,le(n,d.area_id)))I(c)==="light"&&a.add(c);for(let d of s.placements)I(d.entity_id)==="light"&&a.add(d.entity_id);let l=s.openings.filter(d=>{let c=t.get(d.id);if(!c)return!1;if(d.type==="garage")return(Be(n,c,"garage").cover??1)<.95;if(d.type==="door")return r(c.contact)||r(c.contact2??null);let u=Be(n,c,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;i.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(d=>n.states[d]?.state==="on").length,open:l,persons:o.filter(d=>d.floorId===s.id).length})}return i}function ic(n,e){let t=[e.rooms===1?A(n,"floor_rooms_one"):A(n,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(A(n,"floor_lights",{n:e.lightsOn})),e.open&&t.push(A(n,"floor_open",{n:e.open})),e.persons&&t.push(A(n,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}function sc(n,e,t,o=12,i=180){let r=Math.max(i,e),s=Math.max(i*.5625,t),a={cols:1,tile:Math.min(r,s*16/9)};for(let l=1;l<=Math.max(1,n);l++){let d=Math.ceil(n/l),c=(r-o*(l-1))/l,u=(s-o*(d-1))/d*16/9,p=Math.min(c,u);(p>a.tile||l===1)&&(a={cols:l,tile:p})}if(a.tile<i){let l=Math.max(1,Math.floor((r+o)/(i+o)));return{cols:Math.min(l,Math.max(1,n)),tile:i}}return{cols:a.cols,tile:Math.floor(a.tile)}}function ai(n,e,t){let o=[...t.openings.values()].flatMap(y=>[y.cover,y.contact,y.tilt,y.contact2??null,y.tilt2??null,y.position??null,y.tiltAngle??null]),i=ba(e),r=i.filter(y=>I(y)==="camera").flatMap(y=>Xe(n,y)),s=i.map(y=>An(n,y)),a=e.energy,l=e.presence.flatMap(y=>[y.person,y.sensor]),d=e.floors.flatMap(y=>y.rooms.flatMap(x=>le(n,x.area_id).filter($=>I($)==="light"))),c=[...t.furniture.values()].flatMap(y=>[y.entity,y.power]),u=e.floors.flatMap(y=>y.furniture.flatMap(x=>[x.state_entity??null,x.state_entity2??null,x.color_entity??null])),p=e.floors.flatMap(y=>y.furniture.flatMap(x=>[x.door_left??null,x.door_right??null,x.soc??null,x.status??null,x.charge??null,x.export??null])),f=e.floors.flatMap(y=>y.furniture.flatMap(x=>[...Object.values(x.bindings??{}),...Object.values(x.spot_config??{}).map($=>$.entity)])).filter(y=>y!=="none"),g=(e.settings.roof?.windows??[]).flatMap(y=>[y.cover,y.contact,y.tilt,y.window]).filter(y=>!!y&&y!=="none"),m=[...(e.settings.roof?.solar??[]).map(y=>y.entity),...(e.settings.roof?.strings??[]).map(y=>y.entity)].filter(y=>!!y&&y!=="none"),h=e.floors.flatMap(y=>y.furniture.filter(x=>x.type==="robot_vacuum").map(x=>mn(n,t.furniture.get(x.id)?.entity??null,x.room_sensor))),v=e.floors.flatMap(y=>y.furniture.flatMap(x=>(x.pictures??[]).flatMap($=>[$.entity,...$.image.startsWith("camera:")?[$.image.slice(7)]:[]]))),_=t.heat?e.floors.flatMap(y=>y.rooms.flatMap(x=>le(n,x.area_id).filter($=>$.startsWith("sensor.")))):[],b=[...Wl(e.floors),...H("auto_pro")?ia(n,e.floors):[],...H("pool")?Ua(n,e.floors):[]],k=Dn(n,e).map(y=>y.entity),z=H("household")?e.floors.flatMap(y=>y.furniture.flatMap(rl)).filter(y=>y!=="none"):[],E=Ot(n,t.weatherEntityId??e.settings.weather_entity),T=[...i,...r,...o,...s,...c,...u,...p,...f,...h,...g,...m,...v,a.grid,a.solar,a.battery,a.battery_soc,a.consumption,a.tariff,...l,...d,..._,...t.warnings,...b,...k,...z,E,"sun.sun"];return[...new Set(T.filter(y=>!!y))]}function ac(n,e){return String(e&&n.states[e]?.attributes.unit_of_measurement||"m\xB3")}function Yu(n,e,t){return(t==="m\xB3"||t==="m3")&&e<10?`${J(n,e*1e3,0)} l`:`${J(n,e,e<10?2:0)} ${t}`}var Ju=12e4,lc={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},Qu='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',eh='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function cc(n,e,t){return n.rooms.find(o=>o.points.length>=3&&G([e,t],o.points))?.id??null}function th(n,e){let t=e.action==="more_info"?e.target:e.data?.entity_id;return typeof t=="string"&&Oe(n.states[t])}function nh(n){try{return localStorage.getItem(n)==="1"}catch{return!1}}function oh(n,e){try{localStorage.setItem(n,e?"1":"0")}catch{}}var li=class extends me{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},householdCard:{attribute:!1},_sceneFired:{state:!0},replay:{attribute:!1},productColors:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;unwatchDiag=null;detecting=!1;syncMs=0;flashTimer;cloud=0;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;poolTarget=new Map;volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;throughWall=!1;live=null;resizeObs=null;binInfoTimer;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;binHolos=[];finished=new go;fridgeTimer;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.replay=null,this.productColors=!1,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.heatMode="none",this.theme="neon",this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1;try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.walkable=!0,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this._household=[],this._hhFolded=nh("neonplan3d.hhFolded"),this._binInfo=null,this.householdCard=!0,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.unwatchDiag=ds(e=>this.viewer?.setStats(this.showStats||e)),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible)}onVisible=()=>{document.hidden||this.holoRefetch?.()};disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onVisible),this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this.unlistenReplay?.(),this.unlistenReplay=null,this.unwatchDiag?.(),this.unwatchDiag=null,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.renderRoot.addEventListener("wheel",e=>{let t=e;if(!t.target?.closest?.(".fp3d-holo"))return;let o=this.renderRoot.querySelector("canvas");o&&(t.preventDefault(),o.dispatchEvent(new WheelEvent("wheel",t)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let o=(t[0]?.contentRect.width??1e3)<700;o!==this._narrowStage&&(this._narrowStage=o,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await In();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");t.addEventListener("pointerdown",o=>{this._central&&!o.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1),this._info&&(this._info=null)}),this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(o,i)=>this.fire("room-tap",{floorId:o,roomId:i}),onFloorTap:o=>this.fire("floor-tap",{floorId:o}),floorInfo:o=>o.rooms.length===1?A(this.hass,"floor_rooms_one"):A(this.hass,"floor_rooms",{n:o.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(o,i,r)=>this.onDeviceTap(o,i,r),onDeviceHold:(o,i,r)=>this.onDeviceHold(o,i,r),onRoomDoubleTap:(o,i)=>this.onRoomDoubleTap(o,i),onDeviceSwipe:(o,i,r,s,a)=>this.onDeviceSwipe(o,i,r,s,a),onFurnitureSelect:o=>this.fire("furniture-select",{id:o}),onFurnitureMove:(o,i,r)=>this.fire("furniture-move",{id:o,x:i,z:r}),onDeviceSelect:o=>this.fire("device-select",{id:o}),onDeviceMove:(o,i,r)=>this.fire("device-move",{id:o,x:i,z:r}),onStats:o=>{this.showStats&&(this._stats=o),hs(o)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setTheme(this.theme),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((o,i,r,s,a,l)=>this.placeHolo(o,i,r,s,a,l)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats||Go()),at("3d"),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this._low=this.viewer.low,this.viewer.setPacks([...rn()]),this.viewer.setProductColors(this.productColors),this.shownPacks=xt(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.building)),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("building")&&Ms(this.building??null),e.has("hass")&&this.hass&&Ja(Qa(this.hass))}updated(e){e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;if(this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==xt()&&(this.shownPacks=xt(),t.setPacks([...rn()]),this.hass&&this.building&&t.setParked(jr(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let r=JSON.stringify(this.startViewOf()),s=this.shownStartView!==void 0&&this.shownStartView!==r;this.shownStartView=r,t.setStartView(this.startViewOf()),t.setBuilding(this.building),s&&this.floorId===null&&t.resetView()}(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let o=["building","markerMode","heatMode","flows","alerts","dimmed"].some(r=>e.has(r)),i=this.replayTicked&&!!this.replay;this.replayTicked=!1,(o||e.has("hass")||i)&&this.syncDevices(o,i&&(this.trail||this.detecting)),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.theme),e.has("productColors")&&t.setProductColors(this.productColors),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&t.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,this.replay?.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats||Go()),e.has("building")&&(this.findIndex=null)}syncDevices(e,t=!1){let o=this.viewer,i=this.building;if(!o||!i||!this.hass)return;let r=this.hass;(e||!this.openingLinks||this.linkedRegistry!==r.entities)&&(this.openingLinks=fn(r,i.floors),this.furnitureLinks=ct(r,i.floors),this.linkedRegistry=r.entities,this.findIndex=null,this.alertSrc=this.alerts?Wr(r,i,this.weatherEntityId):null,this.watchHousehold(r,i),this.watched=ai(r,i,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?Cr(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),e=!0);let s=e||t||this.watched.some(P=>this.shownStates.get(P)!==r.states[P]),a=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=this.replay?.seek??0,this.seenT=this.replay?.t??0,(s||this.replay)&&o.setCustomPackState(r,{time:this.replay?.t??Date.now(),historical:!!this.replay,playing:this.replay?.playing??!0,seek:this.replay?.seek??0,history:this.replay?.rows}),!s)return;let l=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(P=>[P,r.states[P]]));let d=kl(r,i),c=ga(r,i),u=this.furnitureMarkers(r,i,new Set(c.map(P=>P.id)),new Set(d.map(P=>P.powerEntity)));d.push(...u.consumers);let p=xl(r,i,d,Nt(i,P=>this.furnitureLinks?.get(P.id)?.power??null)),f=new Map(d.filter(P=>P.id!==P.powerEntity).map(P=>[P.id,P.power]));this.confirmSet=Rt(r,i.floors);let g=this.trail?this.trailNow(r,i):[],m=H("camera_cockpit")&&!this.dimmed?this.detectionPins(r,c):[];this.detecting=m.length>0;let h=H("energy_pro"),v=new Set(H("auto_pro")?i.floors.flatMap(P=>P.furniture.filter(R=>R.type==="parking"&&R.car&&Tn(r,R)).map(R=>R.id)):[]);o.setDevices([...[...c,...u.markers].map(P=>{let R=P.show==="no_power"||"energyDevice"in P&&P.energyDevice?null:f.get(P.id)??null,W={...P,power:R,powerText:R===null?void 0:re(r,R),effect:this.dimmed?!1:P.effect},U=P.ownName&&(P.showName||this.markerNames)?P.ownName:"",D=H("sound")&&this.mediaCardUp(r,P.id)||H("auto_pro")&&!!P.furnitureId&&v.has(P.furnitureId);return{...W,pin:this.showPin(W)&&!D,full:P.show==="always",caption:U}}),...(h&&(this.flows??this._flows)&&!this.dimmed&&p.grid!==null?[this.gridPin(r,i,p.grid)]:[]).filter(P=>!!P),...m,...g.map((P,R)=>({id:`trail:${R}`,floorId:P.floorId,roomId:null,x:P.x,z:P.z,y:.3+.4*g.slice(0,R).filter(W=>W.entity===P.entity).length,icon:Vl,name:Z(r,P.entity),text:xo(r,P.time),active:!1,unavailable:!1,glow:null,pin:!0}))]),o.setTrail(g,this.replay?this.robotPaths(r,i):[]),o.setPickTargets(u.targets,this.openingTargets()),o.setScreens(u.screens),o.setFridgeDoors(dr(r,i.floors)),o.setAwnings(oa(r,i.floors)),o.setRobots(this.robotInfos(r,i));let _=new Map;for(let P of i.settings.roof?.windows??[])_.set(P.id,Va(r,P));o.setRoofWindows(_),o.setParked(jr(r,i));let b=new Map(i.floors.flatMap(P=>P.openings.map(R=>[R.id,R.type]))),k=new Map([...this.openingLinks].map(([P,R])=>[P,Be(r,R,b.get(P))]));o.setOpeningStates(k,a),this.setAlerts(this.alertSrc?pl(r,i,this.alertSrc,this.openingLinks):[]),clearTimeout(this.fridgeTimer);let z=H("household")&&!this.replay?ul(i.floors.flatMap(P=>P.furniture),r):null;z!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),z+500));let E=[...c,...u.markers].map(P=>`${P.id}:${P.glow?`${P.glow.level.toFixed(1)}/${P.glow.color.map(R=>R.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...k].map(([P,R])=>`${P}:${R.open}:${R.cover===null?"-":R.cover.toFixed(1)}`).join(";");if(E!==this.thumbSig){let P=this.thumbSig==="";this.thumbSig=E,P||this.scheduleThumbs(1500)}let T=i.floors.flatMap(P=>P.furniture.filter(R=>R.type==="home_battery").map(R=>({floorId:P.id,x:R.x,z:R.z})))[0]??(i.energy.battery?i.floors.flatMap(P=>P.placements.filter(R=>R.entity_id===i.energy.battery).map(R=>({floorId:P.id,x:R.x,z:R.z})))[0]:null),y=h?Tl(r,i,p.solar):null,x=i.settings.roof.hologram??Le,$=[...i.settings.roof.solar??[]].sort((P,R)=>R.rows*R.cols-P.rows*P.cols),M=i.settings.roof.strings??[],F=P=>(P.string?M.find(R=>R.id===P.string)?.inverter:null)??null,N=x.plant_floor?"all":"house",O=(P,R,W,U)=>{let D=ht(i,P);if(!D)return null;let[V,Y]=pt(D,P),X=P.u+V/2+R,se=P.v+Y/2+W,fe=[D.o[0]+D.eu[0]*X+D.es[0]*se,D.o[1]+D.eu[1]*X+D.es[1]*se,D.o[2]+D.eu[2]*X+D.es[2]*se],de=D.wall?.floorId??(D.unbounded?i.floors.find(ye=>ye.elevation===Math.min(...i.floors.map(wt=>wt.elevation)))?.id??i.floors[0].id:[...i.floors].sort((ye,wt)=>wt.elevation-ye.elevation)[0].id);return{p:[fe[0]+D.n[0]*.05,fe[1]+D.n[1]*.05,fe[2]+D.n[2]*.05],n:[D.n[0],D.n[1],D.n[2]],floorId:de,size:U,roof:!0,views:N}},C=[],B=[],ne=p.grid!==null||p.battery!==null||p.solar!==null,Q=x.place==="free"&&Number.isFinite(x.x)&&Number.isFinite(x.z),te=h&&p.solar!==null&&!Q?$.find(P=>P.id===x.field)??$[0]:void 0,ce=te?F(te):null,he=!!te&&!!ce&&!$.some(P=>P.id!==te.id&&F(P)===ce)&&x.right===0&&x.up===0,Pe=(()=>{if(!he||!te)return 0;let P=ht(i,te);return P?pt(P,te)[0]/2+1.2:0})(),L=te?O(te,x.right+Pe,x.up,x.size):null,ee=this.devicePowers(r,i),be=h&&p.solar!==null?i.energy.solar?[i.energy.solar]:Nt(i,P=>this.furnitureLinks?.get(P.id)?.power??null).solar:[];if(L)C.push(L),B.push({kind:"main",name:A(r,"holo_title"),w:null,dayIds:be,battery:null});else if(h&&ne&&Q){let P=0,R=0,W=0,U=1/0,D=i.floors[0];for(let se of i.floors){se.rooms.length&&(U=Math.min(U,se.elevation)),se.rooms.length&&(!D.rooms.length||se.elevation+se.height>D.elevation+D.height)&&(D=se);for(let fe of se.rooms)for(let[de,ye]of fe.points)P+=de,R+=ye,W++}W&&(P/=W,R/=W);let V=x.x-P,Y=x.z-R,X=Math.hypot(V,Y);C.push({p:[x.x,(Number.isFinite(U)?U:0)+(x.height??3),x.z],n:X>.01?[V/X,0,Y/X]:[1,0,0],floorId:D.id,size:x.size,roof:!0,views:N}),B.push({kind:"main",name:A(r,"holo_title"),w:null,dayIds:be,battery:null})}else if(h&&ne&&i.floors.some(P=>P.rooms.length)){let P=-1/0,R=1/0,W=-1/0,U=0,D=i.floors[0];for(let V of i.floors){for(let Y of V.rooms)for(let[X,se]of Y.points)P=Math.max(P,X),R=Math.min(R,se),W=Math.max(W,se);V.rooms.length&&V.elevation+V.height>U&&(U=V.elevation+V.height,D=V)}C.push({p:[P+.6,U+.4,(R+W)/2],n:[1,0,0],floorId:D.id,size:x.size,roof:!0,views:N}),B.push({kind:"main",name:A(r,"holo_title"),w:null,dayIds:be,battery:null})}if(h&&p.solar!==null){let P=new Set;for(let R of i.floors)for(let W of R.furniture.filter(U=>U.type==="inverter")){if(W.plant_card===!1||P.has(W.id))continue;P.add(W.id);let U=$.filter(fe=>F(fe)===W.id),D=(te&&W.id===ce?U.find(fe=>fe.id!==te.id):null)??U[0],V=this.furnitureLinks?.get(W.id)?.power??null,Y=D?O(D,W.plant_right??0,W.plant_up??0,x.size*.85):null;if(!Y||!V)continue;let X=R.furniture.filter(fe=>fe.type==="home_battery").sort((fe,de)=>Math.hypot(fe.x-W.x,fe.z-W.z)-Math.hypot(de.x-W.x,de.z-W.z))[0],se=X?.soc&&X.soc!=="none"?Number(r.states[X.soc]?.state):NaN;C.push(Y),B.push({kind:"plant",name:W.name||_e(r,W.type),w:Math.max(0,ie(r.states[V])??0),dayIds:[V],battery:X?{soc:Number.isFinite(se)?se:null,w:ee.get(X.id)??null}:null})}}let Ie=x.device_house===!1?"floor":"all";if(h)for(let P of i.floors){for(let R of P.furniture){if(!R.holo)continue;let W=this.furnitureLinks?.get(R.id)?.power??null,U=d.find(V=>V.id===R.id);if(!W&&!U)continue;let D=P.elevation+pe(P,R)+R.h;C.push({p:[R.x,D+.1,R.z],n:[0,1,0],floorId:P.id,size:x.size*.7,roof:!1,views:Ie,room:cc(P,R.x,R.z)}),B.push({kind:"device",name:R.name||_e(r,R.type),w:U?.power??(W?ie(r.states[W]):null),dayIds:W?[W]:[],battery:null})}for(let R of P.placements){if(!R.holo)continue;let W=An(r,R.entity_id);if(!W)continue;let U=P.elevation+(R.y??.4)+.2;C.push({p:[R.x,U,R.z],n:[0,1,0],floorId:P.id,size:x.size*.7,roof:!1,views:Ie,room:cc(P,R.x,R.z)}),B.push({kind:"device",name:R.name||Z(r,R.entity_id),w:ie(r.states[W]),dayIds:[W],battery:null})}}let ve=[];if(H("sound")){let P=new Set,R=(i.settings.roof.hologram??Le).size,W=(D,V,Y,X,se,fe)=>{let de=r.states[V];if(!de||I(V)!=="media")return;if(P.has(V)){let nt=ve.find(Eo=>Eo.id===V);nt&&ve.push({...nt,id:`${V}#${ve.filter(Eo=>Eo.id.startsWith(`${V}#`)).length+2}`,floorId:D.id,x:Y,z:X,members:[V]});return}P.add(V);let ye=this.ro?void 0:this.mediaGrace.get(V),wt=[de.attributes.media_title,de.attributes.app_name,de.attributes.source].find(nt=>typeof nt=="string"&&!!nt.trim())??"";if(!(!K(de)&&(de.state==="playing"||de.state==="paused"&&!!wt||de.state==="on"&&!!de.attributes.source))){ye&&ye.until>Date.now()?(ve.push({...ye.source,playing:!1,level:0}),C.push(ye.anchor),B.push({...ye.card,media:{...ye.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,ye.until-Date.now()+100))):K(de)||(this.mediaGrace.delete(V),ve.push({id:V,floorId:D.id,x:Y,z:X,level:0,playing:!1,members:[]}));return}let zo=de.state==="playing",Te=de.attributes,wi=typeof Te.volume_level=="number"?Math.min(1,Math.max(0,Te.volume_level)):.5,_c=Array.isArray(Te.group_members)?Te.group_members.filter(nt=>nt!==V):[];ve.push({id:V,floorId:D.id,x:Y,z:X,level:zo?.3+.7*wi:0,playing:zo,members:_c});let bc=wt||A(r,"holo_media_playing"),vi={p:[Y,D.elevation+se+.12,X],n:[0,1,0],floorId:D.id,size:R*.7,roof:!1,views:"all"},yi={kind:"media",name:fe,w:null,dayIds:[],battery:null,media:{id:V,title:bc,artist:typeof Te.media_artist=="string"?Te.media_artist:typeof Te.media_album_name=="string"?Te.media_album_name:"",picture:typeof Te.entity_picture=="string"?Te.entity_picture:null,volume:Math.round(wi*100),playing:zo}};C.push(vi),B.push(yi),this.ro||this.mediaGrace.set(V,{until:Date.now()+45e3,card:yi,source:ve[ve.length-1],anchor:vi})},U=(D,V)=>{for(let Y of D.furniture){if((Y.entity!=null&&Y.entity!=="none")!==V)continue;let X=this.furnitureLinks?.get(Y.id)?.entity;X&&W(D,X,Y.x,Y.z,pe(D,Y)+Y.h,Y.name||_e(r,Y.type))}};for(let D of i.floors)U(D,!0);for(let D of i.floors)for(let V of D.placements)W(D,V.entity_id,V.x,V.z,V.y??1.1,V.name||Z(r,V.entity_id));for(let D of i.floors)U(D,!1)}if(H("auto_pro")){let P=(i.settings.roof.hologram??Le).size;for(let R of i.floors)for(let W of R.furniture){if(W.type!=="parking"||!W.car)continue;let U=Tn(r,W);if(!U)continue;let D=to(r,W);if(D.soc===null&&D.range===null&&D.locked===null&&D.climateOn===null)continue;let V=Cl(W,U),Y=pe(R,W)+(V?.h??1.6);C.push({p:[W.x,R.elevation+Y+.25,W.z],n:[0,1,0],floorId:R.id,size:P*.7,roof:!1,views:"all"});let X=D.entities;B.push({kind:"car",name:W.name||_e(r,U),w:null,dayIds:[],battery:null,car:{spot:W.id,soc:D.soc,range:D.range,rangeUnit:D.rangeUnit,chargingW:D.chargingW,charging:D.charging,locked:D.locked,climateOn:D.climateOn,lock:X.lock,climate:X.climate,charge:X.charging&&/^(switch|input_boolean)\./.test(X.charging)?X.charging:null}})}}if(H("pool")){let P=(i.settings.roof.hologram??Le).size,R=[];for(let{floor:W,area:U}of mt(i.floors)){let D=ft(r,Bt(U.pool,i.floors));if(!Object.values(D.entities).some(Boolean))continue;let V=ja(D),Y=ln(W,U);R.push({id:U.id,floorId:W.id,points:U.points,y:Y,color:V.color,level:this.dimmed?V.level*.4:V.level,floorY:an(W,U),flow:!!D.pump?.on,heat:!!D.heater?.heating,cover:D.cover?.closed??0});let[X,se]=xe(U.points);C.push({p:[X,W.elevation+Math.max(Y,0)+(U.above?.6:1.1),se],n:[0,1,0],floorId:W.id,size:P*.7,roof:!1,views:"all"}),B.push({kind:"pool",name:A(r,"out_pool"),w:null,dayIds:[],battery:null,pool:{area:U.id,state:D}})}o.setPools(R)}else o.setPools([]);if(H("household")){let P=(i.settings.roof.hologram??Le).size;for(let R of this.binHolos){let W=i.floors.find(U=>U.id===R.floorId);W&&(C.push({p:[R.x,W.elevation+R.y+.04,R.z],n:[0,1,0],floorId:R.floorId,size:P*.75,roof:!1,views:"all"}),B.push({kind:"bin",name:R.name,w:null,dayIds:[],battery:null,bin:{color:R.color,when:R.when,soon:!!R.soon}}))}}o.setSound(ve);let Wn=this._walk?this.walkRoomPts:null,Ut=C.map(P=>!this._walk||!!Wn&&G([P.p[0],P.p[2]],Wn)),Cn=B.filter((P,R)=>Ut[R]);o.setAnchors(C.filter((P,R)=>Ut[R])),JSON.stringify(Cn)!==JSON.stringify(this._holos)&&(this._holos=Cn),o.setSolarLevels(y&&!this.dimmed?Rl(i,y):new Map);let Ln=!h||!(this.flows??this._flows)||this.dimmed?[]:$l({building:i,consumers:d,summary:p,battery:T??null,fieldPower:y,devicePower:this.devicePowers(r,i)}).map(P=>({floorId:P.floorId,a:P.a,b:P.b,dist:P.dist,power:P.power,color:Fl(P.kind,p)})),jt=this.poolPipes(r,i);o.setFlows(this.dimmed?Ln:[...Ln,...jt.flows]),o.setPipes(jt.tubes);let pi=[];o.setPersons(pi);let mc=rc(r,i,this.openingLinks,pi);o.setFloorInfo(new Map([...mc].map(([P,R])=>[P,ic(r,R)])));let On=r.states["sun.sun"]?.attributes,Bn=typeof On?.elevation=="number"?On.elevation:null;o.setSun(Bn!==null&&typeof On?.azimuth=="number"?{elevation:Bn,azimuth:On.azimuth}:null);let fi=this.weather&&!this.dimmed&&H("weather")?Na(r,Ot(r,this.weatherEntityId??i.settings.weather_entity),i.settings.rain_entity):null,qt=fi?Ka(fi,i.settings.weather_effects):null;this.cloud=qt?.cloud??0,this._sky=(Bn===null?0:Math.min(1,Math.max(0,(Bn+4)/16)))*(1-.45*this.cloud);let gc=qt?qt.sky:(i.settings.weather_effects??["sky"]).includes("sky");o.setWeather(this.weather&&!this.dimmed&&H("weather")?{...qt??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:gc}:null),this.watchLightning(!!qt?.lightning),this.applyTint();let mi=p.grid!==null||p.solar!==null||p.battery!==null||p.tariff!==null?p:null;JSON.stringify(mi)!==JSON.stringify(this._energy)&&(this._energy=mi);let gi=d.some(P=>P.wallbox)?d.filter(P=>P.wallbox).reduce((P,R)=>P+R.power,0):null,_i=i.floors.flatMap(P=>P.furniture.filter(R=>R.type==="inverter")).map(P=>{let R=this.furnitureLinks?.get(P.id)?.power,W=R?ie(r.states[R]):null;return W===null?null:{name:P.name||_e(r,P.type),w:Math.max(0,W)}}).filter(P=>!!P);JSON.stringify(_i)!==JSON.stringify(this._plants)&&(this._plants=_i),gi!==this._wallboxW&&(this._wallboxW=gi),this.watchSolarDay([...new Set(B.flatMap(P=>P.dayIds))]);let bi=H("energy_pro");this.watchMeters(bi?i.energy.gas??null:null,bi?i.energy.water??null:null),l&&(this.syncMs=this.syncMs*.8+(performance.now()-l)*.2)}listenReplay(){this.unlistenReplay?.(),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&this.viewer?.flashDevices(e.pulses),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){let t=this.hass,o=this.building;if(!t||!o)return;let i=(this.findIndex??=qr(t,o)).find(s=>s.entity===e);if(i){this.goTo(i);return}let r=t.entities?.[e]?.area_id??t.devices?.[t.entities?.[e]?.device_id??""]?.area_id??null;for(let s of o.floors){let a=s.openings.find(u=>{let p=this.openingLinks?.get(u.id);return!!p&&[p.contact,p.tilt,p.contact2,p.tilt2,p.cover].includes(e)}),l=s.rooms.find(u=>u.points.length>=3&&(a?u.id===a.room_id:!!r&&u.area_id===r));if(!l)continue;let[d,c]=xe(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:s.id,roomId:l.id,entity:e,icon:null,x:d,z:c,y:1});return}}now(){return this.replay?.t??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let o=!this.openingLinks||this.linkedRegistry!==t.entities,i=o?fn(t,e.floors):this.openingLinks,r=o?ct(t,e.floors):this.furnitureLinks,s=Cr(Wr(t,e,this.weatherEntityId)),a=ai(t,e,{openings:i,furniture:r,heat:!0,warnings:s,weatherEntityId:this.weatherEntityId}),l=H("auto_pro")?e.floors.flatMap(d=>d.furniture.filter(c=>c.type==="parking").flatMap(c=>[typeof c.entity=="string"?c.entity:null,c.car?eo(t,c).tracker:null]).filter(c=>!!c&&c.startsWith("device_tracker."))):[];return{entities:a,openings:[...i],furniture:[...r],low:this._low,cars:l,energy:H("energy_pro"),auto:H("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,t,o){this._menu=null,this._info={entity:e,x:t,y:o},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return S;let t=this.hass,o=t.states[e.entity],i=ge(t,o),r=I(e.entity)==="light"&&o?.state==="on"&&i.endsWith("%")?`${A(t,"state_on")} \xB7 ${i}`:i,s=o?.last_changed?A(t,"tt_since",{time:xo(t,Date.parse(o.last_changed))}):"";return w`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${Z(t,e.entity)}</span>
      <b>${s?`${r} \xB7 ${s}`:r}</b>
    </div>`}devicePowers(e,t){let o=new Map;for(let i of t.floors)for(let r of i.furniture){if(r.type!=="inverter"&&r.type!=="home_battery")continue;let s=this.furnitureLinks?.get(r.id)?.power,a=r.type==="home_battery"&&r.charge&&r.charge!=="none"?ie(e.states[r.charge]):null,l=s?ie(e.states[s],r.type==="home_battery"&&t.energy.battery_invert&&a===null):null;l!==null&&a!==null?l=Math.max(0,l)-Math.max(0,a):l===null&&a!==null&&(l=-Math.max(0,a)),l!==null&&o.set(r.id,l)}return o}detectionPins(e,t){let o=[],i=new Set(this.building?.floors.flatMap(r=>r.placements.filter(s=>s.detect_pins===!1).map(s=>s.entity_id))??[]);for(let r of t){if(!r.model?.startsWith("camera")||i.has(r.id))continue;let s=this.now(),a=Xe(e,r.id).filter(f=>{let g=e.states[f];return g?g.state==="on"?!0:g.state==="off"&&!!g.last_changed&&s-Date.parse(g.last_changed)<Ju:!1}),l=new Map;for(let f of a){let g=_a(e,f);l.has(g)||l.set(g,f)}l.size>1&&l.delete("motion");let d=(r.rotation??0)*Math.PI/180,c=[-Math.sin(d),Math.cos(d)],u=r.model==="camera_ceiling",p=0;for(let[f,g]of l){let m=e.states[g],h=m?.last_changed?xo(e,Date.parse(m.last_changed)):"";o.push({id:`detect:${g}`,floorId:r.floorId,roomId:r.roomId,x:r.x+(u?0:c[0]*1.1),z:r.z+(u?0:c[1]*1.1),y:1.4+.4*p++,icon:lc[f]??lc.motion,name:Z(e,g),text:`${A(e,`detect_${f}`)}${h?` \xB7 ${h}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return o}gridPin(e,t,o){let i=Nr(t);if(!i)return null;let r=Math.abs(o)<5,s=t.settings.outage_entity;return s&&fo(e.states[s])?{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:eh,name:A(e,"holo_grid"),text:A(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:Qu,name:A(e,"holo_grid"),text:r?re(e,0):`${A(e,o<0?"energy_grid_export":"energy_grid_import")} ${re(e,Math.abs(o))}`,active:!r,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,t){let o=[e,t].filter(s=>!!s),i=this.replay?"":o.join(",");if(i===this.meterKey)return;if(this.meterKey=i,clearInterval(this.meterTimer),this.meterTimer=void 0,!i){this._meters=null;return}let r=async()=>{if(!this.hass||document.hidden)return;let s=await yl(this.hass,o);this.meterKey===i&&s&&(this._meters={gas:e?s.get(e)??null:null,water:t?s.get(t)??null:null})};r(),this.meterTimer=setInterval(()=>{r()},3e5)}poolPipes(e,t){let o=H("pool"),r=[...new Map(t.floors.flatMap(l=>l.furniture.filter(d=>cn.includes(d.type)).map(d=>[d.id,d]))).values()].map(l=>({id:l.id,type:l.type,open:l.valve_open!==!1,valve:l.valve_position??null})),s=[],a=[];for(let{floor:l,area:d}of mt(t.floors)){let c=d.pool;if(!c.pipes?.length&&!c.joints?.length)continue;let u=ft(e,Bt(c,t.floors)),p=c.ports??[],f=Ql({pipes:c.pipes??[],ports:p,devices:r,pumpOn:o&&!!u.pump?.on,heaterOn:!!u.heater?.on,heating:!!u.heater?.heating}),g=tc(t,l,d),m=(h,v)=>ii(h,v,d,l);s.push(...ec(c.pipes??[],f,g,m));for(let h of p){if(h.kind!=="inlet")continue;let v=g(`port:${h.id}`),_=v&&si(d,[v.x,v.z]);if(!v||!_)continue;let b=(c.pipes??[]).find(z=>z.to===`port:${h.id}`),k=b?f.get(b.id):void 0;a.push({floorId:l.id,points:[[v.x+_[0]*.03,v.y,v.z+_[1]*.03],[v.x-_[0]*.09,v.y,v.z-_[1]*.09]],radius:.035,water:k?.active?Mo(k):null,fittings:[]})}for(let h of c.joints??[]){if(h.kind!=="wall"&&h.kind!=="floor")continue;let v=g(`joint:${h.id}:inside`),_=g(`joint:${h.id}:outside`),b=h.kind==="floor"?.03:v.y;a.push({floorId:l.id,points:[[v.x,b,v.z],[_.x,_.y,_.z]],radius:.05,water:null,fittings:[]})}for(let h of c.pipes??[]){let v=ii(Hn(h,g),h,d,l);if(v.length<2)continue;let _=f.get(h.id),b=[],k=ti(v);for(let[z,E]of[[h.from,.04],[h.to,k-.04]]){let T=z.startsWith("dev:")||z.startsWith("joint:")?$o(v,E):null;T&&b.push({kind:"sleeve",p:T.p,dir:T.dir})}for(let z of h.fittings??[]){let E=$o(v,z.at);E&&b.push({kind:z.kind,p:E.p,dir:E.dir,open:z.open!==!1})}a.push({floorId:h.floor_id,points:v,radius:.025,water:_?.active?Mo(_):null,fittings:b})}}return{flows:s,tubes:a}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let r=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(r===this.holoIds)return;this.holoIds=r,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let o=e.join(",");if(o===this.holoIds)return;if(this.holoIds=o,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let i=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let r=await El(this.hass,e);this.holoIds===o&&(this._rows=r)};i(),this.holoTimer=setInterval(()=>{i()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&i()}}holoBoxes=[];holoSizes=new Map;placeHolo(e,t,o,i,r,s){(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),d=this._holos[e]?.kind==="main";if(!a){d&&this._holoOn&&(this._holoOn=!1);return}d&&i!==this._holoOn&&(this._holoOn=i);let c=this._holos[e],u=(this.building?.settings.roof.hologram??Le).device_min_w??0;c?.kind==="device"&&u>0&&(c.w??0)<u&&(i=!1);let p=!i;if(a.hidden!==p&&(a.hidden=p),l&&l.hasAttribute("hidden")!==p&&l.toggleAttribute("hidden",p),!i)return;if(c?.kind==="bin"){let x=r*.8;a.style.transform=`translate(${t.toFixed(1)}px, ${o.toFixed(1)}px) scale(${x.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let f=r*.8,g=34*f,m=46*f,h=t+(s?g:-g),v=o-m,_=this.holoSizes.get(e),b=performance.now();(!_||b-_.at>2e3)&&(_={w:a.offsetWidth||184,h:a.offsetHeight||90,at:b},this.holoSizes.set(e,_));let k=_.w*f,z=_.h*f,E=s?h:h-k,T=E+k;for(let x=0;x<6;x++){let $=this.holoBoxes.find(M=>E<M.x1+4&&T>M.x0-4&&v-z<M.y1+4&&v>M.y0-4);if(!$)break;v=$.y0-6}this.holoBoxes.push({i:e,x0:E,x1:T,y0:v-z,y1:v});let y=s||(this.building?.settings.roof.hologram??Le).mirror!==!1;if(a.style.transform=y?`translate(${h.toFixed(1)}px, ${v.toFixed(1)}px) scale(${(s?f:-f).toFixed(3)}, ${f.toFixed(3)}) translate(0, -100%)`:`translate(${E.toFixed(1)}px, ${v.toFixed(1)}px) scale(${f.toFixed(3)}) translate(0, -100%)`,l){let x=l.firstElementChild,$=l.lastElementChild;x?.setAttribute("x1",t.toFixed(1)),x?.setAttribute("y1",o.toFixed(1)),x?.setAttribute("x2",h.toFixed(1)),x?.setAttribute("y2",v.toFixed(1)),$?.setAttribute("cx",t.toFixed(1)),$?.setAttribute("cy",o.toFixed(1))}}renderHologram(){let e=this._energy,t=()=>this._holos.map((r,s)=>r.kind==="bin"?this.renderBinCard(r,s):S);if(!(H("energy_pro")||H("sound")||H("auto_pro")||H("pool")||H("household"))||this.roomId&&!(this.building?.settings.roof.hologram??Le).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return H("household")?t():S;let o=this.floorId===null||(this.building?.floors.length??0)<=1,i=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&o;return this._holos.map((r,s)=>r.kind==="pool"?this.renderPoolCard(r,s):r.kind==="bin"?this.renderBinCard(r,s):r.kind==="car"?this.renderCarCard(r,s):r.kind==="media"?this.renderMediaCard(r,s):r.kind==="device"?this.renderDeviceCard(r,s):i?this.renderHoloCard(r,s,e):S)}renderBinCard(e,t){let o=e.bin;return w`<div class="fp3d-holo fp3d-holo-bin ${o.soon?"":"fp3d-holo-later"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="note" aria-label=${`${e.name}: ${o.when}`} style="--bin:${o.color}">
      <div class="fp3d-holo-body"><b>${o.when}</b><span>${e.name}</span></div>
    </div>`}renderCarCard(e,t){let o=this.hass,i=g=>A(o,g),r=e.car,s=!this.mediaFolded.has(r.spot),a=()=>{this.mediaFolded.has(r.spot)?this.mediaFolded.delete(r.spot):this.mediaFolded.add(r.spot),this.requestUpdate()},l=(g,m,h)=>{o.callService(g,m,{entity_id:h})},d=(g,m)=>g.startsWith("climate.")?l("climate",m?"turn_on":"turn_off",g):l("homeassistant",m?"turn_on":"turn_off",g),c=()=>{if(!r.lock)return;let g=r.lock.startsWith("lock.");if(r.locked){if(!confirm(i("car_unlock_confirm")))return;g?l("lock","unlock",r.lock):l("homeassistant","turn_off",r.lock)}else g?l("lock","lock",r.lock):l("homeassistant","turn_on",r.lock)},u=r.soc===null?"#37e0ff":r.soc>=50?"#4dff80":r.soc>=20?"#ffcc40":"#ff4d40",p=!!r.lock&&/^(lock|input_boolean|switch)\./.test(r.lock),f=!!r.climate&&/^(climate|switch|input_boolean)\./.test(r.climate);return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${r.charging?`\u26A1 ${i("car_charging_short")}`:r.locked===null?"":r.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${r.soc!==null?`${Math.round(r.soc)} %`:"\u2013"}</b>
            <span>${r.range!==null?`${J(o,r.range,0)} ${r.rangeUnit}`:""}${r.charging&&r.chargingW?` \xB7 ${re(o,r.chargingW)}`:""}</span>
          </div>
          ${r.soc!==null?w`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,r.soc))}%;background:${u}"></i></div>`:S}
          ${s&&!this.ro&&(p||f||r.charge)?w`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${p?w`<button title=${r.locked?i("car_unlock_btn"):i("car_lock_btn")} @click=${c}>${r.locked?"\u{1F512}":"\u{1F513}"}</button>`:S}
                ${f?w`<button class=${r.climateOn?"fp3d-holo-on":""} title=${i("car_climate")} @click=${()=>d(r.climate,!r.climateOn)}>❄</button>`:S}
                ${r.charge?w`<button class=${r.charging?"fp3d-holo-on":""} title=${i("car_charging")} @click=${()=>d(r.charge,!r.charging)}>⚡</button>`:S}
              </div>`:S}
        </div>
      </div>`}renderPoolCard(e,t){let o=this.hass,i=E=>A(o,E),{area:r,state:s}=e.pool,a=!this.mediaFolded.has(r),l=()=>{this.mediaFolded.has(r)?this.mediaFolded.delete(r):this.mediaFolded.add(r),this.requestUpdate()},d=(E,T,y,x={})=>{o.callService(E,T,{entity_id:y,...x})},c=s.heater,u=c?this.poolTarget.get(c.id):void 0;u&&c&&(c.target!==null&&Math.abs(u.v-c.target)<.01||Date.now()-u.at>3e4)&&this.poolTarget.delete(c.id);let p=(c&&this.poolTarget.get(c.id)?.v)??c?.target??null,f=E=>{if(!c||c.kind==="switch")return;let T=Math.min(c.max,Math.max(c.min,Math.round(E/c.step)*c.step));this.poolTarget.set(c.id,{v:T,at:Date.now()}),this.requestUpdate(),d(c.kind,"set_temperature",c.id,{temperature:T})},g=(E,T)=>J(o,E,T),m=s.temp===null?null:s.unit.includes("F")?(s.temp-32)*5/9:s.temp,h=m===null?"#37e0ff":m<20?"#5ab4ff":m<26?"#37e0ff":m<31?"#4dff9a":"#ffb347",v=E=>E==="ok"?"#4dff80":E==="warn"?"#ffcc40":"#ff4d40",_=(E,T,y)=>Math.max(3,Math.min(97,(E-T)/(y-T)*100)),b=(E,T,y,x)=>w`<div class="fp3d-holo-pool-chem"><span>${E}</span><b style="color:${v(y)}">${T}</b><i><em style="left:${x}%;background:${v(y)};color:${v(y)}"></em></i></div>`,k=c?.heating?`\u{1F525} ${i("pool_heating")}`:s.pump?.on?`\u3030 ${i("pool_pump_on")}`:"",z=E=>E.closed>.98?i("pool_cover_closed"):E.closed<.02?i("pool_cover_open"):`${Math.round(E.closed*100)} % ${i("pool_cover_closed_part")}`;return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-pool ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${l}><span>🏊 ${e.name}</span><span class="fp3d-holo-live">${k}</span></div>
          <div class="fp3d-holo-car-main">
            <b style="color:${h}">${s.temp!==null?`${g(s.temp,1)} ${s.unit}`:"\u2013"}</b>
            <span>${c&&p!==null&&c.kind!=="switch"?`\u2192 ${g(p,1)} ${s.unit}`:c?c.on?i("pool_heater_on"):i("pool_heater_off"):""}</span>
          </div>
          ${a&&s.ph?b("pH",g(s.ph.value,2),s.ph.range,_(s.ph.value,6.6,8)):S}
          ${a&&s.chlorine?b(s.chlorine.orp?i("pool_orp"):i("pool_chlorine"),`${g(s.chlorine.value,s.chlorine.orp?0:2)} ${s.chlorine.unit}`,s.chlorine.range,s.chlorine.orp?_(s.chlorine.value,500,900):_(s.chlorine.value,0,3)):S}
          ${a&&s.cover?w`<div class="fp3d-holo-pool-line">${i("pool_cover")}: ${z(s.cover)}</div>`:S}
          ${a?this.renderPoolValves(r):S}
          ${a&&!this.ro&&(c||s.pump?.switchable||s.light||s.cover)?w`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${c&&c.kind!=="switch"&&p!==null?w`<button title=${i("pool_colder")} @click=${()=>f(p-c.step)}>−</button
                    ><button title=${i("pool_warmer")} @click=${()=>f(p+c.step)}>+</button>`:S}
                ${c?w`<button class=${c.on?"fp3d-holo-on":""} title=${i("pool_heater")} @click=${()=>c.kind==="switch"?d("homeassistant",c.on?"turn_off":"turn_on",c.id):d(c.kind,c.on?"turn_off":"turn_on",c.id)}>🔥</button>`:S}
                ${s.pump?.switchable?w`<button class=${s.pump.on?"fp3d-holo-on":""} title=${i("pool_pump")} @click=${()=>d("homeassistant",s.pump.on?"turn_off":"turn_on",s.pump.id)}>〰</button>`:S}
                ${s.light?w`<button class=${s.light.on?"fp3d-holo-on":""} title=${i("pool_light")} @click=${()=>d("homeassistant","toggle",s.light.id)}>💡</button>`:S}
                ${s.cover?w`<button
                      title=${s.cover.moving?i("pool_cover_stop"):s.cover.closed>.5?i("pool_cover_open_btn"):i("pool_cover_close_btn")}
                      @click=${()=>d("cover",s.cover.moving?"stop_cover":s.cover.closed>.5?"open_cover":"close_cover",s.cover.id)}
                    >
                      ${s.cover.moving?"\u23F9":s.cover.closed>.5?"\u25B2":"\u25BC"}
                    </button>`:S}
              </div>`:S}
        </div>
      </div>`}renderPoolValves(e){let t=this.building,o=this.hass;if(!t||!H("pool")||!o?.user?.is_admin||this.ro)return S;let i=m=>A(o,m),r=t.floors.find(m=>m.outdoor.some(h=>h.id===e)),s=r?.outdoor.find(m=>m.id===e)?.pool;if(!r||!s)return S;let a=m=>{let[h,v]=m.split(":");if(h==="port"){let _=s.ports?.find(b=>b.id===v);return _?i(`pool_port_${_.kind}`):"?"}if(h==="joint")return s.joints?.find(_=>_.id===v)?.name||i("pool_joint");if(h==="dev"){let _=r.furniture.find(b=>b.id===v);return _?_.name||i(`furn_${_.type}`):"?"}return"\u2026"},l=(s.pipes??[]).flatMap(m=>(m.fittings??[]).filter(h=>h.kind==="valve").map(h=>({pipe:m,f:h}))),d=r.furniture.filter(m=>m.type==="pool_valve"),c=r.furniture.find(m=>m.type==="pool_filter");if(!l.length&&!d.length&&!c)return S;let u=m=>{let h=structuredClone(t);m(h),this.building=h,Un(o,h).catch(v=>this.serviceFailed("neonplan3d/building/save",v))},p=m=>m.floors.find(h=>h.id===r.id).outdoor.find(h=>h.id===e).pool,f=(m,h,v)=>w`<button class="fp3d-holo-valve ${m?"fp3d-holo-on":""}" title=${i("pool_valve_toggle")} @click=${v}><i>${m?"\u25CF":"\u25CB"}</i>${h}<small>${i(m?"pool_valve_open":"pool_valve_shut")}</small></button>`,g=["filter","backwash","rinse","recirculate","waste","closed"];return w`<div class="fp3d-holo-valves">
      ${c?w`<div class="fp3d-holo-pool-line">${i("furn_pool_filter")}</div>
            <div class="fp3d-holo-valve-pos">
              ${g.map(m=>w`<button class=${(c.valve_position??"filter")===m?"fp3d-holo-on":""} @click=${()=>u(h=>h.floors.find(v=>v.id===r.id).furniture.find(v=>v.id===c.id).valve_position=m==="filter"?null:m)}>${i(`valve_${m}`)}</button>`)}
            </div>`:S}
      ${l.length||d.length?w`<div class="fp3d-holo-pool-line">${i("pool_valves")}</div>`:S}
      ${l.map(({pipe:m,f:h})=>f(h.open!==!1,`${a(m.from)} \u2192 ${a(m.to)}`,()=>u(v=>{let _=p(v).pipes?.find(b=>b.id===m.id)?.fittings?.find(b=>b.id===h.id);_&&(_.open=h.open===!1)})))}
      ${d.map(m=>f(m.valve_open!==!1,m.name||i("furn_pool_valve"),()=>u(h=>{let v=h.floors.find(_=>_.id===r.id).furniture.find(_=>_.id===m.id);v&&(v.valve_open=m.valve_open===!1)})))}
    </div>`}serviceFailed(e,t){let o=t&&typeof t=="object"&&"message"in t?String(t.message):String(t);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${o}`},bubbles:!0,composed:!0}))}renderMediaCard(e,t){let o=this.hass,i=_=>A(o,_),r=e.media,s=!this.mediaFolded.has(r.id),a=()=>{this.mediaFolded.has(r.id)?this.mediaFolded.delete(r.id):this.mediaFolded.add(r.id),this.requestUpdate()},l=(_,b={})=>{Promise.resolve(o.callService("media_player",_,{entity_id:r.id,...b})).catch(k=>this.serviceFailed(`media_player.${_}`,k))},d={down:_=>_.currentTarget.dataset.pressed=String(_.pointerId),up:_=>b=>{let k=b.currentTarget;k.dataset.pressed===String(b.pointerId)&&(delete k.dataset.pressed,b.stopPropagation(),k.dataset.acted=String(Date.now()),_())},key:_=>b=>{let k=b.currentTarget;Date.now()-Number(k.dataset.acted??0)<700||(k.dataset.acted=String(Date.now()),_())}},c=o.states[r.id]?.attributes.supported_features,u=_=>typeof c!="number"||(c&_)!==0,p=this.mediaIntent.get(r.id);p&&(p.playing===r.playing||Date.now()-p.at>3e4)&&this.mediaIntent.delete(r.id);let f=this.mediaIntent.get(r.id)?.playing??r.playing,g=()=>{this.mediaIntent.set(r.id,{playing:!f,at:Date.now()}),this.requestUpdate(),l(f?"media_pause":"media_play")},m=this.mediaVolume.get(r.id);m&&(Math.abs(m.v-r.volume)<=2||Date.now()-m.at>3e4)&&this.mediaVolume.delete(r.id);let h=this.mediaVolume.get(r.id)?.v??r.volume,v=(_,b)=>{this.mediaVolume.set(r.id,{v:_,at:Date.now()}),this.requestUpdate(),(b||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:_/100}))};return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${f?`\u25CF ${i("holo_media_playing")}`:i("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${r.picture?w`<img class="fp3d-holo-cover" src=${r.picture} alt="" />`:w`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${r.title}</b>${r.artist?w`<span>${r.artist}</span>`:S}</div>
        </div>
        ${s&&!this.ro?w`<div class="fp3d-holo-media-controls">
                <button aria-label=${i("previous")} ?disabled=${!u(16)} @pointerdown=${d.down} @pointerup=${d.up(()=>l("media_previous_track"))} @click=${d.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${i("play_pause")} ?disabled=${f?!u(1):!u(16384)} @pointerdown=${d.down} @pointerup=${d.up(g)} @click=${d.key(g)}>${f?"\u23F8":"\u25B6"}</button>
                <button aria-label=${i("next")} ?disabled=${!u(32)} @pointerdown=${d.down} @pointerup=${d.up(()=>l("media_next_track"))} @click=${d.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(h)}
                  aria-label=${i("volume")}
                  @input=${_=>v(Number(_.target.value),!1)}
                  @change=${_=>v(Number(_.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${h} %</span>
              </div>`:S}
      </div>
    </div>`}renderDeviceCard(e,t){let o=this.hass,i=d=>A(o,d),r=!this.holoFolded.has(t),s=this.dayOf(e),a=s&&s.curve.length>1?Kr(s.curve,s.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${re(o,e.w??0)}</b><span>${i("holo_dev_now")}</span></div>
        ${r&&s?w`<div class="fp3d-holo-sub">${i("holo_today")} <b>${J(o,s.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${re(o,s.peak)}</b></div>`:S}
        ${r&&a?nn`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:S}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(o=>this._rows[o]).map(o=>[o,this._rows[o]]));return Object.keys(t).length?zl(t,new Date(this.now())):null}renderHoloCard(e,t,o){let i=this.hass,r=h=>A(i,h),s=!this.holoFolded.has(t),a=this.dayOf(e),l=e.kind==="main",d=l&&o.consumption!==null&&o.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,o.grid??0)/o.consumption)*100))):null,c=a&&a.curve.length>1?Kr(a.curve,a.peak):null,u=new Date(this.now()),p=(u.getHours()+u.getMinutes()/60)/24*220,f=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},g=l?o.solar??o.consumption??0:e.w??0,m=l?o.battery!==null||o.soc!==null?{soc:o.soc,w:o.battery}:null:e.battery;return w`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${f}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${re(i,g)}</b><span>${r(l&&o.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${s?w`${l&&this._plants.length>1?w`<div class="fp3d-holo-plants">${this._plants.map(h=>w`<span>${h.name}</span><b>${re(i,h.w)}</b>`)}</div>`:S}
              ${a?w`<div class="fp3d-holo-sub">${r("holo_today")} <b>${J(i,a.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${re(i,a.peak)}</b></div>`:S}
              ${c?nn`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${c.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${c.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${c.endX}" cy="${c.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${p}" y1="2" x2="${p}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:S}
              <div class="fp3d-holo-grid">
                ${m?w`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${r("holo_battery")}<br /><b>${m.soc!==null?`${Math.round(m.soc)} %`:re(i,Math.abs(m.w??0))}</b>
                      ${m.w!==null&&Math.abs(m.w)>=5?w`<span>${m.w<0?"\u25B2":"\u25BC"} ${re(i,Math.abs(m.w))}</span>`:S}
                    </div>`:S}
                ${l&&o.grid!==null?w`<div class="fp3d-holo-cell ${o.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${r("holo_grid")}<br /><b>${re(i,Math.abs(o.grid))}</b> <span>${Math.abs(o.grid)<5?"":r(o.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:S}
                ${l&&o.consumption!==null?w`<div class="fp3d-holo-cell fp3d-holo-house">${r("holo_house")}<br /><b>${re(i,o.consumption)}</b></div>`:S}
                ${l&&this._wallboxW!==null?w`<div class="fp3d-holo-cell fp3d-holo-wb">${r("holo_wallbox")}<br /><b>${re(i,this._wallboxW)}</b></div>`:S}
              </div>
              ${l&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?w`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?w`<span>🔥 ${r("holo_gas")} <b>${J(i,this._meters.gas,this._meters.gas<10?2:1)} ${ac(i,this.building?.energy.gas)}</b></span>`:S}
                    ${this._meters.water!==null?w`<span>💧 ${r("holo_water")} <b>${Yu(i,this._meters.water,ac(i,this.building?.energy.water))}</b></span>`:S}
                    <span>${r("holo_today_short")}</span>
                  </div>`:S}
              ${d!==null?w`<div class="fp3d-holo-bar"><div style="width:${d}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${r("holo_autarky")}</span><b>${d} %</b></div>`:S}`:S}
      </div>
    </div>`}setAlerts(e){let t=e.map(r=>`${r.kind}:${r.entity}`),o=this.ro?[]:e.filter((r,s)=>!this.seenAlerts.has(t[s]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(r=>`${r.kind}:${r.entity}`).join()&&(this._alerts=e);let i=e.some(r=>!r.kind.startsWith("pool_"));i&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!i||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),o.length&&this.alertJump&&this.jumpTo(o[0])}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let o=this.building,i=this.hass,r=o?.floors.find(c=>c.id===e),s=r?.rooms.find(c=>c.id===t);if(!o||!i||!r||!s||this.ro)return;let a=new Set(le(i,s.area_id).filter(c=>I(c)==="light"));for(let c of r.placements)I(c.entity_id)==="light"&&G([c.x,c.z],s.points)&&a.add(c.entity_id);for(let c of r.furniture){let u=this.furnitureLinks.get(c.id)?.entity;u&&Yo(c.type)&&G([c.x,c.z],s.points)&&a.add(u)}let l=[...a].filter(c=>!this.confirmSet.has(c));if(!l.length)return;let d=l.some(c=>i.states[c]?.state==="on");i.callService("homeassistant",d?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,t=this.building,o=this.hass;if(!e||!t||!o)return;let i=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=Il(o,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,i=new Map([...l].map(([d,c])=>[d,Dl(a,c)]))}let r=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of a.rooms){let d=je(o,a,l,"temperature"),c=je(o,a,l,"humidity"),u=je(o,a,l,"co2"),p=[d!==null?`${J(o,Et(o,d),1)} ${Ee(o)}`:null,c!==null?`${J(o,c,0)} %`:null,u!==null?`${J(o,u,0)} ppm`:null].filter(f=>!!f);p.length&&r.set(l.id,p.join(" \xB7 "))}if(e.setRoomInfo(r),this._alerts.length){i??=new Map;let a=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.kind.startsWith("pool_"))continue;let d=fl(l.kind).map(c=>c*a);if(l.roomId)i.set(l.roomId,d);else for(let c of t.floors)if(!l.floorId||c.id===l.floorId)for(let u of c.rooms)i.set(u.id,d)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let s=i?[...i].map(([a,l])=>`${a}:${l.map(d=>d.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(i))}furnitureMarkers(e,t,o,i){let r=[],s=[],a=new Map,l=new Map,d=H("household"),c=[];this.binHolos=[];let u=H("pool")?mt(t.floors)[0]:void 0,p=u&&this.building?ft(e,Bt(u.area.pool,this.building.floors)):u?ft(e,u.area.pool):null;for(let m of t.floors)for(let h of m.furniture){let v=this.furnitureLinks.get(h.id),_=this.stateFaces(e,h);if(_.length&&a.set(h.id,{color:_[0].color,level:_[0].level,faces:_}),Yo(h.type)){r.push(this.lampMarker(e,m,h,v?.entity??null));continue}if(p&&cn.includes(h.type)){let L=h.valve_position??"filter";h.type==="pool_pump"&&p.pump?.on?a.set(h.id,{color:[.3,.8,1],level:.85}):h.type==="pool_heat_pump"&&p.heater?.heating?a.set(h.id,{color:[1,.45,.15],level:.85}):h.type==="pool_heat_pump"&&p.heater?.on?a.set(h.id,{color:[.3,.8,1],level:.35}):h.type==="pool_filter"?a.set(h.id,L==="closed"?{color:[1,.3,.25],level:.6}:L==="filter"||L==="recirculate"?{color:[.3,1,.6],level:p.pump?.on?.8:.3}:{color:[1,.62,.2],level:.85}):h.type==="pool_dosing"&&p.pump?.on&&a.set(h.id,{color:[.6,.9,1],level:.5})}let b=(h.type==="plant"||Xa(h.type))&&!!h.moisture&&h.moisture!=="none";if(h.type==="waste_bin"||h.type==="mailbox"||b){let L=d?this.householdState(e,m,h):null;L?.screen&&a.set(h.id,L.screen),L?.marker&&r.push(L.marker);let ee=h.type==="waste_bin"?h.bin_source:h.type==="mailbox"?h.entity:h.moisture;if(d&&typeof ee=="string"&&ee!=="none"&&l.set(h.id,`hh:${ee}#${h.id}`),L?.item&&c.push(L.item),!b)continue}d&&(h.service&&h.service!=="none"&&cl(h,e)&&(a.has(h.id)||a.set(h.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]}),c.push({icon:"wrench-outline",text:A(e,"hh_service",{name:h.name||_e(e,h.type)}),entity:h.service})),(h.type==="fridge"||h.type==="fridge_smart")&&_o(h,e)&&(a.set(h.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),c.push({icon:"fridge-alert-outline",text:A(e,"hh_fridge_open",{name:h.name||_e(e,h.type)}),entity:tt(h)[0]??null})));let z=h.type==="parking"&&H("auto_pro")&&!!h.car?to(e,h):null,E=h.type==="washer"||h.type==="dryer"||h.type==="dishwasher",T=h.type==="home_battery"?h.soc:h.type==="wallbox"?h.status:h.type==="parking"&&z?h.car?.device??z.entities.soc:d&&E?h.remaining??null:null,y=T&&T!=="none"?T:null,x=v??(y?{entity:null,power:null}:void 0);if(!x)continue;let $=h.type==="home_battery"?y??x.entity??x.power:x.entity??x.power??y;l.set(h.id,$);let M=x.entity?e.states[x.entity]:void 0,F=h.type==="meter"?t.energy.grid_invert&&!h.export:h.type==="home_battery"?t.energy.battery_invert&&!h.charge:!1,N=x.power?ie(e.states[x.power],F):null,O=h.type==="home_battery"&&h.charge&&h.charge!=="none"?h.charge:h.type==="meter"&&h.export&&h.export!=="none"?h.export:null,C=O?ie(e.states[O]):null;C!==null&&(N=Math.max(0,N??0)-Math.max(0,C)),x.power&&N!==null&&!i.has(x.power)&&(i.add(x.power),s.push({id:$,powerEntity:x.power,floorId:m.id,x:h.x,z:h.z,power:Math.max(0,N),wallbox:h.type==="wallbox"||void 0}));let B=typeof h.run_w=="number"&&h.run_w>0?h.run_w:10,ne=(N??0)>B||M?.state==="on"||M?.state==="running"||ar(M)&&Oe(M),Q=null;if(d&&E){let L=h.remaining&&h.remaining!=="none"?e.states[h.remaining]:void 0,ee=al(L),be=ne||!x.power&&!x.entity&&(ee??0)>0,Ie=tt(h),ve=Cn=>Ie.some(Ln=>{let jt=e.states[Ln];return!!jt?.last_changed&&Date.parse(jt.last_changed)>Cn}),Wn=this.finished.update(h.id,be,ve),Ut=h.name||(x.entity?Z(e,x.entity):_e(e,h.type));be?(ne||a.set(h.id,{color:[.3,.85,1],level:.8}),ee!==null&&(Q=A(e,"hh_left",{t:ll(ee)}),c.push({icon:"timer-outline",text:`${Ut}: ${Q}`,entity:h.remaining??x.entity}))):(Hr(M)||Hr(L)||Wn)&&(Q=A(e,"hh_done"),a.set(h.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),c.push({icon:"check-circle-outline",text:A(e,"hh_finished",{name:Ut}),entity:x.entity??x.power}))}if(z&&Tn(e,h)){let L=[];if(z.soc!==null){let ee=z.soc>=50?[.3,1,.5]:z.soc>=20?[1,.8,.25]:[1,.3,.25];L.push({part:"band",color:ee,level:z.charging?1:.6})}if(z.locked===!1&&L.push({part:"lights",color:[1,.42,.02],level:1}),z.climateOn){let ee=z.entities.climate?e.states[z.entities.climate]:void 0,be=!!ee&&(ee.attributes.hvac_action==="cooling"||ee.state==="cool");L.push({part:"cabin",color:be?[.45,.8,1]:[1,.55,.22],level:.35})}L.length&&a.set(`${h.id}:vehicle`,{color:L[0].color,level:L[0].level,faces:L})}if(h.type==="radiator"&&M&&I(M.entity_id)==="climate"){let L=M.attributes;if(L.hvac_action==="heating"){let ee=typeof L.temperature=="number"&&typeof L.current_temperature=="number"?L.temperature-L.current_temperature:1;a.set(h.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,ee))})}}else if((h.type==="ac_unit"||on(h.type))&&M&&I(M.entity_id)==="climate"){let L=Js(M);L&&a.set(h.id,L)}else if((h.type==="washer"||h.type==="dryer"||h.type==="dishwasher")&&ne)a.set(h.id,{color:[.3,.85,1],level:.8});else if(h.type==="stove"||qo(h.type)){let L=Ys(M,ne);L>0&&a.set(h.id,{color:[1,.05,.01],level:L,faces:[{part:"burners",color:[1,.05,.01],level:L}]})}let te=ue(h.type),ce=!!te&&!te.light&&te.parts.some(L=>L.glow);if(M&&ce&&H("sound")&&I(M.entity_id)==="media"&&M.state==="playing"&&!Qn(h.type)){let L=typeof M.attributes.volume_level=="number"?M.attributes.volume_level:.5;a.set(h.id,{color:hr(M)??[.22,.88,1],level:.5+.5*L,ring:!0,plain:!0})}if(M&&Qn(h.type)&&!qo(h.type)&&!on(h.type)){let L=H("screens"),ee=I(M.entity_id)==="light"?qe(M):null,be=I(M.entity_id)==="media"&&["playing","on","paused","idle"].includes(M.state),Ie=L&&I(M.entity_id)==="media"?hr(M):ee?ee.color:Oe(M)||be?[.22,.88,1]:null,ve=L&&I(M.entity_id)==="media"?M.attributes.entity_picture??null:null;Ie&&a.set(h.id,{color:Ie,level:M.state==="playing"?1:.6,picture:ve,ring:ce&&H("sound")&&M.state==="playing"})}if(te||o.has($))continue;o.add($);let he=x.entity?I(x.entity):null,Pe=m.rooms.find(L=>L.points.length>=3&&G([h.x,h.z],L.points));r.push({id:$,floorId:m.id,roomId:Pe?.id??null,x:h.x,z:h.z,y:rh(h)+pe(m,h),icon:h.icon?ro(h.icon):_n(he??"switch"),name:h.name||(x.entity?Z(e,x.entity):_e(e,h.type)),ownName:h.name||void 0,showName:!!h.show_name,text:Q??(z?this.carText(e,z,!!M&&!Ur.has(M.state.toLowerCase())):h.type==="home_battery"?this.batteryText(e,y,N):h.type==="wallbox"?this.wallboxText(e,y,N):h.type==="meter"?this.meterText(e,N):M?ge(e,M):N!==null?re(e,Math.max(0,N)):""),active:Q?!0:z?z.charging:M?Oe(M):(N??0)>(typeof h.run_w=="number"&&h.run_w>0?h.run_w:5),unavailable:M?K(M):!1,glow:null,furnitureId:h.id,energyDevice:h.type==="inverter"||h.type==="home_battery"||h.type==="wallbox"||h.type==="meter"||!!z,show:h.marker??(z||Q?"always":void 0),fromFurniture:!0})}this._household=c.filter((m,h)=>c.findIndex(v=>v.text===m.text)===h),this.cameraScreens=0;let f=dr(e,t.floors),g=H("screens");for(let m of t.floors)for(let h of m.furniture){if(!g||!h.pictures?.length||!Qn(h.type)||h.type==="fridge_smart"&&f.get(h.id)?.right)continue;let v=h.pictures.find(k=>ta(e,k));if(!v)continue;let _=this.pictureUrl(v.image),b=h.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];_&&a.set(h.id,{color:b,level:1,picture:_,plain:!0})}return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall),{markers:r,consumers:s,screens:a,targets:l}}watchHousehold(e,t){let o=t.floors.flatMap(l=>l.furniture).filter(l=>l.type==="waste_bin"||l.type==="mailbox"),i=H("household")&&o.length>0&&!this.replay,r=i?tl(t.floors):[],s=r.join(",");if(!i){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let a=async()=>{r.length&&(this.pickups=await Dr(this.hass??e,r)),this.syncDevices(!0)};(s!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=s,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void a(),6e5),r.length&&Dr(e,r).then(l=>{this.pickups=l,this.syncDevices(!0)}))}householdState(e,t,o){let i=l=>{let d=parseInt(l.slice(1),16);return[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255]};if(o.type==="waste_bin"){let l=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!l)return null;let d=Ir(o,e,this.pickups,new Date,{from:this.building?.settings.household?.bin_from,until:this.building?.settings.household?.bin_until});if(!d)return null;let c=d.days===0?A(e,"bin_today"):d.days===1?A(e,"bin_tomorrow"):A(e,"bin_in_days",{n:d.days}),u=i(el(o)[1]),p=Math.max(...u),g=p-Math.min(...u)<.12?[.92,.95,1]:u.map(v=>Math.min(1,v/Math.max(.001,p)*1.05)),m=o.name||A(e,`bin_kind_${o.bin_kind??"rest"}`),h=`#${g.map(v=>Math.round(v*255).toString(16).padStart(2,"0")).join("")}`;return this.binHolos.push({floorId:t.id,x:o.x,z:o.z,y:pe(t,o)+o.h,name:m,color:h,when:c,soon:d.days<=1}),{item:d.days<=1?{icon:"trash-can-outline",text:`${m}: ${c}`,entity:l,hot:d.glow}:void 0}}if(o.type!=="mailbox"){let l=sl(o,e),d=[1,.55,.12],c=o.name||_e(e,o.type);return l?(this.binHolos.push({floorId:t.id,x:o.x,z:o.z,y:pe(t,o)+o.h,name:c,color:"#ff8c1f",when:A(e,"hh_thirsty"),soon:!0}),{screen:{color:d,level:.9,faces:[{part:"band",color:d,level:.9}]},item:{icon:"watering-can-outline",text:A(e,"hh_plant",{name:c}),entity:o.moisture??null,hot:!0}}):null}let r=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!r)return null;let s=ol(o,e),a=[1,.62,.15];return s&&this.binHolos.push({floorId:t.id,x:o.x,z:o.z,y:pe(t,o)+o.h,name:o.name||_e(e,o.type),color:"#ffb547",when:A(e,"mailbox_post"),soon:!0}),{screen:s?{color:a,level:1,faces:[{part:"top",color:a,level:1},{part:"band",color:a,level:.8}]}:void 0,item:s?{icon:"email-alert-outline",text:o.name?`${o.name}: ${A(e,"mailbox_post")}`:A(e,"mailbox_post"),entity:r,hot:!0}:void 0}}robotPaths(e,t){let o=this.replay;if(!o)return[];let i=[];for(let r of t.floors){let s=r.rooms.filter(a=>a.points.length>=3);for(let a of r.furniture){if(!$t(a.type))continue;let l=this.furnitureLinks?.get(a.id)?.entity??null;if(!l)continue;let d=o.robotRooms(l,mn(e,l,a.room_sensor)),c=[];for(let u of d){let p=pr(e,s,u),f=p?xe(p.points):null,g=c[c.length-1];f&&(!g||g[0]!==f[0]||g[1]!==f[1])&&c.push([f[0],f[1]])}c.length&&i.push({floorId:r.id,points:c})}}return i}trailNow(e,t){let o=this.now(),i=Dn(e,t),r=this.replay?this.replay.rows(i.map(a=>a.entity),o-Fn,o):this.trailRows,s=i.map(a=>{let l=e.states[a.entity];return{entity:a.entity,state:l?.state,lastChanged:l?.last_changed?Date.parse(l.last_changed):void 0}});return Bl(i,Ol(r,s,o),o)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!H("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!H("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,o=this.building;if(!t||!o||document.hidden)return;let i=Dn(t,o).map(r=>r.entity);if(i.length){try{let r=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-Fn).toISOString(),entity_ids:i,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=r??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],o=t?.attributes.entity_picture;return!o||K(t)?null:(this.cameraScreens++,o.startsWith("data:")?o:`${o}${o.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),Xi(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let o=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(i=>{if(o.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||pe(e,i)>.12)return!1;let r=ue(i.type);return r&&(r.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:G([i.x,i.z],t)||Mt(i).some(s=>G(s,t))}).map(i=>Mt(i))}robotInfos(e,t){let o=[];for(let i of t.floors)for(let r of i.furniture){if(!$t(r.type))continue;let s=this.furnitureLinks.get(r.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=lr(a)?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",d=r.rotation*Math.PI/180,c=St(r.type),u=r.d*(c?.227:.14),p=[r.x-Math.sin(d)*u,r.z+Math.cos(d)*u],f=i.rooms.filter(v=>v.points.length>=3),m=(l==="cleaning"?sa(e,f,s,mn(e,s,r.room_sensor)):null)??f.find(v=>G(p,v.points)),h=l==="cleaning"&&m?this.robotObstacles(i,m.points):[];o.push({id:r.id,floorId:i.id,rest:p,restHeading:-d,mode:l,room:m?.points??null,roomId:m?.id??null,obstacles:h,...c?{inModel:c}:{}})}return o}batteryText(e,t,o){let i=t?Number(e.states[t]?.state):Number.NaN,r=[];return Number.isFinite(i)&&r.push(`${J(e,i,0)} %`),o!==null&&Math.abs(o)>=10&&r.push(`${o<0?"\u25B2":"\u25BC"} ${re(e,Math.abs(o))}`),r.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?re(e,0):`${A(e,t<0?"energy_grid_export":"energy_grid_import")} ${re(e,Math.abs(t))}`}wallboxText(e,t,o){let i=t?e.states[t]:void 0,r=String(i?.state??"").toLowerCase(),s=(o??0)>50||/charg|laden|lädt/.test(r),a=i?.entity_id.startsWith("binary_sensor.")?r==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(r),l=s?A(e,"wallbox_charging"):a?A(e,"wallbox_plugged"):i&&!K(i)&&!i.entity_id.startsWith("binary_sensor.")?ge(e,i):"",d=o!==null&&o>50?re(e,o):"";return[l,d].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let o=[],i=t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[r,s]of i){if(!r||r==="none")continue;let a=e.states[r];if(!a||K(a)||!(Oe(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let d=I(r)==="light"?qe(a):null;o.push({part:s,color:d?d.color:[1,.71,.28],level:d?d.level:.85})}return o}carText(e,t,o){let i=s=>A(e,s);if(o||t.away!==null){let s=t.away?` \xB7 ${t.away}`:"";return`${i("car_away")}${s}`}let r=[];return t.soc!==null&&r.push(`${J(e,t.soc,0)} %`),t.range!==null&&r.push(`${J(e,t.range,0)} ${t.rangeUnit}`),t.charging?r.push(t.chargingW!==null?`\u26A1 ${re(e,t.chargingW)}`:`\u26A1 ${i("car_charging_short")}`):t.plugged&&r.push("\u{1F50C}"),t.locked!==null&&r.push(t.locked?"\u{1F512}":"\u{1F513}"),r.join(" \xB7 ")}ceilingAt(e,t,o){let i=lt(e,t,o),r=this.building;if(!r||!(r.settings.roof.sections??[]).some(a=>Ma(a,e.elevation+i)))return i;let s=Pa(r,t,o);return s===null?i:Math.max(.5,Math.min(i,s-e.elevation))}lampMarker(e,t,o,i){let r=i?e.states[i]:void 0,s=ue(o.type),a=Hs[o.type]??s?.light??"floor",l=t.rooms.some(_=>_.points.length>=3&&G([o.x,o.z],_.points)),d=a==="strip"&&!l?sn(t,o.x,o.z)+(o.mount_y??0):o.mount_y!=null&&!s?Ce(t,o.x,o.z)+o.mount_y:s||a==="wall"||a==="strip"?pe(t,o):a==="table"?Xn(t,o.x,o.z):a==="bollard"||a==="garden"?l?Ce(t,o.x,o.z):sn(t,o.x,o.z):Ce(t,o.x,o.z),c=t.rooms.find(_=>_.points.length>=3&&G([o.x,o.z],_.points)),u=this.ceilingAt(t,o.x,o.z),p=(s?s.mount==="ceiling":["ceiling","downlight","spot","panel","pendant"].includes(a))&&o.mount_y==null,f=p?lt(t,o.x,o.z)-u:0,g=s&&p?Math.max(0,d-f):d,m=qn.has(o.type)&&o.mount_y!=null?Ce(t,o.x,o.z)+o.mount_y+Zn(o.type,o.h):u,h=m??t.height,v=s?s.mount==="ceiling"?Math.max(.5,g-.15):g+o.h+.2:{ceiling:h-.3,downlight:h-.25,spot:h-.35,panel:h-.25,pendant:Math.max(.6,h-o.h-.25),floor:g+o.h+.25,uplight:g+o.h+.25,table:g+o.h+.2,wall:g+o.h+.2,strip:o.upright?g+o.w+.15:Math.max(.3,g-.2),bollard:g+o.h+.25,garden:g+o.h+.25}[a];return{id:i??`lamp:${o.id}`,floorId:t.id,roomId:c?.id??null,x:o.x,z:o.z,y:v,icon:_n("light"),name:o.name||(i?Z(e,i):_e(e,o.type)),text:r?ge(e,r):"",active:r?Oe(r):!1,unavailable:r?K(r):!1,glow:r?br(Qs(qe(r,o.color_entity&&o.color_entity!=="none"?e.states[o.color_entity]:void 0),o.only_color),o.glow_scale):null,lamp:a,rotation:o.rotation,mirror:!!o.mirror,rotation_x:o.rotation_x??0,beam_angle:o.beam_angle,rotation_z:o.rotation_z??0,pivot_y:s?g+o.h/2:["ceiling","downlight","spot","panel","pendant"].includes(a)?h-o.h/2:g+(a==="strip"&&o.upright?o.w:o.h)/2,roll:o.tilt??0,upright:!!o.upright,size:[o.w,o.d,o.h],base:g,top:m,pickable:!!i,furnitureId:o.id,pack:s?o.type:null,lightY:s?s.mount==="ceiling"?g:g+o.h*.85:void 0,effect:!!r&&r.state==="on"&&typeof r.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(r.attributes.effect.trim()),variant:o.variant,show:o.marker??void 0,fromFurniture:!0}}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(e.lamp||e.model)return!1;let t=I(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,o]of this.openingLinks??[]){let i=o.cover??o.contact??o.tilt;i&&e.set(t,i)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(i=>i.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let o=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},o)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return S;let e=new Map(this.building.floors.map(r=>[r.id,r.name])),t=[...this._thumbs].sort((r,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===r.floorId)?.elevation??0)),o=this._thumbsCompact,i=()=>{this._thumbsCompact=!o;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return w`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${o?"fp3d-thumbs-compact":""}" aria-label=${A(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${A(this.hass,o?"thumbs_show":"thumbs_fold")} aria-label=${A(this.hass,o?"thumbs_show":"thumbs_fold")} @click=${i}>${o?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${A(this.hass,"all_floors")}</span>
      </button>
      ${t.map(r=>w`<button class="fp3d-thumb" aria-pressed=${this.floorId===r.floorId} @click=${()=>this.fire("floor-tap",{floorId:r.floorId})}>
          ${o?S:w`<img src=${r.url} alt="" />`}
          <span>${e.get(r.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,o){if(this.ro){this.onDeviceTap(e,t,o);return}if(H("auto_pro")&&this.hass&&this.building)for(let r of this.building.floors)for(let s of r.furniture){if(s.type!=="parking"||!s.car)continue;let a=to(this.hass,s);if([s.entity,s.car.device,...Object.values(a.entities)].filter(d=>!!d&&d!=="none").includes(e)){this._menu={entity:e,x:t,y:o,car:a};return}}let i=I(e);i==="light"||i==="cover"||i==="switch"||i==="fan"||i==="lock"||i==="camera"?this._menu={entity:e,x:t,y:o}:Se(this,e)}onDeviceSwipe(e,t,o,i,r){let s=this.hass?.states[e];if(this.ro)return!1;if(t==="start"){if(!s||K(s)||this.confirmSet.has(e))return!1;let l=I(e);if(l==="light"&&Xr(s).dim){let d=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:d,value:d,x:i,y:r},!0}if(l==="cover"&&Yr(s)){let d=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:d,value:d,x:i,y:r},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-o/220*100)));l!==a.value&&(this._swipe={...a,value:l});let d=performance.now();d-this.swipeSent>350&&(this.swipeSent=d,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderBinInfo(){let e=this._binInfo,t=this.hass,o=e&&this.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e.furnitureId);if(!e||!t||!o)return S;let i=nl(o,t,this.pickups),r=new Date;r.setHours(0,0,0,0);let s=l=>{let d=Math.round((l.getTime()-r.getTime())/864e5);return d===0?A(t,"bin_today"):d===1?A(t,"bin_tomorrow"):l.toLocaleDateString(t.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},a=o.name||A(t,`bin_kind_${o.bin_kind??"rest"}`);return w`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${a}</span>
      ${i.length?i.map(l=>w`<b>${s(l.day)}${l.summary&&l.summary!==a?w` <small>· ${l.summary}</small>`:S}</b>`):w`<b>${A(t,"bin_none")}</b>`}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||!H("household")||this.panelOpen)return S;let e=()=>{this._hhFolded=!this._hhFolded,oh("neonplan3d.hhFolded",this._hhFolded)};return w`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${e}>🏠 ${A(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?S:this._household.map(t=>w`<button class="fp3d-hh-row ${t.hot?"fp3d-hh-hot":""}" ?disabled=${!t.entity} @click=${()=>t.entity&&(this.ro?this.showInfo(t.entity,0,0):Se(this,t.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${t.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${t.text}</span>
            </button>`)}
    </div>`}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return S;let t=this._alerts.slice(0,3);return w`<div class="fp3d-alert-banner" role="alert">
      ${t.map(o=>w`<button class="fp3d-alert fp3d-alert-${o.kind}" title=${Lr(this.hass,e,o)} @click=${()=>this.jumpTo(o)}>${Lr(this.hass,e,o)}</button>`)}
      ${this._alerts.length>3?w`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:S}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return S;let t=e.floors.flatMap(r=>r.rooms).find(r=>r.id===this.roomId),o=t?le(this.hass,t.area_id).filter(r=>I(r)==="scene"||I(r)==="script").slice(0,6):[];if(!o.length)return S;let i=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return w`<div class="fp3d-scenes">
      ${o.map(r=>w`<button class="fp3d-chip" aria-pressed=${this._sceneFired===r} @click=${()=>this.runScene(r)}>${Z(this.hass,r,i)}</button>`)}
    </div>`}async syncPets(){let e=this.building,t=this.viewer,o=e?.settings.pets?.on!==!1&&this.petsOn!==!1,i=o?e?.settings.pets?.list??[]:[],r=o&&!!e?.floors.some(s=>s.furniture.some(a=>/:aquarium(_large)?$/.test(a.type)));if(!t||!e||!H("fun_pets")||!i.length&&!r){this.pets?.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,i));return}if(!this.petsLoading){this.petsLoading=!0;try{let[s,a]=await Promise.all([Qr(),In()]);if(!this.viewer||this.pets)return;this.petsFor=this.building,this.pets=s.startPets({lib:a.funLib,FloorMap:a.FloorMap,viewer:this.viewer,building:this.building,pets:this.building?.settings.pets?.on!==!1&&this.petsOn!==!1?this.building?.settings.pets?.list??[]:[],night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon",base:(l,d)=>pe(l,d),closedDoors:()=>{let l=new Set,d=this.hass?.states??{};for(let c of this.building?.floors??[])for(let u of c.openings)u.type==="door"&&u.contact&&d[u.contact]?.state==="off"&&l.add(u.id);return l}})}catch(s){console.error("NeonPlan 3D: the pets failed to load",s)}finally{this.petsLoading=!1}}}async syncGhost(){let e=this.building,t=!!e&&H("fun_halloween")&&e.settings.halloween?.ghost!==!1&&this.ghostOn!==!1;if(!this.viewer||!t){this.ghost?.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[o,i]=await Promise.all([Qr(),In()]);if(!this.viewer||this.ghost||!this.building)return;this.ghost=o.startGhost({lib:i.funLib,viewer:this.viewer,building:this.building,night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon"})}catch(o){console.error("NeonPlan 3D: the ghost failed to load",o)}finally{this.ghostLoading=!1}}}async startWalk(){at("walk");let e=this.building,t=this.viewer;if(!e||!t||this._walk)return;let o=e.floors.filter(u=>u.rooms.some(p=>p.points.length>=3)),r=(this.roomId?o.find(u=>u.rooms.some(p=>p.id===this.roomId)):void 0)??o.find(u=>u.id===this.floorId)??[...o].sort((u,p)=>Math.abs(u.elevation)-Math.abs(p.elevation))[0];if(!r)return;let s=await In();this._walk={room:null,hint:!0},await this.updateComplete;let a=this.renderRoot.querySelector(".fp3d-walk-surface");if(!a)return;t.setFloor(r.id,!1),t.setWallMode("auto");let l=new s.FloorMap(e,r),d=this.roomId?r.rooms.find(u=>u.id===this.roomId):void 0,c;if(d){let u=l.freeNear(xe(d.points));c={x:u[0],z:u[1],yaw:l.openYaw(u),pitch:-.05}}this.walker=new s.WalkCamera(t,l,a,{start:c,onRoom:u=>{this.walkRoomPts=u?.points??null,this._walk&&(this._walk={...this._walk,room:u?.name??null}),this.syncDevices(!0)}}),this.walkKeys=u=>{u.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}stopWalk(){if(!this.walker&&!this._walk)return;this.walker?.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null;let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||!this.building||!this.hass)return S;let e=r=>A(this.hass,r);if(!this._walk)return w`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span>${e("walk_title")}</span>
      </button>`;let t=this._walk,o=null,i=(r,s)=>{if(!o)return;let a=44,l=r.clientX-o.cx,d=r.clientY-o.cy,c=Math.hypot(l,d);c>a&&([l,d]=[l/c*a,d/c*a]),s.firstElementChild.style.transform=`translate(${l}px, ${d}px)`,this.walker?.setStick({x:l/a,y:d/a})};return w`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${t.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${t.hint?w`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:S}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${r=>{let s=r.currentTarget,a=s.getBoundingClientRect();o={id:r.pointerId,cx:a.left+a.width/2,cy:a.top+a.height/2},s.setPointerCapture(r.pointerId),i(r,s)}}
        @pointermove=${r=>i(r,r.currentTarget)}
        @pointerup=${r=>{o=null,r.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
        @pointercancel=${r=>{o=null,r.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return S;if(this._find===null)return w`<button class="fp3d-find-btn" title=${A(this.hass,"find")} aria-label=${A(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=Nl(this.findIndex??=qr(this.hass,e),this._find);return w`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${A(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${o=>this._find=o.target.value}
        @keydown=${o=>{o.key==="Escape"&&(this._find=null),o.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${A(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?w`<div class="fp3d-find-list">
            ${t.length?t.map(o=>w`<button @click=${()=>this.goTo(o)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${o.icon?oo(o.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${o.name}</b>${o.where?w`<small>${o.where}</small>`:S}</span>
                  </button>`):w`<p>${A(this.hass,"find_none")}</p>`}
          </div>`:S}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return S;let o=(m,h)=>A(t,m,h),i=w`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${o("central")}
      aria-label=${o("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return i;let r=this.floorId?e.floors.find(m=>m.id===this.floorId):void 0,s=r?[r]:e.floors,a=s.flatMap(m=>fr(t,m).lights),l=s.flatMap(m=>fr(t,m).covers),d=a.filter(m=>t.states[m]?.state==="on").length,c=!r,u=(m,h,v,_)=>{if(_.length){if(c&&this._armed!==m){this._armed=m,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(h,v,{entity_id:_})}},p=(m,h,v,_,b)=>w`<button class="fp3d-btn ${this._armed===m?"fp3d-central-armed":""}" ?disabled=${!b.length} @click=${()=>u(m,v,_,b)}>
        ${this._armed===m?o("central_sure"):o(h)}
      </button>`,f=(e.settings.favorites??[]).filter(m=>t.states[m]),g=this.buttons??e.settings.buttons??[];return w`${i}
      <div class="fp3d-central" role="dialog" aria-label=${o("central")}>
        <b>${r?r.name:o("central_house")}</b>
        <div class="fp3d-central-row">
          <span>${o("central_lights")}${a.length?w` <small>${d}/${a.length}</small>`:S}</span>
          ${p("lights_on","central_on","light","turn_on",a.filter(m=>t.states[m]?.state==="off"))}
          ${p("lights_off","central_off","light","turn_off",a.filter(m=>t.states[m]?.state==="on"))}
        </div>
        ${l.length?w`<div class="fp3d-central-row">
              <span>${o("central_covers")} <small>${l.length}</small></span>
              ${p("covers_open","central_open","cover","open_cover",l)}
              ${p("covers_close","central_close","cover","close_cover",l)}
            </div>`:S}
        <b>${o("central_favorites")}</b>
        ${f.length?w`<div class="fp3d-central-favs">
              ${f.map(m=>{let[h,v]=aa(m),_=t.states[m],b=h==="homeassistant"&&_?.state==="on";return w`<button
                  class="fp3d-chip"
                  aria-pressed=${b||this._sceneFired===m}
                  ?disabled=${K(_)}
                  @click=${()=>{t.callService(h,v,{entity_id:m}),this._sceneFired=m,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${Z(t,m)}
                </button>`})}
            </div>`:g.length?S:w`<p class="fp3d-central-hint">${o("central_no_favorites")}</p>`}
        ${g.length?w`<div class="fp3d-central-favs">
              ${g.map(m=>w`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${th(t,m)}
                  @click=${h=>{la(t,h.currentTarget,m),m.action!=="service"&&(this._central=!1)}}
                >
                  ${m.icon?w`<ha-icon .icon=${m.icon.startsWith("mdi:")?m.icon:`mdi:${m.icon}`}></ha-icon>`:S}${m.label}
                </button>`)}
            </div>`:S}
      </div>`}mediaCardUp(e,t){let o=e.states[t];if(!o||I(t)!=="media")return!1;if(!this.ro&&(this.mediaGrace.get(t)?.until??0)>Date.now()&&K(o))return!0;let i=[o.attributes.media_title,o.attributes.app_name,o.attributes.source].some(r=>typeof r=="string"&&!!r.trim());return!K(o)&&(o.state==="playing"||o.state==="paused"&&i)}renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return S;let e=A(this.hass,this.clean?"controls_show":"controls_hide");return w`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?nn`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:nn`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return S;let t=e.kind==="light"&&e.value<=0;return w`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${Z(this.hass,e.entity)}</span>
      <b>${t?A(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,o=this.building;if(!t||!o||this.ro)return;if(!H("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let i=o.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!i)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let r=this.floorId===i?0:300;r&&(this.throughFloor=i,this.fire("floor-tap",{floorId:i})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},r)}endThrough(){let e=this._through;e&&(this._through=null,this.viewer?.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?S:w`<div class="fp3d-pro" role="dialog">
      <b>${A(this.hass,"pro_title")}</b>
      <span>${A(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${A(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip fp3d-chip-on" href=${pa(this.hass.language)} target="_blank" rel="noopener">${A(this.hass,"pro_shop")}</a>
        <a class="fp3d-chip" href=${fa(this.hass.language,this._proHint)} target="_blank" rel="noopener">${A(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${A(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${A(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return S;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!H("camera_cockpit"))return w`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${A(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${A(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let o=[...new Set(this.building.floors.flatMap(c=>c.placements.map(u=>u.entity_id)).filter(c=>I(c)==="camera"))];this.watchCameras(!0);let i=c=>{let u=e.states[c],p=u?.attributes.entity_picture;return p&&u&&!K(u)?p.startsWith("data:")?p:`${p}${p.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},r=c=>{let u=e.states[c];return w`${Z(e,c)}${u?.state==="recording"?w` <b>● ${A(e,"state_recording")}</b>`:S}`},s=this._wallBig&&o.includes(this._wallBig)?this._wallBig:null;if(s){let c=i(s),u=this.liveFor(s),p=()=>{this.throughWall=!0,t(),this.lookThrough(s)};return w`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${A(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${r(s)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${p}>${A(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(c?w`<img src=${c} alt="" />`:w`<div class="fp3d-wall-none">${A(e,"state_unavailable")}</div>`)}</div>
      </div>`}let a=this.renderRoot.querySelector(".fp3d-wall-grid");a||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:d}=sc(o.length,a?.clientWidth??this.clientWidth-48,a?.clientHeight??this.clientHeight-160);return w`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${A(e,"camera_wall_title")} · ${o.length} <span class="fp3d-still">${A(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${d}px); grid-auto-rows: ${Math.round(d*9/16)}px">
        ${o.map(c=>{let u=i(c),p=Xe(e,c).some(f=>e.states[f]?.state==="on");return w`<button class="fp3d-wall-cam ${p?"fp3d-wall-seen":""}" title=${A(e,"camera_wall_big")} @click=${()=>this._wallBig=c}>
            ${u?w`<img src=${u} alt="" />`:w`<div class="fp3d-wall-none">${A(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${r(c)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(e){if(this.live?.id!==e){let t={id:e,el:null,failed:!1};this.live=t;let o=window;o.loadCardHelpers?o.loadCardHelpers().then(i=>{if(this.live!==t)return;let r=i.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});r.hass=this.hass,t.el=r,this.requestUpdate()}).catch(()=>{t.failed=!0,this.requestUpdate()}):t.failed=!0}return this.live.el}renderThrough(){let e=this._through;if(!e||!this.hass)return S;let t=this.hass.states[e.entity],o=t?.attributes.entity_picture,i=o&&!K(t)?o.startsWith("data:")?o:`${o}${o.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null;return w`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${i?w`<img class="fp3d-through-img" src=${i} alt="" />`:S}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${Z(this.hass,e.entity)}</span>
        <span class="fp3d-still">${A(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${A(this.hass,"through_blend")}
          @input=${r=>this._blend=Number(r.target.value)/100}
        />
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${A(this.hass,"through_back")}</button>
      </div>
    </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass||this.ro)return S;let t=this.renderRoot.querySelector(".fp3d-stage"),o=t?.clientWidth??800,i=t?.clientHeight??600,r=Math.max(8,Math.min(o-240,e.x-116)),s=Math.max(8,Math.min(i-360,e.y-170));return w`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${r}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        .presets=${H("sound")?this.building?.settings.media_presets??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${H("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}onDeviceTap(e,t=0,o=0){if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("hh:")){let[r,s]=e.slice(3).split("#");this.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===s&&l.type==="waste_bin")?(this._binInfo={furnitureId:s,x:t,y:o},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(r,t,o):Se(this,r);return}if(this.ro){let r=this.building,s=r?r.energy.grid??Nt(r,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null,a=e==="grid"?s:e.startsWith("detect:")?e.slice(7):e;a&&this.showInfo(a,t,o);return}if(e==="grid"){let r=this.building,s=r?r.energy.grid??Nt(r,a=>this.furnitureLinks?.get(a.id)?.power??null).grid:null;s&&Se(this,s);return}if(e.startsWith("detect:")){Se(this,e.slice(7));return}let i=I(e);if(i==="cover"||i==="camera"){this._menu={entity:e,x:t,y:o};return}if(i&&js.has(i)){if(this.confirmSet.has(e)&&!confirm(A(this.hass,"confirm_switch",{name:Z(this.hass,e)})))return;wa(this.hass,e)}else Se(this,e)}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!H("energy_pro")||!e||this.roomId||!this.showEnergy)return S;let t=i=>A(this.hass,i),o=[];if(e.consumption!==null&&o.push({cls:"total",label:t("energy_consumption"),value:re(this.hass,e.consumption)}),e.grid!==null){let i=e.grid<0;o.push({cls:i?"export":"grid",label:t(i?"energy_grid_export":"energy_grid_import"),value:re(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&o.push({cls:"solar",label:t("energy_solar"),value:re(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let i=[e.battery!==null?re(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);o.push({cls:"battery",label:t("energy_battery"),value:i.join(" \xB7 ")})}return e.tariff&&o.push({cls:"tariff",label:t("energy_tariff"),value:`${J(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),w`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?S:o.map(i=>w`<div class="fp3d-energy-item fp3d-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
      ${this.flows!==null?S:w`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?S:w`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return S;let e=yo[this.heatMode],t=this.heatMode==="temperature",o=t?Et(this.hass,e.stops[0][0]):e.stops[0][0],i=t?Et(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],r=t?Ee(this.hass):e.unit,s=a=>A(this.hass,a);return w`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Hl(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${J(this.hass,o,0)} ${r}</span><span>${J(this.hass,i,0)} ${r}</span></span>
      ${this.heatValues.size?S:w`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=Rn[this.theme]??Rn.neon,t=this._sky;return e.night[0].map((o,i)=>Math.round(o+(e.day[0][i]-o)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){let e=this._sky,t=(r,s)=>`rgb(${r.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,o=Rn[this.theme]??Rn.neon,i=`--fp3d-sky:${t(o.night[0],o.day[0])};--fp3d-ground:${t(o.night[1],o.day[1])}`;return w`<div
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${i}
    >
      ${this._error?w`<p class="fp3d-error">${this._error}</p>`:S} ${this.clean?S:this.renderEnergy()} ${this.renderHologram()} ${this.clean?S:this.renderLegend()}
      ${this.renderAlerts()} ${this.clean||this._walk?S:w`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?S:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderThrough()} ${this.renderCameraWall()}
      ${this.clean?S:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.showStats&&this._stats?w`<span class="fp3d-stats"
            ><b>${this._stats.fps?A(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):A(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?w`(${this._stats.busy.map(r=>A(this.hass,`stats_busy_${r}`)).join(", ")})`:S} ·
            ${A(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${A(this.hass,this._stats.low?"stats_low":"stats_full",{r:J(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${J(this.hass,this.syncMs,1)} ms`:""}</span
          >`:S}
    </div>`}static styles=[De,Qe,we`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .fp3d-holo.fp3d-holo-bin {
        border-color: color-mix(in srgb, var(--bin) 70%, transparent);
        box-shadow: 0 0 18px color-mix(in srgb, var(--bin) 45%, transparent), inset 0 0 12px color-mix(in srgb, var(--bin) 25%, transparent);
        background: color-mix(in srgb, var(--bin) 14%, rgba(8, 14, 28, 0.72));
        min-width: 0;
        width: auto;
      }
      .fp3d-holo.fp3d-holo-bin {
        border-radius: 8px;
        pointer-events: none;
      }
      .fp3d-holo-bin .fp3d-holo-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
        padding: 3px 8px;
        white-space: nowrap;
      }
      .fp3d-holo.fp3d-holo-later {
        opacity: 0.72;
        box-shadow: none;
        background: rgba(8, 14, 28, 0.7);
      }
      .fp3d-holo-later b {
        text-shadow: none;
      }
      .fp3d-holo-bin b {
        font-size: 17px;
        color: var(--bin);
        text-shadow: 0 0 8px color-mix(in srgb, var(--bin) 60%, transparent);
      }
      .fp3d-holo-bin span {
        font-size: 12px;
        opacity: 0.8;
      }
      .fp3d-holo-link[style*="--bin"] line,
      .fp3d-holo-link[style*="--bin"] circle {
        stroke: var(--bin);
      }
      .fp3d-bin-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
        cursor: pointer;
      }
      .fp3d-bin-info small {
        opacity: 0.7;
        font-weight: 400;
      }
      .fp3d-hh {
        position: absolute;
        right: 12px;
        top: 58px;
        z-index: 3;
        width: min(250px, calc(100% - 24px));
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px;
        border-radius: 14px;
        background: rgba(10, 18, 34, 0.72);
        border: 1px solid rgba(110, 220, 255, 0.28);
        backdrop-filter: blur(8px);
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.35);
      }
      .fp3d-hh-folded {
        width: auto;
      }
      .fp3d-hh button {
        font: inherit;
        color: inherit;
        background: none;
        border: 0;
        text-align: left;
        cursor: pointer;
        border-radius: 9px;
      }
      .fp3d-hh-head {
        font-size: 12px;
        font-weight: 600;
        padding: 3px 6px;
        opacity: 0.9;
      }
      .fp3d-hh-head b {
        margin-left: 4px;
        color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-hh-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        padding: 5px 6px;
      }
      .fp3d-hh-row:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.06);
      }
      .fp3d-hh-row:disabled {
        cursor: default;
      }
      .fp3d-hh-hot .fp3d-hh-icon {
        color: #ffb547;
      }
      .fp3d-hh-icon {
        flex: none;
        display: inline-flex;
        color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-alert-banner {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 6px;
        max-width: calc(100% - 24px);
        z-index: 4;
      }
      .fp3d-alert {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 7px 14px 7px 12px;
        border: 0;
        border-left: 4px solid #ff3b4f;
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        font: 600 13.5px var(--fp3d-font);
        box-shadow: 0 0 18px rgba(255, 59, 79, 0.35);
        cursor: pointer;
        animation: fp3d-alert-pulse 1.2s ease-in-out infinite;
      }
      .fp3d-alert-water,
      .fp3d-alert-window_rain {
        border-left-color: #4fb3ff;
        box-shadow: 0 0 18px rgba(79, 179, 255, 0.35);
      }
      .fp3d-alert-alarm_pending {
        border-left-color: #ffb547;
        box-shadow: 0 0 18px rgba(255, 181, 71, 0.35);
      }
      .fp3d-alert-more {
        align-self: center;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      @keyframes fp3d-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .fp3d-has-alerts .fp3d-energy {
        top: 58px;
      }
      .fp3d-scenes {
        position: absolute;
        left: 60px;
        right: 60px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
        z-index: 2;
        pointer-events: none;
      }
      .fp3d-scenes .fp3d-chip {
        pointer-events: auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-alert,
        .fp3d-dev-found {
          animation: none;
        }
      }
      .fp3d-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        container-name: fp3d;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-sky, var(--fp3d-bg2)), var(--fp3d-ground, var(--fp3d-bg)) 72%);
        transition: background 2s ease;
      }
      .fp3d-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-canvas:active {
        cursor: grabbing;
      }
      .fp3d-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .fp3d-pin-info {
        display: grid;
        gap: 1px;
        text-align: center;
      }
      .fp3d-pin-info small {
        font-size: 11px;
        font-weight: 500;
        opacity: 0.9;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--fp3d-title-font);
        color: var(--fp3d-text);
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 22px rgba(55, 224, 255, 0.28);
      }
      .fp3d-pin-floor b {
        font: 700 15px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-pin-floor span {
        font: 500 12px var(--fp3d-font);
        opacity: 0.78;
      }
      .fp3d-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        font: 600 12px var(--fp3d-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .fp3d-dev-icon {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
      }
      .fp3d-dev[data-entity^="trail:"] {
        padding: 2px 4px 2px 2px;
        font-size: 11px;
        border-color: rgba(55, 224, 255, 0.5);
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-icon {
        color: #37e0ff;
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--fp3d-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-watt:empty {
        display: none;
      }
      .fp3d-dev-watt {
        padding: 1px 6px 1px 0;
        color: #37e0ff;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .fp3d-dev-on .fp3d-dev-watt {
        color: #2a1a00;
      }
      .fp3d-person {
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        background: #ff5fd2;
        color: #fff;
        font: 700 12px var(--fp3d-font);
        box-shadow:
          0 0 0 2px rgba(255, 95, 210, 0.45),
          0 0 18px #ff5fd2;
        pointer-events: auto;
      }
      .fp3d-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .fp3d-person[hidden] {
        display: none;
      }
      .fp3d-no-room-names .fp3d-pin {
        display: none !important;
      }
      /* tablet level: blur over the canvas and glowing shadows are expensive on weak GPUs */
      .fp3d-stage.fp3d-low {
        transition: none;
      }
      .fp3d-low .fp3d-pin,
      .fp3d-low .fp3d-dev,
      .fp3d-low .fp3d-dev-on,
      .fp3d-low .fp3d-energy-item,
      .fp3d-low .fp3d-find input,
      .fp3d-low .fp3d-find-list,
      .fp3d-low .fp3d-find-btn,
      .fp3d-low .fp3d-swipe,
      .fp3d-low .fp3d-thumb {
        backdrop-filter: none;
        box-shadow: none;
        transition: none;
      }
      .fp3d-thumbs {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: calc(100% - 140px);
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 2;
      }
      .fp3d-thumb {
        position: relative;
        display: grid;
        padding: 0;
        width: 150px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: color-mix(in srgb, var(--fp3d-chrome) 70%, transparent);
        color: var(--fp3d-text);
        cursor: pointer;
        overflow: hidden;
        font: inherit;
        box-shadow: var(--fp3d-shadow);
        opacity: 0.72;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .fp3d-thumb:hover,
      .fp3d-thumb[aria-pressed="true"] {
        opacity: 1;
      }
      .fp3d-thumb[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-accent), 0 0 18px rgba(55, 224, 255, 0.25);
      }
      .fp3d-thumb img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
      }
      .fp3d-thumb span {
        position: absolute;
        left: 8px;
        bottom: 6px;
        font-size: 12px;
        font-weight: 600;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }
      .fp3d-thumbs-fold {
        align-self: flex-start;
        width: 26px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 11px;
        cursor: pointer;
      }
      /* folded: plain floor buttons with their names, no pictures (D177) */
      .fp3d-thumbs-compact .fp3d-thumb {
        padding: 6px 10px;
        min-width: 0;
      }
      .fp3d-thumbs-compact .fp3d-thumb span {
        position: static;
        background: none;
        padding: 0;
      }
      .fp3d-thumb-house {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
      }
      .fp3d-thumb-house span {
        position: static;
        text-shadow: none;
      }
      .fp3d-thumbs-small .fp3d-thumb {
        width: 104px;
      }
      /* at the top right, clear of the floor pictures and the switch rows (a card moves it beside its own buttons) */
      .fp3d-walk-btn {
        position: absolute;
        z-index: 3;
        top: 12px;
        right: var(--fp3d-walk-right, 12px);
        height: 38px;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 0 14px 0 10px;
        font: inherit;
        font-weight: 700;
        font-size: 14px;
        border: 1px solid rgba(55, 224, 255, 0.45);
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      .fp3d-walk-surface {
        position: absolute;
        inset: 0;
        z-index: 4;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-walk-top {
        position: absolute;
        z-index: 5;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 8px;
        pointer-events: none;
        white-space: nowrap;
      }
      .fp3d-walk-room,
      .fp3d-walk-exit,
      .fp3d-walk-hint {
        padding: 8px 14px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font: inherit;
        font-weight: 700;
      }
      .fp3d-walk-exit {
        border: 0;
        cursor: pointer;
        pointer-events: auto;
      }
      .fp3d-walk-hint {
        position: absolute;
        z-index: 5;
        left: 50%;
        top: 62px;
        transform: translateX(-50%);
        max-width: min(560px, calc(100% - 32px));
        font-weight: 500;
        font-size: 13px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-walk-stick {
        position: absolute;
        z-index: 5;
        right: 18px;
        bottom: calc(18px + var(--fp3d-bottom-inset, 0px));
        width: 112px;
        height: 112px;
        border-radius: 50%;
        background: rgba(14, 21, 38, 0.55);
        border: 1px solid var(--fp3d-line);
        display: grid;
        place-items: center;
        touch-action: none;
      }
      .fp3d-walk-stick span {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: var(--fp3d-accent);
        box-shadow: 0 0 16px rgba(55, 224, 255, 0.5);
        pointer-events: none;
      }
      /* with a mouse the stick is not needed */
      @media (pointer: fine) {
        .fp3d-walk-stick {
          display: none;
        }
      }
      .fp3d-find-btn {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      /* the star sits above the search button, its menu opens above it */
      .fp3d-central-btn {
        position: absolute;
        left: 12px;
        bottom: calc(56px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
        z-index: 3;
      }
      .fp3d-central-on {
        color: var(--fp3d-accent);
      }
      .fp3d-central {
        position: absolute;
        left: 12px;
        bottom: calc(104px + var(--fp3d-bottom-inset, 0px));
        width: min(320px, calc(100% - 24px));
        max-height: calc(100% - 140px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 16px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(10px);
        z-index: 4;
      }
      .fp3d-central > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .fp3d-central-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-central-row small {
        opacity: 0.6;
      }
      .fp3d-central .fp3d-btn {
        min-width: 64px;
      }
      .fp3d-central-armed {
        background: #ff8a3d !important;
        color: #1a0d00 !important;
      }
      .fp3d-central-favs {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-own-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .fp3d-own-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .fp3d-central-hint {
        margin: 0;
        font-size: 13px;
        opacity: 0.7;
      }
      .fp3d-low .fp3d-central {
        backdrop-filter: none;
      }
      /* the eye sits beside the search button; alone in the corner once the view is clean */
      .fp3d-eye {
        position: absolute;
        left: 56px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--fp3d-text);
        cursor: pointer;
        z-index: 4;
      }
      .fp3d-eye-clean {
        left: 12px;
        opacity: 0.55;
      }
      .fp3d-eye:hover,
      .fp3d-eye-clean:hover {
        opacity: 1;
      }
      .fp3d-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      .fp3d-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .fp3d-find-list button:hover,
      .fp3d-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .fp3d-find-list b {
        display: block;
        font-weight: 600;
      }
      .fp3d-find-list small,
      .fp3d-find-list p {
        color: var(--fp3d-muted);
        font-size: 12px;
        margin: 0;
      }
      .fp3d-find-list p {
        padding: 8px 10px;
      }
      .fp3d-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .fp3d-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .fp3d-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      /* time travel: the clock sits at the top centre, the warnings below it */
      .fp3d-replay .fp3d-alert-banner {
        top: 74px;
      }
      /* the time bar takes the bottom: the heat legend moves up under the energy values */
      .fp3d-replay .fp3d-legend,
      .fp3d-replay.fp3d-has-alerts .fp3d-legend {
        bottom: auto;
        top: 62px;
      }
      .fp3d-replay .fp3d-energy {
        max-width: calc(50% - 96px);
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;
        pointer-events: auto;
      }
      .fp3d-replay .fp3d-energy > * {
        flex: none;
      }
      /* the warnings sit below the clock, so the energy values stay at the top */
      .fp3d-replay.fp3d-has-alerts .fp3d-energy {
        top: 10px;
      }
      @container fp3d (max-width: 700px) {
        .fp3d-replay .fp3d-energy,
        .fp3d-replay.fp3d-has-alerts .fp3d-energy {
          top: 68px;
          max-width: calc(100% - 24px);
        }
        .fp3d-replay .fp3d-alert-banner,
        .fp3d-replay .fp3d-legend {
          top: 116px;
        }
        .fp3d-replay.fp3d-has-alerts .fp3d-legend {
          top: 164px;
        }
      }
      .fp3d-info {
        grid-template-columns: auto;
        z-index: 5;
      }
      .fp3d-swipe.fp3d-info b {
        font-size: 15px;
      }
      .fp3d-swipe span {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-swipe b {
        grid-row: 2;
        font: 700 22px var(--fp3d-title-font);
      }
      .fp3d-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .fp3d-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--fp3d-warm);
      }
      .fp3d-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      .fp3d-through {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }
      /* the camera wall: a glass sheet over the scene with every camera's picture */
      .fp3d-wall {
        position: absolute;
        inset: 56px 12px calc(var(--fp3d-bottom-inset, 0px) + 12px);
        z-index: 5;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 16px;
        background: rgba(8, 16, 34, 0.86);
        border: 1px solid rgba(160, 240, 255, 0.4);
        box-shadow: 0 0 28px rgba(55, 224, 255, 0.25);
        overflow: auto;
      }
      .fp3d-wall-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        color: #e6fbff;
      }
      .fp3d-wall-pro {
        margin: 0;
        color: #ffd75a;
      }
      .fp3d-wall-head .fp3d-wall-title {
        flex: 1;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 8px;
      }
      .fp3d-wall-title b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-wall-tools {
        display: flex;
        gap: 6px;
      }
      .fp3d-wall-big {
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
      }
      .fp3d-wall-big img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      /* the stream player: a bare card, as wide as the sheet allows for a 16:9 picture */
      .fp3d-wall-big > hui-picture-entity-card,
      .fp3d-wall-big > hui-error-card {
        width: min(100%, calc((100vh - 200px) * 16 / 9));
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .fp3d-wall-grid {
        flex: 1;
        display: grid;
        align-content: safe center;
        justify-content: center;
        gap: 12px;
        min-height: 0;
        overflow-y: auto;
      }
      .fp3d-wall-cam {
        position: relative;
        padding: 0;
        border: 1px solid rgba(160, 240, 255, 0.3);
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
      .fp3d-wall-cam img,
      .fp3d-wall-none {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8aa;
      }
      .fp3d-wall-seen {
        border-color: rgba(255, 80, 90, 0.9);
        box-shadow: 0 0 14px rgba(255, 60, 70, 0.5);
      }
      .fp3d-wall-name {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px 8px;
        font-size: 12px;
        text-align: left;
        color: #e6fbff;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      }
      .fp3d-wall-name b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-pro {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 6;
        display: flex;
        flex-direction: column;
        gap: 8px;
        /* left: 50% leaves only half the width to shrink into: a width of its own keeps the buttons inside */
        width: min(320px, calc(100% - 60px));
        padding: 16px 18px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-accent);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      }
      .fp3d-pro div {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .fp3d-pro a {
        text-decoration: none;
      }
      .fp3d-flash::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        background: rgba(225, 238, 255, 0.4);
        pointer-events: none;
      }
      .fp3d-through-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: var(--fp3d-blend);
      }
      .fp3d-through-bar {
        position: absolute;
        left: 50%;
        bottom: calc(var(--fp3d-bottom-inset, 0px) + 14px);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: calc(100% - 32px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        backdrop-filter: blur(12px);
        border: 1px solid var(--fp3d-line);
        pointer-events: auto;
      }
      .fp3d-through-name {
        font-weight: 600;
        white-space: nowrap;
      }
      /* a small note that the picture is a still, so nobody wonders why it does not move */
      .fp3d-still {
        font-size: 11px;
        font-weight: 400;
        opacity: 0.65;
        white-space: nowrap;
        margin-left: 6px;
      }
      .fp3d-through-bar input[type="range"] {
        width: 140px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-through-on :is(.fp3d-pin, .fp3d-dev, .fp3d-energy, .fp3d-legend, .fp3d-thumbs, .fp3d-scenes, .fp3d-find-btn, .fp3d-stats) {
        display: none;
      }
      fp3d-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .fp3d-dev-found {
        animation: fp3d-found 0.6s ease-in-out 4;
      }
      @keyframes fp3d-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--fp3d-accent));
        }
      }
      .fp3d-legend {
        position: absolute;
        left: 12px;
        /* above the star button */
        bottom: calc(104px + var(--fp3d-bottom-inset, 0px));
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .fp3d-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .fp3d-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-legend-none {
        color: var(--fp3d-warm);
      }
      /* Energie Pro: the glass hologram beside the house */
      .fp3d-holo {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 4;
        width: 236px;
        padding: 12px 14px 11px;
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        background: linear-gradient(140deg, rgba(150, 235, 255, 0.2) 0%, rgba(70, 140, 230, 0.08) 45%, rgba(20, 60, 140, 0.05) 100%);
        backdrop-filter: blur(7px) saturate(150%);
        -webkit-backdrop-filter: blur(7px) saturate(150%);
        border: 1px solid rgba(160, 240, 255, 0.55);
        box-shadow:
          0 0 28px rgba(55, 224, 255, 0.35),
          0 0 2px rgba(200, 250, 255, 0.9),
          inset 0 1px 0 rgba(255, 255, 255, 0.45),
          inset 0 0 36px rgba(55, 224, 255, 0.14);
        color: #e6fbff;
        font-size: 12px;
        line-height: 1.35;
        text-shadow: 0 0 6px rgba(80, 220, 255, 0.55);
        will-change: transform;
        transform-origin: 0 0;
      }
      .fp3d-holo[hidden],
      .fp3d-holo-link[hidden] {
        display: none;
      }
      /* a device's card: smaller than the plant's */
      /* the now-playing card: cover, titles, transport and volume */
      .fp3d-holo-media .fp3d-holo-head {
        cursor: pointer;
      }
      .fp3d-holo-track {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 6px;
      }
      .fp3d-holo-cover {
        width: 46px;
        height: 46px;
        border-radius: 8px;
        object-fit: cover;
        flex: none;
        box-shadow: 0 0 12px rgba(55, 224, 255, 0.35);
      }
      .fp3d-holo-cover-none {
        display: grid;
        place-items: center;
        font-size: 22px;
        background: rgba(55, 224, 255, 0.15);
        color: #a8f0ff;
      }
      .fp3d-holo-titles {
        display: grid;
        gap: 2px;
        min-width: 0;
      }
      .fp3d-holo-titles b {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-titles span {
        font-size: 12px;
        opacity: 0.8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-media-controls {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-holo-media-controls button {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.4);
        background: rgba(8, 16, 34, 0.6);
        color: var(--fp3d-text);
        cursor: pointer;
        font-size: 12px;
      }
      .fp3d-holo-media-controls button:disabled {
        opacity: 0.3;
        cursor: default;
      }
      .fp3d-holo-media-controls input[type="range"] {
        width: 70px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-holo-car-main {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-top: 4px;
      }
      .fp3d-holo-car-main b {
        font-size: 22px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-car-main span {
        font-size: 12px;
        opacity: 0.85;
      }
      .fp3d-holo-car-bar {
        height: 5px;
        margin-top: 6px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.15);
        overflow: hidden;
      }
      .fp3d-holo-car-bar i {
        display: block;
        height: 100%;
        border-radius: 3px;
        box-shadow: 0 0 8px currentColor;
      }
      .fp3d-holo-meters {
        display: flex;
        flex-wrap: wrap;
        gap: 2px 10px;
      }
      .fp3d-holo-pool-chem {
        display: grid;
        grid-template-columns: 50px 64px 1fr;
        align-items: center;
        gap: 6px;
        margin-top: 5px;
        font-size: 12px;
      }
      .fp3d-holo-pool-chem span {
        opacity: 0.8;
      }
      .fp3d-holo-pool-chem b {
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .fp3d-holo-pool-chem i {
        position: relative;
        height: 4px;
        border-radius: 2px;
        /* red – yellow – green (the ideal range in the middle) – yellow – red */
        background: linear-gradient(90deg, rgba(255, 77, 64, 0.35), rgba(255, 204, 64, 0.35) 25%, rgba(77, 255, 128, 0.45) 40%, rgba(77, 255, 128, 0.45) 60%, rgba(255, 204, 64, 0.35) 75%, rgba(255, 77, 64, 0.35));
      }
      .fp3d-holo-pool-chem em {
        position: absolute;
        top: -2px;
        width: 8px;
        height: 8px;
        margin-left: -4px;
        border-radius: 50%;
        box-shadow: 0 0 6px currentColor;
      }
      .fp3d-holo-pool-line {
        margin-top: 5px;
        font-size: 12px;
        opacity: 0.85;
      }
      /* Pool Pro: ball valves and the six-way valve, set by hand */
      .fp3d-holo-valves {
        display: grid;
        gap: 4px;
        margin-top: 4px;
        max-height: 220px;
        overflow-y: auto;
        pointer-events: auto;
      }
      .fp3d-holo-valve,
      .fp3d-holo-valve-pos button {
        font: inherit;
        font-size: 11.5px;
        color: inherit;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(91, 124, 255, 0.35);
        border-radius: 8px;
        padding: 4px 8px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-holo-valve {
        display: grid;
        grid-template-columns: 14px 1fr auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-holo-valve i {
        font-style: normal;
        color: #ff6b5a;
      }
      .fp3d-holo-valve.fp3d-holo-on i {
        color: #4dff9a;
      }
      .fp3d-holo-valve small {
        opacity: 0.75;
      }
      .fp3d-holo-valve-pos {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .fp3d-holo-on {
        border-color: var(--fp3d-accent) !important;
        color: var(--fp3d-accent) !important;
      }
      .fp3d-holo-vol {
        font-size: 11px;
        opacity: 0.8;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-dev {
        width: 184px;
        padding: 10px 12px 9px;
      }
      /* tablet level: no blur and no sheen, the glass is painted */
      .fp3d-holo-plain {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        background: rgba(12, 26, 50, 0.9);
      }
      .fp3d-holo-plain .fp3d-holo-sheen,
      .fp3d-holo-plain .fp3d-holo-scan {
        display: none;
      }
      /* the thin line from the solar field up to the card, with a dot on the field */
      .fp3d-holo-link {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        pointer-events: none;
        overflow: visible;
      }
      .fp3d-holo-link line {
        stroke: rgba(160, 240, 255, 0.75);
        stroke-width: 1.2;
        filter: drop-shadow(0 0 3px rgba(55, 224, 255, 0.8));
      }
      .fp3d-holo-link circle {
        fill: #cffaff;
        stroke: rgba(55, 224, 255, 0.8);
        stroke-width: 2;
        filter: drop-shadow(0 0 4px rgba(55, 224, 255, 0.9));
      }
      .fp3d-holo-min {
        width: 150px;
      }
      .fp3d-holo-sheen {
        position: absolute;
        inset: 0;
        background: linear-gradient(115deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 32%, rgba(255, 255, 255, 0) 68%, rgba(255, 255, 255, 0.07) 100%);
        pointer-events: none;
      }
      .fp3d-holo-scan {
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(0deg, rgba(160, 240, 255, 0.06) 0 1px, transparent 1px 4px);
        pointer-events: none;
      }
      .fp3d-holo-body {
        position: relative;
      }
      .fp3d-holo-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 10px;
        letter-spacing: 0.14em;
        color: #8ff0ff;
        text-transform: uppercase;
      }
      .fp3d-holo-live {
        color: #5dffb0;
      }
      .fp3d-holo-big {
        display: flex;
        align-items: baseline;
        gap: 9px;
        margin: 6px 0 1px;
      }
      .fp3d-holo-big b {
        font-size: 26px;
        color: #ffe27a;
        text-shadow: 0 0 12px rgba(255, 210, 80, 0.85);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-big span,
      .fp3d-holo-sub {
        color: #aee9ff;
      }
      .fp3d-holo-sub {
        margin-bottom: 6px;
      }
      .fp3d-holo-plants {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        column-gap: 10px;
        margin: 0 0 5px;
        font-size: 11px;
        color: #aee9ff;
      }
      .fp3d-holo-plants b {
        color: #ffe27a;
        text-align: right;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-sub b,
      .fp3d-holo-cell b,
      .fp3d-holo-foot b {
        color: #fff;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-curve {
        display: block;
        margin-bottom: 7px;
        filter: drop-shadow(0 0 4px rgba(255, 215, 90, 0.7));
      }
      .fp3d-holo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-holo-cell {
        border-left: 2px solid #aee9ff;
        padding-left: 6px;
      }
      .fp3d-holo-cell span {
        font-size: 11px;
      }
      .fp3d-holo-bat {
        border-left-color: #5dffb0;
      }
      .fp3d-holo-bat span {
        color: #5dffb0;
      }
      .fp3d-holo-exp {
        border-left-color: #4ff6ff;
      }
      .fp3d-holo-exp span {
        color: #4ff6ff;
      }
      .fp3d-holo-imp {
        border-left-color: #ff6fb0;
      }
      .fp3d-holo-imp span {
        color: #ff8fc4;
      }
      .fp3d-holo-house {
        border-left-color: #a9c0ff;
      }
      .fp3d-holo-wb {
        border-left-color: #63c9ff;
      }
      .fp3d-holo-bar {
        margin-top: 8px;
        height: 5px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.16);
        overflow: hidden;
      }
      .fp3d-holo-bar div {
        height: 100%;
        background: linear-gradient(90deg, #5dffb0, #4ff6ff);
        box-shadow: 0 0 8px rgba(80, 240, 255, 0.8);
      }
      .fp3d-holo-foot {
        display: flex;
        justify-content: space-between;
        margin-top: 3px;
        font-size: 10px;
        color: #aee9ff;
      }
      .fp3d-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .fp3d-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        border-left: 3px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-energy-item span {
        font-size: 11px;
        color: var(--fp3d-muted);
      }
      .fp3d-energy-item b {
        font: 700 15px var(--fp3d-title-font);
      }
      .fp3d-energy-total {
        border-left-color: #6fd8ff;
      }
      .fp3d-energy-grid {
        border-left-color: #37e0ff;
      }
      .fp3d-energy-export,
      .fp3d-energy-solar {
        border-left-color: #ffc633;
      }
      .fp3d-energy-battery {
        border-left-color: #59ff8c;
      }
      .fp3d-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--fp3d-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .fp3d-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--fp3d-accent);
      }
      .fp3d-flow-toggle span {
        display: none;
      }
      .fp3d-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .fp3d-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .fp3d-energy-tariff {
        border-left-color: #b98cff;
      }
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container fp3d (max-width: 900px) {
        .fp3d-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
        }
        .fp3d-legend {
          bottom: auto;
          top: 62px;
        }
        .fp3d-has-alerts .fp3d-legend {
          top: 110px;
        }
      }
      /* the view's own controls on the right (#285); the room panel opens there, so they make way for it */
      .fp3d-side-right :is(.fp3d-thumbs, .fp3d-find-btn, .fp3d-central-btn, .fp3d-central, .fp3d-eye-clean, .fp3d-find, .fp3d-legend) {
        left: auto;
        right: 12px;
      }
      .fp3d-side-right .fp3d-eye {
        left: auto;
        right: 56px;
      }
      .fp3d-side-right.fp3d-panel-open :is(.fp3d-thumbs, .fp3d-find-btn, .fp3d-central-btn, .fp3d-central, .fp3d-eye-clean, .fp3d-find, .fp3d-legend) {
        display: none;
      }
      /* a room sheet covers the lower half: the view's own controls step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-panel-open :is(.fp3d-find-btn, .fp3d-find, .fp3d-thumbs, .fp3d-legend, .fp3d-stats, .fp3d-scenes) {
          display: none;
        }
      }
      @media (pointer: coarse) {
        .fp3d-find-close {
          width: 40px;
          height: 40px;
          right: 1px;
          bottom: 1px;
        }
        .fp3d-dev {
          padding: 6px;
        }
        .fp3d-pin {
          padding: 8px 12px;
        }
      }
      .fp3d-dev-full .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-name:empty {
        display: none;
      }
      .fp3d-dev-name {
        position: absolute;
        top: calc(100% + 3px);
        left: 50%;
        transform: translateX(-50%);
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 1px 6px;
        border-radius: 6px;
        font-size: 10.5px;
        font-weight: 600;
        line-height: 1.35;
        color: var(--fp3d-text);
        background: rgba(10, 16, 32, 0.72);
        pointer-events: none;
      }
      .fp3d-dev-sel {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
      .fp3d-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--fp3d-glow, var(--fp3d-warm));
        box-shadow: 0 0 16px var(--fp3d-glow, var(--fp3d-warm));
      }
      .fp3d-dev-on .fp3d-dev-icon {
        background: rgba(255, 255, 255, 0.28);
      }
      .fp3d-dev-on .fp3d-dev-text {
        color: #2a1a00;
      }
      .fp3d-dev-na {
        opacity: 0.45;
      }
      .fp3d-dev-dim {
        opacity: 0.35;
      }
      .fp3d-dev[hidden],
      .fp3d-pin[hidden] {
        display: none;
      }
      .fp3d-pin-active {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.45);
      }
      .fp3d-stats b {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--fp3d-chrome);
        position: absolute;
        right: 10px;
        bottom: calc(8px + var(--fp3d-bottom-inset, 0px));
        font-size: 11.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .fp3d-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--fp3d-danger);
      }
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",li);function re(n,e){return Math.abs(e)>=1e3?`${J(n,e/1e3,1)} kW`:`${Math.round(e)} W`}function rh(n){return n.type==="tv_board"?n.h+.9:n.type==="tv_wall"||n.type==="kitchen_wall"?n.h+.25:n.h+.35}var ih=.25,dc=n=>Math.round(n*1e3)/1e3;function ci(n,e,t,o,i){let r=n.rooms.find(s=>s.points.length>=3&&G([e,t],s.points));return!r||G([o,i],r.points)?[o,i]:G([o,t],r.points)?[o,t]:G([e,i],r.points)?[e,i]:[e,t]}function uc(n,e,t,o=ih){let i=n.rooms.find(d=>d.points.length>=3&&G([e.x,e.z],d.points));if(!i)return null;let r=i.points,s=Fe(r)>=0?1:-1,a=t/2,l=null;for(let d=0;d<r.length;d++){let c=r[d],u=r[(d+1)%r.length],p=Math.hypot(u[0]-c[0],u[1]-c[1]);if(p<.3)continue;let f=[(u[0]-c[0])/p,(u[1]-c[1])/p],g=[-f[1]*s,f[0]*s],m=(e.x-c[0])*f[0]+(e.z-c[1])*f[1];if(m<0||m>p)continue;let v=n.rooms.some(y=>y.id!==i.id&&y.points.some((x,$)=>{let M=y.points[($+1)%y.points.length],F=Math.abs((x[0]-c[0])*g[0]+(x[1]-c[1])*g[1]),N=Math.abs((M[0]-c[0])*g[0]+(M[1]-c[1])*g[1]);return F<.02&&N<.02}))?a:0,_=(e.x-c[0])*g[0]+(e.z-c[1])*g[1]-v,b=Math.atan2(-g[0],g[1])*180/Math.PI,k=y=>Math.abs((e.rotation-y+540)%360-180),E=[{rotation:b,extent:e.d/2},{rotation:b+90,extent:e.w/2},{rotation:b-90,extent:e.w/2}].reduce((y,x)=>k(x.rotation)<k(y.rotation)?x:y);if(k(E.rotation)>50)continue;let T=_-E.extent;Math.abs(T)>o||l&&Math.abs(T)>=Math.abs(l.gap)||(l={x:dc(e.x-g[0]*T),z:dc(e.z-g[1]*T),rotation:(Math.round(E.rotation)%360+360)%360,gap:T})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}var di;function sh(){let n=new URL("./neonplan3d-timetravel.js?v=22a96bd58fbd",new URL(import.meta.url)).href;return di??=import(n).catch(e=>{throw di=void 0,e}),di}var Gt=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),sh().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("NeonPlan 3D: time travel failed to load",t),this.host.requestUpdate()}))}stop(){this.active&&(this.starting=!1,this.session?.dispose(),this.session=null,this.host.requestUpdate())}hass(e){return this.session?.hass??e}};var j={get(n){try{return localStorage.getItem(`neonplan3d.${n}`)}catch{return null}},set(n,e){try{localStorage.setItem(`neonplan3d.${n}`,e)}catch{}}},ui=class extends me{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_newOffers:{state:!0},_readyPacks:{state:!0},_shopConnected:{state:!0},_giftLater:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_productColors:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_accent:{state:!0},_weather:{state:!0}};offersChecked=!1;data=new zt(this);tt=new Gt(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._newOffers=0,this._readyPacks=0,this._shopConnected=null,this._giftLater=!1,this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode=j.get("walls")==="cut"?"cut":"auto",this._explode=j.get("explode")!=="0",this._keepRoof=j.get("roof")==="1";let e=j.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=j.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let t=j.get("markers");this._markers=t==="none"||t==="all"?t:"important";let o=j.get("heat");this._heat=o==="temperature"||o==="humidity"||o==="co2"||o==="values"?o:"none";let i=j.get("theme");this._theme=i&&Gr.includes(i)?i:"neon",this._productColors=!1;let r=j.get("accent");this._accent=r&&/^#[0-9a-f]{6}$/i.test(r)?r:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let s=j.get("floor_stack");this._floorStack=s==="stacked"||s==="single"?s:"dim",this._roomNames=j.get("room_names")!=="0",this._controlsRight=j.get("controls")==="right",this._keepView=j.get("keep_view")==="1",this._trail=j.get("trail")==="1",this._cameraWall=!1,this._clean=j.get("clean")==="1",this._navWrap=j.get("nav_wrap")==="1",this._optsOpen=!1,this._weather=j.get("weather")!=="0"}t(e,t){return A(this.hass,e,t)}willUpdate(e){if(e.has("hass")&&this.hass){let o=e.get("hass");(!o||o.user?.id!==this.hass.user?.id)&&(this._productColors=j.get(`productColors.${this.hass.user?.id??"anonymous"}`)==="true"),this.data.setHass(this.hass),this.tt.session?.setLive(this.hass)}e.has("hass")&&this.hass&&!Tt(this.hass.language)&&no(this.hass.language).then(()=>this.requestUpdate());let t=this.data.building;t&&this._floorId&&!t.floors.some(o=>o.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e,at(e))}onRoomTap(e){let{floorId:t,roomId:o}=e.detail;if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}o&&(this._roomId=o===this._roomId?null:o)}setWallMode(e){this._wallMode=e,j.set("walls",e)}setKeepRoof(e){this._keepRoof=e,j.set("roof",e?"1":"0")}setExplode(e){this._explode=e,j.set("explode",e?"1":"0")}setQuality(e){this._quality=e,j.set("quality",e)}editFurniture(e,t){let o=this.data.building;if(!o)return;let i=structuredClone(o);for(let r of i.floors){let s=r.furniture.find(a=>a.id===e);s&&t(s,r)}this.data.edit(i)}editDevice(e,t){let o=this.data.building;if(!o)return;let i=structuredClone(o);for(let r of i.floors){let s=r.placements.find(a=>a.entity_id===e);s&&t(s,r)}this.data.edit(i)}moveDevice(e){let{id:t,x:o,z:i}=e.detail;this.editDevice(t,(r,s)=>{let[a,l]=ci(s,r.x,r.z,o,i);Object.assign(r,{x:a,z:l})})}turnStep(){return I(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let o=structuredClone(t);for(let i of o.floors)i.placements=i.placements.filter(r=>r.entity_id!==e);this.data.edit(o),this._selDevice=null}renderDeviceFields(e){let o=this.data.building?.floors.find(u=>u.placements.some(p=>p.entity_id===e)),i=o?.placements.find(u=>u.entity_id===e);if(!o||!i)return S;let r=I(e),s=r==="light",a=r==="camera",l=i.mount==="ceiling",d=r?At(r,o.height,s||a?i.mount??(a?"wall":"ceiling"):null):1,c=(u,p,f,g,m,h)=>w`<label class="fp3d-size" title=${u}
        >${u}
        <input
          type="number"
          inputmode="decimal"
          step=${f}
          min=${g}
          max=${m}
          .value=${String(Math.round(p*100)/100)}
          @change=${v=>{let _=parseFloat(v.target.value.replace(",","."));Number.isFinite(_)&&h(Math.min(m,Math.max(g,_)))}}
        />
      </label>`;return w`${s?w`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>w`<option value=${u} ?selected=${u===(i.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:S}
      ${a?w`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${c(this.t("camera_fov_short"),i.fov??(l?360:90),5,10,360,u=>this.editDevice(e,p=>p.fov=u))}
            ${c(this.t("camera_reach_short"),i.reach??(l?3:4.5),.5,.5,50,u=>this.editDevice(e,p=>p.reach=u))}
            ${c(this.t("camera_tilt_short"),i.tilt??(l?65:20),5,0,90,u=>this.editDevice(e,p=>p.tilt=u))}`:S}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((i.y??d)*100)/100)}
          @change=${u=>{let p=parseFloat(u.target.value.replace(",","."));Number.isFinite(p)&&p>=0&&this.editDevice(e,f=>f.y=Math.round(p*1e3)/1e3)}}
        />
      </label>
      ${i.y!==null?w`<button class="fp3d-chip" @click=${()=>this.editDevice(e,u=>u.y=null)}>${this.t("height_auto")}</button>`:S}`}furnitureName(e){let t=this.data.building?.floors.flatMap(o=>o.furniture).find(o=>o.id===e);return t?_e(this.hass,t.type):""}moveFurniture(e){let{id:t,x:o,z:i}=e.detail,r=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(s,a)=>{let[l,d]=ci(a,s.x,s.z,o,i);Object.assign(s,{x:l,z:d});let c=uc(a,s,r);c&&Object.assign(s,c)})}renderSizeFields(e){let t=this.data.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e);if(!t)return S;let o=Pi(this.hass,this.data.building?.settings.units)==="imperial",i=l=>o?zi(l):String(Math.round(l*100)/100),r=l=>o?Ei(l,"imperial"):parseFloat(l.replace(",",".")),s=(l,d)=>w`<label class="fp3d-size" title=${this.t(`size_${l}`)}
      >${d}
      <input
        type=${o?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${i(t[l])}
        @change=${c=>{let u=r(c.target.value)??NaN;Number.isFinite(u)&&u>0&&this.editFurniture(e,p=>p[l]=Math.round(u*1e3)/1e3)}}
    /></label>`,a=this.data.building?.floors.find(l=>l.furniture.some(d=>d.id===e));return w`${s("w",this.t("size_short_w"))}${s("d",this.t("size_short_d"))}${s("h",this.t("size_short_h"))}
    ${a&&Ds(t)?w`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${o?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${i(t.mount_y??pe(a,t))}
              @change=${l=>{let d=r(l.target.value)??NaN;Number.isFinite(d)&&d>=0&&this.editFurniture(e,c=>c.mount_y=Math.round(d*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?w`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,l=>l.mount_y=null)}>${this.t("height_auto")}</button>`:S}`:S}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let o=structuredClone(t);for(let i of o.floors)i.furniture=i.furniture.filter(r=>r.id!==e);this.data.edit(o),this._selFurniture=null}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),o=this.data.building;if(!(!t||!o||!this.hass)){if(!H("time_travel")){t.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this.tt.start({live:this.hass,building:o,spec:t.historyEntities(),quality:this._quality,at:e,t:(i,r)=>A(this.hass,i,r)})}}updated(){if(this.ttLinked||!this.data.building||!xt()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let e=new URLSearchParams(location.search).get("tt");e!==null&&H("time_travel")&&this.toggleTimeTravel(e)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}checkOffers(){this.offersChecked||!this.hass?.user?.is_admin||(this.offersChecked=!0,es(this.hass).then(e=>{this._shopConnected=!!e.active,this._newOffers=e.active?Ji(e.offers??[]).length:0,this._readyPacks=e.active?Qi(e.updates??[]).length+(e.packs??[]).filter(t=>t.installed===null).length:0}).catch(()=>{}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop()}render(){if(this.hass&&!Tt(this.hass.language))return S;this.checkOffers();let e=this.data.building,t=this.data.saveState;return w`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._clean&&this._mode==="view"?S:w`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonPlan 3D</h1>
          ${this.isAdmin?w`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}${this._readyPacks?w`<span class="fp3d-badge" title=${this.t("ext_badge_ready_hint")}>⬇ ${this.t("ext_badge_ready",{n:this._readyPacks})}</span>`:this._newOffers?w`<span class="fp3d-badge" title=${this.t("offers_dot")}>${this.t("ext_badge_new",{n:this._newOffers})}</span>`:S}
                </button>
              </div>`:S}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(o=>o.rooms.length)?w`<button
                  class="fp3d-opts-btn"
                  aria-expanded=${this._optsOpen}
                  title=${this.t("view_options")}
                  aria-label=${this.t("view_options")}
                  @click=${()=>this._optsOpen=!this._optsOpen}
                >
                  ⚙
                </button>
                <div class="fp3d-view-opts ${this._optsOpen?"fp3d-opts-open":""}">
                <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(o=>w`<button aria-pressed=${this._quality===o} @click=${()=>this.setQuality(o)}>${this.t(`quality_${o}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${Gr.map(o=>w`<button
                      aria-pressed=${this._theme===o}
                      @click=${()=>{this._theme=o,j.set("theme",o)}}
                    >
                      ${this.t(`theme_${o}`)}
                    </button>`)}
                <button aria-pressed=${this._productColors} @click=${()=>{this._productColors=!this._productColors,j.set(`productColors.${this.hass?.user?.id??"anonymous"}`,String(this._productColors))}}>Produktfarben</button>
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${o=>{this._accent=o.target.value,j.set("accent",this._accent)}}
                  />
                  ${this._accent?w`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,j.set("accent","")}}
                      >
                        ↺
                      </button>`:S}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(o=>w`<button
                      aria-pressed=${this._markers===o}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=o,j.set("markers",o)}}
                    >
                      ${this.t(`markers_${o}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(o=>w`<button
                      aria-pressed=${this._controlsRight===o}
                      title=${this.t(o?"controls_right":"controls_left")}
                      aria-label=${this.t(o?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=o,j.set("controls",o?"right":"left")}}
                    >
                      ${o?"\u25E8":"\u25E7"}
                    </button>`)}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,j.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,j.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`:S}
          ${this._mode==="editor"&&t!=="idle"?w`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:S}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?S:this.renderNotices()}
        ${this.data.error&&!e?w`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:S}
        ${!e&&!this.data.error?w`<p class="fp3d-message">${this.t("loading")}</p>`:S}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(e):S}
        ${this.renderGift()}
      </div>
    `}renderGift(){let e="fun_gifts_2026";if(!this.isAdmin||this._giftLater||this._shopConnected===null||!this.data.packsLoaded||ua.includes("fun_halloween")||H("fun_halloween")&&H("fun_pets"))return S;try{if(localStorage.getItem(`neonplan3d.news.${e}`)==="never")return S}catch{}let t=()=>{try{localStorage.setItem(`neonplan3d.news.${e}`,"never")}catch{}this._giftLater=!0},o=this._shopConnected;return w`<div class="fp3d-gift-veil" @click=${i=>i.target===i.currentTarget&&(this._giftLater=!0)}>
      <div class="fp3d-gift" role="dialog" aria-label=${this.t(o?"gift_title":"gift_title_free")}>
        <div class="fp3d-gift-pic">🎃 👻 🐱 🐶</div>
        <h3>${this.t(o?"gift_title":"gift_title_free")}</h3>
        <p>${this.t(o?"gift_text":"gift_text_free")}</p>
        <div class="fp3d-gift-actions">
          ${o?w`<button class="fp3d-btn fp3d-primary" @click=${()=>(this._giftLater=!0,this.setMode("extensions"))}>⬇ ${this.t("gift_install")}</button>`:w`<a class="fp3d-btn fp3d-primary" href=${ha(this.hass?.language)} target="_blank" rel="noopener" @click=${()=>this._giftLater=!0}>🎁 ${this.t("gift_register")}</a>`}
          <button class="fp3d-btn" @click=${()=>this._giftLater=!0}>${this.t("news_later")}</button>
          <button class="fp3d-btn" @click=${t}>${this.t("news_never")}</button>
        </div>
      </div>
    </div>`}renderNotices(){let e=this.data,t=[];if(e.needsRestart&&(e.versionGap==="frontend"?t.push(w`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):t.push(w`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&t.push(w`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let o=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(w`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:o})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?w`<div class="fp3d-notices">${t}</div>`:S}renderExtensions(){return this._editorReady?w`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.data.edit(e.detail)}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @offers-seen=${()=>this._newOffers=0}
      @packs-ready=${e=>this._readyPacks=e.detail}
    ></fp3d-extensions>`:(nr().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),w`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?w`<fp3d-editor
      class="fp3d-body"
      .productColors=${this._productColors}
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(nr().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),w`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){if(!e.floors.length||!e.floors.some(r=>r.rooms.length))return w`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?w`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:S}
      </div>`;let t=e.floors.find(r=>r.id===this._floorId),o=t?[t]:e.floors,i=this.tt.active;return w`
      ${this._clean?S:w`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?w`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(r=>w`<button
                  class="fp3d-chip"
                  aria-pressed=${r.id===this._floorId}
                  @click=${()=>{this._floorId=r.id,this._roomId=null}}
                >
                  ${r.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:S}
        ${o.flatMap(r=>[o.length>1&&r.rooms.some(s=>s.name.trim())?w`<span class="fp3d-nav-floor">${r.name}</span>`:S,...r.rooms.filter(s=>s.name.trim()).map(s=>w`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${s.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=r.id),this._roomId=s.id===this._roomId?null:s.id}}
            >
              ${s.name}
            </button>`)])}
        <button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,j.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${i?"fp3d-tt":""}">
        <fp3d-view3d
          class="fp3d-body"
          .hass=${this.tt.hass(this.hass)}
          .replay=${this.tt.session?.replay??null}
          .building=${e}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          .controlsRight=${this._controlsRight}
          .keepView=${this._keepView}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall&&!i}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${this._clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>{this._clean=!this._clean,j.set("clean",this._clean?"1":"0")}}
          .weather=${this._weather}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .productColors=${this._productColors}
          .accent=${this._accent}
          ?furnish=${this._furnish&&!i}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${r=>this._selFurniture=r.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${r=>this._selDevice=r.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${r=>{this._floorId=r.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?w`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${r=>this.view3d()?.lookThrough(r.detail.entity)}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${i}
              .room=${e.floors.flatMap(r=>r.rooms).find(r=>r.id===this._roomId)??null}
              .floor=${e.floors.find(r=>r.rooms.some(s=>s.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${Rt(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:S}
        ${this.tt.session?w`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:S}
        ${this._clean?S:w`<div class="fp3d-overlay">
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t("show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?w`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?w`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:S}
          ${!this._floorId&&e.settings.roof.type!=="none"?w`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:S}
          ${e.floors.length>1&&this._floorId?w`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(r=>w`<button
                      aria-pressed=${this._floorStack===r}
                      @click=${()=>{this._floorStack=r,j.set("floor_stack",r)}}
                    >
                      ${this.t(`floor_stack_short_${r}`)}
                    </button>`)}
              </div>`:S}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(r=>w`<button
                  aria-pressed=${this._heat===r}
                  @click=${()=>{this._heat=r,j.set("heat",r)}}
                >
                  ${this.t(r==="none"?"heat_off":`heat_short_${r}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,j.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,j.set("trail",this._trail?"1":"0")}}
          >
            ${H("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>this._cameraWall=!this._cameraWall}
          >
            ${H("camera_cockpit")?"":"\u{1F512} "}${this.t("cameras_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,j.set("weather",this._weather?"1":"0")}}
          >
            ${H("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
                  </div>`:S}
          </div>
          <button class="fp3d-chip fp3d-tt-chip" aria-pressed=${i} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
            ${H("time_travel")?"\u23EA":"\u{1F512}"} ${this.t("tt_chip")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?w`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:S}
        </div>`}
        ${this._furnish?w`<div class="fp3d-furnish-bar">
              ${this._selFurniture?w`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,r=>r.mirror=!r.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?w`<span>${Z(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:w`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:S}
      </div>
    `}static styles=[De,Qe,we`
      .fp3d-gift-veil {
        position: fixed;
        inset: 0;
        z-index: 40;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(2, 6, 14, 0.55);
      }
      .fp3d-gift {
        max-width: 440px;
        padding: 22px 22px 18px;
        border-radius: 18px;
        border: 1px solid #ff9a3c;
        background: var(--fp3d-panel, #0d1628);
        box-shadow: 0 0 40px rgba(255, 154, 60, 0.3);
        text-align: center;
      }
      .fp3d-gift-pic {
        font-size: 34px;
        letter-spacing: 6px;
      }
      .fp3d-gift h3 {
        margin: 10px 0 6px;
      }
      .fp3d-gift p {
        margin: 0 0 14px;
        color: var(--fp3d-muted, #a9b8d4);
      }
      .fp3d-gift-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: center;
      }
      .fp3d-badge {
        display: inline-block;
        margin-left: 6px;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1204;
        font-size: 0.78em;
        font-weight: 700;
        line-height: 1.5;
        box-shadow: 0 0 10px rgba(255, 181, 71, 0.7);
        vertical-align: middle;
        white-space: nowrap;
        animation: fp3d-badge-in 1.6s ease-out 2;
      }
      @keyframes fp3d-badge-in {
        0% {
          box-shadow: 0 0 0 0 rgba(255, 181, 71, 0.9);
        }
        100% {
          box-shadow: 0 0 0 10px rgba(255, 181, 71, 0);
        }
      }
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. The parent may pad itself by the
           screen's safe areas (notches; some themes set them on every screen): those are taken off, or the panel is
           taller than the window and its bottom is cut off (#529). */
        height: calc(100vh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        height: calc(100dvh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        background: var(--fp3d-bg);
      }
      .fp3d-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .fp3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 52px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        flex-wrap: wrap;
      }
      ha-menu-button {
        color: var(--fp3d-text);
      }
      h1 {
        font-family: var(--fp3d-title-font);
        font-weight: 700;
        font-size: 19px;
        letter-spacing: -0.01em;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .fp3d-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .fp3d-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        font-size: 13.5px;
      }
      .fp3d-notice span {
        flex: 1;
        min-width: 200px;
      }
      .fp3d-notice-warn {
        border-color: rgba(255, 181, 71, 0.6);
        color: var(--fp3d-warm);
      }
      .fp3d-notice-error {
        border-color: rgba(255, 107, 139, 0.6);
        color: var(--fp3d-danger);
        word-break: break-word;
      }
      .fp3d-chip-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13.5px;
      }
      .fp3d-size-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger);
      }
      .fp3d-grow {
        flex: 1;
      }
      .fp3d-save {
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      /* the view options (quality, look, symbols, side) fold behind ⚙ on every screen: a tidy header */
      .fp3d-opts-btn {
        display: grid;
        place-items: center;
        order: 3;
        width: 36px;
        height: 36px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: transparent;
        color: var(--fp3d-text);
        font-size: 17px;
        cursor: pointer;
      }
      .fp3d-opts-btn[aria-expanded="true"] {
        color: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
      }
      .fp3d-view-opts {
        display: none;
      }
      .fp3d-view-opts.fp3d-opts-open {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        order: 5;
        width: 100%;
      }
      /* phones: version and grow move with it */
      @media (max-width: 700px) {
        .fp3d-version {
          order: 4;
        }
        .fp3d-header .fp3d-grow {
          display: none;
        }
      }
      /* the installed version, at the far right of the header */
      .fp3d-version {
        margin-left: auto;
        font-size: 11.5px;
        color: var(--fp3d-muted);
        white-space: nowrap;
        opacity: 0.8;
      }
      .fp3d-save-error {
        color: var(--fp3d-danger);
      }
      .fp3d-body {
        flex: 1;
        min-height: 0;
      }
      /* the colour well beside the look: a small round swatch, the reset arrow next to it */
      .fp3d-accent-pick {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 0 4px;
      }
      .fp3d-accent-pick input[type="color"] {
        width: 22px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 50%;
        background: none;
        cursor: pointer;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
      }
      .fp3d-accent-reset {
        border: none;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
        font-size: 14px;
        padding: 0 2px;
      }
      .fp3d-nav {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      /* a desktop shows a thin scrollbar while the pointer rests on the bar */
      .fp3d-nav:hover {
        scrollbar-width: thin;
      }
      /* wrapped: several lines, at most about three before the bar itself scrolls */
      .fp3d-nav-wrap {
        flex-wrap: wrap;
        overflow-x: visible;
        overflow-y: auto;
        max-height: 132px;
      }
      .fp3d-nav-floor {
        flex: none;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-left: 6px;
      }
      .fp3d-nav-toggle {
        flex: none;
        margin-left: auto;
        position: sticky;
        right: 0;
        min-width: 34px;
        padding-left: 8px;
        padding-right: 8px;
      }
      .fp3d-nav .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--fp3d-line);
      }
      .fp3d-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-stage-wrap fp3d-view3d {
        flex: 1;
      }
      .fp3d-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      fp3d-view3d {
        --fp3d-bottom-inset: 52px;
      }
      .fp3d-clean fp3d-view3d {
        --fp3d-bottom-inset: 0px;
      }
      .fp3d-furnish-bar {
        bottom: 68px;
      }
      /* time travel: its bar at the bottom; the switches, the buttons of the view and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt fp3d-view3d {
        --fp3d-bottom-inset: calc(52px + var(--fp3d-tt-h));
      }
      .fp3d-tt .fp3d-overlay {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt .fp3d-room-panel {
        bottom: calc(var(--fp3d-tt-h) + 6px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .fp3d-room-open .fp3d-overlay {
          display: none;
        }
        /* the view's own buttons (search, eye) step up above the sheet */
        .fp3d-room-open fp3d-view3d {
          --fp3d-bottom-inset: calc(55% + 8px);
        }
        /* phones: the time bar takes two rows; the switches make way for it */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
        .fp3d-tt .fp3d-overlay {
          display: none;
        }
        .fp3d-tt fp3d-view3d {
          --fp3d-bottom-inset: var(--fp3d-tt-h);
        }
      }
      /* search and eye on the right (#285): the bar leaves room there instead */
      .fp3d-side-right .fp3d-overlay {
        left: 12px;
        right: 100px;
      }
      /* an open room panel keeps the switches beside it, not over its last rows */
      .fp3d-room-open .fp3d-overlay {
        right: calc(min(360px, 100% - 28px) + 26px);
      }
      .fp3d-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        /* room for the search button and the eye beside it */
        left: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .fp3d-overlay > * {
        pointer-events: auto;
      }
      /* the view's switches in one "Show" menu that opens upwards */
      .fp3d-show-wrap {
        position: relative;
        display: inline-flex;
      }
      .fp3d-show-veil {
        position: fixed;
        inset: 0;
        z-index: 29;
      }
      .fp3d-show-panel {
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        z-index: 30;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        width: min(470px, 92vw);
        padding: 10px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid, #0d1628);
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-show-panel > .fp3d-seg {
        flex-wrap: wrap;
      }
      .fp3d-show-panel > .fp3d-chip {
        box-shadow: none;
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .fp3d-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-message,
      .fp3d-empty {
        padding: 32px 20px;
        color: var(--fp3d-muted);
        text-align: center;
      }
      .fp3d-phone-only {
        display: none;
      }
      @media (max-width: 600px) {
        .fp3d-phone-only {
          display: block;
        }
      }
      .fp3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",ui);function Po(n,e,t=new Date){if(!n||n==="off")return!1;if(n==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let o=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(n.trim());if(!o)return!1;let i=Number(o[1])*60+Number(o[2]),r=Number(o[3])*60+Number(o[4]),s=t.getHours()*60+t.getMinutes();return i<=r?s>=i&&s<r:s>=i||s<r}var hc;function pc(){let n=new URL("./neonplan3d-card-editor.js?v=835476a0280d",new URL(import.meta.url)).href;return hc??=import(n),hc}function fc(){try{let n=localStorage.getItem("neonplan3d.card_walls");return n==="auto"||n==="cut"?n:null}catch{return null}}var hi=class extends me{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new zt(this);tt=new Gt(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=fc(),this._heat=null,this._explode=null,this._fullscreen=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){clearTimeout(this.cleanTimer);let t=this._config?.controls_hide_after??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;if(!H("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let o=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:o?.quality??"auto",speed:o?.time_travel_speed??null,range:o?.time_travel_range??null,t:(i,r)=>A(this.hass,i,r)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){if(this.tt.session?.playing){this.armIdle();return}this.tt.stop(),this._roomId=this._config?.room??null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{let e=Math.round(window.visualViewport?.height??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),this._config?.fill&&!this._fullscreen){let t=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(t-this._top)>1)&&(this._top=t)}};connectedCallback(){super.connectedCallback(),at("card"),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),window.visualViewport?.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.armIdle(),this.nightTimer=setInterval(()=>this._night=Po(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),window.visualViewport?.removeEventListener("resize",this.onViewport),this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await pc(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=fc(),this._heat=null,this._explode=null,this._orbit=!1,this._night=Po(e.night,this.hass),this._clean=e.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&this.hass){this.data.setHass(this.hass),this.tt.session?.setLive(this.hass),Tt(this.hass.language)||no(this.hass.language).then(()=>this.requestUpdate());let t=Po(this._config?.night,this.hass);t!==this._night&&(this._night=t)}}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){if(this.hass&&!Tt(this.hass.language))return S;let e=this.data.building,t=this._config?.height??420,o=this._config;!this.roomApplied&&e&&o?.room&&(this.roomApplied=!0,e.floors.some(_=>_.rooms.some(b=>b.id===o.room))&&(this._roomId=o.room));let i=this._floorId===void 0?o?.floor??null:this._floorId,r=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(_=>_.id===i)?i:null,s=!!this._roomId&&o?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!r&&(e?.floors.length??0)>1,a=_=>o?.controls===!0||Array.isArray(o?.controls)&&o.controls.includes(_),l=["temperature","humidity","co2"].filter(_=>a(_)),d=this._walls??o?.walls??"auto",c=this._heat??o?.heatmap??"none",u=this._explode??o?.explode??!0,p=this._fullscreen?"100%":o?.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":`${t}px`,f=!!e&&!this._clean&&(s||(!!o?.controls||!!o?.time_travel)&&!(this._roomId&&o.room_panel!==!1)),g=this.tt.active,m=o?.controls_hidden!==void 0||(o?.controls_hide_after??0)>0,h=_=>A(this.hass,_),v=/^#[0-9a-f]{6}$/i.test(o?.accent??"")?o.accent:null;return w`<ha-card class=${this._night?"fp3d-night":""} style=${v?`--fp3d-accent:${v}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${g?"fp3d-tt":""}" style="height:${p}">
        ${e&&e.floors.some(_=>_.rooms.length)?w`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${this.tt.session?.replay??null}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${r}
              .roomId=${this._roomId}
              .wallMode=${d}
              .explode=${u}
              .keepRoof=${o?.roof_fade===!1}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .markerNames=${this._config?.marker_names===!0}
              .central=${this._config?.central!==!1}
              .walkable=${this._config?.walk!==!1}
              .petsOn=${this._config?.pets!==!1}
              .ghostOn=${this._config?.ghost!==!1}
              .buttons=${this._config?.buttons?.map((_,b)=>({id:`card_${b}`,..._}))??null}
              .heatMode=${c}
              .theme=${this._config?.theme??"neon"}
              .accent=${this._config?.accent??null}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              .holograms=${this._config?.holograms??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${o?.room_names!==!1}
              .controlsRight=${o?.controls_side==="right"}
              .keepView=${o?.keep_view===!0}
              .floorStack=${o?.floor_stack??"dim"}
              .panelOpen=${!!this._roomId&&o?.room_panel!==!1}
              .alerts=${o?.alerts!==!1}
              .householdCard=${o?.household_card!==!1}
              .alertJump=${!!o?.alert_jump}
              .scenes=${o?.scenes!==!1}
              ?trail=${!!o?.motion_trail}
              .cameraWall=${this._cameraWall&&!g}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${m}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              .weather=${o?.weather!==!1}
              .weatherEntityId=${o?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${o?.start_view??null}
              style=${g?`--fp3d-bottom-inset: ${f?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:f?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${_=>{if(this.canSwitch&&(e?.floors.length??0)>1&&_.detail.floorId&&r!==_.detail.floorId){this._floorId=_.detail.floorId,this._roomId=null;return}_.detail.roomId&&(this._roomId=_.detail.roomId===this._roomId?null:_.detail.roomId)}}
              @floor-tap=${_=>{this._floorId=_.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:w`<p class="fp3d-card-msg">${this.data.error??(e?A(this.hass,"no_building"):A(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?w`<fp3d-room-panel
              @camera-look=${_=>this.view3d()?.lookThrough(_.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${g}
              .room=${e.floors.flatMap(_=>_.rooms).find(_=>_.id===this._roomId)??null}
              .floor=${e.floors.find(_=>_.rooms.some(b=>b.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${Rt(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:S}
        ${f&&e?w`<div class="fp3d-card-controls">
              ${s?w`<button class="fp3d-chip" @click=${()=>this.back()}>${h("back")}</button>`:S}
              ${o?.time_travel?w`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${g} title=${h("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${H("time_travel")?"\u23EA":"\u{1F512}"} ${h("tt_chip")}
                  </button>`:S}
              ${o?.camera_wall?w`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${h("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${h("cameras_short")}</button>`:S}
              ${a("walls")?w`<div class="fp3d-seg">
                    <button aria-pressed=${d==="auto"} @click=${()=>this.setWalls("auto")}>${h("walls_auto")}</button>
                    <button aria-pressed=${d==="cut"} @click=${()=>this.setWalls("cut")}>${h("walls_cut")}</button>
                  </div>`:S}
              ${a("floors")&&e.floors.length>1&&!r?w`<div class="fp3d-seg">
                    <button aria-pressed=${u} @click=${()=>this._explode=!0}>${h("floors_apart")}</button>
                    <button aria-pressed=${!u} @click=${()=>this._explode=!1}>${h("floors_stacked")}</button>
                  </div>`:S}
              ${l.length?w`<div class="fp3d-seg" role="group" aria-label=${h("heatmap")}>
                    ${["none",...l].map(_=>w`<button aria-pressed=${c===_} @click=${()=>this._heat=_}>
                          ${h(_==="none"?"heat_off":`heat_short_${_}`)}
                        </button>`)}
                  </div>`:S}
            </div>`:S}
        ${this.tt.session?w`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:S}
        ${o?.fullscreen_button&&!this._clean&&!(this._roomId&&o.room_panel!==!1)?w`<button class="fp3d-card-full" title=${h(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${h(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:S}
        ${o?.dashboard&&!this._clean&&!(this._roomId&&o.room_panel!==!1)?w`<button class="fp3d-card-full fp3d-card-dash ${o.fullscreen_button?"fp3d-card-dash-2":""}" title=${o.dashboard_label||o.dashboard} aria-label=${o.dashboard_label||o.dashboard} @click=${()=>this.openDashboard(o.dashboard)}>
              ${o.dashboard_label?w`<span>${o.dashboard_label}</span>`:"\u2302"}
            </button>`:S}
      </div>
    </ha-card>`}static styles=[De,Qe,we`
      .fp3d-card-controls {
        position: absolute;
        left: 60px;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        pointer-events: none;
      }
      .fp3d-card-controls > * {
        pointer-events: auto;
      }
      /* time travel: its bar at the bottom, the switches and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt .fp3d-card-controls {
        bottom: calc(var(--fp3d-tt-h) + 2px);
      }
      .fp3d-tt .fp3d-card-panel {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      .fp3d-card-dash {
        width: auto;
        min-width: 38px;
        padding: 0 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .fp3d-card-dash-2 {
        right: 56px;
      }
      /* the view's walk button steps aside for the card's own buttons at the top right */
      fp3d-view3d {
        --fp3d-walk-right: 104px;
      }
      .fp3d-card-full {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font-size: 18px;
        cursor: pointer;
      }
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      ha-card:fullscreen {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        border: 0;
      }
      ha-card:fullscreen .fp3d-card-body {
        flex: 1 1 auto;
        min-height: 0;
      }
      /* night (kiosk): the whole card dimmed */
      ha-card.fp3d-night .fp3d-card-body {
        filter: brightness(0.55);
      }
      .fp3d-card-body {
        position: relative;
        display: flex;
        height: 100%;
        container-type: size;
        container-name: fp3d;
      }
      fp3d-view3d {
        flex: 1;
      }
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
      }
      .fp3d-card-panel {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: min(340px, calc(100% - 20px));
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-card-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        /* the time bar takes two rows here */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
      }
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",hi);let n=window;n.customCards=n.customCards??[],n.customCards.push({type:"neonplan3d-card",name:A(void 0,"card_name"),description:A(void 0,"card_description"),preview:!1})}Mi();
