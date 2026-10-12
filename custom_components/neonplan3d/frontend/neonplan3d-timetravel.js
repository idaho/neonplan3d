var On={type:"none",pitch:35,overhang:.4},tr={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...On}};var Vn=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var zn=new Set([...Vn,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function F(r,t){let e=!1;for(let n=0,o=t.length-1;n<t.length;o=n++){let[s,i]=t[n],[a,l]=t[o];i>r[1]!=l>r[1]&&r[0]<(a-s)*(r[1]-i)/(l-i)+s&&(e=!e)}return e}var Dn=Math.PI/180;var pr=Math.tan(30*Dn);var Or=Math.PI/180;var it=r=>r&&r!=="none"?r:null;function $t(r,t=e=>it(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors)for(let o of n.furniture){let s=t(o);if(o.type==="meter")e.grid??=s,e.gridExport??=it(o.export);else if(o.type==="inverter"&&s&&!e.solar.includes(s))e.solar.push(s);else if(o.type==="home_battery"){s&&!e.battery.includes(s)&&e.battery.push(s);let i=it(o.charge);i&&!e.charge.includes(i)&&e.charge.push(i),(s||i)&&e.batteries.push({power:s,charge:i});let a=it(o.soc);a&&!e.soc.includes(a)&&e.soc.push(a)}}return e}function R(r,t=!1){if(!r)return null;let e=Number(r.state);if(!Number.isFinite(e))return null;let n=String(r.attributes.unit_of_measurement??"W"),o=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-o:o}function he(r,t,e,n=$t(t)){let o=t.energy,s=o.grid??n.grid,i=s?R(r.states[s],o.grid_invert):null;if(!o.grid&&n.gridExport){let f=Math.max(0,R(r.states[n.gridExport])??0);i=Math.max(0,i??0)-f}let a=o.solar?R(r.states[o.solar]):null;if(!o.solar&&n.solar.length){let f=n.solar.map(b=>R(r.states[b])).filter(b=>b!==null);a=f.length?f.reduce((b,g)=>b+g,0):null}let l=o.battery?R(r.states[o.battery],o.battery_invert):null;if(!o.battery&&n.batteries.length){let f=n.batteries.map(b=>{if(b.charge){let g=b.power?Math.max(0,R(r.states[b.power])??0):0,x=Math.max(0,R(r.states[b.charge])??0);return g-x}return b.power?R(r.states[b.power],o.battery_invert):null}).filter(b=>b!==null);l=f.length?f.reduce((b,g)=>b+g,0):null}let u=(o.battery_soc?[o.battery_soc]:n.soc).map(f=>Number(r.states[f]?.state)).filter(f=>Number.isFinite(f)),m=u.length?u.reduce((f,b)=>f+b,0)/u.length:NaN,p=o.tariff?r.states[o.tariff]:void 0,d=Number(p?.state),h=o.consumption?R(r.states[o.consumption]):null;return h!==null?h=Math.max(0,h):i!==null||a!==null||l!==null?h=Math.max(0,(i??0)+Math.max(0,a??0)+(l??0)):e.length&&(h=e.reduce((f,b)=>f+b.power,0)),{grid:i,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(m)?m:null,tariff:p&&Number.isFinite(d)?{value:d,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:h}}var at=globalThis,lt=at.ShadowRoot&&(at.ShadyCSS===void 0||at.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rt=Symbol(),fe=new WeakMap,Q=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(lt&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=fe.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&fe.set(e,t))}return t}toString(){return this.cssText}},ge=r=>new Q(typeof r=="string"?r:r+"",void 0,Rt),At=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((n,o,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[s+1],r[0]);return new Q(e,r,Rt)},be=(r,t)=>{if(lt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=at.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,r.appendChild(n)}},Tt=lt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return ge(e)})(r):r;var{is:In,defineProperty:Hn,getOwnPropertyDescriptor:Ln,getOwnPropertyNames:Wn,getOwnPropertySymbols:Un,getPrototypeOf:Bn}=Object,ct=globalThis,ye=ct.trustedTypes,qn=ye?ye.emptyScript:"",Kn=ct.reactiveElementPolyfillSupport,Y=(r,t)=>r,Ft={toAttribute(r,t){switch(t){case Boolean:r=r?qn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ve=(r,t)=>!In(r,t),_e={attribute:!0,type:String,converter:Ft,reflect:!1,useDefault:!1,hasChanged:ve};Symbol.metadata??=Symbol("metadata"),ct.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_e){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&Hn(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:s}=Ln(this.prototype,t)??{get(){return this[e]},set(i){this[e]=i}};return{get:o,set(i){let a=o?.call(this);s?.call(this,i),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_e}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;let t=Bn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){let e=this.properties,n=[...Wn(e),...Un(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift(Tt(o))}else t!==void 0&&e.push(Tt(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return be(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Ft).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ft;this._$Em=o;let a=i.fromAttribute(e,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,e,n,o=!1,s){if(t!==void 0){let i=this.constructor;if(o===!1&&(s=this[t]),n??=i.getPropertyOptions(t),!((n.hasChanged??ve)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:s},i){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),s!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:i}=s,a=this[o];i!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[Y("elementProperties")]=new Map,A[Y("finalized")]=new Map,Kn?.({ReactiveElement:A}),(ct.reactiveElementVersions??=[]).push("2.1.2");var Dt=globalThis,xe=r=>r,ut=Dt.trustedTypes,we=ut?ut.createPolicy("lit-html",{createHTML:r=>r}):void 0,Re="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,Ae="?"+z,jn=`<${Ae}>`,N=document,X=()=>N.createComment(""),J=r=>r===null||typeof r!="object"&&typeof r!="function",It=Array.isArray,Gn=r=>It(r)||typeof r?.[Symbol.iterator]=="function",zt=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Me=/-->/g,ke=/>/g,P=RegExp(`>|${zt}(?:([^\\s"'>=/]+)(${zt}*=${zt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Se=/'/g,Ee=/"/g,Te=/^(?:script|style|textarea|title)$/i,Ht=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),v=Ht(1),Fe=Ht(2),rs=Ht(3),D=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),$e=new WeakMap,C=N.createTreeWalker(N,129);function ze(r,t){if(!It(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return we!==void 0?we.createHTML(t):t}var Qn=(r,t)=>{let e=r.length-1,n=[],o,s=t===2?"<svg>":t===3?"<math>":"",i=Z;for(let a=0;a<e;a++){let l=r[a],c,u,m=-1,p=0;for(;p<l.length&&(i.lastIndex=p,u=i.exec(l),u!==null);)p=i.lastIndex,i===Z?u[1]==="!--"?i=Me:u[1]!==void 0?i=ke:u[2]!==void 0?(Te.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=P):u[3]!==void 0&&(i=P):i===P?u[0]===">"?(i=o??Z,m=-1):u[1]===void 0?m=-2:(m=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?P:u[3]==='"'?Ee:Se):i===Ee||i===Se?i=P:i===Me||i===ke?i=Z:(i=P,o=void 0);let d=i===P&&r[a+1].startsWith("/>")?" ":"";s+=i===Z?l+jn:m>=0?(n.push(c),l.slice(0,m)+Re+l.slice(m)+z+d):l+z+(m===-2?a:d)}return[ze(r,s+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},tt=class r{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let s=0,i=0,a=t.length-1,l=this.parts,[c,u]=Qn(t,e);if(this.el=r.createElement(c,n),C.currentNode=this.el.content,e===2||e===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(o=C.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let m of o.getAttributeNames())if(m.endsWith(Re)){let p=u[i++],d=o.getAttribute(m).split(z),h=/([.?@])?(.*)/.exec(p);l.push({type:1,index:s,name:h[2],strings:d,ctor:h[1]==="."?Vt:h[1]==="?"?Pt:h[1]==="@"?Ct:U}),o.removeAttribute(m)}else m.startsWith(z)&&(l.push({type:6,index:s}),o.removeAttribute(m));if(Te.test(o.tagName)){let m=o.textContent.split(z),p=m.length-1;if(p>0){o.textContent=ut?ut.emptyScript:"";for(let d=0;d<p;d++)o.append(m[d],X()),C.nextNode(),l.push({type:2,index:++s});o.append(m[p],X())}}}else if(o.nodeType===8)if(o.data===Ae)l.push({type:2,index:s});else{let m=-1;for(;(m=o.data.indexOf(z,m+1))!==-1;)l.push({type:7,index:s}),m+=z.length-1}s++}}static createElement(t,e){let n=N.createElement("template");return n.innerHTML=t,n}};function W(r,t,e=r,n){if(t===D)return t;let o=n!==void 0?e._$Co?.[n]:e._$Cl,s=J(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(r),o._$AT(r,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=W(r,o._$AS(r,t.values),o,n)),t}var Ot=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??N).importNode(e,!0);C.currentNode=o;let s=C.nextNode(),i=0,a=0,l=n[0];for(;l!==void 0;){if(i===l.index){let c;l.type===2?c=new et(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new Nt(s,this,t)),this._$AV.push(c),l=n[++a]}i!==l?.index&&(s=C.nextNode(),i++)}return C.currentNode=N,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},et=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),J(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==D&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Gn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=tt.createElement(ze(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{let s=new Ot(o,this),i=s.u(this.options);s.p(e),this.T(i),this._$AH=s}}_$AC(t){let e=$e.get(t.strings);return e===void 0&&$e.set(t.strings,e=new tt(t)),e}k(t){It(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let s of t)o===e.length?e.push(n=new r(this.O(X()),this.O(X()),this,this.options)):n=e[o],n._$AI(s),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=xe(t).nextSibling;xe(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(t,e=this,n,o){let s=this.strings,i=!1;if(s===void 0)t=W(this,t,e,0),i=!J(t)||t!==this._$AH&&t!==D,i&&(this._$AH=t);else{let a=t,l,c;for(t=s[0],l=0;l<s.length-1;l++)c=W(this,a[n+l],e,l),c===D&&(c=this._$AH[l]),i||=!J(c)||c!==this._$AH[l],c===_?t=_:t!==_&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}i&&!o&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Vt=class extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}},Pt=class extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}},Ct=class extends U{constructor(t,e,n,o,s){super(t,e,n,o,s),this.type=5}_$AI(t,e=this){if((t=W(this,t,e,0)??_)===D)return;let n=this._$AH,o=t===_&&n!==_||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==_&&(n===_||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Nt=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}};var Yn=Dt.litHtmlPolyfillSupport;Yn?.(tt,et),(Dt.litHtmlVersions??=[]).push("3.3.3");var Oe=(r,t,e)=>{let n=e?.renderBefore??t,o=n._$litPart$;if(o===void 0){let s=e?.renderBefore??null;n._$litPart$=o=new et(t.insertBefore(X(),s),s,void 0,e??{})}return o._$AI(r),o};var Lt=globalThis,O=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Oe(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};O._$litElement$=!0,O.finalized=!0,Lt.litElementHydrateSupport?.({LitElement:O});var Zn=Lt.litElementPolyfillSupport;Zn?.({LitElement:O});(Lt.litElementVersions??=[]).push("4.2.2");var Ve="https://discord.gg/SSdVVFsev7";function I(r,t,e=9e5){let n=r.mean.length;if(!n||t<r.start)return NaN;let o=(t-r.start)/r.step-.5,s=Math.floor(o);if(s<0)return r.mean[0];if(s>=n-1){let u=Pe(r,n-1);return u>=0&&t-(r.start+(u+.5)*r.step)<=e?r.mean[u]:NaN}let i=r.mean[s],a=r.mean[s+1],l=o-s;if(!Number.isNaN(i)&&!Number.isNaN(a))return i+(a-i)*l;let c=Pe(r,s);return c>=0&&t-(r.start+(c+.5)*r.step)<=e?r.mean[c]:NaN}function Pe(r,t){for(let e=t;e>=0;e--)if(!Number.isNaN(r.mean[e]))return e;return-1}function Ce(r,t,e=0){if(typeof t=="number"&&t>=0&&t<=6)return 10**-t;switch(typeof r=="string"?r:""){case"\xB0C":case"\xB0F":case"K":case"A":case"bar":case"km/h":case"m/s":return .1;case"%":case"V":case"hPa":case"mbar":case"dB":case"dBm":return 1;case"W":case"VA":case"var":case"ppm":case"lx":case"\xB5g/m\xB3":return Math.abs(e)>=1e3?10:1;case"kW":case"kWh":case"kVA":return .01;default:return Math.abs(e)>=100?1:Math.abs(e)>=10?.1:.01}}function Ne(r,t){if(!Number.isFinite(r))return"unknown";let e=t>=1?0:Math.min(6,Math.max(0,Math.round(-Math.log10(t)))),o=(Math.round(r/t)*t).toFixed(e);return/^-0(\.0*)?$/.test(o)?o.slice(1):o}var Xn=r=>typeof r=="string"?{s:r,a:null}:{s:String(r[0]),a:r[1]&&typeof r[1]=="object"?r[1]:null},V=r=>`${r.s}\0${r.a?JSON.stringify(r.a):""}`;function Ie(r){let t=[...r].sort((p,d)=>p.day_start-d.day_start),e=new Map,n=new Map,o=new Set,s=1/0,i=-1/0,a=null,l=!1,c=null;for(let p of t){s=Math.min(s,p.day_start*1e3),i=Math.max(i,p.end*1e3),p.oldest===null?l=!0:a=a===null?p.oldest*1e3:Math.min(a,p.oldest*1e3),c??=p.keep_days;for(let[d,h]of Object.entries(p.entities??{})){let f=e.get(d)??[],b=p.day_start*1e3,g=Math.min(h.t.length,h.v.length);for(let x=0;x<g;x++){let w=h.tab[h.v[x]];if(w===void 0)continue;let y=Xn(w),k=V(y),E=f[f.length-1],G=b+h.t[x]*1e3;E&&(G<E.t||E.k===k)||f.push({t:G,v:y,k})}e.set(d,f)}for(let[d,h]of Object.entries(p.stats??{})){let f=n.get(d)??[];f.push({start:h.start*1e3,step:h.step*1e3,mean:h.mean}),n.set(d,f)}for(let d of p.missing??[])o.add(d)}let u=new Map;for(let[p,d]of e){if(!d.length)continue;let h=[],f=new Map,b=new Float64Array(d.length),g=new Uint32Array(d.length),x=new Float64Array(d.length);for(let w=0;w<d.length;w++){let y=f.get(d[w].k);y===void 0&&(y=h.length,h.push(d[w].v),f.set(d[w].k,y)),b[w]=d[w].t,g[w]=y,x[w]=w>0&&d[w-1].v.s===d[w].v.s?x[w-1]:d[w].t}u.set(p,{id:p,times:b,vals:g,values:h,since:x}),o.delete(p)}let m=new Map;for(let[p,d]of n){let h=d[0].step;if(!(h>0))continue;let f=Math.min(...d.map(w=>w.start)),b=Math.max(...d.map(w=>w.start+w.mean.length*w.step)),g=Math.max(0,Math.round((b-f)/h));if(!g)continue;let x=new Float32Array(g).fill(NaN);for(let w of d)w.mean.forEach((y,k)=>{let E=Math.round((w.start+k*w.step-f)/h);typeof y=="number"&&Number.isFinite(y)&&E>=0&&E<g&&(x[E]=y)});x.every(w=>Number.isNaN(w))||(m.set(p,{id:p,start:f,step:h,mean:x}),o.delete(p))}return{start:Number.isFinite(s)?s:0,end:Number.isFinite(i)?i:0,oldest:l?null:a,keepDays:c,tracks:u,series:m,missing:o}}function S(r,t){let e=0,n=r.length-1;if(n<0||r[0]>t)return-1;for(;e<n;){let o=e+n+1>>1;r[o]<=t?e=o:n=o-1}return e}var B=class{tracks;idx;t=-1/0;constructor(t){this.tracks=[...t.tracks.values()],this.idx=new Int32Array(this.tracks.length).fill(-1)}at(t){let e=t>=this.t;for(let n=0;n<this.tracks.length;n++){let o=this.tracks[n].times,s=this.idx[n];if(!e)s=S(o,t);else{let i=0;for(;s+1<o.length&&o[s+1]<=t&&i<8;)s++,i++;s+1<o.length&&o[s+1]<=t&&(s=S(o,t))}this.idx[n]=s}return this.t=t,this.idx}value(t){let e=this.idx[t];return e<0?null:this.tracks[t].values[this.tracks[t].vals[e]]}},Jn=new Set(["unavailable","unknown"]);function Wt(r,t=5*6e4,e=.6,n=10*6e4,o=-1/0){let s=new B(r);if(!s.tracks.length)return[];let i=Math.max(r.oldest??r.start,o),a=[],l=null;for(let c=i;c<=r.end;c+=t){s.at(c);let u=0;for(let p=0;p<s.tracks.length;p++){let d=s.value(p);(!d||Jn.has(d.s))&&u++}let m=u/s.tracks.length>=e;m&&l===null&&(l=c),!m&&l!==null&&(c-l>=n&&a.push([l,c]),l=null)}return l!==null&&r.end-l>=n&&a.push([l,r.end]),a}function He(r){for(let t=0;t<r.times.length;t++)r.since[t]=t>0&&r.values[r.vals[t-1]].s===r.values[r.vals[t]].s?r.since[t-1]:r.times[t]}function to(r,t){let e=[...r.values],n=new Map(e.map((c,u)=>[V(c),u])),o=t.values.map(c=>{let u=V(c),m=n.get(u);return m===void 0&&(m=e.length,e.push(c),n.set(u,m)),m}),s=t.times.length?t.times[0]:1/0,i=[],a=[];for(let c=0;c<r.times.length&&r.times[c]<s;c++)i.push(r.times[c]),a.push(r.vals[c]);for(let c=0;c<t.times.length;c++){let u=o[t.vals[c]];a.length&&a[a.length-1]===u||(i.push(t.times[c]),a.push(u))}let l={id:r.id,times:Float64Array.from(i),vals:Uint32Array.from(a),values:e,since:new Float64Array(i.length)};return(r.dropped||t.dropped)&&(l.dropped=Float64Array.from([...r.dropped??[],...t.dropped??[]]).sort()),He(l),l}function eo(r,t){let e=r.step,n=Math.min(r.start,t.start),o=Math.max(r.start+r.mean.length*r.step,t.start+t.mean.length*t.step),s=Math.max(0,Math.round((o-n)/e)),i=new Float32Array(s).fill(NaN);for(let a of[r,t])for(let l=0;l<a.mean.length;l++){let c=Math.round((a.start+l*a.step-n)/e);!Number.isNaN(a.mean[l])&&c>=0&&c<s&&(i[c]=a.mean[l])}return{id:r.id,start:n,step:e,mean:i}}function Le(r,t){let[e,n]=r.start<=t.start?[r,t]:[t,r],o=new Map;for(let l of new Set([...e.tracks.keys(),...n.tracks.keys()])){let c=e.tracks.get(l),u=n.tracks.get(l);o.set(l,c&&u?to(c,u):c??u)}let s=new Map;for(let l of new Set([...e.series.keys(),...n.series.keys()])){let c=e.series.get(l),u=n.series.get(l);s.set(l,c&&u?eo(c,u):c??u)}let i=new Set([...e.missing,...n.missing].filter(l=>!o.has(l)&&!s.has(l))),a=e.oldest===null?null:e.oldest<e.end?e.oldest:n.oldest??n.start;return{start:e.start,end:Math.max(e.end,n.end),oldest:a,keepDays:n.keepDays??e.keepDays,tracks:o,series:s,missing:i}}function We(r){let t=0;for(let e of r.tracks.values())t+=e.times.length;return t}function Ue(r){let t=0;for(let e of r.tracks.values())t+=e.times.length*20+e.values.length*120;for(let e of r.series.values())t+=e.mean.length*4;return t}var Be=3e5;function qe(r,t,e=6e4,n=5*6e4){let o=0;for(let s of t){let i=r.tracks.get(s);if(!i||i.times.length<3)continue;let a=i.times.length,l=h=>i.values[i.vals[h]].s,c=[],u=[],m=null;for(let h=0;h<a;h++){let f=c.length?c[c.length-1]:-1;if(f>=0&&m!==null&&l(f)==="off"&&l(h)==="on"&&h+1<a&&l(h+1)==="off"&&i.times[h+1]-i.times[h]<e&&i.times[h]-m<=n){u.push(i.times[h]),h++,o+=2;continue}if(f>=0&&i.vals[f]===i.vals[h]){o++;continue}f>=0&&l(f)==="on"&&l(h)!=="on"&&(m=i.times[h]),c.push(h)}if(c.length===a)continue;let p=Float64Array.from(c,h=>i.times[h]),d=Uint32Array.from(c,h=>i.vals[h]);i.times=p,i.vals=d,i.since=new Float64Array(c.length),u.length&&(i.dropped=Float64Array.from([...i.dropped??[],...u]).sort()),He(i)}return o}var De=new WeakMap;function no(r){let t=De.get(r);return(!t||t.size!==r.values.length)&&(t=new Map(r.values.map((e,n)=>[V(e),n])),De.set(r,t)),t}function Ut(r,t){let e=no(r),n=r.times.length,o=n?r.times[n-1]:-1/0,s=n?r.vals[n-1]:-1,i=[],a=[];for(let p of t){if(p.t<o)continue;let d=V(p.v),h=e.get(d);h!==s&&(h===void 0&&(h=r.values.length,r.values.push(p.v),e.set(d,h)),i.push(p.t),a.push(h),o=p.t,s=h)}if(!i.length)return 0;let l=n+i.length,c=new Float64Array(l);c.set(r.times),c.set(i,n);let u=new Uint32Array(l);u.set(r.vals),u.set(a,n);let m=new Float64Array(l);m.set(r.since);for(let p=n;p<l;p++)m[p]=p>0&&r.values[u[p-1]].s===r.values[u[p]].s?m[p-1]:c[p];return r.times=c,r.vals=u,r.since=m,i.length}function Ke(r,t){let e=-1;for(let o of t)Number.isFinite(o.value)&&o.t>=r.start&&(e=Math.max(e,Math.floor((o.t-r.start)/r.step)));if(e<0)return 0;if(e>=r.mean.length){let o=new Float32Array(e+1).fill(NaN);o.set(r.mean),r.mean=o}let n=0;for(let o of t){if(!Number.isFinite(o.value)||o.t<r.start)continue;let s=Math.floor((o.t-r.start)/r.step);Number.isNaN(r.mean[s])&&(r.mean[s]=o.value,n++)}return n}function je(r,t){let e={id:r,times:new Float64Array(0),vals:new Uint32Array(0),values:[],since:new Float64Array(0)};return Ut(e,t)?e:null}function Ge(r,t){if(t<=r.start)return r;let e=new Map;for(let[s,i]of r.tracks){let a=Math.max(0,S(i.times,t));if(a===0){e.set(s,i);continue}let l={id:s,times:i.times.slice(a),vals:i.vals.slice(a),values:i.values,since:i.since.slice(a)};i.dropped&&(l.dropped=i.dropped.filter(c=>c>=t)),e.set(s,l)}let n=new Map;for(let[s,i]of r.series){let a=Math.max(0,Math.floor((t-i.start)/i.step));n.set(s,a?{id:s,start:i.start+a*i.step,step:i.step,mean:i.mean.slice(a)}:i)}let o=r.oldest!==null&&r.oldest>t?r.oldest:null;return{...r,start:t,oldest:o,tracks:e,series:n}}function Qe(r,t,e,n){let o={};for(let i of t){let a=r.series.get(i),l=r.tracks.get(i);if(!a&&!l)continue;let c=[];for(let u=Math.floor(e/3e5)*3e5;u<n;u+=3e5){let m=NaN;if(a){let p=Math.floor((u+15e4-a.start)/a.step);m=p>=0&&p<a.mean.length?a.mean[p]:NaN}else if(l){let p=S(l.times,u+15e4);m=p<0?NaN:Number(l.values[l.vals[p]].s)}Number.isFinite(m)&&c.push({start:u,mean:m})}c.length&&(o[i]=c)}return o}var H=null;function Bt(r){let t=r?.locale?.time_zone,e=r?.config?.time_zone;if(t!=="server"||!e)return null;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}),e}catch{return null}}function qt(r){H=r}var Ye=new Map;function oo(r){let t=Ye.get(r);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:r,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),Ye.set(r,t)),t}function mt(r,t){let e=[0,0,0,0,0,0];for(let n of oo(t).formatToParts(r)){let o=Number(n.value);n.type==="year"?e[0]=o:n.type==="month"?e[1]=o-1:n.type==="day"?e[2]=o:n.type==="hour"?e[3]=o%24:n.type==="minute"?e[4]=o:n.type==="second"&&(e[5]=o)}return e}function dt(r,t){let[e,n,o,s,i,a]=mt(r,t),l=r-(r%1e3+1e3)%1e3;return Date.UTC(e,n,o,s,i,a)-l}function q(r,t=H){return t?mt(r,t)[3]:new Date(r).getHours()}function T(r,t=H){if(!t)return new Date(r).setHours(0,0,0,0);let[e,n,o]=mt(r,t),s=Date.UTC(e,n,o)-dt(r,t);return s=Date.UTC(e,n,o)-dt(s,t),s}function pt(r,t=H){return T(T(r,t)+27*36e5,t)}function ht(r,t=H){if(!t)return new Date(r).setMinutes(0,0,0);let[,,,,e,n]=mt(r,t);return r-(r%1e3+1e3)%1e3-(e*60+n)*1e3}function Kt(r,t,e,n=H){if(!n){let i=new Date(r);return i.setHours(t,e,0,0),i.getTime()}let o=T(r,n),s=o+(t*60+e)*6e4;return s-(dt(s,n)-dt(o,n))}function nt(r=H){return r?{timeZone:r}:{}}var ft={alarm:100,smoke:95,gas:95,co:95,water:90,rain:70,door:50,lock:45,garage:40,motion:35,washer:25,robot_done:20,robot_start:15,window:12,battery_full:10,pv_peak:8},Xe=new Set(["window","battery_full","pv_peak"]),gt=new Set(["alarm","smoke","gas","co","water"]),jt={alarm:"safety",smoke:"safety",gas:"safety",co:"safety",water:"safety",motion:"safety",door:"openings",lock:"openings",garage:"openings",rain:"openings",window:"openings",washer:"devices",robot_start:"devices",robot_done:"devices",battery_full:"energy",pv_peak:"energy"},ro=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),L=new Set(["on","open","opening","tilted"]);function so(r){let t=q(r);return t>=23||t<5}function*bt(r){let t=null;for(let e=0;e<r.times.length;e++){let n=r.values[r.vals[e]].s;n!==t&&(yield{t:r.times[e],from:t,to:n}),t=n}}function K(r,t,e){let n=[],o=null;for(let s of bt(r)){let i=t.has(s.to);i&&o===null&&(o=s.t),!i&&o!==null&&(n.push([o,s.t]),o=null)}return o!==null&&n.push([o,e]),n}function io(r,t){let e=r.tracks.get(t);if(e){let s=[];for(let i=0;i<e.times.length;i++){let a=Number(e.values[e.vals[i]].s);Number.isFinite(a)&&s.push({t:e.times[i],w:a})}return s}let n=r.series.get(t);if(!n)return[];let o=[];for(let s=0;s<n.mean.length;s++){let i=n.start+(s+.5)*n.step,a=I(n,i);Number.isFinite(a)&&o.push({t:i,w:a})}return o}function ao(r,t=10,e=5,n=20*6e4){let o=[],s=null;for(let i of r)s===null&&i.w>t?s=i.t:s!==null&&i.w<e&&(i.t-s>=n&&o.push(i.t),s=null);return o}function Ze(r,t,e,n,o=3e5){let s=Math.max(0,Math.ceil((n-e)/o)),i=new Float64Array(s).fill(NaN),a=r.series.get(t),l=r.tracks.get(t);for(let c=0;c<s;c++){let u=e+(c+.5)*o;if(a)i[c]=I(a,u);else if(l){let m=S(l.times,u);i[c]=m<0?NaN:Number(l.values[l.vals[m]].s)}}return i}function lo(r,t){let e=[],o=Math.floor(r.start/3e5)*3e5;for(let s of t.soc){let i=Ze(r,s,o,r.end),a=!1;i.forEach((l,c)=>{Number.isNaN(l)||(l<95?a=!0:l>=99&&a&&(a=!1,e.push({t:o+(c+.5)*3e5,kind:"battery_full",entity:s})))})}if(t.solar.length){let s=t.solar.map(u=>Ze(r,u,o,r.end)),i=s[0].length,a=-1,l={t:0,w:0},c=()=>{l.w>100&&e.push({t:l.t,kind:"pv_peak",entity:t.solar[0]}),l={t:0,w:0}};for(let u=0;u<i;u++){let m=o+(u+.5)*3e5,p=T(m);p!==a&&(a>=0&&c(),a=p);let d=0;for(let h of s)Number.isNaN(h[u])||(d+=Math.max(0,h[u]));d>l.w&&(l={t:m,w:d})}a>=0&&(r.end>=pt(a)||t.sunDown?.(r.end))&&c()}return e}function Je({timeline:r,roles:t,weather:e,night:n=so,energy:o=null}){let s=[],i=(u,m,p)=>{u>=r.start&&u<=r.end&&s.push({t:u,kind:m,entity:p})},a=e?r.tracks.get(e):void 0,l=a?K(a,ro,r.end):[];for(let[u,m]of t){if(m==="washer"){for(let d of ao(io(r,u)))i(d,"washer",u);continue}let p=r.tracks.get(u);if(p){if(m==="window"||m==="window_more"){for(let[d,h]of K(p,L,r.end)){m==="window"&&d>r.start&&d>p.times[0]&&i(d,"window",u);for(let[f,b]of l)d<b&&f<h&&i(Math.max(d,f),"rain",u)}continue}for(let d of bt(p))if(d.from!==null)switch(m){case"door":L.has(d.to)&&!L.has(d.from)&&i(d.t,"door",u);break;case"garage":(d.to==="on"||d.to==="open"||d.to==="opening")&&(d.from==="off"||d.from==="closed"||d.from==="closing")&&i(d.t,"garage",u);break;case"lock":(d.to==="unlocked"||d.to==="open")&&(d.from==="locked"||d.from==="locking")&&i(d.t,"lock",u);break;case"alarm":d.to==="triggered"&&i(d.t,"alarm",u);break;case"smoke":case"gas":case"co":case"water":d.to==="on"&&d.from!=="on"&&i(d.t,m,u);break;case"motion":d.to==="on"&&d.from==="off"&&n(d.t)&&i(d.t,"motion",u);break;case"robot":d.to==="cleaning"&&d.from!=="cleaning"&&d.from!=="paused"?i(d.t,"robot_start",u):d.to==="docked"&&(d.from==="cleaning"||d.from==="returning"||d.from==="paused")&&i(d.t,"robot_done",u);break}}}if(o)for(let u of lo(r,o))i(u.t,u.kind,u.entity);s.sort((u,m)=>u.t-m.t||ft[m.kind]-ft[u.kind]);let c=new Map;return s.filter(u=>{let m=`${u.kind}:${u.entity}`,p=c.get(m),d=u.kind==="motion"?30*6e4:5*6e4;return p!==void 0&&u.t-p<d?!1:(c.set(m,u.t),!0)})}function tn(r,t){let e=[];for(let n=r.length-1;n>=0;n--){let o=r[n];if(!t.has(jt[o.kind]))continue;let s=ht(o.t),i=e[e.length-1];i&&i.hour===s?i.events.unshift(o):e.push({hour:s,events:[o]})}return e}function en(r,t,e=14){let n=[];for(let o of r){let s=t(o.t),i=n[n.length-1];i&&s-i.x<e?(i.events.push(o),ft[o.kind]>ft[i.top.kind]&&(i.top=o,i.t=o.t)):n.push({x:s,t:o.t,top:o,events:[o]})}return n}var _t=[60,360,900,3600],Gt=[60,360,900,3600,14400],nn=360;function on(r,t){return r==="low"||t?500:r==="high"?167:250}var yt=class{start;end;t;playing=!1;speed;speeds;constructor(t,e,n,o=nn,s=_t){this.start=t,this.end=e,this.speeds=s,this.t=Math.min(e,Math.max(t,n)),this.speed=s.includes(o)?o:nn}setRange(t,e,n=this.speeds){this.start=t,this.end=e,this.speeds=n,n.includes(this.speed)||(this.speed=n.includes(3600)?3600:n[n.length-1]),this.t=Math.min(e,Math.max(t,this.t))}play(){this.t>=this.end&&(this.t=this.start),this.playing=!0}pause(){this.playing=!1}toggle(){this.playing?this.pause():this.play()}seek(t){this.t=Math.min(this.end,Math.max(this.start,t))}advance(t){if(!this.playing||!(t>0))return!1;let e=Math.min(this.end,this.t+t*this.speed),n=e!==this.t;return this.t=e,this.t>=this.end&&(this.playing=!1),n}nextSpeed(){let t=this.speeds.indexOf(this.speed);return this.speed=this.speeds[(t+1)%this.speeds.length],this.speed}};function rn(r,t,e,n=3e4){if(e>0)return r.find(o=>o.t>t+n)??null;for(let o=r.length-1;o>=0;o--)if(r[o].t<t-n)return r[o];return null}function sn(r,t,e){let n=0,o=r.length;for(;n<o;){let i=n+o>>1;r[i].t<t?n=i+1:o=i}let s=n;for(;s<r.length&&r[s].t<=e;)s++;return n===0&&s===r.length?r:r.slice(n,s)}function Qt(r,t,e,n){if(!(e>t))return null;let o=0,s=r.length;for(;o<s;){let i=o+s>>1;r[i].t<=t?o=i+1:s=i}for(let i=o;i<r.length&&r[i].t<=e;i++)if(n(r[i]))return r[i];return null}function vt(r,t){let e=(r??"").trim(),n=/^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(e);if(n)return t-Number(n[1].replace(",","."))*(n[2].toLowerCase()==="h"?36e5:6e4);let o=/^(\d{1,2}):(\d{2})$/.exec(e);if(!o||Number(o[1])>23||Number(o[2])>59)return null;let s=Kt(t,Number(o[1]),Number(o[2]));return s>t?Kt(s-864e5,Number(o[1]),Number(o[2])):s}var ot={prev:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z",list:"M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"},xt=r=>Fe`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,an={alarm:"#ff3b4f",smoke:"#ff3b4f",gas:"#ff3b4f",co:"#ff3b4f",water:"#3aa0ff",rain:"#6cc8ff",door:"#ffb020",lock:"#ffb020",garage:"#ffb020",window:"#ffd27a",motion:"#b48cff",washer:"#4dff9a",robot_start:"#4dff9a",robot_done:"#4dff9a",battery_full:"#ffe27a",pv_peak:"#ffe27a"},co={alarm:"#ff3b4f",door:"#ffb020",window:"#ffd27a",window_open:"#6cc8ff",light_on:"#ffe27a",motion:"#b48cff",appliance:"#4dff9a"},Yt=class extends O{static properties={session:{attribute:!1},_w:{state:!0},_label:{state:!0},_toast:{state:!0},_sheet:{state:!0},_filters:{state:!0},_awayFrom:{state:!0},_compare:{state:!0}};unlisten=null;listened=null;resize=null;sig="";dragging=!1;scrubAt=0;scrubTimer;holdTimer;held=!1;labelTimer;toastTimer;clusters=[];clusterSig="";awayOffer=null;awayCache=null;constructor(){super(),this.session=null,this._w=0,this._label=null,this._toast=!1,this._sheet=null,this._filters=new Set(["safety","openings","devices","energy"]),this._awayFrom=null,this._compare=!1}onBlocked=()=>{this._toast=!0,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this._toast=!1,2600)};onKey=t=>{let e=this.session,n=t.composedPath()[0];if(!(!e?.playback||t.ctrlKey||t.metaKey||t.altKey||n&&/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n?.isContentEditable))if(t.key===" "){if(n?.tagName==="BUTTON")return;t.preventDefault(),e.toggle()}else(t.key==="ArrowLeft"||t.key==="ArrowRight")&&(t.preventDefault(),e.seek(e.playback.t+(t.key==="ArrowLeft"?-1:1)*(t.shiftKey?36e5:3e5)))};onEscape=t=>{t.key!=="Escape"||!this._sheet||(t.stopImmediatePropagation(),this._sheet=null)};connectedCallback(){super.connectedCallback(),window.addEventListener("fp3d-replay-blocked",this.onBlocked),window.addEventListener("keydown",this.onKey),window.addEventListener("keydown",this.onEscape,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("fp3d-replay-blocked",this.onBlocked),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keydown",this.onEscape,!0),this.unlisten?.(),this.unlisten=null,this.listened=null,this.resize?.disconnect(),this.resize=null;for(let t of[this.scrubTimer,this.holdTimer,this.labelTimer,this.toastTimer])clearTimeout(t)}updated(){this.session!==this.listened&&(this.unlisten?.(),this.listened=this.session,this.unlisten=this.session?this.session.listen(()=>this.onTick()):null);let t=this.renderRoot.querySelector(".track");t&&!this.resize&&typeof ResizeObserver=="function"&&(this.resize=new ResizeObserver(e=>{let n=Math.round(e[0]?.contentRect.width??0);n!==this._w&&(this._w=n)}),this.resize.observe(t)),this.onTick()}signature(){let t=this.session,e=t?.playback,n=this._sheet==="day"&&e?T(e.t):0;return`${t?.state}|${t?.error}|${Math.round((t?.progress??0)*20)}|${e?.playing}|${e?.speed}|${t?.events.length}|${t?.allEvents.length}|${t?.range}|${t?.maxDays}|${t?.loadingDay}|${t?.full}|${t?.version}|${t?.atNow}|${t?.follow}|${t?.stopImportant}|${n}`}onTick(){let t=this.signature();t!==this.sig&&(this.sig=t,this.requestUpdate());let e=this.session,n=e?.playback;if(!e||!n)return;let o=this.renderRoot.querySelector(".clock-time"),s=this.renderRoot.querySelector(".clock-ago");o&&(o.textContent=this.clockText(n.t)),s&&(s.textContent=this.agoText(n.t)),this.dragging||this.placeHead(this.xOf(n.t))}placeHead(t){let e=this.renderRoot.querySelector(".head");e&&(e.style.transform=`translateX(${t.toFixed(1)}px)`)}get language(){return this.session?.opts.live.language??navigator.language}xOf(t){let e=this.session;return!e||!this._w?0:(t-e.start)/(e.end-e.start)*this._w}tOf(t){let e=this.session;return e.start+Math.min(this._w,Math.max(0,t))/Math.max(1,this._w)*(e.end-e.start)}weekday(t){return new Date(t).toLocaleDateString(this.language,{weekday:"short",...nt()}).replace(/\.$/,"")}clockText(t){return`${this.weekday(t)} ${this.time(t)}`}agoText(t){let e=this.session,n=Math.round((e.end-t)/6e4);return n<1?e.t("tt_now"):e.t("tt_ago",{d:this.duration(n*6e4)})}duration(t){let e=this.session,n=Math.round(t/6e4),o=Math.floor(n/1440),s=Math.floor(n%1440/60),i=n%60;return o?`${e.t("tt_days",{n:o})}${s?` ${s} h`:""}`:s?`${s} h${i?` ${i} min`:""}`:`${i} min`}name(t){let e=this.session;return e.names.get(t)??e.opts.live.states[t]?.attributes.friendly_name??t}eventText(t){return this.session.t(`tt_ev_${t.kind}`,{name:this.name(t.entity)})}time(t){return new Date(t).toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit",...nt()})}onDown(t){let e=this.session;!e?.playback||t.target.closest(".mark")||(t.currentTarget.setPointerCapture?.(t.pointerId),this.dragging=!0,this._label=null,e.pause(),this.scrub(t,!0))}onMove(t){this.dragging&&this.scrub(t,!1)}onUp(t){this.dragging&&(this.scrub(t,!0),this.dragging=!1)}scrub(t,e){let n=this.session,o=this.renderRoot.querySelector(".track"),s=t.clientX-o.getBoundingClientRect().left,i=Math.max(n.playback?.start??n.start,this.tOf(s));this.placeHead(this.xOf(i));let a=this.renderRoot.querySelector(".clock-time");a&&(a.textContent=this.clockText(i)),clearTimeout(this.scrubTimer);let l=n.opts.spec.low||n.opts.quality==="low"?160:70,c=performance.now();e||c-this.scrubAt>=l?(this.scrubAt=c,n.seek(i)):this.scrubTimer=setTimeout(()=>{this.scrubAt=performance.now(),n.seek(i)},l)}markDown(t){this.held=!1,clearTimeout(this.holdTimer),this.holdTimer=setTimeout(()=>{this.held=!0,this.showLabel(t)},450)}markUp(){clearTimeout(this.holdTimer)}markClick(t){if(this.held){this.held=!1;return}this.session?.seek(t.t,!0),this.showLabel(t,2500)}showLabel(t,e=4500){this._label={x:t.x,lines:t.events.slice(0,4).map(n=>`${this.time(n.t)} \xB7 ${this.eventText(n)}`).concat(t.events.length>4?[`+${t.events.length-4}`]:[])},clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>this._label=null,e)}renderTrack(){let t=this.session,e=this._w;if(!e)return _;let n=t.range==="7d",o=f=>`${((f-t.start)/(t.end-t.start)*100).toFixed(3)}%`,s=(f,b,g,x)=>b>f?v`<i class=${g} style="left:${o(Math.max(f,t.start))};width:calc(${o(Math.min(b,t.end))} - ${o(Math.max(f,t.start))})">${x?v`<span>${x}</span>`:_}</i>`:_,i=t.timeline?.oldest??null,a=t.playback?.start??t.start,l=t.recorderStart,c=_;a>t.start+6e4&&(t.loadingDay!==null?c=s(t.start,a,"loading",t.t("tt_loading_day",{day:this.weekday(t.loadingDay+12*36e5)})):l!==null&&l>t.start?c=s(t.start,a,"nodata",t.t("tt_recorder_days",{n:t.timeline?.keepDays??0})):c=s(t.start,a,"nodata",t.full?t.t("tt_memory_full"):""));let u=n?e/(t.end-t.start)*36e5*3>=12?3:6:1,m=e>=640?3:6,p=[],d=ht(t.start);for(d<t.start&&(d+=36e5);d<=t.end;d+=36e5){let f=q(d);if(f%u)continue;let b=f===0,g=b?n?`${this.weekday(d)} ${new Date(d).toLocaleDateString(this.language,{day:"numeric",...nt()}).replace(/\.$/,"")}.`:this.weekday(d):!n&&f%m===0?this.time(d):"";p.push(v`<b class="tick ${b?"tick-day":g?"tick-major":""}" style="left:${o(d)}">${g?v`<span>${g}</span>`:_}</b>`)}let h=`${e}|${t.events.length}|${t.start}|${t.end}|${t.version}|${a}`;return h!==this.clusterSig&&(this.clusterSig=h,this.clusters=en(t.shownEvents(),f=>this.xOf(f),e<500?18:14)),v`${t.nights.map(([f,b])=>s(f,b,"night"))} ${c} ${i!==null&&i>a?s(a,i,"nodata"):_}
      ${t.gaps.map(([f,b])=>s(f,b,"gap"))} ${p}
      ${this.clusters.map(f=>v`<button
          class="mark ${f.events.length>1?"mark-many":""}"
          style="left:${f.x.toFixed(1)}px;--c:${an[f.top.kind]}"
          title=${f.events.map(b=>`${this.time(b.t)} ${this.eventText(b)}`).join(`
`)}
          aria-label=${`${this.time(f.t)} ${this.eventText(f.top)}`}
          @pointerdown=${()=>this.markDown(f)}
          @pointerup=${()=>this.markUp()}
          @pointerleave=${()=>this.markUp()}
          @contextmenu=${b=>b.preventDefault()}
          @click=${()=>this.markClick(f)}
        >
          ${f.events.length>1?v`<span>${f.events.length}</span>`:_}
        </button>`)}
      <div class="head" style="transform:translateX(${this.xOf(t.playback?.t??t.end).toFixed(1)}px)"></div>
      ${this._label?v`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map(f=>v`<span>${f}</span>`)}</div>`:_}`}toggleSheet(t="events"){this._sheet=this._sheet===t||this._sheet&&t==="events"?null:t}toggleFilter(t){let e=new Set(this._filters);e.has(t)?e.delete(t):e.add(t),this._filters=e}where(t){return this.session.roomOf.get(t)?.name??""}renderEvents(){let t=this.session,e=t.t,n=["safety","openings","devices",...t.energy?["energy"]:[]],o=tn(t.shownEvents(!0).filter(i=>t.energy||jt[i.kind]!=="energy"),this._filters),s=0;return v`<div class="filters">
        ${n.map(i=>v`<button class="fchip" aria-pressed=${this._filters.has(i)} @click=${()=>this.toggleFilter(i)}>${e(`tt_f_${i}`)}</button>`)}
      </div>
      <label class="opt"><input type="checkbox" .checked=${t.follow} @change=${i=>t.setFollow(i.target.checked)} />${e("tt_follow")}</label>
      <label class="opt"><input type="checkbox" .checked=${t.stopImportant} @change=${i=>t.setStopImportant(i.target.checked)} />${e("tt_stop")}</label>
      ${o.length?o.map(i=>s>=300?_:(s+=i.events.length,v`<h4>${this.clockText(i.hour)}</h4>
              ${i.events.map(a=>this.row(an[a.kind],this.time(a.t),this.eventText(a),this.where(a.entity),()=>t.goTo(a)))}`)):v`<p class="none">${e("tt_no_events")}</p>`}`}row(t,e,n,o,s){return v`<button class="row" @click=${s}>
      <i style="background:${t}"></i><time>${e}</time><span>${n}${o?v`<small>${o}</small>`:_}</span>
    </button>`}awayText(t){let e=this.session.t,n=this.name(t.entity);switch(t.kind){case"alarm":case"appliance":return this.eventText({kind:t.event??"alarm",entity:t.entity});case"door":case"window":return e("tt_away_door",{name:n,n:t.count});case"motion":return e("tt_away_motion",{name:n,n:t.count});case"light_on":return e("tt_away_light",{name:n,d:this.duration(t.ms)});case"window_open":return e("tt_away_open",{name:n,d:this.duration(t.ms)})}}renderAway(){let t=this.session,e=t.t,n=t.playback;this.awayOffer?.version!==t.version&&(this.awayOffer={version:t.version,offer:t.awayOffer()});let o=this.awayOffer.offer,[s,i]=this._awayFrom??o??[t.lastClosed!==null&&t.lastClosed>=n.start?t.lastClosed:Math.max(n.start,t.end-3*36e5),t.end],a=`${t.version}|${s}|${i}`;this.awayCache?.key!==a&&(this.awayCache={key:a,rows:t.away(s,i)});let l=this.awayCache.rows,c=p=>this._awayFrom=p,u=(p,d)=>`${this.clockText(p)} \u2013 ${d>=t.end-6e4?e("tt_now"):this.clockText(d)}`,m=p=>{let d=vt(p.target.value,t.end);d!==null&&c([Math.max(n.start,d),t.end])};return v`<p class="since">${e("tt_away_since")}:</p>
      <div class="filters">
        ${t.lastClosed!==null&&t.lastClosed>=n.start?v`<button class="fchip" aria-pressed=${s===t.lastClosed} @click=${()=>c([t.lastClosed,t.end])}>${e("tt_away_last")}</button>`:_}
        ${o?v`<button class="fchip" aria-pressed=${s===o[0]&&i===o[1]} @click=${()=>c(o)}>${e("tt_away_quiet",{from:this.time(o[0]),to:this.time(o[1])})}</button>`:_}
        <input class="when" type="time" aria-label=${e("tt_away_since")} @change=${m} />
      </div>
      <h4>${u(s,i)}</h4>
      ${l.length?l.slice(0,200).map(p=>this.row(co[p.kind],this.time(p.t),this.awayText(p),this.where(p.entity),()=>t.goTo(p))):v`<p class="none">${e("tt_away_none")}</p>`}`}renderDay(){let t=this.session,e=t.t,n=t.playback,o=T(n.t),s=t.daySummary(o),i=T(o-12*36e5),a=this._compare?t.daySummary(i):null;this._compare&&(!a||a.from>i+6e4)&&queueMicrotask(()=>t.ensureLoaded(i));let l=(y,k)=>y&&y.from>k+6e4?e("tt_day_partial",{time:this.time(y.from)}):"",c=(y,k=1)=>y.toLocaleString(this.language,{maximumFractionDigits:k,minimumFractionDigits:k}),u=y=>y>=6e4?`${c(y/36e5)} h`:"\u2013",m=y=>y&&y.tMin!==null&&y.tMax!==null?`${c(y.tMin)}\u2013${c(y.tMax)}\xB0`:"\u2013",p=y=>v`<td>${y?u(y.lightMs):"\u2013"}</td><td>${y?u(y.windowMs):"\u2013"}</td><td>${y?u(y.heatMs):"\u2013"}</td><td>${m(y)}</td>`,d=new Date(o).toLocaleDateString(this.language,{weekday:"short",day:"numeric",month:"numeric",...nt()}),h=y=>y?.energy??null,f=h(s),b=h(a),g=y=>y===void 0?"\u2013":`${c(y)} kWh`,x=y=>y==null?"\u2013":`${Math.round(y*100)} %`,w=this._compare?a?l(a,i):t.loadingDay!==null?e("tt_loading"):"":"";return v`<h4>${e("tt_day_title",{day:d})}</h4>
      ${l(s,o)?v`<p class="since">${l(s,o)}</p>`:_}
      ${w?v`<p class="since">${e("tt_day_before")}: ${w}</p>`:_}
      <div class="filters">
        <button class="fchip" @click=${()=>t.yesterday()}>⟲ ${e("tt_yesterday")}</button>
        <button class="fchip" aria-pressed=${this._compare} @click=${()=>this._compare=!this._compare}>${e("tt_day_compare")}</button>
      </div>
      ${s&&(s.rooms.length||f)?v`${s.rooms.length?v`<table>
                  <thead>
                    <tr><th></th><th>${e("tt_day_light")}</th><th>${e("tt_day_window")}</th><th>${e("tt_day_heat")}</th><th>${e("tt_day_temp")}</th></tr>
                  </thead>
                  <tbody>
                    ${s.rooms.map(y=>v`<tr><th>${y.name}</th>${p(y)}</tr>
                        ${a?v`<tr class="before"><th>${e("tt_day_before")}</th>${p(a.rooms.find(k=>k.roomId===y.roomId))}</tr>`:_}`)}
                  </tbody>
                </table>`:_}
            ${f?v`<div class="energy">
                  ${[["tt_day_pv",g(f.pv),g(b?.pv)],["tt_day_use",g(f.use),g(b?.use)],["tt_day_import",g(f.imp),g(b?.imp)],["tt_day_export",g(f.exp),g(b?.exp)],["tt_day_self",x(f.self),x(b?.self)]].map(([y,k,E])=>v`<span>${e(y)}</span><b>${k}</b>${a?v`<em>${E}</em>`:_}`)}
                </div>`:_}`:v`<p class="none">${e("tt_day_none")}</p>`}`}renderSheet(){let e=this.session.t,n=this._sheet,o=["events","away","day"];return v`<aside class="sheet" role="dialog" aria-label=${e("tt_sheet")}>
      <header>
        ${o.map(s=>v`<button class="tab" aria-pressed=${n===s} title=${s==="away"?e("tt_away_title"):_} @click=${()=>this._sheet=s}>${e(s==="events"?"tt_tab_events":s==="away"?"tt_tab_away":"tt_tab_day")}</button>`)}
        <button class="x" title=${e("tt_close")} aria-label=${e("tt_close")} @click=${()=>this._sheet=null}>×</button>
      </header>
      <div class="body">${n==="events"?this.renderEvents():n==="away"?this.renderAway():this.renderDay()}</div>
    </aside>`}render(){let t=this.session;if(!t)return _;let e=t.t,n=t.playback,o=t.state==="ready"&&!!n,s=t.state==="error"?t.error==="not_unlocked"?e("tt_locked"):t.error==="no_recorder"?e("tt_no_recorder"):t.error==="unknown_command"?e("tt_restart"):e("tt_error",{error:t.error??"?"}):null,i=n?3600/n.speed:10,a=Math.round((t.end-t.start)/6e4);return v`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${e("tt_badge")} <a class="beta" href=${Ve} target="_blank" rel="noopener" title=${e("beta_bar")}>🧪 BETA</a></span>
        ${o?v`<b class="clock-time"></b><span class="clock-ago"></span>`:v`<span class="clock-msg">${s??`${e("tt_loading")} ${Math.round(t.progress*100)} %`}</span>`}
      </div>
      ${this._toast?v`<div class="toast" role="alert">${e("tt_readonly")}</div>`:_}
      ${o&&this._sheet?this.renderSheet():_}
      <div class="bar">
        <button class="btn prev" ?disabled=${!o} title=${e("tt_prev")} aria-label=${e("tt_prev")} @click=${()=>t.step(-1)}>${xt(ot.prev)}</button>
        <button class="btn play" ?disabled=${!o} title=${e(n?.playing?"tt_pause":"tt_play")} aria-label=${e(n?.playing?"tt_pause":"tt_play")} @click=${()=>t.toggle()}>
          ${xt(n?.playing?ot.pause:ot.play)}
        </button>
        <button class="btn next" ?disabled=${!o} title=${e("tt_next")} aria-label=${e("tt_next")} @click=${()=>t.step(1)}>${xt(ot.next)}</button>
        <div
          class="track ${o?"":"track-wait"}"
          role="slider"
          tabindex="0"
          aria-label=${e("tt_chip")}
          aria-valuemin="0"
          aria-valuemax=${a}
          aria-valuenow=${n?Math.round((n.t-t.start)/6e4):a}
          @pointerdown=${l=>this.onDown(l)}
          @pointermove=${l=>this.onMove(l)}
          @pointerup=${l=>this.onUp(l)}
          @pointercancel=${l=>this.onUp(l)}
        >
          ${o?this.renderTrack():s?v`<em class="msg">${s}</em>`:v`<i class="progress" style="width:${Math.round(t.progress*100)}%"></i>`}
        </div>
        ${s&&t.error!=="not_unlocked"?v`<button class="chip" @click=${()=>{t.load()}}>${e("tt_retry")}</button>`:_}
        <button class="chip range" ?disabled=${!o} title=${e("tt_range_hint")} aria-label=${e("tt_range_hint")} @click=${()=>t.setRange(t.range==="7d"?"24h":"7d")}>
          ${t.range==="7d"?e("tt_days",{n:t.maxDays}):"24 h"}
        </button>
        <button class="btn sheet-btn" ?disabled=${!o} aria-pressed=${!!this._sheet} title=${e("tt_sheet")} aria-label=${e("tt_sheet")} @click=${()=>this.toggleSheet()}>${xt(ot.list)}</button>
        <button class="chip speed" ?disabled=${!o} title=${e("tt_speed",{s:i>=60?"1 min":i>=1?`${Math.round(i)} s`:`${i.toFixed(2).replace(/0$/,"")} s`})} @click=${()=>t.nextSpeed()}>
          ${n?.speed??360}×
        </button>
        <button class="chip live ${t.atNow?"live-now":""}" title=${e("tt_live_hint")} @click=${()=>t.exit()}>
          <i></i>${t.atNow?`${e("tt_now_reached")} \xB7 ${e("tt_live")}`:e("tt_live")}
        </button>
      </div>`}static styles=At`
    :host {
      position: absolute;
      inset: 0;
      z-index: 3;
      pointer-events: none;
      container-type: size;
      container-name: fp3dtt;
      font-family: var(--fp3d-font, system-ui, sans-serif);
      color: var(--fp3d-text, #e6eefc);
      --tt: #ffb020;
    }
    .frame {
      position: absolute;
      inset: 0;
      box-shadow: inset 0 0 0 3px var(--tt);
      border-radius: inherit;
    }
    .clock {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: grid;
      justify-items: center;
      gap: 1px;
      padding: 6px 16px 7px;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.55);
      box-shadow: var(--fp3d-shadow, none);
      white-space: nowrap;
      max-width: calc(100% - 260px);
    }
    .badge {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: var(--tt);
    }
    .beta {
      margin-left: 4px;
      color: inherit;
      opacity: 0.8;
      text-decoration: none;
      pointer-events: auto;
    }
    .clock-time {
      font-family: var(--fp3d-title-font, inherit);
      font-size: 24px;
      line-height: 1.1;
      font-variant-numeric: tabular-nums;
    }
    .clock-ago,
    .clock-msg {
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
      white-space: normal;
      text-align: center;
    }
    .toast,
    .label {
      position: absolute;
      bottom: calc(var(--fp3d-tt-h, 64px) + 4px);
      z-index: 3;
      padding: 7px 12px;
      border-radius: 10px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.55);
      box-shadow: var(--fp3d-shadow, none);
      font-size: 13px;
    }
    .toast {
      left: 50%;
      transform: translateX(-50%);
      color: var(--tt);
      font-weight: 600;
    }
    .label {
      /* above its marker on the track, kept within the track */
      bottom: calc(100% + 12px);
      left: clamp(0px, calc(var(--x) - 120px), calc(100% - 240px));
      width: 240px;
      box-sizing: border-box;
      display: grid;
      gap: 3px;
      pointer-events: none;
    }
    .bar {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 8px;
      height: calc(var(--fp3d-tt-h, 64px) - 16px);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 8px;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.45);
      box-shadow: var(--fp3d-shadow, none);
      pointer-events: auto;
      touch-action: none;
    }
    button {
      font: inherit;
      color: inherit;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.45;
      cursor: default;
    }
    .btn {
      flex: none;
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      border: 0;
      border-radius: 10px;
      background: transparent;
    }
    .btn:hover:not(:disabled),
    .sheet-btn[aria-pressed="true"] {
      background: rgba(255, 255, 255, 0.07);
    }
    .sheet-btn[aria-pressed="true"] {
      color: var(--tt);
    }
    .play {
      background: var(--tt);
      color: #1a1200;
    }
    .play:hover:not(:disabled) {
      background: var(--tt);
      filter: brightness(1.1);
    }
    .chip {
      flex: none;
      height: 32px;
      padding: 0 11px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      background: transparent;
      font-size: 13px;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .live {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border-color: var(--fp3d-accent, #37e0ff);
    }
    .live i {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #ff3b4f;
    }
    .live-now {
      background: var(--fp3d-accent, #37e0ff);
      color: #04121c;
    }
    .track {
      position: relative;
      flex: 1;
      min-width: 0;
      height: 34px;
      margin: 0 4px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      cursor: pointer;
      outline-offset: 2px;
    }
    .track-wait {
      cursor: default;
      overflow: hidden;
    }
    .track i {
      position: absolute;
      top: 0;
      bottom: 0;
      overflow: hidden;
    }
    .track i span {
      position: absolute;
      left: 4px;
      bottom: 2px;
      font-size: 10px;
      font-style: normal;
      white-space: nowrap;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .night {
      background: rgba(40, 60, 140, 0.35);
    }
    .nodata {
      background: rgba(140, 150, 170, 0.28);
    }
    .loading {
      background: repeating-linear-gradient(135deg, rgba(255, 176, 32, 0.22) 0 6px, transparent 6px 12px);
    }
    .loading span {
      color: var(--tt) !important;
    }
    .gap {
      background: repeating-linear-gradient(135deg, rgba(160, 170, 190, 0.32) 0 4px, transparent 4px 8px);
    }
    .progress {
      left: 0;
      background: rgba(255, 176, 32, 0.4);
      transition: width 0.2s;
    }
    .msg {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      padding: 0 10px;
      font-size: 12px;
      font-style: normal;
      color: var(--fp3d-muted, #8a9bb8);
      overflow: hidden;
    }
    .tick {
      position: absolute;
      top: 0;
      width: 1px;
      height: 5px;
      background: rgba(200, 215, 240, 0.28);
      pointer-events: none;
    }
    .tick-major {
      height: 9px;
      background: rgba(200, 215, 240, 0.5);
    }
    .tick-day {
      height: 100%;
      background: rgba(255, 176, 32, 0.45);
    }
    .tick span {
      position: absolute;
      left: 3px;
      top: 22px;
      font-size: 10px;
      line-height: 11px;
      font-weight: 500;
      color: var(--fp3d-muted, #8a9bb8);
      white-space: nowrap;
    }
    .tick-day span {
      color: var(--tt);
      font-weight: 700;
    }
    .mark {
      position: absolute;
      top: 6px;
      width: 14px;
      height: 14px;
      margin-left: -7px;
      padding: 0;
      border-radius: 50%;
      border: 2px solid var(--fp3d-chrome-solid, #0f1729);
      background: var(--c);
      box-shadow: 0 0 0 1px var(--c);
      z-index: 1;
    }
    .mark-many {
      width: 18px;
      height: 18px;
      margin-left: -9px;
      top: 4px;
    }
    .mark span {
      display: block;
      font-size: 9px;
      font-weight: 800;
      line-height: 14px;
      color: #0a0f1c;
    }
    .head {
      position: absolute;
      left: -1px;
      top: -5px;
      bottom: -5px;
      width: 3px;
      border-radius: 2px;
      background: var(--tt);
      box-shadow: 0 0 6px var(--tt);
      pointer-events: none;
      z-index: 2;
      will-change: transform;
    }
    .head::after {
      content: "";
      position: absolute;
      left: -5px;
      bottom: -6px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: var(--tt);
    }
    .sheet {
      position: absolute;
      top: 78px;
      right: 8px;
      bottom: calc(var(--fp3d-tt-h, 64px) + 4px);
      width: min(380px, calc(100% - 16px));
      box-sizing: border-box;
      display: grid;
      grid-template-rows: auto 1fr;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.45);
      box-shadow: var(--fp3d-shadow, none);
      pointer-events: auto;
      z-index: 2;
      font-size: 13px;
      overflow: hidden;
    }
    .sheet header {
      display: flex;
      gap: 4px;
      padding: 8px 8px 6px;
      border-bottom: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
    }
    .tab {
      flex: 1 1 auto;
      min-width: 0;
      padding: 6px 8px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tab[aria-pressed="true"] {
      background: rgba(255, 176, 32, 0.18);
      color: var(--tt);
    }
    .x {
      flex: none;
      width: 30px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      font-size: 18px;
    }
    .body {
      overflow-y: auto;
      padding: 8px 10px 12px;
      overscroll-behavior: contain;
    }
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 6px;
    }
    .fchip {
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      background: transparent;
      font-size: 12px;
    }
    .fchip[aria-pressed="true"] {
      border-color: var(--tt);
      background: rgba(255, 176, 32, 0.14);
    }
    .when {
      font: inherit;
      font-size: 12px;
      color: inherit;
      background: transparent;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      border-radius: 999px;
      padding: 3px 8px;
      color-scheme: dark;
    }
    .opt {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
      margin: 2px 0;
    }
    .since {
      margin: 0 0 4px;
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .sheet h4 {
      margin: 10px 0 4px;
      font-size: 12px;
      font-weight: 700;
      color: var(--tt);
    }
    .row {
      display: grid;
      grid-template-columns: 10px 44px 1fr;
      align-items: start;
      gap: 6px;
      width: 100%;
      padding: 5px 4px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      text-align: left;
      font-size: 13px;
    }
    .row:hover {
      background: rgba(255, 255, 255, 0.06);
    }
    .row i {
      width: 8px;
      height: 8px;
      margin-top: 5px;
      border-radius: 50%;
    }
    .row time {
      font-variant-numeric: tabular-nums;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .row small {
      display: block;
      font-size: 11px;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .none {
      color: var(--fp3d-muted, #8a9bb8);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
      font-variant-numeric: tabular-nums;
    }
    th,
    td {
      padding: 4px 3px;
      text-align: right;
      white-space: nowrap;
    }
    th:first-child {
      text-align: left;
      max-width: 110px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    thead th {
      font-weight: 600;
      color: var(--fp3d-muted, #8a9bb8);
    }
    tbody tr:not(.before) {
      border-top: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
    }
    .before {
      color: var(--fp3d-muted, #8a9bb8);
      font-size: 11px;
    }
    .before th {
      font-weight: 400;
      padding-left: 10px;
    }
    .energy {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 4px 12px;
      margin-top: 12px;
      padding-top: 8px;
      border-top: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      font-variant-numeric: tabular-nums;
    }
    .energy b {
      text-align: right;
    }
    .energy em {
      font-style: normal;
      text-align: right;
      color: var(--fp3d-muted, #8a9bb8);
    }
    /* phones and narrow cards: the track on a row of its own above the buttons */
    @container fp3dtt ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
      .bar {
        flex-wrap: wrap;
        align-content: center;
        row-gap: 6px;
        padding: 6px 8px;
      }
      .track {
        order: -1;
        flex: 1 0 100%;
        margin: 14px 0 0;
      }
      .live {
        margin-left: auto;
      }
      .chip {
        padding: 0 9px;
      }
      .clock {
        top: 8px;
        padding: 4px 12px 5px;
        max-width: calc(100% - 120px);
      }
      .clock-time {
        font-size: 19px;
      }
      .sheet {
        top: 64px;
      }
    }
  `};customElements.get("fp3d-time-bar")||customElements.define("fp3d-time-bar",Yt);var uo=new Set(["person","device_tracker","zone","camera","scene","script","button","input_button","update","event","image","tts","stt","notify","conversation","automation","calendar","todo"]),mo=new Set(["light","cover","switch","fan","lock","climate","media_player","binary_sensor","sensor","vacuum","alarm_control_panel","water_heater","input_boolean","humidifier","valve"]),po=600,Zt=r=>r.slice(0,r.indexOf("."));function ho(r,t){let e=r.states[t];return!t.startsWith("sensor.")||!e||e.attributes.state_class!=="measurement"?!1:Number.isFinite(Number(e.state))||e.state==="unavailable"||e.state==="unknown"}var ln=new Set(["geocoded_location","location"]),fo=/location|address|geocoded|ssid|bssid|standort|adresse/i;function go(r,t){let e=r.states[t]?.attributes??{},n=r.entities?.[t]?.translation_key??"";return ln.has(String(e.device_class??""))||ln.has(n)||"latitude"in e||"longitude"in e?!0:fo.test(`${t} ${String(e.friendly_name??"")} ${n}`)}function dn(r){let t=new Set;for(let e of Object.values(r.states))if(e.entity_id.startsWith("person.")&&Array.isArray(e.attributes.device_trackers))for(let n of e.attributes.device_trackers)typeof n=="string"&&t.add(n);return t}function bo(r,t=dn(r)){let e=new Set;for(let n of t){let o=r.entities?.[n]?.device_id;o&&e.add(o)}return e}function Xt(r,t,e,n=po){let o=new Set(t.presence.flatMap(g=>[g.person,g.sensor]).filter(g=>!!g)),s=dn(r);for(let g of s)o.add(g);let i=bo(r,s),a=new Set((e.cars??[]).filter(g=>g.startsWith("device_tracker.")&&!o.has(g)&&!!r.states[g])),l=new Set(t.floors.flatMap(g=>g.rooms.map(x=>x.area_id)).filter(g=>!!g)),c=[];for(let[g,x]of Object.entries(r.entities??{})){if(!x.area_id&&x.device_id){let w=r.devices?.[x.device_id];if(!w?.area_id||!l.has(w.area_id))continue}else if(!x.area_id||!l.has(x.area_id))continue;x.hidden||x.entity_category||!mo.has(Zt(g))||c.push(g)}let u=Object.keys(r.states).filter(g=>g.startsWith("weather.")),m=[...new Set([...a,...e.entities,"sun.sun",...t.settings.weather_entity?[t.settings.weather_entity]:[],...u.slice(0,1),...c])],p=[],d=m.filter(g=>{if(!g.includes(".")||!a.has(g)&&uo.has(Zt(g))||o.has(g)||!r.states[g])return!1;if(a.has(g))return!0;let x=r.entities?.[g]?.device_id;return x&&i.has(x)||go(r,g)?(p.push(g),!1):!0}),h=d.slice(0,n),f=h.filter(g=>ho(r,g)),b=new Set(f);return{entities:h.filter(g=>!b.has(g)),stats:f,overflow:d.slice(n),cars:h.filter(g=>a.has(g)),hidden:p}}var cn={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"},yo=new Set(["front","front_glass","sidelight","sidelights"]),_o=new Set(["washer","dryer","dishwasher"]);function un(r,t){let e=!1;for(let n=0,o=t.length-1;n<t.length;o=n++){let[s,i]=t[n],[a,l]=t[o];i>r[1]!=l>r[1]&&r[0]<(a-s)*(r[1]-i)/(l-i)+s&&(e=!e)}return e}function vo(r,t){if(t.type!=="door"||t.wall)return!1;if(t.style&&yo.has(t.style))return!0;if(t.style)return!1;let e=r.rooms.find(m=>m.id===t.room_id);if(!e||e.points.length<3)return!1;let n=e.points[t.edge],o=e.points[(t.edge+1)%e.points.length];if(!n||!o)return!1;let s=Math.hypot(o[0]-n[0],o[1]-n[1]);if(s<1e-6)return!1;let i=(o[0]-n[0])/s,a=(o[1]-n[1])/s,l=[n[0]+i*t.offset,n[1]+a*t.offset],c=m=>[l[0]-a*m,l[1]+i*m],u=un(c(.3),e.points)?c(-.4):c(.4);return!r.rooms.some(m=>m.id!==e.id&&m.points.length>=3&&un(u,m.points))}function Jt(r,t,e){let n=new Map,o=new Map(e.furniture);for(let s of t.floors)for(let i of s.furniture){if(!_o.has(i.type))continue;let a=o.get(i.id)?.power,l=s.placements.find(u=>r.states[u.entity_id]?.attributes.device_class==="power"&&Math.hypot(u.x-i.x,u.z-i.z)<=1.2)?.entity_id,c=a??l;c&&!n.has(c)&&n.set(c,i)}return n}function mn(r,t,e,n){let o=new Map,s=(a,l)=>{a&&n.has(a)&&!o.has(a)&&o.set(a,l)},i=new Map(e.openings);for(let a of t.floors)for(let l of a.openings){let c=i.get(l.id);if(c)if(l.type==="garage")for(let u of[c.contact,c.cover])s(u,"garage");else if(l.type==="door"){if(vo(a,l))for(let u of[c.contact,c.contact2])s(u,"door")}else[c.contact,c.tilt,c.contact2,c.tilt2].filter(m=>!!m&&n.has(m)).forEach((m,p)=>s(m,p?"window_more":"window"))}for(let a of Jt(r,t,e).keys())s(a,"washer");for(let a of n){if(o.has(a))continue;let l=Zt(a),c=String(r.states[a]?.attributes.device_class??"");l==="lock"?s(a,"lock"):l==="alarm_control_panel"?s(a,"alarm"):l==="vacuum"?s(a,"robot"):l==="weather"?s(a,"weather"):l==="cover"&&(c==="garage"||c==="gate")?s(a,"garage"):l==="binary_sensor"&&(cn[c]?s(a,cn[c]):c==="garage_door"?s(a,"garage"):c==="motion"&&s(a,"motion"))}return o}var xo={light:["brightness","color_mode","rgb_color","color_temp_kelvin"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature"],media_player:["media_title","media_artist","app_name","source","volume_level"],weather:["cloud_coverage","wind_speed","wind_speed_unit"],vacuum:["current_room"],fan:[],alarm_control_panel:[],lock:[],water_heater:[]};function wo(r,t){if(r==="rgb_color")return Array.isArray(t)&&t.every(e=>typeof e=="number")?t.map(e=>Math.round(e)):null;if(typeof t!="number"||!Number.isFinite(t))return t;switch(r){case"brightness":return Math.max(0,Math.min(255,Math.round(Math.round(t/255*50)*2*255/100)));case"color_temp_kelvin":return Math.round(t/50)*50;case"current_position":case"current_tilt_position":case"cloud_coverage":return Math.round(t);case"volume_level":return Math.round(Math.round(t*20)*5)/100;case"current_temperature":case"temperature":case"wind_speed":return Math.round(t*10)/10;default:return t}}function Mo(r){return r==="home"||r==="unavailable"||r==="unknown"?r:"not_home"}function te(r){let t=r.entity_id.slice(0,r.entity_id.indexOf("."));if(t==="device_tracker")return{s:Mo(r.state),a:null};let e=xo[t];if(!e?.length)return{s:r.state,a:null};let n={};for(let o of e){let s=r.attributes[o];if(s==null)continue;let i=wo(o,s);i!=null&&(n[o]=i)}return{s:r.state,a:Object.keys(n).length?n:null}}var ee=3e5,pn=2e4,ko=[6e4,ee,15*6e4,36e5],So=(r,t)=>r.startsWith("sensor.")&&t.state!==""&&Number.isFinite(Number(t.state));function Eo(r,t){let e=[];for(let n of r){let o=e[e.length-1];o&&Math.floor(o.t/t)===Math.floor(n.t/t)?e[e.length-1]=n:e.push(n);let s=e[e.length-2];s&&s.k===e[e.length-1].k&&e.pop()}return e}var wt=class{ids;seen=new Map;lastKey=new Map;startStates;startedAt;seeded=new Set;rows=new Map;count=0;constructor(t,e,n=Date.now()){this.ids=t,this.startStates=e,this.startedAt=n;for(let o of t)this.seen.set(o,e[o]),e[o]&&this.lastKey.set(o,V(te(e[o])))}get pending(){return this.count}record(t,e){for(let n of this.ids){let o=t[n];if(o===this.seen.get(n)||(this.seen.set(n,o),!o))continue;let s=te(o),i=V(s);if(this.lastKey.get(n)===i)continue;let a=this.rows.get(n),l=a?.[a.length-1],c=Date.parse(o.last_updated??o.last_changed??""),u=Math.max(Number.isFinite(c)?Math.min(e,c):e,l?.t??-1/0);if(l&&So(n,o)&&Math.floor(l.t/ee)===Math.floor(u/ee)){a[a.length-1]={t:u,v:s,k:i},this.lastKey.set(n,i);continue}this.lastKey.set(n,i),a?a.push({t:u,v:s,k:i}):this.rows.set(n,[{t:u,v:s,k:i}]),this.count++}this.count>pn&&this.compact()}compact(){for(let t of ko){let e=0;for(let[n,o]of this.rows){let s=Eo(o,t);this.rows.set(n,s),e+=s.length}if(this.count=e,e<=pn/2)return}}flush(t,e){let n=0,o=0;for(let s of this.ids){if(this.seeded.has(s)||t.tracks.has(s)||t.series.has(s))continue;this.seeded.add(s);let i=this.startStates[s],a=[...i?[{t:this.startedAt,v:te(i)}]:[],...this.rows.get(s)??[]],l=je(s,a);this.rows.delete(s),l&&(t.tracks.set(s,l),t.missing.delete(s),o++,n+=l.times.length)}for(let[s,i]of this.rows){let a=t.tracks.get(s);if(a){n+=Ut(a,i);continue}let l=t.series.get(s);l&&(n+=Ke(l,i.map(c=>({t:c.t,value:Number(c.v.s)}))))}return this.rows=new Map,this.count=0,t.end=Math.max(t.end,e),{added:n,created:o}}};function hn(r,t,e){if(!(t.state==="opening"||t.state==="closing")||t.pos===null||!e||e.pos===null)return t.pos;let o=e.t-t.t;return!(o>0)||o>18e4||r<=t.t?t.pos:r>=e.t?e.pos:Math.round(t.pos+(e.pos-t.pos)*(r-t.t)/o)}var M=Math.PI/180;function Mt(r,t,e){let n=(e/864e5+24405875e-1-2451545)/36525,o=(280.46646+n*(36000.76983+n*3032e-7))%360,s=357.52911+n*(35999.05029-1537e-7*n),i=.016708634-n*(42037e-9+1267e-10*n),a=Math.sin(s*M)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*s*M)*(.019993-101e-6*n)+Math.sin(3*s*M)*289e-6,l=125.04-1934.136*n,c=o+a-.00569-.00478*Math.sin(l*M),m=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*M),p=Math.asin(Math.sin(m*M)*Math.sin(c*M)),d=Math.tan(m/2*M)**2,h=4/M*(d*Math.sin(2*o*M)-2*i*Math.sin(s*M)+4*i*d*Math.sin(s*M)*Math.cos(2*o*M)-.5*d*d*Math.sin(4*o*M)-1.25*i*i*Math.sin(2*s*M)),b=(((e/6e4%1440+1440)%1440+h+4*t)%1440+1440)%1440,g=(b/4<0?b/4+180:b/4-180)*M,x=r*M,w=Math.min(1,Math.max(-1,Math.sin(x)*Math.sin(p)+Math.cos(x)*Math.cos(p)*Math.cos(g))),y=Math.acos(w),k=90-y/M;k+=$o(k);let E=Math.cos(x)*Math.sin(y),G=180;if(Math.abs(E)>1e-9){let de=Math.acos(Math.min(1,Math.max(-1,(Math.sin(x)*Math.cos(y)-Math.sin(p))/E)))/M;G=g>0?(de+180)%360:(540-de)%360}return{elevation:k,azimuth:G}}function $o(r){if(r>85)return 0;let t=Math.tan(r*M);return(r>5?58.1/t-.07/t**3+86e-6/t**5:r>-.575?1735+r*(-518.2+r*(103.4+r*(-12.79+r*.711))):-20.772/t)/3600}function ne(r,t,e){return Mt(r,t,e).elevation<-.833}function fn(r,t,e,n,o=5*6e4){let s=[],i=null;for(let a=e;a<=n;a+=o){let l=ne(r,t,a);l&&i===null&&(i=a),!l&&i!==null&&(s.push([i,a]),i=null)}return i!==null&&s.push([i,n]),s}var se=class extends Error{constructor(t){super(`Time travel is read-only: ${t}`),this.name="ReplayReadOnly"}},Ro=new Set(["neonplan3d/building/get","neonplan3d/image/get","neonplan3d/packs/list","neonplan3d/timetravel/history","history/history_during_period","recorder/statistics_during_period"]),Ao=new Set(["neonplan3d/building/subscribe"]),oe={light:["brightness","color_mode","rgb_color","color_temp_kelvin","color_temp","hs_color","xy_color","rgbw_color","rgbww_color","effect"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature","target_temp_high","target_temp_low","current_humidity","preset_mode","fan_mode"],media_player:["media_title","media_artist","media_album_name","app_name","app_id","source","volume_level","is_volume_muted","entity_picture","media_content_id","media_duration","media_position","media_position_updated_at","media_series_title","media_season","media_episode","media_channel"],weather:["cloud_coverage","wind_speed","wind_speed_unit","temperature","humidity","pressure","wind_bearing","visibility","dew_point","uv_index","apparent_temperature","precipitation"],fan:["percentage","preset_mode","oscillating","direction"],vacuum:["battery_level","status","fan_speed"],water_heater:["current_temperature","temperature","operation_mode"],humidifier:["humidity","current_humidity","mode"],alarm_control_panel:["changed_by"],lock:["changed_by"],device_tracker:["latitude","longitude","gps_accuracy","altitude","course","speed","vertical_accuracy","battery_level","ip","host_name","mac","zone","in_zones"],sun:["elevation","azimuth","rising","next_rising","next_setting","next_dawn","next_dusk","next_noon","next_midnight"]},gn=["person.","device_tracker."],re=r=>r.slice(0,r.indexOf("."));function kt(r,t){if(!t?.some(n=>n in r))return r;let e={...r};for(let n of t)delete e[n];return e}function rt(r){throw typeof window<"u"&&window.dispatchEvent(new CustomEvent("fp3d-replay-blocked",{detail:{what:r}})),new se(r)}function To(r,t){let e=r,n={...r,states:t};n.callService=(o,s)=>rt(`${o}.${s}`),n.callWS=o=>Ro.has(String(o.type))?r.callWS(o):rt(String(o.type)),n.connection={subscribeMessage:(o,s)=>Ao.has(String(s.type))?r.connection.subscribeMessage(o,s):rt(String(s.type))};for(let o of["callApi","callApiRaw"]){let s=e[o];typeof s=="function"&&(n[o]=(i,...a)=>String(i).toUpperCase()==="GET"?s.call(r,i,...a):rt(`${i} ${String(a[0])}`))}for(let o of["sendWS","fetchWithAuth"])o in e&&(n[o]=()=>rt(o));return n}var Fo=new Set(["light","switch","input_boolean","binary_sensor","fan"]),St=class{timeline;cursor;requested;trackAt=new Map;location;slots=new Map;steps=new Map;live=null;frozen;base=null;states={};hass=null;pulses=[];constructor(t,e){this.timeline=t,this.cursor=new B(t),this.cursor.tracks.forEach((o,s)=>this.trackAt.set(o.id,s)),this.location=e.location??null,this.frozen=e.states??null;let n=new Set([...e.allowed??[]].filter(o=>o.startsWith("device_tracker.")));this.requested=[...new Set([...e.requested,...t.tracks.keys(),...t.series.keys()])].filter(o=>n.has(o)||!gn.some(s=>o.startsWith(s)))}refresh(){let t=this.cursor.t;this.cursor=new B(this.timeline),this.trackAt.clear(),this.cursor.tracks.forEach((e,n)=>this.trackAt.set(e.id,n)),Number.isFinite(t)&&this.cursor.at(t)}hassAt(t,e,n=!0){let o=this.frozen??=t.states,s=!1;if(!this.base){this.base={};for(let[l,c]of Object.entries(o))gn.some(u=>l.startsWith(u))||(this.base[l]=l.startsWith("camera.")&&c.attributes.entity_picture?{...c,attributes:kt(c.attributes,["entity_picture","access_token"])}:c);s=!0}this.sameContext(t)||(this.live=t,s=!0);let i=!n&&e>this.cursor.t&&Number.isFinite(this.cursor.t)?this.cursor.idx.slice():null;this.cursor.at(e),this.pulses=i?this.findPulses(i):[];let a=[];for(let l of this.requested){let c=this.slots.get(l),u=this.slot(l,e,o[l],c);u!==c&&(this.slots.set(l,u),a.push(l))}if(!s&&!a.length&&this.hass)return this.hass;if(s){this.states={...this.base};for(let l of this.requested){let c=this.slots.get(l);c&&(this.states[l]=c.obj)}}else{this.states={...this.states};for(let l of a)this.states[l]=this.slots.get(l).obj}return this.hass=To(this.live,this.states),this.hass}findPulses(t){let e=[],n=this.cursor.idx;for(let o=0;o<n.length;o++){let s=t[o],i=n[o];if(s<0||i-s<2)continue;let a=this.cursor.tracks[o];if(!Fo.has(re(a.id)))continue;let l=a.values[a.vals[s]].s;if(a.values[a.vals[i]].s===l){for(let c=s+1;c<i;c++)if(a.values[a.vals[c]].s!==l){e.push(a.id);break}}}return e}sameContext(t){let e=this.live;if(!e)return!1;if(e===t)return!0;let n=t;for(let o in n)if(o!=="states"&&n[o]!==e[o])return!1;for(let o in e)if(!(o in n))return!1;return!0}slot(t,e,n,o){let s=this.trackAt.get(t),i=this.timeline.series.get(t),a,l;if(t==="sun.sun"&&this.location){let c=Mt(this.location.lat,this.location.lon,e),u=Math.round(c.elevation*2)/2,m=Math.round(c.azimuth*2)/2,p=Mt(this.location.lat,this.location.lon,e+6e5).elevation>c.elevation;a=`${u}|${m}|${p}`,l=()=>({entity_id:t,state:c.elevation>-.833?"above_horizon":"below_horizon",attributes:{...kt(n?.attributes??{},oe.sun),elevation:u,azimuth:m,rising:p}})}else if(s!==void 0&&this.cursor.idx[s]>=0){let c=this.cursor.tracks[s],u=this.cursor.idx[s],m=c.values[c.vals[u]],p=t.startsWith("cover.")?this.coverPos(c,u,e):null;a=p===null?`${u}`:`${u}:${p}`,l=()=>{let d={...kt(n?.attributes??{},oe[re(t)]),...m.a??{}};p!==null&&(d.current_position=p),t==="sun.sun"&&d.elevation===void 0&&Object.assign(d,{elevation:m.s==="above_horizon"?25:-12,azimuth:180});let h=c.since[u];return h>this.timeline.start?{entity_id:t,state:m.s,attributes:d,last_changed:new Date(h).toISOString()}:{entity_id:t,state:m.s,attributes:d}}}else if(i){let c=I(i,e),u=this.stepOf(t,i,n),m=Ne(c,u);a=`n${m}`,l=()=>({entity_id:t,state:m,attributes:n?.attributes??{},last_changed:new Date(e).toISOString()})}else a="none",l=()=>({entity_id:t,state:"unknown",attributes:kt(n?.attributes??{},oe[re(t)])});return o&&o.key===a&&o.attrs===n?.attributes?o:{key:a,attrs:n?.attributes,obj:l()}}coverPos(t,e,n){let o=t.values[t.vals[e]];if(o.s!=="opening"&&o.s!=="closing")return null;let s=a=>typeof a.a?.current_position=="number"?a.a.current_position:null,i=e+1<t.times.length?{t:t.times[e+1],pos:s(t.values[t.vals[e+1]])}:null;return hn(n,{t:t.times[e],state:o.s,pos:s(o)},i)}stepOf(t,e,n){let o=this.steps.get(t);if(o===void 0){let s=e.mean.find(i=>!Number.isNaN(i))??0;o=Ce(n?.attributes.unit_of_measurement,this.live?.entities?.[t]?.display_precision,s),this.steps.set(t,o)}return o}rows(t,e,n){let o={};for(let s of t){let i=this.timeline.tracks.get(s);if(!i)continue;let a=[];for(let l=Math.max(0,S(i.times,e));l<i.times.length&&i.times[l]<=n;l++)a.push({s:i.values[i.vals[l]].s,lu:i.times[l]/1e3});a.length&&(o[s]=a)}return o}};var bn=new Set(["cleaning","paused","returning"]),zo=new Set(["","unknown","unavailable","none","null"]);function yn(r,t,e){if(!r)return[];let n=c=>r.values[r.vals[c]].s,o=S(r.times,e);if(o<0||!bn.has(n(o)))return[];let s=o;for(;s>0&&bn.has(n(s-1));)s--;let i=r.times[s],a=[],l=c=>{let u=typeof c=="string"?c.trim():"";!zo.has(u.toLowerCase())&&a[a.length-1]!==u&&a.push(u)};if(t){let c=Math.max(0,S(t.times,i));for(t.times[c]<i-6e4&&c++;c<t.times.length&&t.times[c]<=e;c++)l(t.values[t.vals[c]].s)}else for(let c=s;c<=o;c++)l(r.values[r.vals[c]].a?.current_room);return a}var ie=r=>r.slice(0,r.indexOf("."));function Oo(r,t){let e=r.entities?.[t];return e?e.area_id??(e.device_id?r.devices?.[e.device_id]?.area_id??null:null):null}function _n(r,t,e){let n=[],o=new Map;for(let a of Object.keys(r.entities??{})){let l=Oo(r,a);l&&o.set(l,[...o.get(l)??[],a])}let s=new Map(e.openings),i=new Map(e.furniture);for(let a of t.floors)for(let l of a.rooms){if(l.points.length<3)continue;let c=new Set(l.area_id?o.get(l.area_id)??[]:[]);for(let d of a.placements)F([d.x,d.z],l.points)&&c.add(d.entity_id);for(let d of a.furniture){let h=i.get(d.id);h?.entity&&F([d.x,d.z],l.points)&&c.add(h.entity)}let u=[];for(let d of a.openings){if(d.room_id!==l.id)continue;let h=s.get(d.id),f=h?[h.contact,h.tilt,h.contact2,h.tilt2].filter(b=>!!b):[];for(let b of f)c.add(b);f.length&&d.type!=="door"&&d.type!=="garage"&&u.push(f)}let m=[...c].filter(d=>!!r.states[d]),p=d=>r.states[d]?.attributes.device_class;n.push({floorId:a.id,roomId:l.id,name:l.name,lights:m.filter(d=>ie(d)==="light"),windows:u,climates:m.filter(d=>ie(d)==="climate"),temps:m.filter(d=>ie(d)==="sensor"&&p(d)==="temperature"),all:m})}return n}function vn(r){let t=new Map;for(let e of r)for(let n of e.all)t.has(n)||t.set(n,e);return t}var ae=36e5;function st(r,t,e){let n=r.map(([s,i])=>[Math.max(s,t),Math.min(i,e)]).filter(([s,i])=>i>s);n.sort((s,i)=>s[0]-i[0]);let o=[];for(let s of n){let i=o[o.length-1];i&&s[0]<=i[1]?i[1]=Math.max(i[1],s[1]):o.push([s[0],s[1]])}return o}var Et=r=>r.reduce((t,[e,n])=>t+(n-e),0);function Vo(r,t,e){let n=[],o=null;for(let s=0;s<r.times.length;s++){let i=t(r.values[r.vals[s]]);i&&o===null&&(o=r.times[s]),!i&&o!==null&&(n.push([o,r.times[s]]),o=null)}return o!==null&&e>o&&n.push([o,e]),n}function wn(r,t,e,n,o=2*ae){let s=st(t.flatMap(l=>{let c=r.tracks.get(l);return c?K(c,L,r.end):[]}),e,n);if(!t.some(l=>r.tracks.has(l)))return[];let i=[],a=e;for(let[l,c]of s)l-a>=o&&i.push([a,l]),a=Math.max(a,c);return n-a>=o&&i.push([a,n]),i}function Mn(r){for(let t=r.length-1;t>=0;t--){let[e,n]=r[t],o=0;for(let s=e;s<n;s+=6e5){let i=q(s);i>=7&&i<22&&(o+=Math.min(6e5,n-s))}if(o>=ae)return[e,n]}return null}var xn=["alarm","door","window","window_open","light_on","motion","appliance"];function kn(r){let{timeline:t,roles:e,events:n,from:o,to:s}=r,i=[],a=new Map,l=(u,m,p)=>{let d=`${u}:${m}`,h=a.get(d);if(h)h.count++,h.t=Math.min(h.t,p);else{let f={kind:u,entity:m,t:p,count:1,ms:0};a.set(d,f),i.push(f)}};for(let u of n)u.t<o||u.t>s||(gt.has(u.kind)||u.kind==="rain"?i.push({kind:"alarm",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}):u.kind==="door"||u.kind==="garage"||u.kind==="lock"?l("door",u.entity,u.t):u.kind==="window"?l("window",u.entity,u.t):(u.kind==="washer"||u.kind==="robot_done")&&i.push({kind:"appliance",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}));for(let u of r.motion){let m=t.tracks.get(u);if(m){for(let p of bt(m))p.from!==null&&p.t>=o&&p.t<=s&&p.to==="on"&&p.from!=="on"&&l("motion",u,p.t);if(m.dropped)for(let p of m.dropped)p>=o&&p<=s&&l("motion",u,p)}}let c=(u,m,p,d)=>{let h=st(p,o,s),f=Et(h);(f>=d||h.length&&h[h.length-1][1]>=s&&f>=6e4)&&i.push({kind:u,entity:m,t:h[0][0],count:h.length,ms:f})};for(let u of r.lights){let m=t.tracks.get(u);m&&c("light_on",u,K(m,Po,t.end),15*6e4)}for(let[u,m]of e){if(m!=="window"&&m!=="window_more")continue;let p=t.tracks.get(u);p&&c("window_open",u,K(p,L,t.end),30*6e4)}return i.sort((u,m)=>xn.indexOf(u.kind)-xn.indexOf(m.kind)||(u.kind==="light_on"||u.kind==="window_open"?m.ms-u.ms:u.t-m.t))}var Po=new Set(["on"]);function Co(r,t,e,n){let o=1/0,s=-1/0,i=r.series.get(t);if(i)for(let a=0;a<i.mean.length;a++){let l=i.start+(a+.5)*i.step,c=i.mean[a];l<e||l>n||Number.isNaN(c)||(o=Math.min(o,c),s=Math.max(s,c))}else{let a=r.tracks.get(t);if(a)for(let l=Math.max(0,S(a.times,e));l<a.times.length&&a.times[l]<=n;l++){let c=Number(a.values[a.vals[l]].s);Number.isFinite(c)&&(o=Math.min(o,c),s=Math.max(s,c))}}return Number.isFinite(o)?[o,s]:null}function Sn(r,t,e,n,o=null){let s=Math.min(n,r.end),i=[],a=(l,c)=>l.flatMap(u=>{let m=r.tracks.get(u);return m?Vo(m,c,r.end):[]});for(let l of t){let c=Et(st(a(l.lights,h=>h.s==="on"),e,s)),u=Et(st(a(l.windows.flat(),h=>L.has(h.s)),e,s)),m=Et(st(a(l.climates,h=>h.a?.hvac_action==="heating"),e,s)),p=null,d=null;for(let h of l.temps){let f=Co(r,h,e,s);f&&(p=p===null?f[0]:Math.min(p,f[0]),d=d===null?f[1]:Math.max(d,f[1]))}(c||u||m||p!==null)&&i.push({roomId:l.roomId,name:l.name,lightMs:c,windowMs:u,heatMs:m,tMin:p,tMax:d})}return{from:e,to:n,rooms:i,energy:o}}function No(r,t,e){let n=r.series.get(t);if(n){let i=I(n,e);return Number.isFinite(i)?String(i):null}let o=r.tracks.get(t);if(!o)return null;let s=S(o.times,e);return s<0?null:o.values[o.vals[s]].s}function En(r,t,e,n,o,s){let i={};for(let a of o){let l=No(r,a,s);l!==null&&(i[a]={entity_id:a,state:l,attributes:t[a]?.attributes??{}})}return he({states:i},e,[],n)}function $n(r,t){let e=r.energy;return[...new Set([e.grid,e.solar,e.battery,e.battery_soc,e.consumption,t.grid,t.gridExport,...t.solar,...t.battery,...t.charge,...t.soc].filter(n=>!!n))]}function Rn(r,t,e,n=3e5){let o=0,s=0,i=0,a=0,l=!1,c=n/ae/1e3;for(let u=t+n/2;u<e;u+=n){let m=r(u);m.solar===null&&m.grid===null&&m.consumption===null||(l=!0,o+=Math.max(0,m.solar??0)*c,s+=Math.max(0,m.grid??0)*c,i+=Math.max(0,-(m.grid??0))*c,a+=Math.max(0,m.consumption??0)*c)}return l?{pv:o,imp:s,exp:i,use:a,self:a>0?Math.min(1,Math.max(0,1-s/a)):null}:null}var Do={tt_range_hint:"Zeitraum: 24 Stunden oder mehrere Tage",tt_days:"{n} T",tt_loading_day:"lade {day} \u2026",tt_recorder_days:"Recorder: {n} Tage",tt_memory_full:"Speichergrenze erreicht",tt_now_reached:"Gegenwart erreicht",tt_sheet:"Ereignisse, Zusammenfassungen",tt_tab_events:"Ereignisse",tt_tab_away:"Weg",tt_tab_day:"Tag",tt_close:"Schlie\xDFen",tt_f_safety:"Sicherheit",tt_f_openings:"T\xFCren & Fenster",tt_f_devices:"Ger\xE4te",tt_f_energy:"Energie",tt_follow:"Kamera folgt Ereignissen",tt_stop:"Bei wichtigen Ereignissen anhalten",tt_no_events:"Keine Ereignisse",tt_ev_window:"{name} ge\xF6ffnet",tt_ev_battery_full:"Speicher voll: {name}",tt_ev_pv_peak:"H\xF6chste PV-Leistung des Tages",tt_away_title:"W\xE4hrend du weg warst",tt_away_since:"Seit",tt_away_last:"seit der letzten Zeitreise",tt_away_quiet:"ruhig {from}\u2013{to}",tt_away_none:"Nichts passiert \u2013 alles ruhig.",tt_away_door:"{name}: {n}\xD7 ge\xF6ffnet",tt_away_motion:"Bewegung {name}: {n}\xD7",tt_away_light:"{name} brannte {d}",tt_away_open:"{name} stand {d} offen",tt_day_title:"Tages\xFCbersicht {day}",tt_day_light:"Licht",tt_day_window:"Fenster",tt_day_heat:"Heizen",tt_day_temp:"Temp.",tt_day_pv:"PV",tt_day_import:"Netzbezug",tt_day_export:"Einspeisung",tt_day_use:"Verbrauch",tt_day_self:"Autarkie",tt_day_compare:"Mit dem Vortag vergleichen",tt_day_before:"Vortag",tt_day_none:"F\xFCr diesen Tag gibt es noch keine Werte.",tt_day_partial:"unvollst\xE4ndig (ab {time})",tt_yesterday:"Gestern um diese Zeit"},An={tt_range_hint:"Range: 24 hours or several days",tt_days:"{n} d",tt_loading_day:"loading {day} \u2026",tt_recorder_days:"Recorder: {n} days",tt_memory_full:"Memory limit reached",tt_now_reached:"Present reached",tt_sheet:"Events, summaries",tt_tab_events:"Events",tt_tab_away:"Away",tt_tab_day:"Day",tt_close:"Close",tt_f_safety:"Safety",tt_f_openings:"Doors & windows",tt_f_devices:"Devices",tt_f_energy:"Energy",tt_follow:"Camera follows events",tt_stop:"Stop at important events",tt_no_events:"No events",tt_ev_window:"{name} opened",tt_ev_battery_full:"Battery full: {name}",tt_ev_pv_peak:"Highest solar power of the day",tt_away_title:"While you were away",tt_away_since:"Since",tt_away_last:"since the last time travel",tt_away_quiet:"quiet {from}\u2013{to}",tt_away_none:"Nothing happened \u2013 all quiet.",tt_away_door:"{name}: opened {n}\xD7",tt_away_motion:"Motion {name}: {n}\xD7",tt_away_light:"{name} was on for {d}",tt_away_open:"{name} stood open for {d}",tt_day_title:"Day summary {day}",tt_day_light:"Light",tt_day_window:"Window",tt_day_heat:"Heating",tt_day_temp:"Temp.",tt_day_pv:"Solar",tt_day_import:"Grid import",tt_day_export:"Export",tt_day_use:"Consumption",tt_day_self:"Self-sufficiency",tt_day_compare:"Compare with the day before",tt_day_before:"Day before",tt_day_none:"There are no values for this day yet.",tt_day_partial:"incomplete (from {time})",tt_yesterday:"Yesterday at this time"};function Tn(r,t){return(e,n={})=>{let o=r(e,n);if(o!==e)return o;let i=((t()??"").startsWith("de")?Do:An)[e]??An[e]??e;for(let[a,l]of Object.entries(n))i=i.replace(`{${a}}`,String(l));return i}}var $=24*36e5,le=150,ce=250,Io=10*1024*1024,Ho=6e4,Lo=6e4,Fn=1e4;function j(r,t){try{return t!==void 0&&localStorage.setItem(`fp3d-tt-${r}`,t),localStorage.getItem(`fp3d-tt-${r}`)}catch{return null}}var ue=class{hass=null;replay;state="loading";error=null;progress=0;playback=null;timeline=null;events=[];allEvents=[];names=new Map;gaps=[];nights=[];rooms=[];roomOf=new Map;opts;end;range;loadingDay=null;full=!1;version=0;follow=j("follow")==="1";stopImportant=j("stop")!=="0";lastClosed;t;live;startStates;replayer=null;roles=new Map;weather=null;devices=null;energyIds=[];requested=[];cars=[];liveLog=null;quality;low;timer;last=0;followAt=0;eventsAt=0;flushedAt=0;derivePending=!1;gapsTo=0;wanted=null;needFrom=null;olderRunning=!1;disposed=!1;daySummaries=new Map;listeners=new Set;onVisible=()=>{document.hidden||!this.playback?.playing||(this.last=performance.now(),this.schedule())};constructor(t){this.opts=t,this.live=t.live,this.startStates=t.live.states,this.quality=t.quality,this.low=t.spec.low,this.t=Tn(t.t,()=>this.live.language),qt(Bt(t.live)),this.end=Date.now(),this.range=t.range==="7d"?"7d":"24h";let e=Number(j("closed"));this.lastClosed=Number.isFinite(e)&&e>0&&e<this.end?e:null;let n=this;this.replay={t:this.end,seek:0,pulses:[],focus:null,focusSeq:0,rows:(o,s,i)=>n.replayer?.rows(o,s,i)??{},listen:o=>n.listen(o),stats:(o,s,i)=>n.timeline?Qe(n.timeline,o,s,i):{},robotRooms:(o,s)=>n.timeline?yn(n.timeline.tracks.get(o),s?n.timeline.tracks.get(s):void 0,n.replay.t):[],setQuality:(o,s)=>n.setQuality(o,s)},document.addEventListener("visibilitychange",this.onVisible),this.load()}listen(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(){for(let t of this.listeners)t()}get playing(){return!!this.playback?.playing}get maxDays(){return(this.quality==="low"||this.low)&&this.opts.range!=="7d"?2:7}get start(){return this.end-(this.range==="7d"?this.maxDays:1)*$}get recorderStart(){let t=this.timeline?.keepDays;return typeof t=="number"&&t>0?this.end-t*$:null}get atNow(){let t=this.playback;return!!t&&!t.playing&&t.t>=t.end-1e3&&Date.now()-t.end<12e4}get location(){let t=this.live.config;return typeof t?.latitude=="number"&&typeof t?.longitude=="number"?{lat:t.latitude,lon:t.longitude}:null}get energy(){return!!this.opts.spec.energy&&this.energyIds.length>0}async fetchWindow(t,e,n){let o=Xt(this.live,this.opts.building,this.opts.spec),s=Math.max(1,Math.ceil(o.entities.length/le),Math.ceil(o.stats.length/ce)),i=[];for(let a=0;a<s;a++){let l=o.entities.slice(a*le,(a+1)*le),c=o.stats.slice(a*ce,(a+1)*ce),u={type:"neonplan3d/timetravel/history",start_time:t/1e3,end_time:e/1e3,entity_ids:l,statistic_ids:c},m=o.cars.filter(p=>l.includes(p));if(m.length&&(u.car_trackers=m),i.push(await this.live.callWS(u)),this.disposed)return null;n?.((a+1)/s)}return Ie(i)}async load(){this.state="loading",this.error=null,this.progress=0,this.notify();let{building:t,spec:e}=this.opts,n=this.live,o=Xt(n,t,e),s;try{s=await this.fetchWindow(this.end-$,this.end,c=>{this.progress=c,this.notify()})}catch(c){if(this.disposed)return;let u=c;this.state="error",this.error=u?.code??u?.message??String(c),this.notify();return}if(!s)return;let i=t.presence.flatMap(c=>[c.sensor]).filter(c=>!!c);this.requested=[...o.entities,...o.stats,...o.overflow,...o.hidden,...i],this.cars=o.cars;let a=new Map(e.furniture);this.devices=e.energy?$t(t,c=>a.get(c.id)?.power??null):null,this.energyIds=this.devices?$n(t,this.devices):[],this.rooms=_n(n,t,e),this.roomOf=vn(this.rooms);for(let[c,u]of Jt(n,t,e))this.names.set(c,u.name||this.t(`furn_${u.type}`));this.setTimeline(s);let l=typeof this.opts.at=="number"?this.opts.at:vt(this.opts.at??null,this.end);this.playback=new yt(s.start,this.end,l??this.end-36e5,this.opts.speed??void 0,this.range==="7d"?Gt:_t),this.liveLog=new wt([...o.entities,...o.stats,...o.overflow],this.startStates,this.end),this.liveLog.record(this.live.states,Date.now()),this.flushedAt=Date.now(),this.state="ready",this.apply(!0),this.range==="7d"&&this.loadOlder()}setTimeline(t){let{building:e,spec:n}=this.opts,o=this.live,s=new Set([...t.tracks.keys(),...t.series.keys()]);this.roles=mn(o,e,n,s),We(t)>Be&&qe(t,this.motion()),this.timeline=t,this.version++,this.daySummaries.clear(),this.replayer=new St(t,{requested:this.requested,location:this.location,states:this.startStates,allowed:this.cars}),this.weather??=[e.settings.weather_entity,...Object.keys(o.states).filter(i=>i.startsWith("weather."))].find(i=>!!i&&s.has(i))??null,this.findEvents(),this.gaps=Wt(t),this.gapsTo=t.end,this.updateNights()}findEvents(){let t=this.timeline;if(!t)return;let{building:e,spec:n}=this.opts,o=this.devices,s=o&&n.energy?{solar:e.energy.solar?[e.energy.solar]:o.solar,soc:e.energy.battery_soc?[e.energy.battery_soc]:o.soc,sunDown:i=>this.sunDown(i)}:null;this.allEvents=Je({timeline:t,roles:this.roles,weather:this.weather,energy:s}),this.events=this.allEvents.filter(i=>!Xe.has(i.kind))}sunDown(t){let e=this.location;if(e)return ne(e.lat,e.lon,t);let n=this.timeline?.tracks.get("sun.sun"),o=n?S(n.times,t):-1;return!!n&&o>=0&&n.values[n.vals[o]].s==="below_horizon"}shownEvents(t=!1){let e=this.playback,n=t?this.allEvents:this.events;return e?sn(n,Math.max(e.start,this.start),this.end):n}motion(){return[...this.roles].filter(([,t])=>t==="motion").map(([t])=>t)}updateNights(){let t=this.location;this.nights=t?fn(t.lat,t.lon,this.start,this.end):this.sunNights()}async loadOlder(){if(!this.olderRunning){this.olderRunning=!0;try{for(;!this.disposed&&this.timeline&&!this.full;){let t=this.timeline.start,e=Math.min(this.range==="7d"?this.start:1/0,this.needFrom??1/0);if(t<=e+6e4)break;let n=this.recorderStart;if(n!==null&&t<=n||this.timeline.oldest!==null&&this.timeline.oldest>this.timeline.start)break;this.loadingDay=t-$,this.notify();let o;try{o=await this.fetchWindow(t-$,t)}catch(l){console.warn("NeonPlan 3D: time travel could not load an older day",l);break}if(!o||this.disposed||!this.timeline)return;let s=Le(o,this.timeline);this.setTimeline(s),Ue(s)>Io&&(this.full=!0);let i=this.playback;if(!i)continue;i.setRange(Math.max(s.start,this.start),this.end);let a=!1;this.wanted!==null&&this.wanted>=i.start&&(i.seek(this.wanted),this.wanted=null,a=!0),this.apply(!0,a)}}finally{this.olderRunning=!1,this.disposed||(this.loadingDay=null,this.notify())}}}setRange(t){let e=this.playback;if(t===this.range||!e||!this.timeline)return;this.range=t;let n=e.t;e.setRange(Math.max(this.timeline.start,this.start),this.end,t==="7d"?Gt:_t),this.updateNights(),e.t!==n?this.apply(!0):this.notify(),t==="7d"&&this.loadOlder()}sunNights(){let t=this.timeline?.tracks.get("sun.sun");if(!t)return[];let e=[],n=null;for(let o=0;o<t.times.length;o++){let s=t.values[t.vals[o]].s==="below_horizon";s&&n===null&&(n=t.times[o]),!s&&n!==null&&(e.push([n,t.times[o]]),n=null)}return n!==null&&e.push([n,this.end]),e}apply(t,e=t){let n=this.playback;if(!n||!this.replayer||this.disposed)return;this.replay.t=n.t,e&&this.replay.seek++;let o=this.replayer.hassAt(this.live,n.t,t);this.replay.pulses=this.replayer.pulses,(o!==this.hass||t)&&(this.hass=o,this.opts.onChange()),this.notify()}setLive(t){this.live=t,qt(Bt(t));let e=Date.now();this.liveLog?.record(t.states,e);let n=this.playback,o=!1;if(this.state==="ready"&&n&&this.liveLog&&(this.liveLog.pending&&e-this.flushedAt>=Lo||this.derivePending&&e-this.eventsAt>Fn)){let s=!n.playing&&n.t>=n.end-1e3;this.edge(e),s&&n.seek(n.end),this.replay.t=n.t,o=!0}this.replayer&&n&&(this.hass=this.replayer.hassAt(t,n.t)),o&&this.notify()}setQuality(t,e){let n=this.maxDays;this.quality=t,this.low=e;let o=this.playback;if(n===this.maxDays||!o||!this.timeline)return;let s=this.end-this.maxDays*$,i=this.timeline.start<s-6e4;if(i)this.setTimeline(Ge(this.timeline,s)),this.full=!1,this.needFrom!==null&&this.needFrom<s&&(this.needFrom=null),this.wanted!==null&&this.wanted<s&&(this.wanted=null);else if(this.range!=="7d")return;let a=o.t;o.setRange(Math.max(this.timeline.start,this.start),this.end),this.updateNights(),i||o.t!==a?this.apply(!0,o.t!==a):this.notify(),this.loadOlder()}play(){let t=this.playback;if(!t)return;let e=t.t>=t.end;t.play(),e&&this.apply(!0),this.last=performance.now(),this.schedule(),this.notify()}pause(){this.playback?.pause(),clearTimeout(this.timer),this.timer=void 0,this.derivePending&&this.derive(Date.now()),this.notify()}toggle(){this.playback?.playing?this.pause():this.play()}seek(t,e=!1){this.playback&&(e&&this.pause(),this.wanted=null,this.playback.seek(t),this.last=performance.now(),this.apply(!0))}step(t){let e=this.playback;if(!e)return;let n=rn(this.shownEvents(),e.t,t);this.seek(n?n.t:t>0?e.end:e.start,!0)}goTo(t){this.seek(t.t,!0),this.focusOn(t.entity)}focusOn(t){this.replay.focus=t,this.replay.focusSeq++,this.notify()}yesterday(){let t=this.playback;if(!t)return;let e=t.t-$;e<t.start&&this.range==="24h"&&this.setRange("7d"),this.seek(Math.max(e,t.start),!0),e<t.start&&this.olderRunning&&(this.wanted=e)}setFollow(t){this.follow=t,j("follow",t?"1":"0"),this.notify()}setStopImportant(t){this.stopImportant=t,j("stop",t?"1":"0"),this.notify()}nextSpeed(){this.playback?.nextSpeed(),this.notify()}awayOffer(){let t=this.timeline;return t?Mn(wn(t,this.motion(),t.start,this.end)):null}away(t,e){let n=this.timeline;return n?kn({timeline:n,roles:this.roles,events:this.allEvents,lights:[...n.tracks.keys()].filter(o=>o.startsWith("light.")),motion:this.motion(),from:t,to:e}):[]}ensureLoaded(t){let e=this.timeline;!e||e.start<=t+6e4||this.needFrom!==null&&this.needFrom<=t||t<this.end-this.maxDays*$-$||(this.needFrom=t,this.loadOlder())}daySummary(t){let e=this.timeline;if(!e||t+$<=e.start||t>e.end)return null;let n=`${t}|${this.version}`,o=this.daySummaries.get(n);if(!o){let s=pt(t),i=Math.max(t,e.start),a=Math.min(s,e.end),l=this.devices,c=this.energy&&l?Rn(u=>En(e,this.live.states,this.opts.building,l,this.energyIds,u),i,a):null;o=Sn(e,this.rooms,i,a,c),this.daySummaries.set(n,o)}return o}schedule(){clearTimeout(this.timer),this.timer=void 0;let t=this.playback;!t?.playing||this.disposed||document.hidden||(this.timer=setTimeout(()=>{this.timer=void 0;let e=performance.now(),n=Math.min(2e3,e-this.last);this.last=e;let o=t.t;if(t.end-t.t<=Ho+n*t.speed&&this.edge(),t.advance(n)){let s=this.stopImportant&&t.speed>=900?Qt(this.allEvents,o,t.t,i=>gt.has(i.kind)):null;if(s){t.seek(s.t),t.pause(),this.apply(!0),this.focusOn(s.entity);return}if(this.apply(!1),this.follow&&e-this.followAt>2500){let i=Qt(this.events,o,t.t,()=>!0);i&&(this.followAt=e,this.focusOn(i.entity))}}t.playing?this.schedule():(this.derivePending&&this.derive(Date.now()),this.notify())},on(this.quality,this.low)))}edge(t=Date.now()){let e=this.playback,n=this.timeline;if(!e||!n||!this.liveLog||t-this.end<1e3&&!this.liveLog.pending&&!this.derivePending)return;let{added:o,created:s}=this.liveLog.flush(n,t);this.flushedAt=t,this.end=t,e.setRange(Math.max(n.start,this.start),t),s&&this.replayer?.refresh(),(o||s)&&(this.derivePending=!0),this.derivePending&&(!e.playing||t-this.eventsAt>Fn)&&this.derive(t)}derive(t){let e=this.timeline;if(!e)return;this.derivePending=!1,this.eventsAt=t,this.findEvents();let n=Math.max(e.start,this.gapsTo-30*6e4),o=this.gaps.filter(([a])=>a<n).map(([a,l])=>[a,Math.min(l,n)]),s=Wt(e,void 0,void 0,void 0,n),i=o[o.length-1];i&&s.length&&i[1]>=n&&s[0][0]<=n&&(i[1]=s.shift()[1]),this.gaps=[...o,...s],this.gapsTo=e.end,this.updateNights(),this.version++,this.daySummaries.clear()}exit(){this.opts.onExit()}dispose(){!this.disposed&&this.state==="ready"&&j("closed",String(Date.now())),this.disposed=!0,clearTimeout(this.timer),this.timer=void 0,this.listeners.clear(),this.liveLog=null,document.removeEventListener("visibilitychange",this.onVisible)}};function hi(r){return new ue(r)}export{Io as MAX_BYTES,ue as Session,hi as startTimeTravel};
