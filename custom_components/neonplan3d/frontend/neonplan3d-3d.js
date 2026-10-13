var _f=0,Iu=1,bf=2;var as=1,vf=2,oo=3,Di=0,un=1,ht=2,ei=0,Ni=1,Ft=2,Lu=3,ls=4,xf=5;var dr=100,yf=101,wf=102,Mf=103,Sf=104,Tf=200,Af=201,Ef=202,Rf=203,Fu=204,Du=205,Pf=206,kf=207,Cf=208,If=209,Lf=210,Ff=211,Df=212,Nf=213,zf=214,Aa=0,Ea=1,Ra=2,qr=3,Pa=4,ka=5,Ca=6,Ia=7,Nu=0,Bf=1,Of=2,Un=0,zu=1,Bu=2,Ou=3,Uu=4,Vu=5,Gu=6,Hu=7;var Wu=300,zi=301,fr=302,fl=303,pl=304,cs=306,ar=1e3,vn=1001,La=1002,Kt=1003,Uf=1004;var us=1005;var qt=1006,ml=1007;var Bi=1008;var yn=1009,Xu=1010,Ku=1011,so=1012,gl=1013,Vn=1014,Gn=1015,Hn=1016,_l=1017,bl=1018,ao=1020,Yu=35902,qu=35899,Zu=1021,$u=1022,Rn=1023,$n=1026,Oi=1027,Ju=1028,vl=1029,Ui=1030,xl=1031;var yl=1033,hs=33776,ds=33777,fs=33778,ps=33779,wl=35840,Ml=35841,Sl=35842,Tl=35843,Al=36196,El=37492,Rl=37496,Pl=37488,kl=37489,ms=37490,Cl=37491,Il=37808,Ll=37809,Fl=37810,Dl=37811,Nl=37812,zl=37813,Bl=37814,Ol=37815,Ul=37816,Vl=37817,Gl=37818,Hl=37819,Wl=37820,Xl=37821,Kl=36492,Yl=36494,ql=36495,Zl=36283,$l=36284,gs=36285,Jl=36286;var Do=2300,Fa=2301,Ma=2302,yu=2303,wu=2400,Mu=2401,Su=2402;var Vf=3200;var ju=0,Gf=1,fi="",Nt="srgb",No="srgb-linear",zo="linear",xt="srgb";var Sa=7680;var Hf=519,Wf=512,Xf=513,Kf=514,jl=515,Yf=516,qf=517,Ql=518,Zf=519,$f=35044,Qu=35048;var eh="300 es",Nn=2e3,Bo=2001;function fg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jf(){let i=Zr("canvas");return i.style.display="block",i}var Nd={},$r=null;function th(...i){let e="THREE."+i.shift();$r?$r("log",e,...i):console.log(e,...i)}function jf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=jf(i);let e="THREE."+i.shift();if($r)$r("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=jf(i);let e="THREE."+i.shift();if($r)$r("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function sr(...i){let e=i.join(" ");e in Nd||(Nd[e]=!0,Xe(...i))}function Qf(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}var ep={[Aa]:Ea,[Ra]:Ca,[Pa]:Ia,[qr]:ka,[Ea]:Aa,[Ca]:Ra,[Ia]:Pa,[ka]:qr},Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zc=Math.PI/180,Da=180/Math.PI;function _s(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function mg(i,e){return(i%e+e)%e}function $c(i,e,t){return(1-t)*i+t*e}function Ao(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ah=class ah{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ah.prototype.isVector2=!0;var Ee=ah,jn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],h=o[s+0],f=o[s+1],p=o[s+2],_=o[s+3];if(d!==_||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*_;m<0&&(h=-h,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let w=Math.acos(m),y=Math.sin(w);g=Math.sin(g*w)/y,a=Math.sin(a*w)/y,l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+_*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+_*a;let w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=o[s],h=o[s+1],f=o[s+2],p=o[s+3];return e[t]=a*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-a*f,e[t+2]=c*p+u*f+a*h-l*d,e[t+3]=u*p-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(o/2),h=l(n/2),f=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(o-c)*f,this._z=(s-r)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(o+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(o-c)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(s-r)/f,this._x=(o+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lh=class lh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*u,this.y=n+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lh.prototype.isVector3=!0;var U=lh,Jc=new U,zd=new jn,ch=class ch{constructor(e,t,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],_=r[0],m=r[3],g=r[6],w=r[1],y=r[4],b=r[7],x=r[2],M=r[5],A=r[8];return o[0]=s*_+a*w+l*x,o[3]=s*m+a*y+l*M,o[6]=s*g+a*b+l*A,o[1]=c*_+u*w+d*x,o[4]=c*m+u*y+d*M,o[7]=c*g+u*b+d*A,o[2]=h*_+f*w+p*x,o[5]=h*m+f*y+p*M,o[8]=h*g+f*b+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,h=a*l-u*o,f=c*o-s*l,p=t*d+n*h+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=d*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*s)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*o-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*o)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(e,t)),this}rotate(e){return sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-e)),this}translate(e,t){return sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ch.prototype.isMatrix3=!0;var $e=ch,jc=new $e,Bd=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Od=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gg(){let i={enabled:!0,workingColorSpace:No,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===xt&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===xt&&(r.r=Yr(r.r),r.g=Yr(r.g),r.b=Yr(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fi?zo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[No]:{primaries:e,whitePoint:n,transfer:zo,toXYZ:Bd,fromXYZ:Od,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Bd,fromXYZ:Od,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}var ut=gg();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Lr,Na=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lr===void 0&&(Lr=Zr("canvas")),Lr.width=e.width,Lr.height=e.height;let r=Lr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Lr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=hi(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_g=0,Jr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=_s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Qc(r[s].image)):o.push(Qc(r[s]))}else o=Qc(r);n.url=o}return t||(e.images[this.uuid]=n),n}};function Qc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Na.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var bg=0,eu=new U,nn=class i extends Jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vn,r=vn,o=qt,s=Bi,a=Rn,l=yn,c=i.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=_s(),this.name="",this.source=new Jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eu).x}get height(){return this.source.getSize(eu).y}get depth(){return this.source.getSize(eu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ar:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ar:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Wu;nn.DEFAULT_ANISOTROPY=1;var uh=class uh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,b=(f+1)/2,x=(g+1)/2,M=(u+h)/4,A=(d+_)/4,v=(p+m)/4;return y>b&&y>x?y<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(y),r=M/n,o=A/n):b>x?b<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),n=M/r,o=v/r):x<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(x),n=A/o,r=v/o),this.set(n,r,o,t),this}let w=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-p)/w,this.y=(d-_)/w,this.z=(h-u)/w,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uh.prototype.isVector4=!0;var Lt=uh,za=class extends Jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},o=new nn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Jr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends za{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oo=class extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ba=class extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var dl=class dl{constructor(e,t,n,r,o,s,a,l,c,u,d,h,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,d,h,f,p,_,m)}set(e,t,n,r,o,s,a,l,c,u,d,h,f,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=o,g[5]=s,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),o=1/Fr.setFromMatrixColumn(e,1).length(),s=1/Fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){let h=s*u,f=s*d,p=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=p+f*c,t[10]=s*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,p=c*u,_=c*d;t[0]=h+_*a,t[4]=p*a-f,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=f*a-p,t[6]=_+h*a,t[10]=s*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,p=c*u,_=c*d;t[0]=h-_*a,t[4]=-s*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=s*u,t[9]=_-h*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){let h=s*u,f=s*d,p=a*u,_=a*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){let h=s*l,f=s*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=p*d+f,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-_*d}else if(e.order==="XZY"){let h=s*l,f=s*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=s*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vg,e,xg)}lookAt(e,t,n){let r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),wi.crossVectors(n,gn),wi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),wi.crossVectors(n,gn)),wi.normalize(),js.crossVectors(gn,wi),r[0]=wi.x,r[4]=js.x,r[8]=gn.x,r[1]=wi.y,r[5]=js.y,r[9]=gn.y,r[2]=wi.z,r[6]=js.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],w=n[3],y=n[7],b=n[11],x=n[15],M=r[0],A=r[4],v=r[8],S=r[12],E=r[1],P=r[5],C=r[9],R=r[13],T=r[2],I=r[6],F=r[10],z=r[14],B=r[3],N=r[7],O=r[11],G=r[15];return o[0]=s*M+a*E+l*T+c*B,o[4]=s*A+a*P+l*I+c*N,o[8]=s*v+a*C+l*F+c*O,o[12]=s*S+a*R+l*z+c*G,o[1]=u*M+d*E+h*T+f*B,o[5]=u*A+d*P+h*I+f*N,o[9]=u*v+d*C+h*F+f*O,o[13]=u*S+d*R+h*z+f*G,o[2]=p*M+_*E+m*T+g*B,o[6]=p*A+_*P+m*I+g*N,o[10]=p*v+_*C+m*F+g*O,o[14]=p*S+_*R+m*z+g*G,o[3]=w*M+y*E+b*T+x*B,o[7]=w*A+y*P+b*I+x*N,o[11]=w*v+y*C+b*F+x*O,o[15]=w*S+y*R+b*z+x*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],w=l*f-c*h,y=a*f-c*d,b=a*h-l*d,x=s*f-c*u,M=s*h-l*u,A=s*d-a*u;return t*(_*w-m*y+g*b)-n*(p*w-m*x+g*M)+r*(p*y-_*x+g*A)-o*(p*b-_*M+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[1],s=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(s*u-a*c)-n*(o*u-a*l)+r*(o*c-s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],w=t*a-n*s,y=t*l-r*s,b=t*c-o*s,x=n*l-r*a,M=n*c-o*a,A=r*c-o*l,v=u*_-d*p,S=u*m-h*p,E=u*g-f*p,P=d*m-h*_,C=d*g-f*_,R=h*g-f*m,T=w*R-y*C+b*P+x*E-M*S+A*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return e[0]=(a*R-l*C+c*P)*I,e[1]=(r*C-n*R-o*P)*I,e[2]=(_*A-m*M+g*x)*I,e[3]=(h*M-d*A-f*x)*I,e[4]=(l*E-s*R-c*S)*I,e[5]=(t*R-r*E+o*S)*I,e[6]=(m*b-p*A-g*y)*I,e[7]=(u*A-h*b+f*y)*I,e[8]=(s*C-a*E+c*v)*I,e[9]=(n*E-t*C-o*v)*I,e[10]=(p*M-_*b+g*w)*I,e[11]=(d*b-u*M-f*w)*I,e[12]=(a*S-s*P-l*v)*I,e[13]=(t*P-n*S+r*v)*I,e[14]=(_*y-p*x-m*w)*I,e[15]=(u*x-d*y+h*w)*I,this}scale(e){let t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,h=o*c,f=o*u,p=o*d,_=s*u,m=s*d,g=a*d,w=l*c,y=l*u,b=l*d,x=n.x,M=n.y,A=n.z;return r[0]=(1-(_+g))*x,r[1]=(f+b)*x,r[2]=(p-y)*x,r[3]=0,r[4]=(f-b)*M,r[5]=(1-(h+g))*M,r[6]=(m+w)*M,r[7]=0,r[8]=(p+y)*A,r[9]=(m-w)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let s=Fr.set(r[0],r[1],r[2]).length(),a=Fr.set(r[4],r[5],r[6]).length(),l=Fr.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Ln.copy(this);let c=1/s,u=1/a,d=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,t.setFromRotationMatrix(Ln),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,o,s,a=Nn,l=!1){let c=this.elements,u=2*o/(t-e),d=2*o/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r),p,_;if(l)p=o/(s-o),_=s*o/(s-o);else if(a===Nn)p=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===Bo)p=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=Nn,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),f=-(n+r)/(n-r),p,_;if(l)p=1/(s-o),_=s/(s-o);else if(a===Nn)p=-2/(s-o),_=-(s+o)/(s-o);else if(a===Bo)p=-1/(s-o),_=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};dl.prototype.isMatrix4=!0;var Pt=dl,Fr=new U,Ln=new Pt,vg=new U(0,0,0),xg=new U(1,1,1),wi=new U,js=new U,gn=new U,Ud=new Pt,Vd=new jn,zn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ud,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yg=0,Gd=new U,Dr=new jn,si=new Pt,Qs=new U,Eo=new U,wg=new U,Mg=new jn,Hd=new U(1,0,0),Wd=new U(0,1,0),Xd=new U(0,0,1),Kd={type:"added"},Sg={type:"removed"},Nr={type:"childadded",child:null},tu={type:"childremoved",child:null},fn=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new zn,n=new jn,r=new U(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new $e}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(Hd,e)}rotateY(e){return this.rotateOnAxis(Wd,e)}rotateZ(e){return this.rotateOnAxis(Xd,e)}translateOnAxis(e,t){return Gd.copy(e).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hd,e)}translateY(e){return this.translateOnAxis(Wd,e)}translateZ(e){return this.translateOnAxis(Xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Eo,Qs,this.up):si.lookAt(Qs,Eo,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(si),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kd),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sg),tu.child=e,this.dispatchEvent(tu),tu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kd),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,Mg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*r,o[13]+=n-o[1]*t-o[5]*n-o[9]*r,o[14]+=r-o[2]*t-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){let a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),f=s(e.animations),p=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function s(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};fn.DEFAULT_UP=new U(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tg={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},ea={h:0,s:0,l:0};function nu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ut.workingColorSpace){if(e=mg(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=nu(s,o,e+1/3),this.g=nu(s,o,e),this.b=nu(s,o,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=Nt){function n(o){o!==void 0&&parseFloat(o)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=tp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ut.workingToColorSpace(en.copy(this),e),Math.round(rt(en.r*255,0,255))*65536+Math.round(rt(en.g*255,0,255))*256+Math.round(rt(en.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(en.copy(this),t);let n=en.r,r=en.g,o=en.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,u=(a+s)/2;if(a===s)l=0,c=0;else{let d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Nt){ut.workingToColorSpace(en.copy(this),e);let t=en.r,n=en.g,r=en.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(ea);let n=$c(Mi.h,ea.h,t),r=$c(Mi.s,ea.s,t),o=$c(Mi.l,ea.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Q;Q.NAMES=tp;var Uo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Q(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ri=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new U,ai=new U,iu=new U,li=new U,zr=new U,Br=new U,Yd=new U,ru=new U,ou=new U,su=new U,au=new Lt,lu=new Lt,cu=new Lt,Ei=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Fn.subVectors(r,t),ai.subVectors(n,t),iu.subVectors(e,t);let s=Fn.dot(Fn),a=Fn.dot(ai),l=Fn.dot(iu),c=ai.dot(ai),u=ai.dot(iu),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,p=(s*u-a*l)*h;return o.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,li.x),l.addScaledVector(s,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return au.setScalar(0),lu.setScalar(0),cu.setScalar(0),au.fromBufferAttribute(e,t),lu.fromBufferAttribute(e,n),cu.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(au,o.x),s.addScaledVector(lu,o.y),s.addScaledVector(cu,o.z),s}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),ai.subVectors(e,t),Fn.cross(ai).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Fn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,o=this.c,s,a;zr.subVectors(r,n),Br.subVectors(o,n),ru.subVectors(e,n);let l=zr.dot(ru),c=Br.dot(ru);if(l<=0&&c<=0)return t.copy(n);ou.subVectors(e,r);let u=zr.dot(ou),d=Br.dot(ou);if(u>=0&&d<=u)return t.copy(r);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(zr,s);su.subVectors(e,o);let f=zr.dot(su),p=Br.dot(su);if(p>=0&&f<=p)return t.copy(o);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Br,a);let m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return Yd.subVectors(o,r),a=(d-u)/(d-u+(f-p)),t.copy(r).addScaledVector(Yd,a);let g=1/(m+_+h);return s=_*g,a=h*g,t.copy(n).addScaledVector(zr,s).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Dn):Dn.fromBufferAttribute(o,s),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),na.subVectors(this.max,Ro),Or.subVectors(e.a,Ro),Ur.subVectors(e.b,Ro),Vr.subVectors(e.c,Ro),Si.subVectors(Ur,Or),Ti.subVectors(Vr,Ur),nr.subVectors(Or,Vr);let t=[0,-Si.z,Si.y,0,-Ti.z,Ti.y,0,-nr.z,nr.y,Si.z,0,-Si.x,Ti.z,0,-Ti.x,nr.z,0,-nr.x,-Si.y,Si.x,0,-Ti.y,Ti.x,0,-nr.y,nr.x,0];return!uu(t,Or,Ur,Vr,na)||(t=[1,0,0,0,1,0,0,0,1],!uu(t,Or,Ur,Vr,na))?!1:(ia.crossVectors(Si,Ti),t=[ia.x,ia.y,ia.z],uu(t,Or,Ur,Vr,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ci=[new U,new U,new U,new U,new U,new U,new U,new U],Dn=new U,ta=new cn,Or=new U,Ur=new U,Vr=new U,Si=new U,Ti=new U,nr=new U,Ro=new U,na=new U,ia=new U,ir=new U;function uu(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){ir.fromArray(i,o);let a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),u=n.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ut=new U,ra=new Ee,Ag=0,An=class extends Jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ag++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$f,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ao(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),r=dn(r,this.array),o=dn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Vo=class extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var lr=class extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Te=class extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}},Eg=new cn,Po=new U,hu=new U,Pi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Eg.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);let t=Po.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Po,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(hu)),this.expandByPoint(Po.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Rg=0,Tn=new Pt,du=new fn,Gr=new U,_n=new cn,ko=new cn,Xt=new U,Ke=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fg(e)?lr:Vo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new $e().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return du.lookAt(e),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let o=t[n];_n.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(_n.min,ko.min),_n.expandByPoint(Xt),Xt.addVectors(_n.max,ko.max),_n.expandByPoint(Xt)):(_n.expandByPoint(ko.min),_n.expandByPoint(ko.max))}_n.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)Xt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(Xt));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(Gr.fromBufferAttribute(e,c),Xt.add(Gr)),r=Math.max(r,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,o=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new An(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new U,l[v]=new U;let c=new U,u=new U,d=new U,h=new Ee,f=new Ee,p=new Ee,_=new U,m=new U;function g(v,S,E){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,E),h.fromBufferAttribute(o,v),f.fromBufferAttribute(o,S),p.fromBufferAttribute(o,E),u.sub(c),d.sub(c),f.sub(h),p.sub(h);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(P),a[v].add(_),a[S].add(_),a[E].add(_),l[v].add(m),l[S].add(m),l[E].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,S=w.length;v<S;++v){let E=w[v],P=E.start,C=E.count;for(let R=P,T=P+C;R<T;R+=3)g(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let y=new U,b=new U,x=new U,M=new U;function A(v){x.fromBufferAttribute(r,v),M.copy(x);let S=a[v];y.copy(S),y.sub(x.multiplyScalar(x.dot(S))).normalize(),b.crossVectors(M,S);let P=b.dot(l[v])<0?-1:1;s.setXYZW(v,y.x,y.y,y.z,P)}for(let v=0,S=w.length;v<S;++v){let E=w[v],P=E.start,C=E.count;for(let R=P,T=P+C;R<T;R+=3)A(e.getX(R+0)),A(e.getX(R+1)),A(e.getX(R+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let r=new U,o=new U,s=new U,a=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new An(h,u,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let o=e.morphAttributes;for(let c in o){let u=[],d=o[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,u=s.length;c<u;c++){let d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var fu=new U,Pg=new U,kg=new $e,bn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=fu.subVectors(n,t).cross(Pg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(fu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kg.getNormalMatrix(e),r=this.coplanarPoint(fu).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cg=0,di=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=Ni,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fu,this.blendDst=Du,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Q(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Q().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ui=new U,pu=new U,oa=new U,sa=new U,cr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){pu.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),sa.copy(this.origin).sub(pu);let o=e.distanceTo(t)*.5,s=-this.direction.dot(oa),a=sa.dot(this.direction),l=-sa.dot(oa),c=sa.lengthSq(),u=Math.abs(1-s*s),d,h,f,p;if(u>0)if(d=s*l-a,h=s*a-l,p=o*u,d>=0)if(h>=-p)if(h<=p){let _=1/u;d*=_,h*=_,f=d*(d+s*h+2*a)+h*(s*d+h+2*l)+c}else h=o,d=Math.max(0,-(s*h+a)),f=-d*d+h*(h+2*l)+c;else h=-o,d=Math.max(0,-(s*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-o,-l),o),f=h*(h+2*l)+c):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+h*(h+2*l)+c);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(pu).addScaledVector(oa,h),f}intersectSphere(e,t){if(e.radius<0)return null;ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),r=ui.dot(ui)-n*n,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(o=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-s.x,h=e.y-s.y,f=e.z-s.z,p=t.x-s.x,_=t.y-s.y,m=t.z-s.z,g=n.x-s.x,w=n.y-s.y,y=n.z-s.z,b=Math.abs(l),x=Math.abs(c),M=Math.abs(u),A,v,S,E,P,C,R,T,I,F,z,B;if(b>=x&&b>=M?(S=l,C=d,I=p,B=g,l>=0?(A=c,v=u,E=h,P=f,R=_,T=m,F=w,z=y):(A=u,v=c,E=f,P=h,R=m,T=_,F=y,z=w)):x>=M?(S=c,C=h,I=_,B=w,c>=0?(A=u,v=l,E=f,P=d,R=m,T=p,F=y,z=g):(A=l,v=u,E=d,P=f,R=p,T=m,F=g,z=y)):(S=u,C=f,I=m,B=y,u>=0?(A=l,v=c,E=d,P=h,R=p,T=_,F=g,z=w):(A=c,v=l,E=h,P=d,R=_,T=p,F=w,z=g)),S===0)return null;let N=A/S,O=v/S,G=1/S,$=E-N*C,Z=P-O*C,ue=R-N*I,ne=T-O*I,ae=F-N*B,H=z-O*B,W=ae*ne-H*ue,se=$*H-Z*ae,he=ue*Z-ne*$;if(r){if(W<0||se<0||he<0)return null}else if((W<0||se<0||he<0)&&(W>0||se>0||he>0))return null;let ie=W+se+he;if(ie===0)return null;let de=G*(W*C+se*I+he*B);return(ie>0?de<0:de>0)?null:this.at(de/ie,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},it=class extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qd=new Pt,rr=new cr,aa=new Pi,Zd=new U,la=new U,ca=new U,ua=new U,mu=new U,ha=new U,$d=new U,da=new U,He=class extends fn{constructor(e=new Ke,t=new it){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){ha.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let u=a[l],d=o[l];u!==0&&(mu.fromBufferAttribute(d,e),s?ha.addScaledVector(mu,u):ha.addScaledVector(mu.sub(t),u))}t.add(ha)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(o),rr.copy(e.ray).recast(e.near),!(aa.containsPoint(rr.origin)===!1&&(rr.intersectSphere(aa,Zd)===null||rr.origin.distanceToSquared(Zd)>(e.far-e.near)**2))&&(qd.copy(o).invert(),rr.copy(e.ray).applyMatrix4(qd),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,h=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,_=h.length;p<_;p++){let m=h[p],g=s[m.materialIndex],w=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=w,x=y;b<x;b+=3){let M=a.getX(b),A=a.getX(b+1),v=a.getX(b+2);r=fa(this,g,e,n,c,u,d,M,A,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let w=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);r=fa(this,s,e,n,c,u,d,w,y,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,_=h.length;p<_;p++){let m=h[p],g=s[m.materialIndex],w=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=w,x=y;b<x;b+=3){let M=b,A=b+1,v=b+2;r=fa(this,g,e,n,c,u,d,M,A,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let w=m,y=m+1,b=m+2;r=fa(this,s,e,n,c,u,d,w,y,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Ig(i,e,t,n,r,o,s,a){let l;if(e.side===un?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Di,a),l===null)return null;da.copy(a),da.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(da);return c<t.near||c>t.far?null:{distance:c,point:da.clone(),object:i}}function fa(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,la),i.getVertexPosition(l,ca),i.getVertexPosition(c,ua);let u=Ig(i,e,t,n,la,ca,ua,$d);if(u){let d=new U;Ei.getBarycoord($d,la,ca,ua,d),r&&(u.uv=Ei.getInterpolatedAttribute(r,a,l,c,d,new Ee)),o&&(u.uv1=Ei.getInterpolatedAttribute(o,a,l,c,d,new Ee)),s&&(u.normal=Ei.getInterpolatedAttribute(s,a,l,c,d,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new U,materialIndex:0};Ei.getNormal(la,ca,ua,h.normal),u.face=h,u.barycoord=d}return u}var Oa=class extends nn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=Kt,u=Kt,d,h){super(null,s,a,l,c,u,r,o,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var or=new Pi,Lg=new Ee(.5,.5),pa=new U,Go=class{constructor(e=new bn,t=new bn,n=new bn,r=new bn,o=new bn,s=new bn){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],c=o[3],u=o[4],d=o[5],h=o[6],f=o[7],p=o[8],_=o[9],m=o[10],g=o[11],w=o[12],y=o[13],b=o[14],x=o[15];if(r[0].setComponents(c-s,f-u,g-p,x-w).normalize(),r[1].setComponents(c+s,f+u,g+p,x+w).normalize(),r[2].setComponents(c+a,f+d,g+_,x+y).normalize(),r[3].setComponents(c-a,f-d,g-_,x-y).normalize(),n)r[4].setComponents(l,h,m,b).normalize(),r[5].setComponents(c-l,f-h,g-m,x-b).normalize();else if(r[4].setComponents(c-l,f-h,g-m,x-b).normalize(),t===Nn)r[5].setComponents(c+l,f+h,g+m,x+b).normalize();else if(t===Bo)r[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);let t=Lg.distanceTo(e.center);return or.radius=.7071067811865476+t,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(pa.x=r.normal.x>0?e.max.x:e.min.x,pa.y=r.normal.y>0?e.max.y:e.min.y,pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zt=class extends di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Q(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ua=new U,Va=new U,Jd=new Pt,Co=new cr,ma=new Pi,gu=new U,jd=new U,Ga=class extends fn{constructor(e=new Ke,t=new Zt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)Ua.fromBufferAttribute(t,r-1),Va.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ua.distanceTo(Va);e.setAttribute("lineDistance",new Te(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),ma.radius+=o,e.ray.intersectsSphere(ma)===!1)return;Jd.copy(r).invert(),Co.copy(e.ray).applyMatrix4(Jd);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let _=f,m=p-1;_<m;_+=c){let g=u.getX(_),w=u.getX(_+1),y=ga(this,e,Co,l,g,w,_);y&&t.push(y)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(f),g=ga(this,e,Co,l,_,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let _=f,m=p-1;_<m;_+=c){let g=ga(this,e,Co,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=ga(this,e,Co,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function ga(i,e,t,n,r,o,s){let a=i.geometry.attributes.position;if(Ua.fromBufferAttribute(a,r),Va.fromBufferAttribute(a,o),t.distanceSqToSegment(Ua,Va,gu,jd)>n)return;gu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(gu);if(!(c<e.near||c>e.far))return{distance:c,point:jd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Qd=new U,ef=new U,$t=class extends Ga{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)Qd.fromBufferAttribute(t,r),ef.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Qd.distanceTo(ef);e.setAttribute("lineDistance",new Te(n,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ur=class extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tf=new Pt,Tu=new cr,_a=new Pi,ba=new U,eo=class extends fn{constructor(e=new Ke,t=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),_a.radius+=o,e.ray.intersectsSphere(_a)===!1)return;tf.copy(r).invert(),Tu.copy(e.ray).applyMatrix4(tf);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let p=h,_=f;p<_;p++){let m=c.getX(p);ba.fromBufferAttribute(d,m),nf(ba,m,l,r,e,t,this)}}else{let h=Math.max(0,s.start),f=Math.min(d.count,s.start+s.count);for(let p=h,_=f;p<_;p++)ba.fromBufferAttribute(d,p),nf(ba,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function nf(i,e,t,n,r,o,s){let a=Tu.distanceSqToPoint(i);if(a<t){let l=new U;Tu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Ho=class extends nn{constructor(e=[],t=zi,n,r,o,s,a,l,c,u){super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bn=class extends nn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ki=class extends nn{constructor(e,t,n=Vn,r,o,s,a=Kt,l=Kt,c,u=$n,d=1){if(u!==$n&&u!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ha=class extends ki{constructor(e,t=Vn,n=zi,r,o,s=Kt,a=Kt,l,c=$n){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,o,s,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wo=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ci=class i extends Ke{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,n,t,e,s,o,0),p("z","y","x",1,-1,n,t,-e,s,o,1),p("x","z","y",1,1,e,n,t,r,s,2),p("x","z","y",1,-1,e,n,-t,r,s,3),p("x","y","z",1,-1,e,t,n,r,o,4),p("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(d,2));function p(_,m,g,w,y,b,x,M,A,v,S){let E=b/A,P=x/v,C=b/2,R=x/2,T=M/2,I=A+1,F=v+1,z=0,B=0,N=new U;for(let O=0;O<F;O++){let G=O*P-R;for(let $=0;$<I;$++){let Z=$*E-C;N[_]=Z*w,N[m]=G*y,N[g]=T,c.push(N.x,N.y,N.z),N[_]=0,N[m]=0,N[g]=M>0?1:-1,u.push(N.x,N.y,N.z),d.push($/A),d.push(1-O/v),z+=1}}for(let O=0;O<v;O++)for(let G=0;G<A;G++){let $=h+G+I*O,Z=h+G+I*(O+1),ue=h+(G+1)+I*(O+1),ne=h+(G+1)+I*O;l.push($,Z,ne),l.push(Z,ue,ne),B+=6}a.addGroup(f,B,S),f+=B,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Xo=class i extends Ke{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let o=[],s=[],a=[],l=[],c=new U,u=new Ee;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=n+d/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),s.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(s[h]/e+1)/2,u.y=(s[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(a,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ko=class i extends Ke{constructor(e=1,t=1,n=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),o=Math.floor(o);let u=[],d=[],h=[],f=[],p=0,_=[],m=n/2,g=0;w(),s===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(f,2));function w(){let b=new U,x=new U,M=0,A=(t-e)/n;for(let v=0;v<=o;v++){let S=[],E=v/o,P=E*(t-e)+e;for(let C=0;C<=r;C++){let R=C/r,T=R*l+a,I=Math.sin(T),F=Math.cos(T);x.x=P*I,x.y=-E*n+m,x.z=P*F,d.push(x.x,x.y,x.z),b.set(I,A,F).normalize(),h.push(b.x,b.y,b.z),f.push(R,1-E),S.push(p++)}_.push(S)}for(let v=0;v<r;v++)for(let S=0;S<o;S++){let E=_[S][v],P=_[S+1][v],C=_[S+1][v+1],R=_[S][v+1];(e>0||S!==0)&&(u.push(E,P,R),M+=3),(t>0||S!==o-1)&&(u.push(P,C,R),M+=3)}c.addGroup(g,M,0),g+=M}function y(b){let x=p,M=new Ee,A=new U,v=0,S=b===!0?e:t,E=b===!0?1:-1;for(let C=1;C<=r;C++)d.push(0,m*E,0),h.push(0,E,0),f.push(.5,.5),p++;let P=p;for(let C=0;C<=r;C++){let T=C/r*l+a,I=Math.cos(T),F=Math.sin(T);A.x=S*F,A.y=m*E,A.z=S*I,d.push(A.x,A.y,A.z),h.push(0,E,0),M.x=I*.5+.5,M.y=F*.5*E+.5,f.push(M.x,M.y),p++}for(let C=0;C<r;C++){let R=x+C,T=P+C;b===!0?u.push(T,T+1,R):u.push(T+1,T,R),v+=3}c.addGroup(g,v,b===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),o=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,o=n.length,s;t?s=t:s=e*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-s,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===s)return r/(o-1);let u=n[r],h=n[r+1]-u,f=(s-u)/h;return(r+f)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);let s=this.getPoint(r),a=this.getPoint(o),l=t||(s.isVector2?new Ee:new U);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,r=[],o=[],s=[],a=new U,l=new Pt;for(let f=0;f<=e;f++){let p=f/e;r[f]=this.getTangentAt(p,new U)}o[0]=new U,s[0]=new U;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),s[f]=s[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(rt(r[f-1].dot(r[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,p))}s[f].crossVectors(r[f],o[f])}if(t===!0){let f=Math.acos(rt(o[0].dot(o[e]),-1,1));f/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(f=-f);for(let p=1;p<=e;p++)o[p].applyMatrix4(l.makeRotationAxis(r[p],f*p)),s[p].crossVectors(r[p],o[p])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yo=class extends En{constructor(e=0,t=0,n=1,r=1,o=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ee){let n=t,r=Math.PI*2,o=this.aEndAngle-this.aStartAngle,s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);let a=this.aStartAngle+e*o,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wa=class extends Yo{constructor(e,t,n,r,o,s){super(e,t,n,n,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}};function nh(){let i=0,e=0,t=0,n=0;function r(o,s,a,l){i=o,e=a,t=-3*o+3*s-2*a-l,n=2*o-2*s+a+l}return{initCatmullRom:function(o,s,a,l,c){r(s,a,c*(a-o),c*(l-s))},initNonuniformCatmullRom:function(o,s,a,l,c,u,d){let h=(s-o)/c-(a-o)/(c+u)+(a-s)/u,f=(a-s)/u-(l-s)/(u+d)+(l-a)/d;h*=u,f*=u,r(s,a,h,f)},calc:function(o){let s=o*o,a=s*o;return i+e*o+t*s+n*a}}}var rf=new U,of=new U,_u=new nh,bu=new nh,vu=new nh,to=class extends En{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){let n=t,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e,a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%o]:(of.subVectors(r[0],r[1]).add(r[0]),c=of);let d=r[a%o],h=r[(a+1)%o];if(this.closed||a+2<o?u=r[(a+2)%o]:(rf.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=rf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),_u.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,_,m),bu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,_,m),vu.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(_u.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),bu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),vu.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(_u.calc(l),bu.calc(l),vu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function sf(i,e,t,n,r){let o=(n-e)*.5,s=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+o+s)*l+(-3*t+3*n-2*o-s)*a+o*i+t}function Fg(i,e){let t=1-i;return t*t*e}function Dg(i,e){return 2*(1-i)*i*e}function Ng(i,e){return i*i*e}function Lo(i,e,t,n){return Fg(i,e)+Dg(i,t)+Ng(i,n)}function zg(i,e){let t=1-i;return t*t*t*e}function Bg(i,e){let t=1-i;return 3*t*t*i*e}function Og(i,e){return 3*(1-i)*i*i*e}function Ug(i,e){return i*i*i*e}function Fo(i,e,t,n,r){return zg(i,e)+Bg(i,t)+Og(i,n)+Ug(i,r)}var Xa=class extends En{constructor(e=new Ee,t=new Ee,n=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ee){let n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(Fo(e,r.x,o.x,s.x,a.x),Fo(e,r.y,o.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ka=class extends En{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(Fo(e,r.x,o.x,s.x,a.x),Fo(e,r.y,o.y,s.y,a.y),Fo(e,r.z,o.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ya=class extends En{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qa=class extends En{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends En{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(Lo(e,r.x,o.x,s.x),Lo(e,r.y,o.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends En{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(Lo(e,r.x,o.x,s.x),Lo(e,r.y,o.y,s.y),Lo(e,r.z,o.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,l=r[s===0?s:s-1],c=r[s],u=r[s>r.length-2?r.length-1:s+1],d=r[s>r.length-3?r.length-1:s+2];return n.set(sf(a,l.x,c.x,u.x,d.x),sf(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new Ee().fromArray(r))}return this}},Vg=Object.freeze({__proto__:null,ArcCurve:Wa,CatmullRomCurve3:to,CubicBezierCurve:Xa,CubicBezierCurve3:Ka,EllipseCurve:Yo,LineCurve:Ya,LineCurve3:qa,QuadraticBezierCurve:Za,QuadraticBezierCurve3:qo,SplineCurve:$a});function Gg(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,o=np(i,0,r,t,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=Yg(i,e,o,t)),i.length>80*t){a=i[0],l=i[1];let u=a,d=l;for(let h=t;h<r;h+=t){let f=i[h],p=i[h+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Zo(o,s,t,a,l,c,0),s}function np(i,e,t,n,r){let o;if(r===r_(i,e,t,n)>0)for(let s=e;s<t;s+=n)o=af(s/n|0,i[s],i[s+1],o);else for(let s=t-n;s>=e;s-=n)o=af(s/n|0,i[s],i[s+1],o);return o&&no(o,o.next)&&(Jo(o),o=o.next),o}function hr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(no(t,t.next)||It(t.prev,t,t.next)===0)){if(Jo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zo(i,e,t,n,r,o,s){if(!i)return;!s&&o&&jg(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?Wg(i,n,r,o):Hg(i)){e.push(l.i,i.i,c.i),Jo(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=Xg(hr(i),e),Zo(i,e,t,n,r,o,2)):s===2&&Kg(i,e,t,n,r,o):Zo(hr(i),e,t,n,r,o,1);break}}}function Hg(i){let e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;let r=e.x,o=t.x,s=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,o,s),d=Math.min(a,l,c),h=Math.max(r,o,s),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Io(r,a,o,l,s,c,p.x,p.y)&&It(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Wg(i,e,t,n){let r=i.prev,o=i,s=i.next;if(It(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,u=r.y,d=o.y,h=s.y,f=Math.min(a,l,c),p=Math.min(u,d,h),_=Math.max(a,l,c),m=Math.max(u,d,h),g=Au(f,p,e,t,n),w=Au(_,m,e,t,n),y=i.prevZ,b=i.nextZ;for(;y&&y.z>=g&&b&&b.z<=w;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=m&&y!==r&&y!==s&&Io(a,u,l,d,c,h,y.x,y.y)&&It(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=_&&b.y>=p&&b.y<=m&&b!==r&&b!==s&&Io(a,u,l,d,c,h,b.x,b.y)&&It(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=m&&y!==r&&y!==s&&Io(a,u,l,d,c,h,y.x,y.y)&&It(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=w;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=m&&b!==r&&b!==s&&Io(a,u,l,d,c,h,b.x,b.y)&&It(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Xg(i,e){let t=i;do{let n=t.prev,r=t.next.next;!no(n,r)&&rp(n,t,t.next,r)&&$o(n,r)&&$o(r,n)&&(e.push(n.i,t.i,r.i),Jo(t),Jo(t.next),t=i=r),t=t.next}while(t!==i);return hr(t)}function Kg(i,e,t,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&t_(s,a)){let l=op(s,a);s=hr(s,s.next),l=hr(l,l.next),Zo(s,e,t,n,r,o,0),Zo(l,e,t,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function Yg(i,e,t,n){let r=[];for(let o=0,s=e.length;o<s;o++){let a=e[o]*n,l=o<s-1?e[o+1]*n:i.length,c=np(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(e_(c))}r.sort(qg);for(let o=0;o<r.length;o++)t=Zg(r[o],t);return t}function qg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Zg(i,e){let t=$g(i,e);if(!t)return e;let n=op(t,i);return hr(n,n.next),hr(t,t.next)}function $g(i,e){let t=e,n=i.x,r=i.y,o=-1/0,s;if(no(i,t))return t;do{if(no(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>o&&(o=d,s=t.x<t.next.x?t:t.next,d===n))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0;t=s;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ip(r<c?n:o,r,l,c,r<c?o:n,r,t.x,t.y)){let d=Math.abs(r-t.y)/(n-t.x);$o(t,i)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&Jg(s,t)))&&(s=t,u=d)}t=t.next}while(t!==a);return s}function Jg(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function jg(i,e,t,n){let r=i;do r.z===0&&(r.z=Au(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Qg(r)}function Qg(i){let e,t=1;do{let n=i,r;i=null;let o=null;for(e=0;n;){e++;let s=n,a=0;for(let c=0;c<t&&(a++,s=s.nextZ,!!s);c++);let l=t;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,t*=2}while(e>1);return i}function Au(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function e_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ip(i,e,t,n,r,o,s,a){return(r-s)*(e-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(r-s)*(n-a)}function Io(i,e,t,n,r,o,s,a){return!(i===s&&e===a)&&ip(i,e,t,n,r,o,s,a)}function t_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!n_(i,e)&&($o(i,e)&&$o(e,i)&&i_(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||no(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function no(i,e){return i.x===e.x&&i.y===e.y}function rp(i,e,t,n){let r=xa(It(i,e,t)),o=xa(It(i,e,n)),s=xa(It(t,n,i)),a=xa(It(t,n,e));return!!(r!==o&&s!==a||r===0&&va(i,t,e)||o===0&&va(i,n,e)||s===0&&va(t,i,n)||a===0&&va(t,e,n))}function va(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xa(i){return i>0?1:i<0?-1:0}function n_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&rp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $o(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function i_(i,e){let t=i,n=!1,r=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function op(i,e){let t=Eu(i.i,i.x,i.y),n=Eu(e.i,e.x,e.y),r=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function af(i,e,t,n){let r=Eu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Jo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Eu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function r_(i,e,t,n){let r=0;for(let o=e,s=t-n;o<t;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var Ru=class{static triangulate(e,t,n=2){return Gg(e,t,n)}},jo=class i{static area(e){let t=e.length,n=0;for(let r=t-1,o=0;o<t;r=o++)n+=e[r].x*e[o].y-e[o].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],o=[];lf(e),cf(n,e);let s=e.length;t.forEach(lf);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,cf(n,t[l]);let a=Ru.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function lf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function cf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Qo=class i extends Ke{constructor(e=[new Ee(0,-.5),new Ee(.5,0),new Ee(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=rt(r,0,Math.PI*2);let o=[],s=[],a=[],l=[],c=[],u=1/t,d=new U,h=new Ee,f=new U,p=new U,_=new U,m=0,g=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:m=e[w+1].x-e[w].x,g=e[w+1].y-e[w].y,f.x=g*1,f.y=-m,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[w+1].x-e[w].x,g=e[w+1].y-e[w].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let w=0;w<=t;w++){let y=n+w*u*r,b=Math.sin(y),x=Math.cos(y);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*b,d.y=e[M].y,d.z=e[M].x*x,s.push(d.x,d.y,d.z),h.x=w/t,h.y=M/(e.length-1),a.push(h.x,h.y);let A=l[3*M+0]*b,v=l[3*M+1],S=l[3*M+0]*x;c.push(A,v,S)}}for(let w=0;w<t;w++)for(let y=0;y<e.length-1;y++){let b=y+w*e.length,x=b,M=b+e.length,A=b+e.length+1,v=b+1;o.push(x,M,v),o.push(A,v,M)}this.setIndex(o),this.setAttribute("position",new Te(s,3)),this.setAttribute("uv",new Te(a,2)),this.setAttribute("normal",new Te(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var On=class i extends Ke{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let w=g*h-s;for(let y=0;y<c;y++){let b=y*d-o;p.push(b,-w,0),_.push(0,0,1),m.push(y/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let w=0;w<a;w++){let y=w+c*g,b=w+c*(g+1),x=w+1+c*(g+1),M=w+1+c*g;f.push(y,b,M),f.push(b,x,M)}this.setIndex(f),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},es=class i extends Ke{constructor(e=.5,t=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/r,f=new U,p=new Ee;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){let g=o+m/n*s;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let _=0;_<r;_++){let m=_*(n+1);for(let g=0;g<n;g++){let w=g+m,y=w,b=w+n+1,x=w+n+2,M=w+1;a.push(y,b,M),a.push(b,x,M)}}this.setIndex(a),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ts=class i extends Ke{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(s+a,Math.PI),c=0,u=[],d=new U,h=new U,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let w=[],y=g/n,b=s+y*a,x=e*Math.cos(b),M=Math.sqrt(e*e-x*x),A=0;g===0&&s===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){let S=v/t,E=r+S*o;d.x=-M*Math.cos(E),d.y=x,d.z=M*Math.sin(E),p.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(S+A,1-y),w.push(c++)}u.push(w)}for(let g=0;g<n;g++)for(let w=0;w<t;w++){let y=u[g][w+1],b=u[g][w],x=u[g+1][w],M=u[g+1][w+1];(g!==0||s>0)&&f.push(y,b,M),(g!==n-1||l<Math.PI)&&f.push(b,x,M)}this.setIndex(f),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ns=class i extends Ke{constructor(e=1,t=.4,n=12,r=48,o=Math.PI*2,s=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:o,thetaStart:s,thetaLength:a},n=Math.floor(n),r=Math.floor(r);let l=[],c=[],u=[],d=[],h=new U,f=new U,p=new U;for(let _=0;_<=n;_++){let m=s+_/n*a;for(let g=0;g<=r;g++){let w=g/r*o;f.x=(e+t*Math.cos(m))*Math.cos(w),f.y=(e+t*Math.cos(m))*Math.sin(w),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(w),h.y=e*Math.sin(w),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/r),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=r;m++){let g=(r+1)*_+m-1,w=(r+1)*(_-1)+m-1,y=(r+1)*(_-1)+m,b=(r+1)*_+m;l.push(g,w,b),l.push(w,y,b)}this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var io=class i extends Ke{constructor(e=new qo(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:o};let s=e.computeFrenetFrames(t,o);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let a=new U,l=new U,c=new Ee,u=new U,d=[],h=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(f,2));function _(){for(let y=0;y<t;y++)m(y);m(o===!1?t:0),w(),g()}function m(y){u=e.getPointAt(y/t,u);let b=s.normals[y],x=s.binormals[y];for(let M=0;M<=r;M++){let A=M/r*Math.PI*2,v=Math.sin(A),S=-Math.cos(A);l.x=S*b.x+v*x.x,l.y=S*b.y+v*x.y,l.z=S*b.z+v*x.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=t;y++)for(let b=1;b<=r;b++){let x=(r+1)*(y-1)+(b-1),M=(r+1)*y+(b-1),A=(r+1)*y+b,v=(r+1)*(y-1)+b;p.push(x,M,v),p.push(M,A,v)}}function w(){for(let y=0;y<=t;y++)for(let b=0;b<=r;b++)c.x=y/t,c.y=b/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Vg[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function pr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(uf(r))r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(uf(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();e[t][n]=o}else e[t][n]=r.slice();else e[t][n]=r}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=pr(i[t]);for(let r in n)e[r]=n[r]}return e}function uf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function o_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ih(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var sp={clone:pr,merge:sn},s_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s_,this.fragmentShader=a_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=o_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Q().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(r.value);break;case"v3":this.uniforms[n].value=new U().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Lt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Pt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ja=class extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ja=class extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qa=class extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ii=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],o=t[n-1];n:{e:{let s;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=t[++n],e<r)break e}s=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=t[--n-1],e>=o)break e}s=n,n=0;break t}break n}for(;n<s;){let a=n+s>>>1;e<t[a]?s=a:n=a+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=n[o+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},el=class extends Ii{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(e,t,n){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Mu:o=e,a=2*t-n;break;case Su:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mu:s=e,l=2*n-t;break;case Su:s=1,l=n+r[1]-r[0];break;default:s=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),_=p*p,m=_*p,g=-h*m+2*h*_-h*p,w=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*p+1,y=(-1-f)*m+(1.5+f)*_+.5*p,b=f*m-f*_;for(let x=0;x!==a;++x)o[x]=g*s[u+x]+w*s[c+x]+y*s[l+x]+b*s[d+x];return o}},tl=class extends Ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)o[h]=s[c+h]*d+s[l+h]*u;return o}},nl=class extends Ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},il=class extends Ii{interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(n-t)/(r-t),_=1-p;for(let m=0;m!==a;++m)o[m]=s[c+m]*_+s[l+m]*p;return o}let h=a*2,f=e-1;for(let p=0;p!==a;++p){let _=s[c+p],m=s[l+p],g=f*h+p*2,w=d[g],y=d[g+1],b=e*h+p*2,x=u[b],M=u[b+1],A=c_(n,t,w,x,r);o[p]=ap(A,_,y,M,m)}return o}};function ap(i,e,t,n,r){let o=1-i;return o*o*o*e+3*o*o*i*t+3*o*i*i*n+i*i*i*r}function l_(i,e,t,n,r){let o=1-i;return 3*o*o*(t-e)+6*o*i*(n-t)+3*i*i*(r-n)}function c_(i,e,t,n,r){let o=(i-e)/(r-e);for(let s=0;s<8;s++){let a=ap(o,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let l=l_(o,e,t,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var xn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),xu(e.settings)&&(n.settings={inTangents:Hr(e.settings.inTangents,Array),outTangents:Hr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new il(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Do:t=this.InterpolantFactoryMethodDiscrete;break;case Fa:t=this.InterpolantFactoryMethodLinear;break;case Ma:t=this.InterpolantFactoryMethodSmooth;break;case yu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return Ma;case this.InterpolantFactoryMethodBezier:return yu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;xu(this.settings)&&(hf(this.settings.inTangents,e),hf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<e;)++o;for(;s!==-1&&n[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,o=n.length;o===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){qe("KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(r!==void 0&&pg(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ma,o=e.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){let _=t[d+p];if(_!==t[h+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];let d=a*n,h=s*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++s}}if(o>0){e[s]=e[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,xu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function hf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Fa;var Li=class extends xn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Do;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends xn{constructor(e,t,n,r){super(e,t,n,r)}};rl.prototype.ValueTypeName="color";var ol=class extends xn{constructor(e,t,n,r){super(e,t,n,r)}};ol.prototype.ValueTypeName="number";var sl=class extends Ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)jn.slerpFlat(o,0,s,c-a,s,c,l);return o}},is=class extends xn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}};is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends xn{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Do;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends xn{constructor(e,t,n,r){super(e,t,n,r)}};al.prototype.ValueTypeName="vector";var Ta={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(df(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!df(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function df(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ll=class{constructor(e,t,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lp=new ll,ro=class{constructor(e){this.manager=e!==void 0?e:lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wr=new WeakMap,cl=class extends ro{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,s=Ta.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let d=Wr.get(s);d===void 0&&(d=[],Wr.set(s,d)),d.push({onLoad:t,onError:r})}return s}let a=Zr("img");function l(){u(),t&&t(this);let d=Wr.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}Wr.delete(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),Ta.remove(`image:${e}`);let h=Wr.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onError&&p.onError(d)}Wr.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ta.add(`image:${e}`,a),o.manager.itemStart(e),a.src=e,a}};var rs=class extends ro{constructor(e){super(e)}load(e,t,n,r){let o=new nn,s=new cl(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}};var ya=new U,wa=new jn,Zn=new U,os=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ya,wa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,wa,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ya,wa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,wa,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ai=new U,ff=new Ee,pf=new Ee,tn=class extends os{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,ff,pf),t.subVectors(pf,ff)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Qn=class extends os{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Xr=-90,Kr=1,ul=class extends fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new tn(Xr,Kr,e,t);r.layers=this.layers,this.add(r);let o=new tn(Xr,Kr,e,t);o.layers=this.layers,this.add(o);let s=new tn(Xr,Kr,e,t);s.layers=this.layers,this.add(s);let a=new tn(Xr,Kr,e,t);a.layers=this.layers,this.add(a);let l=new tn(Xr,Kr,e,t);l.layers=this.layers,this.add(l);let c=new tn(Xr,Kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(let c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},hl=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rh="\\[\\]\\.:\\/",u_=new RegExp("["+rh+"]","g"),oh="[^"+rh+"]",h_="[^"+rh.replace("\\.","")+"]",d_=/((?:WC+[\/:])*)/.source.replace("WC",oh),f_=/(WCOD+)?/.source.replace("WCOD",h_),p_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),m_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),g_=new RegExp("^"+d_+f_+p_+m_+"$"),__=["material","materials","bones","map"],Pu=class{constructor(e,t,n){let r=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u_,"")}static parseTrackName(e){let t=g_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);__.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,o=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[r];if(s===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Pu;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uS=new Float32Array(1);var mf=new Pt,ss=class{constructor(e,t,n=0,r=1/0){this.ray=new cr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mf),this}intersectObject(e,t=!0,n=[]){return ku(e,this,n,t),n.sort(gf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)ku(e[r],this,n,t);return n.sort(gf),n}};function gf(i,e){return i.distance-e.distance}function ku(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)ku(o[s],e,t,!0)}}var hh=class hh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let o=this.elements;return o[0]=e,o[2]=t,o[1]=n,o[3]=r,this}};hh.prototype.isMatrix2=!0;var Cu=hh;function sh(i,e,t,n){let r=b_(n);switch(t){case Zu:return i*e;case Ju:return i*e/r.components*r.byteLength;case vl:return i*e/r.components*r.byteLength;case Ui:return i*e*2/r.components*r.byteLength;case xl:return i*e*2/r.components*r.byteLength;case $u:return i*e*3/r.components*r.byteLength;case Rn:return i*e*4/r.components*r.byteLength;case yl:return i*e*4/r.components*r.byteLength;case hs:case ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fs:case ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ml:case Tl:return Math.max(i,16)*Math.max(e,8)/4;case wl:case Sl:return Math.max(i,8)*Math.max(e,8)/2;case Al:case El:case Pl:case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rl:case ms:case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Kl:case Yl:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zl:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gs:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function b_(i){switch(i){case yn:case Xu:return{byteLength:1,components:1};case so:case Ku:case Hn:return{byteLength:2,components:1};case _l:case bl:return{byteLength:2,components:4};case Vn:case gl:case Gn:return{byteLength:4,components:1};case Yu:case qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kp(){let i=null,e=!1,t=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),t(o,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function x_(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var y_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w_=`#ifdef USE_ALPHAHASH
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
#endif`,M_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E_=`#ifdef USE_AOMAP
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
#endif`,R_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P_=`#ifdef USE_BATCHING
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
#endif`,k_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F_=`#ifdef USE_IRIDESCENCE
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
#endif`,D_=`#ifdef USE_BUMPMAP
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
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,V_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,H_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,W_=`#define PI 3.141592653589793
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
} // validated`,X_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K_=`vec3 transformedNormal = objectNormal;
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
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",j_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q_=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
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
#endif`,nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
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
#endif`,rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ab=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lb=`#ifdef USE_GRADIENTMAP
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
}`,cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,db=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fb=`#ifdef USE_ENVMAP
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
#endif`,pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bb=`PhysicalMaterial material;
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
#endif`,vb=`uniform sampler2D dfgLUT;
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
}`,xb=`
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
#endif`,yb=`#if defined( RE_IndirectDiffuse )
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
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cb=`#if defined( USE_POINTS_UV )
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
#endif`,Ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`#ifdef USE_MORPHTARGETS
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
#endif`,Bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
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
#endif`,Xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$b=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sv=`float getShadowMask() {
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
}`,av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lv=`#ifdef USE_SKINNING
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
#endif`,cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uv=`#ifdef USE_SKINNING
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
#endif`,hv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mv=`#ifdef USE_TRANSMISSION
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
#endif`,gv=`#ifdef USE_TRANSMISSION
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
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wv=`uniform sampler2D t2D;
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`#include <common>
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
}`,Rv=`#if DEPTH_PACKING == 3200
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
}`,Pv=`#define DISTANCE
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
}`,kv=`#define DISTANCE
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
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`uniform float scale;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Dv=`#include <common>
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
}`,Nv=`uniform vec3 diffuse;
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
}`,zv=`#define LAMBERT
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
}`,Bv=`#define LAMBERT
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
}`,Ov=`#define MATCAP
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
}`,Uv=`#define MATCAP
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
}`,Vv=`#define NORMAL
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
}`,Gv=`#define NORMAL
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
}`,Hv=`#define PHONG
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
}`,Wv=`#define PHONG
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
}`,Xv=`#define STANDARD
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
}`,Kv=`#define STANDARD
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
}`,Yv=`#define TOON
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
}`,qv=`#define TOON
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
}`,Zv=`uniform float size;
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
}`,$v=`uniform vec3 diffuse;
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
}`,Jv=`#include <common>
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
}`,jv=`uniform vec3 color;
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
}`,Qv=`uniform float rotation;
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
}`,ex=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:y_,alphahash_pars_fragment:w_,alphamap_fragment:M_,alphamap_pars_fragment:S_,alphatest_fragment:T_,alphatest_pars_fragment:A_,aomap_fragment:E_,aomap_pars_fragment:R_,batching_pars_vertex:P_,batching_vertex:k_,begin_vertex:C_,beginnormal_vertex:I_,bsdfs:L_,iridescence_fragment:F_,bumpmap_pars_fragment:D_,clipping_planes_fragment:N_,clipping_planes_pars_fragment:z_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:O_,color_fragment:U_,color_pars_fragment:V_,color_pars_vertex:G_,color_vertex:H_,common:W_,cube_uv_reflection_fragment:X_,defaultnormal_vertex:K_,displacementmap_pars_vertex:Y_,displacementmap_vertex:q_,emissivemap_fragment:Z_,emissivemap_pars_fragment:$_,colorspace_fragment:J_,colorspace_pars_fragment:j_,envmap_fragment:Q_,envmap_common_pars_fragment:eb,envmap_pars_fragment:tb,envmap_pars_vertex:nb,envmap_physical_pars_fragment:fb,envmap_vertex:ib,fog_vertex:rb,fog_pars_vertex:ob,fog_fragment:sb,fog_pars_fragment:ab,gradientmap_pars_fragment:lb,lightmap_pars_fragment:cb,lights_lambert_fragment:ub,lights_lambert_pars_fragment:hb,lights_pars_begin:db,lights_toon_fragment:pb,lights_toon_pars_fragment:mb,lights_phong_fragment:gb,lights_phong_pars_fragment:_b,lights_physical_fragment:bb,lights_physical_pars_fragment:vb,lights_fragment_begin:xb,lights_fragment_maps:yb,lights_fragment_end:wb,lightprobes_pars_fragment:Mb,logdepthbuf_fragment:Sb,logdepthbuf_pars_fragment:Tb,logdepthbuf_pars_vertex:Ab,logdepthbuf_vertex:Eb,map_fragment:Rb,map_pars_fragment:Pb,map_particle_fragment:kb,map_particle_pars_fragment:Cb,metalnessmap_fragment:Ib,metalnessmap_pars_fragment:Lb,morphinstance_vertex:Fb,morphcolor_vertex:Db,morphnormal_vertex:Nb,morphtarget_pars_vertex:zb,morphtarget_vertex:Bb,normal_fragment_begin:Ob,normal_fragment_maps:Ub,normal_pars_fragment:Vb,normal_pars_vertex:Gb,normal_vertex:Hb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:Xb,clearcoat_normal_fragment_maps:Kb,clearcoat_pars_fragment:Yb,iridescence_pars_fragment:qb,opaque_fragment:Zb,packing:$b,premultiplied_alpha_fragment:Jb,project_vertex:jb,dithering_fragment:Qb,dithering_pars_fragment:ev,roughnessmap_fragment:tv,roughnessmap_pars_fragment:nv,shadowmap_pars_fragment:iv,shadowmap_pars_vertex:rv,shadowmap_vertex:ov,shadowmask_pars_fragment:sv,skinbase_vertex:av,skinning_pars_vertex:lv,skinning_vertex:cv,skinnormal_vertex:uv,specularmap_fragment:hv,specularmap_pars_fragment:dv,tonemapping_fragment:fv,tonemapping_pars_fragment:pv,transmission_fragment:mv,transmission_pars_fragment:gv,uv_pars_fragment:_v,uv_pars_vertex:bv,uv_vertex:vv,worldpos_vertex:xv,background_vert:yv,background_frag:wv,backgroundCube_vert:Mv,backgroundCube_frag:Sv,cube_vert:Tv,cube_frag:Av,depth_vert:Ev,depth_frag:Rv,distance_vert:Pv,distance_frag:kv,equirect_vert:Cv,equirect_frag:Iv,linedashed_vert:Lv,linedashed_frag:Fv,meshbasic_vert:Dv,meshbasic_frag:Nv,meshlambert_vert:zv,meshlambert_frag:Bv,meshmatcap_vert:Ov,meshmatcap_frag:Uv,meshnormal_vert:Vv,meshnormal_frag:Gv,meshphong_vert:Hv,meshphong_frag:Wv,meshphysical_vert:Xv,meshphysical_frag:Kv,meshtoon_vert:Yv,meshtoon_frag:qv,points_vert:Zv,points_frag:$v,shadow_vert:Jv,shadow_frag:jv,sprite_vert:Qv,sprite_frag:ex},we={common:{diffuse:{value:new Q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Q(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ni={basic:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Q(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Q(0)},specular:{value:new Q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:sn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:sn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Q(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:sn([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:sn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:sn([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:sn([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:sn([we.common,we.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:sn([we.lights,we.fog,{color:{value:new Q(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ni.physical={uniforms:sn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Q(0)},specularColor:{value:new Q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var ec={r:0,b:0,g:0},tx=new Pt,Cp=new $e;Cp.set(-1,0,0,0,1,0,0,0,1);function nx(i,e,t,n,r,o){let s=new Q(0),a=r===!0?0:1,l,c,u=null,d=0,h=null;function f(w){let y=w.isScene===!0?w.background:null;if(y&&y.isTexture){let b=w.backgroundBlurriness>0;y=e.get(y,b)}return y}function p(w){let y=!1,b=f(w);b===null?m(s,a):b&&b.isColor&&(m(b,1),y=!0);let x=i.xr.getEnvironmentBlendMode();x==="additive"?t.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(w,y){let b=f(y);b&&(b.isCubeTexture||b.mapping===cs)?(c===void 0&&(c=new He(new Ci(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:pr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tx.makeRotationFromEuler(y.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cp),c.material.toneMapped=ut.getTransfer(b.colorSpace)!==xt,(u!==b||d!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new He(new On(2,2),new on({name:"BackgroundMaterial",uniforms:pr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ut.getTransfer(b.colorSpace)!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,y){w.getRGB(ec,ih(i)),t.buffers.color.setClear(ec.r,ec.g,ec.b,y,o)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(w,y=1){s.set(w),a=y,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,m(s,a)},render:p,addToRenderList:_,dispose:g}}function ix(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),o=r,s=!1;function a(P,C,R,T,I){let F=!1,z=d(P,T,R,C);o!==z&&(o=z,c(o.object)),F=f(P,T,R,I),F&&p(P,T,R,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(F||s)&&(s=!1,b(P,C,R,T),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,C,R,T){let I=T.wireframe===!0,F=n[C.id];F===void 0&&(F={},n[C.id]=F);let z=P.isInstancedMesh===!0?P.id:0,B=F[z];B===void 0&&(B={},F[z]=B);let N=B[R.id];N===void 0&&(N={},B[R.id]=N);let O=N[I];return O===void 0&&(O=h(l()),N[I]=O),O}function h(P){let C=[],R=[],T=[];for(let I=0;I<t;I++)C[I]=0,R[I]=0,T[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:R,attributeDivisors:T,object:P,attributes:{},index:null}}function f(P,C,R,T){let I=o.attributes,F=C.attributes,z=0,B=R.getAttributes();for(let N in B)if(B[N].location>=0){let G=I[N],$=F[N];if($===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),G===void 0||G.attribute!==$||$&&G.data!==$.data)return!0;z++}return o.attributesNum!==z||o.index!==T}function p(P,C,R,T){let I={},F=C.attributes,z=0,B=R.getAttributes();for(let N in B)if(B[N].location>=0){let G=F[N];G===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(G=P.instanceColor));let $={};$.attribute=G,G&&G.data&&($.data=G.data),I[N]=$,z++}o.attributes=I,o.attributesNum=z,o.index=T}function _(){let P=o.newAttributes;for(let C=0,R=P.length;C<R;C++)P[C]=0}function m(P){g(P,0)}function g(P,C){let R=o.newAttributes,T=o.enabledAttributes,I=o.attributeDivisors;R[P]=1,T[P]===0&&(i.enableVertexAttribArray(P),T[P]=1),I[P]!==C&&(i.vertexAttribDivisor(P,C),I[P]=C)}function w(){let P=o.newAttributes,C=o.enabledAttributes;for(let R=0,T=C.length;R<T;R++)C[R]!==P[R]&&(i.disableVertexAttribArray(R),C[R]=0)}function y(P,C,R,T,I,F,z){z===!0?i.vertexAttribIPointer(P,C,R,I,F):i.vertexAttribPointer(P,C,R,T,I,F)}function b(P,C,R,T){_();let I=T.attributes,F=R.getAttributes(),z=C.defaultAttributeValues;for(let B in F){let N=F[B];if(N.location>=0){let O=I[B];if(O===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(O=P.instanceColor)),O!==void 0){let G=O.normalized,$=O.itemSize,Z=e.get(O);if(Z===void 0)continue;let ue=Z.buffer,ne=Z.type,ae=Z.bytesPerElement,H=ne===i.INT||ne===i.UNSIGNED_INT||O.gpuType===gl;if(O.isInterleavedBufferAttribute){let W=O.data,se=W.stride,he=O.offset;if(W.isInstancedInterleavedBuffer){for(let ie=0;ie<N.locationSize;ie++)g(N.location+ie,W.meshPerAttribute);P.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ie=0;ie<N.locationSize;ie++)m(N.location+ie);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let ie=0;ie<N.locationSize;ie++)y(N.location+ie,$/N.locationSize,ne,G,se*ae,(he+$/N.locationSize*ie)*ae,H)}else{if(O.isInstancedBufferAttribute){for(let W=0;W<N.locationSize;W++)g(N.location+W,O.meshPerAttribute);P.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let W=0;W<N.locationSize;W++)m(N.location+W);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let W=0;W<N.locationSize;W++)y(N.location+W,$/N.locationSize,ne,G,$*ae,$/N.locationSize*W*ae,H)}}else if(z!==void 0){let G=z[B];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(N.location,G);break;case 3:i.vertexAttrib3fv(N.location,G);break;case 4:i.vertexAttrib4fv(N.location,G);break;default:i.vertexAttrib1fv(N.location,G)}}}}w()}function x(){S();for(let P in n){let C=n[P];for(let R in C){let T=C[R];for(let I in T){let F=T[I];for(let z in F)u(F[z].object),delete F[z];delete T[I]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let C=n[P.id];for(let R in C){let T=C[R];for(let I in T){let F=T[I];for(let z in F)u(F[z].object),delete F[z];delete T[I]}}delete n[P.id]}function A(P){for(let C in n){let R=n[C];for(let T in R){let I=R[T];if(I[P.id]===void 0)continue;let F=I[P.id];for(let z in F)u(F[z].object),delete F[z];delete I[P.id]}}}function v(P){for(let C in n){let R=n[C],T=P.isInstancedMesh===!0?P.id:0,I=R[T];if(I!==void 0){for(let F in I){let z=I[F];for(let B in z)u(z[B].object),delete z[B];delete I[F]}delete R[T],Object.keys(R).length===0&&delete n[C]}}}function S(){E(),s=!0,o!==r&&(o=r,c(o.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function rx(i,e,t){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function ox(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==Rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yn&&A!==Gn&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:M}}function sx(i){let e=this,t=null,n=0,r=!1,o=!1,s=new bn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!r||p===null||p.length===0||o&&!m)o?u(null):c();else{let w=o?0:n,y=w*4,b=g.clippingState||null;l.value=b,b=u(p,h,y,f);for(let x=0;x!==y;++x)b[x]=t[x];g.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,b=f;y!==_;++y,b+=4)s.copy(d[y]).applyMatrix4(w,a),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var co=4,ax=6,lx=20,cx=256,bs=new Qn,cp=new Q,dh=null,fh=0,ph=0,mh=!1,ux=new U,mr=new U,nc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,o={}){let{size:s=256,position:a=ux}=o;dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,fh,ph),this._renderer.xr.enabled=mh,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Hn,format:Rn,colorSpace:No,depthBuffer:!1},r=up(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=up(e,t,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hx(o)),this._blurMaterial=fx(o,e,t),this._ggxMaterial=dx(o,e,t)}return r}_compileMaterial(e){let t=new He(new Ke,e);this._renderer.compile(t,bs)}_sceneToCubeUV(e,t,n,r,o){let l=new tn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(cp),d.toneMapping=Un,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new Ci,new it({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,g=!0):(m.color.copy(cp),g=!0);for(let y=0;y<6;y++){let b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[y],o.y,o.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[y],o.z)):(l.up.set(0,c[y],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[y]));let x=this._cubeSize;lo(r,b*x,y>2?x:0,x,x),d.setRenderTarget(r),g&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===zi||e.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let l=this._cubeSize;lo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,bs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-co?n-p+co:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,lo(o,m,g,3*_,2*_),r.setRenderTarget(o),r.render(a,bs),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,lo(e,m,g,3*_,2*_),r.setRenderTarget(e),r.render(a,bs)}_blur(e,t,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,n,s),this._blurPass(o,e,n,n,s)}_blurPass(e,t,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],d=3*u*(r>this._lodMax-co?r-this._lodMax+co:0),h=4*(this._cubeSize-u);lo(t,d,h,3*u,2*u),s.setRenderTarget(t),s.render(l,bs)}};function hx(i){let e=[],t=[],n=i,r=i-co+1+ax;for(let o=0;o<r;o++){let s=Math.pow(2,n);e.push(s);let a=1/(s-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,p=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let g=0;g<d;g++){let w=g%3*2/3-1,y=g>2?0:-1,b=[w,y,0,w+2/3,y,0,w+2/3,y+1,0,w,y,0,w+2/3,y+1,0,w,y+1,0];p.set(b,f*h*g);for(let x=0;x<h;x++){let M=u[x*2]*2-1,A=u[x*2+1]*2-1;g===0?mr.set(1,A,M):g===1?mr.set(-M,1,-A):g===2?mr.set(-M,A,1):g===3?mr.set(-1,A,-M):g===4?mr.set(-M,-1,A):mr.set(M,A,-1),mr.toArray(_,(g*h+x)*f)}}let m=new Ke;m.setAttribute("position",new An(p,f)),m.setAttribute("outputDirection",new An(_,f)),t.push(new He(m,null)),n>co&&n--}return{lodMeshes:t,sizeLods:e}}function up(i,e,t){let n=new rn(i,e,t);return n.texture.mapping=cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function dx(i,e,t){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function fx(i,e,t){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:lx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function hp(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function dp(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ic=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ho(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ci(5,5,5),o=new on({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:ei});o.uniforms.tEquirect.value=t;let s=new He(r,o),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=qt),new ul(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}};function px(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?s(h):o(h)}function o(h){if(h&&h.isTexture){let f=h.mapping;if(f===fl||f===pl)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let _=new ic(p.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){let f=h.mapping,p=f===fl||f===pl,_=f===zi||f===fr;if(p||_){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new nc(i)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let w=h.image;return p&&w&&w.height>0||_&&w&&l(w)?(n===null&&(n=new nc(i)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===fl?h.mapping=zi:f===pl&&(h.mapping=fr),h}function l(h){let f=0,p=6;for(let _=0;_<p;_++)h[_]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function mx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&sr("WebGLRenderer: "+n+" extension not supported."),r}}}function gx(i,e,t,n){let r={},o=new WeakMap;function s(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",s),delete r[h.id];let f=o.get(h);f&&(e.remove(f),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let w=f.array;_=f.version;for(let y=0,b=w.length;y<b;y+=3){let x=w[y+0],M=w[y+1],A=w[y+2];h.push(x,M,M,A,A,x)}}else{let w=p.array;_=p.version;for(let y=0,b=w.length/3-1;y<b;y+=3){let x=y+0,M=y+1,A=y+2;h.push(x,M,M,A,A,x)}}let m=new(p.count>=65535?lr:Vo)(h,1);m.version=_;let g=o.get(d);g&&e.remove(g),o.set(d,m)}function u(d){let h=o.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function _x(i,e,t){let n;function r(d){n=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,h){i.drawElements(n,h,o,d*s),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,o,d*s,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,o,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];t.update(_,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function bx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:qe("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function vx(i,e,t){let n=new WeakMap,r=new Lt;function o(s,a,l){let c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let b=a.attributes.position.count*y,x=1;b>e.maxTextureSize&&(x=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let M=new Float32Array(b*x*4*d),A=new Oo(M,b,x,d);A.type=Gn,A.needsUpdate=!0;let v=y*4;for(let E=0;E<d;E++){let P=m[E],C=g[E],R=w[E],T=b*x*4*E;for(let I=0;I<P.count;I++){let F=I*v;f===!0&&(r.fromBufferAttribute(P,I),M[T+F+0]=r.x,M[T+F+1]=r.y,M[T+F+2]=r.z,M[T+F+3]=0),p===!0&&(r.fromBufferAttribute(C,I),M[T+F+4]=r.x,M[T+F+5]=r.y,M[T+F+6]=r.z,M[T+F+7]=0),_===!0&&(r.fromBufferAttribute(R,I),M[T+F+8]=r.x,M[T+F+9]=r.y,M[T+F+10]=r.z,M[T+F+11]=R.itemSize===4?r.w:1)}}h={count:d,texture:A,size:new Ee(b,x)},n.set(a,h),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:o}}function xx(i,e,t,n,r){let o=new WeakMap;function s(c){let u=r.render.frame,d=c.geometry,h=e.get(c,d);if(o.get(h)!==u&&(e.update(h),o.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;o.get(f)!==u&&(f.update(),o.set(f,u))}return h}function a(){o=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}var yx={[zu]:"LINEAR_TONE_MAPPING",[Bu]:"REINHARD_TONE_MAPPING",[Ou]:"CINEON_TONE_MAPPING",[Uu]:"ACES_FILMIC_TONE_MAPPING",[Gu]:"AGX_TONE_MAPPING",[Hu]:"NEUTRAL_TONE_MAPPING",[Vu]:"CUSTOM_TONE_MAPPING"};function wx(i,e,t,n,r,o){let s=new rn(e,t,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ke;c.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Te([0,2,0,0,2,0],2));let u=new Ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new He(c,u),h=new Qn(-1,1,1,-1,0,1),f=null,p=null,_=!1,m,g=null,w=[],y=!1;this.setSize=function(b,x){s.setSize(b,x),a!==null&&a.setSize(b,x),l!==null&&l.setSize(b,x);for(let M=0;M<w.length;M++){let A=w[M];A.setSize&&A.setSize(b,x)}},this.setEffects=function(b){w=b,y=w.length>0&&w[0].isRenderPass===!0;let x=s.width,M=s.height;w.length>0&&a===null&&(a=new rn(x,M,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(x,M,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<w.length;A++){let v=w[A];v.setSize&&v.setSize(x,M)}},this.begin=function(b,x){if(_||b.toneMapping===Un&&w.length===0)return!1;if(g=x,x!==null){let M=x.width,A=x.height;(s.width!==M||s.height!==A)&&this.setSize(M,A)}return y===!1&&b.setRenderTarget(s),m=b.toneMapping,b.toneMapping=Un,!0},this.hasRenderPass=function(){return y},this.end=function(b,x){b.toneMapping=m,_=!0;let M=s,A=a;for(let v=0;v<w.length;v++){let S=w[v];S.enabled!==!1&&(S.render(b,A,M,x),S.needsSwap!==!1&&(M=A,A=A===a?l:a))}if(f!==b.outputColorSpace||p!==b.toneMapping){f=b.outputColorSpace,p=b.toneMapping,u.defines={},ut.getTransfer(f)===xt&&(u.defines.SRGB_TRANSFER="");let v=yx[p];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(g),b.render(d,h),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Ip=new nn,bh=new ki(1,1),Lp=new Oo,Fp=new Ba,Dp=new Ho,fp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),_p=new Float32Array(4);function ho(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,o=fp[r];if(o===void 0&&(o=new Float32Array(r),fp[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oc(i,e){let t=pp[e];t===void 0&&(t=new Int32Array(e),pp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function Ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function Ex(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;_p.set(n),i.uniformMatrix2fv(this.addr,!1,_p),Ht(t,n)}}function Rx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;gp.set(n),i.uniformMatrix3fv(this.addr,!1,gp),Ht(t,n)}}function Px(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;mp.set(n),i.uniformMatrix4fv(this.addr,!1,mp),Ht(t,n)}}function kx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function Ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function Lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function Fx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function Bx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(bh.compareFunction=t.isReversedDepthBuffer()?Ql:jl,o=bh):o=Ip,t.setTexture2D(e||o,r)}function Ox(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Fp,r)}function Ux(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Dp,r)}function Vx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Lp,r)}function Gx(i){switch(i){case 5126:return Mx;case 35664:return Sx;case 35665:return Tx;case 35666:return Ax;case 35674:return Ex;case 35675:return Rx;case 35676:return Px;case 5124:case 35670:return kx;case 35667:case 35671:return Cx;case 35668:case 35672:return Ix;case 35669:case 35673:return Lx;case 5125:return Fx;case 36294:return Dx;case 36295:return Nx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Vx}}function Hx(i,e){i.uniform1fv(this.addr,e)}function Wx(i,e){let t=ho(e,this.size,2);i.uniform2fv(this.addr,t)}function Xx(i,e){let t=ho(e,this.size,3);i.uniform3fv(this.addr,t)}function Kx(i,e){let t=ho(e,this.size,4);i.uniform4fv(this.addr,t)}function Yx(i,e){let t=ho(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qx(i,e){let t=ho(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zx(i,e){let t=ho(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $x(i,e){i.uniform1iv(this.addr,e)}function Jx(i,e){i.uniform2iv(this.addr,e)}function jx(i,e){i.uniform3iv(this.addr,e)}function Qx(i,e){i.uniform4iv(this.addr,e)}function ey(i,e){i.uniform1uiv(this.addr,e)}function ty(i,e){i.uniform2uiv(this.addr,e)}function ny(i,e){i.uniform3uiv(this.addr,e)}function iy(i,e){i.uniform4uiv(this.addr,e)}function ry(i,e,t){let n=this.cache,r=e.length,o=oc(t,r);Gt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=bh:s=Ip;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function oy(i,e,t){let n=this.cache,r=e.length,o=oc(t,r);Gt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Fp,o[s])}function sy(i,e,t){let n=this.cache,r=e.length,o=oc(t,r);Gt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Dp,o[s])}function ay(i,e,t){let n=this.cache,r=e.length,o=oc(t,r);Gt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Lp,o[s])}function ly(i){switch(i){case 5126:return Hx;case 35664:return Wx;case 35665:return Xx;case 35666:return Kx;case 35674:return Yx;case 35675:return qx;case 35676:return Zx;case 5124:case 35670:return $x;case 35667:case 35671:return Jx;case 35668:case 35672:return jx;case 35669:case 35673:return Qx;case 5125:return ey;case 36294:return ty;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ay}}var vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gx(t.type)}},xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ly(t.type)}},yh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],n)}}},gh=/(\w+)(\])?(\[|\.)?/g;function bp(i,e){i.seq.push(e),i.map[e.id]=e}function cy(i,e,t){let n=i.name,r=n.length;for(gh.lastIndex=0;;){let o=gh.exec(n),s=gh.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){bp(t,c===void 0?new vh(a,i,e):new xh(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new yh(a),bp(t,d)),t=d}}}var uo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);cy(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,n,r){let o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function vp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var uy=37297,hy=0;function dy(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}var xp=new $e;function fy(i){ut._getMatrix(xp,ut.workingColorSpace,i);let e=`mat3( ${xp.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case zo:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+dy(i.getShaderSource(e),a)}else return o}function py(i,e){let t=fy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var my={[zu]:"Linear",[Bu]:"Reinhard",[Ou]:"Cineon",[Uu]:"ACESFilmic",[Gu]:"AgX",[Hu]:"Neutral",[Vu]:"Custom"};function gy(i,e){let t=my[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var tc=new U;function _y(){ut.getLuminanceCoefficients(tc);let i=tc.x.toFixed(4),e=tc.y.toFixed(4),t=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function by(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function vy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function xs(i){return i!==""}function wp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(i){return i.replace(yy,My)}var wy=new Map;function My(i,e){let t=nt[e];if(t===void 0){let n=wy.get(e);if(n!==void 0)t=nt[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wh(t)}var Sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(i){return i.replace(Sy,Ty)}function Ty(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Tp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Ay={[as]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function Ey(i){return Ay[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ry={[zi]:"ENVMAP_TYPE_CUBE",[fr]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE_UV"};function Py(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ry[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ky={[fr]:"ENVMAP_MODE_REFRACTION"};function Cy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ky[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Iy={[Nu]:"ENVMAP_BLENDING_MULTIPLY",[Bf]:"ENVMAP_BLENDING_MIX",[Of]:"ENVMAP_BLENDING_ADD"};function Ly(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Iy[i.combine]||"ENVMAP_BLENDING_NONE"}function Fy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Dy(i,e,t,n){let r=i.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,l=Ey(t),c=Py(t),u=Cy(t),d=Ly(t),h=Fy(t),f=by(t),p=vy(o),_=r.createProgram(),m,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(xs).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(xs).join(`
`),g.length>0&&(g+=`
`)):(m=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),g=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?nt.tonemapping_pars_fragment:"",t.toneMapping!==Un?gy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,py("linearToOutputTexel",t.outputColorSpace),_y(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),s=wh(s),s=wp(s,t),s=Mp(s,t),a=wh(a),a=wp(a,t),a=Mp(a,t),s=Sp(s),a=Sp(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=w+m+s,b=w+g+a,x=vp(r,r.VERTEX_SHADER,y),M=vp(r,r.FRAGMENT_SHADER,b);r.attachShader(_,x),r.attachShader(_,M),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){let C=r.getProgramInfoLog(_)||"",R=r.getShaderInfoLog(x)||"",T=r.getShaderInfoLog(M)||"",I=C.trim(),F=R.trim(),z=T.trim(),B=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,x,M);else{let O=yp(r,x,"vertex"),G=yp(r,M,"fragment");qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+O+`
`+G)}else I!==""?Xe("WebGLProgram: Program Info Log:",I):(F===""||z==="")&&(N=!1);N&&(P.diagnostics={runnable:B,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:g}})}r.deleteShader(x),r.deleteShader(M),v=new uo(r,_),S=xy(r,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,uy)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=M,this}var Ny=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sh(e),t.set(e,n)),n}},Sh=class{constructor(e){this.id=Ny++,this.code=e,this.usedTimes=0}};function zy(i){return i===Ui||i===ms||i===gs}function By(i,e,t,n,r,o){let s=new jr,a=new Mh,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,S,E,P,C,R){let T=P.fog,I=C.geometry,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,B=e.get(v.envMap||F,z),N=B&&B.mapping===cs?B.image.height:null,O=f[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Xe("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let G=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,$=G!==void 0?G.length:0,Z=0;I.morphAttributes.position!==void 0&&(Z=1),I.morphAttributes.normal!==void 0&&(Z=2),I.morphAttributes.color!==void 0&&(Z=3);let ue,ne,ae,H;if(O){let Tt=ni[O];ue=Tt.vertexShader,ne=Tt.fragmentShader}else{ue=v.vertexShader,ne=v.fragmentShader;let Tt=a.getVertexShaderStage(v),bt=a.getFragmentShaderStage(v);a.update(v,Tt,bt),ae=Tt.id,H=bt.id}let W=i.getRenderTarget(),se=i.state.buffers.depth.getReversed(),he=C.isInstancedMesh===!0,ie=C.isBatchedMesh===!0,de=!!v.map,Oe=!!v.matcap,Ne=!!B,Ie=!!v.aoMap,Le=!!v.lightMap,Ue=!!v.bumpMap&&v.wireframe===!1,at=!!v.normalMap,wt=!!v.displacementMap,Bt=!!v.emissiveMap,et=!!v.metalnessMap,mt=!!v.roughnessMap,K=v.anisotropy>0,Vt=v.clearcoat>0,gt=v.dispersion>0,V=v.retroreflectivity>0,k=v.iridescence>0,q=v.sheen>0,ee=v.transmission>0,re=K&&!!v.anisotropyMap,me=Vt&&!!v.clearcoatMap,ge=Vt&&!!v.clearcoatNormalMap,oe=Vt&&!!v.clearcoatRoughnessMap,ce=k&&!!v.iridescenceMap,_e=k&&!!v.iridescenceThicknessMap,ze=q&&!!v.sheenColorMap,ye=q&&!!v.sheenRoughnessMap,be=!!v.specularMap,Be=!!v.specularColorMap,Ye=!!v.specularIntensityMap,je=ee&&!!v.transmissionMap,Y=ee&&!!v.thicknessMap,ve=!!v.gradientMap,le=!!v.alphaMap,xe=v.alphaTest>0,Ae=!!v.alphaHash,fe=!!v.extensions,Ve=Un;v.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ve=i.toneMapping);let Fe={shaderID:O,shaderType:v.type,shaderName:v.name,vertexShader:ue,fragmentShader:ne,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:H,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:ie,batchingColor:ie&&C._colorsTexture!==null,instancing:he,instancingColor:he&&C.instanceColor!==null,instancingMorph:he&&C.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:de,matcap:Oe,envMap:Ne,envMapMode:Ne&&B.mapping,envMapCubeUVHeight:N,aoMap:Ie,lightMap:Le,bumpMap:Ue,normalMap:at,displacementMap:wt,emissiveMap:Bt,normalMapObjectSpace:at&&v.normalMapType===Gf,normalMapTangentSpace:at&&v.normalMapType===ju,packedNormalMap:at&&v.normalMapType===ju&&zy(v.normalMap.format),metalnessMap:et,roughnessMap:mt,anisotropy:K,anisotropyMap:re,clearcoat:Vt,clearcoatMap:me,clearcoatNormalMap:ge,clearcoatRoughnessMap:oe,dispersion:gt,retroreflection:V,iridescence:k,iridescenceMap:ce,iridescenceThicknessMap:_e,sheen:q,sheenColorMap:ze,sheenRoughnessMap:ye,specularMap:be,specularColorMap:Be,specularIntensityMap:Ye,transmission:ee,transmissionMap:je,thicknessMap:Y,gradientMap:ve,opaque:v.transparent===!1&&v.blending===Ni&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:xe,alphaHash:Ae,combine:v.combine,mapUv:de&&p(v.map.channel),aoMapUv:Ie&&p(v.aoMap.channel),lightMapUv:Le&&p(v.lightMap.channel),bumpMapUv:Ue&&p(v.bumpMap.channel),normalMapUv:at&&p(v.normalMap.channel),displacementMapUv:wt&&p(v.displacementMap.channel),emissiveMapUv:Bt&&p(v.emissiveMap.channel),metalnessMapUv:et&&p(v.metalnessMap.channel),roughnessMapUv:mt&&p(v.roughnessMap.channel),anisotropyMapUv:re&&p(v.anisotropyMap.channel),clearcoatMapUv:me&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&p(v.sheenRoughnessMap.channel),specularMapUv:be&&p(v.specularMap.channel),specularColorMapUv:Be&&p(v.specularColorMap.channel),specularIntensityMapUv:Ye&&p(v.specularIntensityMap.channel),transmissionMapUv:je&&p(v.transmissionMap.channel),thicknessMapUv:Y&&p(v.thicknessMap.channel),alphaMapUv:le&&p(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(at||K),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!I.attributes.uv&&(de||le),fog:!!T,useFog:v.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&at===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:se,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Z,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:R.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:de&&v.map.isVideoTexture===!0&&ut.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&ut.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ht,flipSided:v.side===un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:fe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&v.extensions.multiDraw===!0||ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function m(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let E in v.defines)S.push(E),S.push(v.defines[E]);return v.isRawShaderMaterial===!1&&(g(S,v),w(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function g(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function w(v,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.retroreflection&&s.enable(24),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function y(v){let S=f[v.type],E;if(S){let P=ni[S];E=sp.clone(P.uniforms)}else E=v.uniforms;return E}function b(v,S){let E=u.get(S);return E!==void 0?++E.usedTimes:(E=new Dy(i,S,v,r),c.push(E),u.set(S,E)),E}function x(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:M,programs:c,dispose:A}}function Oy(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function Uy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ap(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ep(){let i=[],e=0,t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,_,m,g){let w=i[e];return w===void 0?(w={id:h.id,object:h,geometry:f,material:p,materialVariant:s(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},i[e]=w):(w.id=h.id,w.object=h,w.geometry=f,w.material=p,w.materialVariant=s(h),w.groupOrder=_,w.renderOrder=h.renderOrder,w.z=m,w.group=g),e++,w}function l(h,f,p,_,m,g,w){w.reversedDepth===!0&&(m=-m);let y=a(h,f,p,_,m,g);p.transmission>0?n.push(y):p.transparent===!0?r.push(y):t.push(y)}function c(h,f,p,_,m,g){let w=a(h,f,p,_,m,g);p.transmission>0?n.unshift(w):p.transparent===!0?r.unshift(w):t.unshift(w)}function u(h,f){t.length>1&&t.sort(h||Uy),n.length>1&&n.sort(f||Ap),r.length>1&&r.sort(f||Ap)}function d(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:d,sort:u}}function Vy(){let i=new WeakMap;function e(n,r){let o=i.get(n),s;return o===void 0?(s=new Ep,i.set(n,[s])):r>=o.length?(s=new Ep,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Q};break;case"SpotLight":t={position:new U,direction:new U,color:new Q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Q,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Q,groundColor:new Q};break;case"RectAreaLight":t={color:new Q,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Hy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Wy=0;function Xy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ky(i){let e=new Gy,t=Hy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let r=new U,o=new Pt,s=new Pt;function a(c){let u=0,d=0,h=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,w=0,y=0,b=0,x=0,M=0,A=0,v=0,S=0,E=0;c.sort(Xy);for(let C=0,R=c.length;C<R;C++){let T=c[C],I=T.color,F=T.intensity,z=T.distance,B=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Ui?B=T.shadow.map.texture:B=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)u+=I.r*F,d+=I.g*F,h+=I.b*F;else if(T.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(T.sh.coefficients[N],F);E++}else if(T.isSunLight){let N=e.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let O=T.shadow,G=t.get(T);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[p]=G,n.sunShadowMap[p]=B;let $=O.getViewportCount();for(let Z=0;Z<$;Z++)n.sunShadowMatrix[_+Z]=O.getMatrix(Z),n.sunShadowCascade[_+Z]=O._cascadeData[Z];_+=$,p++}n.sun[f]=N,f++}else if(T.isDirectionalLight){let N=e.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let O=T.shadow,G=t.get(T);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=T.shadow.matrix,x++}n.directional[m]=N,m++}else if(T.isSpotLight){let N=e.get(T);N.position.setFromMatrixPosition(T.matrixWorld),N.color.copy(I).multiplyScalar(F),N.distance=z,N.coneCos=Math.cos(T.angle),N.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),N.decay=T.decay,n.spot[w]=N;let O=T.shadow;if(T.map&&(n.spotLightMap[v]=T.map,v++,O.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[w]=O.matrix,T.castShadow){let G=t.get(T);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.spotShadow[w]=G,n.spotShadowMap[w]=B,A++}w++}else if(T.isRectAreaLight){let N=e.get(T);N.color.copy(I).multiplyScalar(F),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),n.rectArea[y]=N,y++}else if(T.isPointLight){let N=e.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),N.distance=T.distance,N.decay=T.decay,T.castShadow){let O=T.shadow,G=t.get(T);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,G.shadowCameraNear=O.camera.near,G.shadowCameraFar=O.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=T.shadow.matrix,M++}n.point[g]=N,g++}else if(T.isHemisphereLight){let N=e.get(T);N.skyColor.copy(T.color).multiplyScalar(F),N.groundColor.copy(T.groundColor).multiplyScalar(F),n.hemi[b]=N,b++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==w||P.rectAreaLength!==y||P.hemiLength!==b||P.numSunShadows!==p||P.numDirectionalShadows!==x||P.numPointShadows!==M||P.numSpotShadows!==A||P.numSpotMaps!==v||P.numLightProbes!==E)&&(n.sun.length=f,n.directional.length=m,n.spot.length=w,n.rectArea.length=y,n.point.length=g,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.directionalShadowMatrix.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-S,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=w,P.rectAreaLength=y,P.hemiLength=b,P.numSunShadows=p,P.numDirectionalShadows=x,P.numPointShadows=M,P.numSpotShadows=A,P.numSpotMaps=v,P.numLightProbes=E,n.version=Wy++)}function l(c,u){let d=0,h=0,f=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let w=0,y=c.length;w<y;w++){let b=c[w];if(b.isSunLight){let x=n.sun[d];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(g),d++}else if(b.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),h++}else if(b.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),s.identity(),o.copy(b.matrixWorld),o.premultiply(g),s.extractRotation(o),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),_++}else if(b.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let x=n.hemi[m];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Rp(i){let e=new Ky(i),t=[],n=[],r=[];function o(h){d.camera=h,t.length=0,n.length=0,r.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:d,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function Yy(i){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new Rp(i),e.set(r,[a])):o>=s.length?(a=new Rp(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zy=`uniform sampler2D shadow_pass;
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
}`,$y=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Jy=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Pp=new Pt,vs=new U,_h=new U;function jy(i,e,t){let n=new Go,r=new Ee,o=new Ee,s=new Lt,a=new ja,l=new Qa,c={},u=t.maxTextureSize,d={[Di]:un,[un]:Di,[ht]:ht},h=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:qy,fragmentShader:Zy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ke;p.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new He(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=as;let g=this.type;this.render=function(M,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===vf&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=as);let S=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),C=i.state;C.setBlending(ei),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let R=g!==this.type;R&&A.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(I=>I.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,I=M.length;T<I;T++){let F=M[T],z=F.shadow;if(z===void 0){Xe("WebGLShadowMap:",F,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let B=z.getFrameExtents();r.multiply(B),o.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/B.x),r.x=o.x*B.x,z.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/B.y),r.y=o.y*B.y,z.mapSize.y=o.y));let N=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=N,z.map===null||R===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===oo){if(F.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new rn(r.x,r.y,{format:Ui,type:Hn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),z.map.texture.name=F.name+".shadowMap",z.map.depthTexture=new ki(r.x,r.y,Gn),z.map.depthTexture.name=F.name+".shadowMapDepth",z.map.depthTexture.format=$n,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Kt,z.map.depthTexture.magFilter=Kt}else F.isPointLight?(z.map=new ic(r.x),z.map.depthTexture=new Ha(r.x,Vn)):(z.map=new rn(r.x,r.y),z.map.depthTexture=new ki(r.x,r.y,Vn)),z.map.depthTexture.name=F.name+".shadowMap",z.map.depthTexture.format=$n,this.type===as?(z.map.depthTexture.compareFunction=N?Ql:jl,z.map.depthTexture.minFilter=qt,z.map.depthTexture.magFilter=qt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Kt,z.map.depthTexture.magFilter=Kt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==r.x||z.map.height!==r.y)&&z.map.setSize(r.x,r.y);let O=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();F.isPointLight!==!0&&z.updateMatrices(F,v);for(let G=0;G<O;G++){let $=z.getCamera(G);if(F.isPointLight){let Z=z.camera,ue=z.matrix,ne=F.distance||Z.far;ne!==Z.far&&(Z.far=ne,Z.updateProjectionMatrix()),vs.setFromMatrixPosition(F.matrixWorld),Z.position.copy(vs),_h.copy(Z.position),_h.add($y[G]),Z.up.copy(Jy[G]),Z.lookAt(_h),Z.updateMatrixWorld(),ue.makeTranslation(-vs.x,-vs.y,-vs.z),Pp.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Pp,Z.coordinateSystem,Z.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,G),i.clear();else{G===0&&(i.setRenderTarget(z.map),i.clear());let Z=z.getViewport(G);s.set(o.x*Z.x,o.y*Z.y,o.x*Z.z,o.y*Z.w),C.viewport(s)}n=z.getFrustum(G),b(A,v,$,F,this.type)}z.isPointLightShadow!==!0&&this.type===oo&&w(z,v),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(S,E,P)};function w(M,A){let v=e.update(_);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new rn(r.x,r.y,{format:Ui,type:Hn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,v,h,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,v,f,_,null)}function y(M,A,v,S){let E=null,P=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)E=P;else if(E=v.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let C=E.uuid,R=A.uuid,T=c[C];T===void 0&&(T={},c[C]=T);let I=T[R];I===void 0&&(I=E.clone(),T[R]=I,A.addEventListener("dispose",x)),E=I}if(E.visible=A.visible,E.wireframe=A.wireframe,S===oo?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:d[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,v.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let C=i.properties.get(E);C.light=v}return E}function b(M,A,v,S,E){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===oo)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let R=e.update(M),T=M.material;if(Array.isArray(T)){let I=R.groups;for(let F=0,z=I.length;F<z;F++){let B=I[F],N=T[B.materialIndex];if(N&&N.visible){let O=y(M,N,S,E);M.onBeforeShadow(i,M,A,v,R,O,B),i.renderBufferDirect(v,null,R,O,M,B),M.onAfterShadow(i,M,A,v,R,O,B)}}}else if(T.visible){let I=y(M,T,S,E);M.onBeforeShadow(i,M,A,v,R,I,null),i.renderBufferDirect(v,null,R,I,M,null),M.onAfterShadow(i,M,A,v,R,I,null)}}let C=M.children;for(let R=0,T=C.length;R<T;R++)b(C[R],A,v,S,E)}function x(M){M.target.removeEventListener("dispose",x);for(let v in c){let S=c[v],E=M.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function Qy(i,e){function t(){let Y=!1,ve=new Lt,le=null,xe=new Lt(0,0,0,0);return{setMask:function(Ae){le!==Ae&&!Y&&(i.colorMask(Ae,Ae,Ae,Ae),le=Ae)},setLocked:function(Ae){Y=Ae},setClear:function(Ae,fe,Ve,Fe,Tt){Tt===!0&&(Ae*=Fe,fe*=Fe,Ve*=Fe),ve.set(Ae,fe,Ve,Fe),xe.equals(ve)===!1&&(i.clearColor(Ae,fe,Ve,Fe),xe.copy(ve))},reset:function(){Y=!1,le=null,xe.set(-1,0,0,0)}}}function n(){let Y=!1,ve=!1,le=null,xe=null,Ae=null;return{setReversed:function(fe){if(ve!==fe){let Ve=e.get("EXT_clip_control");fe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ve=fe;let Fe=Ae;Ae=null,this.setClear(Fe)}},getReversed:function(){return ve},setTest:function(fe){fe?W(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(fe){le!==fe&&!Y&&(i.depthMask(fe),le=fe)},setFunc:function(fe){if(ve&&(fe=ep[fe]),xe!==fe){switch(fe){case Aa:i.depthFunc(i.NEVER);break;case Ea:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case qr:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case Ca:i.depthFunc(i.GREATER);break;case Ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=fe}},setLocked:function(fe){Y=fe},setClear:function(fe){Ae!==fe&&(Ae=fe,ve&&(fe=1-fe),i.clearDepth(fe))},reset:function(){Y=!1,le=null,xe=null,Ae=null,ve=!1}}}function r(){let Y=!1,ve=null,le=null,xe=null,Ae=null,fe=null,Ve=null,Fe=null,Tt=null;return{setTest:function(bt){Y||(bt?W(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(bt){ve!==bt&&!Y&&(i.stencilMask(bt),ve=bt)},setFunc:function(bt,In,Yn){(le!==bt||xe!==In||Ae!==Yn)&&(i.stencilFunc(bt,In,Yn),le=bt,xe=In,Ae=Yn)},setOp:function(bt,In,Yn){(fe!==bt||Ve!==In||Fe!==Yn)&&(i.stencilOp(bt,In,Yn),fe=bt,Ve=In,Fe=Yn)},setLocked:function(bt){Y=bt},setClear:function(bt){Tt!==bt&&(i.clearStencil(bt),Tt=bt)},reset:function(){Y=!1,ve=null,le=null,xe=null,Ae=null,fe=null,Ve=null,Fe=null,Tt=null}}}let o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],_=null,m=!1,g=null,w=null,y=null,b=null,x=null,M=null,A=null,v=new Q(0,0,0),S=0,E=!1,P=null,C=null,R=null,T=null,I=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,B=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(N)[1]),z=B>=1):N.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),z=B>=2);let O=null,G={},$=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),ue=new Lt().fromArray($),ne=new Lt().fromArray(Z);function ae(Y,ve,le,xe){let Ae=new Uint8Array(4),fe=i.createTexture();i.bindTexture(Y,fe),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<le;Ve++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(ve+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return fe}let H={};H[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),W(i.DEPTH_TEST),s.setFunc(qr),Ue(!1),at(Iu),W(i.CULL_FACE),Ie(ei);function W(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function se(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function he(Y,ve){return h[Y]!==ve?(i.bindFramebuffer(Y,ve),h[Y]=ve,Y===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),Y===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function ie(Y,ve){let le=p,xe=!1;if(Y){le=f.get(ve),le===void 0&&(le=[],f.set(ve,le));let Ae=Y.textures;if(le.length!==Ae.length||le[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Ve=Ae.length;fe<Ve;fe++)le[fe]=i.COLOR_ATTACHMENT0+fe;le.length=Ae.length,xe=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,xe=!0);xe&&i.drawBuffers(le)}function de(Y){return _!==Y?(i.useProgram(Y),_=Y,!0):!1}let Oe={[dr]:i.FUNC_ADD,[yf]:i.FUNC_SUBTRACT,[wf]:i.FUNC_REVERSE_SUBTRACT};Oe[Mf]=i.MIN,Oe[Sf]=i.MAX;let Ne={[Tf]:i.ZERO,[Af]:i.ONE,[Ef]:i.SRC_COLOR,[Fu]:i.SRC_ALPHA,[Lf]:i.SRC_ALPHA_SATURATE,[Cf]:i.DST_COLOR,[Pf]:i.DST_ALPHA,[Rf]:i.ONE_MINUS_SRC_COLOR,[Du]:i.ONE_MINUS_SRC_ALPHA,[If]:i.ONE_MINUS_DST_COLOR,[kf]:i.ONE_MINUS_DST_ALPHA,[Ff]:i.CONSTANT_COLOR,[Df]:i.ONE_MINUS_CONSTANT_COLOR,[Nf]:i.CONSTANT_ALPHA,[zf]:i.ONE_MINUS_CONSTANT_ALPHA};function Ie(Y,ve,le,xe,Ae,fe,Ve,Fe,Tt,bt){if(Y===ei){m===!0&&(se(i.BLEND),m=!1);return}if(m===!1&&(W(i.BLEND),m=!0),Y!==xf){if(Y!==g||bt!==E){if((w!==dr||x!==dr)&&(i.blendEquation(i.FUNC_ADD),w=dr,x=dr),bt)switch(Y){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ft:i.blendFunc(i.ONE,i.ONE);break;case Lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ls:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ft:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lu:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ls:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",Y);break}y=null,b=null,M=null,A=null,v.set(0,0,0),S=0,g=Y,E=bt}return}Ae=Ae||ve,fe=fe||le,Ve=Ve||xe,(ve!==w||Ae!==x)&&(i.blendEquationSeparate(Oe[ve],Oe[Ae]),w=ve,x=Ae),(le!==y||xe!==b||fe!==M||Ve!==A)&&(i.blendFuncSeparate(Ne[le],Ne[xe],Ne[fe],Ne[Ve]),y=le,b=xe,M=fe,A=Ve),(Fe.equals(v)===!1||Tt!==S)&&(i.blendColor(Fe.r,Fe.g,Fe.b,Tt),v.copy(Fe),S=Tt),g=Y,E=!1}function Le(Y,ve){Y.side===ht?se(i.CULL_FACE):W(i.CULL_FACE);let le=Y.side===un;ve&&(le=!le),Ue(le),Y.blending===Ni&&Y.transparent===!1?Ie(ei):Ie(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),s.setFunc(Y.depthFunc),s.setTest(Y.depthTest),s.setMask(Y.depthWrite),o.setMask(Y.colorWrite);let xe=Y.stencilWrite;a.setTest(xe),xe&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Bt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(Y){P!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),P=Y)}function at(Y){Y!==_f?(W(i.CULL_FACE),Y!==C&&(Y===Iu?i.cullFace(i.BACK):Y===bf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),C=Y}function wt(Y){Y!==R&&(z&&i.lineWidth(Y),R=Y)}function Bt(Y,ve,le){Y?(W(i.POLYGON_OFFSET_FILL),(T!==ve||I!==le)&&(T=ve,I=le,s.getReversed()&&(ve=-ve),i.polygonOffset(ve,le))):se(i.POLYGON_OFFSET_FILL)}function et(Y){Y?W(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function mt(Y){Y===void 0&&(Y=i.TEXTURE0+F-1),O!==Y&&(i.activeTexture(Y),O=Y)}function K(Y,ve,le){le===void 0&&(O===null?le=i.TEXTURE0+F-1:le=O);let xe=G[le];xe===void 0&&(xe={type:void 0,texture:void 0},G[le]=xe),(xe.type!==Y||xe.texture!==ve)&&(O!==le&&(i.activeTexture(le),O=le),i.bindTexture(Y,ve||H[Y]),xe.type=Y,xe.texture=ve)}function Vt(){let Y=G[O];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function gt(){try{i.compressedTexImage2D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function k(){try{i.texSubImage2D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function q(){try{i.texSubImage3D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function me(){try{i.texStorage2D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function ge(){try{i.texStorage3D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function oe(){try{i.texImage2D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function ce(){try{i.texImage3D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function _e(Y){return d[Y]!==void 0?d[Y]:i.getParameter(Y)}function ze(Y,ve){d[Y]!==ve&&(i.pixelStorei(Y,ve),d[Y]=ve)}function ye(Y){ue.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),ue.copy(Y))}function be(Y){ne.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),ne.copy(Y))}function Be(Y,ve){let le=c.get(ve);le===void 0&&(le=new WeakMap,c.set(ve,le));let xe=le.get(Y);xe===void 0&&(xe=i.getUniformBlockIndex(ve,Y.name),le.set(Y,xe))}function Ye(Y,ve){let xe=c.get(ve).get(Y);l.get(ve)!==xe&&(i.uniformBlockBinding(ve,xe,Y.__bindingPointIndex),l.set(ve,xe))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},O=null,G={},h={},f=new WeakMap,p=[],_=null,m=!1,g=null,w=null,y=null,b=null,x=null,M=null,A=null,v=new Q(0,0,0),S=0,E=!1,P=null,C=null,R=null,T=null,I=null,ue.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:W,disable:se,bindFramebuffer:he,drawBuffers:ie,useProgram:de,setBlending:Ie,setMaterial:Le,setFlipSided:Ue,setCullFace:at,setLineWidth:wt,setPolygonOffset:Bt,setScissorTest:et,activeTexture:mt,bindTexture:K,unbindTexture:Vt,compressedTexImage2D:gt,compressedTexImage3D:V,texImage2D:oe,texImage3D:ce,pixelStorei:ze,getParameter:_e,updateUBOMapping:Be,uniformBlockBinding:Ye,texStorage2D:me,texStorage3D:ge,texSubImage2D:k,texSubImage3D:q,compressedTexSubImage2D:ee,compressedTexSubImage3D:re,scissor:ye,viewport:be,reset:je}}function ew(i,e,t,n,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap,d=new Set,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(V,k){return p?new OffscreenCanvas(V,k):Zr("canvas")}function m(V,k,q){let ee=1,re=gt(V);if((re.width>q||re.height>q)&&(ee=q/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let me=Math.floor(ee*re.width),ge=Math.floor(ee*re.height);h===void 0&&(h=_(me,ge));let oe=k?_(me,ge):h;return oe.width=me,oe.height=ge,oe.getContext("2d").drawImage(V,0,0,me,ge),Xe("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+me+"x"+ge+")."),oe}else return"data"in V&&Xe("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),V;return V}function g(V){return V.generateMipmaps}function w(V){i.generateMipmap(V)}function y(V){return V.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?i.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(V,k,q,ee,re,me=!1){if(V!==null){if(i[V]!==void 0)return i[V];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let ge;ee&&(ge=e.get("EXT_texture_norm16"),ge||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=k;if(k===i.RED&&(q===i.FLOAT&&(oe=i.R32F),q===i.HALF_FLOAT&&(oe=i.R16F),q===i.UNSIGNED_BYTE&&(oe=i.R8),q===i.UNSIGNED_SHORT&&ge&&(oe=ge.R16_EXT),q===i.SHORT&&ge&&(oe=ge.R16_SNORM_EXT)),k===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.R8UI),q===i.UNSIGNED_SHORT&&(oe=i.R16UI),q===i.UNSIGNED_INT&&(oe=i.R32UI),q===i.BYTE&&(oe=i.R8I),q===i.SHORT&&(oe=i.R16I),q===i.INT&&(oe=i.R32I)),k===i.RG&&(q===i.FLOAT&&(oe=i.RG32F),q===i.HALF_FLOAT&&(oe=i.RG16F),q===i.UNSIGNED_BYTE&&(oe=i.RG8),q===i.UNSIGNED_SHORT&&ge&&(oe=ge.RG16_EXT),q===i.SHORT&&ge&&(oe=ge.RG16_SNORM_EXT)),k===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.RG8UI),q===i.UNSIGNED_SHORT&&(oe=i.RG16UI),q===i.UNSIGNED_INT&&(oe=i.RG32UI),q===i.BYTE&&(oe=i.RG8I),q===i.SHORT&&(oe=i.RG16I),q===i.INT&&(oe=i.RG32I)),k===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),q===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),q===i.UNSIGNED_INT&&(oe=i.RGB32UI),q===i.BYTE&&(oe=i.RGB8I),q===i.SHORT&&(oe=i.RGB16I),q===i.INT&&(oe=i.RGB32I)),k===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),q===i.UNSIGNED_INT&&(oe=i.RGBA32UI),q===i.BYTE&&(oe=i.RGBA8I),q===i.SHORT&&(oe=i.RGBA16I),q===i.INT&&(oe=i.RGBA32I)),k===i.RGB&&(q===i.UNSIGNED_SHORT&&ge&&(oe=ge.RGB16_EXT),q===i.SHORT&&ge&&(oe=ge.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),k===i.RGBA){let ce=me?zo:ut.getTransfer(re);q===i.FLOAT&&(oe=i.RGBA32F),q===i.HALF_FLOAT&&(oe=i.RGBA16F),q===i.UNSIGNED_BYTE&&(oe=ce===xt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&ge&&(oe=ge.RGBA16_EXT),q===i.SHORT&&ge&&(oe=ge.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function x(V,k){let q;return V?k===null||k===Vn||k===ao?q=i.DEPTH24_STENCIL8:k===Gn?q=i.DEPTH32F_STENCIL8:k===so&&(q=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):k===null||k===Vn||k===ao?q=i.DEPTH_COMPONENT24:k===Gn?q=i.DEPTH_COMPONENT32F:k===so&&(q=i.DEPTH_COMPONENT16),q}function M(V,k){return g(V)===!0||V.isFramebufferTexture&&V.minFilter!==Kt&&V.minFilter!==qt?Math.log2(Math.max(k.width,k.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?k.mipmaps.length:1}function A(V){let k=V.target;k.removeEventListener("dispose",A),S(k),k.isVideoTexture&&u.delete(k),k.isHTMLTexture&&d.delete(k)}function v(V){let k=V.target;k.removeEventListener("dispose",v),P(k)}function S(V){let k=n.get(V);if(k.__webglInit===void 0)return;let q=V.source,ee=f.get(q);if(ee){let re=ee[k.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(V),Object.keys(ee).length===0&&f.delete(q)}n.remove(V)}function E(V){let k=n.get(V);i.deleteTexture(k.__webglTexture);let q=V.source,ee=f.get(q);delete ee[k.__cacheKey],s.memory.textures--}function P(V){let k=n.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),n.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(k.__webglFramebuffer[ee]))for(let re=0;re<k.__webglFramebuffer[ee].length;re++)i.deleteFramebuffer(k.__webglFramebuffer[ee][re]);else i.deleteFramebuffer(k.__webglFramebuffer[ee]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[ee])}else{if(Array.isArray(k.__webglFramebuffer))for(let ee=0;ee<k.__webglFramebuffer.length;ee++)i.deleteFramebuffer(k.__webglFramebuffer[ee]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let q=V.textures;for(let ee=0,re=q.length;ee<re;ee++){let me=n.get(q[ee]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),s.memory.textures--),n.remove(q[ee])}n.remove(V)}let C=0;function R(){C=0}function T(){return C}function I(V){C=V}function F(){let V=C;return V>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+(V+1)+" texture units while this GPU supports only "+r.maxTextures),C+=1,V}function z(V){let k=[];return k.push(V.wrapS),k.push(V.wrapT),k.push(V.wrapR||0),k.push(V.magFilter),k.push(V.minFilter),k.push(V.anisotropy),k.push(V.internalFormat),k.push(V.format),k.push(V.type),k.push(V.generateMipmaps),k.push(V.premultiplyAlpha),k.push(V.flipY),k.push(V.unpackAlignment),k.push(V.colorSpace),k.join()}function B(V,k){let q=n.get(V);if(V.isVideoTexture&&K(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&q.__version!==V.version){let ee=V.image;if(ee===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{se(q,V,k);return}}else V.isExternalTexture&&(q.__webglTexture=V.sourceTexture?V.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+k)}function N(V,k){let q=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&q.__version!==V.version){se(q,V,k);return}else V.isExternalTexture&&(q.__webglTexture=V.sourceTexture?V.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+k)}function O(V,k){let q=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&q.__version!==V.version){se(q,V,k);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+k)}function G(V,k){let q=n.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&q.__version!==V.version){he(q,V,k);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+k)}let $={[ar]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},Z={[Kt]:i.NEAREST,[Uf]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[ml]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},ue={[Wf]:i.NEVER,[Zf]:i.ALWAYS,[Xf]:i.LESS,[jl]:i.LEQUAL,[Kf]:i.EQUAL,[Ql]:i.GEQUAL,[Yf]:i.GREATER,[qf]:i.NOTEQUAL};function ne(V,k){if(k.type===Gn&&e.has("OES_texture_float_linear")===!1&&(k.magFilter===qt||k.magFilter===ml||k.magFilter===us||k.magFilter===Bi||k.minFilter===qt||k.minFilter===ml||k.minFilter===us||k.minFilter===Bi)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(V,i.TEXTURE_WRAP_S,$[k.wrapS]),i.texParameteri(V,i.TEXTURE_WRAP_T,$[k.wrapT]),(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)&&i.texParameteri(V,i.TEXTURE_WRAP_R,$[k.wrapR]),i.texParameteri(V,i.TEXTURE_MAG_FILTER,Z[k.magFilter]),i.texParameteri(V,i.TEXTURE_MIN_FILTER,Z[k.minFilter]),k.compareFunction&&(i.texParameteri(V,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(V,i.TEXTURE_COMPARE_FUNC,ue[k.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===Kt||k.minFilter!==us&&k.minFilter!==Bi||k.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||n.get(k).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(V,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,r.getMaxAnisotropy())),n.get(k).__currentAnisotropy=k.anisotropy}}}function ae(V,k){let q=!1;V.__webglInit===void 0&&(V.__webglInit=!0,k.addEventListener("dispose",A));let ee=k.source,re=f.get(ee);re===void 0&&(re={},f.set(ee,re));let me=z(k);if(me!==V.__cacheKey){re[me]===void 0&&(re[me]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,q=!0),re[me].usedTimes++;let ge=re[V.__cacheKey];ge!==void 0&&(re[V.__cacheKey].usedTimes--,ge.usedTimes===0&&E(k)),V.__cacheKey=me,V.__webglTexture=re[me].texture}return q}function H(V,k,q){return Math.floor(Math.floor(V/q)/k)}function W(V,k,q,ee){let me=V.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,k.width,k.height,q,ee,k.data);else{me.sort((ze,ye)=>ze.start-ye.start);let ge=0;for(let ze=1;ze<me.length;ze++){let ye=me[ge],be=me[ze],Be=ye.start+ye.count,Ye=H(be.start,k.width,4),je=H(ye.start,k.width,4);be.start<=Be+1&&Ye===je&&H(be.start+be.count-1,k.width,4)===Ye?ye.count=Math.max(ye.count,be.start+be.count-ye.start):(++ge,me[ge]=be)}me.length=ge+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),ce=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,k.width);for(let ze=0,ye=me.length;ze<ye;ze++){let be=me[ze],Be=Math.floor(be.start/4),Ye=Math.ceil(be.count/4),je=Be%k.width,Y=Math.floor(Be/k.width),ve=Ye,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,je),t.pixelStorei(i.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(i.TEXTURE_2D,0,je,Y,ve,le,q,ee,k.data)}V.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function se(V,k,q){let ee=i.TEXTURE_2D;(k.isDataArrayTexture||k.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),k.isData3DTexture&&(ee=i.TEXTURE_3D);let re=ae(V,k),me=k.source;t.bindTexture(ee,V.__webglTexture,i.TEXTURE0+q);let ge=n.get(me);if(me.version!==ge.__version||re===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&k.image instanceof ImageBitmap)===!1){let le=ut.getPrimaries(ut.workingColorSpace),xe=k.colorSpace===fi?null:ut.getPrimaries(k.colorSpace),Ae=k.colorSpace===fi||le===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,k.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,k.unpackAlignment);let ce=m(k.image,!1,r.maxTextureSize);ce=Vt(k,ce);let _e=o.convert(k.format,k.colorSpace),ze=o.convert(k.type),ye=b(k.internalFormat,_e,ze,k.normalized,k.colorSpace,k.isVideoTexture);ne(ee,k);let be,Be=k.mipmaps,Ye=k.isVideoTexture!==!0,je=ge.__version===void 0||re===!0,Y=me.dataReady,ve=M(k,ce);if(k.isDepthTexture)ye=x(k.format===Oi,k.type),je&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,ye,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,ye,ce.width,ce.height,0,_e,ze,null));else if(k.isDataTexture)if(Be.length>0){Ye&&je&&t.texStorage2D(i.TEXTURE_2D,ve,ye,Be[0].width,Be[0].height);for(let le=0,xe=Be.length;le<xe;le++)be=Be[le],Ye?Y&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,be.width,be.height,_e,ze,be.data):t.texImage2D(i.TEXTURE_2D,le,ye,be.width,be.height,0,_e,ze,be.data);k.generateMipmaps=!1}else Ye?(je&&t.texStorage2D(i.TEXTURE_2D,ve,ye,ce.width,ce.height),Y&&W(k,ce,_e,ze)):t.texImage2D(i.TEXTURE_2D,0,ye,ce.width,ce.height,0,_e,ze,ce.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){Ye&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,ye,Be[0].width,Be[0].height,ce.depth);for(let le=0,xe=Be.length;le<xe;le++)if(be=Be[le],k.format!==Rn)if(_e!==null)if(Ye){if(Y)if(k.layerUpdates.size>0){let Ae=sh(be.width,be.height,k.format,k.type);for(let fe of k.layerUpdates){let Ve=be.data.subarray(fe*Ae/be.data.BYTES_PER_ELEMENT,(fe+1)*Ae/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,fe,be.width,be.height,1,_e,Ve)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,be.width,be.height,ce.depth,_e,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,ye,be.width,be.height,ce.depth,0,be.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,be.width,be.height,ce.depth,_e,ze,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,ye,be.width,be.height,ce.depth,0,_e,ze,be.data);k.layerUpdates.size>0&&k.clearLayerUpdates()}else{Ye&&je&&t.texStorage2D(i.TEXTURE_2D,ve,ye,Be[0].width,Be[0].height);for(let le=0,xe=Be.length;le<xe;le++)be=Be[le],k.format!==Rn?_e!==null?Ye?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,be.width,be.height,_e,be.data):t.compressedTexImage2D(i.TEXTURE_2D,le,ye,be.width,be.height,0,be.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Y&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,be.width,be.height,_e,ze,be.data):t.texImage2D(i.TEXTURE_2D,le,ye,be.width,be.height,0,_e,ze,be.data)}else if(k.isDataArrayTexture)if(Ye){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,ye,ce.width,ce.height,ce.depth),Y)if(k.layerUpdates.size>0){let le=sh(ce.width,ce.height,k.format,k.type);for(let xe of k.layerUpdates){let Ae=ce.data.subarray(xe*le/ce.data.BYTES_PER_ELEMENT,(xe+1)*le/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,ce.width,ce.height,1,_e,ze,Ae)}k.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,_e,ze,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ce.width,ce.height,ce.depth,0,_e,ze,ce.data);else if(k.isData3DTexture)Ye?(je&&t.texStorage3D(i.TEXTURE_3D,ve,ye,ce.width,ce.height,ce.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,_e,ze,ce.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ce.width,ce.height,ce.depth,0,_e,ze,ce.data);else if(k.isFramebufferTexture){if(je)if(Ye)t.texStorage2D(i.TEXTURE_2D,ve,ye,ce.width,ce.height);else{let le=ce.width,xe=ce.height;for(let Ae=0;Ae<ve;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,ye,le,xe,0,_e,ze,null),le>>=1,xe>>=1}}else if(k.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ce.parentNode!==le){le.appendChild(ce),d.add(k),le.onpaint=xe=>{let Ae=xe.changedElements;for(let fe of d)Ae.includes(fe.image)&&(fe.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ce);else{let Ae=i.RGBA,fe=i.RGBA,Ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,fe,Ve,ce)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Ye&&je){let le=gt(Be[0]);t.texStorage2D(i.TEXTURE_2D,ve,ye,le.width,le.height)}for(let le=0,xe=Be.length;le<xe;le++)be=Be[le],Ye?Y&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,_e,ze,be):t.texImage2D(i.TEXTURE_2D,le,ye,_e,ze,be);k.generateMipmaps=!1}else if(Ye){if(je){let le=gt(ce);t.texStorage2D(i.TEXTURE_2D,ve,ye,le.width,le.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,ze,ce)}else t.texImage2D(i.TEXTURE_2D,0,ye,_e,ze,ce);g(k)&&w(ee),ge.__version=me.version,k.onUpdate&&k.onUpdate(k)}V.__version=k.version}function he(V,k,q){if(k.image.length!==6)return;let ee=ae(V,k),re=k.source;t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+q);let me=n.get(re);if(re.version!==me.__version||ee===!0){t.activeTexture(i.TEXTURE0+q);let ge=ut.getPrimaries(ut.workingColorSpace),oe=k.colorSpace===fi?null:ut.getPrimaries(k.colorSpace),ce=k.colorSpace===fi||ge===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,k.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,k.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let _e=k.isCompressedTexture||k.image[0].isCompressedTexture,ze=k.image[0]&&k.image[0].isDataTexture,ye=[];for(let fe=0;fe<6;fe++)!_e&&!ze?ye[fe]=m(k.image[fe],!0,r.maxCubemapSize):ye[fe]=ze?k.image[fe].image:k.image[fe],ye[fe]=Vt(k,ye[fe]);let be=ye[0],Be=o.convert(k.format,k.colorSpace),Ye=o.convert(k.type),je=b(k.internalFormat,Be,Ye,k.normalized,k.colorSpace),Y=k.isVideoTexture!==!0,ve=me.__version===void 0||ee===!0,le=re.dataReady,xe=M(k,be);ne(i.TEXTURE_CUBE_MAP,k);let Ae;if(_e){Y&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,je,be.width,be.height);for(let fe=0;fe<6;fe++){Ae=ye[fe].mipmaps;for(let Ve=0;Ve<Ae.length;Ve++){let Fe=Ae[Ve];k.format!==Rn?Be!==null?Y?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ve,0,0,Fe.width,Fe.height,Be,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ve,je,Fe.width,Fe.height,0,Fe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ve,0,0,Fe.width,Fe.height,Be,Ye,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ve,je,Fe.width,Fe.height,0,Be,Ye,Fe.data)}}}else{if(Ae=k.mipmaps,Y&&ve){Ae.length>0&&xe++;let fe=gt(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,je,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ze){Y?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ye[fe].width,ye[fe].height,Be,Ye,ye[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,je,ye[fe].width,ye[fe].height,0,Be,Ye,ye[fe].data);for(let Ve=0;Ve<Ae.length;Ve++){let Tt=Ae[Ve].image[fe].image;Y?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ve+1,0,0,Tt.width,Tt.height,Be,Ye,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ve+1,je,Tt.width,Tt.height,0,Be,Ye,Tt.data)}}else{Y?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Be,Ye,ye[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,je,Be,Ye,ye[fe]);for(let Ve=0;Ve<Ae.length;Ve++){let Fe=Ae[Ve];Y?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ve+1,0,0,Be,Ye,Fe.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ve+1,je,Be,Ye,Fe.image[fe])}}}g(k)&&w(i.TEXTURE_CUBE_MAP),me.__version=re.version,k.onUpdate&&k.onUpdate(k)}V.__version=k.version}function ie(V,k,q,ee,re,me){let ge=o.convert(q.format,q.colorSpace),oe=o.convert(q.type),ce=b(q.internalFormat,ge,oe,q.normalized,q.colorSpace),_e=n.get(k),ze=n.get(q);if(ze.__renderTarget=k,!_e.__hasExternalTextures){let ye=Math.max(1,k.width>>me),be=Math.max(1,k.height>>me);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,me,ce,ye,be,k.depth,0,ge,oe,null):t.texImage2D(re,me,ce,ye,be,0,ge,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,V),mt(k)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,re,ze.__webglTexture,0,et(k)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,re,ze.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(V,k,q){if(i.bindRenderbuffer(i.RENDERBUFFER,V),k.depthBuffer){let ee=k.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,me=x(k.stencilBuffer,re),ge=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(k)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(k),me,k.width,k.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(k),me,k.width,k.height):i.renderbufferStorage(i.RENDERBUFFER,me,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,V)}else{let ee=k.textures;for(let re=0;re<ee.length;re++){let me=ee[re],ge=o.convert(me.format,me.colorSpace),oe=o.convert(me.type),ce=b(me.internalFormat,ge,oe,me.normalized,me.colorSpace);mt(k)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(k),ce,k.width,k.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(k),ce,k.width,k.height):i.renderbufferStorage(i.RENDERBUFFER,ce,k.width,k.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(V,k,q){let ee=k.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,V),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(k.depthTexture);if(re.__renderTarget=k,(!re.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)&&(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),ee){if(re.__webglInit===void 0&&(re.__webglInit=!0,k.depthTexture.addEventListener("dispose",A)),re.__webglTexture===void 0){re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),ne(i.TEXTURE_CUBE_MAP,k.depthTexture);let _e=o.convert(k.depthTexture.format),ze=o.convert(k.depthTexture.type),ye;k.depthTexture.format===$n?ye=i.DEPTH_COMPONENT24:k.depthTexture.format===Oi&&(ye=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ye,k.width,k.height,0,_e,ze,null)}}else B(k.depthTexture,0);let me=re.__webglTexture,ge=et(k),oe=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,ce=k.depthTexture.format===Oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(k.depthTexture.format===$n)mt(k)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,me,0);else if(k.depthTexture.format===Oi)mt(k)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(V){let k=n.get(V),q=V.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==V.depthTexture){let ee=V.depthTexture;if(k.__depthDisposeCallback&&k.__depthDisposeCallback(),ee){let re=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),k.__depthDisposeCallback=re}k.__boundDepthTexture=ee}if(V.depthTexture&&!k.__autoAllocateDepthBuffer)if(q)for(let ee=0;ee<6;ee++)Oe(k.__webglFramebuffer[ee],V,ee);else{let ee=V.texture.mipmaps;ee&&ee.length>0?Oe(k.__webglFramebuffer[0],V,0):Oe(k.__webglFramebuffer,V,0)}else if(q){k.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer[ee]),k.__webglDepthbuffer[ee]===void 0)k.__webglDepthbuffer[ee]=i.createRenderbuffer(),de(k.__webglDepthbuffer[ee],V,!1);else{let re=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=k.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,me)}}else{let ee=V.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=i.createRenderbuffer(),de(k.__webglDepthbuffer,V,!1);else{let re=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=k.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(V,k,q){let ee=n.get(V);k!==void 0&&ie(ee.__webglFramebuffer,V,V.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Ne(V)}function Le(V){let k=V.texture,q=n.get(V),ee=n.get(k);V.addEventListener("dispose",v);let re=V.textures,me=V.isWebGLCubeRenderTarget===!0,ge=re.length>1;if(ge||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=k.version,s.memory.textures++),me){q.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(k.mipmaps&&k.mipmaps.length>0){q.__webglFramebuffer[oe]=[];for(let ce=0;ce<k.mipmaps.length;ce++)q.__webglFramebuffer[oe][ce]=i.createFramebuffer()}else q.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){q.__webglFramebuffer=[];for(let oe=0;oe<k.mipmaps.length;oe++)q.__webglFramebuffer[oe]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ge)for(let oe=0,ce=re.length;oe<ce;oe++){let _e=n.get(re[oe]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),s.memory.textures++)}if(V.samples>0&&mt(V)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let oe=0;oe<re.length;oe++){let ce=re[oe];q.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[oe]);let _e=o.convert(ce.format,ce.colorSpace),ze=o.convert(ce.type),ye=b(ce.internalFormat,_e,ze,ce.normalized,ce.colorSpace,V.isXRRenderTarget===!0),be=et(V);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ye,V.width,V.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,q.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),V.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),de(q.__webglDepthRenderbuffer,V,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),ne(i.TEXTURE_CUBE_MAP,k);for(let oe=0;oe<6;oe++)if(k.mipmaps&&k.mipmaps.length>0)for(let ce=0;ce<k.mipmaps.length;ce++)ie(q.__webglFramebuffer[oe][ce],V,k,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else ie(q.__webglFramebuffer[oe],V,k,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(k)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let oe=0,ce=re.length;oe<ce;oe++){let _e=re[oe],ze=n.get(_e),ye=i.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(ye=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,ze.__webglTexture),ne(ye,_e),ie(q.__webglFramebuffer,V,_e,i.COLOR_ATTACHMENT0+oe,ye,0),g(_e)&&w(ye)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(oe=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,ee.__webglTexture),ne(oe,k),k.mipmaps&&k.mipmaps.length>0)for(let ce=0;ce<k.mipmaps.length;ce++)ie(q.__webglFramebuffer[ce],V,k,i.COLOR_ATTACHMENT0,oe,ce);else ie(q.__webglFramebuffer,V,k,i.COLOR_ATTACHMENT0,oe,0);g(k)&&w(oe),t.unbindTexture()}V.depthBuffer&&Ne(V)}function Ue(V){let k=V.textures;for(let q=0,ee=k.length;q<ee;q++){let re=k[q];if(g(re)){let me=y(V),ge=n.get(re).__webglTexture;t.bindTexture(me,ge),w(me),t.unbindTexture()}}}let at=[],wt=[];function Bt(V){if(V.samples>0){if(mt(V)===!1){let k=V.textures,q=V.width,ee=V.height,re=i.COLOR_BUFFER_BIT,me=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(V),oe=k.length>1;if(oe)for(let _e=0;_e<k.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let ce=V.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let _e=0;_e<k.length;_e++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let ze=n.get(k[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,q,ee,0,0,q,ee,re,i.NEAREST),l===!0&&(at.length=0,wt.length=0,at.push(i.COLOR_ATTACHMENT0+_e),V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&(at.push(me),wt.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let _e=0;_e<k.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let ze=n.get(k[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&l){let k=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[k])}}}function et(V){return Math.min(r.maxSamples,V.samples)}function mt(V){let k=n.get(V);return V.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function K(V){let k=s.render.frame;u.get(V)!==k&&(u.set(V,k),V.update())}function Vt(V,k){let q=V.colorSpace,ee=V.format,re=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||q!==No&&q!==fi&&(ut.getTransfer(q)===xt?(ee!==Rn||re!==yn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",q)),k}function gt(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(c.width=V.naturalWidth||V.width,c.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(c.width=V.displayWidth,c.height=V.displayHeight):(c.width=V.width,c.height=V.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=R,this.getTextureUnits=T,this.setTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=N,this.setTexture3D=O,this.setTextureCube=G,this.rebindTextures=Ie,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function tw(i,e){function t(n,r=fi){let o,s=ut.getTransfer(r);if(n===yn)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xu)return i.BYTE;if(n===Ku)return i.SHORT;if(n===so)return i.UNSIGNED_SHORT;if(n===gl)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===Zu)return i.ALPHA;if(n===$u)return i.RGB;if(n===Rn)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===Ju)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===xl)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===hs||n===ds||n===fs||n===ps)if(s===xt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===hs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===hs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ds)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ps)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===Ml||n===Sl||n===Tl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===wl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===El||n===Rl||n===Pl||n===kl||n===ms||n===Cl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Al||n===El)return s===xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Rl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pl)return o.COMPRESSED_R11_EAC;if(n===kl)return o.COMPRESSED_SIGNED_R11_EAC;if(n===ms)return o.COMPRESSED_RG11_EAC;if(n===Cl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Il||n===Ll||n===Fl||n===Dl||n===Nl||n===zl||n===Bl||n===Ol||n===Ul||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Il)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kl||n===Yl||n===ql)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Kl)return s===xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===$l||n===gs||n===Jl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Zl)return o.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gs)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ao?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var nw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iw=`
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

}`,Th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new on({vertexShader:nw,fragmentShader:iw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends Jn{constructor(e,t){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new Th,g={},w=t.getContextAttributes(),y=null,b=null,x=[],M=[],A=new Ee,v=null,S=null,E=new tn;E.viewport=new Lt;let P=new tn;P.viewport=new Lt;let C=[E,P],R=new hl,T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let W=x[H];return W===void 0&&(W=new Qr,x[H]=W),W.getTargetRaySpace()},this.getControllerGrip=function(H){let W=x[H];return W===void 0&&(W=new Qr,x[H]=W),W.getGripSpace()},this.getHand=function(H){let W=x[H];return W===void 0&&(W=new Qr,x[H]=W),W.getHandSpace()};function F(H){let W=M.indexOf(H.inputSource);if(W===-1)return;let se=x[W];se!==void 0&&(se.update(H.inputSource,H.frame,c||s),se.dispatchEvent({type:H.type,data:H.inputSource}))}function z(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",B);for(let H=0;H<x.length;H++){let W=M[H];W!==null&&(M[H]=null,x[H].disconnect(W))}T=null,I=null,m.reset();for(let H in g)delete g[H];if(e.setRenderTarget(y),f=null,h=null,d=null,r=null,b=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),S!==null){let H=S.camera;H.fov=S.fov,H.zoom=S.zoom,H.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",z),r.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,he=null,ie=null;w.depth&&(ie=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=w.stencil?Oi:$n,he=w.stencil?ao:Vn);let de={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:o};d=this.getBinding(),h=d.createProjectionLayer(de),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new rn(h.textureWidth,h.textureHeight,{format:Rn,type:yn,depthTexture:new ki(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let se={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new rn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(H){for(let W=0;W<H.removed.length;W++){let se=H.removed[W],he=M.indexOf(se);he>=0&&(M[he]=null,x[he].disconnect(se))}for(let W=0;W<H.added.length;W++){let se=H.added[W],he=M.indexOf(se);if(he===-1){for(let de=0;de<x.length;de++)if(de>=M.length){M.push(se),he=de;break}else if(M[de]===null){M[de]=se,he=de;break}if(he===-1)break}let ie=x[he];ie&&ie.connect(se)}}let N=new U,O=new U;function G(H,W,se){N.setFromMatrixPosition(W.matrixWorld),O.setFromMatrixPosition(se.matrixWorld);let he=N.distanceTo(O),ie=W.projectionMatrix.elements,de=se.projectionMatrix.elements,Oe=ie[14]/(ie[10]-1),Ne=ie[14]/(ie[10]+1),Ie=(ie[9]+1)/ie[5],Le=(ie[9]-1)/ie[5],Ue=(ie[8]-1)/ie[0],at=(de[8]+1)/de[0],wt=Oe*Ue,Bt=Oe*at,et=he/(-Ue+at),mt=et*-Ue;if(W.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(mt),H.translateZ(et),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ie[10]===-1)H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let K=Oe+et,Vt=Ne+et,gt=wt-mt,V=Bt+(he-mt),k=Ie*Ne/Vt*K,q=Le*Ne/Vt*K;H.projectionMatrix.makePerspective(gt,V,k,q,K,Vt),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function $(H,W){W===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(W.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let W=H.near,se=H.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(se=m.depthFar)),R.near=P.near=E.near=W,R.far=P.far=E.far=se,(T!==R.near||I!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),T=R.near,I=R.far),R.layers.mask=H.layers.mask|6,E.layers.mask=R.layers.mask&-5,P.layers.mask=R.layers.mask&-3;let he=H.parent,ie=R.cameras;$(R,he);for(let de=0;de<ie.length;de++)$(ie[de],he);ie.length===2?G(R,E,P):R.projectionMatrix.copy(E.projectionMatrix),S===null&&H.isPerspectiveCamera&&(S={camera:H,fov:H.fov,zoom:H.zoom}),Z(H,R,he)};function Z(H,W,se){se===null?H.matrix.copy(W.matrixWorld):(H.matrix.copy(se.matrixWorld),H.matrix.invert(),H.matrix.multiply(W.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Da*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(H){return g[H]};let ue=null;function ne(H,W){if(u=W.getViewerPose(c||s),p=W,u!==null){let se=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let he=!1;se.length!==R.cameras.length&&(R.cameras.length=0,he=!0);for(let Ne=0;Ne<se.length;Ne++){let Ie=se[Ne],Le=null;if(f!==null)Le=f.getViewport(Ie);else{let at=d.getViewSubImage(h,Ie);Le=at.viewport,Ne===0&&(e.setRenderTargetTextures(b,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(b))}let Ue=C[Ne];Ue===void 0&&(Ue=new tn,Ue.layers.enable(Ne),Ue.viewport=new Lt,C[Ne]=Ue),Ue.matrix.fromArray(Ie.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ie.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Le.x,Le.y,Le.width,Le.height),Ne===0&&(R.matrix.copy(Ue.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),he===!0&&R.cameras.push(Ue)}let ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Ne=d.getDepthInformation(se[0]);Ne&&Ne.isValid&&Ne.texture&&m.init(Ne,r.renderState)}if(ie&&ie.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Ne=0;Ne<se.length;Ne++){let Ie=se[Ne].camera;if(Ie){let Le=g[Ie];Le||(Le=new Wo,g[Ie]=Le);let Ue=d.getCameraImage(Ie);Le.sourceTexture=Ue}}}}for(let se=0;se<x.length;se++){let he=M[se],ie=x[se];he!==null&&ie!==void 0&&ie.update(he,W,c||s)}ue&&ue(H,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),p=null}let ae=new kp;ae.setAnimationLoop(ne),this.setAnimationLoop=function(H){ue=H},this.dispose=function(){}}},rw=new Pt,Np=new $e;Np.set(-1,0,0,0,1,0,0,0,1);function ow(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,ih(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,w,y,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?o(m,g):g.isMeshLambertMaterial?(o(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(o(m,g),d(m,g)):g.isMeshPhongMaterial?(o(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(o(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,b)):g.isMeshMatcapMaterial?(o(m,g),p(m,g)):g.isMeshDepthMaterial?o(m,g):g.isMeshDistanceMaterial?(o(m,g),_(m,g)):g.isMeshNormalMaterial?o(m,g):g.isLineBasicMaterial?(s(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,w,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===un&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===un&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let w=e.get(g),y=w.envMap,b=w.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(rw.makeRotationFromEuler(b)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Np),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function s(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,w,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*w,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,w){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let w=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function sw(i,e,t,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){let M=x.program;n.uniformBlockBinding(b,M)}function c(b,x){let M=r[b.id];M===void 0&&(m(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",w));let A=x.program;n.updateUBOMapping(b,A);let v=e.render.frame;o[b.id]!==v&&(h(b),o[b.id]=v)}function u(b){let x=d();b.__bindingPointIndex=x;let M=i.createBuffer(),A=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function d(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let x=r[b.id],M=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let v=0,S=M.length;v<S;v++){let E=M[v];if(Array.isArray(E))for(let P=0,C=E.length;P<C;P++)f(E[P],v,P,A);else f(E,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,x,M,A){if(_(b,x,M,A)===!0){let v=b.__offset,S=b.value;if(Array.isArray(S)){let E=0;for(let P=0;P<S.length;P++){let C=S[P],R=g(C);p(C,b.__data,E),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(E+=R.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(S,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function p(b,x,M){typeof b=="number"||typeof b=="boolean"?x[0]=b:b.isMatrix3?(x[0]=b.elements[0],x[1]=b.elements[1],x[2]=b.elements[2],x[3]=0,x[4]=b.elements[3],x[5]=b.elements[4],x[6]=b.elements[5],x[7]=0,x[8]=b.elements[6],x[9]=b.elements[7],x[10]=b.elements[8],x[11]=0):ArrayBuffer.isView(b)?x.set(new b.constructor(b.buffer,b.byteOffset,x.length)):b.toArray(x,M)}function _(b,x,M,A){let v=b.value,S=x+"_"+M;if(A[S]===void 0)return typeof v=="number"||typeof v=="boolean"?A[S]=v:ArrayBuffer.isView(v)?A[S]=v.slice():A[S]=v.clone(),!0;{let E=A[S];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return A[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function m(b){let x=b.uniforms,M=0,A=16;for(let S=0,E=x.length;S<E;S++){let P=Array.isArray(x[S])?x[S]:[x[S]];for(let C=0,R=P.length;C<R;C++){let T=P[C],I=Array.isArray(T.value)?T.value:[T.value];for(let F=0,z=I.length;F<z;F++){let B=I[F],N=g(B),O=M%A,G=O%N.boundary,$=O+G;M+=G,$!==0&&A-$<N.storage&&(M+=A-$),T.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,M+=N.storage}}}let v=M%A;return v>0&&(M+=A-v),b.__size=M,b.__cache={},this}function g(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(x.boundary=16,x.storage=b.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",b),x}function w(b){let x=b.target;x.removeEventListener("dispose",w);let M=s.indexOf(x.__bindingPointIndex);s.splice(M,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function y(){for(let b in r)i.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:y}}var aw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function lw(){return ti===null&&(ti=new Oa(aw,16,16,Ui,Hn),ti.name="DFG_LUT",ti.minFilter=qt,ti.magFilter=qt,ti.wrapS=vn,ti.wrapT=vn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var gr=class{constructor(e={}){let{canvas:t=Jf(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=yn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let _=f,m=new Set([yl,xl,vl]),g=new Set([yn,Vn,so,ao,_l,bl]),w=new Uint32Array(4),y=new Int32Array(4),b=new U,x=null,M=null,A=[],v=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,P=!1,C=null,R=null,T=null,I=null;this._outputColorSpace=Nt;let F=0,z=0,B=null,N=-1,O=null,G=new Lt,$=new Lt,Z=null,ue=new Q(0),ne=0,ae=t.width,H=t.height,W=1,se=null,he=null,ie=new Lt(0,0,ae,H),de=new Lt(0,0,ae,H),Oe=!1,Ne=new Go,Ie=!1,Le=!1,Ue=new Pt,at=new U,wt=new Lt,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function mt(){return B===null?W:1}let K=n;function Vt(L,X){return t.getContext(L,X)}let gt,V,k,q,ee,re,me,ge,oe,ce,_e,ze,ye,be,Be,Ye,je,Y,ve,le,xe,Ae,fe;try{let L={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",In,!1),K===null){let X="webgl2";if(K=Vt(X,L),K===null)throw Vt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(L){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",In,!1),qe("WebGLRenderer: "+L.message),L}function Ve(){gt=new mx(K),gt.init(),xe=new tw(K,gt),V=new ox(K,gt,e,xe),k=new Qy(K,gt),V.reversedDepthBuffer&&h&&k.buffers.depth.setReversed(!0),R=K.createFramebuffer(),T=K.createFramebuffer(),I=K.createFramebuffer(),q=new bx(K),ee=new Oy,re=new ew(K,gt,k,ee,V,xe,q),me=new px(E),ge=new x_(K),Ae=new ix(K,ge),oe=new gx(K,ge,q,Ae),ce=new xx(K,oe,ge,Ae,q),Y=new vx(K,V,re),Be=new sx(ee),_e=new By(E,me,gt,V,Ae,Be),ze=new ow(E,ee),ye=new Vy,be=new Yy(gt),je=new nx(E,me,k,ce,p,l),Ye=new jy(E,ce,V),fe=new sw(K,q,V,k),ve=new rx(K,gt,q),le=new _x(K,gt,q),q.programs=_e.programs,E.capabilities=V,E.extensions=gt,E.properties=ee,E.renderLists=ye,E.shadowMap=Ye,E.state=k,E.info=q}_!==yn&&(S=new wx(_,t.width,t.height,a,r,o));let Fe=new Ah(E,K);this.xr=Fe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let L=gt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=gt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(L){L!==void 0&&(W=L,this.setSize(ae,H,!1))},this.getSize=function(L){return L.set(ae,H)},this.setSize=function(L,X,te=!0){if(Fe.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=L,H=X,t.width=Math.floor(L*W),t.height=Math.floor(X*W),te===!0&&(t.style.width=L+"px",t.style.height=X+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(ae*W,H*W).floor()},this.setDrawingBufferSize=function(L,X,te){ae=L,H=X,W=te,t.width=Math.floor(L*te),t.height=Math.floor(X*te),this.setViewport(0,0,L,X)},this.setEffects=function(L){if(_===yn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let X=0;X<L.length;X++)if(L[X].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(G)},this.getViewport=function(L){return L.copy(ie)},this.setViewport=function(L,X,te,J){L.isVector4?ie.set(L.x,L.y,L.z,L.w):ie.set(L,X,te,J),k.viewport(G.copy(ie).multiplyScalar(W).round())},this.getScissor=function(L){return L.copy(de)},this.setScissor=function(L,X,te,J){L.isVector4?de.set(L.x,L.y,L.z,L.w):de.set(L,X,te,J),k.scissor($.copy(de).multiplyScalar(W).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(L){k.setScissorTest(Oe=L)},this.setOpaqueSort=function(L){se=L},this.setTransparentSort=function(L){he=L},this.getClearColor=function(L){return L.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(L=!0,X=!0,te=!0){let J=0;if(L){let j=!1;if(B!==null){let Se=B.texture.format;j=m.has(Se)}if(j){let Se=B.texture.type,Pe=g.has(Se),Me=je.getClearColor(),ke=je.getClearAlpha(),De=Me.r,tt=Me.g,lt=Me.b;Pe?(w[0]=De,w[1]=tt,w[2]=lt,w[3]=ke,K.clearBufferuiv(K.COLOR,0,w)):(y[0]=De,y[1]=tt,y[2]=lt,y[3]=ke,K.clearBufferiv(K.COLOR,0,y))}else J|=K.COLOR_BUFFER_BIT}X&&(J|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(J|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&K.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),C=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",In,!1),je.dispose(),ye.dispose(),be.dispose(),ee.dispose(),me.dispose(),ce.dispose(),Ae.dispose(),fe.dispose(),_e.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Ed),Fe.removeEventListener("sessionend",Rd),tr.stop()};function Tt(L){L.preventDefault(),th("WebGLRenderer: Context Lost."),P=!0}function bt(){th("WebGLRenderer: Context Restored."),P=!1;let L=q.autoReset,X=Ye.enabled,te=Ye.autoUpdate,J=Ye.needsUpdate,j=Ye.type;Ve(),q.autoReset=L,Ye.enabled=X,Ye.autoUpdate=te,Ye.needsUpdate=J,Ye.type=j}function In(L){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Yn(L){let X=L.target;X.removeEventListener("dispose",Yn),sg(X)}function sg(L){ag(L),ee.remove(L)}function ag(L){let X=ee.get(L).programs;X!==void 0&&(X.forEach(function(te){_e.releaseProgram(te)}),L.isShaderMaterial&&_e.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,te,J,j,Se){X===null&&(X=Bt);let Pe=j.isMesh&&j.matrixWorld.determinantAffine()<0,Me=ug(L,X,te,J,j);k.setMaterial(J,Pe);let ke=te.index,De=1;if(J.wireframe===!0){if(ke=oe.getWireframeAttribute(te),ke===void 0)return;De=2}let tt=te.drawRange,lt=te.attributes.position,Ce=tt.start*De,vt=(tt.start+tt.count)*De;Se!==null&&(Ce=Math.max(Ce,Se.start*De),vt=Math.min(vt,(Se.start+Se.count)*De)),ke!==null?(Ce=Math.max(Ce,0),vt=Math.min(vt,ke.count)):lt!=null&&(Ce=Math.max(Ce,0),vt=Math.min(vt,lt.count));let Ot=vt-Ce;if(Ot<0||Ot===1/0)return;Ae.setup(j,J,Me,te,ke);let Et,Mt=ve;if(ke!==null&&(Et=ge.get(ke),Mt=le,Mt.setIndex(Et)),j.isMesh)J.wireframe===!0?(k.setLineWidth(J.wireframeLinewidth*mt()),Mt.setMode(K.LINES)):Mt.setMode(K.TRIANGLES);else if(j.isLine){let jt=J.linewidth;jt===void 0&&(jt=1),k.setLineWidth(jt*mt()),j.isLineSegments?Mt.setMode(K.LINES):j.isLineLoop?Mt.setMode(K.LINE_LOOP):Mt.setMode(K.LINE_STRIP)}else j.isPoints?Mt.setMode(K.POINTS):j.isSprite&&Mt.setMode(K.TRIANGLES);if(j.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let jt=j._multiDrawStarts,Re=j._multiDrawCounts,ln=j._multiDrawCount,dt=ke?ge.get(ke).bytesPerElement:1,Sn=ee.get(J).currentProgram.getUniforms();for(let qn=0;qn<ln;qn++)Sn.setValue(K,"_gl_DrawID",qn),Mt.render(jt[qn]/dt,Re[qn])}else if(j.isInstancedMesh)Mt.renderInstances(Ce,Ot,j.count);else if(te.isInstancedBufferGeometry){let jt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Re=Math.min(te.instanceCount,jt);Mt.renderInstances(Ce,Ot,Re)}else Mt.render(Ce,Ot)};function Ad(L,X,te,J){C!==null&&L.isNodeMaterial&&C.setObject(J,L),Ie===!0&&Be.setState(L,te,!1),L.transparent===!0&&L.side===ht&&L.forceSinglePass===!1?(L.side=un,L.needsUpdate=!0,Js(L,X,J),L.side=Di,L.needsUpdate=!0,Js(L,X,J),L.side=ht):Js(L,X,J)}this.compile=function(L,X,te=null){te===null&&(te=L),C!==null&&C.renderStart(L,X,te),M=be.get(te),M.init(X),v.push(M),te.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(M.pushLight(j),j.castShadow&&M.pushShadow(j))}),L!==te&&L.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(M.pushLight(j),j.castShadow&&M.pushShadow(j))}),M.setupLights(),C!==null&&C.updateLights(M.state.lightsArray),Le=this.localClippingEnabled,Ie=Be.init(this.clippingPlanes,Le),Ie===!0&&Be.setGlobalState(this.clippingPlanes,X),C!==null&&Ye.render(M.state.shadowsArray,te,X);let J=new Set;return L.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Se=j.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){let Me=Se[Pe];Ad(Me,te,X,j),J.add(Me)}else Ad(Se,te,X,j),J.add(Se)}),M=v.pop(),C!==null&&C.renderEnd(),J},this.compileAsync=function(L,X,te=null){let J=this.compile(L,X,te);return new Promise(j=>{function Se(){if(J.forEach(function(Pe){let ke=ee.get(Pe).currentProgram;(ke===void 0||ke.isReady())&&J.delete(Pe)}),J.size===0){j(L);return}setTimeout(Se,10)}gt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Yc=null;function lg(L){Yc&&Yc(L)}function Ed(){tr.stop()}function Rd(){tr.start()}let tr=new kp;tr.setAnimationLoop(lg),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(L){Yc=L,Fe.setAnimationLoop(L),L===null?tr.stop():tr.start()},Fe.addEventListener("sessionstart",Ed),Fe.addEventListener("sessionend",Rd),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;C!==null&&C.renderStart(L,X);let te=Fe.enabled===!0&&Fe.isPresenting===!0,J=S!==null&&(B===null||te)&&S.begin(E,B);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(X),X=Fe.getCamera()),L.isScene===!0&&L.onBeforeRender(E,L,X,B),M=be.get(L,v.length),M.init(X),M.state.textureUnits=re.getTextureUnits(),v.push(M),Ue.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ne.setFromProjectionMatrix(Ue,Nn,X.reversedDepth),Le=this.localClippingEnabled,Ie=Be.init(this.clippingPlanes,Le),x=ye.get(L,A.length),x.init(),A.push(x),Fe.enabled===!0&&Fe.isPresenting===!0){let Pe=E.xr.getDepthSensingMesh();Pe!==null&&qc(Pe,X,-1/0,E.sortObjects)}qc(L,X,0,E.sortObjects),x.finish(),C!==null&&C.updateLights(M.state.lightsArray),E.sortObjects===!0&&x.sort(se,he),et=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,et&&je.addToRenderList(x,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ie===!0&&Be.beginShadows();let j=M.state.shadowsArray;if(Ye.render(j,L,X),Ie===!0&&Be.endShadows(),(J&&S.hasRenderPass())===!1){let Pe=x.opaque,Me=x.transmissive;if(M.setupLights(),X.isArrayCamera){let ke=X.cameras;if(Me.length>0)for(let De=0,tt=ke.length;De<tt;De++){let lt=ke[De];kd(Pe,Me,L,lt)}et&&je.render(L);for(let De=0,tt=ke.length;De<tt;De++){let lt=ke[De];Pd(x,L,lt,lt.viewport)}}else Me.length>0&&kd(Pe,Me,L,X),et&&je.render(L),Pd(x,L,X)}B!==null&&z===0&&(re.updateMultisampleRenderTarget(B),re.updateRenderTargetMipmap(B)),J&&S.end(E),L.isScene===!0&&L.onAfterRender(E,L,X),Ae.resetDefaultState(),N=-1,O=null,v.pop(),v.length>0?(M=v[v.length-1],re.setTextureUnits(M.state.textureUnits),Ie===!0&&Be.setGlobalState(E.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?x=A[A.length-1]:x=null,C!==null&&C.renderEnd()};function qc(L,X,te,J){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)te=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLightProbeGrid)M.pushLightProbeGrid(L);else if(L.isLight)M.pushLight(L),L.castShadow&&M.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(Ne)){J&&wt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ue);let Pe=ce.update(L),Me=L.material;Me.visible&&x.push(L,Pe,Me,te,wt.z,null,X)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(Ne))){let Pe=ce.update(L),Me=L.material;if(J&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),wt.copy(L.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),wt.copy(Pe.boundingSphere.center)),wt.applyMatrix4(L.matrixWorld).applyMatrix4(Ue)),Array.isArray(Me)){let ke=Pe.groups;for(let De=0,tt=ke.length;De<tt;De++){let lt=ke[De],Ce=Me[lt.materialIndex];Ce&&Ce.visible&&x.push(L,Pe,Ce,te,wt.z,lt,X)}}else Me.visible&&x.push(L,Pe,Me,te,wt.z,null,X)}}let Se=L.children;for(let Pe=0,Me=Se.length;Pe<Me;Pe++)qc(Se[Pe],X,te,J)}function Pd(L,X,te,J){let{opaque:j,transmissive:Se,transparent:Pe}=L;M.setupLightsView(te),Ie===!0&&Be.setGlobalState(E.clippingPlanes,te),J&&k.viewport(G.copy(J)),j.length>0&&$s(j,X,te),Se.length>0&&$s(Se,X,te),Pe.length>0&&$s(Pe,X,te),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function kd(L,X,te,J){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[J.id]===void 0){let Ce=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[J.id]=new rn(1,1,{generateMipmaps:!0,type:Ce?Hn:yn,minFilter:Bi,samples:Math.max(4,V.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let Se=M.state.transmissionRenderTarget[J.id],Pe=J.viewport||G;Se.setSize(Pe.z*E.transmissionResolutionScale,Pe.w*E.transmissionResolutionScale);let Me=E.getRenderTarget(),ke=E.getActiveCubeFace(),De=E.getActiveMipmapLevel();E.setRenderTarget(Se),E.getClearColor(ue),ne=E.getClearAlpha(),ne<1&&E.setClearColor(16777215,.5),E.clear(),et&&je.render(te);let tt=E.toneMapping;E.toneMapping=Un;let lt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),M.setupLightsView(J),Ie===!0&&Be.setGlobalState(E.clippingPlanes,J),$s(L,te,J),re.updateMultisampleRenderTarget(Se),re.updateRenderTargetMipmap(Se),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let vt=0,Ot=X.length;vt<Ot;vt++){let Et=X[vt],{object:Mt,geometry:jt,material:Re,group:ln}=Et;if(Re.side===ht&&Mt.layers.test(J.layers)){let dt=Re.side;Re.side=un,Re.needsUpdate=!0,Cd(Mt,te,J,jt,Re,ln),Re.side=dt,Re.needsUpdate=!0,Ce=!0}}Ce===!0&&(re.updateMultisampleRenderTarget(Se),re.updateRenderTargetMipmap(Se))}E.setRenderTarget(Me,ke,De),E.setClearColor(ue,ne),lt!==void 0&&(J.viewport=lt),E.toneMapping=tt}function $s(L,X,te){let J=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Se=L.length;j<Se;j++){let Pe=L[j],{object:Me,geometry:ke,group:De}=Pe,tt=Pe.material;tt.allowOverride===!0&&J!==null&&(tt=J),Me.layers.test(te.layers)&&Cd(Me,X,te,ke,tt,De)}}function Cd(L,X,te,J,j,Se){C!==null&&j.isNodeMaterial&&C.setObject(L,j),L.onBeforeRender(E,X,te,J,j,Se),L.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),j.onBeforeRender(E,X,te,J,L,Se),j.transparent===!0&&j.side===ht&&j.forceSinglePass===!1?(j.side=un,j.needsUpdate=!0,E.renderBufferDirect(te,X,J,j,L,Se),j.side=Di,j.needsUpdate=!0,E.renderBufferDirect(te,X,J,j,L,Se),j.side=ht):E.renderBufferDirect(te,X,J,j,L,Se),L.onAfterRender(E,X,te,J,j,Se)}function Js(L,X,te){X.isScene!==!0&&(X=Bt);let J=ee.get(L),j=M.state.lights,Se=M.state.shadowsArray,Pe=j.state.version,Me=_e.getParameters(L,j.state,Se,X,te,M.state.lightProbeGridArray),ke=_e.getProgramCacheKey(Me),De=J.programs;J.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?X.environment:null,J.fog=X.fog;let tt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;J.envMap=me.get(L.envMap||J.environment,tt),J.envMapRotation=J.environment!==null&&L.envMap===null?X.environmentRotation:L.envMapRotation,De===void 0&&(L.addEventListener("dispose",Yn),De=new Map,J.programs=De);let lt=De.get(ke);if(lt!==void 0){if(J.currentProgram===lt&&J.lightsStateVersion===Pe)return Ld(L,Me),lt}else Me.uniforms=_e.getUniforms(L),C!==null&&L.isNodeMaterial&&C.build(L,te,Me),L.onBeforeCompile(Me,E),lt=_e.acquireProgram(Me,ke),De.set(ke,lt),J.uniforms=Me.uniforms;let Ce=J.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ce.clippingPlanes=Be.uniform),Ld(L,Me),J.needsLights=dg(L),J.lightsStateVersion=Pe,J.needsLights&&(Ce.ambientLightColor.value=j.state.ambient,Ce.lightProbe.value=j.state.probe,Ce.sunLights.value=j.state.sun,Ce.sunLightShadows.value=j.state.sunShadow,Ce.directionalLights.value=j.state.directional,Ce.directionalLightShadows.value=j.state.directionalShadow,Ce.spotLights.value=j.state.spot,Ce.spotLightShadows.value=j.state.spotShadow,Ce.rectAreaLights.value=j.state.rectArea,Ce.ltc_1.value=j.state.rectAreaLTC1,Ce.ltc_2.value=j.state.rectAreaLTC2,Ce.pointLights.value=j.state.point,Ce.pointLightShadows.value=j.state.pointShadow,Ce.hemisphereLights.value=j.state.hemi,Ce.sunShadowMatrix.value=j.state.sunShadowMatrix,Ce.sunShadowCascade.value=j.state.sunShadowCascade,Ce.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ce.spotLightMatrix.value=j.state.spotLightMatrix,Ce.spotLightMap.value=j.state.spotLightMap,Ce.pointShadowMatrix.value=j.state.pointShadowMatrix),J.lightProbeGrid=M.state.lightProbeGridArray.length>0,J.currentProgram=lt,J.uniformsList=null,lt}function Id(L){if(L.uniformsList===null){let X=L.currentProgram.getUniforms();L.uniformsList=uo.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function Ld(L,X){let te=ee.get(L);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function cg(L,X){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;b.setFromMatrixPosition(X.matrixWorld);for(let te=0,J=L.length;te<J;te++){let j=L[te];if(j.texture!==null&&j.boundingBox.containsPoint(b))return j}return null}function ug(L,X,te,J,j){X.isScene!==!0&&(X=Bt),re.resetTextureUnits();let Se=X.fog,Pe=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?X.environment:null,Me=B===null?E.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ut.workingColorSpace,ke=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,De=me.get(J.envMap||Pe,ke),tt=J.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,lt=!!te.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ce=!!te.morphAttributes.position,vt=!!te.morphAttributes.normal,Ot=!!te.morphAttributes.color,Et=Un;J.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Et=E.toneMapping);let Mt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,jt=Mt!==void 0?Mt.length:0,Re=ee.get(J),ln=M.state.lights;if(Ie===!0&&(Le===!0||L!==O)){let At=L===O&&J.id===N;Be.setState(J,L,At)}let dt=!1;J.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ln.state.version||Re.outputColorSpace!==Me||j.isBatchedMesh&&Re.batching===!1||!j.isBatchedMesh&&Re.batching===!0||j.isBatchedMesh&&Re.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Re.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Re.instancing===!1||!j.isInstancedMesh&&Re.instancing===!0||j.isSkinnedMesh&&Re.skinning===!1||!j.isSkinnedMesh&&Re.skinning===!0||j.isInstancedMesh&&Re.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Re.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Re.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Re.instancingMorph===!1&&j.morphTexture!==null||Re.envMap!==De||J.fog===!0&&Re.fog!==Se||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Be.numPlanes||Re.numIntersection!==Be.numIntersection)||Re.vertexAlphas!==tt||Re.vertexTangents!==lt||Re.morphTargets!==Ce||Re.morphNormals!==vt||Re.morphColors!==Ot||Re.toneMapping!==Et||Re.morphTargetsCount!==jt||!!Re.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Re.__version=J.version);let Sn=Re.currentProgram;dt===!0&&(Sn=Js(J,X,j),C&&J.isNodeMaterial&&C.onUpdateProgram(J,Sn,Re));let qn=!1,vi=!1,Cr=!1,yt=Sn.getUniforms(),Dt=Re.uniforms;if(k.useProgram(Sn.program)&&(qn=!0,vi=!0,Cr=!0),J.id!==N&&(N=J.id,vi=!0),Re.needsLights){let At=cg(M.state.lightProbeGridArray,j);Re.lightProbeGrid!==At&&(Re.lightProbeGrid=At,vi=!0)}if(qn||O!==L){k.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),yt.setValue(K,"projectionMatrix",L.projectionMatrix),yt.setValue(K,"viewMatrix",L.matrixWorldInverse);let yi=yt.map.cameraPosition;yi!==void 0&&yi.setValue(K,at.setFromMatrixPosition(L.matrixWorld)),V.logarithmicDepthBuffer&&yt.setValue(K,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&yt.setValue(K,"isOrthographic",L.isOrthographicCamera===!0),O!==L&&(O=L,vi=!0,Cr=!0)}if(Re.needsLights&&(ln.state.sunShadowMap.length>0&&yt.setValue(K,"sunShadowMap",ln.state.sunShadowMap,re),ln.state.directionalShadowMap.length>0&&yt.setValue(K,"directionalShadowMap",ln.state.directionalShadowMap,re),ln.state.spotShadowMap.length>0&&yt.setValue(K,"spotShadowMap",ln.state.spotShadowMap,re),ln.state.pointShadowMap.length>0&&yt.setValue(K,"pointShadowMap",ln.state.pointShadowMap,re)),j.isSkinnedMesh){yt.setOptional(K,j,"bindMatrix"),yt.setOptional(K,j,"bindMatrixInverse");let At=j.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),yt.setValue(K,"boneTexture",At.boneTexture,re))}j.isBatchedMesh&&(yt.setOptional(K,j,"batchingTexture"),yt.setValue(K,"batchingTexture",j._matricesTexture,re),yt.setOptional(K,j,"batchingIdTexture"),yt.setValue(K,"batchingIdTexture",j._indirectTexture,re),yt.setOptional(K,j,"batchingColorTexture"),j._colorsTexture!==null&&yt.setValue(K,"batchingColorTexture",j._colorsTexture,re));let xi=te.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&Y.update(j,te,Sn),(vi||Re.receiveShadow!==j.receiveShadow)&&(Re.receiveShadow=j.receiveShadow,yt.setValue(K,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&X.environment!==null&&(Dt.envMapIntensity.value=X.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=lw()),vi){if(yt.setValue(K,"toneMappingExposure",E.toneMappingExposure),Re.needsLights&&hg(Dt,Cr),Se&&J.fog===!0&&ze.refreshFogUniforms(Dt,Se),ze.refreshMaterialUniforms(Dt,J,W,H,M.state.transmissionRenderTarget[L.id]),Re.needsLights&&Re.lightProbeGrid){let At=Re.lightProbeGrid;Dt.probesSH.value=At.texture,Dt.probesMin.value.copy(At.boundingBox.min),Dt.probesMax.value.copy(At.boundingBox.max),Dt.probesResolution.value.copy(At.resolution)}uo.upload(K,Id(Re),Dt,re)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(uo.upload(K,Id(Re),Dt,re),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&yt.setValue(K,"center",j.center),yt.setValue(K,"modelViewMatrix",j.modelViewMatrix),yt.setValue(K,"normalMatrix",j.normalMatrix),yt.setValue(K,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){let At=J.uniformsGroups;for(let yi=0,Ir=At.length;yi<Ir;yi++){let Dd=At[yi];fe.update(Dd,Sn),fe.bind(Dd,Sn)}}return Sn}function hg(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.sunLights.needsUpdate=X,L.sunLightShadows.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function dg(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(L,X,te){let J=ee.get(L);J.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ee.get(L.texture).__webglTexture=X,ee.get(L.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:te,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,X){let te=ee.get(L);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,te=0){B=L,F=X,z=te;let J=null,j=!1,Se=!1;if(L){let Me=ee.get(L);if(Me.__useDefaultFramebuffer!==void 0){k.bindFramebuffer(K.FRAMEBUFFER,Me.__webglFramebuffer),G.copy(L.viewport),$.copy(L.scissor),Z=L.scissorTest,k.viewport(G),k.scissor($),k.setScissorTest(Z),N=-1;return}else if(Me.__webglFramebuffer===void 0)re.setupRenderTarget(L);else if(Me.__hasExternalTextures)re.rebindTextures(L,ee.get(L.texture).__webglTexture,ee.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let tt=L.depthTexture;if(Me.__boundDepthTexture!==tt){if(tt!==null&&ee.has(tt)&&(L.width!==tt.image.width||L.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(L)}}let ke=L.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Se=!0);let De=ee.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(De[X])?J=De[X][te]:J=De[X],j=!0):L.samples>0&&re.useMultisampledRTT(L)===!1?J=ee.get(L).__webglMultisampledFramebuffer:Array.isArray(De)?J=De[te]:J=De,G.copy(L.viewport),$.copy(L.scissor),Z=L.scissorTest}else G.copy(ie).multiplyScalar(W).floor(),$.copy(de).multiplyScalar(W).floor(),Z=Oe;if(te!==0&&(J=R),k.bindFramebuffer(K.FRAMEBUFFER,J)&&k.drawBuffers(L,J),k.viewport(G),k.scissor($),k.setScissorTest(Z),j){let Me=ee.get(L.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+X,Me.__webglTexture,te)}else if(Se){let Me=X;for(let ke=0;ke<L.textures.length;ke++){let De=ee.get(L.textures[ke]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+ke,De.__webglTexture,te,Me)}}else if(L!==null&&te!==0){let Me=ee.get(L.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Me.__webglTexture,te)}N=-1};function Fd(L){let X=ee.get(L);return(X.__readFormat!==L.format||X.__readType!==L.type)&&(X.__readFormat=L.format,X.__readType=L.type,X.__formatReadable=V.textureFormatReadable(L.format),X.__typeReadable=V.textureTypeReadable(L.type)),X}this.readRenderTargetPixels=function(L,X,te,J,j,Se,Pe,Me=0){if(!(L&&L.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ee.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(ke=ke[Pe]),ke){k.bindFramebuffer(K.FRAMEBUFFER,ke);try{let De=L.textures[Me],tt=De.format,lt=De.type;L.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Me);let Ce=Fd(De);if(Ce.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-J&&te>=0&&te<=L.height-j&&K.readPixels(X,te,J,j,xe.convert(tt),xe.convert(lt),Se)}finally{let De=B!==null?ee.get(B).__webglFramebuffer:null;k.bindFramebuffer(K.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(L,X,te,J,j,Se,Pe,Me=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=ee.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(ke=ke[Pe]),ke)if(X>=0&&X<=L.width-J&&te>=0&&te<=L.height-j){k.bindFramebuffer(K.FRAMEBUFFER,ke);let De=L.textures[Me],tt=De.format,lt=De.type;L.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Me);let Ce=Fd(De);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,vt),K.bufferData(K.PIXEL_PACK_BUFFER,Se.byteLength,K.STREAM_READ),K.readPixels(X,te,J,j,xe.convert(tt),xe.convert(lt),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);let Ot=B!==null?ee.get(B).__webglFramebuffer:null;k.bindFramebuffer(K.FRAMEBUFFER,Ot);let Et=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await Qf(K,Et,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,vt),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Se),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(vt),K.deleteSync(Et),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,X=null,te=0){let J=Math.pow(2,-te),j=Math.floor(L.image.width*J),Se=Math.floor(L.image.height*J),Pe=X!==null?X.x:0,Me=X!==null?X.y:0;re.setTexture2D(L,0),K.copyTexSubImage2D(K.TEXTURE_2D,te,0,0,Pe,Me,j,Se),k.unbindTexture()},this.copyTextureToTexture=function(L,X,te=null,J=null,j=0,Se=0){let Pe,Me,ke,De,tt,lt,Ce,vt,Ot,Et=L.isCompressedTexture?L.mipmaps[Se]:L.image;if(te!==null)Pe=te.max.x-te.min.x,Me=te.max.y-te.min.y,ke=te.isBox3?te.max.z-te.min.z:1,De=te.min.x,tt=te.min.y,lt=te.isBox3?te.min.z:0;else{let Dt=Math.pow(2,-j);Pe=Math.floor(Et.width*Dt),Me=Math.floor(Et.height*Dt),L.isDataArrayTexture?ke=Et.depth:L.isData3DTexture?ke=Math.floor(Et.depth*Dt):ke=1,De=0,tt=0,lt=0}J!==null?(Ce=J.x,vt=J.y,Ot=J.z):(Ce=0,vt=0,Ot=0);let Mt=xe.convert(X.format),jt=xe.convert(X.type),Re;X.isData3DTexture?(re.setTexture3D(X,0),Re=K.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(re.setTexture2DArray(X,0),Re=K.TEXTURE_2D_ARRAY):(re.setTexture2D(X,0),Re=K.TEXTURE_2D),k.activeTexture(K.TEXTURE0),k.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(K.UNPACK_ALIGNMENT,X.unpackAlignment);let ln=k.getParameter(K.UNPACK_ROW_LENGTH),dt=k.getParameter(K.UNPACK_IMAGE_HEIGHT),Sn=k.getParameter(K.UNPACK_SKIP_PIXELS),qn=k.getParameter(K.UNPACK_SKIP_ROWS),vi=k.getParameter(K.UNPACK_SKIP_IMAGES);k.pixelStorei(K.UNPACK_ROW_LENGTH,Et.width),k.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Et.height),k.pixelStorei(K.UNPACK_SKIP_PIXELS,De),k.pixelStorei(K.UNPACK_SKIP_ROWS,tt),k.pixelStorei(K.UNPACK_SKIP_IMAGES,lt);let Cr=L.isDataArrayTexture||L.isData3DTexture,yt=X.isDataArrayTexture||X.isData3DTexture;if(L.isDepthTexture){let Dt=ee.get(L),xi=ee.get(X),At=ee.get(Dt.__renderTarget),yi=ee.get(xi.__renderTarget);k.bindFramebuffer(K.READ_FRAMEBUFFER,At.__webglFramebuffer),k.bindFramebuffer(K.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Ir=0;Ir<ke;Ir++)Cr&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ee.get(L).__webglTexture,j,lt+Ir),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ee.get(X).__webglTexture,Se,Ot+Ir)),K.blitFramebuffer(De,tt,Pe,Me,Ce,vt,Pe,Me,K.DEPTH_BUFFER_BIT,K.NEAREST);k.bindFramebuffer(K.READ_FRAMEBUFFER,null),k.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(j!==0||L.isRenderTargetTexture||ee.has(L)){let Dt=ee.get(L),xi=ee.get(X);k.bindFramebuffer(K.READ_FRAMEBUFFER,T),k.bindFramebuffer(K.DRAW_FRAMEBUFFER,I);for(let At=0;At<ke;At++)Cr?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Dt.__webglTexture,j,lt+At):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Dt.__webglTexture,j),yt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,xi.__webglTexture,Se,Ot+At):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,xi.__webglTexture,Se),j!==0?K.blitFramebuffer(De,tt,Pe,Me,Ce,vt,Pe,Me,K.COLOR_BUFFER_BIT,K.NEAREST):yt?K.copyTexSubImage3D(Re,Se,Ce,vt,Ot+At,De,tt,Pe,Me):K.copyTexSubImage2D(Re,Se,Ce,vt,De,tt,Pe,Me);k.bindFramebuffer(K.READ_FRAMEBUFFER,null),k.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else yt?L.isDataTexture||L.isData3DTexture?K.texSubImage3D(Re,Se,Ce,vt,Ot,Pe,Me,ke,Mt,jt,Et.data):X.isCompressedArrayTexture?K.compressedTexSubImage3D(Re,Se,Ce,vt,Ot,Pe,Me,ke,Mt,Et.data):K.texSubImage3D(Re,Se,Ce,vt,Ot,Pe,Me,ke,Mt,jt,Et):L.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Se,Ce,vt,Pe,Me,Mt,jt,Et.data):L.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Se,Ce,vt,Et.width,Et.height,Mt,Et.data):K.texSubImage2D(K.TEXTURE_2D,Se,Ce,vt,Pe,Me,Mt,jt,Et);k.pixelStorei(K.UNPACK_ROW_LENGTH,ln),k.pixelStorei(K.UNPACK_IMAGE_HEIGHT,dt),k.pixelStorei(K.UNPACK_SKIP_PIXELS,Sn),k.pixelStorei(K.UNPACK_SKIP_ROWS,qn),k.pixelStorei(K.UNPACK_SKIP_IMAGES,vi),Se===0&&X.generateMipmaps&&K.generateMipmap(Re),k.unbindTexture()},this.initRenderTarget=function(L){ee.get(L).__webglFramebuffer===void 0&&re.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?re.setTextureCube(L,0):L.isData3DTexture?re.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?re.setTexture2DArray(L,0):re.setTexture2D(L,0),k.unbindTexture()},this.resetState=function(){F=0,z=0,B=null,k.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};function sc(i,e=0){let t=(i.rotation??0)*Math.PI/180,n=Math.cos(t),r=Math.sin(t),o=fo(i,e+i.h/2);return[0,i.h].flatMap(s=>[[-i.w/2,-i.d/2],[i.w/2,-i.d/2],[i.w/2,i.d/2],[-i.w/2,i.d/2]].map(([a,l])=>o(i.x+a*n-l*r,e+s,i.z+a*r+l*n)))}function zp(i){let e=sc({...i,x:0,z:0}).map(([r,,o])=>[r,o]).sort((r,o)=>r[0]-o[0]||r[1]-o[1]),t=(r,o,s)=>(o[0]-r[0])*(s[1]-r[1])-(o[1]-r[1])*(s[0]-r[0]),n=r=>{let o=[];for(let s of r){for(;o.length>1&&t(o[o.length-2],o[o.length-1],s)<=1e-10;)o.pop();o.push(s)}return o.slice(0,-1)};return[...n(e),...n([...e].reverse())].map(([r,o])=>[r+i.x,o+i.z])}function fo(i,e){let t=(i.rotation_x??0)*Math.PI/180,n=(i.rotation_z??0)*Math.PI/180;if(!t&&!n)return(d,h,f)=>[d,h,f];let r=(i.rotation??0)*Math.PI/180,o=Math.cos(r),s=Math.sin(r),a=Math.cos(t),l=Math.sin(t),c=Math.cos(n),u=Math.sin(n);return(d,h,f)=>{let p=d-i.x,_=f-i.z,m=p*o+_*s,g=h-e,w=-p*s+_*o,y=g*a-w*l,b=g*l+w*a,x=m*c-y*u,M=m*u+y*c;return[i.x+x*o-b*s,e+M,i.z+x*s+b*o]}}function Pn(i,e,t,n){if(!t.rotation_x&&!t.rotation_z)return;let r=fo(t,n);for(let o=e;o<i.length;o+=3){let[s,a,l]=r(i[o],i[o+1],i[o+2]);i[o]=s,i[o+1]=a,i[o+2]=l}}function Bp(i){let e=i.length/3,t=new Float32Array(e);for(let n=0;n<e;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(t[n]=r)}return t}function Op(i,e,t,n){for(let r=t.start*3;r<t.end*3;r++){let o=e[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}function Up(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var cw=[],ac=new Map,uw=0,Vp=!1;function Gp(i){Vp=i}function hw(i){let e=_t(i)?.product?.base??i;return[...ac.entries()].filter(([,t])=>t.product?.base===e).map(([t,n])=>({type:t,item:n}))}function _r(i){let e=_t(i.type);if(!e)return;let t=e.product?.base??i.type;if(!Vp)return _t(t)??e;let n=hw(i.type);return n.find(r=>r.type===i.product_variant)?.item??(e.product?e:n.find(r=>r.item.product?.default)?.item??e)}function ys(i){cw=i,ac=new Map(i.flatMap(e=>e.items.map(t=>[dw(e.id,t.id),t]))),uw++}function dw(i,e){return`pack:${i}:${e}`}function fw(i){return i.startsWith("pack:")}var pw={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Eh(i){return _t(i)?.parts.find(e=>e.screen)}function _t(i){if(!fw(i))return;let e=ac.get(i);if(e)return e;let[,t,...n]=i.split(":"),r=pw[t];return r?ac.get(`pack:${r}:${n.join(":")}`):void 0}function Ct(i,e){let t=_t(e.type),n=pn(i,e.x,e.z);if(e.mount_y!=null)return n+e.mount_y;if(e.type==="lamp_wall")return n+lc;if(Hp.has(e.type))return Math.max(n,po(i,e.x,e.z)-Wp(e.type,e.h));if(e.type==="led_strip")return po(i,e.x,e.z)-.04-Math.max(.02,e.h);switch(t?.mount){case"surface":return Xp(i,e.x,e.z);case"wall":return n+(t.wall_y??1);case"ceiling":return po(i,e.x,e.z)-e.h;default:return n+(t?0:ws(e))}}var cc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,gravel_bed:.03,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Vi(i){return i==="hedge"||i==="fence"||i==="pergola"}function Ms(i,e,t){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of i.points){let d=o(c,u);s=Math.min(s,d),a=Math.max(a,d)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(a-s)));return n*l}function gw(i,e,t,n){return mo(i)+(e.offset??0)+cc[e.type]-Ms(e,t,n)}function mo(i){return i.elevation>.3?0:-.2}function Kp(i,e,t){let n=(i.outdoor??[]).filter(o=>!Vi(o.type)&&o.type!=="pool"&&Ge([e,t],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?gw(i,r,e,t):mo(i)}function uc(i,e){return mo(i)+(e.offset??0)+(e.above?qp(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function _w(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?qp(i):1.5}function Rh(i,e){return e.above?!1:(i.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!Vi(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>Ge(n,t.points)))}function Yp(i,e){return!e.above&&!Rh(i,e)?hc(i,e)-.05:uc(i,e)-_w(e)}function hc(i,e){return uc(i,e)-.15}function qp(i){return i.height&&i.height>.3?i.height:1.2}var bw={type:"none",pitch:35,overhang:.4},IA={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...bw}};var Zp=.3;var $p=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),lc=1.75;var Hp=new Set(["lamp_downlight","lamp_spot"]);function Wp(i,e){return i==="lamp_spot"?Math.max(.06,e)+.008:.02}var Jp=new Set(["stairs","stairs_u"]);function jp(i,e,t){let n=Math.max(4,Math.round(t/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,e*.45),u=(e-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:u,rise:t/n}}function Qp(i){return $p.has(i)||!!_t(i)?.light}var Ph=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function ws(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Xp(i,e,t){let n=pn(i,e,t);for(let r of i.furniture)!(Ph.has(r.type)||_t(r.type)?.surface)||!Ge([e,t],Hi(r))||(n=Math.max(n,pn(i,r.x,r.z)+(r.mount_y??0)+r.h));return n}var mw=new Set([...$p,"radiator","ac_unit","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var vw=["interior","front","front_glass","front_slot","sidelight","sidelights","glass","sliding","sliding_glass","sliding_wood","passage"],xw=["standard","bars","glass_wall"];function br(i,e){return i.type==="door"?i.style&&vw.includes(i.style)?i.style:e?"front":"interior":i.style&&xw.includes(i.style)?i.style:"standard"}function em(i,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=o-.5;if(l+c>u){let h=Math.max(0,u)/(l+c);l*=h,c*=h}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function tm(i){return i==="front"||i==="front_glass"||i==="front_slot"||i==="sidelight"||i==="sidelights"}function wn(i){let e=0;for(let t=0;t<i.length;t++){let[n,r]=i[t],[o,s]=i[(t+1)%i.length];e+=n*s-o*r}return e/2}function vr(i){return Math.abs(wn(i))}function Gi(i){let e=wn(i);if(Math.abs(e)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let t=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;t+=(o+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function nm(i){if(i.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=i[e],[r,o]=i[(e+1)%4];if(Math.abs(t-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function im(i){let e=1/0,t=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)e=Math.min(e,o),t=Math.min(t,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:e,z0:t,x1:n,z1:r}}function Hi(i){if(i.rotation_x||i.rotation_z)return zp(i);let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*t-a*n,i.z+s*n+a*t])}function Ge(i,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,s]=e[n],[a,l]=e[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(t=!t)}return t}function pt(i,e){return kh(i,e)+(e?.floor_offset??0)}function kh(i,e){return e?.wall_offset??(e?.elevation??i.elevation)-i.elevation}function kn(i,e){return e?.ceiling_height??e?.height??i.height}function Ss(i,e,t){return i.rooms.find(n=>Ge([e,t],n.points))}function pn(i,e,t){return pt(i,Ss(i,e,t))}function po(i,e,t){let n=Ss(i,e,t);return pt(i,n)+kn(i,n)}function Wt(i){let e=i.rooms.filter(t=>t.points.length>=3);return e.length?Math.max(...e.map(t=>i.elevation+pt(i,t)+kn(i,t))):i.elevation+i.height}var rm=i=>Math.round(i*1e3)/1e3;function yw(i,e,t,n){let r=Math.hypot(n[0]-t[0],n[1]-t[1]);if(r<.01)return!1;let o=[(n[0]-t[0])/r,(n[1]-t[1])/r],s=l=>Math.abs(-(l[0]-t[0])*o[1]+(l[1]-t[1])*o[0]),a=l=>(l[0]-t[0])*o[0]+(l[1]-t[1])*o[1];return i.rooms.some(l=>l.id!==e&&l.points.some((c,u)=>{let d=l.points[(u+1)%l.points.length];return s(c)>.02||s(d)>.02?!1:Math.min(r,Math.max(a(c),a(d)))-Math.max(0,Math.min(a(c),a(d)))>.05}))}function om(i,e,t,n,r,o=.05){let s=i.rooms.find(h=>h.points.length>=3&&Ge([e.x,e.z],h.points));if(!s)return[t,n];let a=s.points,l=wn(a)>=0?1:-1,c=Hi({...e}),u=t,d=n;for(let h=0;h<2;h++){let f=Hi({...e,x:u,z:d});for(let p=0;p<a.length;p++){let _=a[p],m=a[(p+1)%a.length],g=Math.hypot(m[0]-_[0],m[1]-_[1]);if(g<.05)continue;let w=[(m[0]-_[0])/g,(m[1]-_[1])/g],y=[-w[1]*l,w[0]*l],b=yw(i,s.id,_,m)?r/2:0,x=0;f.forEach((M,A)=>{let v=(M[0]-_[0])*w[0]+(M[1]-_[1])*w[1];if(v<-.01||v>g+.01)return;let S=(M[0]-_[0])*y[0]+(M[1]-_[1])*y[1]-b,E=c[A];(E[0]-_[0])*y[0]+(E[1]-_[1])*y[1]-b<-o||S<x&&(x=S)}),x<-1e-4&&(u-=y[0]*x,d-=y[1]*x)}}return[rm(u),rm(d)]}var Yt=(i,e)=>[i[0]-e[0],i[1]-e[1]],Wi=(i,e)=>[i[0]+e[0],i[1]+e[1]],pi=(i,e)=>[i[0]*e,i[1]*e],As=(i,e)=>i[0]*e[0]+i[1]*e[1],go=(i,e)=>i[0]*e[1]-i[1]*e[0],Ts=i=>Math.hypot(i[0],i[1]),ii=i=>{let e=Ts(i)||1;return[i[0]/e,i[1]/e]},sm=i=>[-i[1],i[0]],am=i=>[i[1],-i[0]];function Xi(i,e,t=[]){let n=e.eps??.005,r=[],o=t.filter(v=>Math.hypot(v.b[0]-v.a[0],v.b[1]-v.a[1])>.05),s=[],a=v=>{for(let S=0;S<s.length;S++)if(Math.abs(s[S][0]-v[0])<=n&&Math.abs(s[S][1]-v[1])<=n)return S;return s.push([v[0],v[1]]),s.length-1},l=[];for(let v of i){let S=v.points;if(S.length<3||Math.abs(wn(S))<1e-6)continue;let E=wn(S)>0,P=S.map(a);for(let C=0;C<S.length;C++){let R=P[C],T=P[(C+1)%S.length];R!==T&&l.push(E?{u:R,v:T,room:v.id,edge:C,forward:!0}:{u:T,v:R,room:v.id,edge:C,forward:!1})}}let c=o.map(v=>[a(v.a),a(v.b)]),u=new Set;for(let v of i){let S=v.points;S.length<3||(v.wall_splits??[]).forEach((E,P)=>{if(!E||P>=S.length)return;let C=S[P],R=Yt(S[(P+1)%S.length],C),T=Ts(R);for(let I of E)I>n&&I<T-n&&u.add(a(Wi(C,pi(R,I/T))))})}let d=[];for(let v of l){let S=s[v.u],E=s[v.v],P=Yt(E,S),C=Ts(P),R=pi(P,1/C),T=[];for(let F=0;F<s.length;F++){if(F===v.u||F===v.v)continue;let z=Yt(s[F],S),B=As(z,R);B<=n||B>=C-n||Math.abs(go(R,z))<=n&&T.push({t:B,id:F})}T.sort((F,z)=>F.t-z.t);let I=[{t:0,id:v.u},...T,{t:C,id:v.v}];for(let F=0;F+1<I.length;F++){let z=I[F],B=I[F+1],N=v.forward?z.t:C-B.t,O=v.forward?B.t:C-z.t;d.push({u:z.id,v:B.id,room:v.room,edge:v.edge,t0:N,t1:O})}}let h=new Map;for(let v of d){let S=v.u<v.v?`${v.u}-${v.v}`:`${v.v}-${v.u}`,E=h.get(S);E||h.set(S,E=[]),E.push(v)}let f=v=>({room_id:v.room,edge:v.edge,t0:v.t0,t1:v.t1}),p=new Map;for(let v of d){let S=`${v.room}:${v.edge}`;p.set(S,[...p.get(S)??[],v.t0].sort((E,P)=>E-P))}let _=v=>{let S=i.find(P=>P.id===v.room)?.wall_heights?.[v.edge];if(!Array.isArray(S))return S;let E=p.get(`${v.room}:${v.edge}`)??[];return S[E.indexOf(v.t0)]??null},m=v=>{let S=v.map(_).filter(P=>typeof P=="number"&&P>0);if(S.length)return Math.min(...S);let E=v.map(P=>i.find(C=>C.id===P.room)?.ceiling_height);return E.every(P=>typeof P=="number"&&P>0)?Math.max(...E):void 0},g=v=>{let S=v.map(E=>i.find(P=>P.id===E.room)?.wall_thickness?.[E.edge]).filter(E=>typeof E=="number"&&E>0);return S.length?Math.max(...S):void 0},w=v=>v.some(S=>_(S)===0),y=[],b=[];for(let v of h.values()){let S=v[0],E=v.find(P=>P!==S&&P.u===S.v&&P.v===S.u&&P.room!==S.room);for(let P of v)P!==S&&P!==E&&P.room!==S.room&&r.push(`overlap:${S.room}:${P.room}`);if(w(E?[S,E]:[S])){E&&y.push([S.room,E.room]);continue}if(E){let P=g([S,E])??e.interior;b.push({a:S.u,b:S.v,left:P/2,right:P/2,exterior:!1,roomLeft:S.room,roomRight:E.room,sources:[f(S),f(E)],height:m([S,E])})}else b.push({a:S.u,b:S.v,left:0,right:g([S])??e.exterior,exterior:!0,roomLeft:S.room,roomRight:null,sources:[f(S)],height:m([S])})}let x=v=>ii(Yt(s[v.b],s[v.a]));for(let v of b){if(v.exterior||v.free)continue;let S=new Set;for(let P of[v.a,v.b])for(let C of b)!C.exterior||C.free||C.a!==P&&C.b!==P||Math.abs(go(x(v),x(C)))>1e-6||(C.roomLeft===v.roomLeft?S.add("left"):C.roomLeft===v.roomRight&&S.add("right"));if(S.size!==1)continue;let E=v.left+v.right;S.has("left")?(v.left=0,v.right=E):(v.left=E,v.right=0)}o.forEach((v,S)=>{let[E,P]=c[S];if(E===P)return;let C=[(v.a[0]+v.b[0])/2,(v.a[1]+v.b[1])/2],R=i.find(F=>F.points.length>=3&&Ge(C,F.points))?.id??null,T=(v.thickness??e.interior)/2,I=typeof v.height=="number"&&v.height>0?v.height:void 0;b.push({free:v.id,a:E,b:P,left:T,right:T,exterior:!1,roomLeft:R,roomRight:R,sources:[],height:I})}),b=Mw(b,s,u);let M=Tw(b,s);return{walls:b.map((v,S)=>{let E=s[v.a],P=s[v.b],C=M.get(`${S}:a`),R=M.get(`${S}:b`),T=Aw([C.right,R.left,P,R.right,C.left,E],1e-6);return{id:ww(E,P),a:[E[0],E[1]],b:[P[0],P[1]],left:v.left,right:v.right,exterior:v.exterior,roomLeft:v.roomLeft,roomRight:v.roomRight,sources:v.sources,footprint:T,...v.free?{free:v.free}:{},...v.height!==void 0?{height:v.height}:{}}}),warnings:[...new Set(r)],open:y}}function ww(i,e){let t=o=>Math.round(o*100),[n,r]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function lm(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function Mw(i,e,t=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=lm(l)),c.a!==s&&(c=lm(c)),l.a===c.b)continue;let u=ii(Yt(e[l.b],e[l.a])),d=ii(Yt(e[c.b],e[c.a]));if(Math.abs(go(u,d))>1e-6||As(u,d)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:Sw(l.sources,c.sources)},f=n.filter((p,_)=>_!==a[0]&&_!==a[1]);f.push(h),n.length=0,n.push(...f),r=!0;break}}return n}function Sw(i,e){let t=i.map(n=>({...n}));for(let n of e){let r=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function Tw(i,e){let t=new Map;i.forEach((r,o)=>{let s=ii(Yt(e[r.b],e[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:pi(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let u=t.get(l);u||t.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,o]of t){let s=e[r];o.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Wi(s,pi(sm(c.d),c.left)),right:Wi(s,pi(am(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let u=o[c],d=o[(c+1)%o.length],h=Wi(s,pi(sm(u.d),u.left)),f=Wi(s,pi(am(d.d),d.right)),p=go(u.d,d.d);if(Math.abs(p)<1e-4)continue;let _=go(Yt(f,h),d.d)/p,m=Wi(h,pi(u.d,_));Ts(Yt(m,s))>l||(n.get(u.key).left=m,n.get(d.key).right=m)}}return n}function Aw(i,e){let t=i.filter((r,o)=>Ts(Yt(r,i[(o+1)%i.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let o=t[(r+t.length-1)%t.length],s=t[r],a=t[(r+1)%t.length],l=Yt(s,o),c=Yt(a,s);if(Math.abs(go(ii(l),ii(c)))<1e-7&&As(l,c)>0){t=t.filter((u,d)=>d!==r),n=!0;break}}}return t}function Ch(i,e,t){let n=i.points[e],r=i.points[(e+1)%i.points.length],o=ii(Yt(r,n));return Wi(n,pi(o,t))}function xr(i,e,t){if(i.wall){let r=t.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=ii(Yt(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Wi(r.a,[-o[1],o[0]])]},edge:0}}let n=e.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function yr(i,e,t){if(!e.wall)return Ew(i,t.room,t.edge,e.offset);let n=i.find(o=>o.free===e.wall);if(!n)return null;let r=Ch(t.room,0,e.offset);return{wall:n,s:As(Yt(r,n.a),ii(Yt(n.b,n.a)))}}function Ew(i,e,t,n){for(let r of i){if(!r.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Ch(e,t,n);return{wall:r,s:As(Yt(s,r.a),ii(Yt(r.b,r.a)))}}return null}var Ki=(i,e,t)=>(e[0]-i[0])*(t[1]-i[1])-(e[1]-i[1])*(t[0]-i[0]);function Yi(i){return i.reduce((e,t,n)=>{let r=i[(n+1)%i.length];return e+t[0]*r[1]-r[0]*t[1]},0)/2}var Rw=(i,e,t)=>Math.abs(Ki(e,t,i))<1e-8&&i[0]>=Math.min(e[0],t[0])-1e-8&&i[0]<=Math.max(e[0],t[0])+1e-8&&i[1]>=Math.min(e[1],t[1])-1e-8&&i[1]<=Math.max(e[1],t[1])+1e-8;function Es(i,e){let t=!1;for(let n=0,r=i.length-1;n<i.length;r=n++){let o=i[r],s=i[n];if(Rw(e,o,s))return!0;o[1]>e[1]!=s[1]>e[1]&&e[0]<(s[0]-o[0])*(e[1]-o[1])/(s[1]-o[1])+o[0]&&(t=!t)}return t}function cm(i){let e=i.map((r,o)=>o);Yi(i)<0&&e.reverse();let t=[],n=i.length*i.length;for(;e.length>3&&n-- >0;){let r=!1;for(let o=0;o<e.length;o++){let s=e[(o+e.length-1)%e.length],a=e[o],l=e[(o+1)%e.length],c=Ki(i[s],i[a],i[l]);if(Math.abs(c)<1e-8){e.splice(o,1),r=!0;break}if(!(c<0||e.some(u=>u!==s&&u!==a&&u!==l&&Ki(i[s],i[a],i[u])>=-1e-8&&Ki(i[a],i[l],i[u])>=-1e-8&&Ki(i[l],i[s],i[u])>=-1e-8))){t.push([s,a,l]),e.splice(o,1),r=!0;break}}if(!r)return[]}return e.length===3&&Math.abs(Ki(i[e[0]],i[e[1]],i[e[2]]))>1e-8&&t.push([...e]),t}function um(i,e){let t=i,n=Yi(e)<0?-1:1;for(let r=0;r<e.length&&t.length;r++){let o=e[r],s=e[(r+1)%e.length],a=t;t=[];for(let l=0;l<a.length;l++){let c=a[l],u=a[(l+1)%a.length],d=n*Ki(o,s,c),h=n*Ki(o,s,u);if(d>=-1e-8&&t.push(c),d>=-1e-8!=h>=-1e-8){let f=d/(d-h);t.push([c[0]+(u[0]-c[0])*f,c[1]+(u[1]-c[1])*f,c[2]+(u[2]-c[2])*f])}}}return t.filter((r,o)=>{let s=t[(o+1)%t.length];return Math.hypot(r[0]-s[0],r[1]-s[1])>1e-8})}function dc(i,e,t){let n=[0,1],r=t[0]-e[0],o=t[1]-e[1];for(let a=0;a<i.length;a++){let l=i[a],c=i[(a+1)%i.length],u=c[0]-l[0],d=c[1]-l[1],h=r*d-o*u;if(Math.abs(h)<1e-8)continue;let f=((l[0]-e[0])*d-(l[1]-e[1])*u)/h,p=((l[0]-e[0])*o-(l[1]-e[1])*r)/h;f>1e-8&&f<1-1e-8&&p>=-1e-8&&p<=1+1e-8&&n.push(f)}n.sort((a,l)=>a-l);let s=[];for(let a=1;a<n.length;a++){let l=n[a-1],c=n[a],u=(l+c)/2;c-l>1e-8&&Es(i,[e[0]+r*u,e[1]+o*u])&&s.push([l,c])}return s}function hm(i,e){return e.every((t,n)=>Es(i,t)&&dc(i,t,e[(n+1)%e.length]).reduce((r,[o,s])=>r+s-o,0)>1-1e-8)}var Ps=Math.PI/180;function Wn(i){let e=Math.min(i.x0,i.x1),t=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:e,u1:t,w:r-n,at:(o,s)=>[o,i.flip?r-s:n+s]}:{u0:n,u1:r,w:t-e,at:(o,s)=>[i.flip?t-s:e+s,o]}}function Mn(i){let e=Wn(i).w,t=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Ps),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Ps);if(i.shape==="flat"||i.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(i.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(i.shape==="mansard"){let l=mm(e,t,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(r+o))):e/2,a=t+s*r;return{vr:s,rh:a,y:l=>l<=s?t+l*r:n+(e-l)*o}}var Pw=.14;function fm(i,e){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<e-.05}function pm(i,e,t){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let o of i.settings.roof.sections??[]){if(o.open)continue;let s=Math.min(o.x0,o.x1),a=Math.max(o.x0,o.x1),l=Math.min(o.z0,o.z1),c=Math.max(o.z0,o.z1);if(e<s-1e-6||e>a+1e-6||t<l-1e-6||t>c+1e-6||o.points&&o.points.length>=3&&!Ge([e,t],o.points))continue;let[u,d]=mi(o,e,t),h=o.shape==="flat"||o.shape==="parapet",f=Math.max(0,o.overhang??r),_=((h?null:bo(qi(o,{u0:f,u1:f,a:f,b:f}),u,d))??Mn(o).y(d))-Pw;n=n===null?_:Math.max(n,_)}return n}function Ih(i,e){let t=i.length;if(t<3||Math.abs(e)<1e-9)return i.map(o=>[o[0],o[1]]);let n=wn(i)>=0?1:-1,r=[];for(let o=0;o<t;o++){let s=i[(o+t-1)%t],a=i[o],l=i[(o+1)%t],c=dm([a[0]-s[0],a[1]-s[1]]),u=dm([l[0]-a[0],l[1]-a[1]]),d=[c[1]*n,-c[0]*n],h=[u[1]*n,-u[0]*n],f=d[0]+h[0],p=d[1]+h[1],_=Math.hypot(f,p);if(_<1e-6){r.push([a[0]+d[0]*e,a[1]+d[1]*e]);continue}let m=(f*d[0]+p*d[1])/_,g=Math.min(4,1/Math.max(.25,m));r.push([a[0]+f/_*e*g,a[1]+p/_*e*g])}return r}function dm(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function ks(i,e){if(i.points&&i.points.length>=3)return Ih(i.points,e);let t=Math.min(i.x0,i.x1)-e,n=Math.max(i.x0,i.x1)+e,r=Math.min(i.z0,i.z1)-e,o=Math.max(i.z0,i.z1)+e;return[[t,r],[n,r],[n,o],[t,o]]}var Rs=Math.tan(30*Ps);function mm(i,e,t,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=e+o*n,l=t+s*r,c=Math.min(i-s,Math.max(o,(l-a+Rs*(i-s+o))/(2*Rs))),u=a+(c-o)*Rs;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:h=>h<=o?e+h*n:h<=c?a+(h-o)*Rs:h<=i-s?l+(i-s-h)*Rs:t+(i-h)*r}}function qi(i,e){let t=kw(i,e);if(!i.points||i.points.length<3)return t;let n=ks(i,Math.max(0,Math.min(e.u0,e.u1,e.a,e.b))).map(([c,u])=>mi(i,c,u)),r=cm(n),o=t.faces.flatMap(c=>r.map(u=>um(c,u.map(d=>n[d])))).filter(c=>c.length>=3&&Math.abs(Yi(c))>1e-8),s=(c,u,d)=>[c[0]+(u[0]-c[0])*d,c[1]+(u[1]-c[1])*d,c[2]+(u[2]-c[2])*d],a=t.ridges.flatMap(([c,u])=>dc(n,c,u).map(([d,h])=>[s(c,u,d),s(c,u,h)])),l=[];return n.forEach((c,u)=>{let d=n[(u+1)%n.length],h=[0,...t.faces.flatMap(f=>dc(f.map(([p,_])=>[p,_]),c,d).flat())].filter(f=>f<1-1e-8).sort((f,p)=>f-p);for(let f=0;f<h.length;f++){if(f&&h[f]-h[f-1]<1e-8)continue;let p=h[f],_=c[0]+(d[0]-c[0])*p,m=c[1]+(d[1]-c[1])*p;l.push([_,m,bo(t,_,m)??Mn(i).y(m)])}}),{faces:o,rim:l,ridges:a,gable:null}}function kw(i,e){let t=Wn(i),n=Mn(i),r=t.w,o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(w,y)=>[w,y,n.y(y)],u=c(a,-o),d=c(l,-o),h=c(l,r+s),f=c(a,r+s),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Ps),_=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Ps);if(i.shape==="pent"){let w=[u,d,h,f];return{faces:[w],rim:w,ridges:[[h,f]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let w=i.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,r-n.vr)||r/2),y=[t.u0+w,n.vr,n.rh],b=[t.u1-w,n.vr,n.rh],x=i.shape==="pyramid"?[[u,d,y],[d,h,y],[h,f,y],[f,u,y]]:[[u,d,b,y],[y,b,h,f],[f,u,y],[d,h,b]],M=i.shape==="pyramid"?[[u,y],[f,y],[d,y],[h,y]]:[[y,b],[u,y],[f,y],[d,b],[h,b]];return{faces:x,rim:[u,d,h,f],ridges:M,gable:null}}if(i.shape==="halfhip"){let w=Math.min(n.y(0),n.y(r)),y=w+(n.rh-w)*.55,b=p>1e-6?Math.min(n.vr,(y-i.eave_a)/p):n.vr,x=_>1e-6?Math.max(n.vr,r-(y-i.eave_b)/_):n.vr,M=Math.min((t.u1-t.u0)/2-.1,(n.rh-y)/Math.max(.2,p)),A=[t.u0+M,n.vr,n.rh],v=[t.u1-M,n.vr,n.rh],S=[a,b,y],E=[a,x,y],P=[l,b,y],C=[l,x,y];return{faces:[[u,d,P,v,A,S],[A,v,C,h,f,E],[E,S,A],[P,C,v]],rim:[u,d,P,C,h,f,E,S],ridges:[[A,v],[S,A],[E,A],[P,v],[C,v]],gable:[[0,n.y(0)],[b,y],[x,y],[r,n.y(r)]]}}if(i.shape==="mansard"){let w=mm(r,i.eave_a,i.eave_b,p,_),y=[a,w.vla,w.yla],b=[l,w.vla,w.yla],x=[a,r-w.vlb,w.ylb],M=[l,r-w.vlb,w.ylb],A=[a,w.vr,w.rh],v=[l,w.vr,w.rh];return{faces:[[u,d,b,y],[y,b,v,A],[A,v,M,x],[x,M,h,f]],rim:[u,d,b,v,M,h,f,x,A,y],ridges:[[A,v],[y,b],[x,M]],gable:[[0,n.y(0)],[w.vla,w.yla],[w.vr,w.rh],[r-w.vlb,w.ylb],[r,n.y(r)]]}}let m=[a,n.vr,n.rh],g=[l,n.vr,n.rh];return{faces:[[u,d,g,m],[m,g,h,f]],rim:[u,d,g,h,f,m],ridges:[[m,g]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function bo(i,e,t){let n=null;for(let r of i.faces){if(!Es(r.map(w=>[w[0],w[1]]),[e,t]))continue;let[o,s]=r,a=r.slice(2).find(w=>Math.abs((s[0]-o[0])*(w[1]-o[1])-(s[1]-o[1])*(w[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],u=s[1]-o[1],d=a[0]-o[0],h=a[2]-o[2],f=a[1]-o[1],p=c*f-u*h,_=u*d-l*f,m=l*h-c*d;if(Math.abs(_)<1e-9)continue;let g=o[2]-(p*(e-o[0])+m*(t-o[1]))/_;n=n===null?g:Math.min(n,g)}return n}function mi(i,e,t){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),o=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?[e,i.flip?s-t:t-o]:[t,i.flip?r-e:e-n]}function Cw(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function fc(i,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(e)*1.5)continue;let a=Cw(s);t<a.x0||t>a.x1||n<a.z0||n>a.z1||(!o||r(s)<r(o))&&(o=s)}return o}function Lh(i,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=Wn(e),n=Mn(e).rh,r=qi(i,{u0:0,u1:0,a:0,b:0}),o=Mn(i),s=p=>{let[_,m]=t.at(p,t.w/2),[g,w]=mi(i,_,m);return bo(r,g,w)??o.y(w)},a=s(t.u0)<=s(t.u1),l=a?t.u0:t.u1,c=a?t.u1:t.u0,u=a?1:-1,d=Math.abs(c-l),h=c;for(let p=.5;p<d;p+=.05)if(s(l+u*p)>=n-.02){h=l+u*p;break}if(Math.abs(h-c)<.05)return e;let f={...e};return e.axis==="x"?c===t.u1?f.x1=h:f.x0=h:c===t.u1?f.z1=h:f.z0=h,f}function gm(i,e){let t=Lh(i,e),n=Wn(t),r=Mn(t),o=qi(i,{u0:0,u1:0,a:0,b:0}),s=Mn(i),a=h=>{let[f,p]=n.at(h,n.w/2),[_,m]=mi(i,f,p);return bo(o,_,m)??s.y(m)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],d=Math.max(1,Math.ceil(c/.15));for(let h=0;h<d;h++){let f=c*h/d,p=c*(h+1)/d,_=l?n.u0+f:n.u1-f,m=l?n.u0+p:n.u1-p,g=a(m),w=1/0,y=-1/0;for(let v=0;v<=40;v++){let S=n.w*v/40;r.y(S)>g+.02&&(w=Math.min(w,S),y=Math.max(y,S))}if(!(y-w>.05))continue;let b=n.at(_,w),x=n.at(m,y),M=mi(i,b[0],b[1]),A=mi(i,x[0],x[1]);u.push({u0:Math.min(M[0],A[0]),u1:Math.max(M[0],A[0]),v0:Math.min(M[1],A[1]),v1:Math.max(M[1],A[1])})}return u}function _o(i,e,t,n){let r=s=>n?s[e]<=t+1e-9:s[e]>=t-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),u=r(l);if(c&&o.push(a),c!==u){let d=(t-a[e])/(l[e]-a[e]);o.push([a[0]+(l[0]-a[0])*d,a[1]+(l[1]-a[1])*d,a[2]+(l[2]-a[2])*d])}}return o}function _m(i,e){let t=_o(i,0,e.u0,!0),n=_o(i,0,e.u1,!1),r=_o(_o(i,0,e.u0,!1),0,e.u1,!0),o=_o(r,1,e.v0,!0),s=_o(r,1,e.v1,!1);return[t,n,o,s].filter(a=>a.length>=3&&Math.abs(vr(a.map(l=>[l[0],l[1]])))>1e-6)}function pc(i,e,t){let n=Wn(e),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>e.base+.05)),o=c=>c.some(u=>r.some(d=>Ge(u,d.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:t,b:o(a.map(c=>n.at(c,n.w+s)))?0:t,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:t,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:t}}function bm(i,e){let t=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}function Iw(i){return Mn(i).rh}function vm(i,e,t){let n=i.settings.roof.sections??[],r=n.filter(l=>t.includes(l.id)).map(l=>fc(n,l)??l);if(!r.length)return e.id;let o=Math.max(...r.map(l=>Iw(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(u=>{let[d,h]=c.points.reduce((f,p)=>[f[0]+p[0]/c.points.length,f[1]+p[1]/c.points.length],[0,0]);return d>=Math.min(u.x0,u.x1)&&d<=Math.max(u.x0,u.x1)&&h>=Math.min(u.z0,u.z1)&&h<=Math.max(u.z0,u.z1)}));return i.floors.filter(l=>l.elevation>=e.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??e.id}function an(i,e){let t=[e.roomLeft,e.roomRight].map(n=>i.rooms.find(r=>r.id===n)).filter(n=>!!n);return t.length?{bottom:Math.min(...t.map(n=>kh(i,n))),top:Math.max(...t.map(n=>pt(i,n)+Math.min(kn(i,n),e.height??1/0)))}:{bottom:0,top:Math.min(i.height,e.height??i.height)}}function Cs(i,e,t){let n=xr(e,i.rooms,i.walls??[]),r=n&&yr(t,e,n);if(!n||!r)return null;let o=r.wall,s=Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1]);if(s<1e-6)return null;let a=[(o.b[0]-o.a[0])/s,(o.b[1]-o.a[1])/s],l=o.roomLeft===n.room.id,c=i.rooms.find(G=>G.id===n.room.id||o.free&&G.id===o.roomLeft)??n.room,u=o.free?void 0:i.rooms.find(G=>G.id===(l?o.roomRight:o.roomLeft)),d=l?[-a[1],a[0]]:[a[1],-a[0]],h=Math.min(e.width,s),f=Math.max(0,Math.min(s-h,r.s-h/2)),p=[o.a[0]+a[0]*f,o.a[1]+a[1]*f],_=pt(i,c),m=u?pt(i,u):_,g=Math.min(_,m),w=Math.max(_,m),y={opening:e,room:c,other:u,wall:o,start:p,axis:a,toRoom:d,width:h,low:g,high:w,threshold:e.type==="window"?_:w,ceiling:Math.min(_+kn(i,c),u?m+kn(i,u):1/0)};if((c.wall_offset!=null||c.floor_offset!=null)&&(y.threshold=_),_+e.sill+e.height>y.ceiling+.001&&(y.issue="height"),!e.steps||!u||w-g<.001||e.type==="window")return y;let b=e.steps.side==="room",x=b?c:u,M=b?d:[-d[0],-d[1]],A=pt(i,x),v=A===w,S=b?l?o.left:o.right:l?o.right:o.left,E=e.steps.depth,P=e.steps.count,C=e.steps.offset??0,R=S+C,T=S-o.left-o.right;if(y.issue=y.issue??"fit",!Number.isFinite(E)||E<.1||E>10||!Number.isInteger(P)||P<1||P>30||!Number.isFinite(C)||Math.abs(C)>10||R+E<S+.01)return y;let I=(G,$)=>[p[0]+a[0]*G+M[0]*$,p[1]+a[1]*G+M[1]*$],F=C<0?R:-.005,z=[I(0,F),I(h,F),I(h,R+E),I(0,R+E)],B=[I(.01,Math.min(S,R)+.01),I(h-.01,Math.min(S,R)+.01),I(h-.01,R+E-.01),I(.01,R+E-.01)],N=[I(-.001,T-.001),I(h+.001,T-.001),I(h+.001,S+.001),I(-.001,S+.001)],O=C<0?[c.points,u.points,N]:[x.points];return B.every((G,$)=>O.some(Z=>Ge(G,Z))&&Fh(G,B[($+1)%B.length],O).length===0)&&(y.threshold=b?m:_,y.stair={room:x,toward:M,face:R,wallFace:S,back:T,offset:C,count:P,depth:E,recess:v,bay:z},y.issue=_+e.sill+e.height>y.ceiling+.001?"height":void 0),y}function mc(i,e,t){return t.filter(n=>n.stair&&Math.abs(pt(i,e)-n.high)<1e-6&&(n.room.id===e.id||n.other?.id===e.id)&&(n.stair.recess||n.stair.offset<0)).map(n=>n.stair.bay)}function xm(i){let e=i.stair;if(!e||e.offset>=0)return i.threshold;let t=i.threshold;for(let n=0;n<e.count;n++){let r=e.face+e.depth*n/e.count;if(e.face+e.depth*(n+1)/e.count<=e.back||r>=e.wallFace)continue;let s=e.recess?i.low+(i.high-i.low)*(n+1)/e.count:i.high-(i.high-i.low)*n/e.count;t=Math.min(t,s)}return t}function vo(i,e){let t=s=>s.reduce((a,l,c)=>{let u=s[(c+1)%s.length];return a+l[0]*u[1]-u[0]*l[1]},0),n=t(e)>=0?1:-1,r=[],o=i;for(let s=0;s<e.length&&o.length>=3;s++){let a=e[s],l=e[(s+1)%e.length],c=f=>n*((l[0]-a[0])*(f[1]-a[1])-(l[1]-a[1])*(f[0]-a[0])),u=f=>{let p=[];return o.forEach((_,m)=>{let g=o[(m+1)%o.length],w=f*c(_),y=f*c(g);if(w>=-1e-9&&p.push(_),w>=-1e-9!=y>=-1e-9){let b=w/(w-y);p.push([_[0]+(g[0]-_[0])*b,_[1]+(g[1]-_[1])*b])}}),p},d=u(-1),h=u(1);d.length>=3&&Math.abs(t(d))>1e-8&&r.push(d),o=h}return r}function Fh(i,e,t){let n=[0,1],r=e[0]-i[0],o=e[1]-i[1];for(let l of t)l.forEach((c,u)=>{let d=l[(u+1)%l.length],h=d[0]-c[0],f=d[1]-c[1],p=r*f-o*h;if(Math.abs(p)<1e-9)return;let _=((c[0]-i[0])*f-(c[1]-i[1])*h)/p,m=((c[0]-i[0])*o-(c[1]-i[1])*r)/p;_>0&&_<1&&m>=0&&m<=1&&n.push(_)});n.sort((l,c)=>l-c);let s=l=>[i[0]+r*l,i[1]+o*l],a=[];for(let l=1;l<n.length;l++)n[l]-n[l-1]>1e-9&&!t.some(c=>Ge(s((n[l]+n[l-1])/2),c))&&a.push([s(n[l-1]),s(n[l])]);return a}function xo(i,e){let t=wn(e)>0?1:-1,n=[...i];for(let r=0;r<e.length&&n.length;r++){let o=e[r],s=e[(r+1)%e.length],a=c=>t*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let u=l[c],d=l[(c+1)%l.length],h=a(u),f=a(d);if(h>=0&&n.push(u),h>=0!=f>=0){let p=h/(h-f);n.push([u[0]+(d[0]-u[0])*p,u[1]+(d[1]-u[1])*p])}}}return n}function ym(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length],o=i[(t+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(e&&Math.sign(s)!==e)return!1;e=Math.sign(s)}}return!0}var ri=We(3662079,.95),Dh=We(3662079,1),oi=We(5995775,.34),_c=We(5995775,.22),gc=[-.55,.83],Ze=-1,bc=16,wr=32,wm=48,Is=64,ot=class{p=[];c=[];f=[];uv;tile;constructor(e=!1,t=!1){this.uv=e?[]:null,this.tile=t?[]:null}tri(e,t,n,r,o=r,s=r,a,l=Ze,c=[0,1]){this.p.push(...e,...t,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let e=new Ke;return e.setAttribute("position",new Te(this.p,3)),e.setAttribute("color",new Te(this.c,3)),e.setAttribute("fold",new Te(this.f,1)),this.uv&&e.setAttribute("uv",new Te(this.uv,2)),this.tile&&e.setAttribute("tile",new Te(this.tile,2)),e.computeBoundingSphere(),e}},zt=class{p=[];c=[];f=[];seg(e,t,n=ri,r=Ze){this.p.push(...e,...t),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(e,t,n,r,o){let[s,a]=e[1]<=t[1]?[e,t]:[t,e];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,Ze);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,Ze),this.seg(c,a,n,o)}geometry(){let e=new Ke;return e.setAttribute("position",new Te(this.p,3)),e.setAttribute("color",new Te(this.c,3)),e.setAttribute("fold",new Te(this.f,1)),e}};function vc(i,e,t,n){let o=i.uv?2:0,s=(d,h)=>{let f=d*3+h;return{p:i.p.slice(f*3,f*3+3),c:i.c.slice(f*3,f*3+3),uv:i.uv?i.uv.slice(f*2,f*2+2):null,tile:i.tile?i.tile.slice(f*2,f*2+2):null}},a=(d,h,f)=>({p:d.p.map((p,_)=>p+(h.p[_]-p)*f),c:d.c.map((p,_)=>p+(h.c[_]-p)*f),uv:d.uv&&h.uv?d.uv.map((p,_)=>p+(h.uv[_]-p)*f):null,tile:d.tile}),l=(d,h,f)=>{for(let p=0;p<3;p++){let _=d*3+p;for(let m=0;m<3;m++)i.p[_*3+m]=h[p].p[m],i.c[_*3+m]=h[p].c[m];if(i.uv&&h[p].uv)for(let m=0;m<o;m++)i.uv[_*2+m]=h[p].uv[m];if(i.tile&&h[p].tile)for(let m=0;m<2;m++)i.tile[_*2+m]=h[p].tile[m];i.f[_]=f}},c=(d,h)=>{let f=i.p.length/9;for(let p of d)i.p.push(...p.p),i.c.push(...p.c),i.f.push(h),i.uv?.push(...p.uv??[.5,.5]),i.tile?.push(...p.tile??[0,1]);return f},u=i.p.length/9;for(let d=e;d<u;d++){let h=[s(d,0),s(d,1),s(d,2)],f=h.map(v=>v.p[1]>t+1e-6),p=h.map(v=>v.p[1]<t-1e-6);if(!f.some(Boolean))continue;if(!p.some(Boolean)){for(let v=0;v<3;v++)i.f[d*3+v]=n;continue}let _=i.f[d*3],m=(v,S)=>a(v,S,(t-v.p[1])/(S.p[1]-v.p[1])),g=f.filter(Boolean).length,w=g===1?f.indexOf(!0):f.indexOf(!1),y=h[w],b=h[(w+1)%3],x=h[(w+2)%3],M=m(y,b),A=m(x,y);g===1?(l(d,[y,M,A],n),c([M,b,x],_),c([M,x,A],_)):(l(d,[y,M,A],_),c([M,b,x],n),c([M,x,A],n))}}function Mm(i,e,t,n){let r=i.p.length/6;for(let o=e;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=t+1e-6)continue;if(l[1]>=t-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let u=(t-l[1])/(c[1]-l[1]),d=[l[0]+(c[0]-l[0])*u,t,l[2]+(c[2]-l[2])*u];for(let f=0;f<3;f++)i.p[o*6+f]=l[f],i.p[o*6+3+f]=d[f];let h=i.c.slice(o*6,o*6+3);i.p.push(...d,...c),i.c.push(...h,...h),i.f.push(n,n)}}var ft=Math.PI/180;function We(i,e){let t=new Q(i).multiplyScalar(e);return t.r=Math.min(1,t.r),t.g=Math.min(1,t.g),t.b=Math.min(1,t.b),t}function Lw(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e}function mn(i,e=[]){let t=i.map(([n,r])=>new Ee(n,r));return jo.triangulateShape(t,e.map(n=>n.map(([r,o])=>new Ee(r,o))))}function Sm(i,e,t,n,r,o,s){let a=new Q(s),l=f=>.5+.5*Math.min(1,Math.max(0,f/1.6));for(let f=0;f<4;f++){let p=e[f],_=e[(f+1)%4],m=t[f],g=t[(f+1)%4],w=_[0]-p[0],y=_[1]-p[1],b=Math.hypot(w,y);if(b<1e-6)continue;let M=.8+.28*((y/b*gc[0]-w/b*gc[1]+1)/2),A=(m[0]+g[0]-p[0]-_[0])/2*(-y/b)+(m[1]+g[1]-p[1]-_[1])/2*(w/b),v=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),S=We(o,l(n)*M).lerp(a,v),E=We(o,l(r)*M).lerp(a,v);i.tri([p[0],n,p[1]],[m[0],r,m[1]],[g[0],r,g[1]],S,E,E),i.tri([p[0],n,p[1]],[g[0],r,g[1]],[_[0],n,_[1]],S,E,S)}let[c,u,d,h]=t;Math.hypot(d[0]-c[0],d[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[d[0],r,d[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[h[0],r,h[1]],[d[0],r,d[1]],a))}function Tm(i,e,t,n,r,o,s,a,l,c){let u=new Q(l),d=[];for(let f=0;f<c;f++){let p=f/c*Math.PI*2;d.push({y:o+Math.cos(p)*s,s:r+Math.sin(p)*s})}let h=(f,p)=>{let _=e(f,d[p%c].s);return[_[0],d[p%c].y,_[1]]};for(let f=0;f<c;f++){let p=(f+.5)/c*Math.PI*2,_=We(a,.62+.4*Math.max(0,Math.cos(p)));i.tri(h(t,f),h(n,f+1),h(n,f),_),i.tri(h(t,f),h(t,f+1),h(n,f+1),_)}for(let f of[t,n]){let p=e(f,r),_=[p[0],o,p[1]];for(let m=0;m<c;m++)i.tri(_,h(f,m),h(f,m+1),u)}}function St(i,e,t,n,r,o,s={}){let a=typeof n=="number"?()=>n:p=>Math.max(t+.002,n(p[0],p[1])),l=s.aoFrom??t,c=s.fold??Ze,u=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),d=(s.holes??[]).map(p=>Lw(p)>0?[...p].reverse():p),h=d.length?[...e,...d.flat()]:e,f=s.topFace===!1&&!s.bottom?[]:mn(e,d);if(s.topFace!==!1){let p=new Q(o);for(let[_,m,g]of f){let w=h[_],y=h[m],b=h[g];i.tri([w[0],a(w),w[1]],[b[0],a(b),b[1]],[y[0],a(y),y[1]],p,p,p,void 0,s.topFold??c)}}if(s.bottom){let p=We(r,.55);for(let[_,m,g]of f){let w=h[_],y=h[m],b=h[g];i.tri([w[0],t,w[1]],[y[0],t,y[1]],[b[0],t,b[1]],p,p,p,void 0,c)}}for(let p of[e,...d])for(let _=0;_<p.length;_++){let m=p[_],g=p[(_+1)%p.length],w=g[0]-m[0],y=g[1]-m[1],b=Math.hypot(w,y);if(b<1e-6||s.skipSide?.(m,g))continue;let M=.8+.28*((y/b*gc[0]-w/b*gc[1]+1)/2),A=a(m),v=a(g),S=We(r,u(t)*M),E=We(r,u(A)*M),P=We(r,u(v)*M);i.tri([m[0],t,m[1]],[m[0],A,m[1]],[g[0],v,g[1]],S,E,P,void 0,c),i.tri([m[0],t,m[1]],[g[0],v,g[1]],[g[0],t,g[1]],S,P,S,void 0,c)}}var Fw={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},gravel_bed:{color:2632501,side:1645605,edge:9676478,edgeAlpha:.3},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function Dw(i,e,t){let n=[(e[0]+t[0])/2,(e[1]+t[1])/2],r=t[0]-e[0],o=t[1]-e[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let u=a.points[(c+1)%a.points.length],d=u[0]-l[0],h=u[1]-l[1],f=Math.hypot(d,h)||1;if(Math.abs((r*h-o*d)/(s*f))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*d+(n[1]-l[1])*h)/(f*f)));return Math.hypot(l[0]+d*p-n[0],l[1]+h*p-n[1])<.4}))}function Em(i,e){return e.type==="pool"?hc(i,e):mo(i)+(e.offset??0)+(Vi(e.type)?.01:cc[e.type])}function Ls(i){return wn(i)>=0?i:[...i].reverse()}function Nw(i,e){let t=i[e];if(Vi(t.type)||t.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===e||!(o.cut&&r>e||o.type==="pool")||o.points.length<3||o.points.every(s=>Ge(s,t.points))&&n.push(Ls(o.points))}return n}function Am(i,e,t,n,r,o,s,a,l=0){let c=t[0]-e[0],u=t[1]-e[1],d=Math.hypot(c,u);if(d<1e-6)return;let h=-u/d*n*.5,f=c/d*n*.5;if(Math.abs(l)<1e-4){St(i,Ls([[e[0]+h,e[1]+f],[t[0]+h,t[1]+f],[t[0]-h,t[1]-f],[e[0]-h,e[1]-f]]),r,o,s,a,{aoFrom:r-1});return}let p=(b,x)=>[e[0]+h*x,b,e[1]+f*x],_=(b,x)=>[t[0]+h*x,b+l,t[1]+f*x],m=(b,x)=>{i.tri(b[0],b[1],b[2],x,x,x,void 0,Ze),i.tri(b[0],b[2],b[3],x,x,x,void 0,Ze),i.tri(b[0],b[2],b[1],x,x,x,void 0,Ze),i.tri(b[0],b[3],b[2],x,x,x,void 0,Ze)},g=new Q(a),w=new Q(We(s,.9)),y=new Q(We(s,.6));m([p(o,1),_(o,1),_(o,-1),p(o,-1)],g),m([p(r,1),_(r,1),_(r,-1),p(r,-1)],y),m([p(r,1),_(r,1),_(o,1),p(o,1)],w),m([p(r,-1),_(r,-1),_(o,-1),p(o,-1)],w),m([p(r,1),p(r,-1),p(o,-1),p(o,1)],w),m([_(r,1),_(r,-1),_(o,-1),_(o,1)],w)}function Rm(i,e,t,n){let r=mo(t),o=t.outdoor??[];o.forEach((s,a)=>{if(s.points.length<3)return;let l=r+(s.offset??0),c=(y,b)=>l-Ms(s,y,b),u=l-(s.type==="pool"?0:s.slope??0),d=Vi(s.type)&&s.height?s.height:cc[s.type],h={...Fw[s.type],top:d},f=Ls(s.points),p=We(h.edge,h.edgeAlpha),_=s.open&&(s.type==="fence"||s.type==="pergola")?f.length-1:-1,m=y=>{if(s.outline!==!1)for(let b=0;b<f.length;b++){if(b===_)continue;let x=f[b],M=f[(b+1)%f.length];e.seg([x[0],y(x[0],x[1]),x[1]],[M[0],y(M[0],M[1]),M[1]],p,Ze)}},g=n??i,w=new Q(n?1734832:h.color);switch(s.type){case"pool":{let y=new Q(h.side),b=new Q(We(h.side,.55)),x=new Q(932440),M=hc(t,s),A=uc(t,s),v=Yp(t,s);for(let[S,E,P]of mn(f)){let C=f[S],R=f[E],T=f[P];(n?g:i).tri([C[0],M,C[1]],[T[0],M,T[1]],[R[0],M,R[1]],w,w,w,void 0,Ze),i.tri([C[0],v,C[1]],[T[0],v,T[1]],[R[0],v,R[1]],x,x,x,void 0,Ze)}for(let S=0;S<f.length;S++){let E=f[S],P=f[(S+1)%f.length];i.tri([P[0],v,P[1]],[P[0],A,P[1]],[E[0],A,E[1]],b,y,y,void 0,Ze),i.tri([P[0],v,P[1]],[E[0],A,E[1]],[E[0],v,E[1]],b,y,b,void 0,Ze)}if(!s.above&&Rh(t,s)){let S=new Q(660258),E=new Q(396054),P=v-.2,C=Math.min(l,A);for(let R=0;R<f.length;R++){let T=f[R],I=f[(R+1)%f.length];i.tri([T[0],P,T[1]],[T[0],C,T[1]],[I[0],C,I[1]],E,S,S,void 0,Ze),i.tri([T[0],P,T[1]],[I[0],C,I[1]],[I[0],P,I[1]],E,S,E,void 0,Ze)}for(let[R,T,I]of mn(f)){let F=f[R],z=f[T],B=f[I];i.tri([F[0],P,F[1]],[z[0],P,z[1]],[B[0],P,B[1]],E,E,E,void 0,Ze)}if(s.outline!==!1)for(let R=0;R<f.length;R++){let T=f[R],I=f[(R+1)%f.length];e.seg([T[0],P,T[1]],[I[0],P,I[1]],We(h.edge,h.edgeAlpha*.35),Ze),e.seg([T[0],P,T[1]],[T[0],C,T[1]],We(h.edge,h.edgeAlpha*.25),Ze)}}if(A>l+.02){let S=new Q(2044240),E=new Q(1187123);for(let P=0;P<f.length;P++){let C=f[P],R=f[(P+1)%f.length];i.tri([C[0],l,C[1]],[C[0],A,C[1]],[R[0],A,R[1]],E,S,S,void 0,Ze),i.tri([C[0],l,C[1]],[R[0],A,R[1]],[R[0],l,R[1]],E,S,E,void 0,Ze)}m(()=>l+.005)}if(m(()=>A),m(()=>M+.005),s.outline!==!1)for(let S=0;S<f.length;S++){let E=f[S],P=f[(S+1)%f.length];e.seg([E[0],v+.005,E[1]],[P[0],v+.005,P[1]],We(h.edge,h.edgeAlpha*.4),Ze)}break}case"fence":{for(let y=0;y<f.length;y++){if(y===_)continue;let b=f[y],x=f[(y+1)%f.length],M=Math.hypot(x[0]-b[0],x[1]-b[1]),A=Math.max(1,Math.round(M/2)),v=_>=0&&y===_-1?A:A-1;for(let S=0;S<=v;S++){let E=S/A,P=b[0]+(x[0]-b[0])*E,C=b[1]+(x[1]-b[1])*E,R=c(P,C);St(i,Ls([[P-.04,C-.04],[P+.04,C-.04],[P+.04,C+.04],[P-.04,C+.04]]),R,R+h.top,h.side,h.color)}for(let S of[.35,.85])e.seg([b[0],c(b[0],b[1])+S*h.top,b[1]],[x[0],c(x[0],x[1])+S*h.top,x[1]],p,Ze)}break}case"pergola":{let y=h.top;for(let[b,x]of f){let M=c(b,x);St(i,Ls([[b-.06,x-.06],[b+.06,x-.06],[b+.06,x+.06],[b-.06,x+.06]]),M,M+y,h.side,h.color)}for(let b=0;b<f.length;b++){if(b===_)continue;let x=f[b],M=f[(b+1)%f.length],A=c(x[0],x[1])+y;if(Am(i,x,M,.12,A-.16,A,h.side,h.color,c(M[0],M[1])-c(x[0],x[1])),s.bracing){let v=c(x[0],x[1]),S=c(M[0],M[1]);e.seg([x[0],v+.25,x[1]],[M[0],S+y-.25,M[1]],p,Ze),e.seg([M[0],S+.25,M[1]],[x[0],v+y-.25,x[1]],p,Ze)}}if(nm(f)){let b=im(f),x=b.x1-b.x0,M=b.z1-b.z0,A=x>=M,v=A?x:M,S=Math.max(1,Math.round(v/.6));for(let E=1;E<S;E++){let P=(A?b.x0:b.z0)+v*E/S,C=A?[P,b.z0+.06]:[b.x0+.06,P],R=A?[P,b.z1-.06]:[b.x1-.06,P],T=c(C[0],C[1])+y;Am(i,C,R,.06,T-.04,T+.08,h.side,h.color,c(R[0],R[1])-c(C[0],C[1]))}}m((b,x)=>c(b,x)+y+.004);break}case"balcony":{St(i,f,l-.18,l+h.top,h.side,h.color,{aoFrom:l-.18}),m(()=>l+h.top+.004);let b=s.height&&s.height>.3?s.height:1,x=We(9417983,.42),M=We(3662079,.55);for(let A=0;A<f.length;A++){let v=f[A],S=f[(A+1)%f.length];if(Dw(t,v,S))continue;let E=Math.hypot(S[0]-v[0],S[1]-v[1]),P=l+h.top;e.seg([v[0],P+b,v[1]],[S[0],P+b,S[1]],M,Ze),e.seg([v[0],P+.1,v[1]],[S[0],P+.1,S[1]],x,Ze);let C=Math.max(1,Math.round(E/.12));for(let R=0;R<=C;R++){let T=R/C,I=v[0]+(S[0]-v[0])*T,F=v[1]+(S[1]-v[1])*T;e.seg([I,P,F],[I,P+b,F],R===0||R===C?M:x,Ze)}}break}default:{let y=(x,M)=>c(x,M)+h.top,b=Nw(o,a);if(St(i,f,u,s.slope?y:l+h.top,h.side,h.color,{aoFrom:u,holes:b}),s.type==="gravel_bed"){let x=f.map(T=>T[0]),M=f.map(T=>T[1]),A=Math.min(...x),v=Math.min(...M),S=Math.max(...x)-A,E=Math.max(...M)-v,P=[...s.id].reduce((T,I)=>(Math.imul(T,33)^I.charCodeAt(0))>>>0,5381),C=()=>(P=Math.imul(P,1664525)+1013904223>>>0,P/4294967296),R=Math.min(512,Math.ceil(vr(f)/.012));for(let T=0;T<R;T++){let I=A+C()*S,F=v+C()*E,z=.012+C()*.016,B=[[I-z,F],[I+z*.7,F-z*.8],[I+z*.4,F+z]];if(!B.every(G=>Ge(G,f)&&!b.some($=>Ge(G,$))))continue;let N=B.map(([G,$])=>[G,y(G,$)+.003,$]),O=We(C()<.5?5593185:3422016,.75+C()*.3);i.tri(N[0],N[2],N[1],O,O,O,void 0,Ze)}}if(m((x,M)=>y(x,M)+.004),s.type==="hedge"&&m((x,M)=>c(x,M)+.004),s.outline!==!1)for(let x of b)for(let M=0;M<x.length;M++){let A=x[M],v=x[(M+1)%x.length];e.seg([A[0],y(A[0],A[1])+.004,A[1]],[v[0],y(v[0],v[1])+.004,v[1]],p,Ze)}}}})}var Fs=.012,zw=.012;function km(i,e,t,n,r,o=[],s,a){let l=[],c=[],u=[],d=[],h=(y,b,x,M,A,v,S)=>{for(let E of[y,b,x,y,x,M])l.push(E[0],E[1],E[2]),c.push(A[0],A[1],A[2]),u.push(v),d.push(S)},f=i.openings.map(y=>Cs(i,y,e)).filter(y=>!!y);i.rooms.forEach((y,b)=>{if(y.points.length<3)return;let x=mc(i,y,f),M=y.points.map(T=>T[0]),A=y.points.map(T=>T[1]),v=Math.min(...M),S=Math.min(...A),E=Math.max(...M),P=Math.max(...A),C=Math.max(1,Math.ceil((E-v)/r)),R=Math.max(1,Math.ceil((P-S)/r));for(let T=0;T<C;T++)for(let I=0;I<R;I++){let F=v+(T+.5)*r,z=S+(I+.5)*r;if(!Ge([F,z],y.points)||o.some(Z=>Ge([F,z],Z))&&!x.some(Z=>Ge([F,z],Z)))continue;let B=v+T*r,N=S+I*r,O=Math.min(B+r,E),G=Math.min(N+r,P);if(a){let Z=[[B,N],[O,N],[O,G],[B,G]];if(Z.every(([ue,ne])=>Ge([ue+(F-ue)*1e-6,ne+(z-ne)*1e-6],y.points))){let ue=Z.map(([ne,ae])=>a(ne,ae));if(ue.every(ne=>ne!=null)){let ne=(ue[1]+ue[2]-ue[0]-ue[3])/(2*(O-B)),ae=(ue[2]+ue[3]-ue[0]-ue[1])/(2*(G-N)),H=Math.hypot(ne,1,ae),W=[ne/H,-1/H,ae/H],se=Z.map(([he,ie],de)=>[he,ue[de]-Fs,ie]);h(se[0],se[1],se[2],se[3],W,b,-1)}}}let $=pt(i,y)+Fs;if(!x.length)h([B,$,N],[B,$,G],[O,$,G],[O,$,N],[0,1,0],b,-1);else{let Z=[[[B,N],[B,G],[O,G],[O,N]]];for(let ue of x)Z=Z.flatMap(ne=>vo(ne,ue));for(let ue of Z)for(let ne=1;ne+1<ue.length;ne++)for(let ae of[ue[0],ue[ne],ue[ne+1]])l.push(ae[0],$,ae[1]),c.push(0,1,0),u.push(b),d.push(-1)}}});let p=i.rooms.length,_=(i.outdoor??[]).filter(y=>y.points.length>=3&&!Vi(y.type));if(_.length){let y=_.flatMap(E=>E.points.map(P=>P[0])),b=_.flatMap(E=>E.points.map(P=>P[1])),x=Math.floor(Math.min(...y)/r)*r,M=Math.floor(Math.min(...b)/r)*r,A=Math.max(1,Math.ceil((Math.max(...y)-x)/r)),v=Math.max(1,Math.ceil((Math.max(...b)-M)/r)),S=(E,P,C)=>Em(i,E)-(E.type==="pool"?0:Ms(E,P,C))+Fs;for(let E=0;E<A;E++)for(let P=0;P<v;P++){let C=x+E*r,R=M+P*r,T,I=[C+r/2,R+r/2];T=_.find(z=>z.type==="pool"&&Ge(I,z.points));for(let z=_.length-1;z>=0&&!T;z--)Ge(I,_[z].points)&&(T=_[z]);if(!T)continue;let F=(z,B)=>[z,S(T,z,B),B];h(F(C,R),F(C,R+r),F(C+r,R+r),F(C+r,R),[0,1,0],p,-1)}}let m=Math.min(i.cut_height,Wt(i)-i.elevation),g=[];e.forEach((y,b)=>{let x=an(i,y).top,M=y.b[0]-y.a[0],A=y.b[1]-y.a[1],v=Math.hypot(M,A);if(v<.05)return;let S=[M/v,A/v],E=[-S[1],S[0]],P=t[b],C=Ow(y,S,v,n),R=(F,z)=>F?i.rooms.findIndex(B=>B.id===F):z?p:-1;g.push({a:y.a,b:y.b,h:x,ra:R(y.roomLeft,!1),rb:R(y.roomRight,y.exterior),gaps:C});let T=(F,z,B)=>[z,B,...F.filter(N=>N>z+.005&&N<B-.005)].sort((N,O)=>N-O).filter((N,O,G)=>O===0||N>G[O-1]+.005),I=T(C.flatMap(F=>[F.s0,F.s1]),0,v);for(let F of[1,-1]){let z=F>0?y.roomLeft:y.roomRight,B=z?i.rooms.findIndex(W=>W.id===z):y.exterior?p:-1;if(B<0)continue;let N=z?i.rooms[B]:null,O=N?pt(i,N):an(i,y).bottom,G=N?O+Math.min(kn(i,N),y.height??1/0):x,$=Math.min(m,G-.02),Z=T([$,($+G)/2,...C.flatMap(W=>[W.y0+.01,W.y1-.01])],O+.02,G-.02),ue=(F>0?y.left:y.right)+zw,ne=[E[0]*F,E[1]*F],ae=(W,se)=>[y.a[0]+S[0]*W+ne[0]*ue,se,y.a[1]+S[1]*W+ne[1]*ue],H=W=>{let se=ae(W,0),he=s?.(se[0],se[2]);return he==null?1/0:he-.02};for(let W=0;W<I.length-1;W++){let se=I[W+1]-I[W],he=Math.max(1,Math.ceil(se/r));for(let ie=0;ie<he;ie++){let de=I[W]+se/he*ie,Oe=I[W]+se/he*(ie+1),Ne=(de+Oe)/2;for(let Ie=0;Ie<Z.length-1;Ie++){let Le=Z[Ie],Ue=Z[Ie+1];if(Ue-Le<.01)continue;let at=(Le+Ue)/2;if(C.some(mt=>Ne>mt.s0&&Ne<mt.s1&&at>mt.y0&&at<mt.y1))continue;let wt=Le>=m-1e-6?P:wr+P,Bt=Math.min(Ue,H(de)),et=Math.min(Ue,H(Oe));Bt<=Le+.005&&et<=Le+.005||h(ae(de,Le),ae(Oe,Le),ae(Oe,Math.max(Le,et)),ae(de,Math.max(Le,Bt)),[ne[0],0,ne[1]],B,wt)}}}}});for(let y of i.openings){let b=Cs(i,y,e),x=b?.stair;if(!b||!x)continue;let M=i.rooms.findIndex(v=>v.id===x.room.id),A=(v,S,E)=>[b.start[0]+b.axis[0]*v+x.toward[0]*S,E,b.start[1]+b.axis[1]*v+x.toward[1]*S];for(let v=0;v<x.count;v++){let S=x.face+x.depth*v/x.count,E=x.face+x.depth*(v+1)/x.count,P=(x.recess?b.low+(b.high-b.low)*(v+1)/x.count:b.high-(b.high-b.low)*v/x.count)+Fs;h(A(0,S,P),A(b.width,S,P),A(b.width,E,P),A(0,E,P),[0,1,0],M,-1)}if(x.offset>0){let v=b.threshold+Fs;h(A(0,x.wallFace,v),A(b.width,x.wallFace,v),A(b.width,x.face,v),A(0,x.face,v),[0,1,0],M,-1)}}let w=[];for(let y of n){if(y.opening.type!=="door")continue;let b=e.find(A=>Cm(A,y)&&Bw(A,y));if(!b||!b.roomLeft||!b.roomRight)continue;let x=i.rooms.findIndex(A=>A.id===b.roomLeft),M=i.rooms.findIndex(A=>A.id===b.roomRight);x<0||M<0||w.push({id:y.opening.id,a:x,b:M,x:y.start[0]+y.axis[0]*(y.width/2),y:Math.min(1.1,y.top*.55),z:y.start[1]+y.axis[1]*(y.width/2)})}return{pos:new Float32Array(l),normal:new Float32Array(c),room:Int16Array.from(u),fold:new Float32Array(d),doors:w,blockers:g}}function Cm(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(t,n)||1;return Math.abs((e.start[0]-i.a[0])*n-(e.start[1]-i.a[1])*t)/r<.02&&Math.abs((e.axis[0]*t+e.axis[1]*n)/r)>.99}function Bw(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(t,n)||1,o=e.start[0]+e.axis[0]*(e.width/2),s=e.start[1]+e.axis[1]*(e.width/2),a=((o-i.a[0])*t+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}function Ow(i,e,t,n){let r=[];for(let o of n){if(!Cm(i,o))continue;let s=(o.start[0]-i.a[0])*e[0]+(o.start[1]-i.a[1])*e[1],l=o.axis[0]*e[0]+o.axis[1]*e[1]>0?s:s-o.width;l>t||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function Uw(i,e){let t=Math.max(0,-e),n=Math.max(0,e);switch(i){case"ceiling":return .3+.7*t;case"spot":return .06+.94*t**5;case"pendant":return .25+.85*t**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(e);default:return 1}}function Vw(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Pm(i,e,t,n,r,o,s){let a=e-i.x,l=t-i.y,c=n-i.z,u=a*a+l*l+c*c,d=Math.sqrt(u)||1e-6,h=Vw(i),f=1/(1+u/(h*h)),p=f*Math.sqrt(f),_=Math.max(0,-(a*r+l*o+c*s)/d);if(i.direction){let m=(a*i.direction[0]+l*i.direction[1]+c*i.direction[2])/d,g=Math.cos((i.angle??60)*Math.PI/360),w=Math.cos((i.angle??60)*.8*Math.PI/360),y=Math.max(0,Math.min(1,(m-g)/(w-g)));return i.level*p*(.2+.8*_)*y*y*(3-2*y)}return i.level*p*(.2+.8*_)*Uw(i.kind,l/d)}function Im(i,e,t=.7,n=[]){let r=[...e];i.doors.forEach((u,d)=>{let h=n[d]??.5;if(!(h<=.01))for(let[f,p]of[[u.a,u.b],[u.b,u.a]]){let _=[0,0,0];for(let g of e){if(g.room!==f)continue;let w=g.x-u.x,y=g.y-u.y,b=g.z-u.z,x=Math.hypot(w,y,b)||1,M=Pm(g,u.x,u.y,u.z,w/x,y/x,b/x);_[0]+=g.color[0]*M,_[1]+=g.color[1]*M,_[2]+=g.color[2]*M}let m=Math.max(_[0],_[1],_[2]);m<.01||r.push({x:u.x,y:u.y,z:u.z,color:[_[0]/m,_[1]/m,_[2]/m],level:Math.min(1,m*.9*(.35+.65*h)),kind:"wall",room:p})}});let o=new Map;for(let u of r){let d=i.blockers.filter(f=>f.ra===u.room||f.rb===u.room),h={...u,color:u.color.map(f=>Math.pow(f,1.5)),walls:d};o.set(u.room,[...o.get(u.room)??[],h])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let u=0;u<l.length;u++){let d=o.get(l[u]);if(!d)continue;let h=u*3,f=0,p=0,_=0;for(let m of d){if(m.walls.length&&Nh(m,m.walls,s[h],s[h+1],s[h+2]))continue;let g=Pm(m,s[h],s[h+1],s[h+2],a[h],a[h+1],a[h+2]);f+=m.color[0]*g,p+=m.color[1]*g,_+=m.color[2]*g}c[h]=1-Math.exp(-f*t*1.6),c[h+1]=1-Math.exp(-p*t*1.6),c[h+2]=1-Math.exp(-_*t*1.6)}return c}function Nh(i,e,t,n,r){let o=t-i.x,s=r-i.z;for(let a of e){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=o*c-s*l;if(Math.abs(u)<1e-9)continue;let d=a.a[0]-i.x,h=a.a[1]-i.z,f=(d*c-h*l)/u;if(f<=1e-6||f>=1-1e-6)continue;let p=(d*s-h*o)/u;if(p<0||p>1)continue;let _=i.y+(n-i.y)*f;if(_>=a.h||_<(a.bottom??0))continue;let m=p*Math.hypot(l,c);if(!a.gaps.some(g=>m>g.s0&&m<g.s1&&_>g.y0&&_<g.y1))return!0}return!1}function zh(i,e,t){let n=i.rooms.findIndex(r=>r.points.length>=3&&Ge([e,t],r.points));return n<0?i.rooms.length:n}function yo(i,e){return i&&e>=0&&e<i.length?i[e]:e}function Gw(i){let e=[...i].sort((n,r)=>n[0]-r[0]||n[1]-r[1]),t=n=>{let r=[];for(let o of n){for(;r.length>1;){let s=r[r.length-2],a=r[r.length-1];if((a[0]-s[0])*(o[1]-s[1])-(a[1]-s[1])*(o[0]-s[0])>1e-9)break;r.pop()}r.push(o)}return r.slice(0,-1)};return[...t(e),...t([...e].reverse())]}function Lm(i,e,t,n,r,o){let s=t.map(l=>{let c=Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1])||1,u=(l.b[0]-l.a[0])/c,d=(l.b[1]-l.a[1])/c,h=n.filter(f=>Math.abs((f.start[0]-l.a[0])*d-(f.start[1]-l.a[1])*u)<.01).map(f=>{let p=(f.start[0]-l.a[0])*u+(f.start[1]-l.a[1])*d;return{s0:p,s1:p+f.width,y0:f.sill,y1:f.top}});return{a:l.a,b:l.b,h:an(e,l).top,bottom:an(e,l).bottom,ra:0,rb:0,gaps:h}}),a=e.rooms.map(l=>({origin:new U(0,pt(e,l),0),u:new U(1,0,0),v:new U(0,0,1),normal:new U(0,1,0),polygon:l.points,holes:r,room:l.id}));for(let l of t){let c=l.b[0]-l.a[0],u=l.b[1]-l.a[1],d=Math.hypot(c,u);if(d<.01)continue;let h=new U(c/d,0,u/d),f=an(e,l);for(let[p,_,m]of[[l.roomLeft,l.left,1],[l.roomRight,l.right,-1]]){if(!p)continue;let g=new U(-h.z*m,0,h.x*m),w=new U(l.a[0],f.bottom,l.a[1]).addScaledVector(g,_+.003),y=[];for(let b of n){let x=new U(b.start[0]-l.a[0],0,b.start[1]-l.a[1]);if(Math.abs(x.x*h.z-x.z*h.x)>.01)continue;let M=x.dot(h);M+b.width<0||M>d||y.push([[M,b.sill-f.bottom],[M+b.width,b.sill-f.bottom],[M+b.width,b.top-f.bottom],[M,b.top-f.bottom]])}a.push({origin:w,u:h,v:new U(0,1,0),normal:g,polygon:[[0,0],[d,0],[d,f.top-f.bottom],[0,f.top-f.bottom]],holes:y,room:p,fold:o[t.indexOf(l)]})}}for(let l of e.furniture.filter(c=>c.rotation_x||c.rotation_z)){let c=Ct(e,l),u=sc(l,c).map(f=>new U(...f)),d=Ss(e,l.x,l.z)?.id,h=[...a];for(let f of e.furniture){if(f===l||!(Ph.has(f.type)||_t(f.type)?.surface)||Ss(e,f.x,f.z)?.id!==d)continue;let p=sc(f,Ct(e,f)).slice(4).map(b=>new U(...b)),_=p[1].clone().sub(p[0]).normalize(),m=p[3].clone().sub(p[0]).normalize(),g=new U().crossVectors(m,_).normalize();g.y<0&&g.negate();let w=p[0].distanceTo(p[1]),y=p[0].distanceTo(p[3]);h.push({origin:p[0],u:_,v:m,normal:g,polygon:[[0,0],[w,0],[w,y],[0,y]],holes:[],room:d,fold:Is})}for(let f of h){if(f.room!==d)continue;let p=u.map(E=>E.clone().sub(f.origin).dot(f.normal));if(Math.max(...p)<-.01)continue;let _=Math.max(0,Math.min(...p));if(_>.35)continue;let m=Gw(u.map(E=>{let P=E.clone().sub(f.origin);return[P.dot(f.u),P.dot(f.v)]}));if(m.length<3)continue;let g=m.reduce((E,P)=>E+P[0],0)/m.length,w=m.reduce((E,P)=>E+P[1],0)/m.length,y=.055+_*.15,b=m.map(([E,P])=>{let C=Math.hypot(E-g,P-w)||1;return[E+(E-g)*y/C,P+(P-w)*y/C]}),x=new Q(1-.45*Math.exp(-_*8),1-.45*Math.exp(-_*8),1-.45*Math.exp(-_*8)),M=new Q(1,1,1),A=mn(f.polygon).map(([E,P,C])=>[f.polygon[E],f.polygon[P],f.polygon[C]]),v=i.count,S=(E,P)=>{for(let C of A){let R=[xo(E,C)];for(let T of f.holes)for(let[I,F,z]of mn(T))R=R.flatMap(B=>vo(B,[T[I],T[F],T[z]]));for(let T of R)for(let I=1;I+1<T.length;I++){let F=[T[0],T[I],T[I+1]],z=G=>f.origin.clone().addScaledVector(f.u,G[0]).addScaledVector(f.v,G[1]).addScaledVector(f.normal,.003).toArray(),B=z([(F[0][0]+F[1][0]+F[2][0])/3,(F[0][1]+F[1][1]+F[2][1])/3]);if(Nh({x:l.x,y:c+l.h/2,z:l.z},s,B[0],B[1],B[2]))continue;let N=(E[1][1]-E[2][1])*(E[0][0]-E[2][0])+(E[2][0]-E[1][0])*(E[0][1]-E[2][1]),O=G=>{let $=((E[1][1]-E[2][1])*(G[0]-E[2][0])+(E[2][0]-E[1][0])*(G[1]-E[2][1]))/N,Z=((E[2][1]-E[0][1])*(G[0]-E[2][0])+(E[0][0]-E[2][0])*(G[1]-E[2][1]))/N;return new Q(P[0].r*$+P[1].r*Z+P[2].r*(1-$-Z),P[0].g*$+P[1].g*Z+P[2].g*(1-$-Z),P[0].b*$+P[1].b*Z+P[2].b*(1-$-Z))};Math.abs(N)>1e-10&&i.tri(z(F[0]),z(F[1]),z(F[2]),O(F[0]),O(F[1]),O(F[2]))}}};for(let[E,P,C]of mn(m))S([m[E],m[P],m[C]],[x,x,x]);for(let E=0;E<m.length;E++){let P=(E+1)%m.length;S([m[E],b[E],b[P]],[x,M,M]),S([m[E],b[P],m[P]],[x,M,x])}f.fold!==void 0&&vc(i,v,e.cut_height,f.fold)}}}var Xn=1e-4;function Bh(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e/2}function Fm(i,e,t,n){let r=[e[0]-i[0],e[1]-i[1]],o=[n[0]-t[0],n[1]-t[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((t[0]-i[0])*o[1]-(t[1]-i[1])*o[0])/s,l=((t[0]-i[0])*r[1]-(t[1]-i[1])*r[0])/s;return a>Xn&&a<1-Xn&&l>-Xn&&l<1+Xn?a:null}function Oh(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-e[0])*n+(i[1]-e[1])*r)/o;return s<=Xn||s>=1-Xn?null:Math.abs((i[0]-e[0])*r-(i[1]-e[1])*n)/Math.sqrt(o)<Xn?s:null}function Hw(i,e){for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];for(let o=0;o<e.length;o++){let s=e[o],a=e[(o+1)%e.length];if(Fm(n,r,s,a)!==null||Oh(s,n,r)!==null||Oh(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<Xn)return!0}}return Ge(i[0],e)||Ge(e[0],i)}function Ww(i){let e=i.map(o=>Bh(o)>=0?o:[...o].reverse()),t=[];e.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],u=[0,1];e.forEach((d,h)=>{if(h!==s)for(let f=0;f<d.length;f++){let p=d[f],_=d[(f+1)%d.length],m=Fm(l,c,p,_)??Oh(p,l,c);m!==null&&u.push(m)}}),u.sort((d,h)=>d-h);for(let d=1;d<u.length;d++){if(u[d]-u[d-1]<Xn)continue;let h=[l[0]+(c[0]-l[0])*u[d-1],l[1]+(c[1]-l[1])*u[d-1]],f=[l[0]+(c[0]-l[0])*u[d],l[1]+(c[1]-l[1])*u[d]],p=Math.hypot(f[0]-h[0],f[1]-h[1]),_=[(h[0]+f[0])/2+(f[1]-h[1])/p*.001,(h[1]+f[1])/2-(f[0]-h[0])/p*.001];e.some((m,g)=>g!==s&&Ge(_,m))||t.some(([m,g])=>Math.hypot(m[0]-h[0],m[1]-h[1])<Xn&&Math.hypot(g[0]-f[0],g[1]-f[1])<Xn)||t.push([h,f])}}});let n=[],r=new Set;for(let o=0;o<t.length;o++){if(r.has(o))continue;r.add(o);let s=[t[o][0]],a=t[o][1];for(let l=0;l<t.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=t.findIndex(([u],d)=>!r.has(d)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(t[c][0]),a=t[c][1]}s.length>=3&&Bh(s)>1e-6&&n.push(s)}return n}function Uh(i){let e=i.filter(o=>o.length>=3),t=e.map((o,s)=>s),n=o=>t[o]===o?o:t[o]=n(t[o]);for(let o=0;o<e.length;o++)for(let s=o+1;s<e.length;s++)n(o)!==n(s)&&Hw(e[o],e[s])&&(t[n(s)]=n(o));let r=new Map;return e.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:Ww(o))}function Xw(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-e[0])*n+(i[1]-e[1])*r)/o)):0;return Math.hypot(i[0]-e[0]-n*s,i[1]-e[1]-r*s)}function Dm(i,e,t=.03){return i.every(n=>Ge(n,e)||e.some((r,o)=>Xw(n,r,e[(o+1)%e.length])<=t))}function Vh(i,e){let t=Bh(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return t.map((r,o)=>{let s=n(t[(o-1+t.length)%t.length],r),a=n(r,t[(o+1)%t.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*e,r[1]+(s[1]+a[1])/l*e]})}var Nm=!1;function zm(i){Nm=i}function Bm(i,e,t,n,r=Nm){let o=r||i.detail==="low"?12:i.detail==="high"?40:24,s=i.w*e,a=i.d*t,l=i.h*n,c;if(i.shape==="cyl"&&i.detail){let u=i.axis??"y",d=u==="x"?s:u==="z"?a:l,h=(u==="x"?Math.min(a,l):u==="z"?Math.min(s,l):Math.min(s,a))/2;c=new Ko(h,h,d,r?32:i.detail==="high"?64:40),u==="x"?c.rotateZ(-Math.PI/2):u==="z"&&c.rotateX(Math.PI/2),c.translate(0,l/2,0)}else if(i.shape==="polygon"){let u=i.axis??"y",d=u==="x"?a:s,h=u==="y"?a:l,f=u==="y"?l:u==="x"?s:a,p=i.points??[],m=p.reduce((w,y,b)=>{let x=p[(b+1)%p.length];return w+y[0]*x[1]-x[0]*y[1]},0)<0?p.toReversed():p,g=[];for(let[w,y,b]of mn(m)){for(let x of[w,y,b])g.push(m[x][0],0,m[x][1]);for(let x of[w,b,y])g.push(m[x][0],1,m[x][1])}for(let w=0;w<m.length;w++){let y=m[w],b=m[(w+1)%m.length];g.push(y[0],0,y[1],b[0],1,b[1],b[0],0,b[1],y[0],0,y[1],y[0],1,y[1],b[0],1,b[1])}for(let w=0;w<g.length;w+=3){let y=g[w]*d,b=g[w+1]*f,x=g[w+2]*h;u==="z"?(g[w]=y,g[w+1]=x+l/2,g[w+2]=a/2-b):u==="x"?(g[w]=b-s/2,g[w+1]=x+l/2,g[w+2]=y):(g[w]=y,g[w+1]=b,g[w+2]=x)}c=new Ke,c.setAttribute("position",new Te(g,3))}else if(i.shape==="sphere"||i.shape==="ellipsoid"){let u=r?32:i.detail==="high"?64:40;c=new ts(.5,u,u/2);let d=Math.min(s,a,l);c.scale(i.shape==="sphere"?d:s,i.shape==="sphere"?d:l,i.shape==="sphere"?d:a),c.translate(0,l/2,0)}else if(i.shape==="rounded_box"){let u=o===12?3:o===40?8:5,d=Math.min(i.radius??.08,.49);c=new Ci(1,1,1,u,u,u);let h=c.getAttribute("position"),f=.5-d;for(let p=0;p<h.count;p++){let _=new U().fromBufferAttribute(h,p),m=_.clone().clampScalar(-f,f);_.sub(m).normalize().multiplyScalar(d).add(m),h.setXYZ(p,_.x,_.y,_.z)}c.scale(s,l,a),c.translate(0,l/2,0)}else if(i.shape==="torus"){let u=Math.min(.24,i.thickness??.06),d=r?32:i.detail==="high"?64:40;c=new ns(.5-u,u,Math.max(8,d/4),d),c.scale(s,l,a),c.translate(0,l/2,0)}else if(i.shape==="pipe"){let u=(i.path??[]).map(([y,b,x])=>new U(y*s,(b+.5)*l,x*a));if(u.length<2)return null;let d=new to(u,!1,"centripetal"),h=(i.radius??.1)*Math.min(s,a,l),f=new io(d,Math.min(256,o*(u.length-1)),h,Math.max(8,o/2),!1),p=new io(d,Math.min(256,o*(u.length-1)),Math.max(h*.05,h-(i.thickness??.025)*Math.min(s,a,l)),Math.max(8,o/2),!1),_=f.toNonIndexed(),m=p.toNonIndexed(),g=[..._.getAttribute("position").array],w=m.getAttribute("position").array;for(let y=0;y<w.length;y+=9)g.push(...w.slice(y,y+3),...w.slice(y+6,y+9),...w.slice(y+3,y+6));c=new Ke,c.setAttribute("position",new Te(g,3));for(let y of[f,p,_,m])y.dispose()}else if(i.shape==="bowl"){let u=Math.min(.2,i.thickness??.04);c=new Qo([new Ee(0,0),new Ee(.5,0),new Ee(.5,1),new Ee(.5-u,1),new Ee(.5-u,u),new Ee(0,u)],o),c.scale(s,l,a)}else return null;return c.translate(i.x*e,i.y*n,i.z*t),c.computeVertexNormals(),c}var D={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},pe=We(5995775,.3),Qe=We(5995775,.17),Je=We(3662079,.45),Mr=class i{buf;lines;tf;mirrored;constructor(e,t,n){this.buf=e,this.lines=t,this.tf=n,this.mirrored=Wm(n)}shape(e,t,n,r,o,s){let a=Bm(e,t,n,r);if(!a)return!1;let l=a.index?a.toNonIndexed():a,c=l.getAttribute("position"),u=l.getAttribute("normal"),d=new Q(s),h=p=>{let[_,m]=this.tf(c.getX(p),c.getZ(p));return[_,o+c.getY(p),m]},f=p=>d.clone().multiplyScalar(.78+.2*Math.max(0,u.getY(p))+.14*(u.getX(p)*-.55+u.getZ(p)*.83));for(let p=0;p<c.count;p+=3){let _=p+(this.mirrored?2:1),m=p+(this.mirrored?1:2);this.buf.tri(h(p),h(_),h(m),f(p),f(_),f(m))}return l!==a&&l.dispose(),a.dispose(),!0}rotated(e,t,n){let r=n*ft,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(e+(l-e)*o-(c-t)*s,t+(l-e)*s+(c-t)*o))}box(e,t,n,r,o,s,a,l=a,c=null){if(t-e<1e-4||s-o<1e-4||r-n<1e-4)return;let u=[this.tf(e,o),this.tf(e,s),this.tf(t,s),this.tf(t,o)];St(this.buf,Gh(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(e,t,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])],c=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])];if(l!==Gh(l)&&(l.reverse(),c.reverse()),Sm(this.buf,l,c,n,r,o,s),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(e,t,n,r,o,s,a,l=a,c=.03,u=null){if(c=Math.min(c,(t-e)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(e,t,n,r,o,s,a,l,u);this.loft([e+c,t-c,o+c,s-c],[e,t,o,s],n,n+c,a),r-n-2*c>.005&&this.box(e,t,n+c,r-c,o,s,a,a,u),this.loft([e,t,o,s],[e+c,t-c,o+c,s-c],r-c,r,a,l)}lyingCyl(e,t,n,r,o,s,a,l,c=l,u=12,d=null){let h=Math.min(a,o-r)/2;if(h<1e-4||s<1e-4)return;let f=(r+o)/2,p=e==="x"?t:n,_=e==="x"?n:t,m=(w,y)=>e==="x"?this.tf(w,y):this.tf(y,w),g=this.buf.p.length;if(Tm(this.buf,m,p-s/2,p+s/2,_,f,h,l,c,u),this.mirrored&&Yh(this.buf,g),d)for(let w of[p-s/2,p+s/2])for(let y=0;y<u;y++){let b=y/u*Math.PI*2,x=(y+1)/u*Math.PI*2;this.line(m(w,_+Math.sin(b)*h),m(w,_+Math.sin(x)*h),f+Math.cos(b)*h,f+Math.cos(x)*h,d)}}cyl(e,t,n,r,o,s,a=s,l=10,c=null){let u=[];for(let d=0;d<l;d++){let h=d/l*Math.PI*2;u.push(this.tf(e+Math.cos(h)*n,t+Math.sin(h)*n))}if(St(this.buf,Gh(u),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let d=0;d<l;d++)this.line(u[d],u[(d+1)%l],o,o,c)}seg(e,t,n,r,o,s,a=pe){this.line(this.tf(e,n),this.tf(r,s),t,o,a)}line(e,t,n,r,o){this.lines.seg([e[0],n,e[1]],[t[0],r,t[1]],o,Ze)}outline(e,t,n,r){for(let o=0;o<4;o++){let s=e[o],a=e[(o+1)%4];this.line(s,a,n,n,r),this.line(s,s,t,n,r)}}};function Wm(i){let e=i(0,0),t=i(1,0),n=i(0,1);return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])<0}function Gh(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}function Sr(i,e,t,n,r,o,s=D.metal,a=!1){let l=e/2-o-r,c=t/2-o-r;for(let u of[-1,1])for(let d of[-1,1]){let h=u*l,f=d*c;a?i.loft([h-r*.3,h+r*.3,f-r*.3,f+r*.3],[h-r/2,h+r/2,f-r/2,f+r/2],0,n,s):i.box(h-r/2,h+r/2,0,n,f-r/2,f+r/2,s)}}function Ds(i,e,t,n,r,o,s,a=null,l=!1){let c=(t-e)/s;for(let u=1;u<s;u++){let d=e+c*u;i.seg(d,n,o,d,r,o,Qe)}for(let u=0;u<s;u++){let d=e+c*(u+.5),h=a??r-.08;if(l)i.seg(d-Math.min(.1,c/4),h,o+.012,d+Math.min(.1,c/4),h,o+.012,Je);else{let f=s>1?d+(u%2?-c/2+.06:c/2-.06):d+c/2-.06;i.seg(f,h-.08,o+.012,f,h+.08,o+.012,Je)}}}function Om(i,e,t,n,r){let o=-e/2,s=e/2,a=-t/2,l=t/2,c=Math.min(.2,e*.12),u=n*.5,d=Math.min(.24,t*.28);Sr(i,e,t,.07,.05,.05,D.wood,!0),i.pad(o,s,.07,u-.08,a+.02,l,D.fabric,D.fabricTop,.04,pe),i.loft([o,s,a,a+d],[o+.01,s-.01,a,a+d*.5],u-.08,n,D.fabric,D.fabricTop,pe),i.pad(o,o+c,u-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,pe),i.pad(s-c,s,u-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,pe);let f=(s-c-(o+c))/r;for(let p=0;p<r;p++){let _=o+c+f*p+.02,m=_+f-.04;i.pad(_,m,u-.08,u+.05,a+d+.02,l-.06,D.cushion,D.cushion,.04),i.loft([_+.01,m-.01,a+d*.55,a+d+.14],[_+.03,m-.03,a+d*.4,a+d*.4+.06],u+.03,n*.93,D.cushion)}}function Um(i,e,t,n,r){let o=-e/2,s=e/2,a=-t/2,l=t/2,c=Math.max(.3,Math.min(.95,t*.5,e*(r?.34:.45))),u=Math.min(.24,c*.28),d=Math.min(.2,c*.24),h=n*.5,f=n*.72,p=r?[-1,1]:[-1],_=(v,S)=>i.loft([v-.015,v+.015,S-.015,S+.015],[v-.025,v+.025,S-.025,S+.025],0,.07,D.wood);_(o+.06,a+.06),_(s-.06,a+.06),r||_(s-.06,a+c-.06);for(let v of p)_(v*(e/2-.06),l-.06),_(v*(e/2-c+.06),l-.06);i.pad(o,s,.07,h-.08,a+.02,a+c,D.fabric,D.fabricTop,.04,pe);for(let v of p){let[S,E]=v<0?[o+.02,o+c]:[s-c,s-.02];i.pad(S,E,.07,h-.08,a+c-.02,l,D.fabric,D.fabricTop,.04,pe)}i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],h-.08,n,D.fabric,D.fabricTop,pe);for(let v of p)v<0?i.loft([o,o+u,a+u,l],[o,o+u*.5,a+u,l-.01],h-.08,n,D.fabric,D.fabricTop,pe):i.loft([s-u,s,a+u,l],[s-u*.5,s,a+u,l-.01],h-.08,n,D.fabric,D.fabricTop,pe);for(let v of p){let[S,E]=v<0?[o+u,o+c]:[s-c,s-u];i.pad(S,E,h-.08,f,l-d,l,D.fabric,D.fabricTop,.04,pe)}r||i.pad(s-d,s,h-.08,f,a+.02,a+c-.02,D.fabric,D.fabricTop,.04,pe);let m=o+u,g=r?s-u:s-d,w=Math.max(1,Math.round((g-m)/.62)),y=(g-m)/w;for(let v=0;v<w;v++){let S=m+y*v+.02,E=S+y-.04;i.pad(S,E,h-.08,h+.05,a+u+.02,a+c-.04,D.cushion,D.cushion,.04),i.loft([S+.01,E-.01,a+u*.55,a+u+.14],[S+.03,E-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,D.cushion)}let b=a+c,x=l-d;if(x-b<.2)return;let M=Math.max(1,Math.round((x-b)/.62)),A=(x-b)/M;for(let v of p)for(let S=0;S<M;S++){let E=b+A*S+.02,P=E+A-.04;v<0?(i.pad(o+u+.02,o+c-.04,h-.08,h+.05,E,P,D.cushion,D.cushion,.04),i.loft([o+u*.55,o+u+.14,E+.01,P-.01],[o+u*.4,o+u*.4+.06,E+.03,P-.03],h+.03,n*.93,D.cushion)):(i.pad(s-c+.04,s-u-.02,h-.08,h+.05,E,P,D.cushion,D.cushion,.04),i.loft([s-u-.14,s-u*.55,E+.01,P-.01],[s-u*.4-.06,s-u*.4,E+.03,P-.03],h+.03,n*.93,D.cushion))}}function Kw(i,e,t,n){let r=-t/2,o=t/2,s=-e/2,a=e/2,l=Math.min(.32,n*.36);Sr(i,e,t,.08,.06,.03,D.wood,!0),i.box(s,a,.08,l,r+.06,o,D.wood,D.woodTop,pe),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,D.white,D.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,D.wood,D.woodTop,pe),i.box(s,a,n-.05,n,r,r+.09,D.wood,D.woodTop,Qe);let c=l+.2,u=r+(t-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,u,o-.01,D.cushion,D.fabricTop,.025,Qe),i.lyingCyl("x",0,u+.05,c-.02,c+.09,e-.02,.1,D.cushion,D.fabricTop,8);let d=e>1.2?2:1,h=(e-.2)/d;for(let f=0;f<d;f++){let p=s+.1+h*f,_=r+.12,m=Math.min(.42,t*.2),g=.1;i.loft([p+.03+g,p+h-.03-g,_+g*.5,_+m-g*.5],[p+.03,p+h-.03,_,_+m],c,c+.06,D.whiteTop),i.loft([p+.03,p+h-.03,_,_+m],[p+.03+g,p+h-.03-g,_+g*.5,_+m-g*.5],c+.06,c+.12,D.whiteTop,D.whiteTop,Qe)}}function Yw(i,e,t,n){let r=Math.min(.46,n*.52);Sr(i,e,t,r-.04,.035,.02,D.wood,!0),i.box(-e/2,e/2,r-.04,r,-t/2,t/2,D.wood,D.woodTop,pe),i.pad(-e/2+.02,e/2-.02,r,r+.04,-t/2+.05,t/2-.03,D.cushion,D.cushion,.015),i.loft([-e/2,e/2,-t/2+.02,-t/2+.07],[-e/2+.02,e/2-.02,-t/2,-t/2+.03],r,n,D.wood,D.woodTop,pe)}function qw(i,e,t,n){Sr(i,e,t,n-.04,.06,.05,D.wood,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.wood,D.woodTop,Je),i.box(-e/2+.08,e/2-.08,n-.1,n-.04,-t/2+.08,t/2-.08,D.body)}function Zw(i,e,t,n){let r=-e/2,o=e/2;i.box(r,o,n-.035,n,-t/2,t/2,D.wood,D.woodTop,pe),i.box(r,r+.03,0,n-.035,-t/2+.03,t/2-.03,D.metal);let s=Math.min(.42,e*.32);i.box(o-s,o,0,n-.035,-t/2+.03,t/2-.02,D.body,D.bodyTop,pe);let a=t/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,Qe);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,Je);i.box(-.3,.3,n+.08,n+.42,-t/2+.08,-t/2+.11,D.dark,D.dark,Je),i.box(-.03,.03,n,n+.1,-t/2+.09,-t/2+.13,D.metal)}function Zi(i,e,t,n,r,o=null,s=!1){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,D.body,D.bodyTop,pe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark),Ds(i,-e/2,e/2,.08,n,t/2-.02,r,o,s)}function $w(i,e,t,n){i.box(-e/2,-e/2+.025,0,n,-t/2,t/2,D.wood,D.woodTop,pe),i.box(e/2-.025,e/2,0,n,-t/2,t/2,D.wood,D.woodTop,pe),i.box(-e/2+.025,e/2-.025,0,n,-t/2,-t/2+.015,D.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-e/2+.025,e/2-.025,a,a+.025,-t/2+.015,t/2,D.wood,D.woodTop,Qe),s<o){let l=-e/2+.025+.04,c=s*3;for(;l<e/2-.025-.12;){let u=.03+c*7%5*.008,d=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+d,-t/2+.04,t/2-.05,c%3?D.fabric:D.cushion,D.fabricTop),l+=u+.006,c++}}}}function Jw(i,e,t,n){let r=Math.max(1,Math.round(e/.6));Zi(i,e,t-.02,n-.04,r,n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,pe)}function jw(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,D.white,D.whiteTop,pe);let r=n*.62;i.seg(-e/2,r,t/2,e/2,r,t/2,Qe);let o=e/2-.06;i.seg(o,r+.08,t/2+.015,o,r+.4,t/2+.015,Je),i.seg(o,r-.4,t/2+.015,o,r-.08,t/2+.015,Je)}function Qw(i,e,t,n){let r=t/2-Xm;i.box(-e/2,e/2,.02,n,-t/2,r,D.body,D.bodyTop,pe),i.box(-e/2+.05,e/2-.05,0,.02,-t/2+.05,r-.05,D.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-e/2+.03,o,r+.001,-.03,o,r+.001,Qe),i.seg(.03,o,r+.001,e/2-.03,o,r+.001,Qe))}var Xm=.06;function Km(i,e,t,n,r){let o=i.p.length;e1(i,e,t,n,r),e.mirror&&Yh(i,o),Pn(i.p,o,e,t+e.h/2)}function e1(i,e,t,n,r){let o=e.rotation*ft,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(b,x)=>[e.x+l*b*s-x*a,e.z+l*b*a+x*s],u=t+.05,d=t+e.h-.02,h=new Q(.75,.1,.14),f=new Q(D.dark),p=new Q(D.accent),_=e.w/2-.006,m=(b,x,M)=>{let A=M/g,v=new Q(2043212).lerp(h,A),S=new Q(D.body).lerp(h,A*.8),E=Math.cos(M),P=Math.sin(M),C=(I,F)=>c(b+x*(I*E-F*P),e.d/2+I*P+F*E),R=(I,F,z,B)=>{let[N,O,G,$]=I;i.tri([N[0],F,N[1]],[O[0],F,O[1]],[G[0],z,G[1]],B),i.tri([N[0],F,N[1]],[G[0],z,G[1]],[$[0],z,$[1]],B)},T=(I,F,z,B,N,O,G,$=G)=>{let Z=[C(I,O),C(F,O),C(F,N),C(I,N)];R([Z[0],Z[1],Z[1],Z[0]],z,B,$),R([Z[3],Z[2],Z[2],Z[3]],z,B,G),R([Z[0],Z[3],Z[3],Z[0]],z,B,G),R([Z[1],Z[2],Z[2],Z[1]],z,B,G),R([Z[0],Z[1],Z[2],Z[3]],B,B,G),R([Z[3],Z[2],Z[1],Z[0]],z,z,G)};return T(0,_,u,d,-Xm,0,S,v),T(_-.05,_-.03,t+e.h*.45,t+e.h*.75,.005,.025,p),T},g=1.83;m(-e.w/2,1,n*g)(.12,.3,t+e.h*.5,t+e.h*.68,.001,.005,f),m(e.w/2,-1,r*g)(.06,_-.06,t+e.h*.52,t+e.h*.86,.001,.005,f)}function t1(i,e,t,n){Zi(i,e,t-.02,n-.04,1,n-.24,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.dark,D.dark,pe);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*e/.6,l=o*t/.62;i.cyl(a,l,s,n,n+.004,D.dark,1451583,12,Je)}}function n1(i,e,t,n){Zi(i,e,t-.02,n-.04,Math.max(1,Math.round(e/.45)),n-.2);let r=Math.min(.5,e-.2);i.box(-e/2,-r/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,pe),i.box(r/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,pe),i.box(-r/2,r/2,n-.04,n,-t/2,-t/2+.1,D.whiteTop,D.whiteTop),i.box(-r/2,r/2,n-.04,n,t/2-.08,t/2,D.whiteTop,D.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-t/2+.1,t/2-.08,D.metal,D.metal,Je),i.cyl(0,-t/2+.05,.02,n,n+.28,D.metal,D.metal,8),i.box(-.015,.015,n+.24,n+.28,-t/2+.05,-t/2+.22,D.metal)}function i1(i,e,t,n){i.box(-e/2,e/2,0,n-.02,-t/2,t/2,D.white,D.whiteTop,pe),i.box(-e/2,e/2,n-.02,n,-t/2,-t/2+.07,D.whiteTop),i.box(-e/2,e/2,n-.02,n,t/2-.07,t/2,D.whiteTop),i.box(-e/2,-e/2+.07,n-.02,n,-t/2+.07,t/2-.07,D.whiteTop),i.box(e/2-.07,e/2,n-.02,n,-t/2+.07,t/2-.07,D.whiteTop),i.box(-e/2+.07,e/2-.07,n-.03,n-.02,-t/2+.07,t/2-.07,D.glass,D.glass,Je),i.cyl(-e/2+.04,0,.02,n,n+.12,D.metal,D.metal,8)}function r1(i,e,t,n){i.box(-e/2,e/2,0,.05,-t/2,t/2,D.whiteTop,D.whiteTop,pe),i.cyl(0,0,.04,.05,.052,D.metal,D.metal,8);for(let[r,o,s,a]of[[-e/2,t/2,e/2,t/2],[e/2,-t/2,e/2,t/2]])i.seg(r,.05,o,s,.05,a,Je),i.seg(r,n,o,s,n,a,Je),i.seg(s,.05,a,s,n,a,Je);i.cyl(-e/2+.06,-t/2+.06,.015,.05,n-.05,D.metal,D.metal,6),i.cyl(-e/2+.2,-t/2+.2,.1,n-.08,n-.06,D.metal,D.metal,12,Je)}function o1(i,e,t,n){let r=Math.min(.18,t*.3);i.box(-e/2,e/2,.45,n,-t/2,-t/2+r,D.white,D.whiteTop,pe),i.box(-e*.3,e*.3,0,.36,-t/2+r-.02,t/2-.12,D.white,D.whiteTop),i.cyl(0,t/2-.26,Math.min(e/2,.19),.36,.41,D.white,D.whiteTop,12,pe),i.box(-e/2+.02,e/2-.02,.41,.43,-t/2+r,-t/2+r+.05,D.whiteTop)}function s1(i,e,t,n){Zi(i,e,t-.02,n-.12,e>.8?2:1,n-.3),i.box(-e/2,e/2,n-.12,n,-t/2,t/2,D.white,D.whiteTop,pe),i.box(-e/2+.07,e/2-.07,n-.005,n,-t/2+.12,t/2-.06,D.glass,D.glass,Je),i.cyl(0,-t/2+.06,.018,n,n+.2,D.metal,D.metal,8),i.box(-e/2+.04,e/2-.04,n+.35,n+1,-t/2,-t/2+.02,D.glass,D.glass,Je)}function a1(i,e,t,n){Zi(i,e,t,n,Math.max(2,Math.round(e/.6)),n*.55,!0);let r=Math.min(e*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-t/2+.08,-t/2+.24,D.metal),i.box(-.02,.02,n+.02,n+.12,-t/2+.14,-t/2+.18,D.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-t/2+.12,-t/2+.16,D.dark,D.dark,Je)}function l1(i,e,t,n){let r=Math.min(e,t)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,D.pot,D.pot,10,pe),i.cyl(0,0,r*.08,o,n*.55,D.wood,D.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),u=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-o)*.16,D.plant,D.plantTop,8,a===s-1?Qe:null)}}function c1(i,e,t){i.box(-e/2,e/2,0,.012,-t/2,t/2,D.fabric,D.fabricTop);let n=Math.min(.12,Math.min(e,t)*.08);for(let[r,o,s,a]of[[-e/2+n,-t/2+n,e/2-n,-t/2+n],[e/2-n,-t/2+n,e/2-n,t/2-n],[e/2-n,t/2-n,-e/2+n,t/2-n],[-e/2+n,t/2-n,-e/2+n,-t/2+n]])i.seg(r,.014,o,s,.014,a,pe)}function u1(i,e,t,n){let r=Math.max(3,Math.round(n/.18)),o=n/r,s=t/r;for(let u=0;u<r;u++){let d=t/2-s*u,h=d-s,f=o*(u+1);i.box(-e/2,e/2,0,f,h,d,D.wood,D.woodTop),i.seg(-e/2,f,d,e/2,f,d,pe)}i.seg(-e/2,0,t/2,-e/2,o,t/2,pe);for(let u of[-e/2,e/2])i.seg(u,o,t/2,u,n,-t/2+s,Qe);let a=.9,l=e/2-.03,c=Math.max(1,r-4);i.seg(l,o+a,t/2-s/2,l,o*c+a,t/2-s*(c-.5),Je);for(let u=0;u<c;u+=3){let d=t/2-s*(u+.5),h=o*(u+1);i.seg(l,h,d,l,h+a,d,Qe)}}function h1(i,e,t,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:u}=jp(e,t,n),d=-e/2,h=-e/2+a,f=e/2-a,p=e/2,_=-t/2+l;for(let A=0;A<o;A++){let v=t/2-c*A,S=u*(A+1);i.box(d,h,0,S,v-c,v,D.wood,D.woodTop),i.seg(d,S,v,h,S,v,pe)}i.seg(d,0,t/2,d,u,t/2,pe);let m=u*r,g=.2;i.box(d,h,0,m,-t/2,_,D.wood,D.woodTop),i.box(h,p,Math.max(0,m-g),m,-t/2,_,D.wood,D.woodTop),i.seg(d,m,_,h,m,_,pe);for(let A=0;A<s;A++){let v=_+c*A,S=u*(r+1+A);i.box(f,p,Math.max(0,S-u-g),S,v,v+c,D.wood,D.woodTop),i.seg(f,S,v,p,S,v,pe)}i.seg(d,u,t/2,d,m,_,Qe),i.seg(p,m,_,p,n,_+c*(s-1),Qe);let w=.9,y=h-.03,b=f+.03,x=_-.03,M=Math.max(1,s-4);i.seg(y,u+w,t/2-c/2,y,m+w,x,Je),i.seg(y,m+w,x,b,m+w,x,Je),i.seg(b,m+w,x,b,u*(r+M)+w,_+c*(M-.5),Je);for(let A=0;A<o;A+=3){let v=t/2-c*(A+.5);i.seg(y,u*(A+1),v,y,u*(A+1)+w,v,Qe)}for(let A of[y,b])i.seg(A,m,x,A,m+w,x,Qe);for(let A=2;A<M;A+=3){let v=_+c*(A+.5);i.seg(b,u*(r+1+A),v,b,u*(r+1+A)+w,v,Qe)}}function d1(i,e,t,n){Sr(i,e,t,.12,.03,.04,D.metal),i.box(-e/2,e/2,.12,n,-t/2,t/2-.02,D.wood,D.woodTop,pe),Ds(i,-e/2,e/2,.12,n,t/2-.02,Math.max(2,Math.round(e/.45)),n-.1,!0)}function f1(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2-.02,D.wood,D.woodTop,pe),i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.06,D.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=t/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-e/2,a,o,e/2,a,o,Qe)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,Je)}}function p1(i,e,t,n){i.box(-e/2,e/2,0,.45,-t/2,t/2,D.wood,D.woodTop,pe),Ds(i,-e/2,e/2,.02,.45,t/2,Math.max(2,Math.round(e/.5)),.38,!0),i.box(-e/2,e/2,.45,n,-t/2,-t/2+.03,D.body,D.bodyTop,pe),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.wood,D.woodTop,pe);let r=Math.max(2,Math.round(e/.25));for(let o=0;o<r;o++){let s=-e/2+e/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-t/2+.03,-t/2+.1,D.metal,D.metal)}}function Vm(i,e,t,n,r){let s=Math.min(.5,r?t*.4:t),a=.08;i.box(-e/2,e/2,0,.45-.06,-t/2,-t/2+s,D.wood,D.woodTop,pe),i.box(-e/2,e/2,0,n,-t/2,-t/2+a,D.wood,D.woodTop,pe),i.box(-e/2+(r?s:.02),e/2-.02,.45-.06,.45+.02,-t/2+a,-t/2+s,D.cushion,D.cushion,Qe),r&&(i.box(-e/2,-e/2+s,0,.45-.06,-t/2+s,t/2,D.wood,D.woodTop,pe),i.box(-e/2,-e/2+a,0,n,-t/2+a,t/2,D.wood,D.woodTop,pe),i.box(-e/2+a,-e/2+s,.45-.06,.45+.02,-t/2+a,t/2-.02,D.cushion,D.cushion,Qe))}function m1(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.8,0,.02,D.metal,D.metal,12),i.cyl(0,0,.025,.02,n-.05,D.metal,D.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,D.metal,D.metal,12,Qe),i.cyl(0,0,r,n-.05,n,D.cushion,D.fabricTop,14,pe)}function g1(i,e,t,n){let r=Math.min(e,t)/2;i.box(-r,r,.04,.08,-.03,.03,D.metal),i.box(-.03,.03,.04,.08,-r,r,D.metal),i.cyl(0,0,.06,.02,.1,D.dark,D.dark,8),i.cyl(0,0,.025,.1,.44,D.metal,D.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,D.fabric,D.cushion,pe),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,D.fabric,D.fabricTop,pe),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,D.metal)}function _1(i,e,t,n){Sr(i,e,t,.08,.04,.05,D.wood),i.box(-e/2,e/2,.08,n,-t/2,t/2,D.fabric,D.cushion,pe)}function b1(i,e,t,n){i.box(-e/2,e/2,1.45,1.45+n,-t/2,t/2-.02,D.body,D.bodyTop,pe),Ds(i,-e/2,e/2,1.45,1.45+n,t/2-.02,Math.max(1,Math.round(e/.5)),1.45+.08)}function v1(i,e,t,n){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,D.body,D.bodyTop,pe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark);let r=t/2-.02;i.box(-e/2+.03,e/2-.03,.85,1.45,r,r+.01,D.dark,D.dark,Je),i.seg(-e/2+.08,1.4,r+.02,e/2-.08,1.4,r+.02,Je);for(let o of[.85,1.45])i.seg(-e/2,o,r,e/2,o,r,Qe);i.seg(e/2-.06,.5,r+.012,e/2-.06,.7,r+.012,Je),i.seg(e/2-.06,1.6,r+.012,e/2-.06,1.8,r+.012,Je)}function x1(i,e,t,n){let r=t-.3;i.box(-e/2+.05,e/2-.05,.08,n-.04,-t/2+.02,-t/2+r,D.body,D.bodyTop,pe),i.box(-e/2+.07,e/2-.07,0,.08,-t/2+.04,-t/2+r-.04,D.dark),Ds(i,-e/2+.05,e/2-.05,.08,n-.04,-t/2+r,Math.max(2,Math.round(e/.6)),n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,pe)}function y1(i,e,t,n){i.box(-e/2,e/2,.02,n-.04,-t/2,t/2-.02,D.body,D.bodyTop,pe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark),i.seg(-e/2+.08,n-.12,t/2-.008,e/2-.08,n-.12,t/2-.008,Je),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,pe)}function Gm(i,e,t,n,r){i.box(-e/2,e/2,0,n,-t/2,t/2-.02,D.white,D.whiteTop,pe);let o=t/2-.012;i.seg(-e/2,n-.14,o,e/2,n-.14,o,Qe),i.seg(e/2-.16,n-.07,o,e/2-.08,n-.07,o,Je);let s=(n-.14)/2+.04,a=Math.min(e*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,d=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,s+Math.sin(u)*a,o,Math.cos(d)*a,s+Math.sin(d)*a,o,Je),r||i.seg(Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,Math.cos(d)*a*.72,s+Math.sin(d)*a*.72,o,Qe)}}function w1(i,e,t,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(e/2)-(s>0?.05:0),s*(e/2)+(s<0?.05:0),0,n,a*(t/2)-(a>0?.05:0),a*(t/2)+(a<0?.05:0),D.wood,D.woodTop);for(let s of[.25,n-.55])i.box(-e/2,e/2,s,s+.08,-t/2,t/2,D.wood,D.woodTop,pe),i.box(-e/2+.04,e/2-.04,s+.08,s+.24,-t/2+.05,t/2-.05,D.white,D.whiteTop,Qe),i.box(-e/2+.05,e/2-.05,s+.24,s+.33,-t/2+.08,-t/2+.4,D.whiteTop,D.whiteTop);i.box(-e/2,e/2,n-.2,n-.15,t/2-.05,t/2,D.wood,D.woodTop);let o=e/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,t/2+.02,s,n-.15,t/2+.02,pe);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,t/2+.02,o+.18,s,t/2+.02,Qe)}function M1(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.4,0,.03,D.metal,D.metal,12),i.cyl(0,0,.05,.03,n-.04,D.wood,D.wood,8),i.cyl(0,0,r,n-.04,n,D.wood,D.woodTop,20,pe)}function S1(i,e,t,n){Sr(i,e,t,n-.03,.04,.03,D.wood),i.box(-e/2,e/2,n-.03,n,-t/2,t/2,D.wood,D.woodTop,pe),i.box(-e/2+.05,e/2-.05,.1,.13,-t/2+.05,t/2-.05,D.body,D.bodyTop,Qe)}function T1(i,e,t,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-t/2,-t/2+.03,D.metal),i.box(-e/2,e/2,r,r+n,-t/2+.03,t/2,D.dark,D.dark,Je)}function A1(i,e,t,n){let r=Wh;i.box(-e/2+.05,-e/2+.08,0,r,-t/2,-t/2+.03,D.metal),i.box(e/2-.08,e/2-.05,0,r,-t/2,-t/2+.03,D.metal),i.box(-e/2,e/2,r,r+n,-t/2+.02,t/2,D.white,D.whiteTop,pe);let o=Math.max(3,Math.round(e/.1));for(let s=1;s<o;s++){let a=-e/2+e/o*s;i.seg(a,r+.03,t/2+.002,a,r+n-.03,t/2+.002,Qe)}}function E1(i,e,t,n){let r=Xh;i.box(-e/2,e/2,r+.07,r+n,-t/2,t/2,D.white,D.whiteTop,pe),i.box(-e/2,e/2,r,r+.07,-t/2,t/2-.05,D.white,D.white,pe),i.box(-e/2+.04,e/2-.04,r+.012,r+.06,t/2-.05,t/2-.02,D.dark),i.seg(-e/2+.03,r+n*.55,t/2+.002,e/2-.03,r+n*.55,t/2+.002,Qe),i.seg(e/2-.14,r+n*.75,t/2+.002,e/2-.07,r+n*.75,t/2+.002,Je)}function wo(i,e,t,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,r,e+Math.cos(l)*n,t+Math.sin(l)*n,r,Je)}}function R1(i,e,t,n,r){let s=t/2;if(r==="slim"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.dark,D.body,pe),i.seg(-e*.25,1.1+n*.15,s+.004,-e*.25,1.1+n*.85,s+.004,Je),i.box(-e*.1,e*.3,1.1+n*.7,1.1+n*.85,s,s+.005,D.dark);return}if(r==="hybrid"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.white,D.whiteTop,pe),wo(i,0,1.1+n*.66,Math.min(e,n)*.22,s+.004),i.seg(-e*.08,1.1+n*.66,s+.005,e*.08,1.1+n*.66,s+.005,Je);for(let a of[-1,1])wo(i,a*e*.22,1.1+n*.2,Math.min(e,n)*.1,-t/2-.002,12);return}i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.white,D.whiteTop,pe),i.box(-e*.28,e*.28,1.1+n*.58,1.1+n*.82,t/2,t/2+.006,D.dark),i.seg(-e*.3,1.1+n*.45,t/2+.004,e*.3,1.1+n*.45,t/2+.004,Je);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*e/2+a*.002,1.1+n*l/6,-t/2+.03,a*e/2+a*.002,1.1+n*l/6,t/2-.03,Qe)}function P1(i,e,t,n){let r=Math.min(t,n)*.32;i.box(-e/2,e/2,0,.03,-t/2,t/2,D.dark),i.box(-e/2,e*.1,.05,.05+r*2,-r,r,D.metal,D.metal,pe);for(let s of[-e*.4,-e*.25,-e*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,Qe);i.cyl(e*.28,0,Math.min(e*.2,t*.45),.03,n*.82,D.dark,D.body,14,pe),i.cyl(e*.28,0,Math.min(e*.2,t*.45)*.9,n*.82,n,D.glass,D.glass,14);let o=Math.min(e*.2,t*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(e*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,e*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,Je)}}function k1(i,e,t,n,r){let o=Math.min(e,t)/2;if(i.cyl(0,0,o*.95,0,n*.08,D.dark,D.dark,16),i.cyl(0,0,o,n*.08,n*.78,D.dark,D.body,18,pe),i.cyl(0,0,o*.75,n*.78,n*.84,D.dark,D.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,D.dark,D.metal,pe),wo(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,D.dark,D.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,D.dark,D.metal,16,pe);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,Je)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,D.dark,D.body)}function C1(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2,D.white,D.whiteTop,pe);for(let a of[-e*.4,e*.4])i.box(a-.03,a+.03,0,.06,-t/2+.02,t/2-.02,D.dark);let r=Math.min(n*.38,e*.3),o=-e*.15,s=n*.53;wo(i,o,s,r,t/2+.004,24),wo(i,o,s,r*.55,t/2+.004,16),i.seg(o-r,s,t/2+.005,o+r,s,t/2+.005,Qe),i.seg(o,s-r,t/2+.005,o,s+r,t/2+.005,Qe),i.box(e*.22,e*.42,n*.62,n*.8,t/2,t/2+.006,D.dark),i.seg(e*.25,n*.71,t/2+.008,e*.39,n*.71,t/2+.008,Je);for(let a=1;a<8;a++)i.seg(e/2+.002,n*(.1+a*.1),-t/2+.03,e/2+.002,n*(.1+a*.1),t/2-.03,Qe)}function I1(i,e,t,n){i.box(-e/2,e/2,.9,.9+n*.45,-t/2,t/2,D.white,D.whiteTop,pe);for(let o of[-1,1])wo(i,o*e*.22,.9+n*.22,Math.min(e,n)*.09,t/2+.004,12);i.seg(-e*.35,.9+n*.4,t/2+.004,e*.35,.9+n*.4,t/2+.004,Je);for(let o of[-1,1])i.box(o*e*.25-e*.18,o*e*.25+e*.18,0,n*.5,-t/2,t/2,D.white,D.glass,Qe)}function L1(i,e,t,n){let r=Zp-n*.4;i.box(-e/2,e/2,r+n*.25,r+n*.6,-t*.25,t*.25,D.metal,D.metal,pe),i.box(-e*.12,e*.12,r+n*.6,r+n*.8,-t*.12,t*.12,D.dark),i.box(-e*.1,e*.45,r+n*.8,r+n,-t*.15,t*.15,D.accent,D.accent)}function F1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,D.dark,D.body,pe),i.box(-e/2-.01,e/2+.01,n,n+.03,-t/2-.01,t/2+.01,D.dark,D.body),i.seg(-e/2,n+.032,t/2+.01,e/2,n+.032,t/2+.01,Je),i.seg(-e*.3,n*.55,t/2+.003,e*.3,n*.55,t/2+.003,Qe)}function D1(i,e,t,n){i.box(-e/2,e/2,1,1+n,-t/2,t/2,D.dark,D.body,pe);let o=Math.min(e,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,t/2+.003,Math.cos(u)*o,s+Math.sin(u)*o,t/2+.003,Je)}i.box(-.015,.015,1-.35,1,t/2-.03,t/2,D.dark),i.box(-.06,.06,1-.42,1-.35,t/2-.05,t/2,D.dark,D.body)}function N1(i,e,t,n){i.box(-e/2,e/2,.4,.4+n,-t/2,t/2,D.white,D.whiteTop,pe),i.seg(-e/2+.025,.4+.025,t/2+.003,-e/2+.025,.4+n-.025,t/2+.003,Qe),i.seg(-e/2+.025,.4+n-.025,t/2+.003,e/2-.025,.4+n-.025,t/2+.003,Qe),i.box(e/2-.06,e/2-.035,.4+n*.5-.05,.4+n*.5+.05,t/2,t/2+.012,D.dark),i.box(-e*.3,e*.3,.4+n*.6,.4+n*.8,t/2,t/2+.005,D.dark),i.seg(-e*.22,.4+n*.7,t/2+.008,e*.22,.4+n*.7,t/2+.008,Je)}function z1(i,e,t,n,r){if(r==="wall"){i.box(-e/2,e/2,.5,.5+n,-t/2,t/2,D.white,D.whiteTop,pe),i.seg(-e*.3,.5+n*.9,t/2+.004,e*.3,.5+n*.9,t/2+.004,Je),i.seg(-e*.3,.5+n*.08,t/2+.003,e*.3,.5+n*.08,t/2+.003,Qe);return}if(r==="cube"){i.box(-e/2+.01,e/2-.01,0,.03,-t/2+.01,t/2-.01,D.dark),i.box(-e/2,e/2,.03,n,-t/2,t/2,D.dark,D.body,pe),i.seg(-e*.35,n*.85,t/2+.004,e*.35,n*.85,t/2+.004,Je),i.box(-e*.15,e*.15,n,n+.025,-.012,.012,D.dark);return}i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.02,D.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-e/2,e/2,.06+a*s+.004,.06+(a+1)*s,-t/2,t/2,D.white,D.whiteTop,pe);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-e*.04,l,t/2+.003,e*.04,l,t/2+.003,Je)}}var Wh=.12,Xh=2.05;function Kh(i,e){let t=B1(i,e);return t&&i.mirror?{...t,x0:-t.x1,x1:-t.x0}:t}function B1(i,e){let t=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=Eh(i.type);if(o){let l=e?Ct(e,i):0,c=(o.x-o.w/2)*t,u=(o.x+o.w/2)*t,d=Math.min(.02,(u-c)*.05);return{x0:c+d,x1:u-d,y0:l+o.y*r+d,y1:l+(o.y+o.h)*r-d,z:(o.z+o.d/2)*n}}let s=e&&i.type!=="fridge_smart"?Ct(e,i)-ws(i):0,a=O1(i,t,n,r,e);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function O1(i,e,t,n,r){if(i.type==="pool_pump"){let o=Math.min(t,n)*.32;return{x0:-e/2+.03,x1:e*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-e/2+.05,x1:e*.15,y0:n*.15,y1:n*.9,z:t/2+.003};if(i.type==="pool_filter"){let o=Math.min(e,t)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-e*.4,x1:e*.4,y0:.9+n*.05,y1:.9+n*.4,z:t/2+.003};if(i.type==="tv_board"){let o=Math.min(e*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-t/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-e/2+.02,x1:e/2-.02,y0:o+.02,y1:o+n-.02,z:t/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-t/2+.115};if(i.type==="fridge_smart"){let o=r?Ct(r,i):0;return{x0:.06,x1:e/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:t/2+.006}}if(i.type==="radiator")return{x0:-e/2+.02,x1:e/2-.02,y0:Wh+.02,y1:Wh+n-.02,z:t/2+.004};if(i.type==="ac_unit")return{x0:-e/2+.05,x1:e/2-.05,y0:Xh+.015,y1:Xh+.06,z:t/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(e*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:t/2-.004}}return i.type==="dishwasher"?{x0:-e/2+.06,x1:e/2-.06,y0:n-.16,y1:n-.08,z:t/2-.004}:null}function U1(i,e,t,n,r){let o=Math.min(.14,Math.max(.06,Math.min(t,n)*.15)),s=new Q(1-r,1-r,1-r),a=new Q(1,1,1),l=.003,c=[e(-t/2,-n/2),e(t/2,-n/2),e(t/2,n/2),e(-t/2,n/2)],u=[e(-t/2-o,-n/2-o),e(t/2+o,-n/2-o),e(t/2+o,n/2+o),e(-t/2-o,n/2+o)],d=f=>[f[0],l,f[1]],h=i.p.length;i.tri(d(c[0]),d(c[1]),d(c[2]),s),i.tri(d(c[0]),d(c[2]),d(c[3]),s);for(let f=0;f<4;f++){let p=(f+1)%4;i.tri(d(c[f]),d(u[f]),d(u[p]),s,a,a),i.tri(d(c[f]),d(u[p]),d(c[p]),s,a,s)}Wm(e)&&Yh(i,h)}function xc(i,e,t,n,r=0){let o=i.p.length,s=e.p.length;V1(i,e,n.rotation_x||n.rotation_z?new ot:t,n,r),Pn(i.p,o,n,r+n.h/2),Pn(e.p,s,n,r+n.h/2)}function Yh(i,e){let t=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=e;n<i.p.length;n+=9){let r=n/9;t(i.p,n,3),t(i.c,n,3),t(i.f,r*3,1),t(i.uv,r*6,2),t(i.tile,r*6,2)}}function V1(i,e,t,n,r){let o=_t(n.type)?0:r-ws(n);if(_t(n.type)||Math.abs(o)<.001)return Hm(i,e,t,n,r);let s=i.p.length,a=e.p.length;Hm(i,e,r<.05?t:new ot,n,0);for(let l=s+1;l<i.p.length;l+=3)i.p[l]+=o;for(let l=a+1;l<e.p.length;l+=3)e.p[l]+=o}function Hm(i,e,t,n,r){let o=n.rotation*ft,s=Math.cos(o),a=Math.sin(o),l=n.mirror?-1:1,c=(p,_)=>[n.x+l*p*s-_*a,n.z+l*p*a+_*s],u=new Mr(i,e,c),d=Math.max(.05,n.w),h=Math.max(.05,n.d),f=Math.max(.005,n.h);switch(n.type){case"sofa":Om(u,d,h,f,Math.max(1,Math.round((d-.4)/.62)));break;case"armchair":Om(u,d,h,f,1);break;case"sofa_l":Um(u,d,h,f,!1);break;case"sofa_u":Um(u,d,h,f,!0);break;case"bed":Kw(u,d,h,f);break;case"chair":Yw(u,d,h,f);break;case"table":qw(u,d,h,f);break;case"desk":Zw(u,d,h,f);break;case"nightstand":Zi(u,d,h,f,1,f*.72,!0),u.seg(-d/2,f*.5,h/2-.02,d/2,f*.5,h/2-.02,Qe);break;case"wardrobe":Zi(u,d,h,f,Math.max(2,Math.round(d/.5)),f*.5);break;case"shelf":$w(u,d,h,f);break;case"kitchen":Jw(u,d,h,f);break;case"fridge":jw(u,d,h,f);break;case"fridge_smart":Qw(u,d,h,f);break;case"stove":t1(u,d,h,f);break;case"sink":n1(u,d,h,f);break;case"bathtub":i1(u,d,h,f);break;case"shower":r1(u,d,h,f);break;case"wc":o1(u,d,h,f);break;case"washbasin":s1(u,d,h,f);break;case"tv_board":a1(u,d,h,f);break;case"plant":l1(u,d,h,f);break;case"rug":c1(u,d,h);return;case"stairs":u1(u,d,h,f);break;case"stairs_u":h1(u,d,h,f);break;case"stairwell":return;case"sideboard":d1(u,d,h,f);break;case"dresser":f1(u,d,h,f);break;case"tall_cabinet":Zi(u,d,h,f,1,f*.5);break;case"coat_rack":p1(u,d,h,f);break;case"bench":Vm(u,d,h,f,!1);break;case"corner_bench":Vm(u,d,h,f,!0);break;case"bar_stool":m1(u,d,h,f);break;case"office_chair":g1(u,d,h,f);break;case"stool":_1(u,d,h,f);break;case"kitchen_wall":b1(u,d,h,f);return;case"kitchen_tall":v1(u,d,h,f);break;case"island":x1(u,d,h,f);break;case"worktop":u.box(-d/2,d/2,Math.max(0,f-.04),f,-h/2,h/2,D.whiteTop,D.whiteTop,pe);return;case"dishwasher":y1(u,d,h,f);break;case"washer":Gm(u,d,h,f,!1);break;case"dryer":Gm(u,d,h,f,!0);break;case"bunk_bed":w1(u,d,h,f);break;case"table_round":M1(u,d,h,f);break;case"coffee_table":S1(u,d,h,f);break;case"tv_wall":T1(u,d,h,f);return;case"parking":{let _=[[-d/2,-h/2],[d/2,-h/2],[d/2,h/2],[-d/2,h/2]];for(let m=0;m<4;m++)u.seg(_[m][0],.012,_[m][1],_[(m+1)%4][0],.012,_[(m+1)%4][1],Qe);u.seg(-d*.15,.012,h/2-.45,0,.012,h/2-.2,pe),u.seg(0,.012,h/2-.2,d*.15,.012,h/2-.45,pe);return}case"robot_vacuum":u.box(-d*.45,d*.45,0,f,-h/2,-h/2+h*.3,D.white,D.whiteTop,pe),u.box(-d*.2,d*.2,f*.5,f*.62,-h/2+h*.3,-h/2+h*.31,D.accent);return;case"radiator":A1(u,d,h,f);return;case"ac_unit":E1(u,d,h,f);return;case"inverter":R1(u,d,h,f,n.variant??null);return;case"grid_point":F1(u,d,h,f);break;case"wallbox":D1(u,d,h,f);return;case"pool_pump":P1(u,d,h,f);break;case"pool_filter":k1(u,d,h,f,n.variant??null);break;case"pool_heat_pump":C1(u,d,h,f);break;case"pool_dosing":I1(u,d,h,f);break;case"pool_valve":L1(u,d,h,f);return;case"meter":N1(u,d,h,f);return;case"home_battery":if(z1(u,d,h,f,n.variant??null),n.variant==="wall")return;break;default:{let p=_r(n);if(p){if(yc(u,p,d,h,f,r,null),r>.05)return}else u.box(-d/2,d/2,0,f,-h/2,h/2,D.body,D.bodyTop,pe)}}U1(t,c,d,h,n.type==="plant"?.35:.5)}function Hh(i,e){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let t=D;return(e?t[`${i}Top`]:void 0)??t[i]??null}function yc(i,e,t,n,r,o,s,a=null,l=!1){let c=!!a,u=new Set([...e.motions??[],...e.spots??[]].flatMap(d=>d.parts));for(let d of e.parts){if(!l&&(d.visible===!1||d.status||d.id&&u.has(d.id))||a&&!a(d))continue;let h=c?{...d,glow:!0,w:d.w+.006/t,d:d.d+.006/n,y:Math.max(0,d.y-.002/r),h:d.h+.004/r}:d,f=h.glow&&s!==null,p=f?s:Hh(h.color,!1)??D.body,_=f?s:Hh(h.top,!1)??Hh(h.color,!0)??We(p,1.25).getHex(),m=o+h.y*r,g=o+Math.min(r,(h.y+h.h)*r),w=h.edges==="glow"?ri:h.edges==="faint"?Qe:h.edges?pe:null,y=h.rot?i.rotated(h.x*t,h.z*n,h.rot):i;if(!y.shape(h,t,n,r,o,p))if(h.shape==="cyl"&&(h.axis==="x"||h.axis==="z"))y.lyingCyl(h.axis,h.x*t,h.z*n,m,g,h.axis==="x"?h.w*t:h.d*n,h.axis==="x"?h.d*n:h.w*t,p,_,14,w);else if(h.shape==="cyl")y.cyl(h.x*t,h.z*n,Math.min(h.w*t,h.d*n)/2,m,g,p,_,14,w);else if(h.shape==="loft"){let b=h.tx??h.x,x=h.tz??h.z,M=h.tw??h.w,A=h.td??h.d;y.loft([(h.x-h.w/2)*t,(h.x+h.w/2)*t,(h.z-h.d/2)*n,(h.z+h.d/2)*n],[(b-M/2)*t,(b+M/2)*t,(x-A/2)*n,(x+A/2)*n],m,g,p,_,w)}else y.box((h.x-h.w/2)*t,(h.x+h.w/2)*t,m,g,(h.z-h.d/2)*n,(h.z+h.d/2)*n,p,_,w)}}function Ym(i,e){let t=new ot;return yc(new Mr(t,new zt,(n,r)=>[n,r]),i,e.w,e.d,e.h,0,null,null,!0),t.geometry()}function qm(i,e,t,n,r,o){let s=o*ft,a=Math.cos(s),l=Math.sin(s),c=(p,_)=>[t+p*a-_*l,r+p*l+_*a],u=new Mr(i,new zt,c),d=1713728,h=2373216,f=725279;if(e==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,d,h,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,f,d),u.cyl(0,0,.012,n-.075,n-.06,D.accent,D.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,d,h),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,d,h),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,d,h),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,f,D.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Ns(i,e,t,n,r,o=s=>!!s.glow){let s=i.p.length,a=t.rotation*ft,l=Math.cos(a),c=Math.sin(a),u=t.mirror?-1:1,d=(h,f)=>[t.x+u*h*l-f*c,t.z+u*h*c+f*l];yc(new Mr(i,new zt,d),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r,o),Pn(i.p,s,t,n+t.h/2)}function wc(i,e,t,n,r){let o=i.p.length,s=t.rotation*ft,a=Math.cos(s),l=Math.sin(s),c=t.mirror?-1:1,u=(d,h)=>[t.x+c*d*a-h*l,t.z+c*d*l+h*a];yc(new Mr(i,new zt,u),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r),Pn(i.p,o,t,n+t.h/2)}var Sc=Math.PI/180,G1=1.13,H1=1.72,qh=.025,Tr=.07,Zm=.25;function $m(i,e){let t=[];for(let n of i.floors){if(e&&n.id!==e)continue;let{walls:r}=Xi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,u=-s/l,d=an(n,o),h=d.top-d.bottom,f=o.sources.find(m=>m.room_id===o.roomLeft)?.edge??null,p={floorId:n.id,room:o.roomLeft,edge:f,free:!!o.free},_=(m,g,w,y)=>t.push({key:m,section:null,side:"top",flat:!1,o:g,eu:w,es:[0,1,0],n:y,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[y[0],y[2]],wall:p});_(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation+d.bottom,o.a[1]+u*o.right],[s/l,0,a/l],[c,0,u]),o.free&&_(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation+d.bottom,o.b[1]-u*o.left],[-s/l,0,-a/l],[-c,0,-u])}}return t}var Zh="ground";function $h(i){let e=[...i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??i.floors[0]??null}function Jm(i,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],o=$h(i),s=n[0]*e.u+r[0]*e.v,a=n[2]*e.u+r[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:Kp(o,s,a)):e.base??0;return{key:Zh,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function W1(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>Wt(n)-Wt(t))[0]??null}function Ji(i){let e=i.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>{let y=pc(i,w,w.overhang??e.overhang),b=w.points?.length?ks(w,w.shape==="parapet"?0:Math.max(0,Math.min(y.a,y.b,y.u0,y.u1))):void 0;return X1(w,y).map(x=>b?{...x,footprint:b}:x)});let t=W1(i);if(!t)return[];let n=t.rooms.flatMap(w=>w.points.map(y=>y[0])),r=t.rooms.flatMap(w=>w.points.map(y=>y[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,u=Wt(t);if(e.type==="flat")return[jm("main",null,s,l,a,c,u+Zm)];let d=a-s>=c-l,h=e.ridge==="short"?!d:d,f=(h?c-l:a-s)/2,p=f*Math.tan(e.pitch*Sc),_=(w,y,b)=>h?[w,u+b,(l+c)/2+y]:[(s+a)/2+y,u+b,w],[m,g]=h?[s,a]:[l,c];return[-1,1].map(w=>Mc(`main:${w<0?"a":"b"}`,null,w<0?"a":"b",_(m,w*f,0),_(g,w*f,0),_(m,0,p),e.pitch,()=>[0,g-m]))}function X1(i,e){let t=Wn(i),n=Mn(i),r=(_,m,g)=>{let[w,y]=t.at(_,m);return[w,g,y]},o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let _=t.at(a,-o),m=t.at(l,t.w+s);return[jm(i.id,i.id,Math.min(_[0],m[0]),Math.min(_[1],m[1]),Math.max(_[0],m[0]),Math.max(_[1],m[1]),i.eave_a+Zm)]}if(i.shape==="pent")return[Mc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,t.w+s,n.y(t.w+s)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",d=i.shape==="pyramid"?(t.u1-t.u0)/2:u?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,h=u?t.u0+d-a:0,f=u?l-(t.u1-d):0,p=[];if(n.vr>.3){let _=Math.hypot(n.vr+o,n.rh-n.y(-o));p.push(Mc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,m=>[h*(m/_),c-f*(m/_)]))}if(t.w-n.vr>.3){let _=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));p.push(Mc(`${i.id}:b`,i.id,"b",r(l,t.w+s,n.y(t.w+s)),r(a,t.w+s,n.y(t.w+s)),r(l,n.vr,n.rh),i.pitch_b,m=>[f*(m/_),c-h*(m/_)]))}if(u){let _=n.y(-o),m=n.y(t.w+s),g=[[`${i.id}:c`,"c",r(a,t.w+s,m),r(a,-o,_),r(t.u0+d,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-o,_),r(l,t.w+s,m),r(t.u1-d,n.vr,n.rh)]];for(let[w,y,b,x,M]of g){let A=K1(w,i.id,y,b,x,M);A&&p.push(A)}}return p}function K1(i,e,t,n,r,o){let s=zs(Ar(r,n));if(s<.3)return null;let a=$i(Ar(r,n)),l=Ar(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],d=zs(u);if(d<.3)return null;let h=$i(u),f=$i(t0(a,h));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let p=$i([-h[0],0,-h[2]]),_=Math.atan2(h[1],Math.hypot(h[0],h[2]))/Sc;return{key:i,section:e,side:t,flat:!1,o:n,eu:a,es:h,n:f,lu:s,ls:d,pitch:_,span:g=>{let w=Math.min(1,Math.max(0,g/d));return[c*w,s-(s-c)*w]},facing:[p[0],p[2]]}}function Mc(i,e,t,n,r,o,s,a){let l=$i(Ar(r,n)),c=$i(Ar(o,n)),u=$i(t0(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let d=$i([-c[0],0,-c[2]]);return{key:i,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:u,lu:zs(Ar(r,n)),ls:zs(Ar(o,n)),pitch:s,span:a,facing:[d[0],d[2]]}}function jm(i,e,t,n,r,o,s){let a=r-t>=o-n,l=a?r-t:o-n,c=a?o-n:r-t;return{key:`${i}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Qm(i){let e=i.module_w||G1,t=i.module_h||H1;return i.portrait===!1?[t,e]:[e,t]}function Y1(i){return i.layout?.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function e0(i,e){return i.flat?Math.min(45,Math.max(0,e.tilt??15))*Sc:i.wall?Math.min(90,Math.max(0,e.tilt??0))*Sc:0}function q1(i,e){let[,t]=Qm(e),n=e0(i,e);return i.wall?t*Math.cos(n)+qh:i.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+qh}function Bs(i,e,t=!1){let[n,r]=Qm(e),o=[],s=e0(i,e),a=r*Math.cos(s),l=q1(i,e),c=Y1(e),u=Math.max(1,...c),d=new Set(e.skip??[]),h=!!i.wall&&n>i.lu+1e-6,f=(_,m,g)=>[i.o[0]+i.eu[0]*_+i.es[0]*m+i.n[0]*g,i.o[1]+i.eu[1]*_+i.es[1]*m+i.n[1]*g,i.o[2]+i.eu[2]*_+i.es[2]*m+i.n[2]*g],p=(_,m)=>{if(i.unbounded)return!0;if(m<-1e-6||m>i.ls+1e-6)return!1;let[g,w]=i.span(m);return _>=g-1e-6&&_<=w+1e-6};return c.forEach((_,m)=>{let g=e.align==="right"?u-_:e.align==="center"?(u-_)/2:0;for(let w=0;w<_;w++){let y=`${m}:${w}`,b=d.has(y);if(b&&!t)continue;let x=e.u+(w+g)*(n+qh),M=e.v+m*l,A=x+n,v=M+(i.flat||i.wall?a:r);if(h){if(!(p((x+A)/2,M)&&p((x+A)/2,v)))continue}else if(![[x,M],[A,M],[A,v],[x,v]].every(([T,I])=>p(T,I)))continue;if(i.footprint&&!hm(i.footprint,[[x,M],[A,M],[A,v],[x,v]].map(([T,I])=>{let F=f(T,I,0);return[F[0],F[2]]})))continue;if(i.wall&&s>.001){let T=Tr+r*Math.sin(s),[I,F]=e.flip?[T,Tr]:[Tr,T],z=[f(x,M,I),f(A,M,I),f(A,v,F),f(x,v,F)],B=e.flip?M:v,N=[x+.05,A-.05].map(O=>[f(O,B,0),f(O,B,T)]);o.push({corners:z,posts:N,cell:y,skipped:b});continue}if(!i.flat){o.push({corners:[f(x,M,Tr),f(A,M,Tr),f(A,v,Tr),f(x,v,Tr)],posts:[],cell:y,skipped:b});continue}let S=.15,E=S+r*Math.sin(s),[P,C]=e.flip?[v,M]:[M,v],R=[f(x,P,S),f(A,P,S),f(A,C,E),f(x,C,E)];o.push({corners:R,posts:[x+.05,A-.05].flatMap(T=>[[f(T,P,0),f(T,P,S)],[f(T,C,0),f(T,C,E)]]),cell:y,skipped:b})}}),o}function Ar(i,e){return[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}function zs(i){return Math.hypot(i[0],i[1],i[2])}function $i(i){let e=zs(i)||1;return[i[0]/e,i[1]/e,i[2]/e]}function t0(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}var Z1=.78,$1=1.18;function J1(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||Z1,module_h:i.h||$1}}function Tc(i,e){let t=Bs(i,J1(e))[0];if(!t)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function Ac(i,e,t){let n=e?Tc(e,t):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,o=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>o)continue;let l=a.rooms.find(c=>Ge([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}function Ec(i,e,t,n){let r=e.map((c,u)=>c-i[u]),o=t.map((c,u)=>c-i[u]),s=[r[1]*o[2]-r[2]*o[1],r[2]*o[0]-r[0]*o[2],r[0]*o[1]-r[1]*o[0]],a=Math.hypot(...s)||1,l=s.reduce((c,u,d)=>c+u*n[d],0)<0?-1:1;return s.map(c=>l*c/a)}function Os(i,e,t){return i.setAttribute("solarNormal",new Te(e,3)),i.setAttribute("solarPoint",new Te(t,3)),i}function Rc(i){let e=i.onBeforeCompile.bind(i),t=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(n,r)=>{e(n,r),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 solarNormal;
attribute vec3 solarPoint;`).replace("#include <project_vertex>",`#include <project_vertex>
      vec3 solarWorldPoint = (modelMatrix * vec4(solarPoint, 1.0)).xyz;
      vec3 solarWorldNormal = mat3(modelMatrix) * solarNormal;
      if (dot(solarWorldNormal, cameraPosition - solarWorldPoint) <= 0.0) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)},i.customProgramCacheKey=()=>`${t()}-solar-facing`,i}function n0(i,e,t,n,r){let o=n==="bottom"?0:n==="middle"?.5:1,s=n==="bottom"?-1:1,a=(h,f,p)=>{let _=f.map((w,y)=>w+(p[y]-w)*o),m=h.map((w,y)=>w-_[y]),g=m.reduce((w,y,b)=>w+y*t[b],0);return _.map((w,y)=>w+m[y]*Math.cos(r)-e[y]*g*Math.sin(r)*s)},[l,c,u,d]=i;return[a(l,l,d),a(c,c,u),a(u,c,u),a(d,l,d)]}var Us=1712952,Vs=2239816,s0=1318193,Er=We(3662079,.9),Rr=We(5995775,.45),Jt=.14,j1=9427199,Jh=13226982,jh=14936565,Q1={black:{glass:new Q(329483),edge:We(9082544,.32),cells:We(2766160,.22)},blue:{glass:new Q(1386842),edge:We(10467583,.55),cells:We(4025599,.35)}},eM=We(13226982,.5),tM=We(13226982,.85),nM=We(16757575,.95),i0=new Q(2845583),r0=new Q(3818072),o0=new Q(4871791);function Pc(i,e,t,n,r){if(e.length<3)return;let[o,s,a]=e,l=(s[1]-o[1])*(a[2]-o[2])-(s[2]-o[2])*(a[1]-o[1]),c=(s[0]-o[0])*(a[1]-o[1])-(s[1]-o[1])*(a[0]-o[0]),d=l*(o[0]-n[0])+c*(o[2]-n[1])<0?[...e].reverse():e;for(let f=1;f+1<d.length;f++)i.tri(d[0],d[f],d[f+1],t);let h=Math.min(...d.map(f=>f[1]));for(let f=0;f<d.length;f++){let p=d[f],_=d[(f+1)%d.length],m=Math.abs(p[1]-h)<1e-6&&Math.abs(_[1]-h)<1e-6,g=Math.hypot(p[0]-_[0],p[2]-_[2])<1e-6;r.seg(p,_,m?_c:g?oi:ri)}}function iM(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>Wt(n)-Wt(t))[0]??null}function a0(i,e=new Map){let t=i.settings.roof,n=t?.type==="custom"?null:sM(i),r=t?.type==="custom"?aM(i,t.sections??[],t.overhang):n?[n]:[];return oM(i,r),rM(i,r,e),r}function rM(i,e,t){let n=i.settings.roof?.windows??[];if(!n.length||!e.length)return;let r=new Map(Ji(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?Tc(s,o):null;if(!s||!a)continue;let l=s.section?e.find(C=>C.sections?.includes(s.section)):e[0];if(!l)continue;let c=l.floor.elevation+l.base,u=C=>[C[0],C[1]-c,C[2]],[d,h,f,p]=a.map(u),_=t.get(o.id)??{open:0,tilt:0,cover:0},g=!!o.float&&Ac(i,s,o)?.floor.id===l.floor.id?l.win??={solid:new ot,lines:new zt}:l.winRoof??={solid:new ot,lines:new zt},w=(C,R)=>[C[0]+s.n[0]*R,C[1]+s.n[1]*R,C[2]+s.n[2]*R],y=(C,R,T)=>[C[0]+(R[0]-C[0])*T,C[1]+(R[1]-C[1])*T,C[2]+(R[2]-C[2])*T],b=_.open>.02||_.tilt>.02?nM:tM,x=[d,h,f,p].map(C=>w(C,.06)),M=[d,h,f,p].map(C=>w(C,-.02));for(let C=0;C<4;C++){g.lines.seg(x[C],x[(C+1)%4],b);let R=(C+1)%4;g.solid.tri(M[C],M[R],x[R],o0),g.solid.tri(M[C],x[R],x[C],o0)}let A=(_.open>.02?30*Math.min(1,_.open):_.tilt>.5?12:0)*ft,[v,S,E,P]=n0([d,h,f,p].map(C=>w(C,.065)),s.n,s.es,o.hinge,A);g.solid.tri(v,S,E,i0),g.solid.tri(v,E,P,i0);for(let[C,R]of[[v,S],[S,E],[E,P],[P,v]])g.lines.seg(C,R,b);if(_.cover>.02){let C=Math.min(1,_.cover),R=w(y(P,v,C),.01),T=w(y(E,S,C),.01),I=w(P,.01),F=w(E,.01);g.solid.tri(R,T,F,r0),g.solid.tri(R,F,I,r0)}}}function oM(i,e){let t=i.settings.roof?.solar??[];if(!t.length||!e.length)return;let n=new Map(Ji(i).map(r=>[r.key,r]));for(let r of t){let o=n.get(r.face);if(!o)continue;let s=o.section?e.find(a=>a.sections?.includes(o.section)):e[0];if(s){let a=s.solar??={solid:new ot,lines:new zt,facing:{normals:[],points:[],lineNormals:[],linePoints:[]}};Qh(a.solid,a.lines,o,r,s.floor.elevation+s.base,a.facing)}}}function Qh(i,e,t,n,r,o){let s=u=>[u[0],u[1]-r,u[2]],a=Q1[n.look==="blue"?"blue":"black"],l=n.portrait===!1?10:6,c=n.portrait===!1?6:10;for(let u of Bs(t,n)){let d=i.p.length,h=e.p.length,[f,p,_,m]=u.corners.map(s);i.tri(f,p,_,a.glass),i.tri(f,_,m,a.glass),i.tri(f,_,p,a.glass),i.tri(f,m,_,a.glass);let g=(b,x=.004)=>[b[0]+t.n[0]*x,b[1]+t.n[1]*x,b[2]+t.n[2]*x],w=(b,x,M)=>[b[0]+(x[0]-b[0])*M,b[1]+(x[1]-b[1])*M,b[2]+(x[2]-b[2])*M],y=[f,p,_,m].map(b=>g(b));for(let b=0;b<4;b++)e.seg(y[b],y[(b+1)%4],a.edge);for(let b=1;b<l;b++)e.seg(g(w(f,p,b/l)),g(w(m,_,b/l)),a.cells);for(let b=1;b<c;b++)e.seg(g(w(f,m,b/c)),g(w(p,_,b/c)),a.cells);for(let[b,x]of u.posts)e.seg(s(b),s(x),eM);if(o){let b=Ec(f,p,_,t.n);for(let x=d;x<i.p.length;x+=3)o.normals.push(...b),o.points.push(...f);for(let x=h;x<e.p.length;x+=3)o.lineNormals.push(...b),o.linePoints.push(...f)}}}function sM(i){let e=i.settings.roof,t=iM(i);if(!t||!e||e.type==="none"||e.type==="custom")return null;let n=t.rooms.flatMap(E=>E.points.map(P=>P[0])),r=t.rooms.flatMap(E=>E.points.map(P=>P[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,u=new ot,d=new zt;if(e.type==="flat"){St(u,[[s,l],[a,l],[a,c],[s,c]],0,.25,Us,Vs,{bottom:!0});let E=.252;for(let[P,C]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])d.seg([P[0],E,P[1]],[C[0],E,C[1]],Er),d.seg([P[0],0,P[1]],[C[0],0,C[1]],Rr);return{floor:t,base:Wt(t)-t.elevation,solid:u,lines:d,glass:new ot}}let h=a-s>=c-l,f=e.ridge==="short"?!h:h,p=(f?c-l:a-s)/2,_=p*Math.tan(e.pitch*ft),m=(E,P,C)=>f?[E,C,(l+c)/2+P]:[(s+a)/2+P,C,E],[g,w]=f?[s,a]:[l,c],y=new Q(Vs),b=new Q(Us),x=(E,P,C,R,T)=>{u.tri(E,P,C,T),u.tri(E,C,R,T)};for(let E of[-1,1]){x(m(g,E*p,0),m(w,E*p,0),m(w,0,_),m(g,0,_),y),x(m(g,E*p,-Jt),m(g,0,_-Jt),m(w,0,_-Jt),m(w,E*p,-Jt),b),x(m(g,E*p,-Jt),m(w,E*p,-Jt),m(w,E*p,0),m(g,E*p,0),b);for(let P of[g,w])x(m(P,E*p,-Jt),m(P,E*p,0),m(P,0,_),m(P,0,_-Jt),b);d.seg(m(g,E*p,0),m(w,E*p,0),Rr);for(let P of[g,w])d.seg(m(P,E*p,0),m(P,0,_),Rr)}let M=e.overhang,A=new Q(s0),v=p-M,S=v*Math.tan(e.pitch*ft);for(let E of[g+M,w-M])Pc(u,[m(E,-v,-Jt),m(E,v,-Jt),m(E,0,S-Jt)],A,[(s+a)/2,(l+c)/2],d);return d.seg(m(g,0,_+.004),m(w,0,_+.004),Er),{floor:t,base:Wt(t)-t.elevation,solid:u,lines:d,glass:new ot}}function aM(i,e,t){let n=i.floors.filter(s=>s.rooms.length>0).sort((s,a)=>s.elevation-a.elevation);if(!n.length)return[];let r=new Map,o=new Map(Ji(i).map(s=>[s.key,s]));for(let s of e){if(Math.abs(s.x1-s.x0)<.1||Math.abs(s.z1-s.z0)<.1)continue;let a=bm(i,s)??n[0],l=s.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new ot,lines:new zt,glass:new ot,sections:[],lift:!s.open}),c.sections.push(s.id);let u=fc(e,s),d=Wt(a)>s.base+.05&&!s.dormer&&!u,h=e.filter(_=>_!==s&&fc(e,_)===s).flatMap(_=>gm(s,_));for(let _ of i.settings.roof.windows??[]){let m=o.get(_.face),g=m&&m.section===s.id?Tc(m,_):null;if(!g)continue;let w=g.map(y=>mi(s,y[0],y[2]));h.push({u0:Math.min(...w.map(y=>y[0])),u1:Math.max(...w.map(y=>y[0])),v0:Math.min(...w.map(y=>y[1])),v1:Math.max(...w.map(y=>y[1]))})}let f=u?Lh(u,s):s,p=null;if(u){let _=Wn(f),m=qi(u,{u0:0,u1:0,a:0,b:0}),g=w=>{let[y,b]=_.at(w,_.w/2),[x,M]=mi(u,y,b);return bo(m,x,M)??Mn(u).y(M)};p=g(_.u0)<=g(_.u1)?0:1}lM(c.solid,c.lines,f,pc(i,f,f.overhang??t),a.elevation,c.glass,d,h,p)}return[...r.values()].sort((s,a)=>+(s.lift===!1)-+(a.lift===!1))}function lM(i,e,t,n,r,o=i,s=!1,a=[],l=null){let c=Wn(t),u=Mn(t),d=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,h=Math.max(0,d.a),f=Math.max(0,d.b),p=c.w,_=c.u0-Math.max(0,d.u0),m=c.u1+Math.max(0,d.u1),g=(T,I,F)=>{let[z,B]=c.at(T,I);return[z,F-r,B]},w=new Q(Vs),y=new Q(Us),b=new Q(s0),x=(T,I)=>{for(let F=1;F+1<T.length;F++)i.tri(T[0],T[F],T[F+1],I)},M=[],A=[],v=[],S=null;if(t.shape==="flat"||t.shape==="parapet"){let T=t.eave_a,I=t.shape==="parapet",F=t.points&&t.points.length>=3?ks(t,I?0:Math.max(0,Math.min(d.a,d.b,d.u0,d.u1))):I?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,p),c.at(c.u0,p)]:[c.at(_,-h),c.at(m,-h),c.at(m,p+f),c.at(_,p+f)];Yi(F)<0&&(F=[...F].reverse()),St(i,F,T-r,T-r+.25,Us,Vs,{bottom:!0});for(let z=0;z<F.length;z++){let B=F[z],N=F[(z+1)%F.length];e.seg([B[0],T-r+.252,B[1]],[N[0],T-r+.252,N[1]],Er),e.seg([B[0],T-r,B[1]],[N[0],T-r,N[1]],Rr)}if(I){let z=G=>Yi(G)>=0?G:[...G].reverse(),B=z(F),N=Ih(B,-.2),O=B.length;for(let G=0;G<O;G++){let $=z([B[G],B[(G+1)%O],N[(G+1)%O],N[G]]);St(i,$,T-r+.25,T-r+.65,Us,Vs),e.seg([B[G][0],T-r+.652,B[G][1]],[B[(G+1)%O][0],T-r+.652,B[(G+1)%O][1]],Er),e.seg([N[G][0],T-r+.652,N[G][1]],[N[(G+1)%O][0],T-r+.652,N[(G+1)%O][1]],Er)}}}else{let T=qi(t,d);M=T.faces;for(let I of a)M=M.flatMap(F=>_m(F,I));A=T.rim,v=T.ridges,S=T.gable}let E=!!t.open,P=new Q(j1);for(let T of M){if(E){for(let I=1;I+1<T.length;I++)o.tri(g(T[0][0],T[0][1],T[0][2]),g(T[I][0],T[I][1],T[I][2]),g(T[I+1][0],T[I+1][1],T[I+1][2]),P);continue}x(T.map(([I,F,z])=>g(I,F,z)),w),x(T.map(([I,F,z])=>g(I,F,z-Jt)),y)}for(let T=0;T<A.length;T++){let[I,F,z]=A[T],[B,N,O]=A[(T+1)%A.length];E||x([g(I,F,z),g(B,N,O),g(B,N,O-Jt),g(I,F,z-Jt)],y),e.seg(g(I,F,z),g(B,N,O),E?Er:Rr)}if(E){t.points?.length?cM(i,e,t,r):uM(i,e,c,u,d,g,r);return}for(let[[T,I,F],[z,B,N]]of v)e.seg(g(T,I,F+.004),g(z,B,N+.004),Er);let C=t.base;if(s)return;let R=c.at((c.u0+c.u1)/2,p/2);if(t.points?.length){let T=qi(t,{u0:0,u1:0,a:0,b:0}).rim;T.forEach((I,F)=>{let z=T[(F+1)%T.length],B=I,N=t.shape==="flat"||t.shape==="parapet"?0:Jt,O=I[2]-N,G=z[2]-N;if(Math.max(O,G)<=C+.001)return;let $=Z=>[I[0]+(z[0]-I[0])*Z,I[1]+(z[1]-I[1])*Z,C+N];O<C&&(B=$((C-O)/(G-O))),G<C&&(z=$((C-O)/(G-O))),x([g(B[0],B[1],C),g(z[0],z[1],C),g(z[0],z[1],z[2]-N),g(B[0],B[1],B[2]-N)],b)});return}if(S){let T=hM(S,C-Jt),I=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(T.length>=3)for(let F of I)Pc(i,T.map(([z,B])=>g(F,z,B)),b,R,e)}if(t.shape!=="flat"&&t.shape!=="parapet")for(let T of[0,p]){let I=u.y(T)-Jt;I>C+.02&&Pc(i,[g(c.u0,T,C),g(c.u1,T,C),g(c.u1,T,I),g(c.u0,T,I)],b,R,e)}else if(t.eave_a>C+.02)for(let[T,I,F,z]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,p],[c.u1,p,c.u0,p],[c.u0,p,c.u0,0]])Pc(i,[g(T,I,C),g(F,z,C),g(F,z,t.eave_a),g(T,I,t.eave_a)],b,R,e)}function cM(i,e,t,n){let s=Wn(t),a=qi(t,{u0:0,u1:0,a:0,b:0});a.rim.forEach((l,c)=>{let u=a.rim[(c+1)%a.rim.length],d=s.at(l[0],l[1]),h=s.at(u[0],u[1]),f=h[0]-d[0],p=h[1]-d[1],_=Math.hypot(f,p);if(_<1e-6)return;let m=-p/_*.12/2,g=f/_*.12/2,w=[[d[0]+m,d[1]+g],[h[0]+m,h[1]+g],[h[0]-m,h[1]-g],[d[0]-m,d[1]-g]];Yi(w)<0&&w.reverse();let y=(M,A)=>l[2]+(u[2]-l[2])*((M-d[0])*f+(A-d[1])*p)/(_*_)-n-.03,b=i.p.length;St(i,w,0,.18,Jh,jh,{bottom:!0});for(let M=b;M<i.p.length;M+=3)i.p[M+1]+=y(i.p[M],i.p[M+2])-.18;e.seg([d[0],l[2]-n-.18,d[1]],[h[0],u[2]-n-.18,h[1]],Rr);let x=Math.max(1,Math.ceil(_/3.5));for(let M=0;M<x;M++){let A=M/x,v=d[0]+f*A,S=d[1]+p*A,E=y(v,S)-.18;E<=0||St(i,[[v-.12/2,S-.12/2],[v+.12/2,S-.12/2],[v+.12/2,S+.12/2],[v-.12/2,S+.12/2]],0,E,Jh,jh,{bottom:!0})}})}function uM(i,e,t,n,r,o,s){let a=t.w,l=.12,c=.16,u=r.a>0,d=r.b>0,h=r.u0>0,f=r.u1>0,p=(g,w,y,b,x,M)=>{let A=[t.at(g,y),t.at(w,y),t.at(w,b),t.at(g,b)],v=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);St(i,v<0?[...A].reverse():A,x-s,M-s,Jh,jh,{bottom:!0})},_=s;for(let[g,w]of[[0,u],[a,d]]){if(!w)continue;let y=n.y(g)-.03,b=g===0?0:a-l;p(t.u0,t.u1,b,b+l,y-c,y),e.seg(o(t.u0,g,y-c),o(t.u1,g,y-c),Rr)}for(let[g,w]of[[t.u0,h],[t.u1-l,f]])if(w)for(let y=0;y<6;y++){let b=a*y/6,x=a*(y+1)/6,M=Math.min(n.y(b),n.y(x))-.03;p(g,g+l,b,x,M-c,M)}let m=[];for(let[g,w]of[[0,u],[a-l,d]]){if(!w)continue;let y=t.u1-t.u0-l,b=Math.max(1,Math.ceil(y/3.5));for(let x=0;x<=b;x++){let M=t.u0+y*x/b;x===0&&!h||x===b&&!f||m.push([M,g])}}if(!u&&!d)for(let g of[t.u0,t.u1-l])(g===t.u0&&h||g!==t.u0&&f)&&m.push([g,a/2-l/2]);for(let[g,w]of m){let y=n.y(w+l/2)-.03-c;p(g,g+l,w,w+l,_,y)}}function hM(i,e){let t=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=e&&t.push([s,a]);let l=i[o+1];if(l&&(a-e)*(l[1]-e)<0){let c=(e-a)/(l[1]-a);t.push([s+(l[0]-s)*c,e])}}if(t.length<2)return[];let n=t[0],r=t[t.length-1];return r[1]>e&&t.push([r[0],e]),n[1]>e&&t.unshift([n[0],e]),t}var Gs={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},kc={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},ji=.2,dM=.01,Hs=8,Cc=.42,ed=.42;function h0(i,e,t,n=[],r=[],o){let{walls:s,open:a}=Xi(i.rooms,{exterior:e,interior:t},i.walls??[]),l=i.openings.map(R=>Cs(i,R,s)).filter(R=>R!==null),c=(R,T,I)=>{let F=o?o(R,T):null;return F===null?I:Math.min(I,F)},u=(R,T,I,F,z)=>{if(!o)return z;let B=z,N=Math.max(2,Math.ceil((F-I)/.25)+1);for(let O=0;O<N;O++){let G=I+(F-I)*O/(N-1);B=Math.min(B,c(R[0]+T[0]*G,R[1]+T[1]*G,z))}return B},d=new ot(!0,!0),h=[],f=new zt,p=[];for(let R of i.rooms){if(R.points.length<3)continue;let T=Ws(R.points),I=pt(i,R),F=mc(i,R,l);p.push(...F);let z=kc[R.floor_material]??kc.wood,B=new Q(z.color),N=n.flatMap(ue=>{if(Dm(ue,T))return[Vh(ue,.003)];if(!ym(ue))return[];let ne=xo(T,ue);return ne.length>=3&&Math.abs(vr(ne))>.01?[Vh(Ws(ne),.003)]:[]});p.push(...N);let O=[...T,...N.flat()],G=d.count;for(let[ue,ne,ae]of mn(T,N)){let H=O[ue],W=O[ne],se=O[ae],he=[[H,W,se]];for(let ie of F)he=he.flatMap(de=>vo(de,ie));for(let ie of he)for(let de=1;de+1<ie.length;de++){let[Oe,Ne,Ie]=[ie[0],ie[de],ie[de+1]];d.tri([Oe[0],I,Oe[1]],[Ie[0],I,Ie[1]],[Ne[0],I,Ne[1]],B,B,B,[Oe[0],Oe[1],Ie[0],Ie[1],Ne[0],Ne[1]],Ze,z.tile)}}h.push({roomId:R.id,start:G,end:d.count,color:z.color});let $=new Q(Gs.slab),Z=ue=>{for(let ne=0;ne<ue.length;ne++)for(let[ae,H]of Fh(ue[ne],ue[(ne+1)%ue.length],F))d.tri([ae[0],I-ji,ae[1]],[ae[0],I,ae[1]],[H[0],I,H[1]],$),d.tri([ae[0],I-ji,ae[1]],[H[0],I,H[1]],[H[0],I-ji,H[1]],$)};Z(T);for(let ue of N){Z([...Ws(ue)].reverse());for(let ne=0;ne<ue.length;ne++){let ae=ue[ne],H=ue[(ne+1)%ue.length];f.seg([ae[0],I+.006,ae[1]],[H[0],I+.006,H[1]],ri),f.seg([ae[0],I-ji,ae[1]],[H[0],I-ji,H[1]],oi)}}}let _=new Map,m=[],g=new Map;for(let R of s){let T="interior",I=null;if(R.exterior){let z=R.b[0]-R.a[0],B=R.b[1]-R.a[1],N=Math.hypot(z,B)||1,O=[B/N,-z/N],G=(Math.round(Math.atan2(O[1],O[0])/(2*Math.PI)*Hs)%Hs+Hs)%Hs;T=`s${G}`;let $=G/Hs*2*Math.PI;I=[Math.cos($),Math.sin($)]}let F=_.get(T);F===void 0&&(F=m.length,_.set(T,F),m.push(I)),g.set(R,F)}let w=new Map,y=[];for(let R of i.openings){let T=xr(R,i.rooms,i.walls??[]);if(!T)continue;let I=yr(s,R,T);if(!I)continue;let{wall:F,s:z}=I,B=Lc([F.b[0]-F.a[0],F.b[1]-F.a[1]]),N=Math.hypot(F.b[0]-F.a[0],F.b[1]-F.a[1]),O=Math.min(R.width,N),G=Math.max(0,Math.min(N-O,z-O/2)),$=T.room.points,Z=F.free?B[0]*($[1][0]-$[0][0])+B[1]*($[1][1]-$[0][1])>0:F.roomLeft===R.room_id,ue=[-B[1],B[0]],ne=Z?ue:[-ue[0],-ue[1]],ae=l.find(Ue=>Ue.opening.id===R.id),H=ae?.threshold??pt(i,T.room),W=ae?.room??T.room,se=W.wall_offset!=null||W.floor_offset!=null?pt(i,W):H,he=Math.min(ae?.ceiling??1/0,an(i,F).top);if(ae?.other&&he-H<.12)continue;let ie=Math.min(u(F.a,B,G,G+O,he)-.02,se+R.sill+R.height),de=Math.min((ae?.stair?xm(ae):H)+R.sill,ie-.1),Oe=[ne[1],-ne[0]],Ne=B[0]*Oe[0]+B[1]*Oe[1]>0,Ie={opening:R,bucket:g.get(F),start:[F.a[0]+B[0]*G,F.a[1]+B[1]*G],axis:B,width:O,toRoom:ne,faceRoom:Z?F.left:F.right,faceOut:Z?F.right:F.left,sill:de,top:ie,hingeAtStart:R.hinge==="left"===Ne,exterior:F.exterior};y.push(Ie);let Le=w.get(F);Le||w.set(F,Le=[]),Le.push({s0:G,s1:G+O,sill:de,top:ie,info:Ie})}let b=Math.min(i.cut_height,Wt(i)-i.elevation),x=new ot;for(let R of s){let T=g.get(R),I=Lc([R.b[0]-R.a[0],R.b[1]-R.a[1]]),F=(w.get(R)??[]).sort((ne,ae)=>ne.s0-ae.s0),z=an(i,R),B=z.top,N=[],O=[-1/0,...new Set(F.flatMap(ne=>[ne.s0,ne.s1])).values(),1/0].sort((ne,ae)=>ne-ae);for(let ne=0;ne+1<O.length;ne++){let ae=O[ne],H=O[ne+1];if(H-ae<1e-6)continue;let W=Number.isFinite(ae)&&Number.isFinite(H)?(ae+H)/2:Number.isFinite(ae)?ae+1:H-1,se=F.filter(de=>de.s0<W&&de.s1>W).map(de=>[de.sill,de.top]).sort((de,Oe)=>de[0]-Oe[0]),he=[],ie=z.bottom-ji;for(let[de,Oe]of se)de>ie+1e-4&&he.push([ie,de<1e-4?-dM:de]),ie=Math.max(ie,Oe);B>ie+1e-4&&he.push([ie,B]),N.push({t0:ae,t1:H,ranges:he})}let G=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),$=o&&u(R.a,I,0,G,B)<B-.001,Z=$?N.flatMap(ne=>{let ae=Math.max(ne.t0,-.5),H=Math.min(ne.t1,G+.5),W=Math.max(1,Math.ceil((H-ae)/.3));return Array.from({length:W},(se,he)=>({t0:he===0?ne.t0:ae+(H-ae)*he/W,t1:he===W-1?ne.t1:ae+(H-ae)*(he+1)/W,ranges:ne.ranges,inner0:he>0,inner1:he<W-1}))}):N.map(ne=>({...ne,inner0:!1,inner1:!1})),ue=ne=>(ne[0]-R.a[0])*I[0]+(ne[1]-R.a[1])*I[1];for(let ne of Z){let ae=pM(R.footprint,R.a,I,ne.t0,ne.t1);if(ae.length<3)continue;let H=(he,ie)=>Math.abs(ue(he)-ie)<1e-4,W=(he,ie)=>ne.inner0&&H(he,ne.t0)&&H(ie,ne.t0)||ne.inner1&&H(he,ne.t1)&&H(ie,ne.t1),se=$?Math.min(...ae.map(([he,ie])=>c(he,ie,B))):B;for(let[he,ie]of ne.ranges){let de=Math.min(ie,$?Math.max(...ae.map(([Le,Ue])=>c(Le,Ue,B))):ie);if(de-he<1e-4||se-he<.01)continue;let Oe=he>.01,Ne=$&&ie>se,Ie=(Le,Ue)=>Math.min(ie,c(Le,Ue,B));if(he<b-1e-6){let Le=de>b+1e-6?wm+T:wr+T,Ue=Ne&&se<b?(at,wt)=>Math.min(b,Ie(at,wt)):Math.min(de,b);St(x,ae,he,Ue,Gs.wall,Gs.wallTop,{aoFrom:0,bottom:Oe,fold:wr+T,topFold:Le,skipSide:W})}de>b+1e-6&&se>b+1e-6&&St(x,ae,Math.max(he,b),Ne?Ie:de,Gs.wall,Gs.wallTop,{aoFrom:0,fold:T,bottom:Oe&&he>=b,skipSide:W})}}}let M=s.flatMap(R=>R.footprint),A=gM(s,M),v=new zt;v.p.push(...f.p),v.c.push(...f.c),v.f.push(...f.f);for(let R of l){let T=R.stair;if(!T)continue;let I=(B,N)=>[R.start[0]+R.axis[0]*B+T.toward[0]*N,R.start[1]+R.axis[1]*B+T.toward[1]*N],F=kc[T.room.floor_material]?.color??kc.wood.color;for(let B=0;B<T.count;B++){let N=T.face+T.depth*B/T.count,O=T.face+T.depth*(B+1)/T.count,G=T.recess?R.low+(R.high-R.low)*(B+1)/T.count:R.high-(R.high-R.low)*B/T.count,$=Ws([I(0,N),I(R.width,N),I(R.width,O),I(0,O)]);St(x,$,R.low-.02,G,F,F,{bottom:!0});let Z=I(0,N),ue=I(R.width,N);v.seg([Z[0],G+.003,Z[1]],[ue[0],G+.003,ue[1]],ri)}let z=T.offset===0?-R.wall.left-R.wall.right:T.back;if(T.face>z+1e-6){let B=Ws([I(0,z),I(R.width,z),I(R.width,T.face),I(0,T.face)]);St(x,B,R.threshold-.02,R.threshold,F,F,{bottom:!0})}}let S=(R,T)=>(w.get(R)??[]).filter(T);for(let R of A.edges){let T=g.get(R.wall),I=an(i,R.wall).bottom;for(let[z,B]of Ic(R,S(R.wall,N=>N.sill<=I+.005)))v.seg([z[0],I+.004,z[1]],[B[0],I+.004,B[1]],_c);for(let[z,B]of Ic(R,S(R.wall,N=>N.sill<b&&N.top>b)))v.seg([z[0],b,z[1]],[B[0],b,B[1]],Dh,bc+T);let F=an(i,R.wall).top;for(let[z,B]of Ic(R,S(R.wall,N=>N.top>=F-.021))){if(!o){v.seg([z[0],F,z[1]],[B[0],F,B[1]],ri,F<=b+1e-6?wr+T:T);continue}let N=Math.max(1,Math.ceil(Math.hypot(B[0]-z[0],B[1]-z[1])/.3));for(let O=0;O<N;O++){let G=[z[0]+(B[0]-z[0])*O/N,z[1]+(B[1]-z[1])*O/N],$=[z[0]+(B[0]-z[0])*(O+1)/N,z[1]+(B[1]-z[1])*(O+1)/N],Z=c(G[0],G[1],F),ue=c($[0],$[1],F);v.seg([G[0],Z,G[1]],[$[0],ue,$[1]],ri,Math.max(Z,ue)<=b+1e-6?wr+T:T)}}}for(let R of A.corners){let T=c(R.p[0],R.p[1],an(i,R.wall).top);v.segSplit([R.p[0],an(i,R.wall).bottom+.004,R.p[1]],[R.p[0],T,R.p[1]],oi,Math.min(b,T),g.get(R.wall))}for(let R of w.values())for(let T of R)fM(v,T,b);let E=_M(A.edges,i,w);Lm(E,i,s,y,[...n,...p],s.map(R=>g.get(R)??0));let P=new ot;Rm(x,v,i,P);for(let R of r)Qh(x,v,R.face,R.field,i.elevation);let C=[];for(let R of i.furniture){if(Qp(R.type))continue;let T=x.count,I=v.p.length/6,F=Ct(i,R),z=pn(i,R.x,R.z),B=E.p.length;xc(x,v,E,R,F-z);for(let N=T*9+1;N<x.p.length;N+=3)x.p[N]+=z;for(let N=I*6+1;N<v.p.length;N+=3)v.p[N]+=z;for(let N=B+1;N<E.p.length;N+=3)E.p[N]+=z;(F+R.h>b+.05||R.rotation_x||R.rotation_z)&&(vc(x,T,b,Is),Mm(v,I,b,Is)),C.push({id:R.id,start:T,end:x.count})}return{floor:d.geometry(),roomTris:h,holes:p,walls:x.geometry(),water:P.geometry(),lines:v.geometry(),shadow:E.geometry(),buckets:m,openings:y,walls2d:s,openRooms:a,wallBuckets:s.map(R=>g.get(R)),furnitureTris:C,roofUnder:o}}function fM(i,e,t){let{info:n}=e,r=n.bucket,o=(l,c,u)=>[n.start[0]+n.axis[0]*(l-e.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-e.s0)+n.toRoom[1]*c],s=l=>l>t+1e-6?r:Ze,a=e.sill<0?e.sill:Math.max(e.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[e.s0,e.s1])i.segSplit(o(c,l,a),o(c,l,e.top),oi,t,r);i.seg(o(e.s0,l,e.top),o(e.s1,l,e.top),oi,s(e.top)),Math.abs(e.sill)>.01&&i.seg(o(e.s0,l,e.sill),o(e.s1,l,e.sill),oi,s(e.sill))}for(let l of[e.s0,e.s1])i.seg(o(l,n.faceRoom,e.top),o(l,-n.faceOut,e.top),oi,s(e.top)),Math.abs(e.sill)>.01&&i.seg(o(l,n.faceRoom,e.sill),o(l,-n.faceOut,e.sill),oi,s(e.sill)),e.sill<t&&e.top>t&&i.seg(o(l,n.faceRoom,t),o(l,-n.faceOut,t),Dh,bc+r)}function pM(i,e,t,n,r){let o=a=>(a[0]-e[0])*t[0]+(a[1]-e[1])*t[1],s=i;return Number.isFinite(n)&&(s=l0(s,a=>o(a)-n)),Number.isFinite(r)&&(s=l0(s,a=>r-o(a))),s}function l0(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=e(r),a=e(o);if(s>=0&&t.push(r),s>=0!=a>=0){let l=s/(s-a);t.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return t}var c0=i=>Math.round(i*1e3),Xs=i=>`${c0(i[0])},${c0(i[1])}`,u0=(i,e)=>{let t=Xs(i),n=Xs(e);return t<n?`${t}|${n}`:`${n}|${t}`};function mM(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let d of e){let h=((d[0]-r[0])*s+(d[1]-r[1])*a)/l;if(h<=1e-6||h>=1-1e-6)continue;Math.abs((d[0]-r[0])*a-(d[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(h)}c.sort((d,h)=>d-h);let u=r;for(let d of c){let h=[r[0]+s*d,r[1]+a*d];Xs(h)!==Xs(u)&&t.push([u,h]),u=h}t.push([u,o])}return t}function gM(i,e){let t=i.map(l=>({wall:l,edges:mM(l.footprint,e)})),n=new Map;for(let{edges:l}of t)for(let[c,u]of l){let d=u0(c,u);n.set(d,(n.get(d)??0)+1)}let r=[],o=new Map,s=(l,c,u)=>{let d=Xs(l),h=o.get(d);h||o.set(d,h={p:l,wall:c,d:[]}),h.d.push(u)};for(let{wall:l,edges:c}of t)for(let[u,d]of c){if(n.get(u0(u,d))!==1)continue;let h=Math.hypot(d[0]-u[0],d[1]-u[1]);if(h<1e-4)continue;r.push({a:u,b:d,wall:l});let f=[(d[0]-u[0])/h,(d[1]-u[1])/h];s(u,l,f),s(d,l,f)}let a=[];for(let{p:l,wall:c,d:u}of o.values())u.some(d=>u.some(h=>Math.abs(d[0]*h[1]-d[1]*h[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function Ic(i,e){if(!e.length)return[[i.a,i.b]];let t=Lc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Lc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(t[0]*n[0]+t[1]*n[1])<.99)return[[i.a,i.b]];let r=d=>(d[0]-i.wall.a[0])*t[0]+(d[1]-i.wall.a[1])*t[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let d of e)c=c.flatMap(([h,f])=>{if(d.s1<=h||d.s0>=f)return[[h,f]];let p=[];return d.s0>h&&p.push([h,d.s0]),d.s1<f&&p.push([d.s1,f]),p});let u=d=>{let h=(d-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*h,i.a[1]+(i.b[1]-i.a[1])*h]};return c.filter(([d,h])=>h-d>1e-4).map(([d,h])=>o<=s?[u(d),u(h)]:[u(h),u(d)])}function _M(i,e,t){let n=new ot,r=new Q(ed,ed,ed),o=new Q(1,1,1);for(let s of i){let a=s.b[0]-s.a[0],l=s.b[1]-s.a[1],c=Math.hypot(a,l)||1,u=[(s.a[0]+s.b[0])/2+l/c*.05,(s.a[1]+s.b[1])/2-a/c*.05],d=e.rooms.find(p=>Ge(u,p.points)),h=pt(e,d),f=h+.002;for(let[p,_]of Ic(s,(t.get(s.wall)??[]).filter(m=>m.sill<=h+.005))){let m=_[0]-p[0],g=_[1]-p[1],w=Math.hypot(m,g);if(w<.05)continue;let y=[g/w,-m/w],b=[(p[0]+_[0])/2+y[0]*.05,(p[1]+_[1])/2+y[1]*.05];if(!e.rooms.some(A=>A.points.length>=3&&Ge(b,A.points)))continue;let x=[p[0]+y[0]*Cc,p[1]+y[1]*Cc],M=[_[0]+y[0]*Cc,_[1]+y[1]*Cc];n.tri([p[0],f,p[1]],[x[0],f,x[1]],[M[0],f,M[1]],r,o,o),n.tri([p[0],f,p[1]],[M[0],f,M[1]],[_[0],f,_[1]],r,o,r)}}return n}function d0(i,e){let t=e.furniture.filter(o=>o.type==="stairwell").map(Hi),n=i.filter(o=>o.elevation<e.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return Uh(t);let r=n.furniture.filter(o=>(Jp.has(o.type)||_t(o.type)?.hole)&&n.elevation+Ct(n,o)+o.h>=e.elevation+pn(e,o.x,o.z)-.3).map(Hi);return Uh([...t,...r])}function Lc(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function Ws(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}var bM=500,f0=.12,p0=1.35,vM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Fc=class{view={target:new U,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(e,t,n){this.el=e,this.camera=t,this.events=n;let r=(o,s,a)=>{e.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[e,t]of this.listeners)this.el.removeEventListener(e,t)}get active(){return this.pointers.size>0||this.flight!==null}update(e){let t=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,d=Math.min(1,(e-c)/u),h=vM(d);this.view.target.lerpVectors(a.target,l.target,h),this.view.radius=a.radius+(l.radius-a.radius)*h,this.view.theta=a.theta+(l.theta-a.theta)*h,this.view.phi=a.phi+(l.phi-a.phi)*h,d>=1&&(this.flight=null),t=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=td(this.view.phi+this.velocity.phi,f0,p0),this.velocity.theta*=.9,this.velocity.phi*=.9,t=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),t}flyTo(e,t=700){let n={...this.view,target:this.view.target.clone()},r=e.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let o={target:(e.target??n.target).clone(),radius:e.radius??n.radius,theta:r,phi:e.phi??n.phi};this.velocity={theta:0,phi:0},t<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:n,to:o,start:performance.now(),duration:t},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(e){let t=this.el.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}onDown(e){if(this.el.setPointerCapture(e.pointerId),this.pointers.size===0&&e.button===0&&this.events.grab?.(...this.local(e))){this.grabbing=!0,this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:e.clientX,y:e.clientY,time:performance.now(),moved:!1};let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},bM)}else this.down=null,this.pinch=this.pinchState()}onMove(e){let t=this.pointers.get(e.pointerId);if(!t)return;if(this.grabbing){this.events.drag?.(...this.local(e));return}let n=e.clientX-t.x,r=e.clientY-t.y;if(this.swiping){this.events.swipeMove?.(e.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&t.button===0&&!e.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,e.clientX-this.down.x,e.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(e.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){t.x=e.clientX,t.y=e.clientY;return}let o=t.type==="mouse";if(o&&!this.leftDragTurns&&t.button===0){t.x=e.clientX,t.y=e.clientY;return}if((t.button===1||t.button===2||e.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=td(this.view.phi+c,f0,p0),this.velocity={theta:l,phi:c}}t.x=e.clientX,t.y=e.clientY}else{t.x=e.clientX,t.y=e.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(e){if(this.pointers.has(e.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(e.pointerId),this.events.drop?.();return}if(this.pointers.delete(e.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&e.type==="pointerup"&&performance.now()-this.down.time<400){let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(e){e.preventDefault(),this.flight=null,this.zoom(Math.exp(e.deltaY*(e.deltaMode===1?.05:.0015))),this.events.change()}zoom(e){this.view.radius=td(this.view.radius*e,this.minRadius,this.maxRadius)}pan(e,t){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new U(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new U(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-e*r),this.view.target.addScaledVector(s,t*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t.x-n.x,t.y-n.y),mid:[(t.x+n.x)/2,(t.y+n.y)/2]}}};function td(i,e,t){return Math.min(t,Math.max(e,i))}function Qi(i,e,t="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=e.standing,n.uniforms.uGlass=e.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${t}`,i}function Dc(i,e,t,n){let r=Math.min(1,Math.max(0,(i/e-.62)/.3)),o=t?1:.94*r;return{opacity:o,lift:t?0:(1-(n??o))*2.2}}function m0(i,e){return i.onBeforeCompile=t=>{t.uniforms.uRoofDirection=e,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform vec3 uRoofDirection;
varying float vRoofGlass;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 roofNormal = mat3(modelMatrix) * normal;
      if (roofNormal.y < 0.0) roofNormal = -roofNormal;
      float roofHorizontal = length(roofNormal.xz);
      vRoofGlass = roofHorizontal < 0.000001 ? smoothstep(-0.15, 0.15, uRoofDirection.y) : smoothstep(0.1, 0.4, dot(roofNormal.xz / roofHorizontal, uRoofDirection.xz));`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vRoofGlass;`).replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075), vRoofGlass);
      diffuseColor.a *= mix(1.0, 0.2, vRoofGlass);`)},i.customProgramCacheKey=()=>"fp3d-roof-glass",i}function g0(i,e,t,n,r,o,s=[],a){if(n.elevation<=2||r>=.97)return;let l=n.elevation*Math.PI/180,c=(n.azimuth+(e.settings.north??0))*Math.PI/180,u=[Math.sin(c),-Math.cos(c)],d=[u[0]*Math.cos(l),Math.sin(l),u[1]*Math.cos(l)],h=Math.min(1,n.elevation/12)*(1-.8*r),f=1/Math.tan(l),p=new Map(Ji(e).map(_=>[_.key,_]));for(let _ of e.settings.roof.windows??[]){let m=p.get(_.face);if(!m)continue;let g=Ac(e,m,_);if(g?.floor.id!==t.id)continue;let w=g.corners,y=m.n.reduce((B,N,O)=>B+N*d[O],0);if(y<.05)continue;let b=Math.min(1,Math.max(0,o.get(_.id)?.cover??0));if(b>=.99)continue;let x=[w.reduce((B,N)=>B+N[0],0)/4,w.reduce((B,N)=>B+N[2],0)/4],M=t.rooms.find(B=>Ge(x,B.points));if(!M)continue;let A=t.rooms.indexOf(M),v=t.rooms.filter((B,N)=>B.id===M.id||a&&a[N]===a[A]),S=pt(t,M),E=(B,N,O)=>B.map((G,$)=>G+(N[$]-G)*O),P=(B,N)=>{let O=E(E(w[0],w[1],B),E(w[3],w[2],B),N*(1-b)),G=Math.min(7,(O[1]-t.elevation-S)*f);return[O[0]-u[0]*G,S+.02,O[2]-u[1]*G]},C=(B,N)=>Math.hypot(...B.map((O,G)=>O-N[G])),R=Math.max(1,Math.ceil(C(P(0,0),P(1,0))/.3)),T=Math.max(1,Math.ceil(C(P(0,0),P(0,1))/.25)),I=.14*h*Math.min(1,y*1.5),F=new Q(I,.82*I,.55*I),z=F.clone().multiplyScalar(.45);for(let B=0;B<T;B++)for(let N=0;N<R;N++){let O=N/R,G=(N+1)/R,$=B/T,Z=(B+1)/T,ue=P((O+G)/2,($+Z)/2),ne=[ue[0],ue[2]];if(!v.some(de=>Ge(ne,de.points))||s.some(de=>Ge(ne,de)))continue;let ae=P(O,$),H=P(G,$),W=P(G,Z),se=P(O,Z),he=F.clone().lerp(z,$),ie=F.clone().lerp(z,Z);i.tri(ae,H,W,he,he,ie),i.tri(ae,W,se,he,ie,ie)}}}function _0(i,e){return Math.hypot(e[0]-i[0],e[1]-i[1],e[2]-i[2])}function b0(i,e,t=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=_0(o,s),c=_0(s,a),u=Math.min(e,l*.45,c*.45),d=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],h=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(u<.005||d[0]*h[0]+d[1]*h[1]+d[2]*h[2]<-.999){n.push(s);continue}let f=[s[0]+d[0]*u,s[1]+d[1]*u,s[2]+d[2]*u],p=[s[0]+h[0]*u,s[1]+h[1]*u,s[2]+h[2]*u];for(let _=0;_<=t;_++){let m=_/t,g=(1-m)*(1-m),w=2*(1-m)*m,y=m*m;n.push([g*f[0]+w*s[0]+y*p[0],g*f[1]+w*s[1]+y*p[1],g*f[2]+w*s[2]+y*p[2]])}}return n.push(i[i.length-1]),n}var v0=new Q(7568261),x0=new Q(4869974),xM=new Q(3116287),y0=new Q(3948872),nd=Pr([.35,.85,.4]),w0=10;function Pr(i){let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]}function Ks(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function M0(i){let e=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],t=Pr(Ks(i,e));return[t,Pr(Ks(i,t))]}function gi(i,e){let t=.5+.5*Math.max(0,e[0]*nd[0]+e[1]*nd[1]+e[2]*nd[2]);return i.clone().multiplyScalar(t)}function Mo(i,e,t,n,r,o=!1){let s=Pr([t[0]-e[0],t[1]-e[1],t[2]-e[2]]),[a,l]=M0(s),c=(u,d)=>{let h=d/w0*Math.PI*2,f=[a[0]*Math.cos(h)+l[0]*Math.sin(h),a[1]*Math.cos(h)+l[1]*Math.sin(h),a[2]*Math.cos(h)+l[2]*Math.sin(h)];return{p:[u[0]+f[0]*n,u[1]+f[1]*n,u[2]+f[2]*n],n:f}};for(let u=0;u<w0;u++){let d=c(e,u),h=c(e,u+1),f=c(t,u),p=c(t,u+1);i.tri(d.p,p.p,f.p,gi(r,d.n),gi(r,p.n),gi(r,f.n)),i.tri(d.p,h.p,p.p,gi(r,d.n),gi(r,h.n),gi(r,p.n)),o&&(i.tri([...e],h.p,d.p,gi(r,[-s[0],-s[1],-s[2]])),i.tri([...t],f.p,p.p,gi(r,s)))}}function yM(i,e,t,n,r,o,s,a){let l=Pr(Ks(t,n)),c=(d,h,f)=>[e[0]+t[0]*d*r+n[0]*h*o+l[0]*f*s,e[1]+t[1]*d*r+n[1]*h*o+l[1]*f*s,e[2]+t[2]*d*r+n[2]*h*o+l[2]*f*s],u=[];for(let[d,h]of[[t,.5],[[-t[0],-t[1],-t[2]],-.5]])u.push([d,[c(h,-.5,-.5),c(h,.5,-.5),c(h,.5,.5),c(h,-.5,.5)]]);for(let[d,h]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])u.push([d,[c(-.5,h,-.5),c(.5,h,-.5),c(.5,h,.5),c(-.5,h,.5)]]);for(let[d,h]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])u.push([d,[c(-.5,-.5,h),c(.5,-.5,h),c(.5,.5,h),c(-.5,.5,h)]]);for(let[d,h]of u){let f=gi(a,d);i.tri(h[0],h[1],h[2],f),i.tri(h[0],h[2],h[3],f),i.tri(h[0],h[2],h[1],f),i.tri(h[0],h[3],h[2],f)}}function S0(i,e){if(e.points.length<2)return;let t=e.radius,n=b0(e.points,t*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?v0.clone().multiplyScalar(.55):v0;Mo(i,o,s,t,a,r===1||r===n.length-1)}for(let r of e.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);Mo(i,s,a,t*1.22,x0,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);Mo(i,s,a,t*1.08,e.water?new Q(...e.water).multiplyScalar(.9):new Q(10475240),!0);for(let l of o(.08)){let[c,u]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Mo(i,c,u,t*1.3,x0,!0)}}else{let[s,a]=o(.055);Mo(i,s,a,t*1.4,y0,!0);let[l]=M0(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],u=[r.p[0]+c[0]*t*2,r.p[1]+c[1]*t*2,r.p[2]+c[2]*t*2];Mo(i,[r.p[0]+c[0]*t*1.3,r.p[1]+c[1]*t*1.3,r.p[2]+c[2]*t*1.3],u,t*.35,y0,!0);let d=r.open===!1?Pr(Ks(r.dir,c)):r.dir,h=Pr(Ks(d,c)),f=[u[0]+d[0]*.045,u[1]+d[1]*.045,u[2]+d[2]*.045];yM(i,f,d,h,.1,.028,.012,xM)}}}var id=1.62,wM=.2,rd=class{solids=[];doors=[];rooms;walls;building;floor;constructor(e,t){this.building=e,this.floor=t;let n=e.settings;this.rooms=t.rooms.filter(s=>s.points.length>=3);let r=Xi(this.rooms,{exterior:n.wall_exterior,interior:n.wall_interior},t.walls??[]);this.walls=r.walls;let o=new Map;for(let s of t.openings){if(!(s.type!=="window"||s.sill<.1))continue;let l=xr(s,t.rooms,t.walls??[]);if(!l)continue;let c=yr(this.walls,s,l);if(!c)continue;let u=o.get(c.wall)??[];u.push([c.s-s.width/2+.05,c.s+s.width/2-.05]),o.set(c.wall,u);let d=c.wall,h=d.b[0]-d.a[0],f=d.b[1]-d.a[1],p=Math.hypot(h,f)||1,_=h/p,m=f/p,g=[d.a[0]+_*c.s,d.a[1]+m*c.s],w=d.left+.45,y=d.right+.45;this.doors.push({centre:g,p:[[g[0]-m*w,g[1]+_*w],[g[0]+m*y,g[1]-_*y]]})}for(let s of this.walls){if(s.height!==void 0&&s.height<.9)continue;let a=s.b[0]-s.a[0],l=s.b[1]-s.a[1],c=Math.hypot(a,l);c<1e-6||this.solids.push({a:s.a,u:[a/c,l/c],len:c,left:s.left,right:s.right,gaps:o.get(s)??[]})}}blocked(e,t=wM){for(let n of this.solids){let r=e[0]-n.a[0],o=e[1]-n.a[1],s=r*n.u[0]+o*n.u[1];if(s<-t||s>n.len+t)continue;let a=-r*n.u[1]+o*n.u[0];if(!(a>n.left+t||a<-n.right-t)&&!n.gaps.some(([l,c])=>s>l+t*.6&&s<c-t*.6))return!0}return!1}clear(e,t){let n=Math.hypot(t[0]-e[0],t[1]-e[1]),r=Math.max(1,Math.ceil(n/.08));for(let o=1;o<=r;o++){let s=o/r;if(this.blocked([e[0]+(t[0]-e[0])*s,e[1]+(t[1]-e[1])*s]))return!1}return!0}roomAt(e){return this.rooms.find(t=>Ge(e,t.points))??null}path(e,t){if(this.clear(e,t))return[t];let n=[e,t,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d))],r=n.length,o=new Array(r).fill(1/0),s=new Array(r).fill(-1),a=new Array(r).fill(!1);o[0]=0;let l=new Map,c=(d,h)=>{let f=d<h?`${d}:${h}`:`${h}:${d}`,p=l.get(f);return p===void 0&&(p=this.clear(n[d],n[h]),l.set(f,p)),p};for(;;){let d=-1;for(let h=0;h<r;h++)!a[h]&&o[h]<1/0&&(d<0||o[h]<o[d])&&(d=h);if(d<0)return null;if(d===1)break;a[d]=!0;for(let h=0;h<r;h++){if(a[h]||h===d)continue;let f=Math.hypot(n[d][0]-n[h][0],n[d][1]-n[h][1]);o[d]+f>=o[h]||c(d,h)&&(o[h]=o[d]+f,s[h]=d)}}let u=[];for(let d=1;d>0;d=s[d])u.unshift(n[d]);return u}start(e=!1){for(let r of e?this.floor.openings:[]){if(r.type!=="door")continue;let o=xr(r,this.floor.rooms,this.floor.walls??[]);if(!o)continue;let s=yr(this.walls,r,o);if(!s||!s.wall.exterior)continue;let a=s.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c)||1,d=l/u,h=c/u,f=[a.a[0]+d*s.s,a.a[1]+h*s.s],p=[f[0]-h*(a.left+.9),f[1]+d*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(d,-h))}}let t=[...this.rooms].sort((r,o)=>T0(o)-T0(r))[0],n=t?this.freeNear(Gi(t.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(e,t,n=9){let r=Math.cos(t),o=Math.sin(t);for(let s=.2;s<n;s+=.15)if(this.blocked([e[0]+r*s,e[1]+o*s],.05))return s;return n}openYaw(e,t=null){let n=t??0,r=-1;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,a=this.sight(e,s);if(t!==null){let l=Math.abs(s-t)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=s)}return n}freeNear(e){if(!this.blocked(e))return e;for(let t=.2;t<2;t+=.2)for(let n=0;n<6.28;n+=.5){let r=[e[0]+Math.cos(n)*t,e[1]+Math.sin(n)*t];if(!this.blocked(r))return r}return e}};function T0(i){let e=0,t=i.points;for(let n=0;n<t.length;n++){let[r,o]=t[n],[s,a]=t[(n+1)%t.length];e+=r*a-s*o}return Math.abs(e/2)}var od=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(e,t,n,r){this.v=e,this.map=t,this.surface=n,this.onRoom=r.onRoom;let o=r.start??(()=>{let s=t.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...o},this.origUpdate=e.controls.update,this.origWalls=e.updateWalls,this.origFov=e.camera.fov,this.origNear=e.camera.near,e.controls.update=()=>this.apply(),e.updateWalls=()=>{for(let s of e.floors)s.mask.standing.value=65535,s.mask.glass.value=0},e.camera.fov=72,e.camera.near=.05,e.camera.updateProjectionMatrix(),e.labels.style.visibility="hidden",this.bind(),this.reportRoom(),e.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[e,t,n,r]of this.listeners)e.removeEventListener(t,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(e,t){this.map=e,this.path=[];let n=t??(()=>{let r=e.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let e=this.v.floorMap.get(this.map.floor.id);return(e?e.floor.elevation+e.y:this.map.floor.elevation)+pn(this.map.floor,this.state.x,this.state.z)+id}apply(){let{x:e,z:t,yaw:n,pitch:r}=this.state,o=this.floorY(),s=Math.cos(r);return this.v.camera.position.set(e,o,t),this.v.camera.lookAt(e+Math.cos(n)*s,o+Math.sin(r),t+Math.sin(n)*s),this.v.controls.view.target.set(e,o-id,t),!1}goTo(e){let t=this.map.path([this.state.x,this.state.z],this.map.freeNear(e));return t?(this.path=t,this.kick(),!0):!1}goToRoom(e){return this.goTo(Gi(e.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(e=>this.tick(e))),this.v.invalidate()}tick(e){this.raf=0;let t=Math.min(.05,(e-this.last)/1e3);this.last=e;let n=!1,r=this.state,o=0,s=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(o+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(o-=1),this.keys.has("a")&&(s-=1),this.keys.has("d")&&(s+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(o+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*t,n=!0),o||s){this.path=[],this.turnTo=null;let l=1.5*t,c=(Math.cos(r.yaw)*o-Math.sin(r.yaw)*s)*l,u=(Math.sin(r.yaw)*o+Math.cos(r.yaw)*s)*l;this.move(c,u),n=!0}else if(this.path.length){let[l,c]=this.path[0],u=l-r.x,d=c-r.z,h=Math.hypot(u,d),f=1.4*t;h<=f?(r.x=l,r.z=c,this.path.shift()):(r.x+=u/h*f,r.z+=d/h*f,this.turnTo=Math.atan2(d,u)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,t*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(e,t){let n=this.state,r=[n.x+e,n.z+t];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+e,n.z])?this.map.blocked([n.x,n.z+t])||(n.z+=t):n.x+=e}reportRoom(){let e=this.map.roomAt([this.state.x,this.state.z]),t=e?.id??null;t!==this.roomId&&(this.roomId=t,this.onRoom(e))}setStick(e){this.stick=e,this.kick()}floorPoint(e,t){let n=this.surface.getBoundingClientRect(),r=(e-n.left)/n.width*2-1,o=1-(t-n.top)/n.height*2,{yaw:s,pitch:a,x:l,z:c}=this.state,u=this.v.camera.fov*Math.PI/180,d=Math.tan(u/2),h=n.width/n.height,f=Math.cos(a),p=[Math.cos(s)*f,Math.sin(a),Math.sin(s)*f],_=[-Math.sin(s),0,Math.cos(s)],m=[p[1]*_[2]-p[2]*_[1],p[2]*_[0]-p[0]*_[2],p[0]*_[1]-p[1]*_[0]],g=[-m[0],-m[1],-m[2]],w=[p[0]+_[0]*r*d*h+g[0]*o*d,p[1]+_[1]*r*d*h+g[1]*o*d,p[2]+_[2]*r*d*h+g[2]*o*d];if(w[1]>=-.02)return null;let y=id/-w[1];return[l+w[0]*y,c+w[2]*y]}bind(){let e=(s,a,l,c)=>{s.addEventListener(a,l,c),this.listeners.push([s,a,l,!!c?.capture])},t=null;e(this.surface,"pointerdown",s=>{t||(t={x:s.clientX,y:s.clientY,moved:!1,id:s.pointerId},this.surface.setPointerCapture?.(s.pointerId))}),e(this.surface,"pointermove",s=>{if(!t||s.pointerId!==t.id)return;let a=s.clientX-t.x,l=s.clientY-t.y;if(!t.moved&&Math.hypot(a,l)<5)return;t.moved=!0,t.x=s.clientX,t.y=s.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=s=>{if(!t||s.pointerId!==t.id)return;let a=!t.moved;if(t=null,a){let l=this.floorPoint(s.clientX,s.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};e(this.surface,"pointerup",n),e(this.surface,"pointercancel",()=>t=null),e(this.surface,"wheel",s=>{s.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-s.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=s=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s.key.toLowerCase()),o=s=>!!s.composedPath()[0]?.closest?.("input, textarea, select");e(window,"keydown",s=>{!r(s)||o(s)||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),s.stopImmediatePropagation(),this.keys.add(s.key.toLowerCase()),this.kick())},{capture:!0}),e(window,"keyup",s=>{r(s)&&(this.keys.delete(s.key.toLowerCase()),s.stopImmediatePropagation())},{capture:!0}),e(window,"blur",()=>this.keys.clear())}};function Ys(i){return!i||i.state==="unavailable"||i.state==="unknown"}function A0(i,e){if(!i||!e||!/^#[0-9a-f]{6}$/i.test(e))return i;let t=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),n=a=>{let l=Math.max(...a),c=Math.min(...a),u=l-c;return l<=0||u/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/u+6)%6:l===a[1]?(a[2]-a[0])/u+2:(a[0]-a[1])/u+4)*60,u/l]},[r]=n(t),[o]=n(i.color);if(r<0||o<0)return r<0&&o<0?i:null;let s=Math.abs(r-o);return Math.min(s,360-s)<=30?i:null}function sd(i,e){if(!i||i.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:i.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,r=t.rgb_color,o;return r&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?o=[r[0]/255,r[1]/255,r[2]/255]:typeof t.color_temp_kelvin=="number"?o=MM(t.color_temp_kelvin):o=[1,.71,.28],{color:o,level:n}}function MM(i){let e=Math.min(1,Math.max(0,(i-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}var SM=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Nc(i){if(!i||Ys(i))return null;let e=i.attributes.window_state;for(let t of[typeof e=="string"?e:null,i.state]){if(!t)continue;let n=SM.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}var TM=.5;function E0(i,e,t="window"){let n=m=>!!m&&i.states[m]?.state==="on",r=m=>!!m&&!!i.states[m]&&!Ys(i.states[m]),o=m=>m?Nc(i.states[m]):null,s=m=>{let g=o(m);return e.contactInvert&&m&&m!==e.tilt&&m!==e.tilt2&&g!=="tilted"&&g?g==="open"?"closed":"open":g},a=n(e.tilt2)||s(e.tilt2)==="tilted"||s(e.contact2)==="tilted",l=s(e.contact2)==="open"&&!a?1:0,c=n(e.tilt)||s(e.tilt)==="tilted"||s(e.contact)==="tilted",u=c?1:0,d=e.tiltAngle?Number(i.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(d)){let m=(d-(e.tiltOffset??0))*(e.tiltInvert?-1:1);u=Math.min(1,Math.max(0,m/(e.tiltMax||15))),u<.08&&(u=0),c=u>0}let h=s(e.contact)==="open"&&!c?1:0,f=null,p=e.cover?i.states[e.cover]:void 0,_=AM(i,e.position);if(_!==null)f=e.positionInverted?_:1-_;else if(p&&!Ys(p)){let m=p.attributes.current_position;typeof m=="number"?f=1-Math.min(100,Math.max(0,m))/100:f=p.state==="closed"?1:p.state==="opening"||p.state==="closing"?.5:0}else e.cover&&(f=0);if(t==="door"){let m=s(e.contact);return{open:m===null?e.shut?0:TM:m==="closed"?0:1,open2:s(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:f,sensed:m!==null||f!==null}}if(t==="garage"){let m=s(e.contact),g=f!==null||m!==null;return f===null&&(f=m===null||m==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:f,sensed:g}}return{open:h,open2:l,tilt:u,tilt2:a?1:0,cover:f,sensed:r(e.contact)||r(e.tilt)||Number.isFinite(d)}}function AM(i,e){let t=e?i.states[e]:void 0;if(!t||Ys(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function R0(i,e){return!i||e==null||e===1?i:{...i,level:Math.max(.02,Math.min(1.5,i.level*e))}}function zc(i,e,t){let n=t?e.states[t]:void 0,r=t===i.entity&&i.color_entity&&i.color_entity!=="none"?e.states[i.color_entity]:void 0;return n?R0(A0(sd(n,r),i.only_color),i.glow_scale):null}function Kn(i){return!!i&&!["unknown","unavailable",""].includes(i.state.toLowerCase())}function er(i,e){let t=e?Object.prototype.hasOwnProperty.call(i.bindings??{},e)?i.bindings?.[e]:e==="status"?i.status??i.entity:e==="power"?i.power:e==="door_left"?i.door_left:e==="door_right"?i.door_right:null:i.status??i.entity;return t&&t!=="none"?t:null}function ad(i,e){if(!Number.isFinite(i))return null;try{let t=new Intl.DateTimeFormat("en-GB",{timeZone:e??"UTC",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(i),n=Number(t.find(o=>o.type==="hour")?.value),r=Number(t.find(o=>o.type==="minute")?.value);return Number.isFinite(n+r)?{hour:n,minute:r,text:`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`}:null}catch{return null}}function P0(i,e,t,n){if(i.kind==="digital"||i.kind==="analog")return ad(n.time,t.config?.time_zone)?.text??"--:--";let r=er(e,i.binding),o=r?t.states[r]:void 0;if(!Kn(o))return"--:--";let s=o.state,a=String(o.attributes.unit_of_measurement??"");if(i.kind==="duration"){let l={s:1,min:60,h:3600}[i.unit??a],c=s.trim()?Number(s):NaN;if(!l||!Number.isFinite(c)||c<0)return"--:--";let u=Math.round(c*l/60);return`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`}return`${s}${a?` ${a}`:""}`}function ld(i,e,t){let n=er(e,i.status?.binding),r=n?t.states[n]:void 0;if(!i.status||!Kn(r))return{color:i.color,visible:i.visible!==!1};let o=(s,a)=>s&&Object.prototype.hasOwnProperty.call(s,a)?s[a]:void 0;return{color:o(o(e.status_colors,i.id),r.state)??o(i.status.colors,r.state)??i.color,visible:o(i.status.visibility,r.state)??i.visible!==!1}}function cd(i,e,t){let n=e.motion_config?.[i.id],r=i.binding?er(e,i.binding):["fan","washer","dryer"].includes(i.kind)?er(e):null,o=i.tilt_binding?er(e,i.tilt_binding):null,s=i.motor_binding?er(e,i.motor_binding):null,a=i.tilt_angle_binding?er(e,i.tilt_angle_binding):null,l=r?t.states[r]:void 0;if(["fan","washer","dryer"].includes(i.kind)){let w=Kn(l)&&["on","running","active","washing","drying","heating","cooling"].includes(l.state.toLowerCase());return{open:0,tilt:0,known:Kn(l),running:w}}let c=Kn(l)&&Nc(l)!==null,u=o?t.states[o]:void 0,d=Nc(l)===(n?.contact_invert?"open":"closed"),h=d&&Kn(u)&&["on","open","tilted"].includes(u.state),f=E0(t,{contact:r,tilt:o,tiltAngle:a,cover:null,contactInvert:n?.contact_invert,tiltMax:n?.tilt_max,tiltInvert:n?.tilt_invert},i.kind==="window"?"window":"door"),p=s?t.states[s]:void 0,_=p?.attributes.current_position;if(Kn(p)&&typeof _=="number"&&Number.isFinite(_))return{open:Math.min(1,Math.max(0,_/100)),tilt:f.tilt,known:!h&&!(c&&d&&_>1),running:!1};if(Kn(p)&&["open","opening","closed","closing"].includes(p.state))return{open:["open","opening"].includes(p.state)?1:0,tilt:f.tilt,known:!h,running:!1};let m=a?t.states[a]:void 0,g=Kn(u)&&["on","tilted"].includes(u.state)||Kn(m)&&Number.isFinite(Number(m.state))&&f.tilt>0;return{open:f.open,tilt:f.tilt,known:!h&&(!!c||!!g)&&(!o||Kn(u)),running:!1}}function k0(i,e,t,n){if(!n.historical||!n.history)return null;let r=[i.binding,i.tilt_binding,i.motor_binding,i.tilt_angle_binding].filter(c=>!!c).map(c=>er(e,c)).filter(c=>!!c),o=n.history(r,n.time-7*864e5,n.time),s=r.flatMap(c=>(o[c]??[]).filter(u=>u.lu*1e3<=n.time).map(u=>({id:c,row:u}))).sort((c,u)=>c.row.lu-u.row.lu),a={},l=null;for(let{id:c,row:u}of s){a[c]={entity_id:c,state:u.s,attributes:{}};let d=cd(i,e,{...t,states:a});d.known&&(l=d)}return l}var So=class{states=new Map;last=null;begin(e){this.last&&(this.last.historical!==e.historical||e.historical&&(e.time<this.last.time||e.seek!==this.last.seek))&&this.states.clear(),this.last={...e}}resolve(e,t){return t.known?(this.states.set(e,t),t):{...this.states.get(e)??{open:0,tilt:0,running:!1,known:!1},known:!1,running:!1}}};var C0={body:1516088,fabric:1713732,cushion:2373217,wood:1647420,white:1911110,metal:2767456,dark:725279,glass:1849938,plant:1191982,pot:1910336,accent:2854835},I0=i=>i.startsWith("#")?parseInt(i.slice(1),16):C0[i]??C0.body;function EM(i,e){let t=document.createElement("canvas");t.width=512,t.height=256;let n=new Bn(t),r=new He(new On(i,e),new it({map:n,transparent:!0,side:ht,depthWrite:!1}));return r.renderOrder=7,{mesh:r,texture:n}}var Bc=class{group=new kt;items=[];memory=new So;hass=null;moment={time:NaN,historical:!1,playing:!0,seek:0};global=!0;timer;initial=!0;seconds=0;plane=new bn(new U(0,-1,0),0);clipped=!1;material;invalidate;constructor(e,t,n,r){this.material=t.clone(),this.material.onBeforeCompile=t.onBeforeCompile,this.material.customProgramCacheKey=t.customProgramCacheKey,this.invalidate=n,r&&(this.memory=r);for(let o of e.furniture){let s=_r(o);if(!s)continue;let a=new Set([...s.motions??[],...s.spots??[]].flatMap(f=>f.parts)),l=s.parts.filter(f=>f.status||f.id&&a.has(f.id));if(!l.length&&!s.displays?.length)continue;let c=new kt;c.position.set(o.x,Ct(e,o)+o.h/2,o.z),c.rotation.set((o.rotation_x??0)*Math.PI/180,-o.rotation*Math.PI/180,(o.rotation_z??0)*Math.PI/180,"YZX"),c.scale.x=o.mirror?-1:1,this.group.add(c);let u=l.map(f=>{let p=Ym({...s,parts:[f]},o);p.translate(0,-o.h/2,0);let _=new He(p,f.status?new it({vertexColors:!0,side:ht}):this.material);return c.add(_),_.userData.furnitureId=o.id,{part:f,mesh:_,key:"",baseColors:Float32Array.from(p.getAttribute("color").array)}}),d=(s.motions??[]).map(f=>{let p=new kt,[_,m,g]=f.pivot;p.position.set(_*o.w,(m-.5)*o.h,g*o.d),c.add(p);for(let w of u.filter(y=>y.part.id&&f.parts.includes(y.part.id)))w.mesh.position.copy(p.position).negate(),p.add(w.mesh);return{definition:f,group:p,state:{open:0,tilt:0,known:!1,running:!1},shown:0,tilt:0}});for(let f of s.spots??[]){let p=new kt,_=f.pivot??f.position;p.position.set(_[0]*o.w,(_[1]-.5)*o.h,_[2]*o.d);let m=o.spot_config?.[f.id];p.rotation.set((m?.rotation_x??0)*Math.PI/180,-(m?.rotation_y??0)*Math.PI/180,(m?.rotation_z??0)*Math.PI/180,"YZX"),c.add(p);for(let g of u.filter(w=>w.part.id&&f.parts.includes(w.part.id)))g.mesh.position.copy(p.position).negate(),p.add(g.mesh)}let h=(s.displays??[]).map(f=>{let p=EM(f.size[0]*o.w,f.size[1]*o.h),[_,m,g]=f.position;p.mesh.userData.furnitureId=o.id,f.kind==="analog"&&(p.texture.image.height=512),p.mesh.position.set(_*o.w,(m-.5)*o.h,g*o.d),p.mesh.rotation.set(...(f.rotation??[0,0,0]).map(y=>y*Math.PI/180),"YZX");let w=d.find(y=>y.definition.id===f.parent)?.group;return w?(p.mesh.position.sub(w.position),w.add(p.mesh)):c.add(p.mesh),{...p,field:f,key:""}});this.items.push({f:o,group:c,parts:u,motions:d,displays:h})}}meshes(){return this.items.flatMap(e=>[...e.parts.map(t=>t.mesh),...e.displays.map(t=>t.mesh)]).filter(e=>e.visible)}clip(e,t,n){let r=e!==null;this.plane.constant=t+(e??0),this.material.opacity=n;for(let o of this.items.flatMap(s=>[...s.parts.map(a=>a.mesh),...s.displays.map(a=>a.mesh)])){let s=o.material;s.opacity=n,s.transparent=!0,r!==this.clipped&&(s.clippingPlanes=r?[this.plane]:null,s.needsUpdate=!0)}this.clipped=r}update(e,t,n){let r=this.initial||t.historical&&(t.seek!==this.moment.seek||!this.moment.historical);this.initial=!1,this.hass=e,this.moment={...t},this.global=n,this.memory.begin(t);for(let o of this.items){for(let s of o.parts){let a=ld(s.part,o.f,e),l=JSON.stringify(a);if(s.mesh.visible=a.visible,s.key!==l||s.part.glow||o.motions.some(c=>c.definition.parts.includes(s.part.id??"")&&c.state.running)){s.key=l;let c=new Q(I0(a.color)),u=s.mesh.geometry.getAttribute("color");if(a.color===s.part.color)u.array.set(s.baseColors);else for(let d=0;d<u.count;d++)u.setXYZ(d,c.r,c.g,c.b);u.needsUpdate=!0}}for(let s of o.motions){let a=o.f.id+":"+s.definition.id,l=cd(s.definition,o.f,e);if(!l.known&&t.historical&&r){let c=k0(s.definition,o.f,e,t);c&&this.memory.resolve(a,c)}s.state=this.memory.resolve(a,l),(r||!n||o.f.animations===!1)&&(s.shown=s.state.open,s.tilt=s.state.tilt,this.pose(s,o.f))}for(let s of _r(o.f)?.spots??[]){let a=o.f.spot_config?.[s.id]?.entity??(s.binding?o.f.bindings?.[s.binding]:null)??o.f.entity,l=zc(o.f,e,a);if(l)for(let c of o.parts.filter(u=>u.part.glow&&s.parts.includes(u.part.id??""))){let u=c.mesh.geometry.getAttribute("color"),d=new Q(...l.color.map(h=>Math.min(1,h*(.55+.45*l.level))));for(let h=0;h<u.count;h++)u.setXYZ(h,d.r,d.g,d.b);u.needsUpdate=!0}}this.drawDisplays(o)}this.scheduleClock(),this.invalidate()}drawDisplays(e){if(this.hass)for(let t of e.displays){let n=P0(t.field,e.f,this.hass,this.moment);if(n===t.key)continue;t.key=n;let r=t.texture.image,o=r.getContext("2d");if(o.clearRect(0,0,512,r.height),(t.field.kind!=="analog"||t.field.background)&&(o.fillStyle=t.field.background??"#101827",o.fillRect(0,0,512,r.height)),o.fillStyle=t.field.color??"#ffffff",t.field.kind==="analog"){let s=ad(this.moment.time,this.hass.config?.time_zone)??{hour:10,minute:10},a=(l,c,u)=>{o.save(),o.translate(256,256),o.rotate(l),o.strokeStyle=t.field.color??"#ffffff",o.lineWidth=u,o.beginPath(),o.moveTo(0,10),o.lineTo(0,-c),o.stroke(),o.restore()};a((s.hour%12+s.minute/60)*Math.PI/6,144,9),a(s.minute*Math.PI/30,204,5)}else{o.textAlign="center",o.textBaseline="middle",o.font="bold 100px sans-serif";let s=o.measureText(n).width;s>480&&(o.font=`bold ${Math.max(20,Math.floor(100*480/s))}px sans-serif`),o.fillText(n,256,128)}t.texture.needsUpdate=!0}}scheduleClock(){this.timer&&(clearTimeout(this.timer),this.timer=void 0),!(this.moment.historical||!this.items.some(e=>e.displays.some(t=>["analog","digital"].includes(t.field.kind))))&&(this.timer=setTimeout(()=>{this.timer=void 0,this.moment.time=Date.now();for(let e of this.items)this.drawDisplays(e);this.invalidate(),this.scheduleClock()},6e4-Date.now()%6e4+10))}pose(e,t){let n=e.definition.kind,r=t.motion_config?.[e.definition.id],o=r?.direction??e.definition.direction??1;if(n==="slide"){let a=e.definition.axis??"x",l=a==="x"?0:a==="y"?1:2,c=a==="x"?t.w:a==="y"?t.h:t.d;e.group.position[a]=e.definition.pivot[l]*c-(a==="y"?t.h/2:0)+(r?.travel_m??(e.definition.travel??1)*c)*e.shown*o;return}let s=r?.angle??e.definition.angle;if(e.group.rotation[e.definition.axis??"y"]=-(s==null?n==="window"?1.2:1.5:s*Math.PI/180)*e.shown*o,n==="window"){let a=r?.tilt_angle??e.definition.tilt_angle;e.group.rotation.x=-(a==null?.2:a*Math.PI/180)*e.tilt}}step(e){this.seconds+=e/1e3;let t=!1;for(let n of this.items)for(let r of n.motions){let o=this.global&&n.f.animations!==!1;if(["fan","washer","dryer"].includes(r.definition.kind)){if(!o||!r.state.running||this.moment.historical&&!this.moment.playing)continue;if(r.definition.kind==="fan")r.group.rotation[r.definition.axis??"z"]+=e*.008;else{let c=.75+.08*Math.sin(this.seconds);for(let u of n.parts.filter(d=>d.part.id&&r.definition.parts.includes(d.part.id))){let d=this.hass?ld(u.part,n.f,this.hass):null,h=d&&u.part.status?new Q(I0(d.color)).multiplyScalar(c):new Q(.3*c,.85*c,c),f=u.mesh.geometry.getAttribute("color");for(let p=0;p<f.count;p++)f.setXYZ(p,h.r,h.g,h.b);f.needsUpdate=!0}}t=!0;continue}if(!o){this.pose(r,n.f);continue}let s=1-Math.exp(-e/160),a=r.state.open-r.shown,l=r.state.tilt-r.tilt;Math.abs(a)<.003&&Math.abs(l)<.003?(r.shown=r.state.open,r.tilt=r.state.tilt):(r.shown+=a*s,r.tilt+=l*s,t=!0),this.pose(r,n.f)}return t}dispose(){this.timer&&clearTimeout(this.timer);for(let e of this.items){for(let t of e.parts)t.mesh.geometry.dispose(),t.mesh.material!==this.material&&t.mesh.material.dispose();for(let t of e.displays)t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.texture.dispose()}this.group.removeFromParent(),this.items=[],this.material.dispose()}};function L0(i,e,t){let n=_t(i.type),r=Ct(e,i);return(n?.spots??[]).flatMap(o=>{let s=i.spot_config?.[o.id],a=s?.entity??(o.binding?i.bindings?.[o.binding]:null)??i.entity,l=a?t.states[a]:void 0;if(!l||l.state!=="on")return[];let c=zc(i,t,a);if(!c)return[];let u=o.pivot??o.position,d=new U(o.position[0]*i.w,o.position[1]*i.h,o.position[2]*i.d),h=new U(u[0]*i.w,u[1]*i.h,u[2]*i.d),f=new zn((s?.rotation_x??0)*Math.PI/180,-(s?.rotation_y??0)*Math.PI/180,(s?.rotation_z??0)*Math.PI/180,"YZX"),p=new U(...o.direction).applyEuler(f).normalize();d.sub(h).applyEuler(f).add(h),d.y-=i.h/2,i.mirror&&(d.x*=-1,p.x*=-1);let _=new zn((i.rotation_x??0)*Math.PI/180,-i.rotation*Math.PI/180,(i.rotation_z??0)*Math.PI/180,"YZX");d.applyEuler(_).add(new U(i.x,r+i.h/2,i.z)),p.applyEuler(_).normalize();let m=e.rooms.findIndex(g=>Ge([i.x,i.z],g.points));return[{x:d.x,y:d.y,z:d.z,direction:p.toArray(),angle:s?.beam_angle??i.beam_angle??o.angle??60,color:c.color,level:c.level,kind:"spot",room:m<0?e.rooms.length:m}]})}function Uc(i,e){return(t,n)=>{let r=e?.(t,n);if(r!=null)return r;let o=i.rooms.find(s=>Ge([t,n],s.points));return o?pt(i,o)+kn(i,o):null}}function RM(i,e,t,n,r=Uc(t)){let o=5;e.y<-.001&&(o=Math.min(o,Math.max(.01,(i.y-pn(t,i.x,i.z)-.02)/-e.y)));for(let c of n){let u=c.b[0]-c.a[0],d=c.b[1]-c.a[1],h=e.x*d-e.z*u;if(Math.abs(h)<1e-8)continue;let f=c.a[0]-i.x,p=c.a[1]-i.z,_=(f*d-p*u)/h,m=(f*e.z-p*e.x)/h,g=i.y+_*e.y;if(_<=.01||_>=o||m<0||m>1||g<0||g>c.h)continue;let w=m*Math.hypot(u,d);c.gaps.some(y=>w>=y.s0&&w<=y.s1&&g>=y.y0&&g<=y.y1)||(o=_)}let s=0,a=r(i.x,i.z),l=a!=null&&i.y<=a+.001;for(let c=.025;c<=o+1e-9;c+=.025){let u=r(i.x+e.x*c,i.z+e.z*c),d=i.y+e.y*c;if(u!=null&&l&&d>=u){let h=s,f=c;for(let p=0;p<12;p++){let _=(h+f)/2,m=r(i.x+e.x*_,i.z+e.z*_);m!=null&&i.y+e.y*_>=m?f=_:h=_}o=Math.max(0,f-.002);break}l=u!=null&&d<=u,a=u,s=c}return o}function F0(i,e,t,n,r){if(!e.direction)return;let o=new U(e.x,e.y,e.z),s=new U(...e.direction).normalize(),a=Math.abs(s.y)<.95?new U(0,1,0):new U(1,0,0),l=new U().crossVectors(s,a).normalize(),c=new U().crossVectors(s,l).normalize(),u=(e.angle??60)*Math.PI/360,d=new Q(...e.color.map(p=>p*.09*e.level)),h=new Q(0,0,0),f=p=>{let _=p*Math.PI/8,m=s.clone().multiplyScalar(Math.cos(u)).addScaledVector(l,Math.cos(_)*Math.sin(u)).addScaledVector(c,Math.sin(_)*Math.sin(u)).normalize();return o.clone().addScaledVector(m,RM(o,m,t,n,r)).toArray()};for(let p=0;p<16;p++)i.tri(o.toArray(),f(p),f(p+1),d,h,h)}function PM(i,e){let t=_t(e);if(!t)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:e,x:i.x,z:i.z,rotation:i.rotation,rotation_x:i.rotation_x,rotation_z:i.rotation_z,mount_y:i.mount_y,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}function fd(i,e){if(!i.furniture.some(n=>n.type==="parking"&&e.has(n.id)))return i;let t=i.furniture.flatMap(n=>{let r=n.type==="parking"?e.get(n.id):void 0,o=r?PM(n,r):null;return o?[n,o]:[n]});return{...i,furniture:t}}function pd(i,e){let t=[],n=[],r=[],o=[],s=[],a=[],l=[];for(let{face:u,field:d}of i){let h=t.length/3,f=d.portrait===!1?10:6,p=d.portrait===!1?6:10,_=kM(d.id)%1e3/1e3;for(let g of Bs(u,d)){let[w,y,b,x]=g.corners.map(v=>[v[0]+u.n[0]*.006,v[1]+u.n[1]*.006-e,v[2]+u.n[2]*.006]),M=Ec(w,y,b,u.n),A=[[w,0,0],[y,1,0],[b,1,1],[x,0,1]];for(let v of[0,1,2,0,2,3]){let[S,E,P]=A[v];t.push(S[0],S[1],S[2]),n.push(E,P),r.push(f,p),o.push(_),a.push(...M),l.push(...w)}}let m=t.length/3-h;m&&s.push({id:d.id,start:h,count:m})}if(!t.length)return null;let c=new Ke;return c.setAttribute("position",new Te(t,3)),c.setAttribute("uv",new Te(n,2)),c.setAttribute("aCells",new Te(r,2)),c.setAttribute("aPhase",new Te(o,1)),c.setAttribute("aLevel",new Te(new Float32Array(t.length/3),1)),{geometry:Os(c,a,l),ranges:s}}function qs(i,e){let t=i.geometry.getAttribute("aLevel"),n=t.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,e.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return t.needsUpdate=!0,r}function md(i){let e=new it({transparent:!0,blending:Ft,depthWrite:!1,side:ht});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},e.customProgramCacheKey=()=>"fp3d-solar-live",e}function kM(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619)>>>0;return e}var N0=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,CM=`
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
`,IM=N0,LM=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function D0(i,e){let t=[];for(let[r,o,s]of mn(i))for(let a of[r,s,o])t.push(i[a][0],e,i[a][1]);let n=new Ke;return n.setAttribute("position",new Te(t,3)),n}function z0(i,e){let t=new kt;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new He(D0(n.points,s),new on({uniforms:{uTime:e,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:N0,fragmentShader:CM,transparent:!0,blending:Ft,depthWrite:!1,side:ht}));l.renderOrder=5,l.frustumCulled=!1,t.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(m=>m[0]),a=n.points.map(m=>m[1]),[l,c,u,d]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],h=c-l>=d-u,f=Math.min(1,n.cover),p=h?[[l-.1,u-.1],[l+(c-l)*f,u-.1],[l+(c-l)*f,d+.1],[l-.1,d+.1]]:[[l-.1,u-.1],[c+.1,u-.1],[c+.1,u+(d-u)*f],[l-.1,u+(d-u)*f]],_=xo(n.points,p);if(_.length>=3){let m=new He(D0(_,n.y+.03),new on({uniforms:{uAxis:{value:h?[1,0]:[0,1]}},vertexShader:IM,fragmentShader:LM,transparent:!0,side:ht}));m.renderOrder=6,t.add(m);let g=[];for(let y=0;y<_.length;y++){let b=_[y],x=_[(y+1)%_.length];g.push(b[0],n.y+.032,b[1],x[0],n.y+.032,x[1])}let w=new Ke;w.setAttribute("position",new Te(g,3)),t.add(new $t(w,new Zt({color:5995775,transparent:!0,opacity:.6})))}}}return t}function B0(i){for(let e of i.children)e.geometry?.dispose(),e.material?.dispose?.();i.clear()}var O0=["neon","blueprint","day"];function U0(i){return O0.indexOf(i)}var Vc={value:new U(.22,.88,1)},Gc={value:0};function V0(i){let e=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!e)return null;let t=parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var FM=`
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
`;function hn(i,e,t=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=e,o.uniforms.uAccent=Vc,o.uniforms.uAccentOn=Gc,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${FM}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${t?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${t?"l":"s"}`,i}function To(i){return i==="day"?Ni:Ft}var Zs={open:0,open2:0,tilt:0,tilt2:0,cover:null},G0=2043986,H0=2769520,DM=2242399,gd=1845831,NM=1450554,_i=16758087,zM=1846349,BM=2572395,OM=1120816,UM=1845831,_d=5995775,bd=9085695,kr=We(3662079,.08);function VM(i,e){let t=Math.min(.4,Math.max(.02,i-.12)),n=Math.min(.3,Math.max(0,(e-.1)/2));return{x0:(i-t)/2,x1:(i+t)/2,y0:n,y1:e-n}}function GM(){let e=_t("pack:local.v2.kuechenmoebel_farben:kitchen_dishwasher_panel_60")?.parts.find(t=>t.id==="p003")?.color;return e?.startsWith("#")?parseInt(e.slice(1),16):10778952}function Hc(i,e,t,n,r,o,s,a,l,c,u){let d=(f,p,_)=>e(f,p,_),h=[[d(t,r,a),d(n,r,a),d(n,o,a),d(t,o,a),c],[d(t,r,s),d(n,r,s),d(n,o,s),d(t,o,s),We(l.getHex(),.6)],[d(t,o,s),d(n,o,s),d(n,o,a),d(t,o,a),l],[d(t,r,s),d(n,r,s),d(n,r,a),d(t,r,a),We(l.getHex(),.85)],[d(t,r,s),d(t,o,s),d(t,o,a),d(t,r,a),We(l.getHex(),.92)],[d(n,r,s),d(n,o,s),d(n,o,a),d(n,r,a),We(l.getHex(),.92)]];for(let[f,p,_,m,g]of h)i.tri(f,p,_,g,g,g,void 0,u),i.tri(f,_,m,g,g,g,void 0,u)}function st(i,e,t,n,r,o,s,a,l,c,u,d){if(a<=u+1e-6)return Hc(i,e,t,n,r,o,s,a,l,c,Ze);if(s>=u-1e-6)return Hc(i,e,t,n,r,o,s,a,l,c,d);Hc(i,e,t,n,r,o,s,u,l,c,Ze),Hc(i,e,t,n,r,o,u,a,l,c,d)}function bi(i,e,t,n,r,o,s,a,l,c,u=0){let d=(h,f,p)=>{let _=b=>u?(s-b)/u:.5,m=e(t,r,h),g=e(n,r,h),w=e(n,r,f),y=e(t,r,f);i.tri(m,g,w,a,a,a,[0,_(h),1,_(h),1,_(f)],p),i.tri(m,w,y,a,a,a,[0,_(h),1,_(f),0,_(f)],p)};s<=l+1e-6?d(o,s,Ze):o>=l-1e-6?d(o,s,c):(d(o,l,Ze),d(l,s,c))}function HM(i,e,t,n,r,o,s,a,l,c){let u=e(t,r,s),d=e(n,r,s),h=e(n,o,s),f=e(t,o,s),p=0,_=(o-r)/c;i.tri(u,d,h,a,a,a,[0,p,1,p,1,_],l),i.tri(u,h,f,a,a,a,[0,p,1,_,0,_],l)}function W0(i,e,t,n=!1){let r=new ot,o=new ot,s=new ot(!0),a=new Q(G0),l=new Q(H0),c=[],u=[],d=[];for(let h of i){let f=r.count,p=o.count,_=s.count,m=e.get(h.opening.id)??Zs,g=h.width,w=h.opening.type==="door"||h.opening.type==="garage"?h.sill:0,y=h.sill-w,b=h.top-w,x=t-w,{bucket:M}=h,A=(P,C,R)=>[h.start[0]+h.axis[0]*P+h.toRoom[0]*C,R+w,h.start[1]+h.axis[1]*P+h.toRoom[1]*C],v=(h.faceRoom-h.faceOut)/2,S=h.opening.mark==="closed",E=h.opening.type==="door"&&br(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!E||h.opening.type==="garage"){let P=-h.faceOut-.012,C=h.faceRoom+.012,R=h.opening.type==="garage"&&(S?!!m.sensed&&(m.cover??1)>=.95:(m.cover??1)<.95),T=R?We(_i,.8):new Q(G0),I=R?We(_i,1):new Q(H0);st(r,A,-.045,.02,P,C,0,b+.045,T,I,x,M),st(r,A,g-.02,g+.045,P,C,0,b+.045,T,I,x,M),st(r,A,.02,g-.02,P,C,b-.02,b+.045,T,I,x,M)}if(h.opening.type==="door"){let P=br(h.opening,h.exterior),C=tm(P),R=h.opening.swing==="out"?-1:1,T=R>0?h.faceRoom:-h.faceOut,I=h.opening.leaves===2,F=.02,z=g-.02,B=em(g,P,h.hingeAtStart,h.opening);if(B){for(let[ae,H]of B.panels)st(r,A,ae,ae+.04,v-.03,v+.03,.02,b-.02,a,l,x,M),st(r,A,H-.04,H,v-.03,v+.03,.02,b-.02,a,l,x,M),st(r,A,ae,H,v-.03,v+.03,.02,.1,a,l,x,M),bi(o,A,ae+.04,H-.04,v,.1,b-.02,kr,x,M);F=B.x0,z=B.x1}let N=I?(z-F)/2-.004:z-F,O=C?.06:.04;C&&(st(r,A,.02,g-.02,-h.faceOut-.02,h.faceRoom,0,.02,new Q(gd),l,x,M),h.exterior&&P!=="front_slot"&&st(r,A,g/2-.08,g/2+.08,-h.faceOut-.1,-h.faceOut,b+.1,b+.17,We(_i,.55),We(_i,.85),x,Ze));let G=E?[]:[[h.hingeAtStart,m.open]];I&&!E&&G.push([!h.hingeAtStart,m.open2??0]);let $=P==="sliding_glass",Z=P==="sliding_wood",ue=$||Z,ne=P==="sliding"||ue;if(ue){let ae=T+R*.055;st(r,A,F-(h.hingeAtStart||I?N:0),z+(!h.hingeAtStart||I?N:0),ae-.025,ae+.025,b+.025,b+.075,new Q(_d),new Q(bd),x,M)}for(let[ae,H]of G){let W=Math.min(1,Math.max(0,H)),se=ne?0:W*1.5,he=ne?W*N:0,ie=(et,mt,K)=>{let Vt=et*Math.cos(se)-mt*Math.sin(se)-he,gt=T+R*(mt*Math.cos(se)+et*Math.sin(se)+(ue?.055:he?.05:0));return A(ae?F+Vt:z-Vt,gt,K)},de=W>.05?Ze:M,Oe=S?!!m.sensed&&W<.05:W>.9,Ne=Z&&n?GM():null,Ie=Ne!==null?new Q(Ne):Oe?We(_i,.7):new Q(C?OM:zM),Le=Ne!==null?We(Ne,1.1):Oe?We(_i,.9):new Q(C?UM:BM);if(P==="front_slot"){let et=VM(N,b-y),mt=y+et.y0,K=y+et.y1;st(r,ie,0,et.x0,-O,0,.01,b-.01,Ie,Le,x,de),st(r,ie,et.x1,N,-O,0,.01,b-.01,Ie,Le,x,de),st(r,ie,et.x0,et.x1,-O,0,.01,mt,Ie,Le,x,de),st(r,ie,et.x0,et.x1,-O,0,K,b-.01,Ie,Le,x,de),bi(o,ie,et.x0,et.x1,-O/2,mt,K,kr,x,de)}else P==="glass"||$?(st(r,ie,0,.05,-O,0,.01,b-.01,Ie,Le,x,de),st(r,ie,N-.05,N,-O,0,.01,b-.01,Ie,Le,x,de),st(r,ie,.05,N-.05,-O,0,.01,.12,Ie,Le,x,de),st(r,ie,.05,N-.05,-O,0,b-.08,b-.01,Ie,Le,x,de),bi(o,ie,.05,N-.05,-O/2,.12,b-.08,kr,x,de)):st(r,ie,0,N,-O,0,.01,b-.01,Ie,Le,x,de);P==="front_glass"?bi(o,ie,.12,N-.12,.001,b*.55,b-.18,kr,x,de):C&&P!=="front_slot"&&bi(o,ie,.1,.18,.001,.3,b-.3,kr,x,de);let Ue=Math.min(1.05,b*.5),at=C?.3:ue?.18:.012,wt=C||ue?N-.11:N-.16,Bt=C||ue?N-.08:N-.05;st(r,ie,wt,Bt,.004,.05,Ue-at,Ue+at,new Q(_d),new Q(bd),x,de),st(r,ie,wt,Bt,-O-.05,-O-.004,Ue-at,Ue+at,new Q(_d),new Q(bd),x,de)}}else if(h.opening.type==="garage"){let P=Math.min(1,Math.max(0,m.cover??1)),C=new Q(13951231),R=h.faceRoom-.03,T=b*(1-P);P>.01&&bi(s,A,.02,g-.02,R,T,b,C,x,M,.5);let I=(1-P)*b;I>.01&&HM(s,A,.02,g-.02,R,R+I,b+.03,C,M,.5)}else if(br(h.opening,h.exterior)==="glass_wall"){st(r,A,0,.04,v-.025,v+.025,y,b,a,l,x,M),st(r,A,g-.04,g,v-.025,v+.025,y,b,a,l,x,M),st(r,A,.04,g-.04,v-.025,v+.025,y,y+.03,a,l,x,M),st(r,A,.04,g-.04,v-.025,v+.025,b-.04,b,a,l,x,M);let R=Math.max(1,Math.round((g-2*.04)/.9)),T=(g-2*.04)/R;for(let I=1;I<R;I++){let F=.04+I*T;st(r,A,F-.02,F+.02,v-.025,v+.025,y+.03,b-.04,a,l,x,M)}for(let I=0;I<R;I++){let F=.04+I*T+(I?.02:0),z=.04+(I+1)*T-(I<R-1?.02:0);bi(o,A,F,z,v,y+.03,b-.04,kr,x,M)}}else{st(r,A,0,.06,v-.035,v+.035,y,b,a,l,x,M),st(r,A,g-.06,g,v-.035,v+.035,y,b,a,l,x,M),st(r,A,.06,g-.06,v-.035,v+.035,y,y+(y>.05?.06:.03),a,l,x,M),st(r,A,.06,g-.06,v-.035,v+.035,b-.06,b,a,l,x,M),y>.3&&(st(r,A,-.04,g+.04,v+.035,h.faceRoom+.07,y-.03,y,new Q(gd),l,x,M),h.exterior&&st(r,A,-.03,g+.03,-h.faceOut-.06,v-.035,y-.04,y-.02,new Q(gd),l,x,M));let R=.055,T=y+(y>.05?.06:.03),I=b-.06,F=v+.035,z=v+.035+.06,N=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:g/2,x1:h.hingeAtStart?g/2:g-.06,open:m.open,tilt:m.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?g/2:.06,x1:h.hingeAtStart?g-.06:g/2,open:m.open2??0,tilt:m.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:g-.06,open:m.open,tilt:m.tilt}];for(let O of N){let G=O.open>.02||O.tilt>.02,$=S?!!m.sensed&&!G:G,Z=$?We(_i,.75):new Q(DM),ue=$?We(_i,.95):l,ne=O.x0,ae=O.x1,H=ae-ne,W=O.open*1.2*(h.opening.swing==="out"?-1:1),se=O.tilt*.2,he=(de,Oe,Ne)=>{let Ie=Ne-T,Le=Oe+Ie*Math.sin(se),Ue=T+Ie*Math.cos(se),at=de*Math.cos(W)-(Le-F)*Math.sin(W);Le=F+(Le-F)*Math.cos(W)+de*Math.sin(W);let wt=O.atStart?ne+at:ae-at;return A(wt,Le,Ue)},ie=Math.abs(W)>.05?Ze:M;if(st(r,he,0,R,F,z,T,I,Z,ue,x,ie),st(r,he,H-R,H,F,z,T,I,Z,ue,x,ie),st(r,he,R,H-R,F,z,T,T+R,Z,ue,x,ie),st(r,he,R,H-R,F,z,I-R,I,Z,ue,x,ie),bi(o,he,R,H-R,(F+z)/2,T+R,I-R,$?We(_i,.16):kr,x,ie),br(h.opening,h.exterior)==="bars"){let de=(T+I)/2,Oe=(F+z)/2;st(r,he,R,H-R,Oe-.012,Oe+.012,de-.012,de+.012,Z,ue,x,ie),st(r,he,H/2-.012,H/2+.012,Oe-.012,Oe+.012,T+R,I-R,Z,ue,x,ie)}}}if(m.cover!==null){let P=-h.faceOut,C=b+.2;st(r,A,-.05,g+.05,P-.15,P,b,C,new Q(NM),l,x,M);let R=Math.min(1,Math.max(0,m.cover));if(R>.01){let T=b-R*(b-y);bi(s,A,0,g,P-.07,T,b,new Q(16777215),x,M,.045)}}c.push({id:h.opening.id,start:f,end:r.count}),u.push({id:h.opening.id,start:p,end:o.count}),d.push({id:h.opening.id,start:_,end:s.count})}return{frames:r.geometry(),glass:o.geometry(),blinds:s.geometry(),frameTris:c,glassTris:u,blindTris:d}}var WM=.3,X0=2.6;function K0(i,e=.32,t=.22,n=[]){let r=i.map(x=>x[0]),o=i.map(x=>x[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),u=c-l>=a-s,d=t*.7071,h=x=>{let M=[x,[x[0]+t,x[1]],[x[0]-t,x[1]],[x[0],x[1]+t],[x[0],x[1]-t]],A=[...M,[x[0]+d,x[1]+d],[x[0]-d,x[1]+d],[x[0]+d,x[1]-d],[x[0]-d,x[1]-d]];return M.every(v=>Ge(v,i))&&!n.some(v=>A.some(S=>Ge(S,v)))},f=(x,M)=>h(u?[x,M]:[M,x]),p=(x,M)=>{let A=Math.ceil(Math.hypot(M[0]-x[0],M[1]-x[1])/.05);for(let v=1;v<A;v++)if(!h([x[0]+(M[0]-x[0])*v/A,x[1]+(M[1]-x[1])*v/A]))return!1;return!0},[_,m,g,w]=u?[s,a,l,c]:[l,c,s,a],y=[],b=!0;for(let x=_+t;x<=m-t+1e-6;x+=e){let M=null,A=null,v=.05;for(let C=g;C<=w+1e-6;C+=v)if(f(x,C)&&(A??=C),(!f(x,C)||C+v>w+1e-6)&&A!==null){let R=f(x,C)?C:C-v;(!M||R-A>M[1]-M[0])&&(M=[A,R]),A=null}if(!M||M[1]-M[0]<.2)continue;let S=C=>{let[R,T]=C?M:[M[1],M[0]];return[u?[x,R]:[R,x],u?[x,T]:[T,x]]},E=S(b),P=y[y.length-1];if(P&&n.length&&!p(P,E[0])){let C=S(!b);if(!p(P,C[0]))continue;E=C,b=!b}y.push(E[0],E[1]),b=!b}return y}function xd(i,e=.7,t=12){return Array.from({length:t},(n,r)=>{let o=r/t*Math.PI*2;return[i[0]+Math.cos(o)*e,i[1]+Math.sin(o)*e]})}var vd=i=>Math.atan2(Math.sin(i),Math.cos(i));function Y0(i,e,t){let n=null;if(e.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(e.mode==="returning"||e.mode==="docked")n=e.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(e.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=vd(e.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),X0*t),!0)}let a=Math.atan2(r,o),l=vd(a-i.heading);if(i.heading=vd(i.heading+Math.sign(l)*Math.min(Math.abs(l),X0*t)),Math.abs(l)<.35){let c=Math.min(s,WM*t);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}var Cn=null,q0=new Map;function $0(i,e=0){let t=new ot,n=new zt,r=_t(i.type);if(r?.light)wc(t,r,{x:0,z:0,rotation:e,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)yd(t,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:e,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:e,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};xc(t,n,new ot,o)}return{buf:t,lines:n}}function XM(i,e=180,t,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${e}|${n}`,o=q0.get(r);if(o)return o;t&&ys(t),Cn??=new gr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Cn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Cn.setSize(e,e,!1),Cn.setClearColor(0,0);let{buf:s,lines:a}=$0(i),l=new Ri,c=new He(s.geometry(),new it({vertexColors:!0,color:new Q(n,n,n)})),u=new $t(a.geometry(),new Zt({vertexColors:!0,color:new Q(n*1.8,n*1.8,n*1.8)}));l.add(c,u);let d=new cn().setFromObject(c),h=d.getCenter(new U),f=new Qn(-1,1,1,-1,.01,100);f.position.copy(h).add(new U(.9,.75,1.3).normalize().multiplyScalar(20)),f.lookAt(h),f.updateMatrixWorld();let p=.05;for(let g of[d.min.x,d.max.x])for(let w of[d.min.y,d.max.y])for(let y of[d.min.z,d.max.z]){let b=new U(g,w,y).applyMatrix4(f.matrixWorldInverse);p=Math.max(p,Math.abs(b.x),Math.abs(b.y))}let _=p*1.12;f.left=-_,f.right=_,f.top=_,f.bottom=-_,f.updateProjectionMatrix(),Cn.render(l,f);let m=Cn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose(),q0.set(r,m),m}function KM(i,e,t=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(e)}|${t}|${r}`,s=Z0.get(o);if(s)return s;n&&ys(n);let{buf:a,lines:l}=$0(i,e),c=new He(a.geometry(),new it({vertexColors:!0,color:new Q(r,r,r)})),u=new $t(l.geometry(),new Zt({vertexColors:!0,color:new Q(r*1.8,r*1.8,r*1.8)})),d=new cn().setFromObject(c);if(d.isEmpty())return null;let h=d.min.x,f=d.max.x,p=Math.max(0,d.min.y),_=d.max.y,m=Math.max(1,Math.min(1024,Math.round((f-h)*t))),g=Math.max(1,Math.min(1024,Math.round((_-p)*t)));Cn??=new gr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Cn.setPixelRatio(1),Cn.setSize(m,g,!1),Cn.setClearColor(0,0);let w=new Ri;w.add(c,u);let y=new Qn(h,f,_,p,.01,100);y.position.set(0,0,50),y.lookAt(0,0,0),y.updateProjectionMatrix(),Cn.render(w,y);let b=Cn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose();let x={url:b,x0:h,x1:f,y0:p,y1:_};return Z0.set(o,x),x}var Z0=new Map;var o3={Group:kt,Mesh:He,MeshBasicMaterial:it,CanvasTexture:Bn,Color:Q,PlaneGeometry:On,BufferGeometry:Ke,Float32BufferAttribute:Te,DoubleSide:ht},j0={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},YM=2.4,Q0=1.4,qM=.22,eg=140,Md=32,ZM=500,tg=33,ng=.028,$M=.09,ct=2767456,JM=1911110,jM=1,Sd=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),Wc=450,ig=125,QM=.08,Kc={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},eS=new Q(1714765);function tS(){let e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency||8;return e<=3||t<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Td=class{host;options;renderer;scene=new Ri;camera=new tn(38,1,.1,400);controls;labels;root=new kt;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;roofDirection={value:new U(0,1,1)};keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";productColors=!1;customLayers=new Map;customMemories=new Map;customContext=null;themeUniform={value:0};sun=null;weather=null;rain=new $t(new Ke,new Zt({color:10471679,transparent:!0,opacity:.4,blending:Ft,depthWrite:!1}));snow=new eo(new Ke,new ur({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new He(new Xo(1,28),new it({color:16767370,transparent:!0,opacity:0,blending:Ft,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(e,t={}){this.host=e,this.options=t,this.explode=t.explode??!0,this.renderer=this.makeRenderer(t.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",e.append(this.labels),this.patternTexture=iS(),this.blindTexture=oS(),this.haloTexture=aS(),this.ground=new He(new On(1,1),new it({transparent:!1,blending:Ft,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(e)),this.resize()}get low(){return this.lowQuality}setParked(e){let t=[...e].map(([n,r])=>`${n}=${r}`).sort().join("|");t!==this.parkedSig&&(this.parkedSig=t,this.parked=e,this.building&&(this.rebuild(),this.invalidate()))}setStats(e){this.statsOn=e}setLabelInset(e){this.labelInset!==e&&(this.labelInset=e,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(e){this.orbitSpeed=e,this.orbitLast=0,this.invalidate()}setQuality(e){let t=this.renderer.domElement,n=this.makeRenderer(e);this.rebuildTier(),this.applyTierFlags(),t.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n,this.building&&this.rebuild();let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(e){ys(e),this.building&&(this.rebuild(),this.invalidate())}setProductColors(e){e!==this.productColors&&(this.productColors=e,Gp(e),this.building&&this.rebuild(),this.invalidate())}setCustomPackState(e,t){this.customContext={hass:e,moment:t};for(let n of this.customLayers.values())n.update(e,t,this.building?.settings.pack_animations!==!1);for(let n of this.floors)this.buildGlow(n),this.buildHalos(n)}setBuilding(e){let t=this.building===null;this.building=e,this.rebuild(),t&&this.fit(0),this.invalidate()}setKeepView(e){this.keepView=e}setFloor(e,t=!0){this.keepNext=this.keepView&&e!==null&&this.floorId!==null&&e!==this.floorId,this.floorId=e,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!t),this.applyHighlight(),this.fit(t?700:0)}setFloorStack(e){e!==this.floorStack&&(this.floorStack=e,this.applyTargets(!1))}setKeepRoof(e){e!==this.keepRoof&&(this.keepRoof=e,this.invalidate())}setExplode(e){e!==this.explode&&(this.explode=e,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(e){if(this.roomId=e,this.labelsDirty=!0,this.applyHighlight(),!e){this.fit(700);return}let t=this.floors.find(u=>u.floor.rooms.some(d=>d.id===e)),n=t?.floor.rooms.find(u=>u.id===e);if(!t||!n)return;let r=n.start_view;if(r){let u=t.floor.elevation+t.ty,[d,h]=Gi(n.points),f=r.target??{x:d,y:.3,z:h};this.controls.flyTo({target:new U(f.x,f.y+u,f.z),radius:r.radius,phi:r.phi,theta:r.theta});return}let[o,s]=Gi(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new U(Math.max(...a)-Math.min(...a),t.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new U(o,t.floor.elevation+t.ty+pt(t.floor,n)+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(e){this.wallMode=e;for(let t of this.floors)this.buildLamps(t);this.invalidate()}setDevices(e){this.devices=e,this.labelsDirty=!0,this.effectFloors=new Set(e.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(e.map(n=>[n.id,n.floorId]));let t=new Set;for(let n of e){t.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let o=r.el;r.icon!==n.icon&&(r.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let s=n.caption??"";r.caption!==s&&(r.caption=s,o.querySelector(".fp3d-dev-name").textContent=s);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,o.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,o.title=n.name,o.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?o.style.setProperty("--fp3d-glow",c):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)t.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(e){let t=JSON.stringify([...e]);if(t!==this.roofWindowsKey){this.roofWindowsKey=t,this.roofWindows=e,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(e){this.anchorCb=e,this.labelsDirty=!0,this.invalidate()}setAnchors(e){this.anchors=e,this.labelsDirty=!0,this.invalidate()}setSolarLevels(e){this.solarLevels=e;let t=!1;for(let n of this.roof?.lives??[])qs(n,e)&&(t=!0);for(let n of this.floors)n.solarLive&&qs(n.solarLive,e)&&(t=!0);this.solarActive=t,this.invalidate()}setPools(e){let t=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(t(e)!==t(this.pools)){this.pools=e,this.poolActive=e.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(e){e.poolGroup&&(B0(e.poolGroup),e.group.remove(e.poolGroup),e.poolGroup=void 0);let t=this.pools.filter(n=>n.floorId===e.floor.id);t.length&&(e.poolGroup=z0(t,this.flowTime),e.group.add(e.poolGroup))}setSound(e){let t=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(t(e)!==t(this.sound)){this.sound=e,this.soundActive=e.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new kt;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=e.filter(c=>c.floorId===n.floor.id),s=n.floor.elevation+.03;for(let c of o)if(c.playing)for(let u=0;u<3;u++){let d=new He(new es(.92,1,48),new it({color:3662079,transparent:!0,opacity:0,blending:Ft,depthWrite:!1,side:ht}));d.rotation.x=-Math.PI/2,d.position.set(c.x,s+u*.002,c.z),d.userData={sound:!0,phase:u/3,level:c.level},d.frustumCulled=!1,r.add(d)}let a=[],l=new Set;for(let c of o)for(let u of c.members){let d=o.find(f=>f.id===u);if(!d||d===c)continue;let h=[c.id,d.id].sort().join("|");l.has(h)||(l.add(h),a.push(c.x,s+.02,c.z,d.x,s+.02,d.z))}if(a.length){let c=new Ke;c.setAttribute("position",new Te(a,3));let u=new $t(c,new Zt({color:3662079,transparent:!0,opacity:.45,blending:Ft,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(e){let t=e/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(t*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(e){this.flows=e;let t=this.flowSeconds(),n=new Map;for(let r of e){let o=wd(r),s=rg(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?t*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=e.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(e){this.pipes=e;for(let t of this.floors)this.buildPipes(t);this.invalidate()}buildPipes(e){let t=this.pipes.filter(o=>o.floorId===e.floor.id),n=JSON.stringify(t);if(n===e.pipeSig)return;e.pipeSig=n;let r=new ot;for(let o of t)S0(r,o);e.pipeMesh.geometry.dispose(),e.pipeMesh.geometry=r.geometry(),e.pipeMesh.visible=r.count>0}setPersons(e){this.labelsDirty=!0,this.persons=e;let t=new Set;for(let n of e){t.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let o=document.createElement("img");o.src=n.picture,o.alt="",o.addEventListener("error",()=>o.replaceWith(document.createTextNode(n.initials))),r.append(o)}else r.textContent=n.initials}for(let[n,r]of this.personPins)t.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(e,t){this.pickFurniture=e,this.pickOpenings=t}setAccent(e){let t=V0(e),n=t?1:0;n===Gc.value&&(!t||Vc.value.equals(new U(...t)))||(Gc.value=n,t&&Vc.value.set(...t),this.invalidate())}setTheme(e){if(e===this.theme)return;this.theme=e,this.themeUniform.value=U0(e);let t=To(e),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines,this.roof.solarLines]:[]];for(let r of n)r.blending=t,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(e){this.furnish=e,e||this.selectFurniture(null),this.invalidate()}selectFurniture(e){e&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=e,this.updateGhost(),this.invalidate()}selectFurnitureSet(e){this.selectedSet=[...e],this.updateGhost(),this.invalidate()}setSun(e){this.sun=e;for(let t of this.floors)this.buildSun(t);this.placeSky(),this.invalidate()}setWeather(e){this.weather=e;for(let t of this.floors)this.buildSun(t);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let e=this.weather,t=!!e&&!this.lowQuality,n=e?new Q(e.sky[0]/255,e.sky[1]/255,e.sky[2]/255):null;this.scene.fog=t&&e.fog>0&&n?new Uo(n,.01+.035*e.fog):null;let r=t?Math.round(700*e.rain):0,o=t?Math.round(450*e.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}seedParticles(e,t,n){if((e.geometry.getAttribute("position")?.count??0)===t)return;let o=this.weatherBox,s=new Float32Array(t*3),a=n?2:1;for(let c=0;c<t;c+=a){let u=o.x0+Math.random()*(o.x1-o.x0),d=o.y0+Math.random()*(o.y1-o.y0),h=o.z0+Math.random()*(o.z1-o.z0);s.set([u,d,h],c*3),n&&s.set([u,d-.45,h],c*3+3)}e.geometry.dispose();let l=new Ke;l.setAttribute("position",new Te(s,3)),e.geometry=l}stepWeather(e){let t=this.weather;if(!t||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(e-this.weatherLast)/1e3):0;if(this.weatherLast=e,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=t.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*t.rain)*n;for(let u=0;u<l.length;u+=6){let d=l[u+1]-c,h=l[u]+s*n;d<r.y0&&(d+=o,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[u]=h,l[u+1]=d,l[u+3]=h-s*.05,l[u+4]=d-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=e/1e3;for(let u=0;u<l.length;u+=3){let d=l[u+1]-(.9+.6*t.snow)*n,h=l[u]+(s+Math.sin(c+u)*.4)*n;d<r.y0&&(d+=o,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[u]=h,l[u+1]=d}a.needsUpdate=!0}return!0}placeSky(){let e=this.sun,t=this.weather,n=t?.cloud??0,r=!e||e.elevation<-3;if(!e||!t||t.disc===!1||n>.85||!r&&e.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*ft,s=(r?e.azimuth+180:e.azimuth)*ft,a=Math.max(10,Math.abs(e.elevation))*ft,l=this.weatherBox,c=new U((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),d=new U(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(d,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let h=this.skyDisc.material;h.color.set(r?13621486:16767370),h.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(e){let t=!!e!=!!this.roomTint;if(this.roomTint=e,this.tintTick=!0,this.applyHighlight(),t)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(e){this.screens=e;for(let t of this.floors)this.buildScreens(t);this.invalidate()}fillRoomPin(e,t,n){if(e.textContent=t||"\u2013",n){let r=document.createElement("small");r.textContent=n,e.append(r),e.classList.add("fp3d-pin-info")}else e.classList.remove("fp3d-pin-info")}setRoomInfo(e){if(!(e.size===this.roomInfo.size&&[...e].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=e;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,e.get(r.room.id))}}setFloorInfo(e){this.floorInfo=e;for(let t of this.floors){let n=t.label.querySelector("span"),r=e.get(t.floor.id)??this.options.floorInfo?.(t.floor)??"";n&&n.textContent!==r&&(n.textContent=r,t.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(e,t=!1){if(this.openingTargets=e,t)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=e.get(o)??Zs,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&!!l.sensed==!!s.sensed||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(e){for(let[t,n]of e){let r=this.fridges.get(t)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(t,r)}for(let t of[...this.fridges.keys()])e.has(t)||this.fridges.delete(t);this.invalidate()}stepFridges(e){let t=1-Math.exp(-e/160),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*t,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(o=>n.has(o.id))&&this.buildFridges(r);return!0}buildFridges(e){let t=new ot;for(let n of e.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Km(t,n,Ct(e.floor,n),r?.l??0,r?.r??0)}e.fridgeMesh.geometry.dispose(),e.fridgeMesh.geometry=t.geometry(),e.fridgeMesh.visible=t.count>0}resetView(){this.fit(700)}setStartView(e){this.startView=e}currentView(){let e=this.controls.view,t=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(e.theta),Math.cos(e.theta)),phi:e.phi,radius:e.radius,target:{x:e.target.x,y:e.target.y-t,z:e.target.z}}}floorBase(e){let t=e===null?void 0:this.floorMap.get(e);return t?t.floor.elevation+t.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let e of[this.rain,this.snow,this.skyDisc])e.geometry.dispose(),e.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let e of this.robots.values())e.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(e=>this.render(e)))}makeRenderer(e){let t=e==="low"||e==="auto"&&tS();this.lowQuality=t,zm(t),this.applyWeather(),this.highQuality=e==="high";let n=new gr({antialias:!t,alpha:!0,powerPreference:t?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:e==="high"?2.5:2)),n.setClearColor(0,0),n.localClippingEnabled=!0,n.outputColorSpace=Nt,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Fc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(e,t)=>this.onTap(e,t),hold:(e,t)=>this.onHold(e,t),swipeStart:(e,t,n,r)=>this.swipeStart(e,t,n,r),swipeMove:e=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",e,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(e,t)=>this.grabFurniture(e,t),drag:(e,t)=>this.dragFurniture(e,t),drop:()=>this.dropFurniture(),doubleTap:(e,t)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(e,t):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||(this.customContext&&this.setCustomPackState(this.customContext.hass,{...this.customContext.moment,time:this.customContext.moment.historical?this.customContext.moment.time:Date.now()}),this.invalidate())};resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.size={w:e,h:t},this.labelsDirty=!0,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let e of this.customLayers.values())e.dispose();this.customLayers.clear();for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.floors){for(let t of e.screenPics.values())t.mesh.material.dispose(),t.texture?.dispose();e.group.traverse(t=>{t.geometry?.dispose()});for(let t of Object.values(e.materials))t.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(e){let t=document.createElement("button");t.className="fp3d-dev",t.dataset.entity=e;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",t.append(n,r,o,s);let a,l=!1;t.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=e;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let d=t.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,d.left+d.width/2-h.left,d.top+d.height/2-h.top)},ZM)});let c=()=>clearTimeout(a);return t.addEventListener("pointerleave",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerup",c),t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(e),this.options.onDeviceSelect?.(e);return}if(l)return;let d=t.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceTap?.(e,d.left+d.width/2-h.left,d.top+d.height/2-h.top)}),t.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let d=t.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,d.left+d.width/2-h.left,d.top+d.height/2-h.top)}}),t}buildLightSurface(e){let t=this.lowQuality?.5:.25,n=km(e.floor,e.geo.walls2d,e.geo.wallBuckets,e.geo.openings,t,e.geo.holes,e.geo.roofUnder,Uc(e.floor,e.geo.roofUnder)),r=og(e.floor,e.geo.openRooms);if(e.lightZones=r.some((a,l)=>a!==l)?r:null,e.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=yo(r,a.ra),a.rb=yo(r,a.rb)}e.lightSurface=n;let o=new Ke;o.setAttribute("position",new Te(n.pos,3)),o.setAttribute("color",new Te(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new Te(n.fold,1));let s=new lr(new Uint32Array(n.pos.length/3),1);s.setUsage(Qu),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),e.glowMesh.geometry.dispose(),e.glowMesh.geometry=o,e.glowSig="",this.buildGlow(e)}lightSources(e){let t=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==e.floor.id||!r||n.pack&&_t(n.pack)?.spots?.length)continue;let o=n.top??e.floor.height,s=zh(e.floor,n.x,n.z),a=yo(e.lightZones,s),[l,,c]=n.size??(n.lamp?Kc[n.lamp]:[.3,.3,.3]),u=n.base??0,d=n.top??o,h=t.length,f={ceiling:[d-.12,"ceiling"],downlight:[d-.03,"spot"],spot:[d-c,"spot"],panel:[d-.05,"ceiling"],pendant:[Math.max(u+.5,d-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<jM?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[p,_]=n.lamp?f[n.lamp]:[n.y,"omni"],m=n.lightY??p,g=r.color;if(n.lamp==="strip"){let w=(n.rotation??0)*ft,y=!!n.upright||Math.abs(n.roll??0)>45;for(let b of[-1/3,0,1/3])n.upright?t.push({x:n.x,y:u+l*(.5+b),z:n.z,color:g,level:r.level*.55,kind:"omni",room:a}):t.push({x:n.x+Math.cos(w)*l*b,y:m,z:n.z+Math.sin(w)*l*b,color:g,level:r.level*.55,kind:y?"omni":_,room:a})}else t.push({x:n.x,y:m,z:n.z,color:g,level:r.level,kind:_,room:a,..._==="spot"?{direction:[0,-1,0],angle:n.beam_angle??60}:{}});if(n.rotation_x||n.rotation_z){let w=fo(n,Xc(n,o));for(let y=h;y<t.length;y++){let b=t[y];if([b.x,b.y,b.z]=w(b.x,b.y,b.z),b.kind==="spot"){let x=w(n.x,0,n.z),M=w(n.x,-1,n.z);b.direction=[M[0]-x[0],M[1]-x[1],M[2]-x[2]],b.angle=n.beam_angle??60}else b.kind="omni";b.room=yo(e.lightZones,zh(e.floor,b.x,b.z))}}}if(this.customContext)for(let n of e.floor.furniture)for(let r of L0(n,e.floor,this.customContext.hass))r.room=yo(e.lightZones,r.room),t.push(r);return t}buildGlow(e){let t=e.lightSurface;if(!t)return;let n=this.lightSources(e),r=t.doors.map(d=>{let h=e.geo.openings.find(p=>p.opening.id===d.id);if(h&&br(h.opening,h.exterior)==="passage")return 1;let f=e.openings.get(d.id);return f?Math.max(f.open,f.open2??0):.5}),o=n.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)},${d.z.toFixed(2)},${d.kind},${d.level.toFixed(3)},${d.color.map(h=>h.toFixed(3)).join("/")},${d.direction?.join("/")},${d.angle}`).join(";")+"|"+r.map(d=>d.toFixed(1)).join(",");if(o===e.glowSig)return;e.glowSig=o;let s=e.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){e.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=Im(t,n,.42,r);if(this.roomTint){let d=e.floor.rooms.length;for(let h=0;h<t.room.length;h++)if(t.room[h]!==d)for(let f=0;f<3;f++)l[h*3+f]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,u=0;for(let d=0;d<l.length/18;d++){let h=!1;for(let f=d*18;f<d*18+18&&!h;f++)h=l[f]>.004;if(h)for(let f=0;f<6;f++)c[u++]=d*6+f}s.index.needsUpdate=!0,s.setDrawRange(0,u),e.glowMesh.visible=u>0}makeMaterials(e){return{floor:hn(new it({vertexColors:!0}),this.themeUniform),pattern:rS(this.patternTexture),wall:hn(Qi(new it({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),e,"solid"),this.themeUniform),glassWall:Qi(new it({vertexColors:!0,transparent:!0,depthWrite:!1}),e,"glass"),shadow:new it({vertexColors:!0,blending:ls,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ht,polygonOffset:!0,polygonOffsetFactor:-1}),lines:hn(Qi(new Zt({vertexColors:!0,transparent:!0,blending:To(this.theme),depthWrite:!1}),e),this.themeUniform,!0),glow:Qi(new it({vertexColors:!0,transparent:!0,blending:Ft,depthWrite:!1,side:ht,polygonOffset:!0,polygonOffsetFactor:-3}),e,"solid"),frames:hn(Qi(new it({vertexColors:!0,side:ht}),e),this.themeUniform),glass:Qi(new it({vertexColors:!0,transparent:!0,blending:Ft,depthWrite:!1,side:ht}),e),blinds:hn(Qi(new it({map:this.blindTexture,vertexColors:!0,side:ht}),e),this.themeUniform),water:hn(new it({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:ht}),this.themeUniform),flow:sS(this.flowTime),solarLive:md(this.flowTime),lamps:hn(new it({vertexColors:!0}),this.themeUniform),halos:new ur({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Ft,depthWrite:!1}),cones:new it({vertexColors:!0,transparent:!0,blending:Ft,depthWrite:!1,side:ht}),screens:new it({vertexColors:!0,transparent:!0,blending:Ft,depthWrite:!1,side:ht})}}rebuild(){let e=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),t=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=$h(n)?.id===o.id?s.filter(W=>W.face===Zh).map(W=>({field:W,face:Jm(n,W)})):[],l=s.filter(W=>W.face.startsWith(`wall:${o.id}:`));if(l.length){let W=new Map($m(n,o.id).map(se=>[se.key,se]));for(let se of l){let he=W.get(se.face);he&&a.push({field:se,face:he})}}let u=(n.settings.roof.sections??[]).some(W=>fm(W,Wt(o)))?(W,se)=>{let he=pm(n,W,se);return he===null?null:he-o.elevation}:void 0,d=h0(fd(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,d0(n.floors,o),a,u),h={standing:{value:65535},glass:{value:0}},f=this.makeMaterials(h),p=new kt,_=new He(d.floor,f.floor),m=new He(d.shadow,f.shadow);m.renderOrder=1;let g=new He(d.floor,f.pattern);g.renderOrder=2;let w=new He(new Ke,f.glow);w.renderOrder=3,w.visible=!1;let y=new He(new Ke,f.frames),b=new He(new Ke,f.blinds),x=new He(new Ke,f.glass);x.renderOrder=4;let M=new He(new Ke,f.lamps);M.visible=!1;let A=new He(new Ke,f.cones);A.visible=!1,A.renderOrder=3;let v=new eo(new Ke,f.halos);v.visible=!1,v.renderOrder=7;let S=new He(new Ke,f.cones);S.visible=!1,S.renderOrder=7;let E=new He(new Ke,f.cones);E.visible=!1,E.renderOrder=7;let P=new He(new Ke,f.lamps);P.visible=!1;let C=new He(new Ke,f.lamps);C.visible=!1;let R=new He(new Ke,f.screens);R.visible=!1,R.renderOrder=5;let T=new He(new Ke,f.flow);T.renderOrder=5,T.frustumCulled=!1;let I=pd(a,o.elevation),F=I?new He(I.geometry,f.solarLive):null;F&&(F.renderOrder=6,qs(I,this.solarLevels));for(let W of[y,b,x])W.frustumCulled=!1;let z=new He(d.walls,f.glassWall),B=new He(d.walls,f.wall);z.renderOrder=6;let N=new He(d.water,f.water);N.renderOrder=4,p.add(_,m,g,w,B,N,new $t(d.lines,f.lines),y,b,x,T,M,A,v,S,E,P,C,R,z,...F?[F]:[]),this.root.add(p);let O=document.createElement("button");O.className="fp3d-pin fp3d-pin-floor",O.dataset.floor=o.id;let G=document.createElement("b");G.textContent=o.name||"\u2013";let $=document.createElement("span");$.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",O.append(G,$),O.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(O);let Z=e.get(o.id),ue=[],ne=null;for(let W of o.rooms){let se=document.createElement("button");se.className="fp3d-pin",se.dataset.room=W.id,se.dataset.floor=o.id,this.fillRoomPin(se,W.name,this.roomInfo.get(W.id)),se.addEventListener("click",()=>this.options.onRoomTap?.(o.id,W.id)),this.labels.append(se);let[he,ie]=Gi(W.points);ue.push({pin:se,room:W,cx:he,cz:ie});for(let[de,Oe]of W.points)ne??={x0:de,x1:de,z0:Oe,z1:Oe},ne.x0=Math.min(ne.x0,de),ne.x1=Math.max(ne.x1,de),ne.z0=Math.min(ne.z0,Oe),ne.z1=Math.max(ne.z1,Oe)}this.floors.push({floor:o,rank:r.indexOf(o),group:p,geo:d,floorMesh:_,shadowMesh:m,patternMesh:g,glowMesh:w,lightSurface:null,lightZones:null,framesMesh:y,glassMesh:x,blindsMesh:b,flowMesh:T,solarMesh:F,solarLive:I,lampMesh:M,sunMesh:A,sunSig:"",haloMesh:v,coneMesh:S,trailMesh:E,fridgeMesh:P,pipeMesh:C,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:B,screenMesh:R,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:ne,roomPins:ue,labelSize:null,materials:f,mask:h,openings:new Map,y:Z?.y??0,o:Z?.o??1,ty:0,to:1,appliedO:-1,label:O});let ae=this.customMemories.get(o.id)??new So;this.customMemories.set(o.id,ae);let H=new Bc(o,f.wall,()=>this.invalidate(),ae);p.add(H.group),this.customLayers.set(o.id,H),this.customContext&&H.update(this.customContext.hass,this.customContext.moment,this.building?.settings.pack_animations!==!1)}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o),this.buildPipes(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=t.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Zs);this.buildOpenings(o),this.buildFlows(o),o.poolGroup=void 0,this.buildPoolWater(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(e.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(m=>m.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.solar.dispose(),this.roof.solarLines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(m=>m.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let e=this.building?a0(this.building,this.roofWindows):[];if(!e.length)return;let t=new Map(Ji(this.building).map(m=>[m.key,m])),n=this.building.settings.roof?.solar??[],r=Rc(md(this.flowTime)),o=[],s=new kt,a=hn(m0(new it({vertexColors:!0,transparent:!0,side:ht,depthWrite:!1}),this.roofDirection),this.themeUniform),l=hn(new Zt({vertexColors:!0,transparent:!0,blending:To(this.theme),depthWrite:!1}),this.themeUniform,!0),c=hn(Rc(new it({vertexColors:!0,transparent:!0,side:ht})),this.themeUniform),u=hn(Rc(new Zt({vertexColors:!0,transparent:!0,blending:To(this.theme),depthWrite:!1})),this.themeUniform,!0),d=hn(new it({vertexColors:!0,transparent:!0,side:ht,depthWrite:!1}),this.themeUniform),h=new kt,f=hn(new it({vertexColors:!0,side:ht}),this.themeUniform),p=hn(new Zt({vertexColors:!0,transparent:!0,blending:To(this.theme),depthWrite:!1}),this.themeUniform,!0),_=e.map(m=>{let g=new kt,w=m.solid.geometry();if(w.computeVertexNormals(),g.add(new He(w,a),new $t(m.lines.geometry(),l)),m.solar){let{facing:M}=m.solar;g.add(new He(Os(m.solar.solid.geometry(),M.normals,M.points),c),new $t(Os(m.solar.lines.geometry(),M.lineNormals,M.linePoints),u))}m.glass.count&&g.add(new He(m.glass.geometry(),d));let y=n.flatMap(M=>{let A=t.get(M.face);return A&&(A.section?m.sections?.includes(A.section):m===e[0])?[{face:A,field:M}]:[]}),b=pd(y,m.floor.elevation+m.base);if(b){let M=new He(b.geometry,r);M.renderOrder=9,g.add(M),o.push(b),qs(b,this.solarLevels)}m.winRoof?.solid.count&&g.add(new He(m.winRoof.solid.geometry(),f),new $t(m.winRoof.lines.geometry(),p)),g.renderOrder=8,s.add(g);let x=null;return m.win?.solid.count&&(x=new kt,x.add(new He(m.win.solid.geometry(),f),new $t(m.win.lines.geometry(),p)),h.add(x)),{group:g,floorId:m.floor.id,rideId:vm(this.building,m.floor,m.sections??[]),base:m.base,lift:m.lift!==!1,win:x}});s.renderOrder=8,this.scene.add(s),this.scene.add(h),this.roof={group:s,parts:_,solid:a,lines:l,solar:c,solarLines:u,glass:d,live:r,lives:o,wins:h,winSolid:f,winLines:p},this.placeRoof()}placeRoof(e=1e3){let t=this.roof;if(!t)return!1;let r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?Dc(this.controls.view.radius,this.houseRadius,this.keepRoof).opacity:0,o=1-Math.exp(-e/eg),s=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),t.group.visible=this.roofO>.02;for(let a of t.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=this.floorMap.get(a.rideId)??l,u=c.ty>0?Math.min(1,c.y/c.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+c.y+a.base+Dc(this.controls.view.radius,this.houseRadius,this.keepRoof,this.roofO).lift+(a.lift?u*Q0:0),a.win&&(a.win.position.y=l.floor.elevation+c.y+a.base+(a.lift?u*Q0:0),a.win.visible=l.group.visible&&l.o>.5&&this.wallMode!=="cut")}return t.solid.opacity=this.roofO,t.solid.depthWrite=!1,t.lines.opacity=this.roofO,t.solar.opacity=this.roofO,t.solar.depthWrite=this.roofO>.9,t.solarLines.opacity=this.roofO,t.glass.opacity=this.roofO*.28,t.live.opacity=this.roofO,this.roofO!==s&&this.roofO!==r}applyTierFlags(){let e=this.lowQuality;this.ground.visible=!e&&this.theme!=="day"&&this.floors.some(t=>t.floor.rooms.length>0);for(let t of this.floors)t.patternMesh.visible=!e,t.shadowMesh.visible=!e&&t.o>.98;this.invalidate()}rebuildTier(){for(let e of this.floors)e.flowLayout="",this.buildFlows(e),this.buildLightSurface(e),e.lampShapeSig="",this.buildLamps(e)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(e){let t=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;t?n.rank>t.rank?(r=5+n.rank,o=0):n.rank<t.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:qM)):r=this.explode?n.rank*YM:0,n.ty=r,n.to=o,e&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(e){if(e.group.position.y=e.floor.elevation+e.y,e.group.visible=e.o>.02,e.shadowMesh.visible=e.o>.98&&!this.lowQuality,Math.abs(e.appliedO-e.o)<.001)return;e.appliedO=e.o;let t=e.materials,n=e.o>.999;for(let r of[t.floor,t.wall,t.frames,t.blinds,t.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=e.o;t.pattern.opacity=e.o,t.glow.opacity=e.o,t.lines.opacity=e.o,t.glass.opacity=e.o,t.glassWall.opacity=e.o,t.flow.opacity=e.o,t.solarLive.opacity=e.o,t.lamps.opacity=e.o,t.halos.opacity=e.o,t.cones.opacity=e.o,t.screens.opacity=e.o;for(let r of e.screenPics.values()){let o=r.mesh.material;o.transparent=e.o<.999,o.opacity=e.o}}stepFloors(e){let t=!1,n=1-Math.exp(-e/eg);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,t=!0,this.applyFloor(r)}return t}stepOpenings(e){let t=!1,n=1-Math.exp(-e/160);for(let r of this.floors){let o=!1;for(let[s,a]of r.openings){let l=this.openingTargets.get(s)??Zs,c=(h,f)=>(h??null)===(f??null)||typeof h=="number"&&typeof f=="number"&&Math.abs(h-f)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},d=!1;for(let h of["open","open2","tilt","tilt2"]){let f=l[h]??0,p=a[h]??0,_=f-p;Math.abs(_)<.003?u[h]=f:(u[h]=p+_*n,d=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let h=l.cover-a.cover;Math.abs(h)<.003?u.cover=l.cover:(u.cover=a.cover+h*n,d=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(s,u),o=!0),t||=d}o&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return t}glowOf(e){if(!e.glow||!e.effect)return e.glow;let t=new Q(...e.glow.color),n={h:0,s:0,l:0};t.getHSL(n);let r=(e.x*.37+e.z*.61)%1;return t.setHSL((n.h+this.effectTime*QM+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[t.r,t.g,t.b],level:e.glow.level}}buildLamps(e){let t=performance.now(),n=u=>{let d=this.flashes.get(u);if(!d||d<=t)return 0;let h=d-t,f=h>Wc?.5+.5*Math.sin(h/140):h/Wc;return Math.round(f*10)/10},r=this.devices.filter(u=>u.floorId===e.floor.id&&(u.lamp||u.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.rotation_x??0},${u.rotation_z??0},${u.pivot_y??""},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.top??""},${u.pack??""},${u.mirror?1:0}`).join(";"),s=r.map(u=>this.glowOf(u)),a=r.map((u,d)=>`${n(u.id)},${s[d]?`${s[d].level.toFixed(3)},${s[d].color.map(h=>h.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==e.lampShapeSig||!e.lampMesh.geometry.getAttribute("position")){e.lampShapeSig=o,e.lampColorSig="";let u=new ot,d=[],h=[],f=new Map,p=e.floor.height;for(let _ of r){let m=_.lamp==="strip"?(_.base??p)>Math.min(e.floor.cut_height,p):_.lamp?Sd.has(_.lamp)&&(_.top??p)>Math.min(e.floor.cut_height,p):_.model==="camera_ceiling";if(!_.lamp&&!_.model||m&&this.wallMode==="cut")continue;let g=u.count,w=e.floor.furniture.find(A=>A.id===_.furnitureId),y=_.pack?_r(w??{type:_.pack}):void 0,[b,x,M]=_.size??[.3,.3,.3];_.model?qm(u,_.model,_.x,_.model==="camera_ceiling"?_.top??p:_.y,_.z,_.rotation??0):y?wc(u,y,{x:_.x,z:_.z,rotation:_.rotation??0,rotation_x:_.rotation_x,rotation_z:_.rotation_z,w:b,d:x,h:M,mirror:_.mirror},_.base??0,65280):yd(u,{..._,lamp:_.lamp},_.top??p,65280),f.set(_.furnitureId??_.id,{start:g,end:u.count}),_.pickable!==!1&&d.push({id:_.id,start:g,end:u.count}),_.furnitureId&&h.push({id:_.furnitureId,start:g,end:u.count})}e.lampTris=d,e.lampFurnTris=h,e.lampRanges=f,e.lampShade=Bp(u.c),e.lampMesh.geometry.dispose(),e.lampMesh.geometry=u.geometry(),e.lampMesh.visible=u.count>0}if(a===e.lampColorSig)return;e.lampColorSig=a;let l=e.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,d)=>{let h=e.lampRanges.get(u.furnitureId??u.id);if(!h)return;let f=s[d],p=f?.55+.45*f.level:0,_=f?new Q(...f.color.map(w=>Math.min(1,w*p))):new Q(JM),m=n(u.id);m>0&&_.lerp(new Q(1,1,1),.7*m);let g=new Q(_.getHex());Op(c,e.lampShade,h,[g.r,g.g,g.b])}),l.needsUpdate=!0,this.buildHalos(e)}buildSun(e){let t=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*ft,r=this.weather?.cloud??0,o=og(e.floor,e.geo.openRooms),s=t?`${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...e.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===e.sunSig)return;e.sunSig=s;let a=new ot;if(t&&t.elevation>2&&r<.97){let l=Math.min(1,t.elevation/12)*(1-.8*r),c=t.elevation*ft,u=t.azimuth*ft,d=[Math.sin(n+u),-Math.cos(n+u)],h=1/Math.tan(c);for(let f of e.geo.openings){if(f.opening.type!=="window"||!f.exterior)continue;let p=e.floor.rooms.find(R=>R.id===f.opening.room_id);if(!p||p.points.length<3)continue;let _=pt(e.floor,p),m=[-f.toRoom[0],-f.toRoom[1]],g=m[0]*d[0]+m[1]*d[1];if(g<.05)continue;let w=e.openings.get(f.opening.id),y=f.top-(w?.cover??0)*(f.top-f.sill);if(y-f.sill<.05)continue;let b=(R,T)=>{let I=Math.min(7,(T-_)*h);return[f.start[0]+f.axis[0]*R+f.toRoom[0]*f.faceRoom-d[0]*I,_+.02,f.start[1]+f.axis[1]*R+f.toRoom[1]*f.faceRoom-d[1]*I]},x=.14*l*Math.min(1,g*1.5),M=new Q(1*x,.82*x,.55*x),A=M.clone().multiplyScalar(.45),v=e.floor.rooms.findIndex(R=>R.id===f.opening.room_id);if(v<0||e.floor.rooms[v].points.length<3)continue;let S=o[v],E=e.floor.rooms.filter((R,T)=>o[T]===S&&Math.abs(pt(e.floor,R)-_)<.001&&R.points.length>=3).map(R=>R.points),P=Math.max(1,Math.ceil(Math.min(7,(y-_)*h)/.25)),C=Math.max(1,Math.ceil(f.width/.3));for(let R=0;R<P;R++){let T=f.sill+(y-f.sill)*R/P,I=f.sill+(y-f.sill)*(R+1)/P,F=R/P,z=(R+1)/P,B=M.clone().lerp(A,F),N=M.clone().lerp(A,z);for(let O=0;O<C;O++){let G=f.width*O/C,$=f.width*(O+1)/C,Z=b((G+$)/2,(T+I)/2);if(!E.some(W=>Ge([Z[0],Z[2]],W)))continue;let ue=b(G,T),ne=b($,T),ae=b($,I),H=b(G,I);a.tri(ue,ne,ae,B,B,N),a.tri(ue,ae,H,B,N,N)}}}this.pushRoofSun(e,a,o)}e.sunMesh.geometry.dispose(),e.sunMesh.geometry=a.geometry(),e.sunMesh.visible=a.count>0}pushRoofSun(e,t,n){this.sun&&this.building&&g0(t,this.building,e.floor,this.sun,this.weather?.cloud??0,this.roofWindows,e.geo.holes,n)}buildHalos(e){if(this.lowQuality){e.haloMesh.visible=!1,e.coneMesh.visible=!1;return}let t=e.floor.height,n=[],r=[],o=new ot,s=[];for(let l of this.devices){if(l.model&&l.floorId===e.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let b=(l.rotation??0)*ft,x=[-Math.sin(b),Math.cos(b)],M=l.model==="camera_ceiling",A=l.reach??(M?3:4.5),v=(l.fov??(M?360:90))*ft/2,S=l.motion?new Q(.9,.12,.16):new Q(.04,.22,.28),E=new Q(0,0,0),P=Math.max(4,Math.round(v/.15)),C=pn(e.floor,l.x,l.z)+.015,R=e.geo.walls2d,T=N=>{let O=N.b[0]-N.a[0],G=N.b[1]-N.a[1],$=O*O+G*G||1,Z=Math.max(0,Math.min(1,((l.x-N.a[0])*O+(l.z-N.a[1])*G)/$));return Math.hypot(l.x-(N.a[0]+O*Z),l.z-(N.a[1]+G*Z))},I=null;for(let N of R)T(N)<.45&&(!I||T(N)<T(I))&&(I=N);let F=N=>{let O=x[0]*Math.cos(N)-x[1]*Math.sin(N),G=x[1]*Math.cos(N)+x[0]*Math.sin(N),$=A;for(let Z of R){let ue=Z.b[0]-Z.a[0],ne=Z.b[1]-Z.a[1],ae=O*ne-G*ue;if(Math.abs(ae)<1e-9)continue;let H=((Z.a[0]-l.x)*ne-(Z.a[1]-l.z)*ue)/ae,W=((Z.a[0]-l.x)*G-(Z.a[1]-l.z)*O)/ae;Z===I&&H<=.45||H>.02&&H<$&&W>=0&&W<=1&&($=H)}return $},z=N=>{let O=F(N);return[l.x+(x[0]*Math.cos(N)-x[1]*Math.sin(N))*O,C,l.z+(x[1]*Math.cos(N)+x[0]*Math.sin(N))*O]},B=o.count;for(let N=0;N<P;N++)o.tri([l.x,C,l.z],z(-v+2*v*(N+1)/P),z(-v+2*v*N/P),S,E,E);s.push({id:l.id,start:B,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==e.floor.id||!l.lamp||!c||Sd.has(l.lamp)&&this.wallMode==="cut"&&(l.top??t)>Math.min(e.floor.cut_height,t))continue;let u=l.top??t,[d,h,f]=l.size??Kc[l.lamp],p=l.base??0,_=n.length,m=o.p.length,g=(l.rotation??0)*ft,w={ceiling:u-.07,downlight:u-.03,spot:u-f,panel:u-.03,pendant:Math.max(p+.4,u-f)+.08,floor:p+f-.15,uplight:p+f,table:p+f-.09,wall:p+f/2,strip:p+Math.max(.02,f)-.01,bollard:p+f-.08,garden:p+f-.03}[l.lamp],y=(b,x,M=1)=>{n.push(b,w,x),r.push(...c.color.map(A=>A*c.level*.7*M))};if(l.lamp==="strip")for(let b of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,p+d*(.5+b),l.z),r.push(...c.color.map(x=>x*c.level*.7*.6))):y(l.x+Math.cos(g)*d*b,l.z+Math.sin(g)*d*b,.6);else l.lamp==="wall"?y(l.x-Math.sin(g)*(h/2+.05),l.z+Math.cos(g)*(h/2+.05)):y(l.x,l.z);Pn(n,_,l,Xc(l,t)),Pn(o.p,m,l,Xc(l,t))}if(this.highQuality)for(let l of this.lightSources(e))F0(o,l,e.floor,e.lightSurface?.blockers??[],Uc(e.floor,e.geo.roofUnder));let a=new Ke;a.setAttribute("position",new Te(n,3)),a.setAttribute("color",new Te(r,3)),e.haloMesh.geometry.dispose(),e.haloMesh.geometry=a,e.haloMesh.visible=n.length>0,e.coneMesh.geometry.dispose(),e.coneMesh.geometry=o.geometry(),e.coneMesh.visible=o.count>0,e.coneTris=s}buildScreens(e){let t=fd(e.floor,this.parked).furniture.filter(o=>this.screens.has(o.id)),n=t.map(o=>`${o.id}:${o.x},${o.z},${o.rotation},${o.rotation_x??0},${o.rotation_z??0},${o.w},${o.d},${o.h},${o.mount_y??""},${o.mirror?1:0}:${JSON.stringify(this.screens.get(o.id))}`).join(";");if(n===e.screenSig&&e.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(e,t);e.screenSig=n;let r=new ot;for(let o of t){let s=this.screens.get(o.id),a=o.rotation*ft,l=Math.cos(a),c=Math.sin(a),u=fo(o,Ct(e.floor,o)+o.h/2),d=(x,M,A)=>u(o.x+x*l-A*c,M,o.z+x*c+A*l);if(s.faces){let x=Math.max(.05,o.w)*(o.mirror?-1:1),M=Math.max(.05,o.d),A=Math.max(.005,o.h),v=Ct(e.floor,o);for(let S of s.faces){if(S.part==="lights"){let O=_t(o.type),G=$=>["#e8f4ff","#ff3b4f"].includes($.color.toLowerCase());if(O&&O.parts.some(G)){let $=new Q(...S.color.map(Z=>Math.min(1,Z*(.4+.6*S.level))));Ns(r,O,o,v,$.getHex(),G)}continue}if(S.part==="cabin"){let O=_t(o.type),G=$=>$.color.toLowerCase()==="#13283a"||$.color==="glass";if(O&&O.parts.some(G)){let $=new Q(...S.color.map(Z=>Math.min(1,Z*(.3+.5*S.level))));Ns(r,O,o,v,$.getHex(),G);continue}}if(S.part==="burners"&&_t(o.type)){let O=_t(o.type),G=new Q(...S.color.map($=>Math.min(1,$*(.25+.6*S.level))));Ns(r,O,o,v,G.getHex(),Up);continue}if(S.part==="burners"){let O=new Q(...S.color.map($=>Math.min(1,$*(.25+.6*S.level)))),G=v+A+.008;for(let[$,Z,ue]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let ne=$*Math.abs(x)/.6,ae=Z*M/.62,H=14;for(let W=0;W<H;W++){let se=W/H*Math.PI*2,he=(W+1)/H*Math.PI*2;r.tri(d(ne,G,ae),d(ne+Math.cos(se)*ue,G,ae+Math.sin(se)*ue),d(ne+Math.cos(he)*ue,G,ae+Math.sin(he)*ue),O)}}continue}if(S.part==="band"||S.part==="cabin"){let O=S.part==="cabin",G=v+A*(O?.6:.42),$=O?v+A*.86:G+.07,Z=new Q(...S.color.map(H=>Math.min(1,H*(.3+.45*S.level)))),ue=Math.abs(x)/2+(O?.012:.02),ne=M/2+(O?.012:.02),ae=[[-ue,-ne],[ue,-ne],[ue,ne],[-ue,ne]];for(let H=0;H<4;H++){let W=ae[H],se=ae[(H+1)%4],he=d(W[0]*Math.sign(x),G,W[1]),ie=d(se[0]*Math.sign(x),G,se[1]),de=d(se[0]*Math.sign(x),$,se[1]),Oe=d(W[0]*Math.sign(x),$,W[1]);r.tri(he,ie,de,Z),r.tri(he,de,Oe,Z)}continue}let E=S.part==="right"?.03:-Math.abs(x)/2+.03,P=S.part==="left"?-.03:Math.abs(x)/2-.03,C=v+(S.part==="bottom"?A*.45:A)+.006,R=new Q(...S.color.map(O=>Math.min(1,O*(.35+.65*S.level)))),T=new Q(0,0,0),I=(O,G,$=C)=>d(O*Math.sign(x),$,G),F=[I(E,-M/2+.03),I(P,-M/2+.03),I(P,M/2-.03),I(E,M/2-.03)];r.tri(F[0],F[2],F[1],R),r.tri(F[0],F[3],F[2],R);let z=.12+.1*S.level,B=R.clone().multiplyScalar(.5),N=[I(E-z,-M/2-z,C+.004),I(P+z,-M/2-z,C+.004),I(P+z,M/2+z,C+.004),I(E-z,M/2+z,C+.004)];for(let O=0;O<4;O++){let G=(O+1)%4;r.tri(F[O],N[G],N[O],B,T,T),r.tri(F[O],F[G],N[G],B,B,T)}}continue}let h=_t(o.type);if(h&&!h.light&&s.ring&&h.parts.some(x=>x.glow)){let x=new Q(...s.color.map(M=>Math.min(1,M*(.45+.55*s.level))));Ns(r,h,o,Ct(e.floor,o),x.getHex())}let f=Kh(o,e.floor);if(!f)continue;let p=new Q(...s.color.map(x=>Math.min(1,x*(.35+.65*s.level)))),_=new Q(0,0,0),m=f.z+.004;if(r.tri(d(f.x0,f.y0,m),d(f.x1,f.y0,m),d(f.x1,f.y1,m),p),r.tri(d(f.x0,f.y0,m),d(f.x1,f.y1,m),d(f.x0,f.y1,m),p),s.plain)continue;let g=.18+.12*s.level,w=p.clone().multiplyScalar(.5),y=[d(f.x0,f.y0,m),d(f.x1,f.y0,m),d(f.x1,f.y1,m),d(f.x0,f.y1,m)],b=[d(f.x0-g,f.y0-g,m+.01),d(f.x1+g,f.y0-g,m+.01),d(f.x1+g,f.y1+g,m+.01),d(f.x0-g,f.y1+g,m+.01)];for(let x=0;x<4;x++){let M=(x+1)%4;r.tri(y[x],b[x],b[M],w,_,_),r.tri(y[x],b[M],y[M],w,_,w)}}e.screenMesh.geometry.dispose(),e.screenMesh.geometry=r.geometry(),e.screenMesh.visible=r.count>0,this.updateScreenPictures(e,t)}updateScreenPictures(e,t){let n=new Map(t.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of e.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(e.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),e.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=Kh(o,e.floor);if(!a)continue;let l=e.screenPics.get(r);if(!l){let c=new He(new On(1,1),new it({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},e.screenPics.set(r,l),e.group.add(c);let u=l;new rs().load(s.picture,d=>{if(e.screenPics.get(r)!==u){d.dispose();return}d.colorSpace=Nt,u.texture=d;let h=u.mesh.material;h.map=d,h.needsUpdate=!0,this.placeScreenPicture(u.mesh,o,a,d,Ct(e.floor,o)+o.h/2),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture,Ct(e.floor,o)+o.h/2)}}placeScreenPicture(e,t,n,r,o){let s=r.image,a=s?.width&&s?.height?s.width/s.height:16/9,l=n.x1-n.x0-.04,c=n.y1-n.y0-.04,u=Math.min(l,c*a),d=u/a,h=t.rotation*ft,f=(n.x0+n.x1)/2,p=n.z+.008;e.scale.set(u,d,1),e.rotation.set((t.rotation_x??0)*ft,-h,(t.rotation_z??0)*ft,"YZX");let _=fo(t,o);e.position.set(..._(t.x+f*Math.cos(h)-p*Math.sin(h),(n.y0+n.y1)/2,t.z+f*Math.sin(h)+p*Math.cos(h)))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(e){let t=this.flows.filter(u=>u.floorId===e.floor.id).map(wd).join(";"),n=[],r=[],o=[],s=[],a=[];for(let u of this.flows){if(u.floorId!==e.floor.id)continue;let d=this.flowPhase.get(wd(u))??{speed:rg(u.power),offset:0},h=u.power>.5?Math.min(1,.5+u.power/2500):.22,f=u.color.map(w=>w*h),p=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(p<1e-4)continue;let _=[(u.b[0]-u.a[0])/p,(u.b[1]-u.a[1])/p,(u.b[2]-u.a[2])/p],m=[];if(Math.abs(_[1])<.5){let w=Math.hypot(_[0],_[2])||1;m.push([-_[2]/w,0,_[0]/w])}else m.push([1,0,0],[0,0,1]);let g=this.lowQuality?[[ng*1.4,1]]:[[$M,.25],[ng,1]];for(let[w,y]of g)for(let b of m){let x=w/2,M=(v,S)=>[v[0]+b[0]*x*S,v[1]+b[1]*x*S,v[2]+b[2]*x*S],A=[[M(u.a,-1),u.dist,0],[M(u.b,-1),u.dist+p,0],[M(u.b,1),u.dist+p,1],[M(u.a,1),u.dist,1]];for(let v of[0,1,2,0,2,3]){let[S,E,P]=A[v];n.push(S[0],S[1],S[2]),r.push(f[0]*y,f[1]*y,f[2]*y),o.push(E,P),s.push(d.speed),a.push(d.offset)}}}let l=e.flowMesh.geometry;if(t===e.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,d]of[["color",r],["flowSpeed",s],["flowOffset",a]]){let h=l.getAttribute(u);h.array.set(d),h.needsUpdate=!0}e.flowMesh.visible=n.length>0;return}e.flowLayout=t;let c=new Ke;c.setAttribute("position",new Te(n,3)),c.setAttribute("color",new Te(r,3)),c.setAttribute("uv",new Te(o,2)),c.setAttribute("flowSpeed",new Te(s,1)),c.setAttribute("flowOffset",new Te(a,1)),e.flowMesh.geometry.dispose(),e.flowMesh.geometry=c,e.flowMesh.visible=n.length>0}buildOpenings(e){let t=W0(e.geo.openings,e.openings,Math.min(e.floor.cut_height,Wt(e.floor)-e.floor.elevation),this.productColors);e.frameTris=t.frameTris,e.glassTris=t.glassTris,e.blindTris=t.blindTris;for(let[n,r]of[[e.framesMesh,t.frames],[e.glassMesh,t.glass],[e.blindsMesh,t.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(e=>e.to>.99)}applyHighlight(){for(let e of this.floors){let t=e.geo.floor.getAttribute("color");for(let n of e.geo.roomTris){let r=new Q(n.color),o=this.roomTint?.get(n.roomId);o&&r.lerp(new Q(...o).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(eS,o?.3:.75);for(let s=n.start*3;s<n.end*3;s++)t.setXYZ(s,r.r,r.g,r.b)}t.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".fp3d-pin"))e.classList.toggle("fp3d-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(e){let t=new cn;for(let d of this.activeFloors()){let h=d.floor.elevation+d.ty;for(let f of d.floor.rooms)for(let[p,_]of f.points)t.expandByPoint(new U(p,h+pt(d.floor,f),_)),t.expandByPoint(new U(p,h+Wt(d.floor)-d.floor.elevation,_))}t.isEmpty()&&t.set(new U(-4,0,-4),new U(4,2.5,4)),this.placeGround(),this.weatherBox={x0:t.min.x-6,x1:t.max.x+6,z0:t.min.z-6,z1:t.max.z+6,y0:t.min.y,y1:t.max.y+6},this.applyWeather(),this.placeSky();let n=t.getCenter(new U),r=t.getSize(new U),o=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=t.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;if(u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.keepNext){this.keepNext=!1;let d=this.controls.view;this.controls.flyTo({target:new U(d.target.x,n.y,d.target.z),radius:d.radius,phi:d.phi,theta:d.theta},e);return}this.controls.flyTo({target:n,radius:c?l.radius:o,phi:l?l.phi:.85,theta:l?l.theta:-.6},e)}placeGround(){let e=new cn,t=1/0;for(let s of this.floors){t=Math.min(t,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)e.expandByPoint(new U(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)e.expandByPoint(new U(l,0,c))}if(this.ground.visible=!e.isEmpty()&&!this.lowQuality&&this.theme!=="day",e.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=lS();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=e.getCenter(new U),r=e.getSize(new U),o=Md*Math.ceil((Math.max(r.x,r.z)+16)/Md);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,t-ji-.02,n.z)}distanceFor(e){let t=this.camera.fov*ft,n=2*Math.atan(Math.tan(t/2)*this.camera.aspect);return e.length()/2/Math.sin(Math.min(t,n)/2)}rayAt(e,t){let n=this.renderer.domElement.getBoundingClientRect(),r=new ss;return r.setFromCamera(new Ee(e/n.width*2-1,-(t/n.height)*2+1),this.camera),r}pick(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=l=>this.customLayers.get(l.floor.id)?.meshes()??[],s=r.flatMap(l=>[l.lampMesh,l.coneMesh,l.framesMesh,l.glassMesh,l.blindsMesh,l.wallMesh,l.floorMesh,...o(l)].filter(c=>c.visible)),a=(l,c)=>l.find(u=>c>=u.start&&c<u.end)?.id;for(let l of n.intersectObjects(s,!1)){if(l.faceIndex==null)continue;let c=l.faceIndex,u=r.find(d=>d.group===l.object.parent||o(d).includes(l.object));if(l.object.userData.furnitureId){if(this.wallMode==="cut"&&l.point.y>u.group.position.y+u.floor.cut_height)continue;let d=this.pickFurniture.get(String(l.object.userData.furnitureId));if(d)return{entity:d};continue}if(l.object===u.lampMesh||l.object===u.coneMesh){let d=a(l.object===u.lampMesh?u.lampTris:u.coneTris,c);if(d)return{entity:d}}else if(l.object===u.framesMesh||l.object===u.blindsMesh||l.object===u.glassMesh){if(this.wallMode==="cut"&&l.face){let f=l.object.geometry.getAttribute("fold")?.getX(l.face.a)??Ze;if(f!==Ze&&Math.floor(f/16)===0)continue}let d=a(l.object===u.framesMesh?u.frameTris:l.object===u.glassMesh?u.glassTris:u.blindTris,c),h=d?this.pickOpenings.get(d):void 0;if(h)return{entity:h}}else if(l.object===u.wallMesh){let d=a(u.geo.furnitureTris,c),h=d?this.pickFurniture.get(d):void 0;if(h)return{entity:h};if(l.face&&!d){let f=u.wallMesh.geometry.getAttribute("fold")?.getX(l.face.a)??32,p=Math.floor(f/16),_=f%16,m=this.wallMode==="cut"&&p===0,g=(u.mask.glass.value&1<<_)!==0;if(!m){let w=n.ray.direction,y=Math.hypot(w.x,w.z)||1,b=[l.point.x-w.x/y*.3,l.point.z-w.z/y*.3],x=u.floor.rooms.find(M=>M.points.length>=3&&Ge(b,M.points))?.id??null;if(this.roomId!==null){if(x===this.roomId)return{floorId:u.floor.id,roomId:x}}else if(!g&&x)return{floorId:u.floor.id,roomId:x}}}}else if(l.object===u.floorMesh)return{floorId:u.floor.id,roomId:a(u.geo.roomTris.map(d=>({id:d.roomId,start:d.start,end:d.end})),c)??null}}return null}onTap(e,t){let n=this.pick(e,t);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Wc),this.invalidate(),this.options.onDeviceTap?.(n.entity,e,t);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh),...this.customLayers.get(a.floor.id)?.meshes()??[]],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(d=>d.group===a.object.parent||o(d).includes(a.object));if(!l)continue;if(a.object.userData.furnitureId){if(this.wallMode==="cut"&&a.point.y>l.group.position.y+l.floor.cut_height)continue;return{fv:l,id:String(a.object.userData.furnitureId),y:a.point.y}}if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let d=this.furnitureNear(l,a.point.x,a.point.z);if(d)return{fv:l,id:d,y:a.point.y};continue}let u=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(d=>a.faceIndex>=d.start&&a.faceIndex<d.end)?.id;if(u)return{fv:l,id:u,y:a.point.y}}return null}furnitureNear(e,t,n){let r=null;for(let o of e.floor.furniture){let s=o.rotation*ft,a=t-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,u=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,d=Math.max(c,u);d<.25&&(!r||d<r.d)&&(r={id:o.id,d})}return r?.id??null}floorPoint(e,t,n,r){let o=this.rayAt(t,n),s=r??e.floor.elevation+e.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(e){this.furnishTypes=e?new Set(e):null}setSurfaceGrab(e){this.surfaceGrab=e}pointerRay(e,t){return this.surfaceRay(e,t)}furnitureIdAt(e,t){return this.furnitureAt(e,t)?.id??null}surfaceRay(e,t){let n=this.rayAt(e,t).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(e,t){if(this.surfaceGrab?.start(this.surfaceRay(e,t)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(d=>d.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(e,t),l=s??a?.id,c=l?this.floors.find(d=>d.floor.furniture.some(h=>h.id===l)):void 0,u=c?.floor.furniture.find(d=>d.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,e,t)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,e,t):this.grabItem(a,s,e,t)}let o=this.furnitureAt(e,t);if(!o){let s=this.pick(e,t);return s&&"entity"in s?this.grabDevice(s.entity,e,t):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,e,t,o.y)}grabItem(e,t,n,r,o){let s=e.floor.furniture.find(d=>d.id===t),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(e,n,r,a);if(!s||!l)return!1;let c,u=this.rayAt(n,r).ray.direction;if(o!==void 0&&-u.y<.34){let d=this.camera.position,h=this.camera.getWorldDirection(new U),f=Math.hypot(h.x,h.z)||1,p=[h.x/f,h.z/f],_=Math.hypot(l[0]-d.x,l[1]-d.z,(a??0)-d.y),m=this.renderer.domElement.getBoundingClientRect().height||1,g=2*_*Math.tan(this.camera.fov*Math.PI/360)/m;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-p[1],p[0]],fwd:p,perPx:g,gain:Math.min(2,1/Math.max(.5,-u.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:e.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(e,t,n){let r=this.devices.find(a=>a.id===e),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,t,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(e),this.options.onDeviceSelect?.(e),!1):(this.deviceGrab={id:e,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(e),this.options.onDeviceSelect?.(e),!0)}setSelectedDevice(e){e!==this.selectedDevice&&this.selectDevice(e)}selectDevice(e){e&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=e;for(let[t,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",t===e)}dragFurniture(e,t){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(e,t));return}let n=this.deviceGrab;if(n){let h=this.floorMap.get(n.floorId),f=this.devices.find(m=>m.id===n.id),p=h&&this.floorPoint(h,e,t);if(!h||!f||!p)return;let _=this.building?.settings.grid??.05;n.x=f.x=Math.round((p[0]+n.offset[0])/_)*_,n.z=f.z=Math.round((p[1]+n.offset[1])/_)*_,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=r.screen,a;if(s){let h=(e-s.x0)*s.perPx,f=(t-s.y0)*s.perPx*s.gain;a=[s.fx+s.right[0]*h-s.fwd[0]*f-r.offset[0],s.fz+s.right[1]*h-s.fwd[1]*f-r.offset[1]]}else a=this.floorPoint(o,e,t,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=o.floor.furniture.find(h=>h.id===r.id),u=Math.round((a[0]+r.offset[0])/l)*l,d=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?om(o.floor,c,u,d,this.building?.settings.wall_interior??0):[u,d],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let e=this.deviceGrab;this.deviceGrab=null,e?.moved&&this.options.onDeviceMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3);let t=this.grab;this.grab=null,t?.moved&&this.options.onFurnitureMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let e=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],t=new zt,n;for(let r of e){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(t,o,s,r===this.selectedFurniture?new Q(.25,.9,1):new Q(1,.71,.28)))}n&&(this.ghost=new $t(t.geometry(),new Zt({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(e,t,n,r){let o=e.p.length,s=this.grab?.id===n.id?this.grab.x:n.x,a=this.grab?.id===n.id?this.grab.z:n.z,l=po(t.floor,n.x,n.z),c=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,u=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),d=n.mount_y!=null||_t(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Ct(t.floor,n):c?n.type==="lamp_pendant"?l-n.h-.1:l-u:Ct(t.floor,n),h=n.rotation*ft,f=Math.cos(h),p=Math.sin(h),_=(y,b,x)=>[s+y*f-b*p,x,a+y*p+b*f],m=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let y=0;y<4;y++){let[b,x]=m[y],[M,A]=m[(y+1)%4];e.seg(_(b,x,d+.01),_(M,A,d+.01),r),e.seg(_(b,x,d+u),_(M,A,d+u),r),e.seg(_(b,x,d+.01),_(b,x,d+u),r)}e.seg(_(-n.w/2,n.d/2+.03,d+.02),_(n.w/2,n.d/2+.03,d+.02),new Q(1,1,1));let g={...n,x:s,z:a},w=d+n.h/2;if(n.type==="led_strip"&&(Pn(e.p,o,{...g,rotation_x:n.tilt,rotation_z:n.upright?90:0},w),n.upright)){let y=n.w/2-n.h/2;for(let b=o+1;b<e.p.length;b+=3)e.p[b]+=y;w+=y}Pn(e.p,o,g,w)}onHold(e,t){let n=this.pick(e,t);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,e,t)}swipeStart(e,t,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(e,t);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,e,t)!==!0?!1:(this.swipe={entity:o.entity,x:e,y:t},!0)}floorThumbnails(e=200,t=150){let n=this.floors.filter(g=>g.floor.rooms.some(w=>w.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(e*r),s=Math.round(t*r),a=new rn(o,s);a.texture.colorSpace=Nt;let l=new Qn(-1,1,1,-1,.1,400),c=this.floors.map(g=>({fv:g,visible:g.group.visible,y:g.y,o:g.o,standing:g.mask.standing.value,glass:g.mask.glass.value})),u=this.roof?.group.visible??!1,d=this.ghost?.visible??!1,h=this.renderer.getClearAlpha(),f=new Uint8Array(o*s*4),p=document.createElement("canvas");p.width=o,p.height=s;let _=p.getContext("2d"),m=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let g of n){for(let R of this.floors)R.group.visible=R===g;g.y=0,g.o=1,this.applyFloor(g),g.group.visible=!0,g.mask.standing.value=0,g.mask.glass.value=0;let w=g.floor.rooms.flatMap(R=>R.points),y=g.floor.elevation,b=new cn(new U(Math.min(...w.map(R=>R[0]))-.3,y,Math.min(...w.map(R=>R[1]))-.3),new U(Math.max(...w.map(R=>R[0]))+.3,y+Math.min(g.floor.cut_height,g.floor.height),Math.max(...w.map(R=>R[1]))+.3)),x=b.getCenter(new U),M=-.6,A=.8,v=new U(Math.sin(A)*Math.sin(M),Math.cos(A),Math.sin(A)*Math.cos(M));l.position.copy(x).addScaledVector(v,100),l.lookAt(x),l.updateMatrixWorld();let S=.5,E=.5;for(let R of[b.min.x,b.max.x])for(let T of[b.min.y,b.max.y])for(let I of[b.min.z,b.max.z]){let F=new U(R,T,I).applyMatrix4(l.matrixWorldInverse);S=Math.max(S,Math.abs(F.x)),E=Math.max(E,Math.abs(F.y))}let P=o/s;S/E>P?E=S/P:S=E*P,l.left=-S*1.05,l.right=S*1.05,l.top=E*1.05,l.bottom=-E*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,f);let C=_.createImageData(o,s);for(let R=0;R<s;R++)C.data.set(f.subarray((s-1-R)*o*4,(s-R)*o*4),R*o*4);_.putImageData(C,0,0),m.push({floorId:g.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(h);for(let g of c)g.fv.y=g.y,g.fv.o=g.o,g.fv.mask.standing.value=g.standing,g.fv.mask.glass.value=g.glass,this.applyFloor(g.fv),g.fv.group.visible=g.visible;this.roof&&(this.roof.group.visible=u,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=d),a.dispose(),this.invalidate()}return m}setRobots(e){let t=new Set;for(let n of e){t.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?K0(n.room,void 0,void 0,n.obstacles):xd(n.rest),l=a.length?a:xd(n.rest),c=0;l.forEach((u,d)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=d)}),r.motion.path=l,r.motion.next=c,n.room&&!Ge(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(j0[n.mode])}for(let[n,r]of this.robots)t.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(e){if(!this.robotGeo){let r=new ot,o=(a,l,c,u,d)=>{let h=[];for(let f=0;f<20;f++)h.push([Math.cos(f/20*Math.PI*2)*a,Math.sin(f/20*Math.PI*2)*a]);St(r,h,l,c,u,d,{aoFrom:0,bottom:!1})};o(.17,.012,.08,2371657,3424863),o(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new it({vertexColors:!0});let s=new ot;St(s,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=s.geometry()}let t=new kt,n=new it({color:j0[e.mode]});return t.add(new He(this.robotGeo,this.robotMat),new He(this.robotLedGeo,n)),{info:e,motion:{pos:[...e.rest],heading:e.restHeading,path:[],next:0},group:t,led:n}}stepRobots(e){if(!this.robots.size)return!1;let t=this.robotLast?Math.min(.2,(e-this.robotLast)/1e3):0;this.robotLast=e;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),t>0?n=Y0(r.motion,r.info,t)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],pn(o.floor,r.motion.pos[0],r.motion.pos[1]),r.motion.pos[1]),r.group.visible=!r.info.inModel||r.info.mode==="cleaning"||Math.hypot(r.motion.pos[0]-r.info.rest[0],r.motion.pos[1]-r.info.rest[1])>.05,r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(e,t=[]){let n=a=>new Q(.25-.2*a,.95-.83*a,1-.7*a),r=new Q(0,0,0),o=new Q(.3,1,.6),s=.02;for(let a of this.floors){let l=new ot;for(let u of t)u.floorId===a.floor.id&&u.points.forEach(([d,h],f)=>{let p=u.points[f-1];if(p){let _=Math.hypot(d-p[0],h-p[1])||1,m=-(h-p[1])/_*.1,g=(d-p[0])/_*.1;l.tri([p[0]+m,s,p[1]+g],[d+m,s,h+g],[d-m,s,h-g],o,o,o),l.tri([p[0]+m,s,p[1]+g],[d-m,s,h-g],[p[0]-m,s,p[1]-g],o,o,o)}for(let _=0;_<10;_++){let m=_/10*Math.PI*2,g=(_+1)/10*Math.PI*2;l.tri([d,s,h],[d+Math.cos(g)*.35,s,h+Math.sin(g)*.35],[d+Math.cos(m)*.35,s,h+Math.sin(m)*.35],o,r,r)}});let c=null;for(let u of e){if(u.floorId!==a.floor.id)continue;let d=n(u.age);if(c){let h=Math.hypot(u.x-c.x,u.z-c.z)||1,f=-(u.z-c.z)/h*.06,p=(u.x-c.x)/h*.06,_=n(c.age);l.tri([c.x+f,s,c.z+p],[u.x+f,s,u.z+p],[u.x-f,s,u.z-p],_,d,d),l.tri([c.x+f,s,c.z+p],[u.x-f,s,u.z-p],[c.x-f,s,c.z-p],_,d,_)}for(let h=0;h<12;h++){let f=h/12*Math.PI*2,p=(h+1)/12*Math.PI*2;l.tri([u.x,s,u.z],[u.x+Math.cos(p)*.22,s,u.z+Math.sin(p)*.22],[u.x+Math.cos(f)*.22,s,u.z+Math.sin(f)*.22],d,r,r)}c=u}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(e,t=900){this.controls.flyTo(e,t)}lookThrough(e){let t=this.devices.find(c=>c.id===e&&c.model),n=t&&this.floorMap.get(t.floorId);if(!t||!n)return!1;let r=(t.rotation??0)*ft,o=t.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(t.tilt??(o?65:20))*ft)),a=n.floor.elevation+n.ty+(o?(t.top??n.floor.height)-.1:t.y),l=new U(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new U(t.x,a,t.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(e){let t=performance.now()+Wc;for(let n of e)this.flashes.set(n,t);e.length&&this.invalidate()}focus(e,t,n,r,o){let s=this.floorMap.get(e);if(s){if(this.controls.flyTo({target:new U(t,s.floor.elevation+s.ty+r,n),radius:5.5,phi:.78},900),o){this.flashes.set(o,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(e){if(this.frame=0,this.disposed)return;let t=this.lastFrame?Math.min(100,e-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,e-this.orbitLast)/1e3),this.orbitLast=e,n=!0):this.orbitLast=0;let r=this.controls.update(e),o=this.stepFloors(t),s=!1;for(let[p,_]of this.customLayers){let m=this.floorMap.get(p);m&&(_.clip(this.wallMode==="cut"?m.floor.cut_height:null,m.group.position.y,m.o),m.o>.02&&(s=_.step(t)||s))}let a=this.stepOpenings(t)||this.stepFridges(t)||s,l=!1;if(this.flashes.size){let p=new Set;for(let[_,m]of this.flashes){let g=this.deviceFloor.get(_);g&&p.add(g),m<=e&&this.flashes.delete(_)}l=this.flashes.size>0;for(let _ of this.floors)p.has(_.floor.id)&&this.buildLamps(_)}let c=this.placeRoof(t),u=this.stepRobots(e),d=this.stepWeather(e),h=r||o||a||l||c,f=[];if((r||this.controls.busy)&&f.push("camera"),o&&f.push("floors"),a&&f.push("openings"),l&&f.push("flash"),c&&f.push("roof"),this.flowActive&&f.push("flow"),this.soundActive&&f.push("sound"),this.poolActive&&f.push("pool"),this.solarActive&&f.push("solar"),this.effectTick&&f.push("effect"),u&&f.push("robot"),n&&f.push("orbit"),this.tintTick&&f.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=h?e:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(e),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(e,f),h&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let p=this.lowQuality?2*ig:ig;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=p/1e3,this.effectTick=!0;for(let _ of this.floors)_.o<.02||!this.effectFloors.has(_.floor.id)||(this.buildLamps(_),this.buildGlow(_));this.invalidate()},p)}!h&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&d&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!h&&u&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*tg:tg))}updateWalls(){let e=this.camera.position,t=this.controls.view.target,n=e.x-t.x,r=e.z-t.z,o=Math.hypot(n,r)||1;this.roofDirection.value.set(n/o,(e.y-t.y)/Math.hypot(o,e.y-t.y),r/o);for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((u,d)=>{let h=u?u[0]*n/o+u[1]*r/o>=.25:a;!l&&h&&(c|=1<<d)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let e=this.controls.view,t=this.viewKey;return t[0]===e.target.x&&t[1]===e.target.y&&t[2]===e.target.z&&t[3]===e.radius&&t[4]===e.theta&&t[5]===e.phi?!1:(t[0]=e.target.x,t[1]=e.target.y,t[2]=e.target.z,t[3]=e.radius,t[4]=e.theta,t[5]=e.phi,!0)}place(e,t){let n=t===null;e.hidden!==n&&(e.hidden=n),t!==null&&this.placed.get(e)!==t&&(this.placed.set(e,t),e.style.transform=t)}updateLabels(){let{w:e,h:t}=this.size,n=new U,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,u=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let _ of[a.x0,a.x1])for(let m of[a.z0,a.z1]){n.set(_,u,m).project(this.camera);let g=(n.x+1)/2*e,w=(1-n.y)/2*t;(!l||g<l.x)&&(l={x:g,y:w}),(!c||g>c.x)&&(c={x:g,y:w})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let d=s.labelSize.w,h=8+this.labelInset,f=l.x-d-14,p=l.y;f<h&&this.labelInset&&(f=c.x+14,p=c.y),o.push({fv:s,left:Math.max(h,Math.min(e-d-8,f)),y:p,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new U(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?Dc(this.controls.view.radius,this.houseRadius,this.keepRoof,this.roofO).lift:0),s.p[2]),u=this.camera.position.clone().sub(c),d=u.length(),h=u.normalize().dot(new U(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let f=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,d)))*s.size;this.anchorCb(a,(n.x+1)/2*e,(1-n.y)/2*t,!f,p,h)}),this.updateDevicePins(e,t);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l+pt(s.floor,c.room),c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}}otherFloor(e){return this.floorId!==null&&e.floor.id!==this.floorId}updateDevicePins(e,t){let n=new U,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null);continue}n.set(o.x,a.floor.elevation+a.y+.9,o.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,l?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let u=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==u&&(this.pinMode.set(s,u),s.classList.toggle("fp3d-dev-full",u==="full"),s.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(s,`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}reportStats(e,t){if(!this.statsOn||!this.options.onStats)return;let n=t.length>0;this.fpsStart||(this.fpsStart=e),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,e-this.lastStatsFrame)),this.lastStatsFrame=n?e:0,this.fpsFrames++;let r=e-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:t,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=nS(this.renderer)}),this.fpsFrames=0,this.fpsStart=e,this.worstFrame=0}}};function nS(i){try{let e=i.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER);return typeof n=="string"?n:null}catch{return null}}function iS(){let e=document.createElement("canvas");e.width=256*3,e.height=256*2;let t=e.getContext("2d"),n=(s,a,l,c,u)=>{t.strokeStyle=`rgba(55,224,255,${u})`,t.beginPath(),t.moveTo(s,a),t.lineTo(l,c),t.stroke()};t.lineWidth=1.5;let r=(s,a,l)=>{t.save(),t.beginPath(),t.rect(s*256,a*256,256,256),t.clip(),l(s*256,a*256),t.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let u=s+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let u=l?256/4:0;for(let d of[u,u+256/2])n(s+d+.75,c,s+d+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),t.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)t.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new Bn(e);return o.flipY=!1,o.wrapS=vn,o.wrapT=vn,o.anisotropy=4,o.colorSpace=Nt,o}function rS(i){let e=new it({map:i,transparent:!0,blending:Ft,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},e.customProgramCacheKey=()=>"fp3d-pattern",e}function oS(){let i=document.createElement("canvas");i.width=8,i.height=32;let e=i.getContext("2d");e.fillStyle="#1a2742",e.fillRect(0,0,8,32),e.fillStyle="#223556",e.fillRect(0,4,8,14),e.fillStyle="rgba(55,224,255,0.45)",e.fillRect(0,29,8,2);let t=new Bn(i);return t.wrapS=ar,t.wrapT=ar,t.colorSpace=Nt,t}function wd(i){let e=t=>Math.round(t*100);return`${i.floorId}:${i.a.map(e).join(",")}>${i.b.map(e).join(",")}`}function rg(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function sS(i){let e=new it({vertexColors:!0,transparent:!0,blending:Ft,depthWrite:!1,side:ht});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},e.customProgramCacheKey=()=>"fp3d-flow",e}function og(i,e){let t=i.rooms.map((r,o)=>o),n=r=>t[r]===r?r:t[r]=n(t[r]);for(let[r,o]of e){let s=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(t[Math.max(l,c)]=Math.min(l,c))}return t.map((r,o)=>n(o))}function aS(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new Bn(e);return r.colorSpace=Nt,r}function lS(){let e=Md,t=document.createElement("canvas");t.width=1024,t.height=1024;let n=t.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=e;s++){let a=Math.round(s/e*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new Bn(t);return o.anisotropy=4,o.colorSpace=Nt,o}function w3(i,e){return new Td(i,e)}function yd(i,e,t,n){t=e.top??t;let r=i.p.length;cS(i,e,t,n),Pn(i.p,r,e,Xc(e,t))}function Xc(i,e){if(i.pivot_y!=null)return i.pivot_y;let[t,,n]=i.size??(i.lamp?Kc[i.lamp]:[.3,.3,.3]);return i.lamp&&Sd.has(i.lamp)?e-n/2:(i.base??0)+(i.lamp==="strip"&&i.upright?t:n)/2}function cS(i,e,t,n){let[r,o,s]=e.size??Kc[e.lamp],a=e.base??0,l=(e.rotation??0)*ft,c=Math.cos(l),u=Math.sin(l),d=(_,m)=>[e.x+_*c-m*u,e.z+_*u+m*c],h=(_,m,g,w,y,b=14)=>{let x=[];for(let M=0;M<b;M++){let A=M/b*Math.PI*2;x.push([e.x+Math.cos(A)*_,e.z+Math.sin(A)*_])}St(i,x,m,g,w,y,{aoFrom:0,bottom:!0})},f=(_,m,g,w,y,b,x,M=x)=>St(i,[d(_,g),d(m,g),d(m,w),d(_,w)],y,b,x,M,{aoFrom:0,bottom:!0}),p=Math.max(.05,Math.min(r,o)/2);switch(e.lamp){case"ceiling":h(p*.25,t-.04,t,ct,ct,8),h(p,t-Math.max(.04,s)-.035,t-.04,n,n);break;case"pendant":{let _=Math.max(.4,t-s);h(.06,t-.02,t,ct,ct,8);let m=e.variant==="globe"?_+2*p:e.variant==="drum"?_+.24:_+.2;if(h(.008,m,t-.02,ct,ct,5),e.variant==="globe")for(let w=0;w<7;w++){let y=Math.PI*(w/7),b=Math.PI*((w+1)/7);h(p*Math.max(.2,Math.sin((y+b)/2)),_+p-p*Math.cos(y),_+p-p*Math.cos(b),n,n,14)}else if(e.variant==="cone")for(let w=0;w<4;w++)h(p*(.25+.75*(4-w)/4),_+.06*w,_+.06*(w+1),n,n,16);else e.variant==="drum"?h(p,_,_+.24,n,n,18):(h(p*.35,_+.14,_+.2,n,n,12),h(p,_,_+.14,n,n,16));break}case"downlight":h(p,t-.012,t,ct,ct,12),h(p*.7,t-.02,t-.012,n,n,12);break;case"spot":h(p*.6,t-.02,t,ct,ct,10),h(p,t-Math.max(.06,s),t-.02,ct,ct,12),h(p*.8,t-Math.max(.06,s)-.008,t-Math.max(.06,s),n,n,12);break;case"panel":f(-r/2,r/2,-o/2,o/2,t-Math.max(.015,s),t,ct,ct),f(-r/2+.02,r/2-.02,-o/2+.02,o/2-.02,t-Math.max(.015,s)-.004,t-Math.max(.015,s),n);break;case"uplight":h(Math.max(.1,p*.6),a,a+.03,ct,ct),h(.014,a+.03,a+s-.12,ct,ct,6),h(p,a+s-.14,a+s-.02,ct,ct),h(p*.92,a+s-.02,a+s,n,n);break;case"bollard":h(p,a,a+s-.14,ct,ct,10),h(p*.9,a+s-.14,a+s-.03,n,n,10),h(p*1.1,a+s-.03,a+s,ct,ct,10);break;case"garden":h(.012,a,a+s-.08,ct,ct,5),h(p,a+s-.08,a+s-.01,ct,ct,10),h(p*.8,a+s-.01,a+s,n,n,10);break;case"floor":h(Math.max(.1,p*.7),a,a+.03,ct,ct),h(.014,a+.03,a+s-.28,ct,ct,6),h(p,a+s-.3,a+s,n,n);break;case"table":h(Math.max(.05,p*.55),a,a+.03,ct,ct),h(.012,a+.03,a+s-.16,ct,ct,6),h(p,a+s-.18,a+s,n,n);break;case"wall":{let _=e.base??lc;f(-r/2+.03,r/2-.03,-o/2,-o/2+.02,_,_+s,ct),f(-r/2,r/2,-o/2+.02,o/2,_+s*.15,_+s*.85,n);break}case"strip":{let _=Math.max(.02,s),m=e.base!=null?e.base+_:t-.04;if(!e.roll&&!e.upright){f(-r/2,r/2,-o/2,o/2,m-_,m,n);break}let g=(e.roll??0)*ft,w=Math.cos(g),y=Math.sin(g),b=e.upright?a+r/2:m-_/2,x=(E,P,C)=>{let R=E,T=P*w-C*y,I=P*y+C*w;return e.upright&&([R,T]=[-T,R]),[e.x+R*c-I*u,b+T,e.z+R*u+I*c]},M=[x(-r/2,-_/2,-o/2),x(r/2,-_/2,-o/2),x(r/2,-_/2,o/2),x(-r/2,-_/2,o/2),x(-r/2,_/2,-o/2),x(r/2,_/2,-o/2),x(r/2,_/2,o/2),x(-r/2,_/2,o/2)],A=new Q(n),v=[e.x,b,e.z],S=(E,P,C,R)=>{let[T,I,F]=[M[E],M[P],M[C]],z=[(I[1]-T[1])*(F[2]-T[2])-(I[2]-T[2])*(F[1]-T[1]),(I[2]-T[2])*(F[0]-T[0])-(I[0]-T[0])*(F[2]-T[2]),(I[0]-T[0])*(F[1]-T[1])-(I[1]-T[1])*(F[0]-T[0])],B=[T[0]-v[0],T[1]-v[1],T[2]-v[2]],N=z[0]*B[0]+z[1]*B[1]+z[2]*B[2]<0,[O,G,$,Z]=N?[M[R],M[C],M[P],M[E]]:[M[E],M[P],M[C],M[R]];i.tri(O,G,$,A,A,A),i.tri(O,$,Z,A,A,A)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{rd as FloorMap,Td as FloorplanViewer,od as WalkCamera,w3 as createViewer,o3 as funLib,KM as furnitureFront,XM as furniturePreview,tS as isLowEnd,yd as pushLampModel};
