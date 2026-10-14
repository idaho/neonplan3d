var Mf=0,zu=1,Sf=2;var as=1,Tf=2,oo=3,ti=0,Qt=1,ht=2,ni=0,Oi=1,Dt=2,Bu=3,ls=4,Af=5;var fr=100,Ef=101,Rf=102,Pf=103,kf=104,Cf=200,If=201,Lf=202,Ff=203,Ou=204,Uu=205,Df=206,Nf=207,zf=208,Bf=209,Of=210,Uf=211,Vf=212,Gf=213,Hf=214,Ra=0,Pa=1,ka=2,qr=3,Ca=4,Ia=5,La=6,Fa=7,Vu=0,Wf=1,Xf=2,Vn=0,Gu=1,Hu=2,Wu=3,Xu=4,Ku=5,Yu=6,qu=7;var Zu=300,Ui=301,pr=302,ml=303,gl=304,cs=306,lr=1e3,xn=1001,Da=1002,Kt=1003,Kf=1004;var us=1005;var jt=1006,_l=1007;var Vi=1008;var wn=1009,$u=1010,Ju=1011,so=1012,bl=1013,Gn=1014,Hn=1015,Wn=1016,vl=1017,xl=1018,ao=1020,ju=35902,Qu=35899,eh=1021,th=1022,Pn=1023,Jn=1026,Gi=1027,nh=1028,yl=1029,Hi=1030,wl=1031;var Ml=1033,hs=33776,ds=33777,fs=33778,ps=33779,Sl=35840,Tl=35841,Al=35842,El=35843,Rl=36196,Pl=37492,kl=37496,Cl=37488,Il=37489,ms=37490,Ll=37491,Fl=37808,Dl=37809,Nl=37810,zl=37811,Bl=37812,Ol=37813,Ul=37814,Vl=37815,Gl=37816,Hl=37817,Wl=37818,Xl=37819,Kl=37820,Yl=37821,ql=36492,Zl=36494,$l=36495,Jl=36283,jl=36284,gs=36285,Ql=36286;var Do=2300,Na=2301,Ta=2302,Au=2303,Eu=2400,Ru=2401,Pu=2402;var Yf=3200;var ih=0,qf=1,mi="",zt="srgb",No="srgb-linear",zo="linear",xt="srgb";var Aa=7680;var Zf=519,$f=512,Jf=513,jf=514,ec=515,Qf=516,ep=517,tc=518,tp=519,np=35044,rh=35048;var oh="300 es",zn=2e3,Bo=2001;function Ag(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Eg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ip(){let i=Zr("canvas");return i.style.display="block",i}var Gd={},$r=null;function sh(...i){let e="THREE."+i.shift();$r?$r("log",e,...i):console.log(e,...i)}function rp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=rp(i);let e="THREE."+i.shift();if($r)$r("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=rp(i);let e="THREE."+i.shift();if($r)$r("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ar(...i){let e=i.join(" ");e in Gd||(Gd[e]=!0,Xe(...i))}function op(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}var sp={[Ra]:Pa,[ka]:La,[Ca]:Fa,[qr]:Ia,[Pa]:Ra,[La]:ka,[Fa]:Ca,[Ia]:qr},jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var eu=Math.PI/180,za=180/Math.PI;function _s(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function Rg(i,e){return(i%e+e)%e}function tu(i,e,t){return(1-t)*i+t*e}function Ao(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var dh=class dh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dh.prototype.isVector2=!0;var Ee=dh,Qn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],h=o[s+0],f=o[s+1],p=o[s+2],_=o[s+3];if(d!==_||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*_;m<0&&(h=-h,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let w=Math.acos(m),x=Math.sin(w);g=Math.sin(g*w)/x,a=Math.sin(a*w)/x,l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+_*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+_*a;let w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=o[s],h=o[s+1],f=o[s+2],p=o[s+3];return e[t]=a*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-a*f,e[t+2]=c*p+u*f+a*h-l*d,e[t+3]=u*p-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(o/2),h=l(n/2),f=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(o-c)*f,this._z=(s-r)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(o+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(o-c)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(s-r)/f,this._x=(o+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},fh=class fh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*u,this.y=n+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nu.copy(this).projectOnVector(e),this.sub(nu)}reflect(e){return this.sub(nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fh.prototype.isVector3=!0;var V=fh,nu=new V,Hd=new Qn,ph=class ph{constructor(e,t,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],_=r[0],m=r[3],g=r[6],w=r[1],x=r[4],b=r[7],y=r[2],M=r[5],E=r[8];return o[0]=s*_+a*w+l*y,o[3]=s*m+a*x+l*M,o[6]=s*g+a*b+l*E,o[1]=c*_+u*w+d*y,o[4]=c*m+u*x+d*M,o[7]=c*g+u*b+d*E,o[2]=h*_+f*w+p*y,o[5]=h*m+f*x+p*M,o[8]=h*g+f*b+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,h=a*l-u*o,f=c*o-s*l,p=t*d+n*h+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=d*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*s)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*o-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*o)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(iu.makeScale(e,t)),this}rotate(e){return ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(iu.makeRotation(-e)),this}translate(e,t){return ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(iu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ph.prototype.isMatrix3=!0;var $e=ph,iu=new $e,Wd=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xd=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pg(){let i={enabled:!0,workingColorSpace:No,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===xt&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===xt&&(r.r=Yr(r.r),r.g=Yr(r.g),r.b=Yr(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mi?zo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return ar("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return ar("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[No]:{primaries:e,whitePoint:n,transfer:zo,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}var ut=Pg();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Lr,Ba=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lr===void 0&&(Lr=Zr("canvas")),Lr.width=e.width,Lr.height=e.height;let r=Lr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Lr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=fi(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kg=0,Jr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=_s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(ru(r[s].image)):o.push(ru(r[s]))}else o=ru(r);n.url=o}return t||(e.images[this.uuid]=n),n}};function ru(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var Cg=0,ou=new V,sn=class i extends jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=xn,r=xn,o=jt,s=Vi,a=Pn,l=wn,c=i.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=_s(),this.name="",this.source=new Jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ou).x}get height(){return this.source.getSize(ou).y}get depth(){return this.source.getSize(ou).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lr:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lr:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Zu;sn.DEFAULT_ANISOTROPY=1;var mh=class mh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,b=(f+1)/2,y=(g+1)/2,M=(u+h)/4,E=(d+_)/4,v=(p+m)/4;return x>b&&x>y?x<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(x),r=M/n,o=E/n):b>y?b<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),n=M/r,o=v/r):y<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(y),n=E/o,r=v/o),this.set(n,r,o,t),this}let w=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-p)/w,this.y=(d-_)/w,this.z=(h-u)/w,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mh.prototype.isVector4=!0;var Lt=mh,Oa=class extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},o=new sn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Jr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Oa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oo=class extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ua=class extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var pl=class pl{constructor(e,t,n,r,o,s,a,l,c,u,d,h,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,d,h,f,p,_,m)}set(e,t,n,r,o,s,a,l,c,u,d,h,f,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=o,g[5]=s,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),o=1/Fr.setFromMatrixColumn(e,1).length(),s=1/Fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){let h=s*u,f=s*d,p=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=p+f*c,t[10]=s*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,p=c*u,_=c*d;t[0]=h+_*a,t[4]=p*a-f,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=f*a-p,t[6]=_+h*a,t[10]=s*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,p=c*u,_=c*d;t[0]=h-_*a,t[4]=-s*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=s*u,t[9]=_-h*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){let h=s*u,f=s*d,p=a*u,_=a*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){let h=s*l,f=s*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=p*d+f,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-_*d}else if(e.order==="XZY"){let h=s*l,f=s*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=s*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ig,e,Lg)}lookAt(e,t,n){let r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Ai.crossVectors(n,_n),Ai.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Ai.crossVectors(n,_n)),Ai.normalize(),ea.crossVectors(_n,Ai),r[0]=Ai.x,r[4]=ea.x,r[8]=_n.x,r[1]=Ai.y,r[5]=ea.y,r[9]=_n.y,r[2]=Ai.z,r[6]=ea.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],w=n[3],x=n[7],b=n[11],y=n[15],M=r[0],E=r[4],v=r[8],S=r[12],T=r[1],P=r[5],k=r[9],R=r[13],A=r[2],I=r[6],L=r[10],z=r[14],B=r[3],N=r[7],O=r[11],U=r[15];return o[0]=s*M+a*T+l*A+c*B,o[4]=s*E+a*P+l*I+c*N,o[8]=s*v+a*k+l*L+c*O,o[12]=s*S+a*R+l*z+c*U,o[1]=u*M+d*T+h*A+f*B,o[5]=u*E+d*P+h*I+f*N,o[9]=u*v+d*k+h*L+f*O,o[13]=u*S+d*R+h*z+f*U,o[2]=p*M+_*T+m*A+g*B,o[6]=p*E+_*P+m*I+g*N,o[10]=p*v+_*k+m*L+g*O,o[14]=p*S+_*R+m*z+g*U,o[3]=w*M+x*T+b*A+y*B,o[7]=w*E+x*P+b*I+y*N,o[11]=w*v+x*k+b*L+y*O,o[15]=w*S+x*R+b*z+y*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],w=l*f-c*h,x=a*f-c*d,b=a*h-l*d,y=s*f-c*u,M=s*h-l*u,E=s*d-a*u;return t*(_*w-m*x+g*b)-n*(p*w-m*y+g*M)+r*(p*x-_*y+g*E)-o*(p*b-_*M+m*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[1],s=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(s*u-a*c)-n*(o*u-a*l)+r*(o*c-s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],w=t*a-n*s,x=t*l-r*s,b=t*c-o*s,y=n*l-r*a,M=n*c-o*a,E=r*c-o*l,v=u*_-d*p,S=u*m-h*p,T=u*g-f*p,P=d*m-h*_,k=d*g-f*_,R=h*g-f*m,A=w*R-x*k+b*P+y*T-M*S+E*v;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return e[0]=(a*R-l*k+c*P)*I,e[1]=(r*k-n*R-o*P)*I,e[2]=(_*E-m*M+g*y)*I,e[3]=(h*M-d*E-f*y)*I,e[4]=(l*T-s*R-c*S)*I,e[5]=(t*R-r*T+o*S)*I,e[6]=(m*b-p*E-g*x)*I,e[7]=(u*E-h*b+f*x)*I,e[8]=(s*k-a*T+c*v)*I,e[9]=(n*T-t*k-o*v)*I,e[10]=(p*M-_*b+g*w)*I,e[11]=(d*b-u*M-f*w)*I,e[12]=(a*S-s*P-l*v)*I,e[13]=(t*P-n*S+r*v)*I,e[14]=(_*x-p*y-m*w)*I,e[15]=(u*y-d*x+h*w)*I,this}scale(e){let t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,h=o*c,f=o*u,p=o*d,_=s*u,m=s*d,g=a*d,w=l*c,x=l*u,b=l*d,y=n.x,M=n.y,E=n.z;return r[0]=(1-(_+g))*y,r[1]=(f+b)*y,r[2]=(p-x)*y,r[3]=0,r[4]=(f-b)*M,r[5]=(1-(h+g))*M,r[6]=(m+w)*M,r[7]=0,r[8]=(p+x)*E,r[9]=(m-w)*E,r[10]=(1-(h+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let s=Fr.set(r[0],r[1],r[2]).length(),a=Fr.set(r[4],r[5],r[6]).length(),l=Fr.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Fn.copy(this);let c=1/s,u=1/a,d=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,t.setFromRotationMatrix(Fn),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,o,s,a=zn,l=!1){let c=this.elements,u=2*o/(t-e),d=2*o/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r),p,_;if(l)p=o/(s-o),_=s*o/(s-o);else if(a===zn)p=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===Bo)p=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=zn,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),f=-(n+r)/(n-r),p,_;if(l)p=1/(s-o),_=s/(s-o);else if(a===zn)p=-2/(s-o),_=-(s+o)/(s-o);else if(a===Bo)p=-1/(s-o),_=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};pl.prototype.isMatrix4=!0;var Pt=pl,Fr=new V,Fn=new Pt,Ig=new V(0,0,0),Lg=new V(1,1,1),Ai=new V,ea=new V,_n=new V,Kd=new Pt,Yd=new Qn,Bn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yd.setFromEuler(this),this.setFromQuaternion(Yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fg=0,qd=new V,Dr=new Qn,li=new Pt,ta=new V,Eo=new V,Dg=new V,Ng=new Qn,Zd=new V(1,0,0),$d=new V(0,1,0),Jd=new V(0,0,1),jd={type:"added"},zg={type:"removed"},Nr={type:"childadded",child:null},su={type:"childremoved",child:null},pn=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new V,t=new Bn,n=new Qn,r=new V(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new $e}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(Zd,e)}rotateY(e){return this.rotateOnAxis($d,e)}rotateZ(e){return this.rotateOnAxis(Jd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zd,e)}translateY(e){return this.translateOnAxis($d,e)}translateZ(e){return this.translateOnAxis(Jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ta.copy(e):ta.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Eo,ta,this.up):li.lookAt(ta,Eo,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(li),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jd),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zg),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jd),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,Dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,Ng,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*r,o[13]+=n-o[1]*t-o[5]*n-o[9]*r,o[14]+=r-o[2]*t-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){let a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),f=s(e.animations),p=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function s(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pn.DEFAULT_UP=new V(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bg={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},na={h:0,s:0,l:0};function au(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var J=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ut.workingColorSpace){if(e=Rg(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=au(s,o,e+1/3),this.g=au(s,o,e),this.b=au(s,o,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=zt){function n(o){o!==void 0&&parseFloat(o)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=ap[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ut.workingToColorSpace(rn.copy(this),e),Math.round(ot(rn.r*255,0,255))*65536+Math.round(ot(rn.g*255,0,255))*256+Math.round(ot(rn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(rn.copy(this),t);let n=rn.r,r=rn.g,o=rn.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,u=(a+s)/2;if(a===s)l=0,c=0;else{let d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=zt){ut.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,r=rn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(na);let n=tu(Ei.h,na.h,t),r=tu(Ei.s,na.s,t),o=tu(Ei.l,na.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new J;J.NAMES=ap;var Uo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new J(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ii=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Dn=new V,ci=new V,lu=new V,ui=new V,zr=new V,Br=new V,Qd=new V,cu=new V,uu=new V,hu=new V,du=new Lt,fu=new Lt,pu=new Lt,Ci=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Dn.subVectors(e,t),r.cross(Dn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Dn.subVectors(r,t),ci.subVectors(n,t),lu.subVectors(e,t);let s=Dn.dot(Dn),a=Dn.dot(ci),l=Dn.dot(lu),c=ci.dot(ci),u=ci.dot(lu),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,p=(s*u-a*l)*h;return o.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ui.x),l.addScaledVector(s,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return du.setScalar(0),fu.setScalar(0),pu.setScalar(0),du.fromBufferAttribute(e,t),fu.fromBufferAttribute(e,n),pu.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(du,o.x),s.addScaledVector(fu,o.y),s.addScaledVector(pu,o.z),s}static isFrontFacing(e,t,n,r){return Dn.subVectors(n,t),ci.subVectors(e,t),Dn.cross(ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Dn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,o=this.c,s,a;zr.subVectors(r,n),Br.subVectors(o,n),cu.subVectors(e,n);let l=zr.dot(cu),c=Br.dot(cu);if(l<=0&&c<=0)return t.copy(n);uu.subVectors(e,r);let u=zr.dot(uu),d=Br.dot(uu);if(u>=0&&d<=u)return t.copy(r);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(zr,s);hu.subVectors(e,o);let f=zr.dot(hu),p=Br.dot(hu);if(p>=0&&f<=p)return t.copy(o);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Br,a);let m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return Qd.subVectors(o,r),a=(d-u)/(d-u+(f-p)),t.copy(r).addScaledVector(Qd,a);let g=1/(m+_+h);return s=_*g,a=h*g,t.copy(n).addScaledVector(zr,s).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Nn):Nn.fromBufferAttribute(o,s),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),ra.subVectors(this.max,Ro),Or.subVectors(e.a,Ro),Ur.subVectors(e.b,Ro),Vr.subVectors(e.c,Ro),Ri.subVectors(Ur,Or),Pi.subVectors(Vr,Ur),ir.subVectors(Or,Vr);let t=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-ir.z,ir.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,ir.z,0,-ir.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-ir.y,ir.x,0];return!mu(t,Or,Ur,Vr,ra)||(t=[1,0,0,0,1,0,0,0,1],!mu(t,Or,Ur,Vr,ra))?!1:(oa.crossVectors(Ri,Pi),t=[oa.x,oa.y,oa.z],mu(t,Or,Ur,Vr,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hi=[new V,new V,new V,new V,new V,new V,new V,new V],Nn=new V,ia=new dn,Or=new V,Ur=new V,Vr=new V,Ri=new V,Pi=new V,ir=new V,Ro=new V,ra=new V,oa=new V,rr=new V;function mu(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){rr.fromArray(i,o);let a=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),u=n.dot(rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ut=new V,sa=new Ee,Og=0,En=class extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Og++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=np,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ao(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array),o=fn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Vo=class extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var cr=class extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Te=class extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ug=new dn,Po=new V,gu=new V,Li=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ug.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);let t=Po.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Po,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(gu)),this.expandByPoint(Po.copy(e.center).sub(gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Vg=0,An=new Pt,_u=new pn,Gr=new V,bn=new dn,ko=new dn,Xt=new V,Ke=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ag(e)?cr:Vo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new $e().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return _u.lookAt(e),_u.updateMatrix(),this.applyMatrix4(_u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let o=t[n];bn.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(bn.min,ko.min),bn.expandByPoint(Xt),Xt.addVectors(bn.max,ko.max),bn.expandByPoint(Xt)):(bn.expandByPoint(ko.min),bn.expandByPoint(ko.max))}bn.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)Xt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(Xt));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(Gr.fromBufferAttribute(e,c),Xt.add(Gr)),r=Math.max(r,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,o=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new En(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new V,l[v]=new V;let c=new V,u=new V,d=new V,h=new Ee,f=new Ee,p=new Ee,_=new V,m=new V;function g(v,S,T){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,T),h.fromBufferAttribute(o,v),f.fromBufferAttribute(o,S),p.fromBufferAttribute(o,T),u.sub(c),d.sub(c),f.sub(h),p.sub(h);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(P),a[v].add(_),a[S].add(_),a[T].add(_),l[v].add(m),l[S].add(m),l[T].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,S=w.length;v<S;++v){let T=w[v],P=T.start,k=T.count;for(let R=P,A=P+k;R<A;R+=3)g(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let x=new V,b=new V,y=new V,M=new V;function E(v){y.fromBufferAttribute(r,v),M.copy(y);let S=a[v];x.copy(S),x.sub(y.multiplyScalar(y.dot(S))).normalize(),b.crossVectors(M,S);let P=b.dot(l[v])<0?-1:1;s.setXYZW(v,x.x,x.y,x.z,P)}for(let v=0,S=w.length;v<S;++v){let T=w[v],P=T.start,k=T.count;for(let R=P,A=P+k;R<A;R+=3)E(e.getX(R+0)),E(e.getX(R+1)),E(e.getX(R+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let r=new V,o=new V,s=new V,a=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new En(h,u,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let o=e.morphAttributes;for(let c in o){let u=[],d=o[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,u=s.length;c<u;c++){let d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var bu=new V,Gg=new V,Hg=new $e,vn=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=bu.subVectors(n,t).cross(Gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(bu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hg.getNormalMatrix(e),r=this.coplanarPoint(bu).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Wg=0,pi=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=Oi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ou,this.blendDst=Uu,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new J().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var di=new V,vu=new V,aa=new V,la=new V,ur=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){vu.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),la.copy(this.origin).sub(vu);let o=e.distanceTo(t)*.5,s=-this.direction.dot(aa),a=la.dot(this.direction),l=-la.dot(aa),c=la.lengthSq(),u=Math.abs(1-s*s),d,h,f,p;if(u>0)if(d=s*l-a,h=s*a-l,p=o*u,d>=0)if(h>=-p)if(h<=p){let _=1/u;d*=_,h*=_,f=d*(d+s*h+2*a)+h*(s*d+h+2*l)+c}else h=o,d=Math.max(0,-(s*h+a)),f=-d*d+h*(h+2*l)+c;else h=-o,d=Math.max(0,-(s*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-o,-l),o),f=h*(h+2*l)+c):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+h*(h+2*l)+c);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(vu).addScaledVector(aa,h),f}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let n=di.dot(this.direction),r=di.dot(di)-n*n,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(o=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-s.x,h=e.y-s.y,f=e.z-s.z,p=t.x-s.x,_=t.y-s.y,m=t.z-s.z,g=n.x-s.x,w=n.y-s.y,x=n.z-s.z,b=Math.abs(l),y=Math.abs(c),M=Math.abs(u),E,v,S,T,P,k,R,A,I,L,z,B;if(b>=y&&b>=M?(S=l,k=d,I=p,B=g,l>=0?(E=c,v=u,T=h,P=f,R=_,A=m,L=w,z=x):(E=u,v=c,T=f,P=h,R=m,A=_,L=x,z=w)):y>=M?(S=c,k=h,I=_,B=w,c>=0?(E=u,v=l,T=f,P=d,R=m,A=p,L=x,z=g):(E=l,v=u,T=d,P=f,R=p,A=m,L=g,z=x)):(S=u,k=f,I=m,B=x,u>=0?(E=l,v=c,T=d,P=h,R=p,A=_,L=g,z=w):(E=c,v=l,T=h,P=d,R=_,A=p,L=w,z=g)),S===0)return null;let N=E/S,O=v/S,U=1/S,Z=T-N*k,q=P-O*k,he=R-N*I,ie=A-O*I,se=L-N*B,H=z-O*B,Y=se*ie-H*he,le=Z*H-q*se,de=he*q-ie*Z;if(r){if(Y<0||le<0||de<0)return null}else if((Y<0||le<0||de<0)&&(Y>0||le>0||de>0))return null;let j=Y+le+de;if(j===0)return null;let ce=U*(Y*k+le*I+de*B);return(j>0?ce<0:ce>0)?null:this.at(ce/j,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ef=new Pt,or=new ur,ca=new Li,tf=new V,ua=new V,ha=new V,da=new V,xu=new V,fa=new V,nf=new V,pa=new V,He=class extends pn{constructor(e=new Ke,t=new et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){fa.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let u=a[l],d=o[l];u!==0&&(xu.fromBufferAttribute(d,e),s?fa.addScaledVector(xu,u):fa.addScaledVector(xu.sub(t),u))}t.add(fa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(o),or.copy(e.ray).recast(e.near),!(ca.containsPoint(or.origin)===!1&&(or.intersectSphere(ca,tf)===null||or.origin.distanceToSquared(tf)>(e.far-e.near)**2))&&(ef.copy(o).invert(),or.copy(e.ray).applyMatrix4(ef),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,h=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,_=h.length;p<_;p++){let m=h[p],g=s[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=w,y=x;b<y;b+=3){let M=a.getX(b),E=a.getX(b+1),v=a.getX(b+2);r=ma(this,g,e,n,c,u,d,M,E,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let w=a.getX(m),x=a.getX(m+1),b=a.getX(m+2);r=ma(this,s,e,n,c,u,d,w,x,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,_=h.length;p<_;p++){let m=h[p],g=s[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=w,y=x;b<y;b+=3){let M=b,E=b+1,v=b+2;r=ma(this,g,e,n,c,u,d,M,E,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let w=m,x=m+1,b=m+2;r=ma(this,s,e,n,c,u,d,w,x,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Xg(i,e,t,n,r,o,s,a){let l;if(e.side===Qt?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===ti,a),l===null)return null;pa.copy(a),pa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(pa);return c<t.near||c>t.far?null:{distance:c,point:pa.clone(),object:i}}function ma(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,ua),i.getVertexPosition(l,ha),i.getVertexPosition(c,da);let u=Xg(i,e,t,n,ua,ha,da,nf);if(u){let d=new V;Ci.getBarycoord(nf,ua,ha,da,d),r&&(u.uv=Ci.getInterpolatedAttribute(r,a,l,c,d,new Ee)),o&&(u.uv1=Ci.getInterpolatedAttribute(o,a,l,c,d,new Ee)),s&&(u.normal=Ci.getInterpolatedAttribute(s,a,l,c,d,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new V,materialIndex:0};Ci.getNormal(ua,ha,da,h.normal),u.face=h,u.barycoord=d}return u}var Va=class extends sn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=Kt,u=Kt,d,h){super(null,s,a,l,c,u,r,o,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sr=new Li,Kg=new Ee(.5,.5),ga=new V,Go=class{constructor(e=new vn,t=new vn,n=new vn,r=new vn,o=new vn,s=new vn){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],c=o[3],u=o[4],d=o[5],h=o[6],f=o[7],p=o[8],_=o[9],m=o[10],g=o[11],w=o[12],x=o[13],b=o[14],y=o[15];if(r[0].setComponents(c-s,f-u,g-p,y-w).normalize(),r[1].setComponents(c+s,f+u,g+p,y+w).normalize(),r[2].setComponents(c+a,f+d,g+_,y+x).normalize(),r[3].setComponents(c-a,f-d,g-_,y-x).normalize(),n)r[4].setComponents(l,h,m,b).normalize(),r[5].setComponents(c-l,f-h,g-m,y-b).normalize();else if(r[4].setComponents(c-l,f-h,g-m,y-b).normalize(),t===zn)r[5].setComponents(c+l,f+h,g+m,y+b).normalize();else if(t===Bo)r[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){sr.center.set(0,0,0);let t=Kg.distanceTo(e.center);return sr.radius=.7071067811865476+t,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ga.x=r.normal.x>0?e.max.x:e.min.x,ga.y=r.normal.y>0?e.max.y:e.min.y,ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yt=class extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new J(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ga=new V,Ha=new V,rf=new Pt,Co=new ur,_a=new Li,yu=new V,of=new V,Wa=class extends pn{constructor(e=new Ke,t=new Yt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)Ga.fromBufferAttribute(t,r-1),Ha.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ga.distanceTo(Ha);e.setAttribute("lineDistance",new Te(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),_a.radius+=o,e.ray.intersectsSphere(_a)===!1)return;rf.copy(r).invert(),Co.copy(e.ray).applyMatrix4(rf);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let _=f,m=p-1;_<m;_+=c){let g=u.getX(_),w=u.getX(_+1),x=ba(this,e,Co,l,g,w,_);x&&t.push(x)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(f),g=ba(this,e,Co,l,_,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let _=f,m=p-1;_<m;_+=c){let g=ba(this,e,Co,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=ba(this,e,Co,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function ba(i,e,t,n,r,o,s){let a=i.geometry.attributes.position;if(Ga.fromBufferAttribute(a,r),Ha.fromBufferAttribute(a,o),t.distanceSqToSegment(Ga,Ha,yu,of)>n)return;yu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(yu);if(!(c<e.near||c>e.far))return{distance:c,point:of.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var sf=new V,af=new V,qt=class extends Wa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)sf.fromBufferAttribute(t,r),af.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+sf.distanceTo(af);e.setAttribute("lineDistance",new Te(n,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var hr=class extends pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new J(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lf=new Pt,ku=new ur,va=new Li,xa=new V,eo=class extends pn{constructor(e=new Ke,t=new hr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),va.radius+=o,e.ray.intersectsSphere(va)===!1)return;lf.copy(r).invert(),ku.copy(e.ray).applyMatrix4(lf);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let p=h,_=f;p<_;p++){let m=c.getX(p);xa.fromBufferAttribute(d,m),cf(xa,m,l,r,e,t,this)}}else{let h=Math.max(0,s.start),f=Math.min(d.count,s.start+s.count);for(let p=h,_=f;p<_;p++)xa.fromBufferAttribute(d,p),cf(xa,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function cf(i,e,t,n,r,o,s){let a=ku.distanceSqToPoint(i);if(a<t){let l=new V;ku.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Ho=class extends sn{constructor(e=[],t=Ui,n,r,o,s,a,l,c,u){super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},On=class extends sn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends sn{constructor(e,t,n=Gn,r,o,s,a=Kt,l=Kt,c,u=Jn,d=1){if(u!==Jn&&u!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xa=class extends Fi{constructor(e,t=Gn,n=Ui,r,o,s=Kt,a=Kt,l,c=Jn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,o,s,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wo=class extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Di=class i extends Ke{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,n,t,e,s,o,0),p("z","y","x",1,-1,n,t,-e,s,o,1),p("x","z","y",1,1,e,n,t,r,s,2),p("x","z","y",1,-1,e,n,-t,r,s,3),p("x","y","z",1,-1,e,t,n,r,o,4),p("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(d,2));function p(_,m,g,w,x,b,y,M,E,v,S){let T=b/E,P=y/v,k=b/2,R=y/2,A=M/2,I=E+1,L=v+1,z=0,B=0,N=new V;for(let O=0;O<L;O++){let U=O*P-R;for(let Z=0;Z<I;Z++){let q=Z*T-k;N[_]=q*w,N[m]=U*x,N[g]=A,c.push(N.x,N.y,N.z),N[_]=0,N[m]=0,N[g]=M>0?1:-1,u.push(N.x,N.y,N.z),d.push(Z/E),d.push(1-O/v),z+=1}}for(let O=0;O<v;O++)for(let U=0;U<E;U++){let Z=h+U+I*O,q=h+U+I*(O+1),he=h+(U+1)+I*(O+1),ie=h+(U+1)+I*O;l.push(Z,q,ie),l.push(q,he,ie),B+=6}a.addGroup(f,B,S),f+=B,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Xo=class i extends Ke{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let o=[],s=[],a=[],l=[],c=new V,u=new Ee;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=n+d/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),s.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(s[h]/e+1)/2,u.y=(s[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(a,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ko=class i extends Ke{constructor(e=1,t=1,n=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),o=Math.floor(o);let u=[],d=[],h=[],f=[],p=0,_=[],m=n/2,g=0;w(),s===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(f,2));function w(){let b=new V,y=new V,M=0,E=(t-e)/n;for(let v=0;v<=o;v++){let S=[],T=v/o,P=T*(t-e)+e;for(let k=0;k<=r;k++){let R=k/r,A=R*l+a,I=Math.sin(A),L=Math.cos(A);y.x=P*I,y.y=-T*n+m,y.z=P*L,d.push(y.x,y.y,y.z),b.set(I,E,L).normalize(),h.push(b.x,b.y,b.z),f.push(R,1-T),S.push(p++)}_.push(S)}for(let v=0;v<r;v++)for(let S=0;S<o;S++){let T=_[S][v],P=_[S+1][v],k=_[S+1][v+1],R=_[S][v+1];(e>0||S!==0)&&(u.push(T,P,R),M+=3),(t>0||S!==o-1)&&(u.push(P,k,R),M+=3)}c.addGroup(g,M,0),g+=M}function x(b){let y=p,M=new Ee,E=new V,v=0,S=b===!0?e:t,T=b===!0?1:-1;for(let k=1;k<=r;k++)d.push(0,m*T,0),h.push(0,T,0),f.push(.5,.5),p++;let P=p;for(let k=0;k<=r;k++){let A=k/r*l+a,I=Math.cos(A),L=Math.sin(A);E.x=S*L,E.y=m*T,E.z=S*I,d.push(E.x,E.y,E.z),h.push(0,T,0),M.x=I*.5+.5,M.y=L*.5*T+.5,f.push(M.x,M.y),p++}for(let k=0;k<r;k++){let R=y+k,A=P+k;b===!0?u.push(A,A+1,R):u.push(A+1,A,R),v+=3}c.addGroup(g,v,b===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),o=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,o=n.length,s;t?s=t:s=e*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-s,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===s)return r/(o-1);let u=n[r],h=n[r+1]-u,f=(s-u)/h;return(r+f)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);let s=this.getPoint(r),a=this.getPoint(o),l=t||(s.isVector2?new Ee:new V);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],o=[],s=[],a=new V,l=new Pt;for(let f=0;f<=e;f++){let p=f/e;r[f]=this.getTangentAt(p,new V)}o[0]=new V,s[0]=new V;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),s[f]=s[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ot(r[f-1].dot(r[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,p))}s[f].crossVectors(r[f],o[f])}if(t===!0){let f=Math.acos(ot(o[0].dot(o[e]),-1,1));f/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(f=-f);for(let p=1;p<=e;p++)o[p].applyMatrix4(l.makeRotationAxis(r[p],f*p)),s[p].crossVectors(r[p],o[p])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yo=class extends Rn{constructor(e=0,t=0,n=1,r=1,o=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ee){let n=t,r=Math.PI*2,o=this.aEndAngle-this.aStartAngle,s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);let a=this.aStartAngle+e*o,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ka=class extends Yo{constructor(e,t,n,r,o,s){super(e,t,n,n,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let i=0,e=0,t=0,n=0;function r(o,s,a,l){i=o,e=a,t=-3*o+3*s-2*a-l,n=2*o-2*s+a+l}return{initCatmullRom:function(o,s,a,l,c){r(s,a,c*(a-o),c*(l-s))},initNonuniformCatmullRom:function(o,s,a,l,c,u,d){let h=(s-o)/c-(a-o)/(c+u)+(a-s)/u,f=(a-s)/u-(l-s)/(u+d)+(l-a)/d;h*=u,f*=u,r(s,a,h,f)},calc:function(o){let s=o*o,a=s*o;return i+e*o+t*s+n*a}}}var uf=new V,hf=new V,wu=new ah,Mu=new ah,Su=new ah,to=class extends Rn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e,a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%o]:(hf.subVectors(r[0],r[1]).add(r[0]),c=hf);let d=r[a%o],h=r[(a+1)%o];if(this.closed||a+2<o?u=r[(a+2)%o]:(uf.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=uf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),wu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,_,m),Mu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,_,m),Su.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(wu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Mu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Su.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(wu.calc(l),Mu.calc(l),Su.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new V().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function df(i,e,t,n,r){let o=(n-e)*.5,s=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+o+s)*l+(-3*t+3*n-2*o-s)*a+o*i+t}function Yg(i,e){let t=1-i;return t*t*e}function qg(i,e){return 2*(1-i)*i*e}function Zg(i,e){return i*i*e}function Lo(i,e,t,n){return Yg(i,e)+qg(i,t)+Zg(i,n)}function $g(i,e){let t=1-i;return t*t*t*e}function Jg(i,e){let t=1-i;return 3*t*t*i*e}function jg(i,e){return 3*(1-i)*i*i*e}function Qg(i,e){return i*i*i*e}function Fo(i,e,t,n,r){return $g(i,e)+Jg(i,t)+jg(i,n)+Qg(i,r)}var Ya=class extends Rn{constructor(e=new Ee,t=new Ee,n=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ee){let n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(Fo(e,r.x,o.x,s.x,a.x),Fo(e,r.y,o.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qa=class extends Rn{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(Fo(e,r.x,o.x,s.x,a.x),Fo(e,r.y,o.y,s.y,a.y),Fo(e,r.z,o.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Za=class extends Rn{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends Rn{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Rn{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(Lo(e,r.x,o.x,s.x),Lo(e,r.y,o.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends Rn{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(Lo(e,r.x,o.x,s.x),Lo(e,r.y,o.y,s.y),Lo(e,r.z,o.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,l=r[s===0?s:s-1],c=r[s],u=r[s>r.length-2?r.length-1:s+1],d=r[s>r.length-3?r.length-1:s+2];return n.set(df(a,l.x,c.x,u.x,d.x),df(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new Ee().fromArray(r))}return this}},e_=Object.freeze({__proto__:null,ArcCurve:Ka,CatmullRomCurve3:to,CubicBezierCurve:Ya,CubicBezierCurve3:qa,EllipseCurve:Yo,LineCurve:Za,LineCurve3:$a,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:qo,SplineCurve:ja});function t_(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,o=lp(i,0,r,t,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=s_(i,e,o,t)),i.length>80*t){a=i[0],l=i[1];let u=a,d=l;for(let h=t;h<r;h+=t){let f=i[h],p=i[h+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Zo(o,s,t,a,l,c,0),s}function lp(i,e,t,n,r){let o;if(r===__(i,e,t,n)>0)for(let s=e;s<t;s+=n)o=ff(s/n|0,i[s],i[s+1],o);else for(let s=t-n;s>=e;s-=n)o=ff(s/n|0,i[s],i[s+1],o);return o&&no(o,o.next)&&(Jo(o),o=o.next),o}function dr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(no(t,t.next)||It(t.prev,t,t.next)===0)){if(Jo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zo(i,e,t,n,r,o,s){if(!i)return;!s&&o&&h_(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?i_(i,n,r,o):n_(i)){e.push(l.i,i.i,c.i),Jo(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=r_(dr(i),e),Zo(i,e,t,n,r,o,2)):s===2&&o_(i,e,t,n,r,o):Zo(dr(i),e,t,n,r,o,1);break}}}function n_(i){let e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;let r=e.x,o=t.x,s=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,o,s),d=Math.min(a,l,c),h=Math.max(r,o,s),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Io(r,a,o,l,s,c,p.x,p.y)&&It(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function i_(i,e,t,n){let r=i.prev,o=i,s=i.next;if(It(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,u=r.y,d=o.y,h=s.y,f=Math.min(a,l,c),p=Math.min(u,d,h),_=Math.max(a,l,c),m=Math.max(u,d,h),g=Cu(f,p,e,t,n),w=Cu(_,m,e,t,n),x=i.prevZ,b=i.nextZ;for(;x&&x.z>=g&&b&&b.z<=w;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==r&&x!==s&&Io(a,u,l,d,c,h,x.x,x.y)&&It(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=f&&b.x<=_&&b.y>=p&&b.y<=m&&b!==r&&b!==s&&Io(a,u,l,d,c,h,b.x,b.y)&&It(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==r&&x!==s&&Io(a,u,l,d,c,h,x.x,x.y)&&It(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=w;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=m&&b!==r&&b!==s&&Io(a,u,l,d,c,h,b.x,b.y)&&It(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function r_(i,e){let t=i;do{let n=t.prev,r=t.next.next;!no(n,r)&&up(n,t,t.next,r)&&$o(n,r)&&$o(r,n)&&(e.push(n.i,t.i,r.i),Jo(t),Jo(t.next),t=i=r),t=t.next}while(t!==i);return dr(t)}function o_(i,e,t,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&p_(s,a)){let l=hp(s,a);s=dr(s,s.next),l=dr(l,l.next),Zo(s,e,t,n,r,o,0),Zo(l,e,t,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function s_(i,e,t,n){let r=[];for(let o=0,s=e.length;o<s;o++){let a=e[o]*n,l=o<s-1?e[o+1]*n:i.length,c=lp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(f_(c))}r.sort(a_);for(let o=0;o<r.length;o++)t=l_(r[o],t);return t}function a_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function l_(i,e){let t=c_(i,e);if(!t)return e;let n=hp(t,i);return dr(n,n.next),dr(t,t.next)}function c_(i,e){let t=e,n=i.x,r=i.y,o=-1/0,s;if(no(i,t))return t;do{if(no(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>o&&(o=d,s=t.x<t.next.x?t:t.next,d===n))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0;t=s;do{if(n>=t.x&&t.x>=l&&n!==t.x&&cp(r<c?n:o,r,l,c,r<c?o:n,r,t.x,t.y)){let d=Math.abs(r-t.y)/(n-t.x);$o(t,i)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&u_(s,t)))&&(s=t,u=d)}t=t.next}while(t!==a);return s}function u_(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function h_(i,e,t,n){let r=i;do r.z===0&&(r.z=Cu(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,d_(r)}function d_(i){let e,t=1;do{let n=i,r;i=null;let o=null;for(e=0;n;){e++;let s=n,a=0;for(let c=0;c<t&&(a++,s=s.nextZ,!!s);c++);let l=t;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,t*=2}while(e>1);return i}function Cu(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function f_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function cp(i,e,t,n,r,o,s,a){return(r-s)*(e-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(r-s)*(n-a)}function Io(i,e,t,n,r,o,s,a){return!(i===s&&e===a)&&cp(i,e,t,n,r,o,s,a)}function p_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!m_(i,e)&&($o(i,e)&&$o(e,i)&&g_(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||no(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function no(i,e){return i.x===e.x&&i.y===e.y}function up(i,e,t,n){let r=wa(It(i,e,t)),o=wa(It(i,e,n)),s=wa(It(t,n,i)),a=wa(It(t,n,e));return!!(r!==o&&s!==a||r===0&&ya(i,t,e)||o===0&&ya(i,n,e)||s===0&&ya(t,i,n)||a===0&&ya(t,e,n))}function ya(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function wa(i){return i>0?1:i<0?-1:0}function m_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&up(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $o(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function g_(i,e){let t=i,n=!1,r=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function hp(i,e){let t=Iu(i.i,i.x,i.y),n=Iu(e.i,e.x,e.y),r=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function ff(i,e,t,n){let r=Iu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Jo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Iu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function __(i,e,t,n){let r=0;for(let o=e,s=t-n;o<t;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var Lu=class{static triangulate(e,t,n=2){return t_(e,t,n)}},jo=class i{static area(e){let t=e.length,n=0;for(let r=t-1,o=0;o<t;r=o++)n+=e[r].x*e[o].y-e[o].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],o=[];pf(e),mf(n,e);let s=e.length;t.forEach(pf);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,mf(n,t[l]);let a=Lu.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function pf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function mf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Qo=class i extends Ke{constructor(e=[new Ee(0,-.5),new Ee(.5,0),new Ee(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ot(r,0,Math.PI*2);let o=[],s=[],a=[],l=[],c=[],u=1/t,d=new V,h=new Ee,f=new V,p=new V,_=new V,m=0,g=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:m=e[w+1].x-e[w].x,g=e[w+1].y-e[w].y,f.x=g*1,f.y=-m,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[w+1].x-e[w].x,g=e[w+1].y-e[w].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let w=0;w<=t;w++){let x=n+w*u*r,b=Math.sin(x),y=Math.cos(x);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*b,d.y=e[M].y,d.z=e[M].x*y,s.push(d.x,d.y,d.z),h.x=w/t,h.y=M/(e.length-1),a.push(h.x,h.y);let E=l[3*M+0]*b,v=l[3*M+1],S=l[3*M+0]*y;c.push(E,v,S)}}for(let w=0;w<t;w++)for(let x=0;x<e.length-1;x++){let b=x+w*e.length,y=b,M=b+e.length,E=b+e.length+1,v=b+1;o.push(y,M,v),o.push(E,v,M)}this.setIndex(o),this.setAttribute("position",new Te(s,3)),this.setAttribute("uv",new Te(a,2)),this.setAttribute("normal",new Te(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Un=class i extends Ke{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let w=g*h-s;for(let x=0;x<c;x++){let b=x*d-o;p.push(b,-w,0),_.push(0,0,1),m.push(x/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let w=0;w<a;w++){let x=w+c*g,b=w+c*(g+1),y=w+1+c*(g+1),M=w+1+c*g;f.push(x,b,M),f.push(b,y,M)}this.setIndex(f),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},es=class i extends Ke{constructor(e=.5,t=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/r,f=new V,p=new Ee;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){let g=o+m/n*s;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let _=0;_<r;_++){let m=_*(n+1);for(let g=0;g<n;g++){let w=g+m,x=w,b=w+n+1,y=w+n+2,M=w+1;a.push(x,b,M),a.push(b,y,M)}}this.setIndex(a),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ts=class i extends Ke{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(s+a,Math.PI),c=0,u=[],d=new V,h=new V,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let w=[],x=g/n,b=s+x*a,y=e*Math.cos(b),M=Math.sqrt(e*e-y*y),E=0;g===0&&s===0?E=.5/t:g===n&&l===Math.PI&&(E=-.5/t);for(let v=0;v<=t;v++){let S=v/t,T=r+S*o;d.x=-M*Math.cos(T),d.y=y,d.z=M*Math.sin(T),p.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(S+E,1-x),w.push(c++)}u.push(w)}for(let g=0;g<n;g++)for(let w=0;w<t;w++){let x=u[g][w+1],b=u[g][w],y=u[g+1][w],M=u[g+1][w+1];(g!==0||s>0)&&f.push(x,b,M),(g!==n-1||l<Math.PI)&&f.push(b,y,M)}this.setIndex(f),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ns=class i extends Ke{constructor(e=1,t=.4,n=12,r=48,o=Math.PI*2,s=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:o,thetaStart:s,thetaLength:a},n=Math.floor(n),r=Math.floor(r);let l=[],c=[],u=[],d=[],h=new V,f=new V,p=new V;for(let _=0;_<=n;_++){let m=s+_/n*a;for(let g=0;g<=r;g++){let w=g/r*o;f.x=(e+t*Math.cos(m))*Math.cos(w),f.y=(e+t*Math.cos(m))*Math.sin(w),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(w),h.y=e*Math.sin(w),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/r),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=r;m++){let g=(r+1)*_+m-1,w=(r+1)*(_-1)+m-1,x=(r+1)*(_-1)+m,b=(r+1)*_+m;l.push(g,w,b),l.push(w,x,b)}this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var io=class i extends Ke{constructor(e=new qo(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,n=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:o};let s=e.computeFrenetFrames(t,o);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let a=new V,l=new V,c=new Ee,u=new V,d=[],h=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(f,2));function _(){for(let x=0;x<t;x++)m(x);m(o===!1?t:0),w(),g()}function m(x){u=e.getPointAt(x/t,u);let b=s.normals[x],y=s.binormals[x];for(let M=0;M<=r;M++){let E=M/r*Math.PI*2,v=Math.sin(E),S=-Math.cos(E);l.x=S*b.x+v*y.x,l.y=S*b.y+v*y.y,l.z=S*b.z+v*y.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let x=1;x<=t;x++)for(let b=1;b<=r;b++){let y=(r+1)*(x-1)+(b-1),M=(r+1)*x+(b-1),E=(r+1)*x+b,v=(r+1)*(x-1)+b;p.push(y,M,v),p.push(M,E,v)}}function w(){for(let x=0;x<=t;x++)for(let b=0;b<=r;b++)c.x=x/t,c.y=b/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new e_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function mr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(gf(r))r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(gf(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();e[t][n]=o}else e[t][n]=r.slice();else e[t][n]=r}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=mr(i[t]);for(let r in n)e[r]=n[r]}return e}function gf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function b_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var dp={clone:mr,merge:cn},v_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v_,this.fragmentShader=x_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=b_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new J().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(r.value);break;case"v3":this.uniforms[n].value=new V().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Lt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Pt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Qa=class extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var el=class extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tl=class extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Tu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ni=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],o=t[n-1];n:{e:{let s;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=t[++n],e<r)break e}s=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=t[--n-1],e>=o)break e}s=n,n=0;break t}break n}for(;n<s;){let a=n+s>>>1;e<t[a]?s=a:n=a+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=n[o+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nl=class extends Ni{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(e,t,n){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Ru:o=e,a=2*t-n;break;case Pu:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ru:s=e,l=2*n-t;break;case Pu:s=1,l=n+r[1]-r[0];break;default:s=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),_=p*p,m=_*p,g=-h*m+2*h*_-h*p,w=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*p+1,x=(-1-f)*m+(1.5+f)*_+.5*p,b=f*m-f*_;for(let y=0;y!==a;++y)o[y]=g*s[u+y]+w*s[c+y]+x*s[l+y]+b*s[d+y];return o}},il=class extends Ni{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)o[h]=s[c+h]*d+s[l+h]*u;return o}},rl=class extends Ni{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ol=class extends Ni{interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(n-t)/(r-t),_=1-p;for(let m=0;m!==a;++m)o[m]=s[c+m]*_+s[l+m]*p;return o}let h=a*2,f=e-1;for(let p=0;p!==a;++p){let _=s[c+p],m=s[l+p],g=f*h+p*2,w=d[g],x=d[g+1],b=e*h+p*2,y=u[b],M=u[b+1],E=w_(n,t,w,y,r);o[p]=fp(E,_,x,M,m)}return o}};function fp(i,e,t,n,r){let o=1-i;return o*o*o*e+3*o*o*i*t+3*o*i*i*n+i*i*i*r}function y_(i,e,t,n,r){let o=1-i;return 3*o*o*(t-e)+6*o*i*(n-t)+3*i*i*(r-n)}function w_(i,e,t,n,r){let o=(i-e)/(r-e);for(let s=0;s<8;s++){let a=fp(o,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let l=y_(o,e,t,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var yn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Tu(e.settings)&&(n.settings={inTangents:Hr(e.settings.inTangents,Array),outTangents:Hr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ol(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Do:t=this.InterpolantFactoryMethodDiscrete;break;case Na:t=this.InterpolantFactoryMethodLinear;break;case Ta:t=this.InterpolantFactoryMethodSmooth;break;case Au:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return Ta;case this.InterpolantFactoryMethodBezier:return Au}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Tu(this.settings)&&(_f(this.settings.inTangents,e),_f(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<e;)++o;for(;s!==-1&&n[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,o=n.length;o===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){qe("KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(r!==void 0&&Eg(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ta,o=e.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){let _=t[d+p];if(_!==t[h+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];let d=a*n,h=s*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++s}}if(o>0){e[s]=e[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Tu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function _f(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Na;var zi=class extends yn{constructor(e,t,n){super(e,t,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Do;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends yn{constructor(e,t,n,r){super(e,t,n,r)}};sl.prototype.ValueTypeName="color";var al=class extends yn{constructor(e,t,n,r){super(e,t,n,r)}};al.prototype.ValueTypeName="number";var ll=class extends Ni{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Qn.slerpFlat(o,0,s,c-a,s,c,l);return o}},is=class extends yn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ll(this.times,this.values,this.getValueSize(),e)}};is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends yn{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Do;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends yn{constructor(e,t,n,r){super(e,t,n,r)}};cl.prototype.ValueTypeName="vector";var Ea={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(bf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!bf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function bf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ul=class{constructor(e,t,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pp=new ul,ro=class{constructor(e){this.manager=e!==void 0?e:pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wr=new WeakMap,hl=class extends ro{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,s=Ea.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let d=Wr.get(s);d===void 0&&(d=[],Wr.set(s,d)),d.push({onLoad:t,onError:r})}return s}let a=Zr("img");function l(){u(),t&&t(this);let d=Wr.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}Wr.delete(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),Ea.remove(`image:${e}`);let h=Wr.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onError&&p.onError(d)}Wr.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ea.add(`image:${e}`,a),o.manager.itemStart(e),a.src=e,a}};var rs=class extends ro{constructor(e){super(e)}load(e,t,n,r){let o=new sn,s=new hl(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}};var Ma=new V,Sa=new Qn,$n=new V,os=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ma,Sa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ma,Sa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new V,vf=new Ee,xf=new Ee,on=class extends os{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(eu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return za*2*Math.atan(Math.tan(eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,vf,xf),t.subVectors(xf,vf)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(eu*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ei=class extends os{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Xr=-90,Kr=1,dl=class extends pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new on(Xr,Kr,e,t);r.layers=this.layers,this.add(r);let o=new on(Xr,Kr,e,t);o.layers=this.layers,this.add(o);let s=new on(Xr,Kr,e,t);s.layers=this.layers,this.add(s);let a=new on(Xr,Kr,e,t);a.layers=this.layers,this.add(a);let l=new on(Xr,Kr,e,t);l.layers=this.layers,this.add(l);let c=new on(Xr,Kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(let c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},fl=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ch="\\[\\]\\.:\\/",M_=new RegExp("["+ch+"]","g"),uh="[^"+ch+"]",S_="[^"+ch.replace("\\.","")+"]",T_=/((?:WC+[\/:])*)/.source.replace("WC",uh),A_=/(WCOD+)?/.source.replace("WCOD",S_),E_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),R_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),P_=new RegExp("^"+T_+A_+E_+R_+"$"),k_=["material","materials","bones","map"],Fu=class{constructor(e,t,n){let r=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(M_,"")}static parseTrackName(e){let t=P_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);k_.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,o=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[r];if(s===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Fu;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IS=new Float32Array(1);var yf=new Pt,ss=class{constructor(e,t,n=0,r=1/0){this.ray=new ur(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yf),this}intersectObject(e,t=!0,n=[]){return Du(e,this,n,t),n.sort(wf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)Du(e[r],this,n,t);return n.sort(wf),n}};function wf(i,e){return i.distance-e.distance}function Du(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)Du(o[s],e,t,!0)}}var gh=class gh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let o=this.elements;return o[0]=e,o[2]=t,o[1]=n,o[3]=r,this}};gh.prototype.isMatrix2=!0;var Nu=gh;function hh(i,e,t,n){let r=C_(n);switch(t){case eh:return i*e;case nh:return i*e/r.components*r.byteLength;case yl:return i*e/r.components*r.byteLength;case Hi:return i*e*2/r.components*r.byteLength;case wl:return i*e*2/r.components*r.byteLength;case th:return i*e*3/r.components*r.byteLength;case Pn:return i*e*4/r.components*r.byteLength;case Ml:return i*e*4/r.components*r.byteLength;case hs:case ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fs:case ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tl:case El:return Math.max(i,16)*Math.max(e,8)/4;case Sl:case Al:return Math.max(i,8)*Math.max(e,8)/2;case Rl:case Pl:case Cl:case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kl:case ms:case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ql:case Zl:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jl:case jl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gs:case Ql:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C_(i){switch(i){case wn:case $u:return{byteLength:1,components:1};case so:case Ju:case Wn:return{byteLength:2,components:1};case vl:case xl:return{byteLength:2,components:4};case Gn:case bl:case Hn:return{byteLength:4,components:1};case ju:case Qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Np(){let i=null,e=!1,t=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),t(o,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function L_(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var F_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D_=`#ifdef USE_ALPHAHASH
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
#endif`,N_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U_=`#ifdef USE_AOMAP
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
#endif`,V_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,G_=`#ifdef USE_BATCHING
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
#endif`,H_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Y_=`#ifdef USE_IRIDESCENCE
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
#endif`,q_=`#ifdef USE_BUMPMAP
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
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ib=`#define PI 3.141592653589793
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
} // validated`,rb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ob=`vec3 transformedNormal = objectNormal;
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
#endif`,sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,db=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
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
#endif`,mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yb=`#ifdef USE_GRADIENTMAP
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
}`,wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cb=`PhysicalMaterial material;
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
#endif`,Ib=`uniform sampler2D dfgLUT;
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
}`,Lb=`
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Db=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wb=`#if defined( USE_POINTS_UV )
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
#endif`,Xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`#ifdef USE_MORPHTARGETS
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
#endif`,Jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,iv=`#ifdef USE_NORMALMAP
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
#endif`,rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,av=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vv=`float getShadowMask() {
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
}`,xv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yv=`#ifdef USE_SKINNING
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
#endif`,wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mv=`#ifdef USE_SKINNING
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
#endif`,Sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ev=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rv=`#ifdef USE_TRANSMISSION
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
#endif`,Pv=`#ifdef USE_TRANSMISSION
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
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dv=`uniform sampler2D t2D;
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
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ov=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
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
}`,Vv=`#if DEPTH_PACKING == 3200
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
}`,Gv=`#define DISTANCE
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
}`,Hv=`#define DISTANCE
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
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`uniform float scale;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,qv=`#include <common>
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
}`,Zv=`uniform vec3 diffuse;
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
}`,$v=`#define LAMBERT
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
}`,Jv=`#define LAMBERT
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
}`,jv=`#define MATCAP
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
}`,Qv=`#define MATCAP
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
}`,ex=`#define NORMAL
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
}`,tx=`#define NORMAL
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
}`,nx=`#define PHONG
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
}`,ix=`#define PHONG
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
}`,rx=`#define STANDARD
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
}`,ox=`#define STANDARD
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
}`,sx=`#define TOON
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
}`,ax=`#define TOON
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
}`,lx=`uniform float size;
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
}`,cx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,hx=`uniform vec3 color;
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
}`,dx=`uniform float rotation;
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
}`,fx=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:F_,alphahash_pars_fragment:D_,alphamap_fragment:N_,alphamap_pars_fragment:z_,alphatest_fragment:B_,alphatest_pars_fragment:O_,aomap_fragment:U_,aomap_pars_fragment:V_,batching_pars_vertex:G_,batching_vertex:H_,begin_vertex:W_,beginnormal_vertex:X_,bsdfs:K_,iridescence_fragment:Y_,bumpmap_pars_fragment:q_,clipping_planes_fragment:Z_,clipping_planes_pars_fragment:$_,clipping_planes_pars_vertex:J_,clipping_planes_vertex:j_,color_fragment:Q_,color_pars_fragment:eb,color_pars_vertex:tb,color_vertex:nb,common:ib,cube_uv_reflection_fragment:rb,defaultnormal_vertex:ob,displacementmap_pars_vertex:sb,displacementmap_vertex:ab,emissivemap_fragment:lb,emissivemap_pars_fragment:cb,colorspace_fragment:ub,colorspace_pars_fragment:hb,envmap_fragment:db,envmap_common_pars_fragment:fb,envmap_pars_fragment:pb,envmap_pars_vertex:mb,envmap_physical_pars_fragment:Ab,envmap_vertex:gb,fog_vertex:_b,fog_pars_vertex:bb,fog_fragment:vb,fog_pars_fragment:xb,gradientmap_pars_fragment:yb,lightmap_pars_fragment:wb,lights_lambert_fragment:Mb,lights_lambert_pars_fragment:Sb,lights_pars_begin:Tb,lights_toon_fragment:Eb,lights_toon_pars_fragment:Rb,lights_phong_fragment:Pb,lights_phong_pars_fragment:kb,lights_physical_fragment:Cb,lights_physical_pars_fragment:Ib,lights_fragment_begin:Lb,lights_fragment_maps:Fb,lights_fragment_end:Db,lightprobes_pars_fragment:Nb,logdepthbuf_fragment:zb,logdepthbuf_pars_fragment:Bb,logdepthbuf_pars_vertex:Ob,logdepthbuf_vertex:Ub,map_fragment:Vb,map_pars_fragment:Gb,map_particle_fragment:Hb,map_particle_pars_fragment:Wb,metalnessmap_fragment:Xb,metalnessmap_pars_fragment:Kb,morphinstance_vertex:Yb,morphcolor_vertex:qb,morphnormal_vertex:Zb,morphtarget_pars_vertex:$b,morphtarget_vertex:Jb,normal_fragment_begin:jb,normal_fragment_maps:Qb,normal_pars_fragment:ev,normal_pars_vertex:tv,normal_vertex:nv,normalmap_pars_fragment:iv,clearcoat_normal_fragment_begin:rv,clearcoat_normal_fragment_maps:ov,clearcoat_pars_fragment:sv,iridescence_pars_fragment:av,opaque_fragment:lv,packing:cv,premultiplied_alpha_fragment:uv,project_vertex:hv,dithering_fragment:dv,dithering_pars_fragment:fv,roughnessmap_fragment:pv,roughnessmap_pars_fragment:mv,shadowmap_pars_fragment:gv,shadowmap_pars_vertex:_v,shadowmap_vertex:bv,shadowmask_pars_fragment:vv,skinbase_vertex:xv,skinning_pars_vertex:yv,skinning_vertex:wv,skinnormal_vertex:Mv,specularmap_fragment:Sv,specularmap_pars_fragment:Tv,tonemapping_fragment:Av,tonemapping_pars_fragment:Ev,transmission_fragment:Rv,transmission_pars_fragment:Pv,uv_pars_fragment:kv,uv_pars_vertex:Cv,uv_vertex:Iv,worldpos_vertex:Lv,background_vert:Fv,background_frag:Dv,backgroundCube_vert:Nv,backgroundCube_frag:zv,cube_vert:Bv,cube_frag:Ov,depth_vert:Uv,depth_frag:Vv,distance_vert:Gv,distance_frag:Hv,equirect_vert:Wv,equirect_frag:Xv,linedashed_vert:Kv,linedashed_frag:Yv,meshbasic_vert:qv,meshbasic_frag:Zv,meshlambert_vert:$v,meshlambert_frag:Jv,meshmatcap_vert:jv,meshmatcap_frag:Qv,meshnormal_vert:ex,meshnormal_frag:tx,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:rx,meshphysical_frag:ox,meshtoon_vert:sx,meshtoon_frag:ax,points_vert:lx,points_frag:cx,shadow_vert:ux,shadow_frag:hx,sprite_vert:dx,sprite_frag:fx},we={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ri={basic:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new J(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:cn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:cn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new J(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:cn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:cn([we.points,we.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:cn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:cn([we.common,we.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:cn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:cn([we.sprite,we.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:cn([we.common,we.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:cn([we.lights,we.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ri.physical={uniforms:cn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var nc={r:0,b:0,g:0},px=new Pt,zp=new $e;zp.set(-1,0,0,0,1,0,0,0,1);function mx(i,e,t,n,r,o){let s=new J(0),a=r===!0?0:1,l,c,u=null,d=0,h=null;function f(w){let x=w.isScene===!0?w.background:null;if(x&&x.isTexture){let b=w.backgroundBlurriness>0;x=e.get(x,b)}return x}function p(w){let x=!1,b=f(w);b===null?m(s,a):b&&b.isColor&&(m(b,1),x=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(w,x){let b=f(x);b&&(b.isCubeTexture||b.mapping===cs)?(c===void 0&&(c=new He(new Di(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:mr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(px.makeRotationFromEuler(x.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zp),c.material.toneMapped=ut.getTransfer(b.colorSpace)!==xt,(u!==b||d!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new He(new Un(2,2),new ln({name:"BackgroundMaterial",uniforms:mr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ut.getTransfer(b.colorSpace)!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,x){w.getRGB(nc,lh(i)),t.buffers.color.setClear(nc.r,nc.g,nc.b,x,o)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(w,x=1){s.set(w),a=x,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,m(s,a)},render:p,addToRenderList:_,dispose:g}}function gx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),o=r,s=!1;function a(P,k,R,A,I){let L=!1,z=d(P,A,R,k);o!==z&&(o=z,c(o.object)),L=f(P,A,R,I),L&&p(P,A,R,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(L||s)&&(s=!1,b(P,k,R,A),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,k,R,A){let I=A.wireframe===!0,L=n[k.id];L===void 0&&(L={},n[k.id]=L);let z=P.isInstancedMesh===!0?P.id:0,B=L[z];B===void 0&&(B={},L[z]=B);let N=B[R.id];N===void 0&&(N={},B[R.id]=N);let O=N[I];return O===void 0&&(O=h(l()),N[I]=O),O}function h(P){let k=[],R=[],A=[];for(let I=0;I<t;I++)k[I]=0,R[I]=0,A[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:R,attributeDivisors:A,object:P,attributes:{},index:null}}function f(P,k,R,A){let I=o.attributes,L=k.attributes,z=0,B=R.getAttributes();for(let N in B)if(B[N].location>=0){let U=I[N],Z=L[N];if(Z===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;z++}return o.attributesNum!==z||o.index!==A}function p(P,k,R,A){let I={},L=k.attributes,z=0,B=R.getAttributes();for(let N in B)if(B[N].location>=0){let U=L[N];U===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(U=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(U=P.instanceColor));let Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),I[N]=Z,z++}o.attributes=I,o.attributesNum=z,o.index=A}function _(){let P=o.newAttributes;for(let k=0,R=P.length;k<R;k++)P[k]=0}function m(P){g(P,0)}function g(P,k){let R=o.newAttributes,A=o.enabledAttributes,I=o.attributeDivisors;R[P]=1,A[P]===0&&(i.enableVertexAttribArray(P),A[P]=1),I[P]!==k&&(i.vertexAttribDivisor(P,k),I[P]=k)}function w(){let P=o.newAttributes,k=o.enabledAttributes;for(let R=0,A=k.length;R<A;R++)k[R]!==P[R]&&(i.disableVertexAttribArray(R),k[R]=0)}function x(P,k,R,A,I,L,z){z===!0?i.vertexAttribIPointer(P,k,R,I,L):i.vertexAttribPointer(P,k,R,A,I,L)}function b(P,k,R,A){_();let I=A.attributes,L=R.getAttributes(),z=k.defaultAttributeValues;for(let B in L){let N=L[B];if(N.location>=0){let O=I[B];if(O===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(O=P.instanceColor)),O!==void 0){let U=O.normalized,Z=O.itemSize,q=e.get(O);if(q===void 0)continue;let he=q.buffer,ie=q.type,se=q.bytesPerElement,H=ie===i.INT||ie===i.UNSIGNED_INT||O.gpuType===bl;if(O.isInterleavedBufferAttribute){let Y=O.data,le=Y.stride,de=O.offset;if(Y.isInstancedInterleavedBuffer){for(let j=0;j<N.locationSize;j++)g(N.location+j,Y.meshPerAttribute);P.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let j=0;j<N.locationSize;j++)m(N.location+j);i.bindBuffer(i.ARRAY_BUFFER,he);for(let j=0;j<N.locationSize;j++)x(N.location+j,Z/N.locationSize,ie,U,le*se,(de+Z/N.locationSize*j)*se,H)}else{if(O.isInstancedBufferAttribute){for(let Y=0;Y<N.locationSize;Y++)g(N.location+Y,O.meshPerAttribute);P.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Y=0;Y<N.locationSize;Y++)m(N.location+Y);i.bindBuffer(i.ARRAY_BUFFER,he);for(let Y=0;Y<N.locationSize;Y++)x(N.location+Y,Z/N.locationSize,ie,U,Z*se,Z/N.locationSize*Y*se,H)}}else if(z!==void 0){let U=z[B];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(N.location,U);break;case 3:i.vertexAttrib3fv(N.location,U);break;case 4:i.vertexAttrib4fv(N.location,U);break;default:i.vertexAttrib1fv(N.location,U)}}}}w()}function y(){S();for(let P in n){let k=n[P];for(let R in k){let A=k[R];for(let I in A){let L=A[I];for(let z in L)u(L[z].object),delete L[z];delete A[I]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let k=n[P.id];for(let R in k){let A=k[R];for(let I in A){let L=A[I];for(let z in L)u(L[z].object),delete L[z];delete A[I]}}delete n[P.id]}function E(P){for(let k in n){let R=n[k];for(let A in R){let I=R[A];if(I[P.id]===void 0)continue;let L=I[P.id];for(let z in L)u(L[z].object),delete L[z];delete I[P.id]}}}function v(P){for(let k in n){let R=n[k],A=P.isInstancedMesh===!0?P.id:0,I=R[A];if(I!==void 0){for(let L in I){let z=I[L];for(let B in z)u(z[B].object),delete z[B];delete I[L]}delete R[A],Object.keys(R).length===0&&delete n[k]}}}function S(){T(),s=!0,o!==r&&(o=r,c(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:T,dispose:y,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function _x(i,e,t){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function bx(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(E){return!(E!==Pn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let v=E===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==wn&&E!==Hn&&!v&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:b,maxSamples:y,samples:M}}function vx(i){let e=this,t=null,n=0,r=!1,o=!1,s=new vn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!r||p===null||p.length===0||o&&!m)o?u(null):c();else{let w=o?0:n,x=w*4,b=g.clippingState||null;l.value=b,b=u(p,h,x,f);for(let y=0;y!==x;++y)b[y]=t[y];g.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,b=f;x!==_;++x,b+=4)s.copy(d[x]).applyMatrix4(w,a),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var co=4,xx=6,yx=20,wx=256,bs=new ei,mp=new J,_h=null,bh=0,vh=0,xh=!1,Mx=new V,gr=new V,rc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,o={}){let{size:s=256,position:a=Mx}=o;_h=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_h,bh,vh),this._renderer.xr.enabled=xh,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_h=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Wn,format:Pn,colorSpace:No,depthBuffer:!1},r=gp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gp(e,t,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Sx(o)),this._blurMaterial=Ax(o,e,t),this._ggxMaterial=Tx(o,e,t)}return r}_compileMaterial(e){let t=new He(new Ke,e);this._renderer.compile(t,bs)}_sceneToCubeUV(e,t,n,r,o){let l=new on(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(mp),d.toneMapping=Vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new Di,new et({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,g=!0):(m.color.copy(mp),g=!0);for(let x=0;x<6;x++){let b=x%3;b===0?(l.up.set(0,c[x],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[x],o.y,o.z)):b===1?(l.up.set(0,0,c[x]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[x],o.z)):(l.up.set(0,c[x],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[x]));let y=this._cubeSize;lo(r,b*y,x>2?y:0,y,y),d.setRenderTarget(r),g&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ui||e.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let l=this._cubeSize;lo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,bs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-co?n-p+co:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,lo(o,m,g,3*_,2*_),r.setRenderTarget(o),r.render(a,bs),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,lo(e,m,g,3*_,2*_),r.setRenderTarget(e),r.render(a,bs)}_blur(e,t,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,n,s),this._blurPass(o,e,n,n,s)}_blurPass(e,t,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],d=3*u*(r>this._lodMax-co?r-this._lodMax+co:0),h=4*(this._cubeSize-u);lo(t,d,h,3*u,2*u),s.setRenderTarget(t),s.render(l,bs)}};function Sx(i){let e=[],t=[],n=i,r=i-co+1+xx;for(let o=0;o<r;o++){let s=Math.pow(2,n);e.push(s);let a=1/(s-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,p=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let g=0;g<d;g++){let w=g%3*2/3-1,x=g>2?0:-1,b=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];p.set(b,f*h*g);for(let y=0;y<h;y++){let M=u[y*2]*2-1,E=u[y*2+1]*2-1;g===0?gr.set(1,E,M):g===1?gr.set(-M,1,-E):g===2?gr.set(-M,E,1):g===3?gr.set(-1,E,-M):g===4?gr.set(-M,-1,E):gr.set(M,E,-1),gr.toArray(_,(g*h+y)*f)}}let m=new Ke;m.setAttribute("position",new En(p,f)),m.setAttribute("outputDirection",new En(_,f)),t.push(new He(m,null)),n>co&&n--}return{lodMeshes:t,sizeLods:e}}function gp(i,e,t){let n=new an(i,e,t);return n.texture.mapping=cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Tx(i,e,t){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Ax(i,e,t){return new ln({name:"SphericalGaussianBlur",defines:{SAMPLES:yx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:sc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function _p(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function bp(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var oc=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ho(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Di(5,5,5),o=new ln({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:ni});o.uniforms.tEquirect.value=t;let s=new He(r,o),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=jt),new dl(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}};function Ex(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?s(h):o(h)}function o(h){if(h&&h.isTexture){let f=h.mapping;if(f===ml||f===gl)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let _=new oc(p.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){let f=h.mapping,p=f===ml||f===gl,_=f===Ui||f===pr;if(p||_){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new rc(i)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let w=h.image;return p&&w&&w.height>0||_&&w&&l(w)?(n===null&&(n=new rc(i)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===ml?h.mapping=Ui:f===gl&&(h.mapping=pr),h}function l(h){let f=0,p=6;for(let _=0;_<p;_++)h[_]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Rx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&ar("WebGLRenderer: "+n+" extension not supported."),r}}}function Px(i,e,t,n){let r={},o=new WeakMap;function s(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",s),delete r[h.id];let f=o.get(h);f&&(e.remove(f),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let w=f.array;_=f.version;for(let x=0,b=w.length;x<b;x+=3){let y=w[x+0],M=w[x+1],E=w[x+2];h.push(y,M,M,E,E,y)}}else{let w=p.array;_=p.version;for(let x=0,b=w.length/3-1;x<b;x+=3){let y=x+0,M=x+1,E=x+2;h.push(y,M,M,E,E,y)}}let m=new(p.count>=65535?cr:Vo)(h,1);m.version=_;let g=o.get(d);g&&e.remove(g),o.set(d,m)}function u(d){let h=o.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function kx(i,e,t){let n;function r(d){n=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,h){i.drawElements(n,h,o,d*s),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,o,d*s,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,o,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];t.update(_,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Cx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:qe("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ix(i,e,t){let n=new WeakMap,r=new Lt;function o(s,a,l){let c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],x=0;f===!0&&(x=1),p===!0&&(x=2),_===!0&&(x=3);let b=a.attributes.position.count*x,y=1;b>e.maxTextureSize&&(y=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let M=new Float32Array(b*y*4*d),E=new Oo(M,b,y,d);E.type=Hn,E.needsUpdate=!0;let v=x*4;for(let T=0;T<d;T++){let P=m[T],k=g[T],R=w[T],A=b*y*4*T;for(let I=0;I<P.count;I++){let L=I*v;f===!0&&(r.fromBufferAttribute(P,I),M[A+L+0]=r.x,M[A+L+1]=r.y,M[A+L+2]=r.z,M[A+L+3]=0),p===!0&&(r.fromBufferAttribute(k,I),M[A+L+4]=r.x,M[A+L+5]=r.y,M[A+L+6]=r.z,M[A+L+7]=0),_===!0&&(r.fromBufferAttribute(R,I),M[A+L+8]=r.x,M[A+L+9]=r.y,M[A+L+10]=r.z,M[A+L+11]=R.itemSize===4?r.w:1)}}h={count:d,texture:E,size:new Ee(b,y)},n.set(a,h),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:o}}function Lx(i,e,t,n,r){let o=new WeakMap;function s(c){let u=r.render.frame,d=c.geometry,h=e.get(c,d);if(o.get(h)!==u&&(e.update(h),o.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;o.get(f)!==u&&(f.update(),o.set(f,u))}return h}function a(){o=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}var Fx={[Gu]:"LINEAR_TONE_MAPPING",[Hu]:"REINHARD_TONE_MAPPING",[Wu]:"CINEON_TONE_MAPPING",[Xu]:"ACES_FILMIC_TONE_MAPPING",[Yu]:"AGX_TONE_MAPPING",[qu]:"NEUTRAL_TONE_MAPPING",[Ku]:"CUSTOM_TONE_MAPPING"};function Dx(i,e,t,n,r,o){let s=new an(e,t,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ke;c.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Te([0,2,0,0,2,0],2));let u=new Qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new He(c,u),h=new ei(-1,1,1,-1,0,1),f=null,p=null,_=!1,m,g=null,w=[],x=!1;this.setSize=function(b,y){s.setSize(b,y),a!==null&&a.setSize(b,y),l!==null&&l.setSize(b,y);for(let M=0;M<w.length;M++){let E=w[M];E.setSize&&E.setSize(b,y)}},this.setEffects=function(b){w=b,x=w.length>0&&w[0].isRenderPass===!0;let y=s.width,M=s.height;w.length>0&&a===null&&(a=new an(y,M,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new an(y,M,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<w.length;E++){let v=w[E];v.setSize&&v.setSize(y,M)}},this.begin=function(b,y){if(_||b.toneMapping===Vn&&w.length===0)return!1;if(g=y,y!==null){let M=y.width,E=y.height;(s.width!==M||s.height!==E)&&this.setSize(M,E)}return x===!1&&b.setRenderTarget(s),m=b.toneMapping,b.toneMapping=Vn,!0},this.hasRenderPass=function(){return x},this.end=function(b,y){b.toneMapping=m,_=!0;let M=s,E=a;for(let v=0;v<w.length;v++){let S=w[v];S.enabled!==!1&&(S.render(b,E,M,y),S.needsSwap!==!1&&(M=E,E=E===a?l:a))}if(f!==b.outputColorSpace||p!==b.toneMapping){f=b.outputColorSpace,p=b.toneMapping,u.defines={},ut.getTransfer(f)===xt&&(u.defines.SRGB_TRANSFER="");let v=Fx[p];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(g),b.render(d,h),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Bp=new sn,Mh=new Fi(1,1),Op=new Oo,Up=new Ua,Vp=new Ho,vp=[],xp=[],yp=new Float32Array(16),wp=new Float32Array(9),Mp=new Float32Array(4);function ho(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,o=vp[r];if(o===void 0&&(o=new Float32Array(r),vp[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ac(i,e){let t=xp[e];t===void 0&&(t=new Int32Array(e),xp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function Ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function Ux(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Mp.set(n),i.uniformMatrix2fv(this.addr,!1,Mp),Ht(t,n)}}function Vx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;wp.set(n),i.uniformMatrix3fv(this.addr,!1,wp),Ht(t,n)}}function Gx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;yp.set(n),i.uniformMatrix4fv(this.addr,!1,yp),Ht(t,n)}}function Hx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function Yx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function Zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function $x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function Jx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Mh.compareFunction=t.isReversedDepthBuffer()?tc:ec,o=Mh):o=Bp,t.setTexture2D(e||o,r)}function jx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Up,r)}function Qx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vp,r)}function ey(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Op,r)}function ty(i){switch(i){case 5126:return Nx;case 35664:return zx;case 35665:return Bx;case 35666:return Ox;case 35674:return Ux;case 35675:return Vx;case 35676:return Gx;case 5124:case 35670:return Hx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return Kx;case 5125:return Yx;case 36294:return qx;case 36295:return Zx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return ey}}function ny(i,e){i.uniform1fv(this.addr,e)}function iy(i,e){let t=ho(e,this.size,2);i.uniform2fv(this.addr,t)}function ry(i,e){let t=ho(e,this.size,3);i.uniform3fv(this.addr,t)}function oy(i,e){let t=ho(e,this.size,4);i.uniform4fv(this.addr,t)}function sy(i,e){let t=ho(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ay(i,e){let t=ho(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ly(i,e){let t=ho(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cy(i,e){i.uniform1iv(this.addr,e)}function uy(i,e){i.uniform2iv(this.addr,e)}function hy(i,e){i.uniform3iv(this.addr,e)}function dy(i,e){i.uniform4iv(this.addr,e)}function fy(i,e){i.uniform1uiv(this.addr,e)}function py(i,e){i.uniform2uiv(this.addr,e)}function my(i,e){i.uniform3uiv(this.addr,e)}function gy(i,e){i.uniform4uiv(this.addr,e)}function _y(i,e,t){let n=this.cache,r=e.length,o=ac(t,r);Gt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=Mh:s=Bp;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function by(i,e,t){let n=this.cache,r=e.length,o=ac(t,r);Gt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Up,o[s])}function vy(i,e,t){let n=this.cache,r=e.length,o=ac(t,r);Gt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Vp,o[s])}function xy(i,e,t){let n=this.cache,r=e.length,o=ac(t,r);Gt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Op,o[s])}function yy(i){switch(i){case 5126:return ny;case 35664:return iy;case 35665:return ry;case 35666:return oy;case 35674:return sy;case 35675:return ay;case 35676:return ly;case 5124:case 35670:return cy;case 35667:case 35671:return uy;case 35668:case 35672:return hy;case 35669:case 35673:return dy;case 5125:return fy;case 36294:return py;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return vy;case 36289:case 36303:case 36311:case 36292:return xy}}var Sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ty(t.type)}},Th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yy(t.type)}},Ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],n)}}},yh=/(\w+)(\])?(\[|\.)?/g;function Sp(i,e){i.seq.push(e),i.map[e.id]=e}function wy(i,e,t){let n=i.name,r=n.length;for(yh.lastIndex=0;;){let o=yh.exec(n),s=yh.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Sp(t,c===void 0?new Sh(a,i,e):new Th(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Ah(a),Sp(t,d)),t=d}}}var uo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);wy(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,n,r){let o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function Tp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var My=37297,Sy=0;function Ty(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}var Ap=new $e;function Ay(i){ut._getMatrix(Ap,ut.workingColorSpace,i);let e=`mat3( ${Ap.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case zo:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ep(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+Ty(i.getShaderSource(e),a)}else return o}function Ey(i,e){let t=Ay(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ry={[Gu]:"Linear",[Hu]:"Reinhard",[Wu]:"Cineon",[Xu]:"ACESFilmic",[Yu]:"AgX",[qu]:"Neutral",[Ku]:"Custom"};function Py(i,e){let t=Ry[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ic=new V;function ky(){ut.getLuminanceCoefficients(ic);let i=ic.x.toFixed(4),e=ic.y.toFixed(4),t=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function Iy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ly(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function xs(i){return i!==""}function Rp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(i){return i.replace(Fy,Ny)}var Dy=new Map;function Ny(i,e){let t=rt[e];if(t===void 0){let n=Dy.get(e);if(n!==void 0)t=rt[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Eh(t)}var zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kp(i){return i.replace(zy,By)}function By(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Cp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Oy={[as]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function Uy(i){return Oy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Vy={[Ui]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE_UV"};function Gy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Vy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Hy={[pr]:"ENVMAP_MODE_REFRACTION"};function Wy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xy={[Vu]:"ENVMAP_BLENDING_MULTIPLY",[Wf]:"ENVMAP_BLENDING_MIX",[Xf]:"ENVMAP_BLENDING_ADD"};function Ky(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Xy[i.combine]||"ENVMAP_BLENDING_NONE"}function Yy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qy(i,e,t,n){let r=i.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,l=Uy(t),c=Gy(t),u=Wy(t),d=Ky(t),h=Yy(t),f=Cy(t),p=Iy(o),_=r.createProgram(),m,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(xs).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(xs).join(`
`),g.length>0&&(g+=`
`)):(m=[Cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),g=[Cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Vn?Py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Ey("linearToOutputTexel",t.outputColorSpace),ky(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),s=Eh(s),s=Rp(s,t),s=Pp(s,t),a=Eh(a),a=Rp(a,t),a=Pp(a,t),s=kp(s),a=kp(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=w+m+s,b=w+g+a,y=Tp(r,r.VERTEX_SHADER,x),M=Tp(r,r.FRAGMENT_SHADER,b);r.attachShader(_,y),r.attachShader(_,M),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(P){if(i.debug.checkShaderErrors){let k=r.getProgramInfoLog(_)||"",R=r.getShaderInfoLog(y)||"",A=r.getShaderInfoLog(M)||"",I=k.trim(),L=R.trim(),z=A.trim(),B=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,y,M);else{let O=Ep(r,y,"vertex"),U=Ep(r,M,"fragment");qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+O+`
`+U)}else I!==""?Xe("WebGLProgram: Program Info Log:",I):(L===""||z==="")&&(N=!1);N&&(P.diagnostics={runnable:B,programLog:I,vertexShader:{log:L,prefix:m},fragmentShader:{log:z,prefix:g}})}r.deleteShader(y),r.deleteShader(M),v=new uo(r,_),S=Ly(r,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,My)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=M,this}var Zy=0,Rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ph(e),t.set(e,n)),n}},Ph=class{constructor(e){this.id=Zy++,this.code=e,this.usedTimes=0}};function $y(i){return i===Hi||i===ms||i===gs}function Jy(i,e,t,n,r,o){let s=new jr,a=new Rh,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,S,T,P,k,R){let A=P.fog,I=k.geometry,L=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,B=e.get(v.envMap||L,z),N=B&&B.mapping===cs?B.image.height:null,O=f[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Xe("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let U=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=U!==void 0?U.length:0,q=0;I.morphAttributes.position!==void 0&&(q=1),I.morphAttributes.normal!==void 0&&(q=2),I.morphAttributes.color!==void 0&&(q=3);let he,ie,se,H;if(O){let Tt=ri[O];he=Tt.vertexShader,ie=Tt.fragmentShader}else{he=v.vertexShader,ie=v.fragmentShader;let Tt=a.getVertexShaderStage(v),bt=a.getFragmentShaderStage(v);a.update(v,Tt,bt),se=Tt.id,H=bt.id}let Y=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),de=k.isInstancedMesh===!0,j=k.isBatchedMesh===!0,ce=!!v.map,De=!!v.matcap,Ne=!!B,Pe=!!v.aoMap,ke=!!v.lightMap,Ve=!!v.bumpMap&&v.wireframe===!1,at=!!v.normalMap,wt=!!v.displacementMap,Bt=!!v.emissiveMap,nt=!!v.metalnessMap,mt=!!v.roughnessMap,X=v.anisotropy>0,Vt=v.clearcoat>0,gt=v.dispersion>0,G=v.retroreflectivity>0,C=v.iridescence>0,$=v.sheen>0,te=v.transmission>0,re=X&&!!v.anisotropyMap,me=Vt&&!!v.clearcoatMap,ge=Vt&&!!v.clearcoatNormalMap,oe=Vt&&!!v.clearcoatRoughnessMap,ue=C&&!!v.iridescenceMap,_e=C&&!!v.iridescenceThicknessMap,Oe=$&&!!v.sheenColorMap,ye=$&&!!v.sheenRoughnessMap,be=!!v.specularMap,Ue=!!v.specularColorMap,Ye=!!v.specularIntensityMap,je=te&&!!v.transmissionMap,K=te&&!!v.thicknessMap,ve=!!v.gradientMap,ae=!!v.alphaMap,xe=v.alphaTest>0,Ae=!!v.alphaHash,fe=!!v.extensions,Ge=Vn;v.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ge=i.toneMapping);let Fe={shaderID:O,shaderType:v.type,shaderName:v.name,vertexShader:he,fragmentShader:ie,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:H,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:j,batchingColor:j&&k._colorsTexture!==null,instancing:de,instancingColor:de&&k.instanceColor!==null,instancingMorph:de&&k.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ce,matcap:De,envMap:Ne,envMapMode:Ne&&B.mapping,envMapCubeUVHeight:N,aoMap:Pe,lightMap:ke,bumpMap:Ve,normalMap:at,displacementMap:wt,emissiveMap:Bt,normalMapObjectSpace:at&&v.normalMapType===qf,normalMapTangentSpace:at&&v.normalMapType===ih,packedNormalMap:at&&v.normalMapType===ih&&$y(v.normalMap.format),metalnessMap:nt,roughnessMap:mt,anisotropy:X,anisotropyMap:re,clearcoat:Vt,clearcoatMap:me,clearcoatNormalMap:ge,clearcoatRoughnessMap:oe,dispersion:gt,retroreflection:G,iridescence:C,iridescenceMap:ue,iridescenceThicknessMap:_e,sheen:$,sheenColorMap:Oe,sheenRoughnessMap:ye,specularMap:be,specularColorMap:Ue,specularIntensityMap:Ye,transmission:te,transmissionMap:je,thicknessMap:K,gradientMap:ve,opaque:v.transparent===!1&&v.blending===Oi&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:xe,alphaHash:Ae,combine:v.combine,mapUv:ce&&p(v.map.channel),aoMapUv:Pe&&p(v.aoMap.channel),lightMapUv:ke&&p(v.lightMap.channel),bumpMapUv:Ve&&p(v.bumpMap.channel),normalMapUv:at&&p(v.normalMap.channel),displacementMapUv:wt&&p(v.displacementMap.channel),emissiveMapUv:Bt&&p(v.emissiveMap.channel),metalnessMapUv:nt&&p(v.metalnessMap.channel),roughnessMapUv:mt&&p(v.roughnessMap.channel),anisotropyMapUv:re&&p(v.anisotropyMap.channel),clearcoatMapUv:me&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&p(v.sheenRoughnessMap.channel),specularMapUv:be&&p(v.specularMap.channel),specularColorMapUv:Ue&&p(v.specularColorMap.channel),specularIntensityMapUv:Ye&&p(v.specularIntensityMap.channel),transmissionMapUv:je&&p(v.transmissionMap.channel),thicknessMapUv:K&&p(v.thicknessMap.channel),alphaMapUv:ae&&p(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(at||X),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!I.attributes.uv&&(ce||ae),fog:!!A,useFog:v.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&at===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:le,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:q,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:R.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:ce&&v.map.isVideoTexture===!0&&ut.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&ut.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ht,flipSided:v.side===Qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:fe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&v.extensions.multiDraw===!0||j)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function m(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let T in v.defines)S.push(T),S.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(g(S,v),w(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function g(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function w(v,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.retroreflection&&s.enable(24),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function x(v){let S=f[v.type],T;if(S){let P=ri[S];T=dp.clone(P.uniforms)}else T=v.uniforms;return T}function b(v,S){let T=u.get(S);return T!==void 0?++T.usedTimes:(T=new qy(i,S,v,r),c.push(T),u.set(S,T)),T}function y(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:x,acquireProgram:b,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:E}}function jy(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function Qy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ip(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Lp(){let i=[],e=0,t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,_,m,g){let w=i[e];return w===void 0?(w={id:h.id,object:h,geometry:f,material:p,materialVariant:s(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},i[e]=w):(w.id=h.id,w.object=h,w.geometry=f,w.material=p,w.materialVariant=s(h),w.groupOrder=_,w.renderOrder=h.renderOrder,w.z=m,w.group=g),e++,w}function l(h,f,p,_,m,g,w){w.reversedDepth===!0&&(m=-m);let x=a(h,f,p,_,m,g);p.transmission>0?n.push(x):p.transparent===!0?r.push(x):t.push(x)}function c(h,f,p,_,m,g){let w=a(h,f,p,_,m,g);p.transmission>0?n.unshift(w):p.transparent===!0?r.unshift(w):t.unshift(w)}function u(h,f){t.length>1&&t.sort(h||Qy),n.length>1&&n.sort(f||Ip),r.length>1&&r.sort(f||Ip)}function d(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:d,sort:u}}function ew(){let i=new WeakMap;function e(n,r){let o=i.get(n),s;return o===void 0?(s=new Lp,i.set(n,[s])):r>=o.length?(s=new Lp,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function tw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new J};break;case"SpotLight":t={position:new V,direction:new V,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new J,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new J,groundColor:new J};break;case"RectAreaLight":t={color:new J,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function nw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var iw=0;function rw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ow(i){let e=new tw,t=nw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let r=new V,o=new Pt,s=new Pt;function a(c){let u=0,d=0,h=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,w=0,x=0,b=0,y=0,M=0,E=0,v=0,S=0,T=0;c.sort(rw);for(let k=0,R=c.length;k<R;k++){let A=c[k],I=A.color,L=A.intensity,z=A.distance,B=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Hi?B=A.shadow.map.texture:B=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=I.r*L,d+=I.g*L,h+=I.b*L;else if(A.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(A.sh.coefficients[N],L);T++}else if(A.isSunLight){let N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let O=A.shadow,U=t.get(A);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[p]=U,n.sunShadowMap[p]=B;let Z=O.getViewportCount();for(let q=0;q<Z;q++)n.sunShadowMatrix[_+q]=O.getMatrix(q),n.sunShadowCascade[_+q]=O._cascadeData[q];_+=Z,p++}n.sun[f]=N,f++}else if(A.isDirectionalLight){let N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let O=A.shadow,U=t.get(A);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.directionalShadow[m]=U,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=A.shadow.matrix,y++}n.directional[m]=N,m++}else if(A.isSpotLight){let N=e.get(A);N.position.setFromMatrixPosition(A.matrixWorld),N.color.copy(I).multiplyScalar(L),N.distance=z,N.coneCos=Math.cos(A.angle),N.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),N.decay=A.decay,n.spot[w]=N;let O=A.shadow;if(A.map&&(n.spotLightMap[v]=A.map,v++,O.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[w]=O.matrix,A.castShadow){let U=t.get(A);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.spotShadow[w]=U,n.spotShadowMap[w]=B,E++}w++}else if(A.isRectAreaLight){let N=e.get(A);N.color.copy(I).multiplyScalar(L),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),n.rectArea[x]=N,x++}else if(A.isPointLight){let N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),N.distance=A.distance,N.decay=A.decay,A.castShadow){let O=A.shadow,U=t.get(A);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=A.shadow.matrix,M++}n.point[g]=N,g++}else if(A.isHemisphereLight){let N=e.get(A);N.skyColor.copy(A.color).multiplyScalar(L),N.groundColor.copy(A.groundColor).multiplyScalar(L),n.hemi[b]=N,b++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==w||P.rectAreaLength!==x||P.hemiLength!==b||P.numSunShadows!==p||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==E||P.numSpotMaps!==v||P.numLightProbes!==T)&&(n.sun.length=f,n.directional.length=m,n.spot.length=w,n.rectArea.length=x,n.point.length=g,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-S,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=w,P.rectAreaLength=x,P.hemiLength=b,P.numSunShadows=p,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=E,P.numSpotMaps=v,P.numLightProbes=T,n.version=iw++)}function l(c,u){let d=0,h=0,f=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let w=0,x=c.length;w<x;w++){let b=c[w];if(b.isSunLight){let y=n.sun[d];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),d++}else if(b.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(b.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),s.identity(),o.copy(b.matrixWorld),o.premultiply(g),s.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(b.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Fp(i){let e=new ow(i),t=[],n=[],r=[];function o(h){d.camera=h,t.length=0,n.length=0,r.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:d,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function sw(i){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new Fp(i),e.set(r,[a])):o>=s.length?(a=new Fp(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lw=`uniform sampler2D shadow_pass;
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
}`,cw=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],uw=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Dp=new Pt,vs=new V,wh=new V;function hw(i,e,t){let n=new Go,r=new Ee,o=new Ee,s=new Lt,a=new el,l=new tl,c={},u=t.maxTextureSize,d={[ti]:Qt,[Qt]:ti,[ht]:ht},h=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:aw,fragmentShader:lw}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ke;p.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new He(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=as;let g=this.type;this.render=function(M,E,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Tf&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=as);let S=i.getRenderTarget(),T=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ni),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let R=g!==this.type;R&&E.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(I=>I.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,I=M.length;A<I;A++){let L=M[A],z=L.shadow;if(z===void 0){Xe("WebGLShadowMap:",L,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let B=z.getFrameExtents();r.multiply(B),o.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/B.x),r.x=o.x*B.x,z.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/B.y),r.y=o.y*B.y,z.mapSize.y=o.y));let N=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=N,z.map===null||R===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===oo){if(L.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new an(r.x,r.y,{format:Hi,type:Wn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),z.map.texture.name=L.name+".shadowMap",z.map.depthTexture=new Fi(r.x,r.y,Hn),z.map.depthTexture.name=L.name+".shadowMapDepth",z.map.depthTexture.format=Jn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Kt,z.map.depthTexture.magFilter=Kt}else L.isPointLight?(z.map=new oc(r.x),z.map.depthTexture=new Xa(r.x,Gn)):(z.map=new an(r.x,r.y),z.map.depthTexture=new Fi(r.x,r.y,Gn)),z.map.depthTexture.name=L.name+".shadowMap",z.map.depthTexture.format=Jn,this.type===as?(z.map.depthTexture.compareFunction=N?tc:ec,z.map.depthTexture.minFilter=jt,z.map.depthTexture.magFilter=jt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Kt,z.map.depthTexture.magFilter=Kt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==r.x||z.map.height!==r.y)&&z.map.setSize(r.x,r.y);let O=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();L.isPointLight!==!0&&z.updateMatrices(L,v);for(let U=0;U<O;U++){let Z=z.getCamera(U);if(L.isPointLight){let q=z.camera,he=z.matrix,ie=L.distance||q.far;ie!==q.far&&(q.far=ie,q.updateProjectionMatrix()),vs.setFromMatrixPosition(L.matrixWorld),q.position.copy(vs),wh.copy(q.position),wh.add(cw[U]),q.up.copy(uw[U]),q.lookAt(wh),q.updateMatrixWorld(),he.makeTranslation(-vs.x,-vs.y,-vs.z),Dp.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Dp,q.coordinateSystem,q.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,U),i.clear();else{U===0&&(i.setRenderTarget(z.map),i.clear());let q=z.getViewport(U);s.set(o.x*q.x,o.y*q.y,o.x*q.z,o.y*q.w),k.viewport(s)}n=z.getFrustum(U),b(E,v,Z,L,this.type)}z.isPointLightShadow!==!0&&this.type===oo&&w(z,v),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(S,T,P)};function w(M,E){let v=e.update(_);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new an(r.x,r.y,{format:Hi,type:Wn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(E,null,v,h,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(E,null,v,f,_,null)}function x(M,E,v,S){let T=null,P=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)T=P;else if(T=v.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let k=T.uuid,R=E.uuid,A=c[k];A===void 0&&(A={},c[k]=A);let I=A[R];I===void 0&&(I=T.clone(),A[R]=I,E.addEventListener("dispose",y)),T=I}if(T.visible=E.visible,T.wireframe=E.wireframe,S===oo?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:d[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,v.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let k=i.properties.get(T);k.light=v}return T}function b(M,E,v,S,T){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===oo)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let R=e.update(M),A=M.material;if(Array.isArray(A)){let I=R.groups;for(let L=0,z=I.length;L<z;L++){let B=I[L],N=A[B.materialIndex];if(N&&N.visible){let O=x(M,N,S,T);M.onBeforeShadow(i,M,E,v,R,O,B),i.renderBufferDirect(v,null,R,O,M,B),M.onAfterShadow(i,M,E,v,R,O,B)}}}else if(A.visible){let I=x(M,A,S,T);M.onBeforeShadow(i,M,E,v,R,I,null),i.renderBufferDirect(v,null,R,I,M,null),M.onAfterShadow(i,M,E,v,R,I,null)}}let k=M.children;for(let R=0,A=k.length;R<A;R++)b(k[R],E,v,S,T)}function y(M){M.target.removeEventListener("dispose",y);for(let v in c){let S=c[v],T=M.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function dw(i,e){function t(){let K=!1,ve=new Lt,ae=null,xe=new Lt(0,0,0,0);return{setMask:function(Ae){ae!==Ae&&!K&&(i.colorMask(Ae,Ae,Ae,Ae),ae=Ae)},setLocked:function(Ae){K=Ae},setClear:function(Ae,fe,Ge,Fe,Tt){Tt===!0&&(Ae*=Fe,fe*=Fe,Ge*=Fe),ve.set(Ae,fe,Ge,Fe),xe.equals(ve)===!1&&(i.clearColor(Ae,fe,Ge,Fe),xe.copy(ve))},reset:function(){K=!1,ae=null,xe.set(-1,0,0,0)}}}function n(){let K=!1,ve=!1,ae=null,xe=null,Ae=null;return{setReversed:function(fe){if(ve!==fe){let Ge=e.get("EXT_clip_control");fe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),ve=fe;let Fe=Ae;Ae=null,this.setClear(Fe)}},getReversed:function(){return ve},setTest:function(fe){fe?Y(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(fe){ae!==fe&&!K&&(i.depthMask(fe),ae=fe)},setFunc:function(fe){if(ve&&(fe=sp[fe]),xe!==fe){switch(fe){case Ra:i.depthFunc(i.NEVER);break;case Pa:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case qr:i.depthFunc(i.LEQUAL);break;case Ca:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=fe}},setLocked:function(fe){K=fe},setClear:function(fe){Ae!==fe&&(Ae=fe,ve&&(fe=1-fe),i.clearDepth(fe))},reset:function(){K=!1,ae=null,xe=null,Ae=null,ve=!1}}}function r(){let K=!1,ve=null,ae=null,xe=null,Ae=null,fe=null,Ge=null,Fe=null,Tt=null;return{setTest:function(bt){K||(bt?Y(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(bt){ve!==bt&&!K&&(i.stencilMask(bt),ve=bt)},setFunc:function(bt,Ln,qn){(ae!==bt||xe!==Ln||Ae!==qn)&&(i.stencilFunc(bt,Ln,qn),ae=bt,xe=Ln,Ae=qn)},setOp:function(bt,Ln,qn){(fe!==bt||Ge!==Ln||Fe!==qn)&&(i.stencilOp(bt,Ln,qn),fe=bt,Ge=Ln,Fe=qn)},setLocked:function(bt){K=bt},setClear:function(bt){Tt!==bt&&(i.clearStencil(bt),Tt=bt)},reset:function(){K=!1,ve=null,ae=null,xe=null,Ae=null,fe=null,Ge=null,Fe=null,Tt=null}}}let o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],_=null,m=!1,g=null,w=null,x=null,b=null,y=null,M=null,E=null,v=new J(0,0,0),S=0,T=!1,P=null,k=null,R=null,A=null,I=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,B=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(N)[1]),z=B>=1):N.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),z=B>=2);let O=null,U={},Z=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),he=new Lt().fromArray(Z),ie=new Lt().fromArray(q);function se(K,ve,ae,xe){let Ae=new Uint8Array(4),fe=i.createTexture();i.bindTexture(K,fe),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<ae;Ge++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(ve+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return fe}let H={};H[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),s.setFunc(qr),Ve(!1),at(zu),Y(i.CULL_FACE),Pe(ni);function Y(K){u[K]!==!0&&(i.enable(K),u[K]=!0)}function le(K){u[K]!==!1&&(i.disable(K),u[K]=!1)}function de(K,ve){return h[K]!==ve?(i.bindFramebuffer(K,ve),h[K]=ve,K===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),K===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function j(K,ve){let ae=p,xe=!1;if(K){ae=f.get(ve),ae===void 0&&(ae=[],f.set(ve,ae));let Ae=K.textures;if(ae.length!==Ae.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Ge=Ae.length;fe<Ge;fe++)ae[fe]=i.COLOR_ATTACHMENT0+fe;ae.length=Ae.length,xe=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,xe=!0);xe&&i.drawBuffers(ae)}function ce(K){return _!==K?(i.useProgram(K),_=K,!0):!1}let De={[fr]:i.FUNC_ADD,[Ef]:i.FUNC_SUBTRACT,[Rf]:i.FUNC_REVERSE_SUBTRACT};De[Pf]=i.MIN,De[kf]=i.MAX;let Ne={[Cf]:i.ZERO,[If]:i.ONE,[Lf]:i.SRC_COLOR,[Ou]:i.SRC_ALPHA,[Of]:i.SRC_ALPHA_SATURATE,[zf]:i.DST_COLOR,[Df]:i.DST_ALPHA,[Ff]:i.ONE_MINUS_SRC_COLOR,[Uu]:i.ONE_MINUS_SRC_ALPHA,[Bf]:i.ONE_MINUS_DST_COLOR,[Nf]:i.ONE_MINUS_DST_ALPHA,[Uf]:i.CONSTANT_COLOR,[Vf]:i.ONE_MINUS_CONSTANT_COLOR,[Gf]:i.CONSTANT_ALPHA,[Hf]:i.ONE_MINUS_CONSTANT_ALPHA};function Pe(K,ve,ae,xe,Ae,fe,Ge,Fe,Tt,bt){if(K===ni){m===!0&&(le(i.BLEND),m=!1);return}if(m===!1&&(Y(i.BLEND),m=!0),K!==Af){if(K!==g||bt!==T){if((w!==fr||y!==fr)&&(i.blendEquation(i.FUNC_ADD),w=fr,y=fr),bt)switch(K){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dt:i.blendFunc(i.ONE,i.ONE);break;case Bu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ls:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",K);break}else switch(K){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bu:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ls:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",K);break}x=null,b=null,M=null,E=null,v.set(0,0,0),S=0,g=K,T=bt}return}Ae=Ae||ve,fe=fe||ae,Ge=Ge||xe,(ve!==w||Ae!==y)&&(i.blendEquationSeparate(De[ve],De[Ae]),w=ve,y=Ae),(ae!==x||xe!==b||fe!==M||Ge!==E)&&(i.blendFuncSeparate(Ne[ae],Ne[xe],Ne[fe],Ne[Ge]),x=ae,b=xe,M=fe,E=Ge),(Fe.equals(v)===!1||Tt!==S)&&(i.blendColor(Fe.r,Fe.g,Fe.b,Tt),v.copy(Fe),S=Tt),g=K,T=!1}function ke(K,ve){K.side===ht?le(i.CULL_FACE):Y(i.CULL_FACE);let ae=K.side===Qt;ve&&(ae=!ae),Ve(ae),K.blending===Oi&&K.transparent===!1?Pe(ni):Pe(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),s.setFunc(K.depthFunc),s.setTest(K.depthTest),s.setMask(K.depthWrite),o.setMask(K.colorWrite);let xe=K.stencilWrite;a.setTest(xe),xe&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Bt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(K){P!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),P=K)}function at(K){K!==Mf?(Y(i.CULL_FACE),K!==k&&(K===zu?i.cullFace(i.BACK):K===Sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),k=K}function wt(K){K!==R&&(z&&i.lineWidth(K),R=K)}function Bt(K,ve,ae){K?(Y(i.POLYGON_OFFSET_FILL),(A!==ve||I!==ae)&&(A=ve,I=ae,s.getReversed()&&(ve=-ve),i.polygonOffset(ve,ae))):le(i.POLYGON_OFFSET_FILL)}function nt(K){K?Y(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function mt(K){K===void 0&&(K=i.TEXTURE0+L-1),O!==K&&(i.activeTexture(K),O=K)}function X(K,ve,ae){ae===void 0&&(O===null?ae=i.TEXTURE0+L-1:ae=O);let xe=U[ae];xe===void 0&&(xe={type:void 0,texture:void 0},U[ae]=xe),(xe.type!==K||xe.texture!==ve)&&(O!==ae&&(i.activeTexture(ae),O=ae),i.bindTexture(K,ve||H[K]),xe.type=K,xe.texture=ve)}function Vt(){let K=U[O];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function gt(){try{i.compressedTexImage2D(...arguments)}catch(K){qe("WebGLState:",K)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(K){qe("WebGLState:",K)}}function C(){try{i.texSubImage2D(...arguments)}catch(K){qe("WebGLState:",K)}}function $(){try{i.texSubImage3D(...arguments)}catch(K){qe("WebGLState:",K)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(K){qe("WebGLState:",K)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(K){qe("WebGLState:",K)}}function me(){try{i.texStorage2D(...arguments)}catch(K){qe("WebGLState:",K)}}function ge(){try{i.texStorage3D(...arguments)}catch(K){qe("WebGLState:",K)}}function oe(){try{i.texImage2D(...arguments)}catch(K){qe("WebGLState:",K)}}function ue(){try{i.texImage3D(...arguments)}catch(K){qe("WebGLState:",K)}}function _e(K){return d[K]!==void 0?d[K]:i.getParameter(K)}function Oe(K,ve){d[K]!==ve&&(i.pixelStorei(K,ve),d[K]=ve)}function ye(K){he.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),he.copy(K))}function be(K){ie.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),ie.copy(K))}function Ue(K,ve){let ae=c.get(ve);ae===void 0&&(ae=new WeakMap,c.set(ve,ae));let xe=ae.get(K);xe===void 0&&(xe=i.getUniformBlockIndex(ve,K.name),ae.set(K,xe))}function Ye(K,ve){let xe=c.get(ve).get(K);l.get(ve)!==xe&&(i.uniformBlockBinding(ve,xe,K.__bindingPointIndex),l.set(ve,xe))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},O=null,U={},h={},f=new WeakMap,p=[],_=null,m=!1,g=null,w=null,x=null,b=null,y=null,M=null,E=null,v=new J(0,0,0),S=0,T=!1,P=null,k=null,R=null,A=null,I=null,he.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:Y,disable:le,bindFramebuffer:de,drawBuffers:j,useProgram:ce,setBlending:Pe,setMaterial:ke,setFlipSided:Ve,setCullFace:at,setLineWidth:wt,setPolygonOffset:Bt,setScissorTest:nt,activeTexture:mt,bindTexture:X,unbindTexture:Vt,compressedTexImage2D:gt,compressedTexImage3D:G,texImage2D:oe,texImage3D:ue,pixelStorei:Oe,getParameter:_e,updateUBOMapping:Ue,uniformBlockBinding:Ye,texStorage2D:me,texStorage3D:ge,texSubImage2D:C,texSubImage3D:$,compressedTexSubImage2D:te,compressedTexSubImage3D:re,scissor:ye,viewport:be,reset:je}}function fw(i,e,t,n,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap,d=new Set,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(G,C){return p?new OffscreenCanvas(G,C):Zr("canvas")}function m(G,C,$){let te=1,re=gt(G);if((re.width>$||re.height>$)&&(te=$/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){let me=Math.floor(te*re.width),ge=Math.floor(te*re.height);h===void 0&&(h=_(me,ge));let oe=C?_(me,ge):h;return oe.width=me,oe.height=ge,oe.getContext("2d").drawImage(G,0,0,me,ge),Xe("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+me+"x"+ge+")."),oe}else return"data"in G&&Xe("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),G;return G}function g(G){return G.generateMipmaps}function w(G){i.generateMipmap(G)}function x(G){return G.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?i.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(G,C,$,te,re,me=!1){if(G!==null){if(i[G]!==void 0)return i[G];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let ge;te&&(ge=e.get("EXT_texture_norm16"),ge||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=C;if(C===i.RED&&($===i.FLOAT&&(oe=i.R32F),$===i.HALF_FLOAT&&(oe=i.R16F),$===i.UNSIGNED_BYTE&&(oe=i.R8),$===i.UNSIGNED_SHORT&&ge&&(oe=ge.R16_EXT),$===i.SHORT&&ge&&(oe=ge.R16_SNORM_EXT)),C===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(oe=i.R8UI),$===i.UNSIGNED_SHORT&&(oe=i.R16UI),$===i.UNSIGNED_INT&&(oe=i.R32UI),$===i.BYTE&&(oe=i.R8I),$===i.SHORT&&(oe=i.R16I),$===i.INT&&(oe=i.R32I)),C===i.RG&&($===i.FLOAT&&(oe=i.RG32F),$===i.HALF_FLOAT&&(oe=i.RG16F),$===i.UNSIGNED_BYTE&&(oe=i.RG8),$===i.UNSIGNED_SHORT&&ge&&(oe=ge.RG16_EXT),$===i.SHORT&&ge&&(oe=ge.RG16_SNORM_EXT)),C===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(oe=i.RG8UI),$===i.UNSIGNED_SHORT&&(oe=i.RG16UI),$===i.UNSIGNED_INT&&(oe=i.RG32UI),$===i.BYTE&&(oe=i.RG8I),$===i.SHORT&&(oe=i.RG16I),$===i.INT&&(oe=i.RG32I)),C===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),$===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),$===i.UNSIGNED_INT&&(oe=i.RGB32UI),$===i.BYTE&&(oe=i.RGB8I),$===i.SHORT&&(oe=i.RGB16I),$===i.INT&&(oe=i.RGB32I)),C===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),$===i.UNSIGNED_INT&&(oe=i.RGBA32UI),$===i.BYTE&&(oe=i.RGBA8I),$===i.SHORT&&(oe=i.RGBA16I),$===i.INT&&(oe=i.RGBA32I)),C===i.RGB&&($===i.UNSIGNED_SHORT&&ge&&(oe=ge.RGB16_EXT),$===i.SHORT&&ge&&(oe=ge.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),C===i.RGBA){let ue=me?zo:ut.getTransfer(re);$===i.FLOAT&&(oe=i.RGBA32F),$===i.HALF_FLOAT&&(oe=i.RGBA16F),$===i.UNSIGNED_BYTE&&(oe=ue===xt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&ge&&(oe=ge.RGBA16_EXT),$===i.SHORT&&ge&&(oe=ge.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function y(G,C){let $;return G?C===null||C===Gn||C===ao?$=i.DEPTH24_STENCIL8:C===Hn?$=i.DEPTH32F_STENCIL8:C===so&&($=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Gn||C===ao?$=i.DEPTH_COMPONENT24:C===Hn?$=i.DEPTH_COMPONENT32F:C===so&&($=i.DEPTH_COMPONENT16),$}function M(G,C){return g(G)===!0||G.isFramebufferTexture&&G.minFilter!==Kt&&G.minFilter!==jt?Math.log2(Math.max(C.width,C.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?C.mipmaps.length:1}function E(G){let C=G.target;C.removeEventListener("dispose",E),S(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&d.delete(C)}function v(G){let C=G.target;C.removeEventListener("dispose",v),P(C)}function S(G){let C=n.get(G);if(C.__webglInit===void 0)return;let $=G.source,te=f.get($);if(te){let re=te[C.__cacheKey];re.usedTimes--,re.usedTimes===0&&T(G),Object.keys(te).length===0&&f.delete($)}n.remove(G)}function T(G){let C=n.get(G);i.deleteTexture(C.__webglTexture);let $=G.source,te=f.get($);delete te[C.__cacheKey],s.memory.textures--}function P(G){let C=n.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),n.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(C.__webglFramebuffer[te]))for(let re=0;re<C.__webglFramebuffer[te].length;re++)i.deleteFramebuffer(C.__webglFramebuffer[te][re]);else i.deleteFramebuffer(C.__webglFramebuffer[te]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[te])}else{if(Array.isArray(C.__webglFramebuffer))for(let te=0;te<C.__webglFramebuffer.length;te++)i.deleteFramebuffer(C.__webglFramebuffer[te]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let te=0;te<C.__webglColorRenderbuffer.length;te++)C.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[te]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let $=G.textures;for(let te=0,re=$.length;te<re;te++){let me=n.get($[te]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),s.memory.textures--),n.remove($[te])}n.remove(G)}let k=0;function R(){k=0}function A(){return k}function I(G){k=G}function L(){let G=k;return G>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,G}function z(G){let C=[];return C.push(G.wrapS),C.push(G.wrapT),C.push(G.wrapR||0),C.push(G.magFilter),C.push(G.minFilter),C.push(G.anisotropy),C.push(G.internalFormat),C.push(G.format),C.push(G.type),C.push(G.generateMipmaps),C.push(G.premultiplyAlpha),C.push(G.flipY),C.push(G.unpackAlignment),C.push(G.colorSpace),C.join()}function B(G,C){let $=n.get(G);if(G.isVideoTexture&&X(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&$.__version!==G.version){let te=G.image;if(te===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{le($,G,C);return}}else G.isExternalTexture&&($.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+C)}function N(G,C){let $=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&$.__version!==G.version){le($,G,C);return}else G.isExternalTexture&&($.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+C)}function O(G,C){let $=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&$.__version!==G.version){le($,G,C);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+C)}function U(G,C){let $=n.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&$.__version!==G.version){de($,G,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+C)}let Z={[lr]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[Da]:i.MIRRORED_REPEAT},q={[Kt]:i.NEAREST,[Kf]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[_l]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},he={[$f]:i.NEVER,[tp]:i.ALWAYS,[Jf]:i.LESS,[ec]:i.LEQUAL,[jf]:i.EQUAL,[tc]:i.GEQUAL,[Qf]:i.GREATER,[ep]:i.NOTEQUAL};function ie(G,C){if(C.type===Hn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===jt||C.magFilter===_l||C.magFilter===us||C.magFilter===Vi||C.minFilter===jt||C.minFilter===_l||C.minFilter===us||C.minFilter===Vi)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(G,i.TEXTURE_WRAP_S,Z[C.wrapS]),i.texParameteri(G,i.TEXTURE_WRAP_T,Z[C.wrapT]),(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)&&i.texParameteri(G,i.TEXTURE_WRAP_R,Z[C.wrapR]),i.texParameteri(G,i.TEXTURE_MAG_FILTER,q[C.magFilter]),i.texParameteri(G,i.TEXTURE_MIN_FILTER,q[C.minFilter]),C.compareFunction&&(i.texParameteri(G,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(G,i.TEXTURE_COMPARE_FUNC,he[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Kt||C.minFilter!==us&&C.minFilter!==Vi||C.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(G,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function se(G,C){let $=!1;G.__webglInit===void 0&&(G.__webglInit=!0,C.addEventListener("dispose",E));let te=C.source,re=f.get(te);re===void 0&&(re={},f.set(te,re));let me=z(C);if(me!==G.__cacheKey){re[me]===void 0&&(re[me]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,$=!0),re[me].usedTimes++;let ge=re[G.__cacheKey];ge!==void 0&&(re[G.__cacheKey].usedTimes--,ge.usedTimes===0&&T(C)),G.__cacheKey=me,G.__webglTexture=re[me].texture}return $}function H(G,C,$){return Math.floor(Math.floor(G/$)/C)}function Y(G,C,$,te){let me=G.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,C.width,C.height,$,te,C.data);else{me.sort((Oe,ye)=>Oe.start-ye.start);let ge=0;for(let Oe=1;Oe<me.length;Oe++){let ye=me[ge],be=me[Oe],Ue=ye.start+ye.count,Ye=H(be.start,C.width,4),je=H(ye.start,C.width,4);be.start<=Ue+1&&Ye===je&&H(be.start+be.count-1,C.width,4)===Ye?ye.count=Math.max(ye.count,be.start+be.count-ye.start):(++ge,me[ge]=be)}me.length=ge+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,C.width);for(let Oe=0,ye=me.length;Oe<ye;Oe++){let be=me[Oe],Ue=Math.floor(be.start/4),Ye=Math.ceil(be.count/4),je=Ue%C.width,K=Math.floor(Ue/C.width),ve=Ye,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,je),t.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,je,K,ve,ae,$,te,C.data)}G.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function le(G,C,$){let te=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(te=i.TEXTURE_3D);let re=se(G,C),me=C.source;t.bindTexture(te,G.__webglTexture,i.TEXTURE0+$);let ge=n.get(me);if(me.version!==ge.__version||re===!0){if(t.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){let ae=ut.getPrimaries(ut.workingColorSpace),xe=C.colorSpace===mi?null:ut.getPrimaries(C.colorSpace),Ae=C.colorSpace===mi||ae===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment);let ue=m(C.image,!1,r.maxTextureSize);ue=Vt(C,ue);let _e=o.convert(C.format,C.colorSpace),Oe=o.convert(C.type),ye=b(C.internalFormat,_e,Oe,C.normalized,C.colorSpace,C.isVideoTexture);ie(te,C);let be,Ue=C.mipmaps,Ye=C.isVideoTexture!==!0,je=ge.__version===void 0||re===!0,K=me.dataReady,ve=M(C,ue);if(C.isDepthTexture)ye=y(C.format===Gi,C.type),je&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,ye,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,ye,ue.width,ue.height,0,_e,Oe,null));else if(C.isDataTexture)if(Ue.length>0){Ye&&je&&t.texStorage2D(i.TEXTURE_2D,ve,ye,Ue[0].width,Ue[0].height);for(let ae=0,xe=Ue.length;ae<xe;ae++)be=Ue[ae],Ye?K&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,be.width,be.height,_e,Oe,be.data):t.texImage2D(i.TEXTURE_2D,ae,ye,be.width,be.height,0,_e,Oe,be.data);C.generateMipmaps=!1}else Ye?(je&&t.texStorage2D(i.TEXTURE_2D,ve,ye,ue.width,ue.height),K&&Y(C,ue,_e,Oe)):t.texImage2D(i.TEXTURE_2D,0,ye,ue.width,ue.height,0,_e,Oe,ue.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ye&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,ye,Ue[0].width,Ue[0].height,ue.depth);for(let ae=0,xe=Ue.length;ae<xe;ae++)if(be=Ue[ae],C.format!==Pn)if(_e!==null)if(Ye){if(K)if(C.layerUpdates.size>0){let Ae=hh(be.width,be.height,C.format,C.type);for(let fe of C.layerUpdates){let Ge=be.data.subarray(fe*Ae/be.data.BYTES_PER_ELEMENT,(fe+1)*Ae/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,fe,be.width,be.height,1,_e,Ge)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,be.width,be.height,ue.depth,_e,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,ye,be.width,be.height,ue.depth,0,be.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?K&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,be.width,be.height,ue.depth,_e,Oe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,ye,be.width,be.height,ue.depth,0,_e,Oe,be.data);C.layerUpdates.size>0&&C.clearLayerUpdates()}else{Ye&&je&&t.texStorage2D(i.TEXTURE_2D,ve,ye,Ue[0].width,Ue[0].height);for(let ae=0,xe=Ue.length;ae<xe;ae++)be=Ue[ae],C.format!==Pn?_e!==null?Ye?K&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,be.width,be.height,_e,be.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,ye,be.width,be.height,0,be.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?K&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,be.width,be.height,_e,Oe,be.data):t.texImage2D(i.TEXTURE_2D,ae,ye,be.width,be.height,0,_e,Oe,be.data)}else if(C.isDataArrayTexture)if(Ye){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,ye,ue.width,ue.height,ue.depth),K)if(C.layerUpdates.size>0){let ae=hh(ue.width,ue.height,C.format,C.type);for(let xe of C.layerUpdates){let Ae=ue.data.subarray(xe*ae/ue.data.BYTES_PER_ELEMENT,(xe+1)*ae/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,ue.width,ue.height,1,_e,Oe,Ae)}C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,_e,Oe,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ue.width,ue.height,ue.depth,0,_e,Oe,ue.data);else if(C.isData3DTexture)Ye?(je&&t.texStorage3D(i.TEXTURE_3D,ve,ye,ue.width,ue.height,ue.depth),K&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,_e,Oe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ue.width,ue.height,ue.depth,0,_e,Oe,ue.data);else if(C.isFramebufferTexture){if(je)if(Ye)t.texStorage2D(i.TEXTURE_2D,ve,ye,ue.width,ue.height);else{let ae=ue.width,xe=ue.height;for(let Ae=0;Ae<ve;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,ye,ae,xe,0,_e,Oe,null),ae>>=1,xe>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),ue.parentNode!==ae){ae.appendChild(ue),d.add(C),ae.onpaint=xe=>{let Ae=xe.changedElements;for(let fe of d)Ae.includes(fe.image)&&(fe.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let Ae=i.RGBA,fe=i.RGBA,Ge=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,fe,Ge,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ye&&je){let ae=gt(Ue[0]);t.texStorage2D(i.TEXTURE_2D,ve,ye,ae.width,ae.height)}for(let ae=0,xe=Ue.length;ae<xe;ae++)be=Ue[ae],Ye?K&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,_e,Oe,be):t.texImage2D(i.TEXTURE_2D,ae,ye,_e,Oe,be);C.generateMipmaps=!1}else if(Ye){if(je){let ae=gt(ue);t.texStorage2D(i.TEXTURE_2D,ve,ye,ae.width,ae.height)}K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Oe,ue)}else t.texImage2D(i.TEXTURE_2D,0,ye,_e,Oe,ue);g(C)&&w(te),ge.__version=me.version,C.onUpdate&&C.onUpdate(C)}G.__version=C.version}function de(G,C,$){if(C.image.length!==6)return;let te=se(G,C),re=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+$);let me=n.get(re);if(re.version!==me.__version||te===!0){t.activeTexture(i.TEXTURE0+$);let ge=ut.getPrimaries(ut.workingColorSpace),oe=C.colorSpace===mi?null:ut.getPrimaries(C.colorSpace),ue=C.colorSpace===mi||ge===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let _e=C.isCompressedTexture||C.image[0].isCompressedTexture,Oe=C.image[0]&&C.image[0].isDataTexture,ye=[];for(let fe=0;fe<6;fe++)!_e&&!Oe?ye[fe]=m(C.image[fe],!0,r.maxCubemapSize):ye[fe]=Oe?C.image[fe].image:C.image[fe],ye[fe]=Vt(C,ye[fe]);let be=ye[0],Ue=o.convert(C.format,C.colorSpace),Ye=o.convert(C.type),je=b(C.internalFormat,Ue,Ye,C.normalized,C.colorSpace),K=C.isVideoTexture!==!0,ve=me.__version===void 0||te===!0,ae=re.dataReady,xe=M(C,be);ie(i.TEXTURE_CUBE_MAP,C);let Ae;if(_e){K&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,je,be.width,be.height);for(let fe=0;fe<6;fe++){Ae=ye[fe].mipmaps;for(let Ge=0;Ge<Ae.length;Ge++){let Fe=Ae[Ge];C.format!==Pn?Ue!==null?K?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge,0,0,Fe.width,Fe.height,Ue,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge,je,Fe.width,Fe.height,0,Fe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge,0,0,Fe.width,Fe.height,Ue,Ye,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge,je,Fe.width,Fe.height,0,Ue,Ye,Fe.data)}}}else{if(Ae=C.mipmaps,K&&ve){Ae.length>0&&xe++;let fe=gt(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,je,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Oe){K?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ye[fe].width,ye[fe].height,Ue,Ye,ye[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,je,ye[fe].width,ye[fe].height,0,Ue,Ye,ye[fe].data);for(let Ge=0;Ge<Ae.length;Ge++){let Tt=Ae[Ge].image[fe].image;K?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge+1,0,0,Tt.width,Tt.height,Ue,Ye,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge+1,je,Tt.width,Tt.height,0,Ue,Ye,Tt.data)}}else{K?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ue,Ye,ye[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,je,Ue,Ye,ye[fe]);for(let Ge=0;Ge<Ae.length;Ge++){let Fe=Ae[Ge];K?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge+1,0,0,Ue,Ye,Fe.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge+1,je,Ue,Ye,Fe.image[fe])}}}g(C)&&w(i.TEXTURE_CUBE_MAP),me.__version=re.version,C.onUpdate&&C.onUpdate(C)}G.__version=C.version}function j(G,C,$,te,re,me){let ge=o.convert($.format,$.colorSpace),oe=o.convert($.type),ue=b($.internalFormat,ge,oe,$.normalized,$.colorSpace),_e=n.get(C),Oe=n.get($);if(Oe.__renderTarget=C,!_e.__hasExternalTextures){let ye=Math.max(1,C.width>>me),be=Math.max(1,C.height>>me);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,me,ue,ye,be,C.depth,0,ge,oe,null):t.texImage2D(re,me,ue,ye,be,0,ge,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,G),mt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,re,Oe.__webglTexture,0,nt(C)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,re,Oe.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(G,C,$){if(i.bindRenderbuffer(i.RENDERBUFFER,G),C.depthBuffer){let te=C.depthTexture,re=te&&te.isDepthTexture?te.type:null,me=y(C.stencilBuffer,re),ge=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(C),me,C.width,C.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(C),me,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,me,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,G)}else{let te=C.textures;for(let re=0;re<te.length;re++){let me=te[re],ge=o.convert(me.format,me.colorSpace),oe=o.convert(me.type),ue=b(me.internalFormat,ge,oe,me.normalized,me.colorSpace);mt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(C),ue,C.width,C.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(C),ue,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,ue,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(G,C,$){let te=C.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,G),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(C.depthTexture);if(re.__renderTarget=C,(!re.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),te){if(re.__webglInit===void 0&&(re.__webglInit=!0,C.depthTexture.addEventListener("dispose",E)),re.__webglTexture===void 0){re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),ie(i.TEXTURE_CUBE_MAP,C.depthTexture);let _e=o.convert(C.depthTexture.format),Oe=o.convert(C.depthTexture.type),ye;C.depthTexture.format===Jn?ye=i.DEPTH_COMPONENT24:C.depthTexture.format===Gi&&(ye=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ye,C.width,C.height,0,_e,Oe,null)}}else B(C.depthTexture,0);let me=re.__webglTexture,ge=nt(C),oe=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,ue=C.depthTexture.format===Gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(C.depthTexture.format===Jn)mt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,oe,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,ue,oe,me,0);else if(C.depthTexture.format===Gi)mt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,oe,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,ue,oe,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(G){let C=n.get(G),$=G.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==G.depthTexture){let te=G.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),te){let re=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,te.removeEventListener("dispose",re)};te.addEventListener("dispose",re),C.__depthDisposeCallback=re}C.__boundDepthTexture=te}if(G.depthTexture&&!C.__autoAllocateDepthBuffer)if($)for(let te=0;te<6;te++)De(C.__webglFramebuffer[te],G,te);else{let te=G.texture.mipmaps;te&&te.length>0?De(C.__webglFramebuffer[0],G,0):De(C.__webglFramebuffer,G,0)}else if($){C.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[te]),C.__webglDepthbuffer[te]===void 0)C.__webglDepthbuffer[te]=i.createRenderbuffer(),ce(C.__webglDepthbuffer[te],G,!1);else{let re=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=C.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,me)}}else{let te=G.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),ce(C.__webglDepthbuffer,G,!1);else{let re=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(G,C,$){let te=n.get(G);C!==void 0&&j(te.__webglFramebuffer,G,G.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Ne(G)}function ke(G){let C=G.texture,$=n.get(G),te=n.get(C);G.addEventListener("dispose",v);let re=G.textures,me=G.isWebGLCubeRenderTarget===!0,ge=re.length>1;if(ge||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=C.version,s.memory.textures++),me){$.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer[oe]=[];for(let ue=0;ue<C.mipmaps.length;ue++)$.__webglFramebuffer[oe][ue]=i.createFramebuffer()}else $.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer=[];for(let oe=0;oe<C.mipmaps.length;oe++)$.__webglFramebuffer[oe]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(ge)for(let oe=0,ue=re.length;oe<ue;oe++){let _e=n.get(re[oe]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),s.memory.textures++)}if(G.samples>0&&mt(G)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let oe=0;oe<re.length;oe++){let ue=re[oe];$.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[oe]);let _e=o.convert(ue.format,ue.colorSpace),Oe=o.convert(ue.type),ye=b(ue.internalFormat,_e,Oe,ue.normalized,ue.colorSpace,G.isXRRenderTarget===!0),be=nt(G);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ye,G.width,G.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,$.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),G.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),ce($.__webglDepthRenderbuffer,G,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ie(i.TEXTURE_CUBE_MAP,C);for(let oe=0;oe<6;oe++)if(C.mipmaps&&C.mipmaps.length>0)for(let ue=0;ue<C.mipmaps.length;ue++)j($.__webglFramebuffer[oe][ue],G,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else j($.__webglFramebuffer[oe],G,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(C)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let oe=0,ue=re.length;oe<ue;oe++){let _e=re[oe],Oe=n.get(_e),ye=i.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ye=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Oe.__webglTexture),ie(ye,_e),j($.__webglFramebuffer,G,_e,i.COLOR_ATTACHMENT0+oe,ye,0),g(_e)&&w(ye)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(oe=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,te.__webglTexture),ie(oe,C),C.mipmaps&&C.mipmaps.length>0)for(let ue=0;ue<C.mipmaps.length;ue++)j($.__webglFramebuffer[ue],G,C,i.COLOR_ATTACHMENT0,oe,ue);else j($.__webglFramebuffer,G,C,i.COLOR_ATTACHMENT0,oe,0);g(C)&&w(oe),t.unbindTexture()}G.depthBuffer&&Ne(G)}function Ve(G){let C=G.textures;for(let $=0,te=C.length;$<te;$++){let re=C[$];if(g(re)){let me=x(G),ge=n.get(re).__webglTexture;t.bindTexture(me,ge),w(me),t.unbindTexture()}}}let at=[],wt=[];function Bt(G){if(G.samples>0){if(mt(G)===!1){let C=G.textures,$=G.width,te=G.height,re=i.COLOR_BUFFER_BIT,me=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(G),oe=C.length>1;if(oe)for(let _e=0;_e<C.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let ue=G.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let _e=0;_e<C.length;_e++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let Oe=n.get(C[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Oe,0)}i.blitFramebuffer(0,0,$,te,0,0,$,te,re,i.NEAREST),l===!0&&(at.length=0,wt.length=0,at.push(i.COLOR_ATTACHMENT0+_e),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&(at.push(me),wt.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let _e=0;_e<C.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let Oe=n.get(C[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&l){let C=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function nt(G){return Math.min(r.maxSamples,G.samples)}function mt(G){let C=n.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function X(G){let C=s.render.frame;u.get(G)!==C&&(u.set(G,C),G.update())}function Vt(G,C){let $=G.colorSpace,te=G.format,re=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||$!==No&&$!==mi&&(ut.getTransfer($)===xt?(te!==Pn||re!==wn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",$)),C}function gt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(c.width=G.naturalWidth||G.width,c.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(c.width=G.displayWidth,c.height=G.displayHeight):(c.width=G.width,c.height=G.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=R,this.getTextureUnits=A,this.setTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=N,this.setTexture3D=O,this.setTextureCube=U,this.rebindTextures=Pe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=j,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pw(i,e){function t(n,r=mi){let o,s=ut.getTransfer(r);if(n===wn)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ju)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$u)return i.BYTE;if(n===Ju)return i.SHORT;if(n===so)return i.UNSIGNED_SHORT;if(n===bl)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===eh)return i.ALPHA;if(n===th)return i.RGB;if(n===Pn)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===nh)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===Hi)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===Ml)return i.RGBA_INTEGER;if(n===hs||n===ds||n===fs||n===ps)if(s===xt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===hs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===hs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ds)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ps)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sl||n===Tl||n===Al||n===El)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Sl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Pl||n===kl||n===Cl||n===Il||n===ms||n===Ll)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Rl||n===Pl)return s===xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===kl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cl)return o.COMPRESSED_R11_EAC;if(n===Il)return o.COMPRESSED_SIGNED_R11_EAC;if(n===ms)return o.COMPRESSED_RG11_EAC;if(n===Ll)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fl||n===Dl||n===Nl||n===zl||n===Bl||n===Ol||n===Ul||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===Kl||n===Yl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Fl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ol)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ul)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ql||n===Zl||n===$l)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===ql)return s===xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jl||n===jl||n===gs||n===Ql)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Jl)return o.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gs)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ao?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gw=`
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

}`,kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ln({vertexShader:mw,fragmentShader:gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ch=class extends jn{constructor(e,t){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new kh,g={},w=t.getContextAttributes(),x=null,b=null,y=[],M=[],E=new Ee,v=null,S=null,T=new on;T.viewport=new Lt;let P=new on;P.viewport=new Lt;let k=[T,P],R=new fl,A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=y[H];return Y===void 0&&(Y=new Qr,y[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=y[H];return Y===void 0&&(Y=new Qr,y[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=y[H];return Y===void 0&&(Y=new Qr,y[H]=Y),Y.getHandSpace()};function L(H){let Y=M.indexOf(H.inputSource);if(Y===-1)return;let le=y[Y];le!==void 0&&(le.update(H.inputSource,H.frame,c||s),le.dispatchEvent({type:H.type,data:H.inputSource}))}function z(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",B);for(let H=0;H<y.length;H++){let Y=M[H];Y!==null&&(M[H]=null,y[H].disconnect(Y))}A=null,I=null,m.reset();for(let H in g)delete g[H];if(e.setRenderTarget(x),f=null,h=null,d=null,r=null,b=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(E.width,E.height,!1),S!==null){let H=S.camera;H.fov=S.fov,H.zoom=S.zoom,H.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",z),r.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,de=null,j=null;w.depth&&(j=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=w.stencil?Gi:Jn,de=w.stencil?ao:Gn);let ce={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:o};d=this.getBinding(),h=d.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new an(h.textureWidth,h.textureHeight,{format:Pn,type:wn,depthTexture:new Fi(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let le={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new an(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(H){for(let Y=0;Y<H.removed.length;Y++){let le=H.removed[Y],de=M.indexOf(le);de>=0&&(M[de]=null,y[de].disconnect(le))}for(let Y=0;Y<H.added.length;Y++){let le=H.added[Y],de=M.indexOf(le);if(de===-1){for(let ce=0;ce<y.length;ce++)if(ce>=M.length){M.push(le),de=ce;break}else if(M[ce]===null){M[ce]=le,de=ce;break}if(de===-1)break}let j=y[de];j&&j.connect(le)}}let N=new V,O=new V;function U(H,Y,le){N.setFromMatrixPosition(Y.matrixWorld),O.setFromMatrixPosition(le.matrixWorld);let de=N.distanceTo(O),j=Y.projectionMatrix.elements,ce=le.projectionMatrix.elements,De=j[14]/(j[10]-1),Ne=j[14]/(j[10]+1),Pe=(j[9]+1)/j[5],ke=(j[9]-1)/j[5],Ve=(j[8]-1)/j[0],at=(ce[8]+1)/ce[0],wt=De*Ve,Bt=De*at,nt=de/(-Ve+at),mt=nt*-Ve;if(Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(mt),H.translateZ(nt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),j[10]===-1)H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let X=De+nt,Vt=Ne+nt,gt=wt-mt,G=Bt+(de-mt),C=Pe*Ne/Vt*X,$=ke*Ne/Vt*X;H.projectionMatrix.makePerspective(gt,G,C,$,X,Vt),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Z(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let Y=H.near,le=H.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(le=m.depthFar)),R.near=P.near=T.near=Y,R.far=P.far=T.far=le,(A!==R.near||I!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),A=R.near,I=R.far),R.layers.mask=H.layers.mask|6,T.layers.mask=R.layers.mask&-5,P.layers.mask=R.layers.mask&-3;let de=H.parent,j=R.cameras;Z(R,de);for(let ce=0;ce<j.length;ce++)Z(j[ce],de);j.length===2?U(R,T,P):R.projectionMatrix.copy(T.projectionMatrix),S===null&&H.isPerspectiveCamera&&(S={camera:H,fov:H.fov,zoom:H.zoom}),q(H,R,de)};function q(H,Y,le){le===null?H.matrix.copy(Y.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(Y.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=za*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(H){return g[H]};let he=null;function ie(H,Y){if(u=Y.getViewerPose(c||s),p=Y,u!==null){let le=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let de=!1;le.length!==R.cameras.length&&(R.cameras.length=0,de=!0);for(let Ne=0;Ne<le.length;Ne++){let Pe=le[Ne],ke=null;if(f!==null)ke=f.getViewport(Pe);else{let at=d.getViewSubImage(h,Pe);ke=at.viewport,Ne===0&&(e.setRenderTargetTextures(b,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(b))}let Ve=k[Ne];Ve===void 0&&(Ve=new on,Ve.layers.enable(Ne),Ve.viewport=new Lt,k[Ne]=Ve),Ve.matrix.fromArray(Pe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Pe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ke.x,ke.y,ke.width,ke.height),Ne===0&&(R.matrix.copy(Ve.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),de===!0&&R.cameras.push(Ve)}let j=r.enabledFeatures;if(j&&j.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Ne=d.getDepthInformation(le[0]);Ne&&Ne.isValid&&Ne.texture&&m.init(Ne,r.renderState)}if(j&&j.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Ne=0;Ne<le.length;Ne++){let Pe=le[Ne].camera;if(Pe){let ke=g[Pe];ke||(ke=new Wo,g[Pe]=ke);let Ve=d.getCameraImage(Pe);ke.sourceTexture=Ve}}}}for(let le=0;le<y.length;le++){let de=M[le],j=y[le];de!==null&&j!==void 0&&j.update(de,Y,c||s)}he&&he(H,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),p=null}let se=new Np;se.setAnimationLoop(ie),this.setAnimationLoop=function(H){he=H},this.dispose=function(){}}},_w=new Pt,Gp=new $e;Gp.set(-1,0,0,0,1,0,0,0,1);function bw(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,lh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,w,x,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?o(m,g):g.isMeshLambertMaterial?(o(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(o(m,g),d(m,g)):g.isMeshPhongMaterial?(o(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(o(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,b)):g.isMeshMatcapMaterial?(o(m,g),p(m,g)):g.isMeshDepthMaterial?o(m,g):g.isMeshDistanceMaterial?(o(m,g),_(m,g)):g.isMeshNormalMaterial?o(m,g):g.isLineBasicMaterial?(s(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,w,x):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Qt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Qt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let w=e.get(g),x=w.envMap,b=w.envMapRotation;x&&(m.envMap.value=x,m.envMapRotation.value.setFromMatrix4(_w.makeRotationFromEuler(b)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Gp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function s(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,w,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*w,m.scale.value=x*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,w){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let w=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function vw(i,e,t,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){let M=y.program;n.uniformBlockBinding(b,M)}function c(b,y){let M=r[b.id];M===void 0&&(m(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",w));let E=y.program;n.updateUBOMapping(b,E);let v=e.render.frame;o[b.id]!==v&&(h(b),o[b.id]=v)}function u(b){let y=d();b.__bindingPointIndex=y;let M=i.createBuffer(),E=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,E,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function d(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let y=r[b.id],M=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let v=0,S=M.length;v<S;v++){let T=M[v];if(Array.isArray(T))for(let P=0,k=T.length;P<k;P++)f(T[P],v,P,E);else f(T,v,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,y,M,E){if(_(b,y,M,E)===!0){let v=b.__offset,S=b.value;if(Array.isArray(S)){let T=0;for(let P=0;P<S.length;P++){let k=S[P],R=g(k);p(k,b.__data,T),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(T+=R.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(S,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function p(b,y,M){typeof b=="number"||typeof b=="boolean"?y[0]=b:b.isMatrix3?(y[0]=b.elements[0],y[1]=b.elements[1],y[2]=b.elements[2],y[3]=0,y[4]=b.elements[3],y[5]=b.elements[4],y[6]=b.elements[5],y[7]=0,y[8]=b.elements[6],y[9]=b.elements[7],y[10]=b.elements[8],y[11]=0):ArrayBuffer.isView(b)?y.set(new b.constructor(b.buffer,b.byteOffset,y.length)):b.toArray(y,M)}function _(b,y,M,E){let v=b.value,S=y+"_"+M;if(E[S]===void 0)return typeof v=="number"||typeof v=="boolean"?E[S]=v:ArrayBuffer.isView(v)?E[S]=v.slice():E[S]=v.clone(),!0;{let T=E[S];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return E[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(b){let y=b.uniforms,M=0,E=16;for(let S=0,T=y.length;S<T;S++){let P=Array.isArray(y[S])?y[S]:[y[S]];for(let k=0,R=P.length;k<R;k++){let A=P[k],I=Array.isArray(A.value)?A.value:[A.value];for(let L=0,z=I.length;L<z;L++){let B=I[L],N=g(B),O=M%E,U=O%N.boundary,Z=O+U;M+=U,Z!==0&&E-Z<N.storage&&(M+=E-Z),A.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=M,M+=N.storage}}}let v=M%E;return v>0&&(M+=E-v),b.__size=M,b.__cache={},this}function g(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",b),y}function w(b){let y=b.target;y.removeEventListener("dispose",w);let M=s.indexOf(y.__bindingPointIndex);s.splice(M,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function x(){for(let b in r)i.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:x}}var xw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function yw(){return ii===null&&(ii=new Va(xw,16,16,Hi,Wn),ii.name="DFG_LUT",ii.minFilter=jt,ii.magFilter=jt,ii.wrapS=xn,ii.wrapT=xn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var _r=class{constructor(e={}){let{canvas:t=ip(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=wn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let _=f,m=new Set([Ml,wl,yl]),g=new Set([wn,Gn,so,ao,vl,xl]),w=new Uint32Array(4),x=new Int32Array(4),b=new V,y=null,M=null,E=[],v=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,P=!1,k=null,R=null,A=null,I=null;this._outputColorSpace=zt;let L=0,z=0,B=null,N=-1,O=null,U=new Lt,Z=new Lt,q=null,he=new J(0),ie=0,se=t.width,H=t.height,Y=1,le=null,de=null,j=new Lt(0,0,se,H),ce=new Lt(0,0,se,H),De=!1,Ne=new Go,Pe=!1,ke=!1,Ve=new Pt,at=new V,wt=new Lt,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function mt(){return B===null?Y:1}let X=n;function Vt(F,W){return t.getContext(F,W)}let gt,G,C,$,te,re,me,ge,oe,ue,_e,Oe,ye,be,Ue,Ye,je,K,ve,ae,xe,Ae,fe;try{let F={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Ln,!1),X===null){let W="webgl2";if(X=Vt(W,F),X===null)throw Vt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(F){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Ln,!1),qe("WebGLRenderer: "+F.message),F}function Ge(){gt=new Rx(X),gt.init(),xe=new pw(X,gt),G=new bx(X,gt,e,xe),C=new dw(X,gt),G.reversedDepthBuffer&&h&&C.buffers.depth.setReversed(!0),R=X.createFramebuffer(),A=X.createFramebuffer(),I=X.createFramebuffer(),$=new Cx(X),te=new jy,re=new fw(X,gt,C,te,G,xe,$),me=new Ex(T),ge=new L_(X),Ae=new gx(X,ge),oe=new Px(X,ge,$,Ae),ue=new Lx(X,oe,ge,Ae,$),K=new Ix(X,G,re),Ue=new vx(te),_e=new Jy(T,me,gt,G,Ae,Ue),Oe=new bw(T,te),ye=new ew,be=new sw(gt),je=new mx(T,me,C,ue,p,l),Ye=new hw(T,ue,G),fe=new vw(X,$,G,C),ve=new _x(X,gt,$),ae=new kx(X,gt,$),$.programs=_e.programs,T.capabilities=G,T.extensions=gt,T.properties=te,T.renderLists=ye,T.shadowMap=Ye,T.state=C,T.info=$}_!==wn&&(S=new Dx(_,t.width,t.height,a,r,o));let Fe=new Ch(T,X);this.xr=Fe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let F=gt.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=gt.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(F){F!==void 0&&(Y=F,this.setSize(se,H,!1))},this.getSize=function(F){return F.set(se,H)},this.setSize=function(F,W,ne=!0){if(Fe.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}se=F,H=W,t.width=Math.floor(F*Y),t.height=Math.floor(W*Y),ne===!0&&(t.style.width=F+"px",t.style.height=W+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,F,W)},this.getDrawingBufferSize=function(F){return F.set(se*Y,H*Y).floor()},this.setDrawingBufferSize=function(F,W,ne){se=F,H=W,Y=ne,t.width=Math.floor(F*ne),t.height=Math.floor(W*ne),this.setViewport(0,0,F,W)},this.setEffects=function(F){if(_===wn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let W=0;W<F.length;W++)if(F[W].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(U)},this.getViewport=function(F){return F.copy(j)},this.setViewport=function(F,W,ne,Q){F.isVector4?j.set(F.x,F.y,F.z,F.w):j.set(F,W,ne,Q),C.viewport(U.copy(j).multiplyScalar(Y).round())},this.getScissor=function(F){return F.copy(ce)},this.setScissor=function(F,W,ne,Q){F.isVector4?ce.set(F.x,F.y,F.z,F.w):ce.set(F,W,ne,Q),C.scissor(Z.copy(ce).multiplyScalar(Y).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(F){C.setScissorTest(De=F)},this.setOpaqueSort=function(F){le=F},this.setTransparentSort=function(F){de=F},this.getClearColor=function(F){return F.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(F=!0,W=!0,ne=!0){let Q=0;if(F){let ee=!1;if(B!==null){let Se=B.texture.format;ee=m.has(Se)}if(ee){let Se=B.texture.type,Ce=g.has(Se),Me=je.getClearColor(),Ie=je.getClearAlpha(),ze=Me.r,it=Me.g,lt=Me.b;Ce?(w[0]=ze,w[1]=it,w[2]=lt,w[3]=Ie,X.clearBufferuiv(X.COLOR,0,w)):(x[0]=ze,x[1]=it,x[2]=lt,x[3]=Ie,X.clearBufferiv(X.COLOR,0,x))}else Q|=X.COLOR_BUFFER_BIT}W&&(Q|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(Q|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&X.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),k=F},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Ln,!1),je.dispose(),ye.dispose(),be.dispose(),te.dispose(),me.dispose(),ue.dispose(),Ae.dispose(),fe.dispose(),_e.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Ld),Fe.removeEventListener("sessionend",Fd),nr.stop()};function Tt(F){F.preventDefault(),sh("WebGLRenderer: Context Lost."),P=!0}function bt(){sh("WebGLRenderer: Context Restored."),P=!1;let F=$.autoReset,W=Ye.enabled,ne=Ye.autoUpdate,Q=Ye.needsUpdate,ee=Ye.type;Ge(),$.autoReset=F,Ye.enabled=W,Ye.autoUpdate=ne,Ye.needsUpdate=Q,Ye.type=ee}function Ln(F){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function qn(F){let W=F.target;W.removeEventListener("dispose",qn),vg(W)}function vg(F){xg(F),te.remove(F)}function xg(F){let W=te.get(F).programs;W!==void 0&&(W.forEach(function(ne){_e.releaseProgram(ne)}),F.isShaderMaterial&&_e.releaseShaderCache(F))}this.renderBufferDirect=function(F,W,ne,Q,ee,Se){W===null&&(W=Bt);let Ce=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Me=Mg(F,W,ne,Q,ee);C.setMaterial(Q,Ce);let Ie=ne.index,ze=1;if(Q.wireframe===!0){if(Ie=oe.getWireframeAttribute(ne),Ie===void 0)return;ze=2}let it=ne.drawRange,lt=ne.attributes.position,Le=it.start*ze,vt=(it.start+it.count)*ze;Se!==null&&(Le=Math.max(Le,Se.start*ze),vt=Math.min(vt,(Se.start+Se.count)*ze)),Ie!==null?(Le=Math.max(Le,0),vt=Math.min(vt,Ie.count)):lt!=null&&(Le=Math.max(Le,0),vt=Math.min(vt,lt.count));let Ot=vt-Le;if(Ot<0||Ot===1/0)return;Ae.setup(ee,Q,Me,ne,Ie);let Et,Mt=ve;if(Ie!==null&&(Et=ge.get(Ie),Mt=ae,Mt.setIndex(Et)),ee.isMesh)Q.wireframe===!0?(C.setLineWidth(Q.wireframeLinewidth*mt()),Mt.setMode(X.LINES)):Mt.setMode(X.TRIANGLES);else if(ee.isLine){let tn=Q.linewidth;tn===void 0&&(tn=1),C.setLineWidth(tn*mt()),ee.isLineSegments?Mt.setMode(X.LINES):ee.isLineLoop?Mt.setMode(X.LINE_LOOP):Mt.setMode(X.LINE_STRIP)}else ee.isPoints?Mt.setMode(X.POINTS):ee.isSprite&&Mt.setMode(X.TRIANGLES);if(ee.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let tn=ee._multiDrawStarts,Re=ee._multiDrawCounts,hn=ee._multiDrawCount,dt=Ie?ge.get(Ie).bytesPerElement:1,Tn=te.get(Q).currentProgram.getUniforms();for(let Zn=0;Zn<hn;Zn++)Tn.setValue(X,"_gl_DrawID",Zn),Mt.render(tn[Zn]/dt,Re[Zn])}else if(ee.isInstancedMesh)Mt.renderInstances(Le,Ot,ee.count);else if(ne.isInstancedBufferGeometry){let tn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Re=Math.min(ne.instanceCount,tn);Mt.renderInstances(Le,Ot,Re)}else Mt.render(Le,Ot)};function Id(F,W,ne,Q){k!==null&&F.isNodeMaterial&&k.setObject(Q,F),Pe===!0&&Ue.setState(F,ne,!1),F.transparent===!0&&F.side===ht&&F.forceSinglePass===!1?(F.side=Qt,F.needsUpdate=!0,Qs(F,W,Q),F.side=ti,F.needsUpdate=!0,Qs(F,W,Q),F.side=ht):Qs(F,W,Q)}this.compile=function(F,W,ne=null){ne===null&&(ne=F),k!==null&&k.renderStart(F,W,ne),M=be.get(ne),M.init(W),v.push(M),ne.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(M.pushLight(ee),ee.castShadow&&M.pushShadow(ee))}),F!==ne&&F.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(M.pushLight(ee),ee.castShadow&&M.pushShadow(ee))}),M.setupLights(),k!==null&&k.updateLights(M.state.lightsArray),ke=this.localClippingEnabled,Pe=Ue.init(this.clippingPlanes,ke),Pe===!0&&Ue.setGlobalState(this.clippingPlanes,W),k!==null&&Ye.render(M.state.shadowsArray,ne,W);let Q=new Set;return F.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Se=ee.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){let Me=Se[Ce];Id(Me,ne,W,ee),Q.add(Me)}else Id(Se,ne,W,ee),Q.add(Se)}),M=v.pop(),k!==null&&k.renderEnd(),Q},this.compileAsync=function(F,W,ne=null){let Q=this.compile(F,W,ne);return new Promise(ee=>{function Se(){if(Q.forEach(function(Ce){let Ie=te.get(Ce).currentProgram;(Ie===void 0||Ie.isReady())&&Q.delete(Ce)}),Q.size===0){ee(F);return}setTimeout(Se,10)}gt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let jc=null;function yg(F){jc&&jc(F)}function Ld(){nr.stop()}function Fd(){nr.start()}let nr=new Np;nr.setAnimationLoop(yg),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(F){jc=F,Fe.setAnimationLoop(F),F===null?nr.stop():nr.start()},Fe.addEventListener("sessionstart",Ld),Fe.addEventListener("sessionend",Fd),this.render=function(F,W){if(W!==void 0&&W.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;k!==null&&k.renderStart(F,W);let ne=Fe.enabled===!0&&Fe.isPresenting===!0,Q=S!==null&&(B===null||ne)&&S.begin(T,B);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(W),W=Fe.getCamera()),F.isScene===!0&&F.onBeforeRender(T,F,W,B),M=be.get(F,v.length),M.init(W),M.state.textureUnits=re.getTextureUnits(),v.push(M),Ve.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ne.setFromProjectionMatrix(Ve,zn,W.reversedDepth),ke=this.localClippingEnabled,Pe=Ue.init(this.clippingPlanes,ke),y=ye.get(F,E.length),y.init(),E.push(y),Fe.enabled===!0&&Fe.isPresenting===!0){let Ce=T.xr.getDepthSensingMesh();Ce!==null&&Qc(Ce,W,-1/0,T.sortObjects)}Qc(F,W,0,T.sortObjects),y.finish(),k!==null&&k.updateLights(M.state.lightsArray),T.sortObjects===!0&&y.sort(le,de),nt=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,nt&&je.addToRenderList(y,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Pe===!0&&Ue.beginShadows();let ee=M.state.shadowsArray;if(Ye.render(ee,F,W),Pe===!0&&Ue.endShadows(),(Q&&S.hasRenderPass())===!1){let Ce=y.opaque,Me=y.transmissive;if(M.setupLights(),W.isArrayCamera){let Ie=W.cameras;if(Me.length>0)for(let ze=0,it=Ie.length;ze<it;ze++){let lt=Ie[ze];Nd(Ce,Me,F,lt)}nt&&je.render(F);for(let ze=0,it=Ie.length;ze<it;ze++){let lt=Ie[ze];Dd(y,F,lt,lt.viewport)}}else Me.length>0&&Nd(Ce,Me,F,W),nt&&je.render(F),Dd(y,F,W)}B!==null&&z===0&&(re.updateMultisampleRenderTarget(B),re.updateRenderTargetMipmap(B)),Q&&S.end(T),F.isScene===!0&&F.onAfterRender(T,F,W),Ae.resetDefaultState(),N=-1,O=null,v.pop(),v.length>0?(M=v[v.length-1],re.setTextureUnits(M.state.textureUnits),Pe===!0&&Ue.setGlobalState(T.clippingPlanes,M.state.camera)):M=null,E.pop(),E.length>0?y=E[E.length-1]:y=null,k!==null&&k.renderEnd()};function Qc(F,W,ne,Q){if(F.visible===!1)return;if(F.layers.test(W.layers)){if(F.isGroup)ne=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(W);else if(F.isLightProbeGrid)M.pushLightProbeGrid(F);else if(F.isLight)M.pushLight(F),F.castShadow&&M.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(Ne)){Q&&wt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Ve);let Ce=ue.update(F),Me=F.material;Me.visible&&y.push(F,Ce,Me,ne,wt.z,null,W)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(Ne))){let Ce=ue.update(F),Me=F.material;if(Q&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),wt.copy(F.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),wt.copy(Ce.boundingSphere.center)),wt.applyMatrix4(F.matrixWorld).applyMatrix4(Ve)),Array.isArray(Me)){let Ie=Ce.groups;for(let ze=0,it=Ie.length;ze<it;ze++){let lt=Ie[ze],Le=Me[lt.materialIndex];Le&&Le.visible&&y.push(F,Ce,Le,ne,wt.z,lt,W)}}else Me.visible&&y.push(F,Ce,Me,ne,wt.z,null,W)}}let Se=F.children;for(let Ce=0,Me=Se.length;Ce<Me;Ce++)Qc(Se[Ce],W,ne,Q)}function Dd(F,W,ne,Q){let{opaque:ee,transmissive:Se,transparent:Ce}=F;M.setupLightsView(ne),Pe===!0&&Ue.setGlobalState(T.clippingPlanes,ne),Q&&C.viewport(U.copy(Q)),ee.length>0&&js(ee,W,ne),Se.length>0&&js(Se,W,ne),Ce.length>0&&js(Ce,W,ne),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function Nd(F,W,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Q.id]===void 0){let Le=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Q.id]=new an(1,1,{generateMipmaps:!0,type:Le?Wn:wn,minFilter:Vi,samples:Math.max(4,G.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let Se=M.state.transmissionRenderTarget[Q.id],Ce=Q.viewport||U;Se.setSize(Ce.z*T.transmissionResolutionScale,Ce.w*T.transmissionResolutionScale);let Me=T.getRenderTarget(),Ie=T.getActiveCubeFace(),ze=T.getActiveMipmapLevel();T.setRenderTarget(Se),T.getClearColor(he),ie=T.getClearAlpha(),ie<1&&T.setClearColor(16777215,.5),T.clear(),nt&&je.render(ne);let it=T.toneMapping;T.toneMapping=Vn;let lt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),M.setupLightsView(Q),Pe===!0&&Ue.setGlobalState(T.clippingPlanes,Q),js(F,ne,Q),re.updateMultisampleRenderTarget(Se),re.updateRenderTargetMipmap(Se),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let vt=0,Ot=W.length;vt<Ot;vt++){let Et=W[vt],{object:Mt,geometry:tn,material:Re,group:hn}=Et;if(Re.side===ht&&Mt.layers.test(Q.layers)){let dt=Re.side;Re.side=Qt,Re.needsUpdate=!0,zd(Mt,ne,Q,tn,Re,hn),Re.side=dt,Re.needsUpdate=!0,Le=!0}}Le===!0&&(re.updateMultisampleRenderTarget(Se),re.updateRenderTargetMipmap(Se))}T.setRenderTarget(Me,Ie,ze),T.setClearColor(he,ie),lt!==void 0&&(Q.viewport=lt),T.toneMapping=it}function js(F,W,ne){let Q=W.isScene===!0?W.overrideMaterial:null;for(let ee=0,Se=F.length;ee<Se;ee++){let Ce=F[ee],{object:Me,geometry:Ie,group:ze}=Ce,it=Ce.material;it.allowOverride===!0&&Q!==null&&(it=Q),Me.layers.test(ne.layers)&&zd(Me,W,ne,Ie,it,ze)}}function zd(F,W,ne,Q,ee,Se){k!==null&&ee.isNodeMaterial&&k.setObject(F,ee),F.onBeforeRender(T,W,ne,Q,ee,Se),F.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ee.onBeforeRender(T,W,ne,Q,F,Se),ee.transparent===!0&&ee.side===ht&&ee.forceSinglePass===!1?(ee.side=Qt,ee.needsUpdate=!0,T.renderBufferDirect(ne,W,Q,ee,F,Se),ee.side=ti,ee.needsUpdate=!0,T.renderBufferDirect(ne,W,Q,ee,F,Se),ee.side=ht):T.renderBufferDirect(ne,W,Q,ee,F,Se),F.onAfterRender(T,W,ne,Q,ee,Se)}function Qs(F,W,ne){W.isScene!==!0&&(W=Bt);let Q=te.get(F),ee=M.state.lights,Se=M.state.shadowsArray,Ce=ee.state.version,Me=_e.getParameters(F,ee.state,Se,W,ne,M.state.lightProbeGridArray),Ie=_e.getProgramCacheKey(Me),ze=Q.programs;Q.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?W.environment:null,Q.fog=W.fog;let it=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;Q.envMap=me.get(F.envMap||Q.environment,it),Q.envMapRotation=Q.environment!==null&&F.envMap===null?W.environmentRotation:F.envMapRotation,ze===void 0&&(F.addEventListener("dispose",qn),ze=new Map,Q.programs=ze);let lt=ze.get(Ie);if(lt!==void 0){if(Q.currentProgram===lt&&Q.lightsStateVersion===Ce)return Od(F,Me),lt}else Me.uniforms=_e.getUniforms(F),k!==null&&F.isNodeMaterial&&k.build(F,ne,Me),F.onBeforeCompile(Me,T),lt=_e.acquireProgram(Me,Ie),ze.set(Ie,lt),Q.uniforms=Me.uniforms;let Le=Q.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Le.clippingPlanes=Ue.uniform),Od(F,Me),Q.needsLights=Tg(F),Q.lightsStateVersion=Ce,Q.needsLights&&(Le.ambientLightColor.value=ee.state.ambient,Le.lightProbe.value=ee.state.probe,Le.sunLights.value=ee.state.sun,Le.sunLightShadows.value=ee.state.sunShadow,Le.directionalLights.value=ee.state.directional,Le.directionalLightShadows.value=ee.state.directionalShadow,Le.spotLights.value=ee.state.spot,Le.spotLightShadows.value=ee.state.spotShadow,Le.rectAreaLights.value=ee.state.rectArea,Le.ltc_1.value=ee.state.rectAreaLTC1,Le.ltc_2.value=ee.state.rectAreaLTC2,Le.pointLights.value=ee.state.point,Le.pointLightShadows.value=ee.state.pointShadow,Le.hemisphereLights.value=ee.state.hemi,Le.sunShadowMatrix.value=ee.state.sunShadowMatrix,Le.sunShadowCascade.value=ee.state.sunShadowCascade,Le.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Le.spotLightMatrix.value=ee.state.spotLightMatrix,Le.spotLightMap.value=ee.state.spotLightMap,Le.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=M.state.lightProbeGridArray.length>0,Q.currentProgram=lt,Q.uniformsList=null,lt}function Bd(F){if(F.uniformsList===null){let W=F.currentProgram.getUniforms();F.uniformsList=uo.seqWithValue(W.seq,F.uniforms)}return F.uniformsList}function Od(F,W){let ne=te.get(F);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function wg(F,W){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;b.setFromMatrixPosition(W.matrixWorld);for(let ne=0,Q=F.length;ne<Q;ne++){let ee=F[ne];if(ee.texture!==null&&ee.boundingBox.containsPoint(b))return ee}return null}function Mg(F,W,ne,Q,ee){W.isScene!==!0&&(W=Bt),re.resetTextureUnits();let Se=W.fog,Ce=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?W.environment:null,Me=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ut.workingColorSpace,Ie=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,ze=me.get(Q.envMap||Ce,Ie),it=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,lt=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Le=!!ne.morphAttributes.position,vt=!!ne.morphAttributes.normal,Ot=!!ne.morphAttributes.color,Et=Vn;Q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Et=T.toneMapping);let Mt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,tn=Mt!==void 0?Mt.length:0,Re=te.get(Q),hn=M.state.lights;if(Pe===!0&&(ke===!0||F!==O)){let At=F===O&&Q.id===N;Ue.setState(Q,F,At)}let dt=!1;Q.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==hn.state.version||Re.outputColorSpace!==Me||ee.isBatchedMesh&&Re.batching===!1||!ee.isBatchedMesh&&Re.batching===!0||ee.isBatchedMesh&&Re.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Re.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Re.instancing===!1||!ee.isInstancedMesh&&Re.instancing===!0||ee.isSkinnedMesh&&Re.skinning===!1||!ee.isSkinnedMesh&&Re.skinning===!0||ee.isInstancedMesh&&Re.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Re.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Re.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Re.instancingMorph===!1&&ee.morphTexture!==null||Re.envMap!==ze||Q.fog===!0&&Re.fog!==Se||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ue.numPlanes||Re.numIntersection!==Ue.numIntersection)||Re.vertexAlphas!==it||Re.vertexTangents!==lt||Re.morphTargets!==Le||Re.morphNormals!==vt||Re.morphColors!==Ot||Re.toneMapping!==Et||Re.morphTargetsCount!==tn||!!Re.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Re.__version=Q.version);let Tn=Re.currentProgram;dt===!0&&(Tn=Qs(Q,W,ee),k&&Q.isNodeMaterial&&k.onUpdateProgram(Q,Tn,Re));let Zn=!1,Mi=!1,Cr=!1,yt=Tn.getUniforms(),Nt=Re.uniforms;if(C.useProgram(Tn.program)&&(Zn=!0,Mi=!0,Cr=!0),Q.id!==N&&(N=Q.id,Mi=!0),Re.needsLights){let At=wg(M.state.lightProbeGridArray,ee);Re.lightProbeGrid!==At&&(Re.lightProbeGrid=At,Mi=!0)}if(Zn||O!==F){C.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),yt.setValue(X,"projectionMatrix",F.projectionMatrix),yt.setValue(X,"viewMatrix",F.matrixWorldInverse);let Ti=yt.map.cameraPosition;Ti!==void 0&&Ti.setValue(X,at.setFromMatrixPosition(F.matrixWorld)),G.logarithmicDepthBuffer&&yt.setValue(X,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&yt.setValue(X,"isOrthographic",F.isOrthographicCamera===!0),O!==F&&(O=F,Mi=!0,Cr=!0)}if(Re.needsLights&&(hn.state.sunShadowMap.length>0&&yt.setValue(X,"sunShadowMap",hn.state.sunShadowMap,re),hn.state.directionalShadowMap.length>0&&yt.setValue(X,"directionalShadowMap",hn.state.directionalShadowMap,re),hn.state.spotShadowMap.length>0&&yt.setValue(X,"spotShadowMap",hn.state.spotShadowMap,re),hn.state.pointShadowMap.length>0&&yt.setValue(X,"pointShadowMap",hn.state.pointShadowMap,re)),ee.isSkinnedMesh){yt.setOptional(X,ee,"bindMatrix"),yt.setOptional(X,ee,"bindMatrixInverse");let At=ee.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),yt.setValue(X,"boneTexture",At.boneTexture,re))}ee.isBatchedMesh&&(yt.setOptional(X,ee,"batchingTexture"),yt.setValue(X,"batchingTexture",ee._matricesTexture,re),yt.setOptional(X,ee,"batchingIdTexture"),yt.setValue(X,"batchingIdTexture",ee._indirectTexture,re),yt.setOptional(X,ee,"batchingColorTexture"),ee._colorsTexture!==null&&yt.setValue(X,"batchingColorTexture",ee._colorsTexture,re));let Si=ne.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&K.update(ee,ne,Tn),(Mi||Re.receiveShadow!==ee.receiveShadow)&&(Re.receiveShadow=ee.receiveShadow,yt.setValue(X,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&W.environment!==null&&(Nt.envMapIntensity.value=W.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=yw()),Mi){if(yt.setValue(X,"toneMappingExposure",T.toneMappingExposure),Re.needsLights&&Sg(Nt,Cr),Se&&Q.fog===!0&&Oe.refreshFogUniforms(Nt,Se),Oe.refreshMaterialUniforms(Nt,Q,Y,H,M.state.transmissionRenderTarget[F.id]),Re.needsLights&&Re.lightProbeGrid){let At=Re.lightProbeGrid;Nt.probesSH.value=At.texture,Nt.probesMin.value.copy(At.boundingBox.min),Nt.probesMax.value.copy(At.boundingBox.max),Nt.probesResolution.value.copy(At.resolution)}uo.upload(X,Bd(Re),Nt,re)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(uo.upload(X,Bd(Re),Nt,re),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&yt.setValue(X,"center",ee.center),yt.setValue(X,"modelViewMatrix",ee.modelViewMatrix),yt.setValue(X,"normalMatrix",ee.normalMatrix),yt.setValue(X,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){let At=Q.uniformsGroups;for(let Ti=0,Ir=At.length;Ti<Ir;Ti++){let Vd=At[Ti];fe.update(Vd,Tn),fe.bind(Vd,Tn)}}return Tn}function Sg(F,W){F.ambientLightColor.needsUpdate=W,F.lightProbe.needsUpdate=W,F.sunLights.needsUpdate=W,F.sunLightShadows.needsUpdate=W,F.directionalLights.needsUpdate=W,F.directionalLightShadows.needsUpdate=W,F.pointLights.needsUpdate=W,F.pointLightShadows.needsUpdate=W,F.spotLights.needsUpdate=W,F.spotLightShadows.needsUpdate=W,F.rectAreaLights.needsUpdate=W,F.hemisphereLights.needsUpdate=W}function Tg(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(F,W,ne){let Q=te.get(F);Q.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),te.get(F.texture).__webglTexture=W,te.get(F.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ne,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,W){let ne=te.get(F);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(F,W=0,ne=0){B=F,L=W,z=ne;let Q=null,ee=!1,Se=!1;if(F){let Me=te.get(F);if(Me.__useDefaultFramebuffer!==void 0){C.bindFramebuffer(X.FRAMEBUFFER,Me.__webglFramebuffer),U.copy(F.viewport),Z.copy(F.scissor),q=F.scissorTest,C.viewport(U),C.scissor(Z),C.setScissorTest(q),N=-1;return}else if(Me.__webglFramebuffer===void 0)re.setupRenderTarget(F);else if(Me.__hasExternalTextures)re.rebindTextures(F,te.get(F.texture).__webglTexture,te.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let it=F.depthTexture;if(Me.__boundDepthTexture!==it){if(it!==null&&te.has(it)&&(F.width!==it.image.width||F.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(F)}}let Ie=F.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Se=!0);let ze=te.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(ze[W])?Q=ze[W][ne]:Q=ze[W],ee=!0):F.samples>0&&re.useMultisampledRTT(F)===!1?Q=te.get(F).__webglMultisampledFramebuffer:Array.isArray(ze)?Q=ze[ne]:Q=ze,U.copy(F.viewport),Z.copy(F.scissor),q=F.scissorTest}else U.copy(j).multiplyScalar(Y).floor(),Z.copy(ce).multiplyScalar(Y).floor(),q=De;if(ne!==0&&(Q=R),C.bindFramebuffer(X.FRAMEBUFFER,Q)&&C.drawBuffers(F,Q),C.viewport(U),C.scissor(Z),C.setScissorTest(q),ee){let Me=te.get(F.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Me.__webglTexture,ne)}else if(Se){let Me=W;for(let Ie=0;Ie<F.textures.length;Ie++){let ze=te.get(F.textures[Ie]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ie,ze.__webglTexture,ne,Me)}}else if(F!==null&&ne!==0){let Me=te.get(F.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Me.__webglTexture,ne)}N=-1};function Ud(F){let W=te.get(F);return(W.__readFormat!==F.format||W.__readType!==F.type)&&(W.__readFormat=F.format,W.__readType=F.type,W.__formatReadable=G.textureFormatReadable(F.format),W.__typeReadable=G.textureTypeReadable(F.type)),W}this.readRenderTargetPixels=function(F,W,ne,Q,ee,Se,Ce,Me=0){if(!(F&&F.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=te.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){C.bindFramebuffer(X.FRAMEBUFFER,Ie);try{let ze=F.textures[Me],it=ze.format,lt=ze.type;F.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Me);let Le=Ud(ze);if(Le.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=F.width-Q&&ne>=0&&ne<=F.height-ee&&X.readPixels(W,ne,Q,ee,xe.convert(it),xe.convert(lt),Se)}finally{let ze=B!==null?te.get(B).__webglFramebuffer:null;C.bindFramebuffer(X.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(F,W,ne,Q,ee,Se,Ce,Me=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=te.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie)if(W>=0&&W<=F.width-Q&&ne>=0&&ne<=F.height-ee){C.bindFramebuffer(X.FRAMEBUFFER,Ie);let ze=F.textures[Me],it=ze.format,lt=ze.type;F.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Me);let Le=Ud(ze);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,vt),X.bufferData(X.PIXEL_PACK_BUFFER,Se.byteLength,X.STREAM_READ),X.readPixels(W,ne,Q,ee,xe.convert(it),xe.convert(lt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Ot=B!==null?te.get(B).__webglFramebuffer:null;C.bindFramebuffer(X.FRAMEBUFFER,Ot);let Et=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await op(X,Et,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,vt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Se),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(vt),X.deleteSync(Et),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,W=null,ne=0){let Q=Math.pow(2,-ne),ee=Math.floor(F.image.width*Q),Se=Math.floor(F.image.height*Q),Ce=W!==null?W.x:0,Me=W!==null?W.y:0;re.setTexture2D(F,0),X.copyTexSubImage2D(X.TEXTURE_2D,ne,0,0,Ce,Me,ee,Se),C.unbindTexture()},this.copyTextureToTexture=function(F,W,ne=null,Q=null,ee=0,Se=0){let Ce,Me,Ie,ze,it,lt,Le,vt,Ot,Et=F.isCompressedTexture?F.mipmaps[Se]:F.image;if(ne!==null)Ce=ne.max.x-ne.min.x,Me=ne.max.y-ne.min.y,Ie=ne.isBox3?ne.max.z-ne.min.z:1,ze=ne.min.x,it=ne.min.y,lt=ne.isBox3?ne.min.z:0;else{let Nt=Math.pow(2,-ee);Ce=Math.floor(Et.width*Nt),Me=Math.floor(Et.height*Nt),F.isDataArrayTexture?Ie=Et.depth:F.isData3DTexture?Ie=Math.floor(Et.depth*Nt):Ie=1,ze=0,it=0,lt=0}Q!==null?(Le=Q.x,vt=Q.y,Ot=Q.z):(Le=0,vt=0,Ot=0);let Mt=xe.convert(W.format),tn=xe.convert(W.type),Re;W.isData3DTexture?(re.setTexture3D(W,0),Re=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(re.setTexture2DArray(W,0),Re=X.TEXTURE_2D_ARRAY):(re.setTexture2D(W,0),Re=X.TEXTURE_2D),C.activeTexture(X.TEXTURE0),C.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),C.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),C.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);let hn=C.getParameter(X.UNPACK_ROW_LENGTH),dt=C.getParameter(X.UNPACK_IMAGE_HEIGHT),Tn=C.getParameter(X.UNPACK_SKIP_PIXELS),Zn=C.getParameter(X.UNPACK_SKIP_ROWS),Mi=C.getParameter(X.UNPACK_SKIP_IMAGES);C.pixelStorei(X.UNPACK_ROW_LENGTH,Et.width),C.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Et.height),C.pixelStorei(X.UNPACK_SKIP_PIXELS,ze),C.pixelStorei(X.UNPACK_SKIP_ROWS,it),C.pixelStorei(X.UNPACK_SKIP_IMAGES,lt);let Cr=F.isDataArrayTexture||F.isData3DTexture,yt=W.isDataArrayTexture||W.isData3DTexture;if(F.isDepthTexture){let Nt=te.get(F),Si=te.get(W),At=te.get(Nt.__renderTarget),Ti=te.get(Si.__renderTarget);C.bindFramebuffer(X.READ_FRAMEBUFFER,At.__webglFramebuffer),C.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ir=0;Ir<Ie;Ir++)Cr&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,te.get(F).__webglTexture,ee,lt+Ir),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,te.get(W).__webglTexture,Se,Ot+Ir)),X.blitFramebuffer(ze,it,Ce,Me,Le,vt,Ce,Me,X.DEPTH_BUFFER_BIT,X.NEAREST);C.bindFramebuffer(X.READ_FRAMEBUFFER,null),C.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ee!==0||F.isRenderTargetTexture||te.has(F)){let Nt=te.get(F),Si=te.get(W);C.bindFramebuffer(X.READ_FRAMEBUFFER,A),C.bindFramebuffer(X.DRAW_FRAMEBUFFER,I);for(let At=0;At<Ie;At++)Cr?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Nt.__webglTexture,ee,lt+At):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Nt.__webglTexture,ee),yt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Si.__webglTexture,Se,Ot+At):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Si.__webglTexture,Se),ee!==0?X.blitFramebuffer(ze,it,Ce,Me,Le,vt,Ce,Me,X.COLOR_BUFFER_BIT,X.NEAREST):yt?X.copyTexSubImage3D(Re,Se,Le,vt,Ot+At,ze,it,Ce,Me):X.copyTexSubImage2D(Re,Se,Le,vt,ze,it,Ce,Me);C.bindFramebuffer(X.READ_FRAMEBUFFER,null),C.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else yt?F.isDataTexture||F.isData3DTexture?X.texSubImage3D(Re,Se,Le,vt,Ot,Ce,Me,Ie,Mt,tn,Et.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(Re,Se,Le,vt,Ot,Ce,Me,Ie,Mt,Et.data):X.texSubImage3D(Re,Se,Le,vt,Ot,Ce,Me,Ie,Mt,tn,Et):F.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Se,Le,vt,Ce,Me,Mt,tn,Et.data):F.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Se,Le,vt,Et.width,Et.height,Mt,Et.data):X.texSubImage2D(X.TEXTURE_2D,Se,Le,vt,Ce,Me,Mt,tn,Et);C.pixelStorei(X.UNPACK_ROW_LENGTH,hn),C.pixelStorei(X.UNPACK_IMAGE_HEIGHT,dt),C.pixelStorei(X.UNPACK_SKIP_PIXELS,Tn),C.pixelStorei(X.UNPACK_SKIP_ROWS,Zn),C.pixelStorei(X.UNPACK_SKIP_IMAGES,Mi),Se===0&&W.generateMipmaps&&X.generateMipmap(Re),C.unbindTexture()},this.initRenderTarget=function(F){te.get(F).__webglFramebuffer===void 0&&re.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?re.setTextureCube(F,0):F.isData3DTexture?re.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?re.setTexture2DArray(F,0):re.setTexture2D(F,0),C.unbindTexture()},this.resetState=function(){L=0,z=0,B=null,C.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};function lc(i,e=0){let t=(i.rotation??0)*Math.PI/180,n=Math.cos(t),r=Math.sin(t),o=fo(i,e+i.h/2);return[0,i.h].flatMap(s=>[[-i.w/2,-i.d/2],[i.w/2,-i.d/2],[i.w/2,i.d/2],[-i.w/2,i.d/2]].map(([a,l])=>o(i.x+a*n-l*r,e+s,i.z+a*r+l*n)))}function Hp(i){let e=lc({...i,x:0,z:0}).map(([r,,o])=>[r,o]).sort((r,o)=>r[0]-o[0]||r[1]-o[1]),t=(r,o,s)=>(o[0]-r[0])*(s[1]-r[1])-(o[1]-r[1])*(s[0]-r[0]),n=r=>{let o=[];for(let s of r){for(;o.length>1&&t(o[o.length-2],o[o.length-1],s)<=1e-10;)o.pop();o.push(s)}return o.slice(0,-1)};return[...n(e),...n([...e].reverse())].map(([r,o])=>[r+i.x,o+i.z])}function fo(i,e){let t=(i.rotation_x??0)*Math.PI/180,n=(i.rotation_z??0)*Math.PI/180;if(!t&&!n)return(d,h,f)=>[d,h,f];let r=(i.rotation??0)*Math.PI/180,o=Math.cos(r),s=Math.sin(r),a=Math.cos(t),l=Math.sin(t),c=Math.cos(n),u=Math.sin(n);return(d,h,f)=>{let p=d-i.x,_=f-i.z,m=p*o+_*s,g=h-e,w=-p*s+_*o,x=g*a-w*l,b=g*l+w*a,y=m*c-x*u,M=m*u+x*c;return[i.x+y*o-b*s,e+M,i.z+y*s+b*o]}}function kn(i,e,t,n){if(!t.rotation_x&&!t.rotation_z)return;let r=fo(t,n);for(let o=e;o<i.length;o+=3){let[s,a,l]=r(i[o],i[o+1],i[o+2]);i[o]=s,i[o+1]=a,i[o+2]=l}}function Wp(i){let e=i.length/3,t=new Float32Array(e);for(let n=0;n<e;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(t[n]=r)}return t}function Xp(i,e,t,n){for(let r=t.start*3;r<t.end*3;r++){let o=e[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}function Kp(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var ww=[],cc=new Map,Mw=0,Yp=!1;function qp(i){Yp=i}function Sw(i){let e=_t(i)?.product?.base??i;return[...cc.entries()].filter(([,t])=>t.product?.base===e).map(([t,n])=>({type:t,item:n}))}function br(i){let e=_t(i.type);if(!e)return;let t=e.product?.base??i.type;if(!Yp)return _t(t)??e;let n=Sw(i.type);return n.find(r=>r.type===i.product_variant)?.item??(e.product?e:n.find(r=>r.item.product?.default)?.item??e)}function ys(i){ww=i,cc=new Map(i.flatMap(e=>e.items.map(t=>[Tw(e.id,t.id),t]))),Mw++}function Tw(i,e){return`pack:${i}:${e}`}function Aw(i){return i.startsWith("pack:")}var Ew={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Ih(i){return _t(i)?.parts.find(e=>e.screen)}function _t(i){if(!Aw(i))return;let e=cc.get(i);if(e)return e;let[,t,...n]=i.split(":"),r=Ew[t];return r?cc.get(`pack:${r}:${n.join(":")}`):void 0}function Ct(i,e){let t=_t(e.type),n=mn(i,e.x,e.z);if(e.mount_y!=null)return n+e.mount_y;if(e.type==="lamp_wall")return n+uc;if(Zp.has(e.type))return Math.max(n,po(i,e.x,e.z)-$p(e.type,e.h));if(e.type==="led_strip")return po(i,e.x,e.z)-.04-Math.max(.02,e.h);switch(t?.mount){case"surface":return Jp(i,e.x,e.z);case"wall":return n+(t.wall_y??1);case"ceiling":return po(i,e.x,e.z)-e.h;default:return n+(t?0:ws(e))}}var dc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,gravel_bed:.03,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Wi(i){return i==="hedge"||i==="fence"||i==="pergola"}function Pw(i,e,t){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of i.points){let d=o(c,u);s=Math.min(s,d),a=Math.max(a,d)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(a-s)));return n*l}function kw(i,e,t,n){return Ms(i,e)+dc[e.type]-Ss(i,e,t,n)}var Lh=-.2,hc={set:!1,level:Lh};function jp(i){let e=i?.settings.terrain??null;hc={set:e?.level!=null,level:e?.level??Lh}}function fc(i,e){return hc.level}function Qp(i){return i.elevation>.3?0:hc.set?hc.level-i.elevation:Lh}function Ms(i,e){return Qp(i)+(e.offset??0)}function Ss(i,e,t,n){return e.type==="pool"?0:Pw(e,t,n)}function em(i,e,t){let n=(i.outdoor??[]).filter(o=>!Wi(o.type)&&o.type!=="pool"&&Be([e,t],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?kw(i,r,e,t):Qp(i)}function pc(i,e){return Ms(i,e)+(e.above?nm(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function Cw(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?nm(i):1.5}function Fh(i,e){return e.above?!1:(i.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!Wi(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>Be(n,t.points)))}function tm(i,e){return!e.above&&!Fh(i,e)?mc(i,e)-.05:pc(i,e)-Cw(e)}function mc(i,e){return pc(i,e)-.15}function nm(i){return i.height&&i.height>.3?i.height:1.2}var Iw={type:"none",pitch:35,overhang:.4},eE={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Iw}};var im=.3;var rm=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),uc=1.75;var Zp=new Set(["lamp_downlight","lamp_spot"]);function $p(i,e){return i==="lamp_spot"?Math.max(.06,e)+.008:.02}var om=new Set(["stairs","stairs_u"]);function sm(i,e,t){let n=Math.max(4,Math.round(t/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,e*.45),u=(e-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:u,rise:t/n}}function am(i){return rm.has(i)||!!_t(i)?.light}var Dh=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function ws(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Jp(i,e,t){let n=mn(i,e,t);for(let r of i.furniture)!(Dh.has(r.type)||_t(r.type)?.surface)||!Be([e,t],Ki(r))||(n=Math.max(n,mn(i,r.x,r.z)+(r.mount_y??0)+r.h));return n}var Rw=new Set([...rm,"radiator","ac_unit","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var Lw=["interior","front","front_glass","front_slot","sidelight","sidelights","glass","sliding","sliding_glass","sliding_wood","passage"],Fw=["standard","bars","glass_wall"];function vr(i,e){return i.type==="door"?i.style&&Lw.includes(i.style)?i.style:e?"front":"interior":i.style&&Fw.includes(i.style)?i.style:"standard"}function lm(i,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=o-.5;if(l+c>u){let h=Math.max(0,u)/(l+c);l*=h,c*=h}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function cm(i){return i==="front"||i==="front_glass"||i==="front_slot"||i==="sidelight"||i==="sidelights"}function Mn(i){let e=0;for(let t=0;t<i.length;t++){let[n,r]=i[t],[o,s]=i[(t+1)%i.length];e+=n*s-o*r}return e/2}function gi(i){return Math.abs(Mn(i))}function Xi(i){let e=Mn(i);if(Math.abs(e)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let t=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;t+=(o+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function um(i){if(i.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=i[e],[r,o]=i[(e+1)%4];if(Math.abs(t-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function hm(i){let e=1/0,t=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)e=Math.min(e,o),t=Math.min(t,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:e,z0:t,x1:n,z1:r}}function Ki(i){if(i.rotation_x||i.rotation_z)return Hp(i);let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*t-a*n,i.z+s*n+a*t])}function Be(i,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,s]=e[n],[a,l]=e[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(t=!t)}return t}function pt(i,e){return Nh(i,e)+(e?.floor_offset??0)}function Nh(i,e){return e?.wall_offset??(e?.elevation??i.elevation)-i.elevation}function Cn(i,e){return e?.ceiling_height??e?.height??i.height}function Ts(i,e,t){return i.rooms.find(n=>Be([e,t],n.points))}function mn(i,e,t){return pt(i,Ts(i,e,t))}function po(i,e,t){let n=Ts(i,e,t);return pt(i,n)+Cn(i,n)}function Wt(i){let e=i.rooms.filter(t=>t.points.length>=3);return e.length?Math.max(...e.map(t=>i.elevation+pt(i,t)+Cn(i,t))):i.elevation+i.height}var Zt=(i,e)=>[i[0]-e[0],i[1]-e[1]],Yi=(i,e)=>[i[0]+e[0],i[1]+e[1]],_i=(i,e)=>[i[0]*e,i[1]*e],Es=(i,e)=>i[0]*e[0]+i[1]*e[1],mo=(i,e)=>i[0]*e[1]-i[1]*e[0],As=i=>Math.hypot(i[0],i[1]),oi=i=>{let e=As(i)||1;return[i[0]/e,i[1]/e]},dm=i=>[-i[1],i[0]],fm=i=>[i[1],-i[0]];function bi(i,e,t=[]){let n=e.eps??.005,r=[],o=t.filter(v=>Math.hypot(v.b[0]-v.a[0],v.b[1]-v.a[1])>.05),s=[],a=v=>{for(let S=0;S<s.length;S++)if(Math.abs(s[S][0]-v[0])<=n&&Math.abs(s[S][1]-v[1])<=n)return S;return s.push([v[0],v[1]]),s.length-1},l=[];for(let v of i){let S=v.points;if(S.length<3||Math.abs(Mn(S))<1e-6)continue;let T=Mn(S)>0,P=S.map(a);for(let k=0;k<S.length;k++){let R=P[k],A=P[(k+1)%S.length];R!==A&&l.push(T?{u:R,v:A,room:v.id,edge:k,forward:!0}:{u:A,v:R,room:v.id,edge:k,forward:!1})}}let c=o.map(v=>[a(v.a),a(v.b)]),u=new Set;for(let v of i){let S=v.points;S.length<3||(v.wall_splits??[]).forEach((T,P)=>{if(!T||P>=S.length)return;let k=S[P],R=Zt(S[(P+1)%S.length],k),A=As(R);for(let I of T)I>n&&I<A-n&&u.add(a(Yi(k,_i(R,I/A))))})}let d=[];for(let v of l){let S=s[v.u],T=s[v.v],P=Zt(T,S),k=As(P),R=_i(P,1/k),A=[];for(let L=0;L<s.length;L++){if(L===v.u||L===v.v)continue;let z=Zt(s[L],S),B=Es(z,R);B<=n||B>=k-n||Math.abs(mo(R,z))<=n&&A.push({t:B,id:L})}A.sort((L,z)=>L.t-z.t);let I=[{t:0,id:v.u},...A,{t:k,id:v.v}];for(let L=0;L+1<I.length;L++){let z=I[L],B=I[L+1],N=v.forward?z.t:k-B.t,O=v.forward?B.t:k-z.t;d.push({u:z.id,v:B.id,room:v.room,edge:v.edge,t0:N,t1:O})}}let h=new Map;for(let v of d){let S=v.u<v.v?`${v.u}-${v.v}`:`${v.v}-${v.u}`,T=h.get(S);T||h.set(S,T=[]),T.push(v)}let f=v=>({room_id:v.room,edge:v.edge,t0:v.t0,t1:v.t1}),p=new Map;for(let v of d){let S=`${v.room}:${v.edge}`;p.set(S,[...p.get(S)??[],v.t0].sort((T,P)=>T-P))}let _=v=>{let S=i.find(P=>P.id===v.room)?.wall_heights?.[v.edge];if(!Array.isArray(S))return S;let T=p.get(`${v.room}:${v.edge}`)??[];return S[T.indexOf(v.t0)]??null},m=v=>{let S=v.map(_).filter(P=>typeof P=="number"&&P>0);if(S.length)return Math.min(...S);let T=v.map(P=>i.find(k=>k.id===P.room)?.ceiling_height);return T.every(P=>typeof P=="number"&&P>0)?Math.max(...T):void 0},g=v=>{let S=v.map(T=>i.find(P=>P.id===T.room)?.wall_thickness?.[T.edge]).filter(T=>typeof T=="number"&&T>0);return S.length?Math.max(...S):void 0},w=v=>v.some(S=>_(S)===0),x=[],b=[];for(let v of h.values()){let S=v[0],T=v.find(P=>P!==S&&P.u===S.v&&P.v===S.u&&P.room!==S.room);for(let P of v)P!==S&&P!==T&&P.room!==S.room&&r.push(`overlap:${S.room}:${P.room}`);if(w(T?[S,T]:[S])){T&&x.push([S.room,T.room]);continue}if(T){let P=g([S,T])??e.interior;b.push({a:S.u,b:S.v,left:P/2,right:P/2,exterior:!1,roomLeft:S.room,roomRight:T.room,sources:[f(S),f(T)],height:m([S,T])})}else b.push({a:S.u,b:S.v,left:0,right:g([S])??e.exterior,exterior:!0,roomLeft:S.room,roomRight:null,sources:[f(S)],height:m([S])})}let y=v=>oi(Zt(s[v.b],s[v.a]));for(let v of b){if(v.exterior||v.free)continue;let S=new Set;for(let P of[v.a,v.b])for(let k of b)!k.exterior||k.free||k.a!==P&&k.b!==P||Math.abs(mo(y(v),y(k)))>1e-6||(k.roomLeft===v.roomLeft?S.add("left"):k.roomLeft===v.roomRight&&S.add("right"));if(S.size!==1)continue;let T=v.left+v.right;S.has("left")?(v.left=0,v.right=T):(v.left=T,v.right=0)}o.forEach((v,S)=>{let[T,P]=c[S];if(T===P)return;let k=[(v.a[0]+v.b[0])/2,(v.a[1]+v.b[1])/2],R=i.find(L=>L.points.length>=3&&Be(k,L.points))?.id??null,A=(v.thickness??e.interior)/2,I=typeof v.height=="number"&&v.height>0?v.height:void 0;b.push({free:v.id,a:T,b:P,left:A,right:A,exterior:!1,roomLeft:R,roomRight:R,sources:[],height:I})}),b=Nw(b,s,u);let M=Bw(b,s);return{walls:b.map((v,S)=>{let T=s[v.a],P=s[v.b],k=M.get(`${S}:a`),R=M.get(`${S}:b`),A=Ow([k.right,R.left,P,R.right,k.left,T],1e-6);return{id:Dw(T,P),a:[T[0],T[1]],b:[P[0],P[1]],left:v.left,right:v.right,exterior:v.exterior,roomLeft:v.roomLeft,roomRight:v.roomRight,sources:v.sources,footprint:A,...v.free?{free:v.free}:{},...v.height!==void 0?{height:v.height}:{}}}),warnings:[...new Set(r)],open:x}}function Dw(i,e){let t=o=>Math.round(o*100),[n,r]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function pm(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function Nw(i,e,t=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=pm(l)),c.a!==s&&(c=pm(c)),l.a===c.b)continue;let u=oi(Zt(e[l.b],e[l.a])),d=oi(Zt(e[c.b],e[c.a]));if(Math.abs(mo(u,d))>1e-6||Es(u,d)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:zw(l.sources,c.sources)},f=n.filter((p,_)=>_!==a[0]&&_!==a[1]);f.push(h),n.length=0,n.push(...f),r=!0;break}}return n}function zw(i,e){let t=i.map(n=>({...n}));for(let n of e){let r=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function Bw(i,e){let t=new Map;i.forEach((r,o)=>{let s=oi(Zt(e[r.b],e[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:_i(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let u=t.get(l);u||t.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,o]of t){let s=e[r];o.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Yi(s,_i(dm(c.d),c.left)),right:Yi(s,_i(fm(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let u=o[c],d=o[(c+1)%o.length],h=Yi(s,_i(dm(u.d),u.left)),f=Yi(s,_i(fm(d.d),d.right)),p=mo(u.d,d.d);if(Math.abs(p)<1e-4)continue;let _=mo(Zt(f,h),d.d)/p,m=Yi(h,_i(u.d,_));As(Zt(m,s))>l||(n.get(u.key).left=m,n.get(d.key).right=m)}}return n}function Ow(i,e){let t=i.filter((r,o)=>As(Zt(r,i[(o+1)%i.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let o=t[(r+t.length-1)%t.length],s=t[r],a=t[(r+1)%t.length],l=Zt(s,o),c=Zt(a,s);if(Math.abs(mo(oi(l),oi(c)))<1e-7&&Es(l,c)>0){t=t.filter((u,d)=>d!==r),n=!0;break}}}return t}function zh(i,e,t){let n=i.points[e],r=i.points[(e+1)%i.points.length],o=oi(Zt(r,n));return Yi(n,_i(o,t))}function xr(i,e,t){if(i.wall){let r=t.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=oi(Zt(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Yi(r.a,[-o[1],o[0]])]},edge:0}}let n=e.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function yr(i,e,t){if(!e.wall)return Uw(i,t.room,t.edge,e.offset);let n=i.find(o=>o.free===e.wall);if(!n)return null;let r=zh(t.room,0,e.offset);return{wall:n,s:Es(Zt(r,n.a),oi(Zt(n.b,n.a)))}}function Uw(i,e,t,n){for(let r of i){if(!r.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=zh(e,t,n);return{wall:r,s:Es(Zt(s,r.a),oi(Zt(r.b,r.a)))}}return null}var qi=(i,e,t)=>(e[0]-i[0])*(t[1]-i[1])-(e[1]-i[1])*(t[0]-i[0]);function Zi(i){return i.reduce((e,t,n)=>{let r=i[(n+1)%i.length];return e+t[0]*r[1]-r[0]*t[1]},0)/2}var Vw=(i,e,t)=>Math.abs(qi(e,t,i))<1e-8&&i[0]>=Math.min(e[0],t[0])-1e-8&&i[0]<=Math.max(e[0],t[0])+1e-8&&i[1]>=Math.min(e[1],t[1])-1e-8&&i[1]<=Math.max(e[1],t[1])+1e-8;function Rs(i,e){let t=!1;for(let n=0,r=i.length-1;n<i.length;r=n++){let o=i[r],s=i[n];if(Vw(e,o,s))return!0;o[1]>e[1]!=s[1]>e[1]&&e[0]<(s[0]-o[0])*(e[1]-o[1])/(s[1]-o[1])+o[0]&&(t=!t)}return t}function mm(i){let e=i.map((r,o)=>o);Zi(i)<0&&e.reverse();let t=[],n=i.length*i.length;for(;e.length>3&&n-- >0;){let r=!1;for(let o=0;o<e.length;o++){let s=e[(o+e.length-1)%e.length],a=e[o],l=e[(o+1)%e.length],c=qi(i[s],i[a],i[l]);if(Math.abs(c)<1e-8){e.splice(o,1),r=!0;break}if(!(c<0||e.some(u=>u!==s&&u!==a&&u!==l&&qi(i[s],i[a],i[u])>=-1e-8&&qi(i[a],i[l],i[u])>=-1e-8&&qi(i[l],i[s],i[u])>=-1e-8))){t.push([s,a,l]),e.splice(o,1),r=!0;break}}if(!r)return[]}return e.length===3&&Math.abs(qi(i[e[0]],i[e[1]],i[e[2]]))>1e-8&&t.push([...e]),t}function gm(i,e){let t=i,n=Zi(e)<0?-1:1;for(let r=0;r<e.length&&t.length;r++){let o=e[r],s=e[(r+1)%e.length],a=t;t=[];for(let l=0;l<a.length;l++){let c=a[l],u=a[(l+1)%a.length],d=n*qi(o,s,c),h=n*qi(o,s,u);if(d>=-1e-8&&t.push(c),d>=-1e-8!=h>=-1e-8){let f=d/(d-h);t.push([c[0]+(u[0]-c[0])*f,c[1]+(u[1]-c[1])*f,c[2]+(u[2]-c[2])*f])}}}return t.filter((r,o)=>{let s=t[(o+1)%t.length];return Math.hypot(r[0]-s[0],r[1]-s[1])>1e-8})}function gc(i,e,t){let n=[0,1],r=t[0]-e[0],o=t[1]-e[1];for(let a=0;a<i.length;a++){let l=i[a],c=i[(a+1)%i.length],u=c[0]-l[0],d=c[1]-l[1],h=r*d-o*u;if(Math.abs(h)<1e-8)continue;let f=((l[0]-e[0])*d-(l[1]-e[1])*u)/h,p=((l[0]-e[0])*o-(l[1]-e[1])*r)/h;f>1e-8&&f<1-1e-8&&p>=-1e-8&&p<=1+1e-8&&n.push(f)}n.sort((a,l)=>a-l);let s=[];for(let a=1;a<n.length;a++){let l=n[a-1],c=n[a],u=(l+c)/2;c-l>1e-8&&Rs(i,[e[0]+r*u,e[1]+o*u])&&s.push([l,c])}return s}function _m(i,e){return e.every((t,n)=>Rs(i,t)&&gc(i,t,e[(n+1)%e.length]).reduce((r,[o,s])=>r+s-o,0)>1-1e-8)}var ks=Math.PI/180;function Xn(i){let e=Math.min(i.x0,i.x1),t=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:e,u1:t,w:r-n,at:(o,s)=>[o,i.flip?r-s:n+s]}:{u0:n,u1:r,w:t-e,at:(o,s)=>[i.flip?t-s:e+s,o]}}function Sn(i){let e=Xn(i).w,t=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ks),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ks);if(i.shape==="flat"||i.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(i.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(i.shape==="mansard"){let l=wm(e,t,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(r+o))):e/2,a=t+s*r;return{vr:s,rh:a,y:l=>l<=s?t+l*r:n+(e-l)*o}}var Gw=.14;function vm(i,e){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<e-.05}function xm(i,e,t){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let o of i.settings.roof.sections??[]){if(o.open)continue;let s=Math.min(o.x0,o.x1),a=Math.max(o.x0,o.x1),l=Math.min(o.z0,o.z1),c=Math.max(o.z0,o.z1);if(e<s-1e-6||e>a+1e-6||t<l-1e-6||t>c+1e-6||o.points&&o.points.length>=3&&!Be([e,t],o.points))continue;let[u,d]=vi(o,e,t),h=o.shape==="flat"||o.shape==="parapet",f=Math.max(0,o.overhang??r),_=((h?null:_o($i(o,{u0:f,u1:f,a:f,b:f}),u,d))??Sn(o).y(d))-Gw;n=n===null?_:Math.max(n,_)}return n}function _c(i,e){let t=i.length;if(t<3||Math.abs(e)<1e-9)return i.map(o=>[o[0],o[1]]);let n=Mn(i)>=0?1:-1,r=[];for(let o=0;o<t;o++){let s=i[(o+t-1)%t],a=i[o],l=i[(o+1)%t],c=bm([a[0]-s[0],a[1]-s[1]]),u=bm([l[0]-a[0],l[1]-a[1]]),d=[c[1]*n,-c[0]*n],h=[u[1]*n,-u[0]*n],f=d[0]+h[0],p=d[1]+h[1],_=Math.hypot(f,p);if(_<1e-6){r.push([a[0]+d[0]*e,a[1]+d[1]*e]);continue}let m=(f*d[0]+p*d[1])/_,g=Math.min(4,1/Math.max(.25,m));r.push([a[0]+f/_*e*g,a[1]+p/_*e*g])}return r}function bm(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function Cs(i,e){if(i.points&&i.points.length>=3)return _c(i.points,e);let t=Math.min(i.x0,i.x1)-e,n=Math.max(i.x0,i.x1)+e,r=Math.min(i.z0,i.z1)-e,o=Math.max(i.z0,i.z1)+e;return[[t,r],[n,r],[n,o],[t,o]]}function ym(i,e,t,n){let r=bi(i,{exterior:t,interior:n},e).walls.filter(d=>d.exterior&&!d.free);if(!r.length)return null;let o=d=>`${Math.round(d[0]*1e3)}:${Math.round(d[1]*1e3)}`,s=new Map,a=r.map(d=>({a:d.a,b:d.b}));for(let d of a)for(let h of[d.a,d.b])s.set(o(h),[...s.get(o(h))??[],d]);let l=new Set,c=null;for(let d of a){if(l.has(d))continue;l.add(d);let h=[d.a,d.b],f=d.b;for(;;){let p=(s.get(o(f))??[]).find(_=>!l.has(_));if(!p||(l.add(p),f=o(p.a)===o(f)?p.b:p.a,o(f)===o(h[0])))break;h.push(f)}h.length>=3&&o(f)===o(h[0])&&(!c||Math.abs(gi(h))>Math.abs(gi(c)))&&(c=h)}if(!c)return null;let u=[];for(let d=0;d<c.length;d++){let h=c[(d+c.length-1)%c.length],f=c[d],p=c[(d+1)%c.length],_=(f[0]-h[0])*(p[1]-f[1])-(f[1]-h[1])*(p[0]-f[0]);Math.abs(_)>1e-6&&u.push(f)}return u.length>=3?_c(u,t):null}var Ps=Math.tan(30*ks);function wm(i,e,t,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=e+o*n,l=t+s*r,c=Math.min(i-s,Math.max(o,(l-a+Ps*(i-s+o))/(2*Ps))),u=a+(c-o)*Ps;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:h=>h<=o?e+h*n:h<=c?a+(h-o)*Ps:h<=i-s?l+(i-s-h)*Ps:t+(i-h)*r}}function $i(i,e){let t=Hw(i,e);if(!i.points||i.points.length<3)return t;let n=Cs(i,Math.max(0,Math.min(e.u0,e.u1,e.a,e.b))).map(([c,u])=>vi(i,c,u)),r=mm(n),o=t.faces.flatMap(c=>r.map(u=>gm(c,u.map(d=>n[d])))).filter(c=>c.length>=3&&Math.abs(Zi(c))>1e-8),s=(c,u,d)=>[c[0]+(u[0]-c[0])*d,c[1]+(u[1]-c[1])*d,c[2]+(u[2]-c[2])*d],a=t.ridges.flatMap(([c,u])=>gc(n,c,u).map(([d,h])=>[s(c,u,d),s(c,u,h)])),l=[];return n.forEach((c,u)=>{let d=n[(u+1)%n.length],h=[0,...t.faces.flatMap(f=>gc(f.map(([p,_])=>[p,_]),c,d).flat())].filter(f=>f<1-1e-8).sort((f,p)=>f-p);for(let f=0;f<h.length;f++){if(f&&h[f]-h[f-1]<1e-8)continue;let p=h[f],_=c[0]+(d[0]-c[0])*p,m=c[1]+(d[1]-c[1])*p;l.push([_,m,_o(t,_,m)??Sn(i).y(m)])}}),{faces:o,rim:l,ridges:a,gable:null}}function Hw(i,e){let t=Xn(i),n=Sn(i),r=t.w,o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(w,x)=>[w,x,n.y(x)],u=c(a,-o),d=c(l,-o),h=c(l,r+s),f=c(a,r+s),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ks),_=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ks);if(i.shape==="pent"){let w=[u,d,h,f];return{faces:[w],rim:w,ridges:[[h,f]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let w=i.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,r-n.vr)||r/2),x=[t.u0+w,n.vr,n.rh],b=[t.u1-w,n.vr,n.rh],y=i.shape==="pyramid"?[[u,d,x],[d,h,x],[h,f,x],[f,u,x]]:[[u,d,b,x],[x,b,h,f],[f,u,x],[d,h,b]],M=i.shape==="pyramid"?[[u,x],[f,x],[d,x],[h,x]]:[[x,b],[u,x],[f,x],[d,b],[h,b]];return{faces:y,rim:[u,d,h,f],ridges:M,gable:null}}if(i.shape==="halfhip"){let w=Math.min(n.y(0),n.y(r)),x=w+(n.rh-w)*.55,b=p>1e-6?Math.min(n.vr,(x-i.eave_a)/p):n.vr,y=_>1e-6?Math.max(n.vr,r-(x-i.eave_b)/_):n.vr,M=Math.min((t.u1-t.u0)/2-.1,(n.rh-x)/Math.max(.2,p)),E=[t.u0+M,n.vr,n.rh],v=[t.u1-M,n.vr,n.rh],S=[a,b,x],T=[a,y,x],P=[l,b,x],k=[l,y,x];return{faces:[[u,d,P,v,E,S],[E,v,k,h,f,T],[T,S,E],[P,k,v]],rim:[u,d,P,k,h,f,T,S],ridges:[[E,v],[S,E],[T,E],[P,v],[k,v]],gable:[[0,n.y(0)],[b,x],[y,x],[r,n.y(r)]]}}if(i.shape==="mansard"){let w=wm(r,i.eave_a,i.eave_b,p,_),x=[a,w.vla,w.yla],b=[l,w.vla,w.yla],y=[a,r-w.vlb,w.ylb],M=[l,r-w.vlb,w.ylb],E=[a,w.vr,w.rh],v=[l,w.vr,w.rh];return{faces:[[u,d,b,x],[x,b,v,E],[E,v,M,y],[y,M,h,f]],rim:[u,d,b,v,M,h,f,y,E,x],ridges:[[E,v],[x,b],[y,M]],gable:[[0,n.y(0)],[w.vla,w.yla],[w.vr,w.rh],[r-w.vlb,w.ylb],[r,n.y(r)]]}}let m=[a,n.vr,n.rh],g=[l,n.vr,n.rh];return{faces:[[u,d,g,m],[m,g,h,f]],rim:[u,d,g,h,f,m],ridges:[[m,g]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function _o(i,e,t){let n=null;for(let r of i.faces){if(!Rs(r.map(w=>[w[0],w[1]]),[e,t]))continue;let[o,s]=r,a=r.slice(2).find(w=>Math.abs((s[0]-o[0])*(w[1]-o[1])-(s[1]-o[1])*(w[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],u=s[1]-o[1],d=a[0]-o[0],h=a[2]-o[2],f=a[1]-o[1],p=c*f-u*h,_=u*d-l*f,m=l*h-c*d;if(Math.abs(_)<1e-9)continue;let g=o[2]-(p*(e-o[0])+m*(t-o[1]))/_;n=n===null?g:Math.min(n,g)}return n}function vi(i,e,t){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),o=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?[e,i.flip?s-t:t-o]:[t,i.flip?r-e:e-n]}function Ww(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function bc(i,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(e)*1.5)continue;let a=Ww(s);t<a.x0||t>a.x1||n<a.z0||n>a.z1||(!o||r(s)<r(o))&&(o=s)}return o}function Bh(i,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=Xn(e),n=Sn(e).rh,r=$i(i,{u0:0,u1:0,a:0,b:0}),o=Sn(i),s=p=>{let[_,m]=t.at(p,t.w/2),[g,w]=vi(i,_,m);return _o(r,g,w)??o.y(w)},a=s(t.u0)<=s(t.u1),l=a?t.u0:t.u1,c=a?t.u1:t.u0,u=a?1:-1,d=Math.abs(c-l),h=c;for(let p=.5;p<d;p+=.05)if(s(l+u*p)>=n-.02){h=l+u*p;break}if(Math.abs(h-c)<.05)return e;let f={...e};return e.axis==="x"?c===t.u1?f.x1=h:f.x0=h:c===t.u1?f.z1=h:f.z0=h,f}function Mm(i,e){let t=Bh(i,e),n=Xn(t),r=Sn(t),o=$i(i,{u0:0,u1:0,a:0,b:0}),s=Sn(i),a=h=>{let[f,p]=n.at(h,n.w/2),[_,m]=vi(i,f,p);return _o(o,_,m)??s.y(m)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],d=Math.max(1,Math.ceil(c/.15));for(let h=0;h<d;h++){let f=c*h/d,p=c*(h+1)/d,_=l?n.u0+f:n.u1-f,m=l?n.u0+p:n.u1-p,g=a(m),w=1/0,x=-1/0;for(let v=0;v<=40;v++){let S=n.w*v/40;r.y(S)>g+.02&&(w=Math.min(w,S),x=Math.max(x,S))}if(!(x-w>.05))continue;let b=n.at(_,w),y=n.at(m,x),M=vi(i,b[0],b[1]),E=vi(i,y[0],y[1]);u.push({u0:Math.min(M[0],E[0]),u1:Math.max(M[0],E[0]),v0:Math.min(M[1],E[1]),v1:Math.max(M[1],E[1])})}return u}function go(i,e,t,n){let r=s=>n?s[e]<=t+1e-9:s[e]>=t-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),u=r(l);if(c&&o.push(a),c!==u){let d=(t-a[e])/(l[e]-a[e]);o.push([a[0]+(l[0]-a[0])*d,a[1]+(l[1]-a[1])*d,a[2]+(l[2]-a[2])*d])}}return o}function Sm(i,e){let t=go(i,0,e.u0,!0),n=go(i,0,e.u1,!1),r=go(go(i,0,e.u0,!1),0,e.u1,!0),o=go(r,1,e.v0,!0),s=go(r,1,e.v1,!1);return[t,n,o,s].filter(a=>a.length>=3&&Math.abs(gi(a.map(l=>[l[0],l[1]])))>1e-6)}function vc(i,e,t){let n=Xn(e),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>e.base+.05)),o=c=>c.some(u=>r.some(d=>Be(u,d.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:t,b:o(a.map(c=>n.at(c,n.w+s)))?0:t,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:t,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:t}}function Tm(i,e){let t=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}function Xw(i){return Sn(i).rh}function Am(i,e,t){let n=i.settings.roof.sections??[],r=n.filter(l=>t.includes(l.id)).map(l=>bc(n,l)??l);if(!r.length)return e.id;let o=Math.max(...r.map(l=>Xw(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(u=>{let[d,h]=c.points.reduce((f,p)=>[f[0]+p[0]/c.points.length,f[1]+p[1]/c.points.length],[0,0]);return d>=Math.min(u.x0,u.x1)&&d<=Math.max(u.x0,u.x1)&&h>=Math.min(u.z0,u.z1)&&h<=Math.max(u.z0,u.z1)}));return i.floors.filter(l=>l.elevation>=e.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??e.id}function un(i,e){let t=[e.roomLeft,e.roomRight].map(n=>i.rooms.find(r=>r.id===n)).filter(n=>!!n);return t.length?{bottom:Math.min(...t.map(n=>Nh(i,n))),top:Math.max(...t.map(n=>pt(i,n)+Math.min(Cn(i,n),e.height??1/0)))}:{bottom:0,top:Math.min(i.height,e.height??i.height)}}function Is(i,e,t){let n=xr(e,i.rooms,i.walls??[]),r=n&&yr(t,e,n);if(!n||!r)return null;let o=r.wall,s=Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1]);if(s<1e-6)return null;let a=[(o.b[0]-o.a[0])/s,(o.b[1]-o.a[1])/s],l=o.roomLeft===n.room.id,c=i.rooms.find(U=>U.id===n.room.id||o.free&&U.id===o.roomLeft)??n.room,u=o.free?void 0:i.rooms.find(U=>U.id===(l?o.roomRight:o.roomLeft)),d=l?[-a[1],a[0]]:[a[1],-a[0]],h=Math.min(e.width,s),f=Math.max(0,Math.min(s-h,r.s-h/2)),p=[o.a[0]+a[0]*f,o.a[1]+a[1]*f],_=pt(i,c),m=u?pt(i,u):_,g=Math.min(_,m),w=Math.max(_,m),x={opening:e,room:c,other:u,wall:o,start:p,axis:a,toRoom:d,width:h,low:g,high:w,threshold:e.type==="window"?_:w,ceiling:Math.min(_+Cn(i,c),u?m+Cn(i,u):1/0)};if((c.wall_offset!=null||c.floor_offset!=null)&&(x.threshold=_),_+e.sill+e.height>x.ceiling+.001&&(x.issue="height"),!e.steps||!u||w-g<.001||e.type==="window")return x;let b=e.steps.side==="room",y=b?c:u,M=b?d:[-d[0],-d[1]],E=pt(i,y),v=E===w,S=b?l?o.left:o.right:l?o.right:o.left,T=e.steps.depth,P=e.steps.count,k=e.steps.offset??0,R=S+k,A=S-o.left-o.right;if(x.issue=x.issue??"fit",!Number.isFinite(T)||T<.1||T>10||!Number.isInteger(P)||P<1||P>30||!Number.isFinite(k)||Math.abs(k)>10||R+T<S+.01)return x;let I=(U,Z)=>[p[0]+a[0]*U+M[0]*Z,p[1]+a[1]*U+M[1]*Z],L=k<0?R:-.005,z=[I(0,L),I(h,L),I(h,R+T),I(0,R+T)],B=[I(.01,Math.min(S,R)+.01),I(h-.01,Math.min(S,R)+.01),I(h-.01,R+T-.01),I(.01,R+T-.01)],N=[I(-.001,A-.001),I(h+.001,A-.001),I(h+.001,S+.001),I(-.001,S+.001)],O=k<0?[c.points,u.points,N]:[y.points];return B.every((U,Z)=>O.some(q=>Be(U,q))&&Oh(U,B[(Z+1)%B.length],O).length===0)&&(x.threshold=b?m:_,x.stair={room:y,toward:M,face:R,wallFace:S,back:A,offset:k,count:P,depth:T,recess:v,bay:z},x.issue=_+e.sill+e.height>x.ceiling+.001?"height":void 0),x}function xc(i,e,t){return t.filter(n=>n.stair&&Math.abs(pt(i,e)-n.high)<1e-6&&(n.room.id===e.id||n.other?.id===e.id)&&(n.stair.recess||n.stair.offset<0)).map(n=>n.stair.bay)}function Em(i){let e=i.stair;if(!e||e.offset>=0)return i.threshold;let t=i.threshold;for(let n=0;n<e.count;n++){let r=e.face+e.depth*n/e.count;if(e.face+e.depth*(n+1)/e.count<=e.back||r>=e.wallFace)continue;let s=e.recess?i.low+(i.high-i.low)*(n+1)/e.count:i.high-(i.high-i.low)*n/e.count;t=Math.min(t,s)}return t}function bo(i,e){let t=s=>s.reduce((a,l,c)=>{let u=s[(c+1)%s.length];return a+l[0]*u[1]-u[0]*l[1]},0),n=t(e)>=0?1:-1,r=[],o=i;for(let s=0;s<e.length&&o.length>=3;s++){let a=e[s],l=e[(s+1)%e.length],c=f=>n*((l[0]-a[0])*(f[1]-a[1])-(l[1]-a[1])*(f[0]-a[0])),u=f=>{let p=[];return o.forEach((_,m)=>{let g=o[(m+1)%o.length],w=f*c(_),x=f*c(g);if(w>=-1e-9&&p.push(_),w>=-1e-9!=x>=-1e-9){let b=w/(w-x);p.push([_[0]+(g[0]-_[0])*b,_[1]+(g[1]-_[1])*b])}}),p},d=u(-1),h=u(1);d.length>=3&&Math.abs(t(d))>1e-8&&r.push(d),o=h}return r}function Oh(i,e,t){let n=[0,1],r=e[0]-i[0],o=e[1]-i[1];for(let l of t)l.forEach((c,u)=>{let d=l[(u+1)%l.length],h=d[0]-c[0],f=d[1]-c[1],p=r*f-o*h;if(Math.abs(p)<1e-9)return;let _=((c[0]-i[0])*f-(c[1]-i[1])*h)/p,m=((c[0]-i[0])*o-(c[1]-i[1])*r)/p;_>0&&_<1&&m>=0&&m<=1&&n.push(_)});n.sort((l,c)=>l-c);let s=l=>[i[0]+r*l,i[1]+o*l],a=[];for(let l=1;l<n.length;l++)n[l]-n[l-1]>1e-9&&!t.some(c=>Be(s((n[l]+n[l-1])/2),c))&&a.push([s(n[l-1]),s(n[l])]);return a}function vo(i,e){let t=Mn(e)>0?1:-1,n=[...i];for(let r=0;r<e.length&&n.length;r++){let o=e[r],s=e[(r+1)%e.length],a=c=>t*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let u=l[c],d=l[(c+1)%l.length],h=a(u),f=a(d);if(h>=0&&n.push(u),h>=0!=f>=0){let p=h/(h-f);n.push([u[0]+(d[0]-u[0])*p,u[1]+(d[1]-u[1])*p])}}}return n}function Rm(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length],o=i[(t+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(e&&Math.sign(s)!==e)return!1;e=Math.sign(s)}}return!0}var si=We(3662079,.95),Uh=We(3662079,1),ai=We(5995775,.34),wc=We(5995775,.22),yc=[-.55,.83],Ze=-1,Mc=16,wr=32,Pm=48,Ls=64,tt=class{p=[];c=[];f=[];uv;tile;constructor(e=!1,t=!1){this.uv=e?[]:null,this.tile=t?[]:null}tri(e,t,n,r,o=r,s=r,a,l=Ze,c=[0,1]){this.p.push(...e,...t,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let e=new Ke;return e.setAttribute("position",new Te(this.p,3)),e.setAttribute("color",new Te(this.c,3)),e.setAttribute("fold",new Te(this.f,1)),this.uv&&e.setAttribute("uv",new Te(this.uv,2)),this.tile&&e.setAttribute("tile",new Te(this.tile,2)),e.computeBoundingSphere(),e}},Ft=class{p=[];c=[];f=[];seg(e,t,n=si,r=Ze){this.p.push(...e,...t),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(e,t,n,r,o){let[s,a]=e[1]<=t[1]?[e,t]:[t,e];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,Ze);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,Ze),this.seg(c,a,n,o)}geometry(){let e=new Ke;return e.setAttribute("position",new Te(this.p,3)),e.setAttribute("color",new Te(this.c,3)),e.setAttribute("fold",new Te(this.f,1)),e}};function Sc(i,e,t,n){let o=i.uv?2:0,s=(d,h)=>{let f=d*3+h;return{p:i.p.slice(f*3,f*3+3),c:i.c.slice(f*3,f*3+3),uv:i.uv?i.uv.slice(f*2,f*2+2):null,tile:i.tile?i.tile.slice(f*2,f*2+2):null}},a=(d,h,f)=>({p:d.p.map((p,_)=>p+(h.p[_]-p)*f),c:d.c.map((p,_)=>p+(h.c[_]-p)*f),uv:d.uv&&h.uv?d.uv.map((p,_)=>p+(h.uv[_]-p)*f):null,tile:d.tile}),l=(d,h,f)=>{for(let p=0;p<3;p++){let _=d*3+p;for(let m=0;m<3;m++)i.p[_*3+m]=h[p].p[m],i.c[_*3+m]=h[p].c[m];if(i.uv&&h[p].uv)for(let m=0;m<o;m++)i.uv[_*2+m]=h[p].uv[m];if(i.tile&&h[p].tile)for(let m=0;m<2;m++)i.tile[_*2+m]=h[p].tile[m];i.f[_]=f}},c=(d,h)=>{let f=i.p.length/9;for(let p of d)i.p.push(...p.p),i.c.push(...p.c),i.f.push(h),i.uv?.push(...p.uv??[.5,.5]),i.tile?.push(...p.tile??[0,1]);return f},u=i.p.length/9;for(let d=e;d<u;d++){let h=[s(d,0),s(d,1),s(d,2)],f=h.map(v=>v.p[1]>t+1e-6),p=h.map(v=>v.p[1]<t-1e-6);if(!f.some(Boolean))continue;if(!p.some(Boolean)){for(let v=0;v<3;v++)i.f[d*3+v]=n;continue}let _=i.f[d*3],m=(v,S)=>a(v,S,(t-v.p[1])/(S.p[1]-v.p[1])),g=f.filter(Boolean).length,w=g===1?f.indexOf(!0):f.indexOf(!1),x=h[w],b=h[(w+1)%3],y=h[(w+2)%3],M=m(x,b),E=m(y,x);g===1?(l(d,[x,M,E],n),c([M,b,y],_),c([M,y,E],_)):(l(d,[x,M,E],_),c([M,b,y],n),c([M,y,E],n))}}function km(i,e,t,n){let r=i.p.length/6;for(let o=e;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=t+1e-6)continue;if(l[1]>=t-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let u=(t-l[1])/(c[1]-l[1]),d=[l[0]+(c[0]-l[0])*u,t,l[2]+(c[2]-l[2])*u];for(let f=0;f<3;f++)i.p[o*6+f]=l[f],i.p[o*6+3+f]=d[f];let h=i.c.slice(o*6,o*6+3);i.p.push(...d,...c),i.c.push(...h,...h),i.f.push(n,n)}}var ft=Math.PI/180;function We(i,e){let t=new J(i).multiplyScalar(e);return t.r=Math.min(1,t.r),t.g=Math.min(1,t.g),t.b=Math.min(1,t.b),t}function Kw(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e}function gn(i,e=[]){let t=i.map(([n,r])=>new Ee(n,r));return jo.triangulateShape(t,e.map(n=>n.map(([r,o])=>new Ee(r,o))))}function Cm(i,e,t,n,r,o,s){let a=new J(s),l=f=>.5+.5*Math.min(1,Math.max(0,f/1.6));for(let f=0;f<4;f++){let p=e[f],_=e[(f+1)%4],m=t[f],g=t[(f+1)%4],w=_[0]-p[0],x=_[1]-p[1],b=Math.hypot(w,x);if(b<1e-6)continue;let M=.8+.28*((x/b*yc[0]-w/b*yc[1]+1)/2),E=(m[0]+g[0]-p[0]-_[0])/2*(-x/b)+(m[1]+g[1]-p[1]-_[1])/2*(w/b),v=Math.max(0,Math.min(1,E/Math.max(1e-6,Math.hypot(E,r-n)))),S=We(o,l(n)*M).lerp(a,v),T=We(o,l(r)*M).lerp(a,v);i.tri([p[0],n,p[1]],[m[0],r,m[1]],[g[0],r,g[1]],S,T,T),i.tri([p[0],n,p[1]],[g[0],r,g[1]],[_[0],n,_[1]],S,T,S)}let[c,u,d,h]=t;Math.hypot(d[0]-c[0],d[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[d[0],r,d[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[h[0],r,h[1]],[d[0],r,d[1]],a))}function Im(i,e,t,n,r,o,s,a,l,c){let u=new J(l),d=[];for(let f=0;f<c;f++){let p=f/c*Math.PI*2;d.push({y:o+Math.cos(p)*s,s:r+Math.sin(p)*s})}let h=(f,p)=>{let _=e(f,d[p%c].s);return[_[0],d[p%c].y,_[1]]};for(let f=0;f<c;f++){let p=(f+.5)/c*Math.PI*2,_=We(a,.62+.4*Math.max(0,Math.cos(p)));i.tri(h(t,f),h(n,f+1),h(n,f),_),i.tri(h(t,f),h(t,f+1),h(n,f+1),_)}for(let f of[t,n]){let p=e(f,r),_=[p[0],o,p[1]];for(let m=0;m<c;m++)i.tri(_,h(f,m),h(f,m+1),u)}}function St(i,e,t,n,r,o,s={}){let a=typeof n=="number"?()=>n:p=>Math.max(t+.002,n(p[0],p[1])),l=s.aoFrom??t,c=s.fold??Ze,u=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),d=(s.holes??[]).map(p=>Kw(p)>0?[...p].reverse():p),h=d.length?[...e,...d.flat()]:e,f=s.topFace===!1&&!s.bottom?[]:gn(e,d);if(s.topFace!==!1){let p=new J(o);for(let[_,m,g]of f){let w=h[_],x=h[m],b=h[g];i.tri([w[0],a(w),w[1]],[b[0],a(b),b[1]],[x[0],a(x),x[1]],p,p,p,void 0,s.topFold??c)}}if(s.bottom){let p=We(r,.55);for(let[_,m,g]of f){let w=h[_],x=h[m],b=h[g];i.tri([w[0],t,w[1]],[x[0],t,x[1]],[b[0],t,b[1]],p,p,p,void 0,c)}}for(let p of[e,...d])for(let _=0;_<p.length;_++){let m=p[_],g=p[(_+1)%p.length],w=g[0]-m[0],x=g[1]-m[1],b=Math.hypot(w,x);if(b<1e-6||s.skipSide?.(m,g))continue;let M=.8+.28*((x/b*yc[0]-w/b*yc[1]+1)/2),E=a(m),v=a(g),S=We(r,u(t)*M),T=We(r,u(E)*M),P=We(r,u(v)*M);i.tri([m[0],t,m[1]],[m[0],E,m[1]],[g[0],v,g[1]],S,T,P,void 0,c),i.tri([m[0],t,m[1]],[g[0],v,g[1]],[g[0],t,g[1]],S,P,S,void 0,c)}}var Yw={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},gravel_bed:{color:2632501,side:1645605,edge:9676478,edgeAlpha:.3},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function qw(i,e,t){let n=[(e[0]+t[0])/2,(e[1]+t[1])/2],r=t[0]-e[0],o=t[1]-e[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let u=a.points[(c+1)%a.points.length],d=u[0]-l[0],h=u[1]-l[1],f=Math.hypot(d,h)||1;if(Math.abs((r*h-o*d)/(s*f))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*d+(n[1]-l[1])*h)/(f*f)));return Math.hypot(l[0]+d*p-n[0],l[1]+h*p-n[1])<.4}))}function Fm(i,e){return e.type==="pool"?mc(i,e):Ms(i,e)+(Wi(e.type)?.01:dc[e.type])}function Fs(i){return Mn(i)>=0?i:[...i].reverse()}function Zw(i,e){let t=i[e];if(Wi(t.type)||t.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===e||!(o.cut&&r>e||o.type==="pool")||o.points.length<3||o.points.every(s=>Be(s,t.points))&&n.push(Fs(o.points))}return n}function Lm(i,e,t,n,r,o,s,a,l=0){let c=t[0]-e[0],u=t[1]-e[1],d=Math.hypot(c,u);if(d<1e-6)return;let h=-u/d*n*.5,f=c/d*n*.5;if(Math.abs(l)<1e-4){St(i,Fs([[e[0]+h,e[1]+f],[t[0]+h,t[1]+f],[t[0]-h,t[1]-f],[e[0]-h,e[1]-f]]),r,o,s,a,{aoFrom:r-1});return}let p=(b,y)=>[e[0]+h*y,b,e[1]+f*y],_=(b,y)=>[t[0]+h*y,b+l,t[1]+f*y],m=(b,y)=>{i.tri(b[0],b[1],b[2],y,y,y,void 0,Ze),i.tri(b[0],b[2],b[3],y,y,y,void 0,Ze),i.tri(b[0],b[2],b[1],y,y,y,void 0,Ze),i.tri(b[0],b[3],b[2],y,y,y,void 0,Ze)},g=new J(a),w=new J(We(s,.9)),x=new J(We(s,.6));m([p(o,1),_(o,1),_(o,-1),p(o,-1)],g),m([p(r,1),_(r,1),_(r,-1),p(r,-1)],x),m([p(r,1),_(r,1),_(o,1),p(o,1)],w),m([p(r,-1),_(r,-1),_(o,-1),p(o,-1)],w),m([p(r,1),p(r,-1),p(o,-1),p(o,1)],w),m([_(r,1),_(r,-1),_(o,-1),_(o,1)],w)}function Dm(i,e,t,n){let r=t.outdoor??[];r.forEach((o,s)=>{if(o.points.length<3)return;let a=Ms(t,o),l=(w,x)=>a-Ss(t,o,w,x),c=a-(o.type==="pool"?0:o.slope??0),u=Wi(o.type)&&o.height?o.height:dc[o.type],d={...Yw[o.type],top:u},h=Fs(o.points),f=We(d.edge,d.edgeAlpha),p=o.open&&(o.type==="fence"||o.type==="pergola")?h.length-1:-1,_=w=>{if(o.outline!==!1)for(let x=0;x<h.length;x++){if(x===p)continue;let b=h[x],y=h[(x+1)%h.length];e.seg([b[0],w(b[0],b[1]),b[1]],[y[0],w(y[0],y[1]),y[1]],f,Ze)}},m=n??i,g=new J(n?1734832:d.color);switch(o.type){case"pool":{let w=new J(d.side),x=new J(We(d.side,.55)),b=new J(932440),y=mc(t,o),M=pc(t,o),E=tm(t,o);for(let[v,S,T]of gn(h)){let P=h[v],k=h[S],R=h[T];(n?m:i).tri([P[0],y,P[1]],[R[0],y,R[1]],[k[0],y,k[1]],g,g,g,void 0,Ze),i.tri([P[0],E,P[1]],[R[0],E,R[1]],[k[0],E,k[1]],b,b,b,void 0,Ze)}for(let v=0;v<h.length;v++){let S=h[v],T=h[(v+1)%h.length];i.tri([T[0],E,T[1]],[T[0],M,T[1]],[S[0],M,S[1]],x,w,w,void 0,Ze),i.tri([T[0],E,T[1]],[S[0],M,S[1]],[S[0],E,S[1]],x,w,x,void 0,Ze)}if(!o.above&&Fh(t,o)){let v=new J(660258),S=new J(396054),T=E-.2,P=Math.min(a,M);for(let k=0;k<h.length;k++){let R=h[k],A=h[(k+1)%h.length];i.tri([R[0],T,R[1]],[R[0],P,R[1]],[A[0],P,A[1]],S,v,v,void 0,Ze),i.tri([R[0],T,R[1]],[A[0],P,A[1]],[A[0],T,A[1]],S,v,S,void 0,Ze)}for(let[k,R,A]of gn(h)){let I=h[k],L=h[R],z=h[A];i.tri([I[0],T,I[1]],[L[0],T,L[1]],[z[0],T,z[1]],S,S,S,void 0,Ze)}if(o.outline!==!1)for(let k=0;k<h.length;k++){let R=h[k],A=h[(k+1)%h.length];e.seg([R[0],T,R[1]],[A[0],T,A[1]],We(d.edge,d.edgeAlpha*.35),Ze),e.seg([R[0],T,R[1]],[R[0],P,R[1]],We(d.edge,d.edgeAlpha*.25),Ze)}}if(M>a+.02){let v=new J(2044240),S=new J(1187123);for(let T=0;T<h.length;T++){let P=h[T],k=h[(T+1)%h.length];i.tri([P[0],a,P[1]],[P[0],M,P[1]],[k[0],M,k[1]],S,v,v,void 0,Ze),i.tri([P[0],a,P[1]],[k[0],M,k[1]],[k[0],a,k[1]],S,v,S,void 0,Ze)}_(()=>a+.005)}if(_(()=>M),_(()=>y+.005),o.outline!==!1)for(let v=0;v<h.length;v++){let S=h[v],T=h[(v+1)%h.length];e.seg([S[0],E+.005,S[1]],[T[0],E+.005,T[1]],We(d.edge,d.edgeAlpha*.4),Ze)}break}case"fence":{for(let w=0;w<h.length;w++){if(w===p)continue;let x=h[w],b=h[(w+1)%h.length],y=Math.hypot(b[0]-x[0],b[1]-x[1]),M=Math.max(1,Math.round(y/2)),E=p>=0&&w===p-1?M:M-1;for(let v=0;v<=E;v++){let S=v/M,T=x[0]+(b[0]-x[0])*S,P=x[1]+(b[1]-x[1])*S,k=l(T,P);St(i,Fs([[T-.04,P-.04],[T+.04,P-.04],[T+.04,P+.04],[T-.04,P+.04]]),k,k+d.top,d.side,d.color)}for(let v of[.35,.85])e.seg([x[0],l(x[0],x[1])+v*d.top,x[1]],[b[0],l(b[0],b[1])+v*d.top,b[1]],f,Ze)}break}case"pergola":{let w=d.top;for(let[x,b]of h){let y=l(x,b);St(i,Fs([[x-.06,b-.06],[x+.06,b-.06],[x+.06,b+.06],[x-.06,b+.06]]),y,y+w,d.side,d.color)}for(let x=0;x<h.length;x++){if(x===p)continue;let b=h[x],y=h[(x+1)%h.length],M=l(b[0],b[1])+w;if(Lm(i,b,y,.12,M-.16,M,d.side,d.color,l(y[0],y[1])-l(b[0],b[1])),o.bracing){let E=l(b[0],b[1]),v=l(y[0],y[1]);e.seg([b[0],E+.25,b[1]],[y[0],v+w-.25,y[1]],f,Ze),e.seg([y[0],v+.25,y[1]],[b[0],E+w-.25,b[1]],f,Ze)}}if(um(h)){let x=hm(h),b=x.x1-x.x0,y=x.z1-x.z0,M=b>=y,E=M?b:y,v=Math.max(1,Math.round(E/.6));for(let S=1;S<v;S++){let T=(M?x.x0:x.z0)+E*S/v,P=M?[T,x.z0+.06]:[x.x0+.06,T],k=M?[T,x.z1-.06]:[x.x1-.06,T],R=l(P[0],P[1])+w;Lm(i,P,k,.06,R-.04,R+.08,d.side,d.color,l(k[0],k[1])-l(P[0],P[1]))}}_((x,b)=>l(x,b)+w+.004);break}case"balcony":{St(i,h,a-.18,a+d.top,d.side,d.color,{aoFrom:a-.18}),_(()=>a+d.top+.004);let x=o.height&&o.height>.3?o.height:1,b=We(9417983,.42),y=We(3662079,.55);for(let M=0;M<h.length;M++){let E=h[M],v=h[(M+1)%h.length];if(qw(t,E,v))continue;let S=Math.hypot(v[0]-E[0],v[1]-E[1]),T=a+d.top;e.seg([E[0],T+x,E[1]],[v[0],T+x,v[1]],y,Ze),e.seg([E[0],T+.1,E[1]],[v[0],T+.1,v[1]],b,Ze);let P=Math.max(1,Math.round(S/.12));for(let k=0;k<=P;k++){let R=k/P,A=E[0]+(v[0]-E[0])*R,I=E[1]+(v[1]-E[1])*R;e.seg([A,T,I],[A,T+x,I],k===0||k===P?y:b,Ze)}}break}default:{let w=(b,y)=>l(b,y)+d.top,x=Zw(r,s);if(St(i,h,c,o.slope?w:a+d.top,d.side,d.color,{aoFrom:c,holes:x}),o.type==="gravel_bed"){let b=h.map(R=>R[0]),y=h.map(R=>R[1]),M=Math.min(...b),E=Math.min(...y),v=Math.max(...b)-M,S=Math.max(...y)-E,T=[...o.id].reduce((R,A)=>(Math.imul(R,33)^A.charCodeAt(0))>>>0,5381),P=()=>(T=Math.imul(T,1664525)+1013904223>>>0,T/4294967296),k=Math.min(512,Math.ceil(gi(h)/.012));for(let R=0;R<k;R++){let A=M+P()*v,I=E+P()*S,L=.012+P()*.016,z=[[A-L,I],[A+L*.7,I-L*.8],[A+L*.4,I+L]];if(!z.every(O=>Be(O,h)&&!x.some(U=>Be(O,U))))continue;let B=z.map(([O,U])=>[O,w(O,U)+.003,U]),N=We(P()<.5?5593185:3422016,.75+P()*.3);i.tri(B[0],B[2],B[1],N,N,N,void 0,Ze)}}if(_((b,y)=>w(b,y)+.004),o.type==="hedge"&&_((b,y)=>l(b,y)+.004),o.outline!==!1)for(let b of x)for(let y=0;y<b.length;y++){let M=b[y],E=b[(y+1)%b.length];e.seg([M[0],w(M[0],M[1])+.004,M[1]],[E[0],w(E[0],E[1])+.004,E[1]],f,Ze)}}}})}var Ds=.012,$w=.012;function zm(i,e,t,n,r,o=[],s,a){let l=[],c=[],u=[],d=[],h=(x,b,y,M,E,v,S)=>{for(let T of[x,b,y,x,y,M])l.push(T[0],T[1],T[2]),c.push(E[0],E[1],E[2]),u.push(v),d.push(S)},f=i.openings.map(x=>Is(i,x,e)).filter(x=>!!x);i.rooms.forEach((x,b)=>{if(x.points.length<3)return;let y=xc(i,x,f),M=x.points.map(A=>A[0]),E=x.points.map(A=>A[1]),v=Math.min(...M),S=Math.min(...E),T=Math.max(...M),P=Math.max(...E),k=Math.max(1,Math.ceil((T-v)/r)),R=Math.max(1,Math.ceil((P-S)/r));for(let A=0;A<k;A++)for(let I=0;I<R;I++){let L=v+(A+.5)*r,z=S+(I+.5)*r;if(!Be([L,z],x.points)||o.some(q=>Be([L,z],q))&&!y.some(q=>Be([L,z],q)))continue;let B=v+A*r,N=S+I*r,O=Math.min(B+r,T),U=Math.min(N+r,P);if(a){let q=[[B,N],[O,N],[O,U],[B,U]];if(q.every(([he,ie])=>Be([he+(L-he)*1e-6,ie+(z-ie)*1e-6],x.points))){let he=q.map(([ie,se])=>a(ie,se));if(he.every(ie=>ie!=null)){let ie=(he[1]+he[2]-he[0]-he[3])/(2*(O-B)),se=(he[2]+he[3]-he[0]-he[1])/(2*(U-N)),H=Math.hypot(ie,1,se),Y=[ie/H,-1/H,se/H],le=q.map(([de,j],ce)=>[de,he[ce]-Ds,j]);h(le[0],le[1],le[2],le[3],Y,b,-1)}}}let Z=pt(i,x)+Ds;if(!y.length)h([B,Z,N],[B,Z,U],[O,Z,U],[O,Z,N],[0,1,0],b,-1);else{let q=[[[B,N],[B,U],[O,U],[O,N]]];for(let he of y)q=q.flatMap(ie=>bo(ie,he));for(let he of q)for(let ie=1;ie+1<he.length;ie++)for(let se of[he[0],he[ie],he[ie+1]])l.push(se[0],Z,se[1]),c.push(0,1,0),u.push(b),d.push(-1)}}});let p=i.rooms.length,_=(i.outdoor??[]).filter(x=>x.points.length>=3&&!Wi(x.type));if(_.length){let x=_.flatMap(T=>T.points.map(P=>P[0])),b=_.flatMap(T=>T.points.map(P=>P[1])),y=Math.floor(Math.min(...x)/r)*r,M=Math.floor(Math.min(...b)/r)*r,E=Math.max(1,Math.ceil((Math.max(...x)-y)/r)),v=Math.max(1,Math.ceil((Math.max(...b)-M)/r)),S=(T,P,k)=>Fm(i,T)-Ss(i,T,P,k)+Ds;for(let T=0;T<E;T++)for(let P=0;P<v;P++){let k=y+T*r,R=M+P*r,A,I=[k+r/2,R+r/2];A=_.find(z=>z.type==="pool"&&Be(I,z.points));for(let z=_.length-1;z>=0&&!A;z--)Be(I,_[z].points)&&(A=_[z]);if(!A)continue;let L=(z,B)=>[z,S(A,z,B),B];h(L(k,R),L(k,R+r),L(k+r,R+r),L(k+r,R),[0,1,0],p,-1)}}let m=Math.min(i.cut_height,Wt(i)-i.elevation),g=[];e.forEach((x,b)=>{let y=un(i,x).top,M=x.b[0]-x.a[0],E=x.b[1]-x.a[1],v=Math.hypot(M,E);if(v<.05)return;let S=[M/v,E/v],T=[-S[1],S[0]],P=t[b],k=jw(x,S,v,n),R=(L,z)=>L?i.rooms.findIndex(B=>B.id===L):z?p:-1;g.push({a:x.a,b:x.b,h:y,ra:R(x.roomLeft,!1),rb:R(x.roomRight,x.exterior),gaps:k});let A=(L,z,B)=>[z,B,...L.filter(N=>N>z+.005&&N<B-.005)].sort((N,O)=>N-O).filter((N,O,U)=>O===0||N>U[O-1]+.005),I=A(k.flatMap(L=>[L.s0,L.s1]),0,v);for(let L of[1,-1]){let z=L>0?x.roomLeft:x.roomRight,B=z?i.rooms.findIndex(Y=>Y.id===z):x.exterior?p:-1;if(B<0)continue;let N=z?i.rooms[B]:null,O=N?pt(i,N):un(i,x).bottom,U=N?O+Math.min(Cn(i,N),x.height??1/0):y,Z=Math.min(m,U-.02),q=A([Z,(Z+U)/2,...k.flatMap(Y=>[Y.y0+.01,Y.y1-.01])],O+.02,U-.02),he=(L>0?x.left:x.right)+$w,ie=[T[0]*L,T[1]*L],se=(Y,le)=>[x.a[0]+S[0]*Y+ie[0]*he,le,x.a[1]+S[1]*Y+ie[1]*he],H=Y=>{let le=se(Y,0),de=s?.(le[0],le[2]);return de==null?1/0:de-.02};for(let Y=0;Y<I.length-1;Y++){let le=I[Y+1]-I[Y],de=Math.max(1,Math.ceil(le/r));for(let j=0;j<de;j++){let ce=I[Y]+le/de*j,De=I[Y]+le/de*(j+1),Ne=(ce+De)/2;for(let Pe=0;Pe<q.length-1;Pe++){let ke=q[Pe],Ve=q[Pe+1];if(Ve-ke<.01)continue;let at=(ke+Ve)/2;if(k.some(mt=>Ne>mt.s0&&Ne<mt.s1&&at>mt.y0&&at<mt.y1))continue;let wt=ke>=m-1e-6?P:wr+P,Bt=Math.min(Ve,H(ce)),nt=Math.min(Ve,H(De));Bt<=ke+.005&&nt<=ke+.005||h(se(ce,ke),se(De,ke),se(De,Math.max(ke,nt)),se(ce,Math.max(ke,Bt)),[ie[0],0,ie[1]],B,wt)}}}}});for(let x of i.openings){let b=Is(i,x,e),y=b?.stair;if(!b||!y)continue;let M=i.rooms.findIndex(v=>v.id===y.room.id),E=(v,S,T)=>[b.start[0]+b.axis[0]*v+y.toward[0]*S,T,b.start[1]+b.axis[1]*v+y.toward[1]*S];for(let v=0;v<y.count;v++){let S=y.face+y.depth*v/y.count,T=y.face+y.depth*(v+1)/y.count,P=(y.recess?b.low+(b.high-b.low)*(v+1)/y.count:b.high-(b.high-b.low)*v/y.count)+Ds;h(E(0,S,P),E(b.width,S,P),E(b.width,T,P),E(0,T,P),[0,1,0],M,-1)}if(y.offset>0){let v=b.threshold+Ds;h(E(0,y.wallFace,v),E(b.width,y.wallFace,v),E(b.width,y.face,v),E(0,y.face,v),[0,1,0],M,-1)}}let w=[];for(let x of n){if(x.opening.type!=="door")continue;let b=e.find(E=>Bm(E,x)&&Jw(E,x));if(!b||!b.roomLeft||!b.roomRight)continue;let y=i.rooms.findIndex(E=>E.id===b.roomLeft),M=i.rooms.findIndex(E=>E.id===b.roomRight);y<0||M<0||w.push({id:x.opening.id,a:y,b:M,x:x.start[0]+x.axis[0]*(x.width/2),y:Math.min(1.1,x.top*.55),z:x.start[1]+x.axis[1]*(x.width/2)})}return{pos:new Float32Array(l),normal:new Float32Array(c),room:Int16Array.from(u),fold:new Float32Array(d),doors:w,blockers:g}}function Bm(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(t,n)||1;return Math.abs((e.start[0]-i.a[0])*n-(e.start[1]-i.a[1])*t)/r<.02&&Math.abs((e.axis[0]*t+e.axis[1]*n)/r)>.99}function Jw(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(t,n)||1,o=e.start[0]+e.axis[0]*(e.width/2),s=e.start[1]+e.axis[1]*(e.width/2),a=((o-i.a[0])*t+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}function jw(i,e,t,n){let r=[];for(let o of n){if(!Bm(i,o))continue;let s=(o.start[0]-i.a[0])*e[0]+(o.start[1]-i.a[1])*e[1],l=o.axis[0]*e[0]+o.axis[1]*e[1]>0?s:s-o.width;l>t||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function Qw(i,e){let t=Math.max(0,-e),n=Math.max(0,e);switch(i){case"ceiling":return .3+.7*t;case"spot":return .06+.94*t**5;case"pendant":return .25+.85*t**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(e);default:return 1}}function e1(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Nm(i,e,t,n,r,o,s){let a=e-i.x,l=t-i.y,c=n-i.z,u=a*a+l*l+c*c,d=Math.sqrt(u)||1e-6,h=e1(i),f=1/(1+u/(h*h)),p=f*Math.sqrt(f),_=Math.max(0,-(a*r+l*o+c*s)/d);if(i.direction){let m=(a*i.direction[0]+l*i.direction[1]+c*i.direction[2])/d,g=Math.cos((i.angle??60)*Math.PI/360),w=Math.cos((i.angle??60)*.8*Math.PI/360),x=Math.max(0,Math.min(1,(m-g)/(w-g)));return i.level*p*(.2+.8*_)*x*x*(3-2*x)}return i.level*p*(.2+.8*_)*Qw(i.kind,l/d)}function Om(i,e,t=.7,n=[]){let r=[...e];i.doors.forEach((u,d)=>{let h=n[d]??.5;if(!(h<=.01))for(let[f,p]of[[u.a,u.b],[u.b,u.a]]){let _=[0,0,0];for(let g of e){if(g.room!==f)continue;let w=g.x-u.x,x=g.y-u.y,b=g.z-u.z,y=Math.hypot(w,x,b)||1,M=Nm(g,u.x,u.y,u.z,w/y,x/y,b/y);_[0]+=g.color[0]*M,_[1]+=g.color[1]*M,_[2]+=g.color[2]*M}let m=Math.max(_[0],_[1],_[2]);m<.01||r.push({x:u.x,y:u.y,z:u.z,color:[_[0]/m,_[1]/m,_[2]/m],level:Math.min(1,m*.9*(.35+.65*h)),kind:"wall",room:p})}});let o=new Map;for(let u of r){let d=i.blockers.filter(f=>f.ra===u.room||f.rb===u.room),h={...u,color:u.color.map(f=>Math.pow(f,1.5)),walls:d};o.set(u.room,[...o.get(u.room)??[],h])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let u=0;u<l.length;u++){let d=o.get(l[u]);if(!d)continue;let h=u*3,f=0,p=0,_=0;for(let m of d){if(m.walls.length&&Vh(m,m.walls,s[h],s[h+1],s[h+2]))continue;let g=Nm(m,s[h],s[h+1],s[h+2],a[h],a[h+1],a[h+2]);f+=m.color[0]*g,p+=m.color[1]*g,_+=m.color[2]*g}c[h]=1-Math.exp(-f*t*1.6),c[h+1]=1-Math.exp(-p*t*1.6),c[h+2]=1-Math.exp(-_*t*1.6)}return c}function Vh(i,e,t,n,r){let o=t-i.x,s=r-i.z;for(let a of e){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=o*c-s*l;if(Math.abs(u)<1e-9)continue;let d=a.a[0]-i.x,h=a.a[1]-i.z,f=(d*c-h*l)/u;if(f<=1e-6||f>=1-1e-6)continue;let p=(d*s-h*o)/u;if(p<0||p>1)continue;let _=i.y+(n-i.y)*f;if(_>=a.h||_<(a.bottom??0))continue;let m=p*Math.hypot(l,c);if(!a.gaps.some(g=>m>g.s0&&m<g.s1&&_>g.y0&&_<g.y1))return!0}return!1}function Gh(i,e,t){let n=i.rooms.findIndex(r=>r.points.length>=3&&Be([e,t],r.points));return n<0?i.rooms.length:n}function xo(i,e){return i&&e>=0&&e<i.length?i[e]:e}function t1(i){let e=[...i].sort((n,r)=>n[0]-r[0]||n[1]-r[1]),t=n=>{let r=[];for(let o of n){for(;r.length>1;){let s=r[r.length-2],a=r[r.length-1];if((a[0]-s[0])*(o[1]-s[1])-(a[1]-s[1])*(o[0]-s[0])>1e-9)break;r.pop()}r.push(o)}return r.slice(0,-1)};return[...t(e),...t([...e].reverse())]}function Um(i,e,t,n,r,o){let s=t.map(l=>{let c=Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1])||1,u=(l.b[0]-l.a[0])/c,d=(l.b[1]-l.a[1])/c,h=n.filter(f=>Math.abs((f.start[0]-l.a[0])*d-(f.start[1]-l.a[1])*u)<.01).map(f=>{let p=(f.start[0]-l.a[0])*u+(f.start[1]-l.a[1])*d;return{s0:p,s1:p+f.width,y0:f.sill,y1:f.top}});return{a:l.a,b:l.b,h:un(e,l).top,bottom:un(e,l).bottom,ra:0,rb:0,gaps:h}}),a=e.rooms.map(l=>({origin:new V(0,pt(e,l),0),u:new V(1,0,0),v:new V(0,0,1),normal:new V(0,1,0),polygon:l.points,holes:r,room:l.id}));for(let l of t){let c=l.b[0]-l.a[0],u=l.b[1]-l.a[1],d=Math.hypot(c,u);if(d<.01)continue;let h=new V(c/d,0,u/d),f=un(e,l);for(let[p,_,m]of[[l.roomLeft,l.left,1],[l.roomRight,l.right,-1]]){if(!p)continue;let g=new V(-h.z*m,0,h.x*m),w=new V(l.a[0],f.bottom,l.a[1]).addScaledVector(g,_+.003),x=[];for(let b of n){let y=new V(b.start[0]-l.a[0],0,b.start[1]-l.a[1]);if(Math.abs(y.x*h.z-y.z*h.x)>.01)continue;let M=y.dot(h);M+b.width<0||M>d||x.push([[M,b.sill-f.bottom],[M+b.width,b.sill-f.bottom],[M+b.width,b.top-f.bottom],[M,b.top-f.bottom]])}a.push({origin:w,u:h,v:new V(0,1,0),normal:g,polygon:[[0,0],[d,0],[d,f.top-f.bottom],[0,f.top-f.bottom]],holes:x,room:p,fold:o[t.indexOf(l)]})}}for(let l of e.furniture.filter(c=>c.rotation_x||c.rotation_z)){let c=Ct(e,l),u=lc(l,c).map(f=>new V(...f)),d=Ts(e,l.x,l.z)?.id,h=[...a];for(let f of e.furniture){if(f===l||!(Dh.has(f.type)||_t(f.type)?.surface)||Ts(e,f.x,f.z)?.id!==d)continue;let p=lc(f,Ct(e,f)).slice(4).map(b=>new V(...b)),_=p[1].clone().sub(p[0]).normalize(),m=p[3].clone().sub(p[0]).normalize(),g=new V().crossVectors(m,_).normalize();g.y<0&&g.negate();let w=p[0].distanceTo(p[1]),x=p[0].distanceTo(p[3]);h.push({origin:p[0],u:_,v:m,normal:g,polygon:[[0,0],[w,0],[w,x],[0,x]],holes:[],room:d,fold:Ls})}for(let f of h){if(f.room!==d)continue;let p=u.map(T=>T.clone().sub(f.origin).dot(f.normal));if(Math.max(...p)<-.01)continue;let _=Math.max(0,Math.min(...p));if(_>.35)continue;let m=t1(u.map(T=>{let P=T.clone().sub(f.origin);return[P.dot(f.u),P.dot(f.v)]}));if(m.length<3)continue;let g=m.reduce((T,P)=>T+P[0],0)/m.length,w=m.reduce((T,P)=>T+P[1],0)/m.length,x=.055+_*.15,b=m.map(([T,P])=>{let k=Math.hypot(T-g,P-w)||1;return[T+(T-g)*x/k,P+(P-w)*x/k]}),y=new J(1-.45*Math.exp(-_*8),1-.45*Math.exp(-_*8),1-.45*Math.exp(-_*8)),M=new J(1,1,1),E=gn(f.polygon).map(([T,P,k])=>[f.polygon[T],f.polygon[P],f.polygon[k]]),v=i.count,S=(T,P)=>{for(let k of E){let R=[vo(T,k)];for(let A of f.holes)for(let[I,L,z]of gn(A))R=R.flatMap(B=>bo(B,[A[I],A[L],A[z]]));for(let A of R)for(let I=1;I+1<A.length;I++){let L=[A[0],A[I],A[I+1]],z=U=>f.origin.clone().addScaledVector(f.u,U[0]).addScaledVector(f.v,U[1]).addScaledVector(f.normal,.003).toArray(),B=z([(L[0][0]+L[1][0]+L[2][0])/3,(L[0][1]+L[1][1]+L[2][1])/3]);if(Vh({x:l.x,y:c+l.h/2,z:l.z},s,B[0],B[1],B[2]))continue;let N=(T[1][1]-T[2][1])*(T[0][0]-T[2][0])+(T[2][0]-T[1][0])*(T[0][1]-T[2][1]),O=U=>{let Z=((T[1][1]-T[2][1])*(U[0]-T[2][0])+(T[2][0]-T[1][0])*(U[1]-T[2][1]))/N,q=((T[2][1]-T[0][1])*(U[0]-T[2][0])+(T[0][0]-T[2][0])*(U[1]-T[2][1]))/N;return new J(P[0].r*Z+P[1].r*q+P[2].r*(1-Z-q),P[0].g*Z+P[1].g*q+P[2].g*(1-Z-q),P[0].b*Z+P[1].b*q+P[2].b*(1-Z-q))};Math.abs(N)>1e-10&&i.tri(z(L[0]),z(L[1]),z(L[2]),O(L[0]),O(L[1]),O(L[2]))}}};for(let[T,P,k]of gn(m))S([m[T],m[P],m[k]],[y,y,y]);for(let T=0;T<m.length;T++){let P=(T+1)%m.length;S([m[T],b[T],b[P]],[y,M,M]),S([m[T],b[P],m[P]],[y,M,y])}f.fold!==void 0&&Sc(i,v,e.cut_height,f.fold)}}}var Kn=1e-4;function Hh(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e/2}function Vm(i,e,t,n){let r=[e[0]-i[0],e[1]-i[1]],o=[n[0]-t[0],n[1]-t[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((t[0]-i[0])*o[1]-(t[1]-i[1])*o[0])/s,l=((t[0]-i[0])*r[1]-(t[1]-i[1])*r[0])/s;return a>Kn&&a<1-Kn&&l>-Kn&&l<1+Kn?a:null}function Wh(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-e[0])*n+(i[1]-e[1])*r)/o;return s<=Kn||s>=1-Kn?null:Math.abs((i[0]-e[0])*r-(i[1]-e[1])*n)/Math.sqrt(o)<Kn?s:null}function n1(i,e){for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];for(let o=0;o<e.length;o++){let s=e[o],a=e[(o+1)%e.length];if(Vm(n,r,s,a)!==null||Wh(s,n,r)!==null||Wh(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<Kn)return!0}}return Be(i[0],e)||Be(e[0],i)}function i1(i){let e=i.map(o=>Hh(o)>=0?o:[...o].reverse()),t=[];e.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],u=[0,1];e.forEach((d,h)=>{if(h!==s)for(let f=0;f<d.length;f++){let p=d[f],_=d[(f+1)%d.length],m=Vm(l,c,p,_)??Wh(p,l,c);m!==null&&u.push(m)}}),u.sort((d,h)=>d-h);for(let d=1;d<u.length;d++){if(u[d]-u[d-1]<Kn)continue;let h=[l[0]+(c[0]-l[0])*u[d-1],l[1]+(c[1]-l[1])*u[d-1]],f=[l[0]+(c[0]-l[0])*u[d],l[1]+(c[1]-l[1])*u[d]],p=Math.hypot(f[0]-h[0],f[1]-h[1]),_=[(h[0]+f[0])/2+(f[1]-h[1])/p*.001,(h[1]+f[1])/2-(f[0]-h[0])/p*.001];e.some((m,g)=>g!==s&&Be(_,m))||t.some(([m,g])=>Math.hypot(m[0]-h[0],m[1]-h[1])<Kn&&Math.hypot(g[0]-f[0],g[1]-f[1])<Kn)||t.push([h,f])}}});let n=[],r=new Set;for(let o=0;o<t.length;o++){if(r.has(o))continue;r.add(o);let s=[t[o][0]],a=t[o][1];for(let l=0;l<t.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=t.findIndex(([u],d)=>!r.has(d)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(t[c][0]),a=t[c][1]}s.length>=3&&Hh(s)>1e-6&&n.push(s)}return n}function Xh(i){let e=i.filter(o=>o.length>=3),t=e.map((o,s)=>s),n=o=>t[o]===o?o:t[o]=n(t[o]);for(let o=0;o<e.length;o++)for(let s=o+1;s<e.length;s++)n(o)!==n(s)&&n1(e[o],e[s])&&(t[n(s)]=n(o));let r=new Map;return e.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:i1(o))}function r1(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-e[0])*n+(i[1]-e[1])*r)/o)):0;return Math.hypot(i[0]-e[0]-n*s,i[1]-e[1]-r*s)}function Gm(i,e,t=.03){return i.every(n=>Be(n,e)||e.some((r,o)=>r1(n,r,e[(o+1)%e.length])<=t))}function Kh(i,e){let t=Hh(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return t.map((r,o)=>{let s=n(t[(o-1+t.length)%t.length],r),a=n(r,t[(o+1)%t.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*e,r[1]+(s[1]+a[1])/l*e]})}var Hm=!1;function Wm(i){Hm=i}function Xm(i,e,t,n,r=Hm){let o=r||i.detail==="low"?12:i.detail==="high"?40:24,s=i.w*e,a=i.d*t,l=i.h*n,c;if(i.shape==="cyl"&&i.detail){let u=i.axis??"y",d=u==="x"?s:u==="z"?a:l,h=(u==="x"?Math.min(a,l):u==="z"?Math.min(s,l):Math.min(s,a))/2;c=new Ko(h,h,d,r?32:i.detail==="high"?64:40),u==="x"?c.rotateZ(-Math.PI/2):u==="z"&&c.rotateX(Math.PI/2),c.translate(0,l/2,0)}else if(i.shape==="polygon"){let u=i.axis??"y",d=u==="x"?a:s,h=u==="y"?a:l,f=u==="y"?l:u==="x"?s:a,p=i.points??[],m=p.reduce((w,x,b)=>{let y=p[(b+1)%p.length];return w+x[0]*y[1]-y[0]*x[1]},0)<0?p.toReversed():p,g=[];for(let[w,x,b]of gn(m)){for(let y of[w,x,b])g.push(m[y][0],0,m[y][1]);for(let y of[w,b,x])g.push(m[y][0],1,m[y][1])}for(let w=0;w<m.length;w++){let x=m[w],b=m[(w+1)%m.length];g.push(x[0],0,x[1],b[0],1,b[1],b[0],0,b[1],x[0],0,x[1],x[0],1,x[1],b[0],1,b[1])}for(let w=0;w<g.length;w+=3){let x=g[w]*d,b=g[w+1]*f,y=g[w+2]*h;u==="z"?(g[w]=x,g[w+1]=y+l/2,g[w+2]=a/2-b):u==="x"?(g[w]=b-s/2,g[w+1]=y+l/2,g[w+2]=x):(g[w]=x,g[w+1]=b,g[w+2]=y)}c=new Ke,c.setAttribute("position",new Te(g,3))}else if(i.shape==="sphere"||i.shape==="ellipsoid"){let u=r?32:i.detail==="high"?64:40;c=new ts(.5,u,u/2);let d=Math.min(s,a,l);c.scale(i.shape==="sphere"?d:s,i.shape==="sphere"?d:l,i.shape==="sphere"?d:a),c.translate(0,l/2,0)}else if(i.shape==="rounded_box"){let u=o===12?3:o===40?8:5,d=Math.min(i.radius??.08,.49);c=new Di(1,1,1,u,u,u);let h=c.getAttribute("position"),f=.5-d;for(let p=0;p<h.count;p++){let _=new V().fromBufferAttribute(h,p),m=_.clone().clampScalar(-f,f);_.sub(m).normalize().multiplyScalar(d).add(m),h.setXYZ(p,_.x,_.y,_.z)}c.scale(s,l,a),c.translate(0,l/2,0)}else if(i.shape==="torus"){let u=Math.min(.24,i.thickness??.06),d=r?32:i.detail==="high"?64:40;c=new ns(.5-u,u,Math.max(8,d/4),d),c.scale(s,l,a),c.translate(0,l/2,0)}else if(i.shape==="pipe"){let u=(i.path??[]).map(([x,b,y])=>new V(x*s,(b+.5)*l,y*a));if(u.length<2)return null;let d=new to(u,!1,"centripetal"),h=(i.radius??.1)*Math.min(s,a,l),f=new io(d,Math.min(256,o*(u.length-1)),h,Math.max(8,o/2),!1),p=new io(d,Math.min(256,o*(u.length-1)),Math.max(h*.05,h-(i.thickness??.025)*Math.min(s,a,l)),Math.max(8,o/2),!1),_=f.toNonIndexed(),m=p.toNonIndexed(),g=[..._.getAttribute("position").array],w=m.getAttribute("position").array;for(let x=0;x<w.length;x+=9)g.push(...w.slice(x,x+3),...w.slice(x+6,x+9),...w.slice(x+3,x+6));c=new Ke,c.setAttribute("position",new Te(g,3));for(let x of[f,p,_,m])x.dispose()}else if(i.shape==="bowl"){let u=Math.min(.2,i.thickness??.04);c=new Qo([new Ee(0,0),new Ee(.5,0),new Ee(.5,1),new Ee(.5-u,1),new Ee(.5-u,u),new Ee(0,u)],o),c.scale(s,l,a)}else return null;return c.translate(i.x*e,i.y*n,i.z*t),c.computeVertexNormals(),c}var D={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},pe=We(5995775,.3),Qe=We(5995775,.17),Je=We(3662079,.45),Mr=class i{buf;lines;tf;mirrored;constructor(e,t,n){this.buf=e,this.lines=t,this.tf=n,this.mirrored=Jm(n)}shape(e,t,n,r,o,s){let a=Xm(e,t,n,r);if(!a)return!1;let l=a.index?a.toNonIndexed():a,c=l.getAttribute("position"),u=l.getAttribute("normal"),d=new J(s),h=p=>{let[_,m]=this.tf(c.getX(p),c.getZ(p));return[_,o+c.getY(p),m]},f=p=>d.clone().multiplyScalar(.78+.2*Math.max(0,u.getY(p))+.14*(u.getX(p)*-.55+u.getZ(p)*.83));for(let p=0;p<c.count;p+=3){let _=p+(this.mirrored?2:1),m=p+(this.mirrored?1:2);this.buf.tri(h(p),h(_),h(m),f(p),f(_),f(m))}return l!==a&&l.dispose(),a.dispose(),!0}rotated(e,t,n){let r=n*ft,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(e+(l-e)*o-(c-t)*s,t+(l-e)*s+(c-t)*o))}box(e,t,n,r,o,s,a,l=a,c=null){if(t-e<1e-4||s-o<1e-4||r-n<1e-4)return;let u=[this.tf(e,o),this.tf(e,s),this.tf(t,s),this.tf(t,o)];St(this.buf,Yh(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(e,t,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])],c=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])];if(l!==Yh(l)&&(l.reverse(),c.reverse()),Cm(this.buf,l,c,n,r,o,s),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(e,t,n,r,o,s,a,l=a,c=.03,u=null){if(c=Math.min(c,(t-e)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(e,t,n,r,o,s,a,l,u);this.loft([e+c,t-c,o+c,s-c],[e,t,o,s],n,n+c,a),r-n-2*c>.005&&this.box(e,t,n+c,r-c,o,s,a,a,u),this.loft([e,t,o,s],[e+c,t-c,o+c,s-c],r-c,r,a,l)}lyingCyl(e,t,n,r,o,s,a,l,c=l,u=12,d=null){let h=Math.min(a,o-r)/2;if(h<1e-4||s<1e-4)return;let f=(r+o)/2,p=e==="x"?t:n,_=e==="x"?n:t,m=(w,x)=>e==="x"?this.tf(w,x):this.tf(x,w),g=this.buf.p.length;if(Im(this.buf,m,p-s/2,p+s/2,_,f,h,l,c,u),this.mirrored&&jh(this.buf,g),d)for(let w of[p-s/2,p+s/2])for(let x=0;x<u;x++){let b=x/u*Math.PI*2,y=(x+1)/u*Math.PI*2;this.line(m(w,_+Math.sin(b)*h),m(w,_+Math.sin(y)*h),f+Math.cos(b)*h,f+Math.cos(y)*h,d)}}cyl(e,t,n,r,o,s,a=s,l=10,c=null){let u=[];for(let d=0;d<l;d++){let h=d/l*Math.PI*2;u.push(this.tf(e+Math.cos(h)*n,t+Math.sin(h)*n))}if(St(this.buf,Yh(u),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let d=0;d<l;d++)this.line(u[d],u[(d+1)%l],o,o,c)}seg(e,t,n,r,o,s,a=pe){this.line(this.tf(e,n),this.tf(r,s),t,o,a)}line(e,t,n,r,o){this.lines.seg([e[0],n,e[1]],[t[0],r,t[1]],o,Ze)}outline(e,t,n,r){for(let o=0;o<4;o++){let s=e[o],a=e[(o+1)%4];this.line(s,a,n,n,r),this.line(s,s,t,n,r)}}};function Jm(i){let e=i(0,0),t=i(1,0),n=i(0,1);return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])<0}function Yh(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}function Sr(i,e,t,n,r,o,s=D.metal,a=!1){let l=e/2-o-r,c=t/2-o-r;for(let u of[-1,1])for(let d of[-1,1]){let h=u*l,f=d*c;a?i.loft([h-r*.3,h+r*.3,f-r*.3,f+r*.3],[h-r/2,h+r/2,f-r/2,f+r/2],0,n,s):i.box(h-r/2,h+r/2,0,n,f-r/2,f+r/2,s)}}function Ns(i,e,t,n,r,o,s,a=null,l=!1){let c=(t-e)/s;for(let u=1;u<s;u++){let d=e+c*u;i.seg(d,n,o,d,r,o,Qe)}for(let u=0;u<s;u++){let d=e+c*(u+.5),h=a??r-.08;if(l)i.seg(d-Math.min(.1,c/4),h,o+.012,d+Math.min(.1,c/4),h,o+.012,Je);else{let f=s>1?d+(u%2?-c/2+.06:c/2-.06):d+c/2-.06;i.seg(f,h-.08,o+.012,f,h+.08,o+.012,Je)}}}function Km(i,e,t,n,r){let o=-e/2,s=e/2,a=-t/2,l=t/2,c=Math.min(.2,e*.12),u=n*.5,d=Math.min(.24,t*.28);Sr(i,e,t,.07,.05,.05,D.wood,!0),i.pad(o,s,.07,u-.08,a+.02,l,D.fabric,D.fabricTop,.04,pe),i.loft([o,s,a,a+d],[o+.01,s-.01,a,a+d*.5],u-.08,n,D.fabric,D.fabricTop,pe),i.pad(o,o+c,u-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,pe),i.pad(s-c,s,u-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,pe);let f=(s-c-(o+c))/r;for(let p=0;p<r;p++){let _=o+c+f*p+.02,m=_+f-.04;i.pad(_,m,u-.08,u+.05,a+d+.02,l-.06,D.cushion,D.cushion,.04),i.loft([_+.01,m-.01,a+d*.55,a+d+.14],[_+.03,m-.03,a+d*.4,a+d*.4+.06],u+.03,n*.93,D.cushion)}}function Ym(i,e,t,n,r){let o=-e/2,s=e/2,a=-t/2,l=t/2,c=Math.max(.3,Math.min(.95,t*.5,e*(r?.34:.45))),u=Math.min(.24,c*.28),d=Math.min(.2,c*.24),h=n*.5,f=n*.72,p=r?[-1,1]:[-1],_=(v,S)=>i.loft([v-.015,v+.015,S-.015,S+.015],[v-.025,v+.025,S-.025,S+.025],0,.07,D.wood);_(o+.06,a+.06),_(s-.06,a+.06),r||_(s-.06,a+c-.06);for(let v of p)_(v*(e/2-.06),l-.06),_(v*(e/2-c+.06),l-.06);i.pad(o,s,.07,h-.08,a+.02,a+c,D.fabric,D.fabricTop,.04,pe);for(let v of p){let[S,T]=v<0?[o+.02,o+c]:[s-c,s-.02];i.pad(S,T,.07,h-.08,a+c-.02,l,D.fabric,D.fabricTop,.04,pe)}i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],h-.08,n,D.fabric,D.fabricTop,pe);for(let v of p)v<0?i.loft([o,o+u,a+u,l],[o,o+u*.5,a+u,l-.01],h-.08,n,D.fabric,D.fabricTop,pe):i.loft([s-u,s,a+u,l],[s-u*.5,s,a+u,l-.01],h-.08,n,D.fabric,D.fabricTop,pe);for(let v of p){let[S,T]=v<0?[o+u,o+c]:[s-c,s-u];i.pad(S,T,h-.08,f,l-d,l,D.fabric,D.fabricTop,.04,pe)}r||i.pad(s-d,s,h-.08,f,a+.02,a+c-.02,D.fabric,D.fabricTop,.04,pe);let m=o+u,g=r?s-u:s-d,w=Math.max(1,Math.round((g-m)/.62)),x=(g-m)/w;for(let v=0;v<w;v++){let S=m+x*v+.02,T=S+x-.04;i.pad(S,T,h-.08,h+.05,a+u+.02,a+c-.04,D.cushion,D.cushion,.04),i.loft([S+.01,T-.01,a+u*.55,a+u+.14],[S+.03,T-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,D.cushion)}let b=a+c,y=l-d;if(y-b<.2)return;let M=Math.max(1,Math.round((y-b)/.62)),E=(y-b)/M;for(let v of p)for(let S=0;S<M;S++){let T=b+E*S+.02,P=T+E-.04;v<0?(i.pad(o+u+.02,o+c-.04,h-.08,h+.05,T,P,D.cushion,D.cushion,.04),i.loft([o+u*.55,o+u+.14,T+.01,P-.01],[o+u*.4,o+u*.4+.06,T+.03,P-.03],h+.03,n*.93,D.cushion)):(i.pad(s-c+.04,s-u-.02,h-.08,h+.05,T,P,D.cushion,D.cushion,.04),i.loft([s-u-.14,s-u*.55,T+.01,P-.01],[s-u*.4-.06,s-u*.4,T+.03,P-.03],h+.03,n*.93,D.cushion))}}function o1(i,e,t,n){let r=-t/2,o=t/2,s=-e/2,a=e/2,l=Math.min(.32,n*.36);Sr(i,e,t,.08,.06,.03,D.wood,!0),i.box(s,a,.08,l,r+.06,o,D.wood,D.woodTop,pe),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,D.white,D.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,D.wood,D.woodTop,pe),i.box(s,a,n-.05,n,r,r+.09,D.wood,D.woodTop,Qe);let c=l+.2,u=r+(t-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,u,o-.01,D.cushion,D.fabricTop,.025,Qe),i.lyingCyl("x",0,u+.05,c-.02,c+.09,e-.02,.1,D.cushion,D.fabricTop,8);let d=e>1.2?2:1,h=(e-.2)/d;for(let f=0;f<d;f++){let p=s+.1+h*f,_=r+.12,m=Math.min(.42,t*.2),g=.1;i.loft([p+.03+g,p+h-.03-g,_+g*.5,_+m-g*.5],[p+.03,p+h-.03,_,_+m],c,c+.06,D.whiteTop),i.loft([p+.03,p+h-.03,_,_+m],[p+.03+g,p+h-.03-g,_+g*.5,_+m-g*.5],c+.06,c+.12,D.whiteTop,D.whiteTop,Qe)}}function s1(i,e,t,n){let r=Math.min(.46,n*.52);Sr(i,e,t,r-.04,.035,.02,D.wood,!0),i.box(-e/2,e/2,r-.04,r,-t/2,t/2,D.wood,D.woodTop,pe),i.pad(-e/2+.02,e/2-.02,r,r+.04,-t/2+.05,t/2-.03,D.cushion,D.cushion,.015),i.loft([-e/2,e/2,-t/2+.02,-t/2+.07],[-e/2+.02,e/2-.02,-t/2,-t/2+.03],r,n,D.wood,D.woodTop,pe)}function a1(i,e,t,n){Sr(i,e,t,n-.04,.06,.05,D.wood,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.wood,D.woodTop,Je),i.box(-e/2+.08,e/2-.08,n-.1,n-.04,-t/2+.08,t/2-.08,D.body)}function l1(i,e,t,n){let r=-e/2,o=e/2;i.box(r,o,n-.035,n,-t/2,t/2,D.wood,D.woodTop,pe),i.box(r,r+.03,0,n-.035,-t/2+.03,t/2-.03,D.metal);let s=Math.min(.42,e*.32);i.box(o-s,o,0,n-.035,-t/2+.03,t/2-.02,D.body,D.bodyTop,pe);let a=t/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,Qe);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,Je);i.box(-.3,.3,n+.08,n+.42,-t/2+.08,-t/2+.11,D.dark,D.dark,Je),i.box(-.03,.03,n,n+.1,-t/2+.09,-t/2+.13,D.metal)}function Ji(i,e,t,n,r,o=null,s=!1){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,D.body,D.bodyTop,pe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark),Ns(i,-e/2,e/2,.08,n,t/2-.02,r,o,s)}function c1(i,e,t,n){i.box(-e/2,-e/2+.025,0,n,-t/2,t/2,D.wood,D.woodTop,pe),i.box(e/2-.025,e/2,0,n,-t/2,t/2,D.wood,D.woodTop,pe),i.box(-e/2+.025,e/2-.025,0,n,-t/2,-t/2+.015,D.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-e/2+.025,e/2-.025,a,a+.025,-t/2+.015,t/2,D.wood,D.woodTop,Qe),s<o){let l=-e/2+.025+.04,c=s*3;for(;l<e/2-.025-.12;){let u=.03+c*7%5*.008,d=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+d,-t/2+.04,t/2-.05,c%3?D.fabric:D.cushion,D.fabricTop),l+=u+.006,c++}}}}function u1(i,e,t,n){let r=Math.max(1,Math.round(e/.6));Ji(i,e,t-.02,n-.04,r,n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,pe)}function h1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,D.white,D.whiteTop,pe);let r=n*.62;i.seg(-e/2,r,t/2,e/2,r,t/2,Qe);let o=e/2-.06;i.seg(o,r+.08,t/2+.015,o,r+.4,t/2+.015,Je),i.seg(o,r-.4,t/2+.015,o,r-.08,t/2+.015,Je)}function d1(i,e,t,n){let r=t/2-jm;i.box(-e/2,e/2,.02,n,-t/2,r,D.body,D.bodyTop,pe),i.box(-e/2+.05,e/2-.05,0,.02,-t/2+.05,r-.05,D.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-e/2+.03,o,r+.001,-.03,o,r+.001,Qe),i.seg(.03,o,r+.001,e/2-.03,o,r+.001,Qe))}var jm=.06;function Qm(i,e,t,n,r){let o=i.p.length;f1(i,e,t,n,r),e.mirror&&jh(i,o),kn(i.p,o,e,t+e.h/2)}function f1(i,e,t,n,r){let o=e.rotation*ft,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(b,y)=>[e.x+l*b*s-y*a,e.z+l*b*a+y*s],u=t+.05,d=t+e.h-.02,h=new J(.75,.1,.14),f=new J(D.dark),p=new J(D.accent),_=e.w/2-.006,m=(b,y,M)=>{let E=M/g,v=new J(2043212).lerp(h,E),S=new J(D.body).lerp(h,E*.8),T=Math.cos(M),P=Math.sin(M),k=(I,L)=>c(b+y*(I*T-L*P),e.d/2+I*P+L*T),R=(I,L,z,B)=>{let[N,O,U,Z]=I;i.tri([N[0],L,N[1]],[O[0],L,O[1]],[U[0],z,U[1]],B),i.tri([N[0],L,N[1]],[U[0],z,U[1]],[Z[0],z,Z[1]],B)},A=(I,L,z,B,N,O,U,Z=U)=>{let q=[k(I,O),k(L,O),k(L,N),k(I,N)];R([q[0],q[1],q[1],q[0]],z,B,Z),R([q[3],q[2],q[2],q[3]],z,B,U),R([q[0],q[3],q[3],q[0]],z,B,U),R([q[1],q[2],q[2],q[1]],z,B,U),R([q[0],q[1],q[2],q[3]],B,B,U),R([q[3],q[2],q[1],q[0]],z,z,U)};return A(0,_,u,d,-jm,0,S,v),A(_-.05,_-.03,t+e.h*.45,t+e.h*.75,.005,.025,p),A},g=1.83;m(-e.w/2,1,n*g)(.12,.3,t+e.h*.5,t+e.h*.68,.001,.005,f),m(e.w/2,-1,r*g)(.06,_-.06,t+e.h*.52,t+e.h*.86,.001,.005,f)}function p1(i,e,t,n){Ji(i,e,t-.02,n-.04,1,n-.24,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.dark,D.dark,pe);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*e/.6,l=o*t/.62;i.cyl(a,l,s,n,n+.004,D.dark,1451583,12,Je)}}function m1(i,e,t,n){Ji(i,e,t-.02,n-.04,Math.max(1,Math.round(e/.45)),n-.2);let r=Math.min(.5,e-.2);i.box(-e/2,-r/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,pe),i.box(r/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,pe),i.box(-r/2,r/2,n-.04,n,-t/2,-t/2+.1,D.whiteTop,D.whiteTop),i.box(-r/2,r/2,n-.04,n,t/2-.08,t/2,D.whiteTop,D.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-t/2+.1,t/2-.08,D.metal,D.metal,Je),i.cyl(0,-t/2+.05,.02,n,n+.28,D.metal,D.metal,8),i.box(-.015,.015,n+.24,n+.28,-t/2+.05,-t/2+.22,D.metal)}function g1(i,e,t,n){i.box(-e/2,e/2,0,n-.02,-t/2,t/2,D.white,D.whiteTop,pe),i.box(-e/2,e/2,n-.02,n,-t/2,-t/2+.07,D.whiteTop),i.box(-e/2,e/2,n-.02,n,t/2-.07,t/2,D.whiteTop),i.box(-e/2,-e/2+.07,n-.02,n,-t/2+.07,t/2-.07,D.whiteTop),i.box(e/2-.07,e/2,n-.02,n,-t/2+.07,t/2-.07,D.whiteTop),i.box(-e/2+.07,e/2-.07,n-.03,n-.02,-t/2+.07,t/2-.07,D.glass,D.glass,Je),i.cyl(-e/2+.04,0,.02,n,n+.12,D.metal,D.metal,8)}function _1(i,e,t,n){i.box(-e/2,e/2,0,.05,-t/2,t/2,D.whiteTop,D.whiteTop,pe),i.cyl(0,0,.04,.05,.052,D.metal,D.metal,8);for(let[r,o,s,a]of[[-e/2,t/2,e/2,t/2],[e/2,-t/2,e/2,t/2]])i.seg(r,.05,o,s,.05,a,Je),i.seg(r,n,o,s,n,a,Je),i.seg(s,.05,a,s,n,a,Je);i.cyl(-e/2+.06,-t/2+.06,.015,.05,n-.05,D.metal,D.metal,6),i.cyl(-e/2+.2,-t/2+.2,.1,n-.08,n-.06,D.metal,D.metal,12,Je)}function b1(i,e,t,n){let r=Math.min(.18,t*.3);i.box(-e/2,e/2,.45,n,-t/2,-t/2+r,D.white,D.whiteTop,pe),i.box(-e*.3,e*.3,0,.36,-t/2+r-.02,t/2-.12,D.white,D.whiteTop),i.cyl(0,t/2-.26,Math.min(e/2,.19),.36,.41,D.white,D.whiteTop,12,pe),i.box(-e/2+.02,e/2-.02,.41,.43,-t/2+r,-t/2+r+.05,D.whiteTop)}function v1(i,e,t,n){Ji(i,e,t-.02,n-.12,e>.8?2:1,n-.3),i.box(-e/2,e/2,n-.12,n,-t/2,t/2,D.white,D.whiteTop,pe),i.box(-e/2+.07,e/2-.07,n-.005,n,-t/2+.12,t/2-.06,D.glass,D.glass,Je),i.cyl(0,-t/2+.06,.018,n,n+.2,D.metal,D.metal,8),i.box(-e/2+.04,e/2-.04,n+.35,n+1,-t/2,-t/2+.02,D.glass,D.glass,Je)}function x1(i,e,t,n){Ji(i,e,t,n,Math.max(2,Math.round(e/.6)),n*.55,!0);let r=Math.min(e*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-t/2+.08,-t/2+.24,D.metal),i.box(-.02,.02,n+.02,n+.12,-t/2+.14,-t/2+.18,D.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-t/2+.12,-t/2+.16,D.dark,D.dark,Je)}function y1(i,e,t,n){let r=Math.min(e,t)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,D.pot,D.pot,10,pe),i.cyl(0,0,r*.08,o,n*.55,D.wood,D.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),u=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-o)*.16,D.plant,D.plantTop,8,a===s-1?Qe:null)}}function w1(i,e,t){i.box(-e/2,e/2,0,.012,-t/2,t/2,D.fabric,D.fabricTop);let n=Math.min(.12,Math.min(e,t)*.08);for(let[r,o,s,a]of[[-e/2+n,-t/2+n,e/2-n,-t/2+n],[e/2-n,-t/2+n,e/2-n,t/2-n],[e/2-n,t/2-n,-e/2+n,t/2-n],[-e/2+n,t/2-n,-e/2+n,-t/2+n]])i.seg(r,.014,o,s,.014,a,pe)}function M1(i,e,t,n){let r=Math.max(3,Math.round(n/.18)),o=n/r,s=t/r;for(let u=0;u<r;u++){let d=t/2-s*u,h=d-s,f=o*(u+1);i.box(-e/2,e/2,0,f,h,d,D.wood,D.woodTop),i.seg(-e/2,f,d,e/2,f,d,pe)}i.seg(-e/2,0,t/2,-e/2,o,t/2,pe);for(let u of[-e/2,e/2])i.seg(u,o,t/2,u,n,-t/2+s,Qe);let a=.9,l=e/2-.03,c=Math.max(1,r-4);i.seg(l,o+a,t/2-s/2,l,o*c+a,t/2-s*(c-.5),Je);for(let u=0;u<c;u+=3){let d=t/2-s*(u+.5),h=o*(u+1);i.seg(l,h,d,l,h+a,d,Qe)}}function S1(i,e,t,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:u}=sm(e,t,n),d=-e/2,h=-e/2+a,f=e/2-a,p=e/2,_=-t/2+l;for(let E=0;E<o;E++){let v=t/2-c*E,S=u*(E+1);i.box(d,h,0,S,v-c,v,D.wood,D.woodTop),i.seg(d,S,v,h,S,v,pe)}i.seg(d,0,t/2,d,u,t/2,pe);let m=u*r,g=.2;i.box(d,h,0,m,-t/2,_,D.wood,D.woodTop),i.box(h,p,Math.max(0,m-g),m,-t/2,_,D.wood,D.woodTop),i.seg(d,m,_,h,m,_,pe);for(let E=0;E<s;E++){let v=_+c*E,S=u*(r+1+E);i.box(f,p,Math.max(0,S-u-g),S,v,v+c,D.wood,D.woodTop),i.seg(f,S,v,p,S,v,pe)}i.seg(d,u,t/2,d,m,_,Qe),i.seg(p,m,_,p,n,_+c*(s-1),Qe);let w=.9,x=h-.03,b=f+.03,y=_-.03,M=Math.max(1,s-4);i.seg(x,u+w,t/2-c/2,x,m+w,y,Je),i.seg(x,m+w,y,b,m+w,y,Je),i.seg(b,m+w,y,b,u*(r+M)+w,_+c*(M-.5),Je);for(let E=0;E<o;E+=3){let v=t/2-c*(E+.5);i.seg(x,u*(E+1),v,x,u*(E+1)+w,v,Qe)}for(let E of[x,b])i.seg(E,m,y,E,m+w,y,Qe);for(let E=2;E<M;E+=3){let v=_+c*(E+.5);i.seg(b,u*(r+1+E),v,b,u*(r+1+E)+w,v,Qe)}}function T1(i,e,t,n){Sr(i,e,t,.12,.03,.04,D.metal),i.box(-e/2,e/2,.12,n,-t/2,t/2-.02,D.wood,D.woodTop,pe),Ns(i,-e/2,e/2,.12,n,t/2-.02,Math.max(2,Math.round(e/.45)),n-.1,!0)}function A1(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2-.02,D.wood,D.woodTop,pe),i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.06,D.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=t/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-e/2,a,o,e/2,a,o,Qe)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,Je)}}function E1(i,e,t,n){i.box(-e/2,e/2,0,.45,-t/2,t/2,D.wood,D.woodTop,pe),Ns(i,-e/2,e/2,.02,.45,t/2,Math.max(2,Math.round(e/.5)),.38,!0),i.box(-e/2,e/2,.45,n,-t/2,-t/2+.03,D.body,D.bodyTop,pe),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.wood,D.woodTop,pe);let r=Math.max(2,Math.round(e/.25));for(let o=0;o<r;o++){let s=-e/2+e/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-t/2+.03,-t/2+.1,D.metal,D.metal)}}function qm(i,e,t,n,r){let s=Math.min(.5,r?t*.4:t),a=.08;i.box(-e/2,e/2,0,.45-.06,-t/2,-t/2+s,D.wood,D.woodTop,pe),i.box(-e/2,e/2,0,n,-t/2,-t/2+a,D.wood,D.woodTop,pe),i.box(-e/2+(r?s:.02),e/2-.02,.45-.06,.45+.02,-t/2+a,-t/2+s,D.cushion,D.cushion,Qe),r&&(i.box(-e/2,-e/2+s,0,.45-.06,-t/2+s,t/2,D.wood,D.woodTop,pe),i.box(-e/2,-e/2+a,0,n,-t/2+a,t/2,D.wood,D.woodTop,pe),i.box(-e/2+a,-e/2+s,.45-.06,.45+.02,-t/2+a,t/2-.02,D.cushion,D.cushion,Qe))}function R1(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.8,0,.02,D.metal,D.metal,12),i.cyl(0,0,.025,.02,n-.05,D.metal,D.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,D.metal,D.metal,12,Qe),i.cyl(0,0,r,n-.05,n,D.cushion,D.fabricTop,14,pe)}function P1(i,e,t,n){let r=Math.min(e,t)/2;i.box(-r,r,.04,.08,-.03,.03,D.metal),i.box(-.03,.03,.04,.08,-r,r,D.metal),i.cyl(0,0,.06,.02,.1,D.dark,D.dark,8),i.cyl(0,0,.025,.1,.44,D.metal,D.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,D.fabric,D.cushion,pe),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,D.fabric,D.fabricTop,pe),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,D.metal)}function k1(i,e,t,n){Sr(i,e,t,.08,.04,.05,D.wood),i.box(-e/2,e/2,.08,n,-t/2,t/2,D.fabric,D.cushion,pe)}function C1(i,e,t,n){i.box(-e/2,e/2,1.45,1.45+n,-t/2,t/2-.02,D.body,D.bodyTop,pe),Ns(i,-e/2,e/2,1.45,1.45+n,t/2-.02,Math.max(1,Math.round(e/.5)),1.45+.08)}function I1(i,e,t,n){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,D.body,D.bodyTop,pe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark);let r=t/2-.02;i.box(-e/2+.03,e/2-.03,.85,1.45,r,r+.01,D.dark,D.dark,Je),i.seg(-e/2+.08,1.4,r+.02,e/2-.08,1.4,r+.02,Je);for(let o of[.85,1.45])i.seg(-e/2,o,r,e/2,o,r,Qe);i.seg(e/2-.06,.5,r+.012,e/2-.06,.7,r+.012,Je),i.seg(e/2-.06,1.6,r+.012,e/2-.06,1.8,r+.012,Je)}function L1(i,e,t,n){let r=t-.3;i.box(-e/2+.05,e/2-.05,.08,n-.04,-t/2+.02,-t/2+r,D.body,D.bodyTop,pe),i.box(-e/2+.07,e/2-.07,0,.08,-t/2+.04,-t/2+r-.04,D.dark),Ns(i,-e/2+.05,e/2-.05,.08,n-.04,-t/2+r,Math.max(2,Math.round(e/.6)),n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,pe)}function F1(i,e,t,n){i.box(-e/2,e/2,.02,n-.04,-t/2,t/2-.02,D.body,D.bodyTop,pe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark),i.seg(-e/2+.08,n-.12,t/2-.008,e/2-.08,n-.12,t/2-.008,Je),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,pe)}function Zm(i,e,t,n,r){i.box(-e/2,e/2,0,n,-t/2,t/2-.02,D.white,D.whiteTop,pe);let o=t/2-.012;i.seg(-e/2,n-.14,o,e/2,n-.14,o,Qe),i.seg(e/2-.16,n-.07,o,e/2-.08,n-.07,o,Je);let s=(n-.14)/2+.04,a=Math.min(e*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,d=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,s+Math.sin(u)*a,o,Math.cos(d)*a,s+Math.sin(d)*a,o,Je),r||i.seg(Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,Math.cos(d)*a*.72,s+Math.sin(d)*a*.72,o,Qe)}}function D1(i,e,t,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(e/2)-(s>0?.05:0),s*(e/2)+(s<0?.05:0),0,n,a*(t/2)-(a>0?.05:0),a*(t/2)+(a<0?.05:0),D.wood,D.woodTop);for(let s of[.25,n-.55])i.box(-e/2,e/2,s,s+.08,-t/2,t/2,D.wood,D.woodTop,pe),i.box(-e/2+.04,e/2-.04,s+.08,s+.24,-t/2+.05,t/2-.05,D.white,D.whiteTop,Qe),i.box(-e/2+.05,e/2-.05,s+.24,s+.33,-t/2+.08,-t/2+.4,D.whiteTop,D.whiteTop);i.box(-e/2,e/2,n-.2,n-.15,t/2-.05,t/2,D.wood,D.woodTop);let o=e/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,t/2+.02,s,n-.15,t/2+.02,pe);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,t/2+.02,o+.18,s,t/2+.02,Qe)}function N1(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.4,0,.03,D.metal,D.metal,12),i.cyl(0,0,.05,.03,n-.04,D.wood,D.wood,8),i.cyl(0,0,r,n-.04,n,D.wood,D.woodTop,20,pe)}function z1(i,e,t,n){Sr(i,e,t,n-.03,.04,.03,D.wood),i.box(-e/2,e/2,n-.03,n,-t/2,t/2,D.wood,D.woodTop,pe),i.box(-e/2+.05,e/2-.05,.1,.13,-t/2+.05,t/2-.05,D.body,D.bodyTop,Qe)}function B1(i,e,t,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-t/2,-t/2+.03,D.metal),i.box(-e/2,e/2,r,r+n,-t/2+.03,t/2,D.dark,D.dark,Je)}function O1(i,e,t,n){let r=Zh;i.box(-e/2+.05,-e/2+.08,0,r,-t/2,-t/2+.03,D.metal),i.box(e/2-.08,e/2-.05,0,r,-t/2,-t/2+.03,D.metal),i.box(-e/2,e/2,r,r+n,-t/2+.02,t/2,D.white,D.whiteTop,pe);let o=Math.max(3,Math.round(e/.1));for(let s=1;s<o;s++){let a=-e/2+e/o*s;i.seg(a,r+.03,t/2+.002,a,r+n-.03,t/2+.002,Qe)}}function U1(i,e,t,n){let r=$h;i.box(-e/2,e/2,r+.07,r+n,-t/2,t/2,D.white,D.whiteTop,pe),i.box(-e/2,e/2,r,r+.07,-t/2,t/2-.05,D.white,D.white,pe),i.box(-e/2+.04,e/2-.04,r+.012,r+.06,t/2-.05,t/2-.02,D.dark),i.seg(-e/2+.03,r+n*.55,t/2+.002,e/2-.03,r+n*.55,t/2+.002,Qe),i.seg(e/2-.14,r+n*.75,t/2+.002,e/2-.07,r+n*.75,t/2+.002,Je)}function yo(i,e,t,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,r,e+Math.cos(l)*n,t+Math.sin(l)*n,r,Je)}}function V1(i,e,t,n,r){let s=t/2;if(r==="slim"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.dark,D.body,pe),i.seg(-e*.25,1.1+n*.15,s+.004,-e*.25,1.1+n*.85,s+.004,Je),i.box(-e*.1,e*.3,1.1+n*.7,1.1+n*.85,s,s+.005,D.dark);return}if(r==="hybrid"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.white,D.whiteTop,pe),yo(i,0,1.1+n*.66,Math.min(e,n)*.22,s+.004),i.seg(-e*.08,1.1+n*.66,s+.005,e*.08,1.1+n*.66,s+.005,Je);for(let a of[-1,1])yo(i,a*e*.22,1.1+n*.2,Math.min(e,n)*.1,-t/2-.002,12);return}i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.white,D.whiteTop,pe),i.box(-e*.28,e*.28,1.1+n*.58,1.1+n*.82,t/2,t/2+.006,D.dark),i.seg(-e*.3,1.1+n*.45,t/2+.004,e*.3,1.1+n*.45,t/2+.004,Je);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*e/2+a*.002,1.1+n*l/6,-t/2+.03,a*e/2+a*.002,1.1+n*l/6,t/2-.03,Qe)}function G1(i,e,t,n){let r=Math.min(t,n)*.32;i.box(-e/2,e/2,0,.03,-t/2,t/2,D.dark),i.box(-e/2,e*.1,.05,.05+r*2,-r,r,D.metal,D.metal,pe);for(let s of[-e*.4,-e*.25,-e*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,Qe);i.cyl(e*.28,0,Math.min(e*.2,t*.45),.03,n*.82,D.dark,D.body,14,pe),i.cyl(e*.28,0,Math.min(e*.2,t*.45)*.9,n*.82,n,D.glass,D.glass,14);let o=Math.min(e*.2,t*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(e*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,e*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,Je)}}function H1(i,e,t,n,r){let o=Math.min(e,t)/2;if(i.cyl(0,0,o*.95,0,n*.08,D.dark,D.dark,16),i.cyl(0,0,o,n*.08,n*.78,D.dark,D.body,18,pe),i.cyl(0,0,o*.75,n*.78,n*.84,D.dark,D.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,D.dark,D.metal,pe),yo(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,D.dark,D.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,D.dark,D.metal,16,pe);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,Je)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,D.dark,D.body)}function W1(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2,D.white,D.whiteTop,pe);for(let a of[-e*.4,e*.4])i.box(a-.03,a+.03,0,.06,-t/2+.02,t/2-.02,D.dark);let r=Math.min(n*.38,e*.3),o=-e*.15,s=n*.53;yo(i,o,s,r,t/2+.004,24),yo(i,o,s,r*.55,t/2+.004,16),i.seg(o-r,s,t/2+.005,o+r,s,t/2+.005,Qe),i.seg(o,s-r,t/2+.005,o,s+r,t/2+.005,Qe),i.box(e*.22,e*.42,n*.62,n*.8,t/2,t/2+.006,D.dark),i.seg(e*.25,n*.71,t/2+.008,e*.39,n*.71,t/2+.008,Je);for(let a=1;a<8;a++)i.seg(e/2+.002,n*(.1+a*.1),-t/2+.03,e/2+.002,n*(.1+a*.1),t/2-.03,Qe)}function X1(i,e,t,n){i.box(-e/2,e/2,.9,.9+n*.45,-t/2,t/2,D.white,D.whiteTop,pe);for(let o of[-1,1])yo(i,o*e*.22,.9+n*.22,Math.min(e,n)*.09,t/2+.004,12);i.seg(-e*.35,.9+n*.4,t/2+.004,e*.35,.9+n*.4,t/2+.004,Je);for(let o of[-1,1])i.box(o*e*.25-e*.18,o*e*.25+e*.18,0,n*.5,-t/2,t/2,D.white,D.glass,Qe)}function K1(i,e,t,n){let r=im-n*.4;i.box(-e/2,e/2,r+n*.25,r+n*.6,-t*.25,t*.25,D.metal,D.metal,pe),i.box(-e*.12,e*.12,r+n*.6,r+n*.8,-t*.12,t*.12,D.dark),i.box(-e*.1,e*.45,r+n*.8,r+n,-t*.15,t*.15,D.accent,D.accent)}function Y1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,D.dark,D.body,pe),i.box(-e/2-.01,e/2+.01,n,n+.03,-t/2-.01,t/2+.01,D.dark,D.body),i.seg(-e/2,n+.032,t/2+.01,e/2,n+.032,t/2+.01,Je),i.seg(-e*.3,n*.55,t/2+.003,e*.3,n*.55,t/2+.003,Qe)}function q1(i,e,t,n){i.box(-e/2,e/2,1,1+n,-t/2,t/2,D.dark,D.body,pe);let o=Math.min(e,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,t/2+.003,Math.cos(u)*o,s+Math.sin(u)*o,t/2+.003,Je)}i.box(-.015,.015,1-.35,1,t/2-.03,t/2,D.dark),i.box(-.06,.06,1-.42,1-.35,t/2-.05,t/2,D.dark,D.body)}function Z1(i,e,t,n){i.box(-e/2,e/2,.4,.4+n,-t/2,t/2,D.white,D.whiteTop,pe),i.seg(-e/2+.025,.4+.025,t/2+.003,-e/2+.025,.4+n-.025,t/2+.003,Qe),i.seg(-e/2+.025,.4+n-.025,t/2+.003,e/2-.025,.4+n-.025,t/2+.003,Qe),i.box(e/2-.06,e/2-.035,.4+n*.5-.05,.4+n*.5+.05,t/2,t/2+.012,D.dark),i.box(-e*.3,e*.3,.4+n*.6,.4+n*.8,t/2,t/2+.005,D.dark),i.seg(-e*.22,.4+n*.7,t/2+.008,e*.22,.4+n*.7,t/2+.008,Je)}function $1(i,e,t,n,r){if(r==="wall"){i.box(-e/2,e/2,.5,.5+n,-t/2,t/2,D.white,D.whiteTop,pe),i.seg(-e*.3,.5+n*.9,t/2+.004,e*.3,.5+n*.9,t/2+.004,Je),i.seg(-e*.3,.5+n*.08,t/2+.003,e*.3,.5+n*.08,t/2+.003,Qe);return}if(r==="cube"){i.box(-e/2+.01,e/2-.01,0,.03,-t/2+.01,t/2-.01,D.dark),i.box(-e/2,e/2,.03,n,-t/2,t/2,D.dark,D.body,pe),i.seg(-e*.35,n*.85,t/2+.004,e*.35,n*.85,t/2+.004,Je),i.box(-e*.15,e*.15,n,n+.025,-.012,.012,D.dark);return}i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.02,D.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-e/2,e/2,.06+a*s+.004,.06+(a+1)*s,-t/2,t/2,D.white,D.whiteTop,pe);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-e*.04,l,t/2+.003,e*.04,l,t/2+.003,Je)}}var Zh=.12,$h=2.05;function Jh(i,e){let t=J1(i,e);return t&&i.mirror?{...t,x0:-t.x1,x1:-t.x0}:t}function J1(i,e){let t=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=Ih(i.type);if(o){let l=e?Ct(e,i):0,c=(o.x-o.w/2)*t,u=(o.x+o.w/2)*t,d=Math.min(.02,(u-c)*.05);return{x0:c+d,x1:u-d,y0:l+o.y*r+d,y1:l+(o.y+o.h)*r-d,z:(o.z+o.d/2)*n}}let s=e&&i.type!=="fridge_smart"?Ct(e,i)-ws(i):0,a=j1(i,t,n,r,e);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function j1(i,e,t,n,r){if(i.type==="pool_pump"){let o=Math.min(t,n)*.32;return{x0:-e/2+.03,x1:e*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-e/2+.05,x1:e*.15,y0:n*.15,y1:n*.9,z:t/2+.003};if(i.type==="pool_filter"){let o=Math.min(e,t)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-e*.4,x1:e*.4,y0:.9+n*.05,y1:.9+n*.4,z:t/2+.003};if(i.type==="tv_board"){let o=Math.min(e*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-t/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-e/2+.02,x1:e/2-.02,y0:o+.02,y1:o+n-.02,z:t/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-t/2+.115};if(i.type==="fridge_smart"){let o=r?Ct(r,i):0;return{x0:.06,x1:e/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:t/2+.006}}if(i.type==="radiator")return{x0:-e/2+.02,x1:e/2-.02,y0:Zh+.02,y1:Zh+n-.02,z:t/2+.004};if(i.type==="ac_unit")return{x0:-e/2+.05,x1:e/2-.05,y0:$h+.015,y1:$h+.06,z:t/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(e*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:t/2-.004}}return i.type==="dishwasher"?{x0:-e/2+.06,x1:e/2-.06,y0:n-.16,y1:n-.08,z:t/2-.004}:null}function Q1(i,e,t,n,r){let o=Math.min(.14,Math.max(.06,Math.min(t,n)*.15)),s=new J(1-r,1-r,1-r),a=new J(1,1,1),l=.003,c=[e(-t/2,-n/2),e(t/2,-n/2),e(t/2,n/2),e(-t/2,n/2)],u=[e(-t/2-o,-n/2-o),e(t/2+o,-n/2-o),e(t/2+o,n/2+o),e(-t/2-o,n/2+o)],d=f=>[f[0],l,f[1]],h=i.p.length;i.tri(d(c[0]),d(c[1]),d(c[2]),s),i.tri(d(c[0]),d(c[2]),d(c[3]),s);for(let f=0;f<4;f++){let p=(f+1)%4;i.tri(d(c[f]),d(u[f]),d(u[p]),s,a,a),i.tri(d(c[f]),d(u[p]),d(c[p]),s,a,s)}Jm(e)&&jh(i,h)}function Tc(i,e,t,n,r=0){let o=i.p.length,s=e.p.length;eM(i,e,n.rotation_x||n.rotation_z?new tt:t,n,r),kn(i.p,o,n,r+n.h/2),kn(e.p,s,n,r+n.h/2)}function jh(i,e){let t=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=e;n<i.p.length;n+=9){let r=n/9;t(i.p,n,3),t(i.c,n,3),t(i.f,r*3,1),t(i.uv,r*6,2),t(i.tile,r*6,2)}}function eM(i,e,t,n,r){let o=_t(n.type)?0:r-ws(n);if(_t(n.type)||Math.abs(o)<.001)return $m(i,e,t,n,r);let s=i.p.length,a=e.p.length;$m(i,e,r<.05?t:new tt,n,0);for(let l=s+1;l<i.p.length;l+=3)i.p[l]+=o;for(let l=a+1;l<e.p.length;l+=3)e.p[l]+=o}function $m(i,e,t,n,r){let o=n.rotation*ft,s=Math.cos(o),a=Math.sin(o),l=n.mirror?-1:1,c=(p,_)=>[n.x+l*p*s-_*a,n.z+l*p*a+_*s],u=new Mr(i,e,c),d=Math.max(.05,n.w),h=Math.max(.05,n.d),f=Math.max(.005,n.h);switch(n.type){case"sofa":Km(u,d,h,f,Math.max(1,Math.round((d-.4)/.62)));break;case"armchair":Km(u,d,h,f,1);break;case"sofa_l":Ym(u,d,h,f,!1);break;case"sofa_u":Ym(u,d,h,f,!0);break;case"bed":o1(u,d,h,f);break;case"chair":s1(u,d,h,f);break;case"table":a1(u,d,h,f);break;case"desk":l1(u,d,h,f);break;case"nightstand":Ji(u,d,h,f,1,f*.72,!0),u.seg(-d/2,f*.5,h/2-.02,d/2,f*.5,h/2-.02,Qe);break;case"wardrobe":Ji(u,d,h,f,Math.max(2,Math.round(d/.5)),f*.5);break;case"shelf":c1(u,d,h,f);break;case"kitchen":u1(u,d,h,f);break;case"fridge":h1(u,d,h,f);break;case"fridge_smart":d1(u,d,h,f);break;case"stove":p1(u,d,h,f);break;case"sink":m1(u,d,h,f);break;case"bathtub":g1(u,d,h,f);break;case"shower":_1(u,d,h,f);break;case"wc":b1(u,d,h,f);break;case"washbasin":v1(u,d,h,f);break;case"tv_board":x1(u,d,h,f);break;case"plant":y1(u,d,h,f);break;case"rug":w1(u,d,h);return;case"stairs":M1(u,d,h,f);break;case"stairs_u":S1(u,d,h,f);break;case"stairwell":return;case"sideboard":T1(u,d,h,f);break;case"dresser":A1(u,d,h,f);break;case"tall_cabinet":Ji(u,d,h,f,1,f*.5);break;case"coat_rack":E1(u,d,h,f);break;case"bench":qm(u,d,h,f,!1);break;case"corner_bench":qm(u,d,h,f,!0);break;case"bar_stool":R1(u,d,h,f);break;case"office_chair":P1(u,d,h,f);break;case"stool":k1(u,d,h,f);break;case"kitchen_wall":C1(u,d,h,f);return;case"kitchen_tall":I1(u,d,h,f);break;case"island":L1(u,d,h,f);break;case"worktop":u.box(-d/2,d/2,Math.max(0,f-.04),f,-h/2,h/2,D.whiteTop,D.whiteTop,pe);return;case"dishwasher":F1(u,d,h,f);break;case"washer":Zm(u,d,h,f,!1);break;case"dryer":Zm(u,d,h,f,!0);break;case"bunk_bed":D1(u,d,h,f);break;case"table_round":N1(u,d,h,f);break;case"coffee_table":z1(u,d,h,f);break;case"tv_wall":B1(u,d,h,f);return;case"parking":{let _=[[-d/2,-h/2],[d/2,-h/2],[d/2,h/2],[-d/2,h/2]];for(let m=0;m<4;m++)u.seg(_[m][0],.012,_[m][1],_[(m+1)%4][0],.012,_[(m+1)%4][1],Qe);u.seg(-d*.15,.012,h/2-.45,0,.012,h/2-.2,pe),u.seg(0,.012,h/2-.2,d*.15,.012,h/2-.45,pe);return}case"robot_vacuum":u.box(-d*.45,d*.45,0,f,-h/2,-h/2+h*.3,D.white,D.whiteTop,pe),u.box(-d*.2,d*.2,f*.5,f*.62,-h/2+h*.3,-h/2+h*.31,D.accent);return;case"radiator":O1(u,d,h,f);return;case"ac_unit":U1(u,d,h,f);return;case"inverter":V1(u,d,h,f,n.variant??null);return;case"grid_point":Y1(u,d,h,f);break;case"wallbox":q1(u,d,h,f);return;case"pool_pump":G1(u,d,h,f);break;case"pool_filter":H1(u,d,h,f,n.variant??null);break;case"pool_heat_pump":W1(u,d,h,f);break;case"pool_dosing":X1(u,d,h,f);break;case"pool_valve":K1(u,d,h,f);return;case"meter":Z1(u,d,h,f);return;case"home_battery":if($1(u,d,h,f,n.variant??null),n.variant==="wall")return;break;default:{let p=br(n);if(p){if(Ac(u,p,d,h,f,r,null),r>.05)return}else u.box(-d/2,d/2,0,f,-h/2,h/2,D.body,D.bodyTop,pe)}}Q1(t,c,d,h,n.type==="plant"?.35:.5)}function qh(i,e){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let t=D;return(e?t[`${i}Top`]:void 0)??t[i]??null}function Ac(i,e,t,n,r,o,s,a=null,l=!1){let c=!!a,u=new Set([...e.motions??[],...e.spots??[]].flatMap(d=>d.parts));for(let d of e.parts){if(!l&&(d.visible===!1||d.status||d.id&&u.has(d.id))||a&&!a(d))continue;let h=c?{...d,glow:!0,w:d.w+.006/t,d:d.d+.006/n,y:Math.max(0,d.y-.002/r),h:d.h+.004/r}:d,f=h.glow&&s!==null,p=f?s:qh(h.color,!1)??D.body,_=f?s:qh(h.top,!1)??qh(h.color,!0)??We(p,1.25).getHex(),m=o+h.y*r,g=o+Math.min(r,(h.y+h.h)*r),w=h.edges==="glow"?si:h.edges==="faint"?Qe:h.edges?pe:null,x=h.rot?i.rotated(h.x*t,h.z*n,h.rot):i;if(!x.shape(h,t,n,r,o,p))if(h.shape==="cyl"&&(h.axis==="x"||h.axis==="z"))x.lyingCyl(h.axis,h.x*t,h.z*n,m,g,h.axis==="x"?h.w*t:h.d*n,h.axis==="x"?h.d*n:h.w*t,p,_,14,w);else if(h.shape==="cyl")x.cyl(h.x*t,h.z*n,Math.min(h.w*t,h.d*n)/2,m,g,p,_,14,w);else if(h.shape==="loft"){let b=h.tx??h.x,y=h.tz??h.z,M=h.tw??h.w,E=h.td??h.d;x.loft([(h.x-h.w/2)*t,(h.x+h.w/2)*t,(h.z-h.d/2)*n,(h.z+h.d/2)*n],[(b-M/2)*t,(b+M/2)*t,(y-E/2)*n,(y+E/2)*n],m,g,p,_,w)}else x.box((h.x-h.w/2)*t,(h.x+h.w/2)*t,m,g,(h.z-h.d/2)*n,(h.z+h.d/2)*n,p,_,w)}}function e0(i,e){let t=new tt;return Ac(new Mr(t,new Ft,(n,r)=>[n,r]),i,e.w,e.d,e.h,0,null,null,!0),t.geometry()}function t0(i,e,t,n,r,o){let s=o*ft,a=Math.cos(s),l=Math.sin(s),c=(p,_)=>[t+p*a-_*l,r+p*l+_*a],u=new Mr(i,new Ft,c),d=1713728,h=2373216,f=725279;if(e==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,d,h,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,f,d),u.cyl(0,0,.012,n-.075,n-.06,D.accent,D.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,d,h),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,d,h),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,d,h),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,f,D.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function zs(i,e,t,n,r,o=s=>!!s.glow){let s=i.p.length,a=t.rotation*ft,l=Math.cos(a),c=Math.sin(a),u=t.mirror?-1:1,d=(h,f)=>[t.x+u*h*l-f*c,t.z+u*h*c+f*l];Ac(new Mr(i,new Ft,d),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r,o),kn(i.p,s,t,n+t.h/2)}function Ec(i,e,t,n,r){let o=i.p.length,s=t.rotation*ft,a=Math.cos(s),l=Math.sin(s),c=t.mirror?-1:1,u=(d,h)=>[t.x+c*d*a-h*l,t.z+c*d*l+h*a];Ac(new Mr(i,new Ft,u),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r),kn(i.p,o,t,n+t.h/2)}var Pc=Math.PI/180,tM=1.13,nM=1.72,Qh=.025,Tr=.07,n0=.25;function i0(i,e){let t=[];for(let n of i.floors){if(e&&n.id!==e)continue;let{walls:r}=bi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,u=-s/l,d=un(n,o),h=d.top-d.bottom,f=o.sources.find(m=>m.room_id===o.roomLeft)?.edge??null,p={floorId:n.id,room:o.roomLeft,edge:f,free:!!o.free},_=(m,g,w,x)=>t.push({key:m,section:null,side:"top",flat:!1,o:g,eu:w,es:[0,1,0],n:x,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:p});_(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation+d.bottom,o.a[1]+u*o.right],[s/l,0,a/l],[c,0,u]),o.free&&_(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation+d.bottom,o.b[1]-u*o.left],[-s/l,0,-a/l],[-c,0,-u])}}return t}var ed="ground";function td(i){let e=[...i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??i.floors[0]??null}function r0(i,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],o=td(i),s=n[0]*e.u+r[0]*e.v,a=n[2]*e.u+r[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:em(o,s,a)):e.base??0;return{key:ed,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function iM(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>Wt(n)-Wt(t))[0]??null}function Qi(i){let e=i.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>{let x=vc(i,w,w.overhang??e.overhang),b=w.points?.length?Cs(w,w.shape==="parapet"?0:Math.max(0,Math.min(x.a,x.b,x.u0,x.u1))):void 0;return rM(w,x).map(y=>b?{...y,footprint:b}:y)});let t=iM(i);if(!t)return[];let n=t.rooms.flatMap(w=>w.points.map(x=>x[0])),r=t.rooms.flatMap(w=>w.points.map(x=>x[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,u=Wt(t);if(e.type==="flat")return[o0("main",null,s,l,a,c,u+n0)];let d=a-s>=c-l,h=e.ridge==="short"?!d:d,f=(h?c-l:a-s)/2,p=f*Math.tan(e.pitch*Pc),_=(w,x,b)=>h?[w,u+b,(l+c)/2+x]:[(s+a)/2+x,u+b,w],[m,g]=h?[s,a]:[l,c];return[-1,1].map(w=>Rc(`main:${w<0?"a":"b"}`,null,w<0?"a":"b",_(m,w*f,0),_(g,w*f,0),_(m,0,p),e.pitch,()=>[0,g-m]))}function rM(i,e){let t=Xn(i),n=Sn(i),r=(_,m,g)=>{let[w,x]=t.at(_,m);return[w,g,x]},o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let _=t.at(a,-o),m=t.at(l,t.w+s);return[o0(i.id,i.id,Math.min(_[0],m[0]),Math.min(_[1],m[1]),Math.max(_[0],m[0]),Math.max(_[1],m[1]),i.eave_a+n0)]}if(i.shape==="pent")return[Rc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,t.w+s,n.y(t.w+s)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",d=i.shape==="pyramid"?(t.u1-t.u0)/2:u?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,h=u?t.u0+d-a:0,f=u?l-(t.u1-d):0,p=[];if(n.vr>.3){let _=Math.hypot(n.vr+o,n.rh-n.y(-o));p.push(Rc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,m=>[h*(m/_),c-f*(m/_)]))}if(t.w-n.vr>.3){let _=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));p.push(Rc(`${i.id}:b`,i.id,"b",r(l,t.w+s,n.y(t.w+s)),r(a,t.w+s,n.y(t.w+s)),r(l,n.vr,n.rh),i.pitch_b,m=>[f*(m/_),c-h*(m/_)]))}if(u){let _=n.y(-o),m=n.y(t.w+s),g=[[`${i.id}:c`,"c",r(a,t.w+s,m),r(a,-o,_),r(t.u0+d,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-o,_),r(l,t.w+s,m),r(t.u1-d,n.vr,n.rh)]];for(let[w,x,b,y,M]of g){let E=oM(w,i.id,x,b,y,M);E&&p.push(E)}}return p}function oM(i,e,t,n,r,o){let s=Bs(Ar(r,n));if(s<.3)return null;let a=ji(Ar(r,n)),l=Ar(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],d=Bs(u);if(d<.3)return null;let h=ji(u),f=ji(l0(a,h));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let p=ji([-h[0],0,-h[2]]),_=Math.atan2(h[1],Math.hypot(h[0],h[2]))/Pc;return{key:i,section:e,side:t,flat:!1,o:n,eu:a,es:h,n:f,lu:s,ls:d,pitch:_,span:g=>{let w=Math.min(1,Math.max(0,g/d));return[c*w,s-(s-c)*w]},facing:[p[0],p[2]]}}function Rc(i,e,t,n,r,o,s,a){let l=ji(Ar(r,n)),c=ji(Ar(o,n)),u=ji(l0(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let d=ji([-c[0],0,-c[2]]);return{key:i,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:u,lu:Bs(Ar(r,n)),ls:Bs(Ar(o,n)),pitch:s,span:a,facing:[d[0],d[2]]}}function o0(i,e,t,n,r,o,s){let a=r-t>=o-n,l=a?r-t:o-n,c=a?o-n:r-t;return{key:`${i}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function s0(i){let e=i.module_w||tM,t=i.module_h||nM;return i.portrait===!1?[t,e]:[e,t]}function sM(i){return i.layout?.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function a0(i,e){return i.flat?Math.min(45,Math.max(0,e.tilt??15))*Pc:i.wall?Math.min(90,Math.max(0,e.tilt??0))*Pc:0}function aM(i,e){let[,t]=s0(e),n=a0(i,e);return i.wall?t*Math.cos(n)+Qh:i.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+Qh}function Os(i,e,t=!1){let[n,r]=s0(e),o=[],s=a0(i,e),a=r*Math.cos(s),l=aM(i,e),c=sM(e),u=Math.max(1,...c),d=new Set(e.skip??[]),h=!!i.wall&&n>i.lu+1e-6,f=(_,m,g)=>[i.o[0]+i.eu[0]*_+i.es[0]*m+i.n[0]*g,i.o[1]+i.eu[1]*_+i.es[1]*m+i.n[1]*g,i.o[2]+i.eu[2]*_+i.es[2]*m+i.n[2]*g],p=(_,m)=>{if(i.unbounded)return!0;if(m<-1e-6||m>i.ls+1e-6)return!1;let[g,w]=i.span(m);return _>=g-1e-6&&_<=w+1e-6};return c.forEach((_,m)=>{let g=e.align==="right"?u-_:e.align==="center"?(u-_)/2:0;for(let w=0;w<_;w++){let x=`${m}:${w}`,b=d.has(x);if(b&&!t)continue;let y=e.u+(w+g)*(n+Qh),M=e.v+m*l,E=y+n,v=M+(i.flat||i.wall?a:r);if(h){if(!(p((y+E)/2,M)&&p((y+E)/2,v)))continue}else if(![[y,M],[E,M],[E,v],[y,v]].every(([A,I])=>p(A,I)))continue;if(i.footprint&&!_m(i.footprint,[[y,M],[E,M],[E,v],[y,v]].map(([A,I])=>{let L=f(A,I,0);return[L[0],L[2]]})))continue;if(i.wall&&s>.001){let A=Tr+r*Math.sin(s),[I,L]=e.flip?[A,Tr]:[Tr,A],z=[f(y,M,I),f(E,M,I),f(E,v,L),f(y,v,L)],B=e.flip?M:v,N=[y+.05,E-.05].map(O=>[f(O,B,0),f(O,B,A)]);o.push({corners:z,posts:N,cell:x,skipped:b});continue}if(!i.flat){o.push({corners:[f(y,M,Tr),f(E,M,Tr),f(E,v,Tr),f(y,v,Tr)],posts:[],cell:x,skipped:b});continue}let S=.15,T=S+r*Math.sin(s),[P,k]=e.flip?[v,M]:[M,v],R=[f(y,P,S),f(E,P,S),f(E,k,T),f(y,k,T)];o.push({corners:R,posts:[y+.05,E-.05].flatMap(A=>[[f(A,P,0),f(A,P,S)],[f(A,k,0),f(A,k,T)]]),cell:x,skipped:b})}}),o}function Ar(i,e){return[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}function Bs(i){return Math.hypot(i[0],i[1],i[2])}function ji(i){let e=Bs(i)||1;return[i[0]/e,i[1]/e,i[2]/e]}function l0(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}var lM=.78,cM=1.18;function uM(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||lM,module_h:i.h||cM}}function kc(i,e){let t=Os(i,uM(e))[0];if(!t)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function Cc(i,e,t){let n=e?kc(e,t):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,o=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>o)continue;let l=a.rooms.find(c=>Be([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}function Ic(i,e,t,n){let r=e.map((c,u)=>c-i[u]),o=t.map((c,u)=>c-i[u]),s=[r[1]*o[2]-r[2]*o[1],r[2]*o[0]-r[0]*o[2],r[0]*o[1]-r[1]*o[0]],a=Math.hypot(...s)||1,l=s.reduce((c,u,d)=>c+u*n[d],0)<0?-1:1;return s.map(c=>l*c/a)}function Us(i,e,t){return i.setAttribute("solarNormal",new Te(e,3)),i.setAttribute("solarPoint",new Te(t,3)),i}function Lc(i){let e=i.onBeforeCompile.bind(i),t=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(n,r)=>{e(n,r),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 solarNormal;
attribute vec3 solarPoint;`).replace("#include <project_vertex>",`#include <project_vertex>
      vec3 solarWorldPoint = (modelMatrix * vec4(solarPoint, 1.0)).xyz;
      vec3 solarWorldNormal = mat3(modelMatrix) * solarNormal;
      if (dot(solarWorldNormal, cameraPosition - solarWorldPoint) <= 0.0) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)},i.customProgramCacheKey=()=>`${t()}-solar-facing`,i}function c0(i,e,t,n,r){let o=n==="bottom"?0:n==="middle"?.5:1,s=n==="bottom"?-1:1,a=(h,f,p)=>{let _=f.map((w,x)=>w+(p[x]-w)*o),m=h.map((w,x)=>w-_[x]),g=m.reduce((w,x,b)=>w+x*t[b],0);return _.map((w,x)=>w+m[x]*Math.cos(r)-e[x]*g*Math.sin(r)*s)},[l,c,u,d]=i;return[a(l,l,d),a(c,c,u),a(u,c,u),a(d,l,d)]}var Vs=1712952,Gs=2239816,f0=1318193,Er=We(3662079,.9),Rr=We(5995775,.45),en=.14,hM=9427199,nd=13226982,id=14936565,dM={black:{glass:new J(329483),edge:We(9082544,.32),cells:We(2766160,.22)},blue:{glass:new J(1386842),edge:We(10467583,.55),cells:We(4025599,.35)}},fM=We(13226982,.5),pM=We(13226982,.85),mM=We(16757575,.95),u0=new J(2845583),h0=new J(3818072),d0=new J(4871791);function Fc(i,e,t,n,r){if(e.length<3)return;let[o,s,a]=e,l=(s[1]-o[1])*(a[2]-o[2])-(s[2]-o[2])*(a[1]-o[1]),c=(s[0]-o[0])*(a[1]-o[1])-(s[1]-o[1])*(a[0]-o[0]),d=l*(o[0]-n[0])+c*(o[2]-n[1])<0?[...e].reverse():e;for(let f=1;f+1<d.length;f++)i.tri(d[0],d[f],d[f+1],t);let h=Math.min(...d.map(f=>f[1]));for(let f=0;f<d.length;f++){let p=d[f],_=d[(f+1)%d.length],m=Math.abs(p[1]-h)<1e-6&&Math.abs(_[1]-h)<1e-6,g=Math.hypot(p[0]-_[0],p[2]-_[2])<1e-6;r.seg(p,_,m?wc:g?ai:si)}}function gM(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>Wt(n)-Wt(t))[0]??null}function p0(i,e=new Map){let t=i.settings.roof,n=t?.type==="custom"?null:vM(i),r=t?.type==="custom"?xM(i,t.sections??[],t.overhang):n?[n]:[];return bM(i,r),_M(i,r,e),r}function _M(i,e,t){let n=i.settings.roof?.windows??[];if(!n.length||!e.length)return;let r=new Map(Qi(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?kc(s,o):null;if(!s||!a)continue;let l=s.section?e.find(k=>k.sections?.includes(s.section)):e[0];if(!l)continue;let c=l.floor.elevation+l.base,u=k=>[k[0],k[1]-c,k[2]],[d,h,f,p]=a.map(u),_=t.get(o.id)??{open:0,tilt:0,cover:0},g=!!o.float&&Cc(i,s,o)?.floor.id===l.floor.id?l.win??={solid:new tt,lines:new Ft}:l.winRoof??={solid:new tt,lines:new Ft},w=(k,R)=>[k[0]+s.n[0]*R,k[1]+s.n[1]*R,k[2]+s.n[2]*R],x=(k,R,A)=>[k[0]+(R[0]-k[0])*A,k[1]+(R[1]-k[1])*A,k[2]+(R[2]-k[2])*A],b=_.open>.02||_.tilt>.02?mM:pM,y=[d,h,f,p].map(k=>w(k,.06)),M=[d,h,f,p].map(k=>w(k,-.02));for(let k=0;k<4;k++){g.lines.seg(y[k],y[(k+1)%4],b);let R=(k+1)%4;g.solid.tri(M[k],M[R],y[R],d0),g.solid.tri(M[k],y[R],y[k],d0)}let E=(_.open>.02?30*Math.min(1,_.open):_.tilt>.5?12:0)*ft,[v,S,T,P]=c0([d,h,f,p].map(k=>w(k,.065)),s.n,s.es,o.hinge,E);g.solid.tri(v,S,T,u0),g.solid.tri(v,T,P,u0);for(let[k,R]of[[v,S],[S,T],[T,P],[P,v]])g.lines.seg(k,R,b);if(_.cover>.02){let k=Math.min(1,_.cover),R=w(x(P,v,k),.01),A=w(x(T,S,k),.01),I=w(P,.01),L=w(T,.01);g.solid.tri(R,A,L,h0),g.solid.tri(R,L,I,h0)}}}function bM(i,e){let t=i.settings.roof?.solar??[];if(!t.length||!e.length)return;let n=new Map(Qi(i).map(r=>[r.key,r]));for(let r of t){let o=n.get(r.face);if(!o)continue;let s=o.section?e.find(a=>a.sections?.includes(o.section)):e[0];if(s){let a=s.solar??={solid:new tt,lines:new Ft,facing:{normals:[],points:[],lineNormals:[],linePoints:[]}};rd(a.solid,a.lines,o,r,s.floor.elevation+s.base,a.facing)}}}function rd(i,e,t,n,r,o){let s=u=>[u[0],u[1]-r,u[2]],a=dM[n.look==="blue"?"blue":"black"],l=n.portrait===!1?10:6,c=n.portrait===!1?6:10;for(let u of Os(t,n)){let d=i.p.length,h=e.p.length,[f,p,_,m]=u.corners.map(s);i.tri(f,p,_,a.glass),i.tri(f,_,m,a.glass),i.tri(f,_,p,a.glass),i.tri(f,m,_,a.glass);let g=(b,y=.004)=>[b[0]+t.n[0]*y,b[1]+t.n[1]*y,b[2]+t.n[2]*y],w=(b,y,M)=>[b[0]+(y[0]-b[0])*M,b[1]+(y[1]-b[1])*M,b[2]+(y[2]-b[2])*M],x=[f,p,_,m].map(b=>g(b));for(let b=0;b<4;b++)e.seg(x[b],x[(b+1)%4],a.edge);for(let b=1;b<l;b++)e.seg(g(w(f,p,b/l)),g(w(m,_,b/l)),a.cells);for(let b=1;b<c;b++)e.seg(g(w(f,m,b/c)),g(w(p,_,b/c)),a.cells);for(let[b,y]of u.posts)e.seg(s(b),s(y),fM);if(o){let b=Ic(f,p,_,t.n);for(let y=d;y<i.p.length;y+=3)o.normals.push(...b),o.points.push(...f);for(let y=h;y<e.p.length;y+=3)o.lineNormals.push(...b),o.linePoints.push(...f)}}}function vM(i){let e=i.settings.roof,t=gM(i);if(!t||!e||e.type==="none"||e.type==="custom")return null;let n=t.rooms.flatMap(T=>T.points.map(P=>P[0])),r=t.rooms.flatMap(T=>T.points.map(P=>P[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,u=new tt,d=new Ft;if(e.type==="flat"){St(u,[[s,l],[a,l],[a,c],[s,c]],0,.25,Vs,Gs,{bottom:!0});let T=.252;for(let[P,k]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])d.seg([P[0],T,P[1]],[k[0],T,k[1]],Er),d.seg([P[0],0,P[1]],[k[0],0,k[1]],Rr);return{floor:t,base:Wt(t)-t.elevation,solid:u,lines:d,glass:new tt}}let h=a-s>=c-l,f=e.ridge==="short"?!h:h,p=(f?c-l:a-s)/2,_=p*Math.tan(e.pitch*ft),m=(T,P,k)=>f?[T,k,(l+c)/2+P]:[(s+a)/2+P,k,T],[g,w]=f?[s,a]:[l,c],x=new J(Gs),b=new J(Vs),y=(T,P,k,R,A)=>{u.tri(T,P,k,A),u.tri(T,k,R,A)};for(let T of[-1,1]){y(m(g,T*p,0),m(w,T*p,0),m(w,0,_),m(g,0,_),x),y(m(g,T*p,-en),m(g,0,_-en),m(w,0,_-en),m(w,T*p,-en),b),y(m(g,T*p,-en),m(w,T*p,-en),m(w,T*p,0),m(g,T*p,0),b);for(let P of[g,w])y(m(P,T*p,-en),m(P,T*p,0),m(P,0,_),m(P,0,_-en),b);d.seg(m(g,T*p,0),m(w,T*p,0),Rr);for(let P of[g,w])d.seg(m(P,T*p,0),m(P,0,_),Rr)}let M=e.overhang,E=new J(f0),v=p-M,S=v*Math.tan(e.pitch*ft);for(let T of[g+M,w-M])Fc(u,[m(T,-v,-en),m(T,v,-en),m(T,0,S-en)],E,[(s+a)/2,(l+c)/2],d);return d.seg(m(g,0,_+.004),m(w,0,_+.004),Er),{floor:t,base:Wt(t)-t.elevation,solid:u,lines:d,glass:new tt}}function xM(i,e,t){let n=i.floors.filter(s=>s.rooms.length>0).sort((s,a)=>s.elevation-a.elevation);if(!n.length)return[];let r=new Map,o=new Map(Qi(i).map(s=>[s.key,s]));for(let s of e){if(Math.abs(s.x1-s.x0)<.1||Math.abs(s.z1-s.z0)<.1)continue;let a=Tm(i,s)??n[0],l=s.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new tt,lines:new Ft,glass:new tt,sections:[],lift:!s.open}),c.sections.push(s.id);let u=bc(e,s),d=Wt(a)>s.base+.05&&!s.dormer&&!u,h=e.filter(_=>_!==s&&bc(e,_)===s).flatMap(_=>Mm(s,_));for(let _ of i.settings.roof.windows??[]){let m=o.get(_.face),g=m&&m.section===s.id?kc(m,_):null;if(!g)continue;let w=g.map(x=>vi(s,x[0],x[2]));h.push({u0:Math.min(...w.map(x=>x[0])),u1:Math.max(...w.map(x=>x[0])),v0:Math.min(...w.map(x=>x[1])),v1:Math.max(...w.map(x=>x[1]))})}let f=u?Bh(u,s):s,p=null;if(u){let _=Xn(f),m=$i(u,{u0:0,u1:0,a:0,b:0}),g=w=>{let[x,b]=_.at(w,_.w/2),[y,M]=vi(u,x,b);return _o(m,y,M)??Sn(u).y(M)};p=g(_.u0)<=g(_.u1)?0:1}yM(c.solid,c.lines,f,vc(i,f,f.overhang??t),a.elevation,c.glass,d,h,p)}return[...r.values()].sort((s,a)=>+(s.lift===!1)-+(a.lift===!1))}function yM(i,e,t,n,r,o=i,s=!1,a=[],l=null){let c=Xn(t),u=Sn(t),d=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,h=Math.max(0,d.a),f=Math.max(0,d.b),p=c.w,_=c.u0-Math.max(0,d.u0),m=c.u1+Math.max(0,d.u1),g=(A,I,L)=>{let[z,B]=c.at(A,I);return[z,L-r,B]},w=new J(Gs),x=new J(Vs),b=new J(f0),y=(A,I)=>{for(let L=1;L+1<A.length;L++)i.tri(A[0],A[L],A[L+1],I)},M=[],E=[],v=[],S=null;if(t.shape==="flat"||t.shape==="parapet"){let A=t.eave_a,I=t.shape==="parapet",L=t.points&&t.points.length>=3?Cs(t,I?0:Math.max(0,Math.min(d.a,d.b,d.u0,d.u1))):I?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,p),c.at(c.u0,p)]:[c.at(_,-h),c.at(m,-h),c.at(m,p+f),c.at(_,p+f)];Zi(L)<0&&(L=[...L].reverse()),St(i,L,A-r,A-r+.25,Vs,Gs,{bottom:!0});for(let z=0;z<L.length;z++){let B=L[z],N=L[(z+1)%L.length];e.seg([B[0],A-r+.252,B[1]],[N[0],A-r+.252,N[1]],Er),e.seg([B[0],A-r,B[1]],[N[0],A-r,N[1]],Rr)}if(I){let z=U=>Zi(U)>=0?U:[...U].reverse(),B=z(L),N=_c(B,-.2),O=B.length;for(let U=0;U<O;U++){let Z=z([B[U],B[(U+1)%O],N[(U+1)%O],N[U]]);St(i,Z,A-r+.25,A-r+.65,Vs,Gs),e.seg([B[U][0],A-r+.652,B[U][1]],[B[(U+1)%O][0],A-r+.652,B[(U+1)%O][1]],Er),e.seg([N[U][0],A-r+.652,N[U][1]],[N[(U+1)%O][0],A-r+.652,N[(U+1)%O][1]],Er)}}}else{let A=$i(t,d);M=A.faces;for(let I of a)M=M.flatMap(L=>Sm(L,I));E=A.rim,v=A.ridges,S=A.gable}let T=!!t.open,P=new J(hM);for(let A of M){if(T){for(let I=1;I+1<A.length;I++)o.tri(g(A[0][0],A[0][1],A[0][2]),g(A[I][0],A[I][1],A[I][2]),g(A[I+1][0],A[I+1][1],A[I+1][2]),P);continue}y(A.map(([I,L,z])=>g(I,L,z)),w),y(A.map(([I,L,z])=>g(I,L,z-en)),x)}for(let A=0;A<E.length;A++){let[I,L,z]=E[A],[B,N,O]=E[(A+1)%E.length];T||y([g(I,L,z),g(B,N,O),g(B,N,O-en),g(I,L,z-en)],x),e.seg(g(I,L,z),g(B,N,O),T?Er:Rr)}if(T){t.points?.length?wM(i,e,t,r):MM(i,e,c,u,d,g,r);return}for(let[[A,I,L],[z,B,N]]of v)e.seg(g(A,I,L+.004),g(z,B,N+.004),Er);let k=t.base;if(s)return;let R=c.at((c.u0+c.u1)/2,p/2);if(t.points?.length){let A=$i(t,{u0:0,u1:0,a:0,b:0}).rim;A.forEach((I,L)=>{let z=A[(L+1)%A.length],B=I,N=t.shape==="flat"||t.shape==="parapet"?0:en,O=I[2]-N,U=z[2]-N;if(Math.max(O,U)<=k+.001)return;let Z=q=>[I[0]+(z[0]-I[0])*q,I[1]+(z[1]-I[1])*q,k+N];O<k&&(B=Z((k-O)/(U-O))),U<k&&(z=Z((k-O)/(U-O))),y([g(B[0],B[1],k),g(z[0],z[1],k),g(z[0],z[1],z[2]-N),g(B[0],B[1],B[2]-N)],b)});return}if(S){let A=SM(S,k-en),I=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(A.length>=3)for(let L of I)Fc(i,A.map(([z,B])=>g(L,z,B)),b,R,e)}if(t.shape!=="flat"&&t.shape!=="parapet")for(let A of[0,p]){let I=u.y(A)-en;I>k+.02&&Fc(i,[g(c.u0,A,k),g(c.u1,A,k),g(c.u1,A,I),g(c.u0,A,I)],b,R,e)}else if(t.eave_a>k+.02)for(let[A,I,L,z]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,p],[c.u1,p,c.u0,p],[c.u0,p,c.u0,0]])Fc(i,[g(A,I,k),g(L,z,k),g(L,z,t.eave_a),g(A,I,t.eave_a)],b,R,e)}function wM(i,e,t,n){let s=Xn(t),a=$i(t,{u0:0,u1:0,a:0,b:0});a.rim.forEach((l,c)=>{let u=a.rim[(c+1)%a.rim.length],d=s.at(l[0],l[1]),h=s.at(u[0],u[1]),f=h[0]-d[0],p=h[1]-d[1],_=Math.hypot(f,p);if(_<1e-6)return;let m=-p/_*.12/2,g=f/_*.12/2,w=[[d[0]+m,d[1]+g],[h[0]+m,h[1]+g],[h[0]-m,h[1]-g],[d[0]-m,d[1]-g]];Zi(w)<0&&w.reverse();let x=(M,E)=>l[2]+(u[2]-l[2])*((M-d[0])*f+(E-d[1])*p)/(_*_)-n-.03,b=i.p.length;St(i,w,0,.18,nd,id,{bottom:!0});for(let M=b;M<i.p.length;M+=3)i.p[M+1]+=x(i.p[M],i.p[M+2])-.18;e.seg([d[0],l[2]-n-.18,d[1]],[h[0],u[2]-n-.18,h[1]],Rr);let y=Math.max(1,Math.ceil(_/3.5));for(let M=0;M<y;M++){let E=M/y,v=d[0]+f*E,S=d[1]+p*E,T=x(v,S)-.18;T<=0||St(i,[[v-.12/2,S-.12/2],[v+.12/2,S-.12/2],[v+.12/2,S+.12/2],[v-.12/2,S+.12/2]],0,T,nd,id,{bottom:!0})}})}function MM(i,e,t,n,r,o,s){let a=t.w,l=.12,c=.16,u=r.a>0,d=r.b>0,h=r.u0>0,f=r.u1>0,p=(g,w,x,b,y,M)=>{let E=[t.at(g,x),t.at(w,x),t.at(w,b),t.at(g,b)],v=(E[1][0]-E[0][0])*(E[2][1]-E[0][1])-(E[2][0]-E[0][0])*(E[1][1]-E[0][1]);St(i,v<0?[...E].reverse():E,y-s,M-s,nd,id,{bottom:!0})},_=s;for(let[g,w]of[[0,u],[a,d]]){if(!w)continue;let x=n.y(g)-.03,b=g===0?0:a-l;p(t.u0,t.u1,b,b+l,x-c,x),e.seg(o(t.u0,g,x-c),o(t.u1,g,x-c),Rr)}for(let[g,w]of[[t.u0,h],[t.u1-l,f]])if(w)for(let x=0;x<6;x++){let b=a*x/6,y=a*(x+1)/6,M=Math.min(n.y(b),n.y(y))-.03;p(g,g+l,b,y,M-c,M)}let m=[];for(let[g,w]of[[0,u],[a-l,d]]){if(!w)continue;let x=t.u1-t.u0-l,b=Math.max(1,Math.ceil(x/3.5));for(let y=0;y<=b;y++){let M=t.u0+x*y/b;y===0&&!h||y===b&&!f||m.push([M,g])}}if(!u&&!d)for(let g of[t.u0,t.u1-l])(g===t.u0&&h||g!==t.u0&&f)&&m.push([g,a/2-l/2]);for(let[g,w]of m){let x=n.y(w+l/2)-.03-c;p(g,g+l,w,w+l,_,x)}}function SM(i,e){let t=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=e&&t.push([s,a]);let l=i[o+1];if(l&&(a-e)*(l[1]-e)<0){let c=(e-a)/(l[1]-a);t.push([s+(l[0]-s)*c,e])}}if(t.length<2)return[];let n=t[0],r=t[t.length-1];return r[1]>e&&t.push([r[0],e]),n[1]>e&&t.unshift([n[0],e]),t}var Hs={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Dc={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},$t=.2,TM=.01,Ws=8,Nc=.42,od=.42;function b0(i,e,t,n=[],r=[],o){let{walls:s,open:a}=bi(i.rooms,{exterior:e,interior:t},i.walls??[]),l=i.openings.map(R=>Is(i,R,s)).filter(R=>R!==null),c=(R,A,I)=>{let L=o?o(R,A):null;return L===null?I:Math.min(I,L)},u=(R,A,I,L,z)=>{if(!o)return z;let B=z,N=Math.max(2,Math.ceil((L-I)/.25)+1);for(let O=0;O<N;O++){let U=I+(L-I)*O/(N-1);B=Math.min(B,c(R[0]+A[0]*U,R[1]+A[1]*U,z))}return B},d=new tt(!0,!0),h=[],f=new Ft,p=[];for(let R of i.rooms){if(R.points.length<3)continue;let A=Xs(R.points),I=pt(i,R),L=xc(i,R,l);p.push(...L);let z=Dc[R.floor_material]??Dc.wood,B=new J(z.color),N=n.flatMap(he=>{if(Gm(he,A))return[Kh(he,.003)];if(!Rm(he))return[];let ie=vo(A,he);return ie.length>=3&&Math.abs(gi(ie))>.01?[Kh(Xs(ie),.003)]:[]});p.push(...N);let O=[...A,...N.flat()],U=d.count;for(let[he,ie,se]of gn(A,N)){let H=O[he],Y=O[ie],le=O[se],de=[[H,Y,le]];for(let j of L)de=de.flatMap(ce=>bo(ce,j));for(let j of de)for(let ce=1;ce+1<j.length;ce++){let[De,Ne,Pe]=[j[0],j[ce],j[ce+1]];d.tri([De[0],I,De[1]],[Pe[0],I,Pe[1]],[Ne[0],I,Ne[1]],B,B,B,[De[0],De[1],Pe[0],Pe[1],Ne[0],Ne[1]],Ze,z.tile)}}h.push({roomId:R.id,start:U,end:d.count,color:z.color});let Z=new J(Hs.slab),q=he=>{for(let ie=0;ie<he.length;ie++)for(let[se,H]of Oh(he[ie],he[(ie+1)%he.length],L))d.tri([se[0],I-$t,se[1]],[se[0],I,se[1]],[H[0],I,H[1]],Z),d.tri([se[0],I-$t,se[1]],[H[0],I,H[1]],[H[0],I-$t,H[1]],Z)};q(A);for(let he of N){q([...Xs(he)].reverse());for(let ie=0;ie<he.length;ie++){let se=he[ie],H=he[(ie+1)%he.length];f.seg([se[0],I+.006,se[1]],[H[0],I+.006,H[1]],si),f.seg([se[0],I-$t,se[1]],[H[0],I-$t,H[1]],ai)}}}let _=new Map,m=[],g=new Map;for(let R of s){let A="interior",I=null;if(R.exterior){let z=R.b[0]-R.a[0],B=R.b[1]-R.a[1],N=Math.hypot(z,B)||1,O=[B/N,-z/N],U=(Math.round(Math.atan2(O[1],O[0])/(2*Math.PI)*Ws)%Ws+Ws)%Ws;A=`s${U}`;let Z=U/Ws*2*Math.PI;I=[Math.cos(Z),Math.sin(Z)]}let L=_.get(A);L===void 0&&(L=m.length,_.set(A,L),m.push(I)),g.set(R,L)}let w=new Map,x=[];for(let R of i.openings){let A=xr(R,i.rooms,i.walls??[]);if(!A)continue;let I=yr(s,R,A);if(!I)continue;let{wall:L,s:z}=I,B=Bc([L.b[0]-L.a[0],L.b[1]-L.a[1]]),N=Math.hypot(L.b[0]-L.a[0],L.b[1]-L.a[1]),O=Math.min(R.width,N),U=Math.max(0,Math.min(N-O,z-O/2)),Z=A.room.points,q=L.free?B[0]*(Z[1][0]-Z[0][0])+B[1]*(Z[1][1]-Z[0][1])>0:L.roomLeft===R.room_id,he=[-B[1],B[0]],ie=q?he:[-he[0],-he[1]],se=l.find(Ve=>Ve.opening.id===R.id),H=se?.threshold??pt(i,A.room),Y=se?.room??A.room,le=Y.wall_offset!=null||Y.floor_offset!=null?pt(i,Y):H,de=Math.min(se?.ceiling??1/0,un(i,L).top);if(se?.other&&de-H<.12)continue;let j=Math.min(u(L.a,B,U,U+O,de)-.02,le+R.sill+R.height),ce=Math.min((se?.stair?Em(se):H)+R.sill,j-.1),De=[ie[1],-ie[0]],Ne=B[0]*De[0]+B[1]*De[1]>0,Pe={opening:R,bucket:g.get(L),start:[L.a[0]+B[0]*U,L.a[1]+B[1]*U],axis:B,width:O,toRoom:ie,faceRoom:q?L.left:L.right,faceOut:q?L.right:L.left,sill:ce,top:j,hingeAtStart:R.hinge==="left"===Ne,exterior:L.exterior};x.push(Pe);let ke=w.get(L);ke||w.set(L,ke=[]),ke.push({s0:U,s1:U+O,sill:ce,top:j,info:Pe})}let b=Math.min(i.cut_height,Wt(i)-i.elevation),y=new tt;for(let R of s){let A=g.get(R),I=Bc([R.b[0]-R.a[0],R.b[1]-R.a[1]]),L=(w.get(R)??[]).sort((ie,se)=>ie.s0-se.s0),z=un(i,R),B=z.top,N=[],O=[-1/0,...new Set(L.flatMap(ie=>[ie.s0,ie.s1])).values(),1/0].sort((ie,se)=>ie-se);for(let ie=0;ie+1<O.length;ie++){let se=O[ie],H=O[ie+1];if(H-se<1e-6)continue;let Y=Number.isFinite(se)&&Number.isFinite(H)?(se+H)/2:Number.isFinite(se)?se+1:H-1,le=L.filter(ce=>ce.s0<Y&&ce.s1>Y).map(ce=>[ce.sill,ce.top]).sort((ce,De)=>ce[0]-De[0]),de=[],j=z.bottom-$t;for(let[ce,De]of le)ce>j+1e-4&&de.push([j,ce<1e-4?-TM:ce]),j=Math.max(j,De);B>j+1e-4&&de.push([j,B]),N.push({t0:se,t1:H,ranges:de})}let U=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),Z=o&&u(R.a,I,0,U,B)<B-.001,q=Z?N.flatMap(ie=>{let se=Math.max(ie.t0,-.5),H=Math.min(ie.t1,U+.5),Y=Math.max(1,Math.ceil((H-se)/.3));return Array.from({length:Y},(le,de)=>({t0:de===0?ie.t0:se+(H-se)*de/Y,t1:de===Y-1?ie.t1:se+(H-se)*(de+1)/Y,ranges:ie.ranges,inner0:de>0,inner1:de<Y-1}))}):N.map(ie=>({...ie,inner0:!1,inner1:!1})),he=ie=>(ie[0]-R.a[0])*I[0]+(ie[1]-R.a[1])*I[1];for(let ie of q){let se=EM(R.footprint,R.a,I,ie.t0,ie.t1);if(se.length<3)continue;let H=(de,j)=>Math.abs(he(de)-j)<1e-4,Y=(de,j)=>ie.inner0&&H(de,ie.t0)&&H(j,ie.t0)||ie.inner1&&H(de,ie.t1)&&H(j,ie.t1),le=Z?Math.min(...se.map(([de,j])=>c(de,j,B))):B;for(let[de,j]of ie.ranges){let ce=Math.min(j,Z?Math.max(...se.map(([ke,Ve])=>c(ke,Ve,B))):j);if(ce-de<1e-4||le-de<.01)continue;let De=de>.01,Ne=Z&&j>le,Pe=(ke,Ve)=>Math.min(j,c(ke,Ve,B));if(de<b-1e-6){let ke=ce>b+1e-6?Pm+A:wr+A,Ve=Ne&&le<b?(at,wt)=>Math.min(b,Pe(at,wt)):Math.min(ce,b);St(y,se,de,Ve,Hs.wall,Hs.wallTop,{aoFrom:0,bottom:De,fold:wr+A,topFold:ke,skipSide:Y})}ce>b+1e-6&&le>b+1e-6&&St(y,se,Math.max(de,b),Ne?Pe:ce,Hs.wall,Hs.wallTop,{aoFrom:0,fold:A,bottom:De&&de>=b,skipSide:Y})}}}let M=s.flatMap(R=>R.footprint),E=PM(s,M),v=new Ft;v.p.push(...f.p),v.c.push(...f.c),v.f.push(...f.f);for(let R of l){let A=R.stair;if(!A)continue;let I=(B,N)=>[R.start[0]+R.axis[0]*B+A.toward[0]*N,R.start[1]+R.axis[1]*B+A.toward[1]*N],L=Dc[A.room.floor_material]?.color??Dc.wood.color;for(let B=0;B<A.count;B++){let N=A.face+A.depth*B/A.count,O=A.face+A.depth*(B+1)/A.count,U=A.recess?R.low+(R.high-R.low)*(B+1)/A.count:R.high-(R.high-R.low)*B/A.count,Z=Xs([I(0,N),I(R.width,N),I(R.width,O),I(0,O)]);St(y,Z,R.low-.02,U,L,L,{bottom:!0});let q=I(0,N),he=I(R.width,N);v.seg([q[0],U+.003,q[1]],[he[0],U+.003,he[1]],si)}let z=A.offset===0?-R.wall.left-R.wall.right:A.back;if(A.face>z+1e-6){let B=Xs([I(0,z),I(R.width,z),I(R.width,A.face),I(0,A.face)]);St(y,B,R.threshold-.02,R.threshold,L,L,{bottom:!0})}}let S=(R,A)=>(w.get(R)??[]).filter(A);for(let R of E.edges){let A=g.get(R.wall),I=un(i,R.wall).bottom;for(let[z,B]of zc(R,S(R.wall,N=>N.sill<=I+.005)))v.seg([z[0],I+.004,z[1]],[B[0],I+.004,B[1]],wc);for(let[z,B]of zc(R,S(R.wall,N=>N.sill<b&&N.top>b)))v.seg([z[0],b,z[1]],[B[0],b,B[1]],Uh,Mc+A);let L=un(i,R.wall).top;for(let[z,B]of zc(R,S(R.wall,N=>N.top>=L-.021))){if(!o){v.seg([z[0],L,z[1]],[B[0],L,B[1]],si,L<=b+1e-6?wr+A:A);continue}let N=Math.max(1,Math.ceil(Math.hypot(B[0]-z[0],B[1]-z[1])/.3));for(let O=0;O<N;O++){let U=[z[0]+(B[0]-z[0])*O/N,z[1]+(B[1]-z[1])*O/N],Z=[z[0]+(B[0]-z[0])*(O+1)/N,z[1]+(B[1]-z[1])*(O+1)/N],q=c(U[0],U[1],L),he=c(Z[0],Z[1],L);v.seg([U[0],q,U[1]],[Z[0],he,Z[1]],si,Math.max(q,he)<=b+1e-6?wr+A:A)}}}for(let R of E.corners){let A=c(R.p[0],R.p[1],un(i,R.wall).top);v.segSplit([R.p[0],un(i,R.wall).bottom+.004,R.p[1]],[R.p[0],A,R.p[1]],ai,Math.min(b,A),g.get(R.wall))}for(let R of w.values())for(let A of R)AM(v,A,b);let T=kM(E.edges,i,w);Um(T,i,s,x,[...n,...p],s.map(R=>g.get(R)??0));let P=new tt;Dm(y,v,i,P);for(let R of r)rd(y,v,R.face,R.field,i.elevation);let k=[];for(let R of i.furniture){if(am(R.type))continue;let A=y.count,I=v.p.length/6,L=Ct(i,R),z=mn(i,R.x,R.z),B=T.p.length;Tc(y,v,T,R,L-z);for(let N=A*9+1;N<y.p.length;N+=3)y.p[N]+=z;for(let N=I*6+1;N<v.p.length;N+=3)v.p[N]+=z;for(let N=B+1;N<T.p.length;N+=3)T.p[N]+=z;(L+R.h>b+.05||R.rotation_x||R.rotation_z)&&(Sc(y,A,b,Ls),km(v,I,b,Ls)),k.push({id:R.id,start:A,end:y.count})}return{floor:d.geometry(),roomTris:h,holes:p,walls:y.geometry(),water:P.geometry(),lines:v.geometry(),shadow:T.geometry(),buckets:m,openings:x,walls2d:s,openRooms:a,wallBuckets:s.map(R=>g.get(R)),furnitureTris:k,roofUnder:o}}function AM(i,e,t){let{info:n}=e,r=n.bucket,o=(l,c,u)=>[n.start[0]+n.axis[0]*(l-e.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-e.s0)+n.toRoom[1]*c],s=l=>l>t+1e-6?r:Ze,a=e.sill<0?e.sill:Math.max(e.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[e.s0,e.s1])i.segSplit(o(c,l,a),o(c,l,e.top),ai,t,r);i.seg(o(e.s0,l,e.top),o(e.s1,l,e.top),ai,s(e.top)),Math.abs(e.sill)>.01&&i.seg(o(e.s0,l,e.sill),o(e.s1,l,e.sill),ai,s(e.sill))}for(let l of[e.s0,e.s1])i.seg(o(l,n.faceRoom,e.top),o(l,-n.faceOut,e.top),ai,s(e.top)),Math.abs(e.sill)>.01&&i.seg(o(l,n.faceRoom,e.sill),o(l,-n.faceOut,e.sill),ai,s(e.sill)),e.sill<t&&e.top>t&&i.seg(o(l,n.faceRoom,t),o(l,-n.faceOut,t),Uh,Mc+r)}function EM(i,e,t,n,r){let o=a=>(a[0]-e[0])*t[0]+(a[1]-e[1])*t[1],s=i;return Number.isFinite(n)&&(s=m0(s,a=>o(a)-n)),Number.isFinite(r)&&(s=m0(s,a=>r-o(a))),s}function m0(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=e(r),a=e(o);if(s>=0&&t.push(r),s>=0!=a>=0){let l=s/(s-a);t.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return t}var g0=i=>Math.round(i*1e3),Ks=i=>`${g0(i[0])},${g0(i[1])}`,_0=(i,e)=>{let t=Ks(i),n=Ks(e);return t<n?`${t}|${n}`:`${n}|${t}`};function RM(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let d of e){let h=((d[0]-r[0])*s+(d[1]-r[1])*a)/l;if(h<=1e-6||h>=1-1e-6)continue;Math.abs((d[0]-r[0])*a-(d[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(h)}c.sort((d,h)=>d-h);let u=r;for(let d of c){let h=[r[0]+s*d,r[1]+a*d];Ks(h)!==Ks(u)&&t.push([u,h]),u=h}t.push([u,o])}return t}function PM(i,e){let t=i.map(l=>({wall:l,edges:RM(l.footprint,e)})),n=new Map;for(let{edges:l}of t)for(let[c,u]of l){let d=_0(c,u);n.set(d,(n.get(d)??0)+1)}let r=[],o=new Map,s=(l,c,u)=>{let d=Ks(l),h=o.get(d);h||o.set(d,h={p:l,wall:c,d:[]}),h.d.push(u)};for(let{wall:l,edges:c}of t)for(let[u,d]of c){if(n.get(_0(u,d))!==1)continue;let h=Math.hypot(d[0]-u[0],d[1]-u[1]);if(h<1e-4)continue;r.push({a:u,b:d,wall:l});let f=[(d[0]-u[0])/h,(d[1]-u[1])/h];s(u,l,f),s(d,l,f)}let a=[];for(let{p:l,wall:c,d:u}of o.values())u.some(d=>u.some(h=>Math.abs(d[0]*h[1]-d[1]*h[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function zc(i,e){if(!e.length)return[[i.a,i.b]];let t=Bc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Bc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(t[0]*n[0]+t[1]*n[1])<.99)return[[i.a,i.b]];let r=d=>(d[0]-i.wall.a[0])*t[0]+(d[1]-i.wall.a[1])*t[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let d of e)c=c.flatMap(([h,f])=>{if(d.s1<=h||d.s0>=f)return[[h,f]];let p=[];return d.s0>h&&p.push([h,d.s0]),d.s1<f&&p.push([d.s1,f]),p});let u=d=>{let h=(d-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*h,i.a[1]+(i.b[1]-i.a[1])*h]};return c.filter(([d,h])=>h-d>1e-4).map(([d,h])=>o<=s?[u(d),u(h)]:[u(h),u(d)])}function kM(i,e,t){let n=new tt,r=new J(od,od,od),o=new J(1,1,1);for(let s of i){let a=s.b[0]-s.a[0],l=s.b[1]-s.a[1],c=Math.hypot(a,l)||1,u=[(s.a[0]+s.b[0])/2+l/c*.05,(s.a[1]+s.b[1])/2-a/c*.05],d=e.rooms.find(p=>Be(u,p.points)),h=pt(e,d),f=h+.002;for(let[p,_]of zc(s,(t.get(s.wall)??[]).filter(m=>m.sill<=h+.005))){let m=_[0]-p[0],g=_[1]-p[1],w=Math.hypot(m,g);if(w<.05)continue;let x=[g/w,-m/w],b=[(p[0]+_[0])/2+x[0]*.05,(p[1]+_[1])/2+x[1]*.05];if(!e.rooms.some(E=>E.points.length>=3&&Be(b,E.points)))continue;let y=[p[0]+x[0]*Nc,p[1]+x[1]*Nc],M=[_[0]+x[0]*Nc,_[1]+x[1]*Nc];n.tri([p[0],f,p[1]],[y[0],f,y[1]],[M[0],f,M[1]],r,o,o),n.tri([p[0],f,p[1]],[M[0],f,M[1]],[_[0],f,_[1]],r,o,r)}}return n}function v0(i,e){let t=e.furniture.filter(o=>o.type==="stairwell").map(Ki),n=i.filter(o=>o.elevation<e.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return Xh(t);let r=n.furniture.filter(o=>(om.has(o.type)||_t(o.type)?.hole)&&n.elevation+Ct(n,o)+o.h>=e.elevation+mn(e,o.x,o.z)-.3).map(Ki);return Xh([...t,...r])}function Bc(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function Xs(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}var CM=new J(1516340),IM=new J(527897),sd=new J(1779256),Ys=new J(1120808),LM=new J(4163256),x0=new J(5995161),FM=new J(2240842),DM=new J(1318704),NM=.35,wo=.8,zM=.2,y0=.1;function BM(i,e){if(i.settings.terrain?.earth===!1||e.elevation>.3)return!1;let t=w0(i,e);return!!t&&t.some(([n,r])=>fc(n,r)-e.elevation>-.15)}function w0(i,e){return e.rooms.some(t=>t.points.length>=3)?ym(e.rooms,e.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function M0(i,e,t,n=!1){if(i.settings.terrain?.earth===!1||e.elevation>.3)return null;let r=w0(i,e);if(!r)return null;let o=(p,_)=>fc(p,_)-e.elevation,s=n&&r.some(([p,_])=>o(p,_)<-$t-.03);if(!s&&!BM(i,e))return null;let a=e.height,l=-NM,c=(p,_)=>Math.min(a,fc(p,_)-e.elevation),u=new tt,d=new tt,h=new Ft,f=(p,_,m,g,w,x,b,y)=>{let M=[_[0]-p[0],_[2]-p[2]];-M[1]*w[0]+M[0]*w[1]>0?(y.tri(p,_,m,x,x,b),y.tri(p,m,g,x,b,b)):(y.tri(p,m,_,x,b,x),y.tri(p,g,m,x,b,b))};for(let p=0;p<r.length;p++){let _=r[p],m=r[(p+1)%r.length],g=Math.hypot(m[0]-_[0],m[1]-_[1]);if(g<1e-4)continue;let w=[(m[0]-_[0])/g,(m[1]-_[1])/g],x=[w[1],-w[0]],b=[(_[0]+m[0])/2+x[0]*.05,(_[1]+m[1])/2+x[1]*.05];Be(b,r)&&(x=[-x[0],-x[1]]);let y=(T,P=.012)=>[_[0]+w[0]*T+x[0]*P,_[1]+w[1]*T+x[1]*P],M=[];for(let T of t){if(T.opening.type!=="window"||!T.exterior)continue;let P=T.start[0]+T.axis[0]*(T.width/2)-T.toRoom[0]*T.faceOut,k=T.start[1]+T.axis[1]*(T.width/2)-T.toRoom[1]*T.faceOut,R=(P-_[0])*w[0]+(k-_[1])*w[1];Math.abs((P-_[0])*x[0]+(k-_[1])*x[1])>.08||R<-.05||R>g+.05||T.sill>=c(P,k)-.05||M.push({s0:Math.max(0,R-T.width/2-y0),s1:Math.min(g,R+T.width/2+y0),bottom:Math.max(l+.05,T.sill-zM)})}let E=new Set([0,g]);for(let T of M)E.add(T.s0),E.add(T.s1);let v=[...E].sort((T,P)=>T-P),S=[];for(let T=0;T<v.length-1;T++){let P=Math.max(1,Math.ceil((v[T+1]-v[T])/.5));for(let k=0;k<P;k++)S.push(v[T]+(v[T+1]-v[T])*k/P)}S.push(g);for(let T=0;T<S.length-1;T++){let P=S[T],k=S[T+1],R=M.find(Z=>P>=Z.s0-1e-6&&k<=Z.s1+1e-6),A=y(P),I=y(k),L=c(A[0],A[1]),z=c(I[0],I[1]),B=R?Math.min(L,R.bottom):L,N=R?Math.min(z,R.bottom):z;if(B>l+.01||N>l+.01){let Z=Math.min(B,l),q=Math.min(N,l);f([A[0],Z,A[1]],[I[0],q,I[1]],[I[0],Math.max(N,l),I[1]],[A[0],Math.max(B,l),A[1]],x,IM,CM,u)}let O=o(A[0],A[1]),U=o(I[0],I[1]);if(s&&(O<-$t-.01||U<-$t-.01)&&f([A[0],Math.min(O,-$t),A[1]],[I[0],Math.min(U,-$t),I[1]],[I[0],-$t,I[1]],[A[0],-$t,A[1]],x,DM,FM,u),L>l||z>l||s&&(O<-$t||U<-$t)){let Z=s?Math.min(O,Math.max(L,l)):Math.max(L,l),q=s?Math.min(U,Math.max(z,l)):Math.max(z,l);h.seg([A[0],Z+.004,A[1]],[I[0],q+.004,I[1]],LM)}}for(let T of M){let P=y(T.s0,0),k=y(T.s1,0),R=[P[0]+x[0]*wo,P[1]+x[1]*wo],A=[k[0]+x[0]*wo,k[1]+x[1]*wo],I=U=>c(U[0],U[1]),L=T.bottom,z=(U,Z)=>[U[0],Z,U[1]];d.tri(z(P,L),z(k,L),z(A,L),Ys),d.tri(z(P,L),z(A,L),z(R,L),Ys);let B=(U,Z)=>{d.tri(z(U,L),z(Z,L),z(Z,I(Z)),Ys,Ys,sd),d.tri(z(U,L),z(Z,I(Z)),z(U,I(U)),Ys,sd,sd)};B(P,R),B(k,A),B(R,A);let N=U=>[U[0],I(U)+.01,U[1]];for(let[U,Z]of[[P,k],[k,A],[A,R],[R,P]])h.seg(N(U),N(Z),x0);let O=Math.max(3,Math.round((T.s1-T.s0)/.12));for(let U=1;U<O;U++){let Z=U/O,q=[P[0]+(k[0]-P[0])*Z,P[1]+(k[1]-P[1])*Z];h.seg(N(q),N([q[0]+x[0]*wo,q[1]+x[1]*wo]),x0)}}}return u.count||d.count?{earth:u,wells:d,lines:h}:null}var S0=i=>Math.round(i*1e3)/1e3;function OM(i,e,t,n){let r=Math.hypot(n[0]-t[0],n[1]-t[1]);if(r<.01)return!1;let o=[(n[0]-t[0])/r,(n[1]-t[1])/r],s=l=>Math.abs(-(l[0]-t[0])*o[1]+(l[1]-t[1])*o[0]),a=l=>(l[0]-t[0])*o[0]+(l[1]-t[1])*o[1];return i.rooms.some(l=>l.id!==e&&l.points.some((c,u)=>{let d=l.points[(u+1)%l.points.length];return s(c)>.02||s(d)>.02?!1:Math.min(r,Math.max(a(c),a(d)))-Math.max(0,Math.min(a(c),a(d)))>.05}))}function T0(i,e,t,n,r,o=.05){let s=i.rooms.find(h=>h.points.length>=3&&Be([e.x,e.z],h.points));if(!s)return[t,n];let a=s.points,l=Mn(a)>=0?1:-1,c=Ki({...e}),u=t,d=n;for(let h=0;h<2;h++){let f=Ki({...e,x:u,z:d});for(let p=0;p<a.length;p++){let _=a[p],m=a[(p+1)%a.length],g=Math.hypot(m[0]-_[0],m[1]-_[1]);if(g<.05)continue;let w=[(m[0]-_[0])/g,(m[1]-_[1])/g],x=[-w[1]*l,w[0]*l],b=OM(i,s.id,_,m)?r/2:0,y=0;f.forEach((M,E)=>{let v=(M[0]-_[0])*w[0]+(M[1]-_[1])*w[1];if(v<-.01||v>g+.01)return;let S=(M[0]-_[0])*x[0]+(M[1]-_[1])*x[1]-b,T=c[E];(T[0]-_[0])*x[0]+(T[1]-_[1])*x[1]-b<-o||S<y&&(y=S)}),y<-1e-4&&(u-=x[0]*y,d-=x[1]*y)}}return[S0(u),S0(d)]}var UM=500,A0=.12,E0=1.35,VM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Oc=class{view={target:new V,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(e,t,n){this.el=e,this.camera=t,this.events=n;let r=(o,s,a)=>{e.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[e,t]of this.listeners)this.el.removeEventListener(e,t)}get active(){return this.pointers.size>0||this.flight!==null}update(e){let t=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,d=Math.min(1,(e-c)/u),h=VM(d);this.view.target.lerpVectors(a.target,l.target,h),this.view.radius=a.radius+(l.radius-a.radius)*h,this.view.theta=a.theta+(l.theta-a.theta)*h,this.view.phi=a.phi+(l.phi-a.phi)*h,d>=1&&(this.flight=null),t=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=ad(this.view.phi+this.velocity.phi,A0,E0),this.velocity.theta*=.9,this.velocity.phi*=.9,t=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),t}flyTo(e,t=700){let n={...this.view,target:this.view.target.clone()},r=e.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let o={target:(e.target??n.target).clone(),radius:e.radius??n.radius,theta:r,phi:e.phi??n.phi};this.velocity={theta:0,phi:0},t<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:n,to:o,start:performance.now(),duration:t},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(e){let t=this.el.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}onDown(e){if(this.el.setPointerCapture(e.pointerId),this.pointers.size===0&&e.button===0&&this.events.grab?.(...this.local(e))){this.grabbing=!0,this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:e.clientX,y:e.clientY,time:performance.now(),moved:!1};let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},UM)}else this.down=null,this.pinch=this.pinchState()}onMove(e){let t=this.pointers.get(e.pointerId);if(!t)return;if(this.grabbing){this.events.drag?.(...this.local(e));return}let n=e.clientX-t.x,r=e.clientY-t.y;if(this.swiping){this.events.swipeMove?.(e.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&t.button===0&&!e.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,e.clientX-this.down.x,e.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(e.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){t.x=e.clientX,t.y=e.clientY;return}let o=t.type==="mouse";if(o&&!this.leftDragTurns&&t.button===0){t.x=e.clientX,t.y=e.clientY;return}if((t.button===1||t.button===2||e.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=ad(this.view.phi+c,A0,E0),this.velocity={theta:l,phi:c}}t.x=e.clientX,t.y=e.clientY}else{t.x=e.clientX,t.y=e.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(e){if(this.pointers.has(e.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(e.pointerId),this.events.drop?.();return}if(this.pointers.delete(e.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&e.type==="pointerup"&&performance.now()-this.down.time<400){let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(e){e.preventDefault(),this.flight=null,this.zoom(Math.exp(e.deltaY*(e.deltaMode===1?.05:.0015))),this.events.change()}zoom(e){this.view.radius=ad(this.view.radius*e,this.minRadius,this.maxRadius)}pan(e,t){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new V(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new V(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-e*r),this.view.target.addScaledVector(s,t*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t.x-n.x,t.y-n.y),mid:[(t.x+n.x)/2,(t.y+n.y)/2]}}};function ad(i,e,t){return Math.min(t,Math.max(e,i))}function er(i,e,t="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=e.standing,n.uniforms.uGlass=e.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${t}`,i}function Uc(i,e,t,n){let r=Math.min(1,Math.max(0,(i/e-.62)/.3)),o=t?1:.94*r;return{opacity:o,lift:t?0:(1-(n??o))*2.2}}function R0(i,e){return i.onBeforeCompile=t=>{t.uniforms.uRoofDirection=e,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform vec3 uRoofDirection;
varying float vRoofGlass;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 roofNormal = mat3(modelMatrix) * normal;
      if (roofNormal.y < 0.0) roofNormal = -roofNormal;
      float roofHorizontal = length(roofNormal.xz);
      vRoofGlass = roofHorizontal < 0.000001 ? smoothstep(-0.15, 0.15, uRoofDirection.y) : smoothstep(0.1, 0.4, dot(roofNormal.xz / roofHorizontal, uRoofDirection.xz));`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vRoofGlass;`).replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075), vRoofGlass);
      diffuseColor.a *= mix(1.0, 0.2, vRoofGlass);`)},i.customProgramCacheKey=()=>"fp3d-roof-glass",i}function P0(i,e,t,n,r,o,s=[],a){if(n.elevation<=2||r>=.97)return;let l=n.elevation*Math.PI/180,c=(n.azimuth+(e.settings.north??0))*Math.PI/180,u=[Math.sin(c),-Math.cos(c)],d=[u[0]*Math.cos(l),Math.sin(l),u[1]*Math.cos(l)],h=Math.min(1,n.elevation/12)*(1-.8*r),f=1/Math.tan(l),p=new Map(Qi(e).map(_=>[_.key,_]));for(let _ of e.settings.roof.windows??[]){let m=p.get(_.face);if(!m)continue;let g=Cc(e,m,_);if(g?.floor.id!==t.id)continue;let w=g.corners,x=m.n.reduce((B,N,O)=>B+N*d[O],0);if(x<.05)continue;let b=Math.min(1,Math.max(0,o.get(_.id)?.cover??0));if(b>=.99)continue;let y=[w.reduce((B,N)=>B+N[0],0)/4,w.reduce((B,N)=>B+N[2],0)/4],M=t.rooms.find(B=>Be(y,B.points));if(!M)continue;let E=t.rooms.indexOf(M),v=t.rooms.filter((B,N)=>B.id===M.id||a&&a[N]===a[E]),S=pt(t,M),T=(B,N,O)=>B.map((U,Z)=>U+(N[Z]-U)*O),P=(B,N)=>{let O=T(T(w[0],w[1],B),T(w[3],w[2],B),N*(1-b)),U=Math.min(7,(O[1]-t.elevation-S)*f);return[O[0]-u[0]*U,S+.02,O[2]-u[1]*U]},k=(B,N)=>Math.hypot(...B.map((O,U)=>O-N[U])),R=Math.max(1,Math.ceil(k(P(0,0),P(1,0))/.3)),A=Math.max(1,Math.ceil(k(P(0,0),P(0,1))/.25)),I=.14*h*Math.min(1,x*1.5),L=new J(I,.82*I,.55*I),z=L.clone().multiplyScalar(.45);for(let B=0;B<A;B++)for(let N=0;N<R;N++){let O=N/R,U=(N+1)/R,Z=B/A,q=(B+1)/A,he=P((O+U)/2,(Z+q)/2),ie=[he[0],he[2]];if(!v.some(ce=>Be(ie,ce.points))||s.some(ce=>Be(ie,ce)))continue;let se=P(O,Z),H=P(U,Z),Y=P(U,q),le=P(O,q),de=L.clone().lerp(z,Z),j=L.clone().lerp(z,q);i.tri(se,H,Y,de,de,j),i.tri(se,Y,le,de,j,j)}}}function k0(i,e){return Math.hypot(e[0]-i[0],e[1]-i[1],e[2]-i[2])}function C0(i,e,t=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=k0(o,s),c=k0(s,a),u=Math.min(e,l*.45,c*.45),d=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],h=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(u<.005||d[0]*h[0]+d[1]*h[1]+d[2]*h[2]<-.999){n.push(s);continue}let f=[s[0]+d[0]*u,s[1]+d[1]*u,s[2]+d[2]*u],p=[s[0]+h[0]*u,s[1]+h[1]*u,s[2]+h[2]*u];for(let _=0;_<=t;_++){let m=_/t,g=(1-m)*(1-m),w=2*(1-m)*m,x=m*m;n.push([g*f[0]+w*s[0]+x*p[0],g*f[1]+w*s[1]+x*p[1],g*f[2]+w*s[2]+x*p[2]])}}return n.push(i[i.length-1]),n}var I0=new J(7568261),L0=new J(4869974),GM=new J(3116287),F0=new J(3948872),ld=Pr([.35,.85,.4]),D0=10;function Pr(i){let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]}function qs(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function N0(i){let e=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],t=Pr(qs(i,e));return[t,Pr(qs(i,t))]}function xi(i,e){let t=.5+.5*Math.max(0,e[0]*ld[0]+e[1]*ld[1]+e[2]*ld[2]);return i.clone().multiplyScalar(t)}function Mo(i,e,t,n,r,o=!1){let s=Pr([t[0]-e[0],t[1]-e[1],t[2]-e[2]]),[a,l]=N0(s),c=(u,d)=>{let h=d/D0*Math.PI*2,f=[a[0]*Math.cos(h)+l[0]*Math.sin(h),a[1]*Math.cos(h)+l[1]*Math.sin(h),a[2]*Math.cos(h)+l[2]*Math.sin(h)];return{p:[u[0]+f[0]*n,u[1]+f[1]*n,u[2]+f[2]*n],n:f}};for(let u=0;u<D0;u++){let d=c(e,u),h=c(e,u+1),f=c(t,u),p=c(t,u+1);i.tri(d.p,p.p,f.p,xi(r,d.n),xi(r,p.n),xi(r,f.n)),i.tri(d.p,h.p,p.p,xi(r,d.n),xi(r,h.n),xi(r,p.n)),o&&(i.tri([...e],h.p,d.p,xi(r,[-s[0],-s[1],-s[2]])),i.tri([...t],f.p,p.p,xi(r,s)))}}function HM(i,e,t,n,r,o,s,a){let l=Pr(qs(t,n)),c=(d,h,f)=>[e[0]+t[0]*d*r+n[0]*h*o+l[0]*f*s,e[1]+t[1]*d*r+n[1]*h*o+l[1]*f*s,e[2]+t[2]*d*r+n[2]*h*o+l[2]*f*s],u=[];for(let[d,h]of[[t,.5],[[-t[0],-t[1],-t[2]],-.5]])u.push([d,[c(h,-.5,-.5),c(h,.5,-.5),c(h,.5,.5),c(h,-.5,.5)]]);for(let[d,h]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])u.push([d,[c(-.5,h,-.5),c(.5,h,-.5),c(.5,h,.5),c(-.5,h,.5)]]);for(let[d,h]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])u.push([d,[c(-.5,-.5,h),c(.5,-.5,h),c(.5,.5,h),c(-.5,.5,h)]]);for(let[d,h]of u){let f=xi(a,d);i.tri(h[0],h[1],h[2],f),i.tri(h[0],h[2],h[3],f),i.tri(h[0],h[2],h[1],f),i.tri(h[0],h[3],h[2],f)}}function z0(i,e){if(e.points.length<2)return;let t=e.radius,n=C0(e.points,t*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?I0.clone().multiplyScalar(.55):I0;Mo(i,o,s,t,a,r===1||r===n.length-1)}for(let r of e.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);Mo(i,s,a,t*1.22,L0,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);Mo(i,s,a,t*1.08,e.water?new J(...e.water).multiplyScalar(.9):new J(10475240),!0);for(let l of o(.08)){let[c,u]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Mo(i,c,u,t*1.3,L0,!0)}}else{let[s,a]=o(.055);Mo(i,s,a,t*1.4,F0,!0);let[l]=N0(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],u=[r.p[0]+c[0]*t*2,r.p[1]+c[1]*t*2,r.p[2]+c[2]*t*2];Mo(i,[r.p[0]+c[0]*t*1.3,r.p[1]+c[1]*t*1.3,r.p[2]+c[2]*t*1.3],u,t*.35,F0,!0);let d=r.open===!1?Pr(qs(r.dir,c)):r.dir,h=Pr(qs(d,c)),f=[u[0]+d[0]*.045,u[1]+d[1]*.045,u[2]+d[2]*.045];HM(i,f,d,h,.1,.028,.012,GM)}}}var cd=1.62,WM=.2,ud=class{solids=[];doors=[];rooms;walls;building;floor;constructor(e,t){this.building=e,this.floor=t;let n=e.settings;this.rooms=t.rooms.filter(s=>s.points.length>=3);let r=bi(this.rooms,{exterior:n.wall_exterior,interior:n.wall_interior},t.walls??[]);this.walls=r.walls;let o=new Map;for(let s of t.openings){if(!(s.type!=="window"||s.sill<.1))continue;let l=xr(s,t.rooms,t.walls??[]);if(!l)continue;let c=yr(this.walls,s,l);if(!c)continue;let u=o.get(c.wall)??[];u.push([c.s-s.width/2+.05,c.s+s.width/2-.05]),o.set(c.wall,u);let d=c.wall,h=d.b[0]-d.a[0],f=d.b[1]-d.a[1],p=Math.hypot(h,f)||1,_=h/p,m=f/p,g=[d.a[0]+_*c.s,d.a[1]+m*c.s],w=d.left+.45,x=d.right+.45;this.doors.push({centre:g,p:[[g[0]-m*w,g[1]+_*w],[g[0]+m*x,g[1]-_*x]]})}for(let s of this.walls){if(s.height!==void 0&&s.height<.9)continue;let a=s.b[0]-s.a[0],l=s.b[1]-s.a[1],c=Math.hypot(a,l);c<1e-6||this.solids.push({a:s.a,u:[a/c,l/c],len:c,left:s.left,right:s.right,gaps:o.get(s)??[]})}}blocked(e,t=WM){for(let n of this.solids){let r=e[0]-n.a[0],o=e[1]-n.a[1],s=r*n.u[0]+o*n.u[1];if(s<-t||s>n.len+t)continue;let a=-r*n.u[1]+o*n.u[0];if(!(a>n.left+t||a<-n.right-t)&&!n.gaps.some(([l,c])=>s>l+t*.6&&s<c-t*.6))return!0}return!1}clear(e,t){let n=Math.hypot(t[0]-e[0],t[1]-e[1]),r=Math.max(1,Math.ceil(n/.08));for(let o=1;o<=r;o++){let s=o/r;if(this.blocked([e[0]+(t[0]-e[0])*s,e[1]+(t[1]-e[1])*s]))return!1}return!0}roomAt(e){return this.rooms.find(t=>Be(e,t.points))??null}path(e,t){if(this.clear(e,t))return[t];let n=[e,t,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d))],r=n.length,o=new Array(r).fill(1/0),s=new Array(r).fill(-1),a=new Array(r).fill(!1);o[0]=0;let l=new Map,c=(d,h)=>{let f=d<h?`${d}:${h}`:`${h}:${d}`,p=l.get(f);return p===void 0&&(p=this.clear(n[d],n[h]),l.set(f,p)),p};for(;;){let d=-1;for(let h=0;h<r;h++)!a[h]&&o[h]<1/0&&(d<0||o[h]<o[d])&&(d=h);if(d<0)return null;if(d===1)break;a[d]=!0;for(let h=0;h<r;h++){if(a[h]||h===d)continue;let f=Math.hypot(n[d][0]-n[h][0],n[d][1]-n[h][1]);o[d]+f>=o[h]||c(d,h)&&(o[h]=o[d]+f,s[h]=d)}}let u=[];for(let d=1;d>0;d=s[d])u.unshift(n[d]);return u}start(e=!1){for(let r of e?this.floor.openings:[]){if(r.type!=="door")continue;let o=xr(r,this.floor.rooms,this.floor.walls??[]);if(!o)continue;let s=yr(this.walls,r,o);if(!s||!s.wall.exterior)continue;let a=s.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c)||1,d=l/u,h=c/u,f=[a.a[0]+d*s.s,a.a[1]+h*s.s],p=[f[0]-h*(a.left+.9),f[1]+d*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(d,-h))}}let t=[...this.rooms].sort((r,o)=>B0(o)-B0(r))[0],n=t?this.freeNear(Xi(t.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(e,t,n=9){let r=Math.cos(t),o=Math.sin(t);for(let s=.2;s<n;s+=.15)if(this.blocked([e[0]+r*s,e[1]+o*s],.05))return s;return n}openYaw(e,t=null){let n=t??0,r=-1;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,a=this.sight(e,s);if(t!==null){let l=Math.abs(s-t)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=s)}return n}freeNear(e){if(!this.blocked(e))return e;for(let t=.2;t<2;t+=.2)for(let n=0;n<6.28;n+=.5){let r=[e[0]+Math.cos(n)*t,e[1]+Math.sin(n)*t];if(!this.blocked(r))return r}return e}};function B0(i){let e=0,t=i.points;for(let n=0;n<t.length;n++){let[r,o]=t[n],[s,a]=t[(n+1)%t.length];e+=r*a-s*o}return Math.abs(e/2)}var hd=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(e,t,n,r){this.v=e,this.map=t,this.surface=n,this.onRoom=r.onRoom;let o=r.start??(()=>{let s=t.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...o},this.origUpdate=e.controls.update,this.origWalls=e.updateWalls,this.origFov=e.camera.fov,this.origNear=e.camera.near,e.controls.update=()=>this.apply(),e.updateWalls=()=>{for(let s of e.floors)s.mask.standing.value=65535,s.mask.glass.value=0},e.camera.fov=72,e.camera.near=.05,e.camera.updateProjectionMatrix(),e.labels.style.visibility="hidden",this.bind(),this.reportRoom(),e.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[e,t,n,r]of this.listeners)e.removeEventListener(t,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(e,t){this.map=e,this.path=[];let n=t??(()=>{let r=e.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let e=this.v.floorMap.get(this.map.floor.id);return(e?e.floor.elevation+e.y:this.map.floor.elevation)+mn(this.map.floor,this.state.x,this.state.z)+cd}apply(){let{x:e,z:t,yaw:n,pitch:r}=this.state,o=this.floorY(),s=Math.cos(r);return this.v.camera.position.set(e,o,t),this.v.camera.lookAt(e+Math.cos(n)*s,o+Math.sin(r),t+Math.sin(n)*s),this.v.controls.view.target.set(e,o-cd,t),!1}goTo(e){let t=this.map.path([this.state.x,this.state.z],this.map.freeNear(e));return t?(this.path=t,this.kick(),!0):!1}goToRoom(e){return this.goTo(Xi(e.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(e=>this.tick(e))),this.v.invalidate()}tick(e){this.raf=0;let t=Math.min(.05,(e-this.last)/1e3);this.last=e;let n=!1,r=this.state,o=0,s=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(o+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(o-=1),this.keys.has("a")&&(s-=1),this.keys.has("d")&&(s+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(o+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*t,n=!0),o||s){this.path=[],this.turnTo=null;let l=1.5*t,c=(Math.cos(r.yaw)*o-Math.sin(r.yaw)*s)*l,u=(Math.sin(r.yaw)*o+Math.cos(r.yaw)*s)*l;this.move(c,u),n=!0}else if(this.path.length){let[l,c]=this.path[0],u=l-r.x,d=c-r.z,h=Math.hypot(u,d),f=1.4*t;h<=f?(r.x=l,r.z=c,this.path.shift()):(r.x+=u/h*f,r.z+=d/h*f,this.turnTo=Math.atan2(d,u)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,t*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(e,t){let n=this.state,r=[n.x+e,n.z+t];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+e,n.z])?this.map.blocked([n.x,n.z+t])||(n.z+=t):n.x+=e}reportRoom(){let e=this.map.roomAt([this.state.x,this.state.z]),t=e?.id??null;t!==this.roomId&&(this.roomId=t,this.onRoom(e))}setStick(e){this.stick=e,this.kick()}floorPoint(e,t){let n=this.surface.getBoundingClientRect(),r=(e-n.left)/n.width*2-1,o=1-(t-n.top)/n.height*2,{yaw:s,pitch:a,x:l,z:c}=this.state,u=this.v.camera.fov*Math.PI/180,d=Math.tan(u/2),h=n.width/n.height,f=Math.cos(a),p=[Math.cos(s)*f,Math.sin(a),Math.sin(s)*f],_=[-Math.sin(s),0,Math.cos(s)],m=[p[1]*_[2]-p[2]*_[1],p[2]*_[0]-p[0]*_[2],p[0]*_[1]-p[1]*_[0]],g=[-m[0],-m[1],-m[2]],w=[p[0]+_[0]*r*d*h+g[0]*o*d,p[1]+_[1]*r*d*h+g[1]*o*d,p[2]+_[2]*r*d*h+g[2]*o*d];if(w[1]>=-.02)return null;let x=cd/-w[1];return[l+w[0]*x,c+w[2]*x]}bind(){let e=(s,a,l,c)=>{s.addEventListener(a,l,c),this.listeners.push([s,a,l,!!c?.capture])},t=null;e(this.surface,"pointerdown",s=>{t||(t={x:s.clientX,y:s.clientY,moved:!1,id:s.pointerId},this.surface.setPointerCapture?.(s.pointerId))}),e(this.surface,"pointermove",s=>{if(!t||s.pointerId!==t.id)return;let a=s.clientX-t.x,l=s.clientY-t.y;if(!t.moved&&Math.hypot(a,l)<5)return;t.moved=!0,t.x=s.clientX,t.y=s.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=s=>{if(!t||s.pointerId!==t.id)return;let a=!t.moved;if(t=null,a){let l=this.floorPoint(s.clientX,s.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};e(this.surface,"pointerup",n),e(this.surface,"pointercancel",()=>t=null),e(this.surface,"wheel",s=>{s.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-s.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=s=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s.key.toLowerCase()),o=s=>!!s.composedPath()[0]?.closest?.("input, textarea, select");e(window,"keydown",s=>{!r(s)||o(s)||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),s.stopImmediatePropagation(),this.keys.add(s.key.toLowerCase()),this.kick())},{capture:!0}),e(window,"keyup",s=>{r(s)&&(this.keys.delete(s.key.toLowerCase()),s.stopImmediatePropagation())},{capture:!0}),e(window,"blur",()=>this.keys.clear())}};function Zs(i){return!i||i.state==="unavailable"||i.state==="unknown"}function O0(i,e){if(!i||!e||!/^#[0-9a-f]{6}$/i.test(e))return i;let t=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),n=a=>{let l=Math.max(...a),c=Math.min(...a),u=l-c;return l<=0||u/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/u+6)%6:l===a[1]?(a[2]-a[0])/u+2:(a[0]-a[1])/u+4)*60,u/l]},[r]=n(t),[o]=n(i.color);if(r<0||o<0)return r<0&&o<0?i:null;let s=Math.abs(r-o);return Math.min(s,360-s)<=30?i:null}function dd(i,e){if(!i||i.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:i.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,r=t.rgb_color,o;return r&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?o=[r[0]/255,r[1]/255,r[2]/255]:typeof t.color_temp_kelvin=="number"?o=XM(t.color_temp_kelvin):o=[1,.71,.28],{color:o,level:n}}function XM(i){let e=Math.min(1,Math.max(0,(i-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}var KM=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Vc(i){if(!i||Zs(i))return null;let e=i.attributes.window_state;for(let t of[typeof e=="string"?e:null,i.state]){if(!t)continue;let n=KM.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}var YM=.5;function U0(i,e,t="window"){let n=m=>!!m&&i.states[m]?.state==="on",r=m=>!!m&&!!i.states[m]&&!Zs(i.states[m]),o=m=>m?Vc(i.states[m]):null,s=m=>{let g=o(m);return e.contactInvert&&m&&m!==e.tilt&&m!==e.tilt2&&g!=="tilted"&&g?g==="open"?"closed":"open":g},a=n(e.tilt2)||s(e.tilt2)==="tilted"||s(e.contact2)==="tilted",l=s(e.contact2)==="open"&&!a?1:0,c=n(e.tilt)||s(e.tilt)==="tilted"||s(e.contact)==="tilted",u=c?1:0,d=e.tiltAngle?Number(i.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(d)){let m=(d-(e.tiltOffset??0))*(e.tiltInvert?-1:1);u=Math.min(1,Math.max(0,m/(e.tiltMax||15))),u<.08&&(u=0),c=u>0}let h=s(e.contact)==="open"&&!c?1:0,f=null,p=e.cover?i.states[e.cover]:void 0,_=qM(i,e.position);if(_!==null)f=e.positionInverted?_:1-_;else if(p&&!Zs(p)){let m=p.attributes.current_position;typeof m=="number"?f=1-Math.min(100,Math.max(0,m))/100:f=p.state==="closed"?1:p.state==="opening"||p.state==="closing"?.5:0}else e.cover&&(f=0);if(t==="door"){let m=s(e.contact);return{open:m===null?e.shut?0:YM:m==="closed"?0:1,open2:s(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:f,sensed:m!==null||f!==null}}if(t==="garage"){let m=s(e.contact),g=f!==null||m!==null;return f===null&&(f=m===null||m==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:f,sensed:g}}return{open:h,open2:l,tilt:u,tilt2:a?1:0,cover:f,sensed:r(e.contact)||r(e.tilt)||Number.isFinite(d)}}function qM(i,e){let t=e?i.states[e]:void 0;if(!t||Zs(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function V0(i,e){return!i||e==null||e===1?i:{...i,level:Math.max(.02,Math.min(1.5,i.level*e))}}function Gc(i,e,t){let n=t?e.states[t]:void 0,r=t===i.entity&&i.color_entity&&i.color_entity!=="none"?e.states[i.color_entity]:void 0;return n?V0(O0(dd(n,r),i.only_color),i.glow_scale):null}function Yn(i){return!!i&&!["unknown","unavailable",""].includes(i.state.toLowerCase())}function tr(i,e){let t=e?Object.prototype.hasOwnProperty.call(i.bindings??{},e)?i.bindings?.[e]:e==="status"?i.status??i.entity:e==="power"?i.power:e==="door_left"?i.door_left:e==="door_right"?i.door_right:null:i.status??i.entity;return t&&t!=="none"?t:null}function fd(i,e){if(!Number.isFinite(i))return null;try{let t=new Intl.DateTimeFormat("en-GB",{timeZone:e??"UTC",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(i),n=Number(t.find(o=>o.type==="hour")?.value),r=Number(t.find(o=>o.type==="minute")?.value);return Number.isFinite(n+r)?{hour:n,minute:r,text:`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`}:null}catch{return null}}function G0(i,e,t,n){if(i.kind==="digital"||i.kind==="analog")return fd(n.time,t.config?.time_zone)?.text??"--:--";let r=tr(e,i.binding),o=r?t.states[r]:void 0;if(!Yn(o))return"--:--";let s=o.state,a=String(o.attributes.unit_of_measurement??"");if(i.kind==="duration"){let l={s:1,min:60,h:3600}[i.unit??a],c=s.trim()?Number(s):NaN;if(!l||!Number.isFinite(c)||c<0)return"--:--";let u=Math.round(c*l/60);return`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`}return`${s}${a?` ${a}`:""}`}function pd(i,e,t){let n=tr(e,i.status?.binding),r=n?t.states[n]:void 0;if(!i.status||!Yn(r))return{color:i.color,visible:i.visible!==!1};let o=(s,a)=>s&&Object.prototype.hasOwnProperty.call(s,a)?s[a]:void 0;return{color:o(o(e.status_colors,i.id),r.state)??o(i.status.colors,r.state)??i.color,visible:o(i.status.visibility,r.state)??i.visible!==!1}}function md(i,e,t){let n=e.motion_config?.[i.id],r=i.binding?tr(e,i.binding):["fan","washer","dryer"].includes(i.kind)?tr(e):null,o=i.tilt_binding?tr(e,i.tilt_binding):null,s=i.motor_binding?tr(e,i.motor_binding):null,a=i.tilt_angle_binding?tr(e,i.tilt_angle_binding):null,l=r?t.states[r]:void 0;if(["fan","washer","dryer"].includes(i.kind)){let w=Yn(l)&&["on","running","active","washing","drying","heating","cooling"].includes(l.state.toLowerCase());return{open:0,tilt:0,known:Yn(l),running:w}}let c=Yn(l)&&Vc(l)!==null,u=o?t.states[o]:void 0,d=Vc(l)===(n?.contact_invert?"open":"closed"),h=d&&Yn(u)&&["on","open","tilted"].includes(u.state),f=U0(t,{contact:r,tilt:o,tiltAngle:a,cover:null,contactInvert:n?.contact_invert,tiltMax:n?.tilt_max,tiltInvert:n?.tilt_invert},i.kind==="window"?"window":"door"),p=s?t.states[s]:void 0,_=p?.attributes.current_position;if(Yn(p)&&typeof _=="number"&&Number.isFinite(_))return{open:Math.min(1,Math.max(0,_/100)),tilt:f.tilt,known:!h&&!(c&&d&&_>1),running:!1};if(Yn(p)&&["open","opening","closed","closing"].includes(p.state))return{open:["open","opening"].includes(p.state)?1:0,tilt:f.tilt,known:!h,running:!1};let m=a?t.states[a]:void 0,g=Yn(u)&&["on","tilted"].includes(u.state)||Yn(m)&&Number.isFinite(Number(m.state))&&f.tilt>0;return{open:f.open,tilt:f.tilt,known:!h&&(!!c||!!g)&&(!o||Yn(u)),running:!1}}function H0(i,e,t,n){if(!n.historical||!n.history)return null;let r=[i.binding,i.tilt_binding,i.motor_binding,i.tilt_angle_binding].filter(c=>!!c).map(c=>tr(e,c)).filter(c=>!!c),o=n.history(r,n.time-7*864e5,n.time),s=r.flatMap(c=>(o[c]??[]).filter(u=>u.lu*1e3<=n.time).map(u=>({id:c,row:u}))).sort((c,u)=>c.row.lu-u.row.lu),a={},l=null;for(let{id:c,row:u}of s){a[c]={entity_id:c,state:u.s,attributes:{}};let d=md(i,e,{...t,states:a});d.known&&(l=d)}return l}var So=class{states=new Map;last=null;begin(e){this.last&&(this.last.historical!==e.historical||e.historical&&(e.time<this.last.time||e.seek!==this.last.seek))&&this.states.clear(),this.last={...e}}resolve(e,t){return t.known?(this.states.set(e,t),t):{...this.states.get(e)??{open:0,tilt:0,running:!1,known:!1},known:!1,running:!1}}};var W0={body:1516088,fabric:1713732,cushion:2373217,wood:1647420,white:1911110,metal:2767456,dark:725279,glass:1849938,plant:1191982,pot:1910336,accent:2854835},X0=i=>i.startsWith("#")?parseInt(i.slice(1),16):W0[i]??W0.body;function ZM(i,e){let t=document.createElement("canvas");t.width=512,t.height=256;let n=new On(t),r=new He(new Un(i,e),new et({map:n,transparent:!0,side:ht,depthWrite:!1}));return r.renderOrder=7,{mesh:r,texture:n}}var Hc=class{group=new kt;items=[];memory=new So;hass=null;moment={time:NaN,historical:!1,playing:!0,seek:0};global=!0;timer;initial=!0;seconds=0;plane=new vn(new V(0,-1,0),0);clipped=!1;material;invalidate;constructor(e,t,n,r){this.material=t.clone(),this.material.onBeforeCompile=t.onBeforeCompile,this.material.customProgramCacheKey=t.customProgramCacheKey,this.invalidate=n,r&&(this.memory=r);for(let o of e.furniture){let s=br(o);if(!s)continue;let a=new Set([...s.motions??[],...s.spots??[]].flatMap(f=>f.parts)),l=s.parts.filter(f=>f.status||f.id&&a.has(f.id));if(!l.length&&!s.displays?.length)continue;let c=new kt;c.position.set(o.x,Ct(e,o)+o.h/2,o.z),c.rotation.set((o.rotation_x??0)*Math.PI/180,-o.rotation*Math.PI/180,(o.rotation_z??0)*Math.PI/180,"YZX"),c.scale.x=o.mirror?-1:1,this.group.add(c);let u=l.map(f=>{let p=e0({...s,parts:[f]},o);p.translate(0,-o.h/2,0);let _=new He(p,f.status?new et({vertexColors:!0,side:ht}):this.material);return c.add(_),_.userData.furnitureId=o.id,{part:f,mesh:_,key:"",baseColors:Float32Array.from(p.getAttribute("color").array)}}),d=(s.motions??[]).map(f=>{let p=new kt,[_,m,g]=f.pivot;p.position.set(_*o.w,(m-.5)*o.h,g*o.d),c.add(p);for(let w of u.filter(x=>x.part.id&&f.parts.includes(x.part.id)))w.mesh.position.copy(p.position).negate(),p.add(w.mesh);return{definition:f,group:p,state:{open:0,tilt:0,known:!1,running:!1},shown:0,tilt:0}});for(let f of s.spots??[]){let p=new kt,_=f.pivot??f.position;p.position.set(_[0]*o.w,(_[1]-.5)*o.h,_[2]*o.d);let m=o.spot_config?.[f.id];p.rotation.set((m?.rotation_x??0)*Math.PI/180,-(m?.rotation_y??0)*Math.PI/180,(m?.rotation_z??0)*Math.PI/180,"YZX"),c.add(p);for(let g of u.filter(w=>w.part.id&&f.parts.includes(w.part.id)))g.mesh.position.copy(p.position).negate(),p.add(g.mesh)}let h=(s.displays??[]).map(f=>{let p=ZM(f.size[0]*o.w,f.size[1]*o.h),[_,m,g]=f.position;p.mesh.userData.furnitureId=o.id,f.kind==="analog"&&(p.texture.image.height=512),p.mesh.position.set(_*o.w,(m-.5)*o.h,g*o.d),p.mesh.rotation.set(...(f.rotation??[0,0,0]).map(x=>x*Math.PI/180),"YZX");let w=d.find(x=>x.definition.id===f.parent)?.group;return w?(p.mesh.position.sub(w.position),w.add(p.mesh)):c.add(p.mesh),{...p,field:f,key:""}});this.items.push({f:o,group:c,parts:u,motions:d,displays:h})}}meshes(){return this.items.flatMap(e=>[...e.parts.map(t=>t.mesh),...e.displays.map(t=>t.mesh)]).filter(e=>e.visible)}clip(e,t,n){let r=e!==null;this.plane.constant=t+(e??0),this.material.opacity=n;for(let o of this.items.flatMap(s=>[...s.parts.map(a=>a.mesh),...s.displays.map(a=>a.mesh)])){let s=o.material;s.opacity=n,s.transparent=!0,r!==this.clipped&&(s.clippingPlanes=r?[this.plane]:null,s.needsUpdate=!0)}this.clipped=r}update(e,t,n){let r=this.initial||t.historical&&(t.seek!==this.moment.seek||!this.moment.historical);this.initial=!1,this.hass=e,this.moment={...t},this.global=n,this.memory.begin(t);for(let o of this.items){for(let s of o.parts){let a=pd(s.part,o.f,e),l=JSON.stringify(a);if(s.mesh.visible=a.visible,s.key!==l||s.part.glow||o.motions.some(c=>c.definition.parts.includes(s.part.id??"")&&c.state.running)){s.key=l;let c=new J(X0(a.color)),u=s.mesh.geometry.getAttribute("color");if(a.color===s.part.color)u.array.set(s.baseColors);else for(let d=0;d<u.count;d++)u.setXYZ(d,c.r,c.g,c.b);u.needsUpdate=!0}}for(let s of o.motions){let a=o.f.id+":"+s.definition.id,l=md(s.definition,o.f,e);if(!l.known&&t.historical&&r){let c=H0(s.definition,o.f,e,t);c&&this.memory.resolve(a,c)}s.state=this.memory.resolve(a,l),(r||!n||o.f.animations===!1)&&(s.shown=s.state.open,s.tilt=s.state.tilt,this.pose(s,o.f))}for(let s of br(o.f)?.spots??[]){let a=o.f.spot_config?.[s.id]?.entity??(s.binding?o.f.bindings?.[s.binding]:null)??o.f.entity,l=Gc(o.f,e,a);if(l)for(let c of o.parts.filter(u=>u.part.glow&&s.parts.includes(u.part.id??""))){let u=c.mesh.geometry.getAttribute("color"),d=new J(...l.color.map(h=>Math.min(1,h*(.55+.45*l.level))));for(let h=0;h<u.count;h++)u.setXYZ(h,d.r,d.g,d.b);u.needsUpdate=!0}}this.drawDisplays(o)}this.scheduleClock(),this.invalidate()}drawDisplays(e){if(this.hass)for(let t of e.displays){let n=G0(t.field,e.f,this.hass,this.moment);if(n===t.key)continue;t.key=n;let r=t.texture.image,o=r.getContext("2d");if(o.clearRect(0,0,512,r.height),(t.field.kind!=="analog"||t.field.background)&&(o.fillStyle=t.field.background??"#101827",o.fillRect(0,0,512,r.height)),o.fillStyle=t.field.color??"#ffffff",t.field.kind==="analog"){let s=fd(this.moment.time,this.hass.config?.time_zone)??{hour:10,minute:10},a=(l,c,u)=>{o.save(),o.translate(256,256),o.rotate(l),o.strokeStyle=t.field.color??"#ffffff",o.lineWidth=u,o.beginPath(),o.moveTo(0,10),o.lineTo(0,-c),o.stroke(),o.restore()};a((s.hour%12+s.minute/60)*Math.PI/6,144,9),a(s.minute*Math.PI/30,204,5)}else{o.textAlign="center",o.textBaseline="middle",o.font="bold 100px sans-serif";let s=o.measureText(n).width;s>480&&(o.font=`bold ${Math.max(20,Math.floor(100*480/s))}px sans-serif`),o.fillText(n,256,128)}t.texture.needsUpdate=!0}}scheduleClock(){this.timer&&(clearTimeout(this.timer),this.timer=void 0),!(this.moment.historical||!this.items.some(e=>e.displays.some(t=>["analog","digital"].includes(t.field.kind))))&&(this.timer=setTimeout(()=>{this.timer=void 0,this.moment.time=Date.now();for(let e of this.items)this.drawDisplays(e);this.invalidate(),this.scheduleClock()},6e4-Date.now()%6e4+10))}pose(e,t){let n=e.definition.kind,r=t.motion_config?.[e.definition.id],o=r?.direction??e.definition.direction??1;if(n==="slide"){let a=e.definition.axis??"x",l=a==="x"?0:a==="y"?1:2,c=a==="x"?t.w:a==="y"?t.h:t.d;e.group.position[a]=e.definition.pivot[l]*c-(a==="y"?t.h/2:0)+(r?.travel_m??(e.definition.travel??1)*c)*e.shown*o;return}let s=r?.angle??e.definition.angle;if(e.group.rotation[e.definition.axis??"y"]=-(s==null?n==="window"?1.2:1.5:s*Math.PI/180)*e.shown*o,n==="window"){let a=r?.tilt_angle??e.definition.tilt_angle;e.group.rotation.x=-(a==null?.2:a*Math.PI/180)*e.tilt}}step(e){this.seconds+=e/1e3;let t=!1;for(let n of this.items)for(let r of n.motions){let o=this.global&&n.f.animations!==!1;if(["fan","washer","dryer"].includes(r.definition.kind)){if(!o||!r.state.running||this.moment.historical&&!this.moment.playing)continue;if(r.definition.kind==="fan")r.group.rotation[r.definition.axis??"z"]+=e*.008;else{let c=.75+.08*Math.sin(this.seconds);for(let u of n.parts.filter(d=>d.part.id&&r.definition.parts.includes(d.part.id))){let d=this.hass?pd(u.part,n.f,this.hass):null,h=d&&u.part.status?new J(X0(d.color)).multiplyScalar(c):new J(.3*c,.85*c,c),f=u.mesh.geometry.getAttribute("color");for(let p=0;p<f.count;p++)f.setXYZ(p,h.r,h.g,h.b);f.needsUpdate=!0}}t=!0;continue}if(!o){this.pose(r,n.f);continue}let s=1-Math.exp(-e/160),a=r.state.open-r.shown,l=r.state.tilt-r.tilt;Math.abs(a)<.003&&Math.abs(l)<.003?(r.shown=r.state.open,r.tilt=r.state.tilt):(r.shown+=a*s,r.tilt+=l*s,t=!0),this.pose(r,n.f)}return t}dispose(){this.timer&&clearTimeout(this.timer);for(let e of this.items){for(let t of e.parts)t.mesh.geometry.dispose(),t.mesh.material!==this.material&&t.mesh.material.dispose();for(let t of e.displays)t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.texture.dispose()}this.group.removeFromParent(),this.items=[],this.material.dispose()}};function K0(i,e,t){let n=_t(i.type),r=Ct(e,i);return(n?.spots??[]).flatMap(o=>{let s=i.spot_config?.[o.id],a=s?.entity??(o.binding?i.bindings?.[o.binding]:null)??i.entity,l=a?t.states[a]:void 0;if(!l||l.state!=="on")return[];let c=Gc(i,t,a);if(!c)return[];let u=o.pivot??o.position,d=new V(o.position[0]*i.w,o.position[1]*i.h,o.position[2]*i.d),h=new V(u[0]*i.w,u[1]*i.h,u[2]*i.d),f=new Bn((s?.rotation_x??0)*Math.PI/180,-(s?.rotation_y??0)*Math.PI/180,(s?.rotation_z??0)*Math.PI/180,"YZX"),p=new V(...o.direction).applyEuler(f).normalize();d.sub(h).applyEuler(f).add(h),d.y-=i.h/2,i.mirror&&(d.x*=-1,p.x*=-1);let _=new Bn((i.rotation_x??0)*Math.PI/180,-i.rotation*Math.PI/180,(i.rotation_z??0)*Math.PI/180,"YZX");d.applyEuler(_).add(new V(i.x,r+i.h/2,i.z)),p.applyEuler(_).normalize();let m=e.rooms.findIndex(g=>Be([i.x,i.z],g.points));return[{x:d.x,y:d.y,z:d.z,direction:p.toArray(),angle:s?.beam_angle??i.beam_angle??o.angle??60,color:c.color,level:c.level,kind:"spot",room:m<0?e.rooms.length:m}]})}function Xc(i,e){return(t,n)=>{let r=e?.(t,n);if(r!=null)return r;let o=i.rooms.find(s=>Be([t,n],s.points));return o?pt(i,o)+Cn(i,o):null}}function $M(i,e,t,n,r=Xc(t)){let o=5;e.y<-.001&&(o=Math.min(o,Math.max(.01,(i.y-mn(t,i.x,i.z)-.02)/-e.y)));for(let c of n){let u=c.b[0]-c.a[0],d=c.b[1]-c.a[1],h=e.x*d-e.z*u;if(Math.abs(h)<1e-8)continue;let f=c.a[0]-i.x,p=c.a[1]-i.z,_=(f*d-p*u)/h,m=(f*e.z-p*e.x)/h,g=i.y+_*e.y;if(_<=.01||_>=o||m<0||m>1||g<0||g>c.h)continue;let w=m*Math.hypot(u,d);c.gaps.some(x=>w>=x.s0&&w<=x.s1&&g>=x.y0&&g<=x.y1)||(o=_)}let s=0,a=r(i.x,i.z),l=a!=null&&i.y<=a+.001;for(let c=.025;c<=o+1e-9;c+=.025){let u=r(i.x+e.x*c,i.z+e.z*c),d=i.y+e.y*c;if(u!=null&&l&&d>=u){let h=s,f=c;for(let p=0;p<12;p++){let _=(h+f)/2,m=r(i.x+e.x*_,i.z+e.z*_);m!=null&&i.y+e.y*_>=m?f=_:h=_}o=Math.max(0,f-.002);break}l=u!=null&&d<=u,a=u,s=c}return o}function Y0(i,e,t,n,r){if(!e.direction)return;let o=new V(e.x,e.y,e.z),s=new V(...e.direction).normalize(),a=Math.abs(s.y)<.95?new V(0,1,0):new V(1,0,0),l=new V().crossVectors(s,a).normalize(),c=new V().crossVectors(s,l).normalize(),u=(e.angle??60)*Math.PI/360,d=new J(...e.color.map(p=>p*.09*e.level)),h=new J(0,0,0),f=p=>{let _=p*Math.PI/8,m=s.clone().multiplyScalar(Math.cos(u)).addScaledVector(l,Math.cos(_)*Math.sin(u)).addScaledVector(c,Math.sin(_)*Math.sin(u)).normalize();return o.clone().addScaledVector(m,$M(o,m,t,n,r)).toArray()};for(let p=0;p<16;p++)i.tri(o.toArray(),f(p),f(p+1),d,h,h)}function JM(i,e){let t=_t(e);if(!t)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:e,x:i.x,z:i.z,rotation:i.rotation,rotation_x:i.rotation_x,rotation_z:i.rotation_z,mount_y:i.mount_y,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}function vd(i,e){if(!i.furniture.some(n=>n.type==="parking"&&e.has(n.id)))return i;let t=i.furniture.flatMap(n=>{let r=n.type==="parking"?e.get(n.id):void 0,o=r?JM(n,r):null;return o?[n,o]:[n]});return{...i,furniture:t}}function xd(i,e){let t=[],n=[],r=[],o=[],s=[],a=[],l=[];for(let{face:u,field:d}of i){let h=t.length/3,f=d.portrait===!1?10:6,p=d.portrait===!1?6:10,_=jM(d.id)%1e3/1e3;for(let g of Os(u,d)){let[w,x,b,y]=g.corners.map(v=>[v[0]+u.n[0]*.006,v[1]+u.n[1]*.006-e,v[2]+u.n[2]*.006]),M=Ic(w,x,b,u.n),E=[[w,0,0],[x,1,0],[b,1,1],[y,0,1]];for(let v of[0,1,2,0,2,3]){let[S,T,P]=E[v];t.push(S[0],S[1],S[2]),n.push(T,P),r.push(f,p),o.push(_),a.push(...M),l.push(...w)}}let m=t.length/3-h;m&&s.push({id:d.id,start:h,count:m})}if(!t.length)return null;let c=new Ke;return c.setAttribute("position",new Te(t,3)),c.setAttribute("uv",new Te(n,2)),c.setAttribute("aCells",new Te(r,2)),c.setAttribute("aPhase",new Te(o,1)),c.setAttribute("aLevel",new Te(new Float32Array(t.length/3),1)),{geometry:Us(c,a,l),ranges:s}}function $s(i,e){let t=i.geometry.getAttribute("aLevel"),n=t.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,e.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return t.needsUpdate=!0,r}function yd(i){let e=new et({transparent:!0,blending:Dt,depthWrite:!1,side:ht});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},e.customProgramCacheKey=()=>"fp3d-solar-live",e}function jM(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619)>>>0;return e}var Z0=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,QM=`
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
`,eS=Z0,tS=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function q0(i,e){let t=[];for(let[r,o,s]of gn(i))for(let a of[r,s,o])t.push(i[a][0],e,i[a][1]);let n=new Ke;return n.setAttribute("position",new Te(t,3)),n}function $0(i,e){let t=new kt;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new He(q0(n.points,s),new ln({uniforms:{uTime:e,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:Z0,fragmentShader:QM,transparent:!0,blending:Dt,depthWrite:!1,side:ht}));l.renderOrder=5,l.frustumCulled=!1,t.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(m=>m[0]),a=n.points.map(m=>m[1]),[l,c,u,d]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],h=c-l>=d-u,f=Math.min(1,n.cover),p=h?[[l-.1,u-.1],[l+(c-l)*f,u-.1],[l+(c-l)*f,d+.1],[l-.1,d+.1]]:[[l-.1,u-.1],[c+.1,u-.1],[c+.1,u+(d-u)*f],[l-.1,u+(d-u)*f]],_=vo(n.points,p);if(_.length>=3){let m=new He(q0(_,n.y+.03),new ln({uniforms:{uAxis:{value:h?[1,0]:[0,1]}},vertexShader:eS,fragmentShader:tS,transparent:!0,side:ht}));m.renderOrder=6,t.add(m);let g=[];for(let x=0;x<_.length;x++){let b=_[x],y=_[(x+1)%_.length];g.push(b[0],n.y+.032,b[1],y[0],n.y+.032,y[1])}let w=new Ke;w.setAttribute("position",new Te(g,3)),t.add(new qt(w,new Yt({color:5995775,transparent:!0,opacity:.6})))}}}return t}function J0(i){for(let e of i.children)e.geometry?.dispose(),e.material?.dispose?.();i.clear()}var j0=["neon","blueprint","day"];function Q0(i){return j0.indexOf(i)}var Kc={value:new V(.22,.88,1)},Yc={value:0};function eg(i){let e=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!e)return null;let t=parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var nS=`
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
`;function Jt(i,e,t=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=e,o.uniforms.uAccent=Kc,o.uniforms.uAccentOn=Yc,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${nS}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${t?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${t?"l":"s"}`,i}function To(i){return i==="day"?Oi:Dt}var Js={open:0,open2:0,tilt:0,tilt2:0,cover:null},tg=2043986,ng=2769520,iS=2242399,wd=1845831,rS=1450554,yi=16758087,oS=1846349,sS=2572395,aS=1120816,lS=1845831,Md=5995775,Sd=9085695,kr=We(3662079,.08);function cS(i,e){let t=Math.min(.4,Math.max(.02,i-.12)),n=Math.min(.3,Math.max(0,(e-.1)/2));return{x0:(i-t)/2,x1:(i+t)/2,y0:n,y1:e-n}}function uS(){let e=_t("pack:local.v2.kuechenmoebel_farben:kitchen_dishwasher_panel_60")?.parts.find(t=>t.id==="p003")?.color;return e?.startsWith("#")?parseInt(e.slice(1),16):10778952}function qc(i,e,t,n,r,o,s,a,l,c,u){let d=(f,p,_)=>e(f,p,_),h=[[d(t,r,a),d(n,r,a),d(n,o,a),d(t,o,a),c],[d(t,r,s),d(n,r,s),d(n,o,s),d(t,o,s),We(l.getHex(),.6)],[d(t,o,s),d(n,o,s),d(n,o,a),d(t,o,a),l],[d(t,r,s),d(n,r,s),d(n,r,a),d(t,r,a),We(l.getHex(),.85)],[d(t,r,s),d(t,o,s),d(t,o,a),d(t,r,a),We(l.getHex(),.92)],[d(n,r,s),d(n,o,s),d(n,o,a),d(n,r,a),We(l.getHex(),.92)]];for(let[f,p,_,m,g]of h)i.tri(f,p,_,g,g,g,void 0,u),i.tri(f,_,m,g,g,g,void 0,u)}function st(i,e,t,n,r,o,s,a,l,c,u,d){if(a<=u+1e-6)return qc(i,e,t,n,r,o,s,a,l,c,Ze);if(s>=u-1e-6)return qc(i,e,t,n,r,o,s,a,l,c,d);qc(i,e,t,n,r,o,s,u,l,c,Ze),qc(i,e,t,n,r,o,u,a,l,c,d)}function wi(i,e,t,n,r,o,s,a,l,c,u=0){let d=(h,f,p)=>{let _=b=>u?(s-b)/u:.5,m=e(t,r,h),g=e(n,r,h),w=e(n,r,f),x=e(t,r,f);i.tri(m,g,w,a,a,a,[0,_(h),1,_(h),1,_(f)],p),i.tri(m,w,x,a,a,a,[0,_(h),1,_(f),0,_(f)],p)};s<=l+1e-6?d(o,s,Ze):o>=l-1e-6?d(o,s,c):(d(o,l,Ze),d(l,s,c))}function hS(i,e,t,n,r,o,s,a,l,c){let u=e(t,r,s),d=e(n,r,s),h=e(n,o,s),f=e(t,o,s),p=0,_=(o-r)/c;i.tri(u,d,h,a,a,a,[0,p,1,p,1,_],l),i.tri(u,h,f,a,a,a,[0,p,1,_,0,_],l)}function ig(i,e,t,n=!1){let r=new tt,o=new tt,s=new tt(!0),a=new J(tg),l=new J(ng),c=[],u=[],d=[];for(let h of i){let f=r.count,p=o.count,_=s.count,m=e.get(h.opening.id)??Js,g=h.width,w=h.opening.type==="door"||h.opening.type==="garage"?h.sill:0,x=h.sill-w,b=h.top-w,y=t-w,{bucket:M}=h,E=(P,k,R)=>[h.start[0]+h.axis[0]*P+h.toRoom[0]*k,R+w,h.start[1]+h.axis[1]*P+h.toRoom[1]*k],v=(h.faceRoom-h.faceOut)/2,S=h.opening.mark==="closed",T=h.opening.type==="door"&&vr(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!T||h.opening.type==="garage"){let P=-h.faceOut-.012,k=h.faceRoom+.012,R=h.opening.type==="garage"&&(S?!!m.sensed&&(m.cover??1)>=.95:(m.cover??1)<.95),A=R?We(yi,.8):new J(tg),I=R?We(yi,1):new J(ng);st(r,E,-.045,.02,P,k,0,b+.045,A,I,y,M),st(r,E,g-.02,g+.045,P,k,0,b+.045,A,I,y,M),st(r,E,.02,g-.02,P,k,b-.02,b+.045,A,I,y,M)}if(h.opening.type==="door"){let P=vr(h.opening,h.exterior),k=cm(P),R=h.opening.swing==="out"?-1:1,A=R>0?h.faceRoom:-h.faceOut,I=h.opening.leaves===2,L=.02,z=g-.02,B=lm(g,P,h.hingeAtStart,h.opening);if(B){let se=-h.faceOut-.012,H=h.faceRoom+.012,Y=A-R*(k?.06:.04)/2,le=.06;for(let[de,j]of B.panels)st(r,E,de,de+le,se,H,.02,b-.02,a,l,y,M),st(r,E,j-le,j,se,H,.02,b-.02,a,l,y,M),st(r,E,de+le,j-le,se,H,.02,.12,a,l,y,M),wi(o,E,de+le,j-le,Y,.12,b-.02,kr,y,M);L=B.x0,z=B.x1}let N=I?(z-L)/2-.004:z-L,O=k?.06:.04;k&&(st(r,E,.02,g-.02,-h.faceOut-.02,h.faceRoom,0,.02,new J(wd),l,y,M),h.exterior&&P!=="front_slot"&&st(r,E,g/2-.08,g/2+.08,-h.faceOut-.1,-h.faceOut,b+.1,b+.17,We(yi,.55),We(yi,.85),y,Ze));let U=T?[]:[[h.hingeAtStart,m.open]];I&&!T&&U.push([!h.hingeAtStart,m.open2??0]);let Z=P==="sliding_glass",q=P==="sliding_wood",he=Z||q,ie=P==="sliding"||he;if(he){let se=A+R*.055;st(r,E,L-(h.hingeAtStart||I?N:0),z+(!h.hingeAtStart||I?N:0),se-.025,se+.025,b+.025,b+.075,new J(Md),new J(Sd),y,M)}for(let[se,H]of U){let Y=Math.min(1,Math.max(0,H)),le=ie?0:Y*1.5,de=ie?Y*N:0,j=(nt,mt,X)=>{let Vt=nt*Math.cos(le)-mt*Math.sin(le)-de,gt=A+R*(mt*Math.cos(le)+nt*Math.sin(le)+(he?.055:de?.05:0));return E(se?L+Vt:z-Vt,gt,X)},ce=Y>.05?Ze:M,De=S?!!m.sensed&&Y<.05:Y>.9,Ne=q&&n?uS():null,Pe=Ne!==null?new J(Ne):De?We(yi,.7):new J(k?aS:oS),ke=Ne!==null?We(Ne,1.1):De?We(yi,.9):new J(k?lS:sS);if(P==="front_slot"){let nt=cS(N,b-x),mt=x+nt.y0,X=x+nt.y1;st(r,j,0,nt.x0,-O,0,.01,b-.01,Pe,ke,y,ce),st(r,j,nt.x1,N,-O,0,.01,b-.01,Pe,ke,y,ce),st(r,j,nt.x0,nt.x1,-O,0,.01,mt,Pe,ke,y,ce),st(r,j,nt.x0,nt.x1,-O,0,X,b-.01,Pe,ke,y,ce),wi(o,j,nt.x0,nt.x1,-O/2,mt,X,kr,y,ce)}else P==="glass"||Z?(st(r,j,0,.05,-O,0,.01,b-.01,Pe,ke,y,ce),st(r,j,N-.05,N,-O,0,.01,b-.01,Pe,ke,y,ce),st(r,j,.05,N-.05,-O,0,.01,.12,Pe,ke,y,ce),st(r,j,.05,N-.05,-O,0,b-.08,b-.01,Pe,ke,y,ce),wi(o,j,.05,N-.05,-O/2,.12,b-.08,kr,y,ce)):st(r,j,0,N,-O,0,.01,b-.01,Pe,ke,y,ce);P==="front_glass"?wi(o,j,.12,N-.12,.001,b*.55,b-.18,kr,y,ce):k&&P!=="front_slot"&&wi(o,j,.1,.18,.001,.3,b-.3,kr,y,ce);let Ve=Math.min(1.05,b*.5),at=k?.3:he?.18:.012,wt=k||he?N-.11:N-.16,Bt=k||he?N-.08:N-.05;st(r,j,wt,Bt,.004,.05,Ve-at,Ve+at,new J(Md),new J(Sd),y,ce),st(r,j,wt,Bt,-O-.05,-O-.004,Ve-at,Ve+at,new J(Md),new J(Sd),y,ce)}}else if(h.opening.type==="garage"){let P=Math.min(1,Math.max(0,m.cover??1)),k=new J(13951231),R=h.faceRoom-.03,A=b*(1-P);P>.01&&wi(s,E,.02,g-.02,R,A,b,k,y,M,.5);let I=(1-P)*b;I>.01&&hS(s,E,.02,g-.02,R,R+I,b+.03,k,M,.5)}else if(vr(h.opening,h.exterior)==="glass_wall"){st(r,E,0,.04,v-.025,v+.025,x,b,a,l,y,M),st(r,E,g-.04,g,v-.025,v+.025,x,b,a,l,y,M),st(r,E,.04,g-.04,v-.025,v+.025,x,x+.03,a,l,y,M),st(r,E,.04,g-.04,v-.025,v+.025,b-.04,b,a,l,y,M);let R=Math.max(1,Math.round((g-2*.04)/.9)),A=(g-2*.04)/R;for(let I=1;I<R;I++){let L=.04+I*A;st(r,E,L-.02,L+.02,v-.025,v+.025,x+.03,b-.04,a,l,y,M)}for(let I=0;I<R;I++){let L=.04+I*A+(I?.02:0),z=.04+(I+1)*A-(I<R-1?.02:0);wi(o,E,L,z,v,x+.03,b-.04,kr,y,M)}}else{st(r,E,0,.06,v-.035,v+.035,x,b,a,l,y,M),st(r,E,g-.06,g,v-.035,v+.035,x,b,a,l,y,M),st(r,E,.06,g-.06,v-.035,v+.035,x,x+(x>.05?.06:.03),a,l,y,M),st(r,E,.06,g-.06,v-.035,v+.035,b-.06,b,a,l,y,M),x>.3&&(st(r,E,-.04,g+.04,v+.035,h.faceRoom+.07,x-.03,x,new J(wd),l,y,M),h.exterior&&st(r,E,-.03,g+.03,-h.faceOut-.06,v-.035,x-.04,x-.02,new J(wd),l,y,M));let R=.055,A=x+(x>.05?.06:.03),I=b-.06,L=v+.035,z=v+.035+.06,N=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:g/2,x1:h.hingeAtStart?g/2:g-.06,open:m.open,tilt:m.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?g/2:.06,x1:h.hingeAtStart?g-.06:g/2,open:m.open2??0,tilt:m.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:g-.06,open:m.open,tilt:m.tilt}];for(let O of N){let U=O.open>.02||O.tilt>.02,Z=S?!!m.sensed&&!U:U,q=Z?We(yi,.75):new J(iS),he=Z?We(yi,.95):l,ie=O.x0,se=O.x1,H=se-ie,Y=O.open*1.2*(h.opening.swing==="out"?-1:1),le=O.tilt*.2,de=(ce,De,Ne)=>{let Pe=Ne-A,ke=De+Pe*Math.sin(le),Ve=A+Pe*Math.cos(le),at=ce*Math.cos(Y)-(ke-L)*Math.sin(Y);ke=L+(ke-L)*Math.cos(Y)+ce*Math.sin(Y);let wt=O.atStart?ie+at:se-at;return E(wt,ke,Ve)},j=Math.abs(Y)>.05?Ze:M;if(st(r,de,0,R,L,z,A,I,q,he,y,j),st(r,de,H-R,H,L,z,A,I,q,he,y,j),st(r,de,R,H-R,L,z,A,A+R,q,he,y,j),st(r,de,R,H-R,L,z,I-R,I,q,he,y,j),wi(o,de,R,H-R,(L+z)/2,A+R,I-R,Z?We(yi,.16):kr,y,j),vr(h.opening,h.exterior)==="bars"){let ce=(A+I)/2,De=(L+z)/2;st(r,de,R,H-R,De-.012,De+.012,ce-.012,ce+.012,q,he,y,j),st(r,de,H/2-.012,H/2+.012,De-.012,De+.012,A+R,I-R,q,he,y,j)}}}if(m.cover!==null){let P=-h.faceOut,k=b+.2;st(r,E,-.05,g+.05,P-.15,P,b,k,new J(rS),l,y,M);let R=Math.min(1,Math.max(0,m.cover));if(R>.01){let A=b-R*(b-x);wi(s,E,0,g,P-.07,A,b,new J(16777215),y,M,.045)}}c.push({id:h.opening.id,start:f,end:r.count}),u.push({id:h.opening.id,start:p,end:o.count}),d.push({id:h.opening.id,start:_,end:s.count})}return{frames:r.geometry(),glass:o.geometry(),blinds:s.geometry(),frameTris:c,glassTris:u,blindTris:d}}var dS=.3,rg=2.6;function og(i,e=.32,t=.22,n=[]){let r=i.map(y=>y[0]),o=i.map(y=>y[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),u=c-l>=a-s,d=t*.7071,h=y=>{let M=[y,[y[0]+t,y[1]],[y[0]-t,y[1]],[y[0],y[1]+t],[y[0],y[1]-t]],E=[...M,[y[0]+d,y[1]+d],[y[0]-d,y[1]+d],[y[0]+d,y[1]-d],[y[0]-d,y[1]-d]];return M.every(v=>Be(v,i))&&!n.some(v=>E.some(S=>Be(S,v)))},f=(y,M)=>h(u?[y,M]:[M,y]),p=(y,M)=>{let E=Math.ceil(Math.hypot(M[0]-y[0],M[1]-y[1])/.05);for(let v=1;v<E;v++)if(!h([y[0]+(M[0]-y[0])*v/E,y[1]+(M[1]-y[1])*v/E]))return!1;return!0},[_,m,g,w]=u?[s,a,l,c]:[l,c,s,a],x=[],b=!0;for(let y=_+t;y<=m-t+1e-6;y+=e){let M=null,E=null,v=.05;for(let k=g;k<=w+1e-6;k+=v)if(f(y,k)&&(E??=k),(!f(y,k)||k+v>w+1e-6)&&E!==null){let R=f(y,k)?k:k-v;(!M||R-E>M[1]-M[0])&&(M=[E,R]),E=null}if(!M||M[1]-M[0]<.2)continue;let S=k=>{let[R,A]=k?M:[M[1],M[0]];return[u?[y,R]:[R,y],u?[y,A]:[A,y]]},T=S(b),P=x[x.length-1];if(P&&n.length&&!p(P,T[0])){let k=S(!b);if(!p(P,k[0]))continue;T=k,b=!b}x.push(T[0],T[1]),b=!b}return x}function Ad(i,e=.7,t=12){return Array.from({length:t},(n,r)=>{let o=r/t*Math.PI*2;return[i[0]+Math.cos(o)*e,i[1]+Math.sin(o)*e]})}var Td=i=>Math.atan2(Math.sin(i),Math.cos(i));function sg(i,e,t){let n=null;if(e.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(e.mode==="returning"||e.mode==="docked")n=e.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(e.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Td(e.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),rg*t),!0)}let a=Math.atan2(r,o),l=Td(a-i.heading);if(i.heading=Td(i.heading+Math.sign(l)*Math.min(Math.abs(l),rg*t)),Math.abs(l)<.35){let c=Math.min(s,dS*t);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}var In=null,ag=new Map;function cg(i,e=0){let t=new tt,n=new Ft,r=_t(i.type);if(r?.light)Ec(t,r,{x:0,z:0,rotation:e,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Ed(t,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:e,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:e,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Tc(t,n,new tt,o)}return{buf:t,lines:n}}function fS(i,e=180,t,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${e}|${n}`,o=ag.get(r);if(o)return o;t&&ys(t),In??=new _r({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),In.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),In.setSize(e,e,!1),In.setClearColor(0,0);let{buf:s,lines:a}=cg(i),l=new Ii,c=new He(s.geometry(),new et({vertexColors:!0,color:new J(n,n,n)})),u=new qt(a.geometry(),new Yt({vertexColors:!0,color:new J(n*1.8,n*1.8,n*1.8)}));l.add(c,u);let d=new dn().setFromObject(c),h=d.getCenter(new V),f=new ei(-1,1,1,-1,.01,100);f.position.copy(h).add(new V(.9,.75,1.3).normalize().multiplyScalar(20)),f.lookAt(h),f.updateMatrixWorld();let p=.05;for(let g of[d.min.x,d.max.x])for(let w of[d.min.y,d.max.y])for(let x of[d.min.z,d.max.z]){let b=new V(g,w,x).applyMatrix4(f.matrixWorldInverse);p=Math.max(p,Math.abs(b.x),Math.abs(b.y))}let _=p*1.12;f.left=-_,f.right=_,f.top=_,f.bottom=-_,f.updateProjectionMatrix(),In.render(l,f);let m=In.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose(),ag.set(r,m),m}function pS(i,e,t=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(e)}|${t}|${r}`,s=lg.get(o);if(s)return s;n&&ys(n);let{buf:a,lines:l}=cg(i,e),c=new He(a.geometry(),new et({vertexColors:!0,color:new J(r,r,r)})),u=new qt(l.geometry(),new Yt({vertexColors:!0,color:new J(r*1.8,r*1.8,r*1.8)})),d=new dn().setFromObject(c);if(d.isEmpty())return null;let h=d.min.x,f=d.max.x,p=Math.max(0,d.min.y),_=d.max.y,m=Math.max(1,Math.min(1024,Math.round((f-h)*t))),g=Math.max(1,Math.min(1024,Math.round((_-p)*t)));In??=new _r({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),In.setPixelRatio(1),In.setSize(m,g,!1),In.setClearColor(0,0);let w=new Ii;w.add(c,u);let x=new ei(h,f,_,p,.01,100);x.position.set(0,0,50),x.lookAt(0,0,0),x.updateProjectionMatrix(),In.render(w,x);let b=In.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose();let y={url:b,x0:h,x1:f,y0:p,y1:_};return lg.set(o,y),y}var lg=new Map;var Fk={Group:kt,Mesh:He,MeshBasicMaterial:et,CanvasTexture:On,Color:J,PlaneGeometry:Un,BufferGeometry:Ke,Float32BufferAttribute:Te,DoubleSide:ht},hg={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},mS=2.4,dg=1.4,gS=.22,fg=140,Pd=32,_S=500,pg=33,mg=.028,bS=.09,ct=2767456,vS=1911110,xS=1,kd=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),Zc=450,gg=125,yS=.08,Jc={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},wS=new J(1714765);function MS(){let e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency||8;return e<=3||t<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Cd=class{host;options;renderer;scene=new Ii;camera=new on(38,1,.1,400);controls;labels;root=new kt;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;roofDirection={value:new V(0,1,1)};keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";productColors=!1;customLayers=new Map;customMemories=new Map;customContext=null;themeUniform={value:0};sun=null;weather=null;rain=new qt(new Ke,new Yt({color:10471679,transparent:!0,opacity:.4,blending:Dt,depthWrite:!1}));snow=new eo(new Ke,new hr({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new He(new Xo(1,28),new et({color:16767370,transparent:!0,opacity:0,blending:Dt,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(e,t={}){this.host=e,this.options=t,this.explode=t.explode??!0,this.renderer=this.makeRenderer(t.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",e.append(this.labels),this.patternTexture=TS(),this.blindTexture=ES(),this.haloTexture=PS(),this.ground=new He(new Un(1,1),new et({transparent:!1,blending:Dt,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(e)),this.resize()}get low(){return this.lowQuality}setParked(e){let t=[...e].map(([n,r])=>`${n}=${r}`).sort().join("|");t!==this.parkedSig&&(this.parkedSig=t,this.parked=e,this.building&&(this.rebuild(),this.invalidate()))}setStats(e){this.statsOn=e}setLabelInset(e){this.labelInset!==e&&(this.labelInset=e,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(e){this.orbitSpeed=e,this.orbitLast=0,this.invalidate()}setQuality(e){let t=this.renderer.domElement,n=this.makeRenderer(e);this.rebuildTier(),this.applyTierFlags(),t.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n,this.building&&this.rebuild();let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(e){ys(e),this.building&&(this.rebuild(),this.invalidate())}setProductColors(e){e!==this.productColors&&(this.productColors=e,qp(e),this.building&&this.rebuild(),this.invalidate())}setCustomPackState(e,t){this.customContext={hass:e,moment:t};for(let n of this.customLayers.values())n.update(e,t,this.building?.settings.pack_animations!==!1);for(let n of this.floors)this.buildGlow(n),this.buildHalos(n)}setBuilding(e){let t=this.building===null;this.building=e,jp(e),this.rebuild(),t&&this.fit(0),this.invalidate()}setKeepView(e){this.keepView=e}setFloor(e,t=!0){this.keepNext=this.keepView&&e!==null&&this.floorId!==null&&e!==this.floorId,this.floorId=e,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!t),this.applyHighlight(),this.fit(t?700:0)}setFloorStack(e){e!==this.floorStack&&(this.floorStack=e,this.applyTargets(!1))}setKeepRoof(e){e!==this.keepRoof&&(this.keepRoof=e,this.invalidate())}setExplode(e){e!==this.explode&&(this.explode=e,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(e){if(this.roomId=e,this.labelsDirty=!0,this.applyHighlight(),!e){this.fit(700);return}let t=this.floors.find(u=>u.floor.rooms.some(d=>d.id===e)),n=t?.floor.rooms.find(u=>u.id===e);if(!t||!n)return;let r=n.start_view;if(r){let u=t.floor.elevation+t.ty,[d,h]=Xi(n.points),f=r.target??{x:d,y:.3,z:h};this.controls.flyTo({target:new V(f.x,f.y+u,f.z),radius:r.radius,phi:r.phi,theta:r.theta});return}let[o,s]=Xi(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new V(Math.max(...a)-Math.min(...a),t.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new V(o,t.floor.elevation+t.ty+pt(t.floor,n)+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(e){this.wallMode=e;for(let t of this.floors)this.buildLamps(t);this.invalidate()}setDevices(e){this.devices=e,this.labelsDirty=!0,this.effectFloors=new Set(e.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(e.map(n=>[n.id,n.floorId]));let t=new Set;for(let n of e){t.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let o=r.el;r.icon!==n.icon&&(r.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let s=n.caption??"";r.caption!==s&&(r.caption=s,o.querySelector(".fp3d-dev-name").textContent=s);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,o.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,o.title=n.name,o.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?o.style.setProperty("--fp3d-glow",c):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)t.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(e){let t=JSON.stringify([...e]);if(t!==this.roofWindowsKey){this.roofWindowsKey=t,this.roofWindows=e,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(e){this.anchorCb=e,this.labelsDirty=!0,this.invalidate()}setAnchors(e){this.anchors=e,this.labelsDirty=!0,this.invalidate()}setSolarLevels(e){this.solarLevels=e;let t=!1;for(let n of this.roof?.lives??[])$s(n,e)&&(t=!0);for(let n of this.floors)n.solarLive&&$s(n.solarLive,e)&&(t=!0);this.solarActive=t,this.invalidate()}setPools(e){let t=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(t(e)!==t(this.pools)){this.pools=e,this.poolActive=e.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(e){e.poolGroup&&(J0(e.poolGroup),e.group.remove(e.poolGroup),e.poolGroup=void 0);let t=this.pools.filter(n=>n.floorId===e.floor.id);t.length&&(e.poolGroup=$0(t,this.flowTime),e.group.add(e.poolGroup))}setSound(e){let t=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(t(e)!==t(this.sound)){this.sound=e,this.soundActive=e.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new kt;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=e.filter(c=>c.floorId===n.floor.id),s=n.floor.elevation+.03;for(let c of o)if(c.playing)for(let u=0;u<3;u++){let d=new He(new es(.92,1,48),new et({color:3662079,transparent:!0,opacity:0,blending:Dt,depthWrite:!1,side:ht}));d.rotation.x=-Math.PI/2,d.position.set(c.x,s+u*.002,c.z),d.userData={sound:!0,phase:u/3,level:c.level},d.frustumCulled=!1,r.add(d)}let a=[],l=new Set;for(let c of o)for(let u of c.members){let d=o.find(f=>f.id===u);if(!d||d===c)continue;let h=[c.id,d.id].sort().join("|");l.has(h)||(l.add(h),a.push(c.x,s+.02,c.z,d.x,s+.02,d.z))}if(a.length){let c=new Ke;c.setAttribute("position",new Te(a,3));let u=new qt(c,new Yt({color:3662079,transparent:!0,opacity:.45,blending:Dt,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(e){let t=e/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(t*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(e){this.flows=e;let t=this.flowSeconds(),n=new Map;for(let r of e){let o=Rd(r),s=_g(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?t*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=e.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(e){this.pipes=e;for(let t of this.floors)this.buildPipes(t);this.invalidate()}buildPipes(e){let t=this.pipes.filter(o=>o.floorId===e.floor.id),n=JSON.stringify(t);if(n===e.pipeSig)return;e.pipeSig=n;let r=new tt;for(let o of t)z0(r,o);e.pipeMesh.geometry.dispose(),e.pipeMesh.geometry=r.geometry(),e.pipeMesh.visible=r.count>0}setPersons(e){this.labelsDirty=!0,this.persons=e;let t=new Set;for(let n of e){t.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let o=document.createElement("img");o.src=n.picture,o.alt="",o.addEventListener("error",()=>o.replaceWith(document.createTextNode(n.initials))),r.append(o)}else r.textContent=n.initials}for(let[n,r]of this.personPins)t.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(e,t){this.pickFurniture=e,this.pickOpenings=t}setAccent(e){let t=eg(e),n=t?1:0;n===Yc.value&&(!t||Kc.value.equals(new V(...t)))||(Yc.value=n,t&&Kc.value.set(...t),this.invalidate())}setTheme(e){if(e===this.theme)return;this.theme=e,this.themeUniform.value=Q0(e);let t=To(e),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines,this.roof.solarLines]:[]];for(let r of n)r.blending=t,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(e){this.furnish=e,e||this.selectFurniture(null),this.invalidate()}selectFurniture(e){e&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=e,this.updateGhost(),this.invalidate()}selectFurnitureSet(e){this.selectedSet=[...e],this.updateGhost(),this.invalidate()}setSun(e){this.sun=e;for(let t of this.floors)this.buildSun(t);this.placeSky(),this.invalidate()}setWeather(e){this.weather=e;for(let t of this.floors)this.buildSun(t);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let e=this.weather,t=!!e&&!this.lowQuality,n=e?new J(e.sky[0]/255,e.sky[1]/255,e.sky[2]/255):null;this.scene.fog=t&&e.fog>0&&n?new Uo(n,.01+.035*e.fog):null;let r=t?Math.round(700*e.rain):0,o=t?Math.round(450*e.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}seedParticles(e,t,n){if((e.geometry.getAttribute("position")?.count??0)===t)return;let o=this.weatherBox,s=new Float32Array(t*3),a=n?2:1;for(let c=0;c<t;c+=a){let u=o.x0+Math.random()*(o.x1-o.x0),d=o.y0+Math.random()*(o.y1-o.y0),h=o.z0+Math.random()*(o.z1-o.z0);s.set([u,d,h],c*3),n&&s.set([u,d-.45,h],c*3+3)}e.geometry.dispose();let l=new Ke;l.setAttribute("position",new Te(s,3)),e.geometry=l}stepWeather(e){let t=this.weather;if(!t||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(e-this.weatherLast)/1e3):0;if(this.weatherLast=e,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=t.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*t.rain)*n;for(let u=0;u<l.length;u+=6){let d=l[u+1]-c,h=l[u]+s*n;d<r.y0&&(d+=o,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[u]=h,l[u+1]=d,l[u+3]=h-s*.05,l[u+4]=d-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=e/1e3;for(let u=0;u<l.length;u+=3){let d=l[u+1]-(.9+.6*t.snow)*n,h=l[u]+(s+Math.sin(c+u)*.4)*n;d<r.y0&&(d+=o,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[u]=h,l[u+1]=d}a.needsUpdate=!0}return!0}placeSky(){let e=this.sun,t=this.weather,n=t?.cloud??0,r=!e||e.elevation<-3;if(!e||!t||t.disc===!1||n>.85||!r&&e.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*ft,s=(r?e.azimuth+180:e.azimuth)*ft,a=Math.max(10,Math.abs(e.elevation))*ft,l=this.weatherBox,c=new V((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),d=new V(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(d,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let h=this.skyDisc.material;h.color.set(r?13621486:16767370),h.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(e){let t=!!e!=!!this.roomTint;if(this.roomTint=e,this.tintTick=!0,this.applyHighlight(),t)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(e){this.screens=e;for(let t of this.floors)this.buildScreens(t);this.invalidate()}fillRoomPin(e,t,n){if(e.textContent=t||"\u2013",n){let r=document.createElement("small");r.textContent=n,e.append(r),e.classList.add("fp3d-pin-info")}else e.classList.remove("fp3d-pin-info")}setRoomInfo(e){if(!(e.size===this.roomInfo.size&&[...e].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=e;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,e.get(r.room.id))}}setFloorInfo(e){this.floorInfo=e;for(let t of this.floors){let n=t.label.querySelector("span"),r=e.get(t.floor.id)??this.options.floorInfo?.(t.floor)??"";n&&n.textContent!==r&&(n.textContent=r,t.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(e,t=!1){if(this.openingTargets=e,t)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=e.get(o)??Js,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&!!l.sensed==!!s.sensed||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(e){for(let[t,n]of e){let r=this.fridges.get(t)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(t,r)}for(let t of[...this.fridges.keys()])e.has(t)||this.fridges.delete(t);this.invalidate()}stepFridges(e){let t=1-Math.exp(-e/160),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*t,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(o=>n.has(o.id))&&this.buildFridges(r);return!0}buildFridges(e){let t=new tt;for(let n of e.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Qm(t,n,Ct(e.floor,n),r?.l??0,r?.r??0)}e.fridgeMesh.geometry.dispose(),e.fridgeMesh.geometry=t.geometry(),e.fridgeMesh.visible=t.count>0}resetView(){this.fit(700)}setStartView(e){this.startView=e}currentView(){let e=this.controls.view,t=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(e.theta),Math.cos(e.theta)),phi:e.phi,radius:e.radius,target:{x:e.target.x,y:e.target.y-t,z:e.target.z}}}floorBase(e){let t=e===null?void 0:this.floorMap.get(e);return t?t.floor.elevation+t.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let e of[this.rain,this.snow,this.skyDisc])e.geometry.dispose(),e.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let e of this.robots.values())e.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(e=>this.render(e)))}makeRenderer(e){let t=e==="low"||e==="auto"&&MS();this.lowQuality=t,Wm(t),this.applyWeather(),this.highQuality=e==="high";let n=new _r({antialias:!t,alpha:!0,powerPreference:t?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:e==="high"?2.5:2)),n.setClearColor(0,0),n.localClippingEnabled=!0,n.outputColorSpace=zt,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Oc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(e,t)=>this.onTap(e,t),hold:(e,t)=>this.onHold(e,t),swipeStart:(e,t,n,r)=>this.swipeStart(e,t,n,r),swipeMove:e=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",e,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(e,t)=>this.grabFurniture(e,t),drag:(e,t)=>this.dragFurniture(e,t),drop:()=>this.dropFurniture(),doubleTap:(e,t)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(e,t):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||(this.customContext&&this.setCustomPackState(this.customContext.hass,{...this.customContext.moment,time:this.customContext.moment.historical?this.customContext.moment.time:Date.now()}),this.invalidate())};resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.size={w:e,h:t},this.labelsDirty=!0,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let e of this.customLayers.values())e.dispose();this.customLayers.clear();for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.floors){for(let t of e.screenPics.values())t.mesh.material.dispose(),t.texture?.dispose();e.group.traverse(t=>{t.geometry?.dispose()});for(let t of Object.values(e.materials))t.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(e){let t=document.createElement("button");t.className="fp3d-dev",t.dataset.entity=e;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",t.append(n,r,o,s);let a,l=!1;t.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=e;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let d=t.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,d.left+d.width/2-h.left,d.top+d.height/2-h.top)},_S)});let c=()=>clearTimeout(a);return t.addEventListener("pointerleave",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerup",c),t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(e),this.options.onDeviceSelect?.(e);return}if(l)return;let d=t.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceTap?.(e,d.left+d.width/2-h.left,d.top+d.height/2-h.top)}),t.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let d=t.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,d.left+d.width/2-h.left,d.top+d.height/2-h.top)}}),t}buildLightSurface(e){let t=this.lowQuality?.5:.25,n=zm(e.floor,e.geo.walls2d,e.geo.wallBuckets,e.geo.openings,t,e.geo.holes,e.geo.roofUnder,Xc(e.floor,e.geo.roofUnder)),r=bg(e.floor,e.geo.openRooms);if(e.lightZones=r.some((a,l)=>a!==l)?r:null,e.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=xo(r,a.ra),a.rb=xo(r,a.rb)}e.lightSurface=n;let o=new Ke;o.setAttribute("position",new Te(n.pos,3)),o.setAttribute("color",new Te(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new Te(n.fold,1));let s=new cr(new Uint32Array(n.pos.length/3),1);s.setUsage(rh),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),e.glowMesh.geometry.dispose(),e.glowMesh.geometry=o,e.glowSig="",this.buildGlow(e)}lightSources(e){let t=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==e.floor.id||!r||n.pack&&_t(n.pack)?.spots?.length)continue;let o=n.top??e.floor.height,s=Gh(e.floor,n.x,n.z),a=xo(e.lightZones,s),[l,,c]=n.size??(n.lamp?Jc[n.lamp]:[.3,.3,.3]),u=n.base??0,d=n.top??o,h=t.length,f={ceiling:[d-.12,"ceiling"],downlight:[d-.03,"spot"],spot:[d-c,"spot"],panel:[d-.05,"ceiling"],pendant:[Math.max(u+.5,d-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<xS?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[p,_]=n.lamp?f[n.lamp]:[n.y,"omni"],m=n.lightY??p,g=r.color;if(n.lamp==="strip"){let w=(n.rotation??0)*ft,x=!!n.upright||Math.abs(n.roll??0)>45;for(let b of[-1/3,0,1/3])n.upright?t.push({x:n.x,y:u+l*(.5+b),z:n.z,color:g,level:r.level*.55,kind:"omni",room:a}):t.push({x:n.x+Math.cos(w)*l*b,y:m,z:n.z+Math.sin(w)*l*b,color:g,level:r.level*.55,kind:x?"omni":_,room:a})}else t.push({x:n.x,y:m,z:n.z,color:g,level:r.level,kind:_,room:a,..._==="spot"?{direction:[0,-1,0],angle:n.beam_angle??60}:{}});if(n.rotation_x||n.rotation_z){let w=fo(n,$c(n,o));for(let x=h;x<t.length;x++){let b=t[x];if([b.x,b.y,b.z]=w(b.x,b.y,b.z),b.kind==="spot"){let y=w(n.x,0,n.z),M=w(n.x,-1,n.z);b.direction=[M[0]-y[0],M[1]-y[1],M[2]-y[2]],b.angle=n.beam_angle??60}else b.kind="omni";b.room=xo(e.lightZones,Gh(e.floor,b.x,b.z))}}}if(this.customContext)for(let n of e.floor.furniture)for(let r of K0(n,e.floor,this.customContext.hass))r.room=xo(e.lightZones,r.room),t.push(r);return t}buildGlow(e){let t=e.lightSurface;if(!t)return;let n=this.lightSources(e),r=t.doors.map(d=>{let h=e.geo.openings.find(p=>p.opening.id===d.id);if(h&&vr(h.opening,h.exterior)==="passage")return 1;let f=e.openings.get(d.id);return f?Math.max(f.open,f.open2??0):.5}),o=n.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)},${d.z.toFixed(2)},${d.kind},${d.level.toFixed(3)},${d.color.map(h=>h.toFixed(3)).join("/")},${d.direction?.join("/")},${d.angle}`).join(";")+"|"+r.map(d=>d.toFixed(1)).join(",");if(o===e.glowSig)return;e.glowSig=o;let s=e.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){e.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=Om(t,n,.42,r);if(this.roomTint){let d=e.floor.rooms.length;for(let h=0;h<t.room.length;h++)if(t.room[h]!==d)for(let f=0;f<3;f++)l[h*3+f]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,u=0;for(let d=0;d<l.length/18;d++){let h=!1;for(let f=d*18;f<d*18+18&&!h;f++)h=l[f]>.004;if(h)for(let f=0;f<6;f++)c[u++]=d*6+f}s.index.needsUpdate=!0,s.setDrawRange(0,u),e.glowMesh.visible=u>0}makeMaterials(e){return{floor:Jt(new et({vertexColors:!0}),this.themeUniform),pattern:AS(this.patternTexture),wall:Jt(er(new et({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),e,"solid"),this.themeUniform),glassWall:er(new et({vertexColors:!0,transparent:!0,depthWrite:!1}),e,"glass"),shadow:new et({vertexColors:!0,blending:ls,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ht,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Jt(er(new Yt({vertexColors:!0,transparent:!0,blending:To(this.theme),depthWrite:!1}),e),this.themeUniform,!0),glow:er(new et({vertexColors:!0,transparent:!0,blending:Dt,depthWrite:!1,side:ht,polygonOffset:!0,polygonOffsetFactor:-3}),e,"solid"),frames:Jt(er(new et({vertexColors:!0,side:ht}),e),this.themeUniform),glass:er(new et({vertexColors:!0,transparent:!0,blending:Dt,depthWrite:!1,side:ht}),e),blinds:Jt(er(new et({map:this.blindTexture,vertexColors:!0,side:ht}),e),this.themeUniform),water:Jt(new et({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:ht}),this.themeUniform),flow:RS(this.flowTime),solarLive:yd(this.flowTime),lamps:Jt(new et({vertexColors:!0}),this.themeUniform),halos:new hr({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Dt,depthWrite:!1}),cones:new et({vertexColors:!0,transparent:!0,blending:Dt,depthWrite:!1,side:ht}),screens:new et({vertexColors:!0,transparent:!0,blending:Dt,depthWrite:!1,side:ht}),earth:Jt(new et({vertexColors:!0}),this.themeUniform),earthWell:Jt(new et({vertexColors:!0,side:ht}),this.themeUniform),earthLines:Jt(new Yt({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let e=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),t=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=td(n)?.id===o.id?s.filter(j=>j.face===ed).map(j=>({field:j,face:r0(n,j)})):[],l=s.filter(j=>j.face.startsWith(`wall:${o.id}:`));if(l.length){let j=new Map(i0(n,o.id).map(ce=>[ce.key,ce]));for(let ce of l){let De=j.get(ce.face);De&&a.push({field:ce,face:De})}}let u=(n.settings.roof.sections??[]).some(j=>vm(j,Wt(o)))?(j,ce)=>{let De=xm(n,j,ce);return De===null?null:De-o.elevation}:void 0,d=b0(vd(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,v0(n.floors,o),a,u),h={standing:{value:65535},glass:{value:0}},f=this.makeMaterials(h),p=new kt,_=new He(d.floor,f.floor),m=new He(d.shadow,f.shadow);m.renderOrder=1;let g=new He(d.floor,f.pattern);g.renderOrder=2;let w=new He(new Ke,f.glow);w.renderOrder=3,w.visible=!1;let x=new He(new Ke,f.frames),b=new He(new Ke,f.blinds),y=new He(new Ke,f.glass);y.renderOrder=4;let M=new He(new Ke,f.lamps);M.visible=!1;let E=new He(new Ke,f.cones);E.visible=!1,E.renderOrder=3;let v=new eo(new Ke,f.halos);v.visible=!1,v.renderOrder=7;let S=new He(new Ke,f.cones);S.visible=!1,S.renderOrder=7;let T=new He(new Ke,f.cones);T.visible=!1,T.renderOrder=7;let P=new He(new Ke,f.lamps);P.visible=!1;let k=new He(new Ke,f.lamps);k.visible=!1;let R=new He(new Ke,f.screens);R.visible=!1,R.renderOrder=5;let A=new He(new Ke,f.flow);A.renderOrder=5,A.frustumCulled=!1;let I=xd(a,o.elevation),L=I?new He(I.geometry,f.solarLive):null;L&&(L.renderOrder=6,$s(I,this.solarLevels));for(let j of[x,b,y])j.frustumCulled=!1;let z=new He(d.walls,f.glassWall),B=new He(d.walls,f.wall);z.renderOrder=6;let N=new He(d.water,f.water);N.renderOrder=4;let O=Math.min(...n.floors.filter(j=>j.rooms.length).map(j=>j.elevation)),U=M0(n,o,d.openings,o.elevation===O),Z=U?[new He(U.earth.geometry(),f.earth),new He(U.wells.geometry(),f.earthWell),new qt(U.lines.geometry(),f.earthLines)]:[];for(let j of Z)j.userData.earth=!0;p.add(_,m,g,w,B,N,new qt(d.lines,f.lines),x,b,y,A,M,E,v,S,T,P,k,R,z,...L?[L]:[],...Z),this.root.add(p);let q=document.createElement("button");q.className="fp3d-pin fp3d-pin-floor",q.dataset.floor=o.id;let he=document.createElement("b");he.textContent=o.name||"\u2013";let ie=document.createElement("span");ie.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",q.append(he,ie),q.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(q);let se=e.get(o.id),H=[],Y=null;for(let j of o.rooms){let ce=document.createElement("button");ce.className="fp3d-pin",ce.dataset.room=j.id,ce.dataset.floor=o.id,this.fillRoomPin(ce,j.name,this.roomInfo.get(j.id)),ce.addEventListener("click",()=>this.options.onRoomTap?.(o.id,j.id)),this.labels.append(ce);let[De,Ne]=Xi(j.points);H.push({pin:ce,room:j,cx:De,cz:Ne});for(let[Pe,ke]of j.points)Y??={x0:Pe,x1:Pe,z0:ke,z1:ke},Y.x0=Math.min(Y.x0,Pe),Y.x1=Math.max(Y.x1,Pe),Y.z0=Math.min(Y.z0,ke),Y.z1=Math.max(Y.z1,ke)}this.floors.push({floor:o,rank:r.indexOf(o),group:p,geo:d,floorMesh:_,shadowMesh:m,patternMesh:g,glowMesh:w,lightSurface:null,lightZones:null,framesMesh:x,glassMesh:y,blindsMesh:b,flowMesh:A,solarMesh:L,solarLive:I,lampMesh:M,sunMesh:E,sunSig:"",haloMesh:v,coneMesh:S,trailMesh:T,fridgeMesh:P,pipeMesh:k,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:B,screenMesh:R,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:Y,roomPins:H,labelSize:null,materials:f,mask:h,openings:new Map,y:se?.y??0,o:se?.o??1,ty:0,to:1,appliedO:-1,label:q});let le=this.customMemories.get(o.id)??new So;this.customMemories.set(o.id,le);let de=new Hc(o,f.wall,()=>this.invalidate(),le);p.add(de.group),this.customLayers.set(o.id,de),this.customContext&&de.update(this.customContext.hass,this.customContext.moment,this.building?.settings.pack_animations!==!1)}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o),this.buildPipes(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=t.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Js);this.buildOpenings(o),this.buildFlows(o),o.poolGroup=void 0,this.buildPoolWater(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(e.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(m=>m.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.solar.dispose(),this.roof.solarLines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(m=>m.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let e=this.building?p0(this.building,this.roofWindows):[];if(!e.length)return;let t=new Map(Qi(this.building).map(m=>[m.key,m])),n=this.building.settings.roof?.solar??[],r=Lc(yd(this.flowTime)),o=[],s=new kt,a=Jt(R0(new et({vertexColors:!0,transparent:!0,side:ht,depthWrite:!1}),this.roofDirection),this.themeUniform),l=Jt(new Yt({vertexColors:!0,transparent:!0,blending:To(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Jt(Lc(new et({vertexColors:!0,transparent:!0,side:ht})),this.themeUniform),u=Jt(Lc(new Yt({vertexColors:!0,transparent:!0,blending:To(this.theme),depthWrite:!1})),this.themeUniform,!0),d=Jt(new et({vertexColors:!0,transparent:!0,side:ht,depthWrite:!1}),this.themeUniform),h=new kt,f=Jt(new et({vertexColors:!0,side:ht}),this.themeUniform),p=Jt(new Yt({vertexColors:!0,transparent:!0,blending:To(this.theme),depthWrite:!1}),this.themeUniform,!0),_=e.map(m=>{let g=new kt,w=m.solid.geometry();if(w.computeVertexNormals(),g.add(new He(w,a),new qt(m.lines.geometry(),l)),m.solar){let{facing:M}=m.solar;g.add(new He(Us(m.solar.solid.geometry(),M.normals,M.points),c),new qt(Us(m.solar.lines.geometry(),M.lineNormals,M.linePoints),u))}m.glass.count&&g.add(new He(m.glass.geometry(),d));let x=n.flatMap(M=>{let E=t.get(M.face);return E&&(E.section?m.sections?.includes(E.section):m===e[0])?[{face:E,field:M}]:[]}),b=xd(x,m.floor.elevation+m.base);if(b){let M=new He(b.geometry,r);M.renderOrder=9,g.add(M),o.push(b),$s(b,this.solarLevels)}m.winRoof?.solid.count&&g.add(new He(m.winRoof.solid.geometry(),f),new qt(m.winRoof.lines.geometry(),p)),g.renderOrder=8,s.add(g);let y=null;return m.win?.solid.count&&(y=new kt,y.add(new He(m.win.solid.geometry(),f),new qt(m.win.lines.geometry(),p)),h.add(y)),{group:g,floorId:m.floor.id,rideId:Am(this.building,m.floor,m.sections??[]),base:m.base,lift:m.lift!==!1,win:y}});s.renderOrder=8,this.scene.add(s),this.scene.add(h),this.roof={group:s,parts:_,solid:a,lines:l,solar:c,solarLines:u,glass:d,live:r,lives:o,wins:h,winSolid:f,winLines:p},this.placeRoof()}placeRoof(e=1e3){let t=this.roof;if(!t)return!1;let r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?Uc(this.controls.view.radius,this.houseRadius,this.keepRoof).opacity:0,o=1-Math.exp(-e/fg),s=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),t.group.visible=this.roofO>.02;for(let a of t.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=this.floorMap.get(a.rideId)??l,u=c.ty>0?Math.min(1,c.y/c.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+c.y+a.base+Uc(this.controls.view.radius,this.houseRadius,this.keepRoof,this.roofO).lift+(a.lift?u*dg:0),a.win&&(a.win.position.y=l.floor.elevation+c.y+a.base+(a.lift?u*dg:0),a.win.visible=l.group.visible&&l.o>.5&&this.wallMode!=="cut")}return t.solid.opacity=this.roofO,t.solid.depthWrite=!1,t.lines.opacity=this.roofO,t.solar.opacity=this.roofO,t.solar.depthWrite=this.roofO>.9,t.solarLines.opacity=this.roofO,t.glass.opacity=this.roofO*.28,t.live.opacity=this.roofO,this.roofO!==s&&this.roofO!==r}applyTierFlags(){let e=this.lowQuality;this.ground.visible=!e&&this.theme!=="day"&&this.floors.some(t=>t.floor.rooms.length>0);for(let t of this.floors)t.patternMesh.visible=!e,t.shadowMesh.visible=!e&&t.o>.98;this.invalidate()}rebuildTier(){for(let e of this.floors)e.flowLayout="",this.buildFlows(e),this.buildLightSurface(e),e.lampShapeSig="",this.buildLamps(e)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(e){let t=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;t?n.rank>t.rank?(r=5+n.rank,o=0):n.rank<t.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:gS)):r=this.explode?n.rank*mS:0,n.ty=r,n.to=o;let a=t===n?Qt:ti;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),e&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(e){if(e.group.position.y=e.floor.elevation+e.y,e.group.visible=e.o>.02,e.shadowMesh.visible=e.o>.98&&!this.lowQuality,Math.abs(e.appliedO-e.o)<.001)return;e.appliedO=e.o;let t=e.materials,n=e.o>.999;for(let r of[t.floor,t.wall,t.frames,t.blinds,t.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=e.o;t.pattern.opacity=e.o,t.glow.opacity=e.o,t.lines.opacity=e.o,t.glass.opacity=e.o,t.glassWall.opacity=e.o,t.flow.opacity=e.o,t.solarLive.opacity=e.o,t.lamps.opacity=e.o,t.halos.opacity=e.o,t.cones.opacity=e.o,t.screens.opacity=e.o;for(let r of[t.earth,t.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=e.o;t.earthLines.opacity=e.o;for(let r of e.screenPics.values()){let o=r.mesh.material;o.transparent=e.o<.999,o.opacity=e.o}}stepFloors(e){let t=!1,n=1-Math.exp(-e/fg);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,t=!0,this.applyFloor(r)}return t}stepOpenings(e){let t=!1,n=1-Math.exp(-e/160);for(let r of this.floors){let o=!1;for(let[s,a]of r.openings){let l=this.openingTargets.get(s)??Js,c=(h,f)=>(h??null)===(f??null)||typeof h=="number"&&typeof f=="number"&&Math.abs(h-f)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},d=!1;for(let h of["open","open2","tilt","tilt2"]){let f=l[h]??0,p=a[h]??0,_=f-p;Math.abs(_)<.003?u[h]=f:(u[h]=p+_*n,d=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let h=l.cover-a.cover;Math.abs(h)<.003?u.cover=l.cover:(u.cover=a.cover+h*n,d=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(s,u),o=!0),t||=d}o&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return t}glowOf(e){if(!e.glow||!e.effect)return e.glow;let t=new J(...e.glow.color),n={h:0,s:0,l:0};t.getHSL(n);let r=(e.x*.37+e.z*.61)%1;return t.setHSL((n.h+this.effectTime*yS+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[t.r,t.g,t.b],level:e.glow.level}}buildLamps(e){let t=performance.now(),n=u=>{let d=this.flashes.get(u);if(!d||d<=t)return 0;let h=d-t,f=h>Zc?.5+.5*Math.sin(h/140):h/Zc;return Math.round(f*10)/10},r=this.devices.filter(u=>u.floorId===e.floor.id&&(u.lamp||u.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.rotation_x??0},${u.rotation_z??0},${u.pivot_y??""},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.top??""},${u.pack??""},${u.mirror?1:0}`).join(";"),s=r.map(u=>this.glowOf(u)),a=r.map((u,d)=>`${n(u.id)},${s[d]?`${s[d].level.toFixed(3)},${s[d].color.map(h=>h.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==e.lampShapeSig||!e.lampMesh.geometry.getAttribute("position")){e.lampShapeSig=o,e.lampColorSig="";let u=new tt,d=[],h=[],f=new Map,p=e.floor.height;for(let _ of r){let m=_.lamp==="strip"?(_.base??p)>Math.min(e.floor.cut_height,p):_.lamp?kd.has(_.lamp)&&(_.top??p)>Math.min(e.floor.cut_height,p):_.model==="camera_ceiling";if(!_.lamp&&!_.model||m&&this.wallMode==="cut")continue;let g=u.count,w=e.floor.furniture.find(E=>E.id===_.furnitureId),x=_.pack?br(w??{type:_.pack}):void 0,[b,y,M]=_.size??[.3,.3,.3];_.model?t0(u,_.model,_.x,_.model==="camera_ceiling"?_.top??p:_.y,_.z,_.rotation??0):x?Ec(u,x,{x:_.x,z:_.z,rotation:_.rotation??0,rotation_x:_.rotation_x,rotation_z:_.rotation_z,w:b,d:y,h:M,mirror:_.mirror},_.base??0,65280):Ed(u,{..._,lamp:_.lamp},_.top??p,65280),f.set(_.furnitureId??_.id,{start:g,end:u.count}),_.pickable!==!1&&d.push({id:_.id,start:g,end:u.count}),_.furnitureId&&h.push({id:_.furnitureId,start:g,end:u.count})}e.lampTris=d,e.lampFurnTris=h,e.lampRanges=f,e.lampShade=Wp(u.c),e.lampMesh.geometry.dispose(),e.lampMesh.geometry=u.geometry(),e.lampMesh.visible=u.count>0}if(a===e.lampColorSig)return;e.lampColorSig=a;let l=e.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,d)=>{let h=e.lampRanges.get(u.furnitureId??u.id);if(!h)return;let f=s[d],p=f?.55+.45*f.level:0,_=f?new J(...f.color.map(w=>Math.min(1,w*p))):new J(vS),m=n(u.id);m>0&&_.lerp(new J(1,1,1),.7*m);let g=new J(_.getHex());Xp(c,e.lampShade,h,[g.r,g.g,g.b])}),l.needsUpdate=!0,this.buildHalos(e)}buildSun(e){let t=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*ft,r=this.weather?.cloud??0,o=bg(e.floor,e.geo.openRooms),s=t?`${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...e.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===e.sunSig)return;e.sunSig=s;let a=new tt;if(t&&t.elevation>2&&r<.97){let l=Math.min(1,t.elevation/12)*(1-.8*r),c=t.elevation*ft,u=t.azimuth*ft,d=[Math.sin(n+u),-Math.cos(n+u)],h=1/Math.tan(c);for(let f of e.geo.openings){if(f.opening.type!=="window"||!f.exterior)continue;let p=e.floor.rooms.find(R=>R.id===f.opening.room_id);if(!p||p.points.length<3)continue;let _=pt(e.floor,p),m=[-f.toRoom[0],-f.toRoom[1]],g=m[0]*d[0]+m[1]*d[1];if(g<.05)continue;let w=e.openings.get(f.opening.id),x=f.top-(w?.cover??0)*(f.top-f.sill);if(x-f.sill<.05)continue;let b=(R,A)=>{let I=Math.min(7,(A-_)*h);return[f.start[0]+f.axis[0]*R+f.toRoom[0]*f.faceRoom-d[0]*I,_+.02,f.start[1]+f.axis[1]*R+f.toRoom[1]*f.faceRoom-d[1]*I]},y=.14*l*Math.min(1,g*1.5),M=new J(1*y,.82*y,.55*y),E=M.clone().multiplyScalar(.45),v=e.floor.rooms.findIndex(R=>R.id===f.opening.room_id);if(v<0||e.floor.rooms[v].points.length<3)continue;let S=o[v],T=e.floor.rooms.filter((R,A)=>o[A]===S&&Math.abs(pt(e.floor,R)-_)<.001&&R.points.length>=3).map(R=>R.points),P=Math.max(1,Math.ceil(Math.min(7,(x-_)*h)/.25)),k=Math.max(1,Math.ceil(f.width/.3));for(let R=0;R<P;R++){let A=f.sill+(x-f.sill)*R/P,I=f.sill+(x-f.sill)*(R+1)/P,L=R/P,z=(R+1)/P,B=M.clone().lerp(E,L),N=M.clone().lerp(E,z);for(let O=0;O<k;O++){let U=f.width*O/k,Z=f.width*(O+1)/k,q=b((U+Z)/2,(A+I)/2);if(!T.some(Y=>Be([q[0],q[2]],Y)))continue;let he=b(U,A),ie=b(Z,A),se=b(Z,I),H=b(U,I);a.tri(he,ie,se,B,B,N),a.tri(he,se,H,B,N,N)}}}this.pushRoofSun(e,a,o)}e.sunMesh.geometry.dispose(),e.sunMesh.geometry=a.geometry(),e.sunMesh.visible=a.count>0}pushRoofSun(e,t,n){this.sun&&this.building&&P0(t,this.building,e.floor,this.sun,this.weather?.cloud??0,this.roofWindows,e.geo.holes,n)}buildHalos(e){if(this.lowQuality){e.haloMesh.visible=!1,e.coneMesh.visible=!1;return}let t=e.floor.height,n=[],r=[],o=new tt,s=[];for(let l of this.devices){if(l.model&&l.floorId===e.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let b=(l.rotation??0)*ft,y=[-Math.sin(b),Math.cos(b)],M=l.model==="camera_ceiling",E=l.reach??(M?3:4.5),v=(l.fov??(M?360:90))*ft/2,S=l.motion?new J(.9,.12,.16):new J(.04,.22,.28),T=new J(0,0,0),P=Math.max(4,Math.round(v/.15)),k=mn(e.floor,l.x,l.z)+.015,R=e.geo.walls2d,A=N=>{let O=N.b[0]-N.a[0],U=N.b[1]-N.a[1],Z=O*O+U*U||1,q=Math.max(0,Math.min(1,((l.x-N.a[0])*O+(l.z-N.a[1])*U)/Z));return Math.hypot(l.x-(N.a[0]+O*q),l.z-(N.a[1]+U*q))},I=null;for(let N of R)A(N)<.45&&(!I||A(N)<A(I))&&(I=N);let L=N=>{let O=y[0]*Math.cos(N)-y[1]*Math.sin(N),U=y[1]*Math.cos(N)+y[0]*Math.sin(N),Z=E;for(let q of R){let he=q.b[0]-q.a[0],ie=q.b[1]-q.a[1],se=O*ie-U*he;if(Math.abs(se)<1e-9)continue;let H=((q.a[0]-l.x)*ie-(q.a[1]-l.z)*he)/se,Y=((q.a[0]-l.x)*U-(q.a[1]-l.z)*O)/se;q===I&&H<=.45||H>.02&&H<Z&&Y>=0&&Y<=1&&(Z=H)}return Z},z=N=>{let O=L(N);return[l.x+(y[0]*Math.cos(N)-y[1]*Math.sin(N))*O,k,l.z+(y[1]*Math.cos(N)+y[0]*Math.sin(N))*O]},B=o.count;for(let N=0;N<P;N++)o.tri([l.x,k,l.z],z(-v+2*v*(N+1)/P),z(-v+2*v*N/P),S,T,T);s.push({id:l.id,start:B,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==e.floor.id||!l.lamp||!c||kd.has(l.lamp)&&this.wallMode==="cut"&&(l.top??t)>Math.min(e.floor.cut_height,t))continue;let u=l.top??t,[d,h,f]=l.size??Jc[l.lamp],p=l.base??0,_=n.length,m=o.p.length,g=(l.rotation??0)*ft,w={ceiling:u-.07,downlight:u-.03,spot:u-f,panel:u-.03,pendant:Math.max(p+.4,u-f)+.08,floor:p+f-.15,uplight:p+f,table:p+f-.09,wall:p+f/2,strip:p+Math.max(.02,f)-.01,bollard:p+f-.08,garden:p+f-.03}[l.lamp],x=(b,y,M=1)=>{n.push(b,w,y),r.push(...c.color.map(E=>E*c.level*.7*M))};if(l.lamp==="strip")for(let b of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,p+d*(.5+b),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6))):x(l.x+Math.cos(g)*d*b,l.z+Math.sin(g)*d*b,.6);else l.lamp==="wall"?x(l.x-Math.sin(g)*(h/2+.05),l.z+Math.cos(g)*(h/2+.05)):x(l.x,l.z);kn(n,_,l,$c(l,t)),kn(o.p,m,l,$c(l,t))}if(this.highQuality)for(let l of this.lightSources(e))Y0(o,l,e.floor,e.lightSurface?.blockers??[],Xc(e.floor,e.geo.roofUnder));let a=new Ke;a.setAttribute("position",new Te(n,3)),a.setAttribute("color",new Te(r,3)),e.haloMesh.geometry.dispose(),e.haloMesh.geometry=a,e.haloMesh.visible=n.length>0,e.coneMesh.geometry.dispose(),e.coneMesh.geometry=o.geometry(),e.coneMesh.visible=o.count>0,e.coneTris=s}buildScreens(e){let t=vd(e.floor,this.parked).furniture.filter(o=>this.screens.has(o.id)),n=t.map(o=>`${o.id}:${o.x},${o.z},${o.rotation},${o.rotation_x??0},${o.rotation_z??0},${o.w},${o.d},${o.h},${o.mount_y??""},${o.mirror?1:0}:${JSON.stringify(this.screens.get(o.id))}`).join(";");if(n===e.screenSig&&e.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(e,t);e.screenSig=n;let r=new tt;for(let o of t){let s=this.screens.get(o.id),a=o.rotation*ft,l=Math.cos(a),c=Math.sin(a),u=fo(o,Ct(e.floor,o)+o.h/2),d=(y,M,E)=>u(o.x+y*l-E*c,M,o.z+y*c+E*l);if(s.faces){let y=Math.max(.05,o.w)*(o.mirror?-1:1),M=Math.max(.05,o.d),E=Math.max(.005,o.h),v=Ct(e.floor,o);for(let S of s.faces){if(S.part==="lights"){let O=_t(o.type),U=Z=>["#e8f4ff","#ff3b4f"].includes(Z.color.toLowerCase());if(O&&O.parts.some(U)){let Z=new J(...S.color.map(q=>Math.min(1,q*(.4+.6*S.level))));zs(r,O,o,v,Z.getHex(),U)}continue}if(S.part==="cabin"){let O=_t(o.type),U=Z=>Z.color.toLowerCase()==="#13283a"||Z.color==="glass";if(O&&O.parts.some(U)){let Z=new J(...S.color.map(q=>Math.min(1,q*(.3+.5*S.level))));zs(r,O,o,v,Z.getHex(),U);continue}}if(S.part==="burners"&&_t(o.type)){let O=_t(o.type),U=new J(...S.color.map(Z=>Math.min(1,Z*(.25+.6*S.level))));zs(r,O,o,v,U.getHex(),Kp);continue}if(S.part==="burners"){let O=new J(...S.color.map(Z=>Math.min(1,Z*(.25+.6*S.level)))),U=v+E+.008;for(let[Z,q,he]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let ie=Z*Math.abs(y)/.6,se=q*M/.62,H=14;for(let Y=0;Y<H;Y++){let le=Y/H*Math.PI*2,de=(Y+1)/H*Math.PI*2;r.tri(d(ie,U,se),d(ie+Math.cos(le)*he,U,se+Math.sin(le)*he),d(ie+Math.cos(de)*he,U,se+Math.sin(de)*he),O)}}continue}if(S.part==="band"||S.part==="cabin"){let O=S.part==="cabin",U=v+E*(O?.6:.42),Z=O?v+E*.86:U+.07,q=new J(...S.color.map(H=>Math.min(1,H*(.3+.45*S.level)))),he=Math.abs(y)/2+(O?.012:.02),ie=M/2+(O?.012:.02),se=[[-he,-ie],[he,-ie],[he,ie],[-he,ie]];for(let H=0;H<4;H++){let Y=se[H],le=se[(H+1)%4],de=d(Y[0]*Math.sign(y),U,Y[1]),j=d(le[0]*Math.sign(y),U,le[1]),ce=d(le[0]*Math.sign(y),Z,le[1]),De=d(Y[0]*Math.sign(y),Z,Y[1]);r.tri(de,j,ce,q),r.tri(de,ce,De,q)}continue}let T=S.part==="right"?.03:-Math.abs(y)/2+.03,P=S.part==="left"?-.03:Math.abs(y)/2-.03,k=v+(S.part==="bottom"?E*.45:E)+.006,R=new J(...S.color.map(O=>Math.min(1,O*(.35+.65*S.level)))),A=new J(0,0,0),I=(O,U,Z=k)=>d(O*Math.sign(y),Z,U),L=[I(T,-M/2+.03),I(P,-M/2+.03),I(P,M/2-.03),I(T,M/2-.03)];r.tri(L[0],L[2],L[1],R),r.tri(L[0],L[3],L[2],R);let z=.12+.1*S.level,B=R.clone().multiplyScalar(.5),N=[I(T-z,-M/2-z,k+.004),I(P+z,-M/2-z,k+.004),I(P+z,M/2+z,k+.004),I(T-z,M/2+z,k+.004)];for(let O=0;O<4;O++){let U=(O+1)%4;r.tri(L[O],N[U],N[O],B,A,A),r.tri(L[O],L[U],N[U],B,B,A)}}continue}let h=_t(o.type);if(h&&!h.light&&s.ring&&h.parts.some(y=>y.glow)){let y=new J(...s.color.map(M=>Math.min(1,M*(.45+.55*s.level))));zs(r,h,o,Ct(e.floor,o),y.getHex())}let f=Jh(o,e.floor);if(!f)continue;let p=new J(...s.color.map(y=>Math.min(1,y*(.35+.65*s.level)))),_=new J(0,0,0),m=f.z+.004;if(r.tri(d(f.x0,f.y0,m),d(f.x1,f.y0,m),d(f.x1,f.y1,m),p),r.tri(d(f.x0,f.y0,m),d(f.x1,f.y1,m),d(f.x0,f.y1,m),p),s.plain)continue;let g=.18+.12*s.level,w=p.clone().multiplyScalar(.5),x=[d(f.x0,f.y0,m),d(f.x1,f.y0,m),d(f.x1,f.y1,m),d(f.x0,f.y1,m)],b=[d(f.x0-g,f.y0-g,m+.01),d(f.x1+g,f.y0-g,m+.01),d(f.x1+g,f.y1+g,m+.01),d(f.x0-g,f.y1+g,m+.01)];for(let y=0;y<4;y++){let M=(y+1)%4;r.tri(x[y],b[y],b[M],w,_,_),r.tri(x[y],b[M],x[M],w,_,w)}}e.screenMesh.geometry.dispose(),e.screenMesh.geometry=r.geometry(),e.screenMesh.visible=r.count>0,this.updateScreenPictures(e,t)}updateScreenPictures(e,t){let n=new Map(t.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of e.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(e.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),e.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=Jh(o,e.floor);if(!a)continue;let l=e.screenPics.get(r);if(!l){let c=new He(new Un(1,1),new et({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},e.screenPics.set(r,l),e.group.add(c);let u=l;new rs().load(s.picture,d=>{if(e.screenPics.get(r)!==u){d.dispose();return}d.colorSpace=zt,u.texture=d;let h=u.mesh.material;h.map=d,h.needsUpdate=!0,this.placeScreenPicture(u.mesh,o,a,d,Ct(e.floor,o)+o.h/2),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture,Ct(e.floor,o)+o.h/2)}}placeScreenPicture(e,t,n,r,o){let s=r.image,a=s?.width&&s?.height?s.width/s.height:16/9,l=n.x1-n.x0-.04,c=n.y1-n.y0-.04,u=Math.min(l,c*a),d=u/a,h=t.rotation*ft,f=(n.x0+n.x1)/2,p=n.z+.008;e.scale.set(u,d,1),e.rotation.set((t.rotation_x??0)*ft,-h,(t.rotation_z??0)*ft,"YZX");let _=fo(t,o);e.position.set(..._(t.x+f*Math.cos(h)-p*Math.sin(h),(n.y0+n.y1)/2,t.z+f*Math.sin(h)+p*Math.cos(h)))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(e){let t=this.flows.filter(u=>u.floorId===e.floor.id).map(Rd).join(";"),n=[],r=[],o=[],s=[],a=[];for(let u of this.flows){if(u.floorId!==e.floor.id)continue;let d=this.flowPhase.get(Rd(u))??{speed:_g(u.power),offset:0},h=u.power>.5?Math.min(1,.5+u.power/2500):.22,f=u.color.map(w=>w*h),p=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(p<1e-4)continue;let _=[(u.b[0]-u.a[0])/p,(u.b[1]-u.a[1])/p,(u.b[2]-u.a[2])/p],m=[];if(Math.abs(_[1])<.5){let w=Math.hypot(_[0],_[2])||1;m.push([-_[2]/w,0,_[0]/w])}else m.push([1,0,0],[0,0,1]);let g=this.lowQuality?[[mg*1.4,1]]:[[bS,.25],[mg,1]];for(let[w,x]of g)for(let b of m){let y=w/2,M=(v,S)=>[v[0]+b[0]*y*S,v[1]+b[1]*y*S,v[2]+b[2]*y*S],E=[[M(u.a,-1),u.dist,0],[M(u.b,-1),u.dist+p,0],[M(u.b,1),u.dist+p,1],[M(u.a,1),u.dist,1]];for(let v of[0,1,2,0,2,3]){let[S,T,P]=E[v];n.push(S[0],S[1],S[2]),r.push(f[0]*x,f[1]*x,f[2]*x),o.push(T,P),s.push(d.speed),a.push(d.offset)}}}let l=e.flowMesh.geometry;if(t===e.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,d]of[["color",r],["flowSpeed",s],["flowOffset",a]]){let h=l.getAttribute(u);h.array.set(d),h.needsUpdate=!0}e.flowMesh.visible=n.length>0;return}e.flowLayout=t;let c=new Ke;c.setAttribute("position",new Te(n,3)),c.setAttribute("color",new Te(r,3)),c.setAttribute("uv",new Te(o,2)),c.setAttribute("flowSpeed",new Te(s,1)),c.setAttribute("flowOffset",new Te(a,1)),e.flowMesh.geometry.dispose(),e.flowMesh.geometry=c,e.flowMesh.visible=n.length>0}buildOpenings(e){let t=ig(e.geo.openings,e.openings,Math.min(e.floor.cut_height,Wt(e.floor)-e.floor.elevation),this.productColors);e.frameTris=t.frameTris,e.glassTris=t.glassTris,e.blindTris=t.blindTris;for(let[n,r]of[[e.framesMesh,t.frames],[e.glassMesh,t.glass],[e.blindsMesh,t.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(e=>e.to>.99)}applyHighlight(){for(let e of this.floors){let t=e.geo.floor.getAttribute("color");for(let n of e.geo.roomTris){let r=new J(n.color),o=this.roomTint?.get(n.roomId);o&&r.lerp(new J(...o).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(wS,o?.3:.75);for(let s=n.start*3;s<n.end*3;s++)t.setXYZ(s,r.r,r.g,r.b)}t.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".fp3d-pin"))e.classList.toggle("fp3d-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(e){let t=new dn;for(let d of this.activeFloors()){let h=d.floor.elevation+d.ty;for(let f of d.floor.rooms)for(let[p,_]of f.points)t.expandByPoint(new V(p,h+pt(d.floor,f),_)),t.expandByPoint(new V(p,h+Wt(d.floor)-d.floor.elevation,_))}t.isEmpty()&&t.set(new V(-4,0,-4),new V(4,2.5,4)),this.placeGround(),this.weatherBox={x0:t.min.x-6,x1:t.max.x+6,z0:t.min.z-6,z1:t.max.z+6,y0:t.min.y,y1:t.max.y+6},this.applyWeather(),this.placeSky();let n=t.getCenter(new V),r=t.getSize(new V),o=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=t.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;if(u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.keepNext){this.keepNext=!1;let d=this.controls.view;this.controls.flyTo({target:new V(d.target.x,n.y,d.target.z),radius:d.radius,phi:d.phi,theta:d.theta},e);return}this.controls.flyTo({target:n,radius:c?l.radius:o,phi:l?l.phi:.85,theta:l?l.theta:-.6},e)}placeGround(){let e=new dn,t=1/0;for(let s of this.floors){t=Math.min(t,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)e.expandByPoint(new V(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)e.expandByPoint(new V(l,0,c))}if(this.ground.visible=!e.isEmpty()&&!this.lowQuality&&this.theme!=="day",e.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=kS();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=e.getCenter(new V),r=e.getSize(new V),o=Pd*Math.ceil((Math.max(r.x,r.z)+16)/Pd);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,t-$t-.02,n.z)}distanceFor(e){let t=this.camera.fov*ft,n=2*Math.atan(Math.tan(t/2)*this.camera.aspect);return e.length()/2/Math.sin(Math.min(t,n)/2)}rayAt(e,t){let n=this.renderer.domElement.getBoundingClientRect(),r=new ss;return r.setFromCamera(new Ee(e/n.width*2-1,-(t/n.height)*2+1),this.camera),r}pick(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=l=>this.customLayers.get(l.floor.id)?.meshes()??[],s=r.flatMap(l=>[l.lampMesh,l.coneMesh,l.framesMesh,l.glassMesh,l.blindsMesh,l.wallMesh,l.floorMesh,...o(l)].filter(c=>c.visible)),a=(l,c)=>l.find(u=>c>=u.start&&c<u.end)?.id;for(let l of n.intersectObjects(s,!1)){if(l.faceIndex==null)continue;let c=l.faceIndex,u=r.find(d=>d.group===l.object.parent||o(d).includes(l.object));if(l.object.userData.furnitureId){if(this.wallMode==="cut"&&l.point.y>u.group.position.y+u.floor.cut_height)continue;let d=this.pickFurniture.get(String(l.object.userData.furnitureId));if(d)return{entity:d};continue}if(l.object===u.lampMesh||l.object===u.coneMesh){let d=a(l.object===u.lampMesh?u.lampTris:u.coneTris,c);if(d)return{entity:d}}else if(l.object===u.framesMesh||l.object===u.blindsMesh||l.object===u.glassMesh){if(this.wallMode==="cut"&&l.face){let f=l.object.geometry.getAttribute("fold")?.getX(l.face.a)??Ze;if(f!==Ze&&Math.floor(f/16)===0)continue}let d=a(l.object===u.framesMesh?u.frameTris:l.object===u.glassMesh?u.glassTris:u.blindTris,c),h=d?this.pickOpenings.get(d):void 0;if(h)return{entity:h}}else if(l.object===u.wallMesh){let d=a(u.geo.furnitureTris,c),h=d?this.pickFurniture.get(d):void 0;if(h)return{entity:h};if(l.face&&!d){let f=u.wallMesh.geometry.getAttribute("fold")?.getX(l.face.a)??32,p=Math.floor(f/16),_=f%16,m=this.wallMode==="cut"&&p===0,g=(u.mask.glass.value&1<<_)!==0;if(!m){let w=n.ray.direction,x=Math.hypot(w.x,w.z)||1,b=[l.point.x-w.x/x*.3,l.point.z-w.z/x*.3],y=u.floor.rooms.find(M=>M.points.length>=3&&Be(b,M.points))?.id??null;if(this.roomId!==null){if(y===this.roomId)return{floorId:u.floor.id,roomId:y}}else if(!g&&y)return{floorId:u.floor.id,roomId:y}}}}else if(l.object===u.floorMesh)return{floorId:u.floor.id,roomId:a(u.geo.roomTris.map(d=>({id:d.roomId,start:d.start,end:d.end})),c)??null}}return null}onTap(e,t){let n=this.pick(e,t);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Zc),this.invalidate(),this.options.onDeviceTap?.(n.entity,e,t);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh),...this.customLayers.get(a.floor.id)?.meshes()??[]],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(d=>d.group===a.object.parent||o(d).includes(a.object));if(!l)continue;if(a.object.userData.furnitureId){if(this.wallMode==="cut"&&a.point.y>l.group.position.y+l.floor.cut_height)continue;return{fv:l,id:String(a.object.userData.furnitureId),y:a.point.y}}if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let d=this.furnitureNear(l,a.point.x,a.point.z);if(d)return{fv:l,id:d,y:a.point.y};continue}let u=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(d=>a.faceIndex>=d.start&&a.faceIndex<d.end)?.id;if(u)return{fv:l,id:u,y:a.point.y}}return null}furnitureNear(e,t,n){let r=null;for(let o of e.floor.furniture){let s=o.rotation*ft,a=t-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,u=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,d=Math.max(c,u);d<.25&&(!r||d<r.d)&&(r={id:o.id,d})}return r?.id??null}floorPoint(e,t,n,r){let o=this.rayAt(t,n),s=r??e.floor.elevation+e.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(e){this.furnishTypes=e?new Set(e):null}setSurfaceGrab(e){this.surfaceGrab=e}pointerRay(e,t){return this.surfaceRay(e,t)}furnitureIdAt(e,t){return this.furnitureAt(e,t)?.id??null}surfaceRay(e,t){let n=this.rayAt(e,t).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(e,t){if(this.surfaceGrab?.start(this.surfaceRay(e,t)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(d=>d.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(e,t),l=s??a?.id,c=l?this.floors.find(d=>d.floor.furniture.some(h=>h.id===l)):void 0,u=c?.floor.furniture.find(d=>d.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,e,t)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,e,t):this.grabItem(a,s,e,t)}let o=this.furnitureAt(e,t);if(!o){let s=this.pick(e,t);return s&&"entity"in s?this.grabDevice(s.entity,e,t):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,e,t,o.y)}grabItem(e,t,n,r,o){let s=e.floor.furniture.find(d=>d.id===t),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(e,n,r,a);if(!s||!l)return!1;let c,u=this.rayAt(n,r).ray.direction;if(o!==void 0&&-u.y<.34){let d=this.camera.position,h=this.camera.getWorldDirection(new V),f=Math.hypot(h.x,h.z)||1,p=[h.x/f,h.z/f],_=Math.hypot(l[0]-d.x,l[1]-d.z,(a??0)-d.y),m=this.renderer.domElement.getBoundingClientRect().height||1,g=2*_*Math.tan(this.camera.fov*Math.PI/360)/m;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-p[1],p[0]],fwd:p,perPx:g,gain:Math.min(2,1/Math.max(.5,-u.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:e.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(e,t,n){let r=this.devices.find(a=>a.id===e),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,t,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(e),this.options.onDeviceSelect?.(e),!1):(this.deviceGrab={id:e,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(e),this.options.onDeviceSelect?.(e),!0)}setSelectedDevice(e){e!==this.selectedDevice&&this.selectDevice(e)}selectDevice(e){e&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=e;for(let[t,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",t===e)}dragFurniture(e,t){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(e,t));return}let n=this.deviceGrab;if(n){let h=this.floorMap.get(n.floorId),f=this.devices.find(m=>m.id===n.id),p=h&&this.floorPoint(h,e,t);if(!h||!f||!p)return;let _=this.building?.settings.grid??.05;n.x=f.x=Math.round((p[0]+n.offset[0])/_)*_,n.z=f.z=Math.round((p[1]+n.offset[1])/_)*_,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=r.screen,a;if(s){let h=(e-s.x0)*s.perPx,f=(t-s.y0)*s.perPx*s.gain;a=[s.fx+s.right[0]*h-s.fwd[0]*f-r.offset[0],s.fz+s.right[1]*h-s.fwd[1]*f-r.offset[1]]}else a=this.floorPoint(o,e,t,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=o.floor.furniture.find(h=>h.id===r.id),u=Math.round((a[0]+r.offset[0])/l)*l,d=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?T0(o.floor,c,u,d,this.building?.settings.wall_interior??0):[u,d],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let e=this.deviceGrab;this.deviceGrab=null,e?.moved&&this.options.onDeviceMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3);let t=this.grab;this.grab=null,t?.moved&&this.options.onFurnitureMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let e=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],t=new Ft,n;for(let r of e){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(t,o,s,r===this.selectedFurniture?new J(.25,.9,1):new J(1,.71,.28)))}n&&(this.ghost=new qt(t.geometry(),new Yt({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(e,t,n,r){let o=e.p.length,s=this.grab?.id===n.id?this.grab.x:n.x,a=this.grab?.id===n.id?this.grab.z:n.z,l=po(t.floor,n.x,n.z),c=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,u=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),d=n.mount_y!=null||_t(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Ct(t.floor,n):c?n.type==="lamp_pendant"?l-n.h-.1:l-u:Ct(t.floor,n),h=n.rotation*ft,f=Math.cos(h),p=Math.sin(h),_=(x,b,y)=>[s+x*f-b*p,y,a+x*p+b*f],m=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let x=0;x<4;x++){let[b,y]=m[x],[M,E]=m[(x+1)%4];e.seg(_(b,y,d+.01),_(M,E,d+.01),r),e.seg(_(b,y,d+u),_(M,E,d+u),r),e.seg(_(b,y,d+.01),_(b,y,d+u),r)}e.seg(_(-n.w/2,n.d/2+.03,d+.02),_(n.w/2,n.d/2+.03,d+.02),new J(1,1,1));let g={...n,x:s,z:a},w=d+n.h/2;if(n.type==="led_strip"&&(kn(e.p,o,{...g,rotation_x:n.tilt,rotation_z:n.upright?90:0},w),n.upright)){let x=n.w/2-n.h/2;for(let b=o+1;b<e.p.length;b+=3)e.p[b]+=x;w+=x}kn(e.p,o,g,w)}onHold(e,t){let n=this.pick(e,t);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,e,t)}swipeStart(e,t,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(e,t);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,e,t)!==!0?!1:(this.swipe={entity:o.entity,x:e,y:t},!0)}floorThumbnails(e=200,t=150){let n=this.floors.filter(g=>g.floor.rooms.some(w=>w.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(e*r),s=Math.round(t*r),a=new an(o,s);a.texture.colorSpace=zt;let l=new ei(-1,1,1,-1,.1,400),c=this.floors.map(g=>({fv:g,visible:g.group.visible,y:g.y,o:g.o,standing:g.mask.standing.value,glass:g.mask.glass.value})),u=this.roof?.group.visible??!1,d=this.ghost?.visible??!1,h=this.renderer.getClearAlpha(),f=new Uint8Array(o*s*4),p=document.createElement("canvas");p.width=o,p.height=s;let _=p.getContext("2d"),m=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let g of n){for(let R of this.floors)R.group.visible=R===g;g.y=0,g.o=1,this.applyFloor(g),g.group.visible=!0,g.mask.standing.value=0,g.mask.glass.value=0;let w=g.floor.rooms.flatMap(R=>R.points),x=g.floor.elevation,b=new dn(new V(Math.min(...w.map(R=>R[0]))-.3,x,Math.min(...w.map(R=>R[1]))-.3),new V(Math.max(...w.map(R=>R[0]))+.3,x+Math.min(g.floor.cut_height,g.floor.height),Math.max(...w.map(R=>R[1]))+.3)),y=b.getCenter(new V),M=-.6,E=.8,v=new V(Math.sin(E)*Math.sin(M),Math.cos(E),Math.sin(E)*Math.cos(M));l.position.copy(y).addScaledVector(v,100),l.lookAt(y),l.updateMatrixWorld();let S=.5,T=.5;for(let R of[b.min.x,b.max.x])for(let A of[b.min.y,b.max.y])for(let I of[b.min.z,b.max.z]){let L=new V(R,A,I).applyMatrix4(l.matrixWorldInverse);S=Math.max(S,Math.abs(L.x)),T=Math.max(T,Math.abs(L.y))}let P=o/s;S/T>P?T=S/P:S=T*P,l.left=-S*1.05,l.right=S*1.05,l.top=T*1.05,l.bottom=-T*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,f);let k=_.createImageData(o,s);for(let R=0;R<s;R++)k.data.set(f.subarray((s-1-R)*o*4,(s-R)*o*4),R*o*4);_.putImageData(k,0,0),m.push({floorId:g.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(h);for(let g of c)g.fv.y=g.y,g.fv.o=g.o,g.fv.mask.standing.value=g.standing,g.fv.mask.glass.value=g.glass,this.applyFloor(g.fv),g.fv.group.visible=g.visible;this.roof&&(this.roof.group.visible=u,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=d),a.dispose(),this.invalidate()}return m}setRobots(e){let t=new Set;for(let n of e){t.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?og(n.room,void 0,void 0,n.obstacles):Ad(n.rest),l=a.length?a:Ad(n.rest),c=0;l.forEach((u,d)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=d)}),r.motion.path=l,r.motion.next=c,n.room&&!Be(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(hg[n.mode])}for(let[n,r]of this.robots)t.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(e){if(!this.robotGeo){let r=new tt,o=(a,l,c,u,d)=>{let h=[];for(let f=0;f<20;f++)h.push([Math.cos(f/20*Math.PI*2)*a,Math.sin(f/20*Math.PI*2)*a]);St(r,h,l,c,u,d,{aoFrom:0,bottom:!1})};o(.17,.012,.08,2371657,3424863),o(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new et({vertexColors:!0});let s=new tt;St(s,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=s.geometry()}let t=new kt,n=new et({color:hg[e.mode]});return t.add(new He(this.robotGeo,this.robotMat),new He(this.robotLedGeo,n)),{info:e,motion:{pos:[...e.rest],heading:e.restHeading,path:[],next:0},group:t,led:n}}stepRobots(e){if(!this.robots.size)return!1;let t=this.robotLast?Math.min(.2,(e-this.robotLast)/1e3):0;this.robotLast=e;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),t>0?n=sg(r.motion,r.info,t)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],mn(o.floor,r.motion.pos[0],r.motion.pos[1]),r.motion.pos[1]),r.group.visible=!r.info.inModel||r.info.mode==="cleaning"||Math.hypot(r.motion.pos[0]-r.info.rest[0],r.motion.pos[1]-r.info.rest[1])>.05,r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(e,t=[]){let n=a=>new J(.25-.2*a,.95-.83*a,1-.7*a),r=new J(0,0,0),o=new J(.3,1,.6),s=.02;for(let a of this.floors){let l=new tt;for(let u of t)u.floorId===a.floor.id&&u.points.forEach(([d,h],f)=>{let p=u.points[f-1];if(p){let _=Math.hypot(d-p[0],h-p[1])||1,m=-(h-p[1])/_*.1,g=(d-p[0])/_*.1;l.tri([p[0]+m,s,p[1]+g],[d+m,s,h+g],[d-m,s,h-g],o,o,o),l.tri([p[0]+m,s,p[1]+g],[d-m,s,h-g],[p[0]-m,s,p[1]-g],o,o,o)}for(let _=0;_<10;_++){let m=_/10*Math.PI*2,g=(_+1)/10*Math.PI*2;l.tri([d,s,h],[d+Math.cos(g)*.35,s,h+Math.sin(g)*.35],[d+Math.cos(m)*.35,s,h+Math.sin(m)*.35],o,r,r)}});let c=null;for(let u of e){if(u.floorId!==a.floor.id)continue;let d=n(u.age);if(c){let h=Math.hypot(u.x-c.x,u.z-c.z)||1,f=-(u.z-c.z)/h*.06,p=(u.x-c.x)/h*.06,_=n(c.age);l.tri([c.x+f,s,c.z+p],[u.x+f,s,u.z+p],[u.x-f,s,u.z-p],_,d,d),l.tri([c.x+f,s,c.z+p],[u.x-f,s,u.z-p],[c.x-f,s,c.z-p],_,d,_)}for(let h=0;h<12;h++){let f=h/12*Math.PI*2,p=(h+1)/12*Math.PI*2;l.tri([u.x,s,u.z],[u.x+Math.cos(p)*.22,s,u.z+Math.sin(p)*.22],[u.x+Math.cos(f)*.22,s,u.z+Math.sin(f)*.22],d,r,r)}c=u}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(e,t=900){this.controls.flyTo(e,t)}lookThrough(e){let t=this.devices.find(c=>c.id===e&&c.model),n=t&&this.floorMap.get(t.floorId);if(!t||!n)return!1;let r=(t.rotation??0)*ft,o=t.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(t.tilt??(o?65:20))*ft)),a=n.floor.elevation+n.ty+(o?(t.top??n.floor.height)-.1:t.y),l=new V(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new V(t.x,a,t.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(e){let t=performance.now()+Zc;for(let n of e)this.flashes.set(n,t);e.length&&this.invalidate()}focus(e,t,n,r,o){let s=this.floorMap.get(e);if(s){if(this.controls.flyTo({target:new V(t,s.floor.elevation+s.ty+r,n),radius:5.5,phi:.78},900),o){this.flashes.set(o,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(e){if(this.frame=0,this.disposed)return;let t=this.lastFrame?Math.min(100,e-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,e-this.orbitLast)/1e3),this.orbitLast=e,n=!0):this.orbitLast=0;let r=this.controls.update(e),o=this.stepFloors(t),s=!1;for(let[p,_]of this.customLayers){let m=this.floorMap.get(p);m&&(_.clip(this.wallMode==="cut"?m.floor.cut_height:null,m.group.position.y,m.o),m.o>.02&&(s=_.step(t)||s))}let a=this.stepOpenings(t)||this.stepFridges(t)||s,l=!1;if(this.flashes.size){let p=new Set;for(let[_,m]of this.flashes){let g=this.deviceFloor.get(_);g&&p.add(g),m<=e&&this.flashes.delete(_)}l=this.flashes.size>0;for(let _ of this.floors)p.has(_.floor.id)&&this.buildLamps(_)}let c=this.placeRoof(t),u=this.stepRobots(e),d=this.stepWeather(e),h=r||o||a||l||c,f=[];if((r||this.controls.busy)&&f.push("camera"),o&&f.push("floors"),a&&f.push("openings"),l&&f.push("flash"),c&&f.push("roof"),this.flowActive&&f.push("flow"),this.soundActive&&f.push("sound"),this.poolActive&&f.push("pool"),this.solarActive&&f.push("solar"),this.effectTick&&f.push("effect"),u&&f.push("robot"),n&&f.push("orbit"),this.tintTick&&f.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=h?e:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(e),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(e,f),h&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let p=this.lowQuality?2*gg:gg;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=p/1e3,this.effectTick=!0;for(let _ of this.floors)_.o<.02||!this.effectFloors.has(_.floor.id)||(this.buildLamps(_),this.buildGlow(_));this.invalidate()},p)}!h&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&d&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!h&&u&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*pg:pg))}updateWalls(){let e=this.camera.position,t=this.controls.view.target,n=e.x-t.x,r=e.z-t.z,o=Math.hypot(n,r)||1;this.roofDirection.value.set(n/o,(e.y-t.y)/Math.hypot(o,e.y-t.y),r/o);for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((u,d)=>{let h=u?u[0]*n/o+u[1]*r/o>=.25:a;!l&&h&&(c|=1<<d)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let e=this.controls.view,t=this.viewKey;return t[0]===e.target.x&&t[1]===e.target.y&&t[2]===e.target.z&&t[3]===e.radius&&t[4]===e.theta&&t[5]===e.phi?!1:(t[0]=e.target.x,t[1]=e.target.y,t[2]=e.target.z,t[3]=e.radius,t[4]=e.theta,t[5]=e.phi,!0)}place(e,t){let n=t===null;e.hidden!==n&&(e.hidden=n),t!==null&&this.placed.get(e)!==t&&(this.placed.set(e,t),e.style.transform=t)}updateLabels(){let{w:e,h:t}=this.size,n=new V,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,u=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let _ of[a.x0,a.x1])for(let m of[a.z0,a.z1]){n.set(_,u,m).project(this.camera);let g=(n.x+1)/2*e,w=(1-n.y)/2*t;(!l||g<l.x)&&(l={x:g,y:w}),(!c||g>c.x)&&(c={x:g,y:w})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let d=s.labelSize.w,h=8+this.labelInset,f=l.x-d-14,p=l.y;f<h&&this.labelInset&&(f=c.x+14,p=c.y),o.push({fv:s,left:Math.max(h,Math.min(e-d-8,f)),y:p,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new V(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?Uc(this.controls.view.radius,this.houseRadius,this.keepRoof,this.roofO).lift:0),s.p[2]),u=this.camera.position.clone().sub(c),d=u.length(),h=u.normalize().dot(new V(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let f=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,d)))*s.size;this.anchorCb(a,(n.x+1)/2*e,(1-n.y)/2*t,!f,p,h)}),this.updateDevicePins(e,t);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l+pt(s.floor,c.room),c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}}otherFloor(e){return this.floorId!==null&&e.floor.id!==this.floorId}updateDevicePins(e,t){let n=new V,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null);continue}n.set(o.x,a.floor.elevation+a.y+.9,o.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,l?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let u=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==u&&(this.pinMode.set(s,u),s.classList.toggle("fp3d-dev-full",u==="full"),s.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(s,`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}reportStats(e,t){if(!this.statsOn||!this.options.onStats)return;let n=t.length>0;this.fpsStart||(this.fpsStart=e),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,e-this.lastStatsFrame)),this.lastStatsFrame=n?e:0,this.fpsFrames++;let r=e-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:t,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=SS(this.renderer)}),this.fpsFrames=0,this.fpsStart=e,this.worstFrame=0}}};function SS(i){try{let e=i.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER);return typeof n=="string"?n:null}catch{return null}}function TS(){let e=document.createElement("canvas");e.width=256*3,e.height=256*2;let t=e.getContext("2d"),n=(s,a,l,c,u)=>{t.strokeStyle=`rgba(55,224,255,${u})`,t.beginPath(),t.moveTo(s,a),t.lineTo(l,c),t.stroke()};t.lineWidth=1.5;let r=(s,a,l)=>{t.save(),t.beginPath(),t.rect(s*256,a*256,256,256),t.clip(),l(s*256,a*256),t.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let u=s+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let u=l?256/4:0;for(let d of[u,u+256/2])n(s+d+.75,c,s+d+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),t.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)t.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new On(e);return o.flipY=!1,o.wrapS=xn,o.wrapT=xn,o.anisotropy=4,o.colorSpace=zt,o}function AS(i){let e=new et({map:i,transparent:!0,blending:Dt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},e.customProgramCacheKey=()=>"fp3d-pattern",e}function ES(){let i=document.createElement("canvas");i.width=8,i.height=32;let e=i.getContext("2d");e.fillStyle="#1a2742",e.fillRect(0,0,8,32),e.fillStyle="#223556",e.fillRect(0,4,8,14),e.fillStyle="rgba(55,224,255,0.45)",e.fillRect(0,29,8,2);let t=new On(i);return t.wrapS=lr,t.wrapT=lr,t.colorSpace=zt,t}function Rd(i){let e=t=>Math.round(t*100);return`${i.floorId}:${i.a.map(e).join(",")}>${i.b.map(e).join(",")}`}function _g(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function RS(i){let e=new et({vertexColors:!0,transparent:!0,blending:Dt,depthWrite:!1,side:ht});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},e.customProgramCacheKey=()=>"fp3d-flow",e}function bg(i,e){let t=i.rooms.map((r,o)=>o),n=r=>t[r]===r?r:t[r]=n(t[r]);for(let[r,o]of e){let s=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(t[Math.max(l,c)]=Math.min(l,c))}return t.map((r,o)=>n(o))}function PS(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new On(e);return r.colorSpace=zt,r}function kS(){let e=Pd,t=document.createElement("canvas");t.width=1024,t.height=1024;let n=t.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=e;s++){let a=Math.round(s/e*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new On(t);return o.anisotropy=4,o.colorSpace=zt,o}function Jk(i,e){return new Cd(i,e)}function Ed(i,e,t,n){t=e.top??t;let r=i.p.length;CS(i,e,t,n),kn(i.p,r,e,$c(e,t))}function $c(i,e){if(i.pivot_y!=null)return i.pivot_y;let[t,,n]=i.size??(i.lamp?Jc[i.lamp]:[.3,.3,.3]);return i.lamp&&kd.has(i.lamp)?e-n/2:(i.base??0)+(i.lamp==="strip"&&i.upright?t:n)/2}function CS(i,e,t,n){let[r,o,s]=e.size??Jc[e.lamp],a=e.base??0,l=(e.rotation??0)*ft,c=Math.cos(l),u=Math.sin(l),d=(_,m)=>[e.x+_*c-m*u,e.z+_*u+m*c],h=(_,m,g,w,x,b=14)=>{let y=[];for(let M=0;M<b;M++){let E=M/b*Math.PI*2;y.push([e.x+Math.cos(E)*_,e.z+Math.sin(E)*_])}St(i,y,m,g,w,x,{aoFrom:0,bottom:!0})},f=(_,m,g,w,x,b,y,M=y)=>St(i,[d(_,g),d(m,g),d(m,w),d(_,w)],x,b,y,M,{aoFrom:0,bottom:!0}),p=Math.max(.05,Math.min(r,o)/2);switch(e.lamp){case"ceiling":h(p*.25,t-.04,t,ct,ct,8),h(p,t-Math.max(.04,s)-.035,t-.04,n,n);break;case"pendant":{let _=Math.max(.4,t-s);h(.06,t-.02,t,ct,ct,8);let m=e.variant==="globe"?_+2*p:e.variant==="drum"?_+.24:_+.2;if(h(.008,m,t-.02,ct,ct,5),e.variant==="globe")for(let w=0;w<7;w++){let x=Math.PI*(w/7),b=Math.PI*((w+1)/7);h(p*Math.max(.2,Math.sin((x+b)/2)),_+p-p*Math.cos(x),_+p-p*Math.cos(b),n,n,14)}else if(e.variant==="cone")for(let w=0;w<4;w++)h(p*(.25+.75*(4-w)/4),_+.06*w,_+.06*(w+1),n,n,16);else e.variant==="drum"?h(p,_,_+.24,n,n,18):(h(p*.35,_+.14,_+.2,n,n,12),h(p,_,_+.14,n,n,16));break}case"downlight":h(p,t-.012,t,ct,ct,12),h(p*.7,t-.02,t-.012,n,n,12);break;case"spot":h(p*.6,t-.02,t,ct,ct,10),h(p,t-Math.max(.06,s),t-.02,ct,ct,12),h(p*.8,t-Math.max(.06,s)-.008,t-Math.max(.06,s),n,n,12);break;case"panel":f(-r/2,r/2,-o/2,o/2,t-Math.max(.015,s),t,ct,ct),f(-r/2+.02,r/2-.02,-o/2+.02,o/2-.02,t-Math.max(.015,s)-.004,t-Math.max(.015,s),n);break;case"uplight":h(Math.max(.1,p*.6),a,a+.03,ct,ct),h(.014,a+.03,a+s-.12,ct,ct,6),h(p,a+s-.14,a+s-.02,ct,ct),h(p*.92,a+s-.02,a+s,n,n);break;case"bollard":h(p,a,a+s-.14,ct,ct,10),h(p*.9,a+s-.14,a+s-.03,n,n,10),h(p*1.1,a+s-.03,a+s,ct,ct,10);break;case"garden":h(.012,a,a+s-.08,ct,ct,5),h(p,a+s-.08,a+s-.01,ct,ct,10),h(p*.8,a+s-.01,a+s,n,n,10);break;case"floor":h(Math.max(.1,p*.7),a,a+.03,ct,ct),h(.014,a+.03,a+s-.28,ct,ct,6),h(p,a+s-.3,a+s,n,n);break;case"table":h(Math.max(.05,p*.55),a,a+.03,ct,ct),h(.012,a+.03,a+s-.16,ct,ct,6),h(p,a+s-.18,a+s,n,n);break;case"wall":{let _=e.base??uc;f(-r/2+.03,r/2-.03,-o/2,-o/2+.02,_,_+s,ct),f(-r/2,r/2,-o/2+.02,o/2,_+s*.15,_+s*.85,n);break}case"strip":{let _=Math.max(.02,s),m=e.base!=null?e.base+_:t-.04;if(!e.roll&&!e.upright){f(-r/2,r/2,-o/2,o/2,m-_,m,n);break}let g=(e.roll??0)*ft,w=Math.cos(g),x=Math.sin(g),b=e.upright?a+r/2:m-_/2,y=(T,P,k)=>{let R=T,A=P*w-k*x,I=P*x+k*w;return e.upright&&([R,A]=[-A,R]),[e.x+R*c-I*u,b+A,e.z+R*u+I*c]},M=[y(-r/2,-_/2,-o/2),y(r/2,-_/2,-o/2),y(r/2,-_/2,o/2),y(-r/2,-_/2,o/2),y(-r/2,_/2,-o/2),y(r/2,_/2,-o/2),y(r/2,_/2,o/2),y(-r/2,_/2,o/2)],E=new J(n),v=[e.x,b,e.z],S=(T,P,k,R)=>{let[A,I,L]=[M[T],M[P],M[k]],z=[(I[1]-A[1])*(L[2]-A[2])-(I[2]-A[2])*(L[1]-A[1]),(I[2]-A[2])*(L[0]-A[0])-(I[0]-A[0])*(L[2]-A[2]),(I[0]-A[0])*(L[1]-A[1])-(I[1]-A[1])*(L[0]-A[0])],B=[A[0]-v[0],A[1]-v[1],A[2]-v[2]],N=z[0]*B[0]+z[1]*B[1]+z[2]*B[2]<0,[O,U,Z,q]=N?[M[R],M[k],M[P],M[T]]:[M[T],M[P],M[k],M[R]];i.tri(O,U,Z,E,E,E),i.tri(O,Z,q,E,E,E)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{ud as FloorMap,Cd as FloorplanViewer,hd as WalkCamera,Jk as createViewer,Fk as funLib,pS as furnitureFront,fS as furniturePreview,MS as isLowEnd,Ed as pushLampModel};
