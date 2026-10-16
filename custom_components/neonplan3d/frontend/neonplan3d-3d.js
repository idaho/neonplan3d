var Kf=0,th=1,Yf=2;var ys=1,qf=2,po=3,ci=0,nn=1,ct=2,ui=0,Yi=1,Nt=2,nh=3,xs=4,Zf=5;var vr=100,$f=101,Jf=102,jf=103,Qf=104,ep=200,tp=201,np=202,ip=203,ih=204,rh=205,rp=206,op=207,sp=208,ap=209,lp=210,cp=211,up=212,hp=213,dp=214,Ya=0,qa=1,Za=2,no=3,$a=4,Ja=5,ja=6,Qa=7,oh=0,fp=1,pp=2,Yn=0,sh=1,ah=2,lh=3,ch=4,uh=5,hh=6,dh=7;var fh=300,qi=301,yr=302,Ll=303,Dl=304,ws=306,pr=1e3,Tn=1001,el=1002,Jt=1003,mp=1004;var Ms=1005;var tn=1006,zl=1007;var Zi=1008;var En=1009,ph=1010,mh=1011,mo=1012,Nl=1013,qn=1014,Zn=1015,$n=1016,Bl=1017,Ol=1018,go=1020,gh=35902,_h=35899,bh=1021,vh=1022,Dn=1023,oi=1026,$i=1027,yh=1028,Ul=1029,Ji=1030,Vl=1031;var Gl=1033,Ss=33776,Ts=33777,As=33778,Es=33779,Hl=35840,Wl=35841,Xl=35842,Kl=35843,Yl=36196,ql=37492,Zl=37496,$l=37488,Jl=37489,Rs=37490,jl=37491,Ql=37808,ec=37809,tc=37810,nc=37811,ic=37812,rc=37813,oc=37814,sc=37815,ac=37816,lc=37817,cc=37818,uc=37819,hc=37820,dc=37821,fc=36492,pc=36494,mc=36495,gc=36283,_c=36284,ks=36285,bc=36286;var Yo=2300,tl=2301,Ha=2302,Wu=2303,Xu=2400,Ku=2401,Yu=2402;var gp=3200;var xh=0,_p=1,Si="",Ot="srgb",qo="srgb-linear",Zo="linear",xt="srgb";var Wa=7680;var bp=519,vp=512,yp=513,xp=514,vc=515,wp=516,Mp=517,yc=518,Sp=519,Tp=35044,wh=35048;var Mh="300 es",Hn=2e3,$o=2001;function n_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function i_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ap(){let i=io("canvas");return i.style.display="block",i}var df={},ro=null;function Sh(...i){let e="THREE."+i.shift();ro?ro("log",e,...i):console.log(e,...i)}function Ep(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=Ep(i);let e="THREE."+i.shift();if(ro)ro("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Ep(i);let e="THREE."+i.shift();if(ro)ro("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function fr(...i){let e=i.join(" ");e in df||(df[e]=!0,Ye(...i))}function Rp(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}var kp={[Ya]:qa,[Za]:ja,[$a]:Qa,[no]:Ja,[qa]:Ya,[ja]:Za,[Qa]:$a,[Ja]:no},si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xa=Math.PI/180,nl=180/Math.PI;function Ps(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function r_(i,e){return(i%e+e)%e}function bu(i,e,t){return(1-t)*i+t*e}function Bo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ph=class Ph{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ph.prototype.isVector2=!0;var ke=Ph,ai=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=o[s+0],f=o[s+1],p=o[s+2],_=o[s+3];if(h!==_||l!==d||c!==f||u!==p){let m=l*d+c*f+u*p+h*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),x=Math.sin(y);g=Math.sin(g*y)/x,a=Math.sin(a*y)/x,l=l*g+d*a,c=c*g+f*a,u=u*g+p*a,h=h*g+_*a}else{l=l*g+d*a,c=c*g+f*a,u=u*g+p*a,h=h*g+_*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=o[s],d=o[s+1],f=o[s+2],p=o[s+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(o/2),d=l(n/2),f=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(o-c)*f,this._z=(s-r)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(o+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(o-c)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(s-r)/f,this._x=(o+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ch=class Ch{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ff.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),h=2*(o*n-s*t);return this.x=t+l*c+s*h-a*u,this.y=n+l*u+a*c-o*h,this.z=r+l*h+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vu.copy(this).projectOnVector(e),this.sub(vu)}reflect(e){return this.sub(vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ch.prototype.isVector3=!0;var V=Ch,vu=new V,ff=new ai,Ih=class Ih{constructor(e,t,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],_=r[0],m=r[3],g=r[6],y=r[1],x=r[4],b=r[7],w=r[2],M=r[5],E=r[8];return o[0]=s*_+a*y+l*w,o[3]=s*m+a*x+l*M,o[6]=s*g+a*b+l*E,o[1]=c*_+u*y+h*w,o[4]=c*m+u*x+h*M,o[7]=c*g+u*b+h*E,o[2]=d*_+f*y+p*w,o[5]=d*m+f*x+p*M,o[8]=d*g+f*b+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*s-a*c,d=a*l-u*o,f=c*o-s*l,p=t*h+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*s)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*o-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*o)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yu.makeScale(e,t)),this}rotate(e){return fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yu.makeRotation(-e)),this}translate(e,t){return fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ih.prototype.isMatrix3=!0;var Qe=Ih,yu=new Qe,pf=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mf=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o_(){let i={enabled:!0,workingColorSpace:qo,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===xt&&(r.r=wi(r.r),r.g=wi(r.g),r.b=wi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===xt&&(r.r=to(r.r),r.g=to(r.g),r.b=to(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Si?Zo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return fr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return fr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qo]:{primaries:e,whitePoint:n,transfer:Zo,toXYZ:pf,fromXYZ:mf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:pf,fromXYZ:mf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}var ht=o_();function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function to(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vr,il=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vr===void 0&&(Vr=io("canvas")),Vr.width=e.width,Vr.height=e.height;let r=Vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Vr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=io("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=wi(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},s_=0,oo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(xu(r[s].image)):o.push(xu(r[s]))}else o=xu(r);n.url=o}return t||(e.images[this.uuid]=n),n}};function xu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var a_=0,wu=new V,cn=class i extends si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Tn,r=Tn,o=tn,s=Zi,a=Dn,l=En,c=i.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Ps(),this.name="",this.source=new oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wu).x}get height(){return this.source.getSize(wu).y}get depth(){return this.source.getSize(wu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pr:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case el:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pr:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case el:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=fh;cn.DEFAULT_ANISOTROPY=1;var Fh=class Fh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,b=(f+1)/2,w=(g+1)/2,M=(u+d)/4,E=(h+_)/4,v=(p+m)/4;return x>b&&x>w?x<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(x),r=M/n,o=E/n):b>w?b<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),n=M/r,o=v/r):w<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(w),n=E/o,r=v/o),this.set(n,r,o,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fh.prototype.isVector4=!0;var zt=Fh,rl=class extends si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},o=new cn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new oo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends rl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jo=class extends cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ol=class extends cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Fl=class Fl{constructor(e,t,n,r,o,s,a,l,c,u,h,d,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,h,d,f,p,_,m)}set(e,t,n,r,o,s,a,l,c,u,h,d,f,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=o,g[5]=s,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),o=1/Gr.setFromMatrixColumn(e,1).length(),s=1/Gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){let d=s*u,f=s*h,p=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=s*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d+_*a,t[4]=p*a-f,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=s*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d-_*a,t[4]=-s*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=s*u,t[9]=_-d*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){let d=s*u,f=s*h,p=a*u,_=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){let d=s*l,f=s*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=p*h+f,t[1]=h,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-_*h}else if(e.order==="XZY"){let d=s*l,f=s*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=s*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l_,e,c_)}lookAt(e,t,n){let r=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Di.crossVectors(n,wn),Di.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Di.crossVectors(n,wn)),Di.normalize(),ma.crossVectors(wn,Di),r[0]=Di.x,r[4]=ma.x,r[8]=wn.x,r[1]=Di.y,r[5]=ma.y,r[9]=wn.y,r[2]=Di.z,r[6]=ma.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],y=n[3],x=n[7],b=n[11],w=n[15],M=r[0],E=r[4],v=r[8],S=r[12],A=r[1],k=r[5],F=r[9],R=r[13],T=r[2],P=r[6],C=r[10],D=r[14],B=r[3],L=r[7],O=r[11],U=r[15];return o[0]=s*M+a*A+l*T+c*B,o[4]=s*E+a*k+l*P+c*L,o[8]=s*v+a*F+l*C+c*O,o[12]=s*S+a*R+l*D+c*U,o[1]=u*M+h*A+d*T+f*B,o[5]=u*E+h*k+d*P+f*L,o[9]=u*v+h*F+d*C+f*O,o[13]=u*S+h*R+d*D+f*U,o[2]=p*M+_*A+m*T+g*B,o[6]=p*E+_*k+m*P+g*L,o[10]=p*v+_*F+m*C+g*O,o[14]=p*S+_*R+m*D+g*U,o[3]=y*M+x*A+b*T+w*B,o[7]=y*E+x*k+b*P+w*L,o[11]=y*v+x*F+b*C+w*O,o[15]=y*S+x*R+b*D+w*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],y=l*f-c*d,x=a*f-c*h,b=a*d-l*h,w=s*f-c*u,M=s*d-l*u,E=s*h-a*u;return t*(_*y-m*x+g*b)-n*(p*y-m*w+g*M)+r*(p*x-_*w+g*E)-o*(p*b-_*M+m*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[1],s=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(s*u-a*c)-n*(o*u-a*l)+r*(o*c-s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],y=t*a-n*s,x=t*l-r*s,b=t*c-o*s,w=n*l-r*a,M=n*c-o*a,E=r*c-o*l,v=u*_-h*p,S=u*m-d*p,A=u*g-f*p,k=h*m-d*_,F=h*g-f*_,R=d*g-f*m,T=y*R-x*F+b*k+w*A-M*S+E*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return e[0]=(a*R-l*F+c*k)*P,e[1]=(r*F-n*R-o*k)*P,e[2]=(_*E-m*M+g*w)*P,e[3]=(d*M-h*E-f*w)*P,e[4]=(l*A-s*R-c*S)*P,e[5]=(t*R-r*A+o*S)*P,e[6]=(m*b-p*E-g*x)*P,e[7]=(u*E-d*b+f*x)*P,e[8]=(s*F-a*A+c*v)*P,e[9]=(n*A-t*F-o*v)*P,e[10]=(p*M-_*b+g*y)*P,e[11]=(h*b-u*M-f*y)*P,e[12]=(a*S-s*k-l*v)*P,e[13]=(t*k-n*S+r*v)*P,e[14]=(_*x-p*w-m*y)*P,e[15]=(u*w-h*x+d*y)*P,this}scale(e){let t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,h=a+a,d=o*c,f=o*u,p=o*h,_=s*u,m=s*h,g=a*h,y=l*c,x=l*u,b=l*h,w=n.x,M=n.y,E=n.z;return r[0]=(1-(_+g))*w,r[1]=(f+b)*w,r[2]=(p-x)*w,r[3]=0,r[4]=(f-b)*M,r[5]=(1-(d+g))*M,r[6]=(m+y)*M,r[7]=0,r[8]=(p+x)*E,r[9]=(m-y)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let s=Gr.set(r[0],r[1],r[2]).length(),a=Gr.set(r[4],r[5],r[6]).length(),l=Gr.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Un.copy(this);let c=1/s,u=1/a,h=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,t.setFromRotationMatrix(Un),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,o,s,a=Hn,l=!1){let c=this.elements,u=2*o/(t-e),h=2*o/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,_;if(l)p=o/(s-o),_=s*o/(s-o);else if(a===Hn)p=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===$o)p=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=Hn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,_;if(l)p=1/(s-o),_=s/(s-o);else if(a===Hn)p=-2/(s-o),_=-(s+o)/(s-o);else if(a===$o)p=-1/(s-o),_=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fl.prototype.isMatrix4=!0;var It=Fl,Gr=new V,Un=new It,l_=new V(0,0,0),c_=new V(1,1,1),Di=new V,ma=new V,wn=new V,gf=new It,_f=new ai,Wn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _f.setFromEuler(this),this.setFromQuaternion(_f,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var so=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},u_=0,bf=new V,Hr=new ai,gi=new It,ga=new V,Oo=new V,h_=new V,d_=new ai,vf=new V(1,0,0),yf=new V(0,1,0),xf=new V(0,0,1),wf={type:"added"},f_={type:"removed"},Wr={type:"childadded",child:null},Mu={type:"childremoved",child:null},yn=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new V,t=new Wn,n=new ai,r=new V(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new Qe}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(vf,e)}rotateY(e){return this.rotateOnAxis(yf,e)}rotateZ(e){return this.rotateOnAxis(xf,e)}translateOnAxis(e,t){return bf.copy(e).applyQuaternion(this.quaternion),this.position.add(bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vf,e)}translateY(e){return this.translateOnAxis(yf,e)}translateZ(e){return this.translateOnAxis(xf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Oo,ga,this.up):gi.lookAt(ga,Oo,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(gi),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wf),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f_),Mu.child=e,this.dispatchEvent(Mu),Mu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wf),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,h_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,d_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*r,o[13]+=n-o[1]*t-o[5]*n-o[9]*r,o[14]+=r-o[2]*t-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){let a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),f=s(e.animations),p=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function s(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new V(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ct=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},p_={type:"move"},ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Su(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var J=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=r_(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=Su(s,o,e+1/3),this.g=Su(s,o,e),this.b=Su(s,o,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Ot){function n(o){o!==void 0&&parseFloat(o)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=Pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return ht.workingToColorSpace(an.copy(this),e),Math.round(ot(an.r*255,0,255))*65536+Math.round(ot(an.g*255,0,255))*256+Math.round(ot(an.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(an.copy(this),t);let n=an.r,r=an.g,o=an.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,u=(a+s)/2;if(a===s)l=0,c=0;else{let h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case n:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-n)/h+2;break;case o:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Ot){ht.workingToColorSpace(an.copy(this),e);let t=an.r,n=an.g,r=an.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(_a);let n=bu(zi.h,_a.h,t),r=bu(zi.s,_a.s,t),o=bu(zi.l,_a.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new J;J.NAMES=Pp;var jo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new J(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ui=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new V,_i=new V,Tu=new V,bi=new V,Xr=new V,Kr=new V,Mf=new V,Au=new V,Eu=new V,Ru=new V,ku=new zt,Pu=new zt,Cu=new zt,xi=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vn.subVectors(e,t),r.cross(Vn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Vn.subVectors(r,t),_i.subVectors(n,t),Tu.subVectors(e,t);let s=Vn.dot(Vn),a=Vn.dot(_i),l=Vn.dot(Tu),c=_i.dot(_i),u=_i.dot(Tu),h=s*c-a*a;if(h===0)return o.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(s*u-a*l)*d;return o.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,bi.x),l.addScaledVector(s,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return ku.setScalar(0),Pu.setScalar(0),Cu.setScalar(0),ku.fromBufferAttribute(e,t),Pu.fromBufferAttribute(e,n),Cu.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ku,o.x),s.addScaledVector(Pu,o.y),s.addScaledVector(Cu,o.z),s}static isFrontFacing(e,t,n,r){return Vn.subVectors(n,t),_i.subVectors(e,t),Vn.cross(_i).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Vn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,o=this.c,s,a;Xr.subVectors(r,n),Kr.subVectors(o,n),Au.subVectors(e,n);let l=Xr.dot(Au),c=Kr.dot(Au);if(l<=0&&c<=0)return t.copy(n);Eu.subVectors(e,r);let u=Xr.dot(Eu),h=Kr.dot(Eu);if(u>=0&&h<=u)return t.copy(r);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Xr,s);Ru.subVectors(e,o);let f=Xr.dot(Ru),p=Kr.dot(Ru);if(p>=0&&f<=p)return t.copy(o);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Kr,a);let m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return Mf.subVectors(o,r),a=(h-u)/(h-u+(f-p)),t.copy(r).addScaledVector(Mf,a);let g=1/(m+_+d);return s=_*g,a=d*g,t.copy(n).addScaledVector(Xr,s).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Gn):Gn.fromBufferAttribute(o,s),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),va.subVectors(this.max,Uo),Yr.subVectors(e.a,Uo),qr.subVectors(e.b,Uo),Zr.subVectors(e.c,Uo),Ni.subVectors(qr,Yr),Bi.subVectors(Zr,qr),cr.subVectors(Yr,Zr);let t=[0,-Ni.z,Ni.y,0,-Bi.z,Bi.y,0,-cr.z,cr.y,Ni.z,0,-Ni.x,Bi.z,0,-Bi.x,cr.z,0,-cr.x,-Ni.y,Ni.x,0,-Bi.y,Bi.x,0,-cr.y,cr.x,0];return!Iu(t,Yr,qr,Zr,va)||(t=[1,0,0,0,1,0,0,0,1],!Iu(t,Yr,qr,Zr,va))?!1:(ya.crossVectors(Ni,Bi),t=[ya.x,ya.y,ya.z],Iu(t,Yr,qr,Zr,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vi=[new V,new V,new V,new V,new V,new V,new V,new V],Gn=new V,ba=new mn,Yr=new V,qr=new V,Zr=new V,Ni=new V,Bi=new V,cr=new V,Uo=new V,va=new V,ya=new V,ur=new V;function Iu(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){ur.fromArray(i,o);let a=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),c=t.dot(ur),u=n.dot(ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ht=new V,xa=new ke,m_=0,vn=class extends si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tp,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bo(t,this.array)),t}setX(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bo(t,this.array)),t}setY(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bo(t,this.array)),t}setW(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array),r=bn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array),r=bn(r,this.array),o=bn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Qo=class extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var mr=class extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var we=class extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}},g_=new mn,Vo=new V,Fu=new V,Vi=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):g_.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);let t=Vo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Vo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Fu)),this.expandByPoint(Vo.copy(e.center).sub(Fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},__=0,Fn=new It,Lu=new yn,$r=new V,Mn=new mn,Go=new mn,$t=new V,Ke=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n_(e)?mr:Qo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new Qe().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return Lu.lookAt(e),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new we(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let o=t[n];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];Go.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Mn.min,Go.min),Mn.expandByPoint($t),$t.addVectors(Mn.max,Go.max),Mn.expandByPoint($t)):(Mn.expandByPoint(Go.min),Mn.expandByPoint(Go.max))}Mn.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)$t.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared($t));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$t.fromBufferAttribute(a,c),l&&($r.fromBufferAttribute(e,c),$t.add($r)),r=Math.max(r,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,o=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new V,l[v]=new V;let c=new V,u=new V,h=new V,d=new ke,f=new ke,p=new ke,_=new V,m=new V;function g(v,S,A){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,A),d.fromBufferAttribute(o,v),f.fromBufferAttribute(o,S),p.fromBufferAttribute(o,A),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let k=1/(f.x*p.y-p.x*f.y);isFinite(k)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(k),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(k),a[v].add(_),a[S].add(_),a[A].add(_),l[v].add(m),l[S].add(m),l[A].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,S=y.length;v<S;++v){let A=y[v],k=A.start,F=A.count;for(let R=k,T=k+F;R<T;R+=3)g(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let x=new V,b=new V,w=new V,M=new V;function E(v){w.fromBufferAttribute(r,v),M.copy(w);let S=a[v];x.copy(S),x.sub(w.multiplyScalar(w.dot(S))).normalize(),b.crossVectors(M,S);let k=b.dot(l[v])<0?-1:1;s.setXYZW(v,x.x,x.y,x.z,k)}for(let v=0,S=y.length;v<S;++v){let A=y[v],k=A.start,F=A.count;for(let R=k,T=k+F;R<T;R+=3)E(e.getX(R+0)),E(e.getX(R+1)),E(e.getX(R+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let r=new V,o=new V,s=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let g=0;g<u;g++)d[p++]=c[f++]}return new vn(d,u,h)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let o=e.morphAttributes;for(let c in o){let u=[],h=o[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,u=s.length;c<u;c++){let h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Du=new V,b_=new V,v_=new Qe,Sn=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Du.subVectors(n,t).cross(b_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Du),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||v_.getNormalMatrix(e),r=this.coplanarPoint(Du).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},y_=0,Mi=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=Yi,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=rh,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new J().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Sn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var yi=new V,zu=new V,wa=new V,Ma=new V,gr=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){zu.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),Ma.copy(this.origin).sub(zu);let o=e.distanceTo(t)*.5,s=-this.direction.dot(wa),a=Ma.dot(this.direction),l=-Ma.dot(wa),c=Ma.lengthSq(),u=Math.abs(1-s*s),h,d,f,p;if(u>0)if(h=s*l-a,d=s*a-l,p=o*u,h>=0)if(d>=-p)if(d<=p){let _=1/u;h*=_,d*=_,f=h*(h+s*d+2*a)+d*(s*h+d+2*l)+c}else d=o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;else d=-o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),f=-h*h+d*(d+2*l)+c);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(zu).addScaledVector(wa,d),f}intersectSphere(e,t){if(e.radius<0)return null;yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),r=yi.dot(yi)-n*n,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-s.x,d=e.y-s.y,f=e.z-s.z,p=t.x-s.x,_=t.y-s.y,m=t.z-s.z,g=n.x-s.x,y=n.y-s.y,x=n.z-s.z,b=Math.abs(l),w=Math.abs(c),M=Math.abs(u),E,v,S,A,k,F,R,T,P,C,D,B;if(b>=w&&b>=M?(S=l,F=h,P=p,B=g,l>=0?(E=c,v=u,A=d,k=f,R=_,T=m,C=y,D=x):(E=u,v=c,A=f,k=d,R=m,T=_,C=x,D=y)):w>=M?(S=c,F=d,P=_,B=y,c>=0?(E=u,v=l,A=f,k=h,R=m,T=p,C=x,D=g):(E=l,v=u,A=h,k=f,R=p,T=m,C=g,D=x)):(S=u,F=f,P=m,B=x,u>=0?(E=l,v=c,A=h,k=d,R=p,T=_,C=g,D=y):(E=c,v=l,A=d,k=h,R=_,T=p,C=y,D=g)),S===0)return null;let L=E/S,O=v/S,U=1/S,Z=A-L*F,K=k-O*F,Q=R-L*P,ee=T-O*P,ae=C-L*B,H=D-O*B,W=ae*ee-H*Q,oe=Z*H-K*ae,le=Q*K-ee*Z;if(r){if(W<0||oe<0||le<0)return null}else if((W<0||oe<0||le<0)&&(W>0||oe>0||le>0))return null;let Y=W+oe+le;if(Y===0)return null;let se=U*(W*F+oe*P+le*B);return(Y>0?se<0:se>0)?null:this.at(se/Y,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sf=new It,hr=new gr,Sa=new Vi,Tf=new V,Ta=new V,Aa=new V,Ea=new V,Nu=new V,Ra=new V,Af=new V,ka=new V,Ne=class extends yn{constructor(e=new Ke,t=new et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){Ra.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let u=a[l],h=o[l];u!==0&&(Nu.fromBufferAttribute(h,e),s?Ra.addScaledVector(Nu,u):Ra.addScaledVector(Nu.sub(t),u))}t.add(Ra)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(o),hr.copy(e.ray).recast(e.near),!(Sa.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Sa,Tf)===null||hr.origin.distanceToSquared(Tf)>(e.far-e.near)**2))&&(Sf.copy(o).invert(),hr.copy(e.ray).applyMatrix4(Sf),!(n.boundingBox!==null&&hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=s[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,w=x;b<w;b+=3){let M=a.getX(b),E=a.getX(b+1),v=a.getX(b+2);r=Pa(this,g,e,n,c,u,h,M,E,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let y=a.getX(m),x=a.getX(m+1),b=a.getX(m+2);r=Pa(this,s,e,n,c,u,h,y,x,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=s[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,w=x;b<w;b+=3){let M=b,E=b+1,v=b+2;r=Pa(this,g,e,n,c,u,h,M,E,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let y=m,x=m+1,b=m+2;r=Pa(this,s,e,n,c,u,h,y,x,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function x_(i,e,t,n,r,o,s,a){let l;if(e.side===nn?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===ci,a),l===null)return null;ka.copy(a),ka.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ka);return c<t.near||c>t.far?null:{distance:c,point:ka.clone(),object:i}}function Pa(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,Ta),i.getVertexPosition(l,Aa),i.getVertexPosition(c,Ea);let u=x_(i,e,t,n,Ta,Aa,Ea,Af);if(u){let h=new V;xi.getBarycoord(Af,Ta,Aa,Ea,h),r&&(u.uv=xi.getInterpolatedAttribute(r,a,l,c,h,new ke)),o&&(u.uv1=xi.getInterpolatedAttribute(o,a,l,c,h,new ke)),s&&(u.normal=xi.getInterpolatedAttribute(s,a,l,c,h,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new V,materialIndex:0};xi.getNormal(Ta,Aa,Ea,d.normal),u.face=d,u.barycoord=h}return u}var sl=class extends cn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=Jt,u=Jt,h,d){super(null,s,a,l,c,u,r,o,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dr=new Vi,w_=new ke(.5,.5),Ca=new V,es=class{constructor(e=new Sn,t=new Sn,n=new Sn,r=new Sn,o=new Sn,s=new Sn){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],c=o[3],u=o[4],h=o[5],d=o[6],f=o[7],p=o[8],_=o[9],m=o[10],g=o[11],y=o[12],x=o[13],b=o[14],w=o[15];if(r[0].setComponents(c-s,f-u,g-p,w-y).normalize(),r[1].setComponents(c+s,f+u,g+p,w+y).normalize(),r[2].setComponents(c+a,f+h,g+_,w+x).normalize(),r[3].setComponents(c-a,f-h,g-_,w-x).normalize(),n)r[4].setComponents(l,d,m,b).normalize(),r[5].setComponents(c-l,f-d,g-m,w-b).normalize();else if(r[4].setComponents(c-l,f-d,g-m,w-b).normalize(),t===Hn)r[5].setComponents(c+l,f+d,g+m,w+b).normalize();else if(t===$o)r[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);let t=w_.distanceTo(e.center);return dr.radius=.7071067811865476+t,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var jt=class extends Mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new J(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},al=new V,ll=new V,Ef=new It,Ho=new gr,Ia=new Vi,Bu=new V,Rf=new V,cl=class extends yn{constructor(e=new Ke,t=new jt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)al.fromBufferAttribute(t,r-1),ll.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=al.distanceTo(ll);e.setAttribute("lineDistance",new we(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),Ia.radius+=o,e.ray.intersectsSphere(Ia)===!1)return;Ef.copy(r).invert(),Ho.copy(e.ray).applyMatrix4(Ef);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let _=f,m=p-1;_<m;_+=c){let g=u.getX(_),y=u.getX(_+1),x=Fa(this,e,Ho,l,g,y,_);x&&t.push(x)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(f),g=Fa(this,e,Ho,l,_,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let _=f,m=p-1;_<m;_+=c){let g=Fa(this,e,Ho,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=Fa(this,e,Ho,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Fa(i,e,t,n,r,o,s){let a=i.geometry.attributes.position;if(al.fromBufferAttribute(a,r),ll.fromBufferAttribute(a,o),t.distanceSqToSegment(al,ll,Bu,Rf)>n)return;Bu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Bu);if(!(c<e.near||c>e.far))return{distance:c,point:Rf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var kf=new V,Pf=new V,Xt=class extends cl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)kf.fromBufferAttribute(t,r),Pf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+kf.distanceTo(Pf);e.setAttribute("lineDistance",new we(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _r=class extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new J(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cf=new It,qu=new gr,La=new Vi,Da=new V,lo=class extends yn{constructor(e=new Ke,t=new _r){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),La.radius+=o,e.ray.intersectsSphere(La)===!1)return;Cf.copy(r).invert(),qu.copy(e.ray).applyMatrix4(Cf);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let p=d,_=f;p<_;p++){let m=c.getX(p);Da.fromBufferAttribute(h,m),If(Da,m,l,r,e,t,this)}}else{let d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let p=d,_=f;p<_;p++)Da.fromBufferAttribute(h,p),If(Da,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function If(i,e,t,n,r,o,s){let a=qu.distanceSqToPoint(i);if(a<t){let l=new V;qu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var ts=class extends cn{constructor(e=[],t=qi,n,r,o,s,a,l,c,u){super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xn=class extends cn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gi=class extends cn{constructor(e,t,n=qn,r,o,s,a=Jt,l=Jt,c,u=oi,h=1){if(u!==oi&&u!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ul=class extends Gi{constructor(e,t=qn,n=qi,r,o,s=Jt,a=Jt,l,c=oi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,o,s,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ns=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Hi=class i extends Ke{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,s,o,0),p("z","y","x",1,-1,n,t,-e,s,o,1),p("x","z","y",1,1,e,n,t,r,s,2),p("x","z","y",1,-1,e,n,-t,r,s,3),p("x","y","z",1,-1,e,t,n,r,o,4),p("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(h,2));function p(_,m,g,y,x,b,w,M,E,v,S){let A=b/E,k=w/v,F=b/2,R=w/2,T=M/2,P=E+1,C=v+1,D=0,B=0,L=new V;for(let O=0;O<C;O++){let U=O*k-R;for(let Z=0;Z<P;Z++){let K=Z*A-F;L[_]=K*y,L[m]=U*x,L[g]=T,c.push(L.x,L.y,L.z),L[_]=0,L[m]=0,L[g]=M>0?1:-1,u.push(L.x,L.y,L.z),h.push(Z/E),h.push(1-O/v),D+=1}}for(let O=0;O<v;O++)for(let U=0;U<E;U++){let Z=d+U+P*O,K=d+U+P*(O+1),Q=d+(U+1)+P*(O+1),ee=d+(U+1)+P*O;l.push(Z,K,ee),l.push(K,Q,ee),B+=6}a.addGroup(f,B,S),f+=B,d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var is=class i extends Ke{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let o=[],s=[],a=[],l=[],c=new V,u=new ke;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),s.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(s[d]/e+1)/2,u.y=(s[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(a,3)),this.setAttribute("uv",new we(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},rs=class i extends Ke{constructor(e=1,t=1,n=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),o=Math.floor(o);let u=[],h=[],d=[],f=[],p=0,_=[],m=n/2,g=0;y(),s===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(f,2));function y(){let b=new V,w=new V,M=0,E=(t-e)/n;for(let v=0;v<=o;v++){let S=[],A=v/o,k=A*(t-e)+e;for(let F=0;F<=r;F++){let R=F/r,T=R*l+a,P=Math.sin(T),C=Math.cos(T);w.x=k*P,w.y=-A*n+m,w.z=k*C,h.push(w.x,w.y,w.z),b.set(P,E,C).normalize(),d.push(b.x,b.y,b.z),f.push(R,1-A),S.push(p++)}_.push(S)}for(let v=0;v<r;v++)for(let S=0;S<o;S++){let A=_[S][v],k=_[S+1][v],F=_[S+1][v+1],R=_[S][v+1];(e>0||S!==0)&&(u.push(A,k,R),M+=3),(t>0||S!==o-1)&&(u.push(k,F,R),M+=3)}c.addGroup(g,M,0),g+=M}function x(b){let w=p,M=new ke,E=new V,v=0,S=b===!0?e:t,A=b===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),p++;let k=p;for(let F=0;F<=r;F++){let T=F/r*l+a,P=Math.cos(T),C=Math.sin(T);E.x=S*C,E.y=m*A,E.z=S*P,h.push(E.x,E.y,E.z),d.push(0,A,0),M.x=P*.5+.5,M.y=C*.5*A+.5,f.push(M.x,M.y),p++}for(let F=0;F<r;F++){let R=w+F,T=k+F;b===!0?u.push(T,T+1,R):u.push(T+1,T,R),v+=3}c.addGroup(g,v,b===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var za=new V,Na=new V,Ou=new V,Ba=new xi,os=class extends Ke{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),o=Math.cos(Xa*t),s=e.getIndex(),a=e.getAttribute("position"),l=s?s.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){s?(c[0]=s.getX(p),c[1]=s.getX(p+1),c[2]=s.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:m,c:g}=Ba;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Ba.getNormal(Ou),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){let x=(y+1)%3,b=h[y],w=h[x],M=Ba[u[y]],E=Ba[u[x]],v=`${b}_${w}`,S=`${w}_${b}`;S in d&&d[S]?(Ou.dot(d[S].normal)<=o&&(f.push(M.x,M.y,M.z),f.push(E.x,E.y,E.z)),d[S]=null):v in d||(d[v]={index0:c[y],index1:c[x],normal:Ou.clone()})}}for(let p in d)if(d[p]){let{index0:_,index1:m}=d[p];za.fromBufferAttribute(a,_),Na.fromBufferAttribute(a,m),f.push(za.x,za.y,za.z),f.push(Na.x,Na.y,Na.z)}this.setAttribute("position",new we(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),o=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,o=n.length,s;t?s=t:s=e*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-s,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===s)return r/(o-1);let u=n[r],d=n[r+1]-u,f=(s-u)/d;return(r+f)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);let s=this.getPoint(r),a=this.getPoint(o),l=t||(s.isVector2?new ke:new V);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],o=[],s=[],a=new V,l=new It;for(let f=0;f<=e;f++){let p=f/e;r[f]=this.getTangentAt(p,new V)}o[0]=new V,s[0]=new V;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),s[f]=s[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ot(r[f-1].dot(r[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,p))}s[f].crossVectors(r[f],o[f])}if(t===!0){let f=Math.acos(ot(o[0].dot(o[e]),-1,1));f/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(f=-f);for(let p=1;p<=e;p++)o[p].applyMatrix4(l.makeRotationAxis(r[p],f*p)),s[p].crossVectors(r[p],o[p])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ss=class extends Ln{constructor(e=0,t=0,n=1,r=1,o=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ke){let n=t,r=Math.PI*2,o=this.aEndAngle-this.aStartAngle,s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);let a=this.aStartAngle+e*o,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hl=class extends ss{constructor(e,t,n,r,o,s){super(e,t,n,n,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Th(){let i=0,e=0,t=0,n=0;function r(o,s,a,l){i=o,e=a,t=-3*o+3*s-2*a-l,n=2*o-2*s+a+l}return{initCatmullRom:function(o,s,a,l,c){r(s,a,c*(a-o),c*(l-s))},initNonuniformCatmullRom:function(o,s,a,l,c,u,h){let d=(s-o)/c-(a-o)/(c+u)+(a-s)/u,f=(a-s)/u-(l-s)/(u+h)+(l-a)/h;d*=u,f*=u,r(s,a,d,f)},calc:function(o){let s=o*o,a=s*o;return i+e*o+t*s+n*a}}}var Ff=new V,Lf=new V,Uu=new Th,Vu=new Th,Gu=new Th,co=class extends Ln{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e,a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%o]:(Lf.subVectors(r[0],r[1]).add(r[0]),c=Lf);let h=r[a%o],d=r[(a+1)%o];if(this.closed||a+2<o?u=r[(a+2)%o]:(Ff.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=Ff),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Uu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,_,m),Vu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,_,m),Gu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(Uu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Vu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Gu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Uu.calc(l),Vu.calc(l),Gu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new V().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Df(i,e,t,n,r){let o=(n-e)*.5,s=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+o+s)*l+(-3*t+3*n-2*o-s)*a+o*i+t}function M_(i,e){let t=1-i;return t*t*e}function S_(i,e){return 2*(1-i)*i*e}function T_(i,e){return i*i*e}function Xo(i,e,t,n){return M_(i,e)+S_(i,t)+T_(i,n)}function A_(i,e){let t=1-i;return t*t*t*e}function E_(i,e){let t=1-i;return 3*t*t*i*e}function R_(i,e){return 3*(1-i)*i*i*e}function k_(i,e){return i*i*i*e}function Ko(i,e,t,n,r){return A_(i,e)+E_(i,t)+R_(i,n)+k_(i,r)}var dl=class extends Ln{constructor(e=new ke,t=new ke,n=new ke,r=new ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ke){let n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(Ko(e,r.x,o.x,s.x,a.x),Ko(e,r.y,o.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fl=class extends Ln{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(Ko(e,r.x,o.x,s.x,a.x),Ko(e,r.y,o.y,s.y,a.y),Ko(e,r.z,o.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pl=class extends Ln{constructor(e=new ke,t=new ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ke){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ke){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends Ln{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gl=class extends Ln{constructor(e=new ke,t=new ke,n=new ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ke){let n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(Xo(e,r.x,o.x,s.x),Xo(e,r.y,o.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},as=class extends Ln{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(Xo(e,r.x,o.x,s.x),Xo(e,r.y,o.y,s.y),Xo(e,r.z,o.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ke){let n=t,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,l=r[s===0?s:s-1],c=r[s],u=r[s>r.length-2?r.length-1:s+1],h=r[s>r.length-3?r.length-1:s+2];return n.set(Df(a,l.x,c.x,u.x,h.x),Df(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ke().fromArray(r))}return this}},P_=Object.freeze({__proto__:null,ArcCurve:hl,CatmullRomCurve3:co,CubicBezierCurve:dl,CubicBezierCurve3:fl,EllipseCurve:ss,LineCurve:pl,LineCurve3:ml,QuadraticBezierCurve:gl,QuadraticBezierCurve3:as,SplineCurve:_l});function C_(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,o=Cp(i,0,r,t,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=z_(i,e,o,t)),i.length>80*t){a=i[0],l=i[1];let u=a,h=l;for(let d=t;d<r;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return ls(o,s,t,a,l,c,0),s}function Cp(i,e,t,n,r){let o;if(r===Y_(i,e,t,n)>0)for(let s=e;s<t;s+=n)o=zf(s/n|0,i[s],i[s+1],o);else for(let s=t-n;s>=e;s-=n)o=zf(s/n|0,i[s],i[s+1],o);return o&&uo(o,o.next)&&(us(o),o=o.next),o}function br(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(uo(t,t.next)||Dt(t.prev,t,t.next)===0)){if(us(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ls(i,e,t,n,r,o,s){if(!i)return;!s&&o&&V_(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?F_(i,n,r,o):I_(i)){e.push(l.i,i.i,c.i),us(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=L_(br(i),e),ls(i,e,t,n,r,o,2)):s===2&&D_(i,e,t,n,r,o):ls(br(i),e,t,n,r,o,1);break}}}function I_(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let r=e.x,o=t.x,s=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,o,s),h=Math.min(a,l,c),d=Math.max(r,o,s),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Wo(r,a,o,l,s,c,p.x,p.y)&&Dt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function F_(i,e,t,n){let r=i.prev,o=i,s=i.next;if(Dt(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,u=r.y,h=o.y,d=s.y,f=Math.min(a,l,c),p=Math.min(u,h,d),_=Math.max(a,l,c),m=Math.max(u,h,d),g=Zu(f,p,e,t,n),y=Zu(_,m,e,t,n),x=i.prevZ,b=i.nextZ;for(;x&&x.z>=g&&b&&b.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==r&&x!==s&&Wo(a,u,l,h,c,d,x.x,x.y)&&Dt(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=f&&b.x<=_&&b.y>=p&&b.y<=m&&b!==r&&b!==s&&Wo(a,u,l,h,c,d,b.x,b.y)&&Dt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==r&&x!==s&&Wo(a,u,l,h,c,d,x.x,x.y)&&Dt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=m&&b!==r&&b!==s&&Wo(a,u,l,h,c,d,b.x,b.y)&&Dt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function L_(i,e){let t=i;do{let n=t.prev,r=t.next.next;!uo(n,r)&&Fp(n,t,t.next,r)&&cs(n,r)&&cs(r,n)&&(e.push(n.i,t.i,r.i),us(t),us(t.next),t=i=r),t=t.next}while(t!==i);return br(t)}function D_(i,e,t,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&W_(s,a)){let l=Lp(s,a);s=br(s,s.next),l=br(l,l.next),ls(s,e,t,n,r,o,0),ls(l,e,t,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function z_(i,e,t,n){let r=[];for(let o=0,s=e.length;o<s;o++){let a=e[o]*n,l=o<s-1?e[o+1]*n:i.length,c=Cp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(H_(c))}r.sort(N_);for(let o=0;o<r.length;o++)t=B_(r[o],t);return t}function N_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function B_(i,e){let t=O_(i,e);if(!t)return e;let n=Lp(t,i);return br(n,n.next),br(t,t.next)}function O_(i,e){let t=e,n=i.x,r=i.y,o=-1/0,s;if(uo(i,t))return t;do{if(uo(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>o&&(o=h,s=t.x<t.next.x?t:t.next,h===n))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0;t=s;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ip(r<c?n:o,r,l,c,r<c?o:n,r,t.x,t.y)){let h=Math.abs(r-t.y)/(n-t.x);cs(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&U_(s,t)))&&(s=t,u=h)}t=t.next}while(t!==a);return s}function U_(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function V_(i,e,t,n){let r=i;do r.z===0&&(r.z=Zu(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,G_(r)}function G_(i){let e,t=1;do{let n=i,r;i=null;let o=null;for(e=0;n;){e++;let s=n,a=0;for(let c=0;c<t&&(a++,s=s.nextZ,!!s);c++);let l=t;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,t*=2}while(e>1);return i}function Zu(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function H_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ip(i,e,t,n,r,o,s,a){return(r-s)*(e-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(r-s)*(n-a)}function Wo(i,e,t,n,r,o,s,a){return!(i===s&&e===a)&&Ip(i,e,t,n,r,o,s,a)}function W_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!X_(i,e)&&(cs(i,e)&&cs(e,i)&&K_(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||uo(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function uo(i,e){return i.x===e.x&&i.y===e.y}function Fp(i,e,t,n){let r=Ua(Dt(i,e,t)),o=Ua(Dt(i,e,n)),s=Ua(Dt(t,n,i)),a=Ua(Dt(t,n,e));return!!(r!==o&&s!==a||r===0&&Oa(i,t,e)||o===0&&Oa(i,n,e)||s===0&&Oa(t,i,n)||a===0&&Oa(t,e,n))}function Oa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ua(i){return i>0?1:i<0?-1:0}function X_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Fp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function cs(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function K_(i,e){let t=i,n=!1,r=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Lp(i,e){let t=$u(i.i,i.x,i.y),n=$u(e.i,e.x,e.y),r=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function zf(i,e,t,n){let r=$u(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function us(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $u(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Y_(i,e,t,n){let r=0;for(let o=e,s=t-n;o<t;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var Ju=class{static triangulate(e,t,n=2){return C_(e,t,n)}},hs=class i{static area(e){let t=e.length,n=0;for(let r=t-1,o=0;o<t;r=o++)n+=e[r].x*e[o].y-e[o].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],o=[];Nf(e),Bf(n,e);let s=e.length;t.forEach(Nf);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,Bf(n,t[l]);let a=Ju.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function Nf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ds=class i extends Ke{constructor(e=[new ke(0,-.5),new ke(.5,0),new ke(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ot(r,0,Math.PI*2);let o=[],s=[],a=[],l=[],c=[],u=1/t,h=new V,d=new ke,f=new V,p=new V,_=new V,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let y=0;y<=t;y++){let x=n+y*u*r,b=Math.sin(x),w=Math.cos(x);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*b,h.y=e[M].y,h.z=e[M].x*w,s.push(h.x,h.y,h.z),d.x=y/t,d.y=M/(e.length-1),a.push(d.x,d.y);let E=l[3*M+0]*b,v=l[3*M+1],S=l[3*M+0]*w;c.push(E,v,S)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){let b=x+y*e.length,w=b,M=b+e.length,E=b+e.length+1,v=b+1;o.push(w,M,v),o.push(E,v,M)}this.setIndex(o),this.setAttribute("position",new we(s,3)),this.setAttribute("uv",new we(a,2)),this.setAttribute("normal",new we(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Kn=class i extends Ke{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let y=g*d-s;for(let x=0;x<c;x++){let b=x*h-o;p.push(b,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let x=y+c*g,b=y+c*(g+1),w=y+1+c*(g+1),M=y+1+c*g;f.push(x,b,M),f.push(b,w,M)}this.setIndex(f),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},fs=class i extends Ke{constructor(e=.5,t=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/r,f=new V,p=new ke;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){let g=o+m/n*s;f.x=h*Math.cos(g),f.y=h*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let _=0;_<r;_++){let m=_*(n+1);for(let g=0;g<n;g++){let y=g+m,x=y,b=y+n+1,w=y+n+2,M=y+1;a.push(x,b,M),a.push(b,w,M)}}this.setIndex(a),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ps=class i extends Ke{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(s+a,Math.PI),c=0,u=[],h=new V,d=new V,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let y=[],x=g/n,b=s+x*a,w=e*Math.cos(b),M=Math.sqrt(e*e-w*w),E=0;g===0&&s===0?E=.5/t:g===n&&l===Math.PI&&(E=-.5/t);for(let v=0;v<=t;v++){let S=v/t,A=r+S*o;h.x=-M*Math.cos(A),h.y=w,h.z=M*Math.sin(A),p.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(S+E,1-x),y.push(c++)}u.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let x=u[g][y+1],b=u[g][y],w=u[g+1][y],M=u[g+1][y+1];(g!==0||s>0)&&f.push(x,b,M),(g!==n-1||l<Math.PI)&&f.push(b,w,M)}this.setIndex(f),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ms=class i extends Ke{constructor(e=1,t=.4,n=12,r=48,o=Math.PI*2,s=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:o,thetaStart:s,thetaLength:a},n=Math.floor(n),r=Math.floor(r);let l=[],c=[],u=[],h=[],d=new V,f=new V,p=new V;for(let _=0;_<=n;_++){let m=s+_/n*a;for(let g=0;g<=r;g++){let y=g/r*o;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(g/r),h.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=r;m++){let g=(r+1)*_+m-1,y=(r+1)*(_-1)+m-1,x=(r+1)*(_-1)+m,b=(r+1)*_+m;l.push(g,y,b),l.push(y,x,b)}this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ho=class i extends Ke{constructor(e=new as(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,n=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:o};let s=e.computeFrenetFrames(t,o);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let a=new V,l=new V,c=new ke,u=new V,h=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(f,2));function _(){for(let x=0;x<t;x++)m(x);m(o===!1?t:0),y(),g()}function m(x){u=e.getPointAt(x/t,u);let b=s.normals[x],w=s.binormals[x];for(let M=0;M<=r;M++){let E=M/r*Math.PI*2,v=Math.sin(E),S=-Math.cos(E);l.x=S*b.x+v*w.x,l.y=S*b.y+v*w.y,l.z=S*b.z+v*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function g(){for(let x=1;x<=t;x++)for(let b=1;b<=r;b++){let w=(r+1)*(x-1)+(b-1),M=(r+1)*x+(b-1),E=(r+1)*x+b,v=(r+1)*(x-1)+b;p.push(w,M,v),p.push(M,E,v)}}function y(){for(let x=0;x<=t;x++)for(let b=0;b<=r;b++)c.x=x/t,c.y=b/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new P_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function xr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Of(r))r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Of(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();e[t][n]=o}else e[t][n]=r.slice();else e[t][n]=r}}return e}function dn(i){let e={};for(let t=0;t<i.length;t++){let n=xr(i[t]);for(let r in n)e[r]=n[r]}return e}function Of(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function q_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ah(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Dp={clone:xr,merge:dn},Z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z_,this.fragmentShader=$_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new J().setHex(r.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(r.value);break;case"v3":this.uniforms[n].value=new V().fromArray(r.value);break;case"v4":this.uniforms[n].value=new zt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new It().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},bl=class extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var vl=class extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yl=class extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Jr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Hu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Wi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],o=t[n-1];n:{e:{let s;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=t[++n],e<r)break e}s=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=t[--n-1],e>=o)break e}s=n,n=0;break t}break n}for(;n<s;){let a=n+s>>>1;e<t[a]?s=a:n=a+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=n[o+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xl=class extends Wi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xu,endingEnd:Xu}}intervalChanged_(e,t,n){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Ku:o=e,a=2*t-n;break;case Yu:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ku:s=e,l=2*n-t;break;case Yu:s=1,l=n+r[1]-r[0];break;default:s=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,x=(-1-f)*m+(1.5+f)*_+.5*p,b=f*m-f*_;for(let w=0;w!==a;++w)o[w]=g*s[u+w]+y*s[c+w]+x*s[l+w]+b*s[h+w];return o}},wl=class extends Wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)o[d]=s[c+d]*h+s[l+d]*u;return o}},Ml=class extends Wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Sl=class extends Wi{interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(r-t),_=1-p;for(let m=0;m!==a;++m)o[m]=s[c+m]*_+s[l+m]*p;return o}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let _=s[c+p],m=s[l+p],g=f*d+p*2,y=h[g],x=h[g+1],b=e*d+p*2,w=u[b],M=u[b+1],E=j_(n,t,y,w,r);o[p]=zp(E,_,x,M,m)}return o}};function zp(i,e,t,n,r){let o=1-i;return o*o*o*e+3*o*o*i*t+3*o*i*i*n+i*i*i*r}function J_(i,e,t,n,r){let o=1-i;return 3*o*o*(t-e)+6*o*i*(n-t)+3*i*i*(r-n)}function j_(i,e,t,n,r){let o=(i-e)/(r-e);for(let s=0;s<8;s++){let a=zp(o,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let l=J_(o,e,t,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var An=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jr(t,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Jr(e.times,Array),values:Jr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Hu(e.settings)&&(n.settings={inTangents:Jr(e.settings.inTangents,Array),outTangents:Jr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Sl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Yo:t=this.InterpolantFactoryMethodDiscrete;break;case tl:t=this.InterpolantFactoryMethodLinear;break;case Ha:t=this.InterpolantFactoryMethodSmooth;break;case Wu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yo;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return Ha;case this.InterpolantFactoryMethodBezier:return Wu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Hu(this.settings)&&(Uf(this.settings.inTangents,e),Uf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<e;)++o;for(;s!==-1&&n[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,o=n.length;o===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){Ze("KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(r!==void 0&&i_(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ha,o=e.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let _=t[h+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];let h=a*n,d=s*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++s}}if(o>0){e[s]=e[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Hu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Uf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=tl;var Xi=class extends An{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Yo;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends An{constructor(e,t,n,r){super(e,t,n,r)}};Tl.prototype.ValueTypeName="color";var Al=class extends An{constructor(e,t,n,r){super(e,t,n,r)}};Al.prototype.ValueTypeName="number";var El=class extends Wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)ai.slerpFlat(o,0,s,c-a,s,c,l);return o}},gs=class extends An{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new El(this.times,this.values,this.getValueSize(),e)}};gs.prototype.ValueTypeName="quaternion";gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends An{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Yo;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends An{constructor(e,t,n,r){super(e,t,n,r)}};Rl.prototype.ValueTypeName="vector";var Ka={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Vf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Vf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Vf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var kl=class{constructor(e,t,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Np=new kl,fo=class{constructor(e){this.manager=e!==void 0?e:Np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var jr=new WeakMap,Pl=class extends fo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,s=Ka.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let h=jr.get(s);h===void 0&&(h=[],jr.set(s,h)),h.push({onLoad:t,onError:r})}return s}let a=io("img");function l(){u(),t&&t(this);let h=jr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}jr.delete(this),o.manager.itemEnd(e)}function c(h){u(),r&&r(h),Ka.remove(`image:${e}`);let d=jr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}jr.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ka.add(`image:${e}`,a),o.manager.itemStart(e),a.src=e,a}};var _s=class extends fo{constructor(e){super(e)}load(e,t,n,r){let o=new cn,s=new Pl(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}};var Va=new V,Ga=new ai,ri=new V,bs=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Va,Ga,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ga,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Va,Ga,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ga,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new V,Gf=new ke,Hf=new ke,ln=class extends bs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,Gf,Hf),t.subVectors(Hf,Gf)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var li=class extends bs{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Qr=-90,eo=1,Cl=class extends yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ln(Qr,eo,e,t);r.layers=this.layers,this.add(r);let o=new ln(Qr,eo,e,t);o.layers=this.layers,this.add(o);let s=new ln(Qr,eo,e,t);s.layers=this.layers,this.add(s);let a=new ln(Qr,eo,e,t);a.layers=this.layers,this.add(a);let l=new ln(Qr,eo,e,t);l.layers=this.layers,this.add(l);let c=new ln(Qr,eo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(let c of t)this.remove(c);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$o)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Il=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Eh="\\[\\]\\.:\\/",Q_=new RegExp("["+Eh+"]","g"),Rh="[^"+Eh+"]",eb="[^"+Eh.replace("\\.","")+"]",tb=/((?:WC+[\/:])*)/.source.replace("WC",Rh),nb=/(WCOD+)?/.source.replace("WCOD",eb),ib=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),rb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),ob=new RegExp("^"+tb+nb+ib+rb+"$"),sb=["material","materials","bones","map"],ju=class{constructor(e,t,n){let r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Q_,"")}static parseTrackName(e){let t=ob.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);sb.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,o=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[r];if(s===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=ju;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var S2=new Float32Array(1);var Wf=new It,vs=class{constructor(e,t,n=0,r=1/0){this.ray=new gr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new so,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wf),this}intersectObject(e,t=!0,n=[]){return Qu(e,this,n,t),n.sort(Xf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)Qu(e[r],this,n,t);return n.sort(Xf),n}};function Xf(i,e){return i.distance-e.distance}function Qu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)Qu(o[s],e,t,!0)}}var Lh=class Lh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let o=this.elements;return o[0]=e,o[2]=t,o[1]=n,o[3]=r,this}};Lh.prototype.isMatrix2=!0;var eh=Lh;function kh(i,e,t,n){let r=ab(n);switch(t){case bh:return i*e;case yh:return i*e/r.components*r.byteLength;case Ul:return i*e/r.components*r.byteLength;case Ji:return i*e*2/r.components*r.byteLength;case Vl:return i*e*2/r.components*r.byteLength;case vh:return i*e*3/r.components*r.byteLength;case Dn:return i*e*4/r.components*r.byteLength;case Gl:return i*e*4/r.components*r.byteLength;case Ss:case Ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case As:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:case Kl:return Math.max(i,16)*Math.max(e,8)/4;case Hl:case Xl:return Math.max(i,8)*Math.max(e,8)/2;case Yl:case ql:case $l:case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Rs:case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fc:case pc:case mc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gc:case _c:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ks:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ab(i){switch(i){case En:case ph:return{byteLength:1,components:1};case mo:case mh:case $n:return{byteLength:2,components:1};case Bl:case Ol:return{byteLength:2,components:4};case qn:case Nl:case Zn:return{byteLength:4,components:1};case gh:case _h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function om(){let i=null,e=!1,t=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),t(o,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function mb(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var gb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_b=`#ifdef USE_ALPHAHASH
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
#endif`,bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wb=`#ifdef USE_AOMAP
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
#endif`,Mb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sb=`#ifdef USE_BATCHING
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
#endif`,Tb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ab=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kb=`#ifdef USE_IRIDESCENCE
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
#endif`,Pb=`#ifdef USE_BUMPMAP
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
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ob=`#define PI 3.141592653589793
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
} // validated`,Ub=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vb=`vec3 transformedNormal = objectNormal;
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
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,Jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ev=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iv=`#ifdef USE_GRADIENTMAP
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
}`,rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ov=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,av=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fv=`PhysicalMaterial material;
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
#endif`,pv=`uniform sampler2D dfgLUT;
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
}`,mv=`
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
#endif`,gv=`#if defined( RE_IndirectDiffuse )
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
#endif`,_v=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Av=`#if defined( USE_POINTS_UV )
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
#endif`,Ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`#ifdef USE_MORPHTARGETS
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
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ov=`#ifdef USE_NORMALMAP
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
#endif`,Uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ey=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ty=`float getShadowMask() {
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
}`,ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,ry=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oy=`#ifdef USE_SKINNING
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
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uy=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#ifdef USE_TRANSMISSION
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,my=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_y=`uniform sampler2D t2D;
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`#include <common>
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
}`,My=`#if DEPTH_PACKING == 3200
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
}`,Sy=`#define DISTANCE
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
}`,Ty=`#define DISTANCE
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
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`uniform float scale;
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
}`,ky=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Iy=`#define LAMBERT
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
}`,Fy=`#define LAMBERT
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
}`,Ly=`#define MATCAP
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
}`,Dy=`#define MATCAP
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
}`,zy=`#define NORMAL
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
}`,Ny=`#define NORMAL
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
}`,By=`#define PHONG
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
}`,Oy=`#define PHONG
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
}`,Uy=`#define STANDARD
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
}`,Vy=`#define STANDARD
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
}`,Gy=`#define TOON
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
}`,Hy=`#define TOON
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
}`,Wy=`uniform float size;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,Ky=`#include <common>
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
}`,Yy=`uniform vec3 color;
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
}`,qy=`uniform float rotation;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:gb,alphahash_pars_fragment:_b,alphamap_fragment:bb,alphamap_pars_fragment:vb,alphatest_fragment:yb,alphatest_pars_fragment:xb,aomap_fragment:wb,aomap_pars_fragment:Mb,batching_pars_vertex:Sb,batching_vertex:Tb,begin_vertex:Ab,beginnormal_vertex:Eb,bsdfs:Rb,iridescence_fragment:kb,bumpmap_pars_fragment:Pb,clipping_planes_fragment:Cb,clipping_planes_pars_fragment:Ib,clipping_planes_pars_vertex:Fb,clipping_planes_vertex:Lb,color_fragment:Db,color_pars_fragment:zb,color_pars_vertex:Nb,color_vertex:Bb,common:Ob,cube_uv_reflection_fragment:Ub,defaultnormal_vertex:Vb,displacementmap_pars_vertex:Gb,displacementmap_vertex:Hb,emissivemap_fragment:Wb,emissivemap_pars_fragment:Xb,colorspace_fragment:Kb,colorspace_pars_fragment:Yb,envmap_fragment:qb,envmap_common_pars_fragment:Zb,envmap_pars_fragment:$b,envmap_pars_vertex:Jb,envmap_physical_pars_fragment:lv,envmap_vertex:jb,fog_vertex:Qb,fog_pars_vertex:ev,fog_fragment:tv,fog_pars_fragment:nv,gradientmap_pars_fragment:iv,lightmap_pars_fragment:rv,lights_lambert_fragment:ov,lights_lambert_pars_fragment:sv,lights_pars_begin:av,lights_toon_fragment:cv,lights_toon_pars_fragment:uv,lights_phong_fragment:hv,lights_phong_pars_fragment:dv,lights_physical_fragment:fv,lights_physical_pars_fragment:pv,lights_fragment_begin:mv,lights_fragment_maps:gv,lights_fragment_end:_v,lightprobes_pars_fragment:bv,logdepthbuf_fragment:vv,logdepthbuf_pars_fragment:yv,logdepthbuf_pars_vertex:xv,logdepthbuf_vertex:wv,map_fragment:Mv,map_pars_fragment:Sv,map_particle_fragment:Tv,map_particle_pars_fragment:Av,metalnessmap_fragment:Ev,metalnessmap_pars_fragment:Rv,morphinstance_vertex:kv,morphcolor_vertex:Pv,morphnormal_vertex:Cv,morphtarget_pars_vertex:Iv,morphtarget_vertex:Fv,normal_fragment_begin:Lv,normal_fragment_maps:Dv,normal_pars_fragment:zv,normal_pars_vertex:Nv,normal_vertex:Bv,normalmap_pars_fragment:Ov,clearcoat_normal_fragment_begin:Uv,clearcoat_normal_fragment_maps:Vv,clearcoat_pars_fragment:Gv,iridescence_pars_fragment:Hv,opaque_fragment:Wv,packing:Xv,premultiplied_alpha_fragment:Kv,project_vertex:Yv,dithering_fragment:qv,dithering_pars_fragment:Zv,roughnessmap_fragment:$v,roughnessmap_pars_fragment:Jv,shadowmap_pars_fragment:jv,shadowmap_pars_vertex:Qv,shadowmap_vertex:ey,shadowmask_pars_fragment:ty,skinbase_vertex:ny,skinning_pars_vertex:iy,skinning_vertex:ry,skinnormal_vertex:oy,specularmap_fragment:sy,specularmap_pars_fragment:ay,tonemapping_fragment:ly,tonemapping_pars_fragment:cy,transmission_fragment:uy,transmission_pars_fragment:hy,uv_pars_fragment:dy,uv_pars_vertex:fy,uv_vertex:py,worldpos_vertex:my,background_vert:gy,background_frag:_y,backgroundCube_vert:by,backgroundCube_frag:vy,cube_vert:yy,cube_frag:xy,depth_vert:wy,depth_frag:My,distance_vert:Sy,distance_frag:Ty,equirect_vert:Ay,equirect_frag:Ey,linedashed_vert:Ry,linedashed_frag:ky,meshbasic_vert:Py,meshbasic_frag:Cy,meshlambert_vert:Iy,meshlambert_frag:Fy,meshmatcap_vert:Ly,meshmatcap_frag:Dy,meshnormal_vert:zy,meshnormal_frag:Ny,meshphong_vert:By,meshphong_frag:Oy,meshphysical_vert:Uy,meshphysical_frag:Vy,meshtoon_vert:Gy,meshtoon_frag:Hy,points_vert:Wy,points_frag:Xy,shadow_vert:Ky,shadow_frag:Yy,sprite_vert:qy,sprite_frag:Zy},Se={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},di={basic:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new J(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:dn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:dn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new J(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:dn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:dn([Se.points,Se.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:dn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:dn([Se.common,Se.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:dn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:dn([Se.sprite,Se.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:dn([Se.common,Se.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:dn([Se.lights,Se.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};di.physical={uniforms:dn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var xc={r:0,b:0,g:0},$y=new It,sm=new Qe;sm.set(-1,0,0,0,1,0,0,0,1);function Jy(i,e,t,n,r,o){let s=new J(0),a=r===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let x=y.isScene===!0?y.background:null;if(x&&x.isTexture){let b=y.backgroundBlurriness>0;x=e.get(x,b)}return x}function p(y){let x=!1,b=f(y);b===null?m(s,a):b&&b.isColor&&(m(b,1),x=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,x){let b=f(x);b&&(b.isCubeTexture||b.mapping===ws)?(c===void 0&&(c=new Ne(new Hi(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:xr(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($y.makeRotationFromEuler(x.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sm),c.material.toneMapped=ht.getTransfer(b.colorSpace)!==xt,(u!==b||h!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ne(new Kn(2,2),new hn({name:"BackgroundMaterial",uniforms:xr(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ht.getTransfer(b.colorSpace)!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,x){y.getRGB(xc,Ah(i)),t.buffers.color.setClear(xc.r,xc.g,xc.b,x,o)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(y,x=1){s.set(y),a=x,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(s,a)},render:p,addToRenderList:_,dispose:g}}function jy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),o=r,s=!1;function a(k,F,R,T,P){let C=!1,D=h(k,T,R,F);o!==D&&(o=D,c(o.object)),C=f(k,T,R,P),C&&p(k,T,R,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(C||s)&&(s=!1,b(k,F,R,T),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return i.createVertexArray()}function c(k){return i.bindVertexArray(k)}function u(k){return i.deleteVertexArray(k)}function h(k,F,R,T){let P=T.wireframe===!0,C=n[F.id];C===void 0&&(C={},n[F.id]=C);let D=k.isInstancedMesh===!0?k.id:0,B=C[D];B===void 0&&(B={},C[D]=B);let L=B[R.id];L===void 0&&(L={},B[R.id]=L);let O=L[P];return O===void 0&&(O=d(l()),L[P]=O),O}function d(k){let F=[],R=[],T=[];for(let P=0;P<t;P++)F[P]=0,R[P]=0,T[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:R,attributeDivisors:T,object:k,attributes:{},index:null}}function f(k,F,R,T){let P=o.attributes,C=F.attributes,D=0,B=R.getAttributes();for(let L in B)if(B[L].location>=0){let U=P[L],Z=C[L];if(Z===void 0&&(L==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),L==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;D++}return o.attributesNum!==D||o.index!==T}function p(k,F,R,T){let P={},C=F.attributes,D=0,B=R.getAttributes();for(let L in B)if(B[L].location>=0){let U=C[L];U===void 0&&(L==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),L==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));let Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),P[L]=Z,D++}o.attributes=P,o.attributesNum=D,o.index=T}function _(){let k=o.newAttributes;for(let F=0,R=k.length;F<R;F++)k[F]=0}function m(k){g(k,0)}function g(k,F){let R=o.newAttributes,T=o.enabledAttributes,P=o.attributeDivisors;R[k]=1,T[k]===0&&(i.enableVertexAttribArray(k),T[k]=1),P[k]!==F&&(i.vertexAttribDivisor(k,F),P[k]=F)}function y(){let k=o.newAttributes,F=o.enabledAttributes;for(let R=0,T=F.length;R<T;R++)F[R]!==k[R]&&(i.disableVertexAttribArray(R),F[R]=0)}function x(k,F,R,T,P,C,D){D===!0?i.vertexAttribIPointer(k,F,R,P,C):i.vertexAttribPointer(k,F,R,T,P,C)}function b(k,F,R,T){_();let P=T.attributes,C=R.getAttributes(),D=F.defaultAttributeValues;for(let B in C){let L=C[B];if(L.location>=0){let O=P[B];if(O===void 0&&(B==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),B==="instanceColor"&&k.instanceColor&&(O=k.instanceColor)),O!==void 0){let U=O.normalized,Z=O.itemSize,K=e.get(O);if(K===void 0)continue;let Q=K.buffer,ee=K.type,ae=K.bytesPerElement,H=ee===i.INT||ee===i.UNSIGNED_INT||O.gpuType===Nl;if(O.isInterleavedBufferAttribute){let W=O.data,oe=W.stride,le=O.offset;if(W.isInstancedInterleavedBuffer){for(let Y=0;Y<L.locationSize;Y++)g(L.location+Y,W.meshPerAttribute);k.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Y=0;Y<L.locationSize;Y++)m(L.location+Y);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Y=0;Y<L.locationSize;Y++)x(L.location+Y,Z/L.locationSize,ee,U,oe*ae,(le+Z/L.locationSize*Y)*ae,H)}else{if(O.isInstancedBufferAttribute){for(let W=0;W<L.locationSize;W++)g(L.location+W,O.meshPerAttribute);k.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let W=0;W<L.locationSize;W++)m(L.location+W);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let W=0;W<L.locationSize;W++)x(L.location+W,Z/L.locationSize,ee,U,Z*ae,Z/L.locationSize*W*ae,H)}}else if(D!==void 0){let U=D[B];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(L.location,U);break;case 3:i.vertexAttrib3fv(L.location,U);break;case 4:i.vertexAttrib4fv(L.location,U);break;default:i.vertexAttrib1fv(L.location,U)}}}}y()}function w(){S();for(let k in n){let F=n[k];for(let R in F){let T=F[R];for(let P in T){let C=T[P];for(let D in C)u(C[D].object),delete C[D];delete T[P]}}delete n[k]}}function M(k){if(n[k.id]===void 0)return;let F=n[k.id];for(let R in F){let T=F[R];for(let P in T){let C=T[P];for(let D in C)u(C[D].object),delete C[D];delete T[P]}}delete n[k.id]}function E(k){for(let F in n){let R=n[F];for(let T in R){let P=R[T];if(P[k.id]===void 0)continue;let C=P[k.id];for(let D in C)u(C[D].object),delete C[D];delete P[k.id]}}}function v(k){for(let F in n){let R=n[F],T=k.isInstancedMesh===!0?k.id:0,P=R[T];if(P!==void 0){for(let C in P){let D=P[C];for(let B in D)u(D[B].object),delete D[B];delete P[C]}delete R[T],Object.keys(R).length===0&&delete n[F]}}}function S(){A(),s=!0,o!==r&&(o=r,c(o.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Qy(i,e,t){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function ex(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(E){return!(E!==Dn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let v=E===$n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==En&&E!==Zn&&!v&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:b,maxSamples:w,samples:M}}function tx(i){let e=this,t=null,n=0,r=!1,o=!1,s=new Sn,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!r||p===null||p.length===0||o&&!m)o?u(null):c();else{let y=o?0:n,x=y*4,b=g.clippingState||null;l.value=b,b=u(p,d,x,f);for(let w=0;w!==x;++w)b[w]=t[w];g.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,b=f;x!==_;++x,b+=4)s.copy(h[x]).applyMatrix4(y,a),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var bo=4,nx=6,ix=20,rx=256,Cs=new li,Bp=new J,Dh=null,zh=0,Nh=0,Bh=!1,ox=new V,wr=new V,Mc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,o={}){let{size:s=256,position:a=ox}=o;Dh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dh,zh,Nh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:$n,format:Dn,colorSpace:qo,depthBuffer:!1},r=Op(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(e,t,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sx(o)),this._blurMaterial=lx(o,e,t),this._ggxMaterial=ax(o,e,t)}return r}_compileMaterial(e){let t=new Ne(new Ke,e);this._renderer.compile(t,Cs)}_sceneToCubeUV(e,t,n,r,o){let l=new ln(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Bp),h.toneMapping=Yn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new Hi,new et({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(Bp),g=!0);for(let x=0;x<6;x++){let b=x%3;b===0?(l.up.set(0,c[x],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[x],o.y,o.z)):b===1?(l.up.set(0,0,c[x]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[x],o.z)):(l.up.set(0,c[x],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[x]));let w=this._cubeSize;_o(r,b*w,x>2?w:0,w,w),h.setRenderTarget(r),g&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===qi||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Up());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let l=this._cubeSize;_o(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Cs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-bo?n-p+bo:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,_o(o,m,g,3*_,2*_),r.setRenderTarget(o),r.render(a,Cs),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,_o(e,m,g,3*_,2*_),r.setRenderTarget(e),r.render(a,Cs)}_blur(e,t,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,n,s),this._blurPass(o,e,n,n,s)}_blurPass(e,t,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-bo?r-this._lodMax+bo:0),d=4*(this._cubeSize-u);_o(t,h,d,3*u,2*u),s.setRenderTarget(t),s.render(l,Cs)}};function sx(i){let e=[],t=[],n=i,r=i-bo+1+nx;for(let o=0;o<r;o++){let s=Math.pow(2,n);e.push(s);let a=1/(s-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,p=new Float32Array(f*d*h),_=new Float32Array(f*d*h);for(let g=0;g<h;g++){let y=g%3*2/3-1,x=g>2?0:-1,b=[y,x,0,y+2/3,x,0,y+2/3,x+1,0,y,x,0,y+2/3,x+1,0,y,x+1,0];p.set(b,f*d*g);for(let w=0;w<d;w++){let M=u[w*2]*2-1,E=u[w*2+1]*2-1;g===0?wr.set(1,E,M):g===1?wr.set(-M,1,-E):g===2?wr.set(-M,E,1):g===3?wr.set(-1,E,-M):g===4?wr.set(-M,-1,E):wr.set(M,E,-1),wr.toArray(_,(g*d+w)*f)}}let m=new Ke;m.setAttribute("position",new vn(p,f)),m.setAttribute("outputDirection",new vn(_,f)),t.push(new Ne(m,null)),n>bo&&n--}return{lodMeshes:t,sizeLods:e}}function Op(i,e,t){let n=new un(i,e,t);return n.texture.mapping=ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _o(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ax(i,e,t){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function lx(i,e,t){return new hn({name:"SphericalGaussianBlur",defines:{SAMPLES:ix,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Up(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Vp(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Tc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Sc=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ts(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hi(5,5,5),o=new hn({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ui});o.uniforms.tEquirect.value=t;let s=new Ne(r,o),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=tn),new Cl(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}};function cx(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,f=!1){return d==null?null:f?s(d):o(d)}function o(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ll||f===Dl)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let _=new Sc(p.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){let f=d.mapping,p=f===Ll||f===Dl,_=f===qi||f===yr;if(p||_){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Mc(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Mc(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===Ll?d.mapping=qi:f===Dl&&(d.mapping=yr),d}function l(d){let f=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function ux(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&fr("WebGLRenderer: "+n+" extension not supported."),r}}}function hx(i,e,t,n){let r={},o=new WeakMap;function s(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",s),delete r[d.id];let f=o.get(d);f&&(e.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,p=h.attributes.position,_=0;if(p===void 0)return;if(f!==null){let y=f.array;_=f.version;for(let x=0,b=y.length;x<b;x+=3){let w=y[x+0],M=y[x+1],E=y[x+2];d.push(w,M,M,E,E,w)}}else{let y=p.array;_=p.version;for(let x=0,b=y.length/3-1;x<b;x+=3){let w=x+0,M=x+1,E=x+2;d.push(w,M,M,E,E,w)}}let m=new(p.count>=65535?mr:Qo)(d,1);m.version=_;let g=o.get(h);g&&e.remove(g),o.set(h,m)}function u(h){let d=o.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function dx(i,e,t){let n;function r(h){n=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,d){i.drawElements(n,d,o,h*s),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,o,h*s,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,h,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function fx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:Ze("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function px(i,e,t){let n=new WeakMap,r=new zt;function o(s,a,l){let c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],x=0;f===!0&&(x=1),p===!0&&(x=2),_===!0&&(x=3);let b=a.attributes.position.count*x,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let M=new Float32Array(b*w*4*h),E=new Jo(M,b,w,h);E.type=Zn,E.needsUpdate=!0;let v=x*4;for(let A=0;A<h;A++){let k=m[A],F=g[A],R=y[A],T=b*w*4*A;for(let P=0;P<k.count;P++){let C=P*v;f===!0&&(r.fromBufferAttribute(k,P),M[T+C+0]=r.x,M[T+C+1]=r.y,M[T+C+2]=r.z,M[T+C+3]=0),p===!0&&(r.fromBufferAttribute(F,P),M[T+C+4]=r.x,M[T+C+5]=r.y,M[T+C+6]=r.z,M[T+C+7]=0),_===!0&&(r.fromBufferAttribute(R,P),M[T+C+8]=r.x,M[T+C+9]=r.y,M[T+C+10]=r.z,M[T+C+11]=R.itemSize===4?r.w:1)}}d={count:h,texture:E,size:new ke(b,w)},n.set(a,d),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function mx(i,e,t,n,r){let o=new WeakMap;function s(c){let u=r.render.frame,h=c.geometry,d=e.get(c,h);if(o.get(d)!==u&&(e.update(d),o.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;o.get(f)!==u&&(f.update(),o.set(f,u))}return d}function a(){o=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}var gx={[sh]:"LINEAR_TONE_MAPPING",[ah]:"REINHARD_TONE_MAPPING",[lh]:"CINEON_TONE_MAPPING",[ch]:"ACES_FILMIC_TONE_MAPPING",[hh]:"AGX_TONE_MAPPING",[dh]:"NEUTRAL_TONE_MAPPING",[uh]:"CUSTOM_TONE_MAPPING"};function _x(i,e,t,n,r,o){let s=new un(e,t,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ke;c.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new we([0,2,0,0,2,0],2));let u=new bl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ne(c,u),d=new li(-1,1,1,-1,0,1),f=null,p=null,_=!1,m,g=null,y=[],x=!1;this.setSize=function(b,w){s.setSize(b,w),a!==null&&a.setSize(b,w),l!==null&&l.setSize(b,w);for(let M=0;M<y.length;M++){let E=y[M];E.setSize&&E.setSize(b,w)}},this.setEffects=function(b){y=b,x=y.length>0&&y[0].isRenderPass===!0;let w=s.width,M=s.height;y.length>0&&a===null&&(a=new un(w,M,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new un(w,M,{type:$n,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<y.length;E++){let v=y[E];v.setSize&&v.setSize(w,M)}},this.begin=function(b,w){if(_||b.toneMapping===Yn&&y.length===0)return!1;if(g=w,w!==null){let M=w.width,E=w.height;(s.width!==M||s.height!==E)&&this.setSize(M,E)}return x===!1&&b.setRenderTarget(s),m=b.toneMapping,b.toneMapping=Yn,!0},this.hasRenderPass=function(){return x},this.end=function(b,w){b.toneMapping=m,_=!0;let M=s,E=a;for(let v=0;v<y.length;v++){let S=y[v];S.enabled!==!1&&(S.render(b,E,M,w),S.needsSwap!==!1&&(M=E,E=E===a?l:a))}if(f!==b.outputColorSpace||p!==b.toneMapping){f=b.outputColorSpace,p=b.toneMapping,u.defines={},ht.getTransfer(f)===xt&&(u.defines.SRGB_TRANSFER="");let v=gx[p];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(g),b.render(h,d),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var am=new cn,Vh=new Gi(1,1),lm=new Jo,cm=new ol,um=new ts,Gp=[],Hp=[],Wp=new Float32Array(16),Xp=new Float32Array(9),Kp=new Float32Array(4);function yo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,o=Gp[r];if(o===void 0&&(o=new Float32Array(r),Gp[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ac(i,e){let t=Hp[e];t===void 0&&(t=new Int32Array(e),Hp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function wx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Kt(t,n))return;Kp.set(n),i.uniformMatrix2fv(this.addr,!1,Kp),Yt(t,n)}}function Mx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Kt(t,n))return;Xp.set(n),i.uniformMatrix3fv(this.addr,!1,Xp),Yt(t,n)}}function Sx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Kt(t,n))return;Wp.set(n),i.uniformMatrix4fv(this.addr,!1,Wp),Yt(t,n)}}function Tx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function Rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function kx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function Cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Fx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Vh.compareFunction=t.isReversedDepthBuffer()?yc:vc,o=Vh):o=am,t.setTexture2D(e||o,r)}function Lx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||cm,r)}function Dx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||um,r)}function zx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||lm,r)}function Nx(i){switch(i){case 5126:return bx;case 35664:return vx;case 35665:return yx;case 35666:return xx;case 35674:return wx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return Tx;case 35667:case 35671:return Ax;case 35668:case 35672:return Ex;case 35669:case 35673:return Rx;case 5125:return kx;case 36294:return Px;case 36295:return Cx;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return zx}}function Bx(i,e){i.uniform1fv(this.addr,e)}function Ox(i,e){let t=yo(e,this.size,2);i.uniform2fv(this.addr,t)}function Ux(i,e){let t=yo(e,this.size,3);i.uniform3fv(this.addr,t)}function Vx(i,e){let t=yo(e,this.size,4);i.uniform4fv(this.addr,t)}function Gx(i,e){let t=yo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hx(i,e){let t=yo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wx(i,e){let t=yo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xx(i,e){i.uniform1iv(this.addr,e)}function Kx(i,e){i.uniform2iv(this.addr,e)}function Yx(i,e){i.uniform3iv(this.addr,e)}function qx(i,e){i.uniform4iv(this.addr,e)}function Zx(i,e){i.uniform1uiv(this.addr,e)}function $x(i,e){i.uniform2uiv(this.addr,e)}function Jx(i,e){i.uniform3uiv(this.addr,e)}function jx(i,e){i.uniform4uiv(this.addr,e)}function Qx(i,e,t){let n=this.cache,r=e.length,o=Ac(t,r);Kt(n,o)||(i.uniform1iv(this.addr,o),Yt(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=Vh:s=am;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function ew(i,e,t){let n=this.cache,r=e.length,o=Ac(t,r);Kt(n,o)||(i.uniform1iv(this.addr,o),Yt(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||cm,o[s])}function tw(i,e,t){let n=this.cache,r=e.length,o=Ac(t,r);Kt(n,o)||(i.uniform1iv(this.addr,o),Yt(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||um,o[s])}function nw(i,e,t){let n=this.cache,r=e.length,o=Ac(t,r);Kt(n,o)||(i.uniform1iv(this.addr,o),Yt(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||lm,o[s])}function iw(i){switch(i){case 5126:return Bx;case 35664:return Ox;case 35665:return Ux;case 35666:return Vx;case 35674:return Gx;case 35675:return Hx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return Kx;case 35668:case 35672:return Yx;case 35669:case 35673:return qx;case 5125:return Zx;case 36294:return $x;case 36295:return Jx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return nw}}var Gh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nx(t.type)}},Hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iw(t.type)}},Wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],n)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function Yp(i,e){i.seq.push(e),i.map[e.id]=e}function rw(i,e,t){let n=i.name,r=n.length;for(Oh.lastIndex=0;;){let o=Oh.exec(n),s=Oh.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Yp(t,c===void 0?new Gh(a,i,e):new Hh(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Wh(a),Yp(t,h)),t=h}}}var vo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);rw(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,n,r){let o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function qp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ow=37297,sw=0;function aw(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}var Zp=new Qe;function lw(i){ht._getMatrix(Zp,ht.workingColorSpace,i);let e=`mat3( ${Zp.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Zo:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $p(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+aw(i.getShaderSource(e),a)}else return o}function cw(i,e){let t=lw(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var uw={[sh]:"Linear",[ah]:"Reinhard",[lh]:"Cineon",[ch]:"ACESFilmic",[hh]:"AgX",[dh]:"Neutral",[uh]:"Custom"};function hw(i,e){let t=uw[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wc=new V;function dw(){ht.getLuminanceCoefficients(wc);let i=wc.x.toFixed(4),e=wc.y.toFixed(4),t=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function pw(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mw(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Fs(i){return i!==""}function Jp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(i){return i.replace(gw,bw)}var _w=new Map;function bw(i,e){let t=rt[e];if(t===void 0){let n=_w.get(e);if(n!==void 0)t=rt[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xh(t)}var vw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(i){return i.replace(vw,yw)}function yw(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function em(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var xw={[ys]:"SHADOWMAP_TYPE_PCF",[po]:"SHADOWMAP_TYPE_VSM"};function ww(i){return xw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Mw={[qi]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE_UV"};function Sw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Mw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Tw={[yr]:"ENVMAP_MODE_REFRACTION"};function Aw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Tw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ew={[oh]:"ENVMAP_BLENDING_MULTIPLY",[fp]:"ENVMAP_BLENDING_MIX",[pp]:"ENVMAP_BLENDING_ADD"};function Rw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ew[i.combine]||"ENVMAP_BLENDING_NONE"}function kw(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Pw(i,e,t,n){let r=i.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,l=ww(t),c=Sw(t),u=Aw(t),h=Rw(t),d=kw(t),f=fw(t),p=pw(o),_=r.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fs).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fs).join(`
`),g.length>0&&(g+=`
`)):(m=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),g=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Yn?hw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,cw("linearToOutputTexel",t.outputColorSpace),dw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),s=Xh(s),s=Jp(s,t),s=jp(s,t),a=Xh(a),a=Jp(a,t),a=jp(a,t),s=Qp(s),a=Qp(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=y+m+s,b=y+g+a,w=qp(r,r.VERTEX_SHADER,x),M=qp(r,r.FRAGMENT_SHADER,b);r.attachShader(_,w),r.attachShader(_,M),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(k){if(i.debug.checkShaderErrors){let F=r.getProgramInfoLog(_)||"",R=r.getShaderInfoLog(w)||"",T=r.getShaderInfoLog(M)||"",P=F.trim(),C=R.trim(),D=T.trim(),B=!0,L=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,w,M);else{let O=$p(r,w,"vertex"),U=$p(r,M,"fragment");Ze("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+P+`
`+O+`
`+U)}else P!==""?Ye("WebGLProgram: Program Info Log:",P):(C===""||D==="")&&(L=!1);L&&(k.diagnostics={runnable:B,programLog:P,vertexShader:{log:C,prefix:m},fragmentShader:{log:D,prefix:g}})}r.deleteShader(w),r.deleteShader(M),v=new vo(r,_),S=mw(r,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(_,ow)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=M,this}var Cw=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yh(e),t.set(e,n)),n}},Yh=class{constructor(e){this.id=Cw++,this.code=e,this.usedTimes=0}};function Iw(i){return i===Ji||i===Rs||i===ks}function Fw(i,e,t,n,r,o){let s=new so,a=new Kh,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,S,A,k,F,R){let T=k.fog,P=F.geometry,C=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?k.environment:null,D=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,B=e.get(v.envMap||C,D),L=B&&B.mapping===ws?B.image.height:null,O=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Ye("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let U=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Z=U!==void 0?U.length:0,K=0;P.morphAttributes.position!==void 0&&(K=1),P.morphAttributes.normal!==void 0&&(K=2),P.morphAttributes.color!==void 0&&(K=3);let Q,ee,ae,H;if(O){let At=di[O];Q=At.vertexShader,ee=At.fragmentShader}else{Q=v.vertexShader,ee=v.fragmentShader;let At=a.getVertexShaderStage(v),vt=a.getFragmentShaderStage(v);a.update(v,At,vt),ae=At.id,H=vt.id}let W=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),le=F.isInstancedMesh===!0,Y=F.isBatchedMesh===!0,se=!!v.map,ge=!!v.matcap,Fe=!!B,Ae=!!v.aoMap,Pe=!!v.lightMap,We=!!v.bumpMap&&v.wireframe===!1,at=!!v.normalMap,Mt=!!v.displacementMap,Vt=!!v.emissiveMap,nt=!!v.metalnessMap,_t=!!v.roughnessMap,q=v.anisotropy>0,Wt=v.clearcoat>0,bt=v.dispersion>0,G=v.retroreflectivity>0,I=v.iridescence>0,j=v.sheen>0,ie=v.transmission>0,ce=q&&!!v.anisotropyMap,me=Wt&&!!v.clearcoatMap,_e=Wt&&!!v.clearcoatNormalMap,ue=Wt&&!!v.clearcoatRoughnessMap,de=I&&!!v.iridescenceMap,be=I&&!!v.iridescenceThicknessMap,Ue=j&&!!v.sheenColorMap,Me=j&&!!v.sheenRoughnessMap,ve=!!v.specularMap,Ve=!!v.specularColorMap,qe=!!v.specularIntensityMap,tt=ie&&!!v.transmissionMap,$=ie&&!!v.thicknessMap,ye=!!v.gradientMap,he=!!v.alphaMap,xe=v.alphaTest>0,Re=!!v.alphaHash,fe=!!v.extensions,Xe=Yn;v.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xe=i.toneMapping);let ze={shaderID:O,shaderType:v.type,shaderName:v.name,vertexShader:Q,fragmentShader:ee,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:H,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Y,batchingColor:Y&&F._colorsTexture!==null,instancing:le,instancingColor:le&&F.instanceColor!==null,instancingMorph:le&&F.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:se,matcap:ge,envMap:Fe,envMapMode:Fe&&B.mapping,envMapCubeUVHeight:L,aoMap:Ae,lightMap:Pe,bumpMap:We,normalMap:at,displacementMap:Mt,emissiveMap:Vt,normalMapObjectSpace:at&&v.normalMapType===_p,normalMapTangentSpace:at&&v.normalMapType===xh,packedNormalMap:at&&v.normalMapType===xh&&Iw(v.normalMap.format),metalnessMap:nt,roughnessMap:_t,anisotropy:q,anisotropyMap:ce,clearcoat:Wt,clearcoatMap:me,clearcoatNormalMap:_e,clearcoatRoughnessMap:ue,dispersion:bt,retroreflection:G,iridescence:I,iridescenceMap:de,iridescenceThicknessMap:be,sheen:j,sheenColorMap:Ue,sheenRoughnessMap:Me,specularMap:ve,specularColorMap:Ve,specularIntensityMap:qe,transmission:ie,transmissionMap:tt,thicknessMap:$,gradientMap:ye,opaque:v.transparent===!1&&v.blending===Yi&&v.alphaToCoverage===!1,alphaMap:he,alphaTest:xe,alphaHash:Re,combine:v.combine,mapUv:se&&p(v.map.channel),aoMapUv:Ae&&p(v.aoMap.channel),lightMapUv:Pe&&p(v.lightMap.channel),bumpMapUv:We&&p(v.bumpMap.channel),normalMapUv:at&&p(v.normalMap.channel),displacementMapUv:Mt&&p(v.displacementMap.channel),emissiveMapUv:Vt&&p(v.emissiveMap.channel),metalnessMapUv:nt&&p(v.metalnessMap.channel),roughnessMapUv:_t&&p(v.roughnessMap.channel),anisotropyMapUv:ce&&p(v.anisotropyMap.channel),clearcoatMapUv:me&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:_e&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:be&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&p(v.sheenRoughnessMap.channel),specularMapUv:ve&&p(v.specularMap.channel),specularColorMapUv:Ve&&p(v.specularColorMap.channel),specularIntensityMapUv:qe&&p(v.specularIntensityMap.channel),transmissionMapUv:tt&&p(v.transmissionMap.channel),thicknessMapUv:$&&p(v.thicknessMap.channel),alphaMapUv:he&&p(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(at||q),vertexNormals:!!P.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!P.attributes.uv&&(se||he),fog:!!T,useFog:v.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||P.attributes.normal===void 0&&at===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:K,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:R.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:se&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:Vt&&v.emissiveMap.isVideoTexture===!0&&ht.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ct,flipSided:v.side===nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:fe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&v.extensions.multiDraw===!0||Y)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function m(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let A in v.defines)S.push(A),S.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(g(S,v),y(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function g(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function y(v,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.retroreflection&&s.enable(24),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function x(v){let S=f[v.type],A;if(S){let k=di[S];A=Dp.clone(k.uniforms)}else A=v.uniforms;return A}function b(v,S){let A=u.get(S);return A!==void 0?++A.usedTimes:(A=new Pw(i,S,v,r),c.push(A),u.set(S,A)),A}function w(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:x,acquireProgram:b,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:E}}function Lw(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function Dw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function tm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nm(){let i=[],e=0,t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,_,m,g){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:s(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=s(d),y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=m,y.group=g),e++,y}function l(d,f,p,_,m,g,y){y.reversedDepth===!0&&(m=-m);let x=a(d,f,p,_,m,g);p.transmission>0?n.push(x):p.transparent===!0?r.push(x):t.push(x)}function c(d,f,p,_,m,g){let y=a(d,f,p,_,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?r.unshift(y):t.unshift(y)}function u(d,f){t.length>1&&t.sort(d||Dw),n.length>1&&n.sort(f||tm),r.length>1&&r.sort(f||tm)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:h,sort:u}}function zw(){let i=new WeakMap;function e(n,r){let o=i.get(n),s;return o===void 0?(s=new nm,i.set(n,[s])):r>=o.length?(s=new nm,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Nw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new J};break;case"SpotLight":t={position:new V,direction:new V,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new J,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new J,groundColor:new J};break;case"RectAreaLight":t={color:new J,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function Bw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ow=0;function Uw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vw(i){let e=new Nw,t=Bw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let r=new V,o=new It,s=new It;function a(c){let u=0,h=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,y=0,x=0,b=0,w=0,M=0,E=0,v=0,S=0,A=0;c.sort(Uw);for(let F=0,R=c.length;F<R;F++){let T=c[F],P=T.color,C=T.intensity,D=T.distance,B=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Ji?B=T.shadow.map.texture:B=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)u+=P.r*C,h+=P.g*C,d+=P.b*C;else if(T.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(T.sh.coefficients[L],C);A++}else if(T.isSunLight){let L=e.get(T);if(L.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let O=T.shadow,U=t.get(T);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[p]=U,n.sunShadowMap[p]=B;let Z=O.getViewportCount();for(let K=0;K<Z;K++)n.sunShadowMatrix[_+K]=O.getMatrix(K),n.sunShadowCascade[_+K]=O._cascadeData[K];_+=Z,p++}n.sun[f]=L,f++}else if(T.isDirectionalLight){let L=e.get(T);if(L.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let O=T.shadow,U=t.get(T);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.directionalShadow[m]=U,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=T.shadow.matrix,w++}n.directional[m]=L,m++}else if(T.isSpotLight){let L=e.get(T);L.position.setFromMatrixPosition(T.matrixWorld),L.color.copy(P).multiplyScalar(C),L.distance=D,L.coneCos=Math.cos(T.angle),L.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),L.decay=T.decay,n.spot[y]=L;let O=T.shadow;if(T.map&&(n.spotLightMap[v]=T.map,v++,O.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[y]=O.matrix,T.castShadow){let U=t.get(T);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.spotShadow[y]=U,n.spotShadowMap[y]=B,E++}y++}else if(T.isRectAreaLight){let L=e.get(T);L.color.copy(P).multiplyScalar(C),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),n.rectArea[x]=L,x++}else if(T.isPointLight){let L=e.get(T);if(L.color.copy(T.color).multiplyScalar(T.intensity),L.distance=T.distance,L.decay=T.decay,T.castShadow){let O=T.shadow,U=t.get(T);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=T.shadow.matrix,M++}n.point[g]=L,g++}else if(T.isHemisphereLight){let L=e.get(T);L.skyColor.copy(T.color).multiplyScalar(C),L.groundColor.copy(T.groundColor).multiplyScalar(C),n.hemi[b]=L,b++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let k=n.hash;(k.sunLength!==f||k.directionalLength!==m||k.pointLength!==g||k.spotLength!==y||k.rectAreaLength!==x||k.hemiLength!==b||k.numSunShadows!==p||k.numDirectionalShadows!==w||k.numPointShadows!==M||k.numSpotShadows!==E||k.numSpotMaps!==v||k.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=x,n.point.length=g,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-S,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,k.sunLength=f,k.directionalLength=m,k.pointLength=g,k.spotLength=y,k.rectAreaLength=x,k.hemiLength=b,k.numSunShadows=p,k.numDirectionalShadows=w,k.numPointShadows=M,k.numSpotShadows=E,k.numSpotMaps=v,k.numLightProbes=A,n.version=Ow++)}function l(c,u){let h=0,d=0,f=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let y=0,x=c.length;y<x;y++){let b=c[y];if(b.isSunLight){let w=n.sun[h];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(g),h++}else if(b.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),d++}else if(b.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),s.identity(),o.copy(b.matrixWorld),o.premultiply(g),s.extractRotation(o),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),_++}else if(b.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function im(i){let e=new Vw(i),t=[],n=[],r=[];function o(d){h.camera=d,t.length=0,n.length=0,r.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function Gw(i){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new im(i),e.set(r,[a])):o>=s.length?(a=new im(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ww=`uniform sampler2D shadow_pass;
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
}`,Xw=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Kw=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],rm=new It,Is=new V,Uh=new V;function Yw(i,e,t){let n=new es,r=new ke,o=new ke,s=new zt,a=new vl,l=new yl,c={},u=t.maxTextureSize,h={[ci]:nn,[nn]:ci,[ct]:ct},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Hw,fragmentShader:Ww}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ke;p.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ne(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let g=this.type;this.render=function(M,E,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===qf&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ys);let S=i.getRenderTarget(),A=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ui),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let R=g!==this.type;R&&E.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(P=>P.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,P=M.length;T<P;T++){let C=M[T],D=C.shadow;if(D===void 0){Ye("WebGLShadowMap:",C,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);let B=D.getFrameExtents();r.multiply(B),o.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/B.x),r.x=o.x*B.x,D.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/B.y),r.y=o.y*B.y,D.mapSize.y=o.y));let L=i.state.buffers.depth.getReversed();if(D.camera._reversedDepth=L,D.map===null||R===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===po){if(C.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new un(r.x,r.y,{format:Ji,type:$n,minFilter:tn,magFilter:tn,generateMipmaps:!1}),D.map.texture.name=C.name+".shadowMap",D.map.depthTexture=new Gi(r.x,r.y,Zn),D.map.depthTexture.name=C.name+".shadowMapDepth",D.map.depthTexture.format=oi,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Jt,D.map.depthTexture.magFilter=Jt}else C.isPointLight?(D.map=new Sc(r.x),D.map.depthTexture=new ul(r.x,qn)):(D.map=new un(r.x,r.y),D.map.depthTexture=new Gi(r.x,r.y,qn)),D.map.depthTexture.name=C.name+".shadowMap",D.map.depthTexture.format=oi,this.type===ys?(D.map.depthTexture.compareFunction=L?yc:vc,D.map.depthTexture.minFilter=tn,D.map.depthTexture.magFilter=tn):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Jt,D.map.depthTexture.magFilter=Jt);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==r.x||D.map.height!==r.y)&&D.map.setSize(r.x,r.y);let O=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();C.isPointLight!==!0&&D.updateMatrices(C,v);for(let U=0;U<O;U++){let Z=D.getCamera(U);if(C.isPointLight){let K=D.camera,Q=D.matrix,ee=C.distance||K.far;ee!==K.far&&(K.far=ee,K.updateProjectionMatrix()),Is.setFromMatrixPosition(C.matrixWorld),K.position.copy(Is),Uh.copy(K.position),Uh.add(Xw[U]),K.up.copy(Kw[U]),K.lookAt(Uh),K.updateMatrixWorld(),Q.makeTranslation(-Is.x,-Is.y,-Is.z),rm.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),D._frustum.setFromProjectionMatrix(rm,K.coordinateSystem,K.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)i.setRenderTarget(D.map,U),i.clear();else{U===0&&(i.setRenderTarget(D.map),i.clear());let K=D.getViewport(U);s.set(o.x*K.x,o.y*K.y,o.x*K.z,o.y*K.w),F.viewport(s)}n=D.getFrustum(U),b(E,v,Z,C,this.type)}D.isPointLightShadow!==!0&&this.type===po&&y(D,v),D.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(S,A,k)};function y(M,E){let v=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new un(r.x,r.y,{format:Ji,type:$n}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(E,null,v,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(E,null,v,f,_,null)}function x(M,E,v,S){let A=null,k=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(k!==void 0)A=k;else if(A=v.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let F=A.uuid,R=E.uuid,T=c[F];T===void 0&&(T={},c[F]=T);let P=T[R];P===void 0&&(P=A.clone(),T[R]=P,E.addEventListener("dispose",w)),A=P}if(A.visible=E.visible,A.wireframe=E.wireframe,S===po?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:h[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let F=i.properties.get(A);F.light=v}return A}function b(M,E,v,S,A){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===po)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let R=e.update(M),T=M.material;if(Array.isArray(T)){let P=R.groups;for(let C=0,D=P.length;C<D;C++){let B=P[C],L=T[B.materialIndex];if(L&&L.visible){let O=x(M,L,S,A);M.onBeforeShadow(i,M,E,v,R,O,B),i.renderBufferDirect(v,null,R,O,M,B),M.onAfterShadow(i,M,E,v,R,O,B)}}}else if(T.visible){let P=x(M,T,S,A);M.onBeforeShadow(i,M,E,v,R,P,null),i.renderBufferDirect(v,null,R,P,M,null),M.onAfterShadow(i,M,E,v,R,P,null)}}let F=M.children;for(let R=0,T=F.length;R<T;R++)b(F[R],E,v,S,A)}function w(M){M.target.removeEventListener("dispose",w);for(let v in c){let S=c[v],A=M.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function qw(i,e){function t(){let $=!1,ye=new zt,he=null,xe=new zt(0,0,0,0);return{setMask:function(Re){he!==Re&&!$&&(i.colorMask(Re,Re,Re,Re),he=Re)},setLocked:function(Re){$=Re},setClear:function(Re,fe,Xe,ze,At){At===!0&&(Re*=ze,fe*=ze,Xe*=ze),ye.set(Re,fe,Xe,ze),xe.equals(ye)===!1&&(i.clearColor(Re,fe,Xe,ze),xe.copy(ye))},reset:function(){$=!1,he=null,xe.set(-1,0,0,0)}}}function n(){let $=!1,ye=!1,he=null,xe=null,Re=null;return{setReversed:function(fe){if(ye!==fe){let Xe=e.get("EXT_clip_control");fe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ye=fe;let ze=Re;Re=null,this.setClear(ze)}},getReversed:function(){return ye},setTest:function(fe){fe?W(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(fe){he!==fe&&!$&&(i.depthMask(fe),he=fe)},setFunc:function(fe){if(ye&&(fe=kp[fe]),xe!==fe){switch(fe){case Ya:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Za:i.depthFunc(i.LESS);break;case no:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case Ja:i.depthFunc(i.GEQUAL);break;case ja:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=fe}},setLocked:function(fe){$=fe},setClear:function(fe){Re!==fe&&(Re=fe,ye&&(fe=1-fe),i.clearDepth(fe))},reset:function(){$=!1,he=null,xe=null,Re=null,ye=!1}}}function r(){let $=!1,ye=null,he=null,xe=null,Re=null,fe=null,Xe=null,ze=null,At=null;return{setTest:function(vt){$||(vt?W(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(vt){ye!==vt&&!$&&(i.stencilMask(vt),ye=vt)},setFunc:function(vt,On,ni){(he!==vt||xe!==On||Re!==ni)&&(i.stencilFunc(vt,On,ni),he=vt,xe=On,Re=ni)},setOp:function(vt,On,ni){(fe!==vt||Xe!==On||ze!==ni)&&(i.stencilOp(vt,On,ni),fe=vt,Xe=On,ze=ni)},setLocked:function(vt){$=vt},setClear:function(vt){At!==vt&&(i.clearStencil(vt),At=vt)},reset:function(){$=!1,ye=null,he=null,xe=null,Re=null,fe=null,Xe=null,ze=null,At=null}}}let o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,y=null,x=null,b=null,w=null,M=null,E=null,v=new J(0,0,0),S=0,A=!1,k=null,F=null,R=null,T=null,P=null,C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,B=0,L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(L)[1]),D=B>=1):L.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),D=B>=2);let O=null,U={},Z=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),Q=new zt().fromArray(Z),ee=new zt().fromArray(K);function ae($,ye,he,xe){let Re=new Uint8Array(4),fe=i.createTexture();i.bindTexture($,fe),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<he;Xe++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(ye+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return fe}let H={};H[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),W(i.DEPTH_TEST),s.setFunc(no),We(!1),at(th),W(i.CULL_FACE),Ae(ui);function W($){u[$]!==!0&&(i.enable($),u[$]=!0)}function oe($){u[$]!==!1&&(i.disable($),u[$]=!1)}function le($,ye){return d[$]!==ye?(i.bindFramebuffer($,ye),d[$]=ye,$===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ye),$===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Y($,ye){let he=p,xe=!1;if($){he=f.get(ye),he===void 0&&(he=[],f.set(ye,he));let Re=$.textures;if(he.length!==Re.length||he[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Xe=Re.length;fe<Xe;fe++)he[fe]=i.COLOR_ATTACHMENT0+fe;he.length=Re.length,xe=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,xe=!0);xe&&i.drawBuffers(he)}function se($){return _!==$?(i.useProgram($),_=$,!0):!1}let ge={[vr]:i.FUNC_ADD,[$f]:i.FUNC_SUBTRACT,[Jf]:i.FUNC_REVERSE_SUBTRACT};ge[jf]=i.MIN,ge[Qf]=i.MAX;let Fe={[ep]:i.ZERO,[tp]:i.ONE,[np]:i.SRC_COLOR,[ih]:i.SRC_ALPHA,[lp]:i.SRC_ALPHA_SATURATE,[sp]:i.DST_COLOR,[rp]:i.DST_ALPHA,[ip]:i.ONE_MINUS_SRC_COLOR,[rh]:i.ONE_MINUS_SRC_ALPHA,[ap]:i.ONE_MINUS_DST_COLOR,[op]:i.ONE_MINUS_DST_ALPHA,[cp]:i.CONSTANT_COLOR,[up]:i.ONE_MINUS_CONSTANT_COLOR,[hp]:i.CONSTANT_ALPHA,[dp]:i.ONE_MINUS_CONSTANT_ALPHA};function Ae($,ye,he,xe,Re,fe,Xe,ze,At,vt){if($===ui){m===!0&&(oe(i.BLEND),m=!1);return}if(m===!1&&(W(i.BLEND),m=!0),$!==Zf){if($!==g||vt!==A){if((y!==vr||w!==vr)&&(i.blendEquation(i.FUNC_ADD),y=vr,w=vr),vt)switch($){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nt:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",$);break}else switch($){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nh:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xs:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",$);break}x=null,b=null,M=null,E=null,v.set(0,0,0),S=0,g=$,A=vt}return}Re=Re||ye,fe=fe||he,Xe=Xe||xe,(ye!==y||Re!==w)&&(i.blendEquationSeparate(ge[ye],ge[Re]),y=ye,w=Re),(he!==x||xe!==b||fe!==M||Xe!==E)&&(i.blendFuncSeparate(Fe[he],Fe[xe],Fe[fe],Fe[Xe]),x=he,b=xe,M=fe,E=Xe),(ze.equals(v)===!1||At!==S)&&(i.blendColor(ze.r,ze.g,ze.b,At),v.copy(ze),S=At),g=$,A=!1}function Pe($,ye){$.side===ct?oe(i.CULL_FACE):W(i.CULL_FACE);let he=$.side===nn;ye&&(he=!he),We(he),$.blending===Yi&&$.transparent===!1?Ae(ui):Ae($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),s.setFunc($.depthFunc),s.setTest($.depthTest),s.setMask($.depthWrite),o.setMask($.colorWrite);let xe=$.stencilWrite;a.setTest(xe),xe&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Vt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function We($){k!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),k=$)}function at($){$!==Kf?(W(i.CULL_FACE),$!==F&&($===th?i.cullFace(i.BACK):$===Yf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),F=$}function Mt($){$!==R&&(D&&i.lineWidth($),R=$)}function Vt($,ye,he){$?(W(i.POLYGON_OFFSET_FILL),(T!==ye||P!==he)&&(T=ye,P=he,s.getReversed()&&(ye=-ye),i.polygonOffset(ye,he))):oe(i.POLYGON_OFFSET_FILL)}function nt($){$?W(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function _t($){$===void 0&&($=i.TEXTURE0+C-1),O!==$&&(i.activeTexture($),O=$)}function q($,ye,he){he===void 0&&(O===null?he=i.TEXTURE0+C-1:he=O);let xe=U[he];xe===void 0&&(xe={type:void 0,texture:void 0},U[he]=xe),(xe.type!==$||xe.texture!==ye)&&(O!==he&&(i.activeTexture(he),O=he),i.bindTexture($,ye||H[$]),xe.type=$,xe.texture=ye)}function Wt(){let $=U[O];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function bt(){try{i.compressedTexImage2D(...arguments)}catch($){Ze("WebGLState:",$)}}function G(){try{i.compressedTexImage3D(...arguments)}catch($){Ze("WebGLState:",$)}}function I(){try{i.texSubImage2D(...arguments)}catch($){Ze("WebGLState:",$)}}function j(){try{i.texSubImage3D(...arguments)}catch($){Ze("WebGLState:",$)}}function ie(){try{i.compressedTexSubImage2D(...arguments)}catch($){Ze("WebGLState:",$)}}function ce(){try{i.compressedTexSubImage3D(...arguments)}catch($){Ze("WebGLState:",$)}}function me(){try{i.texStorage2D(...arguments)}catch($){Ze("WebGLState:",$)}}function _e(){try{i.texStorage3D(...arguments)}catch($){Ze("WebGLState:",$)}}function ue(){try{i.texImage2D(...arguments)}catch($){Ze("WebGLState:",$)}}function de(){try{i.texImage3D(...arguments)}catch($){Ze("WebGLState:",$)}}function be($){return h[$]!==void 0?h[$]:i.getParameter($)}function Ue($,ye){h[$]!==ye&&(i.pixelStorei($,ye),h[$]=ye)}function Me($){Q.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),Q.copy($))}function ve($){ee.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),ee.copy($))}function Ve($,ye){let he=c.get(ye);he===void 0&&(he=new WeakMap,c.set(ye,he));let xe=he.get($);xe===void 0&&(xe=i.getUniformBlockIndex(ye,$.name),he.set($,xe))}function qe($,ye){let xe=c.get(ye).get($);l.get(ye)!==xe&&(i.uniformBlockBinding(ye,xe,$.__bindingPointIndex),l.set(ye,xe))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},O=null,U={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,y=null,x=null,b=null,w=null,M=null,E=null,v=new J(0,0,0),S=0,A=!1,k=null,F=null,R=null,T=null,P=null,Q.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:W,disable:oe,bindFramebuffer:le,drawBuffers:Y,useProgram:se,setBlending:Ae,setMaterial:Pe,setFlipSided:We,setCullFace:at,setLineWidth:Mt,setPolygonOffset:Vt,setScissorTest:nt,activeTexture:_t,bindTexture:q,unbindTexture:Wt,compressedTexImage2D:bt,compressedTexImage3D:G,texImage2D:ue,texImage3D:de,pixelStorei:Ue,getParameter:be,updateUBOMapping:Ve,uniformBlockBinding:qe,texStorage2D:me,texStorage3D:_e,texSubImage2D:I,texSubImage3D:j,compressedTexSubImage2D:ie,compressedTexSubImage3D:ce,scissor:Me,viewport:ve,reset:tt}}function Zw(i,e,t,n,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap,h=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(G,I){return p?new OffscreenCanvas(G,I):io("canvas")}function m(G,I,j){let ie=1,ce=bt(G);if((ce.width>j||ce.height>j)&&(ie=j/Math.max(ce.width,ce.height)),ie<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){let me=Math.floor(ie*ce.width),_e=Math.floor(ie*ce.height);d===void 0&&(d=_(me,_e));let ue=I?_(me,_e):d;return ue.width=me,ue.height=_e,ue.getContext("2d").drawImage(G,0,0,me,_e),Ye("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+me+"x"+_e+")."),ue}else return"data"in G&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),G;return G}function g(G){return G.generateMipmaps}function y(G){i.generateMipmap(G)}function x(G){return G.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?i.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(G,I,j,ie,ce,me=!1){if(G!==null){if(i[G]!==void 0)return i[G];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let _e;ie&&(_e=e.get("EXT_texture_norm16"),_e||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=I;if(I===i.RED&&(j===i.FLOAT&&(ue=i.R32F),j===i.HALF_FLOAT&&(ue=i.R16F),j===i.UNSIGNED_BYTE&&(ue=i.R8),j===i.UNSIGNED_SHORT&&_e&&(ue=_e.R16_EXT),j===i.SHORT&&_e&&(ue=_e.R16_SNORM_EXT)),I===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ue=i.R8UI),j===i.UNSIGNED_SHORT&&(ue=i.R16UI),j===i.UNSIGNED_INT&&(ue=i.R32UI),j===i.BYTE&&(ue=i.R8I),j===i.SHORT&&(ue=i.R16I),j===i.INT&&(ue=i.R32I)),I===i.RG&&(j===i.FLOAT&&(ue=i.RG32F),j===i.HALF_FLOAT&&(ue=i.RG16F),j===i.UNSIGNED_BYTE&&(ue=i.RG8),j===i.UNSIGNED_SHORT&&_e&&(ue=_e.RG16_EXT),j===i.SHORT&&_e&&(ue=_e.RG16_SNORM_EXT)),I===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ue=i.RG8UI),j===i.UNSIGNED_SHORT&&(ue=i.RG16UI),j===i.UNSIGNED_INT&&(ue=i.RG32UI),j===i.BYTE&&(ue=i.RG8I),j===i.SHORT&&(ue=i.RG16I),j===i.INT&&(ue=i.RG32I)),I===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ue=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ue=i.RGB16UI),j===i.UNSIGNED_INT&&(ue=i.RGB32UI),j===i.BYTE&&(ue=i.RGB8I),j===i.SHORT&&(ue=i.RGB16I),j===i.INT&&(ue=i.RGB32I)),I===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ue=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ue=i.RGBA16UI),j===i.UNSIGNED_INT&&(ue=i.RGBA32UI),j===i.BYTE&&(ue=i.RGBA8I),j===i.SHORT&&(ue=i.RGBA16I),j===i.INT&&(ue=i.RGBA32I)),I===i.RGB&&(j===i.UNSIGNED_SHORT&&_e&&(ue=_e.RGB16_EXT),j===i.SHORT&&_e&&(ue=_e.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(ue=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(ue=i.R11F_G11F_B10F)),I===i.RGBA){let de=me?Zo:ht.getTransfer(ce);j===i.FLOAT&&(ue=i.RGBA32F),j===i.HALF_FLOAT&&(ue=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ue=de===xt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&_e&&(ue=_e.RGBA16_EXT),j===i.SHORT&&_e&&(ue=_e.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function w(G,I){let j;return G?I===null||I===qn||I===go?j=i.DEPTH24_STENCIL8:I===Zn?j=i.DEPTH32F_STENCIL8:I===mo&&(j=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===qn||I===go?j=i.DEPTH_COMPONENT24:I===Zn?j=i.DEPTH_COMPONENT32F:I===mo&&(j=i.DEPTH_COMPONENT16),j}function M(G,I){return g(G)===!0||G.isFramebufferTexture&&G.minFilter!==Jt&&G.minFilter!==tn?Math.log2(Math.max(I.width,I.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?I.mipmaps.length:1}function E(G){let I=G.target;I.removeEventListener("dispose",E),S(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&h.delete(I)}function v(G){let I=G.target;I.removeEventListener("dispose",v),k(I)}function S(G){let I=n.get(G);if(I.__webglInit===void 0)return;let j=G.source,ie=f.get(j);if(ie){let ce=ie[I.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&A(G),Object.keys(ie).length===0&&f.delete(j)}n.remove(G)}function A(G){let I=n.get(G);i.deleteTexture(I.__webglTexture);let j=G.source,ie=f.get(j);delete ie[I.__cacheKey],s.memory.textures--}function k(G){let I=n.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),n.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(I.__webglFramebuffer[ie]))for(let ce=0;ce<I.__webglFramebuffer[ie].length;ce++)i.deleteFramebuffer(I.__webglFramebuffer[ie][ce]);else i.deleteFramebuffer(I.__webglFramebuffer[ie]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[ie])}else{if(Array.isArray(I.__webglFramebuffer))for(let ie=0;ie<I.__webglFramebuffer.length;ie++)i.deleteFramebuffer(I.__webglFramebuffer[ie]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ie=0;ie<I.__webglColorRenderbuffer.length;ie++)I.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[ie]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let j=G.textures;for(let ie=0,ce=j.length;ie<ce;ie++){let me=n.get(j[ie]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),s.memory.textures--),n.remove(j[ie])}n.remove(G)}let F=0;function R(){F=0}function T(){return F}function P(G){F=G}function C(){let G=F;return G>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,G}function D(G){let I=[];return I.push(G.wrapS),I.push(G.wrapT),I.push(G.wrapR||0),I.push(G.magFilter),I.push(G.minFilter),I.push(G.anisotropy),I.push(G.internalFormat),I.push(G.format),I.push(G.type),I.push(G.generateMipmaps),I.push(G.premultiplyAlpha),I.push(G.flipY),I.push(G.unpackAlignment),I.push(G.colorSpace),I.join()}function B(G,I){let j=n.get(G);if(G.isVideoTexture&&q(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&j.__version!==G.version){let ie=G.image;if(ie===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(j,G,I);return}}else G.isExternalTexture&&(j.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+I)}function L(G,I){let j=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&j.__version!==G.version){oe(j,G,I);return}else G.isExternalTexture&&(j.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+I)}function O(G,I){let j=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&j.__version!==G.version){oe(j,G,I);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+I)}function U(G,I){let j=n.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&j.__version!==G.version){le(j,G,I);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+I)}let Z={[pr]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[el]:i.MIRRORED_REPEAT},K={[Jt]:i.NEAREST,[mp]:i.NEAREST_MIPMAP_NEAREST,[Ms]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[zl]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},Q={[vp]:i.NEVER,[Sp]:i.ALWAYS,[yp]:i.LESS,[vc]:i.LEQUAL,[xp]:i.EQUAL,[yc]:i.GEQUAL,[wp]:i.GREATER,[Mp]:i.NOTEQUAL};function ee(G,I){if(I.type===Zn&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===tn||I.magFilter===zl||I.magFilter===Ms||I.magFilter===Zi||I.minFilter===tn||I.minFilter===zl||I.minFilter===Ms||I.minFilter===Zi)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(G,i.TEXTURE_WRAP_S,Z[I.wrapS]),i.texParameteri(G,i.TEXTURE_WRAP_T,Z[I.wrapT]),(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)&&i.texParameteri(G,i.TEXTURE_WRAP_R,Z[I.wrapR]),i.texParameteri(G,i.TEXTURE_MAG_FILTER,K[I.magFilter]),i.texParameteri(G,i.TEXTURE_MIN_FILTER,K[I.minFilter]),I.compareFunction&&(i.texParameteri(G,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(G,i.TEXTURE_COMPARE_FUNC,Q[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===Jt||I.minFilter!==Ms&&I.minFilter!==Zi||I.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(G,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function ae(G,I){let j=!1;G.__webglInit===void 0&&(G.__webglInit=!0,I.addEventListener("dispose",E));let ie=I.source,ce=f.get(ie);ce===void 0&&(ce={},f.set(ie,ce));let me=D(I);if(me!==G.__cacheKey){ce[me]===void 0&&(ce[me]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,j=!0),ce[me].usedTimes++;let _e=ce[G.__cacheKey];_e!==void 0&&(ce[G.__cacheKey].usedTimes--,_e.usedTimes===0&&A(I)),G.__cacheKey=me,G.__webglTexture=ce[me].texture}return j}function H(G,I,j){return Math.floor(Math.floor(G/j)/I)}function W(G,I,j,ie){let me=G.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,j,ie,I.data);else{me.sort((Ue,Me)=>Ue.start-Me.start);let _e=0;for(let Ue=1;Ue<me.length;Ue++){let Me=me[_e],ve=me[Ue],Ve=Me.start+Me.count,qe=H(ve.start,I.width,4),tt=H(Me.start,I.width,4);ve.start<=Ve+1&&qe===tt&&H(ve.start+ve.count-1,I.width,4)===qe?Me.count=Math.max(Me.count,ve.start+ve.count-Me.start):(++_e,me[_e]=ve)}me.length=_e+1;let ue=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,I.width);for(let Ue=0,Me=me.length;Ue<Me;Ue++){let ve=me[Ue],Ve=Math.floor(ve.start/4),qe=Math.ceil(ve.count/4),tt=Ve%I.width,$=Math.floor(Ve/I.width),ye=qe,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(i.UNPACK_SKIP_ROWS,$),t.texSubImage2D(i.TEXTURE_2D,0,tt,$,ye,he,j,ie,I.data)}G.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ue),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function oe(G,I,j){let ie=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(ie=i.TEXTURE_3D);let ce=ae(G,I),me=I.source;t.bindTexture(ie,G.__webglTexture,i.TEXTURE0+j);let _e=n.get(me);if(me.version!==_e.__version||ce===!0){if(t.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let he=ht.getPrimaries(ht.workingColorSpace),xe=I.colorSpace===Si?null:ht.getPrimaries(I.colorSpace),Re=I.colorSpace===Si||he===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment);let de=m(I.image,!1,r.maxTextureSize);de=Wt(I,de);let be=o.convert(I.format,I.colorSpace),Ue=o.convert(I.type),Me=b(I.internalFormat,be,Ue,I.normalized,I.colorSpace,I.isVideoTexture);ee(ie,I);let ve,Ve=I.mipmaps,qe=I.isVideoTexture!==!0,tt=_e.__version===void 0||ce===!0,$=me.dataReady,ye=M(I,de);if(I.isDepthTexture)Me=w(I.format===$i,I.type),tt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Me,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Me,de.width,de.height,0,be,Ue,null));else if(I.isDataTexture)if(Ve.length>0){qe&&tt&&t.texStorage2D(i.TEXTURE_2D,ye,Me,Ve[0].width,Ve[0].height);for(let he=0,xe=Ve.length;he<xe;he++)ve=Ve[he],qe?$&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ve.width,ve.height,be,Ue,ve.data):t.texImage2D(i.TEXTURE_2D,he,Me,ve.width,ve.height,0,be,Ue,ve.data);I.generateMipmaps=!1}else qe?(tt&&t.texStorage2D(i.TEXTURE_2D,ye,Me,de.width,de.height),$&&W(I,de,be,Ue)):t.texImage2D(i.TEXTURE_2D,0,Me,de.width,de.height,0,be,Ue,de.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){qe&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Me,Ve[0].width,Ve[0].height,de.depth);for(let he=0,xe=Ve.length;he<xe;he++)if(ve=Ve[he],I.format!==Dn)if(be!==null)if(qe){if($)if(I.layerUpdates.size>0){let Re=kh(ve.width,ve.height,I.format,I.type);for(let fe of I.layerUpdates){let Xe=ve.data.subarray(fe*Re/ve.data.BYTES_PER_ELEMENT,(fe+1)*Re/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,fe,ve.width,ve.height,1,be,Xe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ve.width,ve.height,de.depth,be,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,Me,ve.width,ve.height,de.depth,0,ve.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?$&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ve.width,ve.height,de.depth,be,Ue,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,Me,ve.width,ve.height,de.depth,0,be,Ue,ve.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{qe&&tt&&t.texStorage2D(i.TEXTURE_2D,ye,Me,Ve[0].width,Ve[0].height);for(let he=0,xe=Ve.length;he<xe;he++)ve=Ve[he],I.format!==Dn?be!==null?qe?$&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,he,Me,ve.width,ve.height,0,ve.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?$&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ve.width,ve.height,be,Ue,ve.data):t.texImage2D(i.TEXTURE_2D,he,Me,ve.width,ve.height,0,be,Ue,ve.data)}else if(I.isDataArrayTexture)if(qe){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Me,de.width,de.height,de.depth),$)if(I.layerUpdates.size>0){let he=kh(de.width,de.height,I.format,I.type);for(let xe of I.layerUpdates){let Re=de.data.subarray(xe*he/de.data.BYTES_PER_ELEMENT,(xe+1)*he/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,de.width,de.height,1,be,Ue,Re)}I.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,be,Ue,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,de.width,de.height,de.depth,0,be,Ue,de.data);else if(I.isData3DTexture)qe?(tt&&t.texStorage3D(i.TEXTURE_3D,ye,Me,de.width,de.height,de.depth),$&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,be,Ue,de.data)):t.texImage3D(i.TEXTURE_3D,0,Me,de.width,de.height,de.depth,0,be,Ue,de.data);else if(I.isFramebufferTexture){if(tt)if(qe)t.texStorage2D(i.TEXTURE_2D,ye,Me,de.width,de.height);else{let he=de.width,xe=de.height;for(let Re=0;Re<ye;Re++)t.texImage2D(i.TEXTURE_2D,Re,Me,he,xe,0,be,Ue,null),he>>=1,xe>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),de.parentNode!==he){he.appendChild(de),h.add(I),he.onpaint=xe=>{let Re=xe.changedElements;for(let fe of h)Re.includes(fe.image)&&(fe.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let Re=i.RGBA,fe=i.RGBA,Xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,fe,Xe,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(qe&&tt){let he=bt(Ve[0]);t.texStorage2D(i.TEXTURE_2D,ye,Me,he.width,he.height)}for(let he=0,xe=Ve.length;he<xe;he++)ve=Ve[he],qe?$&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,be,Ue,ve):t.texImage2D(i.TEXTURE_2D,he,Me,be,Ue,ve);I.generateMipmaps=!1}else if(qe){if(tt){let he=bt(de);t.texStorage2D(i.TEXTURE_2D,ye,Me,he.width,he.height)}$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Ue,de)}else t.texImage2D(i.TEXTURE_2D,0,Me,be,Ue,de);g(I)&&y(ie),_e.__version=me.version,I.onUpdate&&I.onUpdate(I)}G.__version=I.version}function le(G,I,j){if(I.image.length!==6)return;let ie=ae(G,I),ce=I.source;t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+j);let me=n.get(ce);if(ce.version!==me.__version||ie===!0){t.activeTexture(i.TEXTURE0+j);let _e=ht.getPrimaries(ht.workingColorSpace),ue=I.colorSpace===Si?null:ht.getPrimaries(I.colorSpace),de=I.colorSpace===Si||_e===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let be=I.isCompressedTexture||I.image[0].isCompressedTexture,Ue=I.image[0]&&I.image[0].isDataTexture,Me=[];for(let fe=0;fe<6;fe++)!be&&!Ue?Me[fe]=m(I.image[fe],!0,r.maxCubemapSize):Me[fe]=Ue?I.image[fe].image:I.image[fe],Me[fe]=Wt(I,Me[fe]);let ve=Me[0],Ve=o.convert(I.format,I.colorSpace),qe=o.convert(I.type),tt=b(I.internalFormat,Ve,qe,I.normalized,I.colorSpace),$=I.isVideoTexture!==!0,ye=me.__version===void 0||ie===!0,he=ce.dataReady,xe=M(I,ve);ee(i.TEXTURE_CUBE_MAP,I);let Re;if(be){$&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,tt,ve.width,ve.height);for(let fe=0;fe<6;fe++){Re=Me[fe].mipmaps;for(let Xe=0;Xe<Re.length;Xe++){let ze=Re[Xe];I.format!==Dn?Ve!==null?$?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe,0,0,ze.width,ze.height,Ve,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe,tt,ze.width,ze.height,0,ze.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe,0,0,ze.width,ze.height,Ve,qe,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe,tt,ze.width,ze.height,0,Ve,qe,ze.data)}}}else{if(Re=I.mipmaps,$&&ye){Re.length>0&&xe++;let fe=bt(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,tt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ue){$?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Me[fe].width,Me[fe].height,Ve,qe,Me[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,tt,Me[fe].width,Me[fe].height,0,Ve,qe,Me[fe].data);for(let Xe=0;Xe<Re.length;Xe++){let At=Re[Xe].image[fe].image;$?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe+1,0,0,At.width,At.height,Ve,qe,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe+1,tt,At.width,At.height,0,Ve,qe,At.data)}}else{$?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ve,qe,Me[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,tt,Ve,qe,Me[fe]);for(let Xe=0;Xe<Re.length;Xe++){let ze=Re[Xe];$?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe+1,0,0,Ve,qe,ze.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe+1,tt,Ve,qe,ze.image[fe])}}}g(I)&&y(i.TEXTURE_CUBE_MAP),me.__version=ce.version,I.onUpdate&&I.onUpdate(I)}G.__version=I.version}function Y(G,I,j,ie,ce,me){let _e=o.convert(j.format,j.colorSpace),ue=o.convert(j.type),de=b(j.internalFormat,_e,ue,j.normalized,j.colorSpace),be=n.get(I),Ue=n.get(j);if(Ue.__renderTarget=I,!be.__hasExternalTextures){let Me=Math.max(1,I.width>>me),ve=Math.max(1,I.height>>me);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,me,de,Me,ve,I.depth,0,_e,ue,null):t.texImage2D(ce,me,de,Me,ve,0,_e,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,G),_t(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ce,Ue.__webglTexture,0,nt(I)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ce,Ue.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(G,I,j){if(i.bindRenderbuffer(i.RENDERBUFFER,G),I.depthBuffer){let ie=I.depthTexture,ce=ie&&ie.isDepthTexture?ie.type:null,me=w(I.stencilBuffer,ce),_e=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(I),me,I.width,I.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(I),me,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,me,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,G)}else{let ie=I.textures;for(let ce=0;ce<ie.length;ce++){let me=ie[ce],_e=o.convert(me.format,me.colorSpace),ue=o.convert(me.type),de=b(me.internalFormat,_e,ue,me.normalized,me.colorSpace);_t(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(I),de,I.width,I.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(I),de,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,de,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(G,I,j){let ie=I.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,G),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ce=n.get(I.depthTexture);if(ce.__renderTarget=I,(!ce.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),ie){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,I.depthTexture.addEventListener("dispose",E)),ce.__webglTexture===void 0){ce.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),ee(i.TEXTURE_CUBE_MAP,I.depthTexture);let be=o.convert(I.depthTexture.format),Ue=o.convert(I.depthTexture.type),Me;I.depthTexture.format===oi?Me=i.DEPTH_COMPONENT24:I.depthTexture.format===$i&&(Me=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Me,I.width,I.height,0,be,Ue,null)}}else B(I.depthTexture,0);let me=ce.__webglTexture,_e=nt(I),ue=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,de=I.depthTexture.format===$i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(I.depthTexture.format===oi)_t(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ue,me,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,de,ue,me,0);else if(I.depthTexture.format===$i)_t(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ue,me,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,de,ue,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(G){let I=n.get(G),j=G.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==G.depthTexture){let ie=G.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),ie){let ce=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,ie.removeEventListener("dispose",ce)};ie.addEventListener("dispose",ce),I.__depthDisposeCallback=ce}I.__boundDepthTexture=ie}if(G.depthTexture&&!I.__autoAllocateDepthBuffer)if(j)for(let ie=0;ie<6;ie++)ge(I.__webglFramebuffer[ie],G,ie);else{let ie=G.texture.mipmaps;ie&&ie.length>0?ge(I.__webglFramebuffer[0],G,0):ge(I.__webglFramebuffer,G,0)}else if(j){I.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[ie]),I.__webglDepthbuffer[ie]===void 0)I.__webglDepthbuffer[ie]=i.createRenderbuffer(),se(I.__webglDepthbuffer[ie],G,!1);else{let ce=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=I.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,me)}}else{let ie=G.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),se(I.__webglDepthbuffer,G,!1);else{let ce=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(G,I,j){let ie=n.get(G);I!==void 0&&Y(ie.__webglFramebuffer,G,G.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Fe(G)}function Pe(G){let I=G.texture,j=n.get(G),ie=n.get(I);G.addEventListener("dispose",v);let ce=G.textures,me=G.isWebGLCubeRenderTarget===!0,_e=ce.length>1;if(_e||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=I.version,s.memory.textures++),me){j.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(I.mipmaps&&I.mipmaps.length>0){j.__webglFramebuffer[ue]=[];for(let de=0;de<I.mipmaps.length;de++)j.__webglFramebuffer[ue][de]=i.createFramebuffer()}else j.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){j.__webglFramebuffer=[];for(let ue=0;ue<I.mipmaps.length;ue++)j.__webglFramebuffer[ue]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(_e)for(let ue=0,de=ce.length;ue<de;ue++){let be=n.get(ce[ue]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),s.memory.textures++)}if(G.samples>0&&_t(G)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ue=0;ue<ce.length;ue++){let de=ce[ue];j.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[ue]);let be=o.convert(de.format,de.colorSpace),Ue=o.convert(de.type),Me=b(de.internalFormat,be,Ue,de.normalized,de.colorSpace,G.isXRRenderTarget===!0),ve=nt(G);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,Me,G.width,G.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,j.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),G.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),se(j.__webglDepthRenderbuffer,G,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),ee(i.TEXTURE_CUBE_MAP,I);for(let ue=0;ue<6;ue++)if(I.mipmaps&&I.mipmaps.length>0)for(let de=0;de<I.mipmaps.length;de++)Y(j.__webglFramebuffer[ue][de],G,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else Y(j.__webglFramebuffer[ue],G,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(I)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ue=0,de=ce.length;ue<de;ue++){let be=ce[ue],Ue=n.get(be),Me=i.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Me=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,Ue.__webglTexture),ee(Me,be),Y(j.__webglFramebuffer,G,be,i.COLOR_ATTACHMENT0+ue,Me,0),g(be)&&y(Me)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ue=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ie.__webglTexture),ee(ue,I),I.mipmaps&&I.mipmaps.length>0)for(let de=0;de<I.mipmaps.length;de++)Y(j.__webglFramebuffer[de],G,I,i.COLOR_ATTACHMENT0,ue,de);else Y(j.__webglFramebuffer,G,I,i.COLOR_ATTACHMENT0,ue,0);g(I)&&y(ue),t.unbindTexture()}G.depthBuffer&&Fe(G)}function We(G){let I=G.textures;for(let j=0,ie=I.length;j<ie;j++){let ce=I[j];if(g(ce)){let me=x(G),_e=n.get(ce).__webglTexture;t.bindTexture(me,_e),y(me),t.unbindTexture()}}}let at=[],Mt=[];function Vt(G){if(G.samples>0){if(_t(G)===!1){let I=G.textures,j=G.width,ie=G.height,ce=i.COLOR_BUFFER_BIT,me=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(G),ue=I.length>1;if(ue)for(let be=0;be<I.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let de=G.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let be=0;be<I.length;be++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[be]);let Ue=n.get(I[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,j,ie,0,0,j,ie,ce,i.NEAREST),l===!0&&(at.length=0,Mt.length=0,at.push(i.COLOR_ATTACHMENT0+be),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&(at.push(me),Mt.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let be=0;be<I.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,_e.__webglColorRenderbuffer[be]);let Ue=n.get(I[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&l){let I=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function nt(G){return Math.min(r.maxSamples,G.samples)}function _t(G){let I=n.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function q(G){let I=s.render.frame;u.get(G)!==I&&(u.set(G,I),G.update())}function Wt(G,I){let j=G.colorSpace,ie=G.format,ce=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||j!==qo&&j!==Si&&(ht.getTransfer(j)===xt?(ie!==Dn||ce!==En)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",j)),I}function bt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(c.width=G.naturalWidth||G.width,c.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(c.width=G.displayWidth,c.height=G.displayHeight):(c.width=G.width,c.height=G.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=R,this.getTextureUnits=T,this.setTextureUnits=P,this.setTexture2D=B,this.setTexture2DArray=L,this.setTexture3D=O,this.setTextureCube=U,this.rebindTextures=Ae,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $w(i,e){function t(n,r=Si){let o,s=ht.getTransfer(r);if(n===En)return i.UNSIGNED_BYTE;if(n===Bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_h)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ph)return i.BYTE;if(n===mh)return i.SHORT;if(n===mo)return i.UNSIGNED_SHORT;if(n===Nl)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===$n)return i.HALF_FLOAT;if(n===bh)return i.ALPHA;if(n===vh)return i.RGB;if(n===Dn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===yh)return i.RED;if(n===Ul)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===Vl)return i.RG_INTEGER;if(n===Gl)return i.RGBA_INTEGER;if(n===Ss||n===Ts||n===As||n===Es)if(s===xt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ss)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ts)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===As)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Es)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ss)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ts)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===As)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Es)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hl||n===Wl||n===Xl||n===Kl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Hl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl||n===ql||n===Zl||n===$l||n===Jl||n===Rs||n===jl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Yl||n===ql)return s===xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Zl)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===$l)return o.COMPRESSED_R11_EAC;if(n===Jl)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Rs)return o.COMPRESSED_RG11_EAC;if(n===jl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ql||n===ec||n===tc||n===nc||n===ic||n===rc||n===oc||n===sc||n===ac||n===lc||n===cc||n===uc||n===hc||n===dc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ql)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oc)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uc)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dc)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fc||n===pc||n===mc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===fc)return s===xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gc||n===_c||n===ks||n===bc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===gc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ks)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===go?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Jw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jw=`
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

}`,qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ns(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new hn({vertexShader:Jw,fragmentShader:jw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zh=class extends si{constructor(e,t){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new qh,g={},y=t.getContextAttributes(),x=null,b=null,w=[],M=[],E=new ke,v=null,S=null,A=new ln;A.viewport=new zt;let k=new ln;k.viewport=new zt;let F=[A,k],R=new Il,T=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let W=w[H];return W===void 0&&(W=new ao,w[H]=W),W.getTargetRaySpace()},this.getControllerGrip=function(H){let W=w[H];return W===void 0&&(W=new ao,w[H]=W),W.getGripSpace()},this.getHand=function(H){let W=w[H];return W===void 0&&(W=new ao,w[H]=W),W.getHandSpace()};function C(H){let W=M.indexOf(H.inputSource);if(W===-1)return;let oe=w[W];oe!==void 0&&(oe.update(H.inputSource,H.frame,c||s),oe.dispatchEvent({type:H.type,data:H.inputSource}))}function D(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",B);for(let H=0;H<w.length;H++){let W=M[H];W!==null&&(M[H]=null,w[H].disconnect(W))}T=null,P=null,m.reset();for(let H in g)delete g[H];if(e.setRenderTarget(x),f=null,d=null,h=null,r=null,b=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(E.width,E.height,!1),S!==null){let H=S.camera;H.fov=S.fov,H.zoom=S.zoom,H.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",D),r.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,le=null,Y=null;y.depth&&(Y=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?$i:oi,le=y.stencil?go:qn);let se={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:o};h=this.getBinding(),d=h.createProjectionLayer(se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new un(d.textureWidth,d.textureHeight,{format:Dn,type:En,depthTexture:new Gi(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new un(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(H){for(let W=0;W<H.removed.length;W++){let oe=H.removed[W],le=M.indexOf(oe);le>=0&&(M[le]=null,w[le].disconnect(oe))}for(let W=0;W<H.added.length;W++){let oe=H.added[W],le=M.indexOf(oe);if(le===-1){for(let se=0;se<w.length;se++)if(se>=M.length){M.push(oe),le=se;break}else if(M[se]===null){M[se]=oe,le=se;break}if(le===-1)break}let Y=w[le];Y&&Y.connect(oe)}}let L=new V,O=new V;function U(H,W,oe){L.setFromMatrixPosition(W.matrixWorld),O.setFromMatrixPosition(oe.matrixWorld);let le=L.distanceTo(O),Y=W.projectionMatrix.elements,se=oe.projectionMatrix.elements,ge=Y[14]/(Y[10]-1),Fe=Y[14]/(Y[10]+1),Ae=(Y[9]+1)/Y[5],Pe=(Y[9]-1)/Y[5],We=(Y[8]-1)/Y[0],at=(se[8]+1)/se[0],Mt=ge*We,Vt=ge*at,nt=le/(-We+at),_t=nt*-We;if(W.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(_t),H.translateZ(nt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Y[10]===-1)H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let q=ge+nt,Wt=Fe+nt,bt=Mt-_t,G=Vt+(le-_t),I=Ae*Fe/Wt*q,j=Pe*Fe/Wt*q;H.projectionMatrix.makePerspective(bt,G,I,j,q,Wt),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Z(H,W){W===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(W.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let W=H.near,oe=H.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),R.near=k.near=A.near=W,R.far=k.far=A.far=oe,(T!==R.near||P!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),T=R.near,P=R.far),R.layers.mask=H.layers.mask|6,A.layers.mask=R.layers.mask&-5,k.layers.mask=R.layers.mask&-3;let le=H.parent,Y=R.cameras;Z(R,le);for(let se=0;se<Y.length;se++)Z(Y[se],le);Y.length===2?U(R,A,k):R.projectionMatrix.copy(A.projectionMatrix),S===null&&H.isPerspectiveCamera&&(S={camera:H,fov:H.fov,zoom:H.zoom}),K(H,R,le)};function K(H,W,oe){oe===null?H.matrix.copy(W.matrixWorld):(H.matrix.copy(oe.matrixWorld),H.matrix.invert(),H.matrix.multiply(W.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=nl*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(H){return g[H]};let Q=null;function ee(H,W){if(u=W.getViewerPose(c||s),p=W,u!==null){let oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let le=!1;oe.length!==R.cameras.length&&(R.cameras.length=0,le=!0);for(let Fe=0;Fe<oe.length;Fe++){let Ae=oe[Fe],Pe=null;if(f!==null)Pe=f.getViewport(Ae);else{let at=h.getViewSubImage(d,Ae);Pe=at.viewport,Fe===0&&(e.setRenderTargetTextures(b,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(b))}let We=F[Fe];We===void 0&&(We=new ln,We.layers.enable(Fe),We.viewport=new zt,F[Fe]=We),We.matrix.fromArray(Ae.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ae.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Fe===0&&(R.matrix.copy(We.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),le===!0&&R.cameras.push(We)}let Y=r.enabledFeatures;if(Y&&Y.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let Fe=h.getDepthInformation(oe[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,r.renderState)}if(Y&&Y.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Fe=0;Fe<oe.length;Fe++){let Ae=oe[Fe].camera;if(Ae){let Pe=g[Ae];Pe||(Pe=new ns,g[Ae]=Pe);let We=h.getCameraImage(Ae);Pe.sourceTexture=We}}}}for(let oe=0;oe<w.length;oe++){let le=M[oe],Y=w[oe];le!==null&&Y!==void 0&&Y.update(le,W,c||s)}Q&&Q(H,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),p=null}let ae=new om;ae.setAnimationLoop(ee),this.setAnimationLoop=function(H){Q=H},this.dispose=function(){}}},Qw=new It,hm=new Qe;hm.set(-1,0,0,0,1,0,0,0,1);function e1(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Ah(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,y,x,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?o(m,g):g.isMeshLambertMaterial?(o(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(o(m,g),h(m,g)):g.isMeshPhongMaterial?(o(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(o(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,b)):g.isMeshMatcapMaterial?(o(m,g),p(m,g)):g.isMeshDepthMaterial?o(m,g):g.isMeshDistanceMaterial?(o(m,g),_(m,g)):g.isMeshNormalMaterial?o(m,g):g.isLineBasicMaterial?(s(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,x):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===nn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===nn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),x=y.envMap,b=y.envMapRotation;x&&(m.envMap.value=x,m.envMapRotation.value.setFromMatrix4(Qw.makeRotationFromEuler(b)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function s(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=x*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===nn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function t1(i,e,t,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let M=w.program;n.uniformBlockBinding(b,M)}function c(b,w){let M=r[b.id];M===void 0&&(m(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",y));let E=w.program;n.updateUBOMapping(b,E);let v=e.render.frame;o[b.id]!==v&&(d(b),o[b.id]=v)}function u(b){let w=h();b.__bindingPointIndex=w;let M=i.createBuffer(),E=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,E,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function h(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let w=r[b.id],M=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,S=M.length;v<S;v++){let A=M[v];if(Array.isArray(A))for(let k=0,F=A.length;k<F;k++)f(A[k],v,k,E);else f(A,v,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,w,M,E){if(_(b,w,M,E)===!0){let v=b.__offset,S=b.value;if(Array.isArray(S)){let A=0;for(let k=0;k<S.length;k++){let F=S[k],R=g(F);p(F,b.__data,A),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(A+=R.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(S,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function p(b,w,M){typeof b=="number"||typeof b=="boolean"?w[0]=b:b.isMatrix3?(w[0]=b.elements[0],w[1]=b.elements[1],w[2]=b.elements[2],w[3]=0,w[4]=b.elements[3],w[5]=b.elements[4],w[6]=b.elements[5],w[7]=0,w[8]=b.elements[6],w[9]=b.elements[7],w[10]=b.elements[8],w[11]=0):ArrayBuffer.isView(b)?w.set(new b.constructor(b.buffer,b.byteOffset,w.length)):b.toArray(w,M)}function _(b,w,M,E){let v=b.value,S=w+"_"+M;if(E[S]===void 0)return typeof v=="number"||typeof v=="boolean"?E[S]=v:ArrayBuffer.isView(v)?E[S]=v.slice():E[S]=v.clone(),!0;{let A=E[S];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return E[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function m(b){let w=b.uniforms,M=0,E=16;for(let S=0,A=w.length;S<A;S++){let k=Array.isArray(w[S])?w[S]:[w[S]];for(let F=0,R=k.length;F<R;F++){let T=k[F],P=Array.isArray(T.value)?T.value:[T.value];for(let C=0,D=P.length;C<D;C++){let B=P[C],L=g(B),O=M%E,U=O%L.boundary,Z=O+U;M+=U,Z!==0&&E-Z<L.storage&&(M+=E-Z),T.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,M+=L.storage}}}let v=M%E;return v>0&&(M+=E-v),b.__size=M,b.__cache={},this}function g(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",b),w}function y(b){let w=b.target;w.removeEventListener("dispose",y);let M=s.indexOf(w.__bindingPointIndex);s.splice(M,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete o[w.id]}function x(){for(let b in r)i.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:x}}var n1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function i1(){return hi===null&&(hi=new sl(n1,16,16,Ji,$n),hi.name="DFG_LUT",hi.minFilter=tn,hi.magFilter=tn,hi.wrapS=Tn,hi.wrapT=Tn,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var Mr=class{constructor(e={}){let{canvas:t=Ap(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=En}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let _=f,m=new Set([Gl,Vl,Ul]),g=new Set([En,qn,mo,go,Bl,Ol]),y=new Uint32Array(4),x=new Int32Array(4),b=new V,w=null,M=null,E=[],v=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,k=!1,F=null,R=null,T=null,P=null;this._outputColorSpace=Ot;let C=0,D=0,B=null,L=-1,O=null,U=new zt,Z=new zt,K=null,Q=new J(0),ee=0,ae=t.width,H=t.height,W=1,oe=null,le=null,Y=new zt(0,0,ae,H),se=new zt(0,0,ae,H),ge=!1,Fe=new es,Ae=!1,Pe=!1,We=new It,at=new V,Mt=new zt,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function _t(){return B===null?W:1}let q=n;function Wt(z,X){return t.getContext(z,X)}let bt,G,I,j,ie,ce,me,_e,ue,de,be,Ue,Me,ve,Ve,qe,tt,$,ye,he,xe,Re,fe;try{let z={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",On,!1),q===null){let X="webgl2";if(q=Wt(X,z),q===null)throw Wt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(z){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",On,!1),Ze("WebGLRenderer: "+z.message),z}function Xe(){bt=new ux(q),bt.init(),xe=new $w(q,bt),G=new ex(q,bt,e,xe),I=new qw(q,bt),G.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),R=q.createFramebuffer(),T=q.createFramebuffer(),P=q.createFramebuffer(),j=new fx(q),ie=new Lw,ce=new Zw(q,bt,I,ie,G,xe,j),me=new cx(A),_e=new mb(q),Re=new jy(q,_e),ue=new hx(q,_e,j,Re),de=new mx(q,ue,_e,Re,j),$=new px(q,G,ce),Ve=new tx(ie),be=new Fw(A,me,bt,G,Re,Ve),Ue=new e1(A,ie),Me=new zw,ve=new Gw(bt),tt=new Jy(A,me,I,de,p,l),qe=new Yw(A,de,G),fe=new t1(q,j,G,I),ye=new Qy(q,bt,j),he=new dx(q,bt,j),j.programs=be.programs,A.capabilities=G,A.extensions=bt,A.properties=ie,A.renderLists=Me,A.shadowMap=qe,A.state=I,A.info=j}_!==En&&(S=new _x(_,t.width,t.height,a,r,o));let ze=new Zh(A,q);this.xr=ze,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let z=bt.get("WEBGL_lose_context");z&&z.loseContext()},this.forceContextRestore=function(){let z=bt.get("WEBGL_lose_context");z&&z.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(z){z!==void 0&&(W=z,this.setSize(ae,H,!1))},this.getSize=function(z){return z.set(ae,H)},this.setSize=function(z,X,re=!0){if(ze.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=z,H=X,t.width=Math.floor(z*W),t.height=Math.floor(X*W),re===!0&&(t.style.width=z+"px",t.style.height=X+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,z,X)},this.getDrawingBufferSize=function(z){return z.set(ae*W,H*W).floor()},this.setDrawingBufferSize=function(z,X,re){ae=z,H=X,W=re,t.width=Math.floor(z*re),t.height=Math.floor(X*re),this.setViewport(0,0,z,X)},this.setEffects=function(z){if(_===En){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(z){for(let X=0;X<z.length;X++)if(z[X].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(z||[])},this.getCurrentViewport=function(z){return z.copy(U)},this.getViewport=function(z){return z.copy(Y)},this.setViewport=function(z,X,re,te){z.isVector4?Y.set(z.x,z.y,z.z,z.w):Y.set(z,X,re,te),I.viewport(U.copy(Y).multiplyScalar(W).round())},this.getScissor=function(z){return z.copy(se)},this.setScissor=function(z,X,re,te){z.isVector4?se.set(z.x,z.y,z.z,z.w):se.set(z,X,re,te),I.scissor(Z.copy(se).multiplyScalar(W).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(z){I.setScissorTest(ge=z)},this.setOpaqueSort=function(z){oe=z},this.setTransparentSort=function(z){le=z},this.getClearColor=function(z){return z.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(z=!0,X=!0,re=!0){let te=0;if(z){let ne=!1;if(B!==null){let Ee=B.texture.format;ne=m.has(Ee)}if(ne){let Ee=B.texture.type,Ie=g.has(Ee),Te=tt.getClearColor(),Le=tt.getClearAlpha(),Be=Te.r,it=Te.g,lt=Te.b;Ie?(y[0]=Be,y[1]=it,y[2]=lt,y[3]=Le,q.clearBufferuiv(q.COLOR,0,y)):(x[0]=Be,x[1]=it,x[2]=lt,x[3]=Le,q.clearBufferiv(q.COLOR,0,x))}else te|=q.COLOR_BUFFER_BIT}X&&(te|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(te|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&q.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(z){z.setRenderer(this),F=z},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",On,!1),tt.dispose(),Me.dispose(),ve.dispose(),ie.dispose(),me.dispose(),de.dispose(),Re.dispose(),fe.dispose(),be.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",nf),ze.removeEventListener("sessionend",rf),lr.stop()};function At(z){z.preventDefault(),Sh("WebGLRenderer: Context Lost."),k=!0}function vt(){Sh("WebGLRenderer: Context Restored."),k=!1;let z=j.autoReset,X=qe.enabled,re=qe.autoUpdate,te=qe.needsUpdate,ne=qe.type;Xe(),j.autoReset=z,qe.enabled=X,qe.autoUpdate=re,qe.needsUpdate=te,qe.type=ne}function On(z){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function ni(z){let X=z.target;X.removeEventListener("dispose",ni),Zg(X)}function Zg(z){$g(z),ie.remove(z)}function $g(z){let X=ie.get(z).programs;X!==void 0&&(X.forEach(function(re){be.releaseProgram(re)}),z.isShaderMaterial&&be.releaseShaderCache(z))}this.renderBufferDirect=function(z,X,re,te,ne,Ee){X===null&&(X=Vt);let Ie=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Te=Qg(z,X,re,te,ne);I.setMaterial(te,Ie);let Le=re.index,Be=1;if(te.wireframe===!0){if(Le=ue.getWireframeAttribute(re),Le===void 0)return;Be=2}let it=re.drawRange,lt=re.attributes.position,De=it.start*Be,yt=(it.start+it.count)*Be;Ee!==null&&(De=Math.max(De,Ee.start*Be),yt=Math.min(yt,(Ee.start+Ee.count)*Be)),Le!==null?(De=Math.max(De,0),yt=Math.min(yt,Le.count)):lt!=null&&(De=Math.max(De,0),yt=Math.min(yt,lt.count));let Gt=yt-De;if(Gt<0||Gt===1/0)return;Re.setup(ne,te,Te,re,Le);let kt,St=ye;if(Le!==null&&(kt=_e.get(Le),St=he,St.setIndex(kt)),ne.isMesh)te.wireframe===!0?(I.setLineWidth(te.wireframeLinewidth*_t()),St.setMode(q.LINES)):St.setMode(q.TRIANGLES);else if(ne.isLine){let on=te.linewidth;on===void 0&&(on=1),I.setLineWidth(on*_t()),ne.isLineSegments?St.setMode(q.LINES):ne.isLineLoop?St.setMode(q.LINE_LOOP):St.setMode(q.LINE_STRIP)}else ne.isPoints?St.setMode(q.POINTS):ne.isSprite&&St.setMode(q.TRIANGLES);if(ne.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))St.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let on=ne._multiDrawStarts,Ce=ne._multiDrawCounts,pn=ne._multiDrawCount,mt=Le?_e.get(Le).bytesPerElement:1,In=ie.get(te).currentProgram.getUniforms();for(let ii=0;ii<pn;ii++)In.setValue(q,"_gl_DrawID",ii),St.render(on[ii]/mt,Ce[ii])}else if(ne.isInstancedMesh)St.renderInstances(De,Gt,ne.count);else if(re.isInstancedBufferGeometry){let on=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ce=Math.min(re.instanceCount,on);St.renderInstances(De,Gt,Ce)}else St.render(De,Gt)};function tf(z,X,re,te){F!==null&&z.isNodeMaterial&&F.setObject(te,z),Ae===!0&&Ve.setState(z,re,!1),z.transparent===!0&&z.side===ct&&z.forceSinglePass===!1?(z.side=nn,z.needsUpdate=!0,pa(z,X,te),z.side=ci,z.needsUpdate=!0,pa(z,X,te),z.side=ct):pa(z,X,te)}this.compile=function(z,X,re=null){re===null&&(re=z),F!==null&&F.renderStart(z,X,re),M=ve.get(re),M.init(X),v.push(M),re.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(M.pushLight(ne),ne.castShadow&&M.pushShadow(ne))}),z!==re&&z.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(M.pushLight(ne),ne.castShadow&&M.pushShadow(ne))}),M.setupLights(),F!==null&&F.updateLights(M.state.lightsArray),Pe=this.localClippingEnabled,Ae=Ve.init(this.clippingPlanes,Pe),Ae===!0&&Ve.setGlobalState(this.clippingPlanes,X),F!==null&&qe.render(M.state.shadowsArray,re,X);let te=new Set;return z.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let Ee=ne.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){let Te=Ee[Ie];tf(Te,re,X,ne),te.add(Te)}else tf(Ee,re,X,ne),te.add(Ee)}),M=v.pop(),F!==null&&F.renderEnd(),te},this.compileAsync=function(z,X,re=null){let te=this.compile(z,X,re);return new Promise(ne=>{function Ee(){if(te.forEach(function(Ie){let Le=ie.get(Ie).currentProgram;(Le===void 0||Le.isReady())&&te.delete(Ie)}),te.size===0){ne(z);return}setTimeout(Ee,10)}bt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let gu=null;function Jg(z){gu&&gu(z)}function nf(){lr.stop()}function rf(){lr.start()}let lr=new om;lr.setAnimationLoop(Jg),typeof self<"u"&&lr.setContext(self),this.setAnimationLoop=function(z){gu=z,ze.setAnimationLoop(z),z===null?lr.stop():lr.start()},ze.addEventListener("sessionstart",nf),ze.addEventListener("sessionend",rf),this.render=function(z,X){if(X!==void 0&&X.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;F!==null&&F.renderStart(z,X);let re=ze.enabled===!0&&ze.isPresenting===!0,te=S!==null&&(B===null||re)&&S.begin(A,B);if(z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(X),X=ze.getCamera()),z.isScene===!0&&z.onBeforeRender(A,z,X,B),M=ve.get(z,v.length),M.init(X),M.state.textureUnits=ce.getTextureUnits(),v.push(M),We.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Fe.setFromProjectionMatrix(We,Hn,X.reversedDepth),Pe=this.localClippingEnabled,Ae=Ve.init(this.clippingPlanes,Pe),w=Me.get(z,E.length),w.init(),E.push(w),ze.enabled===!0&&ze.isPresenting===!0){let Ie=A.xr.getDepthSensingMesh();Ie!==null&&_u(Ie,X,-1/0,A.sortObjects)}_u(z,X,0,A.sortObjects),w.finish(),F!==null&&F.updateLights(M.state.lightsArray),A.sortObjects===!0&&w.sort(oe,le),nt=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,nt&&tt.addToRenderList(w,z),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ae===!0&&Ve.beginShadows();let ne=M.state.shadowsArray;if(qe.render(ne,z,X),Ae===!0&&Ve.endShadows(),(te&&S.hasRenderPass())===!1){let Ie=w.opaque,Te=w.transmissive;if(M.setupLights(),X.isArrayCamera){let Le=X.cameras;if(Te.length>0)for(let Be=0,it=Le.length;Be<it;Be++){let lt=Le[Be];sf(Ie,Te,z,lt)}nt&&tt.render(z);for(let Be=0,it=Le.length;Be<it;Be++){let lt=Le[Be];of(w,z,lt,lt.viewport)}}else Te.length>0&&sf(Ie,Te,z,X),nt&&tt.render(z),of(w,z,X)}B!==null&&D===0&&(ce.updateMultisampleRenderTarget(B),ce.updateRenderTargetMipmap(B)),te&&S.end(A),z.isScene===!0&&z.onAfterRender(A,z,X),Re.resetDefaultState(),L=-1,O=null,v.pop(),v.length>0?(M=v[v.length-1],ce.setTextureUnits(M.state.textureUnits),Ae===!0&&Ve.setGlobalState(A.clippingPlanes,M.state.camera)):M=null,E.pop(),E.length>0?w=E[E.length-1]:w=null,F!==null&&F.renderEnd()};function _u(z,X,re,te){if(z.visible===!1)return;if(z.layers.test(X.layers)){if(z.isGroup)re=z.renderOrder;else if(z.isLOD)z.autoUpdate===!0&&z.update(X);else if(z.isLightProbeGrid)M.pushLightProbeGrid(z);else if(z.isLight)M.pushLight(z),z.castShadow&&M.pushShadow(z);else if(z.isSprite){if(!z.frustumCulled||z.intersectsFrustum(Fe)){te&&Mt.setFromMatrixPosition(z.matrixWorld).applyMatrix4(We);let Ie=de.update(z),Te=z.material;Te.visible&&w.push(z,Ie,Te,re,Mt.z,null,X)}}else if((z.isMesh||z.isLine||z.isPoints)&&(!z.frustumCulled||z.intersectsFrustum(Fe))){let Ie=de.update(z),Te=z.material;if(te&&(z.boundingSphere!==void 0?(z.boundingSphere===null&&z.computeBoundingSphere(),Mt.copy(z.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Mt.copy(Ie.boundingSphere.center)),Mt.applyMatrix4(z.matrixWorld).applyMatrix4(We)),Array.isArray(Te)){let Le=Ie.groups;for(let Be=0,it=Le.length;Be<it;Be++){let lt=Le[Be],De=Te[lt.materialIndex];De&&De.visible&&w.push(z,Ie,De,re,Mt.z,lt,X)}}else Te.visible&&w.push(z,Ie,Te,re,Mt.z,null,X)}}let Ee=z.children;for(let Ie=0,Te=Ee.length;Ie<Te;Ie++)_u(Ee[Ie],X,re,te)}function of(z,X,re,te){let{opaque:ne,transmissive:Ee,transparent:Ie}=z;M.setupLightsView(re),Ae===!0&&Ve.setGlobalState(A.clippingPlanes,re),te&&I.viewport(U.copy(te)),ne.length>0&&fa(ne,X,re),Ee.length>0&&fa(Ee,X,re),Ie.length>0&&fa(Ie,X,re),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function sf(z,X,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[te.id]===void 0){let De=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[te.id]=new un(1,1,{generateMipmaps:!0,type:De?$n:En,minFilter:Zi,samples:Math.max(4,G.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Ee=M.state.transmissionRenderTarget[te.id],Ie=te.viewport||U;Ee.setSize(Ie.z*A.transmissionResolutionScale,Ie.w*A.transmissionResolutionScale);let Te=A.getRenderTarget(),Le=A.getActiveCubeFace(),Be=A.getActiveMipmapLevel();A.setRenderTarget(Ee),A.getClearColor(Q),ee=A.getClearAlpha(),ee<1&&A.setClearColor(16777215,.5),A.clear(),nt&&tt.render(re);let it=A.toneMapping;A.toneMapping=Yn;let lt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),M.setupLightsView(te),Ae===!0&&Ve.setGlobalState(A.clippingPlanes,te),fa(z,re,te),ce.updateMultisampleRenderTarget(Ee),ce.updateRenderTargetMipmap(Ee),bt.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let yt=0,Gt=X.length;yt<Gt;yt++){let kt=X[yt],{object:St,geometry:on,material:Ce,group:pn}=kt;if(Ce.side===ct&&St.layers.test(te.layers)){let mt=Ce.side;Ce.side=nn,Ce.needsUpdate=!0,af(St,re,te,on,Ce,pn),Ce.side=mt,Ce.needsUpdate=!0,De=!0}}De===!0&&(ce.updateMultisampleRenderTarget(Ee),ce.updateRenderTargetMipmap(Ee))}A.setRenderTarget(Te,Le,Be),A.setClearColor(Q,ee),lt!==void 0&&(te.viewport=lt),A.toneMapping=it}function fa(z,X,re){let te=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,Ee=z.length;ne<Ee;ne++){let Ie=z[ne],{object:Te,geometry:Le,group:Be}=Ie,it=Ie.material;it.allowOverride===!0&&te!==null&&(it=te),Te.layers.test(re.layers)&&af(Te,X,re,Le,it,Be)}}function af(z,X,re,te,ne,Ee){F!==null&&ne.isNodeMaterial&&F.setObject(z,ne),z.onBeforeRender(A,X,re,te,ne,Ee),z.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),ne.onBeforeRender(A,X,re,te,z,Ee),ne.transparent===!0&&ne.side===ct&&ne.forceSinglePass===!1?(ne.side=nn,ne.needsUpdate=!0,A.renderBufferDirect(re,X,te,ne,z,Ee),ne.side=ci,ne.needsUpdate=!0,A.renderBufferDirect(re,X,te,ne,z,Ee),ne.side=ct):A.renderBufferDirect(re,X,te,ne,z,Ee),z.onAfterRender(A,X,re,te,ne,Ee)}function pa(z,X,re){X.isScene!==!0&&(X=Vt);let te=ie.get(z),ne=M.state.lights,Ee=M.state.shadowsArray,Ie=ne.state.version,Te=be.getParameters(z,ne.state,Ee,X,re,M.state.lightProbeGridArray),Le=be.getProgramCacheKey(Te),Be=te.programs;te.environment=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;let it=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap;te.envMap=me.get(z.envMap||te.environment,it),te.envMapRotation=te.environment!==null&&z.envMap===null?X.environmentRotation:z.envMapRotation,Be===void 0&&(z.addEventListener("dispose",ni),Be=new Map,te.programs=Be);let lt=Be.get(Le);if(lt!==void 0){if(te.currentProgram===lt&&te.lightsStateVersion===Ie)return cf(z,Te),lt}else Te.uniforms=be.getUniforms(z),F!==null&&z.isNodeMaterial&&F.build(z,re,Te),z.onBeforeCompile(Te,A),lt=be.acquireProgram(Te,Le),Be.set(Le,lt),te.uniforms=Te.uniforms;let De=te.uniforms;return(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)&&(De.clippingPlanes=Ve.uniform),cf(z,Te),te.needsLights=t_(z),te.lightsStateVersion=Ie,te.needsLights&&(De.ambientLightColor.value=ne.state.ambient,De.lightProbe.value=ne.state.probe,De.sunLights.value=ne.state.sun,De.sunLightShadows.value=ne.state.sunShadow,De.directionalLights.value=ne.state.directional,De.directionalLightShadows.value=ne.state.directionalShadow,De.spotLights.value=ne.state.spot,De.spotLightShadows.value=ne.state.spotShadow,De.rectAreaLights.value=ne.state.rectArea,De.ltc_1.value=ne.state.rectAreaLTC1,De.ltc_2.value=ne.state.rectAreaLTC2,De.pointLights.value=ne.state.point,De.pointLightShadows.value=ne.state.pointShadow,De.hemisphereLights.value=ne.state.hemi,De.sunShadowMatrix.value=ne.state.sunShadowMatrix,De.sunShadowCascade.value=ne.state.sunShadowCascade,De.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,De.spotLightMatrix.value=ne.state.spotLightMatrix,De.spotLightMap.value=ne.state.spotLightMap,De.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=M.state.lightProbeGridArray.length>0,te.currentProgram=lt,te.uniformsList=null,lt}function lf(z){if(z.uniformsList===null){let X=z.currentProgram.getUniforms();z.uniformsList=vo.seqWithValue(X.seq,z.uniforms)}return z.uniformsList}function cf(z,X){let re=ie.get(z);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function jg(z,X){if(z.length===0)return null;if(z.length===1)return z[0].texture!==null?z[0]:null;b.setFromMatrixPosition(X.matrixWorld);for(let re=0,te=z.length;re<te;re++){let ne=z[re];if(ne.texture!==null&&ne.boundingBox.containsPoint(b))return ne}return null}function Qg(z,X,re,te,ne){X.isScene!==!0&&(X=Vt),ce.resetTextureUnits();let Ee=X.fog,Ie=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,Te=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ht.workingColorSpace,Le=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Be=me.get(te.envMap||Ie,Le),it=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,lt=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),De=!!re.morphAttributes.position,yt=!!re.morphAttributes.normal,Gt=!!re.morphAttributes.color,kt=Yn;te.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(kt=A.toneMapping);let St=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,on=St!==void 0?St.length:0,Ce=ie.get(te),pn=M.state.lights;if(Ae===!0&&(Pe===!0||z!==O)){let Et=z===O&&te.id===L;Ve.setState(te,z,Et)}let mt=!1;te.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==pn.state.version||Ce.outputColorSpace!==Te||ne.isBatchedMesh&&Ce.batching===!1||!ne.isBatchedMesh&&Ce.batching===!0||ne.isBatchedMesh&&Ce.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&Ce.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&Ce.instancing===!1||!ne.isInstancedMesh&&Ce.instancing===!0||ne.isSkinnedMesh&&Ce.skinning===!1||!ne.isSkinnedMesh&&Ce.skinning===!0||ne.isInstancedMesh&&Ce.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ce.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ce.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ce.instancingMorph===!1&&ne.morphTexture!==null||Ce.envMap!==Be||te.fog===!0&&Ce.fog!==Ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ve.numPlanes||Ce.numIntersection!==Ve.numIntersection)||Ce.vertexAlphas!==it||Ce.vertexTangents!==lt||Ce.morphTargets!==De||Ce.morphNormals!==yt||Ce.morphColors!==Gt||Ce.toneMapping!==kt||Ce.morphTargetsCount!==on||!!Ce.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Ce.__version=te.version);let In=Ce.currentProgram;mt===!0&&(In=pa(te,X,ne),F&&te.isNodeMaterial&&F.onUpdateProgram(te,In,Ce));let ii=!1,Ii=!1,Or=!1,wt=In.getUniforms(),Bt=Ce.uniforms;if(I.useProgram(In.program)&&(ii=!0,Ii=!0,Or=!0),te.id!==L&&(L=te.id,Ii=!0),Ce.needsLights){let Et=jg(M.state.lightProbeGridArray,ne);Ce.lightProbeGrid!==Et&&(Ce.lightProbeGrid=Et,Ii=!0)}if(ii||O!==z){I.buffers.depth.getReversed()&&z.reversedDepth!==!0&&(z._reversedDepth=!0,z.updateProjectionMatrix()),wt.setValue(q,"projectionMatrix",z.projectionMatrix),wt.setValue(q,"viewMatrix",z.matrixWorldInverse);let Li=wt.map.cameraPosition;Li!==void 0&&Li.setValue(q,at.setFromMatrixPosition(z.matrixWorld)),G.logarithmicDepthBuffer&&wt.setValue(q,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&wt.setValue(q,"isOrthographic",z.isOrthographicCamera===!0),O!==z&&(O=z,Ii=!0,Or=!0)}if(Ce.needsLights&&(pn.state.sunShadowMap.length>0&&wt.setValue(q,"sunShadowMap",pn.state.sunShadowMap,ce),pn.state.directionalShadowMap.length>0&&wt.setValue(q,"directionalShadowMap",pn.state.directionalShadowMap,ce),pn.state.spotShadowMap.length>0&&wt.setValue(q,"spotShadowMap",pn.state.spotShadowMap,ce),pn.state.pointShadowMap.length>0&&wt.setValue(q,"pointShadowMap",pn.state.pointShadowMap,ce)),ne.isSkinnedMesh){wt.setOptional(q,ne,"bindMatrix"),wt.setOptional(q,ne,"bindMatrixInverse");let Et=ne.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),wt.setValue(q,"boneTexture",Et.boneTexture,ce))}ne.isBatchedMesh&&(wt.setOptional(q,ne,"batchingTexture"),wt.setValue(q,"batchingTexture",ne._matricesTexture,ce),wt.setOptional(q,ne,"batchingIdTexture"),wt.setValue(q,"batchingIdTexture",ne._indirectTexture,ce),wt.setOptional(q,ne,"batchingColorTexture"),ne._colorsTexture!==null&&wt.setValue(q,"batchingColorTexture",ne._colorsTexture,ce));let Fi=re.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&$.update(ne,re,In),(Ii||Ce.receiveShadow!==ne.receiveShadow)&&(Ce.receiveShadow=ne.receiveShadow,wt.setValue(q,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&(Bt.envMapIntensity.value=X.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=i1()),Ii){if(wt.setValue(q,"toneMappingExposure",A.toneMappingExposure),Ce.needsLights&&e_(Bt,Or),Ee&&te.fog===!0&&Ue.refreshFogUniforms(Bt,Ee),Ue.refreshMaterialUniforms(Bt,te,W,H,M.state.transmissionRenderTarget[z.id]),Ce.needsLights&&Ce.lightProbeGrid){let Et=Ce.lightProbeGrid;Bt.probesSH.value=Et.texture,Bt.probesMin.value.copy(Et.boundingBox.min),Bt.probesMax.value.copy(Et.boundingBox.max),Bt.probesResolution.value.copy(Et.resolution)}vo.upload(q,lf(Ce),Bt,ce)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(vo.upload(q,lf(Ce),Bt,ce),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&wt.setValue(q,"center",ne.center),wt.setValue(q,"modelViewMatrix",ne.modelViewMatrix),wt.setValue(q,"normalMatrix",ne.normalMatrix),wt.setValue(q,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){let Et=te.uniformsGroups;for(let Li=0,Ur=Et.length;Li<Ur;Li++){let hf=Et[Li];fe.update(hf,In),fe.bind(hf,In)}}return In}function e_(z,X){z.ambientLightColor.needsUpdate=X,z.lightProbe.needsUpdate=X,z.sunLights.needsUpdate=X,z.sunLightShadows.needsUpdate=X,z.directionalLights.needsUpdate=X,z.directionalLightShadows.needsUpdate=X,z.pointLights.needsUpdate=X,z.pointLightShadows.needsUpdate=X,z.spotLights.needsUpdate=X,z.spotLightShadows.needsUpdate=X,z.rectAreaLights.needsUpdate=X,z.hemisphereLights.needsUpdate=X}function t_(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(z,X,re){let te=ie.get(z);te.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ie.get(z.texture).__webglTexture=X,ie.get(z.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,X){let re=ie.get(z);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(z,X=0,re=0){B=z,C=X,D=re;let te=null,ne=!1,Ee=!1;if(z){let Te=ie.get(z);if(Te.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(q.FRAMEBUFFER,Te.__webglFramebuffer),U.copy(z.viewport),Z.copy(z.scissor),K=z.scissorTest,I.viewport(U),I.scissor(Z),I.setScissorTest(K),L=-1;return}else if(Te.__webglFramebuffer===void 0)ce.setupRenderTarget(z);else if(Te.__hasExternalTextures)ce.rebindTextures(z,ie.get(z.texture).__webglTexture,ie.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let it=z.depthTexture;if(Te.__boundDepthTexture!==it){if(it!==null&&ie.has(it)&&(z.width!==it.image.width||z.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(z)}}let Le=z.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ee=!0);let Be=ie.get(z).__webglFramebuffer;z.isWebGLCubeRenderTarget?(Array.isArray(Be[X])?te=Be[X][re]:te=Be[X],ne=!0):z.samples>0&&ce.useMultisampledRTT(z)===!1?te=ie.get(z).__webglMultisampledFramebuffer:Array.isArray(Be)?te=Be[re]:te=Be,U.copy(z.viewport),Z.copy(z.scissor),K=z.scissorTest}else U.copy(Y).multiplyScalar(W).floor(),Z.copy(se).multiplyScalar(W).floor(),K=ge;if(re!==0&&(te=R),I.bindFramebuffer(q.FRAMEBUFFER,te)&&I.drawBuffers(z,te),I.viewport(U),I.scissor(Z),I.setScissorTest(K),ne){let Te=ie.get(z.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,Te.__webglTexture,re)}else if(Ee){let Te=X;for(let Le=0;Le<z.textures.length;Le++){let Be=ie.get(z.textures[Le]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Le,Be.__webglTexture,re,Te)}}else if(z!==null&&re!==0){let Te=ie.get(z.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Te.__webglTexture,re)}L=-1};function uf(z){let X=ie.get(z);return(X.__readFormat!==z.format||X.__readType!==z.type)&&(X.__readFormat=z.format,X.__readType=z.type,X.__formatReadable=G.textureFormatReadable(z.format),X.__typeReadable=G.textureTypeReadable(z.type)),X}this.readRenderTargetPixels=function(z,X,re,te,ne,Ee,Ie,Te=0){if(!(z&&z.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ie.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le){I.bindFramebuffer(q.FRAMEBUFFER,Le);try{let Be=z.textures[Te],it=Be.format,lt=Be.type;z.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Te);let De=uf(Be);if(De.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=z.width-te&&re>=0&&re<=z.height-ne&&q.readPixels(X,re,te,ne,xe.convert(it),xe.convert(lt),Ee)}finally{let Be=B!==null?ie.get(B).__webglFramebuffer:null;I.bindFramebuffer(q.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(z,X,re,te,ne,Ee,Ie,Te=0){if(!(z&&z.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=ie.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le)if(X>=0&&X<=z.width-te&&re>=0&&re<=z.height-ne){I.bindFramebuffer(q.FRAMEBUFFER,Le);let Be=z.textures[Te],it=Be.format,lt=Be.type;z.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Te);let De=uf(Be);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,yt),q.bufferData(q.PIXEL_PACK_BUFFER,Ee.byteLength,q.STREAM_READ),q.readPixels(X,re,te,ne,xe.convert(it),xe.convert(lt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Gt=B!==null?ie.get(B).__webglFramebuffer:null;I.bindFramebuffer(q.FRAMEBUFFER,Gt);let kt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Rp(q,kt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,yt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ee),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(yt),q.deleteSync(kt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,X=null,re=0){let te=Math.pow(2,-re),ne=Math.floor(z.image.width*te),Ee=Math.floor(z.image.height*te),Ie=X!==null?X.x:0,Te=X!==null?X.y:0;ce.setTexture2D(z,0),q.copyTexSubImage2D(q.TEXTURE_2D,re,0,0,Ie,Te,ne,Ee),I.unbindTexture()},this.copyTextureToTexture=function(z,X,re=null,te=null,ne=0,Ee=0){let Ie,Te,Le,Be,it,lt,De,yt,Gt,kt=z.isCompressedTexture?z.mipmaps[Ee]:z.image;if(re!==null)Ie=re.max.x-re.min.x,Te=re.max.y-re.min.y,Le=re.isBox3?re.max.z-re.min.z:1,Be=re.min.x,it=re.min.y,lt=re.isBox3?re.min.z:0;else{let Bt=Math.pow(2,-ne);Ie=Math.floor(kt.width*Bt),Te=Math.floor(kt.height*Bt),z.isDataArrayTexture?Le=kt.depth:z.isData3DTexture?Le=Math.floor(kt.depth*Bt):Le=1,Be=0,it=0,lt=0}te!==null?(De=te.x,yt=te.y,Gt=te.z):(De=0,yt=0,Gt=0);let St=xe.convert(X.format),on=xe.convert(X.type),Ce;X.isData3DTexture?(ce.setTexture3D(X,0),Ce=q.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ce.setTexture2DArray(X,0),Ce=q.TEXTURE_2D_ARRAY):(ce.setTexture2D(X,0),Ce=q.TEXTURE_2D),I.activeTexture(q.TEXTURE0),I.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);let pn=I.getParameter(q.UNPACK_ROW_LENGTH),mt=I.getParameter(q.UNPACK_IMAGE_HEIGHT),In=I.getParameter(q.UNPACK_SKIP_PIXELS),ii=I.getParameter(q.UNPACK_SKIP_ROWS),Ii=I.getParameter(q.UNPACK_SKIP_IMAGES);I.pixelStorei(q.UNPACK_ROW_LENGTH,kt.width),I.pixelStorei(q.UNPACK_IMAGE_HEIGHT,kt.height),I.pixelStorei(q.UNPACK_SKIP_PIXELS,Be),I.pixelStorei(q.UNPACK_SKIP_ROWS,it),I.pixelStorei(q.UNPACK_SKIP_IMAGES,lt);let Or=z.isDataArrayTexture||z.isData3DTexture,wt=X.isDataArrayTexture||X.isData3DTexture;if(z.isDepthTexture){let Bt=ie.get(z),Fi=ie.get(X),Et=ie.get(Bt.__renderTarget),Li=ie.get(Fi.__renderTarget);I.bindFramebuffer(q.READ_FRAMEBUFFER,Et.__webglFramebuffer),I.bindFramebuffer(q.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ur=0;Ur<Le;Ur++)Or&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ie.get(z).__webglTexture,ne,lt+Ur),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ie.get(X).__webglTexture,Ee,Gt+Ur)),q.blitFramebuffer(Be,it,Ie,Te,De,yt,Ie,Te,q.DEPTH_BUFFER_BIT,q.NEAREST);I.bindFramebuffer(q.READ_FRAMEBUFFER,null),I.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ne!==0||z.isRenderTargetTexture||ie.has(z)){let Bt=ie.get(z),Fi=ie.get(X);I.bindFramebuffer(q.READ_FRAMEBUFFER,T),I.bindFramebuffer(q.DRAW_FRAMEBUFFER,P);for(let Et=0;Et<Le;Et++)Or?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Bt.__webglTexture,ne,lt+Et):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Bt.__webglTexture,ne),wt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Fi.__webglTexture,Ee,Gt+Et):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Fi.__webglTexture,Ee),ne!==0?q.blitFramebuffer(Be,it,Ie,Te,De,yt,Ie,Te,q.COLOR_BUFFER_BIT,q.NEAREST):wt?q.copyTexSubImage3D(Ce,Ee,De,yt,Gt+Et,Be,it,Ie,Te):q.copyTexSubImage2D(Ce,Ee,De,yt,Be,it,Ie,Te);I.bindFramebuffer(q.READ_FRAMEBUFFER,null),I.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else wt?z.isDataTexture||z.isData3DTexture?q.texSubImage3D(Ce,Ee,De,yt,Gt,Ie,Te,Le,St,on,kt.data):X.isCompressedArrayTexture?q.compressedTexSubImage3D(Ce,Ee,De,yt,Gt,Ie,Te,Le,St,kt.data):q.texSubImage3D(Ce,Ee,De,yt,Gt,Ie,Te,Le,St,on,kt):z.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ee,De,yt,Ie,Te,St,on,kt.data):z.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ee,De,yt,kt.width,kt.height,St,kt.data):q.texSubImage2D(q.TEXTURE_2D,Ee,De,yt,Ie,Te,St,on,kt);I.pixelStorei(q.UNPACK_ROW_LENGTH,pn),I.pixelStorei(q.UNPACK_IMAGE_HEIGHT,mt),I.pixelStorei(q.UNPACK_SKIP_PIXELS,In),I.pixelStorei(q.UNPACK_SKIP_ROWS,ii),I.pixelStorei(q.UNPACK_SKIP_IMAGES,Ii),Ee===0&&X.generateMipmaps&&q.generateMipmap(Ce),I.unbindTexture()},this.initRenderTarget=function(z){ie.get(z).__webglFramebuffer===void 0&&ce.setupRenderTarget(z)},this.initTexture=function(z){z.isCubeTexture?ce.setTextureCube(z,0):z.isData3DTexture?ce.setTexture3D(z,0):z.isDataArrayTexture||z.isCompressedArrayTexture?ce.setTexture2DArray(z,0):ce.setTexture2D(z,0),I.unbindTexture()},this.resetState=function(){C=0,D=0,B=null,I.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};function Ec(i,e=0){let t=(i.rotation??0)*Math.PI/180,n=Math.cos(t),r=Math.sin(t),o=xo(i,e+i.h/2);return[0,i.h].flatMap(s=>[[-i.w/2,-i.d/2],[i.w/2,-i.d/2],[i.w/2,i.d/2],[-i.w/2,i.d/2]].map(([a,l])=>o(i.x+a*n-l*r,e+s,i.z+a*r+l*n)))}function dm(i){let e=Ec({...i,x:0,z:0}).map(([r,,o])=>[r,o]).sort((r,o)=>r[0]-o[0]||r[1]-o[1]),t=(r,o,s)=>(o[0]-r[0])*(s[1]-r[1])-(o[1]-r[1])*(s[0]-r[0]),n=r=>{let o=[];for(let s of r){for(;o.length>1&&t(o[o.length-2],o[o.length-1],s)<=1e-10;)o.pop();o.push(s)}return o.slice(0,-1)};return[...n(e),...n([...e].reverse())].map(([r,o])=>[r+i.x,o+i.z])}function xo(i,e){let t=(i.rotation_x??0)*Math.PI/180,n=(i.rotation_z??0)*Math.PI/180;if(!t&&!n)return(h,d,f)=>[h,d,f];let r=(i.rotation??0)*Math.PI/180,o=Math.cos(r),s=Math.sin(r),a=Math.cos(t),l=Math.sin(t),c=Math.cos(n),u=Math.sin(n);return(h,d,f)=>{let p=h-i.x,_=f-i.z,m=p*o+_*s,g=d-e,y=-p*s+_*o,x=g*a-y*l,b=g*l+y*a,w=m*c-x*u,M=m*u+x*c;return[i.x+w*o-b*s,e+M,i.z+w*s+b*o]}}function Rn(i,e,t,n){if(!t.rotation_x&&!t.rotation_z)return;let r=xo(t,n);for(let o=e;o<i.length;o+=3){let[s,a,l]=r(i[o],i[o+1],i[o+2]);i[o]=s,i[o+1]=a,i[o+2]=l}}function fm(i){let e=i.length/3,t=new Float32Array(e);for(let n=0;n<e;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(t[n]=r)}return t}function pm(i,e,t,n){for(let r=t.start*3;r<t.end*3;r++){let o=e[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}function mm(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var r1=[],Rc=new Map,o1=0,gm=!1;function _m(i){gm=i}function s1(i){let e=gt(i)?.product?.base??i;return[...Rc.entries()].filter(([,t])=>t.product?.base===e).map(([t,n])=>({type:t,item:n}))}function Sr(i){let e=gt(i.type);if(!e)return;let t=e.product?.base??i.type;if(!gm)return gt(t)??e;let n=s1(i.type);return n.find(r=>r.type===i.product_variant)?.item??(e.product?e:n.find(r=>r.item.product?.default)?.item??e)}function Ls(i){r1=i,Rc=new Map(i.flatMap(e=>e.items.map(t=>[a1(e.id,t.id),t]))),o1++}function a1(i,e){return`pack:${i}:${e}`}function l1(i){return i.startsWith("pack:")}var c1={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function $h(i){return gt(i)?.parts.find(e=>e.screen)}function gt(i){if(!l1(i))return;let e=Rc.get(i);if(e)return e;let[,t,...n]=i.split(":"),r=c1[t];return r?Rc.get(`pack:${r}:${n.join(":")}`):void 0}function Rt(i,e){let t=gt(e.type),n=xn(i,e.x,e.z);if(e.mount_y!=null)return n+e.mount_y;if(e.type==="lamp_wall")return n+kc;if(bm.has(e.type))return Math.max(n,wo(i,e.x,e.z)-vm(e.type,e.h));if(e.type==="led_strip")return wo(i,e.x,e.z)-.04-Math.max(.02,e.h);switch(t?.mount){case"surface":return ym(i,e.x,e.z);case"wall":return n+(t.wall_y??1);case"ceiling":return wo(i,e.x,e.z)-e.h;default:return n+(t?0:Mo(e))}}var So={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,gravel_bed:.03,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function fi(i){return i==="hedge"||i==="fence"||i==="pergola"}function h1(i,e,t){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of i.points){let h=o(c,u);s=Math.min(s,h),a=Math.max(a,h)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(a-s)));return n*l}function d1(i,e,t,n){return Tr(i,e)+So[e.type]-Ds(i,e,t,n)}var Jh=-.2,Pc={set:!1,level:Jh};function xm(i){let e=i?.settings.terrain??null;Pc={set:e?.level!=null,level:e?.level??Jh}}function Cc(i,e){return Pc.level}function wm(i){return i.elevation>.3?0:Pc.set?Pc.level-i.elevation:Jh}function Tr(i,e){return wm(i)+(e.offset??0)}function Ds(i,e,t,n){return e.type==="pool"?0:h1(e,t,n)}function Mm(i,e,t){let n=(i.outdoor??[]).filter(o=>!fi(o.type)&&o.type!=="pool"&&Oe([e,t],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?d1(i,r,e,t):wm(i)}function Ic(i,e){return Tr(i,e)+(e.above?Tm(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function f1(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?Tm(i):1.5}function jh(i,e){return e.above?!1:(i.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!fi(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>Oe(n,t.points)))}function Sm(i,e){return!e.above&&!jh(i,e)?Fc(i,e)-.05:Ic(i,e)-f1(e)}function Fc(i,e){return Ic(i,e)-.15}function Tm(i){return i.height&&i.height>.3?i.height:1.2}var p1={type:"none",pitch:35,overhang:.4},OE={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...p1}};var Am=.3;var Em=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),kc=1.75;var bm=new Set(["lamp_downlight","lamp_spot"]);function vm(i,e){return i==="lamp_spot"?Math.max(.06,e)+.008:.02}var Rm=new Set(["stairs","stairs_u"]);function km(i,e,t){let n=Math.max(4,Math.round(t/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,e*.45),u=(e-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:u,rise:t/n}}function Pm(i){return Em.has(i)||!!gt(i)?.light}var Qh=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Mo(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function ym(i,e,t){let n=xn(i,e,t);for(let r of i.furniture)!(Qh.has(r.type)||gt(r.type)?.surface)||!Oe([e,t],Qi(r))||(n=Math.max(n,xn(i,r.x,r.z)+(r.mount_y??0)+r.h));return n}var u1=new Set([...Em,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var m1=["interior","front","front_glass","front_slot","sidelight","sidelights","glass","sliding","sliding_glass","sliding_wood","passage"],g1=["standard","bars","glass_wall"];function Ar(i,e){return i.type==="door"?i.style&&m1.includes(i.style)?i.style:e?"front":"interior":i.style&&g1.includes(i.style)?i.style:"standard"}function Cm(i,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=o-.5;if(l+c>u){let d=Math.max(0,u)/(l+c);l*=d,c*=d}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Im(i){return i==="front"||i==="front_glass"||i==="front_slot"||i==="sidelight"||i==="sidelights"}function kn(i){let e=0;for(let t=0;t<i.length;t++){let[n,r]=i[t],[o,s]=i[(t+1)%i.length];e+=n*s-o*r}return e/2}function Ti(i){return Math.abs(kn(i))}function ji(i){let e=kn(i);if(Math.abs(e)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let t=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;t+=(o+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Fm(i){if(i.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=i[e],[r,o]=i[(e+1)%4];if(Math.abs(t-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function Lm(i){let e=1/0,t=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)e=Math.min(e,o),t=Math.min(t,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:e,z0:t,x1:n,z1:r}}function Qi(i){if(i.rotation_x||i.rotation_z)return dm(i);let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*t-a*n,i.z+s*n+a*t])}function Oe(i,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,s]=e[n],[a,l]=e[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(t=!t)}return t}function ft(i,e){return ed(i,e)+(e?.floor_offset??0)}function ed(i,e){return e?.wall_offset??(e?.elevation??i.elevation)-i.elevation}function zn(i,e){return e?.ceiling_height??e?.height??i.height}function zs(i,e,t){return i.rooms.find(n=>Oe([e,t],n.points))}function xn(i,e,t){return ft(i,zs(i,e,t))}function wo(i,e,t){let n=zs(i,e,t);return ft(i,n)+zn(i,n)}function qt(i){let e=i.rooms.filter(t=>t.points.length>=3);return e.length?Math.max(...e.map(t=>i.elevation+ft(i,t)+zn(i,t))):i.elevation+i.height}var Qt=(i,e)=>[i[0]-e[0],i[1]-e[1]],er=(i,e)=>[i[0]+e[0],i[1]+e[1]],Ai=(i,e)=>[i[0]*e,i[1]*e],Bs=(i,e)=>i[0]*e[0]+i[1]*e[1],To=(i,e)=>i[0]*e[1]-i[1]*e[0],Ns=i=>Math.hypot(i[0],i[1]),pi=i=>{let e=Ns(i)||1;return[i[0]/e,i[1]/e]},Dm=i=>[-i[1],i[0]],zm=i=>[i[1],-i[0]];function Ei(i,e,t=[]){let n=e.eps??.005,r=[],o=t.filter(v=>Math.hypot(v.b[0]-v.a[0],v.b[1]-v.a[1])>.05),s=[],a=v=>{for(let S=0;S<s.length;S++)if(Math.abs(s[S][0]-v[0])<=n&&Math.abs(s[S][1]-v[1])<=n)return S;return s.push([v[0],v[1]]),s.length-1},l=[];for(let v of i){let S=v.points;if(S.length<3||Math.abs(kn(S))<1e-6)continue;let A=kn(S)>0,k=S.map(a);for(let F=0;F<S.length;F++){let R=k[F],T=k[(F+1)%S.length];R!==T&&l.push(A?{u:R,v:T,room:v.id,edge:F,forward:!0}:{u:T,v:R,room:v.id,edge:F,forward:!1})}}let c=o.map(v=>[a(v.a),a(v.b)]),u=new Set;for(let v of i){let S=v.points;S.length<3||(v.wall_splits??[]).forEach((A,k)=>{if(!A||k>=S.length)return;let F=S[k],R=Qt(S[(k+1)%S.length],F),T=Ns(R);for(let P of A)P>n&&P<T-n&&u.add(a(er(F,Ai(R,P/T))))})}let h=[];for(let v of l){let S=s[v.u],A=s[v.v],k=Qt(A,S),F=Ns(k),R=Ai(k,1/F),T=[];for(let C=0;C<s.length;C++){if(C===v.u||C===v.v)continue;let D=Qt(s[C],S),B=Bs(D,R);B<=n||B>=F-n||Math.abs(To(R,D))<=n&&T.push({t:B,id:C})}T.sort((C,D)=>C.t-D.t);let P=[{t:0,id:v.u},...T,{t:F,id:v.v}];for(let C=0;C+1<P.length;C++){let D=P[C],B=P[C+1],L=v.forward?D.t:F-B.t,O=v.forward?B.t:F-D.t;h.push({u:D.id,v:B.id,room:v.room,edge:v.edge,t0:L,t1:O})}}let d=new Map;for(let v of h){let S=v.u<v.v?`${v.u}-${v.v}`:`${v.v}-${v.u}`,A=d.get(S);A||d.set(S,A=[]),A.push(v)}let f=v=>({room_id:v.room,edge:v.edge,t0:v.t0,t1:v.t1}),p=new Map;for(let v of h){let S=`${v.room}:${v.edge}`;p.set(S,[...p.get(S)??[],v.t0].sort((A,k)=>A-k))}let _=v=>{let S=i.find(k=>k.id===v.room)?.wall_heights?.[v.edge];if(!Array.isArray(S))return S;let A=p.get(`${v.room}:${v.edge}`)??[];return S[A.indexOf(v.t0)]??null},m=v=>{let S=v.map(_).filter(k=>typeof k=="number"&&k>0);if(S.length)return Math.min(...S);let A=v.map(k=>i.find(F=>F.id===k.room)?.ceiling_height);return A.every(k=>typeof k=="number"&&k>0)?Math.max(...A):void 0},g=v=>{let S=v.map(A=>i.find(k=>k.id===A.room)?.wall_thickness?.[A.edge]).filter(A=>typeof A=="number"&&A>0);return S.length?Math.max(...S):void 0},y=v=>v.some(S=>_(S)===0),x=[],b=[];for(let v of d.values()){let S=v[0],A=v.find(k=>k!==S&&k.u===S.v&&k.v===S.u&&k.room!==S.room);for(let k of v)k!==S&&k!==A&&k.room!==S.room&&r.push(`overlap:${S.room}:${k.room}`);if(y(A?[S,A]:[S])){A&&x.push([S.room,A.room]);continue}if(A){let k=g([S,A])??e.interior;b.push({a:S.u,b:S.v,left:k/2,right:k/2,exterior:!1,roomLeft:S.room,roomRight:A.room,sources:[f(S),f(A)],height:m([S,A])})}else b.push({a:S.u,b:S.v,left:0,right:g([S])??e.exterior,exterior:!0,roomLeft:S.room,roomRight:null,sources:[f(S)],height:m([S])})}let w=v=>pi(Qt(s[v.b],s[v.a]));for(let v of b){if(v.exterior||v.free)continue;let S=new Set;for(let k of[v.a,v.b])for(let F of b)!F.exterior||F.free||F.a!==k&&F.b!==k||Math.abs(To(w(v),w(F)))>1e-6||(F.roomLeft===v.roomLeft?S.add("left"):F.roomLeft===v.roomRight&&S.add("right"));if(S.size!==1)continue;let A=v.left+v.right;S.has("left")?(v.left=0,v.right=A):(v.left=A,v.right=0)}o.forEach((v,S)=>{let[A,k]=c[S];if(A===k)return;let F=[(v.a[0]+v.b[0])/2,(v.a[1]+v.b[1])/2],R=i.find(C=>C.points.length>=3&&Oe(F,C.points))?.id??null,T=(v.thickness??e.interior)/2,P=typeof v.height=="number"&&v.height>0?v.height:void 0;b.push({free:v.id,a:A,b:k,left:T,right:T,exterior:!1,roomLeft:R,roomRight:R,sources:[],height:P})}),b=b1(b,s,u);let M=y1(b,s);return{walls:b.map((v,S)=>{let A=s[v.a],k=s[v.b],F=M.get(`${S}:a`),R=M.get(`${S}:b`),T=x1([F.right,R.left,k,R.right,F.left,A],1e-6);return{id:_1(A,k),a:[A[0],A[1]],b:[k[0],k[1]],left:v.left,right:v.right,exterior:v.exterior,roomLeft:v.roomLeft,roomRight:v.roomRight,sources:v.sources,footprint:T,...v.free?{free:v.free}:{},...v.height!==void 0?{height:v.height}:{}}}),warnings:[...new Set(r)],open:x}}function _1(i,e){let t=o=>Math.round(o*100),[n,r]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function Nm(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function b1(i,e,t=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=Nm(l)),c.a!==s&&(c=Nm(c)),l.a===c.b)continue;let u=pi(Qt(e[l.b],e[l.a])),h=pi(Qt(e[c.b],e[c.a]));if(Math.abs(To(u,h))>1e-6||Bs(u,h)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let d={...l,b:c.b,sources:v1(l.sources,c.sources)},f=n.filter((p,_)=>_!==a[0]&&_!==a[1]);f.push(d),n.length=0,n.push(...f),r=!0;break}}return n}function v1(i,e){let t=i.map(n=>({...n}));for(let n of e){let r=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function y1(i,e){let t=new Map;i.forEach((r,o)=>{let s=pi(Qt(e[r.b],e[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:Ai(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let u=t.get(l);u||t.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,o]of t){let s=e[r];o.sort((c,u)=>c.angle-u.angle);let a=c=>({left:er(s,Ai(Dm(c.d),c.left)),right:er(s,Ai(zm(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let u=o[c],h=o[(c+1)%o.length],d=er(s,Ai(Dm(u.d),u.left)),f=er(s,Ai(zm(h.d),h.right)),p=To(u.d,h.d);if(Math.abs(p)<1e-4)continue;let _=To(Qt(f,d),h.d)/p,m=er(d,Ai(u.d,_));Ns(Qt(m,s))>l||(n.get(u.key).left=m,n.get(h.key).right=m)}}return n}function x1(i,e){let t=i.filter((r,o)=>Ns(Qt(r,i[(o+1)%i.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let o=t[(r+t.length-1)%t.length],s=t[r],a=t[(r+1)%t.length],l=Qt(s,o),c=Qt(a,s);if(Math.abs(To(pi(l),pi(c)))<1e-7&&Bs(l,c)>0){t=t.filter((u,h)=>h!==r),n=!0;break}}}return t}function td(i,e,t){let n=i.points[e],r=i.points[(e+1)%i.points.length],o=pi(Qt(r,n));return er(n,Ai(o,t))}function Er(i,e,t){if(i.wall){let r=t.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=pi(Qt(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,er(r.a,[-o[1],o[0]])]},edge:0}}let n=e.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Rr(i,e,t){if(!e.wall)return w1(i,t.room,t.edge,e.offset);let n=i.find(o=>o.free===e.wall);if(!n)return null;let r=td(t.room,0,e.offset);return{wall:n,s:Bs(Qt(r,n.a),pi(Qt(n.b,n.a)))}}function w1(i,e,t,n){for(let r of i){if(!r.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=td(e,t,n);return{wall:r,s:Bs(Qt(s,r.a),pi(Qt(r.b,r.a)))}}return null}var Pn=(i,e,t)=>(e[0]-i[0])*(t[1]-i[1])-(e[1]-i[1])*(t[0]-i[0]);function gn(i){return i.reduce((e,t,n)=>{let r=i[(n+1)%i.length];return e+t[0]*r[1]-r[0]*t[1]},0)/2}var Os=(i,e,t)=>Math.abs(Pn(e,t,i))<1e-8&&i[0]>=Math.min(e[0],t[0])-1e-8&&i[0]<=Math.max(e[0],t[0])+1e-8&&i[1]>=Math.min(e[1],t[1])-1e-8&&i[1]<=Math.max(e[1],t[1])+1e-8;function Ao(i,e){let t=!1;for(let n=0,r=i.length-1;n<i.length;r=n++){let o=i[r],s=i[n];if(Os(e,o,s))return!0;o[1]>e[1]!=s[1]>e[1]&&e[0]<(s[0]-o[0])*(e[1]-o[1])/(s[1]-o[1])+o[0]&&(t=!t)}return t}function Bm(i){if(i.length<3||i.length>200||!i.every(e=>e.every(Number.isFinite))||Math.abs(gn(i))<.05)return!1;for(let e=0;e<i.length;e++){let t=i[e],n=i[(e+1)%i.length];if(Math.hypot(t[0]-n[0],t[1]-n[1])<1e-8)return!1;let r=i[(e+2)%i.length];if(Math.abs(Pn(t,n,r))<1e-8&&(n[0]-t[0])*(r[0]-n[0])+(n[1]-t[1])*(r[1]-n[1])<0)return!1;for(let o=e+2;o<i.length;o++){if((o+1)%i.length===e)continue;let s=i[o],a=i[(o+1)%i.length];if(Pn(t,n,s)*Pn(t,n,a)<0&&Pn(s,a,t)*Pn(s,a,n)<0||Os(t,s,a)||Os(n,s,a)||Os(s,t,n)||Os(a,t,n))return!1}}return!0}function Nn(i){let e=i.map((r,o)=>o);gn(i)<0&&e.reverse();let t=[],n=i.length*i.length;for(;e.length>3&&n-- >0;){let r=!1;for(let o=0;o<e.length;o++){let s=e[(o+e.length-1)%e.length],a=e[o],l=e[(o+1)%e.length],c=Pn(i[s],i[a],i[l]);if(Math.abs(c)<1e-8){e.splice(o,1),r=!0;break}if(!(c<0||e.some(u=>u!==s&&u!==a&&u!==l&&Pn(i[s],i[a],i[u])>=-1e-8&&Pn(i[a],i[l],i[u])>=-1e-8&&Pn(i[l],i[s],i[u])>=-1e-8))){t.push([s,a,l]),e.splice(o,1),r=!0;break}}if(!r)return[]}return e.length===3&&Math.abs(Pn(i[e[0]],i[e[1]],i[e[2]]))>1e-8&&t.push([...e]),t}function Us(i,e){let t=i,n=gn(e)<0?-1:1;for(let r=0;r<e.length&&t.length;r++){let o=e[r],s=e[(r+1)%e.length],a=t;t=[];for(let l=0;l<a.length;l++){let c=a[l],u=a[(l+1)%a.length],h=n*Pn(o,s,c),d=n*Pn(o,s,u);if(h>=-1e-8&&t.push(c),h>=-1e-8!=d>=-1e-8){let f=h/(h-d);t.push([c[0]+(u[0]-c[0])*f,c[1]+(u[1]-c[1])*f,c[2]+(u[2]-c[2])*f])}}}return t.filter((r,o)=>{let s=t[(o+1)%t.length];return Math.hypot(r[0]-s[0],r[1]-s[1])>1e-8})}function Lc(i,e,t){let n=[0,1],r=t[0]-e[0],o=t[1]-e[1];for(let a=0;a<i.length;a++){let l=i[a],c=i[(a+1)%i.length],u=c[0]-l[0],h=c[1]-l[1],d=r*h-o*u;if(Math.abs(d)<1e-8)continue;let f=((l[0]-e[0])*h-(l[1]-e[1])*u)/d,p=((l[0]-e[0])*o-(l[1]-e[1])*r)/d;f>1e-8&&f<1-1e-8&&p>=-1e-8&&p<=1+1e-8&&n.push(f)}n.sort((a,l)=>a-l);let s=[];for(let a=1;a<n.length;a++){let l=n[a-1],c=n[a],u=(l+c)/2;c-l>1e-8&&Ao(i,[e[0]+r*u,e[1]+o*u])&&s.push([l,c])}return s}function nd(i,e){return e.every((t,n)=>Ao(i,t)&&Lc(i,t,e[(n+1)%e.length]).reduce((r,[o,s])=>r+s-o,0)>1-1e-8)}var Gs=Math.PI/180;function Jn(i){let e=Math.min(i.x0,i.x1),t=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:e,u1:t,w:r-n,at:(o,s)=>[o,i.flip?r-s:n+s]}:{u0:n,u1:r,w:t-e,at:(o,s)=>[i.flip?t-s:e+s,o]}}function Cn(i){let e=Jn(i).w,t=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Gs),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Gs);if(i.shape==="flat"||i.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(i.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(i.shape==="mansard"){let l=Hm(e,t,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(r+o))):e/2,a=t+s*r;return{vr:s,rh:a,y:l=>l<=s?t+l*r:n+(e-l)*o}}var M1=.14;function Um(i,e){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<e-.05}function Vm(i,e,t){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let o of i.settings.roof.sections??[]){if(o.open)continue;let s=Math.min(o.x0,o.x1),a=Math.max(o.x0,o.x1),l=Math.min(o.z0,o.z1),c=Math.max(o.z0,o.z1);if(e<s-1e-6||e>a+1e-6||t<l-1e-6||t>c+1e-6||o.points&&o.points.length>=3&&!Oe([e,t],o.points))continue;let[u,h]=tr(o,e,t),d=o.shape==="flat"||o.shape==="parapet",f=Math.max(0,o.overhang??r),_=((d?null:Ro(nr(o,{u0:f,u1:f,a:f,b:f}),u,h))??Cn(o).y(h))-M1;n=n===null?_:Math.max(n,_)}return n}function Dc(i,e){let t=i.length;if(t<3||Math.abs(e)<1e-9)return i.map(o=>[o[0],o[1]]);let n=kn(i)>=0?1:-1,r=[];for(let o=0;o<t;o++){let s=i[(o+t-1)%t],a=i[o],l=i[(o+1)%t],c=Om([a[0]-s[0],a[1]-s[1]]),u=Om([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],d=[u[1]*n,-u[0]*n],f=h[0]+d[0],p=h[1]+d[1],_=Math.hypot(f,p);if(_<1e-6){r.push([a[0]+h[0]*e,a[1]+h[1]*e]);continue}let m=(f*h[0]+p*h[1])/_,g=Math.min(4,1/Math.max(.25,m));r.push([a[0]+f/_*e*g,a[1]+p/_*e*g])}return r}function Om(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function Hs(i,e){if(i.points&&i.points.length>=3)return Dc(i.points,e);let t=Math.min(i.x0,i.x1)-e,n=Math.max(i.x0,i.x1)+e,r=Math.min(i.z0,i.z1)-e,o=Math.max(i.z0,i.z1)+e;return[[t,r],[n,r],[n,o],[t,o]]}function Gm(i,e,t,n){let r=Ei(i,{exterior:t,interior:n},e).walls.filter(h=>h.exterior&&!h.free);if(!r.length)return null;let o=h=>`${Math.round(h[0]*1e3)}:${Math.round(h[1]*1e3)}`,s=new Map,a=r.map(h=>({a:h.a,b:h.b}));for(let h of a)for(let d of[h.a,h.b])s.set(o(d),[...s.get(o(d))??[],h]);let l=new Set,c=null;for(let h of a){if(l.has(h))continue;l.add(h);let d=[h.a,h.b],f=h.b;for(;;){let p=(s.get(o(f))??[]).find(_=>!l.has(_));if(!p||(l.add(p),f=o(p.a)===o(f)?p.b:p.a,o(f)===o(d[0])))break;d.push(f)}d.length>=3&&o(f)===o(d[0])&&(!c||Math.abs(Ti(d))>Math.abs(Ti(c)))&&(c=d)}if(!c)return null;let u=[];for(let h=0;h<c.length;h++){let d=c[(h+c.length-1)%c.length],f=c[h],p=c[(h+1)%c.length],_=(f[0]-d[0])*(p[1]-f[1])-(f[1]-d[1])*(p[0]-f[0]);Math.abs(_)>1e-6&&u.push(f)}return u.length>=3?Dc(u,t):null}var Vs=Math.tan(30*Gs);function Hm(i,e,t,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=e+o*n,l=t+s*r,c=Math.min(i-s,Math.max(o,(l-a+Vs*(i-s+o))/(2*Vs))),u=a+(c-o)*Vs;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:d=>d<=o?e+d*n:d<=c?a+(d-o)*Vs:d<=i-s?l+(i-s-d)*Vs:t+(i-d)*r}}function nr(i,e){let t=S1(i,e);if(!i.points||i.points.length<3)return t;let n=Hs(i,Math.max(0,Math.min(e.u0,e.u1,e.a,e.b))).map(([c,u])=>tr(i,c,u)),r=Nn(n),o=t.faces.flatMap(c=>r.map(u=>Us(c,u.map(h=>n[h])))).filter(c=>c.length>=3&&Math.abs(gn(c))>1e-8),s=(c,u,h)=>[c[0]+(u[0]-c[0])*h,c[1]+(u[1]-c[1])*h,c[2]+(u[2]-c[2])*h],a=t.ridges.flatMap(([c,u])=>Lc(n,c,u).map(([h,d])=>[s(c,u,h),s(c,u,d)])),l=[];return n.forEach((c,u)=>{let h=n[(u+1)%n.length],d=[0,...t.faces.flatMap(f=>Lc(f.map(([p,_])=>[p,_]),c,h).flat())].filter(f=>f<1-1e-8).sort((f,p)=>f-p);for(let f=0;f<d.length;f++){if(f&&d[f]-d[f-1]<1e-8)continue;let p=d[f],_=c[0]+(h[0]-c[0])*p,m=c[1]+(h[1]-c[1])*p;l.push([_,m,Ro(t,_,m)??Cn(i).y(m)])}}),{faces:o,rim:l,ridges:a,gable:null}}function S1(i,e){let t=Jn(i),n=Cn(i),r=t.w,o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(y,x)=>[y,x,n.y(x)],u=c(a,-o),h=c(l,-o),d=c(l,r+s),f=c(a,r+s),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Gs),_=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Gs);if(i.shape==="pent"){let y=[u,h,d,f];return{faces:[y],rim:y,ridges:[[d,f]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let y=i.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,r-n.vr)||r/2),x=[t.u0+y,n.vr,n.rh],b=[t.u1-y,n.vr,n.rh],w=i.shape==="pyramid"?[[u,h,x],[h,d,x],[d,f,x],[f,u,x]]:[[u,h,b,x],[x,b,d,f],[f,u,x],[h,d,b]],M=i.shape==="pyramid"?[[u,x],[f,x],[h,x],[d,x]]:[[x,b],[u,x],[f,x],[h,b],[d,b]];return{faces:w,rim:[u,h,d,f],ridges:M,gable:null}}if(i.shape==="halfhip"){let y=Math.min(n.y(0),n.y(r)),x=y+(n.rh-y)*.55,b=p>1e-6?Math.min(n.vr,(x-i.eave_a)/p):n.vr,w=_>1e-6?Math.max(n.vr,r-(x-i.eave_b)/_):n.vr,M=Math.min((t.u1-t.u0)/2-.1,(n.rh-x)/Math.max(.2,p)),E=[t.u0+M,n.vr,n.rh],v=[t.u1-M,n.vr,n.rh],S=[a,b,x],A=[a,w,x],k=[l,b,x],F=[l,w,x];return{faces:[[u,h,k,v,E,S],[E,v,F,d,f,A],[A,S,E],[k,F,v]],rim:[u,h,k,F,d,f,A,S],ridges:[[E,v],[S,E],[A,E],[k,v],[F,v]],gable:[[0,n.y(0)],[b,x],[w,x],[r,n.y(r)]]}}if(i.shape==="mansard"){let y=Hm(r,i.eave_a,i.eave_b,p,_),x=[a,y.vla,y.yla],b=[l,y.vla,y.yla],w=[a,r-y.vlb,y.ylb],M=[l,r-y.vlb,y.ylb],E=[a,y.vr,y.rh],v=[l,y.vr,y.rh];return{faces:[[u,h,b,x],[x,b,v,E],[E,v,M,w],[w,M,d,f]],rim:[u,h,b,v,M,d,f,w,E,x],ridges:[[E,v],[x,b],[w,M]],gable:[[0,n.y(0)],[y.vla,y.yla],[y.vr,y.rh],[r-y.vlb,y.ylb],[r,n.y(r)]]}}let m=[a,n.vr,n.rh],g=[l,n.vr,n.rh];return{faces:[[u,h,g,m],[m,g,d,f]],rim:[u,h,g,d,f,m],ridges:[[m,g]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function Ro(i,e,t){let n=null;for(let r of i.faces){if(!Ao(r.map(y=>[y[0],y[1]]),[e,t]))continue;let[o,s]=r,a=r.slice(2).find(y=>Math.abs((s[0]-o[0])*(y[1]-o[1])-(s[1]-o[1])*(y[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],u=s[1]-o[1],h=a[0]-o[0],d=a[2]-o[2],f=a[1]-o[1],p=c*f-u*d,_=u*h-l*f,m=l*d-c*h;if(Math.abs(_)<1e-9)continue;let g=o[2]-(p*(e-o[0])+m*(t-o[1]))/_;n=n===null?g:Math.min(n,g)}return n}function tr(i,e,t){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),o=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?[e,i.flip?s-t:t-o]:[t,i.flip?r-e:e-n]}function T1(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function zc(i,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(e)*1.5)continue;let a=T1(s);t<a.x0||t>a.x1||n<a.z0||n>a.z1||(!o||r(s)<r(o))&&(o=s)}return o}function id(i,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=Jn(e),n=Cn(e).rh,r=nr(i,{u0:0,u1:0,a:0,b:0}),o=Cn(i),s=p=>{let[_,m]=t.at(p,t.w/2),[g,y]=tr(i,_,m);return Ro(r,g,y)??o.y(y)},a=s(t.u0)<=s(t.u1),l=a?t.u0:t.u1,c=a?t.u1:t.u0,u=a?1:-1,h=Math.abs(c-l),d=c;for(let p=.5;p<h;p+=.05)if(s(l+u*p)>=n-.02){d=l+u*p;break}if(Math.abs(d-c)<.05)return e;let f={...e};return e.axis==="x"?c===t.u1?f.x1=d:f.x0=d:c===t.u1?f.z1=d:f.z0=d,f}function Wm(i,e){let t=id(i,e),n=Jn(t),r=Cn(t),o=nr(i,{u0:0,u1:0,a:0,b:0}),s=Cn(i),a=d=>{let[f,p]=n.at(d,n.w/2),[_,m]=tr(i,f,p);return Ro(o,_,m)??s.y(m)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],h=Math.max(1,Math.ceil(c/.15));for(let d=0;d<h;d++){let f=c*d/h,p=c*(d+1)/h,_=l?n.u0+f:n.u1-f,m=l?n.u0+p:n.u1-p,g=a(m),y=1/0,x=-1/0;for(let v=0;v<=40;v++){let S=n.w*v/40;r.y(S)>g+.02&&(y=Math.min(y,S),x=Math.max(x,S))}if(!(x-y>.05))continue;let b=n.at(_,y),w=n.at(m,x),M=tr(i,b[0],b[1]),E=tr(i,w[0],w[1]);u.push({u0:Math.min(M[0],E[0]),u1:Math.max(M[0],E[0]),v0:Math.min(M[1],E[1]),v1:Math.max(M[1],E[1])})}return u}function Eo(i,e,t,n){let r=s=>n?s[e]<=t+1e-9:s[e]>=t-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),u=r(l);if(c&&o.push(a),c!==u){let h=(t-a[e])/(l[e]-a[e]);o.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return o}function Xm(i,e){let t=Eo(i,0,e.u0,!0),n=Eo(i,0,e.u1,!1),r=Eo(Eo(i,0,e.u0,!1),0,e.u1,!0),o=Eo(r,1,e.v0,!0),s=Eo(r,1,e.v1,!1);return[t,n,o,s].filter(a=>a.length>=3&&Math.abs(Ti(a.map(l=>[l[0],l[1]])))>1e-6)}function Nc(i,e,t){let n=Jn(e),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>e.base+.05)),o=c=>c.some(u=>r.some(h=>Oe(u,h.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:t,b:o(a.map(c=>n.at(c,n.w+s)))?0:t,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:t,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:t}}function Km(i,e){let t=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}function A1(i){return Cn(i).rh}function Ym(i,e,t){let n=i.settings.roof.sections??[],r=n.filter(l=>t.includes(l.id)).map(l=>zc(n,l)??l);if(!r.length)return e.id;let o=Math.max(...r.map(l=>A1(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(u=>{let[h,d]=c.points.reduce((f,p)=>[f[0]+p[0]/c.points.length,f[1]+p[1]/c.points.length],[0,0]);return h>=Math.min(u.x0,u.x1)&&h<=Math.max(u.x0,u.x1)&&d>=Math.min(u.z0,u.z1)&&d<=Math.max(u.z0,u.z1)}));return i.floors.filter(l=>l.elevation>=e.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??e.id}function fn(i,e){let t=[e.roomLeft,e.roomRight].map(n=>i.rooms.find(r=>r.id===n)).filter(n=>!!n);return t.length?{bottom:Math.min(...t.map(n=>ed(i,n))),top:Math.max(...t.map(n=>ft(i,n)+Math.min(zn(i,n),e.height??1/0)))}:{bottom:0,top:Math.min(i.height,e.height??i.height)}}function Ws(i,e,t){let n=Er(e,i.rooms,i.walls??[]),r=n&&Rr(t,e,n);if(!n||!r)return null;let o=r.wall,s=Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1]);if(s<1e-6)return null;let a=[(o.b[0]-o.a[0])/s,(o.b[1]-o.a[1])/s],l=o.roomLeft===n.room.id,c=i.rooms.find(U=>U.id===n.room.id||o.free&&U.id===o.roomLeft)??n.room,u=o.free?void 0:i.rooms.find(U=>U.id===(l?o.roomRight:o.roomLeft)),h=l?[-a[1],a[0]]:[a[1],-a[0]],d=Math.min(e.width,s),f=Math.max(0,Math.min(s-d,r.s-d/2)),p=[o.a[0]+a[0]*f,o.a[1]+a[1]*f],_=ft(i,c),m=u?ft(i,u):_,g=Math.min(_,m),y=Math.max(_,m),x={opening:e,room:c,other:u,wall:o,start:p,axis:a,toRoom:h,width:d,low:g,high:y,threshold:e.type==="window"?_:y,ceiling:Math.min(_+zn(i,c),u?m+zn(i,u):1/0)};if((c.wall_offset!=null||c.floor_offset!=null)&&(x.threshold=_),_+e.sill+e.height>x.ceiling+.001&&(x.issue="height"),!e.steps||!u||y-g<.001||e.type==="window")return x;let b=e.steps.side==="room",w=b?c:u,M=b?h:[-h[0],-h[1]],E=ft(i,w),v=E===y,S=b?l?o.left:o.right:l?o.right:o.left,A=e.steps.depth,k=e.steps.count,F=e.steps.offset??0,R=S+F,T=S-o.left-o.right;if(x.issue=x.issue??"fit",!Number.isFinite(A)||A<.1||A>10||!Number.isInteger(k)||k<1||k>30||!Number.isFinite(F)||Math.abs(F)>10||R+A<S+.01)return x;let P=(U,Z)=>[p[0]+a[0]*U+M[0]*Z,p[1]+a[1]*U+M[1]*Z],C=F<0?R:-.005,D=[P(0,C),P(d,C),P(d,R+A),P(0,R+A)],B=[P(.01,Math.min(S,R)+.01),P(d-.01,Math.min(S,R)+.01),P(d-.01,R+A-.01),P(.01,R+A-.01)],L=[P(-.001,T-.001),P(d+.001,T-.001),P(d+.001,S+.001),P(-.001,S+.001)],O=F<0?[c.points,u.points,L]:[w.points];return B.every((U,Z)=>O.some(K=>Oe(U,K))&&rd(U,B[(Z+1)%B.length],O).length===0)&&(x.threshold=b?m:_,x.stair={room:w,toward:M,face:R,wallFace:S,back:T,offset:F,count:k,depth:A,recess:v,bay:D},x.issue=_+e.sill+e.height>x.ceiling+.001?"height":void 0),x}function Bc(i,e,t){return t.filter(n=>n.stair&&Math.abs(ft(i,e)-n.high)<1e-6&&(n.room.id===e.id||n.other?.id===e.id)&&(n.stair.recess||n.stair.offset<0)).map(n=>n.stair.bay)}function qm(i){let e=i.stair;if(!e||e.offset>=0)return i.threshold;let t=i.threshold;for(let n=0;n<e.count;n++){let r=e.face+e.depth*n/e.count;if(e.face+e.depth*(n+1)/e.count<=e.back||r>=e.wallFace)continue;let s=e.recess?i.low+(i.high-i.low)*(n+1)/e.count:i.high-(i.high-i.low)*n/e.count;t=Math.min(t,s)}return t}function ko(i,e){let t=s=>s.reduce((a,l,c)=>{let u=s[(c+1)%s.length];return a+l[0]*u[1]-u[0]*l[1]},0),n=t(e)>=0?1:-1,r=[],o=i;for(let s=0;s<e.length&&o.length>=3;s++){let a=e[s],l=e[(s+1)%e.length],c=f=>n*((l[0]-a[0])*(f[1]-a[1])-(l[1]-a[1])*(f[0]-a[0])),u=f=>{let p=[];return o.forEach((_,m)=>{let g=o[(m+1)%o.length],y=f*c(_),x=f*c(g);if(y>=-1e-9&&p.push(_),y>=-1e-9!=x>=-1e-9){let b=y/(y-x);p.push([_[0]+(g[0]-_[0])*b,_[1]+(g[1]-_[1])*b])}}),p},h=u(-1),d=u(1);h.length>=3&&Math.abs(t(h))>1e-8&&r.push(h),o=d}return r}function rd(i,e,t){let n=[0,1],r=e[0]-i[0],o=e[1]-i[1];for(let l of t)l.forEach((c,u)=>{let h=l[(u+1)%l.length],d=h[0]-c[0],f=h[1]-c[1],p=r*f-o*d;if(Math.abs(p)<1e-9)return;let _=((c[0]-i[0])*f-(c[1]-i[1])*d)/p,m=((c[0]-i[0])*o-(c[1]-i[1])*r)/p;_>0&&_<1&&m>=0&&m<=1&&n.push(_)});n.sort((l,c)=>l-c);let s=l=>[i[0]+r*l,i[1]+o*l],a=[];for(let l=1;l<n.length;l++)n[l]-n[l-1]>1e-9&&!t.some(c=>Oe(s((n[l]+n[l-1])/2),c))&&a.push([s(n[l-1]),s(n[l])]);return a}function Po(i,e){let t=kn(e)>0?1:-1,n=[...i];for(let r=0;r<e.length&&n.length;r++){let o=e[r],s=e[(r+1)%e.length],a=c=>t*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let u=l[c],h=l[(c+1)%l.length],d=a(u),f=a(h);if(d>=0&&n.push(u),d>=0!=f>=0){let p=d/(d-f);n.push([u[0]+(h[0]-u[0])*p,u[1]+(h[1]-u[1])*p])}}}return n}function Zm(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length],o=i[(t+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(e&&Math.sign(s)!==e)return!1;e=Math.sign(s)}}return!0}var jn=Ge(3662079,.95),od=Ge(3662079,1),mi=Ge(5995775,.34),Uc=Ge(5995775,.22),Oc=[-.55,.83],$e=-1,Vc=16,kr=32,$m=48,Xs=64,Je=class{p=[];c=[];f=[];uv;tile;constructor(e=!1,t=!1){this.uv=e?[]:null,this.tile=t?[]:null}tri(e,t,n,r,o=r,s=r,a,l=$e,c=[0,1]){this.p.push(...e,...t,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let e=new Ke;return e.setAttribute("position",new we(this.p,3)),e.setAttribute("color",new we(this.c,3)),e.setAttribute("fold",new we(this.f,1)),this.uv&&e.setAttribute("uv",new we(this.uv,2)),this.tile&&e.setAttribute("tile",new we(this.tile,2)),e.computeBoundingSphere(),e}},Ft=class{p=[];c=[];f=[];seg(e,t,n=jn,r=$e){this.p.push(...e,...t),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(e,t,n,r,o){let[s,a]=e[1]<=t[1]?[e,t]:[t,e];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,$e);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,$e),this.seg(c,a,n,o)}geometry(){let e=new Ke;return e.setAttribute("position",new we(this.p,3)),e.setAttribute("color",new we(this.c,3)),e.setAttribute("fold",new we(this.f,1)),e}};function Gc(i,e,t,n){let o=i.uv?2:0,s=(h,d)=>{let f=h*3+d;return{p:i.p.slice(f*3,f*3+3),c:i.c.slice(f*3,f*3+3),uv:i.uv?i.uv.slice(f*2,f*2+2):null,tile:i.tile?i.tile.slice(f*2,f*2+2):null}},a=(h,d,f)=>({p:h.p.map((p,_)=>p+(d.p[_]-p)*f),c:h.c.map((p,_)=>p+(d.c[_]-p)*f),uv:h.uv&&d.uv?h.uv.map((p,_)=>p+(d.uv[_]-p)*f):null,tile:h.tile}),l=(h,d,f)=>{for(let p=0;p<3;p++){let _=h*3+p;for(let m=0;m<3;m++)i.p[_*3+m]=d[p].p[m],i.c[_*3+m]=d[p].c[m];if(i.uv&&d[p].uv)for(let m=0;m<o;m++)i.uv[_*2+m]=d[p].uv[m];if(i.tile&&d[p].tile)for(let m=0;m<2;m++)i.tile[_*2+m]=d[p].tile[m];i.f[_]=f}},c=(h,d)=>{let f=i.p.length/9;for(let p of h)i.p.push(...p.p),i.c.push(...p.c),i.f.push(d),i.uv?.push(...p.uv??[.5,.5]),i.tile?.push(...p.tile??[0,1]);return f},u=i.p.length/9;for(let h=e;h<u;h++){let d=[s(h,0),s(h,1),s(h,2)],f=d.map(v=>v.p[1]>t+1e-6),p=d.map(v=>v.p[1]<t-1e-6);if(!f.some(Boolean))continue;if(!p.some(Boolean)){for(let v=0;v<3;v++)i.f[h*3+v]=n;continue}let _=i.f[h*3],m=(v,S)=>a(v,S,(t-v.p[1])/(S.p[1]-v.p[1])),g=f.filter(Boolean).length,y=g===1?f.indexOf(!0):f.indexOf(!1),x=d[y],b=d[(y+1)%3],w=d[(y+2)%3],M=m(x,b),E=m(w,x);g===1?(l(h,[x,M,E],n),c([M,b,w],_),c([M,w,E],_)):(l(h,[x,M,E],_),c([M,b,w],n),c([M,w,E],n))}}function Jm(i,e,t,n){let r=i.p.length/6;for(let o=e;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=t+1e-6)continue;if(l[1]>=t-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let u=(t-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,t,l[2]+(c[2]-l[2])*u];for(let f=0;f<3;f++)i.p[o*6+f]=l[f],i.p[o*6+3+f]=h[f];let d=i.c.slice(o*6,o*6+3);i.p.push(...h,...c),i.c.push(...d,...d),i.f.push(n,n)}}var pt=Math.PI/180;function Ge(i,e){let t=new J(i).multiplyScalar(e);return t.r=Math.min(1,t.r),t.g=Math.min(1,t.g),t.b=Math.min(1,t.b),t}function E1(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e}function _n(i,e=[]){let t=i.map(([n,r])=>new ke(n,r));return hs.triangulateShape(t,e.map(n=>n.map(([r,o])=>new ke(r,o))))}function jm(i,e,t,n,r,o,s){let a=new J(s),l=f=>.5+.5*Math.min(1,Math.max(0,f/1.6));for(let f=0;f<4;f++){let p=e[f],_=e[(f+1)%4],m=t[f],g=t[(f+1)%4],y=_[0]-p[0],x=_[1]-p[1],b=Math.hypot(y,x);if(b<1e-6)continue;let M=.8+.28*((x/b*Oc[0]-y/b*Oc[1]+1)/2),E=(m[0]+g[0]-p[0]-_[0])/2*(-x/b)+(m[1]+g[1]-p[1]-_[1])/2*(y/b),v=Math.max(0,Math.min(1,E/Math.max(1e-6,Math.hypot(E,r-n)))),S=Ge(o,l(n)*M).lerp(a,v),A=Ge(o,l(r)*M).lerp(a,v);i.tri([p[0],n,p[1]],[m[0],r,m[1]],[g[0],r,g[1]],S,A,A),i.tri([p[0],n,p[1]],[g[0],r,g[1]],[_[0],n,_[1]],S,A,S)}let[c,u,h,d]=t;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[h[0],r,h[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[d[0],r,d[1]],[h[0],r,h[1]],a))}function Qm(i,e,t,n,r,o,s,a,l,c){let u=new J(l),h=[];for(let m=0;m<c;m++){let g=m/c*Math.PI*2;h.push({y:o+Math.cos(g)*s,s:r+Math.sin(g)*s})}let d=(m,g)=>{let y=e(m,h[g%c].s);return[y[0],h[g%c].y,y[1]]},f=e(t,r),p=e(n,r),_=(m,g,y,x,b)=>{let w=(g[1]-m[1])*(y[2]-m[2])-(g[2]-m[2])*(y[1]-m[1]),M=(g[2]-m[2])*(y[0]-m[0])-(g[0]-m[0])*(y[2]-m[2]),E=(g[0]-m[0])*(y[1]-m[1])-(g[1]-m[1])*(y[0]-m[0]);w*x[0]+M*x[1]+E*x[2]<0?i.tri(m,y,g,b):i.tri(m,g,y,b)};for(let m=0;m<c;m++){let g=(m+.5)/c*Math.PI*2,y=Ge(a,.62+.4*Math.max(0,Math.cos(g))),x=e((t+n)/2,r+Math.sin(g)*s),b=e((t+n)/2,r),w=[x[0]-b[0],Math.cos(g)*s,x[1]-b[1]];_(d(t,m),d(n,m+1),d(n,m),w,y),_(d(t,m),d(t,m+1),d(n,m+1),w,y)}for(let[m,g,y]of[[t,p,f],[n,f,p]]){let x=e(m,r),b=[x[0],o,x[1]],w=[y[0]-g[0],0,y[1]-g[1]];for(let M=0;M<c;M++)_(b,d(m,M),d(m,M+1),w,u)}}function Tt(i,e,t,n,r,o,s={}){let a=typeof n=="number"?()=>n:p=>Math.max(t+.002,n(p[0],p[1])),l=s.aoFrom??t,c=s.fold??$e,u=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),h=(s.holes??[]).map(p=>E1(p)>0?[...p].reverse():p),d=h.length?[...e,...h.flat()]:e,f=s.topFace===!1&&!s.bottom?[]:_n(e,h);if(s.topFace!==!1){let p=new J(o);for(let[_,m,g]of f){let y=d[_],x=d[m],b=d[g];i.tri([y[0],a(y),y[1]],[b[0],a(b),b[1]],[x[0],a(x),x[1]],p,p,p,void 0,s.topFold??c)}}if(s.bottom){let p=Ge(r,.55);for(let[_,m,g]of f){let y=d[_],x=d[m],b=d[g];i.tri([y[0],t,y[1]],[x[0],t,x[1]],[b[0],t,b[1]],p,p,p,void 0,c)}}for(let p of[e,...h])for(let _=0;_<p.length;_++){let m=p[_],g=p[(_+1)%p.length],y=g[0]-m[0],x=g[1]-m[1],b=Math.hypot(y,x);if(b<1e-6||s.skipSide?.(m,g))continue;let M=.8+.28*((x/b*Oc[0]-y/b*Oc[1]+1)/2),E=a(m),v=a(g),S=Ge(r,u(t)*M),A=Ge(r,u(E)*M),k=Ge(r,u(v)*M);i.tri([m[0],t,m[1]],[m[0],E,m[1]],[g[0],v,g[1]],S,A,k,void 0,c),i.tri([m[0],t,m[1]],[g[0],v,g[1]],[g[0],t,g[1]],S,k,S,void 0,c)}}var R1={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},gravel_bed:{color:2632501,side:1645605,edge:9676478,edgeAlpha:.3},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function k1(i,e,t){let n=[(e[0]+t[0])/2,(e[1]+t[1])/2],r=t[0]-e[0],o=t[1]-e[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let u=a.points[(c+1)%a.points.length],h=u[0]-l[0],d=u[1]-l[1],f=Math.hypot(h,d)||1;if(Math.abs((r*d-o*h)/(s*f))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*h+(n[1]-l[1])*d)/(f*f)));return Math.hypot(l[0]+h*p-n[0],l[1]+d*p-n[1])<.4}))}function t0(i,e){return e.type==="pool"?Fc(i,e):Tr(i,e)+(fi(e.type)?.01:So[e.type])}function Ks(i){return kn(i)>=0?i:[...i].reverse()}function P1(i,e){let t=i[e];if(fi(t.type)||t.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===e||!(o.cut&&r>e||o.type==="pool")||o.points.length<3||o.points.every(s=>Oe(s,t.points))&&n.push(Ks(o.points))}return n}function e0(i,e,t,n,r,o,s,a,l=0){let c=t[0]-e[0],u=t[1]-e[1],h=Math.hypot(c,u);if(h<1e-6)return;let d=-u/h*n*.5,f=c/h*n*.5;if(Math.abs(l)<1e-4){Tt(i,Ks([[e[0]+d,e[1]+f],[t[0]+d,t[1]+f],[t[0]-d,t[1]-f],[e[0]-d,e[1]-f]]),r,o,s,a,{aoFrom:r-1});return}let p=(b,w)=>[e[0]+d*w,b,e[1]+f*w],_=(b,w)=>[t[0]+d*w,b+l,t[1]+f*w],m=(b,w)=>{i.tri(b[0],b[1],b[2],w,w,w,void 0,$e),i.tri(b[0],b[2],b[3],w,w,w,void 0,$e),i.tri(b[0],b[2],b[1],w,w,w,void 0,$e),i.tri(b[0],b[3],b[2],w,w,w,void 0,$e)},g=new J(a),y=new J(Ge(s,.9)),x=new J(Ge(s,.6));m([p(o,1),_(o,1),_(o,-1),p(o,-1)],g),m([p(r,1),_(r,1),_(r,-1),p(r,-1)],x),m([p(r,1),_(r,1),_(o,1),p(o,1)],y),m([p(r,-1),_(r,-1),_(o,-1),p(o,-1)],y),m([p(r,1),p(r,-1),p(o,-1),p(o,1)],y),m([_(r,1),_(r,-1),_(o,-1),_(o,1)],y)}function n0(i,e,t,n){let r=t.outdoor??[];r.forEach((o,s)=>{if(o.points.length<3)return;let a=Tr(t,o),l=(y,x)=>a-Ds(t,o,y,x),c=a-(o.type==="pool"?0:o.slope??0),u=fi(o.type)&&o.height?o.height:So[o.type],h={...R1[o.type],top:u},d=Ks(o.points),f=Ge(h.edge,h.edgeAlpha),p=o.open&&(o.type==="fence"||o.type==="pergola")?d.length-1:-1,_=y=>{if(o.outline!==!1)for(let x=0;x<d.length;x++){if(x===p)continue;let b=d[x],w=d[(x+1)%d.length];e.seg([b[0],y(b[0],b[1]),b[1]],[w[0],y(w[0],w[1]),w[1]],f,$e)}},m=n??i,g=new J(n?1734832:h.color);switch(o.type){case"pool":{let y=new J(h.side),x=new J(Ge(h.side,.55)),b=new J(932440),w=Fc(t,o),M=Ic(t,o),E=Sm(t,o);for(let[v,S,A]of _n(d)){let k=d[v],F=d[S],R=d[A];(n?m:i).tri([k[0],w,k[1]],[R[0],w,R[1]],[F[0],w,F[1]],g,g,g,void 0,$e),i.tri([k[0],E,k[1]],[R[0],E,R[1]],[F[0],E,F[1]],b,b,b,void 0,$e)}for(let v=0;v<d.length;v++){let S=d[v],A=d[(v+1)%d.length];i.tri([A[0],E,A[1]],[A[0],M,A[1]],[S[0],M,S[1]],x,y,y,void 0,$e),i.tri([A[0],E,A[1]],[S[0],M,S[1]],[S[0],E,S[1]],x,y,x,void 0,$e)}if(!o.above&&jh(t,o)){let v=new J(660258),S=new J(396054),A=E-.2,k=Math.min(a,M);for(let F=0;F<d.length;F++){let R=d[F],T=d[(F+1)%d.length];i.tri([R[0],A,R[1]],[R[0],k,R[1]],[T[0],k,T[1]],S,v,v,void 0,$e),i.tri([R[0],A,R[1]],[T[0],k,T[1]],[T[0],A,T[1]],S,v,S,void 0,$e)}for(let[F,R,T]of _n(d)){let P=d[F],C=d[R],D=d[T];i.tri([P[0],A,P[1]],[C[0],A,C[1]],[D[0],A,D[1]],S,S,S,void 0,$e)}if(o.outline!==!1)for(let F=0;F<d.length;F++){let R=d[F],T=d[(F+1)%d.length];e.seg([R[0],A,R[1]],[T[0],A,T[1]],Ge(h.edge,h.edgeAlpha*.35),$e),e.seg([R[0],A,R[1]],[R[0],k,R[1]],Ge(h.edge,h.edgeAlpha*.25),$e)}}if(M>a+.02){let v=new J(2044240),S=new J(1187123);for(let A=0;A<d.length;A++){let k=d[A],F=d[(A+1)%d.length];i.tri([k[0],a,k[1]],[k[0],M,k[1]],[F[0],M,F[1]],S,v,v,void 0,$e),i.tri([k[0],a,k[1]],[F[0],M,F[1]],[F[0],a,F[1]],S,v,S,void 0,$e)}_(()=>a+.005)}if(_(()=>M),_(()=>w+.005),o.outline!==!1)for(let v=0;v<d.length;v++){let S=d[v],A=d[(v+1)%d.length];e.seg([S[0],E+.005,S[1]],[A[0],E+.005,A[1]],Ge(h.edge,h.edgeAlpha*.4),$e)}break}case"fence":{for(let y=0;y<d.length;y++){if(y===p)continue;let x=d[y],b=d[(y+1)%d.length],w=Math.hypot(b[0]-x[0],b[1]-x[1]),M=Math.max(1,Math.round(w/2)),E=p>=0&&y===p-1?M:M-1;for(let v=0;v<=E;v++){let S=v/M,A=x[0]+(b[0]-x[0])*S,k=x[1]+(b[1]-x[1])*S,F=l(A,k);Tt(i,Ks([[A-.04,k-.04],[A+.04,k-.04],[A+.04,k+.04],[A-.04,k+.04]]),F,F+h.top,h.side,h.color)}for(let v of[.35,.85])e.seg([x[0],l(x[0],x[1])+v*h.top,x[1]],[b[0],l(b[0],b[1])+v*h.top,b[1]],f,$e)}break}case"pergola":{let y=h.top;for(let[x,b]of d){let w=l(x,b);Tt(i,Ks([[x-.06,b-.06],[x+.06,b-.06],[x+.06,b+.06],[x-.06,b+.06]]),w,w+y,h.side,h.color)}for(let x=0;x<d.length;x++){if(x===p)continue;let b=d[x],w=d[(x+1)%d.length],M=l(b[0],b[1])+y;if(e0(i,b,w,.12,M-.16,M,h.side,h.color,l(w[0],w[1])-l(b[0],b[1])),o.bracing){let E=l(b[0],b[1]),v=l(w[0],w[1]);e.seg([b[0],E+.25,b[1]],[w[0],v+y-.25,w[1]],f,$e),e.seg([w[0],v+.25,w[1]],[b[0],E+y-.25,b[1]],f,$e)}}if(Fm(d)){let x=Lm(d),b=x.x1-x.x0,w=x.z1-x.z0,M=b>=w,E=M?b:w,v=Math.max(1,Math.round(E/.6));for(let S=1;S<v;S++){let A=(M?x.x0:x.z0)+E*S/v,k=M?[A,x.z0+.06]:[x.x0+.06,A],F=M?[A,x.z1-.06]:[x.x1-.06,A],R=l(k[0],k[1])+y;e0(i,k,F,.06,R-.04,R+.08,h.side,h.color,l(F[0],F[1])-l(k[0],k[1]))}}_((x,b)=>l(x,b)+y+.004);break}case"balcony":{Tt(i,d,a-.18,a+h.top,h.side,h.color,{aoFrom:a-.18}),_(()=>a+h.top+.004);let x=o.height&&o.height>.3?o.height:1,b=Ge(9417983,.42),w=Ge(3662079,.55);for(let M=0;M<d.length;M++){let E=d[M],v=d[(M+1)%d.length];if(k1(t,E,v))continue;let S=Math.hypot(v[0]-E[0],v[1]-E[1]),A=a+h.top;e.seg([E[0],A+x,E[1]],[v[0],A+x,v[1]],w,$e),e.seg([E[0],A+.1,E[1]],[v[0],A+.1,v[1]],b,$e);let k=Math.max(1,Math.round(S/.12));for(let F=0;F<=k;F++){let R=F/k,T=E[0]+(v[0]-E[0])*R,P=E[1]+(v[1]-E[1])*R;e.seg([T,A,P],[T,A+x,P],F===0||F===k?w:b,$e)}}break}default:{let y=(b,w)=>l(b,w)+h.top,x=P1(r,s);if(Tt(i,d,c,o.slope?y:a+h.top,h.side,h.color,{aoFrom:c,holes:x}),o.type==="gravel_bed"){let b=d.map(R=>R[0]),w=d.map(R=>R[1]),M=Math.min(...b),E=Math.min(...w),v=Math.max(...b)-M,S=Math.max(...w)-E,A=[...o.id].reduce((R,T)=>(Math.imul(R,33)^T.charCodeAt(0))>>>0,5381),k=()=>(A=Math.imul(A,1664525)+1013904223>>>0,A/4294967296),F=Math.min(512,Math.ceil(Ti(d)/.012));for(let R=0;R<F;R++){let T=M+k()*v,P=E+k()*S,C=.012+k()*.016,D=[[T-C,P],[T+C*.7,P-C*.8],[T+C*.4,P+C]];if(!D.every(O=>Oe(O,d)&&!x.some(U=>Oe(O,U))))continue;let B=D.map(([O,U])=>[O,y(O,U)+.003,U]),L=Ge(k()<.5?5593185:3422016,.75+k()*.3);i.tri(B[0],B[2],B[1],L,L,L,void 0,$e)}}if(_((b,w)=>y(b,w)+.004),o.type==="hedge"&&_((b,w)=>l(b,w)+.004),o.outline!==!1)for(let b of x)for(let w=0;w<b.length;w++){let M=b[w],E=b[(w+1)%b.length];e.seg([M[0],y(M[0],M[1])+.004,M[1]],[E[0],y(E[0],E[1])+.004,E[1]],f,$e)}}}})}var Ys=.012,C1=.012;function r0(i,e,t,n,r,o=[],s,a){let l=[],c=[],u=[],h=[],d=(x,b,w,M,E,v,S)=>{for(let A of[x,b,w,x,w,M])l.push(A[0],A[1],A[2]),c.push(E[0],E[1],E[2]),u.push(v),h.push(S)},f=i.openings.map(x=>Ws(i,x,e)).filter(x=>!!x);i.rooms.forEach((x,b)=>{if(x.points.length<3)return;let w=Bc(i,x,f),M=x.points.map(T=>T[0]),E=x.points.map(T=>T[1]),v=Math.min(...M),S=Math.min(...E),A=Math.max(...M),k=Math.max(...E),F=Math.max(1,Math.ceil((A-v)/r)),R=Math.max(1,Math.ceil((k-S)/r));for(let T=0;T<F;T++)for(let P=0;P<R;P++){let C=v+(T+.5)*r,D=S+(P+.5)*r;if(!Oe([C,D],x.points)||o.some(K=>Oe([C,D],K))&&!w.some(K=>Oe([C,D],K)))continue;let B=v+T*r,L=S+P*r,O=Math.min(B+r,A),U=Math.min(L+r,k);if(a){let K=[[B,L],[O,L],[O,U],[B,U]];if(K.every(([Q,ee])=>Oe([Q+(C-Q)*1e-6,ee+(D-ee)*1e-6],x.points))){let Q=K.map(([ee,ae])=>a(ee,ae));if(Q.every(ee=>ee!=null)){let ee=(Q[1]+Q[2]-Q[0]-Q[3])/(2*(O-B)),ae=(Q[2]+Q[3]-Q[0]-Q[1])/(2*(U-L)),H=Math.hypot(ee,1,ae),W=[ee/H,-1/H,ae/H],oe=K.map(([le,Y],se)=>[le,Q[se]-Ys,Y]);d(oe[0],oe[1],oe[2],oe[3],W,b,-1)}}}let Z=ft(i,x)+Ys;if(!w.length)d([B,Z,L],[B,Z,U],[O,Z,U],[O,Z,L],[0,1,0],b,-1);else{let K=[[[B,L],[B,U],[O,U],[O,L]]];for(let Q of w)K=K.flatMap(ee=>ko(ee,Q));for(let Q of K)for(let ee=1;ee+1<Q.length;ee++)for(let ae of[Q[0],Q[ee],Q[ee+1]])l.push(ae[0],Z,ae[1]),c.push(0,1,0),u.push(b),h.push(-1)}}});let p=i.rooms.length,_=(i.outdoor??[]).filter(x=>x.points.length>=3&&!fi(x.type));if(_.length){let x=_.flatMap(A=>A.points.map(k=>k[0])),b=_.flatMap(A=>A.points.map(k=>k[1])),w=Math.floor(Math.min(...x)/r)*r,M=Math.floor(Math.min(...b)/r)*r,E=Math.max(1,Math.ceil((Math.max(...x)-w)/r)),v=Math.max(1,Math.ceil((Math.max(...b)-M)/r)),S=(A,k,F)=>t0(i,A)-Ds(i,A,k,F)+Ys;for(let A=0;A<E;A++)for(let k=0;k<v;k++){let F=w+A*r,R=M+k*r,T,P=[F+r/2,R+r/2];T=_.find(D=>D.type==="pool"&&Oe(P,D.points));for(let D=_.length-1;D>=0&&!T;D--)Oe(P,_[D].points)&&(T=_[D]);if(!T)continue;let C=(D,B)=>[D,S(T,D,B),B];d(C(F,R),C(F,R+r),C(F+r,R+r),C(F+r,R),[0,1,0],p,-1)}}let m=Math.min(i.cut_height,qt(i)-i.elevation),g=[];e.forEach((x,b)=>{let w=fn(i,x).top,M=x.b[0]-x.a[0],E=x.b[1]-x.a[1],v=Math.hypot(M,E);if(v<.05)return;let S=[M/v,E/v],A=[-S[1],S[0]],k=t[b],F=F1(x,S,v,n),R=(C,D)=>C?i.rooms.findIndex(B=>B.id===C):D?p:-1;g.push({a:x.a,b:x.b,h:w,ra:R(x.roomLeft,!1),rb:R(x.roomRight,x.exterior),gaps:F});let T=(C,D,B)=>[D,B,...C.filter(L=>L>D+.005&&L<B-.005)].sort((L,O)=>L-O).filter((L,O,U)=>O===0||L>U[O-1]+.005),P=T(F.flatMap(C=>[C.s0,C.s1]),0,v);for(let C of[1,-1]){let D=C>0?x.roomLeft:x.roomRight,B=D?i.rooms.findIndex(W=>W.id===D):x.exterior?p:-1;if(B<0)continue;let L=D?i.rooms[B]:null,O=L?ft(i,L):fn(i,x).bottom,U=L?O+Math.min(zn(i,L),x.height??1/0):w,Z=Math.min(m,U-.02),K=T([Z,(Z+U)/2,...F.flatMap(W=>[W.y0+.01,W.y1-.01])],O+.02,U-.02),Q=(C>0?x.left:x.right)+C1,ee=[A[0]*C,A[1]*C],ae=(W,oe)=>[x.a[0]+S[0]*W+ee[0]*Q,oe,x.a[1]+S[1]*W+ee[1]*Q],H=W=>{let oe=ae(W,0),le=s?.(oe[0],oe[2]);return le==null?1/0:le-.02};for(let W=0;W<P.length-1;W++){let oe=P[W+1]-P[W],le=Math.max(1,Math.ceil(oe/r));for(let Y=0;Y<le;Y++){let se=P[W]+oe/le*Y,ge=P[W]+oe/le*(Y+1),Fe=(se+ge)/2;for(let Ae=0;Ae<K.length-1;Ae++){let Pe=K[Ae],We=K[Ae+1];if(We-Pe<.01)continue;let at=(Pe+We)/2;if(F.some(_t=>Fe>_t.s0&&Fe<_t.s1&&at>_t.y0&&at<_t.y1))continue;let Mt=Pe>=m-1e-6?k:kr+k,Vt=Math.min(We,H(se)),nt=Math.min(We,H(ge));Vt<=Pe+.005&&nt<=Pe+.005||d(ae(se,Pe),ae(ge,Pe),ae(ge,Math.max(Pe,nt)),ae(se,Math.max(Pe,Vt)),[ee[0],0,ee[1]],B,Mt)}}}}});for(let x of i.openings){let b=Ws(i,x,e),w=b?.stair;if(!b||!w)continue;let M=i.rooms.findIndex(v=>v.id===w.room.id),E=(v,S,A)=>[b.start[0]+b.axis[0]*v+w.toward[0]*S,A,b.start[1]+b.axis[1]*v+w.toward[1]*S];for(let v=0;v<w.count;v++){let S=w.face+w.depth*v/w.count,A=w.face+w.depth*(v+1)/w.count,k=(w.recess?b.low+(b.high-b.low)*(v+1)/w.count:b.high-(b.high-b.low)*v/w.count)+Ys;d(E(0,S,k),E(b.width,S,k),E(b.width,A,k),E(0,A,k),[0,1,0],M,-1)}if(w.offset>0){let v=b.threshold+Ys;d(E(0,w.wallFace,v),E(b.width,w.wallFace,v),E(b.width,w.face,v),E(0,w.face,v),[0,1,0],M,-1)}}let y=[];for(let x of n){if(x.opening.type!=="door")continue;let b=e.find(E=>o0(E,x)&&I1(E,x));if(!b||!b.roomLeft||!b.roomRight)continue;let w=i.rooms.findIndex(E=>E.id===b.roomLeft),M=i.rooms.findIndex(E=>E.id===b.roomRight);w<0||M<0||y.push({id:x.opening.id,a:w,b:M,x:x.start[0]+x.axis[0]*(x.width/2),y:Math.min(1.1,x.top*.55),z:x.start[1]+x.axis[1]*(x.width/2)})}return{pos:new Float32Array(l),normal:new Float32Array(c),room:Int16Array.from(u),fold:new Float32Array(h),doors:y,blockers:g}}function o0(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(t,n)||1;return Math.abs((e.start[0]-i.a[0])*n-(e.start[1]-i.a[1])*t)/r<.02&&Math.abs((e.axis[0]*t+e.axis[1]*n)/r)>.99}function I1(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(t,n)||1,o=e.start[0]+e.axis[0]*(e.width/2),s=e.start[1]+e.axis[1]*(e.width/2),a=((o-i.a[0])*t+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}function F1(i,e,t,n){let r=[];for(let o of n){if(!o0(i,o))continue;let s=(o.start[0]-i.a[0])*e[0]+(o.start[1]-i.a[1])*e[1],l=o.axis[0]*e[0]+o.axis[1]*e[1]>0?s:s-o.width;l>t||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function L1(i,e){let t=Math.max(0,-e),n=Math.max(0,e);switch(i){case"ceiling":return .3+.7*t;case"spot":return .06+.94*t**5;case"pendant":return .25+.85*t**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(e);default:return 1}}function D1(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function i0(i,e,t,n,r,o,s){let a=e-i.x,l=t-i.y,c=n-i.z,u=a*a+l*l+c*c,h=Math.sqrt(u)||1e-6,d=D1(i),f=1/(1+u/(d*d)),p=f*Math.sqrt(f),_=Math.max(0,-(a*r+l*o+c*s)/h);if(i.direction){let m=(a*i.direction[0]+l*i.direction[1]+c*i.direction[2])/h,g=Math.cos((i.angle??60)*Math.PI/360),y=Math.cos((i.angle??60)*.8*Math.PI/360),x=Math.max(0,Math.min(1,(m-g)/(y-g)));return i.level*p*(.2+.8*_)*x*x*(3-2*x)}return i.level*p*(.2+.8*_)*L1(i.kind,l/h)}function s0(i,e,t=.7,n=[]){let r=[...e];i.doors.forEach((u,h)=>{let d=n[h]??.5;if(!(d<=.01))for(let[f,p]of[[u.a,u.b],[u.b,u.a]]){let _=[0,0,0];for(let g of e){if(g.room!==f)continue;let y=g.x-u.x,x=g.y-u.y,b=g.z-u.z,w=Math.hypot(y,x,b)||1,M=i0(g,u.x,u.y,u.z,y/w,x/w,b/w);_[0]+=g.color[0]*M,_[1]+=g.color[1]*M,_[2]+=g.color[2]*M}let m=Math.max(_[0],_[1],_[2]);m<.01||r.push({x:u.x,y:u.y,z:u.z,color:[_[0]/m,_[1]/m,_[2]/m],level:Math.min(1,m*.9*(.35+.65*d)),kind:"wall",room:p})}});let o=new Map;for(let u of r){let h=i.blockers.filter(f=>f.ra===u.room||f.rb===u.room),d={...u,color:u.color.map(f=>Math.pow(f,1.5)),walls:h};o.set(u.room,[...o.get(u.room)??[],d])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let u=0;u<l.length;u++){let h=o.get(l[u]);if(!h)continue;let d=u*3,f=0,p=0,_=0;for(let m of h){if(m.walls.length&&sd(m,m.walls,s[d],s[d+1],s[d+2]))continue;let g=i0(m,s[d],s[d+1],s[d+2],a[d],a[d+1],a[d+2]);f+=m.color[0]*g,p+=m.color[1]*g,_+=m.color[2]*g}c[d]=1-Math.exp(-f*t*1.6),c[d+1]=1-Math.exp(-p*t*1.6),c[d+2]=1-Math.exp(-_*t*1.6)}return c}function sd(i,e,t,n,r){let o=t-i.x,s=r-i.z;for(let a of e){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=o*c-s*l;if(Math.abs(u)<1e-9)continue;let h=a.a[0]-i.x,d=a.a[1]-i.z,f=(h*c-d*l)/u;if(f<=1e-6||f>=1-1e-6)continue;let p=(h*s-d*o)/u;if(p<0||p>1)continue;let _=i.y+(n-i.y)*f;if(_>=a.h||_<(a.bottom??0))continue;let m=p*Math.hypot(l,c);if(!a.gaps.some(g=>m>g.s0&&m<g.s1&&_>g.y0&&_<g.y1))return!0}return!1}function ad(i,e,t){let n=i.rooms.findIndex(r=>r.points.length>=3&&Oe([e,t],r.points));return n<0?i.rooms.length:n}function Co(i,e){return i&&e>=0&&e<i.length?i[e]:e}function z1(i){let e=[...i].sort((n,r)=>n[0]-r[0]||n[1]-r[1]),t=n=>{let r=[];for(let o of n){for(;r.length>1;){let s=r[r.length-2],a=r[r.length-1];if((a[0]-s[0])*(o[1]-s[1])-(a[1]-s[1])*(o[0]-s[0])>1e-9)break;r.pop()}r.push(o)}return r.slice(0,-1)};return[...t(e),...t([...e].reverse())]}function a0(i,e,t,n,r,o){let s=t.map(l=>{let c=Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1])||1,u=(l.b[0]-l.a[0])/c,h=(l.b[1]-l.a[1])/c,d=n.filter(f=>Math.abs((f.start[0]-l.a[0])*h-(f.start[1]-l.a[1])*u)<.01).map(f=>{let p=(f.start[0]-l.a[0])*u+(f.start[1]-l.a[1])*h;return{s0:p,s1:p+f.width,y0:f.sill,y1:f.top}});return{a:l.a,b:l.b,h:fn(e,l).top,bottom:fn(e,l).bottom,ra:0,rb:0,gaps:d}}),a=e.rooms.map(l=>({origin:new V(0,ft(e,l),0),u:new V(1,0,0),v:new V(0,0,1),normal:new V(0,1,0),polygon:l.points,holes:r,room:l.id}));for(let l of t){let c=l.b[0]-l.a[0],u=l.b[1]-l.a[1],h=Math.hypot(c,u);if(h<.01)continue;let d=new V(c/h,0,u/h),f=fn(e,l);for(let[p,_,m]of[[l.roomLeft,l.left,1],[l.roomRight,l.right,-1]]){if(!p)continue;let g=new V(-d.z*m,0,d.x*m),y=new V(l.a[0],f.bottom,l.a[1]).addScaledVector(g,_+.003),x=[];for(let b of n){let w=new V(b.start[0]-l.a[0],0,b.start[1]-l.a[1]);if(Math.abs(w.x*d.z-w.z*d.x)>.01)continue;let M=w.dot(d);M+b.width<0||M>h||x.push([[M,b.sill-f.bottom],[M+b.width,b.sill-f.bottom],[M+b.width,b.top-f.bottom],[M,b.top-f.bottom]])}a.push({origin:y,u:d,v:new V(0,1,0),normal:g,polygon:[[0,0],[h,0],[h,f.top-f.bottom],[0,f.top-f.bottom]],holes:x,room:p,fold:o[t.indexOf(l)]})}}for(let l of e.furniture.filter(c=>c.rotation_x||c.rotation_z)){let c=Rt(e,l),u=Ec(l,c).map(f=>new V(...f)),h=zs(e,l.x,l.z)?.id,d=[...a];for(let f of e.furniture){if(f===l||!(Qh.has(f.type)||gt(f.type)?.surface)||zs(e,f.x,f.z)?.id!==h)continue;let p=Ec(f,Rt(e,f)).slice(4).map(b=>new V(...b)),_=p[1].clone().sub(p[0]).normalize(),m=p[3].clone().sub(p[0]).normalize(),g=new V().crossVectors(m,_).normalize();g.y<0&&g.negate();let y=p[0].distanceTo(p[1]),x=p[0].distanceTo(p[3]);d.push({origin:p[0],u:_,v:m,normal:g,polygon:[[0,0],[y,0],[y,x],[0,x]],holes:[],room:h,fold:Xs})}for(let f of d){if(f.room!==h)continue;let p=u.map(A=>A.clone().sub(f.origin).dot(f.normal));if(Math.max(...p)<-.01)continue;let _=Math.max(0,Math.min(...p));if(_>.35)continue;let m=z1(u.map(A=>{let k=A.clone().sub(f.origin);return[k.dot(f.u),k.dot(f.v)]}));if(m.length<3)continue;let g=m.reduce((A,k)=>A+k[0],0)/m.length,y=m.reduce((A,k)=>A+k[1],0)/m.length,x=.055+_*.15,b=m.map(([A,k])=>{let F=Math.hypot(A-g,k-y)||1;return[A+(A-g)*x/F,k+(k-y)*x/F]}),w=new J(1-.45*Math.exp(-_*8),1-.45*Math.exp(-_*8),1-.45*Math.exp(-_*8)),M=new J(1,1,1),E=_n(f.polygon).map(([A,k,F])=>[f.polygon[A],f.polygon[k],f.polygon[F]]),v=i.count,S=(A,k)=>{for(let F of E){let R=[Po(A,F)];for(let T of f.holes)for(let[P,C,D]of _n(T))R=R.flatMap(B=>ko(B,[T[P],T[C],T[D]]));for(let T of R)for(let P=1;P+1<T.length;P++){let C=[T[0],T[P],T[P+1]],D=U=>f.origin.clone().addScaledVector(f.u,U[0]).addScaledVector(f.v,U[1]).addScaledVector(f.normal,.003).toArray(),B=D([(C[0][0]+C[1][0]+C[2][0])/3,(C[0][1]+C[1][1]+C[2][1])/3]);if(sd({x:l.x,y:c+l.h/2,z:l.z},s,B[0],B[1],B[2]))continue;let L=(A[1][1]-A[2][1])*(A[0][0]-A[2][0])+(A[2][0]-A[1][0])*(A[0][1]-A[2][1]),O=U=>{let Z=((A[1][1]-A[2][1])*(U[0]-A[2][0])+(A[2][0]-A[1][0])*(U[1]-A[2][1]))/L,K=((A[2][1]-A[0][1])*(U[0]-A[2][0])+(A[0][0]-A[2][0])*(U[1]-A[2][1]))/L;return new J(k[0].r*Z+k[1].r*K+k[2].r*(1-Z-K),k[0].g*Z+k[1].g*K+k[2].g*(1-Z-K),k[0].b*Z+k[1].b*K+k[2].b*(1-Z-K))};Math.abs(L)>1e-10&&i.tri(D(C[0]),D(C[1]),D(C[2]),O(C[0]),O(C[1]),O(C[2]))}}};for(let[A,k,F]of _n(m))S([m[A],m[k],m[F]],[w,w,w]);for(let A=0;A<m.length;A++){let k=(A+1)%m.length;S([m[A],b[A],b[k]],[w,M,M]),S([m[A],b[k],m[k]],[w,M,w])}f.fold!==void 0&&Gc(i,v,e.cut_height,f.fold)}}}var Qn=1e-4;function ld(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e/2}function l0(i,e,t,n){let r=[e[0]-i[0],e[1]-i[1]],o=[n[0]-t[0],n[1]-t[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((t[0]-i[0])*o[1]-(t[1]-i[1])*o[0])/s,l=((t[0]-i[0])*r[1]-(t[1]-i[1])*r[0])/s;return a>Qn&&a<1-Qn&&l>-Qn&&l<1+Qn?a:null}function cd(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-e[0])*n+(i[1]-e[1])*r)/o;return s<=Qn||s>=1-Qn?null:Math.abs((i[0]-e[0])*r-(i[1]-e[1])*n)/Math.sqrt(o)<Qn?s:null}function N1(i,e){for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];for(let o=0;o<e.length;o++){let s=e[o],a=e[(o+1)%e.length];if(l0(n,r,s,a)!==null||cd(s,n,r)!==null||cd(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<Qn)return!0}}return Oe(i[0],e)||Oe(e[0],i)}function B1(i){let e=i.map(o=>ld(o)>=0?o:[...o].reverse()),t=[];e.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],u=[0,1];e.forEach((h,d)=>{if(d!==s)for(let f=0;f<h.length;f++){let p=h[f],_=h[(f+1)%h.length],m=l0(l,c,p,_)??cd(p,l,c);m!==null&&u.push(m)}}),u.sort((h,d)=>h-d);for(let h=1;h<u.length;h++){if(u[h]-u[h-1]<Qn)continue;let d=[l[0]+(c[0]-l[0])*u[h-1],l[1]+(c[1]-l[1])*u[h-1]],f=[l[0]+(c[0]-l[0])*u[h],l[1]+(c[1]-l[1])*u[h]],p=Math.hypot(f[0]-d[0],f[1]-d[1]),_=[(d[0]+f[0])/2+(f[1]-d[1])/p*.001,(d[1]+f[1])/2-(f[0]-d[0])/p*.001];e.some((m,g)=>g!==s&&Oe(_,m))||t.some(([m,g])=>Math.hypot(m[0]-d[0],m[1]-d[1])<Qn&&Math.hypot(g[0]-f[0],g[1]-f[1])<Qn)||t.push([d,f])}}});let n=[],r=new Set;for(let o=0;o<t.length;o++){if(r.has(o))continue;r.add(o);let s=[t[o][0]],a=t[o][1];for(let l=0;l<t.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=t.findIndex(([u],h)=>!r.has(h)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(t[c][0]),a=t[c][1]}s.length>=3&&ld(s)>1e-6&&n.push(s)}return n}function ud(i){let e=i.filter(o=>o.length>=3),t=e.map((o,s)=>s),n=o=>t[o]===o?o:t[o]=n(t[o]);for(let o=0;o<e.length;o++)for(let s=o+1;s<e.length;s++)n(o)!==n(s)&&N1(e[o],e[s])&&(t[n(s)]=n(o));let r=new Map;return e.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:B1(o))}function O1(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-e[0])*n+(i[1]-e[1])*r)/o)):0;return Math.hypot(i[0]-e[0]-n*s,i[1]-e[1]-r*s)}function c0(i,e,t=.03){return i.every(n=>Oe(n,e)||e.some((r,o)=>O1(n,r,e[(o+1)%e.length])<=t))}function hd(i,e){let t=ld(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return t.map((r,o)=>{let s=n(t[(o-1+t.length)%t.length],r),a=n(r,t[(o+1)%t.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*e,r[1]+(s[1]+a[1])/l*e]})}var U1=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var V1=["wall","pole","pillar","parcel","bank"];function h0(i){return U1.includes(i.variant??"")?i.variant:"bin240"}function d0(i){return V1.includes(i.variant??"")?i.variant:"wall"}var Ut=["#3a3f47","#3a3f47"],Pr=["#23262b","#23262b"],ei=["#5a3b25","#5a3b25"],Lt=["#1f4fa8","#1f4fa8"],ir=["#e3b616","#e3b616"],dt=["#2f7d3b","#2f7d3b"],u0={default:{rest:Ut,bio:ei,paper:Lt,plastic:ir,glass:dt,garden:dt,recycling:ir,other:Ut},DE:{rest:Pr,bio:ei,paper:Lt,plastic:ir,glass:dt,garden:dt,recycling:ir},AT:{rest:Ut,bio:ei,paper:[Ut[0],"#c0262d"],plastic:ir,glass:dt,garden:dt},CH:{rest:["#d8d8d8","#d8d8d8"],bio:dt,paper:Lt,plastic:Ut,glass:dt,garden:dt},NL:{rest:Ut,bio:dt,paper:Lt,plastic:["#3a3f47","#e57a1f"],glass:dt,garden:dt},BE:{rest:Ut,bio:dt,paper:Lt,plastic:Lt,glass:dt,garden:dt},GB:{rest:Pr,bio:["#3a3f47","#5a3b25"],paper:Lt,plastic:Lt,glass:Pr,garden:ei,recycling:Lt},US:{rest:Pr,bio:dt,paper:Lt,plastic:Lt,glass:Lt,garden:dt,recycling:Lt},CA:{rest:Pr,bio:dt,paper:Lt,plastic:Lt,glass:Lt,garden:dt,recycling:Lt},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ut,bio:ei,paper:[Ut[0],"#e3b616"],plastic:[Ut[0],"#e3b616"],recycling:[Ut[0],"#e3b616"],glass:dt,garden:dt},IT:{rest:Ut,bio:ei,paper:Lt,plastic:ir,glass:dt,garden:dt},ES:{rest:Ut,bio:ei,paper:Lt,plastic:ir,glass:dt,garden:dt},PT:{rest:Ut,bio:ei,paper:Lt,plastic:ir,glass:dt,garden:dt},DK:{rest:Pr,bio:dt,paper:Lt,plastic:Ut,glass:dt,garden:dt},SE:{rest:Pr,bio:ei,paper:Lt,plastic:Ut,glass:dt,garden:dt},NO:{rest:Ut,bio:ei,paper:Lt,plastic:Ut,glass:dt,garden:dt},FI:{rest:Ut,bio:ei,paper:Lt,plastic:Ut,glass:dt,garden:dt}},f0="DE";function p0(){return f0}function G1(i,e){return u0[e]?.[i]??u0.default[i]??Ut}function m0(i,e=f0){let t=G1(i.bin_kind??"rest",e),n=i.bin_color||t[0];return[n,i.bin_lid||(i.bin_color?n:t[1])]}function g0(i,e=Math.PI/3){let t=i.index?i.toNonIndexed():i,n=t.attributes.position,r=n.count,o;if(n.isBufferAttribute===!0&&n.itemSize===3&&n.normalized===!1)o=n.array;else{o=new Float64Array(r*3);for(let b=0;b<r;b++)o[3*b+0]=n.getX(b),o[3*b+1]=n.getY(b),o[3*b+2]=n.getZ(b)}let s=Math.cos(e),a=(1+1e-10)*100,l=r/3,c=new Float64Array(l*3);for(let b=0;b<l;b++){let w=9*b,M=o[w+0],E=o[w+1],v=o[w+2],S=o[w+3],A=o[w+4],k=o[w+5],F=o[w+6],R=o[w+7],T=o[w+8],P=F-S,C=R-A,D=T-k,B=M-S,L=E-A,O=v-k,U=C*O-D*L,Z=D*B-P*O,K=P*L-C*B,Q=1/(Math.sqrt(U*U+Z*Z+K*K)||1);c[3*b+0]=U*Q,c[3*b+1]=Z*Q,c[3*b+2]=K*Q}let u=new Int32Array(r),h=new Float64Array(r*3),d=1;for(;d<r*2;)d<<=1;let f=d-1,p=new Int32Array(d),_=0;for(let b=0;b<r;b++){let w=3*b,M=Math.trunc(o[w+0]*a),E=Math.trunc(o[w+1]*a),v=Math.trunc(o[w+2]*a),S=(Math.imul(M,73856093)^Math.imul(E,19349663)^Math.imul(v,83492791))&f;for(;;){let A=p[S];if(A===0){let F=3*_;h[F+0]=M,h[F+1]=E,h[F+2]=v,p[S]=_+1,u[b]=_++;break}let k=3*(A-1);if(h[k+0]===M&&h[k+1]===E&&h[k+2]===v){u[b]=A-1;break}S=S+1&f}}let m=new Int32Array(_+1);for(let b=0;b<r;b++)m[u[b]+1]++;for(let b=0;b<_;b++)m[b+1]+=m[b];let g=new Int32Array(r),y=m.slice(0,_);for(let b=0;b<l;b++){let w=3*b;g[y[u[w+0]]++]=b,g[y[u[w+1]]++]=b,g[y[u[w+2]]++]=b}let x=new Float32Array(r*3);for(let b=0;b<l;b++){let w=3*b,M=c[w+0],E=c[w+1],v=c[w+2];for(let S=0;S<3;S++){let A=w+S,k=u[A],F=0,R=0,T=0;for(let C=m[k],D=m[k+1];C<D;C++){let B=3*g[C],L=c[B+0],O=c[B+1],U=c[B+2];M*L+E*O+v*U>s&&(F+=L,R+=O,T+=U)}let P=1/(Math.sqrt(F*F+R*R+T*T)||1);x[3*A+0]=F*P,x[3*A+1]=R*P,x[3*A+2]=T*P}}return t.setAttribute("normal",new vn(x,3,!1)),t}var _0=!1;function b0(i){_0=i}function v0(i,e,t,n,r=_0){let o=r||i.detail==="low"?12:i.detail==="high"?40:24,s=i.w*e,a=i.d*t,l=i.h*n,c;if(i.shape==="profile"){let u=i.sections??[],h=u[0]?.points.length??0;if(u.length<2||h<3||u.some(_=>_.points.length!==h))return null;let d=[],f=(_,m)=>[u[_].points[m][0]*s,u[_].points[m][1]*l,u[_].at*a],p=(_,m,g)=>d.push(..._,...m,...g);for(let _=0;_<u.length-1;_++)for(let m=0;m<h;m++){let g=(m+1)%h,y=f(_,m),x=f(_,g),b=f(_+1,g),w=f(_+1,m);p(y,x,b),p(y,b,w)}for(let _ of[0,u.length-1])for(let[m,g,y]of _n(u[_].points)){let x=f(_,m),b=f(_,g),w=f(_,y);(b[0]-x[0])*(w[1]-x[1])-(b[1]-x[1])*(w[0]-x[0])>0==(_===0)?p(x,w,b):p(x,b,w)}c=new Ke,c.setAttribute("position",new we(d,3))}else if(i.shape==="cyl"&&i.detail){let u=i.axis??"y",h=u==="x"?s:u==="z"?a:l,d=(u==="x"?Math.min(a,l):u==="z"?Math.min(s,l):Math.min(s,a))/2;c=new rs(d,d,h,r?32:i.detail==="high"?64:40),u==="x"?c.rotateZ(-Math.PI/2):u==="z"&&c.rotateX(Math.PI/2),c.translate(0,l/2,0)}else if(i.shape==="polygon"){let u=i.axis??"y",h=u==="x"?a:s,d=u==="y"?a:l,f=u==="y"?l:u==="x"?s:a,p=i.points??[],m=p.reduce((y,x,b)=>{let w=p[(b+1)%p.length];return y+x[0]*w[1]-w[0]*x[1]},0)<0?p.toReversed():p,g=[];for(let[y,x,b]of _n(m)){for(let w of[y,x,b])g.push(m[w][0],0,m[w][1]);for(let w of[y,b,x])g.push(m[w][0],1,m[w][1])}for(let y=0;y<m.length;y++){let x=m[y],b=m[(y+1)%m.length];g.push(x[0],0,x[1],b[0],1,b[1],b[0],0,b[1],x[0],0,x[1],x[0],1,x[1],b[0],1,b[1])}for(let y=0;y<g.length;y+=3){let x=g[y]*h,b=g[y+1]*f,w=g[y+2]*d;u==="z"?(g[y]=x,g[y+1]=w+l/2,g[y+2]=a/2-b):u==="x"?(g[y]=b-s/2,g[y+1]=w+l/2,g[y+2]=x):(g[y]=x,g[y+1]=b,g[y+2]=w)}c=new Ke,c.setAttribute("position",new we(g,3))}else if(i.shape==="sphere"||i.shape==="ellipsoid"){let u=r?32:i.detail==="high"?64:40;c=new ps(.5,u,u/2);let h=Math.min(s,a,l);c.scale(i.shape==="sphere"?h:s,i.shape==="sphere"?h:l,i.shape==="sphere"?h:a),c.translate(0,l/2,0)}else if(i.shape==="rounded_box"){let u=o===12?3:o===40?8:5,h=Math.min(i.radius??.08,.49);c=new Hi(1,1,1,u,u,u);let d=c.getAttribute("position"),f=.5-h;for(let p=0;p<d.count;p++){let _=new V().fromBufferAttribute(d,p),m=_.clone().clampScalar(-f,f);_.sub(m).normalize().multiplyScalar(h).add(m),d.setXYZ(p,_.x,_.y,_.z)}c.scale(s,l,a),c.translate(0,l/2,0)}else if(i.shape==="torus"){let u=Math.min(.24,i.thickness??.06),h=r?32:i.detail==="high"?64:40;c=new ms(.5-u,u,Math.max(8,h/4),h),c.scale(s,l,a),c.translate(0,l/2,0)}else if(i.shape==="pipe"){let u=(i.path??[]).map(([x,b,w])=>new V(x*s,(b+.5)*l,w*a));if(u.length<2)return null;let h=new co(u,!1,"centripetal"),d=(i.radius??.1)*Math.min(s,a,l),f=new ho(h,Math.min(256,o*(u.length-1)),d,Math.max(8,o/2),!1),p=new ho(h,Math.min(256,o*(u.length-1)),Math.max(d*.05,d-(i.thickness??.025)*Math.min(s,a,l)),Math.max(8,o/2),!1),_=f.toNonIndexed(),m=p.toNonIndexed(),g=[..._.getAttribute("position").array],y=m.getAttribute("position").array;for(let x=0;x<y.length;x+=9)g.push(...y.slice(x,x+3),...y.slice(x+6,x+9),...y.slice(x+3,x+6));c=new Ke,c.setAttribute("position",new we(g,3));for(let x of[f,p,_,m])x.dispose()}else if(i.shape==="bowl"){let u=Math.min(.2,i.thickness??.04);c=new ds([new ke(0,0),new ke(.5,0),new ke(.5,1),new ke(.5-u,1),new ke(.5-u,u),new ke(0,u)],o),c.scale(s,l,a)}else return null;if(c.translate(i.x*e,i.y*n,i.z*t),c.computeVertexNormals(),i.crease_angle!==void 0){let u=c;c=i.crease_angle>0?g0(c,i.crease_angle*Math.PI/180):c.index?c.toNonIndexed():c,i.crease_angle===0&&c.computeVertexNormals(),c!==u&&u.dispose()}return c}var N={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},pe=Ge(5995775,.3),He=Ge(5995775,.17),je=Ge(3662079,.45),Cr=class i{buf;lines;tf;mirrored;constructor(e,t,n){this.buf=e,this.lines=t,this.tf=n,this.mirrored=T0(n)}shape(e,t,n,r,o,s){let a=v0(e,t,n,r);if(!a)return!1;let l=a.index?a.toNonIndexed():a,c=l.getAttribute("position"),u=l.getAttribute("normal"),h=new J(s),d=p=>{let[_,m]=this.tf(c.getX(p),c.getZ(p));return[_,o+c.getY(p),m]},f=p=>h.clone().multiplyScalar(.78+.2*Math.max(0,u.getY(p))+.14*(u.getX(p)*-.55+u.getZ(p)*.83));for(let p=0;p<c.count;p+=3){let _=p+(this.mirrored?2:1),m=p+(this.mirrored?1:2);this.buf.tri(d(p),d(_),d(m),f(p),f(_),f(m))}if(e.edges){let p=new os(a,e.crease_angle||35),_=p.getAttribute("position"),m=e.edges==="glow"?jn:e.edges==="faint"?He:pe;for(let g=0;g<_.count;g+=2){let y=this.tf(_.getX(g),_.getZ(g)),x=this.tf(_.getX(g+1),_.getZ(g+1));this.lines.seg([y[0],o+_.getY(g),y[1]],[x[0],o+_.getY(g+1),x[1]],m)}p.dispose()}return l!==a&&l.dispose(),a.dispose(),!0}rotated(e,t,n){let r=n*pt,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(e+(l-e)*o-(c-t)*s,t+(l-e)*s+(c-t)*o))}box(e,t,n,r,o,s,a,l=a,c=null){if(t-e<1e-4||s-o<1e-4||r-n<1e-4)return;let u=[this.tf(e,o),this.tf(e,s),this.tf(t,s),this.tf(t,o)];Tt(this.buf,dd(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(e,t,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])],c=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])];if(l!==dd(l)&&(l.reverse(),c.reverse()),jm(this.buf,l,c,n,r,o,s),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(e,t,n,r,o,s,a,l=a,c=.03,u=null){if(c=Math.min(c,(t-e)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(e,t,n,r,o,s,a,l,u);this.loft([e+c,t-c,o+c,s-c],[e,t,o,s],n,n+c,a),r-n-2*c>.005&&this.box(e,t,n+c,r-c,o,s,a,a,u),this.loft([e,t,o,s],[e+c,t-c,o+c,s-c],r-c,r,a,l)}lyingCyl(e,t,n,r,o,s,a,l,c=l,u=12,h=null){let d=Math.min(a,o-r)/2;if(d<1e-4||s<1e-4)return;let f=(r+o)/2,p=e==="x"?t:n,_=e==="x"?n:t,m=(g,y)=>e==="x"?this.tf(g,y):this.tf(y,g);if(Qm(this.buf,m,p-s/2,p+s/2,_,f,d,l,c,u),h)for(let g of[p-s/2,p+s/2])for(let y=0;y<u;y++){let x=y/u*Math.PI*2,b=(y+1)/u*Math.PI*2;this.line(m(g,_+Math.sin(x)*d),m(g,_+Math.sin(b)*d),f+Math.cos(x)*d,f+Math.cos(b)*d,h)}}cyl(e,t,n,r,o,s,a=s,l=10,c=null){let u=[];for(let h=0;h<l;h++){let d=h/l*Math.PI*2;u.push(this.tf(e+Math.cos(d)*n,t+Math.sin(d)*n))}if(Tt(this.buf,dd(u),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let h=0;h<l;h++)this.line(u[h],u[(h+1)%l],o,o,c)}seg(e,t,n,r,o,s,a=pe){this.line(this.tf(e,n),this.tf(r,s),t,o,a)}line(e,t,n,r,o){this.lines.seg([e[0],n,e[1]],[t[0],r,t[1]],o,$e)}outline(e,t,n,r){for(let o=0;o<4;o++){let s=e[o],a=e[(o+1)%4];this.line(s,a,n,n,r),this.line(s,s,t,n,r)}}};function T0(i){let e=i(0,0),t=i(1,0),n=i(0,1);return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])<0}function dd(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}function Ir(i,e,t,n,r,o,s=N.metal,a=!1){let l=e/2-o-r,c=t/2-o-r;for(let u of[-1,1])for(let h of[-1,1]){let d=u*l,f=h*c;a?i.loft([d-r*.3,d+r*.3,f-r*.3,f+r*.3],[d-r/2,d+r/2,f-r/2,f+r/2],0,n,s):i.box(d-r/2,d+r/2,0,n,f-r/2,f+r/2,s)}}function qs(i,e,t,n,r,o,s,a=null,l=!1){let c=(t-e)/s;for(let u=1;u<s;u++){let h=e+c*u;i.seg(h,n,o,h,r,o,He)}for(let u=0;u<s;u++){let h=e+c*(u+.5),d=a??r-.08;if(l)i.seg(h-Math.min(.1,c/4),d,o+.012,h+Math.min(.1,c/4),d,o+.012,je);else{let f=s>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(f,d-.08,o+.012,f,d+.08,o+.012,je)}}}function y0(i,e,t,n,r){let o=-e/2,s=e/2,a=-t/2,l=t/2,c=Math.min(.2,e*.12),u=n*.5,h=Math.min(.24,t*.28);Ir(i,e,t,.07,.05,.05,N.wood,!0),i.pad(o,s,.07,u-.08,a+.02,l,N.fabric,N.fabricTop,.04,pe),i.loft([o,s,a,a+h],[o+.01,s-.01,a,a+h*.5],u-.08,n,N.fabric,N.fabricTop,pe),i.pad(o,o+c,u-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,pe),i.pad(s-c,s,u-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,pe);let f=(s-c-(o+c))/r;for(let p=0;p<r;p++){let _=o+c+f*p+.02,m=_+f-.04;i.pad(_,m,u-.08,u+.05,a+h+.02,l-.06,N.cushion,N.cushion,.04),i.loft([_+.01,m-.01,a+h*.55,a+h+.14],[_+.03,m-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,N.cushion)}}function x0(i,e,t,n,r){let o=-e/2,s=e/2,a=-t/2,l=t/2,c=Math.max(.3,Math.min(.95,t*.5,e*(r?.34:.45))),u=Math.min(.24,c*.28),h=Math.min(.2,c*.24),d=n*.5,f=n*.72,p=r?[-1,1]:[-1],_=(v,S)=>i.loft([v-.015,v+.015,S-.015,S+.015],[v-.025,v+.025,S-.025,S+.025],0,.07,N.wood);_(o+.06,a+.06),_(s-.06,a+.06),r||_(s-.06,a+c-.06);for(let v of p)_(v*(e/2-.06),l-.06),_(v*(e/2-c+.06),l-.06);i.pad(o,s,.07,d-.08,a+.02,a+c,N.fabric,N.fabricTop,.04,pe);for(let v of p){let[S,A]=v<0?[o+.02,o+c]:[s-c,s-.02];i.pad(S,A,.07,d-.08,a+c-.02,l,N.fabric,N.fabricTop,.04,pe)}i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],d-.08,n,N.fabric,N.fabricTop,pe);for(let v of p)v<0?i.loft([o,o+u,a+u,l],[o,o+u*.5,a+u,l-.01],d-.08,n,N.fabric,N.fabricTop,pe):i.loft([s-u,s,a+u,l],[s-u*.5,s,a+u,l-.01],d-.08,n,N.fabric,N.fabricTop,pe);for(let v of p){let[S,A]=v<0?[o+u,o+c]:[s-c,s-u];i.pad(S,A,d-.08,f,l-h,l,N.fabric,N.fabricTop,.04,pe)}r||i.pad(s-h,s,d-.08,f,a+.02,a+c-.02,N.fabric,N.fabricTop,.04,pe);let m=o+u,g=r?s-u:s-h,y=Math.max(1,Math.round((g-m)/.62)),x=(g-m)/y;for(let v=0;v<y;v++){let S=m+x*v+.02,A=S+x-.04;i.pad(S,A,d-.08,d+.05,a+u+.02,a+c-.04,N.cushion,N.cushion,.04),i.loft([S+.01,A-.01,a+u*.55,a+u+.14],[S+.03,A-.03,a+u*.4,a+u*.4+.06],d+.03,n*.93,N.cushion)}let b=a+c,w=l-h;if(w-b<.2)return;let M=Math.max(1,Math.round((w-b)/.62)),E=(w-b)/M;for(let v of p)for(let S=0;S<M;S++){let A=b+E*S+.02,k=A+E-.04;v<0?(i.pad(o+u+.02,o+c-.04,d-.08,d+.05,A,k,N.cushion,N.cushion,.04),i.loft([o+u*.55,o+u+.14,A+.01,k-.01],[o+u*.4,o+u*.4+.06,A+.03,k-.03],d+.03,n*.93,N.cushion)):(i.pad(s-c+.04,s-u-.02,d-.08,d+.05,A,k,N.cushion,N.cushion,.04),i.loft([s-u-.14,s-u*.55,A+.01,k-.01],[s-u*.4-.06,s-u*.4,A+.03,k-.03],d+.03,n*.93,N.cushion))}}function H1(i,e,t,n){let r=-t/2,o=t/2,s=-e/2,a=e/2,l=Math.min(.32,n*.36);Ir(i,e,t,.08,.06,.03,N.wood,!0),i.box(s,a,.08,l,r+.06,o,N.wood,N.woodTop,pe),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,N.white,N.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,N.wood,N.woodTop,pe),i.box(s,a,n-.05,n,r,r+.09,N.wood,N.woodTop,He);let c=l+.2,u=r+(t-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,u,o-.01,N.cushion,N.fabricTop,.025,He),i.lyingCyl("x",0,u+.05,c-.02,c+.09,e-.02,.1,N.cushion,N.fabricTop,8);let h=e>1.2?2:1,d=(e-.2)/h;for(let f=0;f<h;f++){let p=s+.1+d*f,_=r+.12,m=Math.min(.42,t*.2),g=.1;i.loft([p+.03+g,p+d-.03-g,_+g*.5,_+m-g*.5],[p+.03,p+d-.03,_,_+m],c,c+.06,N.whiteTop),i.loft([p+.03,p+d-.03,_,_+m],[p+.03+g,p+d-.03-g,_+g*.5,_+m-g*.5],c+.06,c+.12,N.whiteTop,N.whiteTop,He)}}function W1(i,e,t,n){let r=Math.min(.46,n*.52);Ir(i,e,t,r-.04,.035,.02,N.wood,!0),i.box(-e/2,e/2,r-.04,r,-t/2,t/2,N.wood,N.woodTop,pe),i.pad(-e/2+.02,e/2-.02,r,r+.04,-t/2+.05,t/2-.03,N.cushion,N.cushion,.015),i.loft([-e/2,e/2,-t/2+.02,-t/2+.07],[-e/2+.02,e/2-.02,-t/2,-t/2+.03],r,n,N.wood,N.woodTop,pe)}function X1(i,e,t,n){Ir(i,e,t,n-.04,.06,.05,N.wood,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,N.wood,N.woodTop,je),i.box(-e/2+.08,e/2-.08,n-.1,n-.04,-t/2+.08,t/2-.08,N.body)}function K1(i,e,t,n){let r=-e/2,o=e/2;i.box(r,o,n-.035,n,-t/2,t/2,N.wood,N.woodTop,pe),i.box(r,r+.03,0,n-.035,-t/2+.03,t/2-.03,N.metal);let s=Math.min(.42,e*.32);i.box(o-s,o,0,n-.035,-t/2+.03,t/2-.02,N.body,N.bodyTop,pe);let a=t/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,He);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,je);i.box(-.3,.3,n+.08,n+.42,-t/2+.08,-t/2+.11,N.dark,N.dark,je),i.box(-.03,.03,n,n+.1,-t/2+.09,-t/2+.13,N.metal)}function rr(i,e,t,n,r,o=null,s=!1){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,N.body,N.bodyTop,pe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,N.dark),qs(i,-e/2,e/2,.08,n,t/2-.02,r,o,s)}function Y1(i,e,t,n){i.box(-e/2,-e/2+.025,0,n,-t/2,t/2,N.wood,N.woodTop,pe),i.box(e/2-.025,e/2,0,n,-t/2,t/2,N.wood,N.woodTop,pe),i.box(-e/2+.025,e/2-.025,0,n,-t/2,-t/2+.015,N.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-e/2+.025,e/2-.025,a,a+.025,-t/2+.015,t/2,N.wood,N.woodTop,He),s<o){let l=-e/2+.025+.04,c=s*3;for(;l<e/2-.025-.12;){let u=.03+c*7%5*.008,h=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+h,-t/2+.04,t/2-.05,c%3?N.fabric:N.cushion,N.fabricTop),l+=u+.006,c++}}}}function q1(i,e,t,n){let r=Math.max(1,Math.round(e/.6));rr(i,e,t-.02,n-.04,r,n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,N.whiteTop,N.whiteTop,pe)}function Z1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,N.white,N.whiteTop,pe);let r=n*.62;i.seg(-e/2,r,t/2,e/2,r,t/2,He);let o=e/2-.06;i.seg(o,r+.08,t/2+.015,o,r+.4,t/2+.015,je),i.seg(o,r-.4,t/2+.015,o,r-.08,t/2+.015,je)}var fd=(i,e)=>Ge(parseInt(i.slice(1),16),e).getHex();function $1(i,e,t,n,r,o){let s=fd(o[0],.55),a=fd(o[1],.8),l=fd(o[1],1);if(r==="bag"){i.loft([-e*.42,e*.42,-t*.4,t*.4],[-e/2,e/2,-t/2,t/2],0,n*.55,s,s,He),i.loft([-e/2,e/2,-t/2,t/2],[-e*.12,e*.12,-t*.12,t*.12],n*.55,n*.9,a,a,He),i.cyl(0,0,Math.min(e,t)*.1,n*.9,n,l,l,8);return}if(r==="caddy"){i.loft([-e*.45,e*.45,-t*.45,t*.45],[-e/2,e/2,-t/2,t/2],0,n*.85,s,s,pe),i.box(-e/2,e/2,n*.85,n*.95,-t/2,t/2,a,l,He),i.box(-e*.42,-e*.36,n*.95,n,-.01,.01,a),i.box(e*.36,e*.42,n*.95,n,-.01,.01,a),i.box(-e*.42,e*.42,n*.98,n,-.01,.01,a);return}if(r==="underground"){let h=Math.min(e,t)*.32;i.cyl(0,0,h,0,n*.9,s,s,16,pe),i.cyl(0,0,h*1.08,n*.9,n,a,l,16,He),i.box(-h*.5,h*.5,n*.62,n*.8,h*.7,h*1.02,N.dark),i.box(-e/2,e/2,0,.02,-t/2,t/2,N.metal,N.metal,He);return}if(r==="bin1100"){for(let d of[-1,1])for(let f of[-1,1])i.cyl(d*(e/2-.12),f*(t/2-.12),.05,0,.14,N.dark,N.dark,8);i.loft([-e/2+.06,e/2-.06,-t/2+.06,t/2-.08],[-e/2,e/2,-t/2,t/2],.14,n-.1,s,s,pe),i.loft([-e/2,e/2,-t/2,0],[-e/2,e/2,-t/2,0],n-.1,n,a,l,He),i.loft([-e/2,e/2,0,t/2],[-e/2,e/2,0,t/2-.05],n-.1,n-.03,a,l,He);return}let c=Math.min(.2,n*.19),u=-t/2;for(let h of[-1,1])i.lyingCyl("x",h*(e/2-.05),u+c/2+.01,0,c,.05,c,N.dark,N.metal,12);i.loft([-e*.42,e*.42,u+.07,t/2-.05],[-e/2+.01,e/2-.01,u+.05,t/2-.01],.03,n-.05,s,s,pe),i.box(-e/2,e/2,n-.05,n,u+.03,t/2,a,l,He),i.box(-e*.42,e*.42,n-.1,n-.02,u,u+.04,a,l),r==="multi"&&(i.seg(-e/2,n+.002,(u+t/2)/2,e/2,n+.002,(u+t/2)/2,je),i.seg(0,n*.25,t/2-.01,0,n-.06,t/2-.01,He))}function J1(i,e,t,n,r){let o=N.metal,s=Ge(N.metal,1.25).getHex(),a=Ge(N.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,e*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,N.wood,N.woodTop,He),i.box(-e/2,e/2,n-c,n-c*.45,-t/2,t/2,o,s,pe),i.lyingCyl("z",0,0,n-c*.9,n,t,e,o,s,14,pe),i.box(e/2,e/2+.015,n-c*.4,n+.08,-t*.1,-t*.04,9051164),i.box(e/2,e/2+.015,n+.02,n+.08,-t*.04,t*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-e*.2,e*.2,0,n-l,-t*.2,t*.2,N.dark,N.dark,He),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,t*.9,.16,o,s,12,He),i.loft([-e/2,e/2,-t/2,t/2],[-e/2,e/2,-t/2,t/2-.05],n-l,n,o,s,pe),i.box(-e*.32,e*.32,n-.1,n-.08,t/2-.05,t/2-.04,N.dark);return}if(r==="parcel"){i.box(-e/2,e/2,0,n,-t/2,t/2,o,s,pe),i.box(-e/2+.04,e/2-.04,.08,n*.72,t/2,t/2+.012,a,s,He),i.box(-e*.3,e*.3,n*.82,n*.86,t/2,t/2+.01,N.dark);return}if(r==="bank"){i.box(-e/2,e/2,0,n,-t/2,t/2,o,s,pe);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let u=-e/2+e/3*l+.015,h=n/2*c+.015;i.box(u,u+e/3-.03,h,h+n/2-.03,t/2,t/2+.01,a,s,He),i.box(u+.04,u+e/3-.07,h+n/2-.09,h+n/2-.07,t/2+.01,t/2+.014,N.dark)}return}i.box(-e/2,e/2,0,n*.8,-t/2,t/2,o,s,pe),i.loft([-e/2,e/2,-t/2,t/2+.02],[-e/2,e/2,-t/2,-t/2+.02],n*.8,n,o,s,pe),i.box(-e*.36,e*.36,n*.66,n*.7,t/2,t/2+.008,N.dark)}function j1(i,e,t,n){let r=t/2-A0;i.box(-e/2,e/2,.02,n,-t/2,r,N.body,N.bodyTop,pe),i.box(-e/2+.05,e/2-.05,0,.02,-t/2+.05,r-.05,N.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-e/2+.03,o,r+.001,-.03,o,r+.001,He),i.seg(.03,o,r+.001,e/2-.03,o,r+.001,He))}var A0=.06;function E0(i,e,t,n){let r=i.p.length;Q1(i,e,t,n),Rn(i.p,r,e,t+e.h/2)}function Q1(i,e,t,n){let r=e.rotation*pt,o=Math.cos(r),s=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(T,P,C)=>[e.x+T*o-C*s,P,e.z+T*s+C*o],c=(T,P,C,D,B)=>{i.tri(T,P,C,B),i.tri(T,C,D,B),i.tri(T,C,P,B),i.tri(T,D,C,B)},u=(T,P,C,D)=>{let B=l(T[0],T[1],T[2]),L=l(P[0],P[1],P[2]),O=L[0]-B[0],U=L[1]-B[1],Z=L[2]-B[2],K=Math.hypot(O,U,Z)||1,Q=[O/K,U/K,Z/K],ee=Math.abs(Q[1])>.9?[1,0,0]:[0,1,0],ae=[Q[1]*ee[2]-Q[2]*ee[1],Q[2]*ee[0]-Q[0]*ee[2],Q[0]*ee[1]-Q[1]*ee[0]],H=Math.hypot(ae[0],ae[1],ae[2])||1,W=[ae[0]/H*C,ae[1]/H*C,ae[2]/H*C],oe=[Q[1]*W[2]-Q[2]*W[1],Q[2]*W[0]-Q[0]*W[2],Q[0]*W[1]-Q[1]*W[0]],le=[[1,1],[-1,1],[-1,-1],[1,-1]],Y=(se,ge)=>[se[0]+W[0]*le[ge][0]+oe[0]*le[ge][1],se[1]+W[1]*le[ge][0]+oe[1]*le[ge][1],se[2]+W[2]*le[ge][0]+oe[2]*le[ge][1]];for(let se=0;se<4;se++){let ge=(se+1)%4;i.tri(Y(B,se),Y(L,se),Y(L,ge),D),i.tri(Y(B,se),Y(L,ge),Y(B,ge),D)}},h=(T,P,C,D,B,L,O,U)=>{c(l(T,D,B),l(P,D,B),l(P,D,L),l(T,D,L),U),c(l(T,C,L),l(P,C,L),l(P,D,L),l(T,D,L),O),c(l(T,C,B),l(P,C,B),l(P,C,L),l(T,C,L),O),c(l(T,C,B),l(T,C,L),l(T,D,L),l(T,D,B),O),c(l(P,C,B),l(P,C,L),l(P,D,L),l(P,D,B),O)},d=new J(N.body),f=new J(N.bodyTop),p=new J(N.accent),_=new J(1929098),m=new J(995141),g=(T,P,C,D,B)=>{let L=(O,U,Z)=>[O[0]+(U[0]-O[0])*Z,O[1]+(U[1]-O[1])*Z,O[2]+(U[2]-O[2])*Z];for(let O=0;O<B;O++){let U=L(T,P,O/B),Z=L(T,P,(O+1)/B),K=L(C,D,(O+1)/B),Q=L(C,D,O/B);c(l(U[0],U[1],U[2]),l(Z[0],Z[1],Z[2]),l(K[0],K[1],K[2]),l(Q[0],Q[1],Q[2]),O%2?_:m)}},y=e.w/2,x=-e.d/2,b=Math.max(.12,Math.min(.3,e.h)),w=Math.max(4,Math.round(e.w/.3)),M=(e.awning_pitch??12)*Math.PI/180,E=(T,P)=>{e.awning_valance!==!1&&g([-y+.04,T,P+.01],[y-.04,T,P+.01],[-y+.04,T-.2,P+.01],[y-.04,T-.2,P+.01],w)},v=e.variant??"arm";if(v==="side"){let T=t,P=.05,C=0,D=-y+.08+a*(e.w-.16);h(-y,-y+.1,0,T+.05,C-.05,C+.05,d,f),h(y-.06,y,0,T+.05,C-.03,C+.03,d,f),a>.01&&g([-y+.1,T,C],[-y+.1,P,C],[D,T,C],[D,P,C],Math.max(4,Math.round((T-P)/.3))),u([D,P,C],[D,T,C],.02,p);return}if(v==="vertical"){let T=x,P=Math.min(e.d/2,x+b);h(-y,y,t,t+b,T,P,d,f);let C=(T+P)/2;for(let B of[-y+.02,y-.02])u([B,.02,C],[B,t,C],.02,p);let D=t-a*Math.max(0,t-.04);a>.01&&g([-y+.04,t,C],[y-.04,t,C],[-y+.04,D,C],[y-.04,D,C],w),u([-y+.03,D,C],[y-.03,D,C],.025,p);return}if(v==="pergola"){let T=e.d/2-.05,P=t+b,C=P-(T-x)*Math.tan(M);h(-y,y,t,P,x,x+b,d,f);for(let L of[-y+.05,y-.05])u([L,P,x+b],[L,C,T],.035,p),u([L,0,T],[L,C,T],.045,d);u([-y+.05,C,T],[y-.05,C,T],.035,p);let D=x+b+a*(T-x-b),B=P-(D-x)*Math.tan(M)+.04;a>.01&&g([-y+.08,P+.04,x+b],[y-.08,P+.04,x+b],[-y+.08,B,D],[y-.08,B,D],w),u([-y+.08,B,D],[y-.08,B,D],.025,p);return}let S=x,A=x+b;h(-y,y,t,t+b,S,A,d,f);let k=[A-.02,t+b*.35];if(v==="drop"){let T=Math.max(.3,e.d-b),P=[A,k[1]-T],C=a*(Math.PI/2+M),D=[P[0]+Math.sin(C)*T,P[1]+Math.cos(C)*T];for(let B of[-y+.08,y-.08])u([B,P[1],P[0]],[B,D[1],D[0]],.018,p);a>.01&&g([-y+.04,k[1],k[0]],[y-.04,k[1],k[0]],[-y+.04,D[1],D[0]],[y-.04,D[1],D[0]],w),u([-y+.02,D[1],D[0]],[y-.02,D[1],D[0]],.03,p),a>.05&&E(D[1],D[0]);return}let F=Math.max(0,e.d-b)*a,R=[k[0]+F,k[1]-F*Math.tan(M)];if(F>.01){g([-y+.04,k[1],k[0]],[y-.04,k[1],k[0]],[-y+.04,R[1],R[0]],[y-.04,R[1],R[0]],w);let T=Math.max(.3,(e.d-b)/2+.05);for(let P of[-1,1]){let C=P*(y-.12),D=[C,t+.02,A-.04],B=[C,R[1]-.02,R[0]],L=Math.hypot(B[2]-D[2],B[1]-D[1]),O=Math.sqrt(Math.max(0,T*T-(L/2)**2)),U=[C-P*Math.min(O,y-.15),(D[1]+B[1])/2,(D[2]+B[2])/2];u(D,U,.018,p),u(U,B,.018,p)}}u([-y+.02,R[1],R[0]],[y-.02,R[1],R[0]],.03,p),F>.05&&E(R[1],R[0])}function R0(i,e,t,n,r){let o=i.p.length;eM(i,e,t,n,r),e.mirror&&k0(i,o),Rn(i.p,o,e,t+e.h/2)}function eM(i,e,t,n,r){let o=e.rotation*pt,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(b,w)=>[e.x+l*b*s-w*a,e.z+l*b*a+w*s],u=t+.05,h=t+e.h-.02,d=new J(.75,.1,.14),f=new J(N.dark),p=new J(N.accent),_=e.w/2-.006,m=(b,w,M)=>{let E=M/g,v=new J(2043212).lerp(d,E),S=new J(N.body).lerp(d,E*.8),A=Math.cos(M),k=Math.sin(M),F=(P,C)=>c(b+w*(P*A-C*k),e.d/2+P*k+C*A),R=(P,C,D,B)=>{let[L,O,U,Z]=P;i.tri([L[0],C,L[1]],[O[0],C,O[1]],[U[0],D,U[1]],B),i.tri([L[0],C,L[1]],[U[0],D,U[1]],[Z[0],D,Z[1]],B)},T=(P,C,D,B,L,O,U,Z=U)=>{let K=[F(P,O),F(C,O),F(C,L),F(P,L)];R([K[0],K[1],K[1],K[0]],D,B,Z),R([K[3],K[2],K[2],K[3]],D,B,U),R([K[0],K[3],K[3],K[0]],D,B,U),R([K[1],K[2],K[2],K[1]],D,B,U),R([K[0],K[1],K[2],K[3]],B,B,U),R([K[3],K[2],K[1],K[0]],D,D,U)};return T(0,_,u,h,-A0,0,S,v),T(_-.05,_-.03,t+e.h*.45,t+e.h*.75,.005,.025,p),T},g=1.83;m(-e.w/2,1,n*g)(.12,.3,t+e.h*.5,t+e.h*.68,.001,.005,f),m(e.w/2,-1,r*g)(.06,_-.06,t+e.h*.52,t+e.h*.86,.001,.005,f)}function tM(i,e,t,n){rr(i,e,t-.02,n-.04,1,n-.24,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,N.dark,N.dark,pe);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*e/.6,l=o*t/.62;i.cyl(a,l,s,n,n+.004,N.dark,1451583,12,je)}}function nM(i,e,t,n){rr(i,e,t-.02,n-.04,Math.max(1,Math.round(e/.45)),n-.2);let r=Math.min(.5,e-.2);i.box(-e/2,-r/2,n-.04,n,-t/2,t/2,N.whiteTop,N.whiteTop,pe),i.box(r/2,e/2,n-.04,n,-t/2,t/2,N.whiteTop,N.whiteTop,pe),i.box(-r/2,r/2,n-.04,n,-t/2,-t/2+.1,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.04,n,t/2-.08,t/2,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-t/2+.1,t/2-.08,N.metal,N.metal,je),i.cyl(0,-t/2+.05,.02,n,n+.28,N.metal,N.metal,8),i.box(-.015,.015,n+.24,n+.28,-t/2+.05,-t/2+.22,N.metal)}function iM(i,e,t,n){i.box(-e/2,e/2,0,n-.02,-t/2,t/2,N.white,N.whiteTop,pe),i.box(-e/2,e/2,n-.02,n,-t/2,-t/2+.07,N.whiteTop),i.box(-e/2,e/2,n-.02,n,t/2-.07,t/2,N.whiteTop),i.box(-e/2,-e/2+.07,n-.02,n,-t/2+.07,t/2-.07,N.whiteTop),i.box(e/2-.07,e/2,n-.02,n,-t/2+.07,t/2-.07,N.whiteTop),i.box(-e/2+.07,e/2-.07,n-.03,n-.02,-t/2+.07,t/2-.07,N.glass,N.glass,je),i.cyl(-e/2+.04,0,.02,n,n+.12,N.metal,N.metal,8)}function rM(i,e,t,n){i.box(-e/2,e/2,0,.05,-t/2,t/2,N.whiteTop,N.whiteTop,pe),i.cyl(0,0,.04,.05,.052,N.metal,N.metal,8);for(let[r,o,s,a]of[[-e/2,t/2,e/2,t/2],[e/2,-t/2,e/2,t/2]])i.seg(r,.05,o,s,.05,a,je),i.seg(r,n,o,s,n,a,je),i.seg(s,.05,a,s,n,a,je);i.cyl(-e/2+.06,-t/2+.06,.015,.05,n-.05,N.metal,N.metal,6),i.cyl(-e/2+.2,-t/2+.2,.1,n-.08,n-.06,N.metal,N.metal,12,je)}function oM(i,e,t,n){let r=Math.min(.18,t*.3);i.box(-e/2,e/2,.45,n,-t/2,-t/2+r,N.white,N.whiteTop,pe),i.box(-e*.3,e*.3,0,.36,-t/2+r-.02,t/2-.12,N.white,N.whiteTop),i.cyl(0,t/2-.26,Math.min(e/2,.19),.36,.41,N.white,N.whiteTop,12,pe),i.box(-e/2+.02,e/2-.02,.41,.43,-t/2+r,-t/2+r+.05,N.whiteTop)}function sM(i,e,t,n){rr(i,e,t-.02,n-.12,e>.8?2:1,n-.3),i.box(-e/2,e/2,n-.12,n,-t/2,t/2,N.white,N.whiteTop,pe),i.box(-e/2+.07,e/2-.07,n-.005,n,-t/2+.12,t/2-.06,N.glass,N.glass,je),i.cyl(0,-t/2+.06,.018,n,n+.2,N.metal,N.metal,8),i.box(-e/2+.04,e/2-.04,n+.35,n+1,-t/2,-t/2+.02,N.glass,N.glass,je)}function aM(i,e,t,n){rr(i,e,t,n,Math.max(2,Math.round(e/.6)),n*.55,!0);let r=Math.min(e*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-t/2+.08,-t/2+.24,N.metal),i.box(-.02,.02,n+.02,n+.12,-t/2+.14,-t/2+.18,N.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-t/2+.12,-t/2+.16,N.dark,N.dark,je)}function lM(i,e,t,n){let r=Math.min(e,t)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,N.pot,N.pot,10,pe),i.cyl(0,0,r*.08,o,n*.55,N.wood,N.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),u=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-o)*.16,N.plant,N.plantTop,8,a===s-1?He:null)}}function cM(i,e,t){i.box(-e/2,e/2,0,.012,-t/2,t/2,N.fabric,N.fabricTop);let n=Math.min(.12,Math.min(e,t)*.08);for(let[r,o,s,a]of[[-e/2+n,-t/2+n,e/2-n,-t/2+n],[e/2-n,-t/2+n,e/2-n,t/2-n],[e/2-n,t/2-n,-e/2+n,t/2-n],[-e/2+n,t/2-n,-e/2+n,-t/2+n]])i.seg(r,.014,o,s,.014,a,pe)}function uM(i,e,t,n){let r=Math.max(3,Math.round(n/.18)),o=n/r,s=t/r;for(let u=0;u<r;u++){let h=t/2-s*u,d=h-s,f=o*(u+1);i.box(-e/2,e/2,0,f,d,h,N.wood,N.woodTop),i.seg(-e/2,f,h,e/2,f,h,pe)}i.seg(-e/2,0,t/2,-e/2,o,t/2,pe);for(let u of[-e/2,e/2])i.seg(u,o,t/2,u,n,-t/2+s,He);let a=.9,l=e/2-.03,c=Math.max(1,r-4);i.seg(l,o+a,t/2-s/2,l,o*c+a,t/2-s*(c-.5),je);for(let u=0;u<c;u+=3){let h=t/2-s*(u+.5),d=o*(u+1);i.seg(l,d,h,l,d+a,h,He)}}function hM(i,e,t,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:u}=km(e,t,n),h=-e/2,d=-e/2+a,f=e/2-a,p=e/2,_=-t/2+l;for(let E=0;E<o;E++){let v=t/2-c*E,S=u*(E+1);i.box(h,d,0,S,v-c,v,N.wood,N.woodTop),i.seg(h,S,v,d,S,v,pe)}i.seg(h,0,t/2,h,u,t/2,pe);let m=u*r,g=.2;i.box(h,d,0,m,-t/2,_,N.wood,N.woodTop),i.box(d,p,Math.max(0,m-g),m,-t/2,_,N.wood,N.woodTop),i.seg(h,m,_,d,m,_,pe);for(let E=0;E<s;E++){let v=_+c*E,S=u*(r+1+E);i.box(f,p,Math.max(0,S-u-g),S,v,v+c,N.wood,N.woodTop),i.seg(f,S,v,p,S,v,pe)}i.seg(h,u,t/2,h,m,_,He),i.seg(p,m,_,p,n,_+c*(s-1),He);let y=.9,x=d-.03,b=f+.03,w=_-.03,M=Math.max(1,s-4);i.seg(x,u+y,t/2-c/2,x,m+y,w,je),i.seg(x,m+y,w,b,m+y,w,je),i.seg(b,m+y,w,b,u*(r+M)+y,_+c*(M-.5),je);for(let E=0;E<o;E+=3){let v=t/2-c*(E+.5);i.seg(x,u*(E+1),v,x,u*(E+1)+y,v,He)}for(let E of[x,b])i.seg(E,m,w,E,m+y,w,He);for(let E=2;E<M;E+=3){let v=_+c*(E+.5);i.seg(b,u*(r+1+E),v,b,u*(r+1+E)+y,v,He)}}function dM(i,e,t,n){Ir(i,e,t,.12,.03,.04,N.metal),i.box(-e/2,e/2,.12,n,-t/2,t/2-.02,N.wood,N.woodTop,pe),qs(i,-e/2,e/2,.12,n,t/2-.02,Math.max(2,Math.round(e/.45)),n-.1,!0)}function fM(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2-.02,N.wood,N.woodTop,pe),i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.06,N.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=t/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-e/2,a,o,e/2,a,o,He)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,je)}}function pM(i,e,t,n){i.box(-e/2,e/2,0,.45,-t/2,t/2,N.wood,N.woodTop,pe),qs(i,-e/2,e/2,.02,.45,t/2,Math.max(2,Math.round(e/.5)),.38,!0),i.box(-e/2,e/2,.45,n,-t/2,-t/2+.03,N.body,N.bodyTop,pe),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,N.wood,N.woodTop,pe);let r=Math.max(2,Math.round(e/.25));for(let o=0;o<r;o++){let s=-e/2+e/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-t/2+.03,-t/2+.1,N.metal,N.metal)}}function w0(i,e,t,n,r){let s=Math.min(.5,r?t*.4:t),a=.08;i.box(-e/2,e/2,0,.45-.06,-t/2,-t/2+s,N.wood,N.woodTop,pe),i.box(-e/2,e/2,0,n,-t/2,-t/2+a,N.wood,N.woodTop,pe),i.box(-e/2+(r?s:.02),e/2-.02,.45-.06,.45+.02,-t/2+a,-t/2+s,N.cushion,N.cushion,He),r&&(i.box(-e/2,-e/2+s,0,.45-.06,-t/2+s,t/2,N.wood,N.woodTop,pe),i.box(-e/2,-e/2+a,0,n,-t/2+a,t/2,N.wood,N.woodTop,pe),i.box(-e/2+a,-e/2+s,.45-.06,.45+.02,-t/2+a,t/2-.02,N.cushion,N.cushion,He))}function mM(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.8,0,.02,N.metal,N.metal,12),i.cyl(0,0,.025,.02,n-.05,N.metal,N.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,N.metal,N.metal,12,He),i.cyl(0,0,r,n-.05,n,N.cushion,N.fabricTop,14,pe)}function gM(i,e,t,n){let r=Math.min(e,t)/2;i.box(-r,r,.04,.08,-.03,.03,N.metal),i.box(-.03,.03,.04,.08,-r,r,N.metal),i.cyl(0,0,.06,.02,.1,N.dark,N.dark,8),i.cyl(0,0,.025,.1,.44,N.metal,N.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,N.fabric,N.cushion,pe),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,N.fabric,N.fabricTop,pe),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,N.metal)}function _M(i,e,t,n){Ir(i,e,t,.08,.04,.05,N.wood),i.box(-e/2,e/2,.08,n,-t/2,t/2,N.fabric,N.cushion,pe)}function bM(i,e,t,n){i.box(-e/2,e/2,1.45,1.45+n,-t/2,t/2-.02,N.body,N.bodyTop,pe),qs(i,-e/2,e/2,1.45,1.45+n,t/2-.02,Math.max(1,Math.round(e/.5)),1.45+.08)}function vM(i,e,t,n){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,N.body,N.bodyTop,pe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,N.dark);let r=t/2-.02;i.box(-e/2+.03,e/2-.03,.85,1.45,r,r+.01,N.dark,N.dark,je),i.seg(-e/2+.08,1.4,r+.02,e/2-.08,1.4,r+.02,je);for(let o of[.85,1.45])i.seg(-e/2,o,r,e/2,o,r,He);i.seg(e/2-.06,.5,r+.012,e/2-.06,.7,r+.012,je),i.seg(e/2-.06,1.6,r+.012,e/2-.06,1.8,r+.012,je)}function yM(i,e,t,n){let r=t-.3;i.box(-e/2+.05,e/2-.05,.08,n-.04,-t/2+.02,-t/2+r,N.body,N.bodyTop,pe),i.box(-e/2+.07,e/2-.07,0,.08,-t/2+.04,-t/2+r-.04,N.dark),qs(i,-e/2+.05,e/2-.05,.08,n-.04,-t/2+r,Math.max(2,Math.round(e/.6)),n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,N.whiteTop,N.whiteTop,pe)}function xM(i,e,t,n){i.box(-e/2,e/2,.02,n-.04,-t/2,t/2-.02,N.body,N.bodyTop,pe),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,N.dark),i.seg(-e/2+.08,n-.12,t/2-.008,e/2-.08,n-.12,t/2-.008,je),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,N.whiteTop,N.whiteTop,pe)}function M0(i,e,t,n,r){i.box(-e/2,e/2,0,n,-t/2,t/2-.02,N.white,N.whiteTop,pe);let o=t/2-.012;i.seg(-e/2,n-.14,o,e/2,n-.14,o,He),i.seg(e/2-.16,n-.07,o,e/2-.08,n-.07,o,je);let s=(n-.14)/2+.04,a=Math.min(e*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,s+Math.sin(u)*a,o,Math.cos(h)*a,s+Math.sin(h)*a,o,je),r||i.seg(Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,Math.cos(h)*a*.72,s+Math.sin(h)*a*.72,o,He)}}function wM(i,e,t,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(e/2)-(s>0?.05:0),s*(e/2)+(s<0?.05:0),0,n,a*(t/2)-(a>0?.05:0),a*(t/2)+(a<0?.05:0),N.wood,N.woodTop);for(let s of[.25,n-.55])i.box(-e/2,e/2,s,s+.08,-t/2,t/2,N.wood,N.woodTop,pe),i.box(-e/2+.04,e/2-.04,s+.08,s+.24,-t/2+.05,t/2-.05,N.white,N.whiteTop,He),i.box(-e/2+.05,e/2-.05,s+.24,s+.33,-t/2+.08,-t/2+.4,N.whiteTop,N.whiteTop);i.box(-e/2,e/2,n-.2,n-.15,t/2-.05,t/2,N.wood,N.woodTop);let o=e/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,t/2+.02,s,n-.15,t/2+.02,pe);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,t/2+.02,o+.18,s,t/2+.02,He)}function MM(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.4,0,.03,N.metal,N.metal,12),i.cyl(0,0,.05,.03,n-.04,N.wood,N.wood,8),i.cyl(0,0,r,n-.04,n,N.wood,N.woodTop,20,pe)}function SM(i,e,t,n){Ir(i,e,t,n-.03,.04,.03,N.wood),i.box(-e/2,e/2,n-.03,n,-t/2,t/2,N.wood,N.woodTop,pe),i.box(-e/2+.05,e/2-.05,.1,.13,-t/2+.05,t/2-.05,N.body,N.bodyTop,He)}function TM(i,e,t,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-t/2,-t/2+.03,N.metal),i.box(-e/2,e/2,r,r+n,-t/2+.03,t/2,N.dark,N.dark,je)}function AM(i,e,t,n){let r=md;i.box(-e/2+.05,-e/2+.08,0,r,-t/2,-t/2+.03,N.metal),i.box(e/2-.08,e/2-.05,0,r,-t/2,-t/2+.03,N.metal),i.box(-e/2,e/2,r,r+n,-t/2+.02,t/2,N.white,N.whiteTop,pe);let o=Math.max(3,Math.round(e/.1));for(let s=1;s<o;s++){let a=-e/2+e/o*s;i.seg(a,r+.03,t/2+.002,a,r+n-.03,t/2+.002,He)}}function EM(i,e,t,n){let r=gd;i.box(-e/2,e/2,r+.07,r+n,-t/2,t/2,N.white,N.whiteTop,pe),i.box(-e/2,e/2,r,r+.07,-t/2,t/2-.05,N.white,N.white,pe),i.box(-e/2+.04,e/2-.04,r+.012,r+.06,t/2-.05,t/2-.02,N.dark),i.seg(-e/2+.03,r+n*.55,t/2+.002,e/2-.03,r+n*.55,t/2+.002,He),i.seg(e/2-.14,r+n*.75,t/2+.002,e/2-.07,r+n*.75,t/2+.002,je)}function Io(i,e,t,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,r,e+Math.cos(l)*n,t+Math.sin(l)*n,r,je)}}function RM(i,e,t,n,r){let s=t/2;if(r==="slim"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,N.dark,N.body,pe),i.seg(-e*.25,1.1+n*.15,s+.004,-e*.25,1.1+n*.85,s+.004,je),i.box(-e*.1,e*.3,1.1+n*.7,1.1+n*.85,s,s+.005,N.dark);return}if(r==="hybrid"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,N.white,N.whiteTop,pe),Io(i,0,1.1+n*.66,Math.min(e,n)*.22,s+.004),i.seg(-e*.08,1.1+n*.66,s+.005,e*.08,1.1+n*.66,s+.005,je);for(let a of[-1,1])Io(i,a*e*.22,1.1+n*.2,Math.min(e,n)*.1,-t/2-.002,12);return}i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,N.white,N.whiteTop,pe),i.box(-e*.28,e*.28,1.1+n*.58,1.1+n*.82,t/2,t/2+.006,N.dark),i.seg(-e*.3,1.1+n*.45,t/2+.004,e*.3,1.1+n*.45,t/2+.004,je);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*e/2+a*.002,1.1+n*l/6,-t/2+.03,a*e/2+a*.002,1.1+n*l/6,t/2-.03,He)}function kM(i,e,t,n){let r=Math.min(t,n)*.32;i.box(-e/2,e/2,0,.03,-t/2,t/2,N.dark),i.box(-e/2,e*.1,.05,.05+r*2,-r,r,N.metal,N.metal,pe);for(let s of[-e*.4,-e*.25,-e*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,He);i.cyl(e*.28,0,Math.min(e*.2,t*.45),.03,n*.82,N.dark,N.body,14,pe),i.cyl(e*.28,0,Math.min(e*.2,t*.45)*.9,n*.82,n,N.glass,N.glass,14);let o=Math.min(e*.2,t*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(e*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,e*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,je)}}function PM(i,e,t,n,r){let o=Math.min(e,t)/2;if(i.cyl(0,0,o*.95,0,n*.08,N.dark,N.dark,16),i.cyl(0,0,o,n*.08,n*.78,N.dark,N.body,18,pe),i.cyl(0,0,o*.75,n*.78,n*.84,N.dark,N.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,N.dark,N.metal,pe),Io(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,N.dark,N.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,N.dark,N.metal,16,pe);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,je)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,N.dark,N.body)}function CM(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2,N.white,N.whiteTop,pe);for(let a of[-e*.4,e*.4])i.box(a-.03,a+.03,0,.06,-t/2+.02,t/2-.02,N.dark);let r=Math.min(n*.38,e*.3),o=-e*.15,s=n*.53;Io(i,o,s,r,t/2+.004,24),Io(i,o,s,r*.55,t/2+.004,16),i.seg(o-r,s,t/2+.005,o+r,s,t/2+.005,He),i.seg(o,s-r,t/2+.005,o,s+r,t/2+.005,He),i.box(e*.22,e*.42,n*.62,n*.8,t/2,t/2+.006,N.dark),i.seg(e*.25,n*.71,t/2+.008,e*.39,n*.71,t/2+.008,je);for(let a=1;a<8;a++)i.seg(e/2+.002,n*(.1+a*.1),-t/2+.03,e/2+.002,n*(.1+a*.1),t/2-.03,He)}function IM(i,e,t,n){i.box(-e/2,e/2,.9,.9+n*.45,-t/2,t/2,N.white,N.whiteTop,pe);for(let o of[-1,1])Io(i,o*e*.22,.9+n*.22,Math.min(e,n)*.09,t/2+.004,12);i.seg(-e*.35,.9+n*.4,t/2+.004,e*.35,.9+n*.4,t/2+.004,je);for(let o of[-1,1])i.box(o*e*.25-e*.18,o*e*.25+e*.18,0,n*.5,-t/2,t/2,N.white,N.glass,He)}function FM(i,e,t,n){let r=Am-n*.4;i.box(-e/2,e/2,r+n*.25,r+n*.6,-t*.25,t*.25,N.metal,N.metal,pe),i.box(-e*.12,e*.12,r+n*.6,r+n*.8,-t*.12,t*.12,N.dark),i.box(-e*.1,e*.45,r+n*.8,r+n,-t*.15,t*.15,N.accent,N.accent)}function LM(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,N.dark,N.body,pe),i.box(-e/2-.01,e/2+.01,n,n+.03,-t/2-.01,t/2+.01,N.dark,N.body),i.seg(-e/2,n+.032,t/2+.01,e/2,n+.032,t/2+.01,je),i.seg(-e*.3,n*.55,t/2+.003,e*.3,n*.55,t/2+.003,He)}function DM(i,e,t,n){i.box(-e/2,e/2,1,1+n,-t/2,t/2,N.dark,N.body,pe);let o=Math.min(e,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,t/2+.003,Math.cos(u)*o,s+Math.sin(u)*o,t/2+.003,je)}i.box(-.015,.015,1-.35,1,t/2-.03,t/2,N.dark),i.box(-.06,.06,1-.42,1-.35,t/2-.05,t/2,N.dark,N.body)}function zM(i,e,t,n){i.box(-e/2,e/2,.4,.4+n,-t/2,t/2,N.white,N.whiteTop,pe),i.seg(-e/2+.025,.4+.025,t/2+.003,-e/2+.025,.4+n-.025,t/2+.003,He),i.seg(-e/2+.025,.4+n-.025,t/2+.003,e/2-.025,.4+n-.025,t/2+.003,He),i.box(e/2-.06,e/2-.035,.4+n*.5-.05,.4+n*.5+.05,t/2,t/2+.012,N.dark),i.box(-e*.3,e*.3,.4+n*.6,.4+n*.8,t/2,t/2+.005,N.dark),i.seg(-e*.22,.4+n*.7,t/2+.008,e*.22,.4+n*.7,t/2+.008,je)}function NM(i,e,t,n,r){if(r==="wall"){i.box(-e/2,e/2,.5,.5+n,-t/2,t/2,N.white,N.whiteTop,pe),i.seg(-e*.3,.5+n*.9,t/2+.004,e*.3,.5+n*.9,t/2+.004,je),i.seg(-e*.3,.5+n*.08,t/2+.003,e*.3,.5+n*.08,t/2+.003,He);return}if(r==="cube"){i.box(-e/2+.01,e/2-.01,0,.03,-t/2+.01,t/2-.01,N.dark),i.box(-e/2,e/2,.03,n,-t/2,t/2,N.dark,N.body,pe),i.seg(-e*.35,n*.85,t/2+.004,e*.35,n*.85,t/2+.004,je),i.box(-e*.15,e*.15,n,n+.025,-.012,.012,N.dark);return}i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.02,N.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-e/2,e/2,.06+a*s+.004,.06+(a+1)*s,-t/2,t/2,N.white,N.whiteTop,pe);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-e*.04,l,t/2+.003,e*.04,l,t/2+.003,je)}}var md=.12,gd=2.05;function _d(i,e){let t=BM(i,e);return t&&i.mirror?{...t,x0:-t.x1,x1:-t.x0}:t}function BM(i,e){let t=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=$h(i.type);if(o){let l=e?Rt(e,i):0,c=(o.x-o.w/2)*t,u=(o.x+o.w/2)*t,h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+o.y*r+h,y1:l+(o.y+o.h)*r-h,z:(o.z+o.d/2)*n}}let s=e&&i.type!=="fridge_smart"?Rt(e,i)-Mo(i):0,a=OM(i,t,n,r,e);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function OM(i,e,t,n,r){if(i.type==="pool_pump"){let o=Math.min(t,n)*.32;return{x0:-e/2+.03,x1:e*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-e/2+.05,x1:e*.15,y0:n*.15,y1:n*.9,z:t/2+.003};if(i.type==="pool_filter"){let o=Math.min(e,t)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-e*.4,x1:e*.4,y0:.9+n*.05,y1:.9+n*.4,z:t/2+.003};if(i.type==="tv_board"){let o=Math.min(e*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-t/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-e/2+.02,x1:e/2-.02,y0:o+.02,y1:o+n-.02,z:t/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-t/2+.115};if(i.type==="fridge_smart"){let o=r?Rt(r,i):0;return{x0:.06,x1:e/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:t/2+.006}}if(i.type==="radiator")return{x0:-e/2+.02,x1:e/2-.02,y0:md+.02,y1:md+n-.02,z:t/2+.004};if(i.type==="ac_unit")return{x0:-e/2+.05,x1:e/2-.05,y0:gd+.015,y1:gd+.06,z:t/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(e*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:t/2-.004}}return i.type==="dishwasher"?{x0:-e/2+.06,x1:e/2-.06,y0:n-.16,y1:n-.08,z:t/2-.004}:null}function UM(i,e,t,n,r){let o=Math.min(.14,Math.max(.06,Math.min(t,n)*.15)),s=new J(1-r,1-r,1-r),a=new J(1,1,1),l=.003,c=[e(-t/2,-n/2),e(t/2,-n/2),e(t/2,n/2),e(-t/2,n/2)],u=[e(-t/2-o,-n/2-o),e(t/2+o,-n/2-o),e(t/2+o,n/2+o),e(-t/2-o,n/2+o)],h=f=>[f[0],l,f[1]],d=i.p.length;i.tri(h(c[0]),h(c[1]),h(c[2]),s),i.tri(h(c[0]),h(c[2]),h(c[3]),s);for(let f=0;f<4;f++){let p=(f+1)%4;i.tri(h(c[f]),h(u[f]),h(u[p]),s,a,a),i.tri(h(c[f]),h(u[p]),h(c[p]),s,a,s)}T0(e)&&k0(i,d)}function Hc(i,e,t,n,r=0){let o=i.p.length,s=e.p.length;VM(i,e,n.rotation_x||n.rotation_z?new Je:t,n,r),Rn(i.p,o,n,r+n.h/2),Rn(e.p,s,n,r+n.h/2)}function k0(i,e){let t=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=e;n<i.p.length;n+=9){let r=n/9;t(i.p,n,3),t(i.c,n,3),t(i.f,r*3,1),t(i.uv,r*6,2),t(i.tile,r*6,2)}}function VM(i,e,t,n,r){let o=gt(n.type)?0:r-Mo(n);if(gt(n.type)||Math.abs(o)<.001)return S0(i,e,t,n,r);let s=i.p.length,a=e.p.length;S0(i,e,r<.05?t:new Je,n,0);for(let l=s+1;l<i.p.length;l+=3)i.p[l]+=o;for(let l=a+1;l<e.p.length;l+=3)e.p[l]+=o}function S0(i,e,t,n,r){let o=n.rotation*pt,s=Math.cos(o),a=Math.sin(o),l=n.mirror?-1:1,c=(p,_)=>[n.x+l*p*s-_*a,n.z+l*p*a+_*s],u=new Cr(i,e,c),h=Math.max(.05,n.w),d=Math.max(.05,n.d),f=Math.max(.005,n.h);switch(n.type){case"sofa":y0(u,h,d,f,Math.max(1,Math.round((h-.4)/.62)));break;case"armchair":y0(u,h,d,f,1);break;case"sofa_l":x0(u,h,d,f,!1);break;case"sofa_u":x0(u,h,d,f,!0);break;case"bed":H1(u,h,d,f);break;case"chair":W1(u,h,d,f);break;case"table":X1(u,h,d,f);break;case"desk":K1(u,h,d,f);break;case"nightstand":rr(u,h,d,f,1,f*.72,!0),u.seg(-h/2,f*.5,d/2-.02,h/2,f*.5,d/2-.02,He);break;case"wardrobe":rr(u,h,d,f,Math.max(2,Math.round(h/.5)),f*.5);break;case"shelf":Y1(u,h,d,f);break;case"kitchen":q1(u,h,d,f);break;case"fridge":Z1(u,h,d,f);break;case"fridge_smart":j1(u,h,d,f);break;case"waste_bin":$1(u,h,d,f,h0(n),m0(n,p0()));break;case"mailbox":{let p=i.p.length,_=e.p.length;J1(u,h,d,f,d0(n));let m=Mo(n);for(let g=p+1;g<i.p.length;g+=3)i.p[g]+=m;for(let g=_+1;g<e.p.length;g+=3)e.p[g]+=m;if(m>0)return;break}case"awning":return;case"stove":tM(u,h,d,f);break;case"sink":nM(u,h,d,f);break;case"bathtub":iM(u,h,d,f);break;case"shower":rM(u,h,d,f);break;case"wc":oM(u,h,d,f);break;case"washbasin":sM(u,h,d,f);break;case"tv_board":aM(u,h,d,f);break;case"plant":lM(u,h,d,f);break;case"rug":cM(u,h,d);return;case"stairs":uM(u,h,d,f);break;case"stairs_u":hM(u,h,d,f);break;case"stairwell":return;case"sideboard":dM(u,h,d,f);break;case"dresser":fM(u,h,d,f);break;case"tall_cabinet":rr(u,h,d,f,1,f*.5);break;case"coat_rack":pM(u,h,d,f);break;case"bench":w0(u,h,d,f,!1);break;case"corner_bench":w0(u,h,d,f,!0);break;case"bar_stool":mM(u,h,d,f);break;case"office_chair":gM(u,h,d,f);break;case"stool":_M(u,h,d,f);break;case"kitchen_wall":bM(u,h,d,f);return;case"kitchen_tall":vM(u,h,d,f);break;case"island":yM(u,h,d,f);break;case"worktop":u.box(-h/2,h/2,Math.max(0,f-.04),f,-d/2,d/2,N.whiteTop,N.whiteTop,pe);return;case"dishwasher":xM(u,h,d,f);break;case"washer":M0(u,h,d,f,!1);break;case"dryer":M0(u,h,d,f,!0);break;case"bunk_bed":wM(u,h,d,f);break;case"table_round":MM(u,h,d,f);break;case"coffee_table":SM(u,h,d,f);break;case"tv_wall":TM(u,h,d,f);return;case"parking":{let _=[[-h/2,-d/2],[h/2,-d/2],[h/2,d/2],[-h/2,d/2]];for(let m=0;m<4;m++)u.seg(_[m][0],.012,_[m][1],_[(m+1)%4][0],.012,_[(m+1)%4][1],He);u.seg(-h*.15,.012,d/2-.45,0,.012,d/2-.2,pe),u.seg(0,.012,d/2-.2,h*.15,.012,d/2-.45,pe);return}case"robot_vacuum":u.box(-h*.45,h*.45,0,f,-d/2,-d/2+d*.3,N.white,N.whiteTop,pe),u.box(-h*.2,h*.2,f*.5,f*.62,-d/2+d*.3,-d/2+d*.31,N.accent);return;case"radiator":AM(u,h,d,f);return;case"ac_unit":EM(u,h,d,f);return;case"inverter":RM(u,h,d,f,n.variant??null);return;case"grid_point":LM(u,h,d,f);break;case"wallbox":DM(u,h,d,f);return;case"pool_pump":kM(u,h,d,f);break;case"pool_filter":PM(u,h,d,f,n.variant??null);break;case"pool_heat_pump":CM(u,h,d,f);break;case"pool_dosing":IM(u,h,d,f);break;case"pool_valve":FM(u,h,d,f);return;case"meter":zM(u,h,d,f);return;case"home_battery":if(NM(u,h,d,f,n.variant??null),n.variant==="wall")return;break;default:{let p=Sr(n);if(p){if(Wc(u,p,h,d,f,r,null),r>.05)return}else u.box(-h/2,h/2,0,f,-d/2,d/2,N.body,N.bodyTop,pe)}}UM(t,c,h,d,n.type==="plant"?.35:.5)}function pd(i,e){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let t=N;return(e?t[`${i}Top`]:void 0)??t[i]??null}function Wc(i,e,t,n,r,o,s,a=null,l=!1){let c=!!a,u=new Set([...e.motions??[],...e.spots??[]].flatMap(h=>h.parts));for(let h of e.parts){if(!l&&(h.visible===!1||h.status||h.id&&u.has(h.id))||a&&!a(h))continue;let d=c?{...h,glow:!0,w:h.w+.006/t,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,f=d.glow&&s!==null,p=f?s:pd(d.color,!1)??N.body,_=f?s:pd(d.top,!1)??pd(d.color,!0)??Ge(p,1.25).getHex(),m=o+d.y*r,g=o+Math.min(r,(d.y+d.h)*r),y=d.edges==="glow"?jn:d.edges==="faint"?He:d.edges?pe:null,x=d.rot?i.rotated(d.x*t,d.z*n,d.rot):i;if(!x.shape(d,t,n,r,o,p))if(d.shape==="cyl"&&(d.axis==="x"||d.axis==="z"))x.lyingCyl(d.axis,d.x*t,d.z*n,m,g,d.axis==="x"?d.w*t:d.d*n,d.axis==="x"?d.d*n:d.w*t,p,_,14,y);else if(d.shape==="cyl")x.cyl(d.x*t,d.z*n,Math.min(d.w*t,d.d*n)/2,m,g,p,_,14,y);else if(d.shape==="loft"){let b=d.tx??d.x,w=d.tz??d.z,M=d.tw??d.w,E=d.td??d.d;x.loft([(d.x-d.w/2)*t,(d.x+d.w/2)*t,(d.z-d.d/2)*n,(d.z+d.d/2)*n],[(b-M/2)*t,(b+M/2)*t,(w-E/2)*n,(w+E/2)*n],m,g,p,_,y)}else x.box((d.x-d.w/2)*t,(d.x+d.w/2)*t,m,g,(d.z-d.d/2)*n,(d.z+d.d/2)*n,p,_,y)}}function P0(i,e){let t=new Je;return Wc(new Cr(t,new Ft,(n,r)=>[n,r]),i,e.w,e.d,e.h,0,null,null,!0),t.geometry()}function C0(i,e,t,n,r,o){let s=o*pt,a=Math.cos(s),l=Math.sin(s),c=(p,_)=>[t+p*a-_*l,r+p*l+_*a],u=new Cr(i,new Ft,c),h=1713728,d=2373216,f=725279;if(e==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,h,d,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,f,h),u.cyl(0,0,.012,n-.075,n-.06,N.accent,N.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,d),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,d),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,d),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,f,N.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Zs(i,e,t,n,r,o=s=>!!s.glow){let s=i.p.length,a=t.rotation*pt,l=Math.cos(a),c=Math.sin(a),u=t.mirror?-1:1,h=(d,f)=>[t.x+u*d*l-f*c,t.z+u*d*c+f*l];Wc(new Cr(i,new Ft,h),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r,o),Rn(i.p,s,t,n+t.h/2)}function Xc(i,e,t,n,r){let o=i.p.length,s=t.rotation*pt,a=Math.cos(s),l=Math.sin(s),c=t.mirror?-1:1,u=(h,d)=>[t.x+c*h*a-d*l,t.z+c*h*l+d*a];Wc(new Cr(i,new Ft,u),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r),Rn(i.p,o,t,n+t.h/2)}var GM=[[0,0],[1,0],[1,1],[0,1]];function vd(i){return i.length<=32&&i.every(e=>e.length===2&&e.every(t=>Number.isFinite(t)&&t>=0&&t<=1))&&Bm(i)}function Fo(i){return i.points&&vd(i.points)?i.points:GM}function yd(i){return Fo(i).map(([e,t])=>[i.u+e*(i.w??.78),i.v+t*(i.h??1.18)])}function Kc(i,e,t,n=!0){let r=s=>((t[0]-e[0])*(s[1]-e[1])-(t[1]-e[1])*(s[0]-e[0]))*(n?1:-1),o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),u=r(l);if(c>=-1e-9&&o.push(a),c>=-1e-9!=u>=-1e-9){let h=c/(c-u);o.push(a.map((d,f)=>d+(l[f]-d)*h))}}return o.filter((s,a)=>{let l=o[(a+1)%o.length];return Math.hypot(s[0]-l[0],s[1]-l[1])>1e-8})}var bd=i=>i.length>=3&&Math.abs(gn(i))>1e-9;function $s(i,e){let t=[i];for(let n of Nn(e)){let r=n.map(o=>e[o]);t=t.flatMap(o=>{let s=o;for(let c=0;c<3;c++)s=Kc(s,r[c],r[(c+1)%3]);if(!bd(s))return[o];let a=o,l=[];for(let c=0;c<3;c++){let u=r[c],h=r[(c+1)%3],d=Kc(a,u,h,!1);bd(d)&&l.push(d),a=Kc(a,u,h)}return l})}return t}function Js(i,e,t=!1){let n=Fo(i),r=Math.max(0,Math.min(1,e)),o=i.cover_direction??"top",s=o==="left"||o==="right"?0:1,a=o==="top"||o==="right",l=Math.min(...n.map(f=>f[s])),c=Math.max(...n.map(f=>f[s])),u=a?c-r*(c-l):l+r*(c-l),h=s===0?[u,1]:[0,u],d=s===0?[u,0]:[1,u];return Nn(n).map(f=>Kc(f.map(p=>n[p]),h,d,a!==t)).filter(bd).map(f=>f)}var qc=Math.PI/180,HM=1.13,WM=1.72,xd=.025,Fr=.07,I0=.25;function F0(i,e){let t=[];for(let n of i.floors){if(e&&n.id!==e)continue;let{walls:r}=Ei(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,u=-s/l,h=fn(n,o),d=h.top-h.bottom,f=o.sources.find(m=>m.room_id===o.roomLeft)?.edge??null,p={floorId:n.id,room:o.roomLeft,edge:f,free:!!o.free},_=(m,g,y,x)=>t.push({key:m,section:null,side:"top",flat:!1,o:g,eu:y,es:[0,1,0],n:x,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:p});_(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation+h.bottom,o.a[1]+u*o.right],[s/l,0,a/l],[c,0,u]),o.free&&_(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation+h.bottom,o.b[1]-u*o.left],[-s/l,0,-a/l],[-c,0,-u])}}return t}var wd="ground";function Md(i){let e=[...i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??i.floors[0]??null}function L0(i,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],o=Md(i),s=n[0]*e.u+r[0]*e.v,a=n[2]*e.u+r[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:Mm(o,s,a)):e.base??0;return{key:wd,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function XM(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>qt(n)-qt(t))[0]??null}function Ri(i){let e=i.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(y=>{let x=Nc(i,y,y.overhang??e.overhang),b=y.points?.length?Hs(y,y.shape==="parapet"?0:Math.max(0,Math.min(x.a,x.b,x.u0,x.u1))):void 0;return KM(y,x).map(w=>b?{...w,footprint:b}:w)});let t=XM(i);if(!t)return[];let n=t.rooms.flatMap(y=>y.points.map(x=>x[0])),r=t.rooms.flatMap(y=>y.points.map(x=>x[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,u=qt(t);if(e.type==="flat")return[D0("main",null,s,l,a,c,u+I0)];let h=a-s>=c-l,d=e.ridge==="short"?!h:h,f=(d?c-l:a-s)/2,p=f*Math.tan(e.pitch*qc),_=(y,x,b)=>d?[y,u+b,(l+c)/2+x]:[(s+a)/2+x,u+b,y],[m,g]=d?[s,a]:[l,c];return[-1,1].map(y=>Yc(`main:${y<0?"a":"b"}`,null,y<0?"a":"b",_(m,y*f,0),_(g,y*f,0),_(m,0,p),e.pitch,()=>[0,g-m]))}function KM(i,e){let t=Jn(i),n=Cn(i),r=(_,m,g)=>{let[y,x]=t.at(_,m);return[y,g,x]},o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let _=t.at(a,-o),m=t.at(l,t.w+s);return[D0(i.id,i.id,Math.min(_[0],m[0]),Math.min(_[1],m[1]),Math.max(_[0],m[0]),Math.max(_[1],m[1]),i.eave_a+I0)]}if(i.shape==="pent")return[Yc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,t.w+s,n.y(t.w+s)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",h=i.shape==="pyramid"?(t.u1-t.u0)/2:u?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,d=u?t.u0+h-a:0,f=u?l-(t.u1-h):0,p=[];if(n.vr>.3){let _=Math.hypot(n.vr+o,n.rh-n.y(-o));p.push(Yc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,m=>[d*(m/_),c-f*(m/_)]))}if(t.w-n.vr>.3){let _=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));p.push(Yc(`${i.id}:b`,i.id,"b",r(l,t.w+s,n.y(t.w+s)),r(a,t.w+s,n.y(t.w+s)),r(l,n.vr,n.rh),i.pitch_b,m=>[f*(m/_),c-d*(m/_)]))}if(u){let _=n.y(-o),m=n.y(t.w+s),g=[[`${i.id}:c`,"c",r(a,t.w+s,m),r(a,-o,_),r(t.u0+h,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-o,_),r(l,t.w+s,m),r(t.u1-h,n.vr,n.rh)]];for(let[y,x,b,w,M]of g){let E=YM(y,i.id,x,b,w,M);E&&p.push(E)}}return p}function YM(i,e,t,n,r,o){let s=js(Lr(r,n));if(s<.3)return null;let a=or(Lr(r,n)),l=Lr(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=js(u);if(h<.3)return null;let d=or(u),f=or(B0(a,d));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let p=or([-d[0],0,-d[2]]),_=Math.atan2(d[1],Math.hypot(d[0],d[2]))/qc;return{key:i,section:e,side:t,flat:!1,o:n,eu:a,es:d,n:f,lu:s,ls:h,pitch:_,span:g=>{let y=Math.min(1,Math.max(0,g/h));return[c*y,s-(s-c)*y]},facing:[p[0],p[2]]}}function Yc(i,e,t,n,r,o,s,a){let l=or(Lr(r,n)),c=or(Lr(o,n)),u=or(B0(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let h=or([-c[0],0,-c[2]]);return{key:i,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:u,lu:js(Lr(r,n)),ls:js(Lr(o,n)),pitch:s,span:a,facing:[h[0],h[2]]}}function D0(i,e,t,n,r,o,s){let a=r-t>=o-n,l=a?r-t:o-n,c=a?o-n:r-t;return{key:`${i}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function z0(i){let e=i.module_w||HM,t=i.module_h||WM;return i.portrait===!1?[t,e]:[e,t]}function qM(i){return i.layout?.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function N0(i,e){return i.flat?Math.min(45,Math.max(0,e.tilt??15))*qc:i.wall?Math.min(90,Math.max(0,e.tilt??0))*qc:0}function ZM(i,e){let[,t]=z0(e),n=N0(i,e);return i.wall?t*Math.cos(n)+xd:i.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+xd}function Qs(i,e,t=!1){let[n,r]=z0(e),o=[],s=N0(i,e),a=r*Math.cos(s),l=ZM(i,e),c=qM(e),u=Math.max(1,...c),h=new Set(e.skip??[]),d=!!i.wall&&n>i.lu+1e-6,f=(_,m,g)=>[i.o[0]+i.eu[0]*_+i.es[0]*m+i.n[0]*g,i.o[1]+i.eu[1]*_+i.es[1]*m+i.n[1]*g,i.o[2]+i.eu[2]*_+i.es[2]*m+i.n[2]*g],p=(_,m)=>{if(i.unbounded)return!0;if(m<-1e-6||m>i.ls+1e-6)return!1;let[g,y]=i.span(m);return _>=g-1e-6&&_<=y+1e-6};return c.forEach((_,m)=>{let g=e.align==="right"?u-_:e.align==="center"?(u-_)/2:0;for(let y=0;y<_;y++){let x=`${m}:${y}`,b=h.has(x);if(b&&!t)continue;let w=e.u+(y+g)*(n+xd),M=e.v+m*l,E=w+n,v=M+(i.flat||i.wall?a:r);if(d){if(!(p((w+E)/2,M)&&p((w+E)/2,v)))continue}else if(![[w,M],[E,M],[E,v],[w,v]].every(([T,P])=>p(T,P)))continue;if(i.footprint&&!nd(i.footprint,[[w,M],[E,M],[E,v],[w,v]].map(([T,P])=>{let C=f(T,P,0);return[C[0],C[2]]})))continue;if(i.wall&&s>.001){let T=Fr+r*Math.sin(s),[P,C]=e.flip?[T,Fr]:[Fr,T],D=[f(w,M,P),f(E,M,P),f(E,v,C),f(w,v,C)],B=e.flip?M:v,L=[w+.05,E-.05].map(O=>[f(O,B,0),f(O,B,T)]);o.push({corners:D,posts:L,cell:x,skipped:b});continue}if(!i.flat){o.push({corners:[f(w,M,Fr),f(E,M,Fr),f(E,v,Fr),f(w,v,Fr)],posts:[],cell:x,skipped:b});continue}let S=.15,A=S+r*Math.sin(s),[k,F]=e.flip?[v,M]:[M,v],R=[f(w,k,S),f(E,k,S),f(E,F,A),f(w,F,A)];o.push({corners:R,posts:[w+.05,E-.05].flatMap(T=>[[f(T,k,0),f(T,k,S)],[f(T,F,0),f(T,F,A)]]),cell:x,skipped:b})}}),o}function Lr(i,e){return[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}function js(i){return Math.hypot(i[0],i[1],i[2])}function or(i){let e=js(i)||1;return[i[0]/e,i[1]/e,i[2]/e]}function B0(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}var $M=.78,JM=1.18;function jM(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||$M,module_h:i.h||JM}}function Zc(i,e){if(e.points){if(!vd(e.points)||yd(e).some(([o,s])=>!QM(i,o,s)))return null;let r=yd(e).map(([o,s])=>i.o.map((a,l)=>a+i.eu[l]*o+i.es[l]*s+i.n[l]*.02));return i.footprint&&!nd(i.footprint,r.map(o=>[o[0]-i.n[0]*.02,o[2]-i.n[2]*.02]))?null:r}let t=Qs(i,jM(e))[0];if(!t)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function ea(i,e,t){let n=e?Zc(e,t):null;if(!n)return null;let r=Fo(t),o=t.points?Nn(r).sort((u,h)=>Math.abs(gn(h.map(d=>r[d])))-Math.abs(gn(u.map(d=>r[d]))))[0]:null,s=o?o.map(u=>n[u]):n,a=s.reduce((u,h)=>u+h[0],0)/s.length,l=s.reduce((u,h)=>u+h[1],0)/s.length,c=s.reduce((u,h)=>u+h[2],0)/s.length;for(let u of[...i.floors].sort((h,d)=>d.elevation-h.elevation)){if(u.elevation>l)continue;let h=u.rooms.find(d=>Oe([a,c],d.points));if(h)return{floor:u,roomId:h.id,corners:n}}return null}function QM(i,e,t){if(i.unbounded)return!0;if(t<0||t>i.ls)return!1;let[n,r]=i.span(t);return e<n||e>r?!1:!i.footprint||Ao(i.footprint,[i.o[0]+i.eu[0]*e+i.es[0]*t,i.o[2]+i.eu[2]*e+i.es[2]*t])}function $c(i,e,t,n){let r=e.map((c,u)=>c-i[u]),o=t.map((c,u)=>c-i[u]),s=[r[1]*o[2]-r[2]*o[1],r[2]*o[0]-r[0]*o[2],r[0]*o[1]-r[1]*o[0]],a=Math.hypot(...s)||1,l=s.reduce((c,u,h)=>c+u*n[h],0)<0?-1:1;return s.map(c=>l*c/a)}function ta(i,e,t){return i.setAttribute("solarNormal",new we(e,3)),i.setAttribute("solarPoint",new we(t,3)),i}function Jc(i){let e=i.onBeforeCompile.bind(i),t=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(n,r)=>{e(n,r),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 solarNormal;
attribute vec3 solarPoint;`).replace("#include <project_vertex>",`#include <project_vertex>
      vec3 solarWorldPoint = (modelMatrix * vec4(solarPoint, 1.0)).xyz;
      vec3 solarWorldNormal = mat3(modelMatrix) * solarNormal;
      if (dot(solarWorldNormal, cameraPosition - solarWorldPoint) <= 0.0) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)},i.customProgramCacheKey=()=>`${t()}-solar-facing`,i}function O0(){return new et({vertexColors:!0,side:ct,transparent:!0,opacity:.22,depthWrite:!1})}function Sd(i,e,t,n,r){let o=n==="bottom"?0:n==="middle"?.5:1,s=n==="bottom"?-1:1,a=(h,d,f)=>{let p=d.map((g,y)=>g+(f[y]-g)*o),_=h.map((g,y)=>g-p[y]),m=_.reduce((g,y,x)=>g+y*t[x],0);return p.map((g,y)=>g+_[y]*Math.cos(r)-e[y]*m*Math.sin(r)*s)},l=i.map(h=>h.reduce((d,f,p)=>d+f*t[p],0)),c=Math.min(...l),u=Math.max(...l);return i.map((h,d)=>{let f=h.map((_,m)=>_+t[m]*(c-l[d])),p=h.map((_,m)=>_+t[m]*(u-l[d]));return a(h,f,p)})}var na=1712952,ia=2239816,G0=1318193,Dr=Ge(3662079,.9),zr=Ge(5995775,.45),rn=.14,eS=9427199,Td=13226982,Ad=14936565,tS={black:{glass:new J(329483),edge:Ge(9082544,.32),cells:Ge(2766160,.22)},blue:{glass:new J(1386842),edge:Ge(10467583,.55),cells:Ge(4025599,.35)}},nS=Ge(13226982,.5),U0=Ge(13226982,.85),iS=Ge(16757575,.95),rS=new J(2845583),oS=new J(3818072),V0=new J(4871791);function jc(i,e,t,n,r){if(e.length<3)return;let[o,s,a]=e,l=(s[1]-o[1])*(a[2]-o[2])-(s[2]-o[2])*(a[1]-o[1]),c=(s[0]-o[0])*(a[1]-o[1])-(s[1]-o[1])*(a[0]-o[0]),h=l*(o[0]-n[0])+c*(o[2]-n[1])<0?[...e].reverse():e;for(let f=1;f+1<h.length;f++)i.tri(h[0],h[f],h[f+1],t);let d=Math.min(...h.map(f=>f[1]));for(let f=0;f<h.length;f++){let p=h[f],_=h[(f+1)%h.length],m=Math.abs(p[1]-d)<1e-6&&Math.abs(_[1]-d)<1e-6,g=Math.hypot(p[0]-_[0],p[2]-_[2])<1e-6;r.seg(p,_,m?Uc:g?mi:jn)}}function sS(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>qt(n)-qt(t))[0]??null}function H0(i,e=new Map){let t=i.settings.roof,n=t?.type==="custom"?null:uS(i),r=t?.type==="custom"?hS(i,t.sections??[],t.overhang):n?[n]:[];return aS(i,r),cS(i,r),lS(i,r,e),r}function aS(i,e){let t=Ri(i);for(let n of i.settings.roof.windows??[]){let r=t.find(l=>l.key===n.face),o=r?Zc(r,n):null;if(!r||!o)continue;let s=r.section?e.find(l=>l.sections?.includes(r.section)):e[0];if(!s)continue;let a=o.map(l=>[l[0]-r.n[0]*.02,l[2]-r.n[2]*.02]);for(let l of[s.solid,s.glass]){let c=new Je;for(let u=0;u<l.p.length;u+=9){let h=[0,3,6].map(m=>[l.p[u+m],l.p[u+m+2],l.p[u+m+1]]),d=new J().setRGB(l.c[u],l.c[u+1],l.c[u+2]),f=s.floor.elevation+s.base,_=!h.every(m=>Math.abs(r.n[0]*(m[0]-r.o[0])+r.n[1]*(m[2]+f-r.o[1])+r.n[2]*(m[1]-r.o[2]))<.5)||Math.abs(gn(h))<1e-9?[h]:$s(h,a);for(let m of _)for(let g=1;g+1<m.length;g++)c.tri(...[m[0],m[g],m[g+1]].map(y=>[y[0],y[2],y[1]]),d)}l.p=c.p,l.c=c.c,l.f=c.f}}}function lS(i,e,t){let n=i.settings.roof?.windows??[];if(!n.length||!e.length)return;let r=new Map(Ri(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?Zc(s,o):null;if(!s||!a)continue;let l=s.section?e.find(v=>v.sections?.includes(s.section)):e[0];if(!l)continue;let c=o.float?ea(i,s,o):null,u=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,h=u?u.elevation:l.floor.elevation+l.base,d=v=>[v[0],v[1]-h,v[2]],f=a.map(d),p=t.get(o.id)??{open:0,tilt:0,cover:0},_=!!c&&(u!==null||c.floor.id===l.floor.id),m=u?(l.winBelow??=new Map).get(u.id)??l.winBelow.set(u.id,{floor:u,solid:new Je,glass:new Je,lines:new Ft}).get(u.id):_?l.win??={solid:new Je,glass:new Je,lines:new Ft}:l.winRoof??={solid:new Je,glass:new Je,lines:new Ft},g=(v,S)=>[v[0]+s.n[0]*S,v[1]+s.n[1]*S,v[2]+s.n[2]*S],y=p.open>.02||p.tilt>.02?iS:U0,x=f.map(v=>g(v,.06)),b=f.map(v=>g(v,-.02));for(let v=0;v<x.length;v++){m.lines.seg(x[v],x[(v+1)%x.length],y);let S=(v+1)%x.length;m.solid.tri(b[v],b[S],x[S],V0),m.solid.tri(b[v],x[S],x[v],V0)}let w=(p.open>.02?30*Math.min(1,p.open):p.tilt>.5?12:0)*pt,M=f.map(v=>g(v,.065)),E=Sd(M,s.n,s.es,o.hinge,w);for(let[v,S,A]of Nn(Fo(o)))m.glass.tri(E[v],E[S],E[A],rS);for(let v=0;v<E.length;v++)m.lines.seg(E[v],E[(v+1)%E.length],y);if(p.cover>.02){let v=o.cover_style==="awning",S=/^#[0-9a-f]{6}$/i.test(o.cover_color??"")?new J(o.cover_color):oS,A=([F,R])=>o.points?d(s.o.map((T,P)=>T+s.eu[P]*(o.u+F*(o.w??.78))+s.es[P]*(o.v+R*(o.h??1.18))+s.n[P]*.095)):g(f[0].map((T,P)=>(1-R)*((1-F)*f[0][P]+F*f[1][P])+R*((1-F)*f[3][P]+F*f[2][P])),.075),k=new Map;for(let F of Js(o,p.cover)){let R=F.map(A);v?R=R.map(T=>g(T,.045)):R=Sd([...M,...R],s.n,s.es,o.hinge,w).slice(M.length);for(let T=1;T+1<R.length;T++)m.solid.tri(R[0],R[T],R[T+1],S);if(v)for(let T=0;T<R.length;T++){let P=R[T],C=R[(T+1)%R.length],D=[P,C].map(B=>B.map(L=>Math.round(L*1e7)).join(",")).sort().join(";");k.has(D)?k.delete(D):k.set(D,[P,C])}}for(let[F,R]of k.values())m.lines.seg(F,R,U0)}}}function cS(i,e){let t=i.settings.roof?.solar??[];if(!t.length||!e.length)return;let n=new Map(Ri(i).map(r=>[r.key,r]));for(let r of t){let o=n.get(r.face);if(!o)continue;let s=o.section?e.find(a=>a.sections?.includes(o.section)):e[0];if(s){let a=s.solar??={solid:new Je,lines:new Ft,facing:{normals:[],points:[],lineNormals:[],linePoints:[]}};Ed(a.solid,a.lines,o,r,s.floor.elevation+s.base,a.facing)}}}function Ed(i,e,t,n,r,o){let s=u=>[u[0],u[1]-r,u[2]],a=tS[n.look==="blue"?"blue":"black"],l=n.portrait===!1?10:6,c=n.portrait===!1?6:10;for(let u of Qs(t,n)){let h=i.p.length,d=e.p.length,[f,p,_,m]=u.corners.map(s);i.tri(f,p,_,a.glass),i.tri(f,_,m,a.glass),i.tri(f,_,p,a.glass),i.tri(f,m,_,a.glass);let g=(b,w=.004)=>[b[0]+t.n[0]*w,b[1]+t.n[1]*w,b[2]+t.n[2]*w],y=(b,w,M)=>[b[0]+(w[0]-b[0])*M,b[1]+(w[1]-b[1])*M,b[2]+(w[2]-b[2])*M],x=[f,p,_,m].map(b=>g(b));for(let b=0;b<4;b++)e.seg(x[b],x[(b+1)%4],a.edge);for(let b=1;b<l;b++)e.seg(g(y(f,p,b/l)),g(y(m,_,b/l)),a.cells);for(let b=1;b<c;b++)e.seg(g(y(f,m,b/c)),g(y(p,_,b/c)),a.cells);for(let[b,w]of u.posts)e.seg(s(b),s(w),nS);if(o){let b=$c(f,p,_,t.n);for(let w=h;w<i.p.length;w+=3)o.normals.push(...b),o.points.push(...f);for(let w=d;w<e.p.length;w+=3)o.lineNormals.push(...b),o.linePoints.push(...f)}}}function uS(i){let e=i.settings.roof,t=sS(i);if(!t||!e||e.type==="none"||e.type==="custom")return null;let n=t.rooms.flatMap(A=>A.points.map(k=>k[0])),r=t.rooms.flatMap(A=>A.points.map(k=>k[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,u=new Je,h=new Ft;if(e.type==="flat"){Tt(u,[[s,l],[a,l],[a,c],[s,c]],0,.25,na,ia,{bottom:!0});let A=.252;for(let[k,F]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])h.seg([k[0],A,k[1]],[F[0],A,F[1]],Dr),h.seg([k[0],0,k[1]],[F[0],0,F[1]],zr);return{floor:t,base:qt(t)-t.elevation,solid:u,lines:h,glass:new Je}}let d=a-s>=c-l,f=e.ridge==="short"?!d:d,p=(f?c-l:a-s)/2,_=p*Math.tan(e.pitch*pt),m=(A,k,F)=>f?[A,F,(l+c)/2+k]:[(s+a)/2+k,F,A],[g,y]=f?[s,a]:[l,c],x=new J(ia),b=new J(na),w=(A,k,F,R,T)=>{u.tri(A,k,F,T),u.tri(A,F,R,T)};for(let A of[-1,1]){w(m(g,A*p,0),m(y,A*p,0),m(y,0,_),m(g,0,_),x),w(m(g,A*p,-rn),m(g,0,_-rn),m(y,0,_-rn),m(y,A*p,-rn),b),w(m(g,A*p,-rn),m(y,A*p,-rn),m(y,A*p,0),m(g,A*p,0),b);for(let k of[g,y])w(m(k,A*p,-rn),m(k,A*p,0),m(k,0,_),m(k,0,_-rn),b);h.seg(m(g,A*p,0),m(y,A*p,0),zr);for(let k of[g,y])h.seg(m(k,A*p,0),m(k,0,_),zr)}let M=e.overhang,E=new J(G0),v=p-M,S=v*Math.tan(e.pitch*pt);for(let A of[g+M,y-M])jc(u,[m(A,-v,-rn),m(A,v,-rn),m(A,0,S-rn)],E,[(s+a)/2,(l+c)/2],h);return h.seg(m(g,0,_+.004),m(y,0,_+.004),Dr),{floor:t,base:qt(t)-t.elevation,solid:u,lines:h,glass:new Je}}function hS(i,e,t){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,s)=>o.elevation-s.elevation);if(!n.length)return[];let r=new Map;for(let o of e){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let s=Km(i,o)??n[0],a=o.open?`${s.id}:open`:s.id,l=r.get(a);l||r.set(a,l={floor:s,base:0,solid:new Je,lines:new Ft,glass:new Je,sections:[],lift:!o.open}),l.sections.push(o.id);let c=zc(e,o),u=qt(s)>o.base+.05&&!o.dormer&&!c,h=e.filter(p=>p!==o&&zc(e,p)===o).flatMap(p=>Wm(o,p)),d=c?id(c,o):o,f=null;if(c){let p=Jn(d),_=nr(c,{u0:0,u1:0,a:0,b:0}),m=g=>{let[y,x]=p.at(g,p.w/2),[b,w]=tr(c,y,x);return Ro(_,b,w)??Cn(c).y(w)};f=m(p.u0)<=m(p.u1)?0:1}dS(l.solid,l.lines,d,Nc(i,d,d.overhang??t),s.elevation,l.glass,u,h,f)}return[...r.values()].sort((o,s)=>+(o.lift===!1)-+(s.lift===!1))}function dS(i,e,t,n,r,o=i,s=!1,a=[],l=null){let c=Jn(t),u=Cn(t),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,h.a),f=Math.max(0,h.b),p=c.w,_=c.u0-Math.max(0,h.u0),m=c.u1+Math.max(0,h.u1),g=(T,P,C)=>{let[D,B]=c.at(T,P);return[D,C-r,B]},y=new J(ia),x=new J(na),b=new J(G0),w=(T,P)=>{for(let C=1;C+1<T.length;C++)i.tri(T[0],T[C],T[C+1],P)},M=[],E=[],v=[],S=null;if(t.shape==="flat"||t.shape==="parapet"){let T=t.eave_a,P=t.shape==="parapet",C=t.points&&t.points.length>=3?Hs(t,P?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):P?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,p),c.at(c.u0,p)]:[c.at(_,-d),c.at(m,-d),c.at(m,p+f),c.at(_,p+f)];gn(C)<0&&(C=[...C].reverse()),Tt(i,C,T-r,T-r+.25,na,ia,{bottom:!0});for(let D=0;D<C.length;D++){let B=C[D],L=C[(D+1)%C.length];e.seg([B[0],T-r+.252,B[1]],[L[0],T-r+.252,L[1]],Dr),e.seg([B[0],T-r,B[1]],[L[0],T-r,L[1]],zr)}if(P){let D=U=>gn(U)>=0?U:[...U].reverse(),B=D(C),L=Dc(B,-.2),O=B.length;for(let U=0;U<O;U++){let Z=D([B[U],B[(U+1)%O],L[(U+1)%O],L[U]]);Tt(i,Z,T-r+.25,T-r+.65,na,ia),e.seg([B[U][0],T-r+.652,B[U][1]],[B[(U+1)%O][0],T-r+.652,B[(U+1)%O][1]],Dr),e.seg([L[U][0],T-r+.652,L[U][1]],[L[(U+1)%O][0],T-r+.652,L[(U+1)%O][1]],Dr)}}}else{let T=nr(t,h);M=T.faces;for(let P of a)M=M.flatMap(C=>Xm(C,P));E=T.rim,v=T.ridges,S=T.gable}let A=!!t.open,k=new J(eS);for(let T of M){if(A){for(let P=1;P+1<T.length;P++)o.tri(g(T[0][0],T[0][1],T[0][2]),g(T[P][0],T[P][1],T[P][2]),g(T[P+1][0],T[P+1][1],T[P+1][2]),k);continue}w(T.map(([P,C,D])=>g(P,C,D)),y),w(T.map(([P,C,D])=>g(P,C,D-rn)),x)}for(let T=0;T<E.length;T++){let[P,C,D]=E[T],[B,L,O]=E[(T+1)%E.length];A||w([g(P,C,D),g(B,L,O),g(B,L,O-rn),g(P,C,D-rn)],x),e.seg(g(P,C,D),g(B,L,O),A?Dr:zr)}if(A){t.points?.length?fS(i,e,t,r):pS(i,e,c,u,h,g,r);return}for(let[[T,P,C],[D,B,L]]of v)e.seg(g(T,P,C+.004),g(D,B,L+.004),Dr);let F=t.base;if(s)return;let R=c.at((c.u0+c.u1)/2,p/2);if(t.points?.length){let T=nr(t,{u0:0,u1:0,a:0,b:0}).rim;T.forEach((P,C)=>{let D=T[(C+1)%T.length],B=P,L=t.shape==="flat"||t.shape==="parapet"?0:rn,O=P[2]-L,U=D[2]-L;if(Math.max(O,U)<=F+.001)return;let Z=K=>[P[0]+(D[0]-P[0])*K,P[1]+(D[1]-P[1])*K,F+L];O<F&&(B=Z((F-O)/(U-O))),U<F&&(D=Z((F-O)/(U-O))),w([g(B[0],B[1],F),g(D[0],D[1],F),g(D[0],D[1],D[2]-L),g(B[0],B[1],B[2]-L)],b)});return}if(S){let T=mS(S,F-rn),P=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(T.length>=3)for(let C of P)jc(i,T.map(([D,B])=>g(C,D,B)),b,R,e)}if(t.shape!=="flat"&&t.shape!=="parapet")for(let T of[0,p]){let P=u.y(T)-rn;P>F+.02&&jc(i,[g(c.u0,T,F),g(c.u1,T,F),g(c.u1,T,P),g(c.u0,T,P)],b,R,e)}else if(t.eave_a>F+.02)for(let[T,P,C,D]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,p],[c.u1,p,c.u0,p],[c.u0,p,c.u0,0]])jc(i,[g(T,P,F),g(C,D,F),g(C,D,t.eave_a),g(T,P,t.eave_a)],b,R,e)}function fS(i,e,t,n){let s=Jn(t),a=nr(t,{u0:0,u1:0,a:0,b:0});a.rim.forEach((l,c)=>{let u=a.rim[(c+1)%a.rim.length],h=s.at(l[0],l[1]),d=s.at(u[0],u[1]),f=d[0]-h[0],p=d[1]-h[1],_=Math.hypot(f,p);if(_<1e-6)return;let m=-p/_*.12/2,g=f/_*.12/2,y=[[h[0]+m,h[1]+g],[d[0]+m,d[1]+g],[d[0]-m,d[1]-g],[h[0]-m,h[1]-g]];gn(y)<0&&y.reverse();let x=(M,E)=>l[2]+(u[2]-l[2])*((M-h[0])*f+(E-h[1])*p)/(_*_)-n-.03,b=i.p.length;Tt(i,y,0,.18,Td,Ad,{bottom:!0});for(let M=b;M<i.p.length;M+=3)i.p[M+1]+=x(i.p[M],i.p[M+2])-.18;e.seg([h[0],l[2]-n-.18,h[1]],[d[0],u[2]-n-.18,d[1]],zr);let w=Math.max(1,Math.ceil(_/3.5));for(let M=0;M<w;M++){let E=M/w,v=h[0]+f*E,S=h[1]+p*E,A=x(v,S)-.18;A<=0||Tt(i,[[v-.12/2,S-.12/2],[v+.12/2,S-.12/2],[v+.12/2,S+.12/2],[v-.12/2,S+.12/2]],0,A,Td,Ad,{bottom:!0})}})}function pS(i,e,t,n,r,o,s){let a=t.w,l=.12,c=.16,u=r.a>0,h=r.b>0,d=r.u0>0,f=r.u1>0,p=(g,y,x,b,w,M)=>{let E=[t.at(g,x),t.at(y,x),t.at(y,b),t.at(g,b)],v=(E[1][0]-E[0][0])*(E[2][1]-E[0][1])-(E[2][0]-E[0][0])*(E[1][1]-E[0][1]);Tt(i,v<0?[...E].reverse():E,w-s,M-s,Td,Ad,{bottom:!0})},_=s;for(let[g,y]of[[0,u],[a,h]]){if(!y)continue;let x=n.y(g)-.03,b=g===0?0:a-l;p(t.u0,t.u1,b,b+l,x-c,x),e.seg(o(t.u0,g,x-c),o(t.u1,g,x-c),zr)}for(let[g,y]of[[t.u0,d],[t.u1-l,f]])if(y)for(let x=0;x<6;x++){let b=a*x/6,w=a*(x+1)/6,M=Math.min(n.y(b),n.y(w))-.03;p(g,g+l,b,w,M-c,M)}let m=[];for(let[g,y]of[[0,u],[a-l,h]]){if(!y)continue;let x=t.u1-t.u0-l,b=Math.max(1,Math.ceil(x/3.5));for(let w=0;w<=b;w++){let M=t.u0+x*w/b;w===0&&!d||w===b&&!f||m.push([M,g])}}if(!u&&!h)for(let g of[t.u0,t.u1-l])(g===t.u0&&d||g!==t.u0&&f)&&m.push([g,a/2-l/2]);for(let[g,y]of m){let x=n.y(y+l/2)-.03-c;p(g,g+l,y,y+l,_,x)}}function mS(i,e){let t=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=e&&t.push([s,a]);let l=i[o+1];if(l&&(a-e)*(l[1]-e)<0){let c=(e-a)/(l[1]-a);t.push([s+(l[0]-s)*c,e])}}if(t.length<2)return[];let n=t[0],r=t[t.length-1];return r[1]>e&&t.push([r[0],e]),n[1]>e&&t.unshift([n[0],e]),t}var ra={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Qc={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},en=.2,gS=.01,oa=8,eu=.42,Rd=.42;function Y0(i,e,t,n=[],r=[],o){let{walls:s,open:a}=Ei(i.rooms,{exterior:e,interior:t},i.walls??[]),l=i.openings.map(R=>Ws(i,R,s)).filter(R=>R!==null),c=(R,T,P)=>{let C=o?o(R,T):null;return C===null?P:Math.min(P,C)},u=(R,T,P,C,D)=>{if(!o)return D;let B=D,L=Math.max(2,Math.ceil((C-P)/.25)+1);for(let O=0;O<L;O++){let U=P+(C-P)*O/(L-1);B=Math.min(B,c(R[0]+T[0]*U,R[1]+T[1]*U,D))}return B},h=new Je(!0,!0),d=[],f=new Ft,p=[];for(let R of i.rooms){if(R.points.length<3)continue;let T=sa(R.points),P=ft(i,R),C=Bc(i,R,l);p.push(...C);let D=Qc[R.floor_material]??Qc.wood,B=new J(D.color),L=n.flatMap(Q=>{if(c0(Q,T))return[hd(Q,.003)];if(!Zm(Q))return[];let ee=Po(T,Q);return ee.length>=3&&Math.abs(Ti(ee))>.01?[hd(sa(ee),.003)]:[]});p.push(...L);let O=[...T,...L.flat()],U=h.count;for(let[Q,ee,ae]of _n(T,L)){let H=O[Q],W=O[ee],oe=O[ae],le=[[H,W,oe]];for(let Y of C)le=le.flatMap(se=>ko(se,Y));for(let Y of le)for(let se=1;se+1<Y.length;se++){let[ge,Fe,Ae]=[Y[0],Y[se],Y[se+1]];h.tri([ge[0],P,ge[1]],[Ae[0],P,Ae[1]],[Fe[0],P,Fe[1]],B,B,B,[ge[0],ge[1],Ae[0],Ae[1],Fe[0],Fe[1]],$e,D.tile)}}d.push({roomId:R.id,start:U,end:h.count,color:D.color});let Z=new J(ra.slab),K=Q=>{for(let ee=0;ee<Q.length;ee++)for(let[ae,H]of rd(Q[ee],Q[(ee+1)%Q.length],C))h.tri([ae[0],P-en,ae[1]],[ae[0],P,ae[1]],[H[0],P,H[1]],Z),h.tri([ae[0],P-en,ae[1]],[H[0],P,H[1]],[H[0],P-en,H[1]],Z)};K(T);for(let Q of L){K([...sa(Q)].reverse());for(let ee=0;ee<Q.length;ee++){let ae=Q[ee],H=Q[(ee+1)%Q.length];f.seg([ae[0],P+.006,ae[1]],[H[0],P+.006,H[1]],jn),f.seg([ae[0],P-en,ae[1]],[H[0],P-en,H[1]],mi)}}}let _=new Map,m=[],g=new Map;for(let R of s){let T="interior",P=null;if(R.exterior){let D=R.b[0]-R.a[0],B=R.b[1]-R.a[1],L=Math.hypot(D,B)||1,O=[B/L,-D/L],U=(Math.round(Math.atan2(O[1],O[0])/(2*Math.PI)*oa)%oa+oa)%oa;T=`s${U}`;let Z=U/oa*2*Math.PI;P=[Math.cos(Z),Math.sin(Z)]}let C=_.get(T);C===void 0&&(C=m.length,_.set(T,C),m.push(P)),g.set(R,C)}let y=new Map,x=[];for(let R of i.openings){let T=Er(R,i.rooms,i.walls??[]);if(!T)continue;let P=Rr(s,R,T);if(!P)continue;let{wall:C,s:D}=P,B=nu([C.b[0]-C.a[0],C.b[1]-C.a[1]]),L=Math.hypot(C.b[0]-C.a[0],C.b[1]-C.a[1]),O=Math.min(R.width,L),U=Math.max(0,Math.min(L-O,D-O/2)),Z=T.room.points,K=C.free?B[0]*(Z[1][0]-Z[0][0])+B[1]*(Z[1][1]-Z[0][1])>0:C.roomLeft===R.room_id,Q=[-B[1],B[0]],ee=K?Q:[-Q[0],-Q[1]],ae=l.find(We=>We.opening.id===R.id),H=ae?.threshold??ft(i,T.room),W=ae?.room??T.room,oe=W.wall_offset!=null||W.floor_offset!=null?ft(i,W):H,le=Math.min(ae?.ceiling??1/0,fn(i,C).top);if(ae?.other&&le-H<.12)continue;let Y=Math.min(u(C.a,B,U,U+O,le)-.02,oe+R.sill+R.height),se=Math.min((ae?.stair?qm(ae):H)+R.sill,Y-.1),ge=[ee[1],-ee[0]],Fe=B[0]*ge[0]+B[1]*ge[1]>0,Ae={opening:R,bucket:g.get(C),start:[C.a[0]+B[0]*U,C.a[1]+B[1]*U],axis:B,width:O,toRoom:ee,faceRoom:K?C.left:C.right,faceOut:K?C.right:C.left,sill:se,top:Y,hingeAtStart:R.hinge==="left"===Fe,exterior:C.exterior};x.push(Ae);let Pe=y.get(C);Pe||y.set(C,Pe=[]),Pe.push({s0:U,s1:U+O,sill:se,top:Y,info:Ae})}let b=Math.min(i.cut_height,qt(i)-i.elevation),w=new Je;for(let R of s){let T=g.get(R),P=nu([R.b[0]-R.a[0],R.b[1]-R.a[1]]),C=(y.get(R)??[]).sort((ee,ae)=>ee.s0-ae.s0),D=fn(i,R),B=D.top,L=[],O=[-1/0,...new Set(C.flatMap(ee=>[ee.s0,ee.s1])).values(),1/0].sort((ee,ae)=>ee-ae);for(let ee=0;ee+1<O.length;ee++){let ae=O[ee],H=O[ee+1];if(H-ae<1e-6)continue;let W=Number.isFinite(ae)&&Number.isFinite(H)?(ae+H)/2:Number.isFinite(ae)?ae+1:H-1,oe=C.filter(se=>se.s0<W&&se.s1>W).map(se=>[se.sill,se.top]).sort((se,ge)=>se[0]-ge[0]),le=[],Y=D.bottom-en;for(let[se,ge]of oe)se>Y+1e-4&&le.push([Y,se<1e-4?-gS:se]),Y=Math.max(Y,ge);B>Y+1e-4&&le.push([Y,B]),L.push({t0:ae,t1:H,ranges:le})}let U=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),Z=o&&u(R.a,P,0,U,B)<B-.001,K=Z?L.flatMap(ee=>{let ae=Math.max(ee.t0,-.5),H=Math.min(ee.t1,U+.5),W=Math.max(1,Math.ceil((H-ae)/.3));return Array.from({length:W},(oe,le)=>({t0:le===0?ee.t0:ae+(H-ae)*le/W,t1:le===W-1?ee.t1:ae+(H-ae)*(le+1)/W,ranges:ee.ranges,inner0:le>0,inner1:le<W-1}))}):L.map(ee=>({...ee,inner0:!1,inner1:!1})),Q=ee=>(ee[0]-R.a[0])*P[0]+(ee[1]-R.a[1])*P[1];for(let ee of K){let ae=bS(R.footprint,R.a,P,ee.t0,ee.t1);if(ae.length<3)continue;let H=(le,Y)=>Math.abs(Q(le)-Y)<1e-4,W=(le,Y)=>ee.inner0&&H(le,ee.t0)&&H(Y,ee.t0)||ee.inner1&&H(le,ee.t1)&&H(Y,ee.t1),oe=Z?Math.min(...ae.map(([le,Y])=>c(le,Y,B))):B;for(let[le,Y]of ee.ranges){let se=Math.min(Y,Z?Math.max(...ae.map(([Pe,We])=>c(Pe,We,B))):Y);if(se-le<1e-4||oe-le<.01)continue;let ge=le>.01,Fe=Z&&Y>oe,Ae=(Pe,We)=>Math.min(Y,c(Pe,We,B));if(le<b-1e-6){let Pe=se>b+1e-6?$m+T:kr+T,We=Fe&&oe<b?(at,Mt)=>Math.min(b,Ae(at,Mt)):Math.min(se,b);Tt(w,ae,le,We,ra.wall,ra.wallTop,{aoFrom:0,bottom:ge,fold:kr+T,topFold:Pe,skipSide:W})}se>b+1e-6&&oe>b+1e-6&&Tt(w,ae,Math.max(le,b),Fe?Ae:se,ra.wall,ra.wallTop,{aoFrom:0,fold:T,bottom:ge&&le>=b,skipSide:W})}}}let M=s.flatMap(R=>R.footprint),E=yS(s,M),v=new Ft;v.p.push(...f.p),v.c.push(...f.c),v.f.push(...f.f);for(let R of l){let T=R.stair;if(!T)continue;let P=(B,L)=>[R.start[0]+R.axis[0]*B+T.toward[0]*L,R.start[1]+R.axis[1]*B+T.toward[1]*L],C=Qc[T.room.floor_material]?.color??Qc.wood.color;for(let B=0;B<T.count;B++){let L=T.face+T.depth*B/T.count,O=T.face+T.depth*(B+1)/T.count,U=T.recess?R.low+(R.high-R.low)*(B+1)/T.count:R.high-(R.high-R.low)*B/T.count,Z=sa([P(0,L),P(R.width,L),P(R.width,O),P(0,O)]);Tt(w,Z,R.low-.02,U,C,C,{bottom:!0});let K=P(0,L),Q=P(R.width,L);v.seg([K[0],U+.003,K[1]],[Q[0],U+.003,Q[1]],jn)}let D=T.offset===0?-R.wall.left-R.wall.right:T.back;if(T.face>D+1e-6){let B=sa([P(0,D),P(R.width,D),P(R.width,T.face),P(0,T.face)]);Tt(w,B,R.threshold-.02,R.threshold,C,C,{bottom:!0})}}let S=(R,T)=>(y.get(R)??[]).filter(T);for(let R of E.edges){let T=g.get(R.wall),P=fn(i,R.wall).bottom;for(let[D,B]of tu(R,S(R.wall,L=>L.sill<=P+.005)))v.seg([D[0],P+.004,D[1]],[B[0],P+.004,B[1]],Uc);for(let[D,B]of tu(R,S(R.wall,L=>L.sill<b&&L.top>b)))v.seg([D[0],b,D[1]],[B[0],b,B[1]],od,Vc+T);let C=fn(i,R.wall).top;for(let[D,B]of tu(R,S(R.wall,L=>L.top>=C-.021))){if(!o){v.seg([D[0],C,D[1]],[B[0],C,B[1]],jn,C<=b+1e-6?kr+T:T);continue}let L=Math.max(1,Math.ceil(Math.hypot(B[0]-D[0],B[1]-D[1])/.3));for(let O=0;O<L;O++){let U=[D[0]+(B[0]-D[0])*O/L,D[1]+(B[1]-D[1])*O/L],Z=[D[0]+(B[0]-D[0])*(O+1)/L,D[1]+(B[1]-D[1])*(O+1)/L],K=c(U[0],U[1],C),Q=c(Z[0],Z[1],C);v.seg([U[0],K,U[1]],[Z[0],Q,Z[1]],jn,Math.max(K,Q)<=b+1e-6?kr+T:T)}}}for(let R of E.corners){let T=c(R.p[0],R.p[1],fn(i,R.wall).top);v.segSplit([R.p[0],fn(i,R.wall).bottom+.004,R.p[1]],[R.p[0],T,R.p[1]],mi,Math.min(b,T),g.get(R.wall))}for(let R of y.values())for(let T of R)_S(v,T,b);let A=xS(E.edges,i,y);a0(A,i,s,x,[...n,...p],s.map(R=>g.get(R)??0));let k=new Je;n0(w,v,i,k);for(let R of r)Ed(w,v,R.face,R.field,i.elevation);let F=[];for(let R of i.furniture){if(Pm(R.type))continue;let T=w.count,P=v.p.length/6,C=Rt(i,R),D=xn(i,R.x,R.z),B=A.p.length;Hc(w,v,A,R,C-D);for(let L=T*9+1;L<w.p.length;L+=3)w.p[L]+=D;for(let L=P*6+1;L<v.p.length;L+=3)v.p[L]+=D;for(let L=B+1;L<A.p.length;L+=3)A.p[L]+=D;(C+R.h>b+.05||R.rotation_x||R.rotation_z)&&(Gc(w,T,b,Xs),Jm(v,P,b,Xs)),F.push({id:R.id,start:T,end:w.count})}return{floor:h.geometry(),roomTris:d,holes:p,walls:w.geometry(),water:k.geometry(),lines:v.geometry(),shadow:A.geometry(),buckets:m,openings:x,walls2d:s,openRooms:a,wallBuckets:s.map(R=>g.get(R)),furnitureTris:F,roofUnder:o}}function _S(i,e,t){let{info:n}=e,r=n.bucket,o=(l,c,u)=>[n.start[0]+n.axis[0]*(l-e.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-e.s0)+n.toRoom[1]*c],s=l=>l>t+1e-6?r:$e,a=e.sill<0?e.sill:Math.max(e.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[e.s0,e.s1])i.segSplit(o(c,l,a),o(c,l,e.top),mi,t,r);i.seg(o(e.s0,l,e.top),o(e.s1,l,e.top),mi,s(e.top)),Math.abs(e.sill)>.01&&i.seg(o(e.s0,l,e.sill),o(e.s1,l,e.sill),mi,s(e.sill))}for(let l of[e.s0,e.s1])i.seg(o(l,n.faceRoom,e.top),o(l,-n.faceOut,e.top),mi,s(e.top)),Math.abs(e.sill)>.01&&i.seg(o(l,n.faceRoom,e.sill),o(l,-n.faceOut,e.sill),mi,s(e.sill)),e.sill<t&&e.top>t&&i.seg(o(l,n.faceRoom,t),o(l,-n.faceOut,t),od,Vc+r)}function bS(i,e,t,n,r){let o=a=>(a[0]-e[0])*t[0]+(a[1]-e[1])*t[1],s=i;return Number.isFinite(n)&&(s=W0(s,a=>o(a)-n)),Number.isFinite(r)&&(s=W0(s,a=>r-o(a))),s}function W0(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=e(r),a=e(o);if(s>=0&&t.push(r),s>=0!=a>=0){let l=s/(s-a);t.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return t}var X0=i=>Math.round(i*1e3),aa=i=>`${X0(i[0])},${X0(i[1])}`,K0=(i,e)=>{let t=aa(i),n=aa(e);return t<n?`${t}|${n}`:`${n}|${t}`};function vS(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let h of e){let d=((h[0]-r[0])*s+(h[1]-r[1])*a)/l;if(d<=1e-6||d>=1-1e-6)continue;Math.abs((h[0]-r[0])*a-(h[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(d)}c.sort((h,d)=>h-d);let u=r;for(let h of c){let d=[r[0]+s*h,r[1]+a*h];aa(d)!==aa(u)&&t.push([u,d]),u=d}t.push([u,o])}return t}function yS(i,e){let t=i.map(l=>({wall:l,edges:vS(l.footprint,e)})),n=new Map;for(let{edges:l}of t)for(let[c,u]of l){let h=K0(c,u);n.set(h,(n.get(h)??0)+1)}let r=[],o=new Map,s=(l,c,u)=>{let h=aa(l),d=o.get(h);d||o.set(h,d={p:l,wall:c,d:[]}),d.d.push(u)};for(let{wall:l,edges:c}of t)for(let[u,h]of c){if(n.get(K0(u,h))!==1)continue;let d=Math.hypot(h[0]-u[0],h[1]-u[1]);if(d<1e-4)continue;r.push({a:u,b:h,wall:l});let f=[(h[0]-u[0])/d,(h[1]-u[1])/d];s(u,l,f),s(h,l,f)}let a=[];for(let{p:l,wall:c,d:u}of o.values())u.some(h=>u.some(d=>Math.abs(h[0]*d[1]-h[1]*d[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function tu(i,e){if(!e.length)return[[i.a,i.b]];let t=nu([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=nu([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(t[0]*n[0]+t[1]*n[1])<.99)return[[i.a,i.b]];let r=h=>(h[0]-i.wall.a[0])*t[0]+(h[1]-i.wall.a[1])*t[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let h of e)c=c.flatMap(([d,f])=>{if(h.s1<=d||h.s0>=f)return[[d,f]];let p=[];return h.s0>d&&p.push([d,h.s0]),h.s1<f&&p.push([h.s1,f]),p});let u=h=>{let d=(h-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*d,i.a[1]+(i.b[1]-i.a[1])*d]};return c.filter(([h,d])=>d-h>1e-4).map(([h,d])=>o<=s?[u(h),u(d)]:[u(d),u(h)])}function xS(i,e,t){let n=new Je,r=new J(Rd,Rd,Rd),o=new J(1,1,1);for(let s of i){let a=s.b[0]-s.a[0],l=s.b[1]-s.a[1],c=Math.hypot(a,l)||1,u=[(s.a[0]+s.b[0])/2+l/c*.05,(s.a[1]+s.b[1])/2-a/c*.05],h=e.rooms.find(p=>Oe(u,p.points)),d=ft(e,h),f=d+.002;for(let[p,_]of tu(s,(t.get(s.wall)??[]).filter(m=>m.sill<=d+.005))){let m=_[0]-p[0],g=_[1]-p[1],y=Math.hypot(m,g);if(y<.05)continue;let x=[g/y,-m/y],b=[(p[0]+_[0])/2+x[0]*.05,(p[1]+_[1])/2+x[1]*.05];if(!e.rooms.some(E=>E.points.length>=3&&Oe(b,E.points)))continue;let w=[p[0]+x[0]*eu,p[1]+x[1]*eu],M=[_[0]+x[0]*eu,_[1]+x[1]*eu];n.tri([p[0],f,p[1]],[w[0],f,w[1]],[M[0],f,M[1]],r,o,o),n.tri([p[0],f,p[1]],[M[0],f,M[1]],[_[0],f,_[1]],r,o,r)}}return n}function q0(i,e){let t=e.furniture.filter(o=>o.type==="stairwell").map(Qi),n=i.filter(o=>o.elevation<e.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return ud(t);let r=n.furniture.filter(o=>(Rm.has(o.type)||gt(o.type)?.hole)&&n.elevation+Rt(n,o)+o.h>=e.elevation+xn(e,o.x,o.z)-.3).map(Qi);return ud([...t,...r])}function nu(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function sa(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}var wS=new J(1516340),MS=new J(527897),kd=new J(1779256),la=new J(1120808),SS=new J(4163256),Z0=new J(5995161),TS=new J(2240842),AS=new J(1318704),ES=.35,Lo=.8,RS=.2,$0=.1;function kS(i,e){if(i.settings.terrain?.earth===!1||e.elevation>.3)return!1;let t=J0(i,e);return!!t&&t.some(([n,r])=>Cc(n,r)-e.elevation>-.15)}function J0(i,e){return e.rooms.some(t=>t.points.length>=3)?Gm(e.rooms,e.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function PS(i,e,t,n){let r=-1/0;for(let o of i.floors)for(let s of o.outdoor??[])s.points.length<3||s.type==="pool"||fi(s.type)||!Oe(t,s.points)||(r=Math.max(r,o.elevation+Tr(o,s)+So[s.type]-e.elevation));return r>n?r-n:0}function j0(i,e,t,n=!1){if(i.settings.terrain?.earth===!1||e.elevation>.3)return null;let r=J0(i,e);if(!r)return null;let o=(p,_)=>Cc(p,_)-e.elevation,s=n&&r.some(([p,_])=>o(p,_)<-en-.03);if(!s&&!kS(i,e))return null;let a=e.height,l=-ES,c=(p,_)=>Math.min(a,Cc(p,_)-e.elevation),u=new Je,h=new Je,d=new Ft,f=(p,_,m,g,y,x,b,w)=>{let M=[_[0]-p[0],_[2]-p[2]];-M[1]*y[0]+M[0]*y[1]>0?(w.tri(p,_,m,x,x,b),w.tri(p,m,g,x,b,b)):(w.tri(p,m,_,x,b,x),w.tri(p,g,m,x,b,b))};for(let p=0;p<r.length;p++){let _=r[p],m=r[(p+1)%r.length],g=Math.hypot(m[0]-_[0],m[1]-_[1]);if(g<1e-4)continue;let y=[(m[0]-_[0])/g,(m[1]-_[1])/g],x=[y[1],-y[0]],b=[(_[0]+m[0])/2+x[0]*.05,(_[1]+m[1])/2+x[1]*.05];Oe(b,r)&&(x=[-x[0],-x[1]]);let w=(A,k=.012)=>[_[0]+y[0]*A+x[0]*k,_[1]+y[1]*A+x[1]*k],M=[];for(let A of t){if(A.opening.type!=="window"||!A.exterior||A.opening.well===!1)continue;let k=A.start[0]+A.axis[0]*(A.width/2)-A.toRoom[0]*A.faceOut,F=A.start[1]+A.axis[1]*(A.width/2)-A.toRoom[1]*A.faceOut,R=(k-_[0])*y[0]+(F-_[1])*y[1];Math.abs((k-_[0])*x[0]+(F-_[1])*x[1])>.08||R<-.05||R>g+.05||A.sill>=c(k,F)-.05||M.push({s0:Math.max(0,R-A.width/2-$0),s1:Math.min(g,R+A.width/2+$0),bottom:Math.max(l+.05,A.sill-RS),rim:A.opening.well_rim??0})}let E=new Set([0,g]);for(let A of M)E.add(A.s0),E.add(A.s1);let v=[...E].sort((A,k)=>A-k),S=[];for(let A=0;A<v.length-1;A++){let k=Math.max(1,Math.ceil((v[A+1]-v[A])/.5));for(let F=0;F<k;F++)S.push(v[A]+(v[A+1]-v[A])*F/k)}S.push(g);for(let A=0;A<S.length-1;A++){let k=S[A],F=S[A+1],R=M.find(Z=>k>=Z.s0-1e-6&&F<=Z.s1+1e-6),T=w(k),P=w(F),C=c(T[0],T[1]),D=c(P[0],P[1]),B=R?Math.min(C,R.bottom):C,L=R?Math.min(D,R.bottom):D;if(B>l+.01||L>l+.01){let Z=Math.min(B,l),K=Math.min(L,l);f([T[0],Z,T[1]],[P[0],K,P[1]],[P[0],Math.max(L,l),P[1]],[T[0],Math.max(B,l),T[1]],x,MS,wS,u)}let O=o(T[0],T[1]),U=o(P[0],P[1]);if(s&&(O<-en-.01||U<-en-.01)&&f([T[0],Math.min(O,-en),T[1]],[P[0],Math.min(U,-en),P[1]],[P[0],-en,P[1]],[T[0],-en,T[1]],x,AS,TS,u),C>l||D>l||s&&(O<-en||U<-en)){let Z=s?Math.min(O,Math.max(C,l)):Math.max(C,l),K=s?Math.min(U,Math.max(D,l)):Math.max(D,l);d.seg([T[0],Z+.004,T[1]],[P[0],K+.004,P[1]],SS)}}for(let A of M){let k=w(A.s0,0),F=w(A.s1,0),R=[k[0]+x[0]*Lo,k[1]+x[1]*Lo],T=[F[0]+x[0]*Lo,F[1]+x[1]*Lo],P=[(k[0]+F[0]+R[0]+T[0])/4,(k[1]+F[1]+R[1]+T[1])/4],C=PS(i,e,P,c(P[0],P[1])),D=Math.max(A.rim,C>0?C+.02:0),B=Q=>c(Q[0],Q[1])+D,L=A.bottom,O=(Q,ee)=>[Q[0],ee,Q[1]];h.tri(O(k,L),O(F,L),O(T,L),la),h.tri(O(k,L),O(T,L),O(R,L),la);let U=(Q,ee)=>{h.tri(O(Q,L),O(ee,L),O(ee,B(ee)),la,la,kd),h.tri(O(Q,L),O(ee,B(ee)),O(Q,B(Q)),la,kd,kd)};U(k,R),U(F,T),U(R,T);let Z=Q=>[Q[0],B(Q)+.01,Q[1]];for(let[Q,ee]of[[k,F],[F,T],[T,R],[R,k]])d.seg(Z(Q),Z(ee),Z0);let K=Math.max(3,Math.round((A.s1-A.s0)/.12));for(let Q=1;Q<K;Q++){let ee=Q/K,ae=[k[0]+(F[0]-k[0])*ee,k[1]+(F[1]-k[1])*ee];d.seg(Z(ae),Z([ae[0]+x[0]*Lo,ae[1]+x[1]*Lo]),Z0)}}}return u.count||h.count?{earth:u,wells:h,lines:d}:null}var Q0=i=>Math.round(i*1e3)/1e3;function CS(i,e,t,n){let r=Math.hypot(n[0]-t[0],n[1]-t[1]);if(r<.01)return!1;let o=[(n[0]-t[0])/r,(n[1]-t[1])/r],s=l=>Math.abs(-(l[0]-t[0])*o[1]+(l[1]-t[1])*o[0]),a=l=>(l[0]-t[0])*o[0]+(l[1]-t[1])*o[1];return i.rooms.some(l=>l.id!==e&&l.points.some((c,u)=>{let h=l.points[(u+1)%l.points.length];return s(c)>.02||s(h)>.02?!1:Math.min(r,Math.max(a(c),a(h)))-Math.max(0,Math.min(a(c),a(h)))>.05}))}function eg(i,e,t,n,r,o=.05){let s=i.rooms.find(d=>d.points.length>=3&&Oe([e.x,e.z],d.points));if(!s)return[t,n];let a=s.points,l=kn(a)>=0?1:-1,c=Qi({...e}),u=t,h=n;for(let d=0;d<2;d++){let f=Qi({...e,x:u,z:h});for(let p=0;p<a.length;p++){let _=a[p],m=a[(p+1)%a.length],g=Math.hypot(m[0]-_[0],m[1]-_[1]);if(g<.05)continue;let y=[(m[0]-_[0])/g,(m[1]-_[1])/g],x=[-y[1]*l,y[0]*l],b=CS(i,s.id,_,m)?r/2:0,w=0;f.forEach((M,E)=>{let v=(M[0]-_[0])*y[0]+(M[1]-_[1])*y[1];if(v<-.01||v>g+.01)return;let S=(M[0]-_[0])*x[0]+(M[1]-_[1])*x[1]-b,A=c[E];(A[0]-_[0])*x[0]+(A[1]-_[1])*x[1]-b<-o||S<w&&(w=S)}),w<-1e-4&&(u-=x[0]*w,h-=x[1]*w)}}return[Q0(u),Q0(h)]}var IS=500,tg=.12,ng=1.35,FS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,iu=class{view={target:new V,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(e,t,n){this.el=e,this.camera=t,this.events=n;let r=(o,s,a)=>{e.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[e,t]of this.listeners)this.el.removeEventListener(e,t)}get active(){return this.pointers.size>0||this.flight!==null}update(e){let t=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,h=Math.min(1,(e-c)/u),d=FS(h);this.view.target.lerpVectors(a.target,l.target,d),this.view.radius=a.radius+(l.radius-a.radius)*d,this.view.theta=a.theta+(l.theta-a.theta)*d,this.view.phi=a.phi+(l.phi-a.phi)*d,h>=1&&(this.flight=null),t=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Pd(this.view.phi+this.velocity.phi,tg,ng),this.velocity.theta*=.9,this.velocity.phi*=.9,t=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),t}flyTo(e,t=700){let n={...this.view,target:this.view.target.clone()},r=e.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let o={target:(e.target??n.target).clone(),radius:e.radius??n.radius,theta:r,phi:e.phi??n.phi};this.velocity={theta:0,phi:0},t<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:n,to:o,start:performance.now(),duration:t},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(e){let t=this.el.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}onDown(e){if(this.el.setPointerCapture(e.pointerId),this.pointers.size===0&&e.button===0&&this.events.grab?.(...this.local(e))){this.grabbing=!0,this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:e.clientX,y:e.clientY,time:performance.now(),moved:!1};let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},IS)}else this.down=null,this.pinch=this.pinchState()}onMove(e){let t=this.pointers.get(e.pointerId);if(!t)return;if(this.grabbing){this.events.drag?.(...this.local(e));return}let n=e.clientX-t.x,r=e.clientY-t.y;if(this.swiping){this.events.swipeMove?.(e.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&t.button===0&&!e.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,e.clientX-this.down.x,e.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(e.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){t.x=e.clientX,t.y=e.clientY;return}let o=t.type==="mouse";if(o&&!this.leftDragTurns&&t.button===0){t.x=e.clientX,t.y=e.clientY;return}if((t.button===1||t.button===2||e.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=Pd(this.view.phi+c,tg,ng),this.velocity={theta:l,phi:c}}t.x=e.clientX,t.y=e.clientY}else{t.x=e.clientX,t.y=e.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(e){if(this.pointers.has(e.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(e.pointerId),this.events.drop?.();return}if(this.pointers.delete(e.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&e.type==="pointerup"&&performance.now()-this.down.time<400){let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(e){e.preventDefault(),this.flight=null,this.zoom(Math.exp(e.deltaY*(e.deltaMode===1?.05:.0015))),this.events.change()}zoom(e){this.view.radius=Pd(this.view.radius*e,this.minRadius,this.maxRadius)}pan(e,t){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new V(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new V(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-e*r),this.view.target.addScaledVector(s,t*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t.x-n.x,t.y-n.y),mid:[(t.x+n.x)/2,(t.y+n.y)/2]}}};function Pd(i,e,t){return Math.min(t,Math.max(e,i))}function sr(i,e,t="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=e.standing,n.uniforms.uGlass=e.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${t}`,i}function ru(i,e,t,n){let r=Math.min(1,Math.max(0,(i/e-.62)/.3)),o=t?1:.94*r;return{opacity:o,lift:t?0:(1-(n??o))*2.2}}function ig(i,e){return i.onBeforeCompile=t=>{t.uniforms.uRoofDirection=e,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform vec3 uRoofDirection;
varying float vRoofGlass;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 roofNormal = mat3(modelMatrix) * normal;
      if (roofNormal.y < 0.0) roofNormal = -roofNormal;
      float roofHorizontal = length(roofNormal.xz);
      vRoofGlass = roofHorizontal < 0.000001 ? smoothstep(-0.15, 0.15, uRoofDirection.y) : smoothstep(0.1, 0.4, dot(roofNormal.xz / roofHorizontal, uRoofDirection.xz));`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vRoofGlass;`).replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075), vRoofGlass);
      diffuseColor.a *= mix(1.0, 0.2, vRoofGlass);`)},i.customProgramCacheKey=()=>"fp3d-roof-glass",i}function rg(i,e,t,n,r,o,s=[]){if(n.elevation<=2||r>=.97)return;let a=Math.min(1,n.elevation/12)*(1-.8*r),l=new J(.045*a,.051*a,.06*a),c=new Map(Ri(e).map(u=>[u.key,u]));for(let u of e.settings.roof.windows??[]){let h=c.get(u.face);if(!h)continue;let d=ea(e,h,u);if(d?.floor.id!==t.id)continue;let f=t.rooms.find(m=>m.id===d.roomId);if(!f)continue;let p=ft(t,f)+.019,_=Math.min(1,Math.max(0,o.get(u.id)?.cover??0));if(!(_>=.99))for(let m of Js(u,_,!0)){let g=m.map(([y,x])=>[h.o[0]+h.eu[0]*(u.u+y*(u.w??.78))+h.es[0]*(u.v+x*(u.h??1.18)),h.o[2]+h.eu[2]*(u.u+y*(u.w??.78))+h.es[2]*(u.v+x*(u.h??1.18)),p]);for(let y of Nn(f.points)){let x=[Us(g,y.map(b=>f.points[b]))];for(let b of s)x=x.flatMap(w=>$s(w,[...b]));for(let b of x)for(let w=1;w+1<b.length;w++)i.tri(...[b[0],b[w],b[w+1]].map(M=>[M[0],p,M[1]]),l)}}}}function og(i,e,t,n,r,o,s=[],a){if(n.elevation<=2||r>=.97)return;let l=n.elevation*Math.PI/180,c=(n.azimuth+(e.settings.north??0))*Math.PI/180,u=[Math.sin(c),-Math.cos(c)],h=[u[0]*Math.cos(l),Math.sin(l),u[1]*Math.cos(l)],d=Math.min(1,n.elevation/12)*(1-.8*r),f=1/Math.tan(l),p=new Map(Ri(e).map(_=>[_.key,_]));for(let _ of e.settings.roof.windows??[]){let m=p.get(_.face);if(!m)continue;let g=ea(e,m,_);if(g?.floor.id!==t.id)continue;let y=g.corners,x=m.n.reduce((B,L,O)=>B+L*h[O],0);if(x<.05)continue;let b=Math.min(1,Math.max(0,o.get(_.id)?.cover??0));if(b>=.99)continue;if(_.points||_.cover_direction&&_.cover_direction!=="top"){let B=t.rooms.find(Q=>Q.id===g.roomId);if(!B)continue;let L=t.rooms.indexOf(B),O=t.rooms.filter((Q,ee)=>Q.id===B.id||a&&a[ee]===a[L]),U=ft(t,B),Z=.14*d*Math.min(1,x*1.5),K=new J(Z,.82*Z,.55*Z);for(let Q of Js(_,b,!0)){let ee=Q.map(([ae,H])=>{let W=m.o.map((le,Y)=>le+m.eu[Y]*(_.u+ae*(_.w??.78))+m.es[Y]*(_.v+H*(_.h??1.18))),oe=Math.min(7,(W[1]-t.elevation-U)*f);return[W[0]-u[0]*oe,W[2]-u[1]*oe,U+.02]});for(let ae of O)for(let H of Nn(ae.points)){let W=[Us(ee,H.map(oe=>ae.points[oe]))];for(let oe of s)W=W.flatMap(le=>$s(le,[...oe]));for(let oe of W)for(let le=1;le+1<oe.length;le++)i.tri(...[oe[0],oe[le],oe[le+1]].map(Y=>[Y[0],Y[2],Y[1]]),K)}}continue}let w=[y.reduce((B,L)=>B+L[0],0)/4,y.reduce((B,L)=>B+L[2],0)/4],M=t.rooms.find(B=>Oe(w,B.points));if(!M)continue;let E=t.rooms.indexOf(M),v=t.rooms.filter((B,L)=>B.id===M.id||a&&a[L]===a[E]),S=ft(t,M),A=(B,L,O)=>B.map((U,Z)=>U+(L[Z]-U)*O),k=(B,L)=>{let O=A(A(y[0],y[1],B),A(y[3],y[2],B),L*(1-b)),U=Math.min(7,(O[1]-t.elevation-S)*f);return[O[0]-u[0]*U,S+.02,O[2]-u[1]*U]},F=(B,L)=>Math.hypot(...B.map((O,U)=>O-L[U])),R=Math.max(1,Math.ceil(F(k(0,0),k(1,0))/.3)),T=Math.max(1,Math.ceil(F(k(0,0),k(0,1))/.25)),P=.14*d*Math.min(1,x*1.5),C=new J(P,.82*P,.55*P),D=C.clone().multiplyScalar(.45);for(let B=0;B<T;B++)for(let L=0;L<R;L++){let O=L/R,U=(L+1)/R,Z=B/T,K=(B+1)/T,Q=k((O+U)/2,(Z+K)/2),ee=[Q[0],Q[2]];if(!v.some(se=>Oe(ee,se.points))||s.some(se=>Oe(ee,se)))continue;let ae=k(O,Z),H=k(U,Z),W=k(U,K),oe=k(O,K),le=C.clone().lerp(D,Z),Y=C.clone().lerp(D,K);i.tri(ae,H,W,le,le,Y),i.tri(ae,W,oe,le,Y,Y)}}}function sg(i,e){return Math.hypot(e[0]-i[0],e[1]-i[1],e[2]-i[2])}function ag(i,e,t=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=sg(o,s),c=sg(s,a),u=Math.min(e,l*.45,c*.45),h=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],d=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(u<.005||h[0]*d[0]+h[1]*d[1]+h[2]*d[2]<-.999){n.push(s);continue}let f=[s[0]+h[0]*u,s[1]+h[1]*u,s[2]+h[2]*u],p=[s[0]+d[0]*u,s[1]+d[1]*u,s[2]+d[2]*u];for(let _=0;_<=t;_++){let m=_/t,g=(1-m)*(1-m),y=2*(1-m)*m,x=m*m;n.push([g*f[0]+y*s[0]+x*p[0],g*f[1]+y*s[1]+x*p[1],g*f[2]+y*s[2]+x*p[2]])}}return n.push(i[i.length-1]),n}var lg=new J(7568261),cg=new J(4869974),LS=new J(3116287),ug=new J(3948872),Cd=Nr([.35,.85,.4]),hg=10;function Nr(i){let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]}function ca(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function dg(i){let e=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],t=Nr(ca(i,e));return[t,Nr(ca(i,t))]}function ki(i,e){let t=.5+.5*Math.max(0,e[0]*Cd[0]+e[1]*Cd[1]+e[2]*Cd[2]);return i.clone().multiplyScalar(t)}function Do(i,e,t,n,r,o=!1){let s=Nr([t[0]-e[0],t[1]-e[1],t[2]-e[2]]),[a,l]=dg(s),c=(u,h)=>{let d=h/hg*Math.PI*2,f=[a[0]*Math.cos(d)+l[0]*Math.sin(d),a[1]*Math.cos(d)+l[1]*Math.sin(d),a[2]*Math.cos(d)+l[2]*Math.sin(d)];return{p:[u[0]+f[0]*n,u[1]+f[1]*n,u[2]+f[2]*n],n:f}};for(let u=0;u<hg;u++){let h=c(e,u),d=c(e,u+1),f=c(t,u),p=c(t,u+1);i.tri(h.p,p.p,f.p,ki(r,h.n),ki(r,p.n),ki(r,f.n)),i.tri(h.p,d.p,p.p,ki(r,h.n),ki(r,d.n),ki(r,p.n)),o&&(i.tri([...e],d.p,h.p,ki(r,[-s[0],-s[1],-s[2]])),i.tri([...t],f.p,p.p,ki(r,s)))}}function DS(i,e,t,n,r,o,s,a){let l=Nr(ca(t,n)),c=(h,d,f)=>[e[0]+t[0]*h*r+n[0]*d*o+l[0]*f*s,e[1]+t[1]*h*r+n[1]*d*o+l[1]*f*s,e[2]+t[2]*h*r+n[2]*d*o+l[2]*f*s],u=[];for(let[h,d]of[[t,.5],[[-t[0],-t[1],-t[2]],-.5]])u.push([h,[c(d,-.5,-.5),c(d,.5,-.5),c(d,.5,.5),c(d,-.5,.5)]]);for(let[h,d]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])u.push([h,[c(-.5,d,-.5),c(.5,d,-.5),c(.5,d,.5),c(-.5,d,.5)]]);for(let[h,d]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])u.push([h,[c(-.5,-.5,d),c(.5,-.5,d),c(.5,.5,d),c(-.5,.5,d)]]);for(let[h,d]of u){let f=ki(a,h);i.tri(d[0],d[1],d[2],f),i.tri(d[0],d[2],d[3],f),i.tri(d[0],d[2],d[1],f),i.tri(d[0],d[3],d[2],f)}}function fg(i,e){if(e.points.length<2)return;let t=e.radius,n=ag(e.points,t*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?lg.clone().multiplyScalar(.55):lg;Do(i,o,s,t,a,r===1||r===n.length-1)}for(let r of e.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);Do(i,s,a,t*1.22,cg,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);Do(i,s,a,t*1.08,e.water?new J(...e.water).multiplyScalar(.9):new J(10475240),!0);for(let l of o(.08)){let[c,u]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Do(i,c,u,t*1.3,cg,!0)}}else{let[s,a]=o(.055);Do(i,s,a,t*1.4,ug,!0);let[l]=dg(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],u=[r.p[0]+c[0]*t*2,r.p[1]+c[1]*t*2,r.p[2]+c[2]*t*2];Do(i,[r.p[0]+c[0]*t*1.3,r.p[1]+c[1]*t*1.3,r.p[2]+c[2]*t*1.3],u,t*.35,ug,!0);let h=r.open===!1?Nr(ca(r.dir,c)):r.dir,d=Nr(ca(h,c)),f=[u[0]+h[0]*.045,u[1]+h[1]*.045,u[2]+h[2]*.045];DS(i,f,h,d,.1,.028,.012,LS)}}}var Id=1.62,zS=.2,Fd=class{solids=[];doors=[];rooms;walls;building;floor;constructor(e,t){this.building=e,this.floor=t;let n=e.settings;this.rooms=t.rooms.filter(s=>s.points.length>=3);let r=Ei(this.rooms,{exterior:n.wall_exterior,interior:n.wall_interior},t.walls??[]);this.walls=r.walls;let o=new Map;for(let s of t.openings){if(!(s.type!=="window"||s.sill<.1))continue;let l=Er(s,t.rooms,t.walls??[]);if(!l)continue;let c=Rr(this.walls,s,l);if(!c)continue;let u=o.get(c.wall)??[];u.push([c.s-s.width/2+.05,c.s+s.width/2-.05]),o.set(c.wall,u);let h=c.wall,d=h.b[0]-h.a[0],f=h.b[1]-h.a[1],p=Math.hypot(d,f)||1,_=d/p,m=f/p,g=[h.a[0]+_*c.s,h.a[1]+m*c.s],y=h.left+.45,x=h.right+.45;this.doors.push({centre:g,p:[[g[0]-m*y,g[1]+_*y],[g[0]+m*x,g[1]-_*x]]})}for(let s of this.walls){if(s.height!==void 0&&s.height<.9)continue;let a=s.b[0]-s.a[0],l=s.b[1]-s.a[1],c=Math.hypot(a,l);c<1e-6||this.solids.push({a:s.a,u:[a/c,l/c],len:c,left:s.left,right:s.right,gaps:o.get(s)??[]})}}blocked(e,t=zS){for(let n of this.solids){let r=e[0]-n.a[0],o=e[1]-n.a[1],s=r*n.u[0]+o*n.u[1];if(s<-t||s>n.len+t)continue;let a=-r*n.u[1]+o*n.u[0];if(!(a>n.left+t||a<-n.right-t)&&!n.gaps.some(([l,c])=>s>l+t*.6&&s<c-t*.6))return!0}return!1}clear(e,t){let n=Math.hypot(t[0]-e[0],t[1]-e[1]),r=Math.max(1,Math.ceil(n/.08));for(let o=1;o<=r;o++){let s=o/r;if(this.blocked([e[0]+(t[0]-e[0])*s,e[1]+(t[1]-e[1])*s]))return!1}return!0}roomAt(e){return this.rooms.find(t=>Oe(e,t.points))??null}path(e,t){if(this.clear(e,t))return[t];let n=[e,t,...this.doors.flatMap(h=>h.p).filter(h=>!this.blocked(h))],r=n.length,o=new Array(r).fill(1/0),s=new Array(r).fill(-1),a=new Array(r).fill(!1);o[0]=0;let l=new Map,c=(h,d)=>{let f=h<d?`${h}:${d}`:`${d}:${h}`,p=l.get(f);return p===void 0&&(p=this.clear(n[h],n[d]),l.set(f,p)),p};for(;;){let h=-1;for(let d=0;d<r;d++)!a[d]&&o[d]<1/0&&(h<0||o[d]<o[h])&&(h=d);if(h<0)return null;if(h===1)break;a[h]=!0;for(let d=0;d<r;d++){if(a[d]||d===h)continue;let f=Math.hypot(n[h][0]-n[d][0],n[h][1]-n[d][1]);o[h]+f>=o[d]||c(h,d)&&(o[d]=o[h]+f,s[d]=h)}}let u=[];for(let h=1;h>0;h=s[h])u.unshift(n[h]);return u}start(e=!1){for(let r of e?this.floor.openings:[]){if(r.type!=="door")continue;let o=Er(r,this.floor.rooms,this.floor.walls??[]);if(!o)continue;let s=Rr(this.walls,r,o);if(!s||!s.wall.exterior)continue;let a=s.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c)||1,h=l/u,d=c/u,f=[a.a[0]+h*s.s,a.a[1]+d*s.s],p=[f[0]-d*(a.left+.9),f[1]+h*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(h,-d))}}let t=[...this.rooms].sort((r,o)=>pg(o)-pg(r))[0],n=t?this.freeNear(ji(t.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(e,t,n=9){let r=Math.cos(t),o=Math.sin(t);for(let s=.2;s<n;s+=.15)if(this.blocked([e[0]+r*s,e[1]+o*s],.05))return s;return n}openYaw(e,t=null){let n=t??0,r=-1;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,a=this.sight(e,s);if(t!==null){let l=Math.abs(s-t)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=s)}return n}freeNear(e){if(!this.blocked(e))return e;for(let t=.2;t<2;t+=.2)for(let n=0;n<6.28;n+=.5){let r=[e[0]+Math.cos(n)*t,e[1]+Math.sin(n)*t];if(!this.blocked(r))return r}return e}};function pg(i){let e=0,t=i.points;for(let n=0;n<t.length;n++){let[r,o]=t[n],[s,a]=t[(n+1)%t.length];e+=r*a-s*o}return Math.abs(e/2)}var Ld=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(e,t,n,r){this.v=e,this.map=t,this.surface=n,this.onRoom=r.onRoom;let o=r.start??(()=>{let s=t.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...o},this.origUpdate=e.controls.update,this.origWalls=e.updateWalls,this.origFov=e.camera.fov,this.origNear=e.camera.near,e.controls.update=()=>this.apply(),e.updateWalls=()=>{for(let s of e.floors)s.mask.standing.value=65535,s.mask.glass.value=0},e.camera.fov=72,e.camera.near=.05,e.camera.updateProjectionMatrix(),e.labels.style.visibility="hidden",this.bind(),this.reportRoom(),e.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[e,t,n,r]of this.listeners)e.removeEventListener(t,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(e,t){this.map=e,this.path=[];let n=t??(()=>{let r=e.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let e=this.v.floorMap.get(this.map.floor.id);return(e?e.floor.elevation+e.y:this.map.floor.elevation)+xn(this.map.floor,this.state.x,this.state.z)+Id}apply(){let{x:e,z:t,yaw:n,pitch:r}=this.state,o=this.floorY(),s=Math.cos(r);return this.v.camera.position.set(e,o,t),this.v.camera.lookAt(e+Math.cos(n)*s,o+Math.sin(r),t+Math.sin(n)*s),this.v.controls.view.target.set(e,o-Id,t),!1}goTo(e){let t=this.map.path([this.state.x,this.state.z],this.map.freeNear(e));return t?(this.path=t,this.kick(),!0):!1}goToRoom(e){return this.goTo(ji(e.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(e=>this.tick(e))),this.v.invalidate()}tick(e){this.raf=0;let t=Math.min(.05,(e-this.last)/1e3);this.last=e;let n=!1,r=this.state,o=0,s=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(o+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(o-=1),this.keys.has("a")&&(s-=1),this.keys.has("d")&&(s+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(o+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*t,n=!0),o||s){this.path=[],this.turnTo=null;let l=1.5*t,c=(Math.cos(r.yaw)*o-Math.sin(r.yaw)*s)*l,u=(Math.sin(r.yaw)*o+Math.cos(r.yaw)*s)*l;this.move(c,u),n=!0}else if(this.path.length){let[l,c]=this.path[0],u=l-r.x,h=c-r.z,d=Math.hypot(u,h),f=1.4*t;d<=f?(r.x=l,r.z=c,this.path.shift()):(r.x+=u/d*f,r.z+=h/d*f,this.turnTo=Math.atan2(h,u)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,t*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(e,t){let n=this.state,r=[n.x+e,n.z+t];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+e,n.z])?this.map.blocked([n.x,n.z+t])||(n.z+=t):n.x+=e}reportRoom(){let e=this.map.roomAt([this.state.x,this.state.z]),t=e?.id??null;t!==this.roomId&&(this.roomId=t,this.onRoom(e))}setStick(e){this.stick=e,this.kick()}floorPoint(e,t){let n=this.surface.getBoundingClientRect(),r=(e-n.left)/n.width*2-1,o=1-(t-n.top)/n.height*2,{yaw:s,pitch:a,x:l,z:c}=this.state,u=this.v.camera.fov*Math.PI/180,h=Math.tan(u/2),d=n.width/n.height,f=Math.cos(a),p=[Math.cos(s)*f,Math.sin(a),Math.sin(s)*f],_=[-Math.sin(s),0,Math.cos(s)],m=[p[1]*_[2]-p[2]*_[1],p[2]*_[0]-p[0]*_[2],p[0]*_[1]-p[1]*_[0]],g=[-m[0],-m[1],-m[2]],y=[p[0]+_[0]*r*h*d+g[0]*o*h,p[1]+_[1]*r*h*d+g[1]*o*h,p[2]+_[2]*r*h*d+g[2]*o*h];if(y[1]>=-.02)return null;let x=Id/-y[1];return[l+y[0]*x,c+y[2]*x]}bind(){let e=(s,a,l,c)=>{s.addEventListener(a,l,c),this.listeners.push([s,a,l,!!c?.capture])},t=null;e(this.surface,"pointerdown",s=>{t||(t={x:s.clientX,y:s.clientY,moved:!1,id:s.pointerId},this.surface.setPointerCapture?.(s.pointerId))}),e(this.surface,"pointermove",s=>{if(!t||s.pointerId!==t.id)return;let a=s.clientX-t.x,l=s.clientY-t.y;if(!t.moved&&Math.hypot(a,l)<5)return;t.moved=!0,t.x=s.clientX,t.y=s.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=s=>{if(!t||s.pointerId!==t.id)return;let a=!t.moved;if(t=null,a){let l=this.floorPoint(s.clientX,s.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};e(this.surface,"pointerup",n),e(this.surface,"pointercancel",()=>t=null),e(this.surface,"wheel",s=>{s.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-s.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=s=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s.key.toLowerCase()),o=s=>!!s.composedPath()[0]?.closest?.("input, textarea, select");e(window,"keydown",s=>{!r(s)||o(s)||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),s.stopImmediatePropagation(),this.keys.add(s.key.toLowerCase()),this.kick())},{capture:!0}),e(window,"keyup",s=>{r(s)&&(this.keys.delete(s.key.toLowerCase()),s.stopImmediatePropagation())},{capture:!0}),e(window,"blur",()=>this.keys.clear())}};function ua(i){return!i||i.state==="unavailable"||i.state==="unknown"}function mg(i,e){if(!i||!e||!/^#[0-9a-f]{6}$/i.test(e))return i;let t=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),n=a=>{let l=Math.max(...a),c=Math.min(...a),u=l-c;return l<=0||u/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/u+6)%6:l===a[1]?(a[2]-a[0])/u+2:(a[0]-a[1])/u+4)*60,u/l]},[r]=n(t),[o]=n(i.color);if(r<0||o<0)return r<0&&o<0?i:null;let s=Math.abs(r-o);return Math.min(s,360-s)<=30?i:null}function Dd(i,e){if(!i||i.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:i.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,r=t.rgb_color,o;return r&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?o=[r[0]/255,r[1]/255,r[2]/255]:typeof t.color_temp_kelvin=="number"?o=NS(t.color_temp_kelvin):o=[1,.71,.28],{color:o,level:n}}function NS(i){let e=Math.min(1,Math.max(0,(i-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}var BS=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function ou(i){if(!i||ua(i))return null;let e=i.attributes.window_state;for(let t of[typeof e=="string"?e:null,i.state]){if(!t)continue;let n=BS.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}var OS=.5;function gg(i,e,t="window"){let n=m=>!!m&&i.states[m]?.state==="on",r=m=>!!m&&!!i.states[m]&&!ua(i.states[m]),o=m=>m?ou(i.states[m]):null,s=m=>{let g=o(m);return e.contactInvert&&m&&m!==e.tilt&&m!==e.tilt2&&g!=="tilted"&&g?g==="open"?"closed":"open":g},a=n(e.tilt2)||s(e.tilt2)==="tilted"||s(e.contact2)==="tilted",l=s(e.contact2)==="open"&&!a?1:0,c=n(e.tilt)||s(e.tilt)==="tilted"||s(e.contact)==="tilted",u=c?1:0,h=e.tiltAngle?Number(i.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(h)){let m=(h-(e.tiltOffset??0))*(e.tiltInvert?-1:1);u=Math.min(1,Math.max(0,m/(e.tiltMax||15))),u<.08&&(u=0),c=u>0}let d=s(e.contact)==="open"&&!c?1:0,f=null,p=e.cover?i.states[e.cover]:void 0,_=US(i,e.position);if(_!==null)f=e.positionInverted?_:1-_;else if(p&&!ua(p)){let m=p.attributes.current_position;typeof m=="number"?f=1-Math.min(100,Math.max(0,m))/100:f=p.state==="closed"?1:p.state==="opening"||p.state==="closing"?.5:0}else e.cover&&(f=0);if(t==="door"){let m=s(e.contact);return{open:m===null?e.shut?0:OS:m==="closed"?0:1,open2:s(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:f,sensed:m!==null||f!==null}}if(t==="garage"){let m=s(e.contact),g=f!==null||m!==null;return f===null&&(f=m===null||m==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:f,sensed:g}}return{open:d,open2:l,tilt:u,tilt2:a?1:0,cover:f,sensed:r(e.contact)||r(e.tilt)||Number.isFinite(h)}}function US(i,e){let t=e?i.states[e]:void 0;if(!t||ua(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function _g(i,e){return!i||e==null||e===1?i:{...i,level:Math.max(.02,Math.min(1.5,i.level*e))}}function su(i,e,t){let n=t?e.states[t]:void 0,r=t===i.entity&&i.color_entity&&i.color_entity!=="none"?e.states[i.color_entity]:void 0;return n?_g(mg(Dd(n,r),i.only_color),i.glow_scale):null}function ti(i){return!!i&&!["unknown","unavailable",""].includes(i.state.toLowerCase())}function ar(i,e){let t=e?Object.prototype.hasOwnProperty.call(i.bindings??{},e)?i.bindings?.[e]:e==="status"?i.status??i.entity:e==="power"?i.power:e==="door_left"?i.door_left:e==="door_right"?i.door_right:null:i.status??i.entity;return t&&t!=="none"?t:null}function zd(i,e){if(!Number.isFinite(i))return null;try{let t=new Intl.DateTimeFormat("en-GB",{timeZone:e??"UTC",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(i),n=Number(t.find(o=>o.type==="hour")?.value),r=Number(t.find(o=>o.type==="minute")?.value);return Number.isFinite(n+r)?{hour:n,minute:r,text:`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`}:null}catch{return null}}function bg(i,e,t,n){if(i.kind==="digital"||i.kind==="analog")return zd(n.time,t.config?.time_zone)?.text??"--:--";let r=ar(e,i.binding),o=r?t.states[r]:void 0;if(!ti(o))return"--:--";let s=o.state,a=String(o.attributes.unit_of_measurement??"");if(i.kind==="duration"){let l={s:1,min:60,h:3600}[i.unit??a],c=s.trim()?Number(s):NaN;if(!l||!Number.isFinite(c)||c<0)return"--:--";let u=Math.round(c*l/60);return`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`}return`${s}${a?` ${a}`:""}`}function Nd(i,e,t){let n=ar(e,i.status?.binding),r=n?t.states[n]:void 0;if(!i.status||!ti(r))return{color:i.color,visible:i.visible!==!1};let o=(s,a)=>s&&Object.prototype.hasOwnProperty.call(s,a)?s[a]:void 0;return{color:o(o(e.status_colors,i.id),r.state)??o(i.status.colors,r.state)??i.color,visible:o(i.status.visibility,r.state)??i.visible!==!1}}function Bd(i,e,t){let n=e.motion_config?.[i.id],r=i.binding?ar(e,i.binding):["fan","washer","dryer"].includes(i.kind)?ar(e):null,o=i.tilt_binding?ar(e,i.tilt_binding):null,s=i.motor_binding?ar(e,i.motor_binding):null,a=i.tilt_angle_binding?ar(e,i.tilt_angle_binding):null,l=r?t.states[r]:void 0;if(["fan","washer","dryer"].includes(i.kind)){let y=ti(l)&&["on","running","active","washing","drying","heating","cooling"].includes(l.state.toLowerCase());return{open:0,tilt:0,known:ti(l),running:y}}let c=ti(l)&&ou(l)!==null,u=o?t.states[o]:void 0,h=ou(l)===(n?.contact_invert?"open":"closed"),d=h&&ti(u)&&["on","open","tilted"].includes(u.state),f=gg(t,{contact:r,tilt:o,tiltAngle:a,cover:null,contactInvert:n?.contact_invert,tiltMax:n?.tilt_max,tiltInvert:n?.tilt_invert},i.kind==="window"?"window":"door"),p=s?t.states[s]:void 0,_=p?.attributes.current_position;if(ti(p)&&typeof _=="number"&&Number.isFinite(_))return{open:Math.min(1,Math.max(0,_/100)),tilt:f.tilt,known:!d&&!(c&&h&&_>1),running:!1};if(ti(p)&&["open","opening","closed","closing"].includes(p.state))return{open:["open","opening"].includes(p.state)?1:0,tilt:f.tilt,known:!d,running:!1};let m=a?t.states[a]:void 0,g=ti(u)&&["on","tilted"].includes(u.state)||ti(m)&&Number.isFinite(Number(m.state))&&f.tilt>0;return{open:f.open,tilt:f.tilt,known:!d&&(!!c||!!g)&&(!o||ti(u)),running:!1}}function vg(i,e,t,n){if(!n.historical||!n.history)return null;let r=[i.binding,i.tilt_binding,i.motor_binding,i.tilt_angle_binding].filter(c=>!!c).map(c=>ar(e,c)).filter(c=>!!c),o=n.history(r,n.time-7*864e5,n.time),s=r.flatMap(c=>(o[c]??[]).filter(u=>u.lu*1e3<=n.time).map(u=>({id:c,row:u}))).sort((c,u)=>c.row.lu-u.row.lu),a={},l=null;for(let{id:c,row:u}of s){a[c]={entity_id:c,state:u.s,attributes:{}};let h=Bd(i,e,{...t,states:a});h.known&&(l=h)}return l}var zo=class{states=new Map;last=null;begin(e){this.last&&(this.last.historical!==e.historical||e.historical&&(e.time<this.last.time||e.seek!==this.last.seek))&&this.states.clear(),this.last={...e}}resolve(e,t){return t.known?(this.states.set(e,t),t):{...this.states.get(e)??{open:0,tilt:0,running:!1,known:!1},known:!1,running:!1}}};var yg={body:1516088,fabric:1713732,cushion:2373217,wood:1647420,white:1911110,metal:2767456,dark:725279,glass:1849938,plant:1191982,pot:1910336,accent:2854835},xg=i=>i.startsWith("#")?parseInt(i.slice(1),16):yg[i]??yg.body;function VS(i,e){let t=document.createElement("canvas");t.width=512,t.height=256;let n=new Xn(t),r=new Ne(new Kn(i,e),new et({map:n,transparent:!0,side:ct,depthWrite:!1}));return r.renderOrder=7,{mesh:r,texture:n}}var au=class{group=new Ct;items=[];memory=new zo;hass=null;moment={time:NaN,historical:!1,playing:!0,seek:0};global=!0;timer;initial=!0;seconds=0;plane=new Sn(new V(0,-1,0),0);clipped=!1;material;invalidate;constructor(e,t,n,r){this.material=t.clone(),this.material.onBeforeCompile=t.onBeforeCompile,this.material.customProgramCacheKey=t.customProgramCacheKey,this.invalidate=n,r&&(this.memory=r);for(let o of e.furniture){let s=Sr(o);if(!s)continue;let a=new Set([...s.motions??[],...s.spots??[]].flatMap(f=>f.parts)),l=s.parts.filter(f=>f.status||f.id&&a.has(f.id));if(!l.length&&!s.displays?.length)continue;let c=new Ct;c.position.set(o.x,Rt(e,o)+o.h/2,o.z),c.rotation.set((o.rotation_x??0)*Math.PI/180,-o.rotation*Math.PI/180,(o.rotation_z??0)*Math.PI/180,"YZX"),c.scale.x=o.mirror?-1:1,this.group.add(c);let u=l.map(f=>{let p=P0({...s,parts:[f]},o);p.translate(0,-o.h/2,0);let _=new Ne(p,f.status?new et({vertexColors:!0,side:ct}):this.material);return c.add(_),_.userData.furnitureId=o.id,{part:f,mesh:_,key:"",baseColors:Float32Array.from(p.getAttribute("color").array)}}),h=(s.motions??[]).map(f=>{let p=new Ct,[_,m,g]=f.pivot;p.position.set(_*o.w,(m-.5)*o.h,g*o.d),c.add(p);for(let y of u.filter(x=>x.part.id&&f.parts.includes(x.part.id)))y.mesh.position.copy(p.position).negate(),p.add(y.mesh);return{definition:f,group:p,state:{open:0,tilt:0,known:!1,running:!1},shown:0,tilt:0}});for(let f of s.spots??[]){let p=new Ct,_=f.pivot??f.position;p.position.set(_[0]*o.w,(_[1]-.5)*o.h,_[2]*o.d);let m=o.spot_config?.[f.id];p.rotation.set((m?.rotation_x??0)*Math.PI/180,-(m?.rotation_y??0)*Math.PI/180,(m?.rotation_z??0)*Math.PI/180,"YZX"),c.add(p);for(let g of u.filter(y=>y.part.id&&f.parts.includes(y.part.id)))g.mesh.position.copy(p.position).negate(),p.add(g.mesh)}let d=(s.displays??[]).map(f=>{let p=VS(f.size[0]*o.w,f.size[1]*o.h),[_,m,g]=f.position;p.mesh.userData.furnitureId=o.id,f.kind==="analog"&&(p.texture.image.height=512),p.mesh.position.set(_*o.w,(m-.5)*o.h,g*o.d),p.mesh.rotation.set(...(f.rotation??[0,0,0]).map(x=>x*Math.PI/180),"YZX");let y=h.find(x=>x.definition.id===f.parent)?.group;return y?(p.mesh.position.sub(y.position),y.add(p.mesh)):c.add(p.mesh),{...p,field:f,key:""}});this.items.push({f:o,group:c,parts:u,motions:h,displays:d})}}meshes(){return this.items.flatMap(e=>[...e.parts.map(t=>t.mesh),...e.displays.map(t=>t.mesh)]).filter(e=>e.visible)}clip(e,t,n){let r=e!==null;this.plane.constant=t+(e??0),this.material.opacity=n;for(let o of this.items.flatMap(s=>[...s.parts.map(a=>a.mesh),...s.displays.map(a=>a.mesh)])){let s=o.material;s.opacity=n,s.transparent=!0,r!==this.clipped&&(s.clippingPlanes=r?[this.plane]:null,s.needsUpdate=!0)}this.clipped=r}update(e,t,n){let r=this.initial||t.historical&&(t.seek!==this.moment.seek||!this.moment.historical);this.initial=!1,this.hass=e,this.moment={...t},this.global=n,this.memory.begin(t);for(let o of this.items){for(let s of o.parts){let a=Nd(s.part,o.f,e),l=JSON.stringify(a);if(s.mesh.visible=a.visible,s.key!==l||s.part.glow||o.motions.some(c=>c.definition.parts.includes(s.part.id??"")&&c.state.running)){s.key=l;let c=new J(xg(a.color)),u=s.mesh.geometry.getAttribute("color");if(a.color===s.part.color)u.array.set(s.baseColors);else for(let h=0;h<u.count;h++)u.setXYZ(h,c.r,c.g,c.b);u.needsUpdate=!0}}for(let s of o.motions){let a=o.f.id+":"+s.definition.id,l=Bd(s.definition,o.f,e);if(!l.known&&t.historical&&r){let c=vg(s.definition,o.f,e,t);c&&this.memory.resolve(a,c)}s.state=this.memory.resolve(a,l),(r||!n||o.f.animations===!1)&&(s.shown=s.state.open,s.tilt=s.state.tilt,this.pose(s,o.f))}for(let s of Sr(o.f)?.spots??[]){let a=o.f.spot_config?.[s.id]?.entity??(s.binding?o.f.bindings?.[s.binding]:null)??o.f.entity,l=su(o.f,e,a);if(l)for(let c of o.parts.filter(u=>u.part.glow&&s.parts.includes(u.part.id??""))){let u=c.mesh.geometry.getAttribute("color"),h=new J(...l.color.map(d=>Math.min(1,d*(.55+.45*l.level))));for(let d=0;d<u.count;d++)u.setXYZ(d,h.r,h.g,h.b);u.needsUpdate=!0}}this.drawDisplays(o)}this.scheduleClock(),this.invalidate()}drawDisplays(e){if(this.hass)for(let t of e.displays){let n=bg(t.field,e.f,this.hass,this.moment);if(n===t.key)continue;t.key=n;let r=t.texture.image,o=r.getContext("2d");if(o.clearRect(0,0,512,r.height),(t.field.kind!=="analog"||t.field.background)&&(o.fillStyle=t.field.background??"#101827",o.fillRect(0,0,512,r.height)),o.fillStyle=t.field.color??"#ffffff",t.field.kind==="analog"){let s=zd(this.moment.time,this.hass.config?.time_zone)??{hour:10,minute:10},a=(l,c,u)=>{o.save(),o.translate(256,256),o.rotate(l),o.strokeStyle=t.field.color??"#ffffff",o.lineWidth=u,o.beginPath(),o.moveTo(0,10),o.lineTo(0,-c),o.stroke(),o.restore()};a((s.hour%12+s.minute/60)*Math.PI/6,144,9),a(s.minute*Math.PI/30,204,5)}else{o.textAlign="center",o.textBaseline="middle",o.font="bold 100px sans-serif";let s=o.measureText(n).width;s>480&&(o.font=`bold ${Math.max(20,Math.floor(100*480/s))}px sans-serif`),o.fillText(n,256,128)}t.texture.needsUpdate=!0}}scheduleClock(){this.timer&&(clearTimeout(this.timer),this.timer=void 0),!(this.moment.historical||!this.items.some(e=>e.displays.some(t=>["analog","digital"].includes(t.field.kind))))&&(this.timer=setTimeout(()=>{this.timer=void 0,this.moment.time=Date.now();for(let e of this.items)this.drawDisplays(e);this.invalidate(),this.scheduleClock()},6e4-Date.now()%6e4+10))}pose(e,t){let n=e.definition.kind,r=t.motion_config?.[e.definition.id],o=r?.direction??e.definition.direction??1;if(n==="slide"){let a=e.definition.axis??"x",l=a==="x"?0:a==="y"?1:2,c=a==="x"?t.w:a==="y"?t.h:t.d;e.group.position[a]=e.definition.pivot[l]*c-(a==="y"?t.h/2:0)+(r?.travel_m??(e.definition.travel??1)*c)*e.shown*o;return}let s=r?.angle??e.definition.angle;if(e.group.rotation[e.definition.axis??"y"]=-(s==null?n==="window"?1.2:1.5:s*Math.PI/180)*e.shown*o,n==="window"){let a=r?.tilt_angle??e.definition.tilt_angle;e.group.rotation.x=-(a==null?.2:a*Math.PI/180)*e.tilt}}step(e){this.seconds+=e/1e3;let t=!1;for(let n of this.items)for(let r of n.motions){let o=this.global&&n.f.animations!==!1;if(["fan","washer","dryer"].includes(r.definition.kind)){if(!o||!r.state.running||this.moment.historical&&!this.moment.playing)continue;if(r.definition.kind==="fan")r.group.rotation[r.definition.axis??"z"]+=e*.008;else{let c=.75+.08*Math.sin(this.seconds);for(let u of n.parts.filter(h=>h.part.id&&r.definition.parts.includes(h.part.id))){let h=this.hass?Nd(u.part,n.f,this.hass):null,d=h&&u.part.status?new J(xg(h.color)).multiplyScalar(c):new J(.3*c,.85*c,c),f=u.mesh.geometry.getAttribute("color");for(let p=0;p<f.count;p++)f.setXYZ(p,d.r,d.g,d.b);f.needsUpdate=!0}}t=!0;continue}if(!o){this.pose(r,n.f);continue}let s=1-Math.exp(-e/160),a=r.state.open-r.shown,l=r.state.tilt-r.tilt;Math.abs(a)<.003&&Math.abs(l)<.003?(r.shown=r.state.open,r.tilt=r.state.tilt):(r.shown+=a*s,r.tilt+=l*s,t=!0),this.pose(r,n.f)}return t}dispose(){this.timer&&clearTimeout(this.timer);for(let e of this.items){for(let t of e.parts)t.mesh.geometry.dispose(),t.mesh.material!==this.material&&t.mesh.material.dispose();for(let t of e.displays)t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.texture.dispose()}this.group.removeFromParent(),this.items=[],this.material.dispose()}};function wg(i,e,t){let n=gt(i.type),r=Rt(e,i);return(n?.spots??[]).flatMap(o=>{let s=i.spot_config?.[o.id],a=s?.entity??(o.binding?i.bindings?.[o.binding]:null)??i.entity,l=a?t.states[a]:void 0;if(!l||l.state!=="on")return[];let c=su(i,t,a);if(!c)return[];let u=o.pivot??o.position,h=new V(o.position[0]*i.w,o.position[1]*i.h,o.position[2]*i.d),d=new V(u[0]*i.w,u[1]*i.h,u[2]*i.d),f=new Wn((s?.rotation_x??0)*Math.PI/180,-(s?.rotation_y??0)*Math.PI/180,(s?.rotation_z??0)*Math.PI/180,"YZX"),p=new V(...o.direction).applyEuler(f).normalize();h.sub(d).applyEuler(f).add(d),h.y-=i.h/2,i.mirror&&(h.x*=-1,p.x*=-1);let _=new Wn((i.rotation_x??0)*Math.PI/180,-i.rotation*Math.PI/180,(i.rotation_z??0)*Math.PI/180,"YZX");h.applyEuler(_).add(new V(i.x,r+i.h/2,i.z)),p.applyEuler(_).normalize();let m=e.rooms.findIndex(g=>Oe([i.x,i.z],g.points));return[{x:h.x,y:h.y,z:h.z,direction:p.toArray(),angle:s?.beam_angle??i.beam_angle??o.angle??60,color:c.color,level:c.level,kind:"spot",room:m<0?e.rooms.length:m}]})}function cu(i,e){return(t,n)=>{let r=e?.(t,n);if(r!=null)return r;let o=i.rooms.find(s=>Oe([t,n],s.points));return o?ft(i,o)+zn(i,o):null}}function GS(i,e,t,n,r=cu(t)){let o=5;e.y<-.001&&(o=Math.min(o,Math.max(.01,(i.y-xn(t,i.x,i.z)-.02)/-e.y)));for(let c of n){let u=c.b[0]-c.a[0],h=c.b[1]-c.a[1],d=e.x*h-e.z*u;if(Math.abs(d)<1e-8)continue;let f=c.a[0]-i.x,p=c.a[1]-i.z,_=(f*h-p*u)/d,m=(f*e.z-p*e.x)/d,g=i.y+_*e.y;if(_<=.01||_>=o||m<0||m>1||g<0||g>c.h)continue;let y=m*Math.hypot(u,h);c.gaps.some(x=>y>=x.s0&&y<=x.s1&&g>=x.y0&&g<=x.y1)||(o=_)}let s=0,a=r(i.x,i.z),l=a!=null&&i.y<=a+.001;for(let c=.025;c<=o+1e-9;c+=.025){let u=r(i.x+e.x*c,i.z+e.z*c),h=i.y+e.y*c;if(u!=null&&l&&h>=u){let d=s,f=c;for(let p=0;p<12;p++){let _=(d+f)/2,m=r(i.x+e.x*_,i.z+e.z*_);m!=null&&i.y+e.y*_>=m?f=_:d=_}o=Math.max(0,f-.002);break}l=u!=null&&h<=u,a=u,s=c}return o}function Mg(i,e,t,n,r){if(!e.direction)return;let o=new V(e.x,e.y,e.z),s=new V(...e.direction).normalize(),a=Math.abs(s.y)<.95?new V(0,1,0):new V(1,0,0),l=new V().crossVectors(s,a).normalize(),c=new V().crossVectors(s,l).normalize(),u=(e.angle??60)*Math.PI/360,h=new J(...e.color.map(p=>p*.09*e.level)),d=new J(0,0,0),f=p=>{let _=p*Math.PI/8,m=s.clone().multiplyScalar(Math.cos(u)).addScaledVector(l,Math.cos(_)*Math.sin(u)).addScaledVector(c,Math.sin(_)*Math.sin(u)).normalize();return o.clone().addScaledVector(m,GS(o,m,t,n,r)).toArray()};for(let p=0;p<16;p++)i.tri(o.toArray(),f(p),f(p+1),h,d,d)}function HS(i,e){let t=gt(e);if(!t)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:e,x:i.x,z:i.z,rotation:i.rotation,rotation_x:i.rotation_x,rotation_z:i.rotation_z,mount_y:i.mount_y,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}function Gd(i,e){if(!i.furniture.some(n=>n.type==="parking"&&e.has(n.id)))return i;let t=i.furniture.flatMap(n=>{let r=n.type==="parking"?e.get(n.id):void 0,o=r?HS(n,r):null;return o?[n,o]:[n]});return{...i,furniture:t}}function Hd(i,e){let t=[],n=[],r=[],o=[],s=[],a=[],l=[];for(let{face:u,field:h}of i){let d=t.length/3,f=h.portrait===!1?10:6,p=h.portrait===!1?6:10,_=WS(h.id)%1e3/1e3;for(let g of Qs(u,h)){let[y,x,b,w]=g.corners.map(v=>[v[0]+u.n[0]*.006,v[1]+u.n[1]*.006-e,v[2]+u.n[2]*.006]),M=$c(y,x,b,u.n),E=[[y,0,0],[x,1,0],[b,1,1],[w,0,1]];for(let v of[0,1,2,0,2,3]){let[S,A,k]=E[v];t.push(S[0],S[1],S[2]),n.push(A,k),r.push(f,p),o.push(_),a.push(...M),l.push(...y)}}let m=t.length/3-d;m&&s.push({id:h.id,start:d,count:m})}if(!t.length)return null;let c=new Ke;return c.setAttribute("position",new we(t,3)),c.setAttribute("uv",new we(n,2)),c.setAttribute("aCells",new we(r,2)),c.setAttribute("aPhase",new we(o,1)),c.setAttribute("aLevel",new we(new Float32Array(t.length/3),1)),{geometry:ta(c,a,l),ranges:s}}function ha(i,e){let t=i.geometry.getAttribute("aLevel"),n=t.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,e.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return t.needsUpdate=!0,r}function Wd(i){let e=new et({transparent:!0,blending:Nt,depthWrite:!1,side:ct});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},e.customProgramCacheKey=()=>"fp3d-solar-live",e}function WS(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619)>>>0;return e}var Tg=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,XS=`
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
`,KS=Tg,YS=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Sg(i,e){let t=[];for(let[r,o,s]of _n(i))for(let a of[r,s,o])t.push(i[a][0],e,i[a][1]);let n=new Ke;return n.setAttribute("position",new we(t,3)),n}function Ag(i,e){let t=new Ct;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new Ne(Sg(n.points,s),new hn({uniforms:{uTime:e,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:Tg,fragmentShader:XS,transparent:!0,blending:Nt,depthWrite:!1,side:ct}));l.renderOrder=5,l.frustumCulled=!1,t.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(m=>m[0]),a=n.points.map(m=>m[1]),[l,c,u,h]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],d=c-l>=h-u,f=Math.min(1,n.cover),p=d?[[l-.1,u-.1],[l+(c-l)*f,u-.1],[l+(c-l)*f,h+.1],[l-.1,h+.1]]:[[l-.1,u-.1],[c+.1,u-.1],[c+.1,u+(h-u)*f],[l-.1,u+(h-u)*f]],_=Po(n.points,p);if(_.length>=3){let m=new Ne(Sg(_,n.y+.03),new hn({uniforms:{uAxis:{value:d?[1,0]:[0,1]}},vertexShader:KS,fragmentShader:YS,transparent:!0,side:ct}));m.renderOrder=6,t.add(m);let g=[];for(let x=0;x<_.length;x++){let b=_[x],w=_[(x+1)%_.length];g.push(b[0],n.y+.032,b[1],w[0],n.y+.032,w[1])}let y=new Ke;y.setAttribute("position",new we(g,3)),t.add(new Xt(y,new jt({color:5995775,transparent:!0,opacity:.6})))}}}return t}function Eg(i){for(let e of i.children)e.geometry?.dispose(),e.material?.dispose?.();i.clear()}var Rg=["neon","blueprint","day"];function kg(i){return Rg.indexOf(i)}var uu={value:new V(.22,.88,1)},hu={value:0};function Pg(i){let e=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!e)return null;let t=parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var qS=`
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
`;function Zt(i,e,t=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=e,o.uniforms.uAccent=uu,o.uniforms.uAccentOn=hu,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${qS}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${t?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${t?"l":"s"}`,i}function No(i){return i==="day"?Yi:Nt}var da={open:0,open2:0,tilt:0,tilt2:0,cover:null},Cg=2043986,Ig=2769520,ZS=2242399,Xd=1845831,$S=1450554,Pi=16758087,JS=1846349,jS=2572395,QS=1120816,e2=1845831,Kd=5995775,Yd=9085695,Br=Ge(3662079,.08);function t2(i,e){let t=Math.min(.4,Math.max(.02,i-.12)),n=Math.min(.3,Math.max(0,(e-.1)/2));return{x0:(i-t)/2,x1:(i+t)/2,y0:n,y1:e-n}}function n2(){let e=gt("pack:local.v2.kuechenmoebel_farben:kitchen_dishwasher_panel_60")?.parts.find(t=>t.id==="p003")?.color;return e?.startsWith("#")?parseInt(e.slice(1),16):10778952}function du(i,e,t,n,r,o,s,a,l,c,u){let h=(f,p,_)=>e(f,p,_),d=[[h(t,r,a),h(n,r,a),h(n,o,a),h(t,o,a),c],[h(t,r,s),h(n,r,s),h(n,o,s),h(t,o,s),Ge(l.getHex(),.6)],[h(t,o,s),h(n,o,s),h(n,o,a),h(t,o,a),l],[h(t,r,s),h(n,r,s),h(n,r,a),h(t,r,a),Ge(l.getHex(),.85)],[h(t,r,s),h(t,o,s),h(t,o,a),h(t,r,a),Ge(l.getHex(),.92)],[h(n,r,s),h(n,o,s),h(n,o,a),h(n,r,a),Ge(l.getHex(),.92)]];for(let[f,p,_,m,g]of d)i.tri(f,p,_,g,g,g,void 0,u),i.tri(f,_,m,g,g,g,void 0,u)}function st(i,e,t,n,r,o,s,a,l,c,u,h){if(a<=u+1e-6)return du(i,e,t,n,r,o,s,a,l,c,$e);if(s>=u-1e-6)return du(i,e,t,n,r,o,s,a,l,c,h);du(i,e,t,n,r,o,s,u,l,c,$e),du(i,e,t,n,r,o,u,a,l,c,h)}function Ci(i,e,t,n,r,o,s,a,l,c,u=0){let h=(d,f,p)=>{let _=b=>u?(s-b)/u:.5,m=e(t,r,d),g=e(n,r,d),y=e(n,r,f),x=e(t,r,f);i.tri(m,g,y,a,a,a,[0,_(d),1,_(d),1,_(f)],p),i.tri(m,y,x,a,a,a,[0,_(d),1,_(f),0,_(f)],p)};s<=l+1e-6?h(o,s,$e):o>=l-1e-6?h(o,s,c):(h(o,l,$e),h(l,s,c))}function i2(i,e,t,n,r,o,s,a,l,c){let u=e(t,r,s),h=e(n,r,s),d=e(n,o,s),f=e(t,o,s),p=0,_=(o-r)/c;i.tri(u,h,d,a,a,a,[0,p,1,p,1,_],l),i.tri(u,d,f,a,a,a,[0,p,1,_,0,_],l)}function Fg(i,e,t,n=!1){let r=new Je,o=new Je,s=new Je(!0),a=new J(Cg),l=new J(Ig),c=[],u=[],h=[];for(let d of i){let f=r.count,p=o.count,_=s.count,m=e.get(d.opening.id)??da,g=d.width,y=d.opening.type==="door"||d.opening.type==="garage"?d.sill:0,x=d.sill-y,b=d.top-y,w=t-y,{bucket:M}=d,E=(k,F,R)=>[d.start[0]+d.axis[0]*k+d.toRoom[0]*F,R+y,d.start[1]+d.axis[1]*k+d.toRoom[1]*F],v=(d.faceRoom-d.faceOut)/2,S=d.opening.mark==="closed",A=d.opening.type==="door"&&Ar(d.opening,d.exterior)==="passage";if(d.opening.type==="door"&&!A||d.opening.type==="garage"){let k=-d.faceOut-.012,F=d.faceRoom+.012,R=d.opening.type==="garage"&&(S?!!m.sensed&&(m.cover??1)>=.95:(m.cover??1)<.95),T=R?Ge(Pi,.8):new J(Cg),P=R?Ge(Pi,1):new J(Ig);st(r,E,-.045,.02,k,F,0,b+.045,T,P,w,M),st(r,E,g-.02,g+.045,k,F,0,b+.045,T,P,w,M),st(r,E,.02,g-.02,k,F,b-.02,b+.045,T,P,w,M)}if(d.opening.type==="door"){let k=Ar(d.opening,d.exterior),F=Im(k),R=d.opening.swing==="out"?-1:1,T=R>0?d.faceRoom:-d.faceOut,P=d.opening.leaves===2,C=.02,D=g-.02,B=Cm(g,k,d.hingeAtStart,d.opening);if(B){let ae=-d.faceOut-.012,H=d.faceRoom+.012,W=T-R*(F?.06:.04)/2,oe=.06;for(let[le,Y]of B.panels)st(r,E,le,le+oe,ae,H,.02,b-.02,a,l,w,M),st(r,E,Y-oe,Y,ae,H,.02,b-.02,a,l,w,M),st(r,E,le+oe,Y-oe,ae,H,.02,.12,a,l,w,M),Ci(o,E,le+oe,Y-oe,W,.12,b-.02,Br,w,M);C=B.x0,D=B.x1}let L=P?(D-C)/2-.004:D-C,O=F?.06:.04;F&&(st(r,E,.02,g-.02,-d.faceOut-.02,d.faceRoom,0,.02,new J(Xd),l,w,M),d.exterior&&k!=="front_slot"&&st(r,E,g/2-.08,g/2+.08,-d.faceOut-.1,-d.faceOut,b+.1,b+.17,Ge(Pi,.55),Ge(Pi,.85),w,$e));let U=A?[]:[[d.hingeAtStart,m.open]];P&&!A&&U.push([!d.hingeAtStart,m.open2??0]);let Z=k==="sliding_glass",K=k==="sliding_wood",Q=Z||K,ee=k==="sliding"||Q;if(Q){let ae=T+R*.055;st(r,E,C-(d.hingeAtStart||P?L:0),D+(!d.hingeAtStart||P?L:0),ae-.025,ae+.025,b+.025,b+.075,new J(Kd),new J(Yd),w,M)}for(let[ae,H]of U){let W=Math.min(1,Math.max(0,H)),oe=ee?0:W*1.5,le=ee?W*L:0,Y=(nt,_t,q)=>{let Wt=nt*Math.cos(oe)-_t*Math.sin(oe)-le,bt=T+R*(_t*Math.cos(oe)+nt*Math.sin(oe)+(Q?.055:le?.05:0));return E(ae?C+Wt:D-Wt,bt,q)},se=W>.05?$e:M,ge=S?!!m.sensed&&W<.05:W>.9,Fe=K&&n?n2():null,Ae=Fe!==null?new J(Fe):ge?Ge(Pi,.7):new J(F?QS:JS),Pe=Fe!==null?Ge(Fe,1.1):ge?Ge(Pi,.9):new J(F?e2:jS);if(k==="front_slot"){let nt=t2(L,b-x),_t=x+nt.y0,q=x+nt.y1;st(r,Y,0,nt.x0,-O,0,.01,b-.01,Ae,Pe,w,se),st(r,Y,nt.x1,L,-O,0,.01,b-.01,Ae,Pe,w,se),st(r,Y,nt.x0,nt.x1,-O,0,.01,_t,Ae,Pe,w,se),st(r,Y,nt.x0,nt.x1,-O,0,q,b-.01,Ae,Pe,w,se),Ci(o,Y,nt.x0,nt.x1,-O/2,_t,q,Br,w,se)}else k==="glass"||Z?(st(r,Y,0,.05,-O,0,.01,b-.01,Ae,Pe,w,se),st(r,Y,L-.05,L,-O,0,.01,b-.01,Ae,Pe,w,se),st(r,Y,.05,L-.05,-O,0,.01,.12,Ae,Pe,w,se),st(r,Y,.05,L-.05,-O,0,b-.08,b-.01,Ae,Pe,w,se),Ci(o,Y,.05,L-.05,-O/2,.12,b-.08,Br,w,se)):st(r,Y,0,L,-O,0,.01,b-.01,Ae,Pe,w,se);k==="front_glass"?Ci(o,Y,.12,L-.12,.001,b*.55,b-.18,Br,w,se):F&&k!=="front_slot"&&Ci(o,Y,.1,.18,.001,.3,b-.3,Br,w,se);let We=Math.min(1.05,b*.5),at=F?.3:Q?.18:.012,Mt=F||Q?L-.11:L-.16,Vt=F||Q?L-.08:L-.05;st(r,Y,Mt,Vt,.004,.05,We-at,We+at,new J(Kd),new J(Yd),w,se),st(r,Y,Mt,Vt,-O-.05,-O-.004,We-at,We+at,new J(Kd),new J(Yd),w,se)}}else if(d.opening.type==="garage"){let k=Math.min(1,Math.max(0,m.cover??1)),F=new J(13951231),R=d.faceRoom-.03,T=b*(1-k);k>.01&&Ci(s,E,.02,g-.02,R,T,b,F,w,M,.5);let P=(1-k)*b;P>.01&&i2(s,E,.02,g-.02,R,R+P,b+.03,F,M,.5)}else if(Ar(d.opening,d.exterior)==="glass_wall"){st(r,E,0,.04,v-.025,v+.025,x,b,a,l,w,M),st(r,E,g-.04,g,v-.025,v+.025,x,b,a,l,w,M),st(r,E,.04,g-.04,v-.025,v+.025,x,x+.03,a,l,w,M),st(r,E,.04,g-.04,v-.025,v+.025,b-.04,b,a,l,w,M);let R=Math.max(1,Math.round((g-2*.04)/.9)),T=(g-2*.04)/R;for(let P=1;P<R;P++){let C=.04+P*T;st(r,E,C-.02,C+.02,v-.025,v+.025,x+.03,b-.04,a,l,w,M)}for(let P=0;P<R;P++){let C=.04+P*T+(P?.02:0),D=.04+(P+1)*T-(P<R-1?.02:0);Ci(o,E,C,D,v,x+.03,b-.04,Br,w,M)}}else{st(r,E,0,.06,v-.035,v+.035,x,b,a,l,w,M),st(r,E,g-.06,g,v-.035,v+.035,x,b,a,l,w,M),st(r,E,.06,g-.06,v-.035,v+.035,x,x+(x>.05?.06:.03),a,l,w,M),st(r,E,.06,g-.06,v-.035,v+.035,b-.06,b,a,l,w,M),x>.3&&(st(r,E,-.04,g+.04,v+.035,d.faceRoom+.07,x-.03,x,new J(Xd),l,w,M),d.exterior&&st(r,E,-.03,g+.03,-d.faceOut-.06,v-.035,x-.04,x-.02,new J(Xd),l,w,M));let R=.055,T=x+(x>.05?.06:.03),P=b-.06,C=v+.035,D=v+.035+.06,L=d.opening.leaves===2?[{atStart:d.hingeAtStart,x0:d.hingeAtStart?.06:g/2,x1:d.hingeAtStart?g/2:g-.06,open:m.open,tilt:m.tilt},{atStart:!d.hingeAtStart,x0:d.hingeAtStart?g/2:.06,x1:d.hingeAtStart?g-.06:g/2,open:m.open2??0,tilt:m.tilt2??0}]:[{atStart:d.hingeAtStart,x0:.06,x1:g-.06,open:m.open,tilt:m.tilt}];for(let O of L){let U=O.open>.02||O.tilt>.02,Z=S?!!m.sensed&&!U:U,K=Z?Ge(Pi,.75):new J(ZS),Q=Z?Ge(Pi,.95):l,ee=O.x0,ae=O.x1,H=ae-ee,W=O.open*1.2*(d.opening.swing==="out"?-1:1),oe=O.tilt*.2,le=(se,ge,Fe)=>{let Ae=Fe-T,Pe=ge+Ae*Math.sin(oe),We=T+Ae*Math.cos(oe),at=se*Math.cos(W)-(Pe-C)*Math.sin(W);Pe=C+(Pe-C)*Math.cos(W)+se*Math.sin(W);let Mt=O.atStart?ee+at:ae-at;return E(Mt,Pe,We)},Y=Math.abs(W)>.05?$e:M;if(st(r,le,0,R,C,D,T,P,K,Q,w,Y),st(r,le,H-R,H,C,D,T,P,K,Q,w,Y),st(r,le,R,H-R,C,D,T,T+R,K,Q,w,Y),st(r,le,R,H-R,C,D,P-R,P,K,Q,w,Y),Ci(o,le,R,H-R,(C+D)/2,T+R,P-R,Z?Ge(Pi,.16):Br,w,Y),Ar(d.opening,d.exterior)==="bars"){let se=(T+P)/2,ge=(C+D)/2;st(r,le,R,H-R,ge-.012,ge+.012,se-.012,se+.012,K,Q,w,Y),st(r,le,H/2-.012,H/2+.012,ge-.012,ge+.012,T+R,P-R,K,Q,w,Y)}}}if(m.cover!==null){let k=-d.faceOut,F=b+.2;st(r,E,-.05,g+.05,k-.15,k,b,F,new J($S),l,w,M);let R=Math.min(1,Math.max(0,m.cover));if(R>.01){let T=b-R*(b-x);Ci(s,E,0,g,k-.07,T,b,new J(16777215),w,M,.045)}}c.push({id:d.opening.id,start:f,end:r.count}),u.push({id:d.opening.id,start:p,end:o.count}),h.push({id:d.opening.id,start:_,end:s.count})}return{frames:r.geometry(),glass:o.geometry(),blinds:s.geometry(),frameTris:c,glassTris:u,blindTris:h}}var r2=.3,Lg=2.6;function Dg(i,e=.32,t=.22,n=[]){let r=i.map(w=>w[0]),o=i.map(w=>w[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),u=c-l>=a-s,h=t*.7071,d=w=>{let M=[w,[w[0]+t,w[1]],[w[0]-t,w[1]],[w[0],w[1]+t],[w[0],w[1]-t]],E=[...M,[w[0]+h,w[1]+h],[w[0]-h,w[1]+h],[w[0]+h,w[1]-h],[w[0]-h,w[1]-h]];return M.every(v=>Oe(v,i))&&!n.some(v=>E.some(S=>Oe(S,v)))},f=(w,M)=>d(u?[w,M]:[M,w]),p=(w,M)=>{let E=Math.ceil(Math.hypot(M[0]-w[0],M[1]-w[1])/.05);for(let v=1;v<E;v++)if(!d([w[0]+(M[0]-w[0])*v/E,w[1]+(M[1]-w[1])*v/E]))return!1;return!0},[_,m,g,y]=u?[s,a,l,c]:[l,c,s,a],x=[],b=!0;for(let w=_+t;w<=m-t+1e-6;w+=e){let M=null,E=null,v=.05;for(let F=g;F<=y+1e-6;F+=v)if(f(w,F)&&(E??=F),(!f(w,F)||F+v>y+1e-6)&&E!==null){let R=f(w,F)?F:F-v;(!M||R-E>M[1]-M[0])&&(M=[E,R]),E=null}if(!M||M[1]-M[0]<.2)continue;let S=F=>{let[R,T]=F?M:[M[1],M[0]];return[u?[w,R]:[R,w],u?[w,T]:[T,w]]},A=S(b),k=x[x.length-1];if(k&&n.length&&!p(k,A[0])){let F=S(!b);if(!p(k,F[0]))continue;A=F,b=!b}x.push(A[0],A[1]),b=!b}return x}function Zd(i,e=.7,t=12){return Array.from({length:t},(n,r)=>{let o=r/t*Math.PI*2;return[i[0]+Math.cos(o)*e,i[1]+Math.sin(o)*e]})}var qd=i=>Math.atan2(Math.sin(i),Math.cos(i));function zg(i,e,t){let n=null;if(e.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(e.mode==="returning"||e.mode==="docked")n=e.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(e.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=qd(e.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Lg*t),!0)}let a=Math.atan2(r,o),l=qd(a-i.heading);if(i.heading=qd(i.heading+Math.sign(l)*Math.min(Math.abs(l),Lg*t)),Math.abs(l)<.35){let c=Math.min(s,r2*t);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}var Bn=null,Ng=new Map;function Og(i,e=0){let t=new Je,n=new Ft,r=gt(i.type);if(r?.light)Xc(t,r,{x:0,z:0,rotation:e,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)$d(t,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:e,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:e,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Hc(t,n,new Je,o)}return{buf:t,lines:n}}function o2(i,e=180,t,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${e}|${n}`,o=Ng.get(r);if(o)return o;t&&Ls(t),Bn??=new Mr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Bn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Bn.setSize(e,e,!1),Bn.setClearColor(0,0);let{buf:s,lines:a}=Og(i),l=new Ui,c=new Ne(s.geometry(),new et({vertexColors:!0,color:new J(n,n,n)})),u=new Xt(a.geometry(),new jt({vertexColors:!0,color:new J(n*1.8,n*1.8,n*1.8)}));l.add(c,u);let h=new mn().setFromObject(c),d=h.getCenter(new V),f=new li(-1,1,1,-1,.01,100);f.position.copy(d).add(new V(.9,.75,1.3).normalize().multiplyScalar(20)),f.lookAt(d),f.updateMatrixWorld();let p=.05;for(let g of[h.min.x,h.max.x])for(let y of[h.min.y,h.max.y])for(let x of[h.min.z,h.max.z]){let b=new V(g,y,x).applyMatrix4(f.matrixWorldInverse);p=Math.max(p,Math.abs(b.x),Math.abs(b.y))}let _=p*1.12;f.left=-_,f.right=_,f.top=_,f.bottom=-_,f.updateProjectionMatrix(),Bn.render(l,f);let m=Bn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose(),Ng.set(r,m),m}function s2(i,e,t=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(e)}|${t}|${r}`,s=Bg.get(o);if(s)return s;n&&Ls(n);let{buf:a,lines:l}=Og(i,e),c=new Ne(a.geometry(),new et({vertexColors:!0,color:new J(r,r,r)})),u=new Xt(l.geometry(),new jt({vertexColors:!0,color:new J(r*1.8,r*1.8,r*1.8)})),h=new mn().setFromObject(c);if(h.isEmpty())return null;let d=h.min.x,f=h.max.x,p=Math.max(0,h.min.y),_=h.max.y,m=Math.max(1,Math.min(1024,Math.round((f-d)*t))),g=Math.max(1,Math.min(1024,Math.round((_-p)*t)));Bn??=new Mr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Bn.setPixelRatio(1),Bn.setSize(m,g,!1),Bn.setClearColor(0,0);let y=new Ui;y.add(c,u);let x=new li(d,f,_,p,.01,100);x.position.set(0,0,50),x.lookAt(0,0,0),x.updateProjectionMatrix(),Bn.render(y,x);let b=Bn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose();let w={url:b,x0:d,x1:f,y0:p,y1:_};return Bg.set(o,w),w}var Bg=new Map;var F3={Group:Ct,Mesh:Ne,MeshBasicMaterial:et,CanvasTexture:Xn,Color:J,PlaneGeometry:Kn,BufferGeometry:Ke,Float32BufferAttribute:we,DoubleSide:ct},Vg={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},a2=2.4,Gg=1.4,l2=.22,Hg=140,jd=32,c2=500,Wg=33,Xg=.028,u2=.09,ut=2767456,h2=1911110,d2=1,Qd=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),fu=450,Kg=125,f2=.08,mu={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},p2=new J(1714765);function m2(){let e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency||8;return e<=3||t<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var ef=class{host;options;renderer;scene=new Ui;camera=new ln(38,1,.1,400);controls;labels;root=new Ct;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;roofDirection={value:new V(0,1,1)};keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";productColors=!1;customLayers=new Map;customMemories=new Map;customContext=null;themeUniform={value:0};sun=null;weather=null;rain=new Xt(new Ke,new jt({color:10471679,transparent:!0,opacity:.4,blending:Nt,depthWrite:!1}));snow=new lo(new Ke,new _r({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Ne(new is(1,28),new et({color:16767370,transparent:!0,opacity:0,blending:Nt,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(e,t={}){this.host=e,this.options=t,this.explode=t.explode??!0,this.renderer=this.makeRenderer(t.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",e.append(this.labels),this.patternTexture=_2(),this.blindTexture=v2(),this.haloTexture=x2(),this.ground=new Ne(new Kn(1,1),new et({transparent:!1,blending:Nt,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(e)),this.resize()}get low(){return this.lowQuality}setParked(e){let t=[...e].map(([n,r])=>`${n}=${r}`).sort().join("|");t!==this.parkedSig&&(this.parkedSig=t,this.parked=e,this.building&&(this.rebuild(),this.invalidate()))}setStats(e){this.statsOn=e}setLabelInset(e){this.labelInset!==e&&(this.labelInset=e,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(e){this.orbitSpeed=e,this.orbitLast=0,this.invalidate()}setQuality(e){let t=this.renderer.domElement,n=this.makeRenderer(e);this.rebuildTier(),this.applyTierFlags(),t.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n,this.building&&this.rebuild();let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(e){Ls(e),this.building&&(this.rebuild(),this.invalidate())}setProductColors(e){e!==this.productColors&&(this.productColors=e,_m(e),this.building&&this.rebuild(),this.invalidate())}setCustomPackState(e,t){this.customContext={hass:e,moment:t};for(let n of this.customLayers.values())n.update(e,t,this.building?.settings.pack_animations!==!1);for(let n of this.floors)this.buildGlow(n),this.buildHalos(n)}setBuilding(e){let t=this.building===null;this.building=e,xm(e),this.rebuild(),t&&this.fit(0),this.invalidate()}setKeepView(e){this.keepView=e}setFloor(e,t=!0){this.keepNext=this.keepView&&e!==null&&this.floorId!==null&&e!==this.floorId,this.floorId=e,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!t),this.applyHighlight(),this.fit(t?700:0)}setFloorStack(e){e!==this.floorStack&&(this.floorStack=e,this.applyTargets(!1))}setKeepRoof(e){e!==this.keepRoof&&(this.keepRoof=e,this.invalidate())}setExplode(e){e!==this.explode&&(this.explode=e,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(e){if(this.roomId=e,this.labelsDirty=!0,this.applyHighlight(),!e){this.fit(700);return}let t=this.floors.find(u=>u.floor.rooms.some(h=>h.id===e)),n=t?.floor.rooms.find(u=>u.id===e);if(!t||!n)return;let r=n.start_view;if(r){let u=t.floor.elevation+t.ty,[h,d]=ji(n.points),f=r.target??{x:h,y:.3,z:d};this.controls.flyTo({target:new V(f.x,f.y+u,f.z),radius:r.radius,phi:r.phi,theta:r.theta});return}let[o,s]=ji(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new V(Math.max(...a)-Math.min(...a),t.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new V(o,t.floor.elevation+t.ty+ft(t.floor,n)+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(e){this.wallMode=e;for(let t of this.floors)this.buildLamps(t);this.invalidate()}setDevices(e){this.devices=e,this.labelsDirty=!0,this.effectFloors=new Set(e.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(e.map(n=>[n.id,n.floorId]));let t=new Set;for(let n of e){t.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let o=r.el;r.icon!==n.icon&&(r.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let s=n.caption??"";r.caption!==s&&(r.caption=s,o.querySelector(".fp3d-dev-name").textContent=s);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,o.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,o.title=n.name,o.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?o.style.setProperty("--fp3d-glow",c):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)t.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(e){let t=JSON.stringify([...e]);if(t!==this.roofWindowsKey){this.roofWindowsKey=t,this.roofWindows=e,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(e){this.anchorCb=e,this.labelsDirty=!0,this.invalidate()}setAnchors(e){this.anchors=e,this.labelsDirty=!0,this.invalidate()}setSolarLevels(e){this.solarLevels=e;let t=!1;for(let n of this.roof?.lives??[])ha(n,e)&&(t=!0);for(let n of this.floors)n.solarLive&&ha(n.solarLive,e)&&(t=!0);this.solarActive=t,this.invalidate()}setPools(e){let t=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(t(e)!==t(this.pools)){this.pools=e,this.poolActive=e.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(e){e.poolGroup&&(Eg(e.poolGroup),e.group.remove(e.poolGroup),e.poolGroup=void 0);let t=this.pools.filter(n=>n.floorId===e.floor.id);t.length&&(e.poolGroup=Ag(t,this.flowTime),e.group.add(e.poolGroup))}setSound(e){let t=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(t(e)!==t(this.sound)){this.sound=e,this.soundActive=e.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Ct;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=e.filter(c=>c.floorId===n.floor.id),s=.03;for(let c of o)if(c.playing)for(let u=0;u<3;u++){let h=new Ne(new fs(.92,1,48),new et({color:3662079,transparent:!0,opacity:0,blending:Nt,depthWrite:!1,side:ct}));h.rotation.x=-Math.PI/2,h.position.set(c.x,s+u*.002,c.z),h.userData={sound:!0,phase:u/3,level:c.level},h.frustumCulled=!1,r.add(h)}let a=[],l=new Set;for(let c of o)for(let u of c.members){let h=o.find(f=>f.id===u);if(!h||h===c)continue;let d=[c.id,h.id].sort().join("|");l.has(d)||(l.add(d),a.push(c.x,s+.02,c.z,h.x,s+.02,h.z))}if(a.length){let c=new Ke;c.setAttribute("position",new we(a,3));let u=new Xt(c,new jt({color:3662079,transparent:!0,opacity:.45,blending:Nt,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(e){let t=e/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(t*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(e){this.flows=e;let t=this.flowSeconds(),n=new Map;for(let r of e){let o=Jd(r),s=Yg(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?t*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=e.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(e){this.pipes=e;for(let t of this.floors)this.buildPipes(t);this.invalidate()}buildPipes(e){let t=this.pipes.filter(o=>o.floorId===e.floor.id),n=JSON.stringify(t);if(n===e.pipeSig)return;e.pipeSig=n;let r=new Je;for(let o of t)fg(r,o);e.pipeMesh.geometry.dispose(),e.pipeMesh.geometry=r.geometry(),e.pipeMesh.visible=r.count>0}setPersons(e){this.labelsDirty=!0,this.persons=e;let t=new Set;for(let n of e){t.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let o=document.createElement("img");o.src=n.picture,o.alt="",o.addEventListener("error",()=>o.replaceWith(document.createTextNode(n.initials))),r.append(o)}else r.textContent=n.initials}for(let[n,r]of this.personPins)t.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(e,t){this.pickFurniture=e,this.pickOpenings=t}setAccent(e){let t=Pg(e),n=t?1:0;n===hu.value&&(!t||uu.value.equals(new V(...t)))||(hu.value=n,t&&uu.value.set(...t),this.invalidate())}setTheme(e){if(e===this.theme)return;this.theme=e,this.themeUniform.value=kg(e);let t=No(e),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines,this.roof.solarLines]:[]];for(let r of n)r.blending=t,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(e){this.furnish=e,e||this.selectFurniture(null),this.invalidate()}selectFurniture(e){e&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=e,this.updateGhost(),this.invalidate()}selectFurnitureSet(e){this.selectedSet=[...e],this.updateGhost(),this.invalidate()}setSun(e){this.sun=e;for(let t of this.floors)this.buildSun(t);this.placeSky(),this.invalidate()}setWeather(e){this.weather=e;for(let t of this.floors)this.buildSun(t);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let e=this.weather,t=!!e&&!this.lowQuality,n=e?new J(e.sky[0]/255,e.sky[1]/255,e.sky[2]/255):null;this.scene.fog=t&&e.fog>0&&n?new jo(n,.01+.035*e.fog):null;let r=t?Math.round(700*e.rain):0,o=t?Math.round(450*e.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}seedParticles(e,t,n){if((e.geometry.getAttribute("position")?.count??0)===t)return;let o=this.weatherBox,s=new Float32Array(t*3),a=n?2:1;for(let c=0;c<t;c+=a){let u=o.x0+Math.random()*(o.x1-o.x0),h=o.y0+Math.random()*(o.y1-o.y0),d=o.z0+Math.random()*(o.z1-o.z0);s.set([u,h,d],c*3),n&&s.set([u,h-.45,d],c*3+3)}e.geometry.dispose();let l=new Ke;l.setAttribute("position",new we(s,3)),e.geometry=l}stepWeather(e){let t=this.weather;if(!t||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(e-this.weatherLast)/1e3):0;if(this.weatherLast=e,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=t.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*t.rain)*n;for(let u=0;u<l.length;u+=6){let h=l[u+1]-c,d=l[u]+s*n;h<r.y0&&(h+=o,d=r.x0+Math.random()*(r.x1-r.x0)),d>r.x1&&(d-=r.x1-r.x0),l[u]=d,l[u+1]=h,l[u+3]=d-s*.05,l[u+4]=h-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=e/1e3;for(let u=0;u<l.length;u+=3){let h=l[u+1]-(.9+.6*t.snow)*n,d=l[u]+(s+Math.sin(c+u)*.4)*n;h<r.y0&&(h+=o,d=r.x0+Math.random()*(r.x1-r.x0)),d>r.x1&&(d-=r.x1-r.x0),l[u]=d,l[u+1]=h}a.needsUpdate=!0}return!0}placeSky(){let e=this.sun,t=this.weather,n=t?.cloud??0,r=!e||e.elevation<-3;if(!e||!t||t.disc===!1||n>.85||!r&&e.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*pt,s=(r?e.azimuth+180:e.azimuth)*pt,a=Math.max(10,Math.abs(e.elevation))*pt,l=this.weatherBox,c=new V((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),h=new V(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(h,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let d=this.skyDisc.material;d.color.set(r?13621486:16767370),d.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(e){let t=!!e!=!!this.roomTint;if(this.roomTint=e,this.tintTick=!0,this.applyHighlight(),t)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(e){this.screens=e;for(let t of this.floors)this.buildScreens(t);this.invalidate()}fillRoomPin(e,t,n){if(e.textContent=t||"\u2013",n){let r=document.createElement("small");r.textContent=n,e.append(r),e.classList.add("fp3d-pin-info")}else e.classList.remove("fp3d-pin-info")}setRoomInfo(e){if(!(e.size===this.roomInfo.size&&[...e].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=e;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,e.get(r.room.id))}}setFloorInfo(e){this.floorInfo=e;for(let t of this.floors){let n=t.label.querySelector("span"),r=e.get(t.floor.id)??this.options.floorInfo?.(t.floor)??"";n&&n.textContent!==r&&(n.textContent=r,t.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(e,t=!1){if(this.openingTargets=e,t)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=e.get(o)??da,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&!!l.sensed==!!s.sensed||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(e){for(let[t,n]of e){let r=this.fridges.get(t)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(t,r)}for(let t of[...this.fridges.keys()])e.has(t)||this.fridges.delete(t);this.invalidate()}awnings=new Map;setAwnings(e){for(let[t,n]of e){let r=this.awnings.get(t)??{cur:n.out??0,to:n.out??0,speed:0};n.out===null?(r.to=n.moving>0?1:0,r.speed=1/Math.max(2,n.time)):(r.to=n.out,r.speed=0),this.awnings.set(t,r)}for(let t of[...this.awnings.keys()])e.has(t)||this.awnings.delete(t);this.invalidate()}stepAwnings(e){let t=new Set,n=1-Math.exp(-e/450);for(let[r,o]of this.awnings){let s=o.to-o.cur;if(Math.abs(s)<.002){s!==0&&(o.cur=o.to,t.add(r));continue}o.cur=o.speed>0?o.cur+Math.sign(s)*Math.min(Math.abs(s),o.speed*e/1e3):o.cur+s*n,t.add(r)}return t}stepFridges(e){let t=1-Math.exp(-e/160),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*t,n.add(r)}for(let r of this.stepAwnings(e))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(o=>n.has(o.id))&&this.buildFridges(r);return!0}buildFridges(e){let t=new Je;for(let n of e.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);R0(t,n,Rt(e.floor,n),r?.l??0,r?.r??0)}for(let n of e.floor.furniture)n.type==="awning"&&E0(t,n,Rt(e.floor,n),this.awnings.get(n.id)?.cur??0);e.fridgeMesh.geometry.dispose(),e.fridgeMesh.geometry=t.geometry(),e.fridgeMesh.visible=t.count>0}resetView(){this.fit(700)}setStartView(e){this.startView=e}currentView(){let e=this.controls.view,t=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(e.theta),Math.cos(e.theta)),phi:e.phi,radius:e.radius,target:{x:e.target.x,y:e.target.y-t,z:e.target.z}}}floorBase(e){let t=e===null?void 0:this.floorMap.get(e);return t?t.floor.elevation+t.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let e of[this.rain,this.snow,this.skyDisc])e.geometry.dispose(),e.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let e of this.robots.values())e.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(e=>this.render(e)))}makeRenderer(e){let t=e==="low"||e==="auto"&&m2();this.lowQuality=t,b0(t),this.applyWeather(),this.highQuality=e==="high";let n=new Mr({antialias:!t,alpha:!0,powerPreference:t?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:e==="high"?2.5:2)),n.setClearColor(0,0),n.localClippingEnabled=!0,n.outputColorSpace=Ot,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new iu(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(e,t)=>this.onTap(e,t),hold:(e,t)=>this.onHold(e,t),swipeStart:(e,t,n,r)=>this.swipeStart(e,t,n,r),swipeMove:e=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",e,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(e,t)=>this.grabFurniture(e,t),drag:(e,t)=>this.dragFurniture(e,t),drop:()=>this.dropFurniture(),doubleTap:(e,t)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(e,t):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||(this.customContext&&this.setCustomPackState(this.customContext.hass,{...this.customContext.moment,time:this.customContext.moment.historical?this.customContext.moment.time:Date.now()}),this.invalidate())};resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.size={w:e,h:t},this.labelsDirty=!0,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let e of this.customLayers.values())e.dispose();this.customLayers.clear();for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.floors){for(let t of e.screenPics.values())t.mesh.material.dispose(),t.texture?.dispose();e.group.traverse(t=>{t.geometry?.dispose()});for(let t of Object.values(e.materials))t.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(e){let t=document.createElement("button");t.className="fp3d-dev",t.dataset.entity=e;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",t.append(n,r,o,s);let a,l=!1;t.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=e;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=t.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,h.left+h.width/2-d.left,h.top+h.height/2-d.top)},c2)});let c=()=>clearTimeout(a);return t.addEventListener("pointerleave",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerup",c),t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(e),this.options.onDeviceSelect?.(e);return}if(l)return;let h=t.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceTap?.(e,h.left+h.width/2-d.left,h.top+h.height/2-d.top)}),t.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let h=t.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,h.left+h.width/2-d.left,h.top+h.height/2-d.top)}}),t}buildLightSurface(e){let t=this.lowQuality?.5:.25,n=r0(e.floor,e.geo.walls2d,e.geo.wallBuckets,e.geo.openings,t,e.geo.holes,e.geo.roofUnder,cu(e.floor,e.geo.roofUnder)),r=qg(e.floor,e.geo.openRooms);if(e.lightZones=r.some((a,l)=>a!==l)?r:null,e.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=Co(r,a.ra),a.rb=Co(r,a.rb)}e.lightSurface=n;let o=new Ke;o.setAttribute("position",new we(n.pos,3)),o.setAttribute("color",new we(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new we(n.fold,1));let s=new mr(new Uint32Array(n.pos.length/3),1);s.setUsage(wh),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),e.glowMesh.geometry.dispose(),e.glowMesh.geometry=o,e.glowSig="",this.buildGlow(e)}lightSources(e){let t=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==e.floor.id||!r||n.pack&&gt(n.pack)?.spots?.length)continue;let o=n.top??e.floor.height,s=ad(e.floor,n.x,n.z),a=Co(e.lightZones,s),[l,,c]=n.size??(n.lamp?mu[n.lamp]:[.3,.3,.3]),u=n.base??0,h=n.top??o,d=t.length,f={ceiling:[h-.12,"ceiling"],downlight:[h-.03,"spot"],spot:[h-c,"spot"],panel:[h-.05,"ceiling"],pendant:[Math.max(u+.5,h-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<d2?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[p,_]=n.lamp?f[n.lamp]:[n.y,"omni"],m=n.lightY??p,g=r.color;if(n.lamp==="strip"){let y=(n.rotation??0)*pt,x=!!n.upright||Math.abs(n.roll??0)>45;for(let b of[-1/3,0,1/3])n.upright?t.push({x:n.x,y:u+l*(.5+b),z:n.z,color:g,level:r.level*.55,kind:"omni",room:a}):t.push({x:n.x+Math.cos(y)*l*b,y:m,z:n.z+Math.sin(y)*l*b,color:g,level:r.level*.55,kind:x?"omni":_,room:a})}else t.push({x:n.x,y:m,z:n.z,color:g,level:r.level,kind:_,room:a,..._==="spot"?{direction:[0,-1,0],angle:n.beam_angle??60}:{}});if(n.rotation_x||n.rotation_z){let y=xo(n,pu(n,o));for(let x=d;x<t.length;x++){let b=t[x];if([b.x,b.y,b.z]=y(b.x,b.y,b.z),b.kind==="spot"){let w=y(n.x,0,n.z),M=y(n.x,-1,n.z);b.direction=[M[0]-w[0],M[1]-w[1],M[2]-w[2]],b.angle=n.beam_angle??60}else b.kind="omni";b.room=Co(e.lightZones,ad(e.floor,b.x,b.z))}}}if(this.customContext)for(let n of e.floor.furniture)for(let r of wg(n,e.floor,this.customContext.hass))r.room=Co(e.lightZones,r.room),t.push(r);return t}buildGlow(e){let t=e.lightSurface;if(!t)return;let n=this.lightSources(e),r=t.doors.map(h=>{let d=e.geo.openings.find(p=>p.opening.id===h.id);if(d&&Ar(d.opening,d.exterior)==="passage")return 1;let f=e.openings.get(h.id);return f?Math.max(f.open,f.open2??0):.5}),o=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(d=>d.toFixed(3)).join("/")},${h.direction?.join("/")},${h.angle}`).join(";")+"|"+r.map(h=>h.toFixed(1)).join(",");if(o===e.glowSig)return;e.glowSig=o;let s=e.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){e.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=s0(t,n,.42,r);if(this.roomTint){let h=e.floor.rooms.length;for(let d=0;d<t.room.length;d++)if(t.room[d]!==h)for(let f=0;f<3;f++)l[d*3+f]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,u=0;for(let h=0;h<l.length/18;h++){let d=!1;for(let f=h*18;f<h*18+18&&!d;f++)d=l[f]>.004;if(d)for(let f=0;f<6;f++)c[u++]=h*6+f}s.index.needsUpdate=!0,s.setDrawRange(0,u),e.glowMesh.visible=u>0}makeMaterials(e){return{floor:Zt(new et({vertexColors:!0}),this.themeUniform),pattern:b2(this.patternTexture),wall:Zt(sr(new et({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),e,"solid"),this.themeUniform),glassWall:sr(new et({vertexColors:!0,transparent:!0,depthWrite:!1}),e,"glass"),shadow:new et({vertexColors:!0,blending:xs,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ct,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Zt(sr(new jt({vertexColors:!0,transparent:!0,blending:No(this.theme),depthWrite:!1}),e),this.themeUniform,!0),glow:sr(new et({vertexColors:!0,transparent:!0,blending:Nt,depthWrite:!1,side:ct,polygonOffset:!0,polygonOffsetFactor:-3}),e,"solid"),frames:Zt(sr(new et({vertexColors:!0,side:ct}),e),this.themeUniform),glass:sr(new et({vertexColors:!0,transparent:!0,blending:Nt,depthWrite:!1,side:ct}),e),blinds:Zt(sr(new et({map:this.blindTexture,vertexColors:!0,side:ct}),e),this.themeUniform),water:Zt(new et({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:ct}),this.themeUniform),flow:y2(this.flowTime),solarLive:Wd(this.flowTime),lamps:Zt(new et({vertexColors:!0}),this.themeUniform),halos:new _r({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Nt,depthWrite:!1}),cones:new et({vertexColors:!0,transparent:!0,blending:Nt,depthWrite:!1,side:ct}),screens:new et({vertexColors:!0,transparent:!0,blending:Nt,depthWrite:!1,side:ct}),earth:Zt(new et({vertexColors:!0}),this.themeUniform),earthWell:Zt(new et({vertexColors:!0,side:ct}),this.themeUniform),earthLines:Zt(new jt({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let e=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),t=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=Md(n)?.id===o.id?s.filter(Y=>Y.face===wd).map(Y=>({field:Y,face:L0(n,Y)})):[],l=s.filter(Y=>Y.face.startsWith(`wall:${o.id}:`));if(l.length){let Y=new Map(F0(n,o.id).map(se=>[se.key,se]));for(let se of l){let ge=Y.get(se.face);ge&&a.push({field:se,face:ge})}}let u=(n.settings.roof.sections??[]).some(Y=>Um(Y,qt(o)))?(Y,se)=>{let ge=Vm(n,Y,se);return ge===null?null:ge-o.elevation}:void 0,h=Y0(Gd(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,q0(n.floors,o),a,u),d={standing:{value:65535},glass:{value:0}},f=this.makeMaterials(d),p=new Ct,_=new Ne(h.floor,f.floor),m=new Ne(h.shadow,f.shadow);m.renderOrder=1;let g=new Ne(h.floor,f.pattern);g.renderOrder=2;let y=new Ne(new Ke,f.glow);y.renderOrder=3,y.visible=!1;let x=new Ne(new Ke,f.frames),b=new Ne(new Ke,f.blinds),w=new Ne(new Ke,f.glass);w.renderOrder=4;let M=new Ne(new Ke,f.lamps);M.visible=!1;let E=new Ne(new Ke,f.cones);E.visible=!1,E.renderOrder=3;let v=new lo(new Ke,f.halos);v.visible=!1,v.renderOrder=7;let S=new Ne(new Ke,f.cones);S.visible=!1,S.renderOrder=7;let A=new Ne(new Ke,f.cones);A.visible=!1,A.renderOrder=7;let k=new Ne(new Ke,f.lamps);k.visible=!1;let F=new Ne(new Ke,f.lamps);F.visible=!1;let R=new Ne(new Ke,f.screens);R.visible=!1,R.renderOrder=5;let T=new Ne(new Ke,f.flow);T.renderOrder=5,T.frustumCulled=!1;let P=Hd(a,o.elevation),C=P?new Ne(P.geometry,f.solarLive):null;C&&(C.renderOrder=6,ha(P,this.solarLevels));for(let Y of[x,b,w])Y.frustumCulled=!1;let D=new Ne(h.walls,f.glassWall),B=new Ne(h.walls,f.wall);D.renderOrder=6;let L=new Ne(h.water,f.water);L.renderOrder=4;let O=Math.min(...n.floors.filter(Y=>Y.rooms.length).map(Y=>Y.elevation)),U=j0(n,o,h.openings,o.elevation===O),Z=U?[new Ne(U.earth.geometry(),f.earth),new Ne(U.wells.geometry(),f.earthWell),new Xt(U.lines.geometry(),f.earthLines)]:[];for(let Y of Z)Y.userData.earth=!0;p.add(_,m,g,y,B,L,new Xt(h.lines,f.lines),x,b,w,T,M,E,v,S,A,k,F,R,D,...C?[C]:[],...Z),this.root.add(p);let K=document.createElement("button");K.className="fp3d-pin fp3d-pin-floor",K.dataset.floor=o.id;let Q=document.createElement("b");Q.textContent=o.name||"\u2013";let ee=document.createElement("span");ee.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",K.append(Q,ee),K.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(K);let ae=e.get(o.id),H=[],W=null;for(let Y of o.rooms){let se=document.createElement("button");se.className="fp3d-pin",se.dataset.room=Y.id,se.dataset.floor=o.id,this.fillRoomPin(se,Y.name,this.roomInfo.get(Y.id)),se.addEventListener("click",()=>this.options.onRoomTap?.(o.id,Y.id)),this.labels.append(se);let[ge,Fe]=ji(Y.points);H.push({pin:se,room:Y,cx:ge,cz:Fe});for(let[Ae,Pe]of Y.points)W??={x0:Ae,x1:Ae,z0:Pe,z1:Pe},W.x0=Math.min(W.x0,Ae),W.x1=Math.max(W.x1,Ae),W.z0=Math.min(W.z0,Pe),W.z1=Math.max(W.z1,Pe)}this.floors.push({floor:o,rank:r.indexOf(o),group:p,geo:h,floorMesh:_,shadowMesh:m,patternMesh:g,glowMesh:y,lightSurface:null,lightZones:null,framesMesh:x,glassMesh:w,blindsMesh:b,flowMesh:T,solarMesh:C,solarLive:P,lampMesh:M,sunMesh:E,sunSig:"",haloMesh:v,coneMesh:S,trailMesh:A,fridgeMesh:k,pipeMesh:F,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:B,screenMesh:R,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:W,roomPins:H,labelSize:null,materials:f,mask:d,openings:new Map,y:ae?.y??0,o:ae?.o??1,ty:0,to:1,appliedO:-1,label:K});let oe=this.customMemories.get(o.id)??new zo;this.customMemories.set(o.id,oe);let le=new au(o,f.wall,()=>this.invalidate(),oe);p.add(le.group),this.customLayers.set(o.id,le),this.customContext&&le.update(this.customContext.hass,this.customContext.moment,this.building?.settings.pack_animations!==!1)}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o),this.buildPipes(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=t.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??da);this.buildOpenings(o),this.buildFlows(o),o.poolGroup=void 0,this.buildPoolWater(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(e.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(y=>y.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.solar.dispose(),this.roof.solarLines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(y=>y.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winGlass.dispose(),this.roof.winLines.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let e=this.building?H0(this.building,this.roofWindows):[];if(!e.length)return;let t=new Map(Ri(this.building).map(y=>[y.key,y])),n=this.building.settings.roof?.solar??[],r=Jc(Wd(this.flowTime)),o=[],s=new Ct,a=Zt(ig(new et({vertexColors:!0,transparent:!0,side:ct,depthWrite:!1}),this.roofDirection),this.themeUniform),l=Zt(new jt({vertexColors:!0,transparent:!0,blending:No(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Zt(Jc(new et({vertexColors:!0,transparent:!0,side:ct})),this.themeUniform),u=Zt(Jc(new jt({vertexColors:!0,transparent:!0,blending:No(this.theme),depthWrite:!1})),this.themeUniform,!0),h=Zt(new et({vertexColors:!0,transparent:!0,side:ct,depthWrite:!1}),this.themeUniform),d=new Ct,f=Zt(new et({vertexColors:!0,side:ct}),this.themeUniform),p=Zt(O0(),this.themeUniform),_=Zt(new jt({vertexColors:!0,transparent:!0,blending:No(this.theme),depthWrite:!1}),this.themeUniform,!0),m=[],g=e.map(y=>{let x=new Ct,b=y.solid.geometry();if(b.computeVertexNormals(),x.add(new Ne(b,a),new Xt(y.lines.geometry(),l)),y.solar){let{facing:v}=y.solar;x.add(new Ne(ta(y.solar.solid.geometry(),v.normals,v.points),c),new Xt(ta(y.solar.lines.geometry(),v.lineNormals,v.linePoints),u))}y.glass.count&&x.add(new Ne(y.glass.geometry(),h));let w=n.flatMap(v=>{let S=t.get(v.face);return S&&(S.section?y.sections?.includes(S.section):y===e[0])?[{face:S,field:v}]:[]}),M=Hd(w,y.floor.elevation+y.base);if(M){let v=new Ne(M.geometry,r);v.renderOrder=9,x.add(v),o.push(M),ha(M,this.solarLevels)}y.winRoof?.solid.count&&x.add(new Ne(y.winRoof.solid.geometry(),f),new Ne(y.winRoof.glass.geometry(),p),new Xt(y.winRoof.lines.geometry(),_)),x.renderOrder=8,s.add(x);let E=null;y.win?.solid.count&&(E=new Ct,E.add(new Ne(y.win.solid.geometry(),f),new Ne(y.win.glass.geometry(),p),new Xt(y.win.lines.geometry(),_)),d.add(E));for(let[v,S]of y.winBelow??[]){if(!S.solid.count)continue;let A=new Ct;A.add(new Ne(S.solid.geometry(),f),new Ne(S.glass.geometry(),p),new Xt(S.lines.geometry(),_)),d.add(A),m.push({floorId:v,win:A})}return{group:x,floorId:y.floor.id,rideId:Ym(this.building,y.floor,y.sections??[]),base:y.base,lift:y.lift!==!1,win:E}});s.renderOrder=8,this.scene.add(s),this.scene.add(d),this.roof={group:s,parts:g,below:m,solid:a,lines:l,solar:c,solarLines:u,glass:h,live:r,lives:o,wins:d,winSolid:f,winGlass:p,winLines:_},this.placeRoof()}placeRoof(e=1e3){let t=this.roof;if(!t)return!1;let r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?ru(this.controls.view.radius,this.houseRadius,this.keepRoof).opacity:0,o=1-Math.exp(-e/Hg),s=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),t.group.visible=this.roofO>.02;for(let a of t.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=this.floorMap.get(a.rideId)??l,u=c.ty>0?Math.min(1,c.y/c.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+c.y+a.base+ru(this.controls.view.radius,this.houseRadius,this.keepRoof,this.roofO).lift+(a.lift?u*Gg:0),a.win&&(a.win.position.y=l.floor.elevation+c.y+a.base+(a.lift?u*Gg:0),a.win.visible=l.group.visible&&l.o>.5&&this.wallMode!=="cut")}for(let a of t.below){let l=this.floorMap.get(a.floorId);l&&(a.win.position.y=l.floor.elevation+l.y,a.win.visible=l.group.visible&&l.o>.5&&this.wallMode!=="cut")}return t.solid.opacity=this.roofO,t.solid.depthWrite=!1,t.lines.opacity=this.roofO,t.solar.opacity=this.roofO,t.solar.depthWrite=this.roofO>.9,t.solarLines.opacity=this.roofO,t.glass.opacity=this.roofO*.28,t.live.opacity=this.roofO,this.roofO!==s&&this.roofO!==r}applyTierFlags(){let e=this.lowQuality;this.ground.visible=!e&&this.theme!=="day"&&this.floors.some(t=>t.floor.rooms.length>0);for(let t of this.floors)t.patternMesh.visible=!e,t.shadowMesh.visible=!e&&t.o>.98;this.invalidate()}rebuildTier(){for(let e of this.floors)e.flowLayout="",this.buildFlows(e),this.buildLightSurface(e),e.lampShapeSig="",this.buildLamps(e)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(e){let t=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;t?n.rank>t.rank?(r=5+n.rank,o=0):n.rank<t.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:l2)):r=this.explode?n.rank*a2:0,n.ty=r,n.to=o;let a=t===n?nn:ci;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),e&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(e){if(e.group.position.y=e.floor.elevation+e.y,e.group.visible=e.o>.02,e.shadowMesh.visible=e.o>.98&&!this.lowQuality,Math.abs(e.appliedO-e.o)<.001)return;e.appliedO=e.o;let t=e.materials,n=e.o>.999;for(let r of[t.floor,t.wall,t.frames,t.blinds,t.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=e.o;t.pattern.opacity=e.o,t.glow.opacity=e.o,t.lines.opacity=e.o,t.glass.opacity=e.o,t.glassWall.opacity=e.o,t.flow.opacity=e.o,t.solarLive.opacity=e.o,t.lamps.opacity=e.o,t.halos.opacity=e.o,t.cones.opacity=e.o,t.screens.opacity=e.o;for(let r of[t.earth,t.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=e.o;t.earthLines.opacity=e.o;for(let r of e.screenPics.values()){let o=r.mesh.material;o.transparent=e.o<.999,o.opacity=e.o}}stepFloors(e){let t=!1,n=1-Math.exp(-e/Hg);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,t=!0,this.applyFloor(r)}return t}stepOpenings(e){let t=!1,n=1-Math.exp(-e/160);for(let r of this.floors){let o=!1;for(let[s,a]of r.openings){let l=this.openingTargets.get(s)??da,c=(d,f)=>(d??null)===(f??null)||typeof d=="number"&&typeof f=="number"&&Math.abs(d-f)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},h=!1;for(let d of["open","open2","tilt","tilt2"]){let f=l[d]??0,p=a[d]??0,_=f-p;Math.abs(_)<.003?u[d]=f:(u[d]=p+_*n,h=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let d=l.cover-a.cover;Math.abs(d)<.003?u.cover=l.cover:(u.cover=a.cover+d*n,h=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(s,u),o=!0),t||=h}o&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return t}glowOf(e){if(!e.glow||!e.effect)return e.glow;let t=new J(...e.glow.color),n={h:0,s:0,l:0};t.getHSL(n);let r=(e.x*.37+e.z*.61)%1;return t.setHSL((n.h+this.effectTime*f2+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[t.r,t.g,t.b],level:e.glow.level}}buildLamps(e){let t=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=t)return 0;let d=h-t,f=d>fu?.5+.5*Math.sin(d/140):d/fu;return Math.round(f*10)/10},r=this.devices.filter(u=>u.floorId===e.floor.id&&(u.lamp||u.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.rotation_x??0},${u.rotation_z??0},${u.pivot_y??""},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.top??""},${u.pack??""},${u.mirror?1:0}`).join(";"),s=r.map(u=>this.glowOf(u)),a=r.map((u,h)=>`${n(u.id)},${s[h]?`${s[h].level.toFixed(3)},${s[h].color.map(d=>d.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==e.lampShapeSig||!e.lampMesh.geometry.getAttribute("position")){e.lampShapeSig=o,e.lampColorSig="";let u=new Je,h=[],d=[],f=new Map,p=e.floor.height;for(let _ of r){let m=_.lamp==="strip"?(_.base??p)>Math.min(e.floor.cut_height,p):_.lamp?Qd.has(_.lamp)&&(_.top??p)>Math.min(e.floor.cut_height,p):_.model==="camera_ceiling";if(!_.lamp&&!_.model||m&&this.wallMode==="cut")continue;let g=u.count,y=e.floor.furniture.find(E=>E.id===_.furnitureId),x=_.pack?Sr(y??{type:_.pack}):void 0,[b,w,M]=_.size??[.3,.3,.3];_.model?C0(u,_.model,_.x,_.model==="camera_ceiling"?_.top??p:_.y,_.z,_.rotation??0):x?Xc(u,x,{x:_.x,z:_.z,rotation:_.rotation??0,rotation_x:_.rotation_x,rotation_z:_.rotation_z,w:b,d:w,h:M,mirror:_.mirror},_.base??0,65280):$d(u,{..._,lamp:_.lamp},_.top??p,65280),f.set(_.furnitureId??_.id,{start:g,end:u.count}),_.pickable!==!1&&h.push({id:_.id,start:g,end:u.count}),_.furnitureId&&d.push({id:_.furnitureId,start:g,end:u.count})}e.lampTris=h,e.lampFurnTris=d,e.lampRanges=f,e.lampShade=fm(u.c),e.lampMesh.geometry.dispose(),e.lampMesh.geometry=u.geometry(),e.lampMesh.visible=u.count>0}if(a===e.lampColorSig)return;e.lampColorSig=a;let l=e.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,h)=>{let d=e.lampRanges.get(u.furnitureId??u.id);if(!d)return;let f=s[h],p=f?.55+.45*f.level:0,_=f?new J(...f.color.map(y=>Math.min(1,y*p))):new J(h2),m=n(u.id);m>0&&_.lerp(new J(1,1,1),.7*m);let g=new J(_.getHex());pm(c,e.lampShade,d,[g.r,g.g,g.b])}),l.needsUpdate=!0,this.buildHalos(e)}buildSun(e){let t=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*pt,r=this.weather?.cloud??0,o=qg(e.floor,e.geo.openRooms),s=t?`${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...e.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===e.sunSig)return;e.sunSig=s;let a=new Je;if(t&&t.elevation>2&&r<.97){let l=Math.min(1,t.elevation/12)*(1-.8*r),c=t.elevation*pt,u=t.azimuth*pt,h=[Math.sin(n+u),-Math.cos(n+u)],d=1/Math.tan(c);for(let f of e.geo.openings){if(f.opening.type!=="window"||!f.exterior)continue;let p=e.floor.rooms.find(R=>R.id===f.opening.room_id);if(!p||p.points.length<3)continue;let _=ft(e.floor,p),m=[-f.toRoom[0],-f.toRoom[1]],g=m[0]*h[0]+m[1]*h[1];if(g<.05)continue;let y=e.openings.get(f.opening.id),x=f.top-(y?.cover??0)*(f.top-f.sill);if(x-f.sill<.05)continue;let b=(R,T)=>{let P=Math.min(7,(T-_)*d);return[f.start[0]+f.axis[0]*R+f.toRoom[0]*f.faceRoom-h[0]*P,_+.02,f.start[1]+f.axis[1]*R+f.toRoom[1]*f.faceRoom-h[1]*P]},w=.14*l*Math.min(1,g*1.5),M=new J(1*w,.82*w,.55*w),E=M.clone().multiplyScalar(.45),v=e.floor.rooms.findIndex(R=>R.id===f.opening.room_id);if(v<0||e.floor.rooms[v].points.length<3)continue;let S=o[v],A=e.floor.rooms.filter((R,T)=>o[T]===S&&Math.abs(ft(e.floor,R)-_)<.001&&R.points.length>=3).map(R=>R.points),k=Math.max(1,Math.ceil(Math.min(7,(x-_)*d)/.25)),F=Math.max(1,Math.ceil(f.width/.3));for(let R=0;R<k;R++){let T=f.sill+(x-f.sill)*R/k,P=f.sill+(x-f.sill)*(R+1)/k,C=R/k,D=(R+1)/k,B=M.clone().lerp(E,C),L=M.clone().lerp(E,D);for(let O=0;O<F;O++){let U=f.width*O/F,Z=f.width*(O+1)/F,K=b((U+Z)/2,(T+P)/2);if(!A.some(W=>Oe([K[0],K[2]],W)))continue;let Q=b(U,T),ee=b(Z,T),ae=b(Z,P),H=b(U,P);a.tri(Q,ee,ae,B,B,L),a.tri(Q,ae,H,B,L,L)}}}this.pushRoofSun(e,a,o)}e.sunMesh.geometry.dispose(),e.sunMesh.geometry=a.geometry(),e.sunMesh.visible=a.count>0}pushRoofSun(e,t,n){this.sun&&this.building&&(rg(t,this.building,e.floor,this.sun,this.weather?.cloud??0,this.roofWindows,e.geo.holes),og(t,this.building,e.floor,this.sun,this.weather?.cloud??0,this.roofWindows,e.geo.holes,n))}buildHalos(e){if(this.lowQuality){e.haloMesh.visible=!1,e.coneMesh.visible=!1;return}let t=e.floor.height,n=[],r=[],o=new Je,s=[];for(let l of this.devices){if(l.model&&l.floorId===e.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let b=(l.rotation??0)*pt,w=[-Math.sin(b),Math.cos(b)],M=l.model==="camera_ceiling",E=l.reach??(M?3:4.5),v=(l.fov??(M?360:90))*pt/2,S=l.motion?new J(.9,.12,.16):new J(.04,.22,.28),A=new J(0,0,0),k=Math.max(4,Math.round(v/.15)),F=xn(e.floor,l.x,l.z)+.015,R=e.geo.walls2d,T=L=>{let O=L.b[0]-L.a[0],U=L.b[1]-L.a[1],Z=O*O+U*U||1,K=Math.max(0,Math.min(1,((l.x-L.a[0])*O+(l.z-L.a[1])*U)/Z));return Math.hypot(l.x-(L.a[0]+O*K),l.z-(L.a[1]+U*K))},P=null;for(let L of R)T(L)<.45&&(!P||T(L)<T(P))&&(P=L);let C=L=>{let O=w[0]*Math.cos(L)-w[1]*Math.sin(L),U=w[1]*Math.cos(L)+w[0]*Math.sin(L),Z=E;for(let K of R){let Q=K.b[0]-K.a[0],ee=K.b[1]-K.a[1],ae=O*ee-U*Q;if(Math.abs(ae)<1e-9)continue;let H=((K.a[0]-l.x)*ee-(K.a[1]-l.z)*Q)/ae,W=((K.a[0]-l.x)*U-(K.a[1]-l.z)*O)/ae;K===P&&H<=.45||H>.02&&H<Z&&W>=0&&W<=1&&(Z=H)}return Z},D=L=>{let O=C(L);return[l.x+(w[0]*Math.cos(L)-w[1]*Math.sin(L))*O,F,l.z+(w[1]*Math.cos(L)+w[0]*Math.sin(L))*O]},B=o.count;for(let L=0;L<k;L++)o.tri([l.x,F,l.z],D(-v+2*v*(L+1)/k),D(-v+2*v*L/k),S,A,A);s.push({id:l.id,start:B,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==e.floor.id||!l.lamp||!c||Qd.has(l.lamp)&&this.wallMode==="cut"&&(l.top??t)>Math.min(e.floor.cut_height,t))continue;let u=l.top??t,[h,d,f]=l.size??mu[l.lamp],p=l.base??0,_=n.length,m=o.p.length,g=(l.rotation??0)*pt,y={ceiling:u-.07,downlight:u-.03,spot:u-f,panel:u-.03,pendant:Math.max(p+.4,u-f)+.08,floor:p+f-.15,uplight:p+f,table:p+f-.09,wall:p+f/2,strip:p+Math.max(.02,f)-.01,bollard:p+f-.08,garden:p+f-.03}[l.lamp],x=(b,w,M=1)=>{n.push(b,y,w),r.push(...c.color.map(E=>E*c.level*.7*M))};if(l.lamp==="strip")for(let b of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,p+h*(.5+b),l.z),r.push(...c.color.map(w=>w*c.level*.7*.6))):x(l.x+Math.cos(g)*h*b,l.z+Math.sin(g)*h*b,.6);else l.lamp==="wall"?x(l.x-Math.sin(g)*(d/2+.05),l.z+Math.cos(g)*(d/2+.05)):x(l.x,l.z);Rn(n,_,l,pu(l,t)),Rn(o.p,m,l,pu(l,t))}if(this.highQuality)for(let l of this.lightSources(e))Mg(o,l,e.floor,e.lightSurface?.blockers??[],cu(e.floor,e.geo.roofUnder));let a=new Ke;a.setAttribute("position",new we(n,3)),a.setAttribute("color",new we(r,3)),e.haloMesh.geometry.dispose(),e.haloMesh.geometry=a,e.haloMesh.visible=n.length>0,e.coneMesh.geometry.dispose(),e.coneMesh.geometry=o.geometry(),e.coneMesh.visible=o.count>0,e.coneTris=s}buildScreens(e){let t=Gd(e.floor,this.parked).furniture.filter(o=>this.screens.has(o.id)),n=t.map(o=>`${o.id}:${o.x},${o.z},${o.rotation},${o.rotation_x??0},${o.rotation_z??0},${o.w},${o.d},${o.h},${o.mount_y??""},${o.mirror?1:0}:${JSON.stringify(this.screens.get(o.id))}`).join(";");if(n===e.screenSig&&e.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(e,t);e.screenSig=n;let r=new Je;for(let o of t){let s=this.screens.get(o.id),a=o.rotation*pt,l=Math.cos(a),c=Math.sin(a),u=xo(o,Rt(e.floor,o)+o.h/2),h=(w,M,E)=>u(o.x+w*l-E*c,M,o.z+w*c+E*l);if(s.faces){let w=Math.max(.05,o.w)*(o.mirror?-1:1),M=Math.max(.05,o.d),E=Math.max(.005,o.h),v=Rt(e.floor,o);for(let S of s.faces){if(S.part==="lights"){let O=gt(o.type),U=Z=>["#e8f4ff","#ff3b4f"].includes(Z.color.toLowerCase());if(O&&O.parts.some(U)){let Z=new J(...S.color.map(K=>Math.min(1,K*(.4+.6*S.level))));Zs(r,O,o,v,Z.getHex(),U)}continue}if(S.part==="cabin"){let O=gt(o.type),U=Z=>Z.color.toLowerCase()==="#13283a"||Z.color==="glass";if(O&&O.parts.some(U)){let Z=new J(...S.color.map(K=>Math.min(1,K*(.3+.5*S.level))));Zs(r,O,o,v,Z.getHex(),U);continue}}if(S.part==="burners"&&gt(o.type)){let O=gt(o.type),U=new J(...S.color.map(Z=>Math.min(1,Z*(.25+.6*S.level))));Zs(r,O,o,v,U.getHex(),mm);continue}if(S.part==="burners"){let O=new J(...S.color.map(Z=>Math.min(1,Z*(.25+.6*S.level)))),U=v+E+.008;for(let[Z,K,Q]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let ee=Z*Math.abs(w)/.6,ae=K*M/.62,H=14;for(let W=0;W<H;W++){let oe=W/H*Math.PI*2,le=(W+1)/H*Math.PI*2;r.tri(h(ee,U,ae),h(ee+Math.cos(oe)*Q,U,ae+Math.sin(oe)*Q),h(ee+Math.cos(le)*Q,U,ae+Math.sin(le)*Q),O)}}continue}if(S.part==="band"||S.part==="cabin"){let O=S.part==="cabin",U=v+E*(O?.6:.42),Z=O?v+E*.86:U+.07,K=new J(...S.color.map(H=>Math.min(1,H*(.3+.45*S.level)))),Q=Math.abs(w)/2+(O?.012:.02),ee=M/2+(O?.012:.02),ae=[[-Q,-ee],[Q,-ee],[Q,ee],[-Q,ee]];for(let H=0;H<4;H++){let W=ae[H],oe=ae[(H+1)%4],le=h(W[0]*Math.sign(w),U,W[1]),Y=h(oe[0]*Math.sign(w),U,oe[1]),se=h(oe[0]*Math.sign(w),Z,oe[1]),ge=h(W[0]*Math.sign(w),Z,W[1]);r.tri(le,Y,se,K),r.tri(le,se,ge,K)}continue}if(S.part==="beacon"){let O=new J(...S.color.map(Y=>Math.min(1,Y*(.25+.45*S.level)))),U=new J(0,0,0),Z=v+E+.01,K=.6+.6*S.level,Q=Math.min(Math.abs(w),M)*.38;for(let[Y,se]of[[Q,0],[0,Q]]){let ge=h(-Y,Z,-se),Fe=h(Y,Z,se),Ae=h(Y*.4,Z+K,se*.4),Pe=h(-Y*.4,Z+K,-se*.4);r.tri(ge,Fe,Ae,O,O,U),r.tri(ge,Ae,Pe,O,U,U)}let ee=Rt(e.floor,{...o,mount_y:0})+.012,ae=Math.abs(w)/2+.03,H=M/2+.03,W=.22+.18*S.level,oe=(Y,se,ge)=>h(Y*(ae+ge),ee,se*(H+ge)),le=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let Y=0;Y<4;Y++){let[se,ge]=le[Y],[Fe,Ae]=le[(Y+1)%4];r.tri(oe(se,ge,0),oe(Fe,Ae,0),oe(Fe,Ae,W),O,O,U),r.tri(oe(se,ge,0),oe(Fe,Ae,W),oe(se,ge,W),O,U,U)}continue}let A=S.part==="right"?.03:-Math.abs(w)/2+.03,k=S.part==="left"?-.03:Math.abs(w)/2-.03,F=v+(S.part==="bottom"?E*.45:E)+.006,R=new J(...S.color.map(O=>Math.min(1,O*(.35+.65*S.level)))),T=new J(0,0,0),P=(O,U,Z=F)=>h(O*Math.sign(w),Z,U),C=[P(A,-M/2+.03),P(k,-M/2+.03),P(k,M/2-.03),P(A,M/2-.03)];r.tri(C[0],C[2],C[1],R),r.tri(C[0],C[3],C[2],R);let D=S.part==="lid"?.025+.02*S.level:.12+.1*S.level,B=R.clone().multiplyScalar(S.part==="lid"?.7:.5),L=[P(A-D,-M/2-D,F+.004),P(k+D,-M/2-D,F+.004),P(k+D,M/2+D,F+.004),P(A-D,M/2+D,F+.004)];for(let O=0;O<4;O++){let U=(O+1)%4;r.tri(C[O],L[U],L[O],B,T,T),r.tri(C[O],C[U],L[U],B,B,T)}}continue}let d=gt(o.type);if(d&&!d.light&&s.ring&&d.parts.some(w=>w.glow)){let w=new J(...s.color.map(M=>Math.min(1,M*(.45+.55*s.level))));Zs(r,d,o,Rt(e.floor,o),w.getHex())}let f=_d(o,e.floor);if(!f)continue;let p=new J(...s.color.map(w=>Math.min(1,w*(.35+.65*s.level)))),_=new J(0,0,0),m=f.z+.004;if(r.tri(h(f.x0,f.y0,m),h(f.x1,f.y0,m),h(f.x1,f.y1,m),p),r.tri(h(f.x0,f.y0,m),h(f.x1,f.y1,m),h(f.x0,f.y1,m),p),s.plain)continue;let g=.18+.12*s.level,y=p.clone().multiplyScalar(.5),x=[h(f.x0,f.y0,m),h(f.x1,f.y0,m),h(f.x1,f.y1,m),h(f.x0,f.y1,m)],b=[h(f.x0-g,f.y0-g,m+.01),h(f.x1+g,f.y0-g,m+.01),h(f.x1+g,f.y1+g,m+.01),h(f.x0-g,f.y1+g,m+.01)];for(let w=0;w<4;w++){let M=(w+1)%4;r.tri(x[w],b[w],b[M],y,_,_),r.tri(x[w],b[M],x[M],y,_,y)}}e.screenMesh.geometry.dispose(),e.screenMesh.geometry=r.geometry(),e.screenMesh.visible=r.count>0,this.updateScreenPictures(e,t)}updateScreenPictures(e,t){let n=new Map(t.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of e.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(e.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),e.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=_d(o,e.floor);if(!a)continue;let l=e.screenPics.get(r);if(!l){let c=new Ne(new Kn(1,1),new et({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},e.screenPics.set(r,l),e.group.add(c);let u=l;new _s().load(s.picture,h=>{if(e.screenPics.get(r)!==u){h.dispose();return}h.colorSpace=Ot,u.texture=h;let d=u.mesh.material;d.map=h,d.needsUpdate=!0,this.placeScreenPicture(u.mesh,o,a,h,Rt(e.floor,o)+o.h/2),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture,Rt(e.floor,o)+o.h/2)}}placeScreenPicture(e,t,n,r,o){let s=r.image,a=s?.width&&s?.height?s.width/s.height:16/9,l=n.x1-n.x0-.04,c=n.y1-n.y0-.04,u=Math.min(l,c*a),h=u/a,d=t.rotation*pt,f=(n.x0+n.x1)/2,p=n.z+.008;e.scale.set(u,h,1),e.rotation.set((t.rotation_x??0)*pt,-d,(t.rotation_z??0)*pt,"YZX");let _=xo(t,o);e.position.set(..._(t.x+f*Math.cos(d)-p*Math.sin(d),(n.y0+n.y1)/2,t.z+f*Math.sin(d)+p*Math.cos(d)))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(e){let t=this.flows.filter(u=>u.floorId===e.floor.id).map(Jd).join(";"),n=[],r=[],o=[],s=[],a=[];for(let u of this.flows){if(u.floorId!==e.floor.id)continue;let h=this.flowPhase.get(Jd(u))??{speed:Yg(u.power),offset:0},d=u.power>.5?Math.min(1,.5+u.power/2500):.22,f=u.color.map(y=>y*d),p=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(p<1e-4)continue;let _=[(u.b[0]-u.a[0])/p,(u.b[1]-u.a[1])/p,(u.b[2]-u.a[2])/p],m=[];if(Math.abs(_[1])<.5){let y=Math.hypot(_[0],_[2])||1;m.push([-_[2]/y,0,_[0]/y])}else m.push([1,0,0],[0,0,1]);let g=this.lowQuality?[[Xg*1.4,1]]:[[u2,.25],[Xg,1]];for(let[y,x]of g)for(let b of m){let w=y/2,M=(v,S)=>[v[0]+b[0]*w*S,v[1]+b[1]*w*S,v[2]+b[2]*w*S],E=[[M(u.a,-1),u.dist,0],[M(u.b,-1),u.dist+p,0],[M(u.b,1),u.dist+p,1],[M(u.a,1),u.dist,1]];for(let v of[0,1,2,0,2,3]){let[S,A,k]=E[v];n.push(S[0],S[1],S[2]),r.push(f[0]*x,f[1]*x,f[2]*x),o.push(A,k),s.push(h.speed),a.push(h.offset)}}}let l=e.flowMesh.geometry;if(t===e.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,h]of[["color",r],["flowSpeed",s],["flowOffset",a]]){let d=l.getAttribute(u);d.array.set(h),d.needsUpdate=!0}e.flowMesh.visible=n.length>0;return}e.flowLayout=t;let c=new Ke;c.setAttribute("position",new we(n,3)),c.setAttribute("color",new we(r,3)),c.setAttribute("uv",new we(o,2)),c.setAttribute("flowSpeed",new we(s,1)),c.setAttribute("flowOffset",new we(a,1)),e.flowMesh.geometry.dispose(),e.flowMesh.geometry=c,e.flowMesh.visible=n.length>0}buildOpenings(e){let t=Fg(e.geo.openings,e.openings,Math.min(e.floor.cut_height,qt(e.floor)-e.floor.elevation),this.productColors);e.frameTris=t.frameTris,e.glassTris=t.glassTris,e.blindTris=t.blindTris;for(let[n,r]of[[e.framesMesh,t.frames],[e.glassMesh,t.glass],[e.blindsMesh,t.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(e=>e.to>.99)}applyHighlight(){for(let e of this.floors){let t=e.geo.floor.getAttribute("color");for(let n of e.geo.roomTris){let r=new J(n.color),o=this.roomTint?.get(n.roomId);o&&r.lerp(new J(...o).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(p2,o?.3:.75);for(let s=n.start*3;s<n.end*3;s++)t.setXYZ(s,r.r,r.g,r.b)}t.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".fp3d-pin"))e.classList.toggle("fp3d-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(e){let t=new mn;for(let h of this.activeFloors()){let d=h.floor.elevation+h.ty;for(let f of h.floor.rooms)for(let[p,_]of f.points)t.expandByPoint(new V(p,d+ft(h.floor,f),_)),t.expandByPoint(new V(p,d+qt(h.floor)-h.floor.elevation,_))}t.isEmpty()&&t.set(new V(-4,0,-4),new V(4,2.5,4)),this.placeGround(),this.weatherBox={x0:t.min.x-6,x1:t.max.x+6,z0:t.min.z-6,z1:t.max.z+6,y0:t.min.y,y1:t.max.y+6},this.applyWeather(),this.placeSky();let n=t.getCenter(new V),r=t.getSize(new V),o=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=t.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;if(u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.keepNext){this.keepNext=!1;let h=this.controls.view;this.controls.flyTo({target:new V(h.target.x,n.y,h.target.z),radius:h.radius,phi:h.phi,theta:h.theta},e);return}this.controls.flyTo({target:n,radius:c?l.radius:o,phi:l?l.phi:.85,theta:l?l.theta:-.6},e)}placeGround(){let e=new mn,t=1/0;for(let s of this.floors){t=Math.min(t,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)e.expandByPoint(new V(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)e.expandByPoint(new V(l,0,c))}if(this.ground.visible=!e.isEmpty()&&!this.lowQuality&&this.theme!=="day",e.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=w2();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=e.getCenter(new V),r=e.getSize(new V),o=jd*Math.ceil((Math.max(r.x,r.z)+16)/jd);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,t-en-.02,n.z)}distanceFor(e){let t=this.camera.fov*pt,n=2*Math.atan(Math.tan(t/2)*this.camera.aspect);return e.length()/2/Math.sin(Math.min(t,n)/2)}rayAt(e,t){let n=this.renderer.domElement.getBoundingClientRect(),r=new vs;return r.setFromCamera(new ke(e/n.width*2-1,-(t/n.height)*2+1),this.camera),r}pick(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=l=>this.customLayers.get(l.floor.id)?.meshes()??[],s=r.flatMap(l=>[l.lampMesh,l.coneMesh,l.framesMesh,l.glassMesh,l.blindsMesh,l.wallMesh,l.floorMesh,...o(l)].filter(c=>c.visible)),a=(l,c)=>l.find(u=>c>=u.start&&c<u.end)?.id;for(let l of n.intersectObjects(s,!1)){if(l.faceIndex==null)continue;let c=l.faceIndex,u=r.find(h=>h.group===l.object.parent||o(h).includes(l.object));if(l.object.userData.furnitureId){if(this.wallMode==="cut"&&l.point.y>u.group.position.y+u.floor.cut_height)continue;let h=this.pickFurniture.get(String(l.object.userData.furnitureId));if(h)return{entity:h};continue}if(l.object===u.lampMesh||l.object===u.coneMesh){let h=a(l.object===u.lampMesh?u.lampTris:u.coneTris,c);if(h)return{entity:h}}else if(l.object===u.framesMesh||l.object===u.blindsMesh||l.object===u.glassMesh){if(this.wallMode==="cut"&&l.face){let f=l.object.geometry.getAttribute("fold")?.getX(l.face.a)??$e;if(f!==$e&&Math.floor(f/16)===0)continue}let h=a(l.object===u.framesMesh?u.frameTris:l.object===u.glassMesh?u.glassTris:u.blindTris,c),d=h?this.pickOpenings.get(h):void 0;if(d)return{entity:d}}else if(l.object===u.wallMesh){let h=a(u.geo.furnitureTris,c),d=h?this.pickFurniture.get(h):void 0;if(d)return{entity:d};if(l.face&&!h){let f=u.wallMesh.geometry.getAttribute("fold")?.getX(l.face.a)??32,p=Math.floor(f/16),_=f%16,m=this.wallMode==="cut"&&p===0,g=(u.mask.glass.value&1<<_)!==0;if(!m){let y=n.ray.direction,x=Math.hypot(y.x,y.z)||1,b=[l.point.x-y.x/x*.3,l.point.z-y.z/x*.3],w=u.floor.rooms.find(M=>M.points.length>=3&&Oe(b,M.points))?.id??null;if(this.roomId!==null){if(w===this.roomId)return{floorId:u.floor.id,roomId:w}}else if(!g&&w)return{floorId:u.floor.id,roomId:w}}}}else if(l.object===u.floorMesh)return{floorId:u.floor.id,roomId:a(u.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),c)??null}}return null}onTap(e,t){let n=this.pick(e,t);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+fu),this.invalidate(),this.options.onDeviceTap?.(n.entity,e,t);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh),...this.customLayers.get(a.floor.id)?.meshes()??[]],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(h=>h.group===a.object.parent||o(h).includes(a.object));if(!l)continue;if(a.object.userData.furnitureId){if(this.wallMode==="cut"&&a.point.y>l.group.position.y+l.floor.cut_height)continue;return{fv:l,id:String(a.object.userData.furnitureId),y:a.point.y}}if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let h=this.furnitureNear(l,a.point.x,a.point.z);if(h)return{fv:l,id:h,y:a.point.y};continue}let u=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(h=>a.faceIndex>=h.start&&a.faceIndex<h.end)?.id;if(u)return{fv:l,id:u,y:a.point.y}}return null}furnitureNear(e,t,n){let r=null;for(let o of e.floor.furniture){let s=o.rotation*pt,a=t-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,u=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,h=Math.max(c,u);h<.25&&(!r||h<r.d)&&(r={id:o.id,d:h})}return r?.id??null}floorPoint(e,t,n,r){let o=this.rayAt(t,n),s=r??e.floor.elevation+e.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(e){this.furnishTypes=e?new Set(e):null}setSurfaceGrab(e){this.surfaceGrab=e}pointerRay(e,t){return this.surfaceRay(e,t)}furnitureIdAt(e,t){return this.furnitureAt(e,t)?.id??null}surfaceRay(e,t){let n=this.rayAt(e,t).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(e,t){if(this.surfaceGrab?.start(this.surfaceRay(e,t)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(e,t),l=s??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(d=>d.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,e,t)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,e,t):this.grabItem(a,s,e,t)}let o=this.furnitureAt(e,t);if(!o){let s=this.pick(e,t);return s&&"entity"in s?this.grabDevice(s.entity,e,t):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,e,t,o.y)}grabItem(e,t,n,r,o){let s=e.floor.furniture.find(h=>h.id===t),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(e,n,r,a);if(!s||!l)return!1;let c,u=this.rayAt(n,r).ray.direction;if(o!==void 0&&-u.y<.34){let h=this.camera.position,d=this.camera.getWorldDirection(new V),f=Math.hypot(d.x,d.z)||1,p=[d.x/f,d.z/f],_=Math.hypot(l[0]-h.x,l[1]-h.z,(a??0)-h.y),m=this.renderer.domElement.getBoundingClientRect().height||1,g=2*_*Math.tan(this.camera.fov*Math.PI/360)/m;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-p[1],p[0]],fwd:p,perPx:g,gain:Math.min(2,1/Math.max(.5,-u.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:e.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(e,t,n){let r=this.devices.find(a=>a.id===e),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,t,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(e),this.options.onDeviceSelect?.(e),!1):(this.deviceGrab={id:e,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(e),this.options.onDeviceSelect?.(e),!0)}setSelectedDevice(e){e!==this.selectedDevice&&this.selectDevice(e)}selectDevice(e){e&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=e;for(let[t,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",t===e)}dragFurniture(e,t){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(e,t));return}let n=this.deviceGrab;if(n){let d=this.floorMap.get(n.floorId),f=this.devices.find(m=>m.id===n.id),p=d&&this.floorPoint(d,e,t);if(!d||!f||!p)return;let _=this.building?.settings.grid??.05;n.x=f.x=Math.round((p[0]+n.offset[0])/_)*_,n.z=f.z=Math.round((p[1]+n.offset[1])/_)*_,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=r.screen,a;if(s){let d=(e-s.x0)*s.perPx,f=(t-s.y0)*s.perPx*s.gain;a=[s.fx+s.right[0]*d-s.fwd[0]*f-r.offset[0],s.fz+s.right[1]*d-s.fwd[1]*f-r.offset[1]]}else a=this.floorPoint(o,e,t,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=o.floor.furniture.find(d=>d.id===r.id),u=Math.round((a[0]+r.offset[0])/l)*l,h=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?eg(o.floor,c,u,h,this.building?.settings.wall_interior??0):[u,h],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let e=this.deviceGrab;this.deviceGrab=null,e?.moved&&this.options.onDeviceMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3);let t=this.grab;this.grab=null,t?.moved&&this.options.onFurnitureMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let e=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],t=new Ft,n;for(let r of e){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(t,o,s,r===this.selectedFurniture?new J(.25,.9,1):new J(1,.71,.28)))}n&&(this.ghost=new Xt(t.geometry(),new jt({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(e,t,n,r){let o=e.p.length,s=this.grab?.id===n.id?this.grab.x:n.x,a=this.grab?.id===n.id?this.grab.z:n.z,l=wo(t.floor,n.x,n.z),c=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,u=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=n.mount_y!=null||gt(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Rt(t.floor,n):c?n.type==="lamp_pendant"?l-n.h-.1:l-u:Rt(t.floor,n),d=n.rotation*pt,f=Math.cos(d),p=Math.sin(d),_=(x,b,w)=>[s+x*f-b*p,w,a+x*p+b*f],m=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let x=0;x<4;x++){let[b,w]=m[x],[M,E]=m[(x+1)%4];e.seg(_(b,w,h+.01),_(M,E,h+.01),r),e.seg(_(b,w,h+u),_(M,E,h+u),r),e.seg(_(b,w,h+.01),_(b,w,h+u),r)}e.seg(_(-n.w/2,n.d/2+.03,h+.02),_(n.w/2,n.d/2+.03,h+.02),new J(1,1,1));let g={...n,x:s,z:a},y=h+n.h/2;if(n.type==="led_strip"&&(Rn(e.p,o,{...g,rotation_x:n.tilt,rotation_z:n.upright?90:0},y),n.upright)){let x=n.w/2-n.h/2;for(let b=o+1;b<e.p.length;b+=3)e.p[b]+=x;y+=x}Rn(e.p,o,g,y)}onHold(e,t){let n=this.pick(e,t);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,e,t)}swipeStart(e,t,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(e,t);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,e,t)!==!0?!1:(this.swipe={entity:o.entity,x:e,y:t},!0)}floorThumbnails(e=200,t=150){let n=this.floors.filter(g=>g.floor.rooms.some(y=>y.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(e*r),s=Math.round(t*r),a=new un(o,s);a.texture.colorSpace=Ot;let l=new li(-1,1,1,-1,.1,400),c=this.floors.map(g=>({fv:g,visible:g.group.visible,y:g.y,o:g.o,standing:g.mask.standing.value,glass:g.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,d=this.renderer.getClearAlpha(),f=new Uint8Array(o*s*4),p=document.createElement("canvas");p.width=o,p.height=s;let _=p.getContext("2d"),m=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let g of n){for(let R of this.floors)R.group.visible=R===g;g.y=0,g.o=1,this.applyFloor(g),g.group.visible=!0,g.mask.standing.value=0,g.mask.glass.value=0;let y=g.floor.rooms.flatMap(R=>R.points),x=g.floor.elevation,b=new mn(new V(Math.min(...y.map(R=>R[0]))-.3,x,Math.min(...y.map(R=>R[1]))-.3),new V(Math.max(...y.map(R=>R[0]))+.3,x+Math.min(g.floor.cut_height,g.floor.height),Math.max(...y.map(R=>R[1]))+.3)),w=b.getCenter(new V),M=-.6,E=.8,v=new V(Math.sin(E)*Math.sin(M),Math.cos(E),Math.sin(E)*Math.cos(M));l.position.copy(w).addScaledVector(v,100),l.lookAt(w),l.updateMatrixWorld();let S=.5,A=.5;for(let R of[b.min.x,b.max.x])for(let T of[b.min.y,b.max.y])for(let P of[b.min.z,b.max.z]){let C=new V(R,T,P).applyMatrix4(l.matrixWorldInverse);S=Math.max(S,Math.abs(C.x)),A=Math.max(A,Math.abs(C.y))}let k=o/s;S/A>k?A=S/k:S=A*k,l.left=-S*1.05,l.right=S*1.05,l.top=A*1.05,l.bottom=-A*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,f);let F=_.createImageData(o,s);for(let R=0;R<s;R++)F.data.set(f.subarray((s-1-R)*o*4,(s-R)*o*4),R*o*4);_.putImageData(F,0,0),m.push({floorId:g.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(d);for(let g of c)g.fv.y=g.y,g.fv.o=g.o,g.fv.mask.standing.value=g.standing,g.fv.mask.glass.value=g.glass,this.applyFloor(g.fv),g.fv.group.visible=g.visible;this.roof&&(this.roof.group.visible=u,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return m}setRobots(e){let t=new Set;for(let n of e){t.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?Dg(n.room,void 0,void 0,n.obstacles):Zd(n.rest),l=a.length?a:Zd(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=h)}),r.motion.path=l,r.motion.next=c,n.room&&!Oe(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Vg[n.mode])}for(let[n,r]of this.robots)t.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(e){if(!this.robotGeo){let r=new Je,o=(a,l,c,u,h)=>{let d=[];for(let f=0;f<20;f++)d.push([Math.cos(f/20*Math.PI*2)*a,Math.sin(f/20*Math.PI*2)*a]);Tt(r,d,l,c,u,h,{aoFrom:0,bottom:!1})};o(.17,.012,.08,2371657,3424863),o(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new et({vertexColors:!0});let s=new Je;Tt(s,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=s.geometry()}let t=new Ct,n=new et({color:Vg[e.mode]});return t.add(new Ne(this.robotGeo,this.robotMat),new Ne(this.robotLedGeo,n)),{info:e,motion:{pos:[...e.rest],heading:e.restHeading,path:[],next:0},group:t,led:n}}stepRobots(e){if(!this.robots.size)return!1;let t=this.robotLast?Math.min(.2,(e-this.robotLast)/1e3):0;this.robotLast=e;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),t>0?n=zg(r.motion,r.info,t)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],xn(o.floor,r.motion.pos[0],r.motion.pos[1]),r.motion.pos[1]),r.group.visible=!r.info.inModel||r.info.mode==="cleaning"||Math.hypot(r.motion.pos[0]-r.info.rest[0],r.motion.pos[1]-r.info.rest[1])>.05,r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(e,t=[]){let n=a=>new J(.25-.2*a,.95-.83*a,1-.7*a),r=new J(0,0,0),o=new J(.3,1,.6),s=.02;for(let a of this.floors){let l=new Je;for(let u of t)u.floorId===a.floor.id&&u.points.forEach(([h,d],f)=>{let p=u.points[f-1];if(p){let _=Math.hypot(h-p[0],d-p[1])||1,m=-(d-p[1])/_*.1,g=(h-p[0])/_*.1;l.tri([p[0]+m,s,p[1]+g],[h+m,s,d+g],[h-m,s,d-g],o,o,o),l.tri([p[0]+m,s,p[1]+g],[h-m,s,d-g],[p[0]-m,s,p[1]-g],o,o,o)}for(let _=0;_<10;_++){let m=_/10*Math.PI*2,g=(_+1)/10*Math.PI*2;l.tri([h,s,d],[h+Math.cos(g)*.35,s,d+Math.sin(g)*.35],[h+Math.cos(m)*.35,s,d+Math.sin(m)*.35],o,r,r)}});let c=null;for(let u of e){if(u.floorId!==a.floor.id)continue;let h=n(u.age);if(c){let d=Math.hypot(u.x-c.x,u.z-c.z)||1,f=-(u.z-c.z)/d*.06,p=(u.x-c.x)/d*.06,_=n(c.age);l.tri([c.x+f,s,c.z+p],[u.x+f,s,u.z+p],[u.x-f,s,u.z-p],_,h,h),l.tri([c.x+f,s,c.z+p],[u.x-f,s,u.z-p],[c.x-f,s,c.z-p],_,h,_)}for(let d=0;d<12;d++){let f=d/12*Math.PI*2,p=(d+1)/12*Math.PI*2;l.tri([u.x,s,u.z],[u.x+Math.cos(p)*.22,s,u.z+Math.sin(p)*.22],[u.x+Math.cos(f)*.22,s,u.z+Math.sin(f)*.22],h,r,r)}c=u}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(e,t=900){this.controls.flyTo(e,t)}lookThrough(e){let t=this.devices.find(c=>c.id===e&&c.model),n=t&&this.floorMap.get(t.floorId);if(!t||!n)return!1;let r=(t.rotation??0)*pt,o=t.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(t.tilt??(o?65:20))*pt)),a=n.floor.elevation+n.ty+(o?(t.top??n.floor.height)-.1:t.y),l=new V(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new V(t.x,a,t.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(e){let t=performance.now()+fu;for(let n of e)this.flashes.set(n,t);e.length&&this.invalidate()}focus(e,t,n,r,o){let s=this.floorMap.get(e);if(s){if(this.controls.flyTo({target:new V(t,s.floor.elevation+s.ty+r,n),radius:5.5,phi:.78},900),o){this.flashes.set(o,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(e){if(this.frame=0,this.disposed)return;let t=this.lastFrame?Math.min(100,e-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,e-this.orbitLast)/1e3),this.orbitLast=e,n=!0):this.orbitLast=0;let r=this.controls.update(e),o=this.stepFloors(t),s=!1;for(let[p,_]of this.customLayers){let m=this.floorMap.get(p);m&&(_.clip(this.wallMode==="cut"?m.floor.cut_height:null,m.group.position.y,m.o),m.o>.02&&(s=_.step(t)||s))}let a=this.stepOpenings(t)||this.stepFridges(t)||s,l=!1;if(this.flashes.size){let p=new Set;for(let[_,m]of this.flashes){let g=this.deviceFloor.get(_);g&&p.add(g),m<=e&&this.flashes.delete(_)}l=this.flashes.size>0;for(let _ of this.floors)p.has(_.floor.id)&&this.buildLamps(_)}let c=this.placeRoof(t),u=this.stepRobots(e),h=this.stepWeather(e),d=r||o||a||l||c,f=[];if((r||this.controls.busy)&&f.push("camera"),o&&f.push("floors"),a&&f.push("openings"),l&&f.push("flash"),c&&f.push("roof"),this.flowActive&&f.push("flow"),this.soundActive&&f.push("sound"),this.poolActive&&f.push("pool"),this.solarActive&&f.push("solar"),this.effectTick&&f.push("effect"),u&&f.push("robot"),n&&f.push("orbit"),this.tintTick&&f.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=d?e:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(e),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(e,f),d&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let p=this.lowQuality?2*Kg:Kg;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=p/1e3,this.effectTick=!0;for(let _ of this.floors)_.o<.02||!this.effectFloors.has(_.floor.id)||(this.buildLamps(_),this.buildGlow(_));this.invalidate()},p)}!d&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!d&&h&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!d&&u&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!d&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*Wg:Wg))}updateWalls(){let e=this.camera.position,t=this.controls.view.target,n=e.x-t.x,r=e.z-t.z,o=Math.hypot(n,r)||1;this.roofDirection.value.set(n/o,(e.y-t.y)/Math.hypot(o,e.y-t.y),r/o);for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((u,h)=>{let d=u?u[0]*n/o+u[1]*r/o>=.25:a;!l&&d&&(c|=1<<h)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let e=this.controls.view,t=this.viewKey;return t[0]===e.target.x&&t[1]===e.target.y&&t[2]===e.target.z&&t[3]===e.radius&&t[4]===e.theta&&t[5]===e.phi?!1:(t[0]=e.target.x,t[1]=e.target.y,t[2]=e.target.z,t[3]=e.radius,t[4]=e.theta,t[5]=e.phi,!0)}place(e,t){let n=t===null;e.hidden!==n&&(e.hidden=n),t!==null&&this.placed.get(e)!==t&&(this.placed.set(e,t),e.style.transform=t)}updateLabels(){let{w:e,h:t}=this.size,n=new V,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,u=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let _ of[a.x0,a.x1])for(let m of[a.z0,a.z1]){n.set(_,u,m).project(this.camera);let g=(n.x+1)/2*e,y=(1-n.y)/2*t;(!l||g<l.x)&&(l={x:g,y}),(!c||g>c.x)&&(c={x:g,y})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let h=s.labelSize.w,d=8+this.labelInset,f=l.x-h-14,p=l.y;f<d&&this.labelInset&&(f=c.x+14,p=c.y),o.push({fv:s,left:Math.max(d,Math.min(e-h-8,f)),y:p,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new V(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?ru(this.controls.view.radius,this.houseRadius,this.keepRoof,this.roofO).lift:0),s.p[2]),u=this.camera.position.clone().sub(c),h=u.length();if(s.near!==void 0&&h>s.near){this.anchorCb(a,0,0,!1,1,!0);return}let d=u.normalize().dot(new V(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let f=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,h)))*s.size;this.anchorCb(a,(n.x+1)/2*e,(1-n.y)/2*t,!f,p,d)}),this.updateDevicePins(e,t);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l+ft(s.floor,c.room),c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}}otherFloor(e){return this.floorId!==null&&e.floor.id!==this.floorId}updateDevicePins(e,t){let n=new V,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null);continue}n.set(o.x,a.floor.elevation+a.y+.9,o.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,l?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let u=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==u&&(this.pinMode.set(s,u),s.classList.toggle("fp3d-dev-full",u==="full"),s.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(s,`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}reportStats(e,t){if(!this.statsOn||!this.options.onStats)return;let n=t.length>0;this.fpsStart||(this.fpsStart=e),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,e-this.lastStatsFrame)),this.lastStatsFrame=n?e:0,this.fpsFrames++;let r=e-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:t,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=g2(this.renderer)}),this.fpsFrames=0,this.fpsStart=e,this.worstFrame=0}}};function g2(i){try{let e=i.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER);return typeof n=="string"?n:null}catch{return null}}function _2(){let e=document.createElement("canvas");e.width=256*3,e.height=256*2;let t=e.getContext("2d"),n=(s,a,l,c,u)=>{t.strokeStyle=`rgba(55,224,255,${u})`,t.beginPath(),t.moveTo(s,a),t.lineTo(l,c),t.stroke()};t.lineWidth=1.5;let r=(s,a,l)=>{t.save(),t.beginPath(),t.rect(s*256,a*256,256,256),t.clip(),l(s*256,a*256),t.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let u=s+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(s+h+.75,c,s+h+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),t.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)t.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new Xn(e);return o.flipY=!1,o.wrapS=Tn,o.wrapT=Tn,o.anisotropy=4,o.colorSpace=Ot,o}function b2(i){let e=new et({map:i,transparent:!0,blending:Nt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},e.customProgramCacheKey=()=>"fp3d-pattern",e}function v2(){let i=document.createElement("canvas");i.width=8,i.height=32;let e=i.getContext("2d");e.fillStyle="#1a2742",e.fillRect(0,0,8,32),e.fillStyle="#223556",e.fillRect(0,4,8,14),e.fillStyle="rgba(55,224,255,0.45)",e.fillRect(0,29,8,2);let t=new Xn(i);return t.wrapS=pr,t.wrapT=pr,t.colorSpace=Ot,t}function Jd(i){let e=t=>Math.round(t*100);return`${i.floorId}:${i.a.map(e).join(",")}>${i.b.map(e).join(",")}`}function Yg(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function y2(i){let e=new et({vertexColors:!0,transparent:!0,blending:Nt,depthWrite:!1,side:ct});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},e.customProgramCacheKey=()=>"fp3d-flow",e}function qg(i,e){let t=i.rooms.map((r,o)=>o),n=r=>t[r]===r?r:t[r]=n(t[r]);for(let[r,o]of e){let s=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(t[Math.max(l,c)]=Math.min(l,c))}return t.map((r,o)=>n(o))}function x2(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new Xn(e);return r.colorSpace=Ot,r}function w2(){let e=jd,t=document.createElement("canvas");t.width=1024,t.height=1024;let n=t.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=e;s++){let a=Math.round(s/e*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new Xn(t);return o.anisotropy=4,o.colorSpace=Ot,o}function $3(i,e){return new ef(i,e)}function $d(i,e,t,n){t=e.top??t;let r=i.p.length;M2(i,e,t,n),Rn(i.p,r,e,pu(e,t))}function pu(i,e){if(i.pivot_y!=null)return i.pivot_y;let[t,,n]=i.size??(i.lamp?mu[i.lamp]:[.3,.3,.3]);return i.lamp&&Qd.has(i.lamp)?e-n/2:(i.base??0)+(i.lamp==="strip"&&i.upright?t:n)/2}function M2(i,e,t,n){let[r,o,s]=e.size??mu[e.lamp],a=e.base??0,l=(e.rotation??0)*pt,c=Math.cos(l),u=Math.sin(l),h=(_,m)=>[e.x+_*c-m*u,e.z+_*u+m*c],d=(_,m,g,y,x,b=14)=>{let w=[];for(let M=0;M<b;M++){let E=M/b*Math.PI*2;w.push([e.x+Math.cos(E)*_,e.z+Math.sin(E)*_])}Tt(i,w,m,g,y,x,{aoFrom:0,bottom:!0})},f=(_,m,g,y,x,b,w,M=w)=>Tt(i,[h(_,g),h(m,g),h(m,y),h(_,y)],x,b,w,M,{aoFrom:0,bottom:!0}),p=Math.max(.05,Math.min(r,o)/2);switch(e.lamp){case"ceiling":d(p*.25,t-.04,t,ut,ut,8),d(p,t-Math.max(.04,s)-.035,t-.04,n,n);break;case"pendant":{let _=Math.max(.4,t-s);d(.06,t-.02,t,ut,ut,8);let m=e.variant==="globe"?_+2*p:e.variant==="drum"?_+.24:_+.2;if(d(.008,m,t-.02,ut,ut,5),e.variant==="globe")for(let y=0;y<7;y++){let x=Math.PI*(y/7),b=Math.PI*((y+1)/7);d(p*Math.max(.2,Math.sin((x+b)/2)),_+p-p*Math.cos(x),_+p-p*Math.cos(b),n,n,14)}else if(e.variant==="cone")for(let y=0;y<4;y++)d(p*(.25+.75*(4-y)/4),_+.06*y,_+.06*(y+1),n,n,16);else e.variant==="drum"?d(p,_,_+.24,n,n,18):(d(p*.35,_+.14,_+.2,n,n,12),d(p,_,_+.14,n,n,16));break}case"downlight":d(p,t-.012,t,ut,ut,12),d(p*.7,t-.02,t-.012,n,n,12);break;case"spot":d(p*.6,t-.02,t,ut,ut,10),d(p,t-Math.max(.06,s),t-.02,ut,ut,12),d(p*.8,t-Math.max(.06,s)-.008,t-Math.max(.06,s),n,n,12);break;case"panel":f(-r/2,r/2,-o/2,o/2,t-Math.max(.015,s),t,ut,ut),f(-r/2+.02,r/2-.02,-o/2+.02,o/2-.02,t-Math.max(.015,s)-.004,t-Math.max(.015,s),n);break;case"uplight":d(Math.max(.1,p*.6),a,a+.03,ut,ut),d(.014,a+.03,a+s-.12,ut,ut,6),d(p,a+s-.14,a+s-.02,ut,ut),d(p*.92,a+s-.02,a+s,n,n);break;case"bollard":d(p,a,a+s-.14,ut,ut,10),d(p*.9,a+s-.14,a+s-.03,n,n,10),d(p*1.1,a+s-.03,a+s,ut,ut,10);break;case"garden":d(.012,a,a+s-.08,ut,ut,5),d(p,a+s-.08,a+s-.01,ut,ut,10),d(p*.8,a+s-.01,a+s,n,n,10);break;case"floor":d(Math.max(.1,p*.7),a,a+.03,ut,ut),d(.014,a+.03,a+s-.28,ut,ut,6),d(p,a+s-.3,a+s,n,n);break;case"table":d(Math.max(.05,p*.55),a,a+.03,ut,ut),d(.012,a+.03,a+s-.16,ut,ut,6),d(p,a+s-.18,a+s,n,n);break;case"wall":{let _=e.base??kc;f(-r/2+.03,r/2-.03,-o/2,-o/2+.02,_,_+s,ut),f(-r/2,r/2,-o/2+.02,o/2,_+s*.15,_+s*.85,n);break}case"strip":{let _=Math.max(.02,s),m=e.base!=null?e.base+_:t-.04;if(!e.roll&&!e.upright){f(-r/2,r/2,-o/2,o/2,m-_,m,n);break}let g=(e.roll??0)*pt,y=Math.cos(g),x=Math.sin(g),b=e.upright?a+r/2:m-_/2,w=(A,k,F)=>{let R=A,T=k*y-F*x,P=k*x+F*y;return e.upright&&([R,T]=[-T,R]),[e.x+R*c-P*u,b+T,e.z+R*u+P*c]},M=[w(-r/2,-_/2,-o/2),w(r/2,-_/2,-o/2),w(r/2,-_/2,o/2),w(-r/2,-_/2,o/2),w(-r/2,_/2,-o/2),w(r/2,_/2,-o/2),w(r/2,_/2,o/2),w(-r/2,_/2,o/2)],E=new J(n),v=[e.x,b,e.z],S=(A,k,F,R)=>{let[T,P,C]=[M[A],M[k],M[F]],D=[(P[1]-T[1])*(C[2]-T[2])-(P[2]-T[2])*(C[1]-T[1]),(P[2]-T[2])*(C[0]-T[0])-(P[0]-T[0])*(C[2]-T[2]),(P[0]-T[0])*(C[1]-T[1])-(P[1]-T[1])*(C[0]-T[0])],B=[T[0]-v[0],T[1]-v[1],T[2]-v[2]],L=D[0]*B[0]+D[1]*B[1]+D[2]*B[2]<0,[O,U,Z,K]=L?[M[R],M[F],M[k],M[A]]:[M[A],M[k],M[F],M[R]];i.tri(O,U,Z,E,E,E),i.tri(O,Z,K,E,E,E)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{Fd as FloorMap,ef as FloorplanViewer,Ld as WalkCamera,$3 as createViewer,F3 as funLib,s2 as furnitureFront,o2 as furniturePreview,m2 as isLowEnd,$d as pushLampModel};
