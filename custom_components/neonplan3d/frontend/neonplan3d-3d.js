var Uf=0,Zu=1,Vf=2;var hs=1,Gf=2,so=3,oi=0,Qt=1,ct=2,si=0,Vi=1,Dt=2,$u=3,ds=4,Hf=5;var pr=100,Wf=101,Xf=102,Kf=103,Yf=104,qf=200,Zf=201,$f=202,Jf=203,Ju=204,ju=205,jf=206,Qf=207,ep=208,tp=209,np=210,ip=211,rp=212,op=213,sp=214,za=0,Na=1,Ba=2,Zr=3,Oa=4,Ua=5,Va=6,Ga=7,Qu=0,ap=1,lp=2,Hn=0,eh=1,th=2,nh=3,ih=4,rh=5,oh=6,sh=7;var ah=300,Gi=301,mr=302,Ml=303,Sl=304,fs=306,cr=1e3,wn=1001,Ha=1002,Yt=1003,cp=1004;var ps=1005;var jt=1006,Tl=1007;var Hi=1008;var Sn=1009,lh=1010,ch=1011,ao=1012,Al=1013,Wn=1014,Xn=1015,Kn=1016,El=1017,Rl=1018,lo=1020,uh=35902,hh=35899,dh=1021,fh=1022,Cn=1023,ti=1026,Wi=1027,ph=1028,Pl=1029,Xi=1030,kl=1031;var Cl=1033,ms=33776,gs=33777,_s=33778,bs=33779,Il=35840,Ll=35841,Fl=35842,Dl=35843,zl=36196,Nl=37492,Bl=37496,Ol=37488,Ul=37489,vs=37490,Vl=37491,Gl=37808,Hl=37809,Wl=37810,Xl=37811,Kl=37812,Yl=37813,ql=37814,Zl=37815,$l=37816,Jl=37817,jl=37818,Ql=37819,ec=37820,tc=37821,nc=36492,ic=36494,rc=36495,oc=36283,sc=36284,xs=36285,ac=36286;var Bo=2300,Wa=2301,Ia=2302,Bu=2303,Ou=2400,Uu=2401,Vu=2402;var up=3200;var mh=0,hp=1,vi="",Nt="srgb",Oo="srgb-linear",Uo="linear",xt="srgb";var La=7680;var dp=519,fp=512,pp=513,mp=514,lc=515,gp=516,_p=517,cc=518,bp=519,vp=35044,gh=35048;var _h="300 es",On=2e3,Vo=2001;function V0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function G0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xp(){let i=$r("canvas");return i.style.display="block",i}var sf={},Jr=null;function bh(...i){let e="THREE."+i.shift();Jr?Jr("log",e,...i):console.log(e,...i)}function yp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ke(...i){i=yp(i);let e="THREE."+i.shift();if(Jr)Jr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=yp(i);let e="THREE."+i.shift();if(Jr)Jr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function lr(...i){let e=i.join(" ");e in sf||(sf[e]=!0,Ke(...i))}function wp(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}var Mp={[za]:Na,[Ba]:Va,[Oa]:Ga,[Zr]:Ua,[Na]:za,[Va]:Ba,[Ga]:Oa,[Ua]:Zr},ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fa=Math.PI/180,Xa=180/Math.PI;function ys(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function H0(i,e){return(i%e+e)%e}function du(i,e,t){return(1-t)*i+t*e}function Po(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Sh=class Sh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sh.prototype.isVector2=!0;var Ee=Sh,ii=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=o[s+0],f=o[s+1],p=o[s+2],_=o[s+3];if(h!==_||l!==d||c!==f||u!==p){let g=l*d+c*f+u*p+h*_;g<0&&(d=-d,f=-f,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let w=Math.acos(g),y=Math.sin(w);m=Math.sin(m*w)/y,a=Math.sin(a*w)/y,l=l*m+d*a,c=c*m+f*a,u=u*m+p*a,h=h*m+_*a}else{l=l*m+d*a,c=c*m+f*a,u=u*m+p*a,h=h*m+_*a;let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=o[s],d=o[s+1],f=o[s+2],p=o[s+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(o/2),d=l(n/2),f=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(o-c)*f,this._z=(s-r)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(o+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(o-c)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(s-r)/f,this._x=(o+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Th=class Th{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(af.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(af.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),h=2*(o*n-s*t);return this.x=t+l*c+s*h-a*u,this.y=n+l*u+a*c-o*h,this.z=r+l*h+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fu.copy(this).projectOnVector(e),this.sub(fu)}reflect(e){return this.sub(fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Th.prototype.isVector3=!0;var V=Th,fu=new V,af=new ii,Ah=class Ah{constructor(e,t,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],_=r[0],g=r[3],m=r[6],w=r[1],y=r[4],b=r[7],x=r[2],M=r[5],A=r[8];return o[0]=s*_+a*w+l*x,o[3]=s*g+a*y+l*M,o[6]=s*m+a*b+l*A,o[1]=c*_+u*w+h*x,o[4]=c*g+u*y+h*M,o[7]=c*m+u*b+h*A,o[2]=d*_+f*w+p*x,o[5]=d*g+f*y+p*M,o[8]=d*m+f*b+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*s-a*c,d=a*l-u*o,f=c*o-s*l,p=t*h+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*s)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*o-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*o)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pu.makeScale(e,t)),this}rotate(e){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pu.makeRotation(-e)),this}translate(e,t){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ah.prototype.isMatrix3=!0;var $e=Ah,pu=new $e,lf=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W0(){let i={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===xt&&(r.r=_i(r.r),r.g=_i(r.g),r.b=_i(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===xt&&(r.r=qr(r.r),r.g=qr(r.g),r.b=qr(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vi?Uo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oo]:{primaries:e,whitePoint:n,transfer:Uo,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}var ht=W0();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fr,Ka=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=$r("canvas")),Fr.width=e.width,Fr.height=e.height;let r=Fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$r("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=_i(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},X0=0,jr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(mu(r[s].image)):o.push(mu(r[s]))}else o=mu(r);n.url=o}return t||(e.images[this.uuid]=n),n}};function mu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var K0=0,gu=new V,sn=class i extends ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=wn,r=wn,o=jt,s=Hi,a=Cn,l=Sn,c=i.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=ys(),this.name="",this.source=new jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gu).x}get height(){return this.source.getSize(gu).y}get depth(){return this.source.getSize(gu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cr:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cr:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=ah;sn.DEFAULT_ANISOTROPY=1;var Eh=class Eh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,b=(f+1)/2,x=(m+1)/2,M=(u+d)/4,A=(h+_)/4,v=(p+g)/4;return y>b&&y>x?y<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(y),r=M/n,o=A/n):b>x?b<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),n=M/r,o=v/r):x<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(x),n=A/o,r=v/o),this.set(n,r,o,t),this}let w=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(g-p)/w,this.y=(h-_)/w,this.z=(d-u)/w,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eh.prototype.isVector4=!0;var Lt=Eh,Ya=class extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},o=new sn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new jr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Ya{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Go=class extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var wl=class wl{constructor(e,t,n,r,o,s,a,l,c,u,h,d,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,h,d,f,p,_,g)}set(e,t,n,r,o,s,a,l,c,u,h,d,f,p,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=o,m[5]=s,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),o=1/Dr.setFromMatrixColumn(e,1).length(),s=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){let d=s*u,f=s*h,p=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=s*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d+_*a,t[4]=p*a-f,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=s*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d-_*a,t[4]=-s*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=s*u,t[9]=_-d*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){let d=s*u,f=s*h,p=a*u,_=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){let d=s*l,f=s*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=p*h+f,t[1]=h,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-_*h}else if(e.order==="XZY"){let d=s*l,f=s*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=s*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y0,e,q0)}lookAt(e,t,n){let r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Pi.crossVectors(n,vn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Pi.crossVectors(n,vn)),Pi.normalize(),ra.crossVectors(vn,Pi),r[0]=Pi.x,r[4]=ra.x,r[8]=vn.x,r[1]=Pi.y,r[5]=ra.y,r[9]=vn.y,r[2]=Pi.z,r[6]=ra.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],w=n[3],y=n[7],b=n[11],x=n[15],M=r[0],A=r[4],v=r[8],S=r[12],T=r[1],P=r[5],C=r[9],R=r[13],E=r[2],I=r[6],L=r[10],N=r[14],B=r[3],D=r[7],O=r[11],U=r[15];return o[0]=s*M+a*T+l*E+c*B,o[4]=s*A+a*P+l*I+c*D,o[8]=s*v+a*C+l*L+c*O,o[12]=s*S+a*R+l*N+c*U,o[1]=u*M+h*T+d*E+f*B,o[5]=u*A+h*P+d*I+f*D,o[9]=u*v+h*C+d*L+f*O,o[13]=u*S+h*R+d*N+f*U,o[2]=p*M+_*T+g*E+m*B,o[6]=p*A+_*P+g*I+m*D,o[10]=p*v+_*C+g*L+m*O,o[14]=p*S+_*R+g*N+m*U,o[3]=w*M+y*T+b*E+x*B,o[7]=w*A+y*P+b*I+x*D,o[11]=w*v+y*C+b*L+x*O,o[15]=w*S+y*R+b*N+x*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15],w=l*f-c*d,y=a*f-c*h,b=a*d-l*h,x=s*f-c*u,M=s*d-l*u,A=s*h-a*u;return t*(_*w-g*y+m*b)-n*(p*w-g*x+m*M)+r*(p*y-_*x+m*A)-o*(p*b-_*M+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[1],s=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(s*u-a*c)-n*(o*u-a*l)+r*(o*c-s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],w=t*a-n*s,y=t*l-r*s,b=t*c-o*s,x=n*l-r*a,M=n*c-o*a,A=r*c-o*l,v=u*_-h*p,S=u*g-d*p,T=u*m-f*p,P=h*g-d*_,C=h*m-f*_,R=d*m-f*g,E=w*R-y*C+b*P+x*T-M*S+A*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/E;return e[0]=(a*R-l*C+c*P)*I,e[1]=(r*C-n*R-o*P)*I,e[2]=(_*A-g*M+m*x)*I,e[3]=(d*M-h*A-f*x)*I,e[4]=(l*T-s*R-c*S)*I,e[5]=(t*R-r*T+o*S)*I,e[6]=(g*b-p*A-m*y)*I,e[7]=(u*A-d*b+f*y)*I,e[8]=(s*C-a*T+c*v)*I,e[9]=(n*T-t*C-o*v)*I,e[10]=(p*M-_*b+m*w)*I,e[11]=(h*b-u*M-f*w)*I,e[12]=(a*S-s*P-l*v)*I,e[13]=(t*P-n*S+r*v)*I,e[14]=(_*y-p*x-g*w)*I,e[15]=(u*x-h*y+d*w)*I,this}scale(e){let t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,h=a+a,d=o*c,f=o*u,p=o*h,_=s*u,g=s*h,m=a*h,w=l*c,y=l*u,b=l*h,x=n.x,M=n.y,A=n.z;return r[0]=(1-(_+m))*x,r[1]=(f+b)*x,r[2]=(p-y)*x,r[3]=0,r[4]=(f-b)*M,r[5]=(1-(d+m))*M,r[6]=(g+w)*M,r[7]=0,r[8]=(p+y)*A,r[9]=(g-w)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let s=Dr.set(r[0],r[1],r[2]).length(),a=Dr.set(r[4],r[5],r[6]).length(),l=Dr.set(r[8],r[9],r[10]).length();o<0&&(s=-s),zn.copy(this);let c=1/s,u=1/a,h=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,t.setFromRotationMatrix(zn),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,o,s,a=On,l=!1){let c=this.elements,u=2*o/(t-e),h=2*o/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,_;if(l)p=o/(s-o),_=s*o/(s-o);else if(a===On)p=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===Vo)p=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=On,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,_;if(l)p=1/(s-o),_=s/(s-o);else if(a===On)p=-2/(s-o),_=-(s+o)/(s-o);else if(a===Vo)p=-1/(s-o),_=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};wl.prototype.isMatrix4=!0;var Pt=wl,Dr=new V,zn=new Pt,Y0=new V(0,0,0),q0=new V(1,1,1),Pi=new V,ra=new V,vn=new V,uf=new Pt,hf=new ii,Un=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hf.setFromEuler(this),this.setFromQuaternion(hf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Z0=0,df=new V,zr=new ii,hi=new Pt,oa=new V,ko=new V,$0=new V,J0=new ii,ff=new V(1,0,0),pf=new V(0,1,0),mf=new V(0,0,1),gf={type:"added"},j0={type:"removed"},Nr={type:"childadded",child:null},_u={type:"childremoved",child:null},_n=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new V,t=new Un,n=new ii,r=new V(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new $e}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(ff,e)}rotateY(e){return this.rotateOnAxis(pf,e)}rotateZ(e){return this.rotateOnAxis(mf,e)}translateOnAxis(e,t){return df.copy(e).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ff,e)}translateY(e){return this.translateOnAxis(pf,e)}translateZ(e){return this.translateOnAxis(mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oa.copy(e):oa.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(ko,oa,this.up):hi.lookAt(oa,ko,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(hi),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gf),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j0),_u.child=e,this.dispatchEvent(_u),_u.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gf),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,$0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,J0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*r,o[13]+=n-o[1]*t-o[5]*n-o[9]*r,o[14]+=r-o[2]*t-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){let a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),f=s(e.animations),p=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function s(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new V(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},Q0={type:"move"},eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},sa={h:0,s:0,l:0};function bu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var j=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=H0(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=bu(s,o,e+1/3),this.g=bu(s,o,e),this.b=bu(s,o,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Nt){function n(o){o!==void 0&&parseFloat(o)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=Sp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ht.workingToColorSpace(rn.copy(this),e),Math.round(ot(rn.r*255,0,255))*65536+Math.round(ot(rn.g*255,0,255))*256+Math.round(ot(rn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(rn.copy(this),t);let n=rn.r,r=rn.g,o=rn.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,u=(a+s)/2;if(a===s)l=0,c=0;else{let h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case n:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-n)/h+2;break;case o:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Nt){ht.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,r=rn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(sa);let n=du(ki.h,sa.h,t),r=du(ki.s,sa.s,t),o=du(ki.l,sa.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new j;j.NAMES=Sp;var Ho=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new j(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Fi=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nn=new V,di=new V,vu=new V,fi=new V,Br=new V,Or=new V,_f=new V,xu=new V,yu=new V,wu=new V,Mu=new Lt,Su=new Lt,Tu=new Lt,gi=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Nn.subVectors(r,t),di.subVectors(n,t),vu.subVectors(e,t);let s=Nn.dot(Nn),a=Nn.dot(di),l=Nn.dot(vu),c=di.dot(di),u=di.dot(vu),h=s*c-a*a;if(h===0)return o.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(s*u-a*l)*d;return o.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,fi.x),l.addScaledVector(s,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return Mu.setScalar(0),Su.setScalar(0),Tu.setScalar(0),Mu.fromBufferAttribute(e,t),Su.fromBufferAttribute(e,n),Tu.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Mu,o.x),s.addScaledVector(Su,o.y),s.addScaledVector(Tu,o.z),s}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),di.subVectors(e,t),Nn.cross(di).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Nn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,o=this.c,s,a;Br.subVectors(r,n),Or.subVectors(o,n),xu.subVectors(e,n);let l=Br.dot(xu),c=Or.dot(xu);if(l<=0&&c<=0)return t.copy(n);yu.subVectors(e,r);let u=Br.dot(yu),h=Or.dot(yu);if(u>=0&&h<=u)return t.copy(r);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Br,s);wu.subVectors(e,o);let f=Br.dot(wu),p=Or.dot(wu);if(p>=0&&f<=p)return t.copy(o);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Or,a);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return _f.subVectors(o,r),a=(h-u)/(h-u+(f-p)),t.copy(r).addScaledVector(_f,a);let m=1/(g+_+d);return s=_*m,a=d*m,t.copy(n).addScaledVector(Br,s).addScaledVector(Or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Bn):Bn.fromBufferAttribute(o,s),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),la.subVectors(this.max,Co),Ur.subVectors(e.a,Co),Vr.subVectors(e.b,Co),Gr.subVectors(e.c,Co),Ci.subVectors(Vr,Ur),Ii.subVectors(Gr,Vr),rr.subVectors(Ur,Gr);let t=[0,-Ci.z,Ci.y,0,-Ii.z,Ii.y,0,-rr.z,rr.y,Ci.z,0,-Ci.x,Ii.z,0,-Ii.x,rr.z,0,-rr.x,-Ci.y,Ci.x,0,-Ii.y,Ii.x,0,-rr.y,rr.x,0];return!Au(t,Ur,Vr,Gr,la)||(t=[1,0,0,0,1,0,0,0,1],!Au(t,Ur,Vr,Gr,la))?!1:(ca.crossVectors(Ci,Ii),t=[ca.x,ca.y,ca.z],Au(t,Ur,Vr,Gr,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pi=[new V,new V,new V,new V,new V,new V,new V,new V],Bn=new V,aa=new dn,Ur=new V,Vr=new V,Gr=new V,Ci=new V,Ii=new V,rr=new V,Co=new V,la=new V,ca=new V,or=new V;function Au(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){or.fromArray(i,o);let a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=t.dot(or),u=n.dot(or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ut=new V,ua=new Ee,e_=0,gn=class extends ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vp,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Po(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Po(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Po(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Po(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Po(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),r=mn(r,this.array),o=mn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Wo=class extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ur=class extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ye=class extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}},t_=new dn,Io=new V,Eu=new V,Di=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):t_.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);let t=Io.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Io,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Eu)),this.expandByPoint(Io.copy(e.center).sub(Eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},n_=0,Pn=new Pt,Ru=new _n,Hr=new V,xn=new dn,Lo=new dn,Kt=new V,We=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V0(e)?ur:Wo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new $e().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return Ru.lookAt(e),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ye(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let o=t[n];xn.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(xn.min,Lo.min),xn.expandByPoint(Kt),Kt.addVectors(xn.max,Lo.max),xn.expandByPoint(Kt)):(xn.expandByPoint(Lo.min),xn.expandByPoint(Lo.max))}xn.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)Kt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(Kt));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Kt.fromBufferAttribute(a,c),l&&(Hr.fromBufferAttribute(e,c),Kt.add(Hr)),r=Math.max(r,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,o=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new V,l[v]=new V;let c=new V,u=new V,h=new V,d=new Ee,f=new Ee,p=new Ee,_=new V,g=new V;function m(v,S,T){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,T),d.fromBufferAttribute(o,v),f.fromBufferAttribute(o,S),p.fromBufferAttribute(o,T),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(P),a[v].add(_),a[S].add(_),a[T].add(_),l[v].add(g),l[S].add(g),l[T].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,S=w.length;v<S;++v){let T=w[v],P=T.start,C=T.count;for(let R=P,E=P+C;R<E;R+=3)m(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let y=new V,b=new V,x=new V,M=new V;function A(v){x.fromBufferAttribute(r,v),M.copy(x);let S=a[v];y.copy(S),y.sub(x.multiplyScalar(x.dot(S))).normalize(),b.crossVectors(M,S);let P=b.dot(l[v])<0?-1:1;s.setXYZW(v,y.x,y.y,y.z,P)}for(let v=0,S=w.length;v<S;++v){let T=w[v],P=T.start,C=T.count;for(let R=P,E=P+C;R<E;R+=3)A(e.getX(R+0)),A(e.getX(R+1)),A(e.getX(R+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let r=new V,o=new V,s=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new gn(d,u,h)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let o=e.morphAttributes;for(let c in o){let u=[],h=o[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,u=s.length;c<u;c++){let h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Pu=new V,i_=new V,r_=new $e,yn=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Pu.subVectors(n,t).cross(i_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Pu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||r_.getNormalMatrix(e),r=this.coplanarPoint(Pu).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},o_=0,bi=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=Vi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ju,this.blendDst=ju,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new j().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var mi=new V,ku=new V,ha=new V,da=new V,hr=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ku.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),da.copy(this.origin).sub(ku);let o=e.distanceTo(t)*.5,s=-this.direction.dot(ha),a=da.dot(this.direction),l=-da.dot(ha),c=da.lengthSq(),u=Math.abs(1-s*s),h,d,f,p;if(u>0)if(h=s*l-a,d=s*a-l,p=o*u,h>=0)if(d>=-p)if(d<=p){let _=1/u;h*=_,d*=_,f=h*(h+s*d+2*a)+d*(s*h+d+2*l)+c}else d=o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;else d=-o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),f=-h*h+d*(d+2*l)+c);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ku).addScaledVector(ha,d),f}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),r=mi.dot(mi)-n*n,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-s.x,d=e.y-s.y,f=e.z-s.z,p=t.x-s.x,_=t.y-s.y,g=t.z-s.z,m=n.x-s.x,w=n.y-s.y,y=n.z-s.z,b=Math.abs(l),x=Math.abs(c),M=Math.abs(u),A,v,S,T,P,C,R,E,I,L,N,B;if(b>=x&&b>=M?(S=l,C=h,I=p,B=m,l>=0?(A=c,v=u,T=d,P=f,R=_,E=g,L=w,N=y):(A=u,v=c,T=f,P=d,R=g,E=_,L=y,N=w)):x>=M?(S=c,C=d,I=_,B=w,c>=0?(A=u,v=l,T=f,P=h,R=g,E=p,L=y,N=m):(A=l,v=u,T=h,P=f,R=p,E=g,L=m,N=y)):(S=u,C=f,I=g,B=y,u>=0?(A=l,v=c,T=h,P=d,R=p,E=_,L=m,N=w):(A=c,v=l,T=d,P=h,R=_,E=p,L=w,N=m)),S===0)return null;let D=A/S,O=v/S,U=1/S,Z=T-D*C,q=P-O*C,ae=R-D*I,ie=E-O*I,le=L-D*B,H=N-O*B,W=le*ie-H*ae,re=Z*H-q*le,ce=ae*q-ie*Z;if(r){if(W<0||re<0||ce<0)return null}else if((W<0||re<0||ce<0)&&(W>0||re>0||ce>0))return null;let $=W+re+ce;if($===0)return null;let he=U*(W*C+re*I+ce*B);return($>0?he<0:he>0)?null:this.at(he/$,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bf=new Pt,sr=new hr,fa=new Di,vf=new V,pa=new V,ma=new V,ga=new V,Cu=new V,_a=new V,xf=new V,ba=new V,Be=class extends _n{constructor(e=new We,t=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){_a.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let u=a[l],h=o[l];u!==0&&(Cu.fromBufferAttribute(h,e),s?_a.addScaledVector(Cu,u):_a.addScaledVector(Cu.sub(t),u))}t.add(_a)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(o),sr.copy(e.ray).recast(e.near),!(fa.containsPoint(sr.origin)===!1&&(sr.intersectSphere(fa,vf)===null||sr.origin.distanceToSquared(vf)>(e.far-e.near)**2))&&(bf.copy(o).invert(),sr.copy(e.ray).applyMatrix4(bf),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=s[g.materialIndex],w=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let b=w,x=y;b<x;b+=3){let M=a.getX(b),A=a.getX(b+1),v=a.getX(b+2);r=va(this,m,e,n,c,u,h,M,A,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let w=a.getX(g),y=a.getX(g+1),b=a.getX(g+2);r=va(this,s,e,n,c,u,h,w,y,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=s[g.materialIndex],w=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=w,x=y;b<x;b+=3){let M=b,A=b+1,v=b+2;r=va(this,m,e,n,c,u,h,M,A,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let w=g,y=g+1,b=g+2;r=va(this,s,e,n,c,u,h,w,y,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function s_(i,e,t,n,r,o,s,a){let l;if(e.side===Qt?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===oi,a),l===null)return null;ba.copy(a),ba.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ba);return c<t.near||c>t.far?null:{distance:c,point:ba.clone(),object:i}}function va(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,pa),i.getVertexPosition(l,ma),i.getVertexPosition(c,ga);let u=s_(i,e,t,n,pa,ma,ga,xf);if(u){let h=new V;gi.getBarycoord(xf,pa,ma,ga,h),r&&(u.uv=gi.getInterpolatedAttribute(r,a,l,c,h,new Ee)),o&&(u.uv1=gi.getInterpolatedAttribute(o,a,l,c,h,new Ee)),s&&(u.normal=gi.getInterpolatedAttribute(s,a,l,c,h,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new V,materialIndex:0};gi.getNormal(pa,ma,ga,d.normal),u.face=d,u.barycoord=h}return u}var Za=class extends sn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=Yt,u=Yt,h,d){super(null,s,a,l,c,u,r,o,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=new Di,a_=new Ee(.5,.5),xa=new V,Xo=class{constructor(e=new yn,t=new yn,n=new yn,r=new yn,o=new yn,s=new yn){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],c=o[3],u=o[4],h=o[5],d=o[6],f=o[7],p=o[8],_=o[9],g=o[10],m=o[11],w=o[12],y=o[13],b=o[14],x=o[15];if(r[0].setComponents(c-s,f-u,m-p,x-w).normalize(),r[1].setComponents(c+s,f+u,m+p,x+w).normalize(),r[2].setComponents(c+a,f+h,m+_,x+y).normalize(),r[3].setComponents(c-a,f-h,m-_,x-y).normalize(),n)r[4].setComponents(l,d,g,b).normalize(),r[5].setComponents(c-l,f-d,m-g,x-b).normalize();else if(r[4].setComponents(c-l,f-d,m-g,x-b).normalize(),t===On)r[5].setComponents(c+l,f+d,m+g,x+b).normalize();else if(t===Vo)r[5].setComponents(l,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);let t=a_.distanceTo(e.center);return ar.radius=.7071067811865476+t,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(xa.x=r.normal.x>0?e.max.x:e.min.x,xa.y=r.normal.y>0?e.max.y:e.min.y,xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qt=class extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$a=new V,Ja=new V,yf=new Pt,Fo=new hr,ya=new Di,Iu=new V,wf=new V,ja=class extends _n{constructor(e=new We,t=new qt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)$a.fromBufferAttribute(t,r-1),Ja.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=$a.distanceTo(Ja);e.setAttribute("lineDistance",new ye(n,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),ya.radius+=o,e.ray.intersectsSphere(ya)===!1)return;yf.copy(r).invert(),Fo.copy(e.ray).applyMatrix4(yf);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let _=f,g=p-1;_<g;_+=c){let m=u.getX(_),w=u.getX(_+1),y=wa(this,e,Fo,l,m,w,_);y&&t.push(y)}if(this.isLineLoop){let _=u.getX(p-1),g=u.getX(f),m=wa(this,e,Fo,l,_,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let _=f,g=p-1;_<g;_+=c){let m=wa(this,e,Fo,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=wa(this,e,Fo,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function wa(i,e,t,n,r,o,s){let a=i.geometry.attributes.position;if($a.fromBufferAttribute(a,r),Ja.fromBufferAttribute(a,o),t.distanceSqToSegment($a,Ja,Iu,wf)>n)return;Iu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Iu);if(!(c<e.near||c>e.far))return{distance:c,point:wf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Mf=new V,Sf=new V,Zt=class extends ja{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)Mf.fromBufferAttribute(t,r),Sf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Mf.distanceTo(Sf);e.setAttribute("lineDistance",new ye(n,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var dr=class extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tf=new Pt,Gu=new hr,Ma=new Di,Sa=new V,to=class extends _n{constructor(e=new We,t=new dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=o,e.ray.intersectsSphere(Ma)===!1)return;Tf.copy(r).invert(),Gu.copy(e.ray).applyMatrix4(Tf);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let p=d,_=f;p<_;p++){let g=c.getX(p);Sa.fromBufferAttribute(h,g),Af(Sa,g,l,r,e,t,this)}}else{let d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let p=d,_=f;p<_;p++)Sa.fromBufferAttribute(h,p),Af(Sa,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Af(i,e,t,n,r,o,s){let a=Gu.distanceSqToPoint(i);if(a<t){let l=new V;Gu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Ko=class extends sn{constructor(e=[],t=Gi,n,r,o,s,a,l,c,u){super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vn=class extends sn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zi=class extends sn{constructor(e,t,n=Wn,r,o,s,a=Yt,l=Yt,c,u=ti,h=1){if(u!==ti&&u!==Wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Qa=class extends zi{constructor(e,t=Wn,n=Gi,r,o,s=Yt,a=Yt,l,c=ti){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,o,s,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Yo=class extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ni=class i extends We{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,s,o,0),p("z","y","x",1,-1,n,t,-e,s,o,1),p("x","z","y",1,1,e,n,t,r,s,2),p("x","z","y",1,-1,e,n,-t,r,s,3),p("x","y","z",1,-1,e,t,n,r,o,4),p("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(h,2));function p(_,g,m,w,y,b,x,M,A,v,S){let T=b/A,P=x/v,C=b/2,R=x/2,E=M/2,I=A+1,L=v+1,N=0,B=0,D=new V;for(let O=0;O<L;O++){let U=O*P-R;for(let Z=0;Z<I;Z++){let q=Z*T-C;D[_]=q*w,D[g]=U*y,D[m]=E,c.push(D.x,D.y,D.z),D[_]=0,D[g]=0,D[m]=M>0?1:-1,u.push(D.x,D.y,D.z),h.push(Z/A),h.push(1-O/v),N+=1}}for(let O=0;O<v;O++)for(let U=0;U<A;U++){let Z=d+U+I*O,q=d+U+I*(O+1),ae=d+(U+1)+I*(O+1),ie=d+(U+1)+I*O;l.push(Z,q,ie),l.push(q,ae,ie),B+=6}a.addGroup(f,B,S),f+=B,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var qo=class i extends We{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let o=[],s=[],a=[],l=[],c=new V,u=new Ee;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),s.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(s[d]/e+1)/2,u.y=(s[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new ye(s,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zo=class i extends We{constructor(e=1,t=1,n=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),o=Math.floor(o);let u=[],h=[],d=[],f=[],p=0,_=[],g=n/2,m=0;w(),s===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(f,2));function w(){let b=new V,x=new V,M=0,A=(t-e)/n;for(let v=0;v<=o;v++){let S=[],T=v/o,P=T*(t-e)+e;for(let C=0;C<=r;C++){let R=C/r,E=R*l+a,I=Math.sin(E),L=Math.cos(E);x.x=P*I,x.y=-T*n+g,x.z=P*L,h.push(x.x,x.y,x.z),b.set(I,A,L).normalize(),d.push(b.x,b.y,b.z),f.push(R,1-T),S.push(p++)}_.push(S)}for(let v=0;v<r;v++)for(let S=0;S<o;S++){let T=_[S][v],P=_[S+1][v],C=_[S+1][v+1],R=_[S][v+1];(e>0||S!==0)&&(u.push(T,P,R),M+=3),(t>0||S!==o-1)&&(u.push(P,C,R),M+=3)}c.addGroup(m,M,0),m+=M}function y(b){let x=p,M=new Ee,A=new V,v=0,S=b===!0?e:t,T=b===!0?1:-1;for(let C=1;C<=r;C++)h.push(0,g*T,0),d.push(0,T,0),f.push(.5,.5),p++;let P=p;for(let C=0;C<=r;C++){let E=C/r*l+a,I=Math.cos(E),L=Math.sin(E);A.x=S*L,A.y=g*T,A.z=S*I,h.push(A.x,A.y,A.z),d.push(0,T,0),M.x=I*.5+.5,M.y=L*.5*T+.5,f.push(M.x,M.y),p++}for(let C=0;C<r;C++){let R=x+C,E=P+C;b===!0?u.push(E,E+1,R):u.push(E+1,E,R),v+=3}c.addGroup(m,v,b===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ta=new V,Aa=new V,Lu=new V,Ea=new gi,$o=class extends We{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),o=Math.cos(Fa*t),s=e.getIndex(),a=e.getAttribute("position"),l=s?s.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){s?(c[0]=s.getX(p),c[1]=s.getX(p+1),c[2]=s.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:g,c:m}=Ea;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Ea.getNormal(Lu),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let w=0;w<3;w++){let y=(w+1)%3,b=h[w],x=h[y],M=Ea[u[w]],A=Ea[u[y]],v=`${b}_${x}`,S=`${x}_${b}`;S in d&&d[S]?(Lu.dot(d[S].normal)<=o&&(f.push(M.x,M.y,M.z),f.push(A.x,A.y,A.z)),d[S]=null):v in d||(d[v]={index0:c[w],index1:c[y],normal:Lu.clone()})}}for(let p in d)if(d[p]){let{index0:_,index1:g}=d[p];Ta.fromBufferAttribute(a,_),Aa.fromBufferAttribute(a,g),f.push(Ta.x,Ta.y,Ta.z),f.push(Aa.x,Aa.y,Aa.z)}this.setAttribute("position",new ye(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),o=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,o=n.length,s;t?s=t:s=e*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-s,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===s)return r/(o-1);let u=n[r],d=n[r+1]-u,f=(s-u)/d;return(r+f)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);let s=this.getPoint(r),a=this.getPoint(o),l=t||(s.isVector2?new Ee:new V);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],o=[],s=[],a=new V,l=new Pt;for(let f=0;f<=e;f++){let p=f/e;r[f]=this.getTangentAt(p,new V)}o[0]=new V,s[0]=new V;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),s[f]=s[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ot(r[f-1].dot(r[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,p))}s[f].crossVectors(r[f],o[f])}if(t===!0){let f=Math.acos(ot(o[0].dot(o[e]),-1,1));f/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(f=-f);for(let p=1;p<=e;p++)o[p].applyMatrix4(l.makeRotationAxis(r[p],f*p)),s[p].crossVectors(r[p],o[p])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Jo=class extends kn{constructor(e=0,t=0,n=1,r=1,o=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ee){let n=t,r=Math.PI*2,o=this.aEndAngle-this.aStartAngle,s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);let a=this.aStartAngle+e*o,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},el=class extends Jo{constructor(e,t,n,r,o,s){super(e,t,n,n,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}};function vh(){let i=0,e=0,t=0,n=0;function r(o,s,a,l){i=o,e=a,t=-3*o+3*s-2*a-l,n=2*o-2*s+a+l}return{initCatmullRom:function(o,s,a,l,c){r(s,a,c*(a-o),c*(l-s))},initNonuniformCatmullRom:function(o,s,a,l,c,u,h){let d=(s-o)/c-(a-o)/(c+u)+(a-s)/u,f=(a-s)/u-(l-s)/(u+h)+(l-a)/h;d*=u,f*=u,r(s,a,d,f)},calc:function(o){let s=o*o,a=s*o;return i+e*o+t*s+n*a}}}var Ef=new V,Rf=new V,Fu=new vh,Du=new vh,zu=new vh,no=class extends kn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e,a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%o]:(Rf.subVectors(r[0],r[1]).add(r[0]),c=Rf);let h=r[a%o],d=r[(a+1)%o];if(this.closed||a+2<o?u=r[(a+2)%o]:(Ef.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=Ef),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Fu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,_,g),Du.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,_,g),zu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(Fu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Du.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),zu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Fu.calc(l),Du.calc(l),zu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new V().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Pf(i,e,t,n,r){let o=(n-e)*.5,s=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+o+s)*l+(-3*t+3*n-2*o-s)*a+o*i+t}function l_(i,e){let t=1-i;return t*t*e}function c_(i,e){return 2*(1-i)*i*e}function u_(i,e){return i*i*e}function zo(i,e,t,n){return l_(i,e)+c_(i,t)+u_(i,n)}function h_(i,e){let t=1-i;return t*t*t*e}function d_(i,e){let t=1-i;return 3*t*t*i*e}function f_(i,e){return 3*(1-i)*i*i*e}function p_(i,e){return i*i*i*e}function No(i,e,t,n,r){return h_(i,e)+d_(i,t)+f_(i,n)+p_(i,r)}var tl=class extends kn{constructor(e=new Ee,t=new Ee,n=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ee){let n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(No(e,r.x,o.x,s.x,a.x),No(e,r.y,o.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nl=class extends kn{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(No(e,r.x,o.x,s.x,a.x),No(e,r.y,o.y,s.y,a.y),No(e,r.z,o.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},il=class extends kn{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rl=class extends kn{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends kn{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(zo(e,r.x,o.x,s.x),zo(e,r.y,o.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends kn{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(zo(e,r.x,o.x,s.x),zo(e,r.y,o.y,s.y),zo(e,r.z,o.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,l=r[s===0?s:s-1],c=r[s],u=r[s>r.length-2?r.length-1:s+1],h=r[s>r.length-3?r.length-1:s+2];return n.set(Pf(a,l.x,c.x,u.x,h.x),Pf(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new Ee().fromArray(r))}return this}},m_=Object.freeze({__proto__:null,ArcCurve:el,CatmullRomCurve3:no,CubicBezierCurve:tl,CubicBezierCurve3:nl,EllipseCurve:Jo,LineCurve:il,LineCurve3:rl,QuadraticBezierCurve:ol,QuadraticBezierCurve3:jo,SplineCurve:sl});function g_(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,o=Tp(i,0,r,t,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=y_(i,e,o,t)),i.length>80*t){a=i[0],l=i[1];let u=a,h=l;for(let d=t;d<r;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Qo(o,s,t,a,l,c,0),s}function Tp(i,e,t,n,r){let o;if(r===I_(i,e,t,n)>0)for(let s=e;s<t;s+=n)o=kf(s/n|0,i[s],i[s+1],o);else for(let s=t-n;s>=e;s-=n)o=kf(s/n|0,i[s],i[s+1],o);return o&&io(o,o.next)&&(ts(o),o=o.next),o}function fr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(io(t,t.next)||It(t.prev,t,t.next)===0)){if(ts(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qo(i,e,t,n,r,o,s){if(!i)return;!s&&o&&A_(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?b_(i,n,r,o):__(i)){e.push(l.i,i.i,c.i),ts(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=v_(fr(i),e),Qo(i,e,t,n,r,o,2)):s===2&&x_(i,e,t,n,r,o):Qo(fr(i),e,t,n,r,o,1);break}}}function __(i){let e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;let r=e.x,o=t.x,s=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,o,s),h=Math.min(a,l,c),d=Math.max(r,o,s),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Do(r,a,o,l,s,c,p.x,p.y)&&It(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function b_(i,e,t,n){let r=i.prev,o=i,s=i.next;if(It(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,u=r.y,h=o.y,d=s.y,f=Math.min(a,l,c),p=Math.min(u,h,d),_=Math.max(a,l,c),g=Math.max(u,h,d),m=Hu(f,p,e,t,n),w=Hu(_,g,e,t,n),y=i.prevZ,b=i.nextZ;for(;y&&y.z>=m&&b&&b.z<=w;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==r&&y!==s&&Do(a,u,l,h,c,d,y.x,y.y)&&It(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==r&&b!==s&&Do(a,u,l,h,c,d,b.x,b.y)&&It(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==r&&y!==s&&Do(a,u,l,h,c,d,y.x,y.y)&&It(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=w;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==r&&b!==s&&Do(a,u,l,h,c,d,b.x,b.y)&&It(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function v_(i,e){let t=i;do{let n=t.prev,r=t.next.next;!io(n,r)&&Ep(n,t,t.next,r)&&es(n,r)&&es(r,n)&&(e.push(n.i,t.i,r.i),ts(t),ts(t.next),t=i=r),t=t.next}while(t!==i);return fr(t)}function x_(i,e,t,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&P_(s,a)){let l=Rp(s,a);s=fr(s,s.next),l=fr(l,l.next),Qo(s,e,t,n,r,o,0),Qo(l,e,t,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function y_(i,e,t,n){let r=[];for(let o=0,s=e.length;o<s;o++){let a=e[o]*n,l=o<s-1?e[o+1]*n:i.length,c=Tp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(R_(c))}r.sort(w_);for(let o=0;o<r.length;o++)t=M_(r[o],t);return t}function w_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function M_(i,e){let t=S_(i,e);if(!t)return e;let n=Rp(t,i);return fr(n,n.next),fr(t,t.next)}function S_(i,e){let t=e,n=i.x,r=i.y,o=-1/0,s;if(io(i,t))return t;do{if(io(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>o&&(o=h,s=t.x<t.next.x?t:t.next,h===n))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0;t=s;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ap(r<c?n:o,r,l,c,r<c?o:n,r,t.x,t.y)){let h=Math.abs(r-t.y)/(n-t.x);es(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&T_(s,t)))&&(s=t,u=h)}t=t.next}while(t!==a);return s}function T_(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function A_(i,e,t,n){let r=i;do r.z===0&&(r.z=Hu(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,E_(r)}function E_(i){let e,t=1;do{let n=i,r;i=null;let o=null;for(e=0;n;){e++;let s=n,a=0;for(let c=0;c<t&&(a++,s=s.nextZ,!!s);c++);let l=t;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,t*=2}while(e>1);return i}function Hu(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function R_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ap(i,e,t,n,r,o,s,a){return(r-s)*(e-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(r-s)*(n-a)}function Do(i,e,t,n,r,o,s,a){return!(i===s&&e===a)&&Ap(i,e,t,n,r,o,s,a)}function P_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!k_(i,e)&&(es(i,e)&&es(e,i)&&C_(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||io(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function io(i,e){return i.x===e.x&&i.y===e.y}function Ep(i,e,t,n){let r=Pa(It(i,e,t)),o=Pa(It(i,e,n)),s=Pa(It(t,n,i)),a=Pa(It(t,n,e));return!!(r!==o&&s!==a||r===0&&Ra(i,t,e)||o===0&&Ra(i,n,e)||s===0&&Ra(t,i,n)||a===0&&Ra(t,e,n))}function Ra(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Pa(i){return i>0?1:i<0?-1:0}function k_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ep(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function es(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function C_(i,e){let t=i,n=!1,r=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Rp(i,e){let t=Wu(i.i,i.x,i.y),n=Wu(e.i,e.x,e.y),r=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function kf(i,e,t,n){let r=Wu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ts(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function I_(i,e,t,n){let r=0;for(let o=e,s=t-n;o<t;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var Xu=class{static triangulate(e,t,n=2){return g_(e,t,n)}},ns=class i{static area(e){let t=e.length,n=0;for(let r=t-1,o=0;o<t;r=o++)n+=e[r].x*e[o].y-e[o].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],o=[];Cf(e),If(n,e);let s=e.length;t.forEach(Cf);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,If(n,t[l]);let a=Xu.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function Cf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function If(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var is=class i extends We{constructor(e=[new Ee(0,-.5),new Ee(.5,0),new Ee(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ot(r,0,Math.PI*2);let o=[],s=[],a=[],l=[],c=[],u=1/t,h=new V,d=new Ee,f=new V,p=new V,_=new V,g=0,m=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:g=e[w+1].x-e[w].x,m=e[w+1].y-e[w].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[w+1].x-e[w].x,m=e[w+1].y-e[w].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let w=0;w<=t;w++){let y=n+w*u*r,b=Math.sin(y),x=Math.cos(y);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*b,h.y=e[M].y,h.z=e[M].x*x,s.push(h.x,h.y,h.z),d.x=w/t,d.y=M/(e.length-1),a.push(d.x,d.y);let A=l[3*M+0]*b,v=l[3*M+1],S=l[3*M+0]*x;c.push(A,v,S)}}for(let w=0;w<t;w++)for(let y=0;y<e.length-1;y++){let b=y+w*e.length,x=b,M=b+e.length,A=b+e.length+1,v=b+1;o.push(x,M,v),o.push(A,v,M)}this.setIndex(o),this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(a,2)),this.setAttribute("normal",new ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Gn=class i extends We{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<u;m++){let w=m*d-s;for(let y=0;y<c;y++){let b=y*h-o;p.push(b,-w,0),_.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){let y=w+c*m,b=w+c*(m+1),x=w+1+c*(m+1),M=w+1+c*m;f.push(y,b,M),f.push(b,x,M)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},rs=class i extends We{constructor(e=.5,t=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/r,f=new V,p=new Ee;for(let _=0;_<=r;_++){for(let g=0;g<=n;g++){let m=o+g/n*s;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let _=0;_<r;_++){let g=_*(n+1);for(let m=0;m<n;m++){let w=m+g,y=w,b=w+n+1,x=w+n+2,M=w+1;a.push(y,b,M),a.push(b,x,M)}}this.setIndex(a),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var os=class i extends We{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(s+a,Math.PI),c=0,u=[],h=new V,d=new V,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let w=[],y=m/n,b=s+y*a,x=e*Math.cos(b),M=Math.sqrt(e*e-x*x),A=0;m===0&&s===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){let S=v/t,T=r+S*o;h.x=-M*Math.cos(T),h.y=x,h.z=M*Math.sin(T),p.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(S+A,1-y),w.push(c++)}u.push(w)}for(let m=0;m<n;m++)for(let w=0;w<t;w++){let y=u[m][w+1],b=u[m][w],x=u[m+1][w],M=u[m+1][w+1];(m!==0||s>0)&&f.push(y,b,M),(m!==n-1||l<Math.PI)&&f.push(b,x,M)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ss=class i extends We{constructor(e=1,t=.4,n=12,r=48,o=Math.PI*2,s=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:o,thetaStart:s,thetaLength:a},n=Math.floor(n),r=Math.floor(r);let l=[],c=[],u=[],h=[],d=new V,f=new V,p=new V;for(let _=0;_<=n;_++){let g=s+_/n*a;for(let m=0;m<=r;m++){let w=m/r*o;f.x=(e+t*Math.cos(g))*Math.cos(w),f.y=(e+t*Math.cos(g))*Math.sin(w),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(m/r),h.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=r;g++){let m=(r+1)*_+g-1,w=(r+1)*(_-1)+g-1,y=(r+1)*(_-1)+g,b=(r+1)*_+g;l.push(m,w,b),l.push(w,y,b)}this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ro=class i extends We{constructor(e=new jo(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,n=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:o};let s=e.computeFrenetFrames(t,o);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let a=new V,l=new V,c=new Ee,u=new V,h=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(f,2));function _(){for(let y=0;y<t;y++)g(y);g(o===!1?t:0),w(),m()}function g(y){u=e.getPointAt(y/t,u);let b=s.normals[y],x=s.binormals[y];for(let M=0;M<=r;M++){let A=M/r*Math.PI*2,v=Math.sin(A),S=-Math.cos(A);l.x=S*b.x+v*x.x,l.y=S*b.y+v*x.y,l.z=S*b.z+v*x.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=t;y++)for(let b=1;b<=r;b++){let x=(r+1)*(y-1)+(b-1),M=(r+1)*y+(b-1),A=(r+1)*y+b,v=(r+1)*(y-1)+b;p.push(x,M,v),p.push(M,A,v)}}function w(){for(let y=0;y<=t;y++)for(let b=0;b<=r;b++)c.x=y/t,c.y=b/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new m_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function gr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Lf(r))r.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Lf(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();e[t][n]=o}else e[t][n]=r.slice();else e[t][n]=r}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=gr(i[t]);for(let r in n)e[r]=n[r]}return e}function Lf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function L_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Pp={clone:gr,merge:cn},F_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F_,this.fragmentShader=D_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=L_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new j().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(r.value);break;case"v3":this.uniforms[n].value=new V().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Lt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Pt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},al=class extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ll=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cl=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Nu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Bi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],o=t[n-1];n:{e:{let s;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=t[++n],e<r)break e}s=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=t[--n-1],e>=o)break e}s=n,n=0;break t}break n}for(;n<s;){let a=n+s>>>1;e<t[a]?s=a:n=a+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=n[o+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ul=class extends Bi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ou,endingEnd:Ou}}intervalChanged_(e,t,n){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Uu:o=e,a=2*t-n;break;case Vu:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uu:s=e,l=2*n-t;break;case Vu:s=1,l=n+r[1]-r[0];break;default:s=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,w=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,y=(-1-f)*g+(1.5+f)*_+.5*p,b=f*g-f*_;for(let x=0;x!==a;++x)o[x]=m*s[u+x]+w*s[c+x]+y*s[l+x]+b*s[h+x];return o}},hl=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)o[d]=s[c+d]*h+s[l+d]*u;return o}},dl=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fl=class extends Bi{interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(r-t),_=1-p;for(let g=0;g!==a;++g)o[g]=s[c+g]*_+s[l+g]*p;return o}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let _=s[c+p],g=s[l+p],m=f*d+p*2,w=h[m],y=h[m+1],b=e*d+p*2,x=u[b],M=u[b+1],A=N_(n,t,w,x,r);o[p]=kp(A,_,y,M,g)}return o}};function kp(i,e,t,n,r){let o=1-i;return o*o*o*e+3*o*o*i*t+3*o*i*i*n+i*i*i*r}function z_(i,e,t,n,r){let o=1-i;return 3*o*o*(t-e)+6*o*i*(n-t)+3*i*i*(r-n)}function N_(i,e,t,n,r){let o=(i-e)/(r-e);for(let s=0;s<8;s++){let a=kp(o,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let l=z_(o,e,t,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var Mn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wr(t,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wr(e.times,Array),values:Wr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Nu(e.settings)&&(n.settings={inTangents:Wr(e.settings.inTangents,Array),outTangents:Wr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Bo:t=this.InterpolantFactoryMethodDiscrete;break;case Wa:t=this.InterpolantFactoryMethodLinear;break;case Ia:t=this.InterpolantFactoryMethodSmooth;break;case Bu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return Ia;case this.InterpolantFactoryMethodBezier:return Bu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Nu(this.settings)&&(Ff(this.settings.inTangents,e),Ff(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<e;)++o;for(;s!==-1&&n[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,o=n.length;o===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){qe("KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(r!==void 0&&G0(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ia,o=e.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let _=t[h+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];let h=a*n,d=s*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++s}}if(o>0){e[s]=e[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Nu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ff(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Wa;var Oi=class extends Mn{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Bo;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}};pl.prototype.ValueTypeName="color";var ml=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}};ml.prototype.ValueTypeName="number";var gl=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)ii.slerpFlat(o,0,s,c-a,s,c,l);return o}},as=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}};as.prototype.ValueTypeName="quaternion";as.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Mn{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Bo;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}};_l.prototype.ValueTypeName="vector";var Da={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Df(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Df(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Df(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var bl=class{constructor(e,t,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cp=new bl,oo=class{constructor(e){this.manager=e!==void 0?e:Cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xr=new WeakMap,vl=class extends oo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,s=Da.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let h=Xr.get(s);h===void 0&&(h=[],Xr.set(s,h)),h.push({onLoad:t,onError:r})}return s}let a=$r("img");function l(){u(),t&&t(this);let h=Xr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Xr.delete(this),o.manager.itemEnd(e)}function c(h){u(),r&&r(h),Da.remove(`image:${e}`);let d=Xr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}Xr.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Da.add(`image:${e}`,a),o.manager.itemStart(e),a.src=e,a}};var ls=class extends oo{constructor(e){super(e)}load(e,t,n,r){let o=new sn,s=new vl(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}};var ka=new V,Ca=new ii,ei=new V,cs=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ka,Ca,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ca,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ka,Ca,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ca,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new V,zf=new Ee,Nf=new Ee,on=class extends cs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,zf,Nf),t.subVectors(Nf,zf)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ri=class extends cs{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Kr=-90,Yr=1,xl=class extends _n{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new on(Kr,Yr,e,t);r.layers=this.layers,this.add(r);let o=new on(Kr,Yr,e,t);o.layers=this.layers,this.add(o);let s=new on(Kr,Yr,e,t);s.layers=this.layers,this.add(s);let a=new on(Kr,Yr,e,t);a.layers=this.layers,this.add(a);let l=new on(Kr,Yr,e,t);l.layers=this.layers,this.add(l);let c=new on(Kr,Yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(let c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},yl=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var yh="\\[\\]\\.:\\/",B_=new RegExp("["+yh+"]","g"),wh="[^"+yh+"]",O_="[^"+yh.replace("\\.","")+"]",U_=/((?:WC+[\/:])*)/.source.replace("WC",wh),V_=/(WCOD+)?/.source.replace("WCOD",O_),G_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),H_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),W_=new RegExp("^"+U_+V_+G_+H_+"$"),X_=["material","materials","bones","map"],Ku=class{constructor(e,t,n){let r=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(B_,"")}static parseTrackName(e){let t=W_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);X_.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,o=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[r];if(s===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Ku;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var n2=new Float32Array(1);var Bf=new Pt,us=class{constructor(e,t,n=0,r=1/0){this.ray=new hr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bf),this}intersectObject(e,t=!0,n=[]){return Yu(e,this,n,t),n.sort(Of),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)Yu(e[r],this,n,t);return n.sort(Of),n}};function Of(i,e){return i.distance-e.distance}function Yu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)Yu(o[s],e,t,!0)}}var Rh=class Rh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let o=this.elements;return o[0]=e,o[2]=t,o[1]=n,o[3]=r,this}};Rh.prototype.isMatrix2=!0;var qu=Rh;function Mh(i,e,t,n){let r=K_(n);switch(t){case dh:return i*e;case ph:return i*e/r.components*r.byteLength;case Pl:return i*e/r.components*r.byteLength;case Xi:return i*e*2/r.components*r.byteLength;case kl:return i*e*2/r.components*r.byteLength;case fh:return i*e*3/r.components*r.byteLength;case Cn:return i*e*4/r.components*r.byteLength;case Cl:return i*e*4/r.components*r.byteLength;case ms:case gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _s:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:case Dl:return Math.max(i,16)*Math.max(e,8)/4;case Il:case Fl:return Math.max(i,8)*Math.max(e,8)/2;case zl:case Nl:case Ol:case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bl:case vs:case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case nc:case ic:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case oc:case sc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xs:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function K_(i){switch(i){case Sn:case lh:return{byteLength:1,components:1};case ao:case ch:case Kn:return{byteLength:2,components:1};case El:case Rl:return{byteLength:2,components:4};case Wn:case Al:case Xn:return{byteLength:4,components:1};case uh:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Qp(){let i=null,e=!1,t=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),t(o,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function eb(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var tb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nb=`#ifdef USE_ALPHAHASH
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
#endif`,ib=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ab=`#ifdef USE_AOMAP
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
#endif`,lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cb=`#ifdef USE_BATCHING
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
#endif`,ub=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,db=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pb=`#ifdef USE_IRIDESCENCE
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
#endif`,mb=`#ifdef USE_BUMPMAP
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
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sb=`#define PI 3.141592653589793
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
} // validated`,Tb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ab=`vec3 transformedNormal = objectNormal;
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
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Fb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
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
#endif`,zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ub=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gb=`#ifdef USE_GRADIENTMAP
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
}`,Hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yb=`#ifdef USE_ENVMAP
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
#endif`,qb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$b=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jb=`PhysicalMaterial material;
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
#endif`,Qb=`uniform sampler2D dfgLUT;
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
}`,ev=`
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
#endif`,tv=`#if defined( RE_IndirectDiffuse )
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
#endif`,nv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hv=`#if defined( USE_POINTS_UV )
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
#endif`,dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_v=`#ifdef USE_MORPHTARGETS
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
#endif`,bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sv=`#ifdef USE_NORMALMAP
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
#endif`,Tv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uv=`float getShadowMask() {
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
}`,Vv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gv=`#ifdef USE_SKINNING
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
#endif`,Hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wv=`#ifdef USE_SKINNING
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
#endif`,Xv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zv=`#ifdef USE_TRANSMISSION
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
#endif`,$v=`#ifdef USE_TRANSMISSION
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nx=`uniform sampler2D t2D;
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`#include <common>
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
}`,lx=`#if DEPTH_PACKING == 3200
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
}`,cx=`#define DISTANCE
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
}`,ux=`#define DISTANCE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#include <common>
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
}`,gx=`uniform vec3 diffuse;
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
}`,_x=`#define LAMBERT
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
}`,bx=`#define LAMBERT
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
}`,vx=`#define MATCAP
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
}`,xx=`#define MATCAP
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
}`,yx=`#define NORMAL
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
}`,wx=`#define NORMAL
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
}`,Mx=`#define PHONG
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
}`,Sx=`#define PHONG
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
}`,Tx=`#define STANDARD
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
}`,Ax=`#define STANDARD
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
}`,Ex=`#define TOON
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
}`,Rx=`#define TOON
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
}`,Px=`uniform float size;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Ix=`uniform vec3 color;
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
}`,Lx=`uniform float rotation;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:tb,alphahash_pars_fragment:nb,alphamap_fragment:ib,alphamap_pars_fragment:rb,alphatest_fragment:ob,alphatest_pars_fragment:sb,aomap_fragment:ab,aomap_pars_fragment:lb,batching_pars_vertex:cb,batching_vertex:ub,begin_vertex:hb,beginnormal_vertex:db,bsdfs:fb,iridescence_fragment:pb,bumpmap_pars_fragment:mb,clipping_planes_fragment:gb,clipping_planes_pars_fragment:_b,clipping_planes_pars_vertex:bb,clipping_planes_vertex:vb,color_fragment:xb,color_pars_fragment:yb,color_pars_vertex:wb,color_vertex:Mb,common:Sb,cube_uv_reflection_fragment:Tb,defaultnormal_vertex:Ab,displacementmap_pars_vertex:Eb,displacementmap_vertex:Rb,emissivemap_fragment:Pb,emissivemap_pars_fragment:kb,colorspace_fragment:Cb,colorspace_pars_fragment:Ib,envmap_fragment:Lb,envmap_common_pars_fragment:Fb,envmap_pars_fragment:Db,envmap_pars_vertex:zb,envmap_physical_pars_fragment:Yb,envmap_vertex:Nb,fog_vertex:Bb,fog_pars_vertex:Ob,fog_fragment:Ub,fog_pars_fragment:Vb,gradientmap_pars_fragment:Gb,lightmap_pars_fragment:Hb,lights_lambert_fragment:Wb,lights_lambert_pars_fragment:Xb,lights_pars_begin:Kb,lights_toon_fragment:qb,lights_toon_pars_fragment:Zb,lights_phong_fragment:$b,lights_phong_pars_fragment:Jb,lights_physical_fragment:jb,lights_physical_pars_fragment:Qb,lights_fragment_begin:ev,lights_fragment_maps:tv,lights_fragment_end:nv,lightprobes_pars_fragment:iv,logdepthbuf_fragment:rv,logdepthbuf_pars_fragment:ov,logdepthbuf_pars_vertex:sv,logdepthbuf_vertex:av,map_fragment:lv,map_pars_fragment:cv,map_particle_fragment:uv,map_particle_pars_fragment:hv,metalnessmap_fragment:dv,metalnessmap_pars_fragment:fv,morphinstance_vertex:pv,morphcolor_vertex:mv,morphnormal_vertex:gv,morphtarget_pars_vertex:_v,morphtarget_vertex:bv,normal_fragment_begin:vv,normal_fragment_maps:xv,normal_pars_fragment:yv,normal_pars_vertex:wv,normal_vertex:Mv,normalmap_pars_fragment:Sv,clearcoat_normal_fragment_begin:Tv,clearcoat_normal_fragment_maps:Av,clearcoat_pars_fragment:Ev,iridescence_pars_fragment:Rv,opaque_fragment:Pv,packing:kv,premultiplied_alpha_fragment:Cv,project_vertex:Iv,dithering_fragment:Lv,dithering_pars_fragment:Fv,roughnessmap_fragment:Dv,roughnessmap_pars_fragment:zv,shadowmap_pars_fragment:Nv,shadowmap_pars_vertex:Bv,shadowmap_vertex:Ov,shadowmask_pars_fragment:Uv,skinbase_vertex:Vv,skinning_pars_vertex:Gv,skinning_vertex:Hv,skinnormal_vertex:Wv,specularmap_fragment:Xv,specularmap_pars_fragment:Kv,tonemapping_fragment:Yv,tonemapping_pars_fragment:qv,transmission_fragment:Zv,transmission_pars_fragment:$v,uv_pars_fragment:Jv,uv_pars_vertex:jv,uv_vertex:Qv,worldpos_vertex:ex,background_vert:tx,background_frag:nx,backgroundCube_vert:ix,backgroundCube_frag:rx,cube_vert:ox,cube_frag:sx,depth_vert:ax,depth_frag:lx,distance_vert:cx,distance_frag:ux,equirect_vert:hx,equirect_frag:dx,linedashed_vert:fx,linedashed_frag:px,meshbasic_vert:mx,meshbasic_frag:gx,meshlambert_vert:_x,meshlambert_frag:bx,meshmatcap_vert:vx,meshmatcap_frag:xx,meshnormal_vert:yx,meshnormal_frag:wx,meshphong_vert:Mx,meshphong_frag:Sx,meshphysical_vert:Tx,meshphysical_frag:Ax,meshtoon_vert:Ex,meshtoon_frag:Rx,points_vert:Px,points_frag:kx,shadow_vert:Cx,shadow_frag:Ix,sprite_vert:Lx,sprite_frag:Fx},Me={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},li={basic:{uniforms:cn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:cn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new j(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:cn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:cn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:cn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new j(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:cn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:cn([Me.points,Me.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:cn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:cn([Me.common,Me.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:cn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:cn([Me.sprite,Me.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:cn([Me.common,Me.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:cn([Me.lights,Me.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};li.physical={uniforms:cn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var uc={r:0,b:0,g:0},Dx=new Pt,em=new $e;em.set(-1,0,0,0,1,0,0,0,1);function zx(i,e,t,n,r,o){let s=new j(0),a=r===!0?0:1,l,c,u=null,h=0,d=null;function f(w){let y=w.isScene===!0?w.background:null;if(y&&y.isTexture){let b=w.backgroundBlurriness>0;y=e.get(y,b)}return y}function p(w){let y=!1,b=f(w);b===null?g(s,a):b&&b.isColor&&(g(b,1),y=!0);let x=i.xr.getEnvironmentBlendMode();x==="additive"?t.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(w,y){let b=f(y);b&&(b.isCubeTexture||b.mapping===fs)?(c===void 0&&(c=new Be(new Ni(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:gr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(y.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(em),c.material.toneMapped=ht.getTransfer(b.colorSpace)!==xt,(u!==b||h!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Be(new Gn(2,2),new ln({name:"BackgroundMaterial",uniforms:gr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ht.getTransfer(b.colorSpace)!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,y){w.getRGB(uc,xh(i)),t.buffers.color.setClear(uc.r,uc.g,uc.b,y,o)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(w,y=1){s.set(w),a=y,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,g(s,a)},render:p,addToRenderList:_,dispose:m}}function Nx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),o=r,s=!1;function a(P,C,R,E,I){let L=!1,N=h(P,E,R,C);o!==N&&(o=N,c(o.object)),L=f(P,E,R,I),L&&p(P,E,R,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(L||s)&&(s=!1,b(P,C,R,E),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function h(P,C,R,E){let I=E.wireframe===!0,L=n[C.id];L===void 0&&(L={},n[C.id]=L);let N=P.isInstancedMesh===!0?P.id:0,B=L[N];B===void 0&&(B={},L[N]=B);let D=B[R.id];D===void 0&&(D={},B[R.id]=D);let O=D[I];return O===void 0&&(O=d(l()),D[I]=O),O}function d(P){let C=[],R=[],E=[];for(let I=0;I<t;I++)C[I]=0,R[I]=0,E[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:R,attributeDivisors:E,object:P,attributes:{},index:null}}function f(P,C,R,E){let I=o.attributes,L=C.attributes,N=0,B=R.getAttributes();for(let D in B)if(B[D].location>=0){let U=I[D],Z=L[D];if(Z===void 0&&(D==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),D==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;N++}return o.attributesNum!==N||o.index!==E}function p(P,C,R,E){let I={},L=C.attributes,N=0,B=R.getAttributes();for(let D in B)if(B[D].location>=0){let U=L[D];U===void 0&&(D==="instanceMatrix"&&P.instanceMatrix&&(U=P.instanceMatrix),D==="instanceColor"&&P.instanceColor&&(U=P.instanceColor));let Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),I[D]=Z,N++}o.attributes=I,o.attributesNum=N,o.index=E}function _(){let P=o.newAttributes;for(let C=0,R=P.length;C<R;C++)P[C]=0}function g(P){m(P,0)}function m(P,C){let R=o.newAttributes,E=o.enabledAttributes,I=o.attributeDivisors;R[P]=1,E[P]===0&&(i.enableVertexAttribArray(P),E[P]=1),I[P]!==C&&(i.vertexAttribDivisor(P,C),I[P]=C)}function w(){let P=o.newAttributes,C=o.enabledAttributes;for(let R=0,E=C.length;R<E;R++)C[R]!==P[R]&&(i.disableVertexAttribArray(R),C[R]=0)}function y(P,C,R,E,I,L,N){N===!0?i.vertexAttribIPointer(P,C,R,I,L):i.vertexAttribPointer(P,C,R,E,I,L)}function b(P,C,R,E){_();let I=E.attributes,L=R.getAttributes(),N=C.defaultAttributeValues;for(let B in L){let D=L[B];if(D.location>=0){let O=I[B];if(O===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(O=P.instanceColor)),O!==void 0){let U=O.normalized,Z=O.itemSize,q=e.get(O);if(q===void 0)continue;let ae=q.buffer,ie=q.type,le=q.bytesPerElement,H=ie===i.INT||ie===i.UNSIGNED_INT||O.gpuType===Al;if(O.isInterleavedBufferAttribute){let W=O.data,re=W.stride,ce=O.offset;if(W.isInstancedInterleavedBuffer){for(let $=0;$<D.locationSize;$++)m(D.location+$,W.meshPerAttribute);P.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let $=0;$<D.locationSize;$++)g(D.location+$);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let $=0;$<D.locationSize;$++)y(D.location+$,Z/D.locationSize,ie,U,re*le,(ce+Z/D.locationSize*$)*le,H)}else{if(O.isInstancedBufferAttribute){for(let W=0;W<D.locationSize;W++)m(D.location+W,O.meshPerAttribute);P.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let W=0;W<D.locationSize;W++)g(D.location+W);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let W=0;W<D.locationSize;W++)y(D.location+W,Z/D.locationSize,ie,U,Z*le,Z/D.locationSize*W*le,H)}}else if(N!==void 0){let U=N[B];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(D.location,U);break;case 3:i.vertexAttrib3fv(D.location,U);break;case 4:i.vertexAttrib4fv(D.location,U);break;default:i.vertexAttrib1fv(D.location,U)}}}}w()}function x(){S();for(let P in n){let C=n[P];for(let R in C){let E=C[R];for(let I in E){let L=E[I];for(let N in L)u(L[N].object),delete L[N];delete E[I]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let C=n[P.id];for(let R in C){let E=C[R];for(let I in E){let L=E[I];for(let N in L)u(L[N].object),delete L[N];delete E[I]}}delete n[P.id]}function A(P){for(let C in n){let R=n[C];for(let E in R){let I=R[E];if(I[P.id]===void 0)continue;let L=I[P.id];for(let N in L)u(L[N].object),delete L[N];delete I[P.id]}}}function v(P){for(let C in n){let R=n[C],E=P.isInstancedMesh===!0?P.id:0,I=R[E];if(I!==void 0){for(let L in I){let N=I[L];for(let B in N)u(N[B].object),delete N[B];delete I[L]}delete R[E],Object.keys(R).length===0&&delete n[C]}}}function S(){T(),s=!0,o!==r&&(o=r,c(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function Bx(i,e,t){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function Ox(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==Cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Sn&&A!==Xn&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:M}}function Ux(i){let e=this,t=null,n=0,r=!1,o=!1,s=new yn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||o&&!g)o?u(null):c();else{let w=o?0:n,y=w*4,b=m.clippingState||null;l.value=b,b=u(p,d,y,f);for(let x=0;x!==y;++x)b[x]=t[x];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,b=f;y!==_;++y,b+=4)s.copy(h[y]).applyMatrix4(w,a),s.normal.toArray(g,b),g[b+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var uo=4,Vx=6,Gx=20,Hx=256,ws=new ri,Ip=new j,Ph=null,kh=0,Ch=0,Ih=!1,Wx=new V,_r=new V,dc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,o={}){let{size:s=256,position:a=Wx}=o;Ph=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ph,kh,Ch),this._renderer.xr.enabled=Ih,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ph=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Kn,format:Cn,colorSpace:Oo,depthBuffer:!1},r=Lp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,t,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xx(o)),this._blurMaterial=Yx(o,e,t),this._ggxMaterial=Kx(o,e,t)}return r}_compileMaterial(e){let t=new Be(new We,e);this._renderer.compile(t,ws)}_sceneToCubeUV(e,t,n,r,o){let l=new on(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ip),h.toneMapping=Hn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Be(new Ni,new Qe({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,m=!0):(g.color.copy(Ip),m=!0);for(let y=0;y<6;y++){let b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[y],o.y,o.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[y],o.z)):(l.up.set(0,c[y],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[y]));let x=this._cubeSize;co(r,b*x,y>2?x:0,x,x),h.setRenderTarget(r),m&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Gi||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let l=this._cubeSize;co(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,ws)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-uo?n-p+uo:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,co(o,g,m,3*_,2*_),r.setRenderTarget(o),r.render(a,ws),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,co(e,g,m,3*_,2*_),r.setRenderTarget(e),r.render(a,ws)}_blur(e,t,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,n,s),this._blurPass(o,e,n,n,s)}_blurPass(e,t,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-uo?r-this._lodMax+uo:0),d=4*(this._cubeSize-u);co(t,h,d,3*u,2*u),s.setRenderTarget(t),s.render(l,ws)}};function Xx(i){let e=[],t=[],n=i,r=i-uo+1+Vx;for(let o=0;o<r;o++){let s=Math.pow(2,n);e.push(s);let a=1/(s-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,p=new Float32Array(f*d*h),_=new Float32Array(f*d*h);for(let m=0;m<h;m++){let w=m%3*2/3-1,y=m>2?0:-1,b=[w,y,0,w+2/3,y,0,w+2/3,y+1,0,w,y,0,w+2/3,y+1,0,w,y+1,0];p.set(b,f*d*m);for(let x=0;x<d;x++){let M=u[x*2]*2-1,A=u[x*2+1]*2-1;m===0?_r.set(1,A,M):m===1?_r.set(-M,1,-A):m===2?_r.set(-M,A,1):m===3?_r.set(-1,A,-M):m===4?_r.set(-M,-1,A):_r.set(M,A,-1),_r.toArray(_,(m*d+x)*f)}}let g=new We;g.setAttribute("position",new gn(p,f)),g.setAttribute("outputDirection",new gn(_,f)),t.push(new Be(g,null)),n>uo&&n--}return{lodMeshes:t,sizeLods:e}}function Lp(i,e,t){let n=new an(i,e,t);return n.texture.mapping=fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Kx(i,e,t){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Yx(i,e,t){return new ln({name:"SphericalGaussianBlur",defines:{SAMPLES:Gx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Fp(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Dp(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fc=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ko(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ni(5,5,5),o=new ln({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:si});o.uniforms.tEquirect.value=t;let s=new Be(r,o),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=jt),new xl(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}};function qx(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,f=!1){return d==null?null:f?s(d):o(d)}function o(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ml||f===Sl)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let _=new fc(p.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){let f=d.mapping,p=f===Ml||f===Sl,_=f===Gi||f===mr;if(p||_){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new dc(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let w=d.image;return p&&w&&w.height>0||_&&w&&l(w)?(n===null&&(n=new dc(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,f){return f===Ml?d.mapping=Gi:f===Sl&&(d.mapping=mr),d}function l(d){let f=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function Zx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&lr("WebGLRenderer: "+n+" extension not supported."),r}}}function $x(i,e,t,n){let r={},o=new WeakMap;function s(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",s),delete r[d.id];let f=o.get(d);f&&(e.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,p=h.attributes.position,_=0;if(p===void 0)return;if(f!==null){let w=f.array;_=f.version;for(let y=0,b=w.length;y<b;y+=3){let x=w[y+0],M=w[y+1],A=w[y+2];d.push(x,M,M,A,A,x)}}else{let w=p.array;_=p.version;for(let y=0,b=w.length/3-1;y<b;y+=3){let x=y+0,M=y+1,A=y+2;d.push(x,M,M,A,A,x)}}let g=new(p.count>=65535?ur:Wo)(d,1);g.version=_;let m=o.get(h);m&&e.remove(m),o.set(h,g)}function u(h){let d=o.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Jx(i,e,t){let n;function r(h){n=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,d){i.drawElements(n,d,o,h*s),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,o,h*s,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,h,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];t.update(_,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function jx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:qe("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Qx(i,e,t){let n=new WeakMap,r=new Lt;function o(s,a,l){let c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let b=a.attributes.position.count*y,x=1;b>e.maxTextureSize&&(x=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let M=new Float32Array(b*x*4*h),A=new Go(M,b,x,h);A.type=Xn,A.needsUpdate=!0;let v=y*4;for(let T=0;T<h;T++){let P=g[T],C=m[T],R=w[T],E=b*x*4*T;for(let I=0;I<P.count;I++){let L=I*v;f===!0&&(r.fromBufferAttribute(P,I),M[E+L+0]=r.x,M[E+L+1]=r.y,M[E+L+2]=r.z,M[E+L+3]=0),p===!0&&(r.fromBufferAttribute(C,I),M[E+L+4]=r.x,M[E+L+5]=r.y,M[E+L+6]=r.z,M[E+L+7]=0),_===!0&&(r.fromBufferAttribute(R,I),M[E+L+8]=r.x,M[E+L+9]=r.y,M[E+L+10]=r.z,M[E+L+11]=R.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new Ee(b,x)},n.set(a,d),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function ey(i,e,t,n,r){let o=new WeakMap;function s(c){let u=r.render.frame,h=c.geometry,d=e.get(c,h);if(o.get(d)!==u&&(e.update(d),o.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;o.get(f)!==u&&(f.update(),o.set(f,u))}return d}function a(){o=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}var ty={[eh]:"LINEAR_TONE_MAPPING",[th]:"REINHARD_TONE_MAPPING",[nh]:"CINEON_TONE_MAPPING",[ih]:"ACES_FILMIC_TONE_MAPPING",[oh]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[rh]:"CUSTOM_TONE_MAPPING"};function ny(i,e,t,n,r,o){let s=new an(e,t,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new We;c.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ye([0,2,0,0,2,0],2));let u=new al({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Be(c,u),d=new ri(-1,1,1,-1,0,1),f=null,p=null,_=!1,g,m=null,w=[],y=!1;this.setSize=function(b,x){s.setSize(b,x),a!==null&&a.setSize(b,x),l!==null&&l.setSize(b,x);for(let M=0;M<w.length;M++){let A=w[M];A.setSize&&A.setSize(b,x)}},this.setEffects=function(b){w=b,y=w.length>0&&w[0].isRenderPass===!0;let x=s.width,M=s.height;w.length>0&&a===null&&(a=new an(x,M,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new an(x,M,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<w.length;A++){let v=w[A];v.setSize&&v.setSize(x,M)}},this.begin=function(b,x){if(_||b.toneMapping===Hn&&w.length===0)return!1;if(m=x,x!==null){let M=x.width,A=x.height;(s.width!==M||s.height!==A)&&this.setSize(M,A)}return y===!1&&b.setRenderTarget(s),g=b.toneMapping,b.toneMapping=Hn,!0},this.hasRenderPass=function(){return y},this.end=function(b,x){b.toneMapping=g,_=!0;let M=s,A=a;for(let v=0;v<w.length;v++){let S=w[v];S.enabled!==!1&&(S.render(b,A,M,x),S.needsSwap!==!1&&(M=A,A=A===a?l:a))}if(f!==b.outputColorSpace||p!==b.toneMapping){f=b.outputColorSpace,p=b.toneMapping,u.defines={},ht.getTransfer(f)===xt&&(u.defines.SRGB_TRANSFER="");let v=ty[p];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(m),b.render(h,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var tm=new sn,Dh=new zi(1,1),nm=new Go,im=new qa,rm=new Ko,zp=[],Np=[],Bp=new Float32Array(16),Op=new Float32Array(9),Up=new Float32Array(4);function fo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,o=zp[r];if(o===void 0&&(o=new Float32Array(r),zp[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function mc(i,e){let t=Np[e];t===void 0&&(t=new Int32Array(e),Np[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function iy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function ay(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Up.set(n),i.uniformMatrix2fv(this.addr,!1,Up),Ht(t,n)}}function ly(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Op.set(n),i.uniformMatrix3fv(this.addr,!1,Op),Ht(t,n)}}function cy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Bp.set(n),i.uniformMatrix4fv(this.addr,!1,Bp),Ht(t,n)}}function uy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function py(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function my(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function _y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function by(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Dh.compareFunction=t.isReversedDepthBuffer()?cc:lc,o=Dh):o=tm,t.setTexture2D(e||o,r)}function vy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||im,r)}function xy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||rm,r)}function yy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||nm,r)}function wy(i){switch(i){case 5126:return iy;case 35664:return ry;case 35665:return oy;case 35666:return sy;case 35674:return ay;case 35675:return ly;case 35676:return cy;case 5124:case 35670:return uy;case 35667:case 35671:return hy;case 35668:case 35672:return dy;case 35669:case 35673:return fy;case 5125:return py;case 36294:return my;case 36295:return gy;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return yy}}function My(i,e){i.uniform1fv(this.addr,e)}function Sy(i,e){let t=fo(e,this.size,2);i.uniform2fv(this.addr,t)}function Ty(i,e){let t=fo(e,this.size,3);i.uniform3fv(this.addr,t)}function Ay(i,e){let t=fo(e,this.size,4);i.uniform4fv(this.addr,t)}function Ey(i,e){let t=fo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ry(i,e){let t=fo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Py(i,e){let t=fo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ky(i,e){i.uniform1iv(this.addr,e)}function Cy(i,e){i.uniform2iv(this.addr,e)}function Iy(i,e){i.uniform3iv(this.addr,e)}function Ly(i,e){i.uniform4iv(this.addr,e)}function Fy(i,e){i.uniform1uiv(this.addr,e)}function Dy(i,e){i.uniform2uiv(this.addr,e)}function zy(i,e){i.uniform3uiv(this.addr,e)}function Ny(i,e){i.uniform4uiv(this.addr,e)}function By(i,e,t){let n=this.cache,r=e.length,o=mc(t,r);Gt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=Dh:s=tm;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function Oy(i,e,t){let n=this.cache,r=e.length,o=mc(t,r);Gt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||im,o[s])}function Uy(i,e,t){let n=this.cache,r=e.length,o=mc(t,r);Gt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||rm,o[s])}function Vy(i,e,t){let n=this.cache,r=e.length,o=mc(t,r);Gt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||nm,o[s])}function Gy(i){switch(i){case 5126:return My;case 35664:return Sy;case 35665:return Ty;case 35666:return Ay;case 35674:return Ey;case 35675:return Ry;case 35676:return Py;case 5124:case 35670:return ky;case 35667:case 35671:return Cy;case 35668:case 35672:return Iy;case 35669:case 35673:return Ly;case 5125:return Fy;case 36294:return Dy;case 36295:return zy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Vy}}var zh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wy(t.type)}},Nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gy(t.type)}},Bh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],n)}}},Lh=/(\w+)(\])?(\[|\.)?/g;function Vp(i,e){i.seq.push(e),i.map[e.id]=e}function Hy(i,e,t){let n=i.name,r=n.length;for(Lh.lastIndex=0;;){let o=Lh.exec(n),s=Lh.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Vp(t,c===void 0?new zh(a,i,e):new Nh(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Bh(a),Vp(t,h)),t=h}}}var ho=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);Hy(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,n,r){let o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function Gp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Wy=37297,Xy=0;function Ky(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}var Hp=new $e;function Yy(i){ht._getMatrix(Hp,ht.workingColorSpace,i);let e=`mat3( ${Hp.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Uo:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+Ky(i.getShaderSource(e),a)}else return o}function qy(i,e){let t=Yy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Zy={[eh]:"Linear",[th]:"Reinhard",[nh]:"Cineon",[ih]:"ACESFilmic",[oh]:"AgX",[sh]:"Neutral",[rh]:"Custom"};function $y(i,e){let t=Zy[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var hc=new V;function Jy(){ht.getLuminanceCoefficients(hc);let i=hc.x.toFixed(4),e=hc.y.toFixed(4),t=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function Qy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ew(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Ss(i){return i!==""}function Xp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(i){return i.replace(tw,iw)}var nw=new Map;function iw(i,e){let t=rt[e];if(t===void 0){let n=nw.get(e);if(n!==void 0)t=rt[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Oh(t)}var rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(i){return i.replace(rw,ow)}function ow(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function qp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var sw={[hs]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};function aw(i){return sw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lw={[Gi]:"ENVMAP_TYPE_CUBE",[mr]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE_UV"};function cw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":lw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var uw={[mr]:"ENVMAP_MODE_REFRACTION"};function hw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":uw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dw={[Qu]:"ENVMAP_BLENDING_MULTIPLY",[ap]:"ENVMAP_BLENDING_MIX",[lp]:"ENVMAP_BLENDING_ADD"};function fw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dw[i.combine]||"ENVMAP_BLENDING_NONE"}function pw(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mw(i,e,t,n){let r=i.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,l=aw(t),c=cw(t),u=hw(t),h=fw(t),d=pw(t),f=jy(t),p=Qy(o),_=r.createProgram(),g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ss).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ss).join(`
`),m.length>0&&(m+=`
`)):(g=[qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),m=[qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Hn?$y("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,qy("linearToOutputTexel",t.outputColorSpace),Jy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),s=Oh(s),s=Xp(s,t),s=Kp(s,t),a=Oh(a),a=Xp(a,t),a=Kp(a,t),s=Yp(s),a=Yp(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=w+g+s,b=w+m+a,x=Gp(r,r.VERTEX_SHADER,y),M=Gp(r,r.FRAGMENT_SHADER,b);r.attachShader(_,x),r.attachShader(_,M),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){let C=r.getProgramInfoLog(_)||"",R=r.getShaderInfoLog(x)||"",E=r.getShaderInfoLog(M)||"",I=C.trim(),L=R.trim(),N=E.trim(),B=!0,D=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,x,M);else{let O=Wp(r,x,"vertex"),U=Wp(r,M,"fragment");qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+O+`
`+U)}else I!==""?Ke("WebGLProgram: Program Info Log:",I):(L===""||N==="")&&(D=!1);D&&(P.diagnostics={runnable:B,programLog:I,vertexShader:{log:L,prefix:g},fragmentShader:{log:N,prefix:m}})}r.deleteShader(x),r.deleteShader(M),v=new ho(r,_),S=ew(r,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,Wy)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=M,this}var gw=0,Uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vh(e),t.set(e,n)),n}},Vh=class{constructor(e){this.id=gw++,this.code=e,this.usedTimes=0}};function _w(i){return i===Xi||i===vs||i===xs}function bw(i,e,t,n,r,o){let s=new Qr,a=new Uh,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,S,T,P,C,R){let E=P.fog,I=C.geometry,L=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,B=e.get(v.envMap||L,N),D=B&&B.mapping===fs?B.image.height:null,O=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Ke("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let U=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=U!==void 0?U.length:0,q=0;I.morphAttributes.position!==void 0&&(q=1),I.morphAttributes.normal!==void 0&&(q=2),I.morphAttributes.color!==void 0&&(q=3);let ae,ie,le,H;if(O){let Tt=li[O];ae=Tt.vertexShader,ie=Tt.fragmentShader}else{ae=v.vertexShader,ie=v.fragmentShader;let Tt=a.getVertexShaderStage(v),bt=a.getFragmentShaderStage(v);a.update(v,Tt,bt),le=Tt.id,H=bt.id}let W=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),ce=C.isInstancedMesh===!0,$=C.isBatchedMesh===!0,he=!!v.map,De=!!v.matcap,ze=!!B,Pe=!!v.aoMap,ke=!!v.lightMap,Ge=!!v.bumpMap&&v.wireframe===!1,at=!!v.normalMap,wt=!!v.displacementMap,Bt=!!v.emissiveMap,nt=!!v.metalnessMap,mt=!!v.roughnessMap,K=v.anisotropy>0,Vt=v.clearcoat>0,gt=v.dispersion>0,G=v.retroreflectivity>0,k=v.iridescence>0,J=v.sheen>0,te=v.transmission>0,oe=K&&!!v.anisotropyMap,me=Vt&&!!v.clearcoatMap,ge=Vt&&!!v.clearcoatNormalMap,se=Vt&&!!v.clearcoatRoughnessMap,de=k&&!!v.iridescenceMap,_e=k&&!!v.iridescenceThicknessMap,Ue=J&&!!v.sheenColorMap,we=J&&!!v.sheenRoughnessMap,be=!!v.specularMap,Ve=!!v.specularColorMap,Ye=!!v.specularIntensityMap,tt=te&&!!v.transmissionMap,Y=te&&!!v.thicknessMap,ve=!!v.gradientMap,ue=!!v.alphaMap,xe=v.alphaTest>0,Ae=!!v.alphaHash,fe=!!v.extensions,He=Hn;v.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(He=i.toneMapping);let Fe={shaderID:O,shaderType:v.type,shaderName:v.name,vertexShader:ae,fragmentShader:ie,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:H,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:$,batchingColor:$&&C._colorsTexture!==null,instancing:ce,instancingColor:ce&&C.instanceColor!==null,instancingMorph:ce&&C.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:he,matcap:De,envMap:ze,envMapMode:ze&&B.mapping,envMapCubeUVHeight:D,aoMap:Pe,lightMap:ke,bumpMap:Ge,normalMap:at,displacementMap:wt,emissiveMap:Bt,normalMapObjectSpace:at&&v.normalMapType===hp,normalMapTangentSpace:at&&v.normalMapType===mh,packedNormalMap:at&&v.normalMapType===mh&&_w(v.normalMap.format),metalnessMap:nt,roughnessMap:mt,anisotropy:K,anisotropyMap:oe,clearcoat:Vt,clearcoatMap:me,clearcoatNormalMap:ge,clearcoatRoughnessMap:se,dispersion:gt,retroreflection:G,iridescence:k,iridescenceMap:de,iridescenceThicknessMap:_e,sheen:J,sheenColorMap:Ue,sheenRoughnessMap:we,specularMap:be,specularColorMap:Ve,specularIntensityMap:Ye,transmission:te,transmissionMap:tt,thicknessMap:Y,gradientMap:ve,opaque:v.transparent===!1&&v.blending===Vi&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:xe,alphaHash:Ae,combine:v.combine,mapUv:he&&p(v.map.channel),aoMapUv:Pe&&p(v.aoMap.channel),lightMapUv:ke&&p(v.lightMap.channel),bumpMapUv:Ge&&p(v.bumpMap.channel),normalMapUv:at&&p(v.normalMap.channel),displacementMapUv:wt&&p(v.displacementMap.channel),emissiveMapUv:Bt&&p(v.emissiveMap.channel),metalnessMapUv:nt&&p(v.metalnessMap.channel),roughnessMapUv:mt&&p(v.roughnessMap.channel),anisotropyMapUv:oe&&p(v.anisotropyMap.channel),clearcoatMapUv:me&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(v.sheenRoughnessMap.channel),specularMapUv:be&&p(v.specularMap.channel),specularColorMapUv:Ve&&p(v.specularColorMap.channel),specularIntensityMapUv:Ye&&p(v.specularIntensityMap.channel),transmissionMapUv:tt&&p(v.transmissionMap.channel),thicknessMapUv:Y&&p(v.thicknessMap.channel),alphaMapUv:ue&&p(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(at||K),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!I.attributes.uv&&(he||ue),fog:!!E,useFog:v.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&at===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:re,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:q,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:R.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:he&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&ht.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ct,flipSided:v.side===Qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:fe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&v.extensions.multiDraw===!0||$)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function g(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let T in v.defines)S.push(T),S.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(m(S,v),w(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function w(v,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.retroreflection&&s.enable(24),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function y(v){let S=f[v.type],T;if(S){let P=li[S];T=Pp.clone(P.uniforms)}else T=v.uniforms;return T}function b(v,S){let T=u.get(S);return T!==void 0?++T.usedTimes:(T=new mw(i,S,v,r),c.push(T),u.set(S,T)),T}function x(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:M,programs:c,dispose:A}}function vw(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function xw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $p(){let i=[],e=0,t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,_,g,m){let w=i[e];return w===void 0?(w={id:d.id,object:d,geometry:f,material:p,materialVariant:s(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[e]=w):(w.id=d.id,w.object=d,w.geometry=f,w.material=p,w.materialVariant=s(d),w.groupOrder=_,w.renderOrder=d.renderOrder,w.z=g,w.group=m),e++,w}function l(d,f,p,_,g,m,w){w.reversedDepth===!0&&(g=-g);let y=a(d,f,p,_,g,m);p.transmission>0?n.push(y):p.transparent===!0?r.push(y):t.push(y)}function c(d,f,p,_,g,m){let w=a(d,f,p,_,g,m);p.transmission>0?n.unshift(w):p.transparent===!0?r.unshift(w):t.unshift(w)}function u(d,f){t.length>1&&t.sort(d||xw),n.length>1&&n.sort(f||Zp),r.length>1&&r.sort(f||Zp)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:h,sort:u}}function yw(){let i=new WeakMap;function e(n,r){let o=i.get(n),s;return o===void 0?(s=new $p,i.set(n,[s])):r>=o.length?(s=new $p,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function ww(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new j};break;case"SpotLight":t={position:new V,direction:new V,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new j,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new j,groundColor:new j};break;case"RectAreaLight":t={color:new j,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function Mw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Sw=0;function Tw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Aw(i){let e=new ww,t=Mw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let r=new V,o=new Pt,s=new Pt;function a(c){let u=0,h=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,w=0,y=0,b=0,x=0,M=0,A=0,v=0,S=0,T=0;c.sort(Tw);for(let C=0,R=c.length;C<R;C++){let E=c[C],I=E.color,L=E.intensity,N=E.distance,B=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Xi?B=E.shadow.map.texture:B=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=I.r*L,h+=I.g*L,d+=I.b*L;else if(E.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(E.sh.coefficients[D],L);T++}else if(E.isSunLight){let D=e.get(E);if(D.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let O=E.shadow,U=t.get(E);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[p]=U,n.sunShadowMap[p]=B;let Z=O.getViewportCount();for(let q=0;q<Z;q++)n.sunShadowMatrix[_+q]=O.getMatrix(q),n.sunShadowCascade[_+q]=O._cascadeData[q];_+=Z,p++}n.sun[f]=D,f++}else if(E.isDirectionalLight){let D=e.get(E);if(D.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let O=E.shadow,U=t.get(E);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.directionalShadow[g]=U,n.directionalShadowMap[g]=B,n.directionalShadowMatrix[g]=E.shadow.matrix,x++}n.directional[g]=D,g++}else if(E.isSpotLight){let D=e.get(E);D.position.setFromMatrixPosition(E.matrixWorld),D.color.copy(I).multiplyScalar(L),D.distance=N,D.coneCos=Math.cos(E.angle),D.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),D.decay=E.decay,n.spot[w]=D;let O=E.shadow;if(E.map&&(n.spotLightMap[v]=E.map,v++,O.updateMatrices(E),E.castShadow&&S++),n.spotLightMatrix[w]=O.matrix,E.castShadow){let U=t.get(E);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.spotShadow[w]=U,n.spotShadowMap[w]=B,A++}w++}else if(E.isRectAreaLight){let D=e.get(E);D.color.copy(I).multiplyScalar(L),D.halfWidth.set(E.width*.5,0,0),D.halfHeight.set(0,E.height*.5,0),n.rectArea[y]=D,y++}else if(E.isPointLight){let D=e.get(E);if(D.color.copy(E.color).multiplyScalar(E.intensity),D.distance=E.distance,D.decay=E.decay,E.castShadow){let O=E.shadow,U=t.get(E);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,n.pointShadow[m]=U,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=E.shadow.matrix,M++}n.point[m]=D,m++}else if(E.isHemisphereLight){let D=e.get(E);D.skyColor.copy(E.color).multiplyScalar(L),D.groundColor.copy(E.groundColor).multiplyScalar(L),n.hemi[b]=D,b++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==w||P.rectAreaLength!==y||P.hemiLength!==b||P.numSunShadows!==p||P.numDirectionalShadows!==x||P.numPointShadows!==M||P.numSpotShadows!==A||P.numSpotMaps!==v||P.numLightProbes!==T)&&(n.sun.length=f,n.directional.length=g,n.spot.length=w,n.rectArea.length=y,n.point.length=m,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.directionalShadowMatrix.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-S,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,P.sunLength=f,P.directionalLength=g,P.pointLength=m,P.spotLength=w,P.rectAreaLength=y,P.hemiLength=b,P.numSunShadows=p,P.numDirectionalShadows=x,P.numPointShadows=M,P.numSpotShadows=A,P.numSpotMaps=v,P.numLightProbes=T,n.version=Sw++)}function l(c,u){let h=0,d=0,f=0,p=0,_=0,g=0,m=u.matrixWorldInverse;for(let w=0,y=c.length;w<y;w++){let b=c[w];if(b.isSunLight){let x=n.sun[h];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),h++}else if(b.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(b.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),s.identity(),o.copy(b.matrixWorld),o.premultiply(m),s.extractRotation(o),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),_++}else if(b.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Jp(i){let e=new Aw(i),t=[],n=[],r=[];function o(d){h.camera=d,t.length=0,n.length=0,r.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function Ew(i){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new Jp(i),e.set(r,[a])):o>=s.length?(a=new Jp(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pw=`uniform sampler2D shadow_pass;
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
}`,kw=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Cw=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],jp=new Pt,Ms=new V,Fh=new V;function Iw(i,e,t){let n=new Xo,r=new Ee,o=new Ee,s=new Lt,a=new ll,l=new cl,c={},u=t.maxTextureSize,h={[oi]:Qt,[Qt]:oi,[ct]:ct},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Rw,fragmentShader:Pw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new We;p.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Be(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hs;let m=this.type;this.render=function(M,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Gf&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hs);let S=i.getRenderTarget(),T=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),C=i.state;C.setBlending(si),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let R=m!==this.type;R&&A.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(I=>I.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,I=M.length;E<I;E++){let L=M[E],N=L.shadow;if(N===void 0){Ke("WebGLShadowMap:",L,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let B=N.getFrameExtents();r.multiply(B),o.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/B.x),r.x=o.x*B.x,N.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/B.y),r.y=o.y*B.y,N.mapSize.y=o.y));let D=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=D,N.map===null||R===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===so){if(L.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new an(r.x,r.y,{format:Xi,type:Kn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),N.map.texture.name=L.name+".shadowMap",N.map.depthTexture=new zi(r.x,r.y,Xn),N.map.depthTexture.name=L.name+".shadowMapDepth",N.map.depthTexture.format=ti,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Yt,N.map.depthTexture.magFilter=Yt}else L.isPointLight?(N.map=new fc(r.x),N.map.depthTexture=new Qa(r.x,Wn)):(N.map=new an(r.x,r.y),N.map.depthTexture=new zi(r.x,r.y,Wn)),N.map.depthTexture.name=L.name+".shadowMap",N.map.depthTexture.format=ti,this.type===hs?(N.map.depthTexture.compareFunction=D?cc:lc,N.map.depthTexture.minFilter=jt,N.map.depthTexture.magFilter=jt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Yt,N.map.depthTexture.magFilter=Yt);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y)&&N.map.setSize(r.x,r.y);let O=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();L.isPointLight!==!0&&N.updateMatrices(L,v);for(let U=0;U<O;U++){let Z=N.getCamera(U);if(L.isPointLight){let q=N.camera,ae=N.matrix,ie=L.distance||q.far;ie!==q.far&&(q.far=ie,q.updateProjectionMatrix()),Ms.setFromMatrixPosition(L.matrixWorld),q.position.copy(Ms),Fh.copy(q.position),Fh.add(kw[U]),q.up.copy(Cw[U]),q.lookAt(Fh),q.updateMatrixWorld(),ae.makeTranslation(-Ms.x,-Ms.y,-Ms.z),jp.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),N._frustum.setFromProjectionMatrix(jp,q.coordinateSystem,q.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,U),i.clear();else{U===0&&(i.setRenderTarget(N.map),i.clear());let q=N.getViewport(U);s.set(o.x*q.x,o.y*q.y,o.x*q.z,o.y*q.w),C.viewport(s)}n=N.getFrustum(U),b(A,v,Z,L,this.type)}N.isPointLightShadow!==!0&&this.type===so&&w(N,v),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,T,P)};function w(M,A){let v=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new an(r.x,r.y,{format:Xi,type:Kn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,v,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,v,f,_,null)}function y(M,A,v,S){let T=null,P=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)T=P;else if(T=v.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let C=T.uuid,R=A.uuid,E=c[C];E===void 0&&(E={},c[C]=E);let I=E[R];I===void 0&&(I=T.clone(),E[R]=I,A.addEventListener("dispose",x)),T=I}if(T.visible=A.visible,T.wireframe=A.wireframe,S===so?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:h[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,v.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let C=i.properties.get(T);C.light=v}return T}function b(M,A,v,S,T){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===so)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let R=e.update(M),E=M.material;if(Array.isArray(E)){let I=R.groups;for(let L=0,N=I.length;L<N;L++){let B=I[L],D=E[B.materialIndex];if(D&&D.visible){let O=y(M,D,S,T);M.onBeforeShadow(i,M,A,v,R,O,B),i.renderBufferDirect(v,null,R,O,M,B),M.onAfterShadow(i,M,A,v,R,O,B)}}}else if(E.visible){let I=y(M,E,S,T);M.onBeforeShadow(i,M,A,v,R,I,null),i.renderBufferDirect(v,null,R,I,M,null),M.onAfterShadow(i,M,A,v,R,I,null)}}let C=M.children;for(let R=0,E=C.length;R<E;R++)b(C[R],A,v,S,T)}function x(M){M.target.removeEventListener("dispose",x);for(let v in c){let S=c[v],T=M.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function Lw(i,e){function t(){let Y=!1,ve=new Lt,ue=null,xe=new Lt(0,0,0,0);return{setMask:function(Ae){ue!==Ae&&!Y&&(i.colorMask(Ae,Ae,Ae,Ae),ue=Ae)},setLocked:function(Ae){Y=Ae},setClear:function(Ae,fe,He,Fe,Tt){Tt===!0&&(Ae*=Fe,fe*=Fe,He*=Fe),ve.set(Ae,fe,He,Fe),xe.equals(ve)===!1&&(i.clearColor(Ae,fe,He,Fe),xe.copy(ve))},reset:function(){Y=!1,ue=null,xe.set(-1,0,0,0)}}}function n(){let Y=!1,ve=!1,ue=null,xe=null,Ae=null;return{setReversed:function(fe){if(ve!==fe){let He=e.get("EXT_clip_control");fe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),ve=fe;let Fe=Ae;Ae=null,this.setClear(Fe)}},getReversed:function(){return ve},setTest:function(fe){fe?W(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(fe){ue!==fe&&!Y&&(i.depthMask(fe),ue=fe)},setFunc:function(fe){if(ve&&(fe=Mp[fe]),xe!==fe){switch(fe){case za:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case Zr:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case Ua:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=fe}},setLocked:function(fe){Y=fe},setClear:function(fe){Ae!==fe&&(Ae=fe,ve&&(fe=1-fe),i.clearDepth(fe))},reset:function(){Y=!1,ue=null,xe=null,Ae=null,ve=!1}}}function r(){let Y=!1,ve=null,ue=null,xe=null,Ae=null,fe=null,He=null,Fe=null,Tt=null;return{setTest:function(bt){Y||(bt?W(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(bt){ve!==bt&&!Y&&(i.stencilMask(bt),ve=bt)},setFunc:function(bt,Dn,jn){(ue!==bt||xe!==Dn||Ae!==jn)&&(i.stencilFunc(bt,Dn,jn),ue=bt,xe=Dn,Ae=jn)},setOp:function(bt,Dn,jn){(fe!==bt||He!==Dn||Fe!==jn)&&(i.stencilOp(bt,Dn,jn),fe=bt,He=Dn,Fe=jn)},setLocked:function(bt){Y=bt},setClear:function(bt){Tt!==bt&&(i.clearStencil(bt),Tt=bt)},reset:function(){Y=!1,ve=null,ue=null,xe=null,Ae=null,fe=null,He=null,Fe=null,Tt=null}}}let o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,w=null,y=null,b=null,x=null,M=null,A=null,v=new j(0,0,0),S=0,T=!1,P=null,C=null,R=null,E=null,I=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,B=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(D)[1]),N=B>=1):D.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),N=B>=2);let O=null,U={},Z=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),ae=new Lt().fromArray(Z),ie=new Lt().fromArray(q);function le(Y,ve,ue,xe){let Ae=new Uint8Array(4),fe=i.createTexture();i.bindTexture(Y,fe),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<ue;He++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(ve+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return fe}let H={};H[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),W(i.DEPTH_TEST),s.setFunc(Zr),Ge(!1),at(Zu),W(i.CULL_FACE),Pe(si);function W(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function re(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function ce(Y,ve){return d[Y]!==ve?(i.bindFramebuffer(Y,ve),d[Y]=ve,Y===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ve),Y===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function $(Y,ve){let ue=p,xe=!1;if(Y){ue=f.get(ve),ue===void 0&&(ue=[],f.set(ve,ue));let Ae=Y.textures;if(ue.length!==Ae.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,He=Ae.length;fe<He;fe++)ue[fe]=i.COLOR_ATTACHMENT0+fe;ue.length=Ae.length,xe=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,xe=!0);xe&&i.drawBuffers(ue)}function he(Y){return _!==Y?(i.useProgram(Y),_=Y,!0):!1}let De={[pr]:i.FUNC_ADD,[Wf]:i.FUNC_SUBTRACT,[Xf]:i.FUNC_REVERSE_SUBTRACT};De[Kf]=i.MIN,De[Yf]=i.MAX;let ze={[qf]:i.ZERO,[Zf]:i.ONE,[$f]:i.SRC_COLOR,[Ju]:i.SRC_ALPHA,[np]:i.SRC_ALPHA_SATURATE,[ep]:i.DST_COLOR,[jf]:i.DST_ALPHA,[Jf]:i.ONE_MINUS_SRC_COLOR,[ju]:i.ONE_MINUS_SRC_ALPHA,[tp]:i.ONE_MINUS_DST_COLOR,[Qf]:i.ONE_MINUS_DST_ALPHA,[ip]:i.CONSTANT_COLOR,[rp]:i.ONE_MINUS_CONSTANT_COLOR,[op]:i.CONSTANT_ALPHA,[sp]:i.ONE_MINUS_CONSTANT_ALPHA};function Pe(Y,ve,ue,xe,Ae,fe,He,Fe,Tt,bt){if(Y===si){g===!0&&(re(i.BLEND),g=!1);return}if(g===!1&&(W(i.BLEND),g=!0),Y!==Hf){if(Y!==m||bt!==T){if((w!==pr||x!==pr)&&(i.blendEquation(i.FUNC_ADD),w=pr,x=pr),bt)switch(Y){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dt:i.blendFunc(i.ONE,i.ONE);break;case $u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ds:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $u:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ds:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",Y);break}y=null,b=null,M=null,A=null,v.set(0,0,0),S=0,m=Y,T=bt}return}Ae=Ae||ve,fe=fe||ue,He=He||xe,(ve!==w||Ae!==x)&&(i.blendEquationSeparate(De[ve],De[Ae]),w=ve,x=Ae),(ue!==y||xe!==b||fe!==M||He!==A)&&(i.blendFuncSeparate(ze[ue],ze[xe],ze[fe],ze[He]),y=ue,b=xe,M=fe,A=He),(Fe.equals(v)===!1||Tt!==S)&&(i.blendColor(Fe.r,Fe.g,Fe.b,Tt),v.copy(Fe),S=Tt),m=Y,T=!1}function ke(Y,ve){Y.side===ct?re(i.CULL_FACE):W(i.CULL_FACE);let ue=Y.side===Qt;ve&&(ue=!ue),Ge(ue),Y.blending===Vi&&Y.transparent===!1?Pe(si):Pe(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),s.setFunc(Y.depthFunc),s.setTest(Y.depthTest),s.setMask(Y.depthWrite),o.setMask(Y.colorWrite);let xe=Y.stencilWrite;a.setTest(xe),xe&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Bt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(Y){P!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),P=Y)}function at(Y){Y!==Uf?(W(i.CULL_FACE),Y!==C&&(Y===Zu?i.cullFace(i.BACK):Y===Vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),C=Y}function wt(Y){Y!==R&&(N&&i.lineWidth(Y),R=Y)}function Bt(Y,ve,ue){Y?(W(i.POLYGON_OFFSET_FILL),(E!==ve||I!==ue)&&(E=ve,I=ue,s.getReversed()&&(ve=-ve),i.polygonOffset(ve,ue))):re(i.POLYGON_OFFSET_FILL)}function nt(Y){Y?W(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function mt(Y){Y===void 0&&(Y=i.TEXTURE0+L-1),O!==Y&&(i.activeTexture(Y),O=Y)}function K(Y,ve,ue){ue===void 0&&(O===null?ue=i.TEXTURE0+L-1:ue=O);let xe=U[ue];xe===void 0&&(xe={type:void 0,texture:void 0},U[ue]=xe),(xe.type!==Y||xe.texture!==ve)&&(O!==ue&&(i.activeTexture(ue),O=ue),i.bindTexture(Y,ve||H[Y]),xe.type=Y,xe.texture=ve)}function Vt(){let Y=U[O];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function gt(){try{i.compressedTexImage2D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function k(){try{i.texSubImage2D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function J(){try{i.texSubImage3D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function me(){try{i.texStorage2D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function ge(){try{i.texStorage3D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function se(){try{i.texImage2D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function de(){try{i.texImage3D(...arguments)}catch(Y){qe("WebGLState:",Y)}}function _e(Y){return h[Y]!==void 0?h[Y]:i.getParameter(Y)}function Ue(Y,ve){h[Y]!==ve&&(i.pixelStorei(Y,ve),h[Y]=ve)}function we(Y){ae.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),ae.copy(Y))}function be(Y){ie.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),ie.copy(Y))}function Ve(Y,ve){let ue=c.get(ve);ue===void 0&&(ue=new WeakMap,c.set(ve,ue));let xe=ue.get(Y);xe===void 0&&(xe=i.getUniformBlockIndex(ve,Y.name),ue.set(Y,xe))}function Ye(Y,ve){let xe=c.get(ve).get(Y);l.get(ve)!==xe&&(i.uniformBlockBinding(ve,xe,Y.__bindingPointIndex),l.set(ve,xe))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},O=null,U={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,w=null,y=null,b=null,x=null,M=null,A=null,v=new j(0,0,0),S=0,T=!1,P=null,C=null,R=null,E=null,I=null,ae.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:W,disable:re,bindFramebuffer:ce,drawBuffers:$,useProgram:he,setBlending:Pe,setMaterial:ke,setFlipSided:Ge,setCullFace:at,setLineWidth:wt,setPolygonOffset:Bt,setScissorTest:nt,activeTexture:mt,bindTexture:K,unbindTexture:Vt,compressedTexImage2D:gt,compressedTexImage3D:G,texImage2D:se,texImage3D:de,pixelStorei:Ue,getParameter:_e,updateUBOMapping:Ve,uniformBlockBinding:Ye,texStorage2D:me,texStorage3D:ge,texSubImage2D:k,texSubImage3D:J,compressedTexSubImage2D:te,compressedTexSubImage3D:oe,scissor:we,viewport:be,reset:tt}}function Fw(i,e,t,n,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap,h=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(G,k){return p?new OffscreenCanvas(G,k):$r("canvas")}function g(G,k,J){let te=1,oe=gt(G);if((oe.width>J||oe.height>J)&&(te=J/Math.max(oe.width,oe.height)),te<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){let me=Math.floor(te*oe.width),ge=Math.floor(te*oe.height);d===void 0&&(d=_(me,ge));let se=k?_(me,ge):d;return se.width=me,se.height=ge,se.getContext("2d").drawImage(G,0,0,me,ge),Ke("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+me+"x"+ge+")."),se}else return"data"in G&&Ke("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),G;return G}function m(G){return G.generateMipmaps}function w(G){i.generateMipmap(G)}function y(G){return G.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?i.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(G,k,J,te,oe,me=!1){if(G!==null){if(i[G]!==void 0)return i[G];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let ge;te&&(ge=e.get("EXT_texture_norm16"),ge||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=k;if(k===i.RED&&(J===i.FLOAT&&(se=i.R32F),J===i.HALF_FLOAT&&(se=i.R16F),J===i.UNSIGNED_BYTE&&(se=i.R8),J===i.UNSIGNED_SHORT&&ge&&(se=ge.R16_EXT),J===i.SHORT&&ge&&(se=ge.R16_SNORM_EXT)),k===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.R8UI),J===i.UNSIGNED_SHORT&&(se=i.R16UI),J===i.UNSIGNED_INT&&(se=i.R32UI),J===i.BYTE&&(se=i.R8I),J===i.SHORT&&(se=i.R16I),J===i.INT&&(se=i.R32I)),k===i.RG&&(J===i.FLOAT&&(se=i.RG32F),J===i.HALF_FLOAT&&(se=i.RG16F),J===i.UNSIGNED_BYTE&&(se=i.RG8),J===i.UNSIGNED_SHORT&&ge&&(se=ge.RG16_EXT),J===i.SHORT&&ge&&(se=ge.RG16_SNORM_EXT)),k===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.RG8UI),J===i.UNSIGNED_SHORT&&(se=i.RG16UI),J===i.UNSIGNED_INT&&(se=i.RG32UI),J===i.BYTE&&(se=i.RG8I),J===i.SHORT&&(se=i.RG16I),J===i.INT&&(se=i.RG32I)),k===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.RGB8UI),J===i.UNSIGNED_SHORT&&(se=i.RGB16UI),J===i.UNSIGNED_INT&&(se=i.RGB32UI),J===i.BYTE&&(se=i.RGB8I),J===i.SHORT&&(se=i.RGB16I),J===i.INT&&(se=i.RGB32I)),k===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),J===i.UNSIGNED_INT&&(se=i.RGBA32UI),J===i.BYTE&&(se=i.RGBA8I),J===i.SHORT&&(se=i.RGBA16I),J===i.INT&&(se=i.RGBA32I)),k===i.RGB&&(J===i.UNSIGNED_SHORT&&ge&&(se=ge.RGB16_EXT),J===i.SHORT&&ge&&(se=ge.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),k===i.RGBA){let de=me?Uo:ht.getTransfer(oe);J===i.FLOAT&&(se=i.RGBA32F),J===i.HALF_FLOAT&&(se=i.RGBA16F),J===i.UNSIGNED_BYTE&&(se=de===xt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&ge&&(se=ge.RGBA16_EXT),J===i.SHORT&&ge&&(se=ge.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(G,k){let J;return G?k===null||k===Wn||k===lo?J=i.DEPTH24_STENCIL8:k===Xn?J=i.DEPTH32F_STENCIL8:k===ao&&(J=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):k===null||k===Wn||k===lo?J=i.DEPTH_COMPONENT24:k===Xn?J=i.DEPTH_COMPONENT32F:k===ao&&(J=i.DEPTH_COMPONENT16),J}function M(G,k){return m(G)===!0||G.isFramebufferTexture&&G.minFilter!==Yt&&G.minFilter!==jt?Math.log2(Math.max(k.width,k.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?k.mipmaps.length:1}function A(G){let k=G.target;k.removeEventListener("dispose",A),S(k),k.isVideoTexture&&u.delete(k),k.isHTMLTexture&&h.delete(k)}function v(G){let k=G.target;k.removeEventListener("dispose",v),P(k)}function S(G){let k=n.get(G);if(k.__webglInit===void 0)return;let J=G.source,te=f.get(J);if(te){let oe=te[k.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&T(G),Object.keys(te).length===0&&f.delete(J)}n.remove(G)}function T(G){let k=n.get(G);i.deleteTexture(k.__webglTexture);let J=G.source,te=f.get(J);delete te[k.__cacheKey],s.memory.textures--}function P(G){let k=n.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),n.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(k.__webglFramebuffer[te]))for(let oe=0;oe<k.__webglFramebuffer[te].length;oe++)i.deleteFramebuffer(k.__webglFramebuffer[te][oe]);else i.deleteFramebuffer(k.__webglFramebuffer[te]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[te])}else{if(Array.isArray(k.__webglFramebuffer))for(let te=0;te<k.__webglFramebuffer.length;te++)i.deleteFramebuffer(k.__webglFramebuffer[te]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let te=0;te<k.__webglColorRenderbuffer.length;te++)k.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[te]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let J=G.textures;for(let te=0,oe=J.length;te<oe;te++){let me=n.get(J[te]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),s.memory.textures--),n.remove(J[te])}n.remove(G)}let C=0;function R(){C=0}function E(){return C}function I(G){C=G}function L(){let G=C;return G>=r.maxTextures&&Ke("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+r.maxTextures),C+=1,G}function N(G){let k=[];return k.push(G.wrapS),k.push(G.wrapT),k.push(G.wrapR||0),k.push(G.magFilter),k.push(G.minFilter),k.push(G.anisotropy),k.push(G.internalFormat),k.push(G.format),k.push(G.type),k.push(G.generateMipmaps),k.push(G.premultiplyAlpha),k.push(G.flipY),k.push(G.unpackAlignment),k.push(G.colorSpace),k.join()}function B(G,k){let J=n.get(G);if(G.isVideoTexture&&K(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&J.__version!==G.version){let te=G.image;if(te===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{re(J,G,k);return}}else G.isExternalTexture&&(J.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+k)}function D(G,k){let J=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&J.__version!==G.version){re(J,G,k);return}else G.isExternalTexture&&(J.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+k)}function O(G,k){let J=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&J.__version!==G.version){re(J,G,k);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+k)}function U(G,k){let J=n.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&J.__version!==G.version){ce(J,G,k);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+k)}let Z={[cr]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},q={[Yt]:i.NEAREST,[cp]:i.NEAREST_MIPMAP_NEAREST,[ps]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[Tl]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},ae={[fp]:i.NEVER,[bp]:i.ALWAYS,[pp]:i.LESS,[lc]:i.LEQUAL,[mp]:i.EQUAL,[cc]:i.GEQUAL,[gp]:i.GREATER,[_p]:i.NOTEQUAL};function ie(G,k){if(k.type===Xn&&e.has("OES_texture_float_linear")===!1&&(k.magFilter===jt||k.magFilter===Tl||k.magFilter===ps||k.magFilter===Hi||k.minFilter===jt||k.minFilter===Tl||k.minFilter===ps||k.minFilter===Hi)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(G,i.TEXTURE_WRAP_S,Z[k.wrapS]),i.texParameteri(G,i.TEXTURE_WRAP_T,Z[k.wrapT]),(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)&&i.texParameteri(G,i.TEXTURE_WRAP_R,Z[k.wrapR]),i.texParameteri(G,i.TEXTURE_MAG_FILTER,q[k.magFilter]),i.texParameteri(G,i.TEXTURE_MIN_FILTER,q[k.minFilter]),k.compareFunction&&(i.texParameteri(G,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(G,i.TEXTURE_COMPARE_FUNC,ae[k.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===Yt||k.minFilter!==ps&&k.minFilter!==Hi||k.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||n.get(k).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(G,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,r.getMaxAnisotropy())),n.get(k).__currentAnisotropy=k.anisotropy}}}function le(G,k){let J=!1;G.__webglInit===void 0&&(G.__webglInit=!0,k.addEventListener("dispose",A));let te=k.source,oe=f.get(te);oe===void 0&&(oe={},f.set(te,oe));let me=N(k);if(me!==G.__cacheKey){oe[me]===void 0&&(oe[me]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,J=!0),oe[me].usedTimes++;let ge=oe[G.__cacheKey];ge!==void 0&&(oe[G.__cacheKey].usedTimes--,ge.usedTimes===0&&T(k)),G.__cacheKey=me,G.__webglTexture=oe[me].texture}return J}function H(G,k,J){return Math.floor(Math.floor(G/J)/k)}function W(G,k,J,te){let me=G.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,k.width,k.height,J,te,k.data);else{me.sort((Ue,we)=>Ue.start-we.start);let ge=0;for(let Ue=1;Ue<me.length;Ue++){let we=me[ge],be=me[Ue],Ve=we.start+we.count,Ye=H(be.start,k.width,4),tt=H(we.start,k.width,4);be.start<=Ve+1&&Ye===tt&&H(be.start+be.count-1,k.width,4)===Ye?we.count=Math.max(we.count,be.start+be.count-we.start):(++ge,me[ge]=be)}me.length=ge+1;let se=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,k.width);for(let Ue=0,we=me.length;Ue<we;Ue++){let be=me[Ue],Ve=Math.floor(be.start/4),Ye=Math.ceil(be.count/4),tt=Ve%k.width,Y=Math.floor(Ve/k.width),ve=Ye,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(i.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(i.TEXTURE_2D,0,tt,Y,ve,ue,J,te,k.data)}G.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function re(G,k,J){let te=i.TEXTURE_2D;(k.isDataArrayTexture||k.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),k.isData3DTexture&&(te=i.TEXTURE_3D);let oe=le(G,k),me=k.source;t.bindTexture(te,G.__webglTexture,i.TEXTURE0+J);let ge=n.get(me);if(me.version!==ge.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&k.image instanceof ImageBitmap)===!1){let ue=ht.getPrimaries(ht.workingColorSpace),xe=k.colorSpace===vi?null:ht.getPrimaries(k.colorSpace),Ae=k.colorSpace===vi||ue===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,k.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,k.unpackAlignment);let de=g(k.image,!1,r.maxTextureSize);de=Vt(k,de);let _e=o.convert(k.format,k.colorSpace),Ue=o.convert(k.type),we=b(k.internalFormat,_e,Ue,k.normalized,k.colorSpace,k.isVideoTexture);ie(te,k);let be,Ve=k.mipmaps,Ye=k.isVideoTexture!==!0,tt=ge.__version===void 0||oe===!0,Y=me.dataReady,ve=M(k,de);if(k.isDepthTexture)we=x(k.format===Wi,k.type),tt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,we,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,we,de.width,de.height,0,_e,Ue,null));else if(k.isDataTexture)if(Ve.length>0){Ye&&tt&&t.texStorage2D(i.TEXTURE_2D,ve,we,Ve[0].width,Ve[0].height);for(let ue=0,xe=Ve.length;ue<xe;ue++)be=Ve[ue],Ye?Y&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,be.width,be.height,_e,Ue,be.data):t.texImage2D(i.TEXTURE_2D,ue,we,be.width,be.height,0,_e,Ue,be.data);k.generateMipmaps=!1}else Ye?(tt&&t.texStorage2D(i.TEXTURE_2D,ve,we,de.width,de.height),Y&&W(k,de,_e,Ue)):t.texImage2D(i.TEXTURE_2D,0,we,de.width,de.height,0,_e,Ue,de.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){Ye&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,we,Ve[0].width,Ve[0].height,de.depth);for(let ue=0,xe=Ve.length;ue<xe;ue++)if(be=Ve[ue],k.format!==Cn)if(_e!==null)if(Ye){if(Y)if(k.layerUpdates.size>0){let Ae=Mh(be.width,be.height,k.format,k.type);for(let fe of k.layerUpdates){let He=be.data.subarray(fe*Ae/be.data.BYTES_PER_ELEMENT,(fe+1)*Ae/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,fe,be.width,be.height,1,_e,He)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,de.depth,_e,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,we,be.width,be.height,de.depth,0,be.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,de.depth,_e,Ue,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,we,be.width,be.height,de.depth,0,_e,Ue,be.data);k.layerUpdates.size>0&&k.clearLayerUpdates()}else{Ye&&tt&&t.texStorage2D(i.TEXTURE_2D,ve,we,Ve[0].width,Ve[0].height);for(let ue=0,xe=Ve.length;ue<xe;ue++)be=Ve[ue],k.format!==Cn?_e!==null?Ye?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,be.width,be.height,_e,be.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,we,be.width,be.height,0,be.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Y&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,be.width,be.height,_e,Ue,be.data):t.texImage2D(i.TEXTURE_2D,ue,we,be.width,be.height,0,_e,Ue,be.data)}else if(k.isDataArrayTexture)if(Ye){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,we,de.width,de.height,de.depth),Y)if(k.layerUpdates.size>0){let ue=Mh(de.width,de.height,k.format,k.type);for(let xe of k.layerUpdates){let Ae=de.data.subarray(xe*ue/de.data.BYTES_PER_ELEMENT,(xe+1)*ue/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,de.width,de.height,1,_e,Ue,Ae)}k.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,_e,Ue,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,de.width,de.height,de.depth,0,_e,Ue,de.data);else if(k.isData3DTexture)Ye?(tt&&t.texStorage3D(i.TEXTURE_3D,ve,we,de.width,de.height,de.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,_e,Ue,de.data)):t.texImage3D(i.TEXTURE_3D,0,we,de.width,de.height,de.depth,0,_e,Ue,de.data);else if(k.isFramebufferTexture){if(tt)if(Ye)t.texStorage2D(i.TEXTURE_2D,ve,we,de.width,de.height);else{let ue=de.width,xe=de.height;for(let Ae=0;Ae<ve;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,we,ue,xe,0,_e,Ue,null),ue>>=1,xe>>=1}}else if(k.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),de.parentNode!==ue){ue.appendChild(de),h.add(k),ue.onpaint=xe=>{let Ae=xe.changedElements;for(let fe of h)Ae.includes(fe.image)&&(fe.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let Ae=i.RGBA,fe=i.RGBA,He=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,fe,He,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Ye&&tt){let ue=gt(Ve[0]);t.texStorage2D(i.TEXTURE_2D,ve,we,ue.width,ue.height)}for(let ue=0,xe=Ve.length;ue<xe;ue++)be=Ve[ue],Ye?Y&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,_e,Ue,be):t.texImage2D(i.TEXTURE_2D,ue,we,_e,Ue,be);k.generateMipmaps=!1}else if(Ye){if(tt){let ue=gt(de);t.texStorage2D(i.TEXTURE_2D,ve,we,ue.width,ue.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Ue,de)}else t.texImage2D(i.TEXTURE_2D,0,we,_e,Ue,de);m(k)&&w(te),ge.__version=me.version,k.onUpdate&&k.onUpdate(k)}G.__version=k.version}function ce(G,k,J){if(k.image.length!==6)return;let te=le(G,k),oe=k.source;t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+J);let me=n.get(oe);if(oe.version!==me.__version||te===!0){t.activeTexture(i.TEXTURE0+J);let ge=ht.getPrimaries(ht.workingColorSpace),se=k.colorSpace===vi?null:ht.getPrimaries(k.colorSpace),de=k.colorSpace===vi||ge===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,k.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,k.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let _e=k.isCompressedTexture||k.image[0].isCompressedTexture,Ue=k.image[0]&&k.image[0].isDataTexture,we=[];for(let fe=0;fe<6;fe++)!_e&&!Ue?we[fe]=g(k.image[fe],!0,r.maxCubemapSize):we[fe]=Ue?k.image[fe].image:k.image[fe],we[fe]=Vt(k,we[fe]);let be=we[0],Ve=o.convert(k.format,k.colorSpace),Ye=o.convert(k.type),tt=b(k.internalFormat,Ve,Ye,k.normalized,k.colorSpace),Y=k.isVideoTexture!==!0,ve=me.__version===void 0||te===!0,ue=oe.dataReady,xe=M(k,be);ie(i.TEXTURE_CUBE_MAP,k);let Ae;if(_e){Y&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,tt,be.width,be.height);for(let fe=0;fe<6;fe++){Ae=we[fe].mipmaps;for(let He=0;He<Ae.length;He++){let Fe=Ae[He];k.format!==Cn?Ve!==null?Y?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,0,0,Fe.width,Fe.height,Ve,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,tt,Fe.width,Fe.height,0,Fe.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,0,0,Fe.width,Fe.height,Ve,Ye,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,tt,Fe.width,Fe.height,0,Ve,Ye,Fe.data)}}}else{if(Ae=k.mipmaps,Y&&ve){Ae.length>0&&xe++;let fe=gt(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,tt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ue){Y?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,we[fe].width,we[fe].height,Ve,Ye,we[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,tt,we[fe].width,we[fe].height,0,Ve,Ye,we[fe].data);for(let He=0;He<Ae.length;He++){let Tt=Ae[He].image[fe].image;Y?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,0,0,Tt.width,Tt.height,Ve,Ye,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,tt,Tt.width,Tt.height,0,Ve,Ye,Tt.data)}}else{Y?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ve,Ye,we[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,tt,Ve,Ye,we[fe]);for(let He=0;He<Ae.length;He++){let Fe=Ae[He];Y?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,0,0,Ve,Ye,Fe.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,tt,Ve,Ye,Fe.image[fe])}}}m(k)&&w(i.TEXTURE_CUBE_MAP),me.__version=oe.version,k.onUpdate&&k.onUpdate(k)}G.__version=k.version}function $(G,k,J,te,oe,me){let ge=o.convert(J.format,J.colorSpace),se=o.convert(J.type),de=b(J.internalFormat,ge,se,J.normalized,J.colorSpace),_e=n.get(k),Ue=n.get(J);if(Ue.__renderTarget=k,!_e.__hasExternalTextures){let we=Math.max(1,k.width>>me),be=Math.max(1,k.height>>me);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,me,de,we,be,k.depth,0,ge,se,null):t.texImage2D(oe,me,de,we,be,0,ge,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,G),mt(k)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,oe,Ue.__webglTexture,0,nt(k)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,oe,Ue.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(G,k,J){if(i.bindRenderbuffer(i.RENDERBUFFER,G),k.depthBuffer){let te=k.depthTexture,oe=te&&te.isDepthTexture?te.type:null,me=x(k.stencilBuffer,oe),ge=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(k)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(k),me,k.width,k.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(k),me,k.width,k.height):i.renderbufferStorage(i.RENDERBUFFER,me,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,G)}else{let te=k.textures;for(let oe=0;oe<te.length;oe++){let me=te[oe],ge=o.convert(me.format,me.colorSpace),se=o.convert(me.type),de=b(me.internalFormat,ge,se,me.normalized,me.colorSpace);mt(k)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(k),de,k.width,k.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(k),de,k.width,k.height):i.renderbufferStorage(i.RENDERBUFFER,de,k.width,k.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(G,k,J){let te=k.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,G),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(k.depthTexture);if(oe.__renderTarget=k,(!oe.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)&&(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),te){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,k.depthTexture.addEventListener("dispose",A)),oe.__webglTexture===void 0){oe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),ie(i.TEXTURE_CUBE_MAP,k.depthTexture);let _e=o.convert(k.depthTexture.format),Ue=o.convert(k.depthTexture.type),we;k.depthTexture.format===ti?we=i.DEPTH_COMPONENT24:k.depthTexture.format===Wi&&(we=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,we,k.width,k.height,0,_e,Ue,null)}}else B(k.depthTexture,0);let me=oe.__webglTexture,ge=nt(k),se=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,de=k.depthTexture.format===Wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(k.depthTexture.format===ti)mt(k)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,se,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,de,se,me,0);else if(k.depthTexture.format===Wi)mt(k)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,se,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,de,se,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(G){let k=n.get(G),J=G.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==G.depthTexture){let te=G.depthTexture;if(k.__depthDisposeCallback&&k.__depthDisposeCallback(),te){let oe=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,te.removeEventListener("dispose",oe)};te.addEventListener("dispose",oe),k.__depthDisposeCallback=oe}k.__boundDepthTexture=te}if(G.depthTexture&&!k.__autoAllocateDepthBuffer)if(J)for(let te=0;te<6;te++)De(k.__webglFramebuffer[te],G,te);else{let te=G.texture.mipmaps;te&&te.length>0?De(k.__webglFramebuffer[0],G,0):De(k.__webglFramebuffer,G,0)}else if(J){k.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer[te]),k.__webglDepthbuffer[te]===void 0)k.__webglDepthbuffer[te]=i.createRenderbuffer(),he(k.__webglDepthbuffer[te],G,!1);else{let oe=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=k.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,me)}}else{let te=G.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=i.createRenderbuffer(),he(k.__webglDepthbuffer,G,!1);else{let oe=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=k.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(G,k,J){let te=n.get(G);k!==void 0&&$(te.__webglFramebuffer,G,G.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&ze(G)}function ke(G){let k=G.texture,J=n.get(G),te=n.get(k);G.addEventListener("dispose",v);let oe=G.textures,me=G.isWebGLCubeRenderTarget===!0,ge=oe.length>1;if(ge||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=k.version,s.memory.textures++),me){J.__webglFramebuffer=[];for(let se=0;se<6;se++)if(k.mipmaps&&k.mipmaps.length>0){J.__webglFramebuffer[se]=[];for(let de=0;de<k.mipmaps.length;de++)J.__webglFramebuffer[se][de]=i.createFramebuffer()}else J.__webglFramebuffer[se]=i.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){J.__webglFramebuffer=[];for(let se=0;se<k.mipmaps.length;se++)J.__webglFramebuffer[se]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(ge)for(let se=0,de=oe.length;se<de;se++){let _e=n.get(oe[se]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),s.memory.textures++)}if(G.samples>0&&mt(G)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let se=0;se<oe.length;se++){let de=oe[se];J.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[se]);let _e=o.convert(de.format,de.colorSpace),Ue=o.convert(de.type),we=b(de.internalFormat,_e,Ue,de.normalized,de.colorSpace,G.isXRRenderTarget===!0),be=nt(G);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,we,G.width,G.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,J.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),G.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),he(J.__webglDepthRenderbuffer,G,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ie(i.TEXTURE_CUBE_MAP,k);for(let se=0;se<6;se++)if(k.mipmaps&&k.mipmaps.length>0)for(let de=0;de<k.mipmaps.length;de++)$(J.__webglFramebuffer[se][de],G,k,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,de);else $(J.__webglFramebuffer[se],G,k,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(k)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let se=0,de=oe.length;se<de;se++){let _e=oe[se],Ue=n.get(_e),we=i.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(we=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,Ue.__webglTexture),ie(we,_e),$(J.__webglFramebuffer,G,_e,i.COLOR_ATTACHMENT0+se,we,0),m(_e)&&w(we)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(se=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,te.__webglTexture),ie(se,k),k.mipmaps&&k.mipmaps.length>0)for(let de=0;de<k.mipmaps.length;de++)$(J.__webglFramebuffer[de],G,k,i.COLOR_ATTACHMENT0,se,de);else $(J.__webglFramebuffer,G,k,i.COLOR_ATTACHMENT0,se,0);m(k)&&w(se),t.unbindTexture()}G.depthBuffer&&ze(G)}function Ge(G){let k=G.textures;for(let J=0,te=k.length;J<te;J++){let oe=k[J];if(m(oe)){let me=y(G),ge=n.get(oe).__webglTexture;t.bindTexture(me,ge),w(me),t.unbindTexture()}}}let at=[],wt=[];function Bt(G){if(G.samples>0){if(mt(G)===!1){let k=G.textures,J=G.width,te=G.height,oe=i.COLOR_BUFFER_BIT,me=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(G),se=k.length>1;if(se)for(let _e=0;_e<k.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let de=G.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let _e=0;_e<k.length;_e++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let Ue=n.get(k[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,J,te,0,0,J,te,oe,i.NEAREST),l===!0&&(at.length=0,wt.length=0,at.push(i.COLOR_ATTACHMENT0+_e),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&(at.push(me),wt.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let _e=0;_e<k.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let Ue=n.get(k[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&l){let k=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[k])}}}function nt(G){return Math.min(r.maxSamples,G.samples)}function mt(G){let k=n.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function K(G){let k=s.render.frame;u.get(G)!==k&&(u.set(G,k),G.update())}function Vt(G,k){let J=G.colorSpace,te=G.format,oe=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||J!==Oo&&J!==vi&&(ht.getTransfer(J)===xt?(te!==Cn||oe!==Sn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",J)),k}function gt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(c.width=G.naturalWidth||G.width,c.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(c.width=G.displayWidth,c.height=G.displayHeight):(c.width=G.width,c.height=G.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=R,this.getTextureUnits=E,this.setTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=D,this.setTexture3D=O,this.setTextureCube=U,this.rebindTextures=Pe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=$,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Dw(i,e){function t(n,r=vi){let o,s=ht.getTransfer(r);if(n===Sn)return i.UNSIGNED_BYTE;if(n===El)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lh)return i.BYTE;if(n===ch)return i.SHORT;if(n===ao)return i.UNSIGNED_SHORT;if(n===Al)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===dh)return i.ALPHA;if(n===fh)return i.RGB;if(n===Cn)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===ph)return i.RED;if(n===Pl)return i.RED_INTEGER;if(n===Xi)return i.RG;if(n===kl)return i.RG_INTEGER;if(n===Cl)return i.RGBA_INTEGER;if(n===ms||n===gs||n===_s||n===bs)if(s===xt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ms)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ms)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_s)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Il||n===Ll||n===Fl||n===Dl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Il)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ll)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zl||n===Nl||n===Bl||n===Ol||n===Ul||n===vs||n===Vl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===zl||n===Nl)return s===xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Bl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ol)return o.COMPRESSED_R11_EAC;if(n===Ul)return o.COMPRESSED_SIGNED_R11_EAC;if(n===vs)return o.COMPRESSED_RG11_EAC;if(n===Vl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gl||n===Hl||n===Wl||n===Xl||n===Kl||n===Yl||n===ql||n===Zl||n===$l||n===Jl||n===jl||n===Ql||n===ec||n===tc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Gl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ql)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===ic||n===rc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===nc)return s===xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ic)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oc||n===sc||n===xs||n===ac)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===oc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xs)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var zw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nw=`
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

}`,Gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Yo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ln({vertexShader:zw,fragmentShader:Nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hh=class extends ni{constructor(e,t){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,_=typeof XRWebGLBinding<"u",g=new Gh,m={},w=t.getContextAttributes(),y=null,b=null,x=[],M=[],A=new Ee,v=null,S=null,T=new on;T.viewport=new Lt;let P=new on;P.viewport=new Lt;let C=[T,P],R=new yl,E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let W=x[H];return W===void 0&&(W=new eo,x[H]=W),W.getTargetRaySpace()},this.getControllerGrip=function(H){let W=x[H];return W===void 0&&(W=new eo,x[H]=W),W.getGripSpace()},this.getHand=function(H){let W=x[H];return W===void 0&&(W=new eo,x[H]=W),W.getHandSpace()};function L(H){let W=M.indexOf(H.inputSource);if(W===-1)return;let re=x[W];re!==void 0&&(re.update(H.inputSource,H.frame,c||s),re.dispatchEvent({type:H.type,data:H.inputSource}))}function N(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",B);for(let H=0;H<x.length;H++){let W=M[H];W!==null&&(M[H]=null,x[H].disconnect(W))}E=null,I=null,g.reset();for(let H in m)delete m[H];if(e.setRenderTarget(y),f=null,d=null,h=null,r=null,b=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),S!==null){let H=S.camera;H.fov=S.fov,H.zoom=S.zoom,H.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",N),r.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ce=null,$=null;w.depth&&($=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=w.stencil?Wi:ti,ce=w.stencil?lo:Wn);let he={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:o};h=this.getBinding(),d=h.createProjectionLayer(he),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new an(d.textureWidth,d.textureHeight,{format:Cn,type:Sn,depthTexture:new zi(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let re={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new an(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(H){for(let W=0;W<H.removed.length;W++){let re=H.removed[W],ce=M.indexOf(re);ce>=0&&(M[ce]=null,x[ce].disconnect(re))}for(let W=0;W<H.added.length;W++){let re=H.added[W],ce=M.indexOf(re);if(ce===-1){for(let he=0;he<x.length;he++)if(he>=M.length){M.push(re),ce=he;break}else if(M[he]===null){M[he]=re,ce=he;break}if(ce===-1)break}let $=x[ce];$&&$.connect(re)}}let D=new V,O=new V;function U(H,W,re){D.setFromMatrixPosition(W.matrixWorld),O.setFromMatrixPosition(re.matrixWorld);let ce=D.distanceTo(O),$=W.projectionMatrix.elements,he=re.projectionMatrix.elements,De=$[14]/($[10]-1),ze=$[14]/($[10]+1),Pe=($[9]+1)/$[5],ke=($[9]-1)/$[5],Ge=($[8]-1)/$[0],at=(he[8]+1)/he[0],wt=De*Ge,Bt=De*at,nt=ce/(-Ge+at),mt=nt*-Ge;if(W.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(mt),H.translateZ(nt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),$[10]===-1)H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let K=De+nt,Vt=ze+nt,gt=wt-mt,G=Bt+(ce-mt),k=Pe*ze/Vt*K,J=ke*ze/Vt*K;H.projectionMatrix.makePerspective(gt,G,k,J,K,Vt),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Z(H,W){W===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(W.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let W=H.near,re=H.far;g.texture!==null&&(g.depthNear>0&&(W=g.depthNear),g.depthFar>0&&(re=g.depthFar)),R.near=P.near=T.near=W,R.far=P.far=T.far=re,(E!==R.near||I!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),E=R.near,I=R.far),R.layers.mask=H.layers.mask|6,T.layers.mask=R.layers.mask&-5,P.layers.mask=R.layers.mask&-3;let ce=H.parent,$=R.cameras;Z(R,ce);for(let he=0;he<$.length;he++)Z($[he],ce);$.length===2?U(R,T,P):R.projectionMatrix.copy(T.projectionMatrix),S===null&&H.isPerspectiveCamera&&(S={camera:H,fov:H.fov,zoom:H.zoom}),q(H,R,ce)};function q(H,W,re){re===null?H.matrix.copy(W.matrixWorld):(H.matrix.copy(re.matrixWorld),H.matrix.invert(),H.matrix.multiply(W.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Xa*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(R)},this.getCameraTexture=function(H){return m[H]};let ae=null;function ie(H,W){if(u=W.getViewerPose(c||s),p=W,u!==null){let re=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ce=!1;re.length!==R.cameras.length&&(R.cameras.length=0,ce=!0);for(let ze=0;ze<re.length;ze++){let Pe=re[ze],ke=null;if(f!==null)ke=f.getViewport(Pe);else{let at=h.getViewSubImage(d,Pe);ke=at.viewport,ze===0&&(e.setRenderTargetTextures(b,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(b))}let Ge=C[ze];Ge===void 0&&(Ge=new on,Ge.layers.enable(ze),Ge.viewport=new Lt,C[ze]=Ge),Ge.matrix.fromArray(Pe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Pe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ke.x,ke.y,ke.width,ke.height),ze===0&&(R.matrix.copy(Ge.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ce===!0&&R.cameras.push(Ge)}let $=r.enabledFeatures;if($&&$.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let ze=h.getDepthInformation(re[0]);ze&&ze.isValid&&ze.texture&&g.init(ze,r.renderState)}if($&&$.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let ze=0;ze<re.length;ze++){let Pe=re[ze].camera;if(Pe){let ke=m[Pe];ke||(ke=new Yo,m[Pe]=ke);let Ge=h.getCameraImage(Pe);ke.sourceTexture=Ge}}}}for(let re=0;re<x.length;re++){let ce=M[re],$=x[re];ce!==null&&$!==void 0&&$.update(ce,W,c||s)}ae&&ae(H,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),p=null}let le=new Qp;le.setAnimationLoop(ie),this.setAnimationLoop=function(H){ae=H},this.dispose=function(){}}},Bw=new Pt,om=new $e;om.set(-1,0,0,0,1,0,0,0,1);function Ow(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,xh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,w,y,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(g,m):m.isMeshLambertMaterial?(o(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(g,m),h(g,m)):m.isMeshPhongMaterial?(o(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),_(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,w,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Qt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Qt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w=e.get(m),y=w.envMap,b=w.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(b)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(om),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Uw(i,e,t,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){let M=x.program;n.uniformBlockBinding(b,M)}function c(b,x){let M=r[b.id];M===void 0&&(g(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",w));let A=x.program;n.updateUBOMapping(b,A);let v=e.render.frame;o[b.id]!==v&&(d(b),o[b.id]=v)}function u(b){let x=h();b.__bindingPointIndex=x;let M=i.createBuffer(),A=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function h(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let x=r[b.id],M=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let v=0,S=M.length;v<S;v++){let T=M[v];if(Array.isArray(T))for(let P=0,C=T.length;P<C;P++)f(T[P],v,P,A);else f(T,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,x,M,A){if(_(b,x,M,A)===!0){let v=b.__offset,S=b.value;if(Array.isArray(S)){let T=0;for(let P=0;P<S.length;P++){let C=S[P],R=m(C);p(C,b.__data,T),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(T+=R.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(S,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function p(b,x,M){typeof b=="number"||typeof b=="boolean"?x[0]=b:b.isMatrix3?(x[0]=b.elements[0],x[1]=b.elements[1],x[2]=b.elements[2],x[3]=0,x[4]=b.elements[3],x[5]=b.elements[4],x[6]=b.elements[5],x[7]=0,x[8]=b.elements[6],x[9]=b.elements[7],x[10]=b.elements[8],x[11]=0):ArrayBuffer.isView(b)?x.set(new b.constructor(b.buffer,b.byteOffset,x.length)):b.toArray(x,M)}function _(b,x,M,A){let v=b.value,S=x+"_"+M;if(A[S]===void 0)return typeof v=="number"||typeof v=="boolean"?A[S]=v:ArrayBuffer.isView(v)?A[S]=v.slice():A[S]=v.clone(),!0;{let T=A[S];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return A[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function g(b){let x=b.uniforms,M=0,A=16;for(let S=0,T=x.length;S<T;S++){let P=Array.isArray(x[S])?x[S]:[x[S]];for(let C=0,R=P.length;C<R;C++){let E=P[C],I=Array.isArray(E.value)?E.value:[E.value];for(let L=0,N=I.length;L<N;L++){let B=I[L],D=m(B),O=M%A,U=O%D.boundary,Z=O+U;M+=U,Z!==0&&A-Z<D.storage&&(M+=A-Z),E.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=M,M+=D.storage}}}let v=M%A;return v>0&&(M+=A-v),b.__size=M,b.__cache={},this}function m(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(x.boundary=16,x.storage=b.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",b),x}function w(b){let x=b.target;x.removeEventListener("dispose",w);let M=s.indexOf(x.__bindingPointIndex);s.splice(M,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function y(){for(let b in r)i.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:y}}var Vw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ai=null;function Gw(){return ai===null&&(ai=new Za(Vw,16,16,Xi,Kn),ai.name="DFG_LUT",ai.minFilter=jt,ai.magFilter=jt,ai.wrapS=wn,ai.wrapT=wn,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}var br=class{constructor(e={}){let{canvas:t=xp(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Sn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let _=f,g=new Set([Cl,kl,Pl]),m=new Set([Sn,Wn,ao,lo,El,Rl]),w=new Uint32Array(4),y=new Int32Array(4),b=new V,x=null,M=null,A=[],v=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,P=!1,C=null,R=null,E=null,I=null;this._outputColorSpace=Nt;let L=0,N=0,B=null,D=-1,O=null,U=new Lt,Z=new Lt,q=null,ae=new j(0),ie=0,le=t.width,H=t.height,W=1,re=null,ce=null,$=new Lt(0,0,le,H),he=new Lt(0,0,le,H),De=!1,ze=new Xo,Pe=!1,ke=!1,Ge=new Pt,at=new V,wt=new Lt,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function mt(){return B===null?W:1}let K=n;function Vt(F,X){return t.getContext(F,X)}let gt,G,k,J,te,oe,me,ge,se,de,_e,Ue,we,be,Ve,Ye,tt,Y,ve,ue,xe,Ae,fe;try{let F={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Dn,!1),K===null){let X="webgl2";if(K=Vt(X,F),K===null)throw Vt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(F){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),qe("WebGLRenderer: "+F.message),F}function He(){gt=new Zx(K),gt.init(),xe=new Dw(K,gt),G=new Ox(K,gt,e,xe),k=new Lw(K,gt),G.reversedDepthBuffer&&d&&k.buffers.depth.setReversed(!0),R=K.createFramebuffer(),E=K.createFramebuffer(),I=K.createFramebuffer(),J=new jx(K),te=new vw,oe=new Fw(K,gt,k,te,G,xe,J),me=new qx(T),ge=new eb(K),Ae=new Nx(K,ge),se=new $x(K,ge,J,Ae),de=new ey(K,se,ge,Ae,J),Y=new Qx(K,G,oe),Ve=new Ux(te),_e=new bw(T,me,gt,G,Ae,Ve),Ue=new Ow(T,te),we=new yw,be=new Ew(gt),tt=new zx(T,me,k,de,p,l),Ye=new Iw(T,de,G),fe=new Uw(K,J,G,k),ve=new Bx(K,gt,J),ue=new Jx(K,gt,J),J.programs=_e.programs,T.capabilities=G,T.extensions=gt,T.properties=te,T.renderLists=we,T.shadowMap=Ye,T.state=k,T.info=J}_!==Sn&&(S=new ny(_,t.width,t.height,a,r,o));let Fe=new Hh(T,K);this.xr=Fe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let F=gt.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=gt.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(F){F!==void 0&&(W=F,this.setSize(le,H,!1))},this.getSize=function(F){return F.set(le,H)},this.setSize=function(F,X,ne=!0){if(Fe.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}le=F,H=X,t.width=Math.floor(F*W),t.height=Math.floor(X*W),ne===!0&&(t.style.width=F+"px",t.style.height=X+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,F,X)},this.getDrawingBufferSize=function(F){return F.set(le*W,H*W).floor()},this.setDrawingBufferSize=function(F,X,ne){le=F,H=X,W=ne,t.width=Math.floor(F*ne),t.height=Math.floor(X*ne),this.setViewport(0,0,F,X)},this.setEffects=function(F){if(_===Sn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let X=0;X<F.length;X++)if(F[X].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(U)},this.getViewport=function(F){return F.copy($)},this.setViewport=function(F,X,ne,Q){F.isVector4?$.set(F.x,F.y,F.z,F.w):$.set(F,X,ne,Q),k.viewport(U.copy($).multiplyScalar(W).round())},this.getScissor=function(F){return F.copy(he)},this.setScissor=function(F,X,ne,Q){F.isVector4?he.set(F.x,F.y,F.z,F.w):he.set(F,X,ne,Q),k.scissor(Z.copy(he).multiplyScalar(W).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(F){k.setScissorTest(De=F)},this.setOpaqueSort=function(F){re=F},this.setTransparentSort=function(F){ce=F},this.getClearColor=function(F){return F.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(F=!0,X=!0,ne=!0){let Q=0;if(F){let ee=!1;if(B!==null){let Te=B.texture.format;ee=g.has(Te)}if(ee){let Te=B.texture.type,Ce=m.has(Te),Se=tt.getClearColor(),Ie=tt.getClearAlpha(),Ne=Se.r,it=Se.g,lt=Se.b;Ce?(w[0]=Ne,w[1]=it,w[2]=lt,w[3]=Ie,K.clearBufferuiv(K.COLOR,0,w)):(y[0]=Ne,y[1]=it,y[2]=lt,y[3]=Ie,K.clearBufferiv(K.COLOR,0,y))}else Q|=K.COLOR_BUFFER_BIT}X&&(Q|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(Q|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&K.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),C=F},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),tt.dispose(),we.dispose(),be.dispose(),te.dispose(),me.dispose(),de.dispose(),Ae.dispose(),fe.dispose(),_e.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",$d),Fe.removeEventListener("sessionend",Jd),ir.stop()};function Tt(F){F.preventDefault(),bh("WebGLRenderer: Context Lost."),P=!0}function bt(){bh("WebGLRenderer: Context Restored."),P=!1;let F=J.autoReset,X=Ye.enabled,ne=Ye.autoUpdate,Q=Ye.needsUpdate,ee=Ye.type;He(),J.autoReset=F,Ye.enabled=X,Ye.autoUpdate=ne,Ye.needsUpdate=Q,Ye.type=ee}function Dn(F){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function jn(F){let X=F.target;X.removeEventListener("dispose",jn),F0(X)}function F0(F){D0(F),te.remove(F)}function D0(F){let X=te.get(F).programs;X!==void 0&&(X.forEach(function(ne){_e.releaseProgram(ne)}),F.isShaderMaterial&&_e.releaseShaderCache(F))}this.renderBufferDirect=function(F,X,ne,Q,ee,Te){X===null&&(X=Bt);let Ce=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Se=B0(F,X,ne,Q,ee);k.setMaterial(Q,Ce);let Ie=ne.index,Ne=1;if(Q.wireframe===!0){if(Ie=se.getWireframeAttribute(ne),Ie===void 0)return;Ne=2}let it=ne.drawRange,lt=ne.attributes.position,Le=it.start*Ne,vt=(it.start+it.count)*Ne;Te!==null&&(Le=Math.max(Le,Te.start*Ne),vt=Math.min(vt,(Te.start+Te.count)*Ne)),Ie!==null?(Le=Math.max(Le,0),vt=Math.min(vt,Ie.count)):lt!=null&&(Le=Math.max(Le,0),vt=Math.min(vt,lt.count));let Ot=vt-Le;if(Ot<0||Ot===1/0)return;Ae.setup(ee,Q,Se,ne,Ie);let Et,Mt=ve;if(Ie!==null&&(Et=ge.get(Ie),Mt=ue,Mt.setIndex(Et)),ee.isMesh)Q.wireframe===!0?(k.setLineWidth(Q.wireframeLinewidth*mt()),Mt.setMode(K.LINES)):Mt.setMode(K.TRIANGLES);else if(ee.isLine){let tn=Q.linewidth;tn===void 0&&(tn=1),k.setLineWidth(tn*mt()),ee.isLineSegments?Mt.setMode(K.LINES):ee.isLineLoop?Mt.setMode(K.LINE_LOOP):Mt.setMode(K.LINE_STRIP)}else ee.isPoints?Mt.setMode(K.POINTS):ee.isSprite&&Mt.setMode(K.TRIANGLES);if(ee.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let tn=ee._multiDrawStarts,Re=ee._multiDrawCounts,hn=ee._multiDrawCount,dt=Ie?ge.get(Ie).bytesPerElement:1,Rn=te.get(Q).currentProgram.getUniforms();for(let Qn=0;Qn<hn;Qn++)Rn.setValue(K,"_gl_DrawID",Qn),Mt.render(tn[Qn]/dt,Re[Qn])}else if(ee.isInstancedMesh)Mt.renderInstances(Le,Ot,ee.count);else if(ne.isInstancedBufferGeometry){let tn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Re=Math.min(ne.instanceCount,tn);Mt.renderInstances(Le,Ot,Re)}else Mt.render(Le,Ot)};function Zd(F,X,ne,Q){C!==null&&F.isNodeMaterial&&C.setObject(Q,F),Pe===!0&&Ve.setState(F,ne,!1),F.transparent===!0&&F.side===ct&&F.forceSinglePass===!1?(F.side=Qt,F.needsUpdate=!0,ia(F,X,Q),F.side=oi,F.needsUpdate=!0,ia(F,X,Q),F.side=ct):ia(F,X,Q)}this.compile=function(F,X,ne=null){ne===null&&(ne=F),C!==null&&C.renderStart(F,X,ne),M=be.get(ne),M.init(X),v.push(M),ne.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(M.pushLight(ee),ee.castShadow&&M.pushShadow(ee))}),F!==ne&&F.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(M.pushLight(ee),ee.castShadow&&M.pushShadow(ee))}),M.setupLights(),C!==null&&C.updateLights(M.state.lightsArray),ke=this.localClippingEnabled,Pe=Ve.init(this.clippingPlanes,ke),Pe===!0&&Ve.setGlobalState(this.clippingPlanes,X),C!==null&&Ye.render(M.state.shadowsArray,ne,X);let Q=new Set;return F.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Te=ee.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){let Se=Te[Ce];Zd(Se,ne,X,ee),Q.add(Se)}else Zd(Te,ne,X,ee),Q.add(Te)}),M=v.pop(),C!==null&&C.renderEnd(),Q},this.compileAsync=function(F,X,ne=null){let Q=this.compile(F,X,ne);return new Promise(ee=>{function Te(){if(Q.forEach(function(Ce){let Ie=te.get(Ce).currentProgram;(Ie===void 0||Ie.isReady())&&Q.delete(Ce)}),Q.size===0){ee(F);return}setTimeout(Te,10)}gt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let uu=null;function z0(F){uu&&uu(F)}function $d(){ir.stop()}function Jd(){ir.start()}let ir=new Qp;ir.setAnimationLoop(z0),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(F){uu=F,Fe.setAnimationLoop(F),F===null?ir.stop():ir.start()},Fe.addEventListener("sessionstart",$d),Fe.addEventListener("sessionend",Jd),this.render=function(F,X){if(X!==void 0&&X.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;C!==null&&C.renderStart(F,X);let ne=Fe.enabled===!0&&Fe.isPresenting===!0,Q=S!==null&&(B===null||ne)&&S.begin(T,B);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(X),X=Fe.getCamera()),F.isScene===!0&&F.onBeforeRender(T,F,X,B),M=be.get(F,v.length),M.init(X),M.state.textureUnits=oe.getTextureUnits(),v.push(M),Ge.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ze.setFromProjectionMatrix(Ge,On,X.reversedDepth),ke=this.localClippingEnabled,Pe=Ve.init(this.clippingPlanes,ke),x=we.get(F,A.length),x.init(),A.push(x),Fe.enabled===!0&&Fe.isPresenting===!0){let Ce=T.xr.getDepthSensingMesh();Ce!==null&&hu(Ce,X,-1/0,T.sortObjects)}hu(F,X,0,T.sortObjects),x.finish(),C!==null&&C.updateLights(M.state.lightsArray),T.sortObjects===!0&&x.sort(re,ce),nt=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,nt&&tt.addToRenderList(x,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Pe===!0&&Ve.beginShadows();let ee=M.state.shadowsArray;if(Ye.render(ee,F,X),Pe===!0&&Ve.endShadows(),(Q&&S.hasRenderPass())===!1){let Ce=x.opaque,Se=x.transmissive;if(M.setupLights(),X.isArrayCamera){let Ie=X.cameras;if(Se.length>0)for(let Ne=0,it=Ie.length;Ne<it;Ne++){let lt=Ie[Ne];Qd(Ce,Se,F,lt)}nt&&tt.render(F);for(let Ne=0,it=Ie.length;Ne<it;Ne++){let lt=Ie[Ne];jd(x,F,lt,lt.viewport)}}else Se.length>0&&Qd(Ce,Se,F,X),nt&&tt.render(F),jd(x,F,X)}B!==null&&N===0&&(oe.updateMultisampleRenderTarget(B),oe.updateRenderTargetMipmap(B)),Q&&S.end(T),F.isScene===!0&&F.onAfterRender(T,F,X),Ae.resetDefaultState(),D=-1,O=null,v.pop(),v.length>0?(M=v[v.length-1],oe.setTextureUnits(M.state.textureUnits),Pe===!0&&Ve.setGlobalState(T.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?x=A[A.length-1]:x=null,C!==null&&C.renderEnd()};function hu(F,X,ne,Q){if(F.visible===!1)return;if(F.layers.test(X.layers)){if(F.isGroup)ne=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(X);else if(F.isLightProbeGrid)M.pushLightProbeGrid(F);else if(F.isLight)M.pushLight(F),F.castShadow&&M.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(ze)){Q&&wt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Ge);let Ce=de.update(F),Se=F.material;Se.visible&&x.push(F,Ce,Se,ne,wt.z,null,X)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(ze))){let Ce=de.update(F),Se=F.material;if(Q&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),wt.copy(F.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),wt.copy(Ce.boundingSphere.center)),wt.applyMatrix4(F.matrixWorld).applyMatrix4(Ge)),Array.isArray(Se)){let Ie=Ce.groups;for(let Ne=0,it=Ie.length;Ne<it;Ne++){let lt=Ie[Ne],Le=Se[lt.materialIndex];Le&&Le.visible&&x.push(F,Ce,Le,ne,wt.z,lt,X)}}else Se.visible&&x.push(F,Ce,Se,ne,wt.z,null,X)}}let Te=F.children;for(let Ce=0,Se=Te.length;Ce<Se;Ce++)hu(Te[Ce],X,ne,Q)}function jd(F,X,ne,Q){let{opaque:ee,transmissive:Te,transparent:Ce}=F;M.setupLightsView(ne),Pe===!0&&Ve.setGlobalState(T.clippingPlanes,ne),Q&&k.viewport(U.copy(Q)),ee.length>0&&na(ee,X,ne),Te.length>0&&na(Te,X,ne),Ce.length>0&&na(Ce,X,ne),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Qd(F,X,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Q.id]===void 0){let Le=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Q.id]=new an(1,1,{generateMipmaps:!0,type:Le?Kn:Sn,minFilter:Hi,samples:Math.max(4,G.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Te=M.state.transmissionRenderTarget[Q.id],Ce=Q.viewport||U;Te.setSize(Ce.z*T.transmissionResolutionScale,Ce.w*T.transmissionResolutionScale);let Se=T.getRenderTarget(),Ie=T.getActiveCubeFace(),Ne=T.getActiveMipmapLevel();T.setRenderTarget(Te),T.getClearColor(ae),ie=T.getClearAlpha(),ie<1&&T.setClearColor(16777215,.5),T.clear(),nt&&tt.render(ne);let it=T.toneMapping;T.toneMapping=Hn;let lt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),M.setupLightsView(Q),Pe===!0&&Ve.setGlobalState(T.clippingPlanes,Q),na(F,ne,Q),oe.updateMultisampleRenderTarget(Te),oe.updateRenderTargetMipmap(Te),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let vt=0,Ot=X.length;vt<Ot;vt++){let Et=X[vt],{object:Mt,geometry:tn,material:Re,group:hn}=Et;if(Re.side===ct&&Mt.layers.test(Q.layers)){let dt=Re.side;Re.side=Qt,Re.needsUpdate=!0,ef(Mt,ne,Q,tn,Re,hn),Re.side=dt,Re.needsUpdate=!0,Le=!0}}Le===!0&&(oe.updateMultisampleRenderTarget(Te),oe.updateRenderTargetMipmap(Te))}T.setRenderTarget(Se,Ie,Ne),T.setClearColor(ae,ie),lt!==void 0&&(Q.viewport=lt),T.toneMapping=it}function na(F,X,ne){let Q=X.isScene===!0?X.overrideMaterial:null;for(let ee=0,Te=F.length;ee<Te;ee++){let Ce=F[ee],{object:Se,geometry:Ie,group:Ne}=Ce,it=Ce.material;it.allowOverride===!0&&Q!==null&&(it=Q),Se.layers.test(ne.layers)&&ef(Se,X,ne,Ie,it,Ne)}}function ef(F,X,ne,Q,ee,Te){C!==null&&ee.isNodeMaterial&&C.setObject(F,ee),F.onBeforeRender(T,X,ne,Q,ee,Te),F.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ee.onBeforeRender(T,X,ne,Q,F,Te),ee.transparent===!0&&ee.side===ct&&ee.forceSinglePass===!1?(ee.side=Qt,ee.needsUpdate=!0,T.renderBufferDirect(ne,X,Q,ee,F,Te),ee.side=oi,ee.needsUpdate=!0,T.renderBufferDirect(ne,X,Q,ee,F,Te),ee.side=ct):T.renderBufferDirect(ne,X,Q,ee,F,Te),F.onAfterRender(T,X,ne,Q,ee,Te)}function ia(F,X,ne){X.isScene!==!0&&(X=Bt);let Q=te.get(F),ee=M.state.lights,Te=M.state.shadowsArray,Ce=ee.state.version,Se=_e.getParameters(F,ee.state,Te,X,ne,M.state.lightProbeGridArray),Ie=_e.getProgramCacheKey(Se),Ne=Q.programs;Q.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?X.environment:null,Q.fog=X.fog;let it=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;Q.envMap=me.get(F.envMap||Q.environment,it),Q.envMapRotation=Q.environment!==null&&F.envMap===null?X.environmentRotation:F.envMapRotation,Ne===void 0&&(F.addEventListener("dispose",jn),Ne=new Map,Q.programs=Ne);let lt=Ne.get(Ie);if(lt!==void 0){if(Q.currentProgram===lt&&Q.lightsStateVersion===Ce)return nf(F,Se),lt}else Se.uniforms=_e.getUniforms(F),C!==null&&F.isNodeMaterial&&C.build(F,ne,Se),F.onBeforeCompile(Se,T),lt=_e.acquireProgram(Se,Ie),Ne.set(Ie,lt),Q.uniforms=Se.uniforms;let Le=Q.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Le.clippingPlanes=Ve.uniform),nf(F,Se),Q.needsLights=U0(F),Q.lightsStateVersion=Ce,Q.needsLights&&(Le.ambientLightColor.value=ee.state.ambient,Le.lightProbe.value=ee.state.probe,Le.sunLights.value=ee.state.sun,Le.sunLightShadows.value=ee.state.sunShadow,Le.directionalLights.value=ee.state.directional,Le.directionalLightShadows.value=ee.state.directionalShadow,Le.spotLights.value=ee.state.spot,Le.spotLightShadows.value=ee.state.spotShadow,Le.rectAreaLights.value=ee.state.rectArea,Le.ltc_1.value=ee.state.rectAreaLTC1,Le.ltc_2.value=ee.state.rectAreaLTC2,Le.pointLights.value=ee.state.point,Le.pointLightShadows.value=ee.state.pointShadow,Le.hemisphereLights.value=ee.state.hemi,Le.sunShadowMatrix.value=ee.state.sunShadowMatrix,Le.sunShadowCascade.value=ee.state.sunShadowCascade,Le.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Le.spotLightMatrix.value=ee.state.spotLightMatrix,Le.spotLightMap.value=ee.state.spotLightMap,Le.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=M.state.lightProbeGridArray.length>0,Q.currentProgram=lt,Q.uniformsList=null,lt}function tf(F){if(F.uniformsList===null){let X=F.currentProgram.getUniforms();F.uniformsList=ho.seqWithValue(X.seq,F.uniforms)}return F.uniformsList}function nf(F,X){let ne=te.get(F);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function N0(F,X){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;b.setFromMatrixPosition(X.matrixWorld);for(let ne=0,Q=F.length;ne<Q;ne++){let ee=F[ne];if(ee.texture!==null&&ee.boundingBox.containsPoint(b))return ee}return null}function B0(F,X,ne,Q,ee){X.isScene!==!0&&(X=Bt),oe.resetTextureUnits();let Te=X.fog,Ce=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?X.environment:null,Se=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ht.workingColorSpace,Ie=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ne=me.get(Q.envMap||Ce,Ie),it=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,lt=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Le=!!ne.morphAttributes.position,vt=!!ne.morphAttributes.normal,Ot=!!ne.morphAttributes.color,Et=Hn;Q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Et=T.toneMapping);let Mt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,tn=Mt!==void 0?Mt.length:0,Re=te.get(Q),hn=M.state.lights;if(Pe===!0&&(ke===!0||F!==O)){let At=F===O&&Q.id===D;Ve.setState(Q,F,At)}let dt=!1;Q.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==hn.state.version||Re.outputColorSpace!==Se||ee.isBatchedMesh&&Re.batching===!1||!ee.isBatchedMesh&&Re.batching===!0||ee.isBatchedMesh&&Re.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Re.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Re.instancing===!1||!ee.isInstancedMesh&&Re.instancing===!0||ee.isSkinnedMesh&&Re.skinning===!1||!ee.isSkinnedMesh&&Re.skinning===!0||ee.isInstancedMesh&&Re.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Re.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Re.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Re.instancingMorph===!1&&ee.morphTexture!==null||Re.envMap!==Ne||Q.fog===!0&&Re.fog!==Te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ve.numPlanes||Re.numIntersection!==Ve.numIntersection)||Re.vertexAlphas!==it||Re.vertexTangents!==lt||Re.morphTargets!==Le||Re.morphNormals!==vt||Re.morphColors!==Ot||Re.toneMapping!==Et||Re.morphTargetsCount!==tn||!!Re.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Re.__version=Q.version);let Rn=Re.currentProgram;dt===!0&&(Rn=ia(Q,X,ee),C&&Q.isNodeMaterial&&C.onUpdateProgram(Q,Rn,Re));let Qn=!1,Ai=!1,Ir=!1,yt=Rn.getUniforms(),zt=Re.uniforms;if(k.useProgram(Rn.program)&&(Qn=!0,Ai=!0,Ir=!0),Q.id!==D&&(D=Q.id,Ai=!0),Re.needsLights){let At=N0(M.state.lightProbeGridArray,ee);Re.lightProbeGrid!==At&&(Re.lightProbeGrid=At,Ai=!0)}if(Qn||O!==F){k.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),yt.setValue(K,"projectionMatrix",F.projectionMatrix),yt.setValue(K,"viewMatrix",F.matrixWorldInverse);let Ri=yt.map.cameraPosition;Ri!==void 0&&Ri.setValue(K,at.setFromMatrixPosition(F.matrixWorld)),G.logarithmicDepthBuffer&&yt.setValue(K,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&yt.setValue(K,"isOrthographic",F.isOrthographicCamera===!0),O!==F&&(O=F,Ai=!0,Ir=!0)}if(Re.needsLights&&(hn.state.sunShadowMap.length>0&&yt.setValue(K,"sunShadowMap",hn.state.sunShadowMap,oe),hn.state.directionalShadowMap.length>0&&yt.setValue(K,"directionalShadowMap",hn.state.directionalShadowMap,oe),hn.state.spotShadowMap.length>0&&yt.setValue(K,"spotShadowMap",hn.state.spotShadowMap,oe),hn.state.pointShadowMap.length>0&&yt.setValue(K,"pointShadowMap",hn.state.pointShadowMap,oe)),ee.isSkinnedMesh){yt.setOptional(K,ee,"bindMatrix"),yt.setOptional(K,ee,"bindMatrixInverse");let At=ee.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),yt.setValue(K,"boneTexture",At.boneTexture,oe))}ee.isBatchedMesh&&(yt.setOptional(K,ee,"batchingTexture"),yt.setValue(K,"batchingTexture",ee._matricesTexture,oe),yt.setOptional(K,ee,"batchingIdTexture"),yt.setValue(K,"batchingIdTexture",ee._indirectTexture,oe),yt.setOptional(K,ee,"batchingColorTexture"),ee._colorsTexture!==null&&yt.setValue(K,"batchingColorTexture",ee._colorsTexture,oe));let Ei=ne.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&Y.update(ee,ne,Rn),(Ai||Re.receiveShadow!==ee.receiveShadow)&&(Re.receiveShadow=ee.receiveShadow,yt.setValue(K,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&X.environment!==null&&(zt.envMapIntensity.value=X.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=Gw()),Ai){if(yt.setValue(K,"toneMappingExposure",T.toneMappingExposure),Re.needsLights&&O0(zt,Ir),Te&&Q.fog===!0&&Ue.refreshFogUniforms(zt,Te),Ue.refreshMaterialUniforms(zt,Q,W,H,M.state.transmissionRenderTarget[F.id]),Re.needsLights&&Re.lightProbeGrid){let At=Re.lightProbeGrid;zt.probesSH.value=At.texture,zt.probesMin.value.copy(At.boundingBox.min),zt.probesMax.value.copy(At.boundingBox.max),zt.probesResolution.value.copy(At.resolution)}ho.upload(K,tf(Re),zt,oe)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ho.upload(K,tf(Re),zt,oe),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&yt.setValue(K,"center",ee.center),yt.setValue(K,"modelViewMatrix",ee.modelViewMatrix),yt.setValue(K,"normalMatrix",ee.normalMatrix),yt.setValue(K,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){let At=Q.uniformsGroups;for(let Ri=0,Lr=At.length;Ri<Lr;Ri++){let of=At[Ri];fe.update(of,Rn),fe.bind(of,Rn)}}return Rn}function O0(F,X){F.ambientLightColor.needsUpdate=X,F.lightProbe.needsUpdate=X,F.sunLights.needsUpdate=X,F.sunLightShadows.needsUpdate=X,F.directionalLights.needsUpdate=X,F.directionalLightShadows.needsUpdate=X,F.pointLights.needsUpdate=X,F.pointLightShadows.needsUpdate=X,F.spotLights.needsUpdate=X,F.spotLightShadows.needsUpdate=X,F.rectAreaLights.needsUpdate=X,F.hemisphereLights.needsUpdate=X}function U0(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(F,X,ne){let Q=te.get(F);Q.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),te.get(F.texture).__webglTexture=X,te.get(F.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ne,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,X){let ne=te.get(F);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(F,X=0,ne=0){B=F,L=X,N=ne;let Q=null,ee=!1,Te=!1;if(F){let Se=te.get(F);if(Se.__useDefaultFramebuffer!==void 0){k.bindFramebuffer(K.FRAMEBUFFER,Se.__webglFramebuffer),U.copy(F.viewport),Z.copy(F.scissor),q=F.scissorTest,k.viewport(U),k.scissor(Z),k.setScissorTest(q),D=-1;return}else if(Se.__webglFramebuffer===void 0)oe.setupRenderTarget(F);else if(Se.__hasExternalTextures)oe.rebindTextures(F,te.get(F.texture).__webglTexture,te.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let it=F.depthTexture;if(Se.__boundDepthTexture!==it){if(it!==null&&te.has(it)&&(F.width!==it.image.width||F.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(F)}}let Ie=F.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Te=!0);let Ne=te.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Ne[X])?Q=Ne[X][ne]:Q=Ne[X],ee=!0):F.samples>0&&oe.useMultisampledRTT(F)===!1?Q=te.get(F).__webglMultisampledFramebuffer:Array.isArray(Ne)?Q=Ne[ne]:Q=Ne,U.copy(F.viewport),Z.copy(F.scissor),q=F.scissorTest}else U.copy($).multiplyScalar(W).floor(),Z.copy(he).multiplyScalar(W).floor(),q=De;if(ne!==0&&(Q=R),k.bindFramebuffer(K.FRAMEBUFFER,Q)&&k.drawBuffers(F,Q),k.viewport(U),k.scissor(Z),k.setScissorTest(q),ee){let Se=te.get(F.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+X,Se.__webglTexture,ne)}else if(Te){let Se=X;for(let Ie=0;Ie<F.textures.length;Ie++){let Ne=te.get(F.textures[Ie]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,ne,Se)}}else if(F!==null&&ne!==0){let Se=te.get(F.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Se.__webglTexture,ne)}D=-1};function rf(F){let X=te.get(F);return(X.__readFormat!==F.format||X.__readType!==F.type)&&(X.__readFormat=F.format,X.__readType=F.type,X.__formatReadable=G.textureFormatReadable(F.format),X.__typeReadable=G.textureTypeReadable(F.type)),X}this.readRenderTargetPixels=function(F,X,ne,Q,ee,Te,Ce,Se=0){if(!(F&&F.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=te.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){k.bindFramebuffer(K.FRAMEBUFFER,Ie);try{let Ne=F.textures[Se],it=Ne.format,lt=Ne.type;F.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Se);let Le=rf(Ne);if(Le.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=F.width-Q&&ne>=0&&ne<=F.height-ee&&K.readPixels(X,ne,Q,ee,xe.convert(it),xe.convert(lt),Te)}finally{let Ne=B!==null?te.get(B).__webglFramebuffer:null;k.bindFramebuffer(K.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(F,X,ne,Q,ee,Te,Ce,Se=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=te.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie)if(X>=0&&X<=F.width-Q&&ne>=0&&ne<=F.height-ee){k.bindFramebuffer(K.FRAMEBUFFER,Ie);let Ne=F.textures[Se],it=Ne.format,lt=Ne.type;F.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Se);let Le=rf(Ne);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,vt),K.bufferData(K.PIXEL_PACK_BUFFER,Te.byteLength,K.STREAM_READ),K.readPixels(X,ne,Q,ee,xe.convert(it),xe.convert(lt),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);let Ot=B!==null?te.get(B).__webglFramebuffer:null;k.bindFramebuffer(K.FRAMEBUFFER,Ot);let Et=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await wp(K,Et,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,vt),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Te),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(vt),K.deleteSync(Et),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,X=null,ne=0){let Q=Math.pow(2,-ne),ee=Math.floor(F.image.width*Q),Te=Math.floor(F.image.height*Q),Ce=X!==null?X.x:0,Se=X!==null?X.y:0;oe.setTexture2D(F,0),K.copyTexSubImage2D(K.TEXTURE_2D,ne,0,0,Ce,Se,ee,Te),k.unbindTexture()},this.copyTextureToTexture=function(F,X,ne=null,Q=null,ee=0,Te=0){let Ce,Se,Ie,Ne,it,lt,Le,vt,Ot,Et=F.isCompressedTexture?F.mipmaps[Te]:F.image;if(ne!==null)Ce=ne.max.x-ne.min.x,Se=ne.max.y-ne.min.y,Ie=ne.isBox3?ne.max.z-ne.min.z:1,Ne=ne.min.x,it=ne.min.y,lt=ne.isBox3?ne.min.z:0;else{let zt=Math.pow(2,-ee);Ce=Math.floor(Et.width*zt),Se=Math.floor(Et.height*zt),F.isDataArrayTexture?Ie=Et.depth:F.isData3DTexture?Ie=Math.floor(Et.depth*zt):Ie=1,Ne=0,it=0,lt=0}Q!==null?(Le=Q.x,vt=Q.y,Ot=Q.z):(Le=0,vt=0,Ot=0);let Mt=xe.convert(X.format),tn=xe.convert(X.type),Re;X.isData3DTexture?(oe.setTexture3D(X,0),Re=K.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(oe.setTexture2DArray(X,0),Re=K.TEXTURE_2D_ARRAY):(oe.setTexture2D(X,0),Re=K.TEXTURE_2D),k.activeTexture(K.TEXTURE0),k.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(K.UNPACK_ALIGNMENT,X.unpackAlignment);let hn=k.getParameter(K.UNPACK_ROW_LENGTH),dt=k.getParameter(K.UNPACK_IMAGE_HEIGHT),Rn=k.getParameter(K.UNPACK_SKIP_PIXELS),Qn=k.getParameter(K.UNPACK_SKIP_ROWS),Ai=k.getParameter(K.UNPACK_SKIP_IMAGES);k.pixelStorei(K.UNPACK_ROW_LENGTH,Et.width),k.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Et.height),k.pixelStorei(K.UNPACK_SKIP_PIXELS,Ne),k.pixelStorei(K.UNPACK_SKIP_ROWS,it),k.pixelStorei(K.UNPACK_SKIP_IMAGES,lt);let Ir=F.isDataArrayTexture||F.isData3DTexture,yt=X.isDataArrayTexture||X.isData3DTexture;if(F.isDepthTexture){let zt=te.get(F),Ei=te.get(X),At=te.get(zt.__renderTarget),Ri=te.get(Ei.__renderTarget);k.bindFramebuffer(K.READ_FRAMEBUFFER,At.__webglFramebuffer),k.bindFramebuffer(K.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Lr=0;Lr<Ie;Lr++)Ir&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,te.get(F).__webglTexture,ee,lt+Lr),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,te.get(X).__webglTexture,Te,Ot+Lr)),K.blitFramebuffer(Ne,it,Ce,Se,Le,vt,Ce,Se,K.DEPTH_BUFFER_BIT,K.NEAREST);k.bindFramebuffer(K.READ_FRAMEBUFFER,null),k.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(ee!==0||F.isRenderTargetTexture||te.has(F)){let zt=te.get(F),Ei=te.get(X);k.bindFramebuffer(K.READ_FRAMEBUFFER,E),k.bindFramebuffer(K.DRAW_FRAMEBUFFER,I);for(let At=0;At<Ie;At++)Ir?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,zt.__webglTexture,ee,lt+At):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,zt.__webglTexture,ee),yt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ei.__webglTexture,Te,Ot+At):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Ei.__webglTexture,Te),ee!==0?K.blitFramebuffer(Ne,it,Ce,Se,Le,vt,Ce,Se,K.COLOR_BUFFER_BIT,K.NEAREST):yt?K.copyTexSubImage3D(Re,Te,Le,vt,Ot+At,Ne,it,Ce,Se):K.copyTexSubImage2D(Re,Te,Le,vt,Ne,it,Ce,Se);k.bindFramebuffer(K.READ_FRAMEBUFFER,null),k.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else yt?F.isDataTexture||F.isData3DTexture?K.texSubImage3D(Re,Te,Le,vt,Ot,Ce,Se,Ie,Mt,tn,Et.data):X.isCompressedArrayTexture?K.compressedTexSubImage3D(Re,Te,Le,vt,Ot,Ce,Se,Ie,Mt,Et.data):K.texSubImage3D(Re,Te,Le,vt,Ot,Ce,Se,Ie,Mt,tn,Et):F.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Te,Le,vt,Ce,Se,Mt,tn,Et.data):F.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Te,Le,vt,Et.width,Et.height,Mt,Et.data):K.texSubImage2D(K.TEXTURE_2D,Te,Le,vt,Ce,Se,Mt,tn,Et);k.pixelStorei(K.UNPACK_ROW_LENGTH,hn),k.pixelStorei(K.UNPACK_IMAGE_HEIGHT,dt),k.pixelStorei(K.UNPACK_SKIP_PIXELS,Rn),k.pixelStorei(K.UNPACK_SKIP_ROWS,Qn),k.pixelStorei(K.UNPACK_SKIP_IMAGES,Ai),Te===0&&X.generateMipmaps&&K.generateMipmap(Re),k.unbindTexture()},this.initRenderTarget=function(F){te.get(F).__webglFramebuffer===void 0&&oe.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?oe.setTextureCube(F,0):F.isData3DTexture?oe.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?oe.setTexture2DArray(F,0):oe.setTexture2D(F,0),k.unbindTexture()},this.resetState=function(){L=0,N=0,B=null,k.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};function gc(i,e=0){let t=(i.rotation??0)*Math.PI/180,n=Math.cos(t),r=Math.sin(t),o=po(i,e+i.h/2);return[0,i.h].flatMap(s=>[[-i.w/2,-i.d/2],[i.w/2,-i.d/2],[i.w/2,i.d/2],[-i.w/2,i.d/2]].map(([a,l])=>o(i.x+a*n-l*r,e+s,i.z+a*r+l*n)))}function sm(i){let e=gc({...i,x:0,z:0}).map(([r,,o])=>[r,o]).sort((r,o)=>r[0]-o[0]||r[1]-o[1]),t=(r,o,s)=>(o[0]-r[0])*(s[1]-r[1])-(o[1]-r[1])*(s[0]-r[0]),n=r=>{let o=[];for(let s of r){for(;o.length>1&&t(o[o.length-2],o[o.length-1],s)<=1e-10;)o.pop();o.push(s)}return o.slice(0,-1)};return[...n(e),...n([...e].reverse())].map(([r,o])=>[r+i.x,o+i.z])}function po(i,e){let t=(i.rotation_x??0)*Math.PI/180,n=(i.rotation_z??0)*Math.PI/180;if(!t&&!n)return(h,d,f)=>[h,d,f];let r=(i.rotation??0)*Math.PI/180,o=Math.cos(r),s=Math.sin(r),a=Math.cos(t),l=Math.sin(t),c=Math.cos(n),u=Math.sin(n);return(h,d,f)=>{let p=h-i.x,_=f-i.z,g=p*o+_*s,m=d-e,w=-p*s+_*o,y=m*a-w*l,b=m*l+w*a,x=g*c-y*u,M=g*u+y*c;return[i.x+x*o-b*s,e+M,i.z+x*s+b*o]}}function In(i,e,t,n){if(!t.rotation_x&&!t.rotation_z)return;let r=po(t,n);for(let o=e;o<i.length;o+=3){let[s,a,l]=r(i[o],i[o+1],i[o+2]);i[o]=s,i[o+1]=a,i[o+2]=l}}function am(i){let e=i.length/3,t=new Float32Array(e);for(let n=0;n<e;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(t[n]=r)}return t}function lm(i,e,t,n){for(let r=t.start*3;r<t.end*3;r++){let o=e[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}function cm(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var Hw=[],_c=new Map,Ww=0,um=!1;function hm(i){um=i}function Xw(i){let e=_t(i)?.product?.base??i;return[..._c.entries()].filter(([,t])=>t.product?.base===e).map(([t,n])=>({type:t,item:n}))}function vr(i){let e=_t(i.type);if(!e)return;let t=e.product?.base??i.type;if(!um)return _t(t)??e;let n=Xw(i.type);return n.find(r=>r.type===i.product_variant)?.item??(e.product?e:n.find(r=>r.item.product?.default)?.item??e)}function Ts(i){Hw=i,_c=new Map(i.flatMap(e=>e.items.map(t=>[Kw(e.id,t.id),t]))),Ww++}function Kw(i,e){return`pack:${i}:${e}`}function Yw(i){return i.startsWith("pack:")}var qw={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Wh(i){return _t(i)?.parts.find(e=>e.screen)}function _t(i){if(!Yw(i))return;let e=_c.get(i);if(e)return e;let[,t,...n]=i.split(":"),r=qw[t];return r?_c.get(`pack:${r}:${n.join(":")}`):void 0}function Ct(i,e){let t=_t(e.type),n=bn(i,e.x,e.z);if(e.mount_y!=null)return n+e.mount_y;if(e.type==="lamp_wall")return n+bc;if(dm.has(e.type))return Math.max(n,mo(i,e.x,e.z)-fm(e.type,e.h));if(e.type==="led_strip")return mo(i,e.x,e.z)-.04-Math.max(.02,e.h);switch(t?.mount){case"surface":return pm(i,e.x,e.z);case"wall":return n+(t.wall_y??1);case"ceiling":return mo(i,e.x,e.z)-e.h;default:return n+(t?0:As(e))}}var xc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,gravel_bed:.03,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Ki(i){return i==="hedge"||i==="fence"||i==="pergola"}function $w(i,e,t){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of i.points){let h=o(c,u);s=Math.min(s,h),a=Math.max(a,h)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(a-s)));return n*l}function Jw(i,e,t,n){return Es(i,e)+xc[e.type]-Rs(i,e,t,n)}var Xh=-.2,vc={set:!1,level:Xh};function mm(i){let e=i?.settings.terrain??null;vc={set:e?.level!=null,level:e?.level??Xh}}function yc(i,e){return vc.level}function gm(i){return i.elevation>.3?0:vc.set?vc.level-i.elevation:Xh}function Es(i,e){return gm(i)+(e.offset??0)}function Rs(i,e,t,n){return e.type==="pool"?0:$w(e,t,n)}function _m(i,e,t){let n=(i.outdoor??[]).filter(o=>!Ki(o.type)&&o.type!=="pool"&&Oe([e,t],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?Jw(i,r,e,t):gm(i)}function wc(i,e){return Es(i,e)+(e.above?vm(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function jw(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?vm(i):1.5}function Kh(i,e){return e.above?!1:(i.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!Ki(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>Oe(n,t.points)))}function bm(i,e){return!e.above&&!Kh(i,e)?Mc(i,e)-.05:wc(i,e)-jw(e)}function Mc(i,e){return wc(i,e)-.15}function vm(i){return i.height&&i.height>.3?i.height:1.2}var Qw={type:"none",pitch:35,overhang:.4},_E={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Qw}};var xm=.3;var ym=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),bc=1.75;var dm=new Set(["lamp_downlight","lamp_spot"]);function fm(i,e){return i==="lamp_spot"?Math.max(.06,e)+.008:.02}var wm=new Set(["stairs","stairs_u"]);function Mm(i,e,t){let n=Math.max(4,Math.round(t/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,e*.45),u=(e-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:u,rise:t/n}}function Sm(i){return ym.has(i)||!!_t(i)?.light}var Yh=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function As(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function pm(i,e,t){let n=bn(i,e,t);for(let r of i.furniture)!(Yh.has(r.type)||_t(r.type)?.surface)||!Oe([e,t],qi(r))||(n=Math.max(n,bn(i,r.x,r.z)+(r.mount_y??0)+r.h));return n}var Zw=new Set([...ym,"radiator","ac_unit","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var e1=["interior","front","front_glass","front_slot","sidelight","sidelights","glass","sliding","sliding_glass","sliding_wood","passage"],t1=["standard","bars","glass_wall"];function xr(i,e){return i.type==="door"?i.style&&e1.includes(i.style)?i.style:e?"front":"interior":i.style&&t1.includes(i.style)?i.style:"standard"}function Tm(i,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=o-.5;if(l+c>u){let d=Math.max(0,u)/(l+c);l*=d,c*=d}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Am(i){return i==="front"||i==="front_glass"||i==="front_slot"||i==="sidelight"||i==="sidelights"}function Tn(i){let e=0;for(let t=0;t<i.length;t++){let[n,r]=i[t],[o,s]=i[(t+1)%i.length];e+=n*s-o*r}return e/2}function xi(i){return Math.abs(Tn(i))}function Yi(i){let e=Tn(i);if(Math.abs(e)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let t=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;t+=(o+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Em(i){if(i.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=i[e],[r,o]=i[(e+1)%4];if(Math.abs(t-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function Rm(i){let e=1/0,t=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)e=Math.min(e,o),t=Math.min(t,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:e,z0:t,x1:n,z1:r}}function qi(i){if(i.rotation_x||i.rotation_z)return sm(i);let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*t-a*n,i.z+s*n+a*t])}function Oe(i,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,s]=e[n],[a,l]=e[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(t=!t)}return t}function ft(i,e){return qh(i,e)+(e?.floor_offset??0)}function qh(i,e){return e?.wall_offset??(e?.elevation??i.elevation)-i.elevation}function Ln(i,e){return e?.ceiling_height??e?.height??i.height}function Ps(i,e,t){return i.rooms.find(n=>Oe([e,t],n.points))}function bn(i,e,t){return ft(i,Ps(i,e,t))}function mo(i,e,t){let n=Ps(i,e,t);return ft(i,n)+Ln(i,n)}function Wt(i){let e=i.rooms.filter(t=>t.points.length>=3);return e.length?Math.max(...e.map(t=>i.elevation+ft(i,t)+Ln(i,t))):i.elevation+i.height}var $t=(i,e)=>[i[0]-e[0],i[1]-e[1]],Zi=(i,e)=>[i[0]+e[0],i[1]+e[1]],yi=(i,e)=>[i[0]*e,i[1]*e],Cs=(i,e)=>i[0]*e[0]+i[1]*e[1],go=(i,e)=>i[0]*e[1]-i[1]*e[0],ks=i=>Math.hypot(i[0],i[1]),ci=i=>{let e=ks(i)||1;return[i[0]/e,i[1]/e]},Pm=i=>[-i[1],i[0]],km=i=>[i[1],-i[0]];function wi(i,e,t=[]){let n=e.eps??.005,r=[],o=t.filter(v=>Math.hypot(v.b[0]-v.a[0],v.b[1]-v.a[1])>.05),s=[],a=v=>{for(let S=0;S<s.length;S++)if(Math.abs(s[S][0]-v[0])<=n&&Math.abs(s[S][1]-v[1])<=n)return S;return s.push([v[0],v[1]]),s.length-1},l=[];for(let v of i){let S=v.points;if(S.length<3||Math.abs(Tn(S))<1e-6)continue;let T=Tn(S)>0,P=S.map(a);for(let C=0;C<S.length;C++){let R=P[C],E=P[(C+1)%S.length];R!==E&&l.push(T?{u:R,v:E,room:v.id,edge:C,forward:!0}:{u:E,v:R,room:v.id,edge:C,forward:!1})}}let c=o.map(v=>[a(v.a),a(v.b)]),u=new Set;for(let v of i){let S=v.points;S.length<3||(v.wall_splits??[]).forEach((T,P)=>{if(!T||P>=S.length)return;let C=S[P],R=$t(S[(P+1)%S.length],C),E=ks(R);for(let I of T)I>n&&I<E-n&&u.add(a(Zi(C,yi(R,I/E))))})}let h=[];for(let v of l){let S=s[v.u],T=s[v.v],P=$t(T,S),C=ks(P),R=yi(P,1/C),E=[];for(let L=0;L<s.length;L++){if(L===v.u||L===v.v)continue;let N=$t(s[L],S),B=Cs(N,R);B<=n||B>=C-n||Math.abs(go(R,N))<=n&&E.push({t:B,id:L})}E.sort((L,N)=>L.t-N.t);let I=[{t:0,id:v.u},...E,{t:C,id:v.v}];for(let L=0;L+1<I.length;L++){let N=I[L],B=I[L+1],D=v.forward?N.t:C-B.t,O=v.forward?B.t:C-N.t;h.push({u:N.id,v:B.id,room:v.room,edge:v.edge,t0:D,t1:O})}}let d=new Map;for(let v of h){let S=v.u<v.v?`${v.u}-${v.v}`:`${v.v}-${v.u}`,T=d.get(S);T||d.set(S,T=[]),T.push(v)}let f=v=>({room_id:v.room,edge:v.edge,t0:v.t0,t1:v.t1}),p=new Map;for(let v of h){let S=`${v.room}:${v.edge}`;p.set(S,[...p.get(S)??[],v.t0].sort((T,P)=>T-P))}let _=v=>{let S=i.find(P=>P.id===v.room)?.wall_heights?.[v.edge];if(!Array.isArray(S))return S;let T=p.get(`${v.room}:${v.edge}`)??[];return S[T.indexOf(v.t0)]??null},g=v=>{let S=v.map(_).filter(P=>typeof P=="number"&&P>0);if(S.length)return Math.min(...S);let T=v.map(P=>i.find(C=>C.id===P.room)?.ceiling_height);return T.every(P=>typeof P=="number"&&P>0)?Math.max(...T):void 0},m=v=>{let S=v.map(T=>i.find(P=>P.id===T.room)?.wall_thickness?.[T.edge]).filter(T=>typeof T=="number"&&T>0);return S.length?Math.max(...S):void 0},w=v=>v.some(S=>_(S)===0),y=[],b=[];for(let v of d.values()){let S=v[0],T=v.find(P=>P!==S&&P.u===S.v&&P.v===S.u&&P.room!==S.room);for(let P of v)P!==S&&P!==T&&P.room!==S.room&&r.push(`overlap:${S.room}:${P.room}`);if(w(T?[S,T]:[S])){T&&y.push([S.room,T.room]);continue}if(T){let P=m([S,T])??e.interior;b.push({a:S.u,b:S.v,left:P/2,right:P/2,exterior:!1,roomLeft:S.room,roomRight:T.room,sources:[f(S),f(T)],height:g([S,T])})}else b.push({a:S.u,b:S.v,left:0,right:m([S])??e.exterior,exterior:!0,roomLeft:S.room,roomRight:null,sources:[f(S)],height:g([S])})}let x=v=>ci($t(s[v.b],s[v.a]));for(let v of b){if(v.exterior||v.free)continue;let S=new Set;for(let P of[v.a,v.b])for(let C of b)!C.exterior||C.free||C.a!==P&&C.b!==P||Math.abs(go(x(v),x(C)))>1e-6||(C.roomLeft===v.roomLeft?S.add("left"):C.roomLeft===v.roomRight&&S.add("right"));if(S.size!==1)continue;let T=v.left+v.right;S.has("left")?(v.left=0,v.right=T):(v.left=T,v.right=0)}o.forEach((v,S)=>{let[T,P]=c[S];if(T===P)return;let C=[(v.a[0]+v.b[0])/2,(v.a[1]+v.b[1])/2],R=i.find(L=>L.points.length>=3&&Oe(C,L.points))?.id??null,E=(v.thickness??e.interior)/2,I=typeof v.height=="number"&&v.height>0?v.height:void 0;b.push({free:v.id,a:T,b:P,left:E,right:E,exterior:!1,roomLeft:R,roomRight:R,sources:[],height:I})}),b=i1(b,s,u);let M=o1(b,s);return{walls:b.map((v,S)=>{let T=s[v.a],P=s[v.b],C=M.get(`${S}:a`),R=M.get(`${S}:b`),E=s1([C.right,R.left,P,R.right,C.left,T],1e-6);return{id:n1(T,P),a:[T[0],T[1]],b:[P[0],P[1]],left:v.left,right:v.right,exterior:v.exterior,roomLeft:v.roomLeft,roomRight:v.roomRight,sources:v.sources,footprint:E,...v.free?{free:v.free}:{},...v.height!==void 0?{height:v.height}:{}}}),warnings:[...new Set(r)],open:y}}function n1(i,e){let t=o=>Math.round(o*100),[n,r]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function Cm(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function i1(i,e,t=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=Cm(l)),c.a!==s&&(c=Cm(c)),l.a===c.b)continue;let u=ci($t(e[l.b],e[l.a])),h=ci($t(e[c.b],e[c.a]));if(Math.abs(go(u,h))>1e-6||Cs(u,h)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let d={...l,b:c.b,sources:r1(l.sources,c.sources)},f=n.filter((p,_)=>_!==a[0]&&_!==a[1]);f.push(d),n.length=0,n.push(...f),r=!0;break}}return n}function r1(i,e){let t=i.map(n=>({...n}));for(let n of e){let r=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function o1(i,e){let t=new Map;i.forEach((r,o)=>{let s=ci($t(e[r.b],e[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:yi(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let u=t.get(l);u||t.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,o]of t){let s=e[r];o.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Zi(s,yi(Pm(c.d),c.left)),right:Zi(s,yi(km(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let u=o[c],h=o[(c+1)%o.length],d=Zi(s,yi(Pm(u.d),u.left)),f=Zi(s,yi(km(h.d),h.right)),p=go(u.d,h.d);if(Math.abs(p)<1e-4)continue;let _=go($t(f,d),h.d)/p,g=Zi(d,yi(u.d,_));ks($t(g,s))>l||(n.get(u.key).left=g,n.get(h.key).right=g)}}return n}function s1(i,e){let t=i.filter((r,o)=>ks($t(r,i[(o+1)%i.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let o=t[(r+t.length-1)%t.length],s=t[r],a=t[(r+1)%t.length],l=$t(s,o),c=$t(a,s);if(Math.abs(go(ci(l),ci(c)))<1e-7&&Cs(l,c)>0){t=t.filter((u,h)=>h!==r),n=!0;break}}}return t}function Zh(i,e,t){let n=i.points[e],r=i.points[(e+1)%i.points.length],o=ci($t(r,n));return Zi(n,yi(o,t))}function yr(i,e,t){if(i.wall){let r=t.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=ci($t(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Zi(r.a,[-o[1],o[0]])]},edge:0}}let n=e.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function wr(i,e,t){if(!e.wall)return a1(i,t.room,t.edge,e.offset);let n=i.find(o=>o.free===e.wall);if(!n)return null;let r=Zh(t.room,0,e.offset);return{wall:n,s:Cs($t(r,n.a),ci($t(n.b,n.a)))}}function a1(i,e,t,n){for(let r of i){if(!r.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Zh(e,t,n);return{wall:r,s:Cs($t(s,r.a),ci($t(r.b,r.a)))}}return null}var An=(i,e,t)=>(e[0]-i[0])*(t[1]-i[1])-(e[1]-i[1])*(t[0]-i[0]);function fn(i){return i.reduce((e,t,n)=>{let r=i[(n+1)%i.length];return e+t[0]*r[1]-r[0]*t[1]},0)/2}var Is=(i,e,t)=>Math.abs(An(e,t,i))<1e-8&&i[0]>=Math.min(e[0],t[0])-1e-8&&i[0]<=Math.max(e[0],t[0])+1e-8&&i[1]>=Math.min(e[1],t[1])-1e-8&&i[1]<=Math.max(e[1],t[1])+1e-8;function _o(i,e){let t=!1;for(let n=0,r=i.length-1;n<i.length;r=n++){let o=i[r],s=i[n];if(Is(e,o,s))return!0;o[1]>e[1]!=s[1]>e[1]&&e[0]<(s[0]-o[0])*(e[1]-o[1])/(s[1]-o[1])+o[0]&&(t=!t)}return t}function Im(i){if(i.length<3||i.length>200||!i.every(e=>e.every(Number.isFinite))||Math.abs(fn(i))<.05)return!1;for(let e=0;e<i.length;e++){let t=i[e],n=i[(e+1)%i.length];if(Math.hypot(t[0]-n[0],t[1]-n[1])<1e-8)return!1;let r=i[(e+2)%i.length];if(Math.abs(An(t,n,r))<1e-8&&(n[0]-t[0])*(r[0]-n[0])+(n[1]-t[1])*(r[1]-n[1])<0)return!1;for(let o=e+2;o<i.length;o++){if((o+1)%i.length===e)continue;let s=i[o],a=i[(o+1)%i.length];if(An(t,n,s)*An(t,n,a)<0&&An(s,a,t)*An(s,a,n)<0||Is(t,s,a)||Is(n,s,a)||Is(s,t,n)||Is(a,t,n))return!1}}return!0}function Yn(i){let e=i.map((r,o)=>o);fn(i)<0&&e.reverse();let t=[],n=i.length*i.length;for(;e.length>3&&n-- >0;){let r=!1;for(let o=0;o<e.length;o++){let s=e[(o+e.length-1)%e.length],a=e[o],l=e[(o+1)%e.length],c=An(i[s],i[a],i[l]);if(Math.abs(c)<1e-8){e.splice(o,1),r=!0;break}if(!(c<0||e.some(u=>u!==s&&u!==a&&u!==l&&An(i[s],i[a],i[u])>=-1e-8&&An(i[a],i[l],i[u])>=-1e-8&&An(i[l],i[s],i[u])>=-1e-8))){t.push([s,a,l]),e.splice(o,1),r=!0;break}}if(!r)return[]}return e.length===3&&Math.abs(An(i[e[0]],i[e[1]],i[e[2]]))>1e-8&&t.push([...e]),t}function Sc(i,e){let t=i,n=fn(e)<0?-1:1;for(let r=0;r<e.length&&t.length;r++){let o=e[r],s=e[(r+1)%e.length],a=t;t=[];for(let l=0;l<a.length;l++){let c=a[l],u=a[(l+1)%a.length],h=n*An(o,s,c),d=n*An(o,s,u);if(h>=-1e-8&&t.push(c),h>=-1e-8!=d>=-1e-8){let f=h/(h-d);t.push([c[0]+(u[0]-c[0])*f,c[1]+(u[1]-c[1])*f,c[2]+(u[2]-c[2])*f])}}}return t.filter((r,o)=>{let s=t[(o+1)%t.length];return Math.hypot(r[0]-s[0],r[1]-s[1])>1e-8})}function Tc(i,e,t){let n=[0,1],r=t[0]-e[0],o=t[1]-e[1];for(let a=0;a<i.length;a++){let l=i[a],c=i[(a+1)%i.length],u=c[0]-l[0],h=c[1]-l[1],d=r*h-o*u;if(Math.abs(d)<1e-8)continue;let f=((l[0]-e[0])*h-(l[1]-e[1])*u)/d,p=((l[0]-e[0])*o-(l[1]-e[1])*r)/d;f>1e-8&&f<1-1e-8&&p>=-1e-8&&p<=1+1e-8&&n.push(f)}n.sort((a,l)=>a-l);let s=[];for(let a=1;a<n.length;a++){let l=n[a-1],c=n[a],u=(l+c)/2;c-l>1e-8&&_o(i,[e[0]+r*u,e[1]+o*u])&&s.push([l,c])}return s}function $h(i,e){return e.every((t,n)=>_o(i,t)&&Tc(i,t,e[(n+1)%e.length]).reduce((r,[o,s])=>r+s-o,0)>1-1e-8)}var Fs=Math.PI/180;function qn(i){let e=Math.min(i.x0,i.x1),t=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:e,u1:t,w:r-n,at:(o,s)=>[o,i.flip?r-s:n+s]}:{u0:n,u1:r,w:t-e,at:(o,s)=>[i.flip?t-s:e+s,o]}}function En(i){let e=qn(i).w,t=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Fs),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Fs);if(i.shape==="flat"||i.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(i.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(i.shape==="mansard"){let l=Nm(e,t,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(r+o))):e/2,a=t+s*r;return{vr:s,rh:a,y:l=>l<=s?t+l*r:n+(e-l)*o}}var l1=.14;function Fm(i,e){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<e-.05}function Dm(i,e,t){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let o of i.settings.roof.sections??[]){if(o.open)continue;let s=Math.min(o.x0,o.x1),a=Math.max(o.x0,o.x1),l=Math.min(o.z0,o.z1),c=Math.max(o.z0,o.z1);if(e<s-1e-6||e>a+1e-6||t<l-1e-6||t>c+1e-6||o.points&&o.points.length>=3&&!Oe([e,t],o.points))continue;let[u,h]=$i(o,e,t),d=o.shape==="flat"||o.shape==="parapet",f=Math.max(0,o.overhang??r),_=((d?null:vo(Ji(o,{u0:f,u1:f,a:f,b:f}),u,h))??En(o).y(h))-l1;n=n===null?_:Math.max(n,_)}return n}function Ac(i,e){let t=i.length;if(t<3||Math.abs(e)<1e-9)return i.map(o=>[o[0],o[1]]);let n=Tn(i)>=0?1:-1,r=[];for(let o=0;o<t;o++){let s=i[(o+t-1)%t],a=i[o],l=i[(o+1)%t],c=Lm([a[0]-s[0],a[1]-s[1]]),u=Lm([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],d=[u[1]*n,-u[0]*n],f=h[0]+d[0],p=h[1]+d[1],_=Math.hypot(f,p);if(_<1e-6){r.push([a[0]+h[0]*e,a[1]+h[1]*e]);continue}let g=(f*h[0]+p*h[1])/_,m=Math.min(4,1/Math.max(.25,g));r.push([a[0]+f/_*e*m,a[1]+p/_*e*m])}return r}function Lm(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function Ds(i,e){if(i.points&&i.points.length>=3)return Ac(i.points,e);let t=Math.min(i.x0,i.x1)-e,n=Math.max(i.x0,i.x1)+e,r=Math.min(i.z0,i.z1)-e,o=Math.max(i.z0,i.z1)+e;return[[t,r],[n,r],[n,o],[t,o]]}function zm(i,e,t,n){let r=wi(i,{exterior:t,interior:n},e).walls.filter(h=>h.exterior&&!h.free);if(!r.length)return null;let o=h=>`${Math.round(h[0]*1e3)}:${Math.round(h[1]*1e3)}`,s=new Map,a=r.map(h=>({a:h.a,b:h.b}));for(let h of a)for(let d of[h.a,h.b])s.set(o(d),[...s.get(o(d))??[],h]);let l=new Set,c=null;for(let h of a){if(l.has(h))continue;l.add(h);let d=[h.a,h.b],f=h.b;for(;;){let p=(s.get(o(f))??[]).find(_=>!l.has(_));if(!p||(l.add(p),f=o(p.a)===o(f)?p.b:p.a,o(f)===o(d[0])))break;d.push(f)}d.length>=3&&o(f)===o(d[0])&&(!c||Math.abs(xi(d))>Math.abs(xi(c)))&&(c=d)}if(!c)return null;let u=[];for(let h=0;h<c.length;h++){let d=c[(h+c.length-1)%c.length],f=c[h],p=c[(h+1)%c.length],_=(f[0]-d[0])*(p[1]-f[1])-(f[1]-d[1])*(p[0]-f[0]);Math.abs(_)>1e-6&&u.push(f)}return u.length>=3?Ac(u,t):null}var Ls=Math.tan(30*Fs);function Nm(i,e,t,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=e+o*n,l=t+s*r,c=Math.min(i-s,Math.max(o,(l-a+Ls*(i-s+o))/(2*Ls))),u=a+(c-o)*Ls;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:d=>d<=o?e+d*n:d<=c?a+(d-o)*Ls:d<=i-s?l+(i-s-d)*Ls:t+(i-d)*r}}function Ji(i,e){let t=c1(i,e);if(!i.points||i.points.length<3)return t;let n=Ds(i,Math.max(0,Math.min(e.u0,e.u1,e.a,e.b))).map(([c,u])=>$i(i,c,u)),r=Yn(n),o=t.faces.flatMap(c=>r.map(u=>Sc(c,u.map(h=>n[h])))).filter(c=>c.length>=3&&Math.abs(fn(c))>1e-8),s=(c,u,h)=>[c[0]+(u[0]-c[0])*h,c[1]+(u[1]-c[1])*h,c[2]+(u[2]-c[2])*h],a=t.ridges.flatMap(([c,u])=>Tc(n,c,u).map(([h,d])=>[s(c,u,h),s(c,u,d)])),l=[];return n.forEach((c,u)=>{let h=n[(u+1)%n.length],d=[0,...t.faces.flatMap(f=>Tc(f.map(([p,_])=>[p,_]),c,h).flat())].filter(f=>f<1-1e-8).sort((f,p)=>f-p);for(let f=0;f<d.length;f++){if(f&&d[f]-d[f-1]<1e-8)continue;let p=d[f],_=c[0]+(h[0]-c[0])*p,g=c[1]+(h[1]-c[1])*p;l.push([_,g,vo(t,_,g)??En(i).y(g)])}}),{faces:o,rim:l,ridges:a,gable:null}}function c1(i,e){let t=qn(i),n=En(i),r=t.w,o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(w,y)=>[w,y,n.y(y)],u=c(a,-o),h=c(l,-o),d=c(l,r+s),f=c(a,r+s),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Fs),_=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Fs);if(i.shape==="pent"){let w=[u,h,d,f];return{faces:[w],rim:w,ridges:[[d,f]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let w=i.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,r-n.vr)||r/2),y=[t.u0+w,n.vr,n.rh],b=[t.u1-w,n.vr,n.rh],x=i.shape==="pyramid"?[[u,h,y],[h,d,y],[d,f,y],[f,u,y]]:[[u,h,b,y],[y,b,d,f],[f,u,y],[h,d,b]],M=i.shape==="pyramid"?[[u,y],[f,y],[h,y],[d,y]]:[[y,b],[u,y],[f,y],[h,b],[d,b]];return{faces:x,rim:[u,h,d,f],ridges:M,gable:null}}if(i.shape==="halfhip"){let w=Math.min(n.y(0),n.y(r)),y=w+(n.rh-w)*.55,b=p>1e-6?Math.min(n.vr,(y-i.eave_a)/p):n.vr,x=_>1e-6?Math.max(n.vr,r-(y-i.eave_b)/_):n.vr,M=Math.min((t.u1-t.u0)/2-.1,(n.rh-y)/Math.max(.2,p)),A=[t.u0+M,n.vr,n.rh],v=[t.u1-M,n.vr,n.rh],S=[a,b,y],T=[a,x,y],P=[l,b,y],C=[l,x,y];return{faces:[[u,h,P,v,A,S],[A,v,C,d,f,T],[T,S,A],[P,C,v]],rim:[u,h,P,C,d,f,T,S],ridges:[[A,v],[S,A],[T,A],[P,v],[C,v]],gable:[[0,n.y(0)],[b,y],[x,y],[r,n.y(r)]]}}if(i.shape==="mansard"){let w=Nm(r,i.eave_a,i.eave_b,p,_),y=[a,w.vla,w.yla],b=[l,w.vla,w.yla],x=[a,r-w.vlb,w.ylb],M=[l,r-w.vlb,w.ylb],A=[a,w.vr,w.rh],v=[l,w.vr,w.rh];return{faces:[[u,h,b,y],[y,b,v,A],[A,v,M,x],[x,M,d,f]],rim:[u,h,b,v,M,d,f,x,A,y],ridges:[[A,v],[y,b],[x,M]],gable:[[0,n.y(0)],[w.vla,w.yla],[w.vr,w.rh],[r-w.vlb,w.ylb],[r,n.y(r)]]}}let g=[a,n.vr,n.rh],m=[l,n.vr,n.rh];return{faces:[[u,h,m,g],[g,m,d,f]],rim:[u,h,m,d,f,g],ridges:[[g,m]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function vo(i,e,t){let n=null;for(let r of i.faces){if(!_o(r.map(w=>[w[0],w[1]]),[e,t]))continue;let[o,s]=r,a=r.slice(2).find(w=>Math.abs((s[0]-o[0])*(w[1]-o[1])-(s[1]-o[1])*(w[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],u=s[1]-o[1],h=a[0]-o[0],d=a[2]-o[2],f=a[1]-o[1],p=c*f-u*d,_=u*h-l*f,g=l*d-c*h;if(Math.abs(_)<1e-9)continue;let m=o[2]-(p*(e-o[0])+g*(t-o[1]))/_;n=n===null?m:Math.min(n,m)}return n}function $i(i,e,t){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),o=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?[e,i.flip?s-t:t-o]:[t,i.flip?r-e:e-n]}function u1(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Ec(i,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(e)*1.5)continue;let a=u1(s);t<a.x0||t>a.x1||n<a.z0||n>a.z1||(!o||r(s)<r(o))&&(o=s)}return o}function Jh(i,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=qn(e),n=En(e).rh,r=Ji(i,{u0:0,u1:0,a:0,b:0}),o=En(i),s=p=>{let[_,g]=t.at(p,t.w/2),[m,w]=$i(i,_,g);return vo(r,m,w)??o.y(w)},a=s(t.u0)<=s(t.u1),l=a?t.u0:t.u1,c=a?t.u1:t.u0,u=a?1:-1,h=Math.abs(c-l),d=c;for(let p=.5;p<h;p+=.05)if(s(l+u*p)>=n-.02){d=l+u*p;break}if(Math.abs(d-c)<.05)return e;let f={...e};return e.axis==="x"?c===t.u1?f.x1=d:f.x0=d:c===t.u1?f.z1=d:f.z0=d,f}function Bm(i,e){let t=Jh(i,e),n=qn(t),r=En(t),o=Ji(i,{u0:0,u1:0,a:0,b:0}),s=En(i),a=d=>{let[f,p]=n.at(d,n.w/2),[_,g]=$i(i,f,p);return vo(o,_,g)??s.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],h=Math.max(1,Math.ceil(c/.15));for(let d=0;d<h;d++){let f=c*d/h,p=c*(d+1)/h,_=l?n.u0+f:n.u1-f,g=l?n.u0+p:n.u1-p,m=a(g),w=1/0,y=-1/0;for(let v=0;v<=40;v++){let S=n.w*v/40;r.y(S)>m+.02&&(w=Math.min(w,S),y=Math.max(y,S))}if(!(y-w>.05))continue;let b=n.at(_,w),x=n.at(g,y),M=$i(i,b[0],b[1]),A=$i(i,x[0],x[1]);u.push({u0:Math.min(M[0],A[0]),u1:Math.max(M[0],A[0]),v0:Math.min(M[1],A[1]),v1:Math.max(M[1],A[1])})}return u}function bo(i,e,t,n){let r=s=>n?s[e]<=t+1e-9:s[e]>=t-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),u=r(l);if(c&&o.push(a),c!==u){let h=(t-a[e])/(l[e]-a[e]);o.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return o}function Om(i,e){let t=bo(i,0,e.u0,!0),n=bo(i,0,e.u1,!1),r=bo(bo(i,0,e.u0,!1),0,e.u1,!0),o=bo(r,1,e.v0,!0),s=bo(r,1,e.v1,!1);return[t,n,o,s].filter(a=>a.length>=3&&Math.abs(xi(a.map(l=>[l[0],l[1]])))>1e-6)}function Rc(i,e,t){let n=qn(e),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>e.base+.05)),o=c=>c.some(u=>r.some(h=>Oe(u,h.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:t,b:o(a.map(c=>n.at(c,n.w+s)))?0:t,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:t,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:t}}function Um(i,e){let t=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}function h1(i){return En(i).rh}function Vm(i,e,t){let n=i.settings.roof.sections??[],r=n.filter(l=>t.includes(l.id)).map(l=>Ec(n,l)??l);if(!r.length)return e.id;let o=Math.max(...r.map(l=>h1(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(u=>{let[h,d]=c.points.reduce((f,p)=>[f[0]+p[0]/c.points.length,f[1]+p[1]/c.points.length],[0,0]);return h>=Math.min(u.x0,u.x1)&&h<=Math.max(u.x0,u.x1)&&d>=Math.min(u.z0,u.z1)&&d<=Math.max(u.z0,u.z1)}));return i.floors.filter(l=>l.elevation>=e.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??e.id}function un(i,e){let t=[e.roomLeft,e.roomRight].map(n=>i.rooms.find(r=>r.id===n)).filter(n=>!!n);return t.length?{bottom:Math.min(...t.map(n=>qh(i,n))),top:Math.max(...t.map(n=>ft(i,n)+Math.min(Ln(i,n),e.height??1/0)))}:{bottom:0,top:Math.min(i.height,e.height??i.height)}}function zs(i,e,t){let n=yr(e,i.rooms,i.walls??[]),r=n&&wr(t,e,n);if(!n||!r)return null;let o=r.wall,s=Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1]);if(s<1e-6)return null;let a=[(o.b[0]-o.a[0])/s,(o.b[1]-o.a[1])/s],l=o.roomLeft===n.room.id,c=i.rooms.find(U=>U.id===n.room.id||o.free&&U.id===o.roomLeft)??n.room,u=o.free?void 0:i.rooms.find(U=>U.id===(l?o.roomRight:o.roomLeft)),h=l?[-a[1],a[0]]:[a[1],-a[0]],d=Math.min(e.width,s),f=Math.max(0,Math.min(s-d,r.s-d/2)),p=[o.a[0]+a[0]*f,o.a[1]+a[1]*f],_=ft(i,c),g=u?ft(i,u):_,m=Math.min(_,g),w=Math.max(_,g),y={opening:e,room:c,other:u,wall:o,start:p,axis:a,toRoom:h,width:d,low:m,high:w,threshold:e.type==="window"?_:w,ceiling:Math.min(_+Ln(i,c),u?g+Ln(i,u):1/0)};if((c.wall_offset!=null||c.floor_offset!=null)&&(y.threshold=_),_+e.sill+e.height>y.ceiling+.001&&(y.issue="height"),!e.steps||!u||w-m<.001||e.type==="window")return y;let b=e.steps.side==="room",x=b?c:u,M=b?h:[-h[0],-h[1]],A=ft(i,x),v=A===w,S=b?l?o.left:o.right:l?o.right:o.left,T=e.steps.depth,P=e.steps.count,C=e.steps.offset??0,R=S+C,E=S-o.left-o.right;if(y.issue=y.issue??"fit",!Number.isFinite(T)||T<.1||T>10||!Number.isInteger(P)||P<1||P>30||!Number.isFinite(C)||Math.abs(C)>10||R+T<S+.01)return y;let I=(U,Z)=>[p[0]+a[0]*U+M[0]*Z,p[1]+a[1]*U+M[1]*Z],L=C<0?R:-.005,N=[I(0,L),I(d,L),I(d,R+T),I(0,R+T)],B=[I(.01,Math.min(S,R)+.01),I(d-.01,Math.min(S,R)+.01),I(d-.01,R+T-.01),I(.01,R+T-.01)],D=[I(-.001,E-.001),I(d+.001,E-.001),I(d+.001,S+.001),I(-.001,S+.001)],O=C<0?[c.points,u.points,D]:[x.points];return B.every((U,Z)=>O.some(q=>Oe(U,q))&&jh(U,B[(Z+1)%B.length],O).length===0)&&(y.threshold=b?g:_,y.stair={room:x,toward:M,face:R,wallFace:S,back:E,offset:C,count:P,depth:T,recess:v,bay:N},y.issue=_+e.sill+e.height>y.ceiling+.001?"height":void 0),y}function Pc(i,e,t){return t.filter(n=>n.stair&&Math.abs(ft(i,e)-n.high)<1e-6&&(n.room.id===e.id||n.other?.id===e.id)&&(n.stair.recess||n.stair.offset<0)).map(n=>n.stair.bay)}function Gm(i){let e=i.stair;if(!e||e.offset>=0)return i.threshold;let t=i.threshold;for(let n=0;n<e.count;n++){let r=e.face+e.depth*n/e.count;if(e.face+e.depth*(n+1)/e.count<=e.back||r>=e.wallFace)continue;let s=e.recess?i.low+(i.high-i.low)*(n+1)/e.count:i.high-(i.high-i.low)*n/e.count;t=Math.min(t,s)}return t}function xo(i,e){let t=s=>s.reduce((a,l,c)=>{let u=s[(c+1)%s.length];return a+l[0]*u[1]-u[0]*l[1]},0),n=t(e)>=0?1:-1,r=[],o=i;for(let s=0;s<e.length&&o.length>=3;s++){let a=e[s],l=e[(s+1)%e.length],c=f=>n*((l[0]-a[0])*(f[1]-a[1])-(l[1]-a[1])*(f[0]-a[0])),u=f=>{let p=[];return o.forEach((_,g)=>{let m=o[(g+1)%o.length],w=f*c(_),y=f*c(m);if(w>=-1e-9&&p.push(_),w>=-1e-9!=y>=-1e-9){let b=w/(w-y);p.push([_[0]+(m[0]-_[0])*b,_[1]+(m[1]-_[1])*b])}}),p},h=u(-1),d=u(1);h.length>=3&&Math.abs(t(h))>1e-8&&r.push(h),o=d}return r}function jh(i,e,t){let n=[0,1],r=e[0]-i[0],o=e[1]-i[1];for(let l of t)l.forEach((c,u)=>{let h=l[(u+1)%l.length],d=h[0]-c[0],f=h[1]-c[1],p=r*f-o*d;if(Math.abs(p)<1e-9)return;let _=((c[0]-i[0])*f-(c[1]-i[1])*d)/p,g=((c[0]-i[0])*o-(c[1]-i[1])*r)/p;_>0&&_<1&&g>=0&&g<=1&&n.push(_)});n.sort((l,c)=>l-c);let s=l=>[i[0]+r*l,i[1]+o*l],a=[];for(let l=1;l<n.length;l++)n[l]-n[l-1]>1e-9&&!t.some(c=>Oe(s((n[l]+n[l-1])/2),c))&&a.push([s(n[l-1]),s(n[l])]);return a}function yo(i,e){let t=Tn(e)>0?1:-1,n=[...i];for(let r=0;r<e.length&&n.length;r++){let o=e[r],s=e[(r+1)%e.length],a=c=>t*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let u=l[c],h=l[(c+1)%l.length],d=a(u),f=a(h);if(d>=0&&n.push(u),d>=0!=f>=0){let p=d/(d-f);n.push([u[0]+(h[0]-u[0])*p,u[1]+(h[1]-u[1])*p])}}}return n}function Hm(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length],o=i[(t+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(e&&Math.sign(s)!==e)return!1;e=Math.sign(s)}}return!0}var Zn=Xe(3662079,.95),Qh=Xe(3662079,1),ui=Xe(5995775,.34),Cc=Xe(5995775,.22),kc=[-.55,.83],Ze=-1,Ic=16,Mr=32,Wm=48,Ns=64,je=class{p=[];c=[];f=[];uv;tile;constructor(e=!1,t=!1){this.uv=e?[]:null,this.tile=t?[]:null}tri(e,t,n,r,o=r,s=r,a,l=Ze,c=[0,1]){this.p.push(...e,...t,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let e=new We;return e.setAttribute("position",new ye(this.p,3)),e.setAttribute("color",new ye(this.c,3)),e.setAttribute("fold",new ye(this.f,1)),this.uv&&e.setAttribute("uv",new ye(this.uv,2)),this.tile&&e.setAttribute("tile",new ye(this.tile,2)),e.computeBoundingSphere(),e}},Ft=class{p=[];c=[];f=[];seg(e,t,n=Zn,r=Ze){this.p.push(...e,...t),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(e,t,n,r,o){let[s,a]=e[1]<=t[1]?[e,t]:[t,e];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,Ze);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,Ze),this.seg(c,a,n,o)}geometry(){let e=new We;return e.setAttribute("position",new ye(this.p,3)),e.setAttribute("color",new ye(this.c,3)),e.setAttribute("fold",new ye(this.f,1)),e}};function Lc(i,e,t,n){let o=i.uv?2:0,s=(h,d)=>{let f=h*3+d;return{p:i.p.slice(f*3,f*3+3),c:i.c.slice(f*3,f*3+3),uv:i.uv?i.uv.slice(f*2,f*2+2):null,tile:i.tile?i.tile.slice(f*2,f*2+2):null}},a=(h,d,f)=>({p:h.p.map((p,_)=>p+(d.p[_]-p)*f),c:h.c.map((p,_)=>p+(d.c[_]-p)*f),uv:h.uv&&d.uv?h.uv.map((p,_)=>p+(d.uv[_]-p)*f):null,tile:h.tile}),l=(h,d,f)=>{for(let p=0;p<3;p++){let _=h*3+p;for(let g=0;g<3;g++)i.p[_*3+g]=d[p].p[g],i.c[_*3+g]=d[p].c[g];if(i.uv&&d[p].uv)for(let g=0;g<o;g++)i.uv[_*2+g]=d[p].uv[g];if(i.tile&&d[p].tile)for(let g=0;g<2;g++)i.tile[_*2+g]=d[p].tile[g];i.f[_]=f}},c=(h,d)=>{let f=i.p.length/9;for(let p of h)i.p.push(...p.p),i.c.push(...p.c),i.f.push(d),i.uv?.push(...p.uv??[.5,.5]),i.tile?.push(...p.tile??[0,1]);return f},u=i.p.length/9;for(let h=e;h<u;h++){let d=[s(h,0),s(h,1),s(h,2)],f=d.map(v=>v.p[1]>t+1e-6),p=d.map(v=>v.p[1]<t-1e-6);if(!f.some(Boolean))continue;if(!p.some(Boolean)){for(let v=0;v<3;v++)i.f[h*3+v]=n;continue}let _=i.f[h*3],g=(v,S)=>a(v,S,(t-v.p[1])/(S.p[1]-v.p[1])),m=f.filter(Boolean).length,w=m===1?f.indexOf(!0):f.indexOf(!1),y=d[w],b=d[(w+1)%3],x=d[(w+2)%3],M=g(y,b),A=g(x,y);m===1?(l(h,[y,M,A],n),c([M,b,x],_),c([M,x,A],_)):(l(h,[y,M,A],_),c([M,b,x],n),c([M,x,A],n))}}function Xm(i,e,t,n){let r=i.p.length/6;for(let o=e;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=t+1e-6)continue;if(l[1]>=t-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let u=(t-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,t,l[2]+(c[2]-l[2])*u];for(let f=0;f<3;f++)i.p[o*6+f]=l[f],i.p[o*6+3+f]=h[f];let d=i.c.slice(o*6,o*6+3);i.p.push(...h,...c),i.c.push(...d,...d),i.f.push(n,n)}}var pt=Math.PI/180;function Xe(i,e){let t=new j(i).multiplyScalar(e);return t.r=Math.min(1,t.r),t.g=Math.min(1,t.g),t.b=Math.min(1,t.b),t}function d1(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e}function pn(i,e=[]){let t=i.map(([n,r])=>new Ee(n,r));return ns.triangulateShape(t,e.map(n=>n.map(([r,o])=>new Ee(r,o))))}function Km(i,e,t,n,r,o,s){let a=new j(s),l=f=>.5+.5*Math.min(1,Math.max(0,f/1.6));for(let f=0;f<4;f++){let p=e[f],_=e[(f+1)%4],g=t[f],m=t[(f+1)%4],w=_[0]-p[0],y=_[1]-p[1],b=Math.hypot(w,y);if(b<1e-6)continue;let M=.8+.28*((y/b*kc[0]-w/b*kc[1]+1)/2),A=(g[0]+m[0]-p[0]-_[0])/2*(-y/b)+(g[1]+m[1]-p[1]-_[1])/2*(w/b),v=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),S=Xe(o,l(n)*M).lerp(a,v),T=Xe(o,l(r)*M).lerp(a,v);i.tri([p[0],n,p[1]],[g[0],r,g[1]],[m[0],r,m[1]],S,T,T),i.tri([p[0],n,p[1]],[m[0],r,m[1]],[_[0],n,_[1]],S,T,S)}let[c,u,h,d]=t;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[h[0],r,h[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[d[0],r,d[1]],[h[0],r,h[1]],a))}function Ym(i,e,t,n,r,o,s,a,l,c){let u=new j(l),h=[];for(let f=0;f<c;f++){let p=f/c*Math.PI*2;h.push({y:o+Math.cos(p)*s,s:r+Math.sin(p)*s})}let d=(f,p)=>{let _=e(f,h[p%c].s);return[_[0],h[p%c].y,_[1]]};for(let f=0;f<c;f++){let p=(f+.5)/c*Math.PI*2,_=Xe(a,.62+.4*Math.max(0,Math.cos(p)));i.tri(d(t,f),d(n,f+1),d(n,f),_),i.tri(d(t,f),d(t,f+1),d(n,f+1),_)}for(let f of[t,n]){let p=e(f,r),_=[p[0],o,p[1]];for(let g=0;g<c;g++)i.tri(_,d(f,g),d(f,g+1),u)}}function St(i,e,t,n,r,o,s={}){let a=typeof n=="number"?()=>n:p=>Math.max(t+.002,n(p[0],p[1])),l=s.aoFrom??t,c=s.fold??Ze,u=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),h=(s.holes??[]).map(p=>d1(p)>0?[...p].reverse():p),d=h.length?[...e,...h.flat()]:e,f=s.topFace===!1&&!s.bottom?[]:pn(e,h);if(s.topFace!==!1){let p=new j(o);for(let[_,g,m]of f){let w=d[_],y=d[g],b=d[m];i.tri([w[0],a(w),w[1]],[b[0],a(b),b[1]],[y[0],a(y),y[1]],p,p,p,void 0,s.topFold??c)}}if(s.bottom){let p=Xe(r,.55);for(let[_,g,m]of f){let w=d[_],y=d[g],b=d[m];i.tri([w[0],t,w[1]],[y[0],t,y[1]],[b[0],t,b[1]],p,p,p,void 0,c)}}for(let p of[e,...h])for(let _=0;_<p.length;_++){let g=p[_],m=p[(_+1)%p.length],w=m[0]-g[0],y=m[1]-g[1],b=Math.hypot(w,y);if(b<1e-6||s.skipSide?.(g,m))continue;let M=.8+.28*((y/b*kc[0]-w/b*kc[1]+1)/2),A=a(g),v=a(m),S=Xe(r,u(t)*M),T=Xe(r,u(A)*M),P=Xe(r,u(v)*M);i.tri([g[0],t,g[1]],[g[0],A,g[1]],[m[0],v,m[1]],S,T,P,void 0,c),i.tri([g[0],t,g[1]],[m[0],v,m[1]],[m[0],t,m[1]],S,P,S,void 0,c)}}var f1={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},gravel_bed:{color:2632501,side:1645605,edge:9676478,edgeAlpha:.3},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function p1(i,e,t){let n=[(e[0]+t[0])/2,(e[1]+t[1])/2],r=t[0]-e[0],o=t[1]-e[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let u=a.points[(c+1)%a.points.length],h=u[0]-l[0],d=u[1]-l[1],f=Math.hypot(h,d)||1;if(Math.abs((r*d-o*h)/(s*f))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*h+(n[1]-l[1])*d)/(f*f)));return Math.hypot(l[0]+h*p-n[0],l[1]+d*p-n[1])<.4}))}function Zm(i,e){return e.type==="pool"?Mc(i,e):Es(i,e)+(Ki(e.type)?.01:xc[e.type])}function Bs(i){return Tn(i)>=0?i:[...i].reverse()}function m1(i,e){let t=i[e];if(Ki(t.type)||t.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===e||!(o.cut&&r>e||o.type==="pool")||o.points.length<3||o.points.every(s=>Oe(s,t.points))&&n.push(Bs(o.points))}return n}function qm(i,e,t,n,r,o,s,a,l=0){let c=t[0]-e[0],u=t[1]-e[1],h=Math.hypot(c,u);if(h<1e-6)return;let d=-u/h*n*.5,f=c/h*n*.5;if(Math.abs(l)<1e-4){St(i,Bs([[e[0]+d,e[1]+f],[t[0]+d,t[1]+f],[t[0]-d,t[1]-f],[e[0]-d,e[1]-f]]),r,o,s,a,{aoFrom:r-1});return}let p=(b,x)=>[e[0]+d*x,b,e[1]+f*x],_=(b,x)=>[t[0]+d*x,b+l,t[1]+f*x],g=(b,x)=>{i.tri(b[0],b[1],b[2],x,x,x,void 0,Ze),i.tri(b[0],b[2],b[3],x,x,x,void 0,Ze),i.tri(b[0],b[2],b[1],x,x,x,void 0,Ze),i.tri(b[0],b[3],b[2],x,x,x,void 0,Ze)},m=new j(a),w=new j(Xe(s,.9)),y=new j(Xe(s,.6));g([p(o,1),_(o,1),_(o,-1),p(o,-1)],m),g([p(r,1),_(r,1),_(r,-1),p(r,-1)],y),g([p(r,1),_(r,1),_(o,1),p(o,1)],w),g([p(r,-1),_(r,-1),_(o,-1),p(o,-1)],w),g([p(r,1),p(r,-1),p(o,-1),p(o,1)],w),g([_(r,1),_(r,-1),_(o,-1),_(o,1)],w)}function $m(i,e,t,n){let r=t.outdoor??[];r.forEach((o,s)=>{if(o.points.length<3)return;let a=Es(t,o),l=(w,y)=>a-Rs(t,o,w,y),c=a-(o.type==="pool"?0:o.slope??0),u=Ki(o.type)&&o.height?o.height:xc[o.type],h={...f1[o.type],top:u},d=Bs(o.points),f=Xe(h.edge,h.edgeAlpha),p=o.open&&(o.type==="fence"||o.type==="pergola")?d.length-1:-1,_=w=>{if(o.outline!==!1)for(let y=0;y<d.length;y++){if(y===p)continue;let b=d[y],x=d[(y+1)%d.length];e.seg([b[0],w(b[0],b[1]),b[1]],[x[0],w(x[0],x[1]),x[1]],f,Ze)}},g=n??i,m=new j(n?1734832:h.color);switch(o.type){case"pool":{let w=new j(h.side),y=new j(Xe(h.side,.55)),b=new j(932440),x=Mc(t,o),M=wc(t,o),A=bm(t,o);for(let[v,S,T]of pn(d)){let P=d[v],C=d[S],R=d[T];(n?g:i).tri([P[0],x,P[1]],[R[0],x,R[1]],[C[0],x,C[1]],m,m,m,void 0,Ze),i.tri([P[0],A,P[1]],[R[0],A,R[1]],[C[0],A,C[1]],b,b,b,void 0,Ze)}for(let v=0;v<d.length;v++){let S=d[v],T=d[(v+1)%d.length];i.tri([T[0],A,T[1]],[T[0],M,T[1]],[S[0],M,S[1]],y,w,w,void 0,Ze),i.tri([T[0],A,T[1]],[S[0],M,S[1]],[S[0],A,S[1]],y,w,y,void 0,Ze)}if(!o.above&&Kh(t,o)){let v=new j(660258),S=new j(396054),T=A-.2,P=Math.min(a,M);for(let C=0;C<d.length;C++){let R=d[C],E=d[(C+1)%d.length];i.tri([R[0],T,R[1]],[R[0],P,R[1]],[E[0],P,E[1]],S,v,v,void 0,Ze),i.tri([R[0],T,R[1]],[E[0],P,E[1]],[E[0],T,E[1]],S,v,S,void 0,Ze)}for(let[C,R,E]of pn(d)){let I=d[C],L=d[R],N=d[E];i.tri([I[0],T,I[1]],[L[0],T,L[1]],[N[0],T,N[1]],S,S,S,void 0,Ze)}if(o.outline!==!1)for(let C=0;C<d.length;C++){let R=d[C],E=d[(C+1)%d.length];e.seg([R[0],T,R[1]],[E[0],T,E[1]],Xe(h.edge,h.edgeAlpha*.35),Ze),e.seg([R[0],T,R[1]],[R[0],P,R[1]],Xe(h.edge,h.edgeAlpha*.25),Ze)}}if(M>a+.02){let v=new j(2044240),S=new j(1187123);for(let T=0;T<d.length;T++){let P=d[T],C=d[(T+1)%d.length];i.tri([P[0],a,P[1]],[P[0],M,P[1]],[C[0],M,C[1]],S,v,v,void 0,Ze),i.tri([P[0],a,P[1]],[C[0],M,C[1]],[C[0],a,C[1]],S,v,S,void 0,Ze)}_(()=>a+.005)}if(_(()=>M),_(()=>x+.005),o.outline!==!1)for(let v=0;v<d.length;v++){let S=d[v],T=d[(v+1)%d.length];e.seg([S[0],A+.005,S[1]],[T[0],A+.005,T[1]],Xe(h.edge,h.edgeAlpha*.4),Ze)}break}case"fence":{for(let w=0;w<d.length;w++){if(w===p)continue;let y=d[w],b=d[(w+1)%d.length],x=Math.hypot(b[0]-y[0],b[1]-y[1]),M=Math.max(1,Math.round(x/2)),A=p>=0&&w===p-1?M:M-1;for(let v=0;v<=A;v++){let S=v/M,T=y[0]+(b[0]-y[0])*S,P=y[1]+(b[1]-y[1])*S,C=l(T,P);St(i,Bs([[T-.04,P-.04],[T+.04,P-.04],[T+.04,P+.04],[T-.04,P+.04]]),C,C+h.top,h.side,h.color)}for(let v of[.35,.85])e.seg([y[0],l(y[0],y[1])+v*h.top,y[1]],[b[0],l(b[0],b[1])+v*h.top,b[1]],f,Ze)}break}case"pergola":{let w=h.top;for(let[y,b]of d){let x=l(y,b);St(i,Bs([[y-.06,b-.06],[y+.06,b-.06],[y+.06,b+.06],[y-.06,b+.06]]),x,x+w,h.side,h.color)}for(let y=0;y<d.length;y++){if(y===p)continue;let b=d[y],x=d[(y+1)%d.length],M=l(b[0],b[1])+w;if(qm(i,b,x,.12,M-.16,M,h.side,h.color,l(x[0],x[1])-l(b[0],b[1])),o.bracing){let A=l(b[0],b[1]),v=l(x[0],x[1]);e.seg([b[0],A+.25,b[1]],[x[0],v+w-.25,x[1]],f,Ze),e.seg([x[0],v+.25,x[1]],[b[0],A+w-.25,b[1]],f,Ze)}}if(Em(d)){let y=Rm(d),b=y.x1-y.x0,x=y.z1-y.z0,M=b>=x,A=M?b:x,v=Math.max(1,Math.round(A/.6));for(let S=1;S<v;S++){let T=(M?y.x0:y.z0)+A*S/v,P=M?[T,y.z0+.06]:[y.x0+.06,T],C=M?[T,y.z1-.06]:[y.x1-.06,T],R=l(P[0],P[1])+w;qm(i,P,C,.06,R-.04,R+.08,h.side,h.color,l(C[0],C[1])-l(P[0],P[1]))}}_((y,b)=>l(y,b)+w+.004);break}case"balcony":{St(i,d,a-.18,a+h.top,h.side,h.color,{aoFrom:a-.18}),_(()=>a+h.top+.004);let y=o.height&&o.height>.3?o.height:1,b=Xe(9417983,.42),x=Xe(3662079,.55);for(let M=0;M<d.length;M++){let A=d[M],v=d[(M+1)%d.length];if(p1(t,A,v))continue;let S=Math.hypot(v[0]-A[0],v[1]-A[1]),T=a+h.top;e.seg([A[0],T+y,A[1]],[v[0],T+y,v[1]],x,Ze),e.seg([A[0],T+.1,A[1]],[v[0],T+.1,v[1]],b,Ze);let P=Math.max(1,Math.round(S/.12));for(let C=0;C<=P;C++){let R=C/P,E=A[0]+(v[0]-A[0])*R,I=A[1]+(v[1]-A[1])*R;e.seg([E,T,I],[E,T+y,I],C===0||C===P?x:b,Ze)}}break}default:{let w=(b,x)=>l(b,x)+h.top,y=m1(r,s);if(St(i,d,c,o.slope?w:a+h.top,h.side,h.color,{aoFrom:c,holes:y}),o.type==="gravel_bed"){let b=d.map(R=>R[0]),x=d.map(R=>R[1]),M=Math.min(...b),A=Math.min(...x),v=Math.max(...b)-M,S=Math.max(...x)-A,T=[...o.id].reduce((R,E)=>(Math.imul(R,33)^E.charCodeAt(0))>>>0,5381),P=()=>(T=Math.imul(T,1664525)+1013904223>>>0,T/4294967296),C=Math.min(512,Math.ceil(xi(d)/.012));for(let R=0;R<C;R++){let E=M+P()*v,I=A+P()*S,L=.012+P()*.016,N=[[E-L,I],[E+L*.7,I-L*.8],[E+L*.4,I+L]];if(!N.every(O=>Oe(O,d)&&!y.some(U=>Oe(O,U))))continue;let B=N.map(([O,U])=>[O,w(O,U)+.003,U]),D=Xe(P()<.5?5593185:3422016,.75+P()*.3);i.tri(B[0],B[2],B[1],D,D,D,void 0,Ze)}}if(_((b,x)=>w(b,x)+.004),o.type==="hedge"&&_((b,x)=>l(b,x)+.004),o.outline!==!1)for(let b of y)for(let x=0;x<b.length;x++){let M=b[x],A=b[(x+1)%b.length];e.seg([M[0],w(M[0],M[1])+.004,M[1]],[A[0],w(A[0],A[1])+.004,A[1]],f,Ze)}}}})}var Os=.012,g1=.012;function jm(i,e,t,n,r,o=[],s,a){let l=[],c=[],u=[],h=[],d=(y,b,x,M,A,v,S)=>{for(let T of[y,b,x,y,x,M])l.push(T[0],T[1],T[2]),c.push(A[0],A[1],A[2]),u.push(v),h.push(S)},f=i.openings.map(y=>zs(i,y,e)).filter(y=>!!y);i.rooms.forEach((y,b)=>{if(y.points.length<3)return;let x=Pc(i,y,f),M=y.points.map(E=>E[0]),A=y.points.map(E=>E[1]),v=Math.min(...M),S=Math.min(...A),T=Math.max(...M),P=Math.max(...A),C=Math.max(1,Math.ceil((T-v)/r)),R=Math.max(1,Math.ceil((P-S)/r));for(let E=0;E<C;E++)for(let I=0;I<R;I++){let L=v+(E+.5)*r,N=S+(I+.5)*r;if(!Oe([L,N],y.points)||o.some(q=>Oe([L,N],q))&&!x.some(q=>Oe([L,N],q)))continue;let B=v+E*r,D=S+I*r,O=Math.min(B+r,T),U=Math.min(D+r,P);if(a){let q=[[B,D],[O,D],[O,U],[B,U]];if(q.every(([ae,ie])=>Oe([ae+(L-ae)*1e-6,ie+(N-ie)*1e-6],y.points))){let ae=q.map(([ie,le])=>a(ie,le));if(ae.every(ie=>ie!=null)){let ie=(ae[1]+ae[2]-ae[0]-ae[3])/(2*(O-B)),le=(ae[2]+ae[3]-ae[0]-ae[1])/(2*(U-D)),H=Math.hypot(ie,1,le),W=[ie/H,-1/H,le/H],re=q.map(([ce,$],he)=>[ce,ae[he]-Os,$]);d(re[0],re[1],re[2],re[3],W,b,-1)}}}let Z=ft(i,y)+Os;if(!x.length)d([B,Z,D],[B,Z,U],[O,Z,U],[O,Z,D],[0,1,0],b,-1);else{let q=[[[B,D],[B,U],[O,U],[O,D]]];for(let ae of x)q=q.flatMap(ie=>xo(ie,ae));for(let ae of q)for(let ie=1;ie+1<ae.length;ie++)for(let le of[ae[0],ae[ie],ae[ie+1]])l.push(le[0],Z,le[1]),c.push(0,1,0),u.push(b),h.push(-1)}}});let p=i.rooms.length,_=(i.outdoor??[]).filter(y=>y.points.length>=3&&!Ki(y.type));if(_.length){let y=_.flatMap(T=>T.points.map(P=>P[0])),b=_.flatMap(T=>T.points.map(P=>P[1])),x=Math.floor(Math.min(...y)/r)*r,M=Math.floor(Math.min(...b)/r)*r,A=Math.max(1,Math.ceil((Math.max(...y)-x)/r)),v=Math.max(1,Math.ceil((Math.max(...b)-M)/r)),S=(T,P,C)=>Zm(i,T)-Rs(i,T,P,C)+Os;for(let T=0;T<A;T++)for(let P=0;P<v;P++){let C=x+T*r,R=M+P*r,E,I=[C+r/2,R+r/2];E=_.find(N=>N.type==="pool"&&Oe(I,N.points));for(let N=_.length-1;N>=0&&!E;N--)Oe(I,_[N].points)&&(E=_[N]);if(!E)continue;let L=(N,B)=>[N,S(E,N,B),B];d(L(C,R),L(C,R+r),L(C+r,R+r),L(C+r,R),[0,1,0],p,-1)}}let g=Math.min(i.cut_height,Wt(i)-i.elevation),m=[];e.forEach((y,b)=>{let x=un(i,y).top,M=y.b[0]-y.a[0],A=y.b[1]-y.a[1],v=Math.hypot(M,A);if(v<.05)return;let S=[M/v,A/v],T=[-S[1],S[0]],P=t[b],C=b1(y,S,v,n),R=(L,N)=>L?i.rooms.findIndex(B=>B.id===L):N?p:-1;m.push({a:y.a,b:y.b,h:x,ra:R(y.roomLeft,!1),rb:R(y.roomRight,y.exterior),gaps:C});let E=(L,N,B)=>[N,B,...L.filter(D=>D>N+.005&&D<B-.005)].sort((D,O)=>D-O).filter((D,O,U)=>O===0||D>U[O-1]+.005),I=E(C.flatMap(L=>[L.s0,L.s1]),0,v);for(let L of[1,-1]){let N=L>0?y.roomLeft:y.roomRight,B=N?i.rooms.findIndex(W=>W.id===N):y.exterior?p:-1;if(B<0)continue;let D=N?i.rooms[B]:null,O=D?ft(i,D):un(i,y).bottom,U=D?O+Math.min(Ln(i,D),y.height??1/0):x,Z=Math.min(g,U-.02),q=E([Z,(Z+U)/2,...C.flatMap(W=>[W.y0+.01,W.y1-.01])],O+.02,U-.02),ae=(L>0?y.left:y.right)+g1,ie=[T[0]*L,T[1]*L],le=(W,re)=>[y.a[0]+S[0]*W+ie[0]*ae,re,y.a[1]+S[1]*W+ie[1]*ae],H=W=>{let re=le(W,0),ce=s?.(re[0],re[2]);return ce==null?1/0:ce-.02};for(let W=0;W<I.length-1;W++){let re=I[W+1]-I[W],ce=Math.max(1,Math.ceil(re/r));for(let $=0;$<ce;$++){let he=I[W]+re/ce*$,De=I[W]+re/ce*($+1),ze=(he+De)/2;for(let Pe=0;Pe<q.length-1;Pe++){let ke=q[Pe],Ge=q[Pe+1];if(Ge-ke<.01)continue;let at=(ke+Ge)/2;if(C.some(mt=>ze>mt.s0&&ze<mt.s1&&at>mt.y0&&at<mt.y1))continue;let wt=ke>=g-1e-6?P:Mr+P,Bt=Math.min(Ge,H(he)),nt=Math.min(Ge,H(De));Bt<=ke+.005&&nt<=ke+.005||d(le(he,ke),le(De,ke),le(De,Math.max(ke,nt)),le(he,Math.max(ke,Bt)),[ie[0],0,ie[1]],B,wt)}}}}});for(let y of i.openings){let b=zs(i,y,e),x=b?.stair;if(!b||!x)continue;let M=i.rooms.findIndex(v=>v.id===x.room.id),A=(v,S,T)=>[b.start[0]+b.axis[0]*v+x.toward[0]*S,T,b.start[1]+b.axis[1]*v+x.toward[1]*S];for(let v=0;v<x.count;v++){let S=x.face+x.depth*v/x.count,T=x.face+x.depth*(v+1)/x.count,P=(x.recess?b.low+(b.high-b.low)*(v+1)/x.count:b.high-(b.high-b.low)*v/x.count)+Os;d(A(0,S,P),A(b.width,S,P),A(b.width,T,P),A(0,T,P),[0,1,0],M,-1)}if(x.offset>0){let v=b.threshold+Os;d(A(0,x.wallFace,v),A(b.width,x.wallFace,v),A(b.width,x.face,v),A(0,x.face,v),[0,1,0],M,-1)}}let w=[];for(let y of n){if(y.opening.type!=="door")continue;let b=e.find(A=>Qm(A,y)&&_1(A,y));if(!b||!b.roomLeft||!b.roomRight)continue;let x=i.rooms.findIndex(A=>A.id===b.roomLeft),M=i.rooms.findIndex(A=>A.id===b.roomRight);x<0||M<0||w.push({id:y.opening.id,a:x,b:M,x:y.start[0]+y.axis[0]*(y.width/2),y:Math.min(1.1,y.top*.55),z:y.start[1]+y.axis[1]*(y.width/2)})}return{pos:new Float32Array(l),normal:new Float32Array(c),room:Int16Array.from(u),fold:new Float32Array(h),doors:w,blockers:m}}function Qm(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(t,n)||1;return Math.abs((e.start[0]-i.a[0])*n-(e.start[1]-i.a[1])*t)/r<.02&&Math.abs((e.axis[0]*t+e.axis[1]*n)/r)>.99}function _1(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(t,n)||1,o=e.start[0]+e.axis[0]*(e.width/2),s=e.start[1]+e.axis[1]*(e.width/2),a=((o-i.a[0])*t+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}function b1(i,e,t,n){let r=[];for(let o of n){if(!Qm(i,o))continue;let s=(o.start[0]-i.a[0])*e[0]+(o.start[1]-i.a[1])*e[1],l=o.axis[0]*e[0]+o.axis[1]*e[1]>0?s:s-o.width;l>t||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function v1(i,e){let t=Math.max(0,-e),n=Math.max(0,e);switch(i){case"ceiling":return .3+.7*t;case"spot":return .06+.94*t**5;case"pendant":return .25+.85*t**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(e);default:return 1}}function x1(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Jm(i,e,t,n,r,o,s){let a=e-i.x,l=t-i.y,c=n-i.z,u=a*a+l*l+c*c,h=Math.sqrt(u)||1e-6,d=x1(i),f=1/(1+u/(d*d)),p=f*Math.sqrt(f),_=Math.max(0,-(a*r+l*o+c*s)/h);if(i.direction){let g=(a*i.direction[0]+l*i.direction[1]+c*i.direction[2])/h,m=Math.cos((i.angle??60)*Math.PI/360),w=Math.cos((i.angle??60)*.8*Math.PI/360),y=Math.max(0,Math.min(1,(g-m)/(w-m)));return i.level*p*(.2+.8*_)*y*y*(3-2*y)}return i.level*p*(.2+.8*_)*v1(i.kind,l/h)}function eg(i,e,t=.7,n=[]){let r=[...e];i.doors.forEach((u,h)=>{let d=n[h]??.5;if(!(d<=.01))for(let[f,p]of[[u.a,u.b],[u.b,u.a]]){let _=[0,0,0];for(let m of e){if(m.room!==f)continue;let w=m.x-u.x,y=m.y-u.y,b=m.z-u.z,x=Math.hypot(w,y,b)||1,M=Jm(m,u.x,u.y,u.z,w/x,y/x,b/x);_[0]+=m.color[0]*M,_[1]+=m.color[1]*M,_[2]+=m.color[2]*M}let g=Math.max(_[0],_[1],_[2]);g<.01||r.push({x:u.x,y:u.y,z:u.z,color:[_[0]/g,_[1]/g,_[2]/g],level:Math.min(1,g*.9*(.35+.65*d)),kind:"wall",room:p})}});let o=new Map;for(let u of r){let h=i.blockers.filter(f=>f.ra===u.room||f.rb===u.room),d={...u,color:u.color.map(f=>Math.pow(f,1.5)),walls:h};o.set(u.room,[...o.get(u.room)??[],d])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let u=0;u<l.length;u++){let h=o.get(l[u]);if(!h)continue;let d=u*3,f=0,p=0,_=0;for(let g of h){if(g.walls.length&&ed(g,g.walls,s[d],s[d+1],s[d+2]))continue;let m=Jm(g,s[d],s[d+1],s[d+2],a[d],a[d+1],a[d+2]);f+=g.color[0]*m,p+=g.color[1]*m,_+=g.color[2]*m}c[d]=1-Math.exp(-f*t*1.6),c[d+1]=1-Math.exp(-p*t*1.6),c[d+2]=1-Math.exp(-_*t*1.6)}return c}function ed(i,e,t,n,r){let o=t-i.x,s=r-i.z;for(let a of e){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=o*c-s*l;if(Math.abs(u)<1e-9)continue;let h=a.a[0]-i.x,d=a.a[1]-i.z,f=(h*c-d*l)/u;if(f<=1e-6||f>=1-1e-6)continue;let p=(h*s-d*o)/u;if(p<0||p>1)continue;let _=i.y+(n-i.y)*f;if(_>=a.h||_<(a.bottom??0))continue;let g=p*Math.hypot(l,c);if(!a.gaps.some(m=>g>m.s0&&g<m.s1&&_>m.y0&&_<m.y1))return!0}return!1}function td(i,e,t){let n=i.rooms.findIndex(r=>r.points.length>=3&&Oe([e,t],r.points));return n<0?i.rooms.length:n}function wo(i,e){return i&&e>=0&&e<i.length?i[e]:e}function y1(i){let e=[...i].sort((n,r)=>n[0]-r[0]||n[1]-r[1]),t=n=>{let r=[];for(let o of n){for(;r.length>1;){let s=r[r.length-2],a=r[r.length-1];if((a[0]-s[0])*(o[1]-s[1])-(a[1]-s[1])*(o[0]-s[0])>1e-9)break;r.pop()}r.push(o)}return r.slice(0,-1)};return[...t(e),...t([...e].reverse())]}function tg(i,e,t,n,r,o){let s=t.map(l=>{let c=Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1])||1,u=(l.b[0]-l.a[0])/c,h=(l.b[1]-l.a[1])/c,d=n.filter(f=>Math.abs((f.start[0]-l.a[0])*h-(f.start[1]-l.a[1])*u)<.01).map(f=>{let p=(f.start[0]-l.a[0])*u+(f.start[1]-l.a[1])*h;return{s0:p,s1:p+f.width,y0:f.sill,y1:f.top}});return{a:l.a,b:l.b,h:un(e,l).top,bottom:un(e,l).bottom,ra:0,rb:0,gaps:d}}),a=e.rooms.map(l=>({origin:new V(0,ft(e,l),0),u:new V(1,0,0),v:new V(0,0,1),normal:new V(0,1,0),polygon:l.points,holes:r,room:l.id}));for(let l of t){let c=l.b[0]-l.a[0],u=l.b[1]-l.a[1],h=Math.hypot(c,u);if(h<.01)continue;let d=new V(c/h,0,u/h),f=un(e,l);for(let[p,_,g]of[[l.roomLeft,l.left,1],[l.roomRight,l.right,-1]]){if(!p)continue;let m=new V(-d.z*g,0,d.x*g),w=new V(l.a[0],f.bottom,l.a[1]).addScaledVector(m,_+.003),y=[];for(let b of n){let x=new V(b.start[0]-l.a[0],0,b.start[1]-l.a[1]);if(Math.abs(x.x*d.z-x.z*d.x)>.01)continue;let M=x.dot(d);M+b.width<0||M>h||y.push([[M,b.sill-f.bottom],[M+b.width,b.sill-f.bottom],[M+b.width,b.top-f.bottom],[M,b.top-f.bottom]])}a.push({origin:w,u:d,v:new V(0,1,0),normal:m,polygon:[[0,0],[h,0],[h,f.top-f.bottom],[0,f.top-f.bottom]],holes:y,room:p,fold:o[t.indexOf(l)]})}}for(let l of e.furniture.filter(c=>c.rotation_x||c.rotation_z)){let c=Ct(e,l),u=gc(l,c).map(f=>new V(...f)),h=Ps(e,l.x,l.z)?.id,d=[...a];for(let f of e.furniture){if(f===l||!(Yh.has(f.type)||_t(f.type)?.surface)||Ps(e,f.x,f.z)?.id!==h)continue;let p=gc(f,Ct(e,f)).slice(4).map(b=>new V(...b)),_=p[1].clone().sub(p[0]).normalize(),g=p[3].clone().sub(p[0]).normalize(),m=new V().crossVectors(g,_).normalize();m.y<0&&m.negate();let w=p[0].distanceTo(p[1]),y=p[0].distanceTo(p[3]);d.push({origin:p[0],u:_,v:g,normal:m,polygon:[[0,0],[w,0],[w,y],[0,y]],holes:[],room:h,fold:Ns})}for(let f of d){if(f.room!==h)continue;let p=u.map(T=>T.clone().sub(f.origin).dot(f.normal));if(Math.max(...p)<-.01)continue;let _=Math.max(0,Math.min(...p));if(_>.35)continue;let g=y1(u.map(T=>{let P=T.clone().sub(f.origin);return[P.dot(f.u),P.dot(f.v)]}));if(g.length<3)continue;let m=g.reduce((T,P)=>T+P[0],0)/g.length,w=g.reduce((T,P)=>T+P[1],0)/g.length,y=.055+_*.15,b=g.map(([T,P])=>{let C=Math.hypot(T-m,P-w)||1;return[T+(T-m)*y/C,P+(P-w)*y/C]}),x=new j(1-.45*Math.exp(-_*8),1-.45*Math.exp(-_*8),1-.45*Math.exp(-_*8)),M=new j(1,1,1),A=pn(f.polygon).map(([T,P,C])=>[f.polygon[T],f.polygon[P],f.polygon[C]]),v=i.count,S=(T,P)=>{for(let C of A){let R=[yo(T,C)];for(let E of f.holes)for(let[I,L,N]of pn(E))R=R.flatMap(B=>xo(B,[E[I],E[L],E[N]]));for(let E of R)for(let I=1;I+1<E.length;I++){let L=[E[0],E[I],E[I+1]],N=U=>f.origin.clone().addScaledVector(f.u,U[0]).addScaledVector(f.v,U[1]).addScaledVector(f.normal,.003).toArray(),B=N([(L[0][0]+L[1][0]+L[2][0])/3,(L[0][1]+L[1][1]+L[2][1])/3]);if(ed({x:l.x,y:c+l.h/2,z:l.z},s,B[0],B[1],B[2]))continue;let D=(T[1][1]-T[2][1])*(T[0][0]-T[2][0])+(T[2][0]-T[1][0])*(T[0][1]-T[2][1]),O=U=>{let Z=((T[1][1]-T[2][1])*(U[0]-T[2][0])+(T[2][0]-T[1][0])*(U[1]-T[2][1]))/D,q=((T[2][1]-T[0][1])*(U[0]-T[2][0])+(T[0][0]-T[2][0])*(U[1]-T[2][1]))/D;return new j(P[0].r*Z+P[1].r*q+P[2].r*(1-Z-q),P[0].g*Z+P[1].g*q+P[2].g*(1-Z-q),P[0].b*Z+P[1].b*q+P[2].b*(1-Z-q))};Math.abs(D)>1e-10&&i.tri(N(L[0]),N(L[1]),N(L[2]),O(L[0]),O(L[1]),O(L[2]))}}};for(let[T,P,C]of pn(g))S([g[T],g[P],g[C]],[x,x,x]);for(let T=0;T<g.length;T++){let P=(T+1)%g.length;S([g[T],b[T],b[P]],[x,M,M]),S([g[T],b[P],g[P]],[x,M,x])}f.fold!==void 0&&Lc(i,v,e.cut_height,f.fold)}}}var $n=1e-4;function nd(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e/2}function ng(i,e,t,n){let r=[e[0]-i[0],e[1]-i[1]],o=[n[0]-t[0],n[1]-t[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((t[0]-i[0])*o[1]-(t[1]-i[1])*o[0])/s,l=((t[0]-i[0])*r[1]-(t[1]-i[1])*r[0])/s;return a>$n&&a<1-$n&&l>-$n&&l<1+$n?a:null}function id(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-e[0])*n+(i[1]-e[1])*r)/o;return s<=$n||s>=1-$n?null:Math.abs((i[0]-e[0])*r-(i[1]-e[1])*n)/Math.sqrt(o)<$n?s:null}function w1(i,e){for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];for(let o=0;o<e.length;o++){let s=e[o],a=e[(o+1)%e.length];if(ng(n,r,s,a)!==null||id(s,n,r)!==null||id(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<$n)return!0}}return Oe(i[0],e)||Oe(e[0],i)}function M1(i){let e=i.map(o=>nd(o)>=0?o:[...o].reverse()),t=[];e.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],u=[0,1];e.forEach((h,d)=>{if(d!==s)for(let f=0;f<h.length;f++){let p=h[f],_=h[(f+1)%h.length],g=ng(l,c,p,_)??id(p,l,c);g!==null&&u.push(g)}}),u.sort((h,d)=>h-d);for(let h=1;h<u.length;h++){if(u[h]-u[h-1]<$n)continue;let d=[l[0]+(c[0]-l[0])*u[h-1],l[1]+(c[1]-l[1])*u[h-1]],f=[l[0]+(c[0]-l[0])*u[h],l[1]+(c[1]-l[1])*u[h]],p=Math.hypot(f[0]-d[0],f[1]-d[1]),_=[(d[0]+f[0])/2+(f[1]-d[1])/p*.001,(d[1]+f[1])/2-(f[0]-d[0])/p*.001];e.some((g,m)=>m!==s&&Oe(_,g))||t.some(([g,m])=>Math.hypot(g[0]-d[0],g[1]-d[1])<$n&&Math.hypot(m[0]-f[0],m[1]-f[1])<$n)||t.push([d,f])}}});let n=[],r=new Set;for(let o=0;o<t.length;o++){if(r.has(o))continue;r.add(o);let s=[t[o][0]],a=t[o][1];for(let l=0;l<t.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=t.findIndex(([u],h)=>!r.has(h)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(t[c][0]),a=t[c][1]}s.length>=3&&nd(s)>1e-6&&n.push(s)}return n}function rd(i){let e=i.filter(o=>o.length>=3),t=e.map((o,s)=>s),n=o=>t[o]===o?o:t[o]=n(t[o]);for(let o=0;o<e.length;o++)for(let s=o+1;s<e.length;s++)n(o)!==n(s)&&w1(e[o],e[s])&&(t[n(s)]=n(o));let r=new Map;return e.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:M1(o))}function S1(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-e[0])*n+(i[1]-e[1])*r)/o)):0;return Math.hypot(i[0]-e[0]-n*s,i[1]-e[1]-r*s)}function ig(i,e,t=.03){return i.every(n=>Oe(n,e)||e.some((r,o)=>S1(n,r,e[(o+1)%e.length])<=t))}function od(i,e){let t=nd(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return t.map((r,o)=>{let s=n(t[(o-1+t.length)%t.length],r),a=n(r,t[(o+1)%t.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*e,r[1]+(s[1]+a[1])/l*e]})}function rg(i,e=Math.PI/3){let t=i.index?i.toNonIndexed():i,n=t.attributes.position,r=n.count,o;if(n.isBufferAttribute===!0&&n.itemSize===3&&n.normalized===!1)o=n.array;else{o=new Float64Array(r*3);for(let b=0;b<r;b++)o[3*b+0]=n.getX(b),o[3*b+1]=n.getY(b),o[3*b+2]=n.getZ(b)}let s=Math.cos(e),a=(1+1e-10)*100,l=r/3,c=new Float64Array(l*3);for(let b=0;b<l;b++){let x=9*b,M=o[x+0],A=o[x+1],v=o[x+2],S=o[x+3],T=o[x+4],P=o[x+5],C=o[x+6],R=o[x+7],E=o[x+8],I=C-S,L=R-T,N=E-P,B=M-S,D=A-T,O=v-P,U=L*O-N*D,Z=N*B-I*O,q=I*D-L*B,ae=1/(Math.sqrt(U*U+Z*Z+q*q)||1);c[3*b+0]=U*ae,c[3*b+1]=Z*ae,c[3*b+2]=q*ae}let u=new Int32Array(r),h=new Float64Array(r*3),d=1;for(;d<r*2;)d<<=1;let f=d-1,p=new Int32Array(d),_=0;for(let b=0;b<r;b++){let x=3*b,M=Math.trunc(o[x+0]*a),A=Math.trunc(o[x+1]*a),v=Math.trunc(o[x+2]*a),S=(Math.imul(M,73856093)^Math.imul(A,19349663)^Math.imul(v,83492791))&f;for(;;){let T=p[S];if(T===0){let C=3*_;h[C+0]=M,h[C+1]=A,h[C+2]=v,p[S]=_+1,u[b]=_++;break}let P=3*(T-1);if(h[P+0]===M&&h[P+1]===A&&h[P+2]===v){u[b]=T-1;break}S=S+1&f}}let g=new Int32Array(_+1);for(let b=0;b<r;b++)g[u[b]+1]++;for(let b=0;b<_;b++)g[b+1]+=g[b];let m=new Int32Array(r),w=g.slice(0,_);for(let b=0;b<l;b++){let x=3*b;m[w[u[x+0]]++]=b,m[w[u[x+1]]++]=b,m[w[u[x+2]]++]=b}let y=new Float32Array(r*3);for(let b=0;b<l;b++){let x=3*b,M=c[x+0],A=c[x+1],v=c[x+2];for(let S=0;S<3;S++){let T=x+S,P=u[T],C=0,R=0,E=0;for(let L=g[P],N=g[P+1];L<N;L++){let B=3*m[L],D=c[B+0],O=c[B+1],U=c[B+2];M*D+A*O+v*U>s&&(C+=D,R+=O,E+=U)}let I=1/(Math.sqrt(C*C+R*R+E*E)||1);y[3*T+0]=C*I,y[3*T+1]=R*I,y[3*T+2]=E*I}}return t.setAttribute("normal",new gn(y,3,!1)),t}var og=!1;function sg(i){og=i}function ag(i,e,t,n,r=og){let o=r||i.detail==="low"?12:i.detail==="high"?40:24,s=i.w*e,a=i.d*t,l=i.h*n,c;if(i.shape==="profile"){let u=i.sections??[],h=u[0]?.points.length??0;if(u.length<2||h<3||u.some(_=>_.points.length!==h))return null;let d=[],f=(_,g)=>[u[_].points[g][0]*s,u[_].points[g][1]*l,u[_].at*a],p=(_,g,m)=>d.push(..._,...g,...m);for(let _=0;_<u.length-1;_++)for(let g=0;g<h;g++){let m=(g+1)%h,w=f(_,g),y=f(_,m),b=f(_+1,m),x=f(_+1,g);p(w,y,b),p(w,b,x)}for(let _ of[0,u.length-1])for(let[g,m,w]of pn(u[_].points)){let y=f(_,g),b=f(_,m),x=f(_,w);(b[0]-y[0])*(x[1]-y[1])-(b[1]-y[1])*(x[0]-y[0])>0==(_===0)?p(y,x,b):p(y,b,x)}c=new We,c.setAttribute("position",new ye(d,3))}else if(i.shape==="cyl"&&i.detail){let u=i.axis??"y",h=u==="x"?s:u==="z"?a:l,d=(u==="x"?Math.min(a,l):u==="z"?Math.min(s,l):Math.min(s,a))/2;c=new Zo(d,d,h,r?32:i.detail==="high"?64:40),u==="x"?c.rotateZ(-Math.PI/2):u==="z"&&c.rotateX(Math.PI/2),c.translate(0,l/2,0)}else if(i.shape==="polygon"){let u=i.axis??"y",h=u==="x"?a:s,d=u==="y"?a:l,f=u==="y"?l:u==="x"?s:a,p=i.points??[],g=p.reduce((w,y,b)=>{let x=p[(b+1)%p.length];return w+y[0]*x[1]-x[0]*y[1]},0)<0?p.toReversed():p,m=[];for(let[w,y,b]of pn(g)){for(let x of[w,y,b])m.push(g[x][0],0,g[x][1]);for(let x of[w,b,y])m.push(g[x][0],1,g[x][1])}for(let w=0;w<g.length;w++){let y=g[w],b=g[(w+1)%g.length];m.push(y[0],0,y[1],b[0],1,b[1],b[0],0,b[1],y[0],0,y[1],y[0],1,y[1],b[0],1,b[1])}for(let w=0;w<m.length;w+=3){let y=m[w]*h,b=m[w+1]*f,x=m[w+2]*d;u==="z"?(m[w]=y,m[w+1]=x+l/2,m[w+2]=a/2-b):u==="x"?(m[w]=b-s/2,m[w+1]=x+l/2,m[w+2]=y):(m[w]=y,m[w+1]=b,m[w+2]=x)}c=new We,c.setAttribute("position",new ye(m,3))}else if(i.shape==="sphere"||i.shape==="ellipsoid"){let u=r?32:i.detail==="high"?64:40;c=new os(.5,u,u/2);let h=Math.min(s,a,l);c.scale(i.shape==="sphere"?h:s,i.shape==="sphere"?h:l,i.shape==="sphere"?h:a),c.translate(0,l/2,0)}else if(i.shape==="rounded_box"){let u=o===12?3:o===40?8:5,h=Math.min(i.radius??.08,.49);c=new Ni(1,1,1,u,u,u);let d=c.getAttribute("position"),f=.5-h;for(let p=0;p<d.count;p++){let _=new V().fromBufferAttribute(d,p),g=_.clone().clampScalar(-f,f);_.sub(g).normalize().multiplyScalar(h).add(g),d.setXYZ(p,_.x,_.y,_.z)}c.scale(s,l,a),c.translate(0,l/2,0)}else if(i.shape==="torus"){let u=Math.min(.24,i.thickness??.06),h=r?32:i.detail==="high"?64:40;c=new ss(.5-u,u,Math.max(8,h/4),h),c.scale(s,l,a),c.translate(0,l/2,0)}else if(i.shape==="pipe"){let u=(i.path??[]).map(([y,b,x])=>new V(y*s,(b+.5)*l,x*a));if(u.length<2)return null;let h=new no(u,!1,"centripetal"),d=(i.radius??.1)*Math.min(s,a,l),f=new ro(h,Math.min(256,o*(u.length-1)),d,Math.max(8,o/2),!1),p=new ro(h,Math.min(256,o*(u.length-1)),Math.max(d*.05,d-(i.thickness??.025)*Math.min(s,a,l)),Math.max(8,o/2),!1),_=f.toNonIndexed(),g=p.toNonIndexed(),m=[..._.getAttribute("position").array],w=g.getAttribute("position").array;for(let y=0;y<w.length;y+=9)m.push(...w.slice(y,y+3),...w.slice(y+6,y+9),...w.slice(y+3,y+6));c=new We,c.setAttribute("position",new ye(m,3));for(let y of[f,p,_,g])y.dispose()}else if(i.shape==="bowl"){let u=Math.min(.2,i.thickness??.04);c=new is([new Ee(0,0),new Ee(.5,0),new Ee(.5,1),new Ee(.5-u,1),new Ee(.5-u,u),new Ee(0,u)],o),c.scale(s,l,a)}else return null;if(c.translate(i.x*e,i.y*n,i.z*t),c.computeVertexNormals(),i.crease_angle!==void 0){let u=c;c=i.crease_angle>0?rg(c,i.crease_angle*Math.PI/180):c.index?c.toNonIndexed():c,i.crease_angle===0&&c.computeVertexNormals(),c!==u&&u.dispose()}return c}var z={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},pe=Xe(5995775,.3),et=Xe(5995775,.17),Je=Xe(3662079,.45),Sr=class i{buf;lines;tf;mirrored;constructor(e,t,n){this.buf=e,this.lines=t,this.tf=n,this.mirrored=fg(n)}shape(e,t,n,r,o,s){let a=ag(e,t,n,r);if(!a)return!1;let l=a.index?a.toNonIndexed():a,c=l.getAttribute("position"),u=l.getAttribute("normal"),h=new j(s),d=p=>{let[_,g]=this.tf(c.getX(p),c.getZ(p));return[_,o+c.getY(p),g]},f=p=>h.clone().multiplyScalar(.78+.2*Math.max(0,u.getY(p))+.14*(u.getX(p)*-.55+u.getZ(p)*.83));for(let p=0;p<c.count;p+=3){let _=p+(this.mirrored?2:1),g=p+(this.mirrored?1:2);this.buf.tri(d(p),d(_),d(g),f(p),f(_),f(g))}if(e.edges){let p=new $o(a,e.crease_angle||35),_=p.getAttribute("position"),g=e.edges==="glow"?Zn:e.edges==="faint"?et:pe;for(let m=0;m<_.count;m+=2){let w=this.tf(_.getX(m),_.getZ(m)),y=this.tf(_.getX(m+1),_.getZ(m+1));this.lines.seg([w[0],o+_.getY(m),w[1]],[y[0],o+_.getY(m+1),y[1]],g)}p.dispose()}return l!==a&&l.dispose(),a.dispose(),!0}rotated(e,t,n){let r=n*pt,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(e+(l-e)*o-(c-t)*s,t+(l-e)*s+(c-t)*o))}box(e,t,n,r,o,s,a,l=a,c=null){if(t-e<1e-4||s-o<1e-4||r-n<1e-4)return;let u=[this.tf(e,o),this.tf(e,s),this.tf(t,s),this.tf(t,o)];St(this.buf,sd(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(e,t,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])],c=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])];if(l!==sd(l)&&(l.reverse(),c.reverse()),Km(this.buf,l,c,n,r,o,s),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(e,t,n,r,o,s,a,l=a,c=.03,u=null){if(c=Math.min(c,(t-e)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(e,t,n,r,o,s,a,l,u);this.loft([e+c,t-c,o+c,s-c],[e,t,o,s],n,n+c,a),r-n-2*c>.005&&this.box(e,t,n+c,r-c,o,s,a,a,u),this.loft([e,t,o,s],[e+c,t-c,o+c,s-c],r-c,r,a,l)}lyingCyl(e,t,n,r,o,s,a,l,c=l,u=12,h=null){let d=Math.min(a,o-r)/2;if(d<1e-4||s<1e-4)return;let f=(r+o)/2,p=e==="x"?t:n,_=e==="x"?n:t,g=(w,y)=>e==="x"?this.tf(w,y):this.tf(y,w),m=this.buf.p.length;if(Ym(this.buf,g,p-s/2,p+s/2,_,f,d,l,c,u),this.mirrored&&hd(this.buf,m),h)for(let w of[p-s/2,p+s/2])for(let y=0;y<u;y++){let b=y/u*Math.PI*2,x=(y+1)/u*Math.PI*2;this.line(g(w,_+Math.sin(b)*d),g(w,_+Math.sin(x)*d),f+Math.cos(b)*d,f+Math.cos(x)*d,h)}}cyl(e,t,n,r,o,s,a=s,l=10,c=null){let u=[];for(let h=0;h<l;h++){let d=h/l*Math.PI*2;u.push(this.tf(e+Math.cos(d)*n,t+Math.sin(d)*n))}if(St(this.buf,sd(u),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let h=0;h<l;h++)this.line(u[h],u[(h+1)%l],o,o,c)}seg(e,t,n,r,o,s,a=pe){this.line(this.tf(e,n),this.tf(r,s),t,o,a)}line(e,t,n,r,o){this.lines.seg([e[0],n,e[1]],[t[0],r,t[1]],o,Ze)}outline(e,t,n,r){for(let o=0;o<4;o++){let s=e[o],a=e[(o+1)%4];this.line(s,a,n,n,r),this.line(s,s,t,n,r)}}};function fg(i){let e=i(0,0),t=i(1,0),n=i(0,1);return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])<0}function sd(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}function Tr(i,e,t,n,r,o,s=z.metal,a=!1){let l=e/2-o-r,c=t/2-o-r;for(let u of[-1,1])for(let h of[-1,1]){let d=u*l,f=h*c;a?i.loft([d-r*.3,d+r*.3,f-r*.3,f+r*.3],[d-r/2,d+r/2,f-r/2,f+r/2],0,n,s):i.box(d-r/2,d+r/2,0,n,f-r/2,f+r/2,s)}}function Us(i,e,t,n,r,o,s,a=null,l=!1){let c=(t-e)/s;for(let u=1;u<s;u++){let h=e+c*u;i.seg(h,n,o,h,r,o,et)}for(let u=0;u<s;u++){let h=e+c*(u+.5),d=a??r-.08;if(l)i.seg(h-Math.min(.1,c/4),d,o+.012,h+Math.min(.1,c/4),d,o+.012,Je);else{let f=s>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(f,d-.08,o+.012,f,d+.08,o+.012,Je)}}}function lg(i,e,t,n,r){let o=-e/2,s=e/2,a=-t/2,l=t/2,c=Math.min(.2,e*.12),u=n*.5,h=Math.min(.24,t*.28);Tr(i,e,t,.07,.05,.05,z.wood,!0),i.pad(o,s,.07,u-.08,a+.02,l,z.fabric,z.fabricTop,.04,pe),i.loft([o,s,a,a+h],[o+.01,s-.01,a,a+h*.5],u-.08,n,z.fabric,z.fabricTop,pe),i.pad(o,o+c,u-.08,n*.72,a+.02,l-.02,z.fabric,z.fabricTop,.04,pe),i.pad(s-c,s,u-.08,n*.72,a+.02,l-.02,z.fabric,z.fabricTop,.04,pe);let f=(s-c-(o+c))/r;for(let p=0;p<r;p++){let _=o+c+f*p+.02,g=_+f-.04;i.pad(_,g,u-.08,u+.05,a+h+.02,l-.06,z.cushion,z.cushion,.04),i.loft([_+.01,g-.01,a+h*.55,a+h+.14],[_+.03,g-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,z.cushion)}}function cg(i,e,t,n,r){let o=-e/2,s=e/2,a=-t/2,l=t/2,c=Math.max(.3,Math.min(.95,t*.5,e*(r?.34:.45))),u=Math.min(.24,c*.28),h=Math.min(.2,c*.24),d=n*.5,f=n*.72,p=r?[-1,1]:[-1],_=(v,S)=>i.loft([v-.015,v+.015,S-.015,S+.015],[v-.025,v+.025,S-.025,S+.025],0,.07,z.wood);_(o+.06,a+.06),_(s-.06,a+.06),r||_(s-.06,a+c-.06);for(let v of p)_(v*(e/2-.06),l-.06),_(v*(e/2-c+.06),l-.06);i.pad(o,s,.07,d-.08,a+.02,a+c,z.fabric,z.fabricTop,.04,pe);for(let v of p){let[S,T]=v<0?[o+.02,o+c]:[s-c,s-.02];i.pad(S,T,.07,d-.08,a+c-.02,l,z.fabric,z.fabricTop,.04,pe)}i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],d-.08,n,z.fabric,z.fabricTop,pe);for(let v of p)v<0?i.loft([o,o+u,a+u,l],[o,o+u*.5,a+u,l-.01],d-.08,n,z.fabric,z.fabricTop,pe):i.loft([s-u,s,a+u,l],[s-u*.5,s,a+u,l-.01],d-.08,n,z.fabric,z.fabricTop,pe);for(let v of p){let[S,T]=v<0?[o+u,o+c]:[s-c,s-u];i.pad(S,T,d-.08,f,l-h,l,z.fabric,z.fabricTop,.04,pe)}r||i.pad(s-h,s,d-.08,f,a+.02,a+c-.02,z.fabric,z.fabricTop,.04,pe);let g=o+u,m=r?s-u:s-h,w=Math.max(1,Math.round((m-g)/.62)),y=(m-g)/w;for(let v=0;v<w;v++){let S=g+y*v+.02,T=S+y-.04;i.pad(S,T,d-.08,d+.05,a+u+.02,a+c-.04,z.cushion,z.cushion,.04),i.loft([S+.01,T-.01,a+u*.55,a+u+.14],[S+.03,T-.03,a+u*.4,a+u*.4+.06],d+.03,n*.93,z.cushion)}let b=a+c,x=l-h;if(x-b<.2)return;let M=Math.max(1,Math.round((x-b)/.62)),A=(x-b)/M;for(let v of p)for(let S=0;S<M;S++){let T=b+A*S+.02,P=T+A-.04;v<0?(i.pad(o+u+.02,o+c-.04,d-.08,d+.05,T,P,z.cushion,z.cushion,.04),i.loft([o+u*.55,o+u+.14,T+.01,P-.01],[o+u*.4,o+u*.4+.06,T+.03,P-.03],d+.03,n*.93,z.cushion)):(i.pad(s-c+.04,s-u-.02,d-.08,d+.05,T,P,z.cushion,z.cushion,.04),i.loft([s-u-.14,s-u*.55,T+.01,P-.01],[s-u*.4-.06,s-u*.4,T+.03,P-.03],d+.03,n*.93,z.cushion))}}function T1(i,e,t,n){let r=-t/2,o=t/2,s=-e/2,a=e/2,l=Math.min(.32,n*.36);Tr(i,e,t,.08,.06,.03,z.wood,!0),i.box(s,a,.08,l,r+.06,o,z.wood,z.woodTop,pe),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,z.white,z.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,z.wood,z.woodTop,pe),i.box(s,a,n-.05,n,r,r+.09,z.wood,z.woodTop,et);let c=l+.2,u=r+(t-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,u,o-.01,z.cushion,z.fabricTop,.025,et),i.lyingCyl("x",0,u+.05,c-.02,c+.09,e-.02,.1,z.cushion,z.fabricTop,8);let h=e>1.2?2:1,d=(e-.2)/h;for(let f=0;f<h;f++){let p=s+.1+d*f,_=r+.12,g=Math.min(.42,t*.2),m=.1;i.loft([p+.03+m,p+d-.03-m,_+m*.5,_+g-m*.5],[p+.03,p+d-.03,_,_+g],c,c+.06,z.whiteTop),i.loft([p+.03,p+d-.03,_,_+g],[p+.03+m,p+d-.03-m,_+m*.5,_+g-m*.5],c+.06,c+.12,z.whiteTop,z.whiteTop,et)}}function A1(i,e,t,n){let r=Math.min(.46,n*.52);Tr(i,e,t,r-.04,.035,.02,z.wood,!0),i.box(-e/2,e/2,r-.04,r,-t/2,t/2,z.wood,z.woodTop,pe),i.pad(-e/2+.02,e/2-.02,r,r+.04,-t/2+.05,t/2-.03,z.cushion,z.cushion,.015),i.loft([-e/2,e/2,-t/2+.02,-t/2+.07],[-e/2+.02,e/2-.02,-t/2,-t/2+.03],r,n,z.wood,z.woodTop,pe)}function E1(i,e,t,n){Tr(i,e,t,n-.04,.06,.05,z.wood,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,z.wood,z.woodTop,Je),i.box(-e/2+.08,e/2-.08,n-.1,n-.04,-t/2+.08,t/2-.08,z.body)}function R1(i,e,t,n){let r=-e/2,o=e/2;i.box(r,o,n-.035,n,-t/2,t/2,z.wood,z.woodTop,pe),i.box(r,r+.03,0,n-.035,-t/2+.03,t/2-.03,z.metal);let s=Math.min(.42,e*.32);i.box(o-s,o,0,n-.035,-t/2+.03,t/2-.02,z.body,z.bodyTop,pe);let a=t/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,et);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,Je);i.box(-.3,.3,n+.08,n+.42,-t/2+.08,-t/2+.11,z.dark,z.dark,Je),i.box(-.03,.03,n,n+.1,-t/2+.09,-t/2+.13,z.metal)}function ji(i,e,t,n,r,o=null,s=!1){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,z.body,z.bodyTop,pe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,z.dark),Us(i,-e/2,e/2,.08,n,t/2-.02,r,o,s)}function P1(i,e,t,n){i.box(-e/2,-e/2+.025,0,n,-t/2,t/2,z.wood,z.woodTop,pe),i.box(e/2-.025,e/2,0,n,-t/2,t/2,z.wood,z.woodTop,pe),i.box(-e/2+.025,e/2-.025,0,n,-t/2,-t/2+.015,z.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-e/2+.025,e/2-.025,a,a+.025,-t/2+.015,t/2,z.wood,z.woodTop,et),s<o){let l=-e/2+.025+.04,c=s*3;for(;l<e/2-.025-.12;){let u=.03+c*7%5*.008,h=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+h,-t/2+.04,t/2-.05,c%3?z.fabric:z.cushion,z.fabricTop),l+=u+.006,c++}}}}function k1(i,e,t,n){let r=Math.max(1,Math.round(e/.6));ji(i,e,t-.02,n-.04,r,n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,z.whiteTop,z.whiteTop,pe)}function C1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,z.white,z.whiteTop,pe);let r=n*.62;i.seg(-e/2,r,t/2,e/2,r,t/2,et);let o=e/2-.06;i.seg(o,r+.08,t/2+.015,o,r+.4,t/2+.015,Je),i.seg(o,r-.4,t/2+.015,o,r-.08,t/2+.015,Je)}function I1(i,e,t,n){let r=t/2-pg;i.box(-e/2,e/2,.02,n,-t/2,r,z.body,z.bodyTop,pe),i.box(-e/2+.05,e/2-.05,0,.02,-t/2+.05,r-.05,z.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-e/2+.03,o,r+.001,-.03,o,r+.001,et),i.seg(.03,o,r+.001,e/2-.03,o,r+.001,et))}var pg=.06;function mg(i,e,t,n,r){let o=i.p.length;L1(i,e,t,n,r),e.mirror&&hd(i,o),In(i.p,o,e,t+e.h/2)}function L1(i,e,t,n,r){let o=e.rotation*pt,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(b,x)=>[e.x+l*b*s-x*a,e.z+l*b*a+x*s],u=t+.05,h=t+e.h-.02,d=new j(.75,.1,.14),f=new j(z.dark),p=new j(z.accent),_=e.w/2-.006,g=(b,x,M)=>{let A=M/m,v=new j(2043212).lerp(d,A),S=new j(z.body).lerp(d,A*.8),T=Math.cos(M),P=Math.sin(M),C=(I,L)=>c(b+x*(I*T-L*P),e.d/2+I*P+L*T),R=(I,L,N,B)=>{let[D,O,U,Z]=I;i.tri([D[0],L,D[1]],[O[0],L,O[1]],[U[0],N,U[1]],B),i.tri([D[0],L,D[1]],[U[0],N,U[1]],[Z[0],N,Z[1]],B)},E=(I,L,N,B,D,O,U,Z=U)=>{let q=[C(I,O),C(L,O),C(L,D),C(I,D)];R([q[0],q[1],q[1],q[0]],N,B,Z),R([q[3],q[2],q[2],q[3]],N,B,U),R([q[0],q[3],q[3],q[0]],N,B,U),R([q[1],q[2],q[2],q[1]],N,B,U),R([q[0],q[1],q[2],q[3]],B,B,U),R([q[3],q[2],q[1],q[0]],N,N,U)};return E(0,_,u,h,-pg,0,S,v),E(_-.05,_-.03,t+e.h*.45,t+e.h*.75,.005,.025,p),E},m=1.83;g(-e.w/2,1,n*m)(.12,.3,t+e.h*.5,t+e.h*.68,.001,.005,f),g(e.w/2,-1,r*m)(.06,_-.06,t+e.h*.52,t+e.h*.86,.001,.005,f)}function F1(i,e,t,n){ji(i,e,t-.02,n-.04,1,n-.24,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,z.dark,z.dark,pe);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*e/.6,l=o*t/.62;i.cyl(a,l,s,n,n+.004,z.dark,1451583,12,Je)}}function D1(i,e,t,n){ji(i,e,t-.02,n-.04,Math.max(1,Math.round(e/.45)),n-.2);let r=Math.min(.5,e-.2);i.box(-e/2,-r/2,n-.04,n,-t/2,t/2,z.whiteTop,z.whiteTop,pe),i.box(r/2,e/2,n-.04,n,-t/2,t/2,z.whiteTop,z.whiteTop,pe),i.box(-r/2,r/2,n-.04,n,-t/2,-t/2+.1,z.whiteTop,z.whiteTop),i.box(-r/2,r/2,n-.04,n,t/2-.08,t/2,z.whiteTop,z.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-t/2+.1,t/2-.08,z.metal,z.metal,Je),i.cyl(0,-t/2+.05,.02,n,n+.28,z.metal,z.metal,8),i.box(-.015,.015,n+.24,n+.28,-t/2+.05,-t/2+.22,z.metal)}function z1(i,e,t,n){i.box(-e/2,e/2,0,n-.02,-t/2,t/2,z.white,z.whiteTop,pe),i.box(-e/2,e/2,n-.02,n,-t/2,-t/2+.07,z.whiteTop),i.box(-e/2,e/2,n-.02,n,t/2-.07,t/2,z.whiteTop),i.box(-e/2,-e/2+.07,n-.02,n,-t/2+.07,t/2-.07,z.whiteTop),i.box(e/2-.07,e/2,n-.02,n,-t/2+.07,t/2-.07,z.whiteTop),i.box(-e/2+.07,e/2-.07,n-.03,n-.02,-t/2+.07,t/2-.07,z.glass,z.glass,Je),i.cyl(-e/2+.04,0,.02,n,n+.12,z.metal,z.metal,8)}function N1(i,e,t,n){i.box(-e/2,e/2,0,.05,-t/2,t/2,z.whiteTop,z.whiteTop,pe),i.cyl(0,0,.04,.05,.052,z.metal,z.metal,8);for(let[r,o,s,a]of[[-e/2,t/2,e/2,t/2],[e/2,-t/2,e/2,t/2]])i.seg(r,.05,o,s,.05,a,Je),i.seg(r,n,o,s,n,a,Je),i.seg(s,.05,a,s,n,a,Je);i.cyl(-e/2+.06,-t/2+.06,.015,.05,n-.05,z.metal,z.metal,6),i.cyl(-e/2+.2,-t/2+.2,.1,n-.08,n-.06,z.metal,z.metal,12,Je)}function B1(i,e,t,n){let r=Math.min(.18,t*.3);i.box(-e/2,e/2,.45,n,-t/2,-t/2+r,z.white,z.whiteTop,pe),i.box(-e*.3,e*.3,0,.36,-t/2+r-.02,t/2-.12,z.white,z.whiteTop),i.cyl(0,t/2-.26,Math.min(e/2,.19),.36,.41,z.white,z.whiteTop,12,pe),i.box(-e/2+.02,e/2-.02,.41,.43,-t/2+r,-t/2+r+.05,z.whiteTop)}function O1(i,e,t,n){ji(i,e,t-.02,n-.12,e>.8?2:1,n-.3),i.box(-e/2,e/2,n-.12,n,-t/2,t/2,z.white,z.whiteTop,pe),i.box(-e/2+.07,e/2-.07,n-.005,n,-t/2+.12,t/2-.06,z.glass,z.glass,Je),i.cyl(0,-t/2+.06,.018,n,n+.2,z.metal,z.metal,8),i.box(-e/2+.04,e/2-.04,n+.35,n+1,-t/2,-t/2+.02,z.glass,z.glass,Je)}function U1(i,e,t,n){ji(i,e,t,n,Math.max(2,Math.round(e/.6)),n*.55,!0);let r=Math.min(e*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-t/2+.08,-t/2+.24,z.metal),i.box(-.02,.02,n+.02,n+.12,-t/2+.14,-t/2+.18,z.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-t/2+.12,-t/2+.16,z.dark,z.dark,Je)}function V1(i,e,t,n){let r=Math.min(e,t)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,z.pot,z.pot,10,pe),i.cyl(0,0,r*.08,o,n*.55,z.wood,z.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),u=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-o)*.16,z.plant,z.plantTop,8,a===s-1?et:null)}}function G1(i,e,t){i.box(-e/2,e/2,0,.012,-t/2,t/2,z.fabric,z.fabricTop);let n=Math.min(.12,Math.min(e,t)*.08);for(let[r,o,s,a]of[[-e/2+n,-t/2+n,e/2-n,-t/2+n],[e/2-n,-t/2+n,e/2-n,t/2-n],[e/2-n,t/2-n,-e/2+n,t/2-n],[-e/2+n,t/2-n,-e/2+n,-t/2+n]])i.seg(r,.014,o,s,.014,a,pe)}function H1(i,e,t,n){let r=Math.max(3,Math.round(n/.18)),o=n/r,s=t/r;for(let u=0;u<r;u++){let h=t/2-s*u,d=h-s,f=o*(u+1);i.box(-e/2,e/2,0,f,d,h,z.wood,z.woodTop),i.seg(-e/2,f,h,e/2,f,h,pe)}i.seg(-e/2,0,t/2,-e/2,o,t/2,pe);for(let u of[-e/2,e/2])i.seg(u,o,t/2,u,n,-t/2+s,et);let a=.9,l=e/2-.03,c=Math.max(1,r-4);i.seg(l,o+a,t/2-s/2,l,o*c+a,t/2-s*(c-.5),Je);for(let u=0;u<c;u+=3){let h=t/2-s*(u+.5),d=o*(u+1);i.seg(l,d,h,l,d+a,h,et)}}function W1(i,e,t,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:u}=Mm(e,t,n),h=-e/2,d=-e/2+a,f=e/2-a,p=e/2,_=-t/2+l;for(let A=0;A<o;A++){let v=t/2-c*A,S=u*(A+1);i.box(h,d,0,S,v-c,v,z.wood,z.woodTop),i.seg(h,S,v,d,S,v,pe)}i.seg(h,0,t/2,h,u,t/2,pe);let g=u*r,m=.2;i.box(h,d,0,g,-t/2,_,z.wood,z.woodTop),i.box(d,p,Math.max(0,g-m),g,-t/2,_,z.wood,z.woodTop),i.seg(h,g,_,d,g,_,pe);for(let A=0;A<s;A++){let v=_+c*A,S=u*(r+1+A);i.box(f,p,Math.max(0,S-u-m),S,v,v+c,z.wood,z.woodTop),i.seg(f,S,v,p,S,v,pe)}i.seg(h,u,t/2,h,g,_,et),i.seg(p,g,_,p,n,_+c*(s-1),et);let w=.9,y=d-.03,b=f+.03,x=_-.03,M=Math.max(1,s-4);i.seg(y,u+w,t/2-c/2,y,g+w,x,Je),i.seg(y,g+w,x,b,g+w,x,Je),i.seg(b,g+w,x,b,u*(r+M)+w,_+c*(M-.5),Je);for(let A=0;A<o;A+=3){let v=t/2-c*(A+.5);i.seg(y,u*(A+1),v,y,u*(A+1)+w,v,et)}for(let A of[y,b])i.seg(A,g,x,A,g+w,x,et);for(let A=2;A<M;A+=3){let v=_+c*(A+.5);i.seg(b,u*(r+1+A),v,b,u*(r+1+A)+w,v,et)}}function X1(i,e,t,n){Tr(i,e,t,.12,.03,.04,z.metal),i.box(-e/2,e/2,.12,n,-t/2,t/2-.02,z.wood,z.woodTop,pe),Us(i,-e/2,e/2,.12,n,t/2-.02,Math.max(2,Math.round(e/.45)),n-.1,!0)}function K1(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2-.02,z.wood,z.woodTop,pe),i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.06,z.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=t/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-e/2,a,o,e/2,a,o,et)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,Je)}}function Y1(i,e,t,n){i.box(-e/2,e/2,0,.45,-t/2,t/2,z.wood,z.woodTop,pe),Us(i,-e/2,e/2,.02,.45,t/2,Math.max(2,Math.round(e/.5)),.38,!0),i.box(-e/2,e/2,.45,n,-t/2,-t/2+.03,z.body,z.bodyTop,pe),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,z.wood,z.woodTop,pe);let r=Math.max(2,Math.round(e/.25));for(let o=0;o<r;o++){let s=-e/2+e/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-t/2+.03,-t/2+.1,z.metal,z.metal)}}function ug(i,e,t,n,r){let s=Math.min(.5,r?t*.4:t),a=.08;i.box(-e/2,e/2,0,.45-.06,-t/2,-t/2+s,z.wood,z.woodTop,pe),i.box(-e/2,e/2,0,n,-t/2,-t/2+a,z.wood,z.woodTop,pe),i.box(-e/2+(r?s:.02),e/2-.02,.45-.06,.45+.02,-t/2+a,-t/2+s,z.cushion,z.cushion,et),r&&(i.box(-e/2,-e/2+s,0,.45-.06,-t/2+s,t/2,z.wood,z.woodTop,pe),i.box(-e/2,-e/2+a,0,n,-t/2+a,t/2,z.wood,z.woodTop,pe),i.box(-e/2+a,-e/2+s,.45-.06,.45+.02,-t/2+a,t/2-.02,z.cushion,z.cushion,et))}function q1(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.8,0,.02,z.metal,z.metal,12),i.cyl(0,0,.025,.02,n-.05,z.metal,z.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,z.metal,z.metal,12,et),i.cyl(0,0,r,n-.05,n,z.cushion,z.fabricTop,14,pe)}function Z1(i,e,t,n){let r=Math.min(e,t)/2;i.box(-r,r,.04,.08,-.03,.03,z.metal),i.box(-.03,.03,.04,.08,-r,r,z.metal),i.cyl(0,0,.06,.02,.1,z.dark,z.dark,8),i.cyl(0,0,.025,.1,.44,z.metal,z.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,z.fabric,z.cushion,pe),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,z.fabric,z.fabricTop,pe),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,z.metal)}function $1(i,e,t,n){Tr(i,e,t,.08,.04,.05,z.wood),i.box(-e/2,e/2,.08,n,-t/2,t/2,z.fabric,z.cushion,pe)}function J1(i,e,t,n){i.box(-e/2,e/2,1.45,1.45+n,-t/2,t/2-.02,z.body,z.bodyTop,pe),Us(i,-e/2,e/2,1.45,1.45+n,t/2-.02,Math.max(1,Math.round(e/.5)),1.45+.08)}function j1(i,e,t,n){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,z.body,z.bodyTop,pe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,z.dark);let r=t/2-.02;i.box(-e/2+.03,e/2-.03,.85,1.45,r,r+.01,z.dark,z.dark,Je),i.seg(-e/2+.08,1.4,r+.02,e/2-.08,1.4,r+.02,Je);for(let o of[.85,1.45])i.seg(-e/2,o,r,e/2,o,r,et);i.seg(e/2-.06,.5,r+.012,e/2-.06,.7,r+.012,Je),i.seg(e/2-.06,1.6,r+.012,e/2-.06,1.8,r+.012,Je)}function Q1(i,e,t,n){let r=t-.3;i.box(-e/2+.05,e/2-.05,.08,n-.04,-t/2+.02,-t/2+r,z.body,z.bodyTop,pe),i.box(-e/2+.07,e/2-.07,0,.08,-t/2+.04,-t/2+r-.04,z.dark),Us(i,-e/2+.05,e/2-.05,.08,n-.04,-t/2+r,Math.max(2,Math.round(e/.6)),n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,z.whiteTop,z.whiteTop,pe)}function eM(i,e,t,n){i.box(-e/2,e/2,.02,n-.04,-t/2,t/2-.02,z.body,z.bodyTop,pe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,z.dark),i.seg(-e/2+.08,n-.12,t/2-.008,e/2-.08,n-.12,t/2-.008,Je),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,z.whiteTop,z.whiteTop,pe)}function hg(i,e,t,n,r){i.box(-e/2,e/2,0,n,-t/2,t/2-.02,z.white,z.whiteTop,pe);let o=t/2-.012;i.seg(-e/2,n-.14,o,e/2,n-.14,o,et),i.seg(e/2-.16,n-.07,o,e/2-.08,n-.07,o,Je);let s=(n-.14)/2+.04,a=Math.min(e*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,s+Math.sin(u)*a,o,Math.cos(h)*a,s+Math.sin(h)*a,o,Je),r||i.seg(Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,Math.cos(h)*a*.72,s+Math.sin(h)*a*.72,o,et)}}function tM(i,e,t,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(e/2)-(s>0?.05:0),s*(e/2)+(s<0?.05:0),0,n,a*(t/2)-(a>0?.05:0),a*(t/2)+(a<0?.05:0),z.wood,z.woodTop);for(let s of[.25,n-.55])i.box(-e/2,e/2,s,s+.08,-t/2,t/2,z.wood,z.woodTop,pe),i.box(-e/2+.04,e/2-.04,s+.08,s+.24,-t/2+.05,t/2-.05,z.white,z.whiteTop,et),i.box(-e/2+.05,e/2-.05,s+.24,s+.33,-t/2+.08,-t/2+.4,z.whiteTop,z.whiteTop);i.box(-e/2,e/2,n-.2,n-.15,t/2-.05,t/2,z.wood,z.woodTop);let o=e/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,t/2+.02,s,n-.15,t/2+.02,pe);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,t/2+.02,o+.18,s,t/2+.02,et)}function nM(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.4,0,.03,z.metal,z.metal,12),i.cyl(0,0,.05,.03,n-.04,z.wood,z.wood,8),i.cyl(0,0,r,n-.04,n,z.wood,z.woodTop,20,pe)}function iM(i,e,t,n){Tr(i,e,t,n-.03,.04,.03,z.wood),i.box(-e/2,e/2,n-.03,n,-t/2,t/2,z.wood,z.woodTop,pe),i.box(-e/2+.05,e/2-.05,.1,.13,-t/2+.05,t/2-.05,z.body,z.bodyTop,et)}function rM(i,e,t,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-t/2,-t/2+.03,z.metal),i.box(-e/2,e/2,r,r+n,-t/2+.03,t/2,z.dark,z.dark,Je)}function oM(i,e,t,n){let r=ld;i.box(-e/2+.05,-e/2+.08,0,r,-t/2,-t/2+.03,z.metal),i.box(e/2-.08,e/2-.05,0,r,-t/2,-t/2+.03,z.metal),i.box(-e/2,e/2,r,r+n,-t/2+.02,t/2,z.white,z.whiteTop,pe);let o=Math.max(3,Math.round(e/.1));for(let s=1;s<o;s++){let a=-e/2+e/o*s;i.seg(a,r+.03,t/2+.002,a,r+n-.03,t/2+.002,et)}}function sM(i,e,t,n){let r=cd;i.box(-e/2,e/2,r+.07,r+n,-t/2,t/2,z.white,z.whiteTop,pe),i.box(-e/2,e/2,r,r+.07,-t/2,t/2-.05,z.white,z.white,pe),i.box(-e/2+.04,e/2-.04,r+.012,r+.06,t/2-.05,t/2-.02,z.dark),i.seg(-e/2+.03,r+n*.55,t/2+.002,e/2-.03,r+n*.55,t/2+.002,et),i.seg(e/2-.14,r+n*.75,t/2+.002,e/2-.07,r+n*.75,t/2+.002,Je)}function Mo(i,e,t,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,r,e+Math.cos(l)*n,t+Math.sin(l)*n,r,Je)}}function aM(i,e,t,n,r){let s=t/2;if(r==="slim"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,z.dark,z.body,pe),i.seg(-e*.25,1.1+n*.15,s+.004,-e*.25,1.1+n*.85,s+.004,Je),i.box(-e*.1,e*.3,1.1+n*.7,1.1+n*.85,s,s+.005,z.dark);return}if(r==="hybrid"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,z.white,z.whiteTop,pe),Mo(i,0,1.1+n*.66,Math.min(e,n)*.22,s+.004),i.seg(-e*.08,1.1+n*.66,s+.005,e*.08,1.1+n*.66,s+.005,Je);for(let a of[-1,1])Mo(i,a*e*.22,1.1+n*.2,Math.min(e,n)*.1,-t/2-.002,12);return}i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,z.white,z.whiteTop,pe),i.box(-e*.28,e*.28,1.1+n*.58,1.1+n*.82,t/2,t/2+.006,z.dark),i.seg(-e*.3,1.1+n*.45,t/2+.004,e*.3,1.1+n*.45,t/2+.004,Je);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*e/2+a*.002,1.1+n*l/6,-t/2+.03,a*e/2+a*.002,1.1+n*l/6,t/2-.03,et)}function lM(i,e,t,n){let r=Math.min(t,n)*.32;i.box(-e/2,e/2,0,.03,-t/2,t/2,z.dark),i.box(-e/2,e*.1,.05,.05+r*2,-r,r,z.metal,z.metal,pe);for(let s of[-e*.4,-e*.25,-e*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,et);i.cyl(e*.28,0,Math.min(e*.2,t*.45),.03,n*.82,z.dark,z.body,14,pe),i.cyl(e*.28,0,Math.min(e*.2,t*.45)*.9,n*.82,n,z.glass,z.glass,14);let o=Math.min(e*.2,t*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(e*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,e*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,Je)}}function cM(i,e,t,n,r){let o=Math.min(e,t)/2;if(i.cyl(0,0,o*.95,0,n*.08,z.dark,z.dark,16),i.cyl(0,0,o,n*.08,n*.78,z.dark,z.body,18,pe),i.cyl(0,0,o*.75,n*.78,n*.84,z.dark,z.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,z.dark,z.metal,pe),Mo(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,z.dark,z.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,z.dark,z.metal,16,pe);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,Je)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,z.dark,z.body)}function uM(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2,z.white,z.whiteTop,pe);for(let a of[-e*.4,e*.4])i.box(a-.03,a+.03,0,.06,-t/2+.02,t/2-.02,z.dark);let r=Math.min(n*.38,e*.3),o=-e*.15,s=n*.53;Mo(i,o,s,r,t/2+.004,24),Mo(i,o,s,r*.55,t/2+.004,16),i.seg(o-r,s,t/2+.005,o+r,s,t/2+.005,et),i.seg(o,s-r,t/2+.005,o,s+r,t/2+.005,et),i.box(e*.22,e*.42,n*.62,n*.8,t/2,t/2+.006,z.dark),i.seg(e*.25,n*.71,t/2+.008,e*.39,n*.71,t/2+.008,Je);for(let a=1;a<8;a++)i.seg(e/2+.002,n*(.1+a*.1),-t/2+.03,e/2+.002,n*(.1+a*.1),t/2-.03,et)}function hM(i,e,t,n){i.box(-e/2,e/2,.9,.9+n*.45,-t/2,t/2,z.white,z.whiteTop,pe);for(let o of[-1,1])Mo(i,o*e*.22,.9+n*.22,Math.min(e,n)*.09,t/2+.004,12);i.seg(-e*.35,.9+n*.4,t/2+.004,e*.35,.9+n*.4,t/2+.004,Je);for(let o of[-1,1])i.box(o*e*.25-e*.18,o*e*.25+e*.18,0,n*.5,-t/2,t/2,z.white,z.glass,et)}function dM(i,e,t,n){let r=xm-n*.4;i.box(-e/2,e/2,r+n*.25,r+n*.6,-t*.25,t*.25,z.metal,z.metal,pe),i.box(-e*.12,e*.12,r+n*.6,r+n*.8,-t*.12,t*.12,z.dark),i.box(-e*.1,e*.45,r+n*.8,r+n,-t*.15,t*.15,z.accent,z.accent)}function fM(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,z.dark,z.body,pe),i.box(-e/2-.01,e/2+.01,n,n+.03,-t/2-.01,t/2+.01,z.dark,z.body),i.seg(-e/2,n+.032,t/2+.01,e/2,n+.032,t/2+.01,Je),i.seg(-e*.3,n*.55,t/2+.003,e*.3,n*.55,t/2+.003,et)}function pM(i,e,t,n){i.box(-e/2,e/2,1,1+n,-t/2,t/2,z.dark,z.body,pe);let o=Math.min(e,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,t/2+.003,Math.cos(u)*o,s+Math.sin(u)*o,t/2+.003,Je)}i.box(-.015,.015,1-.35,1,t/2-.03,t/2,z.dark),i.box(-.06,.06,1-.42,1-.35,t/2-.05,t/2,z.dark,z.body)}function mM(i,e,t,n){i.box(-e/2,e/2,.4,.4+n,-t/2,t/2,z.white,z.whiteTop,pe),i.seg(-e/2+.025,.4+.025,t/2+.003,-e/2+.025,.4+n-.025,t/2+.003,et),i.seg(-e/2+.025,.4+n-.025,t/2+.003,e/2-.025,.4+n-.025,t/2+.003,et),i.box(e/2-.06,e/2-.035,.4+n*.5-.05,.4+n*.5+.05,t/2,t/2+.012,z.dark),i.box(-e*.3,e*.3,.4+n*.6,.4+n*.8,t/2,t/2+.005,z.dark),i.seg(-e*.22,.4+n*.7,t/2+.008,e*.22,.4+n*.7,t/2+.008,Je)}function gM(i,e,t,n,r){if(r==="wall"){i.box(-e/2,e/2,.5,.5+n,-t/2,t/2,z.white,z.whiteTop,pe),i.seg(-e*.3,.5+n*.9,t/2+.004,e*.3,.5+n*.9,t/2+.004,Je),i.seg(-e*.3,.5+n*.08,t/2+.003,e*.3,.5+n*.08,t/2+.003,et);return}if(r==="cube"){i.box(-e/2+.01,e/2-.01,0,.03,-t/2+.01,t/2-.01,z.dark),i.box(-e/2,e/2,.03,n,-t/2,t/2,z.dark,z.body,pe),i.seg(-e*.35,n*.85,t/2+.004,e*.35,n*.85,t/2+.004,Je),i.box(-e*.15,e*.15,n,n+.025,-.012,.012,z.dark);return}i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.02,z.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-e/2,e/2,.06+a*s+.004,.06+(a+1)*s,-t/2,t/2,z.white,z.whiteTop,pe);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-e*.04,l,t/2+.003,e*.04,l,t/2+.003,Je)}}var ld=.12,cd=2.05;function ud(i,e){let t=_M(i,e);return t&&i.mirror?{...t,x0:-t.x1,x1:-t.x0}:t}function _M(i,e){let t=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=Wh(i.type);if(o){let l=e?Ct(e,i):0,c=(o.x-o.w/2)*t,u=(o.x+o.w/2)*t,h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+o.y*r+h,y1:l+(o.y+o.h)*r-h,z:(o.z+o.d/2)*n}}let s=e&&i.type!=="fridge_smart"?Ct(e,i)-As(i):0,a=bM(i,t,n,r,e);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function bM(i,e,t,n,r){if(i.type==="pool_pump"){let o=Math.min(t,n)*.32;return{x0:-e/2+.03,x1:e*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-e/2+.05,x1:e*.15,y0:n*.15,y1:n*.9,z:t/2+.003};if(i.type==="pool_filter"){let o=Math.min(e,t)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-e*.4,x1:e*.4,y0:.9+n*.05,y1:.9+n*.4,z:t/2+.003};if(i.type==="tv_board"){let o=Math.min(e*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-t/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-e/2+.02,x1:e/2-.02,y0:o+.02,y1:o+n-.02,z:t/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-t/2+.115};if(i.type==="fridge_smart"){let o=r?Ct(r,i):0;return{x0:.06,x1:e/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:t/2+.006}}if(i.type==="radiator")return{x0:-e/2+.02,x1:e/2-.02,y0:ld+.02,y1:ld+n-.02,z:t/2+.004};if(i.type==="ac_unit")return{x0:-e/2+.05,x1:e/2-.05,y0:cd+.015,y1:cd+.06,z:t/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(e*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:t/2-.004}}return i.type==="dishwasher"?{x0:-e/2+.06,x1:e/2-.06,y0:n-.16,y1:n-.08,z:t/2-.004}:null}function vM(i,e,t,n,r){let o=Math.min(.14,Math.max(.06,Math.min(t,n)*.15)),s=new j(1-r,1-r,1-r),a=new j(1,1,1),l=.003,c=[e(-t/2,-n/2),e(t/2,-n/2),e(t/2,n/2),e(-t/2,n/2)],u=[e(-t/2-o,-n/2-o),e(t/2+o,-n/2-o),e(t/2+o,n/2+o),e(-t/2-o,n/2+o)],h=f=>[f[0],l,f[1]],d=i.p.length;i.tri(h(c[0]),h(c[1]),h(c[2]),s),i.tri(h(c[0]),h(c[2]),h(c[3]),s);for(let f=0;f<4;f++){let p=(f+1)%4;i.tri(h(c[f]),h(u[f]),h(u[p]),s,a,a),i.tri(h(c[f]),h(u[p]),h(c[p]),s,a,s)}fg(e)&&hd(i,d)}function Fc(i,e,t,n,r=0){let o=i.p.length,s=e.p.length;xM(i,e,n.rotation_x||n.rotation_z?new je:t,n,r),In(i.p,o,n,r+n.h/2),In(e.p,s,n,r+n.h/2)}function hd(i,e){let t=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=e;n<i.p.length;n+=9){let r=n/9;t(i.p,n,3),t(i.c,n,3),t(i.f,r*3,1),t(i.uv,r*6,2),t(i.tile,r*6,2)}}function xM(i,e,t,n,r){let o=_t(n.type)?0:r-As(n);if(_t(n.type)||Math.abs(o)<.001)return dg(i,e,t,n,r);let s=i.p.length,a=e.p.length;dg(i,e,r<.05?t:new je,n,0);for(let l=s+1;l<i.p.length;l+=3)i.p[l]+=o;for(let l=a+1;l<e.p.length;l+=3)e.p[l]+=o}function dg(i,e,t,n,r){let o=n.rotation*pt,s=Math.cos(o),a=Math.sin(o),l=n.mirror?-1:1,c=(p,_)=>[n.x+l*p*s-_*a,n.z+l*p*a+_*s],u=new Sr(i,e,c),h=Math.max(.05,n.w),d=Math.max(.05,n.d),f=Math.max(.005,n.h);switch(n.type){case"sofa":lg(u,h,d,f,Math.max(1,Math.round((h-.4)/.62)));break;case"armchair":lg(u,h,d,f,1);break;case"sofa_l":cg(u,h,d,f,!1);break;case"sofa_u":cg(u,h,d,f,!0);break;case"bed":T1(u,h,d,f);break;case"chair":A1(u,h,d,f);break;case"table":E1(u,h,d,f);break;case"desk":R1(u,h,d,f);break;case"nightstand":ji(u,h,d,f,1,f*.72,!0),u.seg(-h/2,f*.5,d/2-.02,h/2,f*.5,d/2-.02,et);break;case"wardrobe":ji(u,h,d,f,Math.max(2,Math.round(h/.5)),f*.5);break;case"shelf":P1(u,h,d,f);break;case"kitchen":k1(u,h,d,f);break;case"fridge":C1(u,h,d,f);break;case"fridge_smart":I1(u,h,d,f);break;case"stove":F1(u,h,d,f);break;case"sink":D1(u,h,d,f);break;case"bathtub":z1(u,h,d,f);break;case"shower":N1(u,h,d,f);break;case"wc":B1(u,h,d,f);break;case"washbasin":O1(u,h,d,f);break;case"tv_board":U1(u,h,d,f);break;case"plant":V1(u,h,d,f);break;case"rug":G1(u,h,d);return;case"stairs":H1(u,h,d,f);break;case"stairs_u":W1(u,h,d,f);break;case"stairwell":return;case"sideboard":X1(u,h,d,f);break;case"dresser":K1(u,h,d,f);break;case"tall_cabinet":ji(u,h,d,f,1,f*.5);break;case"coat_rack":Y1(u,h,d,f);break;case"bench":ug(u,h,d,f,!1);break;case"corner_bench":ug(u,h,d,f,!0);break;case"bar_stool":q1(u,h,d,f);break;case"office_chair":Z1(u,h,d,f);break;case"stool":$1(u,h,d,f);break;case"kitchen_wall":J1(u,h,d,f);return;case"kitchen_tall":j1(u,h,d,f);break;case"island":Q1(u,h,d,f);break;case"worktop":u.box(-h/2,h/2,Math.max(0,f-.04),f,-d/2,d/2,z.whiteTop,z.whiteTop,pe);return;case"dishwasher":eM(u,h,d,f);break;case"washer":hg(u,h,d,f,!1);break;case"dryer":hg(u,h,d,f,!0);break;case"bunk_bed":tM(u,h,d,f);break;case"table_round":nM(u,h,d,f);break;case"coffee_table":iM(u,h,d,f);break;case"tv_wall":rM(u,h,d,f);return;case"parking":{let _=[[-h/2,-d/2],[h/2,-d/2],[h/2,d/2],[-h/2,d/2]];for(let g=0;g<4;g++)u.seg(_[g][0],.012,_[g][1],_[(g+1)%4][0],.012,_[(g+1)%4][1],et);u.seg(-h*.15,.012,d/2-.45,0,.012,d/2-.2,pe),u.seg(0,.012,d/2-.2,h*.15,.012,d/2-.45,pe);return}case"robot_vacuum":u.box(-h*.45,h*.45,0,f,-d/2,-d/2+d*.3,z.white,z.whiteTop,pe),u.box(-h*.2,h*.2,f*.5,f*.62,-d/2+d*.3,-d/2+d*.31,z.accent);return;case"radiator":oM(u,h,d,f);return;case"ac_unit":sM(u,h,d,f);return;case"inverter":aM(u,h,d,f,n.variant??null);return;case"grid_point":fM(u,h,d,f);break;case"wallbox":pM(u,h,d,f);return;case"pool_pump":lM(u,h,d,f);break;case"pool_filter":cM(u,h,d,f,n.variant??null);break;case"pool_heat_pump":uM(u,h,d,f);break;case"pool_dosing":hM(u,h,d,f);break;case"pool_valve":dM(u,h,d,f);return;case"meter":mM(u,h,d,f);return;case"home_battery":if(gM(u,h,d,f,n.variant??null),n.variant==="wall")return;break;default:{let p=vr(n);if(p){if(Dc(u,p,h,d,f,r,null),r>.05)return}else u.box(-h/2,h/2,0,f,-d/2,d/2,z.body,z.bodyTop,pe)}}vM(t,c,h,d,n.type==="plant"?.35:.5)}function ad(i,e){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let t=z;return(e?t[`${i}Top`]:void 0)??t[i]??null}function Dc(i,e,t,n,r,o,s,a=null,l=!1){let c=!!a,u=new Set([...e.motions??[],...e.spots??[]].flatMap(h=>h.parts));for(let h of e.parts){if(!l&&(h.visible===!1||h.status||h.id&&u.has(h.id))||a&&!a(h))continue;let d=c?{...h,glow:!0,w:h.w+.006/t,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,f=d.glow&&s!==null,p=f?s:ad(d.color,!1)??z.body,_=f?s:ad(d.top,!1)??ad(d.color,!0)??Xe(p,1.25).getHex(),g=o+d.y*r,m=o+Math.min(r,(d.y+d.h)*r),w=d.edges==="glow"?Zn:d.edges==="faint"?et:d.edges?pe:null,y=d.rot?i.rotated(d.x*t,d.z*n,d.rot):i;if(!y.shape(d,t,n,r,o,p))if(d.shape==="cyl"&&(d.axis==="x"||d.axis==="z"))y.lyingCyl(d.axis,d.x*t,d.z*n,g,m,d.axis==="x"?d.w*t:d.d*n,d.axis==="x"?d.d*n:d.w*t,p,_,14,w);else if(d.shape==="cyl")y.cyl(d.x*t,d.z*n,Math.min(d.w*t,d.d*n)/2,g,m,p,_,14,w);else if(d.shape==="loft"){let b=d.tx??d.x,x=d.tz??d.z,M=d.tw??d.w,A=d.td??d.d;y.loft([(d.x-d.w/2)*t,(d.x+d.w/2)*t,(d.z-d.d/2)*n,(d.z+d.d/2)*n],[(b-M/2)*t,(b+M/2)*t,(x-A/2)*n,(x+A/2)*n],g,m,p,_,w)}else y.box((d.x-d.w/2)*t,(d.x+d.w/2)*t,g,m,(d.z-d.d/2)*n,(d.z+d.d/2)*n,p,_,w)}}function gg(i,e){let t=new je;return Dc(new Sr(t,new Ft,(n,r)=>[n,r]),i,e.w,e.d,e.h,0,null,null,!0),t.geometry()}function _g(i,e,t,n,r,o){let s=o*pt,a=Math.cos(s),l=Math.sin(s),c=(p,_)=>[t+p*a-_*l,r+p*l+_*a],u=new Sr(i,new Ft,c),h=1713728,d=2373216,f=725279;if(e==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,h,d,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,f,h),u.cyl(0,0,.012,n-.075,n-.06,z.accent,z.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,d),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,d),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,d),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,f,z.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Vs(i,e,t,n,r,o=s=>!!s.glow){let s=i.p.length,a=t.rotation*pt,l=Math.cos(a),c=Math.sin(a),u=t.mirror?-1:1,h=(d,f)=>[t.x+u*d*l-f*c,t.z+u*d*c+f*l];Dc(new Sr(i,new Ft,h),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r,o),In(i.p,s,t,n+t.h/2)}function zc(i,e,t,n,r){let o=i.p.length,s=t.rotation*pt,a=Math.cos(s),l=Math.sin(s),c=t.mirror?-1:1,u=(h,d)=>[t.x+c*h*a-d*l,t.z+c*h*l+d*a];Dc(new Sr(i,new Ft,u),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r),In(i.p,o,t,n+t.h/2)}var yM=[[0,0],[1,0],[1,1],[0,1]];function fd(i){return i.length<=32&&i.every(e=>e.length===2&&e.every(t=>Number.isFinite(t)&&t>=0&&t<=1))&&Im(i)}function So(i){return i.points&&fd(i.points)?i.points:yM}function pd(i){return So(i).map(([e,t])=>[i.u+e*(i.w??.78),i.v+t*(i.h??1.18)])}function Nc(i,e,t,n=!0){let r=s=>((t[0]-e[0])*(s[1]-e[1])-(t[1]-e[1])*(s[0]-e[0]))*(n?1:-1),o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),u=r(l);if(c>=-1e-9&&o.push(a),c>=-1e-9!=u>=-1e-9){let h=c/(c-u);o.push(a.map((d,f)=>d+(l[f]-d)*h))}}return o.filter((s,a)=>{let l=o[(a+1)%o.length];return Math.hypot(s[0]-l[0],s[1]-l[1])>1e-8})}var dd=i=>i.length>=3&&Math.abs(fn(i))>1e-9;function Bc(i,e){let t=[i];for(let n of Yn(e)){let r=n.map(o=>e[o]);t=t.flatMap(o=>{let s=o;for(let c=0;c<3;c++)s=Nc(s,r[c],r[(c+1)%3]);if(!dd(s))return[o];let a=o,l=[];for(let c=0;c<3;c++){let u=r[c],h=r[(c+1)%3],d=Nc(a,u,h,!1);dd(d)&&l.push(d),a=Nc(a,u,h)}return l})}return t}function Oc(i,e,t=!1){let n=So(i),r=Math.max(0,Math.min(1,e)),o=i.cover_direction??"top",s=o==="left"||o==="right"?0:1,a=o==="top"||o==="right",l=Math.min(...n.map(f=>f[s])),c=Math.max(...n.map(f=>f[s])),u=a?c-r*(c-l):l+r*(c-l),h=s===0?[u,1]:[0,u],d=s===0?[u,0]:[1,u];return Yn(n).map(f=>Nc(f.map(p=>n[p]),h,d,a!==t)).filter(dd).map(f=>f)}var Vc=Math.PI/180,wM=1.13,MM=1.72,md=.025,Ar=.07,bg=.25;function vg(i,e){let t=[];for(let n of i.floors){if(e&&n.id!==e)continue;let{walls:r}=wi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,u=-s/l,h=un(n,o),d=h.top-h.bottom,f=o.sources.find(g=>g.room_id===o.roomLeft)?.edge??null,p={floorId:n.id,room:o.roomLeft,edge:f,free:!!o.free},_=(g,m,w,y)=>t.push({key:g,section:null,side:"top",flat:!1,o:m,eu:w,es:[0,1,0],n:y,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[y[0],y[2]],wall:p});_(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation+h.bottom,o.a[1]+u*o.right],[s/l,0,a/l],[c,0,u]),o.free&&_(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation+h.bottom,o.b[1]-u*o.left],[-s/l,0,-a/l],[-c,0,-u])}}return t}var gd="ground";function _d(i){let e=[...i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??i.floors[0]??null}function xg(i,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],o=_d(i),s=n[0]*e.u+r[0]*e.v,a=n[2]*e.u+r[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:_m(o,s,a)):e.base??0;return{key:gd,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function SM(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>Wt(n)-Wt(t))[0]??null}function er(i){let e=i.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>{let y=Rc(i,w,w.overhang??e.overhang),b=w.points?.length?Ds(w,w.shape==="parapet"?0:Math.max(0,Math.min(y.a,y.b,y.u0,y.u1))):void 0;return TM(w,y).map(x=>b?{...x,footprint:b}:x)});let t=SM(i);if(!t)return[];let n=t.rooms.flatMap(w=>w.points.map(y=>y[0])),r=t.rooms.flatMap(w=>w.points.map(y=>y[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,u=Wt(t);if(e.type==="flat")return[yg("main",null,s,l,a,c,u+bg)];let h=a-s>=c-l,d=e.ridge==="short"?!h:h,f=(d?c-l:a-s)/2,p=f*Math.tan(e.pitch*Vc),_=(w,y,b)=>d?[w,u+b,(l+c)/2+y]:[(s+a)/2+y,u+b,w],[g,m]=d?[s,a]:[l,c];return[-1,1].map(w=>Uc(`main:${w<0?"a":"b"}`,null,w<0?"a":"b",_(g,w*f,0),_(m,w*f,0),_(g,0,p),e.pitch,()=>[0,m-g]))}function TM(i,e){let t=qn(i),n=En(i),r=(_,g,m)=>{let[w,y]=t.at(_,g);return[w,m,y]},o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let _=t.at(a,-o),g=t.at(l,t.w+s);return[yg(i.id,i.id,Math.min(_[0],g[0]),Math.min(_[1],g[1]),Math.max(_[0],g[0]),Math.max(_[1],g[1]),i.eave_a+bg)]}if(i.shape==="pent")return[Uc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,t.w+s,n.y(t.w+s)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",h=i.shape==="pyramid"?(t.u1-t.u0)/2:u?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,d=u?t.u0+h-a:0,f=u?l-(t.u1-h):0,p=[];if(n.vr>.3){let _=Math.hypot(n.vr+o,n.rh-n.y(-o));p.push(Uc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,g=>[d*(g/_),c-f*(g/_)]))}if(t.w-n.vr>.3){let _=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));p.push(Uc(`${i.id}:b`,i.id,"b",r(l,t.w+s,n.y(t.w+s)),r(a,t.w+s,n.y(t.w+s)),r(l,n.vr,n.rh),i.pitch_b,g=>[f*(g/_),c-d*(g/_)]))}if(u){let _=n.y(-o),g=n.y(t.w+s),m=[[`${i.id}:c`,"c",r(a,t.w+s,g),r(a,-o,_),r(t.u0+h,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-o,_),r(l,t.w+s,g),r(t.u1-h,n.vr,n.rh)]];for(let[w,y,b,x,M]of m){let A=AM(w,i.id,y,b,x,M);A&&p.push(A)}}return p}function AM(i,e,t,n,r,o){let s=Gs(Er(r,n));if(s<.3)return null;let a=Qi(Er(r,n)),l=Er(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=Gs(u);if(h<.3)return null;let d=Qi(u),f=Qi(Sg(a,d));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let p=Qi([-d[0],0,-d[2]]),_=Math.atan2(d[1],Math.hypot(d[0],d[2]))/Vc;return{key:i,section:e,side:t,flat:!1,o:n,eu:a,es:d,n:f,lu:s,ls:h,pitch:_,span:m=>{let w=Math.min(1,Math.max(0,m/h));return[c*w,s-(s-c)*w]},facing:[p[0],p[2]]}}function Uc(i,e,t,n,r,o,s,a){let l=Qi(Er(r,n)),c=Qi(Er(o,n)),u=Qi(Sg(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let h=Qi([-c[0],0,-c[2]]);return{key:i,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:u,lu:Gs(Er(r,n)),ls:Gs(Er(o,n)),pitch:s,span:a,facing:[h[0],h[2]]}}function yg(i,e,t,n,r,o,s){let a=r-t>=o-n,l=a?r-t:o-n,c=a?o-n:r-t;return{key:`${i}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function wg(i){let e=i.module_w||wM,t=i.module_h||MM;return i.portrait===!1?[t,e]:[e,t]}function EM(i){return i.layout?.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Mg(i,e){return i.flat?Math.min(45,Math.max(0,e.tilt??15))*Vc:i.wall?Math.min(90,Math.max(0,e.tilt??0))*Vc:0}function RM(i,e){let[,t]=wg(e),n=Mg(i,e);return i.wall?t*Math.cos(n)+md:i.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+md}function Hs(i,e,t=!1){let[n,r]=wg(e),o=[],s=Mg(i,e),a=r*Math.cos(s),l=RM(i,e),c=EM(e),u=Math.max(1,...c),h=new Set(e.skip??[]),d=!!i.wall&&n>i.lu+1e-6,f=(_,g,m)=>[i.o[0]+i.eu[0]*_+i.es[0]*g+i.n[0]*m,i.o[1]+i.eu[1]*_+i.es[1]*g+i.n[1]*m,i.o[2]+i.eu[2]*_+i.es[2]*g+i.n[2]*m],p=(_,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[m,w]=i.span(g);return _>=m-1e-6&&_<=w+1e-6};return c.forEach((_,g)=>{let m=e.align==="right"?u-_:e.align==="center"?(u-_)/2:0;for(let w=0;w<_;w++){let y=`${g}:${w}`,b=h.has(y);if(b&&!t)continue;let x=e.u+(w+m)*(n+md),M=e.v+g*l,A=x+n,v=M+(i.flat||i.wall?a:r);if(d){if(!(p((x+A)/2,M)&&p((x+A)/2,v)))continue}else if(![[x,M],[A,M],[A,v],[x,v]].every(([E,I])=>p(E,I)))continue;if(i.footprint&&!$h(i.footprint,[[x,M],[A,M],[A,v],[x,v]].map(([E,I])=>{let L=f(E,I,0);return[L[0],L[2]]})))continue;if(i.wall&&s>.001){let E=Ar+r*Math.sin(s),[I,L]=e.flip?[E,Ar]:[Ar,E],N=[f(x,M,I),f(A,M,I),f(A,v,L),f(x,v,L)],B=e.flip?M:v,D=[x+.05,A-.05].map(O=>[f(O,B,0),f(O,B,E)]);o.push({corners:N,posts:D,cell:y,skipped:b});continue}if(!i.flat){o.push({corners:[f(x,M,Ar),f(A,M,Ar),f(A,v,Ar),f(x,v,Ar)],posts:[],cell:y,skipped:b});continue}let S=.15,T=S+r*Math.sin(s),[P,C]=e.flip?[v,M]:[M,v],R=[f(x,P,S),f(A,P,S),f(A,C,T),f(x,C,T)];o.push({corners:R,posts:[x+.05,A-.05].flatMap(E=>[[f(E,P,0),f(E,P,S)],[f(E,C,0),f(E,C,T)]]),cell:y,skipped:b})}}),o}function Er(i,e){return[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}function Gs(i){return Math.hypot(i[0],i[1],i[2])}function Qi(i){let e=Gs(i)||1;return[i[0]/e,i[1]/e,i[2]/e]}function Sg(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}var PM=.78,kM=1.18;function CM(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||PM,module_h:i.h||kM}}function Gc(i,e){if(e.points){if(!fd(e.points)||pd(e).some(([o,s])=>!IM(i,o,s)))return null;let r=pd(e).map(([o,s])=>i.o.map((a,l)=>a+i.eu[l]*o+i.es[l]*s+i.n[l]*.02));return i.footprint&&!$h(i.footprint,r.map(o=>[o[0]-i.n[0]*.02,o[2]-i.n[2]*.02]))?null:r}let t=Hs(i,CM(e))[0];if(!t)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function Hc(i,e,t){let n=e?Gc(e,t):null;if(!n)return null;let r=So(t),o=t.points?Yn(r).sort((u,h)=>Math.abs(fn(h.map(d=>r[d])))-Math.abs(fn(u.map(d=>r[d]))))[0]:null,s=o?o.map(u=>n[u]):n,a=s.reduce((u,h)=>u+h[0],0)/s.length,l=s.reduce((u,h)=>u+h[1],0)/s.length,c=s.reduce((u,h)=>u+h[2],0)/s.length;for(let u of[...i.floors].sort((h,d)=>d.elevation-h.elevation)){if(u.elevation>l)continue;let h=u.rooms.find(d=>Oe([a,c],d.points));if(h)return{floor:u,roomId:h.id,corners:n}}return null}function IM(i,e,t){if(i.unbounded)return!0;if(t<0||t>i.ls)return!1;let[n,r]=i.span(t);return e<n||e>r?!1:!i.footprint||_o(i.footprint,[i.o[0]+i.eu[0]*e+i.es[0]*t,i.o[2]+i.eu[2]*e+i.es[2]*t])}function Wc(i,e,t,n){let r=e.map((c,u)=>c-i[u]),o=t.map((c,u)=>c-i[u]),s=[r[1]*o[2]-r[2]*o[1],r[2]*o[0]-r[0]*o[2],r[0]*o[1]-r[1]*o[0]],a=Math.hypot(...s)||1,l=s.reduce((c,u,h)=>c+u*n[h],0)<0?-1:1;return s.map(c=>l*c/a)}function Ws(i,e,t){return i.setAttribute("solarNormal",new ye(e,3)),i.setAttribute("solarPoint",new ye(t,3)),i}function Xc(i){let e=i.onBeforeCompile.bind(i),t=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(n,r)=>{e(n,r),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 solarNormal;
attribute vec3 solarPoint;`).replace("#include <project_vertex>",`#include <project_vertex>
      vec3 solarWorldPoint = (modelMatrix * vec4(solarPoint, 1.0)).xyz;
      vec3 solarWorldNormal = mat3(modelMatrix) * solarNormal;
      if (dot(solarWorldNormal, cameraPosition - solarWorldPoint) <= 0.0) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)},i.customProgramCacheKey=()=>`${t()}-solar-facing`,i}function Tg(){return new Qe({vertexColors:!0,side:ct,transparent:!0,opacity:.22,depthWrite:!1})}function bd(i,e,t,n,r){let o=n==="bottom"?0:n==="middle"?.5:1,s=n==="bottom"?-1:1,a=(h,d,f)=>{let p=d.map((m,w)=>m+(f[w]-m)*o),_=h.map((m,w)=>m-p[w]),g=_.reduce((m,w,y)=>m+w*t[y],0);return p.map((m,w)=>m+_[w]*Math.cos(r)-e[w]*g*Math.sin(r)*s)},l=i.map(h=>h.reduce((d,f,p)=>d+f*t[p],0)),c=Math.min(...l),u=Math.max(...l);return i.map((h,d)=>{let f=h.map((_,g)=>_+t[g]*(c-l[d])),p=h.map((_,g)=>_+t[g]*(u-l[d]));return a(h,f,p)})}var Xs=1712952,Ks=2239816,Rg=1318193,Rr=Xe(3662079,.9),Pr=Xe(5995775,.45),en=.14,LM=9427199,vd=13226982,xd=14936565,FM={black:{glass:new j(329483),edge:Xe(9082544,.32),cells:Xe(2766160,.22)},blue:{glass:new j(1386842),edge:Xe(10467583,.55),cells:Xe(4025599,.35)}},DM=Xe(13226982,.5),Ag=Xe(13226982,.85),zM=Xe(16757575,.95),NM=new j(2845583),BM=new j(3818072),Eg=new j(4871791);function Kc(i,e,t,n,r){if(e.length<3)return;let[o,s,a]=e,l=(s[1]-o[1])*(a[2]-o[2])-(s[2]-o[2])*(a[1]-o[1]),c=(s[0]-o[0])*(a[1]-o[1])-(s[1]-o[1])*(a[0]-o[0]),h=l*(o[0]-n[0])+c*(o[2]-n[1])<0?[...e].reverse():e;for(let f=1;f+1<h.length;f++)i.tri(h[0],h[f],h[f+1],t);let d=Math.min(...h.map(f=>f[1]));for(let f=0;f<h.length;f++){let p=h[f],_=h[(f+1)%h.length],g=Math.abs(p[1]-d)<1e-6&&Math.abs(_[1]-d)<1e-6,m=Math.hypot(p[0]-_[0],p[2]-_[2])<1e-6;r.seg(p,_,g?Cc:m?ui:Zn)}}function OM(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>Wt(n)-Wt(t))[0]??null}function Pg(i,e=new Map){let t=i.settings.roof,n=t?.type==="custom"?null:HM(i),r=t?.type==="custom"?WM(i,t.sections??[],t.overhang):n?[n]:[];return UM(i,r),GM(i,r),VM(i,r,e),r}function UM(i,e){let t=er(i);for(let n of i.settings.roof.windows??[]){let r=t.find(l=>l.key===n.face),o=r?Gc(r,n):null;if(!r||!o)continue;let s=r.section?e.find(l=>l.sections?.includes(r.section)):e[0];if(!s)continue;let a=o.map(l=>[l[0]-r.n[0]*.02,l[2]-r.n[2]*.02]);for(let l of[s.solid,s.glass]){let c=new je;for(let u=0;u<l.p.length;u+=9){let h=[0,3,6].map(g=>[l.p[u+g],l.p[u+g+2],l.p[u+g+1]]),d=new j().setRGB(l.c[u],l.c[u+1],l.c[u+2]),f=s.floor.elevation+s.base,_=!h.every(g=>Math.abs(r.n[0]*(g[0]-r.o[0])+r.n[1]*(g[2]+f-r.o[1])+r.n[2]*(g[1]-r.o[2]))<.5)||Math.abs(fn(h))<1e-9?[h]:Bc(h,a);for(let g of _)for(let m=1;m+1<g.length;m++)c.tri(...[g[0],g[m],g[m+1]].map(w=>[w[0],w[2],w[1]]),d)}l.p=c.p,l.c=c.c,l.f=c.f}}}function VM(i,e,t){let n=i.settings.roof?.windows??[];if(!n.length||!e.length)return;let r=new Map(er(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?Gc(s,o):null;if(!s||!a)continue;let l=s.section?e.find(M=>M.sections?.includes(s.section)):e[0];if(!l)continue;let c=l.floor.elevation+l.base,u=M=>[M[0],M[1]-c,M[2]],h=a.map(u),d=t.get(o.id)??{open:0,tilt:0,cover:0},p=!!o.float&&Hc(i,s,o)?.floor.id===l.floor.id?l.win??={solid:new je,glass:new je,lines:new Ft}:l.winRoof??={solid:new je,glass:new je,lines:new Ft},_=(M,A)=>[M[0]+s.n[0]*A,M[1]+s.n[1]*A,M[2]+s.n[2]*A],g=d.open>.02||d.tilt>.02?zM:Ag,m=h.map(M=>_(M,.06)),w=h.map(M=>_(M,-.02));for(let M=0;M<m.length;M++){p.lines.seg(m[M],m[(M+1)%m.length],g);let A=(M+1)%m.length;p.solid.tri(w[M],w[A],m[A],Eg),p.solid.tri(w[M],m[A],m[M],Eg)}let y=(d.open>.02?30*Math.min(1,d.open):d.tilt>.5?12:0)*pt,b=h.map(M=>_(M,.065)),x=bd(b,s.n,s.es,o.hinge,y);for(let[M,A,v]of Yn(So(o)))p.glass.tri(x[M],x[A],x[v],NM);for(let M=0;M<x.length;M++)p.lines.seg(x[M],x[(M+1)%x.length],g);if(d.cover>.02){let M=o.cover_style==="awning",A=/^#[0-9a-f]{6}$/i.test(o.cover_color??"")?new j(o.cover_color):BM,v=([T,P])=>o.points?u(s.o.map((C,R)=>C+s.eu[R]*(o.u+T*(o.w??.78))+s.es[R]*(o.v+P*(o.h??1.18))+s.n[R]*.095)):_(h[0].map((C,R)=>(1-P)*((1-T)*h[0][R]+T*h[1][R])+P*((1-T)*h[3][R]+T*h[2][R])),.075),S=new Map;for(let T of Oc(o,d.cover)){let P=T.map(v);M?P=P.map(C=>_(C,.045)):P=bd([...b,...P],s.n,s.es,o.hinge,y).slice(b.length);for(let C=1;C+1<P.length;C++)p.solid.tri(P[0],P[C],P[C+1],A);if(M)for(let C=0;C<P.length;C++){let R=P[C],E=P[(C+1)%P.length],I=[R,E].map(L=>L.map(N=>Math.round(N*1e7)).join(",")).sort().join(";");S.has(I)?S.delete(I):S.set(I,[R,E])}}for(let[T,P]of S.values())p.lines.seg(T,P,Ag)}}}function GM(i,e){let t=i.settings.roof?.solar??[];if(!t.length||!e.length)return;let n=new Map(er(i).map(r=>[r.key,r]));for(let r of t){let o=n.get(r.face);if(!o)continue;let s=o.section?e.find(a=>a.sections?.includes(o.section)):e[0];if(s){let a=s.solar??={solid:new je,lines:new Ft,facing:{normals:[],points:[],lineNormals:[],linePoints:[]}};yd(a.solid,a.lines,o,r,s.floor.elevation+s.base,a.facing)}}}function yd(i,e,t,n,r,o){let s=u=>[u[0],u[1]-r,u[2]],a=FM[n.look==="blue"?"blue":"black"],l=n.portrait===!1?10:6,c=n.portrait===!1?6:10;for(let u of Hs(t,n)){let h=i.p.length,d=e.p.length,[f,p,_,g]=u.corners.map(s);i.tri(f,p,_,a.glass),i.tri(f,_,g,a.glass),i.tri(f,_,p,a.glass),i.tri(f,g,_,a.glass);let m=(b,x=.004)=>[b[0]+t.n[0]*x,b[1]+t.n[1]*x,b[2]+t.n[2]*x],w=(b,x,M)=>[b[0]+(x[0]-b[0])*M,b[1]+(x[1]-b[1])*M,b[2]+(x[2]-b[2])*M],y=[f,p,_,g].map(b=>m(b));for(let b=0;b<4;b++)e.seg(y[b],y[(b+1)%4],a.edge);for(let b=1;b<l;b++)e.seg(m(w(f,p,b/l)),m(w(g,_,b/l)),a.cells);for(let b=1;b<c;b++)e.seg(m(w(f,g,b/c)),m(w(p,_,b/c)),a.cells);for(let[b,x]of u.posts)e.seg(s(b),s(x),DM);if(o){let b=Wc(f,p,_,t.n);for(let x=h;x<i.p.length;x+=3)o.normals.push(...b),o.points.push(...f);for(let x=d;x<e.p.length;x+=3)o.lineNormals.push(...b),o.linePoints.push(...f)}}}function HM(i){let e=i.settings.roof,t=OM(i);if(!t||!e||e.type==="none"||e.type==="custom")return null;let n=t.rooms.flatMap(T=>T.points.map(P=>P[0])),r=t.rooms.flatMap(T=>T.points.map(P=>P[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,u=new je,h=new Ft;if(e.type==="flat"){St(u,[[s,l],[a,l],[a,c],[s,c]],0,.25,Xs,Ks,{bottom:!0});let T=.252;for(let[P,C]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])h.seg([P[0],T,P[1]],[C[0],T,C[1]],Rr),h.seg([P[0],0,P[1]],[C[0],0,C[1]],Pr);return{floor:t,base:Wt(t)-t.elevation,solid:u,lines:h,glass:new je}}let d=a-s>=c-l,f=e.ridge==="short"?!d:d,p=(f?c-l:a-s)/2,_=p*Math.tan(e.pitch*pt),g=(T,P,C)=>f?[T,C,(l+c)/2+P]:[(s+a)/2+P,C,T],[m,w]=f?[s,a]:[l,c],y=new j(Ks),b=new j(Xs),x=(T,P,C,R,E)=>{u.tri(T,P,C,E),u.tri(T,C,R,E)};for(let T of[-1,1]){x(g(m,T*p,0),g(w,T*p,0),g(w,0,_),g(m,0,_),y),x(g(m,T*p,-en),g(m,0,_-en),g(w,0,_-en),g(w,T*p,-en),b),x(g(m,T*p,-en),g(w,T*p,-en),g(w,T*p,0),g(m,T*p,0),b);for(let P of[m,w])x(g(P,T*p,-en),g(P,T*p,0),g(P,0,_),g(P,0,_-en),b);h.seg(g(m,T*p,0),g(w,T*p,0),Pr);for(let P of[m,w])h.seg(g(P,T*p,0),g(P,0,_),Pr)}let M=e.overhang,A=new j(Rg),v=p-M,S=v*Math.tan(e.pitch*pt);for(let T of[m+M,w-M])Kc(u,[g(T,-v,-en),g(T,v,-en),g(T,0,S-en)],A,[(s+a)/2,(l+c)/2],h);return h.seg(g(m,0,_+.004),g(w,0,_+.004),Rr),{floor:t,base:Wt(t)-t.elevation,solid:u,lines:h,glass:new je}}function WM(i,e,t){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,s)=>o.elevation-s.elevation);if(!n.length)return[];let r=new Map;for(let o of e){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let s=Um(i,o)??n[0],a=o.open?`${s.id}:open`:s.id,l=r.get(a);l||r.set(a,l={floor:s,base:0,solid:new je,lines:new Ft,glass:new je,sections:[],lift:!o.open}),l.sections.push(o.id);let c=Ec(e,o),u=Wt(s)>o.base+.05&&!o.dormer&&!c,h=e.filter(p=>p!==o&&Ec(e,p)===o).flatMap(p=>Bm(o,p)),d=c?Jh(c,o):o,f=null;if(c){let p=qn(d),_=Ji(c,{u0:0,u1:0,a:0,b:0}),g=m=>{let[w,y]=p.at(m,p.w/2),[b,x]=$i(c,w,y);return vo(_,b,x)??En(c).y(x)};f=g(p.u0)<=g(p.u1)?0:1}XM(l.solid,l.lines,d,Rc(i,d,d.overhang??t),s.elevation,l.glass,u,h,f)}return[...r.values()].sort((o,s)=>+(o.lift===!1)-+(s.lift===!1))}function XM(i,e,t,n,r,o=i,s=!1,a=[],l=null){let c=qn(t),u=En(t),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,h.a),f=Math.max(0,h.b),p=c.w,_=c.u0-Math.max(0,h.u0),g=c.u1+Math.max(0,h.u1),m=(E,I,L)=>{let[N,B]=c.at(E,I);return[N,L-r,B]},w=new j(Ks),y=new j(Xs),b=new j(Rg),x=(E,I)=>{for(let L=1;L+1<E.length;L++)i.tri(E[0],E[L],E[L+1],I)},M=[],A=[],v=[],S=null;if(t.shape==="flat"||t.shape==="parapet"){let E=t.eave_a,I=t.shape==="parapet",L=t.points&&t.points.length>=3?Ds(t,I?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):I?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,p),c.at(c.u0,p)]:[c.at(_,-d),c.at(g,-d),c.at(g,p+f),c.at(_,p+f)];fn(L)<0&&(L=[...L].reverse()),St(i,L,E-r,E-r+.25,Xs,Ks,{bottom:!0});for(let N=0;N<L.length;N++){let B=L[N],D=L[(N+1)%L.length];e.seg([B[0],E-r+.252,B[1]],[D[0],E-r+.252,D[1]],Rr),e.seg([B[0],E-r,B[1]],[D[0],E-r,D[1]],Pr)}if(I){let N=U=>fn(U)>=0?U:[...U].reverse(),B=N(L),D=Ac(B,-.2),O=B.length;for(let U=0;U<O;U++){let Z=N([B[U],B[(U+1)%O],D[(U+1)%O],D[U]]);St(i,Z,E-r+.25,E-r+.65,Xs,Ks),e.seg([B[U][0],E-r+.652,B[U][1]],[B[(U+1)%O][0],E-r+.652,B[(U+1)%O][1]],Rr),e.seg([D[U][0],E-r+.652,D[U][1]],[D[(U+1)%O][0],E-r+.652,D[(U+1)%O][1]],Rr)}}}else{let E=Ji(t,h);M=E.faces;for(let I of a)M=M.flatMap(L=>Om(L,I));A=E.rim,v=E.ridges,S=E.gable}let T=!!t.open,P=new j(LM);for(let E of M){if(T){for(let I=1;I+1<E.length;I++)o.tri(m(E[0][0],E[0][1],E[0][2]),m(E[I][0],E[I][1],E[I][2]),m(E[I+1][0],E[I+1][1],E[I+1][2]),P);continue}x(E.map(([I,L,N])=>m(I,L,N)),w),x(E.map(([I,L,N])=>m(I,L,N-en)),y)}for(let E=0;E<A.length;E++){let[I,L,N]=A[E],[B,D,O]=A[(E+1)%A.length];T||x([m(I,L,N),m(B,D,O),m(B,D,O-en),m(I,L,N-en)],y),e.seg(m(I,L,N),m(B,D,O),T?Rr:Pr)}if(T){t.points?.length?KM(i,e,t,r):YM(i,e,c,u,h,m,r);return}for(let[[E,I,L],[N,B,D]]of v)e.seg(m(E,I,L+.004),m(N,B,D+.004),Rr);let C=t.base;if(s)return;let R=c.at((c.u0+c.u1)/2,p/2);if(t.points?.length){let E=Ji(t,{u0:0,u1:0,a:0,b:0}).rim;E.forEach((I,L)=>{let N=E[(L+1)%E.length],B=I,D=t.shape==="flat"||t.shape==="parapet"?0:en,O=I[2]-D,U=N[2]-D;if(Math.max(O,U)<=C+.001)return;let Z=q=>[I[0]+(N[0]-I[0])*q,I[1]+(N[1]-I[1])*q,C+D];O<C&&(B=Z((C-O)/(U-O))),U<C&&(N=Z((C-O)/(U-O))),x([m(B[0],B[1],C),m(N[0],N[1],C),m(N[0],N[1],N[2]-D),m(B[0],B[1],B[2]-D)],b)});return}if(S){let E=qM(S,C-en),I=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(E.length>=3)for(let L of I)Kc(i,E.map(([N,B])=>m(L,N,B)),b,R,e)}if(t.shape!=="flat"&&t.shape!=="parapet")for(let E of[0,p]){let I=u.y(E)-en;I>C+.02&&Kc(i,[m(c.u0,E,C),m(c.u1,E,C),m(c.u1,E,I),m(c.u0,E,I)],b,R,e)}else if(t.eave_a>C+.02)for(let[E,I,L,N]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,p],[c.u1,p,c.u0,p],[c.u0,p,c.u0,0]])Kc(i,[m(E,I,C),m(L,N,C),m(L,N,t.eave_a),m(E,I,t.eave_a)],b,R,e)}function KM(i,e,t,n){let s=qn(t),a=Ji(t,{u0:0,u1:0,a:0,b:0});a.rim.forEach((l,c)=>{let u=a.rim[(c+1)%a.rim.length],h=s.at(l[0],l[1]),d=s.at(u[0],u[1]),f=d[0]-h[0],p=d[1]-h[1],_=Math.hypot(f,p);if(_<1e-6)return;let g=-p/_*.12/2,m=f/_*.12/2,w=[[h[0]+g,h[1]+m],[d[0]+g,d[1]+m],[d[0]-g,d[1]-m],[h[0]-g,h[1]-m]];fn(w)<0&&w.reverse();let y=(M,A)=>l[2]+(u[2]-l[2])*((M-h[0])*f+(A-h[1])*p)/(_*_)-n-.03,b=i.p.length;St(i,w,0,.18,vd,xd,{bottom:!0});for(let M=b;M<i.p.length;M+=3)i.p[M+1]+=y(i.p[M],i.p[M+2])-.18;e.seg([h[0],l[2]-n-.18,h[1]],[d[0],u[2]-n-.18,d[1]],Pr);let x=Math.max(1,Math.ceil(_/3.5));for(let M=0;M<x;M++){let A=M/x,v=h[0]+f*A,S=h[1]+p*A,T=y(v,S)-.18;T<=0||St(i,[[v-.12/2,S-.12/2],[v+.12/2,S-.12/2],[v+.12/2,S+.12/2],[v-.12/2,S+.12/2]],0,T,vd,xd,{bottom:!0})}})}function YM(i,e,t,n,r,o,s){let a=t.w,l=.12,c=.16,u=r.a>0,h=r.b>0,d=r.u0>0,f=r.u1>0,p=(m,w,y,b,x,M)=>{let A=[t.at(m,y),t.at(w,y),t.at(w,b),t.at(m,b)],v=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);St(i,v<0?[...A].reverse():A,x-s,M-s,vd,xd,{bottom:!0})},_=s;for(let[m,w]of[[0,u],[a,h]]){if(!w)continue;let y=n.y(m)-.03,b=m===0?0:a-l;p(t.u0,t.u1,b,b+l,y-c,y),e.seg(o(t.u0,m,y-c),o(t.u1,m,y-c),Pr)}for(let[m,w]of[[t.u0,d],[t.u1-l,f]])if(w)for(let y=0;y<6;y++){let b=a*y/6,x=a*(y+1)/6,M=Math.min(n.y(b),n.y(x))-.03;p(m,m+l,b,x,M-c,M)}let g=[];for(let[m,w]of[[0,u],[a-l,h]]){if(!w)continue;let y=t.u1-t.u0-l,b=Math.max(1,Math.ceil(y/3.5));for(let x=0;x<=b;x++){let M=t.u0+y*x/b;x===0&&!d||x===b&&!f||g.push([M,m])}}if(!u&&!h)for(let m of[t.u0,t.u1-l])(m===t.u0&&d||m!==t.u0&&f)&&g.push([m,a/2-l/2]);for(let[m,w]of g){let y=n.y(w+l/2)-.03-c;p(m,m+l,w,w+l,_,y)}}function qM(i,e){let t=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=e&&t.push([s,a]);let l=i[o+1];if(l&&(a-e)*(l[1]-e)<0){let c=(e-a)/(l[1]-a);t.push([s+(l[0]-s)*c,e])}}if(t.length<2)return[];let n=t[0],r=t[t.length-1];return r[1]>e&&t.push([r[0],e]),n[1]>e&&t.unshift([n[0],e]),t}var Ys={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Yc={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},Jt=.2,ZM=.01,qs=8,qc=.42,wd=.42;function Lg(i,e,t,n=[],r=[],o){let{walls:s,open:a}=wi(i.rooms,{exterior:e,interior:t},i.walls??[]),l=i.openings.map(R=>zs(i,R,s)).filter(R=>R!==null),c=(R,E,I)=>{let L=o?o(R,E):null;return L===null?I:Math.min(I,L)},u=(R,E,I,L,N)=>{if(!o)return N;let B=N,D=Math.max(2,Math.ceil((L-I)/.25)+1);for(let O=0;O<D;O++){let U=I+(L-I)*O/(D-1);B=Math.min(B,c(R[0]+E[0]*U,R[1]+E[1]*U,N))}return B},h=new je(!0,!0),d=[],f=new Ft,p=[];for(let R of i.rooms){if(R.points.length<3)continue;let E=Zs(R.points),I=ft(i,R),L=Pc(i,R,l);p.push(...L);let N=Yc[R.floor_material]??Yc.wood,B=new j(N.color),D=n.flatMap(ae=>{if(ig(ae,E))return[od(ae,.003)];if(!Hm(ae))return[];let ie=yo(E,ae);return ie.length>=3&&Math.abs(xi(ie))>.01?[od(Zs(ie),.003)]:[]});p.push(...D);let O=[...E,...D.flat()],U=h.count;for(let[ae,ie,le]of pn(E,D)){let H=O[ae],W=O[ie],re=O[le],ce=[[H,W,re]];for(let $ of L)ce=ce.flatMap(he=>xo(he,$));for(let $ of ce)for(let he=1;he+1<$.length;he++){let[De,ze,Pe]=[$[0],$[he],$[he+1]];h.tri([De[0],I,De[1]],[Pe[0],I,Pe[1]],[ze[0],I,ze[1]],B,B,B,[De[0],De[1],Pe[0],Pe[1],ze[0],ze[1]],Ze,N.tile)}}d.push({roomId:R.id,start:U,end:h.count,color:N.color});let Z=new j(Ys.slab),q=ae=>{for(let ie=0;ie<ae.length;ie++)for(let[le,H]of jh(ae[ie],ae[(ie+1)%ae.length],L))h.tri([le[0],I-Jt,le[1]],[le[0],I,le[1]],[H[0],I,H[1]],Z),h.tri([le[0],I-Jt,le[1]],[H[0],I,H[1]],[H[0],I-Jt,H[1]],Z)};q(E);for(let ae of D){q([...Zs(ae)].reverse());for(let ie=0;ie<ae.length;ie++){let le=ae[ie],H=ae[(ie+1)%ae.length];f.seg([le[0],I+.006,le[1]],[H[0],I+.006,H[1]],Zn),f.seg([le[0],I-Jt,le[1]],[H[0],I-Jt,H[1]],ui)}}}let _=new Map,g=[],m=new Map;for(let R of s){let E="interior",I=null;if(R.exterior){let N=R.b[0]-R.a[0],B=R.b[1]-R.a[1],D=Math.hypot(N,B)||1,O=[B/D,-N/D],U=(Math.round(Math.atan2(O[1],O[0])/(2*Math.PI)*qs)%qs+qs)%qs;E=`s${U}`;let Z=U/qs*2*Math.PI;I=[Math.cos(Z),Math.sin(Z)]}let L=_.get(E);L===void 0&&(L=g.length,_.set(E,L),g.push(I)),m.set(R,L)}let w=new Map,y=[];for(let R of i.openings){let E=yr(R,i.rooms,i.walls??[]);if(!E)continue;let I=wr(s,R,E);if(!I)continue;let{wall:L,s:N}=I,B=$c([L.b[0]-L.a[0],L.b[1]-L.a[1]]),D=Math.hypot(L.b[0]-L.a[0],L.b[1]-L.a[1]),O=Math.min(R.width,D),U=Math.max(0,Math.min(D-O,N-O/2)),Z=E.room.points,q=L.free?B[0]*(Z[1][0]-Z[0][0])+B[1]*(Z[1][1]-Z[0][1])>0:L.roomLeft===R.room_id,ae=[-B[1],B[0]],ie=q?ae:[-ae[0],-ae[1]],le=l.find(Ge=>Ge.opening.id===R.id),H=le?.threshold??ft(i,E.room),W=le?.room??E.room,re=W.wall_offset!=null||W.floor_offset!=null?ft(i,W):H,ce=Math.min(le?.ceiling??1/0,un(i,L).top);if(le?.other&&ce-H<.12)continue;let $=Math.min(u(L.a,B,U,U+O,ce)-.02,re+R.sill+R.height),he=Math.min((le?.stair?Gm(le):H)+R.sill,$-.1),De=[ie[1],-ie[0]],ze=B[0]*De[0]+B[1]*De[1]>0,Pe={opening:R,bucket:m.get(L),start:[L.a[0]+B[0]*U,L.a[1]+B[1]*U],axis:B,width:O,toRoom:ie,faceRoom:q?L.left:L.right,faceOut:q?L.right:L.left,sill:he,top:$,hingeAtStart:R.hinge==="left"===ze,exterior:L.exterior};y.push(Pe);let ke=w.get(L);ke||w.set(L,ke=[]),ke.push({s0:U,s1:U+O,sill:he,top:$,info:Pe})}let b=Math.min(i.cut_height,Wt(i)-i.elevation),x=new je;for(let R of s){let E=m.get(R),I=$c([R.b[0]-R.a[0],R.b[1]-R.a[1]]),L=(w.get(R)??[]).sort((ie,le)=>ie.s0-le.s0),N=un(i,R),B=N.top,D=[],O=[-1/0,...new Set(L.flatMap(ie=>[ie.s0,ie.s1])).values(),1/0].sort((ie,le)=>ie-le);for(let ie=0;ie+1<O.length;ie++){let le=O[ie],H=O[ie+1];if(H-le<1e-6)continue;let W=Number.isFinite(le)&&Number.isFinite(H)?(le+H)/2:Number.isFinite(le)?le+1:H-1,re=L.filter(he=>he.s0<W&&he.s1>W).map(he=>[he.sill,he.top]).sort((he,De)=>he[0]-De[0]),ce=[],$=N.bottom-Jt;for(let[he,De]of re)he>$+1e-4&&ce.push([$,he<1e-4?-ZM:he]),$=Math.max($,De);B>$+1e-4&&ce.push([$,B]),D.push({t0:le,t1:H,ranges:ce})}let U=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),Z=o&&u(R.a,I,0,U,B)<B-.001,q=Z?D.flatMap(ie=>{let le=Math.max(ie.t0,-.5),H=Math.min(ie.t1,U+.5),W=Math.max(1,Math.ceil((H-le)/.3));return Array.from({length:W},(re,ce)=>({t0:ce===0?ie.t0:le+(H-le)*ce/W,t1:ce===W-1?ie.t1:le+(H-le)*(ce+1)/W,ranges:ie.ranges,inner0:ce>0,inner1:ce<W-1}))}):D.map(ie=>({...ie,inner0:!1,inner1:!1})),ae=ie=>(ie[0]-R.a[0])*I[0]+(ie[1]-R.a[1])*I[1];for(let ie of q){let le=JM(R.footprint,R.a,I,ie.t0,ie.t1);if(le.length<3)continue;let H=(ce,$)=>Math.abs(ae(ce)-$)<1e-4,W=(ce,$)=>ie.inner0&&H(ce,ie.t0)&&H($,ie.t0)||ie.inner1&&H(ce,ie.t1)&&H($,ie.t1),re=Z?Math.min(...le.map(([ce,$])=>c(ce,$,B))):B;for(let[ce,$]of ie.ranges){let he=Math.min($,Z?Math.max(...le.map(([ke,Ge])=>c(ke,Ge,B))):$);if(he-ce<1e-4||re-ce<.01)continue;let De=ce>.01,ze=Z&&$>re,Pe=(ke,Ge)=>Math.min($,c(ke,Ge,B));if(ce<b-1e-6){let ke=he>b+1e-6?Wm+E:Mr+E,Ge=ze&&re<b?(at,wt)=>Math.min(b,Pe(at,wt)):Math.min(he,b);St(x,le,ce,Ge,Ys.wall,Ys.wallTop,{aoFrom:0,bottom:De,fold:Mr+E,topFold:ke,skipSide:W})}he>b+1e-6&&re>b+1e-6&&St(x,le,Math.max(ce,b),ze?Pe:he,Ys.wall,Ys.wallTop,{aoFrom:0,fold:E,bottom:De&&ce>=b,skipSide:W})}}}let M=s.flatMap(R=>R.footprint),A=QM(s,M),v=new Ft;v.p.push(...f.p),v.c.push(...f.c),v.f.push(...f.f);for(let R of l){let E=R.stair;if(!E)continue;let I=(B,D)=>[R.start[0]+R.axis[0]*B+E.toward[0]*D,R.start[1]+R.axis[1]*B+E.toward[1]*D],L=Yc[E.room.floor_material]?.color??Yc.wood.color;for(let B=0;B<E.count;B++){let D=E.face+E.depth*B/E.count,O=E.face+E.depth*(B+1)/E.count,U=E.recess?R.low+(R.high-R.low)*(B+1)/E.count:R.high-(R.high-R.low)*B/E.count,Z=Zs([I(0,D),I(R.width,D),I(R.width,O),I(0,O)]);St(x,Z,R.low-.02,U,L,L,{bottom:!0});let q=I(0,D),ae=I(R.width,D);v.seg([q[0],U+.003,q[1]],[ae[0],U+.003,ae[1]],Zn)}let N=E.offset===0?-R.wall.left-R.wall.right:E.back;if(E.face>N+1e-6){let B=Zs([I(0,N),I(R.width,N),I(R.width,E.face),I(0,E.face)]);St(x,B,R.threshold-.02,R.threshold,L,L,{bottom:!0})}}let S=(R,E)=>(w.get(R)??[]).filter(E);for(let R of A.edges){let E=m.get(R.wall),I=un(i,R.wall).bottom;for(let[N,B]of Zc(R,S(R.wall,D=>D.sill<=I+.005)))v.seg([N[0],I+.004,N[1]],[B[0],I+.004,B[1]],Cc);for(let[N,B]of Zc(R,S(R.wall,D=>D.sill<b&&D.top>b)))v.seg([N[0],b,N[1]],[B[0],b,B[1]],Qh,Ic+E);let L=un(i,R.wall).top;for(let[N,B]of Zc(R,S(R.wall,D=>D.top>=L-.021))){if(!o){v.seg([N[0],L,N[1]],[B[0],L,B[1]],Zn,L<=b+1e-6?Mr+E:E);continue}let D=Math.max(1,Math.ceil(Math.hypot(B[0]-N[0],B[1]-N[1])/.3));for(let O=0;O<D;O++){let U=[N[0]+(B[0]-N[0])*O/D,N[1]+(B[1]-N[1])*O/D],Z=[N[0]+(B[0]-N[0])*(O+1)/D,N[1]+(B[1]-N[1])*(O+1)/D],q=c(U[0],U[1],L),ae=c(Z[0],Z[1],L);v.seg([U[0],q,U[1]],[Z[0],ae,Z[1]],Zn,Math.max(q,ae)<=b+1e-6?Mr+E:E)}}}for(let R of A.corners){let E=c(R.p[0],R.p[1],un(i,R.wall).top);v.segSplit([R.p[0],un(i,R.wall).bottom+.004,R.p[1]],[R.p[0],E,R.p[1]],ui,Math.min(b,E),m.get(R.wall))}for(let R of w.values())for(let E of R)$M(v,E,b);let T=eS(A.edges,i,w);tg(T,i,s,y,[...n,...p],s.map(R=>m.get(R)??0));let P=new je;$m(x,v,i,P);for(let R of r)yd(x,v,R.face,R.field,i.elevation);let C=[];for(let R of i.furniture){if(Sm(R.type))continue;let E=x.count,I=v.p.length/6,L=Ct(i,R),N=bn(i,R.x,R.z),B=T.p.length;Fc(x,v,T,R,L-N);for(let D=E*9+1;D<x.p.length;D+=3)x.p[D]+=N;for(let D=I*6+1;D<v.p.length;D+=3)v.p[D]+=N;for(let D=B+1;D<T.p.length;D+=3)T.p[D]+=N;(L+R.h>b+.05||R.rotation_x||R.rotation_z)&&(Lc(x,E,b,Ns),Xm(v,I,b,Ns)),C.push({id:R.id,start:E,end:x.count})}return{floor:h.geometry(),roomTris:d,holes:p,walls:x.geometry(),water:P.geometry(),lines:v.geometry(),shadow:T.geometry(),buckets:g,openings:y,walls2d:s,openRooms:a,wallBuckets:s.map(R=>m.get(R)),furnitureTris:C,roofUnder:o}}function $M(i,e,t){let{info:n}=e,r=n.bucket,o=(l,c,u)=>[n.start[0]+n.axis[0]*(l-e.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-e.s0)+n.toRoom[1]*c],s=l=>l>t+1e-6?r:Ze,a=e.sill<0?e.sill:Math.max(e.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[e.s0,e.s1])i.segSplit(o(c,l,a),o(c,l,e.top),ui,t,r);i.seg(o(e.s0,l,e.top),o(e.s1,l,e.top),ui,s(e.top)),Math.abs(e.sill)>.01&&i.seg(o(e.s0,l,e.sill),o(e.s1,l,e.sill),ui,s(e.sill))}for(let l of[e.s0,e.s1])i.seg(o(l,n.faceRoom,e.top),o(l,-n.faceOut,e.top),ui,s(e.top)),Math.abs(e.sill)>.01&&i.seg(o(l,n.faceRoom,e.sill),o(l,-n.faceOut,e.sill),ui,s(e.sill)),e.sill<t&&e.top>t&&i.seg(o(l,n.faceRoom,t),o(l,-n.faceOut,t),Qh,Ic+r)}function JM(i,e,t,n,r){let o=a=>(a[0]-e[0])*t[0]+(a[1]-e[1])*t[1],s=i;return Number.isFinite(n)&&(s=kg(s,a=>o(a)-n)),Number.isFinite(r)&&(s=kg(s,a=>r-o(a))),s}function kg(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=e(r),a=e(o);if(s>=0&&t.push(r),s>=0!=a>=0){let l=s/(s-a);t.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return t}var Cg=i=>Math.round(i*1e3),$s=i=>`${Cg(i[0])},${Cg(i[1])}`,Ig=(i,e)=>{let t=$s(i),n=$s(e);return t<n?`${t}|${n}`:`${n}|${t}`};function jM(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let h of e){let d=((h[0]-r[0])*s+(h[1]-r[1])*a)/l;if(d<=1e-6||d>=1-1e-6)continue;Math.abs((h[0]-r[0])*a-(h[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(d)}c.sort((h,d)=>h-d);let u=r;for(let h of c){let d=[r[0]+s*h,r[1]+a*h];$s(d)!==$s(u)&&t.push([u,d]),u=d}t.push([u,o])}return t}function QM(i,e){let t=i.map(l=>({wall:l,edges:jM(l.footprint,e)})),n=new Map;for(let{edges:l}of t)for(let[c,u]of l){let h=Ig(c,u);n.set(h,(n.get(h)??0)+1)}let r=[],o=new Map,s=(l,c,u)=>{let h=$s(l),d=o.get(h);d||o.set(h,d={p:l,wall:c,d:[]}),d.d.push(u)};for(let{wall:l,edges:c}of t)for(let[u,h]of c){if(n.get(Ig(u,h))!==1)continue;let d=Math.hypot(h[0]-u[0],h[1]-u[1]);if(d<1e-4)continue;r.push({a:u,b:h,wall:l});let f=[(h[0]-u[0])/d,(h[1]-u[1])/d];s(u,l,f),s(h,l,f)}let a=[];for(let{p:l,wall:c,d:u}of o.values())u.some(h=>u.some(d=>Math.abs(h[0]*d[1]-h[1]*d[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function Zc(i,e){if(!e.length)return[[i.a,i.b]];let t=$c([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=$c([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(t[0]*n[0]+t[1]*n[1])<.99)return[[i.a,i.b]];let r=h=>(h[0]-i.wall.a[0])*t[0]+(h[1]-i.wall.a[1])*t[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let h of e)c=c.flatMap(([d,f])=>{if(h.s1<=d||h.s0>=f)return[[d,f]];let p=[];return h.s0>d&&p.push([d,h.s0]),h.s1<f&&p.push([h.s1,f]),p});let u=h=>{let d=(h-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*d,i.a[1]+(i.b[1]-i.a[1])*d]};return c.filter(([h,d])=>d-h>1e-4).map(([h,d])=>o<=s?[u(h),u(d)]:[u(d),u(h)])}function eS(i,e,t){let n=new je,r=new j(wd,wd,wd),o=new j(1,1,1);for(let s of i){let a=s.b[0]-s.a[0],l=s.b[1]-s.a[1],c=Math.hypot(a,l)||1,u=[(s.a[0]+s.b[0])/2+l/c*.05,(s.a[1]+s.b[1])/2-a/c*.05],h=e.rooms.find(p=>Oe(u,p.points)),d=ft(e,h),f=d+.002;for(let[p,_]of Zc(s,(t.get(s.wall)??[]).filter(g=>g.sill<=d+.005))){let g=_[0]-p[0],m=_[1]-p[1],w=Math.hypot(g,m);if(w<.05)continue;let y=[m/w,-g/w],b=[(p[0]+_[0])/2+y[0]*.05,(p[1]+_[1])/2+y[1]*.05];if(!e.rooms.some(A=>A.points.length>=3&&Oe(b,A.points)))continue;let x=[p[0]+y[0]*qc,p[1]+y[1]*qc],M=[_[0]+y[0]*qc,_[1]+y[1]*qc];n.tri([p[0],f,p[1]],[x[0],f,x[1]],[M[0],f,M[1]],r,o,o),n.tri([p[0],f,p[1]],[M[0],f,M[1]],[_[0],f,_[1]],r,o,r)}}return n}function Fg(i,e){let t=e.furniture.filter(o=>o.type==="stairwell").map(qi),n=i.filter(o=>o.elevation<e.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return rd(t);let r=n.furniture.filter(o=>(wm.has(o.type)||_t(o.type)?.hole)&&n.elevation+Ct(n,o)+o.h>=e.elevation+bn(e,o.x,o.z)-.3).map(qi);return rd([...t,...r])}function $c(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function Zs(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}var tS=new j(1516340),nS=new j(527897),Md=new j(1779256),Js=new j(1120808),iS=new j(4163256),Dg=new j(5995161),rS=new j(2240842),oS=new j(1318704),sS=.35,To=.8,aS=.2,zg=.1;function lS(i,e){if(i.settings.terrain?.earth===!1||e.elevation>.3)return!1;let t=Ng(i,e);return!!t&&t.some(([n,r])=>yc(n,r)-e.elevation>-.15)}function Ng(i,e){return e.rooms.some(t=>t.points.length>=3)?zm(e.rooms,e.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function Bg(i,e,t,n=!1){if(i.settings.terrain?.earth===!1||e.elevation>.3)return null;let r=Ng(i,e);if(!r)return null;let o=(p,_)=>yc(p,_)-e.elevation,s=n&&r.some(([p,_])=>o(p,_)<-Jt-.03);if(!s&&!lS(i,e))return null;let a=e.height,l=-sS,c=(p,_)=>Math.min(a,yc(p,_)-e.elevation),u=new je,h=new je,d=new Ft,f=(p,_,g,m,w,y,b,x)=>{let M=[_[0]-p[0],_[2]-p[2]];-M[1]*w[0]+M[0]*w[1]>0?(x.tri(p,_,g,y,y,b),x.tri(p,g,m,y,b,b)):(x.tri(p,g,_,y,b,y),x.tri(p,m,g,y,b,b))};for(let p=0;p<r.length;p++){let _=r[p],g=r[(p+1)%r.length],m=Math.hypot(g[0]-_[0],g[1]-_[1]);if(m<1e-4)continue;let w=[(g[0]-_[0])/m,(g[1]-_[1])/m],y=[w[1],-w[0]],b=[(_[0]+g[0])/2+y[0]*.05,(_[1]+g[1])/2+y[1]*.05];Oe(b,r)&&(y=[-y[0],-y[1]]);let x=(T,P=.012)=>[_[0]+w[0]*T+y[0]*P,_[1]+w[1]*T+y[1]*P],M=[];for(let T of t){if(T.opening.type!=="window"||!T.exterior)continue;let P=T.start[0]+T.axis[0]*(T.width/2)-T.toRoom[0]*T.faceOut,C=T.start[1]+T.axis[1]*(T.width/2)-T.toRoom[1]*T.faceOut,R=(P-_[0])*w[0]+(C-_[1])*w[1];Math.abs((P-_[0])*y[0]+(C-_[1])*y[1])>.08||R<-.05||R>m+.05||T.sill>=c(P,C)-.05||M.push({s0:Math.max(0,R-T.width/2-zg),s1:Math.min(m,R+T.width/2+zg),bottom:Math.max(l+.05,T.sill-aS)})}let A=new Set([0,m]);for(let T of M)A.add(T.s0),A.add(T.s1);let v=[...A].sort((T,P)=>T-P),S=[];for(let T=0;T<v.length-1;T++){let P=Math.max(1,Math.ceil((v[T+1]-v[T])/.5));for(let C=0;C<P;C++)S.push(v[T]+(v[T+1]-v[T])*C/P)}S.push(m);for(let T=0;T<S.length-1;T++){let P=S[T],C=S[T+1],R=M.find(Z=>P>=Z.s0-1e-6&&C<=Z.s1+1e-6),E=x(P),I=x(C),L=c(E[0],E[1]),N=c(I[0],I[1]),B=R?Math.min(L,R.bottom):L,D=R?Math.min(N,R.bottom):N;if(B>l+.01||D>l+.01){let Z=Math.min(B,l),q=Math.min(D,l);f([E[0],Z,E[1]],[I[0],q,I[1]],[I[0],Math.max(D,l),I[1]],[E[0],Math.max(B,l),E[1]],y,nS,tS,u)}let O=o(E[0],E[1]),U=o(I[0],I[1]);if(s&&(O<-Jt-.01||U<-Jt-.01)&&f([E[0],Math.min(O,-Jt),E[1]],[I[0],Math.min(U,-Jt),I[1]],[I[0],-Jt,I[1]],[E[0],-Jt,E[1]],y,oS,rS,u),L>l||N>l||s&&(O<-Jt||U<-Jt)){let Z=s?Math.min(O,Math.max(L,l)):Math.max(L,l),q=s?Math.min(U,Math.max(N,l)):Math.max(N,l);d.seg([E[0],Z+.004,E[1]],[I[0],q+.004,I[1]],iS)}}for(let T of M){let P=x(T.s0,0),C=x(T.s1,0),R=[P[0]+y[0]*To,P[1]+y[1]*To],E=[C[0]+y[0]*To,C[1]+y[1]*To],I=U=>c(U[0],U[1]),L=T.bottom,N=(U,Z)=>[U[0],Z,U[1]];h.tri(N(P,L),N(C,L),N(E,L),Js),h.tri(N(P,L),N(E,L),N(R,L),Js);let B=(U,Z)=>{h.tri(N(U,L),N(Z,L),N(Z,I(Z)),Js,Js,Md),h.tri(N(U,L),N(Z,I(Z)),N(U,I(U)),Js,Md,Md)};B(P,R),B(C,E),B(R,E);let D=U=>[U[0],I(U)+.01,U[1]];for(let[U,Z]of[[P,C],[C,E],[E,R],[R,P]])d.seg(D(U),D(Z),Dg);let O=Math.max(3,Math.round((T.s1-T.s0)/.12));for(let U=1;U<O;U++){let Z=U/O,q=[P[0]+(C[0]-P[0])*Z,P[1]+(C[1]-P[1])*Z];d.seg(D(q),D([q[0]+y[0]*To,q[1]+y[1]*To]),Dg)}}}return u.count||h.count?{earth:u,wells:h,lines:d}:null}var Og=i=>Math.round(i*1e3)/1e3;function cS(i,e,t,n){let r=Math.hypot(n[0]-t[0],n[1]-t[1]);if(r<.01)return!1;let o=[(n[0]-t[0])/r,(n[1]-t[1])/r],s=l=>Math.abs(-(l[0]-t[0])*o[1]+(l[1]-t[1])*o[0]),a=l=>(l[0]-t[0])*o[0]+(l[1]-t[1])*o[1];return i.rooms.some(l=>l.id!==e&&l.points.some((c,u)=>{let h=l.points[(u+1)%l.points.length];return s(c)>.02||s(h)>.02?!1:Math.min(r,Math.max(a(c),a(h)))-Math.max(0,Math.min(a(c),a(h)))>.05}))}function Ug(i,e,t,n,r,o=.05){let s=i.rooms.find(d=>d.points.length>=3&&Oe([e.x,e.z],d.points));if(!s)return[t,n];let a=s.points,l=Tn(a)>=0?1:-1,c=qi({...e}),u=t,h=n;for(let d=0;d<2;d++){let f=qi({...e,x:u,z:h});for(let p=0;p<a.length;p++){let _=a[p],g=a[(p+1)%a.length],m=Math.hypot(g[0]-_[0],g[1]-_[1]);if(m<.05)continue;let w=[(g[0]-_[0])/m,(g[1]-_[1])/m],y=[-w[1]*l,w[0]*l],b=cS(i,s.id,_,g)?r/2:0,x=0;f.forEach((M,A)=>{let v=(M[0]-_[0])*w[0]+(M[1]-_[1])*w[1];if(v<-.01||v>m+.01)return;let S=(M[0]-_[0])*y[0]+(M[1]-_[1])*y[1]-b,T=c[A];(T[0]-_[0])*y[0]+(T[1]-_[1])*y[1]-b<-o||S<x&&(x=S)}),x<-1e-4&&(u-=y[0]*x,h-=y[1]*x)}}return[Og(u),Og(h)]}var uS=500,Vg=.12,Gg=1.35,hS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Jc=class{view={target:new V,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(e,t,n){this.el=e,this.camera=t,this.events=n;let r=(o,s,a)=>{e.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[e,t]of this.listeners)this.el.removeEventListener(e,t)}get active(){return this.pointers.size>0||this.flight!==null}update(e){let t=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,h=Math.min(1,(e-c)/u),d=hS(h);this.view.target.lerpVectors(a.target,l.target,d),this.view.radius=a.radius+(l.radius-a.radius)*d,this.view.theta=a.theta+(l.theta-a.theta)*d,this.view.phi=a.phi+(l.phi-a.phi)*d,h>=1&&(this.flight=null),t=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Sd(this.view.phi+this.velocity.phi,Vg,Gg),this.velocity.theta*=.9,this.velocity.phi*=.9,t=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),t}flyTo(e,t=700){let n={...this.view,target:this.view.target.clone()},r=e.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let o={target:(e.target??n.target).clone(),radius:e.radius??n.radius,theta:r,phi:e.phi??n.phi};this.velocity={theta:0,phi:0},t<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:n,to:o,start:performance.now(),duration:t},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(e){let t=this.el.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}onDown(e){if(this.el.setPointerCapture(e.pointerId),this.pointers.size===0&&e.button===0&&this.events.grab?.(...this.local(e))){this.grabbing=!0,this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:e.clientX,y:e.clientY,time:performance.now(),moved:!1};let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},uS)}else this.down=null,this.pinch=this.pinchState()}onMove(e){let t=this.pointers.get(e.pointerId);if(!t)return;if(this.grabbing){this.events.drag?.(...this.local(e));return}let n=e.clientX-t.x,r=e.clientY-t.y;if(this.swiping){this.events.swipeMove?.(e.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&t.button===0&&!e.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,e.clientX-this.down.x,e.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(e.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){t.x=e.clientX,t.y=e.clientY;return}let o=t.type==="mouse";if(o&&!this.leftDragTurns&&t.button===0){t.x=e.clientX,t.y=e.clientY;return}if((t.button===1||t.button===2||e.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=Sd(this.view.phi+c,Vg,Gg),this.velocity={theta:l,phi:c}}t.x=e.clientX,t.y=e.clientY}else{t.x=e.clientX,t.y=e.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(e){if(this.pointers.has(e.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(e.pointerId),this.events.drop?.();return}if(this.pointers.delete(e.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&e.type==="pointerup"&&performance.now()-this.down.time<400){let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(e){e.preventDefault(),this.flight=null,this.zoom(Math.exp(e.deltaY*(e.deltaMode===1?.05:.0015))),this.events.change()}zoom(e){this.view.radius=Sd(this.view.radius*e,this.minRadius,this.maxRadius)}pan(e,t){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new V(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new V(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-e*r),this.view.target.addScaledVector(s,t*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t.x-n.x,t.y-n.y),mid:[(t.x+n.x)/2,(t.y+n.y)/2]}}};function Sd(i,e,t){return Math.min(t,Math.max(e,i))}function tr(i,e,t="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=e.standing,n.uniforms.uGlass=e.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${t}`,i}function jc(i,e,t,n){let r=Math.min(1,Math.max(0,(i/e-.62)/.3)),o=t?1:.94*r;return{opacity:o,lift:t?0:(1-(n??o))*2.2}}function Hg(i,e){return i.onBeforeCompile=t=>{t.uniforms.uRoofDirection=e,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform vec3 uRoofDirection;
varying float vRoofGlass;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 roofNormal = mat3(modelMatrix) * normal;
      if (roofNormal.y < 0.0) roofNormal = -roofNormal;
      float roofHorizontal = length(roofNormal.xz);
      vRoofGlass = roofHorizontal < 0.000001 ? smoothstep(-0.15, 0.15, uRoofDirection.y) : smoothstep(0.1, 0.4, dot(roofNormal.xz / roofHorizontal, uRoofDirection.xz));`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vRoofGlass;`).replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075), vRoofGlass);
      diffuseColor.a *= mix(1.0, 0.2, vRoofGlass);`)},i.customProgramCacheKey=()=>"fp3d-roof-glass",i}function Wg(i,e,t,n,r,o,s=[],a){if(n.elevation<=2||r>=.97)return;let l=n.elevation*Math.PI/180,c=(n.azimuth+(e.settings.north??0))*Math.PI/180,u=[Math.sin(c),-Math.cos(c)],h=[u[0]*Math.cos(l),Math.sin(l),u[1]*Math.cos(l)],d=Math.min(1,n.elevation/12)*(1-.8*r),f=1/Math.tan(l),p=new Map(er(e).map(_=>[_.key,_]));for(let _ of e.settings.roof.windows??[]){let g=p.get(_.face);if(!g)continue;let m=Hc(e,g,_);if(m?.floor.id!==t.id)continue;let w=m.corners,y=g.n.reduce((B,D,O)=>B+D*h[O],0);if(y<.05)continue;let b=Math.min(1,Math.max(0,o.get(_.id)?.cover??0));if(b>=.99)continue;if(_.points||_.cover_direction&&_.cover_direction!=="top"){let B=t.rooms.find(ae=>ae.id===m.roomId);if(!B)continue;let D=t.rooms.indexOf(B),O=t.rooms.filter((ae,ie)=>ae.id===B.id||a&&a[ie]===a[D]),U=ft(t,B),Z=.14*d*Math.min(1,y*1.5),q=new j(Z,.82*Z,.55*Z);for(let ae of Oc(_,b,!0)){let ie=ae.map(([le,H])=>{let W=g.o.map((ce,$)=>ce+g.eu[$]*(_.u+le*(_.w??.78))+g.es[$]*(_.v+H*(_.h??1.18))),re=Math.min(7,(W[1]-t.elevation-U)*f);return[W[0]-u[0]*re,W[2]-u[1]*re,U+.02]});for(let le of O)for(let H of Yn(le.points)){let W=[Sc(ie,H.map(re=>le.points[re]))];for(let re of s)W=W.flatMap(ce=>Bc(ce,[...re]));for(let re of W)for(let ce=1;ce+1<re.length;ce++)i.tri(...[re[0],re[ce],re[ce+1]].map($=>[$[0],$[2],$[1]]),q)}}continue}let x=[w.reduce((B,D)=>B+D[0],0)/4,w.reduce((B,D)=>B+D[2],0)/4],M=t.rooms.find(B=>Oe(x,B.points));if(!M)continue;let A=t.rooms.indexOf(M),v=t.rooms.filter((B,D)=>B.id===M.id||a&&a[D]===a[A]),S=ft(t,M),T=(B,D,O)=>B.map((U,Z)=>U+(D[Z]-U)*O),P=(B,D)=>{let O=T(T(w[0],w[1],B),T(w[3],w[2],B),D*(1-b)),U=Math.min(7,(O[1]-t.elevation-S)*f);return[O[0]-u[0]*U,S+.02,O[2]-u[1]*U]},C=(B,D)=>Math.hypot(...B.map((O,U)=>O-D[U])),R=Math.max(1,Math.ceil(C(P(0,0),P(1,0))/.3)),E=Math.max(1,Math.ceil(C(P(0,0),P(0,1))/.25)),I=.14*d*Math.min(1,y*1.5),L=new j(I,.82*I,.55*I),N=L.clone().multiplyScalar(.45);for(let B=0;B<E;B++)for(let D=0;D<R;D++){let O=D/R,U=(D+1)/R,Z=B/E,q=(B+1)/E,ae=P((O+U)/2,(Z+q)/2),ie=[ae[0],ae[2]];if(!v.some(he=>Oe(ie,he.points))||s.some(he=>Oe(ie,he)))continue;let le=P(O,Z),H=P(U,Z),W=P(U,q),re=P(O,q),ce=L.clone().lerp(N,Z),$=L.clone().lerp(N,q);i.tri(le,H,W,ce,ce,$),i.tri(le,W,re,ce,$,$)}}}function Xg(i,e){return Math.hypot(e[0]-i[0],e[1]-i[1],e[2]-i[2])}function Kg(i,e,t=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=Xg(o,s),c=Xg(s,a),u=Math.min(e,l*.45,c*.45),h=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],d=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(u<.005||h[0]*d[0]+h[1]*d[1]+h[2]*d[2]<-.999){n.push(s);continue}let f=[s[0]+h[0]*u,s[1]+h[1]*u,s[2]+h[2]*u],p=[s[0]+d[0]*u,s[1]+d[1]*u,s[2]+d[2]*u];for(let _=0;_<=t;_++){let g=_/t,m=(1-g)*(1-g),w=2*(1-g)*g,y=g*g;n.push([m*f[0]+w*s[0]+y*p[0],m*f[1]+w*s[1]+y*p[1],m*f[2]+w*s[2]+y*p[2]])}}return n.push(i[i.length-1]),n}var Yg=new j(7568261),qg=new j(4869974),dS=new j(3116287),Zg=new j(3948872),Td=kr([.35,.85,.4]),$g=10;function kr(i){let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]}function js(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function Jg(i){let e=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],t=kr(js(i,e));return[t,kr(js(i,t))]}function Mi(i,e){let t=.5+.5*Math.max(0,e[0]*Td[0]+e[1]*Td[1]+e[2]*Td[2]);return i.clone().multiplyScalar(t)}function Ao(i,e,t,n,r,o=!1){let s=kr([t[0]-e[0],t[1]-e[1],t[2]-e[2]]),[a,l]=Jg(s),c=(u,h)=>{let d=h/$g*Math.PI*2,f=[a[0]*Math.cos(d)+l[0]*Math.sin(d),a[1]*Math.cos(d)+l[1]*Math.sin(d),a[2]*Math.cos(d)+l[2]*Math.sin(d)];return{p:[u[0]+f[0]*n,u[1]+f[1]*n,u[2]+f[2]*n],n:f}};for(let u=0;u<$g;u++){let h=c(e,u),d=c(e,u+1),f=c(t,u),p=c(t,u+1);i.tri(h.p,p.p,f.p,Mi(r,h.n),Mi(r,p.n),Mi(r,f.n)),i.tri(h.p,d.p,p.p,Mi(r,h.n),Mi(r,d.n),Mi(r,p.n)),o&&(i.tri([...e],d.p,h.p,Mi(r,[-s[0],-s[1],-s[2]])),i.tri([...t],f.p,p.p,Mi(r,s)))}}function fS(i,e,t,n,r,o,s,a){let l=kr(js(t,n)),c=(h,d,f)=>[e[0]+t[0]*h*r+n[0]*d*o+l[0]*f*s,e[1]+t[1]*h*r+n[1]*d*o+l[1]*f*s,e[2]+t[2]*h*r+n[2]*d*o+l[2]*f*s],u=[];for(let[h,d]of[[t,.5],[[-t[0],-t[1],-t[2]],-.5]])u.push([h,[c(d,-.5,-.5),c(d,.5,-.5),c(d,.5,.5),c(d,-.5,.5)]]);for(let[h,d]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])u.push([h,[c(-.5,d,-.5),c(.5,d,-.5),c(.5,d,.5),c(-.5,d,.5)]]);for(let[h,d]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])u.push([h,[c(-.5,-.5,d),c(.5,-.5,d),c(.5,.5,d),c(-.5,.5,d)]]);for(let[h,d]of u){let f=Mi(a,h);i.tri(d[0],d[1],d[2],f),i.tri(d[0],d[2],d[3],f),i.tri(d[0],d[2],d[1],f),i.tri(d[0],d[3],d[2],f)}}function jg(i,e){if(e.points.length<2)return;let t=e.radius,n=Kg(e.points,t*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?Yg.clone().multiplyScalar(.55):Yg;Ao(i,o,s,t,a,r===1||r===n.length-1)}for(let r of e.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);Ao(i,s,a,t*1.22,qg,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);Ao(i,s,a,t*1.08,e.water?new j(...e.water).multiplyScalar(.9):new j(10475240),!0);for(let l of o(.08)){let[c,u]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Ao(i,c,u,t*1.3,qg,!0)}}else{let[s,a]=o(.055);Ao(i,s,a,t*1.4,Zg,!0);let[l]=Jg(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],u=[r.p[0]+c[0]*t*2,r.p[1]+c[1]*t*2,r.p[2]+c[2]*t*2];Ao(i,[r.p[0]+c[0]*t*1.3,r.p[1]+c[1]*t*1.3,r.p[2]+c[2]*t*1.3],u,t*.35,Zg,!0);let h=r.open===!1?kr(js(r.dir,c)):r.dir,d=kr(js(h,c)),f=[u[0]+h[0]*.045,u[1]+h[1]*.045,u[2]+h[2]*.045];fS(i,f,h,d,.1,.028,.012,dS)}}}var Ad=1.62,pS=.2,Ed=class{solids=[];doors=[];rooms;walls;building;floor;constructor(e,t){this.building=e,this.floor=t;let n=e.settings;this.rooms=t.rooms.filter(s=>s.points.length>=3);let r=wi(this.rooms,{exterior:n.wall_exterior,interior:n.wall_interior},t.walls??[]);this.walls=r.walls;let o=new Map;for(let s of t.openings){if(!(s.type!=="window"||s.sill<.1))continue;let l=yr(s,t.rooms,t.walls??[]);if(!l)continue;let c=wr(this.walls,s,l);if(!c)continue;let u=o.get(c.wall)??[];u.push([c.s-s.width/2+.05,c.s+s.width/2-.05]),o.set(c.wall,u);let h=c.wall,d=h.b[0]-h.a[0],f=h.b[1]-h.a[1],p=Math.hypot(d,f)||1,_=d/p,g=f/p,m=[h.a[0]+_*c.s,h.a[1]+g*c.s],w=h.left+.45,y=h.right+.45;this.doors.push({centre:m,p:[[m[0]-g*w,m[1]+_*w],[m[0]+g*y,m[1]-_*y]]})}for(let s of this.walls){if(s.height!==void 0&&s.height<.9)continue;let a=s.b[0]-s.a[0],l=s.b[1]-s.a[1],c=Math.hypot(a,l);c<1e-6||this.solids.push({a:s.a,u:[a/c,l/c],len:c,left:s.left,right:s.right,gaps:o.get(s)??[]})}}blocked(e,t=pS){for(let n of this.solids){let r=e[0]-n.a[0],o=e[1]-n.a[1],s=r*n.u[0]+o*n.u[1];if(s<-t||s>n.len+t)continue;let a=-r*n.u[1]+o*n.u[0];if(!(a>n.left+t||a<-n.right-t)&&!n.gaps.some(([l,c])=>s>l+t*.6&&s<c-t*.6))return!0}return!1}clear(e,t){let n=Math.hypot(t[0]-e[0],t[1]-e[1]),r=Math.max(1,Math.ceil(n/.08));for(let o=1;o<=r;o++){let s=o/r;if(this.blocked([e[0]+(t[0]-e[0])*s,e[1]+(t[1]-e[1])*s]))return!1}return!0}roomAt(e){return this.rooms.find(t=>Oe(e,t.points))??null}path(e,t){if(this.clear(e,t))return[t];let n=[e,t,...this.doors.flatMap(h=>h.p).filter(h=>!this.blocked(h))],r=n.length,o=new Array(r).fill(1/0),s=new Array(r).fill(-1),a=new Array(r).fill(!1);o[0]=0;let l=new Map,c=(h,d)=>{let f=h<d?`${h}:${d}`:`${d}:${h}`,p=l.get(f);return p===void 0&&(p=this.clear(n[h],n[d]),l.set(f,p)),p};for(;;){let h=-1;for(let d=0;d<r;d++)!a[d]&&o[d]<1/0&&(h<0||o[d]<o[h])&&(h=d);if(h<0)return null;if(h===1)break;a[h]=!0;for(let d=0;d<r;d++){if(a[d]||d===h)continue;let f=Math.hypot(n[h][0]-n[d][0],n[h][1]-n[d][1]);o[h]+f>=o[d]||c(h,d)&&(o[d]=o[h]+f,s[d]=h)}}let u=[];for(let h=1;h>0;h=s[h])u.unshift(n[h]);return u}start(e=!1){for(let r of e?this.floor.openings:[]){if(r.type!=="door")continue;let o=yr(r,this.floor.rooms,this.floor.walls??[]);if(!o)continue;let s=wr(this.walls,r,o);if(!s||!s.wall.exterior)continue;let a=s.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c)||1,h=l/u,d=c/u,f=[a.a[0]+h*s.s,a.a[1]+d*s.s],p=[f[0]-d*(a.left+.9),f[1]+h*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(h,-d))}}let t=[...this.rooms].sort((r,o)=>Qg(o)-Qg(r))[0],n=t?this.freeNear(Yi(t.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(e,t,n=9){let r=Math.cos(t),o=Math.sin(t);for(let s=.2;s<n;s+=.15)if(this.blocked([e[0]+r*s,e[1]+o*s],.05))return s;return n}openYaw(e,t=null){let n=t??0,r=-1;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,a=this.sight(e,s);if(t!==null){let l=Math.abs(s-t)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=s)}return n}freeNear(e){if(!this.blocked(e))return e;for(let t=.2;t<2;t+=.2)for(let n=0;n<6.28;n+=.5){let r=[e[0]+Math.cos(n)*t,e[1]+Math.sin(n)*t];if(!this.blocked(r))return r}return e}};function Qg(i){let e=0,t=i.points;for(let n=0;n<t.length;n++){let[r,o]=t[n],[s,a]=t[(n+1)%t.length];e+=r*a-s*o}return Math.abs(e/2)}var Rd=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(e,t,n,r){this.v=e,this.map=t,this.surface=n,this.onRoom=r.onRoom;let o=r.start??(()=>{let s=t.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...o},this.origUpdate=e.controls.update,this.origWalls=e.updateWalls,this.origFov=e.camera.fov,this.origNear=e.camera.near,e.controls.update=()=>this.apply(),e.updateWalls=()=>{for(let s of e.floors)s.mask.standing.value=65535,s.mask.glass.value=0},e.camera.fov=72,e.camera.near=.05,e.camera.updateProjectionMatrix(),e.labels.style.visibility="hidden",this.bind(),this.reportRoom(),e.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[e,t,n,r]of this.listeners)e.removeEventListener(t,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(e,t){this.map=e,this.path=[];let n=t??(()=>{let r=e.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let e=this.v.floorMap.get(this.map.floor.id);return(e?e.floor.elevation+e.y:this.map.floor.elevation)+bn(this.map.floor,this.state.x,this.state.z)+Ad}apply(){let{x:e,z:t,yaw:n,pitch:r}=this.state,o=this.floorY(),s=Math.cos(r);return this.v.camera.position.set(e,o,t),this.v.camera.lookAt(e+Math.cos(n)*s,o+Math.sin(r),t+Math.sin(n)*s),this.v.controls.view.target.set(e,o-Ad,t),!1}goTo(e){let t=this.map.path([this.state.x,this.state.z],this.map.freeNear(e));return t?(this.path=t,this.kick(),!0):!1}goToRoom(e){return this.goTo(Yi(e.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(e=>this.tick(e))),this.v.invalidate()}tick(e){this.raf=0;let t=Math.min(.05,(e-this.last)/1e3);this.last=e;let n=!1,r=this.state,o=0,s=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(o+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(o-=1),this.keys.has("a")&&(s-=1),this.keys.has("d")&&(s+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(o+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*t,n=!0),o||s){this.path=[],this.turnTo=null;let l=1.5*t,c=(Math.cos(r.yaw)*o-Math.sin(r.yaw)*s)*l,u=(Math.sin(r.yaw)*o+Math.cos(r.yaw)*s)*l;this.move(c,u),n=!0}else if(this.path.length){let[l,c]=this.path[0],u=l-r.x,h=c-r.z,d=Math.hypot(u,h),f=1.4*t;d<=f?(r.x=l,r.z=c,this.path.shift()):(r.x+=u/d*f,r.z+=h/d*f,this.turnTo=Math.atan2(h,u)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,t*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(e,t){let n=this.state,r=[n.x+e,n.z+t];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+e,n.z])?this.map.blocked([n.x,n.z+t])||(n.z+=t):n.x+=e}reportRoom(){let e=this.map.roomAt([this.state.x,this.state.z]),t=e?.id??null;t!==this.roomId&&(this.roomId=t,this.onRoom(e))}setStick(e){this.stick=e,this.kick()}floorPoint(e,t){let n=this.surface.getBoundingClientRect(),r=(e-n.left)/n.width*2-1,o=1-(t-n.top)/n.height*2,{yaw:s,pitch:a,x:l,z:c}=this.state,u=this.v.camera.fov*Math.PI/180,h=Math.tan(u/2),d=n.width/n.height,f=Math.cos(a),p=[Math.cos(s)*f,Math.sin(a),Math.sin(s)*f],_=[-Math.sin(s),0,Math.cos(s)],g=[p[1]*_[2]-p[2]*_[1],p[2]*_[0]-p[0]*_[2],p[0]*_[1]-p[1]*_[0]],m=[-g[0],-g[1],-g[2]],w=[p[0]+_[0]*r*h*d+m[0]*o*h,p[1]+_[1]*r*h*d+m[1]*o*h,p[2]+_[2]*r*h*d+m[2]*o*h];if(w[1]>=-.02)return null;let y=Ad/-w[1];return[l+w[0]*y,c+w[2]*y]}bind(){let e=(s,a,l,c)=>{s.addEventListener(a,l,c),this.listeners.push([s,a,l,!!c?.capture])},t=null;e(this.surface,"pointerdown",s=>{t||(t={x:s.clientX,y:s.clientY,moved:!1,id:s.pointerId},this.surface.setPointerCapture?.(s.pointerId))}),e(this.surface,"pointermove",s=>{if(!t||s.pointerId!==t.id)return;let a=s.clientX-t.x,l=s.clientY-t.y;if(!t.moved&&Math.hypot(a,l)<5)return;t.moved=!0,t.x=s.clientX,t.y=s.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=s=>{if(!t||s.pointerId!==t.id)return;let a=!t.moved;if(t=null,a){let l=this.floorPoint(s.clientX,s.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};e(this.surface,"pointerup",n),e(this.surface,"pointercancel",()=>t=null),e(this.surface,"wheel",s=>{s.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-s.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=s=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s.key.toLowerCase()),o=s=>!!s.composedPath()[0]?.closest?.("input, textarea, select");e(window,"keydown",s=>{!r(s)||o(s)||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),s.stopImmediatePropagation(),this.keys.add(s.key.toLowerCase()),this.kick())},{capture:!0}),e(window,"keyup",s=>{r(s)&&(this.keys.delete(s.key.toLowerCase()),s.stopImmediatePropagation())},{capture:!0}),e(window,"blur",()=>this.keys.clear())}};function Qs(i){return!i||i.state==="unavailable"||i.state==="unknown"}function e0(i,e){if(!i||!e||!/^#[0-9a-f]{6}$/i.test(e))return i;let t=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),n=a=>{let l=Math.max(...a),c=Math.min(...a),u=l-c;return l<=0||u/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/u+6)%6:l===a[1]?(a[2]-a[0])/u+2:(a[0]-a[1])/u+4)*60,u/l]},[r]=n(t),[o]=n(i.color);if(r<0||o<0)return r<0&&o<0?i:null;let s=Math.abs(r-o);return Math.min(s,360-s)<=30?i:null}function Pd(i,e){if(!i||i.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:i.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,r=t.rgb_color,o;return r&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?o=[r[0]/255,r[1]/255,r[2]/255]:typeof t.color_temp_kelvin=="number"?o=mS(t.color_temp_kelvin):o=[1,.71,.28],{color:o,level:n}}function mS(i){let e=Math.min(1,Math.max(0,(i-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}var gS=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Qc(i){if(!i||Qs(i))return null;let e=i.attributes.window_state;for(let t of[typeof e=="string"?e:null,i.state]){if(!t)continue;let n=gS.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}var _S=.5;function t0(i,e,t="window"){let n=g=>!!g&&i.states[g]?.state==="on",r=g=>!!g&&!!i.states[g]&&!Qs(i.states[g]),o=g=>g?Qc(i.states[g]):null,s=g=>{let m=o(g);return e.contactInvert&&g&&g!==e.tilt&&g!==e.tilt2&&m!=="tilted"&&m?m==="open"?"closed":"open":m},a=n(e.tilt2)||s(e.tilt2)==="tilted"||s(e.contact2)==="tilted",l=s(e.contact2)==="open"&&!a?1:0,c=n(e.tilt)||s(e.tilt)==="tilted"||s(e.contact)==="tilted",u=c?1:0,h=e.tiltAngle?Number(i.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(h)){let g=(h-(e.tiltOffset??0))*(e.tiltInvert?-1:1);u=Math.min(1,Math.max(0,g/(e.tiltMax||15))),u<.08&&(u=0),c=u>0}let d=s(e.contact)==="open"&&!c?1:0,f=null,p=e.cover?i.states[e.cover]:void 0,_=bS(i,e.position);if(_!==null)f=e.positionInverted?_:1-_;else if(p&&!Qs(p)){let g=p.attributes.current_position;typeof g=="number"?f=1-Math.min(100,Math.max(0,g))/100:f=p.state==="closed"?1:p.state==="opening"||p.state==="closing"?.5:0}else e.cover&&(f=0);if(t==="door"){let g=s(e.contact);return{open:g===null?e.shut?0:_S:g==="closed"?0:1,open2:s(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:f,sensed:g!==null||f!==null}}if(t==="garage"){let g=s(e.contact),m=f!==null||g!==null;return f===null&&(f=g===null||g==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:f,sensed:m}}return{open:d,open2:l,tilt:u,tilt2:a?1:0,cover:f,sensed:r(e.contact)||r(e.tilt)||Number.isFinite(h)}}function bS(i,e){let t=e?i.states[e]:void 0;if(!t||Qs(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function n0(i,e){return!i||e==null||e===1?i:{...i,level:Math.max(.02,Math.min(1.5,i.level*e))}}function eu(i,e,t){let n=t?e.states[t]:void 0,r=t===i.entity&&i.color_entity&&i.color_entity!=="none"?e.states[i.color_entity]:void 0;return n?n0(e0(Pd(n,r),i.only_color),i.glow_scale):null}function Jn(i){return!!i&&!["unknown","unavailable",""].includes(i.state.toLowerCase())}function nr(i,e){let t=e?Object.prototype.hasOwnProperty.call(i.bindings??{},e)?i.bindings?.[e]:e==="status"?i.status??i.entity:e==="power"?i.power:e==="door_left"?i.door_left:e==="door_right"?i.door_right:null:i.status??i.entity;return t&&t!=="none"?t:null}function kd(i,e){if(!Number.isFinite(i))return null;try{let t=new Intl.DateTimeFormat("en-GB",{timeZone:e??"UTC",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(i),n=Number(t.find(o=>o.type==="hour")?.value),r=Number(t.find(o=>o.type==="minute")?.value);return Number.isFinite(n+r)?{hour:n,minute:r,text:`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`}:null}catch{return null}}function i0(i,e,t,n){if(i.kind==="digital"||i.kind==="analog")return kd(n.time,t.config?.time_zone)?.text??"--:--";let r=nr(e,i.binding),o=r?t.states[r]:void 0;if(!Jn(o))return"--:--";let s=o.state,a=String(o.attributes.unit_of_measurement??"");if(i.kind==="duration"){let l={s:1,min:60,h:3600}[i.unit??a],c=s.trim()?Number(s):NaN;if(!l||!Number.isFinite(c)||c<0)return"--:--";let u=Math.round(c*l/60);return`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`}return`${s}${a?` ${a}`:""}`}function Cd(i,e,t){let n=nr(e,i.status?.binding),r=n?t.states[n]:void 0;if(!i.status||!Jn(r))return{color:i.color,visible:i.visible!==!1};let o=(s,a)=>s&&Object.prototype.hasOwnProperty.call(s,a)?s[a]:void 0;return{color:o(o(e.status_colors,i.id),r.state)??o(i.status.colors,r.state)??i.color,visible:o(i.status.visibility,r.state)??i.visible!==!1}}function Id(i,e,t){let n=e.motion_config?.[i.id],r=i.binding?nr(e,i.binding):["fan","washer","dryer"].includes(i.kind)?nr(e):null,o=i.tilt_binding?nr(e,i.tilt_binding):null,s=i.motor_binding?nr(e,i.motor_binding):null,a=i.tilt_angle_binding?nr(e,i.tilt_angle_binding):null,l=r?t.states[r]:void 0;if(["fan","washer","dryer"].includes(i.kind)){let w=Jn(l)&&["on","running","active","washing","drying","heating","cooling"].includes(l.state.toLowerCase());return{open:0,tilt:0,known:Jn(l),running:w}}let c=Jn(l)&&Qc(l)!==null,u=o?t.states[o]:void 0,h=Qc(l)===(n?.contact_invert?"open":"closed"),d=h&&Jn(u)&&["on","open","tilted"].includes(u.state),f=t0(t,{contact:r,tilt:o,tiltAngle:a,cover:null,contactInvert:n?.contact_invert,tiltMax:n?.tilt_max,tiltInvert:n?.tilt_invert},i.kind==="window"?"window":"door"),p=s?t.states[s]:void 0,_=p?.attributes.current_position;if(Jn(p)&&typeof _=="number"&&Number.isFinite(_))return{open:Math.min(1,Math.max(0,_/100)),tilt:f.tilt,known:!d&&!(c&&h&&_>1),running:!1};if(Jn(p)&&["open","opening","closed","closing"].includes(p.state))return{open:["open","opening"].includes(p.state)?1:0,tilt:f.tilt,known:!d,running:!1};let g=a?t.states[a]:void 0,m=Jn(u)&&["on","tilted"].includes(u.state)||Jn(g)&&Number.isFinite(Number(g.state))&&f.tilt>0;return{open:f.open,tilt:f.tilt,known:!d&&(!!c||!!m)&&(!o||Jn(u)),running:!1}}function r0(i,e,t,n){if(!n.historical||!n.history)return null;let r=[i.binding,i.tilt_binding,i.motor_binding,i.tilt_angle_binding].filter(c=>!!c).map(c=>nr(e,c)).filter(c=>!!c),o=n.history(r,n.time-7*864e5,n.time),s=r.flatMap(c=>(o[c]??[]).filter(u=>u.lu*1e3<=n.time).map(u=>({id:c,row:u}))).sort((c,u)=>c.row.lu-u.row.lu),a={},l=null;for(let{id:c,row:u}of s){a[c]={entity_id:c,state:u.s,attributes:{}};let h=Id(i,e,{...t,states:a});h.known&&(l=h)}return l}var Eo=class{states=new Map;last=null;begin(e){this.last&&(this.last.historical!==e.historical||e.historical&&(e.time<this.last.time||e.seek!==this.last.seek))&&this.states.clear(),this.last={...e}}resolve(e,t){return t.known?(this.states.set(e,t),t):{...this.states.get(e)??{open:0,tilt:0,running:!1,known:!1},known:!1,running:!1}}};var o0={body:1516088,fabric:1713732,cushion:2373217,wood:1647420,white:1911110,metal:2767456,dark:725279,glass:1849938,plant:1191982,pot:1910336,accent:2854835},s0=i=>i.startsWith("#")?parseInt(i.slice(1),16):o0[i]??o0.body;function vS(i,e){let t=document.createElement("canvas");t.width=512,t.height=256;let n=new Vn(t),r=new Be(new Gn(i,e),new Qe({map:n,transparent:!0,side:ct,depthWrite:!1}));return r.renderOrder=7,{mesh:r,texture:n}}var tu=class{group=new kt;items=[];memory=new Eo;hass=null;moment={time:NaN,historical:!1,playing:!0,seek:0};global=!0;timer;initial=!0;seconds=0;plane=new yn(new V(0,-1,0),0);clipped=!1;material;invalidate;constructor(e,t,n,r){this.material=t.clone(),this.material.onBeforeCompile=t.onBeforeCompile,this.material.customProgramCacheKey=t.customProgramCacheKey,this.invalidate=n,r&&(this.memory=r);for(let o of e.furniture){let s=vr(o);if(!s)continue;let a=new Set([...s.motions??[],...s.spots??[]].flatMap(f=>f.parts)),l=s.parts.filter(f=>f.status||f.id&&a.has(f.id));if(!l.length&&!s.displays?.length)continue;let c=new kt;c.position.set(o.x,Ct(e,o)+o.h/2,o.z),c.rotation.set((o.rotation_x??0)*Math.PI/180,-o.rotation*Math.PI/180,(o.rotation_z??0)*Math.PI/180,"YZX"),c.scale.x=o.mirror?-1:1,this.group.add(c);let u=l.map(f=>{let p=gg({...s,parts:[f]},o);p.translate(0,-o.h/2,0);let _=new Be(p,f.status?new Qe({vertexColors:!0,side:ct}):this.material);return c.add(_),_.userData.furnitureId=o.id,{part:f,mesh:_,key:"",baseColors:Float32Array.from(p.getAttribute("color").array)}}),h=(s.motions??[]).map(f=>{let p=new kt,[_,g,m]=f.pivot;p.position.set(_*o.w,(g-.5)*o.h,m*o.d),c.add(p);for(let w of u.filter(y=>y.part.id&&f.parts.includes(y.part.id)))w.mesh.position.copy(p.position).negate(),p.add(w.mesh);return{definition:f,group:p,state:{open:0,tilt:0,known:!1,running:!1},shown:0,tilt:0}});for(let f of s.spots??[]){let p=new kt,_=f.pivot??f.position;p.position.set(_[0]*o.w,(_[1]-.5)*o.h,_[2]*o.d);let g=o.spot_config?.[f.id];p.rotation.set((g?.rotation_x??0)*Math.PI/180,-(g?.rotation_y??0)*Math.PI/180,(g?.rotation_z??0)*Math.PI/180,"YZX"),c.add(p);for(let m of u.filter(w=>w.part.id&&f.parts.includes(w.part.id)))m.mesh.position.copy(p.position).negate(),p.add(m.mesh)}let d=(s.displays??[]).map(f=>{let p=vS(f.size[0]*o.w,f.size[1]*o.h),[_,g,m]=f.position;p.mesh.userData.furnitureId=o.id,f.kind==="analog"&&(p.texture.image.height=512),p.mesh.position.set(_*o.w,(g-.5)*o.h,m*o.d),p.mesh.rotation.set(...(f.rotation??[0,0,0]).map(y=>y*Math.PI/180),"YZX");let w=h.find(y=>y.definition.id===f.parent)?.group;return w?(p.mesh.position.sub(w.position),w.add(p.mesh)):c.add(p.mesh),{...p,field:f,key:""}});this.items.push({f:o,group:c,parts:u,motions:h,displays:d})}}meshes(){return this.items.flatMap(e=>[...e.parts.map(t=>t.mesh),...e.displays.map(t=>t.mesh)]).filter(e=>e.visible)}clip(e,t,n){let r=e!==null;this.plane.constant=t+(e??0),this.material.opacity=n;for(let o of this.items.flatMap(s=>[...s.parts.map(a=>a.mesh),...s.displays.map(a=>a.mesh)])){let s=o.material;s.opacity=n,s.transparent=!0,r!==this.clipped&&(s.clippingPlanes=r?[this.plane]:null,s.needsUpdate=!0)}this.clipped=r}update(e,t,n){let r=this.initial||t.historical&&(t.seek!==this.moment.seek||!this.moment.historical);this.initial=!1,this.hass=e,this.moment={...t},this.global=n,this.memory.begin(t);for(let o of this.items){for(let s of o.parts){let a=Cd(s.part,o.f,e),l=JSON.stringify(a);if(s.mesh.visible=a.visible,s.key!==l||s.part.glow||o.motions.some(c=>c.definition.parts.includes(s.part.id??"")&&c.state.running)){s.key=l;let c=new j(s0(a.color)),u=s.mesh.geometry.getAttribute("color");if(a.color===s.part.color)u.array.set(s.baseColors);else for(let h=0;h<u.count;h++)u.setXYZ(h,c.r,c.g,c.b);u.needsUpdate=!0}}for(let s of o.motions){let a=o.f.id+":"+s.definition.id,l=Id(s.definition,o.f,e);if(!l.known&&t.historical&&r){let c=r0(s.definition,o.f,e,t);c&&this.memory.resolve(a,c)}s.state=this.memory.resolve(a,l),(r||!n||o.f.animations===!1)&&(s.shown=s.state.open,s.tilt=s.state.tilt,this.pose(s,o.f))}for(let s of vr(o.f)?.spots??[]){let a=o.f.spot_config?.[s.id]?.entity??(s.binding?o.f.bindings?.[s.binding]:null)??o.f.entity,l=eu(o.f,e,a);if(l)for(let c of o.parts.filter(u=>u.part.glow&&s.parts.includes(u.part.id??""))){let u=c.mesh.geometry.getAttribute("color"),h=new j(...l.color.map(d=>Math.min(1,d*(.55+.45*l.level))));for(let d=0;d<u.count;d++)u.setXYZ(d,h.r,h.g,h.b);u.needsUpdate=!0}}this.drawDisplays(o)}this.scheduleClock(),this.invalidate()}drawDisplays(e){if(this.hass)for(let t of e.displays){let n=i0(t.field,e.f,this.hass,this.moment);if(n===t.key)continue;t.key=n;let r=t.texture.image,o=r.getContext("2d");if(o.clearRect(0,0,512,r.height),(t.field.kind!=="analog"||t.field.background)&&(o.fillStyle=t.field.background??"#101827",o.fillRect(0,0,512,r.height)),o.fillStyle=t.field.color??"#ffffff",t.field.kind==="analog"){let s=kd(this.moment.time,this.hass.config?.time_zone)??{hour:10,minute:10},a=(l,c,u)=>{o.save(),o.translate(256,256),o.rotate(l),o.strokeStyle=t.field.color??"#ffffff",o.lineWidth=u,o.beginPath(),o.moveTo(0,10),o.lineTo(0,-c),o.stroke(),o.restore()};a((s.hour%12+s.minute/60)*Math.PI/6,144,9),a(s.minute*Math.PI/30,204,5)}else{o.textAlign="center",o.textBaseline="middle",o.font="bold 100px sans-serif";let s=o.measureText(n).width;s>480&&(o.font=`bold ${Math.max(20,Math.floor(100*480/s))}px sans-serif`),o.fillText(n,256,128)}t.texture.needsUpdate=!0}}scheduleClock(){this.timer&&(clearTimeout(this.timer),this.timer=void 0),!(this.moment.historical||!this.items.some(e=>e.displays.some(t=>["analog","digital"].includes(t.field.kind))))&&(this.timer=setTimeout(()=>{this.timer=void 0,this.moment.time=Date.now();for(let e of this.items)this.drawDisplays(e);this.invalidate(),this.scheduleClock()},6e4-Date.now()%6e4+10))}pose(e,t){let n=e.definition.kind,r=t.motion_config?.[e.definition.id],o=r?.direction??e.definition.direction??1;if(n==="slide"){let a=e.definition.axis??"x",l=a==="x"?0:a==="y"?1:2,c=a==="x"?t.w:a==="y"?t.h:t.d;e.group.position[a]=e.definition.pivot[l]*c-(a==="y"?t.h/2:0)+(r?.travel_m??(e.definition.travel??1)*c)*e.shown*o;return}let s=r?.angle??e.definition.angle;if(e.group.rotation[e.definition.axis??"y"]=-(s==null?n==="window"?1.2:1.5:s*Math.PI/180)*e.shown*o,n==="window"){let a=r?.tilt_angle??e.definition.tilt_angle;e.group.rotation.x=-(a==null?.2:a*Math.PI/180)*e.tilt}}step(e){this.seconds+=e/1e3;let t=!1;for(let n of this.items)for(let r of n.motions){let o=this.global&&n.f.animations!==!1;if(["fan","washer","dryer"].includes(r.definition.kind)){if(!o||!r.state.running||this.moment.historical&&!this.moment.playing)continue;if(r.definition.kind==="fan")r.group.rotation[r.definition.axis??"z"]+=e*.008;else{let c=.75+.08*Math.sin(this.seconds);for(let u of n.parts.filter(h=>h.part.id&&r.definition.parts.includes(h.part.id))){let h=this.hass?Cd(u.part,n.f,this.hass):null,d=h&&u.part.status?new j(s0(h.color)).multiplyScalar(c):new j(.3*c,.85*c,c),f=u.mesh.geometry.getAttribute("color");for(let p=0;p<f.count;p++)f.setXYZ(p,d.r,d.g,d.b);f.needsUpdate=!0}}t=!0;continue}if(!o){this.pose(r,n.f);continue}let s=1-Math.exp(-e/160),a=r.state.open-r.shown,l=r.state.tilt-r.tilt;Math.abs(a)<.003&&Math.abs(l)<.003?(r.shown=r.state.open,r.tilt=r.state.tilt):(r.shown+=a*s,r.tilt+=l*s,t=!0),this.pose(r,n.f)}return t}dispose(){this.timer&&clearTimeout(this.timer);for(let e of this.items){for(let t of e.parts)t.mesh.geometry.dispose(),t.mesh.material!==this.material&&t.mesh.material.dispose();for(let t of e.displays)t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.texture.dispose()}this.group.removeFromParent(),this.items=[],this.material.dispose()}};function a0(i,e,t){let n=_t(i.type),r=Ct(e,i);return(n?.spots??[]).flatMap(o=>{let s=i.spot_config?.[o.id],a=s?.entity??(o.binding?i.bindings?.[o.binding]:null)??i.entity,l=a?t.states[a]:void 0;if(!l||l.state!=="on")return[];let c=eu(i,t,a);if(!c)return[];let u=o.pivot??o.position,h=new V(o.position[0]*i.w,o.position[1]*i.h,o.position[2]*i.d),d=new V(u[0]*i.w,u[1]*i.h,u[2]*i.d),f=new Un((s?.rotation_x??0)*Math.PI/180,-(s?.rotation_y??0)*Math.PI/180,(s?.rotation_z??0)*Math.PI/180,"YZX"),p=new V(...o.direction).applyEuler(f).normalize();h.sub(d).applyEuler(f).add(d),h.y-=i.h/2,i.mirror&&(h.x*=-1,p.x*=-1);let _=new Un((i.rotation_x??0)*Math.PI/180,-i.rotation*Math.PI/180,(i.rotation_z??0)*Math.PI/180,"YZX");h.applyEuler(_).add(new V(i.x,r+i.h/2,i.z)),p.applyEuler(_).normalize();let g=e.rooms.findIndex(m=>Oe([i.x,i.z],m.points));return[{x:h.x,y:h.y,z:h.z,direction:p.toArray(),angle:s?.beam_angle??i.beam_angle??o.angle??60,color:c.color,level:c.level,kind:"spot",room:g<0?e.rooms.length:g}]})}function iu(i,e){return(t,n)=>{let r=e?.(t,n);if(r!=null)return r;let o=i.rooms.find(s=>Oe([t,n],s.points));return o?ft(i,o)+Ln(i,o):null}}function xS(i,e,t,n,r=iu(t)){let o=5;e.y<-.001&&(o=Math.min(o,Math.max(.01,(i.y-bn(t,i.x,i.z)-.02)/-e.y)));for(let c of n){let u=c.b[0]-c.a[0],h=c.b[1]-c.a[1],d=e.x*h-e.z*u;if(Math.abs(d)<1e-8)continue;let f=c.a[0]-i.x,p=c.a[1]-i.z,_=(f*h-p*u)/d,g=(f*e.z-p*e.x)/d,m=i.y+_*e.y;if(_<=.01||_>=o||g<0||g>1||m<0||m>c.h)continue;let w=g*Math.hypot(u,h);c.gaps.some(y=>w>=y.s0&&w<=y.s1&&m>=y.y0&&m<=y.y1)||(o=_)}let s=0,a=r(i.x,i.z),l=a!=null&&i.y<=a+.001;for(let c=.025;c<=o+1e-9;c+=.025){let u=r(i.x+e.x*c,i.z+e.z*c),h=i.y+e.y*c;if(u!=null&&l&&h>=u){let d=s,f=c;for(let p=0;p<12;p++){let _=(d+f)/2,g=r(i.x+e.x*_,i.z+e.z*_);g!=null&&i.y+e.y*_>=g?f=_:d=_}o=Math.max(0,f-.002);break}l=u!=null&&h<=u,a=u,s=c}return o}function l0(i,e,t,n,r){if(!e.direction)return;let o=new V(e.x,e.y,e.z),s=new V(...e.direction).normalize(),a=Math.abs(s.y)<.95?new V(0,1,0):new V(1,0,0),l=new V().crossVectors(s,a).normalize(),c=new V().crossVectors(s,l).normalize(),u=(e.angle??60)*Math.PI/360,h=new j(...e.color.map(p=>p*.09*e.level)),d=new j(0,0,0),f=p=>{let _=p*Math.PI/8,g=s.clone().multiplyScalar(Math.cos(u)).addScaledVector(l,Math.cos(_)*Math.sin(u)).addScaledVector(c,Math.sin(_)*Math.sin(u)).normalize();return o.clone().addScaledVector(g,xS(o,g,t,n,r)).toArray()};for(let p=0;p<16;p++)i.tri(o.toArray(),f(p),f(p+1),h,d,d)}function yS(i,e){let t=_t(e);if(!t)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:e,x:i.x,z:i.z,rotation:i.rotation,rotation_x:i.rotation_x,rotation_z:i.rotation_z,mount_y:i.mount_y,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}function zd(i,e){if(!i.furniture.some(n=>n.type==="parking"&&e.has(n.id)))return i;let t=i.furniture.flatMap(n=>{let r=n.type==="parking"?e.get(n.id):void 0,o=r?yS(n,r):null;return o?[n,o]:[n]});return{...i,furniture:t}}function Nd(i,e){let t=[],n=[],r=[],o=[],s=[],a=[],l=[];for(let{face:u,field:h}of i){let d=t.length/3,f=h.portrait===!1?10:6,p=h.portrait===!1?6:10,_=wS(h.id)%1e3/1e3;for(let m of Hs(u,h)){let[w,y,b,x]=m.corners.map(v=>[v[0]+u.n[0]*.006,v[1]+u.n[1]*.006-e,v[2]+u.n[2]*.006]),M=Wc(w,y,b,u.n),A=[[w,0,0],[y,1,0],[b,1,1],[x,0,1]];for(let v of[0,1,2,0,2,3]){let[S,T,P]=A[v];t.push(S[0],S[1],S[2]),n.push(T,P),r.push(f,p),o.push(_),a.push(...M),l.push(...w)}}let g=t.length/3-d;g&&s.push({id:h.id,start:d,count:g})}if(!t.length)return null;let c=new We;return c.setAttribute("position",new ye(t,3)),c.setAttribute("uv",new ye(n,2)),c.setAttribute("aCells",new ye(r,2)),c.setAttribute("aPhase",new ye(o,1)),c.setAttribute("aLevel",new ye(new Float32Array(t.length/3),1)),{geometry:Ws(c,a,l),ranges:s}}function ea(i,e){let t=i.geometry.getAttribute("aLevel"),n=t.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,e.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return t.needsUpdate=!0,r}function Bd(i){let e=new Qe({transparent:!0,blending:Dt,depthWrite:!1,side:ct});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},e.customProgramCacheKey=()=>"fp3d-solar-live",e}function wS(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619)>>>0;return e}var u0=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,MS=`
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
`,SS=u0,TS=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function c0(i,e){let t=[];for(let[r,o,s]of pn(i))for(let a of[r,s,o])t.push(i[a][0],e,i[a][1]);let n=new We;return n.setAttribute("position",new ye(t,3)),n}function h0(i,e){let t=new kt;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new Be(c0(n.points,s),new ln({uniforms:{uTime:e,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:u0,fragmentShader:MS,transparent:!0,blending:Dt,depthWrite:!1,side:ct}));l.renderOrder=5,l.frustumCulled=!1,t.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,u,h]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],d=c-l>=h-u,f=Math.min(1,n.cover),p=d?[[l-.1,u-.1],[l+(c-l)*f,u-.1],[l+(c-l)*f,h+.1],[l-.1,h+.1]]:[[l-.1,u-.1],[c+.1,u-.1],[c+.1,u+(h-u)*f],[l-.1,u+(h-u)*f]],_=yo(n.points,p);if(_.length>=3){let g=new Be(c0(_,n.y+.03),new ln({uniforms:{uAxis:{value:d?[1,0]:[0,1]}},vertexShader:SS,fragmentShader:TS,transparent:!0,side:ct}));g.renderOrder=6,t.add(g);let m=[];for(let y=0;y<_.length;y++){let b=_[y],x=_[(y+1)%_.length];m.push(b[0],n.y+.032,b[1],x[0],n.y+.032,x[1])}let w=new We;w.setAttribute("position",new ye(m,3)),t.add(new Zt(w,new qt({color:5995775,transparent:!0,opacity:.6})))}}}return t}function d0(i){for(let e of i.children)e.geometry?.dispose(),e.material?.dispose?.();i.clear()}var f0=["neon","blueprint","day"];function p0(i){return f0.indexOf(i)}var ru={value:new V(.22,.88,1)},ou={value:0};function m0(i){let e=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!e)return null;let t=parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var AS=`
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
`;function Xt(i,e,t=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=e,o.uniforms.uAccent=ru,o.uniforms.uAccentOn=ou,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${AS}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${t?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${t?"l":"s"}`,i}function Ro(i){return i==="day"?Vi:Dt}var ta={open:0,open2:0,tilt:0,tilt2:0,cover:null},g0=2043986,_0=2769520,ES=2242399,Od=1845831,RS=1450554,Si=16758087,PS=1846349,kS=2572395,CS=1120816,IS=1845831,Ud=5995775,Vd=9085695,Cr=Xe(3662079,.08);function LS(i,e){let t=Math.min(.4,Math.max(.02,i-.12)),n=Math.min(.3,Math.max(0,(e-.1)/2));return{x0:(i-t)/2,x1:(i+t)/2,y0:n,y1:e-n}}function FS(){let e=_t("pack:local.v2.kuechenmoebel_farben:kitchen_dishwasher_panel_60")?.parts.find(t=>t.id==="p003")?.color;return e?.startsWith("#")?parseInt(e.slice(1),16):10778952}function su(i,e,t,n,r,o,s,a,l,c,u){let h=(f,p,_)=>e(f,p,_),d=[[h(t,r,a),h(n,r,a),h(n,o,a),h(t,o,a),c],[h(t,r,s),h(n,r,s),h(n,o,s),h(t,o,s),Xe(l.getHex(),.6)],[h(t,o,s),h(n,o,s),h(n,o,a),h(t,o,a),l],[h(t,r,s),h(n,r,s),h(n,r,a),h(t,r,a),Xe(l.getHex(),.85)],[h(t,r,s),h(t,o,s),h(t,o,a),h(t,r,a),Xe(l.getHex(),.92)],[h(n,r,s),h(n,o,s),h(n,o,a),h(n,r,a),Xe(l.getHex(),.92)]];for(let[f,p,_,g,m]of d)i.tri(f,p,_,m,m,m,void 0,u),i.tri(f,_,g,m,m,m,void 0,u)}function st(i,e,t,n,r,o,s,a,l,c,u,h){if(a<=u+1e-6)return su(i,e,t,n,r,o,s,a,l,c,Ze);if(s>=u-1e-6)return su(i,e,t,n,r,o,s,a,l,c,h);su(i,e,t,n,r,o,s,u,l,c,Ze),su(i,e,t,n,r,o,u,a,l,c,h)}function Ti(i,e,t,n,r,o,s,a,l,c,u=0){let h=(d,f,p)=>{let _=b=>u?(s-b)/u:.5,g=e(t,r,d),m=e(n,r,d),w=e(n,r,f),y=e(t,r,f);i.tri(g,m,w,a,a,a,[0,_(d),1,_(d),1,_(f)],p),i.tri(g,w,y,a,a,a,[0,_(d),1,_(f),0,_(f)],p)};s<=l+1e-6?h(o,s,Ze):o>=l-1e-6?h(o,s,c):(h(o,l,Ze),h(l,s,c))}function DS(i,e,t,n,r,o,s,a,l,c){let u=e(t,r,s),h=e(n,r,s),d=e(n,o,s),f=e(t,o,s),p=0,_=(o-r)/c;i.tri(u,h,d,a,a,a,[0,p,1,p,1,_],l),i.tri(u,d,f,a,a,a,[0,p,1,_,0,_],l)}function b0(i,e,t,n=!1){let r=new je,o=new je,s=new je(!0),a=new j(g0),l=new j(_0),c=[],u=[],h=[];for(let d of i){let f=r.count,p=o.count,_=s.count,g=e.get(d.opening.id)??ta,m=d.width,w=d.opening.type==="door"||d.opening.type==="garage"?d.sill:0,y=d.sill-w,b=d.top-w,x=t-w,{bucket:M}=d,A=(P,C,R)=>[d.start[0]+d.axis[0]*P+d.toRoom[0]*C,R+w,d.start[1]+d.axis[1]*P+d.toRoom[1]*C],v=(d.faceRoom-d.faceOut)/2,S=d.opening.mark==="closed",T=d.opening.type==="door"&&xr(d.opening,d.exterior)==="passage";if(d.opening.type==="door"&&!T||d.opening.type==="garage"){let P=-d.faceOut-.012,C=d.faceRoom+.012,R=d.opening.type==="garage"&&(S?!!g.sensed&&(g.cover??1)>=.95:(g.cover??1)<.95),E=R?Xe(Si,.8):new j(g0),I=R?Xe(Si,1):new j(_0);st(r,A,-.045,.02,P,C,0,b+.045,E,I,x,M),st(r,A,m-.02,m+.045,P,C,0,b+.045,E,I,x,M),st(r,A,.02,m-.02,P,C,b-.02,b+.045,E,I,x,M)}if(d.opening.type==="door"){let P=xr(d.opening,d.exterior),C=Am(P),R=d.opening.swing==="out"?-1:1,E=R>0?d.faceRoom:-d.faceOut,I=d.opening.leaves===2,L=.02,N=m-.02,B=Tm(m,P,d.hingeAtStart,d.opening);if(B){let le=-d.faceOut-.012,H=d.faceRoom+.012,W=E-R*(C?.06:.04)/2,re=.06;for(let[ce,$]of B.panels)st(r,A,ce,ce+re,le,H,.02,b-.02,a,l,x,M),st(r,A,$-re,$,le,H,.02,b-.02,a,l,x,M),st(r,A,ce+re,$-re,le,H,.02,.12,a,l,x,M),Ti(o,A,ce+re,$-re,W,.12,b-.02,Cr,x,M);L=B.x0,N=B.x1}let D=I?(N-L)/2-.004:N-L,O=C?.06:.04;C&&(st(r,A,.02,m-.02,-d.faceOut-.02,d.faceRoom,0,.02,new j(Od),l,x,M),d.exterior&&P!=="front_slot"&&st(r,A,m/2-.08,m/2+.08,-d.faceOut-.1,-d.faceOut,b+.1,b+.17,Xe(Si,.55),Xe(Si,.85),x,Ze));let U=T?[]:[[d.hingeAtStart,g.open]];I&&!T&&U.push([!d.hingeAtStart,g.open2??0]);let Z=P==="sliding_glass",q=P==="sliding_wood",ae=Z||q,ie=P==="sliding"||ae;if(ae){let le=E+R*.055;st(r,A,L-(d.hingeAtStart||I?D:0),N+(!d.hingeAtStart||I?D:0),le-.025,le+.025,b+.025,b+.075,new j(Ud),new j(Vd),x,M)}for(let[le,H]of U){let W=Math.min(1,Math.max(0,H)),re=ie?0:W*1.5,ce=ie?W*D:0,$=(nt,mt,K)=>{let Vt=nt*Math.cos(re)-mt*Math.sin(re)-ce,gt=E+R*(mt*Math.cos(re)+nt*Math.sin(re)+(ae?.055:ce?.05:0));return A(le?L+Vt:N-Vt,gt,K)},he=W>.05?Ze:M,De=S?!!g.sensed&&W<.05:W>.9,ze=q&&n?FS():null,Pe=ze!==null?new j(ze):De?Xe(Si,.7):new j(C?CS:PS),ke=ze!==null?Xe(ze,1.1):De?Xe(Si,.9):new j(C?IS:kS);if(P==="front_slot"){let nt=LS(D,b-y),mt=y+nt.y0,K=y+nt.y1;st(r,$,0,nt.x0,-O,0,.01,b-.01,Pe,ke,x,he),st(r,$,nt.x1,D,-O,0,.01,b-.01,Pe,ke,x,he),st(r,$,nt.x0,nt.x1,-O,0,.01,mt,Pe,ke,x,he),st(r,$,nt.x0,nt.x1,-O,0,K,b-.01,Pe,ke,x,he),Ti(o,$,nt.x0,nt.x1,-O/2,mt,K,Cr,x,he)}else P==="glass"||Z?(st(r,$,0,.05,-O,0,.01,b-.01,Pe,ke,x,he),st(r,$,D-.05,D,-O,0,.01,b-.01,Pe,ke,x,he),st(r,$,.05,D-.05,-O,0,.01,.12,Pe,ke,x,he),st(r,$,.05,D-.05,-O,0,b-.08,b-.01,Pe,ke,x,he),Ti(o,$,.05,D-.05,-O/2,.12,b-.08,Cr,x,he)):st(r,$,0,D,-O,0,.01,b-.01,Pe,ke,x,he);P==="front_glass"?Ti(o,$,.12,D-.12,.001,b*.55,b-.18,Cr,x,he):C&&P!=="front_slot"&&Ti(o,$,.1,.18,.001,.3,b-.3,Cr,x,he);let Ge=Math.min(1.05,b*.5),at=C?.3:ae?.18:.012,wt=C||ae?D-.11:D-.16,Bt=C||ae?D-.08:D-.05;st(r,$,wt,Bt,.004,.05,Ge-at,Ge+at,new j(Ud),new j(Vd),x,he),st(r,$,wt,Bt,-O-.05,-O-.004,Ge-at,Ge+at,new j(Ud),new j(Vd),x,he)}}else if(d.opening.type==="garage"){let P=Math.min(1,Math.max(0,g.cover??1)),C=new j(13951231),R=d.faceRoom-.03,E=b*(1-P);P>.01&&Ti(s,A,.02,m-.02,R,E,b,C,x,M,.5);let I=(1-P)*b;I>.01&&DS(s,A,.02,m-.02,R,R+I,b+.03,C,M,.5)}else if(xr(d.opening,d.exterior)==="glass_wall"){st(r,A,0,.04,v-.025,v+.025,y,b,a,l,x,M),st(r,A,m-.04,m,v-.025,v+.025,y,b,a,l,x,M),st(r,A,.04,m-.04,v-.025,v+.025,y,y+.03,a,l,x,M),st(r,A,.04,m-.04,v-.025,v+.025,b-.04,b,a,l,x,M);let R=Math.max(1,Math.round((m-2*.04)/.9)),E=(m-2*.04)/R;for(let I=1;I<R;I++){let L=.04+I*E;st(r,A,L-.02,L+.02,v-.025,v+.025,y+.03,b-.04,a,l,x,M)}for(let I=0;I<R;I++){let L=.04+I*E+(I?.02:0),N=.04+(I+1)*E-(I<R-1?.02:0);Ti(o,A,L,N,v,y+.03,b-.04,Cr,x,M)}}else{st(r,A,0,.06,v-.035,v+.035,y,b,a,l,x,M),st(r,A,m-.06,m,v-.035,v+.035,y,b,a,l,x,M),st(r,A,.06,m-.06,v-.035,v+.035,y,y+(y>.05?.06:.03),a,l,x,M),st(r,A,.06,m-.06,v-.035,v+.035,b-.06,b,a,l,x,M),y>.3&&(st(r,A,-.04,m+.04,v+.035,d.faceRoom+.07,y-.03,y,new j(Od),l,x,M),d.exterior&&st(r,A,-.03,m+.03,-d.faceOut-.06,v-.035,y-.04,y-.02,new j(Od),l,x,M));let R=.055,E=y+(y>.05?.06:.03),I=b-.06,L=v+.035,N=v+.035+.06,D=d.opening.leaves===2?[{atStart:d.hingeAtStart,x0:d.hingeAtStart?.06:m/2,x1:d.hingeAtStart?m/2:m-.06,open:g.open,tilt:g.tilt},{atStart:!d.hingeAtStart,x0:d.hingeAtStart?m/2:.06,x1:d.hingeAtStart?m-.06:m/2,open:g.open2??0,tilt:g.tilt2??0}]:[{atStart:d.hingeAtStart,x0:.06,x1:m-.06,open:g.open,tilt:g.tilt}];for(let O of D){let U=O.open>.02||O.tilt>.02,Z=S?!!g.sensed&&!U:U,q=Z?Xe(Si,.75):new j(ES),ae=Z?Xe(Si,.95):l,ie=O.x0,le=O.x1,H=le-ie,W=O.open*1.2*(d.opening.swing==="out"?-1:1),re=O.tilt*.2,ce=(he,De,ze)=>{let Pe=ze-E,ke=De+Pe*Math.sin(re),Ge=E+Pe*Math.cos(re),at=he*Math.cos(W)-(ke-L)*Math.sin(W);ke=L+(ke-L)*Math.cos(W)+he*Math.sin(W);let wt=O.atStart?ie+at:le-at;return A(wt,ke,Ge)},$=Math.abs(W)>.05?Ze:M;if(st(r,ce,0,R,L,N,E,I,q,ae,x,$),st(r,ce,H-R,H,L,N,E,I,q,ae,x,$),st(r,ce,R,H-R,L,N,E,E+R,q,ae,x,$),st(r,ce,R,H-R,L,N,I-R,I,q,ae,x,$),Ti(o,ce,R,H-R,(L+N)/2,E+R,I-R,Z?Xe(Si,.16):Cr,x,$),xr(d.opening,d.exterior)==="bars"){let he=(E+I)/2,De=(L+N)/2;st(r,ce,R,H-R,De-.012,De+.012,he-.012,he+.012,q,ae,x,$),st(r,ce,H/2-.012,H/2+.012,De-.012,De+.012,E+R,I-R,q,ae,x,$)}}}if(g.cover!==null){let P=-d.faceOut,C=b+.2;st(r,A,-.05,m+.05,P-.15,P,b,C,new j(RS),l,x,M);let R=Math.min(1,Math.max(0,g.cover));if(R>.01){let E=b-R*(b-y);Ti(s,A,0,m,P-.07,E,b,new j(16777215),x,M,.045)}}c.push({id:d.opening.id,start:f,end:r.count}),u.push({id:d.opening.id,start:p,end:o.count}),h.push({id:d.opening.id,start:_,end:s.count})}return{frames:r.geometry(),glass:o.geometry(),blinds:s.geometry(),frameTris:c,glassTris:u,blindTris:h}}var zS=.3,v0=2.6;function x0(i,e=.32,t=.22,n=[]){let r=i.map(x=>x[0]),o=i.map(x=>x[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),u=c-l>=a-s,h=t*.7071,d=x=>{let M=[x,[x[0]+t,x[1]],[x[0]-t,x[1]],[x[0],x[1]+t],[x[0],x[1]-t]],A=[...M,[x[0]+h,x[1]+h],[x[0]-h,x[1]+h],[x[0]+h,x[1]-h],[x[0]-h,x[1]-h]];return M.every(v=>Oe(v,i))&&!n.some(v=>A.some(S=>Oe(S,v)))},f=(x,M)=>d(u?[x,M]:[M,x]),p=(x,M)=>{let A=Math.ceil(Math.hypot(M[0]-x[0],M[1]-x[1])/.05);for(let v=1;v<A;v++)if(!d([x[0]+(M[0]-x[0])*v/A,x[1]+(M[1]-x[1])*v/A]))return!1;return!0},[_,g,m,w]=u?[s,a,l,c]:[l,c,s,a],y=[],b=!0;for(let x=_+t;x<=g-t+1e-6;x+=e){let M=null,A=null,v=.05;for(let C=m;C<=w+1e-6;C+=v)if(f(x,C)&&(A??=C),(!f(x,C)||C+v>w+1e-6)&&A!==null){let R=f(x,C)?C:C-v;(!M||R-A>M[1]-M[0])&&(M=[A,R]),A=null}if(!M||M[1]-M[0]<.2)continue;let S=C=>{let[R,E]=C?M:[M[1],M[0]];return[u?[x,R]:[R,x],u?[x,E]:[E,x]]},T=S(b),P=y[y.length-1];if(P&&n.length&&!p(P,T[0])){let C=S(!b);if(!p(P,C[0]))continue;T=C,b=!b}y.push(T[0],T[1]),b=!b}return y}function Hd(i,e=.7,t=12){return Array.from({length:t},(n,r)=>{let o=r/t*Math.PI*2;return[i[0]+Math.cos(o)*e,i[1]+Math.sin(o)*e]})}var Gd=i=>Math.atan2(Math.sin(i),Math.cos(i));function y0(i,e,t){let n=null;if(e.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(e.mode==="returning"||e.mode==="docked")n=e.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(e.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Gd(e.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),v0*t),!0)}let a=Math.atan2(r,o),l=Gd(a-i.heading);if(i.heading=Gd(i.heading+Math.sign(l)*Math.min(Math.abs(l),v0*t)),Math.abs(l)<.35){let c=Math.min(s,zS*t);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}var Fn=null,w0=new Map;function S0(i,e=0){let t=new je,n=new Ft,r=_t(i.type);if(r?.light)zc(t,r,{x:0,z:0,rotation:e,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Wd(t,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:e,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:e,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Fc(t,n,new je,o)}return{buf:t,lines:n}}function NS(i,e=180,t,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${e}|${n}`,o=w0.get(r);if(o)return o;t&&Ts(t),Fn??=new br({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Fn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Fn.setSize(e,e,!1),Fn.setClearColor(0,0);let{buf:s,lines:a}=S0(i),l=new Fi,c=new Be(s.geometry(),new Qe({vertexColors:!0,color:new j(n,n,n)})),u=new Zt(a.geometry(),new qt({vertexColors:!0,color:new j(n*1.8,n*1.8,n*1.8)}));l.add(c,u);let h=new dn().setFromObject(c),d=h.getCenter(new V),f=new ri(-1,1,1,-1,.01,100);f.position.copy(d).add(new V(.9,.75,1.3).normalize().multiplyScalar(20)),f.lookAt(d),f.updateMatrixWorld();let p=.05;for(let m of[h.min.x,h.max.x])for(let w of[h.min.y,h.max.y])for(let y of[h.min.z,h.max.z]){let b=new V(m,w,y).applyMatrix4(f.matrixWorldInverse);p=Math.max(p,Math.abs(b.x),Math.abs(b.y))}let _=p*1.12;f.left=-_,f.right=_,f.top=_,f.bottom=-_,f.updateProjectionMatrix(),Fn.render(l,f);let g=Fn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose(),w0.set(r,g),g}function BS(i,e,t=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(e)}|${t}|${r}`,s=M0.get(o);if(s)return s;n&&Ts(n);let{buf:a,lines:l}=S0(i,e),c=new Be(a.geometry(),new Qe({vertexColors:!0,color:new j(r,r,r)})),u=new Zt(l.geometry(),new qt({vertexColors:!0,color:new j(r*1.8,r*1.8,r*1.8)})),h=new dn().setFromObject(c);if(h.isEmpty())return null;let d=h.min.x,f=h.max.x,p=Math.max(0,h.min.y),_=h.max.y,g=Math.max(1,Math.min(1024,Math.round((f-d)*t))),m=Math.max(1,Math.min(1024,Math.round((_-p)*t)));Fn??=new br({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Fn.setPixelRatio(1),Fn.setSize(g,m,!1),Fn.setClearColor(0,0);let w=new Fi;w.add(c,u);let y=new ri(d,f,_,p,.01,100);y.position.set(0,0,50),y.lookAt(0,0,0),y.updateProjectionMatrix(),Fn.render(w,y);let b=Fn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose();let x={url:b,x0:d,x1:f,y0:p,y1:_};return M0.set(o,x),x}var M0=new Map;var lk={Group:kt,Mesh:Be,MeshBasicMaterial:Qe,CanvasTexture:Vn,Color:j,PlaneGeometry:Gn,BufferGeometry:We,Float32BufferAttribute:ye,DoubleSide:ct},A0={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},OS=2.4,E0=1.4,US=.22,R0=140,Kd=32,VS=500,P0=33,k0=.028,GS=.09,ut=2767456,HS=1911110,WS=1,Yd=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),au=450,C0=125,XS=.08,cu={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},KS=new j(1714765);function YS(){let e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency||8;return e<=3||t<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var qd=class{host;options;renderer;scene=new Fi;camera=new on(38,1,.1,400);controls;labels;root=new kt;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;roofDirection={value:new V(0,1,1)};keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";productColors=!1;customLayers=new Map;customMemories=new Map;customContext=null;themeUniform={value:0};sun=null;weather=null;rain=new Zt(new We,new qt({color:10471679,transparent:!0,opacity:.4,blending:Dt,depthWrite:!1}));snow=new to(new We,new dr({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Be(new qo(1,28),new Qe({color:16767370,transparent:!0,opacity:0,blending:Dt,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(e,t={}){this.host=e,this.options=t,this.explode=t.explode??!0,this.renderer=this.makeRenderer(t.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",e.append(this.labels),this.patternTexture=ZS(),this.blindTexture=JS(),this.haloTexture=QS(),this.ground=new Be(new Gn(1,1),new Qe({transparent:!1,blending:Dt,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(e)),this.resize()}get low(){return this.lowQuality}setParked(e){let t=[...e].map(([n,r])=>`${n}=${r}`).sort().join("|");t!==this.parkedSig&&(this.parkedSig=t,this.parked=e,this.building&&(this.rebuild(),this.invalidate()))}setStats(e){this.statsOn=e}setLabelInset(e){this.labelInset!==e&&(this.labelInset=e,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(e){this.orbitSpeed=e,this.orbitLast=0,this.invalidate()}setQuality(e){let t=this.renderer.domElement,n=this.makeRenderer(e);this.rebuildTier(),this.applyTierFlags(),t.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n,this.building&&this.rebuild();let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(e){Ts(e),this.building&&(this.rebuild(),this.invalidate())}setProductColors(e){e!==this.productColors&&(this.productColors=e,hm(e),this.building&&this.rebuild(),this.invalidate())}setCustomPackState(e,t){this.customContext={hass:e,moment:t};for(let n of this.customLayers.values())n.update(e,t,this.building?.settings.pack_animations!==!1);for(let n of this.floors)this.buildGlow(n),this.buildHalos(n)}setBuilding(e){let t=this.building===null;this.building=e,mm(e),this.rebuild(),t&&this.fit(0),this.invalidate()}setKeepView(e){this.keepView=e}setFloor(e,t=!0){this.keepNext=this.keepView&&e!==null&&this.floorId!==null&&e!==this.floorId,this.floorId=e,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!t),this.applyHighlight(),this.fit(t?700:0)}setFloorStack(e){e!==this.floorStack&&(this.floorStack=e,this.applyTargets(!1))}setKeepRoof(e){e!==this.keepRoof&&(this.keepRoof=e,this.invalidate())}setExplode(e){e!==this.explode&&(this.explode=e,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(e){if(this.roomId=e,this.labelsDirty=!0,this.applyHighlight(),!e){this.fit(700);return}let t=this.floors.find(u=>u.floor.rooms.some(h=>h.id===e)),n=t?.floor.rooms.find(u=>u.id===e);if(!t||!n)return;let r=n.start_view;if(r){let u=t.floor.elevation+t.ty,[h,d]=Yi(n.points),f=r.target??{x:h,y:.3,z:d};this.controls.flyTo({target:new V(f.x,f.y+u,f.z),radius:r.radius,phi:r.phi,theta:r.theta});return}let[o,s]=Yi(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new V(Math.max(...a)-Math.min(...a),t.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new V(o,t.floor.elevation+t.ty+ft(t.floor,n)+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(e){this.wallMode=e;for(let t of this.floors)this.buildLamps(t);this.invalidate()}setDevices(e){this.devices=e,this.labelsDirty=!0,this.effectFloors=new Set(e.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(e.map(n=>[n.id,n.floorId]));let t=new Set;for(let n of e){t.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let o=r.el;r.icon!==n.icon&&(r.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let s=n.caption??"";r.caption!==s&&(r.caption=s,o.querySelector(".fp3d-dev-name").textContent=s);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,o.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,o.title=n.name,o.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?o.style.setProperty("--fp3d-glow",c):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)t.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(e){let t=JSON.stringify([...e]);if(t!==this.roofWindowsKey){this.roofWindowsKey=t,this.roofWindows=e,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(e){this.anchorCb=e,this.labelsDirty=!0,this.invalidate()}setAnchors(e){this.anchors=e,this.labelsDirty=!0,this.invalidate()}setSolarLevels(e){this.solarLevels=e;let t=!1;for(let n of this.roof?.lives??[])ea(n,e)&&(t=!0);for(let n of this.floors)n.solarLive&&ea(n.solarLive,e)&&(t=!0);this.solarActive=t,this.invalidate()}setPools(e){let t=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(t(e)!==t(this.pools)){this.pools=e,this.poolActive=e.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(e){e.poolGroup&&(d0(e.poolGroup),e.group.remove(e.poolGroup),e.poolGroup=void 0);let t=this.pools.filter(n=>n.floorId===e.floor.id);t.length&&(e.poolGroup=h0(t,this.flowTime),e.group.add(e.poolGroup))}setSound(e){let t=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(t(e)!==t(this.sound)){this.sound=e,this.soundActive=e.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new kt;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=e.filter(c=>c.floorId===n.floor.id),s=n.floor.elevation+.03;for(let c of o)if(c.playing)for(let u=0;u<3;u++){let h=new Be(new rs(.92,1,48),new Qe({color:3662079,transparent:!0,opacity:0,blending:Dt,depthWrite:!1,side:ct}));h.rotation.x=-Math.PI/2,h.position.set(c.x,s+u*.002,c.z),h.userData={sound:!0,phase:u/3,level:c.level},h.frustumCulled=!1,r.add(h)}let a=[],l=new Set;for(let c of o)for(let u of c.members){let h=o.find(f=>f.id===u);if(!h||h===c)continue;let d=[c.id,h.id].sort().join("|");l.has(d)||(l.add(d),a.push(c.x,s+.02,c.z,h.x,s+.02,h.z))}if(a.length){let c=new We;c.setAttribute("position",new ye(a,3));let u=new Zt(c,new qt({color:3662079,transparent:!0,opacity:.45,blending:Dt,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(e){let t=e/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(t*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(e){this.flows=e;let t=this.flowSeconds(),n=new Map;for(let r of e){let o=Xd(r),s=I0(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?t*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=e.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(e){this.pipes=e;for(let t of this.floors)this.buildPipes(t);this.invalidate()}buildPipes(e){let t=this.pipes.filter(o=>o.floorId===e.floor.id),n=JSON.stringify(t);if(n===e.pipeSig)return;e.pipeSig=n;let r=new je;for(let o of t)jg(r,o);e.pipeMesh.geometry.dispose(),e.pipeMesh.geometry=r.geometry(),e.pipeMesh.visible=r.count>0}setPersons(e){this.labelsDirty=!0,this.persons=e;let t=new Set;for(let n of e){t.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let o=document.createElement("img");o.src=n.picture,o.alt="",o.addEventListener("error",()=>o.replaceWith(document.createTextNode(n.initials))),r.append(o)}else r.textContent=n.initials}for(let[n,r]of this.personPins)t.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(e,t){this.pickFurniture=e,this.pickOpenings=t}setAccent(e){let t=m0(e),n=t?1:0;n===ou.value&&(!t||ru.value.equals(new V(...t)))||(ou.value=n,t&&ru.value.set(...t),this.invalidate())}setTheme(e){if(e===this.theme)return;this.theme=e,this.themeUniform.value=p0(e);let t=Ro(e),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines,this.roof.solarLines]:[]];for(let r of n)r.blending=t,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(e){this.furnish=e,e||this.selectFurniture(null),this.invalidate()}selectFurniture(e){e&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=e,this.updateGhost(),this.invalidate()}selectFurnitureSet(e){this.selectedSet=[...e],this.updateGhost(),this.invalidate()}setSun(e){this.sun=e;for(let t of this.floors)this.buildSun(t);this.placeSky(),this.invalidate()}setWeather(e){this.weather=e;for(let t of this.floors)this.buildSun(t);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let e=this.weather,t=!!e&&!this.lowQuality,n=e?new j(e.sky[0]/255,e.sky[1]/255,e.sky[2]/255):null;this.scene.fog=t&&e.fog>0&&n?new Ho(n,.01+.035*e.fog):null;let r=t?Math.round(700*e.rain):0,o=t?Math.round(450*e.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}seedParticles(e,t,n){if((e.geometry.getAttribute("position")?.count??0)===t)return;let o=this.weatherBox,s=new Float32Array(t*3),a=n?2:1;for(let c=0;c<t;c+=a){let u=o.x0+Math.random()*(o.x1-o.x0),h=o.y0+Math.random()*(o.y1-o.y0),d=o.z0+Math.random()*(o.z1-o.z0);s.set([u,h,d],c*3),n&&s.set([u,h-.45,d],c*3+3)}e.geometry.dispose();let l=new We;l.setAttribute("position",new ye(s,3)),e.geometry=l}stepWeather(e){let t=this.weather;if(!t||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(e-this.weatherLast)/1e3):0;if(this.weatherLast=e,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=t.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*t.rain)*n;for(let u=0;u<l.length;u+=6){let h=l[u+1]-c,d=l[u]+s*n;h<r.y0&&(h+=o,d=r.x0+Math.random()*(r.x1-r.x0)),d>r.x1&&(d-=r.x1-r.x0),l[u]=d,l[u+1]=h,l[u+3]=d-s*.05,l[u+4]=h-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=e/1e3;for(let u=0;u<l.length;u+=3){let h=l[u+1]-(.9+.6*t.snow)*n,d=l[u]+(s+Math.sin(c+u)*.4)*n;h<r.y0&&(h+=o,d=r.x0+Math.random()*(r.x1-r.x0)),d>r.x1&&(d-=r.x1-r.x0),l[u]=d,l[u+1]=h}a.needsUpdate=!0}return!0}placeSky(){let e=this.sun,t=this.weather,n=t?.cloud??0,r=!e||e.elevation<-3;if(!e||!t||t.disc===!1||n>.85||!r&&e.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*pt,s=(r?e.azimuth+180:e.azimuth)*pt,a=Math.max(10,Math.abs(e.elevation))*pt,l=this.weatherBox,c=new V((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),h=new V(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(h,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let d=this.skyDisc.material;d.color.set(r?13621486:16767370),d.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(e){let t=!!e!=!!this.roomTint;if(this.roomTint=e,this.tintTick=!0,this.applyHighlight(),t)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(e){this.screens=e;for(let t of this.floors)this.buildScreens(t);this.invalidate()}fillRoomPin(e,t,n){if(e.textContent=t||"\u2013",n){let r=document.createElement("small");r.textContent=n,e.append(r),e.classList.add("fp3d-pin-info")}else e.classList.remove("fp3d-pin-info")}setRoomInfo(e){if(!(e.size===this.roomInfo.size&&[...e].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=e;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,e.get(r.room.id))}}setFloorInfo(e){this.floorInfo=e;for(let t of this.floors){let n=t.label.querySelector("span"),r=e.get(t.floor.id)??this.options.floorInfo?.(t.floor)??"";n&&n.textContent!==r&&(n.textContent=r,t.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(e,t=!1){if(this.openingTargets=e,t)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=e.get(o)??ta,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&!!l.sensed==!!s.sensed||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(e){for(let[t,n]of e){let r=this.fridges.get(t)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(t,r)}for(let t of[...this.fridges.keys()])e.has(t)||this.fridges.delete(t);this.invalidate()}stepFridges(e){let t=1-Math.exp(-e/160),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*t,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(o=>n.has(o.id))&&this.buildFridges(r);return!0}buildFridges(e){let t=new je;for(let n of e.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);mg(t,n,Ct(e.floor,n),r?.l??0,r?.r??0)}e.fridgeMesh.geometry.dispose(),e.fridgeMesh.geometry=t.geometry(),e.fridgeMesh.visible=t.count>0}resetView(){this.fit(700)}setStartView(e){this.startView=e}currentView(){let e=this.controls.view,t=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(e.theta),Math.cos(e.theta)),phi:e.phi,radius:e.radius,target:{x:e.target.x,y:e.target.y-t,z:e.target.z}}}floorBase(e){let t=e===null?void 0:this.floorMap.get(e);return t?t.floor.elevation+t.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let e of[this.rain,this.snow,this.skyDisc])e.geometry.dispose(),e.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let e of this.robots.values())e.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(e=>this.render(e)))}makeRenderer(e){let t=e==="low"||e==="auto"&&YS();this.lowQuality=t,sg(t),this.applyWeather(),this.highQuality=e==="high";let n=new br({antialias:!t,alpha:!0,powerPreference:t?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:e==="high"?2.5:2)),n.setClearColor(0,0),n.localClippingEnabled=!0,n.outputColorSpace=Nt,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Jc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(e,t)=>this.onTap(e,t),hold:(e,t)=>this.onHold(e,t),swipeStart:(e,t,n,r)=>this.swipeStart(e,t,n,r),swipeMove:e=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",e,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(e,t)=>this.grabFurniture(e,t),drag:(e,t)=>this.dragFurniture(e,t),drop:()=>this.dropFurniture(),doubleTap:(e,t)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(e,t):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||(this.customContext&&this.setCustomPackState(this.customContext.hass,{...this.customContext.moment,time:this.customContext.moment.historical?this.customContext.moment.time:Date.now()}),this.invalidate())};resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.size={w:e,h:t},this.labelsDirty=!0,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let e of this.customLayers.values())e.dispose();this.customLayers.clear();for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.floors){for(let t of e.screenPics.values())t.mesh.material.dispose(),t.texture?.dispose();e.group.traverse(t=>{t.geometry?.dispose()});for(let t of Object.values(e.materials))t.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(e){let t=document.createElement("button");t.className="fp3d-dev",t.dataset.entity=e;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",t.append(n,r,o,s);let a,l=!1;t.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=e;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=t.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,h.left+h.width/2-d.left,h.top+h.height/2-d.top)},VS)});let c=()=>clearTimeout(a);return t.addEventListener("pointerleave",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerup",c),t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(e),this.options.onDeviceSelect?.(e);return}if(l)return;let h=t.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceTap?.(e,h.left+h.width/2-d.left,h.top+h.height/2-d.top)}),t.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let h=t.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,h.left+h.width/2-d.left,h.top+h.height/2-d.top)}}),t}buildLightSurface(e){let t=this.lowQuality?.5:.25,n=jm(e.floor,e.geo.walls2d,e.geo.wallBuckets,e.geo.openings,t,e.geo.holes,e.geo.roofUnder,iu(e.floor,e.geo.roofUnder)),r=L0(e.floor,e.geo.openRooms);if(e.lightZones=r.some((a,l)=>a!==l)?r:null,e.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=wo(r,a.ra),a.rb=wo(r,a.rb)}e.lightSurface=n;let o=new We;o.setAttribute("position",new ye(n.pos,3)),o.setAttribute("color",new ye(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new ye(n.fold,1));let s=new ur(new Uint32Array(n.pos.length/3),1);s.setUsage(gh),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),e.glowMesh.geometry.dispose(),e.glowMesh.geometry=o,e.glowSig="",this.buildGlow(e)}lightSources(e){let t=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==e.floor.id||!r||n.pack&&_t(n.pack)?.spots?.length)continue;let o=n.top??e.floor.height,s=td(e.floor,n.x,n.z),a=wo(e.lightZones,s),[l,,c]=n.size??(n.lamp?cu[n.lamp]:[.3,.3,.3]),u=n.base??0,h=n.top??o,d=t.length,f={ceiling:[h-.12,"ceiling"],downlight:[h-.03,"spot"],spot:[h-c,"spot"],panel:[h-.05,"ceiling"],pendant:[Math.max(u+.5,h-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<WS?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[p,_]=n.lamp?f[n.lamp]:[n.y,"omni"],g=n.lightY??p,m=r.color;if(n.lamp==="strip"){let w=(n.rotation??0)*pt,y=!!n.upright||Math.abs(n.roll??0)>45;for(let b of[-1/3,0,1/3])n.upright?t.push({x:n.x,y:u+l*(.5+b),z:n.z,color:m,level:r.level*.55,kind:"omni",room:a}):t.push({x:n.x+Math.cos(w)*l*b,y:g,z:n.z+Math.sin(w)*l*b,color:m,level:r.level*.55,kind:y?"omni":_,room:a})}else t.push({x:n.x,y:g,z:n.z,color:m,level:r.level,kind:_,room:a,..._==="spot"?{direction:[0,-1,0],angle:n.beam_angle??60}:{}});if(n.rotation_x||n.rotation_z){let w=po(n,lu(n,o));for(let y=d;y<t.length;y++){let b=t[y];if([b.x,b.y,b.z]=w(b.x,b.y,b.z),b.kind==="spot"){let x=w(n.x,0,n.z),M=w(n.x,-1,n.z);b.direction=[M[0]-x[0],M[1]-x[1],M[2]-x[2]],b.angle=n.beam_angle??60}else b.kind="omni";b.room=wo(e.lightZones,td(e.floor,b.x,b.z))}}}if(this.customContext)for(let n of e.floor.furniture)for(let r of a0(n,e.floor,this.customContext.hass))r.room=wo(e.lightZones,r.room),t.push(r);return t}buildGlow(e){let t=e.lightSurface;if(!t)return;let n=this.lightSources(e),r=t.doors.map(h=>{let d=e.geo.openings.find(p=>p.opening.id===h.id);if(d&&xr(d.opening,d.exterior)==="passage")return 1;let f=e.openings.get(h.id);return f?Math.max(f.open,f.open2??0):.5}),o=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(d=>d.toFixed(3)).join("/")},${h.direction?.join("/")},${h.angle}`).join(";")+"|"+r.map(h=>h.toFixed(1)).join(",");if(o===e.glowSig)return;e.glowSig=o;let s=e.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){e.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=eg(t,n,.42,r);if(this.roomTint){let h=e.floor.rooms.length;for(let d=0;d<t.room.length;d++)if(t.room[d]!==h)for(let f=0;f<3;f++)l[d*3+f]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,u=0;for(let h=0;h<l.length/18;h++){let d=!1;for(let f=h*18;f<h*18+18&&!d;f++)d=l[f]>.004;if(d)for(let f=0;f<6;f++)c[u++]=h*6+f}s.index.needsUpdate=!0,s.setDrawRange(0,u),e.glowMesh.visible=u>0}makeMaterials(e){return{floor:Xt(new Qe({vertexColors:!0}),this.themeUniform),pattern:$S(this.patternTexture),wall:Xt(tr(new Qe({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),e,"solid"),this.themeUniform),glassWall:tr(new Qe({vertexColors:!0,transparent:!0,depthWrite:!1}),e,"glass"),shadow:new Qe({vertexColors:!0,blending:ds,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ct,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Xt(tr(new qt({vertexColors:!0,transparent:!0,blending:Ro(this.theme),depthWrite:!1}),e),this.themeUniform,!0),glow:tr(new Qe({vertexColors:!0,transparent:!0,blending:Dt,depthWrite:!1,side:ct,polygonOffset:!0,polygonOffsetFactor:-3}),e,"solid"),frames:Xt(tr(new Qe({vertexColors:!0,side:ct}),e),this.themeUniform),glass:tr(new Qe({vertexColors:!0,transparent:!0,blending:Dt,depthWrite:!1,side:ct}),e),blinds:Xt(tr(new Qe({map:this.blindTexture,vertexColors:!0,side:ct}),e),this.themeUniform),water:Xt(new Qe({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:ct}),this.themeUniform),flow:jS(this.flowTime),solarLive:Bd(this.flowTime),lamps:Xt(new Qe({vertexColors:!0}),this.themeUniform),halos:new dr({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Dt,depthWrite:!1}),cones:new Qe({vertexColors:!0,transparent:!0,blending:Dt,depthWrite:!1,side:ct}),screens:new Qe({vertexColors:!0,transparent:!0,blending:Dt,depthWrite:!1,side:ct}),earth:Xt(new Qe({vertexColors:!0}),this.themeUniform),earthWell:Xt(new Qe({vertexColors:!0,side:ct}),this.themeUniform),earthLines:Xt(new qt({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let e=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),t=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=_d(n)?.id===o.id?s.filter($=>$.face===gd).map($=>({field:$,face:xg(n,$)})):[],l=s.filter($=>$.face.startsWith(`wall:${o.id}:`));if(l.length){let $=new Map(vg(n,o.id).map(he=>[he.key,he]));for(let he of l){let De=$.get(he.face);De&&a.push({field:he,face:De})}}let u=(n.settings.roof.sections??[]).some($=>Fm($,Wt(o)))?($,he)=>{let De=Dm(n,$,he);return De===null?null:De-o.elevation}:void 0,h=Lg(zd(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Fg(n.floors,o),a,u),d={standing:{value:65535},glass:{value:0}},f=this.makeMaterials(d),p=new kt,_=new Be(h.floor,f.floor),g=new Be(h.shadow,f.shadow);g.renderOrder=1;let m=new Be(h.floor,f.pattern);m.renderOrder=2;let w=new Be(new We,f.glow);w.renderOrder=3,w.visible=!1;let y=new Be(new We,f.frames),b=new Be(new We,f.blinds),x=new Be(new We,f.glass);x.renderOrder=4;let M=new Be(new We,f.lamps);M.visible=!1;let A=new Be(new We,f.cones);A.visible=!1,A.renderOrder=3;let v=new to(new We,f.halos);v.visible=!1,v.renderOrder=7;let S=new Be(new We,f.cones);S.visible=!1,S.renderOrder=7;let T=new Be(new We,f.cones);T.visible=!1,T.renderOrder=7;let P=new Be(new We,f.lamps);P.visible=!1;let C=new Be(new We,f.lamps);C.visible=!1;let R=new Be(new We,f.screens);R.visible=!1,R.renderOrder=5;let E=new Be(new We,f.flow);E.renderOrder=5,E.frustumCulled=!1;let I=Nd(a,o.elevation),L=I?new Be(I.geometry,f.solarLive):null;L&&(L.renderOrder=6,ea(I,this.solarLevels));for(let $ of[y,b,x])$.frustumCulled=!1;let N=new Be(h.walls,f.glassWall),B=new Be(h.walls,f.wall);N.renderOrder=6;let D=new Be(h.water,f.water);D.renderOrder=4;let O=Math.min(...n.floors.filter($=>$.rooms.length).map($=>$.elevation)),U=Bg(n,o,h.openings,o.elevation===O),Z=U?[new Be(U.earth.geometry(),f.earth),new Be(U.wells.geometry(),f.earthWell),new Zt(U.lines.geometry(),f.earthLines)]:[];for(let $ of Z)$.userData.earth=!0;p.add(_,g,m,w,B,D,new Zt(h.lines,f.lines),y,b,x,E,M,A,v,S,T,P,C,R,N,...L?[L]:[],...Z),this.root.add(p);let q=document.createElement("button");q.className="fp3d-pin fp3d-pin-floor",q.dataset.floor=o.id;let ae=document.createElement("b");ae.textContent=o.name||"\u2013";let ie=document.createElement("span");ie.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",q.append(ae,ie),q.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(q);let le=e.get(o.id),H=[],W=null;for(let $ of o.rooms){let he=document.createElement("button");he.className="fp3d-pin",he.dataset.room=$.id,he.dataset.floor=o.id,this.fillRoomPin(he,$.name,this.roomInfo.get($.id)),he.addEventListener("click",()=>this.options.onRoomTap?.(o.id,$.id)),this.labels.append(he);let[De,ze]=Yi($.points);H.push({pin:he,room:$,cx:De,cz:ze});for(let[Pe,ke]of $.points)W??={x0:Pe,x1:Pe,z0:ke,z1:ke},W.x0=Math.min(W.x0,Pe),W.x1=Math.max(W.x1,Pe),W.z0=Math.min(W.z0,ke),W.z1=Math.max(W.z1,ke)}this.floors.push({floor:o,rank:r.indexOf(o),group:p,geo:h,floorMesh:_,shadowMesh:g,patternMesh:m,glowMesh:w,lightSurface:null,lightZones:null,framesMesh:y,glassMesh:x,blindsMesh:b,flowMesh:E,solarMesh:L,solarLive:I,lampMesh:M,sunMesh:A,sunSig:"",haloMesh:v,coneMesh:S,trailMesh:T,fridgeMesh:P,pipeMesh:C,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:B,screenMesh:R,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:W,roomPins:H,labelSize:null,materials:f,mask:d,openings:new Map,y:le?.y??0,o:le?.o??1,ty:0,to:1,appliedO:-1,label:q});let re=this.customMemories.get(o.id)??new Eo;this.customMemories.set(o.id,re);let ce=new tu(o,f.wall,()=>this.invalidate(),re);p.add(ce.group),this.customLayers.set(o.id,ce),this.customContext&&ce.update(this.customContext.hass,this.customContext.moment,this.building?.settings.pack_animations!==!1)}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o),this.buildPipes(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=t.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??ta);this.buildOpenings(o),this.buildFlows(o),o.poolGroup=void 0,this.buildPoolWater(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(e.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(m=>m.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.solar.dispose(),this.roof.solarLines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(m=>m.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winGlass.dispose(),this.roof.winLines.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let e=this.building?Pg(this.building,this.roofWindows):[];if(!e.length)return;let t=new Map(er(this.building).map(m=>[m.key,m])),n=this.building.settings.roof?.solar??[],r=Xc(Bd(this.flowTime)),o=[],s=new kt,a=Xt(Hg(new Qe({vertexColors:!0,transparent:!0,side:ct,depthWrite:!1}),this.roofDirection),this.themeUniform),l=Xt(new qt({vertexColors:!0,transparent:!0,blending:Ro(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Xt(Xc(new Qe({vertexColors:!0,transparent:!0,side:ct})),this.themeUniform),u=Xt(Xc(new qt({vertexColors:!0,transparent:!0,blending:Ro(this.theme),depthWrite:!1})),this.themeUniform,!0),h=Xt(new Qe({vertexColors:!0,transparent:!0,side:ct,depthWrite:!1}),this.themeUniform),d=new kt,f=Xt(new Qe({vertexColors:!0,side:ct}),this.themeUniform),p=Xt(Tg(),this.themeUniform),_=Xt(new qt({vertexColors:!0,transparent:!0,blending:Ro(this.theme),depthWrite:!1}),this.themeUniform,!0),g=e.map(m=>{let w=new kt,y=m.solid.geometry();if(y.computeVertexNormals(),w.add(new Be(y,a),new Zt(m.lines.geometry(),l)),m.solar){let{facing:A}=m.solar;w.add(new Be(Ws(m.solar.solid.geometry(),A.normals,A.points),c),new Zt(Ws(m.solar.lines.geometry(),A.lineNormals,A.linePoints),u))}m.glass.count&&w.add(new Be(m.glass.geometry(),h));let b=n.flatMap(A=>{let v=t.get(A.face);return v&&(v.section?m.sections?.includes(v.section):m===e[0])?[{face:v,field:A}]:[]}),x=Nd(b,m.floor.elevation+m.base);if(x){let A=new Be(x.geometry,r);A.renderOrder=9,w.add(A),o.push(x),ea(x,this.solarLevels)}m.winRoof?.solid.count&&w.add(new Be(m.winRoof.solid.geometry(),f),new Be(m.winRoof.glass.geometry(),p),new Zt(m.winRoof.lines.geometry(),_)),w.renderOrder=8,s.add(w);let M=null;return m.win?.solid.count&&(M=new kt,M.add(new Be(m.win.solid.geometry(),f),new Be(m.win.glass.geometry(),p),new Zt(m.win.lines.geometry(),_)),d.add(M)),{group:w,floorId:m.floor.id,rideId:Vm(this.building,m.floor,m.sections??[]),base:m.base,lift:m.lift!==!1,win:M}});s.renderOrder=8,this.scene.add(s),this.scene.add(d),this.roof={group:s,parts:g,solid:a,lines:l,solar:c,solarLines:u,glass:h,live:r,lives:o,wins:d,winSolid:f,winGlass:p,winLines:_},this.placeRoof()}placeRoof(e=1e3){let t=this.roof;if(!t)return!1;let r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?jc(this.controls.view.radius,this.houseRadius,this.keepRoof).opacity:0,o=1-Math.exp(-e/R0),s=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),t.group.visible=this.roofO>.02;for(let a of t.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=this.floorMap.get(a.rideId)??l,u=c.ty>0?Math.min(1,c.y/c.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+c.y+a.base+jc(this.controls.view.radius,this.houseRadius,this.keepRoof,this.roofO).lift+(a.lift?u*E0:0),a.win&&(a.win.position.y=l.floor.elevation+c.y+a.base+(a.lift?u*E0:0),a.win.visible=l.group.visible&&l.o>.5&&this.wallMode!=="cut")}return t.solid.opacity=this.roofO,t.solid.depthWrite=!1,t.lines.opacity=this.roofO,t.solar.opacity=this.roofO,t.solar.depthWrite=this.roofO>.9,t.solarLines.opacity=this.roofO,t.glass.opacity=this.roofO*.28,t.live.opacity=this.roofO,this.roofO!==s&&this.roofO!==r}applyTierFlags(){let e=this.lowQuality;this.ground.visible=!e&&this.theme!=="day"&&this.floors.some(t=>t.floor.rooms.length>0);for(let t of this.floors)t.patternMesh.visible=!e,t.shadowMesh.visible=!e&&t.o>.98;this.invalidate()}rebuildTier(){for(let e of this.floors)e.flowLayout="",this.buildFlows(e),this.buildLightSurface(e),e.lampShapeSig="",this.buildLamps(e)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(e){let t=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;t?n.rank>t.rank?(r=5+n.rank,o=0):n.rank<t.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:US)):r=this.explode?n.rank*OS:0,n.ty=r,n.to=o;let a=t===n?Qt:oi;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),e&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(e){if(e.group.position.y=e.floor.elevation+e.y,e.group.visible=e.o>.02,e.shadowMesh.visible=e.o>.98&&!this.lowQuality,Math.abs(e.appliedO-e.o)<.001)return;e.appliedO=e.o;let t=e.materials,n=e.o>.999;for(let r of[t.floor,t.wall,t.frames,t.blinds,t.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=e.o;t.pattern.opacity=e.o,t.glow.opacity=e.o,t.lines.opacity=e.o,t.glass.opacity=e.o,t.glassWall.opacity=e.o,t.flow.opacity=e.o,t.solarLive.opacity=e.o,t.lamps.opacity=e.o,t.halos.opacity=e.o,t.cones.opacity=e.o,t.screens.opacity=e.o;for(let r of[t.earth,t.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=e.o;t.earthLines.opacity=e.o;for(let r of e.screenPics.values()){let o=r.mesh.material;o.transparent=e.o<.999,o.opacity=e.o}}stepFloors(e){let t=!1,n=1-Math.exp(-e/R0);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,t=!0,this.applyFloor(r)}return t}stepOpenings(e){let t=!1,n=1-Math.exp(-e/160);for(let r of this.floors){let o=!1;for(let[s,a]of r.openings){let l=this.openingTargets.get(s)??ta,c=(d,f)=>(d??null)===(f??null)||typeof d=="number"&&typeof f=="number"&&Math.abs(d-f)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},h=!1;for(let d of["open","open2","tilt","tilt2"]){let f=l[d]??0,p=a[d]??0,_=f-p;Math.abs(_)<.003?u[d]=f:(u[d]=p+_*n,h=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let d=l.cover-a.cover;Math.abs(d)<.003?u.cover=l.cover:(u.cover=a.cover+d*n,h=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(s,u),o=!0),t||=h}o&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return t}glowOf(e){if(!e.glow||!e.effect)return e.glow;let t=new j(...e.glow.color),n={h:0,s:0,l:0};t.getHSL(n);let r=(e.x*.37+e.z*.61)%1;return t.setHSL((n.h+this.effectTime*XS+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[t.r,t.g,t.b],level:e.glow.level}}buildLamps(e){let t=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=t)return 0;let d=h-t,f=d>au?.5+.5*Math.sin(d/140):d/au;return Math.round(f*10)/10},r=this.devices.filter(u=>u.floorId===e.floor.id&&(u.lamp||u.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.rotation_x??0},${u.rotation_z??0},${u.pivot_y??""},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.top??""},${u.pack??""},${u.mirror?1:0}`).join(";"),s=r.map(u=>this.glowOf(u)),a=r.map((u,h)=>`${n(u.id)},${s[h]?`${s[h].level.toFixed(3)},${s[h].color.map(d=>d.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==e.lampShapeSig||!e.lampMesh.geometry.getAttribute("position")){e.lampShapeSig=o,e.lampColorSig="";let u=new je,h=[],d=[],f=new Map,p=e.floor.height;for(let _ of r){let g=_.lamp==="strip"?(_.base??p)>Math.min(e.floor.cut_height,p):_.lamp?Yd.has(_.lamp)&&(_.top??p)>Math.min(e.floor.cut_height,p):_.model==="camera_ceiling";if(!_.lamp&&!_.model||g&&this.wallMode==="cut")continue;let m=u.count,w=e.floor.furniture.find(A=>A.id===_.furnitureId),y=_.pack?vr(w??{type:_.pack}):void 0,[b,x,M]=_.size??[.3,.3,.3];_.model?_g(u,_.model,_.x,_.model==="camera_ceiling"?_.top??p:_.y,_.z,_.rotation??0):y?zc(u,y,{x:_.x,z:_.z,rotation:_.rotation??0,rotation_x:_.rotation_x,rotation_z:_.rotation_z,w:b,d:x,h:M,mirror:_.mirror},_.base??0,65280):Wd(u,{..._,lamp:_.lamp},_.top??p,65280),f.set(_.furnitureId??_.id,{start:m,end:u.count}),_.pickable!==!1&&h.push({id:_.id,start:m,end:u.count}),_.furnitureId&&d.push({id:_.furnitureId,start:m,end:u.count})}e.lampTris=h,e.lampFurnTris=d,e.lampRanges=f,e.lampShade=am(u.c),e.lampMesh.geometry.dispose(),e.lampMesh.geometry=u.geometry(),e.lampMesh.visible=u.count>0}if(a===e.lampColorSig)return;e.lampColorSig=a;let l=e.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,h)=>{let d=e.lampRanges.get(u.furnitureId??u.id);if(!d)return;let f=s[h],p=f?.55+.45*f.level:0,_=f?new j(...f.color.map(w=>Math.min(1,w*p))):new j(HS),g=n(u.id);g>0&&_.lerp(new j(1,1,1),.7*g);let m=new j(_.getHex());lm(c,e.lampShade,d,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(e)}buildSun(e){let t=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*pt,r=this.weather?.cloud??0,o=L0(e.floor,e.geo.openRooms),s=t?`${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...e.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===e.sunSig)return;e.sunSig=s;let a=new je;if(t&&t.elevation>2&&r<.97){let l=Math.min(1,t.elevation/12)*(1-.8*r),c=t.elevation*pt,u=t.azimuth*pt,h=[Math.sin(n+u),-Math.cos(n+u)],d=1/Math.tan(c);for(let f of e.geo.openings){if(f.opening.type!=="window"||!f.exterior)continue;let p=e.floor.rooms.find(R=>R.id===f.opening.room_id);if(!p||p.points.length<3)continue;let _=ft(e.floor,p),g=[-f.toRoom[0],-f.toRoom[1]],m=g[0]*h[0]+g[1]*h[1];if(m<.05)continue;let w=e.openings.get(f.opening.id),y=f.top-(w?.cover??0)*(f.top-f.sill);if(y-f.sill<.05)continue;let b=(R,E)=>{let I=Math.min(7,(E-_)*d);return[f.start[0]+f.axis[0]*R+f.toRoom[0]*f.faceRoom-h[0]*I,_+.02,f.start[1]+f.axis[1]*R+f.toRoom[1]*f.faceRoom-h[1]*I]},x=.14*l*Math.min(1,m*1.5),M=new j(1*x,.82*x,.55*x),A=M.clone().multiplyScalar(.45),v=e.floor.rooms.findIndex(R=>R.id===f.opening.room_id);if(v<0||e.floor.rooms[v].points.length<3)continue;let S=o[v],T=e.floor.rooms.filter((R,E)=>o[E]===S&&Math.abs(ft(e.floor,R)-_)<.001&&R.points.length>=3).map(R=>R.points),P=Math.max(1,Math.ceil(Math.min(7,(y-_)*d)/.25)),C=Math.max(1,Math.ceil(f.width/.3));for(let R=0;R<P;R++){let E=f.sill+(y-f.sill)*R/P,I=f.sill+(y-f.sill)*(R+1)/P,L=R/P,N=(R+1)/P,B=M.clone().lerp(A,L),D=M.clone().lerp(A,N);for(let O=0;O<C;O++){let U=f.width*O/C,Z=f.width*(O+1)/C,q=b((U+Z)/2,(E+I)/2);if(!T.some(W=>Oe([q[0],q[2]],W)))continue;let ae=b(U,E),ie=b(Z,E),le=b(Z,I),H=b(U,I);a.tri(ae,ie,le,B,B,D),a.tri(ae,le,H,B,D,D)}}}this.pushRoofSun(e,a,o)}e.sunMesh.geometry.dispose(),e.sunMesh.geometry=a.geometry(),e.sunMesh.visible=a.count>0}pushRoofSun(e,t,n){this.sun&&this.building&&Wg(t,this.building,e.floor,this.sun,this.weather?.cloud??0,this.roofWindows,e.geo.holes,n)}buildHalos(e){if(this.lowQuality){e.haloMesh.visible=!1,e.coneMesh.visible=!1;return}let t=e.floor.height,n=[],r=[],o=new je,s=[];for(let l of this.devices){if(l.model&&l.floorId===e.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let b=(l.rotation??0)*pt,x=[-Math.sin(b),Math.cos(b)],M=l.model==="camera_ceiling",A=l.reach??(M?3:4.5),v=(l.fov??(M?360:90))*pt/2,S=l.motion?new j(.9,.12,.16):new j(.04,.22,.28),T=new j(0,0,0),P=Math.max(4,Math.round(v/.15)),C=bn(e.floor,l.x,l.z)+.015,R=e.geo.walls2d,E=D=>{let O=D.b[0]-D.a[0],U=D.b[1]-D.a[1],Z=O*O+U*U||1,q=Math.max(0,Math.min(1,((l.x-D.a[0])*O+(l.z-D.a[1])*U)/Z));return Math.hypot(l.x-(D.a[0]+O*q),l.z-(D.a[1]+U*q))},I=null;for(let D of R)E(D)<.45&&(!I||E(D)<E(I))&&(I=D);let L=D=>{let O=x[0]*Math.cos(D)-x[1]*Math.sin(D),U=x[1]*Math.cos(D)+x[0]*Math.sin(D),Z=A;for(let q of R){let ae=q.b[0]-q.a[0],ie=q.b[1]-q.a[1],le=O*ie-U*ae;if(Math.abs(le)<1e-9)continue;let H=((q.a[0]-l.x)*ie-(q.a[1]-l.z)*ae)/le,W=((q.a[0]-l.x)*U-(q.a[1]-l.z)*O)/le;q===I&&H<=.45||H>.02&&H<Z&&W>=0&&W<=1&&(Z=H)}return Z},N=D=>{let O=L(D);return[l.x+(x[0]*Math.cos(D)-x[1]*Math.sin(D))*O,C,l.z+(x[1]*Math.cos(D)+x[0]*Math.sin(D))*O]},B=o.count;for(let D=0;D<P;D++)o.tri([l.x,C,l.z],N(-v+2*v*(D+1)/P),N(-v+2*v*D/P),S,T,T);s.push({id:l.id,start:B,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==e.floor.id||!l.lamp||!c||Yd.has(l.lamp)&&this.wallMode==="cut"&&(l.top??t)>Math.min(e.floor.cut_height,t))continue;let u=l.top??t,[h,d,f]=l.size??cu[l.lamp],p=l.base??0,_=n.length,g=o.p.length,m=(l.rotation??0)*pt,w={ceiling:u-.07,downlight:u-.03,spot:u-f,panel:u-.03,pendant:Math.max(p+.4,u-f)+.08,floor:p+f-.15,uplight:p+f,table:p+f-.09,wall:p+f/2,strip:p+Math.max(.02,f)-.01,bollard:p+f-.08,garden:p+f-.03}[l.lamp],y=(b,x,M=1)=>{n.push(b,w,x),r.push(...c.color.map(A=>A*c.level*.7*M))};if(l.lamp==="strip")for(let b of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,p+h*(.5+b),l.z),r.push(...c.color.map(x=>x*c.level*.7*.6))):y(l.x+Math.cos(m)*h*b,l.z+Math.sin(m)*h*b,.6);else l.lamp==="wall"?y(l.x-Math.sin(m)*(d/2+.05),l.z+Math.cos(m)*(d/2+.05)):y(l.x,l.z);In(n,_,l,lu(l,t)),In(o.p,g,l,lu(l,t))}if(this.highQuality)for(let l of this.lightSources(e))l0(o,l,e.floor,e.lightSurface?.blockers??[],iu(e.floor,e.geo.roofUnder));let a=new We;a.setAttribute("position",new ye(n,3)),a.setAttribute("color",new ye(r,3)),e.haloMesh.geometry.dispose(),e.haloMesh.geometry=a,e.haloMesh.visible=n.length>0,e.coneMesh.geometry.dispose(),e.coneMesh.geometry=o.geometry(),e.coneMesh.visible=o.count>0,e.coneTris=s}buildScreens(e){let t=zd(e.floor,this.parked).furniture.filter(o=>this.screens.has(o.id)),n=t.map(o=>`${o.id}:${o.x},${o.z},${o.rotation},${o.rotation_x??0},${o.rotation_z??0},${o.w},${o.d},${o.h},${o.mount_y??""},${o.mirror?1:0}:${JSON.stringify(this.screens.get(o.id))}`).join(";");if(n===e.screenSig&&e.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(e,t);e.screenSig=n;let r=new je;for(let o of t){let s=this.screens.get(o.id),a=o.rotation*pt,l=Math.cos(a),c=Math.sin(a),u=po(o,Ct(e.floor,o)+o.h/2),h=(x,M,A)=>u(o.x+x*l-A*c,M,o.z+x*c+A*l);if(s.faces){let x=Math.max(.05,o.w)*(o.mirror?-1:1),M=Math.max(.05,o.d),A=Math.max(.005,o.h),v=Ct(e.floor,o);for(let S of s.faces){if(S.part==="lights"){let O=_t(o.type),U=Z=>["#e8f4ff","#ff3b4f"].includes(Z.color.toLowerCase());if(O&&O.parts.some(U)){let Z=new j(...S.color.map(q=>Math.min(1,q*(.4+.6*S.level))));Vs(r,O,o,v,Z.getHex(),U)}continue}if(S.part==="cabin"){let O=_t(o.type),U=Z=>Z.color.toLowerCase()==="#13283a"||Z.color==="glass";if(O&&O.parts.some(U)){let Z=new j(...S.color.map(q=>Math.min(1,q*(.3+.5*S.level))));Vs(r,O,o,v,Z.getHex(),U);continue}}if(S.part==="burners"&&_t(o.type)){let O=_t(o.type),U=new j(...S.color.map(Z=>Math.min(1,Z*(.25+.6*S.level))));Vs(r,O,o,v,U.getHex(),cm);continue}if(S.part==="burners"){let O=new j(...S.color.map(Z=>Math.min(1,Z*(.25+.6*S.level)))),U=v+A+.008;for(let[Z,q,ae]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let ie=Z*Math.abs(x)/.6,le=q*M/.62,H=14;for(let W=0;W<H;W++){let re=W/H*Math.PI*2,ce=(W+1)/H*Math.PI*2;r.tri(h(ie,U,le),h(ie+Math.cos(re)*ae,U,le+Math.sin(re)*ae),h(ie+Math.cos(ce)*ae,U,le+Math.sin(ce)*ae),O)}}continue}if(S.part==="band"||S.part==="cabin"){let O=S.part==="cabin",U=v+A*(O?.6:.42),Z=O?v+A*.86:U+.07,q=new j(...S.color.map(H=>Math.min(1,H*(.3+.45*S.level)))),ae=Math.abs(x)/2+(O?.012:.02),ie=M/2+(O?.012:.02),le=[[-ae,-ie],[ae,-ie],[ae,ie],[-ae,ie]];for(let H=0;H<4;H++){let W=le[H],re=le[(H+1)%4],ce=h(W[0]*Math.sign(x),U,W[1]),$=h(re[0]*Math.sign(x),U,re[1]),he=h(re[0]*Math.sign(x),Z,re[1]),De=h(W[0]*Math.sign(x),Z,W[1]);r.tri(ce,$,he,q),r.tri(ce,he,De,q)}continue}let T=S.part==="right"?.03:-Math.abs(x)/2+.03,P=S.part==="left"?-.03:Math.abs(x)/2-.03,C=v+(S.part==="bottom"?A*.45:A)+.006,R=new j(...S.color.map(O=>Math.min(1,O*(.35+.65*S.level)))),E=new j(0,0,0),I=(O,U,Z=C)=>h(O*Math.sign(x),Z,U),L=[I(T,-M/2+.03),I(P,-M/2+.03),I(P,M/2-.03),I(T,M/2-.03)];r.tri(L[0],L[2],L[1],R),r.tri(L[0],L[3],L[2],R);let N=.12+.1*S.level,B=R.clone().multiplyScalar(.5),D=[I(T-N,-M/2-N,C+.004),I(P+N,-M/2-N,C+.004),I(P+N,M/2+N,C+.004),I(T-N,M/2+N,C+.004)];for(let O=0;O<4;O++){let U=(O+1)%4;r.tri(L[O],D[U],D[O],B,E,E),r.tri(L[O],L[U],D[U],B,B,E)}}continue}let d=_t(o.type);if(d&&!d.light&&s.ring&&d.parts.some(x=>x.glow)){let x=new j(...s.color.map(M=>Math.min(1,M*(.45+.55*s.level))));Vs(r,d,o,Ct(e.floor,o),x.getHex())}let f=ud(o,e.floor);if(!f)continue;let p=new j(...s.color.map(x=>Math.min(1,x*(.35+.65*s.level)))),_=new j(0,0,0),g=f.z+.004;if(r.tri(h(f.x0,f.y0,g),h(f.x1,f.y0,g),h(f.x1,f.y1,g),p),r.tri(h(f.x0,f.y0,g),h(f.x1,f.y1,g),h(f.x0,f.y1,g),p),s.plain)continue;let m=.18+.12*s.level,w=p.clone().multiplyScalar(.5),y=[h(f.x0,f.y0,g),h(f.x1,f.y0,g),h(f.x1,f.y1,g),h(f.x0,f.y1,g)],b=[h(f.x0-m,f.y0-m,g+.01),h(f.x1+m,f.y0-m,g+.01),h(f.x1+m,f.y1+m,g+.01),h(f.x0-m,f.y1+m,g+.01)];for(let x=0;x<4;x++){let M=(x+1)%4;r.tri(y[x],b[x],b[M],w,_,_),r.tri(y[x],b[M],y[M],w,_,w)}}e.screenMesh.geometry.dispose(),e.screenMesh.geometry=r.geometry(),e.screenMesh.visible=r.count>0,this.updateScreenPictures(e,t)}updateScreenPictures(e,t){let n=new Map(t.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of e.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(e.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),e.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=ud(o,e.floor);if(!a)continue;let l=e.screenPics.get(r);if(!l){let c=new Be(new Gn(1,1),new Qe({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},e.screenPics.set(r,l),e.group.add(c);let u=l;new ls().load(s.picture,h=>{if(e.screenPics.get(r)!==u){h.dispose();return}h.colorSpace=Nt,u.texture=h;let d=u.mesh.material;d.map=h,d.needsUpdate=!0,this.placeScreenPicture(u.mesh,o,a,h,Ct(e.floor,o)+o.h/2),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture,Ct(e.floor,o)+o.h/2)}}placeScreenPicture(e,t,n,r,o){let s=r.image,a=s?.width&&s?.height?s.width/s.height:16/9,l=n.x1-n.x0-.04,c=n.y1-n.y0-.04,u=Math.min(l,c*a),h=u/a,d=t.rotation*pt,f=(n.x0+n.x1)/2,p=n.z+.008;e.scale.set(u,h,1),e.rotation.set((t.rotation_x??0)*pt,-d,(t.rotation_z??0)*pt,"YZX");let _=po(t,o);e.position.set(..._(t.x+f*Math.cos(d)-p*Math.sin(d),(n.y0+n.y1)/2,t.z+f*Math.sin(d)+p*Math.cos(d)))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(e){let t=this.flows.filter(u=>u.floorId===e.floor.id).map(Xd).join(";"),n=[],r=[],o=[],s=[],a=[];for(let u of this.flows){if(u.floorId!==e.floor.id)continue;let h=this.flowPhase.get(Xd(u))??{speed:I0(u.power),offset:0},d=u.power>.5?Math.min(1,.5+u.power/2500):.22,f=u.color.map(w=>w*d),p=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(p<1e-4)continue;let _=[(u.b[0]-u.a[0])/p,(u.b[1]-u.a[1])/p,(u.b[2]-u.a[2])/p],g=[];if(Math.abs(_[1])<.5){let w=Math.hypot(_[0],_[2])||1;g.push([-_[2]/w,0,_[0]/w])}else g.push([1,0,0],[0,0,1]);let m=this.lowQuality?[[k0*1.4,1]]:[[GS,.25],[k0,1]];for(let[w,y]of m)for(let b of g){let x=w/2,M=(v,S)=>[v[0]+b[0]*x*S,v[1]+b[1]*x*S,v[2]+b[2]*x*S],A=[[M(u.a,-1),u.dist,0],[M(u.b,-1),u.dist+p,0],[M(u.b,1),u.dist+p,1],[M(u.a,1),u.dist,1]];for(let v of[0,1,2,0,2,3]){let[S,T,P]=A[v];n.push(S[0],S[1],S[2]),r.push(f[0]*y,f[1]*y,f[2]*y),o.push(T,P),s.push(h.speed),a.push(h.offset)}}}let l=e.flowMesh.geometry;if(t===e.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,h]of[["color",r],["flowSpeed",s],["flowOffset",a]]){let d=l.getAttribute(u);d.array.set(h),d.needsUpdate=!0}e.flowMesh.visible=n.length>0;return}e.flowLayout=t;let c=new We;c.setAttribute("position",new ye(n,3)),c.setAttribute("color",new ye(r,3)),c.setAttribute("uv",new ye(o,2)),c.setAttribute("flowSpeed",new ye(s,1)),c.setAttribute("flowOffset",new ye(a,1)),e.flowMesh.geometry.dispose(),e.flowMesh.geometry=c,e.flowMesh.visible=n.length>0}buildOpenings(e){let t=b0(e.geo.openings,e.openings,Math.min(e.floor.cut_height,Wt(e.floor)-e.floor.elevation),this.productColors);e.frameTris=t.frameTris,e.glassTris=t.glassTris,e.blindTris=t.blindTris;for(let[n,r]of[[e.framesMesh,t.frames],[e.glassMesh,t.glass],[e.blindsMesh,t.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(e=>e.to>.99)}applyHighlight(){for(let e of this.floors){let t=e.geo.floor.getAttribute("color");for(let n of e.geo.roomTris){let r=new j(n.color),o=this.roomTint?.get(n.roomId);o&&r.lerp(new j(...o).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(KS,o?.3:.75);for(let s=n.start*3;s<n.end*3;s++)t.setXYZ(s,r.r,r.g,r.b)}t.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".fp3d-pin"))e.classList.toggle("fp3d-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(e){let t=new dn;for(let h of this.activeFloors()){let d=h.floor.elevation+h.ty;for(let f of h.floor.rooms)for(let[p,_]of f.points)t.expandByPoint(new V(p,d+ft(h.floor,f),_)),t.expandByPoint(new V(p,d+Wt(h.floor)-h.floor.elevation,_))}t.isEmpty()&&t.set(new V(-4,0,-4),new V(4,2.5,4)),this.placeGround(),this.weatherBox={x0:t.min.x-6,x1:t.max.x+6,z0:t.min.z-6,z1:t.max.z+6,y0:t.min.y,y1:t.max.y+6},this.applyWeather(),this.placeSky();let n=t.getCenter(new V),r=t.getSize(new V),o=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=t.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;if(u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.keepNext){this.keepNext=!1;let h=this.controls.view;this.controls.flyTo({target:new V(h.target.x,n.y,h.target.z),radius:h.radius,phi:h.phi,theta:h.theta},e);return}this.controls.flyTo({target:n,radius:c?l.radius:o,phi:l?l.phi:.85,theta:l?l.theta:-.6},e)}placeGround(){let e=new dn,t=1/0;for(let s of this.floors){t=Math.min(t,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)e.expandByPoint(new V(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)e.expandByPoint(new V(l,0,c))}if(this.ground.visible=!e.isEmpty()&&!this.lowQuality&&this.theme!=="day",e.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=e2();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=e.getCenter(new V),r=e.getSize(new V),o=Kd*Math.ceil((Math.max(r.x,r.z)+16)/Kd);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,t-Jt-.02,n.z)}distanceFor(e){let t=this.camera.fov*pt,n=2*Math.atan(Math.tan(t/2)*this.camera.aspect);return e.length()/2/Math.sin(Math.min(t,n)/2)}rayAt(e,t){let n=this.renderer.domElement.getBoundingClientRect(),r=new us;return r.setFromCamera(new Ee(e/n.width*2-1,-(t/n.height)*2+1),this.camera),r}pick(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=l=>this.customLayers.get(l.floor.id)?.meshes()??[],s=r.flatMap(l=>[l.lampMesh,l.coneMesh,l.framesMesh,l.glassMesh,l.blindsMesh,l.wallMesh,l.floorMesh,...o(l)].filter(c=>c.visible)),a=(l,c)=>l.find(u=>c>=u.start&&c<u.end)?.id;for(let l of n.intersectObjects(s,!1)){if(l.faceIndex==null)continue;let c=l.faceIndex,u=r.find(h=>h.group===l.object.parent||o(h).includes(l.object));if(l.object.userData.furnitureId){if(this.wallMode==="cut"&&l.point.y>u.group.position.y+u.floor.cut_height)continue;let h=this.pickFurniture.get(String(l.object.userData.furnitureId));if(h)return{entity:h};continue}if(l.object===u.lampMesh||l.object===u.coneMesh){let h=a(l.object===u.lampMesh?u.lampTris:u.coneTris,c);if(h)return{entity:h}}else if(l.object===u.framesMesh||l.object===u.blindsMesh||l.object===u.glassMesh){if(this.wallMode==="cut"&&l.face){let f=l.object.geometry.getAttribute("fold")?.getX(l.face.a)??Ze;if(f!==Ze&&Math.floor(f/16)===0)continue}let h=a(l.object===u.framesMesh?u.frameTris:l.object===u.glassMesh?u.glassTris:u.blindTris,c),d=h?this.pickOpenings.get(h):void 0;if(d)return{entity:d}}else if(l.object===u.wallMesh){let h=a(u.geo.furnitureTris,c),d=h?this.pickFurniture.get(h):void 0;if(d)return{entity:d};if(l.face&&!h){let f=u.wallMesh.geometry.getAttribute("fold")?.getX(l.face.a)??32,p=Math.floor(f/16),_=f%16,g=this.wallMode==="cut"&&p===0,m=(u.mask.glass.value&1<<_)!==0;if(!g){let w=n.ray.direction,y=Math.hypot(w.x,w.z)||1,b=[l.point.x-w.x/y*.3,l.point.z-w.z/y*.3],x=u.floor.rooms.find(M=>M.points.length>=3&&Oe(b,M.points))?.id??null;if(this.roomId!==null){if(x===this.roomId)return{floorId:u.floor.id,roomId:x}}else if(!m&&x)return{floorId:u.floor.id,roomId:x}}}}else if(l.object===u.floorMesh)return{floorId:u.floor.id,roomId:a(u.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),c)??null}}return null}onTap(e,t){let n=this.pick(e,t);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+au),this.invalidate(),this.options.onDeviceTap?.(n.entity,e,t);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh),...this.customLayers.get(a.floor.id)?.meshes()??[]],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(h=>h.group===a.object.parent||o(h).includes(a.object));if(!l)continue;if(a.object.userData.furnitureId){if(this.wallMode==="cut"&&a.point.y>l.group.position.y+l.floor.cut_height)continue;return{fv:l,id:String(a.object.userData.furnitureId),y:a.point.y}}if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let h=this.furnitureNear(l,a.point.x,a.point.z);if(h)return{fv:l,id:h,y:a.point.y};continue}let u=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(h=>a.faceIndex>=h.start&&a.faceIndex<h.end)?.id;if(u)return{fv:l,id:u,y:a.point.y}}return null}furnitureNear(e,t,n){let r=null;for(let o of e.floor.furniture){let s=o.rotation*pt,a=t-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,u=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,h=Math.max(c,u);h<.25&&(!r||h<r.d)&&(r={id:o.id,d:h})}return r?.id??null}floorPoint(e,t,n,r){let o=this.rayAt(t,n),s=r??e.floor.elevation+e.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(e){this.furnishTypes=e?new Set(e):null}setSurfaceGrab(e){this.surfaceGrab=e}pointerRay(e,t){return this.surfaceRay(e,t)}furnitureIdAt(e,t){return this.furnitureAt(e,t)?.id??null}surfaceRay(e,t){let n=this.rayAt(e,t).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(e,t){if(this.surfaceGrab?.start(this.surfaceRay(e,t)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(e,t),l=s??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(d=>d.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,e,t)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,e,t):this.grabItem(a,s,e,t)}let o=this.furnitureAt(e,t);if(!o){let s=this.pick(e,t);return s&&"entity"in s?this.grabDevice(s.entity,e,t):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,e,t,o.y)}grabItem(e,t,n,r,o){let s=e.floor.furniture.find(h=>h.id===t),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(e,n,r,a);if(!s||!l)return!1;let c,u=this.rayAt(n,r).ray.direction;if(o!==void 0&&-u.y<.34){let h=this.camera.position,d=this.camera.getWorldDirection(new V),f=Math.hypot(d.x,d.z)||1,p=[d.x/f,d.z/f],_=Math.hypot(l[0]-h.x,l[1]-h.z,(a??0)-h.y),g=this.renderer.domElement.getBoundingClientRect().height||1,m=2*_*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-p[1],p[0]],fwd:p,perPx:m,gain:Math.min(2,1/Math.max(.5,-u.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:e.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(e,t,n){let r=this.devices.find(a=>a.id===e),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,t,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(e),this.options.onDeviceSelect?.(e),!1):(this.deviceGrab={id:e,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(e),this.options.onDeviceSelect?.(e),!0)}setSelectedDevice(e){e!==this.selectedDevice&&this.selectDevice(e)}selectDevice(e){e&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=e;for(let[t,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",t===e)}dragFurniture(e,t){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(e,t));return}let n=this.deviceGrab;if(n){let d=this.floorMap.get(n.floorId),f=this.devices.find(g=>g.id===n.id),p=d&&this.floorPoint(d,e,t);if(!d||!f||!p)return;let _=this.building?.settings.grid??.05;n.x=f.x=Math.round((p[0]+n.offset[0])/_)*_,n.z=f.z=Math.round((p[1]+n.offset[1])/_)*_,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=r.screen,a;if(s){let d=(e-s.x0)*s.perPx,f=(t-s.y0)*s.perPx*s.gain;a=[s.fx+s.right[0]*d-s.fwd[0]*f-r.offset[0],s.fz+s.right[1]*d-s.fwd[1]*f-r.offset[1]]}else a=this.floorPoint(o,e,t,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=o.floor.furniture.find(d=>d.id===r.id),u=Math.round((a[0]+r.offset[0])/l)*l,h=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?Ug(o.floor,c,u,h,this.building?.settings.wall_interior??0):[u,h],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let e=this.deviceGrab;this.deviceGrab=null,e?.moved&&this.options.onDeviceMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3);let t=this.grab;this.grab=null,t?.moved&&this.options.onFurnitureMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let e=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],t=new Ft,n;for(let r of e){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(t,o,s,r===this.selectedFurniture?new j(.25,.9,1):new j(1,.71,.28)))}n&&(this.ghost=new Zt(t.geometry(),new qt({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(e,t,n,r){let o=e.p.length,s=this.grab?.id===n.id?this.grab.x:n.x,a=this.grab?.id===n.id?this.grab.z:n.z,l=mo(t.floor,n.x,n.z),c=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,u=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=n.mount_y!=null||_t(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Ct(t.floor,n):c?n.type==="lamp_pendant"?l-n.h-.1:l-u:Ct(t.floor,n),d=n.rotation*pt,f=Math.cos(d),p=Math.sin(d),_=(y,b,x)=>[s+y*f-b*p,x,a+y*p+b*f],g=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let y=0;y<4;y++){let[b,x]=g[y],[M,A]=g[(y+1)%4];e.seg(_(b,x,h+.01),_(M,A,h+.01),r),e.seg(_(b,x,h+u),_(M,A,h+u),r),e.seg(_(b,x,h+.01),_(b,x,h+u),r)}e.seg(_(-n.w/2,n.d/2+.03,h+.02),_(n.w/2,n.d/2+.03,h+.02),new j(1,1,1));let m={...n,x:s,z:a},w=h+n.h/2;if(n.type==="led_strip"&&(In(e.p,o,{...m,rotation_x:n.tilt,rotation_z:n.upright?90:0},w),n.upright)){let y=n.w/2-n.h/2;for(let b=o+1;b<e.p.length;b+=3)e.p[b]+=y;w+=y}In(e.p,o,m,w)}onHold(e,t){let n=this.pick(e,t);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,e,t)}swipeStart(e,t,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(e,t);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,e,t)!==!0?!1:(this.swipe={entity:o.entity,x:e,y:t},!0)}floorThumbnails(e=200,t=150){let n=this.floors.filter(m=>m.floor.rooms.some(w=>w.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(e*r),s=Math.round(t*r),a=new an(o,s);a.texture.colorSpace=Nt;let l=new ri(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,d=this.renderer.getClearAlpha(),f=new Uint8Array(o*s*4),p=document.createElement("canvas");p.width=o,p.height=s;let _=p.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let R of this.floors)R.group.visible=R===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let w=m.floor.rooms.flatMap(R=>R.points),y=m.floor.elevation,b=new dn(new V(Math.min(...w.map(R=>R[0]))-.3,y,Math.min(...w.map(R=>R[1]))-.3),new V(Math.max(...w.map(R=>R[0]))+.3,y+Math.min(m.floor.cut_height,m.floor.height),Math.max(...w.map(R=>R[1]))+.3)),x=b.getCenter(new V),M=-.6,A=.8,v=new V(Math.sin(A)*Math.sin(M),Math.cos(A),Math.sin(A)*Math.cos(M));l.position.copy(x).addScaledVector(v,100),l.lookAt(x),l.updateMatrixWorld();let S=.5,T=.5;for(let R of[b.min.x,b.max.x])for(let E of[b.min.y,b.max.y])for(let I of[b.min.z,b.max.z]){let L=new V(R,E,I).applyMatrix4(l.matrixWorldInverse);S=Math.max(S,Math.abs(L.x)),T=Math.max(T,Math.abs(L.y))}let P=o/s;S/T>P?T=S/P:S=T*P,l.left=-S*1.05,l.right=S*1.05,l.top=T*1.05,l.bottom=-T*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,f);let C=_.createImageData(o,s);for(let R=0;R<s;R++)C.data.set(f.subarray((s-1-R)*o*4,(s-R)*o*4),R*o*4);_.putImageData(C,0,0),g.push({floorId:m.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(d);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=u,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return g}setRobots(e){let t=new Set;for(let n of e){t.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?x0(n.room,void 0,void 0,n.obstacles):Hd(n.rest),l=a.length?a:Hd(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=h)}),r.motion.path=l,r.motion.next=c,n.room&&!Oe(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(A0[n.mode])}for(let[n,r]of this.robots)t.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(e){if(!this.robotGeo){let r=new je,o=(a,l,c,u,h)=>{let d=[];for(let f=0;f<20;f++)d.push([Math.cos(f/20*Math.PI*2)*a,Math.sin(f/20*Math.PI*2)*a]);St(r,d,l,c,u,h,{aoFrom:0,bottom:!1})};o(.17,.012,.08,2371657,3424863),o(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new Qe({vertexColors:!0});let s=new je;St(s,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=s.geometry()}let t=new kt,n=new Qe({color:A0[e.mode]});return t.add(new Be(this.robotGeo,this.robotMat),new Be(this.robotLedGeo,n)),{info:e,motion:{pos:[...e.rest],heading:e.restHeading,path:[],next:0},group:t,led:n}}stepRobots(e){if(!this.robots.size)return!1;let t=this.robotLast?Math.min(.2,(e-this.robotLast)/1e3):0;this.robotLast=e;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),t>0?n=y0(r.motion,r.info,t)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],bn(o.floor,r.motion.pos[0],r.motion.pos[1]),r.motion.pos[1]),r.group.visible=!r.info.inModel||r.info.mode==="cleaning"||Math.hypot(r.motion.pos[0]-r.info.rest[0],r.motion.pos[1]-r.info.rest[1])>.05,r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(e,t=[]){let n=a=>new j(.25-.2*a,.95-.83*a,1-.7*a),r=new j(0,0,0),o=new j(.3,1,.6),s=.02;for(let a of this.floors){let l=new je;for(let u of t)u.floorId===a.floor.id&&u.points.forEach(([h,d],f)=>{let p=u.points[f-1];if(p){let _=Math.hypot(h-p[0],d-p[1])||1,g=-(d-p[1])/_*.1,m=(h-p[0])/_*.1;l.tri([p[0]+g,s,p[1]+m],[h+g,s,d+m],[h-g,s,d-m],o,o,o),l.tri([p[0]+g,s,p[1]+m],[h-g,s,d-m],[p[0]-g,s,p[1]-m],o,o,o)}for(let _=0;_<10;_++){let g=_/10*Math.PI*2,m=(_+1)/10*Math.PI*2;l.tri([h,s,d],[h+Math.cos(m)*.35,s,d+Math.sin(m)*.35],[h+Math.cos(g)*.35,s,d+Math.sin(g)*.35],o,r,r)}});let c=null;for(let u of e){if(u.floorId!==a.floor.id)continue;let h=n(u.age);if(c){let d=Math.hypot(u.x-c.x,u.z-c.z)||1,f=-(u.z-c.z)/d*.06,p=(u.x-c.x)/d*.06,_=n(c.age);l.tri([c.x+f,s,c.z+p],[u.x+f,s,u.z+p],[u.x-f,s,u.z-p],_,h,h),l.tri([c.x+f,s,c.z+p],[u.x-f,s,u.z-p],[c.x-f,s,c.z-p],_,h,_)}for(let d=0;d<12;d++){let f=d/12*Math.PI*2,p=(d+1)/12*Math.PI*2;l.tri([u.x,s,u.z],[u.x+Math.cos(p)*.22,s,u.z+Math.sin(p)*.22],[u.x+Math.cos(f)*.22,s,u.z+Math.sin(f)*.22],h,r,r)}c=u}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(e,t=900){this.controls.flyTo(e,t)}lookThrough(e){let t=this.devices.find(c=>c.id===e&&c.model),n=t&&this.floorMap.get(t.floorId);if(!t||!n)return!1;let r=(t.rotation??0)*pt,o=t.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(t.tilt??(o?65:20))*pt)),a=n.floor.elevation+n.ty+(o?(t.top??n.floor.height)-.1:t.y),l=new V(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new V(t.x,a,t.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(e){let t=performance.now()+au;for(let n of e)this.flashes.set(n,t);e.length&&this.invalidate()}focus(e,t,n,r,o){let s=this.floorMap.get(e);if(s){if(this.controls.flyTo({target:new V(t,s.floor.elevation+s.ty+r,n),radius:5.5,phi:.78},900),o){this.flashes.set(o,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(e){if(this.frame=0,this.disposed)return;let t=this.lastFrame?Math.min(100,e-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,e-this.orbitLast)/1e3),this.orbitLast=e,n=!0):this.orbitLast=0;let r=this.controls.update(e),o=this.stepFloors(t),s=!1;for(let[p,_]of this.customLayers){let g=this.floorMap.get(p);g&&(_.clip(this.wallMode==="cut"?g.floor.cut_height:null,g.group.position.y,g.o),g.o>.02&&(s=_.step(t)||s))}let a=this.stepOpenings(t)||this.stepFridges(t)||s,l=!1;if(this.flashes.size){let p=new Set;for(let[_,g]of this.flashes){let m=this.deviceFloor.get(_);m&&p.add(m),g<=e&&this.flashes.delete(_)}l=this.flashes.size>0;for(let _ of this.floors)p.has(_.floor.id)&&this.buildLamps(_)}let c=this.placeRoof(t),u=this.stepRobots(e),h=this.stepWeather(e),d=r||o||a||l||c,f=[];if((r||this.controls.busy)&&f.push("camera"),o&&f.push("floors"),a&&f.push("openings"),l&&f.push("flash"),c&&f.push("roof"),this.flowActive&&f.push("flow"),this.soundActive&&f.push("sound"),this.poolActive&&f.push("pool"),this.solarActive&&f.push("solar"),this.effectTick&&f.push("effect"),u&&f.push("robot"),n&&f.push("orbit"),this.tintTick&&f.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=d?e:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(e),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(e,f),d&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let p=this.lowQuality?2*C0:C0;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=p/1e3,this.effectTick=!0;for(let _ of this.floors)_.o<.02||!this.effectFloors.has(_.floor.id)||(this.buildLamps(_),this.buildGlow(_));this.invalidate()},p)}!d&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!d&&h&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!d&&u&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!d&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*P0:P0))}updateWalls(){let e=this.camera.position,t=this.controls.view.target,n=e.x-t.x,r=e.z-t.z,o=Math.hypot(n,r)||1;this.roofDirection.value.set(n/o,(e.y-t.y)/Math.hypot(o,e.y-t.y),r/o);for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((u,h)=>{let d=u?u[0]*n/o+u[1]*r/o>=.25:a;!l&&d&&(c|=1<<h)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let e=this.controls.view,t=this.viewKey;return t[0]===e.target.x&&t[1]===e.target.y&&t[2]===e.target.z&&t[3]===e.radius&&t[4]===e.theta&&t[5]===e.phi?!1:(t[0]=e.target.x,t[1]=e.target.y,t[2]=e.target.z,t[3]=e.radius,t[4]=e.theta,t[5]=e.phi,!0)}place(e,t){let n=t===null;e.hidden!==n&&(e.hidden=n),t!==null&&this.placed.get(e)!==t&&(this.placed.set(e,t),e.style.transform=t)}updateLabels(){let{w:e,h:t}=this.size,n=new V,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,u=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let _ of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(_,u,g).project(this.camera);let m=(n.x+1)/2*e,w=(1-n.y)/2*t;(!l||m<l.x)&&(l={x:m,y:w}),(!c||m>c.x)&&(c={x:m,y:w})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let h=s.labelSize.w,d=8+this.labelInset,f=l.x-h-14,p=l.y;f<d&&this.labelInset&&(f=c.x+14,p=c.y),o.push({fv:s,left:Math.max(d,Math.min(e-h-8,f)),y:p,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new V(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?jc(this.controls.view.radius,this.houseRadius,this.keepRoof,this.roofO).lift:0),s.p[2]),u=this.camera.position.clone().sub(c),h=u.length(),d=u.normalize().dot(new V(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let f=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,h)))*s.size;this.anchorCb(a,(n.x+1)/2*e,(1-n.y)/2*t,!f,p,d)}),this.updateDevicePins(e,t);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l+ft(s.floor,c.room),c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}}otherFloor(e){return this.floorId!==null&&e.floor.id!==this.floorId}updateDevicePins(e,t){let n=new V,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null);continue}n.set(o.x,a.floor.elevation+a.y+.9,o.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,l?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let u=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==u&&(this.pinMode.set(s,u),s.classList.toggle("fp3d-dev-full",u==="full"),s.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(s,`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}reportStats(e,t){if(!this.statsOn||!this.options.onStats)return;let n=t.length>0;this.fpsStart||(this.fpsStart=e),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,e-this.lastStatsFrame)),this.lastStatsFrame=n?e:0,this.fpsFrames++;let r=e-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:t,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=qS(this.renderer)}),this.fpsFrames=0,this.fpsStart=e,this.worstFrame=0}}};function qS(i){try{let e=i.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER);return typeof n=="string"?n:null}catch{return null}}function ZS(){let e=document.createElement("canvas");e.width=256*3,e.height=256*2;let t=e.getContext("2d"),n=(s,a,l,c,u)=>{t.strokeStyle=`rgba(55,224,255,${u})`,t.beginPath(),t.moveTo(s,a),t.lineTo(l,c),t.stroke()};t.lineWidth=1.5;let r=(s,a,l)=>{t.save(),t.beginPath(),t.rect(s*256,a*256,256,256),t.clip(),l(s*256,a*256),t.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let u=s+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(s+h+.75,c,s+h+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),t.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)t.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new Vn(e);return o.flipY=!1,o.wrapS=wn,o.wrapT=wn,o.anisotropy=4,o.colorSpace=Nt,o}function $S(i){let e=new Qe({map:i,transparent:!0,blending:Dt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},e.customProgramCacheKey=()=>"fp3d-pattern",e}function JS(){let i=document.createElement("canvas");i.width=8,i.height=32;let e=i.getContext("2d");e.fillStyle="#1a2742",e.fillRect(0,0,8,32),e.fillStyle="#223556",e.fillRect(0,4,8,14),e.fillStyle="rgba(55,224,255,0.45)",e.fillRect(0,29,8,2);let t=new Vn(i);return t.wrapS=cr,t.wrapT=cr,t.colorSpace=Nt,t}function Xd(i){let e=t=>Math.round(t*100);return`${i.floorId}:${i.a.map(e).join(",")}>${i.b.map(e).join(",")}`}function I0(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function jS(i){let e=new Qe({vertexColors:!0,transparent:!0,blending:Dt,depthWrite:!1,side:ct});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},e.customProgramCacheKey=()=>"fp3d-flow",e}function L0(i,e){let t=i.rooms.map((r,o)=>o),n=r=>t[r]===r?r:t[r]=n(t[r]);for(let[r,o]of e){let s=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(t[Math.max(l,c)]=Math.min(l,c))}return t.map((r,o)=>n(o))}function QS(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new Vn(e);return r.colorSpace=Nt,r}function e2(){let e=Kd,t=document.createElement("canvas");t.width=1024,t.height=1024;let n=t.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=e;s++){let a=Math.round(s/e*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new Vn(t);return o.anisotropy=4,o.colorSpace=Nt,o}function Tk(i,e){return new qd(i,e)}function Wd(i,e,t,n){t=e.top??t;let r=i.p.length;t2(i,e,t,n),In(i.p,r,e,lu(e,t))}function lu(i,e){if(i.pivot_y!=null)return i.pivot_y;let[t,,n]=i.size??(i.lamp?cu[i.lamp]:[.3,.3,.3]);return i.lamp&&Yd.has(i.lamp)?e-n/2:(i.base??0)+(i.lamp==="strip"&&i.upright?t:n)/2}function t2(i,e,t,n){let[r,o,s]=e.size??cu[e.lamp],a=e.base??0,l=(e.rotation??0)*pt,c=Math.cos(l),u=Math.sin(l),h=(_,g)=>[e.x+_*c-g*u,e.z+_*u+g*c],d=(_,g,m,w,y,b=14)=>{let x=[];for(let M=0;M<b;M++){let A=M/b*Math.PI*2;x.push([e.x+Math.cos(A)*_,e.z+Math.sin(A)*_])}St(i,x,g,m,w,y,{aoFrom:0,bottom:!0})},f=(_,g,m,w,y,b,x,M=x)=>St(i,[h(_,m),h(g,m),h(g,w),h(_,w)],y,b,x,M,{aoFrom:0,bottom:!0}),p=Math.max(.05,Math.min(r,o)/2);switch(e.lamp){case"ceiling":d(p*.25,t-.04,t,ut,ut,8),d(p,t-Math.max(.04,s)-.035,t-.04,n,n);break;case"pendant":{let _=Math.max(.4,t-s);d(.06,t-.02,t,ut,ut,8);let g=e.variant==="globe"?_+2*p:e.variant==="drum"?_+.24:_+.2;if(d(.008,g,t-.02,ut,ut,5),e.variant==="globe")for(let w=0;w<7;w++){let y=Math.PI*(w/7),b=Math.PI*((w+1)/7);d(p*Math.max(.2,Math.sin((y+b)/2)),_+p-p*Math.cos(y),_+p-p*Math.cos(b),n,n,14)}else if(e.variant==="cone")for(let w=0;w<4;w++)d(p*(.25+.75*(4-w)/4),_+.06*w,_+.06*(w+1),n,n,16);else e.variant==="drum"?d(p,_,_+.24,n,n,18):(d(p*.35,_+.14,_+.2,n,n,12),d(p,_,_+.14,n,n,16));break}case"downlight":d(p,t-.012,t,ut,ut,12),d(p*.7,t-.02,t-.012,n,n,12);break;case"spot":d(p*.6,t-.02,t,ut,ut,10),d(p,t-Math.max(.06,s),t-.02,ut,ut,12),d(p*.8,t-Math.max(.06,s)-.008,t-Math.max(.06,s),n,n,12);break;case"panel":f(-r/2,r/2,-o/2,o/2,t-Math.max(.015,s),t,ut,ut),f(-r/2+.02,r/2-.02,-o/2+.02,o/2-.02,t-Math.max(.015,s)-.004,t-Math.max(.015,s),n);break;case"uplight":d(Math.max(.1,p*.6),a,a+.03,ut,ut),d(.014,a+.03,a+s-.12,ut,ut,6),d(p,a+s-.14,a+s-.02,ut,ut),d(p*.92,a+s-.02,a+s,n,n);break;case"bollard":d(p,a,a+s-.14,ut,ut,10),d(p*.9,a+s-.14,a+s-.03,n,n,10),d(p*1.1,a+s-.03,a+s,ut,ut,10);break;case"garden":d(.012,a,a+s-.08,ut,ut,5),d(p,a+s-.08,a+s-.01,ut,ut,10),d(p*.8,a+s-.01,a+s,n,n,10);break;case"floor":d(Math.max(.1,p*.7),a,a+.03,ut,ut),d(.014,a+.03,a+s-.28,ut,ut,6),d(p,a+s-.3,a+s,n,n);break;case"table":d(Math.max(.05,p*.55),a,a+.03,ut,ut),d(.012,a+.03,a+s-.16,ut,ut,6),d(p,a+s-.18,a+s,n,n);break;case"wall":{let _=e.base??bc;f(-r/2+.03,r/2-.03,-o/2,-o/2+.02,_,_+s,ut),f(-r/2,r/2,-o/2+.02,o/2,_+s*.15,_+s*.85,n);break}case"strip":{let _=Math.max(.02,s),g=e.base!=null?e.base+_:t-.04;if(!e.roll&&!e.upright){f(-r/2,r/2,-o/2,o/2,g-_,g,n);break}let m=(e.roll??0)*pt,w=Math.cos(m),y=Math.sin(m),b=e.upright?a+r/2:g-_/2,x=(T,P,C)=>{let R=T,E=P*w-C*y,I=P*y+C*w;return e.upright&&([R,E]=[-E,R]),[e.x+R*c-I*u,b+E,e.z+R*u+I*c]},M=[x(-r/2,-_/2,-o/2),x(r/2,-_/2,-o/2),x(r/2,-_/2,o/2),x(-r/2,-_/2,o/2),x(-r/2,_/2,-o/2),x(r/2,_/2,-o/2),x(r/2,_/2,o/2),x(-r/2,_/2,o/2)],A=new j(n),v=[e.x,b,e.z],S=(T,P,C,R)=>{let[E,I,L]=[M[T],M[P],M[C]],N=[(I[1]-E[1])*(L[2]-E[2])-(I[2]-E[2])*(L[1]-E[1]),(I[2]-E[2])*(L[0]-E[0])-(I[0]-E[0])*(L[2]-E[2]),(I[0]-E[0])*(L[1]-E[1])-(I[1]-E[1])*(L[0]-E[0])],B=[E[0]-v[0],E[1]-v[1],E[2]-v[2]],D=N[0]*B[0]+N[1]*B[1]+N[2]*B[2]<0,[O,U,Z,q]=D?[M[R],M[C],M[P],M[T]]:[M[T],M[P],M[C],M[R]];i.tri(O,U,Z,A,A,A),i.tri(O,Z,q,A,A,A)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{Ed as FloorMap,qd as FloorplanViewer,Rd as WalkCamera,Tk as createViewer,lk as funLib,BS as furnitureFront,NS as furniturePreview,YS as isLowEnd,Wd as pushLampModel};
