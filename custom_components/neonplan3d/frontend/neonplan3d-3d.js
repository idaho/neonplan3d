var df=0,Pu=1,ff=2;var os=1,pf=2,io=3,Fi=0,un=1,lt=2,Qn=0,Di=1,Lt=2,ku=3,ss=4,mf=5;var dr=100,gf=101,_f=102,bf=103,vf=104,xf=200,yf=201,wf=202,Mf=203,Cu=204,Iu=205,Sf=206,Tf=207,Af=208,Ef=209,Rf=210,Pf=211,kf=212,Cf=213,If=214,Ma=0,Sa=1,Ta=2,Kr=3,Aa=4,Ea=5,Ra=6,Pa=7,Lu=0,Lf=1,Ff=2,On=0,Fu=1,Du=2,Nu=3,zu=4,Bu=5,Ou=6,Uu=7;var Vu=300,Ni=301,fr=302,ul=303,hl=304,as=306,ar=1e3,vn=1001,ka=1002,Wt=1003,Df=1004;var ls=1005;var Yt=1006,dl=1007;var zi=1008;var yn=1009,Gu=1010,Hu=1011,ro=1012,fl=1013,Un=1014,Vn=1015,Gn=1016,pl=1017,ml=1018,oo=1020,Wu=35902,Xu=35899,Ku=1021,Yu=1022,Rn=1023,Zn=1026,Bi=1027,qu=1028,gl=1029,Oi=1030,_l=1031;var bl=1033,cs=33776,us=33777,hs=33778,ds=33779,vl=35840,xl=35841,yl=35842,wl=35843,Ml=36196,Sl=37492,Tl=37496,Al=37488,El=37489,fs=37490,Rl=37491,Pl=37808,kl=37809,Cl=37810,Il=37811,Ll=37812,Fl=37813,Dl=37814,Nl=37815,zl=37816,Bl=37817,Ol=37818,Ul=37819,Vl=37820,Gl=37821,Hl=36492,Wl=36494,Xl=36495,Kl=36283,Yl=36284,ps=36285,ql=36286;var Fo=2300,Ca=2301,xa=2302,bu=2303,vu=2400,xu=2401,yu=2402;var Nf=3200;var Zu=0,zf=1,fi="",Dt="srgb",Do="srgb-linear",No="linear",pt="srgb";var ya=7680;var Bf=519,Of=512,Uf=513,Vf=514,Zl=515,Gf=516,Hf=517,$l=518,Wf=519,Xf=35044,$u=35048;var Ju="300 es",Dn=2e3,zo=2001;function ug(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kf(){let i=Yr("canvas");return i.style.display="block",i}var Cd={},qr=null;function ju(...i){let e="THREE."+i.shift();qr?qr("log",e,...i):console.log(e,...i)}function Yf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=Yf(i);let e="THREE."+i.shift();if(qr)qr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=Yf(i);let e="THREE."+i.shift();if(qr)qr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function sr(...i){let e=i.join(" ");e in Cd||(Cd[e]=!0,Ve(...i))}function qf(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}var Zf={[Ma]:Sa,[Ta]:Ra,[Aa]:Pa,[Kr]:Ea,[Sa]:Ma,[Ra]:Ta,[Pa]:Aa,[Ea]:Kr},$n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Kc=Math.PI/180,Ia=180/Math.PI;function ms(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function dg(i,e){return(i%e+e)%e}function Yc(i,e,t){return(1-t)*i+t*e}function To(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var rh=class rh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rh.prototype.isVector2=!0;var Ee=rh,Jn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=o[s+0],f=o[s+1],p=o[s+2],g=o[s+3];if(h!==g||l!==d||c!==f||u!==p){let m=l*d+c*f+u*p+h*g;m<0&&(d=-d,f=-f,p=-p,g=-g,m=-m);let _=1-a;if(m<.9995){let x=Math.acos(m),w=Math.sin(x);_=Math.sin(_*x)/w,a=Math.sin(a*x)/w,l=l*_+d*a,c=c*_+f*a,u=u*_+p*a,h=h*_+g*a}else{l=l*_+d*a,c=c*_+f*a,u=u*_+p*a,h=h*_+g*a;let x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=o[s],d=o[s+1],f=o[s+2],p=o[s+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(o/2),d=l(n/2),f=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(o-c)*f,this._z=(s-r)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(o+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(o-c)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(s-r)/f,this._x=(o+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},oh=class oh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Id.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Id.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),h=2*(o*n-s*t);return this.x=t+l*c+s*h-a*u,this.y=n+l*u+a*c-o*h,this.z=r+l*h+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};oh.prototype.isVector3=!0;var U=oh,qc=new U,Id=new Jn,sh=class sh{constructor(e,t,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],g=r[0],m=r[3],_=r[6],x=r[1],w=r[4],b=r[7],y=r[2],M=r[5],E=r[8];return o[0]=s*g+a*x+l*y,o[3]=s*m+a*w+l*M,o[6]=s*_+a*b+l*E,o[1]=c*g+u*x+h*y,o[4]=c*m+u*w+h*M,o[7]=c*_+u*b+h*E,o[2]=d*g+f*x+p*y,o[5]=d*m+f*w+p*M,o[8]=d*_+f*b+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*s-a*c,d=a*l-u*o,f=c*o-s*l,p=t*h+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=h*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*s)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*o-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*o)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(e,t)),this}rotate(e){return sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-e)),this}translate(e,t){return sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sh.prototype.isMatrix3=!0;var $e=sh,Zc=new $e,Ld=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fd=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fg(){let i={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===pt&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===pt&&(r.r=Xr(r.r),r.g=Xr(r.g),r.b=Xr(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fi?No:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Do]:{primaries:e,whitePoint:n,transfer:No,toXYZ:Ld,fromXYZ:Fd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Ld,fromXYZ:Fd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}var at=fg();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cr,La=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cr===void 0&&(Cr=Yr("canvas")),Cr.width=e.width,Cr.height=e.height;let r=Cr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Cr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=hi(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pg=0,Zr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push($c(r[s].image)):o.push($c(r[s]))}else o=$c(r);n.url=o}return t||(e.images[this.uuid]=n),n}};function $c(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var mg=0,Jc=new U,nn=class i extends $n{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vn,r=vn,o=Yt,s=zi,a=Rn,l=yn,c=i.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=ms(),this.name="",this.source=new Zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ar:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ar:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Vu;nn.DEFAULT_ANISOTROPY=1;var ah=class ah{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,b=(f+1)/2,y=(_+1)/2,M=(u+d)/4,E=(h+g)/4,v=(p+m)/4;return w>b&&w>y?w<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(w),r=M/n,o=E/n):b>y?b<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),n=M/r,o=v/r):y<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(y),n=E/o,r=v/o),this.set(n,r,o,t),this}let x=Math.sqrt((m-p)*(m-p)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(h-g)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ah.prototype.isVector4=!0;var It=ah,Fa=class extends $n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},o=new nn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Fa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Bo=class extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var cl=class cl{constructor(e,t,n,r,o,s,a,l,c,u,h,d,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,h,d,f,p,g,m)}set(e,t,n,r,o,s,a,l,c,u,h,d,f,p,g,m){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=o,_[5]=s,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=f,_[7]=p,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),o=1/Ir.setFromMatrixColumn(e,1).length(),s=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){let d=s*u,f=s*h,p=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=p+f*c,t[10]=s*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,g=c*h;t[0]=d+g*a,t[4]=p*a-f,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-a,t[2]=f*a-p,t[6]=g+d*a,t[10]=s*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,g=c*h;t[0]=d-g*a,t[4]=-s*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=s*u,t[9]=g-d*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){let d=s*u,f=s*h,p=a*u,g=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){let d=s*l,f=s*c,p=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=p*h+f,t[1]=h,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-g*h}else if(e.order==="XZY"){let d=s*l,f=s*c,p=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=s*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gg,e,_g)}lookAt(e,t,n){let r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),yi.crossVectors(n,gn),yi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),yi.crossVectors(n,gn)),yi.normalize(),Zs.crossVectors(gn,yi),r[0]=yi.x,r[4]=Zs.x,r[8]=gn.x,r[1]=yi.y,r[5]=Zs.y,r[9]=gn.y,r[2]=yi.z,r[6]=Zs.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],g=n[6],m=n[10],_=n[14],x=n[3],w=n[7],b=n[11],y=n[15],M=r[0],E=r[4],v=r[8],S=r[12],T=r[1],A=r[5],C=r[9],P=r[13],R=r[2],I=r[6],F=r[10],z=r[14],B=r[3],N=r[7],O=r[11],G=r[15];return o[0]=s*M+a*T+l*R+c*B,o[4]=s*E+a*A+l*I+c*N,o[8]=s*v+a*C+l*F+c*O,o[12]=s*S+a*P+l*z+c*G,o[1]=u*M+h*T+d*R+f*B,o[5]=u*E+h*A+d*I+f*N,o[9]=u*v+h*C+d*F+f*O,o[13]=u*S+h*P+d*z+f*G,o[2]=p*M+g*T+m*R+_*B,o[6]=p*E+g*A+m*I+_*N,o[10]=p*v+g*C+m*F+_*O,o[14]=p*S+g*P+m*z+_*G,o[3]=x*M+w*T+b*R+y*B,o[7]=x*E+w*A+b*I+y*N,o[11]=x*v+w*C+b*F+y*O,o[15]=x*S+w*P+b*z+y*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],g=e[7],m=e[11],_=e[15],x=l*f-c*d,w=a*f-c*h,b=a*d-l*h,y=s*f-c*u,M=s*d-l*u,E=s*h-a*u;return t*(g*x-m*w+_*b)-n*(p*x-m*y+_*M)+r*(p*w-g*y+_*E)-o*(p*b-g*M+m*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[1],s=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(s*u-a*c)-n*(o*u-a*l)+r*(o*c-s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],g=e[13],m=e[14],_=e[15],x=t*a-n*s,w=t*l-r*s,b=t*c-o*s,y=n*l-r*a,M=n*c-o*a,E=r*c-o*l,v=u*g-h*p,S=u*m-d*p,T=u*_-f*p,A=h*m-d*g,C=h*_-f*g,P=d*_-f*m,R=x*P-w*C+b*A+y*T-M*S+E*v;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return e[0]=(a*P-l*C+c*A)*I,e[1]=(r*C-n*P-o*A)*I,e[2]=(g*E-m*M+_*y)*I,e[3]=(d*M-h*E-f*y)*I,e[4]=(l*T-s*P-c*S)*I,e[5]=(t*P-r*T+o*S)*I,e[6]=(m*b-p*E-_*w)*I,e[7]=(u*E-d*b+f*w)*I,e[8]=(s*C-a*T+c*v)*I,e[9]=(n*T-t*C-o*v)*I,e[10]=(p*M-g*b+_*x)*I,e[11]=(h*b-u*M-f*x)*I,e[12]=(a*S-s*A-l*v)*I,e[13]=(t*A-n*S+r*v)*I,e[14]=(g*w-p*y-m*x)*I,e[15]=(u*y-h*w+d*x)*I,this}scale(e){let t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,h=a+a,d=o*c,f=o*u,p=o*h,g=s*u,m=s*h,_=a*h,x=l*c,w=l*u,b=l*h,y=n.x,M=n.y,E=n.z;return r[0]=(1-(g+_))*y,r[1]=(f+b)*y,r[2]=(p-w)*y,r[3]=0,r[4]=(f-b)*M,r[5]=(1-(d+_))*M,r[6]=(m+x)*M,r[7]=0,r[8]=(p+w)*E,r[9]=(m-x)*E,r[10]=(1-(d+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let s=Ir.set(r[0],r[1],r[2]).length(),a=Ir.set(r[4],r[5],r[6]).length(),l=Ir.set(r[8],r[9],r[10]).length();o<0&&(s=-s),In.copy(this);let c=1/s,u=1/a,h=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,o,s,a=Dn,l=!1){let c=this.elements,u=2*o/(t-e),h=2*o/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,g;if(l)p=o/(s-o),g=s*o/(s-o);else if(a===Dn)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===zo)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=Dn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,g;if(l)p=1/(s-o),g=s/(s-o);else if(a===Dn)p=-2/(s-o),g=-(s+o)/(s-o);else if(a===zo)p=-1/(s-o),g=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};cl.prototype.isMatrix4=!0;var Et=cl,Ir=new U,In=new Et,gg=new U(0,0,0),_g=new U(1,1,1),yi=new U,Zs=new U,gn=new U,Dd=new Et,Nd=new Jn,Nn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bg=0,zd=new U,Lr=new Jn,si=new Et,$s=new U,Ao=new U,vg=new U,xg=new Jn,Bd=new U(1,0,0),Od=new U(0,1,0),Ud=new U(0,0,1),Vd={type:"added"},yg={type:"removed"},Fr={type:"childadded",child:null},jc={type:"childremoved",child:null},fn=class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Nn,n=new Jn,r=new U(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new $e}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(Bd,e)}rotateY(e){return this.rotateOnAxis(Od,e)}rotateZ(e){return this.rotateOnAxis(Ud,e)}translateOnAxis(e,t){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bd,e)}translateY(e){return this.translateOnAxis(Od,e)}translateZ(e){return this.translateOnAxis(Ud,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$s.copy(e):$s.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Ao,$s,this.up):si.lookAt($s,Ao,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(si),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vd),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yg),jc.child=e,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vd),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,vg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,xg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*r,o[13]+=n-o[1]*t-o[5]*n-o[9]*r,o[14]+=r-o[2]*t-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){let a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),f=s(e.animations),p=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function s(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};fn.DEFAULT_UP=new U(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rt=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},wg={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),_=this._getHandJoint(c,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Js={h:0,s:0,l:0};function Qc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=dg(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=Qc(s,o,e+1/3),this.g=Qc(s,o,e),this.b=Qc(s,o,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function n(o){o!==void 0&&parseFloat(o)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=$f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return at.workingToColorSpace(en.copy(this),e),Math.round(it(en.r*255,0,255))*65536+Math.round(it(en.g*255,0,255))*256+Math.round(it(en.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(en.copy(this),t);let n=en.r,r=en.g,o=en.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,u=(a+s)/2;if(a===s)l=0,c=0;else{let h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case n:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-n)/h+2;break;case o:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Dt){at.workingToColorSpace(en.copy(this),e);let t=en.r,n=en.g,r=en.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Js);let n=Yc(wi.h,Js.h,t),r=Yc(wi.s,Js.s,t),o=Yc(wi.l,Js.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Q;Q.NAMES=$f;var Oo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Q(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ei=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ln=new U,ai=new U,eu=new U,li=new U,Dr=new U,Nr=new U,Gd=new U,tu=new U,nu=new U,iu=new U,ru=new It,ou=new It,su=new It,Ai=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ln.subVectors(e,t),r.cross(Ln);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Ln.subVectors(r,t),ai.subVectors(n,t),eu.subVectors(e,t);let s=Ln.dot(Ln),a=Ln.dot(ai),l=Ln.dot(eu),c=ai.dot(ai),u=ai.dot(eu),h=s*c-a*a;if(h===0)return o.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(s*u-a*l)*d;return o.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,li.x),l.addScaledVector(s,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return ru.setScalar(0),ou.setScalar(0),su.setScalar(0),ru.fromBufferAttribute(e,t),ou.fromBufferAttribute(e,n),su.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ru,o.x),s.addScaledVector(ou,o.y),s.addScaledVector(su,o.z),s}static isFrontFacing(e,t,n,r){return Ln.subVectors(n,t),ai.subVectors(e,t),Ln.cross(ai).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Ln.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,o=this.c,s,a;Dr.subVectors(r,n),Nr.subVectors(o,n),tu.subVectors(e,n);let l=Dr.dot(tu),c=Nr.dot(tu);if(l<=0&&c<=0)return t.copy(n);nu.subVectors(e,r);let u=Dr.dot(nu),h=Nr.dot(nu);if(u>=0&&h<=u)return t.copy(r);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Dr,s);iu.subVectors(e,o);let f=Dr.dot(iu),p=Nr.dot(iu);if(p>=0&&f<=p)return t.copy(o);let g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Nr,a);let m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return Gd.subVectors(o,r),a=(h-u)/(h-u+(f-p)),t.copy(r).addScaledVector(Gd,a);let _=1/(m+g+d);return s=g*_,a=d*_,t.copy(n).addScaledVector(Dr,s).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Fn):Fn.fromBufferAttribute(o,s),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(e.matrixWorld),this.union(js)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),Qs.subVectors(this.max,Eo),zr.subVectors(e.a,Eo),Br.subVectors(e.b,Eo),Or.subVectors(e.c,Eo),Mi.subVectors(Br,zr),Si.subVectors(Or,Br),nr.subVectors(zr,Or);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-nr.z,nr.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,nr.z,0,-nr.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-nr.y,nr.x,0];return!au(t,zr,Br,Or,Qs)||(t=[1,0,0,0,1,0,0,0,1],!au(t,zr,Br,Or,Qs))?!1:(ea.crossVectors(Mi,Si),t=[ea.x,ea.y,ea.z],au(t,zr,Br,Or,Qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ci=[new U,new U,new U,new U,new U,new U,new U,new U],Fn=new U,js=new cn,zr=new U,Br=new U,Or=new U,Mi=new U,Si=new U,nr=new U,Eo=new U,Qs=new U,ea=new U,ir=new U;function au(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){ir.fromArray(i,o);let a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),u=n.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ot=new U,ta=new Ee,Mg=0,An=class extends $n{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xf,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=To(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=To(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=To(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=To(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=To(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),r=dn(r,this.array),o=dn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Uo=class extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var lr=class extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ae=class extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sg=new cn,Ro=new U,lu=new U,Ri=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sg.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);let t=Ro.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ro,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(lu)),this.expandByPoint(Ro.copy(e.center).sub(lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tg=0,Tn=new Et,cu=new fn,Ur=new U,_n=new cn,Po=new cn,Ht=new U,Xe=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ug(e)?lr:Uo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new $e().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return cu.lookAt(e),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ae(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let o=t[n];_n.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(_n.min,Po.min),_n.expandByPoint(Ht),Ht.addVectors(_n.max,Po.max),_n.expandByPoint(Ht)):(_n.expandByPoint(Po.min),_n.expandByPoint(Po.max))}_n.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)Ht.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(Ht));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(Ur.fromBufferAttribute(e,c),Ht.add(Ur)),r=Math.max(r,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,o=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new An(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new U,l[v]=new U;let c=new U,u=new U,h=new U,d=new Ee,f=new Ee,p=new Ee,g=new U,m=new U;function _(v,S,T){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,T),d.fromBufferAttribute(o,v),f.fromBufferAttribute(o,S),p.fromBufferAttribute(o,T),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let A=1/(f.x*p.y-p.x*f.y);isFinite(A)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(A),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(A),a[v].add(g),a[S].add(g),a[T].add(g),l[v].add(m),l[S].add(m),l[T].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,S=x.length;v<S;++v){let T=x[v],A=T.start,C=T.count;for(let P=A,R=A+C;P<R;P+=3)_(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let w=new U,b=new U,y=new U,M=new U;function E(v){y.fromBufferAttribute(r,v),M.copy(y);let S=a[v];w.copy(S),w.sub(y.multiplyScalar(y.dot(S))).normalize(),b.crossVectors(M,S);let A=b.dot(l[v])<0?-1:1;s.setXYZW(v,w.x,w.y,w.z,A)}for(let v=0,S=x.length;v<S;++v){let T=x[v],A=T.start,C=T.count;for(let P=A,R=A+C;P<R;P+=3)E(e.getX(P+0)),E(e.getX(P+1)),E(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let r=new U,o=new U,s=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let _=0;_<u;_++)d[p++]=c[f++]}return new An(d,u,h)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let o=e.morphAttributes;for(let c in o){let u=[],h=o[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,u=s.length;c<u;c++){let h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var uu=new U,Ag=new U,Eg=new $e,bn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=uu.subVectors(n,t).cross(Ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(uu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Eg.getNormalMatrix(e),r=this.coplanarPoint(uu).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Rg=0,di=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=Di,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cu,this.blendDst=Iu,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Q(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Q().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ui=new U,hu=new U,na=new U,ia=new U,cr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){hu.copy(e).add(t).multiplyScalar(.5),na.copy(t).sub(e).normalize(),ia.copy(this.origin).sub(hu);let o=e.distanceTo(t)*.5,s=-this.direction.dot(na),a=ia.dot(this.direction),l=-ia.dot(na),c=ia.lengthSq(),u=Math.abs(1-s*s),h,d,f,p;if(u>0)if(h=s*l-a,d=s*a-l,p=o*u,h>=0)if(d>=-p)if(d<=p){let g=1/u;h*=g,d*=g,f=h*(h+s*d+2*a)+d*(s*h+d+2*l)+c}else d=o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;else d=-o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),f=-h*h+d*(d+2*l)+c);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(hu).addScaledVector(na,d),f}intersectSphere(e,t){if(e.radius<0)return null;ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),r=ui.dot(ui)-n*n,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-s.x,d=e.y-s.y,f=e.z-s.z,p=t.x-s.x,g=t.y-s.y,m=t.z-s.z,_=n.x-s.x,x=n.y-s.y,w=n.z-s.z,b=Math.abs(l),y=Math.abs(c),M=Math.abs(u),E,v,S,T,A,C,P,R,I,F,z,B;if(b>=y&&b>=M?(S=l,C=h,I=p,B=_,l>=0?(E=c,v=u,T=d,A=f,P=g,R=m,F=x,z=w):(E=u,v=c,T=f,A=d,P=m,R=g,F=w,z=x)):y>=M?(S=c,C=d,I=g,B=x,c>=0?(E=u,v=l,T=f,A=h,P=m,R=p,F=w,z=_):(E=l,v=u,T=h,A=f,P=p,R=m,F=_,z=w)):(S=u,C=f,I=m,B=w,u>=0?(E=l,v=c,T=h,A=d,P=p,R=g,F=_,z=x):(E=c,v=l,T=d,A=h,P=g,R=p,F=x,z=_)),S===0)return null;let N=E/S,O=v/S,G=1/S,J=T-N*C,j=A-O*C,ue=P-N*I,ne=R-O*I,de=F-N*B,H=z-O*B,X=de*ne-H*ue,oe=J*H-j*de,ce=ue*j-ne*J;if(r){if(X<0||oe<0||ce<0)return null}else if((X<0||oe<0||ce<0)&&(X>0||oe>0||ce>0))return null;let le=X+oe+ce;if(le===0)return null;let pe=G*(X*C+oe*I+ce*B);return(le>0?pe<0:pe>0)?null:this.at(pe/le,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hd=new Et,rr=new cr,ra=new Ri,Wd=new U,oa=new U,sa=new U,aa=new U,du=new U,la=new U,Xd=new U,ca=new U,Oe=class extends fn{constructor(e=new Xe,t=new nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){la.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let u=a[l],h=o[l];u!==0&&(du.fromBufferAttribute(h,e),s?la.addScaledVector(du,u):la.addScaledVector(du.sub(t),u))}t.add(la)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(o),rr.copy(e.ray).recast(e.near),!(ra.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ra,Wd)===null||rr.origin.distanceToSquared(Wd)>(e.far-e.near)**2))&&(Hd.copy(o).invert(),rr.copy(e.ray).applyMatrix4(Hd),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,g=d.length;p<g;p++){let m=d[p],_=s[m.materialIndex],x=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,y=w;b<y;b+=3){let M=a.getX(b),E=a.getX(b+1),v=a.getX(b+2);r=ua(this,_,e,n,c,u,h,M,E,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,_=g;m<_;m+=3){let x=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);r=ua(this,s,e,n,c,u,h,x,w,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,g=d.length;p<g;p++){let m=d[p],_=s[m.materialIndex],x=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,y=w;b<y;b+=3){let M=b,E=b+1,v=b+2;r=ua(this,_,e,n,c,u,h,M,E,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,_=g;m<_;m+=3){let x=m,w=m+1,b=m+2;r=ua(this,s,e,n,c,u,h,x,w,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Pg(i,e,t,n,r,o,s,a){let l;if(e.side===un?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Fi,a),l===null)return null;ca.copy(a),ca.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ca);return c<t.near||c>t.far?null:{distance:c,point:ca.clone(),object:i}}function ua(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,oa),i.getVertexPosition(l,sa),i.getVertexPosition(c,aa);let u=Pg(i,e,t,n,oa,sa,aa,Xd);if(u){let h=new U;Ai.getBarycoord(Xd,oa,sa,aa,h),r&&(u.uv=Ai.getInterpolatedAttribute(r,a,l,c,h,new Ee)),o&&(u.uv1=Ai.getInterpolatedAttribute(o,a,l,c,h,new Ee)),s&&(u.normal=Ai.getInterpolatedAttribute(s,a,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new U,materialIndex:0};Ai.getNormal(oa,sa,aa,d.normal),u.face=d,u.barycoord=h}return u}var Na=class extends nn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=Wt,u=Wt,h,d){super(null,s,a,l,c,u,r,o,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var or=new Ri,kg=new Ee(.5,.5),ha=new U,Vo=class{constructor(e=new bn,t=new bn,n=new bn,r=new bn,o=new bn,s=new bn){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn,n=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],c=o[3],u=o[4],h=o[5],d=o[6],f=o[7],p=o[8],g=o[9],m=o[10],_=o[11],x=o[12],w=o[13],b=o[14],y=o[15];if(r[0].setComponents(c-s,f-u,_-p,y-x).normalize(),r[1].setComponents(c+s,f+u,_+p,y+x).normalize(),r[2].setComponents(c+a,f+h,_+g,y+w).normalize(),r[3].setComponents(c-a,f-h,_-g,y-w).normalize(),n)r[4].setComponents(l,d,m,b).normalize(),r[5].setComponents(c-l,f-d,_-m,y-b).normalize();else if(r[4].setComponents(c-l,f-d,_-m,y-b).normalize(),t===Dn)r[5].setComponents(c+l,f+d,_+m,y+b).normalize();else if(t===zo)r[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);let t=kg.distanceTo(e.center);return or.radius=.7071067811865476+t,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ha.x=r.normal.x>0?e.max.x:e.min.x,ha.y=r.normal.y>0?e.max.y:e.min.y,ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qt=class extends di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Q(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},za=new U,Ba=new U,Kd=new Et,ko=new cr,da=new Ri,fu=new U,Yd=new U,Oa=class extends fn{constructor(e=new Xe,t=new qt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)za.fromBufferAttribute(t,r-1),Ba.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=za.distanceTo(Ba);e.setAttribute("lineDistance",new Ae(n,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),da.radius+=o,e.ray.intersectsSphere(da)===!1)return;Kd.copy(r).invert(),ko.copy(e.ray).applyMatrix4(Kd);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let g=f,m=p-1;g<m;g+=c){let _=u.getX(g),x=u.getX(g+1),w=fa(this,e,ko,l,_,x,g);w&&t.push(w)}if(this.isLineLoop){let g=u.getX(p-1),m=u.getX(f),_=fa(this,e,ko,l,g,m,p-1);_&&t.push(_)}}else{let f=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let g=f,m=p-1;g<m;g+=c){let _=fa(this,e,ko,l,g,g+1,g);_&&t.push(_)}if(this.isLineLoop){let g=fa(this,e,ko,l,p-1,f,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function fa(i,e,t,n,r,o,s){let a=i.geometry.attributes.position;if(za.fromBufferAttribute(a,r),Ba.fromBufferAttribute(a,o),t.distanceSqToSegment(za,Ba,fu,Yd)>n)return;fu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(fu);if(!(c<e.near||c>e.far))return{distance:c,point:Yd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var qd=new U,Zd=new U,Zt=class extends Oa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)qd.fromBufferAttribute(t,r),Zd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qd.distanceTo(Zd);e.setAttribute("lineDistance",new Ae(n,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ur=class extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$d=new Et,wu=new cr,pa=new Ri,ma=new U,jr=class extends fn{constructor(e=new Xe,t=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),pa.radius+=o,e.ray.intersectsSphere(pa)===!1)return;$d.copy(r).invert(),wu.copy(e.ray).applyMatrix4($d);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let p=d,g=f;p<g;p++){let m=c.getX(p);ma.fromBufferAttribute(h,m),Jd(ma,m,l,r,e,t,this)}}else{let d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let p=d,g=f;p<g;p++)ma.fromBufferAttribute(h,p),Jd(ma,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Jd(i,e,t,n,r,o,s){let a=wu.distanceSqToPoint(i);if(a<t){let l=new U;wu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Go=class extends nn{constructor(e=[],t=Ni,n,r,o,s,a,l,c,u){super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zn=class extends nn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pi=class extends nn{constructor(e,t,n=Un,r,o,s,a=Wt,l=Wt,c,u=Zn,h=1){if(u!==Zn&&u!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ua=class extends Pi{constructor(e,t=Un,n=Ni,r,o,s=Wt,a=Wt,l,c=Zn){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,o,s,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ho=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ki=class i extends Xe{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,s,o,0),p("z","y","x",1,-1,n,t,-e,s,o,1),p("x","z","y",1,1,e,n,t,r,s,2),p("x","z","y",1,-1,e,n,-t,r,s,3),p("x","y","z",1,-1,e,t,n,r,o,4),p("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(h,2));function p(g,m,_,x,w,b,y,M,E,v,S){let T=b/E,A=y/v,C=b/2,P=y/2,R=M/2,I=E+1,F=v+1,z=0,B=0,N=new U;for(let O=0;O<F;O++){let G=O*A-P;for(let J=0;J<I;J++){let j=J*T-C;N[g]=j*x,N[m]=G*w,N[_]=R,c.push(N.x,N.y,N.z),N[g]=0,N[m]=0,N[_]=M>0?1:-1,u.push(N.x,N.y,N.z),h.push(J/E),h.push(1-O/v),z+=1}}for(let O=0;O<v;O++)for(let G=0;G<E;G++){let J=d+G+I*O,j=d+G+I*(O+1),ue=d+(G+1)+I*(O+1),ne=d+(G+1)+I*O;l.push(J,j,ne),l.push(j,ue,ne),B+=6}a.addGroup(f,B,S),f+=B,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Wo=class i extends Xe{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let o=[],s=[],a=[],l=[],c=new U,u=new Ee;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),s.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(s[d]/e+1)/2,u.y=(s[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(a,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),o=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,o=n.length,s;t?s=t:s=e*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-s,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===s)return r/(o-1);let u=n[r],d=n[r+1]-u,f=(s-u)/d;return(r+f)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);let s=this.getPoint(r),a=this.getPoint(o),l=t||(s.isVector2?new Ee:new U);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,r=[],o=[],s=[],a=new U,l=new Et;for(let f=0;f<=e;f++){let p=f/e;r[f]=this.getTangentAt(p,new U)}o[0]=new U,s[0]=new U;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),s[f]=s[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(it(r[f-1].dot(r[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,p))}s[f].crossVectors(r[f],o[f])}if(t===!0){let f=Math.acos(it(o[0].dot(o[e]),-1,1));f/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(f=-f);for(let p=1;p<=e;p++)o[p].applyMatrix4(l.makeRotationAxis(r[p],f*p)),s[p].crossVectors(r[p],o[p])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xo=class extends En{constructor(e=0,t=0,n=1,r=1,o=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ee){let n=t,r=Math.PI*2,o=this.aEndAngle-this.aStartAngle,s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);let a=this.aStartAngle+e*o,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Va=class extends Xo{constructor(e,t,n,r,o,s){super(e,t,n,n,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Qu(){let i=0,e=0,t=0,n=0;function r(o,s,a,l){i=o,e=a,t=-3*o+3*s-2*a-l,n=2*o-2*s+a+l}return{initCatmullRom:function(o,s,a,l,c){r(s,a,c*(a-o),c*(l-s))},initNonuniformCatmullRom:function(o,s,a,l,c,u,h){let d=(s-o)/c-(a-o)/(c+u)+(a-s)/u,f=(a-s)/u-(l-s)/(u+h)+(l-a)/h;d*=u,f*=u,r(s,a,d,f)},calc:function(o){let s=o*o,a=s*o;return i+e*o+t*s+n*a}}}var jd=new U,Qd=new U,pu=new Qu,mu=new Qu,gu=new Qu,Qr=class extends En{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){let n=t,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e,a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%o]:(Qd.subVectors(r[0],r[1]).add(r[0]),c=Qd);let h=r[a%o],d=r[(a+1)%o];if(this.closed||a+2<o?u=r[(a+2)%o]:(jd.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=jd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),pu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,g,m),mu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,g,m),gu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,g,m)}else this.curveType==="catmullrom"&&(pu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),mu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),gu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(pu.calc(l),mu.calc(l),gu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ef(i,e,t,n,r){let o=(n-e)*.5,s=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+o+s)*l+(-3*t+3*n-2*o-s)*a+o*i+t}function Cg(i,e){let t=1-i;return t*t*e}function Ig(i,e){return 2*(1-i)*i*e}function Lg(i,e){return i*i*e}function Io(i,e,t,n){return Cg(i,e)+Ig(i,t)+Lg(i,n)}function Fg(i,e){let t=1-i;return t*t*t*e}function Dg(i,e){let t=1-i;return 3*t*t*i*e}function Ng(i,e){return 3*(1-i)*i*i*e}function zg(i,e){return i*i*i*e}function Lo(i,e,t,n,r){return Fg(i,e)+Dg(i,t)+Ng(i,n)+zg(i,r)}var Ga=class extends En{constructor(e=new Ee,t=new Ee,n=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ee){let n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(Lo(e,r.x,o.x,s.x,a.x),Lo(e,r.y,o.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ha=class extends En{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(Lo(e,r.x,o.x,s.x,a.x),Lo(e,r.y,o.y,s.y,a.y),Lo(e,r.z,o.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wa=class extends En{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends En{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends En{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(Io(e,r.x,o.x,s.x),Io(e,r.y,o.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends En{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(Io(e,r.x,o.x,s.x),Io(e,r.y,o.y,s.y),Io(e,r.z,o.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,l=r[s===0?s:s-1],c=r[s],u=r[s>r.length-2?r.length-1:s+1],h=r[s>r.length-3?r.length-1:s+2];return n.set(ef(a,l.x,c.x,u.x,h.x),ef(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new Ee().fromArray(r))}return this}},Bg=Object.freeze({__proto__:null,ArcCurve:Va,CatmullRomCurve3:Qr,CubicBezierCurve:Ga,CubicBezierCurve3:Ha,EllipseCurve:Xo,LineCurve:Wa,LineCurve3:Xa,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:Ko,SplineCurve:Ya});function Og(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,o=Jf(i,0,r,t,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=Wg(i,e,o,t)),i.length>80*t){a=i[0],l=i[1];let u=a,h=l;for(let d=t;d<r;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Yo(o,s,t,a,l,c,0),s}function Jf(i,e,t,n,r){let o;if(r===t_(i,e,t,n)>0)for(let s=e;s<t;s+=n)o=tf(s/n|0,i[s],i[s+1],o);else for(let s=t-n;s>=e;s-=n)o=tf(s/n|0,i[s],i[s+1],o);return o&&eo(o,o.next)&&(Zo(o),o=o.next),o}function hr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(eo(t,t.next)||Ct(t.prev,t,t.next)===0)){if(Zo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yo(i,e,t,n,r,o,s){if(!i)return;!s&&o&&Zg(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?Vg(i,n,r,o):Ug(i)){e.push(l.i,i.i,c.i),Zo(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=Gg(hr(i),e),Yo(i,e,t,n,r,o,2)):s===2&&Hg(i,e,t,n,r,o):Yo(hr(i),e,t,n,r,o,1);break}}}function Ug(i){let e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;let r=e.x,o=t.x,s=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,o,s),h=Math.min(a,l,c),d=Math.max(r,o,s),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Co(r,a,o,l,s,c,p.x,p.y)&&Ct(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Vg(i,e,t,n){let r=i.prev,o=i,s=i.next;if(Ct(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,u=r.y,h=o.y,d=s.y,f=Math.min(a,l,c),p=Math.min(u,h,d),g=Math.max(a,l,c),m=Math.max(u,h,d),_=Mu(f,p,e,t,n),x=Mu(g,m,e,t,n),w=i.prevZ,b=i.nextZ;for(;w&&w.z>=_&&b&&b.z<=x;){if(w.x>=f&&w.x<=g&&w.y>=p&&w.y<=m&&w!==r&&w!==s&&Co(a,u,l,h,c,d,w.x,w.y)&&Ct(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=f&&b.x<=g&&b.y>=p&&b.y<=m&&b!==r&&b!==s&&Co(a,u,l,h,c,d,b.x,b.y)&&Ct(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=_;){if(w.x>=f&&w.x<=g&&w.y>=p&&w.y<=m&&w!==r&&w!==s&&Co(a,u,l,h,c,d,w.x,w.y)&&Ct(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=x;){if(b.x>=f&&b.x<=g&&b.y>=p&&b.y<=m&&b!==r&&b!==s&&Co(a,u,l,h,c,d,b.x,b.y)&&Ct(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Gg(i,e){let t=i;do{let n=t.prev,r=t.next.next;!eo(n,r)&&Qf(n,t,t.next,r)&&qo(n,r)&&qo(r,n)&&(e.push(n.i,t.i,r.i),Zo(t),Zo(t.next),t=i=r),t=t.next}while(t!==i);return hr(t)}function Hg(i,e,t,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&jg(s,a)){let l=ep(s,a);s=hr(s,s.next),l=hr(l,l.next),Yo(s,e,t,n,r,o,0),Yo(l,e,t,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function Wg(i,e,t,n){let r=[];for(let o=0,s=e.length;o<s;o++){let a=e[o]*n,l=o<s-1?e[o+1]*n:i.length,c=Jf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Jg(c))}r.sort(Xg);for(let o=0;o<r.length;o++)t=Kg(r[o],t);return t}function Xg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Kg(i,e){let t=Yg(i,e);if(!t)return e;let n=ep(t,i);return hr(n,n.next),hr(t,t.next)}function Yg(i,e){let t=e,n=i.x,r=i.y,o=-1/0,s;if(eo(i,t))return t;do{if(eo(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>o&&(o=h,s=t.x<t.next.x?t:t.next,h===n))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0;t=s;do{if(n>=t.x&&t.x>=l&&n!==t.x&&jf(r<c?n:o,r,l,c,r<c?o:n,r,t.x,t.y)){let h=Math.abs(r-t.y)/(n-t.x);qo(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&qg(s,t)))&&(s=t,u=h)}t=t.next}while(t!==a);return s}function qg(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function Zg(i,e,t,n){let r=i;do r.z===0&&(r.z=Mu(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,$g(r)}function $g(i){let e,t=1;do{let n=i,r;i=null;let o=null;for(e=0;n;){e++;let s=n,a=0;for(let c=0;c<t&&(a++,s=s.nextZ,!!s);c++);let l=t;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,t*=2}while(e>1);return i}function Mu(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Jg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function jf(i,e,t,n,r,o,s,a){return(r-s)*(e-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(r-s)*(n-a)}function Co(i,e,t,n,r,o,s,a){return!(i===s&&e===a)&&jf(i,e,t,n,r,o,s,a)}function jg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Qg(i,e)&&(qo(i,e)&&qo(e,i)&&e_(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||eo(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function eo(i,e){return i.x===e.x&&i.y===e.y}function Qf(i,e,t,n){let r=_a(Ct(i,e,t)),o=_a(Ct(i,e,n)),s=_a(Ct(t,n,i)),a=_a(Ct(t,n,e));return!!(r!==o&&s!==a||r===0&&ga(i,t,e)||o===0&&ga(i,n,e)||s===0&&ga(t,i,n)||a===0&&ga(t,e,n))}function ga(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _a(i){return i>0?1:i<0?-1:0}function Qg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Qf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function qo(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function e_(i,e){let t=i,n=!1,r=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ep(i,e){let t=Su(i.i,i.x,i.y),n=Su(e.i,e.x,e.y),r=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function tf(i,e,t,n){let r=Su(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Zo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Su(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function t_(i,e,t,n){let r=0;for(let o=e,s=t-n;o<t;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var Tu=class{static triangulate(e,t,n=2){return Og(e,t,n)}},$o=class i{static area(e){let t=e.length,n=0;for(let r=t-1,o=0;o<t;r=o++)n+=e[r].x*e[o].y-e[o].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],o=[];nf(e),rf(n,e);let s=e.length;t.forEach(nf);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,rf(n,t[l]);let a=Tu.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function nf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function rf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Jo=class i extends Xe{constructor(e=[new Ee(0,-.5),new Ee(.5,0),new Ee(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=it(r,0,Math.PI*2);let o=[],s=[],a=[],l=[],c=[],u=1/t,h=new U,d=new Ee,f=new U,p=new U,g=new U,m=0,_=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,_=e[x+1].y-e[x].y,f.x=_*1,f.y=-m,f.z=_*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[x+1].x-e[x].x,_=e[x+1].y-e[x].y,f.x=_*1,f.y=-m,f.z=_*0,p.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(p)}for(let x=0;x<=t;x++){let w=n+x*u*r,b=Math.sin(w),y=Math.cos(w);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*b,h.y=e[M].y,h.z=e[M].x*y,s.push(h.x,h.y,h.z),d.x=x/t,d.y=M/(e.length-1),a.push(d.x,d.y);let E=l[3*M+0]*b,v=l[3*M+1],S=l[3*M+0]*y;c.push(E,v,S)}}for(let x=0;x<t;x++)for(let w=0;w<e.length-1;w++){let b=w+x*e.length,y=b,M=b+e.length,E=b+e.length+1,v=b+1;o.push(y,M,v),o.push(E,v,M)}this.setIndex(o),this.setAttribute("position",new Ae(s,3)),this.setAttribute("uv",new Ae(a,2)),this.setAttribute("normal",new Ae(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Bn=class i extends Xe{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],g=[],m=[];for(let _=0;_<u;_++){let x=_*d-s;for(let w=0;w<c;w++){let b=w*h-o;p.push(b,-x,0),g.push(0,0,1),m.push(w/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<a;x++){let w=x+c*_,b=x+c*(_+1),y=x+1+c*(_+1),M=x+1+c*_;f.push(w,b,M),f.push(b,y,M)}this.setIndex(f),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(g,3)),this.setAttribute("uv",new Ae(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},jo=class i extends Xe{constructor(e=.5,t=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/r,f=new U,p=new Ee;for(let g=0;g<=r;g++){for(let m=0;m<=n;m++){let _=o+m/n*s;f.x=h*Math.cos(_),f.y=h*Math.sin(_),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let g=0;g<r;g++){let m=g*(n+1);for(let _=0;_<n;_++){let x=_+m,w=x,b=x+n+1,y=x+n+2,M=x+1;a.push(w,b,M),a.push(b,y,M)}}this.setIndex(a),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Qo=class i extends Xe{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(s+a,Math.PI),c=0,u=[],h=new U,d=new U,f=[],p=[],g=[],m=[];for(let _=0;_<=n;_++){let x=[],w=_/n,b=s+w*a,y=e*Math.cos(b),M=Math.sqrt(e*e-y*y),E=0;_===0&&s===0?E=.5/t:_===n&&l===Math.PI&&(E=-.5/t);for(let v=0;v<=t;v++){let S=v/t,T=r+S*o;h.x=-M*Math.cos(T),h.y=y,h.z=M*Math.sin(T),p.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(S+E,1-w),x.push(c++)}u.push(x)}for(let _=0;_<n;_++)for(let x=0;x<t;x++){let w=u[_][x+1],b=u[_][x],y=u[_+1][x],M=u[_+1][x+1];(_!==0||s>0)&&f.push(w,b,M),(_!==n-1||l<Math.PI)&&f.push(b,y,M)}this.setIndex(f),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(g,3)),this.setAttribute("uv",new Ae(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var es=class i extends Xe{constructor(e=1,t=.4,n=12,r=48,o=Math.PI*2,s=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:o,thetaStart:s,thetaLength:a},n=Math.floor(n),r=Math.floor(r);let l=[],c=[],u=[],h=[],d=new U,f=new U,p=new U;for(let g=0;g<=n;g++){let m=s+g/n*a;for(let _=0;_<=r;_++){let x=_/r*o;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(_/r),h.push(g/n)}}for(let g=1;g<=n;g++)for(let m=1;m<=r;m++){let _=(r+1)*g+m-1,x=(r+1)*(g-1)+m-1,w=(r+1)*(g-1)+m,b=(r+1)*g+m;l.push(_,x,b),l.push(x,w,b)}this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var to=class i extends Xe{constructor(e=new Ko(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:o};let s=e.computeFrenetFrames(t,o);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let a=new U,l=new U,c=new Ee,u=new U,h=[],d=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Ae(h,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(f,2));function g(){for(let w=0;w<t;w++)m(w);m(o===!1?t:0),x(),_()}function m(w){u=e.getPointAt(w/t,u);let b=s.normals[w],y=s.binormals[w];for(let M=0;M<=r;M++){let E=M/r*Math.PI*2,v=Math.sin(E),S=-Math.cos(E);l.x=S*b.x+v*y.x,l.y=S*b.y+v*y.y,l.z=S*b.z+v*y.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function _(){for(let w=1;w<=t;w++)for(let b=1;b<=r;b++){let y=(r+1)*(w-1)+(b-1),M=(r+1)*w+(b-1),E=(r+1)*w+b,v=(r+1)*(w-1)+b;p.push(y,M,v),p.push(M,E,v)}}function x(){for(let w=0;w<=t;w++)for(let b=0;b<=r;b++)c.x=w/t,c.y=b/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Bg[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function pr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(of(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(of(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();e[t][n]=o}else e[t][n]=r.slice();else e[t][n]=r}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=pr(i[t]);for(let r in n)e[r]=n[r]}return e}function of(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function n_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function eh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var tp={clone:pr,merge:sn},i_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i_,this.fragmentShader=r_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=n_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Q().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(r.value);break;case"v3":this.uniforms[n].value=new U().fromArray(r.value);break;case"v4":this.uniforms[n].value=new It().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Et().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},qa=class extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Za=class extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$a=class extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Vr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _u(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ci=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],o=t[n-1];n:{e:{let s;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=t[++n],e<r)break e}s=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=t[--n-1],e>=o)break e}s=n,n=0;break t}break n}for(;n<s;){let a=n+s>>>1;e<t[a]?s=a:n=a+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=n[o+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ja=class extends Ci{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vu,endingEnd:vu}}intervalChanged_(e,t,n){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case xu:o=e,a=2*t-n;break;case yu:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xu:s=e,l=2*n-t;break;case yu:s=1,l=n+r[1]-r[0];break;default:s=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),g=p*p,m=g*p,_=-d*m+2*d*g-d*p,x=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*p+1,w=(-1-f)*m+(1.5+f)*g+.5*p,b=f*m-f*g;for(let y=0;y!==a;++y)o[y]=_*s[u+y]+x*s[c+y]+w*s[l+y]+b*s[h+y];return o}},ja=class extends Ci{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)o[d]=s[c+d]*h+s[l+d]*u;return o}},Qa=class extends Ci{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},el=class extends Ci{interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(r-t),g=1-p;for(let m=0;m!==a;++m)o[m]=s[c+m]*g+s[l+m]*p;return o}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let g=s[c+p],m=s[l+p],_=f*d+p*2,x=h[_],w=h[_+1],b=e*d+p*2,y=u[b],M=u[b+1],E=s_(n,t,x,y,r);o[p]=np(E,g,w,M,m)}return o}};function np(i,e,t,n,r){let o=1-i;return o*o*o*e+3*o*o*i*t+3*o*i*i*n+i*i*i*r}function o_(i,e,t,n,r){let o=1-i;return 3*o*o*(t-e)+6*o*i*(n-t)+3*i*i*(r-n)}function s_(i,e,t,n,r){let o=(i-e)/(r-e);for(let s=0;s<8;s++){let a=np(o,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let l=o_(o,e,t,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var xn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vr(t,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vr(e.times,Array),values:Vr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),_u(e.settings)&&(n.settings={inTangents:Vr(e.settings.inTangents,Array),outTangents:Vr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new el(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fo:t=this.InterpolantFactoryMethodDiscrete;break;case Ca:t=this.InterpolantFactoryMethodLinear;break;case xa:t=this.InterpolantFactoryMethodSmooth;break;case bu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fo;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return xa;case this.InterpolantFactoryMethodBezier:return bu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;_u(this.settings)&&(sf(this.settings.inTangents,e),sf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<e;)++o;for(;s!==-1&&n[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,o=n.length;o===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){Ye("KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(r!==void 0&&hg(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===xa,o=e.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let g=t[h+p];if(g!==t[d+p]||g!==t[f+p]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];let h=a*n,d=s*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++s}}if(o>0){e[s]=e[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,_u(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function sf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Ca;var Ii=class extends xn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Fo;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends xn{constructor(e,t,n,r){super(e,t,n,r)}};tl.prototype.ValueTypeName="color";var nl=class extends xn{constructor(e,t,n,r){super(e,t,n,r)}};nl.prototype.ValueTypeName="number";var il=class extends Ci{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Jn.slerpFlat(o,0,s,c-a,s,c,l);return o}},ts=class extends xn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends xn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Fo;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends xn{constructor(e,t,n,r){super(e,t,n,r)}};rl.prototype.ValueTypeName="vector";var wa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(af(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!af(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function af(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ol=class{constructor(e,t,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ip=new ol,no=class{constructor(e){this.manager=e!==void 0?e:ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};no.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gr=new WeakMap,sl=class extends no{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,s=wa.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let h=Gr.get(s);h===void 0&&(h=[],Gr.set(s,h)),h.push({onLoad:t,onError:r})}return s}let a=Yr("img");function l(){u(),t&&t(this);let h=Gr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Gr.delete(this),o.manager.itemEnd(e)}function c(h){u(),r&&r(h),wa.remove(`image:${e}`);let d=Gr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}Gr.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),wa.add(`image:${e}`,a),o.manager.itemStart(e),a.src=e,a}};var ns=class extends no{constructor(e){super(e)}load(e,t,n,r){let o=new nn,s=new sl(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}};var ba=new U,va=new Jn,qn=new U,is=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ba,va,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,va,qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ba,va,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,va,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ti=new U,lf=new Ee,cf=new Ee,tn=class extends is{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(Kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,lf,cf),t.subVectors(cf,lf)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Kc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var jn=class extends is{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Hr=-90,Wr=1,al=class extends fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new tn(Hr,Wr,e,t);r.layers=this.layers,this.add(r);let o=new tn(Hr,Wr,e,t);o.layers=this.layers,this.add(o);let s=new tn(Hr,Wr,e,t);s.layers=this.layers,this.add(s);let a=new tn(Hr,Wr,e,t);a.layers=this.layers,this.add(a);let l=new tn(Hr,Wr,e,t);l.layers=this.layers,this.add(l);let c=new tn(Hr,Wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(let c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ll=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var th="\\[\\]\\.:\\/",a_=new RegExp("["+th+"]","g"),nh="[^"+th+"]",l_="[^"+th.replace("\\.","")+"]",c_=/((?:WC+[\/:])*)/.source.replace("WC",nh),u_=/(WCOD+)?/.source.replace("WCOD",l_),h_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),d_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),f_=new RegExp("^"+c_+u_+h_+d_+"$"),p_=["material","materials","bones","map"],Au=class{constructor(e,t,n){let r=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(a_,"")}static parseTrackName(e){let t=f_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);p_.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,o=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[r];if(s===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Au;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oS=new Float32Array(1);var uf=new Et,rs=class{constructor(e,t,n=0,r=1/0){this.ray=new cr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new $r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uf),this}intersectObject(e,t=!0,n=[]){return Eu(e,this,n,t),n.sort(hf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)Eu(e[r],this,n,t);return n.sort(hf),n}};function hf(i,e){return i.distance-e.distance}function Eu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)Eu(o[s],e,t,!0)}}var lh=class lh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let o=this.elements;return o[0]=e,o[2]=t,o[1]=n,o[3]=r,this}};lh.prototype.isMatrix2=!0;var Ru=lh;function ih(i,e,t,n){let r=m_(n);switch(t){case Ku:return i*e;case qu:return i*e/r.components*r.byteLength;case gl:return i*e/r.components*r.byteLength;case Oi:return i*e*2/r.components*r.byteLength;case _l:return i*e*2/r.components*r.byteLength;case Yu:return i*e*3/r.components*r.byteLength;case Rn:return i*e*4/r.components*r.byteLength;case bl:return i*e*4/r.components*r.byteLength;case cs:case us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hs:case ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xl:case wl:return Math.max(i,16)*Math.max(e,8)/4;case vl:case yl:return Math.max(i,8)*Math.max(e,8)/2;case Ml:case Sl:case Al:case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tl:case fs:case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Hl:case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Kl:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ps:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m_(i){switch(i){case yn:case Gu:return{byteLength:1,components:1};case ro:case Hu:case Gn:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case Un:case fl:case Vn:return{byteLength:4,components:1};case Wu:case Xu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Tp(){let i=null,e=!1,t=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),t(o,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function __(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],g=h[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let g=h[f];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var b_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,E_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,C_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,B_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,O_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,U_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,V_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,H_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ib=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ob=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ub=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,db=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_b=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Db=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ov=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,av=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Av=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ev=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ov=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:b_,alphahash_pars_fragment:v_,alphamap_fragment:x_,alphamap_pars_fragment:y_,alphatest_fragment:w_,alphatest_pars_fragment:M_,aomap_fragment:S_,aomap_pars_fragment:T_,batching_pars_vertex:A_,batching_vertex:E_,begin_vertex:R_,beginnormal_vertex:P_,bsdfs:k_,iridescence_fragment:C_,bumpmap_pars_fragment:I_,clipping_planes_fragment:L_,clipping_planes_pars_fragment:F_,clipping_planes_pars_vertex:D_,clipping_planes_vertex:N_,color_fragment:z_,color_pars_fragment:B_,color_pars_vertex:O_,color_vertex:U_,common:V_,cube_uv_reflection_fragment:G_,defaultnormal_vertex:H_,displacementmap_pars_vertex:W_,displacementmap_vertex:X_,emissivemap_fragment:K_,emissivemap_pars_fragment:Y_,colorspace_fragment:q_,colorspace_pars_fragment:Z_,envmap_fragment:$_,envmap_common_pars_fragment:J_,envmap_pars_fragment:j_,envmap_pars_vertex:Q_,envmap_physical_pars_fragment:ub,envmap_vertex:eb,fog_vertex:tb,fog_pars_vertex:nb,fog_fragment:ib,fog_pars_fragment:rb,gradientmap_pars_fragment:ob,lightmap_pars_fragment:sb,lights_lambert_fragment:ab,lights_lambert_pars_fragment:lb,lights_pars_begin:cb,lights_toon_fragment:hb,lights_toon_pars_fragment:db,lights_phong_fragment:fb,lights_phong_pars_fragment:pb,lights_physical_fragment:mb,lights_physical_pars_fragment:gb,lights_fragment_begin:_b,lights_fragment_maps:bb,lights_fragment_end:vb,lightprobes_pars_fragment:xb,logdepthbuf_fragment:yb,logdepthbuf_pars_fragment:wb,logdepthbuf_pars_vertex:Mb,logdepthbuf_vertex:Sb,map_fragment:Tb,map_pars_fragment:Ab,map_particle_fragment:Eb,map_particle_pars_fragment:Rb,metalnessmap_fragment:Pb,metalnessmap_pars_fragment:kb,morphinstance_vertex:Cb,morphcolor_vertex:Ib,morphnormal_vertex:Lb,morphtarget_pars_vertex:Fb,morphtarget_vertex:Db,normal_fragment_begin:Nb,normal_fragment_maps:zb,normal_pars_fragment:Bb,normal_pars_vertex:Ob,normal_vertex:Ub,normalmap_pars_fragment:Vb,clearcoat_normal_fragment_begin:Gb,clearcoat_normal_fragment_maps:Hb,clearcoat_pars_fragment:Wb,iridescence_pars_fragment:Xb,opaque_fragment:Kb,packing:Yb,premultiplied_alpha_fragment:qb,project_vertex:Zb,dithering_fragment:$b,dithering_pars_fragment:Jb,roughnessmap_fragment:jb,roughnessmap_pars_fragment:Qb,shadowmap_pars_fragment:ev,shadowmap_pars_vertex:tv,shadowmap_vertex:nv,shadowmask_pars_fragment:iv,skinbase_vertex:rv,skinning_pars_vertex:ov,skinning_vertex:sv,skinnormal_vertex:av,specularmap_fragment:lv,specularmap_pars_fragment:cv,tonemapping_fragment:uv,tonemapping_pars_fragment:hv,transmission_fragment:dv,transmission_pars_fragment:fv,uv_pars_fragment:pv,uv_pars_vertex:mv,uv_vertex:gv,worldpos_vertex:_v,background_vert:bv,background_frag:vv,backgroundCube_vert:xv,backgroundCube_frag:yv,cube_vert:wv,cube_frag:Mv,depth_vert:Sv,depth_frag:Tv,distance_vert:Av,distance_frag:Ev,equirect_vert:Rv,equirect_frag:Pv,linedashed_vert:kv,linedashed_frag:Cv,meshbasic_vert:Iv,meshbasic_frag:Lv,meshlambert_vert:Fv,meshlambert_frag:Dv,meshmatcap_vert:Nv,meshmatcap_frag:zv,meshnormal_vert:Bv,meshnormal_frag:Ov,meshphong_vert:Uv,meshphong_frag:Vv,meshphysical_vert:Gv,meshphysical_frag:Hv,meshtoon_vert:Wv,meshtoon_frag:Xv,points_vert:Kv,points_frag:Yv,shadow_vert:qv,shadow_frag:Zv,sprite_vert:$v,sprite_frag:Jv},we={common:{diffuse:{value:new Q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Q(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ti={basic:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Q(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Q(0)},specular:{value:new Q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:sn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:sn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Q(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:sn([we.points,we.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:sn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:sn([we.common,we.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:sn([we.sprite,we.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:sn([we.common,we.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:sn([we.lights,we.fog,{color:{value:new Q(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ti.physical={uniforms:sn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Q(0)},specularColor:{value:new Q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Jl={r:0,b:0,g:0},jv=new Et,Ap=new $e;Ap.set(-1,0,0,0,1,0,0,0,1);function Qv(i,e,t,n,r,o){let s=new Q(0),a=r===!0?0:1,l,c,u=null,h=0,d=null;function f(x){let w=x.isScene===!0?x.background:null;if(w&&w.isTexture){let b=x.backgroundBlurriness>0;w=e.get(w,b)}return w}function p(x){let w=!1,b=f(x);b===null?m(s,a):b&&b.isColor&&(m(b,1),w=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,w){let b=f(w);b&&(b.isCubeTexture||b.mapping===as)?(c===void 0&&(c=new Oe(new ki(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:pr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jv.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ap),c.material.toneMapped=at.getTransfer(b.colorSpace)!==pt,(u!==b||h!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Oe(new Bn(2,2),new on({name:"BackgroundMaterial",uniforms:pr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=at.getTransfer(b.colorSpace)!==pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,w){x.getRGB(Jl,eh(i)),t.buffers.color.setClear(Jl.r,Jl.g,Jl.b,w,o)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,w=1){s.set(x),a=w,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(s,a)},render:p,addToRenderList:g,dispose:_}}function ex(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),o=r,s=!1;function a(A,C,P,R,I){let F=!1,z=h(A,R,P,C);o!==z&&(o=z,c(o.object)),F=f(A,R,P,I),F&&p(A,R,P,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(F||s)&&(s=!1,b(A,C,P,R),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function u(A){return i.deleteVertexArray(A)}function h(A,C,P,R){let I=R.wireframe===!0,F=n[C.id];F===void 0&&(F={},n[C.id]=F);let z=A.isInstancedMesh===!0?A.id:0,B=F[z];B===void 0&&(B={},F[z]=B);let N=B[P.id];N===void 0&&(N={},B[P.id]=N);let O=N[I];return O===void 0&&(O=d(l()),N[I]=O),O}function d(A){let C=[],P=[],R=[];for(let I=0;I<t;I++)C[I]=0,P[I]=0,R[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:R,object:A,attributes:{},index:null}}function f(A,C,P,R){let I=o.attributes,F=C.attributes,z=0,B=P.getAttributes();for(let N in B)if(B[N].location>=0){let G=I[N],J=F[N];if(J===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(J=A.instanceColor)),G===void 0||G.attribute!==J||J&&G.data!==J.data)return!0;z++}return o.attributesNum!==z||o.index!==R}function p(A,C,P,R){let I={},F=C.attributes,z=0,B=P.getAttributes();for(let N in B)if(B[N].location>=0){let G=F[N];G===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(G=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(G=A.instanceColor));let J={};J.attribute=G,G&&G.data&&(J.data=G.data),I[N]=J,z++}o.attributes=I,o.attributesNum=z,o.index=R}function g(){let A=o.newAttributes;for(let C=0,P=A.length;C<P;C++)A[C]=0}function m(A){_(A,0)}function _(A,C){let P=o.newAttributes,R=o.enabledAttributes,I=o.attributeDivisors;P[A]=1,R[A]===0&&(i.enableVertexAttribArray(A),R[A]=1),I[A]!==C&&(i.vertexAttribDivisor(A,C),I[A]=C)}function x(){let A=o.newAttributes,C=o.enabledAttributes;for(let P=0,R=C.length;P<R;P++)C[P]!==A[P]&&(i.disableVertexAttribArray(P),C[P]=0)}function w(A,C,P,R,I,F,z){z===!0?i.vertexAttribIPointer(A,C,P,I,F):i.vertexAttribPointer(A,C,P,R,I,F)}function b(A,C,P,R){g();let I=R.attributes,F=P.getAttributes(),z=C.defaultAttributeValues;for(let B in F){let N=F[B];if(N.location>=0){let O=I[B];if(O===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(O=A.instanceColor)),O!==void 0){let G=O.normalized,J=O.itemSize,j=e.get(O);if(j===void 0)continue;let ue=j.buffer,ne=j.type,de=j.bytesPerElement,H=ne===i.INT||ne===i.UNSIGNED_INT||O.gpuType===fl;if(O.isInterleavedBufferAttribute){let X=O.data,oe=X.stride,ce=O.offset;if(X.isInstancedInterleavedBuffer){for(let le=0;le<N.locationSize;le++)_(N.location+le,X.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let le=0;le<N.locationSize;le++)m(N.location+le);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let le=0;le<N.locationSize;le++)w(N.location+le,J/N.locationSize,ne,G,oe*de,(ce+J/N.locationSize*le)*de,H)}else{if(O.isInstancedBufferAttribute){for(let X=0;X<N.locationSize;X++)_(N.location+X,O.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let X=0;X<N.locationSize;X++)m(N.location+X);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let X=0;X<N.locationSize;X++)w(N.location+X,J/N.locationSize,ne,G,J*de,J/N.locationSize*X*de,H)}}else if(z!==void 0){let G=z[B];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(N.location,G);break;case 3:i.vertexAttrib3fv(N.location,G);break;case 4:i.vertexAttrib4fv(N.location,G);break;default:i.vertexAttrib1fv(N.location,G)}}}}x()}function y(){S();for(let A in n){let C=n[A];for(let P in C){let R=C[P];for(let I in R){let F=R[I];for(let z in F)u(F[z].object),delete F[z];delete R[I]}}delete n[A]}}function M(A){if(n[A.id]===void 0)return;let C=n[A.id];for(let P in C){let R=C[P];for(let I in R){let F=R[I];for(let z in F)u(F[z].object),delete F[z];delete R[I]}}delete n[A.id]}function E(A){for(let C in n){let P=n[C];for(let R in P){let I=P[R];if(I[A.id]===void 0)continue;let F=I[A.id];for(let z in F)u(F[z].object),delete F[z];delete I[A.id]}}}function v(A){for(let C in n){let P=n[C],R=A.isInstancedMesh===!0?A.id:0,I=P[R];if(I!==void 0){for(let F in I){let z=I[F];for(let B in z)u(z[B].object),delete z[B];delete I[F]}delete P[R],Object.keys(P).length===0&&delete n[C]}}}function S(){T(),s=!0,o!==r&&(o=r,c(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:T,dispose:y,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function tx(i,e,t){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function nx(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(E){return!(E!==Rn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let v=E===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==yn&&E!==Vn&&!v&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:x,maxVaryings:w,maxFragmentUniforms:b,maxSamples:y,samples:M}}function ix(i){let e=this,t=null,n=0,r=!1,o=!1,s=new bn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,_=i.get(h);if(!r||p===null||p.length===0||o&&!m)o?u(null):c();else{let x=o?0:n,w=x*4,b=_.clippingState||null;l.value=b,b=u(p,d,w,f);for(let y=0;y!==w;++y)b[y]=t[y];_.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let _=f+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<_)&&(m=new Float32Array(_));for(let w=0,b=f;w!==g;++w,b+=4)s.copy(h[w]).applyMatrix4(x,a),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var ao=4,rx=6,ox=20,sx=256,gs=new jn,rp=new Q,ch=null,uh=0,hh=0,dh=!1,ax=new U,mr=new U,Ql=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,o={}){let{size:s=256,position:a=ax}=o;ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ch,uh,hh),this._renderer.xr.enabled=dh,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Gn,format:Rn,colorSpace:Do,depthBuffer:!1},r=op(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=op(e,t,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lx(o)),this._blurMaterial=ux(o,e,t),this._ggxMaterial=cx(o,e,t)}return r}_compileMaterial(e){let t=new Oe(new Xe,e);this._renderer.compile(t,gs)}_sceneToCubeUV(e,t,n,r,o){let l=new tn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(rp),h.toneMapping=On,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new ki,new nt({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,_=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,_=!0):(m.color.copy(rp),_=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[w],o.y,o.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[w],o.z)):(l.up.set(0,c[w],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[w]));let y=this._cubeSize;so(r,b*y,w>2?y:0,y,y),h.setRenderTarget(r),_&&h.render(g,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ni||e.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sp());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let l=this._cubeSize;so(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,gs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:p}=this,g=this._sizeLods[n],m=3*g*(n>p-ao?n-p+ao:0),_=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,so(o,m,_,3*g,2*g),r.setRenderTarget(o),r.render(a,gs),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,so(e,m,_,3*g,2*g),r.setRenderTarget(e),r.render(a,gs)}_blur(e,t,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,n,s),this._blurPass(o,e,n,n,s)}_blurPass(e,t,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-ao?r-this._lodMax+ao:0),d=4*(this._cubeSize-u);so(t,h,d,3*u,2*u),s.setRenderTarget(t),s.render(l,gs)}};function lx(i){let e=[],t=[],n=i,r=i-ao+1+rx;for(let o=0;o<r;o++){let s=Math.pow(2,n);e.push(s);let a=1/(s-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,p=new Float32Array(f*d*h),g=new Float32Array(f*d*h);for(let _=0;_<h;_++){let x=_%3*2/3-1,w=_>2?0:-1,b=[x,w,0,x+2/3,w,0,x+2/3,w+1,0,x,w,0,x+2/3,w+1,0,x,w+1,0];p.set(b,f*d*_);for(let y=0;y<d;y++){let M=u[y*2]*2-1,E=u[y*2+1]*2-1;_===0?mr.set(1,E,M):_===1?mr.set(-M,1,-E):_===2?mr.set(-M,E,1):_===3?mr.set(-1,E,-M):_===4?mr.set(-M,-1,E):mr.set(M,E,-1),mr.toArray(g,(_*d+y)*f)}}let m=new Xe;m.setAttribute("position",new An(p,f)),m.setAttribute("outputDirection",new An(g,f)),t.push(new Oe(m,null)),n>ao&&n--}return{lodMeshes:t,sizeLods:e}}function op(i,e,t){let n=new rn(i,e,t);return n.texture.mapping=as,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function cx(i,e,t){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ux(i,e,t){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:ox,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function sp(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ap(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ec=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Go(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ki(5,5,5),o=new on({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Qn});o.uniforms.tEquirect.value=t;let s=new Oe(r,o),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=Yt),new al(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}};function hx(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,f=!1){return d==null?null:f?s(d):o(d)}function o(d){if(d&&d.isTexture){let f=d.mapping;if(f===ul||f===hl)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let g=new ec(p.height);return g.fromEquirectangularTexture(i,d),e.set(d,g),d.addEventListener("dispose",c),a(g.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){let f=d.mapping,p=f===ul||f===hl,g=f===Ni||f===fr;if(p||g){let m=t.get(d),_=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new Ql(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let x=d.image;return p&&x&&x.height>0||g&&x&&l(x)?(n===null&&(n=new Ql(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===ul?d.mapping=Ni:f===hl&&(d.mapping=fr),d}function l(d){let f=0,p=6;for(let g=0;g<p;g++)d[g]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function dx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&sr("WebGLRenderer: "+n+" extension not supported."),r}}}function fx(i,e,t,n){let r={},o=new WeakMap;function s(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",s),delete r[d.id];let f=o.get(d);f&&(e.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,p=h.attributes.position,g=0;if(p===void 0)return;if(f!==null){let x=f.array;g=f.version;for(let w=0,b=x.length;w<b;w+=3){let y=x[w+0],M=x[w+1],E=x[w+2];d.push(y,M,M,E,E,y)}}else{let x=p.array;g=p.version;for(let w=0,b=x.length/3-1;w<b;w+=3){let y=w+0,M=w+1,E=w+2;d.push(y,M,M,E,E,y)}}let m=new(p.count>=65535?lr:Uo)(d,1);m.version=g;let _=o.get(h);_&&e.remove(_),o.set(h,m)}function u(h){let d=o.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function px(i,e,t){let n;function r(h){n=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,d){i.drawElements(n,d,o,h*s),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,o,h*s,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,h,0,f);let g=0;for(let m=0;m<f;m++)g+=d[m];t.update(g,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function mx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:Ye("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function gx(i,e,t){let n=new WeakMap,r=new It;function o(s,a,l){let c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),g===!0&&(w=3);let b=a.attributes.position.count*w,y=1;b>e.maxTextureSize&&(y=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let M=new Float32Array(b*y*4*h),E=new Bo(M,b,y,h);E.type=Vn,E.needsUpdate=!0;let v=w*4;for(let T=0;T<h;T++){let A=m[T],C=_[T],P=x[T],R=b*y*4*T;for(let I=0;I<A.count;I++){let F=I*v;f===!0&&(r.fromBufferAttribute(A,I),M[R+F+0]=r.x,M[R+F+1]=r.y,M[R+F+2]=r.z,M[R+F+3]=0),p===!0&&(r.fromBufferAttribute(C,I),M[R+F+4]=r.x,M[R+F+5]=r.y,M[R+F+6]=r.z,M[R+F+7]=0),g===!0&&(r.fromBufferAttribute(P,I),M[R+F+8]=r.x,M[R+F+9]=r.y,M[R+F+10]=r.z,M[R+F+11]=P.itemSize===4?r.w:1)}}d={count:h,texture:E,size:new Ee(b,y)},n.set(a,d),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function _x(i,e,t,n,r){let o=new WeakMap;function s(c){let u=r.render.frame,h=c.geometry,d=e.get(c,h);if(o.get(d)!==u&&(e.update(d),o.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;o.get(f)!==u&&(f.update(),o.set(f,u))}return d}function a(){o=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}var bx={[Fu]:"LINEAR_TONE_MAPPING",[Du]:"REINHARD_TONE_MAPPING",[Nu]:"CINEON_TONE_MAPPING",[zu]:"ACES_FILMIC_TONE_MAPPING",[Ou]:"AGX_TONE_MAPPING",[Uu]:"NEUTRAL_TONE_MAPPING",[Bu]:"CUSTOM_TONE_MAPPING"};function vx(i,e,t,n,r,o){let s=new rn(e,t,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Xe;c.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ae([0,2,0,0,2,0],2));let u=new qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Oe(c,u),d=new jn(-1,1,1,-1,0,1),f=null,p=null,g=!1,m,_=null,x=[],w=!1;this.setSize=function(b,y){s.setSize(b,y),a!==null&&a.setSize(b,y),l!==null&&l.setSize(b,y);for(let M=0;M<x.length;M++){let E=x[M];E.setSize&&E.setSize(b,y)}},this.setEffects=function(b){x=b,w=x.length>0&&x[0].isRenderPass===!0;let y=s.width,M=s.height;x.length>0&&a===null&&(a=new rn(y,M,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(y,M,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<x.length;E++){let v=x[E];v.setSize&&v.setSize(y,M)}},this.begin=function(b,y){if(g||b.toneMapping===On&&x.length===0)return!1;if(_=y,y!==null){let M=y.width,E=y.height;(s.width!==M||s.height!==E)&&this.setSize(M,E)}return w===!1&&b.setRenderTarget(s),m=b.toneMapping,b.toneMapping=On,!0},this.hasRenderPass=function(){return w},this.end=function(b,y){b.toneMapping=m,g=!0;let M=s,E=a;for(let v=0;v<x.length;v++){let S=x[v];S.enabled!==!1&&(S.render(b,E,M,y),S.needsSwap!==!1&&(M=E,E=E===a?l:a))}if(f!==b.outputColorSpace||p!==b.toneMapping){f=b.outputColorSpace,p=b.toneMapping,u.defines={},at.getTransfer(f)===pt&&(u.defines.SRGB_TRANSFER="");let v=bx[p];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(_),b.render(h,d),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Ep=new nn,mh=new Pi(1,1),Rp=new Bo,Pp=new Da,kp=new Go,lp=[],cp=[],up=new Float32Array(16),hp=new Float32Array(9),dp=new Float32Array(4);function co(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,o=lp[r];if(o===void 0&&(o=new Float32Array(r),lp[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nc(i,e){let t=cp[e];t===void 0&&(t=new Int32Array(e),cp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function Mx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function Sx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ut(t,n))return;dp.set(n),i.uniformMatrix2fv(this.addr,!1,dp),Vt(t,n)}}function Tx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ut(t,n))return;hp.set(n),i.uniformMatrix3fv(this.addr,!1,hp),Vt(t,n)}}function Ax(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ut(t,n))return;up.set(n),i.uniformMatrix4fv(this.addr,!1,up),Vt(t,n)}}function Ex(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function Px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function Cx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function Lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function Fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function Dx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(mh.compareFunction=t.isReversedDepthBuffer()?$l:Zl,o=mh):o=Ep,t.setTexture2D(e||o,r)}function Nx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Pp,r)}function zx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||kp,r)}function Bx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Rp,r)}function Ox(i){switch(i){case 5126:return xx;case 35664:return yx;case 35665:return wx;case 35666:return Mx;case 35674:return Sx;case 35675:return Tx;case 35676:return Ax;case 5124:case 35670:return Ex;case 35667:case 35671:return Rx;case 35668:case 35672:return Px;case 35669:case 35673:return kx;case 5125:return Cx;case 36294:return Ix;case 36295:return Lx;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Bx}}function Ux(i,e){i.uniform1fv(this.addr,e)}function Vx(i,e){let t=co(e,this.size,2);i.uniform2fv(this.addr,t)}function Gx(i,e){let t=co(e,this.size,3);i.uniform3fv(this.addr,t)}function Hx(i,e){let t=co(e,this.size,4);i.uniform4fv(this.addr,t)}function Wx(i,e){let t=co(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xx(i,e){let t=co(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kx(i,e){let t=co(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yx(i,e){i.uniform1iv(this.addr,e)}function qx(i,e){i.uniform2iv(this.addr,e)}function Zx(i,e){i.uniform3iv(this.addr,e)}function $x(i,e){i.uniform4iv(this.addr,e)}function Jx(i,e){i.uniform1uiv(this.addr,e)}function jx(i,e){i.uniform2uiv(this.addr,e)}function Qx(i,e){i.uniform3uiv(this.addr,e)}function ey(i,e){i.uniform4uiv(this.addr,e)}function ty(i,e,t){let n=this.cache,r=e.length,o=nc(t,r);Ut(n,o)||(i.uniform1iv(this.addr,o),Vt(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=mh:s=Ep;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function ny(i,e,t){let n=this.cache,r=e.length,o=nc(t,r);Ut(n,o)||(i.uniform1iv(this.addr,o),Vt(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Pp,o[s])}function iy(i,e,t){let n=this.cache,r=e.length,o=nc(t,r);Ut(n,o)||(i.uniform1iv(this.addr,o),Vt(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||kp,o[s])}function ry(i,e,t){let n=this.cache,r=e.length,o=nc(t,r);Ut(n,o)||(i.uniform1iv(this.addr,o),Vt(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Rp,o[s])}function oy(i){switch(i){case 5126:return Ux;case 35664:return Vx;case 35665:return Gx;case 35666:return Hx;case 35674:return Wx;case 35675:return Xx;case 35676:return Kx;case 5124:case 35670:return Yx;case 35667:case 35671:return qx;case 35668:case 35672:return Zx;case 35669:case 35673:return $x;case 5125:return Jx;case 36294:return jx;case 36295:return Qx;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return ry}}var gh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ox(t.type)}},_h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oy(t.type)}},bh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],n)}}},fh=/(\w+)(\])?(\[|\.)?/g;function fp(i,e){i.seq.push(e),i.map[e.id]=e}function sy(i,e,t){let n=i.name,r=n.length;for(fh.lastIndex=0;;){let o=fh.exec(n),s=fh.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){fp(t,c===void 0?new gh(a,i,e):new _h(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new bh(a),fp(t,h)),t=h}}}var lo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);sy(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,n,r){let o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function pp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ay=37297,ly=0;function cy(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}var mp=new $e;function uy(i){at._getMatrix(mp,at.workingColorSpace,i);let e=`mat3( ${mp.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case No:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+cy(i.getShaderSource(e),a)}else return o}function hy(i,e){let t=uy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var dy={[Fu]:"Linear",[Du]:"Reinhard",[Nu]:"Cineon",[zu]:"ACESFilmic",[Ou]:"AgX",[Uu]:"Neutral",[Bu]:"Custom"};function fy(i,e){let t=dy[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jl=new U;function py(){at.getLuminanceCoefficients(jl);let i=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function my(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function gy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _y(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function bs(i){return i!==""}function _p(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var by=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(by,xy)}var vy=new Map;function xy(i,e){let t=tt[e];if(t===void 0){let n=vy.get(e);if(n!==void 0)t=tt[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vh(t)}var yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vp(i){return i.replace(yy,wy)}function wy(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function xp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var My={[os]:"SHADOWMAP_TYPE_PCF",[io]:"SHADOWMAP_TYPE_VSM"};function Sy(i){return My[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ty={[Ni]:"ENVMAP_TYPE_CUBE",[fr]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE_UV"};function Ay(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ty[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ey={[fr]:"ENVMAP_MODE_REFRACTION"};function Ry(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ey[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Py={[Lu]:"ENVMAP_BLENDING_MULTIPLY",[Lf]:"ENVMAP_BLENDING_MIX",[Ff]:"ENVMAP_BLENDING_ADD"};function ky(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Py[i.combine]||"ENVMAP_BLENDING_NONE"}function Cy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Iy(i,e,t,n){let r=i.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,l=Sy(t),c=Ay(t),u=Ry(t),h=ky(t),d=Cy(t),f=my(t),p=gy(o),g=r.createProgram(),m,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(bs).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(bs).join(`
`),_.length>0&&(_+=`
`)):(m=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),_=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?tt.tonemapping_pars_fragment:"",t.toneMapping!==On?fy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,hy("linearToOutputTexel",t.outputColorSpace),py(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),s=vh(s),s=_p(s,t),s=bp(s,t),a=vh(a),a=_p(a,t),a=bp(a,t),s=vp(s),a=vp(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let w=x+m+s,b=x+_+a,y=pp(r,r.VERTEX_SHADER,w),M=pp(r,r.FRAGMENT_SHADER,b);r.attachShader(g,y),r.attachShader(g,M),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function E(A){if(i.debug.checkShaderErrors){let C=r.getProgramInfoLog(g)||"",P=r.getShaderInfoLog(y)||"",R=r.getShaderInfoLog(M)||"",I=C.trim(),F=P.trim(),z=R.trim(),B=!0,N=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,y,M);else{let O=gp(r,y,"vertex"),G=gp(r,M,"fragment");Ye("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+O+`
`+G)}else I!==""?Ve("WebGLProgram: Program Info Log:",I):(F===""||z==="")&&(N=!1);N&&(A.diagnostics={runnable:B,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:_}})}r.deleteShader(y),r.deleteShader(M),v=new lo(r,g),S=_y(r,g)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(g,ay)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ly++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=M,this}var Ly=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yh(e),t.set(e,n)),n}},yh=class{constructor(e){this.id=Ly++,this.code=e,this.usedTimes=0}};function Fy(i){return i===Oi||i===fs||i===ps}function Dy(i,e,t,n,r,o){let s=new $r,a=new xh,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,S,T,A,C,P){let R=A.fog,I=C.geometry,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,B=e.get(v.envMap||F,z),N=B&&B.mapping===as?B.image.height:null,O=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Ve("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let G=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,J=G!==void 0?G.length:0,j=0;I.morphAttributes.position!==void 0&&(j=1),I.morphAttributes.normal!==void 0&&(j=2),I.morphAttributes.color!==void 0&&(j=3);let ue,ne,de,H;if(O){let Mt=ti[O];ue=Mt.vertexShader,ne=Mt.fragmentShader}else{ue=v.vertexShader,ne=v.fragmentShader;let Mt=a.getVertexShaderStage(v),dt=a.getFragmentShaderStage(v);a.update(v,Mt,dt),de=Mt.id,H=dt.id}let X=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),ce=C.isInstancedMesh===!0,le=C.isBatchedMesh===!0,pe=!!v.map,Ue=!!v.matcap,De=!!B,Fe=!!v.aoMap,Ze=!!v.lightMap,Ke=!!v.bumpMap&&v.wireframe===!1,_t=!!v.normalMap,kt=!!v.displacementMap,Kt=!!v.emissiveMap,bt=!!v.metalnessMap,zt=!!v.roughnessMap,Y=v.anisotropy>0,Jt=v.clearcoat>0,gt=v.dispersion>0,V=v.retroreflectivity>0,k=v.iridescence>0,q=v.sheen>0,ee=v.transmission>0,ie=Y&&!!v.anisotropyMap,me=Jt&&!!v.clearcoatMap,ge=Jt&&!!v.clearcoatNormalMap,re=Jt&&!!v.clearcoatRoughnessMap,ae=k&&!!v.iridescenceMap,_e=k&&!!v.iridescenceThicknessMap,Ne=q&&!!v.sheenColorMap,ye=q&&!!v.sheenRoughnessMap,be=!!v.specularMap,ze=!!v.specularColorMap,We=!!v.specularIntensityMap,je=ee&&!!v.transmissionMap,K=ee&&!!v.thicknessMap,ve=!!v.gradientMap,se=!!v.alphaMap,xe=v.alphaTest>0,Te=!!v.alphaHash,he=!!v.extensions,Be=On;v.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Be=i.toneMapping);let Ie={shaderID:O,shaderType:v.type,shaderName:v.name,vertexShader:ue,fragmentShader:ne,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:H,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:le,batchingColor:le&&C._colorsTexture!==null,instancing:ce,instancingColor:ce&&C.instanceColor!==null,instancingMorph:ce&&C.morphTexture!==null,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:pe,matcap:Ue,envMap:De,envMapMode:De&&B.mapping,envMapCubeUVHeight:N,aoMap:Fe,lightMap:Ze,bumpMap:Ke,normalMap:_t,displacementMap:kt,emissiveMap:Kt,normalMapObjectSpace:_t&&v.normalMapType===zf,normalMapTangentSpace:_t&&v.normalMapType===Zu,packedNormalMap:_t&&v.normalMapType===Zu&&Fy(v.normalMap.format),metalnessMap:bt,roughnessMap:zt,anisotropy:Y,anisotropyMap:ie,clearcoat:Jt,clearcoatMap:me,clearcoatNormalMap:ge,clearcoatRoughnessMap:re,dispersion:gt,retroreflection:V,iridescence:k,iridescenceMap:ae,iridescenceThicknessMap:_e,sheen:q,sheenColorMap:Ne,sheenRoughnessMap:ye,specularMap:be,specularColorMap:ze,specularIntensityMap:We,transmission:ee,transmissionMap:je,thicknessMap:K,gradientMap:ve,opaque:v.transparent===!1&&v.blending===Di&&v.alphaToCoverage===!1,alphaMap:se,alphaTest:xe,alphaHash:Te,combine:v.combine,mapUv:pe&&p(v.map.channel),aoMapUv:Fe&&p(v.aoMap.channel),lightMapUv:Ze&&p(v.lightMap.channel),bumpMapUv:Ke&&p(v.bumpMap.channel),normalMapUv:_t&&p(v.normalMap.channel),displacementMapUv:kt&&p(v.displacementMap.channel),emissiveMapUv:Kt&&p(v.emissiveMap.channel),metalnessMapUv:bt&&p(v.metalnessMap.channel),roughnessMapUv:zt&&p(v.roughnessMap.channel),anisotropyMapUv:ie&&p(v.anisotropyMap.channel),clearcoatMapUv:me&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&p(v.sheenRoughnessMap.channel),specularMapUv:be&&p(v.specularMap.channel),specularColorMapUv:ze&&p(v.specularColorMap.channel),specularIntensityMapUv:We&&p(v.specularIntensityMap.channel),transmissionMapUv:je&&p(v.transmissionMap.channel),thicknessMapUv:K&&p(v.thicknessMap.channel),alphaMapUv:se&&p(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(_t||Y),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!I.attributes.uv&&(pe||se),fog:!!R,useFog:v.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&_t===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:j,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:pe&&v.map.isVideoTexture===!0&&at.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:Kt&&v.emissiveMap.isVideoTexture===!0&&at.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===lt,flipSided:v.side===un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:he&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&v.extensions.multiDraw===!0||le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function m(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let T in v.defines)S.push(T),S.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(_(S,v),x(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function _(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function x(v,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.retroreflection&&s.enable(24),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function w(v){let S=f[v.type],T;if(S){let A=ti[S];T=tp.clone(A.uniforms)}else T=v.uniforms;return T}function b(v,S){let T=u.get(S);return T!==void 0?++T.usedTimes:(T=new Iy(i,S,v,r),c.push(T),u.set(S,T)),T}function y(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function E(){a.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:w,acquireProgram:b,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:E}}function Ny(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function zy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function yp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wp(){let i=[],e=0,t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,g,m,_){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:p,materialVariant:s(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:_},i[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=p,x.materialVariant=s(d),x.groupOrder=g,x.renderOrder=d.renderOrder,x.z=m,x.group=_),e++,x}function l(d,f,p,g,m,_,x){x.reversedDepth===!0&&(m=-m);let w=a(d,f,p,g,m,_);p.transmission>0?n.push(w):p.transparent===!0?r.push(w):t.push(w)}function c(d,f,p,g,m,_){let x=a(d,f,p,g,m,_);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):t.unshift(x)}function u(d,f){t.length>1&&t.sort(d||zy),n.length>1&&n.sort(f||yp),r.length>1&&r.sort(f||yp)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:h,sort:u}}function By(){let i=new WeakMap;function e(n,r){let o=i.get(n),s;return o===void 0?(s=new wp,i.set(n,[s])):r>=o.length?(s=new wp,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Oy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Q};break;case"SpotLight":t={position:new U,direction:new U,color:new Q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Q,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Q,groundColor:new Q};break;case"RectAreaLight":t={color:new Q,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Uy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Vy=0;function Gy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hy(i){let e=new Oy,t=Uy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let r=new U,o=new Et,s=new Et;function a(c){let u=0,h=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,p=0,g=0,m=0,_=0,x=0,w=0,b=0,y=0,M=0,E=0,v=0,S=0,T=0;c.sort(Gy);for(let C=0,P=c.length;C<P;C++){let R=c[C],I=R.color,F=R.intensity,z=R.distance,B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Oi?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=I.r*F,h+=I.g*F,d+=I.b*F;else if(R.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(R.sh.coefficients[N],F);T++}else if(R.isSunLight){let N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let O=R.shadow,G=t.get(R);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[p]=G,n.sunShadowMap[p]=B;let J=O.getViewportCount();for(let j=0;j<J;j++)n.sunShadowMatrix[g+j]=O.getMatrix(j),n.sunShadowCascade[g+j]=O._cascadeData[j];g+=J,p++}n.sun[f]=N,f++}else if(R.isDirectionalLight){let N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let O=R.shadow,G=t.get(R);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=R.shadow.matrix,y++}n.directional[m]=N,m++}else if(R.isSpotLight){let N=e.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(I).multiplyScalar(F),N.distance=z,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,n.spot[x]=N;let O=R.shadow;if(R.map&&(n.spotLightMap[v]=R.map,v++,O.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[x]=O.matrix,R.castShadow){let G=t.get(R);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=B,E++}x++}else if(R.isRectAreaLight){let N=e.get(R);N.color.copy(I).multiplyScalar(F),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),n.rectArea[w]=N,w++}else if(R.isPointLight){let N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){let O=R.shadow,G=t.get(R);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,G.shadowCameraNear=O.camera.near,G.shadowCameraFar=O.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=B,n.pointShadowMatrix[_]=R.shadow.matrix,M++}n.point[_]=N,_++}else if(R.isHemisphereLight){let N=e.get(R);N.skyColor.copy(R.color).multiplyScalar(F),N.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[b]=N,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let A=n.hash;(A.sunLength!==f||A.directionalLength!==m||A.pointLength!==_||A.spotLength!==x||A.rectAreaLength!==w||A.hemiLength!==b||A.numSunShadows!==p||A.numDirectionalShadows!==y||A.numPointShadows!==M||A.numSpotShadows!==E||A.numSpotMaps!==v||A.numLightProbes!==T)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=w,n.point.length=_,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-S,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,A.sunLength=f,A.directionalLength=m,A.pointLength=_,A.spotLength=x,A.rectAreaLength=w,A.hemiLength=b,A.numSunShadows=p,A.numDirectionalShadows=y,A.numPointShadows=M,A.numSpotShadows=E,A.numSpotMaps=v,A.numLightProbes=T,n.version=Vy++)}function l(c,u){let h=0,d=0,f=0,p=0,g=0,m=0,_=u.matrixWorldInverse;for(let x=0,w=c.length;x<w;x++){let b=c[x];if(b.isSunLight){let y=n.sun[h];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(_),h++}else if(b.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),d++}else if(b.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),p++}else if(b.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),s.identity(),o.copy(b.matrixWorld),o.premultiply(_),s.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),g++}else if(b.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),f++}else if(b.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(_),m++}}}return{setup:a,setupView:l,state:n}}function Mp(i){let e=new Hy(i),t=[],n=[],r=[];function o(d){h.camera=d,t.length=0,n.length=0,r.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function Wy(i){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new Mp(i),e.set(r,[a])):o>=s.length?(a=new Mp(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ky=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yy=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],qy=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Sp=new Et,_s=new U,ph=new U;function Zy(i,e,t){let n=new Vo,r=new Ee,o=new Ee,s=new It,a=new Za,l=new $a,c={},u=t.maxTextureSize,h={[Fi]:un,[un]:Fi,[lt]:lt},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Xy,fragmentShader:Ky}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Xe;p.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Oe(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let _=this.type;this.render=function(M,E,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===pf&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=os);let S=i.getRenderTarget(),T=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Qn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let P=_!==this.type;P&&E.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(I=>I.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,I=M.length;R<I;R++){let F=M[R],z=F.shadow;if(z===void 0){Ve("WebGLShadowMap:",F,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let B=z.getFrameExtents();r.multiply(B),o.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/B.x),r.x=o.x*B.x,z.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/B.y),r.y=o.y*B.y,z.mapSize.y=o.y));let N=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=N,z.map===null||P===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===io){if(F.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new rn(r.x,r.y,{format:Oi,type:Gn,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),z.map.texture.name=F.name+".shadowMap",z.map.depthTexture=new Pi(r.x,r.y,Vn),z.map.depthTexture.name=F.name+".shadowMapDepth",z.map.depthTexture.format=Zn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Wt,z.map.depthTexture.magFilter=Wt}else F.isPointLight?(z.map=new ec(r.x),z.map.depthTexture=new Ua(r.x,Un)):(z.map=new rn(r.x,r.y),z.map.depthTexture=new Pi(r.x,r.y,Un)),z.map.depthTexture.name=F.name+".shadowMap",z.map.depthTexture.format=Zn,this.type===os?(z.map.depthTexture.compareFunction=N?$l:Zl,z.map.depthTexture.minFilter=Yt,z.map.depthTexture.magFilter=Yt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Wt,z.map.depthTexture.magFilter=Wt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==r.x||z.map.height!==r.y)&&z.map.setSize(r.x,r.y);let O=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();F.isPointLight!==!0&&z.updateMatrices(F,v);for(let G=0;G<O;G++){let J=z.getCamera(G);if(F.isPointLight){let j=z.camera,ue=z.matrix,ne=F.distance||j.far;ne!==j.far&&(j.far=ne,j.updateProjectionMatrix()),_s.setFromMatrixPosition(F.matrixWorld),j.position.copy(_s),ph.copy(j.position),ph.add(Yy[G]),j.up.copy(qy[G]),j.lookAt(ph),j.updateMatrixWorld(),ue.makeTranslation(-_s.x,-_s.y,-_s.z),Sp.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Sp,j.coordinateSystem,j.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,G),i.clear();else{G===0&&(i.setRenderTarget(z.map),i.clear());let j=z.getViewport(G);s.set(o.x*j.x,o.y*j.y,o.x*j.z,o.y*j.w),C.viewport(s)}n=z.getFrustum(G),b(E,v,J,F,this.type)}z.isPointLightShadow!==!0&&this.type===io&&x(z,v),z.needsUpdate=!1}_=this.type,m.needsUpdate=!1,i.setRenderTarget(S,T,A)};function x(M,E){let v=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new rn(r.x,r.y,{format:Oi,type:Gn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(E,null,v,d,g,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(E,null,v,f,g,null)}function w(M,E,v,S){let T=null,A=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)T=A;else if(T=v.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let C=T.uuid,P=E.uuid,R=c[C];R===void 0&&(R={},c[C]=R);let I=R[P];I===void 0&&(I=T.clone(),R[P]=I,E.addEventListener("dispose",y)),T=I}if(T.visible=E.visible,T.wireframe=E.wireframe,S===io?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:h[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,v.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let C=i.properties.get(T);C.light=v}return T}function b(M,E,v,S,T){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===io)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let P=e.update(M),R=M.material;if(Array.isArray(R)){let I=P.groups;for(let F=0,z=I.length;F<z;F++){let B=I[F],N=R[B.materialIndex];if(N&&N.visible){let O=w(M,N,S,T);M.onBeforeShadow(i,M,E,v,P,O,B),i.renderBufferDirect(v,null,P,O,M,B),M.onAfterShadow(i,M,E,v,P,O,B)}}}else if(R.visible){let I=w(M,R,S,T);M.onBeforeShadow(i,M,E,v,P,I,null),i.renderBufferDirect(v,null,P,I,M,null),M.onAfterShadow(i,M,E,v,P,I,null)}}let C=M.children;for(let P=0,R=C.length;P<R;P++)b(C[P],E,v,S,T)}function y(M){M.target.removeEventListener("dispose",y);for(let v in c){let S=c[v],T=M.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function $y(i,e){function t(){let K=!1,ve=new It,se=null,xe=new It(0,0,0,0);return{setMask:function(Te){se!==Te&&!K&&(i.colorMask(Te,Te,Te,Te),se=Te)},setLocked:function(Te){K=Te},setClear:function(Te,he,Be,Ie,Mt){Mt===!0&&(Te*=Ie,he*=Ie,Be*=Ie),ve.set(Te,he,Be,Ie),xe.equals(ve)===!1&&(i.clearColor(Te,he,Be,Ie),xe.copy(ve))},reset:function(){K=!1,se=null,xe.set(-1,0,0,0)}}}function n(){let K=!1,ve=!1,se=null,xe=null,Te=null;return{setReversed:function(he){if(ve!==he){let Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ve=he;let Ie=Te;Te=null,this.setClear(Ie)}},getReversed:function(){return ve},setTest:function(he){he?X(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(he){se!==he&&!K&&(i.depthMask(he),se=he)},setFunc:function(he){if(ve&&(he=Zf[he]),xe!==he){switch(he){case Ma:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case Kr:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=he}},setLocked:function(he){K=he},setClear:function(he){Te!==he&&(Te=he,ve&&(he=1-he),i.clearDepth(he))},reset:function(){K=!1,se=null,xe=null,Te=null,ve=!1}}}function r(){let K=!1,ve=null,se=null,xe=null,Te=null,he=null,Be=null,Ie=null,Mt=null;return{setTest:function(dt){K||(dt?X(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(dt){ve!==dt&&!K&&(i.stencilMask(dt),ve=dt)},setFunc:function(dt,Cn,Kn){(se!==dt||xe!==Cn||Te!==Kn)&&(i.stencilFunc(dt,Cn,Kn),se=dt,xe=Cn,Te=Kn)},setOp:function(dt,Cn,Kn){(he!==dt||Be!==Cn||Ie!==Kn)&&(i.stencilOp(dt,Cn,Kn),he=dt,Be=Cn,Ie=Kn)},setLocked:function(dt){K=dt},setClear:function(dt){Mt!==dt&&(i.clearStencil(dt),Mt=dt)},reset:function(){K=!1,ve=null,se=null,xe=null,Te=null,he=null,Be=null,Ie=null,Mt=null}}}let o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],g=null,m=!1,_=null,x=null,w=null,b=null,y=null,M=null,E=null,v=new Q(0,0,0),S=0,T=!1,A=null,C=null,P=null,R=null,I=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,B=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(N)[1]),z=B>=1):N.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),z=B>=2);let O=null,G={},J=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ue=new It().fromArray(J),ne=new It().fromArray(j);function de(K,ve,se,xe){let Te=new Uint8Array(4),he=i.createTexture();i.bindTexture(K,he),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<se;Be++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ve+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return he}let H={};H[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),X(i.DEPTH_TEST),s.setFunc(Kr),Ke(!1),_t(Pu),X(i.CULL_FACE),Fe(Qn);function X(K){u[K]!==!0&&(i.enable(K),u[K]=!0)}function oe(K){u[K]!==!1&&(i.disable(K),u[K]=!1)}function ce(K,ve){return d[K]!==ve?(i.bindFramebuffer(K,ve),d[K]=ve,K===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ve),K===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function le(K,ve){let se=p,xe=!1;if(K){se=f.get(ve),se===void 0&&(se=[],f.set(ve,se));let Te=K.textures;if(se.length!==Te.length||se[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Be=Te.length;he<Be;he++)se[he]=i.COLOR_ATTACHMENT0+he;se.length=Te.length,xe=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,xe=!0);xe&&i.drawBuffers(se)}function pe(K){return g!==K?(i.useProgram(K),g=K,!0):!1}let Ue={[dr]:i.FUNC_ADD,[gf]:i.FUNC_SUBTRACT,[_f]:i.FUNC_REVERSE_SUBTRACT};Ue[bf]=i.MIN,Ue[vf]=i.MAX;let De={[xf]:i.ZERO,[yf]:i.ONE,[wf]:i.SRC_COLOR,[Cu]:i.SRC_ALPHA,[Rf]:i.SRC_ALPHA_SATURATE,[Af]:i.DST_COLOR,[Sf]:i.DST_ALPHA,[Mf]:i.ONE_MINUS_SRC_COLOR,[Iu]:i.ONE_MINUS_SRC_ALPHA,[Ef]:i.ONE_MINUS_DST_COLOR,[Tf]:i.ONE_MINUS_DST_ALPHA,[Pf]:i.CONSTANT_COLOR,[kf]:i.ONE_MINUS_CONSTANT_COLOR,[Cf]:i.CONSTANT_ALPHA,[If]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(K,ve,se,xe,Te,he,Be,Ie,Mt,dt){if(K===Qn){m===!0&&(oe(i.BLEND),m=!1);return}if(m===!1&&(X(i.BLEND),m=!0),K!==mf){if(K!==_||dt!==T){if((x!==dr||y!==dr)&&(i.blendEquation(i.FUNC_ADD),x=dr,y=dr),dt)switch(K){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lt:i.blendFunc(i.ONE,i.ONE);break;case ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ss:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",K);break}else switch(K){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ku:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ss:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",K);break}w=null,b=null,M=null,E=null,v.set(0,0,0),S=0,_=K,T=dt}return}Te=Te||ve,he=he||se,Be=Be||xe,(ve!==x||Te!==y)&&(i.blendEquationSeparate(Ue[ve],Ue[Te]),x=ve,y=Te),(se!==w||xe!==b||he!==M||Be!==E)&&(i.blendFuncSeparate(De[se],De[xe],De[he],De[Be]),w=se,b=xe,M=he,E=Be),(Ie.equals(v)===!1||Mt!==S)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Mt),v.copy(Ie),S=Mt),_=K,T=!1}function Ze(K,ve){K.side===lt?oe(i.CULL_FACE):X(i.CULL_FACE);let se=K.side===un;ve&&(se=!se),Ke(se),K.blending===Di&&K.transparent===!1?Fe(Qn):Fe(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),s.setFunc(K.depthFunc),s.setTest(K.depthTest),s.setMask(K.depthWrite),o.setMask(K.colorWrite);let xe=K.stencilWrite;a.setTest(xe),xe&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Kt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(K){A!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),A=K)}function _t(K){K!==df?(X(i.CULL_FACE),K!==C&&(K===Pu?i.cullFace(i.BACK):K===ff?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),C=K}function kt(K){K!==P&&(z&&i.lineWidth(K),P=K)}function Kt(K,ve,se){K?(X(i.POLYGON_OFFSET_FILL),(R!==ve||I!==se)&&(R=ve,I=se,s.getReversed()&&(ve=-ve),i.polygonOffset(ve,se))):oe(i.POLYGON_OFFSET_FILL)}function bt(K){K?X(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function zt(K){K===void 0&&(K=i.TEXTURE0+F-1),O!==K&&(i.activeTexture(K),O=K)}function Y(K,ve,se){se===void 0&&(O===null?se=i.TEXTURE0+F-1:se=O);let xe=G[se];xe===void 0&&(xe={type:void 0,texture:void 0},G[se]=xe),(xe.type!==K||xe.texture!==ve)&&(O!==se&&(i.activeTexture(se),O=se),i.bindTexture(K,ve||H[K]),xe.type=K,xe.texture=ve)}function Jt(){let K=G[O];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function gt(){try{i.compressedTexImage2D(...arguments)}catch(K){Ye("WebGLState:",K)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(K){Ye("WebGLState:",K)}}function k(){try{i.texSubImage2D(...arguments)}catch(K){Ye("WebGLState:",K)}}function q(){try{i.texSubImage3D(...arguments)}catch(K){Ye("WebGLState:",K)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(K){Ye("WebGLState:",K)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(K){Ye("WebGLState:",K)}}function me(){try{i.texStorage2D(...arguments)}catch(K){Ye("WebGLState:",K)}}function ge(){try{i.texStorage3D(...arguments)}catch(K){Ye("WebGLState:",K)}}function re(){try{i.texImage2D(...arguments)}catch(K){Ye("WebGLState:",K)}}function ae(){try{i.texImage3D(...arguments)}catch(K){Ye("WebGLState:",K)}}function _e(K){return h[K]!==void 0?h[K]:i.getParameter(K)}function Ne(K,ve){h[K]!==ve&&(i.pixelStorei(K,ve),h[K]=ve)}function ye(K){ue.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),ue.copy(K))}function be(K){ne.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),ne.copy(K))}function ze(K,ve){let se=c.get(ve);se===void 0&&(se=new WeakMap,c.set(ve,se));let xe=se.get(K);xe===void 0&&(xe=i.getUniformBlockIndex(ve,K.name),se.set(K,xe))}function We(K,ve){let xe=c.get(ve).get(K);l.get(ve)!==xe&&(i.uniformBlockBinding(ve,xe,K.__bindingPointIndex),l.set(ve,xe))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},O=null,G={},d={},f=new WeakMap,p=[],g=null,m=!1,_=null,x=null,w=null,b=null,y=null,M=null,E=null,v=new Q(0,0,0),S=0,T=!1,A=null,C=null,P=null,R=null,I=null,ue.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:X,disable:oe,bindFramebuffer:ce,drawBuffers:le,useProgram:pe,setBlending:Fe,setMaterial:Ze,setFlipSided:Ke,setCullFace:_t,setLineWidth:kt,setPolygonOffset:Kt,setScissorTest:bt,activeTexture:zt,bindTexture:Y,unbindTexture:Jt,compressedTexImage2D:gt,compressedTexImage3D:V,texImage2D:re,texImage3D:ae,pixelStorei:Ne,getParameter:_e,updateUBOMapping:ze,uniformBlockBinding:We,texStorage2D:me,texStorage3D:ge,texSubImage2D:k,texSubImage3D:q,compressedTexSubImage2D:ee,compressedTexSubImage3D:ie,scissor:ye,viewport:be,reset:je}}function Jy(i,e,t,n,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap,h=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(V,k){return p?new OffscreenCanvas(V,k):Yr("canvas")}function m(V,k,q){let ee=1,ie=gt(V);if((ie.width>q||ie.height>q)&&(ee=q/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let me=Math.floor(ee*ie.width),ge=Math.floor(ee*ie.height);d===void 0&&(d=g(me,ge));let re=k?g(me,ge):d;return re.width=me,re.height=ge,re.getContext("2d").drawImage(V,0,0,me,ge),Ve("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+me+"x"+ge+")."),re}else return"data"in V&&Ve("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),V;return V}function _(V){return V.generateMipmaps}function x(V){i.generateMipmap(V)}function w(V){return V.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?i.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(V,k,q,ee,ie,me=!1){if(V!==null){if(i[V]!==void 0)return i[V];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let ge;ee&&(ge=e.get("EXT_texture_norm16"),ge||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=k;if(k===i.RED&&(q===i.FLOAT&&(re=i.R32F),q===i.HALF_FLOAT&&(re=i.R16F),q===i.UNSIGNED_BYTE&&(re=i.R8),q===i.UNSIGNED_SHORT&&ge&&(re=ge.R16_EXT),q===i.SHORT&&ge&&(re=ge.R16_SNORM_EXT)),k===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(re=i.R8UI),q===i.UNSIGNED_SHORT&&(re=i.R16UI),q===i.UNSIGNED_INT&&(re=i.R32UI),q===i.BYTE&&(re=i.R8I),q===i.SHORT&&(re=i.R16I),q===i.INT&&(re=i.R32I)),k===i.RG&&(q===i.FLOAT&&(re=i.RG32F),q===i.HALF_FLOAT&&(re=i.RG16F),q===i.UNSIGNED_BYTE&&(re=i.RG8),q===i.UNSIGNED_SHORT&&ge&&(re=ge.RG16_EXT),q===i.SHORT&&ge&&(re=ge.RG16_SNORM_EXT)),k===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(re=i.RG8UI),q===i.UNSIGNED_SHORT&&(re=i.RG16UI),q===i.UNSIGNED_INT&&(re=i.RG32UI),q===i.BYTE&&(re=i.RG8I),q===i.SHORT&&(re=i.RG16I),q===i.INT&&(re=i.RG32I)),k===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(re=i.RGB8UI),q===i.UNSIGNED_SHORT&&(re=i.RGB16UI),q===i.UNSIGNED_INT&&(re=i.RGB32UI),q===i.BYTE&&(re=i.RGB8I),q===i.SHORT&&(re=i.RGB16I),q===i.INT&&(re=i.RGB32I)),k===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),q===i.UNSIGNED_INT&&(re=i.RGBA32UI),q===i.BYTE&&(re=i.RGBA8I),q===i.SHORT&&(re=i.RGBA16I),q===i.INT&&(re=i.RGBA32I)),k===i.RGB&&(q===i.UNSIGNED_SHORT&&ge&&(re=ge.RGB16_EXT),q===i.SHORT&&ge&&(re=ge.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(re=i.R11F_G11F_B10F)),k===i.RGBA){let ae=me?No:at.getTransfer(ie);q===i.FLOAT&&(re=i.RGBA32F),q===i.HALF_FLOAT&&(re=i.RGBA16F),q===i.UNSIGNED_BYTE&&(re=ae===pt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&ge&&(re=ge.RGBA16_EXT),q===i.SHORT&&ge&&(re=ge.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function y(V,k){let q;return V?k===null||k===Un||k===oo?q=i.DEPTH24_STENCIL8:k===Vn?q=i.DEPTH32F_STENCIL8:k===ro&&(q=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):k===null||k===Un||k===oo?q=i.DEPTH_COMPONENT24:k===Vn?q=i.DEPTH_COMPONENT32F:k===ro&&(q=i.DEPTH_COMPONENT16),q}function M(V,k){return _(V)===!0||V.isFramebufferTexture&&V.minFilter!==Wt&&V.minFilter!==Yt?Math.log2(Math.max(k.width,k.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?k.mipmaps.length:1}function E(V){let k=V.target;k.removeEventListener("dispose",E),S(k),k.isVideoTexture&&u.delete(k),k.isHTMLTexture&&h.delete(k)}function v(V){let k=V.target;k.removeEventListener("dispose",v),A(k)}function S(V){let k=n.get(V);if(k.__webglInit===void 0)return;let q=V.source,ee=f.get(q);if(ee){let ie=ee[k.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(V),Object.keys(ee).length===0&&f.delete(q)}n.remove(V)}function T(V){let k=n.get(V);i.deleteTexture(k.__webglTexture);let q=V.source,ee=f.get(q);delete ee[k.__cacheKey],s.memory.textures--}function A(V){let k=n.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),n.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(k.__webglFramebuffer[ee]))for(let ie=0;ie<k.__webglFramebuffer[ee].length;ie++)i.deleteFramebuffer(k.__webglFramebuffer[ee][ie]);else i.deleteFramebuffer(k.__webglFramebuffer[ee]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[ee])}else{if(Array.isArray(k.__webglFramebuffer))for(let ee=0;ee<k.__webglFramebuffer.length;ee++)i.deleteFramebuffer(k.__webglFramebuffer[ee]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let q=V.textures;for(let ee=0,ie=q.length;ee<ie;ee++){let me=n.get(q[ee]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),s.memory.textures--),n.remove(q[ee])}n.remove(V)}let C=0;function P(){C=0}function R(){return C}function I(V){C=V}function F(){let V=C;return V>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+(V+1)+" texture units while this GPU supports only "+r.maxTextures),C+=1,V}function z(V){let k=[];return k.push(V.wrapS),k.push(V.wrapT),k.push(V.wrapR||0),k.push(V.magFilter),k.push(V.minFilter),k.push(V.anisotropy),k.push(V.internalFormat),k.push(V.format),k.push(V.type),k.push(V.generateMipmaps),k.push(V.premultiplyAlpha),k.push(V.flipY),k.push(V.unpackAlignment),k.push(V.colorSpace),k.join()}function B(V,k){let q=n.get(V);if(V.isVideoTexture&&Y(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&q.__version!==V.version){let ee=V.image;if(ee===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(q,V,k);return}}else V.isExternalTexture&&(q.__webglTexture=V.sourceTexture?V.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+k)}function N(V,k){let q=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&q.__version!==V.version){oe(q,V,k);return}else V.isExternalTexture&&(q.__webglTexture=V.sourceTexture?V.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+k)}function O(V,k){let q=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&q.__version!==V.version){oe(q,V,k);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+k)}function G(V,k){let q=n.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&q.__version!==V.version){ce(q,V,k);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+k)}let J={[ar]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[ka]:i.MIRRORED_REPEAT},j={[Wt]:i.NEAREST,[Df]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[dl]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},ue={[Of]:i.NEVER,[Wf]:i.ALWAYS,[Uf]:i.LESS,[Zl]:i.LEQUAL,[Vf]:i.EQUAL,[$l]:i.GEQUAL,[Gf]:i.GREATER,[Hf]:i.NOTEQUAL};function ne(V,k){if(k.type===Vn&&e.has("OES_texture_float_linear")===!1&&(k.magFilter===Yt||k.magFilter===dl||k.magFilter===ls||k.magFilter===zi||k.minFilter===Yt||k.minFilter===dl||k.minFilter===ls||k.minFilter===zi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(V,i.TEXTURE_WRAP_S,J[k.wrapS]),i.texParameteri(V,i.TEXTURE_WRAP_T,J[k.wrapT]),(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)&&i.texParameteri(V,i.TEXTURE_WRAP_R,J[k.wrapR]),i.texParameteri(V,i.TEXTURE_MAG_FILTER,j[k.magFilter]),i.texParameteri(V,i.TEXTURE_MIN_FILTER,j[k.minFilter]),k.compareFunction&&(i.texParameteri(V,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(V,i.TEXTURE_COMPARE_FUNC,ue[k.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===Wt||k.minFilter!==ls&&k.minFilter!==zi||k.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||n.get(k).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(V,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,r.getMaxAnisotropy())),n.get(k).__currentAnisotropy=k.anisotropy}}}function de(V,k){let q=!1;V.__webglInit===void 0&&(V.__webglInit=!0,k.addEventListener("dispose",E));let ee=k.source,ie=f.get(ee);ie===void 0&&(ie={},f.set(ee,ie));let me=z(k);if(me!==V.__cacheKey){ie[me]===void 0&&(ie[me]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,q=!0),ie[me].usedTimes++;let ge=ie[V.__cacheKey];ge!==void 0&&(ie[V.__cacheKey].usedTimes--,ge.usedTimes===0&&T(k)),V.__cacheKey=me,V.__webglTexture=ie[me].texture}return q}function H(V,k,q){return Math.floor(Math.floor(V/q)/k)}function X(V,k,q,ee){let me=V.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,k.width,k.height,q,ee,k.data);else{me.sort((Ne,ye)=>Ne.start-ye.start);let ge=0;for(let Ne=1;Ne<me.length;Ne++){let ye=me[ge],be=me[Ne],ze=ye.start+ye.count,We=H(be.start,k.width,4),je=H(ye.start,k.width,4);be.start<=ze+1&&We===je&&H(be.start+be.count-1,k.width,4)===We?ye.count=Math.max(ye.count,be.start+be.count-ye.start):(++ge,me[ge]=be)}me.length=ge+1;let re=t.getParameter(i.UNPACK_ROW_LENGTH),ae=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,k.width);for(let Ne=0,ye=me.length;Ne<ye;Ne++){let be=me[Ne],ze=Math.floor(be.start/4),We=Math.ceil(be.count/4),je=ze%k.width,K=Math.floor(ze/k.width),ve=We,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,je),t.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,je,K,ve,se,q,ee,k.data)}V.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,re),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function oe(V,k,q){let ee=i.TEXTURE_2D;(k.isDataArrayTexture||k.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),k.isData3DTexture&&(ee=i.TEXTURE_3D);let ie=de(V,k),me=k.source;t.bindTexture(ee,V.__webglTexture,i.TEXTURE0+q);let ge=n.get(me);if(me.version!==ge.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&k.image instanceof ImageBitmap)===!1){let se=at.getPrimaries(at.workingColorSpace),xe=k.colorSpace===fi?null:at.getPrimaries(k.colorSpace),Te=k.colorSpace===fi||se===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,k.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,k.unpackAlignment);let ae=m(k.image,!1,r.maxTextureSize);ae=Jt(k,ae);let _e=o.convert(k.format,k.colorSpace),Ne=o.convert(k.type),ye=b(k.internalFormat,_e,Ne,k.normalized,k.colorSpace,k.isVideoTexture);ne(ee,k);let be,ze=k.mipmaps,We=k.isVideoTexture!==!0,je=ge.__version===void 0||ie===!0,K=me.dataReady,ve=M(k,ae);if(k.isDepthTexture)ye=y(k.format===Bi,k.type),je&&(We?t.texStorage2D(i.TEXTURE_2D,1,ye,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,ye,ae.width,ae.height,0,_e,Ne,null));else if(k.isDataTexture)if(ze.length>0){We&&je&&t.texStorage2D(i.TEXTURE_2D,ve,ye,ze[0].width,ze[0].height);for(let se=0,xe=ze.length;se<xe;se++)be=ze[se],We?K&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,be.width,be.height,_e,Ne,be.data):t.texImage2D(i.TEXTURE_2D,se,ye,be.width,be.height,0,_e,Ne,be.data);k.generateMipmaps=!1}else We?(je&&t.texStorage2D(i.TEXTURE_2D,ve,ye,ae.width,ae.height),K&&X(k,ae,_e,Ne)):t.texImage2D(i.TEXTURE_2D,0,ye,ae.width,ae.height,0,_e,Ne,ae.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){We&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,ye,ze[0].width,ze[0].height,ae.depth);for(let se=0,xe=ze.length;se<xe;se++)if(be=ze[se],k.format!==Rn)if(_e!==null)if(We){if(K)if(k.layerUpdates.size>0){let Te=ih(be.width,be.height,k.format,k.type);for(let he of k.layerUpdates){let Be=be.data.subarray(he*Te/be.data.BYTES_PER_ELEMENT,(he+1)*Te/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,he,be.width,be.height,1,_e,Be)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,be.width,be.height,ae.depth,_e,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,ye,be.width,be.height,ae.depth,0,be.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?K&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,be.width,be.height,ae.depth,_e,Ne,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,ye,be.width,be.height,ae.depth,0,_e,Ne,be.data);k.layerUpdates.size>0&&k.clearLayerUpdates()}else{We&&je&&t.texStorage2D(i.TEXTURE_2D,ve,ye,ze[0].width,ze[0].height);for(let se=0,xe=ze.length;se<xe;se++)be=ze[se],k.format!==Rn?_e!==null?We?K&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,be.width,be.height,_e,be.data):t.compressedTexImage2D(i.TEXTURE_2D,se,ye,be.width,be.height,0,be.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?K&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,be.width,be.height,_e,Ne,be.data):t.texImage2D(i.TEXTURE_2D,se,ye,be.width,be.height,0,_e,Ne,be.data)}else if(k.isDataArrayTexture)if(We){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,ye,ae.width,ae.height,ae.depth),K)if(k.layerUpdates.size>0){let se=ih(ae.width,ae.height,k.format,k.type);for(let xe of k.layerUpdates){let Te=ae.data.subarray(xe*se/ae.data.BYTES_PER_ELEMENT,(xe+1)*se/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,ae.width,ae.height,1,_e,Ne,Te)}k.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,_e,Ne,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ae.width,ae.height,ae.depth,0,_e,Ne,ae.data);else if(k.isData3DTexture)We?(je&&t.texStorage3D(i.TEXTURE_3D,ve,ye,ae.width,ae.height,ae.depth),K&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,_e,Ne,ae.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ae.width,ae.height,ae.depth,0,_e,Ne,ae.data);else if(k.isFramebufferTexture){if(je)if(We)t.texStorage2D(i.TEXTURE_2D,ve,ye,ae.width,ae.height);else{let se=ae.width,xe=ae.height;for(let Te=0;Te<ve;Te++)t.texImage2D(i.TEXTURE_2D,Te,ye,se,xe,0,_e,Ne,null),se>>=1,xe>>=1}}else if(k.isHTMLTexture){if("texElementImage2D"in i){let se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),ae.parentNode!==se){se.appendChild(ae),h.add(k),se.onpaint=xe=>{let Te=xe.changedElements;for(let he of h)Te.includes(he.image)&&(he.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ae);else{let Te=i.RGBA,he=i.RGBA,Be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,he,Be,ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(We&&je){let se=gt(ze[0]);t.texStorage2D(i.TEXTURE_2D,ve,ye,se.width,se.height)}for(let se=0,xe=ze.length;se<xe;se++)be=ze[se],We?K&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,_e,Ne,be):t.texImage2D(i.TEXTURE_2D,se,ye,_e,Ne,be);k.generateMipmaps=!1}else if(We){if(je){let se=gt(ae);t.texStorage2D(i.TEXTURE_2D,ve,ye,se.width,se.height)}K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Ne,ae)}else t.texImage2D(i.TEXTURE_2D,0,ye,_e,Ne,ae);_(k)&&x(ee),ge.__version=me.version,k.onUpdate&&k.onUpdate(k)}V.__version=k.version}function ce(V,k,q){if(k.image.length!==6)return;let ee=de(V,k),ie=k.source;t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+q);let me=n.get(ie);if(ie.version!==me.__version||ee===!0){t.activeTexture(i.TEXTURE0+q);let ge=at.getPrimaries(at.workingColorSpace),re=k.colorSpace===fi?null:at.getPrimaries(k.colorSpace),ae=k.colorSpace===fi||ge===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,k.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,k.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let _e=k.isCompressedTexture||k.image[0].isCompressedTexture,Ne=k.image[0]&&k.image[0].isDataTexture,ye=[];for(let he=0;he<6;he++)!_e&&!Ne?ye[he]=m(k.image[he],!0,r.maxCubemapSize):ye[he]=Ne?k.image[he].image:k.image[he],ye[he]=Jt(k,ye[he]);let be=ye[0],ze=o.convert(k.format,k.colorSpace),We=o.convert(k.type),je=b(k.internalFormat,ze,We,k.normalized,k.colorSpace),K=k.isVideoTexture!==!0,ve=me.__version===void 0||ee===!0,se=ie.dataReady,xe=M(k,be);ne(i.TEXTURE_CUBE_MAP,k);let Te;if(_e){K&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,je,be.width,be.height);for(let he=0;he<6;he++){Te=ye[he].mipmaps;for(let Be=0;Be<Te.length;Be++){let Ie=Te[Be];k.format!==Rn?ze!==null?K?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,Ie.width,Ie.height,ze,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,je,Ie.width,Ie.height,0,Ie.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,Ie.width,Ie.height,ze,We,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,je,Ie.width,Ie.height,0,ze,We,Ie.data)}}}else{if(Te=k.mipmaps,K&&ve){Te.length>0&&xe++;let he=gt(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,je,he.width,he.height)}for(let he=0;he<6;he++)if(Ne){K?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ye[he].width,ye[he].height,ze,We,ye[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,je,ye[he].width,ye[he].height,0,ze,We,ye[he].data);for(let Be=0;Be<Te.length;Be++){let Mt=Te[Be].image[he].image;K?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,Mt.width,Mt.height,ze,We,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,je,Mt.width,Mt.height,0,ze,We,Mt.data)}}else{K?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ze,We,ye[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,je,ze,We,ye[he]);for(let Be=0;Be<Te.length;Be++){let Ie=Te[Be];K?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,ze,We,Ie.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,je,ze,We,Ie.image[he])}}}_(k)&&x(i.TEXTURE_CUBE_MAP),me.__version=ie.version,k.onUpdate&&k.onUpdate(k)}V.__version=k.version}function le(V,k,q,ee,ie,me){let ge=o.convert(q.format,q.colorSpace),re=o.convert(q.type),ae=b(q.internalFormat,ge,re,q.normalized,q.colorSpace),_e=n.get(k),Ne=n.get(q);if(Ne.__renderTarget=k,!_e.__hasExternalTextures){let ye=Math.max(1,k.width>>me),be=Math.max(1,k.height>>me);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,me,ae,ye,be,k.depth,0,ge,re,null):t.texImage2D(ie,me,ae,ye,be,0,ge,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,V),zt(k)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,ie,Ne.__webglTexture,0,bt(k)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,ie,Ne.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(V,k,q){if(i.bindRenderbuffer(i.RENDERBUFFER,V),k.depthBuffer){let ee=k.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,me=y(k.stencilBuffer,ie),ge=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;zt(k)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(k),me,k.width,k.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(k),me,k.width,k.height):i.renderbufferStorage(i.RENDERBUFFER,me,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,V)}else{let ee=k.textures;for(let ie=0;ie<ee.length;ie++){let me=ee[ie],ge=o.convert(me.format,me.colorSpace),re=o.convert(me.type),ae=b(me.internalFormat,ge,re,me.normalized,me.colorSpace);zt(k)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(k),ae,k.width,k.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(k),ae,k.width,k.height):i.renderbufferStorage(i.RENDERBUFFER,ae,k.width,k.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(V,k,q){let ee=k.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,V),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(k.depthTexture);if(ie.__renderTarget=k,(!ie.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)&&(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),ee){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,k.depthTexture.addEventListener("dispose",E)),ie.__webglTexture===void 0){ie.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),ne(i.TEXTURE_CUBE_MAP,k.depthTexture);let _e=o.convert(k.depthTexture.format),Ne=o.convert(k.depthTexture.type),ye;k.depthTexture.format===Zn?ye=i.DEPTH_COMPONENT24:k.depthTexture.format===Bi&&(ye=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ye,k.width,k.height,0,_e,Ne,null)}}else B(k.depthTexture,0);let me=ie.__webglTexture,ge=bt(k),re=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,ae=k.depthTexture.format===Bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(k.depthTexture.format===Zn)zt(k)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,re,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,ae,re,me,0);else if(k.depthTexture.format===Bi)zt(k)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,re,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,ae,re,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function De(V){let k=n.get(V),q=V.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==V.depthTexture){let ee=V.depthTexture;if(k.__depthDisposeCallback&&k.__depthDisposeCallback(),ee){let ie=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),k.__depthDisposeCallback=ie}k.__boundDepthTexture=ee}if(V.depthTexture&&!k.__autoAllocateDepthBuffer)if(q)for(let ee=0;ee<6;ee++)Ue(k.__webglFramebuffer[ee],V,ee);else{let ee=V.texture.mipmaps;ee&&ee.length>0?Ue(k.__webglFramebuffer[0],V,0):Ue(k.__webglFramebuffer,V,0)}else if(q){k.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer[ee]),k.__webglDepthbuffer[ee]===void 0)k.__webglDepthbuffer[ee]=i.createRenderbuffer(),pe(k.__webglDepthbuffer[ee],V,!1);else{let ie=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=k.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,me)}}else{let ee=V.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=i.createRenderbuffer(),pe(k.__webglDepthbuffer,V,!1);else{let ie=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=k.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(V,k,q){let ee=n.get(V);k!==void 0&&le(ee.__webglFramebuffer,V,V.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&De(V)}function Ze(V){let k=V.texture,q=n.get(V),ee=n.get(k);V.addEventListener("dispose",v);let ie=V.textures,me=V.isWebGLCubeRenderTarget===!0,ge=ie.length>1;if(ge||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=k.version,s.memory.textures++),me){q.__webglFramebuffer=[];for(let re=0;re<6;re++)if(k.mipmaps&&k.mipmaps.length>0){q.__webglFramebuffer[re]=[];for(let ae=0;ae<k.mipmaps.length;ae++)q.__webglFramebuffer[re][ae]=i.createFramebuffer()}else q.__webglFramebuffer[re]=i.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){q.__webglFramebuffer=[];for(let re=0;re<k.mipmaps.length;re++)q.__webglFramebuffer[re]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ge)for(let re=0,ae=ie.length;re<ae;re++){let _e=n.get(ie[re]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),s.memory.textures++)}if(V.samples>0&&zt(V)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let re=0;re<ie.length;re++){let ae=ie[re];q.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[re]);let _e=o.convert(ae.format,ae.colorSpace),Ne=o.convert(ae.type),ye=b(ae.internalFormat,_e,Ne,ae.normalized,ae.colorSpace,V.isXRRenderTarget===!0),be=bt(V);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ye,V.width,V.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,q.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),V.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(q.__webglDepthRenderbuffer,V,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),ne(i.TEXTURE_CUBE_MAP,k);for(let re=0;re<6;re++)if(k.mipmaps&&k.mipmaps.length>0)for(let ae=0;ae<k.mipmaps.length;ae++)le(q.__webglFramebuffer[re][ae],V,k,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae);else le(q.__webglFramebuffer[re],V,k,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);_(k)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let re=0,ae=ie.length;re<ae;re++){let _e=ie[re],Ne=n.get(_e),ye=i.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(ye=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Ne.__webglTexture),ne(ye,_e),le(q.__webglFramebuffer,V,_e,i.COLOR_ATTACHMENT0+re,ye,0),_(_e)&&x(ye)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(re=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,ee.__webglTexture),ne(re,k),k.mipmaps&&k.mipmaps.length>0)for(let ae=0;ae<k.mipmaps.length;ae++)le(q.__webglFramebuffer[ae],V,k,i.COLOR_ATTACHMENT0,re,ae);else le(q.__webglFramebuffer,V,k,i.COLOR_ATTACHMENT0,re,0);_(k)&&x(re),t.unbindTexture()}V.depthBuffer&&De(V)}function Ke(V){let k=V.textures;for(let q=0,ee=k.length;q<ee;q++){let ie=k[q];if(_(ie)){let me=w(V),ge=n.get(ie).__webglTexture;t.bindTexture(me,ge),x(me),t.unbindTexture()}}}let _t=[],kt=[];function Kt(V){if(V.samples>0){if(zt(V)===!1){let k=V.textures,q=V.width,ee=V.height,ie=i.COLOR_BUFFER_BIT,me=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(V),re=k.length>1;if(re)for(let _e=0;_e<k.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let ae=V.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let _e=0;_e<k.length;_e++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let Ne=n.get(k[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,q,ee,0,0,q,ee,ie,i.NEAREST),l===!0&&(_t.length=0,kt.length=0,_t.push(i.COLOR_ATTACHMENT0+_e),V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&(_t.push(me),kt.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let _e=0;_e<k.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let Ne=n.get(k[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&l){let k=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[k])}}}function bt(V){return Math.min(r.maxSamples,V.samples)}function zt(V){let k=n.get(V);return V.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function Y(V){let k=s.render.frame;u.get(V)!==k&&(u.set(V,k),V.update())}function Jt(V,k){let q=V.colorSpace,ee=V.format,ie=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||q!==Do&&q!==fi&&(at.getTransfer(q)===pt?(ee!==Rn||ie!==yn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",q)),k}function gt(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(c.width=V.naturalWidth||V.width,c.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(c.width=V.displayWidth,c.height=V.displayHeight):(c.width=V.width,c.height=V.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=P,this.getTextureUnits=R,this.setTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=N,this.setTexture3D=O,this.setTextureCube=G,this.rebindTextures=Fe,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=le,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function jy(i,e){function t(n,r=fi){let o,s=at.getTransfer(r);if(n===yn)return i.UNSIGNED_BYTE;if(n===pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gu)return i.BYTE;if(n===Hu)return i.SHORT;if(n===ro)return i.UNSIGNED_SHORT;if(n===fl)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===Ku)return i.ALPHA;if(n===Yu)return i.RGB;if(n===Rn)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===qu)return i.RED;if(n===gl)return i.RED_INTEGER;if(n===Oi)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===cs||n===us||n===hs||n===ds)if(s===pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===cs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===cs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===us)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ds)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===xl||n===yl||n===wl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===vl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===Sl||n===Tl||n===Al||n===El||n===fs||n===Rl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ml||n===Sl)return s===pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Tl)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Al)return o.COMPRESSED_R11_EAC;if(n===El)return o.COMPRESSED_SIGNED_R11_EAC;if(n===fs)return o.COMPRESSED_RG11_EAC;if(n===Rl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pl||n===kl||n===Cl||n===Il||n===Ll||n===Fl||n===Dl||n===Nl||n===zl||n===Bl||n===Ol||n===Ul||n===Vl||n===Gl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Pl)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kl)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cl)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nl)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ol)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gl)return s===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hl||n===Wl||n===Xl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Hl)return s===pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kl||n===Yl||n===ps||n===ql)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Kl)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Yl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ps)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ql)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Qy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ew=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ho(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new on({vertexShader:Qy,fragmentShader:ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends $n{constructor(e,t){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,g=typeof XRWebGLBinding<"u",m=new wh,_={},x=t.getContextAttributes(),w=null,b=null,y=[],M=[],E=new Ee,v=null,S=null,T=new tn;T.viewport=new It;let A=new tn;A.viewport=new It;let C=[T,A],P=new ll,R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=y[H];return X===void 0&&(X=new Jr,y[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=y[H];return X===void 0&&(X=new Jr,y[H]=X),X.getGripSpace()},this.getHand=function(H){let X=y[H];return X===void 0&&(X=new Jr,y[H]=X),X.getHandSpace()};function F(H){let X=M.indexOf(H.inputSource);if(X===-1)return;let oe=y[X];oe!==void 0&&(oe.update(H.inputSource,H.frame,c||s),oe.dispatchEvent({type:H.type,data:H.inputSource}))}function z(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",B);for(let H=0;H<y.length;H++){let X=M[H];X!==null&&(M[H]=null,y[H].disconnect(X))}R=null,I=null,m.reset();for(let H in _)delete _[H];if(e.setRenderTarget(w),f=null,d=null,h=null,r=null,b=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(E.width,E.height,!1),S!==null){let H=S.camera;H.fov=S.fov,H.zoom=S.zoom,H.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",z),r.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,ce=null,le=null;x.depth&&(le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=x.stencil?Bi:Zn,ce=x.stencil?oo:Un);let pe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:o};h=this.getBinding(),d=h.createProjectionLayer(pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new rn(d.textureWidth,d.textureHeight,{format:Rn,type:yn,depthTexture:new Pi(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let oe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new rn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(H){for(let X=0;X<H.removed.length;X++){let oe=H.removed[X],ce=M.indexOf(oe);ce>=0&&(M[ce]=null,y[ce].disconnect(oe))}for(let X=0;X<H.added.length;X++){let oe=H.added[X],ce=M.indexOf(oe);if(ce===-1){for(let pe=0;pe<y.length;pe++)if(pe>=M.length){M.push(oe),ce=pe;break}else if(M[pe]===null){M[pe]=oe,ce=pe;break}if(ce===-1)break}let le=y[ce];le&&le.connect(oe)}}let N=new U,O=new U;function G(H,X,oe){N.setFromMatrixPosition(X.matrixWorld),O.setFromMatrixPosition(oe.matrixWorld);let ce=N.distanceTo(O),le=X.projectionMatrix.elements,pe=oe.projectionMatrix.elements,Ue=le[14]/(le[10]-1),De=le[14]/(le[10]+1),Fe=(le[9]+1)/le[5],Ze=(le[9]-1)/le[5],Ke=(le[8]-1)/le[0],_t=(pe[8]+1)/pe[0],kt=Ue*Ke,Kt=Ue*_t,bt=ce/(-Ke+_t),zt=bt*-Ke;if(X.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(zt),H.translateZ(bt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),le[10]===-1)H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let Y=Ue+bt,Jt=De+bt,gt=kt-zt,V=Kt+(ce-zt),k=Fe*De/Jt*Y,q=Ze*De/Jt*Y;H.projectionMatrix.makePerspective(gt,V,k,q,Y,Jt),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function J(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let X=H.near,oe=H.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),P.near=A.near=T.near=X,P.far=A.far=T.far=oe,(R!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),R=P.near,I=P.far),P.layers.mask=H.layers.mask|6,T.layers.mask=P.layers.mask&-5,A.layers.mask=P.layers.mask&-3;let ce=H.parent,le=P.cameras;J(P,ce);for(let pe=0;pe<le.length;pe++)J(le[pe],ce);le.length===2?G(P,T,A):P.projectionMatrix.copy(T.projectionMatrix),S===null&&H.isPerspectiveCamera&&(S={camera:H,fov:H.fov,zoom:H.zoom}),j(H,P,ce)};function j(H,X,oe){oe===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(oe.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ia*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(H){return _[H]};let ue=null;function ne(H,X){if(u=X.getViewerPose(c||s),p=X,u!==null){let oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ce=!1;oe.length!==P.cameras.length&&(P.cameras.length=0,ce=!0);for(let De=0;De<oe.length;De++){let Fe=oe[De],Ze=null;if(f!==null)Ze=f.getViewport(Fe);else{let _t=h.getViewSubImage(d,Fe);Ze=_t.viewport,De===0&&(e.setRenderTargetTextures(b,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(b))}let Ke=C[De];Ke===void 0&&(Ke=new tn,Ke.layers.enable(De),Ke.viewport=new It,C[De]=Ke),Ke.matrix.fromArray(Fe.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Fe.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),De===0&&(P.matrix.copy(Ke.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ce===!0&&P.cameras.push(Ke)}let le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=n.getBinding();let De=h.getDepthInformation(oe[0]);De&&De.isValid&&De.texture&&m.init(De,r.renderState)}if(le&&le.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let De=0;De<oe.length;De++){let Fe=oe[De].camera;if(Fe){let Ze=_[Fe];Ze||(Ze=new Ho,_[Fe]=Ze);let Ke=h.getCameraImage(Fe);Ze.sourceTexture=Ke}}}}for(let oe=0;oe<y.length;oe++){let ce=M[oe],le=y[oe];ce!==null&&le!==void 0&&le.update(ce,X,c||s)}ue&&ue(H,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),p=null}let de=new Tp;de.setAnimationLoop(ne),this.setAnimationLoop=function(H){ue=H},this.dispose=function(){}}},tw=new Et,Cp=new $e;Cp.set(-1,0,0,0,1,0,0,0,1);function nw(i,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,eh(i)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function r(m,_,x,w,b){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?o(m,_):_.isMeshLambertMaterial?(o(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(o(m,_),h(m,_)):_.isMeshPhongMaterial?(o(m,_),u(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(o(m,_),d(m,_),_.isMeshPhysicalMaterial&&f(m,_,b)):_.isMeshMatcapMaterial?(o(m,_),p(m,_)):_.isMeshDepthMaterial?o(m,_):_.isMeshDistanceMaterial?(o(m,_),g(m,_)):_.isMeshNormalMaterial?o(m,_):_.isLineBasicMaterial?(s(m,_),_.isLineDashedMaterial&&a(m,_)):_.isPointsMaterial?l(m,_,x,w):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===un&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===un&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);let x=e.get(_),w=x.envMap,b=x.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(tw.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cp),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function s(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function a(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,x,w){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*x,m.scale.value=w*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function u(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function h(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function d(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function f(m,_,x){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===un&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function g(m,_){let x=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function iw(i,e,t,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){let M=y.program;n.uniformBlockBinding(b,M)}function c(b,y){let M=r[b.id];M===void 0&&(m(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",x));let E=y.program;n.updateUBOMapping(b,E);let v=e.render.frame;o[b.id]!==v&&(d(b),o[b.id]=v)}function u(b){let y=h();b.__bindingPointIndex=y;let M=i.createBuffer(),E=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,E,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function h(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let y=r[b.id],M=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let v=0,S=M.length;v<S;v++){let T=M[v];if(Array.isArray(T))for(let A=0,C=T.length;A<C;A++)f(T[A],v,A,E);else f(T,v,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,y,M,E){if(g(b,y,M,E)===!0){let v=b.__offset,S=b.value;if(Array.isArray(S)){let T=0;for(let A=0;A<S.length;A++){let C=S[A],P=_(C);p(C,b.__data,T),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(T+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(S,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function p(b,y,M){typeof b=="number"||typeof b=="boolean"?y[0]=b:b.isMatrix3?(y[0]=b.elements[0],y[1]=b.elements[1],y[2]=b.elements[2],y[3]=0,y[4]=b.elements[3],y[5]=b.elements[4],y[6]=b.elements[5],y[7]=0,y[8]=b.elements[6],y[9]=b.elements[7],y[10]=b.elements[8],y[11]=0):ArrayBuffer.isView(b)?y.set(new b.constructor(b.buffer,b.byteOffset,y.length)):b.toArray(y,M)}function g(b,y,M,E){let v=b.value,S=y+"_"+M;if(E[S]===void 0)return typeof v=="number"||typeof v=="boolean"?E[S]=v:ArrayBuffer.isView(v)?E[S]=v.slice():E[S]=v.clone(),!0;{let T=E[S];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return E[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(b){let y=b.uniforms,M=0,E=16;for(let S=0,T=y.length;S<T;S++){let A=Array.isArray(y[S])?y[S]:[y[S]];for(let C=0,P=A.length;C<P;C++){let R=A[C],I=Array.isArray(R.value)?R.value:[R.value];for(let F=0,z=I.length;F<z;F++){let B=I[F],N=_(B),O=M%E,G=O%N.boundary,J=O+G;M+=G,J!==0&&E-J<N.storage&&(M+=E-J),R.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=M,M+=N.storage}}}let v=M%E;return v>0&&(M+=E-v),b.__size=M,b.__cache={},this}function _(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",b),y}function x(b){let y=b.target;y.removeEventListener("dispose",x);let M=s.indexOf(y.__bindingPointIndex);s.splice(M,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function w(){for(let b in r)i.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:w}}var rw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function ow(){return ei===null&&(ei=new Na(rw,16,16,Oi,Gn),ei.name="DFG_LUT",ei.minFilter=Yt,ei.magFilter=Yt,ei.wrapS=vn,ei.wrapT=vn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var gr=class{constructor(e={}){let{canvas:t=Kf(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=yn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let g=f,m=new Set([bl,_l,gl]),_=new Set([yn,Un,ro,oo,pl,ml]),x=new Uint32Array(4),w=new Int32Array(4),b=new U,y=null,M=null,E=[],v=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,A=!1,C=null,P=null,R=null,I=null;this._outputColorSpace=Dt;let F=0,z=0,B=null,N=-1,O=null,G=new It,J=new It,j=null,ue=new Q(0),ne=0,de=t.width,H=t.height,X=1,oe=null,ce=null,le=new It(0,0,de,H),pe=new It(0,0,de,H),Ue=!1,De=new Vo,Fe=!1,Ze=!1,Ke=new Et,_t=new U,kt=new It,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bt=!1;function zt(){return B===null?X:1}let Y=n;function Jt(L,W){return t.getContext(L,W)}let gt,V,k,q,ee,ie,me,ge,re,ae,_e,Ne,ye,be,ze,We,je,K,ve,se,xe,Te,he;try{let L={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Cn,!1),Y===null){let W="webgl2";if(Y=Jt(W,L),Y===null)throw Jt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(L){throw t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Cn,!1),Ye("WebGLRenderer: "+L.message),L}function Be(){gt=new dx(Y),gt.init(),xe=new jy(Y,gt),V=new nx(Y,gt,e,xe),k=new $y(Y,gt),V.reversedDepthBuffer&&d&&k.buffers.depth.setReversed(!0),P=Y.createFramebuffer(),R=Y.createFramebuffer(),I=Y.createFramebuffer(),q=new mx(Y),ee=new Ny,ie=new Jy(Y,gt,k,ee,V,xe,q),me=new hx(T),ge=new __(Y),Te=new ex(Y,ge),re=new fx(Y,ge,q,Te),ae=new _x(Y,re,ge,Te,q),K=new gx(Y,V,ie),ze=new ix(ee),_e=new Dy(T,me,gt,V,Te,ze),Ne=new nw(T,ee),ye=new By,be=new Wy(gt),je=new Qv(T,me,k,ae,p,l),We=new Zy(T,ae,V),he=new iw(Y,q,V,k),ve=new tx(Y,gt,q),se=new px(Y,gt,q),q.programs=_e.programs,T.capabilities=V,T.extensions=gt,T.properties=ee,T.renderLists=ye,T.shadowMap=We,T.state=k,T.info=q}g!==yn&&(S=new vx(g,t.width,t.height,a,r,o));let Ie=new Mh(T,Y);this.xr=Ie,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let L=gt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=gt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(L){L!==void 0&&(X=L,this.setSize(de,H,!1))},this.getSize=function(L){return L.set(de,H)},this.setSize=function(L,W,te=!0){if(Ie.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}de=L,H=W,t.width=Math.floor(L*X),t.height=Math.floor(W*X),te===!0&&(t.style.width=L+"px",t.style.height=W+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set(de*X,H*X).floor()},this.setDrawingBufferSize=function(L,W,te){de=L,H=W,X=te,t.width=Math.floor(L*te),t.height=Math.floor(W*te),this.setViewport(0,0,L,W)},this.setEffects=function(L){if(g===yn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let W=0;W<L.length;W++)if(L[W].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(G)},this.getViewport=function(L){return L.copy(le)},this.setViewport=function(L,W,te,Z){L.isVector4?le.set(L.x,L.y,L.z,L.w):le.set(L,W,te,Z),k.viewport(G.copy(le).multiplyScalar(X).round())},this.getScissor=function(L){return L.copy(pe)},this.setScissor=function(L,W,te,Z){L.isVector4?pe.set(L.x,L.y,L.z,L.w):pe.set(L,W,te,Z),k.scissor(J.copy(pe).multiplyScalar(X).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(L){k.setScissorTest(Ue=L)},this.setOpaqueSort=function(L){oe=L},this.setTransparentSort=function(L){ce=L},this.getClearColor=function(L){return L.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(L=!0,W=!0,te=!0){let Z=0;if(L){let $=!1;if(B!==null){let Se=B.texture.format;$=m.has(Se)}if($){let Se=B.texture.type,Pe=_.has(Se),Me=je.getClearColor(),ke=je.getClearAlpha(),Le=Me.r,et=Me.g,ot=Me.b;Pe?(x[0]=Le,x[1]=et,x[2]=ot,x[3]=ke,Y.clearBufferuiv(Y.COLOR,0,x)):(w[0]=Le,w[1]=et,w[2]=ot,w[3]=ke,Y.clearBufferiv(Y.COLOR,0,w))}else Z|=Y.COLOR_BUFFER_BIT}W&&(Z|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Z|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&Y.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),C=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Cn,!1),je.dispose(),ye.dispose(),be.dispose(),ee.dispose(),me.dispose(),ae.dispose(),Te.dispose(),he.dispose(),_e.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",wd),Ie.removeEventListener("sessionend",Md),tr.stop()};function Mt(L){L.preventDefault(),ju("WebGLRenderer: Context Lost."),A=!0}function dt(){ju("WebGLRenderer: Context Restored."),A=!1;let L=q.autoReset,W=We.enabled,te=We.autoUpdate,Z=We.needsUpdate,$=We.type;Be(),q.autoReset=L,We.enabled=W,We.autoUpdate=te,We.needsUpdate=Z,We.type=$}function Cn(L){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Kn(L){let W=L.target;W.removeEventListener("dispose",Kn),ig(W)}function ig(L){rg(L),ee.remove(L)}function rg(L){let W=ee.get(L).programs;W!==void 0&&(W.forEach(function(te){_e.releaseProgram(te)}),L.isShaderMaterial&&_e.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,te,Z,$,Se){W===null&&(W=Kt);let Pe=$.isMesh&&$.matrixWorld.determinantAffine()<0,Me=ag(L,W,te,Z,$);k.setMaterial(Z,Pe);let ke=te.index,Le=1;if(Z.wireframe===!0){if(ke=re.getWireframeAttribute(te),ke===void 0)return;Le=2}let et=te.drawRange,ot=te.attributes.position,Ce=et.start*Le,ft=(et.start+et.count)*Le;Se!==null&&(Ce=Math.max(Ce,Se.start*Le),ft=Math.min(ft,(Se.start+Se.count)*Le)),ke!==null?(Ce=Math.max(Ce,0),ft=Math.min(ft,ke.count)):ot!=null&&(Ce=Math.max(Ce,0),ft=Math.min(ft,ot.count));let Bt=ft-Ce;if(Bt<0||Bt===1/0)return;Te.setup($,Z,Me,te,ke);let Tt,xt=ve;if(ke!==null&&(Tt=ge.get(ke),xt=se,xt.setIndex(Tt)),$.isMesh)Z.wireframe===!0?(k.setLineWidth(Z.wireframeLinewidth*zt()),xt.setMode(Y.LINES)):xt.setMode(Y.TRIANGLES);else if($.isLine){let jt=Z.linewidth;jt===void 0&&(jt=1),k.setLineWidth(jt*zt()),$.isLineSegments?xt.setMode(Y.LINES):$.isLineLoop?xt.setMode(Y.LINE_LOOP):xt.setMode(Y.LINE_STRIP)}else $.isPoints?xt.setMode(Y.POINTS):$.isSprite&&xt.setMode(Y.TRIANGLES);if($.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))xt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let jt=$._multiDrawStarts,Re=$._multiDrawCounts,ln=$._multiDrawCount,ct=ke?ge.get(ke).bytesPerElement:1,Sn=ee.get(Z).currentProgram.getUniforms();for(let Yn=0;Yn<ln;Yn++)Sn.setValue(Y,"_gl_DrawID",Yn),xt.render(jt[Yn]/ct,Re[Yn])}else if($.isInstancedMesh)xt.renderInstances(Ce,Bt,$.count);else if(te.isInstancedBufferGeometry){let jt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Re=Math.min(te.instanceCount,jt);xt.renderInstances(Ce,Bt,Re)}else xt.render(Ce,Bt)};function yd(L,W,te,Z){C!==null&&L.isNodeMaterial&&C.setObject(Z,L),Fe===!0&&ze.setState(L,te,!1),L.transparent===!0&&L.side===lt&&L.forceSinglePass===!1?(L.side=un,L.needsUpdate=!0,qs(L,W,Z),L.side=Fi,L.needsUpdate=!0,qs(L,W,Z),L.side=lt):qs(L,W,Z)}this.compile=function(L,W,te=null){te===null&&(te=L),C!==null&&C.renderStart(L,W,te),M=be.get(te),M.init(W),v.push(M),te.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),L!==te&&L.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),M.setupLights(),C!==null&&C.updateLights(M.state.lightsArray),Ze=this.localClippingEnabled,Fe=ze.init(this.clippingPlanes,Ze),Fe===!0&&ze.setGlobalState(this.clippingPlanes,W),C!==null&&We.render(M.state.shadowsArray,te,W);let Z=new Set;return L.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Se=$.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){let Me=Se[Pe];yd(Me,te,W,$),Z.add(Me)}else yd(Se,te,W,$),Z.add(Se)}),M=v.pop(),C!==null&&C.renderEnd(),Z},this.compileAsync=function(L,W,te=null){let Z=this.compile(L,W,te);return new Promise($=>{function Se(){if(Z.forEach(function(Pe){let ke=ee.get(Pe).currentProgram;(ke===void 0||ke.isReady())&&Z.delete(Pe)}),Z.size===0){$(L);return}setTimeout(Se,10)}gt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Wc=null;function og(L){Wc&&Wc(L)}function wd(){tr.stop()}function Md(){tr.start()}let tr=new Tp;tr.setAnimationLoop(og),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(L){Wc=L,Ie.setAnimationLoop(L),L===null?tr.stop():tr.start()},Ie.addEventListener("sessionstart",wd),Ie.addEventListener("sessionend",Md),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;C!==null&&C.renderStart(L,W);let te=Ie.enabled===!0&&Ie.isPresenting===!0,Z=S!==null&&(B===null||te)&&S.begin(T,B);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(W),W=Ie.getCamera()),L.isScene===!0&&L.onBeforeRender(T,L,W,B),M=be.get(L,v.length),M.init(W),M.state.textureUnits=ie.getTextureUnits(),v.push(M),Ke.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),De.setFromProjectionMatrix(Ke,Dn,W.reversedDepth),Ze=this.localClippingEnabled,Fe=ze.init(this.clippingPlanes,Ze),y=ye.get(L,E.length),y.init(),E.push(y),Ie.enabled===!0&&Ie.isPresenting===!0){let Pe=T.xr.getDepthSensingMesh();Pe!==null&&Xc(Pe,W,-1/0,T.sortObjects)}Xc(L,W,0,T.sortObjects),y.finish(),C!==null&&C.updateLights(M.state.lightsArray),T.sortObjects===!0&&y.sort(oe,ce),bt=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,bt&&je.addToRenderList(y,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Fe===!0&&ze.beginShadows();let $=M.state.shadowsArray;if(We.render($,L,W),Fe===!0&&ze.endShadows(),(Z&&S.hasRenderPass())===!1){let Pe=y.opaque,Me=y.transmissive;if(M.setupLights(),W.isArrayCamera){let ke=W.cameras;if(Me.length>0)for(let Le=0,et=ke.length;Le<et;Le++){let ot=ke[Le];Td(Pe,Me,L,ot)}bt&&je.render(L);for(let Le=0,et=ke.length;Le<et;Le++){let ot=ke[Le];Sd(y,L,ot,ot.viewport)}}else Me.length>0&&Td(Pe,Me,L,W),bt&&je.render(L),Sd(y,L,W)}B!==null&&z===0&&(ie.updateMultisampleRenderTarget(B),ie.updateRenderTargetMipmap(B)),Z&&S.end(T),L.isScene===!0&&L.onAfterRender(T,L,W),Te.resetDefaultState(),N=-1,O=null,v.pop(),v.length>0?(M=v[v.length-1],ie.setTextureUnits(M.state.textureUnits),Fe===!0&&ze.setGlobalState(T.clippingPlanes,M.state.camera)):M=null,E.pop(),E.length>0?y=E[E.length-1]:y=null,C!==null&&C.renderEnd()};function Xc(L,W,te,Z){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)te=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLightProbeGrid)M.pushLightProbeGrid(L);else if(L.isLight)M.pushLight(L),L.castShadow&&M.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(De)){Z&&kt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ke);let Pe=ae.update(L),Me=L.material;Me.visible&&y.push(L,Pe,Me,te,kt.z,null,W)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(De))){let Pe=ae.update(L),Me=L.material;if(Z&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),kt.copy(L.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),kt.copy(Pe.boundingSphere.center)),kt.applyMatrix4(L.matrixWorld).applyMatrix4(Ke)),Array.isArray(Me)){let ke=Pe.groups;for(let Le=0,et=ke.length;Le<et;Le++){let ot=ke[Le],Ce=Me[ot.materialIndex];Ce&&Ce.visible&&y.push(L,Pe,Ce,te,kt.z,ot,W)}}else Me.visible&&y.push(L,Pe,Me,te,kt.z,null,W)}}let Se=L.children;for(let Pe=0,Me=Se.length;Pe<Me;Pe++)Xc(Se[Pe],W,te,Z)}function Sd(L,W,te,Z){let{opaque:$,transmissive:Se,transparent:Pe}=L;M.setupLightsView(te),Fe===!0&&ze.setGlobalState(T.clippingPlanes,te),Z&&k.viewport(G.copy(Z)),$.length>0&&Ys($,W,te),Se.length>0&&Ys(Se,W,te),Pe.length>0&&Ys(Pe,W,te),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Td(L,W,te,Z){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Z.id]===void 0){let Ce=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Z.id]=new rn(1,1,{generateMipmaps:!0,type:Ce?Gn:yn,minFilter:zi,samples:Math.max(4,V.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let Se=M.state.transmissionRenderTarget[Z.id],Pe=Z.viewport||G;Se.setSize(Pe.z*T.transmissionResolutionScale,Pe.w*T.transmissionResolutionScale);let Me=T.getRenderTarget(),ke=T.getActiveCubeFace(),Le=T.getActiveMipmapLevel();T.setRenderTarget(Se),T.getClearColor(ue),ne=T.getClearAlpha(),ne<1&&T.setClearColor(16777215,.5),T.clear(),bt&&je.render(te);let et=T.toneMapping;T.toneMapping=On;let ot=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),M.setupLightsView(Z),Fe===!0&&ze.setGlobalState(T.clippingPlanes,Z),Ys(L,te,Z),ie.updateMultisampleRenderTarget(Se),ie.updateRenderTargetMipmap(Se),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ft=0,Bt=W.length;ft<Bt;ft++){let Tt=W[ft],{object:xt,geometry:jt,material:Re,group:ln}=Tt;if(Re.side===lt&&xt.layers.test(Z.layers)){let ct=Re.side;Re.side=un,Re.needsUpdate=!0,Ad(xt,te,Z,jt,Re,ln),Re.side=ct,Re.needsUpdate=!0,Ce=!0}}Ce===!0&&(ie.updateMultisampleRenderTarget(Se),ie.updateRenderTargetMipmap(Se))}T.setRenderTarget(Me,ke,Le),T.setClearColor(ue,ne),ot!==void 0&&(Z.viewport=ot),T.toneMapping=et}function Ys(L,W,te){let Z=W.isScene===!0?W.overrideMaterial:null;for(let $=0,Se=L.length;$<Se;$++){let Pe=L[$],{object:Me,geometry:ke,group:Le}=Pe,et=Pe.material;et.allowOverride===!0&&Z!==null&&(et=Z),Me.layers.test(te.layers)&&Ad(Me,W,te,ke,et,Le)}}function Ad(L,W,te,Z,$,Se){C!==null&&$.isNodeMaterial&&C.setObject(L,$),L.onBeforeRender(T,W,te,Z,$,Se),L.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),$.onBeforeRender(T,W,te,Z,L,Se),$.transparent===!0&&$.side===lt&&$.forceSinglePass===!1?($.side=un,$.needsUpdate=!0,T.renderBufferDirect(te,W,Z,$,L,Se),$.side=Fi,$.needsUpdate=!0,T.renderBufferDirect(te,W,Z,$,L,Se),$.side=lt):T.renderBufferDirect(te,W,Z,$,L,Se),L.onAfterRender(T,W,te,Z,$,Se)}function qs(L,W,te){W.isScene!==!0&&(W=Kt);let Z=ee.get(L),$=M.state.lights,Se=M.state.shadowsArray,Pe=$.state.version,Me=_e.getParameters(L,$.state,Se,W,te,M.state.lightProbeGridArray),ke=_e.getProgramCacheKey(Me),Le=Z.programs;Z.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?W.environment:null,Z.fog=W.fog;let et=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;Z.envMap=me.get(L.envMap||Z.environment,et),Z.envMapRotation=Z.environment!==null&&L.envMap===null?W.environmentRotation:L.envMapRotation,Le===void 0&&(L.addEventListener("dispose",Kn),Le=new Map,Z.programs=Le);let ot=Le.get(ke);if(ot!==void 0){if(Z.currentProgram===ot&&Z.lightsStateVersion===Pe)return Rd(L,Me),ot}else Me.uniforms=_e.getUniforms(L),C!==null&&L.isNodeMaterial&&C.build(L,te,Me),L.onBeforeCompile(Me,T),ot=_e.acquireProgram(Me,ke),Le.set(ke,ot),Z.uniforms=Me.uniforms;let Ce=Z.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ce.clippingPlanes=ze.uniform),Rd(L,Me),Z.needsLights=cg(L),Z.lightsStateVersion=Pe,Z.needsLights&&(Ce.ambientLightColor.value=$.state.ambient,Ce.lightProbe.value=$.state.probe,Ce.sunLights.value=$.state.sun,Ce.sunLightShadows.value=$.state.sunShadow,Ce.directionalLights.value=$.state.directional,Ce.directionalLightShadows.value=$.state.directionalShadow,Ce.spotLights.value=$.state.spot,Ce.spotLightShadows.value=$.state.spotShadow,Ce.rectAreaLights.value=$.state.rectArea,Ce.ltc_1.value=$.state.rectAreaLTC1,Ce.ltc_2.value=$.state.rectAreaLTC2,Ce.pointLights.value=$.state.point,Ce.pointLightShadows.value=$.state.pointShadow,Ce.hemisphereLights.value=$.state.hemi,Ce.sunShadowMatrix.value=$.state.sunShadowMatrix,Ce.sunShadowCascade.value=$.state.sunShadowCascade,Ce.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ce.spotLightMatrix.value=$.state.spotLightMatrix,Ce.spotLightMap.value=$.state.spotLightMap,Ce.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.lightProbeGrid=M.state.lightProbeGridArray.length>0,Z.currentProgram=ot,Z.uniformsList=null,ot}function Ed(L){if(L.uniformsList===null){let W=L.currentProgram.getUniforms();L.uniformsList=lo.seqWithValue(W.seq,L.uniforms)}return L.uniformsList}function Rd(L,W){let te=ee.get(L);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function sg(L,W){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;b.setFromMatrixPosition(W.matrixWorld);for(let te=0,Z=L.length;te<Z;te++){let $=L[te];if($.texture!==null&&$.boundingBox.containsPoint(b))return $}return null}function ag(L,W,te,Z,$){W.isScene!==!0&&(W=Kt),ie.resetTextureUnits();let Se=W.fog,Pe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?W.environment:null,Me=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:at.workingColorSpace,ke=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Le=me.get(Z.envMap||Pe,ke),et=Z.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ot=!!te.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ce=!!te.morphAttributes.position,ft=!!te.morphAttributes.normal,Bt=!!te.morphAttributes.color,Tt=On;Z.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Tt=T.toneMapping);let xt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,jt=xt!==void 0?xt.length:0,Re=ee.get(Z),ln=M.state.lights;if(Fe===!0&&(Ze===!0||L!==O)){let St=L===O&&Z.id===N;ze.setState(Z,L,St)}let ct=!1;Z.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ln.state.version||Re.outputColorSpace!==Me||$.isBatchedMesh&&Re.batching===!1||!$.isBatchedMesh&&Re.batching===!0||$.isBatchedMesh&&Re.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Re.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Re.instancing===!1||!$.isInstancedMesh&&Re.instancing===!0||$.isSkinnedMesh&&Re.skinning===!1||!$.isSkinnedMesh&&Re.skinning===!0||$.isInstancedMesh&&Re.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Re.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Re.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Re.instancingMorph===!1&&$.morphTexture!==null||Re.envMap!==Le||Z.fog===!0&&Re.fog!==Se||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ze.numPlanes||Re.numIntersection!==ze.numIntersection)||Re.vertexAlphas!==et||Re.vertexTangents!==ot||Re.morphTargets!==Ce||Re.morphNormals!==ft||Re.morphColors!==Bt||Re.toneMapping!==Tt||Re.morphTargetsCount!==jt||!!Re.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Re.__version=Z.version);let Sn=Re.currentProgram;ct===!0&&(Sn=qs(Z,W,$),C&&Z.isNodeMaterial&&C.onUpdateProgram(Z,Sn,Re));let Yn=!1,bi=!1,Pr=!1,vt=Sn.getUniforms(),Ft=Re.uniforms;if(k.useProgram(Sn.program)&&(Yn=!0,bi=!0,Pr=!0),Z.id!==N&&(N=Z.id,bi=!0),Re.needsLights){let St=sg(M.state.lightProbeGridArray,$);Re.lightProbeGrid!==St&&(Re.lightProbeGrid=St,bi=!0)}if(Yn||O!==L){k.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),vt.setValue(Y,"projectionMatrix",L.projectionMatrix),vt.setValue(Y,"viewMatrix",L.matrixWorldInverse);let xi=vt.map.cameraPosition;xi!==void 0&&xi.setValue(Y,_t.setFromMatrixPosition(L.matrixWorld)),V.logarithmicDepthBuffer&&vt.setValue(Y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&vt.setValue(Y,"isOrthographic",L.isOrthographicCamera===!0),O!==L&&(O=L,bi=!0,Pr=!0)}if(Re.needsLights&&(ln.state.sunShadowMap.length>0&&vt.setValue(Y,"sunShadowMap",ln.state.sunShadowMap,ie),ln.state.directionalShadowMap.length>0&&vt.setValue(Y,"directionalShadowMap",ln.state.directionalShadowMap,ie),ln.state.spotShadowMap.length>0&&vt.setValue(Y,"spotShadowMap",ln.state.spotShadowMap,ie),ln.state.pointShadowMap.length>0&&vt.setValue(Y,"pointShadowMap",ln.state.pointShadowMap,ie)),$.isSkinnedMesh){vt.setOptional(Y,$,"bindMatrix"),vt.setOptional(Y,$,"bindMatrixInverse");let St=$.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),vt.setValue(Y,"boneTexture",St.boneTexture,ie))}$.isBatchedMesh&&(vt.setOptional(Y,$,"batchingTexture"),vt.setValue(Y,"batchingTexture",$._matricesTexture,ie),vt.setOptional(Y,$,"batchingIdTexture"),vt.setValue(Y,"batchingIdTexture",$._indirectTexture,ie),vt.setOptional(Y,$,"batchingColorTexture"),$._colorsTexture!==null&&vt.setValue(Y,"batchingColorTexture",$._colorsTexture,ie));let vi=te.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&K.update($,te,Sn),(bi||Re.receiveShadow!==$.receiveShadow)&&(Re.receiveShadow=$.receiveShadow,vt.setValue(Y,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&W.environment!==null&&(Ft.envMapIntensity.value=W.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=ow()),bi){if(vt.setValue(Y,"toneMappingExposure",T.toneMappingExposure),Re.needsLights&&lg(Ft,Pr),Se&&Z.fog===!0&&Ne.refreshFogUniforms(Ft,Se),Ne.refreshMaterialUniforms(Ft,Z,X,H,M.state.transmissionRenderTarget[L.id]),Re.needsLights&&Re.lightProbeGrid){let St=Re.lightProbeGrid;Ft.probesSH.value=St.texture,Ft.probesMin.value.copy(St.boundingBox.min),Ft.probesMax.value.copy(St.boundingBox.max),Ft.probesResolution.value.copy(St.resolution)}lo.upload(Y,Ed(Re),Ft,ie)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(lo.upload(Y,Ed(Re),Ft,ie),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&vt.setValue(Y,"center",$.center),vt.setValue(Y,"modelViewMatrix",$.modelViewMatrix),vt.setValue(Y,"normalMatrix",$.normalMatrix),vt.setValue(Y,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let St=Z.uniformsGroups;for(let xi=0,kr=St.length;xi<kr;xi++){let kd=St[xi];he.update(kd,Sn),he.bind(kd,Sn)}}return Sn}function lg(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.sunLights.needsUpdate=W,L.sunLightShadows.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function cg(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(L,W,te){let Z=ee.get(L);Z.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ee.get(L.texture).__webglTexture=W,ee.get(L.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:te,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,W){let te=ee.get(L);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(L,W=0,te=0){B=L,F=W,z=te;let Z=null,$=!1,Se=!1;if(L){let Me=ee.get(L);if(Me.__useDefaultFramebuffer!==void 0){k.bindFramebuffer(Y.FRAMEBUFFER,Me.__webglFramebuffer),G.copy(L.viewport),J.copy(L.scissor),j=L.scissorTest,k.viewport(G),k.scissor(J),k.setScissorTest(j),N=-1;return}else if(Me.__webglFramebuffer===void 0)ie.setupRenderTarget(L);else if(Me.__hasExternalTextures)ie.rebindTextures(L,ee.get(L.texture).__webglTexture,ee.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let et=L.depthTexture;if(Me.__boundDepthTexture!==et){if(et!==null&&ee.has(et)&&(L.width!==et.image.width||L.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(L)}}let ke=L.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Se=!0);let Le=ee.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Le[W])?Z=Le[W][te]:Z=Le[W],$=!0):L.samples>0&&ie.useMultisampledRTT(L)===!1?Z=ee.get(L).__webglMultisampledFramebuffer:Array.isArray(Le)?Z=Le[te]:Z=Le,G.copy(L.viewport),J.copy(L.scissor),j=L.scissorTest}else G.copy(le).multiplyScalar(X).floor(),J.copy(pe).multiplyScalar(X).floor(),j=Ue;if(te!==0&&(Z=P),k.bindFramebuffer(Y.FRAMEBUFFER,Z)&&k.drawBuffers(L,Z),k.viewport(G),k.scissor(J),k.setScissorTest(j),$){let Me=ee.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,Me.__webglTexture,te)}else if(Se){let Me=W;for(let ke=0;ke<L.textures.length;ke++){let Le=ee.get(L.textures[ke]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+ke,Le.__webglTexture,te,Me)}}else if(L!==null&&te!==0){let Me=ee.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Me.__webglTexture,te)}N=-1};function Pd(L){let W=ee.get(L);return(W.__readFormat!==L.format||W.__readType!==L.type)&&(W.__readFormat=L.format,W.__readType=L.type,W.__formatReadable=V.textureFormatReadable(L.format),W.__typeReadable=V.textureTypeReadable(L.type)),W}this.readRenderTargetPixels=function(L,W,te,Z,$,Se,Pe,Me=0){if(!(L&&L.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ee.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(ke=ke[Pe]),ke){k.bindFramebuffer(Y.FRAMEBUFFER,ke);try{let Le=L.textures[Me],et=Le.format,ot=Le.type;L.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Me);let Ce=Pd(Le);if(Ce.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-Z&&te>=0&&te<=L.height-$&&Y.readPixels(W,te,Z,$,xe.convert(et),xe.convert(ot),Se)}finally{let Le=B!==null?ee.get(B).__webglFramebuffer:null;k.bindFramebuffer(Y.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(L,W,te,Z,$,Se,Pe,Me=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=ee.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(ke=ke[Pe]),ke)if(W>=0&&W<=L.width-Z&&te>=0&&te<=L.height-$){k.bindFramebuffer(Y.FRAMEBUFFER,ke);let Le=L.textures[Me],et=Le.format,ot=Le.type;L.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Me);let Ce=Pd(Le);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ft),Y.bufferData(Y.PIXEL_PACK_BUFFER,Se.byteLength,Y.STREAM_READ),Y.readPixels(W,te,Z,$,xe.convert(et),xe.convert(ot),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let Bt=B!==null?ee.get(B).__webglFramebuffer:null;k.bindFramebuffer(Y.FRAMEBUFFER,Bt);let Tt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await qf(Y,Tt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ft),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Se),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(ft),Y.deleteSync(Tt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,W=null,te=0){let Z=Math.pow(2,-te),$=Math.floor(L.image.width*Z),Se=Math.floor(L.image.height*Z),Pe=W!==null?W.x:0,Me=W!==null?W.y:0;ie.setTexture2D(L,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,te,0,0,Pe,Me,$,Se),k.unbindTexture()},this.copyTextureToTexture=function(L,W,te=null,Z=null,$=0,Se=0){let Pe,Me,ke,Le,et,ot,Ce,ft,Bt,Tt=L.isCompressedTexture?L.mipmaps[Se]:L.image;if(te!==null)Pe=te.max.x-te.min.x,Me=te.max.y-te.min.y,ke=te.isBox3?te.max.z-te.min.z:1,Le=te.min.x,et=te.min.y,ot=te.isBox3?te.min.z:0;else{let Ft=Math.pow(2,-$);Pe=Math.floor(Tt.width*Ft),Me=Math.floor(Tt.height*Ft),L.isDataArrayTexture?ke=Tt.depth:L.isData3DTexture?ke=Math.floor(Tt.depth*Ft):ke=1,Le=0,et=0,ot=0}Z!==null?(Ce=Z.x,ft=Z.y,Bt=Z.z):(Ce=0,ft=0,Bt=0);let xt=xe.convert(W.format),jt=xe.convert(W.type),Re;W.isData3DTexture?(ie.setTexture3D(W,0),Re=Y.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ie.setTexture2DArray(W,0),Re=Y.TEXTURE_2D_ARRAY):(ie.setTexture2D(W,0),Re=Y.TEXTURE_2D),k.activeTexture(Y.TEXTURE0),k.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(Y.UNPACK_ALIGNMENT,W.unpackAlignment);let ln=k.getParameter(Y.UNPACK_ROW_LENGTH),ct=k.getParameter(Y.UNPACK_IMAGE_HEIGHT),Sn=k.getParameter(Y.UNPACK_SKIP_PIXELS),Yn=k.getParameter(Y.UNPACK_SKIP_ROWS),bi=k.getParameter(Y.UNPACK_SKIP_IMAGES);k.pixelStorei(Y.UNPACK_ROW_LENGTH,Tt.width),k.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Tt.height),k.pixelStorei(Y.UNPACK_SKIP_PIXELS,Le),k.pixelStorei(Y.UNPACK_SKIP_ROWS,et),k.pixelStorei(Y.UNPACK_SKIP_IMAGES,ot);let Pr=L.isDataArrayTexture||L.isData3DTexture,vt=W.isDataArrayTexture||W.isData3DTexture;if(L.isDepthTexture){let Ft=ee.get(L),vi=ee.get(W),St=ee.get(Ft.__renderTarget),xi=ee.get(vi.__renderTarget);k.bindFramebuffer(Y.READ_FRAMEBUFFER,St.__webglFramebuffer),k.bindFramebuffer(Y.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let kr=0;kr<ke;kr++)Pr&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ee.get(L).__webglTexture,$,ot+kr),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ee.get(W).__webglTexture,Se,Bt+kr)),Y.blitFramebuffer(Le,et,Pe,Me,Ce,ft,Pe,Me,Y.DEPTH_BUFFER_BIT,Y.NEAREST);k.bindFramebuffer(Y.READ_FRAMEBUFFER,null),k.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if($!==0||L.isRenderTargetTexture||ee.has(L)){let Ft=ee.get(L),vi=ee.get(W);k.bindFramebuffer(Y.READ_FRAMEBUFFER,R),k.bindFramebuffer(Y.DRAW_FRAMEBUFFER,I);for(let St=0;St<ke;St++)Pr?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ft.__webglTexture,$,ot+St):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ft.__webglTexture,$),vt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,vi.__webglTexture,Se,Bt+St):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,vi.__webglTexture,Se),$!==0?Y.blitFramebuffer(Le,et,Pe,Me,Ce,ft,Pe,Me,Y.COLOR_BUFFER_BIT,Y.NEAREST):vt?Y.copyTexSubImage3D(Re,Se,Ce,ft,Bt+St,Le,et,Pe,Me):Y.copyTexSubImage2D(Re,Se,Ce,ft,Le,et,Pe,Me);k.bindFramebuffer(Y.READ_FRAMEBUFFER,null),k.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else vt?L.isDataTexture||L.isData3DTexture?Y.texSubImage3D(Re,Se,Ce,ft,Bt,Pe,Me,ke,xt,jt,Tt.data):W.isCompressedArrayTexture?Y.compressedTexSubImage3D(Re,Se,Ce,ft,Bt,Pe,Me,ke,xt,Tt.data):Y.texSubImage3D(Re,Se,Ce,ft,Bt,Pe,Me,ke,xt,jt,Tt):L.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Se,Ce,ft,Pe,Me,xt,jt,Tt.data):L.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Se,Ce,ft,Tt.width,Tt.height,xt,Tt.data):Y.texSubImage2D(Y.TEXTURE_2D,Se,Ce,ft,Pe,Me,xt,jt,Tt);k.pixelStorei(Y.UNPACK_ROW_LENGTH,ln),k.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ct),k.pixelStorei(Y.UNPACK_SKIP_PIXELS,Sn),k.pixelStorei(Y.UNPACK_SKIP_ROWS,Yn),k.pixelStorei(Y.UNPACK_SKIP_IMAGES,bi),Se===0&&W.generateMipmaps&&Y.generateMipmap(Re),k.unbindTexture()},this.initRenderTarget=function(L){ee.get(L).__webglFramebuffer===void 0&&ie.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ie.setTextureCube(L,0):L.isData3DTexture?ie.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ie.setTexture2DArray(L,0):ie.setTexture2D(L,0),k.unbindTexture()},this.resetState=function(){F=0,z=0,B=null,k.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};function ic(i,e=0){let t=(i.rotation??0)*Math.PI/180,n=Math.cos(t),r=Math.sin(t),o=uo(i,e+i.h/2);return[0,i.h].flatMap(s=>[[-i.w/2,-i.d/2],[i.w/2,-i.d/2],[i.w/2,i.d/2],[-i.w/2,i.d/2]].map(([a,l])=>o(i.x+a*n-l*r,e+s,i.z+a*r+l*n)))}function Ip(i){let e=ic({...i,x:0,z:0}).map(([r,,o])=>[r,o]).sort((r,o)=>r[0]-o[0]||r[1]-o[1]),t=(r,o,s)=>(o[0]-r[0])*(s[1]-r[1])-(o[1]-r[1])*(s[0]-r[0]),n=r=>{let o=[];for(let s of r){for(;o.length>1&&t(o[o.length-2],o[o.length-1],s)<=1e-10;)o.pop();o.push(s)}return o.slice(0,-1)};return[...n(e),...n([...e].reverse())].map(([r,o])=>[r+i.x,o+i.z])}function uo(i,e){let t=(i.rotation_x??0)*Math.PI/180,n=(i.rotation_z??0)*Math.PI/180;if(!t&&!n)return(h,d,f)=>[h,d,f];let r=(i.rotation??0)*Math.PI/180,o=Math.cos(r),s=Math.sin(r),a=Math.cos(t),l=Math.sin(t),c=Math.cos(n),u=Math.sin(n);return(h,d,f)=>{let p=h-i.x,g=f-i.z,m=p*o+g*s,_=d-e,x=-p*s+g*o,w=_*a-x*l,b=_*l+x*a,y=m*c-w*u,M=m*u+w*c;return[i.x+y*o-b*s,e+M,i.z+y*s+b*o]}}function Pn(i,e,t,n){if(!t.rotation_x&&!t.rotation_z)return;let r=uo(t,n);for(let o=e;o<i.length;o+=3){let[s,a,l]=r(i[o],i[o+1],i[o+2]);i[o]=s,i[o+1]=a,i[o+2]=l}}function Lp(i){let e=i.length/3,t=new Float32Array(e);for(let n=0;n<e;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(t[n]=r)}return t}function Fp(i,e,t,n){for(let r=t.start*3;r<t.end*3;r++){let o=e[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}var sw=[],rc=new Map,aw=0,Dp=!1;function Np(i){Dp=i}function lw(i){let e=yt(i)?.product?.base??i;return[...rc.entries()].filter(([,t])=>t.product?.base===e).map(([t,n])=>({type:t,item:n}))}function _r(i){let e=yt(i.type);if(!e)return;let t=e.product?.base??i.type;if(!Dp)return yt(t)??e;let n=lw(i.type);return n.find(r=>r.type===i.product_variant)?.item??(e.product?e:n.find(r=>r.item.product?.default)?.item??e)}function vs(i){sw=i,rc=new Map(i.flatMap(e=>e.items.map(t=>[cw(e.id,t.id),t]))),aw++}function cw(i,e){return`pack:${i}:${e}`}function uw(i){return i.startsWith("pack:")}var hw={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Sh(i){return yt(i)?.parts.find(e=>e.screen)}function yt(i){if(!uw(i))return;let e=rc.get(i);if(e)return e;let[,t,...n]=i.split(":"),r=hw[t];return r?rc.get(`pack:${r}:${n.join(":")}`):void 0}function Pt(i,e){let t=yt(e.type),n=pn(i,e.x,e.z);if(e.mount_y!=null)return n+e.mount_y;if(e.type==="lamp_wall")return n+oc;if(zp.has(e.type))return Math.max(n,ho(i,e.x,e.z)-Bp(e.type,e.h));if(e.type==="led_strip")return ho(i,e.x,e.z)-.04-Math.max(.02,e.h);switch(t?.mount){case"surface":return Op(i,e.x,e.z);case"wall":return n+(t.wall_y??1);case"ceiling":return ho(i,e.x,e.z)-e.h;default:return n+(t?0:xs(e))}}var sc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Ui(i){return i==="hedge"||i==="fence"||i==="pergola"}function ys(i,e,t){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of i.points){let h=o(c,u);s=Math.min(s,h),a=Math.max(a,h)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(a-s)));return n*l}function fw(i,e,t,n){return fo(i)+(e.offset??0)+sc[e.type]-ys(e,t,n)}function fo(i){return i.elevation>.3?0:-.2}function Up(i,e,t){let n=(i.outdoor??[]).filter(o=>!Ui(o.type)&&o.type!=="pool"&&Ge([e,t],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?fw(i,r,e,t):fo(i)}function ac(i,e){return fo(i)+(e.offset??0)+(e.above?Gp(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function pw(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?Gp(i):1.5}function Th(i,e){return e.above?!1:(i.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!Ui(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>Ge(n,t.points)))}function Vp(i,e){return!e.above&&!Th(i,e)?lc(i,e)-.05:ac(i,e)-pw(e)}function lc(i,e){return ac(i,e)-.15}function Gp(i){return i.height&&i.height>.3?i.height:1.2}var mw={type:"none",pitch:35,overhang:.4},RA={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...mw}};var Hp=.3;var Wp=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),oc=1.75;var zp=new Set(["lamp_downlight","lamp_spot"]);function Bp(i,e){return i==="lamp_spot"?Math.max(.06,e)+.008:.02}var Xp=new Set(["stairs","stairs_u"]);function Kp(i,e,t){let n=Math.max(4,Math.round(t/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,e*.45),u=(e-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:u,rise:t/n}}function Yp(i){return Wp.has(i)||!!yt(i)?.light}var Ah=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function xs(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Op(i,e,t){let n=pn(i,e,t);for(let r of i.furniture)!(Ah.has(r.type)||yt(r.type)?.surface)||!Ge([e,t],Gi(r))||(n=Math.max(n,pn(i,r.x,r.z)+(r.mount_y??0)+r.h));return n}var dw=new Set([...Wp,"radiator","ac_unit","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var gw=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],_w=["standard","bars","glass_wall"];function br(i,e){return i.type==="door"?i.style&&gw.includes(i.style)?i.style:e?"front":"interior":i.style&&_w.includes(i.style)?i.style:"standard"}function qp(i,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=o-.5;if(l+c>u){let d=Math.max(0,u)/(l+c);l*=d,c*=d}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Zp(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function wn(i){let e=0;for(let t=0;t<i.length;t++){let[n,r]=i[t],[o,s]=i[(t+1)%i.length];e+=n*s-o*r}return e/2}function ws(i){return Math.abs(wn(i))}function Vi(i){let e=wn(i);if(Math.abs(e)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let t=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;t+=(o+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function $p(i){if(i.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=i[e],[r,o]=i[(e+1)%4];if(Math.abs(t-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function Jp(i){let e=1/0,t=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)e=Math.min(e,o),t=Math.min(t,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:e,z0:t,x1:n,z1:r}}function Gi(i){if(i.rotation_x||i.rotation_z)return Ip(i);let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*t-a*n,i.z+s*n+a*t])}function Ge(i,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,s]=e[n],[a,l]=e[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(t=!t)}return t}function mt(i,e){return Eh(i,e)+(e?.floor_offset??0)}function Eh(i,e){return e?.wall_offset??(e?.elevation??i.elevation)-i.elevation}function ni(i,e){return e?.ceiling_height??e?.height??i.height}function Ms(i,e,t){return i.rooms.find(n=>Ge([e,t],n.points))}function pn(i,e,t){return mt(i,Ms(i,e,t))}function ho(i,e,t){let n=Ms(i,e,t);return mt(i,n)+ni(i,n)}function Gt(i){let e=i.rooms.filter(t=>t.points.length>=3);return e.length?Math.max(...e.map(t=>i.elevation+mt(i,t)+ni(i,t))):i.elevation+i.height}var jp=i=>Math.round(i*1e3)/1e3;function bw(i,e,t,n){let r=Math.hypot(n[0]-t[0],n[1]-t[1]);if(r<.01)return!1;let o=[(n[0]-t[0])/r,(n[1]-t[1])/r],s=l=>Math.abs(-(l[0]-t[0])*o[1]+(l[1]-t[1])*o[0]),a=l=>(l[0]-t[0])*o[0]+(l[1]-t[1])*o[1];return i.rooms.some(l=>l.id!==e&&l.points.some((c,u)=>{let h=l.points[(u+1)%l.points.length];return s(c)>.02||s(h)>.02?!1:Math.min(r,Math.max(a(c),a(h)))-Math.max(0,Math.min(a(c),a(h)))>.05}))}function Qp(i,e,t,n,r,o=.05){let s=i.rooms.find(d=>d.points.length>=3&&Ge([e.x,e.z],d.points));if(!s)return[t,n];let a=s.points,l=wn(a)>=0?1:-1,c=Gi({...e}),u=t,h=n;for(let d=0;d<2;d++){let f=Gi({...e,x:u,z:h});for(let p=0;p<a.length;p++){let g=a[p],m=a[(p+1)%a.length],_=Math.hypot(m[0]-g[0],m[1]-g[1]);if(_<.05)continue;let x=[(m[0]-g[0])/_,(m[1]-g[1])/_],w=[-x[1]*l,x[0]*l],b=bw(i,s.id,g,m)?r/2:0,y=0;f.forEach((M,E)=>{let v=(M[0]-g[0])*x[0]+(M[1]-g[1])*x[1];if(v<-.01||v>_+.01)return;let S=(M[0]-g[0])*w[0]+(M[1]-g[1])*w[1]-b,T=c[E];(T[0]-g[0])*w[0]+(T[1]-g[1])*w[1]-b<-o||S<y&&(y=S)}),y<-1e-4&&(u-=w[0]*y,h-=w[1]*y)}}return[jp(u),jp(h)]}var Xt=(i,e)=>[i[0]-e[0],i[1]-e[1]],Hi=(i,e)=>[i[0]+e[0],i[1]+e[1]],pi=(i,e)=>[i[0]*e,i[1]*e],Ts=(i,e)=>i[0]*e[0]+i[1]*e[1],po=(i,e)=>i[0]*e[1]-i[1]*e[0],Ss=i=>Math.hypot(i[0],i[1]),ii=i=>{let e=Ss(i)||1;return[i[0]/e,i[1]/e]},em=i=>[-i[1],i[0]],tm=i=>[i[1],-i[0]];function Wi(i,e,t=[]){let n=e.eps??.005,r=[],o=t.filter(v=>Math.hypot(v.b[0]-v.a[0],v.b[1]-v.a[1])>.05),s=[],a=v=>{for(let S=0;S<s.length;S++)if(Math.abs(s[S][0]-v[0])<=n&&Math.abs(s[S][1]-v[1])<=n)return S;return s.push([v[0],v[1]]),s.length-1},l=[];for(let v of i){let S=v.points;if(S.length<3||Math.abs(wn(S))<1e-6)continue;let T=wn(S)>0,A=S.map(a);for(let C=0;C<S.length;C++){let P=A[C],R=A[(C+1)%S.length];P!==R&&l.push(T?{u:P,v:R,room:v.id,edge:C,forward:!0}:{u:R,v:P,room:v.id,edge:C,forward:!1})}}let c=o.map(v=>[a(v.a),a(v.b)]),u=new Set;for(let v of i){let S=v.points;S.length<3||(v.wall_splits??[]).forEach((T,A)=>{if(!T||A>=S.length)return;let C=S[A],P=Xt(S[(A+1)%S.length],C),R=Ss(P);for(let I of T)I>n&&I<R-n&&u.add(a(Hi(C,pi(P,I/R))))})}let h=[];for(let v of l){let S=s[v.u],T=s[v.v],A=Xt(T,S),C=Ss(A),P=pi(A,1/C),R=[];for(let F=0;F<s.length;F++){if(F===v.u||F===v.v)continue;let z=Xt(s[F],S),B=Ts(z,P);B<=n||B>=C-n||Math.abs(po(P,z))<=n&&R.push({t:B,id:F})}R.sort((F,z)=>F.t-z.t);let I=[{t:0,id:v.u},...R,{t:C,id:v.v}];for(let F=0;F+1<I.length;F++){let z=I[F],B=I[F+1],N=v.forward?z.t:C-B.t,O=v.forward?B.t:C-z.t;h.push({u:z.id,v:B.id,room:v.room,edge:v.edge,t0:N,t1:O})}}let d=new Map;for(let v of h){let S=v.u<v.v?`${v.u}-${v.v}`:`${v.v}-${v.u}`,T=d.get(S);T||d.set(S,T=[]),T.push(v)}let f=v=>({room_id:v.room,edge:v.edge,t0:v.t0,t1:v.t1}),p=new Map;for(let v of h){let S=`${v.room}:${v.edge}`;p.set(S,[...p.get(S)??[],v.t0].sort((T,A)=>T-A))}let g=v=>{let S=i.find(A=>A.id===v.room)?.wall_heights?.[v.edge];if(!Array.isArray(S))return S;let T=p.get(`${v.room}:${v.edge}`)??[];return S[T.indexOf(v.t0)]??null},m=v=>{let S=v.map(g).filter(A=>typeof A=="number"&&A>0);if(S.length)return Math.min(...S);let T=v.map(A=>i.find(C=>C.id===A.room)?.ceiling_height);return T.every(A=>typeof A=="number"&&A>0)?Math.max(...T):void 0},_=v=>{let S=v.map(T=>i.find(A=>A.id===T.room)?.wall_thickness?.[T.edge]).filter(T=>typeof T=="number"&&T>0);return S.length?Math.max(...S):void 0},x=v=>v.some(S=>g(S)===0),w=[],b=[];for(let v of d.values()){let S=v[0],T=v.find(A=>A!==S&&A.u===S.v&&A.v===S.u&&A.room!==S.room);for(let A of v)A!==S&&A!==T&&A.room!==S.room&&r.push(`overlap:${S.room}:${A.room}`);if(x(T?[S,T]:[S])){T&&w.push([S.room,T.room]);continue}if(T){let A=_([S,T])??e.interior;b.push({a:S.u,b:S.v,left:A/2,right:A/2,exterior:!1,roomLeft:S.room,roomRight:T.room,sources:[f(S),f(T)],height:m([S,T])})}else b.push({a:S.u,b:S.v,left:0,right:_([S])??e.exterior,exterior:!0,roomLeft:S.room,roomRight:null,sources:[f(S)],height:m([S])})}let y=v=>ii(Xt(s[v.b],s[v.a]));for(let v of b){if(v.exterior||v.free)continue;let S=new Set;for(let A of[v.a,v.b])for(let C of b)!C.exterior||C.free||C.a!==A&&C.b!==A||Math.abs(po(y(v),y(C)))>1e-6||(C.roomLeft===v.roomLeft?S.add("left"):C.roomLeft===v.roomRight&&S.add("right"));if(S.size!==1)continue;let T=v.left+v.right;S.has("left")?(v.left=0,v.right=T):(v.left=T,v.right=0)}o.forEach((v,S)=>{let[T,A]=c[S];if(T===A)return;let C=[(v.a[0]+v.b[0])/2,(v.a[1]+v.b[1])/2],P=i.find(F=>F.points.length>=3&&Ge(C,F.points))?.id??null,R=(v.thickness??e.interior)/2,I=typeof v.height=="number"&&v.height>0?v.height:void 0;b.push({free:v.id,a:T,b:A,left:R,right:R,exterior:!1,roomLeft:P,roomRight:P,sources:[],height:I})}),b=xw(b,s,u);let M=ww(b,s);return{walls:b.map((v,S)=>{let T=s[v.a],A=s[v.b],C=M.get(`${S}:a`),P=M.get(`${S}:b`),R=Mw([C.right,P.left,A,P.right,C.left,T],1e-6);return{id:vw(T,A),a:[T[0],T[1]],b:[A[0],A[1]],left:v.left,right:v.right,exterior:v.exterior,roomLeft:v.roomLeft,roomRight:v.roomRight,sources:v.sources,footprint:R,...v.free?{free:v.free}:{},...v.height!==void 0?{height:v.height}:{}}}),warnings:[...new Set(r)],open:w}}function vw(i,e){let t=o=>Math.round(o*100),[n,r]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function nm(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function xw(i,e,t=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=nm(l)),c.a!==s&&(c=nm(c)),l.a===c.b)continue;let u=ii(Xt(e[l.b],e[l.a])),h=ii(Xt(e[c.b],e[c.a]));if(Math.abs(po(u,h))>1e-6||Ts(u,h)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let d={...l,b:c.b,sources:yw(l.sources,c.sources)},f=n.filter((p,g)=>g!==a[0]&&g!==a[1]);f.push(d),n.length=0,n.push(...f),r=!0;break}}return n}function yw(i,e){let t=i.map(n=>({...n}));for(let n of e){let r=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function ww(i,e){let t=new Map;i.forEach((r,o)=>{let s=ii(Xt(e[r.b],e[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:pi(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let u=t.get(l);u||t.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,o]of t){let s=e[r];o.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Hi(s,pi(em(c.d),c.left)),right:Hi(s,pi(tm(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let u=o[c],h=o[(c+1)%o.length],d=Hi(s,pi(em(u.d),u.left)),f=Hi(s,pi(tm(h.d),h.right)),p=po(u.d,h.d);if(Math.abs(p)<1e-4)continue;let g=po(Xt(f,d),h.d)/p,m=Hi(d,pi(u.d,g));Ss(Xt(m,s))>l||(n.get(u.key).left=m,n.get(h.key).right=m)}}return n}function Mw(i,e){let t=i.filter((r,o)=>Ss(Xt(r,i[(o+1)%i.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let o=t[(r+t.length-1)%t.length],s=t[r],a=t[(r+1)%t.length],l=Xt(s,o),c=Xt(a,s);if(Math.abs(po(ii(l),ii(c)))<1e-7&&Ts(l,c)>0){t=t.filter((u,h)=>h!==r),n=!0;break}}}return t}function Rh(i,e,t){let n=i.points[e],r=i.points[(e+1)%i.points.length],o=ii(Xt(r,n));return Hi(n,pi(o,t))}function vr(i,e,t){if(i.wall){let r=t.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=ii(Xt(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Hi(r.a,[-o[1],o[0]])]},edge:0}}let n=e.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function xr(i,e,t){if(!e.wall)return Sw(i,t.room,t.edge,e.offset);let n=i.find(o=>o.free===e.wall);if(!n)return null;let r=Rh(t.room,0,e.offset);return{wall:n,s:Ts(Xt(r,n.a),ii(Xt(n.b,n.a)))}}function Sw(i,e,t,n){for(let r of i){if(!r.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Rh(e,t,n);return{wall:r,s:Ts(Xt(s,r.a),ii(Xt(r.b,r.a)))}}return null}var Xi=(i,e,t)=>(e[0]-i[0])*(t[1]-i[1])-(e[1]-i[1])*(t[0]-i[0]);function Ki(i){return i.reduce((e,t,n)=>{let r=i[(n+1)%i.length];return e+t[0]*r[1]-r[0]*t[1]},0)/2}var Tw=(i,e,t)=>Math.abs(Xi(e,t,i))<1e-8&&i[0]>=Math.min(e[0],t[0])-1e-8&&i[0]<=Math.max(e[0],t[0])+1e-8&&i[1]>=Math.min(e[1],t[1])-1e-8&&i[1]<=Math.max(e[1],t[1])+1e-8;function As(i,e){let t=!1;for(let n=0,r=i.length-1;n<i.length;r=n++){let o=i[r],s=i[n];if(Tw(e,o,s))return!0;o[1]>e[1]!=s[1]>e[1]&&e[0]<(s[0]-o[0])*(e[1]-o[1])/(s[1]-o[1])+o[0]&&(t=!t)}return t}function im(i){let e=i.map((r,o)=>o);Ki(i)<0&&e.reverse();let t=[],n=i.length*i.length;for(;e.length>3&&n-- >0;){let r=!1;for(let o=0;o<e.length;o++){let s=e[(o+e.length-1)%e.length],a=e[o],l=e[(o+1)%e.length],c=Xi(i[s],i[a],i[l]);if(Math.abs(c)<1e-8){e.splice(o,1),r=!0;break}if(!(c<0||e.some(u=>u!==s&&u!==a&&u!==l&&Xi(i[s],i[a],i[u])>=-1e-8&&Xi(i[a],i[l],i[u])>=-1e-8&&Xi(i[l],i[s],i[u])>=-1e-8))){t.push([s,a,l]),e.splice(o,1),r=!0;break}}if(!r)return[]}return e.length===3&&Math.abs(Xi(i[e[0]],i[e[1]],i[e[2]]))>1e-8&&t.push([...e]),t}function rm(i,e){let t=i,n=Ki(e)<0?-1:1;for(let r=0;r<e.length&&t.length;r++){let o=e[r],s=e[(r+1)%e.length],a=t;t=[];for(let l=0;l<a.length;l++){let c=a[l],u=a[(l+1)%a.length],h=n*Xi(o,s,c),d=n*Xi(o,s,u);if(h>=-1e-8&&t.push(c),h>=-1e-8!=d>=-1e-8){let f=h/(h-d);t.push([c[0]+(u[0]-c[0])*f,c[1]+(u[1]-c[1])*f,c[2]+(u[2]-c[2])*f])}}}return t.filter((r,o)=>{let s=t[(o+1)%t.length];return Math.hypot(r[0]-s[0],r[1]-s[1])>1e-8})}function cc(i,e,t){let n=[0,1],r=t[0]-e[0],o=t[1]-e[1];for(let a=0;a<i.length;a++){let l=i[a],c=i[(a+1)%i.length],u=c[0]-l[0],h=c[1]-l[1],d=r*h-o*u;if(Math.abs(d)<1e-8)continue;let f=((l[0]-e[0])*h-(l[1]-e[1])*u)/d,p=((l[0]-e[0])*o-(l[1]-e[1])*r)/d;f>1e-8&&f<1-1e-8&&p>=-1e-8&&p<=1+1e-8&&n.push(f)}n.sort((a,l)=>a-l);let s=[];for(let a=1;a<n.length;a++){let l=n[a-1],c=n[a],u=(l+c)/2;c-l>1e-8&&As(i,[e[0]+r*u,e[1]+o*u])&&s.push([l,c])}return s}function om(i,e){return e.every((t,n)=>As(i,t)&&cc(i,t,e[(n+1)%e.length]).reduce((r,[o,s])=>r+s-o,0)>1-1e-8)}var Rs=Math.PI/180;function Hn(i){let e=Math.min(i.x0,i.x1),t=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:e,u1:t,w:r-n,at:(o,s)=>[o,i.flip?r-s:n+s]}:{u0:n,u1:r,w:t-e,at:(o,s)=>[i.flip?t-s:e+s,o]}}function Mn(i){let e=Hn(i).w,t=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Rs),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Rs);if(i.shape==="flat"||i.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(i.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(i.shape==="mansard"){let l=cm(e,t,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(r+o))):e/2,a=t+s*r;return{vr:s,rh:a,y:l=>l<=s?t+l*r:n+(e-l)*o}}var Aw=.14;function am(i,e){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<e-.05}function lm(i,e,t){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let o of i.settings.roof.sections??[]){if(o.open)continue;let s=Math.min(o.x0,o.x1),a=Math.max(o.x0,o.x1),l=Math.min(o.z0,o.z1),c=Math.max(o.z0,o.z1);if(e<s-1e-6||e>a+1e-6||t<l-1e-6||t>c+1e-6||o.points&&o.points.length>=3&&!Ge([e,t],o.points))continue;let[u,h]=mi(o,e,t),d=o.shape==="flat"||o.shape==="parapet",f=Math.max(0,o.overhang??r),g=((d?null:go(Yi(o,{u0:f,u1:f,a:f,b:f}),u,h))??Mn(o).y(h))-Aw;n=n===null?g:Math.max(n,g)}return n}function Ph(i,e){let t=i.length;if(t<3||Math.abs(e)<1e-9)return i.map(o=>[o[0],o[1]]);let n=wn(i)>=0?1:-1,r=[];for(let o=0;o<t;o++){let s=i[(o+t-1)%t],a=i[o],l=i[(o+1)%t],c=sm([a[0]-s[0],a[1]-s[1]]),u=sm([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],d=[u[1]*n,-u[0]*n],f=h[0]+d[0],p=h[1]+d[1],g=Math.hypot(f,p);if(g<1e-6){r.push([a[0]+h[0]*e,a[1]+h[1]*e]);continue}let m=(f*h[0]+p*h[1])/g,_=Math.min(4,1/Math.max(.25,m));r.push([a[0]+f/g*e*_,a[1]+p/g*e*_])}return r}function sm(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function Ps(i,e){if(i.points&&i.points.length>=3)return Ph(i.points,e);let t=Math.min(i.x0,i.x1)-e,n=Math.max(i.x0,i.x1)+e,r=Math.min(i.z0,i.z1)-e,o=Math.max(i.z0,i.z1)+e;return[[t,r],[n,r],[n,o],[t,o]]}var Es=Math.tan(30*Rs);function cm(i,e,t,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=e+o*n,l=t+s*r,c=Math.min(i-s,Math.max(o,(l-a+Es*(i-s+o))/(2*Es))),u=a+(c-o)*Es;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:d=>d<=o?e+d*n:d<=c?a+(d-o)*Es:d<=i-s?l+(i-s-d)*Es:t+(i-d)*r}}function Yi(i,e){let t=Ew(i,e);if(!i.points||i.points.length<3)return t;let n=Ps(i,Math.max(0,Math.min(e.u0,e.u1,e.a,e.b))).map(([c,u])=>mi(i,c,u)),r=im(n),o=t.faces.flatMap(c=>r.map(u=>rm(c,u.map(h=>n[h])))).filter(c=>c.length>=3&&Math.abs(Ki(c))>1e-8),s=(c,u,h)=>[c[0]+(u[0]-c[0])*h,c[1]+(u[1]-c[1])*h,c[2]+(u[2]-c[2])*h],a=t.ridges.flatMap(([c,u])=>cc(n,c,u).map(([h,d])=>[s(c,u,h),s(c,u,d)])),l=[];return n.forEach((c,u)=>{let h=n[(u+1)%n.length],d=[0,...t.faces.flatMap(f=>cc(f.map(([p,g])=>[p,g]),c,h).flat())].filter(f=>f<1-1e-8).sort((f,p)=>f-p);for(let f=0;f<d.length;f++){if(f&&d[f]-d[f-1]<1e-8)continue;let p=d[f],g=c[0]+(h[0]-c[0])*p,m=c[1]+(h[1]-c[1])*p;l.push([g,m,go(t,g,m)??Mn(i).y(m)])}}),{faces:o,rim:l,ridges:a,gable:null}}function Ew(i,e){let t=Hn(i),n=Mn(i),r=t.w,o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(x,w)=>[x,w,n.y(w)],u=c(a,-o),h=c(l,-o),d=c(l,r+s),f=c(a,r+s),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Rs),g=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Rs);if(i.shape==="pent"){let x=[u,h,d,f];return{faces:[x],rim:x,ridges:[[d,f]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let x=i.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,r-n.vr)||r/2),w=[t.u0+x,n.vr,n.rh],b=[t.u1-x,n.vr,n.rh],y=i.shape==="pyramid"?[[u,h,w],[h,d,w],[d,f,w],[f,u,w]]:[[u,h,b,w],[w,b,d,f],[f,u,w],[h,d,b]],M=i.shape==="pyramid"?[[u,w],[f,w],[h,w],[d,w]]:[[w,b],[u,w],[f,w],[h,b],[d,b]];return{faces:y,rim:[u,h,d,f],ridges:M,gable:null}}if(i.shape==="halfhip"){let x=Math.min(n.y(0),n.y(r)),w=x+(n.rh-x)*.55,b=p>1e-6?Math.min(n.vr,(w-i.eave_a)/p):n.vr,y=g>1e-6?Math.max(n.vr,r-(w-i.eave_b)/g):n.vr,M=Math.min((t.u1-t.u0)/2-.1,(n.rh-w)/Math.max(.2,p)),E=[t.u0+M,n.vr,n.rh],v=[t.u1-M,n.vr,n.rh],S=[a,b,w],T=[a,y,w],A=[l,b,w],C=[l,y,w];return{faces:[[u,h,A,v,E,S],[E,v,C,d,f,T],[T,S,E],[A,C,v]],rim:[u,h,A,C,d,f,T,S],ridges:[[E,v],[S,E],[T,E],[A,v],[C,v]],gable:[[0,n.y(0)],[b,w],[y,w],[r,n.y(r)]]}}if(i.shape==="mansard"){let x=cm(r,i.eave_a,i.eave_b,p,g),w=[a,x.vla,x.yla],b=[l,x.vla,x.yla],y=[a,r-x.vlb,x.ylb],M=[l,r-x.vlb,x.ylb],E=[a,x.vr,x.rh],v=[l,x.vr,x.rh];return{faces:[[u,h,b,w],[w,b,v,E],[E,v,M,y],[y,M,d,f]],rim:[u,h,b,v,M,d,f,y,E,w],ridges:[[E,v],[w,b],[y,M]],gable:[[0,n.y(0)],[x.vla,x.yla],[x.vr,x.rh],[r-x.vlb,x.ylb],[r,n.y(r)]]}}let m=[a,n.vr,n.rh],_=[l,n.vr,n.rh];return{faces:[[u,h,_,m],[m,_,d,f]],rim:[u,h,_,d,f,m],ridges:[[m,_]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function go(i,e,t){let n=null;for(let r of i.faces){if(!As(r.map(x=>[x[0],x[1]]),[e,t]))continue;let[o,s]=r,a=r.slice(2).find(x=>Math.abs((s[0]-o[0])*(x[1]-o[1])-(s[1]-o[1])*(x[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],u=s[1]-o[1],h=a[0]-o[0],d=a[2]-o[2],f=a[1]-o[1],p=c*f-u*d,g=u*h-l*f,m=l*d-c*h;if(Math.abs(g)<1e-9)continue;let _=o[2]-(p*(e-o[0])+m*(t-o[1]))/g;n=n===null?_:Math.min(n,_)}return n}function mi(i,e,t){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),o=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?[e,i.flip?s-t:t-o]:[t,i.flip?r-e:e-n]}function Rw(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function uc(i,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(e)*1.5)continue;let a=Rw(s);t<a.x0||t>a.x1||n<a.z0||n>a.z1||(!o||r(s)<r(o))&&(o=s)}return o}function kh(i,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=Hn(e),n=Mn(e).rh,r=Yi(i,{u0:0,u1:0,a:0,b:0}),o=Mn(i),s=p=>{let[g,m]=t.at(p,t.w/2),[_,x]=mi(i,g,m);return go(r,_,x)??o.y(x)},a=s(t.u0)<=s(t.u1),l=a?t.u0:t.u1,c=a?t.u1:t.u0,u=a?1:-1,h=Math.abs(c-l),d=c;for(let p=.5;p<h;p+=.05)if(s(l+u*p)>=n-.02){d=l+u*p;break}if(Math.abs(d-c)<.05)return e;let f={...e};return e.axis==="x"?c===t.u1?f.x1=d:f.x0=d:c===t.u1?f.z1=d:f.z0=d,f}function um(i,e){let t=kh(i,e),n=Hn(t),r=Mn(t),o=Yi(i,{u0:0,u1:0,a:0,b:0}),s=Mn(i),a=d=>{let[f,p]=n.at(d,n.w/2),[g,m]=mi(i,f,p);return go(o,g,m)??s.y(m)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],h=Math.max(1,Math.ceil(c/.15));for(let d=0;d<h;d++){let f=c*d/h,p=c*(d+1)/h,g=l?n.u0+f:n.u1-f,m=l?n.u0+p:n.u1-p,_=a(m),x=1/0,w=-1/0;for(let v=0;v<=40;v++){let S=n.w*v/40;r.y(S)>_+.02&&(x=Math.min(x,S),w=Math.max(w,S))}if(!(w-x>.05))continue;let b=n.at(g,x),y=n.at(m,w),M=mi(i,b[0],b[1]),E=mi(i,y[0],y[1]);u.push({u0:Math.min(M[0],E[0]),u1:Math.max(M[0],E[0]),v0:Math.min(M[1],E[1]),v1:Math.max(M[1],E[1])})}return u}function mo(i,e,t,n){let r=s=>n?s[e]<=t+1e-9:s[e]>=t-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),u=r(l);if(c&&o.push(a),c!==u){let h=(t-a[e])/(l[e]-a[e]);o.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return o}function hm(i,e){let t=mo(i,0,e.u0,!0),n=mo(i,0,e.u1,!1),r=mo(mo(i,0,e.u0,!1),0,e.u1,!0),o=mo(r,1,e.v0,!0),s=mo(r,1,e.v1,!1);return[t,n,o,s].filter(a=>a.length>=3&&Math.abs(ws(a.map(l=>[l[0],l[1]])))>1e-6)}function hc(i,e,t){let n=Hn(e),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>e.base+.05)),o=c=>c.some(u=>r.some(h=>Ge(u,h.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:t,b:o(a.map(c=>n.at(c,n.w+s)))?0:t,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:t,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:t}}function dm(i,e){let t=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}function Pw(i){return Mn(i).rh}function fm(i,e,t){let n=i.settings.roof.sections??[],r=n.filter(l=>t.includes(l.id)).map(l=>uc(n,l)??l);if(!r.length)return e.id;let o=Math.max(...r.map(l=>Pw(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(u=>{let[h,d]=c.points.reduce((f,p)=>[f[0]+p[0]/c.points.length,f[1]+p[1]/c.points.length],[0,0]);return h>=Math.min(u.x0,u.x1)&&h<=Math.max(u.x0,u.x1)&&d>=Math.min(u.z0,u.z1)&&d<=Math.max(u.z0,u.z1)}));return i.floors.filter(l=>l.elevation>=e.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??e.id}function an(i,e){let t=[e.roomLeft,e.roomRight].map(n=>i.rooms.find(r=>r.id===n)).filter(n=>!!n);return t.length?{bottom:Math.min(...t.map(n=>Eh(i,n))),top:Math.max(...t.map(n=>mt(i,n)+Math.min(ni(i,n),e.height??1/0)))}:{bottom:0,top:Math.min(i.height,e.height??i.height)}}function ks(i,e,t){let n=vr(e,i.rooms,i.walls??[]),r=n&&xr(t,e,n);if(!n||!r)return null;let o=r.wall,s=Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1]);if(s<1e-6)return null;let a=[(o.b[0]-o.a[0])/s,(o.b[1]-o.a[1])/s],l=o.roomLeft===n.room.id,c=i.rooms.find(G=>G.id===n.room.id||o.free&&G.id===o.roomLeft)??n.room,u=o.free?void 0:i.rooms.find(G=>G.id===(l?o.roomRight:o.roomLeft)),h=l?[-a[1],a[0]]:[a[1],-a[0]],d=Math.min(e.width,s),f=Math.max(0,Math.min(s-d,r.s-d/2)),p=[o.a[0]+a[0]*f,o.a[1]+a[1]*f],g=mt(i,c),m=u?mt(i,u):g,_=Math.min(g,m),x=Math.max(g,m),w={opening:e,room:c,other:u,wall:o,start:p,axis:a,toRoom:h,width:d,low:_,high:x,threshold:e.type==="window"?g:x,ceiling:Math.min(g+ni(i,c),u?m+ni(i,u):1/0)};if((c.wall_offset!=null||c.floor_offset!=null)&&(w.threshold=g),g+e.sill+e.height>w.ceiling+.001&&(w.issue="height"),!e.steps||!u||x-_<.001||e.type==="window")return w;let b=e.steps.side==="room",y=b?c:u,M=b?h:[-h[0],-h[1]],E=mt(i,y),v=E===x,S=b?l?o.left:o.right:l?o.right:o.left,T=e.steps.depth,A=e.steps.count,C=e.steps.offset??0,P=S+C,R=S-o.left-o.right;if(w.issue=w.issue??"fit",!Number.isFinite(T)||T<.1||T>10||!Number.isInteger(A)||A<1||A>30||!Number.isFinite(C)||Math.abs(C)>10||P+T<S+.01)return w;let I=(G,J)=>[p[0]+a[0]*G+M[0]*J,p[1]+a[1]*G+M[1]*J],F=C<0?P:-.005,z=[I(0,F),I(d,F),I(d,P+T),I(0,P+T)],B=[I(.01,Math.min(S,P)+.01),I(d-.01,Math.min(S,P)+.01),I(d-.01,P+T-.01),I(.01,P+T-.01)],N=[I(-.001,R-.001),I(d+.001,R-.001),I(d+.001,S+.001),I(-.001,S+.001)],O=C<0?[c.points,u.points,N]:[y.points];return B.every((G,J)=>O.some(j=>Ge(G,j))&&Ch(G,B[(J+1)%B.length],O).length===0)&&(w.threshold=b?m:g,w.stair={room:y,toward:M,face:P,wallFace:S,back:R,offset:C,count:A,depth:T,recess:v,bay:z},w.issue=g+e.sill+e.height>w.ceiling+.001?"height":void 0),w}function dc(i,e,t){return t.filter(n=>n.stair&&Math.abs(mt(i,e)-n.high)<1e-6&&(n.room.id===e.id||n.other?.id===e.id)&&(n.stair.recess||n.stair.offset<0)).map(n=>n.stair.bay)}function pm(i){let e=i.stair;if(!e||e.offset>=0)return i.threshold;let t=i.threshold;for(let n=0;n<e.count;n++){let r=e.face+e.depth*n/e.count;if(e.face+e.depth*(n+1)/e.count<=e.back||r>=e.wallFace)continue;let s=e.recess?i.low+(i.high-i.low)*(n+1)/e.count:i.high-(i.high-i.low)*n/e.count;t=Math.min(t,s)}return t}function _o(i,e){let t=s=>s.reduce((a,l,c)=>{let u=s[(c+1)%s.length];return a+l[0]*u[1]-u[0]*l[1]},0),n=t(e)>=0?1:-1,r=[],o=i;for(let s=0;s<e.length&&o.length>=3;s++){let a=e[s],l=e[(s+1)%e.length],c=f=>n*((l[0]-a[0])*(f[1]-a[1])-(l[1]-a[1])*(f[0]-a[0])),u=f=>{let p=[];return o.forEach((g,m)=>{let _=o[(m+1)%o.length],x=f*c(g),w=f*c(_);if(x>=-1e-9&&p.push(g),x>=-1e-9!=w>=-1e-9){let b=x/(x-w);p.push([g[0]+(_[0]-g[0])*b,g[1]+(_[1]-g[1])*b])}}),p},h=u(-1),d=u(1);h.length>=3&&Math.abs(t(h))>1e-8&&r.push(h),o=d}return r}function Ch(i,e,t){let n=[0,1],r=e[0]-i[0],o=e[1]-i[1];for(let l of t)l.forEach((c,u)=>{let h=l[(u+1)%l.length],d=h[0]-c[0],f=h[1]-c[1],p=r*f-o*d;if(Math.abs(p)<1e-9)return;let g=((c[0]-i[0])*f-(c[1]-i[1])*d)/p,m=((c[0]-i[0])*o-(c[1]-i[1])*r)/p;g>0&&g<1&&m>=0&&m<=1&&n.push(g)});n.sort((l,c)=>l-c);let s=l=>[i[0]+r*l,i[1]+o*l],a=[];for(let l=1;l<n.length;l++)n[l]-n[l-1]>1e-9&&!t.some(c=>Ge(s((n[l]+n[l-1])/2),c))&&a.push([s(n[l-1]),s(n[l])]);return a}function bo(i,e){let t=wn(e)>0?1:-1,n=[...i];for(let r=0;r<e.length&&n.length;r++){let o=e[r],s=e[(r+1)%e.length],a=c=>t*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let u=l[c],h=l[(c+1)%l.length],d=a(u),f=a(h);if(d>=0&&n.push(u),d>=0!=f>=0){let p=d/(d-f);n.push([u[0]+(h[0]-u[0])*p,u[1]+(h[1]-u[1])*p])}}}return n}function mm(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length],o=i[(t+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(e&&Math.sign(s)!==e)return!1;e=Math.sign(s)}}return!0}var ri=He(3662079,.95),Ih=He(3662079,1),oi=He(5995775,.34),pc=He(5995775,.22),fc=[-.55,.83],qe=-1,mc=16,yr=32,gm=48,Cs=64,rt=class{p=[];c=[];f=[];uv;tile;constructor(e=!1,t=!1){this.uv=e?[]:null,this.tile=t?[]:null}tri(e,t,n,r,o=r,s=r,a,l=qe,c=[0,1]){this.p.push(...e,...t,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let e=new Xe;return e.setAttribute("position",new Ae(this.p,3)),e.setAttribute("color",new Ae(this.c,3)),e.setAttribute("fold",new Ae(this.f,1)),this.uv&&e.setAttribute("uv",new Ae(this.uv,2)),this.tile&&e.setAttribute("tile",new Ae(this.tile,2)),e.computeBoundingSphere(),e}},Nt=class{p=[];c=[];f=[];seg(e,t,n=ri,r=qe){this.p.push(...e,...t),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(e,t,n,r,o){let[s,a]=e[1]<=t[1]?[e,t]:[t,e];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,qe);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,qe),this.seg(c,a,n,o)}geometry(){let e=new Xe;return e.setAttribute("position",new Ae(this.p,3)),e.setAttribute("color",new Ae(this.c,3)),e.setAttribute("fold",new Ae(this.f,1)),e}};function gc(i,e,t,n){let o=i.uv?2:0,s=(h,d)=>{let f=h*3+d;return{p:i.p.slice(f*3,f*3+3),c:i.c.slice(f*3,f*3+3),uv:i.uv?i.uv.slice(f*2,f*2+2):null,tile:i.tile?i.tile.slice(f*2,f*2+2):null}},a=(h,d,f)=>({p:h.p.map((p,g)=>p+(d.p[g]-p)*f),c:h.c.map((p,g)=>p+(d.c[g]-p)*f),uv:h.uv&&d.uv?h.uv.map((p,g)=>p+(d.uv[g]-p)*f):null,tile:h.tile}),l=(h,d,f)=>{for(let p=0;p<3;p++){let g=h*3+p;for(let m=0;m<3;m++)i.p[g*3+m]=d[p].p[m],i.c[g*3+m]=d[p].c[m];if(i.uv&&d[p].uv)for(let m=0;m<o;m++)i.uv[g*2+m]=d[p].uv[m];if(i.tile&&d[p].tile)for(let m=0;m<2;m++)i.tile[g*2+m]=d[p].tile[m];i.f[g]=f}},c=(h,d)=>{let f=i.p.length/9;for(let p of h)i.p.push(...p.p),i.c.push(...p.c),i.f.push(d),i.uv?.push(...p.uv??[.5,.5]),i.tile?.push(...p.tile??[0,1]);return f},u=i.p.length/9;for(let h=e;h<u;h++){let d=[s(h,0),s(h,1),s(h,2)],f=d.map(v=>v.p[1]>t+1e-6),p=d.map(v=>v.p[1]<t-1e-6);if(!f.some(Boolean))continue;if(!p.some(Boolean)){for(let v=0;v<3;v++)i.f[h*3+v]=n;continue}let g=i.f[h*3],m=(v,S)=>a(v,S,(t-v.p[1])/(S.p[1]-v.p[1])),_=f.filter(Boolean).length,x=_===1?f.indexOf(!0):f.indexOf(!1),w=d[x],b=d[(x+1)%3],y=d[(x+2)%3],M=m(w,b),E=m(y,w);_===1?(l(h,[w,M,E],n),c([M,b,y],g),c([M,y,E],g)):(l(h,[w,M,E],g),c([M,b,y],n),c([M,y,E],n))}}function _m(i,e,t,n){let r=i.p.length/6;for(let o=e;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=t+1e-6)continue;if(l[1]>=t-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let u=(t-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,t,l[2]+(c[2]-l[2])*u];for(let f=0;f<3;f++)i.p[o*6+f]=l[f],i.p[o*6+3+f]=h[f];let d=i.c.slice(o*6,o*6+3);i.p.push(...h,...c),i.c.push(...d,...d),i.f.push(n,n)}}var ut=Math.PI/180;function He(i,e){let t=new Q(i).multiplyScalar(e);return t.r=Math.min(1,t.r),t.g=Math.min(1,t.g),t.b=Math.min(1,t.b),t}function kw(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e}function mn(i,e=[]){let t=i.map(([n,r])=>new Ee(n,r));return $o.triangulateShape(t,e.map(n=>n.map(([r,o])=>new Ee(r,o))))}function bm(i,e,t,n,r,o,s){let a=new Q(s),l=f=>.5+.5*Math.min(1,Math.max(0,f/1.6));for(let f=0;f<4;f++){let p=e[f],g=e[(f+1)%4],m=t[f],_=t[(f+1)%4],x=g[0]-p[0],w=g[1]-p[1],b=Math.hypot(x,w);if(b<1e-6)continue;let M=.8+.28*((w/b*fc[0]-x/b*fc[1]+1)/2),E=(m[0]+_[0]-p[0]-g[0])/2*(-w/b)+(m[1]+_[1]-p[1]-g[1])/2*(x/b),v=Math.max(0,Math.min(1,E/Math.max(1e-6,Math.hypot(E,r-n)))),S=He(o,l(n)*M).lerp(a,v),T=He(o,l(r)*M).lerp(a,v);i.tri([p[0],n,p[1]],[m[0],r,m[1]],[_[0],r,_[1]],S,T,T),i.tri([p[0],n,p[1]],[_[0],r,_[1]],[g[0],n,g[1]],S,T,S)}let[c,u,h,d]=t;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[h[0],r,h[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[d[0],r,d[1]],[h[0],r,h[1]],a))}function vm(i,e,t,n,r,o,s,a,l,c){let u=new Q(l),h=[];for(let f=0;f<c;f++){let p=f/c*Math.PI*2;h.push({y:o+Math.cos(p)*s,s:r+Math.sin(p)*s})}let d=(f,p)=>{let g=e(f,h[p%c].s);return[g[0],h[p%c].y,g[1]]};for(let f=0;f<c;f++){let p=(f+.5)/c*Math.PI*2,g=He(a,.62+.4*Math.max(0,Math.cos(p)));i.tri(d(t,f),d(n,f+1),d(n,f),g),i.tri(d(t,f),d(t,f+1),d(n,f+1),g)}for(let f of[t,n]){let p=e(f,r),g=[p[0],o,p[1]];for(let m=0;m<c;m++)i.tri(g,d(f,m),d(f,m+1),u)}}function wt(i,e,t,n,r,o,s={}){let a=typeof n=="number"?()=>n:p=>Math.max(t+.002,n(p[0],p[1])),l=s.aoFrom??t,c=s.fold??qe,u=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),h=(s.holes??[]).map(p=>kw(p)>0?[...p].reverse():p),d=h.length?[...e,...h.flat()]:e,f=s.topFace===!1&&!s.bottom?[]:mn(e,h);if(s.topFace!==!1){let p=new Q(o);for(let[g,m,_]of f){let x=d[g],w=d[m],b=d[_];i.tri([x[0],a(x),x[1]],[b[0],a(b),b[1]],[w[0],a(w),w[1]],p,p,p,void 0,s.topFold??c)}}if(s.bottom){let p=He(r,.55);for(let[g,m,_]of f){let x=d[g],w=d[m],b=d[_];i.tri([x[0],t,x[1]],[w[0],t,w[1]],[b[0],t,b[1]],p,p,p,void 0,c)}}for(let p of[e,...h])for(let g=0;g<p.length;g++){let m=p[g],_=p[(g+1)%p.length],x=_[0]-m[0],w=_[1]-m[1],b=Math.hypot(x,w);if(b<1e-6||s.skipSide?.(m,_))continue;let M=.8+.28*((w/b*fc[0]-x/b*fc[1]+1)/2),E=a(m),v=a(_),S=He(r,u(t)*M),T=He(r,u(E)*M),A=He(r,u(v)*M);i.tri([m[0],t,m[1]],[m[0],E,m[1]],[_[0],v,_[1]],S,T,A,void 0,c),i.tri([m[0],t,m[1]],[_[0],v,_[1]],[_[0],t,_[1]],S,A,S,void 0,c)}}var Cw={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function Iw(i,e,t){let n=[(e[0]+t[0])/2,(e[1]+t[1])/2],r=t[0]-e[0],o=t[1]-e[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let u=a.points[(c+1)%a.points.length],h=u[0]-l[0],d=u[1]-l[1],f=Math.hypot(h,d)||1;if(Math.abs((r*d-o*h)/(s*f))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*h+(n[1]-l[1])*d)/(f*f)));return Math.hypot(l[0]+h*p-n[0],l[1]+d*p-n[1])<.4}))}function ym(i,e){return e.type==="pool"?lc(i,e):fo(i)+(e.offset??0)+(Ui(e.type)?.01:sc[e.type])}function Is(i){return wn(i)>=0?i:[...i].reverse()}function Lw(i,e){let t=i[e];if(Ui(t.type)||t.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===e||!(o.cut&&r>e||o.type==="pool")||o.points.length<3||o.points.every(s=>Ge(s,t.points))&&n.push(Is(o.points))}return n}function xm(i,e,t,n,r,o,s,a,l=0){let c=t[0]-e[0],u=t[1]-e[1],h=Math.hypot(c,u);if(h<1e-6)return;let d=-u/h*n*.5,f=c/h*n*.5;if(Math.abs(l)<1e-4){wt(i,Is([[e[0]+d,e[1]+f],[t[0]+d,t[1]+f],[t[0]-d,t[1]-f],[e[0]-d,e[1]-f]]),r,o,s,a,{aoFrom:r-1});return}let p=(b,y)=>[e[0]+d*y,b,e[1]+f*y],g=(b,y)=>[t[0]+d*y,b+l,t[1]+f*y],m=(b,y)=>{i.tri(b[0],b[1],b[2],y,y,y,void 0,qe),i.tri(b[0],b[2],b[3],y,y,y,void 0,qe),i.tri(b[0],b[2],b[1],y,y,y,void 0,qe),i.tri(b[0],b[3],b[2],y,y,y,void 0,qe)},_=new Q(a),x=new Q(He(s,.9)),w=new Q(He(s,.6));m([p(o,1),g(o,1),g(o,-1),p(o,-1)],_),m([p(r,1),g(r,1),g(r,-1),p(r,-1)],w),m([p(r,1),g(r,1),g(o,1),p(o,1)],x),m([p(r,-1),g(r,-1),g(o,-1),p(o,-1)],x),m([p(r,1),p(r,-1),p(o,-1),p(o,1)],x),m([g(r,1),g(r,-1),g(o,-1),g(o,1)],x)}function wm(i,e,t,n){let r=fo(t),o=t.outdoor??[];o.forEach((s,a)=>{if(s.points.length<3)return;let l=r+(s.offset??0),c=(w,b)=>l-ys(s,w,b),u=l-(s.type==="pool"?0:s.slope??0),h=Ui(s.type)&&s.height?s.height:sc[s.type],d={...Cw[s.type],top:h},f=Is(s.points),p=He(d.edge,d.edgeAlpha),g=s.open&&(s.type==="fence"||s.type==="pergola")?f.length-1:-1,m=w=>{if(s.outline!==!1)for(let b=0;b<f.length;b++){if(b===g)continue;let y=f[b],M=f[(b+1)%f.length];e.seg([y[0],w(y[0],y[1]),y[1]],[M[0],w(M[0],M[1]),M[1]],p,qe)}},_=n??i,x=new Q(n?1734832:d.color);switch(s.type){case"pool":{let w=new Q(d.side),b=new Q(He(d.side,.55)),y=new Q(932440),M=lc(t,s),E=ac(t,s),v=Vp(t,s);for(let[S,T,A]of mn(f)){let C=f[S],P=f[T],R=f[A];(n?_:i).tri([C[0],M,C[1]],[R[0],M,R[1]],[P[0],M,P[1]],x,x,x,void 0,qe),i.tri([C[0],v,C[1]],[R[0],v,R[1]],[P[0],v,P[1]],y,y,y,void 0,qe)}for(let S=0;S<f.length;S++){let T=f[S],A=f[(S+1)%f.length];i.tri([A[0],v,A[1]],[A[0],E,A[1]],[T[0],E,T[1]],b,w,w,void 0,qe),i.tri([A[0],v,A[1]],[T[0],E,T[1]],[T[0],v,T[1]],b,w,b,void 0,qe)}if(!s.above&&Th(t,s)){let S=new Q(660258),T=new Q(396054),A=v-.2,C=Math.min(l,E);for(let P=0;P<f.length;P++){let R=f[P],I=f[(P+1)%f.length];i.tri([R[0],A,R[1]],[R[0],C,R[1]],[I[0],C,I[1]],T,S,S,void 0,qe),i.tri([R[0],A,R[1]],[I[0],C,I[1]],[I[0],A,I[1]],T,S,T,void 0,qe)}for(let[P,R,I]of mn(f)){let F=f[P],z=f[R],B=f[I];i.tri([F[0],A,F[1]],[z[0],A,z[1]],[B[0],A,B[1]],T,T,T,void 0,qe)}if(s.outline!==!1)for(let P=0;P<f.length;P++){let R=f[P],I=f[(P+1)%f.length];e.seg([R[0],A,R[1]],[I[0],A,I[1]],He(d.edge,d.edgeAlpha*.35),qe),e.seg([R[0],A,R[1]],[R[0],C,R[1]],He(d.edge,d.edgeAlpha*.25),qe)}}if(E>l+.02){let S=new Q(2044240),T=new Q(1187123);for(let A=0;A<f.length;A++){let C=f[A],P=f[(A+1)%f.length];i.tri([C[0],l,C[1]],[C[0],E,C[1]],[P[0],E,P[1]],T,S,S,void 0,qe),i.tri([C[0],l,C[1]],[P[0],E,P[1]],[P[0],l,P[1]],T,S,T,void 0,qe)}m(()=>l+.005)}if(m(()=>E),m(()=>M+.005),s.outline!==!1)for(let S=0;S<f.length;S++){let T=f[S],A=f[(S+1)%f.length];e.seg([T[0],v+.005,T[1]],[A[0],v+.005,A[1]],He(d.edge,d.edgeAlpha*.4),qe)}break}case"fence":{for(let w=0;w<f.length;w++){if(w===g)continue;let b=f[w],y=f[(w+1)%f.length],M=Math.hypot(y[0]-b[0],y[1]-b[1]),E=Math.max(1,Math.round(M/2)),v=g>=0&&w===g-1?E:E-1;for(let S=0;S<=v;S++){let T=S/E,A=b[0]+(y[0]-b[0])*T,C=b[1]+(y[1]-b[1])*T,P=c(A,C);wt(i,Is([[A-.04,C-.04],[A+.04,C-.04],[A+.04,C+.04],[A-.04,C+.04]]),P,P+d.top,d.side,d.color)}for(let S of[.35,.85])e.seg([b[0],c(b[0],b[1])+S*d.top,b[1]],[y[0],c(y[0],y[1])+S*d.top,y[1]],p,qe)}break}case"pergola":{let w=d.top;for(let[b,y]of f){let M=c(b,y);wt(i,Is([[b-.06,y-.06],[b+.06,y-.06],[b+.06,y+.06],[b-.06,y+.06]]),M,M+w,d.side,d.color)}for(let b=0;b<f.length;b++){if(b===g)continue;let y=f[b],M=f[(b+1)%f.length],E=c(y[0],y[1])+w;if(xm(i,y,M,.12,E-.16,E,d.side,d.color,c(M[0],M[1])-c(y[0],y[1])),s.bracing){let v=c(y[0],y[1]),S=c(M[0],M[1]);e.seg([y[0],v+.25,y[1]],[M[0],S+w-.25,M[1]],p,qe),e.seg([M[0],S+.25,M[1]],[y[0],v+w-.25,y[1]],p,qe)}}if($p(f)){let b=Jp(f),y=b.x1-b.x0,M=b.z1-b.z0,E=y>=M,v=E?y:M,S=Math.max(1,Math.round(v/.6));for(let T=1;T<S;T++){let A=(E?b.x0:b.z0)+v*T/S,C=E?[A,b.z0+.06]:[b.x0+.06,A],P=E?[A,b.z1-.06]:[b.x1-.06,A],R=c(C[0],C[1])+w;xm(i,C,P,.06,R-.04,R+.08,d.side,d.color,c(P[0],P[1])-c(C[0],C[1]))}}m((b,y)=>c(b,y)+w+.004);break}case"balcony":{wt(i,f,l-.18,l+d.top,d.side,d.color,{aoFrom:l-.18}),m(()=>l+d.top+.004);let b=s.height&&s.height>.3?s.height:1,y=He(9417983,.42),M=He(3662079,.55);for(let E=0;E<f.length;E++){let v=f[E],S=f[(E+1)%f.length];if(Iw(t,v,S))continue;let T=Math.hypot(S[0]-v[0],S[1]-v[1]),A=l+d.top;e.seg([v[0],A+b,v[1]],[S[0],A+b,S[1]],M,qe),e.seg([v[0],A+.1,v[1]],[S[0],A+.1,S[1]],y,qe);let C=Math.max(1,Math.round(T/.12));for(let P=0;P<=C;P++){let R=P/C,I=v[0]+(S[0]-v[0])*R,F=v[1]+(S[1]-v[1])*R;e.seg([I,A,F],[I,A+b,F],P===0||P===C?M:y,qe)}}break}default:{let w=(y,M)=>c(y,M)+d.top,b=Lw(o,a);if(wt(i,f,u,s.slope?w:l+d.top,d.side,d.color,{aoFrom:u,holes:b}),m((y,M)=>w(y,M)+.004),s.type==="hedge"&&m((y,M)=>c(y,M)+.004),s.outline!==!1)for(let y of b)for(let M=0;M<y.length;M++){let E=y[M],v=y[(M+1)%y.length];e.seg([E[0],w(E[0],E[1])+.004,E[1]],[v[0],w(v[0],v[1])+.004,v[1]],p,qe)}}}})}var _c=.012,Fw=.012;function Sm(i,e,t,n,r,o=[],s){let a=[],l=[],c=[],u=[],h=(x,w,b,y,M,E,v)=>{for(let S of[x,w,b,x,b,y])a.push(S[0],S[1],S[2]),l.push(M[0],M[1],M[2]),c.push(E),u.push(v)},d=i.openings.map(x=>ks(i,x,e)).filter(x=>!!x);i.rooms.forEach((x,w)=>{if(x.points.length<3)return;let b=dc(i,x,d),y=x.points.map(P=>P[0]),M=x.points.map(P=>P[1]),E=Math.min(...y),v=Math.min(...M),S=Math.max(...y),T=Math.max(...M),A=Math.max(1,Math.ceil((S-E)/r)),C=Math.max(1,Math.ceil((T-v)/r));for(let P=0;P<A;P++)for(let R=0;R<C;R++){let I=E+(P+.5)*r,F=v+(R+.5)*r;if(!Ge([I,F],x.points)||o.some(J=>Ge([I,F],J))&&!b.some(J=>Ge([I,F],J)))continue;let z=E+P*r,B=v+R*r,N=Math.min(z+r,S),O=Math.min(B+r,T),G=mt(i,x)+_c;if(!b.length)h([z,G,B],[z,G,O],[N,G,O],[N,G,B],[0,1,0],w,-1);else{let J=[[[z,B],[z,O],[N,O],[N,B]]];for(let j of b)J=J.flatMap(ue=>_o(ue,j));for(let j of J)for(let ue=1;ue+1<j.length;ue++)for(let ne of[j[0],j[ue],j[ue+1]])a.push(ne[0],G,ne[1]),l.push(0,1,0),c.push(w),u.push(-1)}}});let f=i.rooms.length,p=(i.outdoor??[]).filter(x=>x.points.length>=3&&!Ui(x.type));if(p.length){let x=p.flatMap(S=>S.points.map(T=>T[0])),w=p.flatMap(S=>S.points.map(T=>T[1])),b=Math.floor(Math.min(...x)/r)*r,y=Math.floor(Math.min(...w)/r)*r,M=Math.max(1,Math.ceil((Math.max(...x)-b)/r)),E=Math.max(1,Math.ceil((Math.max(...w)-y)/r)),v=(S,T,A)=>ym(i,S)-(S.type==="pool"?0:ys(S,T,A))+_c;for(let S=0;S<M;S++)for(let T=0;T<E;T++){let A=b+S*r,C=y+T*r,P,R=[A+r/2,C+r/2];P=p.find(F=>F.type==="pool"&&Ge(R,F.points));for(let F=p.length-1;F>=0&&!P;F--)Ge(R,p[F].points)&&(P=p[F]);if(!P)continue;let I=(F,z)=>[F,v(P,F,z),z];h(I(A,C),I(A,C+r),I(A+r,C+r),I(A+r,C),[0,1,0],f,-1)}}let g=Math.min(i.cut_height,Gt(i)-i.elevation),m=[];e.forEach((x,w)=>{let b=an(i,x).top,y=x.b[0]-x.a[0],M=x.b[1]-x.a[1],E=Math.hypot(y,M);if(E<.05)return;let v=[y/E,M/E],S=[-v[1],v[0]],T=t[w],A=Nw(x,v,E,n),C=(I,F)=>I?i.rooms.findIndex(z=>z.id===I):F?f:-1;m.push({a:x.a,b:x.b,h:b,ra:C(x.roomLeft,!1),rb:C(x.roomRight,x.exterior),gaps:A});let P=(I,F,z)=>[F,z,...I.filter(B=>B>F+.005&&B<z-.005)].sort((B,N)=>B-N).filter((B,N,O)=>N===0||B>O[N-1]+.005),R=P(A.flatMap(I=>[I.s0,I.s1]),0,E);for(let I of[1,-1]){let F=I>0?x.roomLeft:x.roomRight,z=F?i.rooms.findIndex(H=>H.id===F):x.exterior?f:-1;if(z<0)continue;let B=F?i.rooms[z]:null,N=B?mt(i,B):an(i,x).bottom,O=B?N+Math.min(ni(i,B),x.height??1/0):b,G=Math.min(g,O-.02),J=P([G,(G+O)/2,...A.flatMap(H=>[H.y0+.01,H.y1-.01])],N+.02,O-.02),j=(I>0?x.left:x.right)+Fw,ue=[S[0]*I,S[1]*I],ne=(H,X)=>[x.a[0]+v[0]*H+ue[0]*j,X,x.a[1]+v[1]*H+ue[1]*j],de=H=>{let X=ne(H,0),oe=s?.(X[0],X[2]);return oe==null?1/0:oe-.02};for(let H=0;H<R.length-1;H++){let X=R[H+1]-R[H],oe=Math.max(1,Math.ceil(X/r));for(let ce=0;ce<oe;ce++){let le=R[H]+X/oe*ce,pe=R[H]+X/oe*(ce+1),Ue=(le+pe)/2;for(let De=0;De<J.length-1;De++){let Fe=J[De],Ze=J[De+1];if(Ze-Fe<.01)continue;let Ke=(Fe+Ze)/2;if(A.some(bt=>Ue>bt.s0&&Ue<bt.s1&&Ke>bt.y0&&Ke<bt.y1))continue;let _t=Fe>=g-1e-6?T:yr+T,kt=Math.min(Ze,de(le)),Kt=Math.min(Ze,de(pe));kt<=Fe+.005&&Kt<=Fe+.005||h(ne(le,Fe),ne(pe,Fe),ne(pe,Math.max(Fe,Kt)),ne(le,Math.max(Fe,kt)),[ue[0],0,ue[1]],z,_t)}}}}});for(let x of i.openings){let w=ks(i,x,e),b=w?.stair;if(!w||!b)continue;let y=i.rooms.findIndex(E=>E.id===b.room.id),M=(E,v,S)=>[w.start[0]+w.axis[0]*E+b.toward[0]*v,S,w.start[1]+w.axis[1]*E+b.toward[1]*v];for(let E=0;E<b.count;E++){let v=b.face+b.depth*E/b.count,S=b.face+b.depth*(E+1)/b.count,T=(b.recess?w.low+(w.high-w.low)*(E+1)/b.count:w.high-(w.high-w.low)*E/b.count)+_c;h(M(0,v,T),M(w.width,v,T),M(w.width,S,T),M(0,S,T),[0,1,0],y,-1)}if(b.offset>0){let E=w.threshold+_c;h(M(0,b.wallFace,E),M(w.width,b.wallFace,E),M(w.width,b.face,E),M(0,b.face,E),[0,1,0],y,-1)}}let _=[];for(let x of n){if(x.opening.type!=="door")continue;let w=e.find(M=>Tm(M,x)&&Dw(M,x));if(!w||!w.roomLeft||!w.roomRight)continue;let b=i.rooms.findIndex(M=>M.id===w.roomLeft),y=i.rooms.findIndex(M=>M.id===w.roomRight);b<0||y<0||_.push({id:x.opening.id,a:b,b:y,x:x.start[0]+x.axis[0]*(x.width/2),y:Math.min(1.1,x.top*.55),z:x.start[1]+x.axis[1]*(x.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(u),doors:_,blockers:m}}function Tm(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(t,n)||1;return Math.abs((e.start[0]-i.a[0])*n-(e.start[1]-i.a[1])*t)/r<.02&&Math.abs((e.axis[0]*t+e.axis[1]*n)/r)>.99}function Dw(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(t,n)||1,o=e.start[0]+e.axis[0]*(e.width/2),s=e.start[1]+e.axis[1]*(e.width/2),a=((o-i.a[0])*t+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}function Nw(i,e,t,n){let r=[];for(let o of n){if(!Tm(i,o))continue;let s=(o.start[0]-i.a[0])*e[0]+(o.start[1]-i.a[1])*e[1],l=o.axis[0]*e[0]+o.axis[1]*e[1]>0?s:s-o.width;l>t||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function zw(i,e){let t=Math.max(0,-e),n=Math.max(0,e);switch(i){case"ceiling":return .3+.7*t;case"spot":return .06+.94*t**5;case"pendant":return .25+.85*t**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(e);default:return 1}}function Bw(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Mm(i,e,t,n,r,o,s){let a=e-i.x,l=t-i.y,c=n-i.z,u=a*a+l*l+c*c,h=Math.sqrt(u)||1e-6,d=Bw(i),f=1/(1+u/(d*d)),p=f*Math.sqrt(f),g=Math.max(0,-(a*r+l*o+c*s)/h);if(i.direction){let m=(a*i.direction[0]+l*i.direction[1]+c*i.direction[2])/h,_=Math.cos((i.angle??60)*Math.PI/360),x=Math.cos((i.angle??60)*.8*Math.PI/360),w=Math.max(0,Math.min(1,(m-_)/(x-_)));return i.level*p*(.2+.8*g)*w*w*(3-2*w)}return i.level*p*(.2+.8*g)*zw(i.kind,l/h)}function Am(i,e,t=.7,n=[]){let r=[...e];i.doors.forEach((u,h)=>{let d=n[h]??.5;if(!(d<=.01))for(let[f,p]of[[u.a,u.b],[u.b,u.a]]){let g=[0,0,0];for(let _ of e){if(_.room!==f)continue;let x=_.x-u.x,w=_.y-u.y,b=_.z-u.z,y=Math.hypot(x,w,b)||1,M=Mm(_,u.x,u.y,u.z,x/y,w/y,b/y);g[0]+=_.color[0]*M,g[1]+=_.color[1]*M,g[2]+=_.color[2]*M}let m=Math.max(g[0],g[1],g[2]);m<.01||r.push({x:u.x,y:u.y,z:u.z,color:[g[0]/m,g[1]/m,g[2]/m],level:Math.min(1,m*.9*(.35+.65*d)),kind:"wall",room:p})}});let o=new Map;for(let u of r){let h=i.blockers.filter(f=>f.ra===u.room||f.rb===u.room),d={...u,color:u.color.map(f=>Math.pow(f,1.5)),walls:h};o.set(u.room,[...o.get(u.room)??[],d])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let u=0;u<l.length;u++){let h=o.get(l[u]);if(!h)continue;let d=u*3,f=0,p=0,g=0;for(let m of h){if(m.walls.length&&Lh(m,m.walls,s[d],s[d+1],s[d+2]))continue;let _=Mm(m,s[d],s[d+1],s[d+2],a[d],a[d+1],a[d+2]);f+=m.color[0]*_,p+=m.color[1]*_,g+=m.color[2]*_}c[d]=1-Math.exp(-f*t*1.6),c[d+1]=1-Math.exp(-p*t*1.6),c[d+2]=1-Math.exp(-g*t*1.6)}return c}function Lh(i,e,t,n,r){let o=t-i.x,s=r-i.z;for(let a of e){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=o*c-s*l;if(Math.abs(u)<1e-9)continue;let h=a.a[0]-i.x,d=a.a[1]-i.z,f=(h*c-d*l)/u;if(f<=1e-6||f>=1-1e-6)continue;let p=(h*s-d*o)/u;if(p<0||p>1)continue;let g=i.y+(n-i.y)*f;if(g>=a.h||g<(a.bottom??0))continue;let m=p*Math.hypot(l,c);if(!a.gaps.some(_=>m>_.s0&&m<_.s1&&g>_.y0&&g<_.y1))return!0}return!1}function Fh(i,e,t){let n=i.rooms.findIndex(r=>r.points.length>=3&&Ge([e,t],r.points));return n<0?i.rooms.length:n}function vo(i,e){return i&&e>=0&&e<i.length?i[e]:e}function Ow(i){let e=[...i].sort((n,r)=>n[0]-r[0]||n[1]-r[1]),t=n=>{let r=[];for(let o of n){for(;r.length>1;){let s=r[r.length-2],a=r[r.length-1];if((a[0]-s[0])*(o[1]-s[1])-(a[1]-s[1])*(o[0]-s[0])>1e-9)break;r.pop()}r.push(o)}return r.slice(0,-1)};return[...t(e),...t([...e].reverse())]}function Em(i,e,t,n,r,o){let s=t.map(l=>{let c=Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1])||1,u=(l.b[0]-l.a[0])/c,h=(l.b[1]-l.a[1])/c,d=n.filter(f=>Math.abs((f.start[0]-l.a[0])*h-(f.start[1]-l.a[1])*u)<.01).map(f=>{let p=(f.start[0]-l.a[0])*u+(f.start[1]-l.a[1])*h;return{s0:p,s1:p+f.width,y0:f.sill,y1:f.top}});return{a:l.a,b:l.b,h:an(e,l).top,bottom:an(e,l).bottom,ra:0,rb:0,gaps:d}}),a=e.rooms.map(l=>({origin:new U(0,mt(e,l),0),u:new U(1,0,0),v:new U(0,0,1),normal:new U(0,1,0),polygon:l.points,holes:r,room:l.id}));for(let l of t){let c=l.b[0]-l.a[0],u=l.b[1]-l.a[1],h=Math.hypot(c,u);if(h<.01)continue;let d=new U(c/h,0,u/h),f=an(e,l);for(let[p,g,m]of[[l.roomLeft,l.left,1],[l.roomRight,l.right,-1]]){if(!p)continue;let _=new U(-d.z*m,0,d.x*m),x=new U(l.a[0],f.bottom,l.a[1]).addScaledVector(_,g+.003),w=[];for(let b of n){let y=new U(b.start[0]-l.a[0],0,b.start[1]-l.a[1]);if(Math.abs(y.x*d.z-y.z*d.x)>.01)continue;let M=y.dot(d);M+b.width<0||M>h||w.push([[M,b.sill-f.bottom],[M+b.width,b.sill-f.bottom],[M+b.width,b.top-f.bottom],[M,b.top-f.bottom]])}a.push({origin:x,u:d,v:new U(0,1,0),normal:_,polygon:[[0,0],[h,0],[h,f.top-f.bottom],[0,f.top-f.bottom]],holes:w,room:p,fold:o[t.indexOf(l)]})}}for(let l of e.furniture.filter(c=>c.rotation_x||c.rotation_z)){let c=Pt(e,l),u=ic(l,c).map(f=>new U(...f)),h=Ms(e,l.x,l.z)?.id,d=[...a];for(let f of e.furniture){if(f===l||!(Ah.has(f.type)||yt(f.type)?.surface)||Ms(e,f.x,f.z)?.id!==h)continue;let p=ic(f,Pt(e,f)).slice(4).map(b=>new U(...b)),g=p[1].clone().sub(p[0]).normalize(),m=p[3].clone().sub(p[0]).normalize(),_=new U().crossVectors(m,g).normalize();_.y<0&&_.negate();let x=p[0].distanceTo(p[1]),w=p[0].distanceTo(p[3]);d.push({origin:p[0],u:g,v:m,normal:_,polygon:[[0,0],[x,0],[x,w],[0,w]],holes:[],room:h,fold:Cs})}for(let f of d){if(f.room!==h)continue;let p=u.map(T=>T.clone().sub(f.origin).dot(f.normal));if(Math.max(...p)<-.01)continue;let g=Math.max(0,Math.min(...p));if(g>.35)continue;let m=Ow(u.map(T=>{let A=T.clone().sub(f.origin);return[A.dot(f.u),A.dot(f.v)]}));if(m.length<3)continue;let _=m.reduce((T,A)=>T+A[0],0)/m.length,x=m.reduce((T,A)=>T+A[1],0)/m.length,w=.055+g*.15,b=m.map(([T,A])=>{let C=Math.hypot(T-_,A-x)||1;return[T+(T-_)*w/C,A+(A-x)*w/C]}),y=new Q(1-.45*Math.exp(-g*8),1-.45*Math.exp(-g*8),1-.45*Math.exp(-g*8)),M=new Q(1,1,1),E=mn(f.polygon).map(([T,A,C])=>[f.polygon[T],f.polygon[A],f.polygon[C]]),v=i.count,S=(T,A)=>{for(let C of E){let P=[bo(T,C)];for(let R of f.holes)for(let[I,F,z]of mn(R))P=P.flatMap(B=>_o(B,[R[I],R[F],R[z]]));for(let R of P)for(let I=1;I+1<R.length;I++){let F=[R[0],R[I],R[I+1]],z=G=>f.origin.clone().addScaledVector(f.u,G[0]).addScaledVector(f.v,G[1]).addScaledVector(f.normal,.003).toArray(),B=z([(F[0][0]+F[1][0]+F[2][0])/3,(F[0][1]+F[1][1]+F[2][1])/3]);if(Lh({x:l.x,y:c+l.h/2,z:l.z},s,B[0],B[1],B[2]))continue;let N=(T[1][1]-T[2][1])*(T[0][0]-T[2][0])+(T[2][0]-T[1][0])*(T[0][1]-T[2][1]),O=G=>{let J=((T[1][1]-T[2][1])*(G[0]-T[2][0])+(T[2][0]-T[1][0])*(G[1]-T[2][1]))/N,j=((T[2][1]-T[0][1])*(G[0]-T[2][0])+(T[0][0]-T[2][0])*(G[1]-T[2][1]))/N;return new Q(A[0].r*J+A[1].r*j+A[2].r*(1-J-j),A[0].g*J+A[1].g*j+A[2].g*(1-J-j),A[0].b*J+A[1].b*j+A[2].b*(1-J-j))};Math.abs(N)>1e-10&&i.tri(z(F[0]),z(F[1]),z(F[2]),O(F[0]),O(F[1]),O(F[2]))}}};for(let[T,A,C]of mn(m))S([m[T],m[A],m[C]],[y,y,y]);for(let T=0;T<m.length;T++){let A=(T+1)%m.length;S([m[T],b[T],b[A]],[y,M,M]),S([m[T],b[A],m[A]],[y,M,y])}f.fold!==void 0&&gc(i,v,e.cut_height,f.fold)}}}var Wn=1e-4;function Dh(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e/2}function Rm(i,e,t,n){let r=[e[0]-i[0],e[1]-i[1]],o=[n[0]-t[0],n[1]-t[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((t[0]-i[0])*o[1]-(t[1]-i[1])*o[0])/s,l=((t[0]-i[0])*r[1]-(t[1]-i[1])*r[0])/s;return a>Wn&&a<1-Wn&&l>-Wn&&l<1+Wn?a:null}function Nh(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-e[0])*n+(i[1]-e[1])*r)/o;return s<=Wn||s>=1-Wn?null:Math.abs((i[0]-e[0])*r-(i[1]-e[1])*n)/Math.sqrt(o)<Wn?s:null}function Uw(i,e){for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];for(let o=0;o<e.length;o++){let s=e[o],a=e[(o+1)%e.length];if(Rm(n,r,s,a)!==null||Nh(s,n,r)!==null||Nh(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<Wn)return!0}}return Ge(i[0],e)||Ge(e[0],i)}function Vw(i){let e=i.map(o=>Dh(o)>=0?o:[...o].reverse()),t=[];e.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],u=[0,1];e.forEach((h,d)=>{if(d!==s)for(let f=0;f<h.length;f++){let p=h[f],g=h[(f+1)%h.length],m=Rm(l,c,p,g)??Nh(p,l,c);m!==null&&u.push(m)}}),u.sort((h,d)=>h-d);for(let h=1;h<u.length;h++){if(u[h]-u[h-1]<Wn)continue;let d=[l[0]+(c[0]-l[0])*u[h-1],l[1]+(c[1]-l[1])*u[h-1]],f=[l[0]+(c[0]-l[0])*u[h],l[1]+(c[1]-l[1])*u[h]],p=Math.hypot(f[0]-d[0],f[1]-d[1]),g=[(d[0]+f[0])/2+(f[1]-d[1])/p*.001,(d[1]+f[1])/2-(f[0]-d[0])/p*.001];e.some((m,_)=>_!==s&&Ge(g,m))||t.some(([m,_])=>Math.hypot(m[0]-d[0],m[1]-d[1])<Wn&&Math.hypot(_[0]-f[0],_[1]-f[1])<Wn)||t.push([d,f])}}});let n=[],r=new Set;for(let o=0;o<t.length;o++){if(r.has(o))continue;r.add(o);let s=[t[o][0]],a=t[o][1];for(let l=0;l<t.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=t.findIndex(([u],h)=>!r.has(h)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(t[c][0]),a=t[c][1]}s.length>=3&&Dh(s)>1e-6&&n.push(s)}return n}function zh(i){let e=i.filter(o=>o.length>=3),t=e.map((o,s)=>s),n=o=>t[o]===o?o:t[o]=n(t[o]);for(let o=0;o<e.length;o++)for(let s=o+1;s<e.length;s++)n(o)!==n(s)&&Uw(e[o],e[s])&&(t[n(s)]=n(o));let r=new Map;return e.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:Vw(o))}function Gw(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-e[0])*n+(i[1]-e[1])*r)/o)):0;return Math.hypot(i[0]-e[0]-n*s,i[1]-e[1]-r*s)}function Pm(i,e,t=.03){return i.every(n=>Ge(n,e)||e.some((r,o)=>Gw(n,r,e[(o+1)%e.length])<=t))}function Bh(i,e){let t=Dh(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return t.map((r,o)=>{let s=n(t[(o-1+t.length)%t.length],r),a=n(r,t[(o+1)%t.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*e,r[1]+(s[1]+a[1])/l*e]})}var km=!1;function Cm(i){km=i}function Im(i,e,t,n,r=km){let o=r||i.detail==="low"?12:i.detail==="high"?40:24,s=i.w*e,a=i.d*t,l=i.h*n,c;if(i.shape==="polygon"){let u=i.points??[],h=[];for(let[d,f,p]of mn(u)){for(let g of[d,p,f])h.push(u[g][0]*s,0,u[g][1]*a);for(let g of[d,f,p])h.push(u[g][0]*s,l,u[g][1]*a)}for(let d=0;d<u.length;d++){let f=u[d],p=u[(d+1)%u.length];h.push(f[0]*s,0,f[1]*a,p[0]*s,l,p[1]*a,p[0]*s,0,p[1]*a,f[0]*s,0,f[1]*a,f[0]*s,l,f[1]*a,p[0]*s,l,p[1]*a)}c=new Xe,c.setAttribute("position",new Ae(h,3))}else if(i.shape==="sphere"||i.shape==="ellipsoid"){c=new Qo(.5,o,Math.max(6,o/2));let u=Math.min(s,a,l);c.scale(i.shape==="sphere"?u:s,i.shape==="sphere"?u:l,i.shape==="sphere"?u:a),c.translate(0,l/2,0)}else if(i.shape==="rounded_box"){let u=o===12?3:o===40?8:5,h=Math.min(i.radius??.08,.49);c=new ki(1,1,1,u,u,u);let d=c.getAttribute("position"),f=.5-h;for(let p=0;p<d.count;p++){let g=new U().fromBufferAttribute(d,p),m=g.clone().clampScalar(-f,f);g.sub(m).normalize().multiplyScalar(h).add(m),d.setXYZ(p,g.x,g.y,g.z)}c.scale(s,l,a),c.translate(0,l/2,0)}else if(i.shape==="torus"){let u=Math.min(.24,i.thickness??.06);c=new es(.5-u,u,Math.max(6,o/2),o),c.scale(s,l,a),c.translate(0,l/2,0)}else if(i.shape==="pipe"){let u=(i.path??[]).map(([w,b,y])=>new U(w*s,(b+.5)*l,y*a));if(u.length<2)return null;let h=new Qr(u,!1,"centripetal"),d=(i.radius??.1)*Math.min(s,a,l),f=new to(h,Math.min(256,o*(u.length-1)),d,Math.max(8,o/2),!1),p=new to(h,Math.min(256,o*(u.length-1)),Math.max(d*.05,d-(i.thickness??.025)*Math.min(s,a,l)),Math.max(8,o/2),!1),g=f.toNonIndexed(),m=p.toNonIndexed(),_=[...g.getAttribute("position").array],x=m.getAttribute("position").array;for(let w=0;w<x.length;w+=9)_.push(...x.slice(w,w+3),...x.slice(w+6,w+9),...x.slice(w+3,w+6));c=new Xe,c.setAttribute("position",new Ae(_,3));for(let w of[f,p,g,m])w.dispose()}else if(i.shape==="bowl"){let u=Math.min(.2,i.thickness??.04);c=new Jo([new Ee(0,0),new Ee(.5,0),new Ee(.5,1),new Ee(.5-u,1),new Ee(.5-u,u),new Ee(0,u)],o),c.scale(s,l,a)}else return null;return c.translate(i.x*e,i.y*n,i.z*t),c.computeVertexNormals(),c}var D={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},fe=He(5995775,.3),Qe=He(5995775,.17),Je=He(3662079,.45),wr=class i{buf;lines;tf;mirrored;constructor(e,t,n){this.buf=e,this.lines=t,this.tf=n,this.mirrored=Bm(n)}shape(e,t,n,r,o,s){let a=Im(e,t,n,r);if(!a)return!1;let l=a.index?a.toNonIndexed():a,c=l.getAttribute("position"),u=l.getAttribute("normal"),h=new Q(s),d=p=>{let[g,m]=this.tf(c.getX(p),c.getZ(p));return[g,o+c.getY(p),m]},f=p=>h.clone().multiplyScalar(.78+.2*Math.max(0,u.getY(p))+.14*(u.getX(p)*-.55+u.getZ(p)*.83));for(let p=0;p<c.count;p+=3){let g=p+(this.mirrored?2:1),m=p+(this.mirrored?1:2);this.buf.tri(d(p),d(g),d(m),f(p),f(g),f(m))}return l!==a&&l.dispose(),a.dispose(),!0}rotated(e,t,n){let r=n*ut,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(e+(l-e)*o-(c-t)*s,t+(l-e)*s+(c-t)*o))}box(e,t,n,r,o,s,a,l=a,c=null){if(t-e<1e-4||s-o<1e-4||r-n<1e-4)return;let u=[this.tf(e,o),this.tf(e,s),this.tf(t,s),this.tf(t,o)];wt(this.buf,Oh(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(e,t,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])],c=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])];if(l!==Oh(l)&&(l.reverse(),c.reverse()),bm(this.buf,l,c,n,r,o,s),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(e,t,n,r,o,s,a,l=a,c=.03,u=null){if(c=Math.min(c,(t-e)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(e,t,n,r,o,s,a,l,u);this.loft([e+c,t-c,o+c,s-c],[e,t,o,s],n,n+c,a),r-n-2*c>.005&&this.box(e,t,n+c,r-c,o,s,a,a,u),this.loft([e,t,o,s],[e+c,t-c,o+c,s-c],r-c,r,a,l)}lyingCyl(e,t,n,r,o,s,a,l,c=l,u=12,h=null){let d=Math.min(a,o-r)/2;if(d<1e-4||s<1e-4)return;let f=(r+o)/2,p=e==="x"?t:n,g=e==="x"?n:t,m=(x,w)=>e==="x"?this.tf(x,w):this.tf(w,x),_=this.buf.p.length;if(vm(this.buf,m,p-s/2,p+s/2,g,f,d,l,c,u),this.mirrored&&Wh(this.buf,_),h)for(let x of[p-s/2,p+s/2])for(let w=0;w<u;w++){let b=w/u*Math.PI*2,y=(w+1)/u*Math.PI*2;this.line(m(x,g+Math.sin(b)*d),m(x,g+Math.sin(y)*d),f+Math.cos(b)*d,f+Math.cos(y)*d,h)}}cyl(e,t,n,r,o,s,a=s,l=10,c=null){let u=[];for(let h=0;h<l;h++){let d=h/l*Math.PI*2;u.push(this.tf(e+Math.cos(d)*n,t+Math.sin(d)*n))}if(wt(this.buf,Oh(u),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let h=0;h<l;h++)this.line(u[h],u[(h+1)%l],o,o,c)}seg(e,t,n,r,o,s,a=fe){this.line(this.tf(e,n),this.tf(r,s),t,o,a)}line(e,t,n,r,o){this.lines.seg([e[0],n,e[1]],[t[0],r,t[1]],o,qe)}outline(e,t,n,r){for(let o=0;o<4;o++){let s=e[o],a=e[(o+1)%4];this.line(s,a,n,n,r),this.line(s,s,t,n,r)}}};function Bm(i){let e=i(0,0),t=i(1,0),n=i(0,1);return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])<0}function Oh(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}function Mr(i,e,t,n,r,o,s=D.metal,a=!1){let l=e/2-o-r,c=t/2-o-r;for(let u of[-1,1])for(let h of[-1,1]){let d=u*l,f=h*c;a?i.loft([d-r*.3,d+r*.3,f-r*.3,f+r*.3],[d-r/2,d+r/2,f-r/2,f+r/2],0,n,s):i.box(d-r/2,d+r/2,0,n,f-r/2,f+r/2,s)}}function Ls(i,e,t,n,r,o,s,a=null,l=!1){let c=(t-e)/s;for(let u=1;u<s;u++){let h=e+c*u;i.seg(h,n,o,h,r,o,Qe)}for(let u=0;u<s;u++){let h=e+c*(u+.5),d=a??r-.08;if(l)i.seg(h-Math.min(.1,c/4),d,o+.012,h+Math.min(.1,c/4),d,o+.012,Je);else{let f=s>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(f,d-.08,o+.012,f,d+.08,o+.012,Je)}}}function Lm(i,e,t,n,r){let o=-e/2,s=e/2,a=-t/2,l=t/2,c=Math.min(.2,e*.12),u=n*.5,h=Math.min(.24,t*.28);Mr(i,e,t,.07,.05,.05,D.wood,!0),i.pad(o,s,.07,u-.08,a+.02,l,D.fabric,D.fabricTop,.04,fe),i.loft([o,s,a,a+h],[o+.01,s-.01,a,a+h*.5],u-.08,n,D.fabric,D.fabricTop,fe),i.pad(o,o+c,u-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,fe),i.pad(s-c,s,u-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,fe);let f=(s-c-(o+c))/r;for(let p=0;p<r;p++){let g=o+c+f*p+.02,m=g+f-.04;i.pad(g,m,u-.08,u+.05,a+h+.02,l-.06,D.cushion,D.cushion,.04),i.loft([g+.01,m-.01,a+h*.55,a+h+.14],[g+.03,m-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,D.cushion)}}function Fm(i,e,t,n,r){let o=-e/2,s=e/2,a=-t/2,l=t/2,c=Math.max(.3,Math.min(.95,t*.5,e*(r?.34:.45))),u=Math.min(.24,c*.28),h=Math.min(.2,c*.24),d=n*.5,f=n*.72,p=r?[-1,1]:[-1],g=(v,S)=>i.loft([v-.015,v+.015,S-.015,S+.015],[v-.025,v+.025,S-.025,S+.025],0,.07,D.wood);g(o+.06,a+.06),g(s-.06,a+.06),r||g(s-.06,a+c-.06);for(let v of p)g(v*(e/2-.06),l-.06),g(v*(e/2-c+.06),l-.06);i.pad(o,s,.07,d-.08,a+.02,a+c,D.fabric,D.fabricTop,.04,fe);for(let v of p){let[S,T]=v<0?[o+.02,o+c]:[s-c,s-.02];i.pad(S,T,.07,d-.08,a+c-.02,l,D.fabric,D.fabricTop,.04,fe)}i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],d-.08,n,D.fabric,D.fabricTop,fe);for(let v of p)v<0?i.loft([o,o+u,a+u,l],[o,o+u*.5,a+u,l-.01],d-.08,n,D.fabric,D.fabricTop,fe):i.loft([s-u,s,a+u,l],[s-u*.5,s,a+u,l-.01],d-.08,n,D.fabric,D.fabricTop,fe);for(let v of p){let[S,T]=v<0?[o+u,o+c]:[s-c,s-u];i.pad(S,T,d-.08,f,l-h,l,D.fabric,D.fabricTop,.04,fe)}r||i.pad(s-h,s,d-.08,f,a+.02,a+c-.02,D.fabric,D.fabricTop,.04,fe);let m=o+u,_=r?s-u:s-h,x=Math.max(1,Math.round((_-m)/.62)),w=(_-m)/x;for(let v=0;v<x;v++){let S=m+w*v+.02,T=S+w-.04;i.pad(S,T,d-.08,d+.05,a+u+.02,a+c-.04,D.cushion,D.cushion,.04),i.loft([S+.01,T-.01,a+u*.55,a+u+.14],[S+.03,T-.03,a+u*.4,a+u*.4+.06],d+.03,n*.93,D.cushion)}let b=a+c,y=l-h;if(y-b<.2)return;let M=Math.max(1,Math.round((y-b)/.62)),E=(y-b)/M;for(let v of p)for(let S=0;S<M;S++){let T=b+E*S+.02,A=T+E-.04;v<0?(i.pad(o+u+.02,o+c-.04,d-.08,d+.05,T,A,D.cushion,D.cushion,.04),i.loft([o+u*.55,o+u+.14,T+.01,A-.01],[o+u*.4,o+u*.4+.06,T+.03,A-.03],d+.03,n*.93,D.cushion)):(i.pad(s-c+.04,s-u-.02,d-.08,d+.05,T,A,D.cushion,D.cushion,.04),i.loft([s-u-.14,s-u*.55,T+.01,A-.01],[s-u*.4-.06,s-u*.4,T+.03,A-.03],d+.03,n*.93,D.cushion))}}function Hw(i,e,t,n){let r=-t/2,o=t/2,s=-e/2,a=e/2,l=Math.min(.32,n*.36);Mr(i,e,t,.08,.06,.03,D.wood,!0),i.box(s,a,.08,l,r+.06,o,D.wood,D.woodTop,fe),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,D.white,D.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,D.wood,D.woodTop,fe),i.box(s,a,n-.05,n,r,r+.09,D.wood,D.woodTop,Qe);let c=l+.2,u=r+(t-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,u,o-.01,D.cushion,D.fabricTop,.025,Qe),i.lyingCyl("x",0,u+.05,c-.02,c+.09,e-.02,.1,D.cushion,D.fabricTop,8);let h=e>1.2?2:1,d=(e-.2)/h;for(let f=0;f<h;f++){let p=s+.1+d*f,g=r+.12,m=Math.min(.42,t*.2),_=.1;i.loft([p+.03+_,p+d-.03-_,g+_*.5,g+m-_*.5],[p+.03,p+d-.03,g,g+m],c,c+.06,D.whiteTop),i.loft([p+.03,p+d-.03,g,g+m],[p+.03+_,p+d-.03-_,g+_*.5,g+m-_*.5],c+.06,c+.12,D.whiteTop,D.whiteTop,Qe)}}function Ww(i,e,t,n){let r=Math.min(.46,n*.52);Mr(i,e,t,r-.04,.035,.02,D.wood,!0),i.box(-e/2,e/2,r-.04,r,-t/2,t/2,D.wood,D.woodTop,fe),i.pad(-e/2+.02,e/2-.02,r,r+.04,-t/2+.05,t/2-.03,D.cushion,D.cushion,.015),i.loft([-e/2,e/2,-t/2+.02,-t/2+.07],[-e/2+.02,e/2-.02,-t/2,-t/2+.03],r,n,D.wood,D.woodTop,fe)}function Xw(i,e,t,n){Mr(i,e,t,n-.04,.06,.05,D.wood,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.wood,D.woodTop,Je),i.box(-e/2+.08,e/2-.08,n-.1,n-.04,-t/2+.08,t/2-.08,D.body)}function Kw(i,e,t,n){let r=-e/2,o=e/2;i.box(r,o,n-.035,n,-t/2,t/2,D.wood,D.woodTop,fe),i.box(r,r+.03,0,n-.035,-t/2+.03,t/2-.03,D.metal);let s=Math.min(.42,e*.32);i.box(o-s,o,0,n-.035,-t/2+.03,t/2-.02,D.body,D.bodyTop,fe);let a=t/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,Qe);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,Je);i.box(-.3,.3,n+.08,n+.42,-t/2+.08,-t/2+.11,D.dark,D.dark,Je),i.box(-.03,.03,n,n+.1,-t/2+.09,-t/2+.13,D.metal)}function qi(i,e,t,n,r,o=null,s=!1){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,D.body,D.bodyTop,fe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark),Ls(i,-e/2,e/2,.08,n,t/2-.02,r,o,s)}function Yw(i,e,t,n){i.box(-e/2,-e/2+.025,0,n,-t/2,t/2,D.wood,D.woodTop,fe),i.box(e/2-.025,e/2,0,n,-t/2,t/2,D.wood,D.woodTop,fe),i.box(-e/2+.025,e/2-.025,0,n,-t/2,-t/2+.015,D.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-e/2+.025,e/2-.025,a,a+.025,-t/2+.015,t/2,D.wood,D.woodTop,Qe),s<o){let l=-e/2+.025+.04,c=s*3;for(;l<e/2-.025-.12;){let u=.03+c*7%5*.008,h=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+h,-t/2+.04,t/2-.05,c%3?D.fabric:D.cushion,D.fabricTop),l+=u+.006,c++}}}}function qw(i,e,t,n){let r=Math.max(1,Math.round(e/.6));qi(i,e,t-.02,n-.04,r,n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,fe)}function Zw(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,D.white,D.whiteTop,fe);let r=n*.62;i.seg(-e/2,r,t/2,e/2,r,t/2,Qe);let o=e/2-.06;i.seg(o,r+.08,t/2+.015,o,r+.4,t/2+.015,Je),i.seg(o,r-.4,t/2+.015,o,r-.08,t/2+.015,Je)}function $w(i,e,t,n){let r=t/2-Om;i.box(-e/2,e/2,.02,n,-t/2,r,D.body,D.bodyTop,fe),i.box(-e/2+.05,e/2-.05,0,.02,-t/2+.05,r-.05,D.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-e/2+.03,o,r+.001,-.03,o,r+.001,Qe),i.seg(.03,o,r+.001,e/2-.03,o,r+.001,Qe))}var Om=.06;function Um(i,e,t,n,r){let o=i.p.length;Jw(i,e,t,n,r),e.mirror&&Wh(i,o),Pn(i.p,o,e,t+e.h/2)}function Jw(i,e,t,n,r){let o=e.rotation*ut,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(b,y)=>[e.x+l*b*s-y*a,e.z+l*b*a+y*s],u=t+.05,h=t+e.h-.02,d=new Q(.75,.1,.14),f=new Q(D.dark),p=new Q(D.accent),g=e.w/2-.006,m=(b,y,M)=>{let E=M/_,v=new Q(2043212).lerp(d,E),S=new Q(D.body).lerp(d,E*.8),T=Math.cos(M),A=Math.sin(M),C=(I,F)=>c(b+y*(I*T-F*A),e.d/2+I*A+F*T),P=(I,F,z,B)=>{let[N,O,G,J]=I;i.tri([N[0],F,N[1]],[O[0],F,O[1]],[G[0],z,G[1]],B),i.tri([N[0],F,N[1]],[G[0],z,G[1]],[J[0],z,J[1]],B)},R=(I,F,z,B,N,O,G,J=G)=>{let j=[C(I,O),C(F,O),C(F,N),C(I,N)];P([j[0],j[1],j[1],j[0]],z,B,J),P([j[3],j[2],j[2],j[3]],z,B,G),P([j[0],j[3],j[3],j[0]],z,B,G),P([j[1],j[2],j[2],j[1]],z,B,G),P([j[0],j[1],j[2],j[3]],B,B,G),P([j[3],j[2],j[1],j[0]],z,z,G)};return R(0,g,u,h,-Om,0,S,v),R(g-.05,g-.03,t+e.h*.45,t+e.h*.75,.005,.025,p),R},_=1.83;m(-e.w/2,1,n*_)(.12,.3,t+e.h*.5,t+e.h*.68,.001,.005,f),m(e.w/2,-1,r*_)(.06,g-.06,t+e.h*.52,t+e.h*.86,.001,.005,f)}function jw(i,e,t,n){qi(i,e,t-.02,n-.04,1,n-.24,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.dark,D.dark,fe);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*e/.6,l=o*t/.62;i.cyl(a,l,s,n,n+.004,D.dark,1451583,12,Je)}}function Qw(i,e,t,n){qi(i,e,t-.02,n-.04,Math.max(1,Math.round(e/.45)),n-.2);let r=Math.min(.5,e-.2);i.box(-e/2,-r/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,fe),i.box(r/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,fe),i.box(-r/2,r/2,n-.04,n,-t/2,-t/2+.1,D.whiteTop,D.whiteTop),i.box(-r/2,r/2,n-.04,n,t/2-.08,t/2,D.whiteTop,D.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-t/2+.1,t/2-.08,D.metal,D.metal,Je),i.cyl(0,-t/2+.05,.02,n,n+.28,D.metal,D.metal,8),i.box(-.015,.015,n+.24,n+.28,-t/2+.05,-t/2+.22,D.metal)}function e1(i,e,t,n){i.box(-e/2,e/2,0,n-.02,-t/2,t/2,D.white,D.whiteTop,fe),i.box(-e/2,e/2,n-.02,n,-t/2,-t/2+.07,D.whiteTop),i.box(-e/2,e/2,n-.02,n,t/2-.07,t/2,D.whiteTop),i.box(-e/2,-e/2+.07,n-.02,n,-t/2+.07,t/2-.07,D.whiteTop),i.box(e/2-.07,e/2,n-.02,n,-t/2+.07,t/2-.07,D.whiteTop),i.box(-e/2+.07,e/2-.07,n-.03,n-.02,-t/2+.07,t/2-.07,D.glass,D.glass,Je),i.cyl(-e/2+.04,0,.02,n,n+.12,D.metal,D.metal,8)}function t1(i,e,t,n){i.box(-e/2,e/2,0,.05,-t/2,t/2,D.whiteTop,D.whiteTop,fe),i.cyl(0,0,.04,.05,.052,D.metal,D.metal,8);for(let[r,o,s,a]of[[-e/2,t/2,e/2,t/2],[e/2,-t/2,e/2,t/2]])i.seg(r,.05,o,s,.05,a,Je),i.seg(r,n,o,s,n,a,Je),i.seg(s,.05,a,s,n,a,Je);i.cyl(-e/2+.06,-t/2+.06,.015,.05,n-.05,D.metal,D.metal,6),i.cyl(-e/2+.2,-t/2+.2,.1,n-.08,n-.06,D.metal,D.metal,12,Je)}function n1(i,e,t,n){let r=Math.min(.18,t*.3);i.box(-e/2,e/2,.45,n,-t/2,-t/2+r,D.white,D.whiteTop,fe),i.box(-e*.3,e*.3,0,.36,-t/2+r-.02,t/2-.12,D.white,D.whiteTop),i.cyl(0,t/2-.26,Math.min(e/2,.19),.36,.41,D.white,D.whiteTop,12,fe),i.box(-e/2+.02,e/2-.02,.41,.43,-t/2+r,-t/2+r+.05,D.whiteTop)}function i1(i,e,t,n){qi(i,e,t-.02,n-.12,e>.8?2:1,n-.3),i.box(-e/2,e/2,n-.12,n,-t/2,t/2,D.white,D.whiteTop,fe),i.box(-e/2+.07,e/2-.07,n-.005,n,-t/2+.12,t/2-.06,D.glass,D.glass,Je),i.cyl(0,-t/2+.06,.018,n,n+.2,D.metal,D.metal,8),i.box(-e/2+.04,e/2-.04,n+.35,n+1,-t/2,-t/2+.02,D.glass,D.glass,Je)}function r1(i,e,t,n){qi(i,e,t,n,Math.max(2,Math.round(e/.6)),n*.55,!0);let r=Math.min(e*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-t/2+.08,-t/2+.24,D.metal),i.box(-.02,.02,n+.02,n+.12,-t/2+.14,-t/2+.18,D.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-t/2+.12,-t/2+.16,D.dark,D.dark,Je)}function o1(i,e,t,n){let r=Math.min(e,t)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,D.pot,D.pot,10,fe),i.cyl(0,0,r*.08,o,n*.55,D.wood,D.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),u=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-o)*.16,D.plant,D.plantTop,8,a===s-1?Qe:null)}}function s1(i,e,t){i.box(-e/2,e/2,0,.012,-t/2,t/2,D.fabric,D.fabricTop);let n=Math.min(.12,Math.min(e,t)*.08);for(let[r,o,s,a]of[[-e/2+n,-t/2+n,e/2-n,-t/2+n],[e/2-n,-t/2+n,e/2-n,t/2-n],[e/2-n,t/2-n,-e/2+n,t/2-n],[-e/2+n,t/2-n,-e/2+n,-t/2+n]])i.seg(r,.014,o,s,.014,a,fe)}function a1(i,e,t,n){let r=Math.max(3,Math.round(n/.18)),o=n/r,s=t/r;for(let u=0;u<r;u++){let h=t/2-s*u,d=h-s,f=o*(u+1);i.box(-e/2,e/2,0,f,d,h,D.wood,D.woodTop),i.seg(-e/2,f,h,e/2,f,h,fe)}i.seg(-e/2,0,t/2,-e/2,o,t/2,fe);for(let u of[-e/2,e/2])i.seg(u,o,t/2,u,n,-t/2+s,Qe);let a=.9,l=e/2-.03,c=Math.max(1,r-4);i.seg(l,o+a,t/2-s/2,l,o*c+a,t/2-s*(c-.5),Je);for(let u=0;u<c;u+=3){let h=t/2-s*(u+.5),d=o*(u+1);i.seg(l,d,h,l,d+a,h,Qe)}}function l1(i,e,t,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:u}=Kp(e,t,n),h=-e/2,d=-e/2+a,f=e/2-a,p=e/2,g=-t/2+l;for(let E=0;E<o;E++){let v=t/2-c*E,S=u*(E+1);i.box(h,d,0,S,v-c,v,D.wood,D.woodTop),i.seg(h,S,v,d,S,v,fe)}i.seg(h,0,t/2,h,u,t/2,fe);let m=u*r,_=.2;i.box(h,d,0,m,-t/2,g,D.wood,D.woodTop),i.box(d,p,Math.max(0,m-_),m,-t/2,g,D.wood,D.woodTop),i.seg(h,m,g,d,m,g,fe);for(let E=0;E<s;E++){let v=g+c*E,S=u*(r+1+E);i.box(f,p,Math.max(0,S-u-_),S,v,v+c,D.wood,D.woodTop),i.seg(f,S,v,p,S,v,fe)}i.seg(h,u,t/2,h,m,g,Qe),i.seg(p,m,g,p,n,g+c*(s-1),Qe);let x=.9,w=d-.03,b=f+.03,y=g-.03,M=Math.max(1,s-4);i.seg(w,u+x,t/2-c/2,w,m+x,y,Je),i.seg(w,m+x,y,b,m+x,y,Je),i.seg(b,m+x,y,b,u*(r+M)+x,g+c*(M-.5),Je);for(let E=0;E<o;E+=3){let v=t/2-c*(E+.5);i.seg(w,u*(E+1),v,w,u*(E+1)+x,v,Qe)}for(let E of[w,b])i.seg(E,m,y,E,m+x,y,Qe);for(let E=2;E<M;E+=3){let v=g+c*(E+.5);i.seg(b,u*(r+1+E),v,b,u*(r+1+E)+x,v,Qe)}}function c1(i,e,t,n){Mr(i,e,t,.12,.03,.04,D.metal),i.box(-e/2,e/2,.12,n,-t/2,t/2-.02,D.wood,D.woodTop,fe),Ls(i,-e/2,e/2,.12,n,t/2-.02,Math.max(2,Math.round(e/.45)),n-.1,!0)}function u1(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2-.02,D.wood,D.woodTop,fe),i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.06,D.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=t/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-e/2,a,o,e/2,a,o,Qe)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,Je)}}function h1(i,e,t,n){i.box(-e/2,e/2,0,.45,-t/2,t/2,D.wood,D.woodTop,fe),Ls(i,-e/2,e/2,.02,.45,t/2,Math.max(2,Math.round(e/.5)),.38,!0),i.box(-e/2,e/2,.45,n,-t/2,-t/2+.03,D.body,D.bodyTop,fe),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.wood,D.woodTop,fe);let r=Math.max(2,Math.round(e/.25));for(let o=0;o<r;o++){let s=-e/2+e/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-t/2+.03,-t/2+.1,D.metal,D.metal)}}function Dm(i,e,t,n,r){let s=Math.min(.5,r?t*.4:t),a=.08;i.box(-e/2,e/2,0,.45-.06,-t/2,-t/2+s,D.wood,D.woodTop,fe),i.box(-e/2,e/2,0,n,-t/2,-t/2+a,D.wood,D.woodTop,fe),i.box(-e/2+(r?s:.02),e/2-.02,.45-.06,.45+.02,-t/2+a,-t/2+s,D.cushion,D.cushion,Qe),r&&(i.box(-e/2,-e/2+s,0,.45-.06,-t/2+s,t/2,D.wood,D.woodTop,fe),i.box(-e/2,-e/2+a,0,n,-t/2+a,t/2,D.wood,D.woodTop,fe),i.box(-e/2+a,-e/2+s,.45-.06,.45+.02,-t/2+a,t/2-.02,D.cushion,D.cushion,Qe))}function d1(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.8,0,.02,D.metal,D.metal,12),i.cyl(0,0,.025,.02,n-.05,D.metal,D.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,D.metal,D.metal,12,Qe),i.cyl(0,0,r,n-.05,n,D.cushion,D.fabricTop,14,fe)}function f1(i,e,t,n){let r=Math.min(e,t)/2;i.box(-r,r,.04,.08,-.03,.03,D.metal),i.box(-.03,.03,.04,.08,-r,r,D.metal),i.cyl(0,0,.06,.02,.1,D.dark,D.dark,8),i.cyl(0,0,.025,.1,.44,D.metal,D.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,D.fabric,D.cushion,fe),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,D.fabric,D.fabricTop,fe),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,D.metal)}function p1(i,e,t,n){Mr(i,e,t,.08,.04,.05,D.wood),i.box(-e/2,e/2,.08,n,-t/2,t/2,D.fabric,D.cushion,fe)}function m1(i,e,t,n){i.box(-e/2,e/2,1.45,1.45+n,-t/2,t/2-.02,D.body,D.bodyTop,fe),Ls(i,-e/2,e/2,1.45,1.45+n,t/2-.02,Math.max(1,Math.round(e/.5)),1.45+.08)}function g1(i,e,t,n){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,D.body,D.bodyTop,fe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark);let r=t/2-.02;i.box(-e/2+.03,e/2-.03,.85,1.45,r,r+.01,D.dark,D.dark,Je),i.seg(-e/2+.08,1.4,r+.02,e/2-.08,1.4,r+.02,Je);for(let o of[.85,1.45])i.seg(-e/2,o,r,e/2,o,r,Qe);i.seg(e/2-.06,.5,r+.012,e/2-.06,.7,r+.012,Je),i.seg(e/2-.06,1.6,r+.012,e/2-.06,1.8,r+.012,Je)}function _1(i,e,t,n){let r=t-.3;i.box(-e/2+.05,e/2-.05,.08,n-.04,-t/2+.02,-t/2+r,D.body,D.bodyTop,fe),i.box(-e/2+.07,e/2-.07,0,.08,-t/2+.04,-t/2+r-.04,D.dark),Ls(i,-e/2+.05,e/2-.05,.08,n-.04,-t/2+r,Math.max(2,Math.round(e/.6)),n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,fe)}function b1(i,e,t,n){i.box(-e/2,e/2,.02,n-.04,-t/2,t/2-.02,D.body,D.bodyTop,fe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark),i.seg(-e/2+.08,n-.12,t/2-.008,e/2-.08,n-.12,t/2-.008,Je),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,fe)}function Nm(i,e,t,n,r){i.box(-e/2,e/2,0,n,-t/2,t/2-.02,D.white,D.whiteTop,fe);let o=t/2-.012;i.seg(-e/2,n-.14,o,e/2,n-.14,o,Qe),i.seg(e/2-.16,n-.07,o,e/2-.08,n-.07,o,Je);let s=(n-.14)/2+.04,a=Math.min(e*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,s+Math.sin(u)*a,o,Math.cos(h)*a,s+Math.sin(h)*a,o,Je),r||i.seg(Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,Math.cos(h)*a*.72,s+Math.sin(h)*a*.72,o,Qe)}}function v1(i,e,t,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(e/2)-(s>0?.05:0),s*(e/2)+(s<0?.05:0),0,n,a*(t/2)-(a>0?.05:0),a*(t/2)+(a<0?.05:0),D.wood,D.woodTop);for(let s of[.25,n-.55])i.box(-e/2,e/2,s,s+.08,-t/2,t/2,D.wood,D.woodTop,fe),i.box(-e/2+.04,e/2-.04,s+.08,s+.24,-t/2+.05,t/2-.05,D.white,D.whiteTop,Qe),i.box(-e/2+.05,e/2-.05,s+.24,s+.33,-t/2+.08,-t/2+.4,D.whiteTop,D.whiteTop);i.box(-e/2,e/2,n-.2,n-.15,t/2-.05,t/2,D.wood,D.woodTop);let o=e/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,t/2+.02,s,n-.15,t/2+.02,fe);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,t/2+.02,o+.18,s,t/2+.02,Qe)}function x1(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.4,0,.03,D.metal,D.metal,12),i.cyl(0,0,.05,.03,n-.04,D.wood,D.wood,8),i.cyl(0,0,r,n-.04,n,D.wood,D.woodTop,20,fe)}function y1(i,e,t,n){Mr(i,e,t,n-.03,.04,.03,D.wood),i.box(-e/2,e/2,n-.03,n,-t/2,t/2,D.wood,D.woodTop,fe),i.box(-e/2+.05,e/2-.05,.1,.13,-t/2+.05,t/2-.05,D.body,D.bodyTop,Qe)}function w1(i,e,t,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-t/2,-t/2+.03,D.metal),i.box(-e/2,e/2,r,r+n,-t/2+.03,t/2,D.dark,D.dark,Je)}function M1(i,e,t,n){let r=Vh;i.box(-e/2+.05,-e/2+.08,0,r,-t/2,-t/2+.03,D.metal),i.box(e/2-.08,e/2-.05,0,r,-t/2,-t/2+.03,D.metal),i.box(-e/2,e/2,r,r+n,-t/2+.02,t/2,D.white,D.whiteTop,fe);let o=Math.max(3,Math.round(e/.1));for(let s=1;s<o;s++){let a=-e/2+e/o*s;i.seg(a,r+.03,t/2+.002,a,r+n-.03,t/2+.002,Qe)}}function S1(i,e,t,n){let r=Gh;i.box(-e/2,e/2,r+.07,r+n,-t/2,t/2,D.white,D.whiteTop,fe),i.box(-e/2,e/2,r,r+.07,-t/2,t/2-.05,D.white,D.white,fe),i.box(-e/2+.04,e/2-.04,r+.012,r+.06,t/2-.05,t/2-.02,D.dark),i.seg(-e/2+.03,r+n*.55,t/2+.002,e/2-.03,r+n*.55,t/2+.002,Qe),i.seg(e/2-.14,r+n*.75,t/2+.002,e/2-.07,r+n*.75,t/2+.002,Je)}function xo(i,e,t,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,r,e+Math.cos(l)*n,t+Math.sin(l)*n,r,Je)}}function T1(i,e,t,n,r){let s=t/2;if(r==="slim"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.dark,D.body,fe),i.seg(-e*.25,1.1+n*.15,s+.004,-e*.25,1.1+n*.85,s+.004,Je),i.box(-e*.1,e*.3,1.1+n*.7,1.1+n*.85,s,s+.005,D.dark);return}if(r==="hybrid"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.white,D.whiteTop,fe),xo(i,0,1.1+n*.66,Math.min(e,n)*.22,s+.004),i.seg(-e*.08,1.1+n*.66,s+.005,e*.08,1.1+n*.66,s+.005,Je);for(let a of[-1,1])xo(i,a*e*.22,1.1+n*.2,Math.min(e,n)*.1,-t/2-.002,12);return}i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.white,D.whiteTop,fe),i.box(-e*.28,e*.28,1.1+n*.58,1.1+n*.82,t/2,t/2+.006,D.dark),i.seg(-e*.3,1.1+n*.45,t/2+.004,e*.3,1.1+n*.45,t/2+.004,Je);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*e/2+a*.002,1.1+n*l/6,-t/2+.03,a*e/2+a*.002,1.1+n*l/6,t/2-.03,Qe)}function A1(i,e,t,n){let r=Math.min(t,n)*.32;i.box(-e/2,e/2,0,.03,-t/2,t/2,D.dark),i.box(-e/2,e*.1,.05,.05+r*2,-r,r,D.metal,D.metal,fe);for(let s of[-e*.4,-e*.25,-e*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,Qe);i.cyl(e*.28,0,Math.min(e*.2,t*.45),.03,n*.82,D.dark,D.body,14,fe),i.cyl(e*.28,0,Math.min(e*.2,t*.45)*.9,n*.82,n,D.glass,D.glass,14);let o=Math.min(e*.2,t*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(e*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,e*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,Je)}}function E1(i,e,t,n,r){let o=Math.min(e,t)/2;if(i.cyl(0,0,o*.95,0,n*.08,D.dark,D.dark,16),i.cyl(0,0,o,n*.08,n*.78,D.dark,D.body,18,fe),i.cyl(0,0,o*.75,n*.78,n*.84,D.dark,D.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,D.dark,D.metal,fe),xo(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,D.dark,D.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,D.dark,D.metal,16,fe);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,Je)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,D.dark,D.body)}function R1(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2,D.white,D.whiteTop,fe);for(let a of[-e*.4,e*.4])i.box(a-.03,a+.03,0,.06,-t/2+.02,t/2-.02,D.dark);let r=Math.min(n*.38,e*.3),o=-e*.15,s=n*.53;xo(i,o,s,r,t/2+.004,24),xo(i,o,s,r*.55,t/2+.004,16),i.seg(o-r,s,t/2+.005,o+r,s,t/2+.005,Qe),i.seg(o,s-r,t/2+.005,o,s+r,t/2+.005,Qe),i.box(e*.22,e*.42,n*.62,n*.8,t/2,t/2+.006,D.dark),i.seg(e*.25,n*.71,t/2+.008,e*.39,n*.71,t/2+.008,Je);for(let a=1;a<8;a++)i.seg(e/2+.002,n*(.1+a*.1),-t/2+.03,e/2+.002,n*(.1+a*.1),t/2-.03,Qe)}function P1(i,e,t,n){i.box(-e/2,e/2,.9,.9+n*.45,-t/2,t/2,D.white,D.whiteTop,fe);for(let o of[-1,1])xo(i,o*e*.22,.9+n*.22,Math.min(e,n)*.09,t/2+.004,12);i.seg(-e*.35,.9+n*.4,t/2+.004,e*.35,.9+n*.4,t/2+.004,Je);for(let o of[-1,1])i.box(o*e*.25-e*.18,o*e*.25+e*.18,0,n*.5,-t/2,t/2,D.white,D.glass,Qe)}function k1(i,e,t,n){let r=Hp-n*.4;i.box(-e/2,e/2,r+n*.25,r+n*.6,-t*.25,t*.25,D.metal,D.metal,fe),i.box(-e*.12,e*.12,r+n*.6,r+n*.8,-t*.12,t*.12,D.dark),i.box(-e*.1,e*.45,r+n*.8,r+n,-t*.15,t*.15,D.accent,D.accent)}function C1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,D.dark,D.body,fe),i.box(-e/2-.01,e/2+.01,n,n+.03,-t/2-.01,t/2+.01,D.dark,D.body),i.seg(-e/2,n+.032,t/2+.01,e/2,n+.032,t/2+.01,Je),i.seg(-e*.3,n*.55,t/2+.003,e*.3,n*.55,t/2+.003,Qe)}function I1(i,e,t,n){i.box(-e/2,e/2,1,1+n,-t/2,t/2,D.dark,D.body,fe);let o=Math.min(e,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,t/2+.003,Math.cos(u)*o,s+Math.sin(u)*o,t/2+.003,Je)}i.box(-.015,.015,1-.35,1,t/2-.03,t/2,D.dark),i.box(-.06,.06,1-.42,1-.35,t/2-.05,t/2,D.dark,D.body)}function L1(i,e,t,n){i.box(-e/2,e/2,.4,.4+n,-t/2,t/2,D.white,D.whiteTop,fe),i.seg(-e/2+.025,.4+.025,t/2+.003,-e/2+.025,.4+n-.025,t/2+.003,Qe),i.seg(-e/2+.025,.4+n-.025,t/2+.003,e/2-.025,.4+n-.025,t/2+.003,Qe),i.box(e/2-.06,e/2-.035,.4+n*.5-.05,.4+n*.5+.05,t/2,t/2+.012,D.dark),i.box(-e*.3,e*.3,.4+n*.6,.4+n*.8,t/2,t/2+.005,D.dark),i.seg(-e*.22,.4+n*.7,t/2+.008,e*.22,.4+n*.7,t/2+.008,Je)}function F1(i,e,t,n,r){if(r==="wall"){i.box(-e/2,e/2,.5,.5+n,-t/2,t/2,D.white,D.whiteTop,fe),i.seg(-e*.3,.5+n*.9,t/2+.004,e*.3,.5+n*.9,t/2+.004,Je),i.seg(-e*.3,.5+n*.08,t/2+.003,e*.3,.5+n*.08,t/2+.003,Qe);return}if(r==="cube"){i.box(-e/2+.01,e/2-.01,0,.03,-t/2+.01,t/2-.01,D.dark),i.box(-e/2,e/2,.03,n,-t/2,t/2,D.dark,D.body,fe),i.seg(-e*.35,n*.85,t/2+.004,e*.35,n*.85,t/2+.004,Je),i.box(-e*.15,e*.15,n,n+.025,-.012,.012,D.dark);return}i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.02,D.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-e/2,e/2,.06+a*s+.004,.06+(a+1)*s,-t/2,t/2,D.white,D.whiteTop,fe);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-e*.04,l,t/2+.003,e*.04,l,t/2+.003,Je)}}var Vh=.12,Gh=2.05;function Hh(i,e){let t=D1(i,e);return t&&i.mirror?{...t,x0:-t.x1,x1:-t.x0}:t}function D1(i,e){let t=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=Sh(i.type);if(o){let l=e?Pt(e,i):0,c=(o.x-o.w/2)*t,u=(o.x+o.w/2)*t,h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+o.y*r+h,y1:l+(o.y+o.h)*r-h,z:(o.z+o.d/2)*n}}let s=e&&i.type!=="fridge_smart"?Pt(e,i)-xs(i):0,a=N1(i,t,n,r,e);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function N1(i,e,t,n,r){if(i.type==="pool_pump"){let o=Math.min(t,n)*.32;return{x0:-e/2+.03,x1:e*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-e/2+.05,x1:e*.15,y0:n*.15,y1:n*.9,z:t/2+.003};if(i.type==="pool_filter"){let o=Math.min(e,t)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-e*.4,x1:e*.4,y0:.9+n*.05,y1:.9+n*.4,z:t/2+.003};if(i.type==="tv_board"){let o=Math.min(e*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-t/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-e/2+.02,x1:e/2-.02,y0:o+.02,y1:o+n-.02,z:t/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-t/2+.115};if(i.type==="fridge_smart"){let o=r?Pt(r,i):0;return{x0:.06,x1:e/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:t/2+.006}}if(i.type==="radiator")return{x0:-e/2+.02,x1:e/2-.02,y0:Vh+.02,y1:Vh+n-.02,z:t/2+.004};if(i.type==="ac_unit")return{x0:-e/2+.05,x1:e/2-.05,y0:Gh+.015,y1:Gh+.06,z:t/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(e*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:t/2-.004}}return i.type==="dishwasher"?{x0:-e/2+.06,x1:e/2-.06,y0:n-.16,y1:n-.08,z:t/2-.004}:null}function z1(i,e,t,n,r){let o=Math.min(.14,Math.max(.06,Math.min(t,n)*.15)),s=new Q(1-r,1-r,1-r),a=new Q(1,1,1),l=.003,c=[e(-t/2,-n/2),e(t/2,-n/2),e(t/2,n/2),e(-t/2,n/2)],u=[e(-t/2-o,-n/2-o),e(t/2+o,-n/2-o),e(t/2+o,n/2+o),e(-t/2-o,n/2+o)],h=f=>[f[0],l,f[1]],d=i.p.length;i.tri(h(c[0]),h(c[1]),h(c[2]),s),i.tri(h(c[0]),h(c[2]),h(c[3]),s);for(let f=0;f<4;f++){let p=(f+1)%4;i.tri(h(c[f]),h(u[f]),h(u[p]),s,a,a),i.tri(h(c[f]),h(u[p]),h(c[p]),s,a,s)}Bm(e)&&Wh(i,d)}function bc(i,e,t,n,r=0){let o=i.p.length,s=e.p.length;B1(i,e,n.rotation_x||n.rotation_z?new rt:t,n,r),Pn(i.p,o,n,r+n.h/2),Pn(e.p,s,n,r+n.h/2)}function Wh(i,e){let t=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=e;n<i.p.length;n+=9){let r=n/9;t(i.p,n,3),t(i.c,n,3),t(i.f,r*3,1),t(i.uv,r*6,2),t(i.tile,r*6,2)}}function B1(i,e,t,n,r){let o=yt(n.type)?0:r-xs(n);if(yt(n.type)||Math.abs(o)<.001)return zm(i,e,t,n,r);let s=i.p.length,a=e.p.length;zm(i,e,r<.05?t:new rt,n,0);for(let l=s+1;l<i.p.length;l+=3)i.p[l]+=o;for(let l=a+1;l<e.p.length;l+=3)e.p[l]+=o}function zm(i,e,t,n,r){let o=n.rotation*ut,s=Math.cos(o),a=Math.sin(o),l=n.mirror?-1:1,c=(p,g)=>[n.x+l*p*s-g*a,n.z+l*p*a+g*s],u=new wr(i,e,c),h=Math.max(.05,n.w),d=Math.max(.05,n.d),f=Math.max(.005,n.h);switch(n.type){case"sofa":Lm(u,h,d,f,Math.max(1,Math.round((h-.4)/.62)));break;case"armchair":Lm(u,h,d,f,1);break;case"sofa_l":Fm(u,h,d,f,!1);break;case"sofa_u":Fm(u,h,d,f,!0);break;case"bed":Hw(u,h,d,f);break;case"chair":Ww(u,h,d,f);break;case"table":Xw(u,h,d,f);break;case"desk":Kw(u,h,d,f);break;case"nightstand":qi(u,h,d,f,1,f*.72,!0),u.seg(-h/2,f*.5,d/2-.02,h/2,f*.5,d/2-.02,Qe);break;case"wardrobe":qi(u,h,d,f,Math.max(2,Math.round(h/.5)),f*.5);break;case"shelf":Yw(u,h,d,f);break;case"kitchen":qw(u,h,d,f);break;case"fridge":Zw(u,h,d,f);break;case"fridge_smart":$w(u,h,d,f);break;case"stove":jw(u,h,d,f);break;case"sink":Qw(u,h,d,f);break;case"bathtub":e1(u,h,d,f);break;case"shower":t1(u,h,d,f);break;case"wc":n1(u,h,d,f);break;case"washbasin":i1(u,h,d,f);break;case"tv_board":r1(u,h,d,f);break;case"plant":o1(u,h,d,f);break;case"rug":s1(u,h,d);return;case"stairs":a1(u,h,d,f);break;case"stairs_u":l1(u,h,d,f);break;case"stairwell":return;case"sideboard":c1(u,h,d,f);break;case"dresser":u1(u,h,d,f);break;case"tall_cabinet":qi(u,h,d,f,1,f*.5);break;case"coat_rack":h1(u,h,d,f);break;case"bench":Dm(u,h,d,f,!1);break;case"corner_bench":Dm(u,h,d,f,!0);break;case"bar_stool":d1(u,h,d,f);break;case"office_chair":f1(u,h,d,f);break;case"stool":p1(u,h,d,f);break;case"kitchen_wall":m1(u,h,d,f);return;case"kitchen_tall":g1(u,h,d,f);break;case"island":_1(u,h,d,f);break;case"worktop":u.box(-h/2,h/2,Math.max(0,f-.04),f,-d/2,d/2,D.whiteTop,D.whiteTop,fe);return;case"dishwasher":b1(u,h,d,f);break;case"washer":Nm(u,h,d,f,!1);break;case"dryer":Nm(u,h,d,f,!0);break;case"bunk_bed":v1(u,h,d,f);break;case"table_round":x1(u,h,d,f);break;case"coffee_table":y1(u,h,d,f);break;case"tv_wall":w1(u,h,d,f);return;case"parking":{let g=[[-h/2,-d/2],[h/2,-d/2],[h/2,d/2],[-h/2,d/2]];for(let m=0;m<4;m++)u.seg(g[m][0],.012,g[m][1],g[(m+1)%4][0],.012,g[(m+1)%4][1],Qe);u.seg(-h*.15,.012,d/2-.45,0,.012,d/2-.2,fe),u.seg(0,.012,d/2-.2,h*.15,.012,d/2-.45,fe);return}case"robot_vacuum":u.box(-h*.45,h*.45,0,f,-d/2,-d/2+d*.3,D.white,D.whiteTop,fe),u.box(-h*.2,h*.2,f*.5,f*.62,-d/2+d*.3,-d/2+d*.31,D.accent);return;case"radiator":M1(u,h,d,f);return;case"ac_unit":S1(u,h,d,f);return;case"inverter":T1(u,h,d,f,n.variant??null);return;case"grid_point":C1(u,h,d,f);break;case"wallbox":I1(u,h,d,f);return;case"pool_pump":A1(u,h,d,f);break;case"pool_filter":E1(u,h,d,f,n.variant??null);break;case"pool_heat_pump":R1(u,h,d,f);break;case"pool_dosing":P1(u,h,d,f);break;case"pool_valve":k1(u,h,d,f);return;case"meter":L1(u,h,d,f);return;case"home_battery":if(F1(u,h,d,f,n.variant??null),n.variant==="wall")return;break;default:{let p=_r(n);if(p){if(vc(u,p,h,d,f,r,null),r>.05)return}else u.box(-h/2,h/2,0,f,-d/2,d/2,D.body,D.bodyTop,fe)}}z1(t,c,h,d,n.type==="plant"?.35:.5)}function Uh(i,e){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let t=D;return(e?t[`${i}Top`]:void 0)??t[i]??null}function vc(i,e,t,n,r,o,s,a=null,l=!1){let c=!!a,u=new Set([...e.motions??[],...e.spots??[]].flatMap(h=>h.parts));for(let h of e.parts){if(!l&&!a&&(h.visible===!1||h.status||h.id&&u.has(h.id))||a&&!a(h))continue;let d=c?{...h,glow:!0,w:h.w+.006/t,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,f=d.glow&&s!==null,p=f?s:Uh(d.color,!1)??D.body,g=f?s:Uh(d.top,!1)??Uh(d.color,!0)??He(p,1.25).getHex(),m=o+d.y*r,_=o+Math.min(r,(d.y+d.h)*r),x=d.edges==="glow"?ri:d.edges==="faint"?Qe:d.edges?fe:null,w=d.rot?i.rotated(d.x*t,d.z*n,d.rot):i;if(!w.shape(d,t,n,r,o,p))if(d.shape==="cyl"&&(d.axis==="x"||d.axis==="z"))w.lyingCyl(d.axis,d.x*t,d.z*n,m,_,d.axis==="x"?d.w*t:d.d*n,d.axis==="x"?d.d*n:d.w*t,p,g,14,x);else if(d.shape==="cyl")w.cyl(d.x*t,d.z*n,Math.min(d.w*t,d.d*n)/2,m,_,p,g,14,x);else if(d.shape==="loft"){let b=d.tx??d.x,y=d.tz??d.z,M=d.tw??d.w,E=d.td??d.d;w.loft([(d.x-d.w/2)*t,(d.x+d.w/2)*t,(d.z-d.d/2)*n,(d.z+d.d/2)*n],[(b-M/2)*t,(b+M/2)*t,(y-E/2)*n,(y+E/2)*n],m,_,p,g,x)}else w.box((d.x-d.w/2)*t,(d.x+d.w/2)*t,m,_,(d.z-d.d/2)*n,(d.z+d.d/2)*n,p,g,x)}}function Vm(i,e){let t=new rt;return vc(new wr(t,new Nt,(n,r)=>[n,r]),i,e.w,e.d,e.h,0,null,null,!0),t.geometry()}function Gm(i,e,t,n,r,o){let s=o*ut,a=Math.cos(s),l=Math.sin(s),c=(p,g)=>[t+p*a-g*l,r+p*l+g*a],u=new wr(i,new Nt,c),h=1713728,d=2373216,f=725279;if(e==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,h,d,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,f,h),u.cyl(0,0,.012,n-.075,n-.06,D.accent,D.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,d),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,d),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,d),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,f,D.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function xc(i,e,t,n,r,o=s=>!!s.glow){let s=i.p.length,a=t.rotation*ut,l=Math.cos(a),c=Math.sin(a),u=t.mirror?-1:1,h=(d,f)=>[t.x+u*d*l-f*c,t.z+u*d*c+f*l];vc(new wr(i,new Nt,h),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r,o),Pn(i.p,s,t,n+t.h/2)}function yc(i,e,t,n,r){let o=i.p.length,s=t.rotation*ut,a=Math.cos(s),l=Math.sin(s),c=t.mirror?-1:1,u=(h,d)=>[t.x+c*h*a-d*l,t.z+c*h*l+d*a];vc(new wr(i,new Nt,u),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r),Pn(i.p,o,t,n+t.h/2)}var Mc=Math.PI/180,O1=1.13,U1=1.72,Xh=.025,Sr=.07,Hm=.25;function Wm(i,e){let t=[];for(let n of i.floors){if(e&&n.id!==e)continue;let{walls:r}=Wi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,u=-s/l,h=an(n,o),d=h.top-h.bottom,f=o.sources.find(m=>m.room_id===o.roomLeft)?.edge??null,p={floorId:n.id,room:o.roomLeft,edge:f,free:!!o.free},g=(m,_,x,w)=>t.push({key:m,section:null,side:"top",flat:!1,o:_,eu:x,es:[0,1,0],n:w,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[w[0],w[2]],wall:p});g(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation+h.bottom,o.a[1]+u*o.right],[s/l,0,a/l],[c,0,u]),o.free&&g(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation+h.bottom,o.b[1]-u*o.left],[-s/l,0,-a/l],[-c,0,-u])}}return t}var Kh="ground";function Yh(i){let e=[...i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??i.floors[0]??null}function Xm(i,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],o=Yh(i),s=n[0]*e.u+r[0]*e.v,a=n[2]*e.u+r[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:Up(o,s,a)):e.base??0;return{key:Kh,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function V1(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>Gt(n)-Gt(t))[0]??null}function $i(i){let e=i.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(x=>{let w=hc(i,x,x.overhang??e.overhang),b=x.points?.length?Ps(x,x.shape==="parapet"?0:Math.max(0,Math.min(w.a,w.b,w.u0,w.u1))):void 0;return G1(x,w).map(y=>b?{...y,footprint:b}:y)});let t=V1(i);if(!t)return[];let n=t.rooms.flatMap(x=>x.points.map(w=>w[0])),r=t.rooms.flatMap(x=>x.points.map(w=>w[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,u=Gt(t);if(e.type==="flat")return[Km("main",null,s,l,a,c,u+Hm)];let h=a-s>=c-l,d=e.ridge==="short"?!h:h,f=(d?c-l:a-s)/2,p=f*Math.tan(e.pitch*Mc),g=(x,w,b)=>d?[x,u+b,(l+c)/2+w]:[(s+a)/2+w,u+b,x],[m,_]=d?[s,a]:[l,c];return[-1,1].map(x=>wc(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",g(m,x*f,0),g(_,x*f,0),g(m,0,p),e.pitch,()=>[0,_-m]))}function G1(i,e){let t=Hn(i),n=Mn(i),r=(g,m,_)=>{let[x,w]=t.at(g,m);return[x,_,w]},o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let g=t.at(a,-o),m=t.at(l,t.w+s);return[Km(i.id,i.id,Math.min(g[0],m[0]),Math.min(g[1],m[1]),Math.max(g[0],m[0]),Math.max(g[1],m[1]),i.eave_a+Hm)]}if(i.shape==="pent")return[wc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,t.w+s,n.y(t.w+s)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",h=i.shape==="pyramid"?(t.u1-t.u0)/2:u?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,d=u?t.u0+h-a:0,f=u?l-(t.u1-h):0,p=[];if(n.vr>.3){let g=Math.hypot(n.vr+o,n.rh-n.y(-o));p.push(wc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,m=>[d*(m/g),c-f*(m/g)]))}if(t.w-n.vr>.3){let g=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));p.push(wc(`${i.id}:b`,i.id,"b",r(l,t.w+s,n.y(t.w+s)),r(a,t.w+s,n.y(t.w+s)),r(l,n.vr,n.rh),i.pitch_b,m=>[f*(m/g),c-d*(m/g)]))}if(u){let g=n.y(-o),m=n.y(t.w+s),_=[[`${i.id}:c`,"c",r(a,t.w+s,m),r(a,-o,g),r(t.u0+h,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-o,g),r(l,t.w+s,m),r(t.u1-h,n.vr,n.rh)]];for(let[x,w,b,y,M]of _){let E=H1(x,i.id,w,b,y,M);E&&p.push(E)}}return p}function H1(i,e,t,n,r,o){let s=Fs(Tr(r,n));if(s<.3)return null;let a=Zi(Tr(r,n)),l=Tr(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=Fs(u);if(h<.3)return null;let d=Zi(u),f=Zi(Zm(a,d));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let p=Zi([-d[0],0,-d[2]]),g=Math.atan2(d[1],Math.hypot(d[0],d[2]))/Mc;return{key:i,section:e,side:t,flat:!1,o:n,eu:a,es:d,n:f,lu:s,ls:h,pitch:g,span:_=>{let x=Math.min(1,Math.max(0,_/h));return[c*x,s-(s-c)*x]},facing:[p[0],p[2]]}}function wc(i,e,t,n,r,o,s,a){let l=Zi(Tr(r,n)),c=Zi(Tr(o,n)),u=Zi(Zm(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let h=Zi([-c[0],0,-c[2]]);return{key:i,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:u,lu:Fs(Tr(r,n)),ls:Fs(Tr(o,n)),pitch:s,span:a,facing:[h[0],h[2]]}}function Km(i,e,t,n,r,o,s){let a=r-t>=o-n,l=a?r-t:o-n,c=a?o-n:r-t;return{key:`${i}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Ym(i){let e=i.module_w||O1,t=i.module_h||U1;return i.portrait===!1?[t,e]:[e,t]}function W1(i){return i.layout?.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function qm(i,e){return i.flat?Math.min(45,Math.max(0,e.tilt??15))*Mc:i.wall?Math.min(90,Math.max(0,e.tilt??0))*Mc:0}function X1(i,e){let[,t]=Ym(e),n=qm(i,e);return i.wall?t*Math.cos(n)+Xh:i.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+Xh}function Ds(i,e,t=!1){let[n,r]=Ym(e),o=[],s=qm(i,e),a=r*Math.cos(s),l=X1(i,e),c=W1(e),u=Math.max(1,...c),h=new Set(e.skip??[]),d=!!i.wall&&n>i.lu+1e-6,f=(g,m,_)=>[i.o[0]+i.eu[0]*g+i.es[0]*m+i.n[0]*_,i.o[1]+i.eu[1]*g+i.es[1]*m+i.n[1]*_,i.o[2]+i.eu[2]*g+i.es[2]*m+i.n[2]*_],p=(g,m)=>{if(i.unbounded)return!0;if(m<-1e-6||m>i.ls+1e-6)return!1;let[_,x]=i.span(m);return g>=_-1e-6&&g<=x+1e-6};return c.forEach((g,m)=>{let _=e.align==="right"?u-g:e.align==="center"?(u-g)/2:0;for(let x=0;x<g;x++){let w=`${m}:${x}`,b=h.has(w);if(b&&!t)continue;let y=e.u+(x+_)*(n+Xh),M=e.v+m*l,E=y+n,v=M+(i.flat||i.wall?a:r);if(d){if(!(p((y+E)/2,M)&&p((y+E)/2,v)))continue}else if(![[y,M],[E,M],[E,v],[y,v]].every(([R,I])=>p(R,I)))continue;if(i.footprint&&!om(i.footprint,[[y,M],[E,M],[E,v],[y,v]].map(([R,I])=>{let F=f(R,I,0);return[F[0],F[2]]})))continue;if(i.wall&&s>.001){let R=Sr+r*Math.sin(s),[I,F]=e.flip?[R,Sr]:[Sr,R],z=[f(y,M,I),f(E,M,I),f(E,v,F),f(y,v,F)],B=e.flip?M:v,N=[y+.05,E-.05].map(O=>[f(O,B,0),f(O,B,R)]);o.push({corners:z,posts:N,cell:w,skipped:b});continue}if(!i.flat){o.push({corners:[f(y,M,Sr),f(E,M,Sr),f(E,v,Sr),f(y,v,Sr)],posts:[],cell:w,skipped:b});continue}let S=.15,T=S+r*Math.sin(s),[A,C]=e.flip?[v,M]:[M,v],P=[f(y,A,S),f(E,A,S),f(E,C,T),f(y,C,T)];o.push({corners:P,posts:[y+.05,E-.05].flatMap(R=>[[f(R,A,0),f(R,A,S)],[f(R,C,0),f(R,C,T)]]),cell:w,skipped:b})}}),o}function Tr(i,e){return[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}function Fs(i){return Math.hypot(i[0],i[1],i[2])}function Zi(i){let e=Fs(i)||1;return[i[0]/e,i[1]/e,i[2]/e]}function Zm(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}var K1=.78,Y1=1.18;function q1(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||K1,module_h:i.h||Y1}}function Sc(i,e){let t=Ds(i,q1(e))[0];if(!t)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function $m(i,e,t){let n=e?Sc(e,t):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,o=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>o)continue;let l=a.rooms.find(c=>Ge([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}function Tc(i,e,t,n){let r=e.map((c,u)=>c-i[u]),o=t.map((c,u)=>c-i[u]),s=[r[1]*o[2]-r[2]*o[1],r[2]*o[0]-r[0]*o[2],r[0]*o[1]-r[1]*o[0]],a=Math.hypot(...s)||1,l=s.reduce((c,u,h)=>c+u*n[h],0)<0?-1:1;return s.map(c=>l*c/a)}function Ns(i,e,t){return i.setAttribute("solarNormal",new Ae(e,3)),i.setAttribute("solarPoint",new Ae(t,3)),i}function Ac(i){let e=i.onBeforeCompile.bind(i),t=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(n,r)=>{e(n,r),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 solarNormal;
attribute vec3 solarPoint;`).replace("#include <project_vertex>",`#include <project_vertex>
      vec3 solarWorldPoint = (modelMatrix * vec4(solarPoint, 1.0)).xyz;
      vec3 solarWorldNormal = mat3(modelMatrix) * solarNormal;
      if (dot(solarWorldNormal, cameraPosition - solarWorldPoint) <= 0.0) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)},i.customProgramCacheKey=()=>`${t()}-solar-facing`,i}function Jm(i,e,t,n,r){let o=n==="bottom"?0:n==="middle"?.5:1,s=n==="bottom"?-1:1,a=(d,f,p)=>{let g=f.map((x,w)=>x+(p[w]-x)*o),m=d.map((x,w)=>x-g[w]),_=m.reduce((x,w,b)=>x+w*t[b],0);return g.map((x,w)=>x+m[w]*Math.cos(r)-e[w]*_*Math.sin(r)*s)},[l,c,u,h]=i;return[a(l,l,h),a(c,c,u),a(u,c,u),a(h,l,h)]}var zs=1712952,Bs=2239816,t0=1318193,Ar=He(3662079,.9),Er=He(5995775,.45),$t=.14,Z1=9427199,qh=13226982,Zh=14936565,$1={black:{glass:new Q(329483),edge:He(9082544,.32),cells:He(2766160,.22)},blue:{glass:new Q(1386842),edge:He(10467583,.55),cells:He(4025599,.35)}},J1=He(13226982,.5),j1=He(13226982,.85),Q1=He(16757575,.95),jm=new Q(2845583),Qm=new Q(3818072),e0=new Q(4871791);function Ec(i,e,t,n,r){if(e.length<3)return;let[o,s,a]=e,l=(s[1]-o[1])*(a[2]-o[2])-(s[2]-o[2])*(a[1]-o[1]),c=(s[0]-o[0])*(a[1]-o[1])-(s[1]-o[1])*(a[0]-o[0]),h=l*(o[0]-n[0])+c*(o[2]-n[1])<0?[...e].reverse():e;for(let f=1;f+1<h.length;f++)i.tri(h[0],h[f],h[f+1],t);let d=Math.min(...h.map(f=>f[1]));for(let f=0;f<h.length;f++){let p=h[f],g=h[(f+1)%h.length],m=Math.abs(p[1]-d)<1e-6&&Math.abs(g[1]-d)<1e-6,_=Math.hypot(p[0]-g[0],p[2]-g[2])<1e-6;r.seg(p,g,m?pc:_?oi:ri)}}function eM(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>Gt(n)-Gt(t))[0]??null}function n0(i,e=new Map){let t=i.settings.roof,n=t?.type==="custom"?null:iM(i),r=t?.type==="custom"?rM(i,t.sections??[],t.overhang):n?[n]:[];return nM(i,r),tM(i,r,e),r}function tM(i,e,t){let n=i.settings.roof?.windows??[];if(!n.length||!e.length)return;let r=new Map($i(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?Sc(s,o):null;if(!s||!a)continue;let l=s.section?e.find(A=>A.sections?.includes(s.section)):e[0];if(!l)continue;let c=l.floor.elevation+l.base,u=A=>[A[0],A[1]-c,A[2]],[h,d,f,p]=a.map(u),g=t.get(o.id)??{open:0,tilt:0,cover:0},m=o.float?l.win??={solid:new rt,lines:new Nt}:l.winRoof??={solid:new rt,lines:new Nt},_=(A,C)=>[A[0]+s.n[0]*C,A[1]+s.n[1]*C,A[2]+s.n[2]*C],x=(A,C,P)=>[A[0]+(C[0]-A[0])*P,A[1]+(C[1]-A[1])*P,A[2]+(C[2]-A[2])*P],w=g.open>.02||g.tilt>.02?Q1:j1,b=[h,d,f,p].map(A=>_(A,.06)),y=[h,d,f,p].map(A=>_(A,-.02));for(let A=0;A<4;A++){m.lines.seg(b[A],b[(A+1)%4],w);let C=(A+1)%4;m.solid.tri(y[A],y[C],b[C],e0),m.solid.tri(y[A],b[C],b[A],e0)}let M=(g.open>.02?30*Math.min(1,g.open):g.tilt>.5?12:0)*ut,[E,v,S,T]=Jm([h,d,f,p].map(A=>_(A,.065)),s.n,s.es,o.hinge,M);m.solid.tri(E,v,S,jm),m.solid.tri(E,S,T,jm);for(let[A,C]of[[E,v],[v,S],[S,T],[T,E]])m.lines.seg(A,C,w);if(g.cover>.02){let A=Math.min(1,g.cover),C=_(x(T,E,A),.01),P=_(x(S,v,A),.01),R=_(T,.01),I=_(S,.01);m.solid.tri(C,P,I,Qm),m.solid.tri(C,I,R,Qm)}}}function nM(i,e){let t=i.settings.roof?.solar??[];if(!t.length||!e.length)return;let n=new Map($i(i).map(r=>[r.key,r]));for(let r of t){let o=n.get(r.face);if(!o)continue;let s=o.section?e.find(a=>a.sections?.includes(o.section)):e[0];if(s){let a=s.solar??={solid:new rt,lines:new Nt,facing:{normals:[],points:[],lineNormals:[],linePoints:[]}};$h(a.solid,a.lines,o,r,s.floor.elevation+s.base,a.facing)}}}function $h(i,e,t,n,r,o){let s=u=>[u[0],u[1]-r,u[2]],a=$1[n.look==="blue"?"blue":"black"],l=n.portrait===!1?10:6,c=n.portrait===!1?6:10;for(let u of Ds(t,n)){let h=i.p.length,d=e.p.length,[f,p,g,m]=u.corners.map(s);i.tri(f,p,g,a.glass),i.tri(f,g,m,a.glass),i.tri(f,g,p,a.glass),i.tri(f,m,g,a.glass);let _=(b,y=.004)=>[b[0]+t.n[0]*y,b[1]+t.n[1]*y,b[2]+t.n[2]*y],x=(b,y,M)=>[b[0]+(y[0]-b[0])*M,b[1]+(y[1]-b[1])*M,b[2]+(y[2]-b[2])*M],w=[f,p,g,m].map(b=>_(b));for(let b=0;b<4;b++)e.seg(w[b],w[(b+1)%4],a.edge);for(let b=1;b<l;b++)e.seg(_(x(f,p,b/l)),_(x(m,g,b/l)),a.cells);for(let b=1;b<c;b++)e.seg(_(x(f,m,b/c)),_(x(p,g,b/c)),a.cells);for(let[b,y]of u.posts)e.seg(s(b),s(y),J1);if(o){let b=Tc(f,p,g,t.n);for(let y=h;y<i.p.length;y+=3)o.normals.push(...b),o.points.push(...f);for(let y=d;y<e.p.length;y+=3)o.lineNormals.push(...b),o.linePoints.push(...f)}}}function iM(i){let e=i.settings.roof,t=eM(i);if(!t||!e||e.type==="none"||e.type==="custom")return null;let n=t.rooms.flatMap(T=>T.points.map(A=>A[0])),r=t.rooms.flatMap(T=>T.points.map(A=>A[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,u=new rt,h=new Nt;if(e.type==="flat"){wt(u,[[s,l],[a,l],[a,c],[s,c]],0,.25,zs,Bs,{bottom:!0});let T=.252;for(let[A,C]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])h.seg([A[0],T,A[1]],[C[0],T,C[1]],Ar),h.seg([A[0],0,A[1]],[C[0],0,C[1]],Er);return{floor:t,base:Gt(t)-t.elevation,solid:u,lines:h,glass:new rt}}let d=a-s>=c-l,f=e.ridge==="short"?!d:d,p=(f?c-l:a-s)/2,g=p*Math.tan(e.pitch*ut),m=(T,A,C)=>f?[T,C,(l+c)/2+A]:[(s+a)/2+A,C,T],[_,x]=f?[s,a]:[l,c],w=new Q(Bs),b=new Q(zs),y=(T,A,C,P,R)=>{u.tri(T,A,C,R),u.tri(T,C,P,R)};for(let T of[-1,1]){y(m(_,T*p,0),m(x,T*p,0),m(x,0,g),m(_,0,g),w),y(m(_,T*p,-$t),m(_,0,g-$t),m(x,0,g-$t),m(x,T*p,-$t),b),y(m(_,T*p,-$t),m(x,T*p,-$t),m(x,T*p,0),m(_,T*p,0),b);for(let A of[_,x])y(m(A,T*p,-$t),m(A,T*p,0),m(A,0,g),m(A,0,g-$t),b);h.seg(m(_,T*p,0),m(x,T*p,0),Er);for(let A of[_,x])h.seg(m(A,T*p,0),m(A,0,g),Er)}let M=e.overhang,E=new Q(t0),v=p-M,S=v*Math.tan(e.pitch*ut);for(let T of[_+M,x-M])Ec(u,[m(T,-v,-$t),m(T,v,-$t),m(T,0,S-$t)],E,[(s+a)/2,(l+c)/2],h);return h.seg(m(_,0,g+.004),m(x,0,g+.004),Ar),{floor:t,base:Gt(t)-t.elevation,solid:u,lines:h,glass:new rt}}function rM(i,e,t){let n=i.floors.filter(s=>s.rooms.length>0).sort((s,a)=>s.elevation-a.elevation);if(!n.length)return[];let r=new Map,o=new Map($i(i).map(s=>[s.key,s]));for(let s of e){if(Math.abs(s.x1-s.x0)<.1||Math.abs(s.z1-s.z0)<.1)continue;let a=dm(i,s)??n[0],l=s.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new rt,lines:new Nt,glass:new rt,sections:[],lift:!s.open}),c.sections.push(s.id);let u=uc(e,s),h=Gt(a)>s.base+.05&&!s.dormer&&!u,d=e.filter(g=>g!==s&&uc(e,g)===s).flatMap(g=>um(s,g));for(let g of i.settings.roof.windows??[]){let m=o.get(g.face),_=m&&m.section===s.id?Sc(m,g):null;if(!_)continue;let x=_.map(w=>mi(s,w[0],w[2]));d.push({u0:Math.min(...x.map(w=>w[0])),u1:Math.max(...x.map(w=>w[0])),v0:Math.min(...x.map(w=>w[1])),v1:Math.max(...x.map(w=>w[1]))})}let f=u?kh(u,s):s,p=null;if(u){let g=Hn(f),m=Yi(u,{u0:0,u1:0,a:0,b:0}),_=x=>{let[w,b]=g.at(x,g.w/2),[y,M]=mi(u,w,b);return go(m,y,M)??Mn(u).y(M)};p=_(g.u0)<=_(g.u1)?0:1}oM(c.solid,c.lines,f,hc(i,f,f.overhang??t),a.elevation,c.glass,h,d,p)}return[...r.values()].sort((s,a)=>+(s.lift===!1)-+(a.lift===!1))}function oM(i,e,t,n,r,o=i,s=!1,a=[],l=null){let c=Hn(t),u=Mn(t),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,h.a),f=Math.max(0,h.b),p=c.w,g=c.u0-Math.max(0,h.u0),m=c.u1+Math.max(0,h.u1),_=(R,I,F)=>{let[z,B]=c.at(R,I);return[z,F-r,B]},x=new Q(Bs),w=new Q(zs),b=new Q(t0),y=(R,I)=>{for(let F=1;F+1<R.length;F++)i.tri(R[0],R[F],R[F+1],I)},M=[],E=[],v=[],S=null;if(t.shape==="flat"||t.shape==="parapet"){let R=t.eave_a,I=t.shape==="parapet",F=t.points&&t.points.length>=3?Ps(t,I?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):I?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,p),c.at(c.u0,p)]:[c.at(g,-d),c.at(m,-d),c.at(m,p+f),c.at(g,p+f)];Ki(F)<0&&(F=[...F].reverse()),wt(i,F,R-r,R-r+.25,zs,Bs,{bottom:!0});for(let z=0;z<F.length;z++){let B=F[z],N=F[(z+1)%F.length];e.seg([B[0],R-r+.252,B[1]],[N[0],R-r+.252,N[1]],Ar),e.seg([B[0],R-r,B[1]],[N[0],R-r,N[1]],Er)}if(I){let z=G=>Ki(G)>=0?G:[...G].reverse(),B=z(F),N=Ph(B,-.2),O=B.length;for(let G=0;G<O;G++){let J=z([B[G],B[(G+1)%O],N[(G+1)%O],N[G]]);wt(i,J,R-r+.25,R-r+.65,zs,Bs),e.seg([B[G][0],R-r+.652,B[G][1]],[B[(G+1)%O][0],R-r+.652,B[(G+1)%O][1]],Ar),e.seg([N[G][0],R-r+.652,N[G][1]],[N[(G+1)%O][0],R-r+.652,N[(G+1)%O][1]],Ar)}}}else{let R=Yi(t,h);M=R.faces;for(let I of a)M=M.flatMap(F=>hm(F,I));E=R.rim,v=R.ridges,S=R.gable}let T=!!t.open,A=new Q(Z1);for(let R of M){if(T){for(let I=1;I+1<R.length;I++)o.tri(_(R[0][0],R[0][1],R[0][2]),_(R[I][0],R[I][1],R[I][2]),_(R[I+1][0],R[I+1][1],R[I+1][2]),A);continue}y(R.map(([I,F,z])=>_(I,F,z)),x),y(R.map(([I,F,z])=>_(I,F,z-$t)),w)}for(let R=0;R<E.length;R++){let[I,F,z]=E[R],[B,N,O]=E[(R+1)%E.length];T||y([_(I,F,z),_(B,N,O),_(B,N,O-$t),_(I,F,z-$t)],w),e.seg(_(I,F,z),_(B,N,O),T?Ar:Er)}if(T){t.points?.length?sM(i,e,t,r):aM(i,e,c,u,h,_,r);return}for(let[[R,I,F],[z,B,N]]of v)e.seg(_(R,I,F+.004),_(z,B,N+.004),Ar);let C=t.base;if(s)return;let P=c.at((c.u0+c.u1)/2,p/2);if(t.points?.length){let R=Yi(t,{u0:0,u1:0,a:0,b:0}).rim;R.forEach((I,F)=>{let z=R[(F+1)%R.length],B=I,N=t.shape==="flat"||t.shape==="parapet"?0:$t,O=I[2]-N,G=z[2]-N;if(Math.max(O,G)<=C+.001)return;let J=j=>[I[0]+(z[0]-I[0])*j,I[1]+(z[1]-I[1])*j,C+N];O<C&&(B=J((C-O)/(G-O))),G<C&&(z=J((C-O)/(G-O))),y([_(B[0],B[1],C),_(z[0],z[1],C),_(z[0],z[1],z[2]-N),_(B[0],B[1],B[2]-N)],b)});return}if(S){let R=lM(S,C-$t),I=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(R.length>=3)for(let F of I)Ec(i,R.map(([z,B])=>_(F,z,B)),b,P,e)}if(t.shape!=="flat"&&t.shape!=="parapet")for(let R of[0,p]){let I=u.y(R)-$t;I>C+.02&&Ec(i,[_(c.u0,R,C),_(c.u1,R,C),_(c.u1,R,I),_(c.u0,R,I)],b,P,e)}else if(t.eave_a>C+.02)for(let[R,I,F,z]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,p],[c.u1,p,c.u0,p],[c.u0,p,c.u0,0]])Ec(i,[_(R,I,C),_(F,z,C),_(F,z,t.eave_a),_(R,I,t.eave_a)],b,P,e)}function sM(i,e,t,n){let s=Hn(t),a=Yi(t,{u0:0,u1:0,a:0,b:0});a.rim.forEach((l,c)=>{let u=a.rim[(c+1)%a.rim.length],h=s.at(l[0],l[1]),d=s.at(u[0],u[1]),f=d[0]-h[0],p=d[1]-h[1],g=Math.hypot(f,p);if(g<1e-6)return;let m=-p/g*.12/2,_=f/g*.12/2,x=[[h[0]+m,h[1]+_],[d[0]+m,d[1]+_],[d[0]-m,d[1]-_],[h[0]-m,h[1]-_]];Ki(x)<0&&x.reverse();let w=(M,E)=>l[2]+(u[2]-l[2])*((M-h[0])*f+(E-h[1])*p)/(g*g)-n-.03,b=i.p.length;wt(i,x,0,.18,qh,Zh,{bottom:!0});for(let M=b;M<i.p.length;M+=3)i.p[M+1]+=w(i.p[M],i.p[M+2])-.18;e.seg([h[0],l[2]-n-.18,h[1]],[d[0],u[2]-n-.18,d[1]],Er);let y=Math.max(1,Math.ceil(g/3.5));for(let M=0;M<y;M++){let E=M/y,v=h[0]+f*E,S=h[1]+p*E,T=w(v,S)-.18;T<=0||wt(i,[[v-.12/2,S-.12/2],[v+.12/2,S-.12/2],[v+.12/2,S+.12/2],[v-.12/2,S+.12/2]],0,T,qh,Zh,{bottom:!0})}})}function aM(i,e,t,n,r,o,s){let a=t.w,l=.12,c=.16,u=r.a>0,h=r.b>0,d=r.u0>0,f=r.u1>0,p=(_,x,w,b,y,M)=>{let E=[t.at(_,w),t.at(x,w),t.at(x,b),t.at(_,b)],v=(E[1][0]-E[0][0])*(E[2][1]-E[0][1])-(E[2][0]-E[0][0])*(E[1][1]-E[0][1]);wt(i,v<0?[...E].reverse():E,y-s,M-s,qh,Zh,{bottom:!0})},g=s;for(let[_,x]of[[0,u],[a,h]]){if(!x)continue;let w=n.y(_)-.03,b=_===0?0:a-l;p(t.u0,t.u1,b,b+l,w-c,w),e.seg(o(t.u0,_,w-c),o(t.u1,_,w-c),Er)}for(let[_,x]of[[t.u0,d],[t.u1-l,f]])if(x)for(let w=0;w<6;w++){let b=a*w/6,y=a*(w+1)/6,M=Math.min(n.y(b),n.y(y))-.03;p(_,_+l,b,y,M-c,M)}let m=[];for(let[_,x]of[[0,u],[a-l,h]]){if(!x)continue;let w=t.u1-t.u0-l,b=Math.max(1,Math.ceil(w/3.5));for(let y=0;y<=b;y++){let M=t.u0+w*y/b;y===0&&!d||y===b&&!f||m.push([M,_])}}if(!u&&!h)for(let _ of[t.u0,t.u1-l])(_===t.u0&&d||_!==t.u0&&f)&&m.push([_,a/2-l/2]);for(let[_,x]of m){let w=n.y(x+l/2)-.03-c;p(_,_+l,x,x+l,g,w)}}function lM(i,e){let t=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=e&&t.push([s,a]);let l=i[o+1];if(l&&(a-e)*(l[1]-e)<0){let c=(e-a)/(l[1]-a);t.push([s+(l[0]-s)*c,e])}}if(t.length<2)return[];let n=t[0],r=t[t.length-1];return r[1]>e&&t.push([r[0],e]),n[1]>e&&t.unshift([n[0],e]),t}var Os={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Rc={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},Ji=.2,cM=.01,Us=8,Pc=.42,Jh=.42;function s0(i,e,t,n=[],r=[],o){let{walls:s,open:a}=Wi(i.rooms,{exterior:e,interior:t},i.walls??[]),l=i.openings.map(P=>ks(i,P,s)).filter(P=>P!==null),c=(P,R,I)=>{let F=o?o(P,R):null;return F===null?I:Math.min(I,F)},u=(P,R,I,F,z)=>{if(!o)return z;let B=z,N=Math.max(2,Math.ceil((F-I)/.25)+1);for(let O=0;O<N;O++){let G=I+(F-I)*O/(N-1);B=Math.min(B,c(P[0]+R[0]*G,P[1]+R[1]*G,z))}return B},h=new rt(!0,!0),d=[],f=new Nt,p=[];for(let P of i.rooms){if(P.points.length<3)continue;let R=Vs(P.points),I=mt(i,P),F=dc(i,P,l);p.push(...F);let z=Rc[P.floor_material]??Rc.wood,B=new Q(z.color),N=n.flatMap(ue=>{if(Pm(ue,R))return[Bh(ue,.003)];if(!mm(ue))return[];let ne=bo(R,ue);return ne.length>=3&&Math.abs(ws(ne))>.01?[Bh(Vs(ne),.003)]:[]});p.push(...N);let O=[...R,...N.flat()],G=h.count;for(let[ue,ne,de]of mn(R,N)){let H=O[ue],X=O[ne],oe=O[de],ce=[[H,X,oe]];for(let le of F)ce=ce.flatMap(pe=>_o(pe,le));for(let le of ce)for(let pe=1;pe+1<le.length;pe++){let[Ue,De,Fe]=[le[0],le[pe],le[pe+1]];h.tri([Ue[0],I,Ue[1]],[Fe[0],I,Fe[1]],[De[0],I,De[1]],B,B,B,[Ue[0],Ue[1],Fe[0],Fe[1],De[0],De[1]],qe,z.tile)}}d.push({roomId:P.id,start:G,end:h.count,color:z.color});let J=new Q(Os.slab),j=ue=>{for(let ne=0;ne<ue.length;ne++)for(let[de,H]of Ch(ue[ne],ue[(ne+1)%ue.length],F))h.tri([de[0],I-Ji,de[1]],[de[0],I,de[1]],[H[0],I,H[1]],J),h.tri([de[0],I-Ji,de[1]],[H[0],I,H[1]],[H[0],I-Ji,H[1]],J)};j(R);for(let ue of N){j([...Vs(ue)].reverse());for(let ne=0;ne<ue.length;ne++){let de=ue[ne],H=ue[(ne+1)%ue.length];f.seg([de[0],I+.006,de[1]],[H[0],I+.006,H[1]],ri),f.seg([de[0],I-Ji,de[1]],[H[0],I-Ji,H[1]],oi)}}}let g=new Map,m=[],_=new Map;for(let P of s){let R="interior",I=null;if(P.exterior){let z=P.b[0]-P.a[0],B=P.b[1]-P.a[1],N=Math.hypot(z,B)||1,O=[B/N,-z/N],G=(Math.round(Math.atan2(O[1],O[0])/(2*Math.PI)*Us)%Us+Us)%Us;R=`s${G}`;let J=G/Us*2*Math.PI;I=[Math.cos(J),Math.sin(J)]}let F=g.get(R);F===void 0&&(F=m.length,g.set(R,F),m.push(I)),_.set(P,F)}let x=new Map,w=[];for(let P of i.openings){let R=vr(P,i.rooms,i.walls??[]);if(!R)continue;let I=xr(s,P,R);if(!I)continue;let{wall:F,s:z}=I,B=Cc([F.b[0]-F.a[0],F.b[1]-F.a[1]]),N=Math.hypot(F.b[0]-F.a[0],F.b[1]-F.a[1]),O=Math.min(P.width,N),G=Math.max(0,Math.min(N-O,z-O/2)),J=R.room.points,j=F.free?B[0]*(J[1][0]-J[0][0])+B[1]*(J[1][1]-J[0][1])>0:F.roomLeft===P.room_id,ue=[-B[1],B[0]],ne=j?ue:[-ue[0],-ue[1]],de=l.find(Ke=>Ke.opening.id===P.id),H=de?.threshold??mt(i,R.room),X=de?.room??R.room,oe=X.wall_offset!=null||X.floor_offset!=null?mt(i,X):H,ce=Math.min(de?.ceiling??1/0,an(i,F).top);if(de?.other&&ce-H<.12)continue;let le=Math.min(u(F.a,B,G,G+O,ce)-.02,oe+P.sill+P.height),pe=Math.min((de?.stair?pm(de):H)+P.sill,le-.1),Ue=[ne[1],-ne[0]],De=B[0]*Ue[0]+B[1]*Ue[1]>0,Fe={opening:P,bucket:_.get(F),start:[F.a[0]+B[0]*G,F.a[1]+B[1]*G],axis:B,width:O,toRoom:ne,faceRoom:j?F.left:F.right,faceOut:j?F.right:F.left,sill:pe,top:le,hingeAtStart:P.hinge==="left"===De,exterior:F.exterior};w.push(Fe);let Ze=x.get(F);Ze||x.set(F,Ze=[]),Ze.push({s0:G,s1:G+O,sill:pe,top:le,info:Fe})}let b=Math.min(i.cut_height,Gt(i)-i.elevation),y=new rt;for(let P of s){let R=_.get(P),I=Cc([P.b[0]-P.a[0],P.b[1]-P.a[1]]),F=(x.get(P)??[]).sort((ne,de)=>ne.s0-de.s0),z=an(i,P),B=z.top,N=[],O=[-1/0,...new Set(F.flatMap(ne=>[ne.s0,ne.s1])).values(),1/0].sort((ne,de)=>ne-de);for(let ne=0;ne+1<O.length;ne++){let de=O[ne],H=O[ne+1];if(H-de<1e-6)continue;let X=Number.isFinite(de)&&Number.isFinite(H)?(de+H)/2:Number.isFinite(de)?de+1:H-1,oe=F.filter(pe=>pe.s0<X&&pe.s1>X).map(pe=>[pe.sill,pe.top]).sort((pe,Ue)=>pe[0]-Ue[0]),ce=[],le=z.bottom-Ji;for(let[pe,Ue]of oe)pe>le+1e-4&&ce.push([le,pe<1e-4?-cM:pe]),le=Math.max(le,Ue);B>le+1e-4&&ce.push([le,B]),N.push({t0:de,t1:H,ranges:ce})}let G=Math.hypot(P.b[0]-P.a[0],P.b[1]-P.a[1]),J=o&&u(P.a,I,0,G,B)<B-.001,j=J?N.flatMap(ne=>{let de=Math.max(ne.t0,-.5),H=Math.min(ne.t1,G+.5),X=Math.max(1,Math.ceil((H-de)/.3));return Array.from({length:X},(oe,ce)=>({t0:ce===0?ne.t0:de+(H-de)*ce/X,t1:ce===X-1?ne.t1:de+(H-de)*(ce+1)/X,ranges:ne.ranges,inner0:ce>0,inner1:ce<X-1}))}):N.map(ne=>({...ne,inner0:!1,inner1:!1})),ue=ne=>(ne[0]-P.a[0])*I[0]+(ne[1]-P.a[1])*I[1];for(let ne of j){let de=hM(P.footprint,P.a,I,ne.t0,ne.t1);if(de.length<3)continue;let H=(ce,le)=>Math.abs(ue(ce)-le)<1e-4,X=(ce,le)=>ne.inner0&&H(ce,ne.t0)&&H(le,ne.t0)||ne.inner1&&H(ce,ne.t1)&&H(le,ne.t1),oe=J?Math.min(...de.map(([ce,le])=>c(ce,le,B))):B;for(let[ce,le]of ne.ranges){let pe=Math.min(le,J?Math.max(...de.map(([Ze,Ke])=>c(Ze,Ke,B))):le);if(pe-ce<1e-4||oe-ce<.01)continue;let Ue=ce>.01,De=J&&le>oe,Fe=(Ze,Ke)=>Math.min(le,c(Ze,Ke,B));if(ce<b-1e-6){let Ze=pe>b+1e-6?gm+R:yr+R,Ke=De&&oe<b?(_t,kt)=>Math.min(b,Fe(_t,kt)):Math.min(pe,b);wt(y,de,ce,Ke,Os.wall,Os.wallTop,{aoFrom:0,bottom:Ue,fold:yr+R,topFold:Ze,skipSide:X})}pe>b+1e-6&&oe>b+1e-6&&wt(y,de,Math.max(ce,b),De?Fe:pe,Os.wall,Os.wallTop,{aoFrom:0,fold:R,bottom:Ue&&ce>=b,skipSide:X})}}}let M=s.flatMap(P=>P.footprint),E=fM(s,M),v=new Nt;v.p.push(...f.p),v.c.push(...f.c),v.f.push(...f.f);for(let P of l){let R=P.stair;if(!R)continue;let I=(B,N)=>[P.start[0]+P.axis[0]*B+R.toward[0]*N,P.start[1]+P.axis[1]*B+R.toward[1]*N],F=Rc[R.room.floor_material]?.color??Rc.wood.color;for(let B=0;B<R.count;B++){let N=R.face+R.depth*B/R.count,O=R.face+R.depth*(B+1)/R.count,G=R.recess?P.low+(P.high-P.low)*(B+1)/R.count:P.high-(P.high-P.low)*B/R.count,J=Vs([I(0,N),I(P.width,N),I(P.width,O),I(0,O)]);wt(y,J,P.low-.02,G,F,F,{bottom:!0});let j=I(0,N),ue=I(P.width,N);v.seg([j[0],G+.003,j[1]],[ue[0],G+.003,ue[1]],ri)}let z=R.offset===0?-P.wall.left-P.wall.right:R.back;if(R.face>z+1e-6){let B=Vs([I(0,z),I(P.width,z),I(P.width,R.face),I(0,R.face)]);wt(y,B,P.threshold-.02,P.threshold,F,F,{bottom:!0})}}let S=(P,R)=>(x.get(P)??[]).filter(R);for(let P of E.edges){let R=_.get(P.wall),I=an(i,P.wall).bottom;for(let[z,B]of kc(P,S(P.wall,N=>N.sill<=I+.005)))v.seg([z[0],I+.004,z[1]],[B[0],I+.004,B[1]],pc);for(let[z,B]of kc(P,S(P.wall,N=>N.sill<b&&N.top>b)))v.seg([z[0],b,z[1]],[B[0],b,B[1]],Ih,mc+R);let F=an(i,P.wall).top;for(let[z,B]of kc(P,S(P.wall,N=>N.top>=F-.021))){if(!o){v.seg([z[0],F,z[1]],[B[0],F,B[1]],ri,F<=b+1e-6?yr+R:R);continue}let N=Math.max(1,Math.ceil(Math.hypot(B[0]-z[0],B[1]-z[1])/.3));for(let O=0;O<N;O++){let G=[z[0]+(B[0]-z[0])*O/N,z[1]+(B[1]-z[1])*O/N],J=[z[0]+(B[0]-z[0])*(O+1)/N,z[1]+(B[1]-z[1])*(O+1)/N],j=c(G[0],G[1],F),ue=c(J[0],J[1],F);v.seg([G[0],j,G[1]],[J[0],ue,J[1]],ri,Math.max(j,ue)<=b+1e-6?yr+R:R)}}}for(let P of E.corners){let R=c(P.p[0],P.p[1],an(i,P.wall).top);v.segSplit([P.p[0],an(i,P.wall).bottom+.004,P.p[1]],[P.p[0],R,P.p[1]],oi,Math.min(b,R),_.get(P.wall))}for(let P of x.values())for(let R of P)uM(v,R,b);let T=pM(E.edges,i,x);Em(T,i,s,w,[...n,...p],s.map(P=>_.get(P)??0));let A=new rt;wm(y,v,i,A);for(let P of r)$h(y,v,P.face,P.field,i.elevation);let C=[];for(let P of i.furniture){if(Yp(P.type))continue;let R=y.count,I=v.p.length/6,F=Pt(i,P),z=pn(i,P.x,P.z),B=T.p.length;bc(y,v,T,P,F-z);for(let N=R*9+1;N<y.p.length;N+=3)y.p[N]+=z;for(let N=I*6+1;N<v.p.length;N+=3)v.p[N]+=z;for(let N=B+1;N<T.p.length;N+=3)T.p[N]+=z;(F+P.h>b+.05||P.rotation_x||P.rotation_z)&&(gc(y,R,b,Cs),_m(v,I,b,Cs)),C.push({id:P.id,start:R,end:y.count})}return{floor:h.geometry(),roomTris:d,holes:p,walls:y.geometry(),water:A.geometry(),lines:v.geometry(),shadow:T.geometry(),buckets:m,openings:w,walls2d:s,openRooms:a,wallBuckets:s.map(P=>_.get(P)),furnitureTris:C,roofUnder:o}}function uM(i,e,t){let{info:n}=e,r=n.bucket,o=(l,c,u)=>[n.start[0]+n.axis[0]*(l-e.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-e.s0)+n.toRoom[1]*c],s=l=>l>t+1e-6?r:qe,a=Math.max(e.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[e.s0,e.s1])i.segSplit(o(c,l,a),o(c,l,e.top),oi,t,r);i.seg(o(e.s0,l,e.top),o(e.s1,l,e.top),oi,s(e.top)),e.sill>.01&&i.seg(o(e.s0,l,e.sill),o(e.s1,l,e.sill),oi,s(e.sill))}for(let l of[e.s0,e.s1])i.seg(o(l,n.faceRoom,e.top),o(l,-n.faceOut,e.top),oi,s(e.top)),e.sill>.01&&i.seg(o(l,n.faceRoom,e.sill),o(l,-n.faceOut,e.sill),oi,s(e.sill)),e.sill<t&&e.top>t&&i.seg(o(l,n.faceRoom,t),o(l,-n.faceOut,t),Ih,mc+r)}function hM(i,e,t,n,r){let o=a=>(a[0]-e[0])*t[0]+(a[1]-e[1])*t[1],s=i;return Number.isFinite(n)&&(s=i0(s,a=>o(a)-n)),Number.isFinite(r)&&(s=i0(s,a=>r-o(a))),s}function i0(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=e(r),a=e(o);if(s>=0&&t.push(r),s>=0!=a>=0){let l=s/(s-a);t.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return t}var r0=i=>Math.round(i*1e3),Gs=i=>`${r0(i[0])},${r0(i[1])}`,o0=(i,e)=>{let t=Gs(i),n=Gs(e);return t<n?`${t}|${n}`:`${n}|${t}`};function dM(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let h of e){let d=((h[0]-r[0])*s+(h[1]-r[1])*a)/l;if(d<=1e-6||d>=1-1e-6)continue;Math.abs((h[0]-r[0])*a-(h[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(d)}c.sort((h,d)=>h-d);let u=r;for(let h of c){let d=[r[0]+s*h,r[1]+a*h];Gs(d)!==Gs(u)&&t.push([u,d]),u=d}t.push([u,o])}return t}function fM(i,e){let t=i.map(l=>({wall:l,edges:dM(l.footprint,e)})),n=new Map;for(let{edges:l}of t)for(let[c,u]of l){let h=o0(c,u);n.set(h,(n.get(h)??0)+1)}let r=[],o=new Map,s=(l,c,u)=>{let h=Gs(l),d=o.get(h);d||o.set(h,d={p:l,wall:c,d:[]}),d.d.push(u)};for(let{wall:l,edges:c}of t)for(let[u,h]of c){if(n.get(o0(u,h))!==1)continue;let d=Math.hypot(h[0]-u[0],h[1]-u[1]);if(d<1e-4)continue;r.push({a:u,b:h,wall:l});let f=[(h[0]-u[0])/d,(h[1]-u[1])/d];s(u,l,f),s(h,l,f)}let a=[];for(let{p:l,wall:c,d:u}of o.values())u.some(h=>u.some(d=>Math.abs(h[0]*d[1]-h[1]*d[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function kc(i,e){if(!e.length)return[[i.a,i.b]];let t=Cc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Cc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(t[0]*n[0]+t[1]*n[1])<.99)return[[i.a,i.b]];let r=h=>(h[0]-i.wall.a[0])*t[0]+(h[1]-i.wall.a[1])*t[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let h of e)c=c.flatMap(([d,f])=>{if(h.s1<=d||h.s0>=f)return[[d,f]];let p=[];return h.s0>d&&p.push([d,h.s0]),h.s1<f&&p.push([h.s1,f]),p});let u=h=>{let d=(h-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*d,i.a[1]+(i.b[1]-i.a[1])*d]};return c.filter(([h,d])=>d-h>1e-4).map(([h,d])=>o<=s?[u(h),u(d)]:[u(d),u(h)])}function pM(i,e,t){let n=new rt,r=new Q(Jh,Jh,Jh),o=new Q(1,1,1);for(let s of i){let a=s.b[0]-s.a[0],l=s.b[1]-s.a[1],c=Math.hypot(a,l)||1,u=[(s.a[0]+s.b[0])/2+l/c*.05,(s.a[1]+s.b[1])/2-a/c*.05],h=e.rooms.find(p=>Ge(u,p.points)),d=mt(e,h),f=d+.002;for(let[p,g]of kc(s,(t.get(s.wall)??[]).filter(m=>m.sill<=d+.005))){let m=g[0]-p[0],_=g[1]-p[1],x=Math.hypot(m,_);if(x<.05)continue;let w=[_/x,-m/x],b=[(p[0]+g[0])/2+w[0]*.05,(p[1]+g[1])/2+w[1]*.05];if(!e.rooms.some(E=>E.points.length>=3&&Ge(b,E.points)))continue;let y=[p[0]+w[0]*Pc,p[1]+w[1]*Pc],M=[g[0]+w[0]*Pc,g[1]+w[1]*Pc];n.tri([p[0],f,p[1]],[y[0],f,y[1]],[M[0],f,M[1]],r,o,o),n.tri([p[0],f,p[1]],[M[0],f,M[1]],[g[0],f,g[1]],r,o,r)}}return n}function a0(i,e){let t=e.furniture.filter(o=>o.type==="stairwell").map(Gi),n=i.filter(o=>o.elevation<e.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return zh(t);let r=n.furniture.filter(o=>(Xp.has(o.type)||yt(o.type)?.hole)&&n.elevation+Pt(n,o)+o.h>=e.elevation+pn(e,o.x,o.z)-.3).map(Gi);return zh([...t,...r])}function Cc(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function Vs(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}var mM=500,l0=.12,c0=1.35,gM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Ic=class{view={target:new U,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(e,t,n){this.el=e,this.camera=t,this.events=n;let r=(o,s,a)=>{e.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[e,t]of this.listeners)this.el.removeEventListener(e,t)}get active(){return this.pointers.size>0||this.flight!==null}update(e){let t=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,h=Math.min(1,(e-c)/u),d=gM(h);this.view.target.lerpVectors(a.target,l.target,d),this.view.radius=a.radius+(l.radius-a.radius)*d,this.view.theta=a.theta+(l.theta-a.theta)*d,this.view.phi=a.phi+(l.phi-a.phi)*d,h>=1&&(this.flight=null),t=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=jh(this.view.phi+this.velocity.phi,l0,c0),this.velocity.theta*=.9,this.velocity.phi*=.9,t=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),t}flyTo(e,t=700){let n={...this.view,target:this.view.target.clone()},r=e.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let o={target:(e.target??n.target).clone(),radius:e.radius??n.radius,theta:r,phi:e.phi??n.phi};this.velocity={theta:0,phi:0},t<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:n,to:o,start:performance.now(),duration:t},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(e){let t=this.el.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}onDown(e){if(this.el.setPointerCapture(e.pointerId),this.pointers.size===0&&e.button===0&&this.events.grab?.(...this.local(e))){this.grabbing=!0,this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:e.clientX,y:e.clientY,time:performance.now(),moved:!1};let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},mM)}else this.down=null,this.pinch=this.pinchState()}onMove(e){let t=this.pointers.get(e.pointerId);if(!t)return;if(this.grabbing){this.events.drag?.(...this.local(e));return}let n=e.clientX-t.x,r=e.clientY-t.y;if(this.swiping){this.events.swipeMove?.(e.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&t.button===0&&!e.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,e.clientX-this.down.x,e.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(e.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){t.x=e.clientX,t.y=e.clientY;return}let o=t.type==="mouse";if(o&&!this.leftDragTurns&&t.button===0){t.x=e.clientX,t.y=e.clientY;return}if((t.button===1||t.button===2||e.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=jh(this.view.phi+c,l0,c0),this.velocity={theta:l,phi:c}}t.x=e.clientX,t.y=e.clientY}else{t.x=e.clientX,t.y=e.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(e){if(this.pointers.has(e.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(e.pointerId),this.events.drop?.();return}if(this.pointers.delete(e.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&e.type==="pointerup"&&performance.now()-this.down.time<400){let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(e){e.preventDefault(),this.flight=null,this.zoom(Math.exp(e.deltaY*(e.deltaMode===1?.05:.0015))),this.events.change()}zoom(e){this.view.radius=jh(this.view.radius*e,this.minRadius,this.maxRadius)}pan(e,t){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new U(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new U(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-e*r),this.view.target.addScaledVector(s,t*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t.x-n.x,t.y-n.y),mid:[(t.x+n.x)/2,(t.y+n.y)/2]}}};function jh(i,e,t){return Math.min(t,Math.max(e,i))}function ji(i,e,t="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=e.standing,n.uniforms.uGlass=e.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${t==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${t==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${t==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),t==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${t}`,i}function Lc(i,e,t,n){let r=Math.min(1,Math.max(0,(i/e-.62)/.3)),o=t?1:.94*r;return{opacity:o,lift:t?0:(1-(n??o))*2.2}}function u0(i,e){return i.onBeforeCompile=t=>{t.uniforms.uRoofDirection=e,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform vec3 uRoofDirection;
varying float vRoofGlass;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 roofNormal = mat3(modelMatrix) * normal;
      if (roofNormal.y < 0.0) roofNormal = -roofNormal;
      float roofHorizontal = length(roofNormal.xz);
      vRoofGlass = roofHorizontal < 0.000001 ? smoothstep(-0.15, 0.15, uRoofDirection.y) : smoothstep(0.1, 0.4, dot(roofNormal.xz / roofHorizontal, uRoofDirection.xz));`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vRoofGlass;`).replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075), vRoofGlass);
      diffuseColor.a *= mix(1.0, 0.2, vRoofGlass);`)},i.customProgramCacheKey=()=>"fp3d-roof-glass",i}function h0(i,e,t,n,r,o,s=[],a){if(n.elevation<=2||r>=.97)return;let l=n.elevation*Math.PI/180,c=(n.azimuth+(e.settings.north??0))*Math.PI/180,u=[Math.sin(c),-Math.cos(c)],h=[u[0]*Math.cos(l),Math.sin(l),u[1]*Math.cos(l)],d=Math.min(1,n.elevation/12)*(1-.8*r),f=1/Math.tan(l),p=new Map($i(e).map(g=>[g.key,g]));for(let g of e.settings.roof.windows??[]){let m=p.get(g.face);if(!m)continue;let _=$m(e,m,g);if(_?.floor.id!==t.id)continue;let x=_.corners,w=m.n.reduce((B,N,O)=>B+N*h[O],0);if(w<.05)continue;let b=Math.min(1,Math.max(0,o.get(g.id)?.cover??0));if(b>=.99)continue;let y=[x.reduce((B,N)=>B+N[0],0)/4,x.reduce((B,N)=>B+N[2],0)/4],M=t.rooms.find(B=>Ge(y,B.points));if(!M)continue;let E=t.rooms.indexOf(M),v=t.rooms.filter((B,N)=>B.id===M.id||a&&a[N]===a[E]),S=mt(t,M),T=(B,N,O)=>B.map((G,J)=>G+(N[J]-G)*O),A=(B,N)=>{let O=T(T(x[0],x[1],B),T(x[3],x[2],B),N*(1-b)),G=Math.min(7,(O[1]-t.elevation-S)*f);return[O[0]-u[0]*G,S+.02,O[2]-u[1]*G]},C=(B,N)=>Math.hypot(...B.map((O,G)=>O-N[G])),P=Math.max(1,Math.ceil(C(A(0,0),A(1,0))/.3)),R=Math.max(1,Math.ceil(C(A(0,0),A(0,1))/.25)),I=.14*d*Math.min(1,w*1.5),F=new Q(I,.82*I,.55*I),z=F.clone().multiplyScalar(.45);for(let B=0;B<R;B++)for(let N=0;N<P;N++){let O=N/P,G=(N+1)/P,J=B/R,j=(B+1)/R,ue=A((O+G)/2,(J+j)/2),ne=[ue[0],ue[2]];if(!v.some(pe=>Ge(ne,pe.points))||s.some(pe=>Ge(ne,pe)))continue;let de=A(O,J),H=A(G,J),X=A(G,j),oe=A(O,j),ce=F.clone().lerp(z,J),le=F.clone().lerp(z,j);i.tri(de,H,X,ce,ce,le),i.tri(de,X,oe,ce,le,le)}}}function d0(i,e){return Math.hypot(e[0]-i[0],e[1]-i[1],e[2]-i[2])}function f0(i,e,t=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=d0(o,s),c=d0(s,a),u=Math.min(e,l*.45,c*.45),h=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],d=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(u<.005||h[0]*d[0]+h[1]*d[1]+h[2]*d[2]<-.999){n.push(s);continue}let f=[s[0]+h[0]*u,s[1]+h[1]*u,s[2]+h[2]*u],p=[s[0]+d[0]*u,s[1]+d[1]*u,s[2]+d[2]*u];for(let g=0;g<=t;g++){let m=g/t,_=(1-m)*(1-m),x=2*(1-m)*m,w=m*m;n.push([_*f[0]+x*s[0]+w*p[0],_*f[1]+x*s[1]+w*p[1],_*f[2]+x*s[2]+w*p[2]])}}return n.push(i[i.length-1]),n}var p0=new Q(7568261),m0=new Q(4869974),_M=new Q(3116287),g0=new Q(3948872),Qh=Rr([.35,.85,.4]),_0=10;function Rr(i){let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]}function Hs(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function b0(i){let e=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],t=Rr(Hs(i,e));return[t,Rr(Hs(i,t))]}function gi(i,e){let t=.5+.5*Math.max(0,e[0]*Qh[0]+e[1]*Qh[1]+e[2]*Qh[2]);return i.clone().multiplyScalar(t)}function yo(i,e,t,n,r,o=!1){let s=Rr([t[0]-e[0],t[1]-e[1],t[2]-e[2]]),[a,l]=b0(s),c=(u,h)=>{let d=h/_0*Math.PI*2,f=[a[0]*Math.cos(d)+l[0]*Math.sin(d),a[1]*Math.cos(d)+l[1]*Math.sin(d),a[2]*Math.cos(d)+l[2]*Math.sin(d)];return{p:[u[0]+f[0]*n,u[1]+f[1]*n,u[2]+f[2]*n],n:f}};for(let u=0;u<_0;u++){let h=c(e,u),d=c(e,u+1),f=c(t,u),p=c(t,u+1);i.tri(h.p,p.p,f.p,gi(r,h.n),gi(r,p.n),gi(r,f.n)),i.tri(h.p,d.p,p.p,gi(r,h.n),gi(r,d.n),gi(r,p.n)),o&&(i.tri([...e],d.p,h.p,gi(r,[-s[0],-s[1],-s[2]])),i.tri([...t],f.p,p.p,gi(r,s)))}}function bM(i,e,t,n,r,o,s,a){let l=Rr(Hs(t,n)),c=(h,d,f)=>[e[0]+t[0]*h*r+n[0]*d*o+l[0]*f*s,e[1]+t[1]*h*r+n[1]*d*o+l[1]*f*s,e[2]+t[2]*h*r+n[2]*d*o+l[2]*f*s],u=[];for(let[h,d]of[[t,.5],[[-t[0],-t[1],-t[2]],-.5]])u.push([h,[c(d,-.5,-.5),c(d,.5,-.5),c(d,.5,.5),c(d,-.5,.5)]]);for(let[h,d]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])u.push([h,[c(-.5,d,-.5),c(.5,d,-.5),c(.5,d,.5),c(-.5,d,.5)]]);for(let[h,d]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])u.push([h,[c(-.5,-.5,d),c(.5,-.5,d),c(.5,.5,d),c(-.5,.5,d)]]);for(let[h,d]of u){let f=gi(a,h);i.tri(d[0],d[1],d[2],f),i.tri(d[0],d[2],d[3],f),i.tri(d[0],d[2],d[1],f),i.tri(d[0],d[3],d[2],f)}}function v0(i,e){if(e.points.length<2)return;let t=e.radius,n=f0(e.points,t*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?p0.clone().multiplyScalar(.55):p0;yo(i,o,s,t,a,r===1||r===n.length-1)}for(let r of e.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);yo(i,s,a,t*1.22,m0,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);yo(i,s,a,t*1.08,e.water?new Q(...e.water).multiplyScalar(.9):new Q(10475240),!0);for(let l of o(.08)){let[c,u]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];yo(i,c,u,t*1.3,m0,!0)}}else{let[s,a]=o(.055);yo(i,s,a,t*1.4,g0,!0);let[l]=b0(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],u=[r.p[0]+c[0]*t*2,r.p[1]+c[1]*t*2,r.p[2]+c[2]*t*2];yo(i,[r.p[0]+c[0]*t*1.3,r.p[1]+c[1]*t*1.3,r.p[2]+c[2]*t*1.3],u,t*.35,g0,!0);let h=r.open===!1?Rr(Hs(r.dir,c)):r.dir,d=Rr(Hs(h,c)),f=[u[0]+h[0]*.045,u[1]+h[1]*.045,u[2]+h[2]*.045];bM(i,f,h,d,.1,.028,.012,_M)}}}var ed=1.62,vM=.2,td=class{solids=[];doors=[];rooms;walls;building;floor;constructor(e,t){this.building=e,this.floor=t;let n=e.settings;this.rooms=t.rooms.filter(s=>s.points.length>=3);let r=Wi(this.rooms,{exterior:n.wall_exterior,interior:n.wall_interior},t.walls??[]);this.walls=r.walls;let o=new Map;for(let s of t.openings){if(!(s.type!=="window"||s.sill<.1))continue;let l=vr(s,t.rooms,t.walls??[]);if(!l)continue;let c=xr(this.walls,s,l);if(!c)continue;let u=o.get(c.wall)??[];u.push([c.s-s.width/2+.05,c.s+s.width/2-.05]),o.set(c.wall,u);let h=c.wall,d=h.b[0]-h.a[0],f=h.b[1]-h.a[1],p=Math.hypot(d,f)||1,g=d/p,m=f/p,_=[h.a[0]+g*c.s,h.a[1]+m*c.s],x=h.left+.45,w=h.right+.45;this.doors.push({centre:_,p:[[_[0]-m*x,_[1]+g*x],[_[0]+m*w,_[1]-g*w]]})}for(let s of this.walls){if(s.height!==void 0&&s.height<.9)continue;let a=s.b[0]-s.a[0],l=s.b[1]-s.a[1],c=Math.hypot(a,l);c<1e-6||this.solids.push({a:s.a,u:[a/c,l/c],len:c,left:s.left,right:s.right,gaps:o.get(s)??[]})}}blocked(e,t=vM){for(let n of this.solids){let r=e[0]-n.a[0],o=e[1]-n.a[1],s=r*n.u[0]+o*n.u[1];if(s<-t||s>n.len+t)continue;let a=-r*n.u[1]+o*n.u[0];if(!(a>n.left+t||a<-n.right-t)&&!n.gaps.some(([l,c])=>s>l+t*.6&&s<c-t*.6))return!0}return!1}clear(e,t){let n=Math.hypot(t[0]-e[0],t[1]-e[1]),r=Math.max(1,Math.ceil(n/.08));for(let o=1;o<=r;o++){let s=o/r;if(this.blocked([e[0]+(t[0]-e[0])*s,e[1]+(t[1]-e[1])*s]))return!1}return!0}roomAt(e){return this.rooms.find(t=>Ge(e,t.points))??null}path(e,t){if(this.clear(e,t))return[t];let n=[e,t,...this.doors.flatMap(h=>h.p).filter(h=>!this.blocked(h))],r=n.length,o=new Array(r).fill(1/0),s=new Array(r).fill(-1),a=new Array(r).fill(!1);o[0]=0;let l=new Map,c=(h,d)=>{let f=h<d?`${h}:${d}`:`${d}:${h}`,p=l.get(f);return p===void 0&&(p=this.clear(n[h],n[d]),l.set(f,p)),p};for(;;){let h=-1;for(let d=0;d<r;d++)!a[d]&&o[d]<1/0&&(h<0||o[d]<o[h])&&(h=d);if(h<0)return null;if(h===1)break;a[h]=!0;for(let d=0;d<r;d++){if(a[d]||d===h)continue;let f=Math.hypot(n[h][0]-n[d][0],n[h][1]-n[d][1]);o[h]+f>=o[d]||c(h,d)&&(o[d]=o[h]+f,s[d]=h)}}let u=[];for(let h=1;h>0;h=s[h])u.unshift(n[h]);return u}start(e=!1){for(let r of e?this.floor.openings:[]){if(r.type!=="door")continue;let o=vr(r,this.floor.rooms,this.floor.walls??[]);if(!o)continue;let s=xr(this.walls,r,o);if(!s||!s.wall.exterior)continue;let a=s.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c)||1,h=l/u,d=c/u,f=[a.a[0]+h*s.s,a.a[1]+d*s.s],p=[f[0]-d*(a.left+.9),f[1]+h*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(h,-d))}}let t=[...this.rooms].sort((r,o)=>x0(o)-x0(r))[0],n=t?this.freeNear(Vi(t.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(e,t,n=9){let r=Math.cos(t),o=Math.sin(t);for(let s=.2;s<n;s+=.15)if(this.blocked([e[0]+r*s,e[1]+o*s],.05))return s;return n}openYaw(e,t=null){let n=t??0,r=-1;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,a=this.sight(e,s);if(t!==null){let l=Math.abs(s-t)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=s)}return n}freeNear(e){if(!this.blocked(e))return e;for(let t=.2;t<2;t+=.2)for(let n=0;n<6.28;n+=.5){let r=[e[0]+Math.cos(n)*t,e[1]+Math.sin(n)*t];if(!this.blocked(r))return r}return e}};function x0(i){let e=0,t=i.points;for(let n=0;n<t.length;n++){let[r,o]=t[n],[s,a]=t[(n+1)%t.length];e+=r*a-s*o}return Math.abs(e/2)}var nd=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(e,t,n,r){this.v=e,this.map=t,this.surface=n,this.onRoom=r.onRoom;let o=r.start??(()=>{let s=t.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...o},this.origUpdate=e.controls.update,this.origWalls=e.updateWalls,this.origFov=e.camera.fov,this.origNear=e.camera.near,e.controls.update=()=>this.apply(),e.updateWalls=()=>{for(let s of e.floors)s.mask.standing.value=65535,s.mask.glass.value=0},e.camera.fov=72,e.camera.near=.05,e.camera.updateProjectionMatrix(),e.labels.style.visibility="hidden",this.bind(),this.reportRoom(),e.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[e,t,n,r]of this.listeners)e.removeEventListener(t,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(e,t){this.map=e,this.path=[];let n=t??(()=>{let r=e.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let e=this.v.floorMap.get(this.map.floor.id);return(e?e.floor.elevation+e.y:this.map.floor.elevation)+pn(this.map.floor,this.state.x,this.state.z)+ed}apply(){let{x:e,z:t,yaw:n,pitch:r}=this.state,o=this.floorY(),s=Math.cos(r);return this.v.camera.position.set(e,o,t),this.v.camera.lookAt(e+Math.cos(n)*s,o+Math.sin(r),t+Math.sin(n)*s),this.v.controls.view.target.set(e,o-ed,t),!1}goTo(e){let t=this.map.path([this.state.x,this.state.z],this.map.freeNear(e));return t?(this.path=t,this.kick(),!0):!1}goToRoom(e){return this.goTo(Vi(e.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(e=>this.tick(e))),this.v.invalidate()}tick(e){this.raf=0;let t=Math.min(.05,(e-this.last)/1e3);this.last=e;let n=!1,r=this.state,o=0,s=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(o+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(o-=1),this.keys.has("a")&&(s-=1),this.keys.has("d")&&(s+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(o+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*t,n=!0),o||s){this.path=[],this.turnTo=null;let l=1.5*t,c=(Math.cos(r.yaw)*o-Math.sin(r.yaw)*s)*l,u=(Math.sin(r.yaw)*o+Math.cos(r.yaw)*s)*l;this.move(c,u),n=!0}else if(this.path.length){let[l,c]=this.path[0],u=l-r.x,h=c-r.z,d=Math.hypot(u,h),f=1.4*t;d<=f?(r.x=l,r.z=c,this.path.shift()):(r.x+=u/d*f,r.z+=h/d*f,this.turnTo=Math.atan2(h,u)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,t*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(e,t){let n=this.state,r=[n.x+e,n.z+t];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+e,n.z])?this.map.blocked([n.x,n.z+t])||(n.z+=t):n.x+=e}reportRoom(){let e=this.map.roomAt([this.state.x,this.state.z]),t=e?.id??null;t!==this.roomId&&(this.roomId=t,this.onRoom(e))}setStick(e){this.stick=e,this.kick()}floorPoint(e,t){let n=this.surface.getBoundingClientRect(),r=(e-n.left)/n.width*2-1,o=1-(t-n.top)/n.height*2,{yaw:s,pitch:a,x:l,z:c}=this.state,u=this.v.camera.fov*Math.PI/180,h=Math.tan(u/2),d=n.width/n.height,f=Math.cos(a),p=[Math.cos(s)*f,Math.sin(a),Math.sin(s)*f],g=[-Math.sin(s),0,Math.cos(s)],m=[p[1]*g[2]-p[2]*g[1],p[2]*g[0]-p[0]*g[2],p[0]*g[1]-p[1]*g[0]],_=[-m[0],-m[1],-m[2]],x=[p[0]+g[0]*r*h*d+_[0]*o*h,p[1]+g[1]*r*h*d+_[1]*o*h,p[2]+g[2]*r*h*d+_[2]*o*h];if(x[1]>=-.02)return null;let w=ed/-x[1];return[l+x[0]*w,c+x[2]*w]}bind(){let e=(s,a,l,c)=>{s.addEventListener(a,l,c),this.listeners.push([s,a,l,!!c?.capture])},t=null;e(this.surface,"pointerdown",s=>{t||(t={x:s.clientX,y:s.clientY,moved:!1,id:s.pointerId},this.surface.setPointerCapture?.(s.pointerId))}),e(this.surface,"pointermove",s=>{if(!t||s.pointerId!==t.id)return;let a=s.clientX-t.x,l=s.clientY-t.y;if(!t.moved&&Math.hypot(a,l)<5)return;t.moved=!0,t.x=s.clientX,t.y=s.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=s=>{if(!t||s.pointerId!==t.id)return;let a=!t.moved;if(t=null,a){let l=this.floorPoint(s.clientX,s.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};e(this.surface,"pointerup",n),e(this.surface,"pointercancel",()=>t=null),e(this.surface,"wheel",s=>{s.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-s.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=s=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s.key.toLowerCase()),o=s=>!!s.composedPath()[0]?.closest?.("input, textarea, select");e(window,"keydown",s=>{!r(s)||o(s)||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),s.stopImmediatePropagation(),this.keys.add(s.key.toLowerCase()),this.kick())},{capture:!0}),e(window,"keyup",s=>{r(s)&&(this.keys.delete(s.key.toLowerCase()),s.stopImmediatePropagation())},{capture:!0}),e(window,"blur",()=>this.keys.clear())}};function Ws(i){return!i||i.state==="unavailable"||i.state==="unknown"}function y0(i,e){if(!i||!e||!/^#[0-9a-f]{6}$/i.test(e))return i;let t=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),n=a=>{let l=Math.max(...a),c=Math.min(...a),u=l-c;return l<=0||u/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/u+6)%6:l===a[1]?(a[2]-a[0])/u+2:(a[0]-a[1])/u+4)*60,u/l]},[r]=n(t),[o]=n(i.color);if(r<0||o<0)return r<0&&o<0?i:null;let s=Math.abs(r-o);return Math.min(s,360-s)<=30?i:null}function id(i,e){if(!i||i.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:i.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,r=t.rgb_color,o;return r&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?o=[r[0]/255,r[1]/255,r[2]/255]:typeof t.color_temp_kelvin=="number"?o=xM(t.color_temp_kelvin):o=[1,.71,.28],{color:o,level:n}}function xM(i){let e=Math.min(1,Math.max(0,(i-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}var yM=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Fc(i){if(!i||Ws(i))return null;let e=i.attributes.window_state;for(let t of[typeof e=="string"?e:null,i.state]){if(!t)continue;let n=yM.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}var wM=.5;function w0(i,e,t="window"){let n=m=>!!m&&i.states[m]?.state==="on",r=m=>!!m&&!!i.states[m]&&!Ws(i.states[m]),o=m=>m?Fc(i.states[m]):null,s=m=>{let _=o(m);return e.contactInvert&&m&&m!==e.tilt&&m!==e.tilt2&&_!=="tilted"&&_?_==="open"?"closed":"open":_},a=n(e.tilt2)||s(e.tilt2)==="tilted"||s(e.contact2)==="tilted",l=s(e.contact2)==="open"&&!a?1:0,c=n(e.tilt)||s(e.tilt)==="tilted"||s(e.contact)==="tilted",u=c?1:0,h=e.tiltAngle?Number(i.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(h)){let m=(h-(e.tiltOffset??0))*(e.tiltInvert?-1:1);u=Math.min(1,Math.max(0,m/(e.tiltMax||15))),u<.08&&(u=0),c=u>0}let d=s(e.contact)==="open"&&!c?1:0,f=null,p=e.cover?i.states[e.cover]:void 0,g=MM(i,e.position);if(g!==null)f=e.positionInverted?g:1-g;else if(p&&!Ws(p)){let m=p.attributes.current_position;typeof m=="number"?f=1-Math.min(100,Math.max(0,m))/100:f=p.state==="closed"?1:p.state==="opening"||p.state==="closing"?.5:0}else e.cover&&(f=0);if(t==="door"){let m=s(e.contact);return{open:m===null?e.shut?0:wM:m==="closed"?0:1,open2:s(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:f,sensed:m!==null||f!==null}}if(t==="garage"){let m=s(e.contact),_=f!==null||m!==null;return f===null&&(f=m===null||m==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:f,sensed:_}}return{open:d,open2:l,tilt:u,tilt2:a?1:0,cover:f,sensed:r(e.contact)||r(e.tilt)||Number.isFinite(h)}}function MM(i,e){let t=e?i.states[e]:void 0;if(!t||Ws(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function M0(i,e){return!i||e==null||e===1?i:{...i,level:Math.max(.02,Math.min(1.5,i.level*e))}}function Dc(i,e,t){let n=t?e.states[t]:void 0,r=t===i.entity&&i.color_entity&&i.color_entity!=="none"?e.states[i.color_entity]:void 0;return n?M0(y0(id(n,r),i.only_color),i.glow_scale):null}function Xn(i){return!!i&&!["unknown","unavailable",""].includes(i.state.toLowerCase())}function Qi(i,e){let t=e?Object.prototype.hasOwnProperty.call(i.bindings??{},e)?i.bindings?.[e]:e==="status"?i.status??i.entity:e==="power"?i.power:e==="door_left"?i.door_left:e==="door_right"?i.door_right:null:i.status??i.entity;return t&&t!=="none"?t:null}function rd(i,e){if(!Number.isFinite(i))return null;try{let t=new Intl.DateTimeFormat("en-GB",{timeZone:e??"UTC",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(i),n=Number(t.find(o=>o.type==="hour")?.value),r=Number(t.find(o=>o.type==="minute")?.value);return Number.isFinite(n+r)?{hour:n,minute:r,text:`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`}:null}catch{return null}}function S0(i,e,t,n){if(i.kind==="digital"||i.kind==="analog")return rd(n.time,t.config?.time_zone)?.text??"--:--";let r=Qi(e,i.binding),o=r?t.states[r]:void 0;if(!Xn(o))return"--:--";let s=o.state,a=String(o.attributes.unit_of_measurement??"");if(i.kind==="duration"){let l={s:1,min:60,h:3600}[i.unit??a],c=s.trim()?Number(s):NaN;if(!l||!Number.isFinite(c)||c<0)return"--:--";let u=Math.round(c*l/60);return`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`}return`${s}${a?` ${a}`:""}`}function od(i,e,t){let n=Qi(e,i.status?.binding),r=n?t.states[n]:void 0;if(!i.status||!Xn(r))return{color:i.color,visible:i.visible!==!1};let o=(s,a)=>s&&Object.prototype.hasOwnProperty.call(s,a)?s[a]:void 0;return{color:o(o(e.status_colors,i.id),r.state)??o(i.status.colors,r.state)??i.color,visible:o(i.status.visibility,r.state)??i.visible!==!1}}function sd(i,e,t){let n=e.motion_config?.[i.id],r=i.binding?Qi(e,i.binding):["fan","washer","dryer"].includes(i.kind)?Qi(e):null,o=i.tilt_binding?Qi(e,i.tilt_binding):null,s=i.motor_binding?Qi(e,i.motor_binding):null,a=i.tilt_angle_binding?Qi(e,i.tilt_angle_binding):null,l=r?t.states[r]:void 0;if(["fan","washer","dryer"].includes(i.kind)){let x=Xn(l)&&["on","running","active","washing","drying","heating","cooling"].includes(l.state.toLowerCase());return{open:0,tilt:0,known:Xn(l),running:x}}let c=Xn(l)&&Fc(l)!==null,u=o?t.states[o]:void 0,h=Fc(l)===(n?.contact_invert?"open":"closed"),d=h&&Xn(u)&&["on","open","tilted"].includes(u.state),f=w0(t,{contact:r,tilt:o,tiltAngle:a,cover:null,contactInvert:n?.contact_invert,tiltMax:n?.tilt_max,tiltInvert:n?.tilt_invert},i.kind==="window"?"window":"door"),p=s?t.states[s]:void 0,g=p?.attributes.current_position;if(Xn(p)&&typeof g=="number"&&Number.isFinite(g))return{open:Math.min(1,Math.max(0,g/100)),tilt:f.tilt,known:!d&&!(c&&h&&g>1),running:!1};if(Xn(p)&&["open","opening","closed","closing"].includes(p.state))return{open:["open","opening"].includes(p.state)?1:0,tilt:f.tilt,known:!d,running:!1};let m=a?t.states[a]:void 0,_=Xn(u)&&["on","tilted"].includes(u.state)||Xn(m)&&Number.isFinite(Number(m.state))&&f.tilt>0;return{open:f.open,tilt:f.tilt,known:!d&&(!!c||!!_)&&(!o||Xn(u)),running:!1}}function T0(i,e,t,n){if(!n.historical||!n.history)return null;let r=[i.binding,i.tilt_binding,i.motor_binding,i.tilt_angle_binding].filter(c=>!!c).map(c=>Qi(e,c)).filter(c=>!!c),o=n.history(r,n.time-7*864e5,n.time),s=r.flatMap(c=>(o[c]??[]).filter(u=>u.lu*1e3<=n.time).map(u=>({id:c,row:u}))).sort((c,u)=>c.row.lu-u.row.lu),a={},l=null;for(let{id:c,row:u}of s){a[c]={entity_id:c,state:u.s,attributes:{}};let h=sd(i,e,{...t,states:a});h.known&&(l=h)}return l}var wo=class{states=new Map;last=null;begin(e){this.last&&(this.last.historical!==e.historical||e.historical&&(e.time<this.last.time||e.seek!==this.last.seek))&&this.states.clear(),this.last={...e}}resolve(e,t){return t.known?(this.states.set(e,t),t):{...this.states.get(e)??{open:0,tilt:0,running:!1,known:!1},known:!1,running:!1}}};var A0={body:1516088,fabric:1713732,cushion:2373217,wood:1647420,white:1911110,metal:2767456,dark:725279,glass:1849938,plant:1191982,pot:1910336,accent:2854835},E0=i=>i.startsWith("#")?parseInt(i.slice(1),16):A0[i]??A0.body;function SM(i,e){let t=document.createElement("canvas");t.width=512,t.height=256;let n=new zn(t),r=new Oe(new Bn(i,e),new nt({map:n,transparent:!0,side:lt,depthWrite:!1}));return r.renderOrder=7,{mesh:r,texture:n}}var Nc=class{group=new Rt;items=[];memory=new wo;hass=null;moment={time:NaN,historical:!1,playing:!0,seek:0};global=!0;timer;initial=!0;seconds=0;plane=new bn(new U(0,-1,0),0);clipped=!1;material;invalidate;constructor(e,t,n,r){this.material=t.clone(),this.material.onBeforeCompile=t.onBeforeCompile,this.material.customProgramCacheKey=t.customProgramCacheKey,this.invalidate=n,r&&(this.memory=r);for(let o of e.furniture){let s=_r(o);if(!s)continue;let a=new Set([...s.motions??[],...s.spots??[]].flatMap(f=>f.parts)),l=s.parts.filter(f=>f.status||f.id&&a.has(f.id));if(!l.length&&!s.displays?.length)continue;let c=new Rt;c.position.set(o.x,Pt(e,o)+o.h/2,o.z),c.rotation.set((o.rotation_x??0)*Math.PI/180,-o.rotation*Math.PI/180,(o.rotation_z??0)*Math.PI/180,"YZX"),c.scale.x=o.mirror?-1:1,this.group.add(c);let u=l.map(f=>{let p=Vm({...s,parts:[f]},o);p.translate(0,-o.h/2,0);let g=new Oe(p,f.status?new nt({vertexColors:!0,side:lt}):this.material);return c.add(g),g.userData.furnitureId=o.id,{part:f,mesh:g,key:"",baseColors:Float32Array.from(p.getAttribute("color").array)}}),h=(s.motions??[]).map(f=>{let p=new Rt,[g,m,_]=f.pivot;p.position.set(g*o.w,(m-.5)*o.h,_*o.d),c.add(p);for(let x of u.filter(w=>w.part.id&&f.parts.includes(w.part.id)))x.mesh.position.copy(p.position).negate(),p.add(x.mesh);return{definition:f,group:p,state:{open:0,tilt:0,known:!1,running:!1},shown:0,tilt:0}});for(let f of s.spots??[]){let p=new Rt,g=f.pivot??f.position;p.position.set(g[0]*o.w,(g[1]-.5)*o.h,g[2]*o.d);let m=o.spot_config?.[f.id];p.rotation.set((m?.rotation_x??0)*Math.PI/180,-(m?.rotation_y??0)*Math.PI/180,(m?.rotation_z??0)*Math.PI/180,"YZX"),c.add(p);for(let _ of u.filter(x=>x.part.id&&f.parts.includes(x.part.id)))_.mesh.position.copy(p.position).negate(),p.add(_.mesh)}let d=(s.displays??[]).map(f=>{let p=SM(f.size[0]*o.w,f.size[1]*o.h),[g,m,_]=f.position;p.mesh.userData.furnitureId=o.id,f.kind==="analog"&&(p.texture.image.height=512),p.mesh.position.set(g*o.w,(m-.5)*o.h,_*o.d),p.mesh.rotation.set(...(f.rotation??[0,0,0]).map(w=>w*Math.PI/180),"YZX");let x=h.find(w=>w.definition.id===f.parent)?.group;return x?(p.mesh.position.sub(x.position),x.add(p.mesh)):c.add(p.mesh),{...p,field:f,key:""}});this.items.push({f:o,group:c,parts:u,motions:h,displays:d})}}meshes(){return this.items.flatMap(e=>[...e.parts.map(t=>t.mesh),...e.displays.map(t=>t.mesh)]).filter(e=>e.visible)}clip(e,t,n){let r=e!==null;this.plane.constant=t+(e??0),this.material.opacity=n;for(let o of this.items.flatMap(s=>[...s.parts.map(a=>a.mesh),...s.displays.map(a=>a.mesh)])){let s=o.material;s.opacity=n,s.transparent=!0,r!==this.clipped&&(s.clippingPlanes=r?[this.plane]:null,s.needsUpdate=!0)}this.clipped=r}update(e,t,n){let r=this.initial||t.historical&&(t.seek!==this.moment.seek||!this.moment.historical);this.initial=!1,this.hass=e,this.moment={...t},this.global=n,this.memory.begin(t);for(let o of this.items){for(let s of o.parts){let a=od(s.part,o.f,e),l=JSON.stringify(a);if(s.mesh.visible=a.visible,s.key!==l||s.part.glow||o.motions.some(c=>c.definition.parts.includes(s.part.id??"")&&c.state.running)){s.key=l;let c=new Q(E0(a.color)),u=s.mesh.geometry.getAttribute("color");if(a.color===s.part.color)u.array.set(s.baseColors);else for(let h=0;h<u.count;h++)u.setXYZ(h,c.r,c.g,c.b);u.needsUpdate=!0}}for(let s of o.motions){let a=o.f.id+":"+s.definition.id,l=sd(s.definition,o.f,e);if(!l.known&&t.historical&&r){let c=T0(s.definition,o.f,e,t);c&&this.memory.resolve(a,c)}s.state=this.memory.resolve(a,l),(r||!n||o.f.animations===!1)&&(s.shown=s.state.open,s.tilt=s.state.tilt,this.pose(s,o.f))}for(let s of _r(o.f)?.spots??[]){let a=o.f.spot_config?.[s.id]?.entity??(s.binding?o.f.bindings?.[s.binding]:null)??o.f.entity,l=Dc(o.f,e,a);if(l)for(let c of o.parts.filter(u=>u.part.glow&&s.parts.includes(u.part.id??""))){let u=c.mesh.geometry.getAttribute("color"),h=new Q(...l.color.map(d=>Math.min(1,d*(.55+.45*l.level))));for(let d=0;d<u.count;d++)u.setXYZ(d,h.r,h.g,h.b);u.needsUpdate=!0}}this.drawDisplays(o)}this.scheduleClock(),this.invalidate()}drawDisplays(e){if(this.hass)for(let t of e.displays){let n=S0(t.field,e.f,this.hass,this.moment);if(n===t.key)continue;t.key=n;let r=t.texture.image,o=r.getContext("2d");if(o.clearRect(0,0,512,r.height),(t.field.kind!=="analog"||t.field.background)&&(o.fillStyle=t.field.background??"#101827",o.fillRect(0,0,512,r.height)),o.fillStyle=t.field.color??"#ffffff",t.field.kind==="analog"){let s=rd(this.moment.time,this.hass.config?.time_zone)??{hour:10,minute:10},a=(l,c,u)=>{o.save(),o.translate(256,256),o.rotate(l),o.strokeStyle=t.field.color??"#ffffff",o.lineWidth=u,o.beginPath(),o.moveTo(0,10),o.lineTo(0,-c),o.stroke(),o.restore()};a((s.hour%12+s.minute/60)*Math.PI/6,144,9),a(s.minute*Math.PI/30,204,5)}else{o.textAlign="center",o.textBaseline="middle",o.font="bold 100px sans-serif";let s=o.measureText(n).width;s>480&&(o.font=`bold ${Math.max(20,Math.floor(100*480/s))}px sans-serif`),o.fillText(n,256,128)}t.texture.needsUpdate=!0}}scheduleClock(){this.timer&&(clearTimeout(this.timer),this.timer=void 0),!(this.moment.historical||!this.items.some(e=>e.displays.some(t=>["analog","digital"].includes(t.field.kind))))&&(this.timer=setTimeout(()=>{this.timer=void 0,this.moment.time=Date.now();for(let e of this.items)this.drawDisplays(e);this.invalidate(),this.scheduleClock()},6e4-Date.now()%6e4+10))}pose(e,t){let n=e.definition.kind,r=t.motion_config?.[e.definition.id],o=r?.direction??e.definition.direction??1;if(n==="slide"){let a=e.definition.axis??"x",l=a==="x"?0:a==="y"?1:2,c=a==="x"?t.w:a==="y"?t.h:t.d;e.group.position[a]=e.definition.pivot[l]*c-(a==="y"?t.h/2:0)+(r?.travel_m??(e.definition.travel??1)*c)*e.shown*o;return}let s=r?.angle??e.definition.angle;if(e.group.rotation[e.definition.axis??"y"]=-(s==null?n==="window"?1.2:1.5:s*Math.PI/180)*e.shown*o,n==="window"){let a=r?.tilt_angle??e.definition.tilt_angle;e.group.rotation.x=-(a==null?.2:a*Math.PI/180)*e.tilt}}step(e){this.seconds+=e/1e3;let t=!1;for(let n of this.items)for(let r of n.motions){let o=this.global&&n.f.animations!==!1;if(["fan","washer","dryer"].includes(r.definition.kind)){if(!o||!r.state.running||this.moment.historical&&!this.moment.playing)continue;if(r.definition.kind==="fan")r.group.rotation[r.definition.axis??"z"]+=e*.008;else{let c=.75+.08*Math.sin(this.seconds);for(let u of n.parts.filter(h=>h.part.id&&r.definition.parts.includes(h.part.id))){let h=this.hass?od(u.part,n.f,this.hass):null,d=h&&u.part.status?new Q(E0(h.color)).multiplyScalar(c):new Q(.3*c,.85*c,c),f=u.mesh.geometry.getAttribute("color");for(let p=0;p<f.count;p++)f.setXYZ(p,d.r,d.g,d.b);f.needsUpdate=!0}}t=!0;continue}if(!o){this.pose(r,n.f);continue}let s=1-Math.exp(-e/160),a=r.state.open-r.shown,l=r.state.tilt-r.tilt;Math.abs(a)<.003&&Math.abs(l)<.003?(r.shown=r.state.open,r.tilt=r.state.tilt):(r.shown+=a*s,r.tilt+=l*s,t=!0),this.pose(r,n.f)}return t}dispose(){this.timer&&clearTimeout(this.timer);for(let e of this.items){for(let t of e.parts)t.mesh.geometry.dispose(),t.mesh.material!==this.material&&t.mesh.material.dispose();for(let t of e.displays)t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.texture.dispose()}this.group.removeFromParent(),this.items=[],this.material.dispose()}};function R0(i,e,t){let n=yt(i.type),r=Pt(e,i);return(n?.spots??[]).flatMap(o=>{let s=i.spot_config?.[o.id],a=s?.entity??(o.binding?i.bindings?.[o.binding]:null)??i.entity,l=a?t.states[a]:void 0;if(!l||l.state!=="on")return[];let c=Dc(i,t,a);if(!c)return[];let u=o.pivot??o.position,h=new U(o.position[0]*i.w,o.position[1]*i.h,o.position[2]*i.d),d=new U(u[0]*i.w,u[1]*i.h,u[2]*i.d),f=new Nn((s?.rotation_x??0)*Math.PI/180,-(s?.rotation_y??0)*Math.PI/180,(s?.rotation_z??0)*Math.PI/180,"YZX"),p=new U(...o.direction).applyEuler(f).normalize();h.sub(d).applyEuler(f).add(d),h.y-=i.h/2,i.mirror&&(h.x*=-1,p.x*=-1);let g=new Nn((i.rotation_x??0)*Math.PI/180,-i.rotation*Math.PI/180,(i.rotation_z??0)*Math.PI/180,"YZX");h.applyEuler(g).add(new U(i.x,r+i.h/2,i.z)),p.applyEuler(g).normalize();let m=e.rooms.findIndex(_=>Ge([i.x,i.z],_.points));return[{x:h.x,y:h.y,z:h.z,direction:p.toArray(),angle:s?.beam_angle??i.beam_angle??o.angle??60,color:c.color,level:c.level,kind:"spot",room:m<0?e.rooms.length:m}]})}function TM(i,e,t,n){let r=5;e.y<-.001&&(r=Math.min(r,Math.max(.01,(i.y-pn(t,i.x,i.z)-.02)/-e.y)));for(let o of n){let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=e.x*a-e.z*s;if(Math.abs(l)<1e-8)continue;let c=o.a[0]-i.x,u=o.a[1]-i.z,h=(c*a-u*s)/l,d=(c*e.z-u*e.x)/l,f=i.y+h*e.y;if(h<=.01||h>=r||d<0||d>1||f<0||f>o.h)continue;let p=d*Math.hypot(s,a);o.gaps.some(g=>p>=g.s0&&p<=g.s1&&f>=g.y0&&f<=g.y1)||(r=h)}return r}function P0(i,e,t,n){if(!e.direction)return;let r=new U(e.x,e.y,e.z),o=new U(...e.direction).normalize(),s=Math.abs(o.y)<.95?new U(0,1,0):new U(1,0,0),a=new U().crossVectors(o,s).normalize(),l=new U().crossVectors(o,a).normalize(),c=(e.angle??60)*Math.PI/360,u=new Q(...e.color.map(f=>f*.09*e.level)),h=new Q(0,0,0),d=f=>{let p=f*Math.PI/8,g=o.clone().multiplyScalar(Math.cos(c)).addScaledVector(a,Math.cos(p)*Math.sin(c)).addScaledVector(l,Math.sin(p)*Math.sin(c)).normalize();return r.clone().addScaledVector(g,TM(r,g,t,n)).toArray()};for(let f=0;f<16;f++)i.tri(r.toArray(),d(f),d(f+1),u,h,h)}function AM(i,e){let t=yt(e);if(!t)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:e,x:i.x,z:i.z,rotation:i.rotation,rotation_x:i.rotation_x,rotation_z:i.rotation_z,mount_y:i.mount_y,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}function ud(i,e){if(!i.furniture.some(n=>n.type==="parking"&&e.has(n.id)))return i;let t=i.furniture.flatMap(n=>{let r=n.type==="parking"?e.get(n.id):void 0,o=r?AM(n,r):null;return o?[n,o]:[n]});return{...i,furniture:t}}function hd(i,e){let t=[],n=[],r=[],o=[],s=[],a=[],l=[];for(let{face:u,field:h}of i){let d=t.length/3,f=h.portrait===!1?10:6,p=h.portrait===!1?6:10,g=EM(h.id)%1e3/1e3;for(let _ of Ds(u,h)){let[x,w,b,y]=_.corners.map(v=>[v[0]+u.n[0]*.006,v[1]+u.n[1]*.006-e,v[2]+u.n[2]*.006]),M=Tc(x,w,b,u.n),E=[[x,0,0],[w,1,0],[b,1,1],[y,0,1]];for(let v of[0,1,2,0,2,3]){let[S,T,A]=E[v];t.push(S[0],S[1],S[2]),n.push(T,A),r.push(f,p),o.push(g),a.push(...M),l.push(...x)}}let m=t.length/3-d;m&&s.push({id:h.id,start:d,count:m})}if(!t.length)return null;let c=new Xe;return c.setAttribute("position",new Ae(t,3)),c.setAttribute("uv",new Ae(n,2)),c.setAttribute("aCells",new Ae(r,2)),c.setAttribute("aPhase",new Ae(o,1)),c.setAttribute("aLevel",new Ae(new Float32Array(t.length/3),1)),{geometry:Ns(c,a,l),ranges:s}}function Xs(i,e){let t=i.geometry.getAttribute("aLevel"),n=t.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,e.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return t.needsUpdate=!0,r}function dd(i){let e=new nt({transparent:!0,blending:Lt,depthWrite:!1,side:lt});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},e.customProgramCacheKey=()=>"fp3d-solar-live",e}function EM(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619)>>>0;return e}var C0=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,RM=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  uniform float uSurface;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    // the surface of a pool with a basin is a faint shimmer, the light's pattern lies on the floor below
    float base = mix(0.32, 0.16, uSurface);
    float lines = mix(0.35 + 0.6 * uFlow, 0.18 + 0.3 * uFlow, uSurface);
    vec3 col = uColor * uLevel * (base + lines * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,PM=C0,kM=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function k0(i,e){let t=[];for(let[r,o,s]of mn(i))for(let a of[r,s,o])t.push(i[a][0],e,i[a][1]);let n=new Xe;return n.setAttribute("position",new Ae(t,3)),n}function I0(i,e){let t=new Rt;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new Oe(k0(n.points,s),new on({uniforms:{uTime:e,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:C0,fragmentShader:RM,transparent:!0,blending:Lt,depthWrite:!1,side:lt}));l.renderOrder=5,l.frustumCulled=!1,t.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(m=>m[0]),a=n.points.map(m=>m[1]),[l,c,u,h]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],d=c-l>=h-u,f=Math.min(1,n.cover),p=d?[[l-.1,u-.1],[l+(c-l)*f,u-.1],[l+(c-l)*f,h+.1],[l-.1,h+.1]]:[[l-.1,u-.1],[c+.1,u-.1],[c+.1,u+(h-u)*f],[l-.1,u+(h-u)*f]],g=bo(n.points,p);if(g.length>=3){let m=new Oe(k0(g,n.y+.03),new on({uniforms:{uAxis:{value:d?[1,0]:[0,1]}},vertexShader:PM,fragmentShader:kM,transparent:!0,side:lt}));m.renderOrder=6,t.add(m);let _=[];for(let w=0;w<g.length;w++){let b=g[w],y=g[(w+1)%g.length];_.push(b[0],n.y+.032,b[1],y[0],n.y+.032,y[1])}let x=new Xe;x.setAttribute("position",new Ae(_,3)),t.add(new Zt(x,new qt({color:5995775,transparent:!0,opacity:.6})))}}}return t}function L0(i){for(let e of i.children)e.geometry?.dispose(),e.material?.dispose?.();i.clear()}var F0=["neon","blueprint","day"];function D0(i){return F0.indexOf(i)}var Bc={value:new U(.22,.88,1)},Oc={value:0};function N0(i){let e=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!e)return null;let t=parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var CM=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces with a hint of their hue, dark blue lines
  if (line) return vec3(0.08, 0.17, 0.38) * clamp(mx * 1.4, 0.4, 1.0);
  vec3 g = vec3(clamp(0.66 + l * 2.6, 0.0, 0.96));
  return mix(g, g * (c / max(mx, 0.001)), 0.1);
}
`;function hn(i,e,t=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=e,o.uniforms.uAccent=Bc,o.uniforms.uAccentOn=Oc,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${CM}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${t?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${t?"l":"s"}`,i}function Mo(i){return i==="day"?Di:Lt}var Ks={open:0,open2:0,tilt:0,tilt2:0,cover:null},z0=2043986,B0=2769520,IM=2242399,fd=1845831,LM=1450554,_i=16758087,FM=1846349,DM=2572395,NM=1120816,zM=1845831,O0=5995775,U0=9085695,So=He(3662079,.08);function Uc(i,e,t,n,r,o,s,a,l,c,u){let h=(f,p,g)=>e(f,p,g),d=[[h(t,r,a),h(n,r,a),h(n,o,a),h(t,o,a),c],[h(t,r,s),h(n,r,s),h(n,o,s),h(t,o,s),He(l.getHex(),.6)],[h(t,o,s),h(n,o,s),h(n,o,a),h(t,o,a),l],[h(t,r,s),h(n,r,s),h(n,r,a),h(t,r,a),He(l.getHex(),.85)],[h(t,r,s),h(t,o,s),h(t,o,a),h(t,r,a),He(l.getHex(),.92)],[h(n,r,s),h(n,o,s),h(n,o,a),h(n,r,a),He(l.getHex(),.92)]];for(let[f,p,g,m,_]of d)i.tri(f,p,g,_,_,_,void 0,u),i.tri(f,g,m,_,_,_,void 0,u)}function ht(i,e,t,n,r,o,s,a,l,c,u,h){if(a<=u+1e-6)return Uc(i,e,t,n,r,o,s,a,l,c,qe);if(s>=u-1e-6)return Uc(i,e,t,n,r,o,s,a,l,c,h);Uc(i,e,t,n,r,o,s,u,l,c,qe),Uc(i,e,t,n,r,o,u,a,l,c,h)}function er(i,e,t,n,r,o,s,a,l,c,u=0){let h=(d,f,p)=>{let g=b=>u?(s-b)/u:.5,m=e(t,r,d),_=e(n,r,d),x=e(n,r,f),w=e(t,r,f);i.tri(m,_,x,a,a,a,[0,g(d),1,g(d),1,g(f)],p),i.tri(m,x,w,a,a,a,[0,g(d),1,g(f),0,g(f)],p)};s<=l+1e-6?h(o,s,qe):o>=l-1e-6?h(o,s,c):(h(o,l,qe),h(l,s,c))}function BM(i,e,t,n,r,o,s,a,l,c){let u=e(t,r,s),h=e(n,r,s),d=e(n,o,s),f=e(t,o,s),p=0,g=(o-r)/c;i.tri(u,h,d,a,a,a,[0,p,1,p,1,g],l),i.tri(u,d,f,a,a,a,[0,p,1,g,0,g],l)}function V0(i,e,t){let n=new rt,r=new rt,o=new rt(!0),s=new Q(z0),a=new Q(B0),l=[],c=[],u=[];for(let h of i){let d=n.count,f=r.count,p=o.count,g=e.get(h.opening.id)??Ks,m=h.width,{sill:_,top:x,bucket:w}=h,b=(v,S,T)=>[h.start[0]+h.axis[0]*v+h.toRoom[0]*S,T,h.start[1]+h.axis[1]*v+h.toRoom[1]*S],y=(h.faceRoom-h.faceOut)/2,M=h.opening.mark==="closed",E=h.opening.type==="door"&&br(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!E||h.opening.type==="garage"){let v=-h.faceOut-.012,S=h.faceRoom+.012,T=h.opening.type==="garage"&&(M?!!g.sensed&&(g.cover??1)>=.95:(g.cover??1)<.95),A=T?He(_i,.8):new Q(z0),C=T?He(_i,1):new Q(B0);ht(n,b,-.045,.02,v,S,0,x+.045,A,C,t,w),ht(n,b,m-.02,m+.045,v,S,0,x+.045,A,C,t,w),ht(n,b,.02,m-.02,v,S,x-.02,x+.045,A,C,t,w)}if(h.opening.type==="door"){let v=br(h.opening,h.exterior),S=Zp(v),T=h.opening.swing==="out"?-1:1,A=T>0?h.faceRoom:-h.faceOut,C=h.opening.leaves===2,P=.02,R=m-.02,I=qp(m,v,h.hingeAtStart,h.opening);if(I){for(let[N,O]of I.panels)ht(n,b,N,N+.04,y-.03,y+.03,.02,x-.02,s,a,t,w),ht(n,b,O-.04,O,y-.03,y+.03,.02,x-.02,s,a,t,w),ht(n,b,N,O,y-.03,y+.03,.02,.1,s,a,t,w),er(r,b,N+.04,O-.04,y,.1,x-.02,So,t,w);P=I.x0,R=I.x1}let F=C?(R-P)/2-.004:R-P,z=S?.06:.04;S&&(ht(n,b,.02,m-.02,-h.faceOut-.02,h.faceRoom,0,.02,new Q(fd),a,t,w),h.exterior&&ht(n,b,m/2-.08,m/2+.08,-h.faceOut-.1,-h.faceOut,x+.1,x+.17,He(_i,.55),He(_i,.85),t,qe));let B=E?[]:[[h.hingeAtStart,g.open]];C&&!E&&B.push([!h.hingeAtStart,g.open2??0]);for(let[N,O]of B){let G=Math.min(1,Math.max(0,O)),J=v==="sliding"?0:G*1.5,j=v==="sliding"?G*F:0,ue=(Ue,De,Fe)=>{let Ze=Ue*Math.cos(J)-De*Math.sin(J)-j,Ke=A+T*(De*Math.cos(J)+Ue*Math.sin(J)+(j?.05:0));return b(N?P+Ze:R-Ze,Ke,Fe)},ne=G>.05?qe:w,de=M?!!g.sensed&&G<.05:G>.9,H=de?He(_i,.7):new Q(S?NM:FM),X=de?He(_i,.9):new Q(S?zM:DM);v==="glass"?(ht(n,ue,0,.05,-z,0,.01,x-.01,H,X,t,ne),ht(n,ue,F-.05,F,-z,0,.01,x-.01,H,X,t,ne),ht(n,ue,.05,F-.05,-z,0,.01,.12,H,X,t,ne),ht(n,ue,.05,F-.05,-z,0,x-.08,x-.01,H,X,t,ne),er(r,ue,.05,F-.05,-z/2,.12,x-.08,So,t,ne)):ht(n,ue,0,F,-z,0,.01,x-.01,H,X,t,ne),v==="front_glass"?er(r,ue,.12,F-.12,.001,x*.55,x-.18,So,t,ne):S&&er(r,ue,.1,.18,.001,.3,x-.3,So,t,ne);let oe=Math.min(1.05,x*.5),ce=S?.3:.012,le=S?F-.11:F-.16,pe=S?F-.08:F-.05;ht(n,ue,le,pe,.004,.05,oe-ce,oe+ce,new Q(O0),new Q(U0),t,ne),ht(n,ue,le,pe,-z-.05,-z-.004,oe-ce,oe+ce,new Q(O0),new Q(U0),t,ne)}}else if(h.opening.type==="garage"){let v=Math.min(1,Math.max(0,g.cover??1)),S=new Q(13951231),T=h.faceRoom-.03,A=x*(1-v);v>.01&&er(o,b,.02,m-.02,T,A,x,S,t,w,.5);let C=(1-v)*x;C>.01&&BM(o,b,.02,m-.02,T,T+C,x+.03,S,w,.5)}else if(br(h.opening,h.exterior)==="glass_wall"){ht(n,b,0,.04,y-.025,y+.025,_,x,s,a,t,w),ht(n,b,m-.04,m,y-.025,y+.025,_,x,s,a,t,w),ht(n,b,.04,m-.04,y-.025,y+.025,_,_+.03,s,a,t,w),ht(n,b,.04,m-.04,y-.025,y+.025,x-.04,x,s,a,t,w);let T=Math.max(1,Math.round((m-2*.04)/.9)),A=(m-2*.04)/T;for(let C=1;C<T;C++){let P=.04+C*A;ht(n,b,P-.02,P+.02,y-.025,y+.025,_+.03,x-.04,s,a,t,w)}for(let C=0;C<T;C++){let P=.04+C*A+(C?.02:0),R=.04+(C+1)*A-(C<T-1?.02:0);er(r,b,P,R,y,_+.03,x-.04,So,t,w)}}else{ht(n,b,0,.06,y-.035,y+.035,_,x,s,a,t,w),ht(n,b,m-.06,m,y-.035,y+.035,_,x,s,a,t,w),ht(n,b,.06,m-.06,y-.035,y+.035,_,_+(_>.05?.06:.03),s,a,t,w),ht(n,b,.06,m-.06,y-.035,y+.035,x-.06,x,s,a,t,w),_>.3&&(ht(n,b,-.04,m+.04,y+.035,h.faceRoom+.07,_-.03,_,new Q(fd),a,t,w),h.exterior&&ht(n,b,-.03,m+.03,-h.faceOut-.06,y-.035,_-.04,_-.02,new Q(fd),a,t,w));let T=.055,A=_+(_>.05?.06:.03),C=x-.06,P=y+.035,R=y+.035+.06,F=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:m/2,x1:h.hingeAtStart?m/2:m-.06,open:g.open,tilt:g.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?m/2:.06,x1:h.hingeAtStart?m-.06:m/2,open:g.open2??0,tilt:g.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:m-.06,open:g.open,tilt:g.tilt}];for(let z of F){let B=z.open>.02||z.tilt>.02,N=M?!!g.sensed&&!B:B,O=N?He(_i,.75):new Q(IM),G=N?He(_i,.95):a,J=z.x0,j=z.x1,ue=j-J,ne=z.open*1.2*(h.opening.swing==="out"?-1:1),de=z.tilt*.2,H=(oe,ce,le)=>{let pe=le-A,Ue=ce+pe*Math.sin(de),De=A+pe*Math.cos(de),Fe=oe*Math.cos(ne)-(Ue-P)*Math.sin(ne);Ue=P+(Ue-P)*Math.cos(ne)+oe*Math.sin(ne);let Ze=z.atStart?J+Fe:j-Fe;return b(Ze,Ue,De)},X=Math.abs(ne)>.05?qe:w;if(ht(n,H,0,T,P,R,A,C,O,G,t,X),ht(n,H,ue-T,ue,P,R,A,C,O,G,t,X),ht(n,H,T,ue-T,P,R,A,A+T,O,G,t,X),ht(n,H,T,ue-T,P,R,C-T,C,O,G,t,X),er(r,H,T,ue-T,(P+R)/2,A+T,C-T,N?He(_i,.16):So,t,X),br(h.opening,h.exterior)==="bars"){let oe=(A+C)/2,ce=(P+R)/2;ht(n,H,T,ue-T,ce-.012,ce+.012,oe-.012,oe+.012,O,G,t,X),ht(n,H,ue/2-.012,ue/2+.012,ce-.012,ce+.012,A+T,C-T,O,G,t,X)}}}if(g.cover!==null){let v=-h.faceOut,S=x+.2;ht(n,b,-.05,m+.05,v-.15,v,x,S,new Q(LM),a,t,w);let T=Math.min(1,Math.max(0,g.cover));if(T>.01){let A=x-T*(x-_);er(o,b,0,m,v-.07,A,x,new Q(16777215),t,w,.045)}}l.push({id:h.opening.id,start:d,end:n.count}),c.push({id:h.opening.id,start:f,end:r.count}),u.push({id:h.opening.id,start:p,end:o.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:o.geometry(),frameTris:l,glassTris:c,blindTris:u}}var OM=.3,G0=2.6;function H0(i,e=.32,t=.22,n=[]){let r=i.map(y=>y[0]),o=i.map(y=>y[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),u=c-l>=a-s,h=t*.7071,d=y=>{let M=[y,[y[0]+t,y[1]],[y[0]-t,y[1]],[y[0],y[1]+t],[y[0],y[1]-t]],E=[...M,[y[0]+h,y[1]+h],[y[0]-h,y[1]+h],[y[0]+h,y[1]-h],[y[0]-h,y[1]-h]];return M.every(v=>Ge(v,i))&&!n.some(v=>E.some(S=>Ge(S,v)))},f=(y,M)=>d(u?[y,M]:[M,y]),p=(y,M)=>{let E=Math.ceil(Math.hypot(M[0]-y[0],M[1]-y[1])/.05);for(let v=1;v<E;v++)if(!d([y[0]+(M[0]-y[0])*v/E,y[1]+(M[1]-y[1])*v/E]))return!1;return!0},[g,m,_,x]=u?[s,a,l,c]:[l,c,s,a],w=[],b=!0;for(let y=g+t;y<=m-t+1e-6;y+=e){let M=null,E=null,v=.05;for(let C=_;C<=x+1e-6;C+=v)if(f(y,C)&&(E??=C),(!f(y,C)||C+v>x+1e-6)&&E!==null){let P=f(y,C)?C:C-v;(!M||P-E>M[1]-M[0])&&(M=[E,P]),E=null}if(!M||M[1]-M[0]<.2)continue;let S=C=>{let[P,R]=C?M:[M[1],M[0]];return[u?[y,P]:[P,y],u?[y,R]:[R,y]]},T=S(b),A=w[w.length-1];if(A&&n.length&&!p(A,T[0])){let C=S(!b);if(!p(A,C[0]))continue;T=C,b=!b}w.push(T[0],T[1]),b=!b}return w}function md(i,e=.7,t=12){return Array.from({length:t},(n,r)=>{let o=r/t*Math.PI*2;return[i[0]+Math.cos(o)*e,i[1]+Math.sin(o)*e]})}var pd=i=>Math.atan2(Math.sin(i),Math.cos(i));function W0(i,e,t){let n=null;if(e.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(e.mode==="returning"||e.mode==="docked")n=e.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(e.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=pd(e.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),G0*t),!0)}let a=Math.atan2(r,o),l=pd(a-i.heading);if(i.heading=pd(i.heading+Math.sign(l)*Math.min(Math.abs(l),G0*t)),Math.abs(l)<.35){let c=Math.min(s,OM*t);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}var kn=null,X0=new Map;function Y0(i,e=0){let t=new rt,n=new Nt,r=yt(i.type);if(r?.light)yc(t,r,{x:0,z:0,rotation:e,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)gd(t,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:e,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:e,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};bc(t,n,new rt,o)}return{buf:t,lines:n}}function UM(i,e=180,t,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${e}|${n}`,o=X0.get(r);if(o)return o;t&&vs(t),kn??=new gr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),kn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),kn.setSize(e,e,!1),kn.setClearColor(0,0);let{buf:s,lines:a}=Y0(i),l=new Ei,c=new Oe(s.geometry(),new nt({vertexColors:!0,color:new Q(n,n,n)})),u=new Zt(a.geometry(),new qt({vertexColors:!0,color:new Q(n*1.8,n*1.8,n*1.8)}));l.add(c,u);let h=new cn().setFromObject(c),d=h.getCenter(new U),f=new jn(-1,1,1,-1,.01,100);f.position.copy(d).add(new U(.9,.75,1.3).normalize().multiplyScalar(20)),f.lookAt(d),f.updateMatrixWorld();let p=.05;for(let _ of[h.min.x,h.max.x])for(let x of[h.min.y,h.max.y])for(let w of[h.min.z,h.max.z]){let b=new U(_,x,w).applyMatrix4(f.matrixWorldInverse);p=Math.max(p,Math.abs(b.x),Math.abs(b.y))}let g=p*1.12;f.left=-g,f.right=g,f.top=g,f.bottom=-g,f.updateProjectionMatrix(),kn.render(l,f);let m=kn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose(),X0.set(r,m),m}function VM(i,e,t=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(e)}|${t}|${r}`,s=K0.get(o);if(s)return s;n&&vs(n);let{buf:a,lines:l}=Y0(i,e),c=new Oe(a.geometry(),new nt({vertexColors:!0,color:new Q(r,r,r)})),u=new Zt(l.geometry(),new qt({vertexColors:!0,color:new Q(r*1.8,r*1.8,r*1.8)})),h=new cn().setFromObject(c);if(h.isEmpty())return null;let d=h.min.x,f=h.max.x,p=Math.max(0,h.min.y),g=h.max.y,m=Math.max(1,Math.min(1024,Math.round((f-d)*t))),_=Math.max(1,Math.min(1024,Math.round((g-p)*t)));kn??=new gr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),kn.setPixelRatio(1),kn.setSize(m,_,!1),kn.setClearColor(0,0);let x=new Ei;x.add(c,u);let w=new jn(d,f,g,p,.01,100);w.position.set(0,0,50),w.lookAt(0,0,0),w.updateProjectionMatrix(),kn.render(x,w);let b=kn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose();let y={url:b,x0:d,x1:f,y0:p,y1:g};return K0.set(o,y),y}var K0=new Map;var e3={Group:Rt,Mesh:Oe,MeshBasicMaterial:nt,CanvasTexture:zn,Color:Q,PlaneGeometry:Bn,BufferGeometry:Xe,Float32BufferAttribute:Ae,DoubleSide:lt},Z0={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},GM=2.4,$0=1.4,HM=.22,J0=140,bd=32,WM=500,j0=33,Q0=.028,XM=.09,st=2767456,KM=1911110,YM=1,vd=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),Vc=450,eg=125,qM=.08,Hc={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},ZM=new Q(1714765);function $M(){let e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency||8;return e<=3||t<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var xd=class{host;options;renderer;scene=new Ei;camera=new tn(38,1,.1,400);controls;labels;root=new Rt;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;roofDirection={value:new U(0,1,1)};keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";productColors=!1;customLayers=new Map;customMemories=new Map;customContext=null;themeUniform={value:0};sun=null;weather=null;rain=new Zt(new Xe,new qt({color:10471679,transparent:!0,opacity:.4,blending:Lt,depthWrite:!1}));snow=new jr(new Xe,new ur({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Oe(new Wo(1,28),new nt({color:16767370,transparent:!0,opacity:0,blending:Lt,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(e,t={}){this.host=e,this.options=t,this.explode=t.explode??!0,this.renderer=this.makeRenderer(t.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",e.append(this.labels),this.patternTexture=jM(),this.blindTexture=eS(),this.haloTexture=nS(),this.ground=new Oe(new Bn(1,1),new nt({transparent:!1,blending:Lt,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(e)),this.resize()}get low(){return this.lowQuality}setParked(e){let t=[...e].map(([n,r])=>`${n}=${r}`).sort().join("|");t!==this.parkedSig&&(this.parkedSig=t,this.parked=e,this.building&&(this.rebuild(),this.invalidate()))}setStats(e){this.statsOn=e}setLabelInset(e){this.labelInset!==e&&(this.labelInset=e,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(e){this.orbitSpeed=e,this.orbitLast=0,this.invalidate()}setQuality(e){let t=this.renderer.domElement,n=this.makeRenderer(e);this.rebuildTier(),this.applyTierFlags(),t.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n,this.building&&this.rebuild();let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(e){vs(e),this.building&&(this.rebuild(),this.invalidate())}setProductColors(e){e!==this.productColors&&(this.productColors=e,Np(e),this.building&&this.rebuild(),this.invalidate())}setCustomPackState(e,t){this.customContext={hass:e,moment:t};for(let n of this.customLayers.values())n.update(e,t,this.building?.settings.pack_animations!==!1);for(let n of this.floors)this.buildGlow(n),this.buildHalos(n)}setBuilding(e){let t=this.building===null;this.building=e,this.rebuild(),t&&this.fit(0),this.invalidate()}setKeepView(e){this.keepView=e}setFloor(e,t=!0){this.keepNext=this.keepView&&e!==null&&this.floorId!==null&&e!==this.floorId,this.floorId=e,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!t),this.applyHighlight(),this.fit(t?700:0)}setFloorStack(e){e!==this.floorStack&&(this.floorStack=e,this.applyTargets(!1))}setKeepRoof(e){e!==this.keepRoof&&(this.keepRoof=e,this.invalidate())}setExplode(e){e!==this.explode&&(this.explode=e,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(e){if(this.roomId=e,this.labelsDirty=!0,this.applyHighlight(),!e){this.fit(700);return}let t=this.floors.find(u=>u.floor.rooms.some(h=>h.id===e)),n=t?.floor.rooms.find(u=>u.id===e);if(!t||!n)return;let r=n.start_view;if(r){let u=t.floor.elevation+t.ty,[h,d]=Vi(n.points),f=r.target??{x:h,y:.3,z:d};this.controls.flyTo({target:new U(f.x,f.y+u,f.z),radius:r.radius,phi:r.phi,theta:r.theta});return}let[o,s]=Vi(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new U(Math.max(...a)-Math.min(...a),t.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new U(o,t.floor.elevation+t.ty+mt(t.floor,n)+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(e){this.wallMode=e;for(let t of this.floors)this.buildLamps(t);this.invalidate()}setDevices(e){this.devices=e,this.labelsDirty=!0,this.effectFloors=new Set(e.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(e.map(n=>[n.id,n.floorId]));let t=new Set;for(let n of e){t.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let o=r.el;r.icon!==n.icon&&(r.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let s=n.caption??"";r.caption!==s&&(r.caption=s,o.querySelector(".fp3d-dev-name").textContent=s);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,o.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,o.title=n.name,o.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?o.style.setProperty("--fp3d-glow",c):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)t.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(e){let t=JSON.stringify([...e]);if(t!==this.roofWindowsKey){this.roofWindowsKey=t,this.roofWindows=e,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(e){this.anchorCb=e,this.labelsDirty=!0,this.invalidate()}setAnchors(e){this.anchors=e,this.labelsDirty=!0,this.invalidate()}setSolarLevels(e){this.solarLevels=e;let t=!1;for(let n of this.roof?.lives??[])Xs(n,e)&&(t=!0);for(let n of this.floors)n.solarLive&&Xs(n.solarLive,e)&&(t=!0);this.solarActive=t,this.invalidate()}setPools(e){let t=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(t(e)!==t(this.pools)){this.pools=e,this.poolActive=e.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(e){e.poolGroup&&(L0(e.poolGroup),e.group.remove(e.poolGroup),e.poolGroup=void 0);let t=this.pools.filter(n=>n.floorId===e.floor.id);t.length&&(e.poolGroup=I0(t,this.flowTime),e.group.add(e.poolGroup))}setSound(e){let t=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(t(e)!==t(this.sound)){this.sound=e,this.soundActive=e.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Rt;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=e.filter(c=>c.floorId===n.floor.id),s=n.floor.elevation+.03;for(let c of o)if(c.playing)for(let u=0;u<3;u++){let h=new Oe(new jo(.92,1,48),new nt({color:3662079,transparent:!0,opacity:0,blending:Lt,depthWrite:!1,side:lt}));h.rotation.x=-Math.PI/2,h.position.set(c.x,s+u*.002,c.z),h.userData={sound:!0,phase:u/3,level:c.level},h.frustumCulled=!1,r.add(h)}let a=[],l=new Set;for(let c of o)for(let u of c.members){let h=o.find(f=>f.id===u);if(!h||h===c)continue;let d=[c.id,h.id].sort().join("|");l.has(d)||(l.add(d),a.push(c.x,s+.02,c.z,h.x,s+.02,h.z))}if(a.length){let c=new Xe;c.setAttribute("position",new Ae(a,3));let u=new Zt(c,new qt({color:3662079,transparent:!0,opacity:.45,blending:Lt,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(e){let t=e/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(t*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(e){this.flows=e;let t=this.flowSeconds(),n=new Map;for(let r of e){let o=_d(r),s=tg(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?t*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=e.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(e){this.pipes=e;for(let t of this.floors)this.buildPipes(t);this.invalidate()}buildPipes(e){let t=this.pipes.filter(o=>o.floorId===e.floor.id),n=JSON.stringify(t);if(n===e.pipeSig)return;e.pipeSig=n;let r=new rt;for(let o of t)v0(r,o);e.pipeMesh.geometry.dispose(),e.pipeMesh.geometry=r.geometry(),e.pipeMesh.visible=r.count>0}setPersons(e){this.labelsDirty=!0,this.persons=e;let t=new Set;for(let n of e){t.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let o=document.createElement("img");o.src=n.picture,o.alt="",o.addEventListener("error",()=>o.replaceWith(document.createTextNode(n.initials))),r.append(o)}else r.textContent=n.initials}for(let[n,r]of this.personPins)t.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(e,t){this.pickFurniture=e,this.pickOpenings=t}setAccent(e){let t=N0(e),n=t?1:0;n===Oc.value&&(!t||Bc.value.equals(new U(...t)))||(Oc.value=n,t&&Bc.value.set(...t),this.invalidate())}setTheme(e){if(e===this.theme)return;this.theme=e,this.themeUniform.value=D0(e);let t=Mo(e),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines,this.roof.solarLines]:[]];for(let r of n)r.blending=t,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(e){this.furnish=e,e||this.selectFurniture(null),this.invalidate()}selectFurniture(e){e&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=e,this.updateGhost(),this.invalidate()}selectFurnitureSet(e){this.selectedSet=[...e],this.updateGhost(),this.invalidate()}setSun(e){this.sun=e;for(let t of this.floors)this.buildSun(t);this.placeSky(),this.invalidate()}setWeather(e){this.weather=e;for(let t of this.floors)this.buildSun(t);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let e=this.weather,t=!!e&&!this.lowQuality,n=e?new Q(e.sky[0]/255,e.sky[1]/255,e.sky[2]/255):null;this.scene.fog=t&&e.fog>0&&n?new Oo(n,.01+.035*e.fog):null;let r=t?Math.round(700*e.rain):0,o=t?Math.round(450*e.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}seedParticles(e,t,n){if((e.geometry.getAttribute("position")?.count??0)===t)return;let o=this.weatherBox,s=new Float32Array(t*3),a=n?2:1;for(let c=0;c<t;c+=a){let u=o.x0+Math.random()*(o.x1-o.x0),h=o.y0+Math.random()*(o.y1-o.y0),d=o.z0+Math.random()*(o.z1-o.z0);s.set([u,h,d],c*3),n&&s.set([u,h-.45,d],c*3+3)}e.geometry.dispose();let l=new Xe;l.setAttribute("position",new Ae(s,3)),e.geometry=l}stepWeather(e){let t=this.weather;if(!t||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(e-this.weatherLast)/1e3):0;if(this.weatherLast=e,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=t.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*t.rain)*n;for(let u=0;u<l.length;u+=6){let h=l[u+1]-c,d=l[u]+s*n;h<r.y0&&(h+=o,d=r.x0+Math.random()*(r.x1-r.x0)),d>r.x1&&(d-=r.x1-r.x0),l[u]=d,l[u+1]=h,l[u+3]=d-s*.05,l[u+4]=h-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=e/1e3;for(let u=0;u<l.length;u+=3){let h=l[u+1]-(.9+.6*t.snow)*n,d=l[u]+(s+Math.sin(c+u)*.4)*n;h<r.y0&&(h+=o,d=r.x0+Math.random()*(r.x1-r.x0)),d>r.x1&&(d-=r.x1-r.x0),l[u]=d,l[u+1]=h}a.needsUpdate=!0}return!0}placeSky(){let e=this.sun,t=this.weather,n=t?.cloud??0,r=!e||e.elevation<-3;if(!e||!t||t.disc===!1||n>.85||!r&&e.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*ut,s=(r?e.azimuth+180:e.azimuth)*ut,a=Math.max(10,Math.abs(e.elevation))*ut,l=this.weatherBox,c=new U((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),h=new U(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(h,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let d=this.skyDisc.material;d.color.set(r?13621486:16767370),d.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(e){let t=!!e!=!!this.roomTint;if(this.roomTint=e,this.tintTick=!0,this.applyHighlight(),t)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(e){this.screens=e;for(let t of this.floors)this.buildScreens(t);this.invalidate()}fillRoomPin(e,t,n){if(e.textContent=t||"\u2013",n){let r=document.createElement("small");r.textContent=n,e.append(r),e.classList.add("fp3d-pin-info")}else e.classList.remove("fp3d-pin-info")}setRoomInfo(e){if(!(e.size===this.roomInfo.size&&[...e].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=e;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,e.get(r.room.id))}}setFloorInfo(e){this.floorInfo=e;for(let t of this.floors){let n=t.label.querySelector("span"),r=e.get(t.floor.id)??this.options.floorInfo?.(t.floor)??"";n&&n.textContent!==r&&(n.textContent=r,t.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(e,t=!1){if(this.openingTargets=e,t)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=e.get(o)??Ks,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&!!l.sensed==!!s.sensed||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(e){for(let[t,n]of e){let r=this.fridges.get(t)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(t,r)}for(let t of[...this.fridges.keys()])e.has(t)||this.fridges.delete(t);this.invalidate()}stepFridges(e){let t=1-Math.exp(-e/160),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*t,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(o=>n.has(o.id))&&this.buildFridges(r);return!0}buildFridges(e){let t=new rt;for(let n of e.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Um(t,n,Pt(e.floor,n),r?.l??0,r?.r??0)}e.fridgeMesh.geometry.dispose(),e.fridgeMesh.geometry=t.geometry(),e.fridgeMesh.visible=t.count>0}resetView(){this.fit(700)}setStartView(e){this.startView=e}currentView(){let e=this.controls.view,t=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(e.theta),Math.cos(e.theta)),phi:e.phi,radius:e.radius,target:{x:e.target.x,y:e.target.y-t,z:e.target.z}}}floorBase(e){let t=e===null?void 0:this.floorMap.get(e);return t?t.floor.elevation+t.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let e of[this.rain,this.snow,this.skyDisc])e.geometry.dispose(),e.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let e of this.robots.values())e.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(e=>this.render(e)))}makeRenderer(e){let t=e==="low"||e==="auto"&&$M();this.lowQuality=t,Cm(t),this.applyWeather(),this.highQuality=e==="high";let n=new gr({antialias:!t,alpha:!0,powerPreference:t?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:e==="high"?2.5:2)),n.setClearColor(0,0),n.localClippingEnabled=!0,n.outputColorSpace=Dt,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Ic(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(e,t)=>this.onTap(e,t),hold:(e,t)=>this.onHold(e,t),swipeStart:(e,t,n,r)=>this.swipeStart(e,t,n,r),swipeMove:e=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",e,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(e,t)=>this.grabFurniture(e,t),drag:(e,t)=>this.dragFurniture(e,t),drop:()=>this.dropFurniture(),doubleTap:(e,t)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(e,t):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||(this.customContext&&this.setCustomPackState(this.customContext.hass,{...this.customContext.moment,time:this.customContext.moment.historical?this.customContext.moment.time:Date.now()}),this.invalidate())};resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.size={w:e,h:t},this.labelsDirty=!0,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let e of this.customLayers.values())e.dispose();this.customLayers.clear();for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.floors){for(let t of e.screenPics.values())t.mesh.material.dispose(),t.texture?.dispose();e.group.traverse(t=>{t.geometry?.dispose()});for(let t of Object.values(e.materials))t.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(e){let t=document.createElement("button");t.className="fp3d-dev",t.dataset.entity=e;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",t.append(n,r,o,s);let a,l=!1;t.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=e;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=t.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,h.left+h.width/2-d.left,h.top+h.height/2-d.top)},WM)});let c=()=>clearTimeout(a);return t.addEventListener("pointerleave",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerup",c),t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(e),this.options.onDeviceSelect?.(e);return}if(l)return;let h=t.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceTap?.(e,h.left+h.width/2-d.left,h.top+h.height/2-d.top)}),t.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let h=t.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,h.left+h.width/2-d.left,h.top+h.height/2-d.top)}}),t}buildLightSurface(e){let t=this.lowQuality?.5:.25,n=Sm(e.floor,e.geo.walls2d,e.geo.wallBuckets,e.geo.openings,t,e.geo.holes,e.geo.roofUnder),r=ng(e.floor,e.geo.openRooms);if(e.lightZones=r.some((a,l)=>a!==l)?r:null,e.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=vo(r,a.ra),a.rb=vo(r,a.rb)}e.lightSurface=n;let o=new Xe;o.setAttribute("position",new Ae(n.pos,3)),o.setAttribute("color",new Ae(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new Ae(n.fold,1));let s=new lr(new Uint32Array(n.pos.length/3),1);s.setUsage($u),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),e.glowMesh.geometry.dispose(),e.glowMesh.geometry=o,e.glowSig="",this.buildGlow(e)}lightSources(e){let t=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==e.floor.id||!r||n.pack&&yt(n.pack)?.spots?.length)continue;let o=n.top??e.floor.height,s=Fh(e.floor,n.x,n.z),a=vo(e.lightZones,s),[l,,c]=n.size??(n.lamp?Hc[n.lamp]:[.3,.3,.3]),u=n.base??0,h=n.top??o,d=t.length,f={ceiling:[h-.12,"ceiling"],downlight:[h-.03,"spot"],spot:[h-c,"spot"],panel:[h-.05,"ceiling"],pendant:[Math.max(u+.5,h-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<YM?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[p,g]=n.lamp?f[n.lamp]:[n.y,"omni"],m=n.lightY??p,_=r.color;if(n.lamp==="strip"){let x=(n.rotation??0)*ut,w=!!n.upright||Math.abs(n.roll??0)>45;for(let b of[-1/3,0,1/3])n.upright?t.push({x:n.x,y:u+l*(.5+b),z:n.z,color:_,level:r.level*.55,kind:"omni",room:a}):t.push({x:n.x+Math.cos(x)*l*b,y:m,z:n.z+Math.sin(x)*l*b,color:_,level:r.level*.55,kind:w?"omni":g,room:a})}else t.push({x:n.x,y:m,z:n.z,color:_,level:r.level,kind:g,room:a,...g==="spot"?{direction:[0,-1,0],angle:n.beam_angle??60}:{}});if(n.rotation_x||n.rotation_z){let x=uo(n,Gc(n,o));for(let w=d;w<t.length;w++){let b=t[w];if([b.x,b.y,b.z]=x(b.x,b.y,b.z),b.kind==="spot"){let y=x(n.x,0,n.z),M=x(n.x,-1,n.z);b.direction=[M[0]-y[0],M[1]-y[1],M[2]-y[2]],b.angle=n.beam_angle??60}else b.kind="omni";b.room=vo(e.lightZones,Fh(e.floor,b.x,b.z))}}}if(this.customContext)for(let n of e.floor.furniture)for(let r of R0(n,e.floor,this.customContext.hass))r.room=vo(e.lightZones,r.room),t.push(r);return t}buildGlow(e){let t=e.lightSurface;if(!t)return;let n=this.lightSources(e),r=t.doors.map(h=>{let d=e.geo.openings.find(p=>p.opening.id===h.id);if(d&&br(d.opening,d.exterior)==="passage")return 1;let f=e.openings.get(h.id);return f?Math.max(f.open,f.open2??0):.5}),o=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(d=>d.toFixed(3)).join("/")},${h.direction?.join("/")},${h.angle}`).join(";")+"|"+r.map(h=>h.toFixed(1)).join(",");if(o===e.glowSig)return;e.glowSig=o;let s=e.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){e.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=Am(t,n,.42,r);if(this.roomTint){let h=e.floor.rooms.length;for(let d=0;d<t.room.length;d++)if(t.room[d]!==h)for(let f=0;f<3;f++)l[d*3+f]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,u=0;for(let h=0;h<l.length/18;h++){let d=!1;for(let f=h*18;f<h*18+18&&!d;f++)d=l[f]>.004;if(d)for(let f=0;f<6;f++)c[u++]=h*6+f}s.index.needsUpdate=!0,s.setDrawRange(0,u),e.glowMesh.visible=u>0}makeMaterials(e){return{floor:hn(new nt({vertexColors:!0}),this.themeUniform),pattern:QM(this.patternTexture),wall:hn(ji(new nt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),e,"solid"),this.themeUniform),glassWall:ji(new nt({vertexColors:!0,transparent:!0,depthWrite:!1}),e,"glass"),shadow:new nt({vertexColors:!0,blending:ss,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:lt,polygonOffset:!0,polygonOffsetFactor:-1}),lines:hn(ji(new qt({vertexColors:!0,transparent:!0,blending:Mo(this.theme),depthWrite:!1}),e),this.themeUniform,!0),glow:ji(new nt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:lt,polygonOffset:!0,polygonOffsetFactor:-3}),e,"solid"),frames:hn(ji(new nt({vertexColors:!0,side:lt}),e),this.themeUniform),glass:ji(new nt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:lt}),e),blinds:hn(ji(new nt({map:this.blindTexture,vertexColors:!0,side:lt}),e),this.themeUniform),water:hn(new nt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:lt}),this.themeUniform),flow:tS(this.flowTime),solarLive:dd(this.flowTime),lamps:hn(new nt({vertexColors:!0}),this.themeUniform),halos:new ur({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1}),cones:new nt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:lt}),screens:new nt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:lt})}}rebuild(){let e=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),t=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=Yh(n)?.id===o.id?s.filter(X=>X.face===Kh).map(X=>({field:X,face:Xm(n,X)})):[],l=s.filter(X=>X.face.startsWith(`wall:${o.id}:`));if(l.length){let X=new Map(Wm(n,o.id).map(oe=>[oe.key,oe]));for(let oe of l){let ce=X.get(oe.face);ce&&a.push({field:oe,face:ce})}}let u=(n.settings.roof.sections??[]).some(X=>am(X,Gt(o)))?(X,oe)=>{let ce=lm(n,X,oe);return ce===null?null:ce-o.elevation}:void 0,h=s0(ud(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,a0(n.floors,o),a,u),d={standing:{value:65535},glass:{value:0}},f=this.makeMaterials(d),p=new Rt,g=new Oe(h.floor,f.floor),m=new Oe(h.shadow,f.shadow);m.renderOrder=1;let _=new Oe(h.floor,f.pattern);_.renderOrder=2;let x=new Oe(new Xe,f.glow);x.renderOrder=3,x.visible=!1;let w=new Oe(new Xe,f.frames),b=new Oe(new Xe,f.blinds),y=new Oe(new Xe,f.glass);y.renderOrder=4;let M=new Oe(new Xe,f.lamps);M.visible=!1;let E=new Oe(new Xe,f.cones);E.visible=!1,E.renderOrder=3;let v=new jr(new Xe,f.halos);v.visible=!1,v.renderOrder=7;let S=new Oe(new Xe,f.cones);S.visible=!1,S.renderOrder=7;let T=new Oe(new Xe,f.cones);T.visible=!1,T.renderOrder=7;let A=new Oe(new Xe,f.lamps);A.visible=!1;let C=new Oe(new Xe,f.lamps);C.visible=!1;let P=new Oe(new Xe,f.screens);P.visible=!1,P.renderOrder=5;let R=new Oe(new Xe,f.flow);R.renderOrder=5,R.frustumCulled=!1;let I=hd(a,o.elevation),F=I?new Oe(I.geometry,f.solarLive):null;F&&(F.renderOrder=6,Xs(I,this.solarLevels));for(let X of[w,b,y])X.frustumCulled=!1;let z=new Oe(h.walls,f.glassWall),B=new Oe(h.walls,f.wall);z.renderOrder=6;let N=new Oe(h.water,f.water);N.renderOrder=4,p.add(g,m,_,x,B,N,new Zt(h.lines,f.lines),w,b,y,R,M,E,v,S,T,A,C,P,z,...F?[F]:[]),this.root.add(p);let O=document.createElement("button");O.className="fp3d-pin fp3d-pin-floor",O.dataset.floor=o.id;let G=document.createElement("b");G.textContent=o.name||"\u2013";let J=document.createElement("span");J.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",O.append(G,J),O.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(O);let j=e.get(o.id),ue=[],ne=null;for(let X of o.rooms){let oe=document.createElement("button");oe.className="fp3d-pin",oe.dataset.room=X.id,oe.dataset.floor=o.id,this.fillRoomPin(oe,X.name,this.roomInfo.get(X.id)),oe.addEventListener("click",()=>this.options.onRoomTap?.(o.id,X.id)),this.labels.append(oe);let[ce,le]=Vi(X.points);ue.push({pin:oe,room:X,cx:ce,cz:le});for(let[pe,Ue]of X.points)ne??={x0:pe,x1:pe,z0:Ue,z1:Ue},ne.x0=Math.min(ne.x0,pe),ne.x1=Math.max(ne.x1,pe),ne.z0=Math.min(ne.z0,Ue),ne.z1=Math.max(ne.z1,Ue)}this.floors.push({floor:o,rank:r.indexOf(o),group:p,geo:h,floorMesh:g,shadowMesh:m,patternMesh:_,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:w,glassMesh:y,blindsMesh:b,flowMesh:R,solarMesh:F,solarLive:I,lampMesh:M,sunMesh:E,sunSig:"",haloMesh:v,coneMesh:S,trailMesh:T,fridgeMesh:A,pipeMesh:C,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:B,screenMesh:P,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:ne,roomPins:ue,labelSize:null,materials:f,mask:d,openings:new Map,y:j?.y??0,o:j?.o??1,ty:0,to:1,appliedO:-1,label:O});let de=this.customMemories.get(o.id)??new wo;this.customMemories.set(o.id,de);let H=new Nc(o,f.wall,()=>this.invalidate(),de);p.add(H.group),this.customLayers.set(o.id,H),this.customContext&&H.update(this.customContext.hass,this.customContext.moment,this.building?.settings.pack_animations!==!1)}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o),this.buildPipes(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=t.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Ks);this.buildOpenings(o),this.buildFlows(o),o.poolGroup=void 0,this.buildPoolWater(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(e.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(m=>m.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.solar.dispose(),this.roof.solarLines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(m=>m.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let e=this.building?n0(this.building,this.roofWindows):[];if(!e.length)return;let t=new Map($i(this.building).map(m=>[m.key,m])),n=this.building.settings.roof?.solar??[],r=Ac(dd(this.flowTime)),o=[],s=new Rt,a=hn(u0(new nt({vertexColors:!0,transparent:!0,side:lt,depthWrite:!1}),this.roofDirection),this.themeUniform),l=hn(new qt({vertexColors:!0,transparent:!0,blending:Mo(this.theme),depthWrite:!1}),this.themeUniform,!0),c=hn(Ac(new nt({vertexColors:!0,transparent:!0,side:lt})),this.themeUniform),u=hn(Ac(new qt({vertexColors:!0,transparent:!0,blending:Mo(this.theme),depthWrite:!1})),this.themeUniform,!0),h=hn(new nt({vertexColors:!0,transparent:!0,side:lt,depthWrite:!1}),this.themeUniform),d=new Rt,f=hn(new nt({vertexColors:!0,side:lt}),this.themeUniform),p=hn(new qt({vertexColors:!0,transparent:!0,blending:Mo(this.theme),depthWrite:!1}),this.themeUniform,!0),g=e.map(m=>{let _=new Rt,x=m.solid.geometry();if(x.computeVertexNormals(),_.add(new Oe(x,a),new Zt(m.lines.geometry(),l)),m.solar){let{facing:M}=m.solar;_.add(new Oe(Ns(m.solar.solid.geometry(),M.normals,M.points),c),new Zt(Ns(m.solar.lines.geometry(),M.lineNormals,M.linePoints),u))}m.glass.count&&_.add(new Oe(m.glass.geometry(),h));let w=n.flatMap(M=>{let E=t.get(M.face);return E&&(E.section?m.sections?.includes(E.section):m===e[0])?[{face:E,field:M}]:[]}),b=hd(w,m.floor.elevation+m.base);if(b){let M=new Oe(b.geometry,r);M.renderOrder=9,_.add(M),o.push(b),Xs(b,this.solarLevels)}m.winRoof?.solid.count&&_.add(new Oe(m.winRoof.solid.geometry(),f),new Zt(m.winRoof.lines.geometry(),p)),_.renderOrder=8,s.add(_);let y=null;return m.win?.solid.count&&(y=new Rt,y.add(new Oe(m.win.solid.geometry(),f),new Zt(m.win.lines.geometry(),p)),d.add(y)),{group:_,floorId:m.floor.id,rideId:fm(this.building,m.floor,m.sections??[]),base:m.base,lift:m.lift!==!1,win:y}});s.renderOrder=8,this.scene.add(s),this.scene.add(d),this.roof={group:s,parts:g,solid:a,lines:l,solar:c,solarLines:u,glass:h,live:r,lives:o,wins:d,winSolid:f,winLines:p},this.placeRoof()}placeRoof(e=1e3){let t=this.roof;if(!t)return!1;let r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?Lc(this.controls.view.radius,this.houseRadius,this.keepRoof).opacity:0,o=1-Math.exp(-e/J0),s=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),t.group.visible=this.roofO>.02;for(let a of t.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=this.floorMap.get(a.rideId)??l,u=c.ty>0?Math.min(1,c.y/c.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+c.y+a.base+Lc(this.controls.view.radius,this.houseRadius,this.keepRoof,this.roofO).lift+(a.lift?u*$0:0),a.win&&(a.win.position.y=l.floor.elevation+c.y+a.base+(a.lift?u*$0:0),a.win.visible=l.group.visible&&l.o>.5&&this.wallMode!=="cut")}return t.solid.opacity=this.roofO,t.solid.depthWrite=!1,t.lines.opacity=this.roofO,t.solar.opacity=this.roofO,t.solar.depthWrite=this.roofO>.9,t.solarLines.opacity=this.roofO,t.glass.opacity=this.roofO*.28,t.live.opacity=this.roofO,this.roofO!==s&&this.roofO!==r}applyTierFlags(){let e=this.lowQuality;this.ground.visible=!e&&this.theme!=="day"&&this.floors.some(t=>t.floor.rooms.length>0);for(let t of this.floors)t.patternMesh.visible=!e,t.shadowMesh.visible=!e&&t.o>.98;this.invalidate()}rebuildTier(){for(let e of this.floors)e.flowLayout="",this.buildFlows(e),this.buildLightSurface(e),e.lampShapeSig="",this.buildLamps(e)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(e){let t=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;t?n.rank>t.rank?(r=5+n.rank,o=0):n.rank<t.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:HM)):r=this.explode?n.rank*GM:0,n.ty=r,n.to=o,e&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(e){if(e.group.position.y=e.floor.elevation+e.y,e.group.visible=e.o>.02,e.shadowMesh.visible=e.o>.98&&!this.lowQuality,Math.abs(e.appliedO-e.o)<.001)return;e.appliedO=e.o;let t=e.materials,n=e.o>.999;for(let r of[t.floor,t.wall,t.frames,t.blinds,t.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=e.o;t.pattern.opacity=e.o,t.glow.opacity=e.o,t.lines.opacity=e.o,t.glass.opacity=e.o,t.glassWall.opacity=e.o,t.flow.opacity=e.o,t.solarLive.opacity=e.o,t.lamps.opacity=e.o,t.halos.opacity=e.o,t.cones.opacity=e.o,t.screens.opacity=e.o;for(let r of e.screenPics.values()){let o=r.mesh.material;o.transparent=e.o<.999,o.opacity=e.o}}stepFloors(e){let t=!1,n=1-Math.exp(-e/J0);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,t=!0,this.applyFloor(r)}return t}stepOpenings(e){let t=!1,n=1-Math.exp(-e/160);for(let r of this.floors){let o=!1;for(let[s,a]of r.openings){let l=this.openingTargets.get(s)??Ks,c=(d,f)=>(d??null)===(f??null)||typeof d=="number"&&typeof f=="number"&&Math.abs(d-f)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},h=!1;for(let d of["open","open2","tilt","tilt2"]){let f=l[d]??0,p=a[d]??0,g=f-p;Math.abs(g)<.003?u[d]=f:(u[d]=p+g*n,h=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let d=l.cover-a.cover;Math.abs(d)<.003?u.cover=l.cover:(u.cover=a.cover+d*n,h=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(s,u),o=!0),t||=h}o&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return t}glowOf(e){if(!e.glow||!e.effect)return e.glow;let t=new Q(...e.glow.color),n={h:0,s:0,l:0};t.getHSL(n);let r=(e.x*.37+e.z*.61)%1;return t.setHSL((n.h+this.effectTime*qM+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[t.r,t.g,t.b],level:e.glow.level}}buildLamps(e){let t=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=t)return 0;let d=h-t,f=d>Vc?.5+.5*Math.sin(d/140):d/Vc;return Math.round(f*10)/10},r=this.devices.filter(u=>u.floorId===e.floor.id&&(u.lamp||u.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.rotation_x??0},${u.rotation_z??0},${u.pivot_y??""},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.top??""},${u.pack??""},${u.mirror?1:0}`).join(";"),s=r.map(u=>this.glowOf(u)),a=r.map((u,h)=>`${n(u.id)},${s[h]?`${s[h].level.toFixed(3)},${s[h].color.map(d=>d.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==e.lampShapeSig||!e.lampMesh.geometry.getAttribute("position")){e.lampShapeSig=o,e.lampColorSig="";let u=new rt,h=[],d=[],f=new Map,p=e.floor.height;for(let g of r){let m=g.lamp==="strip"?(g.base??p)>Math.min(e.floor.cut_height,p):g.lamp?vd.has(g.lamp)&&(g.top??p)>Math.min(e.floor.cut_height,p):g.model==="camera_ceiling";if(!g.lamp&&!g.model||m&&this.wallMode==="cut")continue;let _=u.count,x=e.floor.furniture.find(E=>E.id===g.furnitureId),w=g.pack?_r(x??{type:g.pack}):void 0,[b,y,M]=g.size??[.3,.3,.3];g.model?Gm(u,g.model,g.x,g.model==="camera_ceiling"?g.top??p:g.y,g.z,g.rotation??0):w?yc(u,w,{x:g.x,z:g.z,rotation:g.rotation??0,rotation_x:g.rotation_x,rotation_z:g.rotation_z,w:b,d:y,h:M,mirror:g.mirror},g.base??0,65280):gd(u,{...g,lamp:g.lamp},g.top??p,65280),f.set(g.furnitureId??g.id,{start:_,end:u.count}),g.pickable!==!1&&h.push({id:g.id,start:_,end:u.count}),g.furnitureId&&d.push({id:g.furnitureId,start:_,end:u.count})}e.lampTris=h,e.lampFurnTris=d,e.lampRanges=f,e.lampShade=Lp(u.c),e.lampMesh.geometry.dispose(),e.lampMesh.geometry=u.geometry(),e.lampMesh.visible=u.count>0}if(a===e.lampColorSig)return;e.lampColorSig=a;let l=e.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,h)=>{let d=e.lampRanges.get(u.furnitureId??u.id);if(!d)return;let f=s[h],p=f?.55+.45*f.level:0,g=f?new Q(...f.color.map(x=>Math.min(1,x*p))):new Q(KM),m=n(u.id);m>0&&g.lerp(new Q(1,1,1),.7*m);let _=new Q(g.getHex());Fp(c,e.lampShade,d,[_.r,_.g,_.b])}),l.needsUpdate=!0,this.buildHalos(e)}buildSun(e){let t=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*ut,r=this.weather?.cloud??0,o=ng(e.floor,e.geo.openRooms),s=t?`${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...e.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===e.sunSig)return;e.sunSig=s;let a=new rt;if(t&&t.elevation>2&&r<.97){let l=Math.min(1,t.elevation/12)*(1-.8*r),c=t.elevation*ut,u=t.azimuth*ut,h=[Math.sin(n+u),-Math.cos(n+u)],d=1/Math.tan(c);for(let f of e.geo.openings){if(f.opening.type!=="window"||!f.exterior)continue;let p=e.floor.rooms.find(P=>P.id===f.opening.room_id);if(!p||p.points.length<3)continue;let g=mt(e.floor,p),m=[-f.toRoom[0],-f.toRoom[1]],_=m[0]*h[0]+m[1]*h[1];if(_<.05)continue;let x=e.openings.get(f.opening.id),w=f.top-(x?.cover??0)*(f.top-f.sill);if(w-f.sill<.05)continue;let b=(P,R)=>{let I=Math.min(7,(R-g)*d);return[f.start[0]+f.axis[0]*P+f.toRoom[0]*f.faceRoom-h[0]*I,g+.02,f.start[1]+f.axis[1]*P+f.toRoom[1]*f.faceRoom-h[1]*I]},y=.14*l*Math.min(1,_*1.5),M=new Q(1*y,.82*y,.55*y),E=M.clone().multiplyScalar(.45),v=e.floor.rooms.findIndex(P=>P.id===f.opening.room_id);if(v<0||e.floor.rooms[v].points.length<3)continue;let S=o[v],T=e.floor.rooms.filter((P,R)=>o[R]===S&&Math.abs(mt(e.floor,P)-g)<.001&&P.points.length>=3).map(P=>P.points),A=Math.max(1,Math.ceil(Math.min(7,(w-g)*d)/.25)),C=Math.max(1,Math.ceil(f.width/.3));for(let P=0;P<A;P++){let R=f.sill+(w-f.sill)*P/A,I=f.sill+(w-f.sill)*(P+1)/A,F=P/A,z=(P+1)/A,B=M.clone().lerp(E,F),N=M.clone().lerp(E,z);for(let O=0;O<C;O++){let G=f.width*O/C,J=f.width*(O+1)/C,j=b((G+J)/2,(R+I)/2);if(!T.some(X=>Ge([j[0],j[2]],X)))continue;let ue=b(G,R),ne=b(J,R),de=b(J,I),H=b(G,I);a.tri(ue,ne,de,B,B,N),a.tri(ue,de,H,B,N,N)}}}this.pushRoofSun(e,a,o)}e.sunMesh.geometry.dispose(),e.sunMesh.geometry=a.geometry(),e.sunMesh.visible=a.count>0}pushRoofSun(e,t,n){this.sun&&this.building&&h0(t,this.building,e.floor,this.sun,this.weather?.cloud??0,this.roofWindows,e.geo.holes,n)}buildHalos(e){if(this.lowQuality){e.haloMesh.visible=!1,e.coneMesh.visible=!1;return}let t=e.floor.height,n=[],r=[],o=new rt,s=[];for(let l of this.devices){if(l.model&&l.floorId===e.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let b=(l.rotation??0)*ut,y=[-Math.sin(b),Math.cos(b)],M=l.model==="camera_ceiling",E=l.reach??(M?3:4.5),v=(l.fov??(M?360:90))*ut/2,S=l.motion?new Q(.9,.12,.16):new Q(.04,.22,.28),T=new Q(0,0,0),A=Math.max(4,Math.round(v/.15)),C=pn(e.floor,l.x,l.z)+.015,P=e.geo.walls2d,R=N=>{let O=N.b[0]-N.a[0],G=N.b[1]-N.a[1],J=O*O+G*G||1,j=Math.max(0,Math.min(1,((l.x-N.a[0])*O+(l.z-N.a[1])*G)/J));return Math.hypot(l.x-(N.a[0]+O*j),l.z-(N.a[1]+G*j))},I=null;for(let N of P)R(N)<.45&&(!I||R(N)<R(I))&&(I=N);let F=N=>{let O=y[0]*Math.cos(N)-y[1]*Math.sin(N),G=y[1]*Math.cos(N)+y[0]*Math.sin(N),J=E;for(let j of P){let ue=j.b[0]-j.a[0],ne=j.b[1]-j.a[1],de=O*ne-G*ue;if(Math.abs(de)<1e-9)continue;let H=((j.a[0]-l.x)*ne-(j.a[1]-l.z)*ue)/de,X=((j.a[0]-l.x)*G-(j.a[1]-l.z)*O)/de;j===I&&H<=.45||H>.02&&H<J&&X>=0&&X<=1&&(J=H)}return J},z=N=>{let O=F(N);return[l.x+(y[0]*Math.cos(N)-y[1]*Math.sin(N))*O,C,l.z+(y[1]*Math.cos(N)+y[0]*Math.sin(N))*O]},B=o.count;for(let N=0;N<A;N++)o.tri([l.x,C,l.z],z(-v+2*v*(N+1)/A),z(-v+2*v*N/A),S,T,T);s.push({id:l.id,start:B,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==e.floor.id||!l.lamp||!c||vd.has(l.lamp)&&this.wallMode==="cut"&&(l.top??t)>Math.min(e.floor.cut_height,t))continue;let u=l.top??t,[h,d,f]=l.size??Hc[l.lamp],p=l.base??0,g=n.length,m=o.p.length,_=(l.rotation??0)*ut,x={ceiling:u-.07,downlight:u-.03,spot:u-f,panel:u-.03,pendant:Math.max(p+.4,u-f)+.08,floor:p+f-.15,uplight:p+f,table:p+f-.09,wall:p+f/2,strip:p+Math.max(.02,f)-.01,bollard:p+f-.08,garden:p+f-.03}[l.lamp],w=(b,y,M=1)=>{n.push(b,x,y),r.push(...c.color.map(E=>E*c.level*.7*M))};if(l.lamp==="strip")for(let b of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,p+h*(.5+b),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6))):w(l.x+Math.cos(_)*h*b,l.z+Math.sin(_)*h*b,.6);else l.lamp==="wall"?w(l.x-Math.sin(_)*(d/2+.05),l.z+Math.cos(_)*(d/2+.05)):w(l.x,l.z);Pn(n,g,l,Gc(l,t)),Pn(o.p,m,l,Gc(l,t))}if(this.highQuality)for(let l of this.lightSources(e))P0(o,l,e.floor,e.lightSurface?.blockers??[]);let a=new Xe;a.setAttribute("position",new Ae(n,3)),a.setAttribute("color",new Ae(r,3)),e.haloMesh.geometry.dispose(),e.haloMesh.geometry=a,e.haloMesh.visible=n.length>0,e.coneMesh.geometry.dispose(),e.coneMesh.geometry=o.geometry(),e.coneMesh.visible=o.count>0,e.coneTris=s}buildScreens(e){let t=ud(e.floor,this.parked).furniture.filter(o=>this.screens.has(o.id)),n=t.map(o=>`${o.id}:${o.x},${o.z},${o.rotation},${o.rotation_x??0},${o.rotation_z??0},${o.w},${o.d},${o.h},${o.mount_y??""},${o.mirror?1:0}:${JSON.stringify(this.screens.get(o.id))}`).join(";");if(n===e.screenSig&&e.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(e,t);e.screenSig=n;let r=new rt;for(let o of t){let s=this.screens.get(o.id),a=o.rotation*ut,l=Math.cos(a),c=Math.sin(a),u=uo(o,Pt(e.floor,o)+o.h/2),h=(y,M,E)=>u(o.x+y*l-E*c,M,o.z+y*c+E*l);if(s.faces){let y=Math.max(.05,o.w)*(o.mirror?-1:1),M=Math.max(.05,o.d),E=Math.max(.005,o.h),v=Pt(e.floor,o);for(let S of s.faces){if(S.part==="lights"){let O=yt(o.type),G=J=>["#e8f4ff","#ff3b4f"].includes(J.color.toLowerCase());if(O&&O.parts.some(G)){let J=new Q(...S.color.map(j=>Math.min(1,j*(.4+.6*S.level))));xc(r,O,o,v,J.getHex(),G)}continue}if(S.part==="cabin"){let O=yt(o.type),G=J=>J.color.toLowerCase()==="#13283a"||J.color==="glass";if(O&&O.parts.some(G)){let J=new Q(...S.color.map(j=>Math.min(1,j*(.3+.5*S.level))));xc(r,O,o,v,J.getHex(),G);continue}}if(S.part==="burners"){let O=new Q(...S.color.map(J=>Math.min(1,J*(.25+.6*S.level)))),G=v+E+.008;for(let[J,j,ue]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let ne=J*Math.abs(y)/.6,de=j*M/.62,H=14;for(let X=0;X<H;X++){let oe=X/H*Math.PI*2,ce=(X+1)/H*Math.PI*2;r.tri(h(ne,G,de),h(ne+Math.cos(oe)*ue,G,de+Math.sin(oe)*ue),h(ne+Math.cos(ce)*ue,G,de+Math.sin(ce)*ue),O)}}continue}if(S.part==="band"||S.part==="cabin"){let O=S.part==="cabin",G=v+E*(O?.6:.42),J=O?v+E*.86:G+.07,j=new Q(...S.color.map(H=>Math.min(1,H*(.3+.45*S.level)))),ue=Math.abs(y)/2+(O?.012:.02),ne=M/2+(O?.012:.02),de=[[-ue,-ne],[ue,-ne],[ue,ne],[-ue,ne]];for(let H=0;H<4;H++){let X=de[H],oe=de[(H+1)%4],ce=h(X[0]*Math.sign(y),G,X[1]),le=h(oe[0]*Math.sign(y),G,oe[1]),pe=h(oe[0]*Math.sign(y),J,oe[1]),Ue=h(X[0]*Math.sign(y),J,X[1]);r.tri(ce,le,pe,j),r.tri(ce,pe,Ue,j)}continue}let T=S.part==="right"?.03:-Math.abs(y)/2+.03,A=S.part==="left"?-.03:Math.abs(y)/2-.03,C=v+(S.part==="bottom"?E*.45:E)+.006,P=new Q(...S.color.map(O=>Math.min(1,O*(.35+.65*S.level)))),R=new Q(0,0,0),I=(O,G,J=C)=>h(O*Math.sign(y),J,G),F=[I(T,-M/2+.03),I(A,-M/2+.03),I(A,M/2-.03),I(T,M/2-.03)];r.tri(F[0],F[2],F[1],P),r.tri(F[0],F[3],F[2],P);let z=.12+.1*S.level,B=P.clone().multiplyScalar(.5),N=[I(T-z,-M/2-z,C+.004),I(A+z,-M/2-z,C+.004),I(A+z,M/2+z,C+.004),I(T-z,M/2+z,C+.004)];for(let O=0;O<4;O++){let G=(O+1)%4;r.tri(F[O],N[G],N[O],B,R,R),r.tri(F[O],F[G],N[G],B,B,R)}}continue}let d=yt(o.type);if(d&&!d.light&&s.ring&&d.parts.some(y=>y.glow)){let y=new Q(...s.color.map(M=>Math.min(1,M*(.45+.55*s.level))));xc(r,d,o,Pt(e.floor,o),y.getHex())}let f=Hh(o,e.floor);if(!f)continue;let p=new Q(...s.color.map(y=>Math.min(1,y*(.35+.65*s.level)))),g=new Q(0,0,0),m=f.z+.004;if(r.tri(h(f.x0,f.y0,m),h(f.x1,f.y0,m),h(f.x1,f.y1,m),p),r.tri(h(f.x0,f.y0,m),h(f.x1,f.y1,m),h(f.x0,f.y1,m),p),s.plain)continue;let _=.18+.12*s.level,x=p.clone().multiplyScalar(.5),w=[h(f.x0,f.y0,m),h(f.x1,f.y0,m),h(f.x1,f.y1,m),h(f.x0,f.y1,m)],b=[h(f.x0-_,f.y0-_,m+.01),h(f.x1+_,f.y0-_,m+.01),h(f.x1+_,f.y1+_,m+.01),h(f.x0-_,f.y1+_,m+.01)];for(let y=0;y<4;y++){let M=(y+1)%4;r.tri(w[y],b[y],b[M],x,g,g),r.tri(w[y],b[M],w[M],x,g,x)}}e.screenMesh.geometry.dispose(),e.screenMesh.geometry=r.geometry(),e.screenMesh.visible=r.count>0,this.updateScreenPictures(e,t)}updateScreenPictures(e,t){let n=new Map(t.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of e.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(e.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),e.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=Hh(o,e.floor);if(!a)continue;let l=e.screenPics.get(r);if(!l){let c=new Oe(new Bn(1,1),new nt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},e.screenPics.set(r,l),e.group.add(c);let u=l;new ns().load(s.picture,h=>{if(e.screenPics.get(r)!==u){h.dispose();return}h.colorSpace=Dt,u.texture=h;let d=u.mesh.material;d.map=h,d.needsUpdate=!0,this.placeScreenPicture(u.mesh,o,a,h,Pt(e.floor,o)+o.h/2),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture,Pt(e.floor,o)+o.h/2)}}placeScreenPicture(e,t,n,r,o){let s=r.image,a=s?.width&&s?.height?s.width/s.height:16/9,l=n.x1-n.x0-.04,c=n.y1-n.y0-.04,u=Math.min(l,c*a),h=u/a,d=t.rotation*ut,f=(n.x0+n.x1)/2,p=n.z+.008;e.scale.set(u,h,1),e.rotation.set((t.rotation_x??0)*ut,-d,(t.rotation_z??0)*ut,"YZX");let g=uo(t,o);e.position.set(...g(t.x+f*Math.cos(d)-p*Math.sin(d),(n.y0+n.y1)/2,t.z+f*Math.sin(d)+p*Math.cos(d)))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(e){let t=this.flows.filter(u=>u.floorId===e.floor.id).map(_d).join(";"),n=[],r=[],o=[],s=[],a=[];for(let u of this.flows){if(u.floorId!==e.floor.id)continue;let h=this.flowPhase.get(_d(u))??{speed:tg(u.power),offset:0},d=u.power>.5?Math.min(1,.5+u.power/2500):.22,f=u.color.map(x=>x*d),p=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(p<1e-4)continue;let g=[(u.b[0]-u.a[0])/p,(u.b[1]-u.a[1])/p,(u.b[2]-u.a[2])/p],m=[];if(Math.abs(g[1])<.5){let x=Math.hypot(g[0],g[2])||1;m.push([-g[2]/x,0,g[0]/x])}else m.push([1,0,0],[0,0,1]);let _=this.lowQuality?[[Q0*1.4,1]]:[[XM,.25],[Q0,1]];for(let[x,w]of _)for(let b of m){let y=x/2,M=(v,S)=>[v[0]+b[0]*y*S,v[1]+b[1]*y*S,v[2]+b[2]*y*S],E=[[M(u.a,-1),u.dist,0],[M(u.b,-1),u.dist+p,0],[M(u.b,1),u.dist+p,1],[M(u.a,1),u.dist,1]];for(let v of[0,1,2,0,2,3]){let[S,T,A]=E[v];n.push(S[0],S[1],S[2]),r.push(f[0]*w,f[1]*w,f[2]*w),o.push(T,A),s.push(h.speed),a.push(h.offset)}}}let l=e.flowMesh.geometry;if(t===e.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,h]of[["color",r],["flowSpeed",s],["flowOffset",a]]){let d=l.getAttribute(u);d.array.set(h),d.needsUpdate=!0}e.flowMesh.visible=n.length>0;return}e.flowLayout=t;let c=new Xe;c.setAttribute("position",new Ae(n,3)),c.setAttribute("color",new Ae(r,3)),c.setAttribute("uv",new Ae(o,2)),c.setAttribute("flowSpeed",new Ae(s,1)),c.setAttribute("flowOffset",new Ae(a,1)),e.flowMesh.geometry.dispose(),e.flowMesh.geometry=c,e.flowMesh.visible=n.length>0}buildOpenings(e){let t=V0(e.geo.openings,e.openings,Math.min(e.floor.cut_height,Gt(e.floor)-e.floor.elevation));e.frameTris=t.frameTris,e.glassTris=t.glassTris,e.blindTris=t.blindTris;for(let[n,r]of[[e.framesMesh,t.frames],[e.glassMesh,t.glass],[e.blindsMesh,t.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(e=>e.to>.99)}applyHighlight(){for(let e of this.floors){let t=e.geo.floor.getAttribute("color");for(let n of e.geo.roomTris){let r=new Q(n.color),o=this.roomTint?.get(n.roomId);o&&r.lerp(new Q(...o).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(ZM,o?.3:.75);for(let s=n.start*3;s<n.end*3;s++)t.setXYZ(s,r.r,r.g,r.b)}t.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".fp3d-pin"))e.classList.toggle("fp3d-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(e){let t=new cn;for(let h of this.activeFloors()){let d=h.floor.elevation+h.ty;for(let f of h.floor.rooms)for(let[p,g]of f.points)t.expandByPoint(new U(p,d+mt(h.floor,f),g)),t.expandByPoint(new U(p,d+Gt(h.floor)-h.floor.elevation,g))}t.isEmpty()&&t.set(new U(-4,0,-4),new U(4,2.5,4)),this.placeGround(),this.weatherBox={x0:t.min.x-6,x1:t.max.x+6,z0:t.min.z-6,z1:t.max.z+6,y0:t.min.y,y1:t.max.y+6},this.applyWeather(),this.placeSky();let n=t.getCenter(new U),r=t.getSize(new U),o=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=t.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;if(u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.keepNext){this.keepNext=!1;let h=this.controls.view;this.controls.flyTo({target:new U(h.target.x,n.y,h.target.z),radius:h.radius,phi:h.phi,theta:h.theta},e);return}this.controls.flyTo({target:n,radius:c?l.radius:o,phi:l?l.phi:.85,theta:l?l.theta:-.6},e)}placeGround(){let e=new cn,t=1/0;for(let s of this.floors){t=Math.min(t,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)e.expandByPoint(new U(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)e.expandByPoint(new U(l,0,c))}if(this.ground.visible=!e.isEmpty()&&!this.lowQuality&&this.theme!=="day",e.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=iS();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=e.getCenter(new U),r=e.getSize(new U),o=bd*Math.ceil((Math.max(r.x,r.z)+16)/bd);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,t-Ji-.02,n.z)}distanceFor(e){let t=this.camera.fov*ut,n=2*Math.atan(Math.tan(t/2)*this.camera.aspect);return e.length()/2/Math.sin(Math.min(t,n)/2)}rayAt(e,t){let n=this.renderer.domElement.getBoundingClientRect(),r=new rs;return r.setFromCamera(new Ee(e/n.width*2-1,-(t/n.height)*2+1),this.camera),r}pick(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=l=>this.customLayers.get(l.floor.id)?.meshes()??[],s=r.flatMap(l=>[l.lampMesh,l.coneMesh,l.framesMesh,l.glassMesh,l.blindsMesh,l.wallMesh,l.floorMesh,...o(l)].filter(c=>c.visible)),a=(l,c)=>l.find(u=>c>=u.start&&c<u.end)?.id;for(let l of n.intersectObjects(s,!1)){if(l.faceIndex==null)continue;let c=l.faceIndex,u=r.find(h=>h.group===l.object.parent||o(h).includes(l.object));if(l.object.userData.furnitureId){if(this.wallMode==="cut"&&l.point.y>u.group.position.y+u.floor.cut_height)continue;let h=this.pickFurniture.get(String(l.object.userData.furnitureId));if(h)return{entity:h};continue}if(l.object===u.lampMesh||l.object===u.coneMesh){let h=a(l.object===u.lampMesh?u.lampTris:u.coneTris,c);if(h)return{entity:h}}else if(l.object===u.framesMesh||l.object===u.blindsMesh||l.object===u.glassMesh){if(this.wallMode==="cut"&&l.face){let f=l.object.geometry.getAttribute("fold")?.getX(l.face.a)??qe;if(f!==qe&&Math.floor(f/16)===0)continue}let h=a(l.object===u.framesMesh?u.frameTris:l.object===u.glassMesh?u.glassTris:u.blindTris,c),d=h?this.pickOpenings.get(h):void 0;if(d)return{entity:d}}else if(l.object===u.wallMesh){let h=a(u.geo.furnitureTris,c),d=h?this.pickFurniture.get(h):void 0;if(d)return{entity:d};if(l.face&&!h){let f=u.wallMesh.geometry.getAttribute("fold")?.getX(l.face.a)??32,p=Math.floor(f/16),g=f%16,m=this.wallMode==="cut"&&p===0,_=(u.mask.glass.value&1<<g)!==0;if(!m){let x=n.ray.direction,w=Math.hypot(x.x,x.z)||1,b=[l.point.x-x.x/w*.3,l.point.z-x.z/w*.3],y=u.floor.rooms.find(M=>M.points.length>=3&&Ge(b,M.points))?.id??null;if(this.roomId!==null){if(y===this.roomId)return{floorId:u.floor.id,roomId:y}}else if(!_&&y)return{floorId:u.floor.id,roomId:y}}}}else if(l.object===u.floorMesh)return{floorId:u.floor.id,roomId:a(u.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),c)??null}}return null}onTap(e,t){let n=this.pick(e,t);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Vc),this.invalidate(),this.options.onDeviceTap?.(n.entity,e,t);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh),...this.customLayers.get(a.floor.id)?.meshes()??[]],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(h=>h.group===a.object.parent||o(h).includes(a.object));if(!l)continue;if(a.object.userData.furnitureId){if(this.wallMode==="cut"&&a.point.y>l.group.position.y+l.floor.cut_height)continue;return{fv:l,id:String(a.object.userData.furnitureId),y:a.point.y}}if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let h=this.furnitureNear(l,a.point.x,a.point.z);if(h)return{fv:l,id:h,y:a.point.y};continue}let u=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(h=>a.faceIndex>=h.start&&a.faceIndex<h.end)?.id;if(u)return{fv:l,id:u,y:a.point.y}}return null}furnitureNear(e,t,n){let r=null;for(let o of e.floor.furniture){let s=o.rotation*ut,a=t-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,u=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,h=Math.max(c,u);h<.25&&(!r||h<r.d)&&(r={id:o.id,d:h})}return r?.id??null}floorPoint(e,t,n,r){let o=this.rayAt(t,n),s=r??e.floor.elevation+e.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(e){this.furnishTypes=e?new Set(e):null}setSurfaceGrab(e){this.surfaceGrab=e}pointerRay(e,t){return this.surfaceRay(e,t)}furnitureIdAt(e,t){return this.furnitureAt(e,t)?.id??null}surfaceRay(e,t){let n=this.rayAt(e,t).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(e,t){if(this.surfaceGrab?.start(this.surfaceRay(e,t)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(e,t),l=s??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(d=>d.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,e,t)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,e,t):this.grabItem(a,s,e,t)}let o=this.furnitureAt(e,t);if(!o){let s=this.pick(e,t);return s&&"entity"in s?this.grabDevice(s.entity,e,t):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,e,t,o.y)}grabItem(e,t,n,r,o){let s=e.floor.furniture.find(h=>h.id===t),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(e,n,r,a);if(!s||!l)return!1;let c,u=this.rayAt(n,r).ray.direction;if(o!==void 0&&-u.y<.34){let h=this.camera.position,d=this.camera.getWorldDirection(new U),f=Math.hypot(d.x,d.z)||1,p=[d.x/f,d.z/f],g=Math.hypot(l[0]-h.x,l[1]-h.z,(a??0)-h.y),m=this.renderer.domElement.getBoundingClientRect().height||1,_=2*g*Math.tan(this.camera.fov*Math.PI/360)/m;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-p[1],p[0]],fwd:p,perPx:_,gain:Math.min(2,1/Math.max(.5,-u.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:e.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(e,t,n){let r=this.devices.find(a=>a.id===e),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,t,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(e),this.options.onDeviceSelect?.(e),!1):(this.deviceGrab={id:e,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(e),this.options.onDeviceSelect?.(e),!0)}setSelectedDevice(e){e!==this.selectedDevice&&this.selectDevice(e)}selectDevice(e){e&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=e;for(let[t,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",t===e)}dragFurniture(e,t){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(e,t));return}let n=this.deviceGrab;if(n){let d=this.floorMap.get(n.floorId),f=this.devices.find(m=>m.id===n.id),p=d&&this.floorPoint(d,e,t);if(!d||!f||!p)return;let g=this.building?.settings.grid??.05;n.x=f.x=Math.round((p[0]+n.offset[0])/g)*g,n.z=f.z=Math.round((p[1]+n.offset[1])/g)*g,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=r.screen,a;if(s){let d=(e-s.x0)*s.perPx,f=(t-s.y0)*s.perPx*s.gain;a=[s.fx+s.right[0]*d-s.fwd[0]*f-r.offset[0],s.fz+s.right[1]*d-s.fwd[1]*f-r.offset[1]]}else a=this.floorPoint(o,e,t,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=o.floor.furniture.find(d=>d.id===r.id),u=Math.round((a[0]+r.offset[0])/l)*l,h=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?Qp(o.floor,c,u,h,this.building?.settings.wall_interior??0):[u,h],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let e=this.deviceGrab;this.deviceGrab=null,e?.moved&&this.options.onDeviceMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3);let t=this.grab;this.grab=null,t?.moved&&this.options.onFurnitureMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let e=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],t=new Nt,n;for(let r of e){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(t,o,s,r===this.selectedFurniture?new Q(.25,.9,1):new Q(1,.71,.28)))}n&&(this.ghost=new Zt(t.geometry(),new qt({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(e,t,n,r){let o=e.p.length,s=this.grab?.id===n.id?this.grab.x:n.x,a=this.grab?.id===n.id?this.grab.z:n.z,l=ho(t.floor,n.x,n.z),c=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,u=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=n.mount_y!=null||yt(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Pt(t.floor,n):c?n.type==="lamp_pendant"?l-n.h-.1:l-u:Pt(t.floor,n),d=n.rotation*ut,f=Math.cos(d),p=Math.sin(d),g=(w,b,y)=>[s+w*f-b*p,y,a+w*p+b*f],m=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let w=0;w<4;w++){let[b,y]=m[w],[M,E]=m[(w+1)%4];e.seg(g(b,y,h+.01),g(M,E,h+.01),r),e.seg(g(b,y,h+u),g(M,E,h+u),r),e.seg(g(b,y,h+.01),g(b,y,h+u),r)}e.seg(g(-n.w/2,n.d/2+.03,h+.02),g(n.w/2,n.d/2+.03,h+.02),new Q(1,1,1));let _={...n,x:s,z:a},x=h+n.h/2;if(n.type==="led_strip"&&(Pn(e.p,o,{..._,rotation_x:n.tilt,rotation_z:n.upright?90:0},x),n.upright)){let w=n.w/2-n.h/2;for(let b=o+1;b<e.p.length;b+=3)e.p[b]+=w;x+=w}Pn(e.p,o,_,x)}onHold(e,t){let n=this.pick(e,t);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,e,t)}swipeStart(e,t,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(e,t);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,e,t)!==!0?!1:(this.swipe={entity:o.entity,x:e,y:t},!0)}floorThumbnails(e=200,t=150){let n=this.floors.filter(_=>_.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(e*r),s=Math.round(t*r),a=new rn(o,s);a.texture.colorSpace=Dt;let l=new jn(-1,1,1,-1,.1,400),c=this.floors.map(_=>({fv:_,visible:_.group.visible,y:_.y,o:_.o,standing:_.mask.standing.value,glass:_.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,d=this.renderer.getClearAlpha(),f=new Uint8Array(o*s*4),p=document.createElement("canvas");p.width=o,p.height=s;let g=p.getContext("2d"),m=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let _ of n){for(let P of this.floors)P.group.visible=P===_;_.y=0,_.o=1,this.applyFloor(_),_.group.visible=!0,_.mask.standing.value=0,_.mask.glass.value=0;let x=_.floor.rooms.flatMap(P=>P.points),w=_.floor.elevation,b=new cn(new U(Math.min(...x.map(P=>P[0]))-.3,w,Math.min(...x.map(P=>P[1]))-.3),new U(Math.max(...x.map(P=>P[0]))+.3,w+Math.min(_.floor.cut_height,_.floor.height),Math.max(...x.map(P=>P[1]))+.3)),y=b.getCenter(new U),M=-.6,E=.8,v=new U(Math.sin(E)*Math.sin(M),Math.cos(E),Math.sin(E)*Math.cos(M));l.position.copy(y).addScaledVector(v,100),l.lookAt(y),l.updateMatrixWorld();let S=.5,T=.5;for(let P of[b.min.x,b.max.x])for(let R of[b.min.y,b.max.y])for(let I of[b.min.z,b.max.z]){let F=new U(P,R,I).applyMatrix4(l.matrixWorldInverse);S=Math.max(S,Math.abs(F.x)),T=Math.max(T,Math.abs(F.y))}let A=o/s;S/T>A?T=S/A:S=T*A,l.left=-S*1.05,l.right=S*1.05,l.top=T*1.05,l.bottom=-T*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,f);let C=g.createImageData(o,s);for(let P=0;P<s;P++)C.data.set(f.subarray((s-1-P)*o*4,(s-P)*o*4),P*o*4);g.putImageData(C,0,0),m.push({floorId:_.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(d);for(let _ of c)_.fv.y=_.y,_.fv.o=_.o,_.fv.mask.standing.value=_.standing,_.fv.mask.glass.value=_.glass,this.applyFloor(_.fv),_.fv.group.visible=_.visible;this.roof&&(this.roof.group.visible=u,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return m}setRobots(e){let t=new Set;for(let n of e){t.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?H0(n.room,void 0,void 0,n.obstacles):md(n.rest),l=a.length?a:md(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=h)}),r.motion.path=l,r.motion.next=c,n.room&&!Ge(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Z0[n.mode])}for(let[n,r]of this.robots)t.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(e){if(!this.robotGeo){let r=new rt,o=(a,l,c,u,h)=>{let d=[];for(let f=0;f<20;f++)d.push([Math.cos(f/20*Math.PI*2)*a,Math.sin(f/20*Math.PI*2)*a]);wt(r,d,l,c,u,h,{aoFrom:0,bottom:!1})};o(.17,.012,.08,2371657,3424863),o(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new nt({vertexColors:!0});let s=new rt;wt(s,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=s.geometry()}let t=new Rt,n=new nt({color:Z0[e.mode]});return t.add(new Oe(this.robotGeo,this.robotMat),new Oe(this.robotLedGeo,n)),{info:e,motion:{pos:[...e.rest],heading:e.restHeading,path:[],next:0},group:t,led:n}}stepRobots(e){if(!this.robots.size)return!1;let t=this.robotLast?Math.min(.2,(e-this.robotLast)/1e3):0;this.robotLast=e;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),t>0?n=W0(r.motion,r.info,t)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],pn(o.floor,r.motion.pos[0],r.motion.pos[1]),r.motion.pos[1]),r.group.visible=!r.info.inModel||r.info.mode==="cleaning"||Math.hypot(r.motion.pos[0]-r.info.rest[0],r.motion.pos[1]-r.info.rest[1])>.05,r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(e,t=[]){let n=a=>new Q(.25-.2*a,.95-.83*a,1-.7*a),r=new Q(0,0,0),o=new Q(.3,1,.6),s=.02;for(let a of this.floors){let l=new rt;for(let u of t)u.floorId===a.floor.id&&u.points.forEach(([h,d],f)=>{let p=u.points[f-1];if(p){let g=Math.hypot(h-p[0],d-p[1])||1,m=-(d-p[1])/g*.1,_=(h-p[0])/g*.1;l.tri([p[0]+m,s,p[1]+_],[h+m,s,d+_],[h-m,s,d-_],o,o,o),l.tri([p[0]+m,s,p[1]+_],[h-m,s,d-_],[p[0]-m,s,p[1]-_],o,o,o)}for(let g=0;g<10;g++){let m=g/10*Math.PI*2,_=(g+1)/10*Math.PI*2;l.tri([h,s,d],[h+Math.cos(_)*.35,s,d+Math.sin(_)*.35],[h+Math.cos(m)*.35,s,d+Math.sin(m)*.35],o,r,r)}});let c=null;for(let u of e){if(u.floorId!==a.floor.id)continue;let h=n(u.age);if(c){let d=Math.hypot(u.x-c.x,u.z-c.z)||1,f=-(u.z-c.z)/d*.06,p=(u.x-c.x)/d*.06,g=n(c.age);l.tri([c.x+f,s,c.z+p],[u.x+f,s,u.z+p],[u.x-f,s,u.z-p],g,h,h),l.tri([c.x+f,s,c.z+p],[u.x-f,s,u.z-p],[c.x-f,s,c.z-p],g,h,g)}for(let d=0;d<12;d++){let f=d/12*Math.PI*2,p=(d+1)/12*Math.PI*2;l.tri([u.x,s,u.z],[u.x+Math.cos(p)*.22,s,u.z+Math.sin(p)*.22],[u.x+Math.cos(f)*.22,s,u.z+Math.sin(f)*.22],h,r,r)}c=u}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(e,t=900){this.controls.flyTo(e,t)}lookThrough(e){let t=this.devices.find(c=>c.id===e&&c.model),n=t&&this.floorMap.get(t.floorId);if(!t||!n)return!1;let r=(t.rotation??0)*ut,o=t.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(t.tilt??(o?65:20))*ut)),a=n.floor.elevation+n.ty+(o?(t.top??n.floor.height)-.1:t.y),l=new U(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new U(t.x,a,t.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(e){let t=performance.now()+Vc;for(let n of e)this.flashes.set(n,t);e.length&&this.invalidate()}focus(e,t,n,r,o){let s=this.floorMap.get(e);if(s){if(this.controls.flyTo({target:new U(t,s.floor.elevation+s.ty+r,n),radius:5.5,phi:.78},900),o){this.flashes.set(o,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(e){if(this.frame=0,this.disposed)return;let t=this.lastFrame?Math.min(100,e-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,e-this.orbitLast)/1e3),this.orbitLast=e,n=!0):this.orbitLast=0;let r=this.controls.update(e),o=this.stepFloors(t),s=!1;for(let[p,g]of this.customLayers){let m=this.floorMap.get(p);m&&(g.clip(this.wallMode==="cut"?m.floor.cut_height:null,m.group.position.y,m.o),m.o>.02&&(s=g.step(t)||s))}let a=this.stepOpenings(t)||this.stepFridges(t)||s,l=!1;if(this.flashes.size){let p=new Set;for(let[g,m]of this.flashes){let _=this.deviceFloor.get(g);_&&p.add(_),m<=e&&this.flashes.delete(g)}l=this.flashes.size>0;for(let g of this.floors)p.has(g.floor.id)&&this.buildLamps(g)}let c=this.placeRoof(t),u=this.stepRobots(e),h=this.stepWeather(e),d=r||o||a||l||c,f=[];if((r||this.controls.busy)&&f.push("camera"),o&&f.push("floors"),a&&f.push("openings"),l&&f.push("flash"),c&&f.push("roof"),this.flowActive&&f.push("flow"),this.soundActive&&f.push("sound"),this.poolActive&&f.push("pool"),this.solarActive&&f.push("solar"),this.effectTick&&f.push("effect"),u&&f.push("robot"),n&&f.push("orbit"),this.tintTick&&f.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=d?e:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(e),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(e,f),d&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let p=this.lowQuality?2*eg:eg;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=p/1e3,this.effectTick=!0;for(let g of this.floors)g.o<.02||!this.effectFloors.has(g.floor.id)||(this.buildLamps(g),this.buildGlow(g));this.invalidate()},p)}!d&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!d&&h&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!d&&u&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!d&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*j0:j0))}updateWalls(){let e=this.camera.position,t=this.controls.view.target,n=e.x-t.x,r=e.z-t.z,o=Math.hypot(n,r)||1;this.roofDirection.value.set(n/o,(e.y-t.y)/Math.hypot(o,e.y-t.y),r/o);for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((u,h)=>{let d=u?u[0]*n/o+u[1]*r/o>=.25:a;!l&&d&&(c|=1<<h)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let e=this.controls.view,t=this.viewKey;return t[0]===e.target.x&&t[1]===e.target.y&&t[2]===e.target.z&&t[3]===e.radius&&t[4]===e.theta&&t[5]===e.phi?!1:(t[0]=e.target.x,t[1]=e.target.y,t[2]=e.target.z,t[3]=e.radius,t[4]=e.theta,t[5]=e.phi,!0)}place(e,t){let n=t===null;e.hidden!==n&&(e.hidden=n),t!==null&&this.placed.get(e)!==t&&(this.placed.set(e,t),e.style.transform=t)}updateLabels(){let{w:e,h:t}=this.size,n=new U,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,u=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let g of[a.x0,a.x1])for(let m of[a.z0,a.z1]){n.set(g,u,m).project(this.camera);let _=(n.x+1)/2*e,x=(1-n.y)/2*t;(!l||_<l.x)&&(l={x:_,y:x}),(!c||_>c.x)&&(c={x:_,y:x})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let h=s.labelSize.w,d=8+this.labelInset,f=l.x-h-14,p=l.y;f<d&&this.labelInset&&(f=c.x+14,p=c.y),o.push({fv:s,left:Math.max(d,Math.min(e-h-8,f)),y:p,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new U(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?Lc(this.controls.view.radius,this.houseRadius,this.keepRoof,this.roofO).lift:0),s.p[2]),u=this.camera.position.clone().sub(c),h=u.length(),d=u.normalize().dot(new U(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let f=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,h)))*s.size;this.anchorCb(a,(n.x+1)/2*e,(1-n.y)/2*t,!f,p,d)}),this.updateDevicePins(e,t);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l+mt(s.floor,c.room),c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}}otherFloor(e){return this.floorId!==null&&e.floor.id!==this.floorId}updateDevicePins(e,t){let n=new U,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null);continue}n.set(o.x,a.floor.elevation+a.y+.9,o.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,l?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let u=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==u&&(this.pinMode.set(s,u),s.classList.toggle("fp3d-dev-full",u==="full"),s.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(s,`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}reportStats(e,t){if(!this.statsOn||!this.options.onStats)return;let n=t.length>0;this.fpsStart||(this.fpsStart=e),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,e-this.lastStatsFrame)),this.lastStatsFrame=n?e:0,this.fpsFrames++;let r=e-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:t,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=JM(this.renderer)}),this.fpsFrames=0,this.fpsStart=e,this.worstFrame=0}}};function JM(i){try{let e=i.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER);return typeof n=="string"?n:null}catch{return null}}function jM(){let e=document.createElement("canvas");e.width=256*3,e.height=256*2;let t=e.getContext("2d"),n=(s,a,l,c,u)=>{t.strokeStyle=`rgba(55,224,255,${u})`,t.beginPath(),t.moveTo(s,a),t.lineTo(l,c),t.stroke()};t.lineWidth=1.5;let r=(s,a,l)=>{t.save(),t.beginPath(),t.rect(s*256,a*256,256,256),t.clip(),l(s*256,a*256),t.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let u=s+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(s+h+.75,c,s+h+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),t.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)t.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new zn(e);return o.flipY=!1,o.wrapS=vn,o.wrapT=vn,o.anisotropy=4,o.colorSpace=Dt,o}function QM(i){let e=new nt({map:i,transparent:!0,blending:Lt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},e.customProgramCacheKey=()=>"fp3d-pattern",e}function eS(){let i=document.createElement("canvas");i.width=8,i.height=32;let e=i.getContext("2d");e.fillStyle="#1a2742",e.fillRect(0,0,8,32),e.fillStyle="#223556",e.fillRect(0,4,8,14),e.fillStyle="rgba(55,224,255,0.45)",e.fillRect(0,29,8,2);let t=new zn(i);return t.wrapS=ar,t.wrapT=ar,t.colorSpace=Dt,t}function _d(i){let e=t=>Math.round(t*100);return`${i.floorId}:${i.a.map(e).join(",")}>${i.b.map(e).join(",")}`}function tg(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function tS(i){let e=new nt({vertexColors:!0,transparent:!0,blending:Lt,depthWrite:!1,side:lt});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},e.customProgramCacheKey=()=>"fp3d-flow",e}function ng(i,e){let t=i.rooms.map((r,o)=>o),n=r=>t[r]===r?r:t[r]=n(t[r]);for(let[r,o]of e){let s=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(t[Math.max(l,c)]=Math.min(l,c))}return t.map((r,o)=>n(o))}function nS(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new zn(e);return r.colorSpace=Dt,r}function iS(){let e=bd,t=document.createElement("canvas");t.width=1024,t.height=1024;let n=t.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=e;s++){let a=Math.round(s/e*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new zn(t);return o.anisotropy=4,o.colorSpace=Dt,o}function _3(i,e){return new xd(i,e)}function gd(i,e,t,n){t=e.top??t;let r=i.p.length;rS(i,e,t,n),Pn(i.p,r,e,Gc(e,t))}function Gc(i,e){if(i.pivot_y!=null)return i.pivot_y;let[t,,n]=i.size??(i.lamp?Hc[i.lamp]:[.3,.3,.3]);return i.lamp&&vd.has(i.lamp)?e-n/2:(i.base??0)+(i.lamp==="strip"&&i.upright?t:n)/2}function rS(i,e,t,n){let[r,o,s]=e.size??Hc[e.lamp],a=e.base??0,l=(e.rotation??0)*ut,c=Math.cos(l),u=Math.sin(l),h=(g,m)=>[e.x+g*c-m*u,e.z+g*u+m*c],d=(g,m,_,x,w,b=14)=>{let y=[];for(let M=0;M<b;M++){let E=M/b*Math.PI*2;y.push([e.x+Math.cos(E)*g,e.z+Math.sin(E)*g])}wt(i,y,m,_,x,w,{aoFrom:0,bottom:!0})},f=(g,m,_,x,w,b,y,M=y)=>wt(i,[h(g,_),h(m,_),h(m,x),h(g,x)],w,b,y,M,{aoFrom:0,bottom:!0}),p=Math.max(.05,Math.min(r,o)/2);switch(e.lamp){case"ceiling":d(p*.25,t-.04,t,st,st,8),d(p,t-Math.max(.04,s)-.035,t-.04,n,n);break;case"pendant":{let g=Math.max(.4,t-s);d(.06,t-.02,t,st,st,8);let m=e.variant==="globe"?g+2*p:e.variant==="drum"?g+.24:g+.2;if(d(.008,m,t-.02,st,st,5),e.variant==="globe")for(let x=0;x<7;x++){let w=Math.PI*(x/7),b=Math.PI*((x+1)/7);d(p*Math.max(.2,Math.sin((w+b)/2)),g+p-p*Math.cos(w),g+p-p*Math.cos(b),n,n,14)}else if(e.variant==="cone")for(let x=0;x<4;x++)d(p*(.25+.75*(4-x)/4),g+.06*x,g+.06*(x+1),n,n,16);else e.variant==="drum"?d(p,g,g+.24,n,n,18):(d(p*.35,g+.14,g+.2,n,n,12),d(p,g,g+.14,n,n,16));break}case"downlight":d(p,t-.012,t,st,st,12),d(p*.7,t-.02,t-.012,n,n,12);break;case"spot":d(p*.6,t-.02,t,st,st,10),d(p,t-Math.max(.06,s),t-.02,st,st,12),d(p*.8,t-Math.max(.06,s)-.008,t-Math.max(.06,s),n,n,12);break;case"panel":f(-r/2,r/2,-o/2,o/2,t-Math.max(.015,s),t,st,st),f(-r/2+.02,r/2-.02,-o/2+.02,o/2-.02,t-Math.max(.015,s)-.004,t-Math.max(.015,s),n);break;case"uplight":d(Math.max(.1,p*.6),a,a+.03,st,st),d(.014,a+.03,a+s-.12,st,st,6),d(p,a+s-.14,a+s-.02,st,st),d(p*.92,a+s-.02,a+s,n,n);break;case"bollard":d(p,a,a+s-.14,st,st,10),d(p*.9,a+s-.14,a+s-.03,n,n,10),d(p*1.1,a+s-.03,a+s,st,st,10);break;case"garden":d(.012,a,a+s-.08,st,st,5),d(p,a+s-.08,a+s-.01,st,st,10),d(p*.8,a+s-.01,a+s,n,n,10);break;case"floor":d(Math.max(.1,p*.7),a,a+.03,st,st),d(.014,a+.03,a+s-.28,st,st,6),d(p,a+s-.3,a+s,n,n);break;case"table":d(Math.max(.05,p*.55),a,a+.03,st,st),d(.012,a+.03,a+s-.16,st,st,6),d(p,a+s-.18,a+s,n,n);break;case"wall":{let g=e.base??oc;f(-r/2+.03,r/2-.03,-o/2,-o/2+.02,g,g+s,st),f(-r/2,r/2,-o/2+.02,o/2,g+s*.15,g+s*.85,n);break}case"strip":{let g=Math.max(.02,s),m=e.base!=null?e.base+g:t-.04;if(!e.roll&&!e.upright){f(-r/2,r/2,-o/2,o/2,m-g,m,n);break}let _=(e.roll??0)*ut,x=Math.cos(_),w=Math.sin(_),b=e.upright?a+r/2:m-g/2,y=(T,A,C)=>{let P=T,R=A*x-C*w,I=A*w+C*x;return e.upright&&([P,R]=[-R,P]),[e.x+P*c-I*u,b+R,e.z+P*u+I*c]},M=[y(-r/2,-g/2,-o/2),y(r/2,-g/2,-o/2),y(r/2,-g/2,o/2),y(-r/2,-g/2,o/2),y(-r/2,g/2,-o/2),y(r/2,g/2,-o/2),y(r/2,g/2,o/2),y(-r/2,g/2,o/2)],E=new Q(n),v=[e.x,b,e.z],S=(T,A,C,P)=>{let[R,I,F]=[M[T],M[A],M[C]],z=[(I[1]-R[1])*(F[2]-R[2])-(I[2]-R[2])*(F[1]-R[1]),(I[2]-R[2])*(F[0]-R[0])-(I[0]-R[0])*(F[2]-R[2]),(I[0]-R[0])*(F[1]-R[1])-(I[1]-R[1])*(F[0]-R[0])],B=[R[0]-v[0],R[1]-v[1],R[2]-v[2]],N=z[0]*B[0]+z[1]*B[1]+z[2]*B[2]<0,[O,G,J,j]=N?[M[P],M[C],M[A],M[T]]:[M[T],M[A],M[C],M[P]];i.tri(O,G,J,E,E,E),i.tri(O,J,j,E,E,E)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{td as FloorMap,xd as FloorplanViewer,nd as WalkCamera,_3 as createViewer,e3 as funLib,VM as furnitureFront,UM as furniturePreview,$M as isLowEnd,gd as pushLampModel};
